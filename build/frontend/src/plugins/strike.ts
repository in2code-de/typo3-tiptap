import Strike from '@tiptap/extension-strike'
import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    extension: [Strike],
    commands: [
      {
        id: 'strike',
        label: 'strike',
        iconIdentifier: 'strike',
        action: ({ editor }) => {
          editor.chain().focus().toggleStrike().run()
        },
      },
    ],
  })
}
