import { o as Tt, a as Xt, s as at } from "./configuration-DkMIcjSq.js";
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function mt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const kt = {}, Fe = [], te = () => {
}, Ge = () => !1, Je = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Qe = (t) => t.startsWith("onUpdate:"), ee = Object.assign, se = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, ne = Object.prototype.hasOwnProperty, k = (t, e) => ne.call(t, e), m = Array.isArray, K = (t) => et(t) === "[object Map]", At = (t) => et(t) === "[object Set]", M = (t) => typeof t == "function", H = (t) => typeof t == "string", C = (t) => typeof t == "symbol", R = (t) => t !== null && typeof t == "object", Ze = (t) => (R(t) || M(t)) && M(t.then) && M(t.catch), It = Object.prototype.toString, et = (t) => It.call(t), ie = (t) => et(t).slice(8, -1), Mt = (t) => et(t) === "[object Object]", wt = (t) => H(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, qe = /* @__PURE__ */ mt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), st = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, re = /-\w/g, Xe = st(
  (t) => t.replace(re, (e) => e.slice(1).toUpperCase())
), oe = /\B([A-Z])/g, ke = st(
  (t) => t.replace(oe, "-$1").toLowerCase()
), ce = st((t) => t.charAt(0).toUpperCase() + t.slice(1)), ts = st(
  (t) => t ? `on${ce(t)}` : ""
), O = (t, e) => !Object.is(t, e), es = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, ae = (t, e, s, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, ss = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, ns = (t) => {
  const e = H(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Et;
const is = () => Et || (Et = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fe(t) {
  if (m(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = H(i) ? pe(i) : fe(i);
      if (n)
        for (const r in n)
          e[r] = n[r];
    }
    return e;
  } else if (H(t) || R(t))
    return t;
}
const le = /;(?![^(]*\))/g, ue = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function pe(t) {
  const e = {};
  return t.replace(he, "").split(le).forEach((s) => {
    if (s) {
      const i = s.split(ue);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function de(t) {
  let e = "";
  if (H(t))
    e = t;
  else if (m(t))
    for (let s = 0; s < t.length; s++) {
      const i = de(t[s]);
      i && (e += i + " ");
    }
  else if (R(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rs = /* @__PURE__ */ mt(_e);
function os(t) {
  return !!t || t === "";
}
const Pt = (t) => !!(t && t.__v_isRef === !0), ge = (t) => H(t) ? t : t == null ? "" : m(t) || R(t) && (t.toString === It || !M(t.toString)) ? Pt(t) ? ge(t.value) : JSON.stringify(t, jt, 2) : String(t), jt = (t, e) => Pt(e) ? jt(t, e.value) : K(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], r) => (s[ft(i, r) + " =>"] = n, s),
    {}
  )
} : At(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => ft(s))
} : C(e) ? ft(e) : R(e) && !m(e) && !Mt(e) ? String(e) : e, ft = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    C(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let v;
class cs {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = v, !e && v && (this.index = (v.scopes || (v.scopes = [])).push(
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
      const s = v;
      try {
        return v = this, e();
      } finally {
        v = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = v, v = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (v = this.prevScope, this.prevScope = void 0);
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
function ve() {
  return v;
}
let h;
const lt = /* @__PURE__ */ new WeakSet();
class be {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, v && v.active && v.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lt.has(this) && (lt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lt(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Dt(this), Nt(this);
    const e = h, s = S;
    h = this, S = !0;
    try {
      return this.fn();
    } finally {
      Kt(this), h = e, S = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Rt(e);
      this.deps = this.depsTail = void 0, Dt(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    pt(this) && this.run();
  }
  get dirty() {
    return pt(this);
  }
}
let Ct = 0, z, B;
function Lt(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = B, B = t;
    return;
  }
  t.next = z, z = t;
}
function St() {
  Ct++;
}
function yt() {
  if (--Ct > 0)
    return;
  if (B) {
    let e = B;
    for (B = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; z; ) {
    let e = z;
    for (z = void 0; e; ) {
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
function Kt(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), Rt(i), me(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function pt(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ht(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ht(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Y) || (t.globalVersion = Y, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !pt(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = h, i = S;
  h = t, S = !0;
  try {
    Nt(t);
    const n = t.fn(t._value);
    (e.version === 0 || O(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    h = s, S = i, Kt(t), t.flags &= -3;
  }
}
function Rt(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Rt(r, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function me(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let S = !0;
const Vt = [];
function Wt() {
  Vt.push(S), S = !1;
}
function zt() {
  const t = Vt.pop();
  S = t === void 0 ? !0 : t;
}
function Dt(t) {
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
let Y = 0;
class we {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!h || !S || h === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== h)
      s = this.activeLink = new we(h, this), h.deps ? (s.prevDep = h.depsTail, h.depsTail.nextDep = s, h.depsTail = s) : h.deps = h.depsTail = s, Bt(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = h.depsTail, s.nextDep = void 0, h.depsTail.nextDep = s, h.depsTail = s, h.deps === s && (h.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, Y++, this.notify(e);
  }
  notify(e) {
    St();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      yt();
    }
  }
}
function Bt(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        Bt(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const dt = /* @__PURE__ */ new WeakMap(), P = Symbol(
  ""
), _t = Symbol(
  ""
), $ = Symbol(
  ""
);
function b(t, e, s) {
  if (S && h) {
    let i = dt.get(t);
    i || dt.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new nt()), n.map = i, n.key = s), n.track();
  }
}
function E(t, e, s, i, n, r) {
  const o = dt.get(t);
  if (!o) {
    Y++;
    return;
  }
  const c = (a) => {
    a && a.trigger();
  };
  if (St(), e === "clear")
    o.forEach(c);
  else {
    const a = m(t), d = a && wt(s);
    if (a && s === "length") {
      const f = Number(i);
      o.forEach((p, _) => {
        (_ === "length" || _ === $ || !C(_) && _ >= f) && c(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && c(o.get(s)), d && c(o.get($)), e) {
        case "add":
          a ? d && c(o.get("length")) : (c(o.get(P)), K(t) && c(o.get(_t)));
          break;
        case "delete":
          a || (c(o.get(P)), K(t) && c(o.get(_t)));
          break;
        case "set":
          K(t) && c(o.get(P));
          break;
      }
  }
  yt();
}
function N(t) {
  const e = u(t);
  return e === t ? e : (b(e, "iterate", $), y(t) ? e : e.map(g));
}
function xt(t) {
  return b(t = u(t), "iterate", $), t;
}
const Se = {
  __proto__: null,
  [Symbol.iterator]() {
    return ut(this, Symbol.iterator, g);
  },
  concat(...t) {
    return N(this).concat(
      ...t.map((e) => m(e) ? N(e) : e)
    );
  },
  entries() {
    return ut(this, "entries", (t) => (t[1] = g(t[1]), t));
  },
  every(t, e) {
    return T(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return T(this, "filter", t, e, (s) => s.map(g), arguments);
  },
  find(t, e) {
    return T(this, "find", t, e, g, arguments);
  },
  findIndex(t, e) {
    return T(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return T(this, "findLast", t, e, g, arguments);
  },
  findLastIndex(t, e) {
    return T(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return T(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ht(this, "includes", t);
  },
  indexOf(...t) {
    return ht(this, "indexOf", t);
  },
  join(t) {
    return N(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return ht(this, "lastIndexOf", t);
  },
  map(t, e) {
    return T(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return W(this, "pop");
  },
  push(...t) {
    return W(this, "push", t);
  },
  reduce(t, ...e) {
    return Ot(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Ot(this, "reduceRight", t, e);
  },
  shift() {
    return W(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return T(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return W(this, "splice", t);
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
    return W(this, "unshift", t);
  },
  values() {
    return ut(this, "values", g);
  }
};
function ut(t, e, s) {
  const i = xt(t), n = i[e]();
  return i !== t && !y(t) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.done || (r.value = s(r.value)), r;
  }), n;
}
const ye = Array.prototype;
function T(t, e, s, i, n, r) {
  const o = xt(t), c = o !== t && !y(t), a = o[e];
  if (a !== ye[e]) {
    const p = a.apply(t, r);
    return c ? g(p) : p;
  }
  let d = s;
  o !== t && (c ? d = function(p, _) {
    return s.call(this, g(p), _, t);
  } : s.length > 2 && (d = function(p, _) {
    return s.call(this, p, _, t);
  }));
  const f = a.call(o, d, i);
  return c && n ? n(f) : f;
}
function Ot(t, e, s, i) {
  const n = xt(t);
  let r = s;
  return n !== t && (y(t) ? s.length > 3 && (r = function(o, c, a) {
    return s.call(this, o, c, a, t);
  }) : r = function(o, c, a) {
    return s.call(this, o, g(c), a, t);
  }), n[e](r, ...i);
}
function ht(t, e, s) {
  const i = u(t);
  b(i, "iterate", $);
  const n = i[e](...s);
  return (n === -1 || n === !1) && Ke(s[0]) ? (s[0] = u(s[0]), i[e](...s)) : n;
}
function W(t, e, s = []) {
  Wt(), St();
  const i = u(t)[e].apply(t, s);
  return yt(), zt(), i;
}
const Re = /* @__PURE__ */ mt("__proto__,__v_isRef,__isVue"), Ut = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(C)
);
function xe(t) {
  C(t) || (t = String(t));
  const e = u(this);
  return b(e, "has", t), e.hasOwnProperty(t);
}
class Yt {
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
      return i === (n ? r ? Zt : Qt : r ? Jt : Gt).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = m(e);
    if (!n) {
      let a;
      if (o && (a = Se[s]))
        return a;
      if (s === "hasOwnProperty")
        return xe;
    }
    const c = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      w(e) ? e : i
    );
    if ((C(s) ? Ut.has(s) : Re(s)) || (n || b(e, "get", s), r))
      return c;
    if (w(c)) {
      const a = o && wt(s) ? c : c.value;
      return n && R(a) ? vt(a) : a;
    }
    return R(c) ? n ? vt(c) : qt(c) : c;
  }
}
class $t extends Yt {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let r = e[s];
    if (!this._isShallow) {
      const a = j(r);
      if (!y(i) && !j(i) && (r = u(r), i = u(i)), !m(e) && w(r) && !w(i))
        return a || (r.value = i), !0;
    }
    const o = m(e) && wt(s) ? Number(s) < e.length : k(e, s), c = Reflect.set(
      e,
      s,
      i,
      w(e) ? e : n
    );
    return e === u(n) && (o ? O(i, r) && E(e, "set", s, i) : E(e, "add", s, i)), c;
  }
  deleteProperty(e, s) {
    const i = k(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return n && i && E(e, "delete", s, void 0), n;
  }
  has(e, s) {
    const i = Reflect.has(e, s);
    return (!C(s) || !Ut.has(s)) && b(e, "has", s), i;
  }
  ownKeys(e) {
    return b(
      e,
      "iterate",
      m(e) ? "length" : P
    ), Reflect.ownKeys(e);
  }
}
class Ft extends Yt {
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
const Te = /* @__PURE__ */ new $t(), Ee = /* @__PURE__ */ new Ft(), De = /* @__PURE__ */ new $t(!0), Oe = /* @__PURE__ */ new Ft(!0), gt = (t) => t, Z = (t) => Reflect.getPrototypeOf(t);
function Ae(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, r = u(n), o = K(r), c = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, d = n[t](...i), f = s ? gt : e ? bt : g;
    return !e && b(
      r,
      "iterate",
      a ? _t : P
    ), {
      // iterator protocol
      next() {
        const { value: p, done: _ } = d.next();
        return _ ? { value: p, done: _ } : {
          value: c ? [f(p[0]), f(p[1])] : f(p),
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
function q(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ie(t, e) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = u(r), c = u(n);
      t || (O(n, c) && b(o, "get", n), b(o, "get", c));
      const { has: a } = Z(o), d = e ? gt : t ? bt : g;
      if (a.call(o, n))
        return d(r.get(n));
      if (a.call(o, c))
        return d(r.get(c));
      r !== o && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && b(u(n), "iterate", P), n.size;
    },
    has(n) {
      const r = this.__v_raw, o = u(r), c = u(n);
      return t || (O(n, c) && b(o, "has", n), b(o, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const o = this, c = o.__v_raw, a = u(c), d = e ? gt : t ? bt : g;
      return !t && b(a, "iterate", P), c.forEach((f, p) => n.call(r, d(f), d(p), o));
    }
  };
  return ee(
    s,
    t ? {
      add: q("add"),
      set: q("set"),
      delete: q("delete"),
      clear: q("clear")
    } : {
      add(n) {
        !e && !y(n) && !j(n) && (n = u(n));
        const r = u(this);
        return Z(r).has.call(r, n) || (r.add(n), E(r, "add", n, n)), this;
      },
      set(n, r) {
        !e && !y(r) && !j(r) && (r = u(r));
        const o = u(this), { has: c, get: a } = Z(o);
        let d = c.call(o, n);
        d || (n = u(n), d = c.call(o, n));
        const f = a.call(o, n);
        return o.set(n, r), d ? O(r, f) && E(o, "set", n, r) : E(o, "add", n, r), this;
      },
      delete(n) {
        const r = u(this), { has: o, get: c } = Z(r);
        let a = o.call(r, n);
        a || (n = u(n), a = o.call(r, n)), c && c.call(r, n);
        const d = r.delete(n);
        return a && E(r, "delete", n, void 0), d;
      },
      clear() {
        const n = u(this), r = n.size !== 0, o = n.clear();
        return r && E(
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
    s[n] = Ae(n, t, e);
  }), s;
}
function it(t, e) {
  const s = Ie(t, e);
  return (i, n, r) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    k(s, n) && n in i ? s : i,
    n,
    r
  );
}
const Me = {
  get: /* @__PURE__ */ it(!1, !1)
}, Pe = {
  get: /* @__PURE__ */ it(!1, !0)
}, je = {
  get: /* @__PURE__ */ it(!0, !1)
}, Ce = {
  get: /* @__PURE__ */ it(!0, !0)
}, Gt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap();
function Le(t) {
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
function Ne(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Le(ie(t));
}
function qt(t) {
  return j(t) ? t : rt(
    t,
    !1,
    Te,
    Me,
    Gt
  );
}
function as(t) {
  return rt(
    t,
    !1,
    De,
    Pe,
    Jt
  );
}
function vt(t) {
  return rt(
    t,
    !0,
    Ee,
    je,
    Qt
  );
}
function fs(t) {
  return rt(
    t,
    !0,
    Oe,
    Ce,
    Zt
  );
}
function rt(t, e, s, i, n) {
  if (!R(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = Ne(t);
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
function U(t) {
  return j(t) ? U(t.__v_raw) : !!(t && t.__v_isReactive);
}
function j(t) {
  return !!(t && t.__v_isReadonly);
}
function y(t) {
  return !!(t && t.__v_isShallow);
}
function Ke(t) {
  return t ? !!t.__v_raw : !1;
}
function u(t) {
  const e = t && t.__v_raw;
  return e ? u(e) : t;
}
function ls(t) {
  return !k(t, "__v_skip") && Object.isExtensible(t) && ae(t, "__v_skip", !0), t;
}
const g = (t) => R(t) ? qt(t) : t, bt = (t) => R(t) ? vt(t) : t;
function w(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function us(t) {
  return He(t, !1);
}
function He(t, e) {
  return w(t) ? t : new Ve(t, e);
}
class Ve {
  constructor(e, s) {
    this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : u(e), this._value = s ? e : g(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || y(e) || j(e);
    e = i ? e : u(e), O(e, s) && (this._rawValue = e, this._value = i ? e : g(e), this.dep.trigger());
  }
}
function We(t) {
  return w(t) ? t.value : t;
}
const ze = {
  get: (t, e, s) => e === "__v_raw" ? t : We(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return w(n) && !w(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function hs(t) {
  return U(t) ? t : new Proxy(t, ze);
}
class Be {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    const s = this.dep = new nt(), { get: i, set: n } = e(s.track.bind(s), s.trigger.bind(s));
    this._get = i, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function ps(t) {
  return new Be(t);
}
class Ue {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Y - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    h !== this)
      return Lt(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ht(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function ds(t, e, s = !1) {
  let i, n;
  return M(t) ? i = t : (i = t.get, n = t.set), new Ue(i, n, s);
}
const X = {}, tt = /* @__PURE__ */ new WeakMap();
let I;
function Ye(t, e = !1, s = I) {
  if (s) {
    let i = tt.get(s);
    i || tt.set(s, i = []), i.push(t);
  }
}
function _s(t, e, s = kt) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: c, call: a } = s, d = (l) => n ? l : y(l) || n === !1 || n === 0 ? D(l, 1) : D(l);
  let f, p, _, F, G = !1, J = !1;
  if (w(t) ? (p = () => t.value, G = y(t)) : U(t) ? (p = () => d(t), G = !0) : m(t) ? (J = !0, G = t.some((l) => U(l) || y(l)), p = () => t.map((l) => {
    if (w(l))
      return l.value;
    if (U(l))
      return d(l);
    if (M(l))
      return a ? a(l, 2) : l();
  })) : M(t) ? e ? p = a ? () => a(t, 2) : t : p = () => {
    if (_) {
      Wt();
      try {
        _();
      } finally {
        zt();
      }
    }
    const l = I;
    I = f;
    try {
      return a ? a(t, 3, [F]) : t(F);
    } finally {
      I = l;
    }
  } : p = te, e && n) {
    const l = p, x = n === !0 ? 1 / 0 : n;
    p = () => D(l(), x);
  }
  const ot = ve(), L = () => {
    f.stop(), ot && ot.active && se(ot.effects, f);
  };
  if (r && e) {
    const l = e;
    e = (...x) => {
      l(...x), L();
    };
  }
  let A = J ? new Array(t.length).fill(X) : X;
  const V = (l) => {
    if (!(!(f.flags & 1) || !f.dirty && !l))
      if (e) {
        const x = f.run();
        if (n || G || (J ? x.some((ct, Q) => O(ct, A[Q])) : O(x, A))) {
          _ && _();
          const ct = I;
          I = f;
          try {
            const Q = [
              x,
              // pass undefined as the old value when it's changed for the first time
              A === X ? void 0 : J && A[0] === X ? [] : A,
              F
            ];
            A = x, a ? a(e, 3, Q) : (
              // @ts-expect-error
              e(...Q)
            );
          } finally {
            I = ct;
          }
        }
      } else
        f.run();
  };
  return c && c(V), f = new be(p), f.scheduler = o ? () => o(V, !1) : V, F = (l) => Ye(l, !1, f), _ = f.onStop = () => {
    const l = tt.get(f);
    if (l) {
      if (a)
        a(l, 4);
      else
        for (const x of l) x();
      tt.delete(f);
    }
  }, e ? i ? V(!0) : A = f.run() : o ? o(V.bind(null, !0), !0) : f.run(), L.pause = f.pause.bind(f), L.resume = f.resume.bind(f), L.stop = L, L;
}
function D(t, e = 1 / 0, s) {
  if (e <= 0 || !R(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, w(t))
    D(t.value, e, s);
  else if (m(t))
    for (let i = 0; i < t.length; i++)
      D(t[i], e, s);
  else if (At(t) || K(t))
    t.forEach((i) => {
      D(i, e, s);
    });
  else if (Mt(t)) {
    for (const i in t)
      D(t[i], e, s);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && D(t[i], e, s);
  }
  return t;
}
const gs = Tt({
  styles: Xt(
    Tt({
      name: at().min(1),
      element: at().min(1),
      classes: at().min(1)
    })
  ).min(1)
});
export {
  us as $,
  ke as A,
  as as B,
  ae as C,
  b as D,
  kt as E,
  fs as F,
  Qe as G,
  E as H,
  qt as I,
  Wt as J,
  zt as K,
  ds as L,
  U as M,
  te as N,
  y as O,
  j as P,
  xt as Q,
  be as R,
  bt as S,
  g as T,
  C as U,
  ce as V,
  Mt as W,
  We as X,
  ns as Y,
  rs as Z,
  os as _,
  H as a,
  ps as a0,
  ge as a1,
  gs as a2,
  R as b,
  Ke as c,
  m as d,
  ee as e,
  fe as f,
  Je as g,
  w as h,
  M as i,
  is as j,
  Ge as k,
  Ze as l,
  ls as m,
  de as n,
  es as o,
  hs as p,
  k as q,
  se as r,
  Fe as s,
  u as t,
  cs as u,
  qe as v,
  _s as w,
  Xe as x,
  ss as y,
  ts as z
};
