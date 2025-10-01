import { objectEntries } from '@antfu/utils'
import { Link } from '@tiptap/extension-link'
import typo3Modal from '@typo3/backend/modal.js'
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * Custom Link Extension that allows additional attributes (like title)
 */
export const CustomLink = Link.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      title: {
        default: null,
        parseHTML: (element: any) => element.getAttribute('title'),
        renderHTML: (attributes: any) => {
          if (!attributes.title) {
            return {}
          }
          return {
            title: attributes.title,
          }
        },
      },
    }
  },
})

/**
 * This plugin adds support for links in the editor.
 * It allows users to create and update links.
 * Link extension installed by TipTap starterkit
 */
export default function () {
  defineTipTapPlugin({
    extensions: [
      CustomLink.configure({
        openOnClick: false,
        defaultProtocol: 'https',
        protocols: ['http', 'https', 't3'],
      }),
    ],
    commands: [
      {
        id: 'link',
        label: 'Link',
        iconIdentifier: 'link',
        position: {
          toolbarGroupId: 'formatting',
          bubbleMenuGroupId: false,
        },
        status: {
          isActive: ({ editor }) => editor.isActive('link'),
          isDisabled: ({ editor }) => !editor.can().setLink({ href: '' }),
        },
        onExecute: ({ editor, linkBrowserUrl }) => {
          const url = new URL(linkBrowserUrl, window.location.origin)

          const isLinkActive = editor.isActive('link')
          if (isLinkActive) {
            const linkAttributes = editor.getAttributes('link')

            objectEntries(linkAttributes)
              .filter(([, value]) => Boolean(value))
              .forEach(([key, value]) => {
                const urlKey = key === 'href' ? 'url' : encodeURIComponent(key)
                url.searchParams.set(`P[curUrl][${urlKey}]`, value as string)
              })
          }

          typo3Modal.advanced({
            type: typo3Modal.types.iframe,
            title: 'Set Link',
            content: url.toString(),
            size: typo3Modal.sizes.large,
            callback: (currentModal: any) => {
              // We pass the editor instance to the modal
              currentModal.userData.editor = editor
            },
          })
        },
      },
    ],
  })
}
