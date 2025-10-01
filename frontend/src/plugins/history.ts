import type { TipTapPluginCommand } from '../schema/plugins.ts'
import { UndoRedo } from '@tiptap/extensions'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

/**
 * This plugin adds support for redoing the last undone action in the editor.
 * Redo extension installed by TipTap starterkit
 */
export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'history',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      types: z.array(z.enum(['undo', 'redo'])).min(1),
    }, {
      error: 'Must be an object with a "types" property that is an array containing at least one of "undo" or "redo"',
    }),
  })

  const commands: TipTapPluginCommand[] = []

  if (config.types.includes('undo')) {
    commands.push({
      id: 'undo',
      label: 'Undo last action',
      iconIdentifier: 'undo',
      position: {
        toolbarGroupId: 'history',
        bubbleMenuGroupId: false,
      },
      status: {
        isDisabled: ({ editor }) => !editor.can().undo(),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().undo().run()
      },
    })
  }

  if (config.types.includes('redo')) {
    commands.push({
      id: 'redo',
      label: 'Redo last action',
      iconIdentifier: 'redo',
      position: {
        toolbarGroupId: 'history',
        bubbleMenuGroupId: false,
      },
      status: {
        isDisabled: ({ editor }) => !editor.can().redo(),
      },
      onExecute: ({ editor }) => {
        editor.chain().focus().redo().run()
      },
    })
  }

  defineTipTapPlugin({
    extensions: [UndoRedo],
    commands,
  })
}
