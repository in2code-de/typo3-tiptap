//#region src/source-view.ts
var e = "data-tiptap-source-view-active";
function t(t) {
	return t.view.dom.getAttribute(e) === "true";
}
function n(t, n) {
	t.view.dom.setAttribute(e, n.toString());
}
//#endregion
export { n, t };
