import type { Editor } from '@tiptap/core'

export interface TipTapPluginOptions {
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
    isAvailableInBubbleMenu?: boolean
    onEditorMounted?: (data: { editor: Editor }) => void
  }[]
  groupCommands?: Record<string, {
    ids: string[]
    label: string
    iconIdentifier: string
  }>
  extension?: unknown[]
}
