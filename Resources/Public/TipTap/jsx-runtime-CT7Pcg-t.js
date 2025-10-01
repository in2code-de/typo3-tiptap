var s = (n, r) => {
  if (n === "slot")
    return 0;
  if (n instanceof Function)
    return n(r);
  const { children: e, ...o } = r ?? {};
  if (n === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [n, o, e];
};
export {
  s as h
};
