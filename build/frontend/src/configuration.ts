import type { Editor } from '@tiptap/core'
import { merge } from 'ts-deepmerge'

interface TipTapPluginOptions {
  styleSheets?: string[]
  styles?: {
    name: string
    allowedTags: string[]
    attributes: Record<string, string>
  }[]
  commands?: {
    id: string
    label: string
    iconIdentifier: string
    sortAfter?: string
    action: (data: { editor: Editor }) => void
  }[]
  extension?: unknown[]
}

let configuration: TipTapPluginOptions = {}

/**
 * Define a TipTap plugin with styles, commands, and stylesheets.
 */
export function defineTipTapPlugin(plugin: TipTapPluginOptions) {
  configuration = merge.withOptions(
    { mergeArrays: true },
    configuration,
    plugin,
  )
}

export const getConfiguration = () => configuration
