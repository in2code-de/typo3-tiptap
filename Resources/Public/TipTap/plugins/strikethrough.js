import { n as e } from "../configuration-BT9xaJ2A.js";
//#region src/plugins/strikethrough.ts
function t() {
	return e({ commands: [{
		id: "strike",
		label: "strike",
		iconIdentifier: "strike",
		position: {
			toolbarGroupId: "formatting",
			bubbleMenuGroupId: "formatting"
		},
		status: {
			isActive: ({ editor: e }) => e.isActive("strike"),
			isDisabled: ({ editor: e }) => !e.can().toggleStrike() || e.state.selection.empty
		},
		onExecute: ({ editor: e }) => {
			e.chain().focus().toggleStrike().run();
		}
	}] });
}
//#endregion
export { t as default };
