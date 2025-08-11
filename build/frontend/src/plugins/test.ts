import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'test',
        label: 'Test',
        iconIdentifier: 'test',
        action: ({ editor }) => {
          console.log(1754635865888, 'called')
          editor.commands.applyStyle('Highlight')
        },
      },
    ],
  })
}
