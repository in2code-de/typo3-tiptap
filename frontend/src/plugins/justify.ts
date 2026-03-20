import type { Editor } from '@tiptap/core'
import type { TipTapPluginCommand } from '../schema/plugins.ts'
import { objectKeys, objectMap } from '@antfu/utils'
import { Extension } from '@tiptap/core'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

const ALIGNMENT_TYPES = ['left', 'center', 'right'] as const
type AlignmentType = typeof ALIGNMENT_TYPES[number]

const ALIGNABLE_NODE_TYPES = ['heading', 'paragraph'] as const

const DEFAULT_CLASSES: Record<AlignmentType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const ALIGNMENT_LABELS: Record<AlignmentType, string> = {
  left: 'Align Left',
  center: 'Align Center',
  right: 'Align Right',
}

function toggleAlignment(editor: Editor, alignment: AlignmentType) {
  const isActive = editor.isActive({ textAlign: alignment })
  const newAlignment = isActive ? null : alignment

  const chain = editor.chain().focus()
  ALIGNABLE_NODE_TYPES.forEach(nodeType => chain.updateAttributes(nodeType, { textAlign: newAlignment }))
  return chain.run()
}

/**
 * Text alignment plugin using CSS classes for TYPO3 compatibility
 *
 * Each alignment accepts: a class name string, false to disable, or omit to use the default.
 */
export default function (unsafeConfig: unknown): void {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'justify',
    config: unsafeConfig,
    getValidationSchema: (z) => {
      const alignmentValueSchema = z.union([
        z.string().regex(/^[\w-]+$/, 'Invalid CSS class name'),
        z.literal(false),
      ]).optional()

      return z.object({
        alignments: z.object({
          left: alignmentValueSchema,
          center: alignmentValueSchema,
          right: alignmentValueSchema,
        }).refine(
          obj => ALIGNMENT_TYPES.some(key => obj[key] !== false),
          { message: 'At least one alignment must be enabled' },
        ),
      })
    },
  })

  // Setup alignment class mapping, if not configured or overwritten by user fallback to default
  const alignments = config.alignments as Record<AlignmentType, string | false | undefined>
  const alignmentToClass = objectMap(alignments, (key, value) => {
    if (value === false)
      return undefined
    return [key, typeof value === 'string' ? value : DEFAULT_CLASSES[key]]
  })

  const enabledAlignments = objectKeys(alignmentToClass)

  const classToAlignment = objectMap(alignmentToClass, (key, value) => [value, key]) as Record<string, AlignmentType>

  const TextAlignClass = Extension.create({
    name: 'textAlignClass',

    addGlobalAttributes() {
      return [{
        types: [...ALIGNABLE_NODE_TYPES],
        attributes: {
          textAlign: {
            default: null,
            parseHTML: (element) => {
              for (const cls of element.classList) {
                if (classToAlignment[cls]) {
                  // Remove the alignment class so styles plugin doesn't capture it
                  element.classList.remove(cls)
                  return classToAlignment[cls]
                }
              }
              return null
            },
            renderHTML: (attributes) => {
              const alignment = attributes.textAlign as AlignmentType | null
              if (!alignment || !alignmentToClass[alignment]) {
                return {}
              }
              return { class: alignmentToClass[alignment] }
            },
          },
        },
      }]
    },

  })

  const commands: TipTapPluginCommand[] = enabledAlignments.map(alignment => ({
    id: `justify-${alignment}`,
    label: ALIGNMENT_LABELS[alignment],
    iconIdentifier: `justify-${alignment}`,
    position: {
      toolbarGroupId: 'textAlignment',
      bubbleMenuGroupId: 'textAlignment',
    },
    status: {
      isActive: ({ editor }) => editor.isActive({ textAlign: alignment }),
      isDisabled: ({ editor }) =>
        ALIGNABLE_NODE_TYPES.every(nodeType =>
          !editor.can().updateAttributes(nodeType, { textAlign: alignment }),
        ),
    },
    onExecute: ({ editor }) => {
      toggleAlignment(editor, alignment)
    },
  }))

  defineTipTapPlugin({
    extensions: [TextAlignClass],
    commands,
  })
}
