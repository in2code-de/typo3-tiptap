import type { TipTapPluginOptions } from './types'
import { merge } from 'ts-deepmerge'

let configuration: TipTapPluginOptions = {}

/**
 * Define a TipTap plugin with styles, commands, and stylesheets.
 */
export function defineTipTapPlugin(plugin: TipTapPluginOptions) {
  configuration = merge.withOptions(
    { mergeArrays: true, uniqueArrayItems: true },
    configuration,
    plugin,
  )
}

export const getConfiguration = () => configuration
