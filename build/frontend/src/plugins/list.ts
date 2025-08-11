import { BulletList, OrderedList } from '@tiptap/extension-list'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin defines bullet and ordered list commands for TipTap editor.
 * Bullet extension is installed by TipTap starterkit.
 */
export default function () {
  defineTipTapPlugin({
    extension: [
      BulletList,
      OrderedList,
    ],
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
