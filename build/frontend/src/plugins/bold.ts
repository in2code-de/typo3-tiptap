import { defineTipTapPlugin } from '../configuration.ts'

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
      },
    ],
  })
}
