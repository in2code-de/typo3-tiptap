/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

import LinkBrowser, { type LinkAttributes } from '@typo3/backend/link-browser.js';
import Modal from '@typo3/backend/modal.js';
import RegularEvent from '@typo3/core/event/regular-event.js';

class RteLinkBrowser {
  protected editor = null;

  public initialize(): void {
    // we get the editor instance from the modal
    this.editor = Modal.currentModal.userData.editor;

    const removeLinkElement = document.querySelector('.t3js-removeCurrentLink');
    if (removeLinkElement !== null) {
      new RegularEvent('click', (e: Event): void => {
        e.preventDefault();
        Modal.dismiss();
      }).bindTo(removeLinkElement);
    }
  }

  /**
   * Store the final link
   *
   * @param {String} link The select element or anything else which identifies the link (e.g. "page:<pageUid>" or "file:<uid>")
   */
  public finalizeFunction(link: string): void {
    const attributes = LinkBrowser.getLinkAttributeValues();
    const queryParams = attributes.params ? attributes.params : '';
    delete attributes.params;

    const linkText = ''; // @todo future feature: e.g. add page title as link-text (if applicable)
    const linkAttrs = this.convertAttributes(attributes, linkText);
    // we set the link with the editor instance from the modal
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.editor.chain().focus().extendMarkRange('link').setLink({ href: link }).run();
    Modal.dismiss();
  }

  private convertAttributes(attributes: LinkAttributes, text?: string) {
    const linkAttr: { attrs: { [key: string]: string}, linkText?: string} = { attrs: {} };
    for (const [attribute, value] of Object.entries(attributes)) {
      linkAttr.attrs[attribute] = value;
    }
    if (typeof text === 'string' && text !== '') {
      linkAttr.linkText = text;
    }
    return linkAttr;
  }

  private sanitizeLink(link: string, queryParams: string): string {
    // @todo taken from previous code - enhance generation
    // Make sure, parameters and anchor are in correct order
    const linkMatch = link.match(/^([a-z0-9]+:\/\/[^:/?#]+(?:\/?[^?#]*)?)(\??[^#]*)(#?.*)$/);
    if (linkMatch && linkMatch.length > 0) {
      link = linkMatch[1] + linkMatch[2];
      const paramsPrefix = linkMatch[2].length > 0 ? '&' : '?';
      if (queryParams.length > 0) {
        if (queryParams.startsWith('&')) {
          queryParams = queryParams.substr(1);
        }
        // If params is set, append it
        if (queryParams.length > 0) {
          link += paramsPrefix + queryParams;
        }
      }
      link += linkMatch[3];
    }
    return link;
  }
}

// @todo check whether this is still required - if, document why/where
const rteLinkBrowser = new RteLinkBrowser();
export default rteLinkBrowser;
LinkBrowser.finalizeFunction = (link: string): void => { rteLinkBrowser.finalizeFunction(link); };
