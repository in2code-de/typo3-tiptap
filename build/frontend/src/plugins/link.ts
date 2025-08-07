import Link from '@tiptap/extension-link'
import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  defineTipTapPlugin({
    extension: [
      Link.configure({
        autolink: true,
        openOnClick: false,
      }),
    ],
    commands: [
      {
        id: 'link',
        label: 'Link',
        iconIdentifier: 'link',
        action: ({ editor }) => {
          // Check if link is active using TipTap's built-in method
          const isLinkActive = editor.isActive('link')

          console.log(1754575412360, { isLinkActive })

          if (isLinkActive) {
            // Get current link attributes
            const currentAttributes = editor.getAttributes('link')
            const currentHref = currentAttributes.href || ''

            // eslint-disable-next-line no-alert
            const newHref = prompt('Update link URL:', currentHref)
            if (newHref) {
              editor.chain().focus().extendMarkRange('link').setLink({ href: newHref }).run()
            }
          }
          else {
            // eslint-disable-next-line no-alert
            const href = prompt('Enter link URL:')
            if (href) {
              editor.chain().focus().setLink({ href }).run()
            }
          }
        },
      },
    ],
  })
}
