import { BulletList, OrderedList } from '@tiptap/extension-list'
import { defineTipTapPlugin } from '../configuration.ts'

const hasBulletListExtensionBeenSetup = false

function ensureListPluginSetup() {
  if (hasBulletListExtensionBeenSetup)
    return

  defineTipTapPlugin({
    extension: [
      BulletList,
      OrderedList,
    ],
    groupCommands: {
      list: {
        ids: ['list-bullet', 'list-ordered'],
        label: 'List',
        iconIdentifier: 'list',
      },
    },
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
        action: ({ editor }) => {
          editor.chain().focus().toggleBulletList().run()
        },
        isActive: ({ editor }) => editor.isActive('bulletList'),
        isDisabled: ({ editor }) => !editor.can().toggleBulletList(),
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
        action: ({ editor }) => {
          editor.chain().focus().toggleOrderedList().run()
        },
        isActive: ({ editor }) => editor.isActive('orderedList'),
        isDisabled: ({ editor }) => !editor.can().toggleOrderedList(),
      },
    ],
  })
}
