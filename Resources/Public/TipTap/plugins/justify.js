import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { i as n } from "../dist-BppL3qHu.js";
//#region src/plugins/justify.ts
var r = [
	"left",
	"center",
	"right"
], i = ["heading", "paragraph"], a = {
	left: "Align Left",
	center: "Align Center",
	right: "Align Right"
};
function o(e, t) {
	let n = e.isActive({ textAlign: t }) ? null : t, r = e.chain().focus();
	return i.forEach((e) => r.updateAttributes(e, { textAlign: n })), r.run();
}
function s(s) {
	let c = t({
		pluginId: "justify",
		config: s ?? {},
		getValidationSchema: (e) => e.object({
			left: e.union([e.string(), e.literal(!1)]).default("text-left"),
			center: e.union([e.string(), e.literal(!1)]).default("text-center"),
			right: e.union([e.string(), e.literal(!1)]).default("text-right")
		})
	}), l = {}, u = {};
	for (let e of r) c[e] !== !1 && (l[e] = c[e], u[c[e]] = e);
	let d = Object.keys(l), f = n.create({
		name: "textAlignClass",
		addGlobalAttributes() {
			return [{
				types: [...i],
				attributes: { textAlign: {
					default: null,
					parseHTML: (e) => {
						for (let t of e.classList) if (u[t]) return e.classList.remove(t), u[t];
						return null;
					},
					renderHTML: (e) => {
						let t = e.textAlign;
						return !t || !l[t] ? {} : { class: l[t] };
					}
				} }
			}];
		}
	}), p = d.map((e) => ({
		id: `justify-${e}`,
		label: a[e],
		iconIdentifier: `justify-${e}`,
		position: {
			toolbarGroupId: "textAlignment",
			bubbleMenuGroupId: "textAlignment"
		},
		status: {
			isActive: ({ editor: t }) => t.isActive({ textAlign: e }),
			isDisabled: ({ editor: t }) => i.every((n) => !t.can().updateAttributes(n, { textAlign: e }))
		},
		onExecute: ({ editor: t }) => {
			o(t, e);
		}
	}));
	return e({
		extensions: [f],
		commands: p
	});
}
//#endregion
export { s as default };
