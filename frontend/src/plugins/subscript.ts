import Subscript from '@tiptap/extension-subscript'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for subscript text in the editor (e.g. H₂O).
 */
export default function () {
  return defineTipTapPlugin({
    extensions: [Subscript],
    commands: [
      {
        id: 'subscript',
        label: 'Subscript',
        iconIdentifier: 'subscript',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('subscript'),
          isDisabled: ({ editor }) => !editor.can().toggleSubscript() || editor.state.selection.empty,
        },
        onExecute: ({ editor }) => {
          const chain = editor.chain().focus()
          if (editor.schema.marks.superscript && editor.isActive('superscript')) {
            chain.unsetSuperscript()
          }
          chain.toggleSubscript().run()
        },
      },
    ],
  })
}
