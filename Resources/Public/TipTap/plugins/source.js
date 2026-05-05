import { n as e } from "../configuration-BT9xaJ2A.js";
//#region src/plugins/source.ts
var t = "data-tiptap-source-view-active";
function n(e) {
	return e.view.dom.getAttribute(t) === "true";
}
function r(e, n) {
	e.view.dom.setAttribute(t, n.toString());
}
function i() {
	return e({ commands: [{
		id: "source",
		label: "Source",
		iconIdentifier: "source",
		position: {
			toolbarGroupId: "developer",
			bubbleMenuGroupId: !1
		},
		status: { isActive: ({ editor: e }) => n(e) },
		onExecute: ({ editor: e }) => {
			let t = n(e), i = t ? e.getText() : `<textarea>${e.getHTML()}</textarea>`;
			r(e, !t), e.commands.setContent(i);
		},
		hooks: { onEditorMounted: ({ editor: e }) => {
			r(e, !1);
		} }
	}] });
}
//#endregion
export { i as default, n as getEditorSourceViewActiveStatus, r as saveEditorSourceViewActiveStatus };
