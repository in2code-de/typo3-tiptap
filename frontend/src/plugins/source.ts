import { defineTipTapPlugin } from '../configuration.ts'
import { getEditorSourceViewActiveStatus, saveEditorSourceViewActiveStatus } from '../source-view.ts'

export default function () {
  return defineTipTapPlugin({
    commands: [
      {
        id: 'source',
        label: 'Source',
        iconIdentifier: 'source',
        position: {
          toolbarGroupId: 'developer',
          bubbleMenuGroupId: false,
        },
        status: {
          isActive: ({ editor }) => getEditorSourceViewActiveStatus(editor),
        },
        onExecute: ({ editor }) => {
          const isHtmlActive = getEditorSourceViewActiveStatus(editor)

          const editorContent = isHtmlActive
            ? editor.getText()
            : `<textarea>${editor.getHTML()}</textarea>`

          saveEditorSourceViewActiveStatus(editor, !isHtmlActive)
          editor.commands.setContent(editorContent)
        },
        hooks: {
          onEditorMounted: ({ editor }) => {
            saveEditorSourceViewActiveStatus(editor, false)
          },
        },
      },
    ],
  })
}
