import Superscript from '@tiptap/extension-superscript'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for superscript text in the editor (e.g. 10⁻⁷).
 */
export default function () {
  return defineTipTapPlugin({
    extensions: [Superscript],
    commands: [
      {
        id: 'superscript',
        label: 'Superscript',
        iconIdentifier: 'superscript',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('superscript'),
          isDisabled: ({ editor }) => !editor.can().toggleSuperscript() || editor.state.selection.empty,
        },
        onExecute: ({ editor }) => {
          const chain = editor.chain().focus()
          if (editor.schema.marks.subscript && editor.isActive('subscript')) {
            chain.unsetSubscript()
          }
          chain.toggleSuperscript().run()
        },
      },
    ],
  })
}
