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

  function getAccurateTextLength(htmlString: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    // Use innerText instead of textContent
    // innerText respects CSS rendering and whitespace collapsing
    // eslint-disable-next-line unicorn/prefer-dom-node-text-content
    return doc.body.innerText.length
  }

  defineTipTapPlugin({
    extensions: [
      CharacterCount.configure({
        limit: config.limit,
        textCounter: (text) => {
          return getAccurateTextLength(text)
        },
      }),
    ],
  })
}
