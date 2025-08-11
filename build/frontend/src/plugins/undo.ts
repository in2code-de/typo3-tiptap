import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for undoing the last action in the editor.
 * Undo extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'undo',
        label: 'Undo last action',
        iconIdentifier: 'undo',
        action: ({ editor }) => {
          editor.chain().focus().undo().run()
        },
        isDisabled: ({ editor }) => !editor.can().undo(),
      },
    ],
  })
}
