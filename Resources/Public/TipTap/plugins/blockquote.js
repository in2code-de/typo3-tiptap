import { n as e } from "../configuration-BT9xaJ2A.js";
import { n as t } from "../dist-CqIetMmg.js";
//#region src/plugins/blockquote.ts
function n() {
	return e({
		extensions: [t],
		commands: [{
			id: "blockquote",
			label: "Blockquote",
			iconIdentifier: "blockquote",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: !1
			},
			status: { isActive: ({ editor: e }) => e.isActive("blockquote") },
			onExecute: ({ editor: e }) => {
				e.chain().focus().toggleBlockquote().run();
			}
		}]
	});
}
//#endregion
export { n as default };
