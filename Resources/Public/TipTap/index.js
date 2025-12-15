import { e as wt, i as Y, a as Tt, n as Be, b as Lt, c as ja, d as q, f as di, g as Pi, h as fi, j as Li, N as Fe, k as za, p as Wa, m as Ka, l as qa, E as ot, t as $i, o as ar, q as st, r as Ja, s as On, u as Cd, R as Ed, v as as, w as Ad, x as Nt, y as Td, z as cr, A as Zt, B as Md, C as Dd, D as Ya, G as uo, H as Od, I as Rd, J as vn, K as _n, L as Id, M as Nd, O as Pd, P as Ld, Q as $d, S as Bd, T as sl, U as Ga, V as fo, W as Xa, X as ut, Y as Or, Z as Fd, _ as Qa, $ as Z, a0 as Hd, a1 as Ud, a2 as nn, a3 as Vd } from "./styles-VSStk_7S.js";
import { o as il, b as rl, s as ss, a as ol, r as jd, u as zd, g as Wd } from "./configuration-CsNrhtrS.js";
import { d as pv, p as gv } from "./configuration-CsNrhtrS.js";
import { P as En, a as se, S as $e, F as wn, T as Ce, A as Kd, N as ho, E as Rs, g as qd, M as Jd, b as ie, D as ll, c as Yd, d as Gd, e as Za, t as ht, f as tc, m as ec, h as nc, i as qn, j as Jn, k as al, n as Xd, l as Qd, o as Zd, p as tf, q as ef, r as nf, s as sf } from "./index-DYaQFPxE.js";
import { C as wv, u as bv, v as yv, I as vv, w as _v, x as kv, y as xv, z as Sv, R as Cv, B as Ev, G as Av, H as Tv, J as Mv, K as Dv, L as Ov, O as Rv, Q as Iv, U as Nv, V as Pv, W as Lv, X as $v, Y as Bv, Z as Fv, _ as Hv, $ as Uv, a0 as Vv, a1 as jv, a2 as zv, a3 as Wv, a4 as Kv, a5 as qv, a6 as Jv, a7 as Yv, a8 as Gv, a9 as Xv, aa as Qv, ab as Zv, ac as t1, ad as e1, ae as n1, af as s1, ag as i1, ah as r1, ai as o1, aj as l1, ak as a1, al as c1, am as u1, an as d1, ao as f1, ap as h1, aq as p1, ar as g1, as as m1, at as w1, au as b1, av as y1, aw as v1, ax as _1, ay as k1, az as x1, V as S1, aA as C1, aB as E1, aC as A1, aD as T1, aE as M1, aF as D1, aG as O1, aH as R1, aI as I1, aJ as N1, aK as P1, aL as L1, aM as $1, aN as B1, aO as F1, aP as H1, aQ as U1, aR as V1, aS as j1, aT as z1, aU as W1, aV as K1, aW as q1, aX as J1, aY as Y1, aZ as G1, a_ as X1, a$ as Q1, b0 as Z1, b1 as t_, b2 as e_, b3 as n_, b4 as s_, b5 as i_, b6 as r_, b7 as o_, b8 as l_, b9 as a_, ba as c_ } from "./index-DYaQFPxE.js";
import { B as rf } from "./index-6Qz6vlV0.js";
import { B as of } from "./index-Dsm9u_yq.js";
import { H as lf } from "./index-DNfb0ZDK.js";
import { I as af } from "./index-D6RSKw75.js";
import { L as cf } from "./index-BNlBMPHI.js";
import { B as uf, L as df, a as ff, O as hf } from "./index-D3Ouy_7f.js";
import { U as pf } from "./index-BBLae1Hh.js";
import { D as gf, G as mf, U as wf, T as bf } from "./index-BDCkLhi2.js";
import { getEditorSourceViewActiveStatus as yf } from "./plugins/source.js";
function Is(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Bi(i, t, n);
  }
}
function ue(e, t, n, s) {
  if (Y(e)) {
    const i = Is(e, t, n, s);
    return i && qa(i) && i.catch((r) => {
      Bi(r, t, n);
    }), i;
  }
  if (q(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ue(e[r], t, n, s));
    return i;
  }
}
function Bi(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ot;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      vn(), Is(r, null, 10, [
        e,
        a,
        c
      ]), _n();
      return;
    }
  }
  vf(e, n, i, s, o);
}
function vf(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Dt = [];
let ke = -1;
const Rn = [];
let Xe = null, Dn = 0;
const sc = /* @__PURE__ */ Promise.resolve();
let hi = null;
function Ht(e) {
  const t = hi || sc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _f(e) {
  let t = ke + 1, n = Dt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Dt[s], r = ps(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function po(e) {
  if (!(e.flags & 1)) {
    const t = ps(e), n = Dt[Dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ps(n) ? Dt.push(e) : Dt.splice(_f(t), 0, e), e.flags |= 1, ic();
  }
}
function ic() {
  hi || (hi = sc.then(oc));
}
function kf(e) {
  q(e) ? Rn.push(...e) : Xe && e.id === -1 ? Xe.splice(Dn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1), ic();
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
function rc(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)].sort(
      (n, s) => ps(n) - ps(s)
    );
    if (Rn.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, Dn = 0; Dn < Xe.length; Dn++) {
      const n = Xe[Dn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xe = null, Dn = 0;
  }
}
const ps = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function oc(e) {
  try {
    for (ke = 0; ke < Dt.length; ke++) {
      const t = Dt[ke];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Is(
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
    ke = -1, Dt.length = 0, rc(), hi = null, (Dt.length || Rn.length) && oc();
  }
}
let It = null, lc = null;
function pi(e) {
  const t = It;
  return It = e, lc = e && e.type.__scopeId || null, t;
}
function Ze(e, t = It, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && wi(-1);
    const r = pi(t);
    let o;
    try {
      o = e(...i);
    } finally {
      pi(r), s._d && wi(1);
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
    let a = l.dir[s];
    a && (vn(), ue(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), _n());
  }
}
const xf = /* @__PURE__ */ Symbol("_vte"), ac = (e) => e.__isTeleport, Pe = /* @__PURE__ */ Symbol("_leaveCb"), zs = /* @__PURE__ */ Symbol("_enterCb");
function Sf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), Ns(() => {
    e.isUnmounting = !0;
  }), e;
}
const Gt = [Function, Array], cc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Gt,
  onEnter: Gt,
  onAfterEnter: Gt,
  onEnterCancelled: Gt,
  // leave
  onBeforeLeave: Gt,
  onLeave: Gt,
  onAfterLeave: Gt,
  onLeaveCancelled: Gt,
  // appear
  onBeforeAppear: Gt,
  onAppear: Gt,
  onAfterAppear: Gt,
  onAppearCancelled: Gt
}, uc = (e) => {
  const t = e.subTree;
  return t.component ? uc(t.component) : t;
}, Cf = {
  name: "BaseTransition",
  props: cc,
  setup(e, { slots: t }) {
    const n = ji(), s = Sf();
    return () => {
      const i = t.default && hc(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = dc(i), o = $i(e), { mode: l } = o;
      if (s.isLeaving)
        return ur(r);
      const a = ul(r);
      if (!a)
        return ur(r);
      let c = Rr(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      a.type !== xt && gs(a, c);
      let u = n.subTree && ul(n.subTree);
      if (u && u.type !== xt && !gn(u, a) && uc(n).type !== xt) {
        let d = Rr(
          u,
          o,
          s,
          n
        );
        if (gs(u, d), l === "out-in" && a.type !== xt)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, ur(r);
        l === "in-out" && a.type !== xt ? d.delayLeave = (f, h, p) => {
          const m = fc(
            s,
            u
          );
          m[String(u.key)] = u, f[Pe] = () => {
            h(), f[Pe] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            p(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function dc(e) {
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
const Ef = Cf;
function fc(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Rr(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: m,
    onBeforeAppear: y,
    onAppear: b,
    onAfterAppear: M,
    onAppearCancelled: R
  } = t, A = String(e.key), C = fc(n, e), P = (S, N) => {
    S && ue(
      S,
      s,
      9,
      N
    );
  }, T = (S, N) => {
    const U = N[1];
    P(S, N), q(S) ? S.every((O) => O.length <= 1) && U() : S.length <= 1 && U();
  }, B = {
    mode: o,
    persisted: l,
    beforeEnter(S) {
      let N = a;
      if (!n.isMounted)
        if (r)
          N = y || a;
        else
          return;
      S[Pe] && S[Pe](
        !0
        /* cancelled */
      );
      const U = C[A];
      U && gn(e, U) && U.el[Pe] && U.el[Pe](), P(N, [S]);
    },
    enter(S) {
      let N = c, U = u, O = d;
      if (!n.isMounted)
        if (r)
          N = b || c, U = M || u, O = R || d;
        else
          return;
      let z = !1;
      const G = S[zs] = (pt) => {
        z || (z = !0, pt ? P(O, [S]) : P(U, [S]), B.delayedLeave && B.delayedLeave(), S[zs] = void 0);
      };
      N ? T(N, [S, G]) : G();
    },
    leave(S, N) {
      const U = String(e.key);
      if (S[zs] && S[zs](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return N();
      P(f, [S]);
      let O = !1;
      const z = S[Pe] = (G) => {
        O || (O = !0, N(), G ? P(m, [S]) : P(p, [S]), S[Pe] = void 0, C[U] === e && delete C[U]);
      };
      C[U] = e, h ? T(h, [S, z]) : z();
    },
    clone(S) {
      const N = Rr(
        S,
        t,
        n,
        s,
        i
      );
      return i && i(N), N;
    }
  };
  return B;
}
function ur(e) {
  if (Fi(e))
    return e = Ve(e), e.children = null, e;
}
function ul(e) {
  if (!Fi(e))
    return ac(e.type) && e.children ? dc(e.children) : e;
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
function gs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, gs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hc(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ft ? (o.patchFlag & 128 && i++, s = s.concat(
      hc(o.children, t, l)
    )) : (t || o.type !== xt) && s.push(l != null ? Ve(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Yt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Af() {
  const e = ji();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function pc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const gi = /* @__PURE__ */ new WeakMap();
function cs(e, t, n, s, i = !1) {
  if (q(e)) {
    e.forEach(
      (p, m) => cs(
        p,
        t && (q(t) ? t[m] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (In(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && cs(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? vo(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, c = t && t.r, u = l.refs === ot ? l.refs = {} : l.refs, d = l.setupState, f = $i(d), h = d === ot ? za : (p) => st(f, p);
  if (c != null && c !== a) {
    if (dl(t), Tt(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (fi(c)) {
      c.value = null;
      const p = t;
      p.k && (u[p.k] = null);
    }
  }
  if (Y(a))
    Is(a, l, 12, [o, u]);
  else {
    const p = Tt(a), m = fi(a);
    if (p || m) {
      const y = () => {
        if (e.f) {
          const b = p ? h(a) ? d[a] : u[a] : a.value;
          if (i)
            q(b) && Ja(b, r);
          else if (q(b))
            b.includes(r) || b.push(r);
          else if (p)
            u[a] = [r], h(a) && (d[a] = u[a]);
          else {
            const M = [r];
            a.value = M, e.k && (u[e.k] = M);
          }
        } else p ? (u[a] = o, h(a) && (d[a] = o)) : m && (a.value = o, e.k && (u[e.k] = o));
      };
      if (o) {
        const b = () => {
          y(), gi.delete(e);
        };
        b.id = -1, gi.set(e, b), zt(b, n);
      } else
        dl(e), y();
    }
  }
}
function dl(e) {
  const t = gi.get(e);
  t && (t.flags |= 8, gi.delete(e));
}
Li().requestIdleCallback;
Li().cancelIdleCallback;
const In = (e) => !!e.type.__asyncLoader, Fi = (e) => e.type.__isKeepAlive;
function Tf(e, t) {
  gc(e, "a", t);
}
function Mf(e, t) {
  gc(e, "da", t);
}
function gc(e, t, n = St) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Hi(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Fi(i.parent.vnode) && Df(s, t, n, i), i = i.parent;
  }
}
function Df(e, t, n, s) {
  const i = Hi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ps(() => {
    Ja(s[t], i);
  }, n);
}
function Hi(e, t, n = St, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      vn();
      const l = Ls(n), a = ue(t, n, e, o);
      return l(), _n(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ze = (e) => (t, n = St) => {
  (!bs || e === "sp") && Hi(e, (...s) => t(...s), n);
}, Of = ze("bm"), cn = ze("m"), Rf = ze(
  "bu"
), If = ze("u"), Ns = ze(
  "bum"
), Ps = ze("um"), Nf = ze(
  "sp"
), Pf = ze("rtg"), Lf = ze("rtc");
function $f(e, t = St) {
  Hi("ec", e, t);
}
const Bf = "components", Ff = /* @__PURE__ */ Symbol.for("v-ndc");
function Hf(e) {
  return Tt(e) && Uf(Bf, e, !1) || e;
}
function Uf(e, t, n = !0, s = !1) {
  const i = It || St;
  if (i) {
    const r = i.type;
    {
      const l = Mh(
        r,
        !1
      );
      if (l && (l === t || l === Nt(t) || l === fo(Nt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      fl(i[e] || r[e], t) || // global registration
      fl(i.appContext[e], t)
    );
    return !o && s ? r : o;
  }
}
function fl(e, t) {
  return e && (e[t] || e[Nt(t)] || e[fo(Nt(t))]);
}
function os(e, t, n, s) {
  let i;
  const r = n, o = q(e);
  if (o || Tt(e)) {
    const l = o && Nd(e);
    let a = !1, c = !1;
    l && (a = !Pd(e), c = Ld(e), e = $d(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        a ? c ? Bd(sl(e[u])) : sl(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (Lt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
function Vf(e, t, n = {}, s, i) {
  if (It.ce || It.parent && In(It.parent) && It.parent.ce) {
    const c = Object.keys(n).length > 0;
    return J(), te(
      ft,
      null,
      [dt("slot", n, s)],
      c ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), J();
  const o = r && mc(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, a = te(
    ft,
    {
      key: (l && !Ga(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function mc(e) {
  return e.some((t) => ws(t) ? !(t.type === xt || t.type === ft && !mc(t.children)) : !0) ? e : null;
}
const Ir = (e) => e ? Pc(e) ? vo(e) : Ir(e.parent) : null, us = (
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
    $parent: (e) => Ir(e.parent),
    $root: (e) => Ir(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ht.bind(e.proxy)),
    $watch: (e) => Zf.bind(e)
  })
), dr = (e, t) => e !== ot && !e.__isScriptSetup && st(e, t), jf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
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
        if (dr(s, t))
          return o[t] = 1, s[t];
        if (i !== ot && st(i, t))
          return o[t] = 2, i[t];
        if (st(r, t))
          return o[t] = 3, r[t];
        if (n !== ot && st(n, t))
          return o[t] = 4, n[t];
        Nr && (o[t] = 0);
      }
    }
    const c = us[t];
    let u, d;
    if (c)
      return t === "$attrs" && Ya(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ot && st(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, st(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return dr(i, t) ? (i[t] = n, !0) : s !== ot && st(s, t) ? (s[t] = n, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== ot && l[0] !== "$" && st(e, l) || dr(t, l) || st(r, l) || st(s, l) || st(us, l) || st(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hl(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Nr = !0;
function zf(e) {
  const t = bc(e), n = e.proxy, s = e.ctx;
  Nr = !1, t.beforeCreate && pl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
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
    destroyed: R,
    unmounted: A,
    render: C,
    renderTracked: P,
    renderTriggered: T,
    errorCaptured: B,
    serverPrefetch: S,
    // public API
    expose: N,
    inheritAttrs: U,
    // assets
    components: O,
    directives: z,
    filters: G
  } = t;
  if (c && Wf(c, s, null), o)
    for (const K in o) {
      const j = o[K];
      Y(j) && (s[K] = j.bind(n));
    }
  if (i) {
    const K = i.call(n, n);
    Lt(K) && (e.data = Rd(K));
  }
  if (Nr = !0, r)
    for (const K in r) {
      const j = r[K], kt = Y(j) ? j.bind(n, n) : Y(j.get) ? j.get.bind(n, n) : Fe, Mn = !Y(j) && Y(j.set) ? j.set.bind(n) : Fe, un = Et({
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
      wc(l[K], s, n, K);
  if (a) {
    const K = Y(a) ? a.call(n) : a;
    Reflect.ownKeys(K).forEach((j) => {
      go(j, K[j]);
    });
  }
  u && pl(u, e, "c");
  function tt(K, j) {
    q(j) ? j.forEach((kt) => K(kt.bind(n))) : j && K(j.bind(n));
  }
  if (tt(Of, d), tt(cn, f), tt(Rf, h), tt(If, p), tt(Tf, m), tt(Mf, y), tt($f, B), tt(Lf, P), tt(Pf, T), tt(Ns, M), tt(Ps, A), tt(Nf, S), q(N))
    if (N.length) {
      const K = e.exposed || (e.exposed = {});
      N.forEach((j) => {
        Object.defineProperty(K, j, {
          get: () => n[j],
          set: (kt) => n[j] = kt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Fe && (e.render = C), U != null && (e.inheritAttrs = U), O && (e.components = O), z && (e.directives = z), S && pc(e);
}
function Wf(e, t, n = Fe) {
  q(e) && (e = Pr(e));
  for (const s in e) {
    const i = e[s];
    let r;
    Lt(i) ? "default" in i ? r = bn(
      i.from || s,
      i.default,
      !0
    ) : r = bn(i.from || s) : r = bn(i), fi(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function pl(e, t, n) {
  ue(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wc(e, t, n, s) {
  let i = s.includes(".") ? vc(n, s) : () => n[s];
  if (Tt(e)) {
    const r = t[e];
    Y(r) && ei(i, r);
  } else if (Y(e))
    ei(i, e.bind(n));
  else if (Lt(e))
    if (q(e))
      e.forEach((r) => wc(r, t, n, s));
    else {
      const r = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(r) && ei(i, r, e);
    }
}
function bc(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (c) => mi(a, c, o, !0)
  ), mi(a, t, o)), Lt(t) && r.set(t, a), a;
}
function mi(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && mi(e, r, n, !0), i && i.forEach(
    (o) => mi(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Kf[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Kf = {
  data: gl,
  props: ml,
  emits: ml,
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
  watch: Jf,
  // provide / inject
  provide: gl,
  inject: qf
};
function gl(e, t) {
  return t ? e ? function() {
    return wt(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qf(e, t) {
  return ls(Pr(e), Pr(t));
}
function Pr(e) {
  if (q(e)) {
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
function ml(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    hl(e),
    hl(t ?? {})
  ) : t;
}
function Jf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Mt(e[s], t[s]);
  return n;
}
function yc() {
  return {
    app: null,
    config: {
      isNativeTag: za,
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
let Yf = 0;
function Gf(e, t) {
  return function(s, i = null) {
    Y(s) || (s = wt({}, s)), i != null && !Lt(i) && (i = null);
    const r = yc(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: Yf++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Oh,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(c, ...d)) : Y(u) && (o.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (r.components[u] = d, c) : r.components[u];
      },
      directive(u, d) {
        return d ? (r.directives[u] = d, c) : r.directives[u];
      },
      mount(u, d, f) {
        if (!a) {
          const h = c._ceVNode || dt(s, i);
          return h.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, u, f), a = !0, c._container = u, u.__vue_app__ = c, vo(h.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (ue(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return r.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = Nn;
        Nn = c;
        try {
          return u();
        } finally {
          Nn = d;
        }
      }
    };
    return c;
  };
}
let Nn = null;
function go(e, t) {
  if (St) {
    let n = St.provides;
    const s = St.parent && St.parent.provides;
    s === n && (n = St.provides = Object.create(s)), n[e] = t;
  }
}
function bn(e, t, n = !1) {
  const s = ji();
  if (s || Nn) {
    let i = Nn ? Nn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const Xf = /* @__PURE__ */ Symbol.for("v-scx"), Qf = () => bn(Xf);
function Yn(e, t) {
  return mo(e, null, t);
}
function ei(e, t, n) {
  return mo(e, t, n);
}
function mo(e, t, n = ot) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = wt({}, n), a = t && s || !t && r !== "post";
  let c;
  if (bs) {
    if (r === "sync") {
      const h = Qf();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Fe, h.resume = Fe, h.pause = Fe, h;
    }
  }
  const u = St;
  l.call = (h, p, m) => ue(h, u, p, m);
  let d = !1;
  r === "post" ? l.scheduler = (h) => {
    zt(h, u && u.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (h, p) => {
    p ? h() : po(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = Ad(e, t, l);
  return bs && (c ? c.push(f) : a && f()), f;
}
function Zf(e, t, n) {
  const s = this.proxy, i = Tt(e) ? e.includes(".") ? vc(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Y(t) ? r = t : (r = t.handler, n = t);
  const o = Ls(this), l = mo(i, r.bind(s), n);
  return o(), l;
}
function vc(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
function eh(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ot;
  let i = n;
  const r = t.startsWith("update:"), o = r && th(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => Tt(u) ? u.trim() : u)), o.number && (i = n.map(Td)));
  let l, a = s[l = cr(t)] || // also try camelCase event handler (#2249)
  s[l = cr(Nt(t))];
  !a && r && (a = s[l = cr(Zt(t))]), a && ue(
    a,
    e,
    6,
    i
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ue(
      c,
      e,
      6,
      i
    );
  }
}
const nh = /* @__PURE__ */ new WeakMap();
function _c(e, t, n = !1) {
  const s = n ? nh : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Y(e)) {
    const a = (c) => {
      const u = _c(c, t, !0);
      u && (l = !0, wt(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Lt(e) && s.set(e, null), null) : (q(r) ? r.forEach((a) => o[a] = null) : wt(o, r), Lt(e) && s.set(e, o), o);
}
function Ui(e, t) {
  return !e || !Pi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Zt(t)) || st(e, t));
}
function wl(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: p,
    inheritAttrs: m
  } = e, y = pi(e);
  let b, M;
  try {
    if (n.shapeFlag & 4) {
      const A = i || s, C = A;
      b = xe(
        c.call(
          C,
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
          { attrs: l, slots: o, emit: a }
        ) : A(
          d,
          null
        )
      ), M = t.props ? l : sh(l);
    }
  } catch (A) {
    ds.length = 0, Bi(A, e, 1), b = dt(xt);
  }
  let R = b;
  if (M && m !== !1) {
    const A = Object.keys(M), { shapeFlag: C } = R;
    A.length && C & 7 && (r && A.some(uo) && (M = ih(
      M,
      r
    )), R = Ve(R, M, !1, !0));
  }
  return n.dirs && (R = Ve(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && gs(R, n.transition), b = R, pi(y), b;
}
const sh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ih = (e, t) => {
  const n = {};
  for (const s in e)
    (!uo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function rh(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? bl(s, o, c) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (o[f] !== s[f] && !Ui(c, f))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? bl(s, o, c) : !0 : !!o;
  return !1;
}
function bl(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Ui(n, r))
      return !0;
  }
  return !1;
}
function oh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const kc = {}, xc = () => Object.create(kc), Sc = (e) => Object.getPrototypeOf(e) === kc;
function lh(e, t, n, s = !1) {
  const i = {}, r = xc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cc(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : Md(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function ah(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = $i(i), [a] = e.propsOptions;
  let c = !1;
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
        if (Ui(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (a)
          if (st(r, f))
            h !== r[f] && (r[f] = h, c = !0);
          else {
            const p = Nt(f);
            i[p] = Lr(
              a,
              l,
              p,
              h,
              e,
              !1
            );
          }
        else
          h !== r[f] && (r[f] = h, c = !0);
      }
    }
  } else {
    Cc(e, t, i, r) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Zt(d)) === d || !st(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Lr(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !st(t, d)) && (delete r[d], c = !0);
  }
  c && Od(e.attrs, "set", "");
}
function Cc(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (as(a))
        continue;
      const c = t[a];
      let u;
      i && st(i, u = Nt(a)) ? !r || !r.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : Ui(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = $i(n), c = l || ot;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Lr(
        i,
        a,
        d,
        c[d],
        e,
        !st(c, d)
      );
    }
  }
  return o;
}
function Lr(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = st(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Y(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const u = Ls(i);
          s = c[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
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
const ch = /* @__PURE__ */ new WeakMap();
function Ec(e, t, n = !1) {
  const s = n ? ch : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!Y(e)) {
    const u = (d) => {
      a = !0;
      const [f, h] = Ec(d, t, !0);
      wt(o, f), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return Lt(e) && s.set(e, On), On;
  if (q(r))
    for (let u = 0; u < r.length; u++) {
      const d = Nt(r[u]);
      yl(d) && (o[d] = ot);
    }
  else if (r)
    for (const u in r) {
      const d = Nt(u);
      if (yl(d)) {
        const f = r[u], h = o[d] = q(f) || Y(f) ? { type: f } : wt({}, f), p = h.type;
        let m = !1, y = !0;
        if (q(p))
          for (let b = 0; b < p.length; ++b) {
            const M = p[b], R = Y(M) && M.name;
            if (R === "Boolean") {
              m = !0;
              break;
            } else R === "String" && (y = !1);
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
  const c = [o, l];
  return Lt(e) && s.set(e, c), c;
}
function yl(e) {
  return e[0] !== "$" && !as(e);
}
const wo = (e) => e === "_" || e === "_ctx" || e === "$stable", bo = (e) => q(e) ? e.map(xe) : [xe(e)], uh = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ze((...i) => bo(t(...i)), n);
  return s._c = !1, s;
}, Ac = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (wo(i)) continue;
    const r = e[i];
    if (Y(r))
      t[i] = uh(i, r, s);
    else if (r != null) {
      const o = bo(r);
      t[i] = () => o;
    }
  }
}, Tc = (e, t) => {
  const n = bo(t);
  e.slots.default = () => n;
}, Mc = (e, t, n) => {
  for (const s in t)
    (n || !wo(s)) && (e[s] = t[s]);
}, dh = (e, t, n) => {
  const s = e.slots = xc();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Mc(s, t, n), n && Dd(s, "_", i, !0)) : Ac(t, s);
  } else t && Tc(e, t);
}, fh = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ot;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Mc(i, t, n) : (r = !t.$stable, Ac(t, i)), o = t;
  } else t && (Tc(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !wo(l) && o[l] == null && delete i[l];
}, zt = wh;
function hh(e) {
  return ph(e);
}
function ph(e, t) {
  const n = Li();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = Fe,
    insertStaticContent: p
  } = e, m = (g, w, v, E = null, _ = null, k = null, L = void 0, I = null, D = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !gn(g, w) && (E = js(g), me(g, _, k, !0), g = null), w.patchFlag === -2 && (D = !1, w.dynamicChildren = null);
    const { type: x, ref: H, shapeFlag: $ } = w;
    switch (x) {
      case Vi:
        y(g, w, v, E);
        break;
      case xt:
        b(g, w, v, E);
        break;
      case hr:
        g == null && M(w, v, E, L);
        break;
      case ft:
        O(
          g,
          w,
          v,
          E,
          _,
          k,
          L,
          I,
          D
        );
        break;
      default:
        $ & 1 ? C(
          g,
          w,
          v,
          E,
          _,
          k,
          L,
          I,
          D
        ) : $ & 6 ? z(
          g,
          w,
          v,
          E,
          _,
          k,
          L,
          I,
          D
        ) : ($ & 64 || $ & 128) && x.process(
          g,
          w,
          v,
          E,
          _,
          k,
          L,
          I,
          D,
          es
        );
    }
    H != null && _ ? cs(H, g && g.ref, k, w || g, !w) : H == null && g && g.ref != null && cs(g.ref, null, k, g, !0);
  }, y = (g, w, v, E) => {
    if (g == null)
      s(
        w.el = l(w.children),
        v,
        E
      );
    else {
      const _ = w.el = g.el;
      w.children !== g.children && c(_, w.children);
    }
  }, b = (g, w, v, E) => {
    g == null ? s(
      w.el = a(w.children || ""),
      v,
      E
    ) : w.el = g.el;
  }, M = (g, w, v, E) => {
    [g.el, g.anchor] = p(
      g.children,
      w,
      v,
      E,
      g.el,
      g.anchor
    );
  }, R = ({ el: g, anchor: w }, v, E) => {
    let _;
    for (; g && g !== w; )
      _ = f(g), s(g, v, E), g = _;
    s(w, v, E);
  }, A = ({ el: g, anchor: w }) => {
    let v;
    for (; g && g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, C = (g, w, v, E, _, k, L, I, D) => {
    if (w.type === "svg" ? L = "svg" : w.type === "math" && (L = "mathml"), g == null)
      P(
        w,
        v,
        E,
        _,
        k,
        L,
        I,
        D
      );
    else {
      const x = g.el && g.el._isVueCE ? g.el : null;
      try {
        x && x._beginPatch(), S(
          g,
          w,
          _,
          k,
          L,
          I,
          D
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, P = (g, w, v, E, _, k, L, I) => {
    let D, x;
    const { props: H, shapeFlag: $, transition: F, dirs: V } = g;
    if (D = g.el = o(
      g.type,
      k,
      H && H.is,
      H
    ), $ & 8 ? u(D, g.children) : $ & 16 && B(
      g.children,
      D,
      null,
      E,
      _,
      fr(g, k),
      L,
      I
    ), V && dn(g, null, E, "created"), T(D, g, g.scopeId, L, E), H) {
      for (const rt in H)
        rt !== "value" && !as(rt) && r(D, rt, null, H[rt], k, E);
      "value" in H && r(D, "value", null, H.value, k), (x = H.onVnodeBeforeMount) && ve(x, E, g);
    }
    V && dn(g, null, E, "beforeMount");
    const X = gh(_, F);
    X && F.beforeEnter(D), s(D, w, v), ((x = H && H.onVnodeMounted) || X || V) && zt(() => {
      x && ve(x, E, g), X && F.enter(D), V && dn(g, null, E, "mounted");
    }, _);
  }, T = (g, w, v, E, _) => {
    if (v && h(g, v), E)
      for (let k = 0; k < E.length; k++)
        h(g, E[k]);
    if (_) {
      let k = _.subTree;
      if (w === k || Rc(k.type) && (k.ssContent === w || k.ssFallback === w)) {
        const L = _.vnode;
        T(
          g,
          L,
          L.scopeId,
          L.slotScopeIds,
          _.parent
        );
      }
    }
  }, B = (g, w, v, E, _, k, L, I, D = 0) => {
    for (let x = D; x < g.length; x++) {
      const H = g[x] = I ? Qe(g[x]) : xe(g[x]);
      m(
        null,
        H,
        w,
        v,
        E,
        _,
        k,
        L,
        I
      );
    }
  }, S = (g, w, v, E, _, k, L) => {
    const I = w.el = g.el;
    let { patchFlag: D, dynamicChildren: x, dirs: H } = w;
    D |= g.patchFlag & 16;
    const $ = g.props || ot, F = w.props || ot;
    let V;
    if (v && fn(v, !1), (V = F.onVnodeBeforeUpdate) && ve(V, v, w, g), H && dn(w, g, v, "beforeUpdate"), v && fn(v, !0), ($.innerHTML && F.innerHTML == null || $.textContent && F.textContent == null) && u(I, ""), x ? N(
      g.dynamicChildren,
      x,
      I,
      v,
      E,
      fr(w, _),
      k
    ) : L || j(
      g,
      w,
      I,
      null,
      v,
      E,
      fr(w, _),
      k,
      !1
    ), D > 0) {
      if (D & 16)
        U(I, $, F, v, _);
      else if (D & 2 && $.class !== F.class && r(I, "class", null, F.class, _), D & 4 && r(I, "style", $.style, F.style, _), D & 8) {
        const X = w.dynamicProps;
        for (let rt = 0; rt < X.length; rt++) {
          const et = X[rt], $t = $[et], Bt = F[et];
          (Bt !== $t || et === "value") && r(I, et, $t, Bt, _, v);
        }
      }
      D & 1 && g.children !== w.children && u(I, w.children);
    } else !L && x == null && U(I, $, F, v, _);
    ((V = F.onVnodeUpdated) || H) && zt(() => {
      V && ve(V, v, w, g), H && dn(w, g, v, "updated");
    }, E);
  }, N = (g, w, v, E, _, k, L) => {
    for (let I = 0; I < w.length; I++) {
      const D = g[I], x = w[I], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gn(D, x) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? d(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      m(
        D,
        x,
        H,
        null,
        E,
        _,
        k,
        L,
        !0
      );
    }
  }, U = (g, w, v, E, _) => {
    if (w !== v) {
      if (w !== ot)
        for (const k in w)
          !as(k) && !(k in v) && r(
            g,
            k,
            w[k],
            null,
            _,
            E
          );
      for (const k in v) {
        if (as(k)) continue;
        const L = v[k], I = w[k];
        L !== I && k !== "value" && r(g, k, I, L, _, E);
      }
      "value" in v && r(g, "value", w.value, v.value, _);
    }
  }, O = (g, w, v, E, _, k, L, I, D) => {
    const x = w.el = g ? g.el : l(""), H = w.anchor = g ? g.anchor : l("");
    let { patchFlag: $, dynamicChildren: F, slotScopeIds: V } = w;
    V && (I = I ? I.concat(V) : V), g == null ? (s(x, v, E), s(H, v, E), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      v,
      H,
      _,
      k,
      L,
      I,
      D
    )) : $ > 0 && $ & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (N(
      g.dynamicChildren,
      F,
      v,
      _,
      k,
      L,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || _ && w === _.subTree) && Dc(
      g,
      w,
      !0
      /* shallow */
    )) : j(
      g,
      w,
      v,
      H,
      _,
      k,
      L,
      I,
      D
    );
  }, z = (g, w, v, E, _, k, L, I, D) => {
    w.slotScopeIds = I, g == null ? w.shapeFlag & 512 ? _.ctx.activate(
      w,
      v,
      E,
      L,
      D
    ) : G(
      w,
      v,
      E,
      _,
      k,
      L,
      D
    ) : pt(g, w, D);
  }, G = (g, w, v, E, _, k, L) => {
    const I = g.component = Sh(
      g,
      E,
      _
    );
    if (Fi(g) && (I.ctx.renderer = es), Ch(I, !1, L), I.asyncDep) {
      if (_ && _.registerDep(I, tt, L), !g.el) {
        const D = I.subTree = dt(xt);
        b(null, D, w, v), g.placeholder = D.el;
      }
    } else
      tt(
        I,
        g,
        w,
        v,
        _,
        k,
        L
      );
  }, pt = (g, w, v) => {
    const E = w.component = g.component;
    if (rh(g, w, v))
      if (E.asyncDep && !E.asyncResolved) {
        K(E, w, v);
        return;
      } else
        E.next = w, E.update();
    else
      w.el = g.el, E.vnode = w;
  }, tt = (g, w, v, E, _, k, L) => {
    const I = () => {
      if (g.isMounted) {
        let { next: $, bu: F, u: V, parent: X, vnode: rt } = g;
        {
          const be = Oc(g);
          if (be) {
            $ && ($.el = rt.el, K(g, $, L)), be.asyncDep.then(() => {
              g.isUnmounted || I();
            });
            return;
          }
        }
        let et = $, $t;
        fn(g, !1), $ ? ($.el = rt.el, K(g, $, L)) : $ = rt, F && ar(F), ($t = $.props && $.props.onVnodeBeforeUpdate) && ve($t, X, $, rt), fn(g, !0);
        const Bt = wl(g), we = g.subTree;
        g.subTree = Bt, m(
          we,
          Bt,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          js(we),
          g,
          _,
          k
        ), $.el = Bt.el, et === null && oh(g, Bt.el), V && zt(V, _), ($t = $.props && $.props.onVnodeUpdated) && zt(
          () => ve($t, X, $, rt),
          _
        );
      } else {
        let $;
        const { el: F, props: V } = w, { bm: X, m: rt, parent: et, root: $t, type: Bt } = g, we = In(w);
        fn(g, !1), X && ar(X), !we && ($ = V && V.onVnodeBeforeMount) && ve($, et, w), fn(g, !0);
        {
          $t.ce && // @ts-expect-error _def is private
          $t.ce._def.shadowRoot !== !1 && $t.ce._injectChildStyle(Bt);
          const be = g.subTree = wl(g);
          m(
            null,
            be,
            v,
            E,
            g,
            _,
            k
          ), w.el = be.el;
        }
        if (rt && zt(rt, _), !we && ($ = V && V.onVnodeMounted)) {
          const be = w;
          zt(
            () => ve($, et, be),
            _
          );
        }
        (w.shapeFlag & 256 || et && In(et.vnode) && et.vnode.shapeFlag & 256) && g.a && zt(g.a, _), g.isMounted = !0, w = v = E = null;
      }
    };
    g.scope.on();
    const D = g.effect = new Ed(I);
    g.scope.off();
    const x = g.update = D.run.bind(D), H = g.job = D.runIfDirty.bind(D);
    H.i = g, H.id = g.uid, D.scheduler = () => po(H), fn(g, !0), x();
  }, K = (g, w, v) => {
    w.component = g;
    const E = g.vnode.props;
    g.vnode = w, g.next = null, ah(g, w.props, E, v), fh(g, w.children, v), vn(), cl(g), _n();
  }, j = (g, w, v, E, _, k, L, I, D = !1) => {
    const x = g && g.children, H = g ? g.shapeFlag : 0, $ = w.children, { patchFlag: F, shapeFlag: V } = w;
    if (F > 0) {
      if (F & 128) {
        Mn(
          x,
          $,
          v,
          E,
          _,
          k,
          L,
          I,
          D
        );
        return;
      } else if (F & 256) {
        kt(
          x,
          $,
          v,
          E,
          _,
          k,
          L,
          I,
          D
        );
        return;
      }
    }
    V & 8 ? (H & 16 && ts(x, _, k), $ !== x && u(v, $)) : H & 16 ? V & 16 ? Mn(
      x,
      $,
      v,
      E,
      _,
      k,
      L,
      I,
      D
    ) : ts(x, _, k, !0) : (H & 8 && u(v, ""), V & 16 && B(
      $,
      v,
      E,
      _,
      k,
      L,
      I,
      D
    ));
  }, kt = (g, w, v, E, _, k, L, I, D) => {
    g = g || On, w = w || On;
    const x = g.length, H = w.length, $ = Math.min(x, H);
    let F;
    for (F = 0; F < $; F++) {
      const V = w[F] = D ? Qe(w[F]) : xe(w[F]);
      m(
        g[F],
        V,
        v,
        null,
        _,
        k,
        L,
        I,
        D
      );
    }
    x > H ? ts(
      g,
      _,
      k,
      !0,
      !1,
      $
    ) : B(
      w,
      v,
      E,
      _,
      k,
      L,
      I,
      D,
      $
    );
  }, Mn = (g, w, v, E, _, k, L, I, D) => {
    let x = 0;
    const H = w.length;
    let $ = g.length - 1, F = H - 1;
    for (; x <= $ && x <= F; ) {
      const V = g[x], X = w[x] = D ? Qe(w[x]) : xe(w[x]);
      if (gn(V, X))
        m(
          V,
          X,
          v,
          null,
          _,
          k,
          L,
          I,
          D
        );
      else
        break;
      x++;
    }
    for (; x <= $ && x <= F; ) {
      const V = g[$], X = w[F] = D ? Qe(w[F]) : xe(w[F]);
      if (gn(V, X))
        m(
          V,
          X,
          v,
          null,
          _,
          k,
          L,
          I,
          D
        );
      else
        break;
      $--, F--;
    }
    if (x > $) {
      if (x <= F) {
        const V = F + 1, X = V < H ? w[V].el : E;
        for (; x <= F; )
          m(
            null,
            w[x] = D ? Qe(w[x]) : xe(w[x]),
            v,
            X,
            _,
            k,
            L,
            I,
            D
          ), x++;
      }
    } else if (x > F)
      for (; x <= $; )
        me(g[x], _, k, !0), x++;
    else {
      const V = x, X = x, rt = /* @__PURE__ */ new Map();
      for (x = X; x <= F; x++) {
        const jt = w[x] = D ? Qe(w[x]) : xe(w[x]);
        jt.key != null && rt.set(jt.key, x);
      }
      let et, $t = 0;
      const Bt = F - X + 1;
      let we = !1, be = 0;
      const ns = new Array(Bt);
      for (x = 0; x < Bt; x++) ns[x] = 0;
      for (x = V; x <= $; x++) {
        const jt = g[x];
        if ($t >= Bt) {
          me(jt, _, k, !0);
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
        ye === void 0 ? me(jt, _, k, !0) : (ns[ye - X] = x + 1, ye >= be ? be = ye : we = !0, m(
          jt,
          w[ye],
          v,
          null,
          _,
          k,
          L,
          I,
          D
        ), $t++);
      }
      const tl = we ? mh(ns) : On;
      for (et = tl.length - 1, x = Bt - 1; x >= 0; x--) {
        const jt = X + x, ye = w[jt], el = w[jt + 1], nl = jt + 1 < H ? (
          // #13559, fallback to el placeholder for unresolved async component
          el.el || el.placeholder
        ) : E;
        ns[x] === 0 ? m(
          null,
          ye,
          v,
          nl,
          _,
          k,
          L,
          I,
          D
        ) : we && (et < 0 || x !== tl[et] ? un(ye, v, nl, 2) : et--);
      }
    }
  }, un = (g, w, v, E, _ = null) => {
    const { el: k, type: L, transition: I, children: D, shapeFlag: x } = g;
    if (x & 6) {
      un(g.component.subTree, w, v, E);
      return;
    }
    if (x & 128) {
      g.suspense.move(w, v, E);
      return;
    }
    if (x & 64) {
      L.move(g, w, v, es);
      return;
    }
    if (L === ft) {
      s(k, w, v);
      for (let $ = 0; $ < D.length; $++)
        un(D[$], w, v, E);
      s(g.anchor, w, v);
      return;
    }
    if (L === hr) {
      R(g, w, v);
      return;
    }
    if (E !== 2 && x & 1 && I)
      if (E === 0)
        I.beforeEnter(k), s(k, w, v), zt(() => I.enter(k), _);
      else {
        const { leave: $, delayLeave: F, afterLeave: V } = I, X = () => {
          g.ctx.isUnmounted ? i(k) : s(k, w, v);
        }, rt = () => {
          k._isLeaving && k[Pe](
            !0
            /* cancelled */
          ), $(k, () => {
            X(), V && V();
          });
        };
        F ? F(k, X, rt) : rt();
      }
    else
      s(k, w, v);
  }, me = (g, w, v, E = !1, _ = !1) => {
    const {
      type: k,
      props: L,
      ref: I,
      children: D,
      dynamicChildren: x,
      shapeFlag: H,
      patchFlag: $,
      dirs: F,
      cacheIndex: V
    } = g;
    if ($ === -2 && (_ = !1), I != null && (vn(), cs(I, null, v, g, !0), _n()), V != null && (w.renderCache[V] = void 0), H & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const X = H & 1 && F, rt = !In(g);
    let et;
    if (rt && (et = L && L.onVnodeBeforeUnmount) && ve(et, w, g), H & 6)
      Sd(g.component, v, E);
    else {
      if (H & 128) {
        g.suspense.unmount(v, E);
        return;
      }
      X && dn(g, null, w, "beforeUnmount"), H & 64 ? g.type.remove(
        g,
        w,
        v,
        es,
        E
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== ft || $ > 0 && $ & 64) ? ts(
        x,
        w,
        v,
        !1,
        !0
      ) : (k === ft && $ & 384 || !_ && H & 16) && ts(D, w, v), E && Qo(g);
    }
    (rt && (et = L && L.onVnodeUnmounted) || X) && zt(() => {
      et && ve(et, w, g), X && dn(g, null, w, "unmounted");
    }, v);
  }, Qo = (g) => {
    const { type: w, el: v, anchor: E, transition: _ } = g;
    if (w === ft) {
      xd(v, E);
      return;
    }
    if (w === hr) {
      A(g);
      return;
    }
    const k = () => {
      i(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (g.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: L, delayLeave: I } = _, D = () => L(v, k);
      I ? I(g.el, k, D) : D();
    } else
      k();
  }, xd = (g, w) => {
    let v;
    for (; g !== w; )
      v = f(g), i(g), g = v;
    i(w);
  }, Sd = (g, w, v) => {
    const { bum: E, scope: _, job: k, subTree: L, um: I, m: D, a: x } = g;
    vl(D), vl(x), E && ar(E), _.stop(), k && (k.flags |= 8, me(L, g, w, v)), I && zt(I, w), zt(() => {
      g.isUnmounted = !0;
    }, w);
  }, ts = (g, w, v, E = !1, _ = !1, k = 0) => {
    for (let L = k; L < g.length; L++)
      me(g[L], w, v, E, _);
  }, js = (g) => {
    if (g.shapeFlag & 6)
      return js(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = f(g.anchor || g.el), v = w && w[xf];
    return v ? f(v) : w;
  };
  let lr = !1;
  const Zo = (g, w, v) => {
    g == null ? w._vnode && me(w._vnode, null, null, !0) : m(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      v
    ), w._vnode = g, lr || (lr = !0, cl(), rc(), lr = !1);
  }, es = {
    p: m,
    um: me,
    m: un,
    r: Qo,
    mt: G,
    mc: B,
    pc: j,
    pbc: N,
    n: js,
    o: e
  };
  return {
    render: Zo,
    hydrate: void 0,
    createApp: Gf(Zo)
  };
}
function fr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dc(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (q(s) && q(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Qe(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Dc(o, l)), l.type === Vi && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === xt && !l.el && (l.el = o.el);
    }
}
function mh(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < c ? r = l + 1 : o = l;
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Oc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Oc(t);
}
function vl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Rc = (e) => e.__isSuspense;
function wh(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : kf(e);
}
const ft = /* @__PURE__ */ Symbol.for("v-fgt"), Vi = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), hr = /* @__PURE__ */ Symbol.for("v-stc"), ds = [];
let Kt = null;
function J(e = !1) {
  ds.push(Kt = e ? null : []);
}
function bh() {
  ds.pop(), Kt = ds[ds.length - 1] || null;
}
let ms = 1;
function wi(e, t = !1) {
  ms += e, e < 0 && Kt && t && (Kt.hasOnce = !0);
}
function Ic(e) {
  return e.dynamicChildren = ms > 0 ? Kt || On : null, bh(), ms > 0 && Kt && Kt.push(e), e;
}
function at(e, t, n, s, i, r) {
  return Ic(
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
  return Ic(
    dt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nc = ({ key: e }) => e ?? null, ni = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Tt(e) || fi(e) || Y(e) ? { i: It, r: e, k: t, f: !!n } : e : null);
function Rt(e, t = null, n = null, s = 0, i = null, r = e === ft ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nc(t),
    ref: t && ni(t),
    scopeId: lc,
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
  return l ? (yo(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= Tt(n) ? 8 : 16), ms > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Kt.push(a), a;
}
const dt = yh;
function yh(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Ff) && (e = xt), ws(e)) {
    const l = Ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yo(l, n), ms > 0 && !r && Kt && (l.shapeFlag & 6 ? Kt[Kt.indexOf(e)] = l : Kt.push(l)), l.patchFlag = -2, l;
  }
  if (Dh(e) && (e = e.__vccOpts), t) {
    t = vh(t);
    let { class: l, style: a } = t;
    l && !Tt(l) && (t.class = Be(l)), Lt(a) && (ja(a) && !q(a) && (a = wt({}, a)), t.style = di(a));
  }
  const o = Tt(e) ? 1 : Rc(e) ? 128 : ac(e) ? 64 : Lt(e) ? 4 : Y(e) ? 2 : 0;
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
function vh(e) {
  return e ? ja(e) || Sc(e) ? wt({}, e) : e : null;
}
function Ve(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? _h(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Nc(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? q(r) ? r.concat(ni(t)) : [r, ni(t)] : ni(t)
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
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ve(e.ssContent),
    ssFallback: e.ssFallback && Ve(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && gs(
    u,
    a.clone(u)
  ), u;
}
function $r(e = " ", t = 0) {
  return dt(Vi, null, e, t);
}
function Xt(e = "", t = !1) {
  return t ? (J(), te(xt, null, e)) : dt(xt, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? dt(xt) : q(e) ? dt(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ws(e) ? Qe(e) : dt(Vi, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ve(e);
}
function yo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), yo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Sc(t) ? t._ctx = It : i === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: It }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$r(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _h(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Be([t.class, s.class]));
      else if (i === "style")
        t.style = di([t.style, s.style]);
      else if (Pi(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(q(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
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
const kh = yc();
let xh = 0;
function Sh(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || kh, r = {
    uid: xh++,
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
    scope: new Cd(
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
    propsOptions: Ec(s, i),
    emitsOptions: _c(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ot,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ot,
    data: ot,
    props: ot,
    attrs: ot,
    slots: ot,
    refs: ot,
    setupState: ot,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = eh.bind(null, r), e.ce && e.ce(r), r;
}
let St = null;
const ji = () => St || It;
let bi, Br;
{
  const e = Li(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  bi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => St = n
  ), Br = t(
    "__VUE_SSR_SETTERS__",
    (n) => bs = n
  );
}
const Ls = (e) => {
  const t = St;
  return bi(e), e.scope.on(), () => {
    e.scope.off(), bi(t);
  };
}, _l = () => {
  St && St.scope.off(), bi(null);
};
function Pc(e) {
  return e.vnode.shapeFlag & 4;
}
let bs = !1;
function Ch(e, t = !1, n = !1) {
  t && Br(t);
  const { props: s, children: i } = e.vnode, r = Pc(e);
  lh(e, s, r, t), dh(e, i, n || t);
  const o = r ? Eh(e, t) : void 0;
  return t && Br(!1), o;
}
function Eh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jf);
  const { setup: s } = n;
  if (s) {
    vn();
    const i = e.setupContext = s.length > 1 ? Th(e) : null, r = Ls(e), o = Is(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = qa(o);
    if (_n(), r(), (l || e.sp) && !In(e) && pc(e), l) {
      if (o.then(_l, _l), t)
        return o.then((a) => {
          kl(e, a);
        }).catch((a) => {
          Bi(a, e, 0);
        });
      e.asyncDep = o;
    } else
      kl(e, o);
  } else
    Lc(e);
}
function kl(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Lt(t) && (e.setupState = Wa(t)), Lc(e);
}
function Lc(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Fe);
  {
    const i = Ls(e);
    vn();
    try {
      zf(e);
    } finally {
      _n(), i();
    }
  }
}
const Ah = {
  get(e, t) {
    return Ya(e, "get", ""), e[t];
  }
};
function Th(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ah),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wa(Ka(e.exposed)), {
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
function Mh(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dh(e) {
  return Y(e) && "__vccOpts" in e;
}
const Et = (e, t) => Id(e, t, bs);
function $s(e, t, n) {
  try {
    wi(-1);
    const s = arguments.length;
    return s === 2 ? Lt(t) && !q(t) ? ws(t) ? dt(e, null, [t]) : dt(e, t) : dt(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ws(n) && (n = [n]), dt(e, t, n));
  } finally {
    wi(1);
  }
}
const Oh = "3.5.25";
let Fr;
const xl = typeof window < "u" && window.trustedTypes;
if (xl)
  try {
    Fr = /* @__PURE__ */ xl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $c = Fr ? (e) => Fr.createHTML(e) : (e) => e, Rh = "http://www.w3.org/2000/svg", Ih = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, Sl = Ne && /* @__PURE__ */ Ne.createElement("template"), Nh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Ne.createElementNS(Rh, e) : t === "mathml" ? Ne.createElementNS(Ih, e) : n ? Ne.createElement(e, { is: n }) : Ne.createElement(e);
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
      Sl.innerHTML = $c(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Sl.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
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
}, Ye = "transition", is = "animation", ys = /* @__PURE__ */ Symbol("_vtc"), Bc = {
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
}, Ph = /* @__PURE__ */ wt(
  {},
  cc,
  Bc
), Lh = (e) => (e.displayName = "Transition", e.props = Ph, e), $h = /* @__PURE__ */ Lh(
  (e, { slots: t }) => $s(Ef, Bh(e), t)
), hn = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Cl = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bh(e) {
  const t = {};
  for (const O in e)
    O in Bc || (t[O] = e[O]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: c = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = Fh(i), m = p && p[0], y = p && p[1], {
    onBeforeEnter: b,
    onEnter: M,
    onEnterCancelled: R,
    onLeave: A,
    onLeaveCancelled: C,
    onBeforeAppear: P = b,
    onAppear: T = M,
    onAppearCancelled: B = R
  } = t, S = (O, z, G, pt) => {
    O._enterCancelled = pt, pn(O, z ? u : l), pn(O, z ? c : o), G && G();
  }, N = (O, z) => {
    O._isLeaving = !1, pn(O, d), pn(O, h), pn(O, f), z && z();
  }, U = (O) => (z, G) => {
    const pt = O ? T : M, tt = () => S(z, O, G);
    hn(pt, [z, tt]), El(() => {
      pn(z, O ? a : r), Oe(z, O ? u : l), Cl(pt) || Al(z, s, m, tt);
    });
  };
  return wt(t, {
    onBeforeEnter(O) {
      hn(b, [O]), Oe(O, r), Oe(O, o);
    },
    onBeforeAppear(O) {
      hn(P, [O]), Oe(O, a), Oe(O, c);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(O, z) {
      O._isLeaving = !0;
      const G = () => N(O, z);
      Oe(O, d), O._enterCancelled ? (Oe(O, f), Dl(O)) : (Dl(O), Oe(O, f)), El(() => {
        O._isLeaving && (pn(O, d), Oe(O, h), Cl(A) || Al(O, s, y, G));
      }), hn(A, [O, G]);
    },
    onEnterCancelled(O) {
      S(O, !1, void 0, !0), hn(R, [O]);
    },
    onAppearCancelled(O) {
      S(O, !0, void 0, !0), hn(B, [O]);
    },
    onLeaveCancelled(O) {
      N(O), hn(C, [O]);
    }
  });
}
function Fh(e) {
  if (e == null)
    return null;
  if (Lt(e))
    return [pr(e.enter), pr(e.leave)];
  {
    const t = pr(e);
    return [t, t];
  }
}
function pr(e) {
  return Or(e);
}
function Oe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ys] || (e[ys] = /* @__PURE__ */ new Set())).add(t);
}
function pn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ys];
  n && (n.delete(t), n.size || (e[ys] = void 0));
}
function El(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Hh = 0;
function Al(e, t, n, s) {
  const i = e._endId = ++Hh, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = Uh(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, f), r();
  }, f = (h) => {
    h.target === e && ++u >= a && d();
  };
  setTimeout(() => {
    u < a && d();
  }, l + 1), e.addEventListener(c, f);
}
function Uh(e, t) {
  const n = window.getComputedStyle(e), s = (p) => (n[p] || "").split(", "), i = s(`${Ye}Delay`), r = s(`${Ye}Duration`), o = Tl(i, r), l = s(`${is}Delay`), a = s(`${is}Duration`), c = Tl(l, a);
  let u = null, d = 0, f = 0;
  t === Ye ? o > 0 && (u = Ye, d = o, f = r.length) : t === is ? c > 0 && (u = is, d = c, f = a.length) : (d = Math.max(o, c), u = d > 0 ? o > c ? Ye : is : null, f = u ? u === Ye ? r.length : a.length : 0);
  const h = u === Ye && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Ye}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function Tl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ml(n) + Ml(e[s])));
}
function Ml(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Dl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Vh(e, t, n) {
  const s = e[ys];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ol = /* @__PURE__ */ Symbol("_vod"), jh = /* @__PURE__ */ Symbol("_vsh"), zh = /* @__PURE__ */ Symbol(""), Wh = /(?:^|;)\s*display\s*:/;
function Kh(e, t, n) {
  const s = e.style, i = Tt(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Tt(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && si(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && si(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), si(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[zh];
      o && (n += ";" + o), s.cssText = n, r = Wh.test(n);
    }
  } else t && e.removeAttribute("style");
  Ol in e && (e[Ol] = r ? s.display : "", e[jh] && (s.display = "none"));
}
const Rl = /\s*!important$/;
function si(e, t, n) {
  if (q(n))
    n.forEach((s) => si(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = qh(e, t);
    Rl.test(n) ? e.setProperty(
      Zt(s),
      n.replace(Rl, ""),
      "important"
    ) : e[s] = n;
  }
}
const Il = ["Webkit", "Moz", "ms"], gr = {};
function qh(e, t) {
  const n = gr[t];
  if (n)
    return n;
  let s = Nt(t);
  if (s !== "filter" && s in e)
    return gr[t] = s;
  s = fo(s);
  for (let i = 0; i < Il.length; i++) {
    const r = Il[i] + s;
    if (r in e)
      return gr[t] = r;
  }
  return t;
}
const Nl = "http://www.w3.org/1999/xlink";
function Pl(e, t, n, s, i, r = Fd(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Nl, t.slice(6, t.length)) : e.setAttributeNS(Nl, t, n) : n == null || r && !Qa(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ga(n) ? String(n) : n
  );
}
function Ll(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $c(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Qa(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Jh(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yh(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const $l = /* @__PURE__ */ Symbol("_vei");
function Gh(e, t, n, s, i = null) {
  const r = e[$l] || (e[$l] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Xh(t);
    if (s) {
      const c = r[t] = tp(
        s,
        i
      );
      Jh(e, l, c, a);
    } else o && (Yh(e, l, o, a), r[t] = void 0);
  }
}
const Bl = /(?:Once|Passive|Capture)$/;
function Xh(e) {
  let t;
  if (Bl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Bl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zt(e.slice(2)), t];
}
let mr = 0;
const Qh = /* @__PURE__ */ Promise.resolve(), Zh = () => mr || (Qh.then(() => mr = 0), mr = Date.now());
function tp(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ue(
      ep(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Zh(), n;
}
function ep(e, t) {
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
const Fl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, np = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Vh(e, s, o) : t === "style" ? Kh(e, n, s) : Pi(t) ? uo(t) || Gh(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sp(e, t, s, o)) ? (Ll(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pl(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Tt(s)) ? Ll(e, Nt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pl(e, t, s, o));
};
function sp(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fl(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Fl(t) && Tt(n) ? !1 : t in e;
}
const Hl = {};
// @__NO_SIDE_EFFECTS__
function ip(e, t, n) {
  let s = /* @__PURE__ */ Yt(e, t);
  Xa(s) && (s = wt({}, s, t));
  class i extends _o {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
const rp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _o extends rp {
  constructor(t, n = {}, s = Vl) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Vl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof _o) {
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
      if (r && !q(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = Or(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Nt(a)] = !0);
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
          get: () => ut(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = q(n) ? n : Object.keys(n || {});
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
    let s = n ? this.getAttribute(t) : Hl;
    const i = Nt(t);
    n && this._numberProps && this._numberProps[i] && (s = Or(s)), this._setProp(i, s, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Hl ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(Zt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Zt(t), n + "") : n || this.removeAttribute(Zt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), lp(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = dt(this._def, wt(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Xa(o[0]) ? wt({ detail: o }, o[0]) : { detail: o }
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
        for (const a of o) {
          if (n && a.nodeType === 1) {
            const c = n + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(c, "");
          }
          l.insertBefore(a, i);
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
const op = /* @__PURE__ */ wt({ patchProp: np }, Nh);
let Ul;
function Fc() {
  return Ul || (Ul = hh(op));
}
const lp = ((...e) => {
  Fc().render(...e);
}), Vl = ((...e) => {
  const t = Fc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = cp(s);
    if (!i) return;
    const r = t._component;
    !Y(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, ap(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function ap(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cp(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
const Hc = ["top", "right", "bottom", "left"], jl = ["start", "end"], zl = /* @__PURE__ */ Hc.reduce((e, t) => e.concat(t, t + "-" + jl[0], t + "-" + jl[1]), []), Me = Math.min, Ot = Math.max, yi = Math.round, Ee = (e) => ({
  x: e,
  y: e
}), up = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dp = {
  start: "end",
  end: "start"
};
function Hr(e, t, n) {
  return Ot(e, Me(t, n));
}
function We(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ne(e) {
  return e.split("-")[0];
}
function le(e) {
  return e.split("-")[1];
}
function Uc(e) {
  return e === "x" ? "y" : "x";
}
function ko(e) {
  return e === "y" ? "height" : "width";
}
const fp = /* @__PURE__ */ new Set(["top", "bottom"]);
function Se(e) {
  return fp.has(ne(e)) ? "y" : "x";
}
function xo(e) {
  return Uc(Se(e));
}
function Vc(e, t, n) {
  n === void 0 && (n = !1);
  const s = le(e), i = xo(e), r = ko(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = _i(o)), [o, _i(o)];
}
function hp(e) {
  const t = _i(e);
  return [vi(e), t, vi(t)];
}
function vi(e) {
  return e.replace(/start|end/g, (t) => dp[t]);
}
const Wl = ["left", "right"], Kl = ["right", "left"], pp = ["top", "bottom"], gp = ["bottom", "top"];
function mp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Kl : Wl : t ? Wl : Kl;
    case "left":
    case "right":
      return t ? pp : gp;
    default:
      return [];
  }
}
function wp(e, t, n, s) {
  const i = le(e);
  let r = mp(ne(e), n === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(vi)))), r;
}
function _i(e) {
  return e.replace(/left|right|bottom|top/g, (t) => up[t]);
}
function bp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function So(e) {
  return typeof e != "number" ? bp(e) : {
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
function ql(e, t, n) {
  let {
    reference: s,
    floating: i
  } = e;
  const r = Se(t), o = xo(t), l = ko(o), a = ne(t), c = r === "y", u = s.x + s.width / 2 - i.width / 2, d = s.y + s.height / 2 - i.height / 2, f = s[l] / 2 - i[l] / 2;
  let h;
  switch (a) {
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
      h[o] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const yp = async (e, t, n) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = n, l = r.filter(Boolean), a = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: d
  } = ql(c, s, a), f = s, h = {}, p = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: y,
      fn: b
    } = l[m], {
      x: M,
      y: R,
      data: A,
      reset: C
    } = await b({
      x: u,
      y: d,
      initialPlacement: s,
      placement: f,
      strategy: i,
      middlewareData: h,
      rects: c,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = M ?? u, d = R ?? d, h = {
      ...h,
      [y]: {
        ...h[y],
        ...A
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: u,
      y: d
    } = ql(c, f, a)), m = -1);
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
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = We(t, e), p = So(h), y = l[f ? d === "floating" ? "reference" : "floating" : d], b = Hn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), M = d === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), A = await (r.isElement == null ? void 0 : r.isElement(R)) ? await (r.getScale == null ? void 0 : r.getScale(R)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Hn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: M,
    offsetParent: R,
    strategy: a
  }) : M);
  return {
    top: (b.top - C.top + p.top) / A.y,
    bottom: (C.bottom - b.bottom + p.bottom) / A.y,
    left: (b.left - C.left + p.left) / A.x,
    right: (C.right - b.right + p.right) / A.x
  };
}
const vp = (e) => ({
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
      middlewareData: a
    } = t, {
      element: c,
      padding: u = 0
    } = We(e, t) || {};
    if (c == null)
      return {};
    const d = So(u), f = {
      x: n,
      y: s
    }, h = xo(i), p = ko(h), m = await o.getDimensions(c), y = h === "y", b = y ? "top" : "left", M = y ? "bottom" : "right", R = y ? "clientHeight" : "clientWidth", A = r.reference[p] + r.reference[h] - f[h] - r.floating[p], C = f[h] - r.reference[h], P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let T = P ? P[R] : 0;
    (!T || !await (o.isElement == null ? void 0 : o.isElement(P))) && (T = l.floating[R] || r.floating[p]);
    const B = A / 2 - C / 2, S = T / 2 - m[p] / 2 - 1, N = Me(d[b], S), U = Me(d[M], S), O = N, z = T - m[p] - U, G = T / 2 - m[p] / 2 + B, pt = Hr(O, G, z), tt = !a.arrow && le(i) != null && G !== pt && r.reference[p] / 2 - (G < O ? N : U) - m[p] / 2 < 0, K = tt ? G < O ? G - O : G - z : 0;
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
function _p(e, t, n) {
  return (e ? [...n.filter((i) => le(i) === e), ...n.filter((i) => le(i) !== e)] : n.filter((i) => ne(i) === i)).filter((i) => e ? le(i) === e || (t ? vi(i) !== i : !1) : !0);
}
const kp = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, s, i;
      const {
        rects: r,
        middlewareData: o,
        placement: l,
        platform: a,
        elements: c
      } = t, {
        crossAxis: u = !1,
        alignment: d,
        allowedPlacements: f = zl,
        autoAlignment: h = !0,
        ...p
      } = We(e, t), m = d !== void 0 || f === zl ? _p(d || null, h, f) : f, y = await Un(t, p), b = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, M = m[b];
      if (M == null)
        return {};
      const R = Vc(M, r, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== M)
        return {
          reset: {
            placement: m[0]
          }
        };
      const A = [y[ne(M)], y[R[0]], y[R[1]]], C = [...((s = o.autoPlacement) == null ? void 0 : s.overflows) || [], {
        placement: M,
        overflows: A
      }], P = m[b + 1];
      if (P)
        return {
          data: {
            index: b + 1,
            overflows: C
          },
          reset: {
            placement: P
          }
        };
      const T = C.map((N) => {
        const U = le(N.placement);
        return [N.placement, U && u ? (
          // Check along the mainAxis and main crossAxis side.
          N.overflows.slice(0, 2).reduce((O, z) => O + z, 0)
        ) : (
          // Check only the mainAxis.
          N.overflows[0]
        ), N.overflows];
      }).sort((N, U) => N[1] - U[1]), S = ((i = T.filter((N) => N[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        le(N[0]) ? 2 : 3
      ).every((U) => U <= 0))[0]) == null ? void 0 : i[0]) || T[0][0];
      return S !== l ? {
        data: {
          index: b + 1,
          overflows: C
        },
        reset: {
          placement: S
        }
      } : {};
    }
  };
}, xp = function(e) {
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
        platform: a,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...y
      } = We(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const b = ne(i), M = Se(l), R = ne(l) === l, A = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), C = f || (R || !m ? [_i(l)] : hp(l)), P = p !== "none";
      !f && P && C.push(...wp(l, m, p, A));
      const T = [l, ...C], B = await Un(t, y), S = [];
      let N = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (u && S.push(B[b]), d) {
        const G = Vc(i, o, A);
        S.push(B[G[0]], B[G[1]]);
      }
      if (N = [...N, {
        placement: i,
        overflows: S
      }], !S.every((G) => G <= 0)) {
        var U, O;
        const G = (((U = r.flip) == null ? void 0 : U.index) || 0) + 1, pt = T[G];
        if (pt && (!(d === "alignment" ? M !== Se(pt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((j) => Se(j.placement) === M ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: N
            },
            reset: {
              placement: pt
            }
          };
        let tt = (O = N.filter((K) => K.overflows[0] <= 0).sort((K, j) => K.overflows[1] - j.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!tt)
          switch (h) {
            case "bestFit": {
              var z;
              const K = (z = N.filter((j) => {
                if (P) {
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
function Jl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yl(e) {
  return Hc.some((t) => e[t] >= 0);
}
const Sp = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = We(e, t);
      switch (s) {
        case "referenceHidden": {
          const r = await Un(t, {
            ...i,
            elementContext: "reference"
          }), o = Jl(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Yl(o)
            }
          };
        }
        case "escaped": {
          const r = await Un(t, {
            ...i,
            altBoundary: !0
          }), o = Jl(r, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Yl(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function jc(e) {
  const t = Me(...e.map((r) => r.left)), n = Me(...e.map((r) => r.top)), s = Ot(...e.map((r) => r.right)), i = Ot(...e.map((r) => r.bottom));
  return {
    x: t,
    y: n,
    width: s - t,
    height: i - n
  };
}
function Cp(e) {
  const t = e.slice().sort((i, r) => i.y - r.y), n = [];
  let s = null;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    !s || r.y - s.y > s.height / 2 ? n.push([r]) : n[n.length - 1].push(r), s = r;
  }
  return n.map((i) => Hn(jc(i)));
}
const Ep = function(e) {
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
        x: a,
        y: c
      } = We(e, t), u = Array.from(await (r.getClientRects == null ? void 0 : r.getClientRects(s.reference)) || []), d = Cp(u), f = Hn(jc(u)), h = So(l);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && a != null && c != null)
          return d.find((y) => a > y.left - h.left && a < y.right + h.right && c > y.top - h.top && c < y.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if (Se(n) === "y") {
            const N = d[0], U = d[d.length - 1], O = ne(n) === "top", z = N.top, G = U.bottom, pt = O ? N.left : U.left, tt = O ? N.right : U.right, K = tt - pt, j = G - z;
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
          const y = ne(n) === "left", b = Ot(...d.map((N) => N.right)), M = Me(...d.map((N) => N.left)), R = d.filter((N) => y ? N.left === M : N.right === b), A = R[0].top, C = R[R.length - 1].bottom, P = M, T = b, B = T - P, S = C - A;
          return {
            top: A,
            bottom: C,
            left: P,
            right: T,
            width: B,
            height: S,
            x: P,
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
}, Ap = /* @__PURE__ */ new Set(["left", "top"]);
async function Tp(e, t) {
  const {
    placement: n,
    platform: s,
    elements: i
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = ne(n), l = le(n), a = Se(n) === "y", c = Ap.has(o) ? -1 : 1, u = r && a ? -1 : 1, d = We(t, e);
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
  return l && typeof p == "number" && (h = l === "end" ? p * -1 : p), a ? {
    x: h * u,
    y: f * c
  } : {
    x: f * c,
    y: h * u
  };
}
const Mp = function(e) {
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
      } = t, a = await Tp(t, e);
      return o === ((n = l.offset) == null ? void 0 : n.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: i + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: o
        }
      };
    }
  };
}, Dp = function(e) {
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
        ...a
      } = We(e, t), c = {
        x: n,
        y: s
      }, u = await Un(t, a), d = Se(ne(i)), f = Uc(d);
      let h = c[f], p = c[d];
      if (r) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", M = h + u[y], R = h - u[b];
        h = Hr(M, h, R);
      }
      if (o) {
        const y = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", M = p + u[y], R = p - u[b];
        p = Hr(M, p, R);
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
}, Op = function(e) {
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
        apply: a = () => {
        },
        ...c
      } = We(e, t), u = await Un(t, c), d = ne(i), f = le(i), h = Se(i) === "y", {
        width: p,
        height: m
      } = r.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = f === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
      const M = m - u.top - u.bottom, R = p - u.left - u.right, A = Me(m - u[y], M), C = Me(p - u[b], R), P = !t.middlewareData.shift;
      let T = A, B = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = R), (s = t.middlewareData.shift) != null && s.enabled.y && (T = M), P && !f) {
        const N = Ot(u.left, 0), U = Ot(u.right, 0), O = Ot(u.top, 0), z = Ot(u.bottom, 0);
        h ? B = p - 2 * (N !== 0 || U !== 0 ? N + U : Ot(u.left, u.right)) : T = m - 2 * (O !== 0 || z !== 0 ? O + z : Ot(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: B,
        availableHeight: T
      });
      const S = await o.getDimensions(l.floating);
      return p !== S.width || m !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zi() {
  return typeof window < "u";
}
function Gn(e) {
  return zc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ke(e) {
  var t;
  return (t = (zc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zc(e) {
  return zi() ? e instanceof Node || e instanceof Jt(e).Node : !1;
}
function de(e) {
  return zi() ? e instanceof Element || e instanceof Jt(e).Element : !1;
}
function De(e) {
  return zi() ? e instanceof HTMLElement || e instanceof Jt(e).HTMLElement : !1;
}
function Gl(e) {
  return !zi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Jt(e).ShadowRoot;
}
const Rp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: s,
    display: i
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !Rp.has(i);
}
const Ip = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Np(e) {
  return Ip.has(Gn(e));
}
const Pp = [":popover-open", ":modal"];
function Wi(e) {
  return Pp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Lp = ["transform", "translate", "scale", "rotate", "perspective"], $p = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Bp = ["paint", "layout", "strict", "content"];
function Co(e) {
  const t = Eo(), n = de(e) ? fe(e) : e;
  return Lp.some((s) => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $p.some((s) => (n.willChange || "").includes(s)) || Bp.some((s) => (n.contain || "").includes(s));
}
function Fp(e) {
  let t = sn(e);
  for (; De(t) && !Vn(t); ) {
    if (Co(t))
      return t;
    if (Wi(t))
      return null;
    t = sn(t);
  }
  return null;
}
function Eo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Hp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Vn(e) {
  return Hp.has(Gn(e));
}
function fe(e) {
  return Jt(e).getComputedStyle(e);
}
function Ki(e) {
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
    Gl(e) && e.host || // Fallback.
    Ke(e)
  );
  return Gl(t) ? t.host : t;
}
function Wc(e) {
  const t = sn(e);
  return Vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : De(t) && Bs(t) ? t : Wc(t);
}
function Kc(e, t, n) {
  var s;
  t === void 0 && (t = []);
  const i = Wc(e), r = i === ((s = e.ownerDocument) == null ? void 0 : s.body), o = Jt(i);
  return r ? (Ur(o), t.concat(o, o.visualViewport || [], Bs(i) ? i : [], [])) : t.concat(i, Kc(i, []));
}
function Ur(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qc(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = De(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, l = yi(n) !== r || yi(s) !== o;
  return l && (n = r, s = o), {
    width: n,
    height: s,
    $: l
  };
}
function Jc(e) {
  return de(e) ? e : e.contextElement;
}
function Pn(e) {
  const t = Jc(e);
  if (!De(t))
    return Ee(1);
  const n = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = qc(t);
  let o = (r ? yi(n.width) : n.width) / s, l = (r ? yi(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: o,
    y: l
  };
}
const Up = /* @__PURE__ */ Ee(0);
function Yc(e) {
  const t = Jt(e);
  return !Eo() || !t.visualViewport ? Up : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Vp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Jt(e) ? !1 : t;
}
function vs(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Jc(e);
  let o = Ee(1);
  t && (s ? de(s) && (o = Pn(s)) : o = Pn(e));
  const l = Vp(r, n, s) ? Yc(r) : Ee(0);
  let a = (i.left + l.x) / o.x, c = (i.top + l.y) / o.y, u = i.width / o.x, d = i.height / o.y;
  if (r) {
    const f = Jt(r), h = s && de(s) ? Jt(s) : s;
    let p = f, m = Ur(p);
    for (; m && s && h !== p; ) {
      const y = Pn(m), b = m.getBoundingClientRect(), M = fe(m), R = b.left + (m.clientLeft + parseFloat(M.paddingLeft)) * y.x, A = b.top + (m.clientTop + parseFloat(M.paddingTop)) * y.y;
      a *= y.x, c *= y.y, u *= y.x, d *= y.y, a += R, c += A, p = Jt(m), m = Ur(p);
    }
  }
  return Hn({
    width: u,
    height: d,
    x: a,
    y: c
  });
}
function qi(e, t) {
  const n = Ki(e).scrollLeft;
  return t ? t.left + n : vs(Ke(e)).left + n;
}
function Gc(e, t) {
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - qi(e, n), i = n.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function jp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: s,
    strategy: i
  } = e;
  const r = i === "fixed", o = Ke(s), l = t ? Wi(t.floating) : !1;
  if (s === o || l && r)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ee(1);
  const u = Ee(0), d = De(s);
  if ((d || !d && !r) && ((Gn(s) !== "body" || Bs(o)) && (a = Ki(s)), De(s))) {
    const h = vs(s);
    c = Pn(s), u.x = h.x + s.clientLeft, u.y = h.y + s.clientTop;
  }
  const f = o && !d && !r ? Gc(o, a) : Ee(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + f.y
  };
}
function zp(e) {
  return Array.from(e.getClientRects());
}
function Wp(e) {
  const t = Ke(e), n = Ki(e), s = e.ownerDocument.body, i = Ot(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = Ot(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -n.scrollLeft + qi(e);
  const l = -n.scrollTop;
  return fe(s).direction === "rtl" && (o += Ot(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: l
  };
}
const Xl = 25;
function Kp(e, t) {
  const n = Jt(e), s = Ke(e), i = n.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, l = 0, a = 0;
  if (i) {
    r = i.width, o = i.height;
    const u = Eo();
    (!u || u && t === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  const c = qi(s);
  if (c <= 0) {
    const u = s.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(s.clientWidth - d.clientWidth - h);
    p <= Xl && (r -= p);
  } else c <= Xl && (r += c);
  return {
    width: r,
    height: o,
    x: l,
    y: a
  };
}
const qp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Jp(e, t) {
  const n = vs(e, !0, t === "fixed"), s = n.top + e.clientTop, i = n.left + e.clientLeft, r = De(e) ? Pn(e) : Ee(1), o = e.clientWidth * r.x, l = e.clientHeight * r.y, a = i * r.x, c = s * r.y;
  return {
    width: o,
    height: l,
    x: a,
    y: c
  };
}
function Ql(e, t, n) {
  let s;
  if (t === "viewport")
    s = Kp(e, n);
  else if (t === "document")
    s = Wp(Ke(e));
  else if (de(t))
    s = Jp(t, n);
  else {
    const i = Yc(e);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Hn(s);
}
function Xc(e, t) {
  const n = sn(e);
  return n === t || !de(n) || Vn(n) ? !1 : fe(n).position === "fixed" || Xc(n, t);
}
function Yp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let s = Kc(e, []).filter((l) => de(l) && Gn(l) !== "body"), i = null;
  const r = fe(e).position === "fixed";
  let o = r ? sn(e) : e;
  for (; de(o) && !Vn(o); ) {
    const l = fe(o), a = Co(o);
    !a && l.position === "fixed" && (i = null), (r ? !a && !i : !a && l.position === "static" && !!i && qp.has(i.position) || Bs(o) && !a && Xc(e, o)) ? s = s.filter((u) => u !== o) : i = l, o = sn(o);
  }
  return t.set(e, s), s;
}
function Gp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: s,
    strategy: i
  } = e;
  const o = [...n === "clippingAncestors" ? Wi(t) ? [] : Yp(t, this._c) : [].concat(n), s], l = o[0], a = o.reduce((c, u) => {
    const d = Ql(t, u, i);
    return c.top = Ot(d.top, c.top), c.right = Me(d.right, c.right), c.bottom = Me(d.bottom, c.bottom), c.left = Ot(d.left, c.left), c;
  }, Ql(t, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Xp(e) {
  const {
    width: t,
    height: n
  } = qc(e);
  return {
    width: t,
    height: n
  };
}
function Qp(e, t, n) {
  const s = De(t), i = Ke(t), r = n === "fixed", o = vs(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ee(0);
  function c() {
    a.x = qi(i);
  }
  if (s || !s && !r)
    if ((Gn(t) !== "body" || Bs(i)) && (l = Ki(t)), s) {
      const h = vs(t, !0, r, t);
      a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
    } else i && c();
  r && !s && i && c();
  const u = i && !s && !r ? Gc(i, l) : Ee(0), d = o.left + l.scrollLeft - a.x - u.x, f = o.top + l.scrollTop - a.y - u.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function wr(e) {
  return fe(e).position === "static";
}
function Zl(e, t) {
  if (!De(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ke(e) === n && (n = n.ownerDocument.body), n;
}
function Qc(e, t) {
  const n = Jt(e);
  if (Wi(e))
    return n;
  if (!De(e)) {
    let i = sn(e);
    for (; i && !Vn(i); ) {
      if (de(i) && !wr(i))
        return i;
      i = sn(i);
    }
    return n;
  }
  let s = Zl(e, t);
  for (; s && Np(s) && wr(s); )
    s = Zl(s, t);
  return s && Vn(s) && wr(s) && !Co(s) ? n : s || Fp(e) || n;
}
const Zp = async function(e) {
  const t = this.getOffsetParent || Qc, n = this.getDimensions, s = await n(e.floating);
  return {
    reference: Qp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function tg(e) {
  return fe(e).direction === "rtl";
}
const eg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jp,
  getDocumentElement: Ke,
  getClippingRect: Gp,
  getOffsetParent: Qc,
  getElementRects: Zp,
  getClientRects: zp,
  getDimensions: Xp,
  getScale: Pn,
  isElement: de,
  isRTL: tg
}, ng = Mp, sg = kp, ig = Dp, rg = xp, og = Op, lg = Sp, ag = vp, cg = Ep, Zc = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: eg,
    ...n
  }, r = {
    ...i.platform,
    _c: s
  };
  return yp(e, t, {
    ...i,
    platform: r
  });
}, ae = () => /* @__PURE__ */ new Map(), Vr = (e) => {
  const t = ae();
  return e.forEach((n, s) => {
    t.set(s, n);
  }), t;
}, qe = (e, t, n) => {
  let s = e.get(t);
  return s === void 0 && e.set(t, s = n()), s;
}, ug = (e, t) => {
  const n = [];
  for (const [s, i] of e)
    n.push(t(i, s));
  return n;
}, dg = (e, t) => {
  for (const [n, s] of e)
    if (t(s, n))
      return !0;
  return !1;
}, kn = () => /* @__PURE__ */ new Set(), br = (e) => e[e.length - 1], fg = (e, t) => {
  for (let n = 0; n < t.length; n++)
    e.push(t[n]);
}, xn = Array.from, hg = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return !0;
  return !1;
}, jr = Array.isArray;
class tu {
  constructor() {
    this._observers = ae();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, n) {
    return qe(
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
    return xn((this._observers.get(t) || ae()).values()).forEach((s) => s(...n));
  }
  destroy() {
    this._observers = ae();
  }
}
const je = Math.floor, ii = Math.abs, jn = (e, t) => e < t ? e : t, rn = (e, t) => e > t ? e : t, eu = (e) => e !== 0 ? e < 0 : 1 / e < 0, ta = 1, ea = 2, yr = 4, vr = 8, _s = 32, He = 64, Pt = 128, pg = 1 << 29, Ji = 31, zr = 63, yn = 127, gg = 2147483647, nu = Number.MAX_SAFE_INTEGER, mg = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && je(e) === e), wg = String.fromCharCode, bg = (e) => e.toLowerCase(), yg = /^\s*/g, vg = (e) => e.replace(yg, ""), _g = /([A-Z])/g, na = (e, t) => vg(e.replace(_g, (n) => `${t}${bg(n)}`)), kg = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, s = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    s[i] = /** @type {number} */
    t.codePointAt(i);
  return s;
}, ks = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), xg = (e) => ks.encode(e), Sg = ks ? xg : kg;
let fs = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
fs && fs.decode(new Uint8Array()).length === 1 && (fs = null);
class Fs {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Hs = () => new Fs(), Cg = (e) => {
  const t = Hs();
  return e(t), oe(t);
}, Eg = (e) => {
  let t = e.cpos;
  for (let n = 0; n < e.bufs.length; n++)
    t += e.bufs[n].length;
  return t;
}, oe = (e) => {
  const t = new Uint8Array(Eg(e));
  let n = 0;
  for (let s = 0; s < e.bufs.length; s++) {
    const i = e.bufs[s];
    t.set(i, n), n += i.length;
  }
  return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Ag = (e, t) => {
  const n = e.cbuf.length;
  n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(rn(n, t) * 2), e.cpos = 0);
}, yt = (e, t) => {
  const n = e.cbuf.length;
  e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Wr = yt, Q = (e, t) => {
  for (; t > yn; )
    yt(e, Pt | yn & t), t = je(t / 128);
  yt(e, yn & t);
}, Ao = (e, t) => {
  const n = eu(t);
  for (n && (t = -t), yt(e, (t > zr ? Pt : 0) | (n ? He : 0) | zr & t), t = je(t / 64); t > 0; )
    yt(e, (t > yn ? Pt : 0) | yn & t), t = je(t / 128);
}, Kr = new Uint8Array(3e4), Tg = Kr.length / 3, Mg = (e, t) => {
  if (t.length < Tg) {
    const n = ks.encodeInto(t, Kr).written || 0;
    Q(e, n);
    for (let s = 0; s < n; s++)
      yt(e, Kr[s]);
  } else
    Wt(e, Sg(t));
}, Dg = (e, t) => {
  const n = unescape(encodeURIComponent(t)), s = n.length;
  Q(e, s);
  for (let i = 0; i < s; i++)
    yt(
      e,
      /** @type {number} */
      n.codePointAt(i)
    );
}, Ln = ks && /** @type {any} */
ks.encodeInto ? Mg : Dg, Yi = (e, t) => {
  const n = e.cbuf.length, s = e.cpos, i = jn(n - s, t.length), r = t.length - i;
  e.cbuf.set(t.subarray(0, i), s), e.cpos += i, r > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(rn(n * 2, r)), e.cbuf.set(t.subarray(i)), e.cpos = r);
}, Wt = (e, t) => {
  Q(e, t.byteLength), Yi(e, t);
}, To = (e, t) => {
  Ag(e, t);
  const n = new DataView(e.cbuf.buffer, e.cpos, t);
  return e.cpos += t, n;
}, Og = (e, t) => To(e, 4).setFloat32(0, t, !1), Rg = (e, t) => To(e, 8).setFloat64(0, t, !1), Ig = (e, t) => (
  /** @type {any} */
  To(e, 8).setBigInt64(0, t, !1)
), sa = new DataView(new ArrayBuffer(4)), Ng = (e) => (sa.setFloat32(0, e), sa.getFloat32(0) === e), zn = (e, t) => {
  switch (typeof t) {
    case "string":
      yt(e, 119), Ln(e, t);
      break;
    case "number":
      mg(t) && ii(t) <= gg ? (yt(e, 125), Ao(e, t)) : Ng(t) ? (yt(e, 124), Og(e, t)) : (yt(e, 123), Rg(e, t));
      break;
    case "bigint":
      yt(e, 122), Ig(e, t);
      break;
    case "object":
      if (t === null)
        yt(e, 126);
      else if (jr(t)) {
        yt(e, 117), Q(e, t.length);
        for (let n = 0; n < t.length; n++)
          zn(e, t[n]);
      } else if (t instanceof Uint8Array)
        yt(e, 116), Wt(e, t);
      else {
        yt(e, 118);
        const n = Object.keys(t);
        Q(e, n.length);
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          Ln(e, i), zn(e, t[i]);
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
class ia extends Fs {
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
    this.s === t ? this.count++ : (this.count > 0 && Q(this, this.count - 1), this.count = 1, this.w(this, t), this.s = t);
  }
}
const ra = (e) => {
  e.count > 0 && (Ao(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && Q(e.encoder, e.count - 2));
};
class ri {
  constructor() {
    this.encoder = new Fs(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (ra(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return ra(this), oe(this.encoder);
  }
}
const oa = (e) => {
  if (e.count > 0) {
    const t = e.diff * 2 + (e.count === 1 ? 0 : 1);
    Ao(e.encoder, t), e.count > 1 && Q(e.encoder, e.count - 2);
  }
};
class _r {
  constructor() {
    this.encoder = new Fs(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (oa(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return oa(this), oe(this.encoder);
  }
}
class Pg {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new ri();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new Fs();
    return this.sarr.push(this.s), this.s = "", Ln(t, this.sarr.join("")), Yi(t, this.lensE.toUint8Array()), oe(t);
  }
}
const on = (e) => new Error(e), ce = () => {
  throw on("Method unimplemented");
}, Vt = () => {
  throw on("Unexpected case");
}, su = on("Unexpected end of array"), iu = on("Integer out of Range");
class Gi {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const Mo = (e) => new Gi(e), Lg = (e) => e.pos !== e.arr.length, $g = (e, t) => {
  const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
  return e.pos += t, n;
}, Qt = (e) => $g(e, lt(e)), xs = (e) => e.arr[e.pos++], lt = (e) => {
  let t = 0, n = 1;
  const s = e.arr.length;
  for (; e.pos < s; ) {
    const i = e.arr[e.pos++];
    if (t = t + (i & yn) * n, n *= 128, i < Pt)
      return t;
    if (t > nu)
      throw iu;
  }
  throw su;
}, Do = (e) => {
  let t = e.arr[e.pos++], n = t & zr, s = 64;
  const i = (t & He) > 0 ? -1 : 1;
  if ((t & Pt) === 0)
    return i * n;
  const r = e.arr.length;
  for (; e.pos < r; ) {
    if (t = e.arr[e.pos++], n = n + (t & yn) * s, s *= 128, t < Pt)
      return i * n;
    if (n > nu)
      throw iu;
  }
  throw su;
}, Bg = (e) => {
  let t = lt(e);
  if (t === 0)
    return "";
  {
    let n = String.fromCodePoint(xs(e));
    if (--t < 100)
      for (; t--; )
        n += String.fromCodePoint(xs(e));
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
}, Fg = (e) => (
  /** @type any */
  fs.decode(Qt(e))
), qr = fs ? Fg : Bg, Oo = (e, t) => {
  const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
  return e.pos += t, n;
}, Hg = (e) => Oo(e, 4).getFloat32(0, !1), Ug = (e) => Oo(e, 8).getFloat64(0, !1), Vg = (e) => (
  /** @type {any} */
  Oo(e, 8).getBigInt64(0, !1)
), jg = [
  (e) => {
  },
  // CASE 127: undefined
  (e) => null,
  // CASE 126: null
  Do,
  // CASE 125: integer
  Hg,
  // CASE 124: float32
  Ug,
  // CASE 123: float64
  Vg,
  // CASE 122: bigint
  (e) => !1,
  // CASE 121: boolean (false)
  (e) => !0,
  // CASE 120: boolean (true)
  qr,
  // CASE 119: string
  (e) => {
    const t = lt(e), n = {};
    for (let s = 0; s < t; s++) {
      const i = qr(e);
      n[i] = ki(e);
    }
    return n;
  },
  (e) => {
    const t = lt(e), n = [];
    for (let s = 0; s < t; s++)
      n.push(ki(e));
    return n;
  },
  Qt
  // CASE 116: Uint8Array
], ki = (e) => jg[127 - xs(e)](e);
class la extends Gi {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, n) {
    super(t), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), Lg(this) ? this.count = lt(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class oi extends Gi {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Do(this);
      const t = eu(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = lt(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class kr extends Gi {
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
      const t = Do(this), n = t & 1;
      this.diff = je(t / 2), this.count = 1, n && (this.count = lt(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class zg {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new oi(t), this.str = qr(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), n = this.str.slice(this.spos, t);
    return this.spos = t, n;
  }
}
const Wg = crypto.getRandomValues.bind(crypto), Kg = Math.random, ru = () => Wg(new Uint32Array(1))[0], qg = (e) => e[je(Kg() * e.length)], Jg = "10000000-1000-4000-8000" + -1e11, Yg = () => Jg.replace(
  /[018]/g,
  /** @param {number} c */
  (e) => (e ^ ru() & 15 >> e / 4).toString(16)
), Gg = Date.now, aa = (e) => (
  /** @type {Promise<T>} */
  new Promise(e)
);
Promise.all.bind(Promise);
const ca = (e) => e === void 0 ? null : e;
class Xg {
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
let ou = new Xg(), Qg = !0;
try {
  typeof localStorage < "u" && localStorage && (ou = localStorage, Qg = !1);
} catch {
}
const Zg = ou, tm = Object.assign, lu = Object.keys, em = (e, t) => {
  for (const n in e)
    t(e[n], n);
}, ua = (e) => lu(e).length, nm = (e) => {
  for (const t in e)
    return !1;
  return !0;
}, au = (e, t) => {
  for (const n in e)
    if (!t(e[n], n))
      return !1;
  return !0;
}, sm = (e, t) => Object.prototype.hasOwnProperty.call(e, t), im = (e, t) => e === t || ua(e) === ua(t) && au(e, (n, s) => (n !== void 0 || sm(t, s)) && t[s] === n), rm = Object.freeze, cu = (e) => {
  for (const t in e) {
    const n = e[t];
    (typeof n == "object" || typeof n == "function") && cu(e[t]);
  }
  return rm(e);
}, Ro = (e, t, n = 0) => {
  try {
    for (; n < e.length; n++)
      e[n](...t);
  } finally {
    n < e.length && Ro(e, t, n + 1);
  }
}, om = (e, t) => t.includes(e), Wn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", uu = typeof window < "u" && typeof document < "u" && !Wn;
let _e;
const lm = () => {
  if (_e === void 0)
    if (Wn) {
      _e = ae();
      const e = process.argv;
      let t = null;
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        s[0] === "-" ? (t !== null && _e.set(t, ""), t = s) : t !== null && (_e.set(t, s), t = null);
      }
      t !== null && _e.set(t, "");
    } else typeof location == "object" ? (_e = ae(), (location.search || "?").slice(1).split("&").forEach((e) => {
      if (e.length !== 0) {
        const [t, n] = e.split("=");
        _e.set(`--${na(t, "-")}`, n), _e.set(`-${na(t, "-")}`, n);
      }
    })) : _e = ae();
  return _e;
}, Jr = (e) => lm().has(e), xi = (e) => ca(Wn ? process.env[e.toUpperCase().replaceAll("-", "_")] : Zg.getItem(e)), du = (e) => Jr("--" + e) || xi(e) !== null;
du("production");
const am = Wn && om(process.env.FORCE_COLOR, ["true", "1", "2"]), cm = am || !Jr("--no-colors") && // @todo deprecate --no-colors
!du("no-color") && (!Wn || process.stdout.isTTY) && (!Wn || Jr("--color") || xi("COLORTERM") !== null || (xi("TERM") || "").includes("color")), um = (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += wg(e[n]);
  return btoa(t);
}, dm = (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), fm = uu ? um : dm, hm = (e) => Cg((t) => zn(t, e));
class pm {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, n) {
    this.left = t, this.right = n;
  }
}
const Re = (e, t) => new pm(e, t), gm = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const mm = (e) => ug(e, (t, n) => `${n}:${t};`).join(""), wm = (e) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    e(this._);
  }
}, bm = wm(clearTimeout), fu = (e, t) => new bm(setTimeout(t, e)), Je = Symbol, hu = Je(), pu = Je(), ym = Je(), vm = Je(), _m = Je(), gu = Je(), km = Je(), Io = Je(), xm = Je(), Sm = (e) => {
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
}, Cm = {
  [hu]: Re("font-weight", "bold"),
  [pu]: Re("font-weight", "normal"),
  [ym]: Re("color", "blue"),
  [_m]: Re("color", "green"),
  [vm]: Re("color", "grey"),
  [gu]: Re("color", "red"),
  [km]: Re("color", "purple"),
  [Io]: Re("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [xm]: Re("color", "black")
}, Em = (e) => {
  e.length === 1 && e[0]?.constructor === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [], s = ae();
  let i = [], r = 0;
  for (; r < e.length; r++) {
    const o = e[r], l = Cm[o];
    if (l !== void 0)
      s.set(l.left, l.right);
    else {
      if (o === void 0)
        break;
      if (o.constructor === String || o.constructor === Number) {
        const a = mm(s);
        r > 0 || a.length > 0 ? (t.push("%c" + o), n.push(a)) : t.push(o);
      } else
        break;
    }
  }
  for (r > 0 && (i = n, i.unshift(t.join(""))); r < e.length; r++) {
    const o = e[r];
    o instanceof Symbol || i.push(o);
  }
  return i;
}, mu = cm ? Em : Sm, Am = (...e) => {
  console.log(...mu(e)), bu.forEach((t) => t.print(e));
}, wu = (...e) => {
  console.warn(...mu(e)), e.unshift(Io), bu.forEach((t) => t.print(e));
}, bu = kn(), yu = (e) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: e
}), Tm = (e, t) => yu(() => {
  let n;
  do
    n = e.next();
  while (!n.done && !t(n.value));
  return n;
}), xr = (e, t) => yu(() => {
  const { done: n, value: s } = e.next();
  return { done: n, value: n ? void 0 : t(s) };
});
class No {
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
    for (let a = 0, c = s[a]; a < s.length && c.clock < l; c = s[++a])
      Au(e, r, c.clock, c.len, n);
  }
}), Mm = (e, t) => {
  let n = 0, s = e.length - 1;
  for (; n <= s; ) {
    const i = je((n + s) / 2), r = e[i], o = r.clock;
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
  return n !== void 0 && Mm(n, t.clock) !== null;
}, Po = (e) => {
  e.clients.forEach((t) => {
    t.sort((i, r) => i.clock - r.clock);
    let n, s;
    for (n = 1, s = 1; n < t.length; n++) {
      const i = t[s - 1], r = t[n];
      i.clock + i.len >= r.clock ? i.len = rn(i.len, r.clock + r.len - i.clock) : (s < n && (t[s] = r), s++);
    }
    t.length = s;
  });
}, Yr = (e) => {
  const t = new Xn();
  for (let n = 0; n < e.length; n++)
    e[n].clients.forEach((s, i) => {
      if (!t.clients.has(i)) {
        const r = s.slice();
        for (let o = n + 1; o < e.length; o++)
          fg(r, e[o].clients.get(i) || []);
        t.clients.set(i, r);
      }
    });
  return Po(t), t;
}, Ss = (e, t, n, s) => {
  qe(e.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new No(n, s));
}, vu = () => new Xn(), Dm = (e) => {
  const t = vu();
  return e.clients.forEach((n, s) => {
    const i = [];
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o.deleted) {
        const l = o.id.clock;
        let a = o.length;
        if (r + 1 < n.length)
          for (let c = n[r + 1]; r + 1 < n.length && c.deleted; c = n[++r + 1])
            a += c.length;
        i.push(new No(l, a));
      }
    }
    i.length > 0 && t.clients.set(s, i);
  }), t;
}, Lo = (e, t) => {
  Q(e.restEncoder, t.clients.size), xn(t.clients.entries()).sort((n, s) => s[0] - n[0]).forEach(([n, s]) => {
    e.resetDsCurVal(), Q(e.restEncoder, n);
    const i = s.length;
    Q(e.restEncoder, i);
    for (let r = 0; r < i; r++) {
      const o = s[r];
      e.writeDsClock(o.clock), e.writeDsLen(o.len);
    }
  });
}, Om = (e) => {
  const t = new Xn(), n = lt(e.restDecoder);
  for (let s = 0; s < n; s++) {
    e.resetDsCurVal();
    const i = lt(e.restDecoder), r = lt(e.restDecoder);
    if (r > 0) {
      const o = qe(t.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < r; l++)
        o.push(new No(e.readDsClock(), e.readDsLen()));
    }
  }
  return t;
}, da = (e, t, n) => {
  const s = new Xn(), i = lt(e.restDecoder);
  for (let r = 0; r < i; r++) {
    e.resetDsCurVal();
    const o = lt(e.restDecoder), l = lt(e.restDecoder), a = n.clients.get(o) || [], c = mt(n, o);
    for (let u = 0; u < l; u++) {
      const d = e.readDsClock(), f = d + e.readDsLen();
      if (d < c) {
        c < f && Ss(s, o, c, f - c);
        let h = he(a, d), p = a[h];
        for (!p.deleted && p.id.clock < d && (a.splice(h + 1, 0, Di(t, p, d - p.id.clock)), h++); h < a.length && (p = a[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && a.splice(h, 0, Di(t, p, f - p.id.clock)), p.delete(t));
      } else
        Ss(s, o, d, f - d);
    }
  }
  if (s.clients.size > 0) {
    const r = new Xi();
    return Q(r.restEncoder, 0), Lo(r, s), r.toUint8Array();
  }
  return null;
}, _u = ru;
class An extends tu {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = Yg(), collectionid: n = null, gc: s = !0, gcFilter: i = () => !0, meta: r = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = i, this.clientID = _u(), this.guid = t, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Cu(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = r, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = aa((c) => {
      this.on("load", () => {
        this.isLoaded = !0, c(this);
      });
    });
    const a = () => aa((c) => {
      const u = (d) => {
        (d === void 0 || d === !0) && (this.off("sync", u), c());
      };
      this.on("sync", u);
    });
    this.on("sync", (c) => {
      c === !1 && this.isSynced && (this.whenSynced = a()), this.isSynced = c === void 0 || c === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = a();
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
    const s = qe(this.share, t, () => {
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
    return this.get(t, an);
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
class Rm {
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
class Si extends Rm {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], lt(t), this.keyClockDecoder = new kr(Qt(t)), this.clientDecoder = new oi(Qt(t)), this.leftClockDecoder = new kr(Qt(t)), this.rightClockDecoder = new kr(Qt(t)), this.infoDecoder = new la(Qt(t), xs), this.stringDecoder = new zg(Qt(t)), this.parentInfoDecoder = new la(Qt(t), xs), this.typeRefDecoder = new oi(Qt(t)), this.lenDecoder = new oi(Qt(t));
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
    return ki(this.restDecoder);
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
    return ki(this.restDecoder);
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
class Im {
  constructor() {
    this.restEncoder = Hs();
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
    Q(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    Q(this.restEncoder, t);
  }
}
class Nm extends Im {
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    Q(this.restEncoder, t.client), Q(this.restEncoder, t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    Q(this.restEncoder, t.client), Q(this.restEncoder, t.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(t) {
    Q(this.restEncoder, t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    Wr(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    Ln(this.restEncoder, t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    Q(this.restEncoder, t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    Q(this.restEncoder, t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    Q(this.restEncoder, t);
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
    Wt(this.restEncoder, t);
  }
  /**
   * @param {any} embed
   */
  writeJSON(t) {
    Ln(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    Ln(this.restEncoder, t);
  }
}
class Pm {
  constructor() {
    this.restEncoder = Hs(), this.dsCurrVal = 0;
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
    this.dsCurrVal = t, Q(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    t === 0 && Vt(), Q(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Xi extends Pm {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new _r(), this.clientEncoder = new ri(), this.leftClockEncoder = new _r(), this.rightClockEncoder = new _r(), this.infoEncoder = new ia(Wr), this.stringEncoder = new Pg(), this.parentInfoEncoder = new ia(Wr), this.typeRefEncoder = new ri(), this.lenEncoder = new ri();
  }
  toUint8Array() {
    const t = Hs();
    return Q(t, 0), Wt(t, this.keyClockEncoder.toUint8Array()), Wt(t, this.clientEncoder.toUint8Array()), Wt(t, this.leftClockEncoder.toUint8Array()), Wt(t, this.rightClockEncoder.toUint8Array()), Wt(t, oe(this.infoEncoder)), Wt(t, this.stringEncoder.toUint8Array()), Wt(t, oe(this.parentInfoEncoder)), Wt(t, this.typeRefEncoder.toUint8Array()), Wt(t, this.lenEncoder.toUint8Array()), Yi(t, oe(this.restEncoder)), oe(t);
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
    Wt(this.restEncoder, t);
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
const Lm = (e, t, n, s) => {
  s = rn(s, t[0].id.clock);
  const i = he(t, s);
  Q(e.restEncoder, t.length - i), e.writeClient(n), Q(e.restEncoder, s);
  const r = t[i];
  r.write(e, s - r.id.clock);
  for (let o = i + 1; o < t.length; o++)
    t[o].write(e, 0);
}, ku = (e, t, n) => {
  const s = /* @__PURE__ */ new Map();
  n.forEach((i, r) => {
    mt(t, r) > i && s.set(r, i);
  }), Qi(t).forEach((i, r) => {
    n.has(r) || s.set(r, 0);
  }), Q(e.restEncoder, s.size), xn(s.entries()).sort((i, r) => r[0] - i[0]).forEach(([i, r]) => {
    Lm(
      e,
      /** @type {Array<GC|Item>} */
      t.clients.get(i),
      i,
      r
    );
  });
}, $m = (e, t) => {
  const n = ae(), s = lt(e.restDecoder);
  for (let i = 0; i < s; i++) {
    const r = lt(e.restDecoder), o = new Array(r), l = e.readClient();
    let a = lt(e.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let c = 0; c < r; c++) {
      const u = e.readInfo();
      switch (Ji & u) {
        case 0: {
          const d = e.readLen();
          o[c] = new ee(W(l, a), d), a += d;
          break;
        }
        case 10: {
          const d = lt(e.restDecoder);
          o[c] = new re(W(l, a), d), a += d;
          break;
        }
        default: {
          const d = (u & (He | Pt)) === 0, f = new nt(
            W(l, a),
            null,
            // left
            (u & Pt) === Pt ? e.readLeftID() : null,
            // origin
            null,
            // right
            (u & He) === He ? e.readRightID() : null,
            // right origin
            d ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null,
            // parent
            d && (u & _s) === _s ? e.readString() : null,
            // parentSub
            Yu(e, u)
            // item content
          );
          o[c] = f, a += f.length;
        }
      }
    }
  }
  return n;
}, Bm = (e, t, n) => {
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
  const l = new Cu(), a = /* @__PURE__ */ new Map(), c = (h, p) => {
    const m = a.get(h);
    (m == null || m > p) && a.set(h, p);
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
      const p = qe(d, u.id.client, () => mt(t, u.id.client)) - u.id.clock;
      if (p < 0)
        s.push(u), c(u.id.client, u.id.clock - 1), f();
      else {
        const m = u.getMissing(e, t);
        if (m !== null) {
          s.push(u);
          const y = n.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (y.refs.length === y.i)
            c(
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
    const h = new Xi();
    return ku(h, l, /* @__PURE__ */ new Map()), Q(h.restEncoder, 0), { missing: a, update: h.toUint8Array() };
  }
  return null;
}, Fm = (e, t) => ku(e, t.doc.store, t.beforeState), Hm = (e, t, n, s = new Si(e)) => it(t, (i) => {
  i.local = !1;
  let r = !1;
  const o = i.doc, l = o.store, a = $m(s, o), c = Bm(i, l, a), u = l.pendingStructs;
  if (u) {
    for (const [f, h] of u.missing)
      if (h < mt(l, f)) {
        r = !0;
        break;
      }
    if (c) {
      for (const [f, h] of c.missing) {
        const p = u.missing.get(f);
        (p == null || p > h) && u.missing.set(f, h);
      }
      u.update = va([u.update, c.update]);
    }
  } else
    l.pendingStructs = c;
  const d = da(s, i, l);
  if (l.pendingDs) {
    const f = new Si(Mo(l.pendingDs));
    lt(f.restDecoder);
    const h = da(f, i, l);
    d && h ? l.pendingDs = va([d, h]) : l.pendingDs = d || h;
  } else
    l.pendingDs = d;
  if (r) {
    const f = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, Gr(i.doc, f);
  }
}, n, !1), Gr = (e, t, n, s = Si) => {
  const i = Mo(t);
  Hm(i, e, n, new s(i));
};
class Um {
  constructor() {
    this.l = [];
  }
}
const fa = () => new Um(), ha = (e, t) => e.l.push(t), pa = (e, t) => {
  const n = e.l, s = n.length;
  e.l = n.filter((i) => t !== i), s === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, xu = (e, t, n) => Ro(e.l, [t, n]);
class $n {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, n) {
    this.client = t, this.clock = n;
  }
}
const Ws = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, W = (e, t) => new $n(e, t), Cs = (e) => {
  for (const [t, n] of e.doc.share.entries())
    if (n === e)
      return t;
  throw Vt();
}, Es = (e, t) => {
  for (; t !== null; ) {
    if (t.parent === e)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
};
class Ci {
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
class Vm {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, n, s = 0) {
    this.type = t, this.index = n, this.assoc = s;
  }
}
const jm = (e, t, n = 0) => new Vm(e, t, n), Ks = (e, t, n) => {
  let s = null, i = null;
  return e._item === null ? i = Cs(e) : s = W(e._item.id.client, e._item.id.clock), new Ci(s, i, t, n);
}, Sr = (e, t, n = 0) => {
  let s = e._start;
  if (n < 0) {
    if (t === 0)
      return Ks(e, null, n);
    t--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > t)
        return Ks(e, W(s.id.client, s.id.clock + t), n);
      t -= s.length;
    }
    if (s.right === null && n < 0)
      return Ks(e, s.lastId, n);
    s = s.right;
  }
  return Ks(e, null, n);
}, zm = (e, t) => {
  const n = Bn(e, t), s = t.clock - n.id.clock;
  return {
    item: n,
    diff: s
  };
}, Wm = (e, t, n = !0) => {
  const s = t.store, i = e.item, r = e.type, o = e.tname, l = e.assoc;
  let a = null, c = 0;
  if (i !== null) {
    if (mt(s, i.client) <= i.clock)
      return null;
    const u = n ? to(s, i) : zm(s, i), d = u.item;
    if (!(d instanceof nt))
      return null;
    if (a = /** @type {AbstractType<any>} */
    d.parent, a._item === null || !a._item.deleted) {
      c = d.deleted || !d.countable ? 0 : u.diff + (l >= 0 ? 0 : 1);
      let f = d.left;
      for (; f !== null; )
        !f.deleted && f.countable && (c += f.length), f = f.left;
    }
  } else {
    if (o !== null)
      a = t.get(o);
    else if (r !== null) {
      if (mt(s, r.client) <= r.clock)
        return null;
      const { item: u } = n ? to(s, r) : { item: Bn(s, r) };
      if (u instanceof nt && u.content instanceof ge)
        a = u.content.type;
      else
        return null;
    } else
      throw Vt();
    l >= 0 ? c = a._length : c = 0;
  }
  return jm(a, c, e.assoc);
};
class $o {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, n) {
    this.ds = t, this.sv = n;
  }
}
const Su = (e, t) => new $o(e, t), Cr = (e) => Su(Dm(e.store), Qi(e.store)), mn = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Qn(t.ds, e.id), Xr = (e, t) => {
  const n = qe(e.meta, Xr, kn), s = e.doc.store;
  n.has(t) || (t.sv.forEach((i, r) => {
    i < mt(s, r) && Ft(e, W(r, i));
  }), ln(e, t.ds, (i) => {
  }), n.add(t));
};
class Cu {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Qi = (e) => {
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
}, Eu = (e, t) => {
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
  let o = je(t / (r + i.length - 1) * s);
  for (; n <= s; ) {
    if (i = e[o], r = i.id.clock, r <= t) {
      if (t < r + i.length)
        return o;
      n = o + 1;
    } else
      s = o - 1;
    o = je((n + s) / 2);
  }
  throw Vt();
}, Km = (e, t) => {
  const n = e.clients.get(t.client);
  return n[he(n, t.clock)];
}, Bn = (
  /** @type {function(StructStore,ID):Item} */
  Km
), Qr = (e, t, n) => {
  const s = he(t, n), i = t[s];
  return i.id.clock < n && i instanceof nt ? (t.splice(s + 1, 0, Di(e, i, n - i.id.clock)), s + 1) : s;
}, Ft = (e, t) => {
  const n = (
    /** @type {Array<Item>} */
    e.doc.store.clients.get(t.client)
  );
  return n[Qr(e, n, t.clock)];
}, ga = (e, t, n) => {
  const s = t.clients.get(n.client), i = he(s, n.clock), r = s[i];
  return n.clock !== r.id.clock + r.length - 1 && r.constructor !== ee && s.splice(i + 1, 0, Di(e, r, n.clock - r.id.clock + 1)), r;
}, qm = (e, t, n) => {
  const s = (
    /** @type {Array<GC|Item>} */
    e.clients.get(t.id.client)
  );
  s[he(s, t.id.clock)] = n;
}, Au = (e, t, n, s, i) => {
  if (s === 0)
    return;
  const r = n + s;
  let o = Qr(e, t, n), l;
  do
    l = t[o++], r < l.id.clock + l.length && Qr(e, t, r), i(l);
  while (o < t.length && t[o].id.clock < r);
};
class Jm {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, n, s) {
    this.doc = t, this.deleteSet = new Xn(), this.beforeState = Qi(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const ma = (e, t) => t.deleteSet.clients.size === 0 && !dg(t.afterState, (n, s) => t.beforeState.get(s) !== n) ? !1 : (Po(t.deleteSet), Fm(e, t), Lo(e, t.deleteSet), !0), wa = (e, t, n) => {
  const s = t._item;
  (s === null || s.id.clock < (e.beforeState.get(s.id.client) || 0) && !s.deleted) && qe(e.changed, t, kn).add(n);
}, li = (e, t) => {
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
}, Ym = (e, t, n) => {
  for (const [s, i] of e.clients.entries()) {
    const r = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let o = i.length - 1; o >= 0; o--) {
      const l = i[o], a = l.clock + l.len;
      for (let c = he(r, l.clock), u = r[c]; c < r.length && u.id.clock < a; u = r[++c]) {
        const d = r[c];
        if (l.clock + l.len <= d.id.clock)
          break;
        d instanceof nt && d.deleted && !d.keep && n(d) && d.gc(t, !1);
      }
    }
  }
}, Gm = (e, t) => {
  e.clients.forEach((n, s) => {
    const i = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r], l = jn(i.length - 1, 1 + he(i, o.clock + o.len - 1));
      for (let a = l, c = i[a]; a > 0 && c.id.clock >= o.clock; c = i[a])
        a -= 1 + li(i, a);
    }
  });
}, Tu = (e, t) => {
  if (t < e.length) {
    const n = e[t], s = n.doc, i = s.store, r = n.deleteSet, o = n._mergeStructs;
    try {
      Po(r), n.afterState = Qi(n.doc.store), s.emit("beforeObserverCalls", [n, s]);
      const l = [];
      n.changed.forEach(
        (a, c) => l.push(() => {
          (c._item === null || !c._item.deleted) && c._callObserver(n, a);
        })
      ), l.push(() => {
        n.changedParentTypes.forEach((a, c) => {
          c._dEH.l.length > 0 && (c._item === null || !c._item.deleted) && (a = a.filter(
            (u) => u.target._item === null || !u.target._item.deleted
          ), a.forEach((u) => {
            u.currentTarget = c, u._path = null;
          }), a.sort((u, d) => u.path.length - d.path.length), xu(c._dEH, a, n));
        });
      }), l.push(() => s.emit("afterTransaction", [n, s])), Ro(l, []), n._needFormattingCleanup && mw(n);
    } finally {
      s.gc && Ym(r, i, s.gcFilter), Gm(r, i), n.afterState.forEach((u, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== u) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = rn(he(h, f), 1);
          for (let m = h.length - 1; m >= p; )
            m -= 1 + li(h, m);
        }
      });
      for (let u = o.length - 1; u >= 0; u--) {
        const { client: d, clock: f } = o[u].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = he(h, f);
        p + 1 < h.length && li(h, p + 1) > 1 || p > 0 && li(h, p);
      }
      if (!n.local && n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID) && (Am(Io, hu, "[yjs] ", pu, gu, "Changed the client-id because another client seems to be using it."), s.clientID = _u()), s.emit("afterTransactionCleanup", [n, s]), s._observers.has("update")) {
        const u = new Nm();
        ma(u, n) && s.emit("update", [u.toUint8Array(), n.origin, s, n]);
      }
      if (s._observers.has("updateV2")) {
        const u = new Xi();
        ma(u, n) && s.emit("updateV2", [u.toUint8Array(), n.origin, s, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: a, subdocsRemoved: c } = n;
      (l.size > 0 || c.size > 0 || a.size > 0) && (l.forEach((u) => {
        u.clientID = s.clientID, u.collectionid == null && (u.collectionid = s.collectionid), s.subdocs.add(u);
      }), c.forEach((u) => s.subdocs.delete(u)), s.emit("subdocs", [{ loaded: a, added: l, removed: c }, s, n]), c.forEach((u) => u.destroy())), e.length <= t + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, e])) : Tu(e, t + 1);
    }
  }
}, it = (e, t, n = null, s = !0) => {
  const i = e._transactionCleanups;
  let r = !1, o = null;
  e._transaction === null && (r = !0, e._transaction = new Jm(e, n, s), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
  try {
    o = t(e._transaction);
  } finally {
    if (r) {
      const l = e._transaction === i[0];
      e._transaction = null, l && Tu(i, 0);
    }
  }
  return o;
};
class Xm {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, n) {
    this.insertions = n, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const ba = (e, t, n) => {
  ln(e, n.deletions, (s) => {
    s instanceof nt && t.scope.some((i) => i === e.doc || Es(
      /** @type {AbstractType<any>} */
      i,
      s
    )) && Vo(s, !1);
  });
}, ya = (e, t, n) => {
  let s = null;
  const i = e.doc, r = e.scope;
  it(i, (l) => {
    for (; t.length > 0 && e.currStackItem === null; ) {
      const a = i.store, c = (
        /** @type {StackItem} */
        t.pop()
      ), u = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      ln(l, c.insertions, (h) => {
        if (h instanceof nt) {
          if (h.redone !== null) {
            let { item: p, diff: m } = to(a, h.id);
            m > 0 && (p = Ft(l, W(p.id.client, p.id.clock + m))), h = p;
          }
          !h.deleted && r.some((p) => p === l.doc || Es(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), ln(l, c.deletions, (h) => {
        h instanceof nt && r.some((p) => p === l.doc || Es(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Qn(c.insertions, h.id) && u.add(h);
      }), u.forEach((h) => {
        f = Ju(l, h, u, c.insertions, e.ignoreRemoteMapChanges, e) !== null || f;
      });
      for (let h = d.length - 1; h >= 0; h--) {
        const p = d[h];
        e.deleteFilter(p) && (p.delete(l), f = !0);
      }
      e.currStackItem = f ? c : null;
    }
    l.changed.forEach((a, c) => {
      a.has(null) && c._searchMarker && (c._searchMarker.length = 0);
    }), s = l;
  }, e);
  const o = e.currStackItem;
  if (o != null) {
    const l = s.changedParentTypes;
    e.emit("stack-item-popped", [{ stackItem: o, type: n, changedParentTypes: l, origin: e }, e]), e.currStackItem = null;
  }
  return o;
};
class Mu extends tu {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(t, {
    captureTimeout: n = 500,
    captureTransaction: s = (a) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: r = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = (
      /** @type {Doc} */
      jr(t) ? t[0].doc : t instanceof An ? t : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(t), this.deleteFilter = i, r.add(this), this.trackedOrigins = r, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (a) => {
      if (!this.captureTransaction(a) || !this.scope.some((y) => a.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(a.origin) && (!a.origin || !this.trackedOrigins.has(a.origin.constructor)))
        return;
      const c = this.undoing, u = this.redoing, d = c ? this.redoStack : this.undoStack;
      c ? this.stopCapturing() : u || this.clear(!1, !0);
      const f = new Xn();
      a.afterState.forEach((y, b) => {
        const M = a.beforeState.get(b) || 0, R = y - M;
        R > 0 && Ss(f, b, M, R);
      });
      const h = Gg();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !c && !u) {
        const y = d[d.length - 1];
        y.deletions = Yr([y.deletions, a.deleteSet]), y.insertions = Yr([y.insertions, f]);
      } else
        d.push(new Xm(a.deleteSet, f)), p = !0;
      !c && !u && (this.lastChange = h), ln(
        a,
        a.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof nt && this.scope.some((b) => b === a.doc || Es(
            /** @type {AbstractType<any>} */
            b,
            y
          )) && Vo(y, !0);
        }
      );
      const m = [{ stackItem: d[d.length - 1], origin: a.origin, type: c ? "redo" : "undo", changedParentTypes: a.changedParentTypes }, this];
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
    t = jr(t) ? t : [t], t.forEach((s) => {
      n.has(s) || (n.add(s), (s instanceof vt ? s.doc !== this.doc : s !== this.doc) && wu("[yjs#509] Not same Y.Doc"), this.scope.push(s));
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
      t && (this.undoStack.forEach((i) => ba(s, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => ba(s, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: n }]);
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
      t = ya(this, this.undoStack, "undo");
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
      t = ya(this, this.redoStack, "redo");
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
function* Qm(e) {
  const t = lt(e.restDecoder);
  for (let n = 0; n < t; n++) {
    const s = lt(e.restDecoder), i = e.readClient();
    let r = lt(e.restDecoder);
    for (let o = 0; o < s; o++) {
      const l = e.readInfo();
      if (l === 10) {
        const a = lt(e.restDecoder);
        yield new re(W(i, r), a), r += a;
      } else if ((Ji & l) !== 0) {
        const a = (l & (He | Pt)) === 0, c = new nt(
          W(i, r),
          null,
          // left
          (l & Pt) === Pt ? e.readLeftID() : null,
          // origin
          null,
          // right
          (l & He) === He ? e.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          a ? e.readParentInfo() ? e.readString() : e.readLeftID() : null,
          // parent
          a && (l & _s) === _s ? e.readString() : null,
          // parentSub
          Yu(e, l)
          // item content
        );
        yield c, r += c.length;
      } else {
        const a = e.readLen();
        yield new ee(W(i, r), a), r += a;
      }
    }
  }
}
class Zm {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, n) {
    this.gen = Qm(t), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
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
class tw {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const ew = (e, t) => {
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
}, va = (e, t = Si, n = Xi) => {
  if (e.length === 1)
    return e[0];
  const s = e.map((u) => new t(Mo(u)));
  let i = s.map((u) => new Zm(u, !0)), r = null;
  const o = new n(), l = new tw(o);
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
        p > 0 && (r.struct.constructor === re ? r.struct.length -= p : f = ew(f, p)), r.struct.mergeWith(
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
  r !== null && (rs(l, r.struct, r.offset), r = null), nw(l);
  const a = s.map((u) => Om(u)), c = Yr(a);
  return Lo(o, c), o.toUint8Array();
}, Du = (e) => {
  e.written > 0 && (e.clientStructs.push({ written: e.written, restEncoder: oe(e.encoder.restEncoder) }), e.encoder.restEncoder = Hs(), e.written = 0);
}, rs = (e, t, n) => {
  e.written > 0 && e.currClient !== t.id.client && Du(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), Q(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, nw = (e) => {
  Du(e);
  const t = e.encoder.restEncoder;
  Q(t, e.clientStructs.length);
  for (let n = 0; n < e.clientStructs.length; n++) {
    const s = e.clientStructs[n];
    Q(t, s.written), Yi(t, s.restEncoder);
  }
}, _a = "You must not compute changes after the event-handler fired.";
class Zi {
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
    return this._path || (this._path = sw(this.currentTarget, this.target));
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
        throw on(_a);
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
            let a = r.left;
            for (; a !== null && this.adds(a); )
              a = a.left;
            if (this.deletes(r))
              if (a !== null && this.deletes(a))
                o = "delete", l = br(a.content.getContent());
              else
                return;
            else
              a !== null && this.deletes(a) ? (o = "update", l = br(a.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(r))
            o = "delete", l = br(
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
        throw on(_a);
      const n = this.target, s = kn(), i = kn(), r = [];
      if (t = {
        added: s,
        deleted: i,
        delta: r,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let l = null;
        const a = () => {
          l && r.push(l);
        };
        for (let c = n._start; c !== null; c = c.right)
          c.deleted ? this.deletes(c) && !this.adds(c) && ((l === null || l.delete === void 0) && (a(), l = { delete: 0 }), l.delete += c.length, i.add(c)) : this.adds(c) ? ((l === null || l.insert === void 0) && (a(), l = { insert: [] }), l.insert = l.insert.concat(c.content.getContent()), s.add(c)) : ((l === null || l.retain === void 0) && (a(), l = { retain: 0 }), l.retain += c.length);
        l !== null && l.retain === void 0 && a();
      }
      this._changes = t;
    }
    return (
      /** @type {any} */
      t
    );
  }
}
const sw = (e, t) => {
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
  wu("Invalid access: Add Yjs type to a document before reading data.");
}, Ou = 80;
let Bo = 0;
class iw {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, n) {
    t.marker = !0, this.p = t, this.index = n, this.timestamp = Bo++;
  }
}
const rw = (e) => {
  e.timestamp = Bo++;
}, Ru = (e, t, n) => {
  e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = Bo++;
}, ow = (e, t, n) => {
  if (e.length >= Ou) {
    const s = e.reduce((i, r) => i.timestamp < r.timestamp ? i : r);
    return Ru(s, t, n), s;
  } else {
    const s = new iw(t, n);
    return e.push(s), s;
  }
}, tr = (e, t) => {
  if (e._start === null || t === 0 || e._searchMarker === null)
    return null;
  const n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((r, o) => ii(t - r.index) < ii(t - o.index) ? r : o);
  let s = e._start, i = 0;
  for (n !== null && (s = n.p, i = n.index, rw(n)); s.right !== null && i < t; ) {
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
  return n !== null && ii(n.index - i) < /** @type {YText|YArray<any>} */
  s.parent.length / Ou ? (Ru(n, s, i), n) : ow(e._searchMarker, s, i);
}, As = (e, t, n) => {
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
}, er = (e, t, n) => {
  const s = e, i = t.changedParentTypes;
  for (; qe(i, e, () => []).push(n), e._item !== null; )
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  xu(s._eH, n, t);
};
class vt {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = fa(), this._dEH = fa(), this._searchMarker = null;
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
    throw ce();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw ce();
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
    ha(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    ha(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    pa(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    pa(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Iu = (e, t, n) => {
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
}, Nu = (e) => {
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
}, Pu = (e, t) => {
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
}, Ts = (e, t) => {
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
  return Ts(e, (s, i) => {
    n.push(t(s, i, e));
  }), n;
}, lw = (e) => {
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
}, $u = (e, t) => {
  e.doc ?? At();
  const n = tr(e, t);
  let s = e._start;
  for (n !== null && (s = n.p, t -= n.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t < s.length)
        return s.content.getContent()[t];
      t -= s.length;
    }
}, Ei = (e, t, n, s) => {
  let i = n;
  const r = e.doc, o = r.clientID, l = r.store, a = n === null ? t._start : n.right;
  let c = [];
  const u = () => {
    c.length > 0 && (i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new Cn(c)), i.integrate(e, 0), c = []);
  };
  s.forEach((d) => {
    if (d === null)
      c.push(d);
    else
      switch (d.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          c.push(d);
          break;
        default:
          switch (u(), d.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new Us(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(e, 0);
              break;
            case An:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new Vs(
                /** @type {Doc} */
                d
              )), i.integrate(e, 0);
              break;
            default:
              if (d instanceof vt)
                i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new ge(d)), i.integrate(e, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, Bu = () => on("Length exceeded!"), Fu = (e, t, n, s) => {
  if (n > t._length)
    throw Bu();
  if (n === 0)
    return t._searchMarker && As(t._searchMarker, n, s.length), Ei(e, t, null, s);
  const i = n, r = tr(t, n);
  let o = t._start;
  for (r !== null && (o = r.p, n -= r.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && Ft(e, W(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return t._searchMarker && As(t._searchMarker, i, s.length), Ei(e, t, o, s);
}, aw = (e, t, n) => {
  let i = (t._searchMarker || []).reduce((r, o) => o.index > r.index ? o : r, { index: 0, p: t._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Ei(e, t, i, n);
}, Hu = (e, t, n, s) => {
  if (s === 0)
    return;
  const i = n, r = s, o = tr(t, n);
  let l = t._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && Ft(e, W(l.id.client, l.id.clock + n)), n -= l.length);
  for (; s > 0 && l !== null; )
    l.deleted || (s < l.length && Ft(e, W(l.id.client, l.id.clock + s)), l.delete(e), s -= l.length), l = l.right;
  if (s > 0)
    throw Bu();
  t._searchMarker && As(
    t._searchMarker,
    i,
    -r + s
    /* in case we remove the above exception */
  );
}, Ai = (e, t, n) => {
  const s = t._map.get(n);
  s !== void 0 && s.delete(e);
}, Fo = (e, t, n, s) => {
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
        l = new Us(
          /** @type {Uint8Array} */
          s
        );
        break;
      case An:
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
  new nt(W(o, mt(r.store, o)), i, i && i.lastId, null, null, t, n, l).integrate(e, 0);
}, Ho = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Uu = (e) => {
  const t = {};
  return e.doc ?? At(), e._map.forEach((n, s) => {
    n.deleted || (t[s] = n.content.getContent()[n.length - 1]);
  }), t;
}, Vu = (e, t) => {
  e.doc ?? At();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted;
}, cw = (e, t) => {
  const n = {};
  return e._map.forEach((s, i) => {
    let r = s;
    for (; r !== null && (!t.sv.has(r.id.client) || r.id.clock >= (t.sv.get(r.id.client) || 0)); )
      r = r.left;
    r !== null && mn(r, t) && (n[i] = r.content.getContent()[r.length - 1]);
  }), n;
}, qs = (e) => (e.doc ?? At(), Tm(
  e._map.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
));
class uw extends Zi {
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
    super._callObserver(t, n), er(this, t, new uw(this, t));
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
      Fu(
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
      aw(
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
      Hu(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return $u(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Nu(this);
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
    return Iu(this, t, n);
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
    Ts(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return lw(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Pw);
  }
}
const dw = (e) => new Fn();
class fw extends Zi {
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
    er(this, t, new fw(this, t, n));
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
    return [...qs(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return xr(
      qs(this),
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
    return xr(
      qs(this),
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
    return xr(
      qs(this),
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
      Ai(n, this, t);
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
      Fo(
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
      Ho(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return Vu(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? it(this.doc, (t) => {
      this.forEach(function(n, s, i) {
        Ai(t, i, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Lw);
  }
}
const hw = (e) => new Kn(), tn = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && im(e, t);
class Zr {
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
const ka = (e, t, n) => {
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
}, Js = (e, t, n, s) => {
  const i = /* @__PURE__ */ new Map(), r = s ? tr(t, n) : null;
  if (r) {
    const o = new Zr(r.p.left, r.p, r.index, i);
    return ka(e, o, n - r.index);
  } else {
    const o = new Zr(null, t._start, 0, i);
    return ka(e, o, n);
  }
}, ju = (e, t, n, s) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === bt && tn(
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
    const a = n.left, c = n.right, u = new nt(W(r, mt(i.store, r)), a, a && a.lastId, c, c && c.id, t, null, new bt(l, o));
    u.integrate(e, 0), n.right = u, n.forward();
  });
}, Zn = (e, t) => {
  const { key: n, value: s } = t;
  s === null ? e.delete(n) : e.set(n, s);
}, zu = (e, t) => {
  for (; e.right !== null; ) {
    if (!(e.right.deleted || e.right.content.constructor === bt && tn(
      t[
        /** @type {ContentFormat} */
        e.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      e.right.content.value
    ))) break;
    e.forward();
  }
}, Wu = (e, t, n, s) => {
  const i = e.doc, r = i.clientID, o = /* @__PURE__ */ new Map();
  for (const l in s) {
    const a = s[l], c = n.currentAttributes.get(l) ?? null;
    if (!tn(c, a)) {
      o.set(l, c);
      const { left: u, right: d } = n;
      n.right = new nt(W(r, mt(i.store, r)), u, u && u.lastId, d, d && d.id, t, null, new bt(l, a)), n.right.integrate(e, 0), n.forward();
    }
  }
  return o;
}, Er = (e, t, n, s, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const r = e.doc, o = r.clientID;
  zu(n, i);
  const l = Wu(e, t, n, i), a = s.constructor === String ? new pe(
    /** @type {string} */
    s
  ) : s instanceof vt ? new ge(s) : new Tn(s);
  let { left: c, right: u, index: d } = n;
  t._searchMarker && As(t._searchMarker, n.index, a.getLength()), u = new nt(W(o, mt(r.store, o)), c, c && c.lastId, u, u && u.id, t, null, a), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), ju(e, t, n, l);
}, xa = (e, t, n, s, i) => {
  const r = e.doc, o = r.clientID;
  zu(n, i);
  const l = Wu(e, t, n, i);
  t: for (; n.right !== null && (s > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === bt)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case bt: {
          const { key: a, value: c } = (
            /** @type {ContentFormat} */
            n.right.content
          ), u = i[a];
          if (u !== void 0) {
            if (tn(u, c))
              l.delete(a);
            else {
              if (s === 0)
                break t;
              l.set(a, c);
            }
            n.right.delete(e);
          } else
            n.currentAttributes.set(a, c);
          break;
        }
        default:
          s < n.right.length && Ft(e, W(n.right.id.client, n.right.id.clock + s)), s -= n.right.length;
          break;
      }
    n.forward();
  }
  if (s > 0) {
    let a = "";
    for (; s > 0; s--)
      a += `
`;
    n.right = new nt(W(o, mt(r.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new pe(a)), n.right.integrate(e, 0), n.forward();
  }
  ju(e, t, n, l);
}, Ku = (e, t, n, s, i) => {
  let r = t;
  const o = ae();
  for (; r && (!r.countable || r.deleted); ) {
    if (!r.deleted && r.content.constructor === bt) {
      const c = (
        /** @type {ContentFormat} */
        r.content
      );
      o.set(c.key, c);
    }
    r = r.right;
  }
  let l = 0, a = !1;
  for (; t !== r; ) {
    if (n === t && (a = !0), !t.deleted) {
      const c = t.content;
      switch (c.constructor) {
        case bt: {
          const { key: u, value: d } = (
            /** @type {ContentFormat} */
            c
          ), f = s.get(u) ?? null;
          (o.get(u) !== c || f === d) && (t.delete(e), l++, !a && (i.get(u) ?? null) === d && f !== d && (f === null ? i.delete(u) : i.set(u, f))), !a && !t.deleted && Zn(
            i,
            /** @type {ContentFormat} */
            c
          );
          break;
        }
      }
    }
    t = /** @type {Item} */
    t.right;
  }
  return l;
}, pw = (e, t) => {
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
}, gw = (e) => {
  let t = 0;
  return it(
    /** @type {Doc} */
    e.doc,
    (n) => {
      let s = (
        /** @type {Item} */
        e._start
      ), i = e._start, r = ae();
      const o = Vr(r);
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
              t += Ku(n, s, i, r, o), r = Vr(o), s = i;
              break;
          }
        i = i.right;
      }
    }
  ), t;
}, mw = (e) => {
  const t = /* @__PURE__ */ new Set(), n = e.doc;
  for (const [s, i] of e.afterState.entries()) {
    const r = e.beforeState.get(s) || 0;
    i !== r && Au(
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
      i.content.constructor === bt ? t.add(r) : pw(s, i);
    });
    for (const i of t)
      gw(i);
  });
}, Sa = (e, t, n) => {
  const s = n, i = Vr(t.currentAttributes), r = t.right;
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
  r && Ku(e, r, t.right, i, t.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return o._searchMarker && As(o._searchMarker, t.index, -s + n), t;
};
class ww extends Zi {
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
        const a = {};
        let c = "", u = 0, d = 0;
        const f = () => {
          if (l !== null) {
            let h = null;
            switch (l) {
              case "delete":
                d > 0 && (h = { delete: d }), d = 0;
                break;
              case "insert":
                (typeof c == "object" || c.length > 0) && (h = { insert: c }, i.size > 0 && (h.attributes = {}, i.forEach((p, m) => {
                  p !== null && (h.attributes[m] = p);
                }))), c = "";
                break;
              case "retain":
                u > 0 && (h = { retain: u }, nm(a) || (h.attributes = tm({}, a))), u = 0;
                break;
            }
            h && n.push(h), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case ge:
            case Tn:
              this.adds(o) ? this.deletes(o) || (f(), l = "insert", c = o.content.getContent()[0], f()) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), d += 1) : o.deleted || (l !== "retain" && (f(), l = "retain"), u += 1);
              break;
            case pe:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (f(), l = "insert"), c += /** @type {ContentString} */
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
                  tn(m, p) ? p !== null && o.delete(s) : (l === "retain" && f(), tn(p, r.get(h) ?? null) ? delete a[h] : a[h] = p);
                }
              } else if (this.deletes(o)) {
                r.set(h, p);
                const m = i.get(h) ?? null;
                tn(m, p) || (l === "retain" && f(), a[h] = m);
              } else if (!o.deleted) {
                r.set(h, p);
                const m = a[h];
                m !== void 0 && (tn(m, p) ? m !== null && o.delete(s) : (l === "retain" && f(), p === null ? delete a[h] : a[h] = p));
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
class an extends vt {
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
    return new an();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const t = new an();
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
    const s = new ww(this, t, n);
    er(this, t, s), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
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
      const i = new Zr(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && r === t.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && Er(s, this, i, l, o.attributes || {});
        } else o.retain !== void 0 ? xa(s, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && Sa(s, i, o.delete);
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
    let l = "", a = this._start;
    function c() {
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
      for (; a !== null; ) {
        if (mn(a, t) || n !== void 0 && mn(a, n))
          switch (a.content.constructor) {
            case pe: {
              const d = r.get("ychange");
              t !== void 0 && !mn(a, t) ? (d === void 0 || d.user !== a.id.client || d.type !== "removed") && (c(), r.set("ychange", s ? s("removed", a.id) : { type: "removed" })) : n !== void 0 && !mn(a, n) ? (d === void 0 || d.user !== a.id.client || d.type !== "added") && (c(), r.set("ychange", s ? s("added", a.id) : { type: "added" })) : d !== void 0 && (c(), r.delete("ychange")), l += /** @type {ContentString} */
              a.content.str;
              break;
            }
            case ge:
            case Tn: {
              c();
              const d = {
                insert: a.content.getContent()[0]
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
              mn(a, t) && (c(), Zn(
                r,
                /** @type {ContentFormat} */
                a.content
              ));
              break;
          }
        a = a.right;
      }
      c();
    };
    return t || n ? it(o, (d) => {
      t && Xr(d, t), n && Xr(d, n), u();
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
      const o = Js(r, this, t, !s);
      s || (s = {}, o.currentAttributes.forEach((l, a) => {
        s[a] = l;
      })), Er(r, this, o, n, s);
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
      const o = Js(r, this, t, !s);
      Er(r, this, o, n, s || {});
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
      Sa(i, Js(i, this, t, !0), n);
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
      const o = Js(r, this, t, !1);
      o.right !== null && xa(r, this, o, n, s);
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
      Ai(n, this, t);
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
      Fo(s, this, t, n);
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
      Ho(this, t)
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
    return Uu(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef($w);
  }
}
const bw = (e) => new an();
class Ar {
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
    return new Ar(this, t);
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
    const s = new Ar(this, (i) => i.nodeName && i.nodeName.toUpperCase() === t).next();
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
    return t = t.toUpperCase(), xn(new Ar(this, (n) => n.nodeName && n.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    er(this, t, new _w(this, n, t));
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
    return s !== void 0 && s._createAssociation(i, this), Ts(this, (r) => {
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
      Fu(s, this, t, n);
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
        Ei(s, this, i, n);
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
      Hu(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Nu(this);
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
    return $u(this, t);
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
    return Iu(this, t, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    Ts(this, t);
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
    t.writeTypeRef(Fw);
  }
}
const yw = (e) => new Sn();
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
    return em(n, (s, i) => {
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
      const a = s[l];
      n.push(a + '="' + t[a] + '"');
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
      Ai(n, this, t);
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
      Fo(s, this, t, n);
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
      Ho(this, t)
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
      Vu(this, t)
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
      t ? cw(this, t) : Uu(this)
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
    return Ts(this, (o) => {
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
    t.writeTypeRef(Bw), t.writeKey(this.nodeName);
  }
}
const vw = (e) => new Ct(e.readKey());
class _w extends Zi {
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
class Ti extends Kn {
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
    return new Ti(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const t = new Ti(this.hookName);
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
    t.writeTypeRef(Hw), t.writeKey(this.hookName);
  }
}
const kw = (e) => new Ti(e.readKey());
class Ut extends an {
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
    t.writeTypeRef(Uw);
  }
}
const xw = (e) => new Ut();
class Uo {
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
    throw ce();
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
    throw ce();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    throw ce();
  }
}
const Sw = 0;
class ee extends Uo {
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
    n > 0 && (this.id.clock += n, this.length -= n), Eu(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(Sw), t.writeLen(this.length - n);
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
    throw ce();
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
const Cw = (e) => new Us(e.readBuf());
class Ms {
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
    return new Ms(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const n = new Ms(this.len - t);
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
    Ss(t.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const Ew = (e) => new Ms(e.readLen()), qu = (e, t) => new An({ guid: e, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
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
    return new Vs(qu(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(t) {
    throw ce();
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
const Aw = (e) => new Vs(qu(e.readString(), e.readAny()));
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
    throw ce();
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
const Tw = (e) => new Tn(e.readJSON());
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
    throw ce();
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
const Mw = (e) => new bt(e.readKey(), e.readJSON());
class Mi {
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
    return new Mi(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const n = new Mi(this.arr.slice(t));
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
const Dw = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++) {
    const i = e.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Mi(n);
}, Ow = xi("node_env") === "development";
class Cn {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t, Ow && cu(t);
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
const Rw = (e) => {
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
const Iw = (e) => new pe(e.readString()), Nw = [
  dw,
  hw,
  bw,
  vw,
  yw,
  kw,
  xw
], Pw = 0, Lw = 1, $w = 2, Bw = 3, Fw = 4, Hw = 5, Uw = 6;
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
    throw ce();
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
const Vw = (e) => new ge(Nw[e.readTypeRef()](e)), to = (e, t) => {
  let n = t, s = 0, i;
  do
    s > 0 && (n = W(n.client, n.clock + s)), i = Bn(e, n), s = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof nt);
  return {
    item: i,
    diff: s
  };
}, Vo = (e, t) => {
  for (; e !== null && e.keep !== t; )
    e.keep = t, e = /** @type {AbstractType<any>} */
    e.parent._item;
}, Di = (e, t, n) => {
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
}, Ca = (e, t) => hg(
  e,
  /** @param {StackItem} s */
  (n) => Qn(n.deletions, t)
), Ju = (e, t, n, s, i, r) => {
  const o = e.doc, l = o.store, a = o.clientID, c = t.redone;
  if (c !== null)
    return Ft(e, c);
  let u = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), d = null, f;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!n.has(u) || Ju(e, u, n, s, i, r) === null))
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
    for (d = t; d !== null && d.right !== null && (d.right.redone || Qn(s, d.right.id) || Ca(r.undoStack, d.right.id) || Ca(r.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = Ft(e, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(t.parentSub) || null;
  const p = mt(l, a), m = W(a, p), y = new nt(
    m,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    t.parentSub,
    t.content.copy()
  );
  return t.redone = m, Vo(y, !0), y.integrate(e, 0), y;
};
class nt extends Uo {
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
  constructor(t, n, s, i, r, o, l, a) {
    super(t, a.getLength()), this.origin = s, this.left = n, this.right = i, this.rightOrigin = r, this.parent = o, this.parentSub = l, this.redone = null, this.content = a, this.info = this.content.isCountable() ? ea : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & vr) > 0 !== t && (this.info ^= vr);
  }
  get marker() {
    return (this.info & vr) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & ta) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= ta);
  }
  get countable() {
    return (this.info & ea) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & yr) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= yr);
  }
  markDeleted() {
    this.info |= yr;
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
    if (this.origin && (this.left = ga(t, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Ft(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === ee || this.right && this.right.constructor === ee)
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
    if (n > 0 && (this.id.clock += n, this.left = ga(t, t.doc.store, W(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
          if (o.add(i), r.add(i), Ws(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              s = i, r.clear();
            else if (Ws(this.rightOrigin, i.rightOrigin))
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Eu(t.doc.store, this), this.content.integrate(t, this), wa(
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
    if (this.constructor === t.constructor && Ws(t.origin, this.lastId) && this.right === t && Ws(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), Ss(t.deleteSet, this.id.client, this.id.clock, this.length), wa(t, n, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, n) {
    if (!this.deleted)
      throw Vt();
    this.content.gc(t), n ? qm(t, this, new ee(this.id, this.length)) : this.content = new Ms(this.length);
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
    const s = n > 0 ? W(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, r = this.parentSub, o = this.content.getRef() & Ji | (s === null ? 0 : Pt) | // origin is defined
    (i === null ? 0 : He) | // right origin is defined
    (r === null ? 0 : _s);
    if (t.writeInfo(o), s !== null && t.writeLeftID(s), i !== null && t.writeRightID(i), s === null && i === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const a = l._item;
        if (a === null) {
          const c = Cs(l);
          t.writeParentInfo(!0), t.writeString(c);
        } else
          t.writeParentInfo(!1), t.writeLeftID(a.id);
      } else l.constructor === String ? (t.writeParentInfo(!0), t.writeString(l)) : l.constructor === $n ? (t.writeParentInfo(!1), t.writeLeftID(l)) : Vt();
      r !== null && t.writeString(r);
    }
    this.content.write(t, n);
  }
}
const Yu = (e, t) => jw[t & Ji](e), jw = [
  () => {
    Vt();
  },
  // GC is not ItemContent
  Ew,
  // 1
  Dw,
  // 2
  Cw,
  // 3
  Iw,
  // 4
  Tw,
  // 5
  Mw,
  // 6
  Vw,
  // 7
  Rw,
  // 8
  Aw,
  // 9
  () => {
    Vt();
  }
  // 10 - Skip is not ItemContent
], zw = 10;
class re extends Uo {
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
    t.writeInfo(zw), Q(t.restEncoder, this.length - n);
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
const Gu = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Xu = "__ $YJS$ __";
Gu[Xu] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Gu[Xu] = !0;
const Ww = () => {
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
}, Kw = /[\uD800-\uDBFF]/, qw = /[\uDC00-\uDFFF]/, Jw = (e, t) => {
  let n = 0, s = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    n++;
  for (n > 0 && Kw.test(e[n - 1]) && n--; s + n < e.length && s + n < t.length && e[e.length - s - 1] === t[t.length - s - 1]; )
    s++;
  return s > 0 && qw.test(e[e.length - s]) && s--, {
    index: n,
    remove: e.length - n - s,
    insert: t.slice(n, t.length - s)
  };
}, Yw = Jw, Ae = (e, t) => e >>> t | e << 32 - t, Gw = (e) => Ae(e, 2) ^ Ae(e, 13) ^ Ae(e, 22), Xw = (e) => Ae(e, 6) ^ Ae(e, 11) ^ Ae(e, 25), Qw = (e) => Ae(e, 7) ^ Ae(e, 18) ^ e >>> 3, Zw = (e) => Ae(e, 17) ^ Ae(e, 19) ^ e >>> 10, t0 = new Uint32Array([
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
]), e0 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class n0 {
  constructor() {
    const t = new ArrayBuffer(320);
    this._H = new Uint32Array(t, 0, 8), this._H.set(e0), this._W = new Uint32Array(t, 64, 64);
  }
  _updateHash() {
    const t = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = Zw(n[d - 2]) + n[d - 7] + Qw(n[d - 15]) + n[d - 16];
    let s = t[0], i = t[1], r = t[2], o = t[3], l = t[4], a = t[5], c = t[6], u = t[7];
    for (let d = 0, f, h; d < 64; d++)
      f = u + Xw(l) + (l & a ^ ~l & c) + t0[d] + n[d] >>> 0, h = Gw(s) + (s & i ^ s & r ^ i & r) >>> 0, u = c, c = a, a = l, l = o + f >>> 0, o = r, r = i, i = s, s = f + h >>> 0;
    t[0] += s, t[1] += i, t[2] += r, t[3] += o, t[4] += l, t[5] += a, t[6] += c, t[7] += u;
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
        this._W[o] |= Pt << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const s = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < t.length; i++)
      for (let o = 3; o >= 0 && n < t.length; o--)
        this._W[i] |= t[n++] << o * 8;
    s || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Pt << (3 - n % 4) * 8), this._W[14] = t.byteLength / pg, this._W[15] = t.byteLength * 8, this._updateHash();
    const r = new Uint8Array(32);
    for (let o = 0; o < this._H.length; o++)
      for (let l = 0; l < 4; l++)
        r[o * 4 + l] = this._H[o] >>> (3 - l) * 8;
    return r;
  }
}
const s0 = (e) => new n0().digest(e), ct = new se("y-sync"), Ue = new se("y-undo");
new se("yjs-cursor");
const i0 = (e) => {
  for (let n = 6; n < e.length; n++)
    e[n % 6] = e[n % 6] ^ e[n];
  return e.slice(0, 6);
}, r0 = (e) => fm(i0(s0(hm(e)))), Oi = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && /** @type {number} */
t.sv.get(e.id.client) > e.id.clock && !Qn(t.ds, e.id), o0 = [{ light: "#ecd44433", dark: "#ecd444" }], l0 = (e, t, n) => {
  if (!e.has(n)) {
    if (e.size < t.length) {
      const s = kn();
      e.forEach((i) => s.add(i)), t = t.filter((i) => !s.has(i));
    }
    e.set(n, qg(t));
  }
  return (
    /** @type {ColorDef} */
    e.get(n)
  );
}, a0 = (e, {
  colors: t = o0,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: s = null,
  onFirstRender: i = () => {
  },
  mapping: r
} = {}) => {
  let o = !1;
  const l = new d0(e, r), a = new En({
    props: {
      editable: (c) => {
        const u = ct.getState(c);
        return u.snapshot == null && u.prevSnapshot == null;
      }
    },
    key: ct,
    state: {
      /**
       * @returns {any}
       */
      init: (c, u) => ({
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
      apply: (c, u) => {
        const d = c.getMeta(ct);
        if (d !== void 0) {
          u = Object.assign({}, u);
          for (const f in d)
            u[f] = d[f];
        }
        return u.addToHistory = c.getMeta("addToHistory") !== !1, u.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, u.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, l.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && fu(0, () => {
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
    view: (c) => (l.initView(c), r == null && l._forceRerender(), i(), {
      update: () => {
        const u = a.getState(c.state);
        if (u.snapshot == null && u.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (o || c.state.doc.content.findDiffStart(
          c.state.doc.type.createAndFill().content
        ) !== null)) {
          if (o = !0, u.addToHistory === !1 && !u.isChangeOrigin) {
            const d = Ue.getState(c.state), f = d && d.undoManager;
            f && f.stopCapturing();
          }
          l.mux(() => {
            u.doc.transact((d) => {
              d.meta.set("addToHistory", u.addToHistory), l._prosemirrorChanged(c.state.doc);
            }, ct);
          });
        }
      },
      destroy: () => {
        l.destroy();
      }
    })
  });
  return a;
}, c0 = (e, t, n) => {
  if (t !== null && t.anchor !== null && t.head !== null)
    if (t.type === "all")
      e.setSelection(new Kd(e.doc));
    else if (t.type === "node") {
      const s = hs(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      );
      e.setSelection(u0(e, s));
    } else {
      const s = hs(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      ), i = hs(
        n.doc,
        n.type,
        t.head,
        n.mapping
      );
      s !== null && i !== null && e.setSelection(Ce.between(e.doc.resolve(s), e.doc.resolve(i)));
    }
}, u0 = (e, t) => {
  const n = e.doc.resolve(t);
  return n.nodeAfter ? ho.create(e.doc, t) : Ce.near(n);
}, eo = (e, t) => ({
  type: (
    /** @type {any} */
    t.selection.jsonID
  ),
  anchor: Ii(
    t.selection.anchor,
    e.type,
    e.mapping
  ),
  head: Ii(
    t.selection.head,
    e.type,
    e.mapping
  )
});
class d0 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(t, n = /* @__PURE__ */ new Map()) {
    this.type = t, this.prosemirrorView = null, this.mux = Ww(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = t.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = eo(
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
    return this.prosemirrorView.hasFocus() ? (uu && this._domSelectionInView === null && (fu(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const t = this.prosemirrorView._root.getSelection();
    if (t == null || t.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), r = gm.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || r.clientWidth || 0) && i.top <= (window.innerHeight || r.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(t, n) {
    n || (n = Su(vu(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(ct, { snapshot: t, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const t = this.type.toArray().map(
        (s) => ai(
          /** @type {Y.XmlElement} */
          s,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((s) => s !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new $e(wn.from(t), 0, 0)
      );
      n.setMeta(ct, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const t = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => ai(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new $e(wn.from(n), 0, 0)
      );
      if (t) {
        const i = jn(rn(t.anchor, 0), s.doc.content.size), r = jn(rn(t.head, 0), s.doc.content.size);
        s.setSelection(Ce.create(s.doc, i, r));
      }
      this.prosemirrorView.dispatch(
        s.setMeta(ct, { isChangeOrigin: !0, binding: this })
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
    if (t || (t = Cr(this.doc)), t instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) && Vt(), i = new An({ gc: !1 }), Gr(i, n), n = Cr(i), Gr(i, t), t = Cr(i), r._item === null) {
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
        const a = (d, f) => {
          const h = d === "added" ? l.getUserByClientId(f.client) : l.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: l0(
              s.colorMapping,
              s.colors,
              h
            )
          };
        }, c = Pu(
          r,
          new $o(n.ds, t.sv)
        ).map((d) => !d._item.deleted || Oi(d._item, t) || Oi(d._item, n) ? ai(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          t,
          n,
          a
        ) : null).filter((d) => d !== null), u = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new $e(wn.from(c), 0, 0)
        );
        this.prosemirrorView.dispatch(
          u.setMeta(ct, { isChangeOrigin: !0 })
        );
      }, ct);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(t, n) {
    if (this.prosemirrorView == null) return;
    const s = ct.getState(this.prosemirrorView.state);
    if (t.length === 0 || s.snapshot != null || s.prevSnapshot != null) {
      this.renderSnapshot(s.snapshot, s.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (l, a) => this.mapping.delete(a);
      ln(
        n,
        n.deleteSet,
        (l) => {
          if (l.constructor === nt) {
            const a = (
              /** @type {Y.ContentType} */
              /** @type {Y.Item} */
              l.content.type
            );
            a && this.mapping.delete(a);
          }
        }
      ), n.changed.forEach(i), n.changedParentTypes.forEach(i);
      const r = this.type.toArray().map(
        (l) => Qu(
          /** @type {Y.XmlElement | Y.XmlHook} */
          l,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((l) => l !== null);
      let o = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new $e(wn.from(r), 0, 0)
      );
      c0(o, this.beforeTransactionSelection, this), o = o.setMeta(ct, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Mu }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && o.scrollIntoView(), this.prosemirrorView.dispatch(o);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(t) {
    this.doc.transact(() => {
      so(this.doc, this.type, t, this), this.beforeTransactionSelection = eo(
        this,
        this.prosemirrorView.state
      );
    }, ct);
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
const Qu = (e, t, n, s, i, r) => {
  const o = (
    /** @type {PModel.Node} */
    n.mapping.get(e)
  );
  if (o === void 0) {
    if (e instanceof Ct)
      return ai(
        e,
        t,
        n,
        s,
        i,
        r
      );
    throw ce();
  }
  return o;
}, ai = (e, t, n, s, i, r) => {
  const o = [], l = (a) => {
    if (a instanceof Ct) {
      const c = Qu(
        a,
        t,
        n,
        s,
        i,
        r
      );
      c !== null && o.push(c);
    } else {
      const c = (
        /** @type {Y.ContentType} */
        a._item.right?.content?.type
      );
      c instanceof an && !c._item.deleted && c._item.id.client === c.doc.clientID && (a.applyDelta([
        { retain: a.length },
        ...c.toDelta()
      ]), c.doc.transact((d) => {
        c._item.delete(d);
      }));
      const u = f0(
        a,
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
  s === void 0 || i === void 0 ? e.toArray().forEach(l) : Pu(e, new $o(i.ds, s.sv)).forEach(l);
  try {
    const a = e.getAttributes(s);
    s !== void 0 && (Oi(
      /** @type {Y.Item} */
      e._item,
      s
    ) ? Oi(
      /** @type {Y.Item} */
      e._item,
      i
    ) || (a.ychange = r ? r(
      "added",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "added" }) : a.ychange = r ? r(
      "removed",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "removed" });
    const c = t.node(e.nodeName, a, o);
    return n.mapping.set(e, c), c;
  } catch {
    return e.doc.transact((c) => {
      e._item.delete(c);
    }, ct), n.mapping.delete(e), null;
  }
}, f0 = (e, t, n, s, i, r) => {
  const o = [], l = e.toDelta(s, i, r);
  try {
    for (let a = 0; a < l.length; a++) {
      const c = l[a];
      o.push(t.text(c.insert, b0(c.attributes, t)));
    }
  } catch {
    return e.doc.transact((c) => {
      e._item.delete(c);
    }, ct), null;
  }
  return o;
}, h0 = (e, t) => {
  const n = new Ut(), s = e.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: td(i.marks, t)
  }));
  return n.applyDelta(s), t.mapping.set(n, e), n;
}, p0 = (e, t) => {
  const n = new Ct(e.type.name);
  for (const s in e.attrs) {
    const i = e.attrs[s];
    i !== null && s !== "ychange" && n.setAttribute(s, i);
  }
  return n.insert(
    0,
    nr(e).map(
      (s) => no(s, t)
    )
  ), t.mapping.set(n, e), n;
}, no = (e, t) => e instanceof Array ? h0(e, t) : p0(e, t), Ea = (e) => typeof e == "object" && e !== null, jo = (e, t) => {
  const n = Object.keys(e).filter((i) => e[i] !== null);
  let s = n.length === Object.keys(t).filter((i) => t[i] !== null).length;
  for (let i = 0; i < n.length && s; i++) {
    const r = n[i], o = e[r], l = t[r];
    s = r === "ychange" || o === l || Ea(o) && Ea(l) && jo(o, l);
  }
  return s;
}, nr = (e) => {
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
}, Zu = (e, t) => {
  const n = e.toDelta();
  return n.length === t.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (s, i) => s.insert === /** @type {any} */
    t[i].text && lu(s.attributes || {}).length === t[i].marks.length && au(s.attributes, (r, o) => {
      const l = zo(o), a = t[i].marks;
      return a.find(
        /** @param {any} mark */
        (u) => u.type.name === l
      ) ? jo(r, a.find(
        /** @param {any} mark */
        (u) => u.type.name === l
      )?.attrs) : !1;
    })
  );
}, Ds = (e, t) => {
  if (e instanceof Ct && !(t instanceof Array) && io(e, t)) {
    const n = nr(t);
    return e._length === n.length && jo(e.getAttributes(), t.attrs) && e.toArray().every(
      (s, i) => Ds(s, n[i])
    );
  }
  return e instanceof Ut && t instanceof Array && Zu(e, t);
}, Ri = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every(
  (n, s) => t[s] === n
), Aa = (e, t, n) => {
  const s = e.toArray(), i = nr(t), r = i.length, o = s.length, l = jn(o, r);
  let a = 0, c = 0, u = !1;
  for (; a < l; a++) {
    const d = s[a], f = i[a];
    if (Ri(n.mapping.get(d), f))
      u = !0;
    else if (!Ds(d, f))
      break;
  }
  for (; a + c < l; c++) {
    const d = s[o - c - 1], f = i[r - c - 1];
    if (Ri(n.mapping.get(d), f))
      u = !0;
    else if (!Ds(d, f))
      break;
  }
  return {
    equalityFactor: a + c,
    foundMappedChild: u
  };
}, g0 = (e) => {
  let t = "", n = e._start;
  const s = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof pe ? t += n.content.str : n.content instanceof bt && (s[n.content.key] = null)), n = n.right;
  return {
    str: t,
    nAttrs: s
  };
}, m0 = (e, t, n) => {
  n.mapping.set(e, t);
  const { nAttrs: s, str: i } = g0(e), r = t.map((c) => ({
    insert: (
      /** @type {any} */
      c.text
    ),
    attributes: Object.assign({}, s, td(c.marks, n))
  })), { insert: o, remove: l, index: a } = Yw(
    i,
    r.map((c) => c.insert).join("")
  );
  e.delete(a, l), e.insert(a, o), e.applyDelta(
    r.map((c) => ({ retain: c.insert.length, attributes: c.attributes }))
  );
}, w0 = /(.*)(--[a-zA-Z0-9+/=]{8})$/, zo = (e) => w0.exec(e)?.[1] ?? e, b0 = (e, t) => {
  const n = [];
  for (const s in e)
    n.push(t.mark(zo(s), e[s]));
  return n;
}, td = (e, t) => {
  const n = {};
  return e.forEach((s) => {
    if (s.type.name !== "ychange") {
      const i = qe(t.isOMark, s.type, () => !s.type.excludes(s.type));
      n[i ? `${s.type.name}--${r0(s.toJSON())}` : s.type.name] = s.attrs;
    }
  }), n;
}, so = (e, t, n, s) => {
  if (t instanceof Ct && t.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (s.mapping.set(t, n), t instanceof Ct) {
    const d = t.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && t.setAttribute(h, f[h]) : t.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && t.removeAttribute(h);
  }
  const i = nr(n), r = i.length, o = t.toArray(), l = o.length, a = jn(r, l);
  let c = 0, u = 0;
  for (; c < a; c++) {
    const d = o[c], f = i[c];
    if (!Ri(s.mapping.get(d), f))
      if (Ds(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  for (; u + c + 1 < a; u++) {
    const d = o[l - u - 1], f = i[r - u - 1];
    if (!Ri(s.mapping.get(d), f))
      if (Ds(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  e.transact(() => {
    for (; l - c - u > 0 && r - c - u > 0; ) {
      const f = o[c], h = i[c], p = o[l - u - 1], m = i[r - u - 1];
      if (f instanceof Ut && h instanceof Array)
        Zu(f, h) || m0(f, h, s), c += 1;
      else {
        let y = f instanceof Ct && io(f, h), b = p instanceof Ct && io(p, m);
        if (y && b) {
          const M = Aa(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            s
          ), R = Aa(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            m,
            s
          );
          M.foundMappedChild && !R.foundMappedChild ? b = !1 : !M.foundMappedChild && R.foundMappedChild || M.equalityFactor < R.equalityFactor ? y = !1 : b = !1;
        }
        y ? (so(
          e,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          s
        ), c += 1) : b ? (so(
          e,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          m,
          s
        ), u += 1) : (s.mapping.delete(t.get(c)), t.delete(c, 1), t.insert(c, [
          no(h, s)
        ]), c += 1);
      }
    }
    const d = l - c - u;
    if (l === 1 && r === 0 && o[0] instanceof Ut ? (s.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : d > 0 && (t.slice(c, c + d).forEach((f) => s.mapping.delete(f)), t.delete(c, d)), c + u < r) {
      const f = [];
      for (let h = c; h < r - u; h++)
        f.push(no(i[h], s));
      t.insert(c, f);
    }
  }, ct);
}, io = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Ii = (e, t, n) => {
  if (e === 0)
    return Sr(t, 0, -1);
  let s = t._first === null ? null : (
    /** @type {Y.ContentType} */
    t._first.content.type
  );
  for (; s !== null && t !== s; ) {
    if (s instanceof Ut) {
      if (s._length >= e)
        return Sr(s, e, -1);
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
          return new Ci(s._item === null ? null : s._item.id, s._item === null ? Cs(s) : null, null);
        if (e -= i, s._item !== null && s._item.next !== null)
          s = /** @type {Y.ContentType} */
          s._item.next.content.type;
        else {
          if (e === 0)
            return s = s._item === null ? s : s._item.parent, new Ci(s._item === null ? null : s._item.id, s._item === null ? Cs(s) : null, null);
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
      return y0(s._item.parent, s._item);
  }
  return Sr(t, t._length, -1);
}, y0 = (e, t) => {
  let n = null, s = null;
  return e._item === null ? s = Cs(e) : n = W(e._item.id.client, e._item.id.clock), new Ci(n, s, t.id);
}, hs = (e, t, n, s) => {
  const i = Wm(n, e);
  if (i === null || i.type !== t && !Es(t, i.type._item))
    return null;
  let r = i.type, o = 0;
  if (r.constructor === Ut)
    o = i.index;
  else if (r._item === null || !r._item.deleted) {
    let l = r._first, a = 0;
    for (; a < r._length && a < i.index && l !== null; ) {
      if (!l.deleted) {
        const c = (
          /** @type {Y.ContentType} */
          l.content.type
        );
        a++, c instanceof Ut ? o += c._length : o += /** @type {any} */
        s.get(c).nodeSize;
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
      let a = (
        /** @type {Y.AbstractType} */
        l._first
      );
      for (; a !== null; ) {
        const c = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        if (c === r)
          break;
        a.deleted || (c instanceof Ut ? o += c._length : o += /** @type {any} */
        s.get(c).nodeSize), a = a.right;
      }
    }
    r = /** @type {Y.AbstractType} */
    l;
  }
  return o - 1;
};
function v0(e) {
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
          return o.attributes && (l.marks = Object.keys(o.attributes).map((a) => {
            const c = o.attributes[a], d = {
              type: zo(a)
            };
            return Object.keys(c) && (d.attrs = c), d;
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
const _0 = (e) => {
  const t = Ue.getState(e).undoManager;
  if (t != null)
    return t.undo(), !0;
}, k0 = (e) => {
  const t = Ue.getState(e).undoManager;
  if (t != null)
    return t.redo(), !0;
}, x0 = /* @__PURE__ */ new Set(["paragraph"]), S0 = (e, t) => !(e instanceof nt) || !(e.content instanceof ge) || !(e.content.type instanceof an || e.content.type instanceof Ct && t.has(e.content.type.nodeName)) || e.content.type._length === 0, C0 = ({ protectedNodes: e = x0, trackedOrigins: t = [], undoManager: n = null } = {}) => new En({
  key: Ue,
  state: {
    init: (s, i) => {
      const r = ct.getState(i), o = n || new Mu(r.type, {
        trackedOrigins: new Set([ct].concat(t)),
        deleteFilter: (l) => S0(l, e),
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
      const l = ct.getState(o).binding, a = i.undoManager, c = a.undoStack.length > 0, u = a.redoStack.length > 0;
      return l ? {
        undoManager: a,
        prevSel: eo(l, r),
        hasUndoOps: c,
        hasRedoOps: u
      } : c !== i.hasUndoOps || u !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: a.undoStack.length > 0,
        hasRedoOps: a.redoStack.length > 0
      }) : i;
    }
  },
  view: (s) => {
    const i = ct.getState(s.state), r = Ue.getState(s.state).undoManager;
    return r.on("stack-item-added", ({ stackItem: o }) => {
      const l = i.binding;
      l && o.meta.set(l, Ue.getState(s.state).prevSel);
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
function ed(e) {
  return !!e.getMeta(ct);
}
function E0(e, t) {
  const n = ct.getState(e);
  return hs(n.doc, n.type, t, n.binding.mapping) || 0;
}
function nd(e, t) {
  const n = ct.getState(e);
  return Ii(t, n.type, n.binding.mapping);
}
var ci = class sd extends Jd {
  constructor(t, n) {
    super(t), this.yRelativePosition = n;
  }
  /**
   * Creates a CollaborationMappablePosition from a JSON object.
   */
  static fromJSON(t) {
    return new sd(t.position, t.yRelativePosition);
  }
  /**
   * Converts the CollaborationMappablePosition to a JSON object.
   */
  toJSON() {
    return {
      position: this.position,
      yRelativePosition: this.yRelativePosition
    };
  }
};
function A0(e, t) {
  const n = nd(t, e);
  return new ci(e, n);
}
function T0(e, t, n) {
  const s = e instanceof ci ? e.yRelativePosition : null;
  if (ed(t) && s) {
    const o = E0(n, s);
    return {
      position: new ci(o, s),
      mapResult: null
    };
  }
  const i = qd(e, t), r = i.position.position;
  return {
    position: new ci(
      r,
      s ?? nd(n, r)
    ),
    mapResult: i.mapResult
  };
}
Rs.create({
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
  onBeforeCreate() {
    this.editor.utils.getUpdatedPosition = (e, t) => T0(e, t, this.editor.state), this.editor.utils.createMappablePosition = (e) => A0(e, this.editor.state);
  },
  addCommands() {
    return {
      undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Ue.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? _0(t) : !0),
      redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Ue.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? k0(t) : !0)
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
    const t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = C0(this.options.yUndoOptions), s = n.spec.view;
    n.spec.view = (o) => {
      const { undoManager: l } = Ue.getState(o.state);
      l.restore && (l.restore(), l.restore = () => {
      });
      const a = s ? s(o) : void 0;
      return {
        destroy: () => {
          const c = l.trackedOrigins.has(l), u = l._observers;
          l.restore = () => {
            c && l.trackedOrigins.add(l), l.doc.on("afterTransaction", l.afterTransactionHandler), l._observers = u;
          }, a?.destroy && a.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    }, r = a0(t, i);
    return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
      try {
        const o = v0(t);
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
function Ta(e) {
  if (!e.length)
    return ll.empty;
  const t = [], n = e[0].$from.node(0);
  return e.forEach((s) => {
    const i = s.$from.pos, r = s.$from.nodeAfter;
    r && t.push(
      Yd.node(i, i + r.nodeSize, {
        class: "ProseMirror-selectednoderange"
      })
    );
  }), ll.create(n, t);
}
function sr(e, t, n) {
  const s = [], i = e.node(0);
  typeof n == "number" && n >= 0 || (e.sameParent(t) ? n = Math.max(0, e.sharedDepth(t.pos) - 1) : n = e.sharedDepth(t.pos));
  const r = new Gd(e, t, n), o = r.depth === 0 ? 0 : i.resolve(r.start).posAtIndex(0);
  return r.parent.forEach((l, a) => {
    const c = o + a, u = c + l.nodeSize;
    if (c < r.start || c >= r.end)
      return;
    const d = new Za(i.resolve(c), i.resolve(u));
    s.push(d);
  }), s;
}
var M0 = class id {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new id(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return new en(n, s);
  }
}, en = class Ge extends ie {
  constructor(t, n, s, i = 1) {
    const { doc: r } = t, o = t === n, l = t.pos === r.content.size && n.pos === r.content.size, a = o && !l ? r.resolve(n.pos + (i > 0 ? 1 : -1)) : n, c = o && l ? r.resolve(t.pos - (i > 0 ? 1 : -1)) : t, u = sr(c.min(a), c.max(a), s), d = a.pos >= t.pos ? u[0].$from : u[u.length - 1].$to, f = a.pos >= t.pos ? u[u.length - 1].$to : u[0].$from;
    super(d, f, u), this.depth = s;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof Ge && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.anchor)), i = t.resolve(n.map(this.head));
    return new Ge(s, i);
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
      return new Ge(r, o, this.depth);
    }
    const n = this.ranges[0], s = t.resolve(Math.max(0, n.$from.pos - 1));
    return new Ge(this.$anchor, s, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), r = i[0].$from, o = i[i.length - 1].$to;
      return new Ge(o, r, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], s = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
    return new Ge(this.$anchor, s, this.depth);
  }
  static fromJSON(t, n) {
    return new Ge(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, s, i, r = 1) {
    return new this(t.resolve(n), t.resolve(s), i, r);
  }
  getBookmark() {
    return new M0(this.anchor, this.head);
  }
};
en.prototype.visible = !1;
function Ys(e) {
  return e instanceof en;
}
Rs.create({
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
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: r, tr: o } = s, { anchor: l, head: a } = r;
        if (!Ys(r)) {
          const u = en.create(i, l, a, t, -1);
          return o.setSelection(u), n.dispatch(o), !0;
        }
        const c = r.extendBackwards();
        return o.setSelection(c), n.dispatch(o), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: r, tr: o } = s, { anchor: l, head: a } = r;
        if (!Ys(r)) {
          const u = en.create(i, l, a, t);
          return o.setSelection(u), n.dispatch(o), !0;
        }
        const c = r.extendForwards();
        return o.setSelection(c), n.dispatch(o), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, tr: r } = s, o = en.create(i, 0, i.content.size, t);
        return r.setSelection(o), n.dispatch(r), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: e } = this.editor.state;
    Ys(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
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
              const { key: i } = this.options, r = /Mac/.test(navigator.platform), o = !!s.shiftKey, l = !!s.ctrlKey, a = !!s.altKey, c = !!s.metaKey, u = r ? c : l;
              return (i == null || i === "Shift" && o || i === "Control" && l || i === "Alt" && a || i === "Meta" && c || i === "Mod" && u) && (t = !0), t && document.addEventListener(
                "mouseup",
                () => {
                  t = !1;
                  const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: m, $head: y } = h;
                  if (m.sameParent(y))
                    return;
                  const b = en.create(f, m.pos, y.pos, this.options.depth);
                  p.setSelection(b), n.dispatch(p);
                },
                { once: !0 }
              ), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: s } = n, i = Ys(s);
            if (e = !1, !t)
              return i ? (e = !0, Ta(s.ranges)) : null;
            const { $from: r, $to: o } = s;
            if (!i && r.sameParent(o))
              return null;
            const l = sr(r, o, this.options.depth);
            return l.length ? (e = !0, Ta(l)) : null;
          }
        }
      })
    ];
  }
});
function D0(e) {
  let t = "";
  const n = getComputedStyle(e);
  for (let s = 0; s < n.length; s += 1)
    t += `${n[s]}:${n.getPropertyValue(n[s])};`;
  return t;
}
function O0(e) {
  const t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], s = [t, ...Array.from(t.getElementsByTagName("*"))];
  return n.forEach((i, r) => {
    s[r].style.cssText = D0(i);
  }), t;
}
function R0(e, t) {
  let n = e;
  for (; n?.parentElement && n.parentElement !== t.dom; )
    n = n.parentElement;
  return n?.parentElement === t.dom ? n : void 0;
}
function I0(e, t, n, s = 5) {
  const i = e.dom, r = i.firstElementChild, o = i.lastElementChild;
  if (!r || !o)
    return { x: t, y: n };
  const l = r.getBoundingClientRect(), a = o.getBoundingClientRect(), c = Math.min(Math.max(l.top + s, n), a.bottom - s), u = 0.5, d = Math.abs(l.left - a.left) < u, f = Math.abs(l.right - a.right) < u;
  let h = l;
  return d && f && (h = l), { x: Math.min(Math.max(h.left + s, t), h.right - s), y: c };
}
var rd = (e) => {
  const { x: t, y: n, editor: s } = e, { view: i, state: r } = s, { x: o, y: l } = I0(i, t, n, 5), a = i.root.elementsFromPoint(o, l);
  let c;
  if (Array.prototype.some.call(a, (f) => {
    if (!i.dom.contains(f))
      return !1;
    const h = R0(f, i);
    return h ? (c = h, !0) : !1;
  }), !c)
    return { resultElement: null, resultNode: null, pos: null };
  let u;
  try {
    u = i.posAtDOM(c, 0);
  } catch {
    return { resultElement: null, resultNode: null, pos: null };
  }
  const d = r.doc.nodeAt(u);
  return {
    resultElement: c,
    resultNode: d,
    pos: u
  };
};
function Gs(e, t) {
  return window.getComputedStyle(e)[t];
}
function N0(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function P0(e, t, n) {
  const s = parseInt(Gs(e.dom, "paddingLeft"), 10), i = parseInt(Gs(e.dom, "paddingRight"), 10), r = parseInt(Gs(e.dom, "borderLeftWidth"), 10), o = parseInt(Gs(e.dom, "borderLeftWidth"), 10), l = e.dom.getBoundingClientRect();
  return {
    left: N0(t, l.left + s + r, l.right - i - o),
    top: n
  };
}
function od(e) {
  var t;
  (t = e.parentNode) == null || t.removeChild(e);
}
function L0(e, t) {
  const { doc: n } = t.view.state, s = rd({
    editor: t,
    x: e.clientX,
    y: e.clientY
  });
  if (!s.resultNode || s.pos === null)
    return [];
  const i = e.clientX, r = P0(t.view, i, e.clientY), o = t.view.posAtCoords(r);
  if (!o)
    return [];
  const { pos: l } = o;
  if (!n.resolve(l).parent)
    return [];
  const c = n.resolve(s.pos), u = n.resolve(s.pos + 1);
  return sr(c, u, 0);
}
function $0(e, t) {
  const { view: n } = t;
  if (!e.dataTransfer)
    return;
  const { empty: s, $from: i, $to: r } = n.state.selection, o = L0(e, t), l = sr(i, r, 0), a = l.some((y) => o.find((b) => b.$from === y.$from && b.$to === y.$to)), c = s || !a ? o : l;
  if (!c.length)
    return;
  const { tr: u } = n.state, d = document.createElement("div"), f = c[0].$from.pos, h = c[c.length - 1].$to.pos, p = en.create(n.state.doc, f, h), m = p.content();
  c.forEach((y) => {
    const b = n.nodeDOM(y.$from.pos), M = O0(b);
    d.append(M);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: m, move: !0 }, u.setSelection(p), n.dispatch(u), document.addEventListener("drop", () => od(d), { once: !0 });
}
var Ma = (e, t) => {
  const n = e.resolve(t), { depth: s } = n;
  return s === 0 ? t : n.pos - n.parentOffset - 1;
}, Da = (e, t) => {
  const n = e.nodeAt(t), s = e.resolve(t);
  let { depth: i } = s, r = n;
  for (; i > 0; ) {
    const o = s.node(i);
    i -= 1, i === 0 && (r = o);
  }
  return r;
}, Tr = (e, t) => {
  const n = ct.getState(e);
  return n ? Ii(t, n.type, n.binding.mapping) : null;
}, B0 = (e, t) => {
  const n = ct.getState(e);
  return n ? hs(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, Oa = (e, t) => {
  let n = t;
  for (; n?.parentNode && n.parentNode !== e.dom; )
    n = n.parentNode;
  return n;
}, ld = new se("dragHandle"), ad = ({
  pluginKey: e = ld,
  element: t,
  editor: n,
  computePositionConfig: s,
  getReferencedVirtualElement: i,
  onNodeChange: r,
  onElementDragStart: o,
  onElementDragEnd: l
}) => {
  const a = document.createElement("div");
  let c = !1, u = null, d = -1, f, h = null, p = null;
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
    const C = i?.() || {
      getBoundingClientRect: () => A.getBoundingClientRect()
    };
    Zc(C, t, s).then((P) => {
      Object.assign(t.style, {
        position: P.strategy,
        left: `${P.x}px`,
        top: `${P.y}px`
      });
    });
  }
  function M(A) {
    o?.(A), $0(A, n), t && (t.dataset.dragging = "true"), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }
  function R(A) {
    l?.(A), m(), t && (t.style.pointerEvents = "auto", t.dataset.dragging = "false");
  }
  return t.addEventListener("dragstart", M), t.addEventListener("dragend", R), a.appendChild(t), {
    unbind() {
      t.removeEventListener("dragstart", M), t.removeEventListener("dragend", R), h && (cancelAnimationFrame(h), h = null, p = null);
    },
    plugin: new En({
      key: typeof e == "string" ? new se(e) : e,
      state: {
        init() {
          return { locked: !1 };
        },
        apply(A, C, P, T) {
          const B = A.getMeta("lockDragHandle"), S = A.getMeta("hideDragHandle");
          if (B !== void 0 && (c = B), S)
            return m(), c = !1, u = null, d = -1, r?.({ editor: n, node: null, pos: -1 }), C;
          if (A.docChanged && d !== -1 && t)
            if (ed(A)) {
              const N = B0(T, f);
              N !== d && (d = N);
            } else {
              const N = A.mapping.map(d);
              N !== d && (d = N, f = Tr(T, d));
            }
          return C;
        }
      },
      view: (A) => {
        var C;
        return t.draggable = !0, t.style.pointerEvents = "auto", t.dataset.dragging = "false", (C = n.view.dom.parentElement) == null || C.appendChild(a), a.style.pointerEvents = "none", a.style.position = "absolute", a.style.top = "0", a.style.left = "0", {
          update(P, T) {
            if (!t)
              return;
            if (!n.isEditable) {
              m();
              return;
            }
            if (c ? t.draggable = !1 : t.draggable = !0, A.state.doc.eq(T.doc) || d === -1)
              return;
            let B = A.nodeDOM(d);
            if (B = Oa(A, B), B === A.dom || B?.nodeType !== 1)
              return;
            const S = A.posAtDOM(B, 0), N = Da(n.state.doc, S), U = Ma(n.state.doc, S);
            u = N, d = U, f = Tr(A.state, d), r?.({ editor: n, node: u, pos: d }), b(B);
          },
          // TODO: Kills even on hot reload
          destroy() {
            h && (cancelAnimationFrame(h), h = null, p = null), t && od(a);
          }
        };
      },
      props: {
        handleDOMEvents: {
          keydown(A) {
            return !t || c || A.hasFocus() && (m(), u = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mouseleave(A, C) {
            return c || C.target && !a.contains(C.relatedTarget) && (m(), u = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mousemove(A, C) {
            return !t || c || (p = { x: C.clientX, y: C.clientY }, h) || (h = requestAnimationFrame(() => {
              if (h = null, !p)
                return;
              const { x: P, y: T } = p;
              p = null;
              const B = rd({
                x: P,
                y: T,
                editor: n
              });
              if (!B.resultElement)
                return;
              let S = B.resultElement;
              if (S = Oa(A, S), S === A.dom || S?.nodeType !== 1)
                return;
              const N = A.posAtDOM(S, 0), U = Da(n.state.doc, N);
              if (U !== u) {
                const O = Ma(n.state.doc, N);
                u = U, d = O, f = Tr(A.state, d), r?.({ editor: n, node: u, pos: d }), b(S), y();
              }
            })), !1;
          }
        }
      }
    })
  };
}, cd = {
  placement: "left-start",
  strategy: "absolute"
};
Rs.create({
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
      ad({
        computePositionConfig: { ...cd, ...this.options.computePositionConfig },
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
var F0 = /* @__PURE__ */ Yt({
  name: "DragHandleVue",
  props: {
    pluginKey: {
      type: [String, Object],
      default: ld
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
    const n = Z(null), s = Hd(null);
    return cn(async () => {
      await Ht();
      const { editor: i, pluginKey: r, onNodeChange: o, onElementDragEnd: l, onElementDragStart: a, computePositionConfig: c } = e;
      if (!n.value || !e.editor || e.editor.isDestroyed)
        return;
      const u = ad({
        editor: i,
        element: n.value,
        pluginKey: r,
        computePositionConfig: { ...cd, ...c },
        onNodeChange: o,
        onElementDragStart: a,
        onElementDragEnd: l
      });
      s.value = u, e.editor.registerPlugin(u.plugin);
    }), Ns(() => {
      var i, r;
      s.value && (e.editor && !e.editor.isDestroyed && e.editor.unregisterPlugin(e.pluginKey), (r = (i = s.value).unbind) == null || r.call(i), s.value = null);
    }), () => {
      var i;
      return $s(
        "div",
        {
          ref: n,
          class: e.class,
          style: { visibility: "hidden", position: "absolute" },
          "data-dragging": "false"
        },
        (i = t.default) == null ? void 0 : i.call(t)
      );
    };
  }
}), H0 = (e) => ht({
  find: /--$/,
  replace: e ?? "—"
}), U0 = (e) => ht({
  find: /\.\.\.$/,
  replace: e ?? "…"
}), V0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: e ?? "“"
}), j0 = (e) => ht({
  find: /"$/,
  replace: e ?? "”"
}), z0 = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: e ?? "‘"
}), W0 = (e) => ht({
  find: /'$/,
  replace: e ?? "’"
}), K0 = (e) => ht({
  find: /<-$/,
  replace: e ?? "←"
}), q0 = (e) => ht({
  find: /->$/,
  replace: e ?? "→"
}), J0 = (e) => ht({
  find: /\(c\)$/,
  replace: e ?? "©"
}), Y0 = (e) => ht({
  find: /\(tm\)$/,
  replace: e ?? "™"
}), G0 = (e) => ht({
  find: /\(sm\)$/,
  replace: e ?? "℠"
}), X0 = (e) => ht({
  find: /\(r\)$/,
  replace: e ?? "®"
}), Q0 = (e) => ht({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: e ?? "½"
}), Z0 = (e) => ht({
  find: /\+\/-$/,
  replace: e ?? "±"
}), tb = (e) => ht({
  find: /!=$/,
  replace: e ?? "≠"
}), eb = (e) => ht({
  find: /<<$/,
  replace: e ?? "«"
}), nb = (e) => ht({
  find: />>$/,
  replace: e ?? "»"
}), sb = (e) => ht({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: e ?? "×"
}), ib = (e) => ht({
  find: /\^2$/,
  replace: e ?? "²"
}), rb = (e) => ht({
  find: /\^3$/,
  replace: e ?? "³"
}), ob = (e) => ht({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: e ?? "¼"
}), lb = (e) => ht({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: e ?? "¾"
}), ab = Rs.create({
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
    return this.options.emDash !== !1 && e.push(H0(this.options.emDash)), this.options.ellipsis !== !1 && e.push(U0(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && e.push(V0(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(j0(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && e.push(z0(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push(W0(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && e.push(K0(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(q0(this.options.rightArrow)), this.options.copyright !== !1 && e.push(J0(this.options.copyright)), this.options.trademark !== !1 && e.push(Y0(this.options.trademark)), this.options.servicemark !== !1 && e.push(G0(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(X0(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(Q0(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(Z0(this.options.plusMinus)), this.options.notEqual !== !1 && e.push(tb(this.options.notEqual)), this.options.laquo !== !1 && e.push(eb(this.options.laquo)), this.options.raquo !== !1 && e.push(nb(this.options.raquo)), this.options.multiplication !== !1 && e.push(sb(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(ib(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(rb(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(ob(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(lb(this.options.threeQuarters)), e;
  }
}), cb = ab, ub = /(^|[^`])`([^`]+)`(?!`)$/, db = /(^|[^`])`([^`]+)`(?!`)/g, fb = tc.create({
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
      nc({
        find: ub,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ec({
        find: db,
        type: this.type
      })
    ];
  }
}), Mr = 4, hb = /^```([a-z]+)?[\s\n]$/, pb = /^~~~([a-z]+)?[\s\n]$/, gb = Jn.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: Mr,
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
        const n = (t = this.options.tabSize) != null ? t : Mr, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        if (r.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return o ? e.commands.insertContent(l) : e.commands.command(({ tr: a }) => {
          const { from: c, to: u } = i, h = s.doc.textBetween(c, u, `
`, `
`).split(`
`).map((p) => l + p).join(`
`);
          return a.replaceWith(c, u, s.schema.text(h)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : Mr, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        return r.parent.type !== this.type ? !1 : o ? e.commands.command(({ tr: l }) => {
          var a;
          const { pos: c } = r, u = r.start(), d = r.end(), h = s.doc.textBetween(u, d, `
`, `
`).split(`
`);
          let p = 0, m = 0;
          const y = c - u;
          for (let P = 0; P < h.length; P += 1) {
            if (m + h[P].length >= y) {
              p = P;
              break;
            }
            m += h[P].length + 1;
          }
          const M = ((a = h[p].match(/^ */)) == null ? void 0 : a[0]) || "", R = Math.min(M.length, n);
          if (R === 0)
            return !0;
          let A = u;
          for (let P = 0; P < p; P += 1)
            A += h[P].length + 1;
          return l.delete(A, A + R), c - A <= R && l.setSelection(Ce.create(l.doc, A)), !0;
        }) : e.commands.command(({ tr: l }) => {
          const { from: a, to: c } = i, f = s.doc.textBetween(a, c, `
`, `
`).split(`
`).map((h) => {
            var p;
            const m = ((p = h.match(/^ */)) == null ? void 0 : p[0]) || "", y = Math.min(m.length, n);
            return h.slice(y);
          }).join(`
`);
          return l.replaceWith(a, c, s.schema.text(f)), !0;
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
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: c }) => (c.setSelection(ie.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      al({
        find: hb,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      al({
        find: pb,
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
            const { tr: o, schema: l } = e.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: r }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(Ce.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), e.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), mb = Jn.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `

`) : ""
}), wb = Jn.create({
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
          const { keepMarks: o } = this.options, { splittableMarks: l } = s.extensionManager, a = r || i.$to.parentOffset && i.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const d = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(d);
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
}), bb = Jn.create({
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
        if (!Qd(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, i = e();
        return Zd(n) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ state: r, tr: o, dispatch: l }) => {
          if (l) {
            const { $to: a } = o.selection, c = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? o.setSelection(Ce.create(o.doc, a.pos + 1)) : a.nodeAfter.isBlock ? o.setSelection(ho.create(o.doc, a.pos)) : o.setSelection(Ce.create(o.doc, a.pos));
            else {
              const u = r.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, d = u?.create();
              d && (o.insert(c, d), o.setSelection(Ce.create(o.doc, c + 1)));
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
      Xd({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), yb = Jn.create({
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
}), vb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, _b = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, kb = tc.create({
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
      nc({
        find: vb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ec({
        find: _b,
        type: this.type
      })
    ];
  }
}), xb = Jn.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || ""
  }),
  renderMarkdown: (e) => e.text || ""
}), Sb = Rs.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const i = [];
    return this.options.bold !== !1 && i.push(of.configure(this.options.bold)), this.options.blockquote !== !1 && i.push(rf.configure(this.options.blockquote)), this.options.bulletList !== !1 && i.push(uf.configure(this.options.bulletList)), this.options.code !== !1 && i.push(fb.configure(this.options.code)), this.options.codeBlock !== !1 && i.push(gb.configure(this.options.codeBlock)), this.options.document !== !1 && i.push(mb.configure(this.options.document)), this.options.dropcursor !== !1 && i.push(gf.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && i.push(mf.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && i.push(wb.configure(this.options.hardBreak)), this.options.heading !== !1 && i.push(lf.configure(this.options.heading)), this.options.undoRedo !== !1 && i.push(wf.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && i.push(bb.configure(this.options.horizontalRule)), this.options.italic !== !1 && i.push(af.configure(this.options.italic)), this.options.listItem !== !1 && i.push(df.configure(this.options.listItem)), this.options.listKeymap !== !1 && i.push(ff.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && i.push(cf.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && i.push(hf.configure(this.options.orderedList)), this.options.paragraph !== !1 && i.push(yb.configure(this.options.paragraph)), this.options.strike !== !1 && i.push(kb.configure(this.options.strike)), this.options.text !== !1 && i.push(xb.configure(this.options.text)), this.options.underline !== !1 && i.push(pf.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && i.push(bf.configure((s = this.options) == null ? void 0 : s.trailingNode)), i;
  }
}), Cb = Sb;
function Ra(e) {
  return Ud((t, n) => ({
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
var Eb = class extends tf {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Ra(this.view.state), this.reactiveExtensionStorage = Ra(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Ka(this);
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
}, Ab = /* @__PURE__ */ Yt({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = Z(), n = ji();
    return Yn(() => {
      const s = e.editor;
      s && s.options.element && t.value && Ht(() => {
        var i;
        if (!t.value || !((i = s.view.dom) != null && i.firstChild))
          return;
        const r = ut(t.value);
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
    }), Ns(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return $s("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
});
let ro, oo;
if (typeof WeakMap < "u") {
  let e = /* @__PURE__ */ new WeakMap();
  ro = (t) => e.get(t), oo = (t, n) => (e.set(t, n), n);
} else {
  const e = [];
  let n = 0;
  ro = (s) => {
    for (let i = 0; i < e.length; i += 2) if (e[i] == s) return e[i + 1];
  }, oo = (s, i) => (n == 10 && (n = 0), e[n++] = s, e[n++] = i);
}
var Le = class {
  constructor(e, t, n, s) {
    this.width = e, this.height = t, this.map = n, this.problems = s;
  }
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      const n = this.map[t];
      if (n != e) continue;
      const s = t % this.width, i = t / this.width | 0;
      let r = s + 1, o = i + 1;
      for (let l = 1; r < this.width && this.map[t + l] == n; l++) r++;
      for (let l = 1; o < this.height && this.map[t + this.width * l] == n; l++) o++;
      return {
        left: s,
        top: i,
        right: r,
        bottom: o
      };
    }
    throw new RangeError(`No cell with offset ${e} found`);
  }
  colCount(e) {
    for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
    throw new RangeError(`No cell with offset ${e} found`);
  }
  nextCell(e, t, n) {
    const { left: s, right: i, top: r, bottom: o } = this.findCell(e);
    return t == "horiz" ? (n < 0 ? s == 0 : i == this.width) ? null : this.map[r * this.width + (n < 0 ? s - 1 : i)] : (n < 0 ? r == 0 : o == this.height) ? null : this.map[s + this.width * (n < 0 ? r - 1 : o)];
  }
  rectBetween(e, t) {
    const { left: n, right: s, top: i, bottom: r } = this.findCell(e), { left: o, right: l, top: a, bottom: c } = this.findCell(t);
    return {
      left: Math.min(n, o),
      top: Math.min(i, a),
      right: Math.max(s, l),
      bottom: Math.max(r, c)
    };
  }
  cellsInRect(e) {
    const t = [], n = {};
    for (let s = e.top; s < e.bottom; s++) for (let i = e.left; i < e.right; i++) {
      const r = s * this.width + i, o = this.map[r];
      n[o] || (n[o] = !0, !(i == e.left && i && this.map[r - 1] == o || s == e.top && s && this.map[r - this.width] == o) && t.push(o));
    }
    return t;
  }
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
  static get(e) {
    return ro(e) || oo(e, Tb(e));
  }
};
function Tb(e) {
  if (e.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + e.type.name);
  const t = Mb(e), n = e.childCount, s = [];
  let i = 0, r = null;
  const o = [];
  for (let c = 0, u = t * n; c < u; c++) s[c] = 0;
  for (let c = 0, u = 0; c < n; c++) {
    const d = e.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; i < s.length && s[i] != 0; ) i++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: y, rowspan: b, colwidth: M } = m.attrs;
      for (let R = 0; R < b; R++) {
        if (R + c >= n) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: b - R
          });
          break;
        }
        const A = i + R * t;
        for (let C = 0; C < y; C++) {
          s[A + C] == 0 ? s[A + C] = u : (r || (r = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: y - C
          });
          const P = M && M[C];
          if (P) {
            const T = (A + C) % t * 2, B = o[T];
            B == null || B != P && o[T + 1] == 1 ? (o[T] = P, o[T + 1] = 1) : B == P && o[T + 1]++;
          }
        }
      }
      i += y, u += m.nodeSize;
    }
    const f = (c + 1) * t;
    let h = 0;
    for (; i < f; ) s[i++] == 0 && h++;
    h && (r || (r = [])).push({
      type: "missing",
      row: c,
      n: h
    }), u++;
  }
  (t === 0 || n === 0) && (r || (r = [])).push({ type: "zero_sized" });
  const l = new Le(t, n, s, r);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2) o[c] != null && o[c + 1] < n && (a = !0);
  return a && Db(l, o, e), l;
}
function Mb(e) {
  let t = -1, n = !1;
  for (let s = 0; s < e.childCount; s++) {
    const i = e.child(s);
    let r = 0;
    if (n) for (let o = 0; o < s; o++) {
      const l = e.child(o);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        o + c.attrs.rowspan > s && (r += c.attrs.colspan);
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
function Db(e, t, n) {
  e.problems || (e.problems = []);
  const s = {};
  for (let i = 0; i < e.map.length; i++) {
    const r = e.map[i];
    if (s[r]) continue;
    s[r] = !0;
    const o = n.nodeAt(r);
    if (!o) throw new RangeError(`No cell with offset ${r} found`);
    let l = null;
    const a = o.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = t[(i + c) % e.width * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = Ob(a)))[c] = u);
    }
    l && e.problems.unshift({
      type: "colwidth mismatch",
      pos: r,
      colwidth: l
    });
  }
}
function Ob(e) {
  if (e.colwidth) return e.colwidth.slice();
  const t = [];
  for (let n = 0; n < e.colspan; n++) t.push(0);
  return t;
}
function Wo(e) {
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
function Rb(e) {
  for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
  return null;
}
function ud(e) {
  const t = e.selection.$head;
  for (let n = t.depth; n > 0; n--) if (t.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Ib(e) {
  const t = e.selection;
  if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
  if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
  const n = Rb(t.$head) || Nb(t.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${t.head}`);
}
function Nb(e) {
  for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
    const s = t.type.spec.tableRole;
    if (s == "cell" || s == "header_cell") return e.doc.resolve(n);
  }
  for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
    const s = t.type.spec.tableRole;
    if (s == "cell" || s == "header_cell") return e.doc.resolve(n - t.nodeSize);
  }
}
function Ia(e) {
  return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function dd(e, t) {
  return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function fd(e, t, n) {
  const s = e.node(-1), i = Le.get(s), r = e.start(-1), o = i.nextCell(e.pos - r, t, n);
  return o == null ? null : e.node(0).resolve(r + o);
}
function Na(e, t, n = 1) {
  const s = {
    ...e,
    colspan: e.colspan - n
  };
  return s.colwidth && (s.colwidth = s.colwidth.slice(), s.colwidth.splice(t, n), s.colwidth.some((i) => i > 0) || (s.colwidth = null)), s;
}
var Te = class Ie extends ie {
  constructor(t, n = t) {
    const s = t.node(-1), i = Le.get(s), r = t.start(-1), o = i.rectBetween(t.pos - r, n.pos - r), l = t.node(0), a = i.cellsInRect(o).filter((u) => u != n.pos - r);
    a.unshift(n.pos - r);
    const c = a.map((u) => {
      const d = s.nodeAt(u);
      if (!d) throw new RangeError(`No cell with offset ${u} found`);
      const f = r + u + 1;
      return new Za(l.resolve(f), l.resolve(f + d.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = t, this.$headCell = n;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
    if (Ia(s) && Ia(i) && dd(s, i)) {
      const r = this.$anchorCell.node(-1) != s.node(-1);
      return r && this.isRowSelection() ? Ie.rowSelection(s, i) : r && this.isColSelection() ? Ie.colSelection(s, i) : new Ie(s, i);
    }
    return Ce.between(s, i);
  }
  content() {
    const t = this.$anchorCell.node(-1), n = Le.get(t), s = this.$anchorCell.start(-1), i = n.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s), r = {}, o = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let u = a * n.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = n.map[u];
        if (r[f]) continue;
        r[f] = !0;
        const h = n.findCell(f);
        let p = t.nodeAt(f);
        if (!p) throw new RangeError(`No cell with offset ${f} found`);
        const m = i.left - h.left, y = h.right - i.right;
        if (m > 0 || y > 0) {
          let b = p.attrs;
          if (m > 0 && (b = Na(b, 0, m)), y > 0 && (b = Na(b, b.colspan - y, y)), h.left < i.left) {
            if (p = p.type.createAndFill(b), !p) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
          } else p = p.type.create(b, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const b = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(b) : p = p.type.create(b, p.content);
        }
        c.push(p);
      }
      o.push(t.child(a).copy(wn.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? t : o;
    return new $e(wn.from(l), 1, 1);
  }
  replace(t, n = $e.empty) {
    const s = t.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      const { $from: l, $to: a } = i[o], c = t.mapping.slice(s);
      t.replace(c.map(l.pos), c.map(a.pos), o ? $e.empty : n);
    }
    const r = ie.findFrom(t.doc.resolve(t.mapping.slice(s).map(this.to)), -1);
    r && t.setSelection(r);
  }
  replaceWith(t, n) {
    this.replace(t, new $e(wn.from(n), 0, 0));
  }
  forEachCell(t) {
    const n = this.$anchorCell.node(-1), s = Le.get(n), i = this.$anchorCell.start(-1), r = s.cellsInRect(s.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i));
    for (let o = 0; o < r.length; o++) t(n.nodeAt(r[o]), i + r[o]);
  }
  isColSelection() {
    const t = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(t, n) > 0) return !1;
    const s = t + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(s, i) == this.$headCell.node(-1).childCount;
  }
  static colSelection(t, n = t) {
    const s = t.node(-1), i = Le.get(s), r = t.start(-1), o = i.findCell(t.pos - r), l = i.findCell(n.pos - r), a = t.node(0);
    return o.top <= l.top ? (o.top > 0 && (t = a.resolve(r + i.map[o.left])), l.bottom < i.height && (n = a.resolve(r + i.map[i.width * (i.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(r + i.map[l.left])), o.bottom < i.height && (t = a.resolve(r + i.map[i.width * (i.height - 1) + o.right - 1]))), new Ie(t, n);
  }
  isRowSelection() {
    const t = this.$anchorCell.node(-1), n = Le.get(t), s = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - s), r = n.colCount(this.$headCell.pos - s);
    if (Math.min(i, r) > 0) return !1;
    const o = i + this.$anchorCell.nodeAfter.attrs.colspan, l = r + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == n.width;
  }
  eq(t) {
    return t instanceof Ie && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(t, n = t) {
    const s = t.node(-1), i = Le.get(s), r = t.start(-1), o = i.findCell(t.pos - r), l = i.findCell(n.pos - r), a = t.node(0);
    return o.left <= l.left ? (o.left > 0 && (t = a.resolve(r + i.map[o.top * i.width])), l.right < i.width && (n = a.resolve(r + i.map[i.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(r + i.map[l.top * i.width])), o.right < i.width && (t = a.resolve(r + i.map[i.width * (o.top + 1) - 1]))), new Ie(t, n);
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
Te.prototype.visible = !1;
ie.jsonID("cell", Te);
var Pb = class hd {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new hd(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && s.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && s.index() < s.parent.childCount && dd(n, s) ? new Te(n, s) : ie.near(s, 1);
  }
};
new se("fix-tables");
function pd(e) {
  const t = e.selection, n = Ib(e), s = n.node(-1), i = n.start(-1), r = Le.get(s);
  return {
    ...t instanceof Te ? r.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : r.findCell(n.pos - i),
    tableStart: i,
    map: r,
    table: s
  };
}
function Lb(e) {
  return function(t, n) {
    if (!ud(t)) return !1;
    if (n) {
      const s = Wo(t.schema), i = pd(t), r = t.tr, o = i.map.cellsInRect(e == "column" ? {
        left: i.left,
        top: 0,
        right: i.right,
        bottom: i.map.height
      } : e == "row" ? {
        left: 0,
        top: i.top,
        right: i.map.width,
        bottom: i.bottom
      } : i), l = o.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < o.length; a++) l[a].type == s.header_cell && r.setNodeMarkup(i.tableStart + o[a], s.cell, l[a].attrs);
      if (r.steps.length === 0) for (let a = 0; a < o.length; a++) r.setNodeMarkup(i.tableStart + o[a], s.header_cell, l[a].attrs);
      n(r);
    }
    return !0;
  };
}
function Pa(e, t, n) {
  const s = t.map.cellsInRect({
    left: 0,
    top: 0,
    right: e == "row" ? t.map.width : 1,
    bottom: e == "column" ? t.map.height : 1
  });
  for (let i = 0; i < s.length; i++) {
    const r = t.table.nodeAt(s[i]);
    if (r && r.type !== n.header_cell) return !1;
  }
  return !0;
}
function Ko(e, t) {
  return t = t || { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? Lb(e) : function(n, s) {
    if (!ud(n)) return !1;
    if (s) {
      const i = Wo(n.schema), r = pd(n), o = n.tr, l = Pa("row", r, i), a = Pa("column", r, i), c = (e === "column" ? l : e === "row" && a) ? 1 : 0, u = e == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: r.map.height
      } : e == "row" ? {
        left: c,
        top: 0,
        right: r.map.width,
        bottom: 1
      } : r, d = e == "column" ? a ? i.cell : i.header_cell : e == "row" ? l ? i.cell : i.header_cell : i.cell;
      r.map.cellsInRect(u).forEach((f) => {
        const h = f + r.tableStart, p = o.doc.nodeAt(h);
        p && o.setNodeMarkup(h, d, p.attrs);
      }), s(o);
    }
    return !0;
  };
}
Ko("row", { useDeprecatedLogic: !0 });
Ko("column", { useDeprecatedLogic: !0 });
Ko("cell", { useDeprecatedLogic: !0 });
function Xs(e, t) {
  const n = e.selection;
  if (!(n instanceof Te)) return !1;
  if (t) {
    const s = e.tr, i = Wo(e.schema).cell.createAndFill().content;
    n.forEachCell((r, o) => {
      r.content.eq(i) || s.replace(s.mapping.map(o + 1), s.mapping.map(o + r.nodeSize - 1), new $e(i, 0, 0));
    }), s.docChanged && t(s);
  }
  return !0;
}
ef({
  ArrowLeft: Qs("horiz", -1),
  ArrowRight: Qs("horiz", 1),
  ArrowUp: Qs("vert", -1),
  ArrowDown: Qs("vert", 1),
  "Shift-ArrowLeft": Zs("horiz", -1),
  "Shift-ArrowRight": Zs("horiz", 1),
  "Shift-ArrowUp": Zs("vert", -1),
  "Shift-ArrowDown": Zs("vert", 1),
  Backspace: Xs,
  "Mod-Backspace": Xs,
  Delete: Xs,
  "Mod-Delete": Xs
});
function ui(e, t, n) {
  return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function Qs(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const r = n.selection;
    if (r instanceof Te) return ui(n, s, ie.near(r.$headCell, t));
    if (e != "horiz" && !r.empty) return !1;
    const o = gd(i, e, t);
    if (o == null) return !1;
    if (e == "horiz") return ui(n, s, ie.near(n.doc.resolve(r.head + t), t));
    {
      const l = n.doc.resolve(o), a = fd(l, e, t);
      let c;
      return a ? c = ie.near(a, 1) : t < 0 ? c = ie.near(n.doc.resolve(l.before(-1)), -1) : c = ie.near(n.doc.resolve(l.after(-1)), 1), ui(n, s, c);
    }
  };
}
function Zs(e, t) {
  return (n, s, i) => {
    if (!i) return !1;
    const r = n.selection;
    let o;
    if (r instanceof Te) o = r;
    else {
      const a = gd(i, e, t);
      if (a == null) return !1;
      o = new Te(n.doc.resolve(a));
    }
    const l = fd(o.$headCell, e, t);
    return l ? ui(n, s, new Te(o.$anchorCell, l)) : !1;
  };
}
function gd(e, t, n) {
  if (!(e.state.selection instanceof Ce)) return null;
  const { $head: s } = e.state.selection;
  for (let i = s.depth - 1; i >= 0; i--) {
    const r = s.node(i);
    if ((n < 0 ? s.index(i) : s.indexAfter(i)) != (n < 0 ? 0 : r.childCount)) return null;
    if (r.type.spec.tableRole == "cell" || r.type.spec.tableRole == "header_cell") {
      const o = s.before(i), l = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return e.endOfTextblock(l) ? o : null;
    }
  }
  return null;
}
new se("tableColumnResizing");
function $b(e, t) {
  const n = Math.min(e.top, t.top), s = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), o = Math.max(e.right, t.right) - i, l = s - n, a = i, c = n;
  return new DOMRect(a, c, o, l);
}
var Bb = class {
  constructor({
    editor: e,
    element: t,
    view: n,
    updateDelay: s = 250,
    resizeDelay: i = 60,
    shouldShow: r,
    appendTo: o,
    getReferencedVirtualElement: l,
    options: a
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
      const { doc: p, selection: m } = d, { empty: y } = m, b = !p.textBetween(f, h).length && nf(d.selection), M = this.element.contains(document.activeElement);
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
    var c;
    this.editor = e, this.element = t, this.view = n, this.updateDelay = s, this.resizeDelay = i, this.appendTo = o, this.scrollTarget = (c = a?.scrollTarget) != null ? c : window, this.getReferencedVirtualElement = l, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...a
    }, this.element.tabIndex = 0, r && (this.shouldShow = r), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(rg(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      ig(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      ng(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(ag(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(og(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      sg(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(lg(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      cg(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  get virtualElement() {
    var e;
    const { selection: t } = this.editor.state, n = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
    if (n)
      return n;
    const s = sf(this.view, t.from, t.to);
    let i = {
      getBoundingClientRect: () => s,
      getClientRects: () => [s]
    };
    if (t instanceof ho) {
      let r = this.view.nodeDOM(t.from);
      const o = r.dataset.nodeViewWrapper ? r : r.querySelector("[data-node-view-wrapper]");
      o && (r = o), r && (i = {
        getBoundingClientRect: () => r.getBoundingClientRect(),
        getClientRects: () => [r.getBoundingClientRect()]
      });
    }
    if (t instanceof Te) {
      const { $anchorCell: r, $headCell: o } = t, l = r ? r.pos : o.pos, a = o ? o.pos : r.pos, c = this.view.nodeDOM(l), u = this.view.nodeDOM(a);
      if (!c || !u)
        return;
      const d = c === u ? c.getBoundingClientRect() : $b(
        c.getBoundingClientRect(),
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
    e && Zc(e, this.element, {
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
    const { state: n } = this.view, { selection: s } = n, { ranges: i } = s, r = Math.min(...i.map((a) => a.$from.pos)), o = Math.max(...i.map((a) => a.$to.pos));
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
}, Fb = (e) => new En({
  key: typeof e.pluginKey == "string" ? new se(e.pluginKey) : e.pluginKey,
  view: (t) => new Bb({ view: t, ...e })
}), Hb = /* @__PURE__ */ Yt({
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
    const s = Z(null);
    return cn(() => {
      const {
        editor: i,
        options: r,
        pluginKey: o,
        resizeDelay: l,
        appendTo: a,
        shouldShow: c,
        getReferencedVirtualElement: u,
        updateDelay: d
      } = e, f = s.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), Ht(() => {
        i.registerPlugin(
          Fb({
            editor: i,
            element: f,
            options: r,
            pluginKey: o,
            resizeDelay: l,
            appendTo: a,
            shouldShow: c,
            getReferencedVirtualElement: u,
            updateDelay: d
          })
        );
      }));
    }), Ns(() => {
      const { pluginKey: i, editor: r } = e;
      r.unregisterPlugin(i);
    }), () => {
      var i;
      return $s("div", { ref: s, ...n }, (i = t.default) == null ? void 0 : i.call(t));
    };
  }
});
const Ub = {
  height: "20",
  width: "20",
  viewBox: "0 0 20 20"
}, Vb = ["stroke-dasharray"], jb = /* @__PURE__ */ Yt({
  __name: "CharacterCount",
  props: {
    editor: {},
    limit: {}
  },
  setup(e) {
    const t = e, n = Et(
      () => Math.round(100 / t.limit * t.editor.storage.characterCount.characters())
    );
    return (s, i) => (J(), at("div", {
      class: Be(["tiptap-character-count", {
        "tiptap-character-count--warning": e.editor.storage.characterCount.characters() === e.limit
      }])
    }, [
      (J(), at("svg", Ub, [
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
        }, null, 8, Vb),
        i[1] || (i[1] = Rt("circle", {
          r: "6",
          cx: "10",
          cy: "10",
          fill: "var(--tiptap-color-surface)"
        }, null, -1))
      ])),
      $r(" " + nn(e.editor.storage.characterCount.characters()) + " / " + nn(e.limit) + " characters ", 1),
      i[2] || (i[2] = Rt("br", null, null, -1)),
      $r(" " + nn(e.editor.storage.characterCount.words()) + " words ", 1)
    ], 2));
  }
});
var La;
let zb = /* @__PURE__ */ Symbol("headlessui.useid"), Wb = 0;
const qo = (La = Af) != null ? La : function() {
  return bn(zb, () => `${++Wb}`)();
};
function gt(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function ir(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, ir), s;
}
var Kb = Object.defineProperty, qb = (e, t, n) => t in e ? Kb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $a = (e, t, n) => (qb(e, typeof t != "symbol" ? t + "" : t, n), n);
let Jb = class {
  constructor() {
    $a(this, "current", this.detect()), $a(this, "currentId", 0);
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
}, Jo = new Jb();
function Yo(e) {
  if (Jo.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = gt(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let lo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ao = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ao || {}), Yb = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Yb || {}), Gb = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Gb || {});
function md(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Go = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Go || {});
function Xo(e, t = 0) {
  var n;
  return e === ((n = Yo(e)) == null ? void 0 : n.body) ? !1 : ir(t, { 0() {
    return e.matches(lo);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(lo)) return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function wd(e) {
  let t = Yo(e);
  Ht(() => {
    t && !Xo(t.activeElement, 0) && Qb(e);
  });
}
var Xb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Xb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Qb(e) {
  e?.focus({ preventScroll: !0 });
}
let Zb = ["textarea", "input"].join(",");
function ty(e) {
  var t, n;
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Zb)) != null ? n : !1;
}
function bd(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n), r = t(s);
    if (i === null || r === null) return 0;
    let o = i.compareDocumentPosition(r);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ey(e, t) {
  return ny(md(), t, { relativeTo: e });
}
function ny(e, t, { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {}) {
  var r;
  let o = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) != null ? r : document, l = Array.isArray(e) ? n ? bd(e) : e : md(e);
  i.length > 0 && l.length > 1 && (l = l.filter((p) => !i.includes(p))), s = s ?? o.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(s)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(s)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0) return 0;
    let p = c + d;
    if (t & 16) p = (p + f) % f;
    else {
      if (p < 0) return 3;
      if (p >= f) return 1;
    }
    h = l[p], h?.focus(u), d += a;
  } while (h !== o.activeElement);
  return t & 6 && ty(h) && h.select(), 2;
}
function sy() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function iy() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ry() {
  return sy() || iy();
}
function ti(e, t, n) {
  Jo.isServer || Yn((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function oy(e, t, n) {
  Jo.isServer || Yn((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function ly(e, t, n = Et(() => !0)) {
  function s(r, o) {
    if (!n.value || r.defaultPrevented) return;
    let l = o(r);
    if (l === null || !l.getRootNode().contains(l)) return;
    let a = (function c(u) {
      return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    })(e);
    for (let c of a) {
      if (c === null) continue;
      let u = c instanceof HTMLElement ? c : gt(c);
      if (u != null && u.contains(l) || r.composed && r.composedPath().includes(u)) return;
    }
    return !Xo(l, Go.Loose) && l.tabIndex !== -1 && r.preventDefault(), t(r, l);
  }
  let i = Z(null);
  ti("pointerdown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), ti("mousedown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), ti("click", (r) => {
    ry() || i.value && (s(r, () => i.value), i.value = null);
  }, !0), ti("touchend", (r) => s(r, () => r.target instanceof HTMLElement ? r.target : null), !0), oy("blur", (r) => s(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ba(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function ay(e, t) {
  let n = Z(Ba(e.value.type, e.value.as));
  return cn(() => {
    n.value = Ba(e.value.type, e.value.as);
  }), Yn(() => {
    var s;
    n.value || gt(t) && gt(t) instanceof HTMLButtonElement && !((s = gt(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Fa(e) {
  return [e.screenX, e.screenY];
}
function cy() {
  let e = Z([-1, -1]);
  return { wasMoved(t) {
    let n = Fa(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Fa(t);
  } };
}
function uy({ container: e, accept: t, walk: n, enabled: s }) {
  Yn(() => {
    let i = e.value;
    if (!i || s !== void 0 && !s.value) return;
    let r = Yo(e);
    if (!r) return;
    let o = Object.assign((a) => t(a), { acceptNode: t }), l = r.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; l.nextNode(); ) n(l.currentNode);
  });
}
var co = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(co || {}), dy = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(dy || {});
function rr({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...i }) {
  var r;
  let o = vd(s, n), l = Object.assign(i, { props: o });
  if (e || t & 2 && o.static) return Dr(l);
  if (t & 1) {
    let a = (r = o.unmount) == null || r ? 0 : 1;
    return ir(a, { 0() {
      return null;
    }, 1() {
      return Dr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Dr(l);
}
function Dr({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var r, o;
  let { as: l, ...a } = fy(e, ["unmount", "static"]), c = (r = n.default) == null ? void 0 : r.call(n, s), u = {};
  if (s) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(s)) typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (c = yd(c ?? []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = c ?? [];
      if (!hy(d) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((m) => m.trim()).filter((m, y, b) => b.indexOf(m) === y).sort((m, y) => m.localeCompare(y)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = vd((o = d.props) != null ? o : {}, a, u), p = Ve(d, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return $s(l, Object.assign({}, a, u), { default: () => c });
}
function yd(e) {
  return e.flatMap((t) => t.type === ft ? yd(t.children) : [t]);
}
function vd(...e) {
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
function fy(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t) s in n && delete n[s];
  return n;
}
function hy(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let _d = /* @__PURE__ */ Symbol("Context");
var Os = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Os || {});
function py() {
  return bn(_d, null);
}
function gy(e) {
  go(_d, e);
}
var _t = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_t || {});
function my(e) {
  throw new Error("Unexpected object: " + e);
}
var qt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(qt || {});
function wy(e, t) {
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
      my(e);
  }
}
let Ha = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ua(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return s;
  let r = !1;
  for (let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) l.remove(), r = !0;
  let o = r ? (n = i.innerText) != null ? n : "" : s;
  return Ha.test(o) && (o = o.replace(Ha, "")), o;
}
function by(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((i) => {
      let r = document.getElementById(i);
      if (r) {
        let o = r.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Ua(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0) return s.join(", ");
  }
  return Ua(e).trim();
}
function yy(e) {
  let t = Z(""), n = Z("");
  return () => {
    let s = gt(e);
    if (!s) return "";
    let i = s.innerText;
    if (t.value === i) return n.value;
    let r = by(s).trim().toLowerCase();
    return t.value = i, n.value = r, r;
  };
}
var vy = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vy || {}), _y = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(_y || {});
function ky(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let kd = /* @__PURE__ */ Symbol("MenuContext");
function or(e) {
  let t = bn(kd, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, or), n;
  }
  return t;
}
let xy = /* @__PURE__ */ Yt({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let s = Z(1), i = Z(null), r = Z(null), o = Z([]), l = Z(""), a = Z(null), c = Z(1);
  function u(f = (h) => h) {
    let h = a.value !== null ? o.value[a.value] : null, p = bd(f(o.value.slice()), (y) => gt(y.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let d = { menuState: s, buttonRef: i, itemsRef: r, items: o, searchQuery: l, activeItemIndex: a, activationTrigger: c, closeMenu: () => {
    s.value = 1, a.value = null;
  }, openMenu: () => s.value = 0, goToItem(f, h, p) {
    let m = u(), y = wy(f === qt.Specific ? { focus: qt.Specific, id: h } : { focus: f }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    l.value = "", a.value = y, c.value = p ?? 1, o.value = m.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (a.value !== null ? o.value.slice(a.value + h).concat(o.value.slice(0, a.value + h)) : o.value).find((y) => y.dataRef.textValue.startsWith(l.value) && !y.dataRef.disabled), m = p ? o.value.indexOf(p) : -1;
    m === -1 || m === a.value || (a.value = m, c.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = u((m) => [...m, { id: f, dataRef: h }]);
    o.value = p.items, a.value = p.activeItemIndex, c.value = 1;
  }, unregisterItem(f) {
    let h = u((p) => {
      let m = p.findIndex((y) => y.id === f);
      return m !== -1 && p.splice(m, 1), p;
    });
    o.value = h.items, a.value = h.activeItemIndex, c.value = 1;
  } };
  return ly([i, r], (f, h) => {
    var p;
    d.closeMenu(), Xo(h, Go.Loose) || (f.preventDefault(), (p = gt(i)) == null || p.focus());
  }, Et(() => s.value === 0)), go(kd, d), gy(Et(() => ir(s.value, { 0: Os.Open, 1: Os.Closed }))), () => {
    let f = { open: s.value === 0, close: d.closeMenu };
    return rr({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} }), Sy = /* @__PURE__ */ Yt({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-button-${qo()}`, o = or("MenuButton");
  s({ el: o.buttonRef, $el: o.buttonRef });
  function l(d) {
    switch (d.key) {
      case _t.Space:
      case _t.Enter:
      case _t.ArrowDown:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ht(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(qt.First);
        });
        break;
      case _t.ArrowUp:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ht(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(qt.Last);
        });
        break;
    }
  }
  function a(d) {
    switch (d.key) {
      case _t.Space:
        d.preventDefault();
        break;
    }
  }
  function c(d) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ht(() => {
      var f;
      return (f = gt(o.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), o.openMenu(), ky(() => {
      var f;
      return (f = gt(o.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = ay(Et(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var d;
    let f = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: r, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = gt(o.itemsRef)) == null ? void 0 : d.id, "aria-expanded": o.menuState.value === 0, onKeydown: l, onKeyup: a, onClick: c };
    return rr({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} }), Cy = /* @__PURE__ */ Yt({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-items-${qo()}`, o = or("MenuItems"), l = Z(null);
  s({ el: o.itemsRef, $el: o.itemsRef }), uy({ container: Et(() => gt(o.itemsRef)), enabled: Et(() => o.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function a(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case _t.Space:
        if (o.searchQuery.value !== "") return f.preventDefault(), f.stopPropagation(), o.search(f.key);
      case _t.Enter:
        if (f.preventDefault(), f.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = gt(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), wd(gt(o.buttonRef));
        break;
      case _t.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Next);
      case _t.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Previous);
      case _t.Home:
      case _t.PageUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.First);
      case _t.End:
      case _t.PageDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Last);
      case _t.Escape:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ht(() => {
          var p;
          return (p = gt(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case _t.Tab:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ht(() => ey(gt(o.buttonRef), f.shiftKey ? ao.Previous : ao.Next));
        break;
      default:
        f.key.length === 1 && (o.search(f.key), l.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(f) {
    switch (f.key) {
      case _t.Space:
        f.preventDefault();
        break;
    }
  }
  let u = py(), d = Et(() => u !== null ? (u.value & Os.Open) === Os.Open : o.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, y = { "aria-activedescendant": o.activeItemIndex.value === null || (f = o.items.value[o.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = gt(o.buttonRef)) == null ? void 0 : h.id, id: r, onKeydown: a, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return rr({ ourProps: y, theirProps: m, slot: p, attrs: t, slots: n, features: co.RenderStrategy | co.Static, visible: d.value, name: "MenuItems" });
  };
} }), Ey = /* @__PURE__ */ Yt({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-item-${qo()}`, o = or("MenuItem"), l = Z(null);
  s({ el: l, $el: l });
  let a = Et(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === r : !1), c = yy(l), u = Et(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: l }));
  cn(() => o.registerItem(r, u)), Ps(() => o.unregisterItem(r)), Yn(() => {
    o.menuState.value === 0 && a.value && o.activationTrigger.value !== 0 && Ht(() => {
      var b, M;
      return (M = (b = gt(l)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : M.call(b, { block: "nearest" });
    });
  });
  function d(b) {
    if (e.disabled) return b.preventDefault();
    o.closeMenu(), wd(gt(o.buttonRef));
  }
  function f() {
    if (e.disabled) return o.goToItem(qt.Nothing);
    o.goToItem(qt.Specific, r);
  }
  let h = cy();
  function p(b) {
    h.update(b);
  }
  function m(b) {
    h.wasMoved(b) && (e.disabled || a.value || o.goToItem(qt.Specific, r, 0));
  }
  function y(b) {
    h.wasMoved(b) && (e.disabled || a.value && o.goToItem(qt.Nothing));
  }
  return () => {
    let { disabled: b, ...M } = e, R = { active: a.value, disabled: b, close: o.closeMenu };
    return rr({ ourProps: { id: r, ref: l, role: "menuitem", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: y, onMouseleave: y }, theirProps: { ...n, ...M }, slot: R, attrs: n, slots: t, name: "MenuItem" });
  };
} });
const Ay = ["innerHTML"], Ni = /* @__PURE__ */ Yt({
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
    return (i, r) => s.value ? (J(), at("span", {
      key: 0,
      class: "icon-wrapper",
      style: di({
        width: t.size,
        height: t.size
      }),
      innerHTML: s.value
    }, null, 12, Ay)) : (J(), te(Hf("typo3-backend-icon"), {
      key: 1,
      identifier: t.icon,
      size: "small",
      style: di({
        width: t.size,
        height: t.size
      })
    }, null, 8, ["identifier", "style"]));
  }
}), Ty = { class: "tiptap-sr-only" }, My = ["onClick"], Va = /* @__PURE__ */ Yt({
  __name: "Dropdown",
  props: {
    label: {},
    iconIdentifier: {},
    editorDomNode: {},
    items: {}
  },
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = Z(null), r = Z(null), o = Z("not-calculated"), l = Et(() => n.items.some((d) => !d.isDisabled)), a = Et(() => n.items.some((d) => d.isActive));
    function c() {
      if (!r.value)
        return "bottom-left";
      const d = n.editorDomNode.getBoundingClientRect();
      return r.value.$el.getBoundingClientRect().left - d.left > 200 ? "bottom-right" : "bottom-left";
    }
    cn(() => {
      o.value = c();
    });
    function u(d) {
      s(d === "open" ? "open" : "close");
    }
    return (d, f) => (J(), te(ut(xy), {
      as: "div",
      class: "tiptap-dropdown"
    }, {
      default: Ze(() => [
        dt(ut(Sy), {
          ref_key: "dropdownButtonRef",
          ref: r,
          class: Be(["tiptap-dropdown__button", {
            "tiptap-dropdown__button--active": a.value
          }]),
          disabled: !l.value
        }, {
          default: Ze(() => [
            Rt("span", Ty, nn(e.label), 1),
            dt(Ni, {
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
        dt($h, {
          "enter-active-class": "transition-enter-active",
          "enter-from-class": "transition-enter-from",
          "enter-to-class": "transition-enter-to",
          "leave-active-class": "transition-leave-active",
          "leave-from-class": "transition-leave-from",
          "leave-to-class": "transition-leave-to",
          onAfterLeave: f[0] || (f[0] = () => u("close")),
          onAfterEnter: f[1] || (f[1] = () => u("open"))
        }, {
          default: Ze(() => [
            dt(ut(Cy), {
              ref_key: "dropdownContentRef",
              ref: i,
              class: Be(["tiptap-dropdown__content", {
                "tiptap-dropdown__content--bottom-left": o.value === "bottom-left",
                "tiptap-dropdown__content--bottom-right": o.value === "bottom-right"
              }])
            }, {
              default: Ze(() => [
                (J(!0), at(ft, null, os(e.items, (h, p) => (J(), te(ut(Ey), {
                  key: `item-${p}`,
                  as: "template"
                }, {
                  default: Ze(() => [
                    Rt("button", {
                      class: Be(["tiptap-dropdown__content-button", {
                        "tiptap-dropdown__content-button--active": h.isActive
                      }]),
                      onClick: h.action
                    }, [
                      h.icon ? (J(), te(Ni, {
                        key: 0,
                        icon: h.icon,
                        size: "16px"
                      }, null, 8, ["icon"])) : Xt("", !0),
                      Rt("span", null, nn(h.label), 1)
                    ], 10, My)
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
}), Dy = /* @__PURE__ */ Yt({
  __name: "Stylesheets",
  props: {
    stylesheets: {}
  },
  setup(e) {
    const t = e, n = Z(null), s = Z([]), i = Z([]);
    ei(() => t.stylesheets, async (o) => {
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
      const a = await fetch(o);
      if (!a.ok)
        throw new Error(`HTTP error! status: ${a.status}`);
      const c = await a.text(), u = document.createElement("style");
      u.textContent = `.tiptap { ${c} }`, u.dataset.source = o, l.appendChild(u), i.value.push(u), s.value.push(o);
    }
    return Ps(() => {
      i.value.forEach((o) => {
        o.parentNode && o.parentNode.removeChild(o);
      });
    }), (o, l) => (J(), at("div", {
      ref_key: "componentRef",
      ref: n
    }, null, 512));
  }
}), Oy = il({
  id: ss(),
  contentCss: ol(ss()).optional(),
  plugins: ol(
    il({
      path: ss(),
      config: jd(
        ss(),
        zd()
      ).optional()
    })
  ).optional(),
  enableContentDragAndDrop: rl().default(!1),
  linkBrowserUrl: ss(),
  enableDebugMode: rl().default(!1)
}), Ry = {
  key: 0,
  class: "tiptap-container"
}, Iy = {
  key: 0,
  class: "tiptap-toolbar"
}, Ny = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Py = { key: 0 }, Ly = ["disabled", "onClick"], $y = { class: "tiptap-sr-only" }, By = { key: 1 }, Fy = { class: "tiptap-bubble-menu" }, Hy = {
  key: 0,
  class: "tiptap-toolbar__group"
}, Uy = { key: 0 }, Vy = ["disabled", "onClick"], jy = { class: "tiptap-sr-only" }, zy = { key: 5 }, Wy = /* @__PURE__ */ Yt({
  __name: "TipTapEditor.ce",
  props: {
    options: { type: String }
  },
  setup(e) {
    const t = e, n = m(), s = y(n), i = Z(), r = Z(), o = Z(), l = Z(), a = Z(), c = Z(!1), u = Z(0), d = Z(!1), f = Z(!1), h = Et(() => !r.value || c.value || d.value ? !1 : r.value.bubbleMenu.some((C) => C.commands.length > 0)), p = Et(() => s.filter(
      (C) => C.element.toLowerCase() === a.value?.tagName.toLowerCase()
    ));
    function m() {
      try {
        const C = JSON.parse(t.options || "{}"), P = Oy.safeParse(C);
        if (!P.success)
          throw new Error(`Invalid options: ${JSON.stringify(P.error.issues)}`);
        return P.data;
      } catch (C) {
        throw new Error(`Failed to parse options: ${C.message}`);
      }
    }
    function y(C) {
      const P = C.plugins?.find((B) => B.path.endsWith("styles.js") || B.path.endsWith("styles.ts"));
      if (!P)
        return [];
      const T = Vd.safeParse(P.config);
      if (!T.success)
        throw new Error(`Invalid styles plugin config: ${JSON.stringify(T.error.issues)}`);
      return T.data.styles;
    }
    function b() {
      if (!i.value)
        throw new Error("Editor is not initialized yet.");
      if (!r.value)
        throw new Error("Configuration is not initialized yet.");
      const C = [];
      r.value.toolbar.forEach((P) => {
        P.commands.forEach((T) => {
          T.hooks && T.hooks.onEditorMounted && !C.includes(T.id) && (T.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), C.push(T.id));
        });
      }), r.value.bubbleMenu.forEach((P) => {
        P.commands.forEach((T) => {
          T.hooks && T.hooks.onEditorMounted && !C.includes(T.id) && (T.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), C.push(T.id));
        });
      });
    }
    async function M() {
      (await Promise.all(
        n.plugins?.map(async (P) => {
          const T = await import(
            /* @vite-ignore */
            P.path
          );
          if (!T.default || typeof T.default != "function")
            throw new Error(`Plugin ${P.path} does not have a default export or it is not a function.`);
          return () => T.default(P.config);
        }) ?? []
      )).forEach((P) => P());
    }
    function R(C) {
      return c.value && C.id !== "source" ? !0 : C?.status?.isDisabled?.({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) ?? !1;
    }
    function A(C) {
      return C.status && C.status.isVisible ? C.status.isVisible({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) : !0;
    }
    return cn(async () => {
      await M(), r.value = Wd(), await Ht();
      const C = o.value?.assignedElements()[0];
      if (!C || !(C instanceof HTMLTextAreaElement))
        throw new Error('No textarea found in slot "content".');
      l.value = C;
      const P = new Event("change", { bubbles: !0, cancelable: !0 });
      i.value = new Eb({
        content: l.value.value,
        extensions: [
          Cb.configure({
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
          cb,
          ...r.value?.extensions ?? []
        ],
        onUpdate: () => {
          !i.value || !l.value || (c.value = yf(i.value), l.value.value = c.value ? i.value.getText() : i.value.getHTML(), l.value.dispatchEvent(P));
        }
      }), i.value.on("parentNodeChanged", (B) => {
        B.tagName === "doc" ? a.value = void 0 : a.value = B;
      });
      const T = i.value?.extensionManager?.extensions.find(
        (B) => B.name === "characterCount"
      );
      T && T.options.limit && (f.value = {
        characterLimit: T.options.limit
      }), b();
    }), Ps(() => i.value?.destroy()), (C, P) => (J(), at(ft, null, [
      i.value ? (J(), at("div", Ry, [
        r.value.toolbar.some((T) => T.commands.length > 0) ? (J(), at("nav", Iy, [
          (J(!0), at(ft, null, os(r.value.toolbar, (T, B) => (J(), at(ft, {
            key: `tiptap-command-group-${B}`
          }, [
            T.commands.length > 0 ? (J(), at("ol", Ny, [
              T.dropdown ? (J(), at("li", Py, [
                (J(), te(Va, {
                  key: c.value,
                  label: T.dropdown.label,
                  "editor-dom-node": i.value.view.dom,
                  "icon-identifier": T.dropdown.iconIdentifier,
                  items: T.commands.filter(A).map((S) => ({
                    label: S.label,
                    isActive: S?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl }) ?? !1,
                    isDisabled: R(S),
                    icon: S.iconIdentifier,
                    action: () => S.onExecute({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl })
                  }))
                }, null, 8, ["label", "editor-dom-node", "icon-identifier", "items"]))
              ])) : (J(!0), at(ft, { key: 1 }, os(T.commands, (S) => (J(), at("li", {
                key: `tiptap-group-${T.id}-command-${S.id}`
              }, [
                A(S) ? (J(), at("button", {
                  key: c.value,
                  class: Be(["tiptap-toolbar__group-command", {
                    "is-active": S?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl }) ?? !1
                  }]),
                  disabled: R(S),
                  onClick: (N) => S.onExecute({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl })
                }, [
                  Rt("span", $y, nn(S.label), 1),
                  dt(Ni, {
                    icon: S.iconIdentifier,
                    size: "16px"
                  }, null, 8, ["icon"])
                ], 10, Ly)) : Xt("", !0)
              ]))), 128))
            ])) : Xt("", !0)
          ], 64))), 128))
        ])) : Xt("", !0),
        r.value && h.value ? (J(), at("nav", By, [
          dt(ut(Hb), {
            editor: i.value,
            options: {
              onHide: () => u.value += 1
            }
          }, {
            default: Ze(() => [
              Rt("div", Fy, [
                (J(!0), at(ft, null, os(r.value.bubbleMenu, (T, B) => (J(), at(ft, {
                  key: `tiptap-command-group-${B}`
                }, [
                  T.commands.some((S) => !R(S)) ? (J(), at("ol", Hy, [
                    T.dropdown ? (J(), at("li", Uy, [
                      (J(), te(Va, {
                        key: `${c.value}-${u.value}`,
                        label: T.dropdown.label,
                        "icon-identifier": T.dropdown.iconIdentifier,
                        "editor-dom-node": i.value.view.dom,
                        items: T.commands.filter(A).map((S) => ({
                          label: S.label,
                          isActive: S?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          }) ?? !1,
                          isDisabled: R(S),
                          icon: S.iconIdentifier,
                          action: () => S.onExecute({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          })
                        }))
                      }, null, 8, ["label", "icon-identifier", "editor-dom-node", "items"]))
                    ])) : (J(!0), at(ft, { key: 1 }, os(T.commands, (S) => (J(), at("li", {
                      key: `tiptap-group-${T.id}-command-${S.id}`
                    }, [
                      A(S) ? (J(), at("button", {
                        key: c.value,
                        class: Be(["tiptap-toolbar__group-command", {
                          "is-active": S?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          }) ?? !1
                        }]),
                        disabled: R(S),
                        onClick: (N) => S.onExecute({
                          editor: i.value,
                          linkBrowserUrl: ut(n).linkBrowserUrl
                        })
                      }, [
                        Rt("span", jy, nn(S.label), 1),
                        dt(Ni, {
                          icon: S.iconIdentifier,
                          size: "16px"
                        }, null, 8, ["icon"])
                      ], 10, Vy)) : Xt("", !0)
                    ]))), 128))
                  ])) : Xt("", !0)
                ], 64))), 128))
              ])
            ]),
            _: 1
          }, 8, ["editor", "options"])
        ])) : Xt("", !0),
        ut(n).enableContentDragAndDrop ? (J(), te(ut(F0), {
          key: 2,
          editor: i.value
        }, {
          default: Ze(() => [...P[0] || (P[0] = [
            Rt("div", { class: "custom-drag-handle" }, null, -1)
          ])]),
          _: 1
        }, 8, ["editor"])) : Xt("", !0),
        dt(ut(Ab), {
          editor: i.value,
          class: Be([{
            "pl-9": ut(n).enableContentDragAndDrop
          }, "tiptap-editor-content"])
        }, null, 8, ["editor", "class"]),
        f.value ? (J(), te(jb, {
          key: 3,
          editor: i.value,
          limit: f.value.characterLimit
        }, null, 8, ["editor", "limit"])) : Xt("", !0),
        ut(n) && ut(n).contentCss ? (J(), te(Dy, {
          key: 4,
          stylesheets: ut(n).contentCss
        }, null, 8, ["stylesheets"])) : Xt("", !0),
        ut(n).enableDebugMode ? (J(), at("pre", zy, nn(p.value), 1)) : Xt("", !0)
      ])) : Xt("", !0),
      Vf(C.$slots, "default", {
        ref_key: "slotRef",
        ref: o
      })
    ], 64));
  }
}), Ky = '@charset "UTF-8";.tiptap-container{--tiptap-color-primary: light-dark(hsl(220deg 90% 56%), hsl(220deg 90% 66%));--tiptap-color-neutral-white: hsl(0deg 0% 100%);--tiptap-color-neutral-10: hsl(0deg 0% 10%);--tiptap-color-neutral-20: hsl(0deg 0% 20%);--tiptap-color-neutral-40: hsl(0deg 0% 40%);--tiptap-color-neutral-80: hsl(0deg 0% 80%);--tiptap-color-neutral-90: hsl(0deg 0% 90%);--tiptap-color-surface: light-dark(var(--tiptap-color-neutral-white), var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-border: var(--typo3-input-border-color);--tiptap-color-text-subtle: light-dark(var(--tiptap-color-neutral-40), var(--tiptap-color-neutral-80));--tiptap-border-width: var(--typo3-input-border-width);--tiptap-border-radius: var(--typo3-input-border-radius);--tiptap-border-radius-inner-gap: .25rem;--tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap: .25rem;--tiptap-box-shadow: 0 .1rem .3rem rgb(0 0 0 / .1);border:var(--tiptap-border-width) solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){padding:0;color:inherit;background-color:transparent;border:none}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(black,white)}.tiptap{padding:3rem;min-block-size:20rem;outline:none}.tiptap>:first-child{margin-block-start:0}.tiptap-editor-content{overflow:hidden;position:relative}.tiptap-toolbar{display:flex;flex-wrap:wrap;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-border)}.tiptap-toolbar__group{display:flex;flex-wrap:wrap;gap:var(--tiptap-toolbar-gap);margin:0;padding:0;list-style:none}.tiptap-toolbar__group:not(:last-child){margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap);border-inline-end:1px solid var(--tiptap-color-border)}.tiptap-toolbar__group-command{padding:.5rem;border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1/1;block-size:100%;transition:ease .15s;transition-property:background-color,color,transform}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl,var(--tiptap-color-surface-highlight) 50%,transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{inline-size:100%;block-size:100%}.tiptap-bubble-menu{display:flex;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap);margin-inline:1rem}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation: 0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation: 180deg}.tiptap-dropdown__button{display:inline-flex;align-items:center;justify-content:space-between;padding:.5rem;background-color:transparent;gap:.25rem;border:none;cursor:pointer;transition:color .2s ease-in-out,transform .1s ease-in-out}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size: .9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:center;transition:transform .2s ease-in-out}.tiptap-dropdown__content{display:grid;position:absolute;padding-block:.25rem;background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{inset-inline-start:0;transform-origin:top left}.tiptap-dropdown__content--bottom-right{inset-inline-end:0;transform-origin:top right}.tiptap-dropdown__content-button{display:flex;align-items:center;padding:.5rem 1rem;gap:.5rem;cursor:pointer}.tiptap-dropdown__content-button>*{flex-shrink:0;text-wrap:nowrap}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection *::selection{background:transparent}.ProseMirror-noderangeselection *{caret-color:transparent}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{position:absolute;pointer-events:none;z-index:-1;content:"";inset:-.25rem;background-color:#70cff850;border-radius:.2rem}.custom-drag-handle:after{display:flex;align-items:center;justify-content:center;width:1rem;height:1.25rem;margin-inline-end:.5rem;padding:.25rem .1rem;content:"⠿";font-weight:700;cursor:grab;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;transition:background-color .2s ease-in-out}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:1.25rem}.transition-dropdown{--scale: 1;--translate-y: 0;--opacity: 1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale: .95;--opacity: 1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale: 1;--opacity: 1}.transition-dropdown-leave-to{--scale: .95;--opacity: 0}.tiptap-character-count{align-items:center;color:var(--tiptap-color-text-subtle);display:flex;font-size:.75rem;gap:.5rem;margin:1.25rem .75rem}.tiptap-character-count svg{color:var(--token-color-orange-40)}.tiptap-character-count--warning,.tiptap-character-count--warning svg{color:var(--bs-danger)}', qy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Jy = /* @__PURE__ */ qy(Wy, [["styles", [Ky]]]), Yy = /* @__PURE__ */ ip(Jy);
customElements.define("editor-tiptap", Yy);
export {
  wv as CommandManager,
  tf as Editor,
  bv as Extendable,
  Rs as Extension,
  yv as Fragment,
  vv as InputRule,
  Jd as MappablePosition,
  tc as Mark,
  _v as MarkView,
  Jn as Node,
  kv as NodePos,
  xv as NodeView,
  Sv as PasteRule,
  Cv as ResizableNodeView,
  Ev as ResizableNodeview,
  Av as Tracker,
  Tv as callOrReturn,
  Qd as canInsertNode,
  Mv as combineTransactionSteps,
  Dv as commands,
  Ov as createAtomBlockMarkdownSpec,
  Rv as createBlockMarkdownSpec,
  Iv as createChainableState,
  Nv as createDocument,
  Pv as createElement,
  Lv as createInlineMarkdownSpec,
  $v as createMappablePosition,
  Bv as createNodeFromContent,
  Fv as createStyleTag,
  Hv as defaultBlockAt,
  pv as defineTipTapPlugin,
  Uv as deleteProps,
  Vv as elementFromString,
  jv as escapeForRegEx,
  zv as extensions,
  Wv as findChildren,
  Kv as findChildrenInRange,
  qv as findDuplicates,
  Jv as findParentNode,
  Yv as findParentNodeClosestToPos,
  Gv as flattenExtensions,
  Xv as fromString,
  Qv as generateHTML,
  Zv as generateJSON,
  t1 as generateText,
  e1 as getAttributes,
  n1 as getAttributesFromExtensions,
  s1 as getChangedRanges,
  i1 as getDebugJSON,
  r1 as getExtensionField,
  o1 as getHTMLFromFragment,
  l1 as getMarkAttributes,
  a1 as getMarkRange,
  c1 as getMarkType,
  u1 as getMarksBetween,
  d1 as getNodeAtPosition,
  f1 as getNodeAttributes,
  h1 as getNodeType,
  p1 as getRenderedAttributes,
  g1 as getSchema,
  m1 as getSchemaByResolvedExtensions,
  w1 as getSchemaTypeByName,
  b1 as getSchemaTypeNameByName,
  y1 as getSplittedAttributes,
  v1 as getText,
  _1 as getTextBetween,
  k1 as getTextContentFromNodes,
  x1 as getTextSerializersFromSchema,
  qd as getUpdatedPosition,
  S1 as h,
  C1 as injectExtensionAttributesToParseRule,
  E1 as inputRulesPlugin,
  A1 as isActive,
  T1 as isAndroid,
  M1 as isAtEndOfNode,
  D1 as isAtStartOfNode,
  O1 as isEmptyObject,
  R1 as isExtensionRulesEnabled,
  I1 as isFunction,
  N1 as isList,
  P1 as isMacOS,
  L1 as isMarkActive,
  $1 as isNodeActive,
  B1 as isNodeEmpty,
  Zd as isNodeSelection,
  F1 as isNumber,
  H1 as isPlainObject,
  U1 as isRegExp,
  V1 as isString,
  nf as isTextSelection,
  j1 as isiOS,
  nc as markInputRule,
  ec as markPasteRule,
  z1 as markdown,
  qn as mergeAttributes,
  W1 as mergeDeep,
  K1 as minMax,
  Xd as nodeInputRule,
  q1 as nodePasteRule,
  J1 as objectIncludes,
  Y1 as parseAttributes,
  G1 as parseIndentedBlocks,
  gv as parseTipTapPluginYamlConfiguration,
  X1 as pasteRulesPlugin,
  sf as posToDOMRect,
  Q1 as removeDuplicates,
  Z1 as renderNestedMarkdownContent,
  t_ as resolveExtensions,
  e_ as resolveFocusPosition,
  n_ as rewriteUnknownContent,
  s_ as selectionToInsertionEnd,
  i_ as serializeAttributes,
  r_ as sortExtensions,
  o_ as splitExtensions,
  ht as textInputRule,
  l_ as textPasteRule,
  al as textblockTypeInputRule,
  a_ as updateMarkViewAttributes,
  c_ as wrappingInputRule
};
