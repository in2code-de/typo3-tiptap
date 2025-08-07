import { BulletList, OrderedList } from '@tiptap/extension-list'
import { defineTipTapPlugin } from '../configuration.ts'

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
      },
      {
        id: 'list-ordered',
        label: 'Ordered List',
        iconIdentifier: 'list-ordered',
        action: ({ editor }) => {
          editor.chain().focus().toggleOrderedList().run()
        },
      },
    ],
  })
}
