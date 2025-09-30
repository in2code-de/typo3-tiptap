import type { TipTapPluginCommand, TipTapPluginOptions } from './schema/plugins.ts'
import * as zod from 'zod'
import { TipTapPluginOptionsSchema } from './schema/plugins.ts'
import { mergeArrays } from './utils.ts'

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

const toolbar: TipTapMenuItem[] = [
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
const bubbleMenu: TipTapMenuItem[] = [
  {
    id: 'formatting',
    commands: [],
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
    id: 'styles',
    commands: [],
    dropdown: {
      label: 'Styles',
      iconIdentifier: 'styles',
    },
  },
]

const configuration: TipTapConfiguration = {
  toolbar,
  bubbleMenu,
  extensions: [],
}

/**
 * Define a TipTap plugin with styles, commands, and stylesheets.
 */
export function defineTipTapPlugin(unsafePluginOptions: TipTapPluginOptions) {
  const parseOutput = TipTapPluginOptionsSchema.safeParse(unsafePluginOptions)
  if (!parseOutput.success) {
    throw new Error(`Invalid TipTap plugin options: ${parseOutput.error.message}`)
  }

  const { data: pluginOptions } = parseOutput

  if (pluginOptions.extensions && Array.isArray(configuration.extensions))
    configuration.extensions = mergeArrays(configuration.extensions, pluginOptions.extensions)

  if (pluginOptions.commands) {
    pluginOptions.commands.forEach((command) => {
      if (command.position.toolbarGroupId !== false && Array.isArray(toolbar)) {
        const toolbarGroupId = configuration.toolbar.find(group => group.id === command.position.toolbarGroupId)
        if (!toolbarGroupId) {
          throw new Error(`Top bar group ${command.position.toolbarGroupId} not found for command id ${command.id}.`)
        }

        if (Array.isArray(toolbarGroupId.commands))
          toolbarGroupId.commands.push(command)
      }

      if (command.position.bubbleMenuGroupId !== false && Array.isArray(toolbar)) {
        const bubbleMenuGroup = configuration.bubbleMenu.find(group => group.id === command.position.bubbleMenuGroupId)
        if (!bubbleMenuGroup) {
          throw new Error(`Bubble menu group ${command.position.bubbleMenuGroupId} not found for command id ${command.id}.`)
        }

        if (Array.isArray(bubbleMenuGroup.commands))
          bubbleMenuGroup.commands.push(command)
      }
    })
  }
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

export const getConfiguration = () => configuration
