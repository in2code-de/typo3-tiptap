import type { Editor } from '@tiptap/core'

function getCurrentNodeType(editor: Editor) {
  const { $from } = editor.state.selection
  return $from.node().type.name
}

export function useTipTapUtils(editor: Editor) {
  return {
    getSelectionClasses() {
      const currentNodeType = getCurrentNodeType(editor)
      return editor.getAttributes(currentNodeType)
    },
    setClasses(classes: string) {
      const currentNodeType = getCurrentNodeType(editor)
      console.log(1752825426167, { currentNodeType })
      editor.chain().focus().updateAttributes(currentNodeType, { class: classes }).run()
    },
  }
}
