import type { TipTapBubbleMenu, TipTapConfiguration, TipTapPluginOptions, TipTapToolbar } from './types'
import { mergeArrays } from './utils.ts'

const toolbar: TipTapToolbar = [
  {
    id: 'history',
    commands: [],
  },
  {
    id: 'general',
    commands: [],
  },
  {
    id: 'formatting',
    commands: [],
  },
  {
    id: 'textAlignment',
    commands: [],
    dropdown: {
      label: 'Text alignment',
      iconIdentifier: 'justify-left',
    },
  },
  {
    id: 'developer',
    commands: [],
  },
]

// TODO: implement bubble menu groups
const bubbleMenu: TipTapBubbleMenu = [
  {
    id: 'formatting',
    commands: [],
  },
]

const configuration: TipTapConfiguration = {
  styleSheets: [],
  styles: [],
  toolbar,
  bubbleMenu,
  extensions: [],
}

/**
 * Define a TipTap plugin with styles, commands, and stylesheets.
 */
export function defineTipTapPlugin(plugin: Partial<TipTapPluginOptions>) {
  if (plugin.styleSheets) {
    configuration.styleSheets = mergeArrays(configuration.styleSheets, plugin.styleSheets)
  }

  if (plugin.styles) {
    configuration.styles = mergeArrays(configuration.styles, plugin.styles)
  }

  if (plugin.extensions) {
    configuration.extensions = mergeArrays(configuration.extensions, plugin.extensions)
  }

  if (plugin.commands && plugin.commands.length > 0) {
    plugin.commands.forEach((command) => {
      if (!command.position.toolbarGroupId && !command.position.bubbleMenuGroupId) {
        throw new Error(`Command ${command.id} must have a position defined.`)
      }

      if (command.position.toolbarGroupId !== false) {
        const toolbarGroupId = configuration.toolbar.find(group => group.id === command.position.toolbarGroupId)
        if (!toolbarGroupId) {
          throw new Error(`Top bar group ${command.position.toolbarGroupId} not found for command ${command.id}.`)
        }

        toolbarGroupId.commands.push(command)
      }

      if (command.position.bubbleMenuGroupId !== false) {
        const bubbleMenuGroup = configuration.bubbleMenu.find(group => group.id === command.position.bubbleMenuGroupId)
        if (!bubbleMenuGroup) {
          throw new Error(`Bubble menu group ${command.position.bubbleMenuGroupId} not found for command ${command.id}.`)
        }

        bubbleMenuGroup.commands.push(command)
      }
    })
  }
}

export const getConfiguration = () => configuration
