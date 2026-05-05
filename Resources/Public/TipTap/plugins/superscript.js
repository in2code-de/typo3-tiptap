import { n as e } from "../configuration-BT9xaJ2A.js";
import { Gt as t, c as n } from "../dist-BppL3qHu.js";
var r = n.create({
	name: "superscript",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "sup" }, {
			style: "vertical-align",
			getAttrs(e) {
				return e === "super" ? null : !1;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"sup",
			t(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setSuperscript: () => ({ commands: e }) => e.setMark(this.name),
			toggleSuperscript: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetSuperscript: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-.": () => this.editor.commands.toggleSuperscript() };
	}
});
//#endregion
//#region src/plugins/superscript.ts
function i() {
	return e({
		extensions: [r],
		commands: [{
			id: "superscript",
			label: "Superscript",
			iconIdentifier: "superscript",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: "formatting"
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("superscript"),
				isDisabled: ({ editor: e }) => !e.can().toggleSuperscript() || e.state.selection.empty
			},
			onExecute: ({ editor: e }) => {
				let t = e.chain().focus();
				e.schema.marks.subscript && e.isActive("subscript") && t.unsetSubscript(), t.toggleSuperscript().run();
			}
		}]
	});
}
//#endregion
export { i as default };
