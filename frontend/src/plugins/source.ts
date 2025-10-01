import type { Editor } from '@tiptap/core'
import { defineTipTapPlugin } from '../configuration.ts'

const TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE = 'data-tiptap-source-view-active'

export function getEditorSourceViewActiveStatus(editor: Editor) {
  return editor.view.dom.getAttribute(TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE) === 'true'
}

export function saveEditorSourceViewActiveStatus(editor: Editor, status: boolean) {
  editor.view.dom.setAttribute(TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE, status.toString())
}

export default function () {
  defineTipTapPlugin({
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
