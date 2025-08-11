import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for italic text in the editor.
 * Italic extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'italic',
        label: 'Italic',
        iconIdentifier: 'italic',
        action: ({ editor }) => {
          editor.chain().focus().toggleItalic().run()
        },
        isActive: ({ editor }) => editor.isActive('italic'),
        isDisabled: ({ editor }) => !editor.can().toggleItalic(),
      },
    ],
  })
}
