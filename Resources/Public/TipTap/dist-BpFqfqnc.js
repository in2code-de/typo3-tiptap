import { Gt as e, Ht as t, Ut as n, c as r } from "./dist-BppL3qHu.js";
import { t as i } from "./jsx-runtime-Ckt5kP2Q.js";
//#region node_modules/@tiptap/extension-bold/dist/index.js
var a = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, o = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, s = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, c = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, l = r.create({
	name: "bold",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "strong" },
			{
				tag: "b",
				getAttrs: (e) => e.style.fontWeight !== "normal" && null
			},
			{
				style: "font-weight=400",
				clearMark: (e) => e.type.name === this.name
			},
			{
				style: "font-weight",
				getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
			}
		];
	},
	renderHTML({ HTMLAttributes: t }) {
		return /* @__PURE__ */ i("strong", {
			...e(this.options.HTMLAttributes, t),
			children: /* @__PURE__ */ i("slot", {})
		});
	},
	markdownTokenName: "strong",
	parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<strong>",
		close: "</strong>"
	} },
	renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
	addCommands() {
		return {
			setBold: () => ({ commands: e }) => e.setMark(this.name),
			toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-b": () => this.editor.commands.toggleBold(),
			"Mod-B": () => this.editor.commands.toggleBold()
		};
	},
	addInputRules() {
		return [t({
			find: a,
			type: this.type
		}), t({
			find: s,
			type: this.type
		})];
	},
	addPasteRules() {
		return [n({
			find: o,
			type: this.type
		}), n({
			find: c,
			type: this.type
		})];
	}
}), u = l;
//#endregion
export { u as n, l as t };
