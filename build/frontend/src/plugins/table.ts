import { defineTipTapPlugin } from '../configuration.ts'

export function tablePlugin() {
  defineTipTapPlugin({
    styleSheets: ['table.css'],
    commands: [
      {
        id: 'insertTable',
        label: 'Insert Table',
        iconIdentifier: 'table',
        sortAfter: 'insertImage',
        action: () => {
          console.log('Insert Table command executed')
        },
      },
    ],
  })
}
