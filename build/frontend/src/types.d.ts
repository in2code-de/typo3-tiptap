import type { Editor } from '@tiptap/core'

export type TipTapToolbar = {
  id: string
  commands: TipTapCommand[]
  dropdown?: {
    label: string
    iconIdentifier: string
  }
}[]

export type TipTapBubbleMenu = {
  id: string
  commands: TipTapCommand[]
  dropdown?: {
    label: string
    iconIdentifier: string
  }
}[]

export type TipTapStatusCallbackFn = (data: { editor: Editor }) => boolean

interface TipTapCommand {
  id: string
  label: string
  iconIdentifier: string
  position: {
    toolbarGroupId: string | false
    bubbleMenuGroupId: string | false
  }
  status: Partial<{
    isActive: TipTapStatusCallbackFn
    isDisabled: TipTapStatusCallbackFn
    isVisible: TipTapStatusCallbackFn
  }>
  hooks?: Partial<{
    onEditorMounted: (data: { editor: Editor }) => void
  }>
  onExecute: (data: { editor: Editor }) => void
}

export interface TipTapPluginOptions {
  styleSheets: string[]
  styles: {
    name: string
    allowedTags: string[]
    attributes: Record<string, string>
  }[]
  commands: TipTapCommand[]
  extensions: unknown[]
}

export interface TipTapConfiguration {
  styleSheets: TipTapPluginOptions['styleSheets']
  styles: TipTapPluginOptions['styles']
  toolbar: TipTapToolbar
  bubbleMenu: TipTapBubbleMenu
  extensions: TipTapPluginOptions['extensions']
}
