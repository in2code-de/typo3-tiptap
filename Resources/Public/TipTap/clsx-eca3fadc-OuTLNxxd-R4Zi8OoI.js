function o(e) {
  var f, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (f = 0; f < i; f++) e[f] && (t = o(e[f])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function a() {
  for (var e, f, t = 0, n = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (f = o(e)) && (n && (n += " "), n += f);
  return n;
}
export {
  a as i
};
