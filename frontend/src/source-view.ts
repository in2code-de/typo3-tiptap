import type { Editor } from '@tiptap/core'

const TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE = 'data-tiptap-source-view-active'

export function getEditorSourceViewActiveStatus(editor: Editor) {
  return editor.view.dom.getAttribute(TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE) === 'true'
}

export function saveEditorSourceViewActiveStatus(editor: Editor, status: boolean) {
  editor.view.dom.setAttribute(TIPTAP_SOURCE_VIEW_ACTIVE_ATTRIBUTE, status.toString())
}
