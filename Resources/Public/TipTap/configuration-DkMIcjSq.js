const pt = Object.freeze({
  status: "aborted"
});
function c(e, t, r) {
  function o(u, l) {
    var s;
    Object.defineProperty(u, "_zod", {
      value: u._zod ?? {},
      enumerable: !1
    }), (s = u._zod).traits ?? (s.traits = /* @__PURE__ */ new Set()), u._zod.traits.add(e), t(u, l);
    for (const p in a.prototype)
      p in u || Object.defineProperty(u, p, { value: a.prototype[p].bind(u) });
    u._zod.constr = a, u._zod.def = l;
  }
  const n = r?.Parent ?? Object;
  class i extends n {
  }
  Object.defineProperty(i, "name", { value: e });
  function a(u) {
    var l;
    const s = r?.Parent ? new i() : this;
    o(s, u), (l = s._zod).deferred ?? (l.deferred = []);
    for (const p of s._zod.deferred)
      p();
    return s;
  }
  return Object.defineProperty(a, "init", { value: o }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (u) => r?.Parent && u instanceof r.Parent ? !0 : u?._zod?.traits?.has(e)
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
function D(e) {
  return e && Object.assign(Be, e), Be;
}
function ml(e) {
  return e;
}
function fl(e) {
  return e;
}
function pl(e) {
}
function vl(e) {
  throw new Error();
}
function gl(e) {
}
function gt(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n);
}
function v(e, t = "|") {
  return e.map((r) => _(r)).join(t);
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
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Pi(e, t) {
  const r = (e.toString().split(".")[1] || "").length, o = t.toString();
  let n = (o.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(o)) {
    const l = o.match(/\d?e-(\d?)/);
    l?.[1] && (n = Number.parseInt(l[1]));
  }
  const i = r > n ? r : n, a = Number.parseInt(e.toFixed(i).replace(".", "")), u = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % u / 10 ** i;
}
const gi = Symbol("evaluating");
function I(e, t, r) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== gi)
        return o === void 0 && (o = gi, o = r()), o;
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
function hl(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function Y(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function V(...e) {
  const t = {};
  for (const r of e) {
    const o = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function $l(e) {
  return V(e._zod.def);
}
function bl(e, t) {
  return t ? t.reduce((r, o) => r?.[o], e) : e;
}
function _l(e) {
  const t = Object.keys(e), r = t.map((o) => e[o]);
  return Promise.all(r).then((o) => {
    const n = {};
    for (let i = 0; i < t.length; i++)
      n[t[i]] = o[i];
    return n;
  });
}
function yl(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let o = 0; o < e; o++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function ut(e) {
  return JSON.stringify(e);
}
const ht = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function ue(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Zi = ke(() => {
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
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(ue(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function on(e) {
  return ne(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function kl(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const Il = (e) => {
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
}, qe = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Ti = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function K(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function T(e, t, r) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (o._zod.parent = e), o;
}
function m(e) {
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
function zl(e) {
  let t;
  return new Proxy({}, {
    get(r, o, n) {
      return t ?? (t = e()), Reflect.get(t, o, n);
    },
    set(r, o, n, i) {
      return t ?? (t = e()), Reflect.set(t, o, n, i);
    },
    has(r, o) {
      return t ?? (t = e()), Reflect.has(t, o);
    },
    deleteProperty(r, o) {
      return t ?? (t = e()), Reflect.deleteProperty(t, o);
    },
    ownKeys(r) {
      return t ?? (t = e()), Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor(r, o) {
      return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, o);
    },
    defineProperty(r, o, n) {
      return t ?? (t = e()), Reflect.defineProperty(t, o, n);
    }
  });
}
function _(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ei(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Ai = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Ci = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Li(e, t) {
  const r = e._zod.def, o = V(e._zod.def, {
    get shape() {
      const n = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (n[i] = r.shape[i]);
      }
      return Y(this, "shape", n), n;
    },
    checks: []
  });
  return T(e, o);
}
function Ri(e, t) {
  const r = e._zod.def, o = V(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete n[i];
      }
      return Y(this, "shape", n), n;
    },
    checks: []
  });
  return T(e, o);
}
function Fi(e, t) {
  if (!ne(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = V(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return Y(this, "shape", i), i;
    },
    checks: []
  });
  return T(e, n);
}
function Ji(e, t) {
  if (!ne(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Y(this, "shape", o), o;
    },
    checks: e._zod.def.checks
  };
  return T(e, r);
}
function Mi(e, t) {
  const r = V(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Y(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return T(e, r);
}
function Gi(e, t, r) {
  const o = V(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in n))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (i[a] = e ? new e({
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
      return Y(this, "shape", i), i;
    },
    checks: []
  });
  return T(t, o);
}
function Vi(e, t, r) {
  const o = V(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, i = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in i))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (i[a] = new e({
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
      return Y(this, "shape", i), i;
    },
    checks: []
  });
  return T(t, o);
}
function Q(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function R(e, t) {
  return t.map((r) => {
    var o;
    return (o = r).path ?? (o.path = []), r.path.unshift(e), r;
  });
}
function ge(e) {
  return typeof e == "string" ? e : e?.message;
}
function F(e, t, r) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = ge(e.inst?._zod.def?.error?.(e)) ?? ge(t?.error?.(e)) ?? ge(r.customError?.(e)) ?? ge(r.localeError?.(e)) ?? "Invalid input";
    o.message = n;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function an(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function un(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ce(...e) {
  const [t, r, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: o
  } : { ...t };
}
function wl(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function Wi(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function Ki(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function Sl(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return Wi(t + r);
}
function jl(e) {
  return Ki(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function xl(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let o = 0; o < t.length; o += 2)
    r[o / 2] = Number.parseInt(t.slice(o, o + 2), 16);
  return r;
}
function Ol(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class Ul {
  constructor(...t) {
  }
}
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: Ci,
  Class: Ul,
  NUMBER_FORMAT_RANGES: Ai,
  aborted: Q,
  allowsEval: Zi,
  assert: gl,
  assertEqual: ml,
  assertIs: pl,
  assertNever: vl,
  assertNotEqual: fl,
  assignProp: Y,
  base64ToUint8Array: Wi,
  base64urlToUint8Array: Sl,
  cached: ke,
  captureStackTrace: ht,
  cleanEnum: wl,
  cleanRegex: rn,
  clone: T,
  cloneDef: $l,
  createTransparentProxy: zl,
  defineLazy: I,
  esc: ut,
  escapeRegex: K,
  extend: Fi,
  finalizeIssue: F,
  floatSafeRemainder: Pi,
  getElementAtPath: bl,
  getEnumValues: gt,
  getLengthableOrigin: un,
  getParsedType: Il,
  getSizableOrigin: an,
  hexToUint8Array: xl,
  isObject: ue,
  isPlainObject: ne,
  issue: ce,
  joinValues: v,
  jsonStringifyReplacer: Xe,
  merge: Mi,
  mergeDefs: V,
  normalizeParams: m,
  nullish: ie,
  numKeys: kl,
  objectClone: hl,
  omit: Ri,
  optionalKeys: Ei,
  partial: Gi,
  pick: Li,
  prefixIssues: R,
  primitiveTypes: Ti,
  promiseAllObject: _l,
  propertyKeyTypes: qe,
  randomString: yl,
  required: Vi,
  safeExtend: Ji,
  shallowClone: on,
  stringifyPrimitive: _,
  uint8ArrayToBase64: Ki,
  uint8ArrayToBase64url: jl,
  uint8ArrayToHex: Ol,
  unwrapMessage: ge
}, Symbol.toStringTag, { value: "Module" })), Bi = (e, t) => {
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
}, bt = c("$ZodError", Bi), E = c("$ZodError", Bi, { Parent: Error });
function cn(e, t = (r) => r.message) {
  const r = {}, o = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : o.push(t(n));
  return { formErrors: o, fieldErrors: r };
}
function ln(e, t) {
  const r = t || function(i) {
    return i.message;
  }, o = { _errors: [] }, n = (i) => {
    for (const a of i.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((u) => n({ issues: u }));
      else if (a.code === "invalid_key")
        n({ issues: a.issues });
      else if (a.code === "invalid_element")
        n({ issues: a.issues });
      else if (a.path.length === 0)
        o._errors.push(r(a));
      else {
        let u = o, l = 0;
        for (; l < a.path.length; ) {
          const s = a.path[l];
          l === a.path.length - 1 ? (u[s] = u[s] || { _errors: [] }, u[s]._errors.push(r(a))) : u[s] = u[s] || { _errors: [] }, u = u[s], l++;
        }
      }
  };
  return n(e), o;
}
function _t(e, t) {
  const r = t || function(i) {
    return i.message;
  }, o = { errors: [] }, n = (i, a = []) => {
    var u, l;
    for (const s of i.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((p) => n({ issues: p }, s.path));
      else if (s.code === "invalid_key")
        n({ issues: s.issues }, s.path);
      else if (s.code === "invalid_element")
        n({ issues: s.issues }, s.path);
      else {
        const p = [...a, ...s.path];
        if (p.length === 0) {
          o.errors.push(r(s));
          continue;
        }
        let f = o, b = 0;
        for (; b < p.length; ) {
          const g = p[b], d = b === p.length - 1;
          typeof g == "string" ? (f.properties ?? (f.properties = {}), (u = f.properties)[g] ?? (u[g] = { errors: [] }), f = f.properties[g]) : (f.items ?? (f.items = []), (l = f.items)[g] ?? (l[g] = { errors: [] }), f = f.items[g]), d && f.errors.push(r(s)), b++;
        }
      }
  };
  return n(e), o;
}
function Xi(e) {
  const t = [], r = e.map((o) => typeof o == "object" ? o.key : o);
  for (const o of r)
    typeof o == "number" ? t.push(`[${o}]`) : typeof o == "symbol" ? t.push(`[${JSON.stringify(String(o))}]`) : /[^\w$]/.test(o) ? t.push(`[${JSON.stringify(o)}]`) : (t.length && t.push("."), t.push(o));
  return t.join("");
}
function yt(e) {
  const t = [], r = [...e.issues].sort((o, n) => (o.path ?? []).length - (n.path ?? []).length);
  for (const o of r)
    t.push(`✖ ${o.message}`), o.path?.length && t.push(`  → at ${Xi(o.path)}`);
  return t.join(`
`);
}
const Ie = (e) => (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise)
    throw new ee();
  if (a.issues.length) {
    const u = new (n?.Err ?? e)(a.issues.map((l) => F(l, i, D())));
    throw ht(u, n?.callee), u;
  }
  return a.value;
}, ct = /* @__PURE__ */ Ie(E), ze = (e) => async (t, r, o, n) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, i);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const u = new (n?.Err ?? e)(a.issues.map((l) => F(l, i, D())));
    throw ht(u, n?.callee), u;
  }
  return a.value;
}, lt = /* @__PURE__ */ ze(E), we = (e) => (t, r, o) => {
  const n = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, n);
  if (i instanceof Promise)
    throw new ee();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? bt)(i.issues.map((a) => F(a, n, D())))
  } : { success: !0, data: i.value };
}, qi = /* @__PURE__ */ we(E), Se = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((a) => F(a, n, D())))
  } : { success: !0, data: i.value };
}, Yi = /* @__PURE__ */ Se(E), kt = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ie(e)(t, r, n);
}, Nl = /* @__PURE__ */ kt(E), It = (e) => (t, r, o) => Ie(e)(t, r, o), Dl = /* @__PURE__ */ It(E), zt = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return ze(e)(t, r, n);
}, Pl = /* @__PURE__ */ zt(E), wt = (e) => async (t, r, o) => ze(e)(t, r, o), Zl = /* @__PURE__ */ wt(E), St = (e) => (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return we(e)(t, r, n);
}, Tl = /* @__PURE__ */ St(E), jt = (e) => (t, r, o) => we(e)(t, r, o), El = /* @__PURE__ */ jt(E), xt = (e) => async (t, r, o) => {
  const n = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Se(e)(t, r, n);
}, Al = /* @__PURE__ */ xt(E), Ot = (e) => async (t, r, o) => Se(e)(t, r, o), Cl = /* @__PURE__ */ Ot(E), Hi = /^[cC][^\s-]{8,}$/, Qi = /^[0-9a-z]+$/, eo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, no = /^[0-9a-vA-V]{20}$/, to = /^[A-Za-z0-9]{27}$/, ro = /^[a-zA-Z0-9_-]{21}$/, io = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ll = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, oo = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, le = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Rl = /* @__PURE__ */ le(4), Fl = /* @__PURE__ */ le(6), Jl = /* @__PURE__ */ le(7), ao = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Gl = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, uo = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Vl = uo, Wl = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Kl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function co() {
  return new RegExp(Kl, "u");
}
const lo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, so = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, mo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, fo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, po = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ut = /^[A-Za-z0-9_-]*$/, Nt = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, vo = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, go = /^\+(?:[0-9]){6,14}[0-9]$/, ho = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", $o = /* @__PURE__ */ new RegExp(`^${ho}$`);
function bo(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function _o(e) {
  return new RegExp(`^${bo(e)}$`);
}
function yo(e) {
  const t = bo({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ho}T(?:${o})$`);
}
const ko = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Io = /^-?\d+n?$/, zo = /^-?\d+$/, wo = /^-?\d+(?:\.\d+)?/, So = /^(?:true|false)$/i, jo = /^null$/i, xo = /^undefined$/i, Oo = /^[^A-Z]*$/, Uo = /^[^a-z]*$/, No = /^[0-9a-fA-F]*$/;
function je(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function xe(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const Bl = /^[0-9a-fA-F]{32}$/, Xl = /* @__PURE__ */ je(22, "=="), ql = /* @__PURE__ */ xe(22), Yl = /^[0-9a-fA-F]{40}$/, Hl = /* @__PURE__ */ je(27, "="), Ql = /* @__PURE__ */ xe(27), es = /^[0-9a-fA-F]{64}$/, ns = /* @__PURE__ */ je(43, "="), ts = /* @__PURE__ */ xe(43), rs = /^[0-9a-fA-F]{96}$/, is = /* @__PURE__ */ je(64, ""), os = /* @__PURE__ */ xe(64), as = /^[0-9a-fA-F]{128}$/, us = /* @__PURE__ */ je(86, "=="), cs = /* @__PURE__ */ xe(86), sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: po,
  base64url: Ut,
  bigint: Io,
  boolean: So,
  browserEmail: Wl,
  cidrv4: mo,
  cidrv6: fo,
  cuid: Hi,
  cuid2: Qi,
  date: $o,
  datetime: yo,
  domain: vo,
  duration: io,
  e164: go,
  email: ao,
  emoji: co,
  extendedDuration: Ll,
  guid: oo,
  hex: No,
  hostname: Nt,
  html5Email: Ml,
  idnEmail: Vl,
  integer: zo,
  ipv4: lo,
  ipv6: so,
  ksuid: to,
  lowercase: Oo,
  md5_base64: Xl,
  md5_base64url: ql,
  md5_hex: Bl,
  nanoid: ro,
  null: jo,
  number: wo,
  rfc5322Email: Gl,
  sha1_base64: Hl,
  sha1_base64url: Ql,
  sha1_hex: Yl,
  sha256_base64: ns,
  sha256_base64url: ts,
  sha256_hex: es,
  sha384_base64: is,
  sha384_base64url: os,
  sha384_hex: rs,
  sha512_base64: us,
  sha512_base64url: cs,
  sha512_hex: as,
  string: ko,
  time: _o,
  ulid: eo,
  undefined: xo,
  unicodeEmail: uo,
  uppercase: Uo,
  uuid: le,
  uuid4: Rl,
  uuid6: Fl,
  uuid7: Jl,
  xid: no
}, Symbol.toStringTag, { value: "Module" })), U = /* @__PURE__ */ c("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Do = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Dt = /* @__PURE__ */ c("$ZodCheckLessThan", (e, t) => {
  U.init(e, t);
  const r = Do[typeof t.value];
  e._zod.onattach.push((o) => {
    const n = o._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Pt = /* @__PURE__ */ c("$ZodCheckGreaterThan", (e, t) => {
  U.init(e, t);
  const r = Do[typeof t.value];
  e._zod.onattach.push((o) => {
    const n = o._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Po = /* @__PURE__ */ c("$ZodCheckMultipleOf", (e, t) => {
  U.init(e, t), e._zod.onattach.push((r) => {
    var o;
    (o = r._zod.bag).multipleOf ?? (o.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Pi(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Zo = /* @__PURE__ */ c("$ZodCheckNumberFormat", (e, t) => {
  U.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), o = r ? "int" : "number", [n, i] = Ai[t.format];
  e._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.format = t.format, u.minimum = n, u.maximum = i, r && (u.pattern = zo);
  }), e._zod.check = (a) => {
    const u = a.value;
    if (r) {
      if (!Number.isInteger(u)) {
        a.issues.push({
          expected: o,
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
          origin: o,
          continue: !t.abort
        }) : a.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
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
}), To = /* @__PURE__ */ c("$ZodCheckBigIntFormat", (e, t) => {
  U.init(e, t);
  const [r, o] = Ci[t.format];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, i.minimum = r, i.maximum = o;
  }), e._zod.check = (n) => {
    const i = n.value;
    i < r && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), i > o && n.issues.push({
      origin: "bigint",
      input: i,
      code: "too_big",
      maximum: o,
      inst: e
    });
  };
}), Eo = /* @__PURE__ */ c("$ZodCheckMaxSize", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size <= t.maximum || o.issues.push({
      origin: an(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Ao = /* @__PURE__ */ c("$ZodCheckMinSize", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    n.size >= t.minimum || o.issues.push({
      origin: an(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Co = /* @__PURE__ */ c("$ZodCheckSizeEquals", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.size !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.size;
    if (i === t.size)
      return;
    const a = i > t.size;
    o.issues.push({
      origin: an(n),
      ...a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Lo = /* @__PURE__ */ c("$ZodCheckMaxLength", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length <= t.maximum)
      return;
    const a = un(n);
    o.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Ro = /* @__PURE__ */ c("$ZodCheckMinLength", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const n = o.value;
    if (n.length >= t.minimum)
      return;
    const a = un(n);
    o.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Fo = /* @__PURE__ */ c("$ZodCheckLengthEquals", (e, t) => {
  var r;
  U.init(e, t), (r = e._zod.def).when ?? (r.when = (o) => {
    const n = o.value;
    return !ie(n) && n.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (o) => {
    const n = o.value, i = n.length;
    if (i === t.length)
      return;
    const a = un(n), u = i > t.length;
    o.issues.push({
      origin: a,
      ...u ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Oe = /* @__PURE__ */ c("$ZodCheckStringFormat", (e, t) => {
  var r, o;
  U.init(e, t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), Jo = /* @__PURE__ */ c("$ZodCheckRegex", (e, t) => {
  Oe.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Mo = /* @__PURE__ */ c("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Oo), Oe.init(e, t);
}), Go = /* @__PURE__ */ c("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Uo), Oe.init(e, t);
}), Vo = /* @__PURE__ */ c("$ZodCheckIncludes", (e, t) => {
  U.init(e, t);
  const r = K(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = o, e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
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
}), Wo = /* @__PURE__ */ c("$ZodCheckStartsWith", (e, t) => {
  U.init(e, t);
  const r = new RegExp(`^${K(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ko = /* @__PURE__ */ c("$ZodCheckEndsWith", (e, t) => {
  U.init(e, t);
  const r = new RegExp(`.*${K(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((o) => {
    const n = o._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function hi(e, t, r) {
  e.issues.length && t.issues.push(...R(r, e.issues));
}
const Bo = /* @__PURE__ */ c("$ZodCheckProperty", (e, t) => {
  U.init(e, t), e._zod.check = (r) => {
    const o = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (o instanceof Promise)
      return o.then((n) => hi(n, r, t.property));
    hi(o, r, t.property);
  };
}), Xo = /* @__PURE__ */ c("$ZodCheckMimeType", (e, t) => {
  U.init(e, t);
  const r = new Set(t.mime);
  e._zod.onattach.push((o) => {
    o._zod.bag.mime = t.mime;
  }), e._zod.check = (o) => {
    r.has(o.value.type) || o.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: o.value.type,
      inst: e,
      continue: !t.abort
    });
  };
}), qo = /* @__PURE__ */ c("$ZodCheckOverwrite", (e, t) => {
  U.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Yo {
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
    const o = t.split(`
`).filter((a) => a), n = Math.min(...o.map((a) => a.length - a.trimStart().length)), i = o.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of i)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, n = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...r, n.join(`
`));
  }
}
const Ho = {
  major: 4,
  minor: 1,
  patch: 11
}, y = /* @__PURE__ */ c("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ho;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const n of o)
    for (const i of n._zod.onattach)
      i(e);
  if (o.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (a, u, l) => {
      let s = Q(a), p;
      for (const f of u) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(a))
            continue;
        } else if (s)
          continue;
        const b = a.issues.length, g = f._zod.check(a);
        if (g instanceof Promise && l?.async === !1)
          throw new ee();
        if (p || g instanceof Promise)
          p = (p ?? Promise.resolve()).then(async () => {
            await g, a.issues.length !== b && (s || (s = Q(a, b)));
          });
        else {
          if (a.issues.length === b)
            continue;
          s || (s = Q(a, b));
        }
      }
      return p ? p.then(() => a) : a;
    }, i = (a, u, l) => {
      if (Q(a))
        return a.aborted = !0, a;
      const s = n(u, o, l);
      if (s instanceof Promise) {
        if (l.async === !1)
          throw new ee();
        return s.then((p) => e._zod.parse(p, l));
      }
      return e._zod.parse(s, l);
    };
    e._zod.run = (a, u) => {
      if (u.skipChecks)
        return e._zod.parse(a, u);
      if (u.direction === "backward") {
        const s = e._zod.parse({ value: a.value, issues: [] }, { ...u, skipChecks: !0 });
        return s instanceof Promise ? s.then((p) => i(p, a, u)) : i(s, a, u);
      }
      const l = e._zod.parse(a, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new ee();
        return l.then((s) => n(s, o, u));
      }
      return n(l, o, u);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const i = qi(e, n);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Yi(e, n).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Ue = /* @__PURE__ */ c("$ZodString", (e, t) => {
  y.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? ko(e._zod.bag), e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), j = /* @__PURE__ */ c("$ZodStringFormat", (e, t) => {
  Oe.init(e, t), Ue.init(e, t);
}), Qo = /* @__PURE__ */ c("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = oo), j.init(e, t);
}), ea = /* @__PURE__ */ c("$ZodUUID", (e, t) => {
  if (t.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = le(o));
  } else
    t.pattern ?? (t.pattern = le());
  j.init(e, t);
}), na = /* @__PURE__ */ c("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ao), j.init(e, t);
}), ta = /* @__PURE__ */ c("$ZodURL", (e, t) => {
  j.init(e, t), e._zod.check = (r) => {
    try {
      const o = r.value.trim(), n = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Nt.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = n.href : r.value = o;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ra = /* @__PURE__ */ c("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = co()), j.init(e, t);
}), ia = /* @__PURE__ */ c("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ro), j.init(e, t);
}), oa = /* @__PURE__ */ c("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Hi), j.init(e, t);
}), aa = /* @__PURE__ */ c("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Qi), j.init(e, t);
}), ua = /* @__PURE__ */ c("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = eo), j.init(e, t);
}), ca = /* @__PURE__ */ c("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = no), j.init(e, t);
}), la = /* @__PURE__ */ c("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = to), j.init(e, t);
}), sa = /* @__PURE__ */ c("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = yo(t)), j.init(e, t);
}), da = /* @__PURE__ */ c("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = $o), j.init(e, t);
}), ma = /* @__PURE__ */ c("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = _o(t)), j.init(e, t);
}), fa = /* @__PURE__ */ c("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = io), j.init(e, t);
}), pa = /* @__PURE__ */ c("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = lo), j.init(e, t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.format = "ipv4";
  });
}), va = /* @__PURE__ */ c("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = so), j.init(e, t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ga = /* @__PURE__ */ c("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = mo), j.init(e, t);
}), ha = /* @__PURE__ */ c("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = fo), j.init(e, t), e._zod.check = (r) => {
    const o = r.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [n, i] = o;
      if (!i)
        throw new Error();
      const a = Number(i);
      if (`${a}` !== i)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
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
const $a = /* @__PURE__ */ c("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = po), j.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    Zt(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ba(e) {
  if (!Ut.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Zt(r);
}
const _a = /* @__PURE__ */ c("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Ut), j.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    ba(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ya = /* @__PURE__ */ c("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = go), j.init(e, t);
});
function ka(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [o] = r;
    if (!o)
      return !1;
    const n = JSON.parse(atob(o));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Ia = /* @__PURE__ */ c("$ZodJWT", (e, t) => {
  j.init(e, t), e._zod.check = (r) => {
    ka(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), za = /* @__PURE__ */ c("$ZodCustomStringFormat", (e, t) => {
  j.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Tt = /* @__PURE__ */ c("$ZodNumber", (e, t) => {
  y.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? wo, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const n = r.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return r;
    const i = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...i ? { received: i } : {}
    }), r;
  };
}), wa = /* @__PURE__ */ c("$ZodNumber", (e, t) => {
  Zo.init(e, t), Tt.init(e, t);
}), Et = /* @__PURE__ */ c("$ZodBoolean", (e, t) => {
  y.init(e, t), e._zod.pattern = So, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const n = r.value;
    return typeof n == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), At = /* @__PURE__ */ c("$ZodBigInt", (e, t) => {
  y.init(e, t), e._zod.pattern = Io, e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = BigInt(r.value);
      } catch {
      }
    return typeof r.value == "bigint" || r.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Sa = /* @__PURE__ */ c("$ZodBigInt", (e, t) => {
  To.init(e, t), At.init(e, t);
}), ja = /* @__PURE__ */ c("$ZodSymbol", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), xa = /* @__PURE__ */ c("$ZodUndefined", (e, t) => {
  y.init(e, t), e._zod.pattern = xo, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Oa = /* @__PURE__ */ c("$ZodNull", (e, t) => {
  y.init(e, t), e._zod.pattern = jo, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, o) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Ua = /* @__PURE__ */ c("$ZodAny", (e, t) => {
  y.init(e, t), e._zod.parse = (r) => r;
}), Na = /* @__PURE__ */ c("$ZodUnknown", (e, t) => {
  y.init(e, t), e._zod.parse = (r) => r;
}), Da = /* @__PURE__ */ c("$ZodNever", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), Pa = /* @__PURE__ */ c("$ZodVoid", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Za = /* @__PURE__ */ c("$ZodDate", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const n = r.value, i = n instanceof Date;
    return i && !Number.isNaN(n.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: n,
      ...i ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function $i(e, t, r) {
  e.issues.length && t.issues.push(...R(r, e.issues)), t.value[r] = e.value;
}
const Ta = /* @__PURE__ */ c("$ZodArray", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const i = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = t.element._zod.run({
        value: u,
        issues: []
      }, o);
      l instanceof Promise ? i.push(l.then((s) => $i(s, r, a))) : $i(l, r, a);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function Ye(e, t, r, o) {
  e.issues.length && t.issues.push(...R(r, e.issues)), e.value === void 0 ? r in o && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Ea(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const r = Ei(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Aa(e, t, r, o, n, i) {
  const a = [], u = n.keySet, l = n.catchall._zod, s = l.def.type;
  for (const p of Object.keys(t)) {
    if (u.has(p))
      continue;
    if (s === "never") {
      a.push(p);
      continue;
    }
    const f = l.run({ value: t[p], issues: [] }, o);
    f instanceof Promise ? e.push(f.then((b) => Ye(b, r, p, t))) : Ye(f, r, p, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Ca = /* @__PURE__ */ c("$ZodObject", (e, t) => {
  if (y.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const u = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const l = { ...u };
        return Object.defineProperty(t, "shape", {
          value: l
        }), l;
      }
    });
  }
  const o = ke(() => Ea(t));
  I(e._zod, "propValues", () => {
    const u = t.shape, l = {};
    for (const s in u) {
      const p = u[s]._zod;
      if (p.values) {
        l[s] ?? (l[s] = /* @__PURE__ */ new Set());
        for (const f of p.values)
          l[s].add(f);
      }
    }
    return l;
  });
  const n = ue, i = t.catchall;
  let a;
  e._zod.parse = (u, l) => {
    a ?? (a = o.value);
    const s = u.value;
    if (!n(s))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: s,
        inst: e
      }), u;
    u.value = {};
    const p = [], f = a.shape;
    for (const b of a.keys) {
      const d = f[b]._zod.run({ value: s[b], issues: [] }, l);
      d instanceof Promise ? p.push(d.then((h) => Ye(h, u, b, s))) : Ye(d, u, b, s);
    }
    return i ? Aa(p, s, u, l, o.value, e) : p.length ? Promise.all(p).then(() => u) : u;
  };
}), La = /* @__PURE__ */ c("$ZodObjectJIT", (e, t) => {
  Ca.init(e, t);
  const r = e._zod.parse, o = ke(() => Ea(t)), n = (b) => {
    const g = new Yo(["shape", "payload", "ctx"]), d = o.value, h = (S) => {
      const O = ut(S);
      return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`;
    };
    g.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let w = 0;
    for (const S of d.keys)
      $[S] = `key_${w++}`;
    g.write("const newResult = {};");
    for (const S of d.keys) {
      const O = $[S], M = ut(S);
      g.write(`const ${O} = ${h(S)};`), g.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${M}, ...iss.path] : [${M}]
          })));
        }
        
        
        if (${O}.value === undefined) {
          if (${M} in input) {
            newResult[${M}] = undefined;
          }
        } else {
          newResult[${M}] = ${O}.value;
        }
        
      `);
    }
    g.write("payload.value = newResult;"), g.write("return payload;");
    const z = g.compile();
    return (S, O) => z(b, S, O);
  };
  let i;
  const a = ue, u = !Be.jitless, s = u && Zi.value, p = t.catchall;
  let f;
  e._zod.parse = (b, g) => {
    f ?? (f = o.value);
    const d = b.value;
    return a(d) ? u && s && g?.async === !1 && g.jitless !== !0 ? (i || (i = n(t.shape)), b = i(b, g), p ? Aa([], d, b, g, f, e) : b) : r(b, g) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: e
    }), b);
  };
});
function bi(e, t, r, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const n = e.filter((i) => !Q(i));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((i) => i.issues.map((a) => F(a, o, D())))
  }), t);
}
const Ct = /* @__PURE__ */ c("$ZodUnion", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), I(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), I(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), I(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${n.map((i) => rn(i.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (n, i) => {
    if (r)
      return o(n, i);
    let a = !1;
    const u = [];
    for (const l of t.options) {
      const s = l._zod.run({
        value: n.value,
        issues: []
      }, i);
      if (s instanceof Promise)
        u.push(s), a = !0;
      else {
        if (s.issues.length === 0)
          return s;
        u.push(s);
      }
    }
    return a ? Promise.all(u).then((l) => bi(l, n, e, i)) : bi(u, n, e, i);
  };
}), Ra = /* @__PURE__ */ c("$ZodDiscriminatedUnion", (e, t) => {
  Ct.init(e, t);
  const r = e._zod.parse;
  I(e._zod, "propValues", () => {
    const n = {};
    for (const i of t.options) {
      const a = i._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const [u, l] of Object.entries(a)) {
        n[u] || (n[u] = /* @__PURE__ */ new Set());
        for (const s of l)
          n[u].add(s);
      }
    }
    return n;
  });
  const o = ke(() => {
    const n = t.options, i = /* @__PURE__ */ new Map();
    for (const a of n) {
      const u = a._zod.propValues?.[t.discriminator];
      if (!u || u.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
      for (const l of u) {
        if (i.has(l))
          throw new Error(`Duplicate discriminator value "${String(l)}"`);
        i.set(l, a);
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
    const u = o.value.get(a?.[t.discriminator]);
    return u ? u._zod.run(n, i) : t.unionFallback ? r(n, i) : (n.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: a,
      path: [t.discriminator],
      inst: e
    }), n);
  };
}), Fa = /* @__PURE__ */ c("$ZodIntersection", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value, i = t.left._zod.run({ value: n, issues: [] }, o), a = t.right._zod.run({ value: n, issues: [] }, o);
    return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([l, s]) => _i(r, l, s)) : _i(r, i, a);
  };
});
function st(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (ne(e) && ne(t)) {
    const r = Object.keys(t), o = Object.keys(e).filter((i) => r.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of o) {
      const a = st(e[i], t[i]);
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
    const r = [];
    for (let o = 0; o < e.length; o++) {
      const n = e[o], i = t[o], a = st(n, i);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function _i(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Q(e))
    return e;
  const o = st(t.value, r.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
const Lt = /* @__PURE__ */ c("$ZodTuple", (e, t) => {
  y.init(e, t);
  const r = t.items, o = r.length - [...r].reverse().findIndex((n) => n._zod.optin !== "optional");
  e._zod.parse = (n, i) => {
    const a = n.value;
    if (!Array.isArray(a))
      return n.issues.push({
        input: a,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), n;
    n.value = [];
    const u = [];
    if (!t.rest) {
      const s = a.length > r.length, p = a.length < o - 1;
      if (s || p)
        return n.issues.push({
          ...s ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
          input: a,
          inst: e,
          origin: "array"
        }), n;
    }
    let l = -1;
    for (const s of r) {
      if (l++, l >= a.length && l >= o)
        continue;
      const p = s._zod.run({
        value: a[l],
        issues: []
      }, i);
      p instanceof Promise ? u.push(p.then((f) => Me(f, n, l))) : Me(p, n, l);
    }
    if (t.rest) {
      const s = a.slice(r.length);
      for (const p of s) {
        l++;
        const f = t.rest._zod.run({
          value: p,
          issues: []
        }, i);
        f instanceof Promise ? u.push(f.then((b) => Me(b, n, l))) : Me(f, n, l);
      }
    }
    return u.length ? Promise.all(u).then(() => n) : n;
  };
});
function Me(e, t, r) {
  e.issues.length && t.issues.push(...R(r, e.issues)), t.value[r] = e.value;
}
const Ja = /* @__PURE__ */ c("$ZodRecord", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!ne(n))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const i = [];
    if (t.keyType._zod.values) {
      const a = t.keyType._zod.values;
      r.value = {};
      for (const l of a)
        if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
          const s = t.valueType._zod.run({ value: n[l], issues: [] }, o);
          s instanceof Promise ? i.push(s.then((p) => {
            p.issues.length && r.issues.push(...R(l, p.issues)), r.value[l] = p.value;
          })) : (s.issues.length && r.issues.push(...R(l, s.issues)), r.value[l] = s.value);
        }
      let u;
      for (const l in n)
        a.has(l) || (u = u ?? [], u.push(l));
      u && u.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: u
      });
    } else {
      r.value = {};
      for (const a of Reflect.ownKeys(n)) {
        if (a === "__proto__")
          continue;
        const u = t.keyType._zod.run({ value: a, issues: [] }, o);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((s) => F(s, o, D())),
            input: a,
            path: [a],
            inst: e
          }), r.value[u.value] = u.value;
          continue;
        }
        const l = t.valueType._zod.run({ value: n[a], issues: [] }, o);
        l instanceof Promise ? i.push(l.then((s) => {
          s.issues.length && r.issues.push(...R(a, s.issues)), r.value[u.value] = s.value;
        })) : (l.issues.length && r.issues.push(...R(a, l.issues)), r.value[u.value] = l.value);
      }
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
}), Ma = /* @__PURE__ */ c("$ZodMap", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!(n instanceof Map))
      return r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const i = [];
    r.value = /* @__PURE__ */ new Map();
    for (const [a, u] of n) {
      const l = t.keyType._zod.run({ value: a, issues: [] }, o), s = t.valueType._zod.run({ value: u, issues: [] }, o);
      l instanceof Promise || s instanceof Promise ? i.push(Promise.all([l, s]).then(([p, f]) => {
        yi(p, f, r, a, n, e, o);
      })) : yi(l, s, r, a, n, e, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function yi(e, t, r, o, n, i, a) {
  e.issues.length && (qe.has(typeof o) ? r.issues.push(...R(o, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: i,
    issues: e.issues.map((u) => F(u, a, D()))
  })), t.issues.length && (qe.has(typeof o) ? r.issues.push(...R(o, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: i,
    key: o,
    issues: t.issues.map((u) => F(u, a, D()))
  })), r.value.set(e.value, t.value);
}
const Ga = /* @__PURE__ */ c("$ZodSet", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    if (!(n instanceof Set))
      return r.issues.push({
        input: n,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), r;
    const i = [];
    r.value = /* @__PURE__ */ new Set();
    for (const a of n) {
      const u = t.valueType._zod.run({ value: a, issues: [] }, o);
      u instanceof Promise ? i.push(u.then((l) => ki(l, r))) : ki(u, r);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function ki(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const Va = /* @__PURE__ */ c("$ZodEnum", (e, t) => {
  y.init(e, t);
  const r = gt(t.entries), o = new Set(r);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${r.filter((n) => qe.has(typeof n)).map((n) => typeof n == "string" ? K(n) : n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
    const a = n.value;
    return o.has(a) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), n;
  };
}), Wa = /* @__PURE__ */ c("$ZodLiteral", (e, t) => {
  if (y.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? K(r) : r ? K(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const n = r.value;
    return e._zod.values.has(n) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: n,
      inst: e
    }), r;
  };
}), Ka = /* @__PURE__ */ c("$ZodFile", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Ba = /* @__PURE__ */ c("$ZodTransform", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new tn(e.constructor.name);
    const n = t.transform(r.value, r);
    if (o.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (r.value = a, r));
    if (n instanceof Promise)
      throw new ee();
    return r.value = n, r;
  };
});
function Ii(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Xa = /* @__PURE__ */ c("$ZodOptional", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${rn(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, o) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, o);
      return n instanceof Promise ? n.then((i) => Ii(i, r.value)) : Ii(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, o);
  };
}), qa = /* @__PURE__ */ c("$ZodNullable", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${rn(r.source)}|null)$`) : void 0;
  }), I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, o) => r.value === null ? r : t.innerType._zod.run(r, o);
}), Ya = /* @__PURE__ */ c("$ZodDefault", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => zi(i, t)) : zi(n, t);
  };
});
function zi(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ha = /* @__PURE__ */ c("$ZodPrefault", (e, t) => {
  y.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => (o.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, o));
}), Qa = /* @__PURE__ */ c("$ZodNonOptional", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (r, o) => {
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => wi(i, e)) : wi(n, e);
  };
});
function wi(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const eu = /* @__PURE__ */ c("$ZodSuccess", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new tn("ZodSuccess");
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), nu = /* @__PURE__ */ c("$ZodCatch", (e, t) => {
  y.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((a) => F(a, o, D()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((i) => F(i, o, D()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), tu = /* @__PURE__ */ c("$ZodNaN", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), ru = /* @__PURE__ */ c("$ZodPipe", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => Ge(a, t.in, o)) : Ge(i, t.in, o);
    }
    const n = t.in._zod.run(r, o);
    return n instanceof Promise ? n.then((i) => Ge(i, t.out, o)) : Ge(n, t.out, o);
  };
});
function Ge(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Rt = /* @__PURE__ */ c("$ZodCodec", (e, t) => {
  y.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, o) => {
    if ((o.direction || "forward") === "forward") {
      const i = t.in._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => Ve(a, t, o)) : Ve(i, t, o);
    } else {
      const i = t.out._zod.run(r, o);
      return i instanceof Promise ? i.then((a) => Ve(a, t, o)) : Ve(i, t, o);
    }
  };
});
function Ve(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((i) => We(e, i, t.out, r)) : We(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((i) => We(e, i, t.in, r)) : We(e, n, t.in, r);
  }
}
function We(e, t, r, o) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, o);
}
const iu = /* @__PURE__ */ c("$ZodReadonly", (e, t) => {
  y.init(e, t), I(e._zod, "propValues", () => t.innerType._zod.propValues), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(r, o);
    const n = t.innerType._zod.run(r, o);
    return n instanceof Promise ? n.then(Si) : Si(n);
  };
});
function Si(e) {
  return e.value = Object.freeze(e.value), e;
}
const ou = /* @__PURE__ */ c("$ZodTemplateLiteral", (e, t) => {
  y.init(e, t);
  const r = [];
  for (const o of t.parts)
    if (typeof o == "object" && o !== null) {
      if (!o._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...o._zod.traits].shift()}`);
      const n = o._zod.pattern instanceof RegExp ? o._zod.pattern.source : o._zod.pattern;
      if (!n)
        throw new Error(`Invalid template literal part: ${o._zod.traits}`);
      const i = n.startsWith("^") ? 1 : 0, a = n.endsWith("$") ? n.length - 1 : n.length;
      r.push(n.slice(i, a));
    } else if (o === null || Ti.has(typeof o))
      r.push(K(`${o}`));
    else
      throw new Error(`Invalid template literal part: ${o}`);
  e._zod.pattern = new RegExp(`^${r.join("")}$`), e._zod.parse = (o, n) => typeof o.value != "string" ? (o.issues.push({
    input: o.value,
    inst: e,
    expected: "template_literal",
    code: "invalid_type"
  }), o) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(o.value) || o.issues.push({
    input: o.value,
    inst: e,
    code: "invalid_format",
    format: t.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), o);
}), au = /* @__PURE__ */ c("$ZodFunction", (e, t) => (y.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...o) {
    const n = e._def.input ? ct(e._def.input, o) : o, i = Reflect.apply(r, this, n);
    return e._def.output ? ct(e._def.output, i) : i;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...o) {
    const n = e._def.input ? await lt(e._def.input, o) : o, i = await Reflect.apply(r, this, n);
    return e._def.output ? await lt(e._def.output, i) : i;
  };
}, e._zod.parse = (r, o) => typeof r.value != "function" ? (r.issues.push({
  code: "invalid_type",
  expected: "function",
  input: r.value,
  inst: e
}), r) : (e._def.output && e._def.output._zod.def.type === "promise" ? r.value = e.implementAsync(r.value) : r.value = e.implement(r.value), r), e.input = (...r) => {
  const o = e.constructor;
  return Array.isArray(r[0]) ? new o({
    type: "function",
    input: new Lt({
      type: "tuple",
      items: r[0],
      rest: r[1]
    }),
    output: e._def.output
  }) : new o({
    type: "function",
    input: r[0],
    output: e._def.output
  });
}, e.output = (r) => {
  const o = e.constructor;
  return new o({
    type: "function",
    input: e._def.input,
    output: r
  });
}, e)), uu = /* @__PURE__ */ c("$ZodPromise", (e, t) => {
  y.init(e, t), e._zod.parse = (r, o) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, o));
}), cu = /* @__PURE__ */ c("$ZodLazy", (e, t) => {
  y.init(e, t), I(e._zod, "innerType", () => t.getter()), I(e._zod, "pattern", () => e._zod.innerType._zod.pattern), I(e._zod, "propValues", () => e._zod.innerType._zod.propValues), I(e._zod, "optin", () => e._zod.innerType._zod.optin ?? void 0), I(e._zod, "optout", () => e._zod.innerType._zod.optout ?? void 0), e._zod.parse = (r, o) => e._zod.innerType._zod.run(r, o);
}), lu = /* @__PURE__ */ c("$ZodCustom", (e, t) => {
  U.init(e, t), y.init(e, t), e._zod.parse = (r, o) => r, e._zod.check = (r) => {
    const o = r.value, n = t.fn(o);
    if (n instanceof Promise)
      return n.then((i) => ji(i, r, o, e));
    ji(n, r, o, e);
  };
});
function ji(e, t, r, o) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (n.params = o._zod.def.params), t.issues.push(ce(n));
  }
}
const ls = () => {
  const e = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `مدخلات غير مقبولة: يفترض إدخال ${n.expected}، ولكن تم إدخال ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${_(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"` : i.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"` : i.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"` : i.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}` : `${o[i.format] ?? n.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
      case "unrecognized_keys":
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${v(n.keys, "، ")}`;
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
function ss() {
  return {
    localeError: ls()
  };
}
const ds = () => {
  const e = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Yanlış dəyər: gözlənilən ${n.expected}, daxil olan ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${_(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Yanlış mətn: "${i.prefix}" ilə başlamalıdır` : i.format === "ends_with" ? `Yanlış mətn: "${i.suffix}" ilə bitməlidir` : i.format === "includes" ? `Yanlış mətn: "${i.includes}" daxil olmalıdır` : i.format === "regex" ? `Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${v(n.keys, ", ")}`;
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
function ms() {
  return {
    localeError: ds()
  };
}
function xi(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const fs = () => {
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
  const r = (n) => {
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
  }, o = {
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
        return `Няправільны ўвод: чакаўся ${n.expected}, атрымана ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${_(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${v(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const u = Number(n.maximum), l = xi(u, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${i}${n.maximum.toString()} ${l}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const u = Number(n.minimum), l = xi(u, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${i}${n.minimum.toString()} ${l}`;
        }
        return `Занадта малы: чакалася, што ${n.origin} павінна быць ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${i.prefix}"` : i.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${i.suffix}"` : i.format === "includes" ? `Няправільны радок: павінен змяшчаць "${i.includes}"` : i.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${i.pattern}` : `Няправільны ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${v(n.keys, ", ")}`;
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
function ps() {
  return {
    localeError: fs()
  };
}
const vs = () => {
  const e = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Tipus invàlid: s'esperava ${n.expected}, s'ha rebut ${r(n.input)}`;
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${_(n.values[0])}` : `Opció invàlida: s'esperava una de ${v(n.values, " o ")}`;
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
        return i.format === "starts_with" ? `Format invàlid: ha de començar amb "${i.prefix}"` : i.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${i.suffix}"` : i.format === "includes" ? `Format invàlid: ha d'incloure "${i.includes}"` : i.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${i.pattern}` : `Format invàlid per a ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function gs() {
  return {
    localeError: vs()
  };
}
const hs = () => {
  const e = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Neplatný vstup: očekáváno ${n.expected}, obdrženo ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${_(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${i.prefix}"` : i.format === "ends_with" ? `Neplatný řetězec: musí končit na "${i.suffix}"` : i.format === "includes" ? `Neplatný řetězec: musí obsahovat "${i.includes}"` : i.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${i.pattern}` : `Neplatný formát ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${v(n.keys, ", ")}`;
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
function $s() {
  return {
    localeError: hs()
  };
}
const bs = () => {
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
  function r(a) {
    return e[a] ?? null;
  }
  function o(a) {
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
        return `Ugyldigt input: forventede ${o(a.expected)}, fik ${o(n(a.input))}`;
      case "invalid_value":
        return a.values.length === 1 ? `Ugyldig værdi: forventede ${_(a.values[0])}` : `Ugyldigt valg: forventede en af følgende ${v(a.values, "|")}`;
      case "too_big": {
        const u = a.inclusive ? "<=" : "<", l = r(a.origin), s = o(a.origin);
        return l ? `For stor: forventede ${s ?? "value"} ${l.verb} ${u} ${a.maximum.toString()} ${l.unit ?? "elementer"}` : `For stor: forventede ${s ?? "value"} havde ${u} ${a.maximum.toString()}`;
      }
      case "too_small": {
        const u = a.inclusive ? ">=" : ">", l = r(a.origin), s = o(a.origin);
        return l ? `For lille: forventede ${s} ${l.verb} ${u} ${a.minimum.toString()} ${l.unit}` : `For lille: forventede ${s} havde ${u} ${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = a;
        return u.format === "starts_with" ? `Ugyldig streng: skal starte med "${u.prefix}"` : u.format === "ends_with" ? `Ugyldig streng: skal ende med "${u.suffix}"` : u.format === "includes" ? `Ugyldig streng: skal indeholde "${u.includes}"` : u.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${u.pattern}` : `Ugyldig ${i[u.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${a.divisor}`;
      case "unrecognized_keys":
        return `${a.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${v(a.keys, ", ")}`;
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
function _s() {
  return {
    localeError: bs()
  };
}
const ys = () => {
  const e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Ungültige Eingabe: erwartet ${n.expected}, erhalten ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${_(n.values[0])}` : `Ungültige Option: erwartet eine von ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Ungültiger String: muss mit "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ungültiger String: muss mit "${i.suffix}" enden` : i.format === "includes" ? `Ungültiger String: muss "${i.includes}" enthalten` : i.format === "regex" ? `Ungültiger String: muss dem Muster ${i.pattern} entsprechen` : `Ungültig: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${v(n.keys, ", ")}`;
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
function ks() {
  return {
    localeError: ys()
  };
}
const Is = (e) => {
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
}, zs = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Invalid input: expected ${o.expected}, received ${Is(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Invalid input: expected ${_(o.values[0])}` : `Invalid option: expected one of ${v(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Too big: expected ${o.origin ?? "value"} to have ${n}${o.maximum.toString()} ${i.unit ?? "elements"}` : `Too big: expected ${o.origin ?? "value"} to be ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Too small: expected ${o.origin} to have ${n}${o.minimum.toString()} ${i.unit}` : `Too small: expected ${o.origin} to be ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Invalid string: must start with "${n.prefix}"` : n.format === "ends_with" ? `Invalid string: must end with "${n.suffix}"` : n.format === "includes" ? `Invalid string: must include "${n.includes}"` : n.format === "regex" ? `Invalid string: must match pattern ${n.pattern}` : `Invalid ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${o.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${o.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${o.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function su() {
  return {
    localeError: zs()
  };
}
const ws = (e) => {
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
}, Ss = () => {
  const e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${o.expected}, riceviĝis ${ws(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Nevalida enigo: atendiĝis ${_(o.values[0])}` : `Nevalida opcio: atendiĝis unu el ${v(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Tro granda: atendiĝis ke ${o.origin ?? "valoro"} havu ${n}${o.maximum.toString()} ${i.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${o.origin ?? "valoro"} havu ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Tro malgranda: atendiĝis ke ${o.origin} havu ${n}${o.minimum.toString()} ${i.unit}` : `Tro malgranda: atendiĝis ke ${o.origin} estu ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"` : n.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${n.suffix}"` : n.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${n.includes}"` : n.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}` : `Nevalida ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${o.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${o.keys.length > 1 ? "j" : ""} ŝlosilo${o.keys.length > 1 ? "j" : ""}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${o.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${o.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function js() {
  return {
    localeError: Ss()
  };
}
const xs = () => {
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
  function r(a) {
    return e[a] ?? null;
  }
  function o(a) {
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
        return `Entrada inválida: se esperaba ${o(a.expected)}, recibido ${o(n(a.input))}`;
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Entrada inválida: se esperaba ${_(a.values[0])}` : `Opción inválida: se esperaba una de ${v(a.values, "|")}`;
      case "too_big": {
        const u = a.inclusive ? "<=" : "<", l = r(a.origin), s = o(a.origin);
        return l ? `Demasiado grande: se esperaba que ${s ?? "valor"} tuviera ${u}${a.maximum.toString()} ${l.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${s ?? "valor"} fuera ${u}${a.maximum.toString()}`;
      }
      case "too_small": {
        const u = a.inclusive ? ">=" : ">", l = r(a.origin), s = o(a.origin);
        return l ? `Demasiado pequeño: se esperaba que ${s} tuviera ${u}${a.minimum.toString()} ${l.unit}` : `Demasiado pequeño: se esperaba que ${s} fuera ${u}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = a;
        return u.format === "starts_with" ? `Cadena inválida: debe comenzar con "${u.prefix}"` : u.format === "ends_with" ? `Cadena inválida: debe terminar en "${u.suffix}"` : u.format === "includes" ? `Cadena inválida: debe incluir "${u.includes}"` : u.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${u.pattern}` : `Inválido ${i[u.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${a.divisor}`;
      case "unrecognized_keys":
        return `Llave${a.keys.length > 1 ? "s" : ""} desconocida${a.keys.length > 1 ? "s" : ""}: ${v(a.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${o(a.origin)}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${o(a.origin)}`;
      default:
        return "Entrada inválida";
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
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `ورودی نامعتبر: می‌بایست ${n.expected} می‌بود، ${r(n.input)} دریافت شد`;
      case "invalid_value":
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${_(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${v(n.values, "|")} می‌بود`;
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
        return i.format === "starts_with" ? `رشته نامعتبر: باید با "${i.prefix}" شروع شود` : i.format === "ends_with" ? `رشته نامعتبر: باید با "${i.suffix}" تمام شود` : i.format === "includes" ? `رشته نامعتبر: باید شامل "${i.includes}" باشد` : i.format === "regex" ? `رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد` : `${o[i.format] ?? n.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${v(n.keys, ", ")}`;
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
function Ns() {
  return {
    localeError: Us()
  };
}
const Ds = () => {
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
  const r = (n) => {
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
  }, o = {
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
        return `Virheellinen tyyppi: odotettiin ${n.expected}, oli ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${_(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${i.prefix}"` : i.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${i.suffix}"` : i.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${i.includes}"` : i.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}` : `Virheellinen ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${v(n.keys, ", ")}`;
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
function Ps() {
  return {
    localeError: Ds()
  };
}
const Zs = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Entrée invalide : ${n.expected} attendu, ${r(n.input)} reçu`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : ${_(n.values[0])} attendu` : `Option invalide : une valeur parmi ${v(n.values, "|")} attendue`;
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
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${i.pattern}` : `${o[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${v(n.keys, ", ")}`;
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
function Ts() {
  return {
    localeError: Zs()
  };
}
const Es = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Entrée invalide : attendu ${n.expected}, reçu ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : attendu ${_(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Chaîne invalide : doit commencer par "${i.prefix}"` : i.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${i.suffix}"` : i.format === "includes" ? `Chaîne invalide : doit inclure "${i.includes}"` : i.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${i.pattern}` : `${o[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${v(n.keys, ", ")}`;
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
function As() {
  return {
    localeError: Es()
  };
}
const Cs = () => {
  const e = {
    string: { unit: "אותיות", verb: "לכלול" },
    file: { unit: "בייטים", verb: "לכלול" },
    array: { unit: "פריטים", verb: "לכלול" },
    set: { unit: "פריטים", verb: "לכלול" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
    regex: "קלט",
    email: "כתובת אימייל",
    url: "כתובת רשת",
    emoji: "אימוג'י",
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
    datetime: "תאריך וזמן ISO",
    date: "תאריך ISO",
    time: "זמן ISO",
    duration: "משך זמן ISO",
    ipv4: "כתובת IPv4",
    ipv6: "כתובת IPv6",
    cidrv4: "טווח IPv4",
    cidrv6: "טווח IPv6",
    base64: "מחרוזת בבסיס 64",
    base64url: "מחרוזת בבסיס 64 לכתובות רשת",
    json_string: "מחרוזת JSON",
    e164: "מספר E.164",
    jwt: "JWT",
    template_literal: "קלט"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${n.expected}, התקבל ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `קלט לא תקין: צריך ${_(n.values[0])}` : `קלט לא תקין: צריך אחת מהאפשרויות  ${v(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `גדול מדי: ${n.origin ?? "value"} צריך להיות ${i}${n.maximum.toString()} ${a.unit ?? "elements"}` : `גדול מדי: ${n.origin ?? "value"} צריך להיות ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `קטן מדי: ${n.origin} צריך להיות ${i}${n.minimum.toString()} ${a.unit}` : `קטן מדי: ${n.origin} צריך להיות ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `מחרוזת לא תקינה: חייבת להתחיל ב"${i.prefix}"` : i.format === "ends_with" ? `מחרוזת לא תקינה: חייבת להסתיים ב "${i.suffix}"` : i.format === "includes" ? `מחרוזת לא תקינה: חייבת לכלול "${i.includes}"` : i.format === "regex" ? `מחרוזת לא תקינה: חייבת להתאים לתבנית ${i.pattern}` : `${o[i.format] ?? n.format} לא תקין`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${n.divisor}`;
      case "unrecognized_keys":
        return `מפתח${n.keys.length > 1 ? "ות" : ""} לא מזוה${n.keys.length > 1 ? "ים" : "ה"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${n.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${n.origin}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function Ls() {
  return {
    localeError: Cs()
  };
}
const Rs = () => {
  const e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Érvénytelen bemenet: a várt érték ${n.expected}, a kapott érték ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${_(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie` : i.format === "ends_with" ? `Érvénytelen string: "${i.suffix}" értékkel kell végződnie` : i.format === "includes" ? `Érvénytelen string: "${i.includes}" értéket kell tartalmaznia` : i.format === "regex" ? `Érvénytelen string: ${i.pattern} mintának kell megfelelnie` : `Érvénytelen ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function Fs() {
  return {
    localeError: Rs()
  };
}
const Js = () => {
  const e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Input tidak valid: diharapkan ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${_(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak valid: harus menyertakan "${i.includes}"` : i.format === "regex" ? `String tidak valid: harus sesuai pola ${i.pattern}` : `${o[i.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function Ms() {
  return {
    localeError: Js()
  };
}
const Gs = (e) => {
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
}, Vs = () => {
  const e = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Rangt gildi: Þú slóst inn ${Gs(o.input)} þar sem á að vera ${o.expected}`;
      case "invalid_value":
        return o.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${_(o.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${v(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Of stórt: gert er ráð fyrir að ${o.origin ?? "gildi"} hafi ${n}${o.maximum.toString()} ${i.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${o.origin ?? "gildi"} sé ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Of lítið: gert er ráð fyrir að ${o.origin} hafi ${n}${o.minimum.toString()} ${i.unit}` : `Of lítið: gert er ráð fyrir að ${o.origin} sé ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${n.prefix}"` : n.format === "ends_with" ? `Ógildur strengur: verður að enda á "${n.suffix}"` : n.format === "includes" ? `Ógildur strengur: verður að innihalda "${n.includes}"` : n.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${n.pattern}` : `Rangt ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${o.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${o.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${o.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${o.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function Ws() {
  return {
    localeError: Vs()
  };
}
const Ks = () => {
  const e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Input non valido: atteso ${n.expected}, ricevuto ${r(n.input)}`;
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${_(n.values[0])}` : `Opzione non valida: atteso uno tra ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Stringa non valida: deve iniziare con "${i.prefix}"` : i.format === "ends_with" ? `Stringa non valida: deve terminare con "${i.suffix}"` : i.format === "includes" ? `Stringa non valida: deve includere "${i.includes}"` : i.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${i.pattern}` : `Invalid ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${v(n.keys, ", ")}`;
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
function Bs() {
  return {
    localeError: Ks()
  };
}
const Xs = () => {
  const e = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `無効な入力: ${n.expected}が期待されましたが、${r(n.input)}が入力されました`;
      case "invalid_value":
        return n.values.length === 1 ? `無効な入力: ${_(n.values[0])}が期待されました` : `無効な選択: ${v(n.values, "、")}のいずれかである必要があります`;
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
        return i.format === "starts_with" ? `無効な文字列: "${i.prefix}"で始まる必要があります` : i.format === "ends_with" ? `無効な文字列: "${i.suffix}"で終わる必要があります` : i.format === "includes" ? `無効な文字列: "${i.includes}"を含む必要があります` : i.format === "regex" ? `無効な文字列: パターン${i.pattern}に一致する必要があります` : `無効な${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${n.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${v(n.keys, "、")}`;
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
function qs() {
  return {
    localeError: Xs()
  };
}
const Ys = (e) => {
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
}, Hs = () => {
  const e = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `არასწორი შეყვანა: მოსალოდნელი ${o.expected}, მიღებული ${Ys(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${_(o.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${v(o.values, "|")}-დან`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `ზედმეტად დიდი: მოსალოდნელი ${o.origin ?? "მნიშვნელობა"} ${i.verb} ${n}${o.maximum.toString()} ${i.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${o.origin ?? "მნიშვნელობა"} იყოს ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `ზედმეტად პატარა: მოსალოდნელი ${o.origin} ${i.verb} ${n}${o.minimum.toString()} ${i.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${o.origin} იყოს ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${n.prefix}"-ით` : n.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${n.suffix}"-ით` : n.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${n.includes}"-ს` : n.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}` : `არასწორი ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${o.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${o.keys.length > 1 ? "ები" : "ი"}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${o.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${o.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function Qs() {
  return {
    localeError: Hs()
  };
}
const ed = () => {
  const e = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${n.expected} ប៉ុន្តែទទួលបាន ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"` : i.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"` : i.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"` : i.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}` : `មិនត្រឹមត្រូវ៖ ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${v(n.keys, ", ")}`;
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
function du() {
  return {
    localeError: ed()
  };
}
function nd() {
  return du();
}
const td = () => {
  const e = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `잘못된 입력: 예상 타입은 ${n.expected}, 받은 타입은 ${r(n.input)}입니다`;
      case "invalid_value":
        return n.values.length === 1 ? `잘못된 입력: 값은 ${_(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${v(n.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const i = n.inclusive ? "이하" : "미만", a = i === "미만" ? "이어야 합니다" : "여야 합니다", u = t(n.origin), l = u?.unit ?? "요소";
        return u ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${l} ${i}${a}` : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${i}${a}`;
      }
      case "too_small": {
        const i = n.inclusive ? "이상" : "초과", a = i === "이상" ? "이어야 합니다" : "여야 합니다", u = t(n.origin), l = u?.unit ?? "요소";
        return u ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${l} ${i}${a}` : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${i}${a}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다` : i.format === "ends_with" ? `잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다` : i.format === "includes" ? `잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다` : i.format === "regex" ? `잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다` : `잘못된 ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${v(n.keys, ", ")}`;
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
function rd() {
  return {
    localeError: td()
  };
}
const id = (e) => he(typeof e, e), he = (e, t = void 0) => {
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
}, ve = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Oi(e) {
  const t = Math.abs(e), r = t % 10, o = t % 100;
  return o >= 11 && o <= 19 || r === 0 ? "many" : r === 1 ? "one" : "few";
}
const od = () => {
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
  function t(o, n, i, a) {
    const u = e[o] ?? null;
    return u === null ? u : {
      unit: u.unit[n],
      verb: u.verb[a][i ? "inclusive" : "notInclusive"]
    };
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Gautas tipas ${id(o.input)}, o tikėtasi - ${he(o.expected)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Privalo būti ${_(o.values[0])}` : `Privalo būti vienas iš ${v(o.values, "|")} pasirinkimų`;
      case "too_big": {
        const n = he(o.origin), i = t(o.origin, Oi(Number(o.maximum)), o.inclusive ?? !1, "smaller");
        if (i?.verb)
          return `${ve(n ?? o.origin ?? "reikšmė")} ${i.verb} ${o.maximum.toString()} ${i.unit ?? "elementų"}`;
        const a = o.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${ve(n ?? o.origin ?? "reikšmė")} turi būti ${a} ${o.maximum.toString()} ${i?.unit}`;
      }
      case "too_small": {
        const n = he(o.origin), i = t(o.origin, Oi(Number(o.minimum)), o.inclusive ?? !1, "bigger");
        if (i?.verb)
          return `${ve(n ?? o.origin ?? "reikšmė")} ${i.verb} ${o.minimum.toString()} ${i.unit ?? "elementų"}`;
        const a = o.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${ve(n ?? o.origin ?? "reikšmė")} turi būti ${a} ${o.minimum.toString()} ${i?.unit}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Eilutė privalo prasidėti "${n.prefix}"` : n.format === "ends_with" ? `Eilutė privalo pasibaigti "${n.suffix}"` : n.format === "includes" ? `Eilutė privalo įtraukti "${n.includes}"` : n.format === "regex" ? `Eilutė privalo atitikti ${n.pattern}` : `Neteisingas ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${o.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${o.keys.length > 1 ? "i" : "as"} rakt${o.keys.length > 1 ? "ai" : "as"}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const n = he(o.origin);
        return `${ve(n ?? o.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function ad() {
  return {
    localeError: od()
  };
}
const ud = () => {
  const e = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Грешен внес: се очекува ${n.expected}, примено ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${_(n.values[0])}` : `Грешана опција: се очекува една ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Неважечка низа: мора да започнува со "${i.prefix}"` : i.format === "ends_with" ? `Неважечка низа: мора да завршува со "${i.suffix}"` : i.format === "includes" ? `Неважечка низа: мора да вклучува "${i.includes}"` : i.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${i.pattern}` : `Invalid ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${v(n.keys, ", ")}`;
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
function cd() {
  return {
    localeError: ud()
  };
}
const ld = () => {
  const e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Input tidak sah: dijangka ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak sah: dijangka ${_(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${i.prefix}"` : i.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${i.suffix}"` : i.format === "includes" ? `String tidak sah: mesti mengandungi "${i.includes}"` : i.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${i.pattern}` : `${o[i.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${v(n.keys, ", ")}`;
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
function sd() {
  return {
    localeError: ld()
  };
}
const dd = () => {
  const e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Ongeldige invoer: verwacht ${n.expected}, ontving ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${_(n.values[0])}` : `Ongeldige optie: verwacht één van ${v(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Te lang: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} ${a.unit ?? "elementen"} bevat` : `Te lang: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} is`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Te kort: verwacht dat ${n.origin} ${i}${n.minimum.toString()} ${a.unit} bevat` : `Te kort: verwacht dat ${n.origin} ${i}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Ongeldige tekst: moet met "${i.prefix}" beginnen` : i.format === "ends_with" ? `Ongeldige tekst: moet op "${i.suffix}" eindigen` : i.format === "includes" ? `Ongeldige tekst: moet "${i.includes}" bevatten` : i.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}` : `Ongeldig: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function md() {
  return {
    localeError: dd()
  };
}
const fd = () => {
  const e = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Ugyldig input: forventet ${n.expected}, fikk ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${_(n.values[0])}` : `Ugyldig valg: forventet en av ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Ugyldig streng: må starte med "${i.prefix}"` : i.format === "ends_with" ? `Ugyldig streng: må ende med "${i.suffix}"` : i.format === "includes" ? `Ugyldig streng: må inneholde "${i.includes}"` : i.format === "regex" ? `Ugyldig streng: må matche mønsteret ${i.pattern}` : `Ugyldig ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${v(n.keys, ", ")}`;
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
function pd() {
  return {
    localeError: fd()
  };
}
const vd = () => {
  const e = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Fâsit giren: umulan ${n.expected}, alınan ${r(n.input)}`;
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${_(n.values[0])}` : `Fâsit tercih: mûteberler ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Fâsit metin: "${i.prefix}" ile başlamalı.` : i.format === "ends_with" ? `Fâsit metin: "${i.suffix}" ile bitmeli.` : i.format === "includes" ? `Fâsit metin: "${i.includes}" ihtivâ etmeli.` : i.format === "regex" ? `Fâsit metin: ${i.pattern} nakşına uymalı.` : `Fâsit ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function gd() {
  return {
    localeError: vd()
  };
}
const hd = () => {
  const e = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `ناسم ورودي: باید ${n.expected} وای, مګر ${r(n.input)} ترلاسه شو`;
      case "invalid_value":
        return n.values.length === 1 ? `ناسم ورودي: باید ${_(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${v(n.values, "|")} څخه وای`;
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
        return i.format === "starts_with" ? `ناسم متن: باید د "${i.prefix}" سره پیل شي` : i.format === "ends_with" ? `ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي` : i.format === "includes" ? `ناسم متن: باید "${i.includes}" ولري` : i.format === "regex" ? `ناسم متن: باید د ${i.pattern} سره مطابقت ولري` : `${o[i.format] ?? n.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${v(n.keys, ", ")}`;
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
function $d() {
  return {
    localeError: hd()
  };
}
const bd = () => {
  const e = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Nieprawidłowe dane wejściowe: oczekiwano ${n.expected}, otrzymano ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${_(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"` : i.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"` : i.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"` : i.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}` : `Nieprawidłow(y/a/e) ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function _d() {
  return {
    localeError: bd()
  };
}
const yd = () => {
  const e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Tipo inválido: esperado ${n.expected}, recebido ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: esperado ${_(n.values[0])}` : `Opção inválida: esperada uma das ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Texto inválido: deve começar com "${i.prefix}"` : i.format === "ends_with" ? `Texto inválido: deve terminar com "${i.suffix}"` : i.format === "includes" ? `Texto inválido: deve incluir "${i.includes}"` : i.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${i.pattern}` : `${o[i.format] ?? n.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
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
function kd() {
  return {
    localeError: yd()
  };
}
function Ui(e, t, r, o) {
  const n = Math.abs(e), i = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? o : i === 1 ? t : i >= 2 && i <= 4 ? r : o;
}
const Id = () => {
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
  const r = (n) => {
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
  }, o = {
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
        return `Неверный ввод: ожидалось ${n.expected}, получено ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${_(n.values[0])}` : `Неверный вариант: ожидалось одно из ${v(n.values, "|")}`;
      case "too_big": {
        const i = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const u = Number(n.maximum), l = Ui(u, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${i}${n.maximum.toString()} ${l}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        const i = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const u = Number(n.minimum), l = Ui(u, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${i}${n.minimum.toString()} ${l}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = n;
        return i.format === "starts_with" ? `Неверная строка: должна начинаться с "${i.prefix}"` : i.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${i.suffix}"` : i.format === "includes" ? `Неверная строка: должна содержать "${i.includes}"` : i.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${i.pattern}` : `Неверный ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${v(n.keys, ", ")}`;
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
function zd() {
  return {
    localeError: Id()
  };
}
const wd = () => {
  const e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Neveljaven vnos: pričakovano ${n.expected}, prejeto ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${_(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${i.prefix}"` : i.format === "ends_with" ? `Neveljaven niz: mora se končati z "${i.suffix}"` : i.format === "includes" ? `Neveljaven niz: mora vsebovati "${i.includes}"` : i.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${i.pattern}` : `Neveljaven ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${v(n.keys, ", ")}`;
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
function Sd() {
  return {
    localeError: wd()
  };
}
const jd = () => {
  const e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Ogiltig inmatning: förväntat ${n.expected}, fick ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${_(n.values[0])}` : `Ogiltigt val: förväntade en av ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Ogiltig sträng: måste börja med "${i.prefix}"` : i.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${i.suffix}"` : i.format === "includes" ? `Ogiltig sträng: måste innehålla "${i.includes}"` : i.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${i.pattern}"` : `Ogiltig(t) ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${v(n.keys, ", ")}`;
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
function xd() {
  return {
    localeError: jd()
  };
}
const Od = () => {
  const e = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${n.expected}, பெறப்பட்டது ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${v(n.values, "|")} இல் ஒன்று`;
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
        return i.format === "starts_with" ? `தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்` : i.format === "ends_with" ? `தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்` : i.format === "includes" ? `தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்` : i.format === "regex" ? `தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${v(n.keys, ", ")}`;
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
function Ud() {
  return {
    localeError: Od()
  };
}
const Nd = () => {
  const e = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${n.expected} แต่ได้รับ ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${_(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"` : i.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"` : i.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ` : i.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}` : `รูปแบบไม่ถูกต้อง: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${v(n.keys, ", ")}`;
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
function Dd() {
  return {
    localeError: Nd()
  };
}
const Pd = (e) => {
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
}, Zd = () => {
  const e = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const r = {
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
  return (o) => {
    switch (o.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${o.expected}, alınan ${Pd(o.input)}`;
      case "invalid_value":
        return o.values.length === 1 ? `Geçersiz değer: beklenen ${_(o.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${v(o.values, "|")}`;
      case "too_big": {
        const n = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Çok büyük: beklenen ${o.origin ?? "değer"} ${n}${o.maximum.toString()} ${i.unit ?? "öğe"}` : `Çok büyük: beklenen ${o.origin ?? "değer"} ${n}${o.maximum.toString()}`;
      }
      case "too_small": {
        const n = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Çok küçük: beklenen ${o.origin} ${n}${o.minimum.toString()} ${i.unit}` : `Çok küçük: beklenen ${o.origin} ${n}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = o;
        return n.format === "starts_with" ? `Geçersiz metin: "${n.prefix}" ile başlamalı` : n.format === "ends_with" ? `Geçersiz metin: "${n.suffix}" ile bitmeli` : n.format === "includes" ? `Geçersiz metin: "${n.includes}" içermeli` : n.format === "regex" ? `Geçersiz metin: ${n.pattern} desenine uymalı` : `Geçersiz ${r[n.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${o.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${o.keys.length > 1 ? "lar" : ""}: ${v(o.keys, ", ")}`;
      case "invalid_key":
        return `${o.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${o.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
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
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Неправильні вхідні дані: очікується ${n.expected}, отримано ${r(n.input)}`;
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${_(n.values[0])}` : `Неправильна опція: очікується одне з ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${i.prefix}"` : i.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${i.suffix}"` : i.format === "includes" ? `Неправильний рядок: повинен містити "${i.includes}"` : i.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${i.pattern}` : `Неправильний ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${n.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${v(n.keys, ", ")}`;
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
function mu() {
  return {
    localeError: Ed()
  };
}
function Ad() {
  return mu();
}
const Cd = () => {
  const e = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `غلط ان پٹ: ${n.expected} متوقع تھا، ${r(n.input)} موصول ہوا`;
      case "invalid_value":
        return n.values.length === 1 ? `غلط ان پٹ: ${_(n.values[0])} متوقع تھا` : `غلط آپشن: ${v(n.values, "|")} میں سے ایک متوقع تھا`;
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
        return i.format === "starts_with" ? `غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے` : i.format === "ends_with" ? `غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے` : i.format === "includes" ? `غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے` : i.format === "regex" ? `غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے` : `غلط ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${v(n.keys, "، ")}`;
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
function Ld() {
  return {
    localeError: Cd()
  };
}
const Rd = () => {
  const e = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Đầu vào không hợp lệ: mong đợi ${n.expected}, nhận được ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${_(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"` : i.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"` : i.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${i.includes}"` : i.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}` : `${o[i.format] ?? n.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${v(n.keys, ", ")}`;
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
function Fd() {
  return {
    localeError: Rd()
  };
}
const Jd = () => {
  const e = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `无效输入：期望 ${n.expected}，实际接收 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `无效输入：期望 ${_(n.values[0])}` : `无效选项：期望以下之一 ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `无效字符串：必须以 "${i.prefix}" 开头` : i.format === "ends_with" ? `无效字符串：必须以 "${i.suffix}" 结尾` : i.format === "includes" ? `无效字符串：必须包含 "${i.includes}"` : i.format === "regex" ? `无效字符串：必须满足正则表达式 ${i.pattern}` : `无效${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${n.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${v(n.keys, ", ")}`;
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
function Md() {
  return {
    localeError: Jd()
  };
}
const Gd = () => {
  const e = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `無效的輸入值：預期為 ${n.expected}，但收到 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `無效的輸入值：預期為 ${_(n.values[0])}` : `無效的選項：預期為以下其中之一 ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `無效的字串：必須以 "${i.prefix}" 開頭` : i.format === "ends_with" ? `無效的字串：必須以 "${i.suffix}" 結尾` : i.format === "includes" ? `無效的字串：必須包含 "${i.includes}"` : i.format === "regex" ? `無效的字串：必須符合格式 ${i.pattern}` : `無效的 ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${n.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${v(n.keys, "、")}`;
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
function Vd() {
  return {
    localeError: Gd()
  };
}
const Wd = () => {
  const e = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
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
  }, o = {
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
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${n.expected}, àmọ̀ a rí ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${_(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${v(n.values, "|")}`;
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
        return i.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"` : i.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"` : i.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"` : i.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}` : `Aṣìṣe: ${o[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${v(n.keys, ", ")}`;
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
function Kd() {
  return {
    localeError: Wd()
  };
}
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ss,
  az: ms,
  be: ps,
  ca: gs,
  cs: $s,
  da: _s,
  de: ks,
  en: su,
  eo: js,
  es: Os,
  fa: Ns,
  fi: Ps,
  fr: Ts,
  frCA: As,
  he: Ls,
  hu: Fs,
  id: Ms,
  is: Ws,
  it: Bs,
  ja: qs,
  ka: Qs,
  kh: nd,
  km: du,
  ko: rd,
  lt: ad,
  mk: cd,
  ms: sd,
  nl: md,
  no: pd,
  ota: gd,
  pl: _d,
  ps: $d,
  pt: kd,
  ru: zd,
  sl: Sd,
  sv: xd,
  ta: Ud,
  th: Dd,
  tr: Td,
  ua: Ad,
  uk: mu,
  ur: Ld,
  vi: Fd,
  yo: Kd,
  zhCN: Md,
  zhTW: Vd
}, Symbol.toStringTag, { value: "Module" })), Jt = Symbol("ZodOutput"), Mt = Symbol("ZodInput");
class Gt {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const o = r[0];
    if (this._map.set(t, o), o && typeof o == "object" && "id" in o) {
      if (this._idmap.has(o.id))
        throw new Error(`ID ${o.id} already exists in the registry`);
      this._idmap.set(o.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const o = { ...this.get(r) ?? {} };
      delete o.id;
      const n = { ...o, ...this._map.get(t) };
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
const W = /* @__PURE__ */ dn();
function fu(e, t) {
  return new e({
    type: "string",
    ...m(t)
  });
}
function pu(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...m(t)
  });
}
function Vt(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function He(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function Wt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function Kt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...m(t)
  });
}
function Bt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...m(t)
  });
}
function Xt(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...m(t)
  });
}
function mn(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function qt(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function Yt(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function Ht(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function Qt(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function er(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function nr(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function tr(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function rr(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function ir(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function or(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function ar(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function ur(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function cr(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function lr(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
function sr(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...m(t)
  });
}
const dr = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function vu(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...m(t)
  });
}
function gu(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...m(t)
  });
}
function hu(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...m(t)
  });
}
function $u(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...m(t)
  });
}
function bu(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...m(t)
  });
}
function _u(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...m(t)
  });
}
function yu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...m(t)
  });
}
function ku(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...m(t)
  });
}
function Iu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...m(t)
  });
}
function zu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...m(t)
  });
}
function wu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...m(t)
  });
}
function Su(e, t) {
  return new e({
    type: "boolean",
    ...m(t)
  });
}
function ju(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...m(t)
  });
}
function xu(e, t) {
  return new e({
    type: "bigint",
    ...m(t)
  });
}
function Ou(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...m(t)
  });
}
function Uu(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...m(t)
  });
}
function Nu(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...m(t)
  });
}
function Du(e, t) {
  return new e({
    type: "symbol",
    ...m(t)
  });
}
function Pu(e, t) {
  return new e({
    type: "undefined",
    ...m(t)
  });
}
function Zu(e, t) {
  return new e({
    type: "null",
    ...m(t)
  });
}
function Tu(e) {
  return new e({
    type: "any"
  });
}
function Eu(e) {
  return new e({
    type: "unknown"
  });
}
function Au(e, t) {
  return new e({
    type: "never",
    ...m(t)
  });
}
function Cu(e, t) {
  return new e({
    type: "void",
    ...m(t)
  });
}
function Lu(e, t) {
  return new e({
    type: "date",
    ...m(t)
  });
}
function Ru(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...m(t)
  });
}
function Fu(e, t) {
  return new e({
    type: "nan",
    ...m(t)
  });
}
function B(e, t) {
  return new Dt({
    check: "less_than",
    ...m(t),
    value: e,
    inclusive: !1
  });
}
function A(e, t) {
  return new Dt({
    check: "less_than",
    ...m(t),
    value: e,
    inclusive: !0
  });
}
function X(e, t) {
  return new Pt({
    check: "greater_than",
    ...m(t),
    value: e,
    inclusive: !1
  });
}
function P(e, t) {
  return new Pt({
    check: "greater_than",
    ...m(t),
    value: e,
    inclusive: !0
  });
}
function mr(e) {
  return X(0, e);
}
function fr(e) {
  return B(0, e);
}
function pr(e) {
  return A(0, e);
}
function vr(e) {
  return P(0, e);
}
function se(e, t) {
  return new Po({
    check: "multiple_of",
    ...m(t),
    value: e
  });
}
function Ne(e, t) {
  return new Eo({
    check: "max_size",
    ...m(t),
    maximum: e
  });
}
function de(e, t) {
  return new Ao({
    check: "min_size",
    ...m(t),
    minimum: e
  });
}
function fn(e, t) {
  return new Co({
    check: "size_equals",
    ...m(t),
    size: e
  });
}
function De(e, t) {
  return new Lo({
    check: "max_length",
    ...m(t),
    maximum: e
  });
}
function te(e, t) {
  return new Ro({
    check: "min_length",
    ...m(t),
    minimum: e
  });
}
function Pe(e, t) {
  return new Fo({
    check: "length_equals",
    ...m(t),
    length: e
  });
}
function pn(e, t) {
  return new Jo({
    check: "string_format",
    format: "regex",
    ...m(t),
    pattern: e
  });
}
function vn(e) {
  return new Mo({
    check: "string_format",
    format: "lowercase",
    ...m(e)
  });
}
function gn(e) {
  return new Go({
    check: "string_format",
    format: "uppercase",
    ...m(e)
  });
}
function hn(e, t) {
  return new Vo({
    check: "string_format",
    format: "includes",
    ...m(t),
    includes: e
  });
}
function $n(e, t) {
  return new Wo({
    check: "string_format",
    format: "starts_with",
    ...m(t),
    prefix: e
  });
}
function bn(e, t) {
  return new Ko({
    check: "string_format",
    format: "ends_with",
    ...m(t),
    suffix: e
  });
}
function gr(e, t, r) {
  return new Bo({
    check: "property",
    property: e,
    schema: t,
    ...m(r)
  });
}
function _n(e, t) {
  return new Xo({
    check: "mime_type",
    mime: e,
    ...m(t)
  });
}
function H(e) {
  return new qo({
    check: "overwrite",
    tx: e
  });
}
function yn(e) {
  return H((t) => t.normalize(e));
}
function kn() {
  return H((e) => e.trim());
}
function In() {
  return H((e) => e.toLowerCase());
}
function zn() {
  return H((e) => e.toUpperCase());
}
function Ju(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...m(r)
  });
}
function Bd(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...m(r)
  });
}
function Xd(e, t, r, o) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...m(o)
  });
}
function qd(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function Yd(e, t, r, o) {
  const n = r instanceof y, i = n ? o : r, a = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: a,
    ...m(i)
  });
}
function Hd(e, t, r, o) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...m(o)
  });
}
function Qd(e, t, r, o) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...m(o)
  });
}
function em(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...m(r)
  });
}
function nm(e, t, r) {
  const o = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: o,
    ...m(r)
  });
}
function tm(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...m(r)
  });
}
function rm(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...m(r)
  });
}
function Mu(e, t) {
  return new e({
    type: "file",
    ...m(t)
  });
}
function im(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function om(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function am(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function um(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : on(r);
    }
  });
}
function cm(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...m(r)
  });
}
function lm(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function sm(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function dm(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function mm(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function fm(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...m(r)
  });
}
function pm(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function vm(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function Gu(e, t, r) {
  const o = m(r);
  return o.abort ?? (o.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...o
  });
}
function Vu(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...m(r)
  });
}
function Wu(e) {
  const t = Ku((r) => (r.addIssue = (o) => {
    if (typeof o == "string")
      r.issues.push(ce(o, r.value, t._zod.def));
    else {
      const n = o;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(ce(n));
    }
  }, e(r.value, r)));
  return t;
}
function Ku(e, t) {
  const r = new U({
    check: "custom",
    ...m(t)
  });
  return r._zod.check = e, r;
}
function Bu(e, t) {
  const r = m(t);
  let o = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (o = o.map((g) => typeof g == "string" ? g.toLowerCase() : g), n = n.map((g) => typeof g == "string" ? g.toLowerCase() : g));
  const i = new Set(o), a = new Set(n), u = e.Codec ?? Rt, l = e.Boolean ?? Et, s = e.String ?? Ue, p = new s({ type: "string", error: r.error }), f = new l({ type: "boolean", error: r.error }), b = new u({
    type: "pipe",
    in: p,
    out: f,
    transform: ((g, d) => {
      let h = g;
      return r.case !== "sensitive" && (h = h.toLowerCase()), i.has(h) ? !0 : a.has(h) ? !1 : (d.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...i, ...a],
        input: d.value,
        inst: b,
        continue: !1
      }), {});
    }),
    reverseTransform: ((g, d) => g === !0 ? o[0] || "true" : n[0] || "false"),
    error: r.error
  });
  return b;
}
function Ze(e, t, r, o = {}) {
  const n = m(o), i = {
    ...m(o),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (u) => r.test(u),
    ...n
  };
  return r instanceof RegExp && (i.pattern = r), new e(i);
}
class dt {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = t?.metadata ?? W, this.target = t?.target ?? "draft-2020-12", this.unrepresentable = t?.unrepresentable ?? "throw", this.override = t?.override ?? (() => {
    }), this.io = t?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, r = { path: [], schemaPath: [] }) {
    var o;
    const n = t._zod.def, i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, a = this.seen.get(t);
    if (a)
      return a.count++, r.schemaPath.includes(t) && (a.cycle = r.path), a.schema;
    const u = { schema: {}, count: 1, cycle: void 0, path: r.path };
    this.seen.set(t, u);
    const l = t._zod.toJSONSchema?.();
    if (l)
      u.schema = l;
    else {
      const f = {
        ...r,
        schemaPath: [...r.schemaPath, t],
        path: r.path
      }, b = t._zod.parent;
      if (b)
        u.ref = b, this.process(b, f), this.seen.get(b).isParent = !0;
      else {
        const g = u.schema;
        switch (n.type) {
          case "string": {
            const d = g;
            d.type = "string";
            const { minimum: h, maximum: $, format: w, patterns: z, contentEncoding: S } = t._zod.bag;
            if (typeof h == "number" && (d.minLength = h), typeof $ == "number" && (d.maxLength = $), w && (d.format = i[w] ?? w, d.format === "" && delete d.format), S && (d.contentEncoding = S), z && z.size > 0) {
              const O = [...z];
              O.length === 1 ? d.pattern = O[0].source : O.length > 1 && (u.schema.allOf = [
                ...O.map((M) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: M.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = g, { minimum: h, maximum: $, format: w, multipleOf: z, exclusiveMaximum: S, exclusiveMinimum: O } = t._zod.bag;
            typeof w == "string" && w.includes("int") ? d.type = "integer" : d.type = "number", typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = O, d.exclusiveMinimum = !0) : d.exclusiveMinimum = O), typeof h == "number" && (d.minimum = h, typeof O == "number" && this.target !== "draft-4" && (O >= h ? delete d.minimum : delete d.exclusiveMinimum)), typeof S == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = S, d.exclusiveMaximum = !0) : d.exclusiveMaximum = S), typeof $ == "number" && (d.maximum = $, typeof S == "number" && this.target !== "draft-4" && (S <= $ ? delete d.maximum : delete d.exclusiveMaximum)), typeof z == "number" && (d.multipleOf = z);
            break;
          }
          case "boolean": {
            const d = g;
            d.type = "boolean";
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
            this.target === "openapi-3.0" ? (g.type = "string", g.nullable = !0, g.enum = [null]) : g.type = "null";
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
            g.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = g, { minimum: h, maximum: $ } = t._zod.bag;
            typeof h == "number" && (d.minItems = h), typeof $ == "number" && (d.maxItems = $), d.type = "array", d.items = this.process(n.element, { ...f, path: [...f.path, "items"] });
            break;
          }
          case "object": {
            const d = g;
            d.type = "object", d.properties = {};
            const h = n.shape;
            for (const z in h)
              d.properties[z] = this.process(h[z], {
                ...f,
                path: [...f.path, "properties", z]
              });
            const $ = new Set(Object.keys(h)), w = new Set([...$].filter((z) => {
              const S = n.shape[z]._zod;
              return this.io === "input" ? S.optin === void 0 : S.optout === void 0;
            }));
            w.size > 0 && (d.required = Array.from(w)), n.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : n.catchall ? n.catchall && (d.additionalProperties = this.process(n.catchall, {
              ...f,
              path: [...f.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = g, h = n.options.map(($, w) => this.process($, {
              ...f,
              path: [...f.path, "anyOf", w]
            }));
            d.anyOf = h;
            break;
          }
          case "intersection": {
            const d = g, h = this.process(n.left, {
              ...f,
              path: [...f.path, "allOf", 0]
            }), $ = this.process(n.right, {
              ...f,
              path: [...f.path, "allOf", 1]
            }), w = (S) => "allOf" in S && Object.keys(S).length === 1, z = [
              ...w(h) ? h.allOf : [h],
              ...w($) ? $.allOf : [$]
            ];
            d.allOf = z;
            break;
          }
          case "tuple": {
            const d = g;
            d.type = "array";
            const h = this.target === "draft-2020-12" ? "prefixItems" : "items", $ = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", w = n.items.map((M, dl) => this.process(M, {
              ...f,
              path: [...f.path, h, dl]
            })), z = n.rest ? this.process(n.rest, {
              ...f,
              path: [...f.path, $, ...this.target === "openapi-3.0" ? [n.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = w, z && (d.items = z)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: w
            }, z && d.items.anyOf.push(z), d.minItems = w.length, z || (d.maxItems = w.length)) : (d.items = w, z && (d.additionalItems = z));
            const { minimum: S, maximum: O } = t._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof O == "number" && (d.maxItems = O);
            break;
          }
          case "record": {
            const d = g;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(n.keyType, {
              ...f,
              path: [...f.path, "propertyNames"]
            })), d.additionalProperties = this.process(n.valueType, {
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
            const d = g, h = gt(n.entries);
            h.every(($) => typeof $ == "number") && (d.type = "number"), h.every(($) => typeof $ == "string") && (d.type = "string"), d.enum = h;
            break;
          }
          case "literal": {
            const d = g, h = [];
            for (const $ of n.values)
              if ($ === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof $ == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                h.push(Number($));
              } else
                h.push($);
            if (h.length !== 0) if (h.length === 1) {
              const $ = h[0];
              d.type = $ === null ? "null" : typeof $, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [$] : d.const = $;
            } else
              h.every(($) => typeof $ == "number") && (d.type = "number"), h.every(($) => typeof $ == "string") && (d.type = "string"), h.every(($) => typeof $ == "boolean") && (d.type = "string"), h.every(($) => $ === null) && (d.type = "null"), d.enum = h;
            break;
          }
          case "file": {
            const d = g, h = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: $, maximum: w, mime: z } = t._zod.bag;
            $ !== void 0 && (h.minLength = $), w !== void 0 && (h.maxLength = w), z ? z.length === 1 ? (h.contentMediaType = z[0], Object.assign(d, h)) : d.anyOf = z.map((S) => ({ ...h, contentMediaType: S })) : Object.assign(d, h);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(n.innerType, f);
            this.target === "openapi-3.0" ? (u.ref = n.innerType, g.nullable = !0) : g.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, f), u.ref = n.innerType;
            break;
          }
          case "success": {
            const d = g;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(n.innerType, f), u.ref = n.innerType, g.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          }
          case "prefault": {
            this.process(n.innerType, f), u.ref = n.innerType, this.io === "input" && (g._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
            break;
          }
          case "catch": {
            this.process(n.innerType, f), u.ref = n.innerType;
            let d;
            try {
              d = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            g.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = g, h = t._zod.pattern;
            if (!h)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = h.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(d, f), u.ref = d;
            break;
          }
          case "readonly": {
            this.process(n.innerType, f), u.ref = n.innerType, g.readOnly = !0;
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
            const d = t._zod.innerType;
            this.process(d, f), u.ref = d;
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
    const s = this.metadataRegistry.get(t);
    return s && Object.assign(u.schema, s), this.io === "input" && N(t) && (delete u.schema.examples, delete u.schema.default), this.io === "input" && u.schema._prefault && ((o = u.schema).default ?? (o.default = u.schema._prefault)), delete u.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, r) {
    const o = {
      cycles: r?.cycles ?? "ref",
      reused: r?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: r?.external ?? void 0
    }, n = this.seen.get(t);
    if (!n)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (p) => {
      const f = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (o.external) {
        const h = o.external.registry.get(p[0])?.id, $ = o.external.uri ?? ((z) => z);
        if (h)
          return { ref: $(h) };
        const w = p[1].defId ?? p[1].schema.id ?? `schema${this.counter++}`;
        return p[1].defId = w, { defId: w, ref: `${$("__shared")}#/${f}/${w}` };
      }
      if (p[1] === n)
        return { ref: "#" };
      const g = `#/${f}/`, d = p[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: g + d };
    }, a = (p) => {
      if (p[1].schema.$ref)
        return;
      const f = p[1], { ref: b, defId: g } = i(p);
      f.def = { ...f.schema }, g && (f.defId = g);
      const d = f.schema;
      for (const h in d)
        delete d[h];
      d.$ref = b;
    };
    if (o.cycles === "throw")
      for (const p of this.seen.entries()) {
        const f = p[1];
        if (f.cycle)
          throw new Error(`Cycle detected: #/${f.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const p of this.seen.entries()) {
      const f = p[1];
      if (t === p[0]) {
        a(p);
        continue;
      }
      if (o.external) {
        const g = o.external.registry.get(p[0])?.id;
        if (t !== p[0] && g) {
          a(p);
          continue;
        }
      }
      if (this.metadataRegistry.get(p[0])?.id) {
        a(p);
        continue;
      }
      if (f.cycle) {
        a(p);
        continue;
      }
      if (f.count > 1 && o.reused === "ref") {
        a(p);
        continue;
      }
    }
    const u = (p, f) => {
      const b = this.seen.get(p), g = b.def ?? b.schema, d = { ...g };
      if (b.ref === null)
        return;
      const h = b.ref;
      if (b.ref = null, h) {
        u(h, f);
        const $ = this.seen.get(h).schema;
        $.$ref && (f.target === "draft-7" || f.target === "draft-4" || f.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push($)) : (Object.assign(g, $), Object.assign(g, d));
      }
      b.isParent || this.override({
        zodSchema: p,
        jsonSchema: g,
        path: b.path ?? []
      });
    };
    for (const p of [...this.seen.entries()].reverse())
      u(p[0], { target: this.target });
    const l = {};
    if (this.target === "draft-2020-12" ? l.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? l.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? l.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), o.external?.uri) {
      const p = o.external.registry.get(t)?.id;
      if (!p)
        throw new Error("Schema is missing an `id` property");
      l.$id = o.external.uri(p);
    }
    Object.assign(l, n.def);
    const s = o.external?.defs ?? {};
    for (const p of this.seen.entries()) {
      const f = p[1];
      f.def && f.defId && (s[f.defId] = f.def);
    }
    o.external || Object.keys(s).length > 0 && (this.target === "draft-2020-12" ? l.$defs = s : l.definitions = s);
    try {
      return JSON.parse(JSON.stringify(l));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function hr(e, t) {
  if (e instanceof Gt) {
    const o = new dt(t), n = {};
    for (const u of e._idmap.entries()) {
      const [l, s] = u;
      o.process(s);
    }
    const i = {}, a = {
      registry: e,
      uri: t?.uri,
      defs: n
    };
    for (const u of e._idmap.entries()) {
      const [l, s] = u;
      i[l] = o.emit(s, {
        ...t,
        external: a
      });
    }
    if (Object.keys(n).length > 0) {
      const u = o.target === "draft-2020-12" ? "$defs" : "definitions";
      i.__shared = {
        [u]: n
      };
    }
    return { schemas: i };
  }
  const r = new dt(t);
  return r.process(e), r.emit(e, t);
}
function N(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  switch (n.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return N(n.element, r);
    case "object": {
      for (const i in n.shape)
        if (N(n.shape[i], r))
          return !0;
      return !1;
    }
    case "union": {
      for (const i of n.options)
        if (N(i, r))
          return !0;
      return !1;
    }
    case "intersection":
      return N(n.left, r) || N(n.right, r);
    case "tuple": {
      for (const i of n.items)
        if (N(i, r))
          return !0;
      return !!(n.rest && N(n.rest, r));
    }
    case "record":
      return N(n.keyType, r) || N(n.valueType, r);
    case "map":
      return N(n.keyType, r) || N(n.valueType, r);
    case "set":
      return N(n.valueType, r);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return N(n.innerType, r);
    case "lazy":
      return N(n.getter(), r);
    case "default":
      return N(n.innerType, r);
    case "prefault":
      return N(n.innerType, r);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return N(n.in, r) || N(n.out, r);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${n.type}`);
}
const gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: Ua,
  $ZodArray: Ta,
  $ZodAsyncError: ee,
  $ZodBase64: $a,
  $ZodBase64URL: _a,
  $ZodBigInt: At,
  $ZodBigIntFormat: Sa,
  $ZodBoolean: Et,
  $ZodCIDRv4: ga,
  $ZodCIDRv6: ha,
  $ZodCUID: oa,
  $ZodCUID2: aa,
  $ZodCatch: nu,
  $ZodCheck: U,
  $ZodCheckBigIntFormat: To,
  $ZodCheckEndsWith: Ko,
  $ZodCheckGreaterThan: Pt,
  $ZodCheckIncludes: Vo,
  $ZodCheckLengthEquals: Fo,
  $ZodCheckLessThan: Dt,
  $ZodCheckLowerCase: Mo,
  $ZodCheckMaxLength: Lo,
  $ZodCheckMaxSize: Eo,
  $ZodCheckMimeType: Xo,
  $ZodCheckMinLength: Ro,
  $ZodCheckMinSize: Ao,
  $ZodCheckMultipleOf: Po,
  $ZodCheckNumberFormat: Zo,
  $ZodCheckOverwrite: qo,
  $ZodCheckProperty: Bo,
  $ZodCheckRegex: Jo,
  $ZodCheckSizeEquals: Co,
  $ZodCheckStartsWith: Wo,
  $ZodCheckStringFormat: Oe,
  $ZodCheckUpperCase: Go,
  $ZodCodec: Rt,
  $ZodCustom: lu,
  $ZodCustomStringFormat: za,
  $ZodDate: Za,
  $ZodDefault: Ya,
  $ZodDiscriminatedUnion: Ra,
  $ZodE164: ya,
  $ZodEmail: na,
  $ZodEmoji: ra,
  $ZodEncodeError: tn,
  $ZodEnum: Va,
  $ZodError: bt,
  $ZodFile: Ka,
  $ZodFunction: au,
  $ZodGUID: Qo,
  $ZodIPv4: pa,
  $ZodIPv6: va,
  $ZodISODate: da,
  $ZodISODateTime: sa,
  $ZodISODuration: fa,
  $ZodISOTime: ma,
  $ZodIntersection: Fa,
  $ZodJWT: Ia,
  $ZodKSUID: la,
  $ZodLazy: cu,
  $ZodLiteral: Wa,
  $ZodMap: Ma,
  $ZodNaN: tu,
  $ZodNanoID: ia,
  $ZodNever: Da,
  $ZodNonOptional: Qa,
  $ZodNull: Oa,
  $ZodNullable: qa,
  $ZodNumber: Tt,
  $ZodNumberFormat: wa,
  $ZodObject: Ca,
  $ZodObjectJIT: La,
  $ZodOptional: Xa,
  $ZodPipe: ru,
  $ZodPrefault: Ha,
  $ZodPromise: uu,
  $ZodReadonly: iu,
  $ZodRealError: E,
  $ZodRecord: Ja,
  $ZodRegistry: Gt,
  $ZodSet: Ga,
  $ZodString: Ue,
  $ZodStringFormat: j,
  $ZodSuccess: eu,
  $ZodSymbol: ja,
  $ZodTemplateLiteral: ou,
  $ZodTransform: Ba,
  $ZodTuple: Lt,
  $ZodType: y,
  $ZodULID: ua,
  $ZodURL: ta,
  $ZodUUID: ea,
  $ZodUndefined: xa,
  $ZodUnion: Ct,
  $ZodUnknown: Na,
  $ZodVoid: Pa,
  $ZodXID: ca,
  $brand: vt,
  $constructor: c,
  $input: Mt,
  $output: Jt,
  Doc: Yo,
  JSONSchema: gm,
  JSONSchemaGenerator: dt,
  NEVER: pt,
  TimePrecision: dr,
  _any: Tu,
  _array: Ju,
  _base64: ur,
  _base64url: cr,
  _bigint: xu,
  _boolean: Su,
  _catch: sm,
  _check: Ku,
  _cidrv4: or,
  _cidrv6: ar,
  _coercedBigint: Ou,
  _coercedBoolean: ju,
  _coercedDate: Ru,
  _coercedNumber: _u,
  _coercedString: pu,
  _cuid: Ht,
  _cuid2: Qt,
  _custom: Gu,
  _date: Lu,
  _decode: It,
  _decodeAsync: wt,
  _default: um,
  _discriminatedUnion: Xd,
  _e164: lr,
  _email: Vt,
  _emoji: qt,
  _encode: kt,
  _encodeAsync: zt,
  _endsWith: bn,
  _enum: nm,
  _file: Mu,
  _float32: ku,
  _float64: Iu,
  _gt: X,
  _gte: P,
  _guid: He,
  _includes: hn,
  _int: yu,
  _int32: zu,
  _int64: Uu,
  _intersection: qd,
  _ipv4: rr,
  _ipv6: ir,
  _isoDate: gu,
  _isoDateTime: vu,
  _isoDuration: $u,
  _isoTime: hu,
  _jwt: sr,
  _ksuid: tr,
  _lazy: pm,
  _length: Pe,
  _literal: rm,
  _lowercase: vn,
  _lt: B,
  _lte: A,
  _map: Qd,
  _max: A,
  _maxLength: De,
  _maxSize: Ne,
  _mime: _n,
  _min: P,
  _minLength: te,
  _minSize: de,
  _multipleOf: se,
  _nan: Fu,
  _nanoid: Yt,
  _nativeEnum: tm,
  _negative: fr,
  _never: Au,
  _nonnegative: vr,
  _nonoptional: cm,
  _nonpositive: pr,
  _normalize: yn,
  _null: Zu,
  _nullable: am,
  _number: bu,
  _optional: om,
  _overwrite: H,
  _parse: Ie,
  _parseAsync: ze,
  _pipe: dm,
  _positive: mr,
  _promise: vm,
  _property: gr,
  _readonly: mm,
  _record: Hd,
  _refine: Vu,
  _regex: pn,
  _safeDecode: jt,
  _safeDecodeAsync: Ot,
  _safeEncode: St,
  _safeEncodeAsync: xt,
  _safeParse: we,
  _safeParseAsync: Se,
  _set: em,
  _size: fn,
  _startsWith: $n,
  _string: fu,
  _stringFormat: Ze,
  _stringbool: Bu,
  _success: lm,
  _superRefine: Wu,
  _symbol: Du,
  _templateLiteral: fm,
  _toLowerCase: In,
  _toUpperCase: zn,
  _transform: im,
  _trim: kn,
  _tuple: Yd,
  _uint32: wu,
  _uint64: Nu,
  _ulid: er,
  _undefined: Pu,
  _union: Bd,
  _unknown: Eu,
  _uppercase: gn,
  _url: mn,
  _uuid: Wt,
  _uuidv4: Kt,
  _uuidv6: Bt,
  _uuidv7: Xt,
  _void: Cu,
  _xid: nr,
  clone: T,
  config: D,
  decode: Dl,
  decodeAsync: Zl,
  encode: Nl,
  encodeAsync: Pl,
  flattenError: cn,
  formatError: ln,
  globalConfig: Be,
  globalRegistry: W,
  isValidBase64: Zt,
  isValidBase64URL: ba,
  isValidJWT: ka,
  locales: Ft,
  parse: ct,
  parseAsync: lt,
  prettifyError: yt,
  regexes: sn,
  registry: dn,
  safeDecode: El,
  safeDecodeAsync: Cl,
  safeEncode: Tl,
  safeEncodeAsync: Al,
  safeParse: qi,
  safeParseAsync: Yi,
  toDotPath: Xi,
  toJSONSchema: hr,
  treeifyError: _t,
  util: $t,
  version: Ho
}, Symbol.toStringTag, { value: "Module" })), wn = /* @__PURE__ */ c("ZodISODateTime", (e, t) => {
  sa.init(e, t), x.init(e, t);
});
function qu(e) {
  return vu(wn, e);
}
const Sn = /* @__PURE__ */ c("ZodISODate", (e, t) => {
  da.init(e, t), x.init(e, t);
});
function Yu(e) {
  return gu(Sn, e);
}
const jn = /* @__PURE__ */ c("ZodISOTime", (e, t) => {
  ma.init(e, t), x.init(e, t);
});
function Hu(e) {
  return hu(jn, e);
}
const xn = /* @__PURE__ */ c("ZodISODuration", (e, t) => {
  fa.init(e, t), x.init(e, t);
});
function Qu(e) {
  return $u(xn, e);
}
const ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: Sn,
  ZodISODateTime: wn,
  ZodISODuration: xn,
  ZodISOTime: jn,
  date: Yu,
  datetime: qu,
  duration: Qu,
  time: Hu
}, Symbol.toStringTag, { value: "Module" })), nc = (e, t) => {
  bt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => ln(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => cn(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Xe, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Xe, 2);
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
}, tc = c("ZodError", nc), Z = c("ZodError", nc, {
  Parent: Error
}), $r = /* @__PURE__ */ Ie(Z), br = /* @__PURE__ */ ze(Z), _r = /* @__PURE__ */ we(Z), yr = /* @__PURE__ */ Se(Z), kr = /* @__PURE__ */ kt(Z), Ir = /* @__PURE__ */ It(Z), zr = /* @__PURE__ */ zt(Z), wr = /* @__PURE__ */ wt(Z), Sr = /* @__PURE__ */ St(Z), jr = /* @__PURE__ */ jt(Z), xr = /* @__PURE__ */ xt(Z), Or = /* @__PURE__ */ Ot(Z), k = /* @__PURE__ */ c("ZodType", (e, t) => (y.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(V(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
})), e.clone = (r, o) => T(e, r, o), e.brand = () => e, e.register = ((r, o) => (r.add(e, o), e)), e.parse = (r, o) => $r(e, r, o, { callee: e.parse }), e.safeParse = (r, o) => _r(e, r, o), e.parseAsync = async (r, o) => br(e, r, o, { callee: e.parseAsync }), e.safeParseAsync = async (r, o) => yr(e, r, o), e.spa = e.safeParseAsync, e.encode = (r, o) => kr(e, r, o), e.decode = (r, o) => Ir(e, r, o), e.encodeAsync = async (r, o) => zr(e, r, o), e.decodeAsync = async (r, o) => wr(e, r, o), e.safeEncode = (r, o) => Sr(e, r, o), e.safeDecode = (r, o) => jr(e, r, o), e.safeEncodeAsync = async (r, o) => xr(e, r, o), e.safeDecodeAsync = async (r, o) => Or(e, r, o), e.refine = (r, o) => e.check(pi(r, o)), e.superRefine = (r) => e.check(vi(r)), e.overwrite = (r) => e.check(H(r)), e.optional = () => be(e), e.nullable = () => _e(e), e.nullish = () => be(_e(e)), e.nonoptional = (r) => ti(e, r), e.array = () => re(e), e.or = (r) => Yn([e, r]), e.and = (r) => Mr(e, r), e.transform = (r) => ye(e, et(r)), e.default = (r) => Qr(e, r), e.prefault = (r) => ni(e, r), e.catch = (r) => oi(e, r), e.pipe = (r) => ye(e, r), e.readonly = () => ci(e), e.describe = (r) => {
  const o = e.clone();
  return W.add(o, { description: r }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return W.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return W.get(e);
  const o = e.clone();
  return W.add(o, r[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), On = /* @__PURE__ */ c("_ZodString", (e, t) => {
  Ue.init(e, t), k.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...o) => e.check(pn(...o)), e.includes = (...o) => e.check(hn(...o)), e.startsWith = (...o) => e.check($n(...o)), e.endsWith = (...o) => e.check(bn(...o)), e.min = (...o) => e.check(te(...o)), e.max = (...o) => e.check(De(...o)), e.length = (...o) => e.check(Pe(...o)), e.nonempty = (...o) => e.check(te(1, ...o)), e.lowercase = (o) => e.check(vn(o)), e.uppercase = (o) => e.check(gn(o)), e.trim = () => e.check(kn()), e.normalize = (...o) => e.check(yn(...o)), e.toLowerCase = () => e.check(In()), e.toUpperCase = () => e.check(zn());
}), Te = /* @__PURE__ */ c("ZodString", (e, t) => {
  Ue.init(e, t), On.init(e, t), e.email = (r) => e.check(Vt(Un, r)), e.url = (r) => e.check(mn(Ee, r)), e.jwt = (r) => e.check(sr(Vn, r)), e.emoji = (r) => e.check(qt(Nn, r)), e.guid = (r) => e.check(He($e, r)), e.uuid = (r) => e.check(Wt(J, r)), e.uuidv4 = (r) => e.check(Kt(J, r)), e.uuidv6 = (r) => e.check(Bt(J, r)), e.uuidv7 = (r) => e.check(Xt(J, r)), e.nanoid = (r) => e.check(Yt(Dn, r)), e.guid = (r) => e.check(He($e, r)), e.cuid = (r) => e.check(Ht(Pn, r)), e.cuid2 = (r) => e.check(Qt(Zn, r)), e.ulid = (r) => e.check(er(Tn, r)), e.base64 = (r) => e.check(ur(Jn, r)), e.base64url = (r) => e.check(cr(Mn, r)), e.xid = (r) => e.check(nr(En, r)), e.ksuid = (r) => e.check(tr(An, r)), e.ipv4 = (r) => e.check(rr(Cn, r)), e.ipv6 = (r) => e.check(ir(Ln, r)), e.cidrv4 = (r) => e.check(or(Rn, r)), e.cidrv6 = (r) => e.check(ar(Fn, r)), e.e164 = (r) => e.check(lr(Gn, r)), e.datetime = (r) => e.check(qu(r)), e.date = (r) => e.check(Yu(r)), e.time = (r) => e.check(Hu(r)), e.duration = (r) => e.check(Qu(r));
});
function C(e) {
  return fu(Te, e);
}
const x = /* @__PURE__ */ c("ZodStringFormat", (e, t) => {
  j.init(e, t), On.init(e, t);
}), Un = /* @__PURE__ */ c("ZodEmail", (e, t) => {
  na.init(e, t), x.init(e, t);
});
function rc(e) {
  return Vt(Un, e);
}
const $e = /* @__PURE__ */ c("ZodGUID", (e, t) => {
  Qo.init(e, t), x.init(e, t);
});
function ic(e) {
  return He($e, e);
}
const J = /* @__PURE__ */ c("ZodUUID", (e, t) => {
  ea.init(e, t), x.init(e, t);
});
function oc(e) {
  return Wt(J, e);
}
function ac(e) {
  return Kt(J, e);
}
function uc(e) {
  return Bt(J, e);
}
function cc(e) {
  return Xt(J, e);
}
const Ee = /* @__PURE__ */ c("ZodURL", (e, t) => {
  ta.init(e, t), x.init(e, t);
});
function lc(e) {
  return mn(Ee, e);
}
function sc(e) {
  return mn(Ee, {
    protocol: /^https?$/,
    hostname: vo,
    ...m(e)
  });
}
const Nn = /* @__PURE__ */ c("ZodEmoji", (e, t) => {
  ra.init(e, t), x.init(e, t);
});
function dc(e) {
  return qt(Nn, e);
}
const Dn = /* @__PURE__ */ c("ZodNanoID", (e, t) => {
  ia.init(e, t), x.init(e, t);
});
function mc(e) {
  return Yt(Dn, e);
}
const Pn = /* @__PURE__ */ c("ZodCUID", (e, t) => {
  oa.init(e, t), x.init(e, t);
});
function fc(e) {
  return Ht(Pn, e);
}
const Zn = /* @__PURE__ */ c("ZodCUID2", (e, t) => {
  aa.init(e, t), x.init(e, t);
});
function pc(e) {
  return Qt(Zn, e);
}
const Tn = /* @__PURE__ */ c("ZodULID", (e, t) => {
  ua.init(e, t), x.init(e, t);
});
function vc(e) {
  return er(Tn, e);
}
const En = /* @__PURE__ */ c("ZodXID", (e, t) => {
  ca.init(e, t), x.init(e, t);
});
function gc(e) {
  return nr(En, e);
}
const An = /* @__PURE__ */ c("ZodKSUID", (e, t) => {
  la.init(e, t), x.init(e, t);
});
function hc(e) {
  return tr(An, e);
}
const Cn = /* @__PURE__ */ c("ZodIPv4", (e, t) => {
  pa.init(e, t), x.init(e, t);
});
function $c(e) {
  return rr(Cn, e);
}
const Ln = /* @__PURE__ */ c("ZodIPv6", (e, t) => {
  va.init(e, t), x.init(e, t);
});
function bc(e) {
  return ir(Ln, e);
}
const Rn = /* @__PURE__ */ c("ZodCIDRv4", (e, t) => {
  ga.init(e, t), x.init(e, t);
});
function _c(e) {
  return or(Rn, e);
}
const Fn = /* @__PURE__ */ c("ZodCIDRv6", (e, t) => {
  ha.init(e, t), x.init(e, t);
});
function yc(e) {
  return ar(Fn, e);
}
const Jn = /* @__PURE__ */ c("ZodBase64", (e, t) => {
  $a.init(e, t), x.init(e, t);
});
function kc(e) {
  return ur(Jn, e);
}
const Mn = /* @__PURE__ */ c("ZodBase64URL", (e, t) => {
  _a.init(e, t), x.init(e, t);
});
function Ic(e) {
  return cr(Mn, e);
}
const Gn = /* @__PURE__ */ c("ZodE164", (e, t) => {
  ya.init(e, t), x.init(e, t);
});
function zc(e) {
  return lr(Gn, e);
}
const Vn = /* @__PURE__ */ c("ZodJWT", (e, t) => {
  Ia.init(e, t), x.init(e, t);
});
function wc(e) {
  return sr(Vn, e);
}
const pe = /* @__PURE__ */ c("ZodCustomStringFormat", (e, t) => {
  za.init(e, t), x.init(e, t);
});
function Sc(e, t, r = {}) {
  return Ze(pe, e, t, r);
}
function jc(e) {
  return Ze(pe, "hostname", Nt, e);
}
function xc(e) {
  return Ze(pe, "hex", No, e);
}
function Oc(e, t) {
  const r = t?.enc ?? "hex", o = `${e}_${r}`, n = sn[o];
  if (!n)
    throw new Error(`Unrecognized hash format: ${o}`);
  return Ze(pe, o, n, t);
}
const Ae = /* @__PURE__ */ c("ZodNumber", (e, t) => {
  Tt.init(e, t), k.init(e, t), e.gt = (o, n) => e.check(X(o, n)), e.gte = (o, n) => e.check(P(o, n)), e.min = (o, n) => e.check(P(o, n)), e.lt = (o, n) => e.check(B(o, n)), e.lte = (o, n) => e.check(A(o, n)), e.max = (o, n) => e.check(A(o, n)), e.int = (o) => e.check(Qe(o)), e.safe = (o) => e.check(Qe(o)), e.positive = (o) => e.check(X(0, o)), e.nonnegative = (o) => e.check(P(0, o)), e.negative = (o) => e.check(B(0, o)), e.nonpositive = (o) => e.check(A(0, o)), e.multipleOf = (o, n) => e.check(se(o, n)), e.step = (o, n) => e.check(se(o, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Ur(e) {
  return bu(Ae, e);
}
const oe = /* @__PURE__ */ c("ZodNumberFormat", (e, t) => {
  wa.init(e, t), Ae.init(e, t);
});
function Qe(e) {
  return yu(oe, e);
}
function Uc(e) {
  return ku(oe, e);
}
function Nc(e) {
  return Iu(oe, e);
}
function Dc(e) {
  return zu(oe, e);
}
function Pc(e) {
  return wu(oe, e);
}
const Ce = /* @__PURE__ */ c("ZodBoolean", (e, t) => {
  Et.init(e, t), k.init(e, t);
});
function Wn(e) {
  return Su(Ce, e);
}
const Le = /* @__PURE__ */ c("ZodBigInt", (e, t) => {
  At.init(e, t), k.init(e, t), e.gte = (o, n) => e.check(P(o, n)), e.min = (o, n) => e.check(P(o, n)), e.gt = (o, n) => e.check(X(o, n)), e.gte = (o, n) => e.check(P(o, n)), e.min = (o, n) => e.check(P(o, n)), e.lt = (o, n) => e.check(B(o, n)), e.lte = (o, n) => e.check(A(o, n)), e.max = (o, n) => e.check(A(o, n)), e.positive = (o) => e.check(X(BigInt(0), o)), e.negative = (o) => e.check(B(BigInt(0), o)), e.nonpositive = (o) => e.check(A(BigInt(0), o)), e.nonnegative = (o) => e.check(P(BigInt(0), o)), e.multipleOf = (o, n) => e.check(se(o, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function Zc(e) {
  return xu(Le, e);
}
const Kn = /* @__PURE__ */ c("ZodBigIntFormat", (e, t) => {
  Sa.init(e, t), Le.init(e, t);
});
function Tc(e) {
  return Uu(Kn, e);
}
function Ec(e) {
  return Nu(Kn, e);
}
const Nr = /* @__PURE__ */ c("ZodSymbol", (e, t) => {
  ja.init(e, t), k.init(e, t);
});
function Ac(e) {
  return Du(Nr, e);
}
const Dr = /* @__PURE__ */ c("ZodUndefined", (e, t) => {
  xa.init(e, t), k.init(e, t);
});
function Cc(e) {
  return Pu(Dr, e);
}
const Pr = /* @__PURE__ */ c("ZodNull", (e, t) => {
  Oa.init(e, t), k.init(e, t);
});
function Zr(e) {
  return Zu(Pr, e);
}
const Tr = /* @__PURE__ */ c("ZodAny", (e, t) => {
  Ua.init(e, t), k.init(e, t);
});
function Lc() {
  return Tu(Tr);
}
const Er = /* @__PURE__ */ c("ZodUnknown", (e, t) => {
  Na.init(e, t), k.init(e, t);
});
function q() {
  return Eu(Er);
}
const Ar = /* @__PURE__ */ c("ZodNever", (e, t) => {
  Da.init(e, t), k.init(e, t);
});
function Bn(e) {
  return Au(Ar, e);
}
const Cr = /* @__PURE__ */ c("ZodVoid", (e, t) => {
  Pa.init(e, t), k.init(e, t);
});
function Lr(e) {
  return Cu(Cr, e);
}
const Xn = /* @__PURE__ */ c("ZodDate", (e, t) => {
  Za.init(e, t), k.init(e, t), e.min = (o, n) => e.check(P(o, n)), e.max = (o, n) => e.check(A(o, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function Rc(e) {
  return Lu(Xn, e);
}
const Rr = /* @__PURE__ */ c("ZodArray", (e, t) => {
  Ta.init(e, t), k.init(e, t), e.element = t.element, e.min = (r, o) => e.check(te(r, o)), e.nonempty = (r) => e.check(te(1, r)), e.max = (r, o) => e.check(De(r, o)), e.length = (r, o) => e.check(Pe(r, o)), e.unwrap = () => e.element;
});
function re(e, t) {
  return Ju(Rr, e, t);
}
function Fc(e) {
  const t = e._zod.def.shape;
  return Qn(Object.keys(t));
}
const Re = /* @__PURE__ */ c("ZodObject", (e, t) => {
  La.init(e, t), k.init(e, t), I(e, "shape", () => t.shape), e.keyof = () => Qn(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: q() }), e.loose = () => e.clone({ ...e._zod.def, catchall: q() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Bn() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Fi(e, r), e.safeExtend = (r) => Ji(e, r), e.merge = (r) => Mi(e, r), e.pick = (r) => Li(e, r), e.omit = (r) => Ri(e, r), e.partial = (...r) => Gi(nt, e, r[0]), e.required = (...r) => Vi(tt, e, r[0]);
});
function G(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...m(t)
  };
  return new Re(r);
}
function Jc(e, t) {
  return new Re({
    type: "object",
    shape: e,
    catchall: Bn(),
    ...m(t)
  });
}
function Mc(e, t) {
  return new Re({
    type: "object",
    shape: e,
    catchall: q(),
    ...m(t)
  });
}
const qn = /* @__PURE__ */ c("ZodUnion", (e, t) => {
  Ct.init(e, t), k.init(e, t), e.options = t.options;
});
function Yn(e, t) {
  return new qn({
    type: "union",
    options: e,
    ...m(t)
  });
}
const Fr = /* @__PURE__ */ c("ZodDiscriminatedUnion", (e, t) => {
  qn.init(e, t), Ra.init(e, t);
});
function Gc(e, t, r) {
  return new Fr({
    type: "union",
    options: t,
    discriminator: e,
    ...m(r)
  });
}
const Jr = /* @__PURE__ */ c("ZodIntersection", (e, t) => {
  Fa.init(e, t), k.init(e, t);
});
function Mr(e, t) {
  return new Jr({
    type: "intersection",
    left: e,
    right: t
  });
}
const Gr = /* @__PURE__ */ c("ZodTuple", (e, t) => {
  Lt.init(e, t), k.init(e, t), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function Fe(e, t, r) {
  const o = t instanceof y, n = o ? r : t, i = o ? t : null;
  return new Gr({
    type: "tuple",
    items: e,
    rest: i,
    ...m(n)
  });
}
const Hn = /* @__PURE__ */ c("ZodRecord", (e, t) => {
  Ja.init(e, t), k.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Vr(e, t, r) {
  return new Hn({
    type: "record",
    keyType: e,
    valueType: t,
    ...m(r)
  });
}
function Vc(e, t, r) {
  const o = T(e);
  return o._zod.values = void 0, new Hn({
    type: "record",
    keyType: o,
    valueType: t,
    ...m(r)
  });
}
const Wr = /* @__PURE__ */ c("ZodMap", (e, t) => {
  Ma.init(e, t), k.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Wc(e, t, r) {
  return new Wr({
    type: "map",
    keyType: e,
    valueType: t,
    ...m(r)
  });
}
const Kr = /* @__PURE__ */ c("ZodSet", (e, t) => {
  Ga.init(e, t), k.init(e, t), e.min = (...r) => e.check(de(...r)), e.nonempty = (r) => e.check(de(1, r)), e.max = (...r) => e.check(Ne(...r)), e.size = (...r) => e.check(fn(...r));
});
function Kc(e, t) {
  return new Kr({
    type: "set",
    valueType: e,
    ...m(t)
  });
}
const me = /* @__PURE__ */ c("ZodEnum", (e, t) => {
  Va.init(e, t), k.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (o, n) => {
    const i = {};
    for (const a of o)
      if (r.has(a))
        i[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...m(n),
      entries: i
    });
  }, e.exclude = (o, n) => {
    const i = { ...t.entries };
    for (const a of o)
      if (r.has(a))
        delete i[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...m(n),
      entries: i
    });
  };
});
function Qn(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new me({
    type: "enum",
    entries: r,
    ...m(t)
  });
}
function Bc(e, t) {
  return new me({
    type: "enum",
    entries: e,
    ...m(t)
  });
}
const Br = /* @__PURE__ */ c("ZodLiteral", (e, t) => {
  Wa.init(e, t), k.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function en(e, t) {
  return new Br({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...m(t)
  });
}
const Xr = /* @__PURE__ */ c("ZodFile", (e, t) => {
  Ka.init(e, t), k.init(e, t), e.min = (r, o) => e.check(de(r, o)), e.max = (r, o) => e.check(Ne(r, o)), e.mime = (r, o) => e.check(_n(Array.isArray(r) ? r : [r], o));
});
function Xc(e) {
  return Mu(Xr, e);
}
const qr = /* @__PURE__ */ c("ZodTransform", (e, t) => {
  Ba.init(e, t), k.init(e, t), e._zod.parse = (r, o) => {
    if (o.direction === "backward")
      throw new tn(e.constructor.name);
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(ce(i, r.value, t));
      else {
        const a = i;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(ce(a));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((i) => (r.value = i, r)) : (r.value = n, r);
  };
});
function et(e) {
  return new qr({
    type: "transform",
    transform: e
  });
}
const nt = /* @__PURE__ */ c("ZodOptional", (e, t) => {
  Xa.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function be(e) {
  return new nt({
    type: "optional",
    innerType: e
  });
}
const Yr = /* @__PURE__ */ c("ZodNullable", (e, t) => {
  qa.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function _e(e) {
  return new Yr({
    type: "nullable",
    innerType: e
  });
}
function qc(e) {
  return be(_e(e));
}
const Hr = /* @__PURE__ */ c("ZodDefault", (e, t) => {
  Ya.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Qr(e, t) {
  return new Hr({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : on(t);
    }
  });
}
const ei = /* @__PURE__ */ c("ZodPrefault", (e, t) => {
  Ha.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ni(e, t) {
  return new ei({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : on(t);
    }
  });
}
const tt = /* @__PURE__ */ c("ZodNonOptional", (e, t) => {
  Qa.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ti(e, t) {
  return new tt({
    type: "nonoptional",
    innerType: e,
    ...m(t)
  });
}
const ri = /* @__PURE__ */ c("ZodSuccess", (e, t) => {
  eu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Yc(e) {
  return new ri({
    type: "success",
    innerType: e
  });
}
const ii = /* @__PURE__ */ c("ZodCatch", (e, t) => {
  nu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function oi(e, t) {
  return new ii({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const ai = /* @__PURE__ */ c("ZodNaN", (e, t) => {
  tu.init(e, t), k.init(e, t);
});
function Hc(e) {
  return Fu(ai, e);
}
const rt = /* @__PURE__ */ c("ZodPipe", (e, t) => {
  ru.init(e, t), k.init(e, t), e.in = t.in, e.out = t.out;
});
function ye(e, t) {
  return new rt({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const it = /* @__PURE__ */ c("ZodCodec", (e, t) => {
  rt.init(e, t), Rt.init(e, t);
});
function Qc(e, t, r) {
  return new it({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const ui = /* @__PURE__ */ c("ZodReadonly", (e, t) => {
  iu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ci(e) {
  return new ui({
    type: "readonly",
    innerType: e
  });
}
const li = /* @__PURE__ */ c("ZodTemplateLiteral", (e, t) => {
  ou.init(e, t), k.init(e, t);
});
function el(e, t) {
  return new li({
    type: "template_literal",
    parts: e,
    ...m(t)
  });
}
const si = /* @__PURE__ */ c("ZodLazy", (e, t) => {
  cu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function di(e) {
  return new si({
    type: "lazy",
    getter: e
  });
}
const mi = /* @__PURE__ */ c("ZodPromise", (e, t) => {
  uu.init(e, t), k.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function nl(e) {
  return new mi({
    type: "promise",
    innerType: e
  });
}
const fi = /* @__PURE__ */ c("ZodFunction", (e, t) => {
  au.init(e, t), k.init(e, t);
});
function fe(e) {
  return new fi({
    type: "function",
    input: Array.isArray(e?.input) ? Fe(e?.input) : e?.input ?? re(q()),
    output: e?.output ?? q()
  });
}
const Je = /* @__PURE__ */ c("ZodCustom", (e, t) => {
  lu.init(e, t), k.init(e, t);
});
function tl(e) {
  const t = new U({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function ot(e, t) {
  return Gu(Je, e ?? (() => !0), t);
}
function pi(e, t = {}) {
  return Vu(Je, e, t);
}
function vi(e) {
  return Wu(e);
}
function rl(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new Je({
    type: "custom",
    check: "custom",
    fn: (o) => o instanceof e,
    abort: !0,
    ...m(t)
  });
  return r._zod.bag.Class = e, r;
}
const il = (...e) => Bu({
  Codec: it,
  Boolean: Ce,
  String: Te
}, ...e);
function ol(e) {
  const t = di(() => Yn([C(e), Ur(), Wn(), Zr(), re(t), Vr(C(), t)]));
  return t;
}
function al(e, t) {
  return ye(et(e), t);
}
const ul = {
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
function cl(e) {
  D({
    customError: e
  });
}
function ll() {
  return D().customError;
}
var nn;
nn || (nn = {});
function hm(e) {
  return pu(Te, e);
}
function $m(e) {
  return _u(Ae, e);
}
function bm(e) {
  return ju(Ce, e);
}
function _m(e) {
  return Ou(Le, e);
}
function ym(e) {
  return Ru(Xn, e);
}
const sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: _m,
  boolean: bm,
  date: ym,
  number: $m,
  string: hm
}, Symbol.toStringTag, { value: "Module" }));
D(su());
const Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: vt,
  $input: Mt,
  $output: Jt,
  NEVER: pt,
  TimePrecision: dr,
  ZodAny: Tr,
  ZodArray: Rr,
  ZodBase64: Jn,
  ZodBase64URL: Mn,
  ZodBigInt: Le,
  ZodBigIntFormat: Kn,
  ZodBoolean: Ce,
  ZodCIDRv4: Rn,
  ZodCIDRv6: Fn,
  ZodCUID: Pn,
  ZodCUID2: Zn,
  ZodCatch: ii,
  ZodCodec: it,
  ZodCustom: Je,
  ZodCustomStringFormat: pe,
  ZodDate: Xn,
  ZodDefault: Hr,
  ZodDiscriminatedUnion: Fr,
  ZodE164: Gn,
  ZodEmail: Un,
  ZodEmoji: Nn,
  ZodEnum: me,
  ZodError: tc,
  ZodFile: Xr,
  get ZodFirstPartyTypeKind() {
    return nn;
  },
  ZodFunction: fi,
  ZodGUID: $e,
  ZodIPv4: Cn,
  ZodIPv6: Ln,
  ZodISODate: Sn,
  ZodISODateTime: wn,
  ZodISODuration: xn,
  ZodISOTime: jn,
  ZodIntersection: Jr,
  ZodIssueCode: ul,
  ZodJWT: Vn,
  ZodKSUID: An,
  ZodLazy: si,
  ZodLiteral: Br,
  ZodMap: Wr,
  ZodNaN: ai,
  ZodNanoID: Dn,
  ZodNever: Ar,
  ZodNonOptional: tt,
  ZodNull: Pr,
  ZodNullable: Yr,
  ZodNumber: Ae,
  ZodNumberFormat: oe,
  ZodObject: Re,
  ZodOptional: nt,
  ZodPipe: rt,
  ZodPrefault: ei,
  ZodPromise: mi,
  ZodReadonly: ui,
  ZodRealError: Z,
  ZodRecord: Hn,
  ZodSet: Kr,
  ZodString: Te,
  ZodStringFormat: x,
  ZodSuccess: ri,
  ZodSymbol: Nr,
  ZodTemplateLiteral: li,
  ZodTransform: qr,
  ZodTuple: Gr,
  ZodType: k,
  ZodULID: Tn,
  ZodURL: Ee,
  ZodUUID: J,
  ZodUndefined: Dr,
  ZodUnion: qn,
  ZodUnknown: Er,
  ZodVoid: Cr,
  ZodXID: En,
  _ZodString: On,
  _default: Qr,
  _function: fe,
  any: Lc,
  array: re,
  base64: kc,
  base64url: Ic,
  bigint: Zc,
  boolean: Wn,
  catch: oi,
  check: tl,
  cidrv4: _c,
  cidrv6: yc,
  clone: T,
  codec: Qc,
  coerce: sl,
  config: D,
  core: Xu,
  cuid: fc,
  cuid2: pc,
  custom: ot,
  date: Rc,
  decode: Ir,
  decodeAsync: wr,
  discriminatedUnion: Gc,
  e164: zc,
  email: rc,
  emoji: dc,
  encode: kr,
  encodeAsync: zr,
  endsWith: bn,
  enum: Qn,
  file: Xc,
  flattenError: cn,
  float32: Uc,
  float64: Nc,
  formatError: ln,
  function: fe,
  getErrorMap: ll,
  globalRegistry: W,
  gt: X,
  gte: P,
  guid: ic,
  hash: Oc,
  hex: xc,
  hostname: jc,
  httpUrl: sc,
  includes: hn,
  instanceof: rl,
  int: Qe,
  int32: Dc,
  int64: Tc,
  intersection: Mr,
  ipv4: $c,
  ipv6: bc,
  iso: ec,
  json: ol,
  jwt: wc,
  keyof: Fc,
  ksuid: hc,
  lazy: di,
  length: Pe,
  literal: en,
  locales: Ft,
  looseObject: Mc,
  lowercase: vn,
  lt: B,
  lte: A,
  map: Wc,
  maxLength: De,
  maxSize: Ne,
  mime: _n,
  minLength: te,
  minSize: de,
  multipleOf: se,
  nan: Hc,
  nanoid: mc,
  nativeEnum: Bc,
  negative: fr,
  never: Bn,
  nonnegative: vr,
  nonoptional: ti,
  nonpositive: pr,
  normalize: yn,
  null: Zr,
  nullable: _e,
  nullish: qc,
  number: Ur,
  object: G,
  optional: be,
  overwrite: H,
  parse: $r,
  parseAsync: br,
  partialRecord: Vc,
  pipe: ye,
  positive: mr,
  prefault: ni,
  preprocess: al,
  prettifyError: yt,
  promise: nl,
  property: gr,
  readonly: ci,
  record: Vr,
  refine: pi,
  regex: pn,
  regexes: sn,
  registry: dn,
  safeDecode: jr,
  safeDecodeAsync: Or,
  safeEncode: Sr,
  safeEncodeAsync: xr,
  safeParse: _r,
  safeParseAsync: yr,
  set: Kc,
  setErrorMap: cl,
  size: fn,
  startsWith: $n,
  strictObject: Jc,
  string: C,
  stringFormat: Sc,
  stringbool: il,
  success: Yc,
  superRefine: vi,
  symbol: Ac,
  templateLiteral: el,
  toJSONSchema: hr,
  toLowerCase: In,
  toUpperCase: zn,
  transform: et,
  treeifyError: _t,
  trim: kn,
  tuple: Fe,
  uint32: Pc,
  uint64: Ec,
  ulid: vc,
  undefined: Cc,
  union: Yn,
  unknown: q,
  uppercase: gn,
  url: lc,
  util: $t,
  uuid: oc,
  uuidv4: ac,
  uuidv6: uc,
  uuidv7: cc,
  void: Lr,
  xid: gc
}, Symbol.toStringTag, { value: "Module" })), km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: vt,
  $input: Mt,
  $output: Jt,
  NEVER: pt,
  TimePrecision: dr,
  ZodAny: Tr,
  ZodArray: Rr,
  ZodBase64: Jn,
  ZodBase64URL: Mn,
  ZodBigInt: Le,
  ZodBigIntFormat: Kn,
  ZodBoolean: Ce,
  ZodCIDRv4: Rn,
  ZodCIDRv6: Fn,
  ZodCUID: Pn,
  ZodCUID2: Zn,
  ZodCatch: ii,
  ZodCodec: it,
  ZodCustom: Je,
  ZodCustomStringFormat: pe,
  ZodDate: Xn,
  ZodDefault: Hr,
  ZodDiscriminatedUnion: Fr,
  ZodE164: Gn,
  ZodEmail: Un,
  ZodEmoji: Nn,
  ZodEnum: me,
  ZodError: tc,
  ZodFile: Xr,
  get ZodFirstPartyTypeKind() {
    return nn;
  },
  ZodFunction: fi,
  ZodGUID: $e,
  ZodIPv4: Cn,
  ZodIPv6: Ln,
  ZodISODate: Sn,
  ZodISODateTime: wn,
  ZodISODuration: xn,
  ZodISOTime: jn,
  ZodIntersection: Jr,
  ZodIssueCode: ul,
  ZodJWT: Vn,
  ZodKSUID: An,
  ZodLazy: si,
  ZodLiteral: Br,
  ZodMap: Wr,
  ZodNaN: ai,
  ZodNanoID: Dn,
  ZodNever: Ar,
  ZodNonOptional: tt,
  ZodNull: Pr,
  ZodNullable: Yr,
  ZodNumber: Ae,
  ZodNumberFormat: oe,
  ZodObject: Re,
  ZodOptional: nt,
  ZodPipe: rt,
  ZodPrefault: ei,
  ZodPromise: mi,
  ZodReadonly: ui,
  ZodRealError: Z,
  ZodRecord: Hn,
  ZodSet: Kr,
  ZodString: Te,
  ZodStringFormat: x,
  ZodSuccess: ri,
  ZodSymbol: Nr,
  ZodTemplateLiteral: li,
  ZodTransform: qr,
  ZodTuple: Gr,
  ZodType: k,
  ZodULID: Tn,
  ZodURL: Ee,
  ZodUUID: J,
  ZodUndefined: Dr,
  ZodUnion: qn,
  ZodUnknown: Er,
  ZodVoid: Cr,
  ZodXID: En,
  _ZodString: On,
  _default: Qr,
  _function: fe,
  any: Lc,
  array: re,
  base64: kc,
  base64url: Ic,
  bigint: Zc,
  boolean: Wn,
  catch: oi,
  check: tl,
  cidrv4: _c,
  cidrv6: yc,
  clone: T,
  codec: Qc,
  coerce: sl,
  config: D,
  core: Xu,
  cuid: fc,
  cuid2: pc,
  custom: ot,
  date: Rc,
  decode: Ir,
  decodeAsync: wr,
  default: Ni,
  discriminatedUnion: Gc,
  e164: zc,
  email: rc,
  emoji: dc,
  encode: kr,
  encodeAsync: zr,
  endsWith: bn,
  enum: Qn,
  file: Xc,
  flattenError: cn,
  float32: Uc,
  float64: Nc,
  formatError: ln,
  function: fe,
  getErrorMap: ll,
  globalRegistry: W,
  gt: X,
  gte: P,
  guid: ic,
  hash: Oc,
  hex: xc,
  hostname: jc,
  httpUrl: sc,
  includes: hn,
  instanceof: rl,
  int: Qe,
  int32: Dc,
  int64: Tc,
  intersection: Mr,
  ipv4: $c,
  ipv6: bc,
  iso: ec,
  json: ol,
  jwt: wc,
  keyof: Fc,
  ksuid: hc,
  lazy: di,
  length: Pe,
  literal: en,
  locales: Ft,
  looseObject: Mc,
  lowercase: vn,
  lt: B,
  lte: A,
  map: Wc,
  maxLength: De,
  maxSize: Ne,
  mime: _n,
  minLength: te,
  minSize: de,
  multipleOf: se,
  nan: Hc,
  nanoid: mc,
  nativeEnum: Bc,
  negative: fr,
  never: Bn,
  nonnegative: vr,
  nonoptional: ti,
  nonpositive: pr,
  normalize: yn,
  null: Zr,
  nullable: _e,
  nullish: qc,
  number: Ur,
  object: G,
  optional: be,
  overwrite: H,
  parse: $r,
  parseAsync: br,
  partialRecord: Vc,
  pipe: ye,
  positive: mr,
  prefault: ni,
  preprocess: al,
  prettifyError: yt,
  promise: nl,
  property: gr,
  readonly: ci,
  record: Vr,
  refine: pi,
  regex: pn,
  regexes: sn,
  registry: dn,
  safeDecode: jr,
  safeDecodeAsync: Or,
  safeEncode: Sr,
  safeEncodeAsync: xr,
  safeParse: _r,
  safeParseAsync: yr,
  set: Kc,
  setErrorMap: cl,
  size: fn,
  startsWith: $n,
  strictObject: Jc,
  string: C,
  stringFormat: Sc,
  stringbool: il,
  success: Yc,
  superRefine: vi,
  symbol: Ac,
  templateLiteral: el,
  toJSONSchema: hr,
  toLowerCase: In,
  toUpperCase: zn,
  transform: et,
  treeifyError: _t,
  trim: kn,
  tuple: Fe,
  uint32: Pc,
  uint64: Ec,
  ulid: vc,
  undefined: Cc,
  union: Yn,
  unknown: q,
  uppercase: gn,
  url: lc,
  util: $t,
  uuid: oc,
  uuidv4: ac,
  uuidv6: uc,
  uuidv7: cc,
  void: Lr,
  xid: gc,
  z: Ni
}, Symbol.toStringTag, { value: "Module" })), at = fe({
  input: Fe([
    G({
      editor: ot((e) => e !== void 0),
      linkBrowserUrl: C()
    })
  ]),
  output: Wn()
}), Di = fe({
  input: Fe([
    G({
      editor: ot((e) => e !== void 0),
      linkBrowserUrl: C()
    })
  ]),
  output: Lr()
}), Im = G({
  id: C(),
  label: C(),
  iconIdentifier: C(),
  position: G({
    toolbarGroupId: C().or(en(!1)),
    bubbleMenuGroupId: C().or(en(!1))
  }),
  status: G({
    isActive: at.optional(),
    isDisabled: at.optional(),
    isVisible: at.optional()
  }).optional(),
  hooks: G({
    onEditorMounted: Di.optional()
  }).optional(),
  onExecute: Di
}), zm = G({
  commands: re(Im).optional(),
  extensions: re(q()).optional()
}), Ke = (e) => {
  if (typeof e == "object" && e !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t = Object.getPrototypeOf(e);
      return t === Object.prototype || t === null;
    }
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  return !1;
}, L = (...e) => e.reduce((t, r) => {
  if (r === void 0)
    return t;
  if (Array.isArray(r))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(r).forEach((o) => {
    ["__proto__", "constructor", "prototype"].includes(o) || (Array.isArray(t[o]) && Array.isArray(r[o]) ? t[o] = L.options.mergeArrays ? L.options.uniqueArrayItems ? Array.from(new Set(t[o].concat(r[o]))) : [...t[o], ...r[o]] : r[o] : Ke(t[o]) && Ke(r[o]) ? t[o] = L(t[o], r[o]) : !Ke(t[o]) && Ke(r[o]) ? t[o] = L(r[o], void 0) : t[o] = r[o] === void 0 ? L.options.allowUndefinedOverrides ? r[o] : t[o] : r[o]);
  }), t;
}, {}), mt = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
L.options = mt;
L.withOptions = (e, ...t) => {
  L.options = Object.assign(Object.assign({}, mt), e);
  const r = L(...t);
  return L.options = mt, r;
};
function wm(e, t) {
  return L.withOptions(
    { mergeArrays: !0, uniqueArrayItems: !0 },
    { items: e },
    { items: t }
  ).items;
}
function jm(e, t = 300) {
  let r, o = 0, n = !1;
  return (...i) => {
    const a = Date.now();
    return (!n || a - o >= t) && (r = e(...i), o = a, n = !0), r;
  };
}
const ft = [
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
], Sm = [
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
  toolbar: ft,
  bubbleMenu: Sm,
  extensions: []
};
function xm(e) {
  const t = zm.safeParse(e);
  if (!t.success)
    throw new Error(`Invalid TipTap plugin options: ${t.error.message}`);
  const { data: r } = t;
  r.extensions && Array.isArray(ae.extensions) && (ae.extensions = wm(ae.extensions, r.extensions)), r.commands && r.commands.forEach((o) => {
    if (o.position.toolbarGroupId !== !1 && Array.isArray(ft)) {
      const n = ae.toolbar.find((i) => i.id === o.position.toolbarGroupId);
      if (!n)
        throw new Error(`Top bar group ${o.position.toolbarGroupId} not found for command id ${o.id}.`);
      Array.isArray(n.commands) && n.commands.push(o);
    }
    if (o.position.bubbleMenuGroupId !== !1 && Array.isArray(ft)) {
      const n = ae.bubbleMenu.find((i) => i.id === o.position.bubbleMenuGroupId);
      if (!n)
        throw new Error(`Bubble menu group ${o.position.bubbleMenuGroupId} not found for command id ${o.id}.`);
      Array.isArray(n.commands) && n.commands.push(o);
    }
  });
}
function Om(e) {
  const r = e.getValidationSchema(km).safeParse(e.config);
  if (!r.success) {
    const o = `Invalid TipTap configuration for plugin id: ${e.pluginId}!
Received plugin configuration:
${JSON.stringify(e.config, null, 2)}

Zod Validation Error:
${r.error.message}`;
    throw new Error(o);
  }
  return r.data;
}
const Um = () => ae;
export {
  re as a,
  Wn as b,
  jm as c,
  xm as d,
  Um as g,
  G as o,
  Om as p,
  Vr as r,
  C as s,
  q as u
};
