import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'undo',
        label: 'Undo last action',
        iconIdentifier: 'undo',
        action: ({ editor }) => {
          editor.chain().focus().undo().run()
        },
      },
    ],
  })
}
