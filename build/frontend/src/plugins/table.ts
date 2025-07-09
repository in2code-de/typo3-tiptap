import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    styleSheets: ['table.css'],
    commands: [
      {
        id: 'insertTable',
        label: 'Insert Table',
        iconIdentifier: 'table',
        sortAfter: 'insertImage',
        action: ({ editor }) => {
          console.log('Insert Table command executed')
          console.log(1751965862803, { editor })
        },
      },
    ],
  })
}
