import type { Editor } from '@tiptap/core'
import type { TipTapPluginCommand } from '../schema/plugins.ts'
import { Extension } from '@tiptap/core'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

const ALIGNMENT_TYPES = ['left', 'center', 'right'] as const
type AlignmentType = typeof ALIGNMENT_TYPES[number]

const ALIGNABLE_NODE_TYPES = ['heading', 'paragraph'] as const

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
export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'justify',
    config: unsafeConfig ?? {},
    getValidationSchema: z => z.object({
      left: z.union([z.string(), z.literal(false)]).default('text-left'),
      center: z.union([z.string(), z.literal(false)]).default('text-center'),
      right: z.union([z.string(), z.literal(false)]).default('text-right'),
    }),
  })

  const alignmentToClass: Record<string, string> = {}
  const classToAlignment: Record<string, AlignmentType> = {}

  for (const key of ALIGNMENT_TYPES) {
    if (config[key] === false)
      continue
    alignmentToClass[key] = config[key]
    classToAlignment[config[key]] = key
  }

  const enabledAlignments = Object.keys(alignmentToClass) as AlignmentType[]

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

  return defineTipTapPlugin({
    extensions: [TextAlignClass],
    commands,
  })
}
