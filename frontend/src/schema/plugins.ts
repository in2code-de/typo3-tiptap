import type { Editor } from '@tiptap/core'
import { z } from 'zod'

const TipTapBooleanCallbackFunctionSchema = z.function({
  input: z.tuple([
    z.object({
      editor: z.custom<Editor>(val => val !== undefined),
      linkBrowserUrl: z.string(),
    }),
  ]),
  output: z.boolean(),
})

const TipTapVoidCallbackFunctionSchema = z.function({
  input: z.tuple([
    z.object({
      editor: z.custom<Editor>(val => val !== undefined),
      linkBrowserUrl: z.string(),
    }),
  ]),
  output: z.void(),
})

export const TipTapPluginCommandSchema = z.object({
  id: z.string(),
  label: z.string(),
  iconIdentifier: z.string(),
  position: z.object({
    toolbarGroupId: z.string().or(z.literal(false)),
    bubbleMenuGroupId: z.string().or(z.literal(false)),
  }),
  status: z.object({
    isActive: TipTapBooleanCallbackFunctionSchema.optional(),
    isDisabled: TipTapBooleanCallbackFunctionSchema.optional(),
    isVisible: TipTapBooleanCallbackFunctionSchema.optional(),
  }).optional(),
  hooks: z.object({
    onEditorMounted: TipTapVoidCallbackFunctionSchema.optional(),
  }).optional(),
  onExecute: TipTapVoidCallbackFunctionSchema,
})

export const TipTapPluginOptionsSchema = z.object({
  commands: z.array(TipTapPluginCommandSchema).optional(),
  extensions: z.array(z.unknown()).optional(),
})

export type TipTapBooleanCallbackFunction = z.infer<typeof TipTapBooleanCallbackFunctionSchema>
export type TipTapPluginOptions = z.infer<typeof TipTapPluginOptionsSchema>
export type TipTapPluginCommand = z.infer<typeof TipTapPluginCommandSchema>
