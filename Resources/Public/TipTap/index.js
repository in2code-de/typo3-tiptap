import { e as wt, i as q, a as Mt, n as Oe, b as Nt, c as Ma, d as Y, f as ii, g as Mi, h as ri, j as Di, N as Ie, k as Da, p as Oa, m as Ia, l as Ra, E as ot, t as Oi, o as sr, q as st, r as La, s as Cn, u as od, R as ld, v as ss, w as ad, x as Lt, y as cd, z as ir, A as Qt, B as ud, C as dd, D as Pa, G as so, H as fd, I as hd, J as pn, K as gn, L as pd, M as gd, O as md, P as wd, Q as bd, S as vd, T as qo, U as yd, V as Na, W as io, X as Ba, Y as ut, Z as Er, _ as xd, $ as $a, a0 as Z, a1 as kd, a2 as _d, a3 as Ge, a4 as Sd } from "./styles-DkDB69Ie.js";
import { o as Yo, b as Jo, s as Xn, a as Go, r as Cd, u as Ed, c as Ad } from "./configuration-C_EeEZGV.js";
import { d as Wv, p as Kv } from "./configuration-C_EeEZGV.js";
import { P as yn, a as Be, S as Hs, F as Fs, T as Xe, A as Td, N as ro, E as As, g as Md, M as Dd, b as Ha, D as Xo, c as Od, d as Id, e as Rd, t as ht, f as Fa, m as Va, h as Ua, i as Vn, j as Un, k as Qo, n as Ld, l as Pd, o as Nd, p as Bd, q as $d, r as Hd } from "./index-oLzXX581.js";
import { C as Yv, s as Jv, u as Gv, I as Xv, v as Qv, w as Zv, x as ty, y as ey, R as ny, z as sy, B as iy, G as ry, H as oy, J as ly, K as ay, L as cy, O as uy, Q as dy, U as fy, V as hy, W as py, X as gy, Y as my, Z as wy, _ as by, $ as vy, a0 as yy, a1 as xy, a2 as ky, a3 as _y, a4 as Sy, a5 as Cy, a6 as Ey, a7 as Ay, a8 as Ty, a9 as My, aa as Dy, ab as Oy, ac as Iy, ad as Ry, ae as Ly, af as Py, ag as Ny, ah as By, ai as $y, aj as Hy, ak as Fy, al as Vy, am as Uy, an as jy, ao as zy, ap as Wy, aq as Ky, ar as qy, as as Yy, at as Jy, au as Gy, av as Xy, aw as Qy, ax as Zy, ay as t1, U as e1, az as n1, aA as s1, aB as i1, aC as r1, aD as o1, aE as l1, aF as a1, aG as c1, aH as u1, aI as d1, aJ as f1, aK as h1, aL as p1, aM as g1, aN as m1, aO as w1, aP as b1, aQ as v1, aR as y1, aS as x1, aT as k1, aU as _1, aV as S1, aW as C1, aX as E1, aY as A1, aZ as T1, a_ as M1, a$ as D1, b0 as O1, b1 as I1, b2 as R1, b3 as L1, b4 as P1, b5 as N1, b6 as B1, b7 as $1, b8 as H1, b9 as F1, ba as V1, bb as U1 } from "./index-oLzXX581.js";
import { B as Fd } from "./index-ChRtN2EZ.js";
import { B as Vd } from "./index-Cx092m1B.js";
import { H as Ud } from "./index-DW3_VDBk.js";
import { I as jd } from "./index-BdSithC_.js";
import { L as zd } from "./index-Ov2AxGg1.js";
import { B as Wd, L as Kd, a as qd, O as Yd } from "./index-DcmiXLvf.js";
import { U as Jd } from "./index-Bqn8FasZ.js";
import { D as Gd, G as Xd, U as Qd, T as Zd } from "./index-4m4BTiY4.js";
import { C as tf } from "./index-H4DBvHL_.js";
import { getEditorSourceViewActiveStatus as ef } from "./plugins/source.js";
function Ts(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Ii(i, t, n);
  }
}
function ae(e, t, n, s) {
  if (q(e)) {
    const i = Ts(e, t, n, s);
    return i && Ra(i) && i.catch((r) => {
      Ii(r, t, n);
    }), i;
  }
  if (Y(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ae(e[r], t, n, s));
    return i;
  }
}
function Ii(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ot;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      pn(), Ts(r, null, 10, [
        e,
        a,
        u
      ]), gn();
      return;
    }
  }
  nf(e, n, i, s, o);
}
function nf(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ot = [];
let ye = -1;
const En = [];
let We = null, Sn = 0;
const ja = /* @__PURE__ */ Promise.resolve();
let oi = null;
function Ft(e) {
  const t = oi || ja;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sf(e) {
  let t = ye + 1, n = Ot.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ot[s], r = cs(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function oo(e) {
  if (!(e.flags & 1)) {
    const t = cs(e), n = Ot[Ot.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= cs(n) ? Ot.push(e) : Ot.splice(sf(t), 0, e), e.flags |= 1, za();
  }
}
function za() {
  oi || (oi = ja.then(Ka));
}
function rf(e) {
  Y(e) ? En.push(...e) : We && e.id === -1 ? We.splice(Sn + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1), za();
}
function Zo(e, t, n = ye + 1) {
  for (; n < Ot.length; n++) {
    const s = Ot[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ot.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Wa(e) {
  if (En.length) {
    const t = [...new Set(En)].sort(
      (n, s) => cs(n) - cs(s)
    );
    if (En.length = 0, We) {
      We.push(...t);
      return;
    }
    for (We = t, Sn = 0; Sn < We.length; Sn++) {
      const n = We[Sn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    We = null, Sn = 0;
  }
}
const cs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ka(e) {
  try {
    for (ye = 0; ye < Ot.length; ye++) {
      const t = Ot[ye];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ts(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ye < Ot.length; ye++) {
      const t = Ot[ye];
      t && (t.flags &= -2);
    }
    ye = -1, Ot.length = 0, Wa(), oi = null, (Ot.length || En.length) && Ka();
  }
}
let kt = null, qa = null;
function li(e) {
  const t = kt;
  return kt = e, qa = e && e.type.__scopeId || null, t;
}
function qe(e, t = kt, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ui(-1);
    const r = li(t);
    let o;
    try {
      o = e(...i);
    } finally {
      li(r), s._d && ui(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function of(e, t) {
  if (kt === null)
    return e;
  const n = $i(kt), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = ot] = t[i];
    r && (q(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && yd(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function on(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (pn(), ae(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), gn());
  }
}
const lf = /* @__PURE__ */ Symbol("_vte"), Ya = (e) => e.__isTeleport, De = /* @__PURE__ */ Symbol("_leaveCb"), Vs = /* @__PURE__ */ Symbol("_enterCb");
function af() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return sn(() => {
    e.isMounted = !0;
  }), Ms(() => {
    e.isUnmounting = !0;
  }), e;
}
const Gt = [Function, Array], Ja = {
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
}, Ga = (e) => {
  const t = e.subTree;
  return t.component ? Ga(t.component) : t;
}, cf = {
  name: "BaseTransition",
  props: Ja,
  setup(e, { slots: t }) {
    const n = Bi(), s = af();
    return () => {
      const i = t.default && Za(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = Xa(i), o = Oi(e), { mode: l } = o;
      if (s.isLeaving)
        return rr(r);
      const a = tl(r);
      if (!a)
        return rr(r);
      let u = Ar(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== St && us(a, u);
      let c = n.subTree && tl(n.subTree);
      if (c && c.type !== St && !un(c, a) && Ga(n).type !== St) {
        let d = Ar(
          c,
          o,
          s,
          n
        );
        if (us(c, d), l === "out-in" && a.type !== St)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, rr(r);
        l === "in-out" && a.type !== St ? d.delayLeave = (f, h, p) => {
          const w = Qa(
            s,
            c
          );
          w[String(c.key)] = c, f[De] = () => {
            h(), f[De] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            p(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Xa(e) {
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
const uf = cf;
function Qa(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ar(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: w,
    onBeforeAppear: y,
    onAppear: b,
    onAfterAppear: O,
    onAppearCancelled: N
  } = t, E = String(e.key), B = Qa(n, e), T = (M, x) => {
    M && ae(
      M,
      s,
      9,
      x
    );
  }, $ = (M, x) => {
    const V = x[1];
    T(M, x), Y(M) ? M.every((D) => D.length <= 1) && V() : M.length <= 1 && V();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(M) {
      let x = a;
      if (!n.isMounted)
        if (r)
          x = y || a;
        else
          return;
      M[De] && M[De](
        !0
        /* cancelled */
      );
      const V = B[E];
      V && un(e, V) && V.el[De] && V.el[De](), T(x, [M]);
    },
    enter(M) {
      let x = u, V = c, D = d;
      if (!n.isMounted)
        if (r)
          x = b || u, V = O || c, D = N || d;
        else
          return;
      let z = !1;
      const G = M[Vs] = (pt) => {
        z || (z = !0, pt ? T(D, [M]) : T(V, [M]), R.delayedLeave && R.delayedLeave(), M[Vs] = void 0);
      };
      x ? $(x, [M, G]) : G();
    },
    leave(M, x) {
      const V = String(e.key);
      if (M[Vs] && M[Vs](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return x();
      T(f, [M]);
      let D = !1;
      const z = M[De] = (G) => {
        D || (D = !0, x(), G ? T(w, [M]) : T(p, [M]), M[De] = void 0, B[V] === e && delete B[V]);
      };
      B[V] = e, h ? $(h, [M, z]) : z();
    },
    clone(M) {
      const x = Ar(
        M,
        t,
        n,
        s,
        i
      );
      return i && i(x), x;
    }
  };
  return R;
}
function rr(e) {
  if (Ri(e))
    return e = Pe(e), e.children = null, e;
}
function tl(e) {
  if (!Ri(e))
    return Ya(e.type) && e.children ? Xa(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && q(n.default))
      return n.default();
  }
}
function us(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, us(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Za(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ft ? (o.patchFlag & 128 && i++, s = s.concat(
      Za(o.children, t, l)
    )) : (t || o.type !== St) && s.push(l != null ? Pe(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function df() {
  const e = Bi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function tc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ai = /* @__PURE__ */ new WeakMap();
function is(e, t, n, s, i = !1) {
  if (Y(e)) {
    e.forEach(
      (p, w) => is(
        p,
        t && (Y(t) ? t[w] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (An(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && is(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? $i(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, u = t && t.r, c = l.refs === ot ? l.refs = {} : l.refs, d = l.setupState, f = Oi(d), h = d === ot ? Da : (p) => st(f, p);
  if (u != null && u !== a) {
    if (el(t), Mt(u))
      c[u] = null, h(u) && (d[u] = null);
    else if (ri(u)) {
      u.value = null;
      const p = t;
      p.k && (c[p.k] = null);
    }
  }
  if (q(a))
    Ts(a, l, 12, [o, c]);
  else {
    const p = Mt(a), w = ri(a);
    if (p || w) {
      const y = () => {
        if (e.f) {
          const b = p ? h(a) ? d[a] : c[a] : a.value;
          if (i)
            Y(b) && La(b, r);
          else if (Y(b))
            b.includes(r) || b.push(r);
          else if (p)
            c[a] = [r], h(a) && (d[a] = c[a]);
          else {
            const O = [r];
            a.value = O, e.k && (c[e.k] = O);
          }
        } else p ? (c[a] = o, h(a) && (d[a] = o)) : w && (a.value = o, e.k && (c[e.k] = o));
      };
      if (o) {
        const b = () => {
          y(), ai.delete(e);
        };
        b.id = -1, ai.set(e, b), zt(b, n);
      } else
        el(e), y();
    }
  }
}
function el(e) {
  const t = ai.get(e);
  t && (t.flags |= 8, ai.delete(e));
}
Di().requestIdleCallback;
Di().cancelIdleCallback;
const An = (e) => !!e.type.__asyncLoader, Ri = (e) => e.type.__isKeepAlive;
function ff(e, t) {
  ec(e, "a", t);
}
function hf(e, t) {
  ec(e, "da", t);
}
function ec(e, t, n = Ct) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Li(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ri(i.parent.vnode) && pf(s, t, n, i), i = i.parent;
  }
}
function pf(e, t, n, s) {
  const i = Li(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ds(() => {
    La(s[t], i);
  }, n);
}
function Li(e, t, n = Ct, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      pn();
      const l = Os(n), a = ae(t, n, e, o);
      return l(), gn(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const $e = (e) => (t, n = Ct) => {
  (!hs || e === "sp") && Li(e, (...s) => t(...s), n);
}, gf = $e("bm"), sn = $e("m"), mf = $e(
  "bu"
), wf = $e("u"), Ms = $e(
  "bum"
), Ds = $e("um"), bf = $e(
  "sp"
), vf = $e("rtg"), yf = $e("rtc");
function xf(e, t = Ct) {
  Li("ec", e, t);
}
const kf = "components", _f = /* @__PURE__ */ Symbol.for("v-ndc");
function Sf(e) {
  return Mt(e) && Cf(kf, e, !1) || e;
}
function Cf(e, t, n = !0, s = !1) {
  const i = kt || Ct;
  if (i) {
    const r = i.type;
    {
      const l = hh(
        r,
        !1
      );
      if (l && (l === t || l === Lt(t) || l === io(Lt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      nl(i[e] || r[e], t) || // global registration
      nl(i.appContext[e], t)
    );
    return !o && s ? r : o;
  }
}
function nl(e, t) {
  return e && (e[t] || e[Lt(t)] || e[io(Lt(t))]);
}
function es(e, t, n, s) {
  let i;
  const r = n, o = Y(e);
  if (o || Mt(e)) {
    const l = o && gd(e);
    let a = !1, u = !1;
    l && (a = !md(e), u = wd(e), e = bd(e)), i = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(
        a ? u ? vd(qo(e[c])) : qo(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (Nt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, r);
      }
    }
  else
    i = [];
  return i;
}
function Ef(e, t, n = {}, s, i) {
  if (kt.ce || kt.parent && An(kt.parent) && kt.parent.ce) {
    const u = Object.keys(n).length > 0;
    return J(), Zt(
      ft,
      null,
      [dt("slot", n, s)],
      u ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), J();
  const o = r && nc(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, a = Zt(
    ft,
    {
      key: (l && !Na(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function nc(e) {
  return e.some((t) => fs(t) ? !(t.type === St || t.type === ft && !nc(t.children)) : !0) ? e : null;
}
const Tr = (e) => e ? xc(e) ? $i(e) : Tr(e.parent) : null, rs = (
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
    $parent: (e) => Tr(e.parent),
    $root: (e) => Tr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ic(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      oo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ft.bind(e.proxy)),
    $watch: (e) => Bf.bind(e)
  })
), or = (e, t) => e !== ot && !e.__isScriptSetup && st(e, t), Af = {
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
        if (or(s, t))
          return o[t] = 1, s[t];
        if (i !== ot && st(i, t))
          return o[t] = 2, i[t];
        if (st(r, t))
          return o[t] = 3, r[t];
        if (n !== ot && st(n, t))
          return o[t] = 4, n[t];
        Mr && (o[t] = 0);
      }
    }
    const u = rs[t];
    let c, d;
    if (u)
      return t === "$attrs" && Pa(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
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
    return or(i, t) ? (i[t] = n, !0) : s !== ot && st(s, t) ? (s[t] = n, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== ot && l[0] !== "$" && st(e, l) || or(t, l) || st(r, l) || st(s, l) || st(rs, l) || st(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function sl(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Mr = !0;
function Tf(e) {
  const t = ic(e), n = e.proxy, s = e.ctx;
  Mr = !1, t.beforeCreate && il(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: p,
    activated: w,
    deactivated: y,
    beforeDestroy: b,
    beforeUnmount: O,
    destroyed: N,
    unmounted: E,
    render: B,
    renderTracked: T,
    renderTriggered: $,
    errorCaptured: R,
    serverPrefetch: M,
    // public API
    expose: x,
    inheritAttrs: V,
    // assets
    components: D,
    directives: z,
    filters: G
  } = t;
  if (u && Mf(u, s, null), o)
    for (const K in o) {
      const j = o[K];
      q(j) && (s[K] = j.bind(n));
    }
  if (i) {
    const K = i.call(n, n);
    Nt(K) && (e.data = hd(K));
  }
  if (Mr = !0, r)
    for (const K in r) {
      const j = r[K], _t = q(j) ? j.bind(n, n) : q(j.get) ? j.get.bind(n, n) : Ie, _n = !q(j) && q(j.set) ? j.set.bind(n) : Ie, rn = At({
        get: _t,
        set: _n
      });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => rn.value,
        set: (pe) => rn.value = pe
      });
    }
  if (l)
    for (const K in l)
      sc(l[K], s, n, K);
  if (a) {
    const K = q(a) ? a.call(n) : a;
    Reflect.ownKeys(K).forEach((j) => {
      lo(j, K[j]);
    });
  }
  c && il(c, e, "c");
  function tt(K, j) {
    Y(j) ? j.forEach((_t) => K(_t.bind(n))) : j && K(j.bind(n));
  }
  if (tt(gf, d), tt(sn, f), tt(mf, h), tt(wf, p), tt(ff, w), tt(hf, y), tt(xf, R), tt(yf, T), tt(vf, $), tt(Ms, O), tt(Ds, E), tt(bf, M), Y(x))
    if (x.length) {
      const K = e.exposed || (e.exposed = {});
      x.forEach((j) => {
        Object.defineProperty(K, j, {
          get: () => n[j],
          set: (_t) => n[j] = _t,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Ie && (e.render = B), V != null && (e.inheritAttrs = V), D && (e.components = D), z && (e.directives = z), M && tc(e);
}
function Mf(e, t, n = Ie) {
  Y(e) && (e = Dr(e));
  for (const s in e) {
    const i = e[s];
    let r;
    Nt(i) ? "default" in i ? r = fn(
      i.from || s,
      i.default,
      !0
    ) : r = fn(i.from || s) : r = fn(i), ri(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function il(e, t, n) {
  ae(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function sc(e, t, n, s) {
  let i = s.includes(".") ? oc(n, s) : () => n[s];
  if (Mt(e)) {
    const r = t[e];
    q(r) && Js(i, r);
  } else if (q(e))
    Js(i, e.bind(n));
  else if (Nt(e))
    if (Y(e))
      e.forEach((r) => sc(r, t, n, s));
    else {
      const r = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(r) && Js(i, r, e);
    }
}
function ic(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (u) => ci(a, u, o, !0)
  ), ci(a, t, o)), Nt(t) && r.set(t, a), a;
}
function ci(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && ci(e, r, n, !0), i && i.forEach(
    (o) => ci(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Df[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Df = {
  data: rl,
  props: ol,
  emits: ol,
  // objects
  methods: ns,
  computed: ns,
  // lifecycle
  beforeCreate: Dt,
  created: Dt,
  beforeMount: Dt,
  mounted: Dt,
  beforeUpdate: Dt,
  updated: Dt,
  beforeDestroy: Dt,
  beforeUnmount: Dt,
  destroyed: Dt,
  unmounted: Dt,
  activated: Dt,
  deactivated: Dt,
  errorCaptured: Dt,
  serverPrefetch: Dt,
  // assets
  components: ns,
  directives: ns,
  // watch
  watch: If,
  // provide / inject
  provide: rl,
  inject: Of
};
function rl(e, t) {
  return t ? e ? function() {
    return wt(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Of(e, t) {
  return ns(Dr(e), Dr(t));
}
function Dr(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Dt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ns(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ol(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    sl(e),
    sl(t ?? {})
  ) : t;
}
function If(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Dt(e[s], t[s]);
  return n;
}
function rc() {
  return {
    app: null,
    config: {
      isNativeTag: Da,
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
let Rf = 0;
function Lf(e, t) {
  return function(s, i = null) {
    q(s) || (s = wt({}, s)), i != null && !Nt(i) && (i = null);
    const r = rc(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = r.app = {
      _uid: Rf++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: gh,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return o.has(c) || (c && q(c.install) ? (o.add(c), c.install(u, ...d)) : q(c) && (o.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (r.components[c] = d, u) : r.components[c];
      },
      directive(c, d) {
        return d ? (r.directives[c] = d, u) : r.directives[c];
      },
      mount(c, d, f) {
        if (!a) {
          const h = u._ceVNode || dt(s, i);
          return h.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, c, f), a = !0, u._container = c, c.__vue_app__ = u, $i(h.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (ae(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return r.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = Tn;
        Tn = u;
        try {
          return c();
        } finally {
          Tn = d;
        }
      }
    };
    return u;
  };
}
let Tn = null;
function lo(e, t) {
  if (Ct) {
    let n = Ct.provides;
    const s = Ct.parent && Ct.parent.provides;
    s === n && (n = Ct.provides = Object.create(s)), n[e] = t;
  }
}
function fn(e, t, n = !1) {
  const s = Bi();
  if (s || Tn) {
    let i = Tn ? Tn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(s && s.proxy) : t;
  }
}
const Pf = /* @__PURE__ */ Symbol.for("v-scx"), Nf = () => fn(Pf);
function jn(e, t) {
  return ao(e, null, t);
}
function Js(e, t, n) {
  return ao(e, t, n);
}
function ao(e, t, n = ot) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = wt({}, n), a = t && s || !t && r !== "post";
  let u;
  if (hs) {
    if (r === "sync") {
      const h = Nf();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Ie, h.resume = Ie, h.pause = Ie, h;
    }
  }
  const c = Ct;
  l.call = (h, p, w) => ae(h, c, p, w);
  let d = !1;
  r === "post" ? l.scheduler = (h) => {
    zt(h, c && c.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (h, p) => {
    p ? h() : oo(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const f = ad(e, t, l);
  return hs && (u ? u.push(f) : a && f()), f;
}
function Bf(e, t, n) {
  const s = this.proxy, i = Mt(e) ? e.includes(".") ? oc(s, e) : () => s[e] : e.bind(s, s);
  let r;
  q(t) ? r = t : (r = t.handler, n = t);
  const o = Os(this), l = ao(i, r.bind(s), n);
  return o(), l;
}
function oc(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const $f = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Lt(t)}Modifiers`] || e[`${Qt(t)}Modifiers`];
function Hf(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ot;
  let i = n;
  const r = t.startsWith("update:"), o = r && $f(s, t.slice(7));
  o && (o.trim && (i = n.map((c) => Mt(c) ? c.trim() : c)), o.number && (i = n.map(cd)));
  let l, a = s[l = ir(t)] || // also try camelCase event handler (#2249)
  s[l = ir(Lt(t))];
  !a && r && (a = s[l = ir(Qt(t))]), a && ae(
    a,
    e,
    6,
    i
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ae(
      u,
      e,
      6,
      i
    );
  }
}
const Ff = /* @__PURE__ */ new WeakMap();
function lc(e, t, n = !1) {
  const s = n ? Ff : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!q(e)) {
    const a = (u) => {
      const c = lc(u, t, !0);
      c && (l = !0, wt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Nt(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => o[a] = null) : wt(o, r), Nt(e) && s.set(e, o), o);
}
function Pi(e, t) {
  return !e || !Mi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Qt(t)) || st(e, t));
}
function ll(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: h,
    ctx: p,
    inheritAttrs: w
  } = e, y = li(e);
  let b, O;
  try {
    if (n.shapeFlag & 4) {
      const E = i || s, B = E;
      b = xe(
        u.call(
          B,
          E,
          c,
          d,
          h,
          f,
          p
        )
      ), O = l;
    } else {
      const E = t;
      b = xe(
        E.length > 1 ? E(
          d,
          { attrs: l, slots: o, emit: a }
        ) : E(
          d,
          null
        )
      ), O = t.props ? l : Vf(l);
    }
  } catch (E) {
    os.length = 0, Ii(E, e, 1), b = dt(St);
  }
  let N = b;
  if (O && w !== !1) {
    const E = Object.keys(O), { shapeFlag: B } = N;
    E.length && B & 7 && (r && E.some(so) && (O = Uf(
      O,
      r
    )), N = Pe(N, O, !1, !0));
  }
  return n.dirs && (N = Pe(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && us(N, n.transition), b = N, li(y), b;
}
const Vf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Uf = (e, t) => {
  const n = {};
  for (const s in e)
    (!so(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function jf(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? al(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (o[f] !== s[f] && !Pi(u, f))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? al(s, o, u) : !0 : !!o;
  return !1;
}
function al(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Pi(n, r))
      return !0;
  }
  return !1;
}
function zf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ac = {}, cc = () => Object.create(ac), uc = (e) => Object.getPrototypeOf(e) === ac;
function Wf(e, t, n, s = !1) {
  const i = {}, r = cc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), dc(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : ud(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Kf(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = Oi(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Pi(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (a)
          if (st(r, f))
            h !== r[f] && (r[f] = h, u = !0);
          else {
            const p = Lt(f);
            i[p] = Or(
              a,
              l,
              p,
              h,
              e,
              !1
            );
          }
        else
          h !== r[f] && (r[f] = h, u = !0);
      }
    }
  } else {
    dc(e, t, i, r) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Qt(d)) === d || !st(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = Or(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !st(t, d)) && (delete r[d], u = !0);
  }
  u && fd(e.attrs, "set", "");
}
function dc(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ss(a))
        continue;
      const u = t[a];
      let c;
      i && st(i, c = Lt(a)) ? !r || !r.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Pi(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
    }
  if (r) {
    const a = Oi(n), u = l || ot;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = Or(
        i,
        a,
        d,
        u[d],
        e,
        !st(u, d)
      );
    }
  }
  return o;
}
function Or(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = st(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && q(a)) {
        const { propsDefaults: u } = i;
        if (n in u)
          s = u[n];
        else {
          const c = Os(i);
          s = u[n] = a.call(
            null,
            t
          ), c();
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
    ] && (s === "" || s === Qt(n)) && (s = !0));
  }
  return s;
}
const qf = /* @__PURE__ */ new WeakMap();
function fc(e, t, n = !1) {
  const s = n ? qf : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!q(e)) {
    const c = (d) => {
      a = !0;
      const [f, h] = fc(d, t, !0);
      wt(o, f), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return Nt(e) && s.set(e, Cn), Cn;
  if (Y(r))
    for (let c = 0; c < r.length; c++) {
      const d = Lt(r[c]);
      cl(d) && (o[d] = ot);
    }
  else if (r)
    for (const c in r) {
      const d = Lt(c);
      if (cl(d)) {
        const f = r[c], h = o[d] = Y(f) || q(f) ? { type: f } : wt({}, f), p = h.type;
        let w = !1, y = !0;
        if (Y(p))
          for (let b = 0; b < p.length; ++b) {
            const O = p[b], N = q(O) && O.name;
            if (N === "Boolean") {
              w = !0;
              break;
            } else N === "String" && (y = !1);
          }
        else
          w = q(p) && p.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = w, h[
          1
          /* shouldCastTrue */
        ] = y, (w || st(h, "default")) && l.push(d);
      }
    }
  const u = [o, l];
  return Nt(e) && s.set(e, u), u;
}
function cl(e) {
  return e[0] !== "$" && !ss(e);
}
const co = (e) => e === "_" || e === "_ctx" || e === "$stable", uo = (e) => Y(e) ? e.map(xe) : [xe(e)], Yf = (e, t, n) => {
  if (t._n)
    return t;
  const s = qe((...i) => uo(t(...i)), n);
  return s._c = !1, s;
}, hc = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (co(i)) continue;
    const r = e[i];
    if (q(r))
      t[i] = Yf(i, r, s);
    else if (r != null) {
      const o = uo(r);
      t[i] = () => o;
    }
  }
}, pc = (e, t) => {
  const n = uo(t);
  e.slots.default = () => n;
}, gc = (e, t, n) => {
  for (const s in t)
    (n || !co(s)) && (e[s] = t[s]);
}, Jf = (e, t, n) => {
  const s = e.slots = cc();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gc(s, t, n), n && dd(s, "_", i, !0)) : hc(t, s);
  } else t && pc(e, t);
}, Gf = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ot;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : gc(i, t, n) : (r = !t.$stable, hc(t, i)), o = t;
  } else t && (pc(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !co(l) && o[l] == null && delete i[l];
}, zt = eh;
function Xf(e) {
  return Qf(e);
}
function Qf(e, t) {
  const n = Di();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = Ie,
    insertStaticContent: p
  } = e, w = (g, m, v, C = null, k = null, _ = null, L = void 0, I = null, A = !!m.dynamicChildren) => {
    if (g === m)
      return;
    g && !un(g, m) && (C = $s(g), pe(g, k, _, !0), g = null), m.patchFlag === -2 && (A = !1, m.dynamicChildren = null);
    const { type: S, ref: F, shapeFlag: P } = m;
    switch (S) {
      case Ni:
        y(g, m, v, C);
        break;
      case St:
        b(g, m, v, C);
        break;
      case ar:
        g == null && O(m, v, C, L);
        break;
      case ft:
        D(
          g,
          m,
          v,
          C,
          k,
          _,
          L,
          I,
          A
        );
        break;
      default:
        P & 1 ? B(
          g,
          m,
          v,
          C,
          k,
          _,
          L,
          I,
          A
        ) : P & 6 ? z(
          g,
          m,
          v,
          C,
          k,
          _,
          L,
          I,
          A
        ) : (P & 64 || P & 128) && S.process(
          g,
          m,
          v,
          C,
          k,
          _,
          L,
          I,
          A,
          Jn
        );
    }
    F != null && k ? is(F, g && g.ref, _, m || g, !m) : F == null && g && g.ref != null && is(g.ref, null, _, g, !0);
  }, y = (g, m, v, C) => {
    if (g == null)
      s(
        m.el = l(m.children),
        v,
        C
      );
    else {
      const k = m.el = g.el;
      m.children !== g.children && u(k, m.children);
    }
  }, b = (g, m, v, C) => {
    g == null ? s(
      m.el = a(m.children || ""),
      v,
      C
    ) : m.el = g.el;
  }, O = (g, m, v, C) => {
    [g.el, g.anchor] = p(
      g.children,
      m,
      v,
      C,
      g.el,
      g.anchor
    );
  }, N = ({ el: g, anchor: m }, v, C) => {
    let k;
    for (; g && g !== m; )
      k = f(g), s(g, v, C), g = k;
    s(m, v, C);
  }, E = ({ el: g, anchor: m }) => {
    let v;
    for (; g && g !== m; )
      v = f(g), i(g), g = v;
    i(m);
  }, B = (g, m, v, C, k, _, L, I, A) => {
    if (m.type === "svg" ? L = "svg" : m.type === "math" && (L = "mathml"), g == null)
      T(
        m,
        v,
        C,
        k,
        _,
        L,
        I,
        A
      );
    else {
      const S = g.el && g.el._isVueCE ? g.el : null;
      try {
        S && S._beginPatch(), M(
          g,
          m,
          k,
          _,
          L,
          I,
          A
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, T = (g, m, v, C, k, _, L, I) => {
    let A, S;
    const { props: F, shapeFlag: P, transition: H, dirs: U } = g;
    if (A = g.el = o(
      g.type,
      _,
      F && F.is,
      F
    ), P & 8 ? c(A, g.children) : P & 16 && R(
      g.children,
      A,
      null,
      C,
      k,
      lr(g, _),
      L,
      I
    ), U && on(g, null, C, "created"), $(A, g, g.scopeId, L, C), F) {
      for (const rt in F)
        rt !== "value" && !ss(rt) && r(A, rt, null, F[rt], _, C);
      "value" in F && r(A, "value", null, F.value, _), (S = F.onVnodeBeforeMount) && be(S, C, g);
    }
    U && on(g, null, C, "beforeMount");
    const X = Zf(k, H);
    X && H.beforeEnter(A), s(A, m, v), ((S = F && F.onVnodeMounted) || X || U) && zt(() => {
      S && be(S, C, g), X && H.enter(A), U && on(g, null, C, "mounted");
    }, k);
  }, $ = (g, m, v, C, k) => {
    if (v && h(g, v), C)
      for (let _ = 0; _ < C.length; _++)
        h(g, C[_]);
    if (k) {
      let _ = k.subTree;
      if (m === _ || bc(_.type) && (_.ssContent === m || _.ssFallback === m)) {
        const L = k.vnode;
        $(
          g,
          L,
          L.scopeId,
          L.slotScopeIds,
          k.parent
        );
      }
    }
  }, R = (g, m, v, C, k, _, L, I, A = 0) => {
    for (let S = A; S < g.length; S++) {
      const F = g[S] = I ? Ke(g[S]) : xe(g[S]);
      w(
        null,
        F,
        m,
        v,
        C,
        k,
        _,
        L,
        I
      );
    }
  }, M = (g, m, v, C, k, _, L) => {
    const I = m.el = g.el;
    let { patchFlag: A, dynamicChildren: S, dirs: F } = m;
    A |= g.patchFlag & 16;
    const P = g.props || ot, H = m.props || ot;
    let U;
    if (v && ln(v, !1), (U = H.onVnodeBeforeUpdate) && be(U, v, m, g), F && on(m, g, v, "beforeUpdate"), v && ln(v, !0), (P.innerHTML && H.innerHTML == null || P.textContent && H.textContent == null) && c(I, ""), S ? x(
      g.dynamicChildren,
      S,
      I,
      v,
      C,
      lr(m, k),
      _
    ) : L || j(
      g,
      m,
      I,
      null,
      v,
      C,
      lr(m, k),
      _,
      !1
    ), A > 0) {
      if (A & 16)
        V(I, P, H, v, k);
      else if (A & 2 && P.class !== H.class && r(I, "class", null, H.class, k), A & 4 && r(I, "style", P.style, H.style, k), A & 8) {
        const X = m.dynamicProps;
        for (let rt = 0; rt < X.length; rt++) {
          const et = X[rt], Bt = P[et], $t = H[et];
          ($t !== Bt || et === "value") && r(I, et, Bt, $t, k, v);
        }
      }
      A & 1 && g.children !== m.children && c(I, m.children);
    } else !L && S == null && V(I, P, H, v, k);
    ((U = H.onVnodeUpdated) || F) && zt(() => {
      U && be(U, v, m, g), F && on(m, g, v, "updated");
    }, C);
  }, x = (g, m, v, C, k, _, L) => {
    for (let I = 0; I < m.length; I++) {
      const A = g[I], S = m[I], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !un(A, S) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? d(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      w(
        A,
        S,
        F,
        null,
        C,
        k,
        _,
        L,
        !0
      );
    }
  }, V = (g, m, v, C, k) => {
    if (m !== v) {
      if (m !== ot)
        for (const _ in m)
          !ss(_) && !(_ in v) && r(
            g,
            _,
            m[_],
            null,
            k,
            C
          );
      for (const _ in v) {
        if (ss(_)) continue;
        const L = v[_], I = m[_];
        L !== I && _ !== "value" && r(g, _, I, L, k, C);
      }
      "value" in v && r(g, "value", m.value, v.value, k);
    }
  }, D = (g, m, v, C, k, _, L, I, A) => {
    const S = m.el = g ? g.el : l(""), F = m.anchor = g ? g.anchor : l("");
    let { patchFlag: P, dynamicChildren: H, slotScopeIds: U } = m;
    U && (I = I ? I.concat(U) : U), g == null ? (s(S, v, C), s(F, v, C), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      v,
      F,
      k,
      _,
      L,
      I,
      A
    )) : P > 0 && P & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (x(
      g.dynamicChildren,
      H,
      v,
      k,
      _,
      L,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || k && m === k.subTree) && mc(
      g,
      m,
      !0
      /* shallow */
    )) : j(
      g,
      m,
      v,
      F,
      k,
      _,
      L,
      I,
      A
    );
  }, z = (g, m, v, C, k, _, L, I, A) => {
    m.slotScopeIds = I, g == null ? m.shapeFlag & 512 ? k.ctx.activate(
      m,
      v,
      C,
      L,
      A
    ) : G(
      m,
      v,
      C,
      k,
      _,
      L,
      A
    ) : pt(g, m, A);
  }, G = (g, m, v, C, k, _, L) => {
    const I = g.component = ah(
      g,
      C,
      k
    );
    if (Ri(g) && (I.ctx.renderer = Jn), ch(I, !1, L), I.asyncDep) {
      if (k && k.registerDep(I, tt, L), !g.el) {
        const A = I.subTree = dt(St);
        b(null, A, m, v), g.placeholder = A.el;
      }
    } else
      tt(
        I,
        g,
        m,
        v,
        k,
        _,
        L
      );
  }, pt = (g, m, v) => {
    const C = m.component = g.component;
    if (jf(g, m, v))
      if (C.asyncDep && !C.asyncResolved) {
        K(C, m, v);
        return;
      } else
        C.next = m, C.update();
    else
      m.el = g.el, C.vnode = m;
  }, tt = (g, m, v, C, k, _, L) => {
    const I = () => {
      if (g.isMounted) {
        let { next: P, bu: H, u: U, parent: X, vnode: rt } = g;
        {
          const me = wc(g);
          if (me) {
            P && (P.el = rt.el, K(g, P, L)), me.asyncDep.then(() => {
              g.isUnmounted || I();
            });
            return;
          }
        }
        let et = P, Bt;
        ln(g, !1), P ? (P.el = rt.el, K(g, P, L)) : P = rt, H && sr(H), (Bt = P.props && P.props.onVnodeBeforeUpdate) && be(Bt, X, P, rt), ln(g, !0);
        const $t = ll(g), ge = g.subTree;
        g.subTree = $t, w(
          ge,
          $t,
          // parent may have changed if it's in a teleport
          d(ge.el),
          // anchor may have changed if it's in a fragment
          $s(ge),
          g,
          k,
          _
        ), P.el = $t.el, et === null && zf(g, $t.el), U && zt(U, k), (Bt = P.props && P.props.onVnodeUpdated) && zt(
          () => be(Bt, X, P, rt),
          k
        );
      } else {
        let P;
        const { el: H, props: U } = m, { bm: X, m: rt, parent: et, root: Bt, type: $t } = g, ge = An(m);
        ln(g, !1), X && sr(X), !ge && (P = U && U.onVnodeBeforeMount) && be(P, et, m), ln(g, !0);
        {
          Bt.ce && // @ts-expect-error _def is private
          Bt.ce._def.shadowRoot !== !1 && Bt.ce._injectChildStyle($t);
          const me = g.subTree = ll(g);
          w(
            null,
            me,
            v,
            C,
            g,
            k,
            _
          ), m.el = me.el;
        }
        if (rt && zt(rt, k), !ge && (P = U && U.onVnodeMounted)) {
          const me = m;
          zt(
            () => be(P, et, me),
            k
          );
        }
        (m.shapeFlag & 256 || et && An(et.vnode) && et.vnode.shapeFlag & 256) && g.a && zt(g.a, k), g.isMounted = !0, m = v = C = null;
      }
    };
    g.scope.on();
    const A = g.effect = new ld(I);
    g.scope.off();
    const S = g.update = A.run.bind(A), F = g.job = A.runIfDirty.bind(A);
    F.i = g, F.id = g.uid, A.scheduler = () => oo(F), ln(g, !0), S();
  }, K = (g, m, v) => {
    m.component = g;
    const C = g.vnode.props;
    g.vnode = m, g.next = null, Kf(g, m.props, C, v), Gf(g, m.children, v), pn(), Zo(g), gn();
  }, j = (g, m, v, C, k, _, L, I, A = !1) => {
    const S = g && g.children, F = g ? g.shapeFlag : 0, P = m.children, { patchFlag: H, shapeFlag: U } = m;
    if (H > 0) {
      if (H & 128) {
        _n(
          S,
          P,
          v,
          C,
          k,
          _,
          L,
          I,
          A
        );
        return;
      } else if (H & 256) {
        _t(
          S,
          P,
          v,
          C,
          k,
          _,
          L,
          I,
          A
        );
        return;
      }
    }
    U & 8 ? (F & 16 && Yn(S, k, _), P !== S && c(v, P)) : F & 16 ? U & 16 ? _n(
      S,
      P,
      v,
      C,
      k,
      _,
      L,
      I,
      A
    ) : Yn(S, k, _, !0) : (F & 8 && c(v, ""), U & 16 && R(
      P,
      v,
      C,
      k,
      _,
      L,
      I,
      A
    ));
  }, _t = (g, m, v, C, k, _, L, I, A) => {
    g = g || Cn, m = m || Cn;
    const S = g.length, F = m.length, P = Math.min(S, F);
    let H;
    for (H = 0; H < P; H++) {
      const U = m[H] = A ? Ke(m[H]) : xe(m[H]);
      w(
        g[H],
        U,
        v,
        null,
        k,
        _,
        L,
        I,
        A
      );
    }
    S > F ? Yn(
      g,
      k,
      _,
      !0,
      !1,
      P
    ) : R(
      m,
      v,
      C,
      k,
      _,
      L,
      I,
      A,
      P
    );
  }, _n = (g, m, v, C, k, _, L, I, A) => {
    let S = 0;
    const F = m.length;
    let P = g.length - 1, H = F - 1;
    for (; S <= P && S <= H; ) {
      const U = g[S], X = m[S] = A ? Ke(m[S]) : xe(m[S]);
      if (un(U, X))
        w(
          U,
          X,
          v,
          null,
          k,
          _,
          L,
          I,
          A
        );
      else
        break;
      S++;
    }
    for (; S <= P && S <= H; ) {
      const U = g[P], X = m[H] = A ? Ke(m[H]) : xe(m[H]);
      if (un(U, X))
        w(
          U,
          X,
          v,
          null,
          k,
          _,
          L,
          I,
          A
        );
      else
        break;
      P--, H--;
    }
    if (S > P) {
      if (S <= H) {
        const U = H + 1, X = U < F ? m[U].el : C;
        for (; S <= H; )
          w(
            null,
            m[S] = A ? Ke(m[S]) : xe(m[S]),
            v,
            X,
            k,
            _,
            L,
            I,
            A
          ), S++;
      }
    } else if (S > H)
      for (; S <= P; )
        pe(g[S], k, _, !0), S++;
    else {
      const U = S, X = S, rt = /* @__PURE__ */ new Map();
      for (S = X; S <= H; S++) {
        const jt = m[S] = A ? Ke(m[S]) : xe(m[S]);
        jt.key != null && rt.set(jt.key, S);
      }
      let et, Bt = 0;
      const $t = H - X + 1;
      let ge = !1, me = 0;
      const Gn = new Array($t);
      for (S = 0; S < $t; S++) Gn[S] = 0;
      for (S = U; S <= P; S++) {
        const jt = g[S];
        if (Bt >= $t) {
          pe(jt, k, _, !0);
          continue;
        }
        let we;
        if (jt.key != null)
          we = rt.get(jt.key);
        else
          for (et = X; et <= H; et++)
            if (Gn[et - X] === 0 && un(jt, m[et])) {
              we = et;
              break;
            }
        we === void 0 ? pe(jt, k, _, !0) : (Gn[we - X] = S + 1, we >= me ? me = we : ge = !0, w(
          jt,
          m[we],
          v,
          null,
          k,
          _,
          L,
          I,
          A
        ), Bt++);
      }
      const zo = ge ? th(Gn) : Cn;
      for (et = zo.length - 1, S = $t - 1; S >= 0; S--) {
        const jt = X + S, we = m[jt], Wo = m[jt + 1], Ko = jt + 1 < F ? (
          // #13559, fallback to el placeholder for unresolved async component
          Wo.el || Wo.placeholder
        ) : C;
        Gn[S] === 0 ? w(
          null,
          we,
          v,
          Ko,
          k,
          _,
          L,
          I,
          A
        ) : ge && (et < 0 || S !== zo[et] ? rn(we, v, Ko, 2) : et--);
      }
    }
  }, rn = (g, m, v, C, k = null) => {
    const { el: _, type: L, transition: I, children: A, shapeFlag: S } = g;
    if (S & 6) {
      rn(g.component.subTree, m, v, C);
      return;
    }
    if (S & 128) {
      g.suspense.move(m, v, C);
      return;
    }
    if (S & 64) {
      L.move(g, m, v, Jn);
      return;
    }
    if (L === ft) {
      s(_, m, v);
      for (let P = 0; P < A.length; P++)
        rn(A[P], m, v, C);
      s(g.anchor, m, v);
      return;
    }
    if (L === ar) {
      N(g, m, v);
      return;
    }
    if (C !== 2 && S & 1 && I)
      if (C === 0)
        I.beforeEnter(_), s(_, m, v), zt(() => I.enter(_), k);
      else {
        const { leave: P, delayLeave: H, afterLeave: U } = I, X = () => {
          g.ctx.isUnmounted ? i(_) : s(_, m, v);
        }, rt = () => {
          _._isLeaving && _[De](
            !0
            /* cancelled */
          ), P(_, () => {
            X(), U && U();
          });
        };
        H ? H(_, X, rt) : rt();
      }
    else
      s(_, m, v);
  }, pe = (g, m, v, C = !1, k = !1) => {
    const {
      type: _,
      props: L,
      ref: I,
      children: A,
      dynamicChildren: S,
      shapeFlag: F,
      patchFlag: P,
      dirs: H,
      cacheIndex: U
    } = g;
    if (P === -2 && (k = !1), I != null && (pn(), is(I, null, v, g, !0), gn()), U != null && (m.renderCache[U] = void 0), F & 256) {
      m.ctx.deactivate(g);
      return;
    }
    const X = F & 1 && H, rt = !An(g);
    let et;
    if (rt && (et = L && L.onVnodeBeforeUnmount) && be(et, m, g), F & 6)
      rd(g.component, v, C);
    else {
      if (F & 128) {
        g.suspense.unmount(v, C);
        return;
      }
      X && on(g, null, m, "beforeUnmount"), F & 64 ? g.type.remove(
        g,
        m,
        v,
        Jn,
        C
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ft || P > 0 && P & 64) ? Yn(
        S,
        m,
        v,
        !1,
        !0
      ) : (_ === ft && P & 384 || !k && F & 16) && Yn(A, m, v), C && Uo(g);
    }
    (rt && (et = L && L.onVnodeUnmounted) || X) && zt(() => {
      et && be(et, m, g), X && on(g, null, m, "unmounted");
    }, v);
  }, Uo = (g) => {
    const { type: m, el: v, anchor: C, transition: k } = g;
    if (m === ft) {
      id(v, C);
      return;
    }
    if (m === ar) {
      E(g);
      return;
    }
    const _ = () => {
      i(v), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (g.shapeFlag & 1 && k && !k.persisted) {
      const { leave: L, delayLeave: I } = k, A = () => L(v, _);
      I ? I(g.el, _, A) : A();
    } else
      _();
  }, id = (g, m) => {
    let v;
    for (; g !== m; )
      v = f(g), i(g), g = v;
    i(m);
  }, rd = (g, m, v) => {
    const { bum: C, scope: k, job: _, subTree: L, um: I, m: A, a: S } = g;
    ul(A), ul(S), C && sr(C), k.stop(), _ && (_.flags |= 8, pe(L, g, m, v)), I && zt(I, m), zt(() => {
      g.isUnmounted = !0;
    }, m);
  }, Yn = (g, m, v, C = !1, k = !1, _ = 0) => {
    for (let L = _; L < g.length; L++)
      pe(g[L], m, v, C, k);
  }, $s = (g) => {
    if (g.shapeFlag & 6)
      return $s(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const m = f(g.anchor || g.el), v = m && m[lf];
    return v ? f(v) : m;
  };
  let nr = !1;
  const jo = (g, m, v) => {
    g == null ? m._vnode && pe(m._vnode, null, null, !0) : w(
      m._vnode || null,
      g,
      m,
      null,
      null,
      null,
      v
    ), m._vnode = g, nr || (nr = !0, Zo(), Wa(), nr = !1);
  }, Jn = {
    p: w,
    um: pe,
    m: rn,
    r: Uo,
    mt: G,
    mc: R,
    pc: j,
    pbc: x,
    n: $s,
    o: e
  };
  return {
    render: jo,
    hydrate: void 0,
    createApp: Lf(jo)
  };
}
function lr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ln({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Zf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mc(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Y(s) && Y(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ke(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && mc(o, l)), l.type === Ni && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === St && !l.el && (l.el = o.el);
    }
}
function th(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < u ? r = l + 1 : o = l;
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function wc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wc(t);
}
function ul(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const bc = (e) => e.__isSuspense;
function eh(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : rf(e);
}
const ft = /* @__PURE__ */ Symbol.for("v-fgt"), Ni = /* @__PURE__ */ Symbol.for("v-txt"), St = /* @__PURE__ */ Symbol.for("v-cmt"), ar = /* @__PURE__ */ Symbol.for("v-stc"), os = [];
let Kt = null;
function J(e = !1) {
  os.push(Kt = e ? null : []);
}
function nh() {
  os.pop(), Kt = os[os.length - 1] || null;
}
let ds = 1;
function ui(e, t = !1) {
  ds += e, e < 0 && Kt && t && (Kt.hasOnce = !0);
}
function vc(e) {
  return e.dynamicChildren = ds > 0 ? Kt || Cn : null, nh(), ds > 0 && Kt && Kt.push(e), e;
}
function at(e, t, n, s, i, r) {
  return vc(
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
function Zt(e, t, n, s, i) {
  return vc(
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
function fs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function un(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yc = ({ key: e }) => e ?? null, Gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Mt(e) || ri(e) || q(e) ? { i: kt, r: e, k: t, f: !!n } : e : null);
function Rt(e, t = null, n = null, s = 0, i = null, r = e === ft ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yc(t),
    ref: t && Gs(t),
    scopeId: qa,
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
    ctx: kt
  };
  return l ? (fo(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= Mt(n) ? 8 : 16), ds > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Kt.push(a), a;
}
const dt = sh;
function sh(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === _f) && (e = St), fs(e)) {
    const l = Pe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && fo(l, n), ds > 0 && !r && Kt && (l.shapeFlag & 6 ? Kt[Kt.indexOf(e)] = l : Kt.push(l)), l.patchFlag = -2, l;
  }
  if (ph(e) && (e = e.__vccOpts), t) {
    t = ih(t);
    let { class: l, style: a } = t;
    l && !Mt(l) && (t.class = Oe(l)), Nt(a) && (Ma(a) && !Y(a) && (a = wt({}, a)), t.style = ii(a));
  }
  const o = Mt(e) ? 1 : bc(e) ? 128 : Ya(e) ? 64 : Nt(e) ? 4 : q(e) ? 2 : 0;
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
function ih(e) {
  return e ? Ma(e) || uc(e) ? wt({}, e) : e : null;
}
function Pe(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, u = t ? rh(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && yc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Y(r) ? r.concat(Gs(t)) : [r, Gs(t)] : Gs(t)
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
    ssContent: e.ssContent && Pe(e.ssContent),
    ssFallback: e.ssFallback && Pe(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && us(
    c,
    a.clone(c)
  ), c;
}
function Ir(e = " ", t = 0) {
  return dt(Ni, null, e, t);
}
function ne(e = "", t = !1) {
  return t ? (J(), Zt(St, null, e)) : dt(St, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? dt(St) : Y(e) ? dt(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fs(e) ? Ke(e) : dt(Ni, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pe(e);
}
function fo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), fo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !uc(t) ? t._ctx = kt : i === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else q(t) ? (t = { default: t, _ctx: kt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ir(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Oe([t.class, s.class]));
      else if (i === "style")
        t.style = ii([t.style, s.style]);
      else if (Mi(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(Y(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function be(e, t, n, s = null) {
  ae(e, t, 7, [
    n,
    s
  ]);
}
const oh = rc();
let lh = 0;
function ah(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || oh, r = {
    uid: lh++,
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
    scope: new od(
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
    propsOptions: fc(s, i),
    emitsOptions: lc(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Hf.bind(null, r), e.ce && e.ce(r), r;
}
let Ct = null;
const Bi = () => Ct || kt;
let di, Rr;
{
  const e = Di(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  di = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ct = n
  ), Rr = t(
    "__VUE_SSR_SETTERS__",
    (n) => hs = n
  );
}
const Os = (e) => {
  const t = Ct;
  return di(e), e.scope.on(), () => {
    e.scope.off(), di(t);
  };
}, dl = () => {
  Ct && Ct.scope.off(), di(null);
};
function xc(e) {
  return e.vnode.shapeFlag & 4;
}
let hs = !1;
function ch(e, t = !1, n = !1) {
  t && Rr(t);
  const { props: s, children: i } = e.vnode, r = xc(e);
  Wf(e, s, r, t), Jf(e, i, n || t);
  const o = r ? uh(e, t) : void 0;
  return t && Rr(!1), o;
}
function uh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Af);
  const { setup: s } = n;
  if (s) {
    pn();
    const i = e.setupContext = s.length > 1 ? fh(e) : null, r = Os(e), o = Ts(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ra(o);
    if (gn(), r(), (l || e.sp) && !An(e) && tc(e), l) {
      if (o.then(dl, dl), t)
        return o.then((a) => {
          fl(e, a);
        }).catch((a) => {
          Ii(a, e, 0);
        });
      e.asyncDep = o;
    } else
      fl(e, o);
  } else
    kc(e);
}
function fl(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = Oa(t)), kc(e);
}
function kc(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ie);
  {
    const i = Os(e);
    pn();
    try {
      Tf(e);
    } finally {
      gn(), i();
    }
  }
}
const dh = {
  get(e, t) {
    return Pa(e, "get", ""), e[t];
  }
};
function fh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, dh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $i(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Oa(Ia(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in rs)
        return rs[n](e);
    },
    has(t, n) {
      return n in t || n in rs;
    }
  })) : e.proxy;
}
function hh(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ph(e) {
  return q(e) && "__vccOpts" in e;
}
const At = (e, t) => pd(e, t, hs);
function Is(e, t, n) {
  try {
    ui(-1);
    const s = arguments.length;
    return s === 2 ? Nt(t) && !Y(t) ? fs(t) ? dt(e, null, [t]) : dt(e, t) : dt(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && fs(n) && (n = [n]), dt(e, t, n));
  } finally {
    ui(1);
  }
}
const gh = "3.5.25";
let Lr;
const hl = typeof window < "u" && window.trustedTypes;
if (hl)
  try {
    Lr = /* @__PURE__ */ hl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _c = Lr ? (e) => Lr.createHTML(e) : (e) => e, mh = "http://www.w3.org/2000/svg", wh = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, pl = Me && /* @__PURE__ */ Me.createElement("template"), bh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Me.createElementNS(mh, e) : t === "mathml" ? Me.createElementNS(wh, e) : n ? Me.createElement(e, { is: n }) : Me.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Me.createTextNode(e),
  createComment: (e) => Me.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Me.querySelector(e),
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
      pl.innerHTML = _c(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = pl.content;
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
}, je = "transition", Qn = "animation", ps = /* @__PURE__ */ Symbol("_vtc"), Sc = {
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
}, vh = /* @__PURE__ */ wt(
  {},
  Ja,
  Sc
), yh = (e) => (e.displayName = "Transition", e.props = vh, e), xh = /* @__PURE__ */ yh(
  (e, { slots: t }) => Is(uf, kh(e), t)
), an = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, gl = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kh(e) {
  const t = {};
  for (const D in e)
    D in Sc || (t[D] = e[D]);
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
    appearActiveClass: u = o,
    appearToClass: c = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = _h(i), w = p && p[0], y = p && p[1], {
    onBeforeEnter: b,
    onEnter: O,
    onEnterCancelled: N,
    onLeave: E,
    onLeaveCancelled: B,
    onBeforeAppear: T = b,
    onAppear: $ = O,
    onAppearCancelled: R = N
  } = t, M = (D, z, G, pt) => {
    D._enterCancelled = pt, cn(D, z ? c : l), cn(D, z ? u : o), G && G();
  }, x = (D, z) => {
    D._isLeaving = !1, cn(D, d), cn(D, h), cn(D, f), z && z();
  }, V = (D) => (z, G) => {
    const pt = D ? $ : O, tt = () => M(z, D, G);
    an(pt, [z, tt]), ml(() => {
      cn(z, D ? a : r), Ae(z, D ? c : l), gl(pt) || wl(z, s, w, tt);
    });
  };
  return wt(t, {
    onBeforeEnter(D) {
      an(b, [D]), Ae(D, r), Ae(D, o);
    },
    onBeforeAppear(D) {
      an(T, [D]), Ae(D, a), Ae(D, u);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(D, z) {
      D._isLeaving = !0;
      const G = () => x(D, z);
      Ae(D, d), D._enterCancelled ? (Ae(D, f), yl(D)) : (yl(D), Ae(D, f)), ml(() => {
        D._isLeaving && (cn(D, d), Ae(D, h), gl(E) || wl(D, s, y, G));
      }), an(E, [D, G]);
    },
    onEnterCancelled(D) {
      M(D, !1, void 0, !0), an(N, [D]);
    },
    onAppearCancelled(D) {
      M(D, !0, void 0, !0), an(R, [D]);
    },
    onLeaveCancelled(D) {
      x(D), an(B, [D]);
    }
  });
}
function _h(e) {
  if (e == null)
    return null;
  if (Nt(e))
    return [cr(e.enter), cr(e.leave)];
  {
    const t = cr(e);
    return [t, t];
  }
}
function cr(e) {
  return Er(e);
}
function Ae(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ps] || (e[ps] = /* @__PURE__ */ new Set())).add(t);
}
function cn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ps];
  n && (n.delete(t), n.size || (e[ps] = void 0));
}
function ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sh = 0;
function wl(e, t, n, s) {
  const i = e._endId = ++Sh, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = Ch(e, t);
  if (!o)
    return s();
  const u = o + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), r();
  }, f = (h) => {
    h.target === e && ++c >= a && d();
  };
  setTimeout(() => {
    c < a && d();
  }, l + 1), e.addEventListener(u, f);
}
function Ch(e, t) {
  const n = window.getComputedStyle(e), s = (p) => (n[p] || "").split(", "), i = s(`${je}Delay`), r = s(`${je}Duration`), o = bl(i, r), l = s(`${Qn}Delay`), a = s(`${Qn}Duration`), u = bl(l, a);
  let c = null, d = 0, f = 0;
  t === je ? o > 0 && (c = je, d = o, f = r.length) : t === Qn ? u > 0 && (c = Qn, d = u, f = a.length) : (d = Math.max(o, u), c = d > 0 ? o > u ? je : Qn : null, f = c ? c === je ? r.length : a.length : 0);
  const h = c === je && /\b(?:transform|all)(?:,|$)/.test(
    s(`${je}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function bl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => vl(n) + vl(e[s])));
}
function vl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Eh(e, t, n) {
  const s = e[ps];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fi = /* @__PURE__ */ Symbol("_vod"), Cc = /* @__PURE__ */ Symbol("_vsh"), Ah = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[fi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Zn(e, !0), s.enter(e)) : s.leave(e, () => {
      Zn(e, !1);
    }) : Zn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zn(e, t);
  }
};
function Zn(e, t) {
  e.style.display = t ? e[fi] : "none", e[Cc] = !t;
}
const Th = /* @__PURE__ */ Symbol(""), Mh = /(?:^|;)\s*display\s*:/;
function Dh(e, t, n) {
  const s = e.style, i = Mt(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Mt(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Xs(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Xs(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), Xs(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[Th];
      o && (n += ";" + o), s.cssText = n, r = Mh.test(n);
    }
  } else t && e.removeAttribute("style");
  fi in e && (e[fi] = r ? s.display : "", e[Cc] && (s.display = "none"));
}
const xl = /\s*!important$/;
function Xs(e, t, n) {
  if (Y(n))
    n.forEach((s) => Xs(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Oh(e, t);
    xl.test(n) ? e.setProperty(
      Qt(s),
      n.replace(xl, ""),
      "important"
    ) : e[s] = n;
  }
}
const kl = ["Webkit", "Moz", "ms"], ur = {};
function Oh(e, t) {
  const n = ur[t];
  if (n)
    return n;
  let s = Lt(t);
  if (s !== "filter" && s in e)
    return ur[t] = s;
  s = io(s);
  for (let i = 0; i < kl.length; i++) {
    const r = kl[i] + s;
    if (r in e)
      return ur[t] = r;
  }
  return t;
}
const _l = "http://www.w3.org/1999/xlink";
function Sl(e, t, n, s, i, r = xd(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_l, t.slice(6, t.length)) : e.setAttributeNS(_l, t, n) : n == null || r && !$a(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Na(n) ? String(n) : n
  );
}
function Cl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _c(n) : n);
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
    l === "boolean" ? n = $a(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Ih(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Rh(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const El = /* @__PURE__ */ Symbol("_vei");
function Lh(e, t, n, s, i = null) {
  const r = e[El] || (e[El] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Ph(t);
    if (s) {
      const u = r[t] = $h(
        s,
        i
      );
      Ih(e, l, u, a);
    } else o && (Rh(e, l, o, a), r[t] = void 0);
  }
}
const Al = /(?:Once|Passive|Capture)$/;
function Ph(e) {
  let t;
  if (Al.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Al); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qt(e.slice(2)), t];
}
let dr = 0;
const Nh = /* @__PURE__ */ Promise.resolve(), Bh = () => dr || (Nh.then(() => dr = 0), dr = Date.now());
function $h(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ae(
      Hh(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Bh(), n;
}
function Hh(e, t) {
  if (Y(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const Tl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fh = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Eh(e, s, o) : t === "style" ? Dh(e, n, s) : Mi(t) ? so(t) || Lh(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vh(e, t, s, o)) ? (Cl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sl(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Mt(s)) ? Cl(e, Lt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Sl(e, t, s, o));
};
function Vh(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Tl(t) && q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Tl(t) && Mt(n) ? !1 : t in e;
}
const Ml = {};
// @__NO_SIDE_EFFECTS__
function Uh(e, t, n) {
  let s = /* @__PURE__ */ Jt(e, t);
  Ba(s) && (s = wt({}, s, t));
  class i extends ho {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
const jh = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ho extends jh {
  constructor(t, n = {}, s = Ol) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ol ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof ho) {
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
    this._connected = !1, Ft(() => {
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
      if (r && !Y(r))
        for (const a in r) {
          const u = r[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = Er(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Lt(a)] = !0);
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
    const { props: n } = t, s = Y(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(Lt))
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
    let s = n ? this.getAttribute(t) : Ml;
    const i = Lt(t);
    n && this._numberProps && this._numberProps[i] && (s = Er(s)), this._setProp(i, s, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Ml ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(Qt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Qt(t), n + "") : n || this.removeAttribute(Qt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Wh(t, this._root);
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
            Ba(o[0]) ? wt({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (r, ...o) => {
        i(r, o), Qt(r) !== r && i(Qt(r), o);
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
            const u = n + "-s", c = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let d;
            for (; d = c.nextNode(); )
              d.setAttribute(u, "");
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
const zh = /* @__PURE__ */ wt({ patchProp: Fh }, bh);
let Dl;
function Ec() {
  return Dl || (Dl = Xf(zh));
}
const Wh = ((...e) => {
  Ec().render(...e);
}), Ol = ((...e) => {
  const t = Ec().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = qh(s);
    if (!i) return;
    const r = t._component;
    !q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Kh(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Kh(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qh(e) {
  return Mt(e) ? document.querySelector(e) : e;
}
const Ac = ["top", "right", "bottom", "left"], Il = ["start", "end"], Rl = /* @__PURE__ */ Ac.reduce((e, t) => e.concat(t, t + "-" + Il[0], t + "-" + Il[1]), []), Ce = Math.min, It = Math.max, hi = Math.round, _e = (e) => ({
  x: e,
  y: e
}), Yh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jh = {
  start: "end",
  end: "start"
};
function Pr(e, t, n) {
  return It(e, Ce(t, n));
}
function He(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ee(e) {
  return e.split("-")[0];
}
function re(e) {
  return e.split("-")[1];
}
function Tc(e) {
  return e === "x" ? "y" : "x";
}
function po(e) {
  return e === "y" ? "height" : "width";
}
const Gh = /* @__PURE__ */ new Set(["top", "bottom"]);
function ke(e) {
  return Gh.has(ee(e)) ? "y" : "x";
}
function go(e) {
  return Tc(ke(e));
}
function Mc(e, t, n) {
  n === void 0 && (n = !1);
  const s = re(e), i = go(e), r = po(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = gi(o)), [o, gi(o)];
}
function Xh(e) {
  const t = gi(e);
  return [pi(e), t, pi(t)];
}
function pi(e) {
  return e.replace(/start|end/g, (t) => Jh[t]);
}
const Ll = ["left", "right"], Pl = ["right", "left"], Qh = ["top", "bottom"], Zh = ["bottom", "top"];
function tp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Pl : Ll : t ? Ll : Pl;
    case "left":
    case "right":
      return t ? Qh : Zh;
    default:
      return [];
  }
}
function ep(e, t, n, s) {
  const i = re(e);
  let r = tp(ee(e), n === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(pi)))), r;
}
function gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yh[t]);
}
function np(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mo(e) {
  return typeof e != "number" ? np(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ln(e) {
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
function Nl(e, t, n) {
  let {
    reference: s,
    floating: i
  } = e;
  const r = ke(t), o = go(t), l = po(o), a = ee(t), u = r === "y", c = s.x + s.width / 2 - i.width / 2, d = s.y + s.height / 2 - i.height / 2, f = s[l] / 2 - i[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = {
        x: c,
        y: s.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: c,
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
  switch (re(t)) {
    case "start":
      h[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const sp = async (e, t, n) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = n, l = r.filter(Boolean), a = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: c,
    y: d
  } = Nl(u, s, a), f = s, h = {}, p = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: y,
      fn: b
    } = l[w], {
      x: O,
      y: N,
      data: E,
      reset: B
    } = await b({
      x: c,
      y: d,
      initialPlacement: s,
      placement: f,
      strategy: i,
      middlewareData: h,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = O ?? c, d = N ?? d, h = {
      ...h,
      [y]: {
        ...h[y],
        ...E
      }
    }, B && p <= 50 && (p++, typeof B == "object" && (B.placement && (f = B.placement), B.rects && (u = B.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : B.rects), {
      x: c,
      y: d
    } = Nl(u, f, a)), w = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: h
  };
};
async function Pn(e, t) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = He(t, e), p = mo(h), y = l[f ? d === "floating" ? "reference" : "floating" : d], b = Ln(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), O = d === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, N = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), E = await (r.isElement == null ? void 0 : r.isElement(N)) ? await (r.getScale == null ? void 0 : r.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = Ln(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: O,
    offsetParent: N,
    strategy: a
  }) : O);
  return {
    top: (b.top - B.top + p.top) / E.y,
    bottom: (B.bottom - b.bottom + p.bottom) / E.y,
    left: (b.left - B.left + p.left) / E.x,
    right: (B.right - b.right + p.right) / E.x
  };
}
const ip = (e) => ({
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
      element: u,
      padding: c = 0
    } = He(e, t) || {};
    if (u == null)
      return {};
    const d = mo(c), f = {
      x: n,
      y: s
    }, h = go(i), p = po(h), w = await o.getDimensions(u), y = h === "y", b = y ? "top" : "left", O = y ? "bottom" : "right", N = y ? "clientHeight" : "clientWidth", E = r.reference[p] + r.reference[h] - f[h] - r.floating[p], B = f[h] - r.reference[h], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let $ = T ? T[N] : 0;
    (!$ || !await (o.isElement == null ? void 0 : o.isElement(T))) && ($ = l.floating[N] || r.floating[p]);
    const R = E / 2 - B / 2, M = $ / 2 - w[p] / 2 - 1, x = Ce(d[b], M), V = Ce(d[O], M), D = x, z = $ - w[p] - V, G = $ / 2 - w[p] / 2 + R, pt = Pr(D, G, z), tt = !a.arrow && re(i) != null && G !== pt && r.reference[p] / 2 - (G < D ? x : V) - w[p] / 2 < 0, K = tt ? G < D ? G - D : G - z : 0;
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
function rp(e, t, n) {
  return (e ? [...n.filter((i) => re(i) === e), ...n.filter((i) => re(i) !== e)] : n.filter((i) => ee(i) === i)).filter((i) => e ? re(i) === e || (t ? pi(i) !== i : !1) : !0);
}
const op = function(e) {
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
        elements: u
      } = t, {
        crossAxis: c = !1,
        alignment: d,
        allowedPlacements: f = Rl,
        autoAlignment: h = !0,
        ...p
      } = He(e, t), w = d !== void 0 || f === Rl ? rp(d || null, h, f) : f, y = await Pn(t, p), b = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, O = w[b];
      if (O == null)
        return {};
      const N = Mc(O, r, await (a.isRTL == null ? void 0 : a.isRTL(u.floating)));
      if (l !== O)
        return {
          reset: {
            placement: w[0]
          }
        };
      const E = [y[ee(O)], y[N[0]], y[N[1]]], B = [...((s = o.autoPlacement) == null ? void 0 : s.overflows) || [], {
        placement: O,
        overflows: E
      }], T = w[b + 1];
      if (T)
        return {
          data: {
            index: b + 1,
            overflows: B
          },
          reset: {
            placement: T
          }
        };
      const $ = B.map((x) => {
        const V = re(x.placement);
        return [x.placement, V && c ? (
          // Check along the mainAxis and main crossAxis side.
          x.overflows.slice(0, 2).reduce((D, z) => D + z, 0)
        ) : (
          // Check only the mainAxis.
          x.overflows[0]
        ), x.overflows];
      }).sort((x, V) => x[1] - V[1]), M = ((i = $.filter((x) => x[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        re(x[0]) ? 2 : 3
      ).every((V) => V <= 0))[0]) == null ? void 0 : i[0]) || $[0][0];
      return M !== l ? {
        data: {
          index: b + 1,
          overflows: B
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, lp = function(e) {
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
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: w = !0,
        ...y
      } = He(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const b = ee(i), O = ke(l), N = ee(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), B = f || (N || !w ? [gi(l)] : Xh(l)), T = p !== "none";
      !f && T && B.push(...ep(l, w, p, E));
      const $ = [l, ...B], R = await Pn(t, y), M = [];
      let x = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (c && M.push(R[b]), d) {
        const G = Mc(i, o, E);
        M.push(R[G[0]], R[G[1]]);
      }
      if (x = [...x, {
        placement: i,
        overflows: M
      }], !M.every((G) => G <= 0)) {
        var V, D;
        const G = (((V = r.flip) == null ? void 0 : V.index) || 0) + 1, pt = $[G];
        if (pt && (!(d === "alignment" ? O !== ke(pt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        x.every((j) => ke(j.placement) === O ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: x
            },
            reset: {
              placement: pt
            }
          };
        let tt = (D = x.filter((K) => K.overflows[0] <= 0).sort((K, j) => K.overflows[1] - j.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!tt)
          switch (h) {
            case "bestFit": {
              var z;
              const K = (z = x.filter((j) => {
                if (T) {
                  const _t = ke(j.placement);
                  return _t === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _t === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((_t) => _t > 0).reduce((_t, _n) => _t + _n, 0)]).sort((j, _t) => j[1] - _t[1])[0]) == null ? void 0 : z[0];
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
function Bl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $l(e) {
  return Ac.some((t) => e[t] >= 0);
}
const ap = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = He(e, t);
      switch (s) {
        case "referenceHidden": {
          const r = await Pn(t, {
            ...i,
            elementContext: "reference"
          }), o = Bl(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: $l(o)
            }
          };
        }
        case "escaped": {
          const r = await Pn(t, {
            ...i,
            altBoundary: !0
          }), o = Bl(r, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: $l(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function Dc(e) {
  const t = Ce(...e.map((r) => r.left)), n = Ce(...e.map((r) => r.top)), s = It(...e.map((r) => r.right)), i = It(...e.map((r) => r.bottom));
  return {
    x: t,
    y: n,
    width: s - t,
    height: i - n
  };
}
function cp(e) {
  const t = e.slice().sort((i, r) => i.y - r.y), n = [];
  let s = null;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    !s || r.y - s.y > s.height / 2 ? n.push([r]) : n[n.length - 1].push(r), s = r;
  }
  return n.map((i) => Ln(Dc(i)));
}
const up = function(e) {
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
        y: u
      } = He(e, t), c = Array.from(await (r.getClientRects == null ? void 0 : r.getClientRects(s.reference)) || []), d = cp(c), f = Ln(Dc(c)), h = mo(l);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && a != null && u != null)
          return d.find((y) => a > y.left - h.left && a < y.right + h.right && u > y.top - h.top && u < y.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if (ke(n) === "y") {
            const x = d[0], V = d[d.length - 1], D = ee(n) === "top", z = x.top, G = V.bottom, pt = D ? x.left : V.left, tt = D ? x.right : V.right, K = tt - pt, j = G - z;
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
          const y = ee(n) === "left", b = It(...d.map((x) => x.right)), O = Ce(...d.map((x) => x.left)), N = d.filter((x) => y ? x.left === O : x.right === b), E = N[0].top, B = N[N.length - 1].bottom, T = O, $ = b, R = $ - T, M = B - E;
          return {
            top: E,
            bottom: B,
            left: T,
            right: $,
            width: R,
            height: M,
            x: T,
            y: E
          };
        }
        return f;
      }
      const w = await r.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: s.floating,
        strategy: o
      });
      return i.reference.x !== w.reference.x || i.reference.y !== w.reference.y || i.reference.width !== w.reference.width || i.reference.height !== w.reference.height ? {
        reset: {
          rects: w
        }
      } : {};
    }
  };
}, dp = /* @__PURE__ */ new Set(["left", "top"]);
async function fp(e, t) {
  const {
    placement: n,
    platform: s,
    elements: i
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = ee(n), l = re(n), a = ke(n) === "y", u = dp.has(o) ? -1 : 1, c = r && a ? -1 : 1, d = He(t, e);
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
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const hp = function(e) {
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
      } = t, a = await fp(t, e);
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
}, pp = function(e) {
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
              y: O
            } = y;
            return {
              x: b,
              y: O
            };
          }
        },
        ...a
      } = He(e, t), u = {
        x: n,
        y: s
      }, c = await Pn(t, a), d = ke(ee(i)), f = Tc(d);
      let h = u[f], p = u[d];
      if (r) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", O = h + c[y], N = h - c[b];
        h = Pr(O, h, N);
      }
      if (o) {
        const y = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", O = p + c[y], N = p - c[b];
        p = Pr(O, p, N);
      }
      const w = l.fn({
        ...t,
        [f]: h,
        [d]: p
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - s,
          enabled: {
            [f]: r,
            [d]: o
          }
        }
      };
    }
  };
}, gp = function(e) {
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
        ...u
      } = He(e, t), c = await Pn(t, u), d = ee(i), f = re(i), h = ke(i) === "y", {
        width: p,
        height: w
      } = r.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = f === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
      const O = w - c.top - c.bottom, N = p - c.left - c.right, E = Ce(w - c[y], O), B = Ce(p - c[b], N), T = !t.middlewareData.shift;
      let $ = E, R = B;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = N), (s = t.middlewareData.shift) != null && s.enabled.y && ($ = O), T && !f) {
        const x = It(c.left, 0), V = It(c.right, 0), D = It(c.top, 0), z = It(c.bottom, 0);
        h ? R = p - 2 * (x !== 0 || V !== 0 ? x + V : It(c.left, c.right)) : $ = w - 2 * (D !== 0 || z !== 0 ? D + z : It(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: R,
        availableHeight: $
      });
      const M = await o.getDimensions(l.floating);
      return p !== M.width || w !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Hi() {
  return typeof window < "u";
}
function zn(e) {
  return Oc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fe(e) {
  var t;
  return (t = (Oc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Oc(e) {
  return Hi() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function ce(e) {
  return Hi() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function Ee(e) {
  return Hi() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function Hl(e) {
  return !Hi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
const mp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Rs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: s,
    display: i
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !mp.has(i);
}
const wp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bp(e) {
  return wp.has(zn(e));
}
const vp = [":popover-open", ":modal"];
function Fi(e) {
  return vp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const yp = ["transform", "translate", "scale", "rotate", "perspective"], xp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], kp = ["paint", "layout", "strict", "content"];
function wo(e) {
  const t = bo(), n = ce(e) ? ue(e) : e;
  return yp.some((s) => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xp.some((s) => (n.willChange || "").includes(s)) || kp.some((s) => (n.contain || "").includes(s));
}
function _p(e) {
  let t = Qe(e);
  for (; Ee(t) && !Nn(t); ) {
    if (wo(t))
      return t;
    if (Fi(t))
      return null;
    t = Qe(t);
  }
  return null;
}
function bo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Sp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Nn(e) {
  return Sp.has(zn(e));
}
function ue(e) {
  return Yt(e).getComputedStyle(e);
}
function Vi(e) {
  return ce(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qe(e) {
  if (zn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hl(e) && e.host || // Fallback.
    Fe(e)
  );
  return Hl(t) ? t.host : t;
}
function Ic(e) {
  const t = Qe(e);
  return Nn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ee(t) && Rs(t) ? t : Ic(t);
}
function Rc(e, t, n) {
  var s;
  t === void 0 && (t = []);
  const i = Ic(e), r = i === ((s = e.ownerDocument) == null ? void 0 : s.body), o = Yt(i);
  return r ? (Nr(o), t.concat(o, o.visualViewport || [], Rs(i) ? i : [], [])) : t.concat(i, Rc(i, []));
}
function Nr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Lc(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Ee(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, l = hi(n) !== r || hi(s) !== o;
  return l && (n = r, s = o), {
    width: n,
    height: s,
    $: l
  };
}
function Pc(e) {
  return ce(e) ? e : e.contextElement;
}
function Mn(e) {
  const t = Pc(e);
  if (!Ee(t))
    return _e(1);
  const n = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Lc(t);
  let o = (r ? hi(n.width) : n.width) / s, l = (r ? hi(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: o,
    y: l
  };
}
const Cp = /* @__PURE__ */ _e(0);
function Nc(e) {
  const t = Yt(e);
  return !bo() || !t.visualViewport ? Cp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ep(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function gs(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Pc(e);
  let o = _e(1);
  t && (s ? ce(s) && (o = Mn(s)) : o = Mn(e));
  const l = Ep(r, n, s) ? Nc(r) : _e(0);
  let a = (i.left + l.x) / o.x, u = (i.top + l.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const f = Yt(r), h = s && ce(s) ? Yt(s) : s;
    let p = f, w = Nr(p);
    for (; w && s && h !== p; ) {
      const y = Mn(w), b = w.getBoundingClientRect(), O = ue(w), N = b.left + (w.clientLeft + parseFloat(O.paddingLeft)) * y.x, E = b.top + (w.clientTop + parseFloat(O.paddingTop)) * y.y;
      a *= y.x, u *= y.y, c *= y.x, d *= y.y, a += N, u += E, p = Yt(w), w = Nr(p);
    }
  }
  return Ln({
    width: c,
    height: d,
    x: a,
    y: u
  });
}
function Ui(e, t) {
  const n = Vi(e).scrollLeft;
  return t ? t.left + n : gs(Fe(e)).left + n;
}
function Bc(e, t) {
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - Ui(e, n), i = n.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function Ap(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: s,
    strategy: i
  } = e;
  const r = i === "fixed", o = Fe(s), l = t ? Fi(t.floating) : !1;
  if (s === o || l && r)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = _e(1);
  const c = _e(0), d = Ee(s);
  if ((d || !d && !r) && ((zn(s) !== "body" || Rs(o)) && (a = Vi(s)), Ee(s))) {
    const h = gs(s);
    u = Mn(s), c.x = h.x + s.clientLeft, c.y = h.y + s.clientTop;
  }
  const f = o && !d && !r ? Bc(o, a) : _e(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + f.y
  };
}
function Tp(e) {
  return Array.from(e.getClientRects());
}
function Mp(e) {
  const t = Fe(e), n = Vi(e), s = e.ownerDocument.body, i = It(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = It(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -n.scrollLeft + Ui(e);
  const l = -n.scrollTop;
  return ue(s).direction === "rtl" && (o += It(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: l
  };
}
const Fl = 25;
function Dp(e, t) {
  const n = Yt(e), s = Fe(e), i = n.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, l = 0, a = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = bo();
    (!c || c && t === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  const u = Ui(s);
  if (u <= 0) {
    const c = s.ownerDocument, d = c.body, f = getComputedStyle(d), h = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(s.clientWidth - d.clientWidth - h);
    p <= Fl && (r -= p);
  } else u <= Fl && (r += u);
  return {
    width: r,
    height: o,
    x: l,
    y: a
  };
}
const Op = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ip(e, t) {
  const n = gs(e, !0, t === "fixed"), s = n.top + e.clientTop, i = n.left + e.clientLeft, r = Ee(e) ? Mn(e) : _e(1), o = e.clientWidth * r.x, l = e.clientHeight * r.y, a = i * r.x, u = s * r.y;
  return {
    width: o,
    height: l,
    x: a,
    y: u
  };
}
function Vl(e, t, n) {
  let s;
  if (t === "viewport")
    s = Dp(e, n);
  else if (t === "document")
    s = Mp(Fe(e));
  else if (ce(t))
    s = Ip(t, n);
  else {
    const i = Nc(e);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Ln(s);
}
function $c(e, t) {
  const n = Qe(e);
  return n === t || !ce(n) || Nn(n) ? !1 : ue(n).position === "fixed" || $c(n, t);
}
function Rp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let s = Rc(e, []).filter((l) => ce(l) && zn(l) !== "body"), i = null;
  const r = ue(e).position === "fixed";
  let o = r ? Qe(e) : e;
  for (; ce(o) && !Nn(o); ) {
    const l = ue(o), a = wo(o);
    !a && l.position === "fixed" && (i = null), (r ? !a && !i : !a && l.position === "static" && !!i && Op.has(i.position) || Rs(o) && !a && $c(e, o)) ? s = s.filter((c) => c !== o) : i = l, o = Qe(o);
  }
  return t.set(e, s), s;
}
function Lp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: s,
    strategy: i
  } = e;
  const o = [...n === "clippingAncestors" ? Fi(t) ? [] : Rp(t, this._c) : [].concat(n), s], l = o[0], a = o.reduce((u, c) => {
    const d = Vl(t, c, i);
    return u.top = It(d.top, u.top), u.right = Ce(d.right, u.right), u.bottom = Ce(d.bottom, u.bottom), u.left = It(d.left, u.left), u;
  }, Vl(t, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Pp(e) {
  const {
    width: t,
    height: n
  } = Lc(e);
  return {
    width: t,
    height: n
  };
}
function Np(e, t, n) {
  const s = Ee(t), i = Fe(t), r = n === "fixed", o = gs(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = _e(0);
  function u() {
    a.x = Ui(i);
  }
  if (s || !s && !r)
    if ((zn(t) !== "body" || Rs(i)) && (l = Vi(t)), s) {
      const h = gs(t, !0, r, t);
      a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
    } else i && u();
  r && !s && i && u();
  const c = i && !s && !r ? Bc(i, l) : _e(0), d = o.left + l.scrollLeft - a.x - c.x, f = o.top + l.scrollTop - a.y - c.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function fr(e) {
  return ue(e).position === "static";
}
function Ul(e, t) {
  if (!Ee(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Fe(e) === n && (n = n.ownerDocument.body), n;
}
function Hc(e, t) {
  const n = Yt(e);
  if (Fi(e))
    return n;
  if (!Ee(e)) {
    let i = Qe(e);
    for (; i && !Nn(i); ) {
      if (ce(i) && !fr(i))
        return i;
      i = Qe(i);
    }
    return n;
  }
  let s = Ul(e, t);
  for (; s && bp(s) && fr(s); )
    s = Ul(s, t);
  return s && Nn(s) && fr(s) && !wo(s) ? n : s || _p(e) || n;
}
const Bp = async function(e) {
  const t = this.getOffsetParent || Hc, n = this.getDimensions, s = await n(e.floating);
  return {
    reference: Np(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function $p(e) {
  return ue(e).direction === "rtl";
}
const Hp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ap,
  getDocumentElement: Fe,
  getClippingRect: Lp,
  getOffsetParent: Hc,
  getElementRects: Bp,
  getClientRects: Tp,
  getDimensions: Pp,
  getScale: Mn,
  isElement: ce,
  isRTL: $p
}, Fp = hp, Vp = op, Up = pp, jp = lp, zp = gp, Wp = ap, Kp = ip, qp = up, Fc = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: Hp,
    ...n
  }, r = {
    ...i.platform,
    _c: s
  };
  return sp(e, t, {
    ...i,
    platform: r
  });
}, oe = () => /* @__PURE__ */ new Map(), Br = (e) => {
  const t = oe();
  return e.forEach((n, s) => {
    t.set(s, n);
  }), t;
}, Ve = (e, t, n) => {
  let s = e.get(t);
  return s === void 0 && e.set(t, s = n()), s;
}, Yp = (e, t) => {
  const n = [];
  for (const [s, i] of e)
    n.push(t(i, s));
  return n;
}, Jp = (e, t) => {
  for (const [n, s] of e)
    if (t(s, n))
      return !0;
  return !1;
}, mn = () => /* @__PURE__ */ new Set(), hr = (e) => e[e.length - 1], Gp = (e, t) => {
  for (let n = 0; n < t.length; n++)
    e.push(t[n]);
}, wn = Array.from, Xp = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return !0;
  return !1;
}, $r = Array.isArray;
class Vc {
  constructor() {
    this._observers = oe();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, n) {
    return Ve(
      this._observers,
      /** @type {string} */
      t,
      mn
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
    return wn((this._observers.get(t) || oe()).values()).forEach((s) => s(...n));
  }
  destroy() {
    this._observers = oe();
  }
}
const Ne = Math.floor, Qs = Math.abs, Bn = (e, t) => e < t ? e : t, Ze = (e, t) => e > t ? e : t, Uc = (e) => e !== 0 ? e < 0 : 1 / e < 0, jl = 1, zl = 2, pr = 4, gr = 8, ms = 32, Re = 64, Pt = 128, Qp = 1 << 29, ji = 31, Hr = 63, hn = 127, Zp = 2147483647, jc = Number.MAX_SAFE_INTEGER, tg = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && Ne(e) === e), eg = String.fromCharCode, ng = (e) => e.toLowerCase(), sg = /^\s*/g, ig = (e) => e.replace(sg, ""), rg = /([A-Z])/g, Wl = (e, t) => ig(e.replace(rg, (n) => `${t}${ng(n)}`)), og = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, s = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    s[i] = /** @type {number} */
    t.codePointAt(i);
  return s;
}, ws = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), lg = (e) => ws.encode(e), ag = ws ? lg : og;
let ls = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
ls && ls.decode(new Uint8Array()).length === 1 && (ls = null);
class Ls {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Ps = () => new Ls(), cg = (e) => {
  const t = Ps();
  return e(t), ie(t);
}, ug = (e) => {
  let t = e.cpos;
  for (let n = 0; n < e.bufs.length; n++)
    t += e.bufs[n].length;
  return t;
}, ie = (e) => {
  const t = new Uint8Array(ug(e));
  let n = 0;
  for (let s = 0; s < e.bufs.length; s++) {
    const i = e.bufs[s];
    t.set(i, n), n += i.length;
  }
  return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, dg = (e, t) => {
  const n = e.cbuf.length;
  n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Ze(n, t) * 2), e.cpos = 0);
}, vt = (e, t) => {
  const n = e.cbuf.length;
  e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Fr = vt, Q = (e, t) => {
  for (; t > hn; )
    vt(e, Pt | hn & t), t = Ne(t / 128);
  vt(e, hn & t);
}, vo = (e, t) => {
  const n = Uc(t);
  for (n && (t = -t), vt(e, (t > Hr ? Pt : 0) | (n ? Re : 0) | Hr & t), t = Ne(t / 64); t > 0; )
    vt(e, (t > hn ? Pt : 0) | hn & t), t = Ne(t / 128);
}, Vr = new Uint8Array(3e4), fg = Vr.length / 3, hg = (e, t) => {
  if (t.length < fg) {
    const n = ws.encodeInto(t, Vr).written || 0;
    Q(e, n);
    for (let s = 0; s < n; s++)
      vt(e, Vr[s]);
  } else
    Wt(e, ag(t));
}, pg = (e, t) => {
  const n = unescape(encodeURIComponent(t)), s = n.length;
  Q(e, s);
  for (let i = 0; i < s; i++)
    vt(
      e,
      /** @type {number} */
      n.codePointAt(i)
    );
}, Dn = ws && /** @type {any} */
ws.encodeInto ? hg : pg, zi = (e, t) => {
  const n = e.cbuf.length, s = e.cpos, i = Bn(n - s, t.length), r = t.length - i;
  e.cbuf.set(t.subarray(0, i), s), e.cpos += i, r > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Ze(n * 2, r)), e.cbuf.set(t.subarray(i)), e.cpos = r);
}, Wt = (e, t) => {
  Q(e, t.byteLength), zi(e, t);
}, yo = (e, t) => {
  dg(e, t);
  const n = new DataView(e.cbuf.buffer, e.cpos, t);
  return e.cpos += t, n;
}, gg = (e, t) => yo(e, 4).setFloat32(0, t, !1), mg = (e, t) => yo(e, 8).setFloat64(0, t, !1), wg = (e, t) => (
  /** @type {any} */
  yo(e, 8).setBigInt64(0, t, !1)
), Kl = new DataView(new ArrayBuffer(4)), bg = (e) => (Kl.setFloat32(0, e), Kl.getFloat32(0) === e), $n = (e, t) => {
  switch (typeof t) {
    case "string":
      vt(e, 119), Dn(e, t);
      break;
    case "number":
      tg(t) && Qs(t) <= Zp ? (vt(e, 125), vo(e, t)) : bg(t) ? (vt(e, 124), gg(e, t)) : (vt(e, 123), mg(e, t));
      break;
    case "bigint":
      vt(e, 122), wg(e, t);
      break;
    case "object":
      if (t === null)
        vt(e, 126);
      else if ($r(t)) {
        vt(e, 117), Q(e, t.length);
        for (let n = 0; n < t.length; n++)
          $n(e, t[n]);
      } else if (t instanceof Uint8Array)
        vt(e, 116), Wt(e, t);
      else {
        vt(e, 118);
        const n = Object.keys(t);
        Q(e, n.length);
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          Dn(e, i), $n(e, t[i]);
        }
      }
      break;
    case "boolean":
      vt(e, t ? 120 : 121);
      break;
    default:
      vt(e, 127);
  }
};
class ql extends Ls {
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
const Yl = (e) => {
  e.count > 0 && (vo(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && Q(e.encoder, e.count - 2));
};
class Zs {
  constructor() {
    this.encoder = new Ls(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (Yl(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Yl(this), ie(this.encoder);
  }
}
const Jl = (e) => {
  if (e.count > 0) {
    const t = e.diff * 2 + (e.count === 1 ? 0 : 1);
    vo(e.encoder, t), e.count > 1 && Q(e.encoder, e.count - 2);
  }
};
class mr {
  constructor() {
    this.encoder = new Ls(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (Jl(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Jl(this), ie(this.encoder);
  }
}
class vg {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new Zs();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new Ls();
    return this.sarr.push(this.s), this.s = "", Dn(t, this.sarr.join("")), zi(t, this.lensE.toUint8Array()), ie(t);
  }
}
const tn = (e) => new Error(e), le = () => {
  throw tn("Method unimplemented");
}, Ut = () => {
  throw tn("Unexpected case");
}, zc = tn("Unexpected end of array"), Wc = tn("Integer out of Range");
class Wi {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const xo = (e) => new Wi(e), yg = (e) => e.pos !== e.arr.length, xg = (e, t) => {
  const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
  return e.pos += t, n;
}, Xt = (e) => xg(e, lt(e)), bs = (e) => e.arr[e.pos++], lt = (e) => {
  let t = 0, n = 1;
  const s = e.arr.length;
  for (; e.pos < s; ) {
    const i = e.arr[e.pos++];
    if (t = t + (i & hn) * n, n *= 128, i < Pt)
      return t;
    if (t > jc)
      throw Wc;
  }
  throw zc;
}, ko = (e) => {
  let t = e.arr[e.pos++], n = t & Hr, s = 64;
  const i = (t & Re) > 0 ? -1 : 1;
  if ((t & Pt) === 0)
    return i * n;
  const r = e.arr.length;
  for (; e.pos < r; ) {
    if (t = e.arr[e.pos++], n = n + (t & hn) * s, s *= 128, t < Pt)
      return i * n;
    if (n > jc)
      throw Wc;
  }
  throw zc;
}, kg = (e) => {
  let t = lt(e);
  if (t === 0)
    return "";
  {
    let n = String.fromCodePoint(bs(e));
    if (--t < 100)
      for (; t--; )
        n += String.fromCodePoint(bs(e));
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
}, _g = (e) => (
  /** @type any */
  ls.decode(Xt(e))
), Ur = ls ? _g : kg, _o = (e, t) => {
  const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
  return e.pos += t, n;
}, Sg = (e) => _o(e, 4).getFloat32(0, !1), Cg = (e) => _o(e, 8).getFloat64(0, !1), Eg = (e) => (
  /** @type {any} */
  _o(e, 8).getBigInt64(0, !1)
), Ag = [
  (e) => {
  },
  // CASE 127: undefined
  (e) => null,
  // CASE 126: null
  ko,
  // CASE 125: integer
  Sg,
  // CASE 124: float32
  Cg,
  // CASE 123: float64
  Eg,
  // CASE 122: bigint
  (e) => !1,
  // CASE 121: boolean (false)
  (e) => !0,
  // CASE 120: boolean (true)
  Ur,
  // CASE 119: string
  (e) => {
    const t = lt(e), n = {};
    for (let s = 0; s < t; s++) {
      const i = Ur(e);
      n[i] = mi(e);
    }
    return n;
  },
  (e) => {
    const t = lt(e), n = [];
    for (let s = 0; s < t; s++)
      n.push(mi(e));
    return n;
  },
  Xt
  // CASE 116: Uint8Array
], mi = (e) => Ag[127 - bs(e)](e);
class Gl extends Wi {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, n) {
    super(t), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), yg(this) ? this.count = lt(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class ti extends Wi {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = ko(this);
      const t = Uc(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = lt(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class wr extends Wi {
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
      const t = ko(this), n = t & 1;
      this.diff = Ne(t / 2), this.count = 1, n && (this.count = lt(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Tg {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new ti(t), this.str = Ur(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), n = this.str.slice(this.spos, t);
    return this.spos = t, n;
  }
}
const Mg = crypto.getRandomValues.bind(crypto), Dg = Math.random, Kc = () => Mg(new Uint32Array(1))[0], Og = (e) => e[Ne(Dg() * e.length)], Ig = "10000000-1000-4000-8000" + -1e11, Rg = () => Ig.replace(
  /[018]/g,
  /** @param {number} c */
  (e) => (e ^ Kc() & 15 >> e / 4).toString(16)
), Lg = Date.now, Xl = (e) => (
  /** @type {Promise<T>} */
  new Promise(e)
);
Promise.all.bind(Promise);
const Ql = (e) => e === void 0 ? null : e;
class Pg {
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
let qc = new Pg(), Ng = !0;
try {
  typeof localStorage < "u" && localStorage && (qc = localStorage, Ng = !1);
} catch {
}
const Bg = qc, $g = Object.assign, Yc = Object.keys, Hg = (e, t) => {
  for (const n in e)
    t(e[n], n);
}, Zl = (e) => Yc(e).length, Fg = (e) => {
  for (const t in e)
    return !1;
  return !0;
}, Jc = (e, t) => {
  for (const n in e)
    if (!t(e[n], n))
      return !1;
  return !0;
}, Vg = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ug = (e, t) => e === t || Zl(e) === Zl(t) && Jc(e, (n, s) => (n !== void 0 || Vg(t, s)) && t[s] === n), jg = Object.freeze, Gc = (e) => {
  for (const t in e) {
    const n = e[t];
    (typeof n == "object" || typeof n == "function") && Gc(e[t]);
  }
  return jg(e);
}, So = (e, t, n = 0) => {
  try {
    for (; n < e.length; n++)
      e[n](...t);
  } finally {
    n < e.length && So(e, t, n + 1);
  }
}, zg = (e, t) => t.includes(e), Hn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Xc = typeof window < "u" && typeof document < "u" && !Hn;
let ve;
const Wg = () => {
  if (ve === void 0)
    if (Hn) {
      ve = oe();
      const e = process.argv;
      let t = null;
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        s[0] === "-" ? (t !== null && ve.set(t, ""), t = s) : t !== null && (ve.set(t, s), t = null);
      }
      t !== null && ve.set(t, "");
    } else typeof location == "object" ? (ve = oe(), (location.search || "?").slice(1).split("&").forEach((e) => {
      if (e.length !== 0) {
        const [t, n] = e.split("=");
        ve.set(`--${Wl(t, "-")}`, n), ve.set(`-${Wl(t, "-")}`, n);
      }
    })) : ve = oe();
  return ve;
}, jr = (e) => Wg().has(e), wi = (e) => Ql(Hn ? process.env[e.toUpperCase().replaceAll("-", "_")] : Bg.getItem(e)), Qc = (e) => jr("--" + e) || wi(e) !== null;
Qc("production");
const Kg = Hn && zg(process.env.FORCE_COLOR, ["true", "1", "2"]), qg = Kg || !jr("--no-colors") && // @todo deprecate --no-colors
!Qc("no-color") && (!Hn || process.stdout.isTTY) && (!Hn || jr("--color") || wi("COLORTERM") !== null || (wi("TERM") || "").includes("color")), Yg = (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += eg(e[n]);
  return btoa(t);
}, Jg = (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), Gg = Xc ? Yg : Jg, Xg = (e) => cg((t) => $n(t, e));
class Qg {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, n) {
    this.left = t, this.right = n;
  }
}
const Te = (e, t) => new Qg(e, t), Zg = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const tm = (e) => Yp(e, (t, n) => `${n}:${t};`).join(""), em = (e) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    e(this._);
  }
}, nm = em(clearTimeout), Zc = (e, t) => new nm(setTimeout(t, e)), Ue = Symbol, tu = Ue(), eu = Ue(), sm = Ue(), im = Ue(), rm = Ue(), nu = Ue(), om = Ue(), Co = Ue(), lm = Ue(), am = (e) => {
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
}, cm = {
  [tu]: Te("font-weight", "bold"),
  [eu]: Te("font-weight", "normal"),
  [sm]: Te("color", "blue"),
  [rm]: Te("color", "green"),
  [im]: Te("color", "grey"),
  [nu]: Te("color", "red"),
  [om]: Te("color", "purple"),
  [Co]: Te("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [lm]: Te("color", "black")
}, um = (e) => {
  e.length === 1 && e[0]?.constructor === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [], s = oe();
  let i = [], r = 0;
  for (; r < e.length; r++) {
    const o = e[r], l = cm[o];
    if (l !== void 0)
      s.set(l.left, l.right);
    else {
      if (o === void 0)
        break;
      if (o.constructor === String || o.constructor === Number) {
        const a = tm(s);
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
}, su = qg ? um : am, dm = (...e) => {
  console.log(...su(e)), ru.forEach((t) => t.print(e));
}, iu = (...e) => {
  console.warn(...su(e)), e.unshift(Co), ru.forEach((t) => t.print(e));
}, ru = mn(), ou = (e) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: e
}), fm = (e, t) => ou(() => {
  let n;
  do
    n = e.next();
  while (!n.done && !t(n.value));
  return n;
}), br = (e, t) => ou(() => {
  const { done: n, value: s } = e.next();
  return { done: n, value: n ? void 0 : t(s) };
});
class Eo {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(t, n) {
    this.clock = t, this.len = n;
  }
}
class Wn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const en = (e, t, n) => t.clients.forEach((s, i) => {
  const r = (
    /** @type {Array<GC|Item>} */
    e.doc.store.clients.get(i)
  );
  if (r != null) {
    const o = r[r.length - 1], l = o.id.clock + o.length;
    for (let a = 0, u = s[a]; a < s.length && u.clock < l; u = s[++a])
      pu(e, r, u.clock, u.len, n);
  }
}), hm = (e, t) => {
  let n = 0, s = e.length - 1;
  for (; n <= s; ) {
    const i = Ne((n + s) / 2), r = e[i], o = r.clock;
    if (o <= t) {
      if (t < o + r.len)
        return i;
      n = i + 1;
    } else
      s = i - 1;
  }
  return null;
}, Kn = (e, t) => {
  const n = e.clients.get(t.client);
  return n !== void 0 && hm(n, t.clock) !== null;
}, Ao = (e) => {
  e.clients.forEach((t) => {
    t.sort((i, r) => i.clock - r.clock);
    let n, s;
    for (n = 1, s = 1; n < t.length; n++) {
      const i = t[s - 1], r = t[n];
      i.clock + i.len >= r.clock ? i.len = Ze(i.len, r.clock + r.len - i.clock) : (s < n && (t[s] = r), s++);
    }
    t.length = s;
  });
}, zr = (e) => {
  const t = new Wn();
  for (let n = 0; n < e.length; n++)
    e[n].clients.forEach((s, i) => {
      if (!t.clients.has(i)) {
        const r = s.slice();
        for (let o = n + 1; o < e.length; o++)
          Gp(r, e[o].clients.get(i) || []);
        t.clients.set(i, r);
      }
    });
  return Ao(t), t;
}, vs = (e, t, n, s) => {
  Ve(e.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new Eo(n, s));
}, lu = () => new Wn(), pm = (e) => {
  const t = lu();
  return e.clients.forEach((n, s) => {
    const i = [];
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o.deleted) {
        const l = o.id.clock;
        let a = o.length;
        if (r + 1 < n.length)
          for (let u = n[r + 1]; r + 1 < n.length && u.deleted; u = n[++r + 1])
            a += u.length;
        i.push(new Eo(l, a));
      }
    }
    i.length > 0 && t.clients.set(s, i);
  }), t;
}, To = (e, t) => {
  Q(e.restEncoder, t.clients.size), wn(t.clients.entries()).sort((n, s) => s[0] - n[0]).forEach(([n, s]) => {
    e.resetDsCurVal(), Q(e.restEncoder, n);
    const i = s.length;
    Q(e.restEncoder, i);
    for (let r = 0; r < i; r++) {
      const o = s[r];
      e.writeDsClock(o.clock), e.writeDsLen(o.len);
    }
  });
}, gm = (e) => {
  const t = new Wn(), n = lt(e.restDecoder);
  for (let s = 0; s < n; s++) {
    e.resetDsCurVal();
    const i = lt(e.restDecoder), r = lt(e.restDecoder);
    if (r > 0) {
      const o = Ve(t.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < r; l++)
        o.push(new Eo(e.readDsClock(), e.readDsLen()));
    }
  }
  return t;
}, ta = (e, t, n) => {
  const s = new Wn(), i = lt(e.restDecoder);
  for (let r = 0; r < i; r++) {
    e.resetDsCurVal();
    const o = lt(e.restDecoder), l = lt(e.restDecoder), a = n.clients.get(o) || [], u = mt(n, o);
    for (let c = 0; c < l; c++) {
      const d = e.readDsClock(), f = d + e.readDsLen();
      if (d < u) {
        u < f && vs(s, o, u, f - u);
        let h = de(a, d), p = a[h];
        for (!p.deleted && p.id.clock < d && (a.splice(h + 1, 0, Si(t, p, d - p.id.clock)), h++); h < a.length && (p = a[h++], p.id.clock < f); )
          p.deleted || (f < p.id.clock + p.length && a.splice(h, 0, Si(t, p, f - p.id.clock)), p.delete(t));
      } else
        vs(s, o, d, f - d);
    }
  }
  if (s.clients.size > 0) {
    const r = new Ki();
    return Q(r.restEncoder, 0), To(r, s), r.toUint8Array();
  }
  return null;
}, au = Kc;
class xn extends Vc {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = Rg(), collectionid: n = null, gc: s = !0, gcFilter: i = () => !0, meta: r = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = i, this.clientID = au(), this.guid = t, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new fu(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = r, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Xl((u) => {
      this.on("load", () => {
        this.isLoaded = !0, u(this);
      });
    });
    const a = () => Xl((u) => {
      const c = (d) => {
        (d === void 0 || d === !0) && (this.off("sync", c), u());
      };
      this.on("sync", c);
    });
    this.on("sync", (u) => {
      u === !1 && this.isSynced && (this.whenSynced = a()), this.isSynced = u === void 0 || u === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
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
    return new Set(wn(this.subdocs).map((t) => t.guid));
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
    yt
  )) {
    const s = Ve(this.share, t, () => {
      const r = new n();
      return r._integrate(this, null), r;
    }), i = s.constructor;
    if (n !== yt && i !== n)
      if (i === yt) {
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
      this.get(t, Rn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(t = "") {
    return this.get(t, nn);
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
      this.get(t, Fn)
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
    return this.get(t, bn);
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
    this.isDestroyed = !0, wn(this.subdocs).forEach((n) => n.destroy());
    const t = this._item;
    if (t !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        t.content
      );
      n.doc = new xn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = t, it(
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
class mm {
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
class bi extends mm {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], lt(t), this.keyClockDecoder = new wr(Xt(t)), this.clientDecoder = new ti(Xt(t)), this.leftClockDecoder = new wr(Xt(t)), this.rightClockDecoder = new wr(Xt(t)), this.infoDecoder = new Gl(Xt(t), bs), this.stringDecoder = new Tg(Xt(t)), this.parentInfoDecoder = new Gl(Xt(t), bs), this.typeRefDecoder = new ti(Xt(t)), this.lenDecoder = new ti(Xt(t));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new On(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new On(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return mi(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Xt(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return mi(this.restDecoder);
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
class wm {
  constructor() {
    this.restEncoder = Ps();
  }
  toUint8Array() {
    return ie(this.restEncoder);
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
class bm extends wm {
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
    Fr(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    Dn(this.restEncoder, t);
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
    $n(this.restEncoder, t);
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
    Dn(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    Dn(this.restEncoder, t);
  }
}
class vm {
  constructor() {
    this.restEncoder = Ps(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return ie(this.restEncoder);
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
    t === 0 && Ut(), Q(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Ki extends vm {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new mr(), this.clientEncoder = new Zs(), this.leftClockEncoder = new mr(), this.rightClockEncoder = new mr(), this.infoEncoder = new ql(Fr), this.stringEncoder = new vg(), this.parentInfoEncoder = new ql(Fr), this.typeRefEncoder = new Zs(), this.lenEncoder = new Zs();
  }
  toUint8Array() {
    const t = Ps();
    return Q(t, 0), Wt(t, this.keyClockEncoder.toUint8Array()), Wt(t, this.clientEncoder.toUint8Array()), Wt(t, this.leftClockEncoder.toUint8Array()), Wt(t, this.rightClockEncoder.toUint8Array()), Wt(t, ie(this.infoEncoder)), Wt(t, this.stringEncoder.toUint8Array()), Wt(t, ie(this.parentInfoEncoder)), Wt(t, this.typeRefEncoder.toUint8Array()), Wt(t, this.lenEncoder.toUint8Array()), zi(t, ie(this.restEncoder)), ie(t);
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
    $n(this.restEncoder, t);
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
    $n(this.restEncoder, t);
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
const ym = (e, t, n, s) => {
  s = Ze(s, t[0].id.clock);
  const i = de(t, s);
  Q(e.restEncoder, t.length - i), e.writeClient(n), Q(e.restEncoder, s);
  const r = t[i];
  r.write(e, s - r.id.clock);
  for (let o = i + 1; o < t.length; o++)
    t[o].write(e, 0);
}, cu = (e, t, n) => {
  const s = /* @__PURE__ */ new Map();
  n.forEach((i, r) => {
    mt(t, r) > i && s.set(r, i);
  }), qi(t).forEach((i, r) => {
    n.has(r) || s.set(r, 0);
  }), Q(e.restEncoder, s.size), wn(s.entries()).sort((i, r) => r[0] - i[0]).forEach(([i, r]) => {
    ym(
      e,
      /** @type {Array<GC|Item>} */
      t.clients.get(i),
      i,
      r
    );
  });
}, xm = (e, t) => {
  const n = oe(), s = lt(e.restDecoder);
  for (let i = 0; i < s; i++) {
    const r = lt(e.restDecoder), o = new Array(r), l = e.readClient();
    let a = lt(e.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let u = 0; u < r; u++) {
      const c = e.readInfo();
      switch (ji & c) {
        case 0: {
          const d = e.readLen();
          o[u] = new te(W(l, a), d), a += d;
          break;
        }
        case 10: {
          const d = lt(e.restDecoder);
          o[u] = new se(W(l, a), d), a += d;
          break;
        }
        default: {
          const d = (c & (Re | Pt)) === 0, f = new nt(
            W(l, a),
            null,
            // left
            (c & Pt) === Pt ? e.readLeftID() : null,
            // origin
            null,
            // right
            (c & Re) === Re ? e.readRightID() : null,
            // right origin
            d ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null,
            // parent
            d && (c & ms) === ms ? e.readString() : null,
            // parentSub
            Nu(e, c)
            // item content
          );
          o[u] = f, a += f.length;
        }
      }
    }
  }
  return n;
}, km = (e, t, n) => {
  const s = [];
  let i = wn(n.keys()).sort((h, p) => h - p);
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
  const l = new fu(), a = /* @__PURE__ */ new Map(), u = (h, p) => {
    const w = a.get(h);
    (w == null || w > p) && a.set(h, p);
  };
  let c = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const d = /* @__PURE__ */ new Map(), f = () => {
    for (const h of s) {
      const p = h.id.client, w = n.get(p);
      w ? (w.i--, l.clients.set(p, w.refs.slice(w.i)), n.delete(p), w.i = 0, w.refs = []) : l.clients.set(p, [h]), i = i.filter((y) => y !== p);
    }
    s.length = 0;
  };
  for (; ; ) {
    if (c.constructor !== se) {
      const p = Ve(d, c.id.client, () => mt(t, c.id.client)) - c.id.clock;
      if (p < 0)
        s.push(c), u(c.id.client, c.id.clock - 1), f();
      else {
        const w = c.getMissing(e, t);
        if (w !== null) {
          s.push(c);
          const y = n.get(
            /** @type {number} */
            w
          ) || { refs: [], i: 0 };
          if (y.refs.length === y.i)
            u(
              /** @type {number} */
              w,
              mt(t, w)
            ), f();
          else {
            c = y.refs[y.i++];
            continue;
          }
        } else (p === 0 || p < c.length) && (c.integrate(e, p), d.set(c.id.client, c.id.clock + c.length));
      }
    }
    if (s.length > 0)
      c = /** @type {GC|Item} */
      s.pop();
    else if (o !== null && o.i < o.refs.length)
      c = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = r(), o === null)
        break;
      c = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (l.clients.size > 0) {
    const h = new Ki();
    return cu(h, l, /* @__PURE__ */ new Map()), Q(h.restEncoder, 0), { missing: a, update: h.toUint8Array() };
  }
  return null;
}, _m = (e, t) => cu(e, t.doc.store, t.beforeState), Sm = (e, t, n, s = new bi(e)) => it(t, (i) => {
  i.local = !1;
  let r = !1;
  const o = i.doc, l = o.store, a = xm(s, o), u = km(i, l, a), c = l.pendingStructs;
  if (c) {
    for (const [f, h] of c.missing)
      if (h < mt(l, f)) {
        r = !0;
        break;
      }
    if (u) {
      for (const [f, h] of u.missing) {
        const p = c.missing.get(f);
        (p == null || p > h) && c.missing.set(f, h);
      }
      c.update = ca([c.update, u.update]);
    }
  } else
    l.pendingStructs = u;
  const d = ta(s, i, l);
  if (l.pendingDs) {
    const f = new bi(xo(l.pendingDs));
    lt(f.restDecoder);
    const h = ta(f, i, l);
    d && h ? l.pendingDs = ca([d, h]) : l.pendingDs = d || h;
  } else
    l.pendingDs = d;
  if (r) {
    const f = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, Wr(i.doc, f);
  }
}, n, !1), Wr = (e, t, n, s = bi) => {
  const i = xo(t);
  Sm(i, e, n, new s(i));
};
class Cm {
  constructor() {
    this.l = [];
  }
}
const ea = () => new Cm(), na = (e, t) => e.l.push(t), sa = (e, t) => {
  const n = e.l, s = n.length;
  e.l = n.filter((i) => t !== i), s === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, uu = (e, t, n) => So(e.l, [t, n]);
class On {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, n) {
    this.client = t, this.clock = n;
  }
}
const Us = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, W = (e, t) => new On(e, t), ys = (e) => {
  for (const [t, n] of e.doc.share.entries())
    if (n === e)
      return t;
  throw Ut();
}, xs = (e, t) => {
  for (; t !== null; ) {
    if (t.parent === e)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
};
class vi {
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
class Em {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, n, s = 0) {
    this.type = t, this.index = n, this.assoc = s;
  }
}
const Am = (e, t, n = 0) => new Em(e, t, n), js = (e, t, n) => {
  let s = null, i = null;
  return e._item === null ? i = ys(e) : s = W(e._item.id.client, e._item.id.clock), new vi(s, i, t, n);
}, vr = (e, t, n = 0) => {
  let s = e._start;
  if (n < 0) {
    if (t === 0)
      return js(e, null, n);
    t--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > t)
        return js(e, W(s.id.client, s.id.clock + t), n);
      t -= s.length;
    }
    if (s.right === null && n < 0)
      return js(e, s.lastId, n);
    s = s.right;
  }
  return js(e, null, n);
}, Tm = (e, t) => {
  const n = In(e, t), s = t.clock - n.id.clock;
  return {
    item: n,
    diff: s
  };
}, Mm = (e, t, n = !0) => {
  const s = t.store, i = e.item, r = e.type, o = e.tname, l = e.assoc;
  let a = null, u = 0;
  if (i !== null) {
    if (mt(s, i.client) <= i.clock)
      return null;
    const c = n ? Jr(s, i) : Tm(s, i), d = c.item;
    if (!(d instanceof nt))
      return null;
    if (a = /** @type {AbstractType<any>} */
    d.parent, a._item === null || !a._item.deleted) {
      u = d.deleted || !d.countable ? 0 : c.diff + (l >= 0 ? 0 : 1);
      let f = d.left;
      for (; f !== null; )
        !f.deleted && f.countable && (u += f.length), f = f.left;
    }
  } else {
    if (o !== null)
      a = t.get(o);
    else if (r !== null) {
      if (mt(s, r.client) <= r.clock)
        return null;
      const { item: c } = n ? Jr(s, r) : { item: In(s, r) };
      if (c instanceof nt && c.content instanceof he)
        a = c.content.type;
      else
        return null;
    } else
      throw Ut();
    l >= 0 ? u = a._length : u = 0;
  }
  return Am(a, u, e.assoc);
};
class Mo {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, n) {
    this.ds = t, this.sv = n;
  }
}
const du = (e, t) => new Mo(e, t), yr = (e) => du(pm(e.store), qi(e.store)), dn = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Kn(t.ds, e.id), Kr = (e, t) => {
  const n = Ve(e.meta, Kr, mn), s = e.doc.store;
  n.has(t) || (t.sv.forEach((i, r) => {
    i < mt(s, r) && Ht(e, W(r, i));
  }), en(e, t.ds, (i) => {
  }), n.add(t));
};
class fu {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const qi = (e) => {
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
}, hu = (e, t) => {
  let n = e.clients.get(t.id.client);
  if (n === void 0)
    n = [], e.clients.set(t.id.client, n);
  else {
    const s = n[n.length - 1];
    if (s.id.clock + s.length !== t.id.clock)
      throw Ut();
  }
  n.push(t);
}, de = (e, t) => {
  let n = 0, s = e.length - 1, i = e[s], r = i.id.clock;
  if (r === t)
    return s;
  let o = Ne(t / (r + i.length - 1) * s);
  for (; n <= s; ) {
    if (i = e[o], r = i.id.clock, r <= t) {
      if (t < r + i.length)
        return o;
      n = o + 1;
    } else
      s = o - 1;
    o = Ne((n + s) / 2);
  }
  throw Ut();
}, Dm = (e, t) => {
  const n = e.clients.get(t.client);
  return n[de(n, t.clock)];
}, In = (
  /** @type {function(StructStore,ID):Item} */
  Dm
), qr = (e, t, n) => {
  const s = de(t, n), i = t[s];
  return i.id.clock < n && i instanceof nt ? (t.splice(s + 1, 0, Si(e, i, n - i.id.clock)), s + 1) : s;
}, Ht = (e, t) => {
  const n = (
    /** @type {Array<Item>} */
    e.doc.store.clients.get(t.client)
  );
  return n[qr(e, n, t.clock)];
}, ia = (e, t, n) => {
  const s = t.clients.get(n.client), i = de(s, n.clock), r = s[i];
  return n.clock !== r.id.clock + r.length - 1 && r.constructor !== te && s.splice(i + 1, 0, Si(e, r, n.clock - r.id.clock + 1)), r;
}, Om = (e, t, n) => {
  const s = (
    /** @type {Array<GC|Item>} */
    e.clients.get(t.id.client)
  );
  s[de(s, t.id.clock)] = n;
}, pu = (e, t, n, s, i) => {
  if (s === 0)
    return;
  const r = n + s;
  let o = qr(e, t, n), l;
  do
    l = t[o++], r < l.id.clock + l.length && qr(e, t, r), i(l);
  while (o < t.length && t[o].id.clock < r);
};
class Im {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, n, s) {
    this.doc = t, this.deleteSet = new Wn(), this.beforeState = qi(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const ra = (e, t) => t.deleteSet.clients.size === 0 && !Jp(t.afterState, (n, s) => t.beforeState.get(s) !== n) ? !1 : (Ao(t.deleteSet), _m(e, t), To(e, t.deleteSet), !0), oa = (e, t, n) => {
  const s = t._item;
  (s === null || s.id.clock < (e.beforeState.get(s.id.client) || 0) && !s.deleted) && Ve(e.changed, t, mn).add(n);
}, ei = (e, t) => {
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
}, Rm = (e, t, n) => {
  for (const [s, i] of e.clients.entries()) {
    const r = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let o = i.length - 1; o >= 0; o--) {
      const l = i[o], a = l.clock + l.len;
      for (let u = de(r, l.clock), c = r[u]; u < r.length && c.id.clock < a; c = r[++u]) {
        const d = r[u];
        if (l.clock + l.len <= d.id.clock)
          break;
        d instanceof nt && d.deleted && !d.keep && n(d) && d.gc(t, !1);
      }
    }
  }
}, Lm = (e, t) => {
  e.clients.forEach((n, s) => {
    const i = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r], l = Bn(i.length - 1, 1 + de(i, o.clock + o.len - 1));
      for (let a = l, u = i[a]; a > 0 && u.id.clock >= o.clock; u = i[a])
        a -= 1 + ei(i, a);
    }
  });
}, gu = (e, t) => {
  if (t < e.length) {
    const n = e[t], s = n.doc, i = s.store, r = n.deleteSet, o = n._mergeStructs;
    try {
      Ao(r), n.afterState = qi(n.doc.store), s.emit("beforeObserverCalls", [n, s]);
      const l = [];
      n.changed.forEach(
        (a, u) => l.push(() => {
          (u._item === null || !u._item.deleted) && u._callObserver(n, a);
        })
      ), l.push(() => {
        n.changedParentTypes.forEach((a, u) => {
          u._dEH.l.length > 0 && (u._item === null || !u._item.deleted) && (a = a.filter(
            (c) => c.target._item === null || !c.target._item.deleted
          ), a.forEach((c) => {
            c.currentTarget = u, c._path = null;
          }), a.sort((c, d) => c.path.length - d.path.length), uu(u._dEH, a, n));
        });
      }), l.push(() => s.emit("afterTransaction", [n, s])), So(l, []), n._needFormattingCleanup && t0(n);
    } finally {
      s.gc && Rm(r, i, s.gcFilter), Lm(r, i), n.afterState.forEach((c, d) => {
        const f = n.beforeState.get(d) || 0;
        if (f !== c) {
          const h = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), p = Ze(de(h, f), 1);
          for (let w = h.length - 1; w >= p; )
            w -= 1 + ei(h, w);
        }
      });
      for (let c = o.length - 1; c >= 0; c--) {
        const { client: d, clock: f } = o[c].id, h = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), p = de(h, f);
        p + 1 < h.length && ei(h, p + 1) > 1 || p > 0 && ei(h, p);
      }
      if (!n.local && n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID) && (dm(Co, tu, "[yjs] ", eu, nu, "Changed the client-id because another client seems to be using it."), s.clientID = au()), s.emit("afterTransactionCleanup", [n, s]), s._observers.has("update")) {
        const c = new bm();
        ra(c, n) && s.emit("update", [c.toUint8Array(), n.origin, s, n]);
      }
      if (s._observers.has("updateV2")) {
        const c = new Ki();
        ra(c, n) && s.emit("updateV2", [c.toUint8Array(), n.origin, s, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: a, subdocsRemoved: u } = n;
      (l.size > 0 || u.size > 0 || a.size > 0) && (l.forEach((c) => {
        c.clientID = s.clientID, c.collectionid == null && (c.collectionid = s.collectionid), s.subdocs.add(c);
      }), u.forEach((c) => s.subdocs.delete(c)), s.emit("subdocs", [{ loaded: a, added: l, removed: u }, s, n]), u.forEach((c) => c.destroy())), e.length <= t + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, e])) : gu(e, t + 1);
    }
  }
}, it = (e, t, n = null, s = !0) => {
  const i = e._transactionCleanups;
  let r = !1, o = null;
  e._transaction === null && (r = !0, e._transaction = new Im(e, n, s), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
  try {
    o = t(e._transaction);
  } finally {
    if (r) {
      const l = e._transaction === i[0];
      e._transaction = null, l && gu(i, 0);
    }
  }
  return o;
};
class Pm {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, n) {
    this.insertions = n, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const la = (e, t, n) => {
  en(e, n.deletions, (s) => {
    s instanceof nt && t.scope.some((i) => i === e.doc || xs(
      /** @type {AbstractType<any>} */
      i,
      s
    )) && Lo(s, !1);
  });
}, aa = (e, t, n) => {
  let s = null;
  const i = e.doc, r = e.scope;
  it(i, (l) => {
    for (; t.length > 0 && e.currStackItem === null; ) {
      const a = i.store, u = (
        /** @type {StackItem} */
        t.pop()
      ), c = /* @__PURE__ */ new Set(), d = [];
      let f = !1;
      en(l, u.insertions, (h) => {
        if (h instanceof nt) {
          if (h.redone !== null) {
            let { item: p, diff: w } = Jr(a, h.id);
            w > 0 && (p = Ht(l, W(p.id.client, p.id.clock + w))), h = p;
          }
          !h.deleted && r.some((p) => p === l.doc || xs(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            h
          )) && d.push(h);
        }
      }), en(l, u.deletions, (h) => {
        h instanceof nt && r.some((p) => p === l.doc || xs(
          /** @type {AbstractType<any>} */
          p,
          h
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Kn(u.insertions, h.id) && c.add(h);
      }), c.forEach((h) => {
        f = Pu(l, h, c, u.insertions, e.ignoreRemoteMapChanges, e) !== null || f;
      });
      for (let h = d.length - 1; h >= 0; h--) {
        const p = d[h];
        e.deleteFilter(p) && (p.delete(l), f = !0);
      }
      e.currStackItem = f ? u : null;
    }
    l.changed.forEach((a, u) => {
      a.has(null) && u._searchMarker && (u._searchMarker.length = 0);
    }), s = l;
  }, e);
  const o = e.currStackItem;
  if (o != null) {
    const l = s.changedParentTypes;
    e.emit("stack-item-popped", [{ stackItem: o, type: n, changedParentTypes: l, origin: e }, e]), e.currStackItem = null;
  }
  return o;
};
class mu extends Vc {
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
      $r(t) ? t[0].doc : t instanceof xn ? t : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(t), this.deleteFilter = i, r.add(this), this.trackedOrigins = r, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (a) => {
      if (!this.captureTransaction(a) || !this.scope.some((y) => a.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(a.origin) && (!a.origin || !this.trackedOrigins.has(a.origin.constructor)))
        return;
      const u = this.undoing, c = this.redoing, d = u ? this.redoStack : this.undoStack;
      u ? this.stopCapturing() : c || this.clear(!1, !0);
      const f = new Wn();
      a.afterState.forEach((y, b) => {
        const O = a.beforeState.get(b) || 0, N = y - O;
        N > 0 && vs(f, b, O, N);
      });
      const h = Lg();
      let p = !1;
      if (this.lastChange > 0 && h - this.lastChange < this.captureTimeout && d.length > 0 && !u && !c) {
        const y = d[d.length - 1];
        y.deletions = zr([y.deletions, a.deleteSet]), y.insertions = zr([y.insertions, f]);
      } else
        d.push(new Pm(a.deleteSet, f)), p = !0;
      !u && !c && (this.lastChange = h), en(
        a,
        a.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof nt && this.scope.some((b) => b === a.doc || xs(
            /** @type {AbstractType<any>} */
            b,
            y
          )) && Lo(y, !0);
        }
      );
      const w = [{ stackItem: d[d.length - 1], origin: a.origin, type: u ? "redo" : "undo", changedParentTypes: a.changedParentTypes }, this];
      p ? this.emit("stack-item-added", w) : this.emit("stack-item-updated", w);
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
    t = $r(t) ? t : [t], t.forEach((s) => {
      n.has(s) || (n.add(s), (s instanceof yt ? s.doc !== this.doc : s !== this.doc) && iu("[yjs#509] Not same Y.Doc"), this.scope.push(s));
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
      t && (this.undoStack.forEach((i) => la(s, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => la(s, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: n }]);
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
      t = aa(this, this.undoStack, "undo");
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
      t = aa(this, this.redoStack, "redo");
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
function* Nm(e) {
  const t = lt(e.restDecoder);
  for (let n = 0; n < t; n++) {
    const s = lt(e.restDecoder), i = e.readClient();
    let r = lt(e.restDecoder);
    for (let o = 0; o < s; o++) {
      const l = e.readInfo();
      if (l === 10) {
        const a = lt(e.restDecoder);
        yield new se(W(i, r), a), r += a;
      } else if ((ji & l) !== 0) {
        const a = (l & (Re | Pt)) === 0, u = new nt(
          W(i, r),
          null,
          // left
          (l & Pt) === Pt ? e.readLeftID() : null,
          // origin
          null,
          // right
          (l & Re) === Re ? e.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          a ? e.readParentInfo() ? e.readString() : e.readLeftID() : null,
          // parent
          a && (l & ms) === ms ? e.readString() : null,
          // parentSub
          Nu(e, l)
          // item content
        );
        yield u, r += u.length;
      } else {
        const a = e.readLen();
        yield new te(W(i, r), a), r += a;
      }
    }
  }
}
class Bm {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, n) {
    this.gen = Nm(t), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === se);
    return this.curr;
  }
}
class $m {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const Hm = (e, t) => {
  if (e.constructor === te) {
    const { client: n, clock: s } = e.id;
    return new te(W(n, s + t), e.length - t);
  } else if (e.constructor === se) {
    const { client: n, clock: s } = e.id;
    return new se(W(n, s + t), e.length - t);
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
}, ca = (e, t = bi, n = Ki) => {
  if (e.length === 1)
    return e[0];
  const s = e.map((c) => new t(xo(c)));
  let i = s.map((c) => new Bm(c, !0)), r = null;
  const o = new n(), l = new $m(o);
  for (; i = i.filter((f) => f.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (f, h) => {
      if (f.curr.id.client === h.curr.id.client) {
        const p = f.curr.id.clock - h.curr.id.clock;
        return p === 0 ? f.curr.constructor === h.curr.constructor ? 0 : f.curr.constructor === se ? 1 : -1 : p;
      } else
        return h.curr.id.client - f.curr.id.client;
    }
  ), i.length !== 0; ) {
    const c = i[0], d = (
      /** @type {Item | GC} */
      c.curr.id.client
    );
    if (r !== null) {
      let f = (
        /** @type {Item | GC | null} */
        c.curr
      ), h = !1;
      for (; f !== null && f.id.clock + f.length <= r.struct.id.clock + r.struct.length && f.id.client >= r.struct.id.client; )
        f = c.next(), h = !0;
      if (f === null || // current decoder is empty
      f.id.client !== d || // check whether there is another decoder that has has updates from `firstClient`
      h && f.id.clock > r.struct.id.clock + r.struct.length)
        continue;
      if (d !== r.struct.id.client)
        ts(l, r.struct, r.offset), r = { struct: f, offset: 0 }, c.next();
      else if (r.struct.id.clock + r.struct.length < f.id.clock)
        if (r.struct.constructor === se)
          r.struct.length = f.id.clock + f.length - r.struct.id.clock;
        else {
          ts(l, r.struct, r.offset);
          const p = f.id.clock - r.struct.id.clock - r.struct.length;
          r = { struct: new se(W(d, r.struct.id.clock + r.struct.length), p), offset: 0 };
        }
      else {
        const p = r.struct.id.clock + r.struct.length - f.id.clock;
        p > 0 && (r.struct.constructor === se ? r.struct.length -= p : f = Hm(f, p)), r.struct.mergeWith(
          /** @type {any} */
          f
        ) || (ts(l, r.struct, r.offset), r = { struct: f, offset: 0 }, c.next());
      }
    } else
      r = { struct: (
        /** @type {Item | GC} */
        c.curr
      ), offset: 0 }, c.next();
    for (let f = c.curr; f !== null && f.id.client === d && f.id.clock === r.struct.id.clock + r.struct.length && f.constructor !== se; f = c.next())
      ts(l, r.struct, r.offset), r = { struct: f, offset: 0 };
  }
  r !== null && (ts(l, r.struct, r.offset), r = null), Fm(l);
  const a = s.map((c) => gm(c)), u = zr(a);
  return To(o, u), o.toUint8Array();
}, wu = (e) => {
  e.written > 0 && (e.clientStructs.push({ written: e.written, restEncoder: ie(e.encoder.restEncoder) }), e.encoder.restEncoder = Ps(), e.written = 0);
}, ts = (e, t, n) => {
  e.written > 0 && e.currClient !== t.id.client && wu(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), Q(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Fm = (e) => {
  wu(e);
  const t = e.encoder.restEncoder;
  Q(t, e.clientStructs.length);
  for (let n = 0; n < e.clientStructs.length; n++) {
    const s = e.clientStructs[n];
    Q(t, s.written), zi(t, s.restEncoder);
  }
}, ua = "You must not compute changes after the event-handler fired.";
class Yi {
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
    return this._path || (this._path = Vm(this.currentTarget, this.target));
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
    return Kn(this.transaction.deleteSet, t.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw tn(ua);
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
                o = "delete", l = hr(a.content.getContent());
              else
                return;
            else
              a !== null && this.deletes(a) ? (o = "update", l = hr(a.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(r))
            o = "delete", l = hr(
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
        throw tn(ua);
      const n = this.target, s = mn(), i = mn(), r = [];
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
        for (let u = n._start; u !== null; u = u.right)
          u.deleted ? this.deletes(u) && !this.adds(u) && ((l === null || l.delete === void 0) && (a(), l = { delete: 0 }), l.delete += u.length, i.add(u)) : this.adds(u) ? ((l === null || l.insert === void 0) && (a(), l = { insert: [] }), l.insert = l.insert.concat(u.content.getContent()), s.add(u)) : ((l === null || l.retain === void 0) && (a(), l = { retain: 0 }), l.retain += u.length);
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
const Vm = (e, t) => {
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
}, Tt = () => {
  iu("Invalid access: Add Yjs type to a document before reading data.");
}, bu = 80;
let Do = 0;
class Um {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, n) {
    t.marker = !0, this.p = t, this.index = n, this.timestamp = Do++;
  }
}
const jm = (e) => {
  e.timestamp = Do++;
}, vu = (e, t, n) => {
  e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = Do++;
}, zm = (e, t, n) => {
  if (e.length >= bu) {
    const s = e.reduce((i, r) => i.timestamp < r.timestamp ? i : r);
    return vu(s, t, n), s;
  } else {
    const s = new Um(t, n);
    return e.push(s), s;
  }
}, Ji = (e, t) => {
  if (e._start === null || t === 0 || e._searchMarker === null)
    return null;
  const n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((r, o) => Qs(t - r.index) < Qs(t - o.index) ? r : o);
  let s = e._start, i = 0;
  for (n !== null && (s = n.p, i = n.index, jm(n)); s.right !== null && i < t; ) {
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
  return n !== null && Qs(n.index - i) < /** @type {YText|YArray<any>} */
  s.parent.length / bu ? (vu(n, s, i), n) : zm(e._searchMarker, s, i);
}, ks = (e, t, n) => {
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
    (t < i.index || n > 0 && t === i.index) && (i.index = Ze(t, i.index + n));
  }
}, Gi = (e, t, n) => {
  const s = e, i = t.changedParentTypes;
  for (; Ve(i, e, () => []).push(n), e._item !== null; )
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  uu(s._eH, n, t);
};
class yt {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = ea(), this._dEH = ea(), this._searchMarker = null;
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
    throw le();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw le();
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
    na(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    na(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    sa(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    sa(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const yu = (e, t, n) => {
  e.doc ?? Tt(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
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
}, xu = (e) => {
  e.doc ?? Tt();
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
}, ku = (e, t) => {
  const n = [];
  let s = e._start;
  for (; s !== null; ) {
    if (s.countable && dn(s, t)) {
      const i = s.content.getContent();
      for (let r = 0; r < i.length; r++)
        n.push(i[r]);
    }
    s = s.right;
  }
  return n;
}, _s = (e, t) => {
  let n = 0, s = e._start;
  for (e.doc ?? Tt(); s !== null; ) {
    if (s.countable && !s.deleted) {
      const i = s.content.getContent();
      for (let r = 0; r < i.length; r++)
        t(i[r], n++, e);
    }
    s = s.right;
  }
}, _u = (e, t) => {
  const n = [];
  return _s(e, (s, i) => {
    n.push(t(s, i, e));
  }), n;
}, Wm = (e) => {
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
}, Su = (e, t) => {
  e.doc ?? Tt();
  const n = Ji(e, t);
  let s = e._start;
  for (n !== null && (s = n.p, t -= n.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t < s.length)
        return s.content.getContent()[t];
      t -= s.length;
    }
}, yi = (e, t, n, s) => {
  let i = n;
  const r = e.doc, o = r.clientID, l = r.store, a = n === null ? t._start : n.right;
  let u = [];
  const c = () => {
    u.length > 0 && (i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new vn(u)), i.integrate(e, 0), u = []);
  };
  s.forEach((d) => {
    if (d === null)
      u.push(d);
    else
      switch (d.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          u.push(d);
          break;
        default:
          switch (c(), d.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new Ns(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(e, 0);
              break;
            case xn:
              i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new Bs(
                /** @type {Doc} */
                d
              )), i.integrate(e, 0);
              break;
            default:
              if (d instanceof yt)
                i = new nt(W(o, mt(l, o)), i, i && i.lastId, a, a && a.id, t, null, new he(d)), i.integrate(e, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), c();
}, Cu = () => tn("Length exceeded!"), Eu = (e, t, n, s) => {
  if (n > t._length)
    throw Cu();
  if (n === 0)
    return t._searchMarker && ks(t._searchMarker, n, s.length), yi(e, t, null, s);
  const i = n, r = Ji(t, n);
  let o = t._start;
  for (r !== null && (o = r.p, n -= r.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && Ht(e, W(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return t._searchMarker && ks(t._searchMarker, i, s.length), yi(e, t, o, s);
}, Km = (e, t, n) => {
  let i = (t._searchMarker || []).reduce((r, o) => o.index > r.index ? o : r, { index: 0, p: t._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return yi(e, t, i, n);
}, Au = (e, t, n, s) => {
  if (s === 0)
    return;
  const i = n, r = s, o = Ji(t, n);
  let l = t._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && Ht(e, W(l.id.client, l.id.clock + n)), n -= l.length);
  for (; s > 0 && l !== null; )
    l.deleted || (s < l.length && Ht(e, W(l.id.client, l.id.clock + s)), l.delete(e), s -= l.length), l = l.right;
  if (s > 0)
    throw Cu();
  t._searchMarker && ks(
    t._searchMarker,
    i,
    -r + s
    /* in case we remove the above exception */
  );
}, xi = (e, t, n) => {
  const s = t._map.get(n);
  s !== void 0 && s.delete(e);
}, Oo = (e, t, n, s) => {
  const i = t._map.get(n) || null, r = e.doc, o = r.clientID;
  let l;
  if (s == null)
    l = new vn([s]);
  else
    switch (s.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        l = new vn([s]);
        break;
      case Uint8Array:
        l = new Ns(
          /** @type {Uint8Array} */
          s
        );
        break;
      case xn:
        l = new Bs(
          /** @type {Doc} */
          s
        );
        break;
      default:
        if (s instanceof yt)
          l = new he(s);
        else
          throw new Error("Unexpected content type");
    }
  new nt(W(o, mt(r.store, o)), i, i && i.lastId, null, null, t, n, l).integrate(e, 0);
}, Io = (e, t) => {
  e.doc ?? Tt();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Tu = (e) => {
  const t = {};
  return e.doc ?? Tt(), e._map.forEach((n, s) => {
    n.deleted || (t[s] = n.content.getContent()[n.length - 1]);
  }), t;
}, Mu = (e, t) => {
  e.doc ?? Tt();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted;
}, qm = (e, t) => {
  const n = {};
  return e._map.forEach((s, i) => {
    let r = s;
    for (; r !== null && (!t.sv.has(r.id.client) || r.id.clock >= (t.sv.get(r.id.client) || 0)); )
      r = r.left;
    r !== null && dn(r, t) && (n[i] = r.content.getContent()[r.length - 1]);
  }), n;
}, zs = (e) => (e.doc ?? Tt(), fm(
  e._map.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
));
class Ym extends Yi {
}
class Rn extends yt {
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
    const n = new Rn();
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
    return new Rn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const t = new Rn();
    return t.insert(0, this.toArray().map(
      (n) => n instanceof yt ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), t;
  }
  get length() {
    return this.doc ?? Tt(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    super._callObserver(t, n), Gi(this, t, new Ym(this, t));
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
      Eu(
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
      Km(
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
      Au(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return Su(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return xu(this);
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
    return yu(this, t, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((t) => t instanceof yt ? t.toJSON() : t);
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
    return _u(
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
    _s(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return Wm(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(v0);
  }
}
const Jm = (e) => new Rn();
class Gm extends Yi {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(t, n, s) {
    super(t, n), this.keysChanged = s;
  }
}
class Fn extends yt {
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
    return new Fn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const t = new Fn();
    return this.forEach((n, s) => {
      t.set(s, n instanceof yt ? (
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
    Gi(this, t, new Gm(this, t, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? Tt();
    const t = {};
    return this._map.forEach((n, s) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        t[s] = i instanceof yt ? i.toJSON() : i;
      }
    }), t;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...zs(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return br(
      zs(this),
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
    return br(
      zs(this),
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
    return br(
      zs(this),
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
    this.doc ?? Tt(), this._map.forEach((n, s) => {
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
      xi(n, this, t);
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
      Oo(
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
      Io(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return Mu(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? it(this.doc, (t) => {
      this.forEach(function(n, s, i) {
        xi(t, i, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(y0);
  }
}
const Xm = (e) => new Fn(), Ye = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Ug(e, t);
class Yr {
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
        this.right.deleted || qn(
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
const da = (e, t, n) => {
  for (; t.right !== null && n > 0; ) {
    switch (t.right.content.constructor) {
      case bt:
        t.right.deleted || qn(
          t.currentAttributes,
          /** @type {ContentFormat} */
          t.right.content
        );
        break;
      default:
        t.right.deleted || (n < t.right.length && Ht(e, W(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
        break;
    }
    t.left = t.right, t.right = t.right.right;
  }
  return t;
}, Ws = (e, t, n, s) => {
  const i = /* @__PURE__ */ new Map(), r = s ? Ji(t, n) : null;
  if (r) {
    const o = new Yr(r.p.left, r.p, r.index, i);
    return da(e, o, n - r.index);
  } else {
    const o = new Yr(null, t._start, 0, i);
    return da(e, o, n);
  }
}, Du = (e, t, n, s) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === bt && Ye(
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
    const a = n.left, u = n.right, c = new nt(W(r, mt(i.store, r)), a, a && a.lastId, u, u && u.id, t, null, new bt(l, o));
    c.integrate(e, 0), n.right = c, n.forward();
  });
}, qn = (e, t) => {
  const { key: n, value: s } = t;
  s === null ? e.delete(n) : e.set(n, s);
}, Ou = (e, t) => {
  for (; e.right !== null; ) {
    if (!(e.right.deleted || e.right.content.constructor === bt && Ye(
      t[
        /** @type {ContentFormat} */
        e.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      e.right.content.value
    ))) break;
    e.forward();
  }
}, Iu = (e, t, n, s) => {
  const i = e.doc, r = i.clientID, o = /* @__PURE__ */ new Map();
  for (const l in s) {
    const a = s[l], u = n.currentAttributes.get(l) ?? null;
    if (!Ye(u, a)) {
      o.set(l, u);
      const { left: c, right: d } = n;
      n.right = new nt(W(r, mt(i.store, r)), c, c && c.lastId, d, d && d.id, t, null, new bt(l, a)), n.right.integrate(e, 0), n.forward();
    }
  }
  return o;
}, xr = (e, t, n, s, i) => {
  n.currentAttributes.forEach((f, h) => {
    i[h] === void 0 && (i[h] = null);
  });
  const r = e.doc, o = r.clientID;
  Ou(n, i);
  const l = Iu(e, t, n, i), a = s.constructor === String ? new fe(
    /** @type {string} */
    s
  ) : s instanceof yt ? new he(s) : new kn(s);
  let { left: u, right: c, index: d } = n;
  t._searchMarker && ks(t._searchMarker, n.index, a.getLength()), c = new nt(W(o, mt(r.store, o)), u, u && u.lastId, c, c && c.id, t, null, a), c.integrate(e, 0), n.right = c, n.index = d, n.forward(), Du(e, t, n, l);
}, fa = (e, t, n, s, i) => {
  const r = e.doc, o = r.clientID;
  Ou(n, i);
  const l = Iu(e, t, n, i);
  t: for (; n.right !== null && (s > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === bt)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case bt: {
          const { key: a, value: u } = (
            /** @type {ContentFormat} */
            n.right.content
          ), c = i[a];
          if (c !== void 0) {
            if (Ye(c, u))
              l.delete(a);
            else {
              if (s === 0)
                break t;
              l.set(a, u);
            }
            n.right.delete(e);
          } else
            n.currentAttributes.set(a, u);
          break;
        }
        default:
          s < n.right.length && Ht(e, W(n.right.id.client, n.right.id.clock + s)), s -= n.right.length;
          break;
      }
    n.forward();
  }
  if (s > 0) {
    let a = "";
    for (; s > 0; s--)
      a += `
`;
    n.right = new nt(W(o, mt(r.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new fe(a)), n.right.integrate(e, 0), n.forward();
  }
  Du(e, t, n, l);
}, Ru = (e, t, n, s, i) => {
  let r = t;
  const o = oe();
  for (; r && (!r.countable || r.deleted); ) {
    if (!r.deleted && r.content.constructor === bt) {
      const u = (
        /** @type {ContentFormat} */
        r.content
      );
      o.set(u.key, u);
    }
    r = r.right;
  }
  let l = 0, a = !1;
  for (; t !== r; ) {
    if (n === t && (a = !0), !t.deleted) {
      const u = t.content;
      switch (u.constructor) {
        case bt: {
          const { key: c, value: d } = (
            /** @type {ContentFormat} */
            u
          ), f = s.get(c) ?? null;
          (o.get(c) !== u || f === d) && (t.delete(e), l++, !a && (i.get(c) ?? null) === d && f !== d && (f === null ? i.delete(c) : i.set(c, f))), !a && !t.deleted && qn(
            i,
            /** @type {ContentFormat} */
            u
          );
          break;
        }
      }
    }
    t = /** @type {Item} */
    t.right;
  }
  return l;
}, Qm = (e, t) => {
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
}, Zm = (e) => {
  let t = 0;
  return it(
    /** @type {Doc} */
    e.doc,
    (n) => {
      let s = (
        /** @type {Item} */
        e._start
      ), i = e._start, r = oe();
      const o = Br(r);
      for (; i; ) {
        if (i.deleted === !1)
          switch (i.content.constructor) {
            case bt:
              qn(
                o,
                /** @type {ContentFormat} */
                i.content
              );
              break;
            default:
              t += Ru(n, s, i, r, o), r = Br(o), s = i;
              break;
          }
        i = i.right;
      }
    }
  ), t;
}, t0 = (e) => {
  const t = /* @__PURE__ */ new Set(), n = e.doc;
  for (const [s, i] of e.afterState.entries()) {
    const r = e.beforeState.get(s) || 0;
    i !== r && pu(
      e,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(s),
      r,
      i,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === bt && o.constructor !== te && t.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  it(n, (s) => {
    en(e, e.deleteSet, (i) => {
      if (i instanceof te || !/** @type {YText} */
      i.parent._hasFormatting || t.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const r = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === bt ? t.add(r) : Qm(s, i);
    });
    for (const i of t)
      Zm(i);
  });
}, ha = (e, t, n) => {
  const s = n, i = Br(t.currentAttributes), r = t.right;
  for (; n > 0 && t.right !== null; ) {
    if (t.right.deleted === !1)
      switch (t.right.content.constructor) {
        case he:
        case kn:
        case fe:
          n < t.right.length && Ht(e, W(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
          break;
      }
    t.forward();
  }
  r && Ru(e, r, t.right, i, t.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return o._searchMarker && ks(o._searchMarker, t.index, -s + n), t;
};
class e0 extends Yi {
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
        let u = "", c = 0, d = 0;
        const f = () => {
          if (l !== null) {
            let h = null;
            switch (l) {
              case "delete":
                d > 0 && (h = { delete: d }), d = 0;
                break;
              case "insert":
                (typeof u == "object" || u.length > 0) && (h = { insert: u }, i.size > 0 && (h.attributes = {}, i.forEach((p, w) => {
                  p !== null && (h.attributes[w] = p);
                }))), u = "";
                break;
              case "retain":
                c > 0 && (h = { retain: c }, Fg(a) || (h.attributes = $g({}, a))), c = 0;
                break;
            }
            h && n.push(h), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case he:
            case kn:
              this.adds(o) ? this.deletes(o) || (f(), l = "insert", u = o.content.getContent()[0], f()) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), d += 1) : o.deleted || (l !== "retain" && (f(), l = "retain"), c += 1);
              break;
            case fe:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (f(), l = "insert"), u += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (l !== "delete" && (f(), l = "delete"), d += o.length) : o.deleted || (l !== "retain" && (f(), l = "retain"), c += o.length);
              break;
            case bt: {
              const { key: h, value: p } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const w = i.get(h) ?? null;
                  Ye(w, p) ? p !== null && o.delete(s) : (l === "retain" && f(), Ye(p, r.get(h) ?? null) ? delete a[h] : a[h] = p);
                }
              } else if (this.deletes(o)) {
                r.set(h, p);
                const w = i.get(h) ?? null;
                Ye(w, p) || (l === "retain" && f(), a[h] = w);
              } else if (!o.deleted) {
                r.set(h, p);
                const w = a[h];
                w !== void 0 && (Ye(w, p) ? w !== null && o.delete(s) : (l === "retain" && f(), p === null ? delete a[h] : a[h] = p));
              }
              o.deleted || (l === "insert" && f(), qn(
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
class nn extends yt {
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
    return this.doc ?? Tt(), this._length;
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
    return new nn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const t = new nn();
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
    const s = new e0(this, t, n);
    Gi(this, t, s), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? Tt();
    let t = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === fe && (t += /** @type {ContentString} */
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
      const i = new Yr(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && r === t.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && xr(s, this, i, l, o.attributes || {});
        } else o.retain !== void 0 ? fa(s, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && ha(s, i, o.delete);
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
    this.doc ?? Tt();
    const i = [], r = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", a = this._start;
    function u() {
      if (l.length > 0) {
        const d = {};
        let f = !1;
        r.forEach((p, w) => {
          f = !0, d[w] = p;
        });
        const h = { insert: l };
        f && (h.attributes = d), i.push(h), l = "";
      }
    }
    const c = () => {
      for (; a !== null; ) {
        if (dn(a, t) || n !== void 0 && dn(a, n))
          switch (a.content.constructor) {
            case fe: {
              const d = r.get("ychange");
              t !== void 0 && !dn(a, t) ? (d === void 0 || d.user !== a.id.client || d.type !== "removed") && (u(), r.set("ychange", s ? s("removed", a.id) : { type: "removed" })) : n !== void 0 && !dn(a, n) ? (d === void 0 || d.user !== a.id.client || d.type !== "added") && (u(), r.set("ychange", s ? s("added", a.id) : { type: "added" })) : d !== void 0 && (u(), r.delete("ychange")), l += /** @type {ContentString} */
              a.content.str;
              break;
            }
            case he:
            case kn: {
              u();
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
              dn(a, t) && (u(), qn(
                r,
                /** @type {ContentFormat} */
                a.content
              ));
              break;
          }
        a = a.right;
      }
      u();
    };
    return t || n ? it(o, (d) => {
      t && Kr(d, t), n && Kr(d, n), c();
    }, "cleanup") : c(), i;
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
      const o = Ws(r, this, t, !s);
      s || (s = {}, o.currentAttributes.forEach((l, a) => {
        s[a] = l;
      })), xr(r, this, o, n, s);
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
      const o = Ws(r, this, t, !s);
      xr(r, this, o, n, s || {});
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
      ha(i, Ws(i, this, t, !0), n);
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
      const o = Ws(r, this, t, !1);
      o.right !== null && fa(r, this, o, n, s);
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
      xi(n, this, t);
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
      Oo(s, this, t, n);
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
      Io(this, t)
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
    return Tu(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(x0);
  }
}
const n0 = (e) => new nn();
class kr {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(t, n = () => !0) {
    this._filter = n, this._root = t, this._currentNode = /** @type {Item} */
    t._start, this._firstCall = !0, t.doc ?? Tt();
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
        t.content.type, !t.deleted && (n.constructor === Et || n.constructor === bn) && n._start !== null)
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
class bn extends yt {
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
    return new bn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const t = new bn();
    return t.insert(0, this.toArray().map((n) => n instanceof yt ? n.clone() : n)), t;
  }
  get length() {
    return this.doc ?? Tt(), this._prelimContent === null ? this._length : this._prelimContent.length;
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
    return new kr(this, t);
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
    const s = new kr(this, (i) => i.nodeName && i.nodeName.toUpperCase() === t).next();
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
    return t = t.toUpperCase(), wn(new kr(this, (n) => n.nodeName && n.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    Gi(this, t, new r0(this, n, t));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return _u(this, (t) => t.toString()).join("");
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
    return s !== void 0 && s._createAssociation(i, this), _s(this, (r) => {
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
      Eu(s, this, t, n);
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
        const i = t && t instanceof yt ? t._item : t;
        yi(s, this, i, n);
      });
    else {
      const s = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = t === null ? 0 : s.findIndex((r) => r === t) + 1;
      if (i === 0 && t !== null)
        throw tn("Reference item not found");
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
      Au(s, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return xu(this);
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
    return Su(this, t);
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
    return yu(this, t, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    _s(this, t);
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
    t.writeTypeRef(_0);
  }
}
const s0 = (e) => new bn();
class Et extends bn {
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
    return Hg(n, (s, i) => {
      typeof s == "string" && t.setAttribute(i, s);
    }), t.insert(0, this.toArray().map((s) => s instanceof yt ? s.clone() : s)), t;
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
      xi(n, this, t);
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
      Oo(s, this, t, n);
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
      Io(this, t)
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
      Mu(this, t)
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
      t ? qm(this, t) : Tu(this)
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
    return _s(this, (o) => {
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
    t.writeTypeRef(k0), t.writeKey(this.nodeName);
  }
}
const i0 = (e) => new Et(e.readKey());
class r0 extends Yi {
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
class ki extends Fn {
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
    return new ki(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const t = new ki(this.hookName);
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
    t.writeTypeRef(S0), t.writeKey(this.hookName);
  }
}
const o0 = (e) => new ki(e.readKey());
class Vt extends nn {
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
    return new Vt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const t = new Vt();
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
    t.writeTypeRef(C0);
  }
}
const l0 = (e) => new Vt();
class Ro {
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
    throw le();
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
    throw le();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    throw le();
  }
}
const a0 = 0;
class te extends Ro {
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
    n > 0 && (this.id.clock += n, this.length -= n), hu(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(a0), t.writeLen(this.length - n);
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
class Ns {
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
    return new Ns(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(t) {
    throw le();
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
const c0 = (e) => new Ns(e.readBuf());
class Ss {
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
    return new Ss(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const n = new Ss(this.len - t);
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
    vs(t.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const u0 = (e) => new Ss(e.readLen()), Lu = (e, t) => new xn({ guid: e, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
class Bs {
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
    return new Bs(Lu(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(t) {
    throw le();
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
const d0 = (e) => new Bs(Lu(e.readString(), e.readAny()));
class kn {
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
    return new kn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(t) {
    throw le();
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
const f0 = (e) => new kn(e.readJSON());
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
    throw le();
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
const h0 = (e) => new bt(e.readKey(), e.readJSON());
class _i {
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
    return new _i(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const n = new _i(this.arr.slice(t));
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
const p0 = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++) {
    const i = e.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new _i(n);
}, g0 = wi("node_env") === "development";
class vn {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t, g0 && Gc(t);
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
    return new vn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(t) {
    const n = new vn(this.arr.slice(t));
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
const m0 = (e) => {
  const t = e.readLen(), n = [];
  for (let s = 0; s < t; s++)
    n.push(e.readAny());
  return new vn(n);
};
class fe {
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
    return new fe(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(t) {
    const n = new fe(this.str.slice(t));
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
const w0 = (e) => new fe(e.readString()), b0 = [
  Jm,
  Xm,
  n0,
  i0,
  s0,
  o0,
  l0
], v0 = 0, y0 = 1, x0 = 2, k0 = 3, _0 = 4, S0 = 5, C0 = 6;
class he {
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
    return new he(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(t) {
    throw le();
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
const E0 = (e) => new he(b0[e.readTypeRef()](e)), Jr = (e, t) => {
  let n = t, s = 0, i;
  do
    s > 0 && (n = W(n.client, n.clock + s)), i = In(e, n), s = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof nt);
  return {
    item: i,
    diff: s
  };
}, Lo = (e, t) => {
  for (; e !== null && e.keep !== t; )
    e.keep = t, e = /** @type {AbstractType<any>} */
    e.parent._item;
}, Si = (e, t, n) => {
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
}, pa = (e, t) => Xp(
  e,
  /** @param {StackItem} s */
  (n) => Kn(n.deletions, t)
), Pu = (e, t, n, s, i, r) => {
  const o = e.doc, l = o.store, a = o.clientID, u = t.redone;
  if (u !== null)
    return Ht(e, u);
  let c = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), d = null, f;
  if (c !== null && c.deleted === !0) {
    if (c.redone === null && (!n.has(c) || Pu(e, c, n, s, i, r) === null))
      return null;
    for (; c.redone !== null; )
      c = Ht(e, c.redone);
  }
  const h = c === null ? (
    /** @type {AbstractType<any>} */
    t.parent
  ) : (
    /** @type {ContentType} */
    c.content.type
  );
  if (t.parentSub === null) {
    for (d = t.left, f = t; d !== null; ) {
      let b = d;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== c; )
        b = b.redone === null ? null : Ht(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === c) {
        d = b;
        break;
      }
      d = d.left;
    }
    for (; f !== null; ) {
      let b = f;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== c; )
        b = b.redone === null ? null : Ht(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === c) {
        f = b;
        break;
      }
      f = f.right;
    }
  } else if (f = null, t.right && !i) {
    for (d = t; d !== null && d.right !== null && (d.right.redone || Kn(s, d.right.id) || pa(r.undoStack, d.right.id) || pa(r.redoStack, d.right.id)); )
      for (d = d.right; d.redone; ) d = Ht(e, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = h._map.get(t.parentSub) || null;
  const p = mt(l, a), w = W(a, p), y = new nt(
    w,
    d,
    d && d.lastId,
    f,
    f && f.id,
    h,
    t.parentSub,
    t.content.copy()
  );
  return t.redone = w, Lo(y, !0), y.integrate(e, 0), y;
};
class nt extends Ro {
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
    super(t, a.getLength()), this.origin = s, this.left = n, this.right = i, this.rightOrigin = r, this.parent = o, this.parentSub = l, this.redone = null, this.content = a, this.info = this.content.isCountable() ? zl : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & gr) > 0 !== t && (this.info ^= gr);
  }
  get marker() {
    return (this.info & gr) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & jl) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= jl);
  }
  get countable() {
    return (this.info & zl) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & pr) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= pr);
  }
  markDeleted() {
    this.info |= pr;
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
    if (this.parent && this.parent.constructor === On && this.id.client !== this.parent.client && this.parent.clock >= mt(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = ia(t, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Ht(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === te || this.right && this.right.constructor === te)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === nt ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === nt && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === On) {
      const s = In(n, this.parent);
      s.constructor === te ? this.parent = null : this.parent = /** @type {ContentType} */
      s.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    if (n > 0 && (this.id.clock += n, this.left = ia(t, t.doc.store, W(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
          if (o.add(i), r.add(i), Us(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              s = i, r.clear();
            else if (Us(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(In(t.doc.store, i.origin)))
            r.has(In(t.doc.store, i.origin)) || (s = i, r.clear());
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), hu(t.doc.store, this), this.content.integrate(t, this), oa(
        t,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(t);
    } else
      new te(this.id, this.length).integrate(t, 0);
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
    if (this.constructor === t.constructor && Us(t.origin, this.lastId) && this.right === t && Us(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), vs(t.deleteSet, this.id.client, this.id.clock, this.length), oa(t, n, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, n) {
    if (!this.deleted)
      throw Ut();
    this.content.gc(t), n ? Om(t, this, new te(this.id, this.length)) : this.content = new Ss(this.length);
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
    const s = n > 0 ? W(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, r = this.parentSub, o = this.content.getRef() & ji | (s === null ? 0 : Pt) | // origin is defined
    (i === null ? 0 : Re) | // right origin is defined
    (r === null ? 0 : ms);
    if (t.writeInfo(o), s !== null && t.writeLeftID(s), i !== null && t.writeRightID(i), s === null && i === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const a = l._item;
        if (a === null) {
          const u = ys(l);
          t.writeParentInfo(!0), t.writeString(u);
        } else
          t.writeParentInfo(!1), t.writeLeftID(a.id);
      } else l.constructor === String ? (t.writeParentInfo(!0), t.writeString(l)) : l.constructor === On ? (t.writeParentInfo(!1), t.writeLeftID(l)) : Ut();
      r !== null && t.writeString(r);
    }
    this.content.write(t, n);
  }
}
const Nu = (e, t) => A0[t & ji](e), A0 = [
  () => {
    Ut();
  },
  // GC is not ItemContent
  u0,
  // 1
  p0,
  // 2
  c0,
  // 3
  w0,
  // 4
  f0,
  // 5
  h0,
  // 6
  E0,
  // 7
  m0,
  // 8
  d0,
  // 9
  () => {
    Ut();
  }
  // 10 - Skip is not ItemContent
], T0 = 10;
class se extends Ro {
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
    t.writeInfo(T0), Q(t.restEncoder, this.length - n);
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
const Bu = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), $u = "__ $YJS$ __";
Bu[$u] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Bu[$u] = !0;
const M0 = () => {
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
}, D0 = /[\uD800-\uDBFF]/, O0 = /[\uDC00-\uDFFF]/, I0 = (e, t) => {
  let n = 0, s = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    n++;
  for (n > 0 && D0.test(e[n - 1]) && n--; s + n < e.length && s + n < t.length && e[e.length - s - 1] === t[t.length - s - 1]; )
    s++;
  return s > 0 && O0.test(e[e.length - s]) && s--, {
    index: n,
    remove: e.length - n - s,
    insert: t.slice(n, t.length - s)
  };
}, R0 = I0, Se = (e, t) => e >>> t | e << 32 - t, L0 = (e) => Se(e, 2) ^ Se(e, 13) ^ Se(e, 22), P0 = (e) => Se(e, 6) ^ Se(e, 11) ^ Se(e, 25), N0 = (e) => Se(e, 7) ^ Se(e, 18) ^ e >>> 3, B0 = (e) => Se(e, 17) ^ Se(e, 19) ^ e >>> 10, $0 = new Uint32Array([
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
]), H0 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class F0 {
  constructor() {
    const t = new ArrayBuffer(320);
    this._H = new Uint32Array(t, 0, 8), this._H.set(H0), this._W = new Uint32Array(t, 64, 64);
  }
  _updateHash() {
    const t = this._H, n = this._W;
    for (let d = 16; d < 64; d++)
      n[d] = B0(n[d - 2]) + n[d - 7] + N0(n[d - 15]) + n[d - 16];
    let s = t[0], i = t[1], r = t[2], o = t[3], l = t[4], a = t[5], u = t[6], c = t[7];
    for (let d = 0, f, h; d < 64; d++)
      f = c + P0(l) + (l & a ^ ~l & u) + $0[d] + n[d] >>> 0, h = L0(s) + (s & i ^ s & r ^ i & r) >>> 0, c = u, u = a, a = l, l = o + f >>> 0, o = r, r = i, i = s, s = f + h >>> 0;
    t[0] += s, t[1] += i, t[2] += r, t[3] += o, t[4] += l, t[5] += a, t[6] += u, t[7] += c;
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
    s || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= Pt << (3 - n % 4) * 8), this._W[14] = t.byteLength / Qp, this._W[15] = t.byteLength * 8, this._updateHash();
    const r = new Uint8Array(32);
    for (let o = 0; o < this._H.length; o++)
      for (let l = 0; l < 4; l++)
        r[o * 4 + l] = this._H[o] >>> (3 - l) * 8;
    return r;
  }
}
const V0 = (e) => new F0().digest(e), ct = new Be("y-sync"), Le = new Be("y-undo");
new Be("yjs-cursor");
const U0 = (e) => {
  for (let n = 6; n < e.length; n++)
    e[n % 6] = e[n % 6] ^ e[n];
  return e.slice(0, 6);
}, j0 = (e) => Gg(U0(V0(Xg(e)))), Ci = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && /** @type {number} */
t.sv.get(e.id.client) > e.id.clock && !Kn(t.ds, e.id), z0 = [{ light: "#ecd44433", dark: "#ecd444" }], W0 = (e, t, n) => {
  if (!e.has(n)) {
    if (e.size < t.length) {
      const s = mn();
      e.forEach((i) => s.add(i)), t = t.filter((i) => !s.has(i));
    }
    e.set(n, Og(t));
  }
  return (
    /** @type {ColorDef} */
    e.get(n)
  );
}, K0 = (e, {
  colors: t = z0,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: s = null,
  onFirstRender: i = () => {
  },
  mapping: r
} = {}) => {
  let o = !1;
  const l = new J0(e, r), a = new yn({
    props: {
      editable: (u) => {
        const c = ct.getState(u);
        return c.snapshot == null && c.prevSnapshot == null;
      }
    },
    key: ct,
    state: {
      /**
       * @returns {any}
       */
      init: (u, c) => ({
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
      apply: (u, c) => {
        const d = u.getMeta(ct);
        if (d !== void 0) {
          c = Object.assign({}, c);
          for (const f in d)
            c[f] = d[f];
        }
        return c.addToHistory = u.getMeta("addToHistory") !== !1, c.isChangeOrigin = d !== void 0 && !!d.isChangeOrigin, c.isUndoRedoOperation = d !== void 0 && !!d.isChangeOrigin && !!d.isUndoRedoOperation, l.prosemirrorView !== null && d !== void 0 && (d.snapshot != null || d.prevSnapshot != null) && Zc(0, () => {
          l.prosemirrorView != null && (d.restore == null ? l._renderSnapshot(
            d.snapshot,
            d.prevSnapshot,
            c
          ) : (l._renderSnapshot(
            d.snapshot,
            d.snapshot,
            c
          ), delete c.restore, delete c.snapshot, delete c.prevSnapshot, l.mux(() => {
            l._prosemirrorChanged(
              l.prosemirrorView.state.doc
            );
          })));
        }), c;
      }
    },
    view: (u) => (l.initView(u), r == null && l._forceRerender(), i(), {
      update: () => {
        const c = a.getState(u.state);
        if (c.snapshot == null && c.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (o || u.state.doc.content.findDiffStart(
          u.state.doc.type.createAndFill().content
        ) !== null)) {
          if (o = !0, c.addToHistory === !1 && !c.isChangeOrigin) {
            const d = Le.getState(u.state), f = d && d.undoManager;
            f && f.stopCapturing();
          }
          l.mux(() => {
            c.doc.transact((d) => {
              d.meta.set("addToHistory", c.addToHistory), l._prosemirrorChanged(u.state.doc);
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
}, q0 = (e, t, n) => {
  if (t !== null && t.anchor !== null && t.head !== null)
    if (t.type === "all")
      e.setSelection(new Td(e.doc));
    else if (t.type === "node") {
      const s = as(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      );
      e.setSelection(Y0(e, s));
    } else {
      const s = as(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      ), i = as(
        n.doc,
        n.type,
        t.head,
        n.mapping
      );
      s !== null && i !== null && e.setSelection(Xe.between(e.doc.resolve(s), e.doc.resolve(i)));
    }
}, Y0 = (e, t) => {
  const n = e.doc.resolve(t);
  return n.nodeAfter ? ro.create(e.doc, t) : Xe.near(n);
}, Gr = (e, t) => ({
  type: (
    /** @type {any} */
    t.selection.jsonID
  ),
  anchor: Ai(
    t.selection.anchor,
    e.type,
    e.mapping
  ),
  head: Ai(
    t.selection.head,
    e.type,
    e.mapping
  )
});
class J0 {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(t, n = /* @__PURE__ */ new Map()) {
    this.type = t, this.prosemirrorView = null, this.mux = M0(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = t.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Gr(
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
    return this.prosemirrorView.hasFocus() ? (Xc && this._domSelectionInView === null && (Zc(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const t = this.prosemirrorView._root.getSelection();
    if (t == null || t.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), r = Zg.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || r.clientWidth || 0) && i.top <= (window.innerHeight || r.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(t, n) {
    n || (n = du(lu(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(ct, { snapshot: t, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const t = this.type.toArray().map(
        (s) => ni(
          /** @type {Y.XmlElement} */
          s,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((s) => s !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Hs(Fs.from(t), 0, 0)
      );
      n.setMeta(ct, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const t = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => ni(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Hs(Fs.from(n), 0, 0)
      );
      if (t) {
        const i = Bn(Ze(t.anchor, 0), s.doc.content.size), r = Bn(Ze(t.head, 0), s.doc.content.size);
        s.setSelection(Xe.create(s.doc, i, r));
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
    if (t || (t = yr(this.doc)), t instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) && Ut(), i = new xn({ gc: !1 }), Wr(i, n), n = yr(i), Wr(i, t), t = yr(i), r._item === null) {
        const o = Array.from(this.doc.share.keys()).find(
          (l) => this.doc.share.get(l) === this.type
        );
        r = i.getXmlFragment(o);
      } else {
        const o = i.store.clients.get(r._item.id.client) ?? [], l = de(
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
          en(o, d, (f) => {
          });
        });
        const a = (d, f) => {
          const h = d === "added" ? l.getUserByClientId(f.client) : l.getUserByDeletedId(f);
          return {
            user: h,
            type: d,
            color: W0(
              s.colorMapping,
              s.colors,
              h
            )
          };
        }, u = ku(
          r,
          new Mo(n.ds, t.sv)
        ).map((d) => !d._item.deleted || Ci(d._item, t) || Ci(d._item, n) ? ni(
          d,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          t,
          n,
          a
        ) : null).filter((d) => d !== null), c = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Hs(Fs.from(u), 0, 0)
        );
        this.prosemirrorView.dispatch(
          c.setMeta(ct, { isChangeOrigin: !0 })
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
      en(
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
        (l) => Hu(
          /** @type {Y.XmlElement | Y.XmlHook} */
          l,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((l) => l !== null);
      let o = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Hs(Fs.from(r), 0, 0)
      );
      q0(o, this.beforeTransactionSelection, this), o = o.setMeta(ct, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof mu }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && o.scrollIntoView(), this.prosemirrorView.dispatch(o);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(t) {
    this.doc.transact(() => {
      Qr(this.doc, this.type, t, this), this.beforeTransactionSelection = Gr(
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
const Hu = (e, t, n, s, i, r) => {
  const o = (
    /** @type {PModel.Node} */
    n.mapping.get(e)
  );
  if (o === void 0) {
    if (e instanceof Et)
      return ni(
        e,
        t,
        n,
        s,
        i,
        r
      );
    throw le();
  }
  return o;
}, ni = (e, t, n, s, i, r) => {
  const o = [], l = (a) => {
    if (a instanceof Et) {
      const u = Hu(
        a,
        t,
        n,
        s,
        i,
        r
      );
      u !== null && o.push(u);
    } else {
      const u = (
        /** @type {Y.ContentType} */
        a._item.right?.content?.type
      );
      u instanceof nn && !u._item.deleted && u._item.id.client === u.doc.clientID && (a.applyDelta([
        { retain: a.length },
        ...u.toDelta()
      ]), u.doc.transact((d) => {
        u._item.delete(d);
      }));
      const c = G0(
        a,
        t,
        n,
        s,
        i,
        r
      );
      c !== null && c.forEach((d) => {
        d !== null && o.push(d);
      });
    }
  };
  s === void 0 || i === void 0 ? e.toArray().forEach(l) : ku(e, new Mo(i.ds, s.sv)).forEach(l);
  try {
    const a = e.getAttributes(s);
    s !== void 0 && (Ci(
      /** @type {Y.Item} */
      e._item,
      s
    ) ? Ci(
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
    const u = t.node(e.nodeName, a, o);
    return n.mapping.set(e, u), u;
  } catch {
    return e.doc.transact((u) => {
      e._item.delete(u);
    }, ct), n.mapping.delete(e), null;
  }
}, G0 = (e, t, n, s, i, r) => {
  const o = [], l = e.toDelta(s, i, r);
  try {
    for (let a = 0; a < l.length; a++) {
      const u = l[a];
      o.push(t.text(u.insert, nw(u.attributes, t)));
    }
  } catch {
    return e.doc.transact((u) => {
      e._item.delete(u);
    }, ct), null;
  }
  return o;
}, X0 = (e, t) => {
  const n = new Vt(), s = e.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: Vu(i.marks, t)
  }));
  return n.applyDelta(s), t.mapping.set(n, e), n;
}, Q0 = (e, t) => {
  const n = new Et(e.type.name);
  for (const s in e.attrs) {
    const i = e.attrs[s];
    i !== null && s !== "ychange" && n.setAttribute(s, i);
  }
  return n.insert(
    0,
    Xi(e).map(
      (s) => Xr(s, t)
    )
  ), t.mapping.set(n, e), n;
}, Xr = (e, t) => e instanceof Array ? X0(e, t) : Q0(e, t), ga = (e) => typeof e == "object" && e !== null, Po = (e, t) => {
  const n = Object.keys(e).filter((i) => e[i] !== null);
  let s = n.length === Object.keys(t).filter((i) => t[i] !== null).length;
  for (let i = 0; i < n.length && s; i++) {
    const r = n[i], o = e[r], l = t[r];
    s = r === "ychange" || o === l || ga(o) && ga(l) && Po(o, l);
  }
  return s;
}, Xi = (e) => {
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
}, Fu = (e, t) => {
  const n = e.toDelta();
  return n.length === t.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (s, i) => s.insert === /** @type {any} */
    t[i].text && Yc(s.attributes || {}).length === t[i].marks.length && Jc(s.attributes, (r, o) => {
      const l = No(o), a = t[i].marks;
      return a.find(
        /** @param {any} mark */
        (c) => c.type.name === l
      ) ? Po(r, a.find(
        /** @param {any} mark */
        (c) => c.type.name === l
      )?.attrs) : !1;
    })
  );
}, Cs = (e, t) => {
  if (e instanceof Et && !(t instanceof Array) && Zr(e, t)) {
    const n = Xi(t);
    return e._length === n.length && Po(e.getAttributes(), t.attrs) && e.toArray().every(
      (s, i) => Cs(s, n[i])
    );
  }
  return e instanceof Vt && t instanceof Array && Fu(e, t);
}, Ei = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every(
  (n, s) => t[s] === n
), ma = (e, t, n) => {
  const s = e.toArray(), i = Xi(t), r = i.length, o = s.length, l = Bn(o, r);
  let a = 0, u = 0, c = !1;
  for (; a < l; a++) {
    const d = s[a], f = i[a];
    if (Ei(n.mapping.get(d), f))
      c = !0;
    else if (!Cs(d, f))
      break;
  }
  for (; a + u < l; u++) {
    const d = s[o - u - 1], f = i[r - u - 1];
    if (Ei(n.mapping.get(d), f))
      c = !0;
    else if (!Cs(d, f))
      break;
  }
  return {
    equalityFactor: a + u,
    foundMappedChild: c
  };
}, Z0 = (e) => {
  let t = "", n = e._start;
  const s = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof fe ? t += n.content.str : n.content instanceof bt && (s[n.content.key] = null)), n = n.right;
  return {
    str: t,
    nAttrs: s
  };
}, tw = (e, t, n) => {
  n.mapping.set(e, t);
  const { nAttrs: s, str: i } = Z0(e), r = t.map((u) => ({
    insert: (
      /** @type {any} */
      u.text
    ),
    attributes: Object.assign({}, s, Vu(u.marks, n))
  })), { insert: o, remove: l, index: a } = R0(
    i,
    r.map((u) => u.insert).join("")
  );
  e.delete(a, l), e.insert(a, o), e.applyDelta(
    r.map((u) => ({ retain: u.insert.length, attributes: u.attributes }))
  );
}, ew = /(.*)(--[a-zA-Z0-9+/=]{8})$/, No = (e) => ew.exec(e)?.[1] ?? e, nw = (e, t) => {
  const n = [];
  for (const s in e)
    n.push(t.mark(No(s), e[s]));
  return n;
}, Vu = (e, t) => {
  const n = {};
  return e.forEach((s) => {
    if (s.type.name !== "ychange") {
      const i = Ve(t.isOMark, s.type, () => !s.type.excludes(s.type));
      n[i ? `${s.type.name}--${j0(s.toJSON())}` : s.type.name] = s.attrs;
    }
  }), n;
}, Qr = (e, t, n, s) => {
  if (t instanceof Et && t.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (s.mapping.set(t, n), t instanceof Et) {
    const d = t.getAttributes(), f = n.attrs;
    for (const h in f)
      f[h] !== null ? d[h] !== f[h] && h !== "ychange" && t.setAttribute(h, f[h]) : t.removeAttribute(h);
    for (const h in d)
      f[h] === void 0 && t.removeAttribute(h);
  }
  const i = Xi(n), r = i.length, o = t.toArray(), l = o.length, a = Bn(r, l);
  let u = 0, c = 0;
  for (; u < a; u++) {
    const d = o[u], f = i[u];
    if (!Ei(s.mapping.get(d), f))
      if (Cs(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  for (; c + u + 1 < a; c++) {
    const d = o[l - c - 1], f = i[r - c - 1];
    if (!Ei(s.mapping.get(d), f))
      if (Cs(d, f))
        s.mapping.set(d, f);
      else
        break;
  }
  e.transact(() => {
    for (; l - u - c > 0 && r - u - c > 0; ) {
      const f = o[u], h = i[u], p = o[l - c - 1], w = i[r - c - 1];
      if (f instanceof Vt && h instanceof Array)
        Fu(f, h) || tw(f, h, s), u += 1;
      else {
        let y = f instanceof Et && Zr(f, h), b = p instanceof Et && Zr(p, w);
        if (y && b) {
          const O = ma(
            /** @type {Y.XmlElement} */
            f,
            /** @type {PModel.Node} */
            h,
            s
          ), N = ma(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            w,
            s
          );
          O.foundMappedChild && !N.foundMappedChild ? b = !1 : !O.foundMappedChild && N.foundMappedChild || O.equalityFactor < N.equalityFactor ? y = !1 : b = !1;
        }
        y ? (Qr(
          e,
          /** @type {Y.XmlFragment} */
          f,
          /** @type {PModel.Node} */
          h,
          s
        ), u += 1) : b ? (Qr(
          e,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          w,
          s
        ), c += 1) : (s.mapping.delete(t.get(u)), t.delete(u, 1), t.insert(u, [
          Xr(h, s)
        ]), u += 1);
      }
    }
    const d = l - u - c;
    if (l === 1 && r === 0 && o[0] instanceof Vt ? (s.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : d > 0 && (t.slice(u, u + d).forEach((f) => s.mapping.delete(f)), t.delete(u, d)), u + c < r) {
      const f = [];
      for (let h = u; h < r - c; h++)
        f.push(Xr(i[h], s));
      t.insert(u, f);
    }
  }, ct);
}, Zr = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Ai = (e, t, n) => {
  if (e === 0)
    return vr(t, 0, -1);
  let s = t._first === null ? null : (
    /** @type {Y.ContentType} */
    t._first.content.type
  );
  for (; s !== null && t !== s; ) {
    if (s instanceof Vt) {
      if (s._length >= e)
        return vr(s, e, -1);
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
          return new vi(s._item === null ? null : s._item.id, s._item === null ? ys(s) : null, null);
        if (e -= i, s._item !== null && s._item.next !== null)
          s = /** @type {Y.ContentType} */
          s._item.next.content.type;
        else {
          if (e === 0)
            return s = s._item === null ? s : s._item.parent, new vi(s._item === null ? null : s._item.id, s._item === null ? ys(s) : null, null);
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
    if (e === 0 && s.constructor !== Vt && s !== t)
      return sw(s._item.parent, s._item);
  }
  return vr(t, t._length, -1);
}, sw = (e, t) => {
  let n = null, s = null;
  return e._item === null ? s = ys(e) : n = W(e._item.id.client, e._item.id.clock), new vi(n, s, t.id);
}, as = (e, t, n, s) => {
  const i = Mm(n, e);
  if (i === null || i.type !== t && !xs(t, i.type._item))
    return null;
  let r = i.type, o = 0;
  if (r.constructor === Vt)
    o = i.index;
  else if (r._item === null || !r._item.deleted) {
    let l = r._first, a = 0;
    for (; a < r._length && a < i.index && l !== null; ) {
      if (!l.deleted) {
        const u = (
          /** @type {Y.ContentType} */
          l.content.type
        );
        a++, u instanceof Vt ? o += u._length : o += /** @type {any} */
        s.get(u).nodeSize;
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
        const u = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        if (u === r)
          break;
        a.deleted || (u instanceof Vt ? o += u._length : o += /** @type {any} */
        s.get(u).nodeSize), a = a.right;
      }
    }
    r = /** @type {Y.AbstractType} */
    l;
  }
  return o - 1;
};
function iw(e) {
  const t = e.toArray(), n = (s) => {
    let i;
    if (s instanceof Vt)
      i = s.toDelta().map(
        /** @param {any} d */
        (o) => {
          const l = {
            type: "text",
            text: o.insert
          };
          return o.attributes && (l.marks = Object.keys(o.attributes).map((a) => {
            const u = o.attributes[a], d = {
              type: No(a)
            };
            return Object.keys(u) && (d.attrs = u), d;
          })), l;
        }
      );
    else if (s instanceof Et) {
      i = {
        type: s.nodeName
      };
      const r = s.getAttributes();
      Object.keys(r).length && (i.attrs = r);
      const o = s.toArray();
      o.length && (i.content = o.map(n).flat());
    } else
      Ut();
    return i;
  };
  return {
    type: "doc",
    content: t.map(n)
  };
}
const rw = (e) => {
  const t = Le.getState(e).undoManager;
  if (t != null)
    return t.undo(), !0;
}, ow = (e) => {
  const t = Le.getState(e).undoManager;
  if (t != null)
    return t.redo(), !0;
}, lw = /* @__PURE__ */ new Set(["paragraph"]), aw = (e, t) => !(e instanceof nt) || !(e.content instanceof he) || !(e.content.type instanceof nn || e.content.type instanceof Et && t.has(e.content.type.nodeName)) || e.content.type._length === 0, cw = ({ protectedNodes: e = lw, trackedOrigins: t = [], undoManager: n = null } = {}) => new yn({
  key: Le,
  state: {
    init: (s, i) => {
      const r = ct.getState(i), o = n || new mu(r.type, {
        trackedOrigins: new Set([ct].concat(t)),
        deleteFilter: (l) => aw(l, e),
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
      const l = ct.getState(o).binding, a = i.undoManager, u = a.undoStack.length > 0, c = a.redoStack.length > 0;
      return l ? {
        undoManager: a,
        prevSel: Gr(l, r),
        hasUndoOps: u,
        hasRedoOps: c
      } : u !== i.hasUndoOps || c !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: a.undoStack.length > 0,
        hasRedoOps: a.redoStack.length > 0
      }) : i;
    }
  },
  view: (s) => {
    const i = ct.getState(s.state), r = Le.getState(s.state).undoManager;
    return r.on("stack-item-added", ({ stackItem: o }) => {
      const l = i.binding;
      l && o.meta.set(l, Le.getState(s.state).prevSel);
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
function Uu(e) {
  return !!e.getMeta(ct);
}
function uw(e, t) {
  const n = ct.getState(e);
  return as(n.doc, n.type, t, n.binding.mapping) || 0;
}
function ju(e, t) {
  const n = ct.getState(e);
  return Ai(t, n.type, n.binding.mapping);
}
var si = class zu extends Dd {
  constructor(t, n) {
    super(t), this.yRelativePosition = n;
  }
  /**
   * Creates a CollaborationMappablePosition from a JSON object.
   */
  static fromJSON(t) {
    return new zu(t.position, t.yRelativePosition);
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
function dw(e, t) {
  const n = ju(t, e);
  return new si(e, n);
}
function fw(e, t, n) {
  const s = e instanceof si ? e.yRelativePosition : null;
  if (Uu(t) && s) {
    const o = uw(n, s);
    return {
      position: new si(o, s),
      mapResult: null
    };
  }
  const i = Md(e, t), r = i.position.position;
  return {
    position: new si(
      r,
      s ?? ju(n, r)
    ),
    mapResult: i.mapResult
  };
}
As.create({
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
    this.editor.utils.getUpdatedPosition = (e, t) => fw(e, t, this.editor.state), this.editor.utils.createMappablePosition = (e) => dw(e, this.editor.state);
  },
  addCommands() {
    return {
      undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Le.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? rw(t) : !0),
      redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), Le.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? ow(t) : !0)
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
    const t = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = cw(this.options.yUndoOptions), s = n.spec.view;
    n.spec.view = (o) => {
      const { undoManager: l } = Le.getState(o.state);
      l.restore && (l.restore(), l.restore = () => {
      });
      const a = s ? s(o) : void 0;
      return {
        destroy: () => {
          const u = l.trackedOrigins.has(l), c = l._observers;
          l.restore = () => {
            u && l.trackedOrigins.add(l), l.doc.on("afterTransaction", l.afterTransactionHandler), l._observers = c;
          }, a?.destroy && a.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    }, r = K0(t, i);
    return this.editor.options.enableContentCheck && ((e = t.doc) == null || e.on("beforeTransaction", () => {
      try {
        const o = iw(t);
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
      this.editor.options.enableContentCheck && new yn({
        key: new Be("filterInvalidContent"),
        filterTransaction: () => {
          var o;
          return this.storage.isDisabled !== !1 && ((o = t.doc) == null || o.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function wa(e) {
  if (!e.length)
    return Xo.empty;
  const t = [], n = e[0].$from.node(0);
  return e.forEach((s) => {
    const i = s.$from.pos, r = s.$from.nodeAfter;
    r && t.push(
      Od.node(i, i + r.nodeSize, {
        class: "ProseMirror-selectednoderange"
      })
    );
  }), Xo.create(n, t);
}
function Qi(e, t, n) {
  const s = [], i = e.node(0);
  typeof n == "number" && n >= 0 || (e.sameParent(t) ? n = Math.max(0, e.sharedDepth(t.pos) - 1) : n = e.sharedDepth(t.pos));
  const r = new Id(e, t, n), o = r.depth === 0 ? 0 : i.resolve(r.start).posAtIndex(0);
  return r.parent.forEach((l, a) => {
    const u = o + a, c = u + l.nodeSize;
    if (u < r.start || u >= r.end)
      return;
    const d = new Rd(i.resolve(u), i.resolve(c));
    s.push(d);
  }), s;
}
var hw = class Wu {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new Wu(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), s = t.resolve(this.head);
    return new Je(n, s);
  }
}, Je = class ze extends Ha {
  constructor(t, n, s, i = 1) {
    const { doc: r } = t, o = t === n, l = t.pos === r.content.size && n.pos === r.content.size, a = o && !l ? r.resolve(n.pos + (i > 0 ? 1 : -1)) : n, u = o && l ? r.resolve(t.pos - (i > 0 ? 1 : -1)) : t, c = Qi(u.min(a), u.max(a), s), d = a.pos >= t.pos ? c[0].$from : c[c.length - 1].$to, f = a.pos >= t.pos ? c[c.length - 1].$to : c[0].$from;
    super(d, f, c), this.depth = s;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof ze && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, n) {
    const s = t.resolve(n.map(this.anchor)), i = t.resolve(n.map(this.head));
    return new ze(s, i);
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
      return new ze(r, o, this.depth);
    }
    const n = this.ranges[0], s = t.resolve(Math.max(0, n.$from.pos - 1));
    return new ze(this.$anchor, s, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), r = i[0].$from, o = i[i.length - 1].$to;
      return new ze(o, r, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], s = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
    return new ze(this.$anchor, s, this.depth);
  }
  static fromJSON(t, n) {
    return new ze(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, s, i, r = 1) {
    return new this(t.resolve(n), t.resolve(s), i, r);
  }
  getBookmark() {
    return new hw(this.anchor, this.head);
  }
};
Je.prototype.visible = !1;
function Ks(e) {
  return e instanceof Je;
}
As.create({
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
        if (!Ks(r)) {
          const c = Je.create(i, l, a, t, -1);
          return o.setSelection(c), n.dispatch(o), !0;
        }
        const u = r.extendBackwards();
        return o.setSelection(u), n.dispatch(o), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, selection: r, tr: o } = s, { anchor: l, head: a } = r;
        if (!Ks(r)) {
          const c = Je.create(i, l, a, t);
          return o.setSelection(c), n.dispatch(o), !0;
        }
        const u = r.extendForwards();
        return o.setSelection(u), n.dispatch(o), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: s } = e, { doc: i, tr: r } = s, o = Je.create(i, 0, i.content.size, t);
        return r.setSelection(o), n.dispatch(r), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: e } = this.editor.state;
    Ks(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let e = !1, t = !1;
    return [
      new yn({
        key: new Be("nodeRange"),
        props: {
          attributes: () => e ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, s) => {
              const { key: i } = this.options, r = /Mac/.test(navigator.platform), o = !!s.shiftKey, l = !!s.ctrlKey, a = !!s.altKey, u = !!s.metaKey, c = r ? u : l;
              return (i == null || i === "Shift" && o || i === "Control" && l || i === "Alt" && a || i === "Meta" && u || i === "Mod" && c) && (t = !0), t && document.addEventListener(
                "mouseup",
                () => {
                  t = !1;
                  const { state: d } = n, { doc: f, selection: h, tr: p } = d, { $anchor: w, $head: y } = h;
                  if (w.sameParent(y))
                    return;
                  const b = Je.create(f, w.pos, y.pos, this.options.depth);
                  p.setSelection(b), n.dispatch(p);
                },
                { once: !0 }
              ), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: s } = n, i = Ks(s);
            if (e = !1, !t)
              return i ? (e = !0, wa(s.ranges)) : null;
            const { $from: r, $to: o } = s;
            if (!i && r.sameParent(o))
              return null;
            const l = Qi(r, o, this.options.depth);
            return l.length ? (e = !0, wa(l)) : null;
          }
        }
      })
    ];
  }
});
function pw(e) {
  let t = "";
  const n = getComputedStyle(e);
  for (let s = 0; s < n.length; s += 1)
    t += `${n[s]}:${n.getPropertyValue(n[s])};`;
  return t;
}
function gw(e) {
  const t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], s = [t, ...Array.from(t.getElementsByTagName("*"))];
  return n.forEach((i, r) => {
    s[r].style.cssText = pw(i);
  }), t;
}
function mw(e, t) {
  let n = e;
  for (; n?.parentElement && n.parentElement !== t.dom; )
    n = n.parentElement;
  return n?.parentElement === t.dom ? n : void 0;
}
function ww(e, t, n, s = 5) {
  const i = e.dom, r = i.firstElementChild, o = i.lastElementChild;
  if (!r || !o)
    return { x: t, y: n };
  const l = r.getBoundingClientRect(), a = o.getBoundingClientRect(), u = Math.min(Math.max(l.top + s, n), a.bottom - s), c = 0.5, d = Math.abs(l.left - a.left) < c, f = Math.abs(l.right - a.right) < c;
  let h = l;
  return d && f && (h = l), { x: Math.min(Math.max(h.left + s, t), h.right - s), y: u };
}
var Ku = (e) => {
  const { x: t, y: n, editor: s } = e, { view: i, state: r } = s, { x: o, y: l } = ww(i, t, n, 5), a = i.root.elementsFromPoint(o, l);
  let u;
  if (Array.prototype.some.call(a, (f) => {
    if (!i.dom.contains(f))
      return !1;
    const h = mw(f, i);
    return h ? (u = h, !0) : !1;
  }), !u)
    return { resultElement: null, resultNode: null, pos: null };
  let c;
  try {
    c = i.posAtDOM(u, 0);
  } catch {
    return { resultElement: null, resultNode: null, pos: null };
  }
  const d = r.doc.nodeAt(c);
  return {
    resultElement: u,
    resultNode: d,
    pos: c
  };
};
function qs(e, t) {
  return window.getComputedStyle(e)[t];
}
function bw(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function vw(e, t, n) {
  const s = parseInt(qs(e.dom, "paddingLeft"), 10), i = parseInt(qs(e.dom, "paddingRight"), 10), r = parseInt(qs(e.dom, "borderLeftWidth"), 10), o = parseInt(qs(e.dom, "borderLeftWidth"), 10), l = e.dom.getBoundingClientRect();
  return {
    left: bw(t, l.left + s + r, l.right - i - o),
    top: n
  };
}
function qu(e) {
  var t;
  (t = e.parentNode) == null || t.removeChild(e);
}
function yw(e, t) {
  const { doc: n } = t.view.state, s = Ku({
    editor: t,
    x: e.clientX,
    y: e.clientY
  });
  if (!s.resultNode || s.pos === null)
    return [];
  const i = e.clientX, r = vw(t.view, i, e.clientY), o = t.view.posAtCoords(r);
  if (!o)
    return [];
  const { pos: l } = o;
  if (!n.resolve(l).parent)
    return [];
  const u = n.resolve(s.pos), c = n.resolve(s.pos + 1);
  return Qi(u, c, 0);
}
function xw(e, t) {
  const { view: n } = t;
  if (!e.dataTransfer)
    return;
  const { empty: s, $from: i, $to: r } = n.state.selection, o = yw(e, t), l = Qi(i, r, 0), a = l.some((y) => o.find((b) => b.$from === y.$from && b.$to === y.$to)), u = s || !a ? o : l;
  if (!u.length)
    return;
  const { tr: c } = n.state, d = document.createElement("div"), f = u[0].$from.pos, h = u[u.length - 1].$to.pos, p = Je.create(n.state.doc, f, h), w = p.content();
  u.forEach((y) => {
    const b = n.nodeDOM(y.$from.pos), O = gw(b);
    d.append(O);
  }), d.style.position = "absolute", d.style.top = "-10000px", document.body.append(d), e.dataTransfer.clearData(), e.dataTransfer.setDragImage(d, 0, 0), n.dragging = { slice: w, move: !0 }, c.setSelection(p), n.dispatch(c), document.addEventListener("drop", () => qu(d), { once: !0 });
}
var ba = (e, t) => {
  const n = e.resolve(t), { depth: s } = n;
  return s === 0 ? t : n.pos - n.parentOffset - 1;
}, va = (e, t) => {
  const n = e.nodeAt(t), s = e.resolve(t);
  let { depth: i } = s, r = n;
  for (; i > 0; ) {
    const o = s.node(i);
    i -= 1, i === 0 && (r = o);
  }
  return r;
}, _r = (e, t) => {
  const n = ct.getState(e);
  return n ? Ai(t, n.type, n.binding.mapping) : null;
}, kw = (e, t) => {
  const n = ct.getState(e);
  return n ? as(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, ya = (e, t) => {
  let n = t;
  for (; n?.parentNode && n.parentNode !== e.dom; )
    n = n.parentNode;
  return n;
}, Yu = new Be("dragHandle"), Ju = ({
  pluginKey: e = Yu,
  element: t,
  editor: n,
  computePositionConfig: s,
  getReferencedVirtualElement: i,
  onNodeChange: r,
  onElementDragStart: o,
  onElementDragEnd: l
}) => {
  const a = document.createElement("div");
  let u = !1, c = null, d = -1, f, h = null, p = null;
  function w() {
    t && (t.style.visibility = "hidden", t.style.pointerEvents = "none");
  }
  function y() {
    if (t) {
      if (!n.isEditable) {
        w();
        return;
      }
      t.style.visibility = "", t.style.pointerEvents = "auto";
    }
  }
  function b(E) {
    const B = i?.() || {
      getBoundingClientRect: () => E.getBoundingClientRect()
    };
    Fc(B, t, s).then((T) => {
      Object.assign(t.style, {
        position: T.strategy,
        left: `${T.x}px`,
        top: `${T.y}px`
      });
    });
  }
  function O(E) {
    o?.(E), xw(E, n), t && (t.dataset.dragging = "true"), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }
  function N(E) {
    l?.(E), w(), t && (t.style.pointerEvents = "auto", t.dataset.dragging = "false");
  }
  return t.addEventListener("dragstart", O), t.addEventListener("dragend", N), a.appendChild(t), {
    unbind() {
      t.removeEventListener("dragstart", O), t.removeEventListener("dragend", N), h && (cancelAnimationFrame(h), h = null, p = null);
    },
    plugin: new yn({
      key: typeof e == "string" ? new Be(e) : e,
      state: {
        init() {
          return { locked: !1 };
        },
        apply(E, B, T, $) {
          const R = E.getMeta("lockDragHandle"), M = E.getMeta("hideDragHandle");
          if (R !== void 0 && (u = R), M)
            return w(), u = !1, c = null, d = -1, r?.({ editor: n, node: null, pos: -1 }), B;
          if (E.docChanged && d !== -1 && t)
            if (Uu(E)) {
              const x = kw($, f);
              x !== d && (d = x);
            } else {
              const x = E.mapping.map(d);
              x !== d && (d = x, f = _r($, d));
            }
          return B;
        }
      },
      view: (E) => {
        var B;
        return t.draggable = !0, t.style.pointerEvents = "auto", t.dataset.dragging = "false", (B = n.view.dom.parentElement) == null || B.appendChild(a), a.style.pointerEvents = "none", a.style.position = "absolute", a.style.top = "0", a.style.left = "0", {
          update(T, $) {
            if (!t)
              return;
            if (!n.isEditable) {
              w();
              return;
            }
            if (u ? t.draggable = !1 : t.draggable = !0, E.state.doc.eq($.doc) || d === -1)
              return;
            let R = E.nodeDOM(d);
            if (R = ya(E, R), R === E.dom || R?.nodeType !== 1)
              return;
            const M = E.posAtDOM(R, 0), x = va(n.state.doc, M), V = ba(n.state.doc, M);
            c = x, d = V, f = _r(E.state, d), r?.({ editor: n, node: c, pos: d }), b(R);
          },
          // TODO: Kills even on hot reload
          destroy() {
            h && (cancelAnimationFrame(h), h = null, p = null), t && qu(a);
          }
        };
      },
      props: {
        handleDOMEvents: {
          keydown(E) {
            return !t || u || E.hasFocus() && (w(), c = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mouseleave(E, B) {
            return u || B.target && !a.contains(B.relatedTarget) && (w(), c = null, d = -1, r?.({ editor: n, node: null, pos: -1 })), !1;
          },
          mousemove(E, B) {
            return !t || u || (p = { x: B.clientX, y: B.clientY }, h) || (h = requestAnimationFrame(() => {
              if (h = null, !p)
                return;
              const { x: T, y: $ } = p;
              p = null;
              const R = Ku({
                x: T,
                y: $,
                editor: n
              });
              if (!R.resultElement)
                return;
              let M = R.resultElement;
              if (M = ya(E, M), M === E.dom || M?.nodeType !== 1)
                return;
              const x = E.posAtDOM(M, 0), V = va(n.state.doc, x);
              if (V !== c) {
                const D = ba(n.state.doc, x);
                c = V, d = D, f = _r(E.state, d), r?.({ editor: n, node: c, pos: d }), b(M), y();
              }
            })), !1;
          }
        }
      }
    })
  };
}, Gu = {
  placement: "left-start",
  strategy: "absolute"
};
As.create({
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
      Ju({
        computePositionConfig: { ...Gu, ...this.options.computePositionConfig },
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
var _w = /* @__PURE__ */ Jt({
  name: "DragHandleVue",
  props: {
    pluginKey: {
      type: [String, Object],
      default: Yu
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
    const n = Z(null), s = kd(null);
    return sn(async () => {
      await Ft();
      const { editor: i, pluginKey: r, onNodeChange: o, onElementDragEnd: l, onElementDragStart: a, computePositionConfig: u } = e;
      if (!n.value || !e.editor || e.editor.isDestroyed)
        return;
      const c = Ju({
        editor: i,
        element: n.value,
        pluginKey: r,
        computePositionConfig: { ...Gu, ...u },
        onNodeChange: o,
        onElementDragStart: a,
        onElementDragEnd: l
      });
      s.value = c, e.editor.registerPlugin(c.plugin);
    }), Ms(() => {
      var i, r;
      s.value && (e.editor && !e.editor.isDestroyed && e.editor.unregisterPlugin(e.pluginKey), (r = (i = s.value).unbind) == null || r.call(i), s.value = null);
    }), () => {
      var i;
      return Is(
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
}), Sw = (e) => ht({
  find: /--$/,
  replace: e ?? "—"
}), Cw = (e) => ht({
  find: /\.\.\.$/,
  replace: e ?? "…"
}), Ew = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: e ?? "“"
}), Aw = (e) => ht({
  find: /"$/,
  replace: e ?? "”"
}), Tw = (e) => ht({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: e ?? "‘"
}), Mw = (e) => ht({
  find: /'$/,
  replace: e ?? "’"
}), Dw = (e) => ht({
  find: /<-$/,
  replace: e ?? "←"
}), Ow = (e) => ht({
  find: /->$/,
  replace: e ?? "→"
}), Iw = (e) => ht({
  find: /\(c\)$/,
  replace: e ?? "©"
}), Rw = (e) => ht({
  find: /\(tm\)$/,
  replace: e ?? "™"
}), Lw = (e) => ht({
  find: /\(sm\)$/,
  replace: e ?? "℠"
}), Pw = (e) => ht({
  find: /\(r\)$/,
  replace: e ?? "®"
}), Nw = (e) => ht({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: e ?? "½"
}), Bw = (e) => ht({
  find: /\+\/-$/,
  replace: e ?? "±"
}), $w = (e) => ht({
  find: /!=$/,
  replace: e ?? "≠"
}), Hw = (e) => ht({
  find: /<<$/,
  replace: e ?? "«"
}), Fw = (e) => ht({
  find: />>$/,
  replace: e ?? "»"
}), Vw = (e) => ht({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: e ?? "×"
}), Uw = (e) => ht({
  find: /\^2$/,
  replace: e ?? "²"
}), jw = (e) => ht({
  find: /\^3$/,
  replace: e ?? "³"
}), zw = (e) => ht({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: e ?? "¼"
}), Ww = (e) => ht({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: e ?? "¾"
}), Kw = As.create({
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
    return this.options.emDash !== !1 && e.push(Sw(this.options.emDash)), this.options.ellipsis !== !1 && e.push(Cw(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && e.push(Ew(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(Aw(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && e.push(Tw(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push(Mw(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && e.push(Dw(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(Ow(this.options.rightArrow)), this.options.copyright !== !1 && e.push(Iw(this.options.copyright)), this.options.trademark !== !1 && e.push(Rw(this.options.trademark)), this.options.servicemark !== !1 && e.push(Lw(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(Pw(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(Nw(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(Bw(this.options.plusMinus)), this.options.notEqual !== !1 && e.push($w(this.options.notEqual)), this.options.laquo !== !1 && e.push(Hw(this.options.laquo)), this.options.raquo !== !1 && e.push(Fw(this.options.raquo)), this.options.multiplication !== !1 && e.push(Vw(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(Uw(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(jw(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(zw(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(Ww(this.options.threeQuarters)), e;
  }
}), qw = Kw, Yw = /(^|[^`])`([^`]+)`(?!`)$/, Jw = /(^|[^`])`([^`]+)`(?!`)/g, Gw = Fa.create({
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
    return ["code", Vn(this.options.HTMLAttributes, e), 0];
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
      Ua({
        find: Yw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Va({
        find: Jw,
        type: this.type
      })
    ];
  }
}), Sr = 4, Xw = /^```([a-z]+)?[\s\n]$/, Qw = /^~~~([a-z]+)?[\s\n]$/, Zw = Un.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: Sr,
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
      Vn(this.options.HTMLAttributes, t),
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
        const n = (t = this.options.tabSize) != null ? t : Sr, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        if (r.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return o ? e.commands.insertContent(l) : e.commands.command(({ tr: a }) => {
          const { from: u, to: c } = i, h = s.doc.textBetween(u, c, `
`, `
`).split(`
`).map((p) => l + p).join(`
`);
          return a.replaceWith(u, c, s.schema.text(h)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : Sr, { state: s } = e, { selection: i } = s, { $from: r, empty: o } = i;
        return r.parent.type !== this.type ? !1 : o ? e.commands.command(({ tr: l }) => {
          var a;
          const { pos: u } = r, c = r.start(), d = r.end(), h = s.doc.textBetween(c, d, `
`, `
`).split(`
`);
          let p = 0, w = 0;
          const y = u - c;
          for (let T = 0; T < h.length; T += 1) {
            if (w + h[T].length >= y) {
              p = T;
              break;
            }
            w += h[T].length + 1;
          }
          const O = ((a = h[p].match(/^ */)) == null ? void 0 : a[0]) || "", N = Math.min(O.length, n);
          if (N === 0)
            return !0;
          let E = c;
          for (let T = 0; T < p; T += 1)
            E += h[T].length + 1;
          return l.delete(E, E + N), u - E <= N && l.setSelection(Xe.create(l.doc, E)), !0;
        }) : e.commands.command(({ tr: l }) => {
          const { from: a, to: u } = i, f = s.doc.textBetween(a, u, `
`, `
`).split(`
`).map((h) => {
            var p;
            const w = ((p = h.match(/^ */)) == null ? void 0 : p[0]) || "", y = Math.min(w.length, n);
            return h.slice(y);
          }).join(`
`);
          return l.replaceWith(a, u, s.schema.text(f)), !0;
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
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: u }) => (u.setSelection(Ha.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Qo({
        find: Xw,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      Qo({
        find: Qw,
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
      new yn({
        key: new Be("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = t.clipboardData.getData("text/plain"), s = t.clipboardData.getData("vscode-editor-data"), i = s ? JSON.parse(s) : void 0, r = i?.mode;
            if (!n || !r)
              return !1;
            const { tr: o, schema: l } = e.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: r }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(Xe.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), e.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), tb = Un.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `

`) : ""
}), eb = Un.create({
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
    return ["br", Vn(this.options.HTMLAttributes, e)];
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
          return t().insertContent({ type: this.name }).command(({ tr: u, dispatch: c }) => {
            if (c && a && o) {
              const d = a.filter((f) => l.includes(f.type.name));
              u.ensureMarks(d);
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
}), nb = Un.create({
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
    return ["hr", Vn(this.options.HTMLAttributes, e)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (e, t) => t.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        if (!Pd(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, i = e();
        return Nd(n) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ state: r, tr: o, dispatch: l }) => {
          if (l) {
            const { $to: a } = o.selection, u = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? o.setSelection(Xe.create(o.doc, a.pos + 1)) : a.nodeAfter.isBlock ? o.setSelection(ro.create(o.doc, a.pos)) : o.setSelection(Xe.create(o.doc, a.pos));
            else {
              const c = r.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, d = c?.create();
              d && (o.insert(u, d), o.setSelection(Xe.create(o.doc, u + 1)));
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
      Ld({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), sb = Un.create({
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
    return ["p", Vn(this.options.HTMLAttributes, e), 0];
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
}), ib = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, rb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, ob = Fa.create({
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
    return ["s", Vn(this.options.HTMLAttributes, e), 0];
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
      Ua({
        find: ib,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Va({
        find: rb,
        type: this.type
      })
    ];
  }
}), lb = Un.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || ""
  }),
  renderMarkdown: (e) => e.text || ""
}), ab = As.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const i = [];
    return this.options.bold !== !1 && i.push(Vd.configure(this.options.bold)), this.options.blockquote !== !1 && i.push(Fd.configure(this.options.blockquote)), this.options.bulletList !== !1 && i.push(Wd.configure(this.options.bulletList)), this.options.code !== !1 && i.push(Gw.configure(this.options.code)), this.options.codeBlock !== !1 && i.push(Zw.configure(this.options.codeBlock)), this.options.document !== !1 && i.push(tb.configure(this.options.document)), this.options.dropcursor !== !1 && i.push(Gd.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && i.push(Xd.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && i.push(eb.configure(this.options.hardBreak)), this.options.heading !== !1 && i.push(Ud.configure(this.options.heading)), this.options.undoRedo !== !1 && i.push(Qd.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && i.push(nb.configure(this.options.horizontalRule)), this.options.italic !== !1 && i.push(jd.configure(this.options.italic)), this.options.listItem !== !1 && i.push(Kd.configure(this.options.listItem)), this.options.listKeymap !== !1 && i.push(qd.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && i.push(zd.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && i.push(Yd.configure(this.options.orderedList)), this.options.paragraph !== !1 && i.push(sb.configure(this.options.paragraph)), this.options.strike !== !1 && i.push(ob.configure(this.options.strike)), this.options.text !== !1 && i.push(lb.configure(this.options.text)), this.options.underline !== !1 && i.push(Jd.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && i.push(Zd.configure((s = this.options) == null ? void 0 : s.trailingNode)), i;
  }
}), cb = ab;
function xa(e) {
  return _d((t, n) => ({
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
var ub = class extends Bd {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = xa(this.view.state), this.reactiveExtensionStorage = xa(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Ia(this);
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
}, db = /* @__PURE__ */ Jt({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = Z(), n = Bi();
    return jn(() => {
      const s = e.editor;
      s && s.options.element && t.value && Ft(() => {
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
    }), Ms(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return Is("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
});
function fb(e, t) {
  const n = Math.min(e.top, t.top), s = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), o = Math.max(e.right, t.right) - i, l = s - n, a = i, u = n;
  return new DOMRect(a, u, o, l);
}
var hb = class {
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
    }, this.shouldShow = ({ view: c, state: d, from: f, to: h }) => {
      const { doc: p, selection: w } = d, { empty: y } = w, b = !p.textBetween(f, h).length && $d(d.selection), O = this.element.contains(document.activeElement);
      return !(!(c.hasFocus() || O) || y || b || !this.editor.isEditable);
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
    }, this.blurHandler = ({ event: c }) => {
      var d;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      c?.relatedTarget && ((d = this.element.parentNode) != null && d.contains(c.relatedTarget)) || c?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (c, d) => {
      const f = !d?.selection.eq(c.state.selection), h = !d?.doc.eq(c.state.doc);
      !f && !h || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(c, f, h, d);
      }, this.updateDelay));
    }, this.updateHandler = (c, d, f, h) => {
      const { composing: p } = c;
      if (p || !d && !f)
        return;
      if (!this.getShouldShow(h)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.transactionHandler = ({ transaction: c }) => {
      c.getMeta("bubbleMenu") === "updatePosition" && this.updatePosition();
    };
    var u;
    this.editor = e, this.element = t, this.view = n, this.updateDelay = s, this.resizeDelay = i, this.appendTo = o, this.scrollTarget = (u = a?.scrollTarget) != null ? u : window, this.getReferencedVirtualElement = l, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...a
    }, this.element.tabIndex = 0, r && (this.shouldShow = r), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(jp(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      Up(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      Fp(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(Kp(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(zp(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      Vp(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(Wp(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      qp(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  get virtualElement() {
    var e;
    const { selection: t } = this.editor.state, n = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
    if (n)
      return n;
    const s = Hd(this.view, t.from, t.to);
    let i = {
      getBoundingClientRect: () => s,
      getClientRects: () => [s]
    };
    if (t instanceof ro) {
      let r = this.view.nodeDOM(t.from);
      const o = r.dataset.nodeViewWrapper ? r : r.querySelector("[data-node-view-wrapper]");
      o && (r = o), r && (i = {
        getBoundingClientRect: () => r.getBoundingClientRect(),
        getClientRects: () => [r.getBoundingClientRect()]
      });
    }
    if (t instanceof tf) {
      const { $anchorCell: r, $headCell: o } = t, l = r ? r.pos : o.pos, a = o ? o.pos : r.pos, u = this.view.nodeDOM(l), c = this.view.nodeDOM(a);
      if (!u || !c)
        return;
      const d = u === c ? u.getBoundingClientRect() : fb(
        u.getBoundingClientRect(),
        c.getBoundingClientRect()
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
    e && Fc(e, this.element, {
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
}, pb = (e) => new yn({
  key: typeof e.pluginKey == "string" ? new Be(e.pluginKey) : e.pluginKey,
  view: (t) => new hb({ view: t, ...e })
}), gb = /* @__PURE__ */ Jt({
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
    return sn(() => {
      const {
        editor: i,
        options: r,
        pluginKey: o,
        resizeDelay: l,
        appendTo: a,
        shouldShow: u,
        getReferencedVirtualElement: c,
        updateDelay: d
      } = e, f = s.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), Ft(() => {
        i.registerPlugin(
          pb({
            editor: i,
            element: f,
            options: r,
            pluginKey: o,
            resizeDelay: l,
            appendTo: a,
            shouldShow: u,
            getReferencedVirtualElement: c,
            updateDelay: d
          })
        );
      }));
    }), Ms(() => {
      const { pluginKey: i, editor: r } = e;
      r.unregisterPlugin(i);
    }), () => {
      var i;
      return Is("div", { ref: s, ...n }, (i = t.default) == null ? void 0 : i.call(t));
    };
  }
});
const mb = {
  height: "20",
  width: "20",
  viewBox: "0 0 20 20"
}, wb = ["stroke-dasharray"], bb = /* @__PURE__ */ Jt({
  __name: "CharacterCount",
  props: {
    editor: {},
    limit: {}
  },
  setup(e) {
    const t = e, n = At(
      () => Math.round(100 / t.limit * t.editor.storage.characterCount.characters())
    );
    return (s, i) => (J(), at("div", {
      class: Oe(["tiptap-character-count", {
        "tiptap-character-count--warning": e.editor.storage.characterCount.characters() === e.limit
      }])
    }, [
      (J(), at("svg", mb, [
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
        }, null, 8, wb),
        i[1] || (i[1] = Rt("circle", {
          r: "6",
          cx: "10",
          cy: "10",
          fill: "var(--tiptap-color-surface)"
        }, null, -1))
      ])),
      Ir(" " + Ge(e.editor.storage.characterCount.characters()) + " / " + Ge(e.limit) + " characters ", 1),
      i[2] || (i[2] = Rt("br", null, null, -1)),
      Ir(" " + Ge(e.editor.storage.characterCount.words()) + " words ", 1)
    ], 2));
  }
});
var ka;
let vb = /* @__PURE__ */ Symbol("headlessui.useid"), yb = 0;
const Bo = (ka = df) != null ? ka : function() {
  return fn(vb, () => `${++yb}`)();
};
function gt(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function Zi(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, Zi), s;
}
var xb = Object.defineProperty, kb = (e, t, n) => t in e ? xb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _a = (e, t, n) => (kb(e, typeof t != "symbol" ? t + "" : t, n), n);
let _b = class {
  constructor() {
    _a(this, "current", this.detect()), _a(this, "currentId", 0);
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
}, $o = new _b();
function Ho(e) {
  if ($o.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = gt(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let to = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var eo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(eo || {}), Sb = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Sb || {}), Cb = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cb || {});
function Xu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(to)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Fo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Fo || {});
function Vo(e, t = 0) {
  var n;
  return e === ((n = Ho(e)) == null ? void 0 : n.body) ? !1 : Zi(t, { 0() {
    return e.matches(to);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(to)) return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function Qu(e) {
  let t = Ho(e);
  Ft(() => {
    t && !Vo(t.activeElement, 0) && Ab(e);
  });
}
var Eb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Eb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ab(e) {
  e?.focus({ preventScroll: !0 });
}
let Tb = ["textarea", "input"].join(",");
function Mb(e) {
  var t, n;
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Tb)) != null ? n : !1;
}
function Zu(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n), r = t(s);
    if (i === null || r === null) return 0;
    let o = i.compareDocumentPosition(r);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Db(e, t) {
  return Ob(Xu(), t, { relativeTo: e });
}
function Ob(e, t, { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {}) {
  var r;
  let o = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) != null ? r : document, l = Array.isArray(e) ? n ? Zu(e) : e : Xu(e);
  i.length > 0 && l.length > 1 && (l = l.filter((p) => !i.includes(p))), s = s ?? o.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(s)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(s)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0) return 0;
    let p = u + d;
    if (t & 16) p = (p + f) % f;
    else {
      if (p < 0) return 3;
      if (p >= f) return 1;
    }
    h = l[p], h?.focus(c), d += a;
  } while (h !== o.activeElement);
  return t & 6 && Mb(h) && h.select(), 2;
}
function Ib() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Rb() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Lb() {
  return Ib() || Rb();
}
function Ys(e, t, n) {
  $o.isServer || jn((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function Pb(e, t, n) {
  $o.isServer || jn((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function Nb(e, t, n = At(() => !0)) {
  function s(r, o) {
    if (!n.value || r.defaultPrevented) return;
    let l = o(r);
    if (l === null || !l.getRootNode().contains(l)) return;
    let a = (function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    })(e);
    for (let u of a) {
      if (u === null) continue;
      let c = u instanceof HTMLElement ? u : gt(u);
      if (c != null && c.contains(l) || r.composed && r.composedPath().includes(c)) return;
    }
    return !Vo(l, Fo.Loose) && l.tabIndex !== -1 && r.preventDefault(), t(r, l);
  }
  let i = Z(null);
  Ys("pointerdown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), Ys("mousedown", (r) => {
    var o, l;
    n.value && (i.value = ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null ? void 0 : l[0]) || r.target);
  }, !0), Ys("click", (r) => {
    Lb() || i.value && (s(r, () => i.value), i.value = null);
  }, !0), Ys("touchend", (r) => s(r, () => r.target instanceof HTMLElement ? r.target : null), !0), Pb("blur", (r) => s(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Sa(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Bb(e, t) {
  let n = Z(Sa(e.value.type, e.value.as));
  return sn(() => {
    n.value = Sa(e.value.type, e.value.as);
  }), jn(() => {
    var s;
    n.value || gt(t) && gt(t) instanceof HTMLButtonElement && !((s = gt(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Ca(e) {
  return [e.screenX, e.screenY];
}
function $b() {
  let e = Z([-1, -1]);
  return { wasMoved(t) {
    let n = Ca(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Ca(t);
  } };
}
function Hb({ container: e, accept: t, walk: n, enabled: s }) {
  jn(() => {
    let i = e.value;
    if (!i || s !== void 0 && !s.value) return;
    let r = Ho(e);
    if (!r) return;
    let o = Object.assign((a) => t(a), { acceptNode: t }), l = r.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; l.nextNode(); ) n(l.currentNode);
  });
}
var no = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(no || {}), Fb = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Fb || {});
function tr({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...i }) {
  var r;
  let o = ed(s, n), l = Object.assign(i, { props: o });
  if (e || t & 2 && o.static) return Cr(l);
  if (t & 1) {
    let a = (r = o.unmount) == null || r ? 0 : 1;
    return Zi(a, { 0() {
      return null;
    }, 1() {
      return Cr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Cr(l);
}
function Cr({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var r, o;
  let { as: l, ...a } = Vb(e, ["unmount", "static"]), u = (r = n.default) == null ? void 0 : r.call(n, s), c = {};
  if (s) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(s)) typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (c["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (u = td(u ?? []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = u ?? [];
      if (!Ub(d) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).map((w) => w.trim()).filter((w, y, b) => b.indexOf(w) === y).sort((w, y) => w.localeCompare(y)).map((w) => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((w) => `  - ${w}`).join(`
`)].join(`
`));
      let h = ed((o = d.props) != null ? o : {}, a, c), p = Pe(d, h, !0);
      for (let w in h) w.startsWith("on") && (p.props || (p.props = {}), p.props[w] = h[w]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return Is(l, Object.assign({}, a, c), { default: () => u });
}
function td(e) {
  return e.flatMap((t) => t.type === ft ? td(t.children) : [t]);
}
function ed(...e) {
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
function Vb(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t) s in n && delete n[s];
  return n;
}
function Ub(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let nd = /* @__PURE__ */ Symbol("Context");
var Es = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Es || {});
function jb() {
  return fn(nd, null);
}
function zb(e) {
  lo(nd, e);
}
var xt = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(xt || {});
function Wb(e) {
  throw new Error("Unexpected object: " + e);
}
var qt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(qt || {});
function Kb(e, t) {
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
      Wb(e);
  }
}
let Ea = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Aa(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return s;
  let r = !1;
  for (let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) l.remove(), r = !0;
  let o = r ? (n = i.innerText) != null ? n : "" : s;
  return Ea.test(o) && (o = o.replace(Ea, "")), o;
}
function qb(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((i) => {
      let r = document.getElementById(i);
      if (r) {
        let o = r.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Aa(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0) return s.join(", ");
  }
  return Aa(e).trim();
}
function Yb(e) {
  let t = Z(""), n = Z("");
  return () => {
    let s = gt(e);
    if (!s) return "";
    let i = s.innerText;
    if (t.value === i) return n.value;
    let r = qb(s).trim().toLowerCase();
    return t.value = i, n.value = r, r;
  };
}
var Jb = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jb || {}), Gb = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Gb || {});
function Xb(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let sd = /* @__PURE__ */ Symbol("MenuContext");
function er(e) {
  let t = fn(sd, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, er), n;
  }
  return t;
}
let Qb = /* @__PURE__ */ Jt({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let s = Z(1), i = Z(null), r = Z(null), o = Z([]), l = Z(""), a = Z(null), u = Z(1);
  function c(f = (h) => h) {
    let h = a.value !== null ? o.value[a.value] : null, p = Zu(f(o.value.slice()), (y) => gt(y.dataRef.domRef)), w = h ? p.indexOf(h) : null;
    return w === -1 && (w = null), { items: p, activeItemIndex: w };
  }
  let d = { menuState: s, buttonRef: i, itemsRef: r, items: o, searchQuery: l, activeItemIndex: a, activationTrigger: u, closeMenu: () => {
    s.value = 1, a.value = null;
  }, openMenu: () => s.value = 0, goToItem(f, h, p) {
    let w = c(), y = Kb(f === qt.Specific ? { focus: qt.Specific, id: h } : { focus: f }, { resolveItems: () => w.items, resolveActiveIndex: () => w.activeItemIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    l.value = "", a.value = y, u.value = p ?? 1, o.value = w.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (a.value !== null ? o.value.slice(a.value + h).concat(o.value.slice(0, a.value + h)) : o.value).find((y) => y.dataRef.textValue.startsWith(l.value) && !y.dataRef.disabled), w = p ? o.value.indexOf(p) : -1;
    w === -1 || w === a.value || (a.value = w, u.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = c((w) => [...w, { id: f, dataRef: h }]);
    o.value = p.items, a.value = p.activeItemIndex, u.value = 1;
  }, unregisterItem(f) {
    let h = c((p) => {
      let w = p.findIndex((y) => y.id === f);
      return w !== -1 && p.splice(w, 1), p;
    });
    o.value = h.items, a.value = h.activeItemIndex, u.value = 1;
  } };
  return Nb([i, r], (f, h) => {
    var p;
    d.closeMenu(), Vo(h, Fo.Loose) || (f.preventDefault(), (p = gt(i)) == null || p.focus());
  }, At(() => s.value === 0)), lo(sd, d), zb(At(() => Zi(s.value, { 0: Es.Open, 1: Es.Closed }))), () => {
    let f = { open: s.value === 0, close: d.closeMenu };
    return tr({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} }), Zb = /* @__PURE__ */ Jt({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-button-${Bo()}`, o = er("MenuButton");
  s({ el: o.buttonRef, $el: o.buttonRef });
  function l(d) {
    switch (d.key) {
      case xt.Space:
      case xt.Enter:
      case xt.ArrowDown:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ft(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(qt.First);
        });
        break;
      case xt.ArrowUp:
        d.preventDefault(), d.stopPropagation(), o.openMenu(), Ft(() => {
          var f;
          (f = gt(o.itemsRef)) == null || f.focus({ preventScroll: !0 }), o.goToItem(qt.Last);
        });
        break;
    }
  }
  function a(d) {
    switch (d.key) {
      case xt.Space:
        d.preventDefault();
        break;
    }
  }
  function u(d) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ft(() => {
      var f;
      return (f = gt(o.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), o.openMenu(), Xb(() => {
      var f;
      return (f = gt(o.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let c = Bb(At(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var d;
    let f = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: r, type: c.value, "aria-haspopup": "menu", "aria-controls": (d = gt(o.itemsRef)) == null ? void 0 : d.id, "aria-expanded": o.menuState.value === 0, onKeydown: l, onKeyup: a, onClick: u };
    return tr({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} }), tv = /* @__PURE__ */ Jt({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-items-${Bo()}`, o = er("MenuItems"), l = Z(null);
  s({ el: o.itemsRef, $el: o.itemsRef }), Hb({ container: At(() => gt(o.itemsRef)), enabled: At(() => o.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function a(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case xt.Space:
        if (o.searchQuery.value !== "") return f.preventDefault(), f.stopPropagation(), o.search(f.key);
      case xt.Enter:
        if (f.preventDefault(), f.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = gt(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), Qu(gt(o.buttonRef));
        break;
      case xt.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Next);
      case xt.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Previous);
      case xt.Home:
      case xt.PageUp:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.First);
      case xt.End:
      case xt.PageDown:
        return f.preventDefault(), f.stopPropagation(), o.goToItem(qt.Last);
      case xt.Escape:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ft(() => {
          var p;
          return (p = gt(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case xt.Tab:
        f.preventDefault(), f.stopPropagation(), o.closeMenu(), Ft(() => Db(gt(o.buttonRef), f.shiftKey ? eo.Previous : eo.Next));
        break;
      default:
        f.key.length === 1 && (o.search(f.key), l.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function u(f) {
    switch (f.key) {
      case xt.Space:
        f.preventDefault();
        break;
    }
  }
  let c = jb(), d = At(() => c !== null ? (c.value & Es.Open) === Es.Open : o.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: o.menuState.value === 0 }, { ...w } = e, y = { "aria-activedescendant": o.activeItemIndex.value === null || (f = o.items.value[o.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = gt(o.buttonRef)) == null ? void 0 : h.id, id: r, onKeydown: a, onKeyup: u, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return tr({ ourProps: y, theirProps: w, slot: p, attrs: t, slots: n, features: no.RenderStrategy | no.Static, visible: d.value, name: "MenuItems" });
  };
} }), ev = /* @__PURE__ */ Jt({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: s }) {
  var i;
  let r = (i = e.id) != null ? i : `headlessui-menu-item-${Bo()}`, o = er("MenuItem"), l = Z(null);
  s({ el: l, $el: l });
  let a = At(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === r : !1), u = Yb(l), c = At(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: l }));
  sn(() => o.registerItem(r, c)), Ds(() => o.unregisterItem(r)), jn(() => {
    o.menuState.value === 0 && a.value && o.activationTrigger.value !== 0 && Ft(() => {
      var b, O;
      return (O = (b = gt(l)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : O.call(b, { block: "nearest" });
    });
  });
  function d(b) {
    if (e.disabled) return b.preventDefault();
    o.closeMenu(), Qu(gt(o.buttonRef));
  }
  function f() {
    if (e.disabled) return o.goToItem(qt.Nothing);
    o.goToItem(qt.Specific, r);
  }
  let h = $b();
  function p(b) {
    h.update(b);
  }
  function w(b) {
    h.wasMoved(b) && (e.disabled || a.value || o.goToItem(qt.Specific, r, 0));
  }
  function y(b) {
    h.wasMoved(b) && (e.disabled || a.value && o.goToItem(qt.Nothing));
  }
  return () => {
    let { disabled: b, ...O } = e, N = { active: a.value, disabled: b, close: o.closeMenu };
    return tr({ ourProps: { id: r, ref: l, role: "menuitem", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: w, onMousemove: w, onPointerleave: y, onMouseleave: y }, theirProps: { ...n, ...O }, slot: N, attrs: n, slots: t, name: "MenuItem" });
  };
} });
const nv = ["innerHTML"], sv = "typo3-backend-icon", Ti = /* @__PURE__ */ Jt({
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
      "justify-left": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>',
      "justify-center": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg>',
      "justify-right": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>',
      // heading
      heading: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-icon lucide-heading"><path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/></svg>',
      "heading-1": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading1-icon lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>',
      "heading-2": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading2-icon lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>',
      "heading-3": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading3-icon lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>',
      "heading-4": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading4-icon lucide-heading-4"><path d="M12 18V6"/><path d="M17 10v3a1 1 0 0 0 1 1h3"/><path d="M21 10v8"/><path d="M4 12h8"/><path d="M4 18V6"/></svg>',
      "heading-5": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading5-icon lucide-heading-5"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 13v-3h4"/><path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"/></svg>',
      "heading-6": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading6-icon lucide-heading-6"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/></svg>',
      // table
      table: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-icon lucide-table"><path d="M12 3v18"/><path d="M3 12h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>',
      "table-row-add-above": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h14c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2m16-6H3m9-9V2M9.995 4.005h4"/></svg>',
      "table-row-add-below": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z"></path></svg>',
      "table-row-delete": '<svg width="24" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 100L156 156M156 100L100 156M37.0909 28H218.909C223.93 28 228 31.5817 228 36V60C228 64.4183 223.93 68 218.909 68H37.0909C32.0701 68 28 64.4183 28 60V36C28 31.5817 32.0701 28 37.0909 28ZM37.0909 188H218.909C223.93 188 228 191.582 228 196V220C228 224.418 223.93 228 218.909 228H37.0909C32.0701 228 28 224.418 28 220V196C28 191.582 32.0701 188 37.0909 188Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      "table-column-add-before": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h14c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2m16-6H3m9-9V2M9.995 4.005h4"/></svg>',
      "table-column-add-after": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M80,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V48A16,16,0,0,0,80,32Zm0,176H56V48H80ZM152,32H128a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,152,32Zm0,176H128V48h24Zm96-80a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V136H192a8,8,0,0,1,0-16h16V104a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,128Z"></path></svg>',
      "table-column-delete": '<svg width="24" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M156 100L100 156M156 156L100 100M228 37.0909L228 218.909C228 223.93 224.418 228 220 228L196 228C191.582 228 188 223.93 188 218.909L188 37.0909C188 32.0701 191.582 28 196 28L220 28C224.418 28 228 32.0701 228 37.0909ZM68 37.0909L68 218.909C68 223.93 64.4183 228 60 228L36 228C31.5817 228 28 223.93 28 218.909L28 37.0909C28 32.0701 31.5817 28 36 28L60 28C64.4183 28 68 32.0701 68 37.0909Z" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      "table-merge-cells": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-cells-merge-icon lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>',
      "table-split-cell": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-columns-split-icon lucide-table-columns-split"><path d="M14 14v2"/><path d="M14 20v2"/><path d="M14 2v2"/><path d="M14 8v2"/><path d="M2 15h8"/><path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"/><path d="M2 9h8"/><path d="M22 15h-4"/><path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><path d="M22 9h-4"/><path d="M5 3v18"/></svg>',
      "table-delete": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-x-icon lucide-grid-2x2-x"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 16 5 5"/><path d="m16 21 5-5"/></svg>',
      "table-header-row": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sheet-icon lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>',
      "table-header-column": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2m6 16V3m6 18V3M9 15h12M9 9h12"/></svg>'
    }, s = At(() => n[t.icon] || "");
    return (i, r) => s.value ? (J(), at("span", {
      key: 0,
      class: "icon-wrapper",
      style: ii({
        width: t.size,
        height: t.size
      }),
      innerHTML: s.value
    }, null, 12, nv)) : (J(), Zt(Sf(sv), {
      key: 1,
      identifier: t.icon,
      size: "small",
      style: ii({
        width: t.size,
        height: t.size
      })
    }, null, 8, ["identifier", "style"]));
  }
}), iv = { class: "tiptap-sr-only" }, rv = ["onClick"], Ta = /* @__PURE__ */ Jt({
  __name: "Dropdown",
  props: {
    label: {},
    iconIdentifier: {},
    editorDomNode: {},
    items: {}
  },
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = Z(null), r = Z(null), o = Z("not-calculated"), l = At(() => n.items.some((d) => !d.isDisabled)), a = At(() => n.items.some((d) => d.isActive));
    function u() {
      if (!r.value)
        return "bottom-left";
      const d = n.editorDomNode.getBoundingClientRect();
      return r.value.$el.getBoundingClientRect().left - d.left > 200 ? "bottom-right" : "bottom-left";
    }
    sn(() => {
      o.value = u();
    });
    function c(d) {
      s(d === "open" ? "open" : "close");
    }
    return (d, f) => (J(), Zt(ut(Qb), {
      as: "div",
      class: "tiptap-dropdown"
    }, {
      default: qe(() => [
        dt(ut(Zb), {
          ref_key: "dropdownButtonRef",
          ref: r,
          class: Oe(["tiptap-dropdown__button", {
            "tiptap-dropdown__button--active": a.value
          }]),
          disabled: !l.value
        }, {
          default: qe(() => [
            Rt("span", iv, Ge(e.label), 1),
            dt(Ti, {
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
        dt(xh, {
          "enter-active-class": "transition-enter-active",
          "enter-from-class": "transition-enter-from",
          "enter-to-class": "transition-enter-to",
          "leave-active-class": "transition-leave-active",
          "leave-from-class": "transition-leave-from",
          "leave-to-class": "transition-leave-to",
          onAfterLeave: f[0] || (f[0] = () => c("close")),
          onAfterEnter: f[1] || (f[1] = () => c("open"))
        }, {
          default: qe(() => [
            dt(ut(tv), {
              ref_key: "dropdownContentRef",
              ref: i,
              class: Oe(["tiptap-dropdown__content", {
                "tiptap-dropdown__content--bottom-left": o.value === "bottom-left",
                "tiptap-dropdown__content--bottom-right": o.value === "bottom-right"
              }])
            }, {
              default: qe(() => [
                (J(!0), at(ft, null, es(e.items, (h, p) => (J(), Zt(ut(ev), {
                  key: `item-${p}`,
                  as: "template"
                }, {
                  default: qe(() => [
                    Rt("button", {
                      class: Oe(["tiptap-dropdown__content-button", {
                        "tiptap-dropdown__content-button--active": h.isActive
                      }]),
                      onClick: h.action
                    }, [
                      h.icon ? (J(), Zt(Ti, {
                        key: 0,
                        icon: h.icon,
                        size: "16px"
                      }, null, 8, ["icon"])) : ne("", !0),
                      Rt("span", null, Ge(h.label), 1)
                    ], 10, rv)
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
}), ov = /* @__PURE__ */ Jt({
  __name: "Stylesheets",
  props: {
    stylesheets: {}
  },
  setup(e) {
    const t = e, n = Z(null), s = Z([]), i = Z([]);
    Js(() => t.stylesheets, async (o) => {
      await Ft(), await Promise.all(o.map(async (l) => {
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
      const u = await a.text(), c = document.createElement("style");
      c.textContent = `.tiptap { ${u} }`, c.dataset.source = o, l.appendChild(c), i.value.push(c), s.value.push(o);
    }
    return Ds(() => {
      i.value.forEach((o) => {
        o.parentNode && o.parentNode.removeChild(o);
      });
    }), (o, l) => (J(), at("div", {
      ref_key: "componentRef",
      ref: n
    }, null, 512));
  }
}), lv = Yo({
  id: Xn(),
  contentCss: Go(Xn()).optional(),
  plugins: Go(
    Yo({
      path: Xn(),
      config: Cd(
        Xn(),
        Ed()
      ).optional()
    })
  ).optional(),
  enableContentDragAndDrop: Jo().default(!1),
  linkBrowserUrl: Xn(),
  enableDebugMode: Jo().default(!1)
}), av = {
  key: 0,
  class: "tiptap-container"
}, cv = {
  key: 0,
  class: "tiptap-toolbar"
}, uv = {
  key: 0,
  class: "tiptap-toolbar__group"
}, dv = { key: 0 }, fv = ["title", "disabled", "onClick"], hv = { class: "tiptap-sr-only" }, pv = { key: 1 }, gv = { class: "tiptap-bubble-menu" }, mv = {
  key: 0,
  class: "tiptap-toolbar__group"
}, wv = { key: 0 }, bv = ["title", "disabled", "onClick"], vv = { class: "tiptap-sr-only" }, yv = { key: 5 }, xv = /* @__PURE__ */ Jt({
  __name: "TipTapEditor.ce",
  props: {
    options: { type: String }
  },
  setup(e) {
    const t = e, n = w(), s = y(n), i = Z(), r = Z(), o = Z(), l = Z(), a = Z(), u = Z(!1), c = Z(0), d = Z(!1), f = Z(!1), h = At(() => !r.value || u.value || d.value ? !1 : r.value.bubbleMenu.some((T) => T.commands.length > 0)), p = At(() => s.filter(
      (T) => T.element.toLowerCase() === a.value?.tagName.toLowerCase()
    ));
    function w() {
      try {
        const T = JSON.parse(t.options || "{}"), $ = lv.safeParse(T);
        if (!$.success)
          throw new Error(`Invalid options: ${JSON.stringify($.error.issues)}`);
        return $.data;
      } catch (T) {
        throw new Error(`Failed to parse options: ${T.message}`);
      }
    }
    function y(T) {
      const $ = T.plugins?.find((M) => M.path.endsWith("styles.js") || M.path.endsWith("styles.ts"));
      if (!$)
        return [];
      const R = Sd.safeParse($.config);
      if (!R.success)
        throw new Error(`Invalid styles plugin config: ${JSON.stringify(R.error.issues)}`);
      return R.data.styles;
    }
    function b(T) {
      return T.replace(/(\s*<p>(\s|&nbsp;)*<\/p>)+\s*$/, "");
    }
    function O() {
      if (!i.value)
        throw new Error("Editor is not initialized yet.");
      if (!r.value)
        throw new Error("Configuration is not initialized yet.");
      const T = [];
      r.value.toolbar.forEach(($) => {
        $.commands.forEach((R) => {
          R.hooks && R.hooks.onEditorMounted && !T.includes(R.id) && (R.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), T.push(R.id));
        });
      }), r.value.bubbleMenu.forEach(($) => {
        $.commands.forEach((R) => {
          R.hooks && R.hooks.onEditorMounted && !T.includes(R.id) && (R.hooks.onEditorMounted({
            editor: i.value,
            linkBrowserUrl: n.linkBrowserUrl
          }), T.push(R.id));
        });
      });
    }
    async function N() {
      return Promise.all(
        n.plugins?.map(async (T) => {
          const $ = await import(
            /* @vite-ignore */
            T.path
          );
          if (!$.default || typeof $.default != "function")
            throw new Error(`Plugin ${T.path} does not have a default export or it is not a function.`);
          return $.default(T.config);
        }) ?? []
      );
    }
    function E(T) {
      return u.value && T.id !== "source" ? !0 : T?.status?.isDisabled?.({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) ?? !1;
    }
    function B(T) {
      return T.status && T.status.isVisible ? T.status.isVisible({
        editor: i.value,
        linkBrowserUrl: n.linkBrowserUrl
      }) : !0;
    }
    return sn(async () => {
      const T = await N();
      r.value = Ad(T), await Ft();
      const $ = o.value?.assignedElements()[0];
      if (!$ || !($ instanceof HTMLTextAreaElement))
        throw new Error('No textarea found in slot "content".');
      l.value = $;
      const R = new Event("change", { bubbles: !0, cancelable: !0 });
      i.value = new ub({
        content: l.value.value,
        extensions: [
          cb.configure({
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
          qw,
          ...r.value?.extensions ?? []
        ],
        onUpdate: () => {
          !i.value || !l.value || (u.value = ef(i.value), l.value.value = u.value ? i.value.getText() : b(i.value.getHTML()), l.value.dispatchEvent(R));
        }
      }), i.value.on("parentNodeChanged", (x) => {
        x.tagName === "doc" ? a.value = void 0 : a.value = x;
      });
      const M = i.value?.extensionManager?.extensions.find(
        (x) => x.name === "characterCount"
      );
      M && M.options.limit && (f.value = {
        characterLimit: M.options.limit
      }), O();
    }), Ds(() => i.value?.destroy()), (T, $) => (J(), at(ft, null, [
      i.value ? (J(), at("div", av, [
        r.value.toolbar.some((R) => R.commands.length > 0) ? (J(), at("nav", cv, [
          (J(!0), at(ft, null, es(r.value.toolbar, (R, M) => (J(), at(ft, {
            key: `tiptap-command-group-${M}`
          }, [
            R.commands.length > 0 ? (J(), at("ol", uv, [
              R.dropdown ? (J(), at("li", dv, [
                (J(), Zt(Ta, {
                  key: u.value,
                  label: R.dropdown.label,
                  "editor-dom-node": i.value.view.dom,
                  "icon-identifier": R.dropdown.iconIdentifier,
                  items: R.commands.filter(B).map((x) => ({
                    label: x.label,
                    isActive: x?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl }) ?? !1,
                    isDisabled: E(x),
                    icon: x.iconIdentifier,
                    action: () => x.onExecute({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl })
                  }))
                }, null, 8, ["label", "editor-dom-node", "icon-identifier", "items"]))
              ])) : (J(!0), at(ft, { key: 1 }, es(R.commands, (x) => (J(), at("li", {
                key: `tiptap-group-${R.id}-command-${x.id}`
              }, [
                B(x) ? (J(), at("button", {
                  key: u.value,
                  title: x.label,
                  class: Oe(["tiptap-toolbar__group-command", {
                    "is-active": x?.status?.isActive?.({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl }) ?? !1
                  }]),
                  disabled: E(x),
                  onClick: (V) => x.onExecute({ editor: i.value, linkBrowserUrl: ut(n).linkBrowserUrl })
                }, [
                  Rt("span", hv, Ge(x.label), 1),
                  dt(Ti, {
                    icon: x.iconIdentifier,
                    size: "16px"
                  }, null, 8, ["icon"])
                ], 10, fv)) : ne("", !0)
              ]))), 128))
            ])) : ne("", !0)
          ], 64))), 128))
        ])) : ne("", !0),
        r.value && h.value ? (J(), at("nav", pv, [
          dt(ut(gb), {
            editor: i.value,
            options: {
              onHide: () => c.value += 1
            }
          }, {
            default: qe(() => [
              Rt("div", gv, [
                (J(!0), at(ft, null, es(r.value.bubbleMenu, (R, M) => (J(), at(ft, {
                  key: `tiptap-command-group-${M}`
                }, [
                  R.commands.some((x) => B(x)) ? (J(), at("ol", mv, [
                    R.dropdown ? (J(), at("li", wv, [
                      (J(), Zt(Ta, {
                        key: `${u.value}-${c.value}`,
                        label: R.dropdown.label,
                        "icon-identifier": R.dropdown.iconIdentifier,
                        "editor-dom-node": i.value.view.dom,
                        items: R.commands.filter(B).map((x) => ({
                          label: x.label,
                          isActive: x?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          }) ?? !1,
                          isDisabled: E(x),
                          icon: x.iconIdentifier,
                          action: () => x.onExecute({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          })
                        }))
                      }, null, 8, ["label", "icon-identifier", "editor-dom-node", "items"]))
                    ])) : (J(!0), at(ft, { key: 1 }, es(R.commands, (x) => of((J(), at("li", {
                      key: `tiptap-group-${R.id}-command-${x.id}`
                    }, [
                      (J(), at("button", {
                        key: u.value,
                        title: x.label,
                        class: Oe(["tiptap-toolbar__group-command", {
                          "is-active": x?.status?.isActive?.({
                            editor: i.value,
                            linkBrowserUrl: ut(n).linkBrowserUrl
                          }) ?? !1
                        }]),
                        disabled: E(x),
                        onClick: (V) => x.onExecute({
                          editor: i.value,
                          linkBrowserUrl: ut(n).linkBrowserUrl
                        })
                      }, [
                        Rt("span", vv, Ge(x.label), 1),
                        dt(Ti, {
                          icon: x.iconIdentifier,
                          size: "16px"
                        }, null, 8, ["icon"])
                      ], 10, bv))
                    ])), [
                      [Ah, B(x)]
                    ])), 128))
                  ])) : ne("", !0)
                ], 64))), 128))
              ])
            ]),
            _: 1
          }, 8, ["editor", "options"])
        ])) : ne("", !0),
        ut(n).enableContentDragAndDrop ? (J(), Zt(ut(_w), {
          key: 2,
          editor: i.value
        }, {
          default: qe(() => [...$[0] || ($[0] = [
            Rt("div", { class: "custom-drag-handle" }, null, -1)
          ])]),
          _: 1
        }, 8, ["editor"])) : ne("", !0),
        dt(ut(db), {
          editor: i.value,
          class: Oe([{
            "pl-9": ut(n).enableContentDragAndDrop
          }, "tiptap-editor-content"])
        }, null, 8, ["editor", "class"]),
        f.value ? (J(), Zt(bb, {
          key: 3,
          editor: i.value,
          limit: f.value.characterLimit
        }, null, 8, ["editor", "limit"])) : ne("", !0),
        ut(n) && ut(n).contentCss ? (J(), Zt(ov, {
          key: 4,
          stylesheets: ut(n).contentCss
        }, null, 8, ["stylesheets"])) : ne("", !0),
        ut(n).enableDebugMode ? (J(), at("pre", yv, Ge(p.value), 1)) : ne("", !0)
      ])) : ne("", !0),
      Ef(T.$slots, "default", {
        ref_key: "slotRef",
        ref: o
      })
    ], 64));
  }
}), kv = '@charset "UTF-8";.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.tiptap-container{--tiptap-color-primary: light-dark(hsl(220deg 90% 56%), hsl(220deg 90% 66%));--tiptap-color-neutral-white: hsl(0deg 0% 100%);--tiptap-color-neutral-10: hsl(0deg 0% 10%);--tiptap-color-neutral-20: hsl(0deg 0% 20%);--tiptap-color-neutral-40: hsl(0deg 0% 40%);--tiptap-color-neutral-80: hsl(0deg 0% 80%);--tiptap-color-neutral-90: hsl(0deg 0% 90%);--tiptap-color-surface: light-dark(var(--tiptap-color-neutral-white), var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));--tiptap-color-border: var(--typo3-input-border-color);--tiptap-color-text-subtle: light-dark(var(--tiptap-color-neutral-40), var(--tiptap-color-neutral-80));--tiptap-border-width: var(--typo3-input-border-width);--tiptap-border-radius: var(--typo3-input-border-radius);--tiptap-border-radius-inner-gap: .25rem;--tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap: .25rem;--tiptap-box-shadow: 0 .1rem .3rem rgb(0 0 0 / .1);border:var(--tiptap-border-width) solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){padding:0;color:inherit;background-color:transparent;border:none}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(black,white)}.tiptap{padding:3rem;min-block-size:20rem;outline:none}.tiptap :first-child{margin-block-start:0}.tiptap-editor-content{overflow:hidden;position:relative}.tiptap-toolbar{display:flex;flex-wrap:wrap;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-border)}.tiptap-toolbar__group{display:flex;flex-wrap:wrap;gap:var(--tiptap-toolbar-gap);margin:0;padding:0;list-style:none}.tiptap-toolbar__group:not(:last-child){margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap);border-inline-end:1px solid var(--tiptap-color-border)}.tiptap-toolbar__group-command{padding:.5rem;border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1/1;block-size:100%;transition:ease .15s;transition-property:background-color,color,transform}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl,var(--tiptap-color-surface-highlight) 50%,transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{inline-size:100%;block-size:100%}.tiptap-bubble-menu{display:flex;padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap);margin-inline:1rem}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation: 0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation: 180deg}.tiptap-dropdown__button{display:inline-flex;align-items:center;justify-content:space-between;padding:.5rem;background-color:transparent;gap:.25rem;border:none;cursor:pointer;transition:color .2s ease-in-out,transform .1s ease-in-out}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size: .9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:center;transition:transform .2s ease-in-out}.tiptap-dropdown__content{display:grid;position:absolute;padding-block:.25rem;background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{inset-inline-start:0;transform-origin:top left}.tiptap-dropdown__content--bottom-right{inset-inline-end:0;transform-origin:top right}.tiptap-dropdown__content-button{display:flex;align-items:center;padding:.5rem 1rem;gap:.5rem;cursor:pointer}.tiptap-dropdown__content-button>*{flex-shrink:0;text-wrap:nowrap}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection *::selection{background:transparent}.ProseMirror-noderangeselection *{caret-color:transparent}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{position:absolute;pointer-events:none;z-index:-1;content:"";inset:-.25rem;background-color:#70cff850;border-radius:.2rem}.custom-drag-handle:after{display:flex;align-items:center;justify-content:center;width:1rem;height:1.25rem;margin-inline-end:.5rem;padding:.25rem .1rem;content:"⠿";font-weight:700;cursor:grab;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;transition:background-color .2s ease-in-out}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:1.25rem}.transition-dropdown{--scale: 1;--translate-y: 0;--opacity: 1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale: .95;--opacity: 1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale: 1;--opacity: 1}.transition-dropdown-leave-to{--scale: .95;--opacity: 0}.tiptap-character-count{align-items:center;color:var(--tiptap-color-text-subtle);display:flex;font-size:.75rem;gap:.5rem;margin:1.25rem .75rem}.tiptap-character-count svg{color:var(--token-color-orange-40)}.tiptap-character-count--warning,.tiptap-character-count--warning svg{color:var(--bs-danger)}table{border-collapse:collapse;margin:0;overflow:hidden;table-layout:fixed;width:100%}table td,table th{border:var(--tiptap-border-width) solid var(--tiptap-color-border);box-sizing:border-box;min-width:1em;padding:6px 8px;position:relative;vertical-align:top}table td>*,table th>*{margin-bottom:0}table th{background-color:var(--tiptap-color-surface-highlight);font-weight:700;text-align:left}table .selectedCell:after{background:var(--typo3-surface-container-info);content:"";inset:0;pointer-events:none;position:absolute;z-index:2}table .column-resize-handle{background-color:var(--typo3-surface-container-info);bottom:-2px;pointer-events:none;position:absolute;right:-2px;top:0;width:4px}.tableWrapper{margin:1.5rem 0;overflow-x:auto}.tiptap.resize-cursor{cursor:ew-resize;cursor:col-resize}', _v = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Sv = /* @__PURE__ */ _v(xv, [["styles", [kv]]]), Cv = /* @__PURE__ */ Uh(Sv);
customElements.define("editor-tiptap", Cv);
export {
  Yv as CommandManager,
  Bd as Editor,
  Jv as Extendable,
  As as Extension,
  Gv as Fragment,
  Xv as InputRule,
  Dd as MappablePosition,
  Fa as Mark,
  Qv as MarkView,
  Un as Node,
  Zv as NodePos,
  ty as NodeView,
  ey as PasteRule,
  ny as ResizableNodeView,
  sy as ResizableNodeview,
  iy as Tracker,
  ry as callOrReturn,
  Pd as canInsertNode,
  oy as combineTransactionSteps,
  ly as commands,
  ay as createAtomBlockMarkdownSpec,
  cy as createBlockMarkdownSpec,
  uy as createChainableState,
  dy as createDocument,
  fy as createElement,
  hy as createInlineMarkdownSpec,
  py as createMappablePosition,
  gy as createNodeFromContent,
  my as createStyleTag,
  wy as defaultBlockAt,
  Wv as defineTipTapPlugin,
  by as deleteProps,
  vy as elementFromString,
  yy as escapeForRegEx,
  xy as extensions,
  ky as findChildren,
  _y as findChildrenInRange,
  Sy as findDuplicates,
  Cy as findParentNode,
  Ey as findParentNodeClosestToPos,
  Ay as flattenExtensions,
  Ty as fromString,
  My as generateHTML,
  Dy as generateJSON,
  Oy as generateText,
  Iy as getAttributes,
  Ry as getAttributesFromExtensions,
  Ly as getChangedRanges,
  Py as getDebugJSON,
  Ny as getExtensionField,
  By as getHTMLFromFragment,
  $y as getMarkAttributes,
  Hy as getMarkRange,
  Fy as getMarkType,
  Vy as getMarksBetween,
  Uy as getNodeAtPosition,
  jy as getNodeAttributes,
  zy as getNodeType,
  Wy as getRenderedAttributes,
  Ky as getSchema,
  qy as getSchemaByResolvedExtensions,
  Yy as getSchemaTypeByName,
  Jy as getSchemaTypeNameByName,
  Gy as getSplittedAttributes,
  Xy as getText,
  Qy as getTextBetween,
  Zy as getTextContentFromNodes,
  t1 as getTextSerializersFromSchema,
  Md as getUpdatedPosition,
  e1 as h,
  n1 as injectExtensionAttributesToParseRule,
  s1 as inputRulesPlugin,
  i1 as isActive,
  r1 as isAndroid,
  o1 as isAtEndOfNode,
  l1 as isAtStartOfNode,
  a1 as isEmptyObject,
  c1 as isExtensionRulesEnabled,
  u1 as isFirefox,
  d1 as isFunction,
  f1 as isList,
  h1 as isMacOS,
  p1 as isMarkActive,
  g1 as isNodeActive,
  m1 as isNodeEmpty,
  Nd as isNodeSelection,
  w1 as isNumber,
  b1 as isPlainObject,
  v1 as isRegExp,
  y1 as isSafari,
  x1 as isString,
  $d as isTextSelection,
  k1 as isiOS,
  Ua as markInputRule,
  Va as markPasteRule,
  _1 as markdown,
  Vn as mergeAttributes,
  S1 as mergeDeep,
  C1 as minMax,
  Ld as nodeInputRule,
  E1 as nodePasteRule,
  A1 as objectIncludes,
  T1 as parseAttributes,
  M1 as parseIndentedBlocks,
  Kv as parseTipTapPluginYamlConfiguration,
  D1 as pasteRulesPlugin,
  Hd as posToDOMRect,
  O1 as removeDuplicates,
  I1 as renderNestedMarkdownContent,
  R1 as resolveExtensions,
  L1 as resolveFocusPosition,
  P1 as rewriteUnknownContent,
  N1 as selectionToInsertionEnd,
  B1 as serializeAttributes,
  $1 as sortExtensions,
  H1 as splitExtensions,
  ht as textInputRule,
  F1 as textPasteRule,
  Qo as textblockTypeInputRule,
  V1 as updateMarkViewAttributes,
  U1 as wrappingInputRule
};
