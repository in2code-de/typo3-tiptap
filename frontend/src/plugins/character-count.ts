import { CharacterCount } from '@tiptap/extensions'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

/**
 * This plugin adds support for limiting the number of
 * allowed characters in the editor.
 */
export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'character-count',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      limit: z.number().min(1),
    }),
  })

  defineTipTapPlugin({
    extensions: [
      CharacterCount.configure({
        limit: config.limit,
      }),
    ],
  })
}
