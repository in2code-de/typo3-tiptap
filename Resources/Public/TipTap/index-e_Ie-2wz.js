function O(e) {
  return Object.entries(e);
}
function D(e, $, h) {
  var f = h || {}, l = f.noTrailing, d = l === void 0 ? !1 : l, s = f.noLeading, g = s === void 0 ? !1 : s, v = f.debounceMode, o = v === void 0 ? void 0 : v, i, m = !1, u = 0;
  function p() {
    i && clearTimeout(i);
  }
  function x(t) {
    var r = t || {}, n = r.upcomingOnly, c = n === void 0 ? !1 : n;
    p(), m = !c;
  }
  function T() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var c = this, b = Date.now() - u;
    if (m)
      return;
    function a() {
      u = Date.now(), $.apply(c, r);
    }
    function w() {
      i = void 0;
    }
    !g && o && !i && a(), p(), o === void 0 && b > e ? g ? (u = Date.now(), d || (i = setTimeout(o ? w : a, e))) : a() : d !== !0 && (i = setTimeout(o ? w : a, o === void 0 ? e - b : e));
  }
  return T.cancel = x, T;
}
function E(...e) {
  return D(...e);
}
export {
  O as o,
  E as t
};
