import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for strikethrough text in the editor.
 * Strike extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'strike',
        label: 'strike',
        iconIdentifier: 'strike',
        action: ({ editor }) => {
          editor.chain().focus().toggleStrike().run()
        },
        isActive: ({ editor }) => editor.isActive('strike'),
        isDisabled: ({ editor }) => !editor.can().toggleStrike(),
        isAvailableInBubbleMenu: true,
      },
    ],
  })
}
