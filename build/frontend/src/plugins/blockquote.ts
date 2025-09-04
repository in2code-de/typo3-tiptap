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
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: false,
        },
        status: {
          isActive: ({ editor }) => editor.isActive('blockquote'),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleBlockquote().run()
        },
      },
    ],
  })
}
