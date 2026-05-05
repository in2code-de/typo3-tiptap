import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { a as n } from "../dist-BmtwYQ_m.js";
//#region src/plugins/history.ts
function r(r) {
	let i = t({
		pluginId: "history",
		config: r,
		getValidationSchema: (e) => e.object({ types: e.array(e.enum(["undo", "redo"])).min(1) }, { error: "Must be an object with a \"types\" property that is an array containing at least one of \"undo\" or \"redo\"" })
	}), a = [];
	return i.types.includes("undo") && a.push({
		id: "undo",
		label: "Undo last action",
		iconIdentifier: "undo",
		position: {
			toolbarGroupId: "history",
			bubbleMenuGroupId: !1
		},
		status: { isDisabled: ({ editor: e }) => !e.can().undo() },
		onExecute: ({ editor: e }) => {
			e.chain().focus().undo().run();
		}
	}), i.types.includes("redo") && a.push({
		id: "redo",
		label: "Redo last action",
		iconIdentifier: "redo",
		position: {
			toolbarGroupId: "history",
			bubbleMenuGroupId: !1
		},
		status: { isDisabled: ({ editor: e }) => !e.can().redo() },
		onExecute: ({ editor: e }) => {
			e.chain().focus().redo().run();
		}
	}), e({
		extensions: [n],
		commands: a
	});
}
//#endregion
export { r as default };
