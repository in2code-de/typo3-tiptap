import { t as dt } from "../index-e_Ie-2wz.js";
import { E as ht } from "../index-DHU43GOd.js";
import { o as J, a as pt, s as K, p as _t, d as mt, c as Q } from "../configuration-C_XBPA12.js";
// @__NO_SIDE_EFFECTS__
function gt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const bt = Object.assign, vt = Object.prototype.hasOwnProperty, H = (t, e) => vt.call(t, e), O = Array.isArray, N = (t) => tt(t) === "[object Map]", wt = (t) => typeof t == "string", A = (t) => typeof t == "symbol", C = (t) => t !== null && typeof t == "object", yt = Object.prototype.toString, tt = (t) => yt.call(t), Rt = (t) => tt(t).slice(8, -1), V = (t) => wt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, M = (t, e) => !Object.is(t, e);
let St, et = 0, L;
function F() {
  et++;
}
function q() {
  if (--et > 0)
    return;
  let t;
  for (; L; ) {
    let e = L;
    for (L = void 0; e; ) {
      const r = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (a) {
          t || (t = a);
        }
      e = r;
    }
  }
  if (t) throw t;
}
let j = !0;
const st = [];
function Tt() {
  st.push(j), j = !1;
}
function Mt() {
  const t = st.pop();
  j = t === void 0 ? !0 : t;
}
class rt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
  }
  trigger(e) {
    this.version++, this.notify(e);
  }
  notify(e) {
    F();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      q();
    }
  }
}
const B = /* @__PURE__ */ new WeakMap(), y = Symbol(
  ""
), z = Symbol(
  ""
), I = Symbol(
  ""
);
function p(t, e, r) {
  if (j && St) {
    let a = B.get(t);
    a || B.set(t, a = /* @__PURE__ */ new Map());
    let s = a.get(r);
    s || (a.set(r, s = new rt()), s.map = a, s.key = r), s.track();
  }
}
function b(t, e, r, a, s, n) {
  const i = B.get(t);
  if (!i)
    return;
  const o = (c) => {
    c && c.trigger();
  };
  if (F(), e === "clear")
    i.forEach(o);
  else {
    const c = O(t), l = c && V(r);
    if (c && r === "length") {
      const d = Number(a);
      i.forEach((f, h) => {
        (h === "length" || h === I || !A(h) && h >= d) && o(f);
      });
    } else
      switch ((r !== void 0 || i.has(void 0)) && o(i.get(r)), l && o(i.get(I)), e) {
        case "add":
          c ? l && o(i.get("length")) : (o(i.get(y)), N(t) && o(i.get(z)));
          break;
        case "delete":
          c || (o(i.get(y)), N(t) && o(i.get(z)));
          break;
        case "set":
          N(t) && o(i.get(y));
          break;
      }
  }
  q();
}
function R(t) {
  const e = u(t);
  return e === t ? e : (p(e, "iterate", I), w(t) ? e : e.map(m));
}
function U(t) {
  return p(t = u(t), "iterate", I), t;
}
function g(t, e) {
  return v(t) ? ft(t) ? x(m(e)) : x(e) : m(e);
}
const Ot = {
  __proto__: null,
  [Symbol.iterator]() {
    return D(this, Symbol.iterator, (t) => g(this, t));
  },
  concat(...t) {
    return R(this).concat(
      ...t.map((e) => O(e) ? R(e) : e)
    );
  },
  entries() {
    return D(this, "entries", (t) => (t[1] = g(this, t[1]), t));
  },
  every(t, e) {
    return _(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return _(
      this,
      "filter",
      t,
      e,
      (r) => r.map((a) => g(this, a)),
      arguments
    );
  },
  find(t, e) {
    return _(
      this,
      "find",
      t,
      e,
      (r) => g(this, r),
      arguments
    );
  },
  findIndex(t, e) {
    return _(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return _(
      this,
      "findLast",
      t,
      e,
      (r) => g(this, r),
      arguments
    );
  },
  findLastIndex(t, e) {
    return _(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return _(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return W(this, "includes", t);
  },
  indexOf(...t) {
    return W(this, "indexOf", t);
  },
  join(t) {
    return R(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return W(this, "lastIndexOf", t);
  },
  map(t, e) {
    return _(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return T(this, "pop");
  },
  push(...t) {
    return T(this, "push", t);
  },
  reduce(t, ...e) {
    return X(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return X(this, "reduceRight", t, e);
  },
  shift() {
    return T(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return _(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return T(this, "splice", t);
  },
  toReversed() {
    return R(this).toReversed();
  },
  toSorted(t) {
    return R(this).toSorted(t);
  },
  toSpliced(...t) {
    return R(this).toSpliced(...t);
  },
  unshift(...t) {
    return T(this, "unshift", t);
  },
  values() {
    return D(this, "values", (t) => g(this, t));
  }
};
function D(t, e, r) {
  const a = U(t), s = a[e]();
  return a !== t && !w(t) && (s._next = s.next, s.next = () => {
    const n = s._next();
    return n.done || (n.value = r(n.value)), n;
  }), s;
}
const Ct = Array.prototype;
function _(t, e, r, a, s, n) {
  const i = U(t), o = i !== t && !w(t), c = i[e];
  if (c !== Ct[e]) {
    const f = c.apply(t, n);
    return o ? m(f) : f;
  }
  let l = r;
  i !== t && (o ? l = function(f, h) {
    return r.call(this, g(t, f), h, t);
  } : r.length > 2 && (l = function(f, h) {
    return r.call(this, f, h, t);
  }));
  const d = c.call(i, l, a);
  return o && s ? s(d) : d;
}
function X(t, e, r, a) {
  const s = U(t);
  let n = r;
  return s !== t && (w(t) ? r.length > 3 && (n = function(i, o, c) {
    return r.call(this, i, o, c, t);
  }) : n = function(i, o, c) {
    return r.call(this, i, g(t, o), c, t);
  }), s[e](n, ...a);
}
function W(t, e, r) {
  const a = u(t);
  p(a, "iterate", I);
  const s = a[e](...r);
  return (s === -1 || s === !1) && $t(r[0]) ? (r[0] = u(r[0]), a[e](...r)) : s;
}
function T(t, e, r = []) {
  Tt(), F();
  const a = u(t)[e].apply(t, r);
  return q(), Mt(), a;
}
const It = /* @__PURE__ */ gt("__proto__,__v_isRef,__isVue"), nt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(A)
);
function xt(t) {
  A(t) || (t = String(t));
  const e = u(this);
  return p(e, "has", t), e.hasOwnProperty(t);
}
class it {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, a) {
    if (r === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, n = this._isShallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return n;
    if (r === "__v_raw")
      return a === (s ? n ? Ht : ct : n ? Wt : at).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(a) ? e : void 0;
    const i = O(e);
    if (!s) {
      let c;
      if (i && (c = Ot[r]))
        return c;
      if (r === "hasOwnProperty")
        return xt;
    }
    const o = Reflect.get(
      e,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      S(e) ? e : a
    );
    if ((A(r) ? nt.has(r) : It(r)) || (s || p(e, "get", r), n))
      return o;
    if (S(o)) {
      const c = i && V(r) ? o : o.value;
      return s && C(c) ? Y(c) : c;
    }
    return C(o) ? s ? Y(o) : lt(o) : o;
  }
}
class At extends it {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, a, s) {
    let n = e[r];
    const i = O(e) && V(r);
    if (!this._isShallow) {
      const l = v(n);
      if (!w(a) && !v(a) && (n = u(n), a = u(a)), !i && S(n) && !S(a))
        return l || (n.value = a), !0;
    }
    const o = i ? Number(r) < e.length : H(e, r), c = Reflect.set(
      e,
      r,
      a,
      S(e) ? e : s
    );
    return e === u(s) && (o ? M(a, n) && b(e, "set", r, a) : b(e, "add", r, a)), c;
  }
  deleteProperty(e, r) {
    const a = H(e, r);
    e[r];
    const s = Reflect.deleteProperty(e, r);
    return s && a && b(e, "delete", r, void 0), s;
  }
  has(e, r) {
    const a = Reflect.has(e, r);
    return (!A(r) || !nt.has(r)) && p(e, "has", r), a;
  }
  ownKeys(e) {
    return p(
      e,
      "iterate",
      O(e) ? "length" : y
    ), Reflect.ownKeys(e);
  }
}
class Pt extends it {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return !0;
  }
  deleteProperty(e, r) {
    return !0;
  }
}
const Et = /* @__PURE__ */ new At(), Nt = /* @__PURE__ */ new Pt(), $ = (t) => t, P = (t) => Reflect.getPrototypeOf(t);
function jt(t, e, r) {
  return function(...a) {
    const s = this.__v_raw, n = u(s), i = N(n), o = t === "entries" || t === Symbol.iterator && i, c = t === "keys" && i, l = s[t](...a), d = r ? $ : e ? x : m;
    return !e && p(
      n,
      "iterate",
      c ? z : y
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = l.next();
        return h ? { value: f, done: h } : {
          value: o ? [d(f[0]), d(f[1])] : d(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function E(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Kt(t, e) {
  const r = {
    get(s) {
      const n = this.__v_raw, i = u(n), o = u(s);
      t || (M(s, o) && p(i, "get", s), p(i, "get", o));
      const { has: c } = P(i), l = e ? $ : t ? x : m;
      if (c.call(i, s))
        return l(n.get(s));
      if (c.call(i, o))
        return l(n.get(o));
      n !== i && n.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && p(u(s), "iterate", y), s.size;
    },
    has(s) {
      const n = this.__v_raw, i = u(n), o = u(s);
      return t || (M(s, o) && p(i, "has", s), p(i, "has", o)), s === o ? n.has(s) : n.has(s) || n.has(o);
    },
    forEach(s, n) {
      const i = this, o = i.__v_raw, c = u(o), l = e ? $ : t ? x : m;
      return !t && p(c, "iterate", y), o.forEach((d, f) => s.call(n, l(d), l(f), i));
    }
  };
  return bt(
    r,
    t ? {
      add: E("add"),
      set: E("set"),
      delete: E("delete"),
      clear: E("clear")
    } : {
      add(s) {
        !e && !w(s) && !v(s) && (s = u(s));
        const n = u(this);
        return P(n).has.call(n, s) || (n.add(s), b(n, "add", s, s)), this;
      },
      set(s, n) {
        !e && !w(n) && !v(n) && (n = u(n));
        const i = u(this), { has: o, get: c } = P(i);
        let l = o.call(i, s);
        l || (s = u(s), l = o.call(i, s));
        const d = c.call(i, s);
        return i.set(s, n), l ? M(n, d) && b(i, "set", s, n) : b(i, "add", s, n), this;
      },
      delete(s) {
        const n = u(this), { has: i, get: o } = P(n);
        let c = i.call(n, s);
        c || (s = u(s), c = i.call(n, s)), o && o.call(n, s);
        const l = n.delete(s);
        return c && b(n, "delete", s, void 0), l;
      },
      clear() {
        const s = u(this), n = s.size !== 0, i = s.clear();
        return n && b(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    r[s] = jt(s, t, e);
  }), r;
}
function ot(t, e) {
  const r = Kt(t, e);
  return (a, s, n) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? a : Reflect.get(
    H(r, s) && s in a ? r : a,
    s,
    n
  );
}
const Lt = {
  get: /* @__PURE__ */ ot(!1, !1)
}, Dt = {
  get: /* @__PURE__ */ ot(!0, !1)
}, at = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Bt(t) {
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
function zt(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Bt(Rt(t));
}
function lt(t) {
  return v(t) ? t : ut(
    t,
    !1,
    Et,
    Lt,
    at
  );
}
function Y(t) {
  return ut(
    t,
    !0,
    Nt,
    Dt,
    ct
  );
}
function ut(t, e, r, a, s) {
  if (!C(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const n = zt(t);
  if (n === 0)
    return t;
  const i = s.get(t);
  if (i)
    return i;
  const o = new Proxy(
    t,
    n === 2 ? a : r
  );
  return s.set(t, o), o;
}
function ft(t) {
  return v(t) ? ft(t.__v_raw) : !!(t && t.__v_isReactive);
}
function v(t) {
  return !!(t && t.__v_isReadonly);
}
function w(t) {
  return !!(t && t.__v_isShallow);
}
function $t(t) {
  return t ? !!t.__v_raw : !1;
}
function u(t) {
  const e = t && t.__v_raw;
  return e ? u(e) : t;
}
const m = (t) => C(t) ? lt(t) : t, x = (t) => C(t) ? Y(t) : t;
function S(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Yt(t) {
  return Gt(t, !1);
}
function Gt(t, e) {
  return S(t) ? t : new Vt(t, e);
}
class Vt {
  constructor(e, r) {
    this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? e : u(e), this._value = r ? e : m(e), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const r = this._rawValue, a = this.__v_isShallow || w(e) || v(e);
    e = a ? e : u(e), M(e, r) && (this._rawValue = e, this._value = a ? e : m(e), this.dep.trigger());
  }
}
const Ft = J({
  styles: pt(
    J({
      name: K().min(1),
      element: K().min(1),
      classes: K().min(1)
    })
  ).min(1)
});
function Z(t) {
  return t.type.name === "heading" && t.attrs?.level ? `h${t.attrs.level}` : t.type.spec.parseDOM?.[0] && typeof t.type.spec.parseDOM[0] == "object" && "tag" in t.type.spec.parseDOM[0] && t.type.spec.parseDOM[0].tag || t.type.name;
}
function k(t) {
  return t.type.spec.parseDOM?.[0] && typeof t.type.spec.parseDOM[0] == "object" && "tag" in t.type.spec.parseDOM[0] ? t.type.spec.parseDOM[0].tag.split("[")[0] : null;
}
function G(t) {
  const { selection: e } = t, { from: r, to: a } = e, s = t.doc.resolve(r), n = t.doc.resolve(a);
  if (s.sameParent(n)) {
    let i = [];
    if (r === a)
      i = [...s.marks()];
    else {
      const c = r + 1 < a ? r + 1 : r;
      try {
        if (i = [...t.doc.resolve(c).marks()], a - r > 1)
          for (let l = r + 1; l < a; l++) {
            const d = [...t.doc.resolve(l).marks()];
            i = i.filter(
              (f) => d.some((h) => h.type === f.type)
            );
          }
      } catch {
        i = [...s.marks()];
      }
    }
    const o = i.find((c) => {
      const l = k(c);
      return l && l !== "span";
    });
    if (o)
      return {
        tagName: k(o),
        // 'a' - from the mark
        mark: o
        // the actual mark
        // Don't include node when returning a mark
        // This makes it clear we're dealing with a mark, not a node
      };
    for (let c = s.depth; c >= 0; c--) {
      const l = s.node(c);
      if (l.type.name !== "doc")
        return {
          node: l,
          tagName: Z(l)
          // No mark when returning a node
        };
    }
  }
  for (let i = Math.min(s.depth, n.depth); i >= 0; i--) {
    const o = s.node(i);
    if (o.type.name !== "doc")
      return {
        node: o,
        tagName: Z(o)
      };
  }
  return {
    node: t.doc,
    tagName: "doc"
  };
}
const qt = [
  // Core block nodes (from StarterKit and common extensions)
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "horizontalRule",
  "hardBreak",
  // Task list extension
  "taskList",
  "taskItem",
  // Table extension
  "table",
  "tableRow",
  "tableCell",
  "tableHeader",
  // Media extensions
  "image",
  "video",
  "audio",
  "figure",
  "figcaption",
  // Typography extensions
  "superscript",
  "subscript",
  // Layout extensions
  "columns",
  "column",
  "details",
  "summary",
  "div",
  "span",
  // Text marks (inline formatting)
  "bold",
  "italic",
  "underline",
  "strike",
  "code",
  "link"
], Ut = ht.create({
  name: "styles",
  addGlobalAttributes() {
    return [
      {
        // List all node types that should support classes
        types: qt,
        attributes: {
          class: {
            default: null,
            parseHTML: (t) => t.getAttribute("class") || null,
            renderHTML: (t) => t.class ? { class: t.class } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      toggleNodeClass: (t) => ({ editor: e, commands: r }) => {
        const { selection: a } = e.state, s = a.$from.node(), n = G(e.state);
        if (n.mark) {
          r.extendMarkRange(n.mark.type);
          const o = (n.mark.attrs.class || "").trim(), c = t.trim();
          return o === c ? r.updateAttributes(n.mark.type.name, { class: null }) : r.updateAttributes(n.mark.type.name, {
            class: c.length > 0 ? c : null
          });
        } else if (n.node) {
          const o = (s.attrs.class || "").trim(), c = t.trim();
          return o === c ? r.updateAttributes(s.type.name, { class: null }) : r.updateAttributes(s.type.name, {
            class: c.length > 0 ? c : null
          });
        }
        return !1;
      },
      hasNodeClass: (t) => ({ editor: e }) => {
        const { selection: r } = e.state, a = r.$from.node(), s = G(e.state);
        if (s.mark) {
          const i = (s.mark.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return t.split(" ").filter(Boolean).toSorted().every((c) => i.includes(c));
        } else if (s.node) {
          const i = (a.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return t.split(" ").filter(Boolean).toSorted().every((c) => i.includes(c));
        }
        return !1;
      }
    };
  }
});
function Zt(t) {
  const e = _t({
    pluginId: "styles",
    config: t,
    getValidationSchema: () => Ft
  }), r = Yt(), a = (s) => s.replaceAll(" ", "_").toLowerCase();
  mt({
    extensions: [
      Ut
    ],
    commands: e.styles.map((s, n) => {
      const i = Q(({ editor: l }) => l.commands.hasNodeClass(s.classes), 300), o = Q(() => r.value?.tagName === s.element, 300), c = s.classes;
      return {
        id: a(`style:${s.name}`),
        label: s.name,
        iconIdentifier: "styles",
        position: {
          toolbarGroupId: "styles",
          bubbleMenuGroupId: "styles"
        },
        status: {
          isActive: i,
          isVisible: o
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().toggleNodeClass(c).run();
        },
        hooks: {
          onEditorMounted: n === 0 ? ({ editor: l }) => {
            const d = dt(250, () => {
              const f = G(l.state);
              console.log(1759391901984, f), r.value = f, l.emit("parentNodeChanged", f);
            });
            l.on("selectionUpdate", d);
          } : void 0
        }
      };
    })
  });
}
export {
  Zt as default
};
