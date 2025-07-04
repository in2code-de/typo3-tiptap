import { defineTipTapPlugin, init, tablePlugin } from './src'
import { getConfiguration } from './src/configuration'

tablePlugin()

defineTipTapPlugin({
  styleSheets: ['test.css'],
  styles: [
    {
      name: 'test',
      allowedTags: ['p', 'span'],
      attributes: {
        class: 'test-class',
      },
    },
  ],
  commands: [
    {
      id: 'user-plugin',
      label: 'User Plugin Command',
      iconIdentifier: 'test-icon',
      sortAfter: 'insertUserPlugin',
      action: ({ editor }) => {
        console.log('User Plugin executed', editor)
      },
    },
  ],
})

init()

getConfiguration().commands?.forEach((command) => {
  command.action({ editor: undefined })
})
