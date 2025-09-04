import { BulletList, OrderedList } from '@tiptap/extension-list'
import { defineTipTapPlugin } from '../configuration.ts'

const hasBulletListExtensionBeenSetup = false

function ensureListPluginSetup() {
  if (hasBulletListExtensionBeenSetup)
    return

  defineTipTapPlugin({
    extensions: [
      BulletList,
      OrderedList,
    ],
  })
}

export function setupBulletList() {
  ensureListPluginSetup()

  defineTipTapPlugin({
    commands: [
      {
        id: 'list-bullet',
        label: 'Bullet List',
        iconIdentifier: 'list-bullet',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: false,
        },
        status: {
          isActive: ({ editor }) => editor.isActive('bulletList'),
          isDisabled: ({ editor }) => !editor.can().toggleBulletList() && !editor.can().toggleOrderedList(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleBulletList().run()
        },
      },
    ],
  })
}

export function setupOrderedList() {
  ensureListPluginSetup()

  defineTipTapPlugin({
    commands: [
      {
        id: 'list-ordered',
        label: 'Ordered List',
        iconIdentifier: 'list-ordered',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: false,
        },
        status: {
          isActive: ({ editor }) => editor.isActive('orderedList'),
          isDisabled: ({ editor }) => !editor.can().toggleOrderedList() && !editor.can().toggleBulletList(),
        },
        onExecute: ({ editor }) => {
          editor.chain().focus().toggleOrderedList().run()
        },
      },
    ],
  })
}
