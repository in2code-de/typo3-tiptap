import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { n } from "../dist-23jRIzE5.js";
//#region src/plugins/headings.ts
function r(r) {
	let i = t({
		pluginId: "headings",
		config: r,
		getValidationSchema: (e) => {
			let t = e.custom((e) => {
				if (!Array.isArray(e) || e.length === 0) return !1;
				let t = [
					1,
					2,
					3,
					4,
					5,
					6
				];
				return e.some((e) => t.includes(e));
			}, { message: "Must be an array of numbers between 1 and 6 with at least one element" });
			return e.object({ levels: t });
		}
	});
	return e({
		extensions: [n.configure({ levels: i.levels })],
		commands: i.levels.map((e) => ({
			id: `heading-${e}`,
			label: `Heading ${e}`,
			iconIdentifier: `heading-${e}`,
			position: {
				toolbarGroupId: "heading",
				bubbleMenuGroupId: "heading"
			},
			status: {
				isActive: ({ editor: t }) => t.isActive("heading", { level: e }),
				isDisabled: ({ editor: t }) => !t.can().toggleHeading({ level: e })
			},
			onExecute: ({ editor: t }) => {
				t.chain().focus().unsetMark("bold").toggleHeading({ level: e }).updateAttributes("heading", { class: null }).run();
			}
		}))
	});
}
//#endregion
export { r as default };
