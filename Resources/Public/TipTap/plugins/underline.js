import { n as e } from "../configuration-BT9xaJ2A.js";
import { n as t } from "../dist-BWgsjEEi.js";
//#region src/plugins/underline.ts
function n() {
	return e({
		extensions: [t],
		commands: [{
			id: "underline",
			label: "Underline",
			iconIdentifier: "underline",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: "formatting"
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("underline"),
				isDisabled: ({ editor: e }) => !e.can().toggleUnderline() || e.state.selection.empty
			},
			onExecute: ({ editor: e }) => {
				e.chain().focus().toggleUnderline().run();
			}
		}]
	});
}
//#endregion
export { n as default };
