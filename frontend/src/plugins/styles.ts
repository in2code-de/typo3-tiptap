import type { Commands, Editor } from '@tiptap/core'
import type { EditorState } from '@tiptap/pm/state'
import type { Mark, Node as ProseMirrorNode } from 'prosemirror-model'
import type { TipTapBooleanCallbackFunction, TipTapPluginCommand } from '../schema/plugins.ts'
import { throttle } from '@antfu/utils'
import { Extension } from '@tiptap/core'
import { ref } from 'vue'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'
import { stylesPluginConfigSchema } from '../schema/plugin/styles.ts'
import { createThrottledCache } from '../utils.ts'

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
  if (node.type.name === 'heading' && node.attrs?.level) {
    return `h${node.attrs.level}`
  }

  if (node.type.spec.parseDOM?.[0] && typeof node.type.spec.parseDOM[0] === 'object' && 'tag' in node.type.spec.parseDOM[0]) {
    return node.type.spec.parseDOM[0].tag || node.type.name
  }

  return node.type.name
}

function getMarkTagName(mark: Mark): string | null {
  if (mark.type.spec.parseDOM?.[0] && typeof mark.type.spec.parseDOM[0] === 'object' && 'tag' in mark.type.spec.parseDOM[0]) {
    // some tags include attributes, e.g. 'a[href]', we don't want those
    return mark.type.spec.parseDOM[0].tag.split('[')[0]
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
        tagName, // 'a' - from the mark
        mark: markWithTag, // the actual mark
        // Don't include node when returning a mark
        // This makes it clear we're dealing with a mark, not a node
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
        // No mark when returning a node
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

// Define the command return type
interface CommandProps {
  editor: Editor
  commands: Commands
}

// Define the extension's command methods
interface UniversalClassCommands {
  setNodeClass: (className: string) => (props: CommandProps) => boolean
  addNodeClass: (className: string) => (props: CommandProps) => boolean
  removeNodeClass: (className: string) => (props: CommandProps) => boolean
  toggleNodeClass: (className: string) => (props: CommandProps) => boolean
  hasNodeClass: (className: string) => (props: CommandProps) => boolean
}

// Extend the Commands interface to include our custom commands
declare module '@tiptap/core' {
  interface Commands {
    universalClass: UniversalClassCommands
  }
}

// List of all TipTap types that should support classes
const supportedClassTipTapTypes = [
  // Core block nodes (from StarterKit and common extensions)
  'paragraph',
  'heading',
  'blockquote',
  'codeBlock',
  'bulletList',
  'orderedList',
  'listItem',
  'horizontalRule',
  'hardBreak',

  // Task list extension
  'taskList',
  'taskItem',

  // Table extension
  'table',
  'tableRow',
  'tableCell',
  'tableHeader',

  // Media extensions
  'image',
  'video',
  'audio',
  'figure',
  'figcaption',

  // Typography extensions
  'superscript',
  'subscript',

  // Layout extensions
  'columns',
  'column',
  'details',
  'summary',
  'div',
  'span',

  // Text marks (inline formatting)
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
  'link',
]

const StyleExtension = Extension.create({
  name: 'styles',

  addGlobalAttributes() {
    return [
      {
        // List all node types that should support classes
        types: supportedClassTipTapTypes,
        attributes: {
          class: {
            default: null,
            parseHTML: element => element.getAttribute('class') || null,
            renderHTML: (attributes) => {
              if (!attributes.class) {
                return {}
              }
              return { class: attributes.class }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      toggleNodeClass: (className: string) => ({ editor, commands }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()

        const result = getSelectedParentNode(editor.state)

        // is mark
        if (result.mark) {
          // First extend selection to cover the entire mark
          commands.extendMarkRange(result.mark.type)

          // Now update the attributes on the entire mark
          const currentClass: string = result.mark.attrs.class || ''

          // Normalize the class strings for comparison
          const normalizedCurrent = currentClass.trim()
          const normalizedNew = className.trim()

          // If the exact same classes are present, remove them (toggle off)
          if (normalizedCurrent === normalizedNew) {
            return commands.updateAttributes(result.mark.type.name, { class: null })
          }

          // Otherwise, replace completely with new classes
          return commands.updateAttributes(result.mark.type.name, {
            class: normalizedNew.length > 0 ? normalizedNew : null,
          })
        }
        else if (result.node) {
          const currentClass: string = node.attrs.class || ''

          // Normalize the class strings for comparison
          const normalizedCurrent = currentClass.trim()
          const normalizedNew = className.trim()

          // If the exact same classes are present, remove them (toggle off)
          if (normalizedCurrent === normalizedNew) {
            return commands.updateAttributes(node.type.name, { class: null })
          }

          // Otherwise, replace completely with new classes
          return commands.updateAttributes(node.type.name, {
            class: normalizedNew.length > 0 ? normalizedNew : null,
          })
        }

        return false
      },
      hasNodeClass: (className: string) => ({ editor }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()
        const result = getSelectedParentNode(editor.state)

        if (result.mark) {
          const currentClass: string = result.mark.attrs.class || ''
          const classes: string[] = currentClass.split(' ').filter(Boolean).toSorted()

          // Handle space-separated classes in className parameter
          const classesToCheck = className.split(' ').filter(Boolean).toSorted()

          // Check if all classes are present
          return classesToCheck.every(c => classes.includes(c))
        }
        else if (result.node) {
          const currentClass: string = node.attrs.class || ''
          const classes: string[] = currentClass.split(' ').filter(Boolean).toSorted()

          // Handle space-separated classes in className parameter
          const classesToCheck = className.split(' ').filter(Boolean).toSorted()

          // Check if all classes are present
          return classesToCheck.every(c => classes.includes(c))
        }

        return false
      },
    }
  },
})

/**
 * This plugin adds support for italic text in the editor.
 * Italic extension installed by TipTap starterkit
 */
export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'styles',
    config: unsafeConfig,
    getValidationSchema: () => stylesPluginConfigSchema,
  })

  const currentSelectedParentNode = ref<ParentNodeResult>()

  const generateId = (id: string) => id.replaceAll(' ', '_').toLowerCase()

  defineTipTapPlugin({
    extensions: [
      StyleExtension,
    ],
    commands: config.styles.map((style, index) => {
      const isActiveThrottledAndCached = createThrottledCache(({ editor }: { editor: Editor }) => {
        return editor.commands.hasNodeClass(style.classes)
      }, 300) as unknown as TipTapBooleanCallbackFunction

      const isVisibleThrottledAndCached = createThrottledCache(() => {
        return currentSelectedParentNode.value?.tagName === style.element
      }, 300) as unknown as TipTapBooleanCallbackFunction

      const joinedNodeClasses = style.classes

      return {
        id: generateId(`style:${style.name}`),
        label: style.name,
        iconIdentifier: 'styles',
        position: {
          toolbarGroupId: 'styles',
          bubbleMenuGroupId: 'styles',
        },
        status: {
          isActive: isActiveThrottledAndCached!,
          isVisible: isVisibleThrottledAndCached!,
        },
        onExecute: ({ editor }) => {
          editor
            .chain()
            .focus()
            .toggleNodeClass(joinedNodeClasses)
            .run()
        },
        hooks: {
          onEditorMounted: index === 0
            ? ({ editor }) => {
                const debouncedEmitPositionChange = throttle(250, () => {
                  const result = getSelectedParentNode(editor.state)
                  currentSelectedParentNode.value = result
                  editor.emit('parentNodeChanged', result)
                })

                editor.on('selectionUpdate', debouncedEmitPositionChange)
              }
            : undefined,
        },
      } satisfies TipTapPluginCommand
    }),
  })
}
