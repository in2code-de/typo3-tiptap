import Code from '@tiptap/extension-code'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for code formatting in the editor.
 */
export default function () {
  defineTipTapPlugin({
    extension: [Code],
    commands: [
      {
        id: 'code',
        label: 'Code',
        iconIdentifier: 'code',
        action: ({ editor }) => {
          editor.chain().focus().toggleBold().run()
        },
        isActive: ({ editor }) => editor.isActive('bold'),
        isDisabled: ({ editor }) => !editor.can().toggleBold(),
      },
    ],
  })
}
