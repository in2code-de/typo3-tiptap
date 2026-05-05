import { t as e } from "./dist-DMA-Qmgt.js";
import t from "@typo3/backend/link-browser.js";
import n from "@typo3/backend/modal.js";
import r from "@typo3/core/event/regular-event.js";
var i = new class {
	initialize() {
		this.editor = n.currentModal.userData.editor;
		let e = document.querySelector(".t3js-removeCurrentLink");
		e !== null && new r("click", (e) => {
			e.preventDefault(), n.dismiss(), this.editor?.chain().focus().extendMarkRange("link").unsetLink().run();
		}).bindTo(e);
	}
	finalizeFunction(r) {
		if (!this.editor) throw Error("Editor instance is not set in RteLinkBrowser");
		let i = { target: "_self" };
		e(t.getLinkAttributeValues()).forEach(([e, t]) => {
			!t || typeof t != "string" || (i[e] = t);
		}), this.editor.chain().focus().extendMarkRange("link").setLink({
			href: r,
			...i
		}).run(), n.dismiss();
	}
}();
t.finalizeFunction = (e) => {
	i.finalizeFunction(e);
};
//#endregion
export { i as default };
