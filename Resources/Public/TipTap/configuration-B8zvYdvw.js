const pt = Object.freeze({
  status: "aborted"
});
function l(e, t, o) {
  function r(u, d) {
    if (u._zod || Object.defineProperty(u, "_zod", {
      value: {
        def: d,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), u._zod.traits.has(e))
      return;
    u._zod.traits.add(e), t(u, d);
    const c = a.prototype, s = Object.keys(c);
    for (let f = 0; f < s.length; f++) {
      const h = s[f];
      h in u || (u[h] = c[h].bind(u));
    }
  }
  const n = o?.Parent ?? Object;
  class i extends n {
  }
  Object.defineProperty(i, "name", { value: e });
  function a(u) {
    var d;
    const c = o?.Parent ? new i() : this;
    r(c, u), (d = c._zod).deferred ?? (d.deferred = []);
    for (const s of c._zod.deferred)
      s();
    return c;
  }
  return Object.defineProperty(a, "init", { value: r }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (u) => o?.Parent && u instanceof o.Parent ? !0 : u?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
const vt = Symbol("zod_brand");
class ee extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class tn extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Be = {};
function N(e) {
  return e && Object.assign(Be, e), Be;
}
function wl(e) {
  return e;
}
function zl(e) {
  return e;
}
function Sl(e) {
}
function jl(e) {
  throw new Error();
}
function xl(e) {
}
function ht(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, n]) => t.indexOf(+r) === -1).map(([r, n]) => n);
}
function p(e, t = "|") {
  return e.map((o) => _(o)).join(t);
}
function Xe(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ke(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function ie(e) {
  return e == null;
}
function rn(e) {
  const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, o);
}
function Ti(e, t) {
  const o = (e.toString().split(".")[1] || "").length, r = t.toString();
  let n = (r.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(r)) {
    const d = r.match(/\d?e-(\d?)/);
    d?.[1] && (n = Number.parseInt(d[1]));
  }
  const i = o > n ? o : n, a = Number.parseInt(e.toFixed(i).replace(".", "")), u = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % u / 10 ** i;
}
const hi = Symbol("evaluating");
function I(e, t, o) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== hi)
        return r === void 0 && (r = hi, r = o()), r;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ol(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function H(e, t, o) {
  Object.defineProperty(e, t, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function W(...e) {
  const t = {};
  for (const o of e) {
    const r = Object.getOwnPropertyDescriptors(o);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Ul(e) {
  return W(e._zod.def);
}
function Nl(e, t) {
  return t ? t.reduce((o, r) => o?.[r], e) : e;
}
function Dl(e) {
  const t = Object.keys(e), o = t.map((r) => e[r]);
  return Promise.all(o).then((r) => {
    const n = {};
    for (let i = 0; i < t.length; i++)
      n[t[i]] = r[i];
    return n;
  });
}
function Pl(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let o = "";
  for (let r = 0; r < e; r++)
    o += t[Math.floor(Math.random() * t.length)];
  return o;
}
function ct(e) {
  return JSON.stringify(e);
}
function Ei(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const $t = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function ue(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ai = ke(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function ne(e) {
  if (ue(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const o = t.prototype;
  return !(ue(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function on(e) {
  return ne(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function Zl(e) {
  let t = 0;
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t++;
  return t;
}
const Tl = (e) => {
  const t = typeof e;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, qe = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Li = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function K(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function T(e, t, o) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || o?.parent) && (r._zod.parent = e), r;
}
function g(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function El(e) {
  let t;
  return new Proxy({}, {
    get(o, r, n) {
      return t ?? (t = e()), Reflect.get(t, r, n);
    },
    set(o, r, n, i) {
      return t ?? (t = e()), Reflect.set(t, r, n, i);
    },
    has(o, r) {
      return t ?? (t = e()), Reflect.has(t, r);
    },
    deleteProperty(o, r) {
      return t ?? (t = e()), Reflect.deleteProperty(t, r);
    },
    ownKeys(o) {
      return t ?? (t = e()), Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor(o, r) {
      return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, r);
    },
    defineProperty(o, r, n) {
      return t ?? (t = e()), Reflect.defineProperty(t, r, n);
    }
  });
}
function _(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ci(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Ri = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Fi = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Ji(e, t) {
  const o = e._zod.def, r = W(e._zod.def, {
    get shape() {
      const n = {};
      for (const i in t) {
        if (!(i in o.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (n[i] = o.shape[i]);
      }
      return H(this, "shape", n), n;
    },
    checks: []
  });
  return T(e, r);
}
function Mi(e, t) {
  const o = e._zod.def, r = W(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in o.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete n[i];
      }
      return H(this, "shape", n), n;
    },
    checks: []
  });
  return T(e, r);
}
function Gi(e, t) {
  if (!ne(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = e._zod.def.checks;
  if (o && o.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = W(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return H(this, "shape", i), i;
    },
    checks: []
  });
  return T(e, n);
}
function Vi(e, t) {
  if (!ne(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return H(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return T(e, o);
}
function Ki(e, t) {
  const o = W(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return H(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return T(e, o);
}
function Wi(e, t, o) {
  const r = W(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (o)
        for (const a in o) {
          if (!(a in n))
            throw new Error(`Unrecognized key: "${a}"`);
          o[a] && (i[a] = e ? new e({
            type: "optional",
            innerType: n[a]
          }) : n[a]);
        }
      else
        for (const a in n)
          i[a] = e ? new e({
            type: "optional",
            innerType: n[a]
          }) : n[a];
      return H(this, "shape", i), i;
    },
    checks: []
  });
  return T(t, r);
}
function Bi(e, t, o) {
  const r = W(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (o)
        for (const a in o) {
          if (!(a in i))
            throw new Error(`Unrecognized key: "${a}"`);
          o[a] && (i[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          }));
        }
      else
        for (const a in n)
          i[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          });
      return H(this, "shape", i), i;
    },
    checks: []
  });
  return T(t, r);
}
function Q(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let o = t; o < e.issues.length; o++)
    if (e.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function F(e, t) {
  return t.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(e), o;
  });
}
function ve(e) {
  return typeof e == "string" ? e : e?.message;
}
function J(e, t, o) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = ve(e.inst?._zod.def?.error?.(e)) ?? ve(t?.error?.(e)) ?? ve(o.customError?.(e)) ?? ve(o.localeError?.(e)) ?? "Invalid input";
    r.message = n;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function an(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function un(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ce(...e) {
  const [t, o, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: o,
    inst: r
  } : { ...t };
}
function Al(e) {
  return Object.entries(e).filter(([t, o]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function Xi(e) {
  const t = atob(e), o = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++)
    o[r] = t.charCodeAt(r);
  return o;
}
function qi(e) {
  let t = "";
  for (let o = 0; o < e.length; o++)
    t += String.fromCharCode(e[o]);
  return btoa(t);
}
function Ll(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), o = "=".repeat((4 - t.length % 4) % 4);
  return Xi(t + o);
}
function Cl(e) {
  return qi(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Rl(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const o = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2)
    o[r / 2] = Number.parseInt(t.slice(r, r + 2), 16);
  return o;
}
function Fl(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class Jl {
  constructor(...t) {
  }
}
const bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: Fi,
  Class: Jl,
  NUMBER_FORMAT_RANGES: Ri,
  aborted: Q,
  allowsEval: Ai,
  assert: xl,
  assertEqual: wl,
  assertIs: Sl,
  assertNever: jl,
  assertNotEqual: zl,
  assignProp: H,
  base64ToUint8Array: Xi,
  base64urlToUint8Array: Ll,
  cached: ke,
  captureStackTrace: $t,
  cleanEnum: Al,
  cleanRegex: rn,
  clone: T,
  cloneDef: Ul,
  createTransparentProxy: El,
  defineLazy: I,
  esc: ct,
  escapeRegex: K,
  extend: Gi,
  finalizeIssue: J,
  floatSafeRemainder: Ti,
  getElementAtPath: Nl,
  getEnumValues: ht,
  getLengthableOrigin: un,
  getParsedType: Tl,
  getSizableOrigin: an,
  hexToUint8Array: Rl,
  isObject: ue,
  isPlainObject: ne,
  issue: ce,
  joinValues: p,
  jsonStringifyReplacer: Xe,
  merge: Ki,
  mergeDefs: W,
  normalizeParams: g,
  nullish: ie,
  numKeys: Zl,
  objectClone: Ol,
  omit: Mi,
  optionalKeys: Ci,
  partial: Wi,
  pick: Ji,
  prefixIssues: F,
  primitiveTypes: Li,
  promiseAllObject: Dl,
  propertyKeyTypes: qe,
  randomString: Pl,
  required: Bi,
  safeExtend: Vi,
  shallowClone: on,
  slugify: Ei,
  stringifyPrimitive: _,
  uint8ArrayToBase64: qi,
  uint8ArrayToBase64url: Cl,
  uint8ArrayToHex: Fl,
  unwrapMessage: ve
}, Symbol.toStringTag, { value: "Module" })), Yi = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Xe, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, _t = l("$ZodError", Yi), E = l("$ZodError", Yi, { Parent: Error });
function cn(e, t = (o) => o.message) {
  const o = {}, r = [];
  for (const n of e.issues)
    n.path.length > 0 ? (o[n.path[0]] = o[n.path[0]] || [], o[n.path[0]].push(t(n))) : r.push(t(n));
  return { formErrors: r, fieldErrors: o };
}
function ln(e, t = (o) => o.message) {
  const o = { _errors: [] }, r = (n) => {
    for (const i of n.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((a) => r({ issues: a }));
      else if (i.code === "invalid_key")
        r({ issues: i.issues });
      else if (i.code === "invalid_element")
        r({ issues: i.issues });
      else if (i.path.length === 0)
        o._errors.push(t(i));
      else {
        let a = o, u = 0;
        for (; u < i.path.length; ) {
          const d = i.path[u];
          u === i.path.length - 1 ? (a[d] = a[d] || { _errors: [] }, a[d]._errors.push(t(i))) : a[d] = a[d] || { _errors: [] }, a = a[d], u++;
        }
      }
  };
  return r(e), o;
}
function yt(e, t = (o) => o.message) {
  const o = { errors: [] }, r = (n, i = []) => {
    var a, u;
    for (const d of n.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((c) => r({ issues: c }, d.path));
      else if (d.code === "invalid_key")
        r({ issues: d.issues }, d.path);
      else if (d.code === "invalid_element")
        r({ issues: d.issues }, d.path);
      else {
        const c = [...i, ...d.path];
        if (c.length === 0) {
          o.errors.push(t(d));
          continue;
        }
        let s = o, f = 0;
        for (; f < c.length; ) {
          const h = c[f], v = f === c.length - 1;
          typeof h == "string" ? (s.properties ?? (s.properties = {}), (a = s.properties)[h] ?? (a[h] = { errors: [] }), s = s.properties[h]) : (s.items ?? (s.items = []), (u = s.items)[h] ?? (u[h] = { errors: [] }), s = s.items[h]), v && s.errors.push(t(d)), f++;
        }
      }
  };
  return r(e), o;
}
function Hi(e) {
  const t = [], o = e.map((r) => typeof r == "object" ? r.key : r);
  for (const r of o)
    typeof r == "number" ? t.push(`[${r}]`) : typeof r == "symbol" ? t.push(`[${JSON.stringify(String(r))}]`) : /[^\w$]/.test(r) ? t.push(`[${JSON.stringify(r)}]`) : (t.length && t.push("."), t.push(r));
  return t.join("");
}
function kt(e) {
  const t = [], o = [...e.issues].sort((r, n) => (r.path ?? []).length - (n.path ?? []).length);
  for (const r of o)
    t.push(`✖ ${r.message}`), r.path?.length && t.push(`  → at ${Hi(r.path)}`);
  return t.join(`
`);
}
const Ie = (e) => (t, o, r, n) => {
  const i = r ? Object.assign(r, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: o, issues: [] }, i);
  if (a instanceof Promise)
    throw new ee();
  if (a.issues.length) {
    const u = new (n?.Err ?? e)(a.issues.map((d) => J(d, i, N())));
    throw $t(u, n?.callee), u;
  }
  return a.value;
}, lt = /* @__PURE__ */ Ie(E), we = (e) => async (t, o, r, n) => {
  const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: o, issues: [] }, i);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const u = new (n?.Err ?? e)(a.issues.map((d) => J(d, i, N())));
    throw $t(u, n?.callee), u;
  }
  return a.value;
}, st = /* @__PURE__ */ we(E), ze = (e) => (t, o, r) => {
  const n = r ? { ...r, async: !1 } : { async: !1 }, i = t._zod.run({ value: o, issues: [] }, n);
  if (i instanceof Promise)
    throw new ee();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? _t)(i.issues.map((a) => J(a, n, N())))
  } : { success: !0, data: i.value };
}, Qi = /* @__PURE__ */ ze(E), Se = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: o, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((a) => J(a, n, N())))
  } : { success: !0, data: i.value };
}, eo = /* @__PURE__ */ Se(E), It = (e) => (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Ie(e)(t, o, n);
}, Ml = /* @__PURE__ */ It(E), wt = (e) => (t, o, r) => Ie(e)(t, o, r), Gl = /* @__PURE__ */ wt(E), zt = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return we(e)(t, o, n);
}, Vl = /* @__PURE__ */ zt(E), St = (e) => async (t, o, r) => we(e)(t, o, r), Kl = /* @__PURE__ */ St(E), jt = (e) => (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ze(e)(t, o, n);
}, Wl = /* @__PURE__ */ jt(E), xt = (e) => (t, o, r) => ze(e)(t, o, r), Bl = /* @__PURE__ */ xt(E), Ot = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Se(e)(t, o, n);
}, Xl = /* @__PURE__ */ Ot(E), Ut = (e) => async (t, o, r) => Se(e)(t, o, r), ql = /* @__PURE__ */ Ut(E), no = /^[cC][^\s-]{8,}$/, to = /^[0-9a-z]+$/, ro = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, io = /^[0-9a-vA-V]{20}$/, oo = /^[A-Za-z0-9]{27}$/, ao = /^[a-zA-Z0-9_-]{21}$/, uo = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, co = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, le = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Hl = /* @__PURE__ */ le(4), Ql = /* @__PURE__ */ le(6), es = /* @__PURE__ */ le(7), lo = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ns = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ts = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, so = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, rs = so, is = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, os = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function mo() {
  return new RegExp(os, "u");
}
const fo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, go = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, po = (e) => {
  const t = K(e ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
}, vo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ho = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, $o = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Nt = /^[A-Za-z0-9_-]*$/, bo = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, _o = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, yo = /^\+(?:[0-9]){6,14}[0-9]$/, ko = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Io = /* @__PURE__ */ new RegExp(`^${ko}$`);
function wo(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function zo(e) {
  return new RegExp(`^${wo(e)}$`);
}
function So(e) {
  const t = wo({ precision: e.precision }), o = ["Z"];
  e.local && o.push(""), e.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${o.join("|")})`;
  return new RegExp(`^${ko}T(?:${r})$`);
}
const jo = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, xo = /^-?\d+n?$/, Oo = /^-?\d+$/, Uo = /^-?\d+(?:\.\d+)?/, No = /^(?:true|false)$/i, Do = /^null$/i, Po = /^undefined$/i, Zo = /^[^A-Z]*$/, To = /^[^a-z]*$/, Eo = /^[0-9a-fA-F]*$/;
function je(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function xe(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const as = /^[0-9a-fA-F]{32}$/, us = /* @__PURE__ */ je(22, "=="), cs = /* @__PURE__ */ xe(22), ls = /^[0-9a-fA-F]{40}$/, ss = /* @__PURE__ */ je(27, "="), ds = /* @__PURE__ */ xe(27), ms = /^[0-9a-fA-F]{64}$/, fs = /* @__PURE__ */ je(43, "="), gs = /* @__PURE__ */ xe(43), ps = /^[0-9a-fA-F]{96}$/, vs = /* @__PURE__ */ je(64, ""), hs = /* @__PURE__ */ xe(64), $s = /^[0-9a-fA-F]{128}$/, bs = /* @__PURE__ */ je(86, "=="), _s = /* @__PURE__ */ xe(86), sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: $o,
  base64url: Nt,
  bigint: xo,
  boolean: No,
  browserEmail: is,
  cidrv4: vo,
  cidrv6: ho,
  cuid: no,
  cuid2: to,
  date: Io,
  datetime: So,
  domain: _o,
  duration: uo,
  e164: yo,
  email: lo,
  emoji: mo,
  extendedDuration: Yl,
  guid: co,
  hex: Eo,
  hostname: bo,
  html5Email: ns,
  idnEmail: rs,
  integer: Oo,
  ipv4: fo,
  ipv6: go,
  ksuid: oo,
  lowercase: Zo,
  mac: po,
  md5_base64: us,
  md5_base64url: cs,
  md5_hex: as,
  nanoid: ao,
  null: Do,
  number: Uo,
  rfc5322Email: ts,
  sha1_base64: ss,
  sha1_base64url: ds,
  sha1_hex: ls,
  sha256_base64: fs,
  sha256_base64url: gs,
  sha256_hex: ms,
  sha384_base64: vs,
  sha384_base64url: hs,
  sha384_hex: ps,
  sha512_base64: bs,
  sha512_base64url: _s,
  sha512_hex: $s,
  string: jo,
  time: zo,
  ulid: ro,
  undefined: Po,
  unicodeEmail: so,
  uppercase: To,
  uuid: le,
  uuid4: Hl,
  uuid6: Ql,
  uuid7: es,
  xid: io
}, Symbol.toStringTag, { value: "Module" })), U = /* @__PURE__ */ l("$ZodCheck", (e, t) => {
  var o;
  e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
}), Ao = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Dt = /* @__PURE__ */ l("$ZodCheckLessThan", (e, t) => {
  U.init(e, t);
  const o = Ao[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Pt = /* @__PURE__ */ l("$ZodCheckGreaterThan", (e, t) => {
  U.init(e, t);
  const o = Ao[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Lo = /* @__PURE__ */ l("$ZodCheckMultipleOf", (e, t) => {
  U.init(e, t), e._zod.onattach.push((o) => {
    var r;
    (r = o._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (o) => {
    if (typeof o.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % t.value === BigInt(0) : Ti(o.value, t.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Co = /* @__PURE__ */ l("$ZodCheckNumberFormat", (e, t) => {
  U.init(e, t), t.format = t.format || "float64";
  const o = t.format?.includes("int"), r = o ? "int" : "number", [n, i] = Ri[t.format];
  e._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.format = t.format, u.minimum = n, u.maximum = i, o && (u.pattern = Oo);
  }), e._zod.check = (a) => {
    const u = a.value;
    if (o) {
      if (!Number.isInteger(u)) {
        a.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: u,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? a.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        }) : a.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        });
        return;
      }
    }
    u < n && a.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), u > i && a.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: i,
      inst: e
    });
  };
}), Ro = /* @__PURE__ */ l("$ZodCheckBigIntFormat", (e, t) => {
  U.init(e, t);
  const [o, r] = Fi[t.format];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, i.minimum = o, i.maximum = r;
  }), e._zod.check = (n) => {
    const i = n.value;
    i < o && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), i > r && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_big",
      maximum: r,
      inst: e
    });
  };
}), Fo = /* @__PURE__ */ l("$ZodCheckMaxSize", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    n.size <= t.maximum || r.issues.push({
      origin: an(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Jo = /* @__PURE__ */ l("$ZodCheckMinSize", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    n.size >= t.minimum || r.issues.push({
      origin: an(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Mo = /* @__PURE__ */ l("$ZodCheckSizeEquals", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (r) => {
    const n = r.value, i = n.size;
    if (i === t.size)
      return;
    const a = i > t.size;
    r.issues.push({
      origin: an(n),
      ...a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Go = /* @__PURE__ */ l("$ZodCheckMaxLength", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length <= t.maximum)
      return;
    const a = un(n);
    r.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Vo = /* @__PURE__ */ l("$ZodCheckMinLength", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length >= t.minimum)
      return;
    const a = un(n);
    r.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Ko = /* @__PURE__ */ l("$ZodCheckLengthEquals", (e, t) => {
  var o;
  U.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (r) => {
    const n = r.value, i = n.length;
    if (i === t.length)
      return;
    const a = un(n), u = i > t.length;
    r.issues.push({
      origin: a,
      ...u ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Oe = /* @__PURE__ */ l("$ZodCheckStringFormat", (e, t) => {
  var o, r;
  U.init(e, t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (o = e._zod).check ?? (o.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Wo = /* @__PURE__ */ l("$ZodCheckRegex", (e, t) => {
  Oe.init(e, t), e._zod.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Bo = /* @__PURE__ */ l("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Zo), Oe.init(e, t);
}), Xo = /* @__PURE__ */ l("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = To), Oe.init(e, t);
}), qo = /* @__PURE__ */ l("$ZodCheckIncludes", (e, t) => {
  U.init(e, t);
  const o = K(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${o}` : o);
  t.pattern = r, e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Yo = /* @__PURE__ */ l("$ZodCheckStartsWith", (e, t) => {
  U.init(e, t);
  const o = new RegExp(`^${K(t.prefix)}.*`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ho = /* @__PURE__ */ l("$ZodCheckEndsWith", (e, t) => {
  U.init(e, t);
  const o = new RegExp(`.*${K(t.suffix)}$`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function $i(e, t, o) {
  e.issues.length && t.issues.push(...F(o, e.issues));
}
const Qo = /* @__PURE__ */ l("$ZodCheckProperty", (e, t) => {
  U.init(e, t), e._zod.check = (o) => {
    const r = t.schema._zod.run({
      value: o.value[t.property],
      issues: []
    }, {});
    if (r instanceof Promise)
      return r.then((n) => $i(n, o, t.property));
    $i(r, o, t.property);
  };
}), ea = /* @__PURE__ */ l("$ZodCheckMimeType", (e, t) => {
  U.init(e, t);
  const o = new Set(t.mime);
  e._zod.onattach.push((r) => {
    r._zod.bag.mime = t.mime;
  }), e._zod.check = (r) => {
    o.has(r.value.type) || r.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: r.value.type,
      inst: e,
      continue: !t.abort
    });
  };
}), na = /* @__PURE__ */ l("$ZodCheckOverwrite", (e, t) => {
  U.init(e, t), e._zod.check = (o) => {
    o.value = t.tx(o.value);
  };
});
class ta {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((a) => a), n = Math.min(...r.map((a) => a.length - a.trimStart().length)), i = r.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of i)
      this.content.push(a);
  }
  compile() {
    const t = Function, o = this?.args, n = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...o, n.join(`
`));
  }
}
const ra = {
  major: 4,
  minor: 1,
  patch: 13
}, y = /* @__PURE__ */ l("$ZodType", (e, t) => {
  var o;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ra;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const n of r)
    for (const i of n._zod.onattach)
      i(e);
  if (r.length === 0)
    (o = e._zod).deferred ?? (o.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (a, u, d) => {
      let c = Q(a), s;
      for (const f of u) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(a))
            continue;
        } else if (c)
          continue;
        const h = a.issues.length, v = f._zod.check(a);
        if (v instanceof Promise && d?.async === !1)
          throw new ee();
        if (s || v instanceof Promise)
          s = (s ?? Promise.resolve()).then(async () => {
            await v, a.issues.length !== h && (c || (c = Q(a, h)));
          });
        else {
          if (a.issues.length === h)
            continue;
          c || (c = Q(a, h));
        }
      }
      return s ? s.then(() => a) : a;
    }, i = (a, u, d) => {
      if (Q(a))
        return a.aborted = !0, a;
      const c = n(u, r, d);
      if (c instanceof Promise) {
        if (d.async === !1)
          throw new ee();
        return c.then((s) => e._zod.parse(s, d));
      }
      return e._zod.parse(c, d);
    };
    e._zod.run = (a, u) => {
      if (u.skipChecks)
        return e._zod.parse(a, u);
      if (u.direction === "backward") {
        const c = e._zod.parse({ value: a.value, issues: [] }, { ...u, skipChecks: !0 });
        return c instanceof Promise ? c.then((s) => i(s, a, u)) : i(c, a, u);
      }
      const d = e._zod.parse(a, u);
      if (d instanceof Promise) {
        if (u.async === !1)
          throw new ee();
        return d.then((c) => n(c, r, u));
      }
      return n(d, r, u);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const i = Qi(e, n);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return eo(e, n).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Ue = /* @__PURE__ */ l("$ZodString", (e, t) => {
  y.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? jo(e._zod.bag), e._zod.parse = (o, r) => {
    if (t.coerce)
      try {
        o.value = String(o.value);
      } catch {
      }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: e
    }), o;
  };
}), j = /* @__PURE__ */ l("$ZodStringFormat", (e, t) => {
  Oe.init(e, t), Ue.init(e, t);
}), ia = /* @__PURE__ */ l("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = co), j.init(e, t);
}), oa = /* @__PURE__ */ l("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = le(r));
  } else
    t.pattern ?? (t.pattern = le());
  j.init(e, t);
}), aa = /* @__PURE__ */ l("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = lo), j.init(e, t);
}), ua = /* @__PURE__ */ l("$ZodURL", (e, t) => {
  j.init(e, t), e._zod.check = (o) => {
    try {
      const r = o.value.trim(), n = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: o.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: o.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? o.value = n.href : o.value = r;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ca = /* @__PURE__ */ l("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = mo()), j.init(e, t);
}), la = /* @__PURE__ */ l("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ao), j.init(e, t);
}), sa = /* @__PURE__ */ l("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = no), j.init(e, t);
}), da = /* @__PURE__ */ l("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = to), j.init(e, t);
}), ma = /* @__PURE__ */ l("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ro), j.init(e, t);
}), fa = /* @__PURE__ */ l("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = io), j.init(e, t);
}), ga = /* @__PURE__ */ l("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = oo), j.init(e, t);
}), pa = /* @__PURE__ */ l("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = So(t)), j.init(e, t);
}), va = /* @__PURE__ */ l("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Io), j.init(e, t);
}), ha = /* @__PURE__ */ l("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = zo(t)), j.init(e, t);
}), $a = /* @__PURE__ */ l("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = uo), j.init(e, t);
}), ba = /* @__PURE__ */ l("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = fo), j.init(e, t), e._zod.bag.format = "ipv4";
}), _a = /* @__PURE__ */ l("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = go), j.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ya = /* @__PURE__ */ l("$ZodMAC", (e, t) => {
  t.pattern ?? (t.pattern = po(t.delimiter)), j.init(e, t), e._zod.bag.format = "mac";
}), ka = /* @__PURE__ */ l("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = vo), j.init(e, t);
}), Ia = /* @__PURE__ */ l("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = ho), j.init(e, t), e._zod.check = (o) => {
    const r = o.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [n, i] = r;
      if (!i)
        throw new Error();
      const a = Number(i);
      if (`${a}` !== i)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Zt(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const wa = /* @__PURE__ */ l("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = $o), j.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (o) => {
    Zt(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function za(e) {
  if (!Nt.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Zt(o);
}
const Sa = /* @__PURE__ */ l("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Nt), j.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (o) => {
    za(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ja = /* @__PURE__ */ l("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = yo), j.init(e, t);
});
function xa(e, t = null) {
  try {
    const o = e.split(".");
    if (o.length !== 3)
      return !1;
    const [r] = o;
    if (!r)
      return !1;
    const n = JSON.parse(atob(r));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Oa = /* @__PURE__ */ l("$ZodJWT", (e, t) => {
  j.init(e, t), e._zod.check = (o) => {
    xa(o.value, t.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ua = /* @__PURE__ */ l("$ZodCustomStringFormat", (e, t) => {
  j.init(e, t), e._zod.check = (o) => {
    t.fn(o.value) || o.issues.push({
      code: "invalid_format",
      format: t.format,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Tt = /* @__PURE__ */ l("$ZodNumber", (e, t) => {
  y.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Uo, e._zod.parse = (o, r) => {
    if (t.coerce)
      try {
        o.value = Number(o.value);
      } catch {
      }
    const n = o.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return o;
    const i = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...i ? { received: i } : {}
    }), o;
  };
}), Na = /* @__PURE__ */ l("$ZodNumberFormat", (e, t) => {
  Co.init(e, t), Tt.init(e, t);
}), Et = /* @__PURE__ */ l("$ZodBoolean", (e, t) => {
  y.init(e, t), e._zod.pattern = No, e._zod.parse = (o, r) => {
    if (t.coerce)
      try {
        o.value = !!o.value;
      } catch {
      }
    const n = o.value;
    return typeof n == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), At = /* @__PURE__ */ l("$ZodBigInt", (e, t) => {
  y.init(e, t), e._zod.pattern = xo, e._zod.parse = (o, r) => {
    if (t.coerce)
      try {
        o.value = BigInt(o.value);
      } catch {
      }
    return typeof o.value == "bigint" || o.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: o.value,
      inst: e
    }), o;
  };
}), Da = /* @__PURE__ */ l("$ZodBigIntFormat", (e, t) => {
  Ro.init(e, t), At.init(e, t);
}), Pa = /* @__PURE__ */ l("$ZodSymbol", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    return typeof n == "symbol" || o.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), Za = /* @__PURE__ */ l("$ZodUndefined", (e, t) => {
  y.init(e, t), e._zod.pattern = Po, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (o, r) => {
    const n = o.value;
    return typeof n > "u" || o.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), Ta = /* @__PURE__ */ l("$ZodNull", (e, t) => {
  y.init(e, t), e._zod.pattern = Do, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (o, r) => {
    const n = o.value;
    return n === null || o.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), Ea = /* @__PURE__ */ l("$ZodAny", (e, t) => {
  y.init(e, t), e._zod.parse = (o) => o;
}), Aa = /* @__PURE__ */ l("$ZodUnknown", (e, t) => {
  y.init(e, t), e._zod.parse = (o) => o;
}), La = /* @__PURE__ */ l("$ZodNever", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: e
  }), o);
}), Ca = /* @__PURE__ */ l("$ZodVoid", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    return typeof n > "u" || o.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), Ra = /* @__PURE__ */ l("$ZodDate", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    if (t.coerce)
      try {
        o.value = new Date(o.value);
      } catch {
      }
    const n = o.value, i = n instanceof Date;
    return i && !Number.isNaN(n.getTime()) || o.issues.push({
      expected: "date",
      code: "invalid_type",
      input: n,
      ...i ? { received: "Invalid Date" } : {},
      inst: e
    }), o;
  };
});
function bi(e, t, o) {
  e.issues.length && t.issues.push(...F(o, e.issues)), t.value[o] = e.value;
}
const Fa = /* @__PURE__ */ l("$ZodArray", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!Array.isArray(n))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
    o.value = Array(n.length);
    const i = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], d = t.element._zod.run({
        value: u,
        issues: []
      }, r);
      d instanceof Promise ? i.push(d.then((c) => bi(c, o, a))) : bi(d, o, a);
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
});
function Ye(e, t, o, r) {
  e.issues.length && t.issues.push(...F(o, e.issues)), e.value === void 0 ? o in r && (t.value[o] = void 0) : t.value[o] = e.value;
}
function Ja(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const o = Ci(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(o)
  };
}
function Ma(e, t, o, r, n, i) {
  const a = [], u = n.keySet, d = n.catchall._zod, c = d.def.type;
  for (const s in t) {
    if (u.has(s))
      continue;
    if (c === "never") {
      a.push(s);
      continue;
    }
    const f = d.run({ value: t[s], issues: [] }, r);
    f instanceof Promise ? e.push(f.then((h) => Ye(h, o, s, t))) : Ye(f, o, s, t);
  }
  return a.length && o.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => o) : o;
}
const Ga = /* @__PURE__ */ l("$ZodObject", (e, t) => {
  if (y.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const u = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const d = { ...u };
        return Object.defineProperty(t, "shape", {
          value: d
        }), d;
      }
    });
  }
  const r = ke(() => Ja(t));
  I(e._zod, "propValues", () => {
    const u = t.shape, d = {};
    for (const c in u) {
      const s = u[c]._zod;
      if (s.values) {
        d[c] ?? (d[c] = /* @__PURE__ */ new Set());
        for (const f of s.values)
          d[c].add(f);
      }
    }
    return d;
  });
  const n = ue, i = t.catchall;
  let a;
  e._zod.parse = (u, d) => {
    a ?? (a = r.value);
    const c = u.value;
    if (!n(c))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), u;
    u.value = {};
    const s = [], f = a.shape;
    for (const h of a.keys) {
      const m = f[h]._zod.run({ value: c[h], issues: [] }, d);
      m instanceof Promise ? s.push(m.then(($) => Ye($, u, h, c))) : Ye(m, u, h, c);
    }
    return i ? Ma(s, c, u, d, r.value, e) : s.length ? Promise.all(s).then(() => u) : u;
  };
}), Va = /* @__PURE__ */ l("$ZodObjectJIT", (e, t) => {
  Ga.init(e, t);
  const o = e._zod.parse, r = ke(() => Ja(t)), n = (h) => {
    const v = new ta(["shape", "payload", "ctx"]), m = r.value, $ = (S) => {
      const O = ct(S);
      return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const b = /* @__PURE__ */ Object.create(null);
    let z = 0;
    for (const S of m.keys)
      b[S] = `key_${z++}`;
    v.write("const newResult = {};");
    for (const S of m.keys) {
      const O = b[S], G = ct(S);
      v.write(`const ${O} = ${$(S)};`), v.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${G}, ...iss.path] : [${G}]
          })));
        }
        
        
        if (${O}.value === undefined) {
          if (${G} in input) {
            newResult[${G}] = undefined;
          }
        } else {
          newResult[${G}] = ${O}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (S, O) => w(h, S, O);
  };
  let i;
  const a = ue, u = !Be.jitless, c = u && Ai.value, s = t.catchall;
  let f;
  e._zod.parse = (h, v) => {
    f ?? (f = r.value);
    const m = h.value;
    return a(m) ? u && c && v?.async === !1 && v.jitless !== !0 ? (i || (i = n(t.shape)), h = i(h, v), s ? Ma([], m, h, v, f, e) : h) : o(h, v) : (h.issues.push({
      expected: "object",
      code: "invalid_type",
      input: m,
      inst: e
    }), h);
  };
});
function _i(e, t, o, r) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const n = e.filter((i) => !Q(i));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: o,
    errors: e.map((i) => i.issues.map((a) => J(a, r, N())))
  }), t);
}
const Lt = /* @__PURE__ */ l("$ZodUnion", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), I(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), I(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), I(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${n.map((i) => rn(i.source)).join("|")})$`);
    }
  });
  const o = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (n, i) => {
    if (o)
      return r(n, i);
    let a = !1;
    const u = [];
    for (const d of t.options) {
      const c = d._zod.run({
        value: n.value,
        issues: []
      }, i);
      if (c instanceof Promise)
        u.push(c), a = !0;
      else {
        if (c.issues.length === 0)
          return c;
        u.push(c);
      }
    }
    return a ? Promise.all(u).then((d) => _i(d, n, e, i)) : _i(u, n, e, i);
  };
}), Ka = /* @__PURE__ */ l("$ZodDiscriminatedUnion", (e, t) => {
  Lt.init(e, t);
  const o = e._zod.parse;
  I(e._zod, "propValues", () => {
    const n = {};
    for (const i of t.options) {
      const a = i._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const [u, d] of Object.entries(a)) {
        n[u] || (n[u] = /* @__PURE__ */ new Set());
        for (const c of d)
          n[u].add(c);
      }
    }
    return n;
  });
  const r = ke(() => {
    const n = t.options, i = /* @__PURE__ */ new Map();
    for (const a of n) {
      const u = a._zod.propValues?.[t.discriminator];
      if (!u || u.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
      for (const d of u) {
        if (i.has(d))
          throw new Error(`Duplicate discriminator value "${String(d)}"`);
        i.set(d, a);
      }
    }
    return i;
  });
  e._zod.parse = (n, i) => {
    const a = n.value;
    if (!ue(a))
      return n.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e
      }), n;
    const u = r.value.get(a?.[t.discriminator]);
    return u ? u._zod.run(n, i) : t.unionFallback ? o(n, i) : (n.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: a,
      path: [t.discriminator],
      inst: e
    }), n);
  };
}), Wa = /* @__PURE__ */ l("$ZodIntersection", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value, i = t.left._zod.run({ value: n, issues: [] }, r), a = t.right._zod.run({ value: n, issues: [] }, r);
    return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([d, c]) => yi(o, d, c)) : yi(o, i, a);
  };
});
function dt(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (ne(e) && ne(t)) {
    const o = Object.keys(t), r = Object.keys(e).filter((i) => o.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of r) {
      const a = dt(e[i], t[i]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...a.mergeErrorPath]
        };
      n[i] = a.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = t[r], a = dt(n, i);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...a.mergeErrorPath]
        };
      o.push(a.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function yi(e, t, o) {
  if (t.issues.length && e.issues.push(...t.issues), o.issues.length && e.issues.push(...o.issues), Q(e))
    return e;
  const r = dt(t.value, o.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const Ct = /* @__PURE__ */ l("$ZodTuple", (e, t) => {
  y.init(e, t);
  const o = t.items;
  e._zod.parse = (r, n) => {
    const i = r.value;
    if (!Array.isArray(i))
      return r.issues.push({
        input: i,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), r;
    r.value = [];
    const a = [], u = [...o].reverse().findIndex((s) => s._zod.optin !== "optional"), d = u === -1 ? 0 : o.length - u;
    if (!t.rest) {
      const s = i.length > o.length, f = i.length < d - 1;
      if (s || f)
        return r.issues.push({
          ...s ? { code: "too_big", maximum: o.length } : { code: "too_small", minimum: o.length },
          input: i,
          inst: e,
          origin: "array"
        }), r;
    }
    let c = -1;
    for (const s of o) {
      if (c++, c >= i.length && c >= d)
        continue;
      const f = s._zod.run({
        value: i[c],
        issues: []
      }, n);
      f instanceof Promise ? a.push(f.then((h) => Me(h, r, c))) : Me(f, r, c);
    }
    if (t.rest) {
      const s = i.slice(o.length);
      for (const f of s) {
        c++;
        const h = t.rest._zod.run({
          value: f,
          issues: []
        }, n);
        h instanceof Promise ? a.push(h.then((v) => Me(v, r, c))) : Me(h, r, c);
      }
    }
    return a.length ? Promise.all(a).then(() => r) : r;
  };
});
function Me(e, t, o) {
  e.issues.length && t.issues.push(...F(o, e.issues)), t.value[o] = e.value;
}
const Ba = /* @__PURE__ */ l("$ZodRecord", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!ne(n))
      return o.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
    const i = [], a = t.keyType._zod.values;
    if (a) {
      o.value = {};
      const u = /* @__PURE__ */ new Set();
      for (const c of a)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          u.add(typeof c == "number" ? c.toString() : c);
          const s = t.valueType._zod.run({ value: n[c], issues: [] }, r);
          s instanceof Promise ? i.push(s.then((f) => {
            f.issues.length && o.issues.push(...F(c, f.issues)), o.value[c] = f.value;
          })) : (s.issues.length && o.issues.push(...F(c, s.issues)), o.value[c] = s.value);
        }
      let d;
      for (const c in n)
        u.has(c) || (d = d ?? [], d.push(c));
      d && d.length > 0 && o.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: d
      });
    } else {
      o.value = {};
      for (const u of Reflect.ownKeys(n)) {
        if (u === "__proto__")
          continue;
        const d = t.keyType._zod.run({ value: u, issues: [] }, r);
        if (d instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: d.issues.map((s) => J(s, r, N())),
            input: u,
            path: [u],
            inst: e
          }), o.value[d.value] = d.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: n[u], issues: [] }, r);
        c instanceof Promise ? i.push(c.then((s) => {
          s.issues.length && o.issues.push(...F(u, s.issues)), o.value[d.value] = s.value;
        })) : (c.issues.length && o.issues.push(...F(u, c.issues)), o.value[d.value] = c.value);
      }
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
}), Xa = /* @__PURE__ */ l("$ZodMap", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!(n instanceof Map))
      return o.issues.push({
        expected: "map",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
    const i = [];
    o.value = /* @__PURE__ */ new Map();
    for (const [a, u] of n) {
      const d = t.keyType._zod.run({ value: a, issues: [] }, r), c = t.valueType._zod.run({ value: u, issues: [] }, r);
      d instanceof Promise || c instanceof Promise ? i.push(Promise.all([d, c]).then(([s, f]) => {
        ki(s, f, o, a, n, e, r);
      })) : ki(d, c, o, a, n, e, r);
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
});
function ki(e, t, o, r, n, i, a) {
  e.issues.length && (qe.has(typeof r) ? o.issues.push(...F(r, e.issues)) : o.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: i,
    issues: e.issues.map((u) => J(u, a, N()))
  })), t.issues.length && (qe.has(typeof r) ? o.issues.push(...F(r, t.issues)) : o.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: i,
    key: r,
    issues: t.issues.map((u) => J(u, a, N()))
  })), o.value.set(e.value, t.value);
}
const qa = /* @__PURE__ */ l("$ZodSet", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!(n instanceof Set))
      return o.issues.push({
        input: n,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), o;
    const i = [];
    o.value = /* @__PURE__ */ new Set();
    for (const a of n) {
      const u = t.valueType._zod.run({ value: a, issues: [] }, r);
      u instanceof Promise ? i.push(u.then((d) => Ii(d, o))) : Ii(u, o);
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
});
function Ii(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const Ya = /* @__PURE__ */ l("$ZodEnum", (e, t) => {
  y.init(e, t);
  const o = ht(t.entries), r = new Set(o);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${o.filter((n) => qe.has(typeof n)).map((n) => typeof n == "string" ? K(n) : n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
    const a = n.value;
    return r.has(a) || n.issues.push({
      code: "invalid_value",
      values: o,
      input: a,
      inst: e
    }), n;
  };
}), Ha = /* @__PURE__ */ l("$ZodLiteral", (e, t) => {
  if (y.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(t.values);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? K(r) : r ? K(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, n) => {
    const i = r.value;
    return o.has(i) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: i,
      inst: e
    }), r;
  };
}), Qa = /* @__PURE__ */ l("$ZodFile", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    return n instanceof File || o.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), o;
  };
}), eu = /* @__PURE__ */ l("$ZodTransform", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new tn(e.constructor.name);
    const n = t.transform(o.value, o);
    if (r.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (o.value = a, o));
    if (n instanceof Promise)
      throw new ee();
    return o.value = n, o;
  };
});
function wi(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const nu = /* @__PURE__ */ l("$ZodOptional", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${rn(o.source)})?$`) : void 0;
  }), e._zod.parse = (o, r) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(o, r);
      return n instanceof Promise ? n.then((i) => wi(i, o.value)) : wi(n, o.value);
    }
    return o.value === void 0 ? o : t.innerType._zod.run(o, r);
  };
}), tu = /* @__PURE__ */ l("$ZodNullable", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${rn(o.source)}|null)$`) : void 0;
  }), I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (o, r) => o.value === null ? o : t.innerType._zod.run(o, r);
}), ru = /* @__PURE__ */ l("$ZodDefault", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(o, r);
    if (o.value === void 0)
      return o.value = t.defaultValue, o;
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => zi(i, t)) : zi(n, t);
  };
});
function zi(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const iu = /* @__PURE__ */ l("$ZodPrefault", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => (r.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, r));
}), ou = /* @__PURE__ */ l("$ZodNonOptional", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => {
    const o = t.innerType._zod.values;
    return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (o, r) => {
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => Si(i, e)) : Si(n, e);
  };
});
function Si(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const au = /* @__PURE__ */ l("$ZodSuccess", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new tn("ZodSuccess");
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => (o.value = i.issues.length === 0, o)) : (o.value = n.issues.length === 0, o);
  };
}), uu = /* @__PURE__ */ l("$ZodCatch", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(o, r);
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => (o.value = i.value, i.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: i.issues.map((a) => J(a, r, N()))
      },
      input: o.value
    }), o.issues = []), o)) : (o.value = n.value, n.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: n.issues.map((i) => J(i, r, N()))
      },
      input: o.value
    }), o.issues = []), o);
  };
}), cu = /* @__PURE__ */ l("$ZodNaN", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => ((typeof o.value != "number" || !Number.isNaN(o.value)) && o.issues.push({
    input: o.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), o);
}), lu = /* @__PURE__ */ l("$ZodPipe", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, r) => {
    if (r.direction === "backward") {
      const i = t.out._zod.run(o, r);
      return i instanceof Promise ? i.then((a) => Ge(a, t.in, r)) : Ge(i, t.in, r);
    }
    const n = t.in._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => Ge(i, t.out, r)) : Ge(n, t.out, r);
  };
});
function Ge(e, t, o) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, o);
}
const Rt = /* @__PURE__ */ l("$ZodCodec", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, r) => {
    if ((r.direction || "forward") === "forward") {
      const i = t.in._zod.run(o, r);
      return i instanceof Promise ? i.then((a) => Ve(a, t, r)) : Ve(i, t, r);
    } else {
      const i = t.out._zod.run(o, r);
      return i instanceof Promise ? i.then((a) => Ve(a, t, r)) : Ve(i, t, r);
    }
  };
});
function Ve(e, t, o) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((o.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((i) => Ke(e, i, t.out, o)) : Ke(e, n, t.out, o);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((i) => Ke(e, i, t.in, o)) : Ke(e, n, t.in, o);
  }
}
function Ke(e, t, o, r) {
  return e.issues.length ? (e.aborted = !0, e) : o._zod.run({ value: t, issues: e.issues }, r);
}
const su = /* @__PURE__ */ l("$ZodReadonly", (e, t) => {
  y.init(e, t), I(e._zod, "propValues", () => t.innerType._zod.propValues), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "optin", () => t.innerType?._zod?.optin), I(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(o, r);
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then(ji) : ji(n);
  };
});
function ji(e) {
  return e.value = Object.freeze(e.value), e;
}
const du = /* @__PURE__ */ l("$ZodTemplateLiteral", (e, t) => {
  y.init(e, t);
  const o = [];
  for (const r of t.parts)
    if (typeof r == "object" && r !== null) {
      if (!r._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...r._zod.traits].shift()}`);
      const n = r._zod.pattern instanceof RegExp ? r._zod.pattern.source : r._zod.pattern;
      if (!n)
        throw new Error(`Invalid template literal part: ${r._zod.traits}`);
      const i = n.startsWith("^") ? 1 : 0, a = n.endsWith("$") ? n.length - 1 : n.length;
      o.push(n.slice(i, a));
    } else if (r === null || Li.has(typeof r))
      o.push(K(`${r}`));
    else
      throw new Error(`Invalid template literal part: ${r}`);
  e._zod.pattern = new RegExp(`^${o.join("")}$`), e._zod.parse = (r, n) => typeof r.value != "string" ? (r.issues.push({
    input: r.value,
    inst: e,
    expected: "template_literal",
    code: "invalid_type"
  }), r) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(r.value) || r.issues.push({
    input: r.value,
    inst: e,
    code: "invalid_format",
    format: t.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), r);
}), mu = /* @__PURE__ */ l("$ZodFunction", (e, t) => (y.init(e, t), e._def = t, e._zod.def = t, e.implement = (o) => {
  if (typeof o != "function")
    throw new Error("implement() must be called with a function");
  return function(...r) {
    const n = e._def.input ? lt(e._def.input, r) : r, i = Reflect.apply(o, this, n);
    return e._def.output ? lt(e._def.output, i) : i;
  };
}, e.implementAsync = (o) => {
  if (typeof o != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...r) {
    const n = e._def.input ? await st(e._def.input, r) : r, i = await Reflect.apply(o, this, n);
    return e._def.output ? await st(e._def.output, i) : i;
  };
}, e._zod.parse = (o, r) => typeof o.value != "function" ? (o.issues.push({
  code: "invalid_type",
  expected: "function",
  input: o.value,
  inst: e
}), o) : (e._def.output && e._def.output._zod.def.type === "promise" ? o.value = e.implementAsync(o.value) : o.value = e.implement(o.value), o), e.input = (...o) => {
  const r = e.constructor;
  return Array.isArray(o[0]) ? new r({
    type: "function",
    input: new Ct({
      type: "tuple",
      items: o[0],
      rest: o[1]
    }),
    output: e._def.output
  }) : new r({
    type: "function",
    input: o[0],
    output: e._def.output
  });
}, e.output = (o) => {
  const r = e.constructor;
  return new r({
    type: "function",
    input: e._def.input,
    output: o
  });
}, e)), fu = /* @__PURE__ */ l("$ZodPromise", (e, t) => {
  y.init(e, t), e._zod.parse = (o, r) => Promise.resolve(o.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, r));
}), gu = /* @__PURE__ */ l("$ZodLazy", (e, t) => {
  y.init(e, t), I(e._zod, "innerType", () => t.getter()), I(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), I(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), I(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), I(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (o, r) => e._zod.innerType._zod.run(o, r);
}), pu = /* @__PURE__ */ l("$ZodCustom", (e, t) => {
  U.init(e, t), y.init(e, t), e._zod.parse = (o, r) => o, e._zod.check = (o) => {
    const r = o.value, n = t.fn(r);
    if (n instanceof Promise)
      return n.then((i) => xi(i, o, r, e));
    xi(n, o, r, e);
  };
});
function xi(e, t, o, r) {
  if (!e) {
    const n = {
      code: "custom",
      input: o,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (n.params = r._zod.def.params), t.issues.push(ce(n));
  }
}
const ys = () => {
  const e = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${n.expected}، ولكن تم إدخال ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${_(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${i} ${n.maximum.toString()} ${a.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${i} ${n.minimum.toString()} ${a.unit}` : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"` : i.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"` : i.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"` : i.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}` : `${r[i.format] ?? n.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
      case "unrecognized_keys":
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${p(n.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${n.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${n.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function ks() {
  return {
    localeError: ys()
  };
}
const Is = () => {
  const e = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${n.expected}, daxil olan ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${_(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${i}${n.maximum.toString()} ${a.unit ?? "element"}` : `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Çox kiçik: gözlənilən ${n.origin} ${i}${n.minimum.toString()} ${a.unit}` : `Çox kiçik: gözlənilən ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Yanlış mətn: "${i.prefix}" ilə başlamalıdır` : i.format === "ends_with" ? `Yanlış mətn: "${i.suffix}" ilə bitməlidir` : i.format === "includes" ? `Yanlış mətn: "${i.includes}" daxil olmalıdır` : i.format === "regex" ? `Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${n.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function ws() {
  return {
    localeError: Is()
  };
}
function Oi(e, t, o, r) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? r : i === 1 ? t : i >= 2 && i <= 4 ? o : r;
}
const zs = () => {
  const e = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "лік";
      case "object": {
        if (Array.isArray(n))
          return "масіў";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${n.expected}, атрымана ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${_(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const u = Number(n.maximum), d = Oi(u, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${i}${n.maximum.toString()} ${d}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const u = Number(n.minimum), d = Oi(u, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${i}${n.minimum.toString()} ${d}`;
        }
        return `Занадта малы: чакалася, што ${n.origin} павінна быць ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${i.prefix}"` : i.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${i.suffix}"` : i.format === "includes" ? `Няправільны радок: павінен змяшчаць "${i.includes}"` : i.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${i.pattern}` : `Няправільны ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${n.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${n.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function Ss() {
  return {
    localeError: zs()
  };
}
const js = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "число";
    case "object": {
      if (Array.isArray(e))
        return "масив";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, xs = () => {
  const e = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Невалиден вход: очакван ${r.expected}, получен ${js(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Невалиден вход: очакван ${_(r.values[0])}` : `Невалидна опция: очаквано едно от ${p(r.values, "|")}`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `Твърде голямо: очаква се ${r.origin ?? "стойност"} да съдържа ${n}${r.maximum.toString()} ${i.unit ?? "елемента"}` : `Твърде голямо: очаква се ${r.origin ?? "стойност"} да бъде ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `Твърде малко: очаква се ${r.origin} да съдържа ${n}${r.minimum.toString()} ${i.unit}` : `Твърде малко: очаква се ${r.origin} да бъде ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        if (n.format === "starts_with")
          return `Невалиден низ: трябва да започва с "${n.prefix}"`;
        if (n.format === "ends_with")
          return `Невалиден низ: трябва да завършва с "${n.suffix}"`;
        if (n.format === "includes")
          return `Невалиден низ: трябва да включва "${n.includes}"`;
        if (n.format === "regex")
          return `Невалиден низ: трябва да съвпада с ${n.pattern}`;
        let i = "Невалиден";
        return n.format === "emoji" && (i = "Невалидно"), n.format === "datetime" && (i = "Невалидно"), n.format === "date" && (i = "Невалидна"), n.format === "time" && (i = "Невалидно"), n.format === "duration" && (i = "Невалидна"), `${i} ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${r.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${r.keys.length > 1 ? "и" : ""} ключ${r.keys.length > 1 ? "ове" : ""}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${r.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${r.origin}`;
      default:
        return "Невалиден вход";
    }
  };
};
function Os() {
  return {
    localeError: xs()
  };
}
const Us = () => {
  const e = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${n.expected}, s'ha rebut ${o(n.input)}`;
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${_(n.values[0])}` : `Opció invàlida: s'esperava una de ${p(n.values, " o ")}`;
      case "too_big": {
        const i = n.inclusive ? "com a màxim" : "menys de", a = t(n.origin);
        return a ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingués ${i} ${n.maximum.toString()} ${a.unit ?? "elements"}` : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "com a mínim" : "més de", a = t(n.origin);
        return a ? `Massa petit: s'esperava que ${n.origin} contingués ${i} ${n.minimum.toString()} ${a.unit}` : `Massa petit: s'esperava que ${n.origin} fos ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Format invàlid: ha de començar amb "${i.prefix}"` : i.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${i.suffix}"` : i.format === "includes" ? `Format invàlid: ha d'incloure "${i.includes}"` : i.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${i.pattern}` : `Format invàlid per a ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${n.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element invàlid a ${n.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function Ns() {
  return {
    localeError: Us()
  };
}
const Ds = () => {
  const e = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "číslo";
      case "string":
        return "řetězec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object": {
        if (Array.isArray(n))
          return "pole";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${n.expected}, obdrženo ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${_(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí mít ${i}${n.maximum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí být ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí mít ${i}${n.minimum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí být ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${i.prefix}"` : i.format === "ends_with" ? `Neplatný řetězec: musí končit na "${i.suffix}"` : i.format === "includes" ? `Neplatný řetězec: musí obsahovat "${i.includes}"` : i.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${i.pattern}` : `Neplatný formát ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${n.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${n.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function Ps() {
  return {
    localeError: Ds()
  };
}
const Zs = () => {
  const e = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  }, t = {
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  function o(a) {
    return e[a] ?? null;
  }
  function r(a) {
    return t[a] ?? a;
  }
  const n = (a) => {
    const u = typeof a;
    switch (u) {
      case "number":
        return Number.isNaN(a) ? "NaN" : "tal";
      case "object":
        return Array.isArray(a) ? "liste" : a === null ? "null" : Object.getPrototypeOf(a) !== Object.prototype && a.constructor ? a.constructor.name : "objekt";
    }
    return u;
  }, i = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Ugyldigt input: forventede ${r(a.expected)}, fik ${r(n(a.input))}`;
      case "invalid_value":
        return a.values.length === 1 ? `Ugyldig værdi: forventede ${_(a.values[0])}` : `Ugyldigt valg: forventede en af følgende ${p(a.values, "|")}`;
      case "too_big": {
        const u = a.inclusive ? "<=" : "<", d = o(a.origin), c = r(a.origin);
        return d ? `For stor: forventede ${c ?? "value"} ${d.verb} ${u} ${a.maximum.toString()} ${d.unit ?? "elementer"}` : `For stor: forventede ${c ?? "value"} havde ${u} ${a.maximum.toString()}`;
      }
      case "too_small": {
        const u = a.inclusive ? ">=" : ">", d = o(a.origin), c = r(a.origin);
        return d ? `For lille: forventede ${c} ${d.verb} ${u} ${a.minimum.toString()} ${d.unit}` : `For lille: forventede ${c} havde ${u} ${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = a;
        return u.format === "starts_with" ? `Ugyldig streng: skal starte med "${u.prefix}"` : u.format === "ends_with" ? `Ugyldig streng: skal ende med "${u.suffix}"` : u.format === "includes" ? `Ugyldig streng: skal indeholde "${u.includes}"` : u.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${u.pattern}` : `Ugyldig ${i[u.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${a.divisor}`;
      case "unrecognized_keys":
        return `${a.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${p(a.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${a.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${a.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function Ts() {
  return {
    localeError: Zs()
  };
}
const Es = () => {
  const e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "Zahl";
      case "object": {
        if (Array.isArray(n))
          return "Array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${n.expected}, erhalten ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${_(n.values[0])}` : `Ungültige Option: erwartet eine von ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ${a.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ist`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ${a.unit} hat` : `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ungültiger String: muss mit "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ungültiger String: muss mit "${i.suffix}" enden` : i.format === "includes" ? `Ungültiger String: muss "${i.includes}" enthalten` : i.format === "regex" ? `Ungültiger String: muss dem Muster ${i.pattern} entsprechen` : `Ungültig: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${n.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${n.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function As() {
  return {
    localeError: Es()
  };
}
const Ls = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, Cs = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Invalid input: expected ${r.expected}, received ${Ls(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Invalid input: expected ${_(r.values[0])}` : `Invalid option: expected one of ${p(r.values, "|")}`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `Too big: expected ${r.origin ?? "value"} to have ${n}${r.maximum.toString()} ${i.unit ?? "elements"}` : `Too big: expected ${r.origin ?? "value"} to be ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `Too small: expected ${r.origin} to have ${n}${r.minimum.toString()} ${i.unit}` : `Too small: expected ${r.origin} to be ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `Invalid string: must start with "${n.prefix}"` : n.format === "ends_with" ? `Invalid string: must end with "${n.suffix}"` : n.format === "includes" ? `Invalid string: must include "${n.includes}"` : n.format === "regex" ? `Invalid string: must match pattern ${n.pattern}` : `Invalid ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${r.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${r.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${r.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function vu() {
  return {
    localeError: Cs()
  };
}
const Rs = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "nombro";
    case "object": {
      if (Array.isArray(e))
        return "tabelo";
      if (e === null)
        return "senvalora";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, Fs = () => {
  const e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${r.expected}, riceviĝis ${Rs(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Nevalida enigo: atendiĝis ${_(r.values[0])}` : `Nevalida opcio: atendiĝis unu el ${p(r.values, "|")}`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `Tro granda: atendiĝis ke ${r.origin ?? "valoro"} havu ${n}${r.maximum.toString()} ${i.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${r.origin ?? "valoro"} havu ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `Tro malgranda: atendiĝis ke ${r.origin} havu ${n}${r.minimum.toString()} ${i.unit}` : `Tro malgranda: atendiĝis ke ${r.origin} estu ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"` : n.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${n.suffix}"` : n.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${n.includes}"` : n.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}` : `Nevalida ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${r.keys.length > 1 ? "j" : ""} ŝlosilo${r.keys.length > 1 ? "j" : ""}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${r.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${r.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function Js() {
  return {
    localeError: Fs()
  };
}
const Ms = () => {
  const e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  }, t = {
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  function o(a) {
    return e[a] ?? null;
  }
  function r(a) {
    return t[a] ?? a;
  }
  const n = (a) => {
    const u = typeof a;
    switch (u) {
      case "number":
        return Number.isNaN(a) ? "NaN" : "number";
      case "object":
        return Array.isArray(a) ? "array" : a === null ? "null" : Object.getPrototypeOf(a) !== Object.prototype ? a.constructor.name : "object";
    }
    return u;
  }, i = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${r(a.expected)}, recibido ${r(n(a.input))}`;
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Entrada inválida: se esperaba ${_(a.values[0])}` : `Opción inválida: se esperaba una de ${p(a.values, "|")}`;
      case "too_big": {
        const u = a.inclusive ? "<=" : "<", d = o(a.origin), c = r(a.origin);
        return d ? `Demasiado grande: se esperaba que ${c ?? "valor"} tuviera ${u}${a.maximum.toString()} ${d.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${c ?? "valor"} fuera ${u}${a.maximum.toString()}`;
      }
      case "too_small": {
        const u = a.inclusive ? ">=" : ">", d = o(a.origin), c = r(a.origin);
        return d ? `Demasiado pequeño: se esperaba que ${c} tuviera ${u}${a.minimum.toString()} ${d.unit}` : `Demasiado pequeño: se esperaba que ${c} fuera ${u}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = a;
        return u.format === "starts_with" ? `Cadena inválida: debe comenzar con "${u.prefix}"` : u.format === "ends_with" ? `Cadena inválida: debe terminar en "${u.suffix}"` : u.format === "includes" ? `Cadena inválida: debe incluir "${u.includes}"` : u.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${u.pattern}` : `Inválido ${i[u.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${a.divisor}`;
      case "unrecognized_keys":
        return `Llave${a.keys.length > 1 ? "s" : ""} desconocida${a.keys.length > 1 ? "s" : ""}: ${p(a.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${r(a.origin)}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${r(a.origin)}`;
      default:
        return "Entrada inválida";
    }
  };
};
function Gs() {
  return {
    localeError: Ms()
  };
}
const Vs = () => {
  const e = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "آرایه";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${n.expected} می‌بود، ${o(n.input)} دریافت شد`;
      case "invalid_value":
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${_(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${p(n.values, "|")} می‌بود`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${i}${n.maximum.toString()} ${a.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${i}${n.maximum.toString()} باشد`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `خیلی کوچک: ${n.origin} باید ${i}${n.minimum.toString()} ${a.unit} باشد` : `خیلی کوچک: ${n.origin} باید ${i}${n.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `رشته نامعتبر: باید با "${i.prefix}" شروع شود` : i.format === "ends_with" ? `رشته نامعتبر: باید با "${i.suffix}" تمام شود` : i.format === "includes" ? `رشته نامعتبر: باید شامل "${i.includes}" باشد` : i.format === "regex" ? `رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد` : `${r[i.format] ?? n.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${n.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${n.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function Ks() {
  return {
    localeError: Vs()
  };
}
const Ws = () => {
  const e = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${n.expected}, oli ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${_(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Liian suuri: ${a.subject} täytyy olla ${i}${n.maximum.toString()} ${a.unit}`.trim() : `Liian suuri: arvon täytyy olla ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Liian pieni: ${a.subject} täytyy olla ${i}${n.minimum.toString()} ${a.unit}`.trim() : `Liian pieni: arvon täytyy olla ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${i.prefix}"` : i.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${i.suffix}"` : i.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${i.includes}"` : i.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}` : `Virheellinen ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function Bs() {
  return {
    localeError: Ws()
  };
}
const Xs = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombre";
      case "object": {
        if (Array.isArray(n))
          return "tableau";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : ${n.expected} attendu, ${o(n.input)} reçu`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : ${_(n.values[0])} attendu` : `Option invalide : une valeur parmi ${p(n.values, "|")} attendue`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Trop grand : ${n.origin ?? "valeur"} doit ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "élément(s)"}` : `Trop grand : ${n.origin ?? "valeur"} doit être ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Trop petit : ${n.origin} doit ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Trop petit : ${n.origin} doit être ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${i.pattern}` : `${r[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function qs() {
  return {
    localeError: Xs()
  };
}
const Ys = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${n.expected}, reçu ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : attendu ${_(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "≤" : "<", a = t(n.origin);
        return a ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${i}${n.maximum.toString()} ${a.unit}` : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "≥" : ">", a = t(n.origin);
        return a ? `Trop petit : attendu que ${n.origin} ait ${i}${n.minimum.toString()} ${a.unit}` : `Trop petit : attendu que ${n.origin} soit ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${i.pattern}` : `${r[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function Hs() {
  return {
    localeError: Ys()
  };
}
const Qs = () => {
  const e = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  }, t = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
    // no unit
  }, o = (c) => c ? e[c] : void 0, r = (c) => {
    const s = o(c);
    return s ? s.label : c ?? e.unknown.label;
  }, n = (c) => `ה${r(c)}`, i = (c) => (o(c)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", a = (c) => c ? t[c] ?? null : null, u = (c) => {
    const s = typeof c;
    switch (s) {
      case "number":
        return Number.isNaN(c) ? "NaN" : "number";
      case "object":
        return Array.isArray(c) ? "array" : c === null ? "null" : Object.getPrototypeOf(c) !== Object.prototype && c.constructor ? c.constructor.name : "object";
      default:
        return s;
    }
  }, d = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  };
  return (c) => {
    switch (c.code) {
      case "invalid_type": {
        const s = c.expected, f = r(s), h = u(c.input), v = e[h]?.label ?? h;
        return `קלט לא תקין: צריך להיות ${f}, התקבל ${v}`;
      }
      case "invalid_value": {
        if (c.values.length === 1)
          return `ערך לא תקין: הערך חייב להיות ${_(c.values[0])}`;
        const s = c.values.map((v) => _(v));
        if (c.values.length === 2)
          return `ערך לא תקין: האפשרויות המתאימות הן ${s[0]} או ${s[1]}`;
        const f = s[s.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${s.slice(0, -1).join(", ")} או ${f}`;
      }
      case "too_big": {
        const s = a(c.origin), f = n(c.origin ?? "value");
        if (c.origin === "string")
          return `${s?.longLabel ?? "ארוך"} מדי: ${f} צריכה להכיל ${c.maximum.toString()} ${s?.unit ?? ""} ${c.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (c.origin === "number") {
          const m = c.inclusive ? `קטן או שווה ל-${c.maximum}` : `קטן מ-${c.maximum}`;
          return `גדול מדי: ${f} צריך להיות ${m}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const m = c.origin === "set" ? "צריכה" : "צריך", $ = c.inclusive ? `${c.maximum} ${s?.unit ?? ""} או פחות` : `פחות מ-${c.maximum} ${s?.unit ?? ""}`;
          return `גדול מדי: ${f} ${m} להכיל ${$}`.trim();
        }
        const h = c.inclusive ? "<=" : "<", v = i(c.origin ?? "value");
        return s?.unit ? `${s.longLabel} מדי: ${f} ${v} ${h}${c.maximum.toString()} ${s.unit}` : `${s?.longLabel ?? "גדול"} מדי: ${f} ${v} ${h}${c.maximum.toString()}`;
      }
      case "too_small": {
        const s = a(c.origin), f = n(c.origin ?? "value");
        if (c.origin === "string")
          return `${s?.shortLabel ?? "קצר"} מדי: ${f} צריכה להכיל ${c.minimum.toString()} ${s?.unit ?? ""} ${c.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (c.origin === "number") {
          const m = c.inclusive ? `גדול או שווה ל-${c.minimum}` : `גדול מ-${c.minimum}`;
          return `קטן מדי: ${f} צריך להיות ${m}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const m = c.origin === "set" ? "צריכה" : "צריך";
          if (c.minimum === 1 && c.inclusive) {
            const b = (c.origin === "set", "לפחות פריט אחד");
            return `קטן מדי: ${f} ${m} להכיל ${b}`;
          }
          const $ = c.inclusive ? `${c.minimum} ${s?.unit ?? ""} או יותר` : `יותר מ-${c.minimum} ${s?.unit ?? ""}`;
          return `קטן מדי: ${f} ${m} להכיל ${$}`.trim();
        }
        const h = c.inclusive ? ">=" : ">", v = i(c.origin ?? "value");
        return s?.unit ? `${s.shortLabel} מדי: ${f} ${v} ${h}${c.minimum.toString()} ${s.unit}` : `${s?.shortLabel ?? "קטן"} מדי: ${f} ${v} ${h}${c.minimum.toString()}`;
      }
      case "invalid_format": {
        const s = c;
        if (s.format === "starts_with")
          return `המחרוזת חייבת להתחיל ב "${s.prefix}"`;
        if (s.format === "ends_with")
          return `המחרוזת חייבת להסתיים ב "${s.suffix}"`;
        if (s.format === "includes")
          return `המחרוזת חייבת לכלול "${s.includes}"`;
        if (s.format === "regex")
          return `המחרוזת חייבת להתאים לתבנית ${s.pattern}`;
        const f = d[s.format], h = f?.label ?? s.format, m = (f?.gender ?? "m") === "f" ? "תקינה" : "תקין";
        return `${h} לא ${m}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`;
      case "unrecognized_keys":
        return `מפתח${c.keys.length > 1 ? "ות" : ""} לא מזוה${c.keys.length > 1 ? "ים" : "ה"}: ${p(c.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${n(c.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function ed() {
  return {
    localeError: Qs()
  };
}
const nd = () => {
  const e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "szám";
      case "object": {
        if (Array.isArray(n))
          return "tömb";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${n.expected}, a kapott érték ${o(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${_(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Túl nagy: ${n.origin ?? "érték"} mérete túl nagy ${i}${n.maximum.toString()} ${a.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${n.origin ?? "érték"} túl nagy: ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${i}${n.minimum.toString()} ${a.unit}` : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie` : i.format === "ends_with" ? `Érvénytelen string: "${i.suffix}" értékkel kell végződnie` : i.format === "includes" ? `Érvénytelen string: "${i.includes}" értéket kell tartalmaznia` : i.format === "regex" ? `Érvénytelen string: ${i.pattern} mintának kell megfelelnie` : `Érvénytelen ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${n.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${n.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function td() {
  return {
    localeError: nd()
  };
}
const rd = () => {
  const e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${n.expected}, diterima ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${_(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${i}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${i}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: diharapkan ${n.origin} menjadi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak valid: harus menyertakan "${i.includes}"` : i.format === "regex" ? `String tidak valid: harus sesuai pola ${i.pattern}` : `${r[i.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${n.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${n.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function id() {
  return {
    localeError: rd()
  };
}
const od = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "númer";
    case "object": {
      if (Array.isArray(e))
        return "fylki";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, ad = () => {
  const e = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Rangt gildi: Þú slóst inn ${od(r.input)} þar sem á að vera ${r.expected}`;
      case "invalid_value":
        return r.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${_(r.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${p(r.values, "|")}`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `Of stórt: gert er ráð fyrir að ${r.origin ?? "gildi"} hafi ${n}${r.maximum.toString()} ${i.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${r.origin ?? "gildi"} sé ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `Of lítið: gert er ráð fyrir að ${r.origin} hafi ${n}${r.minimum.toString()} ${i.unit}` : `Of lítið: gert er ráð fyrir að ${r.origin} sé ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${n.prefix}"` : n.format === "ends_with" ? `Ógildur strengur: verður að enda á "${n.suffix}"` : n.format === "includes" ? `Ógildur strengur: verður að innihalda "${n.includes}"` : n.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${n.pattern}` : `Rangt ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${r.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${r.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${r.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${r.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function ud() {
  return {
    localeError: ad()
  };
}
const cd = () => {
  const e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numero";
      case "object": {
        if (Array.isArray(n))
          return "vettore";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input non valido: atteso ${n.expected}, ricevuto ${o(n.input)}`;
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${_(n.values[0])}` : `Opzione non valida: atteso uno tra ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${i}${n.maximum.toString()} ${a.unit ?? "elementi"}` : `Troppo grande: ${n.origin ?? "valore"} deve essere ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Troppo piccolo: ${n.origin} deve avere ${i}${n.minimum.toString()} ${a.unit}` : `Troppo piccolo: ${n.origin} deve essere ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Stringa non valida: deve iniziare con "${i.prefix}"` : i.format === "ends_with" ? `Stringa non valida: deve terminare con "${i.suffix}"` : i.format === "includes" ? `Stringa non valida: deve includere "${i.includes}"` : i.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${i.pattern}` : `Invalid ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${n.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${n.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function ld() {
  return {
    localeError: cd()
  };
}
const sd = () => {
  const e = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "数値";
      case "object": {
        if (Array.isArray(n))
          return "配列";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無効な入力: ${n.expected}が期待されましたが、${o(n.input)}が入力されました`;
      case "invalid_value":
        return n.values.length === 1 ? `無効な入力: ${_(n.values[0])}が期待されました` : `無効な選択: ${p(n.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const i = n.inclusive ? "以下である" : "より小さい", a = t(n.origin);
        return a ? `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${a.unit ?? "要素"}${i}必要があります` : `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${i}必要があります`;
      }
      case "too_small": {
        const i = n.inclusive ? "以上である" : "より大きい", a = t(n.origin);
        return a ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${a.unit}${i}必要があります` : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${i}必要があります`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `無効な文字列: "${i.prefix}"で始まる必要があります` : i.format === "ends_with" ? `無効な文字列: "${i.suffix}"で終わる必要があります` : i.format === "includes" ? `無効な文字列: "${i.includes}"を含む必要があります` : i.format === "regex" ? `無効な文字列: パターン${i.pattern}に一致する必要があります` : `無効な${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${n.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${p(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${n.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function dd() {
  return {
    localeError: sd()
  };
}
const md = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "რიცხვი";
    case "object": {
      if (Array.isArray(e))
        return "მასივი";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return {
    string: "სტრინგი",
    boolean: "ბულეანი",
    undefined: "undefined",
    bigint: "bigint",
    symbol: "symbol",
    function: "ფუნქცია"
  }[t] ?? t;
}, fd = () => {
  const e = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `არასწორი შეყვანა: მოსალოდნელი ${r.expected}, მიღებული ${md(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${_(r.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${p(r.values, "|")}-დან`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `ზედმეტად დიდი: მოსალოდნელი ${r.origin ?? "მნიშვნელობა"} ${i.verb} ${n}${r.maximum.toString()} ${i.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${r.origin ?? "მნიშვნელობა"} იყოს ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `ზედმეტად პატარა: მოსალოდნელი ${r.origin} ${i.verb} ${n}${r.minimum.toString()} ${i.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${r.origin} იყოს ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${n.prefix}"-ით` : n.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${n.suffix}"-ით` : n.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${n.includes}"-ს` : n.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}` : `არასწორი ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${r.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${r.keys.length > 1 ? "ები" : "ი"}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${r.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${r.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function gd() {
  return {
    localeError: fd()
  };
}
const pd = () => {
  const e = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
      case "object": {
        if (Array.isArray(n))
          return "អារេ (Array)";
        if (n === null)
          return "គ្មានតម្លៃ (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${n.expected} ប៉ុន្តែទទួលបាន ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${i} ${n.maximum.toString()} ${a.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `តូចពេក៖ ត្រូវការ ${n.origin} ${i} ${n.minimum.toString()} ${a.unit}` : `តូចពេក៖ ត្រូវការ ${n.origin} ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"` : i.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"` : i.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"` : i.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}` : `មិនត្រឹមត្រូវ៖ ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function hu() {
  return {
    localeError: pd()
  };
}
function vd() {
  return hu();
}
const hd = () => {
  const e = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${n.expected}, 받은 타입은 ${o(n.input)}입니다`;
      case "invalid_value":
        return n.values.length === 1 ? `잘못된 입력: 값은 ${_(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${p(n.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const i = n.inclusive ? "이하" : "미만", a = i === "미만" ? "이어야 합니다" : "여야 합니다", u = t(n.origin), d = u?.unit ?? "요소";
        return u ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${d} ${i}${a}` : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${i}${a}`;
      }
      case "too_small": {
        const i = n.inclusive ? "이상" : "초과", a = i === "이상" ? "이어야 합니다" : "여야 합니다", u = t(n.origin), d = u?.unit ?? "요소";
        return u ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${d} ${i}${a}` : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${i}${a}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다` : i.format === "ends_with" ? `잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다` : i.format === "includes" ? `잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다` : i.format === "regex" ? `잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다` : `잘못된 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${n.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${n.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function $d() {
  return {
    localeError: hd()
  };
}
const bd = (e) => he(typeof e, e), he = (e, t = void 0) => {
  switch (e) {
    case "number":
      return Number.isNaN(t) ? "NaN" : "skaičius";
    case "bigint":
      return "sveikasis skaičius";
    case "string":
      return "eilutė";
    case "boolean":
      return "loginė reikšmė";
    case "undefined":
    case "void":
      return "neapibrėžta reikšmė";
    case "function":
      return "funkcija";
    case "symbol":
      return "simbolis";
    case "object":
      return t === void 0 ? "nežinomas objektas" : t === null ? "nulinė reikšmė" : Array.isArray(t) ? "masyvas" : Object.getPrototypeOf(t) !== Object.prototype && t.constructor ? t.constructor.name : "objektas";
    //Zod types below
    case "null":
      return "nulinė reikšmė";
  }
  return e;
}, pe = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Ui(e) {
  const t = Math.abs(e), o = t % 10, r = t % 100;
  return r >= 11 && r <= 19 || o === 0 ? "many" : o === 1 ? "one" : "few";
}
const _d = () => {
  const e = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function t(r, n, i, a) {
    const u = e[r] ?? null;
    return u === null ? u : {
      unit: u.unit[n],
      verb: u.verb[a][i ? "inclusive" : "notInclusive"]
    };
  }
  const o = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Gautas tipas ${bd(r.input)}, o tikėtasi - ${he(r.expected)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Privalo būti ${_(r.values[0])}` : `Privalo būti vienas iš ${p(r.values, "|")} pasirinkimų`;
      case "too_big": {
        const n = he(r.origin), i = t(r.origin, Ui(Number(r.maximum)), r.inclusive ?? !1, "smaller");
        if (i?.verb)
          return `${pe(n ?? r.origin ?? "reikšmė")} ${i.verb} ${r.maximum.toString()} ${i.unit ?? "elementų"}`;
        const a = r.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${pe(n ?? r.origin ?? "reikšmė")} turi būti ${a} ${r.maximum.toString()} ${i?.unit}`;
      }
      case "too_small": {
        const n = he(r.origin), i = t(r.origin, Ui(Number(r.minimum)), r.inclusive ?? !1, "bigger");
        if (i?.verb)
          return `${pe(n ?? r.origin ?? "reikšmė")} ${i.verb} ${r.minimum.toString()} ${i.unit ?? "elementų"}`;
        const a = r.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${pe(n ?? r.origin ?? "reikšmė")} turi būti ${a} ${r.minimum.toString()} ${i?.unit}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `Eilutė privalo prasidėti "${n.prefix}"` : n.format === "ends_with" ? `Eilutė privalo pasibaigti "${n.suffix}"` : n.format === "includes" ? `Eilutė privalo įtraukti "${n.includes}"` : n.format === "regex" ? `Eilutė privalo atitikti ${n.pattern}` : `Neteisingas ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${r.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${r.keys.length > 1 ? "i" : "as"} rakt${r.keys.length > 1 ? "ai" : "as"}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const n = he(r.origin);
        return `${pe(n ?? r.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function yd() {
  return {
    localeError: _d()
  };
}
const kd = () => {
  const e = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "број";
      case "object": {
        if (Array.isArray(n))
          return "низа";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${n.expected}, примено ${o(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${_(n.values[0])}` : `Грешана опција: се очекува една ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${i}${n.maximum.toString()} ${a.unit ?? "елементи"}` : `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Премногу мал: се очекува ${n.origin} да има ${i}${n.minimum.toString()} ${a.unit}` : `Премногу мал: се очекува ${n.origin} да биде ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неважечка низа: мора да започнува со "${i.prefix}"` : i.format === "ends_with" ? `Неважечка низа: мора да завршува со "${i.suffix}"` : i.format === "includes" ? `Неважечка низа: мора да вклучува "${i.includes}"` : i.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${i.pattern}` : `Invalid ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${n.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${n.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function Id() {
  return {
    localeError: kd()
  };
}
const wd = () => {
  const e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombor";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${n.expected}, diterima ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak sah: dijangka ${_(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: dijangka ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: dijangka ${n.origin} adalah ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak sah: mesti mengandungi "${i.includes}"` : i.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${i.pattern}` : `${r[i.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${n.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${n.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function zd() {
  return {
    localeError: wd()
  };
}
const Sd = () => {
  const e = {
    string: { unit: "tekens", verb: "te hebben" },
    file: { unit: "bytes", verb: "te hebben" },
    array: { unit: "elementen", verb: "te hebben" },
    set: { unit: "elementen", verb: "te hebben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "getal";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${n.expected}, ontving ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${_(n.values[0])}` : `Ongeldige optie: verwacht één van ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Te groot: verwacht dat ${n.origin ?? "waarde"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "elementen"}` : `Te groot: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} is`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Te klein: verwacht dat ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Te klein: verwacht dat ${n.origin} ${i}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ongeldige tekst: moet met "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ongeldige tekst: moet op "${i.suffix}" eindigen` : i.format === "includes" ? `Ongeldige tekst: moet "${i.includes}" bevatten` : i.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}` : `Ongeldig: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${n.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${n.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function jd() {
  return {
    localeError: Sd()
  };
}
const xd = () => {
  const e = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "tall";
      case "object": {
        if (Array.isArray(n))
          return "liste";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${n.expected}, fikk ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${_(n.values[0])}` : `Ugyldig valg: forventet en av ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `For stor(t): forventet ${n.origin ?? "value"} til å ha ${i}${n.maximum.toString()} ${a.unit ?? "elementer"}` : `For stor(t): forventet ${n.origin ?? "value"} til å ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `For lite(n): forventet ${n.origin} til å ha ${i}${n.minimum.toString()} ${a.unit}` : `For lite(n): forventet ${n.origin} til å ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ugyldig streng: må starte med "${i.prefix}"` : i.format === "ends_with" ? `Ugyldig streng: må ende med "${i.suffix}"` : i.format === "includes" ? `Ugyldig streng: må inneholde "${i.includes}"` : i.format === "regex" ? `Ugyldig streng: må matche mønsteret ${i.pattern}` : `Ugyldig ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${n.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${n.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Od() {
  return {
    localeError: xd()
  };
}
const Ud = () => {
  const e = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numara";
      case "object": {
        if (Array.isArray(n))
          return "saf";
        if (n === null)
          return "gayb";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${n.expected}, alınan ${o(n.input)}`;
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${_(n.values[0])}` : `Fâsit tercih: mûteberler ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Fazla büyük: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} ${a.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Fazla küçük: ${n.origin}, ${i}${n.minimum.toString()} ${a.unit} sahip olmalıydı.` : `Fazla küçük: ${n.origin}, ${i}${n.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Fâsit metin: "${i.prefix}" ile başlamalı.` : i.format === "ends_with" ? `Fâsit metin: "${i.suffix}" ile bitmeli.` : i.format === "includes" ? `Fâsit metin: "${i.includes}" ihtivâ etmeli.` : i.format === "regex" ? `Fâsit metin: ${i.pattern} nakşına uymalı.` : `Fâsit ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${n.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function Nd() {
  return {
    localeError: Ud()
  };
}
const Dd = () => {
  const e = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "ارې";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${n.expected} وای, مګر ${o(n.input)} ترلاسه شو`;
      case "invalid_value":
        return n.values.length === 1 ? `ناسم ورودي: باید ${_(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${p(n.values, "|")} څخه وای`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${i}${n.maximum.toString()} ${a.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${i}${n.maximum.toString()} وي`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `ډیر کوچنی: ${n.origin} باید ${i}${n.minimum.toString()} ${a.unit} ولري` : `ډیر کوچنی: ${n.origin} باید ${i}${n.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `ناسم متن: باید د "${i.prefix}" سره پیل شي` : i.format === "ends_with" ? `ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي` : i.format === "includes" ? `ناسم متن: باید "${i.includes}" ولري` : i.format === "regex" ? `ناسم متن: باید د ${i.pattern} سره مطابقت ولري` : `${r[i.format] ?? n.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${n.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${n.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function Pd() {
  return {
    localeError: Dd()
  };
}
const Zd = () => {
  const e = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "liczba";
      case "object": {
        if (Array.isArray(n))
          return "tablica";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${n.expected}, otrzymano ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${_(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${i}${n.maximum.toString()} ${a.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${i}${n.minimum.toString()} ${a.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"` : i.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"` : i.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"` : i.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}` : `Nieprawidłow(y/a/e) ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${n.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${n.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function Td() {
  return {
    localeError: Zd()
  };
}
const Ed = () => {
  const e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "número";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "nulo";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${n.expected}, recebido ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: esperado ${_(n.values[0])}` : `Opção inválida: esperada uma das ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${i}${n.maximum.toString()} ${a.unit ?? "elementos"}` : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Muito pequeno: esperado que ${n.origin} tivesse ${i}${n.minimum.toString()} ${a.unit}` : `Muito pequeno: esperado que ${n.origin} fosse ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Texto inválido: deve começar com "${i.prefix}"` : i.format === "ends_with" ? `Texto inválido: deve terminar com "${i.suffix}"` : i.format === "includes" ? `Texto inválido: deve incluir "${i.includes}"` : i.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${i.pattern}` : `${r[i.format] ?? n.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${n.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function Ad() {
  return {
    localeError: Ed()
  };
}
function Ni(e, t, o, r) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? r : i === 1 ? t : i >= 2 && i <= 4 ? o : r;
}
const Ld = () => {
  const e = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "массив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${n.expected}, получено ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${_(n.values[0])}` : `Неверный вариант: ожидалось одно из ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const u = Number(n.maximum), d = Ni(u, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${i}${n.maximum.toString()} ${d}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const u = Number(n.minimum), d = Ni(u, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${i}${n.minimum.toString()} ${d}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неверная строка: должна начинаться с "${i.prefix}"` : i.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${i.suffix}"` : i.format === "includes" ? `Неверная строка: должна содержать "${i.includes}"` : i.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${i.pattern}` : `Неверный ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${n.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${n.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function Cd() {
  return {
    localeError: Ld()
  };
}
const Rd = () => {
  const e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "število";
      case "object": {
        if (Array.isArray(n))
          return "tabela";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${n.expected}, prejeto ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${_(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${i}${n.maximum.toString()} ${a.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${i}${n.minimum.toString()} ${a.unit}` : `Premajhno: pričakovano, da bo ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${i.prefix}"` : i.format === "ends_with" ? `Neveljaven niz: mora se končati z "${i.suffix}"` : i.format === "includes" ? `Neveljaven niz: mora vsebovati "${i.includes}"` : i.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${i.pattern}` : `Neveljaven ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${n.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${n.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function Fd() {
  return {
    localeError: Rd()
  };
}
const Jd = () => {
  const e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "antal";
      case "object": {
        if (Array.isArray(n))
          return "lista";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${n.expected}, fick ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${_(n.values[0])}` : `Ogiltigt val: förväntade en av ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `För stor(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.maximum.toString()} ${a.unit ?? "element"}` : `För stor(t): förväntat ${n.origin ?? "värdet"} att ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.minimum.toString()} ${a.unit}` : `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ogiltig sträng: måste börja med "${i.prefix}"` : i.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${i.suffix}"` : i.format === "includes" ? `Ogiltig sträng: måste innehålla "${i.includes}"` : i.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${i.pattern}"` : `Ogiltig(t) ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${n.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function Md() {
  return {
    localeError: Jd()
  };
}
const Gd = () => {
  const e = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "எண் அல்லாதது" : "எண்";
      case "object": {
        if (Array.isArray(n))
          return "அணி";
        if (n === null)
          return "வெறுமை";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${n.expected}, பெறப்பட்டது ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${p(n.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${i}${n.maximum.toString()} ${a.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${i}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${i}${n.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${i}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்` : i.format === "ends_with" ? `தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்` : i.format === "includes" ? `தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்` : i.format === "regex" ? `தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${n.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function Vd() {
  return {
    localeError: Gd()
  };
}
const Kd = () => {
  const e = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
      case "object": {
        if (Array.isArray(n))
          return "อาร์เรย์ (Array)";
        if (n === null)
          return "ไม่มีค่า (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${n.expected} แต่ได้รับ ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${_(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "ไม่เกิน" : "น้อยกว่า", a = t(n.origin);
        return a ? `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${i} ${n.maximum.toString()} ${a.unit ?? "รายการ"}` : `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? "อย่างน้อย" : "มากกว่า", a = t(n.origin);
        return a ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${i} ${n.minimum.toString()} ${a.unit}` : `น้อยกว่ากำหนด: ${n.origin} ควรมี${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"` : i.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"` : i.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ` : i.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}` : `รูปแบบไม่ถูกต้อง: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${n.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function Wd() {
  return {
    localeError: Kd()
  };
}
const Bd = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, Xd = () => {
  const e = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const o = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${r.expected}, alınan ${Bd(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Geçersiz değer: beklenen ${_(r.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${p(r.values, "|")}`;
      case "too_big": {
        const n = r.inclusive ? "<=" : "<", i = t(r.origin);
        return i ? `Çok büyük: beklenen ${r.origin ?? "değer"} ${n}${r.maximum.toString()} ${i.unit ?? "öğe"}` : `Çok büyük: beklenen ${r.origin ?? "değer"} ${n}${r.maximum.toString()}`;
      }
      case "too_small": {
        const n = r.inclusive ? ">=" : ">", i = t(r.origin);
        return i ? `Çok küçük: beklenen ${r.origin} ${n}${r.minimum.toString()} ${i.unit}` : `Çok küçük: beklenen ${r.origin} ${n}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = r;
        return n.format === "starts_with" ? `Geçersiz metin: "${n.prefix}" ile başlamalı` : n.format === "ends_with" ? `Geçersiz metin: "${n.suffix}" ile bitmeli` : n.format === "includes" ? `Geçersiz metin: "${n.includes}" içermeli` : n.format === "regex" ? `Geçersiz metin: ${n.pattern} desenine uymalı` : `Geçersiz ${o[n.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${r.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${r.keys.length > 1 ? "lar" : ""}: ${p(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${r.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function qd() {
  return {
    localeError: Xd()
  };
}
const Yd = () => {
  const e = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "масив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${n.expected}, отримано ${o(n.input)}`;
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${_(n.values[0])}` : `Неправильна опція: очікується одне з ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Занадто велике: очікується, що ${n.origin ?? "значення"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "елементів"}` : `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Занадто мале: очікується, що ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Занадто мале: очікується, що ${n.origin} буде ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${i.prefix}"` : i.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${i.suffix}"` : i.format === "includes" ? `Неправильний рядок: повинен містити "${i.includes}"` : i.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${i.pattern}` : `Неправильний ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${n.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${n.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${n.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function $u() {
  return {
    localeError: Yd()
  };
}
function Hd() {
  return $u();
}
const Qd = () => {
  const e = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "نمبر";
      case "object": {
        if (Array.isArray(n))
          return "آرے";
        if (n === null)
          return "نل";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${n.expected} متوقع تھا، ${o(n.input)} موصول ہوا`;
      case "invalid_value":
        return n.values.length === 1 ? `غلط ان پٹ: ${_(n.values[0])} متوقع تھا` : `غلط آپشن: ${p(n.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${i}${n.maximum.toString()} ${a.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${i}${n.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `بہت چھوٹا: ${n.origin} کے ${i}${n.minimum.toString()} ${a.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${n.origin} کا ${i}${n.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے` : i.format === "ends_with" ? `غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے` : i.format === "includes" ? `غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے` : i.format === "regex" ? `غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے` : `غلط ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${p(n.keys, "، ")}`;
      case "invalid_key":
        return `${n.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${n.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function em() {
  return {
    localeError: Qd()
  };
}
const nm = () => {
  const e = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "số";
      case "object": {
        if (Array.isArray(n))
          return "mảng";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${n.expected}, nhận được ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${_(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${a.verb} ${i}${n.maximum.toString()} ${a.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Quá nhỏ: mong đợi ${n.origin} ${a.verb} ${i}${n.minimum.toString()} ${a.unit}` : `Quá nhỏ: mong đợi ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"` : i.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"` : i.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${i.includes}"` : i.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}` : `${r[i.format] ?? n.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${n.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${n.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function tm() {
  return {
    localeError: nm()
  };
}
const rm = () => {
  const e = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "非数字(NaN)" : "数字";
      case "object": {
        if (Array.isArray(n))
          return "数组";
        if (n === null)
          return "空值(null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `无效输入：期望 ${n.expected}，实际接收 ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `无效输入：期望 ${_(n.values[0])}` : `无效选项：期望以下之一 ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `数值过大：期望 ${n.origin ?? "值"} ${i}${n.maximum.toString()} ${a.unit ?? "个元素"}` : `数值过大：期望 ${n.origin ?? "值"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `数值过小：期望 ${n.origin} ${i}${n.minimum.toString()} ${a.unit}` : `数值过小：期望 ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `无效字符串：必须以 "${i.prefix}" 开头` : i.format === "ends_with" ? `无效字符串：必须以 "${i.suffix}" 结尾` : i.format === "includes" ? `无效字符串：必须包含 "${i.includes}"` : i.format === "regex" ? `无效字符串：必须满足正则表达式 ${i.pattern}` : `无效${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${n.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${n.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function im() {
  return {
    localeError: rm()
  };
}
const om = () => {
  const e = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${n.expected}，但收到 ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `無效的輸入值：預期為 ${_(n.values[0])}` : `無效的選項：預期為以下其中之一 ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `數值過大：預期 ${n.origin ?? "值"} 應為 ${i}${n.maximum.toString()} ${a.unit ?? "個元素"}` : `數值過大：預期 ${n.origin ?? "值"} 應為 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `數值過小：預期 ${n.origin} 應為 ${i}${n.minimum.toString()} ${a.unit}` : `數值過小：預期 ${n.origin} 應為 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `無效的字串：必須以 "${i.prefix}" 開頭` : i.format === "ends_with" ? `無效的字串：必須以 "${i.suffix}" 結尾` : i.format === "includes" ? `無效的字串：必須包含 "${i.includes}"` : i.format === "regex" ? `無效的字串：必須符合格式 ${i.pattern}` : `無效的 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${n.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${p(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${n.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function am() {
  return {
    localeError: om()
  };
}
const um = () => {
  const e = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const o = (n) => {
    const i = typeof n;
    switch (i) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nọ́mbà";
      case "object": {
        if (Array.isArray(n))
          return "akopọ";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return i;
  }, r = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${n.expected}, àmọ̀ a rí ${o(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${_(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${p(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? "iye"} ${a.verb} ${i}${n.maximum} ${a.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${i}${n.maximum}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${a.verb} ${i}${n.minimum} ${a.unit}` : `Kéré ju: a ní láti jẹ́ ${i}${n.minimum}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"` : i.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"` : i.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"` : i.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}` : `Aṣìṣe: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${p(n.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${n.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${n.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function cm() {
  return {
    localeError: um()
  };
}
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ks,
  az: ws,
  be: Ss,
  bg: Os,
  ca: Ns,
  cs: Ps,
  da: Ts,
  de: As,
  en: vu,
  eo: Js,
  es: Gs,
  fa: Ks,
  fi: Bs,
  fr: qs,
  frCA: Hs,
  he: ed,
  hu: td,
  id,
  is: ud,
  it: ld,
  ja: dd,
  ka: gd,
  kh: vd,
  km: hu,
  ko: $d,
  lt: yd,
  mk: Id,
  ms: zd,
  nl: jd,
  no: Od,
  ota: Nd,
  pl: Td,
  ps: Pd,
  pt: Ad,
  ru: Cd,
  sl: Fd,
  sv: Md,
  ta: Vd,
  th: Wd,
  tr: qd,
  ua: Hd,
  uk: $u,
  ur: em,
  vi: tm,
  yo: cm,
  zhCN: im,
  zhTW: am
}, Symbol.toStringTag, { value: "Module" }));
var Di;
const Jt = Symbol("ZodOutput"), Mt = Symbol("ZodInput");
class Gt {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...o) {
    const r = o[0];
    if (this._map.set(t, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const o = this._map.get(t);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(t), this;
  }
  get(t) {
    const o = t._zod.parent;
    if (o) {
      const r = { ...this.get(o) ?? {} };
      delete r.id;
      const n = { ...r, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function dn() {
  return new Gt();
}
(Di = globalThis).__zod_globalRegistry ?? (Di.__zod_globalRegistry = dn());
const A = globalThis.__zod_globalRegistry;
function bu(e, t) {
  return new e({
    type: "string",
    ...g(t)
  });
}
function _u(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...g(t)
  });
}
function Vt(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function He(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function Kt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function Wt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...g(t)
  });
}
function Bt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...g(t)
  });
}
function Xt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...g(t)
  });
}
function mn(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function qt(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function Yt(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function Ht(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function Qt(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function er(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function nr(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function tr(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function rr(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function ir(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function yu(e, t) {
  return new e({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function or(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function ar(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function ur(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function cr(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function lr(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
function sr(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
const dr = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function ku(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...g(t)
  });
}
function Iu(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...g(t)
  });
}
function wu(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...g(t)
  });
}
function zu(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...g(t)
  });
}
function Su(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...g(t)
  });
}
function ju(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...g(t)
  });
}
function xu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...g(t)
  });
}
function Ou(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...g(t)
  });
}
function Uu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...g(t)
  });
}
function Nu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...g(t)
  });
}
function Du(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...g(t)
  });
}
function Pu(e, t) {
  return new e({
    type: "boolean",
    ...g(t)
  });
}
function Zu(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...g(t)
  });
}
function Tu(e, t) {
  return new e({
    type: "bigint",
    ...g(t)
  });
}
function Eu(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...g(t)
  });
}
function Au(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...g(t)
  });
}
function Lu(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...g(t)
  });
}
function Cu(e, t) {
  return new e({
    type: "symbol",
    ...g(t)
  });
}
function Ru(e, t) {
  return new e({
    type: "undefined",
    ...g(t)
  });
}
function Fu(e, t) {
  return new e({
    type: "null",
    ...g(t)
  });
}
function Ju(e) {
  return new e({
    type: "any"
  });
}
function Mu(e) {
  return new e({
    type: "unknown"
  });
}
function Gu(e, t) {
  return new e({
    type: "never",
    ...g(t)
  });
}
function Vu(e, t) {
  return new e({
    type: "void",
    ...g(t)
  });
}
function Ku(e, t) {
  return new e({
    type: "date",
    ...g(t)
  });
}
function Wu(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...g(t)
  });
}
function Bu(e, t) {
  return new e({
    type: "nan",
    ...g(t)
  });
}
function X(e, t) {
  return new Dt({
    check: "less_than",
    ...g(t),
    value: e,
    inclusive: !1
  });
}
function L(e, t) {
  return new Dt({
    check: "less_than",
    ...g(t),
    value: e,
    inclusive: !0
  });
}
function q(e, t) {
  return new Pt({
    check: "greater_than",
    ...g(t),
    value: e,
    inclusive: !1
  });
}
function P(e, t) {
  return new Pt({
    check: "greater_than",
    ...g(t),
    value: e,
    inclusive: !0
  });
}
function mr(e) {
  return q(0, e);
}
function fr(e) {
  return X(0, e);
}
function gr(e) {
  return L(0, e);
}
function pr(e) {
  return P(0, e);
}
function se(e, t) {
  return new Lo({
    check: "multiple_of",
    ...g(t),
    value: e
  });
}
function Ne(e, t) {
  return new Fo({
    check: "max_size",
    ...g(t),
    maximum: e
  });
}
function de(e, t) {
  return new Jo({
    check: "min_size",
    ...g(t),
    minimum: e
  });
}
function fn(e, t) {
  return new Mo({
    check: "size_equals",
    ...g(t),
    size: e
  });
}
function De(e, t) {
  return new Go({
    check: "max_length",
    ...g(t),
    maximum: e
  });
}
function te(e, t) {
  return new Vo({
    check: "min_length",
    ...g(t),
    minimum: e
  });
}
function Pe(e, t) {
  return new Ko({
    check: "length_equals",
    ...g(t),
    length: e
  });
}
function gn(e, t) {
  return new Wo({
    check: "string_format",
    format: "regex",
    ...g(t),
    pattern: e
  });
}
function pn(e) {
  return new Bo({
    check: "string_format",
    format: "lowercase",
    ...g(e)
  });
}
function vn(e) {
  return new Xo({
    check: "string_format",
    format: "uppercase",
    ...g(e)
  });
}
function hn(e, t) {
  return new qo({
    check: "string_format",
    format: "includes",
    ...g(t),
    includes: e
  });
}
function $n(e, t) {
  return new Yo({
    check: "string_format",
    format: "starts_with",
    ...g(t),
    prefix: e
  });
}
function bn(e, t) {
  return new Ho({
    check: "string_format",
    format: "ends_with",
    ...g(t),
    suffix: e
  });
}
function vr(e, t, o) {
  return new Qo({
    check: "property",
    property: e,
    schema: t,
    ...g(o)
  });
}
function _n(e, t) {
  return new ea({
    check: "mime_type",
    mime: e,
    ...g(t)
  });
}
function B(e) {
  return new na({
    check: "overwrite",
    tx: e
  });
}
function yn(e) {
  return B((t) => t.normalize(e));
}
function kn() {
  return B((e) => e.trim());
}
function In() {
  return B((e) => e.toLowerCase());
}
function wn() {
  return B((e) => e.toUpperCase());
}
function zn() {
  return B((e) => Ei(e));
}
function Xu(e, t, o) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...g(o)
  });
}
function lm(e, t, o) {
  return new e({
    type: "union",
    options: t,
    ...g(o)
  });
}
function sm(e, t, o, r) {
  return new e({
    type: "union",
    options: o,
    discriminator: t,
    ...g(r)
  });
}
function dm(e, t, o) {
  return new e({
    type: "intersection",
    left: t,
    right: o
  });
}
function mm(e, t, o, r) {
  const n = o instanceof y, i = n ? r : o, a = n ? o : null;
  return new e({
    type: "tuple",
    items: t,
    rest: a,
    ...g(i)
  });
}
function fm(e, t, o, r) {
  return new e({
    type: "record",
    keyType: t,
    valueType: o,
    ...g(r)
  });
}
function gm(e, t, o, r) {
  return new e({
    type: "map",
    keyType: t,
    valueType: o,
    ...g(r)
  });
}
function pm(e, t, o) {
  return new e({
    type: "set",
    valueType: t,
    ...g(o)
  });
}
function vm(e, t, o) {
  const r = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: r,
    ...g(o)
  });
}
function hm(e, t, o) {
  return new e({
    type: "enum",
    entries: t,
    ...g(o)
  });
}
function $m(e, t, o) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...g(o)
  });
}
function qu(e, t) {
  return new e({
    type: "file",
    ...g(t)
  });
}
function bm(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function _m(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function ym(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function km(e, t, o) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof o == "function" ? o() : on(o);
    }
  });
}
function Im(e, t, o) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...g(o)
  });
}
function wm(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function zm(e, t, o) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof o == "function" ? o : () => o
  });
}
function Sm(e, t, o) {
  return new e({
    type: "pipe",
    in: t,
    out: o
  });
}
function jm(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function xm(e, t, o) {
  return new e({
    type: "template_literal",
    parts: t,
    ...g(o)
  });
}
function Om(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function Um(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function Yu(e, t, o) {
  const r = g(o);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r
  });
}
function Hu(e, t, o) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...g(o)
  });
}
function Qu(e) {
  const t = ec((o) => (o.addIssue = (r) => {
    if (typeof r == "string")
      o.issues.push(ce(r, o.value, t._zod.def));
    else {
      const n = r;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = o.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), o.issues.push(ce(n));
    }
  }, e(o.value, o)));
  return t;
}
function ec(e, t) {
  const o = new U({
    check: "custom",
    ...g(t)
  });
  return o._zod.check = e, o;
}
function nc(e) {
  const t = new U({ check: "describe" });
  return t._zod.onattach = [
    (o) => {
      const r = A.get(o) ?? {};
      A.add(o, { ...r, description: e });
    }
  ], t._zod.check = () => {
  }, t;
}
function tc(e) {
  const t = new U({ check: "meta" });
  return t._zod.onattach = [
    (o) => {
      const r = A.get(o) ?? {};
      A.add(o, { ...r, ...e });
    }
  ], t._zod.check = () => {
  }, t;
}
function rc(e, t) {
  const o = g(t);
  let r = o.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = o.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  o.case !== "sensitive" && (r = r.map((v) => typeof v == "string" ? v.toLowerCase() : v), n = n.map((v) => typeof v == "string" ? v.toLowerCase() : v));
  const i = new Set(r), a = new Set(n), u = e.Codec ?? Rt, d = e.Boolean ?? Et, c = e.String ?? Ue, s = new c({ type: "string", error: o.error }), f = new d({ type: "boolean", error: o.error }), h = new u({
    type: "pipe",
    in: s,
    out: f,
    transform: ((v, m) => {
      let $ = v;
      return o.case !== "sensitive" && ($ = $.toLowerCase()), i.has($) ? !0 : a.has($) ? !1 : (m.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...i, ...a],
        input: m.value,
        inst: h,
        continue: !1
      }), {});
    }),
    reverseTransform: ((v, m) => v === !0 ? r[0] || "true" : n[0] || "false"),
    error: o.error
  });
  return h;
}
function Ze(e, t, o, r = {}) {
  const n = g(r), i = {
    ...g(r),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof o == "function" ? o : (u) => o.test(u),
    ...n
  };
  return o instanceof RegExp && (i.pattern = o), new e(i);
}
class mt {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = t?.metadata ?? A, this.target = t?.target ?? "draft-2020-12", this.unrepresentable = t?.unrepresentable ?? "throw", this.override = t?.override ?? (() => {
    }), this.io = t?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, o = { path: [], schemaPath: [] }) {
    var r;
    const n = t._zod.def, i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, a = this.seen.get(t);
    if (a)
      return a.count++, o.schemaPath.includes(t) && (a.cycle = o.path), a.schema;
    const u = { schema: {}, count: 1, cycle: void 0, path: o.path };
    this.seen.set(t, u);
    const d = t._zod.toJSONSchema?.();
    if (d)
      u.schema = d;
    else {
      const f = {
        ...o,
        schemaPath: [...o.schemaPath, t],
        path: o.path
      }, h = t._zod.parent;
      if (h)
        u.ref = h, this.process(h, f), this.seen.get(h).isParent = !0;
      else {
        const v = u.schema;
        switch (n.type) {
          case "string": {
            const m = v;
            m.type = "string";
            const { minimum: $, maximum: b, format: z, patterns: w, contentEncoding: S } = t._zod.bag;
            if (typeof $ == "number" && (m.minLength = $), typeof b == "number" && (m.maxLength = b), z && (m.format = i[z] ?? z, m.format === "" && delete m.format), S && (m.contentEncoding = S), w && w.size > 0) {
              const O = [...w];
              O.length === 1 ? m.pattern = O[0].source : O.length > 1 && (u.schema.allOf = [
                ...O.map((G) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: G.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const m = v, { minimum: $, maximum: b, format: z, multipleOf: w, exclusiveMaximum: S, exclusiveMinimum: O } = t._zod.bag;
            typeof z == "string" && z.includes("int") ? m.type = "integer" : m.type = "number", typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (m.minimum = O, m.exclusiveMinimum = !0) : m.exclusiveMinimum = O), typeof $ == "number" && (m.minimum = $, typeof O == "number" && this.target !== "draft-4" && (O >= $ ? delete m.minimum : delete m.exclusiveMinimum)), typeof S == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (m.maximum = S, m.exclusiveMaximum = !0) : m.exclusiveMaximum = S), typeof b == "number" && (m.maximum = b, typeof S == "number" && this.target !== "draft-4" && (S <= b ? delete m.maximum : delete m.exclusiveMaximum)), typeof w == "number" && (m.multipleOf = w);
            break;
          }
          case "boolean": {
            const m = v;
            m.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const m = v, { minimum: $, maximum: b } = t._zod.bag;
            typeof $ == "number" && (m.minItems = $), typeof b == "number" && (m.maxItems = b), m.type = "array", m.items = this.process(n.element, { ...f, path: [...f.path, "items"] });
            break;
          }
          case "object": {
            const m = v;
            m.type = "object", m.properties = {};
            const $ = n.shape;
            for (const w in $)
              m.properties[w] = this.process($[w], {
                ...f,
                path: [...f.path, "properties", w]
              });
            const b = new Set(Object.keys($)), z = new Set([...b].filter((w) => {
              const S = n.shape[w]._zod;
              return this.io === "input" ? S.optin === void 0 : S.optout === void 0;
            }));
            z.size > 0 && (m.required = Array.from(z)), n.catchall?._zod.def.type === "never" ? m.additionalProperties = !1 : n.catchall ? n.catchall && (m.additionalProperties = this.process(n.catchall, {
              ...f,
              path: [...f.path, "additionalProperties"]
            })) : this.io === "output" && (m.additionalProperties = !1);
            break;
          }
          case "union": {
            const m = v, $ = n.discriminator !== void 0, b = n.options.map((z, w) => this.process(z, {
              ...f,
              path: [...f.path, $ ? "oneOf" : "anyOf", w]
            }));
            $ ? m.oneOf = b : m.anyOf = b;
            break;
          }
          case "intersection": {
            const m = v, $ = this.process(n.left, {
              ...f,
              path: [...f.path, "allOf", 0]
            }), b = this.process(n.right, {
              ...f,
              path: [...f.path, "allOf", 1]
            }), z = (S) => "allOf" in S && Object.keys(S).length === 1, w = [
              ...z($) ? $.allOf : [$],
              ...z(b) ? b.allOf : [b]
            ];
            m.allOf = w;
            break;
          }
          case "tuple": {
            const m = v;
            m.type = "array";
            const $ = this.target === "draft-2020-12" ? "prefixItems" : "items", b = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", z = n.items.map((G, Il) => this.process(G, {
              ...f,
              path: [...f.path, $, Il]
            })), w = n.rest ? this.process(n.rest, {
              ...f,
              path: [...f.path, b, ...this.target === "openapi-3.0" ? [n.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (m.prefixItems = z, w && (m.items = w)) : this.target === "openapi-3.0" ? (m.items = {
              anyOf: z
            }, w && m.items.anyOf.push(w), m.minItems = z.length, w || (m.maxItems = z.length)) : (m.items = z, w && (m.additionalItems = w));
            const { minimum: S, maximum: O } = t._zod.bag;
            typeof S == "number" && (m.minItems = S), typeof O == "number" && (m.maxItems = O);
            break;
          }
          case "record": {
            const m = v;
            m.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (m.propertyNames = this.process(n.keyType, {
              ...f,
              path: [...f.path, "propertyNames"]
            })), m.additionalProperties = this.process(n.valueType, {
              ...f,
              path: [...f.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const m = v, $ = ht(n.entries);
            $.every((b) => typeof b == "number") && (m.type = "number"), $.every((b) => typeof b == "string") && (m.type = "string"), m.enum = $;
            break;
          }
          case "literal": {
            const m = v, $ = [];
            for (const b of n.values)
              if (b === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof b == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                $.push(Number(b));
              } else
                $.push(b);
            if ($.length !== 0) if ($.length === 1) {
              const b = $[0];
              m.type = b === null ? "null" : typeof b, this.target === "draft-4" || this.target === "openapi-3.0" ? m.enum = [b] : m.const = b;
            } else
              $.every((b) => typeof b == "number") && (m.type = "number"), $.every((b) => typeof b == "string") && (m.type = "string"), $.every((b) => typeof b == "boolean") && (m.type = "string"), $.every((b) => b === null) && (m.type = "null"), m.enum = $;
            break;
          }
          case "file": {
            const m = v, $ = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: b, maximum: z, mime: w } = t._zod.bag;
            b !== void 0 && ($.minLength = b), z !== void 0 && ($.maxLength = z), w ? w.length === 1 ? ($.contentMediaType = w[0], Object.assign(m, $)) : m.anyOf = w.map((S) => ({ ...$, contentMediaType: S })) : Object.assign(m, $);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const m = this.process(n.innerType, f);
            this.target === "openapi-3.0" ? (u.ref = n.innerType, v.nullable = !0) : v.anyOf = [m, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, f), u.ref = n.innerType;
            break;
          }
          case "success": {
            const m = v;
            m.type = "boolean";
            break;
          }
          case "default": {
            this.process(n.innerType, f), u.ref = n.innerType, v.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          }
          case "prefault": {
            this.process(n.innerType, f), u.ref = n.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
            break;
          }
          case "catch": {
            this.process(n.innerType, f), u.ref = n.innerType;
            let m;
            try {
              m = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = m;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const m = v, $ = t._zod.pattern;
            if (!$)
              throw new Error("Pattern not found in template literal");
            m.type = "string", m.pattern = $.source;
            break;
          }
          case "pipe": {
            const m = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(m, f), u.ref = m;
            break;
          }
          case "readonly": {
            this.process(n.innerType, f), u.ref = n.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(n.innerType, f), u.ref = n.innerType;
            break;
          }
          case "optional": {
            this.process(n.innerType, f), u.ref = n.innerType;
            break;
          }
          case "lazy": {
            const m = t._zod.innerType;
            this.process(m, f), u.ref = m;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const c = this.metadataRegistry.get(t);
    return c && Object.assign(u.schema, c), this.io === "input" && D(t) && (delete u.schema.examples, delete u.schema.default), this.io === "input" && u.schema._prefault && ((r = u.schema).default ?? (r.default = u.schema._prefault)), delete u.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, o) {
    const r = {
      cycles: o?.cycles ?? "ref",
      reused: o?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: o?.external ?? void 0
    }, n = this.seen.get(t);
    if (!n)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (s) => {
      const f = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        const $ = r.external.registry.get(s[0])?.id, b = r.external.uri ?? ((w) => w);
        if ($)
          return { ref: b($) };
        const z = s[1].defId ?? s[1].schema.id ?? `schema${this.counter++}`;
        return s[1].defId = z, { defId: z, ref: `${b("__shared")}#/${f}/${z}` };
      }
      if (s[1] === n)
        return { ref: "#" };
      const v = `#/${f}/`, m = s[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: m, ref: v + m };
    }, a = (s) => {
      if (s[1].schema.$ref)
        return;
      const f = s[1], { ref: h, defId: v } = i(s);
      f.def = { ...f.schema }, v && (f.defId = v);
      const m = f.schema;
      for (const $ in m)
        delete m[$];
      m.$ref = h;
    };
    if (r.cycles === "throw")
      for (const s of this.seen.entries()) {
        const f = s[1];
        if (f.cycle)
          throw new Error(`Cycle detected: #/${f.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const s of this.seen.entries()) {
      const f = s[1];
      if (t === s[0]) {
        a(s);
        continue;
      }
      if (r.external) {
        const v = r.external.registry.get(s[0])?.id;
        if (t !== s[0] && v) {
          a(s);
          continue;
        }
      }
      if (this.metadataRegistry.get(s[0])?.id) {
        a(s);
        continue;
      }
      if (f.cycle) {
        a(s);
        continue;
      }
      if (f.count > 1 && r.reused === "ref") {
        a(s);
        continue;
      }
    }
    const u = (s, f) => {
      const h = this.seen.get(s), v = h.def ?? h.schema, m = { ...v };
      if (h.ref === null)
        return;
      const $ = h.ref;
      if (h.ref = null, $) {
        u($, f);
        const b = this.seen.get($).schema;
        b.$ref && (f.target === "draft-7" || f.target === "draft-4" || f.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(b)) : (Object.assign(v, b), Object.assign(v, m));
      }
      h.isParent || this.override({
        zodSchema: s,
        jsonSchema: v,
        path: h.path ?? []
      });
    };
    for (const s of [...this.seen.entries()].reverse())
      u(s[0], { target: this.target });
    const d = {};
    if (this.target === "draft-2020-12" ? d.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? d.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? d.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), r.external?.uri) {
      const s = r.external.registry.get(t)?.id;
      if (!s)
        throw new Error("Schema is missing an `id` property");
      d.$id = r.external.uri(s);
    }
    Object.assign(d, n.def);
    const c = r.external?.defs ?? {};
    for (const s of this.seen.entries()) {
      const f = s[1];
      f.def && f.defId && (c[f.defId] = f.def);
    }
    r.external || Object.keys(c).length > 0 && (this.target === "draft-2020-12" ? d.$defs = c : d.definitions = c);
    try {
      return JSON.parse(JSON.stringify(d));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function hr(e, t) {
  if (e instanceof Gt) {
    const r = new mt(t), n = {};
    for (const u of e._idmap.entries()) {
      const [d, c] = u;
      r.process(c);
    }
    const i = {}, a = {
      registry: e,
      uri: t?.uri,
      defs: n
    };
    for (const u of e._idmap.entries()) {
      const [d, c] = u;
      i[d] = r.emit(c, {
        ...t,
        external: a
      });
    }
    if (Object.keys(n).length > 0) {
      const u = r.target === "draft-2020-12" ? "$defs" : "definitions";
      i.__shared = {
        [u]: n
      };
    }
    return { schemas: i };
  }
  const o = new mt(t);
  return o.process(e), o.emit(e, t);
}
function D(e, t) {
  const o = t ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(e))
    return !1;
  o.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return D(r.element, o);
  if (r.type === "set")
    return D(r.valueType, o);
  if (r.type === "lazy")
    return D(r.getter(), o);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return D(r.innerType, o);
  if (r.type === "intersection")
    return D(r.left, o) || D(r.right, o);
  if (r.type === "record" || r.type === "map")
    return D(r.keyType, o) || D(r.valueType, o);
  if (r.type === "pipe")
    return D(r.in, o) || D(r.out, o);
  if (r.type === "object") {
    for (const n in r.shape)
      if (D(r.shape[n], o))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const n of r.options)
      if (D(n, o))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const n of r.items)
      if (D(n, o))
        return !0;
    return !!(r.rest && D(r.rest, o));
  }
  return !1;
}
const Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: Ea,
  $ZodArray: Fa,
  $ZodAsyncError: ee,
  $ZodBase64: wa,
  $ZodBase64URL: Sa,
  $ZodBigInt: At,
  $ZodBigIntFormat: Da,
  $ZodBoolean: Et,
  $ZodCIDRv4: ka,
  $ZodCIDRv6: Ia,
  $ZodCUID: sa,
  $ZodCUID2: da,
  $ZodCatch: uu,
  $ZodCheck: U,
  $ZodCheckBigIntFormat: Ro,
  $ZodCheckEndsWith: Ho,
  $ZodCheckGreaterThan: Pt,
  $ZodCheckIncludes: qo,
  $ZodCheckLengthEquals: Ko,
  $ZodCheckLessThan: Dt,
  $ZodCheckLowerCase: Bo,
  $ZodCheckMaxLength: Go,
  $ZodCheckMaxSize: Fo,
  $ZodCheckMimeType: ea,
  $ZodCheckMinLength: Vo,
  $ZodCheckMinSize: Jo,
  $ZodCheckMultipleOf: Lo,
  $ZodCheckNumberFormat: Co,
  $ZodCheckOverwrite: na,
  $ZodCheckProperty: Qo,
  $ZodCheckRegex: Wo,
  $ZodCheckSizeEquals: Mo,
  $ZodCheckStartsWith: Yo,
  $ZodCheckStringFormat: Oe,
  $ZodCheckUpperCase: Xo,
  $ZodCodec: Rt,
  $ZodCustom: pu,
  $ZodCustomStringFormat: Ua,
  $ZodDate: Ra,
  $ZodDefault: ru,
  $ZodDiscriminatedUnion: Ka,
  $ZodE164: ja,
  $ZodEmail: aa,
  $ZodEmoji: ca,
  $ZodEncodeError: tn,
  $ZodEnum: Ya,
  $ZodError: _t,
  $ZodFile: Qa,
  $ZodFunction: mu,
  $ZodGUID: ia,
  $ZodIPv4: ba,
  $ZodIPv6: _a,
  $ZodISODate: va,
  $ZodISODateTime: pa,
  $ZodISODuration: $a,
  $ZodISOTime: ha,
  $ZodIntersection: Wa,
  $ZodJWT: Oa,
  $ZodKSUID: ga,
  $ZodLazy: gu,
  $ZodLiteral: Ha,
  $ZodMAC: ya,
  $ZodMap: Xa,
  $ZodNaN: cu,
  $ZodNanoID: la,
  $ZodNever: La,
  $ZodNonOptional: ou,
  $ZodNull: Ta,
  $ZodNullable: tu,
  $ZodNumber: Tt,
  $ZodNumberFormat: Na,
  $ZodObject: Ga,
  $ZodObjectJIT: Va,
  $ZodOptional: nu,
  $ZodPipe: lu,
  $ZodPrefault: iu,
  $ZodPromise: fu,
  $ZodReadonly: su,
  $ZodRealError: E,
  $ZodRecord: Ba,
  $ZodRegistry: Gt,
  $ZodSet: qa,
  $ZodString: Ue,
  $ZodStringFormat: j,
  $ZodSuccess: au,
  $ZodSymbol: Pa,
  $ZodTemplateLiteral: du,
  $ZodTransform: eu,
  $ZodTuple: Ct,
  $ZodType: y,
  $ZodULID: ma,
  $ZodURL: ua,
  $ZodUUID: oa,
  $ZodUndefined: Za,
  $ZodUnion: Lt,
  $ZodUnknown: Aa,
  $ZodVoid: Ca,
  $ZodXID: fa,
  $brand: vt,
  $constructor: l,
  $input: Mt,
  $output: Jt,
  Doc: ta,
  JSONSchema: Nm,
  JSONSchemaGenerator: mt,
  NEVER: pt,
  TimePrecision: dr,
  _any: Ju,
  _array: Xu,
  _base64: ur,
  _base64url: cr,
  _bigint: Tu,
  _boolean: Pu,
  _catch: zm,
  _check: ec,
  _cidrv4: or,
  _cidrv6: ar,
  _coercedBigint: Eu,
  _coercedBoolean: Zu,
  _coercedDate: Wu,
  _coercedNumber: ju,
  _coercedString: _u,
  _cuid: Ht,
  _cuid2: Qt,
  _custom: Yu,
  _date: Ku,
  _decode: wt,
  _decodeAsync: St,
  _default: km,
  _discriminatedUnion: sm,
  _e164: lr,
  _email: Vt,
  _emoji: qt,
  _encode: It,
  _encodeAsync: zt,
  _endsWith: bn,
  _enum: vm,
  _file: qu,
  _float32: Ou,
  _float64: Uu,
  _gt: q,
  _gte: P,
  _guid: He,
  _includes: hn,
  _int: xu,
  _int32: Nu,
  _int64: Au,
  _intersection: dm,
  _ipv4: rr,
  _ipv6: ir,
  _isoDate: Iu,
  _isoDateTime: ku,
  _isoDuration: zu,
  _isoTime: wu,
  _jwt: sr,
  _ksuid: tr,
  _lazy: Om,
  _length: Pe,
  _literal: $m,
  _lowercase: pn,
  _lt: X,
  _lte: L,
  _mac: yu,
  _map: gm,
  _max: L,
  _maxLength: De,
  _maxSize: Ne,
  _mime: _n,
  _min: P,
  _minLength: te,
  _minSize: de,
  _multipleOf: se,
  _nan: Bu,
  _nanoid: Yt,
  _nativeEnum: hm,
  _negative: fr,
  _never: Gu,
  _nonnegative: pr,
  _nonoptional: Im,
  _nonpositive: gr,
  _normalize: yn,
  _null: Fu,
  _nullable: ym,
  _number: Su,
  _optional: _m,
  _overwrite: B,
  _parse: Ie,
  _parseAsync: we,
  _pipe: Sm,
  _positive: mr,
  _promise: Um,
  _property: vr,
  _readonly: jm,
  _record: fm,
  _refine: Hu,
  _regex: gn,
  _safeDecode: xt,
  _safeDecodeAsync: Ut,
  _safeEncode: jt,
  _safeEncodeAsync: Ot,
  _safeParse: ze,
  _safeParseAsync: Se,
  _set: pm,
  _size: fn,
  _slugify: zn,
  _startsWith: $n,
  _string: bu,
  _stringFormat: Ze,
  _stringbool: rc,
  _success: wm,
  _superRefine: Qu,
  _symbol: Cu,
  _templateLiteral: xm,
  _toLowerCase: In,
  _toUpperCase: wn,
  _transform: bm,
  _trim: kn,
  _tuple: mm,
  _uint32: Du,
  _uint64: Lu,
  _ulid: er,
  _undefined: Ru,
  _union: lm,
  _unknown: Mu,
  _uppercase: vn,
  _url: mn,
  _uuid: Kt,
  _uuidv4: Wt,
  _uuidv6: Bt,
  _uuidv7: Xt,
  _void: Vu,
  _xid: nr,
  clone: T,
  config: N,
  decode: Gl,
  decodeAsync: Kl,
  describe: nc,
  encode: Ml,
  encodeAsync: Vl,
  flattenError: cn,
  formatError: ln,
  globalConfig: Be,
  globalRegistry: A,
  isValidBase64: Zt,
  isValidBase64URL: za,
  isValidJWT: xa,
  locales: Ft,
  meta: tc,
  parse: lt,
  parseAsync: st,
  prettifyError: kt,
  regexes: sn,
  registry: dn,
  safeDecode: Bl,
  safeDecodeAsync: ql,
  safeEncode: Wl,
  safeEncodeAsync: Xl,
  safeParse: Qi,
  safeParseAsync: eo,
  toDotPath: Hi,
  toJSONSchema: hr,
  treeifyError: yt,
  util: bt,
  version: ra
}, Symbol.toStringTag, { value: "Module" })), Sn = /* @__PURE__ */ l("ZodISODateTime", (e, t) => {
  pa.init(e, t), x.init(e, t);
});
function oc(e) {
  return ku(Sn, e);
}
const jn = /* @__PURE__ */ l("ZodISODate", (e, t) => {
  va.init(e, t), x.init(e, t);
});
function ac(e) {
  return Iu(jn, e);
}
const xn = /* @__PURE__ */ l("ZodISOTime", (e, t) => {
  ha.init(e, t), x.init(e, t);
});
function uc(e) {
  return wu(xn, e);
}
const On = /* @__PURE__ */ l("ZodISODuration", (e, t) => {
  $a.init(e, t), x.init(e, t);
});
function cc(e) {
  return zu(On, e);
}
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: jn,
  ZodISODateTime: Sn,
  ZodISODuration: On,
  ZodISOTime: xn,
  date: ac,
  datetime: oc,
  duration: cc,
  time: uc
}, Symbol.toStringTag, { value: "Module" })), sc = (e, t) => {
  _t.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (o) => ln(e, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => cn(e, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        e.issues.push(o), e.message = JSON.stringify(e.issues, Xe, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        e.issues.push(...o), e.message = JSON.stringify(e.issues, Xe, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, dc = l("ZodError", sc), Z = l("ZodError", sc, {
  Parent: Error
}), $r = /* @__PURE__ */ Ie(Z), br = /* @__PURE__ */ we(Z), _r = /* @__PURE__ */ ze(Z), yr = /* @__PURE__ */ Se(Z), kr = /* @__PURE__ */ It(Z), Ir = /* @__PURE__ */ wt(Z), wr = /* @__PURE__ */ zt(Z), zr = /* @__PURE__ */ St(Z), Sr = /* @__PURE__ */ jt(Z), jr = /* @__PURE__ */ xt(Z), xr = /* @__PURE__ */ Ot(Z), Or = /* @__PURE__ */ Ut(Z), k = /* @__PURE__ */ l("ZodType", (e, t) => (y.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...o) => e.clone(W(t, {
  checks: [
    ...t.checks ?? [],
    ...o.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (o, r) => T(e, o, r), e.brand = () => e, e.register = ((o, r) => (o.add(e, r), e)), e.parse = (o, r) => $r(e, o, r, { callee: e.parse }), e.safeParse = (o, r) => _r(e, o, r), e.parseAsync = async (o, r) => br(e, o, r, { callee: e.parseAsync }), e.safeParseAsync = async (o, r) => yr(e, o, r), e.spa = e.safeParseAsync, e.encode = (o, r) => kr(e, o, r), e.decode = (o, r) => Ir(e, o, r), e.encodeAsync = async (o, r) => wr(e, o, r), e.decodeAsync = async (o, r) => zr(e, o, r), e.safeEncode = (o, r) => Sr(e, o, r), e.safeDecode = (o, r) => jr(e, o, r), e.safeEncodeAsync = async (o, r) => xr(e, o, r), e.safeDecodeAsync = async (o, r) => Or(e, o, r), e.refine = (o, r) => e.check(pi(o, r)), e.superRefine = (o) => e.check(vi(o)), e.overwrite = (o) => e.check(B(o)), e.optional = () => be(e), e.nullable = () => _e(e), e.nullish = () => be(_e(e)), e.nonoptional = (o) => ri(e, o), e.array = () => re(e), e.or = (o) => Hn([e, o]), e.and = (o) => Gr(e, o), e.transform = (o) => ye(e, nt(o)), e.default = (o) => ei(e, o), e.prefault = (o) => ti(e, o), e.catch = (o) => ai(e, o), e.pipe = (o) => ye(e, o), e.readonly = () => li(e), e.describe = (o) => {
  const r = e.clone();
  return A.add(r, { description: o }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return A.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...o) => {
  if (o.length === 0)
    return A.get(e);
  const r = e.clone();
  return A.add(r, o[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Un = /* @__PURE__ */ l("_ZodString", (e, t) => {
  Ue.init(e, t), k.init(e, t);
  const o = e._zod.bag;
  e.format = o.format ?? null, e.minLength = o.minimum ?? null, e.maxLength = o.maximum ?? null, e.regex = (...r) => e.check(gn(...r)), e.includes = (...r) => e.check(hn(...r)), e.startsWith = (...r) => e.check($n(...r)), e.endsWith = (...r) => e.check(bn(...r)), e.min = (...r) => e.check(te(...r)), e.max = (...r) => e.check(De(...r)), e.length = (...r) => e.check(Pe(...r)), e.nonempty = (...r) => e.check(te(1, ...r)), e.lowercase = (r) => e.check(pn(r)), e.uppercase = (r) => e.check(vn(r)), e.trim = () => e.check(kn()), e.normalize = (...r) => e.check(yn(...r)), e.toLowerCase = () => e.check(In()), e.toUpperCase = () => e.check(wn()), e.slugify = () => e.check(zn());
}), Te = /* @__PURE__ */ l("ZodString", (e, t) => {
  Ue.init(e, t), Un.init(e, t), e.email = (o) => e.check(Vt(Nn, o)), e.url = (o) => e.check(mn(Ee, o)), e.jwt = (o) => e.check(sr(Kn, o)), e.emoji = (o) => e.check(qt(Dn, o)), e.guid = (o) => e.check(He($e, o)), e.uuid = (o) => e.check(Kt(M, o)), e.uuidv4 = (o) => e.check(Wt(M, o)), e.uuidv6 = (o) => e.check(Bt(M, o)), e.uuidv7 = (o) => e.check(Xt(M, o)), e.nanoid = (o) => e.check(Yt(Pn, o)), e.guid = (o) => e.check(He($e, o)), e.cuid = (o) => e.check(Ht(Zn, o)), e.cuid2 = (o) => e.check(Qt(Tn, o)), e.ulid = (o) => e.check(er(En, o)), e.base64 = (o) => e.check(ur(Mn, o)), e.base64url = (o) => e.check(cr(Gn, o)), e.xid = (o) => e.check(nr(An, o)), e.ksuid = (o) => e.check(tr(Ln, o)), e.ipv4 = (o) => e.check(rr(Cn, o)), e.ipv6 = (o) => e.check(ir(Rn, o)), e.cidrv4 = (o) => e.check(or(Fn, o)), e.cidrv6 = (o) => e.check(ar(Jn, o)), e.e164 = (o) => e.check(lr(Vn, o)), e.datetime = (o) => e.check(oc(o)), e.date = (o) => e.check(ac(o)), e.time = (o) => e.check(uc(o)), e.duration = (o) => e.check(cc(o));
});
function C(e) {
  return bu(Te, e);
}
const x = /* @__PURE__ */ l("ZodStringFormat", (e, t) => {
  j.init(e, t), Un.init(e, t);
}), Nn = /* @__PURE__ */ l("ZodEmail", (e, t) => {
  aa.init(e, t), x.init(e, t);
});
function mc(e) {
  return Vt(Nn, e);
}
const $e = /* @__PURE__ */ l("ZodGUID", (e, t) => {
  ia.init(e, t), x.init(e, t);
});
function fc(e) {
  return He($e, e);
}
const M = /* @__PURE__ */ l("ZodUUID", (e, t) => {
  oa.init(e, t), x.init(e, t);
});
function gc(e) {
  return Kt(M, e);
}
function pc(e) {
  return Wt(M, e);
}
function vc(e) {
  return Bt(M, e);
}
function hc(e) {
  return Xt(M, e);
}
const Ee = /* @__PURE__ */ l("ZodURL", (e, t) => {
  ua.init(e, t), x.init(e, t);
});
function $c(e) {
  return mn(Ee, e);
}
function bc(e) {
  return mn(Ee, {
    protocol: /^https?$/,
    hostname: _o,
    ...g(e)
  });
}
const Dn = /* @__PURE__ */ l("ZodEmoji", (e, t) => {
  ca.init(e, t), x.init(e, t);
});
function _c(e) {
  return qt(Dn, e);
}
const Pn = /* @__PURE__ */ l("ZodNanoID", (e, t) => {
  la.init(e, t), x.init(e, t);
});
function yc(e) {
  return Yt(Pn, e);
}
const Zn = /* @__PURE__ */ l("ZodCUID", (e, t) => {
  sa.init(e, t), x.init(e, t);
});
function kc(e) {
  return Ht(Zn, e);
}
const Tn = /* @__PURE__ */ l("ZodCUID2", (e, t) => {
  da.init(e, t), x.init(e, t);
});
function Ic(e) {
  return Qt(Tn, e);
}
const En = /* @__PURE__ */ l("ZodULID", (e, t) => {
  ma.init(e, t), x.init(e, t);
});
function wc(e) {
  return er(En, e);
}
const An = /* @__PURE__ */ l("ZodXID", (e, t) => {
  fa.init(e, t), x.init(e, t);
});
function zc(e) {
  return nr(An, e);
}
const Ln = /* @__PURE__ */ l("ZodKSUID", (e, t) => {
  ga.init(e, t), x.init(e, t);
});
function Sc(e) {
  return tr(Ln, e);
}
const Cn = /* @__PURE__ */ l("ZodIPv4", (e, t) => {
  ba.init(e, t), x.init(e, t);
});
function jc(e) {
  return rr(Cn, e);
}
const Ur = /* @__PURE__ */ l("ZodMAC", (e, t) => {
  ya.init(e, t), x.init(e, t);
});
function xc(e) {
  return yu(Ur, e);
}
const Rn = /* @__PURE__ */ l("ZodIPv6", (e, t) => {
  _a.init(e, t), x.init(e, t);
});
function Oc(e) {
  return ir(Rn, e);
}
const Fn = /* @__PURE__ */ l("ZodCIDRv4", (e, t) => {
  ka.init(e, t), x.init(e, t);
});
function Uc(e) {
  return or(Fn, e);
}
const Jn = /* @__PURE__ */ l("ZodCIDRv6", (e, t) => {
  Ia.init(e, t), x.init(e, t);
});
function Nc(e) {
  return ar(Jn, e);
}
const Mn = /* @__PURE__ */ l("ZodBase64", (e, t) => {
  wa.init(e, t), x.init(e, t);
});
function Dc(e) {
  return ur(Mn, e);
}
const Gn = /* @__PURE__ */ l("ZodBase64URL", (e, t) => {
  Sa.init(e, t), x.init(e, t);
});
function Pc(e) {
  return cr(Gn, e);
}
const Vn = /* @__PURE__ */ l("ZodE164", (e, t) => {
  ja.init(e, t), x.init(e, t);
});
function Zc(e) {
  return lr(Vn, e);
}
const Kn = /* @__PURE__ */ l("ZodJWT", (e, t) => {
  Oa.init(e, t), x.init(e, t);
});
function Tc(e) {
  return sr(Kn, e);
}
const ge = /* @__PURE__ */ l("ZodCustomStringFormat", (e, t) => {
  Ua.init(e, t), x.init(e, t);
});
function Ec(e, t, o = {}) {
  return Ze(ge, e, t, o);
}
function Ac(e) {
  return Ze(ge, "hostname", bo, e);
}
function Lc(e) {
  return Ze(ge, "hex", Eo, e);
}
function Cc(e, t) {
  const o = t?.enc ?? "hex", r = `${e}_${o}`, n = sn[r];
  if (!n)
    throw new Error(`Unrecognized hash format: ${r}`);
  return Ze(ge, r, n, t);
}
const Ae = /* @__PURE__ */ l("ZodNumber", (e, t) => {
  Tt.init(e, t), k.init(e, t), e.gt = (r, n) => e.check(q(r, n)), e.gte = (r, n) => e.check(P(r, n)), e.min = (r, n) => e.check(P(r, n)), e.lt = (r, n) => e.check(X(r, n)), e.lte = (r, n) => e.check(L(r, n)), e.max = (r, n) => e.check(L(r, n)), e.int = (r) => e.check(Qe(r)), e.safe = (r) => e.check(Qe(r)), e.positive = (r) => e.check(q(0, r)), e.nonnegative = (r) => e.check(P(0, r)), e.negative = (r) => e.check(X(0, r)), e.nonpositive = (r) => e.check(L(0, r)), e.multipleOf = (r, n) => e.check(se(r, n)), e.step = (r, n) => e.check(se(r, n)), e.finite = () => e;
  const o = e._zod.bag;
  e.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), e.isFinite = !0, e.format = o.format ?? null;
});
function Nr(e) {
  return Su(Ae, e);
}
const oe = /* @__PURE__ */ l("ZodNumberFormat", (e, t) => {
  Na.init(e, t), Ae.init(e, t);
});
function Qe(e) {
  return xu(oe, e);
}
function Rc(e) {
  return Ou(oe, e);
}
function Fc(e) {
  return Uu(oe, e);
}
function Jc(e) {
  return Nu(oe, e);
}
function Mc(e) {
  return Du(oe, e);
}
const Le = /* @__PURE__ */ l("ZodBoolean", (e, t) => {
  Et.init(e, t), k.init(e, t);
});
function Wn(e) {
  return Pu(Le, e);
}
const Ce = /* @__PURE__ */ l("ZodBigInt", (e, t) => {
  At.init(e, t), k.init(e, t), e.gte = (r, n) => e.check(P(r, n)), e.min = (r, n) => e.check(P(r, n)), e.gt = (r, n) => e.check(q(r, n)), e.gte = (r, n) => e.check(P(r, n)), e.min = (r, n) => e.check(P(r, n)), e.lt = (r, n) => e.check(X(r, n)), e.lte = (r, n) => e.check(L(r, n)), e.max = (r, n) => e.check(L(r, n)), e.positive = (r) => e.check(q(BigInt(0), r)), e.negative = (r) => e.check(X(BigInt(0), r)), e.nonpositive = (r) => e.check(L(BigInt(0), r)), e.nonnegative = (r) => e.check(P(BigInt(0), r)), e.multipleOf = (r, n) => e.check(se(r, n));
  const o = e._zod.bag;
  e.minValue = o.minimum ?? null, e.maxValue = o.maximum ?? null, e.format = o.format ?? null;
});
function Gc(e) {
  return Tu(Ce, e);
}
const Bn = /* @__PURE__ */ l("ZodBigIntFormat", (e, t) => {
  Da.init(e, t), Ce.init(e, t);
});
function Vc(e) {
  return Au(Bn, e);
}
function Kc(e) {
  return Lu(Bn, e);
}
const Dr = /* @__PURE__ */ l("ZodSymbol", (e, t) => {
  Pa.init(e, t), k.init(e, t);
});
function Wc(e) {
  return Cu(Dr, e);
}
const Pr = /* @__PURE__ */ l("ZodUndefined", (e, t) => {
  Za.init(e, t), k.init(e, t);
});
function Bc(e) {
  return Ru(Pr, e);
}
const Zr = /* @__PURE__ */ l("ZodNull", (e, t) => {
  Ta.init(e, t), k.init(e, t);
});
function Tr(e) {
  return Fu(Zr, e);
}
const Er = /* @__PURE__ */ l("ZodAny", (e, t) => {
  Ea.init(e, t), k.init(e, t);
});
function Xc() {
  return Ju(Er);
}
const Ar = /* @__PURE__ */ l("ZodUnknown", (e, t) => {
  Aa.init(e, t), k.init(e, t);
});
function Y() {
  return Mu(Ar);
}
const Lr = /* @__PURE__ */ l("ZodNever", (e, t) => {
  La.init(e, t), k.init(e, t);
});
function Xn(e) {
  return Gu(Lr, e);
}
const Cr = /* @__PURE__ */ l("ZodVoid", (e, t) => {
  Ca.init(e, t), k.init(e, t);
});
function Rr(e) {
  return Vu(Cr, e);
}
const qn = /* @__PURE__ */ l("ZodDate", (e, t) => {
  Ra.init(e, t), k.init(e, t), e.min = (r, n) => e.check(P(r, n)), e.max = (r, n) => e.check(L(r, n));
  const o = e._zod.bag;
  e.minDate = o.minimum ? new Date(o.minimum) : null, e.maxDate = o.maximum ? new Date(o.maximum) : null;
});
function qc(e) {
  return Ku(qn, e);
}
const Fr = /* @__PURE__ */ l("ZodArray", (e, t) => {
  Fa.init(e, t), k.init(e, t), e.element = t.element, e.min = (o, r) => e.check(te(o, r)), e.nonempty = (o) => e.check(te(1, o)), e.max = (o, r) => e.check(De(o, r)), e.length = (o, r) => e.check(Pe(o, r)), e.unwrap = () => e.element;
});
function re(e, t) {
  return Xu(Fr, e, t);
}
function Yc(e) {
  const t = e._zod.def.shape;
  return et(Object.keys(t));
}
const Re = /* @__PURE__ */ l("ZodObject", (e, t) => {
  Va.init(e, t), k.init(e, t), I(e, "shape", () => t.shape), e.keyof = () => et(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Y() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Y() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Xn() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (o) => Gi(e, o), e.safeExtend = (o) => Vi(e, o), e.merge = (o) => Ki(e, o), e.pick = (o) => Ji(e, o), e.omit = (o) => Mi(e, o), e.partial = (...o) => Wi(tt, e, o[0]), e.required = (...o) => Bi(rt, e, o[0]);
});
function V(e, t) {
  const o = {
    type: "object",
    shape: e ?? {},
    ...g(t)
  };
  return new Re(o);
}
function Hc(e, t) {
  return new Re({
    type: "object",
    shape: e,
    catchall: Xn(),
    ...g(t)
  });
}
function Qc(e, t) {
  return new Re({
    type: "object",
    shape: e,
    catchall: Y(),
    ...g(t)
  });
}
const Yn = /* @__PURE__ */ l("ZodUnion", (e, t) => {
  Lt.init(e, t), k.init(e, t), e.options = t.options;
});
function Hn(e, t) {
  return new Yn({
    type: "union",
    options: e,
    ...g(t)
  });
}
const Jr = /* @__PURE__ */ l("ZodDiscriminatedUnion", (e, t) => {
  Yn.init(e, t), Ka.init(e, t);
});
function el(e, t, o) {
  return new Jr({
    type: "union",
    options: t,
    discriminator: e,
    ...g(o)
  });
}
const Mr = /* @__PURE__ */ l("ZodIntersection", (e, t) => {
  Wa.init(e, t), k.init(e, t);
});
function Gr(e, t) {
  return new Mr({
    type: "intersection",
    left: e,
    right: t
  });
}
const Vr = /* @__PURE__ */ l("ZodTuple", (e, t) => {
  Ct.init(e, t), k.init(e, t), e.rest = (o) => e.clone({
    ...e._zod.def,
    rest: o
  });
});
function Fe(e, t, o) {
  const r = t instanceof y, n = r ? o : t, i = r ? t : null;
  return new Vr({
    type: "tuple",
    items: e,
    rest: i,
    ...g(n)
  });
}
const Qn = /* @__PURE__ */ l("ZodRecord", (e, t) => {
  Ba.init(e, t), k.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Kr(e, t, o) {
  return new Qn({
    type: "record",
    keyType: e,
    valueType: t,
    ...g(o)
  });
}
function nl(e, t, o) {
  const r = T(e);
  return r._zod.values = void 0, new Qn({
    type: "record",
    keyType: r,
    valueType: t,
    ...g(o)
  });
}
const Wr = /* @__PURE__ */ l("ZodMap", (e, t) => {
  Xa.init(e, t), k.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function tl(e, t, o) {
  return new Wr({
    type: "map",
    keyType: e,
    valueType: t,
    ...g(o)
  });
}
const Br = /* @__PURE__ */ l("ZodSet", (e, t) => {
  qa.init(e, t), k.init(e, t), e.min = (...o) => e.check(de(...o)), e.nonempty = (o) => e.check(de(1, o)), e.max = (...o) => e.check(Ne(...o)), e.size = (...o) => e.check(fn(...o));
});
function rl(e, t) {
  return new Br({
    type: "set",
    valueType: e,
    ...g(t)
  });
}
const me = /* @__PURE__ */ l("ZodEnum", (e, t) => {
  Ya.init(e, t), k.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const o = new Set(Object.keys(t.entries));
  e.extract = (r, n) => {
    const i = {};
    for (const a of r)
      if (o.has(a))
        i[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...g(n),
      entries: i
    });
  }, e.exclude = (r, n) => {
    const i = { ...t.entries };
    for (const a of r)
      if (o.has(a))
        delete i[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...g(n),
      entries: i
    });
  };
});
function et(e, t) {
  const o = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new me({
    type: "enum",
    entries: o,
    ...g(t)
  });
}
function il(e, t) {
  return new me({
    type: "enum",
    entries: e,
    ...g(t)
  });
}
const Xr = /* @__PURE__ */ l("ZodLiteral", (e, t) => {
  Ha.init(e, t), k.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function en(e, t) {
  return new Xr({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...g(t)
  });
}
const qr = /* @__PURE__ */ l("ZodFile", (e, t) => {
  Qa.init(e, t), k.init(e, t), e.min = (o, r) => e.check(de(o, r)), e.max = (o, r) => e.check(Ne(o, r)), e.mime = (o, r) => e.check(_n(Array.isArray(o) ? o : [o], r));
});
function ol(e) {
  return qu(qr, e);
}
const Yr = /* @__PURE__ */ l("ZodTransform", (e, t) => {
  eu.init(e, t), k.init(e, t), e._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new tn(e.constructor.name);
    o.addIssue = (i) => {
      if (typeof i == "string")
        o.issues.push(ce(i, o.value, t));
      else {
        const a = i;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = o.value), a.inst ?? (a.inst = e), o.issues.push(ce(a));
      }
    };
    const n = t.transform(o.value, o);
    return n instanceof Promise ? n.then((i) => (o.value = i, o)) : (o.value = n, o);
  };
});
function nt(e) {
  return new Yr({
    type: "transform",
    transform: e
  });
}
const tt = /* @__PURE__ */ l("ZodOptional", (e, t) => {
  nu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function be(e) {
  return new tt({
    type: "optional",
    innerType: e
  });
}
const Hr = /* @__PURE__ */ l("ZodNullable", (e, t) => {
  tu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function _e(e) {
  return new Hr({
    type: "nullable",
    innerType: e
  });
}
function al(e) {
  return be(_e(e));
}
const Qr = /* @__PURE__ */ l("ZodDefault", (e, t) => {
  ru.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ei(e, t) {
  return new Qr({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : on(t);
    }
  });
}
const ni = /* @__PURE__ */ l("ZodPrefault", (e, t) => {
  iu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ti(e, t) {
  return new ni({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : on(t);
    }
  });
}
const rt = /* @__PURE__ */ l("ZodNonOptional", (e, t) => {
  ou.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ri(e, t) {
  return new rt({
    type: "nonoptional",
    innerType: e,
    ...g(t)
  });
}
const ii = /* @__PURE__ */ l("ZodSuccess", (e, t) => {
  au.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ul(e) {
  return new ii({
    type: "success",
    innerType: e
  });
}
const oi = /* @__PURE__ */ l("ZodCatch", (e, t) => {
  uu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ai(e, t) {
  return new oi({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const ui = /* @__PURE__ */ l("ZodNaN", (e, t) => {
  cu.init(e, t), k.init(e, t);
});
function cl(e) {
  return Bu(ui, e);
}
const it = /* @__PURE__ */ l("ZodPipe", (e, t) => {
  lu.init(e, t), k.init(e, t), e.in = t.in, e.out = t.out;
});
function ye(e, t) {
  return new it({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const ot = /* @__PURE__ */ l("ZodCodec", (e, t) => {
  it.init(e, t), Rt.init(e, t);
});
function ll(e, t, o) {
  return new ot({
    type: "pipe",
    in: e,
    out: t,
    transform: o.decode,
    reverseTransform: o.encode
  });
}
const ci = /* @__PURE__ */ l("ZodReadonly", (e, t) => {
  su.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function li(e) {
  return new ci({
    type: "readonly",
    innerType: e
  });
}
const si = /* @__PURE__ */ l("ZodTemplateLiteral", (e, t) => {
  du.init(e, t), k.init(e, t);
});
function sl(e, t) {
  return new si({
    type: "template_literal",
    parts: e,
    ...g(t)
  });
}
const di = /* @__PURE__ */ l("ZodLazy", (e, t) => {
  gu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function mi(e) {
  return new di({
    type: "lazy",
    getter: e
  });
}
const fi = /* @__PURE__ */ l("ZodPromise", (e, t) => {
  fu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function dl(e) {
  return new fi({
    type: "promise",
    innerType: e
  });
}
const gi = /* @__PURE__ */ l("ZodFunction", (e, t) => {
  mu.init(e, t), k.init(e, t);
});
function fe(e) {
  return new gi({
    type: "function",
    input: Array.isArray(e?.input) ? Fe(e?.input) : e?.input ?? re(Y()),
    output: e?.output ?? Y()
  });
}
const Je = /* @__PURE__ */ l("ZodCustom", (e, t) => {
  pu.init(e, t), k.init(e, t);
});
function ml(e) {
  const t = new U({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function at(e, t) {
  return Yu(Je, e ?? (() => !0), t);
}
function pi(e, t = {}) {
  return Hu(Je, e, t);
}
function vi(e) {
  return Qu(e);
}
const fl = nc, gl = tc;
function pl(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const o = new Je({
    type: "custom",
    check: "custom",
    fn: (r) => r instanceof e,
    abort: !0,
    ...g(t)
  });
  return o._zod.bag.Class = e, o;
}
const vl = (...e) => rc({
  Codec: ot,
  Boolean: Le,
  String: Te
}, ...e);
function hl(e) {
  const t = mi(() => Hn([C(e), Nr(), Wn(), Tr(), re(t), Kr(C(), t)]));
  return t;
}
function $l(e, t) {
  return ye(nt(e), t);
}
const bl = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function _l(e) {
  N({
    customError: e
  });
}
function yl() {
  return N().customError;
}
var nn;
nn || (nn = {});
function Dm(e) {
  return _u(Te, e);
}
function Pm(e) {
  return ju(Ae, e);
}
function Zm(e) {
  return Zu(Le, e);
}
function Tm(e) {
  return Eu(Ce, e);
}
function Em(e) {
  return Wu(qn, e);
}
const kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: Tm,
  boolean: Zm,
  date: Em,
  number: Pm,
  string: Dm
}, Symbol.toStringTag, { value: "Module" }));
N(vu());
const Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: vt,
  $input: Mt,
  $output: Jt,
  NEVER: pt,
  TimePrecision: dr,
  ZodAny: Er,
  ZodArray: Fr,
  ZodBase64: Mn,
  ZodBase64URL: Gn,
  ZodBigInt: Ce,
  ZodBigIntFormat: Bn,
  ZodBoolean: Le,
  ZodCIDRv4: Fn,
  ZodCIDRv6: Jn,
  ZodCUID: Zn,
  ZodCUID2: Tn,
  ZodCatch: oi,
  ZodCodec: ot,
  ZodCustom: Je,
  ZodCustomStringFormat: ge,
  ZodDate: qn,
  ZodDefault: Qr,
  ZodDiscriminatedUnion: Jr,
  ZodE164: Vn,
  ZodEmail: Nn,
  ZodEmoji: Dn,
  ZodEnum: me,
  ZodError: dc,
  ZodFile: qr,
  get ZodFirstPartyTypeKind() {
    return nn;
  },
  ZodFunction: gi,
  ZodGUID: $e,
  ZodIPv4: Cn,
  ZodIPv6: Rn,
  ZodISODate: jn,
  ZodISODateTime: Sn,
  ZodISODuration: On,
  ZodISOTime: xn,
  ZodIntersection: Mr,
  ZodIssueCode: bl,
  ZodJWT: Kn,
  ZodKSUID: Ln,
  ZodLazy: di,
  ZodLiteral: Xr,
  ZodMAC: Ur,
  ZodMap: Wr,
  ZodNaN: ui,
  ZodNanoID: Pn,
  ZodNever: Lr,
  ZodNonOptional: rt,
  ZodNull: Zr,
  ZodNullable: Hr,
  ZodNumber: Ae,
  ZodNumberFormat: oe,
  ZodObject: Re,
  ZodOptional: tt,
  ZodPipe: it,
  ZodPrefault: ni,
  ZodPromise: fi,
  ZodReadonly: ci,
  ZodRealError: Z,
  ZodRecord: Qn,
  ZodSet: Br,
  ZodString: Te,
  ZodStringFormat: x,
  ZodSuccess: ii,
  ZodSymbol: Dr,
  ZodTemplateLiteral: si,
  ZodTransform: Yr,
  ZodTuple: Vr,
  ZodType: k,
  ZodULID: En,
  ZodURL: Ee,
  ZodUUID: M,
  ZodUndefined: Pr,
  ZodUnion: Yn,
  ZodUnknown: Ar,
  ZodVoid: Cr,
  ZodXID: An,
  _ZodString: Un,
  _default: ei,
  _function: fe,
  any: Xc,
  array: re,
  base64: Dc,
  base64url: Pc,
  bigint: Gc,
  boolean: Wn,
  catch: ai,
  check: ml,
  cidrv4: Uc,
  cidrv6: Nc,
  clone: T,
  codec: ll,
  coerce: kl,
  config: N,
  core: ic,
  cuid: kc,
  cuid2: Ic,
  custom: at,
  date: qc,
  decode: Ir,
  decodeAsync: zr,
  describe: fl,
  discriminatedUnion: el,
  e164: Zc,
  email: mc,
  emoji: _c,
  encode: kr,
  encodeAsync: wr,
  endsWith: bn,
  enum: et,
  file: ol,
  flattenError: cn,
  float32: Rc,
  float64: Fc,
  formatError: ln,
  function: fe,
  getErrorMap: yl,
  globalRegistry: A,
  gt: q,
  gte: P,
  guid: fc,
  hash: Cc,
  hex: Lc,
  hostname: Ac,
  httpUrl: bc,
  includes: hn,
  instanceof: pl,
  int: Qe,
  int32: Jc,
  int64: Vc,
  intersection: Gr,
  ipv4: jc,
  ipv6: Oc,
  iso: lc,
  json: hl,
  jwt: Tc,
  keyof: Yc,
  ksuid: Sc,
  lazy: mi,
  length: Pe,
  literal: en,
  locales: Ft,
  looseObject: Qc,
  lowercase: pn,
  lt: X,
  lte: L,
  mac: xc,
  map: tl,
  maxLength: De,
  maxSize: Ne,
  meta: gl,
  mime: _n,
  minLength: te,
  minSize: de,
  multipleOf: se,
  nan: cl,
  nanoid: yc,
  nativeEnum: il,
  negative: fr,
  never: Xn,
  nonnegative: pr,
  nonoptional: ri,
  nonpositive: gr,
  normalize: yn,
  null: Tr,
  nullable: _e,
  nullish: al,
  number: Nr,
  object: V,
  optional: be,
  overwrite: B,
  parse: $r,
  parseAsync: br,
  partialRecord: nl,
  pipe: ye,
  positive: mr,
  prefault: ti,
  preprocess: $l,
  prettifyError: kt,
  promise: dl,
  property: vr,
  readonly: li,
  record: Kr,
  refine: pi,
  regex: gn,
  regexes: sn,
  registry: dn,
  safeDecode: jr,
  safeDecodeAsync: Or,
  safeEncode: Sr,
  safeEncodeAsync: xr,
  safeParse: _r,
  safeParseAsync: yr,
  set: rl,
  setErrorMap: _l,
  size: fn,
  slugify: zn,
  startsWith: $n,
  strictObject: Hc,
  string: C,
  stringFormat: Ec,
  stringbool: vl,
  success: ul,
  superRefine: vi,
  symbol: Wc,
  templateLiteral: sl,
  toJSONSchema: hr,
  toLowerCase: In,
  toUpperCase: wn,
  transform: nt,
  treeifyError: yt,
  trim: kn,
  tuple: Fe,
  uint32: Mc,
  uint64: Kc,
  ulid: wc,
  undefined: Bc,
  union: Hn,
  unknown: Y,
  uppercase: vn,
  url: $c,
  util: bt,
  uuid: gc,
  uuidv4: pc,
  uuidv6: vc,
  uuidv7: hc,
  void: Rr,
  xid: zc
}, Symbol.toStringTag, { value: "Module" })), Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: vt,
  $input: Mt,
  $output: Jt,
  NEVER: pt,
  TimePrecision: dr,
  ZodAny: Er,
  ZodArray: Fr,
  ZodBase64: Mn,
  ZodBase64URL: Gn,
  ZodBigInt: Ce,
  ZodBigIntFormat: Bn,
  ZodBoolean: Le,
  ZodCIDRv4: Fn,
  ZodCIDRv6: Jn,
  ZodCUID: Zn,
  ZodCUID2: Tn,
  ZodCatch: oi,
  ZodCodec: ot,
  ZodCustom: Je,
  ZodCustomStringFormat: ge,
  ZodDate: qn,
  ZodDefault: Qr,
  ZodDiscriminatedUnion: Jr,
  ZodE164: Vn,
  ZodEmail: Nn,
  ZodEmoji: Dn,
  ZodEnum: me,
  ZodError: dc,
  ZodFile: qr,
  get ZodFirstPartyTypeKind() {
    return nn;
  },
  ZodFunction: gi,
  ZodGUID: $e,
  ZodIPv4: Cn,
  ZodIPv6: Rn,
  ZodISODate: jn,
  ZodISODateTime: Sn,
  ZodISODuration: On,
  ZodISOTime: xn,
  ZodIntersection: Mr,
  ZodIssueCode: bl,
  ZodJWT: Kn,
  ZodKSUID: Ln,
  ZodLazy: di,
  ZodLiteral: Xr,
  ZodMAC: Ur,
  ZodMap: Wr,
  ZodNaN: ui,
  ZodNanoID: Pn,
  ZodNever: Lr,
  ZodNonOptional: rt,
  ZodNull: Zr,
  ZodNullable: Hr,
  ZodNumber: Ae,
  ZodNumberFormat: oe,
  ZodObject: Re,
  ZodOptional: tt,
  ZodPipe: it,
  ZodPrefault: ni,
  ZodPromise: fi,
  ZodReadonly: ci,
  ZodRealError: Z,
  ZodRecord: Qn,
  ZodSet: Br,
  ZodString: Te,
  ZodStringFormat: x,
  ZodSuccess: ii,
  ZodSymbol: Dr,
  ZodTemplateLiteral: si,
  ZodTransform: Yr,
  ZodTuple: Vr,
  ZodType: k,
  ZodULID: En,
  ZodURL: Ee,
  ZodUUID: M,
  ZodUndefined: Pr,
  ZodUnion: Yn,
  ZodUnknown: Ar,
  ZodVoid: Cr,
  ZodXID: An,
  _ZodString: Un,
  _default: ei,
  _function: fe,
  any: Xc,
  array: re,
  base64: Dc,
  base64url: Pc,
  bigint: Gc,
  boolean: Wn,
  catch: ai,
  check: ml,
  cidrv4: Uc,
  cidrv6: Nc,
  clone: T,
  codec: ll,
  coerce: kl,
  config: N,
  core: ic,
  cuid: kc,
  cuid2: Ic,
  custom: at,
  date: qc,
  decode: Ir,
  decodeAsync: zr,
  default: Pi,
  describe: fl,
  discriminatedUnion: el,
  e164: Zc,
  email: mc,
  emoji: _c,
  encode: kr,
  encodeAsync: wr,
  endsWith: bn,
  enum: et,
  file: ol,
  flattenError: cn,
  float32: Rc,
  float64: Fc,
  formatError: ln,
  function: fe,
  getErrorMap: yl,
  globalRegistry: A,
  gt: q,
  gte: P,
  guid: fc,
  hash: Cc,
  hex: Lc,
  hostname: Ac,
  httpUrl: bc,
  includes: hn,
  instanceof: pl,
  int: Qe,
  int32: Jc,
  int64: Vc,
  intersection: Gr,
  ipv4: jc,
  ipv6: Oc,
  iso: lc,
  json: hl,
  jwt: Tc,
  keyof: Yc,
  ksuid: Sc,
  lazy: mi,
  length: Pe,
  literal: en,
  locales: Ft,
  looseObject: Qc,
  lowercase: pn,
  lt: X,
  lte: L,
  mac: xc,
  map: tl,
  maxLength: De,
  maxSize: Ne,
  meta: gl,
  mime: _n,
  minLength: te,
  minSize: de,
  multipleOf: se,
  nan: cl,
  nanoid: yc,
  nativeEnum: il,
  negative: fr,
  never: Xn,
  nonnegative: pr,
  nonoptional: ri,
  nonpositive: gr,
  normalize: yn,
  null: Tr,
  nullable: _e,
  nullish: al,
  number: Nr,
  object: V,
  optional: be,
  overwrite: B,
  parse: $r,
  parseAsync: br,
  partialRecord: nl,
  pipe: ye,
  positive: mr,
  prefault: ti,
  preprocess: $l,
  prettifyError: kt,
  promise: dl,
  property: vr,
  readonly: li,
  record: Kr,
  refine: pi,
  regex: gn,
  regexes: sn,
  registry: dn,
  safeDecode: jr,
  safeDecodeAsync: Or,
  safeEncode: Sr,
  safeEncodeAsync: xr,
  safeParse: _r,
  safeParseAsync: yr,
  set: rl,
  setErrorMap: _l,
  size: fn,
  slugify: zn,
  startsWith: $n,
  strictObject: Hc,
  string: C,
  stringFormat: Ec,
  stringbool: vl,
  success: ul,
  superRefine: vi,
  symbol: Wc,
  templateLiteral: sl,
  toJSONSchema: hr,
  toLowerCase: In,
  toUpperCase: wn,
  transform: nt,
  treeifyError: yt,
  trim: kn,
  tuple: Fe,
  uint32: Mc,
  uint64: Kc,
  ulid: wc,
  undefined: Bc,
  union: Hn,
  unknown: Y,
  uppercase: vn,
  url: $c,
  util: bt,
  uuid: gc,
  uuidv4: pc,
  uuidv6: vc,
  uuidv7: hc,
  void: Rr,
  xid: zc,
  z: Pi
}, Symbol.toStringTag, { value: "Module" })), ut = fe({
  input: Fe([
    V({
      editor: at((e) => e !== void 0),
      linkBrowserUrl: C()
    })
  ]),
  output: Wn()
}), Zi = fe({
  input: Fe([
    V({
      editor: at((e) => e !== void 0),
      linkBrowserUrl: C()
    })
  ]),
  output: Rr()
}), Lm = V({
  id: C(),
  label: C(),
  iconIdentifier: C(),
  position: V({
    toolbarGroupId: C().or(en(!1)),
    bubbleMenuGroupId: C().or(en(!1))
  }),
  status: V({
    isActive: ut.optional(),
    isDisabled: ut.optional(),
    isVisible: ut.optional()
  }).optional(),
  hooks: V({
    onEditorMounted: Zi.optional()
  }).optional(),
  onExecute: Zi
}), Cm = V({
  commands: re(Lm).optional(),
  extensions: re(Y()).optional()
}), We = (e) => {
  if (typeof e == "object" && e !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t = Object.getPrototypeOf(e);
      return t === Object.prototype || t === null;
    }
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  return !1;
}, R = (...e) => e.reduce((t, o) => {
  if (o === void 0)
    return t;
  if (Array.isArray(o))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(o).forEach((r) => {
    ["__proto__", "constructor", "prototype"].includes(r) || (Array.isArray(t[r]) && Array.isArray(o[r]) ? t[r] = R.options.mergeArrays ? R.options.uniqueArrayItems ? Array.from(new Set(t[r].concat(o[r]))) : [...t[r], ...o[r]] : o[r] : We(t[r]) && We(o[r]) ? t[r] = R(t[r], o[r]) : !We(t[r]) && We(o[r]) ? t[r] = R(o[r], void 0) : t[r] = o[r] === void 0 ? R.options.allowUndefinedOverrides ? o[r] : t[r] : o[r]);
  }), t;
}, {}), ft = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
R.options = ft;
R.withOptions = (e, ...t) => {
  R.options = Object.assign(Object.assign({}, ft), e);
  const o = R(...t);
  return R.options = ft, o;
};
function Rm(e, t) {
  return R.withOptions(
    { mergeArrays: !0, uniqueArrayItems: !0 },
    { items: e },
    { items: t }
  ).items;
}
function Jm(e, t = 300) {
  let o, r = 0, n = !1;
  return (...i) => {
    const a = Date.now();
    return (!n || a - r >= t) && (o = e(...i), r = a, n = !0), o;
  };
}
const gt = [
  {
    id: "history",
    commands: []
  },
  {
    id: "styles",
    commands: [],
    dropdown: {
      label: "Styles",
      iconIdentifier: "styles"
    }
  },
  {
    id: "heading",
    commands: [],
    dropdown: {
      label: "Headings",
      iconIdentifier: "heading"
    }
  },
  {
    id: "general",
    commands: []
  },
  {
    id: "formatting",
    commands: []
  },
  {
    id: "textAlignment",
    commands: [],
    dropdown: {
      label: "Text alignment",
      iconIdentifier: "justify-left"
    }
  },
  {
    id: "developer",
    commands: []
  }
], Fm = [
  {
    id: "formatting",
    commands: []
  },
  {
    id: "heading",
    commands: [],
    dropdown: {
      label: "Headings",
      iconIdentifier: "heading"
    }
  },
  {
    id: "styles",
    commands: [],
    dropdown: {
      label: "Styles",
      iconIdentifier: "styles"
    }
  }
], ae = {
  toolbar: gt,
  bubbleMenu: Fm,
  extensions: []
};
function Mm(e) {
  const t = Cm.safeParse(e);
  if (!t.success)
    throw new Error(`Invalid TipTap plugin options: ${t.error.message}`);
  const { data: o } = t;
  o.extensions && Array.isArray(ae.extensions) && (ae.extensions = Rm(ae.extensions, o.extensions)), o.commands && o.commands.forEach((r) => {
    if (r.position.toolbarGroupId !== !1 && Array.isArray(gt)) {
      const n = ae.toolbar.find((i) => i.id === r.position.toolbarGroupId);
      if (!n)
        throw new Error(`Top bar group ${r.position.toolbarGroupId} not found for command id ${r.id}.`);
      Array.isArray(n.commands) && n.commands.push(r);
    }
    if (r.position.bubbleMenuGroupId !== !1 && Array.isArray(gt)) {
      const n = ae.bubbleMenu.find((i) => i.id === r.position.bubbleMenuGroupId);
      if (!n)
        throw new Error(`Bubble menu group ${r.position.bubbleMenuGroupId} not found for command id ${r.id}.`);
      Array.isArray(n.commands) && n.commands.push(r);
    }
  });
}
function Gm(e) {
  const o = e.getValidationSchema(Am).safeParse(e.config);
  if (!o.success) {
    const r = `Invalid TipTap configuration for plugin id: ${e.pluginId}!
Received plugin configuration:
${JSON.stringify(e.config, null, 2)}

Zod Validation Error:
${o.error.message}`;
    throw new Error(r);
  }
  return o.data;
}
const Vm = () => ae;
export {
  re as a,
  Wn as b,
  Jm as c,
  Mm as d,
  Vm as g,
  V as o,
  Gm as p,
  Kr as r,
  C as s,
  Y as u
};
