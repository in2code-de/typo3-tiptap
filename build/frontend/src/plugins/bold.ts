import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for bold text in the editor.
 * Bold extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'bold',
        label: 'Bold',
        iconIdentifier: 'bold',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: 'formatting',
        },
        status: {
          isActive: ({ editor }) => editor.isActive('bold'),
          isDisabled: ({ editor }) => !editor.can().toggleBold(),
        },
        onExecute: ({ editor }) => {
          editor
            .chain()
            .focus()
            .toggleBold()
            .updateAttributes('strong', { class: null })
            .run()
        },
      },
    ],
  })
}
