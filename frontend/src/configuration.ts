import type { TipTapPluginCommand, TipTapPluginOptions } from './schema/plugins.ts'
import * as zod from 'zod'
import { TipTapPluginOptionsSchema } from './schema/plugins.ts'

export type { TipTapPluginOptions } from './schema/plugins.ts'

interface TipTapMenuItem {
  id: string
  commands: TipTapPluginCommand[]
  dropdown?: {
    label: string
    iconIdentifier: string
  }
}

export interface TipTapConfiguration {
  toolbar: TipTapMenuItem[]
  bubbleMenu: TipTapMenuItem[]
  extensions: TipTapPluginOptions['extensions']
}

function createToolbarGroups(): TipTapMenuItem[] {
  return [
    {
      id: 'history',
      commands: [],
    },
    {
      id: 'styles',
      commands: [],
      dropdown: {
        label: 'Styles',
        iconIdentifier: 'styles',
      },
    },
    {
      id: 'heading',
      commands: [],
      dropdown: {
        label: 'Headings',
        iconIdentifier: 'heading',
      },
    },
    {
      id: 'formatting',
      commands: [],
    },
    {
      id: 'general',
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
}

function createBubbleMenuGroups(): TipTapMenuItem[] {
  return [
    {
      id: 'heading',
      commands: [],
      dropdown: {
        label: 'Headings',
        iconIdentifier: 'heading',
      },
    },
    {
      id: 'formatting',
      commands: [],
    },
    {
      id: 'table',
      commands: [],
    },
    {
      id: 'styles',
      commands: [],
      dropdown: {
        label: 'Styles',
        iconIdentifier: 'styles',
      },
    },
    {
      id: 'textAlignment',
      commands: [],
      dropdown: {
        label: 'Text alignment',
        iconIdentifier: 'justify-left',
      },
    },
  ]
}

/**
 * Validate and return TipTap plugin options.
 * Plugins should return the result of this function so the editor can collect
 * all options and build an isolated configuration per instance.
 */
export function defineTipTapPlugin(unsafePluginOptions: TipTapPluginOptions): TipTapPluginOptions {
  const parseOutput = TipTapPluginOptionsSchema.safeParse(unsafePluginOptions)
  if (!parseOutput.success) {
    throw new Error(`Invalid TipTap plugin options: ${parseOutput.error.message}`)
  }

  return parseOutput.data
}

/**
 * Create a fresh, isolated TipTap configuration from a list of plugin options.
 * Each editor instance should call this to avoid shared state between editors.
 */
export function createConfiguration(pluginOptionsList: TipTapPluginOptions[]): TipTapConfiguration {
  const toolbar = createToolbarGroups()
  const bubbleMenu = createBubbleMenuGroups()
  const extensions = pluginOptionsList.flatMap(p => p.extensions ?? [])

  for (const pluginOptions of pluginOptionsList) {
    if (pluginOptions.commands) {
      for (const command of pluginOptions.commands) {
        if (command.position.toolbarGroupId !== false) {
          const toolbarGroup = toolbar.find(group => group.id === command.position.toolbarGroupId)
          if (!toolbarGroup) {
            throw new Error(`Top bar group ${command.position.toolbarGroupId} not found for command id ${command.id}.`)
          }
          toolbarGroup.commands.push(command)
        }

        if (command.position.bubbleMenuGroupId !== false) {
          const bubbleMenuGroup = bubbleMenu.find(group => group.id === command.position.bubbleMenuGroupId)
          if (!bubbleMenuGroup) {
            throw new Error(`Bubble menu group ${command.position.bubbleMenuGroupId} not found for command id ${command.id}.`)
          }
          bubbleMenuGroup.commands.push(command)
        }
      }
    }
  }

  return { toolbar, bubbleMenu, extensions }
}

export function parseTipTapPluginYamlConfiguration<T extends zod.ZodTypeAny>(props: {
  pluginId: string
  config: unknown
  getValidationSchema: (z: typeof zod) => T
}): zod.infer<T> {
  const schema = props.getValidationSchema(zod)

  const parseOutput = schema.safeParse(props.config)
  if (!parseOutput.success) {
    const errorMessage = `Invalid TipTap configuration for plugin id: ${props.pluginId}!
Received plugin configuration:
${JSON.stringify(props.config, null, 2)}

Zod Validation Error:
${parseOutput.error.message}`

    throw new Error(errorMessage)
  }

  return parseOutput.data
}
