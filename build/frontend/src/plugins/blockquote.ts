import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for blockquotes in the editor.
 * Blockquote extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'blockquote',
        label: 'Blockquote',
        iconIdentifier: 'blockquote',
        action: ({ editor }) => {
          editor.chain().focus().toggleBlockquote().run()
        },
        isActive: ({ editor }) => editor.isActive('blockquote'),
      },
    ],
  })
}
