import { e as wt, i as J, a as xt, n as en, b as Pt, c as Yc, d as q, f as hi, g as Pi, h as pi, j as $i, N as $e, k as Gc, p as Xc, m as Qc, l as Zc, E as rt, t as Bi, o as ao, q as st, r as ta, s as In, u as Fd, R as Hd, v as us, w as Ud, x as Rt, y as Vd, z as uo, A as Xt, B as jd, C as zd, D as ea, G as fr, H as Wd, I as Kd, J as _n, K as xn, L as qd, M as Jd, O as Yd, P as Gd, Q as Xd, S as Qd, T as rl, U as na, V as hr, W as sa, X as ct, Y as Io, Z as Zd, _ as ia, $ as Q, a0 as tf, a1 as gn, a2 as ef } from "./styles-CDw1qn-h.js";
import { o as ll, b as cl, s as os, a as al, r as nf, u as sf, g as of } from "./configuration-DkMIcjSq.js";
import { d as pv, p as gv } from "./configuration-DkMIcjSq.js";
import { P as cn, a as qt, S as Pe, F as bn, T as Be, A as rf, N as pr, E as An, b as ne, D as ul, c as lf, d as cf, e as oa, t as ht, M as ra, m as la, f as ca, g as Yn, h as Gn, i as dl, n as af, j as uf, k as df, l as ff, o as hf, p as pf, q as aa, r as gf, s as mf } from "./index-CXcNTZf2.js";
import { C as wv, u as bv, I as yv, v as vv, w as _v, x as xv, y as kv, z as Sv, B as Cv, G as Ev, H as Av, J as Tv, K as Mv, L as Ov, O as Dv, Q as Iv, R as Rv, U as Lv, V as Nv, W as Pv, X as $v, Y as Bv, Z as Fv, _ as Hv, $ as Uv, a0 as Vv, a1 as jv, a2 as zv, a3 as Wv, a4 as Kv, a5 as qv, a6 as Jv, a7 as Yv, a8 as Gv, a9 as Xv, aa as Qv, ab as Zv, ac as t1, ad as e1, ae as n1, af as s1, ag as i1, ah as o1, ai as r1, aj as l1, ak as c1, al as a1, am as u1, an as d1, ao as f1, ap as h1, K as p1, aq as g1, ar as m1, as as w1, at as b1, au as y1, av as v1, aw as _1, ax as x1, ay as k1, az as S1, aA as C1, aB as E1, aC as A1, aD as T1, aE as M1, aF as O1, aG as D1, aH as I1, aI as R1, aJ as L1, aK as N1, aL as P1, aM as $1, aN as B1, aO as F1, aP as H1, aQ as U1, aR as V1, aS as j1, aT as z1, aU as W1, aV as K1, aW as q1, aX as J1 } from "./index-CXcNTZf2.js";
import { B as wf } from "./index-CpZ9N0IL.js";
import { B as bf } from "./index--CKuz1_C.js";
import { H as yf } from "./index-BqG27bAl.js";
import { I as vf } from "./index-C8aph3tX.js";
import { L as _f } from "./index-DB0IANgP.js";
import { B as xf, L as kf, a as Sf, O as Cf } from "./index-DdYLZdgi.js";
import { U as Ef } from "./index-D8PUHorB.js";
import { D as Af, G as Tf, U as Mf, T as Of } from "./index-ptUyMZsh.js";
import { getEditorSourceViewActiveStatus as Df } from "./plugins/source.js";
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ls(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Fi(i, t, n);
  }
}
function ue(e, t, n, s) {
  if (J(e)) {
    const i = Ls(e, t, n, s);
    return i && Zc(i) && i.catch((o) => {
      Fi(o, t, n);
    }), i;
  }
  if (q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ue(e[o], t, n, s));
    return i;
  }
}
function Fi(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || rt;
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
    if (o) {
      _n(), Ls(o, null, 10, [
        e,
        c,
        a
      ]), xn();
      return;
    }
  }
  If(e, n, i, s, r);
}
function If(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ot = [];
let xe = -1;
const Rn = [];
let Ge = null, Dn = 0;
const ua = /* @__PURE__ */ Promise.resolve();
let gi = null;
function Zt(e) {
  const t = gi || ua;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rf(e) {
  let t = xe + 1, n = Ot.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ot[s], o = ms(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function gr(e) {
  if (!(e.flags & 1)) {
    const t = ms(e), n = Ot[Ot.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ms(n) ? Ot.push(e) : Ot.splice(Rf(t), 0, e), e.flags |= 1, da();
  }
}
function da() {
  gi || (gi = ua.then(ha));
}
function Lf(e) {
  q(e) ? Rn.push(...e) : Ge && e.id === -1 ? Ge.splice(Dn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1), da();
}
function fl(e, t, n = xe + 1) {
  for (; n < Ot.length; n++) {
    const s = Ot[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ot.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function fa(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)].sort(
      (n, s) => ms(n) - ms(s)
    );
    if (Rn.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, Dn = 0; Dn < Ge.length; Dn++) {
      const n = Ge[Dn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ge = null, Dn = 0;
  }
}
const ms = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ha(e) {
  try {
    for (xe = 0; xe < Ot.length; xe++) {
      const t = Ot[xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ls(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xe < Ot.length; xe++) {
      const t = Ot[xe];
      t && (t.flags &= -2);
    }
    xe = -1, Ot.length = 0, fa(), gi = null, (Ot.length || Rn.length) && ha();
  }
}
let It = null, pa = null;
function mi(e) {
  const t = It;
  return It = e, pa = e && e.type.__scopeId || null, t;
}
function Qe(e, t = It, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && yi(-1);
    const o = mi(t);
    let r;
    try {
      r = e(...i);
    } finally {
      mi(o), s._d && yi(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function dn(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let c = l.dir[s];
    c && (_n(), ue(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), xn());
  }
}
const ga = Symbol("_vte"), ma = (e) => e.__isTeleport, ds = (e) => e && (e.disabled || e.disabled === ""), hl = (e) => e && (e.defer || e.defer === ""), pl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ro = (e, t) => {
  const n = e && e.to;
  return xt(n) ? t ? t(n) : null : n;
}, wa = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, i, o, r, l, c, a) {
    const {
      mc: u,
      pc: d,
      pbc: f,
      o: { insert: h, querySelector: p, createText: m, createComment: y }
    } = a, b = ds(t.props);
    let { shapeFlag: T, children: N, dynamicChildren: S } = t;
    if (e == null) {
      const L = t.el = m(""), D = t.anchor = m("");
      h(L, n, s), h(D, n, s);
      const $ = (M, _) => {
        T & 16 && u(
          N,
          M,
          _,
          i,
          o,
          r,
          l,
          c
        );
      }, C = () => {
        const M = t.target = Ro(t.props, p), _ = ba(M, t, m, h);
        M && (r !== "svg" && pl(M) ? r = "svg" : r !== "mathml" && gl(M) && (r = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(M), b || ($(M, _), ni(t, !1)));
      };
      b && ($(n, D), ni(t, !0)), hl(t.props) ? (t.el.__isMounted = !1, Mt(() => {
        C(), delete t.el.__isMounted;
      }, o)) : C();
    } else {
      if (hl(t.props) && e.el.__isMounted === !1) {
        Mt(() => {
          wa.process(
            e,
            t,
            n,
            s,
            i,
            o,
            r,
            l,
            c,
            a
          );
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const L = t.anchor = e.anchor, D = t.target = e.target, $ = t.targetAnchor = e.targetAnchor, C = ds(e.props), M = C ? n : D, _ = C ? L : $;
      if (r === "svg" || pl(D) ? r = "svg" : (r === "mathml" || gl(D)) && (r = "mathml"), S ? (f(
        e.dynamicChildren,
        S,
        M,
        i,
        o,
        r,
        l
      ), yr(e, t, !0)) : c || d(
        e,
        t,
        M,
        _,
        i,
        o,
        r,
        l,
        !1
      ), b)
        C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zs(
          t,
          n,
          L,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = Ro(
          t.props,
          p
        );
        F && zs(
          t,
          F,
          null,
          a,
          0
        );
      } else C && zs(
        t,
        D,
        $,
        a,
        1
      );
      ni(t, b);
    }
  },
  remove(e, t, n, { um: s, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: l,
      anchor: c,
      targetStart: a,
      targetAnchor: u,
      target: d,
      props: f
    } = e;
    if (d && (i(a), i(u)), o && i(c), r & 16) {
      const h = o || !ds(f);
      for (let p = 0; p < l.length; p++) {
        const m = l[p];
        s(
          m,
          t,
          n,
          h,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: zs,
  hydrate: Nf
};
function zs(e, t, n, { o: { insert: s }, m: i }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: c, children: a, props: u } = e, d = o === 2;
  if (d && s(r, t, n), (!d || ds(u)) && c & 16)
    for (let f = 0; f < a.length; f++)
      i(
        a[f],
        t,
        n,
        2
      );
  d && s(l, t, n);
}
function Nf(e, t, n, s, i, o, {
  o: { nextSibling: r, parentNode: l, querySelector: c, insert: a, createText: u }
}, d) {
  function f(m, y, b, T) {
    y.anchor = d(
      r(m),
      y,
      l(m),
      n,
      s,
      i,
      o
    ), y.targetStart = b, y.targetAnchor = T;
  }
  const h = t.target = Ro(
    t.props,
    c
  ), p = ds(t.props);
  if (h) {
    const m = h._lpa || h.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        f(
          e,
          t,
          m,
          m && r(m)
        );
      else {
        t.anchor = r(e);
        let y = m;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, h._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          y = r(y);
        }
        t.targetAnchor || ba(h, t, u, a), d(
          m && r(m),
          t,
          h,
          n,
          s,
          i,
          o
        );
      }
    ni(t, p);
  } else p && t.shapeFlag & 16 && f(e, t, e, r(e));
  return t.anchor && r(t.anchor);
}
const Pf = wa;
function ni(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, i;
    for (t ? (s = e.el, i = e.anchor) : (s = e.targetStart, i = e.targetAnchor); s && s !== i; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ba(e, t, n, s) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[ga] = o, e && (s(i, e), s(o, e)), o;
}
const Le = Symbol("_leaveCb"), Ws = Symbol("_enterCb");
function $f() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), Ns(() => {
    e.isUnmounting = !0;
  }), e;
}
const Jt = [Function, Array], ya = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Jt,
  onEnter: Jt,
  onAfterEnter: Jt,
  onEnterCancelled: Jt,
  // leave
  onBeforeLeave: Jt,
  onLeave: Jt,
  onAfterLeave: Jt,
  onLeaveCancelled: Jt,
  // appear
  onBeforeAppear: Jt,
  onAppear: Jt,
  onAfterAppear: Jt,
  onAppearCancelled: Jt
}, va = (e) => {
  const t = e.subTree;
  return t.component ? va(t.component) : t;
}, Bf = {
  name: "BaseTransition",
  props: ya,
  setup(e, { slots: t }) {
    const n = zi(), s = $f();
    return () => {
      const i = t.default && ka(t.default(), !0);
      if (!i || !i.length)
        return;
      const o = _a(i), r = Bi(e), { mode: l } = r;
      if (s.isLeaving)
        return fo(o);
      const c = ml(o);
      if (!c)
        return fo(o);
      let a = Lo(
        c,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => a = d
      );
      c.type !== St && ws(c, a);
      let u = n.subTree && ml(n.subTree);
      if (u && u.type !== St && !mn(u, c) && va(n).type !== St) {
        let d = Lo(
          u,
          r,
          s,
          n
        );
        if (ws(u, d), l === "out-in" && c.type !== St)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, fo(o);
        l === "in-out" && c.type !== St ? d.delayLeave = (f, h, p) => {
          const m = xa(
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
      return o;
    };
  }
};
function _a(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== St) {
        t = n;
        break;
      }
  }
  return t;
}
const Ff = Bf;
function xa(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Lo(e, t, n, s, i) {
  const {
    appear: o,
    mode: r,
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
    onAfterAppear: T,
    onAppearCancelled: N
  } = t, S = String(e.key), L = xa(n, e), D = (M, _) => {
    M && ue(
      M,
      s,
      9,
      _
    );
  }, $ = (M, _) => {
    const F = _[1];
    D(M, _), q(M) ? M.every((I) => I.length <= 1) && F() : M.length <= 1 && F();
  }, C = {
    mode: r,
    persisted: l,
    beforeEnter(M) {
      let _ = c;
      if (!n.isMounted)
        if (o)
          _ = y || c;
        else
          return;
      M[Le] && M[Le](
        !0
        /* cancelled */
      );
      const F = L[S];
      F && mn(e, F) && F.el[Le] && F.el[Le](), D(_, [M]);
    },
    enter(M) {
      let _ = a, F = u, I = d;
      if (!n.isMounted)
        if (o)
          _ = b || a, F = T || u, I = N || d;
        else
          return;
      let z = !1;
      const Y = M[Ws] = (pt) => {
        z || (z = !0, pt ? D(I, [M]) : D(F, [M]), C.delayedLeave && C.delayedLeave(), M[Ws] = void 0);
      };
      _ ? $(_, [M, Y]) : Y();
    },
    leave(M, _) {
      const F = String(e.key);
      if (M[Ws] && M[Ws](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return _();
      D(f, [M]);
      let I = !1;
      const z = M[Le] = (Y) => {
        I || (I = !0, _(), Y ? D(m, [M]) : D(p, [M]), M[Le] = void 0, L[F] === e && delete L[F]);
      };
      L[F] = e, h ? $(h, [M, z]) : z();
    },
    clone(M) {
      const _ = Lo(
        M,
        t,
        n,
        s,
        i
      );
      return i && i(_), _;
    }
  };
  return C;
}
function fo(e) {
  if (Hi(e))
    return e = Ue(e), e.children = null, e;
}
function ml(e) {
  if (!Hi(e))
    return ma(e.type) && e.children ? _a(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && J(n.default))
      return n.default();
  }
}
function ws(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ws(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ka(e, t = !1, n) {
  let s = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === ft ? (r.patchFlag & 128 && i++, s = s.concat(
      ka(r.children, t, l)
    )) : (t || r.type !== St) && s.push(l != null ? Ue(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hf() {
  const e = zi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Sa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const wi = /* @__PURE__ */ new WeakMap();
function fs(e, t, n, s, i = !1) {
  if (q(e)) {
    e.forEach(
      (p, m) => fs(
        p,
        t && (q(t) ? t[m] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Ln(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fs(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? xr(s.component) : s.el, r = i ? null : o, { i: l, r: c } = e, a = t && t.r, u = l.refs === rt ? l.refs = {} : l.refs, d = l.setupState, f = Bi(d), h = d === rt ? Gc : (p) => st(f, p);
  if (a != null && a !== c) {
    if (wl(t), xt(a))
      u[a] = null, h(a) && (d[a] = null);
    else if (pi(a)) {
      a.value = null;
      const p = t;
      p.k && (u[p.k] = null);
    }
  }
  if (J(c))
    Ls(c, l, 12, [r, u]);
  else {
    const p = xt(c), m = pi(c);
    if (p || m) {
      const y = () => {
        if (e.f) {
          const b = p ? h(c) ? d[c] : u[c] : c.value;
          if (i)
            q(b) && ta(b, o);
          else if (q(b))
            b.includes(o) || b.push(o);
          else if (p)
            u[c] = [o], h(c) && (d[c] = u[c]);
          else {
            const T = [o];
            c.value = T, e.k && (u[e.k] = T);
          }
        } else p ? (u[c] = r, h(c) && (d[c] = r)) : m && (c.value = r, e.k && (u[e.k] = r));
      };
      if (r) {
        const b = () => {
          y(), wi.delete(e);
        };
        b.id = -1, wi.set(e, b), Mt(b, n);
      } else
        wl(e), y();
    }
  }
}
function wl(e) {
  const t = wi.get(e);
  t && (t.flags |= 8, wi.delete(e));
}
$i().requestIdleCallback;
$i().cancelIdleCallback;
const Ln = (e) => !!e.type.__asyncLoader, Hi = (e) => e.type.__isKeepAlive;
function Uf(e, t) {
  Ca(e, "a", t);
}
function Vf(e, t) {
  Ca(e, "da", t);
}
function Ca(e, t, n = Ct) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ui(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Hi(i.parent.vnode) && jf(s, t, n, i), i = i.parent;
  }
}
function jf(e, t, n, s) {
  const i = Ui(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ps(() => {
    ta(s[t], i);
  }, n);
}
function Ui(e, t, n = Ct, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      _n();
      const l = $s(n), c = ue(t, n, e, r);
      return l(), xn(), c;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const je = (e) => (t, n = Ct) => {
  (!vs || e === "sp") && Ui(e, (...s) => t(...s), n);
}, zf = je("bm"), an = je("m"), Wf = je(
  "bu"
), Kf = je("u"), Ns = je(
  "bum"
), Ps = je("um"), qf = je(
  "sp"
), Jf = je("rtg"), Yf = je("rtc");
function Gf(e, t = Ct) {
  Ui("ec", e, t);
}
const Xf = "components", Qf = Symbol.for("v-ndc");
function Zf(e) {
  return xt(e) && th(Xf, e, !1) || e;
}
function th(e, t, n = !0, s = !1) {
  const i = It || Ct;
  if (i) {
    const o = i.type;
    {
      const l = jh(
        o,
        !1
      );
      if (l && (l === t || l === Rt(t) || l === hr(Rt(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      bl(i[e] || o[e], t) || // global registration
      bl(i.appContext[e], t)
    );
    return !r && s ? o : r;
  }
}
function bl(e, t) {
  return e && (e[t] || e[Rt(t)] || e[hr(Rt(t))]);
}
function cs(e, t, n, s) {
  let i;
  const o = n, r = q(e);
  if (r || xt(e)) {
    const l = r && Jd(e);
    let c = !1, a = !1;
    l && (c = !Yd(e), a = Gd(e), e = Xd(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        c ? a ? Qd(rl(e[u])) : rl(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (Pt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const u = l[c];
        i[c] = t(e[u], u, c, o);
      }
    }
  else
    i = [];
  return i;
}
function eh(e, t, n = {}, s, i) {
  if (It.ce || It.parent && Ln(It.parent) && It.parent.ce) {
    const a = Object.keys(n).length > 0;
    return X(), oe(
      ft,
      null,
      [ut("slot", n, s)],
      a ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1), X();
  const r = o && Ea(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, c = oe(
    ft,
    {
      key: (l && !na(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || [],
    r && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function Ea(e) {
  return e.some((t) => ys(t) ? !(t.type === St || t.type === ft && !Ea(t.children)) : !0) ? e : null;
}
const No = (e) => e ? za(e) ? xr(e) : No(e.parent) : null, hs = (
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
    $parent: (e) => No(e.parent),
    $root: (e) => No(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ta(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      gr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zt.bind(e.proxy)),
    $watch: (e) => xh.bind(e)
  })
), ho = (e, t) => e !== rt && !e.__isScriptSetup && st(e, t), nh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: l, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const h = r[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ho(s, t))
          return r[t] = 1, s[t];
        if (i !== rt && st(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && st(a, t)
        )
          return r[t] = 3, o[t];
        if (n !== rt && st(n, t))
          return r[t] = 4, n[t];
        Po && (r[t] = 0);
      }
    }
    const u = hs[t];
    let d, f;
    if (u)
      return t === "$attrs" && ea(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== rt && st(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      f = c.config.globalProperties, st(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return ho(i, t) ? (i[t] = n, !0) : s !== rt && st(s, t) ? (s[t] = n, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o, type: r }
  }, l) {
    let c, a;
    return !!(n[l] || e !== rt && l[0] !== "$" && st(e, l) || ho(t, l) || (c = o[0]) && st(c, l) || st(s, l) || st(hs, l) || st(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yl(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Po = !0;
function sh(e) {
  const t = Ta(e), n = e.proxy, s = e.ctx;
  Po = !1, t.beforeCreate && vl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
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
    beforeUnmount: T,
    destroyed: N,
    unmounted: S,
    render: L,
    renderTracked: D,
    renderTriggered: $,
    errorCaptured: C,
    serverPrefetch: M,
    // public API
    expose: _,
    inheritAttrs: F,
    // assets
    components: I,
    directives: z,
    filters: Y
  } = t;
  if (a && ih(a, s, null), r)
    for (const K in r) {
      const j = r[K];
      J(j) && (s[K] = j.bind(n));
    }
  if (i) {
    const K = i.call(n, n);
    Pt(K) && (e.data = Kd(K));
  }
  if (Po = !0, o)
    for (const K in o) {
      const j = o[K], kt = J(j) ? j.bind(n, n) : J(j.get) ? j.get.bind(n, n) : $e, On = !J(j) && J(j.set) ? j.set.bind(n) : $e, un = Lt({
        get: kt,
        set: On
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
      Aa(l[K], s, n, K);
  if (c) {
    const K = J(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((j) => {
      mr(j, K[j]);
    });
  }
  u && vl(u, e, "c");
  function tt(K, j) {
    q(j) ? j.forEach((kt) => K(kt.bind(n))) : j && K(j.bind(n));
  }
  if (tt(zf, d), tt(an, f), tt(Wf, h), tt(Kf, p), tt(Uf, m), tt(Vf, y), tt(Gf, C), tt(Yf, D), tt(Jf, $), tt(Ns, T), tt(Ps, S), tt(qf, M), q(_))
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
  L && e.render === $e && (e.render = L), F != null && (e.inheritAttrs = F), I && (e.components = I), z && (e.directives = z), M && Sa(e);
}
function ih(e, t, n = $e) {
  q(e) && (e = $o(e));
  for (const s in e) {
    const i = e[s];
    let o;
    Pt(i) ? "default" in i ? o = yn(
      i.from || s,
      i.default,
      !0
    ) : o = yn(i.from || s) : o = yn(i), pi(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[s] = o;
  }
}
function vl(e, t, n) {
  ue(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Aa(e, t, n, s) {
  let i = s.includes(".") ? Fa(n, s) : () => n[s];
  if (xt(e)) {
    const o = t[e];
    J(o) && si(i, o);
  } else if (J(e))
    si(i, e.bind(n));
  else if (Pt(e))
    if (q(e))
      e.forEach((o) => Aa(o, t, n, s));
    else {
      const o = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(o) && si(i, o, e);
    }
}
function Ta(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (a) => bi(c, a, r, !0)
  ), bi(c, t, r)), Pt(t) && o.set(t, c), c;
}
function bi(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && bi(e, o, n, !0), i && i.forEach(
    (r) => bi(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = oh[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const oh = {
  data: _l,
  props: xl,
  emits: xl,
  // objects
  methods: as,
  computed: as,
  // lifecycle
  beforeCreate: Tt,
  created: Tt,
  beforeMount: Tt,
  mounted: Tt,
  beforeUpdate: Tt,
  updated: Tt,
  beforeDestroy: Tt,
  beforeUnmount: Tt,
  destroyed: Tt,
  unmounted: Tt,
  activated: Tt,
  deactivated: Tt,
  errorCaptured: Tt,
  serverPrefetch: Tt,
  // assets
  components: as,
  directives: as,
  // watch
  watch: lh,
  // provide / inject
  provide: _l,
  inject: rh
};
function _l(e, t) {
  return t ? e ? function() {
    return wt(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function rh(e, t) {
  return as($o(e), $o(t));
}
function $o(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function as(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xl(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    yl(e),
    yl(t ?? {})
  ) : t;
}
function lh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Tt(e[s], t[s]);
  return n;
}
function Ma() {
  return {
    app: null,
    config: {
      isNativeTag: Gc,
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
let ch = 0;
function ah(e, t) {
  return function(s, i = null) {
    J(s) || (s = wt({}, s)), i != null && !Pt(i) && (i = null);
    const o = Ma(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const a = o.app = {
      _uid: ch++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Wh,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return r.has(u) || (u && J(u.install) ? (r.add(u), u.install(a, ...d)) : J(u) && (r.add(u), u(a, ...d))), a;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), a;
      },
      component(u, d) {
        return d ? (o.components[u] = d, a) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, a) : o.directives[u];
      },
      mount(u, d, f) {
        if (!c) {
          const h = a._ceVNode || ut(s, i);
          return h.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, u, f), c = !0, a._container = u, u.__vue_app__ = a, xr(h.component);
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
        return o.provides[u] = d, a;
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
function mr(e, t) {
  if (Ct) {
    let n = Ct.provides;
    const s = Ct.parent && Ct.parent.provides;
    s === n && (n = Ct.provides = Object.create(s)), n[e] = t;
  }
}
function yn(e, t, n = !1) {
  const s = zi();
  if (s || Nn) {
    let i = Nn ? Nn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
const Oa = {}, Da = () => Object.create(Oa), Ia = (e) => Object.getPrototypeOf(e) === Oa;
function uh(e, t, n, s = !1) {
  const i = {}, o = Da();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ra(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : jd(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function dh(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = Bi(i), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Vi(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (c)
          if (st(o, f))
            h !== o[f] && (o[f] = h, a = !0);
          else {
            const p = Rt(f);
            i[p] = Bo(
              c,
              l,
              p,
              h,
              e,
              !1
            );
          }
        else
          h !== o[f] && (o[f] = h, a = !0);
      }
    }
  } else {
    Ra(e, t, i, o) && (a = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Xt(d)) === d || !st(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Bo(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== l)
      for (const d in o)
        (!t || !st(t, d)) && (delete o[d], a = !0);
  }
  a && Wd(e.attrs, "set", "");
}
function Ra(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (us(c))
        continue;
      const a = t[c];
      let u;
      i && st(i, u = Rt(c)) ? !o || !o.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : Vi(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, r = !0);
    }
  if (o) {
    const c = Bi(n), a = l || rt;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Bo(
        i,
        c,
        d,
        a[d],
        e,
        !st(a, d)
      );
    }
  }
  return r;
}
function Bo(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = st(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && J(c)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const u = $s(i);
          s = a[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Xt(n)) && (s = !0));
  }
  return s;
}
const fh = /* @__PURE__ */ new WeakMap();
function La(e, t, n = !1) {
  const s = n ? fh : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let c = !1;
  if (!J(e)) {
    const u = (d) => {
      c = !0;
      const [f, h] = La(d, t, !0);
      wt(r, f), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c)
    return Pt(e) && s.set(e, In), In;
  if (q(o))
    for (let u = 0; u < o.length; u++) {
      const d = Rt(o[u]);
      kl(d) && (r[d] = rt);
    }
  else if (o)
    for (const u in o) {
      const d = Rt(u);
      if (kl(d)) {
        const f = o[u], h = r[d] = q(f) || J(f) ? { type: f } : wt({}, f), p = h.type;
        let m = !1, y = !0;
        if (q(p))
          for (let b = 0; b < p.length; ++b) {
            const T = p[b], N = J(T) && T.name;
            if (N === "Boolean") {
              m = !0;
              break;
            } else N === "String" && (y = !1);
          }
        else
          m = J(p) && p.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = y, (m || st(h, "default")) && l.push(d);
      }
    }
  const a = [r, l];
  return Pt(e) && s.set(e, a), a;
}
function kl(e) {
  return e[0] !== "$" && !us(e);
}
const wr = (e) => e === "_" || e === "_ctx" || e === "$stable", br = (e) => q(e) ? e.map(ke) : [ke(e)], hh = (e, t, n) => {
  if (t._n)
    return t;
  const s = Qe((...i) => br(t(...i)), n);
  return s._c = !1, s;
}, Na = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (wr(i)) continue;
    const o = e[i];
    if (J(o))
      t[i] = hh(i, o, s);
    else if (o != null) {
      const r = br(o);
      t[i] = () => r;
    }
  }
}, Pa = (e, t) => {
  const n = br(t);
  e.slots.default = () => n;
}, $a = (e, t, n) => {
  for (const s in t)
    (n || !wr(s)) && (e[s] = t[s]);
}, ph = (e, t, n) => {
  const s = e.slots = Da();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? ($a(s, t, n), n && zd(s, "_", i, !0)) : Na(t, s);
  } else t && Pa(e, t);
}, gh = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = rt;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : $a(i, t, n) : (o = !t.$stable, Na(t, i)), r = t;
  } else t && (Pa(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !wr(l) && r[l] == null && delete i[l];
}, Mt = Oh;
function mh(e) {
  return wh(e);
}
function wh(e, t) {
  const n = $i();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = $e,
    insertStaticContent: p
  } = e, m = (g, w, v, E = null, x = null, k = null, P = void 0, R = null, O = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !mn(g, w) && (E = js(g), me(g, x, k, !0), g = null), w.patchFlag === -2 && (O = !1, w.dynamicChildren = null);
    const { type: A, ref: U, shapeFlag: B } = w;
    switch (A) {
      case ji:
        y(g, w, v, E);
        break;
      case St:
        b(g, w, v, E);
        break;
      case go:
        g == null && T(w, v, E, P);
        break;
      case ft:
        I(
          g,
          w,
          v,
          E,
          x,
          k,
          P,
          R,
          O
        );
        break;
      default:
        B & 1 ? L(
          g,
          w,
          v,
          E,
          x,
          k,
          P,
          R,
          O
        ) : B & 6 ? z(
          g,
          w,
          v,
          E,
          x,
          k,
          P,
          R,
          O
        ) : (B & 64 || B & 128) && A.process(
          g,
          w,
          v,
          E,
          x,
          k,
          P,
          R,
          O,
          ss
        );
    }
    U != null && x ? fs(U, g && g.ref, k, w || g, !w) : U == null && g && g.ref != null && fs(g.ref, null, k, g, !0);
  }, y = (g, w, v, E) => {
    if (g == null)
      s(
        w.el = l(w.children),
        v,
        E
      );
    else {
      const x = w.el = g.el;
      w.children !== g.children && a(x, w.children);
    }
  }, b = (g, w, v, E) => {
    g == null ? s(
      w.el = c(w.children || ""),
      v,
      E
    ) : w.el = g.el;
  }, T = (g, w, v, E) => {
    [g.el, g.anchor] = p(
      g.children,
      w,
      v,
      E,
      g.el,
      g.anchor
    );
  }, N = ({ el: g, anchor: w }, v, E) => {
    let x;
    for (; g && g !== w; )
      x = f(g), s(g, v, E), g = x;
    s(w, v, E);
  }, S = ({ el: g, anchor: w }) => {
    let v;
    for (; g && g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, L = (g, w, v, E, x, k, P, R, O) => {
    w.type === "svg" ? P = "svg" : w.type === "math" && (P = "mathml"), g == null ? D(
      w,
      v,
      E,
      x,
      k,
      P,
      R,
      O
    ) : M(
      g,
      w,
      x,
      k,
      P,
      R,
      O
    );
  }, D = (g, w, v, E, x, k, P, R) => {
    let O, A;
    const { props: U, shapeFlag: B, transition: H, dirs: V } = g;
    if (O = g.el = r(
      g.type,
      k,
      U && U.is,
      U
    ), B & 8 ? u(O, g.children) : B & 16 && C(
      g.children,
      O,
      null,
      E,
      x,
      po(g, k),
      P,
      R
    ), V && dn(g, null, E, "created"), $(O, g, g.scopeId, P, E), U) {
      for (const ot in U)
        ot !== "value" && !us(ot) && o(O, ot, null, U[ot], k, E);
      "value" in U && o(O, "value", null, U.value, k), (A = U.onVnodeBeforeMount) && ve(A, E, g);
    }
    V && dn(g, null, E, "beforeMount");
    const G = bh(x, H);
    G && H.beforeEnter(O), s(O, w, v), ((A = U && U.onVnodeMounted) || G || V) && Mt(() => {
      A && ve(A, E, g), G && H.enter(O), V && dn(g, null, E, "mounted");
    }, x);
  }, $ = (g, w, v, E, x) => {
    if (v && h(g, v), E)
      for (let k = 0; k < E.length; k++)
        h(g, E[k]);
    if (x) {
      let k = x.subTree;
      if (w === k || Ua(k.type) && (k.ssContent === w || k.ssFallback === w)) {
        const P = x.vnode;
        $(
          g,
          P,
          P.scopeId,
          P.slotScopeIds,
          x.parent
        );
      }
    }
  }, C = (g, w, v, E, x, k, P, R, O = 0) => {
    for (let A = O; A < g.length; A++) {
      const U = g[A] = R ? Xe(g[A]) : ke(g[A]);
      m(
        null,
        U,
        w,
        v,
        E,
        x,
        k,
        P,
        R
      );
    }
  }, M = (g, w, v, E, x, k, P) => {
    const R = w.el = g.el;
    let { patchFlag: O, dynamicChildren: A, dirs: U } = w;
    O |= g.patchFlag & 16;
    const B = g.props || rt, H = w.props || rt;
    let V;
    if (v && fn(v, !1), (V = H.onVnodeBeforeUpdate) && ve(V, v, w, g), U && dn(w, g, v, "beforeUpdate"), v && fn(v, !0), (B.innerHTML && H.innerHTML == null || B.textContent && H.textContent == null) && u(R, ""), A ? _(
      g.dynamicChildren,
      A,
      R,
      v,
      E,
      po(w, x),
      k
    ) : P || j(
      g,
      w,
      R,
      null,
      v,
      E,
      po(w, x),
      k,
      !1
    ), O > 0) {
      if (O & 16)
        F(R, B, H, v, x);
      else if (O & 2 && B.class !== H.class && o(R, "class", null, H.class, x), O & 4 && o(R, "style", B.style, H.style, x), O & 8) {
        const G = w.dynamicProps;
        for (let ot = 0; ot < G.length; ot++) {
          const et = G[ot], $t = B[et], Bt = H[et];
          (Bt !== $t || et === "value") && o(R, et, $t, Bt, x, v);
        }
      }
      O & 1 && g.children !== w.children && u(R, w.children);
    } else !P && A == null && F(R, B, H, v, x);
    ((V = H.onVnodeUpdated) || U) && Mt(() => {
      V && ve(V, v, w, g), U && dn(w, g, v, "updated");
    }, E);
  }, _ = (g, w, v, E, x, k, P) => {
    for (let R = 0; R < w.length; R++) {
      const O = g[R], A = w[R], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mn(O, A) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      m(
        O,
        A,
        U,
        null,
        E,
        x,
        k,
        P,
        !0
      );
    }
  }, F = (g, w, v, E, x) => {
    if (w !== v) {
      if (w !== rt)
        for (const k in w)
          !us(k) && !(k in v) && o(
            g,
            k,
            w[k],
            null,
            x,
            E
          );
      for (const k in v) {
        if (us(k)) continue;
        const P = v[k], R = w[k];
        P !== R && k !== "value" && o(g, k, R, P, x, E);
      }
      "value" in v && o(g, "value", w.value, v.value, x);
    }
  }, I = (g, w, v, E, x, k, P, R, O) => {
    const A = w.el = g ? g.el : l(""), U = w.anchor = g ? g.anchor : l("");
    let { patchFlag: B, dynamicChildren: H, slotScopeIds: V } = w;
    V && (R = R ? R.concat(V) : V), g == null ? (s(A, v, E), s(U, v, E), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      v,
      U,
      x,
      k,
      P,
      R,
      O
    )) : B > 0 && B & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (_(
      g.dynamicChildren,
      H,
      v,
      x,
      k,
      P,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || x && w === x.subTree) && yr(
      g,
      w,
      !0
      /* shallow */
    )) : j(
      g,
      w,
      v,
      U,
      x,
      k,
      P,
      R,
      O
    );
  }, z = (g, w, v, E, x, k, P, R, O) => {
    w.slotScopeIds = R, g == null ? w.shapeFlag & 512 ? x.ctx.activate(
      w,
      v,
      E,
      P,
      O
    ) : Y(
      w,
      v,
      E,
      x,
      k,
      P,
      O
    ) : pt(g, w, O);
  }, Y = (g, w, v, E, x, k, P) => {
    const R = g.component = Bh(
      g,
      E,
      x
    );
    if (Hi(g) && (R.ctx.renderer = ss), Fh(R, !1, P), R.asyncDep) {
      if (x && x.registerDep(R, tt, P), !g.el) {
        const O = R.subTree = ut(St);
        b(null, O, w, v), g.placeholder = O.el;
      }
    } else
      tt(
        R,
        g,
        w,
        v,
        x,
        k,
        P
      );
  }, pt = (g, w, v) => {
    const E = w.component = g.component;
    if (Th(g, w, v))
      if (E.asyncDep && !E.asyncResolved) {
        K(E, w, v);
        return;
      } else
        E.next = w, E.update();
    else
      w.el = g.el, E.vnode = w;
  }, tt = (g, w, v, E, x, k, P) => {
    const R = () => {
      if (g.isMounted) {
        let { next: B, bu: H, u: V, parent: G, vnode: ot } = g;
        {
          const be = Ba(g);
          if (be) {
            B && (B.el = ot.el, K(g, B, P)), be.asyncDep.then(() => {
              g.isUnmounted || R();
            });
            return;
          }
        }
        let et = B, $t;
        fn(g, !1), B ? (B.el = ot.el, K(g, B, P)) : B = ot, H && ao(H), ($t = B.props && B.props.onVnodeBeforeUpdate) && ve($t, G, B, ot), fn(g, !0);
        const Bt = Cl(g), we = g.subTree;
        g.subTree = Bt, m(
          we,
          Bt,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          js(we),
          g,
          x,
          k
        ), B.el = Bt.el, et === null && Mh(g, Bt.el), V && Mt(V, x), ($t = B.props && B.props.onVnodeUpdated) && Mt(
          () => ve($t, G, B, ot),
          x
        );
      } else {
        let B;
        const { el: H, props: V } = w, { bm: G, m: ot, parent: et, root: $t, type: Bt } = g, we = Ln(w);
        fn(g, !1), G && ao(G), !we && (B = V && V.onVnodeBeforeMount) && ve(B, et, w), fn(g, !0);
        {
          $t.ce && // @ts-expect-error _def is private
          $t.ce._def.shadowRoot !== !1 && $t.ce._injectChildStyle(Bt);
          const be = g.subTree = Cl(g);
          m(
            null,
            be,
            v,
            E,
            g,
            x,
            k
          ), w.el = be.el;
        }
        if (ot && Mt(ot, x), !we && (B = V && V.onVnodeMounted)) {
          const be = w;
          Mt(
            () => ve(B, et, be),
            x
          );
        }
        (w.shapeFlag & 256 || et && Ln(et.vnode) && et.vnode.shapeFlag & 256) && g.a && Mt(g.a, x), g.isMounted = !0, w = v = E = null;
      }
    };
    g.scope.on();
    const O = g.effect = new Hd(R);
    g.scope.off();
    const A = g.update = O.run.bind(O), U = g.job = O.runIfDirty.bind(O);
    U.i = g, U.id = g.uid, O.scheduler = () => gr(U), fn(g, !0), A();
  }, K = (g, w, v) => {
    w.component = g;
    const E = g.vnode.props;
    g.vnode = w, g.next = null, dh(g, w.props, E, v), gh(g, w.children, v), _n(), fl(g), xn();
  }, j = (g, w, v, E, x, k, P, R, O = !1) => {
    const A = g && g.children, U = g ? g.shapeFlag : 0, B = w.children, { patchFlag: H, shapeFlag: V } = w;
    if (H > 0) {
      if (H & 128) {
        On(
          A,
          B,
          v,
          E,
          x,
          k,
          P,
          R,
          O
        );
        return;
      } else if (H & 256) {
        kt(
          A,
          B,
          v,
          E,
          x,
          k,
          P,
          R,
          O
        );
        return;
      }
    }
    V & 8 ? (U & 16 && ns(A, x, k), B !== A && u(v, B)) : U & 16 ? V & 16 ? On(
      A,
      B,
      v,
      E,
      x,
      k,
      P,
      R,
      O
    ) : ns(A, x, k, !0) : (U & 8 && u(v, ""), V & 16 && C(
      B,
      v,
      E,
      x,
      k,
      P,
      R,
      O
    ));
  }, kt = (g, w, v, E, x, k, P, R, O) => {
    g = g || In, w = w || In;
    const A = g.length, U = w.length, B = Math.min(A, U);
    let H;
    for (H = 0; H < B; H++) {
      const V = w[H] = O ? Xe(w[H]) : ke(w[H]);
      m(
        g[H],
        V,
        v,
        null,
        x,
        k,
        P,
        R,
        O
      );
    }
    A > U ? ns(
      g,
      x,
      k,
      !0,
      !1,
      B
    ) : C(
      w,
      v,
      E,
      x,
      k,
      P,
      R,
      O,
      B
    );
  }, On = (g, w, v, E, x, k, P, R, O) => {
    let A = 0;
    const U = w.length;
    let B = g.length - 1, H = U - 1;
    for (; A <= B && A <= H; ) {
      const V = g[A], G = w[A] = O ? Xe(w[A]) : ke(w[A]);
      if (mn(V, G))
        m(
          V,
          G,
          v,
          null,
          x,
          k,
          P,
          R,
          O
        );
      else
        break;
      A++;
    }
    for (; A <= B && A <= H; ) {
      const V = g[B], G = w[H] = O ? Xe(w[H]) : ke(w[H]);
      if (mn(V, G))
        m(
          V,
          G,
          v,
          null,
          x,
          k,
          P,
          R,
          O
        );
      else
        break;
      B--, H--;
    }
    if (A > B) {
      if (A <= H) {
        const V = H + 1, G = V < U ? w[V].el : E;
        for (; A <= H; )
          m(
            null,
            w[A] = O ? Xe(w[A]) : ke(w[A]),
            v,
            G,
            x,
            k,
            P,
            R,
            O
          ), A++;
      }
    } else if (A > H)
      for (; A <= B; )
        me(g[A], x, k, !0), A++;
    else {
      const V = A, G = A, ot = /* @__PURE__ */ new Map();
      for (A = G; A <= H; A++) {
        const Vt = w[A] = O ? Xe(w[A]) : ke(w[A]);
        Vt.key != null && ot.set(Vt.key, A);
      }
      let et, $t = 0;
      const Bt = H - G + 1;
      let we = !1, be = 0;
      const is = new Array(Bt);
      for (A = 0; A < Bt; A++) is[A] = 0;
      for (A = V; A <= B; A++) {
        const Vt = g[A];
        if ($t >= Bt) {
          me(Vt, x, k, !0);
          continue;
        }
        let ye;
        if (Vt.key != null)
          ye = ot.get(Vt.key);
        else
          for (et = G; et <= H; et++)
            if (is[et - G] === 0 && mn(Vt, w[et])) {
              ye = et;
              break;
            }
        ye === void 0 ? me(Vt, x, k, !0) : (is[ye - G] = A + 1, ye >= be ? be = ye : we = !0, m(
          Vt,
          w[ye],
          v,
          null,
          x,
          k,
          P,
          R,
          O
        ), $t++);
      }
      const sl = we ? yh(is) : In;
      for (et = sl.length - 1, A = Bt - 1; A >= 0; A--) {
        const Vt = G + A, ye = w[Vt], il = w[Vt + 1], ol = Vt + 1 < U ? (
          // #13559, fallback to el placeholder for unresolved async component
          il.el || il.placeholder
        ) : E;
        is[A] === 0 ? m(
          null,
          ye,
          v,
          ol,
          x,
          k,
          P,
          R,
          O
        ) : we && (et < 0 || A !== sl[et] ? un(ye, v, ol, 2) : et--);
      }
    }
  }, un = (g, w, v, E, x = null) => {
    const { el: k, type: P, transition: R, children: O, shapeFlag: A } = g;
    if (A & 6) {
      un(g.component.subTree, w, v, E);
      return;
    }
    if (A & 128) {
      g.suspense.move(w, v, E);
      return;
    }
    if (A & 64) {
      P.move(g, w, v, ss);
      return;
    }
    if (P === ft) {
      s(k, w, v);
      for (let B = 0; B < O.length; B++)
        un(O[B], w, v, E);
      s(g.anchor, w, v);
      return;
    }
    if (P === go) {
      N(g, w, v);
      return;
    }
    if (E !== 2 && A & 1 && R)
      if (E === 0)
        R.beforeEnter(k), s(k, w, v), Mt(() => R.enter(k), x);
      else {
        const { leave: B, delayLeave: H, afterLeave: V } = R, G = () => {
          g.ctx.isUnmounted ? i(k) : s(k, w, v);
        }, ot = () => {
          k._isLeaving && k[Le](
            !0
            /* cancelled */
          ), B(k, () => {
            G(), V && V();
          });
        };
        H ? H(k, G, ot) : ot();
      }
    else
      s(k, w, v);
  }, me = (g, w, v, E = !1, x = !1) => {
    const {
      type: k,
      props: P,
      ref: R,
      children: O,
      dynamicChildren: A,
      shapeFlag: U,
      patchFlag: B,
      dirs: H,
      cacheIndex: V
    } = g;
    if (B === -2 && (x = !1), R != null && (_n(), fs(R, null, v, g, !0), xn()), V != null && (w.renderCache[V] = void 0), U & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const G = U & 1 && H, ot = !Ln(g);
    let et;
    if (ot && (et = P && P.onVnodeBeforeUnmount) && ve(et, w, g), U & 6)
      Bd(g.component, v, E);
    else {
      if (U & 128) {
        g.suspense.unmount(v, E);
        return;
      }
      G && dn(g, null, w, "beforeUnmount"), U & 64 ? g.type.remove(
        g,
        w,
        v,
        ss,
        E
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== ft || B > 0 && B & 64) ? ns(
        A,
        w,
        v,
        !1,
        !0
      ) : (k === ft && B & 384 || !x && U & 16) && ns(O, w, v), E && el(g);
    }
    (ot && (et = P && P.onVnodeUnmounted) || G) && Mt(() => {
      et && ve(et, w, g), G && dn(g, null, w, "unmounted");
    }, v);
  }, el = (g) => {
    const { type: w, el: v, anchor: E, transition: x } = g;
    if (w === ft) {
      $d(v, E);
      return;
    }
    if (w === go) {
      S(g);
      return;
    }
    const k = () => {
      i(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (g.shapeFlag & 1 && x && !x.persisted) {
      const { leave: P, delayLeave: R } = x, O = () => P(v, k);
      R ? R(g.el, k, O) : O();
    } else
      k();
  }, $d = (g, w) => {
    let v;
    for (; g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, Bd = (g, w, v) => {
    const { bum: E, scope: x, job: k, subTree: P, um: R, m: O, a: A } = g;
    Sl(O), Sl(A), E && ao(E), x.stop(), k && (k.flags |= 8, me(P, g, w, v)), R && Mt(R, w), Mt(() => {
      g.isUnmounted = !0;
    }, w);
  }, ns = (g, w, v, E = !1, x = !1, k = 0) => {
    for (let P = k; P < g.length; P++)
      me(g[P], w, v, E, x);
  }, js = (g) => {
    if (g.shapeFlag & 6)
      return js(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = f(g.anchor || g.el), v = w && w[ga];
    return v ? f(v) : w;
  };
  let co = !1;
  const nl = (g, w, v) => {
    g == null ? w._vnode && me(w._vnode, null, null, !0) : m(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      v
    ), w._vnode = g, co || (co = !0, fl(), fa(), co = !1);
  }, ss = {
    p: m,
    um: me,
    m: un,
    r: el,
    mt: Y,
    mc: C,
    pc: j,
    pbc: _,
    n: js,
    o: e
  };
  return {
    render: nl,
    hydrate: void 0,
    createApp: ah(nl)
  };
}
function po({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (q(s) && q(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Xe(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && yr(r, l)), l.type === ji && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = r.el), l.type === St && !l.el && (l.el = r.el);
    }
}
function yh(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        l = o + r >> 1, e[n[l]] < a ? o = l + 1 : r = l;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function Ba(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ba(t);
}
function Sl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vh = Symbol.for("v-scx"), _h = () => yn(vh);
function Xn(e, t) {
  return vr(e, null, t);
}
function si(e, t, n) {
  return vr(e, t, n);
}
function vr(e, t, n = rt) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = wt({}, n), c = t && s || !t && o !== "post";
  let a;
  if (vs) {
    if (o === "sync") {
      const h = _h();
      a = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = $e, h.resume = $e, h.pause = $e, h;
    }
  }
  const u = Ct;
  l.call = (h, p, m) => ue(h, u, p, m);
  let d = !1;
  o === "post" ? l.scheduler = (h) => {
    Mt(h, u && u.suspense);
  } : o !== "sync" && (d = !0, l.scheduler = (h, p) => {
    p ? h() : gr(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = Ud(e, t, l);
  return vs && (a ? a.push(f) : c && f()), f;
}
function xh(e, t, n) {
  const s = this.proxy, i = xt(e) ? e.includes(".") ? Fa(s, e) : () => s[e] : e.bind(s, s);
  let o;
  J(t) ? o = t : (o = t.handler, n = t);
  const r = $s(this), l = vr(i, o.bind(s), n);
  return r(), l;
}
function Fa(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const kh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Xt(t)}Modifiers`];
function Sh(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || rt;
  let i = n;
  const o = t.startsWith("update:"), r = o && kh(s, t.slice(7));
  r && (r.trim && (i = n.map((u) => xt(u) ? u.trim() : u)), r.number && (i = n.map(Vd)));
  let l, c = s[l = uo(t)] || // also try camelCase event handler (#2249)
  s[l = uo(Rt(t))];
  !c && o && (c = s[l = uo(Xt(t))]), c && ue(
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
const Ch = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n = !1) {
  const s = n ? Ch : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!J(e)) {
    const c = (a) => {
      const u = Ha(a, t, !0);
      u && (l = !0, wt(r, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l ? (Pt(e) && s.set(e, null), null) : (q(o) ? o.forEach((c) => r[c] = null) : wt(r, o), Pt(e) && s.set(e, r), r);
}
function Vi(e, t) {
  return !e || !Pi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Xt(t)) || st(e, t));
}
function Cl(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: c,
    render: a,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: p,
    inheritAttrs: m
  } = e, y = mi(e);
  let b, T;
  try {
    if (n.shapeFlag & 4) {
      const S = i || s, L = S;
      b = ke(
        a.call(
          L,
          S,
          u,
          d,
          h,
          f,
          p
        )
      ), T = l;
    } else {
      const S = t;
      b = ke(
        S.length > 1 ? S(
          d,
          { attrs: l, slots: r, emit: c }
        ) : S(
          d,
          null
        )
      ), T = t.props ? l : Eh(l);
    }
  } catch (S) {
    ps.length = 0, Fi(S, e, 1), b = ut(St);
  }
  let N = b;
  if (T && m !== !1) {
    const S = Object.keys(T), { shapeFlag: L } = N;
    S.length && L & 7 && (o && S.some(fr) && (T = Ah(
      T,
      o
    )), N = Ue(N, T, !1, !0));
  }
  return n.dirs && (N = Ue(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && ws(N, n.transition), b = N, mi(y), b;
}
const Eh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ah = (e, t) => {
  const n = {};
  for (const s in e)
    (!fr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Th(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: c } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? El(s, r, a) : !!r;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (r[f] !== s[f] && !Vi(a, f))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? El(s, r, a) : !0 : !!r;
  return !1;
}
function El(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !Vi(n, o))
      return !0;
  }
  return !1;
}
function Mh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ua = (e) => e.__isSuspense;
function Oh(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Lf(e);
}
const ft = Symbol.for("v-fgt"), ji = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), go = Symbol.for("v-stc"), ps = [];
let zt = null;
function X(e = !1) {
  ps.push(zt = e ? null : []);
}
function Dh() {
  ps.pop(), zt = ps[ps.length - 1] || null;
}
let bs = 1;
function yi(e, t = !1) {
  bs += e, e < 0 && zt && t && (zt.hasOnce = !0);
}
function Va(e) {
  return e.dynamicChildren = bs > 0 ? zt || In : null, Dh(), bs > 0 && zt && zt.push(e), e;
}
function at(e, t, n, s, i, o) {
  return Va(
    se(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function oe(e, t, n, s, i) {
  return Va(
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
function ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ja = ({ key: e }) => e ?? null, ii = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || pi(e) || J(e) ? { i: It, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, s = 0, i = null, o = e === ft ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ja(t),
    ref: t && ii(t),
    scopeId: pa,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: It
  };
  return l ? (_r(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= xt(n) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && zt.push(c), c;
}
const ut = Ih;
function Ih(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === Qf) && (e = St), ys(e)) {
    const l = Ue(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _r(l, n), bs > 0 && !o && zt && (l.shapeFlag & 6 ? zt[zt.indexOf(e)] = l : zt.push(l)), l.patchFlag = -2, l;
  }
  if (zh(e) && (e = e.__vccOpts), t) {
    t = Rh(t);
    let { class: l, style: c } = t;
    l && !xt(l) && (t.class = en(l)), Pt(c) && (Yc(c) && !q(c) && (c = wt({}, c)), t.style = hi(c));
  }
  const r = xt(e) ? 1 : Ua(e) ? 128 : ma(e) ? 64 : Pt(e) ? 4 : J(e) ? 2 : 0;
  return se(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function Rh(e) {
  return e ? Yc(e) || Ia(e) ? wt({}, e) : e : null;
}
function Ue(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: c } = e, a = t ? Nh(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ja(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? q(o) ? o.concat(ii(t)) : [o, ii(t)] : ii(t)
    ) : o,
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
    patchFlag: t && e.type !== ft ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ue(e.ssContent),
    ssFallback: e.ssFallback && Ue(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && ws(
    u,
    c.clone(u)
  ), u;
}
function Lh(e = " ", t = 0) {
  return ut(ji, null, e, t);
}
function Yt(e = "", t = !1) {
  return t ? (X(), oe(St, null, e)) : ut(St, null, e);
}
function ke(e) {
  return e == null || typeof e == "boolean" ? ut(St) : q(e) ? ut(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ys(e) ? Xe(e) : ut(ji, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ue(e);
}
function _r(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), _r(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ia(t) ? t._ctx = It : i === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else J(t) ? (t = { default: t, _ctx: It }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Lh(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = en([t.class, s.class]));
      else if (i === "style")
        t.style = hi([t.style, s.style]);
      else if (Pi(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(q(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
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
const Ph = Ma();
let $h = 0;
function Bh(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Ph, o = {
    uid: $h++,
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
    scope: new Fd(
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
    propsOptions: La(s, i),
    emitsOptions: Ha(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: rt,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: rt,
    data: rt,
    props: rt,
    attrs: rt,
    slots: rt,
    refs: rt,
    setupState: rt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Sh.bind(null, o), e.ce && e.ce(o), o;
}
let Ct = null;
const zi = () => Ct || It;
let vi, Fo;
{
  const e = $i(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  vi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ct = n
  ), Fo = t(
    "__VUE_SSR_SETTERS__",
    (n) => vs = n
  );
}
const $s = (e) => {
  const t = Ct;
  return vi(e), e.scope.on(), () => {
    e.scope.off(), vi(t);
  };
}, Al = () => {
  Ct && Ct.scope.off(), vi(null);
};
function za(e) {
  return e.vnode.shapeFlag & 4;
}
let vs = !1;
function Fh(e, t = !1, n = !1) {
  t && Fo(t);
  const { props: s, children: i } = e.vnode, o = za(e);
  uh(e, s, o, t), ph(e, i, n || t);
  const r = o ? Hh(e, t) : void 0;
  return t && Fo(!1), r;
}
function Hh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nh);
  const { setup: s } = n;
  if (s) {
    _n();
    const i = e.setupContext = s.length > 1 ? Vh(e) : null, o = $s(e), r = Ls(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Zc(r);
    if (xn(), o(), (l || e.sp) && !Ln(e) && Sa(e), l) {
      if (r.then(Al, Al), t)
        return r.then((c) => {
          Tl(e, c);
        }).catch((c) => {
          Fi(c, e, 0);
        });
      e.asyncDep = r;
    } else
      Tl(e, r);
  } else
    Wa(e);
}
function Tl(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = Xc(t)), Wa(e);
}
function Wa(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const i = $s(e);
    _n();
    try {
      sh(e);
    } finally {
      xn(), i();
    }
  }
}
const Uh = {
  get(e, t) {
    return ea(e, "get", ""), e[t];
  }
};
function Vh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xc(Qc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in hs)
        return hs[n](e);
    },
    has(t, n) {
      return n in t || n in hs;
    }
  })) : e.proxy;
}
function jh(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zh(e) {
  return J(e) && "__vccOpts" in e;
}
const Lt = (e, t) => qd(e, t, vs);
function Un(e, t, n) {
  try {
    yi(-1);
    const s = arguments.length;
    return s === 2 ? Pt(t) && !q(t) ? ys(t) ? ut(e, null, [t]) : ut(e, t) : ut(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ys(n) && (n = [n]), ut(e, t, n));
  } finally {
    yi(1);
  }
}
const Wh = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ho;
const Ml = typeof window < "u" && window.trustedTypes;
if (Ml)
  try {
    Ho = /* @__PURE__ */ Ml.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ka = Ho ? (e) => Ho.createHTML(e) : (e) => e, Kh = "http://www.w3.org/2000/svg", qh = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Ol = Re && /* @__PURE__ */ Re.createElement("template"), Jh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Re.createElementNS(Kh, e) : t === "mathml" ? Re.createElementNS(qh, e) : n ? Re.createElement(e, { is: n }) : Re.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Ol.innerHTML = Ka(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ol.content;
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
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Je = "transition", rs = "animation", _s = Symbol("_vtc"), qa = {
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
}, Yh = /* @__PURE__ */ wt(
  {},
  ya,
  qa
), Gh = (e) => (e.displayName = "Transition", e.props = Yh, e), Xh = /* @__PURE__ */ Gh(
  (e, { slots: t }) => Un(Ff, Qh(e), t)
), hn = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Dl = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Qh(e) {
  const t = {};
  for (const I in e)
    I in qa || (t[I] = e[I]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: a = r,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = Zh(i), m = p && p[0], y = p && p[1], {
    onBeforeEnter: b,
    onEnter: T,
    onEnterCancelled: N,
    onLeave: S,
    onLeaveCancelled: L,
    onBeforeAppear: D = b,
    onAppear: $ = T,
    onAppearCancelled: C = N
  } = t, M = (I, z, Y, pt) => {
    I._enterCancelled = pt, pn(I, z ? u : l), pn(I, z ? a : r), Y && Y();
  }, _ = (I, z) => {
    I._isLeaving = !1, pn(I, d), pn(I, h), pn(I, f), z && z();
  }, F = (I) => (z, Y) => {
    const pt = I ? $ : T, tt = () => M(z, I, Y);
    hn(pt, [z, tt]), Il(() => {
      pn(z, I ? c : o), Oe(z, I ? u : l), Dl(pt) || Rl(z, s, m, tt);
    });
  };
  return wt(t, {
    onBeforeEnter(I) {
      hn(b, [I]), Oe(I, o), Oe(I, r);
    },
    onBeforeAppear(I) {
      hn(D, [I]), Oe(I, c), Oe(I, a);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(I, z) {
      I._isLeaving = !0;
      const Y = () => _(I, z);
      Oe(I, d), I._enterCancelled ? (Oe(I, f), Pl(I)) : (Pl(I), Oe(I, f)), Il(() => {
        I._isLeaving && (pn(I, d), Oe(I, h), Dl(S) || Rl(I, s, y, Y));
      }), hn(S, [I, Y]);
    },
    onEnterCancelled(I) {
      M(I, !1, void 0, !0), hn(N, [I]);
    },
    onAppearCancelled(I) {
      M(I, !0, void 0, !0), hn(C, [I]);
    },
    onLeaveCancelled(I) {
      _(I), hn(L, [I]);
    }
  });
}
function Zh(e) {
  if (e == null)
    return null;
  if (Pt(e))
    return [mo(e.enter), mo(e.leave)];
  {
    const t = mo(e);
    return [t, t];
  }
}
function mo(e) {
  return Io(e);
}
function Oe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[_s] || (e[_s] = /* @__PURE__ */ new Set())).add(t);
}
function pn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[_s];
  n && (n.delete(t), n.size || (e[_s] = void 0));
}
function Il(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let tp = 0;
function Rl(e, t, n, s) {
  const i = e._endId = ++tp, o = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: r, timeout: l, propCount: c } = ep(e, t);
  if (!r)
    return s();
  const a = r + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(a, f), o();
  }, f = (h) => {
    h.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, l + 1), e.addEventListener(a, f);
}
function ep(e, t) {
  const n = window.getComputedStyle(e), s = (p) => (n[p] || "").split(", "), i = s(`${Je}Delay`), o = s(`${Je}Duration`), r = Ll(i, o), l = s(`${rs}Delay`), c = s(`${rs}Duration`), a = Ll(l, c);
  let u = null, d = 0, f = 0;
  t === Je ? r > 0 && (u = Je, d = r, f = o.length) : t === rs ? a > 0 && (u = rs, d = a, f = c.length) : (d = Math.max(r, a), u = d > 0 ? r > a ? Je : rs : null, f = u ? u === Je ? o.length : c.length : 0);
  const h = u === Je && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Je}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function Ll(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Nl(n) + Nl(e[s])));
}
function Nl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function np(e, t, n) {
  const s = e[_s];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $l = Symbol("_vod"), sp = Symbol("_vsh"), ip = Symbol(""), op = /(?:^|;)\s*display\s*:/;
function rp(e, t, n) {
  const s = e.style, i = xt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (xt(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && oi(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && oi(s, r, "");
    for (const r in n)
      r === "display" && (o = !0), oi(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[ip];
      r && (n += ";" + r), s.cssText = n, o = op.test(n);
    }
  } else t && e.removeAttribute("style");
  $l in e && (e[$l] = o ? s.display : "", e[sp] && (s.display = "none"));
}
const Bl = /\s*!important$/;
function oi(e, t, n) {
  if (q(n))
    n.forEach((s) => oi(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = lp(e, t);
    Bl.test(n) ? e.setProperty(
      Xt(s),
      n.replace(Bl, ""),
      "important"
    ) : e[s] = n;
  }
}
const Fl = ["Webkit", "Moz", "ms"], wo = {};
function lp(e, t) {
  const n = wo[t];
  if (n)
    return n;
  let s = Rt(t);
  if (s !== "filter" && s in e)
    return wo[t] = s;
  s = hr(s);
  for (let i = 0; i < Fl.length; i++) {
    const o = Fl[i] + s;
    if (o in e)
      return wo[t] = o;
  }
  return t;
}
const Hl = "http://www.w3.org/1999/xlink";
function Ul(e, t, n, s, i, o = Zd(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hl, t.slice(6, t.length)) : e.setAttributeNS(Hl, t, n) : n == null || o && !ia(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : na(n) ? String(n) : n
  );
}
function Vl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ka(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ia(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function cp(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ap(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const jl = Symbol("_vei");
function up(e, t, n, s, i = null) {
  const o = e[jl] || (e[jl] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, c] = dp(t);
    if (s) {
      const a = o[t] = pp(
        s,
        i
      );
      cp(e, l, a, c);
    } else r && (ap(e, l, r, c), o[t] = void 0);
  }
}
const zl = /(?:Once|Passive|Capture)$/;
function dp(e) {
  let t;
  if (zl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(zl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xt(e.slice(2)), t];
}
let bo = 0;
const fp = /* @__PURE__ */ Promise.resolve(), hp = () => bo || (fp.then(() => bo = 0), bo = Date.now());
function pp(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ue(
      gp(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = hp(), n;
}
function gp(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const Wl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mp = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? np(e, s, r) : t === "style" ? rp(e, n, s) : Pi(t) ? fr(t) || up(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wp(e, t, s, r)) ? (Vl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ul(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !xt(s)) ? Vl(e, Rt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ul(e, t, s, r));
};
function wp(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wl(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wl(t) && xt(n) ? !1 : t in e;
}
const Kl = {};
// @__NO_SIDE_EFFECTS__
function bp(e, t, n) {
  let s = /* @__PURE__ */ ee(e, t);
  sa(s) && (s = wt({}, s, t));
  class i extends kr {
    constructor(r) {
      super(s, r, n);
    }
  }
  return i.def = s, i;
}
const yp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class kr extends yp {
  constructor(t, n = {}, s = Jl) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Jl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof kr) {
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
    this._connected = !1, Zt(() => {
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
      const { props: o, styles: r } = s;
      let l;
      if (o && !q(o))
        for (const c in o) {
          const a = o[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = Io(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Rt(c)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot && this._applyStyles(r), this._mount(s);
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
          get: () => ct(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = q(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(Rt))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Kl;
    const i = Rt(t);
    n && this._numberProps && this._numberProps[i] && (s = Io(s)), this._setProp(i, s, !1, !0);
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
    if (n !== this._props[t] && (n === Kl ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const o = this._ob;
      o && (this._processMutations(o.takeRecords()), o.disconnect()), n === !0 ? this.setAttribute(Xt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Xt(t), n + "") : n || this.removeAttribute(Xt(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), _p(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ut(this._def, wt(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            sa(r[0]) ? wt({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (o, ...r) => {
        i(o, r), Xt(o) !== o && i(Xt(o), r);
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
      const o = document.createElement("style");
      s && o.setAttribute("nonce", s), o.textContent = t[i], this.shadowRoot.prepend(o);
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
      const i = t[s], o = i.getAttribute("name") || "default", r = this._slots[o], l = i.parentNode;
      if (r)
        for (const c of r) {
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
    return this._teleportTargets && t.push(...this._teleportTargets), t.reduce((n, s) => (n.push(...Array.from(s.querySelectorAll("slot"))), n), []);
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
  _removeChildStyle(t) {
  }
}
const vp = /* @__PURE__ */ wt({ patchProp: mp }, Jh);
let ql;
function Ja() {
  return ql || (ql = mh(vp));
}
const _p = ((...e) => {
  Ja().render(...e);
}), Jl = ((...e) => {
  const t = Ja().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = kp(s);
    if (!i) return;
    const o = t._component;
    !J(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, xp(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function xp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function kp(e) {
  return xt(e) ? document.querySelector(e) : e;
}
const Ya = ["top", "right", "bottom", "left"], Yl = ["start", "end"], Gl = /* @__PURE__ */ Ya.reduce((e, t) => e.concat(t, t + "-" + Yl[0], t + "-" + Yl[1]), []), Te = Math.min, Dt = Math.max, _i = Math.round, Ce = (e) => ({
  x: e,
  y: e
}), Sp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Cp = {
  start: "end",
  end: "start"
};
function Uo(e, t, n) {
  return Dt(e, Te(t, n));
}
function ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function te(e) {
  return e.split("-")[0];
}
function le(e) {
  return e.split("-")[1];
}
function Ga(e) {
  return e === "x" ? "y" : "x";
}
function Sr(e) {
  return e === "y" ? "height" : "width";
}
const Ep = /* @__PURE__ */ new Set(["top", "bottom"]);
function Se(e) {
  return Ep.has(te(e)) ? "y" : "x";
}
function Cr(e) {
  return Ga(Se(e));
}
function Xa(e, t, n) {
  n === void 0 && (n = !1);
  const s = le(e), i = Cr(e), o = Sr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = ki(r)), [r, ki(r)];
}
function Ap(e) {
  const t = ki(e);
  return [xi(e), t, xi(t)];
}
function xi(e) {
  return e.replace(/start|end/g, (t) => Cp[t]);
}
const Xl = ["left", "right"], Ql = ["right", "left"], Tp = ["top", "bottom"], Mp = ["bottom", "top"];
function Op(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ql : Xl : t ? Xl : Ql;
    case "left":
    case "right":
      return t ? Tp : Mp;
    default:
      return [];
  }
}
function Dp(e, t, n, s) {
  const i = le(e);
  let o = Op(te(e), n === "start", s);
  return i && (o = o.map((r) => r + "-" + i), t && (o = o.concat(o.map(xi)))), o;
}
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sp[t]);
}
function Ip(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Er(e) {
  return typeof e != "number" ? Ip(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vn(e) {
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
function Zl(e, t, n) {
  let {
    reference: s,
    floating: i
  } = e;
  const o = Se(t), r = Cr(t), l = Sr(r), c = te(t), a = o === "y", u = s.x + s.width / 2 - i.width / 2, d = s.y + s.height / 2 - i.height / 2, f = s[l] / 2 - i[l] / 2;
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
      h[r] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      h[r] += f * (n && a ? -1 : 1);
      break;
  }
  return h;
}
const Rp = async (e, t, n) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: r
  } = n, l = o.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let a = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: d
  } = Zl(a, s, c), f = s, h = {}, p = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: y,
      fn: b
    } = l[m], {
      x: T,
      y: N,
      data: S,
      reset: L
    } = await b({
      x: u,
      y: d,
      initialPlacement: s,
      placement: f,
      strategy: i,
      middlewareData: h,
      rects: a,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = T ?? u, d = N ?? d, h = {
      ...h,
      [y]: {
        ...h[y],
        ...S
      }
    }, L && p <= 50 && (p++, typeof L == "object" && (L.placement && (f = L.placement), L.rects && (a = L.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : L.rects), {
      x: u,
      y: d
    } = Zl(a, f, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: h
  };
};
async function jn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: o,
    rects: r,
    elements: l,
    strategy: c
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = ze(t, e), p = Er(h), y = l[f ? d === "floating" ? "reference" : "floating" : d], b = Vn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null || n ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: c
  })), T = d === "floating" ? {
    x: s,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, N = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(N)) ? await (o.getScale == null ? void 0 : o.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, L = Vn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: T,
    offsetParent: N,
    strategy: c
  }) : T);
  return {
    top: (b.top - L.top + p.top) / S.y,
    bottom: (L.bottom - b.bottom + p.bottom) / S.y,
    left: (b.left - L.left + p.left) / S.x,
    right: (L.right - b.right + p.right) / S.x
  };
}
const Lp = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: s,
      placement: i,
      rects: o,
      platform: r,
      elements: l,
      middlewareData: c
    } = t, {
      element: a,
      padding: u = 0
    } = ze(e, t) || {};
    if (a == null)
      return {};
    const d = Er(u), f = {
      x: n,
      y: s
    }, h = Cr(i), p = Sr(h), m = await r.getDimensions(a), y = h === "y", b = y ? "top" : "left", T = y ? "bottom" : "right", N = y ? "clientHeight" : "clientWidth", S = o.reference[p] + o.reference[h] - f[h] - o.floating[p], L = f[h] - o.reference[h], D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
    let $ = D ? D[N] : 0;
    (!$ || !await (r.isElement == null ? void 0 : r.isElement(D))) && ($ = l.floating[N] || o.floating[p]);
    const C = S / 2 - L / 2, M = $ / 2 - m[p] / 2 - 1, _ = Te(d[b], M), F = Te(d[T], M), I = _, z = $ - m[p] - F, Y = $ / 2 - m[p] / 2 + C, pt = Uo(I, Y, z), tt = !c.arrow && le(i) != null && Y !== pt && o.reference[p] / 2 - (Y < I ? _ : F) - m[p] / 2 < 0, K = tt ? Y < I ? Y - I : Y - z : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: pt,
        centerOffset: Y - pt - K,
        ...tt && {
          alignmentOffset: K
        }
      },
      reset: tt
    };
  }
});
function Np(e, t, n) {
  return (e ? [...n.filter((i) => le(i) === e), ...n.filter((i) => le(i) !== e)] : n.filter((i) => te(i) === i)).filter((i) => e ? le(i) === e || (t ? xi(i) !== i : !1) : !0);
}
const Pp = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, s, i;
      const {
        rects: o,
        middlewareData: r,
        placement: l,
        platform: c,
        elements: a
      } = t, {
        crossAxis: u = !1,
        alignment: d,
        allowedPlacements: f = Gl,
        autoAlignment: h = !0,
        ...p
      } = ze(e, t), m = d !== void 0 || f === Gl ? Np(d || null, h, f) : f, y = await jn(t, p), b = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, T = m[b];
      if (T == null)
        return {};
      const N = Xa(T, o, await (c.isRTL == null ? void 0 : c.isRTL(a.floating)));
      if (l !== T)
        return {
          reset: {
            placement: m[0]
          }
        };
      const S = [y[te(T)], y[N[0]], y[N[1]]], L = [...((s = r.autoPlacement) == null ? void 0 : s.overflows) || [], {
        placement: T,
        overflows: S
      }], D = m[b + 1];
      if (D)
        return {
          data: {
            index: b + 1,
            overflows: L
          },
          reset: {
            placement: D
          }
        };
      const $ = L.map((_) => {
        const F = le(_.placement);
        return [_.placement, F && u ? (
          // Check along the mainAxis and main crossAxis side.
          _.overflows.slice(0, 2).reduce((I, z) => I + z, 0)
        ) : (
          // Check only the mainAxis.
          _.overflows[0]
        ), _.overflows];
      }).sort((_, F) => _[1] - F[1]), M = ((i = $.filter((_) => _[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        le(_[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : i[0]) || $[0][0];
      return M !== l ? {
        data: {
          index: b + 1,
          overflows: L
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, $p = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, s;
      const {
        placement: i,
        middlewareData: o,
        rects: r,
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
      } = ze(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const b = te(i), T = Se(l), N = te(l) === l, S = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), L = f || (N || !m ? [ki(l)] : Ap(l)), D = p !== "none";
      !f && D && L.push(...Dp(l, m, p, S));
      const $ = [l, ...L], C = await jn(t, y), M = [];
      let _ = ((s = o.flip) == null ? void 0 : s.overflows) || [];
      if (u && M.push(C[b]), d) {
        const Y = Xa(i, r, S);
        M.push(C[Y[0]], C[Y[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: M
      }], !M.every((Y) => Y <= 0)) {
        var F, I;
        const Y = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1, pt = $[Y];
        if (pt && (!(d === "alignment" ? T !== Se(pt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((j) => Se(j.placement) === T ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: _
            },
            reset: {
              placement: pt
            }
          };
        let tt = (I = _.filter((K) => K.overflows[0] <= 0).sort((K, j) => K.overflows[1] - j.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!tt)
          switch (h) {
            case "bestFit": {
              var z;
              const K = (z = _.filter((j) => {
                if (D) {
                  const kt = Se(j.placement);
                  return kt === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  kt === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((kt) => kt > 0).reduce((kt, On) => kt + On, 0)]).sort((j, kt) => j[1] - kt[1])[0]) == null ? void 0 : z[0];
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
function tc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ec(e) {
  return Ya.some((t) => e[t] >= 0);
}
const Bp = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = ze(e, t);
      switch (s) {
        case "referenceHidden": {
          const o = await jn(t, {
            ...i,
            elementContext: "reference"
          }), r = tc(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: ec(r)
            }
          };
        }
        case "escaped": {
          const o = await jn(t, {
            ...i,
            altBoundary: !0
          }), r = tc(o, n.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: ec(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function Qa(e) {
  const t = Te(...e.map((o) => o.left)), n = Te(...e.map((o) => o.top)), s = Dt(...e.map((o) => o.right)), i = Dt(...e.map((o) => o.bottom));
  return {
    x: t,
    y: n,
    width: s - t,
    height: i - n
  };
}
function Fp(e) {
  const t = e.slice().sort((i, o) => i.y - o.y), n = [];
  let s = null;
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    !s || o.y - s.y > s.height / 2 ? n.push([o]) : n[n.length - 1].push(o), s = o;
  }
  return n.map((i) => Vn(Qa(i)));
}
const Hp = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: s,
        rects: i,
        platform: o,
        strategy: r
      } = t, {
        padding: l = 2,
        x: c,
        y: a
      } = ze(e, t), u = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(s.reference)) || []), d = Fp(u), f = Vn(Qa(u)), h = Er(l);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && a != null)
          return d.find((y) => c > y.left - h.left && c < y.right + h.right && a > y.top - h.top && a < y.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if (Se(n) === "y") {
            const _ = d[0], F = d[d.length - 1], I = te(n) === "top", z = _.top, Y = F.bottom, pt = I ? _.left : F.left, tt = I ? _.right : F.right, K = tt - pt, j = Y - z;
            return {
              top: z,
              bottom: Y,
              left: pt,
              right: tt,
              width: K,
              height: j,
              x: pt,
              y: z
            };
          }
          const y = te(n) === "left", b = Dt(...d.map((_) => _.right)), T = Te(...d.map((_) => _.left)), N = d.filter((_) => y ? _.left === T : _.right === b), S = N[0].top, L = N[N.length - 1].bottom, D = T, $ = b, C = $ - D, M = L - S;
          return {
            top: S,
            bottom: L,
            left: D,
            right: $,
            width: C,
            height: M,
            x: D,
            y: S
          };
        }
        return f;
      }
      const m = await o.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: s.floating,
        strategy: r
      });
      return i.reference.x !== m.reference.x || i.reference.y !== m.reference.y || i.reference.width !== m.reference.width || i.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, Up = /* @__PURE__ */ new Set(["left", "top"]);
async function Vp(e, t) {
  const {
    placement: n,
    platform: s,
    elements: i
  } = e, o = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), r = te(n), l = le(n), c = Se(n) === "y", a = Up.has(r) ? -1 : 1, u = o && c ? -1 : 1, d = ze(t, e);
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
const jp = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, s;
      const {
        x: i,
        y: o,
        placement: r,
        middlewareData: l
      } = t, c = await Vp(t, e);
      return r === ((n = l.offset) == null ? void 0 : n.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: i + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: r
        }
      };
    }
  };
}, zp = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: s,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: b,
              y: T
            } = y;
            return {
              x: b,
              y: T
            };
          }
        },
        ...c
      } = ze(e, t), a = {
        x: n,
        y: s
      }, u = await jn(t, c), d = Se(te(i)), f = Ga(d);
      let h = a[f], p = a[d];
      if (o) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", T = h + u[y], N = h - u[b];
        h = Uo(T, h, N);
      }
      if (r) {
        const y = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", T = p + u[y], N = p - u[b];
        p = Uo(T, p, N);
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
            [f]: o,
            [d]: r
          }
        }
      };
    }
  };
}, Wp = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, s;
      const {
        placement: i,
        rects: o,
        platform: r,
        elements: l
      } = t, {
        apply: c = () => {
        },
        ...a
      } = ze(e, t), u = await jn(t, a), d = te(i), f = le(i), h = Se(i) === "y", {
        width: p,
        height: m
      } = o.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = f === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
      const T = m - u.top - u.bottom, N = p - u.left - u.right, S = Te(m - u[y], T), L = Te(p - u[b], N), D = !t.middlewareData.shift;
      let $ = S, C = L;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = N), (s = t.middlewareData.shift) != null && s.enabled.y && ($ = T), D && !f) {
        const _ = Dt(u.left, 0), F = Dt(u.right, 0), I = Dt(u.top, 0), z = Dt(u.bottom, 0);
        h ? C = p - 2 * (_ !== 0 || F !== 0 ? _ + F : Dt(u.left, u.right)) : $ = m - 2 * (I !== 0 || z !== 0 ? I + z : Dt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: C,
        availableHeight: $
      });
      const M = await r.getDimensions(l.floating);
      return p !== M.width || m !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Wi() {
  return typeof window < "u";
}
function Qn(e) {
  return Za(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function We(e) {
  var t;
  return (t = (Za(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Za(e) {
  return Wi() ? e instanceof Node || e instanceof Kt(e).Node : !1;
}
function de(e) {
  return Wi() ? e instanceof Element || e instanceof Kt(e).Element : !1;
}
function Me(e) {
  return Wi() ? e instanceof HTMLElement || e instanceof Kt(e).HTMLElement : !1;
}
function nc(e) {
  return !Wi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Kt(e).ShadowRoot;
}
const Kp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: s,
    display: i
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !Kp.has(i);
}
const qp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Jp(e) {
  return qp.has(Qn(e));
}
const Yp = [":popover-open", ":modal"];
function Ki(e) {
  return Yp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Gp = ["transform", "translate", "scale", "rotate", "perspective"], Xp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Qp = ["paint", "layout", "strict", "content"];
function Ar(e) {
  const t = Tr(), n = de(e) ? fe(e) : e;
  return Gp.some((s) => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Xp.some((s) => (n.willChange || "").includes(s)) || Qp.some((s) => (n.contain || "").includes(s));
}
function Zp(e) {
  let t = nn(e);
  for (; Me(t) && !zn(t); ) {
    if (Ar(t))
      return t;
    if (Ki(t))
      return null;
    t = nn(t);
  }
  return null;
}
function Tr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const tg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function zn(e) {
  return tg.has(Qn(e));
}
function fe(e) {
  return Kt(e).getComputedStyle(e);
}
function qi(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nn(e) {
  if (Qn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nc(e) && e.host || // Fallback.
    We(e)
  );
  return nc(t) ? t.host : t;
}
function tu(e) {
  const t = nn(e);
  return zn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Me(t) && Bs(t) ? t : tu(t);
}
function eu(e, t, n) {
  var s;
  t === void 0 && (t = []);
  const i = tu(e), o = i === ((s = e.ownerDocument) == null ? void 0 : s.body), r = Kt(i);
  return o ? (Vo(r), t.concat(r, r.visualViewport || [], Bs(i) ? i : [], [])) : t.concat(i, eu(i, []));
}
function Vo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nu(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Me(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, l = _i(n) !== o || _i(s) !== r;
  return l && (n = o, s = r), {
    width: n,
    height: s,
    $: l
  };
}
function su(e) {
  return de(e) ? e : e.contextElement;
}
function Pn(e) {
  const t = su(e);
  if (!Me(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: o
  } = nu(t);
  let r = (o ? _i(n.width) : n.width) / s, l = (o ? _i(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const eg = /* @__PURE__ */ Ce(0);
function iu(e) {
  const t = Kt(e);
  return !Tr() || !t.visualViewport ? eg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ng(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Kt(e) ? !1 : t;
}
function xs(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = su(e);
  let r = Ce(1);
  t && (s ? de(s) && (r = Pn(s)) : r = Pn(e));
  const l = ng(o, n, s) ? iu(o) : Ce(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, u = i.width / r.x, d = i.height / r.y;
  if (o) {
    const f = Kt(o), h = s && de(s) ? Kt(s) : s;
    let p = f, m = Vo(p);
    for (; m && s && h !== p; ) {
      const y = Pn(m), b = m.getBoundingClientRect(), T = fe(m), N = b.left + (m.clientLeft + parseFloat(T.paddingLeft)) * y.x, S = b.top + (m.clientTop + parseFloat(T.paddingTop)) * y.y;
      c *= y.x, a *= y.y, u *= y.x, d *= y.y, c += N, a += S, p = Kt(m), m = Vo(p);
    }
  }
  return Vn({
    width: u,
    height: d,
    x: c,
    y: a
  });
}
function Ji(e, t) {
  const n = qi(e).scrollLeft;
  return t ? t.left + n : xs(We(e)).left + n;
}
function ou(e, t) {
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - Ji(e, n), i = n.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function sg(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: s,
    strategy: i
  } = e;
  const o = i === "fixed", r = We(s), l = t ? Ki(t.floating) : !1;
  if (s === r || l && o)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ce(1);
  const u = Ce(0), d = Me(s);
  if ((d || !d && !o) && ((Qn(s) !== "body" || Bs(r)) && (c = qi(s)), Me(s))) {
    const h = xs(s);
    a = Pn(s), u.x = h.x + s.clientLeft, u.y = h.y + s.clientTop;
  }
  const f = r && !d && !o ? ou(r, c) : Ce(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + u.x + f.x,
    y: n.y * a.y - c.scrollTop * a.y + u.y + f.y
  };
}
function ig(e) {
  return Array.from(e.getClientRects());
}
function og(e) {
  const t = We(e), n = qi(e), s = e.ownerDocument.body, i = Dt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), o = Dt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let r = -n.scrollLeft + Ji(e);
  const l = -n.scrollTop;
  return fe(s).direction === "rtl" && (r += Dt(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: o,
    x: r,
    y: l
  };
}
const sc = 25;
function rg(e, t) {
  const n = Kt(e), s = We(e), i = n.visualViewport;
  let o = s.clientWidth, r = s.clientHeight, l = 0, c = 0;
  if (i) {
    o = i.width, r = i.height;
    const u = Tr();
    (!u || u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  const a = Ji(s);
  if (a <= 0) {
    const u = s.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(s.clientWidth - d.clientWidth - h);
    p <= sc && (o -= p);
  } else a <= sc && (o += a);
  return {
    width: o,
    height: r,
    x: l,
    y: c
  };
}
const lg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function cg(e, t) {
  const n = xs(e, !0, t === "fixed"), s = n.top + e.clientTop, i = n.left + e.clientLeft, o = Me(e) ? Pn(e) : Ce(1), r = e.clientWidth * o.x, l = e.clientHeight * o.y, c = i * o.x, a = s * o.y;
  return {
    width: r,
    height: l,
    x: c,
    y: a
  };
}
function ic(e, t, n) {
  let s;
  if (t === "viewport")
    s = rg(e, n);
  else if (t === "document")
    s = og(We(e));
  else if (de(t))
    s = cg(t, n);
  else {
    const i = iu(e);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Vn(s);
}
function ru(e, t) {
  const n = nn(e);
  return n === t || !de(n) || zn(n) ? !1 : fe(n).position === "fixed" || ru(n, t);
}
function ag(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let s = eu(e, []).filter((l) => de(l) && Qn(l) !== "body"), i = null;
  const o = fe(e).position === "fixed";
  let r = o ? nn(e) : e;
  for (; de(r) && !zn(r); ) {
    const l = fe(r), c = Ar(r);
    !c && l.position === "fixed" && (i = null), (o ? !c && !i : !c && l.position === "static" && !!i && lg.has(i.position) || Bs(r) && !c && ru(e, r)) ? s = s.filter((u) => u !== r) : i = l, r = nn(r);
  }
  return t.set(e, s), s;
}
function ug(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: s,
    strategy: i
  } = e;
  const r = [...n === "clippingAncestors" ? Ki(t) ? [] : ag(t, this._c) : [].concat(n), s], l = r[0], c = r.reduce((a, u) => {
    const d = ic(t, u, i);
    return a.top = Dt(d.top, a.top), a.right = Te(d.right, a.right), a.bottom = Te(d.bottom, a.bottom), a.left = Dt(d.left, a.left), a;
  }, ic(t, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function dg(e) {
  const {
    width: t,
    height: n
  } = nu(e);
  return {
    width: t,
    height: n
  };
}
function fg(e, t, n) {
  const s = Me(t), i = We(t), o = n === "fixed", r = xs(e, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ce(0);
  function a() {
    c.x = Ji(i);
  }
  if (s || !s && !o)
    if ((Qn(t) !== "body" || Bs(i)) && (l = qi(t)), s) {
      const h = xs(t, !0, o, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else i && a();
  o && !s && i && a();
  const u = i && !s && !o ? ou(i, l) : Ce(0), d = r.left + l.scrollLeft - c.x - u.x, f = r.top + l.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: r.width,
    height: r.height
  };
}
function yo(e) {
  return fe(e).position === "static";
}
function oc(e, t) {
  if (!Me(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return We(e) === n && (n = n.ownerDocument.body), n;
}
function lu(e, t) {
  const n = Kt(e);
  if (Ki(e))
    return n;
  if (!Me(e)) {
    let i = nn(e);
    for (; i && !zn(i); ) {
      if (de(i) && !yo(i))
        return i;
      i = nn(i);
    }
    return n;
  }
  let s = oc(e, t);
  for (; s && Jp(s) && yo(s); )
    s = oc(s, t);
  return s && zn(s) && yo(s) && !Ar(s) ? n : s || Zp(e) || n;
}
const hg = async function(e) {
  const t = this.getOffsetParent || lu, n = this.getDimensions, s = await n(e.floating);
  return {
    reference: fg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function pg(e) {
  return fe(e).direction === "rtl";
}
const gg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sg,
  getDocumentElement: We,
  getClippingRect: ug,
  getOffsetParent: lu,
  getElementRects: hg,
  getClientRects: ig,
  getDimensions: dg,
  getScale: Pn,
  isElement: de,
  isRTL: pg
}, cu = jp, au = Pp, uu = zp, du = $p, fu = Wp, hu = Bp, pu = Lp, gu = Hp, Mr = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: gg,
    ...n
  }, o = {
    ...i.platform,
    _c: s
  };
  return Rp(e, t, {
    ...i,
    platform: o
  });
}, ce = () => /* @__PURE__ */ new Map(), jo = (e) => {
  const t = ce();
  return e.forEach((n, s) => {
    t.set(s, n);
  }), t;
}, Ke = (e, t, n) => {
  let s = e.get(t);
  return s === void 0 && e.set(t, s = n()), s;
}, mg = (e, t) => {
  const n = [];
  for (const [s, i] of e)
    n.push(t(i, s));
  return n;
}, wg = (e, t) => {
  for (const [n, s] of e)
    if (t(s, n))
      return !0;
  return !1;
}, kn = () => /* @__PURE__ */ new Set(), vo = (e) => e[e.length - 1], bg = (e, t) => {
  for (let n = 0; n < t.length; n++)
    e.push(t[n]);
}, Sn = Array.from, yg = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return !0;
  return !1;
}, zo = Array.isArray;
class mu {
  constructor() {
    this._observers = ce();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, n) {
    return Ke(
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
    return Sn((this._observers.get(t) || ce()).values()).forEach((s) => s(...n));
  }
  destroy() {
    this._observers = ce();
  }
}
const Ve = Math.floor, ri = Math.abs, Wn = (e, t) => e < t ? e : t, sn = (e, t) => e > t ? e : t, wu = (e) => e !== 0 ? e < 0 : 1 / e < 0, rc = 1, lc = 2, _o = 4, xo = 8, ks = 32, Fe = 64, Nt = 128, vg = 1 << 29, Yi = 31, Wo = 63, vn = 127, _g = 2147483647, bu = Number.MAX_SAFE_INTEGER, xg = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && Ve(e) === e), kg = String.fromCharCode, Sg = (e) => e.toLowerCase(), Cg = /^\s*/g, Eg = (e) => e.replace(Cg, ""), Ag = /([A-Z])/g, cc = (e, t) => Eg(e.replace(Ag, (n) => `${t}${Sg(n)}`)), Tg = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, s = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    s[i] = /** @type {number} */
    t.codePointAt(i);
  return s;
}, Ss = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), Mg = (e) => Ss.encode(e), Og = Ss ? Mg : Tg;
let gs = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
gs && gs.decode(new Uint8Array()).length === 1 && (gs = null);
class Fs {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Hs = () => new Fs(), Dg = (e) => {
  const t = Hs();
  return e(t), re(t);
}, Ig = (e) => {
  let t = e.cpos;
  for (let n = 0; n < e.bufs.length; n++)
    t += e.bufs[n].length;
  return t;
}, re = (e) => {
  const t = new Uint8Array(Ig(e));
  let n = 0;
  for (let s = 0; s < e.bufs.length; s++) {
    const i = e.bufs[s];
    t.set(i, n), n += i.length;
  }
  return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Rg = (e, t) => {
  const n = e.cbuf.length;
  n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(sn(n, t) * 2), e.cpos = 0);
}, yt = (e, t) => {
  const n = e.cbuf.length;
  e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Ko = yt, Z = (e, t) => {
  for (; t > vn; )
    yt(e, Nt | vn & t), t = Ve(t / 128);
  yt(e, vn & t);
}, Or = (e, t) => {
  const n = wu(t);
  for (n && (t = -t), yt(e, (t > Wo ? Nt : 0) | (n ? Fe : 0) | Wo & t), t = Ve(t / 64); t > 0; )
    yt(e, (t > vn ? Nt : 0) | vn & t), t = Ve(t / 128);
}, qo = new Uint8Array(3e4), Lg = qo.length / 3, Ng = (e, t) => {
  if (t.length < Lg) {
    const n = Ss.encodeInto(t, qo).written || 0;
    Z(e, n);
    for (let s = 0; s < n; s++)
      yt(e, qo[s]);
  } else
    jt(e, Og(t));
}, Pg = (e, t) => {
  const n = unescape(encodeURIComponent(t)), s = n.length;
  Z(e, s);
  for (let i = 0; i < s; i++)
    yt(
      e,
      /** @type {number} */
      n.codePointAt(i)
    );
}, $n = Ss && /** @type {any} */
Ss.encodeInto ? Ng : Pg, Gi = (e, t) => {
  const n = e.cbuf.length, s = e.cpos, i = Wn(n - s, t.length), o = t.length - i;
  e.cbuf.set(t.subarray(0, i), s), e.cpos += i, o > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(sn(n * 2, o)), e.cbuf.set(t.subarray(i)), e.cpos = o);
}, jt = (e, t) => {
  Z(e, t.byteLength), Gi(e, t);
}, Dr = (e, t) => {
  Rg(e, t);
  const n = new DataView(e.cbuf.buffer, e.cpos, t);
  return e.cpos += t, n;
}, $g = (e, t) => Dr(e, 4).setFloat32(0, t, !1), Bg = (e, t) => Dr(e, 8).setFloat64(0, t, !1), Fg = (e, t) => (
  /** @type {any} */
  Dr(e, 8).setBigInt64(0, t, !1)
), ac = new DataView(new ArrayBuffer(4)), Hg = (e) => (ac.setFloat32(0, e), ac.getFloat32(0) === e), Kn = (e, t) => {
  switch (typeof t) {
    case "string":
      yt(e, 119), $n(e, t);
      break;
    case "number":
      xg(t) && ri(t) <= _g ? (yt(e, 125), Or(e, t)) : Hg(t) ? (yt(e, 124), $g(e, t)) : (yt(e, 123), Bg(e, t));
      break;
    case "bigint":
      yt(e, 122), Fg(e, t);
      break;
    case "object":
      if (t === null)
        yt(e, 126);
      else if (zo(t)) {
        yt(e, 117), Z(e, t.length);
        for (let n = 0; n < t.length; n++)
          Kn(e, t[n]);
      } else if (t instanceof Uint8Array)
        yt(e, 116), jt(e, t);
      else {
        yt(e, 118);
        const n = Object.keys(t);
        Z(e, n.length);
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          $n(e, i), Kn(e, t[i]);
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
class uc extends Fs {
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
const dc = (e) => {
  e.count > 0 && (Or(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && Z(e.encoder, e.count - 2));
};
class li {
  constructor() {
    this.encoder = new Fs(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (dc(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return dc(this), re(this.encoder);
  }
}
const fc = (e) => {
  if (e.count > 0) {
    const t = e.diff * 2 + (e.count === 1 ? 0 : 1);
    Or(e.encoder, t), e.count > 1 && Z(e.encoder, e.count - 2);
  }
};
class ko {
  constructor() {
    this.encoder = new Fs(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (fc(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return fc(this), re(this.encoder);
  }
}
class Ug {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new li();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new Fs();
    return this.sarr.push(this.s), this.s = "", $n(t, this.sarr.join("")), Gi(t, this.lensE.toUint8Array()), re(t);
  }
}
const on = (e) => new Error(e), ae = () => {
  throw on("Method unimplemented");
}, Ut = () => {
  throw on("Unexpected case");
}, yu = on("Unexpected end of array"), vu = on("Integer out of Range");
class Xi {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const Ir = (e) => new Xi(e), Vg = (e) => e.pos !== e.arr.length, jg = (e, t) => {
  const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
  return e.pos += t, n;
}, Gt = (e) => jg(e, lt(e)), Cs = (e) => e.arr[e.pos++], lt = (e) => {
  let t = 0, n = 1;
  const s = e.arr.length;
  for (; e.pos < s; ) {
    const i = e.arr[e.pos++];
    if (t = t + (i & vn) * n, n *= 128, i < Nt)
      return t;
    if (t > bu)
      throw vu;
  }
  throw yu;
}, Rr = (e) => {
  let t = e.arr[e.pos++], n = t & Wo, s = 64;
  const i = (t & Fe) > 0 ? -1 : 1;
  if ((t & Nt) === 0)
    return i * n;
  const o = e.arr.length;
  for (; e.pos < o; ) {
    if (t = e.arr[e.pos++], n = n + (t & vn) * s, s *= 128, t < Nt)
      return i * n;
    if (n > bu)
      throw vu;
  }
  throw yu;
}, zg = (e) => {
  let t = lt(e);
  if (t === 0)
    return "";
  {
    let n = String.fromCodePoint(Cs(e));
    if (--t < 100)
      for (; t--; )
        n += String.fromCodePoint(Cs(e));
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
}, Wg = (e) => (
  /** @type any */
  gs.decode(Gt(e))
), Jo = gs ? Wg : zg, Lr = (e, t) => {
  const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
  return e.pos += t, n;
}, Kg = (e) => Lr(e, 4).getFloat32(0, !1), qg = (e) => Lr(e, 8).getFloat64(0, !1), Jg = (e) => (
  /** @type {any} */
  Lr(e, 8).getBigInt64(0, !1)
), Yg = [
  (e) => {
  },
  // CASE 127: undefined
  (e) => null,
  // CASE 126: null
  Rr,
  // CASE 125: integer
  Kg,
  // CASE 124: float32
  qg,
  // CASE 123: float64
  Jg,
  // CASE 122: bigint
  (e) => !1,
  // CASE 121: boolean (false)
  (e) => !0,
  // CASE 120: boolean (true)
  Jo,
  // CASE 119: string
  (e) => {
    const t = lt(e), n = {};
    for (let s = 0; s < t; s++) {
      const i = Jo(e);
      n[i] = Si(e);
    }
    return n;
  },
  (e) => {
    const t = lt(e), n = [];
    for (let s = 0; s < t; s++)
      n.push(Si(e));
    return n;
  },
  Gt
  // CASE 116: Uint8Array
], Si = (e) => Yg[127 - Cs(e)](e);
class hc extends Xi {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, n) {
    super(t), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), Vg(this) ? this.count = lt(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class ci extends Xi {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Rr(this);
      const t = wu(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = lt(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class So extends Xi {
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
      const t = Rr(this), n = t & 1;
      this.diff = Ve(t / 2), this.count = 1, n && (this.count = lt(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Gg {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new ci(t), this.str = Jo(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), n = this.str.slice(this.spos, t);
    return this.spos = t, n;
  }
}
const Xg = crypto.getRandomValues.bind(crypto), Qg = Math.random, _u = () => Xg(new Uint32Array(1))[0], Zg = (e) => e[Ve(Qg() * e.length)], tm = "10000000-1000-4000-8000" + -1e11, em = () => tm.replace(
  /[018]/g,
  /** @param {number} c */
  (e) => (e ^ _u() & 15 >> e / 4).toString(16)
), nm = Date.now, pc = (e) => (
  /** @type {Promise<T>} */
  new Promise(e)
);
Promise.all.bind(Promise);
const gc = (e) => e === void 0 ? null : e;
class sm {
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
let xu = new sm(), im = !0;
try {
  typeof localStorage < "u" && localStorage && (xu = localStorage, im = !1);
} catch {
}
const om = xu, rm = Object.assign, ku = Object.keys, lm = (e, t) => {
  for (const n in e)
    t(e[n], n);
}, mc = (e) => ku(e).length, cm = (e) => {
  for (const t in e)
    return !1;
  return !0;
}, Su = (e, t) => {
  for (const n in e)
    if (!t(e[n], n))
      return !1;
  return !0;
}, am = (e, t) => Object.prototype.hasOwnProperty.call(e, t), um = (e, t) => e === t || mc(e) === mc(t) && Su(e, (n, s) => (n !== void 0 || am(t, s)) && t[s] === n), dm = Object.freeze, Cu = (e) => {
  for (const t in e) {
    const n = e[t];
    (typeof n == "object" || typeof n == "function") && Cu(e[t]);
  }
  return dm(e);
}, Nr = (e, t, n = 0) => {
  try {
    for (; n < e.length; n++)
      e[n](...t);
  } finally {
    n < e.length && Nr(e, t, n + 1);
  }
}, fm = (e, t) => t.includes(e), qn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Eu = typeof window < "u" && typeof document < "u" && !qn;
let _e;
const hm = () => {
  if (_e === void 0)
    if (qn) {
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
        _e.set(`--${cc(t, "-")}`, n), _e.set(`-${cc(t, "-")}`, n);
      }
    })) : _e = ce();
  return _e;
}, Yo = (e) => hm().has(e), Ci = (e) => gc(qn ? process.env[e.toUpperCase().replaceAll("-", "_")] : om.getItem(e)), Au = (e) => Yo("--" + e) || Ci(e) !== null;
Au("production");
const pm = qn && fm(process.env.FORCE_COLOR, ["true", "1", "2"]), gm = pm || !Yo("--no-colors") && // @todo deprecate --no-colors
!Au("no-color") && (!qn || process.stdout.isTTY) && (!qn || Yo("--color") || Ci("COLORTERM") !== null || (Ci("TERM") || "").includes("color")), mm = (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += kg(e[n]);
  return btoa(t);
}, wm = (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), bm = Eu ? mm : wm, ym = (e) => Dg((t) => Kn(t, e));
class vm {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, n) {
    this.left = t, this.right = n;
  }
}
const De = (e, t) => new vm(e, t), _m = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const xm = (e) => mg(e, (t, n) => `${n}:${t};`).join(""), km = (e) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    e(this._);
  }
}, Sm = km(clearTimeout), Tu = (e, t) => new Sm(setTimeout(t, e)), qe = Symbol, Mu = qe(), Ou = qe(), Cm = qe(), Em = qe(), Am = qe(), Du = qe(), Tm = qe(), Pr = qe(), Mm = qe(), Om = (e) => {
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
}, Dm = {
  [Mu]: De("font-weight", "bold"),
  [Ou]: De("font-weight", "normal"),
  [Cm]: De("color", "blue"),
  [Am]: De("color", "green"),
  [Em]: De("color", "grey"),
  [Du]: De("color", "red"),
  [Tm]: De("color", "purple"),
  [Pr]: De("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [Mm]: De("color", "black")
}, Im = (e) => {
  e.length === 1 && e[0]?.constructor === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [], s = ce();
  let i = [], o = 0;
  for (; o < e.length; o++) {
    const r = e[o], l = Dm[r];
    if (l !== void 0)
      s.set(l.left, l.right);
    else {
      if (r === void 0)
        break;
      if (r.constructor === String || r.constructor === Number) {
        const c = xm(s);
        o > 0 || c.length > 0 ? (t.push("%c" + r), n.push(c)) : t.push(r);
      } else
        break;
    }
  }
  for (o > 0 && (i = n, i.unshift(t.join(""))); o < e.length; o++) {
    const r = e[o];
    r instanceof Symbol || i.push(r);
  }
  return i;
}, Iu = gm ? Im : Om, Rm = (...e) => {
  console.log(...Iu(e)), Lu.forEach((t) => t.print(e));
}, Ru = (...e) => {
  console.warn(...Iu(e)), e.unshift(Pr), Lu.forEach((t) => t.print(e));
}, Lu = kn(), Nu = (e) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: e
}), Lm = (e, t) => Nu(() => {
  let n;
  do
    n = e.next();
  while (!n.done && !t(n.value));
  return n;
}), Co = (e, t) => Nu(() => {
  const { done: n, value: s } = e.next();
  return { done: n, value: n ? void 0 : t(s) };
});
class $r {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(t, n) {
    this.clock = t, this.len = n;
  }
}
class Zn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const rn = (e, t, n) => t.clients.forEach((s, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    e.doc.store.clients.get(i)
  );
  if (o != null) {
    const r = o[o.length - 1], l = r.id.clock + r.length;
    for (let c = 0, a = s[c]; c < s.length && a.clock < l; a = s[++c])
      ju(e, o, a.clock, a.len, n);
  }
}), Nm = (e, t) => {
  let n = 0, s = e.length - 1;
  for (; n <= s; ) {
    const i = Ve((n + s) / 2), o = e[i], r = o.clock;
    if (r <= t) {
      if (t < r + o.len)
        return i;
      n = i + 1;
    } else
      s = i - 1;
  }
  return null;
}, ts = (e, t) => {
  const n = e.clients.get(t.client);
  return n !== void 0 && Nm(n, t.clock) !== null;
}, Br = (e) => {
  e.clients.forEach((t) => {
    t.sort((i, o) => i.clock - o.clock);
    let n, s;
    for (n = 1, s = 1; n < t.length; n++) {
      const i = t[s - 1], o = t[n];
      i.clock + i.len >= o.clock ? i.len = sn(i.len, o.clock + o.len - i.clock) : (s < n && (t[s] = o), s++);
    }
    t.length = s;
  });
}, Go = (e) => {
  const t = new Zn();
  for (let n = 0; n < e.length; n++)
    e[n].clients.forEach((s, i) => {
      if (!t.clients.has(i)) {
        const o = s.slice();
        for (let r = n + 1; r < e.length; r++)
          bg(o, e[r].clients.get(i) || []);
        t.clients.set(i, o);
      }
    });
  return Br(t), t;
}, Es = (e, t, n, s) => {
  Ke(e.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new $r(n, s));
}, Pu = () => new Zn(), Pm = (e) => {
  const t = Pu();
  return e.clients.forEach((n, s) => {
    const i = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      if (r.deleted) {
        const l = r.id.clock;
        let c = r.length;
        if (o + 1 < n.length)
          for (let a = n[o + 1]; o + 1 < n.length && a.deleted; a = n[++o + 1])
            c += a.length;
        i.push(new $r(l, c));
      }
    }
    i.length > 0 && t.clients.set(s, i);
  }), t;
}, Fr = (e, t) => {
  Z(e.restEncoder, t.clients.size), Sn(t.clients.entries()).sort((n, s) => s[0] - n[0]).forEach(([n, s]) => {
    e.resetDsCurVal(), Z(e.restEncoder, n);
    const i = s.length;
    Z(e.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const r = s[o];
      e.writeDsClock(r.clock), e.writeDsLen(r.len);
    }
  });
}, $m = (e) => {
  const t = new Zn(), n = lt(e.restDecoder);
  for (let s = 0; s < n; s++) {
    e.resetDsCurVal();
    const i = lt(e.restDecoder), o = lt(e.restDecoder);
    if (o > 0) {
      const r = Ke(t.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < o; l++)
        r.push(new $r(e.readDsClock(), e.readDsLen()));
    }
  }
  return t;
}, wc = (e, t, n) => {
  const s = new Zn(), i = lt(e.restDecoder);
  for (let o = 0; o < i; o++) {
    e.resetDsCurVal();
    const r = lt(e.restDecoder), l = lt(e.restDecoder), c = n.clients.get(r) || [], a = mt(n, r);
    for (let u = 0; u < l; u++) {
      const d = e.readDsClock(), f = d + e.readDsLen();
      if (d < a) {
        a < f && Es(s, r, a, f - a);
        let h = he(c, d), p = c[h];
        for (!p.deleted && p.id.clock < d && (c.splice(h + 1, 0, Ii(t, p, d - p.id.clock)), h++); h < c.length && (p = c[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && c.splice(h, 0, Ii(t, p, f - p.id.clock)), p.delete(t));
      } else
        Es(s, r, d, f - d);
    }
  }
  if (s.clients.size > 0) {
    const o = new Qi();
    return Z(o.restEncoder, 0), Fr(o, s), o.toUint8Array();
  }
  return null;
}, $u = _u;
class Tn extends mu {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = em(), collectionid: n = null, gc: s = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: r = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = i, this.clientID = $u(), this.guid = t, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Uu(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = r, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = pc((a) => {
      this.on("load", () => {
        this.isLoaded = !0, a(this);
      });
    });
    const c = () => pc((a) => {
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
    return new Set(Sn(this.subdocs).map((t) => t.guid));
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
    const s = Ke(this.share, t, () => {
      const o = new n();
      return o._integrate(this, null), o;
    }), i = s.constructor;
    if (n !== vt && i !== n)
      if (i === vt) {
        const o = new n();
        o._map = s._map, s._map.forEach(
          /** @param {Item?} n */
          (r) => {
            for (; r !== null; r = r.left)
              r.parent = o;
          }
        ), o._start = s._start;
        for (let r = o._start; r !== null; r = r.right)
          r.parent = o;
        return o._length = s._length, this.share.set(t, o), o._integrate(this, null), /** @type {InstanceType<Type>} */
        o;
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
      this.get(t, Hn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(t = "") {
    return this.get(t, ln);
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
      this.get(t, Jn)
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
      this.get(t, Et)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(t = "") {
    return this.get(t, Cn);
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
    this.isDestroyed = !0, Sn(this.subdocs).forEach((n) => n.destroy());
    const t = this._item;
    if (t !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        t.content
      );
      n.doc = new Tn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = t, it(
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
class Bm {
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
    return this.dsCurrVal += lt(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const t = lt(this.restDecoder) + 1;
    return this.dsCurrVal += t, t;
  }
}
class Ei extends Bm {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], lt(t), this.keyClockDecoder = new So(Gt(t)), this.clientDecoder = new ci(Gt(t)), this.leftClockDecoder = new So(Gt(t)), this.rightClockDecoder = new So(Gt(t)), this.infoDecoder = new hc(Gt(t), Cs), this.stringDecoder = new Gg(Gt(t)), this.parentInfoDecoder = new hc(Gt(t), Cs), this.typeRefDecoder = new ci(Gt(t)), this.lenDecoder = new ci(Gt(t));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new Bn(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new Bn(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return Si(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Gt(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return Si(this.restDecoder);
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
class Fm {
  constructor() {
    this.restEncoder = Hs();
  }
  toUint8Array() {
    return re(this.restEncoder);
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
class Hm extends Fm {
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
    Ko(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    $n(this.restEncoder, t);
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
    Kn(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    jt(this.restEncoder, t);
  }
  /**
   * @param {any} embed
   */
  writeJSON(t) {
    $n(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    $n(this.restEncoder, t);
  }
}
class Um {
  constructor() {
    this.restEncoder = Hs(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return re(this.restEncoder);
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
    t === 0 && Ut(), Z(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Qi extends Um {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new ko(), this.clientEncoder = new li(), this.leftClockEncoder = new ko(), this.rightClockEncoder = new ko(), this.infoEncoder = new uc(Ko), this.stringEncoder = new Ug(), this.parentInfoEncoder = new uc(Ko), this.typeRefEncoder = new li(), this.lenEncoder = new li();
  }
  toUint8Array() {
    const t = Hs();
    return Z(t, 0), jt(t, this.keyClockEncoder.toUint8Array()), jt(t, this.clientEncoder.toUint8Array()), jt(t, this.leftClockEncoder.toUint8Array()), jt(t, this.rightClockEncoder.toUint8Array()), jt(t, re(this.infoEncoder)), jt(t, this.stringEncoder.toUint8Array()), jt(t, re(this.parentInfoEncoder)), jt(t, this.typeRefEncoder.toUint8Array()), jt(t, this.lenEncoder.toUint8Array()), Gi(t, re(this.restEncoder)), re(t);
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
    Kn(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    jt(this.restEncoder, t);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(t) {
    Kn(this.restEncoder, t);
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
const Vm = (e, t, n, s) => {
  s = sn(s, t[0].id.clock);
  const i = he(t, s);
  Z(e.restEncoder, t.length - i), e.writeClient(n), Z(e.restEncoder, s);
  const o = t[i];
  o.write(e, s - o.id.clock);
  for (let r = i + 1; r < t.length; r++)
    t[r].write(e, 0);
}, Bu = (e, t, n) => {
  const s = /* @__PURE__ */ new Map();
  n.forEach((i, o) => {
    mt(t, o) > i && s.set(o, i);
  }), Zi(t).forEach((i, o) => {
    n.has(o) || s.set(o, 0);
  }), Z(e.restEncoder, s.size), Sn(s.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    Vm(
      e,
      /** @type {Array<GC|Item>} */
      t.clients.get(i),
      i,
      o
    );
  });
}, jm = (e, t) => {
  const n = ce(), s = lt(e.restDecoder);
  for (let i = 0; i < s; i++) {
    const o = lt(e.restDecoder), r = new Array(o), l = e.readClient();
    let c = lt(e.restDecoder);
    n.set(l, { i: 0, refs: r });
    for (let a = 0; a < o; a++) {
      const u = e.readInfo();
      switch (Yi & u) {
        case 0: {
          const d = e.readLen();
          r[a] = new Qt(W(l, c), d), c += d;
          break;
        }
        case 10: {
          const d = lt(e.restDecoder);
          r[a] = new ie(W(l, c), d), c += d;
          break;
        }
        default: {
          const d = (u & (Fe | Nt)) === 0, f = new nt(
            W(l, c),
            null,
            // left
            (u & Nt) === Nt ? e.readLeftID() : null,
            // origin
            null,
            // right
            (u & Fe) === Fe ? e.readRightID() : null,
            // right origin
            d ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null,
            // parent
            d && (u & ks) === ks ? e.readString() : null,
            // parentSub
            dd(e, u)
            // item content
          );
          r[a] = f, c += f.length;
        }
      }
    }
  }
  return n;
}, zm = (e, t, n) => {
  const s = [];
  let i = Sn(n.keys()).sort((h, p) => h - p);
  if (i.length === 0)
    return null;
  const o = () => {
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
  let r = o();
  if (r === null)
    return null;
  const l = new Uu(), c = /* @__PURE__ */ new Map(), a = (h, p) => {
    const m = c.get(h);
    (m == null || m > p) && c.set(h, p);
  };
  let u = (
    /** @type {any} */
    r.refs[
      /** @type {any} */
      r.i++
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
    if (u.constructor !== ie) {
      const p = Ke(d, u.id.client, () => mt(t, u.id.client)) - u.id.clock;
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
    else if (r !== null && r.i < r.refs.length)
      u = /** @type {GC|Item} */
      r.refs[r.i++];
    else {
      if (r = o(), r === null)
        break;
      u = /** @type {GC|Item} */
      r.refs[r.i++];
    }
  }
  if (l.clients.size > 0) {
    const h = new Qi();
    return Bu(h, l, /* @__PURE__ */ new Map()), Z(h.restEncoder, 0), { missing: c, update: h.toUint8Array() };
  }
  return null;
}, Wm = (e, t) => Bu(e, t.doc.store, t.beforeState), Km = (e, t, n, s = new Ei(e)) => it(t, (i) => {
  i.local = !1;
  let o = !1;
  const r = i.doc, l = r.store, c = jm(s, r), a = zm(i, l, c), u = l.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < mt(l, f)) {
        o = !0;
        break;
      }
    if (a) {
      for (const [f, h] of a.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = Ec([u.update, a.update]);
    }
  } else
    l.pendingStructs = a;
  const d = wc(s, i, l);
  if (l.pendingDs) {
    const f = new Ei(Ir(l.pendingDs));
    lt(f.restDecoder);
    const h = wc(f, i, l);
    d && h ? l.pendingDs = Ec([d, h]) : l.pendingDs = d || h;
  } else
    l.pendingDs = d;
  if (o) {
    const f = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, Xo(i.doc, f);
  }
}, n, !1), Xo = (e, t, n, s = Ei) => {
  const i = Ir(t);
  Km(i, e, n, new s(i));
};
class qm {
  constructor() {
    this.l = [];
  }
}
const bc = () => new qm(), yc = (e, t) => e.l.push(t), vc = (e, t) => {
  const n = e.l, s = n.length;
  e.l = n.filter((i) => t !== i), s === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, Fu = (e, t, n) => Nr(e.l, [t, n]);
class Bn {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, n) {
    this.client = t, this.clock = n;
  }
}
const Ks = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, W = (e, t) => new Bn(e, t), As = (e) => {
  for (const [t, n] of e.doc.share.entries())
    if (n === e)
      return t;
  throw Ut();
}, Ts = (e, t) => {
  for (; t !== null; ) {
    if (t.parent === e)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
};
class Ai {
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
class Jm {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, n, s = 0) {
    this.type = t, this.index = n, this.assoc = s;
  }
}
const Ym = (e, t, n = 0) => new Jm(e, t, n), qs = (e, t, n) => {
  let s = null, i = null;
  return e._item === null ? i = As(e) : s = W(e._item.id.client, e._item.id.clock), new Ai(s, i, t, n);
}, Eo = (e, t, n = 0) => {
  let s = e._start;
  if (n < 0) {
    if (t === 0)
      return qs(e, null, n);
    t--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > t)
        return qs(e, W(s.id.client, s.id.clock + t), n);
      t -= s.length;
    }
    if (s.right === null && n < 0)
      return qs(e, s.lastId, n);
    s = s.right;
  }
  return qs(e, null, n);
}, Gm = (e, t) => {
  const n = Fn(e, t), s = t.clock - n.id.clock;
  return {
    item: n,
    diff: s
  };
}, Xm = (e, t, n = !0) => {
  const s = t.store, i = e.item, o = e.type, r = e.tname, l = e.assoc;
  let c = null, a = 0;
  if (i !== null) {
    if (mt(s, i.client) <= i.clock)
      return null;
    const u = n ? er(s, i) : Gm(s, i), d = u.item;
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
    if (r !== null)
      c = t.get(r);
    else if (o !== null) {
      if (mt(s, o.client) <= o.clock)
        return null;
      const { item: u } = n ? er(s, o) : { item: Fn(s, o) };
      if (u instanceof nt && u.content instanceof ge)
        c = u.content.type;
      else
        return null;
    } else
      throw Ut();
    l >= 0 ? a = c._length : a = 0;
  }
  return Ym(c, a, e.assoc);
};
class Hr {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, n) {
    this.ds = t, this.sv = n;
  }
}
const Hu = (e, t) => new Hr(e, t), Ao = (e) => Hu(Pm(e.store), Zi(e.store)), wn = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !ts(t.ds, e.id), Qo = (e, t) => {
  const n = Ke(e.meta, Qo, kn), s = e.doc.store;
  n.has(t) || (t.sv.forEach((i, o) => {
    i < mt(s, o) && Ft(e, W(o, i));
  }), rn(e, t.ds, (i) => {
  }), n.add(t));
};
class Uu {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Zi = (e) => {
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
}, Vu = (e, t) => {
  let n = e.clients.get(t.id.client);
  if (n === void 0)
    n = [], e.clients.set(t.id.client, n);
  else {
    const s = n[n.length - 1];
    if (s.id.clock + s.length !== t.id.clock)
      throw Ut();
  }
  n.push(t);
}, he = (e, t) => {
  let n = 0, s = e.length - 1, i = e[s], o = i.id.clock;
  if (o === t)
    return s;
  let r = Ve(t / (o + i.length - 1) * s);
  for (; n <= s; ) {
    if (i = e[r], o = i.id.clock, o <= t) {
      if (t < o + i.length)
        return r;
      n = r + 1;
    } else
      s = r - 1;
    r = Ve((n + s) / 2);
  }
  throw Ut();
}, Qm = (e, t) => {
  const n = e.clients.get(t.client);
  return n[he(n, t.clock)];
}, Fn = (
  /** @type {function(StructStore,ID):Item} */
  Qm
), Zo = (e, t, n) => {
  const s = he(t, n), i = t[s];
  return i.id.clock < n && i instanceof nt ? (t.splice(s + 1, 0, Ii(e, i, n - i.id.clock)), s + 1) : s;
}, Ft = (e, t) => {
  const n = (
    /** @type {Array<Item>} */
    e.doc.store.clients.get(t.client)
  );
  return n[Zo(e, n, t.clock)];
}, _c = (e, t, n) => {
  const s = t.clients.get(n.client), i = he(s, n.clock), o = s[i];
  return n.clock !== o.id.clock + o.length - 1 && o.constructor !== Qt && s.splice(i + 1, 0, Ii(e, o, n.clock - o.id.clock + 1)), o;
}, Zm = (e, t, n) => {
  const s = (
    /** @type {Array<GC|Item>} */
    e.clients.get(t.id.client)
  );
  s[he(s, t.id.clock)] = n;
}, ju = (e, t, n, s, i) => {
  if (s === 0)
    return;
  const o = n + s;
  let r = Zo(e, t, n), l;
  do
    l = t[r++], o < l.id.clock + l.length && Zo(e, t, o), i(l);
  while (r < t.length && t[r].id.clock < o);
};
class tw {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, n, s) {
    this.doc = t, this.deleteSet = new Zn(), this.beforeState = Zi(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const xc = (e, t) => t.deleteSet.clients.size === 0 && !wg(t.afterState, (n, s) => t.beforeState.get(s) !== n) ? !1 : (Br(t.deleteSet), Wm(e, t), Fr(e, t.deleteSet), !0), kc = (e, t, n) => {
  const s = t._item;
  (s === null || s.id.clock < (e.beforeState.get(s.id.client) || 0) && !s.deleted) && Ke(e.changed, t, kn).add(n);
}, ai = (e, t) => {
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
  const o = t - i;
  return o && e.splice(t + 1 - o, o), o;
}, ew = (e, t, n) => {
  for (const [s, i] of e.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let r = i.length - 1; r >= 0; r--) {
      const l = i[r], c = l.clock + l.len;
      for (let a = he(o, l.clock), u = o[a]; a < o.length && u.id.clock < c; u = o[++a]) {
        const d = o[a];
        if (l.clock + l.len <= d.id.clock)
          break;
        d instanceof nt && d.deleted && !d.keep && n(d) && d.gc(t, !1);
      }
    }
  }
}, nw = (e, t) => {
  e.clients.forEach((n, s) => {
    const i = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let o = n.length - 1; o >= 0; o--) {
      const r = n[o], l = Wn(i.length - 1, 1 + he(i, r.clock + r.len - 1));
      for (let c = l, a = i[c]; c > 0 && a.id.clock >= r.clock; a = i[c])
        c -= 1 + ai(i, c);
    }
  });
}, zu = (e, t) => {
  if (t < e.length) {
    const n = e[t], s = n.doc, i = s.store, o = n.deleteSet, r = n._mergeStructs;
    try {
      Br(o), n.afterState = Zi(n.doc.store), s.emit("beforeObserverCalls", [n, s]);
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
          }), c.sort((u, d) => u.path.length - d.path.length), Fu(a._dEH, c, n));
        });
      }), l.push(() => s.emit("afterTransaction", [n, s])), Nr(l, []), n._needFormattingCleanup && xw(n);
    } finally {
      s.gc && ew(o, i, s.gcFilter), nw(o, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = sn(he(h, f), 1);
          for (let m = h.length - 1; m >= p; )
            m -= 1 + ai(h, m);
        }
      });
      for (let u = r.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = r[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = he(h, f);
        p + 1 < h.length && ai(h, p + 1) > 1 || p > 0 && ai(h, p);
      }
      if (!n.local && n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID) && (Rm(Pr, Mu, "[yjs] ", Ou, Du, "Changed the client-id because another client seems to be using it."), s.clientID = $u()), s.emit("afterTransactionCleanup", [n, s]), s._observers.has("update")) {
        const u = new Hm();
        xc(u, n) && s.emit("update", [u.toUint8Array(), n.origin, s, n]);
      }
      if (s._observers.has("updateV2")) {
        const u = new Qi();
        xc(u, n) && s.emit("updateV2", [u.toUint8Array(), n.origin, s, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: c, subdocsRemoved: a } = n;
      (l.size > 0 || a.size > 0 || c.size > 0) && (l.forEach((u) => {
        u.clientID = s.clientID, u.collectionid == null && (u.collectionid = s.collectionid), s.subdocs.add(u);
      }), a.forEach((u) => s.subdocs.delete(u)), s.emit("subdocs", [{ loaded: c, added: l, removed: a }, s, n]), a.forEach((u) => u.destroy())), e.length <= t + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, e])) : zu(e, t + 1);
    }
  }
}, it = (e, t, n = null, s = !0) => {
  const i = e._transactionCleanups;
  let o = !1, r = null;
  e._transaction === null && (o = !0, e._transaction = new tw(e, n, s), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
  try {
    r = t(e._transaction);
  } finally {
    if (o) {
      const l = e._transaction === i[0];
      e._transaction = null, l && zu(i, 0);
    }
  }
  return r;
};
class sw {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, n) {
    this.insertions = n, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const Sc = (e, t, n) => {
  rn(e, n.deletions, (s) => {
    s instanceof nt && t.scope.some((i) => i === e.doc || Ts(
      /** @type {AbstractType<any>} */
      i,
      s
    )) && Wr(s, !1);
  });
}, Cc = (e, t, n) => {
  let s = null;
  const i = e.doc, o = e.scope;
  it(i, (l) => {
    for (; t.length > 0 && e.currStackItem === null; ) {
      const c = i.store, a = (
        /** @type {StackItem} */
        t.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      rn(l, a.insertions, (h) => {
        if (h instanceof nt) {
          if (h.redone !== null) {
            let { item: p, diff: m } = er(c, h.id);
            m > 0 && (p = Ft(l, W(p.id.client, p.id.clock + m))), h = p;
          }
          !h.deleted && o.some((p) => p === l.doc || Ts(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), rn(l, a.deletions, (h) => {
        h instanceof nt && o.some((p) => p === l.doc || Ts(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !ts(a.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = ud(l, h, u, a.insertions, e.ignoreRemoteMapChanges, e) !== null || f;
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
  const r = e.currStackItem;
  if (r != null) {
    const l = s.changedParentTypes;
    e.emit("stack-item-popped", [{ stackItem: r, type: n, changedParentTypes: l, origin: e }, e]), e.currStackItem = null;
  }
  return r;
};
class Wu extends mu {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(t, {
    captureTimeout: n = 500,
    captureTransaction: s = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: o = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: r = !1,
    doc: l = (
      /** @type {Doc} */
      zo(t) ? t[0].doc : t instanceof Tn ? t : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(t), this.deleteFilter = i, o.add(this), this.trackedOrigins = o, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = r, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((y) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const a = this.undoing, u = this.redoing, d = a ? this.redoStack : this.undoStack;
      a ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new Zn();
      c.afterState.forEach((y, b) => {
        const T = c.beforeState.get(b) || 0, N = y - T;
        N > 0 && Es(f, b, T, N);
      });
      const h = nm();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !a && !u) {
        const y = d[d.length - 1];
        y.deletions = Go([y.deletions, c.deleteSet]), y.insertions = Go([y.insertions, f]);
      } else
        d.push(new sw(c.deleteSet, f)), p = !0;
      !a && !u && (this.lastChange = h), rn(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof nt && this.scope.some((b) => b === c.doc || Ts(
            /** @type {AbstractType<any>} */
            b,
            y
          )) && Wr(y, !0);
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
    t = zo(t) ? t : [t], t.forEach((s) => {
      n.has(s) || (n.add(s), (s instanceof vt ? s.doc !== this.doc : s !== this.doc) && Ru("[yjs#509] Not same Y.Doc"), this.scope.push(s));
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
      t && (this.undoStack.forEach((i) => Sc(s, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => Sc(s, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: n }]);
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
      t = Cc(this, this.undoStack, "undo");
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
      t = Cc(this, this.redoStack, "redo");
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
function* iw(e) {
  const t = lt(e.restDecoder);
  for (let n = 0; n < t; n++) {
    const s = lt(e.restDecoder), i = e.readClient();
    let o = lt(e.restDecoder);
    for (let r = 0; r < s; r++) {
      const l = e.readInfo();
      if (l === 10) {
        const c = lt(e.restDecoder);
        yield new ie(W(i, o), c), o += c;
      } else if ((Yi & l) !== 0) {
        const c = (l & (Fe | Nt)) === 0, a = new nt(
          W(i, o),
          null,
          // left
          (l & Nt) === Nt ? e.readLeftID() : null,
          // origin
          null,
          // right
          (l & Fe) === Fe ? e.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? e.readParentInfo() ? e.readString() : e.readLeftID() : null,
          // parent
          c && (l & ks) === ks ? e.readString() : null,
          // parentSub
          dd(e, l)
          // item content
        );
        yield a, o += a.length;
      } else {
        const c = e.readLen();
        yield new Qt(W(i, o), c), o += c;
      }
    }
  }
}
class ow {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, n) {
    this.gen = iw(t), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === ie);
    return this.curr;
  }
}
class rw {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const lw = (e, t) => {
  if (e.constructor === Qt) {
    const { client: n, clock: s } = e.id;
    return new Qt(W(n, s + t), e.length - t);
  } else if (e.constructor === ie) {
    const { client: n, clock: s } = e.id;
    return new ie(W(n, s + t), e.length - t);
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
}, Ec = (e, t = Ei, n = Qi) => {
  if (e.length === 1)
    return e[0];
  const s = e.map((u) => new t(Ir(u)));
  let i = s.map((u) => new ow(u, !0)), o = null;
  const r = new n(), l = new rw(r);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === ie ? 1 : -1 : p;
      } else
        return h.curr.id.client - f.curr.id.client;
    }
  ), i.length !== 0; ) {
    const u = i[0], d = (
      /** @type {Item | GC} */
      u.curr.id.client
    );
    if (o !== null) {
      let f = (
        /** @type {Item | GC | null} */
        u.curr
      ), h = !1;
      for (; f !== null && f.id.clock + f.length <= o.struct.id.clock + o.struct.length && f.id.client >= o.struct.id.client; )
        f = u.next(), h = !0;
      if (f === null || // current decoder is empty
      f.id.client !== d || // check whether there is another decoder that has has updates from `firstClient`
      h && f.id.clock > o.struct.id.clock + o.struct.length)
        continue;
      if (d !== o.struct.id.client)
        ls(l, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next();
      else if (o.struct.id.clock + o.struct.length < f.id.clock)
        if (o.struct.constructor === ie)
          o.struct.length = f.id.clock + f.length - o.struct.id.clock;
        else {
          ls(l, o.struct, o.offset);
          const p = f.id.clock - o.struct.id.clock - o.struct.length;
          o = { struct: new ie(W(d, o.struct.id.clock + o.struct.length), p), offset: 0 };
        }
      else {
        const p = o.struct.id.clock + o.struct.length - f.id.clock;
        p > 0 && (o.struct.constructor === ie ? o.struct.length -= p : f = lw(f, p)), o.struct.mergeWith(
          /** @type {any} */
          f
        ) || (ls(l, o.struct, o.offset), o = { struct: f, offset: 0 }, u.next());
      }
    } else
      o = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let f = u.curr; f !== null && f.id.client === d && f.id.clock === o.struct.id.clock + o.struct.length && f.constructor !== ie; f = u.next())
      ls(l, o.struct, o.offset), o = { struct: f, offset: 0 };
  }
  o !== null && (ls(l, o.struct, o.offset), o = null), cw(l);
  const c = s.map((u) => $m(u)), a = Go(c);
  return Fr(r, a), r.toUint8Array();
}, Ku = (e) => {
  e.written > 0 && (e.clientStructs.push({ written: e.written, restEncoder: re(e.encoder.restEncoder) }), e.encoder.restEncoder = Hs(), e.written = 0);
}, ls = (e, t, n) => {
  e.written > 0 && e.currClient !== t.id.client && Ku(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), Z(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, cw = (e) => {
  Ku(e);
  const t = e.encoder.restEncoder;
  Z(t, e.clientStructs.length);
  for (let n = 0; n < e.clientStructs.length; n++) {
    const s = e.clientStructs[n];
    Z(t, s.written), Gi(t, s.restEncoder);
  }
}, Ac = "You must not compute changes after the event-handler fired.";
class to {
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
    return this._path || (this._path = aw(this.currentTarget, this.target));
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
    return ts(this.transaction.deleteSet, t.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw on(Ac);
      const t = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const o = (
            /** @type {Item} */
            n._map.get(i)
          );
          let r, l;
          if (this.adds(o)) {
            let c = o.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(o))
              if (c !== null && this.deletes(c))
                r = "delete", l = vo(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (r = "update", l = vo(c.content.getContent())) : (r = "add", l = void 0);
          } else if (this.deletes(o))
            r = "delete", l = vo(
              /** @type {Item} */
              o.content.getContent()
            );
          else
            return;
          t.set(i, { action: r, oldValue: l });
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
        throw on(Ac);
      const n = this.target, s = kn(), i = kn(), o = [];
      if (t = {
        added: s,
        deleted: i,
        delta: o,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let l = null;
        const c = () => {
          l && o.push(l);
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
const aw = (e, t) => {
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
  Ru("Invalid access: Add Yjs type to a document before reading data.");
}, qu = 80;
let Ur = 0;
class uw {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, n) {
    t.marker = !0, this.p = t, this.index = n, this.timestamp = Ur++;
  }
}
const dw = (e) => {
  e.timestamp = Ur++;
}, Ju = (e, t, n) => {
  e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = Ur++;
}, fw = (e, t, n) => {
  if (e.length >= qu) {
    const s = e.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return Ju(s, t, n), s;
  } else {
    const s = new uw(t, n);
    return e.push(s), s;
  }
}, eo = (e, t) => {
  if (e._start === null || t === 0 || e._searchMarker === null)
    return null;
  const n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((o, r) => ri(t - o.index) < ri(t - r.index) ? o : r);
  let s = e._start, i = 0;
  for (n !== null && (s = n.p, i = n.index, dw(n)); s.right !== null && i < t; ) {
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
  return n !== null && ri(n.index - i) < /** @type {YText|YArray<any>} */
  s.parent.length / qu ? (Ju(n, s, i), n) : fw(e._searchMarker, s, i);
}, Ms = (e, t, n) => {
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (n > 0) {
      let o = i.p;
      for (o.marker = !1; o && (o.deleted || !o.countable); )
        o = o.left, o && !o.deleted && o.countable && (i.index -= o.length);
      if (o === null || o.marker === !0) {
        e.splice(s, 1);
        continue;
      }
      i.p = o, o.marker = !0;
    }
    (t < i.index || n > 0 && t === i.index) && (i.index = sn(t, i.index + n));
  }
}, no = (e, t, n) => {
  const s = e, i = t.changedParentTypes;
  for (; Ke(i, e, () => []).push(n), e._item !== null; )
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  Fu(s._eH, n, t);
};
class vt {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = bc(), this._dEH = bc(), this._searchMarker = null;
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
    yc(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    yc(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    vc(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    vc(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Yu = (e, t, n) => {
  e.doc ?? At(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
  let s = n - t;
  const i = [];
  let o = e._start;
  for (; o !== null && s > 0; ) {
    if (o.countable && !o.deleted) {
      const r = o.content.getContent();
      if (r.length <= t)
        t -= r.length;
      else {
        for (let l = t; l < r.length && s > 0; l++)
          i.push(r[l]), s--;
        t = 0;
      }
    }
    o = o.right;
  }
  return i;
}, Gu = (e) => {
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
}, Xu = (e, t) => {
  const n = [];
  let s = e._start;
  for (; s !== null; ) {
    if (s.countable && wn(s, t)) {
      const i = s.content.getContent();
      for (let o = 0; o < i.length; o++)
        n.push(i[o]);
    }
    s = s.right;
  }
  return n;
}, Os = (e, t) => {
  let n = 0, s = e._start;
  for (e.doc ?? At(); s !== null; ) {
    if (s.countable && !s.deleted) {
      const i = s.content.getContent();
      for (let o = 0; o < i.length; o++)
        t(i[o], n++, e);
    }
    s = s.right;
  }
}, Qu = (e, t) => {
  const n = [];
  return Os(e, (s, i) => {
    n.push(t(s, i, e));
  }), n;
}, hw = (e) => {
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
}, Zu = (e, t) => {
  e.doc ?? At();
  const n = eo(e, t);
  let s = e._start;
  for (n !== null && (s = n.p, t -= n.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t < s.length)
        return s.content.getContent()[t];
      t -= s.length;
    }
}, Ti = (e, t, n, s) => {
  let i = n;
  const o = e.doc, r = o.clientID, l = o.store, c = n === null ? t._start : n.right;
  let a = [];
  const u = () => {
    a.length > 0 && (i = new nt(W(r, mt(l, r)), i, i && i.lastId, c, c && c.id, t, null, new En(a)), i.integrate(e, 0), a = []);
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
              i = new nt(W(r, mt(l, r)), i, i && i.lastId, c, c && c.id, t, null, new Us(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(e, 0);
              break;
            case Tn:
              i = new nt(W(r, mt(l, r)), i, i && i.lastId, c, c && c.id, t, null, new Vs(
                /** @type {Doc} */
                d
              )), i.integrate(e, 0);
              break;
            default:
              if (d instanceof vt)
                i = new nt(W(r, mt(l, r)), i, i && i.lastId, c, c && c.id, t, null, new ge(d)), i.integrate(e, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, td = () => on("Length exceeded!"), ed = (e, t, n, s) => {
  if (n > t._length)
    throw td();
  if (n === 0)
    return t._searchMarker && Ms(t._searchMarker, n, s.length), Ti(e, t, null, s);
  const i = n, o = eo(t, n);
  let r = t._start;
  for (o !== null && (r = o.p, n -= o.index, n === 0 && (r = r.prev, n += r && r.countable && !r.deleted ? r.length : 0)); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (n <= r.length) {
        n < r.length && Ft(e, W(r.id.client, r.id.clock + n));
        break;
      }
      n -= r.length;
    }
  return t._searchMarker && Ms(t._searchMarker, i, s.length), Ti(e, t, r, s);
}, pw = (e, t, n) => {
  let i = (t._searchMarker || []).reduce((o, r) => r.index > o.index ? r : o, { index: 0, p: t._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Ti(e, t, i, n);
}, nd = (e, t, n, s) => {
  if (s === 0)
    return;
  const i = n, o = s, r = eo(t, n);
  let l = t._start;
  for (r !== null && (l = r.p, n -= r.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && Ft(e, W(l.id.client, l.id.clock + n)), n -= l.length);
  for (; s > 0 && l !== null; )
    l.deleted || (s < l.length && Ft(e, W(l.id.client, l.id.clock + s)), l.delete(e), s -= l.length), l = l.right;
  if (s > 0)
    throw td();
  t._searchMarker && Ms(
    t._searchMarker,
    i,
    -o + s
    /* in case we remove the above exception */
  );
}, Mi = (e, t, n) => {
  const s = t._map.get(n);
  s !== void 0 && s.delete(e);
}, Vr = (e, t, n, s) => {
  const i = t._map.get(n) || null, o = e.doc, r = o.clientID;
  let l;
  if (s == null)
    l = new En([s]);
  else
    switch (s.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        l = new En([s]);
        break;
      case Uint8Array:
        l = new Us(
          /** @type {Uint8Array} */
          s
        );
        break;
      case Tn:
        l = new Vs(
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
  new nt(W(r, mt(o.store, r)), i, i && i.lastId, null, null, t, n, l).integrate(e, 0);
}, jr = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, sd = (e) => {
  const t = {};
  return e.doc ?? At(), e._map.forEach((n, s) => {
    n.deleted || (t[s] = n.content.getContent()[n.length - 1]);
  }), t;
}, id = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted;
}, gw = (e, t) => {
  const n = {};
  return e._map.forEach((s, i) => {
    let o = s;
    for (; o !== null && (!t.sv.has(o.id.client) || o.id.clock >= (t.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && wn(o, t) && (n[i] = o.content.getContent()[o.length - 1]);
  }), n;
}, Js = (e) => (e.doc ?? At(), Lm(
  e._map.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
));
class mw extends to {
}
class Hn extends vt {
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
    const n = new Hn();
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
    return new Hn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const t = new Hn();
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
    super._callObserver(t, n), no(this, t, new mw(this, t));
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
      ed(
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
      pw(
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
      nd(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return Zu(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Gu(this);
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
    return Yu(this, t, n);
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
    return Qu(
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
    Os(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return hw(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Uw);
  }
}
const ww = (e) => new Hn();
class bw extends to {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(t, n, s) {
    super(t, n), this.keysChanged = s;
  }
}
class Jn extends vt {
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
    return new Jn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const t = new Jn();
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
    no(this, t, new bw(this, t, n));
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
    return [...Js(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return Co(
      Js(this),
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
    return Co(
      Js(this),
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
    return Co(
      Js(this),
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
      Mi(n, this, t);
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
      Vr(
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
      jr(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return id(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? it(this.doc, (t) => {
      this.forEach(function(n, s, i) {
        Mi(t, i, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Vw);
  }
}
const yw = (e) => new Jn(), Ze = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && um(e, t);
class tr {
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
    switch (this.right === null && Ut(), this.right.content.constructor) {
      case bt:
        this.right.deleted || es(
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
const Tc = (e, t, n) => {
  for (; t.right !== null && n > 0; ) {
    switch (t.right.content.constructor) {
      case bt:
        t.right.deleted || es(
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
}, Ys = (e, t, n, s) => {
  const i = /* @__PURE__ */ new Map(), o = s ? eo(t, n) : null;
  if (o) {
    const r = new tr(o.p.left, o.p, o.index, i);
    return Tc(e, r, n - o.index);
  } else {
    const r = new tr(null, t._start, 0, i);
    return Tc(e, r, n);
  }
}, od = (e, t, n, s) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === bt && Ze(
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
  const i = e.doc, o = i.clientID;
  s.forEach((r, l) => {
    const c = n.left, a = n.right, u = new nt(W(o, mt(i.store, o)), c, c && c.lastId, a, a && a.id, t, null, new bt(l, r));
    u.integrate(e, 0), n.right = u, n.forward();
  });
}, es = (e, t) => {
  const { key: n, value: s } = t;
  s === null ? e.delete(n) : e.set(n, s);
}, rd = (e, t) => {
  for (; e.right !== null; ) {
    if (!(e.right.deleted || e.right.content.constructor === bt && Ze(
      t[
        /** @type {ContentFormat} */
        e.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      e.right.content.value
    ))) break;
    e.forward();
  }
}, ld = (e, t, n, s) => {
  const i = e.doc, o = i.clientID, r = /* @__PURE__ */ new Map();
  for (const l in s) {
    const c = s[l], a = n.currentAttributes.get(l) ?? null;
    if (!Ze(a, c)) {
      r.set(l, a);
      const { left: u, right: d } = n;
      n.right = new nt(W(o, mt(i.store, o)), u, u && u.lastId, d, d && d.id, t, null, new bt(l, c)), n.right.integrate(e, 0), n.forward();
    }
  }
  return r;
}, To = (e, t, n, s, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const o = e.doc, r = o.clientID;
  rd(n, i);
  const l = ld(e, t, n, i), c = s.constructor === String ? new pe(
    /** @type {string} */
    s
  ) : s instanceof vt ? new ge(s) : new Mn(s);
  let { left: a, right: u, index: d } = n;
  t._searchMarker && Ms(t._searchMarker, n.index, c.getLength()), u = new nt(W(r, mt(o.store, r)), a, a && a.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), od(e, t, n, l);
}, Mc = (e, t, n, s, i) => {
  const o = e.doc, r = o.clientID;
  rd(n, i);
  const l = ld(e, t, n, i);
  t: for (; n.right !== null && (s > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === bt)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case bt: {
          const { key: c, value: a } = (
            /** @type {ContentFormat} */
            n.right.content
          ), u = i[c];
          if (u !== void 0) {
            if (Ze(u, a))
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
    n.right = new nt(W(r, mt(o.store, r)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new pe(c)), n.right.integrate(e, 0), n.forward();
  }
  od(e, t, n, l);
}, cd = (e, t, n, s, i) => {
  let o = t;
  const r = ce();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === bt) {
      const a = (
        /** @type {ContentFormat} */
        o.content
      );
      r.set(a.key, a);
    }
    o = o.right;
  }
  let l = 0, c = !1;
  for (; t !== o; ) {
    if (n === t && (c = !0), !t.deleted) {
      const a = t.content;
      switch (a.constructor) {
        case bt: {
          const { key: u, value: d } = (
            /** @type {ContentFormat} */
            a
          ), f = s.get(u) ?? null;
          (r.get(u) !== a || f === d) && (t.delete(e), l++, !c && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !c && !t.deleted && es(
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
}, vw = (e, t) => {
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
}, _w = (e) => {
  let t = 0;
  return it(
    /** @type {Doc} */
    e.doc,
    (n) => {
      let s = (
        /** @type {Item} */
        e._start
      ), i = e._start, o = ce();
      const r = jo(o);
      for (; i; ) {
        if (i.deleted === !1)
          switch (i.content.constructor) {
            case bt:
              es(
                r,
                /** @type {ContentFormat} */
                i.content
              );
              break;
            default:
              t += cd(n, s, i, o, r), o = jo(r), s = i;
              break;
          }
        i = i.right;
      }
    }
  ), t;
}, xw = (e) => {
  const t = /* @__PURE__ */ new Set(), n = e.doc;
  for (const [s, i] of e.afterState.entries()) {
    const o = e.beforeState.get(s) || 0;
    i !== o && ju(
      e,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(s),
      o,
      i,
      (r) => {
        !r.deleted && /** @type {Item} */
        r.content.constructor === bt && r.constructor !== Qt && t.add(
          /** @type {any} */
          r.parent
        );
      }
    );
  }
  it(n, (s) => {
    rn(e, e.deleteSet, (i) => {
      if (i instanceof Qt || !/** @type {YText} */
      i.parent._hasFormatting || t.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const o = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === bt ? t.add(o) : vw(s, i);
    });
    for (const i of t)
      _w(i);
  });
}, Oc = (e, t, n) => {
  const s = n, i = jo(t.currentAttributes), o = t.right;
  for (; n > 0 && t.right !== null; ) {
    if (t.right.deleted === !1)
      switch (t.right.content.constructor) {
        case ge:
        case Mn:
        case pe:
          n < t.right.length && Ft(e, W(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
          break;
      }
    t.forward();
  }
  o && cd(e, o, t.right, i, t.currentAttributes);
  const r = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return r._searchMarker && Ms(r._searchMarker, t.index, -s + n), t;
};
class kw extends to {
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
        const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        let r = this.target._start, l = null;
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
                u > 0 && (h = { retain: u }, cm(c) || (h.attributes = rm({}, c))), u = 0;
                break;
            }
            h && n.push(h), l = null;
          }
        };
        for (; r !== null; ) {
          switch (r.content.constructor) {
            case ge:
            case Mn:
              this.adds(r) ? this.deletes(r) || (f(), l = "insert", a = r.content.getContent()[0], f()) : this.deletes(r) ? (l !== "delete" && (f(), l = "delete"), d += 1) : r.deleted || (l !== "retain" && (f(), l = "retain"), u += 1);
              break;
            case pe:
              this.adds(r) ? this.deletes(r) || (l !== "insert" && (f(), l = "insert"), a += /** @type {ContentString} */
              r.content.str) : this.deletes(r) ? (l !== "delete" && (f(), l = "delete"), d += r.length) : r.deleted || (l !== "retain" && (f(), l = "retain"), u += r.length);
              break;
            case bt: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                r.content
              );
              if (this.adds(r)) {
                if (!this.deletes(r)) {
                  const m = i.get(h) ?? null;
                  Ze(m, p) ? p !== null && r.delete(s) : (l === "retain" && f(), Ze(p, o.get(h) ?? null) ? delete c[h] : c[h] = p);
                }
              } else if (this.deletes(r)) {
                o.set(h, p);
                const m = i.get(h) ?? null;
                Ze(m, p) || (l === "retain" && f(), c[h] = m);
              } else if (!r.deleted) {
                o.set(h, p);
                const m = c[h];
                m !== void 0 && (Ze(m, p) ? m !== null && r.delete(s) : (l === "retain" && f(), p === null ? delete c[h] : c[h] = p));
              }
              r.deleted || (l === "insert" && f(), es(
                i,
                /** @type {ContentFormat} */
                r.content
              ));
              break;
            }
          }
          r = r.right;
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
class ln extends vt {
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
    return new ln();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const t = new ln();
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
    const s = new kw(this, t, n);
    no(this, t, s), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
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
      const i = new tr(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < t.length; o++) {
        const r = t[o];
        if (r.insert !== void 0) {
          const l = !n && typeof r.insert == "string" && o === t.length - 1 && i.right === null && r.insert.slice(-1) === `
` ? r.insert.slice(0, -1) : r.insert;
          (typeof l != "string" || l.length > 0) && To(s, this, i, l, r.attributes || {});
        } else r.retain !== void 0 ? Mc(s, this, i, r.retain, r.attributes || {}) : r.delete !== void 0 && Oc(s, i, r.delete);
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
    const i = [], o = /* @__PURE__ */ new Map(), r = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", c = this._start;
    function a() {
      if (l.length > 0) {
        const d = {};
        let f = !1;
        o.forEach((p, m) => {
          f = !0, d[m] = p;
        });
        const h = { insert: l };
        f && (h.attributes = d), i.push(h), l = "";
      }
    }
    const u = () => {
      for (; c !== null; ) {
        if (wn(c, t) || n !== void 0 && wn(c, n))
          switch (c.content.constructor) {
            case pe: {
              const d = o.get("ychange");
              t !== void 0 && !wn(c, t) ? (d === void 0 || d.user !== c.id.client || d.type !== "removed") && (a(), o.set("ychange", s ? s("removed", c.id) : { type: "removed" })) : n !== void 0 && !wn(c, n) ? (d === void 0 || d.user !== c.id.client || d.type !== "added") && (a(), o.set("ychange", s ? s("added", c.id) : { type: "added" })) : d !== void 0 && (a(), o.delete("ychange")), l += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case ge:
            case Mn: {
              a();
              const d = {
                insert: c.content.getContent()[0]
              };
              if (o.size > 0) {
                const f = (
                  /** @type {Object<string,any>} */
                  {}
                );
                d.attributes = f, o.forEach((h, p) => {
                  f[p] = h;
                });
              }
              i.push(d);
              break;
            }
            case bt:
              wn(c, t) && (a(), es(
                o,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      a();
    };
    return t || n ? it(r, (d) => {
      t && Qo(d, t), n && Qo(d, n), u();
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
    i !== null ? it(i, (o) => {
      const r = Ys(o, this, t, !s);
      s || (s = {}, r.currentAttributes.forEach((l, c) => {
        s[c] = l;
      })), To(o, this, r, n, s);
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
    i !== null ? it(i, (o) => {
      const r = Ys(o, this, t, !s);
      To(o, this, r, n, s || {});
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
      Oc(i, Ys(i, this, t, !0), n);
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
    i !== null ? it(i, (o) => {
      const r = Ys(o, this, t, !1);
      r.right !== null && Mc(o, this, r, n, s);
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
      Mi(n, this, t);
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
      Vr(s, this, t, n);
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
      jr(this, t)
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
    return sd(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(jw);
  }
}
const Sw = (e) => new ln();
class Mo {
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
        t.content.type, !t.deleted && (n.constructor === Et || n.constructor === Cn) && n._start !== null)
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
class Cn extends vt {
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
    return new Cn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const t = new Cn();
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
    return new Mo(this, t);
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
    const s = new Mo(this, (i) => i.nodeName && i.nodeName.toUpperCase() === t).next();
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
    return t = t.toUpperCase(), Sn(new Mo(this, (n) => n.nodeName && n.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    no(this, t, new Aw(this, n, t));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Qu(this, (t) => t.toString()).join("");
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
    return s !== void 0 && s._createAssociation(i, this), Os(this, (o) => {
      i.insertBefore(o.toDOM(t, n, s), null);
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
      ed(s, this, t, n);
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
        Ti(s, this, i, n);
      });
    else {
      const s = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = t === null ? 0 : s.findIndex((o) => o === t) + 1;
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
      nd(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Gu(this);
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
    return Zu(this, t);
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
    return Yu(this, t, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    Os(this, t);
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
    t.writeTypeRef(Ww);
  }
}
const Cw = (e) => new Cn();
class Et extends Cn {
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
    return new Et(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const t = new Et(this.nodeName), n = this.getAttributes();
    return lm(n, (s, i) => {
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
    const o = this.nodeName.toLocaleLowerCase(), r = n.length > 0 ? " " + n.join(" ") : "";
    return `<${o}${r}>${super.toString()}</${o}>`;
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
      Mi(n, this, t);
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
      Vr(s, this, t, n);
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
      jr(this, t)
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
      id(this, t)
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
      t ? gw(this, t) : sd(this)
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
    const i = t.createElement(this.nodeName), o = this.getAttributes();
    for (const r in o) {
      const l = o[r];
      typeof l == "string" && i.setAttribute(r, l);
    }
    return Os(this, (r) => {
      i.appendChild(r.toDOM(t, n, s));
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
    t.writeTypeRef(zw), t.writeKey(this.nodeName);
  }
}
const Ew = (e) => new Et(e.readKey());
class Aw extends to {
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
class Oi extends Jn {
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
    return new Oi(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const t = new Oi(this.hookName);
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
    let o;
    return i !== void 0 ? o = i.createDom(this) : o = document.createElement(this.hookName), o.setAttribute("data-yjs-hook", this.hookName), s !== void 0 && s._createAssociation(o, this), o;
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
    t.writeTypeRef(Kw), t.writeKey(this.hookName);
  }
}
const Tw = (e) => new Oi(e.readKey());
class Ht extends ln {
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
    return new Ht();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const t = new Ht();
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
        const o = [];
        for (const r in t.attributes[i])
          o.push({ key: r, value: t.attributes[i][r] });
        o.sort((r, l) => r.key < l.key ? -1 : 1), n.push({ nodeName: i, attrs: o });
      }
      n.sort((i, o) => i.nodeName < o.nodeName ? -1 : 1);
      let s = "";
      for (let i = 0; i < n.length; i++) {
        const o = n[i];
        s += `<${o.nodeName}`;
        for (let r = 0; r < o.attrs.length; r++) {
          const l = o.attrs[r];
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
    t.writeTypeRef(qw);
  }
}
const Mw = (e) => new Ht();
class zr {
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
const Ow = 0;
class Qt extends zr {
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
    n > 0 && (this.id.clock += n, this.length -= n), Vu(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(Ow), t.writeLen(this.length - n);
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
class Us {
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
    return new Us(this.content);
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
const Dw = (e) => new Us(e.readBuf());
class Ds {
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
    return new Ds(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const n = new Ds(this.len - t);
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
    Es(t.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const Iw = (e) => new Ds(e.readLen()), ad = (e, t) => new Tn({ guid: e, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
class Vs {
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
    return new Vs(ad(this.doc.guid, this.opts));
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
const Rw = (e) => new Vs(ad(e.readString(), e.readAny()));
class Mn {
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
    return new Mn(this.embed);
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
const Lw = (e) => new Mn(e.readJSON());
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
const Nw = (e) => new bt(e.readKey(), e.readJSON());
class Di {
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
    return new Di(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const n = new Di(this.arr.slice(t));
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
      const o = this.arr[i];
      t.writeString(o === void 0 ? "undefined" : JSON.stringify(o));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const Pw = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++) {
    const i = e.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Di(n);
}, $w = Ci("node_env") === "development";
class En {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t, $w && Cu(t);
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
    return new En(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(t) {
    const n = new En(this.arr.slice(t));
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
      const o = this.arr[i];
      t.writeAny(o);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const Bw = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++)
    n.push(e.readAny());
  return new En(n);
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
const Fw = (e) => new pe(e.readString()), Hw = [
  ww,
  yw,
  Sw,
  Ew,
  Cw,
  Tw,
  Mw
], Uw = 0, Vw = 1, jw = 2, zw = 3, Ww = 4, Kw = 5, qw = 6;
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
const Jw = (e) => new ge(Hw[e.readTypeRef()](e)), er = (e, t) => {
  let n = t, s = 0, i;
  do
    s > 0 && (n = W(n.client, n.clock + s)), i = Fn(e, n), s = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof nt);
  return {
    item: i,
    diff: s
  };
}, Wr = (e, t) => {
  for (; e !== null && e.keep !== t; )
    e.keep = t, e = /** @type {AbstractType<any>} */
    e.parent._item;
}, Ii = (e, t, n) => {
  const { client: s, clock: i } = t.id, o = new nt(
    W(s, i + n),
    t,
    W(s, i + n - 1),
    t.right,
    t.rightOrigin,
    t.parent,
    t.parentSub,
    t.content.splice(n)
  );
  return t.deleted && o.markDeleted(), t.keep && (o.keep = !0), t.redone !== null && (o.redone = W(t.redone.client, t.redone.clock + n)), t.right = o, o.right !== null && (o.right.left = o), e._mergeStructs.push(o), o.parentSub !== null && o.right === null && o.parent._map.set(o.parentSub, o), t.length = n, o;
}, Dc = (e, t) => yg(
  e,
  /** @param {StackItem} s */
  (n) => ts(n.deletions, t)
), ud = (e, t, n, s, i, o) => {
  const r = e.doc, l = r.store, c = r.clientID, a = t.redone;
  if (a !== null)
    return Ft(e, a);
  let u = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || ud(e, u, n, s, i, o) === null))
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
    for (d = t; d !== null && d.right !== null && (d.right.redone || ts(s, d.right.id) || Dc(o.undoStack, d.right.id) || Dc(o.redoStack, d.right.id)); )
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
  return t.redone = m, Wr(y, !0), y.integrate(e, 0), y;
};
class nt extends zr {
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
  constructor(t, n, s, i, o, r, l, c) {
    super(t, c.getLength()), this.origin = s, this.left = n, this.right = i, this.rightOrigin = o, this.parent = r, this.parentSub = l, this.redone = null, this.content = c, this.info = this.content.isCountable() ? lc : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & xo) > 0 !== t && (this.info ^= xo);
  }
  get marker() {
    return (this.info & xo) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & rc) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= rc);
  }
  get countable() {
    return (this.info & lc) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & _o) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= _o);
  }
  markDeleted() {
    this.info |= _o;
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
    if (this.parent && this.parent.constructor === Bn && this.id.client !== this.parent.client && this.parent.clock >= mt(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = _c(t, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Ft(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Qt || this.right && this.right.constructor === Qt)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === nt ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === nt && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Bn) {
      const s = Fn(n, this.parent);
      s.constructor === Qt ? this.parent = null : this.parent = /** @type {ContentType} */
      s.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    if (n > 0 && (this.id.clock += n, this.left = _c(t, t.doc.store, W(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
        const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (r.add(i), o.add(i), Ks(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              s = i, o.clear();
            else if (Ks(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && r.has(Fn(t.doc.store, i.origin)))
            o.has(Fn(t.doc.store, i.origin)) || (s = i, o.clear());
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Vu(t.doc.store, this), this.content.integrate(t, this), kc(
        t,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(t);
    } else
      new Qt(this.id, this.length).integrate(t, 0);
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
    if (this.constructor === t.constructor && Ks(t.origin, this.lastId) && this.right === t && Ks(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), Es(t.deleteSet, this.id.client, this.id.clock, this.length), kc(t, n, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, n) {
    if (!this.deleted)
      throw Ut();
    this.content.gc(t), n ? Zm(t, this, new Qt(this.id, this.length)) : this.content = new Ds(this.length);
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
    const s = n > 0 ? W(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, r = this.content.getRef() & Yi | (s === null ? 0 : Nt) | // origin is defined
    (i === null ? 0 : Fe) | // right origin is defined
    (o === null ? 0 : ks);
    if (t.writeInfo(r), s !== null && t.writeLeftID(s), i !== null && t.writeRightID(i), s === null && i === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const c = l._item;
        if (c === null) {
          const a = As(l);
          t.writeParentInfo(!0), t.writeString(a);
        } else
          t.writeParentInfo(!1), t.writeLeftID(c.id);
      } else l.constructor === String ? (t.writeParentInfo(!0), t.writeString(l)) : l.constructor === Bn ? (t.writeParentInfo(!1), t.writeLeftID(l)) : Ut();
      o !== null && t.writeString(o);
    }
    this.content.write(t, n);
  }
}
const dd = (e, t) => Yw[t & Yi](e), Yw = [
  () => {
    Ut();
  },
  // GC is not ItemContent
  Iw,
  // 1
  Pw,
  // 2
  Dw,
  // 3
  Fw,
  // 4
  Lw,
  // 5
  Nw,
  // 6
  Jw,
  // 7
  Bw,
  // 8
  Rw,
  // 9
  () => {
    Ut();
  }
  // 10 - Skip is not ItemContent
], Gw = 10;
class ie extends zr {
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
    Ut();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(Gw), Z(t.restEncoder, this.length - n);
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
const fd = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), hd = "__ $YJS$ __";
fd[hd] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
fd[hd] = !0;
const Xw = () => {
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
}, Qw = /[\uD800-\uDBFF]/, Zw = /[\uDC00-\uDFFF]/, t0 = (e, t) => {
  let n = 0, s = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    n++;
  for (n > 0 && Qw.test(e[n - 1]) && n--; s + n < e.length && s + n < t.length && e[e.length - s - 1] === t[t.length - s - 1]; )
    s++;
  return s > 0 && Zw.test(e[e.length - s]) && s--, {
    index: n,
    remove: e.length - n - s,
    insert: t.slice(n, t.length - s)
  };
}, e0 = t0, Ee = (e, t) => e >>> t | e << 32 - t, n0 = (e) => Ee(e, 2) ^ Ee(e, 13) ^ Ee(e, 22), s0 = (e) => Ee(e, 6) ^ Ee(e, 11) ^ Ee(e, 25), i0 = (e) => Ee(e, 7) ^ Ee(e, 18) ^ e >>> 3, o0 = (e) => Ee(e, 17) ^ Ee(e, 19) ^ e >>> 10, r0 = new Uint32Array([
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
]), l0 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class c0 {
  constructor() {
    const t = new ArrayBuffer(320);
    this._H = new Uint32Array(t, 0, 8), this._H.set(l0), this._W = new Uint32Array(t, 64, 64);
  }
  _updateHash() {
    const t = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = o0(n[d - 2]) + n[d - 7] + i0(n[d - 15]) + n[d - 16];
    let s = t[0], i = t[1], o = t[2], r = t[3], l = t[4], c = t[5], a = t[6], u = t[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + s0(l) + (l & c ^ ~l & a) + r0[d] + n[d] >>> 0, h = n0(s) + (s & i ^ s & o ^ i & o) >>> 0, u = a, a = c, c = l, l = r + f >>> 0, r = o, o = i, i = s, s = f + h >>> 0;
    t[0] += s, t[1] += i, t[2] += o, t[3] += r, t[4] += l, t[5] += c, t[6] += a, t[7] += u;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(t) {
    let n = 0;
    for (; n + 56 <= t.length; ) {
      let r = 0;
      for (; r < 16 && n + 3 < t.length; r++)
        this._W[r] = t[n++] << 24 | t[n++] << 16 | t[n++] << 8 | t[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, r, 16); n < t.length; )
          this._W[r] |= t[n] << (3 - n % 4) * 8, n++;
        this._W[r] |= Nt << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const s = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < t.length; i++)
      for (let r = 3; r >= 0 && n < t.length; r--)
        this._W[i] |= t[n++] << r * 8;
    s || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Nt << (3 - n % 4) * 8), this._W[14] = t.byteLength / vg, this._W[15] = t.byteLength * 8, this._updateHash();
    const o = new Uint8Array(32);
    for (let r = 0; r < this._H.length; r++)
      for (let l = 0; l < 4; l++)
        o[r * 4 + l] = this._H[r] >>> (3 - l) * 8;
    return o;
  }
}
const a0 = (e) => new c0().digest(e), dt = new qt("y-sync"), He = new qt("y-undo");
new qt("yjs-cursor");
const u0 = (e) => {
  for (let n = 6; n < e.length; n++)
    e[n % 6] = e[n % 6] ^ e[n];
  return e.slice(0, 6);
}, d0 = (e) => bm(u0(a0(ym(e)))), Ri = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && /** @type {number} */
t.sv.get(e.id.client) > e.id.clock && !ts(t.ds, e.id), f0 = [{ light: "#ecd44433", dark: "#ecd444" }], h0 = (e, t, n) => {
  if (!e.has(n)) {
    if (e.size < t.length) {
      const s = kn();
      e.forEach((i) => s.add(i)), t = t.filter((i) => !s.has(i));
    }
    e.set(n, Zg(t));
  }
  return (
    /** @type {ColorDef} */
    e.get(n)
  );
}, p0 = (e, {
  colors: t = f0,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: s = null,
  onFirstRender: i = () => {
  },
  mapping: o
} = {}) => {
  let r = !1;
  const l = new m0(e, o), c = new cn({
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
        return u.addToHistory = a.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, l.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && Tu(0, () => {
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
    view: (a) => (l.initView(a), o == null && l._forceRerender(), i(), {
      update: () => {
        const u = c.getState(a.state);
        if (u.snapshot == null && u.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (r || a.state.doc.content.findDiffStart(
          a.state.doc.type.createAndFill().content
        ) !== null)) {
          if (r = !0, u.addToHistory === !1 && !u.isChangeOrigin) {
            const d = He.getState(a.state), f = d && d.undoManager;
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
}, g0 = (e, t, n) => {
  if (t !== null && t.anchor !== null && t.head !== null)
    if (t.type === "all")
      e.setSelection(new rf(e.doc));
    else if (t.type === "node") {
      const s = di(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      );
      e.setSelection(pr.create(e.doc, s));
    } else {
      const s = di(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      ), i = di(
        n.doc,
        n.type,
        t.head,
        n.mapping
      );
      s !== null && i !== null && e.setSelection(Be.between(e.doc.resolve(s), e.doc.resolve(i)));
    }
}, nr = (e, t) => ({
  type: (
    /** @type {any} */
    t.selection.jsonID
  ),
  anchor: rr(
    t.selection.anchor,
    e.type,
    e.mapping
  ),
  head: rr(
    t.selection.head,
    e.type,
    e.mapping
  )
});
class m0 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(t, n = /* @__PURE__ */ new Map()) {
    this.type = t, this.prosemirrorView = null, this.mux = Xw(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = t.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = nr(
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
    return this.prosemirrorView.hasFocus() ? (Eu && this._domSelectionInView === null && (Tu(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const t = this.prosemirrorView._root.getSelection();
    if (t == null || t.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), o = _m.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || o.clientWidth || 0) && i.top <= (window.innerHeight || o.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(t, n) {
    n || (n = Hu(Pu(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(dt, { snapshot: t, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const t = this.type.toArray().map(
        (s) => ui(
          /** @type {Y.XmlElement} */
          s,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((s) => s !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Pe(bn.from(t), 0, 0)
      );
      n.setMeta(dt, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const t = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => ui(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Pe(bn.from(n), 0, 0)
      );
      if (t) {
        const i = Wn(sn(t.anchor, 0), s.doc.content.size), o = Wn(sn(t.head, 0), s.doc.content.size);
        s.setSelection(Be.create(s.doc, i, o));
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
    let i = this.doc, o = this.type;
    if (t || (t = Ao(this.doc)), t instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) && Ut(), i = new Tn({ gc: !1 }), Xo(i, n), n = Ao(i), Xo(i, t), t = Ao(i), o._item === null) {
        const r = Array.from(this.doc.share.keys()).find(
          (l) => this.doc.share.get(l) === this.type
        );
        o = i.getXmlFragment(r);
      } else {
        const r = i.store.clients.get(o._item.id.client) ?? [], l = he(
          r,
          o._item.id.clock
        );
        o = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        r[l].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      i.transact((r) => {
        const l = s.permanentUserData;
        l && l.dss.forEach((d) => {
          rn(r, d, (f) => {
          });
        });
        const c = (d, f) => {
          const h = d === "added" ? l.getUserByClientId(f.client) : l.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: h0(
              s.colorMapping,
              s.colors,
              h
            )
          };
        }, a = Xu(
          o,
          new Hr(n.ds, t.sv)
        ).map((d) => !d._item.deleted || Ri(d._item, t) || Ri(d._item, n) ? ui(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          t,
          n,
          c
        ) : null).filter((d) => d !== null), u = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Pe(bn.from(a), 0, 0)
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
      rn(
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
      const o = this.type.toArray().map(
        (l) => pd(
          /** @type {Y.XmlElement | Y.XmlHook} */
          l,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((l) => l !== null);
      let r = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Pe(bn.from(o), 0, 0)
      );
      g0(r, this.beforeTransactionSelection, this), r = r.setMeta(dt, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Wu }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(t) {
    this.doc.transact(() => {
      ir(this.doc, this.type, t, this), this.beforeTransactionSelection = nr(
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
const pd = (e, t, n, s, i, o) => {
  const r = (
    /** @type {PModel.Node} */
    n.mapping.get(e)
  );
  if (r === void 0) {
    if (e instanceof Et)
      return ui(
        e,
        t,
        n,
        s,
        i,
        o
      );
    throw ae();
  }
  return r;
}, ui = (e, t, n, s, i, o) => {
  const r = [], l = (c) => {
    if (c instanceof Et) {
      const a = pd(
        c,
        t,
        n,
        s,
        i,
        o
      );
      a !== null && r.push(a);
    } else {
      const a = (
        /** @type {Y.ContentType} */
        c._item.right?.content?.type
      );
      a instanceof ln && !a._item.deleted && a._item.id.client === a.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...a.toDelta()
      ]), a.doc.transact((d) => {
        a._item.delete(d);
      }));
      const u = w0(
        c,
        t,
        n,
        s,
        i,
        o
      );
      u !== null && u.forEach((d) => {
        d !== null && r.push(d);
      });
    }
  };
  s === void 0 || i === void 0 ? e.toArray().forEach(l) : Xu(e, new Hr(i.ds, s.sv)).forEach(l);
  try {
    const c = e.getAttributes(s);
    s !== void 0 && (Ri(
      /** @type {Y.Item} */
      e._item,
      s
    ) ? Ri(
      /** @type {Y.Item} */
      e._item,
      i
    ) || (c.ychange = o ? o(
      "added",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "added" }) : c.ychange = o ? o(
      "removed",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "removed" });
    const a = t.node(e.nodeName, c, r);
    return n.mapping.set(e, a), a;
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, dt), n.mapping.delete(e), null;
  }
}, w0 = (e, t, n, s, i, o) => {
  const r = [], l = e.toDelta(s, i, o);
  try {
    for (let c = 0; c < l.length; c++) {
      const a = l[c];
      r.push(t.text(a.insert, k0(a.attributes, t)));
    }
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, dt), null;
  }
  return r;
}, b0 = (e, t) => {
  const n = new Ht(), s = e.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: md(i.marks, t)
  }));
  return n.applyDelta(s), t.mapping.set(n, e), n;
}, y0 = (e, t) => {
  const n = new Et(e.type.name);
  for (const s in e.attrs) {
    const i = e.attrs[s];
    i !== null && s !== "ychange" && n.setAttribute(s, i);
  }
  return n.insert(
    0,
    so(e).map(
      (s) => sr(s, t)
    )
  ), t.mapping.set(n, e), n;
}, sr = (e, t) => e instanceof Array ? b0(e, t) : y0(e, t), Ic = (e) => typeof e == "object" && e !== null, Kr = (e, t) => {
  const n = Object.keys(e).filter((i) => e[i] !== null);
  let s = n.length === Object.keys(t).filter((i) => t[i] !== null).length;
  for (let i = 0; i < n.length && s; i++) {
    const o = n[i], r = e[o], l = t[o];
    s = o === "ychange" || r === l || Ic(r) && Ic(l) && Kr(r, l);
  }
  return s;
}, so = (e) => {
  const t = e.content.content, n = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    if (i.isText) {
      const o = [];
      for (let r = t[s]; s < t.length && r.isText; r = t[++s])
        o.push(r);
      s--, n.push(o);
    } else
      n.push(i);
  }
  return n;
}, gd = (e, t) => {
  const n = e.toDelta();
  return n.length === t.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (s, i) => s.insert === /** @type {any} */
    t[i].text && ku(s.attributes || {}).length === t[i].marks.length && Su(s.attributes, (o, r) => {
      const l = qr(r), c = t[i].marks;
      return Kr(o, c.find(
        /** @param {any} mark */
        (a) => a.type.name === l
      )?.attrs);
    })
  );
}, Is = (e, t) => {
  if (e instanceof Et && !(t instanceof Array) && or(e, t)) {
    const n = so(t);
    return e._length === n.length && Kr(e.getAttributes(), t.attrs) && e.toArray().every(
      (s, i) => Is(s, n[i])
    );
  }
  return e instanceof Ht && t instanceof Array && gd(e, t);
}, Li = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every(
  (n, s) => t[s] === n
), Rc = (e, t, n) => {
  const s = e.toArray(), i = so(t), o = i.length, r = s.length, l = Wn(r, o);
  let c = 0, a = 0, u = !1;
  for (; c < l; c++) {
    const d = s[c], f = i[c];
    if (Li(n.mapping.get(d), f))
      u = !0;
    else if (!Is(d, f))
      break;
  }
  for (; c + a < l; a++) {
    const d = s[r - a - 1], f = i[o - a - 1];
    if (Li(n.mapping.get(d), f))
      u = !0;
    else if (!Is(d, f))
      break;
  }
  return {
    equalityFactor: c + a,
    foundMappedChild: u
  };
}, v0 = (e) => {
  let t = "", n = e._start;
  const s = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof pe ? t += n.content.str : n.content instanceof bt && (s[n.content.key] = null)), n = n.right;
  return {
    str: t,
    nAttrs: s
  };
}, _0 = (e, t, n) => {
  n.mapping.set(e, t);
  const { nAttrs: s, str: i } = v0(e), o = t.map((a) => ({
    insert: (
      /** @type {any} */
      a.text
    ),
    attributes: Object.assign({}, s, md(a.marks, n))
  })), { insert: r, remove: l, index: c } = e0(
    i,
    o.map((a) => a.insert).join("")
  );
  e.delete(c, l), e.insert(c, r), e.applyDelta(
    o.map((a) => ({ retain: a.insert.length, attributes: a.attributes }))
  );
}, x0 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, qr = (e) => x0.exec(e)?.[1] ?? e, k0 = (e, t) => {
  const n = [];
  for (const s in e)
    n.push(t.mark(qr(s), e[s]));
  return n;
}, md = (e, t) => {
  const n = {};
  return e.forEach((s) => {
    if (s.type.name !== "ychange") {
      const i = Ke(t.isOMark, s.type, () => !s.type.excludes(s.type));
      n[i ? `${s.type.name}--${d0(s.toJSON())}` : s.type.name] = s.attrs;
    }
  }), n;
}, ir = (e, t, n, s) => {
  if (t instanceof Et && t.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (s.mapping.set(t, n), t instanceof Et) {
    const d = t.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && t.setAttribute(h, f[h]) : t.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && t.removeAttribute(h);
  }
  const i = so(n), o = i.length, r = t.toArray(), l = r.length, c = Wn(o, l);
  let a = 0, u = 0;
  for (; a < c; a++) {
    const d = r[a], f = i[a];
    if (!Li(s.mapping.get(d), f))
      if (Is(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  for (; u + a + 1 < c; u++) {
    const d = r[l - u - 1], f = i[o - u - 1];
    if (!Li(s.mapping.get(d), f))
      if (Is(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  e.transact(() => {
    for (; l - a - u > 0 && o - a - u > 0; ) {
      const f = r[a], h = i[a], p = r[l - u - 1], m = i[o - u - 1];
      if (f instanceof Ht && h instanceof Array)
        gd(f, h) || _0(f, h, s), a += 1;
      else {
        let y = f instanceof Et && or(f, h), b = p instanceof Et && or(p, m);
        if (y && b) {
          const T = Rc(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            s
          ), N = Rc(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            m,
            s
          );
          T.foundMappedChild && !N.foundMappedChild ? b = !1 : !T.foundMappedChild && N.foundMappedChild || T.equalityFactor < N.equalityFactor ? y = !1 : b = !1;
        }
        y ? (ir(
          e,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          s
        ), a += 1) : b ? (ir(
          e,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          m,
          s
        ), u += 1) : (s.mapping.delete(t.get(a)), t.delete(a, 1), t.insert(a, [
          sr(h, s)
        ]), a += 1);
      }
    }
    const d = l - a - u;
    if (l === 1 && o === 0 && r[0] instanceof Ht ? (s.mapping.delete(r[0]), r[0].delete(0, r[0].length)) : d > 0 && (t.slice(a, a + d).forEach((f) => s.mapping.delete(f)), t.delete(a, d)), a + u < o) {
      const f = [];
      for (let h = a; h < o - u; h++)
        f.push(sr(i[h], s));
      t.insert(a, f);
    }
  }, dt);
}, or = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, rr = (e, t, n) => {
  if (e === 0)
    return Eo(t, 0, -1);
  let s = t._first === null ? null : (
    /** @type {Y.ContentType} */
    t._first.content.type
  );
  for (; s !== null && t !== s; ) {
    if (s instanceof Ht) {
      if (s._length >= e)
        return Eo(s, e, -1);
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
          return new Ai(s._item === null ? null : s._item.id, s._item === null ? As(s) : null, null);
        if (e -= i, s._item !== null && s._item.next !== null)
          s = /** @type {Y.ContentType} */
          s._item.next.content.type;
        else {
          if (e === 0)
            return s = s._item === null ? s : s._item.parent, new Ai(s._item === null ? null : s._item.id, s._item === null ? As(s) : null, null);
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
      throw Ut();
    if (e === 0 && s.constructor !== Ht && s !== t)
      return S0(s._item.parent, s._item);
  }
  return Eo(t, t._length, -1);
}, S0 = (e, t) => {
  let n = null, s = null;
  return e._item === null ? s = As(e) : n = W(e._item.id.client, e._item.id.clock), new Ai(n, s, t.id);
}, di = (e, t, n, s) => {
  const i = Xm(n, e);
  if (i === null || i.type !== t && !Ts(t, i.type._item))
    return null;
  let o = i.type, r = 0;
  if (o.constructor === Ht)
    r = i.index;
  else if (o._item === null || !o._item.deleted) {
    let l = o._first, c = 0;
    for (; c < o._length && c < i.index && l !== null; ) {
      if (!l.deleted) {
        const a = (
          /** @type {Y.ContentType} */
          l.content.type
        );
        c++, a instanceof Ht ? r += a._length : r += /** @type {any} */
        s.get(a).nodeSize;
      }
      l = /** @type {Y.Item} */
      l.right;
    }
    r += 1;
  }
  for (; o !== t && o._item !== null; ) {
    const l = o._item.parent;
    if (l._item === null || !l._item.deleted) {
      r += 1;
      let c = (
        /** @type {Y.AbstractType} */
        l._first
      );
      for (; c !== null; ) {
        const a = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (a === o)
          break;
        c.deleted || (a instanceof Ht ? r += a._length : r += /** @type {any} */
        s.get(a).nodeSize), c = c.right;
      }
    }
    o = /** @type {Y.AbstractType} */
    l;
  }
  return r - 1;
};
function C0(e) {
  const t = e.toArray(), n = (s) => {
    let i;
    if (s instanceof Ht)
      i = s.toDelta().map(
        /** @param {any} d */
        (r) => {
          const l = {
            type: "text",
            text: r.insert
          };
          return r.attributes && (l.marks = Object.keys(r.attributes).map((c) => {
            const a = r.attributes[c], d = {
              type: qr(c)
            };
            return Object.keys(a) && (d.attrs = a), d;
          })), l;
        }
      );
    else if (s instanceof Et) {
      i = {
        type: s.nodeName
      };
      const o = s.getAttributes();
      Object.keys(o).length && (i.attrs = o);
      const r = s.toArray();
      r.length && (i.content = r.map(n).flat());
    } else
      Ut();
    return i;
  };
  return {
    type: "doc",
    content: t.map(n)
  };
}
const E0 = (e) => {
  const t = He.getState(e).undoManager;
  if (t != null)
    return t.undo(), !0;
}, A0 = (e) => {
  const t = He.getState(e).undoManager;
  if (t != null)
    return t.redo(), !0;
}, T0 = /* @__PURE__ */ new Set(["paragraph"]), M0 = (e, t) => !(e instanceof nt) || !(e.content instanceof ge) || !(e.content.type instanceof ln || e.content.type instanceof Et && t.has(e.content.type.nodeName)) || e.content.type._length === 0, O0 = ({ protectedNodes: e = T0, trackedOrigins: t = [], undoManager: n = null } = {}) => new cn({
  key: He,
  state: {
    init: (s, i) => {
      const o = dt.getState(i), r = n || new Wu(o.type, {
        trackedOrigins: new Set([dt].concat(t)),
        deleteFilter: (l) => M0(l, e),
        captureTransaction: (l) => l.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: r,
        prevSel: null,
        hasUndoOps: r.undoStack.length > 0,
        hasRedoOps: r.redoStack.length > 0
      };
    },
    /**
     * @returns {any}
     */
    apply: (s, i, o, r) => {
      const l = dt.getState(r).binding, c = i.undoManager, a = c.undoStack.length > 0, u = c.redoStack.length > 0;
      return l ? {
        undoManager: c,
        prevSel: nr(l, o),
        hasUndoOps: a,
        hasRedoOps: u
      } : a !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (s) => {
    const i = dt.getState(s.state), o = He.getState(s.state).undoManager;
    return o.on("stack-item-added", ({ stackItem: r }) => {
      const l = i.binding;
      l && r.meta.set(l, He.getState(s.state).prevSel);
    }), o.on("stack-item-popped", ({ stackItem: r }) => {
      const l = i.binding;
      l && (l.beforeTransactionSelection = r.meta.get(l) || l.beforeTransactionSelection);
    }), {
      destroy: () => {
        o.destroy();
      }
    };
  }
});
An.create({
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
      undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), He.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? E0(t) : !0),
      redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), He.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? A0(t) : !0)
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
    const t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = O0(this.options.yUndoOptions), s = n.spec.view;
    n.spec.view = (r) => {
      const { undoManager: l } = He.getState(r.state);
      l.restore && (l.restore(), l.restore = () => {
      });
      const c = s ? s(r) : void 0;
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
    }, o = p0(t, i);
    return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
      try {
        const r = C0(t);
        if (r.content.length === 0)
          return;
        this.editor.schema.nodeFromJSON(r).check();
      } catch (r) {
        return this.editor.emit("contentError", {
          error: r,
          editor: this.editor,
          disableCollaboration: () => {
            var l;
            (l = t.doc) == null || l.destroy(), this.storage.isDisabled = !0;
          }
        }), !1;
      }
    })), [
      o,
      n,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new cn({
        key: new qt("filterInvalidContent"),
        filterTransaction: () => {
          var r;
          return this.storage.isDisabled !== !1 && ((r = t.doc) == null || r.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function D0(e) {
  return !!e.getMeta(dt);
}
function Lc(e) {
  if (!e.length)
    return ul.empty;
  const t = [], n = e[0].$from.node(0);
  return e.forEach((s) => {
    const i = s.$from.pos, o = s.$from.nodeAfter;
    o && t.push(
      lf.node(i, i + o.nodeSize, {
        class: "ProseMirror-selectednoderange"
      })
    );
  }), ul.create(n, t);
}
function io(e, t, n) {
  const s = [], i = e.node(0);
  typeof n == "number" && n >= 0 || (e.sameParent(t) ? n = Math.max(0, e.sharedDepth(t.pos) - 1) : n = e.sharedDepth(t.pos));
  const o = new cf(e, t, n), r = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((l, c) => {
    const a = r + c, u = a + l.nodeSize;
    if (a < o.start || a >= o.end)
      return;
    const d = new oa(i.resolve(a), i.resolve(u));
    s.push(d);
  }), s;
}
var I0 = class wd {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new wd(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return new tn(n, s);
  }
}, tn = class Ye extends ne {
  constructor(t, n, s, i = 1) {
    const { doc: o } = t, r = t === n, l = t.pos === o.content.size && n.pos === o.content.size, c = r && !l ? o.resolve(n.pos + (i > 0 ? 1 : -1)) : n, a = r && l ? o.resolve(t.pos - (i > 0 ? 1 : -1)) : t, u = io(a.min(c), a.max(c), s), d = c.pos >= t.pos ? u[0].$from : u[u.length - 1].$to, f = c.pos >= t.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = s;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof Ye && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.anchor)), i = t.resolve(n.map(this.head));
    return new Ye(s, i);
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
      const i = this.ranges.slice(0, -1), o = i[0].$from, r = i[i.length - 1].$to;
      return new Ye(o, r, this.depth);
    }
    const n = this.ranges[0], s = t.resolve(Math.max(0, n.$from.pos - 1));
    return new Ye(this.$anchor, s, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), o = i[0].$from, r = i[i.length - 1].$to;
      return new Ye(r, o, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], s = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
    return new Ye(this.$anchor, s, this.depth);
  }
  static fromJSON(t, n) {
    return new Ye(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, s, i, o = 1) {
    return new this(t.resolve(n), t.resolve(s), i, o);
  }
  getBookmark() {
    return new I0(this.anchor, this.head);
  }
};
tn.prototype.visible = !1;
function Gs(e) {
  return e instanceof tn;
}
An.create({
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
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: o, tr: r } = s, { anchor: l, head: c } = o;
        if (!Gs(o)) {
          const u = tn.create(i, l, c, t, -1);
          return r.setSelection(u), n.dispatch(r), !0;
        }
        const a = o.extendBackwards();
        return r.setSelection(a), n.dispatch(r), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: o, tr: r } = s, { anchor: l, head: c } = o;
        if (!Gs(o)) {
          const u = tn.create(i, l, c, t);
          return r.setSelection(u), n.dispatch(r), !0;
        }
        const a = o.extendForwards();
        return r.setSelection(a), n.dispatch(r), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, tr: o } = s, r = tn.create(i, 0, i.content.size, t);
        return o.setSelection(r), n.dispatch(o), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: e } = this.editor.state;
    Gs(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let e = !1, t = !1;
    return [
      new cn({
        key: new qt("nodeRange"),
        props: {
          attributes: () => e ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, s) => {
              const { key: i } = this.options, o = /Mac/.test(navigator.platform), r = !!s.shiftKey, l = !!s.ctrlKey, c = !!s.altKey, a = !!s.metaKey, u = o ? a : l;
              return (i == null || i === "Shift" && r || i === "Control" && l || i === "Alt" && c || i === "Meta" && a || i === "Mod" && u) && (t = !0), t && document.addEventListener(
                "mouseup",
                () => {
                  t = !1;
                  const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: m, $head: y } = h;
                  if (m.sameParent(y))
                    return;
                  const b = tn.create(f, m.pos, y.pos, this.options.depth);
                  p.setSelection(b), n.dispatch(p);
                },
                { once: !0 }
              ), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: s } = n, i = Gs(s);
            if (e = !1, !t)
              return i ? (e = !0, Lc(s.ranges)) : null;
            const { $from: o, $to: r } = s;
            if (!i && o.sameParent(r))
              return null;
            const l = io(o, r, this.options.depth);
            return l.length ? (e = !0, Lc(l)) : null;
          }
        }
      })
    ];
  }
});
function R0(e) {
  let t = "";
  const n = getComputedStyle(e);
  for (let s = 0; s < n.length; s += 1)
    t += `${n[s]}:${n.getPropertyValue(n[s])};`;
  return t;
}
function L0(e) {
  const t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], s = [t, ...Array.from(t.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    s[o].style.cssText = R0(i);
  }), t;
}
var bd = (e) => {
  const { x: t, y: n, direction: s = "right", editor: i, bandHeight: o = 5 } = e, r = {
    top: n - o,
    bottom: n + o,
    left: s === "right" ? t : 0,
    right: s === "right" ? window.innerWidth - t : t
  }, c = [...i.view.dom.querySelectorAll("*")].filter((h) => i.view.posAtDOM(h, 0) >= 0).filter((h) => {
    const p = h.getBoundingClientRect();
    return !(p.bottom < r.top || p.top > r.bottom || p.right < r.left || p.left > r.right);
  });
  if (!c || c.length === 0)
    return { resultElement: null, resultNode: null, pos: null };
  const a = c[0], u = i.view.posAtDOM(a, 0);
  if (u === -1)
    return { resultElement: a, resultNode: null, pos: null };
  const d = i.state.doc.resolve(u);
  if (d.nodeAfter) {
    const h = i.view.nodeDOM(d.pos);
    if (h && h === a)
      return {
        resultElement: a,
        resultNode: d.nodeAfter,
        pos: u
      };
  }
  const f = i.state.doc.nodeAt(u - 1);
  return { resultElement: a, resultNode: f, pos: u };
};
function Xs(e, t) {
  return window.getComputedStyle(e)[t];
}
function N0(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function P0(e, t, n) {
  const s = parseInt(Xs(e.dom, "paddingLeft"), 10), i = parseInt(Xs(e.dom, "paddingRight"), 10), o = parseInt(Xs(e.dom, "borderLeftWidth"), 10), r = parseInt(Xs(e.dom, "borderLeftWidth"), 10), l = e.dom.getBoundingClientRect();
  return {
    left: N0(t, l.left + s + o, l.right - i - r),
    top: n
  };
}
function yd(e) {
  var t;
  (t = e.parentNode) == null || t.removeChild(e);
}
function $0(e, t) {
  const { doc: n } = t.view.state, s = bd({
    editor: t,
    x: e.clientX,
    y: e.clientY,
    direction: "right"
  });
  if (!s.resultNode || s.pos === null)
    return [];
  const i = e.clientX, o = P0(t.view, i, e.clientY), r = t.view.posAtCoords(o);
  if (!r)
    return [];
  const { pos: l } = r;
  if (!n.resolve(l).parent)
    return [];
  const a = n.resolve(s.pos), u = n.resolve(s.pos + 1);
  return io(a, u, 0);
}
function B0(e, t) {
  const { view: n } = t;
  if (!e.dataTransfer)
    return;
  const { empty: s, $from: i, $to: o } = n.state.selection, r = $0(e, t), l = io(i, o, 0), c = l.some((y) => r.find((b) => b.$from === y.$from && b.$to === y.$to)), a = s || !c ? r : l;
  if (!a.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = a[0].$from.pos, h = a[a.length - 1].$to.pos, p = tn.create(n.state.doc, f, h), m = p.content();
  a.forEach((y) => {
    const b = n.nodeDOM(y.$from.pos), T = L0(b);
    d.append(T);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: m, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => yd(d), { once: !0 });
}
var Nc = (e, t) => {
  const n = e.resolve(t), { depth: s } = n;
  return s === 0 ? t : n.pos - n.parentOffset - 1;
}, Pc = (e, t) => {
  const n = e.nodeAt(t), s = e.resolve(t);
  let { depth: i } = s, o = n;
  for (; i > 0; ) {
    const r = s.node(i);
    i -= 1, i === 0 && (o = r);
  }
  return o;
}, Oo = (e, t) => {
  const n = dt.getState(e);
  return n ? rr(t, n.type, n.binding.mapping) : null;
}, F0 = (e, t) => {
  const n = dt.getState(e);
  return n ? di(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, $c = (e, t) => {
  let n = t;
  for (; n?.parentNode && n.parentNode !== e.dom; )
    n = n.parentNode;
  return n;
}, vd = new qt("dragHandle"), _d = ({
  pluginKey: e = vd,
  element: t,
  editor: n,
  computePositionConfig: s,
  getReferencedVirtualElement: i,
  onNodeChange: o,
  onElementDragStart: r,
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
  function b(S) {
    const L = i?.() || {
      getBoundingClientRect: () => S.getBoundingClientRect()
    };
    Mr(L, t, s).then((D) => {
      Object.assign(t.style, {
        position: D.strategy,
        left: `${D.x}px`,
        top: `${D.y}px`
      });
    });
  }
  function T(S) {
    r?.(S), B0(S, n), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }
  function N(S) {
    l?.(S), m(), t && (t.style.pointerEvents = "auto");
  }
  return t.addEventListener("dragstart", T), t.addEventListener("dragend", N), c.appendChild(t), {
    unbind() {
      t.removeEventListener("dragstart", T), t.removeEventListener("dragend", N), h && (cancelAnimationFrame(h), h = null, p = null);
    },
    plugin: new cn({
      key: typeof e == "string" ? new qt(e) : e,
      state: {
        init() {
          return { locked: !1 };
        },
        apply(S, L, D, $) {
          const C = S.getMeta("lockDragHandle"), M = S.getMeta("hideDragHandle");
          if (C !== void 0 && (a = C), M)
            return m(), a = !1, u = null, d = -1, o?.({ editor: n, node: null, pos: -1 }), L;
          if (S.docChanged && d !== -1 && t)
            if (D0(S)) {
              const _ = F0($, f);
              _ !== d && (d = _);
            } else {
              const _ = S.mapping.map(d);
              _ !== d && (d = _, f = Oo($, d));
            }
          return L;
        }
      },
      view: (S) => {
        var L;
        return t.draggable = !0, t.style.pointerEvents = "auto", (L = n.view.dom.parentElement) == null || L.appendChild(c), c.style.pointerEvents = "none", c.style.position = "absolute", c.style.top = "0", c.style.left = "0", {
          update(D, $) {
            if (!t)
              return;
            if (!n.isEditable) {
              m();
              return;
            }
            if (a ? t.draggable = !1 : t.draggable = !0, S.state.doc.eq($.doc) || d === -1)
              return;
            let C = S.nodeDOM(d);
            if (C = $c(S, C), C === S.dom || C?.nodeType !== 1)
              return;
            const M = S.posAtDOM(C, 0), _ = Pc(n.state.doc, M), F = Nc(n.state.doc, M);
            u = _, d = F, f = Oo(S.state, d), o?.({ editor: n, node: u, pos: d }), b(C);
          },
          // TODO: Kills even on hot reload
          destroy() {
            h && (cancelAnimationFrame(h), h = null, p = null), t && yd(c);
          }
        };
      },
      props: {
        handleDOMEvents: {
          keydown(S) {
            return !t || a || S.hasFocus() && (m(), u = null, d = -1, o?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mouseleave(S, L) {
            return a || L.target && !c.contains(L.relatedTarget) && (m(), u = null, d = -1, o?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mousemove(S, L) {
            return !t || a || (p = { x: L.clientX, y: L.clientY }, h) || (h = requestAnimationFrame(() => {
              if (h = null, !p)
                return;
              const { x: D, y: $ } = p;
              p = null;
              const C = bd({
                x: D,
                y: $,
                direction: "right",
                editor: n
              });
              if (!C.resultElement)
                return;
              let M = C.resultElement;
              if (M = $c(S, M), M === S.dom || M?.nodeType !== 1)
                return;
              const _ = S.posAtDOM(M, 0), F = Pc(n.state.doc, _);
              if (F !== u) {
                const I = Nc(n.state.doc, _);
                u = F, d = I, f = Oo(S.state, d), o?.({ editor: n, node: u, pos: d }), b(M), y();
              }
            })), !1;
          }
        }
      }
    })
  };
}, xd = {
  placement: "left-start",
  strategy: "absolute"
};
An.create({
  name: "dragHandle",
  addOptions() {
    return {
      render() {
        const e = document.createElement("div");
        return e.classList.add("drag-handle"), e;
      },
      computePositionConfig: {},
      locked: !1,
      onNodeChange: () => null
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
      _d({
        computePositionConfig: { ...xd, ...this.options.computePositionConfig },
        getReferencedVirtualElement: this.options.getReferencedVirtualElement,
        element: e,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      }).plugin
    ];
  }
});
var H0 = /* @__PURE__ */ ee({
  name: "DragHandleVue",
  props: {
    pluginKey: {
      type: [String, Object],
      default: vd
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
    class: {
      type: String,
      default: "drag-handle"
    }
  },
  setup(e, { slots: t }) {
    const n = Q(null);
    return an(() => {
      const { editor: s, pluginKey: i, onNodeChange: o, computePositionConfig: r } = e;
      s.registerPlugin(
        _d({
          editor: s,
          element: n.value,
          pluginKey: i,
          computePositionConfig: { ...xd, ...r },
          onNodeChange: o
        }).plugin
      );
    }), Ns(() => {
      const { pluginKey: s, editor: i } = e;
      i.unregisterPlugin(s);
    }), () => {
      var s;
      return Un(
        "div",
        {
          ref: n,
          class: e.class,
          style: { visibility: "hidden", position: "absolute" }
        },
        (s = t.default) == null ? void 0 : s.call(t)
      );
    };
  }
}), U0 = (e) => ht({
  find: /--$/,
  replace: e ?? "—"
}), V0 = (e) => ht({
  find: /\.\.\.$/,
  replace: e ?? "…"
}), j0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: e ?? "“"
}), z0 = (e) => ht({
  find: /"$/,
  replace: e ?? "”"
}), W0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: e ?? "‘"
}), K0 = (e) => ht({
  find: /'$/,
  replace: e ?? "’"
}), q0 = (e) => ht({
  find: /<-$/,
  replace: e ?? "←"
}), J0 = (e) => ht({
  find: /->$/,
  replace: e ?? "→"
}), Y0 = (e) => ht({
  find: /\(c\)$/,
  replace: e ?? "©"
}), G0 = (e) => ht({
  find: /\(tm\)$/,
  replace: e ?? "™"
}), X0 = (e) => ht({
  find: /\(sm\)$/,
  replace: e ?? "℠"
}), Q0 = (e) => ht({
  find: /\(r\)$/,
  replace: e ?? "®"
}), Z0 = (e) => ht({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: e ?? "½"
}), tb = (e) => ht({
  find: /\+\/-$/,
  replace: e ?? "±"
}), eb = (e) => ht({
  find: /!=$/,
  replace: e ?? "≠"
}), nb = (e) => ht({
  find: /<<$/,
  replace: e ?? "«"
}), sb = (e) => ht({
  find: />>$/,
  replace: e ?? "»"
}), ib = (e) => ht({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: e ?? "×"
}), ob = (e) => ht({
  find: /\^2$/,
  replace: e ?? "²"
}), rb = (e) => ht({
  find: /\^3$/,
  replace: e ?? "³"
}), lb = (e) => ht({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: e ?? "¼"
}), cb = (e) => ht({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: e ?? "¾"
}), ab = An.create({
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
    return this.options.emDash !== !1 && e.push(U0(this.options.emDash)), this.options.ellipsis !== !1 && e.push(V0(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && e.push(j0(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(z0(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && e.push(W0(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push(K0(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && e.push(q0(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(J0(this.options.rightArrow)), this.options.copyright !== !1 && e.push(Y0(this.options.copyright)), this.options.trademark !== !1 && e.push(G0(this.options.trademark)), this.options.servicemark !== !1 && e.push(X0(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(Q0(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(Z0(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(tb(this.options.plusMinus)), this.options.notEqual !== !1 && e.push(eb(this.options.notEqual)), this.options.laquo !== !1 && e.push(nb(this.options.laquo)), this.options.raquo !== !1 && e.push(sb(this.options.raquo)), this.options.multiplication !== !1 && e.push(ib(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(ob(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(rb(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(lb(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(cb(this.options.threeQuarters)), e;
  }
}), ub = ab, db = /(^|[^`])`([^`]+)`(?!`)$/, fb = /(^|[^`])`([^`]+)`(?!`)/g, hb = ra.create({
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
    return ["code", Yn(this.options.HTMLAttributes, e), 0];
  },
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
      ca({
        find: db,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      la({
        find: fb,
        type: this.type
      })
    ];
  }
}), pb = /^```([a-z]+)?[\s\n]$/, gb = /^~~~([a-z]+)?[\s\n]$/, mb = Gn.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: 4,
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
          const { languageClassPrefix: n } = this.options, o = [...((t = e.firstElementChild) == null ? void 0 : t.classList) || []].filter((r) => r.startsWith(n)).map((r) => r.replace(n, ""))[0];
          return o || null;
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
      Yn(this.options.HTMLAttributes, t),
      [
        "code",
        {
          class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
        },
        0
      ]
    ];
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
        if (!this.options.enableTabIndentation)
          return !1;
        const { state: t } = e, { selection: n } = t, { $from: s, empty: i } = n;
        if (s.parent.type !== this.type)
          return !1;
        const o = " ".repeat(this.options.tabSize);
        return i ? e.commands.insertContent(o) : e.commands.command(({ tr: r }) => {
          const { from: l, to: c } = n, d = t.doc.textBetween(l, c, `
`, `
`).split(`
`).map((f) => o + f).join(`
`);
          return r.replaceWith(l, c, t.schema.text(d)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: e }) => {
        if (!this.options.enableTabIndentation)
          return !1;
        const { state: t } = e, { selection: n } = t, { $from: s, empty: i } = n;
        return s.parent.type !== this.type ? !1 : i ? e.commands.command(({ tr: o }) => {
          var r;
          const { pos: l } = s, c = s.start(), a = s.end(), d = t.doc.textBetween(c, a, `
`, `
`).split(`
`);
          let f = 0, h = 0;
          const p = l - c;
          for (let S = 0; S < d.length; S += 1) {
            if (h + d[S].length >= p) {
              f = S;
              break;
            }
            h += d[S].length + 1;
          }
          const y = ((r = d[f].match(/^ */)) == null ? void 0 : r[0]) || "", b = Math.min(y.length, this.options.tabSize);
          if (b === 0)
            return !0;
          let T = c;
          for (let S = 0; S < f; S += 1)
            T += d[S].length + 1;
          return o.delete(T, T + b), l - T <= b && o.setSelection(Be.create(o.doc, T)), !0;
        }) : e.commands.command(({ tr: o }) => {
          const { from: r, to: l } = n, u = t.doc.textBetween(r, l, `
`, `
`).split(`
`).map((d) => {
            var f;
            const h = ((f = d.match(/^ */)) == null ? void 0 : f[0]) || "", p = Math.min(h.length, this.options.tabSize);
            return d.slice(p);
          }).join(`
`);
          return o.replaceWith(r, l, t.schema.text(u)), !0;
        });
      },
      // exit node on triple enter
      Enter: ({ editor: e }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: t } = e, { selection: n } = t, { $from: s, empty: i } = n;
        if (!i || s.parent.type !== this.type)
          return !1;
        const o = s.parentOffset === s.parent.nodeSize - 2, r = s.parent.textContent.endsWith(`

`);
        return !o || !r ? !1 : e.chain().command(({ tr: l }) => (l.delete(s.pos - 2, s.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: e }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: t } = e, { selection: n, doc: s } = t, { $from: i, empty: o } = n;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: a }) => (a.setSelection(ne.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      dl({
        find: pb,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      dl({
        find: gb,
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
      new cn({
        key: new qt("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = t.clipboardData.getData("text/plain"), s = t.clipboardData.getData("vscode-editor-data"), i = s ? JSON.parse(s) : void 0, o = i?.mode;
            if (!n || !o)
              return !1;
            const { tr: r, schema: l } = e.state, c = l.text(n.replace(/\r\n?/g, `
`));
            return r.replaceSelectionWith(this.type.create({ language: o }, c)), r.selection.$from.parent.type !== this.type && r.setSelection(Be.near(r.doc.resolve(Math.max(0, r.selection.from - 2)))), r.setMeta("paste", !0), e.dispatch(r), !0;
          }
        }
      })
    ];
  }
}), wb = Gn.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), bb = Gn.create({
  name: "hardBreak",
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
    return ["br", Yn(this.options.HTMLAttributes, e)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: e, chain: t, state: n, editor: s }) => e.first([
        () => e.exitCode(),
        () => e.command(() => {
          const { selection: i, storedMarks: o } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: r } = this.options, { splittableMarks: l } = s.extensionManager, c = o || i.$to.parentOffset && i.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: a, dispatch: u }) => {
            if (u && c && r) {
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
}), yb = Gn.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["hr", Yn(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        if (!uf(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, i = e();
        return df(n) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ tr: o, dispatch: r }) => {
          var l;
          if (r) {
            const { $to: c } = o.selection, a = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? o.setSelection(Be.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(pr.create(o.doc, c.pos)) : o.setSelection(Be.create(o.doc, c.pos));
            else {
              const u = (l = c.parent.type.contentMatch.defaultType) == null ? void 0 : l.create();
              u && (o.insert(a, u), o.setSelection(Be.create(o.doc, a + 1)));
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
      af({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), vb = Gn.create({
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
    return ["p", Yn(this.options.HTMLAttributes, e), 0];
  },
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
}), _b = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, xb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, kb = ra.create({
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
    return ["s", Yn(this.options.HTMLAttributes, e), 0];
  },
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
      ca({
        find: _b,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      la({
        find: xb,
        type: this.type
      })
    ];
  }
}), Sb = Gn.create({
  name: "text",
  group: "inline"
}), Cb = An.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const i = [];
    return this.options.bold !== !1 && i.push(bf.configure(this.options.bold)), this.options.blockquote !== !1 && i.push(wf.configure(this.options.blockquote)), this.options.bulletList !== !1 && i.push(xf.configure(this.options.bulletList)), this.options.code !== !1 && i.push(hb.configure(this.options.code)), this.options.codeBlock !== !1 && i.push(mb.configure(this.options.codeBlock)), this.options.document !== !1 && i.push(wb.configure(this.options.document)), this.options.dropcursor !== !1 && i.push(Af.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && i.push(Tf.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && i.push(bb.configure(this.options.hardBreak)), this.options.heading !== !1 && i.push(yf.configure(this.options.heading)), this.options.undoRedo !== !1 && i.push(Mf.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && i.push(yb.configure(this.options.horizontalRule)), this.options.italic !== !1 && i.push(vf.configure(this.options.italic)), this.options.listItem !== !1 && i.push(kf.configure(this.options.listItem)), this.options.listKeymap !== !1 && i.push(Sf.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && i.push(_f.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && i.push(Cf.configure(this.options.orderedList)), this.options.paragraph !== !1 && i.push(vb.configure(this.options.paragraph)), this.options.strike !== !1 && i.push(kb.configure(this.options.strike)), this.options.text !== !1 && i.push(Sb.configure(this.options.text)), this.options.underline !== !1 && i.push(Ef.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && i.push(Of.configure((s = this.options) == null ? void 0 : s.trailingNode)), i;
  }
}), Eb = Cb;
function Bc(e) {
  return tf((t, n) => ({
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
var Ab = class extends ff {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Bc(this.view.state), this.reactiveExtensionStorage = Bc(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Qc(this);
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
}, Tb = /* @__PURE__ */ ee({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = Q(), n = zi();
    return Xn(() => {
      const s = e.editor;
      s && s.options.element && t.value && Zt(() => {
        var i;
        if (!t.value || !((i = s.view.dom) != null && i.firstChild))
          return;
        const o = ct(t.value);
        t.value.append(s.view.dom), s.contentComponent = n.ctx._, n && (s.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), s.setOptions({
          element: o
        }), s.createNodeViews();
      });
    }), Ns(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return Un("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
}), lr, cr;
if (typeof WeakMap < "u") {
  let e = /* @__PURE__ */ new WeakMap();
  lr = (t) => e.get(t), cr = (t, n) => (e.set(t, n), n);
} else {
  const e = [];
  let n = 0;
  lr = (s) => {
    for (let i = 0; i < e.length; i += 2)
      if (e[i] == s) return e[i + 1];
  }, cr = (s, i) => (n == 10 && (n = 0), e[n++] = s, e[n++] = i);
}
var Ne = class {
  constructor(e, t, n, s) {
    this.width = e, this.height = t, this.map = n, this.problems = s;
  }
  // Find the dimensions of the cell at the given position.
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      const n = this.map[t];
      if (n != e) continue;
      const s = t % this.width, i = t / this.width | 0;
      let o = s + 1, r = i + 1;
      for (let l = 1; o < this.width && this.map[t + l] == n; l++)
        o++;
      for (let l = 1; r < this.height && this.map[t + this.width * l] == n; l++)
        r++;
      return { left: s, top: i, right: o, bottom: r };
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
    const { left: s, right: i, top: o, bottom: r } = this.findCell(e);
    return t == "horiz" ? (n < 0 ? s == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? s - 1 : i)] : (n < 0 ? o == 0 : r == this.height) ? null : this.map[s + this.width * (n < 0 ? o - 1 : r)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(e, t) {
    const {
      left: n,
      right: s,
      top: i,
      bottom: o
    } = this.findCell(e), {
      left: r,
      right: l,
      top: c,
      bottom: a
    } = this.findCell(t);
    return {
      left: Math.min(n, r),
      top: Math.min(i, c),
      right: Math.max(s, l),
      bottom: Math.max(o, a)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(e) {
    const t = [], n = {};
    for (let s = e.top; s < e.bottom; s++)
      for (let i = e.left; i < e.right; i++) {
        const o = s * this.width + i, r = this.map[o];
        n[r] || (n[r] = !0, !(i == e.left && i && this.map[o - 1] == r || s == e.top && s && this.map[o - this.width] == r) && t.push(r));
      }
    return t;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(e, t, n) {
    for (let s = 0, i = 0; ; s++) {
      const o = i + n.child(s).nodeSize;
      if (s == e) {
        let r = t + e * this.width;
        const l = (e + 1) * this.width;
        for (; r < l && this.map[r] < i; ) r++;
        return r == l ? o - 1 : this.map[r];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(e) {
    return lr(e) || cr(e, Mb(e));
  }
};
function Mb(e) {
  if (e.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + e.type.name);
  const t = Ob(e), n = e.childCount, s = [];
  let i = 0, o = null;
  const r = [];
  for (let a = 0, u = t * n; a < u; a++) s[a] = 0;
  for (let a = 0, u = 0; a < n; a++) {
    const d = e.child(a);
    u++;
    for (let p = 0; ; p++) {
      for (; i < s.length && s[i] != 0; ) i++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: y, rowspan: b, colwidth: T } = m.attrs;
      for (let N = 0; N < b; N++) {
        if (N + a >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - N
          });
          break;
        }
        const S = i + N * t;
        for (let L = 0; L < y; L++) {
          s[S + L] == 0 ? s[S + L] = u : (o || (o = [])).push({
            type: "collision",
            row: a,
            pos: u,
            n: y - L
          });
          const D = T && T[L];
          if (D) {
            const $ = (S + L) % t * 2, C = r[$];
            C == null || C != D && r[$ + 1] == 1 ? (r[$] = D, r[$ + 1] = 1) : C == D && r[$ + 1]++;
          }
        }
      }
      i += y, u += m.nodeSize;
    }
    const f = (a + 1) * t;
    let h = 0;
    for (; i < f; ) s[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: a, n: h }), u++;
  }
  (t === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new Ne(t, n, s, o);
  let c = !1;
  for (let a = 0; !c && a < r.length; a += 2)
    r[a] != null && r[a + 1] < n && (c = !0);
  return c && Db(l, r, e), l;
}
function Ob(e) {
  let t = -1, n = !1;
  for (let s = 0; s < e.childCount; s++) {
    const i = e.child(s);
    let o = 0;
    if (n)
      for (let r = 0; r < s; r++) {
        const l = e.child(r);
        for (let c = 0; c < l.childCount; c++) {
          const a = l.child(c);
          r + a.attrs.rowspan > s && (o += a.attrs.colspan);
        }
      }
    for (let r = 0; r < i.childCount; r++) {
      const l = i.child(r);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    t == -1 ? t = o : t != o && (t = Math.max(t, o));
  }
  return t;
}
function Db(e, t, n) {
  e.problems || (e.problems = []);
  const s = {};
  for (let i = 0; i < e.map.length; i++) {
    const o = e.map[i];
    if (s[o]) continue;
    s[o] = !0;
    const r = n.nodeAt(o);
    if (!r)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const c = r.attrs;
    for (let a = 0; a < c.colspan; a++) {
      const u = (i + a) % e.width, d = t[u * 2];
      d != null && (!c.colwidth || c.colwidth[a] != d) && ((l || (l = Ib(c)))[a] = d);
    }
    l && e.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function Ib(e) {
  if (e.colwidth) return e.colwidth.slice();
  const t = [];
  for (let n = 0; n < e.colspan; n++) t.push(0);
  return t;
}
function Jr(e) {
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
new qt("selectingCells");
function Rb(e) {
  for (let t = e.depth - 1; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return e.node(0).resolve(e.before(t + 1));
  return null;
}
function kd(e) {
  const t = e.selection.$head;
  for (let n = t.depth; n > 0; n--)
    if (t.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Lb(e) {
  const t = e.selection;
  if ("$anchorCell" in t && t.$anchorCell)
    return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
  if ("node" in t && t.node && t.node.type.spec.tableRole == "cell")
    return t.$anchor;
  const n = Rb(t.$head) || Nb(t.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${t.head}`);
}
function Nb(e) {
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
function Fc(e) {
  return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function Sd(e, t) {
  return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function Cd(e, t, n) {
  const s = e.node(-1), i = Ne.get(s), o = e.start(-1), r = i.nextCell(e.pos - o, t, n);
  return r == null ? null : e.node(0).resolve(o + r);
}
function Hc(e, t, n = 1) {
  const s = { ...e, colspan: e.colspan - n };
  return s.colwidth && (s.colwidth = s.colwidth.slice(), s.colwidth.splice(t, n), s.colwidth.some((i) => i > 0) || (s.colwidth = null)), s;
}
var Ae = class Ie extends ne {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(t, n = t) {
    const s = t.node(-1), i = Ne.get(s), o = t.start(-1), r = i.rectBetween(
      t.pos - o,
      n.pos - o
    ), l = t.node(0), c = i.cellsInRect(r).filter((u) => u != n.pos - o);
    c.unshift(n.pos - o);
    const a = c.map((u) => {
      const d = s.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new oa(
        l.resolve(f),
        l.resolve(f + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = t, this.$headCell = n;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
    if (Fc(s) && Fc(i) && Sd(s, i)) {
      const o = this.$anchorCell.node(-1) != s.node(-1);
      return o && this.isRowSelection() ? Ie.rowSelection(s, i) : o && this.isColSelection() ? Ie.colSelection(s, i) : new Ie(s, i);
    }
    return Be.between(s, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const t = this.$anchorCell.node(-1), n = Ne.get(t), s = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - s,
      this.$headCell.pos - s
    ), o = {}, r = [];
    for (let c = i.top; c < i.bottom; c++) {
      const a = [];
      for (let u = c * n.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = n.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let p = t.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = i.left - h.left, y = h.right - i.right;
        if (m > 0 || y > 0) {
          let b = p.attrs;
          if (m > 0 && (b = Hc(b, 0, m)), y > 0 && (b = Hc(
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
      r.push(t.child(c).copy(bn.from(a)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? t : r;
    return new Pe(bn.from(l), 1, 1);
  }
  replace(t, n = Pe.empty) {
    const s = t.steps.length, i = this.ranges;
    for (let r = 0; r < i.length; r++) {
      const { $from: l, $to: c } = i[r], a = t.mapping.slice(s);
      t.replace(
        a.map(l.pos),
        a.map(c.pos),
        r ? Pe.empty : n
      );
    }
    const o = ne.findFrom(
      t.doc.resolve(t.mapping.slice(s).map(this.to)),
      -1
    );
    o && t.setSelection(o);
  }
  replaceWith(t, n) {
    this.replace(t, new Pe(bn.from(n), 0, 0));
  }
  forEachCell(t) {
    const n = this.$anchorCell.node(-1), s = Ne.get(n), i = this.$anchorCell.start(-1), o = s.cellsInRect(
      s.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let r = 0; r < o.length; r++)
      t(n.nodeAt(o[r]), i + o[r]);
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
    const s = t.node(-1), i = Ne.get(s), o = t.start(-1), r = i.findCell(t.pos - o), l = i.findCell(n.pos - o), c = t.node(0);
    return r.top <= l.top ? (r.top > 0 && (t = c.resolve(o + i.map[r.left])), l.bottom < i.height && (n = c.resolve(
      o + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (n = c.resolve(o + i.map[l.left])), r.bottom < i.height && (t = c.resolve(
      o + i.map[i.width * (i.height - 1) + r.right - 1]
    ))), new Ie(t, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const t = this.$anchorCell.node(-1), n = Ne.get(t), s = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - s), o = n.colCount(this.$headCell.pos - s);
    if (Math.min(i, o) > 0) return !1;
    const r = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(r, l) == n.width;
  }
  eq(t) {
    return t instanceof Ie && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(t, n = t) {
    const s = t.node(-1), i = Ne.get(s), o = t.start(-1), r = i.findCell(t.pos - o), l = i.findCell(n.pos - o), c = t.node(0);
    return r.left <= l.left ? (r.left > 0 && (t = c.resolve(
      o + i.map[r.top * i.width]
    )), l.right < i.width && (n = c.resolve(
      o + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (n = c.resolve(o + i.map[l.top * i.width])), r.right < i.width && (t = c.resolve(
      o + i.map[i.width * (r.top + 1) - 1]
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
    return new Pb(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Ae.prototype.visible = !1;
ne.jsonID("cell", Ae);
var Pb = class Ed {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new Ed(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && s.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && s.index() < s.parent.childCount && Sd(n, s) ? new Ae(n, s) : ne.near(s, 1);
  }
};
new qt("fix-tables");
function Ad(e) {
  const t = e.selection, n = Lb(e), s = n.node(-1), i = n.start(-1), o = Ne.get(s);
  return { ...t instanceof Ae ? o.rectBetween(
    t.$anchorCell.pos - i,
    t.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: s };
}
function $b(e) {
  return function(t, n) {
    if (!kd(t)) return !1;
    if (n) {
      const s = Jr(t.schema), i = Ad(t), o = t.tr, r = i.map.cellsInRect(
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
      ), l = r.map((c) => i.table.nodeAt(c));
      for (let c = 0; c < r.length; c++)
        l[c].type == s.header_cell && o.setNodeMarkup(
          i.tableStart + r[c],
          s.cell,
          l[c].attrs
        );
      if (o.steps.length == 0)
        for (let c = 0; c < r.length; c++)
          o.setNodeMarkup(
            i.tableStart + r[c],
            s.header_cell,
            l[c].attrs
          );
      n(o);
    }
    return !0;
  };
}
function Uc(e, t, n) {
  const s = t.map.cellsInRect({
    left: 0,
    top: 0,
    right: e == "row" ? t.map.width : 1,
    bottom: e == "column" ? t.map.height : 1
  });
  for (let i = 0; i < s.length; i++) {
    const o = t.table.nodeAt(s[i]);
    if (o && o.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Yr(e, t) {
  return t = t || { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? $b(e) : function(n, s) {
    if (!kd(n)) return !1;
    if (s) {
      const i = Jr(n.schema), o = Ad(n), r = n.tr, l = Uc("row", o, i), c = Uc(
        "column",
        o,
        i
      ), u = (e === "column" ? l : e === "row" ? c : !1) ? 1 : 0, d = e == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: o.map.height
      } : e == "row" ? {
        left: u,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = e == "column" ? c ? i.cell : i.header_cell : e == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((h) => {
        const p = h + o.tableStart, m = r.doc.nodeAt(p);
        m && r.setNodeMarkup(p, f, m.attrs);
      }), s(r);
    }
    return !0;
  };
}
Yr("row", {
  useDeprecatedLogic: !0
});
Yr("column", {
  useDeprecatedLogic: !0
});
Yr("cell", {
  useDeprecatedLogic: !0
});
function Qs(e, t) {
  const n = e.selection;
  if (!(n instanceof Ae)) return !1;
  if (t) {
    const s = e.tr, i = Jr(e.schema).cell.createAndFill().content;
    n.forEachCell((o, r) => {
      o.content.eq(i) || s.replace(
        s.mapping.map(r + 1),
        s.mapping.map(r + o.nodeSize - 1),
        new Pe(i, 0, 0)
      );
    }), s.docChanged && t(s);
  }
  return !0;
}
hf({
  ArrowLeft: Zs("horiz", -1),
  ArrowRight: Zs("horiz", 1),
  ArrowUp: Zs("vert", -1),
  ArrowDown: Zs("vert", 1),
  "Shift-ArrowLeft": ti("horiz", -1),
  "Shift-ArrowRight": ti("horiz", 1),
  "Shift-ArrowUp": ti("vert", -1),
  "Shift-ArrowDown": ti("vert", 1),
  Backspace: Qs,
  "Mod-Backspace": Qs,
  Delete: Qs,
  "Mod-Delete": Qs
});
function fi(e, t, n) {
  return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function Zs(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof Ae)
      return fi(
        n,
        s,
        ne.near(o.$headCell, t)
      );
    if (e != "horiz" && !o.empty) return !1;
    const r = Td(i, e, t);
    if (r == null) return !1;
    if (e == "horiz")
      return fi(
        n,
        s,
        ne.near(n.doc.resolve(o.head + t), t)
      );
    {
      const l = n.doc.resolve(r), c = Cd(l, e, t);
      let a;
      return c ? a = ne.near(c, 1) : t < 0 ? a = ne.near(n.doc.resolve(l.before(-1)), -1) : a = ne.near(n.doc.resolve(l.after(-1)), 1), fi(n, s, a);
    }
  };
}
function ti(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const o = n.selection;
    let r;
    if (o instanceof Ae)
      r = o;
    else {
      const c = Td(i, e, t);
      if (c == null) return !1;
      r = new Ae(n.doc.resolve(c));
    }
    const l = Cd(r.$headCell, e, t);
    return l ? fi(
      n,
      s,
      new Ae(r.$anchorCell, l)
    ) : !1;
  };
}
function Td(e, t, n) {
  if (!(e.state.selection instanceof Be)) return null;
  const { $head: s } = e.state.selection;
  for (let i = s.depth - 1; i >= 0; i--) {
    const o = s.node(i);
    if ((n < 0 ? s.index(i) : s.indexAfter(i)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = s.before(i), c = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return e.endOfTextblock(c) ? l : null;
    }
  }
  return null;
}
new qt(
  "tableColumnResizing"
);
function Bb(e, t) {
  const n = Math.min(e.top, t.top), s = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), r = Math.max(e.right, t.right) - i, l = s - n, c = i, a = n;
  return new DOMRect(c, a, r, l);
}
var Fb = class {
  constructor({
    editor: e,
    element: t,
    view: n,
    updateDelay: s = 250,
    resizeDelay: i = 60,
    shouldShow: o,
    appendTo: r,
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
      const { doc: p, selection: m } = d, { empty: y } = m, b = !p.textBetween(f, h).length && pf(d.selection), T = this.element.contains(document.activeElement);
      return !(!(u.hasFocus() || T) || y || b || !this.editor.isEditable);
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
    this.editor = e, this.element = t, this.view = n, this.updateDelay = s, this.resizeDelay = i, this.appendTo = r, this.scrollTarget = (a = c?.scrollTarget) != null ? a : window, this.getReferencedVirtualElement = l, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...c
    }, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && this.show();
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(du(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      uu(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      cu(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(pu(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(fu(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      au(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(hu(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      gu(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  get virtualElement() {
    var e;
    const { selection: t } = this.editor.state, n = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
    if (n)
      return n;
    const s = aa(this.view, t.from, t.to);
    let i = {
      getBoundingClientRect: () => s,
      getClientRects: () => [s]
    };
    if (t instanceof pr) {
      let o = this.view.nodeDOM(t.from);
      const r = o.dataset.nodeViewWrapper ? o : o.querySelector("[data-node-view-wrapper]");
      r && (o = r), o && (i = {
        getBoundingClientRect: () => o.getBoundingClientRect(),
        getClientRects: () => [o.getBoundingClientRect()]
      });
    }
    if (t instanceof Ae) {
      const { $anchorCell: o, $headCell: r } = t, l = o ? o.pos : r.pos, c = r ? r.pos : o.pos, a = this.view.nodeDOM(l), u = this.view.nodeDOM(c);
      if (!a || !u)
        return;
      const d = a === u ? a.getBoundingClientRect() : Bb(
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
    e && Mr(e, this.element, {
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
    const i = !t?.selection.eq(e.state.selection), o = !t?.doc.eq(e.state.doc);
    this.updateHandler(e, i, o, t);
  }
  getShouldShow(e) {
    var t;
    const { state: n } = this.view, { selection: s } = n, { ranges: i } = s, o = Math.min(...i.map((c) => c.$from.pos)), r = Math.max(...i.map((c) => c.$to.pos));
    return (t = this.shouldShow) == null ? void 0 : t.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: e,
      from: o,
      to: r
    });
  }
  show() {
    var e, t;
    this.isVisible || (this.element.style.visibility = "visible", this.element.style.opacity = "1", (t = (e = this.appendTo) != null ? e : this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0);
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Md = (e) => new cn({
  key: typeof e.pluginKey == "string" ? new qt(e.pluginKey) : e.pluginKey,
  view: (t) => new Fb({ view: t, ...e })
});
An.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Md({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        updateDelay: this.options.updateDelay,
        options: this.options.options,
        appendTo: this.options.appendTo,
        getReferencedVirtualElement: this.options.getReferencedVirtualElement,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
var Hb = /* @__PURE__ */ ee({
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
        options: o,
        pluginKey: r,
        resizeDelay: l,
        appendTo: c,
        shouldShow: a,
        getReferencedVirtualElement: u,
        updateDelay: d
      } = e;
      s.value && (s.value.style.visibility = "hidden", s.value.style.position = "absolute", s.value.remove(), i.registerPlugin(
        Md({
          editor: i,
          element: s.value,
          options: o,
          pluginKey: r,
          resizeDelay: l,
          appendTo: c,
          shouldShow: a,
          getReferencedVirtualElement: u,
          updateDelay: d
        })
      ));
    }), Ns(() => {
      const { pluginKey: i, editor: o } = e;
      o.unregisterPlugin(i);
    }), () => {
      var i;
      return Un(Pf, { to: "body" }, Un("div", { ...n, ref: s }, (i = t.default) == null ? void 0 : i.call(t)));
    };
  }
}), Ub = class {
  constructor({ editor: e, element: t, view: n, options: s, appendTo: i, shouldShow: o }) {
    this.preventHide = !1, this.isVisible = !1, this.shouldShow = ({ view: r, state: l }) => {
      const { selection: c } = l, { $anchor: a, empty: u } = c, d = a.depth === 1, f = a.parent.isTextblock && !a.parent.type.spec.code && !a.parent.textContent && a.parent.childCount === 0 && !this.getTextContent(a.parent);
      return !(!r.hasFocus() || !u || !d || !f || !this.editor.isEditable);
    }, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "right",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1
    }, this.updateHandler = (r, l, c, a) => {
      const { composing: u } = r;
      if (u || !l && !c)
        return;
      if (!this.getShouldShow(a)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: r }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      r?.relatedTarget && ((l = this.element.parentNode) != null && l.contains(r.relatedTarget)) || r?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.editor = e, this.element = t, this.view = n, this.appendTo = i, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...s
    }, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.update(n, n.state), this.getShouldShow() && this.show();
  }
  getTextContent(e) {
    return gf(e, { textSerializers: mf(this.editor.schema) });
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(du(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      uu(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      cu(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(pu(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(fu(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      au(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(hu(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      gu(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  getShouldShow(e) {
    var t;
    const { state: n } = this.view, { selection: s } = n, { ranges: i } = s, o = Math.min(...i.map((c) => c.$from.pos)), r = Math.max(...i.map((c) => c.$to.pos));
    return (t = this.shouldShow) == null ? void 0 : t.call(this, {
      editor: this.editor,
      view: this.view,
      state: n,
      oldState: e,
      from: o,
      to: r
    });
  }
  updatePosition() {
    const { selection: e } = this.editor.state, t = aa(this.view, e.from, e.to);
    Mr({
      getBoundingClientRect: () => t,
      getClientRects: () => [t]
    }, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: s, y: i, strategy: o }) => {
      this.element.style.width = "max-content", this.element.style.position = o, this.element.style.left = `${s}px`, this.element.style.top = `${i}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(e, t) {
    const n = !t?.selection.eq(e.state.selection), s = !t?.doc.eq(e.state.doc);
    this.updateHandler(e, n, s, t);
  }
  show() {
    var e, t;
    this.isVisible || (this.element.style.visibility = "visible", this.element.style.opacity = "1", (t = (e = this.appendTo) != null ? e : this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0);
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Vb = (e) => new cn({
  key: typeof e.pluginKey == "string" ? new qt(e.pluginKey) : e.pluginKey,
  view: (t) => new Ub({ view: t, ...e })
});
An.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      options: {},
      pluginKey: "floatingMenu",
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Vb({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        options: this.options.options,
        appendTo: this.options.appendTo,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
var Vc;
let jb = Symbol("headlessui.useid"), zb = 0;
const Gr = (Vc = Hf) != null ? Vc : function() {
  return yn(jb, () => `${++zb}`)();
};
function gt(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function oo(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, oo), s;
}
var Wb = Object.defineProperty, Kb = (e, t, n) => t in e ? Wb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jc = (e, t, n) => (Kb(e, typeof t != "symbol" ? t + "" : t, n), n);
let qb = class {
  constructor() {
    jc(this, "current", this.detect()), jc(this, "currentId", 0);
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
}, Xr = new qb();
function Qr(e) {
  if (Xr.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = gt(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let ar = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ur = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ur || {}), Jb = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Jb || {}), Yb = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Yb || {});
function Od(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ar)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Zr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Zr || {});
function tl(e, t = 0) {
  var n;
  return e === ((n = Qr(e)) == null ? void 0 : n.body) ? !1 : oo(t, { 0() {
    return e.matches(ar);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(ar)) return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function Dd(e) {
  let t = Qr(e);
  Zt(() => {
    t && !tl(t.activeElement, 0) && Xb(e);
  });
}
var Gb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Gb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Xb(e) {
  e?.focus({ preventScroll: !0 });
}
let Qb = ["textarea", "input"].join(",");
function Zb(e) {
  var t, n;
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Qb)) != null ? n : !1;
}
function Id(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n), o = t(s);
    if (i === null || o === null) return 0;
    let r = i.compareDocumentPosition(o);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ty(e, t) {
  return ey(Od(), t, { relativeTo: e });
}
function ey(e, t, { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) != null ? o : document, l = Array.isArray(e) ? n ? Id(e) : e : Od(e);
  i.length > 0 && l.length > 1 && (l = l.filter((p) => !i.includes(p))), s = s ?? r.activeElement;
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
  } while (h !== r.activeElement);
  return t & 6 && Zb(h) && h.select(), 2;
}
function ny() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sy() {
  return /Android/gi.test(window.navigator.userAgent);
}
function iy() {
  return ny() || sy();
}
function ei(e, t, n) {
  Xr.isServer || Xn((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function oy(e, t, n) {
  Xr.isServer || Xn((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function ry(e, t, n = Lt(() => !0)) {
  function s(o, r) {
    if (!n.value || o.defaultPrevented) return;
    let l = r(o);
    if (l === null || !l.getRootNode().contains(l)) return;
    let c = (function a(u) {
      return typeof u == "function" ? a(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    })(e);
    for (let a of c) {
      if (a === null) continue;
      let u = a instanceof HTMLElement ? a : gt(a);
      if (u != null && u.contains(l) || o.composed && o.composedPath().includes(u)) return;
    }
    return !tl(l, Zr.Loose) && l.tabIndex !== -1 && o.preventDefault(), t(o, l);
  }
  let i = Q(null);
  ei("pointerdown", (o) => {
    var r, l;
    n.value && (i.value = ((l = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), ei("mousedown", (o) => {
    var r, l;
    n.value && (i.value = ((l = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), ei("click", (o) => {
    iy() || i.value && (s(o, () => i.value), i.value = null);
  }, !0), ei("touchend", (o) => s(o, () => o.target instanceof HTMLElement ? o.target : null), !0), oy("blur", (o) => s(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function zc(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function ly(e, t) {
  let n = Q(zc(e.value.type, e.value.as));
  return an(() => {
    n.value = zc(e.value.type, e.value.as);
  }), Xn(() => {
    var s;
    n.value || gt(t) && gt(t) instanceof HTMLButtonElement && !((s = gt(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Wc(e) {
  return [e.screenX, e.screenY];
}
function cy() {
  let e = Q([-1, -1]);
  return { wasMoved(t) {
    let n = Wc(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Wc(t);
  } };
}
function ay({ container: e, accept: t, walk: n, enabled: s }) {
  Xn(() => {
    let i = e.value;
    if (!i || s !== void 0 && !s.value) return;
    let o = Qr(e);
    if (!o) return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), l = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; l.nextNode(); ) n(l.currentNode);
  });
}
var dr = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(dr || {}), uy = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(uy || {});
function ro({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...i }) {
  var o;
  let r = Ld(s, n), l = Object.assign(i, { props: r });
  if (e || t & 2 && r.static) return Do(l);
  if (t & 1) {
    let c = (o = r.unmount) == null || o ? 0 : 1;
    return oo(c, { 0() {
      return null;
    }, 1() {
      return Do({ ...i, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Do(l);
}
function Do({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var o, r;
  let { as: l, ...c } = dy(e, ["unmount", "static"]), a = (o = n.default) == null ? void 0 : o.call(n, s), u = {};
  if (s) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(s)) typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (a = Rd(a ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = a ?? [];
      if (!fy(d) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((m) => m.trim()).filter((m, y, b) => b.indexOf(m) === y).sort((m, y) => m.localeCompare(y)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = Ld((r = d.props) != null ? r : {}, c, u), p = Ue(d, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return Un(l, Object.assign({}, c, u), { default: () => a });
}
function Rd(e) {
  return e.flatMap((t) => t.type === ft ? Rd(t.children) : [t]);
}
function Ld(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let s of e) for (let i in s) i.startsWith("on") && typeof s[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(s[i])) : t[i] = s[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((s) => [s, void 0])));
  for (let s in n) Object.assign(t, { [s](i, ...o) {
    let r = n[s];
    for (let l of r) {
      if (i instanceof Event && i.defaultPrevented) return;
      l(i, ...o);
    }
  } });
  return t;
}
function dy(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t) s in n && delete n[s];
  return n;
}
function fy(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Nd = Symbol("Context");
var Rs = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Rs || {});
function hy() {
  return yn(Nd, null);
}
function py(e) {
  mr(Nd, e);
}
var _t = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_t || {});
function gy(e) {
  throw new Error("Unexpected object: " + e);
}
var Wt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Wt || {});
function my(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let s = t.resolveActiveIndex(), i = s ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return s;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let o = i - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return s;
    }
    case 2: {
      for (let o = i + 1; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return s;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return s;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o) if (t.resolveId(n[o], o, n) === e.id) return o;
      return s;
    }
    case 5:
      return null;
    default:
      gy(e);
  }
}
let Kc = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function qc(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return s;
  let o = !1;
  for (let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) l.remove(), o = !0;
  let r = o ? (n = i.innerText) != null ? n : "" : s;
  return Kc.test(r) && (r = r.replace(Kc, "")), r;
}
function wy(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let r = o.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : qc(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0) return s.join(", ");
  }
  return qc(e).trim();
}
function by(e) {
  let t = Q(""), n = Q("");
  return () => {
    let s = gt(e);
    if (!s) return "";
    let i = s.innerText;
    if (t.value === i) return n.value;
    let o = wy(s).trim().toLowerCase();
    return t.value = i, n.value = o, o;
  };
}
var yy = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(yy || {}), vy = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(vy || {});
function _y(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Pd = Symbol("MenuContext");
function lo(e) {
  let t = yn(Pd, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, lo), n;
  }
  return t;
}
let xy = /* @__PURE__ */ ee({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let s = Q(1), i = Q(null), o = Q(null), r = Q([]), l = Q(""), c = Q(null), a = Q(1);
  function u(f = (h) => h) {
    let h = c.value !== null ? r.value[c.value] : null, p = Id(f(r.value.slice()), (y) => gt(y.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let d = { menuState: s, buttonRef: i, itemsRef: o, items: r, searchQuery: l, activeItemIndex: c, activationTrigger: a, closeMenu: () => {
    s.value = 1, c.value = null;
  }, openMenu: () => s.value = 0, goToItem(f, h, p) {
    let m = u(), y = my(f === Wt.Specific ? { focus: Wt.Specific, id: h } : { focus: f }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    l.value = "", c.value = y, a.value = p ?? 1, r.value = m.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (c.value !== null ? r.value.slice(c.value + h).concat(r.value.slice(0, c.value + h)) : r.value).find((y) => y.dataRef.textValue.startsWith(l.value) && !y.dataRef.disabled), m = p ? r.value.indexOf(p) : -1;
    m === -1 || m === c.value || (c.value = m, a.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = u((m) => [...m, { id: f, dataRef: h }]);
    r.value = p.items, c.value = p.activeItemIndex, a.value = 1;
  }, unregisterItem(f) {
    let h = u((p) => {
      let m = p.findIndex((y) => y.id === f);
      return m !== -1 && p.splice(m, 1), p;
    });
    r.value = h.items, c.value = h.activeItemIndex, a.value = 1;
  } };
  return ry([i, o], (f, h) => {
    var p;
    d.closeMenu(), tl(h, Zr.Loose) || (f.preventDefault(), (p = gt(i)) == null || p.focus());
  }, Lt(() => s.value === 0)), mr(Pd, d), py(Lt(() => oo(s.value, { 0: Rs.Open, 1: Rs.Closed }))), () => {
    let f = { open: s.value === 0, close: d.closeMenu };
    return ro({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} }), ky = /* @__PURE__ */ ee({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-menu-button-${Gr()}`, r = lo("MenuButton");
  s({ el: r.buttonRef, $el: r.buttonRef });
  function l(d) {
    switch (d.key) {
      case _t.Space:
      case _t.Enter:
      case _t.ArrowDown:
        d.preventDefault(), d.stopPropagation(), r.openMenu(), Zt(() => {
          var f;
          (f = gt(r.itemsRef)) == null || f.focus({ preventScroll: !0 }), r.goToItem(Wt.First);
        });
        break;
      case _t.ArrowUp:
        d.preventDefault(), d.stopPropagation(), r.openMenu(), Zt(() => {
          var f;
          (f = gt(r.itemsRef)) == null || f.focus({ preventScroll: !0 }), r.goToItem(Wt.Last);
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
    e.disabled || (r.menuState.value === 0 ? (r.closeMenu(), Zt(() => {
      var f;
      return (f = gt(r.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), r.openMenu(), _y(() => {
      var f;
      return (f = gt(r.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = ly(Lt(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var d;
    let f = { open: r.menuState.value === 0 }, { ...h } = e, p = { ref: r.buttonRef, id: o, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = gt(r.itemsRef)) == null ? void 0 : d.id, "aria-expanded": r.menuState.value === 0, onKeydown: l, onKeyup: c, onClick: a };
    return ro({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} }), Sy = /* @__PURE__ */ ee({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-menu-items-${Gr()}`, r = lo("MenuItems"), l = Q(null);
  s({ el: r.itemsRef, $el: r.itemsRef }), ay({ container: Lt(() => gt(r.itemsRef)), enabled: Lt(() => r.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function c(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case _t.Space:
        if (r.searchQuery.value !== "") return f.preventDefault(), f.stopPropagation(), r.search(f.key);
      case _t.Enter:
        if (f.preventDefault(), f.stopPropagation(), r.activeItemIndex.value !== null) {
          let p = r.items.value[r.activeItemIndex.value];
          (h = gt(p.dataRef.domRef)) == null || h.click();
        }
        r.closeMenu(), Dd(gt(r.buttonRef));
        break;
      case _t.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), r.goToItem(Wt.Next);
      case _t.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), r.goToItem(Wt.Previous);
      case _t.Home:
      case _t.PageUp:
        return f.preventDefault(), f.stopPropagation(), r.goToItem(Wt.First);
      case _t.End:
      case _t.PageDown:
        return f.preventDefault(), f.stopPropagation(), r.goToItem(Wt.Last);
      case _t.Escape:
        f.preventDefault(), f.stopPropagation(), r.closeMenu(), Zt(() => {
          var p;
          return (p = gt(r.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case _t.Tab:
        f.preventDefault(), f.stopPropagation(), r.closeMenu(), Zt(() => ty(gt(r.buttonRef), f.shiftKey ? ur.Previous : ur.Next));
        break;
      default:
        f.key.length === 1 && (r.search(f.key), l.value = setTimeout(() => r.clearSearch(), 350));
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
  let u = hy(), d = Lt(() => u !== null ? (u.value & Rs.Open) === Rs.Open : r.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: r.menuState.value === 0 }, { ...m } = e, y = { "aria-activedescendant": r.activeItemIndex.value === null || (f = r.items.value[r.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = gt(r.buttonRef)) == null ? void 0 : h.id, id: o, onKeydown: c, onKeyup: a, role: "menu", tabIndex: 0, ref: r.itemsRef };
    return ro({ ourProps: y, theirProps: m, slot: p, attrs: t, slots: n, features: dr.RenderStrategy | dr.Static, visible: d.value, name: "MenuItems" });
  };
} }), Cy = /* @__PURE__ */ ee({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: s }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-menu-item-${Gr()}`, r = lo("MenuItem"), l = Q(null);
  s({ el: l, $el: l });
  let c = Lt(() => r.activeItemIndex.value !== null ? r.items.value[r.activeItemIndex.value].id === o : !1), a = by(l), u = Lt(() => ({ disabled: e.disabled, get textValue() {
    return a();
  }, domRef: l }));
  an(() => r.registerItem(o, u)), Ps(() => r.unregisterItem(o)), Xn(() => {
    r.menuState.value === 0 && c.value && r.activationTrigger.value !== 0 && Zt(() => {
      var b, T;
      return (T = (b = gt(l)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : T.call(b, { block: "nearest" });
    });
  });
  function d(b) {
    if (e.disabled) return b.preventDefault();
    r.closeMenu(), Dd(gt(r.buttonRef));
  }
  function f() {
    if (e.disabled) return r.goToItem(Wt.Nothing);
    r.goToItem(Wt.Specific, o);
  }
  let h = cy();
  function p(b) {
    h.update(b);
  }
  function m(b) {
    h.wasMoved(b) && (e.disabled || c.value || r.goToItem(Wt.Specific, o, 0));
  }
  function y(b) {
    h.wasMoved(b) && (e.disabled || c.value && r.goToItem(Wt.Nothing));
  }
  return () => {
    let { disabled: b, ...T } = e, N = { active: c.value, disabled: b, close: r.closeMenu };
    return ro({ ourProps: { id: o, ref: l, role: "menuitem", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: y, onMouseleave: y }, theirProps: { ...n, ...T }, slot: N, attrs: n, slots: t, name: "MenuItem" });
  };
} });
const Ey = ["innerHTML"], Ni = /* @__PURE__ */ ee({
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
    }, s = Lt(() => n[t.icon] || "");
    return (i, o) => s.value ? (X(), at("span", {
      key: 0,
      class: "icon-wrapper",
      style: hi({
        width: t.size,
        height: t.size
      }),
      innerHTML: s.value
    }, null, 12, Ey)) : (X(), oe(Zf("typo3-backend-icon"), {
      key: 1,
      identifier: t.icon,
      size: "small",
      style: hi({
        width: t.size,
        height: t.size
      })
    }, null, 8, ["identifier", "style"]));
  }
}), Ay = { class: "tiptap-sr-only" }, Ty = ["onClick"], Jc = /* @__PURE__ */ ee({
  __name: "Dropdown",
  props: {
    label: {},
    iconIdentifier: {},
    editorDomNode: {},
    items: {}
  },
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = Q(null), o = Q(null), r = Q("not-calculated"), l = Lt(() => n.items.some((d) => !d.isDisabled)), c = Lt(() => n.items.some((d) => d.isActive));
    function a() {
      if (!o.value)
        return "bottom-left";
      const d = n.editorDomNode.getBoundingClientRect();
      return o.value.$el.getBoundingClientRect().left - d.left > 200 ? "bottom-right" : "bottom-left";
    }
    an(() => {
      r.value = a();
    });
    function u(d) {
      s(d === "open" ? "open" : "close");
    }
    return (d, f) => (X(), oe(ct(xy), {
      as: "div",
      class: "tiptap-dropdown"
    }, {
      default: Qe(() => [
        ut(ct(ky), {
          ref_key: "dropdownButtonRef",
          ref: o,
          class: en(["tiptap-dropdown__button", {
            "tiptap-dropdown__button--active": c.value
          }]),
          disabled: !l.value
        }, {
          default: Qe(() => [
            se("span", Ay, gn(e.label), 1),
            ut(Ni, {
              icon: e.iconIdentifier,
              size: "16px"
            }, null, 8, ["icon"]),
            f[2] || (f[2] = se("svg", {
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
              se("path", { d: "m6 9 6 6 6-6" })
            ], -1))
          ]),
          _: 1
        }, 8, ["class", "disabled"]),
        ut(Xh, {
          "enter-active-class": "transition-enter-active",
          "enter-from-class": "transition-enter-from",
          "enter-to-class": "transition-enter-to",
          "leave-active-class": "transition-leave-active",
          "leave-from-class": "transition-leave-from",
          "leave-to-class": "transition-leave-to",
          onAfterLeave: f[0] || (f[0] = () => u("close")),
          onAfterEnter: f[1] || (f[1] = () => u("open"))
        }, {
          default: Qe(() => [
            ut(ct(Sy), {
              ref_key: "dropdownContentRef",
              ref: i,
              class: en(["tiptap-dropdown__content", {
                "tiptap-dropdown__content--bottom-left": r.value === "bottom-left",
                "tiptap-dropdown__content--bottom-right": r.value === "bottom-right"
              }])
            }, {
              default: Qe(() => [
                (X(!0), at(ft, null, cs(e.items, (h, p) => (X(), oe(ct(Cy), {
                  key: `item-${p}`,
                  as: "template"
                }, {
                  default: Qe(() => [
                    se("button", {
                      class: en(["tiptap-dropdown__content-button", {
                        "tiptap-dropdown__content-button--active": h.isActive
                      }]),
                      onClick: h.action
                    }, [
                      h.icon ? (X(), oe(Ni, {
                        key: 0,
                        icon: h.icon,
                        size: "16px"
                      }, null, 8, ["icon"])) : Yt("", !0),
                      se("span", null, gn(h.label), 1)
                    ], 10, Ty)
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
}), My = /* @__PURE__ */ ee({
  __name: "Stylesheets",
  props: {
    stylesheets: {}
  },
  setup(e) {
    const t = e, n = Q(null), s = Q([]), i = Q([]);
    si(() => t.stylesheets, async (r) => {
      await Zt(), await Promise.all(r.map(async (l) => {
        s.value.includes(l) || await o(l);
      }));
    }, { immediate: !0 });
    async function o(r) {
      if (!n.value)
        throw new Error("Component ref not available");
      const l = n.value.getRootNode();
      if (!l || l.nodeType !== Node.DOCUMENT_FRAGMENT_NODE)
        throw new Error("Shadow root not found or invalid");
      const c = await fetch(r);
      if (!c.ok)
        throw new Error(`HTTP error! status: ${c.status}`);
      const a = await c.text(), u = document.createElement("style");
      u.textContent = `.tiptap { ${a} }`, u.dataset.source = r, l.appendChild(u), i.value.push(u), s.value.push(r);
    }
    return Ps(() => {
      i.value.forEach((r) => {
        r.parentNode && r.parentNode.removeChild(r);
      });
    }), (r, l) => (X(), at("div", {
      ref_key: "componentRef",
      ref: n
    }, null, 512));
  }
}), Oy = ll({
  id: os(),
  contentCss: al(os()).optional(),
  plugins: al(
    ll({
      path: os(),
      config: nf(
        os(),
        sf()
      ).optional()
    })
  ).optional(),
  enableContentDragAndDrop: cl().default(!1),
  linkBrowserUrl: os(),
  enableDebugMode: cl().default(!1)
}), Dy = { key: 0 }, Iy = {
  key: 1,
  class: "tiptap-container"
}, Ry = {
  key: 0,
  class: "tiptap-toolbar"
}, Ly = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Ny = { key: 0 }, Py = ["disabled", "onClick"], $y = { class: "tiptap-sr-only" }, By = { key: 1 }, Fy = { class: "tiptap-bubble-menu" }, Hy = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Uy = { key: 0 }, Vy = ["disabled", "onClick"], jy = { class: "tiptap-sr-only" }, zy = { key: 4 }, Wy = /* @__PURE__ */ ee({
  __name: "TipTapEditor.ce",
  props: {
    options: { type: String }
  },
  setup(e) {
    const t = e, n = y(), s = b(n), i = Q(), o = Q(), r = Q(), l = Q(), c = Q(), a = Q(!1), u = Q(0), d = Q(!1), f = Q(0), h = Q(!1), p = Lt(() => !o.value || a.value || d.value || h.value || f.value <= 150 ? !1 : o.value.bubbleMenu.some((D) => D.commands.length > 0)), m = Lt(() => s.filter(
      (D) => D.element.toLowerCase() === c.value?.tagName.toLowerCase()
    ));
    function y() {
      try {
        const D = JSON.parse(t.options || "{}"), $ = Oy.safeParse(D);
        if (!$.success)
          throw new Error(`Invalid options: ${JSON.stringify($.error.issues)}`);
        return $.data;
      } catch (D) {
        throw new Error(`Failed to parse options: ${D.message}`);
      }
    }
    function b(D) {
      const $ = D.plugins?.find((M) => M.path.endsWith("styles.js") || M.path.endsWith("styles.ts"));
      if (!$)
        return [];
      const C = ef.safeParse($.config);
      if (!C.success)
        throw new Error(`Invalid styles plugin config: ${JSON.stringify(C.error.issues)}`);
      return C.data.styles;
    }
    function T() {
      if (!i.value)
        throw new Error("Editor is not initialized yet.");
      if (!o.value)
        throw new Error("Configuration is not initialized yet.");
      const D = [];
      o.value.toolbar.forEach(($) => {
        $.commands.forEach((C) => {
          C.hooks && C.hooks.onEditorMounted && !D.includes(C.id) && (C.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), D.push(C.id));
        });
      }), o.value.bubbleMenu.forEach(($) => {
        $.commands.forEach((C) => {
          C.hooks && C.hooks.onEditorMounted && !D.includes(C.id) && (C.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), D.push(C.id));
        });
      });
    }
    async function N() {
      (await Promise.all(
        n.plugins?.map(async ($) => {
          const C = await import(
            /* @vite-ignore */
            $.path
          );
          if (!C.default || typeof C.default != "function")
            throw new Error(`Plugin ${$.path} does not have a default export or it is not a function.`);
          return () => C.default($.config);
        }) ?? []
      )).forEach(($) => $());
    }
    function S(D) {
      return a.value && D.id !== "source" ? !0 : D?.status?.isDisabled?.({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) ?? !1;
    }
    function L(D) {
      return D.status && D.status.isVisible ? D.status.isVisible({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) : !0;
    }
    return an(async () => {
      await N(), o.value = of(), await Zt();
      const D = r.value?.assignedElements()[0];
      if (!D || !(D instanceof HTMLTextAreaElement))
        throw new Error('No textarea found in slot "content".');
      l.value = D, i.value = new Ab({
        content: l.value.value,
        extensions: [
          Eb.configure({
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
          ub,
          ...o.value?.extensions ?? []
        ],
        onUpdate: () => {
          !i.value || !l.value || (a.value = Df(i.value), l.value.value = a.value ? i.value.getText() : i.value.getHTML());
        }
      }), i.value.on("parentNodeChanged", ($) => {
        if ($.tagName === "doc")
          c.value = void 0, h.value = !1;
        else if (c.value = $, f.value = i.value?.state.selection.$from.pos ?? 0, $.node) {
          const C = i.value?.state.doc.firstChild;
          h.value = C === $.node;
        }
      }), T();
    }), Ps(() => i.value?.destroy()), (D, $) => (X(), at(ft, null, [
      ct(n).enableDebugMode ? (X(), at("pre", Dy, "    selectionCharacterCount: " + gn(f.value) + `
    isNodeFirstLine: ` + gn(h.value) + `
  `, 1)) : Yt("", !0),
      i.value ? (X(), at("div", Iy, [
        o.value.toolbar.some((C) => C.commands.length > 0) ? (X(), at("nav", Ry, [
          (X(!0), at(ft, null, cs(o.value.toolbar, (C, M) => (X(), at(ft, {
            key: `tiptap-command-group-${M}`
          }, [
            C.commands.length > 0 ? (X(), at("ol", Ly, [
              C.dropdown ? (X(), at("li", Ny, [
                (X(), oe(Jc, {
                  key: a.value,
                  label: C.dropdown.label,
                  "editor-dom-node": i.value.view.dom,
                  "icon-identifier": C.dropdown.iconIdentifier,
                  items: C.commands.filter(L).map((_) => ({
                    label: _.label,
                    isActive: _?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ct(n).linkBrowserUrl }) ?? !1,
                    isDisabled: S(_),
                    icon: _.iconIdentifier,
                    action: () => _.onExecute({ editor: i.value, linkBrowserUrl: ct(n).linkBrowserUrl })
                  }))
                }, null, 8, ["label", "editor-dom-node", "icon-identifier", "items"]))
              ])) : (X(!0), at(ft, { key: 1 }, cs(C.commands, (_) => (X(), at("li", {
                key: `tiptap-group-${C.id}-command-${_.id}`
              }, [
                L(_) ? (X(), at("button", {
                  key: a.value,
                  class: en(["tiptap-toolbar__group-command", {
                    "is-active": _?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ct(n).linkBrowserUrl }) ?? !1
                  }]),
                  disabled: S(_),
                  onClick: (F) => _.onExecute({ editor: i.value, linkBrowserUrl: ct(n).linkBrowserUrl })
                }, [
                  se("span", $y, gn(_.label), 1),
                  ut(Ni, {
                    icon: _.iconIdentifier,
                    size: "16px"
                  }, null, 8, ["icon"])
                ], 10, Py)) : Yt("", !0)
              ]))), 128))
            ])) : Yt("", !0)
          ], 64))), 128))
        ])) : Yt("", !0),
        o.value && p.value ? (X(), at("nav", By, [
          ut(ct(Hb), {
            editor: i.value,
            options: {
              onHide: () => u.value += 1
            }
          }, {
            default: Qe(() => [
              se("div", Fy, [
                (X(!0), at(ft, null, cs(o.value.bubbleMenu, (C, M) => (X(), at(ft, {
                  key: `tiptap-command-group-${M}`
                }, [
                  C.commands.some((_) => !S(_)) ? (X(), at("ol", Hy, [
                    C.dropdown ? (X(), at("li", Uy, [
                      (X(), oe(Jc, {
                        key: `${a.value}-${u.value}`,
                        label: C.dropdown.label,
                        "icon-identifier": C.dropdown.iconIdentifier,
                        "editor-dom-node": i.value.view.dom,
                        items: C.commands.filter(L).map((_) => ({
                          label: _.label,
                          isActive: _?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ct(n).linkBrowserUrl
                          }) ?? !1,
                          isDisabled: S(_),
                          icon: _.iconIdentifier,
                          action: () => _.onExecute({
                            editor: i.value,
                            linkBrowserUrl: ct(n).linkBrowserUrl
                          })
                        }))
                      }, null, 8, ["label", "icon-identifier", "editor-dom-node", "items"]))
                    ])) : (X(!0), at(ft, { key: 1 }, cs(C.commands, (_) => (X(), at("li", {
                      key: `tiptap-group-${C.id}-command-${_.id}`
                    }, [
                      L(_) ? (X(), at("button", {
                        key: a.value,
                        class: en(["tiptap-toolbar__group-command", {
                          "is-active": _?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ct(n).linkBrowserUrl
                          }) ?? !1
                        }]),
                        disabled: S(_),
                        onClick: (F) => _.onExecute({
                          editor: i.value,
                          linkBrowserUrl: ct(n).linkBrowserUrl
                        })
                      }, [
                        se("span", jy, gn(_.label), 1),
                        ut(Ni, {
                          icon: _.iconIdentifier,
                          size: "16px"
                        }, null, 8, ["icon"])
                      ], 10, Vy)) : Yt("", !0)
                    ]))), 128))
                  ])) : Yt("", !0)
                ], 64))), 128))
              ])
            ]),
            _: 1
          }, 8, ["editor", "options"])
        ])) : Yt("", !0),
        ct(n).enableContentDragAndDrop ? (X(), oe(ct(H0), {
          key: 2,
          editor: i.value
        }, {
          default: Qe(() => [...$[0] || ($[0] = [
            se("div", { class: "custom-drag-handle" }, null, -1)
          ])]),
          _: 1
        }, 8, ["editor"])) : Yt("", !0),
        ut(ct(Tb), {
          editor: i.value,
          class: en({
            "pl-9": ct(n).enableContentDragAndDrop
          })
        }, null, 8, ["editor", "class"]),
        ct(n) && ct(n).contentCss ? (X(), oe(My, {
          key: 3,
          stylesheets: ct(n).contentCss
        }, null, 8, ["stylesheets"])) : Yt("", !0),
        ct(n).enableDebugMode ? (X(), at("pre", zy, gn(m.value), 1)) : Yt("", !0)
      ])) : Yt("", !0),
      eh(D.$slots, "default", {
        ref_key: "slotRef",
        ref: r
      })
    ], 64));
  }
}), Ky = '@charset "UTF-8";.tiptap-container{--tiptap-color-primary: light-dark(hsl(220deg 90% 56%), hsl(220deg 90% 66%));--tiptap-color-neutral-white: hsl(0deg 0% 100%);--tiptap-color-neutral-10: hsl(0deg 0% 10%);--tiptap-color-neutral-20: hsl(0deg 0% 20%);--tiptap-color-neutral-30: hsl(0deg 0% 30%);--tiptap-color-neutral-80: hsl(0deg 0% 80%);--tiptap-color-neutral-90: hsl(0deg 0% 90%);--tiptap-color-surface: light-dark(var(--tiptap-color-neutral-white), var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-surface-border: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-text-disabled: light-dark(var(--tiptap-color-neutral-30), var(--tiptap-color-neutral-80));--tiptap-border-radius: .7rem;--tiptap-border-radius-inner-gap: .25rem;--tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap: .25rem;--tiptap-box-shadow: 0 .1rem .3rem rgb(0 0 0 / .1);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){padding:0;color:inherit;background-color:transparent;border:none}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(black,white)}.tiptap{padding:3rem;min-block-size:20rem;outline:none}.tiptap>:first-child{margin-block-start:0}.tiptap-toolbar{display:flex;flex-wrap:wrap;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-surface-border)}.tiptap-toolbar__group{display:flex;flex-wrap:wrap;gap:var(--tiptap-toolbar-gap);margin:0;padding:0;list-style:none}.tiptap-toolbar__group:not(:last-child){margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap);border-inline-end:1px solid var(--tiptap-color-surface-border)}.tiptap-toolbar__group-command{padding:.5rem;border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1/1;block-size:100%;transition:ease .15s;transition-property:background-color,color,transform}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl,var(--tiptap-color-surface-highlight) 50%,transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-disabled);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{inline-size:100%;block-size:100%}.tiptap-bubble-menu{display:flex;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap)}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem 1rem 1rem 0}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation: 0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation: 180deg}.tiptap-dropdown__button{display:inline-flex;align-items:center;justify-content:space-between;padding:.5rem;background-color:transparent;gap:.25rem;border:none;cursor:pointer;transition:color .2s ease-in-out,transform .1s ease-in-out}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-disabled);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size: .9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:center;transition:transform .2s ease-in-out}.tiptap-dropdown__content{display:grid;position:absolute;padding-block:.25rem;background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-surface-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{inset-inline-start:0;transform-origin:top left}.tiptap-dropdown__content--bottom-right{inset-inline-end:0;transform-origin:top right}.tiptap-dropdown__content-button{display:flex;align-items:center;padding:.5rem 1rem;gap:.5rem;cursor:pointer}.tiptap-dropdown__content-button>*{flex-shrink:0;text-wrap:nowrap}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection *::selection{background:transparent}.ProseMirror-noderangeselection *{caret-color:transparent}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{position:absolute;pointer-events:none;z-index:-1;content:"";inset:-.25rem;background-color:#70cff850;border-radius:.2rem}.custom-drag-handle:after{display:flex;align-items:center;justify-content:center;width:1rem;height:1.25rem;margin-inline-end:.5rem;padding:.25rem .1rem;content:"⠿";font-weight:700;cursor:grab;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;transition:background-color .2s ease-in-out}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:2.25rem}.transition-dropdown{--scale: 1;--translate-y: 0;--opacity: 1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale: .95;--opacity: 1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale: 1;--opacity: 1}.transition-dropdown-leave-to{--scale: .95;--opacity: 0}', qy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Jy = /* @__PURE__ */ qy(Wy, [["styles", [Ky]]]), Yy = /* @__PURE__ */ bp(Jy);
customElements.define("editor-tiptap", Yy);
export {
  wv as CommandManager,
  ff as Editor,
  An as Extension,
  bv as Fragment,
  yv as InputRule,
  ra as Mark,
  vv as MarkView,
  Gn as Node,
  _v as NodePos,
  xv as NodeView,
  kv as PasteRule,
  Sv as Tracker,
  Cv as callOrReturn,
  uf as canInsertNode,
  Ev as combineTransactionSteps,
  Av as createChainableState,
  Tv as createDocument,
  Mv as createElement,
  Ov as createNodeFromContent,
  Dv as createStyleTag,
  Iv as defaultBlockAt,
  pv as defineTipTapPlugin,
  Rv as deleteProps,
  Lv as elementFromString,
  Nv as escapeForRegEx,
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
  o1 as getNodeType,
  r1 as getRenderedAttributes,
  l1 as getSchema,
  c1 as getSchemaByResolvedExtensions,
  a1 as getSchemaTypeByName,
  u1 as getSchemaTypeNameByName,
  d1 as getSplittedAttributes,
  gf as getText,
  f1 as getTextBetween,
  h1 as getTextContentFromNodes,
  mf as getTextSerializersFromSchema,
  p1 as h,
  g1 as injectExtensionAttributesToParseRule,
  m1 as inputRulesPlugin,
  w1 as isActive,
  b1 as isAndroid,
  y1 as isAtEndOfNode,
  v1 as isAtStartOfNode,
  _1 as isEmptyObject,
  x1 as isExtensionRulesEnabled,
  k1 as isFunction,
  S1 as isList,
  C1 as isMacOS,
  E1 as isMarkActive,
  A1 as isNodeActive,
  T1 as isNodeEmpty,
  df as isNodeSelection,
  M1 as isNumber,
  O1 as isPlainObject,
  D1 as isRegExp,
  I1 as isString,
  pf as isTextSelection,
  R1 as isiOS,
  ca as markInputRule,
  la as markPasteRule,
  Yn as mergeAttributes,
  L1 as mergeDeep,
  N1 as minMax,
  af as nodeInputRule,
  P1 as nodePasteRule,
  $1 as objectIncludes,
  gv as parseTipTapPluginYamlConfiguration,
  B1 as pasteRulesPlugin,
  aa as posToDOMRect,
  F1 as removeDuplicates,
  H1 as resolveExtensions,
  U1 as resolveFocusPosition,
  V1 as rewriteUnknownContent,
  j1 as selectionToInsertionEnd,
  z1 as sortExtensions,
  W1 as splitExtensions,
  ht as textInputRule,
  K1 as textPasteRule,
  dl as textblockTypeInputRule,
  q1 as updateMarkViewAttributes,
  J1 as wrappingInputRule
};
