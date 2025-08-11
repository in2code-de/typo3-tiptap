import Underline from '@tiptap/extension-underline'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for underlined text in the editor.
 * Underline extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    extension: [Underline],
    commands: [
      {
        id: 'underline',
        label: 'Underline',
        iconIdentifier: 'underline',
        action: ({ editor }) => {
          editor.chain().focus().toggleUnderline().run()
        },
        isActive: ({ editor }) => editor.isActive('underline'),
        isDisabled: ({ editor }) => !editor.can().toggleUnderline(),
      },
    ],
  })
}
