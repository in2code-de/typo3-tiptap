//#region node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var e = (e, t) => {
	if (e === "slot") return 0;
	if (e instanceof Function) return e(t);
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	return [
		e,
		r,
		n
	];
};
//#endregion
export { e as t };
