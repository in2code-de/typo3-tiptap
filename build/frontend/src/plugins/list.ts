import type { TipTapPluginCommand } from '../schema/plugins.ts'
import { BulletList, OrderedList } from '@tiptap/extension-list'
import { defineTipTapPlugin, parseTipTapPluginYamlConfiguration } from '../configuration.ts'

export default function (unsafeConfig: unknown) {
  const config = parseTipTapPluginYamlConfiguration({
    pluginId: 'list',
    config: unsafeConfig,
    getValidationSchema: z => z.object({
      types: z.array(
        z.enum(['bullet', 'ordered']),
      ).min(1),
    }),
  })

  const extensions: unknown[] = []
  const commands: TipTapPluginCommand[] = []

  if (config.types.includes('bullet')) {
    extensions.push(BulletList)

    commands.push({
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
    })
  }

  if (config.types.includes('ordered')) {
    extensions.push(OrderedList)

    commands.push({
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
    })
  }

  defineTipTapPlugin({
    extensions,
    commands,
  })
}
