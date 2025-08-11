import type { Editor } from '@tiptap/core'
import { getConfiguration } from './configuration.ts'

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

/**
 * Get available styles for the currently selected element/node
 */
export function getAvailableStyles(editor: Editor): Array<{
  name: string
  id: string
  attributes: Record<string, string>
  isApplied: boolean
}> {
  const configuration = getConfiguration()
  if (!configuration?.styles)
    return []

  const { from, to } = editor.state.selection
  const selectedNodes = []

  // Get all nodes in selection
  editor.state.doc.nodesBetween(from, to, (node) => {
    selectedNodes.push(node)
  })

  // If no selection, get the current node
  const currentNode = selectedNodes[0] || editor.state.selection.$from.node()
  const nodeName = currentNode?.type?.name

  return configuration.styles
    .filter((style) => {
      // Check if current node type is allowed for this style
      return style.allowedTags.includes(nodeName)
        || style.allowedTags.includes('*') // wildcard support
        || (nodeName === 'text' && style.allowedTags.includes('span'))
    })
    .map(style => ({
      name: style.name,
      id: `style-${style.name.toLowerCase().replace(/\s+/g, '-')}`,
      attributes: style.attributes,
      isApplied: isStyleApplied(editor, style.attributes),
    }))
}

/**
 * Check if a style (set of attributes) is currently applied to the selection
 */
export function isStyleApplied(editor: Editor, attributes: Record<string, string>): boolean {
  const { from, to } = editor.state.selection

  // For class attributes, we need to check if the classes are present
  if (attributes.class) {
    const classesToCheck = attributes.class.split(' ')
    return classesToCheck.every(className =>
      editor.isActive('textStyle', { class: new RegExp(`\\b${className}\\b`) })
      || editor.isActive('span', { class: new RegExp(`\\b${className}\\b`) }),
    )
  }

  // For other attributes, check if they match exactly
  return Object.entries(attributes).every(([attr, value]) => {
    if (attr === 'class')
      return true // already handled above
    return editor.isActive('textStyle', { [attr]: value })
      || editor.isActive('span', { [attr]: value })
  })
}

/**
 * Toggle a style on/off for the current selection
 */
export function toggleStyle(editor: Editor, attributes: Record<string, string>): void {
  const isCurrentlyApplied = isStyleApplied(editor, attributes)

  if (isCurrentlyApplied) {
    // Remove the style
    removeStyle(editor, attributes)
  }
  else {
    // Apply the style
    applyStyle(editor, attributes)
  }
}

/**
 * Apply style attributes to the current selection
 */
export function applyStyle(editor: Editor, attributes: Record<string, string>): void {
  const { from, to } = editor.state.selection

  if (from === to) {
    // No selection, apply to current position for future typing
    editor.chain().focus().setTextSelection(from).run()
  }

  // Handle class attribute specially to merge with existing classes
  if (attributes.class) {
    const existingClasses = getExistingClasses(editor)
    const newClasses = attributes.class.split(' ')
    const mergedClasses = [...new Set([...existingClasses, ...newClasses])]

    const updatedAttributes = {
      ...attributes,
      class: mergedClasses.join(' '),
    }

    editor.chain().focus().setTextSelection(from, to).updateAttributes('textStyle', updatedAttributes).run()
  }
  else {
    editor.chain().focus().setTextSelection(from, to).updateAttributes('textStyle', attributes).run()
  }
}

/**
 * Remove style attributes from the current selection
 */
export function removeStyle(editor: Editor, attributes: Record<string, string>): void {
  const { from, to } = editor.state.selection

  // Handle class attribute specially to remove only specific classes
  if (attributes.class) {
    const existingClasses = getExistingClasses(editor)
    const classesToRemove = attributes.class.split(' ')
    const remainingClasses = existingClasses.filter(cls => !classesToRemove.includes(cls))

    if (remainingClasses.length > 0) {
      editor.chain().focus().setTextSelection(from, to).updateAttributes('textStyle', {
        class: remainingClasses.join(' '),
      }).run()
    }
    else {
      editor.chain().focus().setTextSelection(from, to).unsetTextStyle(['class']).run()
    }
  }
  else {
    // Remove other attributes
    const attrsToUnset = Object.keys(attributes)
    editor.chain().focus().setTextSelection(from, to).unsetTextStyle(attrsToUnset).run()
  }
}

/**
 * Get existing classes from the current selection
 */
function getExistingClasses(editor: Editor): string[] {
  const { from, to } = editor.state.selection
  let classes: string[] = []

  editor.state.doc.nodesBetween(from, to, (node) => {
    if (node.attrs?.class) {
      classes = [...classes, ...node.attrs.class.split(' ')]
    }
  })

  return [...new Set(classes)].filter(Boolean)
}
