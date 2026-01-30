import type { TipTapPluginCommand } from '../schema/plugins.ts'
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

const ALIGNMENT_SHORTCUTS: Record<AlignmentType, string> = {
  left: 'Mod-Shift-l',
  center: 'Mod-Shift-e',
  right: 'Mod-Shift-r',
}

/**
 * Text alignment plugin using CSS classes for TYPO3 compatibility
 *
 * @example Enable with defaults
 * alignments: { left: true, center: true, right: true }
 *
 * @example With Tailwind classes
 * alignments: { left: "text-left", center: "text-center", right: "text-right" }
 */
export default function (unsafeConfig: unknown): void {
  const safeClassName = (z: typeof import('zod').z) =>
    z.string().regex(/^[\w-]+$/, 'Invalid CSS class name')

  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'justify',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      alignments: z.object({
        left: z.union([safeClassName(z), z.boolean()]).optional(),
        center: z.union([safeClassName(z), z.boolean()]).optional(),
        right: z.union([safeClassName(z), z.boolean()]).optional(),
      }).refine(
        obj => obj.left || obj.center || obj.right,
        { message: 'At least one alignment must be configured' },
      ),
    }),
  })

  // Build alignment → class mapping for enabled alignments only
  const alignmentToClass = Object.fromEntries(
    ALIGNMENT_TYPES
      .filter(key => config.alignments[key])
      .map((key) => {
        const value = config.alignments[key]
        const className = typeof value === 'string' && value.trim() ? value.trim() : DEFAULT_CLASSES[key]
        return [key, className]
      }),
  ) as Partial<Record<AlignmentType, string>>

  const enabledAlignments = Object.keys(alignmentToClass) as AlignmentType[]

  // Reverse lookup: class → alignment
  const classToAlignment = Object.fromEntries(
    Object.entries(alignmentToClass).map(([k, v]) => [v, k]),
  ) as Record<string, AlignmentType>

  // All alignment classes for filtering
  const allAlignmentClasses = new Set(Object.values(alignmentToClass))

  const TextAlignClass = Extension.create({
    name: 'textAlignClass',

    addGlobalAttributes() {
      return [{
        types: [...ALIGNABLE_NODE_TYPES],
        attributes: {
          textAlign: {
            default: null,
            parseHTML: (element) => {
              const alignmentClass = [...element.classList].find(cls => classToAlignment[cls])
              if (alignmentClass) {
                // Remove alignment classes from element so styles plugin doesn't capture them
                allAlignmentClasses.forEach(cls => element.classList.remove(cls))
                return classToAlignment[alignmentClass]
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

    addKeyboardShortcuts() {
      return Object.fromEntries(
        enabledAlignments.map(alignment => [
          ALIGNMENT_SHORTCUTS[alignment],
          () => this.editor.commands.updateAttributes('paragraph', { textAlign: alignment })
            || this.editor.commands.updateAttributes('heading', { textAlign: alignment }),
        ]),
      )
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
        !editor.can().updateAttributes('paragraph', { textAlign: alignment })
        && !editor.can().updateAttributes('heading', { textAlign: alignment }),
    },
    onExecute: ({ editor }) => {
      const isActive = editor.isActive({ textAlign: alignment })
      const newAlignment = isActive ? null : alignment

      // Use single chain to update both node types atomically
      editor
        .chain()
        .focus()
        .updateAttributes('paragraph', { textAlign: newAlignment })
        .updateAttributes('heading', { textAlign: newAlignment })
        .run()
    },
  }))

  defineTipTapPlugin({
    extensions: [TextAlignClass],
    commands,
  })
}
