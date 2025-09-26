import type { Editor } from '@tiptap/core'
import Link from '@tiptap/extension-link'
import { default as modalObject } from '@typo3/backend/modal.js';
import { defineTipTapPlugin } from '../configuration.ts'

/**
 * This plugin adds support for links in the editor.
 * It allows users to create and update links.
 * Link extension installed by TipTap starterkit
 */
export default function () {
  // TODO: this function should open the TYPO3 link modal in the background and return the selected link
  function getLinkUserInput(editor: Editor, currentHref?: string) {
    const linkBrowserRoute = document.querySelector('editor-tiptap').getAttribute('data-link-browser-url')
    modalObject.advanced({
      type: modalObject.types.iframe,
      title: 'Set Link',
      content: linkBrowserRoute +`${currentHref ? `&P[curUrl][url]=${(encodeURIComponent(currentHref))}` : ''}`,
      size: modalObject.sizes.large,
      callback: (currentModal) => {
        // We pass the editor instance to the modal
        currentModal.userData.editor = editor;
      }
    });
  }

  function handleLinkAction(editor: Editor) {
    const isLinkActive = editor.isActive('link')

    if (isLinkActive) {
      // Get current link attributes
      const currentAttributes = editor.getAttributes('link')
      const currentHref = currentAttributes.href || ''

      getLinkUserInput(editor, currentHref)
    }
    else {
      getLinkUserInput(editor)
    }
  }

  defineTipTapPlugin({
    extensions: [
      Link.configure({
        openOnClick: false,
        defaultProtocol: 'https',
        protocols: ['http', 'https', 't3']
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
        hooks: {
          // catch all link clicks and open in new tab
          onEditorMounted: ({ editor }) => {
            // editor.view.dom.addEventListener('click', (event) => {
            //   const target = event.target as HTMLElement
            //   if (target.tagName === 'A') {
            //     event.preventDefault()
            //     event.stopImmediatePropagation()
            //     console.log('Link click blocked!')
            //   }
            // })

            // console.log(1756816574113, editor)
            // editor.view.dom.addEventListener('click', (event) => {
            //   const target = event.target as HTMLElement
            //
            //   if (target.tagName !== 'A')
            //     return
            //
            //   event.preventDefault()
            //   event.stopPropagation()
            //
            //   console.log('Self-calling arrow function executed!')
            //
            //   handleLinkAction(editor)
            // })
          },
        },
        onExecute: ({ editor }) => handleLinkAction(editor),
      },
    ],
  })
}
