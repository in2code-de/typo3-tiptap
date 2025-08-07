import Blockquote from '@tiptap/extension-blockquote'
import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    extension: [Blockquote],
    commands: [
      {
        id: 'blockquote',
        label: 'Blockquote',
        iconIdentifier: 'blockquote',
        action: ({ editor }) => {
          editor.chain().focus().toggleBlockquote().run()
        },
      },
    ],
  })
}
