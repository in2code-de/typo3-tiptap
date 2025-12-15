import { e as wt, i as Y, a as Tt, n as Fe, b as Pt, c as Vc, d as J, f as ui, g as Ii, h as di, j as Ni, N as He, k as jc, p as zc, m as Wc, l as Kc, E as lt, t as Li, o as or, q as st, r as qc, s as On, u as _d, R as kd, v as cs, w as xd, x as Nt, y as Sd, z as lr, A as Zt, B as Cd, C as Ed, D as Jc, G as ao, H as Ad, I as Td, J as vn, K as _n, L as Md, M as Dd, O as Od, P as Rd, Q as Id, S as Nd, T as nl, U as Yc, V as uo, W as Gc, X as at, Y as Mr, Z as Ld, _ as Xc, $ as Q, a0 as Pd, a1 as $d, a2 as $e, a3 as Bd } from "./styles-zL8IYZyO.js";
import { o as sl, b as il, s as ss, a as rl, r as Fd, u as Hd, g as Ud } from "./configuration-B8zvYdvw.js";
import { d as lv, p as cv } from "./configuration-B8zvYdvw.js";
import { P as En, a as se, S as Be, F as wn, T as Ce, A as Vd, N as fo, E as Os, b as ie, D as ol, c as jd, d as zd, e as Qc, t as ht, M as Zc, m as ta, f as ea, g as qn, h as Jn, i as ll, n as Wd, j as Kd, k as qd, l as Jd, o as Yd, p as Gd, q as Xd } from "./index-DCsf0cLd.js";
import { C as uv, r as dv, s as fv, I as hv, u as pv, v as gv, w as mv, x as wv, R as bv, y as yv, z as vv, B as _v, G as kv, H as xv, J as Sv, K as Cv, L as Ev, O as Av, Q as Tv, U as Mv, V as Dv, W as Ov, X as Rv, Y as Iv, Z as Nv, _ as Lv, $ as Pv, a0 as $v, a1 as Bv, a2 as Fv, a3 as Hv, a4 as Uv, a5 as Vv, a6 as jv, a7 as zv, a8 as Wv, a9 as Kv, aa as qv, ab as Jv, ac as Yv, ad as Gv, ae as Xv, af as Qv, ag as Zv, ah as t1, ai as e1, aj as n1, ak as s1, al as i1, am as r1, an as o1, ao as l1, ap as c1, aq as a1, ar as u1, as as d1, at as f1, au as h1, av as p1, aw as g1, Q as m1, ax as w1, ay as b1, az as y1, aA as v1, aB as _1, aC as k1, aD as x1, aE as S1, aF as C1, aG as E1, aH as A1, aI as T1, aJ as M1, aK as D1, aL as O1, aM as R1, aN as I1, aO as N1, aP as L1, aQ as P1, aR as $1, aS as B1, aT as F1, aU as H1, aV as U1, aW as V1, aX as j1, aY as z1, aZ as W1, a_ as K1, a$ as q1, b0 as J1, b1 as Y1, b2 as G1, b3 as X1, b4 as Q1, b5 as Z1, b6 as t_, b7 as e_ } from "./index-DCsf0cLd.js";
import { B as Qd } from "./index-CASOKHd9.js";
import { B as Zd } from "./index-0-i1tnEj.js";
import { H as tf } from "./index-D6yrH6u4.js";
import { I as ef } from "./index-C3WMY3O1.js";
import { L as nf } from "./index-DYCfnBXh.js";
import { B as sf, L as rf, a as of, O as lf } from "./index-DOelEW0u.js";
import { U as cf } from "./index-DUBG5Vj6.js";
import { D as af, G as uf, U as df, T as ff } from "./index-Ds3IlGiQ.js";
import { getEditorSourceViewActiveStatus as hf } from "./plugins/source.js";
function Rs(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Pi(i, t, n);
  }
}
function ue(e, t, n, s) {
  if (Y(e)) {
    const i = Rs(e, t, n, s);
    return i && Kc(i) && i.catch((r) => {
      Pi(r, t, n);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ue(e[r], t, n, s));
    return i;
  }
}
function Pi(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || lt;
  if (t) {
    let l = t.parent;
    const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      vn(), Rs(r, null, 10, [
        e,
        c,
        a
      ]), _n();
      return;
    }
  }
  pf(e, n, i, s, o);
}
function pf(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Dt = [];
let ke = -1;
const Rn = [];
let Qe = null, Dn = 0;
const na = /* @__PURE__ */ Promise.resolve();
let fi = null;
function Ht(e) {
  const t = fi || na;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gf(e) {
  let t = ke + 1, n = Dt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Dt[s], r = hs(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ho(e) {
  if (!(e.flags & 1)) {
    const t = hs(e), n = Dt[Dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hs(n) ? Dt.push(e) : Dt.splice(gf(t), 0, e), e.flags |= 1, sa();
  }
}
function sa() {
  fi || (fi = na.then(ra));
}
function mf(e) {
  J(e) ? Rn.push(...e) : Qe && e.id === -1 ? Qe.splice(Dn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1), sa();
}
function cl(e, t, n = ke + 1) {
  for (; n < Dt.length; n++) {
    const s = Dt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Dt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ia(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)].sort(
      (n, s) => hs(n) - hs(s)
    );
    if (Rn.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, Dn = 0; Dn < Qe.length; Dn++) {
      const n = Qe[Dn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, Dn = 0;
  }
}
const hs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ra(e) {
  try {
    for (ke = 0; ke < Dt.length; ke++) {
      const t = Dt[ke];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ke < Dt.length; ke++) {
      const t = Dt[ke];
      t && (t.flags &= -2);
    }
    ke = -1, Dt.length = 0, ia(), fi = null, (Dt.length || Rn.length) && ra();
  }
}
let It = null, oa = null;
function hi(e) {
  const t = It;
  return It = e, oa = e && e.type.__scopeId || null, t;
}
function tn(e, t = It, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && mi(-1);
    const r = hi(t);
    let o;
    try {
      o = e(...i);
    } finally {
      hi(r), s._d && mi(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function dn(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[s];
    c && (vn(), ue(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), _n());
  }
}
const wf = Symbol("_vte"), la = (e) => e.__isTeleport, Le = Symbol("_leaveCb"), js = Symbol("_enterCb");
function bf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), Is(() => {
    e.isUnmounting = !0;
  }), e;
}
const Xt = [Function, Array], ca = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Xt,
  onEnter: Xt,
  onAfterEnter: Xt,
  onEnterCancelled: Xt,
  // leave
  onBeforeLeave: Xt,
  onLeave: Xt,
  onAfterLeave: Xt,
  onLeaveCancelled: Xt,
  // appear
  onBeforeAppear: Xt,
  onAppear: Xt,
  onAfterAppear: Xt,
  onAppearCancelled: Xt
}, aa = (e) => {
  const t = e.subTree;
  return t.component ? aa(t.component) : t;
}, yf = {
  name: "BaseTransition",
  props: ca,
  setup(e, { slots: t }) {
    const n = Ui(), s = bf();
    return () => {
      const i = t.default && fa(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = ua(i), o = Li(e), { mode: l } = o;
      if (s.isLeaving)
        return cr(r);
      const c = al(r);
      if (!c)
        return cr(r);
      let a = Dr(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => a = d
      );
      c.type !== xt && ps(c, a);
      let u = n.subTree && al(n.subTree);
      if (u && u.type !== xt && !gn(u, c) && aa(n).type !== xt) {
        let d = Dr(
          u,
          o,
          s,
          n
        );
        if (ps(u, d), l === "out-in" && c.type !== xt)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, cr(r);
        l === "in-out" && c.type !== xt ? d.delayLeave = (f, h, p) => {
          const m = da(
            s,
            u
          );
          m[String(u.key)] = u, f[Le] = () => {
            h(), f[Le] = void 0, delete a.delayedLeave, u = void 0;
          }, a.delayedLeave = () => {
            p(), delete a.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function ua(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== xt) {
        t = n;
        break;
      }
  }
  return t;
}
const vf = yf;
function da(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Dr(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: a,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: m,
    onBeforeAppear: y,
    onAppear: b,
    onAfterAppear: M,
    onAppearCancelled: N
  } = t, A = String(e.key), P = da(n, e), T = (I, _) => {
    I && ue(
      I,
      s,
      9,
      _
    );
  }, B = (I, _) => {
    const U = _[1];
    T(I, _), J(I) ? I.every((O) => O.length <= 1) && U() : I.length <= 1 && U();
  }, E = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let _ = c;
      if (!n.isMounted)
        if (r)
          _ = y || c;
        else
          return;
      I[Le] && I[Le](
        !0
        /* cancelled */
      );
      const U = P[A];
      U && gn(e, U) && U.el[Le] && U.el[Le](), T(_, [I]);
    },
    enter(I) {
      let _ = a, U = u, O = d;
      if (!n.isMounted)
        if (r)
          _ = b || a, U = M || u, O = N || d;
        else
          return;
      let z = !1;
      const G = I[js] = (pt) => {
        z || (z = !0, pt ? T(O, [I]) : T(U, [I]), E.delayedLeave && E.delayedLeave(), I[js] = void 0);
      };
      _ ? B(_, [I, G]) : G();
    },
    leave(I, _) {
      const U = String(e.key);
      if (I[js] && I[js](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return _();
      T(f, [I]);
      let O = !1;
      const z = I[Le] = (G) => {
        O || (O = !0, _(), G ? T(m, [I]) : T(p, [I]), I[Le] = void 0, P[U] === e && delete P[U]);
      };
      P[U] = e, h ? B(h, [I, z]) : z();
    },
    clone(I) {
      const _ = Dr(
        I,
        t,
        n,
        s,
        i
      );
      return i && i(_), _;
    }
  };
  return E;
}
function cr(e) {
  if ($i(e))
    return e = je(e), e.children = null, e;
}
function al(e) {
  if (!$i(e))
    return la(e.type) && e.children ? ua(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Y(n.default))
      return n.default();
  }
}
function ps(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ps(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fa(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ft ? (o.patchFlag & 128 && i++, s = s.concat(
      fa(o.children, t, l)
    )) : (t || o.type !== xt) && s.push(l != null ? je(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Gt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function _f() {
  const e = Ui();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function ha(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const pi = /* @__PURE__ */ new WeakMap();
function as(e, t, n, s, i = !1) {
  if (J(e)) {
    e.forEach(
      (p, m) => as(
        p,
        t && (J(t) ? t[m] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (In(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && as(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? yo(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, a = t && t.r, u = l.refs === lt ? l.refs = {} : l.refs, d = l.setupState, f = Li(d), h = d === lt ? jc : (p) => st(f, p);
  if (a != null && a !== c) {
    if (ul(t), Tt(a))
      u[a] = null, h(a) && (d[a] = null);
    else if (di(a)) {
      a.value = null;
      const p = t;
      p.k && (u[p.k] = null);
    }
  }
  if (Y(c))
    Rs(c, l, 12, [o, u]);
  else {
    const p = Tt(c), m = di(c);
    if (p || m) {
      const y = () => {
        if (e.f) {
          const b = p ? h(c) ? d[c] : u[c] : c.value;
          if (i)
            J(b) && qc(b, r);
          else if (J(b))
            b.includes(r) || b.push(r);
          else if (p)
            u[c] = [r], h(c) && (d[c] = u[c]);
          else {
            const M = [r];
            c.value = M, e.k && (u[e.k] = M);
          }
        } else p ? (u[c] = o, h(c) && (d[c] = o)) : m && (c.value = o, e.k && (u[e.k] = o));
      };
      if (o) {
        const b = () => {
          y(), pi.delete(e);
        };
        b.id = -1, pi.set(e, b), Wt(b, n);
      } else
        ul(e), y();
    }
  }
}
function ul(e) {
  const t = pi.get(e);
  t && (t.flags |= 8, pi.delete(e));
}
Ni().requestIdleCallback;
Ni().cancelIdleCallback;
const In = (e) => !!e.type.__asyncLoader, $i = (e) => e.type.__isKeepAlive;
function kf(e, t) {
  pa(e, "a", t);
}
function xf(e, t) {
  pa(e, "da", t);
}
function pa(e, t, n = St) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Bi(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      $i(i.parent.vnode) && Sf(s, t, n, i), i = i.parent;
  }
}
function Sf(e, t, n, s) {
  const i = Bi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ns(() => {
    qc(s[t], i);
  }, n);
}
function Bi(e, t, n = St, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      vn();
      const l = Ls(n), c = ue(t, n, e, o);
      return l(), _n(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const We = (e) => (t, n = St) => {
  (!ws || e === "sp") && Bi(e, (...s) => t(...s), n);
}, Cf = We("bm"), an = We("m"), Ef = We(
  "bu"
), Af = We("u"), Is = We(
  "bum"
), Ns = We("um"), Tf = We(
  "sp"
), Mf = We("rtg"), Df = We("rtc");
function Of(e, t = St) {
  Bi("ec", e, t);
}
const Rf = "components", If = Symbol.for("v-ndc");
function Nf(e) {
  return Tt(e) && Lf(Rf, e, !1) || e;
}
function Lf(e, t, n = !0, s = !1) {
  const i = It || St;
  if (i) {
    const r = i.type;
    {
      const l = xh(
        r,
        !1
      );
      if (l && (l === t || l === Nt(t) || l === uo(Nt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      dl(i[e] || r[e], t) || // global registration
      dl(i.appContext[e], t)
    );
    return !o && s ? r : o;
  }
}
function dl(e, t) {
  return e && (e[t] || e[Nt(t)] || e[uo(Nt(t))]);
}
function os(e, t, n, s) {
  let i;
  const r = n, o = J(e);
  if (o || Tt(e)) {
    const l = o && Dd(e);
    let c = !1, a = !1;
    l && (c = !Od(e), a = Rd(e), e = Id(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        c ? a ? Nd(nl(e[u])) : nl(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (Pt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const u = l[c];
        i[c] = t(e[u], u, c, r);
      }
    }
  else
    i = [];
  return i;
}
function Pf(e, t, n = {}, s, i) {
  if (It.ce || It.parent && In(It.parent) && It.parent.ce) {
    const a = Object.keys(n).length > 0;
    return q(), te(
      ft,
      null,
      [ut("slot", n, s)],
      a ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), q();
  const o = r && ga(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = te(
    ft,
    {
      key: (l && !Yc(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function ga(e) {
  return e.some((t) => ms(t) ? !(t.type === xt || t.type === ft && !ga(t.children)) : !0) ? e : null;
}
const Or = (e) => e ? Na(e) ? yo(e) : Or(e.parent) : null, us = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Or(e.parent),
    $root: (e) => Or(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ho(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ht.bind(e.proxy)),
    $watch: (e) => qf.bind(e)
  })
), ar = (e, t) => e !== lt && !e.__isScriptSetup && st(e, t), $f = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const f = o[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (ar(s, t))
          return o[t] = 1, s[t];
        if (i !== lt && st(i, t))
          return o[t] = 2, i[t];
        if (st(r, t))
          return o[t] = 3, r[t];
        if (n !== lt && st(n, t))
          return o[t] = 4, n[t];
        Rr && (o[t] = 0);
      }
    }
    const a = us[t];
    let u, d;
    if (a)
      return t === "$attrs" && Jc(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== lt && st(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, st(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return ar(i, t) ? (i[t] = n, !0) : s !== lt && st(s, t) ? (s[t] = n, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== lt && l[0] !== "$" && st(e, l) || ar(t, l) || st(r, l) || st(s, l) || st(us, l) || st(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fl(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Rr = !0;
function Bf(e) {
  const t = wa(e), n = e.proxy, s = e.ctx;
  Rr = !1, t.beforeCreate && hl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: p,
    activated: m,
    deactivated: y,
    beforeDestroy: b,
    beforeUnmount: M,
    destroyed: N,
    unmounted: A,
    render: P,
    renderTracked: T,
    renderTriggered: B,
    errorCaptured: E,
    serverPrefetch: I,
    // public API
    expose: _,
    inheritAttrs: U,
    // assets
    components: O,
    directives: z,
    filters: G
  } = t;
  if (a && Ff(a, s, null), o)
    for (const K in o) {
      const j = o[K];
      Y(j) && (s[K] = j.bind(n));
    }
  if (i) {
    const K = i.call(n, n);
    Pt(K) && (e.data = Td(K));
  }
  if (Rr = !0, r)
    for (const K in r) {
      const j = r[K], kt = Y(j) ? j.bind(n, n) : Y(j.get) ? j.get.bind(n, n) : He, Mn = !Y(j) && Y(j.set) ? j.set.bind(n) : He, un = Et({
        get: kt,
        set: Mn
      });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => un.value,
        set: (me) => un.value = me
      });
    }
  if (l)
    for (const K in l)
      ma(l[K], s, n, K);
  if (c) {
    const K = Y(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((j) => {
      po(j, K[j]);
    });
  }
  u && hl(u, e, "c");
  function tt(K, j) {
    J(j) ? j.forEach((kt) => K(kt.bind(n))) : j && K(j.bind(n));
  }
  if (tt(Cf, d), tt(an, f), tt(Ef, h), tt(Af, p), tt(kf, m), tt(xf, y), tt(Of, E), tt(Df, T), tt(Mf, B), tt(Is, M), tt(Ns, A), tt(Tf, I), J(_))
    if (_.length) {
      const K = e.exposed || (e.exposed = {});
      _.forEach((j) => {
        Object.defineProperty(K, j, {
          get: () => n[j],
          set: (kt) => n[j] = kt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === He && (e.render = P), U != null && (e.inheritAttrs = U), O && (e.components = O), z && (e.directives = z), I && ha(e);
}
function Ff(e, t, n = He) {
  J(e) && (e = Ir(e));
  for (const s in e) {
    const i = e[s];
    let r;
    Pt(i) ? "default" in i ? r = bn(
      i.from || s,
      i.default,
      !0
    ) : r = bn(i.from || s) : r = bn(i), di(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function hl(e, t, n) {
  ue(
    J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ma(e, t, n, s) {
  let i = s.includes(".") ? ya(n, s) : () => n[s];
  if (Tt(e)) {
    const r = t[e];
    Y(r) && ti(i, r);
  } else if (Y(e))
    ti(i, e.bind(n));
  else if (Pt(e))
    if (J(e))
      e.forEach((r) => ma(r, t, n, s));
    else {
      const r = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(r) && ti(i, r, e);
    }
}
function wa(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (a) => gi(c, a, o, !0)
  ), gi(c, t, o)), Pt(t) && r.set(t, c), c;
}
function gi(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && gi(e, r, n, !0), i && i.forEach(
    (o) => gi(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Hf[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Hf = {
  data: pl,
  props: gl,
  emits: gl,
  // objects
  methods: ls,
  computed: ls,
  // lifecycle
  beforeCreate: Mt,
  created: Mt,
  beforeMount: Mt,
  mounted: Mt,
  beforeUpdate: Mt,
  updated: Mt,
  beforeDestroy: Mt,
  beforeUnmount: Mt,
  destroyed: Mt,
  unmounted: Mt,
  activated: Mt,
  deactivated: Mt,
  errorCaptured: Mt,
  serverPrefetch: Mt,
  // assets
  components: ls,
  directives: ls,
  // watch
  watch: Vf,
  // provide / inject
  provide: pl,
  inject: Uf
};
function pl(e, t) {
  return t ? e ? function() {
    return wt(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Uf(e, t) {
  return ls(Ir(e), Ir(t));
}
function Ir(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ls(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gl(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    fl(e),
    fl(t ?? {})
  ) : t;
}
function Vf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Mt(e[s], t[s]);
  return n;
}
function ba() {
  return {
    app: null,
    config: {
      isNativeTag: jc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let jf = 0;
function zf(e, t) {
  return function(s, i = null) {
    Y(s) || (s = wt({}, s)), i != null && !Pt(i) && (i = null);
    const r = ba(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const a = r.app = {
      _uid: jf++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ch,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(a, ...d)) : Y(u) && (o.add(u), u(a, ...d))), a;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), a;
      },
      component(u, d) {
        return d ? (r.components[u] = d, a) : r.components[u];
      },
      directive(u, d) {
        return d ? (r.directives[u] = d, a) : r.directives[u];
      },
      mount(u, d, f) {
        if (!c) {
          const h = a._ceVNode || ut(s, i);
          return h.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, u, f), c = !0, a._container = u, u.__vue_app__ = a, yo(h.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (ue(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, d) {
        return r.provides[u] = d, a;
      },
      runWithContext(u) {
        const d = Nn;
        Nn = a;
        try {
          return u();
        } finally {
          Nn = d;
        }
      }
    };
    return a;
  };
}
let Nn = null;
function po(e, t) {
  if (St) {
    let n = St.provides;
    const s = St.parent && St.parent.provides;
    s === n && (n = St.provides = Object.create(s)), n[e] = t;
  }
}
function bn(e, t, n = !1) {
  const s = Ui();
  if (s || Nn) {
    let i = Nn ? Nn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const Wf = Symbol.for("v-scx"), Kf = () => bn(Wf);
function Yn(e, t) {
  return go(e, null, t);
}
function ti(e, t, n) {
  return go(e, t, n);
}
function go(e, t, n = lt) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = wt({}, n), c = t && s || !t && r !== "post";
  let a;
  if (ws) {
    if (r === "sync") {
      const h = Kf();
      a = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = He, h.resume = He, h.pause = He, h;
    }
  }
  const u = St;
  l.call = (h, p, m) => ue(h, u, p, m);
  let d = !1;
  r === "post" ? l.scheduler = (h) => {
    Wt(h, u && u.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (h, p) => {
    p ? h() : ho(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = xd(e, t, l);
  return ws && (a ? a.push(f) : c && f()), f;
}
function qf(e, t, n) {
  const s = this.proxy, i = Tt(e) ? e.includes(".") ? ya(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Y(t) ? r = t : (r = t.handler, n = t);
  const o = Ls(this), l = go(i, r.bind(s), n);
  return o(), l;
}
function ya(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Jf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
function Yf(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || lt;
  let i = n;
  const r = t.startsWith("update:"), o = r && Jf(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => Tt(u) ? u.trim() : u)), o.number && (i = n.map(Sd)));
  let l, c = s[l = lr(t)] || // also try camelCase event handler (#2249)
  s[l = lr(Nt(t))];
  !c && r && (c = s[l = lr(Zt(t))]), c && ue(
    c,
    e,
    6,
    i
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ue(
      a,
      e,
      6,
      i
    );
  }
}
const Gf = /* @__PURE__ */ new WeakMap();
function va(e, t, n = !1) {
  const s = n ? Gf : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Y(e)) {
    const c = (a) => {
      const u = va(a, t, !0);
      u && (l = !0, wt(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (Pt(e) && s.set(e, null), null) : (J(r) ? r.forEach((c) => o[c] = null) : wt(o, r), Pt(e) && s.set(e, o), o);
}
function Fi(e, t) {
  return !e || !Ii(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Zt(t)) || st(e, t));
}
function ml(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: a,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: p,
    inheritAttrs: m
  } = e, y = hi(e);
  let b, M;
  try {
    if (n.shapeFlag & 4) {
      const A = i || s, P = A;
      b = xe(
        a.call(
          P,
          A,
          u,
          d,
          h,
          f,
          p
        )
      ), M = l;
    } else {
      const A = t;
      b = xe(
        A.length > 1 ? A(
          d,
          { attrs: l, slots: o, emit: c }
        ) : A(
          d,
          null
        )
      ), M = t.props ? l : Xf(l);
    }
  } catch (A) {
    ds.length = 0, Pi(A, e, 1), b = ut(xt);
  }
  let N = b;
  if (M && m !== !1) {
    const A = Object.keys(M), { shapeFlag: P } = N;
    A.length && P & 7 && (r && A.some(ao) && (M = Qf(
      M,
      r
    )), N = je(N, M, !1, !0));
  }
  return n.dirs && (N = je(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && ps(N, n.transition), b = N, hi(y), b;
}
const Xf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ii(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qf = (e, t) => {
  const n = {};
  for (const s in e)
    (!ao(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Zf(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? wl(s, o, a) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (o[f] !== s[f] && !Fi(a, f))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? wl(s, o, a) : !0 : !!o;
  return !1;
}
function wl(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Fi(n, r))
      return !0;
  }
  return !1;
}
function th({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const _a = {}, ka = () => Object.create(_a), xa = (e) => Object.getPrototypeOf(e) === _a;
function eh(e, t, n, s = !1) {
  const i = {}, r = ka();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sa(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : Cd(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function nh(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = Li(i), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Fi(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (c)
          if (st(r, f))
            h !== r[f] && (r[f] = h, a = !0);
          else {
            const p = Nt(f);
            i[p] = Nr(
              c,
              l,
              p,
              h,
              e,
              !1
            );
          }
        else
          h !== r[f] && (r[f] = h, a = !0);
      }
    }
  } else {
    Sa(e, t, i, r) && (a = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Zt(d)) === d || !st(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Nr(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !st(t, d)) && (delete r[d], a = !0);
  }
  a && Ad(e.attrs, "set", "");
}
function Sa(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (cs(c))
        continue;
      const a = t[c];
      let u;
      i && st(i, u = Nt(c)) ? !r || !r.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : Fi(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (r) {
    const c = Li(n), a = l || lt;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Nr(
        i,
        c,
        d,
        a[d],
        e,
        !st(a, d)
      );
    }
  }
  return o;
}
function Nr(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = st(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Y(c)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const u = Ls(i);
          s = a[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Zt(n)) && (s = !0));
  }
  return s;
}
const sh = /* @__PURE__ */ new WeakMap();
function Ca(e, t, n = !1) {
  const s = n ? sh : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!Y(e)) {
    const u = (d) => {
      c = !0;
      const [f, h] = Ca(d, t, !0);
      wt(o, f), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return Pt(e) && s.set(e, On), On;
  if (J(r))
    for (let u = 0; u < r.length; u++) {
      const d = Nt(r[u]);
      bl(d) && (o[d] = lt);
    }
  else if (r)
    for (const u in r) {
      const d = Nt(u);
      if (bl(d)) {
        const f = r[u], h = o[d] = J(f) || Y(f) ? { type: f } : wt({}, f), p = h.type;
        let m = !1, y = !0;
        if (J(p))
          for (let b = 0; b < p.length; ++b) {
            const M = p[b], N = Y(M) && M.name;
            if (N === "Boolean") {
              m = !0;
              break;
            } else N === "String" && (y = !1);
          }
        else
          m = Y(p) && p.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = y, (m || st(h, "default")) && l.push(d);
      }
    }
  const a = [o, l];
  return Pt(e) && s.set(e, a), a;
}
function bl(e) {
  return e[0] !== "$" && !cs(e);
}
const mo = (e) => e === "_" || e === "_ctx" || e === "$stable", wo = (e) => J(e) ? e.map(xe) : [xe(e)], ih = (e, t, n) => {
  if (t._n)
    return t;
  const s = tn((...i) => wo(t(...i)), n);
  return s._c = !1, s;
}, Ea = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (mo(i)) continue;
    const r = e[i];
    if (Y(r))
      t[i] = ih(i, r, s);
    else if (r != null) {
      const o = wo(r);
      t[i] = () => o;
    }
  }
}, Aa = (e, t) => {
  const n = wo(t);
  e.slots.default = () => n;
}, Ta = (e, t, n) => {
  for (const s in t)
    (n || !mo(s)) && (e[s] = t[s]);
}, rh = (e, t, n) => {
  const s = e.slots = ka();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ta(s, t, n), n && Ed(s, "_", i, !0)) : Ea(t, s);
  } else t && Aa(e, t);
}, oh = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = lt;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Ta(i, t, n) : (r = !t.$stable, Ea(t, i)), o = t;
  } else t && (Aa(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !mo(l) && o[l] == null && delete i[l];
}, Wt = dh;
function lh(e) {
  return ch(e);
}
function ch(e, t) {
  const n = Ni();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = He,
    insertStaticContent: p
  } = e, m = (g, w, v, C = null, k = null, x = null, L = void 0, R = null, D = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !gn(g, w) && (C = Vs(g), me(g, k, x, !0), g = null), w.patchFlag === -2 && (D = !1, w.dynamicChildren = null);
    const { type: S, ref: H, shapeFlag: $ } = w;
    switch (S) {
      case Hi:
        y(g, w, v, C);
        break;
      case xt:
        b(g, w, v, C);
        break;
      case dr:
        g == null && M(w, v, C, L);
        break;
      case ft:
        O(
          g,
          w,
          v,
          C,
          k,
          x,
          L,
          R,
          D
        );
        break;
      default:
        $ & 1 ? P(
          g,
          w,
          v,
          C,
          k,
          x,
          L,
          R,
          D
        ) : $ & 6 ? z(
          g,
          w,
          v,
          C,
          k,
          x,
          L,
          R,
          D
        ) : ($ & 64 || $ & 128) && S.process(
          g,
          w,
          v,
          C,
          k,
          x,
          L,
          R,
          D,
          es
        );
    }
    H != null && k ? as(H, g && g.ref, x, w || g, !w) : H == null && g && g.ref != null && as(g.ref, null, x, g, !0);
  }, y = (g, w, v, C) => {
    if (g == null)
      s(
        w.el = l(w.children),
        v,
        C
      );
    else {
      const k = w.el = g.el;
      w.children !== g.children && a(k, w.children);
    }
  }, b = (g, w, v, C) => {
    g == null ? s(
      w.el = c(w.children || ""),
      v,
      C
    ) : w.el = g.el;
  }, M = (g, w, v, C) => {
    [g.el, g.anchor] = p(
      g.children,
      w,
      v,
      C,
      g.el,
      g.anchor
    );
  }, N = ({ el: g, anchor: w }, v, C) => {
    let k;
    for (; g && g !== w; )
      k = f(g), s(g, v, C), g = k;
    s(w, v, C);
  }, A = ({ el: g, anchor: w }) => {
    let v;
    for (; g && g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, P = (g, w, v, C, k, x, L, R, D) => {
    if (w.type === "svg" ? L = "svg" : w.type === "math" && (L = "mathml"), g == null)
      T(
        w,
        v,
        C,
        k,
        x,
        L,
        R,
        D
      );
    else {
      const S = g.el && g.el._isVueCE ? g.el : null;
      try {
        S && S._beginPatch(), I(
          g,
          w,
          k,
          x,
          L,
          R,
          D
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, T = (g, w, v, C, k, x, L, R) => {
    let D, S;
    const { props: H, shapeFlag: $, transition: F, dirs: V } = g;
    if (D = g.el = o(
      g.type,
      x,
      H && H.is,
      H
    ), $ & 8 ? u(D, g.children) : $ & 16 && E(
      g.children,
      D,
      null,
      C,
      k,
      ur(g, x),
      L,
      R
    ), V && dn(g, null, C, "created"), B(D, g, g.scopeId, L, C), H) {
      for (const rt in H)
        rt !== "value" && !cs(rt) && r(D, rt, null, H[rt], x, C);
      "value" in H && r(D, "value", null, H.value, x), (S = H.onVnodeBeforeMount) && ve(S, C, g);
    }
    V && dn(g, null, C, "beforeMount");
    const X = ah(k, F);
    X && F.beforeEnter(D), s(D, w, v), ((S = H && H.onVnodeMounted) || X || V) && Wt(() => {
      S && ve(S, C, g), X && F.enter(D), V && dn(g, null, C, "mounted");
    }, k);
  }, B = (g, w, v, C, k) => {
    if (v && h(g, v), C)
      for (let x = 0; x < C.length; x++)
        h(g, C[x]);
    if (k) {
      let x = k.subTree;
      if (w === x || Oa(x.type) && (x.ssContent === w || x.ssFallback === w)) {
        const L = k.vnode;
        B(
          g,
          L,
          L.scopeId,
          L.slotScopeIds,
          k.parent
        );
      }
    }
  }, E = (g, w, v, C, k, x, L, R, D = 0) => {
    for (let S = D; S < g.length; S++) {
      const H = g[S] = R ? Ze(g[S]) : xe(g[S]);
      m(
        null,
        H,
        w,
        v,
        C,
        k,
        x,
        L,
        R
      );
    }
  }, I = (g, w, v, C, k, x, L) => {
    const R = w.el = g.el;
    let { patchFlag: D, dynamicChildren: S, dirs: H } = w;
    D |= g.patchFlag & 16;
    const $ = g.props || lt, F = w.props || lt;
    let V;
    if (v && fn(v, !1), (V = F.onVnodeBeforeUpdate) && ve(V, v, w, g), H && dn(w, g, v, "beforeUpdate"), v && fn(v, !0), ($.innerHTML && F.innerHTML == null || $.textContent && F.textContent == null) && u(R, ""), S ? _(
      g.dynamicChildren,
      S,
      R,
      v,
      C,
      ur(w, k),
      x
    ) : L || j(
      g,
      w,
      R,
      null,
      v,
      C,
      ur(w, k),
      x,
      !1
    ), D > 0) {
      if (D & 16)
        U(R, $, F, v, k);
      else if (D & 2 && $.class !== F.class && r(R, "class", null, F.class, k), D & 4 && r(R, "style", $.style, F.style, k), D & 8) {
        const X = w.dynamicProps;
        for (let rt = 0; rt < X.length; rt++) {
          const et = X[rt], $t = $[et], Bt = F[et];
          (Bt !== $t || et === "value") && r(R, et, $t, Bt, k, v);
        }
      }
      D & 1 && g.children !== w.children && u(R, w.children);
    } else !L && S == null && U(R, $, F, v, k);
    ((V = F.onVnodeUpdated) || H) && Wt(() => {
      V && ve(V, v, w, g), H && dn(w, g, v, "updated");
    }, C);
  }, _ = (g, w, v, C, k, x, L) => {
    for (let R = 0; R < w.length; R++) {
      const D = g[R], S = w[R], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gn(D, S) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? d(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      m(
        D,
        S,
        H,
        null,
        C,
        k,
        x,
        L,
        !0
      );
    }
  }, U = (g, w, v, C, k) => {
    if (w !== v) {
      if (w !== lt)
        for (const x in w)
          !cs(x) && !(x in v) && r(
            g,
            x,
            w[x],
            null,
            k,
            C
          );
      for (const x in v) {
        if (cs(x)) continue;
        const L = v[x], R = w[x];
        L !== R && x !== "value" && r(g, x, R, L, k, C);
      }
      "value" in v && r(g, "value", w.value, v.value, k);
    }
  }, O = (g, w, v, C, k, x, L, R, D) => {
    const S = w.el = g ? g.el : l(""), H = w.anchor = g ? g.anchor : l("");
    let { patchFlag: $, dynamicChildren: F, slotScopeIds: V } = w;
    V && (R = R ? R.concat(V) : V), g == null ? (s(S, v, C), s(H, v, C), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      v,
      H,
      k,
      x,
      L,
      R,
      D
    )) : $ > 0 && $ & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (_(
      g.dynamicChildren,
      F,
      v,
      k,
      x,
      L,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || k && w === k.subTree) && Ma(
      g,
      w,
      !0
      /* shallow */
    )) : j(
      g,
      w,
      v,
      H,
      k,
      x,
      L,
      R,
      D
    );
  }, z = (g, w, v, C, k, x, L, R, D) => {
    w.slotScopeIds = R, g == null ? w.shapeFlag & 512 ? k.ctx.activate(
      w,
      v,
      C,
      L,
      D
    ) : G(
      w,
      v,
      C,
      k,
      x,
      L,
      D
    ) : pt(g, w, D);
  }, G = (g, w, v, C, k, x, L) => {
    const R = g.component = bh(
      g,
      C,
      k
    );
    if ($i(g) && (R.ctx.renderer = es), yh(R, !1, L), R.asyncDep) {
      if (k && k.registerDep(R, tt, L), !g.el) {
        const D = R.subTree = ut(xt);
        b(null, D, w, v), g.placeholder = D.el;
      }
    } else
      tt(
        R,
        g,
        w,
        v,
        k,
        x,
        L
      );
  }, pt = (g, w, v) => {
    const C = w.component = g.component;
    if (Zf(g, w, v))
      if (C.asyncDep && !C.asyncResolved) {
        K(C, w, v);
        return;
      } else
        C.next = w, C.update();
    else
      w.el = g.el, C.vnode = w;
  }, tt = (g, w, v, C, k, x, L) => {
    const R = () => {
      if (g.isMounted) {
        let { next: $, bu: F, u: V, parent: X, vnode: rt } = g;
        {
          const be = Da(g);
          if (be) {
            $ && ($.el = rt.el, K(g, $, L)), be.asyncDep.then(() => {
              g.isUnmounted || R();
            });
            return;
          }
        }
        let et = $, $t;
        fn(g, !1), $ ? ($.el = rt.el, K(g, $, L)) : $ = rt, F && or(F), ($t = $.props && $.props.onVnodeBeforeUpdate) && ve($t, X, $, rt), fn(g, !0);
        const Bt = ml(g), we = g.subTree;
        g.subTree = Bt, m(
          we,
          Bt,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          Vs(we),
          g,
          k,
          x
        ), $.el = Bt.el, et === null && th(g, Bt.el), V && Wt(V, k), ($t = $.props && $.props.onVnodeUpdated) && Wt(
          () => ve($t, X, $, rt),
          k
        );
      } else {
        let $;
        const { el: F, props: V } = w, { bm: X, m: rt, parent: et, root: $t, type: Bt } = g, we = In(w);
        fn(g, !1), X && or(X), !we && ($ = V && V.onVnodeBeforeMount) && ve($, et, w), fn(g, !0);
        {
          $t.ce && // @ts-expect-error _def is private
          $t.ce._def.shadowRoot !== !1 && $t.ce._injectChildStyle(Bt);
          const be = g.subTree = ml(g);
          m(
            null,
            be,
            v,
            C,
            g,
            k,
            x
          ), w.el = be.el;
        }
        if (rt && Wt(rt, k), !we && ($ = V && V.onVnodeMounted)) {
          const be = w;
          Wt(
            () => ve($, et, be),
            k
          );
        }
        (w.shapeFlag & 256 || et && In(et.vnode) && et.vnode.shapeFlag & 256) && g.a && Wt(g.a, k), g.isMounted = !0, w = v = C = null;
      }
    };
    g.scope.on();
    const D = g.effect = new kd(R);
    g.scope.off();
    const S = g.update = D.run.bind(D), H = g.job = D.runIfDirty.bind(D);
    H.i = g, H.id = g.uid, D.scheduler = () => ho(H), fn(g, !0), S();
  }, K = (g, w, v) => {
    w.component = g;
    const C = g.vnode.props;
    g.vnode = w, g.next = null, nh(g, w.props, C, v), oh(g, w.children, v), vn(), cl(g), _n();
  }, j = (g, w, v, C, k, x, L, R, D = !1) => {
    const S = g && g.children, H = g ? g.shapeFlag : 0, $ = w.children, { patchFlag: F, shapeFlag: V } = w;
    if (F > 0) {
      if (F & 128) {
        Mn(
          S,
          $,
          v,
          C,
          k,
          x,
          L,
          R,
          D
        );
        return;
      } else if (F & 256) {
        kt(
          S,
          $,
          v,
          C,
          k,
          x,
          L,
          R,
          D
        );
        return;
      }
    }
    V & 8 ? (H & 16 && ts(S, k, x), $ !== S && u(v, $)) : H & 16 ? V & 16 ? Mn(
      S,
      $,
      v,
      C,
      k,
      x,
      L,
      R,
      D
    ) : ts(S, k, x, !0) : (H & 8 && u(v, ""), V & 16 && E(
      $,
      v,
      C,
      k,
      x,
      L,
      R,
      D
    ));
  }, kt = (g, w, v, C, k, x, L, R, D) => {
    g = g || On, w = w || On;
    const S = g.length, H = w.length, $ = Math.min(S, H);
    let F;
    for (F = 0; F < $; F++) {
      const V = w[F] = D ? Ze(w[F]) : xe(w[F]);
      m(
        g[F],
        V,
        v,
        null,
        k,
        x,
        L,
        R,
        D
      );
    }
    S > H ? ts(
      g,
      k,
      x,
      !0,
      !1,
      $
    ) : E(
      w,
      v,
      C,
      k,
      x,
      L,
      R,
      D,
      $
    );
  }, Mn = (g, w, v, C, k, x, L, R, D) => {
    let S = 0;
    const H = w.length;
    let $ = g.length - 1, F = H - 1;
    for (; S <= $ && S <= F; ) {
      const V = g[S], X = w[S] = D ? Ze(w[S]) : xe(w[S]);
      if (gn(V, X))
        m(
          V,
          X,
          v,
          null,
          k,
          x,
          L,
          R,
          D
        );
      else
        break;
      S++;
    }
    for (; S <= $ && S <= F; ) {
      const V = g[$], X = w[F] = D ? Ze(w[F]) : xe(w[F]);
      if (gn(V, X))
        m(
          V,
          X,
          v,
          null,
          k,
          x,
          L,
          R,
          D
        );
      else
        break;
      $--, F--;
    }
    if (S > $) {
      if (S <= F) {
        const V = F + 1, X = V < H ? w[V].el : C;
        for (; S <= F; )
          m(
            null,
            w[S] = D ? Ze(w[S]) : xe(w[S]),
            v,
            X,
            k,
            x,
            L,
            R,
            D
          ), S++;
      }
    } else if (S > F)
      for (; S <= $; )
        me(g[S], k, x, !0), S++;
    else {
      const V = S, X = S, rt = /* @__PURE__ */ new Map();
      for (S = X; S <= F; S++) {
        const jt = w[S] = D ? Ze(w[S]) : xe(w[S]);
        jt.key != null && rt.set(jt.key, S);
      }
      let et, $t = 0;
      const Bt = F - X + 1;
      let we = !1, be = 0;
      const ns = new Array(Bt);
      for (S = 0; S < Bt; S++) ns[S] = 0;
      for (S = V; S <= $; S++) {
        const jt = g[S];
        if ($t >= Bt) {
          me(jt, k, x, !0);
          continue;
        }
        let ye;
        if (jt.key != null)
          ye = rt.get(jt.key);
        else
          for (et = X; et <= F; et++)
            if (ns[et - X] === 0 && gn(jt, w[et])) {
              ye = et;
              break;
            }
        ye === void 0 ? me(jt, k, x, !0) : (ns[ye - X] = S + 1, ye >= be ? be = ye : we = !0, m(
          jt,
          w[ye],
          v,
          null,
          k,
          x,
          L,
          R,
          D
        ), $t++);
      }
      const Zo = we ? uh(ns) : On;
      for (et = Zo.length - 1, S = Bt - 1; S >= 0; S--) {
        const jt = X + S, ye = w[jt], tl = w[jt + 1], el = jt + 1 < H ? (
          // #13559, fallback to el placeholder for unresolved async component
          tl.el || tl.placeholder
        ) : C;
        ns[S] === 0 ? m(
          null,
          ye,
          v,
          el,
          k,
          x,
          L,
          R,
          D
        ) : we && (et < 0 || S !== Zo[et] ? un(ye, v, el, 2) : et--);
      }
    }
  }, un = (g, w, v, C, k = null) => {
    const { el: x, type: L, transition: R, children: D, shapeFlag: S } = g;
    if (S & 6) {
      un(g.component.subTree, w, v, C);
      return;
    }
    if (S & 128) {
      g.suspense.move(w, v, C);
      return;
    }
    if (S & 64) {
      L.move(g, w, v, es);
      return;
    }
    if (L === ft) {
      s(x, w, v);
      for (let $ = 0; $ < D.length; $++)
        un(D[$], w, v, C);
      s(g.anchor, w, v);
      return;
    }
    if (L === dr) {
      N(g, w, v);
      return;
    }
    if (C !== 2 && S & 1 && R)
      if (C === 0)
        R.beforeEnter(x), s(x, w, v), Wt(() => R.enter(x), k);
      else {
        const { leave: $, delayLeave: F, afterLeave: V } = R, X = () => {
          g.ctx.isUnmounted ? i(x) : s(x, w, v);
        }, rt = () => {
          x._isLeaving && x[Le](
            !0
            /* cancelled */
          ), $(x, () => {
            X(), V && V();
          });
        };
        F ? F(x, X, rt) : rt();
      }
    else
      s(x, w, v);
  }, me = (g, w, v, C = !1, k = !1) => {
    const {
      type: x,
      props: L,
      ref: R,
      children: D,
      dynamicChildren: S,
      shapeFlag: H,
      patchFlag: $,
      dirs: F,
      cacheIndex: V
    } = g;
    if ($ === -2 && (k = !1), R != null && (vn(), as(R, null, v, g, !0), _n()), V != null && (w.renderCache[V] = void 0), H & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const X = H & 1 && F, rt = !In(g);
    let et;
    if (rt && (et = L && L.onVnodeBeforeUnmount) && ve(et, w, g), H & 6)
      vd(g.component, v, C);
    else {
      if (H & 128) {
        g.suspense.unmount(v, C);
        return;
      }
      X && dn(g, null, w, "beforeUnmount"), H & 64 ? g.type.remove(
        g,
        w,
        v,
        es,
        C
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ft || $ > 0 && $ & 64) ? ts(
        S,
        w,
        v,
        !1,
        !0
      ) : (x === ft && $ & 384 || !k && H & 16) && ts(D, w, v), C && Xo(g);
    }
    (rt && (et = L && L.onVnodeUnmounted) || X) && Wt(() => {
      et && ve(et, w, g), X && dn(g, null, w, "unmounted");
    }, v);
  }, Xo = (g) => {
    const { type: w, el: v, anchor: C, transition: k } = g;
    if (w === ft) {
      yd(v, C);
      return;
    }
    if (w === dr) {
      A(g);
      return;
    }
    const x = () => {
      i(v), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (g.shapeFlag & 1 && k && !k.persisted) {
      const { leave: L, delayLeave: R } = k, D = () => L(v, x);
      R ? R(g.el, x, D) : D();
    } else
      x();
  }, yd = (g, w) => {
    let v;
    for (; g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, vd = (g, w, v) => {
    const { bum: C, scope: k, job: x, subTree: L, um: R, m: D, a: S } = g;
    yl(D), yl(S), C && or(C), k.stop(), x && (x.flags |= 8, me(L, g, w, v)), R && Wt(R, w), Wt(() => {
      g.isUnmounted = !0;
    }, w);
  }, ts = (g, w, v, C = !1, k = !1, x = 0) => {
    for (let L = x; L < g.length; L++)
      me(g[L], w, v, C, k);
  }, Vs = (g) => {
    if (g.shapeFlag & 6)
      return Vs(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = f(g.anchor || g.el), v = w && w[wf];
    return v ? f(v) : w;
  };
  let rr = !1;
  const Qo = (g, w, v) => {
    g == null ? w._vnode && me(w._vnode, null, null, !0) : m(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      v
    ), w._vnode = g, rr || (rr = !0, cl(), ia(), rr = !1);
  }, es = {
    p: m,
    um: me,
    m: un,
    r: Xo,
    mt: G,
    mc: E,
    pc: j,
    pbc: _,
    n: Vs,
    o: e
  };
  return {
    render: Qo,
    hydrate: void 0,
    createApp: zf(Qo)
  };
}
function ur({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ah(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ma(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (J(s) && J(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ze(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Ma(o, l)), l.type === Hi && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === xt && !l.el && (l.el = o.el);
    }
}
function uh(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < a ? r = l + 1 : o = l;
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Da(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Da(t);
}
function yl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Oa = (e) => e.__isSuspense;
function dh(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : mf(e);
}
const ft = Symbol.for("v-fgt"), Hi = Symbol.for("v-txt"), xt = Symbol.for("v-cmt"), dr = Symbol.for("v-stc"), ds = [];
let qt = null;
function q(e = !1) {
  ds.push(qt = e ? null : []);
}
function fh() {
  ds.pop(), qt = ds[ds.length - 1] || null;
}
let gs = 1;
function mi(e, t = !1) {
  gs += e, e < 0 && qt && t && (qt.hasOnce = !0);
}
function Ra(e) {
  return e.dynamicChildren = gs > 0 ? qt || On : null, fh(), gs > 0 && qt && qt.push(e), e;
}
function ot(e, t, n, s, i, r) {
  return Ra(
    Rt(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function te(e, t, n, s, i) {
  return Ra(
    ut(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function ms(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ia = ({ key: e }) => e ?? null, ei = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Tt(e) || di(e) || Y(e) ? { i: It, r: e, k: t, f: !!n } : e : null);
function Rt(e, t = null, n = null, s = 0, i = null, r = e === ft ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ia(t),
    ref: t && ei(t),
    scopeId: oa,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: It
  };
  return l ? (bo(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Tt(n) ? 8 : 16), gs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  qt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && qt.push(c), c;
}
const ut = hh;
function hh(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === If) && (e = xt), ms(e)) {
    const l = je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && bo(l, n), gs > 0 && !r && qt && (l.shapeFlag & 6 ? qt[qt.indexOf(e)] = l : qt.push(l)), l.patchFlag = -2, l;
  }
  if (Sh(e) && (e = e.__vccOpts), t) {
    t = ph(t);
    let { class: l, style: c } = t;
    l && !Tt(l) && (t.class = Fe(l)), Pt(c) && (Vc(c) && !J(c) && (c = wt({}, c)), t.style = ui(c));
  }
  const o = Tt(e) ? 1 : Oa(e) ? 128 : la(e) ? 64 : Pt(e) ? 4 : Y(e) ? 2 : 0;
  return Rt(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function ph(e) {
  return e ? Vc(e) || xa(e) ? wt({}, e) : e : null;
}
function je(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, a = t ? gh(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ia(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? J(r) ? r.concat(ei(t)) : [r, ei(t)] : ei(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ft ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && je(e.ssContent),
    ssFallback: e.ssFallback && je(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && ps(
    u,
    c.clone(u)
  ), u;
}
function Lr(e = " ", t = 0) {
  return ut(Hi, null, e, t);
}
function zt(e = "", t = !1) {
  return t ? (q(), te(xt, null, e)) : ut(xt, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? ut(xt) : J(e) ? ut(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ms(e) ? Ze(e) : ut(Hi, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : je(e);
}
function bo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), bo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !xa(t) ? t._ctx = It : i === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: It }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Lr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Fe([t.class, s.class]));
      else if (i === "style")
        t.style = ui([t.style, s.style]);
      else if (Ii(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(J(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ve(e, t, n, s = null) {
  ue(e, t, 7, [
    n,
    s
  ]);
}
const mh = ba();
let wh = 0;
function bh(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || mh, r = {
    uid: wh++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new _d(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ca(s, i),
    emitsOptions: va(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: lt,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: lt,
    data: lt,
    props: lt,
    attrs: lt,
    slots: lt,
    refs: lt,
    setupState: lt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Yf.bind(null, r), e.ce && e.ce(r), r;
}
let St = null;
const Ui = () => St || It;
let wi, Pr;
{
  const e = Ni(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  wi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => St = n
  ), Pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => ws = n
  );
}
const Ls = (e) => {
  const t = St;
  return wi(e), e.scope.on(), () => {
    e.scope.off(), wi(t);
  };
}, vl = () => {
  St && St.scope.off(), wi(null);
};
function Na(e) {
  return e.vnode.shapeFlag & 4;
}
let ws = !1;
function yh(e, t = !1, n = !1) {
  t && Pr(t);
  const { props: s, children: i } = e.vnode, r = Na(e);
  eh(e, s, r, t), rh(e, i, n || t);
  const o = r ? vh(e, t) : void 0;
  return t && Pr(!1), o;
}
function vh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $f);
  const { setup: s } = n;
  if (s) {
    vn();
    const i = e.setupContext = s.length > 1 ? kh(e) : null, r = Ls(e), o = Rs(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Kc(o);
    if (_n(), r(), (l || e.sp) && !In(e) && ha(e), l) {
      if (o.then(vl, vl), t)
        return o.then((c) => {
          _l(e, c);
        }).catch((c) => {
          Pi(c, e, 0);
        });
      e.asyncDep = o;
    } else
      _l(e, o);
  } else
    La(e);
}
function _l(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = zc(t)), La(e);
}
function La(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || He);
  {
    const i = Ls(e);
    vn();
    try {
      Bf(e);
    } finally {
      _n(), i();
    }
  }
}
const _h = {
  get(e, t) {
    return Jc(e, "get", ""), e[t];
  }
};
function kh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, _h),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function yo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zc(Wc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in us)
        return us[n](e);
    },
    has(t, n) {
      return n in t || n in us;
    }
  })) : e.proxy;
}
function xh(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sh(e) {
  return Y(e) && "__vccOpts" in e;
}
const Et = (e, t) => Md(e, t, ws);
function Ps(e, t, n) {
  try {
    mi(-1);
    const s = arguments.length;
    return s === 2 ? Pt(t) && !J(t) ? ms(t) ? ut(e, null, [t]) : ut(e, t) : ut(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ms(n) && (n = [n]), ut(e, t, n));
  } finally {
    mi(1);
  }
}
const Ch = "3.5.25";
let $r;
const kl = typeof window < "u" && window.trustedTypes;
if (kl)
  try {
    $r = /* @__PURE__ */ kl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Pa = $r ? (e) => $r.createHTML(e) : (e) => e, Eh = "http://www.w3.org/2000/svg", Ah = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, xl = Ne && /* @__PURE__ */ Ne.createElement("template"), Th = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Ne.createElementNS(Eh, e) : t === "mathml" ? Ne.createElementNS(Ah, e) : n ? Ne.createElement(e, { is: n }) : Ne.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Ne.createTextNode(e),
  createComment: (e) => Ne.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ne.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      xl.innerHTML = Pa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = xl.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ge = "transition", is = "animation", bs = Symbol("_vtc"), $a = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Mh = /* @__PURE__ */ wt(
  {},
  ca,
  $a
), Dh = (e) => (e.displayName = "Transition", e.props = Mh, e), Oh = /* @__PURE__ */ Dh(
  (e, { slots: t }) => Ps(vf, Rh(e), t)
), hn = (e, t = []) => {
  J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Sl = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rh(e) {
  const t = {};
  for (const O in e)
    O in $a || (t[O] = e[O]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: a = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = Ih(i), m = p && p[0], y = p && p[1], {
    onBeforeEnter: b,
    onEnter: M,
    onEnterCancelled: N,
    onLeave: A,
    onLeaveCancelled: P,
    onBeforeAppear: T = b,
    onAppear: B = M,
    onAppearCancelled: E = N
  } = t, I = (O, z, G, pt) => {
    O._enterCancelled = pt, pn(O, z ? u : l), pn(O, z ? a : o), G && G();
  }, _ = (O, z) => {
    O._isLeaving = !1, pn(O, d), pn(O, h), pn(O, f), z && z();
  }, U = (O) => (z, G) => {
    const pt = O ? B : M, tt = () => I(z, O, G);
    hn(pt, [z, tt]), Cl(() => {
      pn(z, O ? c : r), Oe(z, O ? u : l), Sl(pt) || El(z, s, m, tt);
    });
  };
  return wt(t, {
    onBeforeEnter(O) {
      hn(b, [O]), Oe(O, r), Oe(O, o);
    },
    onBeforeAppear(O) {
      hn(T, [O]), Oe(O, c), Oe(O, a);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(O, z) {
      O._isLeaving = !0;
      const G = () => _(O, z);
      Oe(O, d), O._enterCancelled ? (Oe(O, f), Ml(O)) : (Ml(O), Oe(O, f)), Cl(() => {
        O._isLeaving && (pn(O, d), Oe(O, h), Sl(A) || El(O, s, y, G));
      }), hn(A, [O, G]);
    },
    onEnterCancelled(O) {
      I(O, !1, void 0, !0), hn(N, [O]);
    },
    onAppearCancelled(O) {
      I(O, !0, void 0, !0), hn(E, [O]);
    },
    onLeaveCancelled(O) {
      _(O), hn(P, [O]);
    }
  });
}
function Ih(e) {
  if (e == null)
    return null;
  if (Pt(e))
    return [fr(e.enter), fr(e.leave)];
  {
    const t = fr(e);
    return [t, t];
  }
}
function fr(e) {
  return Mr(e);
}
function Oe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[bs] || (e[bs] = /* @__PURE__ */ new Set())).add(t);
}
function pn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[bs];
  n && (n.delete(t), n.size || (e[bs] = void 0));
}
function Cl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Nh = 0;
function El(e, t, n, s) {
  const i = e._endId = ++Nh, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Lh(e, t);
  if (!o)
    return s();
  const a = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(a, f), r();
  }, f = (h) => {
    h.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, l + 1), e.addEventListener(a, f);
}
function Lh(e, t) {
  const n = window.getComputedStyle(e), s = (p) => (n[p] || "").split(", "), i = s(`${Ge}Delay`), r = s(`${Ge}Duration`), o = Al(i, r), l = s(`${is}Delay`), c = s(`${is}Duration`), a = Al(l, c);
  let u = null, d = 0, f = 0;
  t === Ge ? o > 0 && (u = Ge, d = o, f = r.length) : t === is ? a > 0 && (u = is, d = a, f = c.length) : (d = Math.max(o, a), u = d > 0 ? o > a ? Ge : is : null, f = u ? u === Ge ? r.length : c.length : 0);
  const h = u === Ge && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Ge}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function Al(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Tl(n) + Tl(e[s])));
}
function Tl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ml(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ph(e, t, n) {
  const s = e[bs];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Dl = Symbol("_vod"), $h = Symbol("_vsh"), Bh = Symbol(""), Fh = /(?:^|;)\s*display\s*:/;
function Hh(e, t, n) {
  const s = e.style, i = Tt(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Tt(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && ni(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && ni(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), ni(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[Bh];
      o && (n += ";" + o), s.cssText = n, r = Fh.test(n);
    }
  } else t && e.removeAttribute("style");
  Dl in e && (e[Dl] = r ? s.display : "", e[$h] && (s.display = "none"));
}
const Ol = /\s*!important$/;
function ni(e, t, n) {
  if (J(n))
    n.forEach((s) => ni(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Uh(e, t);
    Ol.test(n) ? e.setProperty(
      Zt(s),
      n.replace(Ol, ""),
      "important"
    ) : e[s] = n;
  }
}
const Rl = ["Webkit", "Moz", "ms"], hr = {};
function Uh(e, t) {
  const n = hr[t];
  if (n)
    return n;
  let s = Nt(t);
  if (s !== "filter" && s in e)
    return hr[t] = s;
  s = uo(s);
  for (let i = 0; i < Rl.length; i++) {
    const r = Rl[i] + s;
    if (r in e)
      return hr[t] = r;
  }
  return t;
}
const Il = "http://www.w3.org/1999/xlink";
function Nl(e, t, n, s, i, r = Ld(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Il, t.slice(6, t.length)) : e.setAttributeNS(Il, t, n) : n == null || r && !Xc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Yc(n) ? String(n) : n
  );
}
function Ll(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Pa(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Xc(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Vh(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function jh(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Pl = Symbol("_vei");
function zh(e, t, n, s, i = null) {
  const r = e[Pl] || (e[Pl] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = Wh(t);
    if (s) {
      const a = r[t] = Jh(
        s,
        i
      );
      Vh(e, l, a, c);
    } else o && (jh(e, l, o, c), r[t] = void 0);
  }
}
const $l = /(?:Once|Passive|Capture)$/;
function Wh(e) {
  let t;
  if ($l.test(e)) {
    t = {};
    let s;
    for (; s = e.match($l); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zt(e.slice(2)), t];
}
let pr = 0;
const Kh = /* @__PURE__ */ Promise.resolve(), qh = () => pr || (Kh.then(() => pr = 0), pr = Date.now());
function Jh(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ue(
      Yh(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = qh(), n;
}
function Yh(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const Bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gh = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Ph(e, s, o) : t === "style" ? Hh(e, n, s) : Ii(t) ? ao(t) || zh(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xh(e, t, s, o)) ? (Ll(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nl(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Tt(s)) ? Ll(e, Nt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Nl(e, t, s, o));
};
function Xh(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Bl(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Bl(t) && Tt(n) ? !1 : t in e;
}
const Fl = {};
// @__NO_SIDE_EFFECTS__
function Qh(e, t, n) {
  let s = /* @__PURE__ */ Gt(e, t);
  Gc(s) && (s = wt({}, s, t));
  class i extends vo {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
const Zh = typeof HTMLElement < "u" ? HTMLElement : class {
};
class vo extends Zh {
  constructor(t, n = {}, s = Ul) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ul ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      wt({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof vo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Ht(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = s;
      let l;
      if (r && !J(r))
        for (const c in r) {
          const a = r[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = Mr(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Nt(c)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot && this._applyStyles(o), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        st(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => at(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = J(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(Nt))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Fl;
    const i = Nt(t);
    n && this._numberProps && this._numberProps[i] && (s = Mr(s)), this._setProp(i, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Fl ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(Zt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Zt(t), n + "") : n || this.removeAttribute(Zt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), ep(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ut(this._def, wt(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Gc(o[0]) ? wt({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (r, ...o) => {
        i(r, o), Zt(r) !== r && i(Zt(r), o);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      s && r.setAttribute("nonce", s), r.textContent = t[i], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], r = i.getAttribute("name") || "default", o = this._slots[r], l = i.parentNode;
      if (o)
        for (const c of o) {
          if (n && c.nodeType === 1) {
            const a = n + "-s", u = document.createTreeWalker(c, 1);
            c.setAttribute(a, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(a, "");
          }
          l.insertBefore(c, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const s of t) {
      const i = s.querySelectorAll("slot");
      for (let r = 0; r < i.length; r++)
        n.add(i[r]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const tp = /* @__PURE__ */ wt({ patchProp: Gh }, Th);
let Hl;
function Ba() {
  return Hl || (Hl = lh(tp));
}
const ep = ((...e) => {
  Ba().render(...e);
}), Ul = ((...e) => {
  const t = Ba().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = sp(s);
    if (!i) return;
    const r = t._component;
    !Y(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, np(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function np(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sp(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
const Fa = ["top", "right", "bottom", "left"], Vl = ["start", "end"], jl = /* @__PURE__ */ Fa.reduce((e, t) => e.concat(t, t + "-" + Vl[0], t + "-" + Vl[1]), []), Me = Math.min, Ot = Math.max, bi = Math.round, Ee = (e) => ({
  x: e,
  y: e
}), ip = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rp = {
  start: "end",
  end: "start"
};
function Br(e, t, n) {
  return Ot(e, Me(t, n));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ne(e) {
  return e.split("-")[0];
}
function le(e) {
  return e.split("-")[1];
}
function Ha(e) {
  return e === "x" ? "y" : "x";
}
function _o(e) {
  return e === "y" ? "height" : "width";
}
const op = /* @__PURE__ */ new Set(["top", "bottom"]);
function Se(e) {
  return op.has(ne(e)) ? "y" : "x";
}
function ko(e) {
  return Ha(Se(e));
}
function Ua(e, t, n) {
  n === void 0 && (n = !1);
  const s = le(e), i = ko(e), r = _o(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = vi(o)), [o, vi(o)];
}
function lp(e) {
  const t = vi(e);
  return [yi(e), t, yi(t)];
}
function yi(e) {
  return e.replace(/start|end/g, (t) => rp[t]);
}
const zl = ["left", "right"], Wl = ["right", "left"], cp = ["top", "bottom"], ap = ["bottom", "top"];
function up(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Wl : zl : t ? zl : Wl;
    case "left":
    case "right":
      return t ? cp : ap;
    default:
      return [];
  }
}
function dp(e, t, n, s) {
  const i = le(e);
  let r = up(ne(e), n === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(yi)))), r;
}
function vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ip[t]);
}
function fp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xo(e) {
  return typeof e != "number" ? fp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Hn(e) {
  const {
    x: t,
    y: n,
    width: s,
    height: i
  } = e;
  return {
    width: s,
    height: i,
    top: n,
    left: t,
    right: t + s,
    bottom: n + i,
    x: t,
    y: n
  };
}
function Kl(e, t, n) {
  let {
    reference: s,
    floating: i
  } = e;
  const r = Se(t), o = ko(t), l = _o(o), c = ne(t), a = r === "y", u = s.x + s.width / 2 - i.width / 2, d = s.y + s.height / 2 - i.height / 2, f = s[l] / 2 - i[l] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: s.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: s.y + s.height
      };
      break;
    case "right":
      h = {
        x: s.x + s.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: s.x - i.width,
        y: d
      };
      break;
    default:
      h = {
        x: s.x,
        y: s.y
      };
  }
  switch (le(t)) {
    case "start":
      h[o] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && a ? -1 : 1);
      break;
  }
  return h;
}
const hp = async (e, t, n) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = n, l = r.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let a = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: d
  } = Kl(a, s, c), f = s, h = {}, p = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: y,
      fn: b
    } = l[m], {
      x: M,
      y: N,
      data: A,
      reset: P
    } = await b({
      x: u,
      y: d,
      initialPlacement: s,
      placement: f,
      strategy: i,
      middlewareData: h,
      rects: a,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = M ?? u, d = N ?? d, h = {
      ...h,
      [y]: {
        ...h[y],
        ...A
      }
    }, P && p <= 50 && (p++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (a = P.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: u,
      y: d
    } = Kl(a, f, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: h
  };
};
async function Un(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: r,
    rects: o,
    elements: l,
    strategy: c
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Ke(t, e), p = xo(h), y = l[f ? d === "floating" ? "reference" : "floating" : d], b = Hn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: c
  })), M = d === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, N = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), A = await (r.isElement == null ? void 0 : r.isElement(N)) ? await (r.getScale == null ? void 0 : r.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Hn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: M,
    offsetParent: N,
    strategy: c
  }) : M);
  return {
    top: (b.top - P.top + p.top) / A.y,
    bottom: (P.bottom - b.bottom + p.bottom) / A.y,
    left: (b.left - P.left + p.left) / A.x,
    right: (P.right - b.right + p.right) / A.x
  };
}
const pp = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: s,
      placement: i,
      rects: r,
      platform: o,
      elements: l,
      middlewareData: c
    } = t, {
      element: a,
      padding: u = 0
    } = Ke(e, t) || {};
    if (a == null)
      return {};
    const d = xo(u), f = {
      x: n,
      y: s
    }, h = ko(i), p = _o(h), m = await o.getDimensions(a), y = h === "y", b = y ? "top" : "left", M = y ? "bottom" : "right", N = y ? "clientHeight" : "clientWidth", A = r.reference[p] + r.reference[h] - f[h] - r.floating[p], P = f[h] - r.reference[h], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let B = T ? T[N] : 0;
    (!B || !await (o.isElement == null ? void 0 : o.isElement(T))) && (B = l.floating[N] || r.floating[p]);
    const E = A / 2 - P / 2, I = B / 2 - m[p] / 2 - 1, _ = Me(d[b], I), U = Me(d[M], I), O = _, z = B - m[p] - U, G = B / 2 - m[p] / 2 + E, pt = Br(O, G, z), tt = !c.arrow && le(i) != null && G !== pt && r.reference[p] / 2 - (G < O ? _ : U) - m[p] / 2 < 0, K = tt ? G < O ? G - O : G - z : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: pt,
        centerOffset: G - pt - K,
        ...tt && {
          alignmentOffset: K
        }
      },
      reset: tt
    };
  }
});
function gp(e, t, n) {
  return (e ? [...n.filter((i) => le(i) === e), ...n.filter((i) => le(i) !== e)] : n.filter((i) => ne(i) === i)).filter((i) => e ? le(i) === e || (t ? yi(i) !== i : !1) : !0);
}
const mp = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, s, i;
      const {
        rects: r,
        middlewareData: o,
        placement: l,
        platform: c,
        elements: a
      } = t, {
        crossAxis: u = !1,
        alignment: d,
        allowedPlacements: f = jl,
        autoAlignment: h = !0,
        ...p
      } = Ke(e, t), m = d !== void 0 || f === jl ? gp(d || null, h, f) : f, y = await Un(t, p), b = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, M = m[b];
      if (M == null)
        return {};
      const N = Ua(M, r, await (c.isRTL == null ? void 0 : c.isRTL(a.floating)));
      if (l !== M)
        return {
          reset: {
            placement: m[0]
          }
        };
      const A = [y[ne(M)], y[N[0]], y[N[1]]], P = [...((s = o.autoPlacement) == null ? void 0 : s.overflows) || [], {
        placement: M,
        overflows: A
      }], T = m[b + 1];
      if (T)
        return {
          data: {
            index: b + 1,
            overflows: P
          },
          reset: {
            placement: T
          }
        };
      const B = P.map((_) => {
        const U = le(_.placement);
        return [_.placement, U && u ? (
          // Check along the mainAxis and main crossAxis side.
          _.overflows.slice(0, 2).reduce((O, z) => O + z, 0)
        ) : (
          // Check only the mainAxis.
          _.overflows[0]
        ), _.overflows];
      }).sort((_, U) => _[1] - U[1]), I = ((i = B.filter((_) => _[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        le(_[0]) ? 2 : 3
      ).every((U) => U <= 0))[0]) == null ? void 0 : i[0]) || B[0][0];
      return I !== l ? {
        data: {
          index: b + 1,
          overflows: P
        },
        reset: {
          placement: I
        }
      } : {};
    }
  };
}, wp = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, s;
      const {
        placement: i,
        middlewareData: r,
        rects: o,
        initialPlacement: l,
        platform: c,
        elements: a
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...y
      } = Ke(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const b = ne(i), M = Se(l), N = ne(l) === l, A = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), P = f || (N || !m ? [vi(l)] : lp(l)), T = p !== "none";
      !f && T && P.push(...dp(l, m, p, A));
      const B = [l, ...P], E = await Un(t, y), I = [];
      let _ = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (u && I.push(E[b]), d) {
        const G = Ua(i, o, A);
        I.push(E[G[0]], E[G[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: I
      }], !I.every((G) => G <= 0)) {
        var U, O;
        const G = (((U = r.flip) == null ? void 0 : U.index) || 0) + 1, pt = B[G];
        if (pt && (!(d === "alignment" ? M !== Se(pt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((j) => Se(j.placement) === M ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: _
            },
            reset: {
              placement: pt
            }
          };
        let tt = (O = _.filter((K) => K.overflows[0] <= 0).sort((K, j) => K.overflows[1] - j.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!tt)
          switch (h) {
            case "bestFit": {
              var z;
              const K = (z = _.filter((j) => {
                if (T) {
                  const kt = Se(j.placement);
                  return kt === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  kt === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((kt) => kt > 0).reduce((kt, Mn) => kt + Mn, 0)]).sort((j, kt) => j[1] - kt[1])[0]) == null ? void 0 : z[0];
              K && (tt = K);
              break;
            }
            case "initialPlacement":
              tt = l;
              break;
          }
        if (i !== tt)
          return {
            reset: {
              placement: tt
            }
          };
      }
      return {};
    }
  };
};
function ql(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Jl(e) {
  return Fa.some((t) => e[t] >= 0);
}
const bp = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = Ke(e, t);
      switch (s) {
        case "referenceHidden": {
          const r = await Un(t, {
            ...i,
            elementContext: "reference"
          }), o = ql(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Jl(o)
            }
          };
        }
        case "escaped": {
          const r = await Un(t, {
            ...i,
            altBoundary: !0
          }), o = ql(r, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Jl(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function Va(e) {
  const t = Me(...e.map((r) => r.left)), n = Me(...e.map((r) => r.top)), s = Ot(...e.map((r) => r.right)), i = Ot(...e.map((r) => r.bottom));
  return {
    x: t,
    y: n,
    width: s - t,
    height: i - n
  };
}
function yp(e) {
  const t = e.slice().sort((i, r) => i.y - r.y), n = [];
  let s = null;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    !s || r.y - s.y > s.height / 2 ? n.push([r]) : n[n.length - 1].push(r), s = r;
  }
  return n.map((i) => Hn(Va(i)));
}
const vp = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: s,
        rects: i,
        platform: r,
        strategy: o
      } = t, {
        padding: l = 2,
        x: c,
        y: a
      } = Ke(e, t), u = Array.from(await (r.getClientRects == null ? void 0 : r.getClientRects(s.reference)) || []), d = yp(u), f = Hn(Va(u)), h = xo(l);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && a != null)
          return d.find((y) => c > y.left - h.left && c < y.right + h.right && a > y.top - h.top && a < y.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if (Se(n) === "y") {
            const _ = d[0], U = d[d.length - 1], O = ne(n) === "top", z = _.top, G = U.bottom, pt = O ? _.left : U.left, tt = O ? _.right : U.right, K = tt - pt, j = G - z;
            return {
              top: z,
              bottom: G,
              left: pt,
              right: tt,
              width: K,
              height: j,
              x: pt,
              y: z
            };
          }
          const y = ne(n) === "left", b = Ot(...d.map((_) => _.right)), M = Me(...d.map((_) => _.left)), N = d.filter((_) => y ? _.left === M : _.right === b), A = N[0].top, P = N[N.length - 1].bottom, T = M, B = b, E = B - T, I = P - A;
          return {
            top: A,
            bottom: P,
            left: T,
            right: B,
            width: E,
            height: I,
            x: T,
            y: A
          };
        }
        return f;
      }
      const m = await r.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: s.floating,
        strategy: o
      });
      return i.reference.x !== m.reference.x || i.reference.y !== m.reference.y || i.reference.width !== m.reference.width || i.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, _p = /* @__PURE__ */ new Set(["left", "top"]);
async function kp(e, t) {
  const {
    placement: n,
    platform: s,
    elements: i
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = ne(n), l = le(n), c = Se(n) === "y", a = _p.has(o) ? -1 : 1, u = r && c ? -1 : 1, d = Ke(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof p == "number" && (h = l === "end" ? p * -1 : p), c ? {
    x: h * u,
    y: f * a
  } : {
    x: f * a,
    y: h * u
  };
}
const xp = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, s;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: l
      } = t, c = await kp(t, e);
      return o === ((n = l.offset) == null ? void 0 : n.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: o
        }
      };
    }
  };
}, Sp = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: s,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: b,
              y: M
            } = y;
            return {
              x: b,
              y: M
            };
          }
        },
        ...c
      } = Ke(e, t), a = {
        x: n,
        y: s
      }, u = await Un(t, c), d = Se(ne(i)), f = Ha(d);
      let h = a[f], p = a[d];
      if (r) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", M = h + u[y], N = h - u[b];
        h = Br(M, h, N);
      }
      if (o) {
        const y = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", M = p + u[y], N = p - u[b];
        p = Br(M, p, N);
      }
      const m = l.fn({
        ...t,
        [f]: h,
        [d]: p
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - s,
          enabled: {
            [f]: r,
            [d]: o
          }
        }
      };
    }
  };
}, Cp = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, s;
      const {
        placement: i,
        rects: r,
        platform: o,
        elements: l
      } = t, {
        apply: c = () => {
        },
        ...a
      } = Ke(e, t), u = await Un(t, a), d = ne(i), f = le(i), h = Se(i) === "y", {
        width: p,
        height: m
      } = r.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = f === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
      const M = m - u.top - u.bottom, N = p - u.left - u.right, A = Me(m - u[y], M), P = Me(p - u[b], N), T = !t.middlewareData.shift;
      let B = A, E = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = N), (s = t.middlewareData.shift) != null && s.enabled.y && (B = M), T && !f) {
        const _ = Ot(u.left, 0), U = Ot(u.right, 0), O = Ot(u.top, 0), z = Ot(u.bottom, 0);
        h ? E = p - 2 * (_ !== 0 || U !== 0 ? _ + U : Ot(u.left, u.right)) : B = m - 2 * (O !== 0 || z !== 0 ? O + z : Ot(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: B
      });
      const I = await o.getDimensions(l.floating);
      return p !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vi() {
  return typeof window < "u";
}
function Gn(e) {
  return ja(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (ja(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ja(e) {
  return Vi() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function de(e) {
  return Vi() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function De(e) {
  return Vi() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function Yl(e) {
  return !Vi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
const Ep = /* @__PURE__ */ new Set(["inline", "contents"]);
function $s(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: s,
    display: i
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !Ep.has(i);
}
const Ap = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Tp(e) {
  return Ap.has(Gn(e));
}
const Mp = [":popover-open", ":modal"];
function ji(e) {
  return Mp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Dp = ["transform", "translate", "scale", "rotate", "perspective"], Op = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Rp = ["paint", "layout", "strict", "content"];
function So(e) {
  const t = Co(), n = de(e) ? fe(e) : e;
  return Dp.some((s) => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Op.some((s) => (n.willChange || "").includes(s)) || Rp.some((s) => (n.contain || "").includes(s));
}
function Ip(e) {
  let t = sn(e);
  for (; De(t) && !Vn(t); ) {
    if (So(t))
      return t;
    if (ji(t))
      return null;
    t = sn(t);
  }
  return null;
}
function Co() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Np = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Vn(e) {
  return Np.has(Gn(e));
}
function fe(e) {
  return Yt(e).getComputedStyle(e);
}
function zi(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function sn(e) {
  if (Gn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yl(e) && e.host || // Fallback.
    qe(e)
  );
  return Yl(t) ? t.host : t;
}
function za(e) {
  const t = sn(e);
  return Vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : De(t) && $s(t) ? t : za(t);
}
function Wa(e, t, n) {
  var s;
  t === void 0 && (t = []);
  const i = za(e), r = i === ((s = e.ownerDocument) == null ? void 0 : s.body), o = Yt(i);
  return r ? (Fr(o), t.concat(o, o.visualViewport || [], $s(i) ? i : [], [])) : t.concat(i, Wa(i, []));
}
function Fr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ka(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = De(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, l = bi(n) !== r || bi(s) !== o;
  return l && (n = r, s = o), {
    width: n,
    height: s,
    $: l
  };
}
function qa(e) {
  return de(e) ? e : e.contextElement;
}
function Ln(e) {
  const t = qa(e);
  if (!De(t))
    return Ee(1);
  const n = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Ka(t);
  let o = (r ? bi(n.width) : n.width) / s, l = (r ? bi(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: o,
    y: l
  };
}
const Lp = /* @__PURE__ */ Ee(0);
function Ja(e) {
  const t = Yt(e);
  return !Co() || !t.visualViewport ? Lp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function ys(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = qa(e);
  let o = Ee(1);
  t && (s ? de(s) && (o = Ln(s)) : o = Ln(e));
  const l = Pp(r, n, s) ? Ja(r) : Ee(0);
  let c = (i.left + l.x) / o.x, a = (i.top + l.y) / o.y, u = i.width / o.x, d = i.height / o.y;
  if (r) {
    const f = Yt(r), h = s && de(s) ? Yt(s) : s;
    let p = f, m = Fr(p);
    for (; m && s && h !== p; ) {
      const y = Ln(m), b = m.getBoundingClientRect(), M = fe(m), N = b.left + (m.clientLeft + parseFloat(M.paddingLeft)) * y.x, A = b.top + (m.clientTop + parseFloat(M.paddingTop)) * y.y;
      c *= y.x, a *= y.y, u *= y.x, d *= y.y, c += N, a += A, p = Yt(m), m = Fr(p);
    }
  }
  return Hn({
    width: u,
    height: d,
    x: c,
    y: a
  });
}
function Wi(e, t) {
  const n = zi(e).scrollLeft;
  return t ? t.left + n : ys(qe(e)).left + n;
}
function Ya(e, t) {
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - Wi(e, n), i = n.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function $p(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: s,
    strategy: i
  } = e;
  const r = i === "fixed", o = qe(s), l = t ? ji(t.floating) : !1;
  if (s === o || l && r)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ee(1);
  const u = Ee(0), d = De(s);
  if ((d || !d && !r) && ((Gn(s) !== "body" || $s(o)) && (c = zi(s)), De(s))) {
    const h = ys(s);
    a = Ln(s), u.x = h.x + s.clientLeft, u.y = h.y + s.clientTop;
  }
  const f = o && !d && !r ? Ya(o, c) : Ee(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + u.x + f.x,
    y: n.y * a.y - c.scrollTop * a.y + u.y + f.y
  };
}
function Bp(e) {
  return Array.from(e.getClientRects());
}
function Fp(e) {
  const t = qe(e), n = zi(e), s = e.ownerDocument.body, i = Ot(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = Ot(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -n.scrollLeft + Wi(e);
  const l = -n.scrollTop;
  return fe(s).direction === "rtl" && (o += Ot(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: l
  };
}
const Gl = 25;
function Hp(e, t) {
  const n = Yt(e), s = qe(e), i = n.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, l = 0, c = 0;
  if (i) {
    r = i.width, o = i.height;
    const u = Co();
    (!u || u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  const a = Wi(s);
  if (a <= 0) {
    const u = s.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(s.clientWidth - d.clientWidth - h);
    p <= Gl && (r -= p);
  } else a <= Gl && (r += a);
  return {
    width: r,
    height: o,
    x: l,
    y: c
  };
}
const Up = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Vp(e, t) {
  const n = ys(e, !0, t === "fixed"), s = n.top + e.clientTop, i = n.left + e.clientLeft, r = De(e) ? Ln(e) : Ee(1), o = e.clientWidth * r.x, l = e.clientHeight * r.y, c = i * r.x, a = s * r.y;
  return {
    width: o,
    height: l,
    x: c,
    y: a
  };
}
function Xl(e, t, n) {
  let s;
  if (t === "viewport")
    s = Hp(e, n);
  else if (t === "document")
    s = Fp(qe(e));
  else if (de(t))
    s = Vp(t, n);
  else {
    const i = Ja(e);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Hn(s);
}
function Ga(e, t) {
  const n = sn(e);
  return n === t || !de(n) || Vn(n) ? !1 : fe(n).position === "fixed" || Ga(n, t);
}
function jp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let s = Wa(e, []).filter((l) => de(l) && Gn(l) !== "body"), i = null;
  const r = fe(e).position === "fixed";
  let o = r ? sn(e) : e;
  for (; de(o) && !Vn(o); ) {
    const l = fe(o), c = So(o);
    !c && l.position === "fixed" && (i = null), (r ? !c && !i : !c && l.position === "static" && !!i && Up.has(i.position) || $s(o) && !c && Ga(e, o)) ? s = s.filter((u) => u !== o) : i = l, o = sn(o);
  }
  return t.set(e, s), s;
}
function zp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: s,
    strategy: i
  } = e;
  const o = [...n === "clippingAncestors" ? ji(t) ? [] : jp(t, this._c) : [].concat(n), s], l = o[0], c = o.reduce((a, u) => {
    const d = Xl(t, u, i);
    return a.top = Ot(d.top, a.top), a.right = Me(d.right, a.right), a.bottom = Me(d.bottom, a.bottom), a.left = Ot(d.left, a.left), a;
  }, Xl(t, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Wp(e) {
  const {
    width: t,
    height: n
  } = Ka(e);
  return {
    width: t,
    height: n
  };
}
function Kp(e, t, n) {
  const s = De(t), i = qe(t), r = n === "fixed", o = ys(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ee(0);
  function a() {
    c.x = Wi(i);
  }
  if (s || !s && !r)
    if ((Gn(t) !== "body" || $s(i)) && (l = zi(t)), s) {
      const h = ys(t, !0, r, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else i && a();
  r && !s && i && a();
  const u = i && !s && !r ? Ya(i, l) : Ee(0), d = o.left + l.scrollLeft - c.x - u.x, f = o.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function gr(e) {
  return fe(e).position === "static";
}
function Ql(e, t) {
  if (!De(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qe(e) === n && (n = n.ownerDocument.body), n;
}
function Xa(e, t) {
  const n = Yt(e);
  if (ji(e))
    return n;
  if (!De(e)) {
    let i = sn(e);
    for (; i && !Vn(i); ) {
      if (de(i) && !gr(i))
        return i;
      i = sn(i);
    }
    return n;
  }
  let s = Ql(e, t);
  for (; s && Tp(s) && gr(s); )
    s = Ql(s, t);
  return s && Vn(s) && gr(s) && !So(s) ? n : s || Ip(e) || n;
}
const qp = async function(e) {
  const t = this.getOffsetParent || Xa, n = this.getDimensions, s = await n(e.floating);
  return {
    reference: Kp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Jp(e) {
  return fe(e).direction === "rtl";
}
const Yp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $p,
  getDocumentElement: qe,
  getClippingRect: zp,
  getOffsetParent: Xa,
  getElementRects: qp,
  getClientRects: Bp,
  getDimensions: Wp,
  getScale: Ln,
  isElement: de,
  isRTL: Jp
}, Gp = xp, Xp = mp, Qp = Sp, Zp = wp, tg = Cp, eg = bp, ng = pp, sg = vp, Qa = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: Yp,
    ...n
  }, r = {
    ...i.platform,
    _c: s
  };
  return hp(e, t, {
    ...i,
    platform: r
  });
}, ce = () => /* @__PURE__ */ new Map(), Hr = (e) => {
  const t = ce();
  return e.forEach((n, s) => {
    t.set(s, n);
  }), t;
}, Je = (e, t, n) => {
  let s = e.get(t);
  return s === void 0 && e.set(t, s = n()), s;
}, ig = (e, t) => {
  const n = [];
  for (const [s, i] of e)
    n.push(t(i, s));
  return n;
}, rg = (e, t) => {
  for (const [n, s] of e)
    if (t(s, n))
      return !0;
  return !1;
}, kn = () => /* @__PURE__ */ new Set(), mr = (e) => e[e.length - 1], og = (e, t) => {
  for (let n = 0; n < t.length; n++)
    e.push(t[n]);
}, xn = Array.from, lg = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return !0;
  return !1;
}, Ur = Array.isArray;
class Za {
  constructor() {
    this._observers = ce();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, n) {
    return Je(
      this._observers,
      /** @type {string} */
      t,
      kn
    ).add(n), n;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(t, n) {
    const s = (...i) => {
      this.off(
        t,
        /** @type {any} */
        s
      ), n(...i);
    };
    this.on(
      t,
      /** @type {any} */
      s
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(t, n) {
    const s = this._observers.get(t);
    s !== void 0 && (s.delete(n), s.size === 0 && this._observers.delete(t));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(t, n) {
    return xn((this._observers.get(t) || ce()).values()).forEach((s) => s(...n));
  }
  destroy() {
    this._observers = ce();
  }
}
const ze = Math.floor, si = Math.abs, jn = (e, t) => e < t ? e : t, rn = (e, t) => e > t ? e : t, tu = (e) => e !== 0 ? e < 0 : 1 / e < 0, Zl = 1, tc = 2, wr = 4, br = 8, vs = 32, Ue = 64, Lt = 128, cg = 1 << 29, Ki = 31, Vr = 63, yn = 127, ag = 2147483647, eu = Number.MAX_SAFE_INTEGER, ug = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && ze(e) === e), dg = String.fromCharCode, fg = (e) => e.toLowerCase(), hg = /^\s*/g, pg = (e) => e.replace(hg, ""), gg = /([A-Z])/g, ec = (e, t) => pg(e.replace(gg, (n) => `${t}${fg(n)}`)), mg = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, s = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    s[i] = /** @type {number} */
    t.codePointAt(i);
  return s;
}, _s = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), wg = (e) => _s.encode(e), bg = _s ? wg : mg;
let fs = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
fs && fs.decode(new Uint8Array()).length === 1 && (fs = null);
class Bs {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Fs = () => new Bs(), yg = (e) => {
  const t = Fs();
  return e(t), oe(t);
}, vg = (e) => {
  let t = e.cpos;
  for (let n = 0; n < e.bufs.length; n++)
    t += e.bufs[n].length;
  return t;
}, oe = (e) => {
  const t = new Uint8Array(vg(e));
  let n = 0;
  for (let s = 0; s < e.bufs.length; s++) {
    const i = e.bufs[s];
    t.set(i, n), n += i.length;
  }
  return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, _g = (e, t) => {
  const n = e.cbuf.length;
  n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(rn(n, t) * 2), e.cpos = 0);
}, yt = (e, t) => {
  const n = e.cbuf.length;
  e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, jr = yt, Z = (e, t) => {
  for (; t > yn; )
    yt(e, Lt | yn & t), t = ze(t / 128);
  yt(e, yn & t);
}, Eo = (e, t) => {
  const n = tu(t);
  for (n && (t = -t), yt(e, (t > Vr ? Lt : 0) | (n ? Ue : 0) | Vr & t), t = ze(t / 64); t > 0; )
    yt(e, (t > yn ? Lt : 0) | yn & t), t = ze(t / 128);
}, zr = new Uint8Array(3e4), kg = zr.length / 3, xg = (e, t) => {
  if (t.length < kg) {
    const n = _s.encodeInto(t, zr).written || 0;
    Z(e, n);
    for (let s = 0; s < n; s++)
      yt(e, zr[s]);
  } else
    Kt(e, bg(t));
}, Sg = (e, t) => {
  const n = unescape(encodeURIComponent(t)), s = n.length;
  Z(e, s);
  for (let i = 0; i < s; i++)
    yt(
      e,
      /** @type {number} */
      n.codePointAt(i)
    );
}, Pn = _s && /** @type {any} */
_s.encodeInto ? xg : Sg, qi = (e, t) => {
  const n = e.cbuf.length, s = e.cpos, i = jn(n - s, t.length), r = t.length - i;
  e.cbuf.set(t.subarray(0, i), s), e.cpos += i, r > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(rn(n * 2, r)), e.cbuf.set(t.subarray(i)), e.cpos = r);
}, Kt = (e, t) => {
  Z(e, t.byteLength), qi(e, t);
}, Ao = (e, t) => {
  _g(e, t);
  const n = new DataView(e.cbuf.buffer, e.cpos, t);
  return e.cpos += t, n;
}, Cg = (e, t) => Ao(e, 4).setFloat32(0, t, !1), Eg = (e, t) => Ao(e, 8).setFloat64(0, t, !1), Ag = (e, t) => (
  /** @type {any} */
  Ao(e, 8).setBigInt64(0, t, !1)
), nc = new DataView(new ArrayBuffer(4)), Tg = (e) => (nc.setFloat32(0, e), nc.getFloat32(0) === e), zn = (e, t) => {
  switch (typeof t) {
    case "string":
      yt(e, 119), Pn(e, t);
      break;
    case "number":
      ug(t) && si(t) <= ag ? (yt(e, 125), Eo(e, t)) : Tg(t) ? (yt(e, 124), Cg(e, t)) : (yt(e, 123), Eg(e, t));
      break;
    case "bigint":
      yt(e, 122), Ag(e, t);
      break;
    case "object":
      if (t === null)
        yt(e, 126);
      else if (Ur(t)) {
        yt(e, 117), Z(e, t.length);
        for (let n = 0; n < t.length; n++)
          zn(e, t[n]);
      } else if (t instanceof Uint8Array)
        yt(e, 116), Kt(e, t);
      else {
        yt(e, 118);
        const n = Object.keys(t);
        Z(e, n.length);
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          Pn(e, i), zn(e, t[i]);
        }
      }
      break;
    case "boolean":
      yt(e, t ? 120 : 121);
      break;
    default:
      yt(e, 127);
  }
};
class sc extends Bs {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(t) {
    super(), this.w = t, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(t) {
    this.s === t ? this.count++ : (this.count > 0 && Z(this, this.count - 1), this.count = 1, this.w(this, t), this.s = t);
  }
}
const ic = (e) => {
  e.count > 0 && (Eo(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && Z(e.encoder, e.count - 2));
};
class ii {
  constructor() {
    this.encoder = new Bs(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (ic(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return ic(this), oe(this.encoder);
  }
}
const rc = (e) => {
  if (e.count > 0) {
    const t = e.diff * 2 + (e.count === 1 ? 0 : 1);
    Eo(e.encoder, t), e.count > 1 && Z(e.encoder, e.count - 2);
  }
};
class yr {
  constructor() {
    this.encoder = new Bs(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (rc(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return rc(this), oe(this.encoder);
  }
}
class Mg {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new ii();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new Bs();
    return this.sarr.push(this.s), this.s = "", Pn(t, this.sarr.join("")), qi(t, this.lensE.toUint8Array()), oe(t);
  }
}
const on = (e) => new Error(e), ae = () => {
  throw on("Method unimplemented");
}, Vt = () => {
  throw on("Unexpected case");
}, nu = on("Unexpected end of array"), su = on("Integer out of Range");
class Ji {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const To = (e) => new Ji(e), Dg = (e) => e.pos !== e.arr.length, Og = (e, t) => {
  const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
  return e.pos += t, n;
}, Qt = (e) => Og(e, ct(e)), ks = (e) => e.arr[e.pos++], ct = (e) => {
  let t = 0, n = 1;
  const s = e.arr.length;
  for (; e.pos < s; ) {
    const i = e.arr[e.pos++];
    if (t = t + (i & yn) * n, n *= 128, i < Lt)
      return t;
    if (t > eu)
      throw su;
  }
  throw nu;
}, Mo = (e) => {
  let t = e.arr[e.pos++], n = t & Vr, s = 64;
  const i = (t & Ue) > 0 ? -1 : 1;
  if ((t & Lt) === 0)
    return i * n;
  const r = e.arr.length;
  for (; e.pos < r; ) {
    if (t = e.arr[e.pos++], n = n + (t & yn) * s, s *= 128, t < Lt)
      return i * n;
    if (n > eu)
      throw su;
  }
  throw nu;
}, Rg = (e) => {
  let t = ct(e);
  if (t === 0)
    return "";
  {
    let n = String.fromCodePoint(ks(e));
    if (--t < 100)
      for (; t--; )
        n += String.fromCodePoint(ks(e));
    else
      for (; t > 0; ) {
        const s = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + s);
        e.pos += s, n += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          i
        ), t -= s;
      }
    return decodeURIComponent(escape(n));
  }
}, Ig = (e) => (
  /** @type any */
  fs.decode(Qt(e))
), Wr = fs ? Ig : Rg, Do = (e, t) => {
  const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
  return e.pos += t, n;
}, Ng = (e) => Do(e, 4).getFloat32(0, !1), Lg = (e) => Do(e, 8).getFloat64(0, !1), Pg = (e) => (
  /** @type {any} */
  Do(e, 8).getBigInt64(0, !1)
), $g = [
  (e) => {
  },
  // CASE 127: undefined
  (e) => null,
  // CASE 126: null
  Mo,
  // CASE 125: integer
  Ng,
  // CASE 124: float32
  Lg,
  // CASE 123: float64
  Pg,
  // CASE 122: bigint
  (e) => !1,
  // CASE 121: boolean (false)
  (e) => !0,
  // CASE 120: boolean (true)
  Wr,
  // CASE 119: string
  (e) => {
    const t = ct(e), n = {};
    for (let s = 0; s < t; s++) {
      const i = Wr(e);
      n[i] = _i(e);
    }
    return n;
  },
  (e) => {
    const t = ct(e), n = [];
    for (let s = 0; s < t; s++)
      n.push(_i(e));
    return n;
  },
  Qt
  // CASE 116: Uint8Array
], _i = (e) => $g[127 - ks(e)](e);
class oc extends Ji {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, n) {
    super(t), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), Dg(this) ? this.count = ct(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class ri extends Ji {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Mo(this);
      const t = tu(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = ct(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class vr extends Ji {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const t = Mo(this), n = t & 1;
      this.diff = ze(t / 2), this.count = 1, n && (this.count = ct(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Bg {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new ri(t), this.str = Wr(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), n = this.str.slice(this.spos, t);
    return this.spos = t, n;
  }
}
const Fg = crypto.getRandomValues.bind(crypto), Hg = Math.random, iu = () => Fg(new Uint32Array(1))[0], Ug = (e) => e[ze(Hg() * e.length)], Vg = "10000000-1000-4000-8000" + -1e11, jg = () => Vg.replace(
  /[018]/g,
  /** @param {number} c */
  (e) => (e ^ iu() & 15 >> e / 4).toString(16)
), zg = Date.now, lc = (e) => (
  /** @type {Promise<T>} */
  new Promise(e)
);
Promise.all.bind(Promise);
const cc = (e) => e === void 0 ? null : e;
class Wg {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(t, n) {
    this.map.set(t, n);
  }
  /**
   * @param {string} key
   */
  getItem(t) {
    return this.map.get(t);
  }
}
let ru = new Wg(), Kg = !0;
try {
  typeof localStorage < "u" && localStorage && (ru = localStorage, Kg = !1);
} catch {
}
const qg = ru, Jg = Object.assign, ou = Object.keys, Yg = (e, t) => {
  for (const n in e)
    t(e[n], n);
}, ac = (e) => ou(e).length, Gg = (e) => {
  for (const t in e)
    return !1;
  return !0;
}, lu = (e, t) => {
  for (const n in e)
    if (!t(e[n], n))
      return !1;
  return !0;
}, Xg = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Qg = (e, t) => e === t || ac(e) === ac(t) && lu(e, (n, s) => (n !== void 0 || Xg(t, s)) && t[s] === n), Zg = Object.freeze, cu = (e) => {
  for (const t in e) {
    const n = e[t];
    (typeof n == "object" || typeof n == "function") && cu(e[t]);
  }
  return Zg(e);
}, Oo = (e, t, n = 0) => {
  try {
    for (; n < e.length; n++)
      e[n](...t);
  } finally {
    n < e.length && Oo(e, t, n + 1);
  }
}, tm = (e, t) => t.includes(e), Wn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", au = typeof window < "u" && typeof document < "u" && !Wn;
let _e;
const em = () => {
  if (_e === void 0)
    if (Wn) {
      _e = ce();
      const e = process.argv;
      let t = null;
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        s[0] === "-" ? (t !== null && _e.set(t, ""), t = s) : t !== null && (_e.set(t, s), t = null);
      }
      t !== null && _e.set(t, "");
    } else typeof location == "object" ? (_e = ce(), (location.search || "?").slice(1).split("&").forEach((e) => {
      if (e.length !== 0) {
        const [t, n] = e.split("=");
        _e.set(`--${ec(t, "-")}`, n), _e.set(`-${ec(t, "-")}`, n);
      }
    })) : _e = ce();
  return _e;
}, Kr = (e) => em().has(e), ki = (e) => cc(Wn ? process.env[e.toUpperCase().replaceAll("-", "_")] : qg.getItem(e)), uu = (e) => Kr("--" + e) || ki(e) !== null;
uu("production");
const nm = Wn && tm(process.env.FORCE_COLOR, ["true", "1", "2"]), sm = nm || !Kr("--no-colors") && // @todo deprecate --no-colors
!uu("no-color") && (!Wn || process.stdout.isTTY) && (!Wn || Kr("--color") || ki("COLORTERM") !== null || (ki("TERM") || "").includes("color")), im = (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += dg(e[n]);
  return btoa(t);
}, rm = (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), om = au ? im : rm, lm = (e) => yg((t) => zn(t, e));
class cm {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, n) {
    this.left = t, this.right = n;
  }
}
const Re = (e, t) => new cm(e, t), am = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const um = (e) => ig(e, (t, n) => `${n}:${t};`).join(""), dm = (e) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    e(this._);
  }
}, fm = dm(clearTimeout), du = (e, t) => new fm(setTimeout(t, e)), Ye = Symbol, fu = Ye(), hu = Ye(), hm = Ye(), pm = Ye(), gm = Ye(), pu = Ye(), mm = Ye(), Ro = Ye(), wm = Ye(), bm = (e) => {
  e.length === 1 && e[0]?.constructor === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [];
  let s = 0;
  for (; s < e.length; s++) {
    const i = e[s];
    if (i === void 0)
      break;
    if (i.constructor === String || i.constructor === Number)
      t.push(i);
    else if (i.constructor === Object)
      break;
  }
  for (s > 0 && n.push(t.join("")); s < e.length; s++) {
    const i = e[s];
    i instanceof Symbol || n.push(i);
  }
  return n;
}, ym = {
  [fu]: Re("font-weight", "bold"),
  [hu]: Re("font-weight", "normal"),
  [hm]: Re("color", "blue"),
  [gm]: Re("color", "green"),
  [pm]: Re("color", "grey"),
  [pu]: Re("color", "red"),
  [mm]: Re("color", "purple"),
  [Ro]: Re("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [wm]: Re("color", "black")
}, vm = (e) => {
  e.length === 1 && e[0]?.constructor === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [], s = ce();
  let i = [], r = 0;
  for (; r < e.length; r++) {
    const o = e[r], l = ym[o];
    if (l !== void 0)
      s.set(l.left, l.right);
    else {
      if (o === void 0)
        break;
      if (o.constructor === String || o.constructor === Number) {
        const c = um(s);
        r > 0 || c.length > 0 ? (t.push("%c" + o), n.push(c)) : t.push(o);
      } else
        break;
    }
  }
  for (r > 0 && (i = n, i.unshift(t.join(""))); r < e.length; r++) {
    const o = e[r];
    o instanceof Symbol || i.push(o);
  }
  return i;
}, gu = sm ? vm : bm, _m = (...e) => {
  console.log(...gu(e)), wu.forEach((t) => t.print(e));
}, mu = (...e) => {
  console.warn(...gu(e)), e.unshift(Ro), wu.forEach((t) => t.print(e));
}, wu = kn(), bu = (e) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: e
}), km = (e, t) => bu(() => {
  let n;
  do
    n = e.next();
  while (!n.done && !t(n.value));
  return n;
}), _r = (e, t) => bu(() => {
  const { done: n, value: s } = e.next();
  return { done: n, value: n ? void 0 : t(s) };
});
class Io {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(t, n) {
    this.clock = t, this.len = n;
  }
}
class Xn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const ln = (e, t, n) => t.clients.forEach((s, i) => {
  const r = (
    /** @type {Array<GC|Item>} */
    e.doc.store.clients.get(i)
  );
  if (r != null) {
    const o = r[r.length - 1], l = o.id.clock + o.length;
    for (let c = 0, a = s[c]; c < s.length && a.clock < l; a = s[++c])
      Eu(e, r, a.clock, a.len, n);
  }
}), xm = (e, t) => {
  let n = 0, s = e.length - 1;
  for (; n <= s; ) {
    const i = ze((n + s) / 2), r = e[i], o = r.clock;
    if (o <= t) {
      if (t < o + r.len)
        return i;
      n = i + 1;
    } else
      s = i - 1;
  }
  return null;
}, Qn = (e, t) => {
  const n = e.clients.get(t.client);
  return n !== void 0 && xm(n, t.clock) !== null;
}, No = (e) => {
  e.clients.forEach((t) => {
    t.sort((i, r) => i.clock - r.clock);
    let n, s;
    for (n = 1, s = 1; n < t.length; n++) {
      const i = t[s - 1], r = t[n];
      i.clock + i.len >= r.clock ? i.len = rn(i.len, r.clock + r.len - i.clock) : (s < n && (t[s] = r), s++);
    }
    t.length = s;
  });
}, qr = (e) => {
  const t = new Xn();
  for (let n = 0; n < e.length; n++)
    e[n].clients.forEach((s, i) => {
      if (!t.clients.has(i)) {
        const r = s.slice();
        for (let o = n + 1; o < e.length; o++)
          og(r, e[o].clients.get(i) || []);
        t.clients.set(i, r);
      }
    });
  return No(t), t;
}, xs = (e, t, n, s) => {
  Je(e.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new Io(n, s));
}, yu = () => new Xn(), Sm = (e) => {
  const t = yu();
  return e.clients.forEach((n, s) => {
    const i = [];
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o.deleted) {
        const l = o.id.clock;
        let c = o.length;
        if (r + 1 < n.length)
          for (let a = n[r + 1]; r + 1 < n.length && a.deleted; a = n[++r + 1])
            c += a.length;
        i.push(new Io(l, c));
      }
    }
    i.length > 0 && t.clients.set(s, i);
  }), t;
}, Lo = (e, t) => {
  Z(e.restEncoder, t.clients.size), xn(t.clients.entries()).sort((n, s) => s[0] - n[0]).forEach(([n, s]) => {
    e.resetDsCurVal(), Z(e.restEncoder, n);
    const i = s.length;
    Z(e.restEncoder, i);
    for (let r = 0; r < i; r++) {
      const o = s[r];
      e.writeDsClock(o.clock), e.writeDsLen(o.len);
    }
  });
}, Cm = (e) => {
  const t = new Xn(), n = ct(e.restDecoder);
  for (let s = 0; s < n; s++) {
    e.resetDsCurVal();
    const i = ct(e.restDecoder), r = ct(e.restDecoder);
    if (r > 0) {
      const o = Je(t.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < r; l++)
        o.push(new Io(e.readDsClock(), e.readDsLen()));
    }
  }
  return t;
}, uc = (e, t, n) => {
  const s = new Xn(), i = ct(e.restDecoder);
  for (let r = 0; r < i; r++) {
    e.resetDsCurVal();
    const o = ct(e.restDecoder), l = ct(e.restDecoder), c = n.clients.get(o) || [], a = mt(n, o);
    for (let u = 0; u < l; u++) {
      const d = e.readDsClock(), f = d + e.readDsLen();
      if (d < a) {
        a < f && xs(s, o, a, f - a);
        let h = he(c, d), p = c[h];
        for (!p.deleted && p.id.clock < d && (c.splice(h + 1, 0, Mi(t, p, d - p.id.clock)), h++); h < c.length && (p = c[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(h, 0, Mi(t, p, f - p.id.clock)), p.delete(t));
      } else
        xs(s, o, d, f - d);
    }
  }
  if (s.clients.size > 0) {
    const r = new Yi();
    return Z(r.restEncoder, 0), Lo(r, s), r.toUint8Array();
  }
  return null;
}, vu = iu;
class An extends Za {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = jg(), collectionid: n = null, gc: s = !0, gcFilter: i = () => !0, meta: r = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = i, this.clientID = vu(), this.guid = t, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Su(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = r, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = lc((a) => {
      this.on("load", () => {
        this.isLoaded = !0, a(this);
      });
    });
    const c = () => lc((a) => {
      const u = (d) => {
        (d === void 0 || d === !0) && (this.off("sync", u), a());
      };
      this.on("sync", u);
    });
    this.on("sync", (a) => {
      a === !1 && this.isSynced && (this.whenSynced = c()), this.isSynced = a === void 0 || a === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = c();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const t = this._item;
    t !== null && !this.shouldLoad && it(
      /** @type {any} */
      t.parent.doc,
      (n) => {
        n.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(xn(this.subdocs).map((t) => t.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(t, n = null) {
    return it(this, t, n);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(t, n = (
    /** @type {any} */
    vt
  )) {
    const s = Je(this.share, t, () => {
      const r = new n();
      return r._integrate(this, null), r;
    }), i = s.constructor;
    if (n !== vt && i !== n)
      if (i === vt) {
        const r = new n();
        r._map = s._map, s._map.forEach(
          /** @param {Item?} n */
          (o) => {
            for (; o !== null; o = o.left)
              o.parent = r;
          }
        ), r._start = s._start;
        for (let o = r._start; o !== null; o = o.right)
          o.parent = r;
        return r._length = s._length, this.share.set(t, r), r._integrate(this, null), /** @type {InstanceType<Type>} */
        r;
      } else
        throw new Error(`Type with the name ${t} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      s
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(t = "") {
    return (
      /** @type {YArray<T>} */
      this.get(t, Fn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(t = "") {
    return this.get(t, cn);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(t = "") {
    return (
      /** @type {YMap<T>} */
      this.get(t, Kn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(t = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(t, Ct)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(t = "") {
    return this.get(t, Sn);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const t = {};
    return this.share.forEach((n, s) => {
      t[s] = n.toJSON();
    }), t;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = !0, xn(this.subdocs).forEach((n) => n.destroy());
    const t = this._item;
    if (t !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        t.content
      );
      n.doc = new An({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = t, it(
        /** @type {any} */
        t.parent.doc,
        (s) => {
          const i = n.doc;
          t.deleted || s.subdocsAdded.add(i), s.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class Em {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    this.dsCurrVal = 0, this.restDecoder = t;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += ct(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const t = ct(this.restDecoder) + 1;
    return this.dsCurrVal += t, t;
  }
}
class xi extends Em {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], ct(t), this.keyClockDecoder = new vr(Qt(t)), this.clientDecoder = new ri(Qt(t)), this.leftClockDecoder = new vr(Qt(t)), this.rightClockDecoder = new vr(Qt(t)), this.infoDecoder = new oc(Qt(t), ks), this.stringDecoder = new Bg(Qt(t)), this.parentInfoDecoder = new oc(Qt(t), ks), this.typeRefDecoder = new ri(Qt(t)), this.lenDecoder = new ri(Qt(t));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new $n(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new $n(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return _i(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Qt(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return _i(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const t = this.keyClockDecoder.read();
    if (t < this.keys.length)
      return this.keys[t];
    {
      const n = this.stringDecoder.read();
      return this.keys.push(n), n;
    }
  }
}
class Am {
  constructor() {
    this.restEncoder = Fs();
  }
  toUint8Array() {
    return oe(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    Z(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    Z(this.restEncoder, t);
  }
}
class Tm extends Am {
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    Z(this.restEncoder, t.client), Z(this.restEncoder, t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    Z(this.restEncoder, t.client), Z(this.restEncoder, t.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(t) {
    Z(this.restEncoder, t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    jr(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    Pn(this.restEncoder, t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    Z(this.restEncoder, t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    Z(this.restEncoder, t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    Z(this.restEncoder, t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    zn(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    Kt(this.restEncoder, t);
  }
  /**
   * @param {any} embed
   */
  writeJSON(t) {
    Pn(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    Pn(this.restEncoder, t);
  }
}
class Mm {
  constructor() {
    this.restEncoder = Fs(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return oe(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    const n = t - this.dsCurrVal;
    this.dsCurrVal = t, Z(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    t === 0 && Vt(), Z(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Yi extends Mm {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new yr(), this.clientEncoder = new ii(), this.leftClockEncoder = new yr(), this.rightClockEncoder = new yr(), this.infoEncoder = new sc(jr), this.stringEncoder = new Mg(), this.parentInfoEncoder = new sc(jr), this.typeRefEncoder = new ii(), this.lenEncoder = new ii();
  }
  toUint8Array() {
    const t = Fs();
    return Z(t, 0), Kt(t, this.keyClockEncoder.toUint8Array()), Kt(t, this.clientEncoder.toUint8Array()), Kt(t, this.leftClockEncoder.toUint8Array()), Kt(t, this.rightClockEncoder.toUint8Array()), Kt(t, oe(this.infoEncoder)), Kt(t, this.stringEncoder.toUint8Array()), Kt(t, oe(this.parentInfoEncoder)), Kt(t, this.typeRefEncoder.toUint8Array()), Kt(t, this.lenEncoder.toUint8Array()), qi(t, oe(this.restEncoder)), oe(t);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(t) {
    this.clientEncoder.write(t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    this.infoEncoder.write(t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    this.stringEncoder.write(t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    this.parentInfoEncoder.write(t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    this.typeRefEncoder.write(t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    this.lenEncoder.write(t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    zn(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    Kt(this.restEncoder, t);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(t) {
    zn(this.restEncoder, t);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(t) {
    const n = this.keyMap.get(t);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(n);
  }
}
const Dm = (e, t, n, s) => {
  s = rn(s, t[0].id.clock);
  const i = he(t, s);
  Z(e.restEncoder, t.length - i), e.writeClient(n), Z(e.restEncoder, s);
  const r = t[i];
  r.write(e, s - r.id.clock);
  for (let o = i + 1; o < t.length; o++)
    t[o].write(e, 0);
}, _u = (e, t, n) => {
  const s = /* @__PURE__ */ new Map();
  n.forEach((i, r) => {
    mt(t, r) > i && s.set(r, i);
  }), Gi(t).forEach((i, r) => {
    n.has(r) || s.set(r, 0);
  }), Z(e.restEncoder, s.size), xn(s.entries()).sort((i, r) => r[0] - i[0]).forEach(([i, r]) => {
    Dm(
      e,
      /** @type {Array<GC|Item>} */
      t.clients.get(i),
      i,
      r
    );
  });
}, Om = (e, t) => {
  const n = ce(), s = ct(e.restDecoder);
  for (let i = 0; i < s; i++) {
    const r = ct(e.restDecoder), o = new Array(r), l = e.readClient();
    let c = ct(e.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let a = 0; a < r; a++) {
      const u = e.readInfo();
      switch (Ki & u) {
        case 0: {
          const d = e.readLen();
          o[a] = new ee(W(l, c), d), c += d;
          break;
        }
        case 10: {
          const d = ct(e.restDecoder);
          o[a] = new re(W(l, c), d), c += d;
          break;
        }
        default: {
          const d = (u & (Ue | Lt)) === 0, f = new nt(
            W(l, c),
            null,
            // left
            (u & Lt) === Lt ? e.readLeftID() : null,
            // origin
            null,
            // right
            (u & Ue) === Ue ? e.readRightID() : null,
            // right origin
            d ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null,
            // parent
            d && (u & vs) === vs ? e.readString() : null,
            // parentSub
            Ju(e, u)
            // item content
          );
          o[a] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, Rm = (e, t, n) => {
  const s = [];
  let i = xn(n.keys()).sort((h, p) => h - p);
  if (i.length === 0)
    return null;
  const r = () => {
    if (i.length === 0)
      return null;
    let h = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      n.get(i[i.length - 1])
    );
    for (; h.refs.length === h.i; )
      if (i.pop(), i.length > 0)
        h = /** @type {{i:number,refs:Array<GC|Item>}} */
        n.get(i[i.length - 1]);
      else
        return null;
    return h;
  };
  let o = r();
  if (o === null)
    return null;
  const l = new Su(), c = /* @__PURE__ */ new Map(), a = (h, p) => {
    const m = c.get(h);
    (m == null || m > p) && c.set(h, p);
  };
  let u = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const d = /* @__PURE__ */ new Map(), f = () => {
    for (const h of s) {
      const p = h.id.client, m = n.get(p);
      m ? (m.i--, l.clients.set(p, m.refs.slice(m.i)), n.delete(p), m.i = 0, m.refs = []) : l.clients.set(p, [h]), i = i.filter((y) => y !== p);
    }
    s.length = 0;
  };
  for (; ; ) {
    if (u.constructor !== re) {
      const p = Je(d, u.id.client, () => mt(t, u.id.client)) - u.id.clock;
      if (p < 0)
        s.push(u), a(u.id.client, u.id.clock - 1), f();
      else {
        const m = u.getMissing(e, t);
        if (m !== null) {
          s.push(u);
          const y = n.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (y.refs.length === y.i)
            a(
              /** @type {number} */
              m,
              mt(t, m)
            ), f();
          else {
            u = y.refs[y.i++];
            continue;
          }
        } else (p === 0 || p < u.length) && (u.integrate(e, p), d.set(u.id.client, u.id.clock + u.length));
      }
    }
    if (s.length > 0)
      u = /** @type {GC|Item} */
      s.pop();
    else if (o !== null && o.i < o.refs.length)
      u = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = r(), o === null)
        break;
      u = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (l.clients.size > 0) {
    const h = new Yi();
    return _u(h, l, /* @__PURE__ */ new Map()), Z(h.restEncoder, 0), { missing: c, update: h.toUint8Array() };
  }
  return null;
}, Im = (e, t) => _u(e, t.doc.store, t.beforeState), Nm = (e, t, n, s = new xi(e)) => it(t, (i) => {
  i.local = !1;
  let r = !1;
  const o = i.doc, l = o.store, c = Om(s, o), a = Rm(i, l, c), u = l.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < mt(l, f)) {
        r = !0;
        break;
      }
    if (a) {
      for (const [f, h] of a.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = yc([u.update, a.update]);
    }
  } else
    l.pendingStructs = a;
  const d = uc(s, i, l);
  if (l.pendingDs) {
    const f = new xi(To(l.pendingDs));
    ct(f.restDecoder);
    const h = uc(f, i, l);
    d && h ? l.pendingDs = yc([d, h]) : l.pendingDs = d || h;
  } else
    l.pendingDs = d;
  if (r) {
    const f = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, Jr(i.doc, f);
  }
}, n, !1), Jr = (e, t, n, s = xi) => {
  const i = To(t);
  Nm(i, e, n, new s(i));
};
class Lm {
  constructor() {
    this.l = [];
  }
}
const dc = () => new Lm(), fc = (e, t) => e.l.push(t), hc = (e, t) => {
  const n = e.l, s = n.length;
  e.l = n.filter((i) => t !== i), s === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, ku = (e, t, n) => Oo(e.l, [t, n]);
class $n {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, n) {
    this.client = t, this.clock = n;
  }
}
const zs = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, W = (e, t) => new $n(e, t), Ss = (e) => {
  for (const [t, n] of e.doc.share.entries())
    if (n === e)
      return t;
  throw Vt();
}, Cs = (e, t) => {
  for (; t !== null; ) {
    if (t.parent === e)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
};
class Si {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(t, n, s, i = 0) {
    this.type = t, this.tname = n, this.item = s, this.assoc = i;
  }
}
class Pm {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, n, s = 0) {
    this.type = t, this.index = n, this.assoc = s;
  }
}
const $m = (e, t, n = 0) => new Pm(e, t, n), Ws = (e, t, n) => {
  let s = null, i = null;
  return e._item === null ? i = Ss(e) : s = W(e._item.id.client, e._item.id.clock), new Si(s, i, t, n);
}, kr = (e, t, n = 0) => {
  let s = e._start;
  if (n < 0) {
    if (t === 0)
      return Ws(e, null, n);
    t--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > t)
        return Ws(e, W(s.id.client, s.id.clock + t), n);
      t -= s.length;
    }
    if (s.right === null && n < 0)
      return Ws(e, s.lastId, n);
    s = s.right;
  }
  return Ws(e, null, n);
}, Bm = (e, t) => {
  const n = Bn(e, t), s = t.clock - n.id.clock;
  return {
    item: n,
    diff: s
  };
}, Fm = (e, t, n = !0) => {
  const s = t.store, i = e.item, r = e.type, o = e.tname, l = e.assoc;
  let c = null, a = 0;
  if (i !== null) {
    if (mt(s, i.client) <= i.clock)
      return null;
    const u = n ? Qr(s, i) : Bm(s, i), d = u.item;
    if (!(d instanceof nt))
      return null;
    if (c = /** @type {AbstractType<any>} */
    d.parent, c._item === null || !c._item.deleted) {
      a = d.deleted || !d.countable ? 0 : u.diff + (l >= 0 ? 0 : 1);
      let f = d.left;
      for (; f !== null; )
        !f.deleted && f.countable && (a += f.length), f = f.left;
    }
  } else {
    if (o !== null)
      c = t.get(o);
    else if (r !== null) {
      if (mt(s, r.client) <= r.clock)
        return null;
      const { item: u } = n ? Qr(s, r) : { item: Bn(s, r) };
      if (u instanceof nt && u.content instanceof ge)
        c = u.content.type;
      else
        return null;
    } else
      throw Vt();
    l >= 0 ? a = c._length : a = 0;
  }
  return $m(c, a, e.assoc);
};
class Po {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, n) {
    this.ds = t, this.sv = n;
  }
}
const xu = (e, t) => new Po(e, t), xr = (e) => xu(Sm(e.store), Gi(e.store)), mn = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Qn(t.ds, e.id), Yr = (e, t) => {
  const n = Je(e.meta, Yr, kn), s = e.doc.store;
  n.has(t) || (t.sv.forEach((i, r) => {
    i < mt(s, r) && Ft(e, W(r, i));
  }), ln(e, t.ds, (i) => {
  }), n.add(t));
};
class Su {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Gi = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.clients.forEach((n, s) => {
    const i = n[n.length - 1];
    t.set(s, i.id.clock + i.length);
  }), t;
}, mt = (e, t) => {
  const n = e.clients.get(t);
  if (n === void 0)
    return 0;
  const s = n[n.length - 1];
  return s.id.clock + s.length;
}, Cu = (e, t) => {
  let n = e.clients.get(t.id.client);
  if (n === void 0)
    n = [], e.clients.set(t.id.client, n);
  else {
    const s = n[n.length - 1];
    if (s.id.clock + s.length !== t.id.clock)
      throw Vt();
  }
  n.push(t);
}, he = (e, t) => {
  let n = 0, s = e.length - 1, i = e[s], r = i.id.clock;
  if (r === t)
    return s;
  let o = ze(t / (r + i.length - 1) * s);
  for (; n <= s; ) {
    if (i = e[o], r = i.id.clock, r <= t) {
      if (t < r + i.length)
        return o;
      n = o + 1;
    } else
      s = o - 1;
    o = ze((n + s) / 2);
  }
  throw Vt();
}, Hm = (e, t) => {
  const n = e.clients.get(t.client);
  return n[he(n, t.clock)];
}, Bn = (
  /** @type {function(StructStore,ID):Item} */
  Hm
), Gr = (e, t, n) => {
  const s = he(t, n), i = t[s];
  return i.id.clock < n && i instanceof nt ? (t.splice(s + 1, 0, Mi(e, i, n - i.id.clock)), s + 1) : s;
}, Ft = (e, t) => {
  const n = (
    /** @type {Array<Item>} */
    e.doc.store.clients.get(t.client)
  );
  return n[Gr(e, n, t.clock)];
}, pc = (e, t, n) => {
  const s = t.clients.get(n.client), i = he(s, n.clock), r = s[i];
  return n.clock !== r.id.clock + r.length - 1 && r.constructor !== ee && s.splice(i + 1, 0, Mi(e, r, n.clock - r.id.clock + 1)), r;
}, Um = (e, t, n) => {
  const s = (
    /** @type {Array<GC|Item>} */
    e.clients.get(t.id.client)
  );
  s[he(s, t.id.clock)] = n;
}, Eu = (e, t, n, s, i) => {
  if (s === 0)
    return;
  const r = n + s;
  let o = Gr(e, t, n), l;
  do
    l = t[o++], r < l.id.clock + l.length && Gr(e, t, r), i(l);
  while (o < t.length && t[o].id.clock < r);
};
class Vm {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, n, s) {
    this.doc = t, this.deleteSet = new Xn(), this.beforeState = Gi(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const gc = (e, t) => t.deleteSet.clients.size === 0 && !rg(t.afterState, (n, s) => t.beforeState.get(s) !== n) ? !1 : (No(t.deleteSet), Im(e, t), Lo(e, t.deleteSet), !0), mc = (e, t, n) => {
  const s = t._item;
  (s === null || s.id.clock < (e.beforeState.get(s.id.client) || 0) && !s.deleted) && Je(e.changed, t, kn).add(n);
}, oi = (e, t) => {
  let n = e[t], s = e[t - 1], i = t;
  for (; i > 0; n = s, s = e[--i - 1]) {
    if (s.deleted === n.deleted && s.constructor === n.constructor && s.mergeWith(n)) {
      n instanceof nt && n.parentSub !== null && /** @type {AbstractType<any>} */
      n.parent._map.get(n.parentSub) === n && n.parent._map.set(
        n.parentSub,
        /** @type {Item} */
        s
      );
      continue;
    }
    break;
  }
  const r = t - i;
  return r && e.splice(t + 1 - r, r), r;
}, jm = (e, t, n) => {
  for (const [s, i] of e.clients.entries()) {
    const r = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let o = i.length - 1; o >= 0; o--) {
      const l = i[o], c = l.clock + l.len;
      for (let a = he(r, l.clock), u = r[a]; a < r.length && u.id.clock < c; u = r[++a]) {
        const d = r[a];
        if (l.clock + l.len <= d.id.clock)
          break;
        d instanceof nt && d.deleted && !d.keep && n(d) && d.gc(t, !1);
      }
    }
  }
}, zm = (e, t) => {
  e.clients.forEach((n, s) => {
    const i = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r], l = jn(i.length - 1, 1 + he(i, o.clock + o.len - 1));
      for (let c = l, a = i[c]; c > 0 && a.id.clock >= o.clock; a = i[c])
        c -= 1 + oi(i, c);
    }
  });
}, Au = (e, t) => {
  if (t < e.length) {
    const n = e[t], s = n.doc, i = s.store, r = n.deleteSet, o = n._mergeStructs;
    try {
      No(r), n.afterState = Gi(n.doc.store), s.emit("beforeObserverCalls", [n, s]);
      const l = [];
      n.changed.forEach(
        (c, a) => l.push(() => {
          (a._item === null || !a._item.deleted) && a._callObserver(n, c);
        })
      ), l.push(() => {
        n.changedParentTypes.forEach((c, a) => {
          a._dEH.l.length > 0 && (a._item === null || !a._item.deleted) && (c = c.filter(
            (u) => u.target._item === null || !u.target._item.deleted
          ), c.forEach((u) => {
            u.currentTarget = a, u._path = null;
          }), c.sort((u, d) => u.path.length - d.path.length), ku(a._dEH, c, n));
        });
      }), l.push(() => s.emit("afterTransaction", [n, s])), Oo(l, []), n._needFormattingCleanup && uw(n);
    } finally {
      s.gc && jm(r, i, s.gcFilter), zm(r, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = rn(he(h, f), 1);
          for (let m = h.length - 1; m >= p; )
            m -= 1 + oi(h, m);
        }
      });
      for (let u = o.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = o[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = he(h, f);
        p + 1 < h.length && oi(h, p + 1) > 1 || p > 0 && oi(h, p);
      }
      if (!n.local && n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID) && (_m(Ro, fu, "[yjs] ", hu, pu, "Changed the client-id because another client seems to be using it."), s.clientID = vu()), s.emit("afterTransactionCleanup", [n, s]), s._observers.has("update")) {
        const u = new Tm();
        gc(u, n) && s.emit("update", [u.toUint8Array(), n.origin, s, n]);
      }
      if (s._observers.has("updateV2")) {
        const u = new Yi();
        gc(u, n) && s.emit("updateV2", [u.toUint8Array(), n.origin, s, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: c, subdocsRemoved: a } = n;
      (l.size > 0 || a.size > 0 || c.size > 0) && (l.forEach((u) => {
        u.clientID = s.clientID, u.collectionid == null && (u.collectionid = s.collectionid), s.subdocs.add(u);
      }), a.forEach((u) => s.subdocs.delete(u)), s.emit("subdocs", [{ loaded: c, added: l, removed: a }, s, n]), a.forEach((u) => u.destroy())), e.length <= t + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, e])) : Au(e, t + 1);
    }
  }
}, it = (e, t, n = null, s = !0) => {
  const i = e._transactionCleanups;
  let r = !1, o = null;
  e._transaction === null && (r = !0, e._transaction = new Vm(e, n, s), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
  try {
    o = t(e._transaction);
  } finally {
    if (r) {
      const l = e._transaction === i[0];
      e._transaction = null, l && Au(i, 0);
    }
  }
  return o;
};
class Wm {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, n) {
    this.insertions = n, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const wc = (e, t, n) => {
  ln(e, n.deletions, (s) => {
    s instanceof nt && t.scope.some((i) => i === e.doc || Cs(
      /** @type {AbstractType<any>} */
      i,
      s
    )) && Uo(s, !1);
  });
}, bc = (e, t, n) => {
  let s = null;
  const i = e.doc, r = e.scope;
  it(i, (l) => {
    for (; t.length > 0 && e.currStackItem === null; ) {
      const c = i.store, a = (
        /** @type {StackItem} */
        t.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      ln(l, a.insertions, (h) => {
        if (h instanceof nt) {
          if (h.redone !== null) {
            let { item: p, diff: m } = Qr(c, h.id);
            m > 0 && (p = Ft(l, W(p.id.client, p.id.clock + m))), h = p;
          }
          !h.deleted && r.some((p) => p === l.doc || Cs(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), ln(l, a.deletions, (h) => {
        h instanceof nt && r.some((p) => p === l.doc || Cs(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Qn(a.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = qu(l, h, u, a.insertions, e.ignoreRemoteMapChanges, e) !== null || f;
      });
      for (let h = d.length - 1; h >= 0; h--) {
        const p = d[h];
        e.deleteFilter(p) && (p.delete(l), f = !0);
      }
      e.currStackItem = f ? a : null;
    }
    l.changed.forEach((c, a) => {
      c.has(null) && a._searchMarker && (a._searchMarker.length = 0);
    }), s = l;
  }, e);
  const o = e.currStackItem;
  if (o != null) {
    const l = s.changedParentTypes;
    e.emit("stack-item-popped", [{ stackItem: o, type: n, changedParentTypes: l, origin: e }, e]), e.currStackItem = null;
  }
  return o;
};
class Tu extends Za {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(t, {
    captureTimeout: n = 500,
    captureTransaction: s = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: r = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = (
      /** @type {Doc} */
      Ur(t) ? t[0].doc : t instanceof An ? t : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(t), this.deleteFilter = i, r.add(this), this.trackedOrigins = r, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((y) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const a = this.undoing, u = this.redoing, d = a ? this.redoStack : this.undoStack;
      a ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new Xn();
      c.afterState.forEach((y, b) => {
        const M = c.beforeState.get(b) || 0, N = y - M;
        N > 0 && xs(f, b, M, N);
      });
      const h = zg();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !a && !u) {
        const y = d[d.length - 1];
        y.deletions = qr([y.deletions, c.deleteSet]), y.insertions = qr([y.insertions, f]);
      } else
        d.push(new Wm(c.deleteSet, f)), p = !0;
      !a && !u && (this.lastChange = h), ln(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof nt && this.scope.some((b) => b === c.doc || Cs(
            /** @type {AbstractType<any>} */
            b,
            y
          )) && Uo(y, !0);
        }
      );
      const m = [{ stackItem: d[d.length - 1], origin: c.origin, type: a ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", m) : this.emit("stack-item-updated", m);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */
  addToScope(t) {
    const n = new Set(this.scope);
    t = Ur(t) ? t : [t], t.forEach((s) => {
      n.has(s) || (n.add(s), (s instanceof vt ? s.doc !== this.doc : s !== this.doc) && mu("[yjs#509] Not same Y.Doc"), this.scope.push(s));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(t) {
    this.trackedOrigins.add(t);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(t) {
    this.trackedOrigins.delete(t);
  }
  clear(t = !0, n = !0) {
    (t && this.canUndo() || n && this.canRedo()) && this.doc.transact((s) => {
      t && (this.undoStack.forEach((i) => wc(s, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => wc(s, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: n }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let t;
    try {
      t = bc(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return t;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let t;
    try {
      t = bc(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return t;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* Km(e) {
  const t = ct(e.restDecoder);
  for (let n = 0; n < t; n++) {
    const s = ct(e.restDecoder), i = e.readClient();
    let r = ct(e.restDecoder);
    for (let o = 0; o < s; o++) {
      const l = e.readInfo();
      if (l === 10) {
        const c = ct(e.restDecoder);
        yield new re(W(i, r), c), r += c;
      } else if ((Ki & l) !== 0) {
        const c = (l & (Ue | Lt)) === 0, a = new nt(
          W(i, r),
          null,
          // left
          (l & Lt) === Lt ? e.readLeftID() : null,
          // origin
          null,
          // right
          (l & Ue) === Ue ? e.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? e.readParentInfo() ? e.readString() : e.readLeftID() : null,
          // parent
          c && (l & vs) === vs ? e.readString() : null,
          // parentSub
          Ju(e, l)
          // item content
        );
        yield a, r += a.length;
      } else {
        const c = e.readLen();
        yield new ee(W(i, r), c), r += c;
      }
    }
  }
}
class qm {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, n) {
    this.gen = Km(t), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === re);
    return this.curr;
  }
}
class Jm {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const Ym = (e, t) => {
  if (e.constructor === ee) {
    const { client: n, clock: s } = e.id;
    return new ee(W(n, s + t), e.length - t);
  } else if (e.constructor === re) {
    const { client: n, clock: s } = e.id;
    return new re(W(n, s + t), e.length - t);
  } else {
    const n = (
      /** @type {Item} */
      e
    ), { client: s, clock: i } = n.id;
    return new nt(
      W(s, i + t),
      null,
      W(s, i + t - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(t)
    );
  }
}, yc = (e, t = xi, n = Yi) => {
  if (e.length === 1)
    return e[0];
  const s = e.map((u) => new t(To(u)));
  let i = s.map((u) => new qm(u, !0)), r = null;
  const o = new n(), l = new Jm(o);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === re ? 1 : -1 : p;
      } else
        return h.curr.id.client - f.curr.id.client;
    }
  ), i.length !== 0; ) {
    const u = i[0], d = (
      /** @type {Item | GC} */
      u.curr.id.client
    );
    if (r !== null) {
      let f = (
        /** @type {Item | GC | null} */
        u.curr
      ), h = !1;
      for (; f !== null && f.id.clock + f.length <= r.struct.id.clock + r.struct.length && f.id.client >= r.struct.id.client; )
        f = u.next(), h = !0;
      if (f === null || // current decoder is empty
      f.id.client !== d || // check whether there is another decoder that has has updates from `firstClient`
      h && f.id.clock > r.struct.id.clock + r.struct.length)
        continue;
      if (d !== r.struct.id.client)
        rs(l, r.struct, r.offset), r = { struct: f, offset: 0 }, u.next();
      else if (r.struct.id.clock + r.struct.length < f.id.clock)
        if (r.struct.constructor === re)
          r.struct.length = f.id.clock + f.length - r.struct.id.clock;
        else {
          rs(l, r.struct, r.offset);
          const p = f.id.clock - r.struct.id.clock - r.struct.length;
          r = { struct: new re(W(d, r.struct.id.clock + r.struct.length), p), offset: 0 };
        }
      else {
        const p = r.struct.id.clock + r.struct.length - f.id.clock;
        p > 0 && (r.struct.constructor === re ? r.struct.length -= p : f = Ym(f, p)), r.struct.mergeWith(
          /** @type {any} */
          f
        ) || (rs(l, r.struct, r.offset), r = { struct: f, offset: 0 }, u.next());
      }
    } else
      r = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let f = u.curr; f !== null && f.id.client === d && f.id.clock === r.struct.id.clock + r.struct.length && f.constructor !== re; f = u.next())
      rs(l, r.struct, r.offset), r = { struct: f, offset: 0 };
  }
  r !== null && (rs(l, r.struct, r.offset), r = null), Gm(l);
  const c = s.map((u) => Cm(u)), a = qr(c);
  return Lo(o, a), o.toUint8Array();
}, Mu = (e) => {
  e.written > 0 && (e.clientStructs.push({ written: e.written, restEncoder: oe(e.encoder.restEncoder) }), e.encoder.restEncoder = Fs(), e.written = 0);
}, rs = (e, t, n) => {
  e.written > 0 && e.currClient !== t.id.client && Mu(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), Z(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Gm = (e) => {
  Mu(e);
  const t = e.encoder.restEncoder;
  Z(t, e.clientStructs.length);
  for (let n = 0; n < e.clientStructs.length; n++) {
    const s = e.clientStructs[n];
    Z(t, s.written), qi(t, s.restEncoder);
  }
}, vc = "You must not compute changes after the event-handler fired.";
class Xi {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(t, n) {
    this.target = t, this.currentTarget = t, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = Xm(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(t) {
    return Qn(this.transaction.deleteSet, t.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw on(vc);
      const t = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const r = (
            /** @type {Item} */
            n._map.get(i)
          );
          let o, l;
          if (this.adds(r)) {
            let c = r.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(r))
              if (c !== null && this.deletes(c))
                o = "delete", l = mr(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (o = "update", l = mr(c.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(r))
            o = "delete", l = mr(
              /** @type {Item} */
              r.content.getContent()
            );
          else
            return;
          t.set(i, { action: o, oldValue: l });
        }
      }), this._keys = t;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(t) {
    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let t = this._changes;
    if (t === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw on(vc);
      const n = this.target, s = kn(), i = kn(), r = [];
      if (t = {
        added: s,
        deleted: i,
        delta: r,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let l = null;
        const c = () => {
          l && r.push(l);
        };
        for (let a = n._start; a !== null; a = a.right)
          a.deleted ? this.deletes(a) && !this.adds(a) && ((l === null || l.delete === void 0) && (c(), l = { delete: 0 }), l.delete += a.length, i.add(a)) : this.adds(a) ? ((l === null || l.insert === void 0) && (c(), l = { insert: [] }), l.insert = l.insert.concat(a.content.getContent()), s.add(a)) : ((l === null || l.retain === void 0) && (c(), l = { retain: 0 }), l.retain += a.length);
        l !== null && l.retain === void 0 && c();
      }
      this._changes = t;
    }
    return (
      /** @type {any} */
      t
    );
  }
}
const Xm = (e, t) => {
  const n = [];
  for (; t._item !== null && t !== e; ) {
    if (t._item.parentSub !== null)
      n.unshift(t._item.parentSub);
    else {
      let s = 0, i = (
        /** @type {AbstractType<any>} */
        t._item.parent._start
      );
      for (; i !== t._item && i !== null; )
        !i.deleted && i.countable && (s += i.length), i = i.right;
      n.unshift(s);
    }
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  }
  return n;
}, At = () => {
  mu("Invalid access: Add Yjs type to a document before reading data.");
}, Du = 80;
let $o = 0;
class Qm {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, n) {
    t.marker = !0, this.p = t, this.index = n, this.timestamp = $o++;
  }
}
const Zm = (e) => {
  e.timestamp = $o++;
}, Ou = (e, t, n) => {
  e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = $o++;
}, tw = (e, t, n) => {
  if (e.length >= Du) {
    const s = e.reduce((i, r) => i.timestamp < r.timestamp ? i : r);
    return Ou(s, t, n), s;
  } else {
    const s = new Qm(t, n);
    return e.push(s), s;
  }
}, Qi = (e, t) => {
  if (e._start === null || t === 0 || e._searchMarker === null)
    return null;
  const n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((r, o) => si(t - r.index) < si(t - o.index) ? r : o);
  let s = e._start, i = 0;
  for (n !== null && (s = n.p, i = n.index, Zm(n)); s.right !== null && i < t; ) {
    if (!s.deleted && s.countable) {
      if (t < i + s.length)
        break;
      i += s.length;
    }
    s = s.right;
  }
  for (; s.left !== null && i > t; )
    s = s.left, !s.deleted && s.countable && (i -= s.length);
  for (; s.left !== null && s.left.id.client === s.id.client && s.left.id.clock + s.left.length === s.id.clock; )
    s = s.left, !s.deleted && s.countable && (i -= s.length);
  return n !== null && si(n.index - i) < /** @type {YText|YArray<any>} */
  s.parent.length / Du ? (Ou(n, s, i), n) : tw(e._searchMarker, s, i);
}, Es = (e, t, n) => {
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (n > 0) {
      let r = i.p;
      for (r.marker = !1; r && (r.deleted || !r.countable); )
        r = r.left, r && !r.deleted && r.countable && (i.index -= r.length);
      if (r === null || r.marker === !0) {
        e.splice(s, 1);
        continue;
      }
      i.p = r, r.marker = !0;
    }
    (t < i.index || n > 0 && t === i.index) && (i.index = rn(t, i.index + n));
  }
}, Zi = (e, t, n) => {
  const s = e, i = t.changedParentTypes;
  for (; Je(i, e, () => []).push(n), e._item !== null; )
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  ku(s._eH, n, t);
};
class vt {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = dc(), this._dEH = dc(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(t, n) {
    this.doc = t, this._item = n;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw ae();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw ae();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(t) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let t = this._start;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    !t.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(t) {
    fc(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    fc(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    hc(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    hc(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Ru = (e, t, n) => {
  e.doc ?? At(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
  let s = n - t;
  const i = [];
  let r = e._start;
  for (; r !== null && s > 0; ) {
    if (r.countable && !r.deleted) {
      const o = r.content.getContent();
      if (o.length <= t)
        t -= o.length;
      else {
        for (let l = t; l < o.length && s > 0; l++)
          i.push(o[l]), s--;
        t = 0;
      }
    }
    r = r.right;
  }
  return i;
}, Iu = (e) => {
  e.doc ?? At();
  const t = [];
  let n = e._start;
  for (; n !== null; ) {
    if (n.countable && !n.deleted) {
      const s = n.content.getContent();
      for (let i = 0; i < s.length; i++)
        t.push(s[i]);
    }
    n = n.right;
  }
  return t;
}, Nu = (e, t) => {
  const n = [];
  let s = e._start;
  for (; s !== null; ) {
    if (s.countable && mn(s, t)) {
      const i = s.content.getContent();
      for (let r = 0; r < i.length; r++)
        n.push(i[r]);
    }
    s = s.right;
  }
  return n;
}, As = (e, t) => {
  let n = 0, s = e._start;
  for (e.doc ?? At(); s !== null; ) {
    if (s.countable && !s.deleted) {
      const i = s.content.getContent();
      for (let r = 0; r < i.length; r++)
        t(i[r], n++, e);
    }
    s = s.right;
  }
}, Lu = (e, t) => {
  const n = [];
  return As(e, (s, i) => {
    n.push(t(s, i, e));
  }), n;
}, ew = (e) => {
  let t = e._start, n = null, s = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (n === null) {
        for (; t !== null && t.deleted; )
          t = t.right;
        if (t === null)
          return {
            done: !0,
            value: void 0
          };
        n = t.content.getContent(), s = 0, t = t.right;
      }
      const i = n[s++];
      return n.length <= s && (n = null), {
        done: !1,
        value: i
      };
    }
  };
}, Pu = (e, t) => {
  e.doc ?? At();
  const n = Qi(e, t);
  let s = e._start;
  for (n !== null && (s = n.p, t -= n.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t < s.length)
        return s.content.getContent()[t];
      t -= s.length;
    }
}, Ci = (e, t, n, s) => {
  let i = n;
  const r = e.doc, o = r.clientID, l = r.store, c = n === null ? t._start : n.right;
  let a = [];
  const u = () => {
    a.length > 0 && (i = new nt(W(o, mt(l, o)), i, i && i.lastId, c, c && c.id, t, null, new Cn(a)), i.integrate(e, 0), a = []);
  };
  s.forEach((d) => {
    if (d === null)
      a.push(d);
    else
      switch (d.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          a.push(d);
          break;
        default:
          switch (u(), d.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, c, c && c.id, t, null, new Hs(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(e, 0);
              break;
            case An:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, c, c && c.id, t, null, new Us(
                /** @type {Doc} */
                d
              )), i.integrate(e, 0);
              break;
            default:
              if (d instanceof vt)
                i = new nt(W(o, mt(l, o)), i, i && i.lastId, c, c && c.id, t, null, new ge(d)), i.integrate(e, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, $u = () => on("Length exceeded!"), Bu = (e, t, n, s) => {
  if (n > t._length)
    throw $u();
  if (n === 0)
    return t._searchMarker && Es(t._searchMarker, n, s.length), Ci(e, t, null, s);
  const i = n, r = Qi(t, n);
  let o = t._start;
  for (r !== null && (o = r.p, n -= r.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && Ft(e, W(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return t._searchMarker && Es(t._searchMarker, i, s.length), Ci(e, t, o, s);
}, nw = (e, t, n) => {
  let i = (t._searchMarker || []).reduce((r, o) => o.index > r.index ? o : r, { index: 0, p: t._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Ci(e, t, i, n);
}, Fu = (e, t, n, s) => {
  if (s === 0)
    return;
  const i = n, r = s, o = Qi(t, n);
  let l = t._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && Ft(e, W(l.id.client, l.id.clock + n)), n -= l.length);
  for (; s > 0 && l !== null; )
    l.deleted || (s < l.length && Ft(e, W(l.id.client, l.id.clock + s)), l.delete(e), s -= l.length), l = l.right;
  if (s > 0)
    throw $u();
  t._searchMarker && Es(
    t._searchMarker,
    i,
    -r + s
    /* in case we remove the above exception */
  );
}, Ei = (e, t, n) => {
  const s = t._map.get(n);
  s !== void 0 && s.delete(e);
}, Bo = (e, t, n, s) => {
  const i = t._map.get(n) || null, r = e.doc, o = r.clientID;
  let l;
  if (s == null)
    l = new Cn([s]);
  else
    switch (s.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        l = new Cn([s]);
        break;
      case Uint8Array:
        l = new Hs(
          /** @type {Uint8Array} */
          s
        );
        break;
      case An:
        l = new Us(
          /** @type {Doc} */
          s
        );
        break;
      default:
        if (s instanceof vt)
          l = new ge(s);
        else
          throw new Error("Unexpected content type");
    }
  new nt(W(o, mt(r.store, o)), i, i && i.lastId, null, null, t, n, l).integrate(e, 0);
}, Fo = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Hu = (e) => {
  const t = {};
  return e.doc ?? At(), e._map.forEach((n, s) => {
    n.deleted || (t[s] = n.content.getContent()[n.length - 1]);
  }), t;
}, Uu = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted;
}, sw = (e, t) => {
  const n = {};
  return e._map.forEach((s, i) => {
    let r = s;
    for (; r !== null && (!t.sv.has(r.id.client) || r.id.clock >= (t.sv.get(r.id.client) || 0)); )
      r = r.left;
    r !== null && mn(r, t) && (n[i] = r.content.getContent()[r.length - 1]);
  }), n;
}, Ks = (e) => (e.doc ?? At(), km(
  e._map.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
));
class iw extends Xi {
}
class Fn extends vt {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(t) {
    const n = new Fn();
    return n.push(t), n;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new Fn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const t = new Fn();
    return t.insert(0, this.toArray().map(
      (n) => n instanceof vt ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), t;
  }
  get length() {
    return this.doc ?? At(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    super._callObserver(t, n), Zi(this, t, new iw(this, t));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(t, n) {
    this.doc !== null ? it(this.doc, (s) => {
      Bu(
        s,
        this,
        t,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.splice(t, 0, ...n);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(t) {
    this.doc !== null ? it(this.doc, (n) => {
      nw(
        n,
        this,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.push(...t);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(t, n = 1) {
    this.doc !== null ? it(this.doc, (s) => {
      Fu(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return Pu(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Iu(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(t = 0, n = this.length) {
    return Ru(this, t, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((t) => t instanceof vt ? t.toJSON() : t);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(t) {
    return Lu(
      this,
      /** @type {any} */
      t
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    As(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return ew(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Mw);
  }
}
const rw = (e) => new Fn();
class ow extends Xi {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(t, n, s) {
    super(t, n), this.keysChanged = s;
  }
}
class Kn extends vt {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(t) {
    super(), this._prelimContent = null, t === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(t);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this._prelimContent.forEach((s, i) => {
      this.set(i, s);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new Kn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const t = new Kn();
    return this.forEach((n, s) => {
      t.set(s, n instanceof vt ? (
        /** @type {typeof value} */
        n.clone()
      ) : n);
    }), t;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    Zi(this, t, new ow(this, t, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? At();
    const t = {};
    return this._map.forEach((n, s) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        t[s] = i instanceof vt ? i.toJSON() : i;
      }
    }), t;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...Ks(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return _r(
      Ks(this),
      /** @param {any} v */
      (t) => t[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return _r(
      Ks(this),
      /** @param {any} v */
      (t) => t[1].content.getContent()[t[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return _r(
      Ks(this),
      /** @param {any} v */
      (t) => (
        /** @type {any} */
        [t[0], t[1].content.getContent()[t[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    this.doc ?? At(), this._map.forEach((n, s) => {
      n.deleted || t(n.content.getContent()[n.length - 1], s, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(t) {
    this.doc !== null ? it(this.doc, (n) => {
      Ei(n, this, t);
    }) : this._prelimContent.delete(t);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(t, n) {
    return this.doc !== null ? it(this.doc, (s) => {
      Bo(
        s,
        this,
        t,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.set(t, n), n;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(t) {
    return (
      /** @type {any} */
      Fo(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return Uu(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? it(this.doc, (t) => {
      this.forEach(function(n, s, i) {
        Ei(t, i, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Dw);
  }
}
const lw = (e) => new Kn(), en = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Qg(e, t);
class Xr {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(t, n, s, i) {
    this.left = t, this.right = n, this.index = s, this.currentAttributes = i;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    switch (this.right === null && Vt(), this.right.content.constructor) {
      case bt:
        this.right.deleted || Zn(
          this.currentAttributes,
          /** @type {ContentFormat} */
          this.right.content
        );
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const _c = (e, t, n) => {
  for (; t.right !== null && n > 0; ) {
    switch (t.right.content.constructor) {
      case bt:
        t.right.deleted || Zn(
          t.currentAttributes,
          /** @type {ContentFormat} */
          t.right.content
        );
        break;
      default:
        t.right.deleted || (n < t.right.length && Ft(e, W(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
        break;
    }
    t.left = t.right, t.right = t.right.right;
  }
  return t;
}, qs = (e, t, n, s) => {
  const i = /* @__PURE__ */ new Map(), r = s ? Qi(t, n) : null;
  if (r) {
    const o = new Xr(r.p.left, r.p, r.index, i);
    return _c(e, o, n - r.index);
  } else {
    const o = new Xr(null, t._start, 0, i);
    return _c(e, o, n);
  }
}, Vu = (e, t, n, s) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === bt && en(
    s.get(
      /** @type {ContentFormat} */
      n.right.content.key
    ),
    /** @type {ContentFormat} */
    n.right.content.value
  )); )
    n.right.deleted || s.delete(
      /** @type {ContentFormat} */
      n.right.content.key
    ), n.forward();
  const i = e.doc, r = i.clientID;
  s.forEach((o, l) => {
    const c = n.left, a = n.right, u = new nt(W(r, mt(i.store, r)), c, c && c.lastId, a, a && a.id, t, null, new bt(l, o));
    u.integrate(e, 0), n.right = u, n.forward();
  });
}, Zn = (e, t) => {
  const { key: n, value: s } = t;
  s === null ? e.delete(n) : e.set(n, s);
}, ju = (e, t) => {
  for (; e.right !== null; ) {
    if (!(e.right.deleted || e.right.content.constructor === bt && en(
      t[
        /** @type {ContentFormat} */
        e.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      e.right.content.value
    ))) break;
    e.forward();
  }
}, zu = (e, t, n, s) => {
  const i = e.doc, r = i.clientID, o = /* @__PURE__ */ new Map();
  for (const l in s) {
    const c = s[l], a = n.currentAttributes.get(l) ?? null;
    if (!en(a, c)) {
      o.set(l, a);
      const { left: u, right: d } = n;
      n.right = new nt(W(r, mt(i.store, r)), u, u && u.lastId, d, d && d.id, t, null, new bt(l, c)), n.right.integrate(e, 0), n.forward();
    }
  }
  return o;
}, Sr = (e, t, n, s, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const r = e.doc, o = r.clientID;
  ju(n, i);
  const l = zu(e, t, n, i), c = s.constructor === String ? new pe(
    /** @type {string} */
    s
  ) : s instanceof vt ? new ge(s) : new Tn(s);
  let { left: a, right: u, index: d } = n;
  t._searchMarker && Es(t._searchMarker, n.index, c.getLength()), u = new nt(W(o, mt(r.store, o)), a, a && a.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Vu(e, t, n, l);
}, kc = (e, t, n, s, i) => {
  const r = e.doc, o = r.clientID;
  ju(n, i);
  const l = zu(e, t, n, i);
  t: for (; n.right !== null && (s > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === bt)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case bt: {
          const { key: c, value: a } = (
            /** @type {ContentFormat} */
            n.right.content
          ), u = i[c];
          if (u !== void 0) {
            if (en(u, a))
              l.delete(c);
            else {
              if (s === 0)
                break t;
              l.set(c, a);
            }
            n.right.delete(e);
          } else
            n.currentAttributes.set(c, a);
          break;
        }
        default:
          s < n.right.length && Ft(e, W(n.right.id.client, n.right.id.clock + s)), s -= n.right.length;
          break;
      }
    n.forward();
  }
  if (s > 0) {
    let c = "";
    for (; s > 0; s--)
      c += `
`;
    n.right = new nt(W(o, mt(r.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new pe(c)), n.right.integrate(e, 0), n.forward();
  }
  Vu(e, t, n, l);
}, Wu = (e, t, n, s, i) => {
  let r = t;
  const o = ce();
  for (; r && (!r.countable || r.deleted); ) {
    if (!r.deleted && r.content.constructor === bt) {
      const a = (
        /** @type {ContentFormat} */
        r.content
      );
      o.set(a.key, a);
    }
    r = r.right;
  }
  let l = 0, c = !1;
  for (; t !== r; ) {
    if (n === t && (c = !0), !t.deleted) {
      const a = t.content;
      switch (a.constructor) {
        case bt: {
          const { key: u, value: d } = (
            /** @type {ContentFormat} */
            a
          ), f = s.get(u) ?? null;
          (o.get(u) !== a || f === d) && (t.delete(e), l++, !c && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !c && !t.deleted && Zn(
            i,
            /** @type {ContentFormat} */
            a
          );
          break;
        }
      }
    }
    t = /** @type {Item} */
    t.right;
  }
  return l;
}, cw = (e, t) => {
  for (; t && t.right && (t.right.deleted || !t.right.countable); )
    t = t.right;
  const n = /* @__PURE__ */ new Set();
  for (; t && (t.deleted || !t.countable); ) {
    if (!t.deleted && t.content.constructor === bt) {
      const s = (
        /** @type {ContentFormat} */
        t.content.key
      );
      n.has(s) ? t.delete(e) : n.add(s);
    }
    t = t.left;
  }
}, aw = (e) => {
  let t = 0;
  return it(
    /** @type {Doc} */
    e.doc,
    (n) => {
      let s = (
        /** @type {Item} */
        e._start
      ), i = e._start, r = ce();
      const o = Hr(r);
      for (; i; ) {
        if (i.deleted === !1)
          switch (i.content.constructor) {
            case bt:
              Zn(
                o,
                /** @type {ContentFormat} */
                i.content
              );
              break;
            default:
              t += Wu(n, s, i, r, o), r = Hr(o), s = i;
              break;
          }
        i = i.right;
      }
    }
  ), t;
}, uw = (e) => {
  const t = /* @__PURE__ */ new Set(), n = e.doc;
  for (const [s, i] of e.afterState.entries()) {
    const r = e.beforeState.get(s) || 0;
    i !== r && Eu(
      e,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(s),
      r,
      i,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === bt && o.constructor !== ee && t.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  it(n, (s) => {
    ln(e, e.deleteSet, (i) => {
      if (i instanceof ee || !/** @type {YText} */
      i.parent._hasFormatting || t.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const r = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === bt ? t.add(r) : cw(s, i);
    });
    for (const i of t)
      aw(i);
  });
}, xc = (e, t, n) => {
  const s = n, i = Hr(t.currentAttributes), r = t.right;
  for (; n > 0 && t.right !== null; ) {
    if (t.right.deleted === !1)
      switch (t.right.content.constructor) {
        case ge:
        case Tn:
        case pe:
          n < t.right.length && Ft(e, W(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
          break;
      }
    t.forward();
  }
  r && Wu(e, r, t.right, i, t.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return o._searchMarker && Es(o._searchMarker, t.index, -s + n), t;
};
class dw extends Xi {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(t, n, s) {
    super(t, n), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), s.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const t = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = t;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const t = (
        /** @type {Doc} */
        this.target.doc
      ), n = [];
      it(t, (s) => {
        const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
        let o = this.target._start, l = null;
        const c = {};
        let a = "", u = 0, d = 0;
        const f = () => {
          if (l !== null) {
            let h = null;
            switch (l) {
              case "delete":
                d > 0 && (h = { delete: d }), d = 0;
                break;
              case "insert":
                (typeof a == "object" || a.length > 0) && (h = { insert: a }, i.size > 0 && (h.attributes = {}, i.forEach((p, m) => {
                  p !== null && (h.attributes[m] = p);
                }))), a = "";
                break;
              case "retain":
                u > 0 && (h = { retain: u }, Gg(c) || (h.attributes = Jg({}, c))), u = 0;
                break;
            }
            h && n.push(h), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case ge:
            case Tn:
              this.adds(o) ? this.deletes(o) || (f(), l = "insert", a = o.content.getContent()[0], f()) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), d += 1) : o.deleted || (l !== "retain" && (f(), l = "retain"), u += 1);
              break;
            case pe:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (f(), l = "insert"), a += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), d += o.length) : o.deleted || (l !== "retain" && (f(), l = "retain"), u += o.length);
              break;
            case bt: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const m = i.get(h) ?? null;
                  en(m, p) ? p !== null && o.delete(s) : (l === "retain" && f(), en(p, r.get(h) ?? null) ? delete c[h] : c[h] = p);
                }
              } else if (this.deletes(o)) {
                r.set(h, p);
                const m = i.get(h) ?? null;
                en(m, p) || (l === "retain" && f(), c[h] = m);
              } else if (!o.deleted) {
                r.set(h, p);
                const m = c[h];
                m !== void 0 && (en(m, p) ? m !== null && o.delete(s) : (l === "retain" && f(), p === null ? delete c[h] : c[h] = p));
              }
              o.deleted || (l === "insert" && f(), Zn(
                i,
                /** @type {ContentFormat} */
                o.content
              ));
              break;
            }
          }
          o = o.right;
        }
        for (f(); n.length > 0; ) {
          const h = n[n.length - 1];
          if (h.retain !== void 0 && h.attributes === void 0)
            n.pop();
          else
            break;
        }
      }), this._delta = n;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class cn extends vt {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(t) {
    super(), this._pending = t !== void 0 ? [() => this.insert(0, t)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this.doc ?? At(), this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n);
    try {
      this._pending.forEach((s) => s());
    } catch (s) {
      console.error(s);
    }
    this._pending = null;
  }
  _copy() {
    return new cn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const t = new cn();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    super._callObserver(t, n);
    const s = new dw(this, t, n);
    Zi(this, t, s), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? At();
    let t = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === pe && (t += /** @type {ContentString} */
      n.content.str), n = n.right;
    return t;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(t, { sanitize: n = !0 } = {}) {
    this.doc !== null ? it(this.doc, (s) => {
      const i = new Xr(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && r === t.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && Sr(s, this, i, l, o.attributes || {});
        } else o.retain !== void 0 ? kc(s, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && xc(s, i, o.delete);
      }
    }) : this._pending.push(() => this.applyDelta(t));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(t, n, s) {
    this.doc ?? At();
    const i = [], r = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", c = this._start;
    function a() {
      if (l.length > 0) {
        const d = {};
        let f = !1;
        r.forEach((p, m) => {
          f = !0, d[m] = p;
        });
        const h = { insert: l };
        f && (h.attributes = d), i.push(h), l = "";
      }
    }
    const u = () => {
      for (; c !== null; ) {
        if (mn(c, t) || n !== void 0 && mn(c, n))
          switch (c.content.constructor) {
            case pe: {
              const d = r.get("ychange");
              t !== void 0 && !mn(c, t) ? (d === void 0 || d.user !== c.id.client || d.type !== "removed") && (a(), r.set("ychange", s ? s("removed", c.id) : { type: "removed" })) : n !== void 0 && !mn(c, n) ? (d === void 0 || d.user !== c.id.client || d.type !== "added") && (a(), r.set("ychange", s ? s("added", c.id) : { type: "added" })) : d !== void 0 && (a(), r.delete("ychange")), l += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case ge:
            case Tn: {
              a();
              const d = {
                insert: c.content.getContent()[0]
              };
              if (r.size > 0) {
                const f = (
                  /** @type {Object<string,any>} */
                  {}
                );
                d.attributes = f, r.forEach((h, p) => {
                  f[p] = h;
                });
              }
              i.push(d);
              break;
            }
            case bt:
              mn(c, t) && (a(), Zn(
                r,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      a();
    };
    return t || n ? it(o, (d) => {
      t && Yr(d, t), n && Yr(d, n), u();
    }, "cleanup") : u(), i;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(t, n, s) {
    if (n.length <= 0)
      return;
    const i = this.doc;
    i !== null ? it(i, (r) => {
      const o = qs(r, this, t, !s);
      s || (s = {}, o.currentAttributes.forEach((l, c) => {
        s[c] = l;
      })), Sr(r, this, o, n, s);
    }) : this._pending.push(() => this.insert(t, n, s));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(t, n, s) {
    const i = this.doc;
    i !== null ? it(i, (r) => {
      const o = qs(r, this, t, !s);
      Sr(r, this, o, n, s || {});
    }) : this._pending.push(() => this.insertEmbed(t, n, s || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(t, n) {
    if (n === 0)
      return;
    const s = this.doc;
    s !== null ? it(s, (i) => {
      xc(i, qs(i, this, t, !0), n);
    }) : this._pending.push(() => this.delete(t, n));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(t, n, s) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? it(i, (r) => {
      const o = qs(r, this, t, !1);
      o.right !== null && kc(r, this, o, n, s);
    }) : this._pending.push(() => this.format(t, n, s));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? it(this.doc, (n) => {
      Ei(n, this, t);
    }) : this._pending.push(() => this.removeAttribute(t));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, n) {
    this.doc !== null ? it(this.doc, (s) => {
      Bo(s, this, t, n);
    }) : this._pending.push(() => this.setAttribute(t, n));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      Fo(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return Hu(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Ow);
  }
}
const fw = (e) => new cn();
class Cr {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(t, n = () => !0) {
    this._filter = n, this._root = t, this._currentNode = /** @type {Item} */
    t._start, this._firstCall = !0, t.doc ?? At();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let t = this._currentNode, n = t && t.content && /** @type {any} */
    t.content.type;
    if (t !== null && (!this._firstCall || t.deleted || !this._filter(n)))
      do
        if (n = /** @type {any} */
        t.content.type, !t.deleted && (n.constructor === Ct || n.constructor === Sn) && n._start !== null)
          t = n._start;
        else
          for (; t !== null; ) {
            const s = t.next;
            if (s !== null) {
              t = s;
              break;
            } else t.parent === this._root ? t = null : t = /** @type {AbstractType<any>} */
            t.parent._item;
          }
      while (t !== null && (t.deleted || !this._filter(
        /** @type {ContentType} */
        t.content.type
      )));
    return this._firstCall = !1, t === null ? { value: void 0, done: !0 } : (this._currentNode = t, { value: (
      /** @type {any} */
      t.content.type
    ), done: !1 });
  }
}
class Sn extends vt {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const t = this._first;
    return t ? t.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new Sn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const t = new Sn();
    return t.insert(0, this.toArray().map((n) => n instanceof vt ? n.clone() : n)), t;
  }
  get length() {
    return this.doc ?? At(), this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(t) {
    return new Cr(this, t);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(t) {
    t = t.toUpperCase();
    const s = new Cr(this, (i) => i.nodeName && i.nodeName.toUpperCase() === t).next();
    return s.done ? null : s.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(t) {
    return t = t.toUpperCase(), xn(new Cr(this, (n) => n.nodeName && n.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    Zi(this, t, new gw(this, n, t));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Lu(this, (t) => t.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, s) {
    const i = t.createDocumentFragment();
    return s !== void 0 && s._createAssociation(i, this), As(this, (r) => {
      i.insertBefore(r.toDOM(t, n, s), null);
    }), i;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(t, n) {
    this.doc !== null ? it(this.doc, (s) => {
      Bu(s, this, t, n);
    }) : this._prelimContent.splice(t, 0, ...n);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(t, n) {
    if (this.doc !== null)
      it(this.doc, (s) => {
        const i = t && t instanceof vt ? t._item : t;
        Ci(s, this, i, n);
      });
    else {
      const s = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = t === null ? 0 : s.findIndex((r) => r === t) + 1;
      if (i === 0 && t !== null)
        throw on("Reference item not found");
      s.splice(i, 0, ...n);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(t, n = 1) {
    this.doc !== null ? it(this.doc, (s) => {
      Fu(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Iu(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(t) {
    this.insert(this.length, t);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(t) {
    return Pu(this, t);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(t = 0, n = this.length) {
    return Ru(this, t, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    As(this, t);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Iw);
  }
}
const hw = (e) => new Sn();
class Ct extends Sn {
  constructor(t = "UNDEFINED") {
    super(), this.nodeName = t, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((s, i) => {
      this.setAttribute(i, s);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new Ct(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const t = new Ct(this.nodeName), n = this.getAttributes();
    return Yg(n, (s, i) => {
      typeof s == "string" && t.setAttribute(i, s);
    }), t.insert(0, this.toArray().map((s) => s instanceof vt ? s.clone() : s)), t;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const t = this.getAttributes(), n = [], s = [];
    for (const l in t)
      s.push(l);
    s.sort();
    const i = s.length;
    for (let l = 0; l < i; l++) {
      const c = s[l];
      n.push(c + '="' + t[c] + '"');
    }
    const r = this.nodeName.toLocaleLowerCase(), o = n.length > 0 ? " " + n.join(" ") : "";
    return `<${r}${o}>${super.toString()}</${r}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? it(this.doc, (n) => {
      Ei(n, this, t);
    }) : this._prelimAttrs.delete(t);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, n) {
    this.doc !== null ? it(this.doc, (s) => {
      Bo(s, this, t, n);
    }) : this._prelimAttrs.set(t, n);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      Fo(this, t)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(t) {
    return (
      /** @type {any} */
      Uu(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(t) {
    return (
      /** @type {any} */
      t ? sw(this, t) : Hu(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, s) {
    const i = t.createElement(this.nodeName), r = this.getAttributes();
    for (const o in r) {
      const l = r[o];
      typeof l == "string" && i.setAttribute(o, l);
    }
    return As(this, (o) => {
      i.appendChild(o.toDOM(t, n, s));
    }), s !== void 0 && s._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Rw), t.writeKey(this.nodeName);
  }
}
const pw = (e) => new Ct(e.readKey());
class gw extends Xi {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(t, n, s) {
    super(t, s), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class Ai extends Kn {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(t) {
    super(), this.hookName = t;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new Ai(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const t = new Ai(this.hookName);
    return this.forEach((n, s) => {
      t.set(s, n);
    }), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, s) {
    const i = n[this.hookName];
    let r;
    return i !== void 0 ? r = i.createDom(this) : r = document.createElement(this.hookName), r.setAttribute("data-yjs-hook", this.hookName), s !== void 0 && s._createAssociation(r, this), r;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Nw), t.writeKey(this.hookName);
  }
}
const mw = (e) => new Ai(e.readKey());
class Ut extends cn {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  _copy() {
    return new Ut();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const t = new Ut();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n, s) {
    const i = t.createTextNode(this.toString());
    return s !== void 0 && s._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((t) => {
      const n = [];
      for (const i in t.attributes) {
        const r = [];
        for (const o in t.attributes[i])
          r.push({ key: o, value: t.attributes[i][o] });
        r.sort((o, l) => o.key < l.key ? -1 : 1), n.push({ nodeName: i, attrs: r });
      }
      n.sort((i, r) => i.nodeName < r.nodeName ? -1 : 1);
      let s = "";
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        s += `<${r.nodeName}`;
        for (let o = 0; o < r.attrs.length; o++) {
          const l = r.attrs[o];
          s += ` ${l.key}="${l.value}"`;
        }
        s += ">";
      }
      s += t.insert;
      for (let i = n.length - 1; i >= 0; i--)
        s += `</${n[i].nodeName}>`;
      return s;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Lw);
  }
}
const ww = (e) => new Ut();
class Ho {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(t, n) {
    this.id = t, this.length = n;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw ae();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(t, n, s) {
    throw ae();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    throw ae();
  }
}
const bw = 0;
class ee extends Ho {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    n > 0 && (this.id.clock += n, this.length -= n), Cu(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(bw), t.writeLen(this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    return null;
  }
}
class Hs {
  /**
   * @param {Uint8Array} content
   */
  constructor(t) {
    this.content = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new Hs(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(t) {
    throw ae();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const yw = (e) => new Hs(e.readBuf());
class Ts {
  /**
   * @param {number} len
   */
  constructor(t) {
    this.len = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new Ts(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const n = new Ts(this.len - t);
    return this.len = t, n;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.len += t.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    xs(t.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeLen(this.len - n);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const vw = (e) => new Ts(e.readLen()), Ku = (e, t) => new An({ guid: e, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
class Us {
  /**
   * @param {Doc} doc
   */
  constructor(t) {
    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
    const n = {};
    this.opts = n, t.gc || (n.gc = !1), t.autoLoad && (n.autoLoad = !0), t.meta !== null && (n.meta = t.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new Us(Ku(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(t) {
    throw ae();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    this.doc._item = n, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeString(this.doc.guid), t.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const _w = (e) => new Us(Ku(e.readString(), e.readAny()));
class Tn {
  /**
   * @param {Object} embed
   */
  constructor(t) {
    this.embed = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new Tn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(t) {
    throw ae();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const kw = (e) => new Tn(e.readJSON());
class bt {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(t, n) {
    this.key = t, this.value = n;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new bt(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(t) {
    throw ae();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(t, n) {
    const s = (
      /** @type {YText} */
      n.parent
    );
    s._searchMarker = null, s._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeKey(this.key), t.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const xw = (e) => new bt(e.readKey(), e.readJSON());
class Ti {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new Ti(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const n = new Ti(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), n;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    const s = this.arr.length;
    t.writeLen(s - n);
    for (let i = n; i < s; i++) {
      const r = this.arr[i];
      t.writeString(r === void 0 ? "undefined" : JSON.stringify(r));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const Sw = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++) {
    const i = e.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Ti(n);
}, Cw = ki("node_env") === "development";
class Cn {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t, Cw && cu(t);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new Cn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(t) {
    const n = new Cn(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), n;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    const s = this.arr.length;
    t.writeLen(s - n);
    for (let i = n; i < s; i++) {
      const r = this.arr[i];
      t.writeAny(r);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const Ew = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++)
    n.push(e.readAny());
  return new Cn(n);
};
class pe {
  /**
   * @param {string} str
   */
  constructor(t) {
    this.str = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new pe(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(t) {
    const n = new pe(this.str.slice(t));
    this.str = this.str.slice(0, t);
    const s = this.str.charCodeAt(t - 1);
    return s >= 55296 && s <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.str += t.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeString(n === 0 ? this.str : this.str.slice(n));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const Aw = (e) => new pe(e.readString()), Tw = [
  rw,
  lw,
  fw,
  pw,
  hw,
  mw,
  ww
], Mw = 0, Dw = 1, Ow = 2, Rw = 3, Iw = 4, Nw = 5, Lw = 6;
class ge {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(t) {
    this.type = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new ge(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(t) {
    throw ae();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    this.type._integrate(t.doc, n);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    let n = this.type._start;
    for (; n !== null; )
      n.deleted ? n.id.clock < (t.beforeState.get(n.id.client) || 0) && t._mergeStructs.push(n) : n.delete(t), n = n.right;
    this.type._map.forEach((s) => {
      s.deleted ? s.id.clock < (t.beforeState.get(s.id.client) || 0) && t._mergeStructs.push(s) : s.delete(t);
    }), t.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
    let n = this.type._start;
    for (; n !== null; )
      n.gc(t, !0), n = n.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (s) => {
        for (; s !== null; )
          s.gc(t, !0), s = s.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    this.type._write(t);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Pw = (e) => new ge(Tw[e.readTypeRef()](e)), Qr = (e, t) => {
  let n = t, s = 0, i;
  do
    s > 0 && (n = W(n.client, n.clock + s)), i = Bn(e, n), s = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof nt);
  return {
    item: i,
    diff: s
  };
}, Uo = (e, t) => {
  for (; e !== null && e.keep !== t; )
    e.keep = t, e = /** @type {AbstractType<any>} */
    e.parent._item;
}, Mi = (e, t, n) => {
  const { client: s, clock: i } = t.id, r = new nt(
    W(s, i + n),
    t,
    W(s, i + n - 1),
    t.right,
    t.rightOrigin,
    t.parent,
    t.parentSub,
    t.content.splice(n)
  );
  return t.deleted && r.markDeleted(), t.keep && (r.keep = !0), t.redone !== null && (r.redone = W(t.redone.client, t.redone.clock + n)), t.right = r, r.right !== null && (r.right.left = r), e._mergeStructs.push(r), r.parentSub !== null && r.right === null && r.parent._map.set(r.parentSub, r), t.length = n, r;
}, Sc = (e, t) => lg(
  e,
  /** @param {StackItem} s */
  (n) => Qn(n.deletions, t)
), qu = (e, t, n, s, i, r) => {
  const o = e.doc, l = o.store, c = o.clientID, a = t.redone;
  if (a !== null)
    return Ft(e, a);
  let u = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || qu(e, u, n, s, i, r) === null))
      return null;
    for (; u.redone !== null; )
      u = Ft(e, u.redone);
  }
  const h = u === null ? (
    /** @type {AbstractType<any>} */
    t.parent
  ) : (
    /** @type {ContentType} */
    u.content.type
  );
  if (t.parentSub === null) {
    for (d = t.left, f = t; d !== null; ) {
      let b = d;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Ft(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        d = b;
        break;
      }
      d = d.left;
    }
    for (; f !== null; ) {
      let b = f;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Ft(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        f = b;
        break;
      }
      f = f.right;
    }
  } else if (f = null, t.right && !i) {
    for (d = t; d !== null && d.right !== null && (d.right.redone || Qn(s, d.right.id) || Sc(r.undoStack, d.right.id) || Sc(r.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = Ft(e, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(t.parentSub) || null;
  const p = mt(l, c), m = W(c, p), y = new nt(
    m,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    t.parentSub,
    t.content.copy()
  );
  return t.redone = m, Uo(y, !0), y.integrate(e, 0), y;
};
class nt extends Ho {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(t, n, s, i, r, o, l, c) {
    super(t, c.getLength()), this.origin = s, this.left = n, this.right = i, this.rightOrigin = r, this.parent = o, this.parentSub = l, this.redone = null, this.content = c, this.info = this.content.isCountable() ? tc : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & br) > 0 !== t && (this.info ^= br);
  }
  get marker() {
    return (this.info & br) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Zl) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= Zl);
  }
  get countable() {
    return (this.info & tc) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & wr) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= wr);
  }
  markDeleted() {
    this.info |= wr;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= mt(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= mt(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === $n && this.id.client !== this.parent.client && this.parent.clock >= mt(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = pc(t, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Ft(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === ee || this.right && this.right.constructor === ee)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === nt ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === nt && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === $n) {
      const s = Bn(n, this.parent);
      s.constructor === ee ? this.parent = null : this.parent = /** @type {ContentType} */
      s.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    if (n > 0 && (this.id.clock += n, this.left = pc(t, t.doc.store, W(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let s = this.left, i;
        if (s !== null)
          i = s.right;
        else if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start;
        const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (o.add(i), r.add(i), zs(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              s = i, r.clear();
            else if (zs(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(Bn(t.doc.store, i.origin)))
            r.has(Bn(t.doc.store, i.origin)) || (s = i, r.clear());
          else
            break;
          i = i.right;
        }
        this.left = s;
      }
      if (this.left !== null) {
        const s = this.left.right;
        this.right = s, this.left.right = this;
      } else {
        let s;
        if (this.parentSub !== null)
          for (s = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; s !== null && s.left !== null; )
            s = s.left;
        else
          s = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = s;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Cu(t.doc.store, this), this.content.integrate(t, this), mc(
        t,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(t);
    } else
      new ee(this.id, this.length).integrate(t, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let t = this.right;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let t = this.left;
    for (; t !== null && t.deleted; )
      t = t.left;
    return t;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : W(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(t) {
    if (this.constructor === t.constructor && zs(t.origin, this.lastId) && this.right === t && zs(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return n && n.forEach((s) => {
        s.p === t && (s.p = this, !this.deleted && this.countable && (s.index -= this.length));
      }), t.keep && (this.keep = !0), this.right = t.right, this.right !== null && (this.right.left = this), this.length += t.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(t) {
    if (!this.deleted) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), xs(t.deleteSet, this.id.client, this.id.clock, this.length), mc(t, n, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, n) {
    if (!this.deleted)
      throw Vt();
    this.content.gc(t), n ? Um(t, this, new ee(this.id, this.length)) : this.content = new Ts(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(t, n) {
    const s = n > 0 ? W(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, r = this.parentSub, o = this.content.getRef() & Ki | (s === null ? 0 : Lt) | // origin is defined
    (i === null ? 0 : Ue) | // right origin is defined
    (r === null ? 0 : vs);
    if (t.writeInfo(o), s !== null && t.writeLeftID(s), i !== null && t.writeRightID(i), s === null && i === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const c = l._item;
        if (c === null) {
          const a = Ss(l);
          t.writeParentInfo(!0), t.writeString(a);
        } else
          t.writeParentInfo(!1), t.writeLeftID(c.id);
      } else l.constructor === String ? (t.writeParentInfo(!0), t.writeString(l)) : l.constructor === $n ? (t.writeParentInfo(!1), t.writeLeftID(l)) : Vt();
      r !== null && t.writeString(r);
    }
    this.content.write(t, n);
  }
}
const Ju = (e, t) => $w[t & Ki](e), $w = [
  () => {
    Vt();
  },
  // GC is not ItemContent
  vw,
  // 1
  Sw,
  // 2
  yw,
  // 3
  Aw,
  // 4
  kw,
  // 5
  xw,
  // 6
  Pw,
  // 7
  Ew,
  // 8
  _w,
  // 9
  () => {
    Vt();
  }
  // 10 - Skip is not ItemContent
], Bw = 10;
class re extends Ho {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    Vt();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(Bw), Z(t.restEncoder, this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    return null;
  }
}
const Yu = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Gu = "__ $YJS$ __";
Yu[Gu] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Yu[Gu] = !0;
const Fw = () => {
  let e = !0;
  return (t, n) => {
    if (e) {
      e = !1;
      try {
        t();
      } finally {
        e = !0;
      }
    } else n !== void 0 && n();
  };
}, Hw = /[\uD800-\uDBFF]/, Uw = /[\uDC00-\uDFFF]/, Vw = (e, t) => {
  let n = 0, s = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    n++;
  for (n > 0 && Hw.test(e[n - 1]) && n--; s + n < e.length && s + n < t.length && e[e.length - s - 1] === t[t.length - s - 1]; )
    s++;
  return s > 0 && Uw.test(e[e.length - s]) && s--, {
    index: n,
    remove: e.length - n - s,
    insert: t.slice(n, t.length - s)
  };
}, jw = Vw, Ae = (e, t) => e >>> t | e << 32 - t, zw = (e) => Ae(e, 2) ^ Ae(e, 13) ^ Ae(e, 22), Ww = (e) => Ae(e, 6) ^ Ae(e, 11) ^ Ae(e, 25), Kw = (e) => Ae(e, 7) ^ Ae(e, 18) ^ e >>> 3, qw = (e) => Ae(e, 17) ^ Ae(e, 19) ^ e >>> 10, Jw = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Yw = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class Gw {
  constructor() {
    const t = new ArrayBuffer(320);
    this._H = new Uint32Array(t, 0, 8), this._H.set(Yw), this._W = new Uint32Array(t, 64, 64);
  }
  _updateHash() {
    const t = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = qw(n[d - 2]) + n[d - 7] + Kw(n[d - 15]) + n[d - 16];
    let s = t[0], i = t[1], r = t[2], o = t[3], l = t[4], c = t[5], a = t[6], u = t[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + Ww(l) + (l & c ^ ~l & a) + Jw[d] + n[d] >>> 0, h = zw(s) + (s & i ^ s & r ^ i & r) >>> 0, u = a, a = c, c = l, l = o + f >>> 0, o = r, r = i, i = s, s = f + h >>> 0;
    t[0] += s, t[1] += i, t[2] += r, t[3] += o, t[4] += l, t[5] += c, t[6] += a, t[7] += u;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(t) {
    let n = 0;
    for (; n + 56 <= t.length; ) {
      let o = 0;
      for (; o < 16 && n + 3 < t.length; o++)
        this._W[o] = t[n++] << 24 | t[n++] << 16 | t[n++] << 8 | t[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, o, 16); n < t.length; )
          this._W[o] |= t[n] << (3 - n % 4) * 8, n++;
        this._W[o] |= Lt << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const s = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < t.length; i++)
      for (let o = 3; o >= 0 && n < t.length; o--)
        this._W[i] |= t[n++] << o * 8;
    s || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Lt << (3 - n % 4) * 8), this._W[14] = t.byteLength / cg, this._W[15] = t.byteLength * 8, this._updateHash();
    const r = new Uint8Array(32);
    for (let o = 0; o < this._H.length; o++)
      for (let l = 0; l < 4; l++)
        r[o * 4 + l] = this._H[o] >>> (3 - l) * 8;
    return r;
  }
}
const Xw = (e) => new Gw().digest(e), dt = new se("y-sync"), Ve = new se("y-undo");
new se("yjs-cursor");
const Qw = (e) => {
  for (let n = 6; n < e.length; n++)
    e[n % 6] = e[n % 6] ^ e[n];
  return e.slice(0, 6);
}, Zw = (e) => om(Qw(Xw(lm(e)))), Di = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && /** @type {number} */
t.sv.get(e.id.client) > e.id.clock && !Qn(t.ds, e.id), t0 = [{ light: "#ecd44433", dark: "#ecd444" }], e0 = (e, t, n) => {
  if (!e.has(n)) {
    if (e.size < t.length) {
      const s = kn();
      e.forEach((i) => s.add(i)), t = t.filter((i) => !s.has(i));
    }
    e.set(n, Ug(t));
  }
  return (
    /** @type {ColorDef} */
    e.get(n)
  );
}, n0 = (e, {
  colors: t = t0,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: s = null,
  onFirstRender: i = () => {
  },
  mapping: r
} = {}) => {
  let o = !1;
  const l = new r0(e, r), c = new En({
    props: {
      editable: (a) => {
        const u = dt.getState(a);
        return u.snapshot == null && u.prevSnapshot == null;
      }
    },
    key: dt,
    state: {
      /**
       * @returns {any}
       */
      init: (a, u) => ({
        type: e,
        doc: e.doc,
        binding: l,
        snapshot: null,
        prevSnapshot: null,
        isChangeOrigin: !1,
        isUndoRedoOperation: !1,
        addToHistory: !0,
        colors: t,
        colorMapping: n,
        permanentUserData: s
      }),
      apply: (a, u) => {
        const d = a.getMeta(dt);
        if (d !== void 0) {
          u = Object.assign({}, u);
          for (const f in d)
            u[f] = d[f];
        }
        return u.addToHistory = a.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, l.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && du(0, () => {
          l.prosemirrorView != null && (d.restore == null ? l._renderSnapshot(
            d.snapshot,
            d.prevSnapshot,
            u
          ) : (l._renderSnapshot(
            d.snapshot,
            d.snapshot,
            u
          ), delete u.restore, delete u.snapshot, delete u.prevSnapshot, l.mux(() => {
            l._prosemirrorChanged(
              l.prosemirrorView.state.doc
            );
          })));
        }), u;
      }
    },
    view: (a) => (l.initView(a), r == null && l._forceRerender(), i(), {
      update: () => {
        const u = c.getState(a.state);
        if (u.snapshot == null && u.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (o || a.state.doc.content.findDiffStart(
          a.state.doc.type.createAndFill().content
        ) !== null)) {
          if (o = !0, u.addToHistory === !1 && !u.isChangeOrigin) {
            const d = Ve.getState(a.state), f = d && d.undoManager;
            f && f.stopCapturing();
          }
          l.mux(() => {
            u.doc.transact((d) => {
              d.meta.set("addToHistory", u.addToHistory), l._prosemirrorChanged(a.state.doc);
            }, dt);
          });
        }
      },
      destroy: () => {
        l.destroy();
      }
    })
  });
  return c;
}, s0 = (e, t, n) => {
  if (t !== null && t.anchor !== null && t.head !== null)
    if (t.type === "all")
      e.setSelection(new Vd(e.doc));
    else if (t.type === "node") {
      const s = ci(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      );
      e.setSelection(i0(e, s));
    } else {
      const s = ci(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      ), i = ci(
        n.doc,
        n.type,
        t.head,
        n.mapping
      );
      s !== null && i !== null && e.setSelection(Ce.between(e.doc.resolve(s), e.doc.resolve(i)));
    }
}, i0 = (e, t) => {
  const n = e.doc.resolve(t);
  return n.nodeAfter ? fo.create(e.doc, t) : Ce.near(n);
}, Zr = (e, t) => ({
  type: (
    /** @type {any} */
    t.selection.jsonID
  ),
  anchor: so(
    t.selection.anchor,
    e.type,
    e.mapping
  ),
  head: so(
    t.selection.head,
    e.type,
    e.mapping
  )
});
class r0 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(t, n = /* @__PURE__ */ new Map()) {
    this.type = t, this.prosemirrorView = null, this.mux = Fw(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = t.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Zr(
        this,
        this.prosemirrorView.state
      ));
    }, this.afterAllTransactions = () => {
      this.beforeTransactionSelection = null;
    }, this._domSelectionInView = null;
  }
  /**
   * Create a transaction for changing the prosemirror state.
   *
   * @returns
   */
  get _tr() {
    return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
  }
  _isLocalCursorInView() {
    return this.prosemirrorView.hasFocus() ? (au && this._domSelectionInView === null && (du(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const t = this.prosemirrorView._root.getSelection();
    if (t == null || t.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), r = am.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || r.clientWidth || 0) && i.top <= (window.innerHeight || r.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(t, n) {
    n || (n = xu(yu(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(dt, { snapshot: t, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const t = this.type.toArray().map(
        (s) => li(
          /** @type {Y.XmlElement} */
          s,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((s) => s !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Be(wn.from(t), 0, 0)
      );
      n.setMeta(dt, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const t = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => li(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Be(wn.from(n), 0, 0)
      );
      if (t) {
        const i = jn(rn(t.anchor, 0), s.doc.content.size), r = jn(rn(t.head, 0), s.doc.content.size);
        s.setSelection(Ce.create(s.doc, i, r));
      }
      this.prosemirrorView.dispatch(
        s.setMeta(dt, { isChangeOrigin: !0, binding: this })
      );
    });
  }
  /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */
  _renderSnapshot(t, n, s) {
    let i = this.doc, r = this.type;
    if (t || (t = xr(this.doc)), t instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) && Vt(), i = new An({ gc: !1 }), Jr(i, n), n = xr(i), Jr(i, t), t = xr(i), r._item === null) {
        const o = Array.from(this.doc.share.keys()).find(
          (l) => this.doc.share.get(l) === this.type
        );
        r = i.getXmlFragment(o);
      } else {
        const o = i.store.clients.get(r._item.id.client) ?? [], l = he(
          o,
          r._item.id.clock
        );
        r = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        o[l].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      i.transact((o) => {
        const l = s.permanentUserData;
        l && l.dss.forEach((d) => {
          ln(o, d, (f) => {
          });
        });
        const c = (d, f) => {
          const h = d === "added" ? l.getUserByClientId(f.client) : l.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: e0(
              s.colorMapping,
              s.colors,
              h
            )
          };
        }, a = Nu(
          r,
          new Po(n.ds, t.sv)
        ).map((d) => !d._item.deleted || Di(d._item, t) || Di(d._item, n) ? li(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          t,
          n,
          c
        ) : null).filter((d) => d !== null), u = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Be(wn.from(a), 0, 0)
        );
        this.prosemirrorView.dispatch(
          u.setMeta(dt, { isChangeOrigin: !0 })
        );
      }, dt);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(t, n) {
    if (this.prosemirrorView == null) return;
    const s = dt.getState(this.prosemirrorView.state);
    if (t.length === 0 || s.snapshot != null || s.prevSnapshot != null) {
      this.renderSnapshot(s.snapshot, s.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (l, c) => this.mapping.delete(c);
      ln(
        n,
        n.deleteSet,
        (l) => {
          if (l.constructor === nt) {
            const c = (
              /** @type {Y.ContentType} */
              /** @type {Y.Item} */
              l.content.type
            );
            c && this.mapping.delete(c);
          }
        }
      ), n.changed.forEach(i), n.changedParentTypes.forEach(i);
      const r = this.type.toArray().map(
        (l) => Xu(
          /** @type {Y.XmlElement | Y.XmlHook} */
          l,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((l) => l !== null);
      let o = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Be(wn.from(r), 0, 0)
      );
      s0(o, this.beforeTransactionSelection, this), o = o.setMeta(dt, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Tu }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && o.scrollIntoView(), this.prosemirrorView.dispatch(o);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(t) {
    this.doc.transact(() => {
      eo(this.doc, this.type, t, this), this.beforeTransactionSelection = Zr(
        this,
        this.prosemirrorView.state
      );
    }, dt);
  }
  /**
   * View is ready to listen to changes. Register observers.
   * @param {any} prosemirrorView
   */
  initView(t) {
    this.prosemirrorView != null && this.destroy(), this.prosemirrorView = t, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
  }
  destroy() {
    this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
  }
}
const Xu = (e, t, n, s, i, r) => {
  const o = (
    /** @type {PModel.Node} */
    n.mapping.get(e)
  );
  if (o === void 0) {
    if (e instanceof Ct)
      return li(
        e,
        t,
        n,
        s,
        i,
        r
      );
    throw ae();
  }
  return o;
}, li = (e, t, n, s, i, r) => {
  const o = [], l = (c) => {
    if (c instanceof Ct) {
      const a = Xu(
        c,
        t,
        n,
        s,
        i,
        r
      );
      a !== null && o.push(a);
    } else {
      const a = (
        /** @type {Y.ContentType} */
        c._item.right?.content?.type
      );
      a instanceof cn && !a._item.deleted && a._item.id.client === a.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...a.toDelta()
      ]), a.doc.transact((d) => {
        a._item.delete(d);
      }));
      const u = o0(
        c,
        t,
        n,
        s,
        i,
        r
      );
      u !== null && u.forEach((d) => {
        d !== null && o.push(d);
      });
    }
  };
  s === void 0 || i === void 0 ? e.toArray().forEach(l) : Nu(e, new Po(i.ds, s.sv)).forEach(l);
  try {
    const c = e.getAttributes(s);
    s !== void 0 && (Di(
      /** @type {Y.Item} */
      e._item,
      s
    ) ? Di(
      /** @type {Y.Item} */
      e._item,
      i
    ) || (c.ychange = r ? r(
      "added",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "added" }) : c.ychange = r ? r(
      "removed",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "removed" });
    const a = t.node(e.nodeName, c, o);
    return n.mapping.set(e, a), a;
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, dt), n.mapping.delete(e), null;
  }
}, o0 = (e, t, n, s, i, r) => {
  const o = [], l = e.toDelta(s, i, r);
  try {
    for (let c = 0; c < l.length; c++) {
      const a = l[c];
      o.push(t.text(a.insert, f0(a.attributes, t)));
    }
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, dt), null;
  }
  return o;
}, l0 = (e, t) => {
  const n = new Ut(), s = e.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: Zu(i.marks, t)
  }));
  return n.applyDelta(s), t.mapping.set(n, e), n;
}, c0 = (e, t) => {
  const n = new Ct(e.type.name);
  for (const s in e.attrs) {
    const i = e.attrs[s];
    i !== null && s !== "ychange" && n.setAttribute(s, i);
  }
  return n.insert(
    0,
    tr(e).map(
      (s) => to(s, t)
    )
  ), t.mapping.set(n, e), n;
}, to = (e, t) => e instanceof Array ? l0(e, t) : c0(e, t), Cc = (e) => typeof e == "object" && e !== null, Vo = (e, t) => {
  const n = Object.keys(e).filter((i) => e[i] !== null);
  let s = n.length === Object.keys(t).filter((i) => t[i] !== null).length;
  for (let i = 0; i < n.length && s; i++) {
    const r = n[i], o = e[r], l = t[r];
    s = r === "ychange" || o === l || Cc(o) && Cc(l) && Vo(o, l);
  }
  return s;
}, tr = (e) => {
  const t = e.content.content, n = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    if (i.isText) {
      const r = [];
      for (let o = t[s]; s < t.length && o.isText; o = t[++s])
        r.push(o);
      s--, n.push(r);
    } else
      n.push(i);
  }
  return n;
}, Qu = (e, t) => {
  const n = e.toDelta();
  return n.length === t.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (s, i) => s.insert === /** @type {any} */
    t[i].text && ou(s.attributes || {}).length === t[i].marks.length && lu(s.attributes, (r, o) => {
      const l = jo(o), c = t[i].marks;
      return c.find(
        /** @param {any} mark */
        (u) => u.type.name === l
      ) ? Vo(r, c.find(
        /** @param {any} mark */
        (u) => u.type.name === l
      )?.attrs) : !1;
    })
  );
}, Ms = (e, t) => {
  if (e instanceof Ct && !(t instanceof Array) && no(e, t)) {
    const n = tr(t);
    return e._length === n.length && Vo(e.getAttributes(), t.attrs) && e.toArray().every(
      (s, i) => Ms(s, n[i])
    );
  }
  return e instanceof Ut && t instanceof Array && Qu(e, t);
}, Oi = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every(
  (n, s) => t[s] === n
), Ec = (e, t, n) => {
  const s = e.toArray(), i = tr(t), r = i.length, o = s.length, l = jn(o, r);
  let c = 0, a = 0, u = !1;
  for (; c < l; c++) {
    const d = s[c], f = i[c];
    if (Oi(n.mapping.get(d), f))
      u = !0;
    else if (!Ms(d, f))
      break;
  }
  for (; c + a < l; a++) {
    const d = s[o - a - 1], f = i[r - a - 1];
    if (Oi(n.mapping.get(d), f))
      u = !0;
    else if (!Ms(d, f))
      break;
  }
  return {
    equalityFactor: c + a,
    foundMappedChild: u
  };
}, a0 = (e) => {
  let t = "", n = e._start;
  const s = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof pe ? t += n.content.str : n.content instanceof bt && (s[n.content.key] = null)), n = n.right;
  return {
    str: t,
    nAttrs: s
  };
}, u0 = (e, t, n) => {
  n.mapping.set(e, t);
  const { nAttrs: s, str: i } = a0(e), r = t.map((a) => ({
    insert: (
      /** @type {any} */
      a.text
    ),
    attributes: Object.assign({}, s, Zu(a.marks, n))
  })), { insert: o, remove: l, index: c } = jw(
    i,
    r.map((a) => a.insert).join("")
  );
  e.delete(c, l), e.insert(c, o), e.applyDelta(
    r.map((a) => ({ retain: a.insert.length, attributes: a.attributes }))
  );
}, d0 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, jo = (e) => d0.exec(e)?.[1] ?? e, f0 = (e, t) => {
  const n = [];
  for (const s in e)
    n.push(t.mark(jo(s), e[s]));
  return n;
}, Zu = (e, t) => {
  const n = {};
  return e.forEach((s) => {
    if (s.type.name !== "ychange") {
      const i = Je(t.isOMark, s.type, () => !s.type.excludes(s.type));
      n[i ? `${s.type.name}--${Zw(s.toJSON())}` : s.type.name] = s.attrs;
    }
  }), n;
}, eo = (e, t, n, s) => {
  if (t instanceof Ct && t.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (s.mapping.set(t, n), t instanceof Ct) {
    const d = t.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && t.setAttribute(h, f[h]) : t.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && t.removeAttribute(h);
  }
  const i = tr(n), r = i.length, o = t.toArray(), l = o.length, c = jn(r, l);
  let a = 0, u = 0;
  for (; a < c; a++) {
    const d = o[a], f = i[a];
    if (!Oi(s.mapping.get(d), f))
      if (Ms(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  for (; u + a + 1 < c; u++) {
    const d = o[l - u - 1], f = i[r - u - 1];
    if (!Oi(s.mapping.get(d), f))
      if (Ms(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  e.transact(() => {
    for (; l - a - u > 0 && r - a - u > 0; ) {
      const f = o[a], h = i[a], p = o[l - u - 1], m = i[r - u - 1];
      if (f instanceof Ut && h instanceof Array)
        Qu(f, h) || u0(f, h, s), a += 1;
      else {
        let y = f instanceof Ct && no(f, h), b = p instanceof Ct && no(p, m);
        if (y && b) {
          const M = Ec(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            s
          ), N = Ec(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            m,
            s
          );
          M.foundMappedChild && !N.foundMappedChild ? b = !1 : !M.foundMappedChild && N.foundMappedChild || M.equalityFactor < N.equalityFactor ? y = !1 : b = !1;
        }
        y ? (eo(
          e,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          s
        ), a += 1) : b ? (eo(
          e,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          m,
          s
        ), u += 1) : (s.mapping.delete(t.get(a)), t.delete(a, 1), t.insert(a, [
          to(h, s)
        ]), a += 1);
      }
    }
    const d = l - a - u;
    if (l === 1 && r === 0 && o[0] instanceof Ut ? (s.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : d > 0 && (t.slice(a, a + d).forEach((f) => s.mapping.delete(f)), t.delete(a, d)), a + u < r) {
      const f = [];
      for (let h = a; h < r - u; h++)
        f.push(to(i[h], s));
      t.insert(a, f);
    }
  }, dt);
}, no = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, so = (e, t, n) => {
  if (e === 0)
    return kr(t, 0, -1);
  let s = t._first === null ? null : (
    /** @type {Y.ContentType} */
    t._first.content.type
  );
  for (; s !== null && t !== s; ) {
    if (s instanceof Ut) {
      if (s._length >= e)
        return kr(s, e, -1);
      if (e -= s._length, s._item !== null && s._item.next !== null)
        s = /** @type {Y.ContentType} */
        s._item.next.content.type;
      else {
        do
          s = s._item === null ? null : s._item.parent, e--;
        while (s !== t && s !== null && s._item !== null && s._item.next === null);
        s !== null && s !== t && (s = s._item === null ? null : (
          /** @type {Y.ContentType} */
          /** @type Y.Item */
          s._item.next.content.type
        ));
      }
    } else {
      const i = (
        /** @type {any} */
        (n.get(s) || { nodeSize: 0 }).nodeSize
      );
      if (s._first !== null && e < i)
        s = /** @type {Y.ContentType} */
        s._first.content.type, e--;
      else {
        if (e === 1 && s._length === 0 && i > 1)
          return new Si(s._item === null ? null : s._item.id, s._item === null ? Ss(s) : null, null);
        if (e -= i, s._item !== null && s._item.next !== null)
          s = /** @type {Y.ContentType} */
          s._item.next.content.type;
        else {
          if (e === 0)
            return s = s._item === null ? s : s._item.parent, new Si(s._item === null ? null : s._item.id, s._item === null ? Ss(s) : null, null);
          do
            s = /** @type {Y.Item} */
            s._item.parent, e--;
          while (s !== t && /** @type {Y.Item} */
          s._item.next === null);
          s !== t && (s = /** @type {Y.ContentType} */
          /** @type {Y.Item} */
          /** @type {Y.Item} */
          s._item.next.content.type);
        }
      }
    }
    if (s === null)
      throw Vt();
    if (e === 0 && s.constructor !== Ut && s !== t)
      return h0(s._item.parent, s._item);
  }
  return kr(t, t._length, -1);
}, h0 = (e, t) => {
  let n = null, s = null;
  return e._item === null ? s = Ss(e) : n = W(e._item.id.client, e._item.id.clock), new Si(n, s, t.id);
}, ci = (e, t, n, s) => {
  const i = Fm(n, e);
  if (i === null || i.type !== t && !Cs(t, i.type._item))
    return null;
  let r = i.type, o = 0;
  if (r.constructor === Ut)
    o = i.index;
  else if (r._item === null || !r._item.deleted) {
    let l = r._first, c = 0;
    for (; c < r._length && c < i.index && l !== null; ) {
      if (!l.deleted) {
        const a = (
          /** @type {Y.ContentType} */
          l.content.type
        );
        c++, a instanceof Ut ? o += a._length : o += /** @type {any} */
        s.get(a).nodeSize;
      }
      l = /** @type {Y.Item} */
      l.right;
    }
    o += 1;
  }
  for (; r !== t && r._item !== null; ) {
    const l = r._item.parent;
    if (l._item === null || !l._item.deleted) {
      o += 1;
      let c = (
        /** @type {Y.AbstractType} */
        l._first
      );
      for (; c !== null; ) {
        const a = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (a === r)
          break;
        c.deleted || (a instanceof Ut ? o += a._length : o += /** @type {any} */
        s.get(a).nodeSize), c = c.right;
      }
    }
    r = /** @type {Y.AbstractType} */
    l;
  }
  return o - 1;
};
function p0(e) {
  const t = e.toArray(), n = (s) => {
    let i;
    if (s instanceof Ut)
      i = s.toDelta().map(
        /** @param {any} d */
        (o) => {
          const l = {
            type: "text",
            text: o.insert
          };
          return o.attributes && (l.marks = Object.keys(o.attributes).map((c) => {
            const a = o.attributes[c], d = {
              type: jo(c)
            };
            return Object.keys(a) && (d.attrs = a), d;
          })), l;
        }
      );
    else if (s instanceof Ct) {
      i = {
        type: s.nodeName
      };
      const r = s.getAttributes();
      Object.keys(r).length && (i.attrs = r);
      const o = s.toArray();
      o.length && (i.content = o.map(n).flat());
    } else
      Vt();
    return i;
  };
  return {
    type: "doc",
    content: t.map(n)
  };
}
const g0 = (e) => {
  const t = Ve.getState(e).undoManager;
  if (t != null)
    return t.undo(), !0;
}, m0 = (e) => {
  const t = Ve.getState(e).undoManager;
  if (t != null)
    return t.redo(), !0;
}, w0 = /* @__PURE__ */ new Set(["paragraph"]), b0 = (e, t) => !(e instanceof nt) || !(e.content instanceof ge) || !(e.content.type instanceof cn || e.content.type instanceof Ct && t.has(e.content.type.nodeName)) || e.content.type._length === 0, y0 = ({ protectedNodes: e = w0, trackedOrigins: t = [], undoManager: n = null } = {}) => new En({
  key: Ve,
  state: {
    init: (s, i) => {
      const r = dt.getState(i), o = n || new Tu(r.type, {
        trackedOrigins: new Set([dt].concat(t)),
        deleteFilter: (l) => b0(l, e),
        captureTransaction: (l) => l.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: o,
        prevSel: null,
        hasUndoOps: o.undoStack.length > 0,
        hasRedoOps: o.redoStack.length > 0
      };
    },
    /**
     * @returns {any}
     */
    apply: (s, i, r, o) => {
      const l = dt.getState(o).binding, c = i.undoManager, a = c.undoStack.length > 0, u = c.redoStack.length > 0;
      return l ? {
        undoManager: c,
        prevSel: Zr(l, r),
        hasUndoOps: a,
        hasRedoOps: u
      } : a !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (s) => {
    const i = dt.getState(s.state), r = Ve.getState(s.state).undoManager;
    return r.on("stack-item-added", ({ stackItem: o }) => {
      const l = i.binding;
      l && o.meta.set(l, Ve.getState(s.state).prevSel);
    }), r.on("stack-item-popped", ({ stackItem: o }) => {
      const l = i.binding;
      l && (l.beforeTransactionSelection = o.meta.get(l) || l.beforeTransactionSelection);
    }), {
      destroy: () => {
        r.destroy();
      }
    };
  }
});
Os.create({
  name: "collaboration",
  priority: 1e3,
  addOptions() {
    return {
      document: null,
      field: "default",
      fragment: null,
      provider: null
    };
  },
  addStorage() {
    return {
      isDisabled: !1
    };
  },
  onCreate() {
    this.editor.extensionManager.extensions.find((e) => e.name === "undoRedo") && console.warn(
      '[tiptap warn]: "@tiptap/extension-collaboration" comes with its own history support and is not compatible with "@tiptap/extension-undo-redo".'
    );
  },
  addCommands() {
    return {
      undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Ve.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? g0(t) : !0),
      redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Ve.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? m0(t) : !0)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo()
    };
  },
  addProseMirrorPlugins() {
    var e;
    const t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = y0(this.options.yUndoOptions), s = n.spec.view;
    n.spec.view = (o) => {
      const { undoManager: l } = Ve.getState(o.state);
      l.restore && (l.restore(), l.restore = () => {
      });
      const c = s ? s(o) : void 0;
      return {
        destroy: () => {
          const a = l.trackedOrigins.has(l), u = l._observers;
          l.restore = () => {
            a && l.trackedOrigins.add(l), l.doc.on("afterTransaction", l.afterTransactionHandler), l._observers = u;
          }, c?.destroy && c.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    }, r = n0(t, i);
    return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
      try {
        const o = p0(t);
        if (o.content.length === 0)
          return;
        this.editor.schema.nodeFromJSON(o).check();
      } catch (o) {
        return this.editor.emit("contentError", {
          error: o,
          editor: this.editor,
          disableCollaboration: () => {
            var l;
            (l = t.doc) == null || l.destroy(), this.storage.isDisabled = !0;
          }
        }), !1;
      }
    })), [
      r,
      n,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new En({
        key: new se("filterInvalidContent"),
        filterTransaction: () => {
          var o;
          return this.storage.isDisabled !== !1 && ((o = t.doc) == null || o.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function v0(e) {
  return !!e.getMeta(dt);
}
function Ac(e) {
  if (!e.length)
    return ol.empty;
  const t = [], n = e[0].$from.node(0);
  return e.forEach((s) => {
    const i = s.$from.pos, r = s.$from.nodeAfter;
    r && t.push(
      jd.node(i, i + r.nodeSize, {
        class: "ProseMirror-selectednoderange"
      })
    );
  }), ol.create(n, t);
}
function er(e, t, n) {
  const s = [], i = e.node(0);
  typeof n == "number" && n >= 0 || (e.sameParent(t) ? n = Math.max(0, e.sharedDepth(t.pos) - 1) : n = e.sharedDepth(t.pos));
  const r = new zd(e, t, n), o = r.depth === 0 ? 0 : i.resolve(r.start).posAtIndex(0);
  return r.parent.forEach((l, c) => {
    const a = o + c, u = a + l.nodeSize;
    if (a < r.start || a >= r.end)
      return;
    const d = new Qc(i.resolve(a), i.resolve(u));
    s.push(d);
  }), s;
}
var _0 = class td {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new td(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return new nn(n, s);
  }
}, nn = class Xe extends ie {
  constructor(t, n, s, i = 1) {
    const { doc: r } = t, o = t === n, l = t.pos === r.content.size && n.pos === r.content.size, c = o && !l ? r.resolve(n.pos + (i > 0 ? 1 : -1)) : n, a = o && l ? r.resolve(t.pos - (i > 0 ? 1 : -1)) : t, u = er(a.min(c), a.max(c), s), d = c.pos >= t.pos ? u[0].$from : u[u.length - 1].$to, f = c.pos >= t.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = s;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof Xe && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.anchor)), i = t.resolve(n.map(this.head));
    return new Xe(s, i);
  }
  toJSON() {
    return {
      type: "nodeRange",
      anchor: this.anchor,
      head: this.head
    };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: t } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const i = this.ranges.slice(0, -1), r = i[0].$from, o = i[i.length - 1].$to;
      return new Xe(r, o, this.depth);
    }
    const n = this.ranges[0], s = t.resolve(Math.max(0, n.$from.pos - 1));
    return new Xe(this.$anchor, s, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), r = i[0].$from, o = i[i.length - 1].$to;
      return new Xe(o, r, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], s = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
    return new Xe(this.$anchor, s, this.depth);
  }
  static fromJSON(t, n) {
    return new Xe(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, s, i, r = 1) {
    return new this(t.resolve(n), t.resolve(s), i, r);
  }
  getBookmark() {
    return new _0(this.anchor, this.head);
  }
};
nn.prototype.visible = !1;
function Js(e) {
  return e instanceof nn;
}
Os.create({
  name: "nodeRange",
  addOptions() {
    return {
      depth: void 0,
      key: "Mod"
    };
  },
  addKeyboardShortcuts() {
    return {
      // extend NodeRangeSelection upwards
      "Shift-ArrowUp": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: r, tr: o } = s, { anchor: l, head: c } = r;
        if (!Js(r)) {
          const u = nn.create(i, l, c, t, -1);
          return o.setSelection(u), n.dispatch(o), !0;
        }
        const a = r.extendBackwards();
        return o.setSelection(a), n.dispatch(o), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: r, tr: o } = s, { anchor: l, head: c } = r;
        if (!Js(r)) {
          const u = nn.create(i, l, c, t);
          return o.setSelection(u), n.dispatch(o), !0;
        }
        const a = r.extendForwards();
        return o.setSelection(a), n.dispatch(o), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, tr: r } = s, o = nn.create(i, 0, i.content.size, t);
        return r.setSelection(o), n.dispatch(r), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: e } = this.editor.state;
    Js(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let e = !1, t = !1;
    return [
      new En({
        key: new se("nodeRange"),
        props: {
          attributes: () => e ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, s) => {
              const { key: i } = this.options, r = /Mac/.test(navigator.platform), o = !!s.shiftKey, l = !!s.ctrlKey, c = !!s.altKey, a = !!s.metaKey, u = r ? a : l;
              return (i == null || i === "Shift" && o || i === "Control" && l || i === "Alt" && c || i === "Meta" && a || i === "Mod" && u) && (t = !0), t && document.addEventListener(
                "mouseup",
                () => {
                  t = !1;
                  const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: m, $head: y } = h;
                  if (m.sameParent(y))
                    return;
                  const b = nn.create(f, m.pos, y.pos, this.options.depth);
                  p.setSelection(b), n.dispatch(p);
                },
                { once: !0 }
              ), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: s } = n, i = Js(s);
            if (e = !1, !t)
              return i ? (e = !0, Ac(s.ranges)) : null;
            const { $from: r, $to: o } = s;
            if (!i && r.sameParent(o))
              return null;
            const l = er(r, o, this.options.depth);
            return l.length ? (e = !0, Ac(l)) : null;
          }
        }
      })
    ];
  }
});
function k0(e) {
  let t = "";
  const n = getComputedStyle(e);
  for (let s = 0; s < n.length; s += 1)
    t += `${n[s]}:${n.getPropertyValue(n[s])};`;
  return t;
}
function x0(e) {
  const t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], s = [t, ...Array.from(t.getElementsByTagName("*"))];
  return n.forEach((i, r) => {
    s[r].style.cssText = k0(i);
  }), t;
}
function S0(e, t) {
  let n = e;
  for (; n?.parentElement && n.parentElement !== t.dom; )
    n = n.parentElement;
  return n?.parentElement === t.dom ? n : void 0;
}
function C0(e, t, n, s = 5) {
  const i = e.dom, r = i.firstElementChild, o = i.lastElementChild;
  if (!r || !o)
    return { x: t, y: n };
  const l = r.getBoundingClientRect(), c = o.getBoundingClientRect(), a = Math.min(Math.max(l.top + s, n), c.bottom - s), u = 0.5, d = Math.abs(l.left - c.left) < u, f = Math.abs(l.right - c.right) < u;
  let h = l;
  return d && f && (h = l), { x: Math.min(Math.max(h.left + s, t), h.right - s), y: a };
}
var ed = (e) => {
  const { x: t, y: n, editor: s } = e, { view: i, state: r } = s, { x: o, y: l } = C0(i, t, n, 5), c = i.root.elementsFromPoint(o, l);
  let a;
  if (Array.prototype.some.call(c, (f) => {
    if (!i.dom.contains(f))
      return !1;
    const h = S0(f, i);
    return h ? (a = h, !0) : !1;
  }), !a)
    return { resultElement: null, resultNode: null, pos: null };
  let u;
  try {
    u = i.posAtDOM(a, 0);
  } catch {
    return { resultElement: null, resultNode: null, pos: null };
  }
  const d = r.doc.nodeAt(u);
  return {
    resultElement: a,
    resultNode: d,
    pos: u
  };
};
function Ys(e, t) {
  return window.getComputedStyle(e)[t];
}
function E0(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function A0(e, t, n) {
  const s = parseInt(Ys(e.dom, "paddingLeft"), 10), i = parseInt(Ys(e.dom, "paddingRight"), 10), r = parseInt(Ys(e.dom, "borderLeftWidth"), 10), o = parseInt(Ys(e.dom, "borderLeftWidth"), 10), l = e.dom.getBoundingClientRect();
  return {
    left: E0(t, l.left + s + r, l.right - i - o),
    top: n
  };
}
function nd(e) {
  var t;
  (t = e.parentNode) == null || t.removeChild(e);
}
function T0(e, t) {
  const { doc: n } = t.view.state, s = ed({
    editor: t,
    x: e.clientX,
    y: e.clientY
  });
  if (!s.resultNode || s.pos === null)
    return [];
  const i = e.clientX, r = A0(t.view, i, e.clientY), o = t.view.posAtCoords(r);
  if (!o)
    return [];
  const { pos: l } = o;
  if (!n.resolve(l).parent)
    return [];
  const a = n.resolve(s.pos), u = n.resolve(s.pos + 1);
  return er(a, u, 0);
}
function M0(e, t) {
  const { view: n } = t;
  if (!e.dataTransfer)
    return;
  const { empty: s, $from: i, $to: r } = n.state.selection, o = T0(e, t), l = er(i, r, 0), c = l.some((y) => o.find((b) => b.$from === y.$from && b.$to === y.$to)), a = s || !c ? o : l;
  if (!a.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = a[0].$from.pos, h = a[a.length - 1].$to.pos, p = nn.create(n.state.doc, f, h), m = p.content();
  a.forEach((y) => {
    const b = n.nodeDOM(y.$from.pos), M = x0(b);
    d.append(M);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: m, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => nd(d), { once: !0 });
}
var Tc = (e, t) => {
  const n = e.resolve(t), { depth: s } = n;
  return s === 0 ? t : n.pos - n.parentOffset - 1;
}, Mc = (e, t) => {
  const n = e.nodeAt(t), s = e.resolve(t);
  let { depth: i } = s, r = n;
  for (; i > 0; ) {
    const o = s.node(i);
    i -= 1, i === 0 && (r = o);
  }
  return r;
}, Er = (e, t) => {
  const n = dt.getState(e);
  return n ? so(t, n.type, n.binding.mapping) : null;
}, D0 = (e, t) => {
  const n = dt.getState(e);
  return n ? ci(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, Dc = (e, t) => {
  let n = t;
  for (; n?.parentNode && n.parentNode !== e.dom; )
    n = n.parentNode;
  return n;
}, sd = new se("dragHandle"), id = ({
  pluginKey: e = sd,
  element: t,
  editor: n,
  computePositionConfig: s,
  getReferencedVirtualElement: i,
  onNodeChange: r,
  onElementDragStart: o,
  onElementDragEnd: l
}) => {
  const c = document.createElement("div");
  let a = !1, u = null, d = -1, f, h = null, p = null;
  function m() {
    t && (t.style.visibility = "hidden", t.style.pointerEvents = "none");
  }
  function y() {
    if (t) {
      if (!n.isEditable) {
        m();
        return;
      }
      t.style.visibility = "", t.style.pointerEvents = "auto";
    }
  }
  function b(A) {
    const P = i?.() || {
      getBoundingClientRect: () => A.getBoundingClientRect()
    };
    Qa(P, t, s).then((T) => {
      Object.assign(t.style, {
        position: T.strategy,
        left: `${T.x}px`,
        top: `${T.y}px`
      });
    });
  }
  function M(A) {
    o?.(A), M0(A, n), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }
  function N(A) {
    l?.(A), m(), t && (t.style.pointerEvents = "auto");
  }
  return t.addEventListener("dragstart", M), t.addEventListener("dragend", N), c.appendChild(t), {
    unbind() {
      t.removeEventListener("dragstart", M), t.removeEventListener("dragend", N), h && (cancelAnimationFrame(h), h = null, p = null);
    },
    plugin: new En({
      key: typeof e == "string" ? new se(e) : e,
      state: {
        init() {
          return { locked: !1 };
        },
        apply(A, P, T, B) {
          const E = A.getMeta("lockDragHandle"), I = A.getMeta("hideDragHandle");
          if (E !== void 0 && (a = E), I)
            return m(), a = !1, u = null, d = -1, r?.({ editor: n, node: null, pos: -1 }), P;
          if (A.docChanged && d !== -1 && t)
            if (v0(A)) {
              const _ = D0(B, f);
              _ !== d && (d = _);
            } else {
              const _ = A.mapping.map(d);
              _ !== d && (d = _, f = Er(B, d));
            }
          return P;
        }
      },
      view: (A) => {
        var P;
        return t.draggable = !0, t.style.pointerEvents = "auto", (P = n.view.dom.parentElement) == null || P.appendChild(c), c.style.pointerEvents = "none", c.style.position = "absolute", c.style.top = "0", c.style.left = "0", {
          update(T, B) {
            if (!t)
              return;
            if (!n.isEditable) {
              m();
              return;
            }
            if (a ? t.draggable = !1 : t.draggable = !0, A.state.doc.eq(B.doc) || d === -1)
              return;
            let E = A.nodeDOM(d);
            if (E = Dc(A, E), E === A.dom || E?.nodeType !== 1)
              return;
            const I = A.posAtDOM(E, 0), _ = Mc(n.state.doc, I), U = Tc(n.state.doc, I);
            u = _, d = U, f = Er(A.state, d), r?.({ editor: n, node: u, pos: d }), b(E);
          },
          // TODO: Kills even on hot reload
          destroy() {
            h && (cancelAnimationFrame(h), h = null, p = null), t && nd(c);
          }
        };
      },
      props: {
        handleDOMEvents: {
          keydown(A) {
            return !t || a || A.hasFocus() && (m(), u = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mouseleave(A, P) {
            return a || P.target && !c.contains(P.relatedTarget) && (m(), u = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mousemove(A, P) {
            return !t || a || (p = { x: P.clientX, y: P.clientY }, h) || (h = requestAnimationFrame(() => {
              if (h = null, !p)
                return;
              const { x: T, y: B } = p;
              p = null;
              const E = ed({
                x: T,
                y: B,
                editor: n
              });
              if (!E.resultElement)
                return;
              let I = E.resultElement;
              if (I = Dc(A, I), I === A.dom || I?.nodeType !== 1)
                return;
              const _ = A.posAtDOM(I, 0), U = Mc(n.state.doc, _);
              if (U !== u) {
                const O = Tc(n.state.doc, _);
                u = U, d = O, f = Er(A.state, d), r?.({ editor: n, node: u, pos: d }), b(I), y();
              }
            })), !1;
          }
        }
      }
    })
  };
}, rd = {
  placement: "left-start",
  strategy: "absolute"
};
Os.create({
  name: "dragHandle",
  addOptions() {
    return {
      render() {
        const e = document.createElement("div");
        return e.classList.add("drag-handle"), e;
      },
      computePositionConfig: {},
      locked: !1,
      onNodeChange: () => null,
      onElementDragStart: void 0,
      onElementDragEnd: void 0
    };
  },
  addCommands() {
    return {
      lockDragHandle: () => ({ editor: e }) => (this.options.locked = !0, e.commands.setMeta("lockDragHandle", this.options.locked)),
      unlockDragHandle: () => ({ editor: e }) => (this.options.locked = !1, e.commands.setMeta("lockDragHandle", this.options.locked)),
      toggleDragHandle: () => ({ editor: e }) => (this.options.locked = !this.options.locked, e.commands.setMeta("lockDragHandle", this.options.locked))
    };
  },
  addProseMirrorPlugins() {
    const e = this.options.render();
    return [
      id({
        computePositionConfig: { ...rd, ...this.options.computePositionConfig },
        getReferencedVirtualElement: this.options.getReferencedVirtualElement,
        element: e,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange,
        onElementDragStart: this.options.onElementDragStart,
        onElementDragEnd: this.options.onElementDragEnd
      }).plugin
    ];
  }
});
var O0 = /* @__PURE__ */ Gt({
  name: "DragHandleVue",
  props: {
    pluginKey: {
      type: [String, Object],
      default: sd
    },
    editor: {
      type: Object,
      required: !0
    },
    computePositionConfig: {
      type: Object,
      default: () => ({})
    },
    onNodeChange: {
      type: Function,
      default: null
    },
    onElementDragStart: {
      type: Function,
      default: null
    },
    onElementDragEnd: {
      type: Function,
      default: null
    },
    class: {
      type: String,
      default: "drag-handle"
    }
  },
  setup(e, { slots: t }) {
    const n = Q(null), s = Pd(null);
    return an(async () => {
      await Ht();
      const { editor: i, pluginKey: r, onNodeChange: o, onElementDragEnd: l, onElementDragStart: c, computePositionConfig: a } = e;
      if (!n.value || !e.editor || e.editor.isDestroyed)
        return;
      const u = id({
        editor: i,
        element: n.value,
        pluginKey: r,
        computePositionConfig: { ...rd, ...a },
        onNodeChange: o,
        onElementDragStart: c,
        onElementDragEnd: l
      });
      s.value = u, e.editor.registerPlugin(u.plugin);
    }), Is(() => {
      var i, r;
      s.value && (e.editor && !e.editor.isDestroyed && e.editor.unregisterPlugin(e.pluginKey), (r = (i = s.value).unbind) == null || r.call(i), s.value = null);
    }), () => {
      var i;
      return Ps(
        "div",
        {
          ref: n,
          class: e.class,
          style: { visibility: "hidden", position: "absolute" }
        },
        (i = t.default) == null ? void 0 : i.call(t)
      );
    };
  }
}), R0 = (e) => ht({
  find: /--$/,
  replace: e ?? "—"
}), I0 = (e) => ht({
  find: /\.\.\.$/,
  replace: e ?? "…"
}), N0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: e ?? "“"
}), L0 = (e) => ht({
  find: /"$/,
  replace: e ?? "”"
}), P0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: e ?? "‘"
}), $0 = (e) => ht({
  find: /'$/,
  replace: e ?? "’"
}), B0 = (e) => ht({
  find: /<-$/,
  replace: e ?? "←"
}), F0 = (e) => ht({
  find: /->$/,
  replace: e ?? "→"
}), H0 = (e) => ht({
  find: /\(c\)$/,
  replace: e ?? "©"
}), U0 = (e) => ht({
  find: /\(tm\)$/,
  replace: e ?? "™"
}), V0 = (e) => ht({
  find: /\(sm\)$/,
  replace: e ?? "℠"
}), j0 = (e) => ht({
  find: /\(r\)$/,
  replace: e ?? "®"
}), z0 = (e) => ht({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: e ?? "½"
}), W0 = (e) => ht({
  find: /\+\/-$/,
  replace: e ?? "±"
}), K0 = (e) => ht({
  find: /!=$/,
  replace: e ?? "≠"
}), q0 = (e) => ht({
  find: /<<$/,
  replace: e ?? "«"
}), J0 = (e) => ht({
  find: />>$/,
  replace: e ?? "»"
}), Y0 = (e) => ht({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: e ?? "×"
}), G0 = (e) => ht({
  find: /\^2$/,
  replace: e ?? "²"
}), X0 = (e) => ht({
  find: /\^3$/,
  replace: e ?? "³"
}), Q0 = (e) => ht({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: e ?? "¼"
}), Z0 = (e) => ht({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: e ?? "¾"
}), tb = Os.create({
  name: "typography",
  addOptions() {
    return {
      closeDoubleQuote: "”",
      closeSingleQuote: "’",
      copyright: "©",
      ellipsis: "…",
      emDash: "—",
      laquo: "«",
      leftArrow: "←",
      multiplication: "×",
      notEqual: "≠",
      oneHalf: "½",
      oneQuarter: "¼",
      openDoubleQuote: "“",
      openSingleQuote: "‘",
      plusMinus: "±",
      raquo: "»",
      registeredTrademark: "®",
      rightArrow: "→",
      servicemark: "℠",
      superscriptThree: "³",
      superscriptTwo: "²",
      threeQuarters: "¾",
      trademark: "™"
    };
  },
  addInputRules() {
    const e = [];
    return this.options.emDash !== !1 && e.push(R0(this.options.emDash)), this.options.ellipsis !== !1 && e.push(I0(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && e.push(N0(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(L0(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && e.push(P0(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push($0(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && e.push(B0(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(F0(this.options.rightArrow)), this.options.copyright !== !1 && e.push(H0(this.options.copyright)), this.options.trademark !== !1 && e.push(U0(this.options.trademark)), this.options.servicemark !== !1 && e.push(V0(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(j0(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(z0(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(W0(this.options.plusMinus)), this.options.notEqual !== !1 && e.push(K0(this.options.notEqual)), this.options.laquo !== !1 && e.push(q0(this.options.laquo)), this.options.raquo !== !1 && e.push(J0(this.options.raquo)), this.options.multiplication !== !1 && e.push(Y0(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(G0(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(X0(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(Q0(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(Z0(this.options.threeQuarters)), e;
  }
}), eb = tb, nb = /(^|[^`])`([^`]+)`(?!`)$/, sb = /(^|[^`])`([^`]+)`(?!`)/g, ib = Zc.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["code", qn(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (e, t) => t.applyMark("code", [{ type: "text", text: e.text || "" }]),
  renderMarkdown: (e, t) => e.content ? `\`${t.renderChildren(e.content)}\`` : "",
  addCommands() {
    return {
      setCode: () => ({ commands: e }) => e.setMark(this.name),
      toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      ea({
        find: nb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ta({
        find: sb,
        type: this.type
      })
    ];
  }
}), Ar = 4, rb = /^```([a-z]+)?[\s\n]$/, ob = /^~~~([a-z]+)?[\s\n]$/, lb = Jn.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: Ar,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (e) => {
          var t;
          const { languageClassPrefix: n } = this.options;
          if (!n)
            return null;
          const r = [...((t = e.firstElementChild) == null ? void 0 : t.classList) || []].filter((o) => o.startsWith(n)).map((o) => o.replace(n, ""))[0];
          return r || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [
      "pre",
      qn(this.options.HTMLAttributes, t),
      [
        "code",
        {
          class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
        },
        0
      ]
    ];
  },
  markdownTokenName: "code",
  parseMarkdown: (e, t) => {
    var n;
    return ((n = e.raw) == null ? void 0 : n.startsWith("```")) === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode(
      "codeBlock",
      { language: e.lang || null },
      e.text ? [t.createTextNode(e.text)] : []
    );
  },
  renderMarkdown: (e, t) => {
    var n;
    let s = "";
    const i = ((n = e.attrs) == null ? void 0 : n.language) || "";
    return e.content ? s = [`\`\`\`${i}`, t.renderChildren(e.content), "```"].join(`
`) : s = `\`\`\`${i}

\`\`\``, s;
  },
  addCommands() {
    return {
      setCodeBlock: (e) => ({ commands: t }) => t.setNode(this.name, e),
      toggleCodeBlock: (e) => ({ commands: t }) => t.toggleNode(this.name, "paragraph", e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
        return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // handle tab indentation
      Tab: ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : Ar, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        if (r.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return o ? e.commands.insertContent(l) : e.commands.command(({ tr: c }) => {
          const { from: a, to: u } = i, h = s.doc.textBetween(a, u, `
`, `
`).split(`
`).map((p) => l + p).join(`
`);
          return c.replaceWith(a, u, s.schema.text(h)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : Ar, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        return r.parent.type !== this.type ? !1 : o ? e.commands.command(({ tr: l }) => {
          var c;
          const { pos: a } = r, u = r.start(), d = r.end(), h = s.doc.textBetween(u, d, `
`, `
`).split(`
`);
          let p = 0, m = 0;
          const y = a - u;
          for (let T = 0; T < h.length; T += 1) {
            if (m + h[T].length >= y) {
              p = T;
              break;
            }
            m += h[T].length + 1;
          }
          const M = ((c = h[p].match(/^ */)) == null ? void 0 : c[0]) || "", N = Math.min(M.length, n);
          if (N === 0)
            return !0;
          let A = u;
          for (let T = 0; T < p; T += 1)
            A += h[T].length + 1;
          return l.delete(A, A + N), a - A <= N && l.setSelection(Ce.create(l.doc, A)), !0;
        }) : e.commands.command(({ tr: l }) => {
          const { from: c, to: a } = i, f = s.doc.textBetween(c, a, `
`, `
`).split(`
`).map((h) => {
            var p;
            const m = ((p = h.match(/^ */)) == null ? void 0 : p[0]) || "", y = Math.min(m.length, n);
            return h.slice(y);
          }).join(`
`);
          return l.replaceWith(c, a, s.schema.text(f)), !0;
        });
      },
      // exit node on triple enter
      Enter: ({ editor: e }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: t } = e, { selection: n } = t, { $from: s, empty: i } = n;
        if (!i || s.parent.type !== this.type)
          return !1;
        const r = s.parentOffset === s.parent.nodeSize - 2, o = s.parent.textContent.endsWith(`

`);
        return !r || !o ? !1 : e.chain().command(({ tr: l }) => (l.delete(s.pos - 2, s.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: e }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: t } = e, { selection: n, doc: s } = t, { $from: i, empty: r } = n;
        if (!r || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: a }) => (a.setSelection(ie.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      ll({
        find: rb,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      ll({
        find: ob,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new En({
        key: new se("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = t.clipboardData.getData("text/plain"), s = t.clipboardData.getData("vscode-editor-data"), i = s ? JSON.parse(s) : void 0, r = i?.mode;
            if (!n || !r)
              return !1;
            const { tr: o, schema: l } = e.state, c = l.text(n.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: r }, c)), o.selection.$from.parent.type !== this.type && o.setSelection(Ce.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), e.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), cb = Jn.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `

`) : ""
}), ab = Jn.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["br", qn(this.options.HTMLAttributes, e)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({ commands: e, chain: t, state: n, editor: s }) => e.first([
        () => e.exitCode(),
        () => e.command(() => {
          const { selection: i, storedMarks: r } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = s.extensionManager, c = r || i.$to.parentOffset && i.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: a, dispatch: u }) => {
            if (u && c && o) {
              const d = c.filter((f) => l.includes(f.type.name));
              a.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), ub = Jn.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["hr", qn(this.options.HTMLAttributes, e)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (e, t) => t.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        if (!Kd(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, i = e();
        return qd(n) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ state: r, tr: o, dispatch: l }) => {
          if (l) {
            const { $to: c } = o.selection, a = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? o.setSelection(Ce.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(fo.create(o.doc, c.pos)) : o.setSelection(Ce.create(o.doc, c.pos));
            else {
              const u = r.schema.nodes[this.options.nextNodeType] || c.parent.type.contentMatch.defaultType, d = u?.create();
              d && (o.insert(a, d), o.setSelection(Ce.create(o.doc, a + 1)));
            }
            o.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Wd({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), db = Jn.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["p", qn(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown: (e, t) => {
    const n = e.tokens || [];
    return n.length === 1 && n[0].type === "image" ? t.parseChildren([n[0]]) : t.createNode(
      "paragraph",
      void 0,
      // no attributes for paragraph
      t.parseInline(n)
    );
  },
  renderMarkdown: (e, t) => !e || !Array.isArray(e.content) ? "" : t.renderChildren(e.content),
  addCommands() {
    return {
      setParagraph: () => ({ commands: e }) => e.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), fb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, hb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, pb = Zc.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["s", qn(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
  addCommands() {
    return {
      setStrike: () => ({ commands: e }) => e.setMark(this.name),
      toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      ea({
        find: fb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ta({
        find: hb,
        type: this.type
      })
    ];
  }
}), gb = Jn.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || ""
  }),
  renderMarkdown: (e) => e.text || ""
}), mb = Os.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const i = [];
    return this.options.bold !== !1 && i.push(Zd.configure(this.options.bold)), this.options.blockquote !== !1 && i.push(Qd.configure(this.options.blockquote)), this.options.bulletList !== !1 && i.push(sf.configure(this.options.bulletList)), this.options.code !== !1 && i.push(ib.configure(this.options.code)), this.options.codeBlock !== !1 && i.push(lb.configure(this.options.codeBlock)), this.options.document !== !1 && i.push(cb.configure(this.options.document)), this.options.dropcursor !== !1 && i.push(af.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && i.push(uf.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && i.push(ab.configure(this.options.hardBreak)), this.options.heading !== !1 && i.push(tf.configure(this.options.heading)), this.options.undoRedo !== !1 && i.push(df.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && i.push(ub.configure(this.options.horizontalRule)), this.options.italic !== !1 && i.push(ef.configure(this.options.italic)), this.options.listItem !== !1 && i.push(rf.configure(this.options.listItem)), this.options.listKeymap !== !1 && i.push(of.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && i.push(nf.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && i.push(lf.configure(this.options.orderedList)), this.options.paragraph !== !1 && i.push(db.configure(this.options.paragraph)), this.options.strike !== !1 && i.push(pb.configure(this.options.strike)), this.options.text !== !1 && i.push(gb.configure(this.options.text)), this.options.underline !== !1 && i.push(cf.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && i.push(ff.configure((s = this.options) == null ? void 0 : s.trailingNode)), i;
  }
}), wb = mb;
function Oc(e) {
  return $d((t, n) => ({
    get() {
      return t(), e;
    },
    set(s) {
      e = s, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var bb = class extends Jd {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Oc(this.view.state), this.reactiveExtensionStorage = Oc(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Wc(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    const n = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}, yb = /* @__PURE__ */ Gt({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = Q(), n = Ui();
    return Yn(() => {
      const s = e.editor;
      s && s.options.element && t.value && Ht(() => {
        var i;
        if (!t.value || !((i = s.view.dom) != null && i.firstChild))
          return;
        const r = at(t.value);
        t.value.append(s.view.dom), s.contentComponent = n.ctx._, n && (s.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), s.setOptions({
          element: r
        }), s.createNodeViews();
      });
    }), Is(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return Ps("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
}), io, ro;
if (typeof WeakMap < "u") {
  let e = /* @__PURE__ */ new WeakMap();
  io = (t) => e.get(t), ro = (t, n) => (e.set(t, n), n);
} else {
  const e = [];
  let n = 0;
  io = (s) => {
    for (let i = 0; i < e.length; i += 2)
      if (e[i] == s) return e[i + 1];
  }, ro = (s, i) => (n == 10 && (n = 0), e[n++] = s, e[n++] = i);
}
var Pe = class {
  constructor(e, t, n, s) {
    this.width = e, this.height = t, this.map = n, this.problems = s;
  }
  // Find the dimensions of the cell at the given position.
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      const n = this.map[t];
      if (n != e) continue;
      const s = t % this.width, i = t / this.width | 0;
      let r = s + 1, o = i + 1;
      for (let l = 1; r < this.width && this.map[t + l] == n; l++)
        r++;
      for (let l = 1; o < this.height && this.map[t + this.width * l] == n; l++)
        o++;
      return { left: s, top: i, right: r, bottom: o };
    }
    throw new RangeError(`No cell with offset ${e} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(e) {
    for (let t = 0; t < this.map.length; t++)
      if (this.map[t] == e)
        return t % this.width;
    throw new RangeError(`No cell with offset ${e} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(e, t, n) {
    const { left: s, right: i, top: r, bottom: o } = this.findCell(e);
    return t == "horiz" ? (n < 0 ? s == 0 : i == this.width) ? null : this.map[r * this.width + (n < 0 ? s - 1 : i)] : (n < 0 ? r == 0 : o == this.height) ? null : this.map[s + this.width * (n < 0 ? r - 1 : o)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(e, t) {
    const {
      left: n,
      right: s,
      top: i,
      bottom: r
    } = this.findCell(e), {
      left: o,
      right: l,
      top: c,
      bottom: a
    } = this.findCell(t);
    return {
      left: Math.min(n, o),
      top: Math.min(i, c),
      right: Math.max(s, l),
      bottom: Math.max(r, a)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(e) {
    const t = [], n = {};
    for (let s = e.top; s < e.bottom; s++)
      for (let i = e.left; i < e.right; i++) {
        const r = s * this.width + i, o = this.map[r];
        n[o] || (n[o] = !0, !(i == e.left && i && this.map[r - 1] == o || s == e.top && s && this.map[r - this.width] == o) && t.push(o));
      }
    return t;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(e, t, n) {
    for (let s = 0, i = 0; ; s++) {
      const r = i + n.child(s).nodeSize;
      if (s == e) {
        let o = t + e * this.width;
        const l = (e + 1) * this.width;
        for (; o < l && this.map[o] < i; ) o++;
        return o == l ? r - 1 : this.map[o];
      }
      i = r;
    }
  }
  // Find the table map for the given table node.
  static get(e) {
    return io(e) || ro(e, vb(e));
  }
};
function vb(e) {
  if (e.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + e.type.name);
  const t = _b(e), n = e.childCount, s = [];
  let i = 0, r = null;
  const o = [];
  for (let a = 0, u = t * n; a < u; a++) s[a] = 0;
  for (let a = 0, u = 0; a < n; a++) {
    const d = e.child(a);
    u++;
    for (let p = 0; ; p++) {
      for (; i < s.length && s[i] != 0; ) i++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: y, rowspan: b, colwidth: M } = m.attrs;
      for (let N = 0; N < b; N++) {
        if (N + a >= n) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - N
          });
          break;
        }
        const A = i + N * t;
        for (let P = 0; P < y; P++) {
          s[A + P] == 0 ? s[A + P] = u : (r || (r = [])).push({
            type: "collision",
            row: a,
            pos: u,
            n: y - P
          });
          const T = M && M[P];
          if (T) {
            const B = (A + P) % t * 2, E = o[B];
            E == null || E != T && o[B + 1] == 1 ? (o[B] = T, o[B + 1] = 1) : E == T && o[B + 1]++;
          }
        }
      }
      i += y, u += m.nodeSize;
    }
    const f = (a + 1) * t;
    let h = 0;
    for (; i < f; ) s[i++] == 0 && h++;
    h && (r || (r = [])).push({ type: "missing", row: a, n: h }), u++;
  }
  (t === 0 || n === 0) && (r || (r = [])).push({ type: "zero_sized" });
  const l = new Pe(t, n, s, r);
  let c = !1;
  for (let a = 0; !c && a < o.length; a += 2)
    o[a] != null && o[a + 1] < n && (c = !0);
  return c && kb(l, o, e), l;
}
function _b(e) {
  let t = -1, n = !1;
  for (let s = 0; s < e.childCount; s++) {
    const i = e.child(s);
    let r = 0;
    if (n)
      for (let o = 0; o < s; o++) {
        const l = e.child(o);
        for (let c = 0; c < l.childCount; c++) {
          const a = l.child(c);
          o + a.attrs.rowspan > s && (r += a.attrs.colspan);
        }
      }
    for (let o = 0; o < i.childCount; o++) {
      const l = i.child(o);
      r += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    t == -1 ? t = r : t != r && (t = Math.max(t, r));
  }
  return t;
}
function kb(e, t, n) {
  e.problems || (e.problems = []);
  const s = {};
  for (let i = 0; i < e.map.length; i++) {
    const r = e.map[i];
    if (s[r]) continue;
    s[r] = !0;
    const o = n.nodeAt(r);
    if (!o)
      throw new RangeError(`No cell with offset ${r} found`);
    let l = null;
    const c = o.attrs;
    for (let a = 0; a < c.colspan; a++) {
      const u = (i + a) % e.width, d = t[u * 2];
      d != null && (!c.colwidth || c.colwidth[a] != d) && ((l || (l = xb(c)))[a] = d);
    }
    l && e.problems.unshift({
      type: "colwidth mismatch",
      pos: r,
      colwidth: l
    });
  }
}
function xb(e) {
  if (e.colwidth) return e.colwidth.slice();
  const t = [];
  for (let n = 0; n < e.colspan; n++) t.push(0);
  return t;
}
function zo(e) {
  let t = e.cached.tableNodeTypes;
  if (!t) {
    t = e.cached.tableNodeTypes = {};
    for (const n in e.nodes) {
      const s = e.nodes[n], i = s.spec.tableRole;
      i && (t[i] = s);
    }
  }
  return t;
}
new se("selectingCells");
function Sb(e) {
  for (let t = e.depth - 1; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return e.node(0).resolve(e.before(t + 1));
  return null;
}
function od(e) {
  const t = e.selection.$head;
  for (let n = t.depth; n > 0; n--)
    if (t.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Cb(e) {
  const t = e.selection;
  if ("$anchorCell" in t && t.$anchorCell)
    return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
  if ("node" in t && t.node && t.node.type.spec.tableRole == "cell")
    return t.$anchor;
  const n = Sb(t.$head) || Eb(t.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${t.head}`);
}
function Eb(e) {
  for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
    const s = t.type.spec.tableRole;
    if (s == "cell" || s == "header_cell") return e.doc.resolve(n);
  }
  for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
    const s = t.type.spec.tableRole;
    if (s == "cell" || s == "header_cell")
      return e.doc.resolve(n - t.nodeSize);
  }
}
function Rc(e) {
  return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function ld(e, t) {
  return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function cd(e, t, n) {
  const s = e.node(-1), i = Pe.get(s), r = e.start(-1), o = i.nextCell(e.pos - r, t, n);
  return o == null ? null : e.node(0).resolve(r + o);
}
function Ic(e, t, n = 1) {
  const s = { ...e, colspan: e.colspan - n };
  return s.colwidth && (s.colwidth = s.colwidth.slice(), s.colwidth.splice(t, n), s.colwidth.some((i) => i > 0) || (s.colwidth = null)), s;
}
var Te = class Ie extends ie {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(t, n = t) {
    const s = t.node(-1), i = Pe.get(s), r = t.start(-1), o = i.rectBetween(
      t.pos - r,
      n.pos - r
    ), l = t.node(0), c = i.cellsInRect(o).filter((u) => u != n.pos - r);
    c.unshift(n.pos - r);
    const a = c.map((u) => {
      const d = s.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = r + u + 1;
      return new Qc(
        l.resolve(f),
        l.resolve(f + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = t, this.$headCell = n;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
    if (Rc(s) && Rc(i) && ld(s, i)) {
      const r = this.$anchorCell.node(-1) != s.node(-1);
      return r && this.isRowSelection() ? Ie.rowSelection(s, i) : r && this.isColSelection() ? Ie.colSelection(s, i) : new Ie(s, i);
    }
    return Ce.between(s, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const t = this.$anchorCell.node(-1), n = Pe.get(t), s = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - s,
      this.$headCell.pos - s
    ), r = {}, o = [];
    for (let c = i.top; c < i.bottom; c++) {
      const a = [];
      for (let u = c * n.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = n.map[u];
        if (r[f]) continue;
        r[f] = !0;
        const h = n.findCell(f);
        let p = t.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = i.left - h.left, y = h.right - i.right;
        if (m > 0 || y > 0) {
          let b = p.attrs;
          if (m > 0 && (b = Ic(b, 0, m)), y > 0 && (b = Ic(
            b,
            b.colspan - y,
            y
          )), h.left < i.left) {
            if (p = p.type.createAndFill(b), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(b)}`
              );
          } else
            p = p.type.create(b, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const b = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(b) : p = p.type.create(b, p.content);
        }
        a.push(p);
      }
      o.push(t.child(c).copy(wn.from(a)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? t : o;
    return new Be(wn.from(l), 1, 1);
  }
  replace(t, n = Be.empty) {
    const s = t.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      const { $from: l, $to: c } = i[o], a = t.mapping.slice(s);
      t.replace(
        a.map(l.pos),
        a.map(c.pos),
        o ? Be.empty : n
      );
    }
    const r = ie.findFrom(
      t.doc.resolve(t.mapping.slice(s).map(this.to)),
      -1
    );
    r && t.setSelection(r);
  }
  replaceWith(t, n) {
    this.replace(t, new Be(wn.from(n), 0, 0));
  }
  forEachCell(t) {
    const n = this.$anchorCell.node(-1), s = Pe.get(n), i = this.$anchorCell.start(-1), r = s.cellsInRect(
      s.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let o = 0; o < r.length; o++)
      t(n.nodeAt(r[o]), i + r[o]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const t = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(t, n) > 0) return !1;
    const s = t + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(s, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(t, n = t) {
    const s = t.node(-1), i = Pe.get(s), r = t.start(-1), o = i.findCell(t.pos - r), l = i.findCell(n.pos - r), c = t.node(0);
    return o.top <= l.top ? (o.top > 0 && (t = c.resolve(r + i.map[o.left])), l.bottom < i.height && (n = c.resolve(
      r + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (n = c.resolve(r + i.map[l.left])), o.bottom < i.height && (t = c.resolve(
      r + i.map[i.width * (i.height - 1) + o.right - 1]
    ))), new Ie(t, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const t = this.$anchorCell.node(-1), n = Pe.get(t), s = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - s), r = n.colCount(this.$headCell.pos - s);
    if (Math.min(i, r) > 0) return !1;
    const o = i + this.$anchorCell.nodeAfter.attrs.colspan, l = r + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == n.width;
  }
  eq(t) {
    return t instanceof Ie && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(t, n = t) {
    const s = t.node(-1), i = Pe.get(s), r = t.start(-1), o = i.findCell(t.pos - r), l = i.findCell(n.pos - r), c = t.node(0);
    return o.left <= l.left ? (o.left > 0 && (t = c.resolve(
      r + i.map[o.top * i.width]
    )), l.right < i.width && (n = c.resolve(
      r + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (n = c.resolve(r + i.map[l.top * i.width])), o.right < i.width && (t = c.resolve(
      r + i.map[i.width * (o.top + 1) - 1]
    ))), new Ie(t, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(t, n) {
    return new Ie(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, s = n) {
    return new Ie(t.resolve(n), t.resolve(s));
  }
  getBookmark() {
    return new Ab(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Te.prototype.visible = !1;
ie.jsonID("cell", Te);
var Ab = class ad {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new ad(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && s.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && s.index() < s.parent.childCount && ld(n, s) ? new Te(n, s) : ie.near(s, 1);
  }
};
new se("fix-tables");
function ud(e) {
  const t = e.selection, n = Cb(e), s = n.node(-1), i = n.start(-1), r = Pe.get(s);
  return { ...t instanceof Te ? r.rectBetween(
    t.$anchorCell.pos - i,
    t.$headCell.pos - i
  ) : r.findCell(n.pos - i), tableStart: i, map: r, table: s };
}
function Tb(e) {
  return function(t, n) {
    if (!od(t)) return !1;
    if (n) {
      const s = zo(t.schema), i = ud(t), r = t.tr, o = i.map.cellsInRect(
        e == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : e == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = o.map((c) => i.table.nodeAt(c));
      for (let c = 0; c < o.length; c++)
        l[c].type == s.header_cell && r.setNodeMarkup(
          i.tableStart + o[c],
          s.cell,
          l[c].attrs
        );
      if (r.steps.length == 0)
        for (let c = 0; c < o.length; c++)
          r.setNodeMarkup(
            i.tableStart + o[c],
            s.header_cell,
            l[c].attrs
          );
      n(r);
    }
    return !0;
  };
}
function Nc(e, t, n) {
  const s = t.map.cellsInRect({
    left: 0,
    top: 0,
    right: e == "row" ? t.map.width : 1,
    bottom: e == "column" ? t.map.height : 1
  });
  for (let i = 0; i < s.length; i++) {
    const r = t.table.nodeAt(s[i]);
    if (r && r.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Wo(e, t) {
  return t = t || { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? Tb(e) : function(n, s) {
    if (!od(n)) return !1;
    if (s) {
      const i = zo(n.schema), r = ud(n), o = n.tr, l = Nc("row", r, i), c = Nc(
        "column",
        r,
        i
      ), u = (e === "column" ? l : e === "row" ? c : !1) ? 1 : 0, d = e == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: r.map.height
      } : e == "row" ? {
        left: u,
        top: 0,
        right: r.map.width,
        bottom: 1
      } : r, f = e == "column" ? c ? i.cell : i.header_cell : e == "row" ? l ? i.cell : i.header_cell : i.cell;
      r.map.cellsInRect(d).forEach((h) => {
        const p = h + r.tableStart, m = o.doc.nodeAt(p);
        m && o.setNodeMarkup(p, f, m.attrs);
      }), s(o);
    }
    return !0;
  };
}
Wo("row", {
  useDeprecatedLogic: !0
});
Wo("column", {
  useDeprecatedLogic: !0
});
Wo("cell", {
  useDeprecatedLogic: !0
});
function Gs(e, t) {
  const n = e.selection;
  if (!(n instanceof Te)) return !1;
  if (t) {
    const s = e.tr, i = zo(e.schema).cell.createAndFill().content;
    n.forEachCell((r, o) => {
      r.content.eq(i) || s.replace(
        s.mapping.map(o + 1),
        s.mapping.map(o + r.nodeSize - 1),
        new Be(i, 0, 0)
      );
    }), s.docChanged && t(s);
  }
  return !0;
}
Yd({
  ArrowLeft: Xs("horiz", -1),
  ArrowRight: Xs("horiz", 1),
  ArrowUp: Xs("vert", -1),
  ArrowDown: Xs("vert", 1),
  "Shift-ArrowLeft": Qs("horiz", -1),
  "Shift-ArrowRight": Qs("horiz", 1),
  "Shift-ArrowUp": Qs("vert", -1),
  "Shift-ArrowDown": Qs("vert", 1),
  Backspace: Gs,
  "Mod-Backspace": Gs,
  Delete: Gs,
  "Mod-Delete": Gs
});
function ai(e, t, n) {
  return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function Xs(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const r = n.selection;
    if (r instanceof Te)
      return ai(
        n,
        s,
        ie.near(r.$headCell, t)
      );
    if (e != "horiz" && !r.empty) return !1;
    const o = dd(i, e, t);
    if (o == null) return !1;
    if (e == "horiz")
      return ai(
        n,
        s,
        ie.near(n.doc.resolve(r.head + t), t)
      );
    {
      const l = n.doc.resolve(o), c = cd(l, e, t);
      let a;
      return c ? a = ie.near(c, 1) : t < 0 ? a = ie.near(n.doc.resolve(l.before(-1)), -1) : a = ie.near(n.doc.resolve(l.after(-1)), 1), ai(n, s, a);
    }
  };
}
function Qs(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const r = n.selection;
    let o;
    if (r instanceof Te)
      o = r;
    else {
      const c = dd(i, e, t);
      if (c == null) return !1;
      o = new Te(n.doc.resolve(c));
    }
    const l = cd(o.$headCell, e, t);
    return l ? ai(
      n,
      s,
      new Te(o.$anchorCell, l)
    ) : !1;
  };
}
function dd(e, t, n) {
  if (!(e.state.selection instanceof Ce)) return null;
  const { $head: s } = e.state.selection;
  for (let i = s.depth - 1; i >= 0; i--) {
    const r = s.node(i);
    if ((n < 0 ? s.index(i) : s.indexAfter(i)) != (n < 0 ? 0 : r.childCount)) return null;
    if (r.type.spec.tableRole == "cell" || r.type.spec.tableRole == "header_cell") {
      const l = s.before(i), c = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return e.endOfTextblock(c) ? l : null;
    }
  }
  return null;
}
new se(
  "tableColumnResizing"
);
function Mb(e, t) {
  const n = Math.min(e.top, t.top), s = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), o = Math.max(e.right, t.right) - i, l = s - n, c = i, a = n;
  return new DOMRect(c, a, o, l);
}
var Db = class {
  constructor({
    editor: e,
    element: t,
    view: n,
    updateDelay: s = 250,
    resizeDelay: i = 60,
    shouldShow: r,
    appendTo: o,
    getReferencedVirtualElement: l,
    options: c
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({ view: u, state: d, from: f, to: h }) => {
      const { doc: p, selection: m } = d, { empty: y } = m, b = !p.textBetween(f, h).length && Gd(d.selection), M = this.element.contains(document.activeElement);
      return !(!(u.hasFocus() || M) || y || b || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: u }) => {
      var d;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      u?.relatedTarget && ((d = this.element.parentNode) != null && d.contains(u.relatedTarget)) || u?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (u, d) => {
      const f = !d?.selection.eq(u.state.selection), h = !d?.doc.eq(u.state.doc);
      !f && !h || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(u, f, h, d);
      }, this.updateDelay));
    }, this.updateHandler = (u, d, f, h) => {
      const { composing: p } = u;
      if (p || !d && !f)
        return;
      if (!this.getShouldShow(h)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.transactionHandler = ({ transaction: u }) => {
      u.getMeta("bubbleMenu") === "updatePosition" && this.updatePosition();
    };
    var a;
    this.editor = e, this.element = t, this.view = n, this.updateDelay = s, this.resizeDelay = i, this.appendTo = o, this.scrollTarget = (a = c?.scrollTarget) != null ? a : window, this.getReferencedVirtualElement = l, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...c
    }, this.element.tabIndex = 0, r && (this.shouldShow = r), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(Zp(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      Qp(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      Gp(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(ng(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(tg(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      Xp(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(eg(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      sg(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  get virtualElement() {
    var e;
    const { selection: t } = this.editor.state, n = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
    if (n)
      return n;
    const s = Xd(this.view, t.from, t.to);
    let i = {
      getBoundingClientRect: () => s,
      getClientRects: () => [s]
    };
    if (t instanceof fo) {
      let r = this.view.nodeDOM(t.from);
      const o = r.dataset.nodeViewWrapper ? r : r.querySelector("[data-node-view-wrapper]");
      o && (r = o), r && (i = {
        getBoundingClientRect: () => r.getBoundingClientRect(),
        getClientRects: () => [r.getBoundingClientRect()]
      });
    }
    if (t instanceof Te) {
      const { $anchorCell: r, $headCell: o } = t, l = r ? r.pos : o.pos, c = o ? o.pos : r.pos, a = this.view.nodeDOM(l), u = this.view.nodeDOM(c);
      if (!a || !u)
        return;
      const d = a === u ? a.getBoundingClientRect() : Mb(
        a.getBoundingClientRect(),
        u.getBoundingClientRect()
      );
      i = {
        getBoundingClientRect: () => d,
        getClientRects: () => [d]
      };
    }
    return i;
  }
  updatePosition() {
    const e = this.virtualElement;
    e && Qa(e, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: t, y: n, strategy: s }) => {
      this.element.style.width = "max-content", this.element.style.position = s, this.element.style.left = `${t}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(e, t) {
    const { state: n } = e, s = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && s) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const i = !t?.selection.eq(e.state.selection), r = !t?.doc.eq(e.state.doc);
    this.updateHandler(e, i, r, t);
  }
  getShouldShow(e) {
    var t;
    const { state: n } = this.view, { selection: s } = n, { ranges: i } = s, r = Math.min(...i.map((c) => c.$from.pos)), o = Math.max(...i.map((c) => c.$to.pos));
    return ((t = this.shouldShow) == null ? void 0 : t.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: e,
      from: r,
      to: o
    })) || !1;
  }
  show() {
    var e;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const t = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (e = t ?? this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Ob = (e) => new En({
  key: typeof e.pluginKey == "string" ? new se(e.pluginKey) : e.pluginKey,
  view: (t) => new Db({ view: t, ...e })
}), Rb = /* @__PURE__ */ Gt({
  name: "BubbleMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: Object,
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    },
    getReferencedVirtualElement: {
      type: Function,
      default: void 0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const s = Q(null);
    return an(() => {
      const {
        editor: i,
        options: r,
        pluginKey: o,
        resizeDelay: l,
        appendTo: c,
        shouldShow: a,
        getReferencedVirtualElement: u,
        updateDelay: d
      } = e, f = s.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), Ht(() => {
        i.registerPlugin(
          Ob({
            editor: i,
            element: f,
            options: r,
            pluginKey: o,
            resizeDelay: l,
            appendTo: c,
            shouldShow: a,
            getReferencedVirtualElement: u,
            updateDelay: d
          })
        );
      }));
    }), Is(() => {
      const { pluginKey: i, editor: r } = e;
      r.unregisterPlugin(i);
    }), () => {
      var i;
      return Ps("div", { ref: s, ...n }, (i = t.default) == null ? void 0 : i.call(t));
    };
  }
});
const Ib = {
  height: "20",
  width: "20",
  viewBox: "0 0 20 20"
}, Nb = ["stroke-dasharray"], Lb = /* @__PURE__ */ Gt({
  __name: "CharacterCount",
  props: {
    editor: {},
    limit: {}
  },
  setup(e) {
    const t = e, n = Et(
      () => Math.round(100 / t.limit * t.editor.storage.characterCount.characters())
    );
    return (s, i) => (q(), ot("div", {
      class: Fe(["tiptap-character-count", {
        "tiptap-character-count--warning": e.editor.storage.characterCount.characters() === e.limit
      }])
    }, [
      (q(), ot("svg", Ib, [
        i[0] || (i[0] = Rt("circle", {
          r: "10",
          cx: "10",
          cy: "10",
          fill: "var(--tiptap-color-surface-highlight)"
        }, null, -1)),
        Rt("circle", {
          r: "5",
          cx: "10",
          cy: "10",
          fill: "transparent",
          stroke: "currentColor",
          "stroke-width": "10",
          "stroke-dasharray": `calc(${n.value} * 31.4 / 100) 31.4`,
          transform: "rotate(-90) translate(-20)"
        }, null, 8, Nb),
        i[1] || (i[1] = Rt("circle", {
          r: "6",
          cx: "10",
          cy: "10",
          fill: "var(--tiptap-color-surface)"
        }, null, -1))
      ])),
      Lr(" " + $e(e.editor.storage.characterCount.characters()) + " / " + $e(e.limit) + " characters ", 1),
      i[2] || (i[2] = Rt("br", null, null, -1)),
      Lr(" " + $e(e.editor.storage.characterCount.words()) + " words ", 1)
    ], 2));
  }
});
var Lc;
let Pb = Symbol("headlessui.useid"), $b = 0;
const Ko = (Lc = _f) != null ? Lc : function() {
  return bn(Pb, () => `${++$b}`)();
};
function gt(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function nr(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, nr), s;
}
var Bb = Object.defineProperty, Fb = (e, t, n) => t in e ? Bb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pc = (e, t, n) => (Fb(e, typeof t != "symbol" ? t + "" : t, n), n);
let Hb = class {
  constructor() {
    Pc(this, "current", this.detect()), Pc(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, qo = new Hb();
function Jo(e) {
  if (qo.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = gt(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let oo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var lo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(lo || {}), Ub = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ub || {}), Vb = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Vb || {});
function fd(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(oo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Yo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Yo || {});
function Go(e, t = 0) {
  var n;
  return e === ((n = Jo(e)) == null ? void 0 : n.body) ? !1 : nr(t, { 0() {
    return e.matches(oo);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(oo)) return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function hd(e) {
  let t = Jo(e);
  Ht(() => {
    t && !Go(t.activeElement, 0) && zb(e);
  });
}
var jb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(jb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function zb(e) {
  e?.focus({ preventScroll: !0 });
}
let Wb = ["textarea", "input"].join(",");
function Kb(e) {
  var t, n;
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Wb)) != null ? n : !1;
}
function pd(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n), r = t(s);
    if (i === null || r === null) return 0;
    let o = i.compareDocumentPosition(r);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function qb(e, t) {
  return Jb(fd(), t, { relativeTo: e });
}
function Jb(e, t, { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {}) {
  var r;
  let o = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) != null ? r : document, l = Array.isArray(e) ? n ? pd(e) : e : fd(e);
  i.length > 0 && l.length > 1 && (l = l.filter((p) => !i.includes(p))), s = s ?? o.activeElement;
  let c = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(s)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(s)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0) return 0;
    let p = a + d;
    if (t & 16) p = (p + f) % f;
    else {
      if (p < 0) return 3;
      if (p >= f) return 1;
    }
    h = l[p], h?.focus(u), d += c;
  } while (h !== o.activeElement);
  return t & 6 && Kb(h) && h.select(), 2;
}
function Yb() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Gb() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Xb() {
  return Yb() || Gb();
}
function Zs(e, t, n) {
  qo.isServer || Yn((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function Qb(e, t, n) {
  qo.isServer || Yn((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function Zb(e, t, n = Et(() => !0)) {
  function s(r, o) {
    if (!n.value || r.defaultPrevented) return;
    let l = o(r);
    if (l === null || !l.getRootNode().contains(l)) return;
    let c = (function a(u) {
      return typeof u == "function" ? a(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    })(e);
    for (let a of c) {
      if (a === null) continue;
      let u = a instanceof HTMLElement ? a : gt(a);
      if (u != null && u.contains(l) || r.composed && r.composedPath().includes(u)) return;
    }
    return !Go(l, Yo.Loose) && l.tabIndex !== -1 && r.preventDefault(), t(r, l);
  }
  let i = Q(null);
  Zs("pointerdown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), Zs("mousedown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), Zs("click", (r) => {
    Xb() || i.value && (s(r, () => i.value), i.value = null);
  }, !0), Zs("touchend", (r) => s(r, () => r.target instanceof HTMLElement ? r.target : null), !0), Qb("blur", (r) => s(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function $c(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function ty(e, t) {
  let n = Q($c(e.value.type, e.value.as));
  return an(() => {
    n.value = $c(e.value.type, e.value.as);
  }), Yn(() => {
    var s;
    n.value || gt(t) && gt(t) instanceof HTMLButtonElement && !((s = gt(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Bc(e) {
  return [e.screenX, e.screenY];
}
function ey() {
  let e = Q([-1, -1]);
  return { wasMoved(t) {
    let n = Bc(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Bc(t);
  } };
}
function ny({ container: e, accept: t, walk: n, enabled: s }) {
  Yn(() => {
    let i = e.value;
    if (!i || s !== void 0 && !s.value) return;
    let r = Jo(e);
    if (!r) return;
    let o = Object.assign((c) => t(c), { acceptNode: t }), l = r.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; l.nextNode(); ) n(l.currentNode);
  });
}
var co = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(co || {}), sy = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(sy || {});
function sr({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...i }) {
  var r;
  let o = md(s, n), l = Object.assign(i, { props: o });
  if (e || t & 2 && o.static) return Tr(l);
  if (t & 1) {
    let c = (r = o.unmount) == null || r ? 0 : 1;
    return nr(c, { 0() {
      return null;
    }, 1() {
      return Tr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Tr(l);
}
function Tr({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var r, o;
  let { as: l, ...c } = iy(e, ["unmount", "static"]), a = (r = n.default) == null ? void 0 : r.call(n, s), u = {};
  if (s) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(s)) typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (a = gd(a ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = a ?? [];
      if (!ry(d) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((m) => m.trim()).filter((m, y, b) => b.indexOf(m) === y).sort((m, y) => m.localeCompare(y)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = md((o = d.props) != null ? o : {}, c, u), p = je(d, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return Ps(l, Object.assign({}, c, u), { default: () => a });
}
function gd(e) {
  return e.flatMap((t) => t.type === ft ? gd(t.children) : [t]);
}
function md(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let s of e) for (let i in s) i.startsWith("on") && typeof s[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(s[i])) : t[i] = s[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((s) => [s, void 0])));
  for (let s in n) Object.assign(t, { [s](i, ...r) {
    let o = n[s];
    for (let l of o) {
      if (i instanceof Event && i.defaultPrevented) return;
      l(i, ...r);
    }
  } });
  return t;
}
function iy(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t) s in n && delete n[s];
  return n;
}
function ry(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let wd = Symbol("Context");
var Ds = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ds || {});
function oy() {
  return bn(wd, null);
}
function ly(e) {
  po(wd, e);
}
var _t = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_t || {});
function cy(e) {
  throw new Error("Unexpected object: " + e);
}
var Jt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Jt || {});
function ay(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let s = t.resolveActiveIndex(), i = s ?? -1;
  switch (e.focus) {
    case 0: {
      for (let r = 0; r < n.length; ++r) if (!t.resolveDisabled(n[r], r, n)) return r;
      return s;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let r = i - 1; r >= 0; --r) if (!t.resolveDisabled(n[r], r, n)) return r;
      return s;
    }
    case 2: {
      for (let r = i + 1; r < n.length; ++r) if (!t.resolveDisabled(n[r], r, n)) return r;
      return s;
    }
    case 3: {
      for (let r = n.length - 1; r >= 0; --r) if (!t.resolveDisabled(n[r], r, n)) return r;
      return s;
    }
    case 4: {
      for (let r = 0; r < n.length; ++r) if (t.resolveId(n[r], r, n) === e.id) return r;
      return s;
    }
    case 5:
      return null;
    default:
      cy(e);
  }
}
let Fc = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Hc(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return s;
  let r = !1;
  for (let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) l.remove(), r = !0;
  let o = r ? (n = i.innerText) != null ? n : "" : s;
  return Fc.test(o) && (o = o.replace(Fc, "")), o;
}
function uy(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((i) => {
      let r = document.getElementById(i);
      if (r) {
        let o = r.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Hc(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0) return s.join(", ");
  }
  return Hc(e).trim();
}
function dy(e) {
  let t = Q(""), n = Q("");
  return () => {
    let s = gt(e);
    if (!s) return "";
    let i = s.innerText;
    if (t.value === i) return n.value;
    let r = uy(s).trim().toLowerCase();
    return t.value = i, n.value = r, r;
  };
}
var fy = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fy || {}), hy = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(hy || {});
function py(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let bd = Symbol("MenuContext");
function ir(e) {
  let t = bn(bd, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ir), n;
  }
  return t;
}
let gy = /* @__PURE__ */ Gt({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let s = Q(1), i = Q(null), r = Q(null), o = Q([]), l = Q(""), c = Q(null), a = Q(1);
  function u(f = (h) => h) {
    let h = c.value !== null ? o.value[c.value] : null, p = pd(f(o.value.slice()), (y) => gt(y.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let d = { menuState: s, buttonRef: i, itemsRef: r, items: o, searchQuery: l, activeItemIndex: c, activationTrigger: a, closeMenu: () => {
    s.value = 1, c.value = null;
  }, openMenu: () => s.value = 0, goToItem(f, h, p) {
    let m = u(), y = ay(f === Jt.Specific ? { focus: Jt.Specific, id: h } : { focus: f }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    l.value = "", c.value = y, a.value = p ?? 1, o.value = m.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (c.value !== null ? o.value.slice(c.value + h).concat(o.value.slice(0, c.value + h)) : o.value).find((y) => y.dataRef.textValue.startsWith(l.value) && !y.dataRef.disabled), m = p ? o.value.indexOf(p) : -1;
    m === -1 || m === c.value || (c.value = m, a.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = u((m) => [...m, { id: f, dataRef: h }]);
    o.value = p.items, c.value = p.activeItemIndex, a.value = 1;
  }, unregisterItem(f) {
    let h = u((p) => {
      let m = p.findIndex((y) => y.id === f);
      return m !== -1 && p.splice(m, 1), p;
    });
    o.value = h.items, c.value = h.activeItemIndex, a.value = 1;
  } };
  return Zb([i, r], (f, h) => {
    var p;
    d.closeMenu(), Go(h, Yo.Loose) || (f.preventDefault(), (p = gt(i)) == null || p.focus());
  }, Et(() => s.value === 0)), po(bd, d), ly(Et(() => nr(s.value, { 0: Ds.Open, 1: Ds.Closed }))), () => {
    let f = { open: s.value === 0, close: d.closeMenu };
    return sr({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} }), my = /* @__PURE__ */ Gt({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-button-${Ko()}`, o = ir("MenuButton");
  s({ el: o.buttonRef, $el: o.buttonRef });
  function l(d) {
    switch (d.key) {
      case _t.Space:
      case _t.Enter:
      case _t.ArrowDown:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ht(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(Jt.First);
        });
        break;
      case _t.ArrowUp:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ht(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(Jt.Last);
        });
        break;
    }
  }
  function c(d) {
    switch (d.key) {
      case _t.Space:
        d.preventDefault();
        break;
    }
  }
  function a(d) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ht(() => {
      var f;
      return (f = gt(o.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), o.openMenu(), py(() => {
      var f;
      return (f = gt(o.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = ty(Et(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var d;
    let f = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: r, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = gt(o.itemsRef)) == null ? void 0 : d.id, "aria-expanded": o.menuState.value === 0, onKeydown: l, onKeyup: c, onClick: a };
    return sr({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} }), wy = /* @__PURE__ */ Gt({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-items-${Ko()}`, o = ir("MenuItems"), l = Q(null);
  s({ el: o.itemsRef, $el: o.itemsRef }), ny({ container: Et(() => gt(o.itemsRef)), enabled: Et(() => o.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function c(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case _t.Space:
        if (o.searchQuery.value !== "") return f.preventDefault(), f.stopPropagation(), o.search(f.key);
      case _t.Enter:
        if (f.preventDefault(), f.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = gt(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), hd(gt(o.buttonRef));
        break;
      case _t.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(Jt.Next);
      case _t.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(Jt.Previous);
      case _t.Home:
      case _t.PageUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(Jt.First);
      case _t.End:
      case _t.PageDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(Jt.Last);
      case _t.Escape:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ht(() => {
          var p;
          return (p = gt(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case _t.Tab:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ht(() => qb(gt(o.buttonRef), f.shiftKey ? lo.Previous : lo.Next));
        break;
      default:
        f.key.length === 1 && (o.search(f.key), l.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function a(f) {
    switch (f.key) {
      case _t.Space:
        f.preventDefault();
        break;
    }
  }
  let u = oy(), d = Et(() => u !== null ? (u.value & Ds.Open) === Ds.Open : o.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, y = { "aria-activedescendant": o.activeItemIndex.value === null || (f = o.items.value[o.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = gt(o.buttonRef)) == null ? void 0 : h.id, id: r, onKeydown: c, onKeyup: a, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return sr({ ourProps: y, theirProps: m, slot: p, attrs: t, slots: n, features: co.RenderStrategy | co.Static, visible: d.value, name: "MenuItems" });
  };
} }), by = /* @__PURE__ */ Gt({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-item-${Ko()}`, o = ir("MenuItem"), l = Q(null);
  s({ el: l, $el: l });
  let c = Et(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === r : !1), a = dy(l), u = Et(() => ({ disabled: e.disabled, get textValue() {
    return a();
  }, domRef: l }));
  an(() => o.registerItem(r, u)), Ns(() => o.unregisterItem(r)), Yn(() => {
    o.menuState.value === 0 && c.value && o.activationTrigger.value !== 0 && Ht(() => {
      var b, M;
      return (M = (b = gt(l)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : M.call(b, { block: "nearest" });
    });
  });
  function d(b) {
    if (e.disabled) return b.preventDefault();
    o.closeMenu(), hd(gt(o.buttonRef));
  }
  function f() {
    if (e.disabled) return o.goToItem(Jt.Nothing);
    o.goToItem(Jt.Specific, r);
  }
  let h = ey();
  function p(b) {
    h.update(b);
  }
  function m(b) {
    h.wasMoved(b) && (e.disabled || c.value || o.goToItem(Jt.Specific, r, 0));
  }
  function y(b) {
    h.wasMoved(b) && (e.disabled || c.value && o.goToItem(Jt.Nothing));
  }
  return () => {
    let { disabled: b, ...M } = e, N = { active: c.value, disabled: b, close: o.closeMenu };
    return sr({ ourProps: { id: r, ref: l, role: "menuitem", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: y, onMouseleave: y }, theirProps: { ...n, ...M }, slot: N, attrs: n, slots: t, name: "MenuItem" });
  };
} });
const yy = ["innerHTML"], Ri = /* @__PURE__ */ Gt({
  __name: "Icon",
  props: {
    icon: {},
    size: { default: "16px" }
  },
  setup(e) {
    const t = e, n = {
      // general
      bold: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold-icon lucide-bold"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>',
      redo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-redo2-icon lucide-redo-2"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/></svg>',
      undo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo2-icon lucide-undo-2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>',
      source: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
      underline: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-underline-icon lucide-underline"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>',
      strike: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-strikethrough-icon lucide-strikethrough"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg>',
      blockquote: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-quote-icon lucide-text-quote"><path d="M17 5H3"/><path d="M21 12H8"/><path d="M21 19H8"/><path d="M3 12v7"/></svg>',
      "chevron-down": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>',
      styles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush-vertical-icon lucide-paintbrush-vertical"><path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/></svg>',
      italic: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic-icon lucide-italic"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>',
      link: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
      // list
      "list-bullet": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-icon lucide-list"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></svg>',
      "list-ordered": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-ordered-icon lucide-list-ordered"><path d="M11 5h10"/><path d="M11 12h10"/><path d="M11 19h10"/><path d="M4 4h1v5"/><path d="M4 9h2"/><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/></svg>',
      // justify
      "justify-left": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-start-vertical-icon lucide-align-start-vertical"><rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/></svg>',
      "justify-center": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center-vertical-icon lucide-align-center-vertical"><path d="M12 2v20"/><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"/><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"/><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"/><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/></svg>',
      "justify-right": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-end-vertical-icon lucide-align-end-vertical"><rect width="16" height="6" x="2" y="4" rx="2"/><rect width="9" height="6" x="9" y="14" rx="2"/><path d="M22 22V2"/></svg>',
      // heading
      heading: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-icon lucide-heading"><path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/></svg>',
      "heading-1": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading1-icon lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>',
      "heading-2": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading2-icon lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>',
      "heading-3": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading3-icon lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>',
      "heading-4": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading4-icon lucide-heading-4"><path d="M12 18V6"/><path d="M17 10v3a1 1 0 0 0 1 1h3"/><path d="M21 10v8"/><path d="M4 12h8"/><path d="M4 18V6"/></svg>',
      "heading-5": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading5-icon lucide-heading-5"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 13v-3h4"/><path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"/></svg>',
      "heading-6": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading6-icon lucide-heading-6"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/></svg>'
    }, s = Et(() => n[t.icon] || "");
    return (i, r) => s.value ? (q(), ot("span", {
      key: 0,
      class: "icon-wrapper",
      style: ui({
        width: t.size,
        height: t.size
      }),
      innerHTML: s.value
    }, null, 12, yy)) : (q(), te(Nf("typo3-backend-icon"), {
      key: 1,
      identifier: t.icon,
      size: "small",
      style: ui({
        width: t.size,
        height: t.size
      })
    }, null, 8, ["identifier", "style"]));
  }
}), vy = { class: "tiptap-sr-only" }, _y = ["onClick"], Uc = /* @__PURE__ */ Gt({
  __name: "Dropdown",
  props: {
    label: {},
    iconIdentifier: {},
    editorDomNode: {},
    items: {}
  },
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = Q(null), r = Q(null), o = Q("not-calculated"), l = Et(() => n.items.some((d) => !d.isDisabled)), c = Et(() => n.items.some((d) => d.isActive));
    function a() {
      if (!r.value)
        return "bottom-left";
      const d = n.editorDomNode.getBoundingClientRect();
      return r.value.$el.getBoundingClientRect().left - d.left > 200 ? "bottom-right" : "bottom-left";
    }
    an(() => {
      o.value = a();
    });
    function u(d) {
      s(d === "open" ? "open" : "close");
    }
    return (d, f) => (q(), te(at(gy), {
      as: "div",
      class: "tiptap-dropdown"
    }, {
      default: tn(() => [
        ut(at(my), {
          ref_key: "dropdownButtonRef",
          ref: r,
          class: Fe(["tiptap-dropdown__button", {
            "tiptap-dropdown__button--active": c.value
          }]),
          disabled: !l.value
        }, {
          default: tn(() => [
            Rt("span", vy, $e(e.label), 1),
            ut(Ri, {
              icon: e.iconIdentifier,
              size: "16px"
            }, null, 8, ["icon"]),
            f[2] || (f[2] = Rt("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "lucide lucide-chevron-down-icon lucide-chevron-down tiptap-dropdown__button-icon"
            }, [
              Rt("path", { d: "m6 9 6 6 6-6" })
            ], -1))
          ]),
          _: 1
        }, 8, ["class", "disabled"]),
        ut(Oh, {
          "enter-active-class": "transition-enter-active",
          "enter-from-class": "transition-enter-from",
          "enter-to-class": "transition-enter-to",
          "leave-active-class": "transition-leave-active",
          "leave-from-class": "transition-leave-from",
          "leave-to-class": "transition-leave-to",
          onAfterLeave: f[0] || (f[0] = () => u("close")),
          onAfterEnter: f[1] || (f[1] = () => u("open"))
        }, {
          default: tn(() => [
            ut(at(wy), {
              ref_key: "dropdownContentRef",
              ref: i,
              class: Fe(["tiptap-dropdown__content", {
                "tiptap-dropdown__content--bottom-left": o.value === "bottom-left",
                "tiptap-dropdown__content--bottom-right": o.value === "bottom-right"
              }])
            }, {
              default: tn(() => [
                (q(!0), ot(ft, null, os(e.items, (h, p) => (q(), te(at(by), {
                  key: `item-${p}`,
                  as: "template"
                }, {
                  default: tn(() => [
                    Rt("button", {
                      class: Fe(["tiptap-dropdown__content-button", {
                        "tiptap-dropdown__content-button--active": h.isActive
                      }]),
                      onClick: h.action
                    }, [
                      h.icon ? (q(), te(Ri, {
                        key: 0,
                        icon: h.icon,
                        size: "16px"
                      }, null, 8, ["icon"])) : zt("", !0),
                      Rt("span", null, $e(h.label), 1)
                    ], 10, _y)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ky = /* @__PURE__ */ Gt({
  __name: "Stylesheets",
  props: {
    stylesheets: {}
  },
  setup(e) {
    const t = e, n = Q(null), s = Q([]), i = Q([]);
    ti(() => t.stylesheets, async (o) => {
      await Ht(), await Promise.all(o.map(async (l) => {
        s.value.includes(l) || await r(l);
      }));
    }, { immediate: !0 });
    async function r(o) {
      if (!n.value)
        throw new Error("Component ref not available");
      const l = n.value.getRootNode();
      if (!l || l.nodeType !== Node.DOCUMENT_FRAGMENT_NODE)
        throw new Error("Shadow root not found or invalid");
      const c = await fetch(o);
      if (!c.ok)
        throw new Error(`HTTP error! status: ${c.status}`);
      const a = await c.text(), u = document.createElement("style");
      u.textContent = `.tiptap { ${a} }`, u.dataset.source = o, l.appendChild(u), i.value.push(u), s.value.push(o);
    }
    return Ns(() => {
      i.value.forEach((o) => {
        o.parentNode && o.parentNode.removeChild(o);
      });
    }), (o, l) => (q(), ot("div", {
      ref_key: "componentRef",
      ref: n
    }, null, 512));
  }
}), xy = sl({
  id: ss(),
  contentCss: rl(ss()).optional(),
  plugins: rl(
    sl({
      path: ss(),
      config: Fd(
        ss(),
        Hd()
      ).optional()
    })
  ).optional(),
  enableContentDragAndDrop: il().default(!1),
  linkBrowserUrl: ss(),
  enableDebugMode: il().default(!1)
}), Sy = { key: 0 }, Cy = {
  key: 1,
  class: "tiptap-container"
}, Ey = {
  key: 0,
  class: "tiptap-toolbar"
}, Ay = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Ty = { key: 0 }, My = ["disabled", "onClick"], Dy = { class: "tiptap-sr-only" }, Oy = { key: 1 }, Ry = { class: "tiptap-bubble-menu" }, Iy = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Ny = { key: 0 }, Ly = ["disabled", "onClick"], Py = { class: "tiptap-sr-only" }, $y = { key: 5 }, By = /* @__PURE__ */ Gt({
  __name: "TipTapEditor.ce",
  props: {
    options: { type: String }
  },
  setup(e) {
    const t = e, n = y(), s = b(n), i = Q(), r = Q(), o = Q(), l = Q(), c = Q(), a = Q(!1), u = Q(0), d = Q(!1), f = Q(!1), h = Q(!1), p = Et(() => !r.value || a.value || d.value ? !1 : r.value.bubbleMenu.some((T) => T.commands.length > 0)), m = Et(() => s.filter(
      (T) => T.element.toLowerCase() === c.value?.tagName.toLowerCase()
    ));
    function y() {
      try {
        const T = JSON.parse(t.options || "{}"), B = xy.safeParse(T);
        if (!B.success)
          throw new Error(`Invalid options: ${JSON.stringify(B.error.issues)}`);
        return B.data;
      } catch (T) {
        throw new Error(`Failed to parse options: ${T.message}`);
      }
    }
    function b(T) {
      const B = T.plugins?.find((I) => I.path.endsWith("styles.js") || I.path.endsWith("styles.ts"));
      if (!B)
        return [];
      const E = Bd.safeParse(B.config);
      if (!E.success)
        throw new Error(`Invalid styles plugin config: ${JSON.stringify(E.error.issues)}`);
      return E.data.styles;
    }
    function M() {
      if (!i.value)
        throw new Error("Editor is not initialized yet.");
      if (!r.value)
        throw new Error("Configuration is not initialized yet.");
      const T = [];
      r.value.toolbar.forEach((B) => {
        B.commands.forEach((E) => {
          E.hooks && E.hooks.onEditorMounted && !T.includes(E.id) && (E.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), T.push(E.id));
        });
      }), r.value.bubbleMenu.forEach((B) => {
        B.commands.forEach((E) => {
          E.hooks && E.hooks.onEditorMounted && !T.includes(E.id) && (E.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), T.push(E.id));
        });
      });
    }
    async function N() {
      (await Promise.all(
        n.plugins?.map(async (B) => {
          const E = await import(
            /* @vite-ignore */
            B.path
          );
          if (!E.default || typeof E.default != "function")
            throw new Error(`Plugin ${B.path} does not have a default export or it is not a function.`);
          return () => E.default(B.config);
        }) ?? []
      )).forEach((B) => B());
    }
    function A(T) {
      return a.value && T.id !== "source" ? !0 : T?.status?.isDisabled?.({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) ?? !1;
    }
    function P(T) {
      return T.status && T.status.isVisible ? T.status.isVisible({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) : !0;
    }
    return an(async () => {
      await N(), r.value = Ud(), await Ht();
      const T = o.value?.assignedElements()[0];
      if (!T || !(T instanceof HTMLTextAreaElement))
        throw new Error('No textarea found in slot "content".');
      l.value = T, i.value = new bb({
        content: l.value.value,
        extensions: [
          wb.configure({
            blockquote: !1,
            bold: !1,
            italic: !1,
            undoRedo: !1,
            link: !1,
            bulletList: !1,
            orderedList: !1,
            heading: !1,
            underline: !1
          }),
          eb,
          ...r.value?.extensions ?? []
        ],
        onUpdate: () => {
          !i.value || !l.value || (a.value = hf(i.value), l.value.value = a.value ? i.value.getText() : i.value.getHTML());
        }
      }), i.value.on("parentNodeChanged", (E) => {
        if (E.tagName === "doc")
          c.value = void 0, f.value = !1;
        else if (c.value = E, E.node) {
          const I = i.value?.state.doc.firstChild;
          f.value = I === E.node;
        }
      });
      const B = i.value?.extensionManager?.extensions.find(
        (E) => E.name === "characterCount"
      );
      B && B.options.limit && (h.value = {
        characterLimit: B.options.limit
      }), M();
    }), Ns(() => i.value?.destroy()), (T, B) => (q(), ot(ft, null, [
      at(n).enableDebugMode ? (q(), ot("pre", Sy, "    isNodeFirstLine: " + $e(f.value) + `
  `, 1)) : zt("", !0),
      i.value ? (q(), ot("div", Cy, [
        r.value.toolbar.some((E) => E.commands.length > 0) ? (q(), ot("nav", Ey, [
          (q(!0), ot(ft, null, os(r.value.toolbar, (E, I) => (q(), ot(ft, {
            key: `tiptap-command-group-${I}`
          }, [
            E.commands.length > 0 ? (q(), ot("ol", Ay, [
              E.dropdown ? (q(), ot("li", Ty, [
                (q(), te(Uc, {
                  key: a.value,
                  label: E.dropdown.label,
                  "editor-dom-node": i.value.view.dom,
                  "icon-identifier": E.dropdown.iconIdentifier,
                  items: E.commands.filter(P).map((_) => ({
                    label: _.label,
                    isActive: _?.status?.isActive?.({ editor: i.value, linkBrowserUrl: at(n).linkBrowserUrl }) ?? !1,
                    isDisabled: A(_),
                    icon: _.iconIdentifier,
                    action: () => _.onExecute({ editor: i.value, linkBrowserUrl: at(n).linkBrowserUrl })
                  }))
                }, null, 8, ["label", "editor-dom-node", "icon-identifier", "items"]))
              ])) : (q(!0), ot(ft, { key: 1 }, os(E.commands, (_) => (q(), ot("li", {
                key: `tiptap-group-${E.id}-command-${_.id}`
              }, [
                P(_) ? (q(), ot("button", {
                  key: a.value,
                  class: Fe(["tiptap-toolbar__group-command", {
                    "is-active": _?.status?.isActive?.({ editor: i.value, linkBrowserUrl: at(n).linkBrowserUrl }) ?? !1
                  }]),
                  disabled: A(_),
                  onClick: (U) => _.onExecute({ editor: i.value, linkBrowserUrl: at(n).linkBrowserUrl })
                }, [
                  Rt("span", Dy, $e(_.label), 1),
                  ut(Ri, {
                    icon: _.iconIdentifier,
                    size: "16px"
                  }, null, 8, ["icon"])
                ], 10, My)) : zt("", !0)
              ]))), 128))
            ])) : zt("", !0)
          ], 64))), 128))
        ])) : zt("", !0),
        r.value && p.value ? (q(), ot("nav", Oy, [
          ut(at(Rb), {
            editor: i.value,
            options: {
              onHide: () => u.value += 1
            }
          }, {
            default: tn(() => [
              Rt("div", Ry, [
                (q(!0), ot(ft, null, os(r.value.bubbleMenu, (E, I) => (q(), ot(ft, {
                  key: `tiptap-command-group-${I}`
                }, [
                  E.commands.some((_) => !A(_)) ? (q(), ot("ol", Iy, [
                    E.dropdown ? (q(), ot("li", Ny, [
                      (q(), te(Uc, {
                        key: `${a.value}-${u.value}`,
                        label: E.dropdown.label,
                        "icon-identifier": E.dropdown.iconIdentifier,
                        "editor-dom-node": i.value.view.dom,
                        items: E.commands.filter(P).map((_) => ({
                          label: _.label,
                          isActive: _?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: at(n).linkBrowserUrl
                          }) ?? !1,
                          isDisabled: A(_),
                          icon: _.iconIdentifier,
                          action: () => _.onExecute({
                            editor: i.value,
                            linkBrowserUrl: at(n).linkBrowserUrl
                          })
                        }))
                      }, null, 8, ["label", "icon-identifier", "editor-dom-node", "items"]))
                    ])) : (q(!0), ot(ft, { key: 1 }, os(E.commands, (_) => (q(), ot("li", {
                      key: `tiptap-group-${E.id}-command-${_.id}`
                    }, [
                      P(_) ? (q(), ot("button", {
                        key: a.value,
                        class: Fe(["tiptap-toolbar__group-command", {
                          "is-active": _?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: at(n).linkBrowserUrl
                          }) ?? !1
                        }]),
                        disabled: A(_),
                        onClick: (U) => _.onExecute({
                          editor: i.value,
                          linkBrowserUrl: at(n).linkBrowserUrl
                        })
                      }, [
                        Rt("span", Py, $e(_.label), 1),
                        ut(Ri, {
                          icon: _.iconIdentifier,
                          size: "16px"
                        }, null, 8, ["icon"])
                      ], 10, Ly)) : zt("", !0)
                    ]))), 128))
                  ])) : zt("", !0)
                ], 64))), 128))
              ])
            ]),
            _: 1
          }, 8, ["editor", "options"])
        ])) : zt("", !0),
        at(n).enableContentDragAndDrop ? (q(), te(at(O0), {
          key: 2,
          editor: i.value
        }, {
          default: tn(() => [...B[0] || (B[0] = [
            Rt("div", { class: "custom-drag-handle" }, null, -1)
          ])]),
          _: 1
        }, 8, ["editor"])) : zt("", !0),
        ut(at(yb), {
          editor: i.value,
          class: Fe([{
            "pl-9": at(n).enableContentDragAndDrop
          }, "tiptap-editor-content"])
        }, null, 8, ["editor", "class"]),
        h.value ? (q(), te(Lb, {
          key: 3,
          editor: i.value,
          limit: h.value.characterLimit
        }, null, 8, ["editor", "limit"])) : zt("", !0),
        at(n) && at(n).contentCss ? (q(), te(ky, {
          key: 4,
          stylesheets: at(n).contentCss
        }, null, 8, ["stylesheets"])) : zt("", !0),
        at(n).enableDebugMode ? (q(), ot("pre", $y, $e(m.value), 1)) : zt("", !0)
      ])) : zt("", !0),
      Pf(T.$slots, "default", {
        ref_key: "slotRef",
        ref: o
      })
    ], 64));
  }
}), Fy = '@charset "UTF-8";.tiptap-container{--tiptap-color-primary: light-dark(hsl(220deg 90% 56%), hsl(220deg 90% 66%));--tiptap-color-neutral-white: hsl(0deg 0% 100%);--tiptap-color-neutral-10: hsl(0deg 0% 10%);--tiptap-color-neutral-20: hsl(0deg 0% 20%);--tiptap-color-neutral-40: hsl(0deg 0% 40%);--tiptap-color-neutral-80: hsl(0deg 0% 80%);--tiptap-color-neutral-90: hsl(0deg 0% 90%);--tiptap-color-surface: light-dark(var(--tiptap-color-neutral-white), var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-surface-border: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-text-subtle: light-dark(var(--tiptap-color-neutral-40), var(--tiptap-color-neutral-80));--tiptap-border-radius: .7rem;--tiptap-border-radius-inner-gap: .25rem;--tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap: .25rem;--tiptap-box-shadow: 0 .1rem .3rem rgb(0 0 0 / .1);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){padding:0;color:inherit;background-color:transparent;border:none}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(black,white)}.tiptap{padding:3rem;min-block-size:20rem;outline:none}.tiptap>:first-child{margin-block-start:0}.tiptap-editor-content{overflow:hidden;position:relative}.tiptap-toolbar{display:flex;flex-wrap:wrap;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-surface-border)}.tiptap-toolbar__group{display:flex;flex-wrap:wrap;gap:var(--tiptap-toolbar-gap);margin:0;padding:0;list-style:none}.tiptap-toolbar__group:not(:last-child){margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap);border-inline-end:1px solid var(--tiptap-color-surface-border)}.tiptap-toolbar__group-command{padding:.5rem;border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1/1;block-size:100%;transition:ease .15s;transition-property:background-color,color,transform}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl,var(--tiptap-color-surface-highlight) 50%,transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{inline-size:100%;block-size:100%}.tiptap-bubble-menu{display:flex;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap);margin-inline:1rem}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation: 0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation: 180deg}.tiptap-dropdown__button{display:inline-flex;align-items:center;justify-content:space-between;padding:.5rem;background-color:transparent;gap:.25rem;border:none;cursor:pointer;transition:color .2s ease-in-out,transform .1s ease-in-out}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size: .9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:center;transition:transform .2s ease-in-out}.tiptap-dropdown__content{display:grid;position:absolute;padding-block:.25rem;background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{inset-inline-start:0;transform-origin:top left}.tiptap-dropdown__content--bottom-right{inset-inline-end:0;transform-origin:top right}.tiptap-dropdown__content-button{display:flex;align-items:center;padding:.5rem 1rem;gap:.5rem;cursor:pointer}.tiptap-dropdown__content-button>*{flex-shrink:0;text-wrap:nowrap}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection *::selection{background:transparent}.ProseMirror-noderangeselection *{caret-color:transparent}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{position:absolute;pointer-events:none;z-index:-1;content:"";inset:-.25rem;background-color:#70cff850;border-radius:.2rem}.custom-drag-handle:after{display:flex;align-items:center;justify-content:center;width:1rem;height:1.25rem;margin-inline-end:.5rem;padding:.25rem .1rem;content:"⠿";font-weight:700;cursor:grab;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;transition:background-color .2s ease-in-out}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:1.25rem}.transition-dropdown{--scale: 1;--translate-y: 0;--opacity: 1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale: .95;--opacity: 1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale: 1;--opacity: 1}.transition-dropdown-leave-to{--scale: .95;--opacity: 0}.tiptap-character-count{align-items:center;color:var(--tiptap-color-text-subtle);display:flex;font-size:.75rem;gap:.5rem;margin:1.25rem .75rem}.tiptap-character-count svg{color:var(--token-color-orange-40)}.tiptap-character-count--warning,.tiptap-character-count--warning svg{color:var(--bs-danger)}', Hy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Uy = /* @__PURE__ */ Hy(By, [["styles", [Fy]]]), Vy = /* @__PURE__ */ Qh(Uy);
customElements.define("editor-tiptap", Vy);
export {
  uv as CommandManager,
  Jd as Editor,
  dv as Extendable,
  Os as Extension,
  fv as Fragment,
  hv as InputRule,
  Zc as Mark,
  pv as MarkView,
  Jn as Node,
  gv as NodePos,
  mv as NodeView,
  wv as PasteRule,
  bv as ResizableNodeView,
  yv as ResizableNodeview,
  vv as Tracker,
  _v as callOrReturn,
  Kd as canInsertNode,
  kv as combineTransactionSteps,
  xv as commands,
  Sv as createAtomBlockMarkdownSpec,
  Cv as createBlockMarkdownSpec,
  Ev as createChainableState,
  Av as createDocument,
  Tv as createElement,
  Mv as createInlineMarkdownSpec,
  Dv as createNodeFromContent,
  Ov as createStyleTag,
  Rv as defaultBlockAt,
  lv as defineTipTapPlugin,
  Iv as deleteProps,
  Nv as elementFromString,
  Lv as escapeForRegEx,
  Pv as extensions,
  $v as findChildren,
  Bv as findChildrenInRange,
  Fv as findDuplicates,
  Hv as findParentNode,
  Uv as findParentNodeClosestToPos,
  Vv as flattenExtensions,
  jv as fromString,
  zv as generateHTML,
  Wv as generateJSON,
  Kv as generateText,
  qv as getAttributes,
  Jv as getAttributesFromExtensions,
  Yv as getChangedRanges,
  Gv as getDebugJSON,
  Xv as getExtensionField,
  Qv as getHTMLFromFragment,
  Zv as getMarkAttributes,
  t1 as getMarkRange,
  e1 as getMarkType,
  n1 as getMarksBetween,
  s1 as getNodeAtPosition,
  i1 as getNodeAttributes,
  r1 as getNodeType,
  o1 as getRenderedAttributes,
  l1 as getSchema,
  c1 as getSchemaByResolvedExtensions,
  a1 as getSchemaTypeByName,
  u1 as getSchemaTypeNameByName,
  d1 as getSplittedAttributes,
  f1 as getText,
  h1 as getTextBetween,
  p1 as getTextContentFromNodes,
  g1 as getTextSerializersFromSchema,
  m1 as h,
  w1 as injectExtensionAttributesToParseRule,
  b1 as inputRulesPlugin,
  y1 as isActive,
  v1 as isAndroid,
  _1 as isAtEndOfNode,
  k1 as isAtStartOfNode,
  x1 as isEmptyObject,
  S1 as isExtensionRulesEnabled,
  C1 as isFunction,
  E1 as isList,
  A1 as isMacOS,
  T1 as isMarkActive,
  M1 as isNodeActive,
  D1 as isNodeEmpty,
  qd as isNodeSelection,
  O1 as isNumber,
  R1 as isPlainObject,
  I1 as isRegExp,
  N1 as isString,
  Gd as isTextSelection,
  L1 as isiOS,
  ea as markInputRule,
  ta as markPasteRule,
  P1 as markdown,
  qn as mergeAttributes,
  $1 as mergeDeep,
  B1 as minMax,
  Wd as nodeInputRule,
  F1 as nodePasteRule,
  H1 as objectIncludes,
  U1 as parseAttributes,
  V1 as parseIndentedBlocks,
  cv as parseTipTapPluginYamlConfiguration,
  j1 as pasteRulesPlugin,
  Xd as posToDOMRect,
  z1 as removeDuplicates,
  W1 as renderNestedMarkdownContent,
  K1 as resolveExtensions,
  q1 as resolveFocusPosition,
  J1 as rewriteUnknownContent,
  Y1 as selectionToInsertionEnd,
  G1 as serializeAttributes,
  X1 as sortExtensions,
  Q1 as splitExtensions,
  ht as textInputRule,
  Z1 as textPasteRule,
  ll as textblockTypeInputRule,
  t_ as updateMarkViewAttributes,
  e_ as wrappingInputRule
};
