import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'redo',
        label: 'Redo last action',
        iconIdentifier: 'redo',
        action: ({ editor }) => {
          editor.chain().focus().redo().run()
        },
      },
    ],
  })
}
