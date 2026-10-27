import { n as e } from "../configuration-BT9xaJ2A.js";
import { n as t, t as n } from "../source-view-CBKUoe0j.js";
//#region src/plugins/source.ts
function r() {
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
			let r = n(e), i = r ? e.getText() : `<textarea>${e.getHTML()}</textarea>`;
			t(e, !r), e.commands.setContent(i);
		},
		hooks: { onEditorMounted: ({ editor: e }) => {
			t(e, !1);
		} }
	}] });
}
//#endregion
export { r as default };
