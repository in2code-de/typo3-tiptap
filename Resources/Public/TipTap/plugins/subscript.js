import { n as e } from "../configuration-BT9xaJ2A.js";
import { Gt as t, c as n } from "../dist-BppL3qHu.js";
var r = n.create({
	name: "subscript",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "sub" }, {
			style: "vertical-align",
			getAttrs(e) {
				return e === "sub" ? null : !1;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"sub",
			t(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setSubscript: () => ({ commands: e }) => e.setMark(this.name),
			toggleSubscript: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetSubscript: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-,": () => this.editor.commands.toggleSubscript() };
	}
});
//#endregion
//#region src/plugins/subscript.ts
function i() {
	return e({
		extensions: [r],
		commands: [{
			id: "subscript",
			label: "Subscript",
			iconIdentifier: "subscript",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: "formatting"
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("subscript"),
				isDisabled: ({ editor: e }) => !e.can().toggleSubscript() || e.state.selection.empty
			},
			onExecute: ({ editor: e }) => {
				let t = e.chain().focus();
				e.schema.marks.superscript && e.isActive("superscript") && t.unsetSuperscript(), t.toggleSubscript().run();
			}
		}]
	});
}
//#endregion
export { i as default };
