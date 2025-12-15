import { o as Et, a as te, s as lt } from "./configuration-CsNrhtrS.js";
// @__NO_SIDE_EFFECTS__
function wt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const ee = {}, Ge = [], se = () => {
}, Je = () => !1, Qe = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ze = (t) => t.startsWith("onUpdate:"), ne = Object.assign, ie = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, re = Object.prototype.hasOwnProperty, et = (t, e) => re.call(t, e), S = Array.isArray, H = (t) => nt(t) === "[object Map]", It = (t) => nt(t) === "[object Set]", j = (t) => typeof t == "function", V = (t) => typeof t == "string", L = (t) => typeof t == "symbol", y = (t) => t !== null && typeof t == "object", qe = (t) => (y(t) || j(t)) && j(t.then) && j(t.catch), Mt = Object.prototype.toString, nt = (t) => Mt.call(t), oe = (t) => nt(t).slice(8, -1), Pt = (t) => nt(t) === "[object Object]", St = (t) => V(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Xe = /* @__PURE__ */ wt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), it = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, ce = /-\w/g, ke = it(
  (t) => t.replace(ce, (e) => e.slice(1).toUpperCase())
), ae = /\B([A-Z])/g, ts = it(
  (t) => t.replace(ae, "-$1").toLowerCase()
), fe = it((t) => t.charAt(0).toUpperCase() + t.slice(1)), es = it(
  (t) => t ? `on${fe(t)}` : ""
), A = (t, e) => !Object.is(t, e), ss = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, le = (t, e, s, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, ns = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, is = (t) => {
  const e = V(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Dt;
const rs = () => Dt || (Dt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ue(t) {
  if (S(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = V(i) ? _e(i) : ue(i);
      if (n)
        for (const r in n)
          e[r] = n[r];
    }
    return e;
  } else if (V(t) || y(t))
    return t;
}
const he = /;(?![^(]*\))/g, pe = /:([^]+)/, de = /\/\*[^]*?\*\//g;
function _e(t) {
  const e = {};
  return t.replace(de, "").split(he).forEach((s) => {
    if (s) {
      const i = s.split(pe);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function ge(t) {
  let e = "";
  if (V(t))
    e = t;
  else if (S(t))
    for (let s = 0; s < t.length; s++) {
      const i = ge(t[s]);
      i && (e += i + " ");
    }
  else if (y(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const ve = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", os = /* @__PURE__ */ wt(ve);
function cs(t) {
  return !!t || t === "";
}
const jt = (t) => !!(t && t.__v_isRef === !0), be = (t) => V(t) ? t : t == null ? "" : S(t) || y(t) && (t.toString === Mt || !j(t.toString)) ? jt(t) ? be(t.value) : JSON.stringify(t, Ct, 2) : String(t), Ct = (t, e) => jt(e) ? Ct(t, e.value) : H(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], r) => (s[ut(i, r) + " =>"] = n, s),
    {}
  )
} : It(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => ut(s))
} : L(e) ? ut(e) : y(e) && !S(e) && !Pt(e) ? String(e) : e, ut = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    L(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
let g;
class as {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = g, !e && g && (this.index = (g.scopes || (g.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = g;
      try {
        return g = this, e();
      } finally {
        g = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = g, g = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (g = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, i;
      for (s = 0, i = this.effects.length; s < i; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, i = this.cleanups.length; s < i; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, i = this.scopes.length; s < i; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function me() {
  return g;
}
let h;
const ht = /* @__PURE__ */ new WeakSet();
class we {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, g && g.active && g.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ht.has(this) && (ht.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kt(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ot(this), Nt(this);
    const e = h, s = m;
    h = this, m = !0;
    try {
      return this.fn();
    } finally {
      Ht(this), h = e, m = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        xt(e);
      this.deps = this.depsTail = void 0, Ot(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ht.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _t(this) && this.run();
  }
  get dirty() {
    return _t(this);
  }
}
let Lt = 0, U, Y;
function Kt(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Y, Y = t;
    return;
  }
  t.next = U, U = t;
}
function yt() {
  Lt++;
}
function Rt() {
  if (--Lt > 0)
    return;
  if (Y) {
    let e = Y;
    for (Y = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; U; ) {
    let e = U;
    for (U = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (i) {
          t || (t = i);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function Nt(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Ht(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), xt(i), Se(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function _t(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Wt(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Wt(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === $) || (t.globalVersion = $, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !_t(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = h, i = m;
  h = t, m = !0;
  try {
    Nt(t);
    const n = t.fn(t._value);
    (e.version === 0 || A(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    h = s, m = i, Ht(t), t.flags &= -3;
  }
}
function xt(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      xt(r, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Se(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let m = !0;
const Vt = [];
function zt() {
  Vt.push(m), m = !1;
}
function Bt() {
  const t = Vt.pop();
  m = t === void 0 ? !0 : t;
}
function Ot(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = h;
    h = void 0;
    try {
      e();
    } finally {
      h = s;
    }
  }
}
let $ = 0;
class ye {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!h || !m || h === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== h)
      s = this.activeLink = new ye(h, this), h.deps ? (s.prevDep = h.depsTail, h.depsTail.nextDep = s, h.depsTail = s) : h.deps = h.depsTail = s, Ut(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = h.depsTail, s.nextDep = void 0, h.depsTail.nextDep = s, h.depsTail = s, h.deps === s && (h.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, $++, this.notify(e);
  }
  notify(e) {
    yt();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Rt();
    }
  }
}
function Ut(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        Ut(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const gt = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ Symbol(
  ""
), vt = /* @__PURE__ */ Symbol(
  ""
), F = /* @__PURE__ */ Symbol(
  ""
);
function v(t, e, s) {
  if (m && h) {
    let i = gt.get(t);
    i || gt.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new rt()), n.map = i, n.key = s), n.track();
  }
}
function D(t, e, s, i, n, r) {
  const o = gt.get(t);
  if (!o) {
    $++;
    return;
  }
  const c = (a) => {
    a && a.trigger();
  };
  if (yt(), e === "clear")
    o.forEach(c);
  else {
    const a = S(t), p = a && St(s);
    if (a && s === "length") {
      const f = Number(i);
      o.forEach((d, _) => {
        (_ === "length" || _ === F || !L(_) && _ >= f) && c(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && c(o.get(s)), p && c(o.get(F)), e) {
        case "add":
          a ? p && c(o.get("length")) : (c(o.get(C)), H(t) && c(o.get(vt)));
          break;
        case "delete":
          a || (c(o.get(C)), H(t) && c(o.get(vt)));
          break;
        case "set":
          H(t) && c(o.get(C));
          break;
      }
  }
  Rt();
}
function N(t) {
  const e = u(t);
  return e === t ? e : (v(e, "iterate", F), w(t) ? e : e.map(T));
}
function Tt(t) {
  return v(t = u(t), "iterate", F), t;
}
function E(t, e) {
  return I(t) ? W(t) ? G(T(e)) : G(e) : T(e);
}
const Re = {
  __proto__: null,
  [Symbol.iterator]() {
    return pt(this, Symbol.iterator, (t) => E(this, t));
  },
  concat(...t) {
    return N(this).concat(
      ...t.map((e) => S(e) ? N(e) : e)
    );
  },
  entries() {
    return pt(this, "entries", (t) => (t[1] = E(this, t[1]), t));
  },
  every(t, e) {
    return x(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return x(
      this,
      "filter",
      t,
      e,
      (s) => s.map((i) => E(this, i)),
      arguments
    );
  },
  find(t, e) {
    return x(
      this,
      "find",
      t,
      e,
      (s) => E(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return x(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return x(
      this,
      "findLast",
      t,
      e,
      (s) => E(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return x(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return x(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return dt(this, "includes", t);
  },
  indexOf(...t) {
    return dt(this, "indexOf", t);
  },
  join(t) {
    return N(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return dt(this, "lastIndexOf", t);
  },
  map(t, e) {
    return x(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return B(this, "pop");
  },
  push(...t) {
    return B(this, "push", t);
  },
  reduce(t, ...e) {
    return At(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return At(this, "reduceRight", t, e);
  },
  shift() {
    return B(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return x(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return B(this, "splice", t);
  },
  toReversed() {
    return N(this).toReversed();
  },
  toSorted(t) {
    return N(this).toSorted(t);
  },
  toSpliced(...t) {
    return N(this).toSpliced(...t);
  },
  unshift(...t) {
    return B(this, "unshift", t);
  },
  values() {
    return pt(this, "values", (t) => E(this, t));
  }
};
function pt(t, e, s) {
  const i = Tt(t), n = i[e]();
  return i !== t && !w(t) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.done || (r.value = s(r.value)), r;
  }), n;
}
const xe = Array.prototype;
function x(t, e, s, i, n, r) {
  const o = Tt(t), c = o !== t && !w(t), a = o[e];
  if (a !== xe[e]) {
    const d = a.apply(t, r);
    return c ? T(d) : d;
  }
  let p = s;
  o !== t && (c ? p = function(d, _) {
    return s.call(this, E(t, d), _, t);
  } : s.length > 2 && (p = function(d, _) {
    return s.call(this, d, _, t);
  }));
  const f = a.call(o, p, i);
  return c && n ? n(f) : f;
}
function At(t, e, s, i) {
  const n = Tt(t);
  let r = s;
  return n !== t && (w(t) ? s.length > 3 && (r = function(o, c, a) {
    return s.call(this, o, c, a, t);
  }) : r = function(o, c, a) {
    return s.call(this, o, E(t, c), a, t);
  }), n[e](r, ...i);
}
function dt(t, e, s) {
  const i = u(t);
  v(i, "iterate", F);
  const n = i[e](...s);
  return (n === -1 || n === !1) && We(s[0]) ? (s[0] = u(s[0]), i[e](...s)) : n;
}
function B(t, e, s = []) {
  zt(), yt();
  const i = u(t)[e].apply(t, s);
  return Rt(), Bt(), i;
}
const Te = /* @__PURE__ */ wt("__proto__,__v_isRef,__isVue"), Yt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(L)
);
function Ee(t) {
  L(t) || (t = String(t));
  const e = u(this);
  return v(e, "has", t), e.hasOwnProperty(t);
}
class $t {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, i) {
    if (s === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !n;
    if (s === "__v_isReadonly")
      return n;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return i === (n ? r ? qt : Zt : r ? Qt : Jt).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = S(e);
    if (!n) {
      let a;
      if (o && (a = Re[s]))
        return a;
      if (s === "hasOwnProperty")
        return Ee;
    }
    const c = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      b(e) ? e : i
    );
    if ((L(s) ? Yt.has(s) : Te(s)) || (n || v(e, "get", s), r))
      return c;
    if (b(c)) {
      const a = o && St(s) ? c : c.value;
      return n && y(a) ? mt(a) : a;
    }
    return y(c) ? n ? mt(c) : Xt(c) : c;
  }
}
class Ft extends $t {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let r = e[s];
    const o = S(e) && St(s);
    if (!this._isShallow) {
      const p = I(r);
      if (!w(i) && !I(i) && (r = u(r), i = u(i)), !o && b(r) && !b(i))
        return p || (r.value = i), !0;
    }
    const c = o ? Number(s) < e.length : et(e, s), a = Reflect.set(
      e,
      s,
      i,
      b(e) ? e : n
    );
    return e === u(n) && (c ? A(i, r) && D(e, "set", s, i) : D(e, "add", s, i)), a;
  }
  deleteProperty(e, s) {
    const i = et(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return n && i && D(e, "delete", s, void 0), n;
  }
  has(e, s) {
    const i = Reflect.has(e, s);
    return (!L(s) || !Yt.has(s)) && v(e, "has", s), i;
  }
  ownKeys(e) {
    return v(
      e,
      "iterate",
      S(e) ? "length" : C
    ), Reflect.ownKeys(e);
  }
}
class Gt extends $t {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const De = /* @__PURE__ */ new Ft(), Oe = /* @__PURE__ */ new Gt(), Ae = /* @__PURE__ */ new Ft(!0), Ie = /* @__PURE__ */ new Gt(!0), bt = (t) => t, X = (t) => Reflect.getPrototypeOf(t);
function Me(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, r = u(n), o = H(r), c = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, p = n[t](...i), f = s ? bt : e ? G : T;
    return !e && v(
      r,
      "iterate",
      a ? vt : C
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = p.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [f(d[0]), f(d[1])] : f(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function k(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Pe(t, e) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = u(r), c = u(n);
      t || (A(n, c) && v(o, "get", n), v(o, "get", c));
      const { has: a } = X(o), p = e ? bt : t ? G : T;
      if (a.call(o, n))
        return p(r.get(n));
      if (a.call(o, c))
        return p(r.get(c));
      r !== o && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && v(u(n), "iterate", C), n.size;
    },
    has(n) {
      const r = this.__v_raw, o = u(r), c = u(n);
      return t || (A(n, c) && v(o, "has", n), v(o, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const o = this, c = o.__v_raw, a = u(c), p = e ? bt : t ? G : T;
      return !t && v(a, "iterate", C), c.forEach((f, d) => n.call(r, p(f), p(d), o));
    }
  };
  return ne(
    s,
    t ? {
      add: k("add"),
      set: k("set"),
      delete: k("delete"),
      clear: k("clear")
    } : {
      add(n) {
        !e && !w(n) && !I(n) && (n = u(n));
        const r = u(this);
        return X(r).has.call(r, n) || (r.add(n), D(r, "add", n, n)), this;
      },
      set(n, r) {
        !e && !w(r) && !I(r) && (r = u(r));
        const o = u(this), { has: c, get: a } = X(o);
        let p = c.call(o, n);
        p || (n = u(n), p = c.call(o, n));
        const f = a.call(o, n);
        return o.set(n, r), p ? A(r, f) && D(o, "set", n, r) : D(o, "add", n, r), this;
      },
      delete(n) {
        const r = u(this), { has: o, get: c } = X(r);
        let a = o.call(r, n);
        a || (n = u(n), a = o.call(r, n)), c && c.call(r, n);
        const p = r.delete(n);
        return a && D(r, "delete", n, void 0), p;
      },
      clear() {
        const n = u(this), r = n.size !== 0, o = n.clear();
        return r && D(
          n,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    s[n] = Me(n, t, e);
  }), s;
}
function ot(t, e) {
  const s = Pe(t, e);
  return (i, n, r) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    et(s, n) && n in i ? s : i,
    n,
    r
  );
}
const je = {
  get: /* @__PURE__ */ ot(!1, !1)
}, Ce = {
  get: /* @__PURE__ */ ot(!1, !0)
}, Le = {
  get: /* @__PURE__ */ ot(!0, !1)
}, Ke = {
  get: /* @__PURE__ */ ot(!0, !0)
}, Jt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap();
function Ne(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function He(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ne(oe(t));
}
function Xt(t) {
  return I(t) ? t : ct(
    t,
    !1,
    De,
    je,
    Jt
  );
}
function fs(t) {
  return ct(
    t,
    !1,
    Ae,
    Ce,
    Qt
  );
}
function mt(t) {
  return ct(
    t,
    !0,
    Oe,
    Le,
    Zt
  );
}
function ls(t) {
  return ct(
    t,
    !0,
    Ie,
    Ke,
    qt
  );
}
function ct(t, e, s, i, n) {
  if (!y(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = He(t);
  if (r === 0)
    return t;
  const o = n.get(t);
  if (o)
    return o;
  const c = new Proxy(
    t,
    r === 2 ? i : s
  );
  return n.set(t, c), c;
}
function W(t) {
  return I(t) ? W(t.__v_raw) : !!(t && t.__v_isReactive);
}
function I(t) {
  return !!(t && t.__v_isReadonly);
}
function w(t) {
  return !!(t && t.__v_isShallow);
}
function We(t) {
  return t ? !!t.__v_raw : !1;
}
function u(t) {
  const e = t && t.__v_raw;
  return e ? u(e) : t;
}
function us(t) {
  return !et(t, "__v_skip") && Object.isExtensible(t) && le(t, "__v_skip", !0), t;
}
const T = (t) => y(t) ? Xt(t) : t, G = (t) => y(t) ? mt(t) : t;
function b(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function hs(t) {
  return kt(t, !1);
}
function ps(t) {
  return kt(t, !0);
}
function kt(t, e) {
  return b(t) ? t : new Ve(t, e);
}
class Ve {
  constructor(e, s) {
    this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : u(e), this._value = s ? e : T(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || w(e) || I(e);
    e = i ? e : u(e), A(e, s) && (this._rawValue = e, this._value = i ? e : T(e), this.dep.trigger());
  }
}
function ze(t) {
  return b(t) ? t.value : t;
}
const Be = {
  get: (t, e, s) => e === "__v_raw" ? t : ze(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return b(n) && !b(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function ds(t) {
  return W(t) ? t : new Proxy(t, Be);
}
class Ue {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    const s = this.dep = new rt(), { get: i, set: n } = e(s.track.bind(s), s.trigger.bind(s));
    this._get = i, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function _s(t) {
  return new Ue(t);
}
class Ye {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $ - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    h !== this)
      return Kt(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Wt(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function gs(t, e, s = !1) {
  let i, n;
  return j(t) ? i = t : (i = t.get, n = t.set), new Ye(i, n, s);
}
const tt = {}, st = /* @__PURE__ */ new WeakMap();
let P;
function $e(t, e = !1, s = P) {
  if (s) {
    let i = st.get(s);
    i || st.set(s, i = []), i.push(t);
  }
}
function vs(t, e, s = ee) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: c, call: a } = s, p = (l) => n ? l : w(l) || n === !1 || n === 0 ? O(l, 1) : O(l);
  let f, d, _, J, Q = !1, Z = !1;
  if (b(t) ? (d = () => t.value, Q = w(t)) : W(t) ? (d = () => p(t), Q = !0) : S(t) ? (Z = !0, Q = t.some((l) => W(l) || w(l)), d = () => t.map((l) => {
    if (b(l))
      return l.value;
    if (W(l))
      return p(l);
    if (j(l))
      return a ? a(l, 2) : l();
  })) : j(t) ? e ? d = a ? () => a(t, 2) : t : d = () => {
    if (_) {
      zt();
      try {
        _();
      } finally {
        Bt();
      }
    }
    const l = P;
    P = f;
    try {
      return a ? a(t, 3, [J]) : t(J);
    } finally {
      P = l;
    }
  } : d = se, e && n) {
    const l = d, R = n === !0 ? 1 / 0 : n;
    d = () => O(l(), R);
  }
  const at = me(), K = () => {
    f.stop(), at && at.active && ie(at.effects, f);
  };
  if (r && e) {
    const l = e;
    e = (...R) => {
      l(...R), K();
    };
  }
  let M = Z ? new Array(t.length).fill(tt) : tt;
  const z = (l) => {
    if (!(!(f.flags & 1) || !f.dirty && !l))
      if (e) {
        const R = f.run();
        if (n || Q || (Z ? R.some((ft, q) => A(ft, M[q])) : A(R, M))) {
          _ && _();
          const ft = P;
          P = f;
          try {
            const q = [
              R,
              // pass undefined as the old value when it's changed for the first time
              M === tt ? void 0 : Z && M[0] === tt ? [] : M,
              J
            ];
            M = R, a ? a(e, 3, q) : (
              // @ts-expect-error
              e(...q)
            );
          } finally {
            P = ft;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new we(d), f.scheduler = o ? () => o(z, !1) : z, J = (l) => $e(l, !1, f), _ = f.onStop = () => {
    const l = st.get(f);
    if (l) {
      if (a)
        a(l, 4);
      else
        for (const R of l) R();
      st.delete(f);
    }
  }, e ? i ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), K.pause = f.pause.bind(f), K.resume = f.resume.bind(f), K.stop = K, K;
}
function O(t, e = 1 / 0, s) {
  if (e <= 0 || !y(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, b(t))
    O(t.value, e, s);
  else if (S(t))
    for (let i = 0; i < t.length; i++)
      O(t[i], e, s);
  else if (It(t) || H(t))
    t.forEach((i) => {
      O(i, e, s);
    });
  else if (Pt(t)) {
    for (const i in t)
      O(t[i], e, s);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && O(t[i], e, s);
  }
  return t;
}
const bs = Et({
  styles: te(
    Et({
      name: lt().min(1),
      element: lt().min(1),
      classes: lt().min(1)
    })
  ).min(1)
});
export {
  hs as $,
  ts as A,
  fs as B,
  le as C,
  v as D,
  ee as E,
  ls as F,
  Ze as G,
  D as H,
  Xt as I,
  zt as J,
  Bt as K,
  gs as L,
  W as M,
  se as N,
  w as O,
  I as P,
  Tt as Q,
  we as R,
  G as S,
  T,
  L as U,
  fe as V,
  Pt as W,
  ze as X,
  is as Y,
  os as Z,
  cs as _,
  V as a,
  ps as a0,
  _s as a1,
  be as a2,
  bs as a3,
  y as b,
  We as c,
  S as d,
  ne as e,
  ue as f,
  Qe as g,
  b as h,
  j as i,
  rs as j,
  Je as k,
  qe as l,
  us as m,
  ge as n,
  ss as o,
  ds as p,
  et as q,
  ie as r,
  Ge as s,
  u as t,
  as as u,
  Xe as v,
  vs as w,
  ke as x,
  ns as y,
  es as z
};
