import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for bold text in the editor.
 * Bold extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'bold',
        label: 'Bold',
        iconIdentifier: 'bold',
        action: ({ editor }) => {
          editor.chain().focus().toggleBold().run()
        },
        isActive: ({ editor }) => editor.isActive('bold'),
        isDisabled: ({ editor }) => !editor.can().toggleBold(),
        isAvailableInBubbleMenu: true,
      },
    ],
  })
}
