import type { Editor } from '@tiptap/core'
import { objectEntries } from '@antfu/utils'
import LinkBrowser from '@typo3/backend/link-browser.js'
import Modal from '@typo3/backend/modal.js'
import RegularEvent from '@typo3/core/event/regular-event.js'

class RteLinkBrowser {
  protected editor: Editor | undefined

  public initialize(): void {
    // we get the editor instance from the modal
    this.editor = Modal.currentModal.userData.editor

    const removeLinkElement = document.querySelector('.t3js-removeCurrentLink')
    if (removeLinkElement !== null) {
      new RegularEvent('click', (e: Event): void => {
        e.preventDefault()
        Modal.dismiss()
        this.editor?.chain().focus().extendMarkRange('link').unsetLink().run()
      }).bindTo(removeLinkElement)
    }
  }

  /**
   * Store the final link
   *
   * @param {string} link The select element or anything else which identifies the link (e.g. "page:<pageUid>" or "file:<uid>")
   */
  public finalizeFunction(link: string): void {
    if (!this.editor) {
      throw new Error('Editor instance is not set in RteLinkBrowser')
    }

    const linkAttributes: Record<string, string> = {}
    objectEntries(LinkBrowser.getLinkAttributeValues()).forEach(([key, value]) => {
      if (!value || typeof value !== 'string')
        return

      linkAttributes[key as string] = value
    })

    this.editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: link, ...linkAttributes })
      .run()

    Modal.dismiss()
  }
}

const rteLinkBrowser = new RteLinkBrowser()

LinkBrowser.finalizeFunction = (link: string): void => {
  rteLinkBrowser.finalizeFunction(link)
}

export default rteLinkBrowser
