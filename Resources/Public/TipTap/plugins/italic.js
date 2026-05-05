import { n as e } from "../configuration-BT9xaJ2A.js";
import { n as t } from "../dist-D5bVvPqr.js";
//#region src/plugins/italic.ts
function n() {
	return e({
		extensions: [t],
		commands: [{
			id: "italic",
			label: "Italic",
			iconIdentifier: "italic",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: "formatting"
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("italic"),
				isDisabled: ({ editor: e }) => !e.can().toggleItalic() || e.state.selection.empty
			},
			onExecute: ({ editor: e }) => {
				e.chain().focus().toggleItalic().run();
			}
		}]
	});
}
//#endregion
export { n as default };
