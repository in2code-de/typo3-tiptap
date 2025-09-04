import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for redoing the last undone action in the editor.
 * Redo extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
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
      },
    ],
  })
}
