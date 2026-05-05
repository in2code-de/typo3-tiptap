import { n as e } from "../configuration-BT9xaJ2A.js";
import { n as t } from "../dist-BpFqfqnc.js";
//#region src/plugins/bold.ts
function n() {
	return e({
		extensions: [t],
		commands: [{
			id: "bold",
			label: "Bold",
			iconIdentifier: "bold",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: "formatting"
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("bold"),
				isDisabled: ({ editor: e }) => !e.can().toggleBold() || e.state.selection.empty
			},
			onExecute: ({ editor: e }) => {
				e.chain().focus().toggleBold().updateAttributes("strong", { class: null }).run();
			}
		}]
	});
}
//#endregion
export { n as default };
