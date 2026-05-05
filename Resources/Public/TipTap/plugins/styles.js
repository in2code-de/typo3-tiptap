import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { h as n, t as r } from "../styles-DnnnwRYO.js";
import { i } from "../dist-BppL3qHu.js";
import { n as a } from "../dist-DMA-Qmgt.js";
//#region src/utils.ts
function o(e, t = 300) {
	let n, r = 0, i = !1;
	return (...a) => {
		let o = Date.now();
		return (!i || o - r >= t) && (n = e(...a), r = o, i = !0), n;
	};
}
//#endregion
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
var u = /* @__PURE__ */ "paragraph.heading.blockquote.codeBlock.bulletList.orderedList.listItem.horizontalRule.hardBreak.taskList.taskItem.table.tableRow.tableCell.tableHeader.image.video.audio.figure.figcaption.superscript.subscript.columns.column.details.summary.div.span.bold.italic.underline.strike.code.link".split("."), d = i.create({
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
function f(i) {
	let s = t({
		pluginId: "styles",
		config: i,
		getValidationSchema: () => r
	}), c = n(), u = (e) => e.replaceAll(" ", "_").toLowerCase();
	return e({
		extensions: [d],
		commands: s.styles.map((e, t) => {
			let n = o(({ editor: t }) => t.commands.hasNodeClass(e.classes), 300), r = o(() => c.value?.tagName === e.element, 300), i = e.classes;
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
					isVisible: r
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().toggleNodeClass(i).run();
				},
				hooks: { onEditorMounted: t === 0 ? ({ editor: e }) => {
					let t = a(250, () => {
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
