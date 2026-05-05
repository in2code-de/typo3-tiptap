import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { Gt as n, Tn as r, V as i, Z as a, _ as o, i as s, u as c } from "../dist-BppL3qHu.js";
import { _ as l, a as u, c as d, d as f, f as p, g as m, h, i as g, l as _, m as v, n as y, o as b, p as x, r as S, s as C, t as w, u as T } from "../tables-NWFOyHuO.js";
//#region node_modules/@tiptap/extension-table/dist/index.js
function E(e) {
	return e === "left" || e === "right" || e === "center" ? e : null;
}
function D(e) {
	let t = (e.style.textAlign || "").trim().toLowerCase(), n = (e.getAttribute("align") || "").trim().toLowerCase();
	return E(t || n);
}
function O(e) {
	return E(e?.align);
}
function k() {
	return {
		default: null,
		parseHTML: (e) => D(e),
		renderHTML: (e) => e.align ? { style: `text-align: ${e.align}` } : {}
	};
}
var A = c.create({
	name: "tableCell",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth"), n = t ? t.split(",").map((e) => parseInt(e, 10)) : null;
					if (!n) {
						let t = e.closest("table")?.querySelectorAll("colgroup > col"), n = Array.from(e.parentElement?.children || []).indexOf(e);
						if (n && n > -1 && t && t[n]) {
							let e = t[n].getAttribute("width");
							return e ? [parseInt(e, 10)] : null;
						}
					}
					return n;
				}
			},
			align: k()
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{ tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"td",
			n(this.options.HTMLAttributes, e),
			0
		];
	}
}), j = c.create({
	name: "tableHeader",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth");
					return t ? t.split(",").map((e) => parseInt(e, 10)) : null;
				}
			},
			align: k()
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{ tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"th",
			n(this.options.HTMLAttributes, e),
			0
		];
	}
}), M = c.create({
	name: "tableRow",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "(tableCell | tableHeader)*",
	tableRole: "row",
	parseHTML() {
		return [{ tag: "tr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"tr",
			n(this.options.HTMLAttributes, e),
			0
		];
	}
});
function N(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function P(e, t, n, r, i, a) {
	var o;
	let s = 0, c = !0, l = t.firstChild, u = e.firstChild;
	if (u !== null) for (let e = 0, n = 0; e < u.childCount; e += 1) {
		let { colspan: o, colwidth: d } = u.child(e).attrs;
		for (let e = 0; e < o; e += 1, n += 1) {
			let o = i === n ? a : d && d[e], u = o ? `${o}px` : "";
			if (s += o || r, o || (c = !1), l) {
				if (l.style.width !== u) {
					let [e, t] = N(r, o);
					l.style.setProperty(e, t);
				}
				l = l.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = N(r, o);
				e.style.setProperty(n, i), t.appendChild(e);
			}
		}
	}
	for (; l;) {
		let e = l.nextSibling;
		(o = l.parentNode) == null || o.removeChild(l), l = e;
	}
	let d = e.attrs.style && typeof e.attrs.style == "string" && /\bwidth\s*:/i.test(e.attrs.style);
	c && !d ? (n.style.width = `${s}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${s}px`);
}
var F = class {
	constructor(e, t) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), P(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type === this.node.type ? (this.node = e, P(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !!(n && !r && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
	}
};
function I(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = N(t, s);
			o.push(["col", { style: `${l}: ${d}` }]);
		}
	}
	let c = a ? `${i}px` : "", l = a ? "" : `${i}px`;
	return {
		colgroup: [
			"colgroup",
			{},
			...o
		],
		tableWidth: c,
		tableMinWidth: l
	};
}
function L(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function R(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function z(e, t, n, r, i) {
	let a = R(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = L(a.cell, i);
		if (e && s.push(e), r) {
			let e = L(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function B(e) {
	return e instanceof w;
}
var V = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!B(t)) return !1;
	let n = 0;
	return i(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
};
function H(e) {
	return (e || "").replace(/\s+/g, " ").trim();
}
function U(e, t, n = {}) {
	let r = n.cellLineSeparator ?? "";
	if (!e || !e.content || e.content.length === 0) return "";
	let i = [];
	e.content.forEach((e) => {
		let n = [];
		e.content && e.content.forEach((e) => {
			let i = "";
			i = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => t.renderChildren(e)).join(r) : e.content ? t.renderChildren(e.content) : "";
			let a = H(i), o = e.type === "tableHeader", s = O(e.attrs);
			n.push({
				text: a,
				isHeader: o,
				align: s
			});
		}), i.push(n);
	});
	let a = i.reduce((e, t) => Math.max(e, t.length), 0);
	if (a === 0) return "";
	let o = Array(a).fill(0);
	i.forEach((e) => {
		for (let t = 0; t < a; t += 1) {
			let n = (e[t]?.text || "").length;
			n > o[t] && (o[t] = n), o[t] < 3 && (o[t] = 3);
		}
	});
	let s = (e, t) => e + " ".repeat(Math.max(0, t - e.length)), c = i[0], l = c.some((e) => e.isHeader), u = Array(a).fill(null);
	i.forEach((e) => {
		for (let t = 0; t < a; t += 1) !u[t] && e[t]?.align && (u[t] = e[t].align);
	});
	let d = "\n", f = Array(a).fill(0).map((e, t) => l && c[t] && c[t].text || "");
	return d += `| ${f.map((e, t) => s(e, o[t])).join(" | ")} |
`, d += `| ${o.map((e, t) => {
		let n = Math.max(3, e), r = u[t];
		return r === "left" ? `:${"-".repeat(n)}` : r === "right" ? `${"-".repeat(n)}:` : r === "center" ? `:${"-".repeat(n)}:` : "-".repeat(n);
	}).join(" | ")} |
`, (l ? i.slice(1) : i).forEach((e) => {
		d += `| ${Array(a).fill(0).map((t, n) => s(e[n] && e[n].text || "", o[n])).join(" | ")} |
`;
	}), d;
}
var W = U, G = c.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: F,
			lastColumnResizable: !0,
			allowTableNodeSelection: !1
		};
	},
	content: "tableRow+",
	tableRole: "table",
	isolating: !0,
	group: "block",
	parseHTML() {
		return [{ tag: "table" }];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		let { colgroup: r, tableWidth: i, tableMinWidth: a } = I(e, this.options.cellMinWidth), o = t.style;
		function s() {
			return o || (i ? `width: ${i}` : `min-width: ${a}`);
		}
		let c = [
			"table",
			n(this.options.HTMLAttributes, t, { style: s() }),
			r,
			["tbody", 0]
		];
		return this.options.renderWrapper ? [
			"div",
			{ class: "tableWrapper" },
			c
		] : c;
	},
	parseMarkdown: (e, t) => {
		let n = [], r = Array.isArray(e.align) ? e.align : [];
		if (e.header) {
			let i = [];
			e.header.forEach((e, n) => {
				let a = E(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableHeader", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}
		return e.rows && e.rows.forEach((e) => {
			let i = [];
			e.forEach((e, n) => {
				let a = E(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableCell", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => W(e, t),
	addCommands() {
		return {
			insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {}) => ({ tr: i, dispatch: a, editor: o }) => {
				let s = z(o.schema, e, t, n);
				if (a) {
					let e = i.selection.from + 1;
					i.replaceSelectionWith(s).scrollIntoView().setSelection(r.near(i.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => S(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => y(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => C(e, t),
			addRowBefore: () => ({ state: e, dispatch: t }) => u(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => g(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => d(e, t),
			deleteTable: () => ({ state: e, dispatch: t }) => _(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => p(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => v(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => m("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => m("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => l(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => p(e, t) ? !0 : v(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => x(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => f(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => f(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && T(e), !0),
			setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
				if (n) {
					let n = w.create(t.doc, e.anchorCell, e.headCell);
					t.setSelection(n);
				}
				return !0;
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
			"Shift-Tab": () => this.editor.commands.goToPreviousCell(),
			Backspace: V,
			"Mod-Backspace": V,
			Delete: V,
			"Mod-Delete": V
		};
	},
	addProseMirrorPlugins() {
		return [...this.options.resizable && this.editor.isEditable ? [b({
			handleWidth: this.options.handleWidth,
			cellMinWidth: this.options.cellMinWidth,
			defaultCellMinWidth: this.options.cellMinWidth,
			View: this.options.View,
			lastColumnResizable: this.options.lastColumnResizable
		})] : [], h({ allowTableNodeSelection: this.options.allowTableNodeSelection })];
	},
	extendNodeSchema(e) {
		return { tableRole: o(a(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
});
s.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(G.configure(this.options.table)), this.options.tableCell !== !1 && e.push(A.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(j.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(M.configure(this.options.tableRow)), e;
	}
});
//#endregion
//#region src/plugins/table.ts
function K(n) {
	let r = t({
		pluginId: "table",
		config: n ?? {},
		getValidationSchema: (e) => e.object({
			defaultRows: e.number().int().min(1).max(20).default(3),
			defaultCols: e.number().int().min(1).max(20).default(3),
			withHeaderRow: e.boolean().default(!0)
		})
	});
	return e({
		extensions: [
			G.configure({ resizable: !0 }),
			M,
			j,
			A
		],
		commands: [
			{
				id: "table",
				label: "Insert Table",
				iconIdentifier: "table",
				position: {
					toolbarGroupId: "general",
					bubbleMenuGroupId: !1
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().insertTable({
						rows: r.defaultRows,
						cols: r.defaultCols,
						withHeaderRow: r.withHeaderRow
					}).run();
				}
			},
			{
				id: "table-delete",
				label: "Delete Table",
				iconIdentifier: "table-delete",
				position: {
					toolbarGroupId: "general",
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().deleteTable().run();
				}
			},
			{
				id: "table-toggle-header-row",
				label: "Toggle Header Row",
				iconIdentifier: "table-header-row",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().toggleHeaderRow().run();
				}
			},
			{
				id: "table-toggle-header-column",
				label: "Toggle Header Column",
				iconIdentifier: "table-header-column",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().toggleHeaderColumn().run();
				}
			},
			{
				id: "table-row-add-above",
				label: "Add Row Above",
				iconIdentifier: "table-row-add-above",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().addRowBefore().run();
				}
			},
			{
				id: "table-row-add-below",
				label: "Add Row Below",
				iconIdentifier: "table-row-add-below",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().addRowAfter().run();
				}
			},
			{
				id: "table-row-delete",
				label: "Delete Row",
				iconIdentifier: "table-row-delete",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: {
					isVisible: ({ editor: e }) => e.isActive("table"),
					isDisabled: ({ editor: e }) => !e.can().deleteRow()
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().deleteRow().run();
				}
			},
			{
				id: "table-column-add-before",
				label: "Add Column Before",
				iconIdentifier: "table-column-add-before",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().addColumnBefore().run();
				}
			},
			{
				id: "table-column-add-after",
				label: "Add Column After",
				iconIdentifier: "table-column-add-after",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: { isVisible: ({ editor: e }) => e.isActive("table") },
				onExecute: ({ editor: e }) => {
					e.chain().focus().addColumnAfter().run();
				}
			},
			{
				id: "table-column-delete",
				label: "Delete Column",
				iconIdentifier: "table-column-delete",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: {
					isVisible: ({ editor: e }) => e.isActive("table"),
					isDisabled: ({ editor: e }) => !e.can().deleteColumn()
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().deleteColumn().run();
				}
			},
			{
				id: "table-merge-cells",
				label: "Merge Cells",
				iconIdentifier: "table-merge-cells",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: {
					isVisible: ({ editor: e }) => e.isActive("table"),
					isDisabled: ({ editor: e }) => !e.can().mergeCells()
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().mergeCells().run();
				}
			},
			{
				id: "table-split-cell",
				label: "Split Cell",
				iconIdentifier: "table-split-cell",
				position: {
					toolbarGroupId: !1,
					bubbleMenuGroupId: "table"
				},
				status: {
					isVisible: ({ editor: e }) => e.isActive("table"),
					isDisabled: ({ editor: e }) => !e.can().splitCell()
				},
				onExecute: ({ editor: e }) => {
					e.chain().focus().splitCell().run();
				}
			}
		]
	});
}
//#endregion
export { K as default };
