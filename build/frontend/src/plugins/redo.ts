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
        action: ({ editor }) => {
          editor.chain().focus().redo().run()
        },
        isDisabled: ({ editor }) => !editor.can().redo(),
      },
    ],
  })
}
