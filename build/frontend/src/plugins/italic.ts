import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for italic text in the editor.
 * Italic extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'italic',
        label: 'Italic',
        iconIdentifier: 'italic',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('italic'),
          isDisabled: ({ editor }) => !editor.can().toggleItalic(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleItalic().run()
        },
      },
    ],
  })
}
