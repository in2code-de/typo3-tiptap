import Underline from '@tiptap/extension-underline'
import { defineTipTapPlugin } from '../configuration.ts'

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
      },
    ],
  })
}
