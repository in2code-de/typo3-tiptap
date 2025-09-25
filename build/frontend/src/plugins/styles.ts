import type { Commands, Editor } from '@tiptap/core'
import type { EditorState } from '@tiptap/pm/state'
import type { Mark, Node as ProseMirrorNode } from 'prosemirror-model'
import type { TipTapCommand, TipTapStatusCallbackFn } from '../types'
import { throttle } from '@antfu/utils'
import { Extension } from '@tiptap/core'
import { ref } from 'vue'
import { defineTipTapPlugin } from '../configuration.ts'
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

// Comprehensive static list of all common Tiptap node and mark types
const tiptapElementTypes = [
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

  // Collaboration extensions
  'mention',
  'suggestion',

  // Custom block extensions
  'callout',
  'alert',
  'card',
  'panel',
  'embed',
  'iframe',
  'youtube',
  'twitter',

  // Text marks (inline formatting)
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
  'link',
  'textStyle',
  'highlight',
  'color',
  'fontSize',
  'fontFamily',
  'backgroundColor',

  // Additional marks
  'smallcaps',
  'keyboard',
  'mark',

  // Math extensions
  'mathInline',
  'mathBlock',

  // Code extensions
  'codeBlockLowlight',
  'codeBlockShiki',

  // Dropcursor and Gapcursor (for spacing)
  'dropcursor',
  'gapcursor',

  // Comments and annotations
  'comment',
  'annotation',

  // Focus extensions
  'focus',

  // Selection extensions
  'selection',

  // Placeholder
  'placeholder',
]

const UniversalClassExtension = Extension.create({
  name: 'universalClass',

  addGlobalAttributes() {
    return [
      {
        // List all node types that should support classes
        types: tiptapElementTypes,
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
      setNodeClass: (className: string) => ({ editor }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()

        return editor
          .chain()
          .focus()
          .updateAttributes(node.type.name, { class: className })
          .run()
      },

      addNodeClass: (className: string) => ({ editor, commands }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()
        const currentClass: string = node.attrs.class || ''
        const classes: string[] = currentClass.split(' ').filter(Boolean)

        if (!classes.includes(className)) {
          const newClass: string = [...classes, className].join(' ')
          return commands.updateAttributes(node.type.name, { class: newClass })
        }
        return true
      },

      removeNodeClass: (className: string) => ({ editor, commands }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()
        const currentClass: string = node.attrs.class || ''
        const newClass: string = currentClass
          .split(' ')
          .filter((c: string) => c && c !== className)
          .join(' ')

        return commands.updateAttributes(node.type.name, { class: newClass || null })
      },

      toggleNodeClass: (className: string) => ({ editor, commands }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()
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
      },

      hasNodeClass: (className: string) => ({ editor }: CommandProps): boolean => {
        const { selection } = editor.state
        const node = selection.$from.node()
        const currentClass: string = node.attrs.class || ''
        const classes: string[] = currentClass.split(' ').filter(Boolean)

        // Handle space-separated classes in className parameter
        const classesToCheck = className.split(' ').filter(Boolean)

        // Check if all classes are present
        return classesToCheck.every(c => classes.includes(c))
      },
    }
  },
})

const styles: {
  name: string
  element: string
  classes: string[]
}[] = [
  {
    name: 'Orange Title h1',
    element: 'h1',
    classes: ['text-3xl', 'font-bold', 'text-orange-600'],
  },
  {
    name: 'Orange Title H2',
    element: 'h2',
    classes: ['text-3xl', 'font-bold', 'text-orange-600'],
  },
  {
    name: 'Blue Title H3',
    element: 'h3',
    classes: ['text-2xl', 'font-bold', 'text-blue-600'],
  },
  {
    name: 'Link Blue',
    element: 'a',
    classes: ['text-blue-600', 'underline'],
  },
  {
    name: 'Green Title H4',
    element: 'h4',
    classes: ['text-xl', 'font-bold', 'text-green-600'],
  },
  {
    name: 'Paragraph Green',
    element: 'p',
    classes: ['text-green-600'],
  },
  {
    name: 'Paragraph Blue',
    element: 'p',
    classes: ['text-blue-600'],
  },
  {
    name: 'Unordered List Blue',
    element: 'ul',
    classes: ['list-disc', 'list-inside', 'text-blue-600'],
  },
  {
    name: 'Ordered List Blue',
    element: 'ol',
    classes: ['list-disc', 'list-inside', 'text-blue-600'],
  },
  {
    name: 'Strong Blue',
    element: 'strong',
    classes: ['text-blue-600'],
  },
]

/**
 * This plugin adds support for italic text in the editor.
 * Italic extension installed by TipTap starterkit
 */
export default function () {
  const currentSelectedParentNode = ref<ParentNodeResult>()

  const generateId = (id: string) => id.replaceAll(' ', '_').toLowerCase()

  defineTipTapPlugin({
    extensions: [
      UniversalClassExtension,
    ],
    commands: styles.map((style, index) => {
      const isActiveThrottledAndCached = createThrottledCache(({ editor }: { editor: Editor }) => {
        return editor.commands.hasNodeClass(style.classes.join(' '))
      }, 300)

      const isVisibleThrottledAndCached = createThrottledCache(() => {
        return currentSelectedParentNode.value?.tagName === style.element
      }, 300)

      const joinedNodeClasses = style.classes.join(' ')

      return {
        id: generateId(`style:${style.name}`),
        label: style.name,
        iconIdentifier: 'styles',
        position: {
          toolbarGroupId: 'styles',
          bubbleMenuGroupId: 'styles',
        },
        status: {
          isActive: isActiveThrottledAndCached as unknown as TipTapStatusCallbackFn,
          isVisible: isVisibleThrottledAndCached as unknown as TipTapStatusCallbackFn,
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
      } satisfies TipTapCommand
    }),
  })
}
