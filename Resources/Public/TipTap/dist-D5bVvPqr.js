import { Gt as e, Ht as t, Ut as n, c as r } from "./dist-BppL3qHu.js";
//#region node_modules/@tiptap/extension-italic/dist/index.js
var i = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, a = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, o = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, s = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, c = r.create({
	name: "italic",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "em" },
			{
				tag: "i",
				getAttrs: (e) => e.style.fontStyle !== "normal" && null
			},
			{
				style: "font-style=normal",
				clearMark: (e) => e.type.name === this.name
			},
			{ style: "font-style=italic" }
		];
	},
	renderHTML({ HTMLAttributes: t }) {
		return [
			"em",
			e(this.options.HTMLAttributes, t),
			0
		];
	},
	addCommands() {
		return {
			setItalic: () => ({ commands: e }) => e.setMark(this.name),
			toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	markdownTokenName: "em",
	parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<em>",
		close: "</em>"
	} },
	renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
	addKeyboardShortcuts() {
		return {
			"Mod-i": () => this.editor.commands.toggleItalic(),
			"Mod-I": () => this.editor.commands.toggleItalic()
		};
	},
	addInputRules() {
		return [t({
			find: i,
			type: this.type
		}), t({
			find: o,
			type: this.type
		})];
	},
	addPasteRules() {
		return [n({
			find: a,
			type: this.type
		}), n({
			find: s,
			type: this.type
		})];
	}
}), l = c;
//#endregion
export { l as n, c as t };
