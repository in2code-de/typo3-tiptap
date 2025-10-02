import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for strikethrough text in the editor.
 * Strike extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'strike',
        label: 'strike',
        iconIdentifier: 'strike',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('strike'),
          isDisabled: ({ editor }) => !editor.can().toggleStrike() || editor.state.selection.empty,
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleStrike().run()
        },
      },
    ],
  })
}
