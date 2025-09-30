import type { TipTapPluginCommand } from '../schema/plugins.ts'
import TextAlign from '@tiptap/extension-text-align'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'justify',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      types: z.array(z.enum(['justify-left', 'justify-center', 'justify-right'])).min(1),
    }, {
      error: 'Must be an object with a "types" property that is an array containing at least one of "justify-left", "justify-center", or "justify-right"',
    }),
  })

  const commands: TipTapPluginCommand[] = []

  if (config.types.includes('justify-left')) {
    commands.push({
      id: 'justify-left',
      label: 'Justify Left',
      iconIdentifier: 'justify-left',
      position: {
        toolbarGroupId: 'textAlignment',
        bubbleMenuGroupId: false,
      },
      status: {
        isActive: ({ editor }) => editor.isActive({ textAlign: 'left' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('left'),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().setTextAlign('left').run()
      },
    })
  }

  if (config.types.includes('justify-center')) {
    commands.push({
      id: 'justify-center',
      label: 'Justify Center',
      iconIdentifier: 'justify-center',
      position: {
        toolbarGroupId: 'textAlignment',
        bubbleMenuGroupId: false,
      },
      status: {
        isActive: ({ editor }) => editor.isActive({ textAlign: 'center' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('center'),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().setTextAlign('center').run()
      },
    })
  }

  if (config.types.includes('justify-right')) {
    commands.push({
      id: 'justify-right',
      label: 'Justify Right',
      iconIdentifier: 'justify-right',
      position: {
        toolbarGroupId: 'textAlignment',
        bubbleMenuGroupId: false,
      },
      status: {
        isActive: ({ editor }) => editor.isActive({ textAlign: 'right' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('right'),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().setTextAlign('right').run()
      },
    })
  }

  defineTipTapPlugin({
    extensions: [
      TextAlign.configure({
        // Specify the types you want to apply text alignment to
        types: ['heading', 'paragraph'],
      }),
    ],
    commands,
  })
}
