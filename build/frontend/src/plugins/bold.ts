import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'bold',
        label: 'Style Text as Bold',
        iconIdentifier: 'bold',
        action: ({ editor }) => {
          editor.chain().focus().toggleBold().run()
          console.log(1751967237624, 'bold called')
        },
      },
    ],
  })
}
