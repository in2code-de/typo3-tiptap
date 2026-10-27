//#region node_modules/@antfu/utils/dist/index.mjs
function e(e) {
	return Object.entries(e);
}
function t(e, t, n) {
	var r = n || {}, i = r.noTrailing, a = i === void 0 ? !1 : i, o = r.noLeading, s = o === void 0 ? !1 : o, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
	function p() {
		u && clearTimeout(u);
	}
	function m(e) {
		var t = (e || {}).upcomingOnly, n = t === void 0 ? !1 : t;
		p(), d = !n;
	}
	function h() {
		var n = [...arguments], r = this, i = Date.now() - f;
		if (d) return;
		function o() {
			f = Date.now(), t.apply(r, n);
		}
		function c() {
			u = void 0;
		}
		!s && l && !u && o(), p(), l === void 0 && i > e ? s ? (f = Date.now(), a || (u = setTimeout(l ? c : o, e))) : o() : a !== !0 && (u = setTimeout(l ? c : o, l === void 0 ? e - i : e));
	}
	return h.cancel = m, h;
}
function n(...e) {
	return t(...e);
}
//#endregion
export { n, e as t };
