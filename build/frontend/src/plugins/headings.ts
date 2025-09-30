import type { Level } from '@tiptap/extension-heading'
import Heading from '@tiptap/extension-heading'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'headings',
    config: unsafeConfig,
    getValidationSchema: (z) => {
      const headingLevelSchema = z.custom<Level[]>((val) => {
        if (!Array.isArray(val) || val.length === 0)
          return false

        const validHeadingLevels = [1, 2, 3, 4, 5, 6]
        return val.some(v => validHeadingLevels.includes(v))
      }, {
        message: 'Must be an array of numbers between 1 and 6 with at least one element',
      })

      return z.object({
        levels: headingLevelSchema,
      })
    },
  })

  defineTipTapPlugin({
    extensions: [
      Heading.configure({
        levels: config.levels,
      }),
    ],
    commands: config.levels.map(level => ({
      id: `heading-${level}`,
      label: `Heading ${level}`,
      iconIdentifier: `heading-${level}`,
      position: {
        toolbarGroupId: 'heading',
        bubbleMenuGroupId: 'heading',
      },
      status: {
        isActive: ({ editor }) => editor.isActive('heading', { level }),
        isDisabled: ({ editor }) => !editor.can().toggleHeading({ level }),
      },
      onExecute: ({ editor }) => {
        editor
          .chain()
          .focus()
          .unsetMark('bold') // remove bold mark, when we switch headings
          .toggleHeading({ level })
          .updateAttributes('heading', { class: null })
          .run()
      },
    })),
  })
}
