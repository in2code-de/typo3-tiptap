import { a as e, c as t, i as n, l as r, n as i, o as a, r as o, s, t as c } from "./configuration-BT9xaJ2A.js";
import { $ as l, A as u, B as d, C as f, D as p, E as m, F as h, G as g, H as _, I as v, J as y, K as b, L as x, M as S, N as C, O as w, P as T, Q as E, R as ee, S as D, T as te, U as O, V as ne, W as k, X as re, Y as ie, Z as ae, _ as A, a as oe, at as se, b as ce, c as le, d as ue, et as de, f as fe, g as pe, h as me, i as he, it as ge, j, k as _e, l as ve, m as ye, n as be, nt as xe, o as Se, ot as Ce, p as we, q as Te, rt as Ee, s as De, st as Oe, t as ke, tt as Ae, u as je, v as Me, w as Ne, x as Pe, y as Fe, z as M } from "./styles-BrKaae6w.js";
import { $ as Ie, $t as Le, A as Re, An as ze, At as Be, B as Ve, Bt as He, C as Ue, Cn as We, Ct as Ge, D as Ke, Dt as qe, E as Je, Et as Ye, F as Xe, Ft as Ze, G as Qe, Gt as $e, H as et, Ht as tt, I as nt, It as rt, J as it, Jt as at, K as ot, Kt as st, L as ct, Lt as lt, M as ut, Mt as dt, N as ft, Nt as pt, O as mt, Ot as ht, P as gt, Pt as _t, Q as vt, Qt as yt, R as bt, Rt as xt, S as St, Sn as Ct, St as wt, T as Tt, Tn as Et, Tt as Dt, U as Ot, Ut as kt, V as At, Vt as jt, W as Mt, Wt as Nt, X as Pt, Xt as Ft, Y as It, Yt as Lt, Z as Rt, Zt as zt, _ as Bt, _n as Vt, _t as Ht, a as Ut, an as Wt, at as Gt, b as Kt, bn as qt, bt as Jt, c as Yt, cn as Xt, ct as Zt, d as Qt, dn as N, dt as $t, en, et as tn, f as nn, fn as rn, ft as an, g as on, gt as sn, h as cn, hn as ln, ht as un, i as dn, in as fn, it as pn, j as mn, jn as hn, jt as gn, k as _n, kn as vn, kt as yn, l as bn, ln as xn, lt as Sn, m as Cn, mn as wn, mt as Tn, n as En, nn as Dn, nt as On, o as kn, on as An, ot as jn, p as Mn, pn as Nn, pt as Pn, q as Fn, qt as In, r as Ln, rn as Rn, rt as zn, s as Bn, sn as Vn, st as Hn, t as Un, tn as Wn, tt as Gn, u as Kn, un as qn, ut as Jn, v as Yn, vn as Xn, vt as Zn, w as Qn, wn as $n, wt as er, x as tr, xn as nr, xt as rr, y as ir, yn as ar, yt as or, z as sr, zt as cr } from "./dist-BppL3qHu.js";
import { t as lr } from "./dist-CqIetMmg.js";
import { t as ur } from "./dist-BpFqfqnc.js";
import { t as dr } from "./dist-23jRIzE5.js";
import { t as fr } from "./dist-D5bVvPqr.js";
import { t as pr } from "./dist-91yalACB.js";
import { i as mr, n as hr, r as gr, t as _r } from "./dist-CAgHnqBy.js";
import { t as vr } from "./dist-BWgsjEEi.js";
import { a as yr, i as br, n as xr, r as Sr } from "./dist-BmtwYQ_m.js";
import { t as Cr } from "./tables-NWFOyHuO.js";
import { t as wr } from "./source-view-CBKUoe0j.js";
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Tr(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Dr(e, t, n);
	}
}
function Er(e, t, n, r) {
	if (k(e)) {
		let i = Tr(e, t, n, r);
		return i && ie(i) && i.catch((e) => {
			Dr(e, t, n);
		}), i;
	}
	if (O(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Er(e[a], t, n, r));
		return i;
	}
}
function Dr(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || j;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			ye(), Tr(a, null, 10, [
				e,
				i,
				o
			]), Me();
			return;
		}
	}
	Or(e, n, i, r, o);
}
function Or(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var kr = [], Ar = -1, jr = [], Mr = null, Nr = 0, Pr = /* @__PURE__ */ Promise.resolve(), Fr = null;
function Ir(e) {
	let t = Fr || Pr;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lr(e) {
	let t = Ar + 1, n = kr.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = kr[r], a = Ur(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Rr(e) {
	if (!(e.flags & 1)) {
		let t = Ur(e), n = kr[kr.length - 1];
		!n || !(e.flags & 2) && t >= Ur(n) ? kr.push(e) : kr.splice(Lr(t), 0, e), e.flags |= 1, zr();
	}
}
function zr() {
	Fr ||= Pr.then(Wr);
}
function Br(e) {
	O(e) ? jr.push(...e) : Mr && e.id === -1 ? Mr.splice(Nr + 1, 0, e) : e.flags & 1 || (jr.push(e), e.flags |= 1), zr();
}
function Vr(e, t, n = Ar + 1) {
	for (; n < kr.length; n++) {
		let t = kr[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			kr.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Hr(e) {
	if (jr.length) {
		let e = [...new Set(jr)].sort((e, t) => Ur(e) - Ur(t));
		if (jr.length = 0, Mr) {
			Mr.push(...e);
			return;
		}
		for (Mr = e, Nr = 0; Nr < Mr.length; Nr++) {
			let e = Mr[Nr];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Mr = null, Nr = 0;
	}
}
var Ur = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Wr(e) {
	try {
		for (Ar = 0; Ar < kr.length; Ar++) {
			let e = kr[Ar];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Tr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Ar < kr.length; Ar++) {
			let e = kr[Ar];
			e && (e.flags &= -2);
		}
		Ar = -1, kr.length = 0, Hr(e), Fr = null, (kr.length || jr.length) && Wr(e);
	}
}
var P = null, Gr = null;
function Kr(e) {
	let t = P;
	return P = e, Gr = e && e.type.__scopeId || null, t;
}
function qr(e, t = P, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && xo(-1);
		let i = Kr(t), a;
		try {
			a = e(...n);
		} finally {
			Kr(i), r._d && xo(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Jr(e, t) {
	if (P === null) return e;
	let n = is(P), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = j] = t[e];
		i && (k(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && m(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function Yr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (ye(), Er(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Me());
	}
}
function Xr(e, t) {
	if (Ho) {
		let n = Ho.provides, r = Ho.parent && Ho.parent.provides;
		r === n && (n = Ho.provides = Object.create(r)), n[e] = t;
	}
}
function Zr(e, t, n = !1) {
	let r = Uo();
	if (r || wa) {
		let i = wa ? wa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && k(t) ? t.call(r && r.proxy) : t;
	}
}
var Qr = /* @__PURE__ */ Symbol.for("v-scx"), $r = () => Zr(Qr);
function ei(e, t) {
	return ni(e, null, t);
}
function ti(e, t, n) {
	return ni(e, t, n);
}
function ni(e, t, n = j) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = x({}, n), c = t && r || !t && a !== "post", l;
	if (Yo) {
		if (a === "sync") {
			let e = $r();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = C, e.resume = C, e.pause = C, e;
		}
	}
	let u = Ho;
	s.call = (e, t, n) => Er(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		to(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Rr(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = _e(e, t, s);
	return Yo && (l ? l.push(f) : c && f()), f;
}
function ri(e, t, n) {
	let r = this.proxy, i = E(e) ? e.includes(".") ? ii(r, e) : () => r[e] : e.bind(r, r), a;
	k(t) ? a = t : (a = t.handler, n = t);
	let o = Ko(this), s = ni(i, a.bind(r), n);
	return o(), s;
}
function ii(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var ai = /* @__PURE__ */ Symbol("_vte"), oi = (e) => e.__isTeleport, si = /* @__PURE__ */ Symbol("_leaveCb"), ci = /* @__PURE__ */ Symbol("_enterCb");
function li() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Ri(() => {
		e.isMounted = !0;
	}), Vi(() => {
		e.isUnmounting = !0;
	}), e;
}
var ui = [Function, Array], di = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ui,
	onEnter: ui,
	onAfterEnter: ui,
	onEnterCancelled: ui,
	onBeforeLeave: ui,
	onLeave: ui,
	onAfterLeave: ui,
	onLeaveCancelled: ui,
	onBeforeAppear: ui,
	onAppear: ui,
	onAfterAppear: ui,
	onAppearCancelled: ui
}, fi = (e) => {
	let t = e.subTree;
	return t.component ? fi(t.component) : t;
}, pi = {
	name: "BaseTransition",
	props: di,
	setup(e, { slots: t }) {
		let n = Uo(), r = li();
		return () => {
			let i = t.default && xi(t.default(), !0), a = i && i.length ? mi(i) : n.subTree ? No() : void 0;
			if (!a) return;
			let o = D(e), { mode: s } = o;
			if (r.isLeaving) return vi(a);
			let c = yi(a);
			if (!c) return vi(a);
			let l = _i(c, o, r, n, (e) => l = e);
			c.type !== I && bi(c, l);
			let u = n.subTree && yi(n.subTree);
			if (u && u.type !== I && !To(u, c) && fi(n).type !== I) {
				let e = _i(u, o, r, n);
				if (bi(u, e), s === "out-in" && c.type !== I) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, vi(a);
				s === "in-out" && c.type !== I ? e.delayLeave = (e, t, n) => {
					let i = gi(r, u);
					i[String(u.key)] = u, e[si] = () => {
						t(), e[si] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function mi(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== I) {
			t = n;
			break;
		}
	}
	return t;
}
var hi = pi;
function gi(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function _i(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), x = gi(n, e), S = (e, t) => {
		e && Er(e, r, 9, t);
	}, C = (e, t) => {
		let n = t[1];
		S(e, t), O(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, w = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) if (a) r = g || c;
			else return;
			t[si] && t[si](!0);
			let i = x[b];
			i && To(e, i) && i.el[si] && i.el[si](), S(r, [t]);
		},
		enter(t) {
			if (x[b] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = _ || l, i = v || u, o = y || d;
			else return;
			let s = !1;
			t[ci] = (e) => {
				s || (s = !0, S(e ? o : i, [t]), w.delayedLeave && w.delayedLeave(), t[ci] = void 0);
			};
			let c = t[ci].bind(null, !1);
			r ? C(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[ci] && t[ci](!0), n.isUnmounting) return r();
			S(f, [t]);
			let a = !1;
			t[si] = (n) => {
				a || (a = !0, r(), S(n ? h : m, [t]), t[si] = void 0, x[i] === e && delete x[i]);
			};
			let o = t[si].bind(null, !1);
			x[i] = e, p ? C(p, [t, o]) : o();
		},
		clone(e) {
			let a = _i(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return w;
}
function vi(e) {
	if (Ai(e)) return e = jo(e), e.children = null, e;
}
function yi(e) {
	if (!Ai(e)) return oi(e.type) && e.children ? mi(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && k(n.default)) return n.default();
	}
}
function bi(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, bi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xi(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === F ? (o.patchFlag & 128 && i++, r = r.concat(xi(o.children, t, s))) : (t || o.type !== I) && r.push(s == null ? o : jo(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function Si(e, t) {
	return k(e) ? x({ name: e.name }, t, { setup: e }) : e;
}
function Ci() {
	let e = Uo();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function wi(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Ti(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Ei = /* @__PURE__ */ new WeakMap();
function Di(e, t, n, r, i = !1) {
	if (O(e)) {
		e.forEach((e, a) => Di(e, t && (O(t) ? t[a] : t), n, r, i));
		return;
	}
	if (ki(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Di(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? is(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === j ? s.refs = {} : s.refs, d = s.setupState, f = D(d), p = d === j ? S : (e) => Ti(u, e) ? !1 : M(f, e), m = (e, t) => !(t && Ti(u, t));
	if (l != null && l !== c) {
		if (Oi(t), E(l)) u[l] = null, p(l) && (d[l] = null);
		else if (ue(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (k(c)) Tr(c, s, 12, [o, u]);
	else {
		let t = E(c), r = ue(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) O(n) && ge(n, a);
					else if (O(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Ei.delete(e);
				};
				t.id = -1, Ei.set(e, t), to(t, n);
			} else Oi(e), s();
		}
	}
}
function Oi(e) {
	let t = Ei.get(e);
	t && (t.flags |= 8, Ei.delete(e));
}
ee().requestIdleCallback, ee().cancelIdleCallback;
var ki = (e) => !!e.type.__asyncLoader, Ai = (e) => e.type.__isKeepAlive;
function ji(e, t) {
	Ni(e, "a", t);
}
function Mi(e, t) {
	Ni(e, "da", t);
}
function Ni(e, t, n = Ho) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Fi(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Ai(e.parent.vnode) && Pi(r, t, n, e), e = e.parent;
	}
}
function Pi(e, t, n, r) {
	let i = Fi(t, e, r, !0);
	Hi(() => {
		ge(r[t], i);
	}, n);
}
function Fi(e, t, n = Ho, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			ye();
			let i = Ko(n), a = Er(t, n, e, r);
			return i(), Me(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Ii = (e) => (t, n = Ho) => {
	(!Yo || e === "sp") && Fi(e, (...e) => t(...e), n);
}, Li = Ii("bm"), Ri = Ii("m"), zi = Ii("bu"), Bi = Ii("u"), Vi = Ii("bum"), Hi = Ii("um"), Ui = Ii("sp"), Wi = Ii("rtg"), Gi = Ii("rtc");
function Ki(e, t = Ho) {
	Fi("ec", e, t);
}
var qi = "components", Ji = /* @__PURE__ */ Symbol.for("v-ndc");
function Yi(e) {
	return E(e) ? Xi(qi, e, !1) || e : e || Ji;
}
function Xi(e, t, n = !0, r = !1) {
	let i = P || Ho;
	if (i) {
		let n = i.type;
		if (e === qi) {
			let e = as(n, !1);
			if (e && (e === t || e === T(t) || e === h(T(t)))) return n;
		}
		let a = Zi(i[e] || n[e], t) || Zi(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Zi(e, t) {
	return e && (e[t] || e[T(t)] || e[h(T(t))]);
}
function Qi(e, t, n, r) {
	let i, a = n && n[r], o = O(e);
	if (o || E(e)) {
		let n = o && ve(e), r = !1, s = !1;
		n && (r = !fe(e), s = je(e), e = ce(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ne(f(e[n])) : f(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (b(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function $i(e, t, n = {}, r, i) {
	if (P.ce || P.parent && ki(P.parent) && P.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), L(), Co(F, null, [z("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), L();
	let o = a && ea(a(n)), s = n.key || o && o.key, c = Co(F, { key: (s && !l(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function ea(e) {
	return e.some((e) => wo(e) ? !(e.type === I || e.type === F && !ea(e.children)) : !0) ? e : null;
}
var ta = (e) => e ? Jo(e) ? is(e) : ta(e.parent) : null, na = /* @__PURE__ */ x(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => ta(e.parent),
	$root: (e) => ta(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => da(e),
	$forceUpdate: (e) => e.f ||= () => {
		Rr(e.update);
	},
	$nextTick: (e) => e.n ||= Ir.bind(e.proxy),
	$watch: (e) => ri.bind(e)
}), ra = (e, t) => e !== j && !e.__isScriptSetup && M(e, t), ia = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (ra(r, t)) return o[t] = 1, r[t];
			else if (i !== j && M(i, t)) return o[t] = 2, i[t];
			else if (M(a, t)) return o[t] = 3, a[t];
			else if (n !== j && M(n, t)) return o[t] = 4, n[t];
			else oa && (o[t] = 0);
		}
		let l = na[t], u, d;
		if (l) return t === "$attrs" && te(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== j && M(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, M(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return ra(i, t) ? (i[t] = n, !0) : r !== j && M(r, t) ? (r[t] = n, !0) : M(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== j && s[0] !== "$" && M(e, s) || ra(t, s) || M(a, s) || M(r, s) || M(na, s) || M(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? M(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function aa(e) {
	return O(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var oa = !0;
function sa(e) {
	let t = da(e), n = e.proxy, r = e.ctx;
	oa = !1, t.beforeCreate && la(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: _, beforeUnmount: v, destroyed: y, unmounted: x, render: S, renderTracked: w, renderTriggered: T, errorCaptured: E, serverPrefetch: ee, expose: D, inheritAttrs: te, components: ne, directives: re, filters: ie } = t;
	if (l && ca(l, r, null), o) for (let e in o) {
		let t = o[e];
		k(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = pe(t));
	}
	if (oa = !0, a) for (let e in a) {
		let t = a[e], i = ss({
			get: k(t) ? t.bind(n, n) : k(t.get) ? t.get.bind(n, n) : C,
			set: !k(t) && k(t.set) ? t.set.bind(n) : C
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) ua(s[e], r, n, e);
	if (c) {
		let e = k(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Xr(t, e[t]);
		});
	}
	u && la(u, e, "c");
	function ae(e, t) {
		O(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ae(Li, d), ae(Ri, f), ae(zi, p), ae(Bi, m), ae(ji, h), ae(Mi, g), ae(Ki, E), ae(Gi, w), ae(Wi, T), ae(Vi, v), ae(Hi, x), ae(Ui, ee), O(D)) if (D.length) {
		let t = e.exposed ||= {};
		D.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	S && e.render === C && (e.render = S), te != null && (e.inheritAttrs = te), ne && (e.components = ne), re && (e.directives = re), ee && wi(e);
}
function ca(e, t, n = C) {
	O(e) && (e = ga(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Zr(r.from || n, r.default, !0) : Zr(r.from || n) : Zr(r), ue(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function la(e, t, n) {
	Er(O(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ua(e, t, n, r) {
	let i = r.includes(".") ? ii(n, r) : () => n[r];
	if (E(e)) {
		let n = t[e];
		k(n) && ti(i, n);
	} else if (k(e)) ti(i, e.bind(n));
	else if (b(e)) if (O(e)) e.forEach((e) => ua(e, t, n, r));
	else {
		let r = k(e.handler) ? e.handler.bind(n) : t[e.handler];
		k(r) && ti(i, r, e);
	}
}
function da(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => fa(c, e, o, !0)), fa(c, t, o)), b(t) && a.set(t, c), c;
}
function fa(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && fa(e, a, n, !0), i && i.forEach((t) => fa(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = pa[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var pa = {
	data: ma,
	props: ya,
	emits: ya,
	methods: va,
	computed: va,
	beforeCreate: _a,
	created: _a,
	beforeMount: _a,
	mounted: _a,
	beforeUpdate: _a,
	updated: _a,
	beforeDestroy: _a,
	beforeUnmount: _a,
	destroyed: _a,
	unmounted: _a,
	activated: _a,
	deactivated: _a,
	errorCaptured: _a,
	serverPrefetch: _a,
	components: va,
	directives: va,
	watch: ba,
	provide: ma,
	inject: ha
};
function ma(e, t) {
	return t ? e ? function() {
		return x(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t);
	} : t : e;
}
function ha(e, t) {
	return va(ga(e), ga(t));
}
function ga(e) {
	if (O(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function _a(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function va(e, t) {
	return e ? x(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ya(e, t) {
	return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : x(/* @__PURE__ */ Object.create(null), aa(e), aa(t ?? {})) : t;
}
function ba(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = x(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = _a(e[r], t[r]);
	return n;
}
function xa() {
	return {
		app: null,
		config: {
			isNativeTag: S,
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
var Sa = 0;
function Ca(e, t) {
	return function(n, r = null) {
		k(n) || (n = x({}, n)), r != null && !b(r) && (r = null);
		let i = xa(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Sa++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ls,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && k(e.install) ? (a.add(e), e.install(c, ...t)) : k(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || z(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, is(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Er(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = wa;
				wa = c;
				try {
					return e();
				} finally {
					wa = t;
				}
			}
		};
		return c;
	};
}
var wa = null, Ta = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${d(t)}Modifiers`];
function Ea(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || j, i = n, a = t.startsWith("update:"), o = a && Ta(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => E(e) ? e.trim() : e)), o.number && (i = n.map(Ae)));
	let s, c = r[s = Ce(t)] || r[s = Ce(T(t))];
	!c && a && (c = r[s = Ce(d(t))]), c && Er(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Er(l, e, 6, i);
	}
}
var Da = /* @__PURE__ */ new WeakMap();
function Oa(e, t, n = !1) {
	let r = n ? Da : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!k(e)) {
		let r = (e) => {
			let n = Oa(e, t, !0);
			n && (s = !0, x(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (O(a) ? a.forEach((e) => o[e] = null) : x(o, a), b(e) && r.set(e, o), o);
}
function ka(e, t) {
	return !e || !Te(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, d(t)) || M(e, t));
}
function Aa(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, _ = Kr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Po(l.call(t, e, u, d, p, f, m)), y = s;
		} else {
			let e = t;
			v = Po(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), y = t.props ? s : ja(s);
		}
	} catch (t) {
		_o.length = 0, Dr(t, e, 1), v = z(I);
	}
	let b = v;
	if (y && h !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(g) && (y = Ma(y, a)), b = jo(b, y, !1, !0));
	}
	return n.dirs && (b = jo(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && bi(b, n.transition), v = b, Kr(_), v;
}
var ja = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || Te(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ma = (e, t) => {
	let n = {};
	for (let r in e) (!g(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Na(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Pa(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Fa(o, r, n) && !ka(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Pa(r, o, l) : !0 : !!o;
	return !1;
}
function Pa(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Fa(t, e, a) && !ka(n, a)) return !0;
	}
	return !1;
}
function Fa(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !de(r, i) : r !== i;
}
function Ia({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var La = {}, Ra = () => Object.create(La), za = (e) => Object.getPrototypeOf(e) === La;
function Ba(e, t, n, r = !1) {
	let i = {}, a = Ra();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ha(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : Fe(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Va(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = D(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ka(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (M(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = Ua(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ha(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !M(t, a) && ((r = d(a)) === a || !M(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ua(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !M(t, e)) && (delete a[e], l = !0);
	}
	l && p(e.attrs, "set", "");
}
function Ha(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (re(c)) continue;
		let l = t[c], u;
		i && M(i, u = T(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : ka(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = D(n), r = s || j;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ua(i, t, s, r[s], e, !M(r, s));
		}
	}
	return o;
}
function Ua(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = M(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && k(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ko(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === d(n)) && (r = !0));
	}
	return r;
}
var Wa = /* @__PURE__ */ new WeakMap();
function Ga(e, t, n = !1) {
	let r = n ? Wa : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!k(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = Ga(e, t, !0);
			x(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return b(e) && r.set(e, u), u;
	if (O(a)) for (let e = 0; e < a.length; e++) {
		let t = T(a[e]);
		Ka(t) && (o[t] = j);
	}
	else if (a) for (let e in a) {
		let t = T(e);
		if (Ka(t)) {
			let n = a[e], r = o[t] = O(n) || k(n) ? { type: n } : x({}, n), i = r.type, c = !1, l = !0;
			if (O(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = k(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				} else n === "String" && (l = !1);
			}
			else c = k(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || M(r, "default")) && s.push(t);
		}
	}
	let l = [o, s];
	return b(e) && r.set(e, l), l;
}
function Ka(e) {
	return e[0] !== "$" && !re(e);
}
var qa = (e) => e === "_" || e === "_ctx" || e === "$stable", Ja = (e) => O(e) ? e.map(Po) : [Po(e)], Ya = (e, t, n) => {
	if (t._n) return t;
	let r = qr((...e) => Ja(t(...e)), n);
	return r._c = !1, r;
}, Xa = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (qa(n)) continue;
		let i = e[n];
		if (k(i)) t[n] = Ya(n, i, r);
		else if (i != null) {
			let e = Ja(i);
			t[n] = () => e;
		}
	}
}, Za = (e, t) => {
	let n = Ja(t);
	e.slots.default = () => n;
}, Qa = (e, t, n) => {
	for (let r in t) (n || !qa(r)) && (e[r] = t[r]);
}, $a = (e, t, n) => {
	let r = e.slots = Ra();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Qa(r, t, n), n && v(r, "_", e, !0)) : Xa(t, r);
	} else t && Za(e, t);
}, eo = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = j;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Qa(i, t, n) : (a = !t.$stable, Xa(t, i)), o = t;
	} else t && (Za(e, t), o = { default: 1 });
	if (a) for (let e in i) !qa(e) && o[e] == null && delete i[e];
}, to = mo;
function no(e) {
	return ro(e);
}
function ro(e, t) {
	let n = ee();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: d, parentNode: f, nextSibling: p, setScopeId: m = C, insertStaticContent: h } = e, g = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !To(e, t) && (r = ve(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ho:
				v(e, t, n, r);
				break;
			case I:
				y(e, t, n, r);
				break;
			case go:
				e ?? b(t, n, r, o);
				break;
			case F:
				k(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ie(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? Di(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Di(e.ref, null, a, e, !0);
	}, v = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, y = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, b = (e, t, n, r) => {
		[e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor);
	}, x = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = p(e), r(e, n, i), e = a;
		r(t, n, i);
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = p(e), i(e), e = n;
		i(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, i, s, c, l, u) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? d(f, e.children) : h & 16 && D(e.children, f, null, i, s, io(e, c), l, u), _ && Yr(e, null, i, "created"), E(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !re(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Ro(p, i, e);
		}
		_ && Yr(e, null, i, "beforeMount");
		let v = oo(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && to(() => {
			try {
				p && Ro(p, i, e), v && g.enter(f), _ && Yr(e, null, i, "mounted");
			} finally {}
		}, s);
	}, E = (e, t, n, r, i) => {
		if (n && m(e, n), r) for (let t = 0; t < r.length; t++) m(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || po(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) g(null, e[l] = s ? Fo(e[l]) : Po(e[l]), t, n, r, i, a, o, s);
	}, te = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: u, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || j, m = t.props || j, h;
		if (n && ao(n, !1), (h = m.onVnodeBeforeUpdate) && Ro(h, n, t, e), f && Yr(t, e, n, "beforeUpdate"), n && ao(n, !0), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && d(c, ""), u ? O(e.dynamicChildren, u, c, n, r, io(t, i), o) : s || le(e, t, c, null, n, r, io(t, i), o, !1), l > 0) {
			if (l & 16) ne(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && d(c, t.children);
		} else !s && u == null && ne(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && to(() => {
			h && Ro(h, n, t, e), f && Yr(t, e, n, "updated");
		}, r);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			g(c, l, c.el && (c.type === F || !To(c, l) || c.shapeFlag & 198) ? f(c.el) : n, null, r, i, a, o, !0);
		}
	}, ne = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== j) for (let o in t) !re(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (re(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, k = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), D(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && so(e, t, !0)) : le(e, t, n, f, a, o, c, l, u);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : A(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = Vo(e, r, i);
		if (Ai(e) && (s.ctx.renderer = Se), Xo(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = z(I);
				y(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (Na(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ce(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = lo(e);
					if (n) {
						t && (t.el = c.el, ce(e, t, o)), n.asyncDep.then(() => {
							to(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				ao(e, !1), t ? (t.el = c.el, ce(e, t, o)) : t = c, n && _(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ro(d, s, t, c), ao(e, !0);
				let p = Aa(e), m = e.subTree;
				e.subTree = p, g(m, p, f(m.el), ve(m), e, i, a), t.el = p.el, u === null && Ia(e, p.el), r && to(r, i), (d = t.props && t.props.onVnodeUpdated) && to(() => Ro(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ki(t);
				if (ao(e, !1), l && _(l), !m && (o = c && c.onVnodeBeforeMount) && Ro(o, d, t), ao(e, !0), s && we) {
					let t = () => {
						e.subTree = Aa(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Aa(e);
					g(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && to(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					to(() => Ro(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ki(d.vnode) && d.vnode.shapeFlag & 256) && e.a && to(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new oe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Rr(u), ao(e, !0), l();
	}, ce = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Va(e, t.props, r, n), eo(e, t.children, n), ye(), Vr(e), Me();
	}, le = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				de(l, f, n, r, i, a, o, s, c);
				return;
			} else if (p & 256) {
				ue(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && _e(l, i, a), f !== l && d(n, f)) : u & 16 ? m & 16 ? de(l, f, n, r, i, a, o, s, c) : _e(l, i, a, !0) : (u & 8 && d(n, ""), m & 16 && D(f, n, r, i, a, o, s, c));
	}, ue = (e, t, n, r, i, a, o, s, c) => {
		e ||= u, t ||= u;
		let l = e.length, d = t.length, f = Math.min(l, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = c ? Fo(t[p]) : Po(t[p]);
			g(e[p], r, n, null, i, a, o, s, c);
		}
		l > d ? _e(e, i, a, !0, !1, f) : D(t, n, r, i, a, o, s, c, f);
	}, de = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; l <= f && l <= p;) {
			let r = e[l], u = t[l] = c ? Fo(t[l]) : Po(t[l]);
			if (To(r, u)) g(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= f && l <= p;) {
			let r = e[f], l = t[p] = c ? Fo(t[p]) : Po(t[p]);
			if (To(r, l)) g(r, l, n, null, i, a, o, s, c);
			else break;
			f--, p--;
		}
		if (l > f) {
			if (l <= p) {
				let e = p + 1, u = e < d ? t[e].el : r;
				for (; l <= p;) g(null, t[l] = c ? Fo(t[l]) : Po(t[l]), n, u, i, a, o, s, c), l++;
			}
		} else if (l > p) for (; l <= f;) pe(e[l], i, a, !0), l++;
		else {
			let m = l, h = l, _ = /* @__PURE__ */ new Map();
			for (l = h; l <= p; l++) {
				let e = t[l] = c ? Fo(t[l]) : Po(t[l]);
				e.key != null && _.set(e.key, l);
			}
			let v, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (l = 0; l < b; l++) C[l] = 0;
			for (l = m; l <= f; l++) {
				let r = e[l];
				if (y >= b) {
					pe(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = _.get(r.key);
				else for (v = h; v <= p; v++) if (C[v - h] === 0 && To(r, t[v])) {
					u = v;
					break;
				}
				u === void 0 ? pe(r, i, a, !0) : (C[u - h] = l + 1, u >= S ? S = u : x = !0, g(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let w = x ? co(C) : u;
			for (v = w.length - 1, l = b - 1; l >= 0; l--) {
				let e = h + l, u = t[e], f = t[e + 1], p = e + 1 < d ? f.el || fo(f) : r;
				C[l] === 0 ? g(null, u, n, p, i, a, o, s, c) : x && (v < 0 || l !== w[v] ? fe(u, n, p, 2) : v--);
			}
		}
	}, fe = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			fe(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === F) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === go) {
			x(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.beforeEnter(s), r(s, t, n), to(() => l.enter(s), o);
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				s._isLeaving && s[si](!0), a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, pe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (ye(), Di(s, null, n, e, !0), Me()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !ki(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ro(_, t, e), u & 6) ge(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Yr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== F || d > 0 && d & 64) ? _e(l, t, n, !1, !0) : (a === F && d & 384 || !i && u & 16) && _e(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && to(() => {
			_ && Ro(_, t, e), h && Yr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === F) {
			he(n, r);
			return;
		}
		if (t === go) {
			S(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, he = (e, t) => {
		let n;
		for (; e !== t;) n = p(e), i(e), e = n;
		i(t);
	}, ge = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		uo(c), uo(l), r && _(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && to(s, t), to(() => {
			e.isUnmounted = !0;
		}, t);
	}, _e = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, ve = (e) => {
		if (e.shapeFlag & 6) return ve(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = p(e.anchor || e.el), n = t && t[ai];
		return n ? p(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : g(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, Vr(r), Hr(), !1);
	}, Se = {
		p: g,
		um: pe,
		m: fe,
		r: me,
		mt: ae,
		mc: D,
		pc: le,
		pbc: O,
		n: ve,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Ca(xe, Ce)
	};
}
function io({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ao({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function oo(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (O(r) && O(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Fo(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && so(t, a)), a.type === ho && (a.patchFlag === -1 && (a = i[e] = Fo(a)), a.el = t.el), a.type === I && !a.el && (a.el = t.el);
	}
}
function co(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function lo(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : lo(t);
}
function uo(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function fo(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? fo(t.subTree) : null;
}
var po = (e) => e.__isSuspense;
function mo(e, t) {
	t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Br(e);
}
var F = /* @__PURE__ */ Symbol.for("v-fgt"), ho = /* @__PURE__ */ Symbol.for("v-txt"), I = /* @__PURE__ */ Symbol.for("v-cmt"), go = /* @__PURE__ */ Symbol.for("v-stc"), _o = [], vo = null;
function L(e = !1) {
	_o.push(vo = e ? null : []);
}
function yo() {
	_o.pop(), vo = _o[_o.length - 1] || null;
}
var bo = 1;
function xo(e, t = !1) {
	bo += e, e < 0 && vo && t && (vo.hasOnce = !0);
}
function So(e) {
	return e.dynamicChildren = bo > 0 ? vo || u : null, yo(), bo > 0 && vo && vo.push(e), e;
}
function R(e, t, n, r, i, a) {
	return So(Oo(e, t, n, r, i, a, !0));
}
function Co(e, t, n, r, i) {
	return So(z(e, t, n, r, i, !0));
}
function wo(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function To(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Eo = ({ key: e }) => e ?? null, Do = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : E(e) || ue(e) || k(e) ? {
	i: P,
	r: e,
	k: t,
	f: !!n
} : e);
function Oo(e, t = null, n = null, r = 0, i = null, a = e === F ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Eo(t),
		ref: t && Do(t),
		scopeId: Gr,
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
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: P
	};
	return s ? (Io(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= E(n) ? 8 : 16), bo > 0 && !o && vo && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && vo.push(c), c;
}
var z = ko;
function ko(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Ji) && (e = I), wo(e)) {
		let r = jo(e, t, !0);
		return n && Io(r, n), bo > 0 && !a && vo && (r.shapeFlag & 6 ? vo[vo.indexOf(e)] = r : vo.push(r)), r.patchFlag = -2, r;
	}
	if (os(e) && (e = e.__vccOpts), t) {
		t = Ao(t);
		let { class: e, style: n } = t;
		e && !E(e) && (t.class = xe(e)), b(n) && (le(n) && !O(n) && (n = x({}, n)), t.style = Ee(n));
	}
	let o = E(e) ? 1 : po(e) ? 128 : oi(e) ? 64 : b(e) ? 4 : k(e) ? 2 : 0;
	return Oo(e, t, n, r, i, o, a, !0);
}
function Ao(e) {
	return e ? le(e) || za(e) ? x({}, e) : e : null;
}
function jo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Lo(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Eo(l),
		ref: t && t.ref ? n && a ? O(a) ? a.concat(Do(t)) : [a, Do(t)] : Do(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== F ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && jo(e.ssContent),
		ssFallback: e.ssFallback && jo(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && bi(u, c.clone(u)), u;
}
function Mo(e = " ", t = 0) {
	return z(ho, null, e, t);
}
function No(e = "", t = !1) {
	return t ? (L(), Co(I, null, e)) : z(I, null, e);
}
function Po(e) {
	return e == null || typeof e == "boolean" ? z(I) : O(e) ? z(F, null, e.slice()) : wo(e) ? Fo(e) : z(ho, null, String(e));
}
function Fo(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : jo(e);
}
function Io(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (O(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Io(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !za(t) ? t._ctx = P : r === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else k(t) ? (t = {
		default: t,
		_ctx: P
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Mo(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Lo(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = xe([t.class, r.class]));
		else if (e === "style") t.style = Ee([t.style, r.style]);
		else if (Te(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(O(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !g(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ro(e, t, n, r = null) {
	Er(e, t, 7, [n, r]);
}
var zo = xa(), Bo = 0;
function Vo(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || zo, a = {
		uid: Bo++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new he(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Ga(r, i),
		emitsOptions: Oa(r, i),
		emit: null,
		emitted: null,
		propsDefaults: j,
		inheritAttrs: r.inheritAttrs,
		ctx: j,
		data: j,
		props: j,
		attrs: j,
		slots: j,
		refs: j,
		setupState: j,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Ea.bind(null, a), e.ce && e.ce(a), a;
}
var Ho = null, Uo = () => Ho || P, Wo, Go;
{
	let e = ee(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Wo = t("__VUE_INSTANCE_SETTERS__", (e) => Ho = e), Go = t("__VUE_SSR_SETTERS__", (e) => Yo = e);
}
var Ko = (e) => {
	let t = Ho;
	return Wo(e), e.scope.on(), () => {
		e.scope.off(), Wo(t);
	};
}, qo = () => {
	Ho && Ho.scope.off(), Wo(null);
};
function Jo(e) {
	return e.vnode.shapeFlag & 4;
}
var Yo = !1;
function Xo(e, t = !1, n = !1) {
	t && Go(t);
	let { props: r, children: i } = e.vnode, a = Jo(e);
	Ba(e, r, a, t), $a(e, i, n || t);
	let o = a ? Zo(e, t) : void 0;
	return t && Go(!1), o;
}
function Zo(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ia);
	let { setup: r } = n;
	if (r) {
		ye();
		let n = e.setupContext = r.length > 1 ? rs(e) : null, i = Ko(e), a = Tr(r, e, 0, [e.props, n]), o = ie(a);
		if (Me(), i(), (o || e.sp) && !ki(e) && wi(e), o) {
			if (a.then(qo, qo), t) return a.then((n) => {
				Qo(e, n, t);
			}).catch((t) => {
				Dr(t, e, 0);
			});
			e.asyncDep = a;
		} else Qo(e, a, t);
	} else ts(e, t);
}
function Qo(e, t, n) {
	k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = me(t)), ts(e, n);
}
var $o, es;
function ts(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && $o && !r.render) {
			let t = r.template || da(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = $o(t, x(x({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || C, es && es(e);
	}
	{
		let t = Ko(e);
		ye();
		try {
			sa(e);
		} finally {
			Me(), t();
		}
	}
}
var ns = { get(e, t) {
	return te(e, "get", ""), e[t];
} };
function rs(e) {
	return {
		attrs: new Proxy(e.attrs, ns),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function is(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(me(we(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in na) return na[n](e);
		},
		has(e, t) {
			return t in e || t in na;
		}
	}) : e.proxy;
}
function as(e, t = !0) {
	return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function os(e) {
	return k(e) && "__vccOpts" in e;
}
var ss = (e, t) => Se(e, t, Yo);
function cs(e, t, n) {
	try {
		xo(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !O(t) ? wo(t) ? z(e, null, [t]) : z(e, t) : z(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && wo(n) && (n = [n]), z(e, t, n));
	} finally {
		xo(1);
	}
}
var ls = "3.5.33", us = void 0, ds = typeof window < "u" && window.trustedTypes;
if (ds) try {
	us = /* @__PURE__ */ ds.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var fs = us ? (e) => us.createHTML(e) : (e) => e, ps = "http://www.w3.org/2000/svg", ms = "http://www.w3.org/1998/Math/MathML", hs = typeof document < "u" ? document : null, gs = hs && /* @__PURE__ */ hs.createElement("template"), _s = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? hs.createElementNS(ps, e) : t === "mathml" ? hs.createElementNS(ms, e) : n ? hs.createElement(e, { is: n }) : hs.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => hs.createTextNode(e),
	createComment: (e) => hs.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => hs.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			gs.innerHTML = fs(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = gs.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, vs = "transition", ys = "animation", bs = /* @__PURE__ */ Symbol("_vtc"), xs = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Ss = /* @__PURE__ */ x({}, di, xs), Cs = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Ss, e))((e, { slots: t }) => cs(hi, Es(e), t)), ws = (e, t = []) => {
	O(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Ts = (e) => e ? O(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Es(e) {
	let t = {};
	for (let n in e) n in xs || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = Ds(i), h = m && m[0], g = m && m[1], { onBeforeEnter: _, onEnter: v, onEnterCancelled: y, onLeave: b, onLeaveCancelled: S, onBeforeAppear: C = _, onAppear: w = v, onAppearCancelled: T = y } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, As(e, t ? u : s), As(e, t ? l : o), n && n();
	}, ee = (e, t) => {
		e._isLeaving = !1, As(e, d), As(e, p), As(e, f), t && t();
	}, D = (e) => (t, n) => {
		let i = e ? w : v, o = () => E(t, e, n);
		ws(i, [t, o]), js(() => {
			As(t, e ? c : a), ks(t, e ? u : s), Ts(i) || Ns(t, r, h, o);
		});
	};
	return x(t, {
		onBeforeEnter(e) {
			ws(_, [e]), ks(e, a), ks(e, o);
		},
		onBeforeAppear(e) {
			ws(C, [e]), ks(e, c), ks(e, l);
		},
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => ee(e, t);
			ks(e, d), e._enterCancelled ? (ks(e, f), Ls(e)) : (Ls(e), ks(e, f)), js(() => {
				e._isLeaving && (As(e, d), ks(e, p), Ts(b) || Ns(e, r, g, n));
			}), ws(b, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), ws(y, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), ws(T, [e]);
		},
		onLeaveCancelled(e) {
			ee(e), ws(S, [e]);
		}
	});
}
function Ds(e) {
	if (e == null) return null;
	if (b(e)) return [Os(e.enter), Os(e.leave)];
	{
		let t = Os(e);
		return [t, t];
	}
}
function Os(e) {
	return Oe(e);
}
function ks(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[bs] || (e[bs] = /* @__PURE__ */ new Set())).add(t);
}
function As(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[bs];
	n && (n.delete(t), n.size || (e[bs] = void 0));
}
function js(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Ms = 0;
function Ns(e, t, n, r) {
	let i = e._endId = ++Ms, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Ps(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Ps(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${vs}Delay`), a = r(`${vs}Duration`), o = Fs(i, a), s = r(`${ys}Delay`), c = r(`${ys}Duration`), l = Fs(s, c), u = null, d = 0, f = 0;
	t === vs ? o > 0 && (u = vs, d = o, f = a.length) : t === ys ? l > 0 && (u = ys, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? vs : ys : null, f = u ? u === vs ? a.length : c.length : 0);
	let p = u === vs && /\b(?:transform|all)(?:,|$)/.test(r(`${vs}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Fs(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Is(t) + Is(e[n])));
}
function Is(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ls(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Rs(e, t, n) {
	let r = e[bs];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var zs = /* @__PURE__ */ Symbol("_vod"), Bs = /* @__PURE__ */ Symbol("_vsh"), Vs = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[zs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hs(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Hs(e, !0), r.enter(e)) : r.leave(e, () => {
			Hs(e, !1);
		}) : Hs(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Hs(e, t);
	}
};
function Hs(e, t) {
	e.style.display = t ? e[zs] : "none", e[Bs] = !t;
}
var Us = /* @__PURE__ */ Symbol(""), Ws = /(?:^|;)\s*display\s*:/;
function Gs(e, t, n) {
	let r = e.style, i = E(n), a = !1;
	if (n && !i) {
		if (t) if (E(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? qs(r, t, "");
		}
		else for (let e in t) n[e] ?? qs(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? qs(r, i, "") : Zs(e, i, !E(t) && t ? t[i] : void 0, o) || qs(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Us];
			e && (n += ";" + e), r.cssText = n, a = Ws.test(n);
		}
	} else t && e.removeAttribute("style");
	zs in e && (e[zs] = a ? r.display : "", e[Bs] && (r.display = "none"));
}
var Ks = /\s*!important$/;
function qs(e, t, n) {
	if (O(n)) n.forEach((n) => qs(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Xs(e, t);
		Ks.test(n) ? e.setProperty(d(r), n.replace(Ks, ""), "important") : e[r] = n;
	}
}
var Js = [
	"Webkit",
	"Moz",
	"ms"
], Ys = {};
function Xs(e, t) {
	let n = Ys[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Ys[t] = r;
	r = h(r);
	for (let n = 0; n < Js.length; n++) {
		let i = Js[n] + r;
		if (i in e) return Ys[t] = i;
	}
	return t;
}
function Zs(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && E(r) && n === r;
}
var Qs = "http://www.w3.org/1999/xlink";
function $s(e, t, n, r, i, a = ae(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qs, t.slice(6, t.length)) : e.setAttributeNS(Qs, t, n) : n == null || a && !ne(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : l(n) ? String(n) : n);
}
function ec(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? fs(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ne(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function tc(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function nc(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var rc = /* @__PURE__ */ Symbol("_vei");
function ic(e, t, n, r, i = null) {
	let a = e[rc] || (e[rc] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = oc(t);
		r ? tc(e, n, a[t] = uc(r, i), s) : o && (nc(e, n, o, s), a[t] = void 0);
	}
}
var ac = /(?:Once|Passive|Capture)$/;
function oc(e) {
	let t;
	if (ac.test(e)) {
		t = {};
		let n;
		for (; n = e.match(ac);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : d(e.slice(2)), t];
}
var sc = 0, cc = /* @__PURE__ */ Promise.resolve(), lc = () => sc ||= (cc.then(() => sc = 0), Date.now());
function uc(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		Er(dc(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = lc(), n;
}
function dc(e, t) {
	if (O(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var fc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pc = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Rs(e, r, o) : t === "style" ? Gs(e, n, r) : Te(t) ? g(t) || ic(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mc(e, t, r, o)) ? (ec(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $s(e, t, r, o, a, t !== "value")) : e._isVueCE && (hc(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !E(r))) ? ec(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $s(e, t, r, o));
};
function mc(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && fc(t) && k(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return fc(t) && E(n) ? !1 : t in e;
}
function hc(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var gc = {};
/* @__NO_SIDE_EFFECTS__ */
function _c(e, t, n) {
	let r = /* @__PURE__ */ Si(e, t);
	y(r) && (r = x({}, r, t));
	class i extends yc {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var vc = typeof HTMLElement < "u" ? HTMLElement : class {}, yc = class e extends vc {
	constructor(e, t = {}, n = wc) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== wc ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(x({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			this._pendingResolve = void 0, this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, Ir(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !O(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = Oe(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[T(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		t ? this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}) : e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) M(this, e) || Object.defineProperty(this, e, { get: () => w(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = O(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(T)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : gc, r = T(e);
		t && this._numberProps && this._numberProps[r] && (n = Oe(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === gc ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(d(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(d(e), t + "") : t || this.removeAttribute(d(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), Cc(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = z(this._def, x(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, y(t[0]) ? x({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), d(e) !== e && t(d(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
}, bc = /* @__PURE__ */ x({ patchProp: pc }, _s), xc;
function Sc() {
	return xc ||= no(bc);
}
var Cc = ((...e) => {
	Sc().render(...e);
}), wc = ((...e) => {
	let t = Sc().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Ec(e);
		if (!r) return;
		let i = t._component;
		!k(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Tc(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Tc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ec(e) {
	return E(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Dc = [
	"top",
	"right",
	"bottom",
	"left"
], Oc = ["start", "end"], kc = /* @__PURE__ */ Dc.reduce((e, t) => e.concat(t, t + "-" + Oc[0], t + "-" + Oc[1]), []), Ac = Math.min, jc = Math.max, Mc = Math.round, Nc = (e) => ({
	x: e,
	y: e
}), Pc = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Fc(e, t, n) {
	return jc(e, Ac(t, n));
}
function Ic(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Lc(e) {
	return e.split("-")[0];
}
function Rc(e) {
	return e.split("-")[1];
}
function zc(e) {
	return e === "x" ? "y" : "x";
}
function Bc(e) {
	return e === "y" ? "height" : "width";
}
function Vc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Hc(e) {
	return zc(Vc(e));
}
function Uc(e, t, n) {
	n === void 0 && (n = !1);
	let r = Rc(e), i = Hc(e), a = Bc(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Qc(o)), [o, Qc(o)];
}
function Wc(e) {
	let t = Qc(e);
	return [
		Gc(e),
		t,
		Gc(t)
	];
}
function Gc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Kc = ["left", "right"], qc = ["right", "left"], Jc = ["top", "bottom"], Yc = ["bottom", "top"];
function Xc(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? qc : Kc : t ? Kc : qc;
		case "left":
		case "right": return t ? Jc : Yc;
		default: return [];
	}
}
function Zc(e, t, n, r) {
	let i = Rc(e), a = Xc(Lc(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Gc)))), a;
}
function Qc(e) {
	let t = Lc(e);
	return Pc[t] + e.slice(t.length);
}
function $c(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function el(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : $c(e);
}
function tl(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function nl(e, t, n) {
	let { reference: r, floating: i } = e, a = Vc(t), o = Hc(t), s = Bc(o), c = Lc(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Rc(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function rl(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Ic(t, e), p = el(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = tl(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = tl(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var il = 50, al = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: rl
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = nl(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < il && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = nl(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, ol = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Ic(e, t) || {};
		if (l == null) return {};
		let d = el(u), f = {
			x: n,
			y: r
		}, p = Hc(i), m = Bc(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Ac(d[_], T), ee = Ac(d[v], T), D = E, te = C - h[m] - ee, O = C / 2 - h[m] / 2 + w, ne = Fc(D, O, te), k = !c.arrow && Rc(i) != null && O !== ne && a.reference[m] / 2 - (O < D ? E : ee) - h[m] / 2 < 0, re = k ? O < D ? O - D : O - te : 0;
		return {
			[p]: f[p] + re,
			data: {
				[p]: ne,
				centerOffset: O - ne - re,
				...k && { alignmentOffset: re }
			},
			reset: k
		};
	}
});
function sl(e, t, n) {
	return (e ? [...n.filter((t) => Rc(t) === e), ...n.filter((t) => Rc(t) !== e)] : n.filter((e) => Lc(e) === e)).filter((n) => e ? Rc(n) === e || (t ? Gc(n) !== n : !1) : !0);
}
var cl = function(e) {
	return e === void 0 && (e = {}), {
		name: "autoPlacement",
		options: e,
		async fn(t) {
			let { rects: n, middlewareData: r, placement: i, platform: a, elements: o } = t, { crossAxis: s = !1, alignment: c, allowedPlacements: l = kc, autoAlignment: u = !0, ...d } = Ic(e, t), f = c !== void 0 || l === kc ? sl(c || null, u, l) : l, p = await a.detectOverflow(t, d), m = r.autoPlacement?.index || 0, h = f[m];
			if (h == null) return {};
			let g = Uc(h, n, await (a.isRTL == null ? void 0 : a.isRTL(o.floating)));
			if (i !== h) return { reset: { placement: f[0] } };
			let _ = [
				p[Lc(h)],
				p[g[0]],
				p[g[1]]
			], v = [...r.autoPlacement?.overflows || [], {
				placement: h,
				overflows: _
			}], y = f[m + 1];
			if (y) return {
				data: {
					index: m + 1,
					overflows: v
				},
				reset: { placement: y }
			};
			let b = v.map((e) => {
				let t = Rc(e.placement);
				return [
					e.placement,
					t && s ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
					e.overflows
				];
			}).sort((e, t) => e[1] - t[1]), x = b.filter((e) => e[2].slice(0, Rc(e[0]) ? 2 : 3).every((e) => e <= 0))[0]?.[0] || b[0][0];
			return x === i ? {} : {
				data: {
					index: m + 1,
					overflows: v
				},
				reset: { placement: x }
			};
		}
	};
}, ll = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Ic(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Lc(r), _ = Vc(o), v = Lc(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Qc(o)] : Wc(o)), x = p !== "none";
			!d && x && b.push(...Zc(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Uc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Vc(t)) || T.every((e) => Vc(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Vc(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function ul(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function dl(e) {
	return Dc.some((t) => e[t] >= 0);
}
var fl = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Ic(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ul(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: dl(e)
					} };
				}
				case "escaped": {
					let e = ul(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: dl(e)
					} };
				}
				default: return {};
			}
		}
	};
};
function pl(e) {
	let t = Ac(...e.map((e) => e.left)), n = Ac(...e.map((e) => e.top)), r = jc(...e.map((e) => e.right)), i = jc(...e.map((e) => e.bottom));
	return {
		x: t,
		y: n,
		width: r - t,
		height: i - n
	};
}
function ml(e) {
	let t = e.slice().sort((e, t) => e.y - t.y), n = [], r = null;
	for (let e = 0; e < t.length; e++) {
		let i = t[e];
		!r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
	}
	return n.map((e) => tl(pl(e)));
}
var hl = function(e) {
	return e === void 0 && (e = {}), {
		name: "inline",
		options: e,
		async fn(t) {
			let { placement: n, elements: r, rects: i, platform: a, strategy: o } = t, { padding: s = 2, x: c, y: l } = Ic(e, t), u = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(r.reference)) || []), d = ml(u), f = tl(pl(u)), p = el(s);
			function m() {
				if (d.length === 2 && d[0].left > d[1].right && c != null && l != null) return d.find((e) => c > e.left - p.left && c < e.right + p.right && l > e.top - p.top && l < e.bottom + p.bottom) || f;
				if (d.length >= 2) {
					if (Vc(n) === "y") {
						let e = d[0], t = d[d.length - 1], r = Lc(n) === "top", i = e.top, a = t.bottom, o = r ? e.left : t.left, s = r ? e.right : t.right;
						return {
							top: i,
							bottom: a,
							left: o,
							right: s,
							width: s - o,
							height: a - i,
							x: o,
							y: i
						};
					}
					let e = Lc(n) === "left", t = jc(...d.map((e) => e.right)), r = Ac(...d.map((e) => e.left)), i = d.filter((n) => e ? n.left === r : n.right === t), a = i[0].top, o = i[i.length - 1].bottom, s = r, c = t;
					return {
						top: a,
						bottom: o,
						left: s,
						right: c,
						width: c - s,
						height: o - a,
						x: s,
						y: a
					};
				}
				return f;
			}
			let h = await a.getElementRects({
				reference: { getBoundingClientRect: m },
				floating: r.floating,
				strategy: o
			});
			return i.reference.x !== h.reference.x || i.reference.y !== h.reference.y || i.reference.width !== h.reference.width || i.reference.height !== h.reference.height ? { reset: { rects: h } } : {};
		}
	};
}, gl = /* @__PURE__ */ new Set(["left", "top"]);
async function _l(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Lc(n), s = Rc(n), c = Vc(n) === "y", l = gl.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Ic(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var vl = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await _l(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, yl = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Ic(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Vc(Lc(i)), p = zc(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Fc(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Fc(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, bl = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Ic(e, t), u = await o.detectOverflow(t, l), d = Lc(i), f = Rc(i), p = Vc(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Ac(h - u[g], v), x = Ac(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = jc(u.left, 0), t = jc(u.right, 0), n = jc(u.top, 0), r = jc(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : jc(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : jc(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function xl() {
	return typeof window < "u";
}
function Sl(e) {
	return Tl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Cl(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wl(e) {
	return ((Tl(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Tl(e) {
	return xl() ? e instanceof Node || e instanceof Cl(e).Node : !1;
}
function El(e) {
	return xl() ? e instanceof Element || e instanceof Cl(e).Element : !1;
}
function Dl(e) {
	return xl() ? e instanceof HTMLElement || e instanceof Cl(e).HTMLElement : !1;
}
function Ol(e) {
	return !xl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Cl(e).ShadowRoot;
}
function kl(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Bl(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Al(e) {
	return /^(table|td|th)$/.test(Sl(e));
}
function jl(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Ml = /transform|translate|scale|rotate|perspective|filter/, Nl = /paint|layout|strict|content/, Pl = (e) => !!e && e !== "none", Fl;
function Il(e) {
	let t = El(e) ? Bl(e) : e;
	return Pl(t.transform) || Pl(t.translate) || Pl(t.scale) || Pl(t.rotate) || Pl(t.perspective) || !Rl() && (Pl(t.backdropFilter) || Pl(t.filter)) || Ml.test(t.willChange || "") || Nl.test(t.contain || "");
}
function Ll(e) {
	let t = Hl(e);
	for (; Dl(t) && !zl(t);) {
		if (Il(t)) return t;
		if (jl(t)) return null;
		t = Hl(t);
	}
	return null;
}
function Rl() {
	return Fl ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Fl;
}
function zl(e) {
	return /^(html|body|#document)$/.test(Sl(e));
}
function Bl(e) {
	return Cl(e).getComputedStyle(e);
}
function Vl(e) {
	return El(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Hl(e) {
	if (Sl(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ol(e) && e.host || wl(e);
	return Ol(t) ? t.host : t;
}
function Ul(e) {
	let t = Hl(e);
	return zl(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dl(t) && kl(t) ? t : Ul(t);
}
function Wl(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ul(e), i = r === e.ownerDocument?.body, a = Cl(r);
	if (i) {
		let e = Gl(a);
		return t.concat(a, a.visualViewport || [], kl(r) ? r : [], e && n ? Wl(e) : []);
	} else return t.concat(r, Wl(r, [], n));
}
function Gl(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Kl(e) {
	let t = Bl(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Dl(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Mc(n) !== a || Mc(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ql(e) {
	return El(e) ? e : e.contextElement;
}
function Jl(e) {
	let t = ql(e);
	if (!Dl(t)) return Nc(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Kl(t), o = (a ? Mc(n.width) : n.width) / r, s = (a ? Mc(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Yl = /* @__PURE__ */ Nc(0);
function Xl(e) {
	let t = Cl(e);
	return !Rl() || !t.visualViewport ? Yl : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Zl(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Cl(e) ? !1 : t;
}
function Ql(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ql(e), o = Nc(1);
	t && (r ? El(r) && (o = Jl(r)) : o = Jl(e));
	let s = Zl(a, n, r) ? Xl(a) : Nc(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Cl(a), t = r && El(r) ? Cl(r) : r, n = e, i = Gl(n);
		for (; i && r && t !== n;) {
			let e = Jl(i), t = i.getBoundingClientRect(), r = Bl(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Cl(i), i = Gl(n);
		}
	}
	return tl({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function $l(e, t) {
	let n = Vl(e).scrollLeft;
	return t ? t.left + n : Ql(wl(e)).left + n;
}
function eu(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - $l(e, n),
		y: n.top + t.scrollTop
	};
}
function tu(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = wl(r), s = t ? jl(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Nc(1), u = Nc(0), d = Dl(r);
	if ((d || !d && !a) && ((Sl(r) !== "body" || kl(o)) && (c = Vl(r)), d)) {
		let e = Ql(r);
		l = Jl(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? eu(o, c) : Nc(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function nu(e) {
	return Array.from(e.getClientRects());
}
function ru(e) {
	let t = wl(e), n = Vl(e), r = e.ownerDocument.body, i = jc(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = jc(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + $l(e), s = -n.scrollTop;
	return Bl(r).direction === "rtl" && (o += jc(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var iu = 25;
function au(e, t) {
	let n = Cl(e), r = wl(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Rl();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = $l(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= iu && (a -= o);
	} else l <= iu && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function ou(e, t) {
	let n = Ql(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Dl(e) ? Jl(e) : Nc(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function su(e, t, n) {
	let r;
	if (t === "viewport") r = au(e, n);
	else if (t === "document") r = ru(wl(e));
	else if (El(t)) r = ou(t, n);
	else {
		let n = Xl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return tl(r);
}
function cu(e, t) {
	let n = Hl(e);
	return n === t || !El(n) || zl(n) ? !1 : Bl(n).position === "fixed" || cu(n, t);
}
function lu(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Wl(e, [], !1).filter((e) => El(e) && Sl(e) !== "body"), i = null, a = Bl(e).position === "fixed", o = a ? Hl(e) : e;
	for (; El(o) && !zl(o);) {
		let t = Bl(o), n = Il(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || kl(o) && !n && cu(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Hl(o);
	}
	return t.set(e, r), r;
}
function uu(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? jl(t) ? [] : lu(t, this._c) : [].concat(n), r], o = su(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = su(t, a[e], i);
		s = jc(n.top, s), c = Ac(n.right, c), l = Ac(n.bottom, l), u = jc(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function du(e) {
	let { width: t, height: n } = Kl(e);
	return {
		width: t,
		height: n
	};
}
function fu(e, t, n) {
	let r = Dl(t), i = wl(t), a = n === "fixed", o = Ql(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Nc(0);
	function l() {
		c.x = $l(i);
	}
	if (r || !r && !a) if ((Sl(t) !== "body" || kl(i)) && (s = Vl(t)), r) {
		let e = Ql(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? eu(i, s) : Nc(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function pu(e) {
	return Bl(e).position === "static";
}
function mu(e, t) {
	if (!Dl(e) || Bl(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return wl(e) === n && (n = n.ownerDocument.body), n;
}
function hu(e, t) {
	let n = Cl(e);
	if (jl(e)) return n;
	if (!Dl(e)) {
		let t = Hl(e);
		for (; t && !zl(t);) {
			if (El(t) && !pu(t)) return t;
			t = Hl(t);
		}
		return n;
	}
	let r = mu(e, t);
	for (; r && Al(r) && pu(r);) r = mu(r, t);
	return r && zl(r) && pu(r) && !Il(r) ? n : r || Ll(e) || n;
}
var gu = async function(e) {
	let t = this.getOffsetParent || hu, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: fu(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function _u(e) {
	return Bl(e).direction === "rtl";
}
var vu = {
	convertOffsetParentRelativeRectToViewportRelativeRect: tu,
	getDocumentElement: wl,
	getClippingRect: uu,
	getOffsetParent: hu,
	getElementRects: gu,
	getClientRects: nu,
	getDimensions: du,
	getScale: Jl,
	isElement: El,
	isRTL: _u
}, yu = vl, bu = cl, xu = yl, Su = ll, Cu = bl, wu = fl, Tu = ol, Eu = hl, Du = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: vu,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return al(e, t, {
		...i,
		platform: a
	});
}, Ou = () => /* @__PURE__ */ new Map(), ku = (e) => {
	let t = Ou();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, Au = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, ju = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, Mu = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, Nu = () => /* @__PURE__ */ new Set(), Pu = (e) => e[e.length - 1], Fu = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, Iu = Array.from, Lu = (e, t) => {
	for (let n = 0; n < e.length; n++) if (!t(e[n], n, e)) return !1;
	return !0;
}, Ru = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, zu = (e, t) => {
	let n = Array(e);
	for (let r = 0; r < e; r++) n[r] = t(r, n);
	return n;
}, Bu = Array.isArray, Vu = class {
	constructor() {
		this._observers = Ou();
	}
	on(e, t) {
		return Au(this._observers, e, Nu).add(t), t;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t(...r);
		};
		this.on(e, n);
	}
	off(e, t) {
		let n = this._observers.get(e);
		n !== void 0 && (n.delete(t), n.size === 0 && this._observers.delete(e));
	}
	emit(e, t) {
		return Iu((this._observers.get(e) || Ou()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = Ou();
	}
}, Hu = Math.floor, Uu = Math.abs, Wu = (e, t) => e < t ? e : t, Gu = (e, t) => e > t ? e : t;
Number.isNaN;
var Ku = (e) => e === 0 ? 1 / e < 0 : e < 0, qu = 1 << 17, Ju = 1 << 18, Yu = 1 << 19, Xu = 1 << 20, Zu = 1 << 21, Qu = 1 << 22, $u = 1 << 23, ed = 1 << 24, td = 1 << 25, nd = 1 << 26, rd = 1 << 27, id = 1 << 28, ad = 1 << 29;
qu - 1, Ju - 1, Yu - 1, Xu - 1, Zu - 1, Qu - 1, $u - 1, ed - 1, td - 1, nd - 1, rd - 1, id - 1, ad - 1;
//#endregion
//#region node_modules/lib0/number.js
var od = 2 ** 53 - 1, sd = -(2 ** 53 - 1), cd = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && Hu(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region node_modules/lib0/string.js
var ld = String.fromCharCode;
String.fromCodePoint, ld(65535);
var ud = (e) => e.toLowerCase(), dd = /^\s*/g, fd = (e) => e.replace(dd, ""), pd = /([A-Z])/g, md = (e, t) => fd(e.replace(pd, (e) => `${t}${ud(e)}`)), hd = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, gd = typeof TextEncoder < "u" ? new TextEncoder() : null, _d = gd ? (e) => gd.encode(e) : hd, vd = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
vd && vd.decode(new Uint8Array()).length === 1 && (vd = null);
var yd = (e, t) => zu(t, () => e).join(""), bd = class {
	constructor() {
		this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
	}
}, xd = () => new bd(), Sd = (e) => {
	let t = xd();
	return e(t), wd(t);
}, Cd = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, wd = (e) => {
	let t = new Uint8Array(Cd(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Td = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Gu(n, t) * 2), e.cpos = 0);
}, B = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Ed = B, V = (e, t) => {
	for (; t > 127;) B(e, 128 | 127 & t), t = Hu(t / 128);
	B(e, 127 & t);
}, Dd = (e, t) => {
	let n = Ku(t);
	for (n && (t = -t), B(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = Hu(t / 64); t > 0;) B(e, (t > 127 ? 128 : 0) | 127 & t), t = Hu(t / 128);
}, Od = new Uint8Array(3e4), kd = Od.length / 3, Ad = gd && gd.encodeInto ? (e, t) => {
	if (t.length < kd) {
		/* c8 ignore next */
		let n = gd.encodeInto(t, Od).written || 0;
		V(e, n);
		for (let t = 0; t < n; t++) B(e, Od[t]);
	} else Md(e, _d(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	V(e, r);
	for (let t = 0; t < r; t++) B(e, n.codePointAt(t));
}, jd = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = Wu(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Gu(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, Md = (e, t) => {
	V(e, t.byteLength), jd(e, t);
}, Nd = (e, t) => {
	Td(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, Pd = (e, t) => Nd(e, 4).setFloat32(0, t, !1), Fd = (e, t) => Nd(e, 8).setFloat64(0, t, !1), Id = (e, t) => Nd(e, 8).setBigInt64(0, t, !1), Ld = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), Rd = (e) => (Ld.setFloat32(0, e), Ld.getFloat32(0) === e), zd = (e, t) => {
	switch (typeof t) {
		case "string":
			B(e, 119), Ad(e, t);
			break;
		case "number":
			cd(t) && Uu(t) <= 2147483647 ? (B(e, 125), Dd(e, t)) : Rd(t) ? (B(e, 124), Pd(e, t)) : (B(e, 123), Fd(e, t));
			break;
		case "bigint":
			B(e, 122), Id(e, t);
			break;
		case "object":
			if (t === null) B(e, 126);
			else if (Bu(t)) {
				B(e, 117), V(e, t.length);
				for (let n = 0; n < t.length; n++) zd(e, t[n]);
			} else if (t instanceof Uint8Array) B(e, 116), Md(e, t);
			else {
				B(e, 118);
				let n = Object.keys(t);
				V(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					Ad(e, i), zd(e, t[i]);
				}
			}
			break;
		case "boolean":
			B(e, t ? 120 : 121);
			break;
		default: B(e, 127);
	}
}, Bd = class extends bd {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && V(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, Vd = (e) => {
	e.count > 0 && (Dd(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && V(e.encoder, e.count - 2));
}, Hd = class {
	constructor() {
		this.encoder = new bd(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (Vd(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return Vd(this), wd(this.encoder);
	}
}, Ud = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Dd(e.encoder, t), e.count > 1 && V(e.encoder, e.count - 2);
	}
}, Wd = class {
	constructor() {
		this.encoder = new bd(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (Ud(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return Ud(this), wd(this.encoder);
	}
}, Gd = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new Hd();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new bd();
		return this.sarr.push(this.s), this.s = "", Ad(e, this.sarr.join("")), jd(e, this.lensE.toUint8Array()), wd(e);
	}
}, Kd = (e) => Error(e), qd = () => {
	throw Kd("Method unimplemented");
}, Jd = () => {
	throw Kd("Unexpected case");
}, Yd = Kd("Unexpected end of array"), Xd = Kd("Integer out of Range"), Zd = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, Qd = (e) => new Zd(e), $d = (e) => e.pos !== e.arr.length, ef = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, tf = (e) => ef(e, H(e)), nf = (e) => e.arr[e.pos++], H = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > od) throw Xd;
	}
	throw Yd;
}, rf = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > od) throw Xd;
	}
	throw Yd;
}, af = vd ? (e) => vd.decode(tf(e)) : (e) => {
	let t = H(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(nf(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(nf(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, of = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, sf = [
	(e) => void 0,
	(e) => null,
	rf,
	(e) => of(e, 4).getFloat32(0, !1),
	(e) => of(e, 8).getFloat64(0, !1),
	(e) => of(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	af,
	(e) => {
		let t = H(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = af(e);
			n[t] = cf(e);
		}
		return n;
	},
	(e) => {
		let t = H(e), n = [];
		for (let r = 0; r < t; r++) n.push(cf(e));
		return n;
	},
	tf
], cf = (e) => sf[127 - nf(e)](e), lf = class extends Zd {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), $d(this) ? this.count = H(this) + 1 : this.count = -1), this.count--, this.s;
	}
}, uf = class extends Zd {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = rf(this);
			let e = Ku(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = H(this) + 2);
		}
		return this.count--, this.s;
	}
}, df = class extends Zd {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = rf(this), t = e & 1;
			this.diff = Hu(e / 2), this.count = 1, t && (this.count = H(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, ff = class {
	constructor(e) {
		this.decoder = new uf(e), this.str = af(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var pf = crypto.getRandomValues.bind(crypto), mf = Math.random, hf = () => pf(new Uint32Array(1))[0], gf = (e) => e[Hu(mf() * e.length)], _f = "10000000-1000-4000-8000-100000000000", vf = () => _f.replace(/[018]/g, (e) => (e ^ hf() & 15 >> e / 4).toString(16)), yf = Date.now, bf = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region node_modules/lib0/conditions.js
/* c8 ignore next */
var xf = (e) => e === void 0 ? null : e, Sf = new class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	setItem(e, t) {
		this.map.set(e, t);
	}
	getItem(e) {
		return this.map.get(e);
	}
}();
/* c8 ignore start */
try {
	typeof localStorage < "u" && localStorage && (Sf = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Cf = Sf, wf = Symbol("Equality"), Tf = (e, t) => e === t || !!e?.[wf]?.(t) || !1, Ef = (e) => typeof e == "object", Df = Object.assign, Of = Object.keys, kf = (e, t) => {
	for (let n in e) t(e[n], n);
}, Af = (e) => Of(e).length, jf = (e) => {
	for (let t in e) return !1;
	return !0;
}, Mf = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Nf = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Pf = (e, t) => e === t || Af(e) === Af(t) && Mf(e, (e, n) => (e !== void 0 || Nf(t, n)) && Tf(t[n], e)), Ff = Object.freeze, If = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && If(e[t]);
	}
	return Ff(e);
}, Lf = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && Lf(e, t, n + 1);
	}
}, Rf = (e, t) => {
	if (e === t) return !0;
	if (e == null || t == null || e.constructor !== t.constructor && (e.constructor || Object) !== (t.constructor || Object)) return !1;
	if (e[wf] != null) return e[wf](t);
	switch (e.constructor) {
		case ArrayBuffer: e = new Uint8Array(e), t = new Uint8Array(t);
		case Uint8Array:
			if (e.byteLength !== t.byteLength) return !1;
			for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
			break;
		case Set:
			if (e.size !== t.size) return !1;
			for (let n of e) if (!t.has(n)) return !1;
			break;
		case Map:
			if (e.size !== t.size) return !1;
			for (let n of e.keys()) if (!t.has(n) || !Rf(e.get(n), t.get(n))) return !1;
			break;
		case void 0:
		case Object:
			if (Af(e) !== Af(t)) return !1;
			for (let n in e) if (!Nf(e, n) || !Rf(e[n], t[n])) return !1;
			break;
		case Array:
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) if (!Rf(e[n], t[n])) return !1;
			break;
		default: return !1;
	}
	return !0;
}, zf = (e, t) => t.includes(e), Bf = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Vf = typeof window < "u" && typeof document < "u" && !Bf;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var Hf, Uf = [], Wf = () => {
	if (Hf === void 0) if (Bf) {
		Hf = Ou();
		let e = process.argv, t = null;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r[0] === "-" ? (t !== null && Hf.set(t, ""), t = r) : t === null ? Uf.push(r) : (Hf.set(t, r), t = null);
		}
		t !== null && Hf.set(t, "");
	} else typeof location == "object" ? (Hf = Ou(), (location.search || "?").slice(1).split("&").forEach((e) => {
		if (e.length !== 0) {
			let [t, n] = e.split("=");
			Hf.set(`--${md(t, "-")}`, n), Hf.set(`-${md(t, "-")}`, n);
		}
	})) : Hf = Ou();
	return Hf;
}, Gf = (e) => Wf().has(e), Kf = (e) => xf(Bf ? process.env[e.toUpperCase().replaceAll("-", "_")] : Cf.getItem(e)), qf = (e) => Gf("--" + e) || Kf(e) !== null, Jf = qf("production"), Yf = Bf && zf(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !Gf("--no-colors") && !qf("no-color") && (!Bf || process.stdout.isTTY) && (!Bf || Gf("--color") || Kf("COLORTERM") !== null || (Kf("TERM") || "").includes("color")), Xf = Vf ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += ld(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), Zf = (e) => Sd((t) => zd(t, e)), Qf = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, $f = (e, t) => new Qf(e, t), ep = (e) => e.next() >= .5, tp = (e, t, n) => Hu(e.next() * (n + 1 - t) + t), np = (e, t, n) => Hu(e.next() * (n + 1 - t) + t), rp = (e, t, n) => np(e, t, n), ip = (e) => ld(rp(e, 97, 122)), ap = (e, t = 0, n = 20) => {
	let r = rp(e, t, n), i = "";
	for (let t = 0; t < r; t++) i += ip(e);
	return i;
}, op = (e, t) => t[rp(e, 0, t.length - 1)], sp = Symbol("0schema"), cp = class {
	constructor() {
		this._rerrs = [];
	}
	extend(e, t, n, r = null) {
		this._rerrs.push({
			path: e,
			expected: t,
			has: n,
			message: r
		});
	}
	toString() {
		let e = [];
		for (let t = this._rerrs.length - 1; t > 0; t--) {
			let n = this._rerrs[t];
			/* c8 ignore next */
			e.push(yd(" ", (this._rerrs.length - t) * 2) + `${n.path == null ? "" : `[${n.path}] `}${n.has} doesn't match ${n.expected}. ${n.message}`);
		}
		return e.join("\n");
	}
}, lp = (e, t) => e === t ? !0 : e == null || t == null || e.constructor !== t.constructor ? !1 : e[wf] ? Tf(e, t) : Bu(e) ? Lu(e, (e) => Ru(t, (t) => lp(e, t))) : Ef(e) ? Mf(e, (e, n) => lp(e, t[n])) : !1, up = class {
	static _dilutes = !1;
	extends(e) {
		let [t, n] = [this.shape, e.shape];
		return this.constructor._dilutes && ([n, t] = [t, n]), lp(t, n);
	}
	equals(e) {
		return this.constructor === e.constructor && Rf(this.shape, e.shape);
	}
	[sp]() {
		return !0;
	}
	[wf](e) {
		return this.equals(e);
	}
	validate(e) {
		return this.check(e);
	}
	/* c8 ignore start */
	check(e, t) {
		qd();
	}
	/* c8 ignore stop */
	get nullable() {
		return Vp(this, nm);
	}
	get optional() {
		return new yp(this);
	}
	cast(e) {
		return om(e, this), e;
	}
	expect(e) {
		return om(e, this), e;
	}
}, dp = class extends up {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t = void 0) {
		let n = e?.constructor === this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name, e?.constructor === this.shape ? "Check failed" : "Constructor match failed"), n;
	}
}, U = (e, t = null) => new dp(e, t);
U(dp);
var fp = class extends up {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape(e);
		return !n && t?.extend(null, "custom prop", e?.constructor.name, "failed to check custom prop"), n;
	}
}, W = (e) => new fp(e);
U(fp);
var pp = class extends up {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape.some((t) => t === e);
		return !n && t?.extend(null, this.shape.join(" | "), e.toString()), n;
	}
}, mp = (...e) => new pp(e), hp = U(pp), gp = RegExp.escape || ((e) => e.replace(/[().|&,$^[\]]/g, (e) => "\\" + e)), _p = (e) => {
	if (Zp.check(e)) return [gp(e)];
	if (hp.check(e)) return e.shape.map((e) => e + "");
	if (Xp.check(e)) return ["[+-]?\\d+.?\\d*"];
	if (Qp.check(e)) return [".*"];
	if (Hp.check(e)) return e.shape.map(_p).flat(1);
	/* c8 ignore next 2 */
	Jd();
};
U(class extends up {
	constructor(e) {
		super(), this.shape = e, this._r = RegExp("^" + e.map(_p).map((e) => `(${e.join("|")})`).join("") + "$");
	}
	check(e, t) {
		let n = this._r.exec(e) != null;
		return !n && t?.extend(null, this._r.toString(), e.toString(), "String doesn't match string template."), n;
	}
});
var vp = Symbol("optional"), yp = class extends up {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = e === void 0 || this.shape.check(e);
		return !n && t?.extend(null, "undefined (optional)", "()"), n;
	}
	get [vp]() {
		return !0;
	}
}, bp = U(yp), xp = class extends up {
	check(e, t) {
		return t?.extend(null, "never", typeof e), !1;
	}
};
new xp(), U(xp);
var Sp = class e extends up {
	constructor(e, t = !1) {
		super(), this.shape = e, this._isPartial = t;
	}
	static _dilutes = !0;
	get partial() {
		return new e(this.shape, !0);
	}
	check(e, t) {
		return e == null ? (t?.extend(null, "object", "null"), !1) : Mf(this.shape, (n, r) => {
			let i = this._isPartial && !Nf(e, r) || n.check(e[r], t);
			return !i && t?.extend(r.toString(), n.toString(), typeof e[r], "Object property does not match"), i;
		});
	}
}, Cp = (e) => new Sp(e), wp = U(Sp), Tp = W((e) => e != null && (e.constructor === Object || e.constructor == null)), Ep = class extends up {
	constructor(e, t) {
		super(), this.shape = {
			keys: e,
			values: t
		};
	}
	check(e, t) {
		return e != null && Mf(e, (n, r) => {
			let i = this.shape.keys.check(r, t);
			return !i && t?.extend(r + "", "Record", typeof e, i ? "Key doesn't match schema" : "Value doesn't match value"), i && this.shape.values.check(n, t);
		});
	}
}, Dp = (e, t) => new Ep(e, t), Op = U(Ep), kp = class extends up {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		return e != null && Mf(this.shape, (n, r) => {
			let i = n.check(e[r], t);
			return !i && t?.extend(r.toString(), "Tuple", typeof n), i;
		});
	}
}, Ap = (...e) => new kp(e);
U(kp);
var jp = class extends up {
	constructor(e) {
		super(), this.shape = e.length === 1 ? e[0] : new Bp(e);
	}
	check(e, t) {
		let n = Bu(e) && Lu(e, (e) => this.shape.check(e));
		return !n && t?.extend(null, "Array", ""), n;
	}
}, Mp = (...e) => new jp(e), Np = U(jp), Pp = W((e) => Bu(e)), Fp = class extends up {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t) {
		let n = e instanceof this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name), n;
	}
}, Ip = (e, t = null) => new Fp(e, t);
U(Fp);
var Lp = Ip(up), Rp = U(class extends up {
	constructor(e) {
		super(), this.len = e.length - 1, this.args = Ap(...e.slice(-1)), this.res = e[this.len];
	}
	check(e, t) {
		let n = e.constructor === Function && e.length <= this.len;
		return !n && t?.extend(null, "function", typeof e), n;
	}
}), zp = W((e) => typeof e == "function");
U(class extends up {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = Lu(this.shape, (n) => n.check(e, t));
		return !n && t?.extend(null, "Intersectinon", typeof e), n;
	}
}, (e) => e.shape.length > 0);
var Bp = class extends up {
	static _dilutes = !0;
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = Ru(this.shape, (n) => n.check(e, t));
		return t?.extend(null, "Union", typeof e), n;
	}
}, Vp = (...e) => e.findIndex((e) => Hp.check(e)) >= 0 ? Vp(...e.map((e) => am(e)).map((e) => Hp.check(e) ? e.shape : [e]).flat(1)) : e.length === 1 ? e[0] : new Bp(e), Hp = U(Bp), Up = () => !0, Wp = W(Up), Gp = U(fp, (e) => e.shape === Up), Kp = W((e) => typeof e == "bigint"), qp = W((e) => e === Kp), Jp = W((e) => typeof e == "symbol");
W((e) => e === Jp);
var Yp = W((e) => typeof e == "number"), Xp = W((e) => e === Yp), Zp = W((e) => typeof e == "string"), Qp = W((e) => e === Zp), $p = W((e) => typeof e == "boolean"), em = W((e) => e === $p), tm = mp(void 0);
U(pp, (e) => e.shape.length === 1 && e.shape[0] === void 0), mp(void 0);
var nm = mp(null), rm = U(pp, (e) => e.shape.length === 1 && e.shape[0] === null);
U(Uint8Array), U(dp, (e) => e.shape === Uint8Array);
var im = Vp(Yp, Zp, nm, tm, Kp, $p, Jp);
(() => {
	let e = Mp(Wp), t = Dp(Zp, Wp), n = Vp(Yp, Zp, nm, $p, e, t);
	return e.shape = n, t.shape.values = n, n;
})();
var am = (e) => {
	if (Lp.check(e)) return e;
	if (Tp.check(e)) {
		let t = {};
		for (let n in e) t[n] = am(e[n]);
		return Cp(t);
	} else if (Pp.check(e)) return Vp(...e.map(am));
	else if (im.check(e)) return mp(e);
	else if (zp.check(e)) return U(e);
	/* c8 ignore next */
	Jd();
}, om = Jf ? () => {} : (e, t) => {
	let n = new cp();
	if (!t.check(e, n)) throw Kd(`Expected value to be of type ${t.constructor.name}.\n${n.toString()}`);
}, sm = class {
	constructor(e) {
		this.patterns = [], this.$state = e;
	}
	if(e, t) {
		return this.patterns.push({
			if: am(e),
			h: t
		}), this;
	}
	else(e) {
		return this.if(Wp, e);
	}
	done() {
		return (e, t) => {
			for (let n = 0; n < this.patterns.length; n++) {
				let r = this.patterns[n];
				if (r.if.check(e)) return r.h(e, t);
			}
			throw Kd("Unhandled pattern");
		};
	}
}, cm = ((e) => new sm(e))(Wp).if(Xp, (e, t) => tp(t, sd, od)).if(Qp, (e, t) => ap(t)).if(em, (e, t) => ep(t)).if(qp, (e, t) => BigInt(tp(t, sd, od))).if(Hp, (e, t) => lm(t, op(t, e.shape))).if(wp, (e, t) => {
	let n = {};
	for (let r in e.shape) {
		let i = e.shape[r];
		if (bp.check(i)) {
			if (ep(t)) continue;
			i = i.shape;
		}
		n[r] = cm(i, t);
	}
	return n;
}).if(Np, (e, t) => {
	let n = [], r = np(t, 0, 42);
	for (let i = 0; i < r; i++) n.push(lm(t, e.shape));
	return n;
}).if(hp, (e, t) => op(t, e.shape)).if(rm, (e, t) => null).if(Rp, (e, t) => {
	let n = lm(t, e.res);
	return () => n;
}).if(Gp, (e, t) => lm(t, op(t, [
	Yp,
	Zp,
	nm,
	tm,
	Kp,
	$p,
	Mp(Yp),
	Dp(Vp("a", "b", "c"), Yp)
]))).if(Op, (e, t) => {
	let n = {}, r = tp(t, 0, 3);
	for (let i = 0; i < r; i++) {
		let r = lm(t, e.shape.keys);
		n[r] = lm(t, e.shape.values);
	}
	return n;
}).done(), lm = (e, t) => cm(am(t), e), um = typeof document < "u" ? document : {};
W((e) => e.nodeType === hm), typeof DOMParser < "u" && new DOMParser(), W((e) => e.nodeType === fm), W((e) => e.nodeType === pm);
var dm = (e) => ju(e, (e, t) => `${t}:${e};`).join(""), fm = um.ELEMENT_NODE, pm = um.TEXT_NODE;
um.CDATA_SECTION_NODE, um.COMMENT_NODE;
var mm = um.DOCUMENT_NODE;
um.DOCUMENT_TYPE_NODE;
var hm = um.DOCUMENT_FRAGMENT_NODE;
W((e) => e.nodeType === mm);
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/eventloop.js
var gm = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), _m = (e, t) => new gm(setTimeout(t, e)), vm = Symbol, ym = vm(), bm = vm(), xm = vm(), Sm = vm(), Cm = vm(), wm = vm(), Tm = vm(), Em = vm(), Dm = vm(), Om = (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = 0;
	for (; r < e.length; r++) {
		let n = e[r];
		if (n === void 0) break;
		if (n.constructor === String || n.constructor === Number) t.push(n);
		else if (n.constructor === Object) break;
	}
	for (r > 0 && n.push(t.join("")); r < e.length; r++) {
		let t = e[r];
		t instanceof Symbol || n.push(t);
	}
	return n;
};
yf();
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/logging.js
var km = {
	[ym]: $f("font-weight", "bold"),
	[bm]: $f("font-weight", "normal"),
	[xm]: $f("color", "blue"),
	[Cm]: $f("color", "green"),
	[Sm]: $f("color", "grey"),
	[wm]: $f("color", "red"),
	[Tm]: $f("color", "purple"),
	[Em]: $f("color", "orange"),
	[Dm]: $f("color", "black")
}, Am = Yf ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = Ou(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = km[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = dm(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : Om, jm = (...e) => {
	/* c8 ignore next */
	console.log(...Am(e)), Nm.forEach((t) => t.print(e));
}, Mm = (...e) => {
	console.warn(...Am(e)), e.unshift(Em), Nm.forEach((t) => t.print(e));
}, Nm = Nu(), Pm = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), Fm = (e, t) => Pm(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Im = (e, t) => Pm(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), Lm = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Rm = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, zm = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Vh(e, i, o.clock, o.len, n);
	}
}), Bm = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = Hu((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Vm = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && Bm(n, t.clock) !== null;
}, Hm = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? e[n - 1] = new Lm(r.clock, Gu(r.len, i.clock + i.len - r.clock)) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Um = (e) => {
	let t = new Rm();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) Fu(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return Hm(t), t;
}, Wm = (e, t, n, r) => {
	Au(e.clients, t, () => []).push(new Lm(n, r));
}, Gm = () => new Rm(), Km = (e) => {
	let t = Gm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new Lm(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, qm = (e, t) => {
	V(e.restEncoder, t.clients.size), Iu(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), V(e.restEncoder, t);
		let r = n.length;
		V(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, Jm = (e) => {
	let t = new Rm(), n = H(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = H(e.restDecoder), r = H(e.restDecoder);
		if (r > 0) {
			let i = Au(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new Lm(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Ym = (e, t, n) => {
	let r = new Rm(), i = H(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = H(e.restDecoder), a = H(e.restDecoder), o = n.clients.get(i) || [], s = K(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && Wm(r, i, s, a - s);
				let e = Fh(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, Z_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, Z_(t, c, a - c.id.clock)), c.delete(t));
			} else Wm(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new rh();
		return V(e.restEncoder, 0), qm(e, r), e.toUint8Array();
	}
	return null;
}, Xm = hf, Zm = class e extends Vu {
	constructor({ guid: e = vf(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = Xm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new Mh(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = bf((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => bf((e) => {
			let t = (n) => {
				(n === void 0 || n === !0) && (this.off("sync", t), e());
			};
			this.on("sync", t);
		});
		this.on("sync", (e) => {
			e === !1 && this.isSynced && (this.whenSynced = s()), this.isSynced = e === void 0 || e === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
		}), this.whenSynced = s();
	}
	load() {
		let e = this._item;
		e !== null && !this.shouldLoad && q(e.parent.doc, (e) => {
			e.subdocsLoaded.add(this);
		}, null, !0), this.shouldLoad = !0;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(Iu(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return q(this, e, t);
	}
	get(e, t = J) {
		let n = Au(this.share, e, () => {
			let e = new t();
			return e._integrate(this, null), e;
		}), r = n.constructor;
		if (t !== J && r !== t) if (r === J) {
			let r = new t();
			r._map = n._map, n._map.forEach((e) => {
				for (; e !== null; e = e.left) e.parent = r;
			}), r._start = n._start;
			for (let e = r._start; e !== null; e = e.right) e.parent = r;
			return r._length = n._length, this.share.set(e, r), r._integrate(this, null), r;
		} else throw Error(`Type with the name ${e} has already been defined with a different constructor`);
		return n;
	}
	getArray(e = "") {
		return this.get(e, Bg);
	}
	getText(e = "") {
		return this.get(e, s_);
	}
	getMap(e = "") {
		return this.get(e, Ug);
	}
	getXmlElement(e = "") {
		return this.get(e, f_);
	}
	getXmlFragment(e = "") {
		return this.get(e, u_);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, Iu(this.subdocs).forEach((e) => e.destroy());
		let t = this._item;
		if (t !== null) {
			this._item = null;
			let n = t.content;
			n.doc = new e({
				guid: this.guid,
				...n.opts,
				shouldLoad: !1
			}), n.doc._item = t, q(t.parent.doc, (e) => {
				let r = n.doc;
				t.deleted || e.subdocsAdded.add(r), e.subdocsRemoved.add(this);
			}, null, !0);
		}
		this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
	}
}, Qm = class {
	constructor(e) {
		this.dsCurrVal = 0, this.restDecoder = e;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	readDsClock() {
		return this.dsCurrVal += H(this.restDecoder), this.dsCurrVal;
	}
	readDsLen() {
		let e = H(this.restDecoder) + 1;
		return this.dsCurrVal += e, e;
	}
}, $m = class extends Qm {
	constructor(e) {
		super(e), this.keys = [], H(e), this.keyClockDecoder = new df(tf(e)), this.clientDecoder = new uf(tf(e)), this.leftClockDecoder = new df(tf(e)), this.rightClockDecoder = new df(tf(e)), this.infoDecoder = new lf(tf(e), nf), this.stringDecoder = new ff(tf(e)), this.parentInfoDecoder = new lf(tf(e), nf), this.typeRefDecoder = new uf(tf(e)), this.lenDecoder = new uf(tf(e));
	}
	readLeftID() {
		return new gh(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new gh(this.clientDecoder.read(), this.rightClockDecoder.read());
	}
	readClient() {
		return this.clientDecoder.read();
	}
	readInfo() {
		return this.infoDecoder.read();
	}
	readString() {
		return this.stringDecoder.read();
	}
	readParentInfo() {
		return this.parentInfoDecoder.read() === 1;
	}
	readTypeRef() {
		return this.typeRefDecoder.read();
	}
	readLen() {
		return this.lenDecoder.read();
	}
	readAny() {
		return cf(this.restDecoder);
	}
	readBuf() {
		return tf(this.restDecoder);
	}
	readJSON() {
		return cf(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, eh = class {
	constructor() {
		this.restEncoder = xd();
	}
	toUint8Array() {
		return wd(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		V(this.restEncoder, e);
	}
	writeDsLen(e) {
		V(this.restEncoder, e);
	}
}, th = class extends eh {
	writeLeftID(e) {
		V(this.restEncoder, e.client), V(this.restEncoder, e.clock);
	}
	writeRightID(e) {
		V(this.restEncoder, e.client), V(this.restEncoder, e.clock);
	}
	writeClient(e) {
		V(this.restEncoder, e);
	}
	writeInfo(e) {
		Ed(this.restEncoder, e);
	}
	writeString(e) {
		Ad(this.restEncoder, e);
	}
	writeParentInfo(e) {
		V(this.restEncoder, +!!e);
	}
	writeTypeRef(e) {
		V(this.restEncoder, e);
	}
	writeLen(e) {
		V(this.restEncoder, e);
	}
	writeAny(e) {
		zd(this.restEncoder, e);
	}
	writeBuf(e) {
		Md(this.restEncoder, e);
	}
	writeJSON(e) {
		Ad(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		Ad(this.restEncoder, e);
	}
}, nh = class {
	constructor() {
		this.restEncoder = xd(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return wd(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, V(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && Jd(), V(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, rh = class extends nh {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Wd(), this.clientEncoder = new Hd(), this.leftClockEncoder = new Wd(), this.rightClockEncoder = new Wd(), this.infoEncoder = new Bd(Ed), this.stringEncoder = new Gd(), this.parentInfoEncoder = new Bd(Ed), this.typeRefEncoder = new Hd(), this.lenEncoder = new Hd();
	}
	toUint8Array() {
		let e = xd();
		return V(e, 0), Md(e, this.keyClockEncoder.toUint8Array()), Md(e, this.clientEncoder.toUint8Array()), Md(e, this.leftClockEncoder.toUint8Array()), Md(e, this.rightClockEncoder.toUint8Array()), Md(e, wd(this.infoEncoder)), Md(e, this.stringEncoder.toUint8Array()), Md(e, wd(this.parentInfoEncoder)), Md(e, this.typeRefEncoder.toUint8Array()), Md(e, this.lenEncoder.toUint8Array()), jd(e, wd(this.restEncoder)), wd(e);
	}
	writeLeftID(e) {
		this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
	}
	writeRightID(e) {
		this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
	}
	writeClient(e) {
		this.clientEncoder.write(e);
	}
	writeInfo(e) {
		this.infoEncoder.write(e);
	}
	writeString(e) {
		this.stringEncoder.write(e);
	}
	writeParentInfo(e) {
		this.parentInfoEncoder.write(+!!e);
	}
	writeTypeRef(e) {
		this.typeRefEncoder.write(e);
	}
	writeLen(e) {
		this.lenEncoder.write(e);
	}
	writeAny(e) {
		zd(this.restEncoder, e);
	}
	writeBuf(e) {
		Md(this.restEncoder, e);
	}
	writeJSON(e) {
		zd(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, ih = (e, t, n, r) => {
	r = Gu(r, t[0].id.clock);
	let i = Fh(t, r);
	V(e.restEncoder, t.length - i), e.writeClient(n), V(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, ah = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		K(t, n) > e && r.set(n, e);
	}), Nh(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), V(e.restEncoder, r.size), Iu(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		ih(e, t.clients.get(n), n, r);
	});
}, oh = (e, t) => {
	let n = Ou(), r = H(e.restDecoder);
	for (let i = 0; i < r; i++) {
		let r = H(e.restDecoder), i = Array(r), a = e.readClient(), o = H(e.restDecoder);
		n.set(a, {
			i: 0,
			refs: i
		});
		for (let n = 0; n < r; n++) {
			let r = e.readInfo();
			switch (31 & r) {
				case 0: {
					let t = e.readLen();
					i[n] = new x_(G(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = H(e.restDecoder);
					i[n] = new rv(G(a, o), t), o += t;
					break;
				}
				default: {
					let s = (r & 192) == 0, c = new X(G(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, ev(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, sh = (e, t, n) => {
	let r = [], i = Iu(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new Mh(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
		let n = c.get(e);
		(n == null || n > t) && c.set(e, t);
	}, u = o.refs[o.i++], d = /* @__PURE__ */ new Map(), f = () => {
		for (let e of r) {
			let t = e.id.client, r = n.get(t);
			r ? (r.i--, s.clients.set(t, r.refs.slice(r.i)), n.delete(t), r.i = 0, r.refs = []) : s.clients.set(t, [e]), i = i.filter((e) => e !== t);
		}
		r.length = 0;
	};
	for (;;) {
		if (u.constructor !== rv) {
			let i = Au(d, u.id.client, () => K(t, u.id.client)) - u.id.clock;
			if (i < 0) r.push(u), l(u.id.client, u.id.clock - 1), f();
			else {
				let a = u.getMissing(e, t);
				if (a !== null) {
					r.push(u);
					let e = n.get(a) || {
						refs: [],
						i: 0
					};
					if (e.refs.length === e.i) l(a, K(t, a)), f();
					else {
						u = e.refs[e.i++];
						continue;
					}
				} else (i === 0 || i < u.length) && (u.integrate(e, i), d.set(u.id.client, u.id.clock + u.length));
			}
		}
		if (r.length > 0) u = r.pop();
		else if (o !== null && o.i < o.refs.length) u = o.refs[o.i++];
		else {
			if (o = a(), o === null) break;
			u = o.refs[o.i++];
		}
	}
	if (s.clients.size > 0) {
		let e = new rh();
		return ah(e, s, /* @__PURE__ */ new Map()), V(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, ch = (e, t) => ah(e, t.doc.store, t.beforeState), lh = (e, t, n, r = new $m(e)) => q(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = sh(e, i, oh(r, n)), o = i.pendingStructs;
	if (o) {
		for (let [e, n] of o.missing) if (n < K(i, e)) {
			t = !0;
			break;
		}
		if (a) {
			for (let [e, t] of a.missing) {
				let n = o.missing.get(e);
				(n == null || n > t) && o.missing.set(e, t);
			}
			o.update = rg([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Ym(r, e, i);
	if (i.pendingDs) {
		let t = new $m(Qd(i.pendingDs));
		H(t.restDecoder);
		let n = Ym(t, e, i);
		s && n ? i.pendingDs = rg([s, n]) : i.pendingDs = s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, uh(e.doc, t);
	}
}, n, !1), uh = (e, t, n, r = $m) => {
	let i = Qd(t);
	lh(i, e, n, new r(i));
}, dh = class {
	constructor() {
		this.l = [];
	}
}, fh = () => new dh(), ph = (e, t) => e.l.push(t), mh = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, hh = (e, t, n) => Lf(e.l, [t, n]), gh = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, _h = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, G = (e, t) => new gh(e, t), vh = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw Jd();
}, yh = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, bh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, xh = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, Sh = (e, t, n = 0) => new xh(e, t, n), Ch = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = vh(e) : r = G(e._item.id.client, e._item.id.clock), new bh(r, i, t, n);
}, wh = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return Ch(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return Ch(e, G(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return Ch(e, r.lastId, n);
		r = r.right;
	}
	return Ch(e, null, n);
}, Th = (e, t) => {
	let n = Ih(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, Eh = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (K(r, i.client) <= i.clock) return null;
		let e = n ? Y_(r, i) : Th(r, i), t = e.item;
		if (!(t instanceof X)) return null;
		if (c = t.parent, c._item === null || !c._item.deleted) {
			l = t.deleted || !t.countable ? 0 : e.diff + (s >= 0 ? 0 : 1);
			let n = t.left;
			for (; n !== null;) !n.deleted && n.countable && (l += n.length), n = n.left;
		}
	} else {
		if (o !== null) c = t.get(o);
		else if (a !== null) {
			if (K(r, a.client) <= a.clock) return null;
			let { item: e } = n ? Y_(r, a) : { item: Ih(r, a) };
			if (e instanceof X && e.content instanceof q_) c = e.content.type;
			else return null;
		} else throw Jd();
		l = s >= 0 ? c._length : 0;
	}
	return Sh(c, l, e.assoc);
}, Dh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, Oh = (e, t) => new Dh(e, t);
Oh(Gm(), /* @__PURE__ */ new Map());
var kh = (e) => Oh(Km(e.store), Nh(e.store)), Ah = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Vm(t.ds, e.id), jh = (e, t) => {
	let n = Au(e.meta, jh, Nu), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < K(r, n) && Rh(e, G(n, t));
	}), zm(e, t.ds, (e) => {}), n.add(t));
}, Mh = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Nh = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.clients.forEach((e, n) => {
		let r = e[e.length - 1];
		t.set(n, r.id.clock + r.length);
	}), t;
}, K = (e, t) => {
	let n = e.clients.get(t);
	if (n === void 0) return 0;
	let r = n[n.length - 1];
	return r.id.clock + r.length;
}, Ph = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw Jd();
	}
	n.push(t);
}, Fh = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = Hu(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = Hu((n + r) / 2);
	}
	throw Jd();
}, Ih = (e, t) => {
	let n = e.clients.get(t.client);
	return n[Fh(n, t.clock)];
}, Lh = (e, t, n) => {
	let r = Fh(t, n), i = t[r];
	return i.id.clock < n && i instanceof X ? (t.splice(r + 1, 0, Z_(e, i, n - i.id.clock)), r + 1) : r;
}, Rh = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[Lh(e, n, t.clock)];
}, zh = (e, t, n) => {
	let r = t.clients.get(n.client), i = Fh(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== x_ && r.splice(i + 1, 0, Z_(e, a, n.clock - a.id.clock + 1)), a;
}, Bh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[Fh(r, t.id.clock)] = n;
}, Vh = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = Lh(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && Lh(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, Hh = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Rm(), this.beforeState = Nh(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Uh = (e, t) => t.deleteSet.clients.size === 0 && !Mu(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (Hm(t.deleteSet), ch(e, t), qm(e, t.deleteSet), !0), Wh = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && Au(e.changed, t, Nu).add(n);
}, Gh = (e, t) => {
	let n = e[t], r = e[t - 1], i = t;
	for (; i > 0; n = r, r = e[--i - 1]) {
		if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
			n instanceof X && n.parentSub !== null && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
			continue;
		}
		break;
	}
	let a = t - i;
	return a && e.splice(t + 1 - a, a), a;
}, Kh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = Fh(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof X && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, qh = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = Wu(r.length - 1, 1 + Fh(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + Gh(r, e);
		}
	});
}, Jh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			Hm(a), n.afterState = Nh(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((t, r) => {
					r._dEH.l.length > 0 && (r._item === null || !r._item.deleted) && (t = t.filter((e) => e.target._item === null || !e.target._item.deleted), t.forEach((e) => {
						e.currentTarget = r, e._path = null;
					}), t.sort((e, t) => e.path.length - t.path.length), e.push(() => {
						hh(r._dEH, t, n);
					}));
				}), e.push(() => r.emit("afterTransaction", [n, r])), e.push(() => {
					n._needFormattingCleanup && i_(n);
				});
			}), Lf(e, []);
		} finally {
			r.gc && Kh(a, i, r.gcFilter), qh(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = Gu(Fh(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + Gh(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = Fh(r, n);
				a + 1 < r.length && Gh(r, a + 1) > 1 || a > 0 && Gh(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (jm(Em, ym, "[yjs] ", bm, wm, "Changed the client-id because another client seems to be using it."), r.clientID = Xm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new th();
				Uh(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new rh();
				Uh(e, n) && r.emit("updateV2", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			let { subdocsAdded: s, subdocsLoaded: c, subdocsRemoved: l } = n;
			(s.size > 0 || l.size > 0 || c.size > 0) && (s.forEach((e) => {
				e.clientID = r.clientID, e.collectionid ??= r.collectionid, r.subdocs.add(e);
			}), l.forEach((e) => r.subdocs.delete(e)), r.emit("subdocs", [
				{
					loaded: c,
					added: s,
					removed: l
				},
				r,
				n
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Jh(e, t + 1);
		}
	}
}, q = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new Hh(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && Jh(i, 0);
		}
	}
	return o;
}, Yh = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, Xh = (e, t, n) => {
	zm(e, n.deletions, (n) => {
		n instanceof X && t.scope.some((t) => t === e.doc || yh(t, n)) && X_(n, !1);
	});
}, Zh = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	q(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			zm(n, o.insertions, (e) => {
				if (e instanceof X) {
					if (e.redone !== null) {
						let { item: t, diff: i } = Y_(r, e.id);
						i > 0 && (t = Rh(n, G(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || yh(t, e)) && c.push(e);
				}
			}), zm(n, o.deletions, (e) => {
				e instanceof X && a.some((t) => t === n.doc || yh(t, e)) && !Vm(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = $_(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
			});
			for (let t = c.length - 1; t >= 0; t--) {
				let r = c[t];
				e.deleteFilter(r) && (r.delete(n), l = !0);
			}
			e.currStackItem = l ? o : null;
		}
		n.changed.forEach((e, t) => {
			e.has(null) && t._searchMarker && (t._searchMarker.length = 0);
		}), r = n;
	}, e);
	let o = e.currStackItem;
	if (o != null) {
		let t = r.changedParentTypes;
		e.emit("stack-item-popped", [{
			stackItem: o,
			type: n,
			changedParentTypes: t,
			origin: e
		}, e]), e.currStackItem = null;
	}
	return o;
}, Qh = class extends Vu {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = Bu(e) ? e[0].doc : e instanceof Zm ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Rm();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && Wm(i, n, r, a);
			});
			let a = yf(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Um([t.deletions, e.deleteSet]), t.insertions = Um([t.insertions, i]);
			} else r.push(new Yh(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), zm(e, e.deleteSet, (t) => {
				t instanceof X && this.scope.some((n) => n === e.doc || yh(n, t)) && X_(t, !0);
			});
			let s = [{
				stackItem: r[r.length - 1],
				origin: e.origin,
				type: t ? "redo" : "undo",
				changedParentTypes: e.changedParentTypes
			}, this];
			o ? this.emit("stack-item-added", s) : this.emit("stack-item-updated", s);
		}, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
			this.destroy();
		});
	}
	addToScope(e) {
		let t = new Set(this.scope);
		e = Bu(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof J ? e.doc !== this.doc : e !== this.doc) && Mm("[yjs#509] Not same Y.Doc"), this.scope.push(e));
		});
	}
	addTrackedOrigin(e) {
		this.trackedOrigins.add(e);
	}
	removeTrackedOrigin(e) {
		this.trackedOrigins.delete(e);
	}
	clear(e = !0, t = !0) {
		(e && this.canUndo() || t && this.canRedo()) && this.doc.transact((n) => {
			e && (this.undoStack.forEach((e) => Xh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => Xh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
				undoStackCleared: e,
				redoStackCleared: t
			}]);
		});
	}
	stopCapturing() {
		this.lastChange = 0;
	}
	undo() {
		this.undoing = !0;
		let e;
		try {
			e = Zh(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = Zh(this, this.redoStack, "redo");
		} finally {
			this.redoing = !1;
		}
		return e;
	}
	canUndo() {
		return this.undoStack.length > 0;
	}
	canRedo() {
		return this.redoStack.length > 0;
	}
	destroy() {
		this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
	}
};
function* $h(e) {
	let t = H(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = H(e.restDecoder), n = e.readClient(), r = H(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = H(e.restDecoder);
				yield new rv(G(n, r), t), r += t;
			} else if (31 & t) {
				let i = (t & 192) == 0, a = new X(G(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, ev(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new x_(G(n, r), t), r += t;
			}
		}
	}
}
var eg = class {
	constructor(e, t) {
		this.gen = $h(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === rv);
		return this.curr;
	}
}, tg = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, ng = (e, t) => {
	if (e.constructor === x_) {
		let { client: n, clock: r } = e.id;
		return new x_(G(n, r + t), e.length - t);
	} else if (e.constructor === rv) {
		let { client: n, clock: r } = e.id;
		return new rv(G(n, r + t), e.length - t);
	} else {
		let n = e, { client: r, clock: i } = n.id;
		return new X(G(r, i + t), null, G(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, rg = (e, t = $m, n = rh) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(Qd(e))), i = r.map((e) => new eg(e, !0)), a = null, o = new n(), s = new tg(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === rv ? 1 : -1 : n;
		} else return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) ag(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) if (a.struct.constructor === rv) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
			else {
				ag(s, a.struct, a.offset);
				let e = n.id.clock - a.struct.id.clock - a.struct.length;
				a = {
					struct: new rv(G(t, a.struct.id.clock + a.struct.length), e),
					offset: 0
				};
			}
			else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === rv ? a.struct.length -= t : n = ng(n, t)), a.struct.mergeWith(n) || (ag(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== rv; n = e.next()) ag(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (ag(s, a.struct, a.offset), a = null), og(s), qm(o, Um(r.map((e) => Jm(e)))), o.toUint8Array();
}, ig = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: wd(e.encoder.restEncoder)
	}), e.encoder.restEncoder = xd(), e.written = 0);
}, ag = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && ig(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), V(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, og = (e) => {
	ig(e);
	let t = e.encoder.restEncoder;
	V(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		V(t, r.written), jd(t, r.restEncoder);
	}
}, sg = "You must not compute changes after the event-handler fired.", cg = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= lg(this.currentTarget, this.target);
	}
	deletes(e) {
		return Vm(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw Kd(sg);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) if (e !== null && this.deletes(e)) i = "delete", a = Pu(e.content.getContent());
						else return;
						else e !== null && this.deletes(e) ? (i = "update", a = Pu(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = Pu(r.content.getContent());
					else return;
					e.set(n, {
						action: i,
						oldValue: a
					});
				}
			}), this._keys = e;
		}
		return this._keys;
	}
	get delta() {
		return this.changes.delta;
	}
	adds(e) {
		return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
	}
	get changes() {
		let e = this._changes;
		if (e === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw Kd(sg);
			let t = this.target, n = Nu(), r = Nu(), i = [];
			if (e = {
				added: n,
				deleted: r,
				delta: i,
				keys: this.keys
			}, this.transaction.changed.get(t).has(null)) {
				let e = null, a = () => {
					e && i.push(e);
				};
				for (let i = t._start; i !== null; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((e === null || e.delete === void 0) && (a(), e = { delete: 0 }), e.delete += i.length, r.add(i)) : this.adds(i) ? ((e === null || e.insert === void 0) && (a(), e = { insert: [] }), e.insert = e.insert.concat(i.content.getContent()), n.add(i)) : ((e === null || e.retain === void 0) && (a(), e = { retain: 0 }), e.retain += i.length);
				e !== null && e.retain === void 0 && a();
			}
			this._changes = e;
		}
		return e;
	}
}, lg = (e, t) => {
	let n = [];
	for (; t._item !== null && t !== e;) {
		if (t._item.parentSub !== null) n.unshift(t._item.parentSub);
		else {
			let e = 0, r = t._item.parent._start;
			for (; r !== t._item && r !== null;) !r.deleted && r.countable && (e += r.length), r = r.right;
			n.unshift(e);
		}
		t = t._item.parent;
	}
	return n;
}, ug = () => {
	Mm("Invalid access: Add Yjs type to a document before reading data.");
}, dg = 80, fg = 0, pg = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = fg++;
	}
}, mg = (e) => {
	e.timestamp = fg++;
}, hg = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = fg++;
}, gg = (e, t, n) => {
	if (e.length >= dg) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return hg(r, t, n), r;
	} else {
		let r = new pg(t, n);
		return e.push(r), r;
	}
}, _g = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => Uu(t - e.index) < Uu(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, mg(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && Uu(n.index - i) < r.parent.length / dg ? (hg(n, r, i), n) : gg(e._searchMarker, r, i);
}, vg = (e, t, n) => {
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e[r];
		if (n > 0) {
			let t = i.p;
			for (t.marker = !1; t && (t.deleted || !t.countable);) t = t.left, t && !t.deleted && t.countable && (i.index -= t.length);
			if (t === null || t.marker === !0) {
				e.splice(r, 1);
				continue;
			}
			i.p = t, t.marker = !0;
		}
		(t < i.index || n > 0 && t === i.index) && (i.index = Gu(t, i.index + n));
	}
}, yg = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; Au(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	hh(r._eH, n, t);
}, J = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = fh(), this._dEH = fh(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw qd();
	}
	clone() {
		throw qd();
	}
	_write(e) {}
	get _first() {
		let e = this._start;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	_callObserver(e, t) {
		!e.local && this._searchMarker && (this._searchMarker.length = 0);
	}
	observe(e) {
		ph(this._eH, e);
	}
	observeDeep(e) {
		ph(this._dEH, e);
	}
	unobserve(e) {
		mh(this._eH, e);
	}
	unobserveDeep(e) {
		mh(this._dEH, e);
	}
	toJSON() {}
}, bg = (e, t, n) => {
	e.doc ?? ug(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
	let r = n - t, i = [], a = e._start;
	for (; a !== null && r > 0;) {
		if (a.countable && !a.deleted) {
			let e = a.content.getContent();
			if (e.length <= t) t -= e.length;
			else {
				for (let n = t; n < e.length && r > 0; n++) i.push(e[n]), r--;
				t = 0;
			}
		}
		a = a.right;
	}
	return i;
}, xg = (e) => {
	e.doc ?? ug();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, Sg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && Ah(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, Cg = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? ug(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, wg = (e, t) => {
	let n = [];
	return Cg(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, Tg = (e) => {
	let t = e._start, n = null, r = 0;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next: () => {
			if (n === null) {
				for (; t !== null && t.deleted;) t = t.right;
				if (t === null) return {
					done: !0,
					value: void 0
				};
				n = t.content.getContent(), r = 0, t = t.right;
			}
			let e = n[r++];
			return n.length <= r && (n = null), {
				done: !1,
				value: e
			};
		}
	};
}, Eg = (e, t) => {
	e.doc ?? ug();
	let n = _g(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, Dg = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new F_(l)), i.integrate(e, 0), l = []);
	};
	r.forEach((n) => {
		if (n === null) l.push(n);
		else switch (n.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
				l.push(n);
				break;
			default: switch (u(), n.constructor) {
				case Uint8Array:
				case ArrayBuffer:
					i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new S_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case Zm:
					i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new D_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof J) i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new q_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, Og = () => Kd("Length exceeded!"), kg = (e, t, n, r) => {
	if (n > t._length) throw Og();
	if (n === 0) return t._searchMarker && vg(t._searchMarker, n, r.length), Dg(e, t, null, r);
	let i = n, a = _g(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Rh(e, G(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && vg(t._searchMarker, i, r.length), Dg(e, t, o, r);
}, Ag = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return Dg(e, t, r, n);
}, jg = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = _g(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Rh(e, G(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Rh(e, G(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw Og();
	t._searchMarker && vg(t._searchMarker, i, -a + r);
}, Mg = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, Ng = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new F_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new F_([r]);
			break;
		case Uint8Array:
			s = new S_(r);
			break;
		case Zm:
			s = new D_(r);
			break;
		default: if (r instanceof J) s = new q_(r);
		else throw Error("Unexpected content type");
	}
	new X(G(o, K(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, Pg = (e, t) => {
	e.doc ?? ug();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Fg = (e) => {
	let t = {};
	return e.doc ?? ug(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Ig = (e, t) => {
	e.doc ?? ug();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, Lg = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && Ah(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, Rg = (e) => (e.doc ?? ug(), Fm(e._map.entries(), (e) => !e[1].deleted)), zg = class extends cg {}, Bg = class e extends J {
	constructor() {
		super(), this._prelimContent = [], this._searchMarker = [];
	}
	static from(t) {
		let n = new e();
		return n.push(t), n;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof J ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? ug(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), yg(this, e, new zg(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : q(this.doc, (n) => {
			kg(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : q(this.doc, (t) => {
			Ag(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : q(this.doc, (n) => {
			jg(n, this, e, t);
		});
	}
	get(e) {
		return Eg(this, e);
	}
	toArray() {
		return xg(this);
	}
	slice(e = 0, t = this.length) {
		return bg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof J ? e.toJSON() : e);
	}
	map(e) {
		return wg(this, e);
	}
	forEach(e) {
		Cg(this, e);
	}
	[Symbol.iterator]() {
		return Tg(this);
	}
	_write(e) {
		e.writeTypeRef(B_);
	}
}, Vg = (e) => new Bg(), Hg = class extends cg {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Ug = class e extends J {
	constructor(e) {
		super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimContent.forEach((e, t) => {
			this.set(t, e);
		}), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return this.forEach((e, n) => {
			t.set(n, e instanceof J ? e.clone() : e);
		}), t;
	}
	_callObserver(e, t) {
		yg(this, e, new Hg(this, e, t));
	}
	toJSON() {
		this.doc ?? ug();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof J ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...Rg(this)].length;
	}
	keys() {
		return Im(Rg(this), (e) => e[0]);
	}
	values() {
		return Im(Rg(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Im(Rg(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? ug(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : q(this.doc, (t) => {
			Mg(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : q(this.doc, (n) => {
			Ng(n, this, e, t);
		}), t;
	}
	get(e) {
		return Pg(this, e);
	}
	has(e) {
		return Ig(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : q(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				Mg(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(V_);
	}
}, Wg = (e) => new Ug(), Gg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Pf(e, t), Kg = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && Jd(), this.right.content.constructor) {
			case Y:
				this.right.deleted || Xg(this.currentAttributes, this.right.content);
				break;
			default:
				this.right.deleted || (this.index += this.right.length);
				break;
		}
		this.left = this.right, this.right = this.right.right;
	}
}, qg = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Y:
				t.right.deleted || Xg(t.currentAttributes, t.right.content);
				break;
			default:
				t.right.deleted || (n < t.right.length && Rh(e, G(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
				break;
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, Jg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? _g(t, n) : null;
	return a ? qg(e, new Kg(a.p.left, a.p, a.index, i), n - a.index) : qg(e, new Kg(null, t._start, 0, i), n);
}, Yg = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Y && Gg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new X(G(a, K(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Y(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, Xg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Zg = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Y && Gg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, Qg = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Gg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new X(G(a, K(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Y(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, $g = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Zg(n, i);
	let s = Qg(e, t, n, i), c = r.constructor === String ? new L_(r) : r instanceof J ? new q_(r) : new k_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && vg(t._searchMarker, n.index, c.getLength()), u = new X(G(o, K(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Yg(e, t, n, s);
}, e_ = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Zg(n, i);
	let s = Qg(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Y));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Y: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Gg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default:
				r < n.right.length && Rh(e, G(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
				break;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new X(G(o, K(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new L_(i)), n.right.integrate(e, 0), n.forward();
	}
	Yg(e, t, n, s);
}, t_ = (e, t, n, r, i) => {
	let a = t, o = Ou();
	for (; a && (!a.countable || a.deleted);) {
		if (!a.deleted && a.content.constructor === Y) {
			let e = a.content;
			o.set(e.key, e);
		}
		a = a.right;
	}
	let s = 0, c = !1;
	for (; t !== a;) {
		if (n === t && (c = !0), !t.deleted) {
			let n = t.content;
			switch (n.constructor) {
				case Y: {
					let { key: a, value: l } = n, u = r.get(a) ?? null;
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && Xg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, n_ = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Y) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, r_ = (e) => {
	let t = 0;
	return q(e.doc, (n) => {
		let r = e._start, i = e._start, a = Ou(), o = ku(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Y:
					Xg(o, i.content);
					break;
				default:
					t += t_(n, r, i, a, o), a = ku(o), r = i;
					break;
			}
			i = i.right;
		}
	}), t;
}, i_ = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Vh(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Y && e.constructor !== x_ && t.add(e.parent);
		});
	}
	q(n, (n) => {
		zm(e, e.deleteSet, (e) => {
			if (e instanceof x_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Y ? t.add(r) : n_(n, e);
		});
		for (let e of t) r_(e);
	});
}, a_ = (e, t, n) => {
	let r = n, i = ku(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case q_:
			case k_:
			case L_:
				n < t.right.length && Rh(e, G(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
				break;
		}
		t.forward();
	}
	a && t_(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && vg(o._searchMarker, t.index, -r + n), t;
}, o_ = class extends cg {
	constructor(e, t, n) {
		super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), n.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.keysChanged.add(e);
		});
	}
	get changes() {
		if (this._changes === null) {
			let e = {
				keys: this.keys,
				delta: this.delta,
				added: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			this._changes = e;
		}
		return this._changes;
	}
	get delta() {
		if (this._delta === null) {
			let e = this.target.doc, t = [];
			q(e, (e) => {
				let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.target._start, a = null, o = {}, s = "", c = 0, l = 0, u = () => {
					if (a !== null) {
						let e = null;
						switch (a) {
							case "delete":
								l > 0 && (e = { delete: l }), l = 0;
								break;
							case "insert":
								(typeof s == "object" || s.length > 0) && (e = { insert: s }, n.size > 0 && (e.attributes = {}, n.forEach((t, n) => {
									t !== null && (e.attributes[n] = t);
								}))), s = "";
								break;
							case "retain":
								c > 0 && (e = { retain: c }, jf(o) || (e.attributes = Df({}, o))), c = 0;
								break;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case q_:
						case k_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case L_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Y: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Gg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Gg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Gg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Gg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), Xg(n, i.content));
							break;
						}
					}
					i = i.right;
				}
				for (u(); t.length > 0;) {
					let e = t[t.length - 1];
					if (e.retain !== void 0 && e.attributes === void 0) t.pop();
					else break;
				}
			}), this._delta = t;
		}
		return this._delta;
	}
}, s_ = class e extends J {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? ug(), this._length;
	}
	_integrate(e, t) {
		super._integrate(e, t);
		try {
			this._pending.forEach((e) => e());
		} catch (e) {
			console.error(e);
		}
		this._pending = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	_callObserver(e, t) {
		super._callObserver(e, t);
		let n = new o_(this, e, t);
		yg(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? ug();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === L_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : q(this.doc, (n) => {
			let r = new Kg(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && $g(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && a_(n, r, a.delete) : e_(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? ug();
		let r = [], i = /* @__PURE__ */ new Map(), a = this.doc, o = "", s = this._start;
		function c() {
			if (o.length > 0) {
				let e = {}, t = !1;
				i.forEach((n, r) => {
					t = !0, e[r] = n;
				});
				let n = { insert: o };
				t && (n.attributes = e), r.push(n), o = "";
			}
		}
		let l = () => {
			for (; s !== null;) {
				if (Ah(s, e) || t !== void 0 && Ah(s, t)) switch (s.content.constructor) {
					case L_: {
						let r = i.get("ychange");
						e !== void 0 && !Ah(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !Ah(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case q_:
					case k_: {
						c();
						let e = { insert: s.content.getContent()[0] };
						if (i.size > 0) {
							let t = {};
							e.attributes = t, i.forEach((e, n) => {
								t[n] = e;
							});
						}
						r.push(e);
						break;
					}
					case Y:
						Ah(s, e) && (c(), Xg(i, s.content));
						break;
				}
				s = s.right;
			}
			c();
		};
		return e || t ? q(a, (n) => {
			e && jh(n, e), t && jh(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : q(r, (r) => {
			let i = Jg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), $g(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : q(r, (r) => {
			let i = Jg(r, this, e, !n);
			$g(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : q(n, (n) => {
			a_(n, Jg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : q(r, (r) => {
			let i = Jg(r, this, e, !1);
			i.right !== null && e_(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : q(this.doc, (t) => {
			Mg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : q(this.doc, (n) => {
			Ng(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Pg(this, e);
	}
	getAttributes() {
		return Fg(this);
	}
	_write(e) {
		e.writeTypeRef(H_);
	}
}, c_ = (e) => new s_(), l_ = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? ug();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === f_ || t.constructor === u_) && t._start !== null) e = t._start;
			else for (; e !== null;) {
				let t = e.next;
				if (t !== null) {
					e = t;
					break;
				} else e = e.parent === this._root ? null : e.parent._item;
			}
		while (e !== null && (e.deleted || !this._filter(e.content.type)));
		return this._firstCall = !1, e === null ? {
			value: void 0,
			done: !0
		} : (this._currentNode = e, {
			value: e.content.type,
			done: !1
		});
	}
}, u_ = class e extends J {
	constructor() {
		super(), this._prelimContent = [];
	}
	get firstChild() {
		let e = this._first;
		return e ? e.content.getContent()[0] : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof J ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? ug(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new l_(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new l_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), Iu(new l_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		yg(this, e, new m_(this, t, e));
	}
	toString() {
		return wg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), Cg(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : q(this.doc, (n) => {
			kg(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) q(this.doc, (n) => {
			let r = e && e instanceof J ? e._item : e;
			Dg(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw Kd("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : q(this.doc, (n) => {
			jg(n, this, e, t);
		});
	}
	toArray() {
		return xg(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return Eg(this, e);
	}
	slice(e = 0, t = this.length) {
		return bg(this, e, t);
	}
	forEach(e) {
		Cg(this, e);
	}
	_write(e) {
		e.writeTypeRef(W_);
	}
}, d_ = (e) => new u_(), f_ = class e extends u_ {
	constructor(e = "UNDEFINED") {
		super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
	}
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimAttrs.forEach((e, t) => {
			this.setAttribute(t, e);
		}), this._prelimAttrs = null;
	}
	_copy() {
		return new e(this.nodeName);
	}
	clone() {
		let t = new e(this.nodeName);
		return kf(this.getAttributes(), (e, n) => {
			t.setAttribute(n, e);
		}), t.insert(0, this.toArray().map((e) => e instanceof J ? e.clone() : e)), t;
	}
	toString() {
		let e = this.getAttributes(), t = [], n = [];
		for (let t in e) n.push(t);
		n.sort();
		let r = n.length;
		for (let i = 0; i < r; i++) {
			let r = n[i];
			t.push(r + "=\"" + e[r] + "\"");
		}
		let i = this.nodeName.toLocaleLowerCase();
		return `<${i}${t.length > 0 ? " " + t.join(" ") : ""}>${super.toString()}</${i}>`;
	}
	removeAttribute(e) {
		this.doc === null ? this._prelimAttrs.delete(e) : q(this.doc, (t) => {
			Mg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : q(this.doc, (n) => {
			Ng(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Pg(this, e);
	}
	hasAttribute(e) {
		return Ig(this, e);
	}
	getAttributes(e) {
		return e ? Lg(this, e) : Fg(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return Cg(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(U_), e.writeKey(this.nodeName);
	}
}, p_ = (e) => new f_(e.readKey()), m_ = class extends cg {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, h_ = class e extends Ug {
	constructor(e) {
		super(), this.hookName = e;
	}
	_copy() {
		return new e(this.hookName);
	}
	clone() {
		let t = new e(this.hookName);
		return this.forEach((e, n) => {
			t.set(n, e);
		}), t;
	}
	toDOM(e = document, t = {}, n) {
		let r = t[this.hookName], i;
		return i = r === void 0 ? document.createElement(this.hookName) : r.createDom(this), i.setAttribute("data-yjs-hook", this.hookName), n !== void 0 && n._createAssociation(i, this), i;
	}
	_write(e) {
		e.writeTypeRef(G_), e.writeKey(this.hookName);
	}
}, g_ = (e) => new h_(e.readKey()), __ = class e extends s_ {
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	toDOM(e = document, t, n) {
		let r = e.createTextNode(this.toString());
		return n !== void 0 && n._createAssociation(r, this), r;
	}
	toString() {
		return this.toDelta().map((e) => {
			let t = [];
			for (let n in e.attributes) {
				let r = [];
				for (let t in e.attributes[n]) r.push({
					key: t,
					value: e.attributes[n][t]
				});
				r.sort((e, t) => e.key < t.key ? -1 : 1), t.push({
					nodeName: n,
					attrs: r
				});
			}
			t.sort((e, t) => e.nodeName < t.nodeName ? -1 : 1);
			let n = "";
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				n += `<${r.nodeName}`;
				for (let e = 0; e < r.attrs.length; e++) {
					let t = r.attrs[e];
					n += ` ${t.key}="${t.value}"`;
				}
				n += ">";
			}
			n += e.insert;
			for (let e = t.length - 1; e >= 0; e--) n += `</${t[e].nodeName}>`;
			return n;
		}).join("");
	}
	toJSON() {
		return this.toString();
	}
	_write(e) {
		e.writeTypeRef(K_);
	}
}, v_ = (e) => new __(), y_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw qd();
	}
	integrate(e, t) {
		throw qd();
	}
}, b_ = 0, x_ = class extends y_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Ph(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(b_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, S_ = class e {
	constructor(e) {
		this.content = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.content];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.content);
	}
	splice(e) {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeBuf(this.content);
	}
	getRef() {
		return 3;
	}
}, C_ = (e) => new S_(e.readBuf()), w_ = class e {
	constructor(e) {
		this.len = e;
	}
	getLength() {
		return this.len;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.len);
	}
	splice(t) {
		let n = new e(this.len - t);
		return this.len = t, n;
	}
	mergeWith(e) {
		return this.len += e.len, !0;
	}
	integrate(e, t) {
		Wm(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, T_ = (e) => new w_(e.readLen()), E_ = (e, t) => new Zm({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), D_ = class e {
	constructor(e) {
		e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
		let t = {};
		this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.doc];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(E_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
	}
	delete(e) {
		e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
	}
	gc(e) {}
	write(e, t) {
		e.writeString(this.doc.guid), e.writeAny(this.opts);
	}
	getRef() {
		return 9;
	}
}, O_ = (e) => new D_(E_(e.readString(), e.readAny())), k_ = class e {
	constructor(e) {
		this.embed = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.embed];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.embed);
	}
	splice(e) {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeJSON(this.embed);
	}
	getRef() {
		return 5;
	}
}, A_ = (e) => new k_(e.readJSON()), Y = class e {
	constructor(e, t) {
		this.key = e, this.value = t;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.key, this.value);
	}
	splice(e) {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		let n = t.parent;
		n._searchMarker = null, n._hasFormatting = !0;
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeKey(this.key), e.writeJSON(this.value);
	}
	getRef() {
		return 6;
	}
}, j_ = (e) => new Y(e.readKey(), e.readJSON()), M_ = class e {
	constructor(e) {
		this.arr = e;
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeString(t === void 0 ? "undefined" : JSON.stringify(t));
		}
	}
	getRef() {
		return 2;
	}
}, N_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new M_(n);
}, P_ = Kf("node_env") === "development", F_ = class e {
	constructor(e) {
		this.arr = e, P_ && If(e);
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeAny(t);
		}
	}
	getRef() {
		return 8;
	}
}, I_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new F_(n);
}, L_ = class e {
	constructor(e) {
		this.str = e;
	}
	getLength() {
		return this.str.length;
	}
	getContent() {
		return this.str.split("");
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.str);
	}
	splice(t) {
		let n = new e(this.str.slice(t));
		this.str = this.str.slice(0, t);
		let r = this.str.charCodeAt(t - 1);
		return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
	}
	mergeWith(e) {
		return this.str += e.str, !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeString(t === 0 ? this.str : this.str.slice(t));
	}
	getRef() {
		return 4;
	}
}, R_ = (e) => new L_(e.readString()), z_ = [
	Vg,
	Wg,
	c_,
	p_,
	d_,
	g_,
	v_
], B_ = 0, V_ = 1, H_ = 2, U_ = 3, W_ = 4, G_ = 5, K_ = 6, q_ = class e {
	constructor(e) {
		this.type = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.type];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.type._copy());
	}
	splice(e) {
		throw qd();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.type._integrate(e.doc, t);
	}
	delete(e) {
		let t = this.type._start;
		for (; t !== null;) t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
		this.type._map.forEach((t) => {
			t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e);
		}), e.changed.delete(this.type);
	}
	gc(e) {
		let t = this.type._start;
		for (; t !== null;) t.gc(e, !0), t = t.right;
		this.type._start = null, this.type._map.forEach((t) => {
			for (; t !== null;) t.gc(e, !0), t = t.left;
		}), this.type._map = /* @__PURE__ */ new Map();
	}
	write(e, t) {
		this.type._write(e);
	}
	getRef() {
		return 7;
	}
}, J_ = (e) => new q_(z_[e.readTypeRef()](e)), Y_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = G(n.client, n.clock + r)), i = Ih(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof X);
	return {
		item: i,
		diff: r
	};
}, X_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, Z_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new X(G(r, i + n), t, G(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = G(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, Q_ = (e, t) => Ru(e, (e) => Vm(e.deletions, t)), $_ = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Rh(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || $_(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Rh(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Rh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Rh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Vm(r, d.right.id) || Q_(a.undoStack, d.right.id) || Q_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Rh(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = G(c, K(s, c)), h = new X(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, X_(h, !0), h.integrate(e, 0), h;
}, X = class e extends y_ {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, s.getLength()), this.origin = n, this.left = t, this.right = r, this.rightOrigin = i, this.parent = a, this.parentSub = o, this.redone = null, this.content = s, this.info = this.content.isCountable() ? 2 : 0;
	}
	set marker(e) {
		(this.info & 8) > 0 !== e && (this.info ^= 8);
	}
	get marker() {
		return (this.info & 8) > 0;
	}
	get keep() {
		return (this.info & 1) > 0;
	}
	set keep(e) {
		this.keep !== e && (this.info ^= 1);
	}
	get countable() {
		return (this.info & 2) > 0;
	}
	get deleted() {
		return (this.info & 4) > 0;
	}
	set deleted(e) {
		this.deleted !== e && (this.info ^= 4);
	}
	markDeleted() {
		this.info |= 4;
	}
	getMissing(t, n) {
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= K(n, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= K(n, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === gh && this.id.client !== this.parent.client && this.parent.clock >= K(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = zh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Rh(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === x_ || this.right && this.right.constructor === x_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === gh) {
			let e = Ih(n, this.parent);
			e.constructor === x_ ? this.parent = null : this.parent = e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = zh(e, e.doc.store, G(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), _h(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (_h(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Ih(e.doc.store, n.origin))) r.has(Ih(e.doc.store, n.origin)) || (t = n, r.clear());
					else break;
					n = n.right;
				}
				this.left = t;
			}
			if (this.left !== null) {
				let e = this.left.right;
				this.right = e, this.left.right = this;
			} else {
				let e;
				if (this.parentSub !== null) for (e = this.parent._map.get(this.parentSub) || null; e !== null && e.left !== null;) e = e.left;
				else e = this.parent._start, this.parent._start = this;
				this.right = e;
			}
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Ph(e.doc.store, this), this.content.integrate(e, this), Wh(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new x_(this.id, this.length).integrate(e, 0);
	}
	get next() {
		let e = this.right;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	get prev() {
		let e = this.left;
		for (; e !== null && e.deleted;) e = e.left;
		return e;
	}
	get lastId() {
		return this.length === 1 ? this.id : G(this.id.client, this.id.clock + this.length - 1);
	}
	mergeWith(e) {
		if (this.constructor === e.constructor && _h(e.origin, this.lastId) && this.right === e && _h(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
			let t = this.parent._searchMarker;
			return t && t.forEach((t) => {
				t.p === e && (t.p = this, !this.deleted && this.countable && (t.index -= this.length));
			}), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
		}
		return !1;
	}
	delete(e) {
		if (!this.deleted) {
			let t = this.parent;
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), Wm(e.deleteSet, this.id.client, this.id.clock, this.length), Wh(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw Jd();
		this.content.gc(e), t ? Bh(e, this, new x_(this.id, this.length)) : this.content = new w_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? G(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = vh(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === gh ? (e.writeParentInfo(!1), e.writeLeftID(t)) : Jd();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, ev = (e, t) => tv[t & 31](e), tv = [
	() => {
		Jd();
	},
	T_,
	N_,
	C_,
	R_,
	A_,
	j_,
	J_,
	I_,
	O_,
	() => {
		Jd();
	}
], nv = 10, rv = class extends y_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		Jd();
	}
	write(e, t) {
		e.writeInfo(nv), V(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, iv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, av = "__ $YJS$ __";
iv[av] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), iv[av] = !0;
//#endregion
//#region node_modules/lib0/mutex.js
var ov = () => {
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
}, sv = /[\uD800-\uDBFF]/, cv = /[\uDC00-\uDFFF]/, lv = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && sv.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && cv.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, uv = (e, t) => e >>> t | e << 32 - t, dv = (e) => uv(e, 2) ^ uv(e, 13) ^ uv(e, 22), fv = (e) => uv(e, 6) ^ uv(e, 11) ^ uv(e, 25), pv = (e) => uv(e, 7) ^ uv(e, 18) ^ e >>> 3, mv = (e) => uv(e, 17) ^ uv(e, 19) ^ e >>> 10, hv = new Uint32Array([
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
]), gv = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), _v = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(gv), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = mv(t[e - 2]) + t[e - 7] + pv(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + fv(o) + (o & s ^ ~o & c) + hv[e] + t[e] >>> 0, d = dv(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
		e[0] += n, e[1] += r, e[2] += i, e[3] += a, e[4] += o, e[5] += s, e[6] += c, e[7] += l;
	}
	digest(e) {
		let t = 0;
		for (; t + 56 <= e.length;) {
			let n = 0;
			for (; n < 16 && t + 3 < e.length; n++) this._W[n] = e[t++] << 24 | e[t++] << 16 | e[t++] << 8 | e[t++];
			if (t % 64 != 0) {
				for (this._W.fill(0, n, 16); t < e.length;) this._W[n] |= e[t] << (3 - t % 4) * 8, t++;
				this._W[n] |= 128 << (3 - t % 4) * 8;
			}
			this._updateHash();
		}
		let n = t % 64 != 0;
		this._W.fill(0, 0, 16);
		let r = 0;
		for (; t < e.length; r++) for (let n = 3; n >= 0 && t < e.length; n--) this._W[r] |= e[t++] << n * 8;
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / ad, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, vv = (e) => new _v().digest(e), Z = new Ct("y-sync"), yv = new Ct("y-undo");
new Ct("yjs-cursor");
var bv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, xv = (e) => Xf(bv(vv(Zf(e)))), Sv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Vm(t.ds, e.id), Cv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], wv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = Nu();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, gf(t));
	}
	return e.get(n);
}, Tv = (e, { colors: t = Cv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new kv(e, a), c = new nr({
		props: { editable: (e) => {
			let t = Z.getState(e);
			return t.snapshot == null && t.prevSnapshot == null;
		} },
		key: Z,
		state: {
			init: (i, a) => ({
				type: e,
				doc: e.doc,
				binding: s,
				snapshot: null,
				prevSnapshot: null,
				isChangeOrigin: !1,
				isUndoRedoOperation: !1,
				addToHistory: !0,
				colors: t,
				colorMapping: n,
				permanentUserData: r
			}),
			apply: (e, t) => {
				let n = e.getMeta(Z);
				if (n !== void 0) {
					t = Object.assign({}, t);
					for (let e in n) t[e] = n[e];
				}
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && _m(0, () => {
					s.prosemirrorView != null && (n.restore == null ? s._renderSnapshot(n.snapshot, n.prevSnapshot, t) : (s._renderSnapshot(n.snapshot, n.snapshot, t), delete t.restore, delete t.snapshot, delete t.prevSnapshot, s.mux(() => {
						s._prosemirrorChanged(s.prosemirrorView.state.doc);
					})));
				}), t;
			}
		},
		view: (e) => (s.initView(e), a ?? s._forceRerender(), i(), {
			update: () => {
				let t = c.getState(e.state);
				if (t.snapshot == null && t.prevSnapshot == null && (o || e.state.doc.content.findDiffStart(e.state.doc.type.createAndFill().content) !== null)) {
					if (o = !0, t.addToHistory === !1 && !t.isChangeOrigin) {
						let t = yv.getState(e.state), n = t && t.undoManager;
						n && n.stopCapturing();
					}
					s.mux(() => {
						t.doc.transact((n) => {
							n.meta.set("addToHistory", t.addToHistory), s._prosemirrorChanged(e.state.doc);
						}, Z);
					});
				}
			},
			destroy: () => {
				s.destroy();
			}
		})
	});
	return c;
}, Ev = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) if (t.type === "all") e.setSelection(new ar(e.doc));
	else if (t.type === "node") {
		let r = $v(n.doc, n.type, t.anchor, n.mapping);
		e.setSelection(Dv(e, r));
	} else {
		let r = $v(n.doc, n.type, t.anchor, n.mapping), i = $v(n.doc, n.type, t.head, n.mapping);
		r !== null && i !== null && e.setSelection(Et.between(e.doc.resolve(r), e.doc.resolve(i)));
	}
}, Dv = (e, t) => {
	let n = e.doc.resolve(t);
	return n.nodeAfter ? qt.create(e.doc, t) : Et.near(n);
}, Ov = (e, t) => ({
	type: t.selection.jsonID,
	anchor: Zv(t.selection.anchor, e.type, e.mapping),
	head: Zv(t.selection.head, e.type, e.mapping)
}), kv = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = ov(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Ov(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (Vf && this._domSelectionInView === null && (_m(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = um.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= Oh(Gm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta(Z, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => jv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(e), 0, 0));
			t.setMeta(Z, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => jv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(t), 0, 0));
			if (e) {
				let t = Wu(Gu(e.anchor, 0), n.doc.content.size), r = Wu(Gu(e.head, 0), n.doc.content.size);
				n.setSelection(Et.create(n.doc, t, r));
			}
			this.prosemirrorView.dispatch(n.setMeta(Z, {
				isChangeOrigin: !0,
				binding: this
			}));
		});
	}
	_renderSnapshot(e, t, n) {
		let r = this.doc, i = this.type;
		if (e ||= kh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && Jd(), r = new Zm({ gc: !1 }), uh(r, t), t = kh(r), uh(r, e), e = kh(r), i._item === null) {
			let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
			i = r.getXmlFragment(e);
		} else {
			let e = r.store.clients.get(i._item.id.client) ?? [];
			i = e[Fh(e, i._item.id.clock)].content.type;
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					zm(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: wv(n.colorMapping, n.colors, r)
					};
				}, s = Sg(i, new Dh(t.ds, e.sv)).map((n) => !n._item.deleted || Sv(n._item, e) || Sv(n._item, t) ? jv(n, this.prosemirrorView.state.schema, {
					mapping: /* @__PURE__ */ new Map(),
					isOMark: /* @__PURE__ */ new Map()
				}, e, t, o) : null).filter((e) => e !== null), c = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(s), 0, 0));
				this.prosemirrorView.dispatch(c.setMeta(Z, { isChangeOrigin: !0 }));
			}, Z);
		});
	}
	_typeChanged(e, t) {
		if (this.prosemirrorView == null) return;
		let n = Z.getState(this.prosemirrorView.state);
		if (e.length === 0 || n.snapshot != null || n.prevSnapshot != null) {
			this.renderSnapshot(n.snapshot, n.prevSnapshot);
			return;
		}
		this.mux(() => {
			let e = (e, t) => this.mapping.delete(t);
			zm(t, t.deleteSet, (e) => {
				if (e.constructor === X) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => Av(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(n), 0, 0));
			Ev(r, this.beforeTransactionSelection, this), r = r.setMeta(Z, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof Qh
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Yv(this.doc, this.type, e, this), this.beforeTransactionSelection = Ov(this, this.prosemirrorView.state);
		}, Z);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, Av = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof f_) return jv(e, t, n, r, i, a);
		throw qd();
	}
	return o;
}, jv = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof f_) {
			let s = Av(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof s_ && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = Mv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : Sg(e, new Dh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (Sv(e._item, r) ? Sv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Z), n.mapping.delete(e), null;
	}
}, Mv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, qv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Z), null;
	}
	return o;
}, Nv = (e, t) => {
	let n = new __(), r = e.map((e) => ({
		insert: e.text,
		attributes: Jv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, Pv = (e, t) => {
	let n = new f_(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, Rv(e).map((e) => Fv(e, t))), t.mapping.set(n, e), n;
}, Fv = (e, t) => e instanceof Array ? Nv(e, t) : Pv(e, t), Iv = (e) => typeof e == "object" && !!e, Lv = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === Object.keys(t).filter((e) => t[e] !== null).length;
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || Iv(o) && Iv(s) && Lv(o, s);
	}
	return r;
}, Rv = (e) => {
	let t = e.content.content, n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r.isText) {
			let r = [];
			for (let n = t[e]; e < t.length && n.isText; n = t[++e]) r.push(n);
			e--, n.push(r);
		} else n.push(r);
	}
	return n;
}, zv = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Of(e.attributes || {}).length === t[n].marks.length && Mf(e.attributes, (e, r) => {
		let i = Kv(r), a = t[n].marks;
		return a.find((e) => e.type.name === i) ? Lv(e, a.find((e) => e.type.name === i)?.attrs) : !1;
	}));
}, Bv = (e, t) => {
	if (e instanceof f_ && !(t instanceof Array) && Xv(e, t)) {
		let n = Rv(t);
		return e._length === n.length && Lv(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => Bv(e, n[t]));
	}
	return e instanceof __ && t instanceof Array && zv(e, t);
}, Vv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Hv = (e, t, n) => {
	let r = e.toArray(), i = Rv(t), a = i.length, o = r.length, s = Wu(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (Vv(n.mapping.get(e), t)) u = !0;
		else if (!Bv(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (Vv(n.mapping.get(e), t)) u = !0;
		else if (!Bv(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, Uv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof L_ ? t += n.content.str : n.content instanceof Y && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Wv = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = Uv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, Jv(e.marks, n))
	})), { insert: o, remove: s, index: c } = lv(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, Gv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Kv = (e) => Gv.exec(e)?.[1] ?? e, qv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Kv(r), e[r]));
	return n;
}, Jv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = Au(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${xv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Yv = (e, t, n, r) => {
	if (t instanceof f_ && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof f_) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = Rv(n), a = i.length, o = t.toArray(), s = o.length, c = Wu(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!Vv(r.mapping.get(e), t)) if (Bv(e, t)) r.mapping.set(e, t);
		else break;
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!Vv(r.mapping.get(e), t)) if (Bv(e, t)) r.mapping.set(e, t);
		else break;
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof __ && c instanceof Array) zv(n, c) || Wv(n, c, r), l += 1;
			else {
				let i = n instanceof f_ && Xv(n, c), a = d instanceof f_ && Xv(d, f);
				if (i && a) {
					let e = Hv(n, c, r), t = Hv(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Yv(e, n, c, r), l += 1) : a ? (Yv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [Fv(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof __ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(Fv(i[t], r));
			t.insert(l, e);
		}
	}, Z);
}, Xv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Zv = (e, t, n) => {
	if (e === 0) return wh(t, 0, -1);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof __) {
			if (r._length >= e) return wh(r, e, -1);
			if (e -= r._length, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
			else {
				do
					r = r._item === null ? null : r._item.parent, e--;
				while (r !== t && r !== null && r._item !== null && r._item.next === null);
				r !== null && r !== t && (r = r._item === null ? null : r._item.next.content.type);
			}
		} else {
			let i = (n.get(r) || { nodeSize: 0 }).nodeSize;
			if (r._first !== null && e < i) r = r._first.content.type, e--;
			else {
				if (e === 1 && r._length === 0 && i > 1) return new bh(r._item === null ? null : r._item.id, r._item === null ? vh(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new bh(r._item === null ? null : r._item.id, r._item === null ? vh(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw Jd();
		if (e === 0 && r.constructor !== __ && r !== t) return Qv(r._item.parent, r._item);
	}
	return wh(t, t._length, -1);
}, Qv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = vh(e) : n = G(e._item.id.client, e._item.id.clock), new bh(n, r, t.id);
}, $v = (e, t, n, r) => {
	let i = Eh(n, e);
	if (i === null || i.type !== t && !yh(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === __) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof __ ? o += n._length : o += r.get(n).nodeSize;
			}
			e = e.right;
		}
		o += 1;
	}
	for (; a !== t && a._item !== null;) {
		let e = a._item.parent;
		if (e._item === null || !e._item.deleted) {
			o += 1;
			let t = e._first;
			for (; t !== null;) {
				let e = t.content.type;
				if (e === a) break;
				t.deleted || (e instanceof __ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
}, ey = (e) => {
	let t = yv.getState(e).undoManager;
	if (t != null) return t.undo(), !0;
}, ty = (e) => {
	let t = yv.getState(e).undoManager;
	if (t != null) return t.redo(), !0;
}, ny = new Set(["paragraph"]), ry = (e, t) => !(e instanceof X) || !(e.content instanceof q_) || !(e.content.type instanceof s_ || e.content.type instanceof f_ && t.has(e.content.type.nodeName)) || e.content.type._length === 0, iy = ({ protectedNodes: e = ny, trackedOrigins: t = [], undoManager: n = null } = {}) => new nr({
	key: yv,
	state: {
		init: (r, i) => {
			let a = Z.getState(i), o = n || new Qh(a.type, {
				trackedOrigins: new Set([Z].concat(t)),
				deleteFilter: (t) => ry(t, e),
				captureTransaction: (e) => e.meta.get("addToHistory") !== !1
			});
			return {
				undoManager: o,
				prevSel: null,
				hasUndoOps: o.undoStack.length > 0,
				hasRedoOps: o.redoStack.length > 0
			};
		},
		apply: (e, t, n, r) => {
			let i = Z.getState(r).binding, a = t.undoManager, o = a.undoStack.length > 0, s = a.redoStack.length > 0;
			return i ? {
				undoManager: a,
				prevSel: Ov(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = Z.getState(e.state), n = yv.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, yv.getState(e.state).prevSel);
		}), n.on("stack-item-popped", ({ stackItem: e }) => {
			let n = t.binding;
			n && (n.beforeTransactionSelection = e.meta.get(n) || n.beforeTransactionSelection);
		}), { destroy: () => {
			n.destroy();
		} };
	}
});
//#endregion
//#region node_modules/@tiptap/extension-collaboration/dist/index.js
function ay(e) {
	return !!e.getMeta(Z);
}
function oy(e, t) {
	let n = Z.getState(e);
	return $v(n.doc, n.type, t, n.binding.mapping) || 0;
}
function sy(e, t) {
	let n = Z.getState(e);
	return Zv(t, n.type, n.binding.mapping);
}
var cy = class e extends Bn {
	constructor(e, t) {
		super(e), this.yRelativePosition = t;
	}
	static fromJSON(t) {
		return new e(t.position, t.yRelativePosition);
	}
	toJSON() {
		return {
			position: this.position,
			yRelativePosition: this.yRelativePosition
		};
	}
};
function ly(e, t) {
	return new cy(e, sy(t, e));
}
function uy(e, t, n) {
	let r = e instanceof cy ? e.yRelativePosition : null;
	if (ay(t) && r) return {
		position: new cy(oy(n, r), r),
		mapResult: null
	};
	let i = sn(e, t), a = i.position.position;
	return {
		position: new cy(a, r ?? sy(n, a)),
		mapResult: i.mapResult
	};
}
dn.create({
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
		return { isDisabled: !1 };
	},
	onCreate() {
		this.editor.extensionManager.extensions.find((e) => e.name === "undoRedo") && console.warn("[tiptap warn]: \"@tiptap/extension-collaboration\" comes with its own history support and is not compatible with \"@tiptap/extension-undo-redo\".");
	},
	onBeforeCreate() {
		this.editor.utils.getUpdatedPosition = (e, t) => uy(e, t, this.editor.state), this.editor.utils.createMappablePosition = (e) => ly(e, this.editor.state);
	},
	addCommands() {
		return {
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), yv.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? ey(t) : !0),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), yv.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? ty(t) : !0)
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
		let e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), t = iy(this.options.yUndoOptions), n = t.spec.view;
		return t.spec.view = (e) => {
			let { undoManager: t } = yv.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let r = n ? n(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), n = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = n;
				}, r?.destroy && r.destroy();
			} };
		}, [
			Tv(e, {
				...this.options.ySyncOptions,
				onFirstRender: this.options.onFirstRender
			}),
			t,
			this.editor.options.enableContentCheck && new nr({
				key: new Ct("filterInvalidContent"),
				filterTransaction: (t) => {
					if (!ay(t)) return !0;
					if (this.storage.isDisabled) return !1;
					if (!t.docChanged) return !0;
					try {
						return t.doc.check(), !0;
					} catch (t) {
						return this.storage.isDisabled = !0, this.editor.emit("contentError", {
							error: t,
							editor: this.editor,
							disableCollaboration: () => {
								var t;
								(t = e.doc) == null || t.destroy();
							}
						}), !1;
					}
				}
			})
		].filter(Boolean);
	}
});
//#endregion
//#region node_modules/@tiptap/extension-node-range/dist/index.js
function dy(e) {
	if (!e.length) return Xn.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(Vt.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), Xn.create(n, t);
}
function fy(e, t, n) {
	let r = n.isText || n.isAtom ? 0 : 1;
	return {
		start: e + r,
		end: e + t - r
	};
}
function py(e, t, n, r = {}) {
	let i = [], a = e.node(0), { extendOnBoundaryOverlap: o = !0 } = r;
	typeof n == "number" && n >= 0 || (n = e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos));
	let s = new ze(e, t, n), c = s.depth === 0 ? 0 : a.resolve(s.start).posAtIndex(0);
	return s.parent.forEach((n, r) => {
		let l = c + r, u = l + n.nodeSize, d = fy(l, n.nodeSize, n), f = o ? t.pos >= d.start && e.pos <= d.end : t.pos > d.start && e.pos < d.end;
		if (l < s.start || l >= s.end || !f) return;
		let p = new $n(a.resolve(l), a.resolve(u));
		i.push(p);
	}), i;
}
var my = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new hy(e.resolve(this.anchor), e.resolve(this.head));
	}
}, hy = class e extends We {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = py(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
		super(u, d, l), this.depth = n;
	}
	get $to() {
		return this.ranges[this.ranges.length - 1].$to;
	}
	eq(t) {
		return t instanceof e && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
	}
	map(t, n) {
		return new e(t.resolve(n.map(this.anchor)), t.resolve(n.map(this.head)));
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
		let { doc: t } = this.$from;
		if (this.isForwards && this.ranges.length > 1) {
			let t = this.ranges.slice(0, -1), n = t[0].$from, r = t[t.length - 1].$to;
			return new e(n, r, this.depth);
		}
		let n = this.ranges[0], r = t.resolve(Math.max(0, n.$from.pos - 1));
		return new e(this.$anchor, r, this.depth);
	}
	extendForwards() {
		let { doc: t } = this.$from;
		if (this.isBackwards && this.ranges.length > 1) {
			let t = this.ranges.slice(1), n = t[0].$from, r = t[t.length - 1].$to;
			return new e(r, n, this.depth);
		}
		let n = this.ranges[this.ranges.length - 1], r = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
		return new e(this.$anchor, r, this.depth);
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(e, t, n, r, i = 1) {
		return new this(e.resolve(t), e.resolve(n), r, i);
	}
	getBookmark() {
		return new my(this.anchor, this.head);
	}
};
hy.prototype.visible = !1;
function gy(e) {
	return e instanceof hy;
}
dn.create({
	name: "nodeRange",
	addOptions() {
		return {
			depth: void 0,
			key: "Mod"
		};
	},
	addKeyboardShortcuts() {
		return {
			"Shift-ArrowUp": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!gy(a)) {
					let e = hy.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!gy(a)) {
					let e = hy.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = hy.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		gy(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
	},
	addProseMirrorPlugins() {
		let e = !1, t = !1;
		return [new nr({
			key: new Ct("nodeRange"),
			props: {
				attributes: () => e ? { class: "ProseMirror-noderangeselection" } : { class: "" },
				handleDOMEvents: { mousedown: (e, n) => {
					let { key: r } = this.options, i = /Mac/.test(navigator.platform), a = !!n.shiftKey, o = !!n.ctrlKey, s = !!n.altKey, c = !!n.metaKey;
					return (r == null || r === "Shift" && a || r === "Control" && o || r === "Alt" && s || r === "Meta" && c || r === "Mod" && (i ? c : o)) && (t = !0), t && document.addEventListener("mouseup", () => {
						t = !1;
						let { state: n } = e, { doc: r, selection: i, tr: a } = n, { $anchor: o, $head: s } = i;
						if (o.sameParent(s)) return;
						let c = hy.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = gy(r);
					if (e = !1, !t) return i ? (e = !0, dy(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = py(a, o, this.options.depth);
					return s.length ? (e = !0, dy(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region node_modules/@tiptap/extension-drag-handle/dist/index.js
function _y(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function vy(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = _y(e);
	}), t;
}
var yy = [
	{
		id: "listItemFirstChild",
		evaluate: ({ parent: e, isFirst: t }) => t && e && ["listItem", "taskItem"].includes(e.type.name) ? 1e3 : 0
	},
	{
		id: "listWrapperDeprioritize",
		evaluate: ({ node: e }) => {
			let t = ["listItem", "taskItem"], n = e.firstChild;
			return n && t.includes(n.type.name) ? 1e3 : 0;
		}
	},
	{
		id: "tableStructure",
		evaluate: ({ node: e, parent: t }) => [
			"tableRow",
			"tableCell",
			"tableHeader"
		].includes(e.type.name) || t && t.type.name === "tableHeader" ? 1e3 : 0
	},
	{
		id: "inlineContent",
		evaluate: ({ node: e }) => e.isInline || e.isText ? 1e3 : 0
	}
], by = {
	edges: ["left", "top"],
	threshold: 12,
	strength: 500
};
function xy(e) {
	return e === void 0 || e === "left" ? { ...by } : e === "right" ? {
		edges: ["right", "top"],
		threshold: 12,
		strength: 500
	} : e === "both" ? {
		edges: [
			"left",
			"right",
			"top"
		],
		threshold: 12,
		strength: 500
	} : e === "none" ? {
		edges: [],
		threshold: 0,
		strength: 0
	} : {
		...by,
		...e
	};
}
function Sy(e, t, n) {
	if (n.edges.length === 0) return !1;
	let r = t.getBoundingClientRect(), { threshold: i, edges: a } = n;
	return a.some((t) => t === "left" ? e.x - r.left < i : t === "right" ? r.right - e.x < i : t === "top" ? e.y - r.top < i : t === "bottom" ? r.bottom - e.y < i : !1);
}
function Cy(e, t, n, r) {
	return !t || n.edges.length === 0 ? 0 : Sy(e, t, n) ? n.strength * r : 0;
}
var wy = 1e3;
function Ty(e, t, n, r) {
	let i = wy, a = !1;
	if (t.every((t) => {
		let n = t.evaluate(e);
		return i -= n, i <= 0 ? (a = !0, !1) : !0;
	}), a) return -1;
	let o = e.view.nodeDOM(e.pos);
	return i -= Cy(r, o, n, e.depth), i <= 0 ? -1 : i;
}
function Ey(e, t, n) {
	return Array.from({ length: t }, (e, n) => t - 1 - n).some((t) => n.includes(e.node(t).type.name));
}
function Dy(e, t, n) {
	if (!Number.isFinite(t.x) || !Number.isFinite(t.y)) return null;
	let r = e.posAtCoords({
		left: t.x,
		top: t.y
	});
	if (!r) return null;
	let { doc: i } = e.state, a = i.resolve(r.pos), o = [];
	n.defaultRules && o.push(...yy), o.push(...n.rules);
	let s = Array.from({ length: a.depth }, (e, t) => a.depth - t).map((r) => {
		let i = a.node(r), s = a.before(r);
		if (n.allowedContainers && r > 0 && !Ey(a, r, n.allowedContainers)) return null;
		let c = r > 0 ? a.node(r - 1) : null, l = r > 0 ? a.index(r - 1) : 0, u = c ? c.childCount : 1, d = Ty({
			node: i,
			pos: s,
			depth: r,
			parent: c,
			index: l,
			isFirst: l === 0,
			isLast: l === u - 1,
			$pos: a,
			view: e
		}, o, n.edgeDetection, t);
		return d < 0 ? null : {
			node: i,
			pos: s,
			depth: r,
			score: d,
			dom: e.nodeDOM(s)
		};
	}).filter((e) => e !== null), c = a.nodeAfter;
	if (c && c.isAtom && !c.isInline) {
		let i = r.pos, l = a.depth + 1, u = a.parent, d = a.index(), f = u.childCount, p = !0;
		if (n.allowedContainers && (p = Ey(a, l, n.allowedContainers)), p) {
			let r = Ty({
				node: c,
				pos: i,
				depth: l,
				parent: u,
				index: d,
				isFirst: d === 0,
				isLast: d === f - 1,
				$pos: a,
				view: e
			}, o, n.edgeDetection, t);
			if (r >= 0) {
				let t = e.nodeDOM(i);
				t && s.push({
					node: c,
					pos: i,
					depth: l,
					score: r,
					dom: t
				});
			}
		}
	}
	if (s.length === 0) return null;
	s.sort((e, t) => t.score === e.score ? t.depth - e.depth : t.score - e.score);
	let l = s[0];
	return l.dom ? {
		node: l.node,
		pos: l.pos,
		dom: l.dom
	} : null;
}
function Oy(e, t) {
	let n = e;
	for (; n?.parentElement && n.parentElement !== t.dom;) n = n.parentElement;
	return n?.parentElement === t.dom ? n : void 0;
}
function ky(e) {
	return Number.isFinite(e.top) && Number.isFinite(e.bottom) && Number.isFinite(e.left) && Number.isFinite(e.right) && e.width > 0 && e.height > 0;
}
function Ay(e, t, n, r = 5) {
	if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
	let i = e.dom, a = i.firstElementChild, o = i.lastElementChild;
	if (!a || !o) return null;
	let s = a.getBoundingClientRect(), c = o.getBoundingClientRect();
	if (!ky(s) || !ky(c)) return null;
	let l = Math.min(Math.max(s.top + r, n), c.bottom - r), u = .5, d = Math.abs(s.left - c.left) < u, f = Math.abs(s.right - c.right) < u, p = s;
	d && f && (p = s);
	let m = Math.min(Math.max(p.left + r, t), p.right - r);
	return !Number.isFinite(m) || !Number.isFinite(l) ? null : {
		x: m,
		y: l
	};
}
var jy = (e) => {
	let { x: t, y: n, editor: r, nestedOptions: i } = e, { view: a, state: o } = r, s = Ay(a, t, n, 5);
	if (!s) return {
		resultElement: null,
		resultNode: null,
		pos: null
	};
	let { x: c, y: l } = s;
	if (i?.enabled) {
		let e = Dy(a, {
			x: c,
			y: l
		}, i);
		return e ? {
			resultElement: e.dom,
			resultNode: e.node,
			pos: e.pos
		} : {
			resultElement: null,
			resultNode: null,
			pos: null
		};
	}
	let u = a.root.elementsFromPoint(c, l), d;
	if (Array.prototype.some.call(u, (e) => {
		if (!a.dom.contains(e)) return !1;
		let t = Oy(e, a);
		return t ? (d = t, !0) : !1;
	}), !d) {
		let e = a.posAtCoords({
			left: c,
			top: l
		});
		if (e) {
			let t = o.doc.resolve(e.pos), n = Math.min(t.depth, 1), r = n > 0 ? t.before(n) : t.pos, i = o.doc.nodeAt(r);
			if (i) {
				let e = a.nodeDOM(r);
				return {
					resultElement: e instanceof HTMLElement ? e : null,
					resultNode: i,
					pos: r
				};
			}
		}
		return {
			resultElement: null,
			resultNode: null,
			pos: null
		};
	}
	let f;
	try {
		f = a.posAtDOM(d, 0);
	} catch {
		return {
			resultElement: null,
			resultNode: null,
			pos: null
		};
	}
	let p = o.doc.nodeAt(f);
	if (!p) {
		let e = o.doc.resolve(f), t = e.parent;
		return {
			resultElement: d,
			resultNode: t,
			pos: e.start()
		};
	}
	return {
		resultElement: d,
		resultNode: p,
		pos: f
	};
};
function My(e, t) {
	let n = e.nodeDOM(t);
	if (n instanceof Element && n !== e.dom) return n;
	let { node: r, offset: i } = e.domAtPos(t), a = r.childNodes[i];
	return a instanceof Element ? a : r instanceof Element ? r : r.nodeType === Node.TEXT_NODE && r.parentElement ? r.parentElement : null;
}
function Ny(e, t) {
	let n = My(e, t);
	return (n ? getComputedStyle(n).direction : getComputedStyle(e.dom).direction) || "ltr";
}
function Py(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function Fy(e, t) {
	return e === "rtl" ? t : 0;
}
function Iy(e, t, n, r) {
	let { doc: i } = t.view.state;
	if (n?.enabled && r?.node && r.pos >= 0) {
		let e = r.pos, t = r.pos + r.node.nodeSize;
		return [{
			$from: i.resolve(e),
			$to: i.resolve(t)
		}];
	}
	let a = jy({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right",
		nestedOptions: n
	});
	if (!a.resultNode || a.pos === null) return [];
	let o = a.resultNode.isText || a.resultNode.isAtom ? 0 : -1;
	return py(i.resolve(a.pos), i.resolve(a.pos + a.resultNode.nodeSize + o), 0, { extendOnBoundaryOverlap: !1 });
}
function Ly(e, t, n, r) {
	let { view: i } = t;
	if (!e.dataTransfer) return;
	let { empty: a, $from: o, $to: s } = i.state.selection, c = Iy(e, t, n, r), l = py(o, s, 0, { extendOnBoundaryOverlap: !1 }), u = l.some((e) => c.find((t) => t.$from === e.$from && t.$to === e.$to)), d = a || !u ? c : l;
	if (!d.length) return;
	let { tr: f } = i.state, p = document.createElement("div"), m = d[0].$from.pos, h = d[d.length - 1].$to.pos, g = Ny(i, m);
	p.setAttribute("dir", g);
	let _ = n?.enabled && r?.node, v, y;
	_ ? (v = i.state.doc.slice(m, h), y = qt.create(i.state.doc, m)) : (y = hy.create(i.state.doc, m, h), v = y.content()), d.forEach((e) => {
		let t = My(i, e.$from.pos);
		if (!t) return;
		let n = vy(t);
		n.style.margin = "0", p.append(n);
	}), p.style.position = "absolute", p.style.top = "-10000px", document.body.append(p), e.dataTransfer.clearData();
	let b = Fy(g, p.getBoundingClientRect().width);
	e.dataTransfer.setDragImage(p, b, 0);
	let x = !1, S = () => {
		x || (x = !0, Py(p), document.removeEventListener("drop", S), document.removeEventListener("dragend", S));
	}, C = y instanceof qt ? y : void 0;
	i.dragging = {
		slice: v,
		move: !0,
		node: C
	}, f.setSelection(y), i.dispatch(f), document.addEventListener("drop", S), document.addEventListener("dragend", S);
}
var Ry = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, zy = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, By = (e, t) => {
	let n = Z.getState(e);
	return n ? Zv(t, n.type, n.binding.mapping) : null;
}, Vy = (e, t) => {
	let n = Z.getState(e);
	return n ? $v(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, Hy = (e, t) => {
	let n = t;
	for (; n?.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, Uy = new Ct("dragHandle"), Wy = ({ pluginKey: e = Uy, element: t, editor: n, computePositionConfig: r, getReferencedVirtualElement: i, onNodeChange: a, onElementDragStart: o, onElementDragEnd: s, nestedOptions: c }) => {
	let l = document.createElement("div"), u = !1, d = null, f = -1, p, m = null, h = null;
	function g() {
		t && (t.style.visibility = "hidden", t.style.pointerEvents = "none");
	}
	function _() {
		if (t) {
			if (!n.isEditable) {
				g();
				return;
			}
			t.style.visibility = "", t.style.pointerEvents = "auto";
		}
	}
	function v(e) {
		Du(i?.() || { getBoundingClientRect: () => e.getBoundingClientRect() }, t, r).then((e) => {
			Object.assign(t.style, {
				position: e.strategy,
				left: `${e.x}px`,
				top: `${e.y}px`
			});
		});
	}
	function y(e) {
		o?.(e), Ly(e, n, c, {
			node: d,
			pos: f
		}), t && (t.dataset.dragging = "true"), setTimeout(() => {
			t && (t.style.pointerEvents = "none");
		}, 0);
	}
	function b(e) {
		s?.(e), g(), t && (t.style.pointerEvents = "auto", t.dataset.dragging = "false");
	}
	function x() {
		if (Ye()) {
			let e = n.view.dom;
			requestAnimationFrame(() => {
				e.isContentEditable && (e.contentEditable = "false", e.contentEditable = "true");
			});
		}
	}
	return l.appendChild(t), {
		unbind() {
			t.removeEventListener("dragstart", y), t.removeEventListener("dragend", b), document.removeEventListener("drop", x), m && (cancelAnimationFrame(m), m = null, h = null);
		},
		plugin: new nr({
			key: typeof e == "string" ? new Ct(e) : e,
			state: {
				init() {
					return { locked: !1 };
				},
				apply(e, r, i, o) {
					let s = e.getMeta("lockDragHandle"), c = e.getMeta("hideDragHandle");
					if (s !== void 0 && (u = s), c) return g(), u = !1, d = null, f = -1, a?.({
						editor: n,
						node: null,
						pos: -1
					}), r;
					if (e.docChanged && f !== -1 && t) if (ay(e)) {
						let e = Vy(o, p);
						e !== f && (f = e);
					} else {
						let t = e.mapping.map(f);
						t !== f && (f = t, p = By(o, f));
					}
					return r;
				}
			},
			view: (e) => {
				var r;
				return t.draggable = !0, t.style.pointerEvents = "auto", t.dataset.dragging = "false", (r = n.view.dom.parentElement) == null || r.appendChild(l), l.style.pointerEvents = "none", l.style.position = "absolute", l.style.top = "0", l.style.left = "0", t.addEventListener("dragstart", y), t.addEventListener("dragend", b), document.addEventListener("drop", x), {
					update(r, i) {
						if (!t) return;
						if (!n.isEditable) {
							g();
							return;
						}
						if (u ? t.draggable = !1 : t.draggable = !0, e.state.doc.eq(i.doc) || f === -1) return;
						let o = e.nodeDOM(f);
						if (o = Hy(e, o), o === e.dom || o?.nodeType !== 1) return;
						let s = e.posAtDOM(o, 0), c = zy(n.state.doc, s), l = Ry(n.state.doc, s);
						d = c, f = l, p = By(e.state, f), a?.({
							editor: n,
							node: d,
							pos: f
						}), v(o);
					},
					destroy() {
						t.removeEventListener("dragstart", y), t.removeEventListener("dragend", b), document.removeEventListener("drop", x), m && (cancelAnimationFrame(m), m = null, h = null), t && Py(l);
					}
				};
			},
			props: { handleDOMEvents: {
				keydown(e) {
					return !t || u ? !1 : e.hasFocus() ? (g(), d = null, f = -1, a?.({
						editor: n,
						node: null,
						pos: -1
					}), !1) : !1;
				},
				mouseleave(e, t) {
					return u || t.target && !l.contains(t.relatedTarget) && (g(), d = null, f = -1, a?.({
						editor: n,
						node: null,
						pos: -1
					})), !1;
				},
				mousemove(e, r) {
					return !t || u || (h = {
						x: r.clientX,
						y: r.clientY
					}, m) || (m = requestAnimationFrame(() => {
						if (m = null, !h) return;
						let { x: t, y: r } = h;
						h = null;
						let i = jy({
							x: t,
							y: r,
							direction: "right",
							editor: n,
							nestedOptions: c
						});
						if (!i.resultElement) return;
						let o = i.resultElement, s = i.resultNode, l = i.pos;
						if (!c?.enabled) {
							if (o = Hy(e, o), o === e.dom || o?.nodeType !== 1) return;
							let t = e.posAtDOM(o, 0);
							s = zy(n.state.doc, t), l = Ry(n.state.doc, t);
						}
						s !== d && (d = s, f = l ?? -1, p = By(e.state, f), a?.({
							editor: n,
							node: d,
							pos: f
						}), v(o), _());
					})), !1;
				}
			} }
		})
	};
};
function Gy(e) {
	return e === !1 || e === void 0 ? {
		enabled: !1,
		rules: [],
		defaultRules: !0,
		allowedContainers: void 0,
		edgeDetection: xy("none")
	} : e === !0 ? {
		enabled: !0,
		rules: [],
		defaultRules: !0,
		allowedContainers: void 0,
		edgeDetection: xy("left")
	} : {
		enabled: !0,
		rules: e.rules ?? [],
		defaultRules: e.defaultRules ?? !0,
		allowedContainers: e.allowedContainers,
		edgeDetection: xy(e.edgeDetection)
	};
}
var Ky = {
	placement: "left-start",
	strategy: "absolute"
};
dn.create({
	name: "dragHandle",
	addOptions() {
		return {
			render() {
				let e = document.createElement("div");
				return e.classList.add("drag-handle"), e;
			},
			computePositionConfig: {},
			locked: !1,
			onNodeChange: () => null,
			onElementDragStart: void 0,
			onElementDragEnd: void 0,
			nested: !1
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
		let e = this.options.render(), t = Gy(this.options.nested);
		return [Wy({
			computePositionConfig: {
				...Ky,
				...this.options.computePositionConfig
			},
			getReferencedVirtualElement: this.options.getReferencedVirtualElement,
			element: e,
			editor: this.editor,
			onNodeChange: this.options.onNodeChange,
			onElementDragStart: this.options.onElementDragStart,
			onElementDragEnd: this.options.onElementDragEnd,
			nestedOptions: t
		}).plugin];
	}
});
//#endregion
//#region node_modules/@tiptap/extension-drag-handle-vue-3/dist/index.js
var qy = /* @__PURE__ */ Si({
	name: "DragHandleVue",
	props: {
		pluginKey: {
			type: [String, Object],
			default: Uy
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
		},
		nested: {
			type: [Boolean, Object],
			default: !1
		}
	},
	setup(e, { slots: t }) {
		let n = A(null), r = Pe(null), i = () => {
			let { editor: t, pluginKey: i, onNodeChange: a, onElementDragEnd: o, onElementDragStart: s, computePositionConfig: c, nested: l } = e;
			if (!n.value || !e.editor || e.editor.isDestroyed) return;
			n.value.style.visibility = "hidden";
			let u = Gy(l), d = Wy({
				editor: t,
				element: n.value,
				pluginKey: i,
				computePositionConfig: {
					...Ky,
					...c
				},
				onNodeChange: a,
				onElementDragStart: s,
				onElementDragEnd: o,
				nestedOptions: u
			});
			r.value = d, e.editor.registerPlugin(d.plugin);
		}, a = () => {
			var t, n;
			r.value &&= (e.editor && !e.editor.isDestroyed && e.editor.unregisterPlugin(e.pluginKey), (n = (t = r.value).unbind) == null || n.call(t), null);
		};
		return Ri(async () => {
			await Ir(), i();
		}), ti(() => e.nested, () => {
			a(), i();
		}, { deep: !0 }), Vi(() => {
			a();
		}), () => cs("div", {
			ref: n,
			class: e.class,
			style: { position: "absolute" },
			"data-dragging": "false"
		}, t.default?.call(t));
	}
}), Jy = (e) => N({
	find: /--$/,
	replace: e ?? "—"
}), Yy = (e) => N({
	find: /\.\.\.$/,
	replace: e ?? "…"
}), Xy = (e) => N({
	find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
	replace: e ?? "“"
}), Zy = (e) => N({
	find: /"$/,
	replace: e ?? "”"
}), Qy = (e) => N({
	find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
	replace: e ?? "‘"
}), $y = (e) => N({
	find: /'$/,
	replace: e ?? "’"
}), eb = (e) => N({
	find: /<-$/,
	replace: e ?? "←"
}), tb = (e) => N({
	find: /->$/,
	replace: e ?? "→"
}), nb = (e) => N({
	find: /\(c\)$/,
	replace: e ?? "©"
}), rb = (e) => N({
	find: /\(tm\)$/,
	replace: e ?? "™"
}), ib = (e) => N({
	find: /\(sm\)$/,
	replace: e ?? "℠"
}), ab = (e) => N({
	find: /\(r\)$/,
	replace: e ?? "®"
}), ob = (e) => N({
	find: /(?:^|\s)(1\/2)\s$/,
	replace: e ?? "½"
}), sb = (e) => N({
	find: /\+\/-$/,
	replace: e ?? "±"
}), cb = (e) => N({
	find: /!=$/,
	replace: e ?? "≠"
}), lb = (e) => N({
	find: /<<$/,
	replace: e ?? "«"
}), ub = (e) => N({
	find: />>$/,
	replace: e ?? "»"
}), db = (e) => N({
	find: /\d+\s?([*x])\s?\d+$/,
	replace: e ?? "×"
}), fb = (e) => N({
	find: /\^2$/,
	replace: e ?? "²"
}), pb = (e) => N({
	find: /\^3$/,
	replace: e ?? "³"
}), mb = (e) => N({
	find: /(?:^|\s)(1\/4)\s$/,
	replace: e ?? "¼"
}), hb = (e) => N({
	find: /(?:^|\s)(3\/4)\s$/,
	replace: e ?? "¾"
}), gb = dn.create({
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
		let e = [];
		this.options.emDash !== !1 && e.push(Jy(this.options.emDash)), this.options.ellipsis !== !1 && e.push(Yy(this.options.ellipsis));
		let t = this.editor.options.textDirection === "rtl";
		if (this.options.doubleQuotes?.rtl) {
			let { open: t, close: n } = this.options.doubleQuotes.rtl;
			e.push(Xy(t)), e.push(Zy(n));
		} else t ? (e.push(Xy("”")), e.push(Zy("“"))) : (this.options.openDoubleQuote !== !1 && e.push(Xy(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(Zy(this.options.closeDoubleQuote)));
		if (this.options.singleQuotes?.rtl) {
			let { open: t, close: n } = this.options.singleQuotes.rtl;
			e.push(Qy(t)), e.push($y(n));
		} else t ? (e.push(Qy("’")), e.push($y("‘"))) : (this.options.openSingleQuote !== !1 && e.push(Qy(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push($y(this.options.closeSingleQuote)));
		return this.options.leftArrow !== !1 && e.push(eb(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(tb(this.options.rightArrow)), this.options.copyright !== !1 && e.push(nb(this.options.copyright)), this.options.trademark !== !1 && e.push(rb(this.options.trademark)), this.options.servicemark !== !1 && e.push(ib(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(ab(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(ob(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(sb(this.options.plusMinus)), this.options.notEqual !== !1 && e.push(cb(this.options.notEqual)), this.options.laquo !== !1 && e.push(lb(this.options.laquo)), this.options.raquo !== !1 && e.push(ub(this.options.raquo)), this.options.multiplication !== !1 && e.push(db(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(fb(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(pb(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(mb(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(hb(this.options.threeQuarters)), e;
	}
}), _b = /(^|[^`])`([^`]+)`(?!`)$/, vb = /(^|[^`])`([^`]+)`(?!`)/g, yb = Yt.create({
	name: "code",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	excludes: "_",
	code: !0,
	exitable: !0,
	parseHTML() {
		return [{ tag: "code" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"code",
			$e(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "codespan",
	parseMarkdown: (e, t) => t.applyMark("code", [{
		type: "text",
		text: e.text || ""
	}]),
	renderMarkdown: (e, t) => e.content ? `\`${t.renderChildren(e.content)}\`` : "",
	addCommands() {
		return {
			setCode: () => ({ commands: e }) => e.setMark(this.name),
			toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-e": () => this.editor.commands.toggleCode() };
	},
	addInputRules() {
		return [tt({
			find: _b,
			type: this.type
		})];
	},
	addPasteRules() {
		return [kt({
			find: vb,
			type: this.type
		})];
	}
}), bb = 4, xb = /^```([a-z]+)?[\s\n]$/, Sb = /^~~~([a-z]+)?[\s\n]$/, Cb = Kn.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: bb,
			HTMLAttributes: {}
		};
	},
	content: "text*",
	marks: "",
	group: "block",
	code: !0,
	defining: !0,
	addAttributes() {
		return { language: {
			default: this.options.defaultLanguage,
			parseHTML: (e) => {
				let { languageClassPrefix: t } = this.options;
				return t && [...e.firstElementChild?.classList || []].filter((e) => e.startsWith(t)).map((e) => e.replace(t, ""))[0] || null;
			},
			rendered: !1
		} };
	},
	parseHTML() {
		return [{
			tag: "pre",
			preserveWhitespace: "full"
		}];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			"pre",
			$e(this.options.HTMLAttributes, t),
			[
				"code",
				{ class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null },
				0
			]
		];
	},
	markdownTokenName: "code",
	parseMarkdown: (e, t) => e.raw?.startsWith("```") === !1 && e.raw?.startsWith("~~~") === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode("codeBlock", { language: e.lang || null }, e.text ? [t.createTextNode(e.text)] : []),
	renderMarkdown: (e, t) => {
		let n = "", r = e.attrs?.language || "";
		return n = e.content ? [
			`\`\`\`${r}`,
			t.renderChildren(e.content),
			"```"
		].join("\n") : `\`\`\`${r}

\`\`\``, n;
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
			Backspace: () => {
				let { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
				return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
			},
			Tab: ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? bb, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? bb, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				return i.parent.type === this.type ? a ? e.commands.command(({ tr: e }) => {
					let { pos: r } = i, a = i.start(), o = i.end(), s = n.doc.textBetween(a, o, "\n", "\n").split("\n"), c = 0, l = 0, u = r - a;
					for (let e = 0; e < s.length; e += 1) {
						if (l + s[e].length >= u) {
							c = e;
							break;
						}
						l += s[e].length + 1;
					}
					let d = s[c].match(/^ */)?.[0] || "", f = Math.min(d.length, t);
					if (f === 0) return !0;
					let p = a;
					for (let e = 0; e < c; e += 1) p += s[e].length + 1;
					return e.delete(p, p + f), r - p <= f && e.setSelection(Et.create(e.doc, p)), !0;
				}) : e.commands.command(({ tr: e }) => {
					let { from: i, to: a } = r, o = n.doc.textBetween(i, a, "\n", "\n").split("\n").map((e) => {
						let n = e.match(/^ */)?.[0] || "", r = Math.min(n.length, t);
						return e.slice(r);
					}).join("\n");
					return e.replaceWith(i, a, n.schema.text(o)), !0;
				}) : !1;
			},
			Enter: ({ editor: e }) => {
				if (!this.options.exitOnTripleEnter) return !1;
				let { state: t } = e, { selection: n } = t, { $from: r, empty: i } = n;
				if (!i || r.parent.type !== this.type) return !1;
				let a = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith("\n\n");
				return !a || !o ? !1 : e.chain().command(({ tr: e }) => (e.delete(r.pos - 2, r.pos), !0)).exitCode().run();
			},
			ArrowDown: ({ editor: e }) => {
				if (!this.options.exitOnArrowDown) return !1;
				let { state: t } = e, { selection: n, doc: r } = t, { $from: i, empty: a } = n;
				if (!a || i.parent.type !== this.type || i.parentOffset !== i.parent.nodeSize - 2) return !1;
				let o = i.after();
				return o === void 0 ? !1 : r.nodeAt(o) ? e.commands.command(({ tr: e }) => (e.setSelection(We.near(r.resolve(o))), !0)) : e.commands.exitCode();
			}
		};
	},
	addInputRules() {
		return [Nn({
			find: xb,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), Nn({
			find: Sb,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		})];
	},
	addProseMirrorPlugins() {
		return [new nr({
			key: new Ct("codeBlockVSCodeHandler"),
			props: { handlePaste: (e, t) => {
				if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
				let n = t.clipboardData.getData("text/plain"), r = t.clipboardData.getData("vscode-editor-data"), i = (r ? JSON.parse(r) : void 0)?.mode;
				if (!n || !i) return !1;
				let { tr: a, schema: o } = e.state, s = o.text(n.replace(/\r\n?/g, "\n"));
				return a.replaceSelectionWith(this.type.create({ language: i }, s)), a.selection.$from.parent.type !== this.type && a.setSelection(Et.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.setMeta("paste", !0), e.dispatch(a), !0;
			} }
		})];
	}
}), wb = Kn.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), Tb = Kn.create({
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
		return ["br", $e(this.options.HTMLAttributes, e)];
	},
	renderText() {
		return "\n";
	},
	renderMarkdown: () => "  \n",
	parseMarkdown: () => ({ type: "hardBreak" }),
	addCommands() {
		return { setHardBreak: () => ({ commands: e, chain: t, state: n, editor: r }) => e.first([() => e.exitCode(), () => e.command(() => {
			let { selection: e, storedMarks: i } = n;
			if (e.$from.parent.type.spec.isolating) return !1;
			let { keepMarks: a } = this.options, { splittableMarks: o } = r.extensionManager, s = i || e.$to.parentOffset && e.$from.marks();
			return t().insertContent({ type: this.name }).command(({ tr: e, dispatch: t }) => {
				if (t && s && a) {
					let t = s.filter((e) => o.includes(e.type.name));
					e.ensureMarks(t);
				}
				return !0;
			}).run();
		})]) };
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Enter": () => this.editor.commands.setHardBreak(),
			"Shift-Enter": () => this.editor.commands.setHardBreak()
		};
	}
}), Eb = Kn.create({
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
		return ["hr", $e(this.options.HTMLAttributes, e)];
	},
	markdownTokenName: "hr",
	parseMarkdown: (e, t) => t.createNode("horizontalRule"),
	renderMarkdown: () => "---",
	addCommands() {
		return { setHorizontalRule: () => ({ chain: e, state: t }) => {
			if (!Yn(t, t.schema.nodes[this.name])) return !1;
			let { selection: n } = t, { $to: r } = n, i = e();
			return pt(n) ? i.insertContentAt(r.pos, { type: this.name }) : i.insertContent({ type: this.name }), i.command(({ state: e, tr: t, dispatch: n }) => {
				if (n) {
					let { $to: n } = t.selection, r = n.end();
					if (n.nodeAfter) n.nodeAfter.isTextblock ? t.setSelection(Et.create(t.doc, n.pos + 1)) : n.nodeAfter.isBlock ? t.setSelection(qt.create(t.doc, n.pos)) : t.setSelection(Et.create(t.doc, n.pos));
					else {
						let i = (e.schema.nodes[this.options.nextNodeType] || n.parent.type.contentMatch.defaultType)?.create();
						i && (t.insert(r, i), t.setSelection(Et.create(t.doc, r + 1)));
					}
					t.scrollIntoView();
				}
				return !0;
			}).run();
		} };
	},
	addInputRules() {
		return [at({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), Db = "&nbsp;", Ob = "\xA0", kb = Kn.create({
	name: "paragraph",
	priority: 1e3,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	group: "block",
	content: "inline*",
	parseHTML() {
		return [{ tag: "p" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"p",
			$e(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown: (e, t) => {
		let n = e.tokens || [];
		if (n.length === 1 && n[0].type === "image") return t.parseChildren([n[0]]);
		let r = t.parseInline(n);
		return n.length === 1 && n[0].type === "text" && (n[0].raw === Db || n[0].text === Db || n[0].raw === Ob || n[0].text === Ob) && r.length === 1 && r[0].type === "text" && (r[0].text === Db || r[0].text === Ob) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t, n) => {
		if (!e) return "";
		let r = Array.isArray(e.content) ? e.content : [];
		if (r.length === 0) {
			let e = Array.isArray(n?.previousNode?.content) ? n.previousNode.content : [];
			return n?.previousNode?.type === "paragraph" && e.length === 0 ? Db : "";
		}
		return t.renderChildren(r);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), Ab = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, jb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Mb = Yt.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: !1,
				getAttrs: (e) => e.includes("line-through") ? {} : !1
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"s",
			$e(this.options.HTMLAttributes, e),
			0
		];
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
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [tt({
			find: Ab,
			type: this.type
		})];
	},
	addPasteRules() {
		return [kt({
			find: jb,
			type: this.type
		})];
	}
}), Nb = Kn.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), Pb = dn.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(ur.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(lr.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(_r.configure(this.options.bulletList)), this.options.code !== !1 && e.push(yb.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(Cb.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(wb.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(xr.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(Sr.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(Tb.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(dr.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(yr.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(Eb.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(fr.configure(this.options.italic)), this.options.listItem !== !1 && e.push(hr.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(gr.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(pr.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(mr.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(kb.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(Mb.configure(this.options.strike)), this.options.text !== !1 && e.push(Nb.configure(this.options.text)), this.options.underline !== !1 && e.push(vr.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(br.configure(this.options?.trailingNode)), e;
	}
});
//#endregion
//#region node_modules/@tiptap/vue-3/dist/index.js
function Fb(e) {
	return De((t, n) => ({
		get() {
			return t(), e;
		},
		set(t) {
			e = t, requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					n();
				});
			});
		}
	}));
}
var Ib = class extends En {
	constructor(e = {}) {
		return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Fb(this.view.state), this.reactiveExtensionStorage = Fb(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
			this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
		}), we(this);
	}
	get state() {
		return this.reactiveState ? this.reactiveState.value : this.view.state;
	}
	get storage() {
		return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
	}
	registerPlugin(e, t) {
		let n = super.registerPlugin(e, t);
		return this.reactiveState && (this.reactiveState.value = n), n;
	}
	unregisterPlugin(e) {
		let t = super.unregisterPlugin(e);
		return this.reactiveState && t && (this.reactiveState.value = t), t;
	}
}, Lb = /* @__PURE__ */ Si({
	name: "EditorContent",
	props: { editor: {
		default: null,
		type: Object
	} },
	setup(e) {
		let t = A(), n = Uo();
		return ei(() => {
			let r = e.editor;
			r && r.options.element && t.value && Ir(() => {
				if (!t.value || !r.view.dom?.parentNode) return;
				let e = w(t.value);
				t.value.append(...r.view.dom.parentNode.childNodes), r.contentComponent = n.ctx._, n && (r.appContext = {
					...n.appContext,
					provides: n.provides
				}), r.setOptions({ element: e }), r.createNodeViews();
			});
		}), Vi(() => {
			let t = e.editor;
			t && (t.contentComponent = null, t.appContext = null);
		}), { rootEl: t };
	},
	render() {
		return cs("div", { ref: (e) => {
			this.rootEl = e;
		} });
	}
});
//#endregion
//#region node_modules/@tiptap/vue-3/dist/menus/index.js
function Rb(e, t) {
	let n = Math.min(e.top, t.top), r = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), a = Math.max(e.right, t.right) - i, o = r - n;
	return new DOMRect(i, n, a, o);
}
var zb = class {
	constructor({ editor: e, element: t, view: n, pluginKey: r = "bubbleMenu", updateDelay: i = 250, resizeDelay: a = 60, shouldShow: o, appendTo: s, getReferencedVirtualElement: c, options: l }) {
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
		}, this.shouldShow = ({ view: e, state: t, from: n, to: r }) => {
			let { doc: i, selection: a } = t, { empty: o } = a, s = !i.textBetween(n, r).length && He(t.selection), c = this.element.contains(document.activeElement);
			return !(!(e.hasFocus() || c) || o || s || !this.editor.isEditable);
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
		}, this.blurHandler = ({ event: e }) => {
			if (this.editor.isDestroyed) {
				this.destroy();
				return;
			}
			if (this.preventHide) {
				this.preventHide = !1;
				return;
			}
			e?.relatedTarget && this.element.parentNode?.contains(e.relatedTarget) || e?.relatedTarget !== this.editor.view.dom && this.hide();
		}, this.handleDebouncedUpdate = (e, t) => {
			let n = !t?.selection.eq(e.state.selection), r = !t?.doc.eq(e.state.doc);
			!n && !r || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
				this.updateHandler(e, n, r, t);
			}, this.updateDelay));
		}, this.updateHandler = (e, t, n, r) => {
			let { composing: i } = e;
			if (!(i || !t && !n)) {
				if (!this.getShouldShow(r)) {
					this.hide();
					return;
				}
				this.show(), this.updatePosition();
			}
		}, this.transactionHandler = ({ transaction: e }) => {
			let t = e.getMeta(this.pluginKey);
			t === "updatePosition" ? this.updatePosition() : t && typeof t == "object" && t.type === "updateOptions" ? this.updateOptions(t.options) : t === "hide" ? this.hide() : t === "show" && (this.updatePosition(), this.show());
		}, this.editor = e, this.element = t, this.view = n, this.pluginKey = r, this.updateDelay = i, this.resizeDelay = a, this.appendTo = s, this.scrollTarget = l?.scrollTarget ?? window, this.getReferencedVirtualElement = c, this.floatingUIOptions = {
			...this.floatingUIOptions,
			...l
		}, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
	}
	get middlewares() {
		let e = [];
		return this.floatingUIOptions.flip && e.push(Su(typeof this.floatingUIOptions.flip == "boolean" ? void 0 : this.floatingUIOptions.flip)), this.floatingUIOptions.shift && e.push(xu(typeof this.floatingUIOptions.shift == "boolean" ? void 0 : this.floatingUIOptions.shift)), this.floatingUIOptions.offset && e.push(yu(typeof this.floatingUIOptions.offset == "boolean" ? void 0 : this.floatingUIOptions.offset)), this.floatingUIOptions.arrow && e.push(Tu(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(Cu(typeof this.floatingUIOptions.size == "boolean" ? void 0 : this.floatingUIOptions.size)), this.floatingUIOptions.autoPlacement && e.push(bu(typeof this.floatingUIOptions.autoPlacement == "boolean" ? void 0 : this.floatingUIOptions.autoPlacement)), this.floatingUIOptions.hide && e.push(wu(typeof this.floatingUIOptions.hide == "boolean" ? void 0 : this.floatingUIOptions.hide)), this.floatingUIOptions.inline && e.push(Eu(typeof this.floatingUIOptions.inline == "boolean" ? void 0 : this.floatingUIOptions.inline)), e;
	}
	get virtualElement() {
		let { selection: e } = this.editor.state, t = this.getReferencedVirtualElement?.call(this);
		if (t) return t;
		if (!this.view?.dom?.parentNode) return;
		let n = en(this.view, e.from, e.to), r = {
			getBoundingClientRect: () => n,
			getClientRects: () => [n]
		};
		if (e instanceof qt) {
			let t = this.view.nodeDOM(e.from), n = t.dataset.nodeViewWrapper ? t : t.querySelector("[data-node-view-wrapper]");
			n && (t = n), t && (r = {
				getBoundingClientRect: () => t.getBoundingClientRect(),
				getClientRects: () => [t.getBoundingClientRect()]
			});
		}
		if (e instanceof Cr) {
			let { $anchorCell: t, $headCell: n } = e, i = t ? t.pos : n.pos, a = n ? n.pos : t.pos, o = this.view.nodeDOM(i), s = this.view.nodeDOM(a);
			if (!o || !s) return;
			let c = o === s ? o.getBoundingClientRect() : Rb(o.getBoundingClientRect(), s.getBoundingClientRect());
			r = {
				getBoundingClientRect: () => c,
				getClientRects: () => [c]
			};
		}
		return r;
	}
	updatePosition() {
		if (!this.isVisible) return;
		let e = this.virtualElement;
		e && Du(e, this.element, {
			placement: this.floatingUIOptions.placement,
			strategy: this.floatingUIOptions.strategy,
			middleware: this.middlewares
		}).then(({ x: e, y: t, strategy: n, middlewareData: r }) => {
			if (!(!this.isVisible || this.editor.isDestroyed || !this.element.isConnected)) {
				if (r.hide?.referenceHidden || r.hide?.escaped) {
					this.element.style.visibility = "hidden";
					return;
				}
				this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = n, this.element.style.left = `${e}px`, this.element.style.top = `${t}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
			}
		});
	}
	update(e, t) {
		let { state: n } = e, r = n.selection.from !== n.selection.to;
		if (this.updateDelay > 0 && r) {
			this.handleDebouncedUpdate(e, t);
			return;
		}
		let i = !t?.selection.eq(e.state.selection), a = !t?.doc.eq(e.state.doc);
		this.updateHandler(e, i, a, t);
	}
	getShouldShow(e) {
		let { state: t } = this.view, { selection: n } = t, { ranges: r } = n, i = Math.min(...r.map((e) => e.$from.pos)), a = Math.max(...r.map((e) => e.$to.pos));
		return this.shouldShow?.call(this, {
			editor: this.editor,
			element: this.element,
			view: this.view,
			state: t,
			oldState: e,
			from: i,
			to: a
		}) || !1;
	}
	show() {
		var e;
		this.isVisible || (this.element.style.visibility = "visible", this.element.style.opacity = "1", (e = (typeof this.appendTo == "function" ? this.appendTo() : this.appendTo) ?? this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0);
	}
	hide() {
		this.isVisible &&= (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), !1);
	}
	updateOptions(e) {
		if (e.updateDelay !== void 0 && (this.updateDelay = e.updateDelay), e.resizeDelay !== void 0 && (this.resizeDelay = e.resizeDelay), e.appendTo !== void 0 && (this.appendTo = e.appendTo), e.getReferencedVirtualElement !== void 0 && (this.getReferencedVirtualElement = e.getReferencedVirtualElement), e.shouldShow !== void 0 && e.shouldShow && (this.shouldShow = e.shouldShow), e.options !== void 0) {
			let t = e.options.scrollTarget ?? window;
			t !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = t, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
				...this.floatingUIOptions,
				...e.options
			};
		}
	}
	destroy() {
		this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
	}
}, Bb = (e) => new nr({
	key: typeof e.pluginKey == "string" ? new Ct(e.pluginKey) : e.pluginKey,
	view: (t) => new zb({
		view: t,
		...e
	})
}), Vb = /* @__PURE__ */ Si({
	name: "BubbleMenu",
	inheritAttrs: !1,
	props: {
		pluginKey: {
			type: [String, Object],
			default: void 0
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
			type: [Object, Function],
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
		let r = A(null), i = e.pluginKey ?? new Ct("bubbleMenu");
		return Ri(() => {
			let { editor: t, options: n, resizeDelay: a, appendTo: o, shouldShow: s, getReferencedVirtualElement: c, updateDelay: l } = e, u = r.value;
			u && (u.style.visibility = "hidden", u.style.position = "absolute", u.remove(), Ir(() => {
				t.registerPlugin(Bb({
					editor: t,
					element: u,
					options: n,
					pluginKey: i,
					resizeDelay: a,
					appendTo: o,
					shouldShow: s,
					getReferencedVirtualElement: c,
					updateDelay: l
				}));
			}));
		}), Vi(() => {
			let { editor: t } = e;
			t.unregisterPlugin(i);
		}), () => cs("div", {
			ref: r,
			...n
		}, t.default?.call(t));
	}
}), Hb = {
	height: "20",
	width: "20",
	viewBox: "0 0 20 20"
}, Ub = ["stroke-dasharray"], Wb = /* @__PURE__ */ Si({
	__name: "CharacterCount",
	props: {
		editor: {},
		limit: {}
	},
	setup(e) {
		let t = e, n = ss(() => Math.round(100 / t.limit * t.editor.storage.characterCount.characters()));
		return (t, r) => (L(), R("div", { class: xe(["tiptap-character-count", { "tiptap-character-count--warning": e.editor.storage.characterCount.characters() === e.limit }]) }, [
			(L(), R("svg", Hb, [
				r[0] ||= Oo("circle", {
					r: "10",
					cx: "10",
					cy: "10",
					fill: "var(--tiptap-color-surface-highlight)"
				}, null, -1),
				Oo("circle", {
					r: "5",
					cx: "10",
					cy: "10",
					fill: "transparent",
					stroke: "currentColor",
					"stroke-width": "10",
					"stroke-dasharray": `calc(${n.value} * 31.4 / 100) 31.4`,
					transform: "rotate(-90) translate(-20)"
				}, null, 8, Ub),
				r[1] ||= Oo("circle", {
					r: "6",
					cx: "10",
					cy: "10",
					fill: "var(--tiptap-color-surface)"
				}, null, -1)
			])),
			Mo(" " + se(e.editor.storage.characterCount.characters()) + " / " + se(e.limit) + " characters ", 1),
			r[2] ||= Oo("br", null, null, -1),
			Mo(" " + se(e.editor.storage.characterCount.words()) + " words ", 1)
		], 2));
	}
}), Gb = Symbol("headlessui.useid"), Kb = 0, qb = Ci ?? function() {
	return Zr(Gb, () => `${++Kb}`)();
};
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/dom.js
function Q(e) {
	if (e == null || e.value == null) return null;
	let t = e.value.$el ?? e.value;
	return t instanceof Node ? t : null;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/match.js
function Jb(e, t, ...n) {
	if (e in t) {
		let r = t[e];
		return typeof r == "function" ? r(...n) : r;
	}
	let r = /* @__PURE__ */ Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e) => `"${e}"`).join(", ")}.`);
	throw Error.captureStackTrace && Error.captureStackTrace(r, Jb), r;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/env.js
var Yb = Object.defineProperty, Xb = (e, t, n) => t in e ? Yb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Zb = (e, t, n) => (Xb(e, typeof t == "symbol" ? t : t + "", n), n), Qb = new class {
	constructor() {
		Zb(this, "current", this.detect()), Zb(this, "currentId", 0);
	}
	set(e) {
		this.current !== e && (this.currentId = 0, this.current = e);
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
}();
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/owner.js
function $b(e) {
	if (Qb.isServer) return null;
	if (e instanceof Node) return e.ownerDocument;
	if (e != null && e.hasOwnProperty("value")) {
		let t = Q(e);
		if (t) return t.ownerDocument;
	}
	return document;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/focus-management.js
var ex = [
	"[contentEditable=true]",
	"[tabindex]",
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"iframe",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])"
].map((e) => `${e}:not([tabindex='-1'])`).join(","), tx = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(tx || {}), nx = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(nx || {}), rx = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(rx || {});
function ix(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(ex)).sort((e, t) => Math.sign((e.tabIndex || 2 ** 53 - 1) - (t.tabIndex || 2 ** 53 - 1)));
}
var ax = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ax || {});
function ox(e, t = 0) {
	return e === $b(e)?.body ? !1 : Jb(t, {
		0() {
			return e.matches(ex);
		},
		1() {
			let t = e;
			for (; t !== null;) {
				if (t.matches(ex)) return !0;
				t = t.parentElement;
			}
			return !1;
		}
	});
}
function sx(e) {
	let t = $b(e);
	Ir(() => {
		t && !ox(t.activeElement, 0) && lx(e);
	});
}
var cx = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(cx || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
	e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
	e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function lx(e) {
	e?.focus({ preventScroll: !0 });
}
var ux = ["textarea", "input"].join(",");
function dx(e) {
	return (e?.matches)?.call(e, ux) ?? !1;
}
function fx(e, t = (e) => e) {
	return e.slice().sort((e, n) => {
		let r = t(e), i = t(n);
		if (r === null || i === null) return 0;
		let a = r.compareDocumentPosition(i);
		return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	});
}
function px(e, t) {
	return mx(ix(), t, { relativeTo: e });
}
function mx(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
	let a = (Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) ?? document, o = Array.isArray(e) ? n ? fx(e) : e : ix(e);
	i.length > 0 && o.length > 1 && (o = o.filter((e) => !i.includes(e))), r ??= a.activeElement;
	let s = (() => {
		if (t & 5) return 1;
		if (t & 10) return -1;
		throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), c = (() => {
		if (t & 1) return 0;
		if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
		if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
		if (t & 8) return o.length - 1;
		throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), l = t & 32 ? { preventScroll: !0 } : {}, u = 0, d = o.length, f;
	do {
		if (u >= d || u + d <= 0) return 0;
		let e = c + u;
		if (t & 16) e = (e + d) % d;
		else {
			if (e < 0) return 3;
			if (e >= d) return 1;
		}
		f = o[e], f?.focus(l), u += s;
	} while (f !== a.activeElement);
	return t & 6 && dx(f) && f.select(), 2;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/platform.js
function hx() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function gx() {
	return /Android/gi.test(window.navigator.userAgent);
}
function _x() {
	return hx() || gx();
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function vx(e, t, n) {
	Qb.isServer || ei((r) => {
		document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function yx(e, t, n) {
	Qb.isServer || ei((r) => {
		window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function bx(e, t, n = ss(() => !0)) {
	function r(r, i) {
		if (!n.value || r.defaultPrevented) return;
		let a = i(r);
		if (a === null || !a.getRootNode().contains(a)) return;
		let o = function e(t) {
			return typeof t == "function" ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
		}(e);
		for (let e of o) {
			if (e === null) continue;
			let t = e instanceof HTMLElement ? e : Q(e);
			if (t != null && t.contains(a) || r.composed && r.composedPath().includes(t)) return;
		}
		return !ox(a, ax.Loose) && a.tabIndex !== -1 && r.preventDefault(), t(r, a);
	}
	let i = A(null);
	vx("pointerdown", (e) => {
		n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target);
	}, !0), vx("mousedown", (e) => {
		n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target);
	}, !0), vx("click", (e) => {
		_x() || (i.value &&= (r(e, () => i.value), null));
	}, !0), vx("touchend", (e) => r(e, () => e.target instanceof HTMLElement ? e.target : null), !0), yx("blur", (e) => r(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function xx(e, t) {
	if (e) return e;
	let n = t ?? "button";
	if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Sx(e, t) {
	let n = A(xx(e.value.type, e.value.as));
	return Ri(() => {
		n.value = xx(e.value.type, e.value.as);
	}), ei(() => {
		var e;
		n.value || Q(t) && Q(t) instanceof HTMLButtonElement && !((e = Q(t)) != null && e.hasAttribute("type")) && (n.value = "button");
	}), n;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function Cx(e) {
	return [e.screenX, e.screenY];
}
function wx() {
	let e = A([-1, -1]);
	return {
		wasMoved(t) {
			let n = Cx(t);
			return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
		},
		update(t) {
			e.value = Cx(t);
		}
	};
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function Tx({ container: e, accept: t, walk: n, enabled: r }) {
	ei(() => {
		let i = e.value;
		if (!i || r !== void 0 && !r.value) return;
		let a = $b(e);
		if (!a) return;
		let o = Object.assign((e) => t(e), { acceptNode: t }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
		for (; s.nextNode();) n(s.currentNode);
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/render.js
var Ex = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ex || {}), Dx = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Dx || {});
function Ox({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...i }) {
	var a;
	let o = jx(r, n), s = Object.assign(i, { props: o });
	return e || t & 2 && o.static ? kx(s) : t & 1 ? Jb((a = o.unmount) == null || a ? 0 : 1, {
		0() {
			return null;
		},
		1() {
			return kx({
				...i,
				props: {
					...o,
					hidden: !0,
					style: { display: "none" }
				}
			});
		}
	}) : kx(s);
}
function kx({ props: e, attrs: t, slots: n, slot: r, name: i }) {
	let { as: a, ...o } = Mx(e, ["unmount", "static"]), s = n.default?.call(n, r), c = {};
	if (r) {
		let e = !1, t = [];
		for (let [n, i] of Object.entries(r)) typeof i == "boolean" && (e = !0), i === !0 && t.push(n);
		e && (c["data-headlessui-state"] = t.join(" "));
	}
	if (a === "template") {
		if (s = Ax(s ?? []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
			let [e, ...n] = s ?? [];
			if (!Nx(e) || n.length > 0) throw Error([
				"Passing props on \"template\"!",
				"",
				`The current component <${i} /> is rendering a "template".`,
				"However we need to passthrough the following props:",
				Object.keys(o).concat(Object.keys(t)).map((e) => e.trim()).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e.localeCompare(t)).map((e) => `  - ${e}`).join("\n"),
				"",
				"You can apply a few solutions:",
				["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"template\".", "Render a single element as the child so that we can forward the props onto that element."].map((e) => `  - ${e}`).join("\n")
			].join("\n"));
			let r = jx(e.props ?? {}, o, c), a = jo(e, r, !0);
			for (let e in r) e.startsWith("on") && (a.props ||= {}, a.props[e] = r[e]);
			return a;
		}
		return Array.isArray(s) && s.length === 1 ? s[0] : s;
	}
	return cs(a, Object.assign({}, o, c), { default: () => s });
}
function Ax(e) {
	return e.flatMap((e) => e.type === F ? Ax(e.children) : [e]);
}
function jx(...e) {
	if (e.length === 0) return {};
	if (e.length === 1) return e[0];
	let t = {}, n = {};
	for (let r of e) for (let e in r) e.startsWith("on") && typeof r[e] == "function" ? (n[e] ?? (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
	if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])));
	for (let e in n) Object.assign(t, { [e](t, ...r) {
		let i = n[e];
		for (let e of i) {
			if (t instanceof Event && t.defaultPrevented) return;
			e(t, ...r);
		}
	} });
	return t;
}
function Mx(e, t = []) {
	let n = Object.assign({}, e);
	for (let e of t) e in n && delete n[e];
	return n;
}
function Nx(e) {
	return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
//#endregion
//#region node_modules/@headlessui/vue/dist/internal/open-closed.js
var Px = Symbol("Context"), Fx = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Fx || {});
function Ix() {
	return Zr(Px, null);
}
function Lx(e) {
	Xr(Px, e);
}
//#endregion
//#region node_modules/@headlessui/vue/dist/keyboard.js
var $ = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($ || {});
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function Rx(e) {
	throw Error("Unexpected object: " + e);
}
var zx = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(zx || {});
function Bx(e, t) {
	let n = t.resolveItems();
	if (n.length <= 0) return null;
	let r = t.resolveActiveIndex(), i = r ?? -1;
	switch (e.focus) {
		case 0:
			for (let e = 0; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 1:
			i === -1 && (i = n.length);
			for (let e = i - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 2:
			for (let e = i + 1; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 3:
			for (let e = n.length - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 4:
			for (let r = 0; r < n.length; ++r) if (t.resolveId(n[r], r, n) === e.id) return r;
			return r;
		case 5: return null;
		default: Rx(e);
	}
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/get-text-value.js
var Vx = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Hx(e) {
	let t = e.innerText ?? "", n = e.cloneNode(!0);
	if (!(n instanceof HTMLElement)) return t;
	let r = !1;
	for (let e of n.querySelectorAll("[hidden],[aria-hidden],[role=\"img\"]")) e.remove(), r = !0;
	let i = r ? n.innerText ?? "" : t;
	return Vx.test(i) && (i = i.replace(Vx, "")), i;
}
function Ux(e) {
	let t = e.getAttribute("aria-label");
	if (typeof t == "string") return t.trim();
	let n = e.getAttribute("aria-labelledby");
	if (n) {
		let e = n.split(" ").map((e) => {
			let t = document.getElementById(e);
			if (t) {
				let e = t.getAttribute("aria-label");
				return typeof e == "string" ? e.trim() : Hx(t).trim();
			}
			return null;
		}).filter(Boolean);
		if (e.length > 0) return e.join(", ");
	}
	return Hx(e).trim();
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-text-value.js
function Wx(e) {
	let t = A(""), n = A("");
	return () => {
		let r = Q(e);
		if (!r) return "";
		let i = r.innerText;
		if (t.value === i) return n.value;
		let a = Ux(r).trim().toLowerCase();
		return t.value = i, n.value = a, a;
	};
}
//#endregion
//#region node_modules/@headlessui/vue/dist/components/menu/menu.js
var Gx = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gx || {}), Kx = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Kx || {});
function qx(e) {
	requestAnimationFrame(() => requestAnimationFrame(e));
}
var Jx = Symbol("MenuContext");
function Yx(e) {
	let t = Zr(Jx, null);
	if (t === null) {
		let t = /* @__PURE__ */ Error(`<${e} /> is missing a parent <Menu /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, Yx), t;
	}
	return t;
}
var Xx = /* @__PURE__ */ Si({
	name: "Menu",
	props: { as: {
		type: [Object, String],
		default: "template"
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = A(1), i = A(null), a = A(null), o = A([]), s = A(""), c = A(null), l = A(1);
		function u(e = (e) => e) {
			let t = c.value === null ? null : o.value[c.value], n = fx(e(o.value.slice()), (e) => Q(e.dataRef.domRef)), r = t ? n.indexOf(t) : null;
			return r === -1 && (r = null), {
				items: n,
				activeItemIndex: r
			};
		}
		let d = {
			menuState: r,
			buttonRef: i,
			itemsRef: a,
			items: o,
			searchQuery: s,
			activeItemIndex: c,
			activationTrigger: l,
			closeMenu: () => {
				r.value = 1, c.value = null;
			},
			openMenu: () => r.value = 0,
			goToItem(e, t, n) {
				let r = u(), i = Bx(e === zx.Specific ? {
					focus: zx.Specific,
					id: t
				} : { focus: e }, {
					resolveItems: () => r.items,
					resolveActiveIndex: () => r.activeItemIndex,
					resolveId: (e) => e.id,
					resolveDisabled: (e) => e.dataRef.disabled
				});
				s.value = "", c.value = i, l.value = n ?? 1, o.value = r.items;
			},
			search(e) {
				let t = +(s.value === "");
				s.value += e.toLowerCase();
				let n = (c.value === null ? o.value : o.value.slice(c.value + t).concat(o.value.slice(0, c.value + t))).find((e) => e.dataRef.textValue.startsWith(s.value) && !e.dataRef.disabled), r = n ? o.value.indexOf(n) : -1;
				r === -1 || r === c.value || (c.value = r, l.value = 1);
			},
			clearSearch() {
				s.value = "";
			},
			registerItem(e, t) {
				let n = u((n) => [...n, {
					id: e,
					dataRef: t
				}]);
				o.value = n.items, c.value = n.activeItemIndex, l.value = 1;
			},
			unregisterItem(e) {
				let t = u((t) => {
					let n = t.findIndex((t) => t.id === e);
					return n !== -1 && t.splice(n, 1), t;
				});
				o.value = t.items, c.value = t.activeItemIndex, l.value = 1;
			}
		};
		return bx([i, a], (e, t) => {
			var n;
			d.closeMenu(), ox(t, ax.Loose) || (e.preventDefault(), (n = Q(i)) == null || n.focus());
		}, ss(() => r.value === 0)), Xr(Jx, d), Lx(ss(() => Jb(r.value, {
			0: Fx.Open,
			1: Fx.Closed
		}))), () => Ox({
			ourProps: {},
			theirProps: e,
			slot: {
				open: r.value === 0,
				close: d.closeMenu
			},
			slots: t,
			attrs: n,
			name: "Menu"
		});
	}
}), Zx = /* @__PURE__ */ Si({
	name: "MenuButton",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [Object, String],
			default: "button"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(e, { attrs: t, slots: n, expose: r }) {
		let i = e.id ?? `headlessui-menu-button-${qb()}`, a = Yx("MenuButton");
		r({
			el: a.buttonRef,
			$el: a.buttonRef
		});
		function o(e) {
			switch (e.key) {
				case $.Space:
				case $.Enter:
				case $.ArrowDown:
					e.preventDefault(), e.stopPropagation(), a.openMenu(), Ir(() => {
						var e;
						(e = Q(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(zx.First);
					});
					break;
				case $.ArrowUp:
					e.preventDefault(), e.stopPropagation(), a.openMenu(), Ir(() => {
						var e;
						(e = Q(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(zx.Last);
					});
					break;
			}
		}
		function s(e) {
			switch (e.key) {
				case $.Space:
					e.preventDefault();
					break;
			}
		}
		function c(t) {
			e.disabled || (a.menuState.value === 0 ? (a.closeMenu(), Ir(() => Q(a.buttonRef)?.focus({ preventScroll: !0 }))) : (t.preventDefault(), a.openMenu(), qx(() => Q(a.itemsRef)?.focus({ preventScroll: !0 }))));
		}
		let l = Sx(ss(() => ({
			as: e.as,
			type: t.type
		})), a.buttonRef);
		return () => {
			let r = { open: a.menuState.value === 0 }, { ...u } = e;
			return Ox({
				ourProps: {
					ref: a.buttonRef,
					id: i,
					type: l.value,
					"aria-haspopup": "menu",
					"aria-controls": Q(a.itemsRef)?.id,
					"aria-expanded": a.menuState.value === 0,
					onKeydown: o,
					onKeyup: s,
					onClick: c
				},
				theirProps: u,
				slot: r,
				attrs: t,
				slots: n,
				name: "MenuButton"
			});
		};
	}
}), Qx = /* @__PURE__ */ Si({
	name: "MenuItems",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(e, { attrs: t, slots: n, expose: r }) {
		let i = e.id ?? `headlessui-menu-items-${qb()}`, a = Yx("MenuItems"), o = A(null);
		r({
			el: a.itemsRef,
			$el: a.itemsRef
		}), Tx({
			container: ss(() => Q(a.itemsRef)),
			enabled: ss(() => a.menuState.value === 0),
			accept(e) {
				return e.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
			},
			walk(e) {
				e.setAttribute("role", "none");
			}
		});
		function s(e) {
			var t;
			switch (o.value && clearTimeout(o.value), e.key) {
				case $.Space: if (a.searchQuery.value !== "") return e.preventDefault(), e.stopPropagation(), a.search(e.key);
				case $.Enter:
					if (e.preventDefault(), e.stopPropagation(), a.activeItemIndex.value !== null) {
						let e = a.items.value[a.activeItemIndex.value];
						(t = Q(e.dataRef.domRef)) == null || t.click();
					}
					a.closeMenu(), sx(Q(a.buttonRef));
					break;
				case $.ArrowDown: return e.preventDefault(), e.stopPropagation(), a.goToItem(zx.Next);
				case $.ArrowUp: return e.preventDefault(), e.stopPropagation(), a.goToItem(zx.Previous);
				case $.Home:
				case $.PageUp: return e.preventDefault(), e.stopPropagation(), a.goToItem(zx.First);
				case $.End:
				case $.PageDown: return e.preventDefault(), e.stopPropagation(), a.goToItem(zx.Last);
				case $.Escape:
					e.preventDefault(), e.stopPropagation(), a.closeMenu(), Ir(() => Q(a.buttonRef)?.focus({ preventScroll: !0 }));
					break;
				case $.Tab:
					e.preventDefault(), e.stopPropagation(), a.closeMenu(), Ir(() => px(Q(a.buttonRef), e.shiftKey ? tx.Previous : tx.Next));
					break;
				default:
					e.key.length === 1 && (a.search(e.key), o.value = setTimeout(() => a.clearSearch(), 350));
					break;
			}
		}
		function c(e) {
			switch (e.key) {
				case $.Space:
					e.preventDefault();
					break;
			}
		}
		let l = Ix(), u = ss(() => l === null ? a.menuState.value === 0 : (l.value & Fx.Open) === Fx.Open);
		return () => {
			var r;
			let o = { open: a.menuState.value === 0 }, { ...l } = e;
			return Ox({
				ourProps: {
					"aria-activedescendant": a.activeItemIndex.value === null || (r = a.items.value[a.activeItemIndex.value]) == null ? void 0 : r.id,
					"aria-labelledby": Q(a.buttonRef)?.id,
					id: i,
					onKeydown: s,
					onKeyup: c,
					role: "menu",
					tabIndex: 0,
					ref: a.itemsRef
				},
				theirProps: l,
				slot: o,
				attrs: t,
				slots: n,
				features: Ex.RenderStrategy | Ex.Static,
				visible: u.value,
				name: "MenuItems"
			});
		};
	}
}), $x = /* @__PURE__ */ Si({
	name: "MenuItem",
	inheritAttrs: !1,
	props: {
		as: {
			type: [Object, String],
			default: "template"
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(e, { slots: t, attrs: n, expose: r }) {
		let i = e.id ?? `headlessui-menu-item-${qb()}`, a = Yx("MenuItem"), o = A(null);
		r({
			el: o,
			$el: o
		});
		let s = ss(() => a.activeItemIndex.value === null ? !1 : a.items.value[a.activeItemIndex.value].id === i), c = Wx(o), l = ss(() => ({
			disabled: e.disabled,
			get textValue() {
				return c();
			},
			domRef: o
		}));
		Ri(() => a.registerItem(i, l)), Hi(() => a.unregisterItem(i)), ei(() => {
			a.menuState.value === 0 && s.value && a.activationTrigger.value !== 0 && Ir(() => {
				var e;
				return ((e = Q(o))?.scrollIntoView)?.call(e, { block: "nearest" });
			});
		});
		function u(t) {
			if (e.disabled) return t.preventDefault();
			a.closeMenu(), sx(Q(a.buttonRef));
		}
		function d() {
			if (e.disabled) return a.goToItem(zx.Nothing);
			a.goToItem(zx.Specific, i);
		}
		let f = wx();
		function p(e) {
			f.update(e);
		}
		function m(t) {
			f.wasMoved(t) && (e.disabled || s.value || a.goToItem(zx.Specific, i, 0));
		}
		function h(t) {
			f.wasMoved(t) && (e.disabled || s.value && a.goToItem(zx.Nothing));
		}
		return () => {
			let { disabled: r, ...c } = e, l = {
				active: s.value,
				disabled: r,
				close: a.closeMenu
			};
			return Ox({
				ourProps: {
					id: i,
					ref: o,
					role: "menuitem",
					tabIndex: r === !0 ? void 0 : -1,
					"aria-disabled": r === !0 ? !0 : void 0,
					onClick: u,
					onFocus: d,
					onPointerenter: p,
					onMouseenter: p,
					onPointermove: m,
					onMousemove: m,
					onPointerleave: h,
					onMouseleave: h
				},
				theirProps: {
					...n,
					...c
				},
				slot: l,
				attrs: n,
				slots: t,
				name: "MenuItem"
			});
		};
	}
}), eS = ["innerHTML"], tS = "typo3-backend-icon", nS = /* @__PURE__ */ Si({
	__name: "Icon",
	props: {
		icon: {},
		size: { default: "16px" }
	},
	setup(e) {
		let t = e, n = {
			bold: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-bold-icon lucide-bold\"><path d=\"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8\"/></svg>",
			redo: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-redo2-icon lucide-redo-2\"><path d=\"m15 14 5-5-5-5\"/><path d=\"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13\"/></svg>",
			undo: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-undo2-icon lucide-undo-2\"><path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11\"/></svg>",
			source: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-code-xml-icon lucide-code-xml\"><path d=\"m18 16 4-4-4-4\"/><path d=\"m6 8-4 4 4 4\"/><path d=\"m14.5 4-5 16\"/></svg>",
			underline: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-underline-icon lucide-underline\"><path d=\"M6 4v6a6 6 0 0 0 12 0V4\"/><line x1=\"4\" x2=\"20\" y1=\"20\" y2=\"20\"/></svg>",
			strike: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-strikethrough-icon lucide-strikethrough\"><path d=\"M16 4H9a3 3 0 0 0-2.83 4\"/><path d=\"M14 12a4 4 0 0 1 0 8H6\"/><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/></svg>",
			superscript: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-superscript-icon lucide-superscript\"><path d=\"m4 19 8-8\"/><path d=\"m12 19-8-8\"/><path d=\"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06\"/></svg>",
			subscript: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-subscript-icon lucide-subscript\"><path d=\"m4 5 8 8\"/><path d=\"m12 5-8 8\"/><path d=\"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07\"/></svg>",
			blockquote: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-text-quote-icon lucide-text-quote\"><path d=\"M17 5H3\"/><path d=\"M21 12H8\"/><path d=\"M21 19H8\"/><path d=\"M3 12v7\"/></svg>",
			"chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down-icon lucide-chevron-down\"><path d=\"m6 9 6 6 6-6\"/></svg>",
			styles: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-paintbrush-vertical-icon lucide-paintbrush-vertical\"><path d=\"M10 2v2\"/><path d=\"M14 2v4\"/><path d=\"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z\"/><path d=\"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1\"/></svg>",
			italic: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-italic-icon lucide-italic\"><line x1=\"19\" x2=\"10\" y1=\"4\" y2=\"4\"/><line x1=\"14\" x2=\"5\" y1=\"20\" y2=\"20\"/><line x1=\"15\" x2=\"9\" y1=\"4\" y2=\"20\"/></svg>",
			link: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-link-icon lucide-link\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/></svg>",
			"list-bullet": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-list-icon lucide-list\"><path d=\"M3 5h.01\"/><path d=\"M3 12h.01\"/><path d=\"M3 19h.01\"/><path d=\"M8 5h13\"/><path d=\"M8 12h13\"/><path d=\"M8 19h13\"/></svg>",
			"list-ordered": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-list-ordered-icon lucide-list-ordered\"><path d=\"M11 5h10\"/><path d=\"M11 12h10\"/><path d=\"M11 19h10\"/><path d=\"M4 4h1v5\"/><path d=\"M4 9h2\"/><path d=\"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02\"/></svg>",
			"justify-left": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-align-left\"><line x1=\"21\" x2=\"3\" y1=\"6\" y2=\"6\"/><line x1=\"15\" x2=\"3\" y1=\"12\" y2=\"12\"/><line x1=\"17\" x2=\"3\" y1=\"18\" y2=\"18\"/></svg>",
			"justify-center": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-align-center\"><line x1=\"21\" x2=\"3\" y1=\"6\" y2=\"6\"/><line x1=\"17\" x2=\"7\" y1=\"12\" y2=\"12\"/><line x1=\"19\" x2=\"5\" y1=\"18\" y2=\"18\"/></svg>",
			"justify-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-align-right\"><line x1=\"21\" x2=\"3\" y1=\"6\" y2=\"6\"/><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\"/><line x1=\"21\" x2=\"7\" y1=\"18\" y2=\"18\"/></svg>",
			heading: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading-icon lucide-heading\"><path d=\"M6 12h12\"/><path d=\"M6 20V4\"/><path d=\"M18 20V4\"/></svg>",
			"heading-1": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading1-icon lucide-heading-1\"><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"m17 12 3-2v8\"/></svg>",
			"heading-2": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading2-icon lucide-heading-2\"><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1\"/></svg>",
			"heading-3": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading3-icon lucide-heading-3\"><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2\"/><path d=\"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2\"/></svg>",
			"heading-4": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading4-icon lucide-heading-4\"><path d=\"M12 18V6\"/><path d=\"M17 10v3a1 1 0 0 0 1 1h3\"/><path d=\"M21 10v8\"/><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/></svg>",
			"heading-5": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading5-icon lucide-heading-5\"><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M17 13v-3h4\"/><path d=\"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17\"/></svg>",
			"heading-6": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heading6-icon lucide-heading-6\"><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><circle cx=\"19\" cy=\"16\" r=\"2\"/><path d=\"M20 10c-2 2-3 3.5-3 6\"/></svg>",
			table: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-table-icon lucide-table\"><path d=\"M12 3v18\"/><path d=\"M3 12h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></svg>",
			"table-row-add-above": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 21h14c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2m16-6H3m9-9V2M9.995 4.005h4\"/></svg>",
			"table-row-add-below": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 256 256\"><path d=\"M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z\"></path></svg>",
			"table-row-delete": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 256 256\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 100L156 156M156 100L100 156M37.0909 28H218.909C223.93 28 228 31.5817 228 36V60C228 64.4183 223.93 68 218.909 68H37.0909C32.0701 68 28 64.4183 28 60V36C28 31.5817 32.0701 28 37.0909 28ZM37.0909 188H218.909C223.93 188 228 191.582 228 196V220C228 224.418 223.93 228 218.909 228H37.0909C32.0701 228 28 224.418 28 220V196C28 191.582 32.0701 188 37.0909 188Z\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
			"table-column-add-before": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 21h14c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2m16-6H3m9-9V2M9.995 4.005h4\"/></svg>",
			"table-column-add-after": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" viewBox=\"0 0 256 256\"><path d=\"M80,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V48A16,16,0,0,0,80,32Zm0,176H56V48H80ZM152,32H128a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,152,32Zm0,176H128V48h24Zm96-80a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V136H192a8,8,0,0,1,0-16h16V104a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,128Z\"></path></svg>",
			"table-column-delete": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 256 256\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M156 100L100 156M156 156L100 100M228 37.0909L228 218.909C228 223.93 224.418 228 220 228L196 228C191.582 228 188 223.93 188 218.909L188 37.0909C188 32.0701 191.582 28 196 28L220 28C224.418 28 228 32.0701 228 37.0909ZM68 37.0909L68 218.909C68 223.93 64.4183 228 60 228L36 228C31.5817 228 28 223.93 28 218.909L28 37.0909C28 32.0701 31.5817 28 36 28L60 28C64.4183 28 68 32.0701 68 37.0909Z\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
			"table-merge-cells": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-table-cells-merge-icon lucide-table-cells-merge\"><path d=\"M12 21v-6\"/><path d=\"M12 9V3\"/><path d=\"M3 15h18\"/><path d=\"M3 9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></svg>",
			"table-split-cell": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-table-columns-split-icon lucide-table-columns-split\"><path d=\"M14 14v2\"/><path d=\"M14 20v2\"/><path d=\"M14 2v2\"/><path d=\"M14 8v2\"/><path d=\"M2 15h8\"/><path d=\"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2\"/><path d=\"M2 9h8\"/><path d=\"M22 15h-4\"/><path d=\"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2\"/><path d=\"M22 9h-4\"/><path d=\"M5 3v18\"/></svg>",
			"table-delete": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-grid2x2-x-icon lucide-grid-2x2-x\"><path d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3\"/><path d=\"m16 16 5 5\"/><path d=\"m16 21 5-5\"/></svg>",
			"table-header-row": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sheet-icon lucide-sheet\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><line x1=\"3\" x2=\"21\" y1=\"9\" y2=\"9\"/><line x1=\"3\" x2=\"21\" y1=\"15\" y2=\"15\"/><line x1=\"9\" x2=\"9\" y1=\"9\" y2=\"21\"/><line x1=\"15\" x2=\"15\" y1=\"9\" y2=\"21\"/></svg>",
			"table-header-column": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2m6 16V3m6 18V3M9 15h12M9 9h12\"/></svg>"
		}, r = ss(() => n[t.icon] || "");
		return (e, n) => r.value ? (L(), R("span", {
			key: 0,
			class: "icon-wrapper",
			style: Ee({
				width: t.size,
				height: t.size
			}),
			innerHTML: r.value
		}, null, 12, eS)) : (L(), Co(Yi(tS), {
			key: 1,
			identifier: t.icon,
			size: "small",
			style: Ee({
				width: t.size,
				height: t.size
			})
		}, null, 8, ["identifier", "style"]));
	}
}), rS = { class: "tiptap-sr-only" }, iS = ["onClick"], aS = /* @__PURE__ */ Si({
	__name: "Dropdown",
	props: {
		label: {},
		iconIdentifier: {},
		editorDomNode: {},
		items: {}
	},
	emits: ["open", "close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = A(null), a = A(null), o = A("not-calculated"), s = ss(() => n.items.some((e) => !e.isDisabled)), c = ss(() => n.items.some((e) => e.isActive));
		function l() {
			if (!a.value) return "bottom-left";
			let e = n.editorDomNode.getBoundingClientRect();
			return a.value.$el.getBoundingClientRect().left - e.left > 200 ? "bottom-right" : "bottom-left";
		}
		Ri(() => {
			o.value = l();
		});
		function u(e) {
			r(e === "open" ? "open" : "close");
		}
		return (t, n) => (L(), Co(w(Xx), {
			as: "div",
			class: "tiptap-dropdown"
		}, {
			default: qr(() => [z(w(Zx), {
				ref_key: "dropdownButtonRef",
				ref: a,
				class: xe(["tiptap-dropdown__button", { "tiptap-dropdown__button--active": c.value }]),
				disabled: !s.value
			}, {
				default: qr(() => [
					Oo("span", rS, se(e.label), 1),
					z(nS, {
						icon: e.iconIdentifier,
						size: "16px"
					}, null, 8, ["icon"]),
					n[2] ||= Oo("svg", {
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
					}, [Oo("path", { d: "m6 9 6 6 6-6" })], -1)
				]),
				_: 1
			}, 8, ["class", "disabled"]), z(Cs, {
				"enter-active-class": "transition-enter-active",
				"enter-from-class": "transition-enter-from",
				"enter-to-class": "transition-enter-to",
				"leave-active-class": "transition-leave-active",
				"leave-from-class": "transition-leave-from",
				"leave-to-class": "transition-leave-to",
				onAfterLeave: n[0] ||= () => u("close"),
				onAfterEnter: n[1] ||= () => u("open")
			}, {
				default: qr(() => [z(w(Qx), {
					ref_key: "dropdownContentRef",
					ref: i,
					class: xe(["tiptap-dropdown__content", {
						"tiptap-dropdown__content--bottom-left": o.value === "bottom-left",
						"tiptap-dropdown__content--bottom-right": o.value === "bottom-right"
					}])
				}, {
					default: qr(() => [(L(!0), R(F, null, Qi(e.items, (e, t) => (L(), Co(w($x), {
						key: `item-${t}`,
						as: "template"
					}, {
						default: qr(() => [Oo("button", {
							class: xe(["tiptap-dropdown__content-button", { "tiptap-dropdown__content-button--active": e.isActive }]),
							onClick: e.action
						}, [e.icon ? (L(), Co(nS, {
							key: 0,
							icon: e.icon,
							size: "16px"
						}, null, 8, ["icon"])) : No("", !0), Oo("span", null, se(e.label), 1)], 10, iS)]),
						_: 2
					}, 1024))), 128))]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			})]),
			_: 1
		}));
	}
}), oS = /* @__PURE__ */ Si({
	__name: "Stylesheets",
	props: { stylesheets: {} },
	setup(e) {
		let t = e, n = A(null), r = A([]), i = A([]);
		ti(() => t.stylesheets, async (e) => {
			await Ir(), await Promise.all(e.map(async (e) => {
				r.value.includes(e) || await a(e);
			}));
		}, { immediate: !0 });
		async function a(e) {
			if (!n.value) throw Error("Component ref not available");
			let t = n.value.getRootNode();
			if (!t || t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) throw Error("Shadow root not found or invalid");
			let a = await fetch(be(e));
			if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
			let o = await a.text(), s = document.createElement("style");
			s.textContent = `.tiptap { ${o} }`, s.dataset.source = e, t.appendChild(s), i.value.push(s), r.value.push(e);
		}
		return Hi(() => {
			i.value.forEach((e) => {
				e.parentNode && e.parentNode.removeChild(e);
			});
		}), (e, t) => (L(), R("div", {
			ref_key: "componentRef",
			ref: n
		}, null, 512));
	}
}), sS = a({
	id: t(),
	contentCss: n(t()).optional(),
	plugins: n(a({
		path: t(),
		config: s(t(), r()).optional()
	})).optional(),
	enableContentDragAndDrop: e().default(!1),
	linkBrowserUrl: t(),
	enableDebugMode: e().default(!1)
}), cS = {
	key: 0,
	class: "tiptap-container"
}, lS = {
	key: 0,
	class: "tiptap-toolbar"
}, uS = {
	key: 0,
	class: "tiptap-toolbar__group"
}, dS = { key: 0 }, fS = [
	"title",
	"disabled",
	"onClick"
], pS = { class: "tiptap-sr-only" }, mS = { key: 1 }, hS = { class: "tiptap-bubble-menu" }, gS = {
	key: 0,
	class: "tiptap-toolbar__group"
}, _S = { key: 0 }, vS = [
	"title",
	"disabled",
	"onClick"
], yS = { class: "tiptap-sr-only" }, bS = { key: 5 }, xS = /* @__PURE__ */ _c(/* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ Si({
	__name: "TipTapEditor.ce",
	props: { options: { type: String } },
	setup(e) {
		let t = e, n = g(), r = _(n), i = A(), a = A(), o = A(), s = A(), l = A(), u = A(!1), d = A(0), f = A(!1), p = A(!1), m = ss(() => !a.value || u.value || f.value ? !1 : a.value.bubbleMenu.some((e) => e.commands.length > 0)), h = ss(() => r.filter((e) => e.element.toLowerCase() === l.value?.tagName.toLowerCase()));
		function g() {
			try {
				let e = JSON.parse(t.options || "{}"), n = sS.safeParse(e);
				if (!n.success) throw Error(`Invalid options: ${JSON.stringify(n.error.issues)}`);
				return n.data;
			} catch (e) {
				throw Error(`Failed to parse options: ${e.message}`);
			}
		}
		function _(e) {
			let t = e.plugins?.find((e) => e.path.endsWith("styles.js") || e.path.endsWith("styles.ts"));
			if (!t) return [];
			let n = ke.safeParse(t.config);
			if (!n.success) throw Error(`Invalid styles plugin config: ${JSON.stringify(n.error.issues)}`);
			return n.data.styles;
		}
		function v(e) {
			return e.replace(/(\s*<p>(\s|&nbsp;)*<\/p>)+\s*$/, "");
		}
		function y() {
			if (!i.value) throw Error("Editor is not initialized yet.");
			if (!a.value) throw Error("Configuration is not initialized yet.");
			let e = [];
			a.value.toolbar.forEach((t) => {
				t.commands.forEach((t) => {
					t.hooks && t.hooks.onEditorMounted && !e.includes(t.id) && (t.hooks.onEditorMounted({
						editor: i.value,
						linkBrowserUrl: n.linkBrowserUrl
					}), e.push(t.id));
				});
			}), a.value.bubbleMenu.forEach((t) => {
				t.commands.forEach((t) => {
					t.hooks && t.hooks.onEditorMounted && !e.includes(t.id) && (t.hooks.onEditorMounted({
						editor: i.value,
						linkBrowserUrl: n.linkBrowserUrl
					}), e.push(t.id));
				});
			});
		}
		async function b() {
			return Promise.all(n.plugins?.map(async (e) => {
				let t = await import(
					/* @vite-ignore */
					be(e.path)
);
				if (!t.default || typeof t.default != "function") throw Error(`Plugin ${e.path} does not have a default export or it is not a function.`);
				return t.default(e.config);
			}) ?? []);
		}
		function x(e) {
			return u.value && e.id !== "source" ? !0 : e?.status?.isDisabled?.({
				editor: i.value,
				linkBrowserUrl: n.linkBrowserUrl
			}) ?? !1;
		}
		function S(e) {
			return e.status && e.status.isVisible ? e.status.isVisible({
				editor: i.value,
				linkBrowserUrl: n.linkBrowserUrl
			}) : !0;
		}
		return Ri(async () => {
			a.value = c(await b()), await Ir();
			let e = o.value?.assignedElements()[0];
			if (!e || !(e instanceof HTMLTextAreaElement)) throw Error("No textarea found in slot \"content\".");
			s.value = e;
			let t = new Event("change", {
				bubbles: !0,
				cancelable: !0
			});
			i.value = new Ib({
				content: s.value.value,
				extensions: [
					Pb.configure({
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
					gb,
					...a.value?.extensions ?? []
				],
				onUpdate: () => {
					!i.value || !s.value || (u.value = wr(i.value), s.value.value = u.value ? i.value.getText() : v(i.value.getHTML()), s.value.dispatchEvent(t));
				}
			}), i.value.on("parentNodeChanged", (e) => {
				e.tagName === "doc" ? l.value = void 0 : l.value = e;
			});
			let n = i.value?.extensionManager?.extensions.find((e) => e.name === "characterCount");
			n && n.options.limit && (p.value = { characterLimit: n.options.limit }), y();
		}), Hi(() => i.value?.destroy()), (e, t) => (L(), R(F, null, [i.value ? (L(), R("div", cS, [
			a.value.toolbar.some((e) => e.commands.length > 0) ? (L(), R("nav", lS, [(L(!0), R(F, null, Qi(a.value.toolbar, (e, t) => (L(), R(F, { key: `tiptap-command-group-${t}` }, [e.commands.length > 0 ? (L(), R("ol", uS, [e.dropdown ? (L(), R("li", dS, [(L(), Co(aS, {
				key: u.value,
				label: e.dropdown.label,
				"editor-dom-node": i.value.view.dom,
				"icon-identifier": e.dropdown.iconIdentifier,
				items: e.commands.filter(S).map((e) => ({
					label: e.label,
					isActive: e?.status?.isActive?.({
						editor: i.value,
						linkBrowserUrl: w(n).linkBrowserUrl
					}) ?? !1,
					isDisabled: x(e),
					icon: e.iconIdentifier,
					action: () => e.onExecute({
						editor: i.value,
						linkBrowserUrl: w(n).linkBrowserUrl
					})
				}))
			}, null, 8, [
				"label",
				"editor-dom-node",
				"icon-identifier",
				"items"
			]))])) : (L(!0), R(F, { key: 1 }, Qi(e.commands, (t) => (L(), R("li", { key: `tiptap-group-${e.id}-command-${t.id}` }, [S(t) ? (L(), R("button", {
				key: u.value,
				title: t.label,
				class: xe(["tiptap-toolbar__group-command", { "is-active": t?.status?.isActive?.({
					editor: i.value,
					linkBrowserUrl: w(n).linkBrowserUrl
				}) ?? !1 }]),
				disabled: x(t),
				onClick: (e) => t.onExecute({
					editor: i.value,
					linkBrowserUrl: w(n).linkBrowserUrl
				})
			}, [Oo("span", pS, se(t.label), 1), z(nS, {
				icon: t.iconIdentifier,
				size: "16px"
			}, null, 8, ["icon"])], 10, fS)) : No("", !0)]))), 128))])) : No("", !0)], 64))), 128))])) : No("", !0),
			a.value && m.value ? (L(), R("nav", mS, [z(w(Vb), {
				editor: i.value,
				options: { onHide: () => d.value += 1 }
			}, {
				default: qr(() => [Oo("div", hS, [(L(!0), R(F, null, Qi(a.value.bubbleMenu, (e, t) => (L(), R(F, { key: `tiptap-command-group-${t}` }, [e.commands.some((e) => S(e)) ? (L(), R("ol", gS, [e.dropdown ? (L(), R("li", _S, [(L(), Co(aS, {
					key: `${u.value}-${d.value}`,
					label: e.dropdown.label,
					"icon-identifier": e.dropdown.iconIdentifier,
					"editor-dom-node": i.value.view.dom,
					items: e.commands.filter(S).map((e) => ({
						label: e.label,
						isActive: e?.status?.isActive?.({
							editor: i.value,
							linkBrowserUrl: w(n).linkBrowserUrl
						}) ?? !1,
						isDisabled: x(e),
						icon: e.iconIdentifier,
						action: () => e.onExecute({
							editor: i.value,
							linkBrowserUrl: w(n).linkBrowserUrl
						})
					}))
				}, null, 8, [
					"label",
					"icon-identifier",
					"editor-dom-node",
					"items"
				]))])) : (L(!0), R(F, { key: 1 }, Qi(e.commands, (t) => Jr((L(), R("li", { key: `tiptap-group-${e.id}-command-${t.id}` }, [(L(), R("button", {
					key: u.value,
					title: t.label,
					class: xe(["tiptap-toolbar__group-command", { "is-active": t?.status?.isActive?.({
						editor: i.value,
						linkBrowserUrl: w(n).linkBrowserUrl
					}) ?? !1 }]),
					disabled: x(t),
					onClick: (e) => t.onExecute({
						editor: i.value,
						linkBrowserUrl: w(n).linkBrowserUrl
					})
				}, [Oo("span", yS, se(t.label), 1), z(nS, {
					icon: t.iconIdentifier,
					size: "16px"
				}, null, 8, ["icon"])], 10, vS))])), [[Vs, S(t)]])), 128))])) : No("", !0)], 64))), 128))])]),
				_: 1
			}, 8, ["editor", "options"])])) : No("", !0),
			w(n).enableContentDragAndDrop ? (L(), Co(w(qy), {
				key: 2,
				editor: i.value
			}, {
				default: qr(() => [...t[0] ||= [Oo("div", { class: "custom-drag-handle" }, null, -1)]]),
				_: 1
			}, 8, ["editor"])) : No("", !0),
			z(w(Lb), {
				editor: i.value,
				class: xe([{ "pl-9": w(n).enableContentDragAndDrop }, "tiptap-editor-content"])
			}, null, 8, ["editor", "class"]),
			p.value ? (L(), Co(Wb, {
				key: 3,
				editor: i.value,
				limit: p.value.characterLimit
			}, null, 8, ["editor", "limit"])) : No("", !0),
			w(n) && w(n).contentCss ? (L(), Co(oS, {
				key: 4,
				stylesheets: w(n).contentCss
			}, null, 8, ["stylesheets"])) : No("", !0),
			w(n).enableDebugMode ? (L(), R("pre", bS, se(h.value), 1)) : No("", !0)
		])) : No("", !0), $i(e.$slots, "default", {
			ref_key: "slotRef",
			ref: o
		})], 64));
	}
}), [["styles", [".text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.tiptap-container{--tiptap-color-primary:light-dark(#2a6df4,#5a8ef6);--tiptap-color-neutral-white:#fff;--tiptap-color-neutral-10:#1a1a1a;--tiptap-color-neutral-20:#333;--tiptap-color-neutral-40:#666;--tiptap-color-neutral-80:#ccc;--tiptap-color-neutral-90:#e6e6e6;--tiptap-color-surface:light-dark(var(--tiptap-color-neutral-white),var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight:light-dark(var(--tiptap-color-neutral-90),var(--tiptap-color-neutral-20));--tiptap-color-border:var(--typo3-input-border-color);--tiptap-color-text-subtle:light-dark(var(--tiptap-color-neutral-40),var(--tiptap-color-neutral-80));--tiptap-border-width:var(--typo3-input-border-width);--tiptap-border-radius:var(--typo3-input-border-radius);--tiptap-border-radius-inner-gap:.25rem;--tiptap-border-inner-radius:calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap:.25rem;--tiptap-box-shadow:0 .1rem .3rem #0000001a;border:var(--tiptap-border-width) solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){color:inherit;background-color:#0000;border:none;padding:0}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(#000,#fff)}.tiptap{outline:none;min-block-size:20rem;padding:3rem}.tiptap :first-child{margin-block-start:0}.tiptap-editor-content{position:relative;overflow:hidden}.tiptap-toolbar{padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-border);flex-wrap:wrap;display:flex}.tiptap-toolbar__group{gap:var(--tiptap-toolbar-gap);flex-wrap:wrap;margin:0;padding:0;list-style:none;display:flex}.tiptap-toolbar__group:not(:last-child){border-inline-end:1px solid var(--tiptap-color-border);margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap)}.tiptap-toolbar__group-command{border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1;block-size:100%;padding:.5rem;transition:background-color .15s,color .15s,transform .15s}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl, var(--tiptap-color-surface-highlight) 50%, transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{block-size:100%;inline-size:100%}.tiptap-bubble-menu{padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap);margin-inline:1rem;display:flex}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation:0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation:180deg}.tiptap-dropdown__button{cursor:pointer;background-color:#0000;border:none;justify-content:space-between;align-items:center;gap:.25rem;padding:.5rem;transition:color .2s ease-in-out,transform .1s ease-in-out;display:inline-flex}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size:.9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:50%;transition:transform .2s ease-in-out}.tiptap-dropdown__content{background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10;padding-block:.25rem;display:grid;position:absolute}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{transform-origin:0 0;inset-inline-start:0}.tiptap-dropdown__content--bottom-right{transform-origin:100% 0;inset-inline-end:0}.tiptap-dropdown__content-button{cursor:pointer;align-items:center;gap:.5rem;padding:.5rem 1rem;display:flex}.tiptap-dropdown__content-button>*{text-wrap:nowrap;flex-shrink:0}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection ::selection{background:0 0}.ProseMirror-noderangeselection *{caret-color:#0000}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{pointer-events:none;z-index:-1;content:\"\";background-color:#70cff850;border-radius:.2rem;position:absolute;inset:-.25rem}.custom-drag-handle:after{content:\"⠿\";cursor:grab;width:1rem;height:1.25rem;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;justify-content:center;align-items:center;margin-inline-end:.5rem;padding:.25rem .1rem;font-weight:700;transition:background-color .2s ease-in-out;display:flex}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:1.25rem}.transition-dropdown{--scale:1;--translate-y:0;--opacity:1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale:.95;--opacity:1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale:1;--opacity:1}.transition-dropdown-leave-to{--scale:.95;--opacity:0}.tiptap-character-count{color:var(--tiptap-color-text-subtle);align-items:center;gap:.5rem;margin:1.25rem .75rem;font-size:.75rem;display:flex}.tiptap-character-count svg{color:var(--token-color-orange-40)}.tiptap-character-count--warning,.tiptap-character-count--warning svg{color:var(--bs-danger)}table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}table td,table th{border:var(--tiptap-border-width) solid var(--tiptap-color-border);box-sizing:border-box;vertical-align:top;min-width:1em;padding:6px 8px;position:relative}table td>*,table th>*{margin-bottom:0}table th{background-color:var(--tiptap-color-surface-highlight);text-align:left;font-weight:700}table .selectedCell:after{background:var(--typo3-surface-container-info);content:\"\";pointer-events:none;z-index:2;position:absolute;inset:0}table .column-resize-handle{background-color:var(--typo3-surface-container-info);pointer-events:none;width:4px;position:absolute;top:0;bottom:-2px;right:-2px}.tableWrapper{margin:1.5rem 0;overflow-x:auto}.tiptap.resize-cursor{cursor:ew-resize;cursor:col-resize}"]]]));
customElements.define("editor-tiptap", xS);
//#endregion
export { Un as CommandManager, En as Editor, Ln as Extendable, dn as Extension, Ut as Fragment, kn as InputRule, Bn as MappablePosition, Yt as Mark, bn as MarkView, Kn as Node, Qt as NodePos, nn as NodeView, Mn as PasteRule, Cn as ResizableNodeView, cn as ResizableNodeview, on as Tracker, Bt as callOrReturn, Yn as canInsertNode, ir as cancelPositionCheck, Kt as combineTransactionSteps, tr as commands, St as createAtomBlockMarkdownSpec, Ue as createBlockMarkdownSpec, Qn as createChainableState, Tt as createDocument, Ht as createElement, Ht as h, Je as createInlineMarkdownSpec, Ke as createMappablePosition, mt as createNodeFromContent, _n as createStyleTag, Re as decodeHtmlEntities, mn as defaultBlockAt, i as defineTipTapPlugin, ut as deleteProps, ft as elementFromString, gt as encodeHtmlEntities, Xe as escapeForRegEx, nt as extensions, ct as findChildren, bt as findChildrenInRange, sr as findDuplicates, Ve as findParentNode, At as findParentNodeClosestToPos, et as flattenExtensions, Ot as fromString, Mt as generateHTML, Qe as generateJSON, ot as generateText, Fn as getAttributes, it as getAttributesFromExtensions, It as getChangedRanges, Pt as getDebugJSON, Rt as getExtensionField, vt as getHTMLFromFragment, Ie as getMarkAttributes, tn as getMarkRange, Gn as getMarkType, On as getMarksBetween, zn as getNodeAtPosition, pn as getNodeAttributes, Gt as getNodeType, jn as getRenderedAttributes, Hn as getSchema, Zt as getSchemaByResolvedExtensions, Sn as getSchemaTypeByName, Jn as getSchemaTypeNameByName, $t as getSplittedAttributes, an as getText, Pn as getTextBetween, Tn as getTextContentFromNodes, un as getTextSerializersFromSchema, sn as getUpdatedPosition, Zn as injectExtensionAttributesToParseRule, or as inputRulesPlugin, Jt as isActive, rr as isAndroid, wt as isAtEndOfNode, Ge as isAtStartOfNode, er as isEmptyObject, Dt as isExtensionRulesEnabled, Ye as isFirefox, qe as isFunction, ht as isList, yn as isMacOS, Be as isMarkActive, gn as isNodeActive, dt as isNodeEmpty, pt as isNodeSelection, _t as isNodeViewSelected, Ze as isNumber, rt as isPlainObject, lt as isRegExp, xt as isSafari, cr as isString, He as isTextSelection, jt as isiOS, tt as markInputRule, kt as markPasteRule, Nt as markdown, $e as mergeAttributes, st as mergeDeep, In as minMax, at as nodeInputRule, Lt as nodePasteRule, Ft as objectIncludes, zt as parseAttributes, yt as parseIndentedBlocks, o as parseTipTapPluginYamlConfiguration, Le as pasteRulesPlugin, en as posToDOMRect, Wn as removeDuplicates, Dn as renderNestedMarkdownContent, Rn as resolveExtensions, fn as resolveFocusPosition, Wt as rewriteUnknownContent, An as schedulePositionCheck, Vn as selectionToInsertionEnd, Xt as serializeAttributes, xn as sortExtensions, qn as splitExtensions, N as textInputRule, rn as textPasteRule, Nn as textblockTypeInputRule, wn as updateMarkViewAttributes, ln as wrappingInputRule };
