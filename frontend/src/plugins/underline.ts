import Underline from '@tiptap/extension-underline'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for underlined text in the editor.
 * Underline extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    extensions: [Underline],
    commands: [
      {
        id: 'underline',
        label: 'Underline',
        iconIdentifier: 'underline',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('underline'),
          isDisabled: ({ editor }) => !editor.can().toggleUnderline() || editor.state.selection.empty,
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleUnderline().run()
        },
      },
    ],
  })
}
