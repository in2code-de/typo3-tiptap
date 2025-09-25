import type { Editor } from '@tiptap/core'
import type { Mark, Node as ProseMirrorNode } from '@tiptap/pm/model'
import type { EditorState } from '@tiptap/pm/state'

interface NodeWithPos {
  node: ProseMirrorNode
  pos: number
}

export function toggleClassOnSelection(editor: Editor, className: string): void {
  const { state } = editor
  const { from, to } = state.selection

  // First, check if we have any marks in the selection
  const marks = getMarksInSelection(state, from, to)

  // Then check nodes
  const nodes = getNodesInSelection(state, from, to)

  // Toggle on marks first (they're usually what the user intends)
  marks.forEach((mark) => {
    toggleClassOnMark(editor, mark.type.name, className, from, to)
  })

  // If no marks, toggle on nodes
  if (marks.length === 0 && nodes.length > 0) {
    nodes.forEach(({ node, pos }) => {
      // FIXED: Don't use setNodeSelection, directly update attributes
      // for the node type within the current selection
      editor.chain()
        .focus()
        .updateAttributes(node.type.name, {
          class: toggleClassString(
            editor.getAttributes(node.type.name).class,
            className,
          ),
        })
        .run()
    })
  }
}

// Helper to get all marks in selection
function getMarksInSelection(state: EditorState, from: number, to: number): Mark[] {
  const marks: Mark[] = []
  const markTypes = new Set<string>()

  state.doc.nodesBetween(from, to, (node) => {
    if (node.isInline) {
      node.marks.forEach((mark) => {
        if (!markTypes.has(mark.type.name)) {
          markTypes.add(mark.type.name)
          marks.push(mark)
        }
      })
    }
  })

  return marks
}

// Helper to get nodes in selection (excluding parent containers)
function getNodesInSelection(state: EditorState, from: number, to: number): NodeWithPos[] {
  const nodes: NodeWithPos[] = []

  state.doc.nodesBetween(from, to, (node, pos) => {
    // Skip document and other high-level containers
    if (pos >= from && pos < to && !node.isTextblock) {
      nodes.push({ node, pos })
    }
  })

  // If no inline nodes found, get the direct text block
  if (nodes.length === 0) {
    const $from = state.doc.resolve(from)
    const node = $from.node()
    if (node && node.type.name !== 'doc') {
      nodes.push({ node, pos: $from.before() })
    }
  }

  return nodes
}

// Toggle class on a specific mark
function toggleClassOnMark(editor: Editor, markName: string, className: string, from: number, to: number): void {
  // Get current mark attributes
  const markAttributes = editor.getAttributes(markName)
  const currentClasses: string[] = markAttributes.class ? markAttributes.class.split(' ') : []

  // Toggle the class
  const index = currentClasses.indexOf(className)
  if (index > -1) {
    currentClasses.splice(index, 1)
  }
  else {
    currentClasses.push(className)
  }

  // Update the mark with new classes
  editor.chain()
    .setMark(markName, { class: currentClasses.filter(c => c).join(' ') || null })
    .run()
}

// Toggle class on a specific node
function toggleClassOnNode(editor: Editor, nodeName: string, className: string, pos: number): void {
  editor.chain()
    .setNodeSelection(pos)
    .updateAttributes(nodeName, {
      class: toggleClassString(
        editor.getAttributes(nodeName).class,
        className,
      ),
    })
    .run()
}

// Helper function to toggle a class in a class string
function toggleClassString(classString: string | undefined, className: string): string | null {
  const currentClasses = classString ? classString.split(' ').filter(c => c) : []
  const index = currentClasses.indexOf(className)

  if (index > -1) {
    currentClasses.splice(index, 1)
  }
  else {
    currentClasses.push(className)
  }

  return currentClasses.length > 0 ? currentClasses.join(' ') : null
}
