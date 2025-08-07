import Italic from '@tiptap/extension-italic'
import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    extension: [Italic],
    commands: [
      {
        id: 'italic',
        label: 'Italic',
        iconIdentifier: 'italic',
        action: ({ editor }) => {
          editor.chain().focus().toggleItalic().run()
        },
      },
    ],
  })
}
