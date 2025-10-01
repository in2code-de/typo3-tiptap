import { o as a } from "./index-e_Ie-2wz.js";
import o from "@typo3/backend/link-browser.js";
import n from "@typo3/backend/modal.js";
import c from "@typo3/core/event/regular-event.js";
class u {
  initialize() {
    this.editor = n.currentModal.userData.editor;
    const i = document.querySelector(".t3js-removeCurrentLink");
    i !== null && new c("click", (e) => {
      e.preventDefault(), n.dismiss(), this.editor?.chain().focus().extendMarkRange("link").unsetLink().run();
    }).bindTo(i);
  }
  /**
   * Store the final link
   *
   * @param {string} link The select element or anything else which identifies the link (e.g. "page:<pageUid>" or "file:<uid>")
   */
  finalizeFunction(i) {
    if (!this.editor)
      throw new Error("Editor instance is not set in RteLinkBrowser");
    const e = {};
    a(o.getLinkAttributeValues()).forEach(([s, t]) => {
      !t || typeof t != "string" || (e[s] = t);
    }), this.editor.chain().focus().extendMarkRange("link").setLink({ href: i, ...e }).run(), n.dismiss();
  }
}
const f = new u();
o.finalizeFunction = (r) => {
  f.finalizeFunction(r);
};
export {
  f as default
};
