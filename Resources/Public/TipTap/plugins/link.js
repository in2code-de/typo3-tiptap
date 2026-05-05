import { n as e } from "../configuration-BT9xaJ2A.js";
import { t } from "../dist-91yalACB.js";
import { t as n } from "../dist-DMA-Qmgt.js";
import r from "@typo3/backend/modal.js";
//#region src/plugins/link.ts
var i = t.extend({ addAttributes() {
	return {
		...this.parent?.(),
		title: {
			default: null,
			parseHTML: (e) => e.getAttribute("title"),
			renderHTML: (e) => e.title ? { title: e.title } : {}
		}
	};
} });
function a() {
	return e({
		extensions: [i.configure({
			openOnClick: !1,
			defaultProtocol: "https",
			protocols: [
				"http",
				"https",
				"t3"
			]
		})],
		commands: [{
			id: "link",
			label: "Link",
			iconIdentifier: "link",
			position: {
				toolbarGroupId: "formatting",
				bubbleMenuGroupId: !1
			},
			status: {
				isActive: ({ editor: e }) => e.isActive("link"),
				isDisabled: ({ editor: e }) => {
					let t = e.can().setLink({ href: "" }), n = e.isActive("link"), r = e.state.selection.empty;
					return !t || r && !n;
				}
			},
			onExecute: ({ editor: e, linkBrowserUrl: t }) => {
				let i = new URL(t, window.location.origin);
				e.isActive("link") && n(e.getAttributes("link")).filter(([, e]) => !!e).forEach(([e, t]) => {
					let n = e === "href" ? "url" : encodeURIComponent(e);
					i.searchParams.set(`P[curUrl][${n}]`, t);
				}), r.advanced({
					type: r.types.iframe,
					title: "Set Link",
					content: i.toString(),
					size: r.sizes.large,
					callback: (t) => {
						t.userData.editor = e;
					}
				});
			}
		}]
	});
}
//#endregion
export { i as CustomLink, a as default };
