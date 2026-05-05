import { Ct as e, Gt as t, Qt as n, St as r, at as i, hn as a, i as o, jt as s, nn as c, ot as l, rt as u, u as d } from "./dist-BppL3qHu.js";
//#region node_modules/@tiptap/extension-list/dist/index.js
var f = Object.defineProperty, p = (e, t) => {
	for (var n in t) f(e, n, {
		get: t[n],
		enumerable: !0
	});
}, m = "listItem", h = "textStyle", g = /^\s*([-+*])\s$/, _ = d.create({
	name: "bulletList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{ tag: "ul" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			t(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => e.type !== "list" || e.ordered ? [] : {
		type: "bulletList",
		content: e.items ? t.parseChildren(e.items) : []
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(m, this.editor.getAttributes(h)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = a({
			find: g,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = a({
			find: g,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(h),
			editor: this.editor
		})), [e];
	}
}), v = d.create({
	name: "listItem",
	addOptions() {
		return {
			HTMLAttributes: {},
			bulletListTypeName: "bulletList",
			orderedListTypeName: "orderedList"
		};
	},
	content: "paragraph block*",
	defining: !0,
	parseHTML() {
		return [{ tag: "li" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"li",
			t(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list_item",
	parseMarkdown: (e, t) => {
		if (e.type !== "list_item") return [];
		let n = t.parseBlockChildren ?? t.parseChildren, r = [];
		if (e.tokens && e.tokens.length > 0) if (e.tokens.some((e) => e.type === "paragraph")) r = n(e.tokens);
		else {
			let i = e.tokens[0];
			if (i && i.type === "text" && i.tokens && i.tokens.length > 0) {
				if (r = [{
					type: "paragraph",
					content: t.parseInline(i.tokens)
				}], e.tokens.length > 1) {
					let t = n(e.tokens.slice(1));
					r.push(...t);
				}
			} else r = n(e.tokens);
		}
		return r.length === 0 && (r = [{
			type: "paragraph",
			content: []
		}]), {
			type: "listItem",
			content: r
		};
	},
	renderMarkdown: (e, t, n) => c(e, t, (e) => e.parentType === "bulletList" ? "- " : e.parentType === "orderedList" ? `${(e.meta?.parentAttrs?.start || 1) + e.index}. ` : "- ", n),
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
});
p({}, {
	findListItemPos: () => y,
	getNextListDepth: () => b,
	handleBackspace: () => w,
	handleDelete: () => D,
	hasListBefore: () => x,
	hasListItemAfter: () => O,
	hasListItemBefore: () => S,
	listItemHasSubList: () => C,
	nextListIsDeeper: () => T,
	nextListIsHigher: () => E
});
var y = (e, t) => {
	let { $from: n } = t.selection, r = i(e, t.schema), a = null, o = n.depth, s = n.pos, c = null;
	for (; o > 0 && c === null;) a = n.node(o), a.type === r ? c = o : (--o, --s);
	return c === null ? null : {
		$pos: t.doc.resolve(s),
		depth: c
	};
}, b = (e, t) => {
	let n = y(e, t);
	if (!n) return !1;
	let [, r] = u(t, e, n.$pos.pos + 4);
	return r;
}, x = (e, t, n) => {
	let { $anchor: r } = e.selection, i = Math.max(0, r.pos - 2), a = e.doc.resolve(i).node();
	return !(!a || !n.includes(a.type.name));
}, S = (e, t) => {
	let { $anchor: n } = t.selection, r = t.doc.resolve(n.pos - 2);
	return !(r.index() === 0 || r.nodeBefore?.type.name !== e);
}, C = (e, t, n) => {
	if (!n) return !1;
	let r = i(e, t.schema), a = !1;
	return n.descendants((e) => {
		e.type === r && (a = !0);
	}), a;
}, w = (t, n, r) => {
	if (t.commands.undoInputRule()) return !0;
	if (t.state.selection.from !== t.state.selection.to) return !1;
	if (!s(t.state, n) && x(t.state, n, r)) {
		let { $anchor: e } = t.state.selection, r = t.state.doc.resolve(e.before() - 1), i = [];
		r.node().descendants((e, t) => {
			e.type.name === n && i.push({
				node: e,
				pos: t
			});
		});
		let a = i.at(-1);
		if (!a) return !1;
		let o = t.state.doc.resolve(r.start() + a.pos + 1);
		return t.chain().cut({
			from: e.start() - 1,
			to: e.end() + 1
		}, o.end()).joinForward().run();
	}
	if (!s(t.state, n) || !e(t.state)) return !1;
	let i = y(n, t.state);
	if (!i) return !1;
	let a = t.state.doc.resolve(i.$pos.pos - 2).node(i.depth), o = C(n, t.state, a);
	return S(n, t.state) && !o ? t.commands.joinItemBackward() : t.chain().liftListItem(n).run();
}, T = (e, t) => {
	let n = b(e, t), r = y(e, t);
	return !r || !n ? !1 : n > r.depth;
}, E = (e, t) => {
	let n = b(e, t), r = y(e, t);
	return !r || !n ? !1 : n < r.depth;
}, D = (e, t) => {
	if (!s(e.state, t) || !r(e.state, t)) return !1;
	let { selection: n } = e.state, { $from: i, $to: a } = n;
	return !n.empty && i.sameParent(a) ? !1 : T(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : E(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, O = (e, t) => {
	let { $anchor: n } = t.selection, r = t.doc.resolve(n.pos - n.parentOffset - 2);
	return !(r.index() === r.parent.childCount - 1 || r.nodeAfter?.type.name !== e);
}, k = o.create({
	name: "listKeymap",
	addOptions() {
		return { listTypes: [{
			itemName: "listItem",
			wrapperNames: ["bulletList", "orderedList"]
		}, {
			itemName: "taskItem",
			wrapperNames: ["taskList"]
		}] };
	},
	addKeyboardShortcuts() {
		return {
			Delete: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && D(e, n) && (t = !0);
				}), t;
			},
			"Mod-Delete": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && D(e, n) && (t = !0);
				}), t;
			},
			Backspace: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && w(e, n, r) && (t = !0);
				}), t;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && w(e, n, r) && (t = !0);
				}), t;
			}
		};
	}
}), A = /^(\s*)(\d+)\.\s+(.*)$/, j = /^\s/;
function M(e) {
	let t = e.trimStart();
	return /^[-+*]\s+/.test(t) || /^\d+\.\s+/.test(t) || /^>\s?/.test(t) || /^```/.test(t) || /^~~~/.test(t);
}
function N(e) {
	let t = [], n = [], r = !1;
	return e.forEach((e) => {
		if (r) {
			n.push(e);
			return;
		}
		if (e.trim() === "") {
			r = !0, n.push(e);
			return;
		}
		if (t.length > 0 && M(e)) {
			r = !0, n.push(e);
			return;
		}
		t.push(e);
	}), {
		paragraphLines: t,
		blockLines: n
	};
}
function P(e) {
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		let i = e[n], a = i.match(A);
		if (!a) break;
		let [, o, s, c] = a, l = o.length, u = [c], d = n + 1, f = [i], p = !1;
		for (; d < e.length;) {
			let t = e[d];
			if (t.match(A)) break;
			if (t.trim() === "") f.push(t), u.push(""), p = !0, d += 1;
			else if (t.match(j)) f.push(t), u.push(t.slice(l + 2)), d += 1;
			else {
				if (p) break;
				f.push(t), u.push(t), d += 1;
			}
		}
		t.push({
			indent: l,
			number: parseInt(s, 10),
			content: u.join("\n").trim(),
			contentLines: u,
			raw: f.join("\n")
		}), r = d, n = d;
	}
	return [t, r];
}
function F(e, t, n) {
	let r = [], i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a.indent === t) {
			let { paragraphLines: o, blockLines: s } = N(a.contentLines), c = o.join("\n").trim(), l = [];
			c && l.push({
				type: "paragraph",
				raw: c,
				tokens: n.inlineTokens(c)
			});
			let u = s.join("\n").trim();
			if (u) {
				let e = n.blockTokens(u);
				l.push(...e);
			}
			let d = i + 1, f = [];
			for (; d < e.length && e[d].indent > t;) f.push(e[d]), d += 1;
			if (f.length > 0) {
				let e = F(f, Math.min(...f.map((e) => e.indent)), n);
				l.push({
					type: "list",
					ordered: !0,
					start: f[0].number,
					items: e,
					raw: f.map((e) => e.raw).join("\n")
				});
			}
			r.push({
				type: "list_item",
				raw: a.raw,
				tokens: l
			}), i = d;
		} else i += 1;
	}
	return r;
}
function I(e, t) {
	return e.map((e) => {
		if (e.type !== "list_item") return t.parseChildren([e])[0];
		let n = [];
		return e.tokens && e.tokens.length > 0 && e.tokens.forEach((e) => {
			if (e.type === "paragraph" || e.type === "list" || e.type === "blockquote" || e.type === "code") n.push(...t.parseChildren([e]));
			else if (e.type === "text" && e.tokens) {
				let r = t.parseChildren([e]);
				n.push({
					type: "paragraph",
					content: r
				});
			} else {
				let r = t.parseChildren([e]);
				r.length > 0 && n.push(...r);
			}
		}), {
			type: "listItem",
			content: n
		};
	});
}
var L = "listItem", R = "textStyle", z = /^(\d+)\.\s$/, B = d.create({
	name: "orderedList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	addAttributes() {
		return {
			start: {
				default: 1,
				parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
			},
			type: {
				default: null,
				parseHTML: (e) => e.getAttribute("type")
			}
		};
	},
	parseHTML() {
		return [{ tag: "ol" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let { start: n, ...r } = e;
		return n === 1 ? [
			"ol",
			t(this.options.HTMLAttributes, r),
			0
		] : [
			"ol",
			t(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => {
		if (e.type !== "list" || !e.ordered) return [];
		let n = e.start || 1, r = e.items ? I(e.items, t) : [];
		return n === 1 ? {
			type: "orderedList",
			content: r
		} : {
			type: "orderedList",
			attrs: { start: n },
			content: r
		};
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "orderedList",
		level: "block",
		start: (e) => {
			let t = e.match(/^(\s*)(\d+)\.\s+/)?.index;
			return t === void 0 ? -1 : t;
		},
		tokenize: (e, t, n) => {
			let r = e.split("\n"), [i, a] = P(r);
			if (i.length === 0) return;
			let o = F(i, 0, n);
			if (o.length !== 0) return {
				type: "list",
				ordered: !0,
				start: i[0]?.number || 1,
				items: o,
				raw: r.slice(0, a).join("\n")
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(L, this.editor.getAttributes(R)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addInputRules() {
		let e = a({
			find: z,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = a({
			find: z,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(R)
			}),
			joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
			editor: this.editor
		})), [e];
	}
}), V = /^\s*(\[([( |x])?\])\s$/, H = d.create({
	name: "taskItem",
	addOptions() {
		return {
			nested: !1,
			HTMLAttributes: {},
			taskListTypeName: "taskList",
			a11y: void 0
		};
	},
	content() {
		return this.options.nested ? "paragraph block*" : "paragraph+";
	},
	defining: !0,
	addAttributes() {
		return { checked: {
			default: !1,
			keepOnSplit: !1,
			parseHTML: (e) => {
				let t = e.getAttribute("data-checked");
				return t === "" || t === "true";
			},
			renderHTML: (e) => ({ "data-checked": e.checked })
		} };
	},
	parseHTML() {
		return [{
			tag: `li[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ node: e, HTMLAttributes: n }) {
		return [
			"li",
			t(this.options.HTMLAttributes, n, { "data-type": this.name }),
			[
				"label",
				["input", {
					type: "checkbox",
					checked: e.attrs.checked ? "checked" : null
				}],
				["span"]
			],
			["div", 0]
		];
	},
	parseMarkdown: (e, t) => {
		let n = [];
		if (e.tokens && e.tokens.length > 0 ? n.push(t.createNode("paragraph", {}, t.parseInline(e.tokens))) : e.text ? n.push(t.createNode("paragraph", {}, [t.createNode("text", { text: e.text })])) : n.push(t.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
			let r = t.parseChildren(e.nestedTokens);
			n.push(...r);
		}
		return t.createNode("taskItem", { checked: e.checked || !1 }, n);
	},
	renderMarkdown: (e, t) => c(e, t, `- [${e.attrs?.checked ? "x" : " "}] `),
	addKeyboardShortcuts() {
		let e = {
			Enter: () => this.editor.commands.splitListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
		return this.options.nested ? {
			...e,
			Tab: () => this.editor.commands.sinkListItem(this.name)
		} : e;
	},
	addNodeView() {
		return ({ node: e, HTMLAttributes: t, getPos: n, editor: r }) => {
			let i = document.createElement("li"), a = document.createElement("label"), o = document.createElement("span"), s = document.createElement("input"), c = document.createElement("div"), u = (e) => {
				var t;
				s.ariaLabel = ((t = this.options.a11y)?.checkboxLabel)?.call(t, e, s.checked) || `Task item checkbox for ${e.textContent || "empty task item"}`;
			};
			u(e), a.contentEditable = "false", s.type = "checkbox", s.addEventListener("mousedown", (e) => e.preventDefault()), s.addEventListener("change", (t) => {
				if (!r.isEditable && !this.options.onReadOnlyChecked) {
					s.checked = !s.checked;
					return;
				}
				let { checked: i } = t.target;
				r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: e }) => {
					let t = n();
					if (typeof t != "number") return !1;
					let r = e.doc.nodeAt(t);
					return e.setNodeMarkup(t, void 0, {
						...r?.attrs,
						checked: i
					}), !0;
				}).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, i) || (s.checked = !s.checked));
			}), Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
				i.setAttribute(e, t);
			}), i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, a.append(s, o), i.append(a, c), Object.entries(t).forEach(([e, t]) => {
				i.setAttribute(e, t);
			});
			let d = new Set(Object.keys(t));
			return {
				dom: i,
				contentDOM: c,
				update: (e) => {
					if (e.type !== this.type) return !1;
					i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, u(e);
					let t = r.extensionManager.attributes, n = l(e, t), a = new Set(Object.keys(n)), o = this.options.HTMLAttributes;
					return d.forEach((e) => {
						a.has(e) || (e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e));
					}), Object.entries(n).forEach(([e, t]) => {
						t == null ? e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e) : i.setAttribute(e, t);
					}), d = a, !0;
				}
			};
		};
	},
	addInputRules() {
		return [a({
			find: V,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), U = d.create({
	name: "taskList",
	addOptions() {
		return {
			itemTypeName: "taskItem",
			HTMLAttributes: {}
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{
			tag: `ul[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			t(this.options.HTMLAttributes, e, { "data-type": this.name }),
			0
		];
	},
	parseMarkdown: (e, t) => t.createNode("taskList", {}, t.parseChildren(e.items || [])),
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "taskList",
		level: "block",
		start(e) {
			let t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
			return t === void 0 ? -1 : t;
		},
		tokenize(e, t, r) {
			let i = (e) => {
				let t = n(e, {
					itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
					extractItemData: (e) => ({
						indentLevel: e[1].length,
						mainContent: e[4],
						checked: e[3].toLowerCase() === "x"
					}),
					createToken: (e, t) => ({
						type: "taskItem",
						raw: "",
						mainContent: e.mainContent,
						indentLevel: e.indentLevel,
						checked: e.checked,
						text: e.mainContent,
						tokens: r.inlineTokens(e.mainContent),
						nestedTokens: t
					}),
					customNestedParser: i
				}, r);
				return t ? [{
					type: "taskList",
					raw: t.raw,
					items: t.items
				}] : r.blockTokens(e);
			}, a = n(e, {
				itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
				extractItemData: (e) => ({
					indentLevel: e[1].length,
					mainContent: e[4],
					checked: e[3].toLowerCase() === "x"
				}),
				createToken: (e, t) => ({
					type: "taskItem",
					raw: "",
					mainContent: e.mainContent,
					indentLevel: e.indentLevel,
					checked: e.checked,
					text: e.mainContent,
					tokens: r.inlineTokens(e.mainContent),
					nestedTokens: t
				}),
				customNestedParser: i
			}, r);
			if (a) return {
				type: "taskList",
				raw: a.raw,
				items: a.items
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
	}
});
o.create({
	name: "listKit",
	addExtensions() {
		let e = [];
		return this.options.bulletList !== !1 && e.push(_.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(v.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(k.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(B.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(H.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(U.configure(this.options.taskList)), e;
	}
});
//#endregion
export { B as i, v as n, k as r, _ as t };
