import type { EditorState } from '@tiptap/pm/state'
import type { Mark, Node as ProseMirrorNode } from 'prosemirror-model'
import { throttle } from '@antfu/utils'
import { defineTipTapPlugin } from '../configuration.ts'

declare module '@tiptap/core' {
  interface EditorEvents {
    parentNodeChanged: ParentNodeResult
  }
}

export interface ParentNodeResult {
  tagName: string
  node?: ProseMirrorNode
  mark?: Mark
}

function getTagName(node: ProseMirrorNode): string {
  if (node.type.spec.parseDOM?.[0] && typeof node.type.spec.parseDOM[0] === 'object' && 'tag' in node.type.spec.parseDOM[0]) {
    return node.type.spec.parseDOM[0].tag || node.type.name
  }
  return node.type.name
}

function getMarkTagName(mark: Mark): string | null {
  if (mark.type.spec.parseDOM?.[0] && typeof mark.type.spec.parseDOM[0] === 'object' && 'tag' in mark.type.spec.parseDOM[0]) {
    return mark.type.spec.parseDOM[0].tag || null
  }
  return null
}

function getSelectedParentNode(state: EditorState): ParentNodeResult {
  const { selection } = state
  const { from, to } = selection
  const $from = state.doc.resolve(from)
  const $to = state.doc.resolve(to)

  // Only work within same parent (covers cursor and text selections)
  if ($from.sameParent($to)) {
    // Get marks to check based on selection type
    let marksToCheck: Mark[] = []

    if (from === to) {
      // Cursor position
      marksToCheck = [...$from.marks()]
    }
    else {
      // Text selection - check marks inside selection (not at boundaries)
      const checkPos = from + 1 < to ? from + 1 : from
      try {
        marksToCheck = [...state.doc.resolve(checkPos).marks()]

        // Verify marks exist throughout selection
        if (to - from > 1) {
          for (let pos = from + 1; pos < to; pos++) {
            const posMarks = [...state.doc.resolve(pos).marks()]
            marksToCheck = marksToCheck.filter(mark =>
              posMarks.some(posMark => posMark.type === mark.type),
            )
          }
        }
      }
      catch {
        marksToCheck = [...$from.marks()]
      }
    }

    // Find mark with own HTML tag (not span)
    const markWithTag = marksToCheck.find((mark) => {
      const tagName = getMarkTagName(mark)
      return tagName && tagName !== 'span'
    })

    if (markWithTag) {
      const tagName = getMarkTagName(markWithTag)!
      return {
        node: $from.parent,
        tagName,
        mark: markWithTag,
      }
    }

    // Fallback to block node
    for (let depth = $from.depth; depth >= 0; depth--) {
      const node = $from.node(depth)
      if (node.type.name === 'doc')
        continue

      return {
        node,
        tagName: getTagName(node),
      }
    }
  }

  // Multi-node selection fallback
  for (let depth = Math.min($from.depth, $to.depth); depth >= 0; depth--) {
    const node = $from.node(depth)
    if (node.type.name === 'doc')
      continue

    return {
      node,
      tagName: getTagName(node),
    }
  }

  // Document fallback
  return {
    node: state.doc,
    tagName: 'doc',
  }
}

/**
 * This plugin adds support for italic text in the editor.
 * Italic extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'italic',
        label: 'Italic',
        iconIdentifier: 'italic',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('italic'),
          isDisabled: ({ editor }) => !editor.can().toggleItalic(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleItalic().run()
        },
        hooks: {
          onEditorMounted: ({ editor }) => {
            const debouncedEmitPositionChange = throttle(250, () => {
              const result = getSelectedParentNode(editor.state)
              editor.emit('parentNodeChanged', result)
            })

            editor.on('selectionUpdate', debouncedEmitPositionChange)
            // editor.on('transaction', emitPositionChange)
          },
        },
      },
    ],
  })
}
