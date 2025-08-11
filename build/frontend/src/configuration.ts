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
    isActive?: (data: { editor: Editor }) => boolean
    isDisabled?: (data: { editor: Editor }) => boolean
  }[]
  groupCommands?: Record<string, {
    ids: string[]
    label: string
    iconIdentifier: string
  }>
  extension?: unknown[]
}

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
