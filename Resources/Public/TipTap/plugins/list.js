import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { i as n, t as r } from "../dist-CAgHnqBy.js";
//#region src/plugins/list.ts
function i(i) {
	let a = t({
		pluginId: "list",
		config: i,
		getValidationSchema: (e) => e.object({ types: e.array(e.enum(["bullet", "ordered"])).min(1) })
	}), o = [], s = [];
	return a.types.includes("bullet") && (o.push(r), s.push({
		id: "list-bullet",
		label: "Bullet List",
		iconIdentifier: "list-bullet",
		position: {
			toolbarGroupId: "formatting",
			bubbleMenuGroupId: !1
		},
		status: {
			isActive: ({ editor: e }) => e.isActive("bulletList"),
			isDisabled: ({ editor: e }) => !e.can().toggleBulletList() && !e.can().toggleOrderedList()
		},
		onExecute: ({ editor: e }) => {
			e.chain().focus().toggleBulletList().run();
		}
	})), a.types.includes("ordered") && (o.push(n), s.push({
		id: "list-ordered",
		label: "Ordered List",
		iconIdentifier: "list-ordered",
		position: {
			toolbarGroupId: "formatting",
			bubbleMenuGroupId: !1
		},
		status: {
			isActive: ({ editor: e }) => e.isActive("orderedList"),
			isDisabled: ({ editor: e }) => !e.can().toggleOrderedList() && !e.can().toggleBulletList()
		},
		onExecute: ({ editor: e }) => {
			e.chain().focus().toggleOrderedList().run();
		}
	})), e({
		extensions: o,
		commands: s
	});
}
//#endregion
export { i as default };
