import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { _ as n, r, t as i } from "../styles-BrKaae6w.js";
import { i as a } from "../dist-BppL3qHu.js";
import { n as o } from "../dist-CGWReKV2.js";
//#region src/plugins/styles.ts
function s(e) {
	return e.type.name === "heading" && e.attrs?.level ? `h${e.attrs.level}` : e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] && e.type.spec.parseDOM[0].tag || e.type.name;
}
function c(e) {
	return e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] ? e.type.spec.parseDOM[0].tag.split("[")[0] : null;
}
function l(e) {
	let { selection: t } = e, { from: n, to: r } = t, i = e.doc.resolve(n), a = e.doc.resolve(r);
	if (i.sameParent(a)) {
		let t = [];
		if (n === r) t = [...i.marks()];
		else {
			let a = n + 1 < r ? n + 1 : n;
			try {
				if (t = [...e.doc.resolve(a).marks()], r - n > 1) for (let i = n + 1; i < r; i++) {
					let n = [...e.doc.resolve(i).marks()];
					t = t.filter((e) => n.some((t) => t.type === e.type));
				}
			} catch {
				t = [...i.marks()];
			}
		}
		let a = t.find((e) => {
			let t = c(e);
			return t && t !== "span";
		});
		if (a) return {
			tagName: c(a),
			mark: a
		};
		for (let e = i.depth; e >= 0; e--) {
			let t = i.node(e);
			if (t.type.name !== "doc") return {
				node: t,
				tagName: s(t)
			};
		}
	}
	for (let e = Math.min(i.depth, a.depth); e >= 0; e--) {
		let t = i.node(e);
		if (t.type.name !== "doc") return {
			node: t,
			tagName: s(t)
		};
	}
	return {
		node: e.doc,
		tagName: "doc"
	};
}
var u = /* @__PURE__ */ "paragraph.heading.blockquote.codeBlock.bulletList.orderedList.listItem.horizontalRule.hardBreak.taskList.taskItem.table.tableRow.tableCell.tableHeader.image.video.audio.figure.figcaption.superscript.subscript.columns.column.details.summary.div.span.bold.italic.underline.strike.code.link".split("."), d = a.create({
	name: "styles",
	addGlobalAttributes() {
		return [{
			types: u,
			attributes: { class: {
				default: null,
				parseHTML: (e) => e.getAttribute("class") || null,
				renderHTML: (e) => e.class ? { class: e.class } : {}
			} }
		}];
	},
	addCommands() {
		return {
			toggleNodeClass: (e) => ({ editor: t, commands: n }) => {
				let { selection: r } = t.state, i = r.$from.node(), a = l(t.state);
				if (a.mark) {
					n.extendMarkRange(a.mark.type);
					let t = (a.mark.attrs.class || "").trim(), r = e.trim();
					return t === r ? n.updateAttributes(a.mark.type.name, { class: null }) : n.updateAttributes(a.mark.type.name, { class: r.length > 0 ? r : null });
				} else if (a.node) {
					let t = (i.attrs.class || "").trim(), r = e.trim();
					return t === r ? n.updateAttributes(i.type.name, { class: null }) : n.updateAttributes(i.type.name, { class: r.length > 0 ? r : null });
				}
				return !1;
			},
			hasNodeClass: (e) => ({ editor: t }) => {
				let { selection: n } = t.state, r = n.$from.node(), i = l(t.state);
				if (i.mark) {
					let t = (i.mark.attrs.class || "").split(" ").filter(Boolean).toSorted();
					return e.split(" ").filter(Boolean).toSorted().every((e) => t.includes(e));
				} else if (i.node) {
					let t = (r.attrs.class || "").split(" ").filter(Boolean).toSorted();
					return e.split(" ").filter(Boolean).toSorted().every((e) => t.includes(e));
				}
				return !1;
			}
		};
	}
});
function f(a) {
	let s = t({
		pluginId: "styles",
		config: a,
		getValidationSchema: () => i
	}), c = n(), u = (e) => e.replaceAll(" ", "_").toLowerCase();
	return e({
		extensions: [d],
		commands: s.styles.map((e, t) => {
			let n = r(({ editor: t }) => t.commands.hasNodeClass(e.classes), 300), i = r(() => c.value?.tagName === e.element, 300), a = e.classes;
			return {
				id: u(`style:${e.name}`),
				label: e.name,
				iconIdentifier: "styles",
				position: {
					toolbarGroupId: "styles",
					bubbleMenuGroupId: "styles"
				},
				status: {
					isActive: n,
					isVisible: i
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().toggleNodeClass(a).run();
				},
				hooks: { onEditorMounted: t === 0 ? ({ editor: e }) => {
					let t = o(250, () => {
						let t = l(e.state);
						c.value = t, e.emit("parentNodeChanged", t);
					});
					e.on("selectionUpdate", t);
				} : void 0 }
			};
		})
	});
}
//#endregion
export { f as default };
