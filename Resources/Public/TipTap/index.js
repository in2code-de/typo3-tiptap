import { a as e, c as t, i as n, l as r, n as i, o as a, r as o, s, t as c } from "./configuration-BT9xaJ2A.js";
import { $ as l, A as u, B as d, C as f, D as p, E as m, F as h, G as g, H as _, I as v, J as y, K as b, L as x, M as S, N as C, O as w, P as ee, Q as te, R as T, S as ne, T as re, U as ie, V as E, W as D, X as O, Y as ae, Z as oe, _ as se, a as ce, at as le, b as ue, c as de, d as fe, et as k, f as pe, g as me, h as A, i as he, it as ge, j as _e, k as j, l as ve, m as ye, n as be, nt as xe, o as Se, p as Ce, q as we, r as Te, rt as Ee, s as De, t as Oe, tt as ke, u as Ae, v as je, w as Me, x as Ne, y as Pe, z as Fe } from "./styles-DnnnwRYO.js";
import { $ as Ie, $t as Le, A as Re, An as ze, At as Be, B as Ve, Bt as He, C as Ue, Cn as We, Ct as Ge, D as Ke, Dt as qe, E as Je, Et as Ye, F as Xe, Ft as Ze, G as Qe, Gt as $e, H as et, Ht as tt, I as nt, It as rt, J as it, Jt as at, K as ot, Kt as st, L as ct, Lt as lt, M as ut, Mt as dt, N as ft, Nt as pt, O as mt, Ot as ht, P as gt, Pt as _t, Q as vt, Qt as yt, R as bt, Rt as xt, S as St, Sn as Ct, St as wt, T as Tt, Tn as Et, Tt as Dt, U as Ot, Ut as kt, V as At, Vt as jt, W as Mt, Wt as Nt, X as Pt, Xt as Ft, Y as It, Yt as Lt, Z as Rt, Zt as zt, _ as Bt, _n as Vt, _t as Ht, a as Ut, an as Wt, at as Gt, b as Kt, bn as qt, bt as Jt, c as Yt, cn as Xt, ct as Zt, d as Qt, dn as M, dt as $t, en, et as tn, f as nn, fn as rn, ft as an, g as on, gt as sn, h as cn, hn as ln, ht as un, i as dn, in as fn, it as pn, j as mn, jn as hn, jt as gn, k as _n, kn as vn, kt as yn, l as bn, ln as xn, lt as Sn, m as Cn, mn as wn, mt as Tn, n as En, nn as Dn, nt as On, o as kn, on as An, ot as jn, p as Mn, pn as Nn, pt as Pn, q as Fn, qt as In, r as Ln, rn as Rn, rt as zn, s as Bn, sn as Vn, st as Hn, t as Un, tn as Wn, tt as Gn, u as Kn, un as qn, ut as Jn, v as Yn, vn as Xn, vt as Zn, w as Qn, wn as $n, wt as er, x as tr, xn as nr, xt as rr, y as ir, yn as ar, yt as or, z as sr, zt as cr } from "./dist-BppL3qHu.js";
import { t as lr } from "./dist-CqIetMmg.js";
import { t as ur } from "./dist-BpFqfqnc.js";
import { t as dr } from "./dist-23jRIzE5.js";
import { t as fr } from "./dist-D5bVvPqr.js";
import { t as pr } from "./dist-91yalACB.js";
import { i as mr, n as hr, r as gr, t as _r } from "./dist-CAgHnqBy.js";
import { t as vr } from "./dist-BWgsjEEi.js";
import { a as yr, i as br, n as xr, r as Sr } from "./dist-BmtwYQ_m.js";
import { t as Cr } from "./tables-NWFOyHuO.js";
import { getEditorSourceViewActiveStatus as wr } from "./plugins/source.js";
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Tr(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Dr(e, t, n);
	}
}
function Er(e, t, n, r) {
	if (_(e)) {
		let i = Tr(e, t, n, r);
		return i && we(i) && i.catch((e) => {
			Dr(e, t, n);
		}), i;
	}
	if (E(e)) {
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
			pe(), Tr(a, null, 10, [
				e,
				i,
				o
			]), me();
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
	E(e) ? jr.push(...e) : Mr && e.id === -1 ? Mr.splice(Nr + 1, 0, e) : e.flags & 1 || (jr.push(e), e.flags |= 1), zr();
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
var N = null, Gr = null;
function Kr(e) {
	let t = N;
	return N = e, Gr = e && e.type.__scopeId || null, t;
}
function qr(e, t = N, n) {
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
	if (N === null) return e;
	let n = is(N), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = j] = t[e];
		i && (_(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Me(a), r.push({
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
		c && (pe(), Er(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), me());
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
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
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
	let { immediate: r, deep: i, flush: a, once: o } = n, s = h({}, n), c = t && r || !t && a !== "post", l;
	if (Yo) {
		if (a === "sync") {
			let e = $r();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = _e, e.resume = _e, e.pause = _e, e;
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
	let f = p(e, t, s);
	return Yo && (l ? l.push(f) : c && f()), f;
}
function ri(e, t, n) {
	let r = this.proxy, i = O(e) ? e.includes(".") ? ii(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
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
			let o = ue(e), { mode: s } = o;
			if (r.isLeaving) return vi(a);
			let c = yi(a);
			if (!c) return vi(a);
			let l = _i(c, o, r, n, (e) => l = e);
			c.type !== F && bi(c, l);
			let u = n.subTree && yi(n.subTree);
			if (u && u.type !== F && !To(u, c) && fi(n).type !== F) {
				let e = _i(u, o, r, n);
				if (bi(u, e), s === "out-in" && c.type !== F) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, vi(a);
				s === "in-out" && c.type !== F ? e.delayLeave = (e, t, n) => {
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
		for (let n of e) if (n.type !== F) {
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
		S(e, t), E(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
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
		if (t & 32 && _(n.default)) return n.default();
	}
}
function bi(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, bi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xi(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === P ? (o.patchFlag & 128 && i++, r = r.concat(xi(o.children, t, s))) : (t || o.type !== F) && r.push(s == null ? o : jo(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function Si(e, t) {
	return _(e) ? h({ name: e.name }, t, { setup: e }) : e;
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
	if (E(e)) {
		e.forEach((e, a) => Di(e, t && (E(t) ? t[a] : t), n, r, i));
		return;
	}
	if (ki(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Di(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? is(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, d = s.refs === j ? s.refs = {} : s.refs, f = s.setupState, p = ue(f), m = f === j ? u : (e) => Ti(d, e) ? !1 : x(p, e), h = (e, t) => !(t && Ti(d, t));
	if (l != null && l !== c) {
		if (Oi(t), O(l)) d[l] = null, m(l) && (f[l] = null);
		else if (ve(l)) {
			let e = t;
			h(l, e.k) && (l.value = null), e.k && (d[e.k] = null);
		}
	}
	if (_(c)) Tr(c, s, 12, [o, d]);
	else {
		let t = O(c), r = ve(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? m(c) ? f[c] : d[c] : h(c) || !e.k ? c.value : d[e.k];
					if (i) E(n) && xe(n, a);
					else if (E(n)) n.includes(a) || n.push(a);
					else if (t) d[c] = [a], m(c) && (f[c] = d[c]);
					else {
						let t = [a];
						h(c, e.k) && (c.value = t), e.k && (d[e.k] = t);
					}
				} else t ? (d[c] = o, m(c) && (f[c] = o)) : r && (h(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
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
v().requestIdleCallback, v().cancelIdleCallback;
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
		xe(r[t], i);
	}, n);
}
function Fi(e, t, n = Ho, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			pe();
			let i = Ko(n), a = Er(t, n, e, r);
			return i(), me(), a;
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
	return O(e) ? Xi(qi, e, !1) || e : e || Ji;
}
function Xi(e, t, n = !0, r = !1) {
	let i = N || Ho;
	if (i) {
		let n = i.type;
		if (e === qi) {
			let e = as(n, !1);
			if (e && (e === t || e === S(t) || e === C(S(t)))) return n;
		}
		let a = Zi(i[e] || n[e], t) || Zi(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Zi(e, t) {
	return e && (e[t] || e[S(t)] || e[C(S(t))]);
}
function Qi(e, t, n, r) {
	let i, a = n && n[r], o = E(e);
	if (o || O(e)) {
		let n = o && De(e), r = !1, s = !1;
		n && (r = !Ae(e), s = de(e), e = je(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? ne(Ne(e[n])) : Ne(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (D(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
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
	if (N.ce || N.parent && ki(N.parent) && N.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), I(), Co(P, null, [R("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), I();
	let o = a && ea(a(n)), s = n.key || o && o.key, c = Co(P, { key: (s && !oe(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function ea(e) {
	return e.some((e) => wo(e) ? !(e.type === F || e.type === P && !ea(e.children)) : !0) ? e : null;
}
var ta = (e) => e ? Jo(e) ? is(e) : ta(e.parent) : null, na = /* @__PURE__ */ h(/* @__PURE__ */ Object.create(null), {
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
}), ra = (e, t) => e !== j && !e.__isScriptSetup && x(e, t), ia = {
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
			else if (i !== j && x(i, t)) return o[t] = 2, i[t];
			else if (x(a, t)) return o[t] = 3, a[t];
			else if (n !== j && x(n, t)) return o[t] = 4, n[t];
			else oa && (o[t] = 0);
		}
		let l = na[t], u, d;
		if (l) return t === "$attrs" && f(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== j && x(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, x(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return ra(i, t) ? (i[t] = n, !0) : r !== j && x(r, t) ? (r[t] = n, !0) : x(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== j && s[0] !== "$" && x(e, s) || ra(t, s) || x(a, s) || x(r, s) || x(na, s) || x(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? x(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function aa(e) {
	return E(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var oa = !0;
function sa(e) {
	let t = da(e), n = e.proxy, r = e.ctx;
	oa = !1, t.beforeCreate && la(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: x, render: S, renderTracked: C, renderTriggered: w, errorCaptured: ee, serverPrefetch: te, expose: T, inheritAttrs: ne, components: re, directives: ie, filters: O } = t;
	if (l && ca(l, r, null), o) for (let e in o) {
		let t = o[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		D(t) && (e.data = ye(t));
	}
	if (oa = !0, a) for (let e in a) {
		let t = a[e], i = z({
			get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : _e,
			set: !_(t) && _(t.set) ? t.set.bind(n) : _e
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
		let e = _(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Xr(t, e[t]);
		});
	}
	u && la(u, e, "c");
	function ae(e, t) {
		E(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ae(Li, d), ae(Ri, f), ae(zi, p), ae(Bi, m), ae(ji, h), ae(Mi, g), ae(Ki, ee), ae(Gi, C), ae(Wi, w), ae(Vi, y), ae(Hi, x), ae(Ui, te), E(T)) if (T.length) {
		let t = e.exposed ||= {};
		T.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	S && e.render === _e && (e.render = S), ne != null && (e.inheritAttrs = ne), re && (e.components = re), ie && (e.directives = ie), te && wi(e);
}
function ca(e, t, n = _e) {
	E(e) && (e = ga(e));
	for (let n in e) {
		let r = e[n], i;
		i = D(r) ? "default" in r ? Zr(r.from || n, r.default, !0) : Zr(r.from || n) : Zr(r), ve(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function la(e, t, n) {
	Er(E(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ua(e, t, n, r) {
	let i = r.includes(".") ? ii(n, r) : () => n[r];
	if (O(e)) {
		let n = t[e];
		_(n) && ti(i, n);
	} else if (_(e)) ti(i, e.bind(n));
	else if (D(e)) if (E(e)) e.forEach((e) => ua(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && ti(i, r, e);
	}
}
function da(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => fa(c, e, o, !0)), fa(c, t, o)), D(t) && a.set(t, c), c;
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
		return h(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ha(e, t) {
	return va(ga(e), ga(t));
}
function ga(e) {
	if (E(e)) {
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
	return e ? h(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ya(e, t) {
	return e ? E(e) && E(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : h(/* @__PURE__ */ Object.create(null), aa(e), aa(t ?? {})) : t;
}
function ba(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = h(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = _a(e[r], t[r]);
	return n;
}
function xa() {
	return {
		app: null,
		config: {
			isNativeTag: u,
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
		_(n) || (n = h({}, n)), r != null && !D(r) && (r = null);
		let i = xa(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Sa++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: cs,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && _(e.install) ? (a.add(e), e.install(c, ...t)) : _(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || R(n, r);
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
var wa = null, Ta = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${S(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function Ea(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || j, i = n, a = t.startsWith("update:"), o = a && Ta(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => O(e) ? e.trim() : e)), o.number && (i = n.map(l)));
	let s, c = r[s = ge(t)] || r[s = ge(S(t))];
	!c && a && (c = r[s = ge(T(t))]), c && Er(c, e, 6, i);
	let u = r[s + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Er(u, e, 6, i);
	}
}
var Da = /* @__PURE__ */ new WeakMap();
function Oa(e, t, n = !1) {
	let r = n ? Da : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Oa(e, t, !0);
			n && (s = !0, h(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (D(e) && r.set(e, null), null) : (E(a) ? a.forEach((e) => o[e] = null) : h(o, a), D(e) && r.set(e, o), o);
}
function ka(e, t) {
	return !e || !g(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), x(e, t[0].toLowerCase() + t.slice(1)) || x(e, T(t)) || x(e, t));
}
function Aa(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = Kr(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Po(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Po(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : ja(s);
		}
	} catch (t) {
		_o.length = 0, Dr(t, e, 1), _ = R(F);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(ie) && (v = Ma(v, a)), y = jo(y, v, !1, !0));
	}
	return n.dirs && (y = jo(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && bi(y, n.transition), _ = y, Kr(g), _;
}
var ja = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || g(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ma = (e, t) => {
	let n = {};
	for (let r in e) (!ie(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
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
	return n === "style" && D(r) && D(i) ? !te(r, i) : r !== i;
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
	n ? e.props = r ? i : se(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Va(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = ue(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ka(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (x(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = S(o);
					i[t] = Ua(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ha(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !x(t, a) && ((r = T(a)) === a || !x(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ua(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !x(t, e)) && (delete a[e], l = !0);
	}
	l && re(e.attrs, "set", "");
}
function Ha(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (y(c)) continue;
		let l = t[c], u;
		i && x(i, u = S(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : ka(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = ue(n), r = s || j;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ua(i, t, s, r[s], e, !x(r, s));
		}
	}
	return o;
}
function Ua(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = x(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ko(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var Wa = /* @__PURE__ */ new WeakMap();
function Ga(e, t, n = !1) {
	let r = n ? Wa : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!_(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = Ga(e, t, !0);
			h(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return D(e) && r.set(e, w), w;
	if (E(a)) for (let e = 0; e < a.length; e++) {
		let t = S(a[e]);
		Ka(t) && (o[t] = j);
	}
	else if (a) for (let e in a) {
		let t = S(e);
		if (Ka(t)) {
			let n = a[e], r = o[t] = E(n) || _(n) ? { type: n } : h({}, n), i = r.type, c = !1, l = !0;
			if (E(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = _(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				} else n === "String" && (l = !1);
			}
			else c = _(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || x(r, "default")) && s.push(t);
		}
	}
	let l = [o, s];
	return D(e) && r.set(e, l), l;
}
function Ka(e) {
	return e[0] !== "$" && !y(e);
}
var qa = (e) => e === "_" || e === "_ctx" || e === "$stable", Ja = (e) => E(e) ? e.map(Po) : [Po(e)], Ya = (e, t, n) => {
	if (t._n) return t;
	let r = qr((...e) => Ja(t(...e)), n);
	return r._c = !1, r;
}, Xa = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (qa(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ya(n, i, r);
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
		e ? (Qa(r, t, n), n && ee(r, "_", e, !0)) : Xa(t, r);
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
	let n = v();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: f, nextSibling: p, setScopeId: m = _e, insertStaticContent: h } = e, g = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !To(e, t) && (r = ye(e), k(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ho:
				_(e, t, n, r);
				break;
			case F:
				b(e, t, n, r);
				break;
			case go:
				e ?? x(t, n, r, o);
				break;
			case P:
				D(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? O(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? Di(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Di(e.ref, null, a, e, !0);
	}, _ = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = p(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = p(e), i(e), e = n;
		i(t);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && ne(e.children, f, null, i, s, io(e, c), l, d), _ && Yr(e, null, i, "created"), T(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !y(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Ro(p, i, e);
		}
		_ && Yr(e, null, i, "beforeMount");
		let v = oo(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && to(() => {
			try {
				p && Ro(p, i, e), v && g.enter(f), _ && Yr(e, null, i, "mounted");
			} finally {}
		}, s);
	}, T = (e, t, n, r, i) => {
		if (n && m(e, n), r) for (let t = 0; t < r.length; t++) m(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || po(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) g(null, e[l] = s ? Fo(e[l]) : Po(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || j, m = t.props || j, h;
		if (n && ao(n, !1), (h = m.onVnodeBeforeUpdate) && Ro(h, n, t, e), f && Yr(t, e, n, "beforeUpdate"), n && ao(n, !0), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? ie(e.dynamicChildren, d, c, n, r, io(t, i), o) : s || le(e, t, c, null, n, r, io(t, i), o, !1), l > 0) {
			if (l & 16) E(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && E(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && to(() => {
			h && Ro(h, n, t, e), f && Yr(t, e, n, "updated");
		}, r);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			g(c, l, c.el && (c.type === P || !To(c, l) || c.shapeFlag & 198) ? f(c.el) : n, null, r, i, a, o, !0);
		}
	}, E = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== j) for (let o in t) !y(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (y(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, D = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && so(e, t, !0)) : le(e, t, n, f, a, o, c, l, u);
	}, O = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : oe(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = Vo(e, r, i);
		if (Ai(e) && (s.ctx.renderer = Se), Xo(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = R(F);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, oe = (e, t, n) => {
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
				let u = t, p;
				ao(e, !1), t ? (t.el = c.el, ce(e, t, o)) : t = c, n && d(n), (p = t.props && t.props.onVnodeBeforeUpdate) && Ro(p, s, t, c), ao(e, !0);
				let m = Aa(e), h = e.subTree;
				e.subTree = m, g(h, m, f(h.el), ye(h), e, i, a), t.el = m.el, u === null && Ia(e, m.el), r && to(r, i), (p = t.props && t.props.onVnodeUpdated) && to(() => Ro(p, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: f, root: p, type: m } = e, h = ki(t);
				if (ao(e, !1), l && d(l), !h && (o = c && c.onVnodeBeforeMount) && Ro(o, f, t), ao(e, !0), s && we) {
					let t = () => {
						e.subTree = Aa(e), we(s, e.subTree, e, i, null);
					};
					h && m.__asyncHydrate ? m.__asyncHydrate(s, e, t) : t();
				} else {
					p.ce && p.ce._hasShadowRoot() && p.ce._injectChildStyle(m, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Aa(e);
					g(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && to(u, i), !h && (o = c && c.onVnodeMounted)) {
					let e = t;
					to(() => Ro(o, f, e), i);
				}
				(t.shapeFlag & 256 || f && ki(f.vnode) && f.vnode.shapeFlag & 256) && e.a && to(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Te(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Rr(u), ao(e, !0), l();
	}, ce = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Va(e, t.props, r, n), eo(e, t.children, n), pe(), Vr(e), me();
	}, le = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				de(l, f, n, r, i, a, o, s, c);
				return;
			} else if (p & 256) {
				ue(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ve(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? de(l, f, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && ne(f, n, r, i, a, o, s, c));
	}, ue = (e, t, n, r, i, a, o, s, c) => {
		e ||= w, t ||= w;
		let l = e.length, u = t.length, d = Math.min(l, u), f;
		for (f = 0; f < d; f++) {
			let r = t[f] = c ? Fo(t[f]) : Po(t[f]);
			g(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ve(e, i, a, !0, !1, d) : ne(t, n, r, i, a, o, s, c, d);
	}, de = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Fo(t[l]) : Po(t[l]);
			if (To(r, u)) g(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Fo(t[f]) : Po(t[f]);
			if (To(r, l)) g(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) g(null, t[l] = c ? Fo(t[l]) : Po(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) k(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, h = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Fo(t[l]) : Po(t[l]);
				e.key != null && h.set(e.key, l);
			}
			let _, v = 0, y = f - m + 1, b = !1, x = 0, S = Array(y);
			for (l = 0; l < y; l++) S[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (v >= y) {
					k(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = h.get(r.key);
				else for (_ = m; _ <= f; _++) if (S[_ - m] === 0 && To(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? k(r, i, a, !0) : (S[u - m] = l + 1, u >= x ? x = u : b = !0, g(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let C = b ? co(S) : w;
			for (_ = C.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || fo(f) : r;
				S[l] === 0 ? g(null, d, n, p, i, a, o, s, c) : b && (_ < 0 || l !== C[_] ? fe(d, n, p, 2) : _--);
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
		if (c === P) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === go) {
			S(e, t, n);
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
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (pe(), Di(s, null, n, e, !0), me()), p != null && (t.renderCache[p] = void 0), u & 256) {
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
			h && Yr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== P || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === P && d & 384 || !i && u & 16) && ve(c, t, n), r && A(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && to(() => {
			_ && Ro(_, t, e), h && Yr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, A = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === P) {
			he(n, r);
			return;
		}
		if (t === go) {
			C(e);
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
		uo(c), uo(l), r && d(r), i.stop(), a && (a.flags |= 8, k(o, e, t, n)), s && to(s, t), to(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = p(e.anchor || e.el), n = t && t[ai];
		return n ? p(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (k(t._vnode, null, null, !0), r = t._vnode.component) : g(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, Vr(r), Hr(), !1);
	}, Se = {
		p: g,
		um: k,
		m: fe,
		r: A,
		mt: ae,
		mc: ne,
		pc: le,
		pbc: ie,
		n: ye,
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
	if (E(r) && E(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Fo(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && so(t, a)), a.type === ho && (a.patchFlag === -1 && (a = i[e] = Fo(a)), a.el = t.el), a.type === F && !a.el && (a.el = t.el);
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
	t && t.pendingBranch ? E(e) ? t.effects.push(...e) : t.effects.push(e) : Br(e);
}
var P = /* @__PURE__ */ Symbol.for("v-fgt"), ho = /* @__PURE__ */ Symbol.for("v-txt"), F = /* @__PURE__ */ Symbol.for("v-cmt"), go = /* @__PURE__ */ Symbol.for("v-stc"), _o = [], vo = null;
function I(e = !1) {
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
	return e.dynamicChildren = bo > 0 ? vo || w : null, yo(), bo > 0 && vo && vo.push(e), e;
}
function L(e, t, n, r, i, a) {
	return So(Oo(e, t, n, r, i, a, !0));
}
function Co(e, t, n, r, i) {
	return So(R(e, t, n, r, i, !0));
}
function wo(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function To(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Eo = ({ key: e }) => e ?? null, Do = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : O(e) || ve(e) || _(e) ? {
	i: N,
	r: e,
	k: t,
	f: !!n
} : e);
function Oo(e, t = null, n = null, r = 0, i = null, a = e === P ? 0 : 1, o = !1, s = !1) {
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
		ctx: N
	};
	return s ? (Io(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= O(n) ? 8 : 16), bo > 0 && !o && vo && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && vo.push(c), c;
}
var R = ko;
function ko(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Ji) && (e = F), wo(e)) {
		let r = jo(e, t, !0);
		return n && Io(r, n), bo > 0 && !a && vo && (r.shapeFlag & 6 ? vo[vo.indexOf(e)] = r : vo.push(r)), r.patchFlag = -2, r;
	}
	if (os(e) && (e = e.__vccOpts), t) {
		t = Ao(t);
		let { class: e, style: n } = t;
		e && !O(e) && (t.class = k(e)), D(n) && (Se(n) && !E(n) && (n = h({}, n)), t.style = ke(n));
	}
	let o = O(e) ? 1 : po(e) ? 128 : oi(e) ? 64 : D(e) ? 4 : _(e) ? 2 : 0;
	return Oo(e, t, n, r, i, o, a, !0);
}
function Ao(e) {
	return e ? Se(e) || za(e) ? h({}, e) : e : null;
}
function jo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Lo(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Eo(l),
		ref: t && t.ref ? n && a ? E(a) ? a.concat(Do(t)) : [a, Do(t)] : Do(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== P ? o === -1 ? 16 : o | 16 : o,
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
	return R(ho, null, e, t);
}
function No(e = "", t = !1) {
	return t ? (I(), Co(F, null, e)) : R(F, null, e);
}
function Po(e) {
	return e == null || typeof e == "boolean" ? R(F) : E(e) ? R(P, null, e.slice()) : wo(e) ? Fo(e) : R(ho, null, String(e));
}
function Fo(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : jo(e);
}
function Io(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (E(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Io(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !za(t) ? t._ctx = N : r === 3 && N && (N.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: N
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Mo(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Lo(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = ke([t.style, r.style]);
		else if (g(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(E(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !ie(e) && (t[e] = i);
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
		scope: new be(!0),
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
var Ho = null, Uo = () => Ho || N, Wo, Go;
{
	let e = v(), t = (t, n) => {
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
		pe();
		let n = e.setupContext = r.length > 1 ? rs(e) : null, i = Ko(e), a = Tr(r, e, 0, [e.props, n]), o = we(a);
		if (me(), i(), (o || e.sp) && !ki(e) && wi(e), o) {
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
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : D(t) && (e.setupState = Ce(t)), ts(e, n);
}
var $o, es;
function ts(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && $o && !r.render) {
			let t = r.template || da(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = $o(t, h(h({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || _e, es && es(e);
	}
	{
		let t = Ko(e);
		pe();
		try {
			sa(e);
		} finally {
			me(), t();
		}
	}
}
var ns = { get(e, t) {
	return f(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(Ce(fe(e.exposed)), {
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
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function os(e) {
	return _(e) && "__vccOpts" in e;
}
var z = (e, t) => he(e, t, Yo);
function ss(e, t, n) {
	try {
		xo(-1);
		let r = arguments.length;
		return r === 2 ? D(t) && !E(t) ? wo(t) ? R(e, null, [t]) : R(e, t) : R(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && wo(n) && (n = [n]), R(e, t, n));
	} finally {
		xo(1);
	}
}
var cs = "3.5.33", ls = void 0, us = typeof window < "u" && window.trustedTypes;
if (us) try {
	ls = /* @__PURE__ */ us.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ds = ls ? (e) => ls.createHTML(e) : (e) => e, fs = "http://www.w3.org/2000/svg", ps = "http://www.w3.org/1998/Math/MathML", ms = typeof document < "u" ? document : null, hs = ms && /* @__PURE__ */ ms.createElement("template"), gs = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ms.createElementNS(fs, e) : t === "mathml" ? ms.createElementNS(ps, e) : n ? ms.createElement(e, { is: n }) : ms.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ms.createTextNode(e),
	createComment: (e) => ms.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ms.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			hs.innerHTML = ds(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = hs.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, _s = "transition", vs = "animation", ys = /* @__PURE__ */ Symbol("_vtc"), bs = {
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
}, xs = /* @__PURE__ */ h({}, di, bs), Ss = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = xs, e))((e, { slots: t }) => ss(hi, Ts(e), t)), Cs = (e, t = []) => {
	E(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, ws = (e) => e ? E(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Ts(e) {
	let t = {};
	for (let n in e) n in bs || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = Es(i), g = m && m[0], _ = m && m[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, te = (e, t, n, r) => {
		e._enterCancelled = r, ks(e, t ? u : s), ks(e, t ? l : o), n && n();
	}, T = (e, t) => {
		e._isLeaving = !1, ks(e, d), ks(e, p), ks(e, f), t && t();
	}, ne = (e) => (t, n) => {
		let i = e ? w : y, o = () => te(t, e, n);
		Cs(i, [t, o]), As(() => {
			ks(t, e ? c : a), Os(t, e ? u : s), ws(i) || Ms(t, r, g, o);
		});
	};
	return h(t, {
		onBeforeEnter(e) {
			Cs(v, [e]), Os(e, a), Os(e, o);
		},
		onBeforeAppear(e) {
			Cs(C, [e]), Os(e, c), Os(e, l);
		},
		onEnter: ne(!1),
		onAppear: ne(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => T(e, t);
			Os(e, d), e._enterCancelled ? (Os(e, f), Is(e)) : (Is(e), Os(e, f)), As(() => {
				e._isLeaving && (ks(e, d), Os(e, p), ws(x) || Ms(e, r, _, n));
			}), Cs(x, [e, n]);
		},
		onEnterCancelled(e) {
			te(e, !1, void 0, !0), Cs(b, [e]);
		},
		onAppearCancelled(e) {
			te(e, !0, void 0, !0), Cs(ee, [e]);
		},
		onLeaveCancelled(e) {
			T(e), Cs(S, [e]);
		}
	});
}
function Es(e) {
	if (e == null) return null;
	if (D(e)) return [Ds(e.enter), Ds(e.leave)];
	{
		let t = Ds(e);
		return [t, t];
	}
}
function Ds(e) {
	return le(e);
}
function Os(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ys] || (e[ys] = /* @__PURE__ */ new Set())).add(t);
}
function ks(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[ys];
	n && (n.delete(t), n.size || (e[ys] = void 0));
}
function As(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var js = 0;
function Ms(e, t, n, r) {
	let i = e._endId = ++js, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Ns(e, t);
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
function Ns(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${_s}Delay`), a = r(`${_s}Duration`), o = Ps(i, a), s = r(`${vs}Delay`), c = r(`${vs}Duration`), l = Ps(s, c), u = null, d = 0, f = 0;
	t === _s ? o > 0 && (u = _s, d = o, f = a.length) : t === vs ? l > 0 && (u = vs, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? _s : vs : null, f = u ? u === _s ? a.length : c.length : 0);
	let p = u === _s && /\b(?:transform|all)(?:,|$)/.test(r(`${_s}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Ps(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Fs(t) + Fs(e[n])));
}
function Fs(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Is(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ls(e, t, n) {
	let r = e[ys];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Rs = /* @__PURE__ */ Symbol("_vod"), zs = /* @__PURE__ */ Symbol("_vsh"), Bs = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Rs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vs(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Vs(e, !0), r.enter(e)) : r.leave(e, () => {
			Vs(e, !1);
		}) : Vs(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Vs(e, t);
	}
};
function Vs(e, t) {
	e.style.display = t ? e[Rs] : "none", e[zs] = !t;
}
var Hs = /* @__PURE__ */ Symbol(""), Us = /(?:^|;)\s*display\s*:/;
function Ws(e, t, n) {
	let r = e.style, i = O(n), a = !1;
	if (n && !i) {
		if (t) if (O(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ks(r, t, "");
		}
		else for (let e in t) n[e] ?? Ks(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ks(r, i, "") : Xs(e, i, !O(t) && t ? t[i] : void 0, o) || Ks(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Hs];
			e && (n += ";" + e), r.cssText = n, a = Us.test(n);
		}
	} else t && e.removeAttribute("style");
	Rs in e && (e[Rs] = a ? r.display : "", e[zs] && (r.display = "none"));
}
var Gs = /\s*!important$/;
function Ks(e, t, n) {
	if (E(n)) n.forEach((n) => Ks(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ys(e, t);
		Gs.test(n) ? e.setProperty(T(r), n.replace(Gs, ""), "important") : e[r] = n;
	}
}
var qs = [
	"Webkit",
	"Moz",
	"ms"
], Js = {};
function Ys(e, t) {
	let n = Js[t];
	if (n) return n;
	let r = S(t);
	if (r !== "filter" && r in e) return Js[t] = r;
	r = C(r);
	for (let n = 0; n < qs.length; n++) {
		let i = qs[n] + r;
		if (i in e) return Js[t] = i;
	}
	return t;
}
function Xs(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && O(r) && n === r;
}
var Zs = "http://www.w3.org/1999/xlink";
function Qs(e, t, n, r, i, a = ae(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zs, t.slice(6, t.length)) : e.setAttributeNS(Zs, t, n) : n == null || a && !Fe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : oe(n) ? String(n) : n);
}
function $s(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ds(n) : n);
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
		r === "boolean" ? n = Fe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ec(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function tc(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var nc = /* @__PURE__ */ Symbol("_vei");
function rc(e, t, n, r, i = null) {
	let a = e[nc] || (e[nc] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ac(t);
		r ? ec(e, n, a[t] = lc(r, i), s) : o && (tc(e, n, o, s), a[t] = void 0);
	}
}
var ic = /(?:Once|Passive|Capture)$/;
function ac(e) {
	let t;
	if (ic.test(e)) {
		t = {};
		let n;
		for (; n = e.match(ic);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var oc = 0, sc = /* @__PURE__ */ Promise.resolve(), cc = () => oc ||= (sc.then(() => oc = 0), Date.now());
function lc(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		Er(uc(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = cc(), n;
}
function uc(e, t) {
	if (E(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var dc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fc = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ls(e, r, o) : t === "style" ? Ws(e, n, r) : g(t) ? ie(t) || rc(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pc(e, t, r, o)) ? ($s(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qs(e, t, r, o, a, t !== "value")) : e._isVueCE && (mc(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !O(r))) ? $s(e, S(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qs(e, t, r, o));
};
function pc(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && dc(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return dc(t) && O(n) ? !1 : t in e;
}
function mc(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = S(t);
	return Array.isArray(n) ? n.some((e) => S(e) === r) : Object.keys(n).some((e) => S(e) === r);
}
var hc = {};
/* @__NO_SIDE_EFFECTS__ */
function gc(e, t, n) {
	let r = /* @__PURE__ */ Si(e, t);
	b(r) && (r = h({}, r, t));
	class i extends vc {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var _c = typeof HTMLElement < "u" ? HTMLElement : class {}, vc = class e extends _c {
	constructor(e, t = {}, n = Cc) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== Cc ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(h({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
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
			if (n && !E(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = le(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[S(e)] = !0);
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
		if (t) for (let e in t) x(this, e) || Object.defineProperty(this, e, { get: () => m(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = E(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(S)) Object.defineProperty(this, e, {
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
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : hc, r = S(e);
		t && this._numberProps && this._numberProps[r] && (n = le(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === hc ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(T(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(T(e), t + "") : t || this.removeAttribute(T(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), Sc(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = R(this._def, h(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, b(t[0]) ? h({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), T(e) !== e && t(T(e), n);
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
}, yc = /* @__PURE__ */ h({ patchProp: fc }, gs), bc;
function xc() {
	return bc ||= no(yc);
}
var Sc = ((...e) => {
	xc().render(...e);
}), Cc = ((...e) => {
	let t = xc().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Tc(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, wc(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function wc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Tc(e) {
	return O(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Ec = [
	"top",
	"right",
	"bottom",
	"left"
], Dc = ["start", "end"], Oc = /* @__PURE__ */ Ec.reduce((e, t) => e.concat(t, t + "-" + Dc[0], t + "-" + Dc[1]), []), kc = Math.min, Ac = Math.max, jc = Math.round, Mc = (e) => ({
	x: e,
	y: e
}), Nc = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Pc(e, t, n) {
	return Ac(e, kc(t, n));
}
function Fc(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ic(e) {
	return e.split("-")[0];
}
function Lc(e) {
	return e.split("-")[1];
}
function Rc(e) {
	return e === "x" ? "y" : "x";
}
function zc(e) {
	return e === "y" ? "height" : "width";
}
function Bc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Vc(e) {
	return Rc(Bc(e));
}
function Hc(e, t, n) {
	n === void 0 && (n = !1);
	let r = Lc(e), i = Vc(e), a = zc(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Zc(o)), [o, Zc(o)];
}
function Uc(e) {
	let t = Zc(e);
	return [
		Wc(e),
		t,
		Wc(t)
	];
}
function Wc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Gc = ["left", "right"], Kc = ["right", "left"], qc = ["top", "bottom"], Jc = ["bottom", "top"];
function Yc(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Kc : Gc : t ? Gc : Kc;
		case "left":
		case "right": return t ? qc : Jc;
		default: return [];
	}
}
function Xc(e, t, n, r) {
	let i = Lc(e), a = Yc(Ic(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Wc)))), a;
}
function Zc(e) {
	let t = Ic(e);
	return Nc[t] + e.slice(t.length);
}
function Qc(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function $c(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Qc(e);
}
function el(e) {
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
function tl(e, t, n) {
	let { reference: r, floating: i } = e, a = Bc(t), o = Vc(t), s = zc(o), c = Ic(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Lc(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function nl(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Fc(t, e), p = $c(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = el(await i.getClippingRect({
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
	}, y = el(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var rl = 50, il = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: nl
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = tl(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < rl && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = tl(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, al = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Fc(e, t) || {};
		if (l == null) return {};
		let d = $c(u), f = {
			x: n,
			y: r
		}, p = Vc(i), m = zc(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, ee = C / 2 - h[m] / 2 - 1, te = kc(d[_], ee), T = kc(d[v], ee), ne = te, re = C - h[m] - T, ie = C / 2 - h[m] / 2 + w, E = Pc(ne, ie, re), D = !c.arrow && Lc(i) != null && ie !== E && a.reference[m] / 2 - (ie < ne ? te : T) - h[m] / 2 < 0, O = D ? ie < ne ? ie - ne : ie - re : 0;
		return {
			[p]: f[p] + O,
			data: {
				[p]: E,
				centerOffset: ie - E - O,
				...D && { alignmentOffset: O }
			},
			reset: D
		};
	}
});
function ol(e, t, n) {
	return (e ? [...n.filter((t) => Lc(t) === e), ...n.filter((t) => Lc(t) !== e)] : n.filter((e) => Ic(e) === e)).filter((n) => e ? Lc(n) === e || (t ? Wc(n) !== n : !1) : !0);
}
var sl = function(e) {
	return e === void 0 && (e = {}), {
		name: "autoPlacement",
		options: e,
		async fn(t) {
			let { rects: n, middlewareData: r, placement: i, platform: a, elements: o } = t, { crossAxis: s = !1, alignment: c, allowedPlacements: l = Oc, autoAlignment: u = !0, ...d } = Fc(e, t), f = c !== void 0 || l === Oc ? ol(c || null, u, l) : l, p = await a.detectOverflow(t, d), m = r.autoPlacement?.index || 0, h = f[m];
			if (h == null) return {};
			let g = Hc(h, n, await (a.isRTL == null ? void 0 : a.isRTL(o.floating)));
			if (i !== h) return { reset: { placement: f[0] } };
			let _ = [
				p[Ic(h)],
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
				let t = Lc(e.placement);
				return [
					e.placement,
					t && s ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
					e.overflows
				];
			}).sort((e, t) => e[1] - t[1]), x = b.filter((e) => e[2].slice(0, Lc(e[0]) ? 2 : 3).every((e) => e <= 0))[0]?.[0] || b[0][0];
			return x === i ? {} : {
				data: {
					index: m + 1,
					overflows: v
				},
				reset: { placement: x }
			};
		}
	};
}, cl = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Fc(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ic(r), _ = Bc(o), v = Ic(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Zc(o)] : Uc(o)), x = p !== "none";
			!d && x && b.push(...Xc(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], ee = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Hc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (ee = [...ee, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Bc(t)) || ee.every((e) => Bc(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: ee
					},
					reset: { placement: t }
				};
				let n = ee.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = ee.filter((e) => {
							if (x) {
								let t = Bc(e.placement);
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
function ll(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function ul(e) {
	return Ec.some((t) => e[t] >= 0);
}
var dl = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Fc(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ll(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: ul(e)
					} };
				}
				case "escaped": {
					let e = ll(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: ul(e)
					} };
				}
				default: return {};
			}
		}
	};
};
function fl(e) {
	let t = kc(...e.map((e) => e.left)), n = kc(...e.map((e) => e.top)), r = Ac(...e.map((e) => e.right)), i = Ac(...e.map((e) => e.bottom));
	return {
		x: t,
		y: n,
		width: r - t,
		height: i - n
	};
}
function pl(e) {
	let t = e.slice().sort((e, t) => e.y - t.y), n = [], r = null;
	for (let e = 0; e < t.length; e++) {
		let i = t[e];
		!r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
	}
	return n.map((e) => el(fl(e)));
}
var ml = function(e) {
	return e === void 0 && (e = {}), {
		name: "inline",
		options: e,
		async fn(t) {
			let { placement: n, elements: r, rects: i, platform: a, strategy: o } = t, { padding: s = 2, x: c, y: l } = Fc(e, t), u = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(r.reference)) || []), d = pl(u), f = el(fl(u)), p = $c(s);
			function m() {
				if (d.length === 2 && d[0].left > d[1].right && c != null && l != null) return d.find((e) => c > e.left - p.left && c < e.right + p.right && l > e.top - p.top && l < e.bottom + p.bottom) || f;
				if (d.length >= 2) {
					if (Bc(n) === "y") {
						let e = d[0], t = d[d.length - 1], r = Ic(n) === "top", i = e.top, a = t.bottom, o = r ? e.left : t.left, s = r ? e.right : t.right;
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
					let e = Ic(n) === "left", t = Ac(...d.map((e) => e.right)), r = kc(...d.map((e) => e.left)), i = d.filter((n) => e ? n.left === r : n.right === t), a = i[0].top, o = i[i.length - 1].bottom, s = r, c = t;
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
}, hl = /* @__PURE__ */ new Set(["left", "top"]);
async function gl(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ic(n), s = Lc(n), c = Bc(n) === "y", l = hl.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Fc(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var _l = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await gl(t, e);
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
}, vl = function(e) {
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
			} }, ...l } = Fc(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Bc(Ic(i)), p = Rc(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Pc(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Pc(n, h, r);
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
}, yl = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Fc(e, t), u = await o.detectOverflow(t, l), d = Ic(i), f = Lc(i), p = Bc(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = kc(h - u[g], v), x = kc(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Ac(u.left, 0), t = Ac(u.right, 0), n = Ac(u.top, 0), r = Ac(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Ac(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Ac(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let ee = await o.getDimensions(s.floating);
			return m !== ee.width || h !== ee.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function bl() {
	return typeof window < "u";
}
function xl(e) {
	return wl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Sl(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Cl(e) {
	return ((wl(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function wl(e) {
	return bl() ? e instanceof Node || e instanceof Sl(e).Node : !1;
}
function Tl(e) {
	return bl() ? e instanceof Element || e instanceof Sl(e).Element : !1;
}
function El(e) {
	return bl() ? e instanceof HTMLElement || e instanceof Sl(e).HTMLElement : !1;
}
function Dl(e) {
	return !bl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Sl(e).ShadowRoot;
}
function Ol(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = zl(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function kl(e) {
	return /^(table|td|th)$/.test(xl(e));
}
function Al(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var jl = /transform|translate|scale|rotate|perspective|filter/, Ml = /paint|layout|strict|content/, Nl = (e) => !!e && e !== "none", Pl;
function Fl(e) {
	let t = Tl(e) ? zl(e) : e;
	return Nl(t.transform) || Nl(t.translate) || Nl(t.scale) || Nl(t.rotate) || Nl(t.perspective) || !Ll() && (Nl(t.backdropFilter) || Nl(t.filter)) || jl.test(t.willChange || "") || Ml.test(t.contain || "");
}
function Il(e) {
	let t = Vl(e);
	for (; El(t) && !Rl(t);) {
		if (Fl(t)) return t;
		if (Al(t)) return null;
		t = Vl(t);
	}
	return null;
}
function Ll() {
	return Pl ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Pl;
}
function Rl(e) {
	return /^(html|body|#document)$/.test(xl(e));
}
function zl(e) {
	return Sl(e).getComputedStyle(e);
}
function Bl(e) {
	return Tl(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Vl(e) {
	if (xl(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Dl(e) && e.host || Cl(e);
	return Dl(t) ? t.host : t;
}
function Hl(e) {
	let t = Vl(e);
	return Rl(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : El(t) && Ol(t) ? t : Hl(t);
}
function Ul(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Hl(e), i = r === e.ownerDocument?.body, a = Sl(r);
	if (i) {
		let e = Wl(a);
		return t.concat(a, a.visualViewport || [], Ol(r) ? r : [], e && n ? Ul(e) : []);
	} else return t.concat(r, Ul(r, [], n));
}
function Wl(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Gl(e) {
	let t = zl(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = El(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = jc(n) !== a || jc(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Kl(e) {
	return Tl(e) ? e : e.contextElement;
}
function ql(e) {
	let t = Kl(e);
	if (!El(t)) return Mc(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Gl(t), o = (a ? jc(n.width) : n.width) / r, s = (a ? jc(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Jl = /* @__PURE__ */ Mc(0);
function Yl(e) {
	let t = Sl(e);
	return !Ll() || !t.visualViewport ? Jl : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Xl(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Sl(e) ? !1 : t;
}
function Zl(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Kl(e), o = Mc(1);
	t && (r ? Tl(r) && (o = ql(r)) : o = ql(e));
	let s = Xl(a, n, r) ? Yl(a) : Mc(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Sl(a), t = r && Tl(r) ? Sl(r) : r, n = e, i = Wl(n);
		for (; i && r && t !== n;) {
			let e = ql(i), t = i.getBoundingClientRect(), r = zl(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Sl(i), i = Wl(n);
		}
	}
	return el({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ql(e, t) {
	let n = Bl(e).scrollLeft;
	return t ? t.left + n : Zl(Cl(e)).left + n;
}
function $l(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ql(e, n),
		y: n.top + t.scrollTop
	};
}
function eu(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Cl(r), s = t ? Al(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Mc(1), u = Mc(0), d = El(r);
	if ((d || !d && !a) && ((xl(r) !== "body" || Ol(o)) && (c = Bl(r)), d)) {
		let e = Zl(r);
		l = ql(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? $l(o, c) : Mc(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function tu(e) {
	return Array.from(e.getClientRects());
}
function nu(e) {
	let t = Cl(e), n = Bl(e), r = e.ownerDocument.body, i = Ac(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ac(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Ql(e), s = -n.scrollTop;
	return zl(r).direction === "rtl" && (o += Ac(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var ru = 25;
function iu(e, t) {
	let n = Sl(e), r = Cl(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ll();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Ql(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= ru && (a -= o);
	} else l <= ru && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function au(e, t) {
	let n = Zl(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = El(e) ? ql(e) : Mc(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ou(e, t, n) {
	let r;
	if (t === "viewport") r = iu(e, n);
	else if (t === "document") r = nu(Cl(e));
	else if (Tl(t)) r = au(t, n);
	else {
		let n = Yl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return el(r);
}
function su(e, t) {
	let n = Vl(e);
	return n === t || !Tl(n) || Rl(n) ? !1 : zl(n).position === "fixed" || su(n, t);
}
function cu(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ul(e, [], !1).filter((e) => Tl(e) && xl(e) !== "body"), i = null, a = zl(e).position === "fixed", o = a ? Vl(e) : e;
	for (; Tl(o) && !Rl(o);) {
		let t = zl(o), n = Fl(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Ol(o) && !n && su(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Vl(o);
	}
	return t.set(e, r), r;
}
function lu(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Al(t) ? [] : cu(t, this._c) : [].concat(n), r], o = ou(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ou(t, a[e], i);
		s = Ac(n.top, s), c = kc(n.right, c), l = kc(n.bottom, l), u = Ac(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function uu(e) {
	let { width: t, height: n } = Gl(e);
	return {
		width: t,
		height: n
	};
}
function du(e, t, n) {
	let r = El(t), i = Cl(t), a = n === "fixed", o = Zl(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Mc(0);
	function l() {
		c.x = Ql(i);
	}
	if (r || !r && !a) if ((xl(t) !== "body" || Ol(i)) && (s = Bl(t)), r) {
		let e = Zl(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? $l(i, s) : Mc(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function fu(e) {
	return zl(e).position === "static";
}
function pu(e, t) {
	if (!El(e) || zl(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Cl(e) === n && (n = n.ownerDocument.body), n;
}
function mu(e, t) {
	let n = Sl(e);
	if (Al(e)) return n;
	if (!El(e)) {
		let t = Vl(e);
		for (; t && !Rl(t);) {
			if (Tl(t) && !fu(t)) return t;
			t = Vl(t);
		}
		return n;
	}
	let r = pu(e, t);
	for (; r && kl(r) && fu(r);) r = pu(r, t);
	return r && Rl(r) && fu(r) && !Fl(r) ? n : r || Il(e) || n;
}
var hu = async function(e) {
	let t = this.getOffsetParent || mu, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: du(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function gu(e) {
	return zl(e).direction === "rtl";
}
var _u = {
	convertOffsetParentRelativeRectToViewportRelativeRect: eu,
	getDocumentElement: Cl,
	getClippingRect: lu,
	getOffsetParent: mu,
	getElementRects: hu,
	getClientRects: tu,
	getDimensions: uu,
	getScale: ql,
	isElement: Tl,
	isRTL: gu
}, vu = _l, yu = sl, bu = vl, xu = cl, Su = yl, Cu = dl, wu = al, Tu = ml, Eu = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: _u,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return il(e, t, {
		...i,
		platform: a
	});
}, Du = () => /* @__PURE__ */ new Map(), Ou = (e) => {
	let t = Du();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, ku = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, Au = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, ju = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, Mu = () => /* @__PURE__ */ new Set(), Nu = (e) => e[e.length - 1], Pu = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, Fu = Array.from, Iu = (e, t) => {
	for (let n = 0; n < e.length; n++) if (!t(e[n], n, e)) return !1;
	return !0;
}, Lu = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, Ru = (e, t) => {
	let n = Array(e);
	for (let r = 0; r < e; r++) n[r] = t(r, n);
	return n;
}, zu = Array.isArray, Bu = class {
	constructor() {
		this._observers = Du();
	}
	on(e, t) {
		return ku(this._observers, e, Mu).add(t), t;
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
		return Fu((this._observers.get(e) || Du()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = Du();
	}
}, Vu = Math.floor, Hu = Math.abs, Uu = (e, t) => e < t ? e : t, Wu = (e, t) => e > t ? e : t;
Number.isNaN;
var Gu = (e) => e === 0 ? 1 / e < 0 : e < 0, Ku = 1 << 17, qu = 1 << 18, Ju = 1 << 19, Yu = 1 << 20, Xu = 1 << 21, Zu = 1 << 22, Qu = 1 << 23, $u = 1 << 24, ed = 1 << 25, td = 1 << 26, nd = 1 << 27, rd = 1 << 28, id = 1 << 29;
Ku - 1, qu - 1, Ju - 1, Yu - 1, Xu - 1, Zu - 1, Qu - 1, $u - 1, ed - 1, td - 1, nd - 1, rd - 1, id - 1;
//#endregion
//#region node_modules/lib0/number.js
var ad = 2 ** 53 - 1, od = -(2 ** 53 - 1), sd = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && Vu(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region node_modules/lib0/string.js
var cd = String.fromCharCode;
String.fromCodePoint, cd(65535);
var ld = (e) => e.toLowerCase(), ud = /^\s*/g, dd = (e) => e.replace(ud, ""), fd = /([A-Z])/g, pd = (e, t) => dd(e.replace(fd, (e) => `${t}${ld(e)}`)), md = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, hd = typeof TextEncoder < "u" ? new TextEncoder() : null, gd = hd ? (e) => hd.encode(e) : md, _d = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
_d && _d.decode(new Uint8Array()).length === 1 && (_d = null);
var vd = (e, t) => Ru(t, () => e).join(""), yd = class {
	constructor() {
		this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
	}
}, bd = () => new yd(), xd = (e) => {
	let t = bd();
	return e(t), Cd(t);
}, Sd = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, Cd = (e) => {
	let t = new Uint8Array(Sd(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, wd = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Wu(n, t) * 2), e.cpos = 0);
}, B = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Td = B, V = (e, t) => {
	for (; t > 127;) B(e, 128 | 127 & t), t = Vu(t / 128);
	B(e, 127 & t);
}, Ed = (e, t) => {
	let n = Gu(t);
	for (n && (t = -t), B(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = Vu(t / 64); t > 0;) B(e, (t > 127 ? 128 : 0) | 127 & t), t = Vu(t / 128);
}, Dd = new Uint8Array(3e4), Od = Dd.length / 3, kd = hd && hd.encodeInto ? (e, t) => {
	if (t.length < Od) {
		/* c8 ignore next */
		let n = hd.encodeInto(t, Dd).written || 0;
		V(e, n);
		for (let t = 0; t < n; t++) B(e, Dd[t]);
	} else jd(e, gd(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	V(e, r);
	for (let t = 0; t < r; t++) B(e, n.codePointAt(t));
}, Ad = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = Uu(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Wu(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, jd = (e, t) => {
	V(e, t.byteLength), Ad(e, t);
}, Md = (e, t) => {
	wd(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, Nd = (e, t) => Md(e, 4).setFloat32(0, t, !1), Pd = (e, t) => Md(e, 8).setFloat64(0, t, !1), Fd = (e, t) => Md(e, 8).setBigInt64(0, t, !1), Id = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), Ld = (e) => (Id.setFloat32(0, e), Id.getFloat32(0) === e), Rd = (e, t) => {
	switch (typeof t) {
		case "string":
			B(e, 119), kd(e, t);
			break;
		case "number":
			sd(t) && Hu(t) <= 2147483647 ? (B(e, 125), Ed(e, t)) : Ld(t) ? (B(e, 124), Nd(e, t)) : (B(e, 123), Pd(e, t));
			break;
		case "bigint":
			B(e, 122), Fd(e, t);
			break;
		case "object":
			if (t === null) B(e, 126);
			else if (zu(t)) {
				B(e, 117), V(e, t.length);
				for (let n = 0; n < t.length; n++) Rd(e, t[n]);
			} else if (t instanceof Uint8Array) B(e, 116), jd(e, t);
			else {
				B(e, 118);
				let n = Object.keys(t);
				V(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					kd(e, i), Rd(e, t[i]);
				}
			}
			break;
		case "boolean":
			B(e, t ? 120 : 121);
			break;
		default: B(e, 127);
	}
}, zd = class extends yd {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && V(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, Bd = (e) => {
	e.count > 0 && (Ed(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && V(e.encoder, e.count - 2));
}, Vd = class {
	constructor() {
		this.encoder = new yd(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (Bd(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return Bd(this), Cd(this.encoder);
	}
}, Hd = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Ed(e.encoder, t), e.count > 1 && V(e.encoder, e.count - 2);
	}
}, Ud = class {
	constructor() {
		this.encoder = new yd(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (Hd(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return Hd(this), Cd(this.encoder);
	}
}, Wd = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new Vd();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new yd();
		return this.sarr.push(this.s), this.s = "", kd(e, this.sarr.join("")), Ad(e, this.lensE.toUint8Array()), Cd(e);
	}
}, Gd = (e) => Error(e), Kd = () => {
	throw Gd("Method unimplemented");
}, qd = () => {
	throw Gd("Unexpected case");
}, Jd = Gd("Unexpected end of array"), Yd = Gd("Integer out of Range"), Xd = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, Zd = (e) => new Xd(e), Qd = (e) => e.pos !== e.arr.length, $d = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, ef = (e) => $d(e, H(e)), tf = (e) => e.arr[e.pos++], H = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > ad) throw Yd;
	}
	throw Jd;
}, nf = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > ad) throw Yd;
	}
	throw Jd;
}, rf = _d ? (e) => _d.decode(ef(e)) : (e) => {
	let t = H(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(tf(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(tf(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, af = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, of = [
	(e) => void 0,
	(e) => null,
	nf,
	(e) => af(e, 4).getFloat32(0, !1),
	(e) => af(e, 8).getFloat64(0, !1),
	(e) => af(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	rf,
	(e) => {
		let t = H(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = rf(e);
			n[t] = sf(e);
		}
		return n;
	},
	(e) => {
		let t = H(e), n = [];
		for (let r = 0; r < t; r++) n.push(sf(e));
		return n;
	},
	ef
], sf = (e) => of[127 - tf(e)](e), cf = class extends Xd {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), Qd(this) ? this.count = H(this) + 1 : this.count = -1), this.count--, this.s;
	}
}, lf = class extends Xd {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = nf(this);
			let e = Gu(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = H(this) + 2);
		}
		return this.count--, this.s;
	}
}, uf = class extends Xd {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = nf(this), t = e & 1;
			this.diff = Vu(e / 2), this.count = 1, t && (this.count = H(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, df = class {
	constructor(e) {
		this.decoder = new lf(e), this.str = rf(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var ff = crypto.getRandomValues.bind(crypto), pf = Math.random, mf = () => ff(new Uint32Array(1))[0], hf = (e) => e[Vu(pf() * e.length)], gf = "10000000-1000-4000-8000-100000000000", _f = () => gf.replace(/[018]/g, (e) => (e ^ mf() & 15 >> e / 4).toString(16)), vf = Date.now, yf = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region node_modules/lib0/conditions.js
/* c8 ignore next */
var bf = (e) => e === void 0 ? null : e, xf = new class {
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
	typeof localStorage < "u" && localStorage && (xf = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Sf = xf, Cf = Symbol("Equality"), wf = (e, t) => e === t || !!e?.[Cf]?.(t) || !1, Tf = (e) => typeof e == "object", Ef = Object.assign, Df = Object.keys, Of = (e, t) => {
	for (let n in e) t(e[n], n);
}, kf = (e) => Df(e).length, Af = (e) => {
	for (let t in e) return !1;
	return !0;
}, jf = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Mf = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Nf = (e, t) => e === t || kf(e) === kf(t) && jf(e, (e, n) => (e !== void 0 || Mf(t, n)) && wf(t[n], e)), Pf = Object.freeze, Ff = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && Ff(e[t]);
	}
	return Pf(e);
}, If = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && If(e, t, n + 1);
	}
}, Lf = (e, t) => {
	if (e === t) return !0;
	if (e == null || t == null || e.constructor !== t.constructor && (e.constructor || Object) !== (t.constructor || Object)) return !1;
	if (e[Cf] != null) return e[Cf](t);
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
			for (let n of e.keys()) if (!t.has(n) || !Lf(e.get(n), t.get(n))) return !1;
			break;
		case void 0:
		case Object:
			if (kf(e) !== kf(t)) return !1;
			for (let n in e) if (!Mf(e, n) || !Lf(e[n], t[n])) return !1;
			break;
		case Array:
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) if (!Lf(e[n], t[n])) return !1;
			break;
		default: return !1;
	}
	return !0;
}, Rf = (e, t) => t.includes(e), zf = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Bf = typeof window < "u" && typeof document < "u" && !zf;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var Vf, Hf = [], Uf = () => {
	if (Vf === void 0) if (zf) {
		Vf = Du();
		let e = process.argv, t = null;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r[0] === "-" ? (t !== null && Vf.set(t, ""), t = r) : t === null ? Hf.push(r) : (Vf.set(t, r), t = null);
		}
		t !== null && Vf.set(t, "");
	} else typeof location == "object" ? (Vf = Du(), (location.search || "?").slice(1).split("&").forEach((e) => {
		if (e.length !== 0) {
			let [t, n] = e.split("=");
			Vf.set(`--${pd(t, "-")}`, n), Vf.set(`-${pd(t, "-")}`, n);
		}
	})) : Vf = Du();
	return Vf;
}, Wf = (e) => Uf().has(e), Gf = (e) => bf(zf ? process.env[e.toUpperCase().replaceAll("-", "_")] : Sf.getItem(e)), Kf = (e) => Wf("--" + e) || Gf(e) !== null, qf = Kf("production"), Jf = zf && Rf(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !Wf("--no-colors") && !Kf("no-color") && (!zf || process.stdout.isTTY) && (!zf || Wf("--color") || Gf("COLORTERM") !== null || (Gf("TERM") || "").includes("color")), Yf = Bf ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += cd(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), Xf = (e) => xd((t) => Rd(t, e)), Zf = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, Qf = (e, t) => new Zf(e, t), $f = (e) => e.next() >= .5, ep = (e, t, n) => Vu(e.next() * (n + 1 - t) + t), tp = (e, t, n) => Vu(e.next() * (n + 1 - t) + t), np = (e, t, n) => tp(e, t, n), rp = (e) => cd(np(e, 97, 122)), ip = (e, t = 0, n = 20) => {
	let r = np(e, t, n), i = "";
	for (let t = 0; t < r; t++) i += rp(e);
	return i;
}, ap = (e, t) => t[np(e, 0, t.length - 1)], op = Symbol("0schema"), sp = class {
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
			e.push(vd(" ", (this._rerrs.length - t) * 2) + `${n.path == null ? "" : `[${n.path}] `}${n.has} doesn't match ${n.expected}. ${n.message}`);
		}
		return e.join("\n");
	}
}, cp = (e, t) => e === t ? !0 : e == null || t == null || e.constructor !== t.constructor ? !1 : e[Cf] ? wf(e, t) : zu(e) ? Iu(e, (e) => Lu(t, (t) => cp(e, t))) : Tf(e) ? jf(e, (e, n) => cp(e, t[n])) : !1, lp = class {
	static _dilutes = !1;
	extends(e) {
		let [t, n] = [this.shape, e.shape];
		return this.constructor._dilutes && ([n, t] = [t, n]), cp(t, n);
	}
	equals(e) {
		return this.constructor === e.constructor && Lf(this.shape, e.shape);
	}
	[op]() {
		return !0;
	}
	[Cf](e) {
		return this.equals(e);
	}
	validate(e) {
		return this.check(e);
	}
	/* c8 ignore start */
	check(e, t) {
		Kd();
	}
	/* c8 ignore stop */
	get nullable() {
		return Bp(this, tm);
	}
	get optional() {
		return new vp(this);
	}
	cast(e) {
		return am(e, this), e;
	}
	expect(e) {
		return am(e, this), e;
	}
}, up = class extends lp {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t = void 0) {
		let n = e?.constructor === this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name, e?.constructor === this.shape ? "Check failed" : "Constructor match failed"), n;
	}
}, U = (e, t = null) => new up(e, t);
U(up);
var dp = class extends lp {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape(e);
		return !n && t?.extend(null, "custom prop", e?.constructor.name, "failed to check custom prop"), n;
	}
}, W = (e) => new dp(e);
U(dp);
var fp = class extends lp {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape.some((t) => t === e);
		return !n && t?.extend(null, this.shape.join(" | "), e.toString()), n;
	}
}, pp = (...e) => new fp(e), mp = U(fp), hp = RegExp.escape || ((e) => e.replace(/[().|&,$^[\]]/g, (e) => "\\" + e)), gp = (e) => {
	if (Xp.check(e)) return [hp(e)];
	if (mp.check(e)) return e.shape.map((e) => e + "");
	if (Yp.check(e)) return ["[+-]?\\d+.?\\d*"];
	if (Zp.check(e)) return [".*"];
	if (Vp.check(e)) return e.shape.map(gp).flat(1);
	/* c8 ignore next 2 */
	qd();
};
U(class extends lp {
	constructor(e) {
		super(), this.shape = e, this._r = RegExp("^" + e.map(gp).map((e) => `(${e.join("|")})`).join("") + "$");
	}
	check(e, t) {
		let n = this._r.exec(e) != null;
		return !n && t?.extend(null, this._r.toString(), e.toString(), "String doesn't match string template."), n;
	}
});
var _p = Symbol("optional"), vp = class extends lp {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = e === void 0 || this.shape.check(e);
		return !n && t?.extend(null, "undefined (optional)", "()"), n;
	}
	get [_p]() {
		return !0;
	}
}, yp = U(vp), bp = class extends lp {
	check(e, t) {
		return t?.extend(null, "never", typeof e), !1;
	}
};
new bp(), U(bp);
var xp = class e extends lp {
	constructor(e, t = !1) {
		super(), this.shape = e, this._isPartial = t;
	}
	static _dilutes = !0;
	get partial() {
		return new e(this.shape, !0);
	}
	check(e, t) {
		return e == null ? (t?.extend(null, "object", "null"), !1) : jf(this.shape, (n, r) => {
			let i = this._isPartial && !Mf(e, r) || n.check(e[r], t);
			return !i && t?.extend(r.toString(), n.toString(), typeof e[r], "Object property does not match"), i;
		});
	}
}, Sp = (e) => new xp(e), Cp = U(xp), wp = W((e) => e != null && (e.constructor === Object || e.constructor == null)), Tp = class extends lp {
	constructor(e, t) {
		super(), this.shape = {
			keys: e,
			values: t
		};
	}
	check(e, t) {
		return e != null && jf(e, (n, r) => {
			let i = this.shape.keys.check(r, t);
			return !i && t?.extend(r + "", "Record", typeof e, i ? "Key doesn't match schema" : "Value doesn't match value"), i && this.shape.values.check(n, t);
		});
	}
}, Ep = (e, t) => new Tp(e, t), Dp = U(Tp), Op = class extends lp {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		return e != null && jf(this.shape, (n, r) => {
			let i = n.check(e[r], t);
			return !i && t?.extend(r.toString(), "Tuple", typeof n), i;
		});
	}
}, kp = (...e) => new Op(e);
U(Op);
var Ap = class extends lp {
	constructor(e) {
		super(), this.shape = e.length === 1 ? e[0] : new zp(e);
	}
	check(e, t) {
		let n = zu(e) && Iu(e, (e) => this.shape.check(e));
		return !n && t?.extend(null, "Array", ""), n;
	}
}, jp = (...e) => new Ap(e), Mp = U(Ap), Np = W((e) => zu(e)), Pp = class extends lp {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t) {
		let n = e instanceof this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name), n;
	}
}, Fp = (e, t = null) => new Pp(e, t);
U(Pp);
var Ip = Fp(lp), Lp = U(class extends lp {
	constructor(e) {
		super(), this.len = e.length - 1, this.args = kp(...e.slice(-1)), this.res = e[this.len];
	}
	check(e, t) {
		let n = e.constructor === Function && e.length <= this.len;
		return !n && t?.extend(null, "function", typeof e), n;
	}
}), Rp = W((e) => typeof e == "function");
U(class extends lp {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = Iu(this.shape, (n) => n.check(e, t));
		return !n && t?.extend(null, "Intersectinon", typeof e), n;
	}
}, (e) => e.shape.length > 0);
var zp = class extends lp {
	static _dilutes = !0;
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = Lu(this.shape, (n) => n.check(e, t));
		return t?.extend(null, "Union", typeof e), n;
	}
}, Bp = (...e) => e.findIndex((e) => Vp.check(e)) >= 0 ? Bp(...e.map((e) => im(e)).map((e) => Vp.check(e) ? e.shape : [e]).flat(1)) : e.length === 1 ? e[0] : new zp(e), Vp = U(zp), Hp = () => !0, Up = W(Hp), Wp = U(dp, (e) => e.shape === Hp), Gp = W((e) => typeof e == "bigint"), Kp = W((e) => e === Gp), qp = W((e) => typeof e == "symbol");
W((e) => e === qp);
var Jp = W((e) => typeof e == "number"), Yp = W((e) => e === Jp), Xp = W((e) => typeof e == "string"), Zp = W((e) => e === Xp), Qp = W((e) => typeof e == "boolean"), $p = W((e) => e === Qp), em = pp(void 0);
U(fp, (e) => e.shape.length === 1 && e.shape[0] === void 0), pp(void 0);
var tm = pp(null), nm = U(fp, (e) => e.shape.length === 1 && e.shape[0] === null);
U(Uint8Array), U(up, (e) => e.shape === Uint8Array);
var rm = Bp(Jp, Xp, tm, em, Gp, Qp, qp);
(() => {
	let e = jp(Up), t = Ep(Xp, Up), n = Bp(Jp, Xp, tm, Qp, e, t);
	return e.shape = n, t.shape.values = n, n;
})();
var im = (e) => {
	if (Ip.check(e)) return e;
	if (wp.check(e)) {
		let t = {};
		for (let n in e) t[n] = im(e[n]);
		return Sp(t);
	} else if (Np.check(e)) return Bp(...e.map(im));
	else if (rm.check(e)) return pp(e);
	else if (Rp.check(e)) return U(e);
	/* c8 ignore next */
	qd();
}, am = qf ? () => {} : (e, t) => {
	let n = new sp();
	if (!t.check(e, n)) throw Gd(`Expected value to be of type ${t.constructor.name}.\n${n.toString()}`);
}, om = class {
	constructor(e) {
		this.patterns = [], this.$state = e;
	}
	if(e, t) {
		return this.patterns.push({
			if: im(e),
			h: t
		}), this;
	}
	else(e) {
		return this.if(Up, e);
	}
	done() {
		return (e, t) => {
			for (let n = 0; n < this.patterns.length; n++) {
				let r = this.patterns[n];
				if (r.if.check(e)) return r.h(e, t);
			}
			throw Gd("Unhandled pattern");
		};
	}
}, sm = ((e) => new om(e))(Up).if(Yp, (e, t) => ep(t, od, ad)).if(Zp, (e, t) => ip(t)).if($p, (e, t) => $f(t)).if(Kp, (e, t) => BigInt(ep(t, od, ad))).if(Vp, (e, t) => cm(t, ap(t, e.shape))).if(Cp, (e, t) => {
	let n = {};
	for (let r in e.shape) {
		let i = e.shape[r];
		if (yp.check(i)) {
			if ($f(t)) continue;
			i = i.shape;
		}
		n[r] = sm(i, t);
	}
	return n;
}).if(Mp, (e, t) => {
	let n = [], r = tp(t, 0, 42);
	for (let i = 0; i < r; i++) n.push(cm(t, e.shape));
	return n;
}).if(mp, (e, t) => ap(t, e.shape)).if(nm, (e, t) => null).if(Lp, (e, t) => {
	let n = cm(t, e.res);
	return () => n;
}).if(Wp, (e, t) => cm(t, ap(t, [
	Jp,
	Xp,
	tm,
	em,
	Gp,
	Qp,
	jp(Jp),
	Ep(Bp("a", "b", "c"), Jp)
]))).if(Dp, (e, t) => {
	let n = {}, r = ep(t, 0, 3);
	for (let i = 0; i < r; i++) {
		let r = cm(t, e.shape.keys);
		n[r] = cm(t, e.shape.values);
	}
	return n;
}).done(), cm = (e, t) => sm(im(t), e), lm = typeof document < "u" ? document : {};
W((e) => e.nodeType === mm), typeof DOMParser < "u" && new DOMParser(), W((e) => e.nodeType === dm), W((e) => e.nodeType === fm);
var um = (e) => Au(e, (e, t) => `${t}:${e};`).join(""), dm = lm.ELEMENT_NODE, fm = lm.TEXT_NODE;
lm.CDATA_SECTION_NODE, lm.COMMENT_NODE;
var pm = lm.DOCUMENT_NODE;
lm.DOCUMENT_TYPE_NODE;
var mm = lm.DOCUMENT_FRAGMENT_NODE;
W((e) => e.nodeType === pm);
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/eventloop.js
var hm = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), gm = (e, t) => new hm(setTimeout(t, e)), _m = Symbol, vm = _m(), ym = _m(), bm = _m(), xm = _m(), Sm = _m(), Cm = _m(), wm = _m(), Tm = _m(), Em = _m(), Dm = (e) => {
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
vf();
/* c8 ignore stop */
//#endregion
//#region node_modules/lib0/logging.js
var Om = {
	[vm]: Qf("font-weight", "bold"),
	[ym]: Qf("font-weight", "normal"),
	[bm]: Qf("color", "blue"),
	[Sm]: Qf("color", "green"),
	[xm]: Qf("color", "grey"),
	[Cm]: Qf("color", "red"),
	[wm]: Qf("color", "purple"),
	[Tm]: Qf("color", "orange"),
	[Em]: Qf("color", "black")
}, km = Jf ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = Du(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = Om[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = um(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : Dm, Am = (...e) => {
	/* c8 ignore next */
	console.log(...km(e)), Mm.forEach((t) => t.print(e));
}, jm = (...e) => {
	console.warn(...km(e)), e.unshift(Tm), Mm.forEach((t) => t.print(e));
}, Mm = Mu(), Nm = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), Pm = (e, t) => Nm(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), Fm = (e, t) => Nm(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), Im = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, Lm = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, Rm = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) Bh(e, i, o.clock, o.len, n);
	}
}), zm = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = Vu((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, Bm = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && zm(n, t.clock) !== null;
}, Vm = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? e[n - 1] = new Im(r.clock, Wu(r.len, i.clock + i.len - r.clock)) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, Hm = (e) => {
	let t = new Lm();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) Pu(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return Vm(t), t;
}, Um = (e, t, n, r) => {
	ku(e.clients, t, () => []).push(new Im(n, r));
}, Wm = () => new Lm(), Gm = (e) => {
	let t = Wm();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new Im(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, Km = (e, t) => {
	V(e.restEncoder, t.clients.size), Fu(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), V(e.restEncoder, t);
		let r = n.length;
		V(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, qm = (e) => {
	let t = new Lm(), n = H(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = H(e.restDecoder), r = H(e.restDecoder);
		if (r > 0) {
			let i = ku(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new Im(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, Jm = (e, t, n) => {
	let r = new Lm(), i = H(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = H(e.restDecoder), a = H(e.restDecoder), o = n.clients.get(i) || [], s = K(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && Um(r, i, s, a - s);
				let e = Ph(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, X_(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, X_(t, c, a - c.id.clock)), c.delete(t));
			} else Um(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new nh();
		return V(e.restEncoder, 0), Km(e, r), e.toUint8Array();
	}
	return null;
}, Ym = mf, Xm = class e extends Bu {
	constructor({ guid: e = _f(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = Ym(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new jh(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = yf((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => yf((e) => {
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
		return new Set(Fu(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return q(this, e, t);
	}
	get(e, t = J) {
		let n = ku(this.share, e, () => {
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
		return this.get(e, zg);
	}
	getText(e = "") {
		return this.get(e, o_);
	}
	getMap(e = "") {
		return this.get(e, Hg);
	}
	getXmlElement(e = "") {
		return this.get(e, d_);
	}
	getXmlFragment(e = "") {
		return this.get(e, l_);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, Fu(this.subdocs).forEach((e) => e.destroy());
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
}, Zm = class {
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
}, Qm = class extends Zm {
	constructor(e) {
		super(e), this.keys = [], H(e), this.keyClockDecoder = new uf(ef(e)), this.clientDecoder = new lf(ef(e)), this.leftClockDecoder = new uf(ef(e)), this.rightClockDecoder = new uf(ef(e)), this.infoDecoder = new cf(ef(e), tf), this.stringDecoder = new df(ef(e)), this.parentInfoDecoder = new cf(ef(e), tf), this.typeRefDecoder = new lf(ef(e)), this.lenDecoder = new lf(ef(e));
	}
	readLeftID() {
		return new hh(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new hh(this.clientDecoder.read(), this.rightClockDecoder.read());
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
		return sf(this.restDecoder);
	}
	readBuf() {
		return ef(this.restDecoder);
	}
	readJSON() {
		return sf(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, $m = class {
	constructor() {
		this.restEncoder = bd();
	}
	toUint8Array() {
		return Cd(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		V(this.restEncoder, e);
	}
	writeDsLen(e) {
		V(this.restEncoder, e);
	}
}, eh = class extends $m {
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
		Td(this.restEncoder, e);
	}
	writeString(e) {
		kd(this.restEncoder, e);
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
		Rd(this.restEncoder, e);
	}
	writeBuf(e) {
		jd(this.restEncoder, e);
	}
	writeJSON(e) {
		kd(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		kd(this.restEncoder, e);
	}
}, th = class {
	constructor() {
		this.restEncoder = bd(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return Cd(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, V(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && qd(), V(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, nh = class extends th {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Ud(), this.clientEncoder = new Vd(), this.leftClockEncoder = new Ud(), this.rightClockEncoder = new Ud(), this.infoEncoder = new zd(Td), this.stringEncoder = new Wd(), this.parentInfoEncoder = new zd(Td), this.typeRefEncoder = new Vd(), this.lenEncoder = new Vd();
	}
	toUint8Array() {
		let e = bd();
		return V(e, 0), jd(e, this.keyClockEncoder.toUint8Array()), jd(e, this.clientEncoder.toUint8Array()), jd(e, this.leftClockEncoder.toUint8Array()), jd(e, this.rightClockEncoder.toUint8Array()), jd(e, Cd(this.infoEncoder)), jd(e, this.stringEncoder.toUint8Array()), jd(e, Cd(this.parentInfoEncoder)), jd(e, this.typeRefEncoder.toUint8Array()), jd(e, this.lenEncoder.toUint8Array()), Ad(e, Cd(this.restEncoder)), Cd(e);
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
		Rd(this.restEncoder, e);
	}
	writeBuf(e) {
		jd(this.restEncoder, e);
	}
	writeJSON(e) {
		Rd(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, rh = (e, t, n, r) => {
	r = Wu(r, t[0].id.clock);
	let i = Ph(t, r);
	V(e.restEncoder, t.length - i), e.writeClient(n), V(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, ih = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		K(t, n) > e && r.set(n, e);
	}), Mh(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), V(e.restEncoder, r.size), Fu(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		rh(e, t.clients.get(n), n, r);
	});
}, ah = (e, t) => {
	let n = Du(), r = H(e.restDecoder);
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
					i[n] = new b_(G(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = H(e.restDecoder);
					i[n] = new nv(G(a, o), t), o += t;
					break;
				}
				default: {
					let s = (r & 192) == 0, c = new X(G(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, $_(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, oh = (e, t, n) => {
	let r = [], i = Fu(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new jh(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
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
		if (u.constructor !== nv) {
			let i = ku(d, u.id.client, () => K(t, u.id.client)) - u.id.clock;
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
		let e = new nh();
		return ih(e, s, /* @__PURE__ */ new Map()), V(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, sh = (e, t) => ih(e, t.doc.store, t.beforeState), ch = (e, t, n, r = new Qm(e)) => q(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = oh(e, i, ah(r, n)), o = i.pendingStructs;
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
			o.update = ng([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = Jm(r, e, i);
	if (i.pendingDs) {
		let t = new Qm(Zd(i.pendingDs));
		H(t.restDecoder);
		let n = Jm(t, e, i);
		s && n ? i.pendingDs = ng([s, n]) : i.pendingDs = s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, lh(e.doc, t);
	}
}, n, !1), lh = (e, t, n, r = Qm) => {
	let i = Zd(t);
	ch(i, e, n, new r(i));
}, uh = class {
	constructor() {
		this.l = [];
	}
}, dh = () => new uh(), fh = (e, t) => e.l.push(t), ph = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, mh = (e, t, n) => If(e.l, [t, n]), hh = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, gh = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, G = (e, t) => new hh(e, t), _h = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw qd();
}, vh = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, yh = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, bh = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, xh = (e, t, n = 0) => new bh(e, t, n), Sh = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = _h(e) : r = G(e._item.id.client, e._item.id.clock), new yh(r, i, t, n);
}, Ch = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return Sh(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return Sh(e, G(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return Sh(e, r.lastId, n);
		r = r.right;
	}
	return Sh(e, null, n);
}, wh = (e, t) => {
	let n = Fh(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, Th = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (K(r, i.client) <= i.clock) return null;
		let e = n ? J_(r, i) : wh(r, i), t = e.item;
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
			let { item: e } = n ? J_(r, a) : { item: Fh(r, a) };
			if (e instanceof X && e.content instanceof K_) c = e.content.type;
			else return null;
		} else throw qd();
		l = s >= 0 ? c._length : 0;
	}
	return xh(c, l, e.assoc);
}, Eh = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, Dh = (e, t) => new Eh(e, t);
Dh(Wm(), /* @__PURE__ */ new Map());
var Oh = (e) => Dh(Gm(e.store), Mh(e.store)), kh = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !Bm(t.ds, e.id), Ah = (e, t) => {
	let n = ku(e.meta, Ah, Mu), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < K(r, n) && Lh(e, G(n, t));
	}), Rm(e, t.ds, (e) => {}), n.add(t));
}, jh = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Mh = (e) => {
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
}, Nh = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw qd();
	}
	n.push(t);
}, Ph = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = Vu(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = Vu((n + r) / 2);
	}
	throw qd();
}, Fh = (e, t) => {
	let n = e.clients.get(t.client);
	return n[Ph(n, t.clock)];
}, Ih = (e, t, n) => {
	let r = Ph(t, n), i = t[r];
	return i.id.clock < n && i instanceof X ? (t.splice(r + 1, 0, X_(e, i, n - i.id.clock)), r + 1) : r;
}, Lh = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[Ih(e, n, t.clock)];
}, Rh = (e, t, n) => {
	let r = t.clients.get(n.client), i = Ph(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== b_ && r.splice(i + 1, 0, X_(e, a, n.clock - a.id.clock + 1)), a;
}, zh = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[Ph(r, t.id.clock)] = n;
}, Bh = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = Ih(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && Ih(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, Vh = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new Lm(), this.beforeState = Mh(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, Hh = (e, t) => t.deleteSet.clients.size === 0 && !ju(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (Vm(t.deleteSet), sh(e, t), Km(e, t.deleteSet), !0), Uh = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && ku(e.changed, t, Mu).add(n);
}, Wh = (e, t) => {
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
}, Gh = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = Ph(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof X && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, Kh = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = Uu(r.length - 1, 1 + Ph(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + Wh(r, e);
		}
	});
}, qh = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			Vm(a), n.afterState = Mh(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((t, r) => {
					r._dEH.l.length > 0 && (r._item === null || !r._item.deleted) && (t = t.filter((e) => e.target._item === null || !e.target._item.deleted), t.forEach((e) => {
						e.currentTarget = r, e._path = null;
					}), t.sort((e, t) => e.path.length - t.path.length), e.push(() => {
						mh(r._dEH, t, n);
					}));
				}), e.push(() => r.emit("afterTransaction", [n, r])), e.push(() => {
					n._needFormattingCleanup && r_(n);
				});
			}), If(e, []);
		} finally {
			r.gc && Gh(a, i, r.gcFilter), Kh(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = Wu(Ph(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + Wh(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = Ph(r, n);
				a + 1 < r.length && Wh(r, a + 1) > 1 || a > 0 && Wh(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Am(Tm, vm, "[yjs] ", ym, Cm, "Changed the client-id because another client seems to be using it."), r.clientID = Ym()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new eh();
				Hh(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new nh();
				Hh(e, n) && r.emit("updateV2", [
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
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : qh(e, t + 1);
		}
	}
}, q = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new Vh(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && qh(i, 0);
		}
	}
	return o;
}, Jh = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, Yh = (e, t, n) => {
	Rm(e, n.deletions, (n) => {
		n instanceof X && t.scope.some((t) => t === e.doc || vh(t, n)) && Y_(n, !1);
	});
}, Xh = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	q(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			Rm(n, o.insertions, (e) => {
				if (e instanceof X) {
					if (e.redone !== null) {
						let { item: t, diff: i } = J_(r, e.id);
						i > 0 && (t = Lh(n, G(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || vh(t, e)) && c.push(e);
				}
			}), Rm(n, o.deletions, (e) => {
				e instanceof X && a.some((t) => t === n.doc || vh(t, e)) && !Bm(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = Q_(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
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
}, Zh = class extends Bu {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = zu(e) ? e[0].doc : e instanceof Xm ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new Lm();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && Um(i, n, r, a);
			});
			let a = vf(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = Hm([t.deletions, e.deleteSet]), t.insertions = Hm([t.insertions, i]);
			} else r.push(new Jh(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), Rm(e, e.deleteSet, (t) => {
				t instanceof X && this.scope.some((n) => n === e.doc || vh(n, t)) && Y_(t, !0);
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
		e = zu(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof J ? e.doc !== this.doc : e !== this.doc) && jm("[yjs#509] Not same Y.Doc"), this.scope.push(e));
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
			e && (this.undoStack.forEach((e) => Yh(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => Yh(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
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
			e = Xh(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = Xh(this, this.redoStack, "redo");
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
function* Qh(e) {
	let t = H(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = H(e.restDecoder), n = e.readClient(), r = H(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = H(e.restDecoder);
				yield new nv(G(n, r), t), r += t;
			} else if (31 & t) {
				let i = (t & 192) == 0, a = new X(G(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, $_(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new b_(G(n, r), t), r += t;
			}
		}
	}
}
var $h = class {
	constructor(e, t) {
		this.gen = Qh(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === nv);
		return this.curr;
	}
}, eg = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, tg = (e, t) => {
	if (e.constructor === b_) {
		let { client: n, clock: r } = e.id;
		return new b_(G(n, r + t), e.length - t);
	} else if (e.constructor === nv) {
		let { client: n, clock: r } = e.id;
		return new nv(G(n, r + t), e.length - t);
	} else {
		let n = e, { client: r, clock: i } = n.id;
		return new X(G(r, i + t), null, G(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, ng = (e, t = Qm, n = nh) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(Zd(e))), i = r.map((e) => new $h(e, !0)), a = null, o = new n(), s = new eg(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === nv ? 1 : -1 : n;
		} else return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) ig(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) if (a.struct.constructor === nv) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
			else {
				ig(s, a.struct, a.offset);
				let e = n.id.clock - a.struct.id.clock - a.struct.length;
				a = {
					struct: new nv(G(t, a.struct.id.clock + a.struct.length), e),
					offset: 0
				};
			}
			else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === nv ? a.struct.length -= t : n = tg(n, t)), a.struct.mergeWith(n) || (ig(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== nv; n = e.next()) ig(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (ig(s, a.struct, a.offset), a = null), ag(s), Km(o, Hm(r.map((e) => qm(e)))), o.toUint8Array();
}, rg = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: Cd(e.encoder.restEncoder)
	}), e.encoder.restEncoder = bd(), e.written = 0);
}, ig = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && rg(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), V(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, ag = (e) => {
	rg(e);
	let t = e.encoder.restEncoder;
	V(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		V(t, r.written), Ad(t, r.restEncoder);
	}
}, og = "You must not compute changes after the event-handler fired.", sg = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= cg(this.currentTarget, this.target);
	}
	deletes(e) {
		return Bm(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw Gd(og);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) if (e !== null && this.deletes(e)) i = "delete", a = Nu(e.content.getContent());
						else return;
						else e !== null && this.deletes(e) ? (i = "update", a = Nu(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = Nu(r.content.getContent());
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
			if (this.transaction.doc._transactionCleanups.length === 0) throw Gd(og);
			let t = this.target, n = Mu(), r = Mu(), i = [];
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
}, cg = (e, t) => {
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
}, lg = () => {
	jm("Invalid access: Add Yjs type to a document before reading data.");
}, ug = 80, dg = 0, fg = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = dg++;
	}
}, pg = (e) => {
	e.timestamp = dg++;
}, mg = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = dg++;
}, hg = (e, t, n) => {
	if (e.length >= ug) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return mg(r, t, n), r;
	} else {
		let r = new fg(t, n);
		return e.push(r), r;
	}
}, gg = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => Hu(t - e.index) < Hu(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, pg(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && Hu(n.index - i) < r.parent.length / ug ? (mg(n, r, i), n) : hg(e._searchMarker, r, i);
}, _g = (e, t, n) => {
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
		(t < i.index || n > 0 && t === i.index) && (i.index = Wu(t, i.index + n));
	}
}, vg = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; ku(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	mh(r._eH, n, t);
}, J = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = dh(), this._dEH = dh(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw Kd();
	}
	clone() {
		throw Kd();
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
		fh(this._eH, e);
	}
	observeDeep(e) {
		fh(this._dEH, e);
	}
	unobserve(e) {
		ph(this._eH, e);
	}
	unobserveDeep(e) {
		ph(this._dEH, e);
	}
	toJSON() {}
}, yg = (e, t, n) => {
	e.doc ?? lg(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
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
}, bg = (e) => {
	e.doc ?? lg();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, xg = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && kh(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, Sg = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? lg(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, Cg = (e, t) => {
	let n = [];
	return Sg(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, wg = (e) => {
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
}, Tg = (e, t) => {
	e.doc ?? lg();
	let n = gg(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, Eg = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new P_(l)), i.integrate(e, 0), l = []);
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
					i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new x_(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case Xm:
					i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new E_(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof J) i = new X(G(o, K(s, o)), i, i && i.lastId, c, c && c.id, t, null, new K_(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, Dg = () => Gd("Length exceeded!"), Og = (e, t, n, r) => {
	if (n > t._length) throw Dg();
	if (n === 0) return t._searchMarker && _g(t._searchMarker, n, r.length), Eg(e, t, null, r);
	let i = n, a = gg(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && Lh(e, G(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && _g(t._searchMarker, i, r.length), Eg(e, t, o, r);
}, kg = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return Eg(e, t, r, n);
}, Ag = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = gg(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Lh(e, G(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && Lh(e, G(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw Dg();
	t._searchMarker && _g(t._searchMarker, i, -a + r);
}, jg = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, Mg = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new P_([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new P_([r]);
			break;
		case Uint8Array:
			s = new x_(r);
			break;
		case Xm:
			s = new E_(r);
			break;
		default: if (r instanceof J) s = new K_(r);
		else throw Error("Unexpected content type");
	}
	new X(G(o, K(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, Ng = (e, t) => {
	e.doc ?? lg();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Pg = (e) => {
	let t = {};
	return e.doc ?? lg(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, Fg = (e, t) => {
	e.doc ?? lg();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, Ig = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && kh(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, Lg = (e) => (e.doc ?? lg(), Pm(e._map.entries(), (e) => !e[1].deleted)), Rg = class extends sg {}, zg = class e extends J {
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
		return this.doc ?? lg(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), vg(this, e, new Rg(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : q(this.doc, (n) => {
			Og(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : q(this.doc, (t) => {
			kg(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : q(this.doc, (n) => {
			Ag(n, this, e, t);
		});
	}
	get(e) {
		return Tg(this, e);
	}
	toArray() {
		return bg(this);
	}
	slice(e = 0, t = this.length) {
		return yg(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof J ? e.toJSON() : e);
	}
	map(e) {
		return Cg(this, e);
	}
	forEach(e) {
		Sg(this, e);
	}
	[Symbol.iterator]() {
		return wg(this);
	}
	_write(e) {
		e.writeTypeRef(z_);
	}
}, Bg = (e) => new zg(), Vg = class extends sg {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, Hg = class e extends J {
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
		vg(this, e, new Vg(this, e, t));
	}
	toJSON() {
		this.doc ?? lg();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof J ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...Lg(this)].length;
	}
	keys() {
		return Fm(Lg(this), (e) => e[0]);
	}
	values() {
		return Fm(Lg(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return Fm(Lg(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? lg(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : q(this.doc, (t) => {
			jg(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : q(this.doc, (n) => {
			Mg(n, this, e, t);
		}), t;
	}
	get(e) {
		return Ng(this, e);
	}
	has(e) {
		return Fg(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : q(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				jg(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(B_);
	}
}, Ug = (e) => new Hg(), Wg = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Nf(e, t), Gg = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && qd(), this.right.content.constructor) {
			case Y:
				this.right.deleted || Yg(this.currentAttributes, this.right.content);
				break;
			default:
				this.right.deleted || (this.index += this.right.length);
				break;
		}
		this.left = this.right, this.right = this.right.right;
	}
}, Kg = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case Y:
				t.right.deleted || Yg(t.currentAttributes, t.right.content);
				break;
			default:
				t.right.deleted || (n < t.right.length && Lh(e, G(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
				break;
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, qg = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? gg(t, n) : null;
	return a ? Kg(e, new Gg(a.p.left, a.p, a.index, i), n - a.index) : Kg(e, new Gg(null, t._start, 0, i), n);
}, Jg = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Y && Wg(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new X(G(a, K(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new Y(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, Yg = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, Xg = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === Y && Wg(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, Zg = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!Wg(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new X(G(a, K(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new Y(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, Qg = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	Xg(n, i);
	let s = Zg(e, t, n, i), c = r.constructor === String ? new I_(r) : r instanceof J ? new K_(r) : new O_(r), { left: l, right: u, index: d } = n;
	t._searchMarker && _g(t._searchMarker, n.index, c.getLength()), u = new X(G(o, K(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), Jg(e, t, n, s);
}, $g = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	Xg(n, i);
	let s = Zg(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === Y));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case Y: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (Wg(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default:
				r < n.right.length && Lh(e, G(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
				break;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new X(G(o, K(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new I_(i)), n.right.integrate(e, 0), n.forward();
	}
	Jg(e, t, n, s);
}, e_ = (e, t, n, r, i) => {
	let a = t, o = Du();
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
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && Yg(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, t_ = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === Y) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, n_ = (e) => {
	let t = 0;
	return q(e.doc, (n) => {
		let r = e._start, i = e._start, a = Du(), o = Ou(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case Y:
					Yg(o, i.content);
					break;
				default:
					t += e_(n, r, i, a, o), a = Ou(o), r = i;
					break;
			}
			i = i.right;
		}
	}), t;
}, r_ = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && Bh(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === Y && e.constructor !== b_ && t.add(e.parent);
		});
	}
	q(n, (n) => {
		Rm(e, e.deleteSet, (e) => {
			if (e instanceof b_ || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === Y ? t.add(r) : t_(n, e);
		});
		for (let e of t) n_(e);
	});
}, i_ = (e, t, n) => {
	let r = n, i = Ou(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case K_:
			case O_:
			case I_:
				n < t.right.length && Lh(e, G(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
				break;
		}
		t.forward();
	}
	a && e_(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && _g(o._searchMarker, t.index, -r + n), t;
}, a_ = class extends sg {
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
								c > 0 && (e = { retain: c }, Af(o) || (e.attributes = Ef({}, o))), c = 0;
								break;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case K_:
						case O_:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case I_:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case Y: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (Wg(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), Wg(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								Wg(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (Wg(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), Yg(n, i.content));
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
}, o_ = class e extends J {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? lg(), this._length;
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
		let n = new a_(this, e, t);
		vg(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? lg();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === I_ && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : q(this.doc, (n) => {
			let r = new Gg(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && Qg(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && i_(n, r, a.delete) : $g(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? lg();
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
				if (kh(s, e) || t !== void 0 && kh(s, t)) switch (s.content.constructor) {
					case I_: {
						let r = i.get("ychange");
						e !== void 0 && !kh(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !kh(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case K_:
					case O_: {
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
						kh(s, e) && (c(), Yg(i, s.content));
						break;
				}
				s = s.right;
			}
			c();
		};
		return e || t ? q(a, (n) => {
			e && Ah(n, e), t && Ah(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : q(r, (r) => {
			let i = qg(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), Qg(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : q(r, (r) => {
			let i = qg(r, this, e, !n);
			Qg(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : q(n, (n) => {
			i_(n, qg(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : q(r, (r) => {
			let i = qg(r, this, e, !1);
			i.right !== null && $g(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : q(this.doc, (t) => {
			jg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : q(this.doc, (n) => {
			Mg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Ng(this, e);
	}
	getAttributes() {
		return Pg(this);
	}
	_write(e) {
		e.writeTypeRef(V_);
	}
}, s_ = (e) => new o_(), c_ = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? lg();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === d_ || t.constructor === l_) && t._start !== null) e = t._start;
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
}, l_ = class e extends J {
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
		return this.doc ?? lg(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new c_(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new c_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), Fu(new c_(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		vg(this, e, new p_(this, t, e));
	}
	toString() {
		return Cg(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), Sg(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : q(this.doc, (n) => {
			Og(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) q(this.doc, (n) => {
			let r = e && e instanceof J ? e._item : e;
			Eg(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw Gd("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : q(this.doc, (n) => {
			Ag(n, this, e, t);
		});
	}
	toArray() {
		return bg(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return Tg(this, e);
	}
	slice(e = 0, t = this.length) {
		return yg(this, e, t);
	}
	forEach(e) {
		Sg(this, e);
	}
	_write(e) {
		e.writeTypeRef(U_);
	}
}, u_ = (e) => new l_(), d_ = class e extends l_ {
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
		return Of(this.getAttributes(), (e, n) => {
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
			jg(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : q(this.doc, (n) => {
			Mg(n, this, e, t);
		});
	}
	getAttribute(e) {
		return Ng(this, e);
	}
	hasAttribute(e) {
		return Fg(this, e);
	}
	getAttributes(e) {
		return e ? Ig(this, e) : Pg(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return Sg(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(H_), e.writeKey(this.nodeName);
	}
}, f_ = (e) => new d_(e.readKey()), p_ = class extends sg {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, m_ = class e extends Hg {
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
		e.writeTypeRef(W_), e.writeKey(this.hookName);
	}
}, h_ = (e) => new m_(e.readKey()), g_ = class e extends o_ {
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
		e.writeTypeRef(G_);
	}
}, __ = (e) => new g_(), v_ = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw Kd();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw Kd();
	}
	integrate(e, t) {
		throw Kd();
	}
}, y_ = 0, b_ = class extends v_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Nh(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(y_), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, x_ = class e {
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
		throw Kd();
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
}, S_ = (e) => new x_(e.readBuf()), C_ = class e {
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
		Um(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, w_ = (e) => new C_(e.readLen()), T_ = (e, t) => new Xm({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), E_ = class e {
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
		return new e(T_(this.doc.guid, this.opts));
	}
	splice(e) {
		throw Kd();
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
}, D_ = (e) => new E_(T_(e.readString(), e.readAny())), O_ = class e {
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
		throw Kd();
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
}, k_ = (e) => new O_(e.readJSON()), Y = class e {
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
		throw Kd();
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
}, A_ = (e) => new Y(e.readKey(), e.readJSON()), j_ = class e {
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
}, M_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new j_(n);
}, N_ = Gf("node_env") === "development", P_ = class e {
	constructor(e) {
		this.arr = e, N_ && Ff(e);
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
}, F_ = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new P_(n);
}, I_ = class e {
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
}, L_ = (e) => new I_(e.readString()), R_ = [
	Bg,
	Ug,
	s_,
	f_,
	u_,
	h_,
	__
], z_ = 0, B_ = 1, V_ = 2, H_ = 3, U_ = 4, W_ = 5, G_ = 6, K_ = class e {
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
		throw Kd();
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
}, q_ = (e) => new K_(R_[e.readTypeRef()](e)), J_ = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = G(n.client, n.clock + r)), i = Fh(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof X);
	return {
		item: i,
		diff: r
	};
}, Y_ = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, X_ = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new X(G(r, i + n), t, G(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = G(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, Z_ = (e, t) => Lu(e, (e) => Bm(e.deletions, t)), Q_ = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return Lh(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || Q_(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = Lh(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Lh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : Lh(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else if (f = null, t.right && !i) {
		for (d = t; d !== null && d.right !== null && (d.right.redone || Bm(r, d.right.id) || Z_(a.undoStack, d.right.id) || Z_(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = Lh(e, d.redone);
		if (d && d.right !== null) return null;
	} else d = p._map.get(t.parentSub) || null;
	let m = G(c, K(s, c)), h = new X(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, Y_(h, !0), h.integrate(e, 0), h;
}, X = class e extends v_ {
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
		if (this.parent && this.parent.constructor === hh && this.id.client !== this.parent.client && this.parent.clock >= K(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = Rh(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = Lh(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === b_ || this.right && this.right.constructor === b_) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === hh) {
			let e = Fh(n, this.parent);
			e.constructor === b_ ? this.parent = null : this.parent = e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = Rh(e, e.doc.store, G(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), gh(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (gh(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(Fh(e.doc.store, n.origin))) r.has(Fh(e.doc.store, n.origin)) || (t = n, r.clear());
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
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Nh(e.doc.store, this), this.content.integrate(e, this), Uh(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new b_(this.id, this.length).integrate(e, 0);
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
		if (this.constructor === e.constructor && gh(e.origin, this.lastId) && this.right === e && gh(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), Um(e.deleteSet, this.id.client, this.id.clock, this.length), Uh(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw qd();
		this.content.gc(e), t ? zh(e, this, new b_(this.id, this.length)) : this.content = new C_(this.length);
	}
	write(e, t) {
		let n = t > 0 ? G(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = _h(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === hh ? (e.writeParentInfo(!1), e.writeLeftID(t)) : qd();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, $_ = (e, t) => ev[t & 31](e), ev = [
	() => {
		qd();
	},
	w_,
	M_,
	S_,
	L_,
	k_,
	A_,
	q_,
	F_,
	D_,
	() => {
		qd();
	}
], tv = 10, nv = class extends v_ {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		qd();
	}
	write(e, t) {
		e.writeInfo(tv), V(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, rv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, iv = "__ $YJS$ __";
rv[iv] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), rv[iv] = !0;
//#endregion
//#region node_modules/lib0/mutex.js
var av = () => {
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
}, ov = /[\uD800-\uDBFF]/, sv = /[\uDC00-\uDFFF]/, cv = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && ov.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && sv.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, lv = (e, t) => e >>> t | e << 32 - t, uv = (e) => lv(e, 2) ^ lv(e, 13) ^ lv(e, 22), dv = (e) => lv(e, 6) ^ lv(e, 11) ^ lv(e, 25), fv = (e) => lv(e, 7) ^ lv(e, 18) ^ e >>> 3, pv = (e) => lv(e, 17) ^ lv(e, 19) ^ e >>> 10, mv = new Uint32Array([
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
]), hv = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), gv = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(hv), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = pv(t[e - 2]) + t[e - 7] + fv(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + dv(o) + (o & s ^ ~o & c) + mv[e] + t[e] >>> 0, d = uv(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
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
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / id, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, _v = (e) => new gv().digest(e), Z = new Ct("y-sync"), vv = new Ct("y-undo");
new Ct("yjs-cursor");
var yv = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, bv = (e) => Yf(yv(_v(Xf(e)))), xv = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !Bm(t.ds, e.id), Sv = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], Cv = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = Mu();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, hf(t));
	}
	return e.get(n);
}, wv = (e, { colors: t = Sv, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new Ov(e, a), c = new nr({
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
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && gm(0, () => {
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
						let t = vv.getState(e.state), n = t && t.undoManager;
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
}, Tv = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) if (t.type === "all") e.setSelection(new ar(e.doc));
	else if (t.type === "node") {
		let r = Qv(n.doc, n.type, t.anchor, n.mapping);
		e.setSelection(Ev(e, r));
	} else {
		let r = Qv(n.doc, n.type, t.anchor, n.mapping), i = Qv(n.doc, n.type, t.head, n.mapping);
		r !== null && i !== null && e.setSelection(Et.between(e.doc.resolve(r), e.doc.resolve(i)));
	}
}, Ev = (e, t) => {
	let n = e.doc.resolve(t);
	return n.nodeAfter ? qt.create(e.doc, t) : Et.near(n);
}, Dv = (e, t) => ({
	type: t.selection.jsonID,
	anchor: Xv(t.selection.anchor, e.type, e.mapping),
	head: Xv(t.selection.head, e.type, e.mapping)
}), Ov = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = av(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Dv(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (Bf && this._domSelectionInView === null && (gm(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = lm.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= Dh(Wm(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta(Z, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => Av(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(e), 0, 0));
			t.setMeta(Z, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => Av(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(t), 0, 0));
			if (e) {
				let t = Uu(Wu(e.anchor, 0), n.doc.content.size), r = Uu(Wu(e.head, 0), n.doc.content.size);
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
		if (e ||= Oh(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && qd(), r = new Xm({ gc: !1 }), lh(r, t), t = Oh(r), lh(r, e), e = Oh(r), i._item === null) {
			let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
			i = r.getXmlFragment(e);
		} else {
			let e = r.store.clients.get(i._item.id.client) ?? [];
			i = e[Ph(e, i._item.id.clock)].content.type;
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					Rm(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: Cv(n.colorMapping, n.colors, r)
					};
				}, s = xg(i, new Eh(t.ds, e.sv)).map((n) => !n._item.deleted || xv(n._item, e) || xv(n._item, t) ? Av(n, this.prosemirrorView.state.schema, {
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
			Rm(t, t.deleteSet, (e) => {
				if (e.constructor === X) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => kv(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new hn(vn.from(n), 0, 0));
			Tv(r, this.beforeTransactionSelection, this), r = r.setMeta(Z, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof Zh
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			Jv(this.doc, this.type, e, this), this.beforeTransactionSelection = Dv(this, this.prosemirrorView.state);
		}, Z);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, kv = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof d_) return Av(e, t, n, r, i, a);
		throw Kd();
	}
	return o;
}, Av = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof d_) {
			let s = kv(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof o_ && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = jv(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : xg(e, new Eh(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (xv(e._item, r) ? xv(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Z), n.mapping.delete(e), null;
	}
}, jv = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, Kv(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Z), null;
	}
	return o;
}, Mv = (e, t) => {
	let n = new g_(), r = e.map((e) => ({
		insert: e.text,
		attributes: qv(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, Nv = (e, t) => {
	let n = new d_(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, Lv(e).map((e) => Pv(e, t))), t.mapping.set(n, e), n;
}, Pv = (e, t) => e instanceof Array ? Mv(e, t) : Nv(e, t), Fv = (e) => typeof e == "object" && !!e, Iv = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === Object.keys(t).filter((e) => t[e] !== null).length;
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || Fv(o) && Fv(s) && Iv(o, s);
	}
	return r;
}, Lv = (e) => {
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
}, Rv = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Df(e.attributes || {}).length === t[n].marks.length && jf(e.attributes, (e, r) => {
		let i = Gv(r), a = t[n].marks;
		return a.find((e) => e.type.name === i) ? Iv(e, a.find((e) => e.type.name === i)?.attrs) : !1;
	}));
}, zv = (e, t) => {
	if (e instanceof d_ && !(t instanceof Array) && Yv(e, t)) {
		let n = Lv(t);
		return e._length === n.length && Iv(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => zv(e, n[t]));
	}
	return e instanceof g_ && t instanceof Array && Rv(e, t);
}, Bv = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), Vv = (e, t, n) => {
	let r = e.toArray(), i = Lv(t), a = i.length, o = r.length, s = Uu(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (Bv(n.mapping.get(e), t)) u = !0;
		else if (!zv(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (Bv(n.mapping.get(e), t)) u = !0;
		else if (!zv(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, Hv = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof I_ ? t += n.content.str : n.content instanceof Y && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, Uv = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = Hv(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, qv(e.marks, n))
	})), { insert: o, remove: s, index: c } = cv(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, Wv = /(.*)(--[a-zA-Z0-9+/=]{8})$/, Gv = (e) => Wv.exec(e)?.[1] ?? e, Kv = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(Gv(r), e[r]));
	return n;
}, qv = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = ku(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${bv(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, Jv = (e, t, n, r) => {
	if (t instanceof d_ && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof d_) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = Lv(n), a = i.length, o = t.toArray(), s = o.length, c = Uu(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!Bv(r.mapping.get(e), t)) if (zv(e, t)) r.mapping.set(e, t);
		else break;
	}
	for (; u + l + 1 < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!Bv(r.mapping.get(e), t)) if (zv(e, t)) r.mapping.set(e, t);
		else break;
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof g_ && c instanceof Array) Rv(n, c) || Uv(n, c, r), l += 1;
			else {
				let i = n instanceof d_ && Yv(n, c), a = d instanceof d_ && Yv(d, f);
				if (i && a) {
					let e = Vv(n, c, r), t = Vv(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (Jv(e, n, c, r), l += 1) : a ? (Jv(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [Pv(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof g_ ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(Pv(i[t], r));
			t.insert(l, e);
		}
	}, Z);
}, Yv = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, Xv = (e, t, n) => {
	if (e === 0) return Ch(t, 0, -1);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof g_) {
			if (r._length >= e) return Ch(r, e, -1);
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
				if (e === 1 && r._length === 0 && i > 1) return new yh(r._item === null ? null : r._item.id, r._item === null ? _h(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new yh(r._item === null ? null : r._item.id, r._item === null ? _h(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw qd();
		if (e === 0 && r.constructor !== g_ && r !== t) return Zv(r._item.parent, r._item);
	}
	return Ch(t, t._length, -1);
}, Zv = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = _h(e) : n = G(e._item.id.client, e._item.id.clock), new yh(n, r, t.id);
}, Qv = (e, t, n, r) => {
	let i = Th(n, e);
	if (i === null || i.type !== t && !vh(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === g_) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof g_ ? o += n._length : o += r.get(n).nodeSize;
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
				t.deleted || (e instanceof g_ ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
}, $v = (e) => {
	let t = vv.getState(e).undoManager;
	if (t != null) return t.undo(), !0;
}, ey = (e) => {
	let t = vv.getState(e).undoManager;
	if (t != null) return t.redo(), !0;
}, ty = new Set(["paragraph"]), ny = (e, t) => !(e instanceof X) || !(e.content instanceof K_) || !(e.content.type instanceof o_ || e.content.type instanceof d_ && t.has(e.content.type.nodeName)) || e.content.type._length === 0, ry = ({ protectedNodes: e = ty, trackedOrigins: t = [], undoManager: n = null } = {}) => new nr({
	key: vv,
	state: {
		init: (r, i) => {
			let a = Z.getState(i), o = n || new Zh(a.type, {
				trackedOrigins: new Set([Z].concat(t)),
				deleteFilter: (t) => ny(t, e),
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
				prevSel: Dv(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = Z.getState(e.state), n = vv.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, vv.getState(e.state).prevSel);
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
function iy(e) {
	return !!e.getMeta(Z);
}
function ay(e, t) {
	let n = Z.getState(e);
	return Qv(n.doc, n.type, t, n.binding.mapping) || 0;
}
function oy(e, t) {
	let n = Z.getState(e);
	return Xv(t, n.type, n.binding.mapping);
}
var sy = class e extends Bn {
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
function cy(e, t) {
	return new sy(e, oy(t, e));
}
function ly(e, t, n) {
	let r = e instanceof sy ? e.yRelativePosition : null;
	if (iy(t) && r) return {
		position: new sy(ay(n, r), r),
		mapResult: null
	};
	let i = sn(e, t), a = i.position.position;
	return {
		position: new sy(a, r ?? oy(n, a)),
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
		this.editor.utils.getUpdatedPosition = (e, t) => ly(e, t, this.editor.state), this.editor.utils.createMappablePosition = (e) => cy(e, this.editor.state);
	},
	addCommands() {
		return {
			undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), vv.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? $v(t) : !0),
			redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), vv.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? ey(t) : !0)
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
		let e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), t = ry(this.options.yUndoOptions), n = t.spec.view;
		return t.spec.view = (e) => {
			let { undoManager: t } = vv.getState(e.state);
			t.restore &&= (t.restore(), () => {});
			let r = n ? n(e) : void 0;
			return { destroy: () => {
				let e = t.trackedOrigins.has(t), n = t._observers;
				t.restore = () => {
					e && t.trackedOrigins.add(t), t.doc.on("afterTransaction", t.afterTransactionHandler), t._observers = n;
				}, r?.destroy && r.destroy();
			} };
		}, [
			wv(e, {
				...this.options.ySyncOptions,
				onFirstRender: this.options.onFirstRender
			}),
			t,
			this.editor.options.enableContentCheck && new nr({
				key: new Ct("filterInvalidContent"),
				filterTransaction: (t) => {
					if (!iy(t)) return !0;
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
function uy(e) {
	if (!e.length) return Xn.empty;
	let t = [], n = e[0].$from.node(0);
	return e.forEach((e) => {
		let n = e.$from.pos, r = e.$from.nodeAfter;
		r && t.push(Vt.node(n, n + r.nodeSize, { class: "ProseMirror-selectednoderange" }));
	}), Xn.create(n, t);
}
function dy(e, t, n) {
	let r = n.isText || n.isAtom ? 0 : 1;
	return {
		start: e + r,
		end: e + t - r
	};
}
function fy(e, t, n, r = {}) {
	let i = [], a = e.node(0), { extendOnBoundaryOverlap: o = !0 } = r;
	typeof n == "number" && n >= 0 || (n = e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos));
	let s = new ze(e, t, n), c = s.depth === 0 ? 0 : a.resolve(s.start).posAtIndex(0);
	return s.parent.forEach((n, r) => {
		let l = c + r, u = l + n.nodeSize, d = dy(l, n.nodeSize, n), f = o ? t.pos >= d.start && e.pos <= d.end : t.pos > d.start && e.pos < d.end;
		if (l < s.start || l >= s.end || !f) return;
		let p = new $n(a.resolve(l), a.resolve(u));
		i.push(p);
	}), i;
}
var py = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return new my(e.resolve(this.anchor), e.resolve(this.head));
	}
}, my = class e extends We {
	constructor(e, t, n, r = 1) {
		let { doc: i } = e, a = e === t, o = e.pos === i.content.size && t.pos === i.content.size, s = a && !o ? i.resolve(t.pos + (r > 0 ? 1 : -1)) : t, c = a && o ? i.resolve(e.pos - (r > 0 ? 1 : -1)) : e, l = fy(c.min(s), c.max(s), n), u = s.pos >= e.pos ? l[0].$from : l[l.length - 1].$to, d = s.pos >= e.pos ? l[l.length - 1].$to : l[0].$from;
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
		return new py(this.anchor, this.head);
	}
};
my.prototype.visible = !1;
function hy(e) {
	return e instanceof my;
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
				if (!hy(a)) {
					let e = my.create(i, s, c, t, -1);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendBackwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Shift-ArrowDown": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, selection: a, tr: o } = r, { anchor: s, head: c } = a;
				if (!hy(a)) {
					let e = my.create(i, s, c, t);
					return o.setSelection(e), n.dispatch(o), !0;
				}
				let l = a.extendForwards();
				return o.setSelection(l), n.dispatch(o), !0;
			},
			"Mod-a": ({ editor: e }) => {
				let { depth: t } = this.options, { view: n, state: r } = e, { doc: i, tr: a } = r, o = my.create(i, 0, i.content.size, t);
				return a.setSelection(o), n.dispatch(a), !0;
			}
		};
	},
	onSelectionUpdate() {
		let { selection: e } = this.editor.state;
		hy(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
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
						let c = my.create(r, o.pos, s.pos, this.options.depth);
						a.setSelection(c), e.dispatch(a);
					}, { once: !0 }), !1;
				} },
				decorations: (n) => {
					let { selection: r } = n, i = hy(r);
					if (e = !1, !t) return i ? (e = !0, uy(r.ranges)) : null;
					let { $from: a, $to: o } = r;
					if (!i && a.sameParent(o)) return null;
					let s = fy(a, o, this.options.depth);
					return s.length ? (e = !0, uy(s)) : null;
				}
			}
		})];
	}
});
//#endregion
//#region node_modules/@tiptap/extension-drag-handle/dist/index.js
function gy(e) {
	let t = "", n = getComputedStyle(e);
	for (let e = 0; e < n.length; e += 1) t += `${n[e]}:${n.getPropertyValue(n[e])};`;
	return t;
}
function _y(e) {
	let t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
	return n.forEach((e, t) => {
		r[t].style.cssText = gy(e);
	}), t;
}
var vy = [
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
], yy = {
	edges: ["left", "top"],
	threshold: 12,
	strength: 500
};
function by(e) {
	return e === void 0 || e === "left" ? { ...yy } : e === "right" ? {
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
		...yy,
		...e
	};
}
function xy(e, t, n) {
	if (n.edges.length === 0) return !1;
	let r = t.getBoundingClientRect(), { threshold: i, edges: a } = n;
	return a.some((t) => t === "left" ? e.x - r.left < i : t === "right" ? r.right - e.x < i : t === "top" ? e.y - r.top < i : t === "bottom" ? r.bottom - e.y < i : !1);
}
function Sy(e, t, n, r) {
	return !t || n.edges.length === 0 ? 0 : xy(e, t, n) ? n.strength * r : 0;
}
var Cy = 1e3;
function wy(e, t, n, r) {
	let i = Cy, a = !1;
	if (t.every((t) => {
		let n = t.evaluate(e);
		return i -= n, i <= 0 ? (a = !0, !1) : !0;
	}), a) return -1;
	let o = e.view.nodeDOM(e.pos);
	return i -= Sy(r, o, n, e.depth), i <= 0 ? -1 : i;
}
function Ty(e, t, n) {
	return Array.from({ length: t }, (e, n) => t - 1 - n).some((t) => n.includes(e.node(t).type.name));
}
function Ey(e, t, n) {
	if (!Number.isFinite(t.x) || !Number.isFinite(t.y)) return null;
	let r = e.posAtCoords({
		left: t.x,
		top: t.y
	});
	if (!r) return null;
	let { doc: i } = e.state, a = i.resolve(r.pos), o = [];
	n.defaultRules && o.push(...vy), o.push(...n.rules);
	let s = Array.from({ length: a.depth }, (e, t) => a.depth - t).map((r) => {
		let i = a.node(r), s = a.before(r);
		if (n.allowedContainers && r > 0 && !Ty(a, r, n.allowedContainers)) return null;
		let c = r > 0 ? a.node(r - 1) : null, l = r > 0 ? a.index(r - 1) : 0, u = c ? c.childCount : 1, d = wy({
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
		if (n.allowedContainers && (p = Ty(a, l, n.allowedContainers)), p) {
			let r = wy({
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
function Dy(e, t) {
	let n = e;
	for (; n?.parentElement && n.parentElement !== t.dom;) n = n.parentElement;
	return n?.parentElement === t.dom ? n : void 0;
}
function Oy(e) {
	return Number.isFinite(e.top) && Number.isFinite(e.bottom) && Number.isFinite(e.left) && Number.isFinite(e.right) && e.width > 0 && e.height > 0;
}
function ky(e, t, n, r = 5) {
	if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
	let i = e.dom, a = i.firstElementChild, o = i.lastElementChild;
	if (!a || !o) return null;
	let s = a.getBoundingClientRect(), c = o.getBoundingClientRect();
	if (!Oy(s) || !Oy(c)) return null;
	let l = Math.min(Math.max(s.top + r, n), c.bottom - r), u = .5, d = Math.abs(s.left - c.left) < u, f = Math.abs(s.right - c.right) < u, p = s;
	d && f && (p = s);
	let m = Math.min(Math.max(p.left + r, t), p.right - r);
	return !Number.isFinite(m) || !Number.isFinite(l) ? null : {
		x: m,
		y: l
	};
}
var Ay = (e) => {
	let { x: t, y: n, editor: r, nestedOptions: i } = e, { view: a, state: o } = r, s = ky(a, t, n, 5);
	if (!s) return {
		resultElement: null,
		resultNode: null,
		pos: null
	};
	let { x: c, y: l } = s;
	if (i?.enabled) {
		let e = Ey(a, {
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
		let t = Dy(e, a);
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
function jy(e, t) {
	let n = e.nodeDOM(t);
	if (n instanceof Element && n !== e.dom) return n;
	let { node: r, offset: i } = e.domAtPos(t), a = r.childNodes[i];
	return a instanceof Element ? a : r instanceof Element ? r : r.nodeType === Node.TEXT_NODE && r.parentElement ? r.parentElement : null;
}
function My(e, t) {
	let n = jy(e, t);
	return (n ? getComputedStyle(n).direction : getComputedStyle(e.dom).direction) || "ltr";
}
function Ny(e) {
	var t;
	(t = e.parentNode) == null || t.removeChild(e);
}
function Py(e, t) {
	return e === "rtl" ? t : 0;
}
function Fy(e, t, n, r) {
	let { doc: i } = t.view.state;
	if (n?.enabled && r?.node && r.pos >= 0) {
		let e = r.pos, t = r.pos + r.node.nodeSize;
		return [{
			$from: i.resolve(e),
			$to: i.resolve(t)
		}];
	}
	let a = Ay({
		editor: t,
		x: e.clientX,
		y: e.clientY,
		direction: "right",
		nestedOptions: n
	});
	if (!a.resultNode || a.pos === null) return [];
	let o = a.resultNode.isText || a.resultNode.isAtom ? 0 : -1;
	return fy(i.resolve(a.pos), i.resolve(a.pos + a.resultNode.nodeSize + o), 0, { extendOnBoundaryOverlap: !1 });
}
function Iy(e, t, n, r) {
	let { view: i } = t;
	if (!e.dataTransfer) return;
	let { empty: a, $from: o, $to: s } = i.state.selection, c = Fy(e, t, n, r), l = fy(o, s, 0, { extendOnBoundaryOverlap: !1 }), u = l.some((e) => c.find((t) => t.$from === e.$from && t.$to === e.$to)), d = a || !u ? c : l;
	if (!d.length) return;
	let { tr: f } = i.state, p = document.createElement("div"), m = d[0].$from.pos, h = d[d.length - 1].$to.pos, g = My(i, m);
	p.setAttribute("dir", g);
	let _ = n?.enabled && r?.node, v, y;
	_ ? (v = i.state.doc.slice(m, h), y = qt.create(i.state.doc, m)) : (y = my.create(i.state.doc, m, h), v = y.content()), d.forEach((e) => {
		let t = jy(i, e.$from.pos);
		if (!t) return;
		let n = _y(t);
		n.style.margin = "0", p.append(n);
	}), p.style.position = "absolute", p.style.top = "-10000px", document.body.append(p), e.dataTransfer.clearData();
	let b = Py(g, p.getBoundingClientRect().width);
	e.dataTransfer.setDragImage(p, b, 0);
	let x = !1, S = () => {
		x || (x = !0, Ny(p), document.removeEventListener("drop", S), document.removeEventListener("dragend", S));
	}, C = y instanceof qt ? y : void 0;
	i.dragging = {
		slice: v,
		move: !0,
		node: C
	}, f.setSelection(y), i.dispatch(f), document.addEventListener("drop", S), document.addEventListener("dragend", S);
}
var Ly = (e, t) => {
	let n = e.resolve(t), { depth: r } = n;
	return r === 0 ? t : n.pos - n.parentOffset - 1;
}, Ry = (e, t) => {
	let n = e.nodeAt(t), r = e.resolve(t), { depth: i } = r, a = n;
	for (; i > 0;) {
		let e = r.node(i);
		--i, i === 0 && (a = e);
	}
	return a;
}, zy = (e, t) => {
	let n = Z.getState(e);
	return n ? Xv(t, n.type, n.binding.mapping) : null;
}, By = (e, t) => {
	let n = Z.getState(e);
	return n ? Qv(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, Vy = (e, t) => {
	let n = t;
	for (; n?.parentNode && n.parentNode !== e.dom;) n = n.parentNode;
	return n;
}, Hy = new Ct("dragHandle"), Uy = ({ pluginKey: e = Hy, element: t, editor: n, computePositionConfig: r, getReferencedVirtualElement: i, onNodeChange: a, onElementDragStart: o, onElementDragEnd: s, nestedOptions: c }) => {
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
		Eu(i?.() || { getBoundingClientRect: () => e.getBoundingClientRect() }, t, r).then((e) => {
			Object.assign(t.style, {
				position: e.strategy,
				left: `${e.x}px`,
				top: `${e.y}px`
			});
		});
	}
	function y(e) {
		o?.(e), Iy(e, n, c, {
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
					if (e.docChanged && f !== -1 && t) if (iy(e)) {
						let e = By(o, p);
						e !== f && (f = e);
					} else {
						let t = e.mapping.map(f);
						t !== f && (f = t, p = zy(o, f));
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
						if (o = Vy(e, o), o === e.dom || o?.nodeType !== 1) return;
						let s = e.posAtDOM(o, 0), c = Ry(n.state.doc, s), l = Ly(n.state.doc, s);
						d = c, f = l, p = zy(e.state, f), a?.({
							editor: n,
							node: d,
							pos: f
						}), v(o);
					},
					destroy() {
						t.removeEventListener("dragstart", y), t.removeEventListener("dragend", b), document.removeEventListener("drop", x), m && (cancelAnimationFrame(m), m = null, h = null), t && Ny(l);
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
						let i = Ay({
							x: t,
							y: r,
							direction: "right",
							editor: n,
							nestedOptions: c
						});
						if (!i.resultElement) return;
						let o = i.resultElement, s = i.resultNode, l = i.pos;
						if (!c?.enabled) {
							if (o = Vy(e, o), o === e.dom || o?.nodeType !== 1) return;
							let t = e.posAtDOM(o, 0);
							s = Ry(n.state.doc, t), l = Ly(n.state.doc, t);
						}
						s !== d && (d = s, f = l ?? -1, p = zy(e.state, f), a?.({
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
function Wy(e) {
	return e === !1 || e === void 0 ? {
		enabled: !1,
		rules: [],
		defaultRules: !0,
		allowedContainers: void 0,
		edgeDetection: by("none")
	} : e === !0 ? {
		enabled: !0,
		rules: [],
		defaultRules: !0,
		allowedContainers: void 0,
		edgeDetection: by("left")
	} : {
		enabled: !0,
		rules: e.rules ?? [],
		defaultRules: e.defaultRules ?? !0,
		allowedContainers: e.allowedContainers,
		edgeDetection: by(e.edgeDetection)
	};
}
var Gy = {
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
		let e = this.options.render(), t = Wy(this.options.nested);
		return [Uy({
			computePositionConfig: {
				...Gy,
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
var Ky = /* @__PURE__ */ Si({
	name: "DragHandleVue",
	props: {
		pluginKey: {
			type: [String, Object],
			default: Hy
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
			let u = Wy(l), d = Uy({
				editor: t,
				element: n.value,
				pluginKey: i,
				computePositionConfig: {
					...Gy,
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
		}), () => ss("div", {
			ref: n,
			class: e.class,
			style: { position: "absolute" },
			"data-dragging": "false"
		}, t.default?.call(t));
	}
}), qy = (e) => M({
	find: /--$/,
	replace: e ?? "—"
}), Jy = (e) => M({
	find: /\.\.\.$/,
	replace: e ?? "…"
}), Yy = (e) => M({
	find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
	replace: e ?? "“"
}), Xy = (e) => M({
	find: /"$/,
	replace: e ?? "”"
}), Zy = (e) => M({
	find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
	replace: e ?? "‘"
}), Qy = (e) => M({
	find: /'$/,
	replace: e ?? "’"
}), $y = (e) => M({
	find: /<-$/,
	replace: e ?? "←"
}), eb = (e) => M({
	find: /->$/,
	replace: e ?? "→"
}), tb = (e) => M({
	find: /\(c\)$/,
	replace: e ?? "©"
}), nb = (e) => M({
	find: /\(tm\)$/,
	replace: e ?? "™"
}), rb = (e) => M({
	find: /\(sm\)$/,
	replace: e ?? "℠"
}), ib = (e) => M({
	find: /\(r\)$/,
	replace: e ?? "®"
}), ab = (e) => M({
	find: /(?:^|\s)(1\/2)\s$/,
	replace: e ?? "½"
}), ob = (e) => M({
	find: /\+\/-$/,
	replace: e ?? "±"
}), sb = (e) => M({
	find: /!=$/,
	replace: e ?? "≠"
}), cb = (e) => M({
	find: /<<$/,
	replace: e ?? "«"
}), lb = (e) => M({
	find: />>$/,
	replace: e ?? "»"
}), ub = (e) => M({
	find: /\d+\s?([*x])\s?\d+$/,
	replace: e ?? "×"
}), db = (e) => M({
	find: /\^2$/,
	replace: e ?? "²"
}), fb = (e) => M({
	find: /\^3$/,
	replace: e ?? "³"
}), pb = (e) => M({
	find: /(?:^|\s)(1\/4)\s$/,
	replace: e ?? "¼"
}), mb = (e) => M({
	find: /(?:^|\s)(3\/4)\s$/,
	replace: e ?? "¾"
}), hb = dn.create({
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
		this.options.emDash !== !1 && e.push(qy(this.options.emDash)), this.options.ellipsis !== !1 && e.push(Jy(this.options.ellipsis));
		let t = this.editor.options.textDirection === "rtl";
		if (this.options.doubleQuotes?.rtl) {
			let { open: t, close: n } = this.options.doubleQuotes.rtl;
			e.push(Yy(t)), e.push(Xy(n));
		} else t ? (e.push(Yy("”")), e.push(Xy("“"))) : (this.options.openDoubleQuote !== !1 && e.push(Yy(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && e.push(Xy(this.options.closeDoubleQuote)));
		if (this.options.singleQuotes?.rtl) {
			let { open: t, close: n } = this.options.singleQuotes.rtl;
			e.push(Zy(t)), e.push(Qy(n));
		} else t ? (e.push(Zy("’")), e.push(Qy("‘"))) : (this.options.openSingleQuote !== !1 && e.push(Zy(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && e.push(Qy(this.options.closeSingleQuote)));
		return this.options.leftArrow !== !1 && e.push($y(this.options.leftArrow)), this.options.rightArrow !== !1 && e.push(eb(this.options.rightArrow)), this.options.copyright !== !1 && e.push(tb(this.options.copyright)), this.options.trademark !== !1 && e.push(nb(this.options.trademark)), this.options.servicemark !== !1 && e.push(rb(this.options.servicemark)), this.options.registeredTrademark !== !1 && e.push(ib(this.options.registeredTrademark)), this.options.oneHalf !== !1 && e.push(ab(this.options.oneHalf)), this.options.plusMinus !== !1 && e.push(ob(this.options.plusMinus)), this.options.notEqual !== !1 && e.push(sb(this.options.notEqual)), this.options.laquo !== !1 && e.push(cb(this.options.laquo)), this.options.raquo !== !1 && e.push(lb(this.options.raquo)), this.options.multiplication !== !1 && e.push(ub(this.options.multiplication)), this.options.superscriptTwo !== !1 && e.push(db(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && e.push(fb(this.options.superscriptThree)), this.options.oneQuarter !== !1 && e.push(pb(this.options.oneQuarter)), this.options.threeQuarters !== !1 && e.push(mb(this.options.threeQuarters)), e;
	}
}), gb = /(^|[^`])`([^`]+)`(?!`)$/, _b = /(^|[^`])`([^`]+)`(?!`)/g, vb = Yt.create({
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
			find: gb,
			type: this.type
		})];
	},
	addPasteRules() {
		return [kt({
			find: _b,
			type: this.type
		})];
	}
}), yb = 4, bb = /^```([a-z]+)?[\s\n]$/, xb = /^~~~([a-z]+)?[\s\n]$/, Sb = Kn.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: yb,
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
				let t = this.options.tabSize ?? yb, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? yb, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
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
			find: bb,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), Nn({
			find: xb,
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
}), Cb = Kn.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), wb = Kn.create({
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
}), Tb = Kn.create({
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
}), Eb = "&nbsp;", Db = "\xA0", Ob = Kn.create({
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
		return n.length === 1 && n[0].type === "text" && (n[0].raw === Eb || n[0].text === Eb || n[0].raw === Db || n[0].text === Db) && r.length === 1 && r[0].type === "text" && (r[0].text === Eb || r[0].text === Db) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t, n) => {
		if (!e) return "";
		let r = Array.isArray(e.content) ? e.content : [];
		if (r.length === 0) {
			let e = Array.isArray(n?.previousNode?.content) ? n.previousNode.content : [];
			return n?.previousNode?.type === "paragraph" && e.length === 0 ? Eb : "";
		}
		return t.renderChildren(r);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), kb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Ab = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, jb = Yt.create({
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
			find: kb,
			type: this.type
		})];
	},
	addPasteRules() {
		return [kt({
			find: Ab,
			type: this.type
		})];
	}
}), Mb = Kn.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), Nb = dn.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(ur.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(lr.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(_r.configure(this.options.bulletList)), this.options.code !== !1 && e.push(vb.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(Sb.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(Cb.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(xr.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(Sr.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(wb.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(dr.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(yr.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(Tb.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(fr.configure(this.options.italic)), this.options.listItem !== !1 && e.push(hr.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(gr.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(pr.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(mr.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(Ob.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(jb.configure(this.options.strike)), this.options.text !== !1 && e.push(Mb.configure(this.options.text)), this.options.underline !== !1 && e.push(vr.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(br.configure(this.options?.trailingNode)), e;
	}
});
//#endregion
//#region node_modules/@tiptap/vue-3/dist/index.js
function Pb(e) {
	return ce((t, n) => ({
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
var Fb = class extends En {
	constructor(e = {}) {
		return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Pb(this.view.state), this.reactiveExtensionStorage = Pb(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
			this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
		}), fe(this);
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
}, Ib = /* @__PURE__ */ Si({
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
				let e = m(t.value);
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
		return ss("div", { ref: (e) => {
			this.rootEl = e;
		} });
	}
});
//#endregion
//#region node_modules/@tiptap/vue-3/dist/menus/index.js
function Lb(e, t) {
	let n = Math.min(e.top, t.top), r = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left), a = Math.max(e.right, t.right) - i, o = r - n;
	return new DOMRect(i, n, a, o);
}
var Rb = class {
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
		return this.floatingUIOptions.flip && e.push(xu(typeof this.floatingUIOptions.flip == "boolean" ? void 0 : this.floatingUIOptions.flip)), this.floatingUIOptions.shift && e.push(bu(typeof this.floatingUIOptions.shift == "boolean" ? void 0 : this.floatingUIOptions.shift)), this.floatingUIOptions.offset && e.push(vu(typeof this.floatingUIOptions.offset == "boolean" ? void 0 : this.floatingUIOptions.offset)), this.floatingUIOptions.arrow && e.push(wu(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(Su(typeof this.floatingUIOptions.size == "boolean" ? void 0 : this.floatingUIOptions.size)), this.floatingUIOptions.autoPlacement && e.push(yu(typeof this.floatingUIOptions.autoPlacement == "boolean" ? void 0 : this.floatingUIOptions.autoPlacement)), this.floatingUIOptions.hide && e.push(Cu(typeof this.floatingUIOptions.hide == "boolean" ? void 0 : this.floatingUIOptions.hide)), this.floatingUIOptions.inline && e.push(Tu(typeof this.floatingUIOptions.inline == "boolean" ? void 0 : this.floatingUIOptions.inline)), e;
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
			let c = o === s ? o.getBoundingClientRect() : Lb(o.getBoundingClientRect(), s.getBoundingClientRect());
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
		e && Eu(e, this.element, {
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
}, zb = (e) => new nr({
	key: typeof e.pluginKey == "string" ? new Ct(e.pluginKey) : e.pluginKey,
	view: (t) => new Rb({
		view: t,
		...e
	})
}), Bb = /* @__PURE__ */ Si({
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
				t.registerPlugin(zb({
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
		}), () => ss("div", {
			ref: r,
			...n
		}, t.default?.call(t));
	}
}), Vb = {
	height: "20",
	width: "20",
	viewBox: "0 0 20 20"
}, Hb = ["stroke-dasharray"], Ub = /* @__PURE__ */ Si({
	__name: "CharacterCount",
	props: {
		editor: {},
		limit: {}
	},
	setup(e) {
		let t = e, n = z(() => Math.round(100 / t.limit * t.editor.storage.characterCount.characters()));
		return (t, r) => (I(), L("div", { class: k(["tiptap-character-count", { "tiptap-character-count--warning": e.editor.storage.characterCount.characters() === e.limit }]) }, [
			(I(), L("svg", Vb, [
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
				}, null, 8, Hb),
				r[1] ||= Oo("circle", {
					r: "6",
					cx: "10",
					cy: "10",
					fill: "var(--tiptap-color-surface)"
				}, null, -1)
			])),
			Mo(" " + Ee(e.editor.storage.characterCount.characters()) + " / " + Ee(e.limit) + " characters ", 1),
			r[2] ||= Oo("br", null, null, -1),
			Mo(" " + Ee(e.editor.storage.characterCount.words()) + " words ", 1)
		], 2));
	}
}), Wb = Symbol("headlessui.useid"), Gb = 0, Kb = Ci ?? function() {
	return Zr(Wb, () => `${++Gb}`)();
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
function qb(e, t, ...n) {
	if (e in t) {
		let r = t[e];
		return typeof r == "function" ? r(...n) : r;
	}
	let r = /* @__PURE__ */ Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e) => `"${e}"`).join(", ")}.`);
	throw Error.captureStackTrace && Error.captureStackTrace(r, qb), r;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/env.js
var Jb = Object.defineProperty, Yb = (e, t, n) => t in e ? Jb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Xb = (e, t, n) => (Yb(e, typeof t == "symbol" ? t : t + "", n), n), Zb = new class {
	constructor() {
		Xb(this, "current", this.detect()), Xb(this, "currentId", 0);
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
function Qb(e) {
	if (Zb.isServer) return null;
	if (e instanceof Node) return e.ownerDocument;
	if (e != null && e.hasOwnProperty("value")) {
		let t = Q(e);
		if (t) return t.ownerDocument;
	}
	return document;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/focus-management.js
var $b = [
	"[contentEditable=true]",
	"[tabindex]",
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"iframe",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])"
].map((e) => `${e}:not([tabindex='-1'])`).join(","), ex = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ex || {}), tx = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(tx || {}), nx = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(nx || {});
function rx(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll($b)).sort((e, t) => Math.sign((e.tabIndex || 2 ** 53 - 1) - (t.tabIndex || 2 ** 53 - 1)));
}
var ix = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ix || {});
function ax(e, t = 0) {
	return e === Qb(e)?.body ? !1 : qb(t, {
		0() {
			return e.matches($b);
		},
		1() {
			let t = e;
			for (; t !== null;) {
				if (t.matches($b)) return !0;
				t = t.parentElement;
			}
			return !1;
		}
	});
}
function ox(e) {
	let t = Qb(e);
	Ir(() => {
		t && !ax(t.activeElement, 0) && cx(e);
	});
}
var sx = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(sx || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
	e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
	e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function cx(e) {
	e?.focus({ preventScroll: !0 });
}
var lx = ["textarea", "input"].join(",");
function ux(e) {
	return (e?.matches)?.call(e, lx) ?? !1;
}
function dx(e, t = (e) => e) {
	return e.slice().sort((e, n) => {
		let r = t(e), i = t(n);
		if (r === null || i === null) return 0;
		let a = r.compareDocumentPosition(i);
		return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	});
}
function fx(e, t) {
	return px(rx(), t, { relativeTo: e });
}
function px(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
	let a = (Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e?.ownerDocument) ?? document, o = Array.isArray(e) ? n ? dx(e) : e : rx(e);
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
	return t & 6 && ux(f) && f.select(), 2;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/platform.js
function mx() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function hx() {
	return /Android/gi.test(window.navigator.userAgent);
}
function gx() {
	return mx() || hx();
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function _x(e, t, n) {
	Zb.isServer || ei((r) => {
		document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function vx(e, t, n) {
	Zb.isServer || ei((r) => {
		window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function yx(e, t, n = z(() => !0)) {
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
		return !ax(a, ix.Loose) && a.tabIndex !== -1 && r.preventDefault(), t(r, a);
	}
	let i = A(null);
	_x("pointerdown", (e) => {
		n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target);
	}, !0), _x("mousedown", (e) => {
		n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target);
	}, !0), _x("click", (e) => {
		gx() || (i.value &&= (r(e, () => i.value), null));
	}, !0), _x("touchend", (e) => r(e, () => e.target instanceof HTMLElement ? e.target : null), !0), vx("blur", (e) => r(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function bx(e, t) {
	if (e) return e;
	let n = t ?? "button";
	if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function xx(e, t) {
	let n = A(bx(e.value.type, e.value.as));
	return Ri(() => {
		n.value = bx(e.value.type, e.value.as);
	}), ei(() => {
		var e;
		n.value || Q(t) && Q(t) instanceof HTMLButtonElement && !((e = Q(t)) != null && e.hasAttribute("type")) && (n.value = "button");
	}), n;
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function Sx(e) {
	return [e.screenX, e.screenY];
}
function Cx() {
	let e = A([-1, -1]);
	return {
		wasMoved(t) {
			let n = Sx(t);
			return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
		},
		update(t) {
			e.value = Sx(t);
		}
	};
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function wx({ container: e, accept: t, walk: n, enabled: r }) {
	ei(() => {
		let i = e.value;
		if (!i || r !== void 0 && !r.value) return;
		let a = Qb(e);
		if (!a) return;
		let o = Object.assign((e) => t(e), { acceptNode: t }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
		for (; s.nextNode();) n(s.currentNode);
	});
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/render.js
var Tx = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Tx || {}), Ex = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ex || {});
function Dx({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...i }) {
	var a;
	let o = Ax(r, n), s = Object.assign(i, { props: o });
	return e || t & 2 && o.static ? Ox(s) : t & 1 ? qb((a = o.unmount) == null || a ? 0 : 1, {
		0() {
			return null;
		},
		1() {
			return Ox({
				...i,
				props: {
					...o,
					hidden: !0,
					style: { display: "none" }
				}
			});
		}
	}) : Ox(s);
}
function Ox({ props: e, attrs: t, slots: n, slot: r, name: i }) {
	let { as: a, ...o } = jx(e, ["unmount", "static"]), s = n.default?.call(n, r), c = {};
	if (r) {
		let e = !1, t = [];
		for (let [n, i] of Object.entries(r)) typeof i == "boolean" && (e = !0), i === !0 && t.push(n);
		e && (c["data-headlessui-state"] = t.join(" "));
	}
	if (a === "template") {
		if (s = kx(s ?? []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
			let [e, ...n] = s ?? [];
			if (!Mx(e) || n.length > 0) throw Error([
				"Passing props on \"template\"!",
				"",
				`The current component <${i} /> is rendering a "template".`,
				"However we need to passthrough the following props:",
				Object.keys(o).concat(Object.keys(t)).map((e) => e.trim()).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e.localeCompare(t)).map((e) => `  - ${e}`).join("\n"),
				"",
				"You can apply a few solutions:",
				["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"template\".", "Render a single element as the child so that we can forward the props onto that element."].map((e) => `  - ${e}`).join("\n")
			].join("\n"));
			let r = Ax(e.props ?? {}, o, c), a = jo(e, r, !0);
			for (let e in r) e.startsWith("on") && (a.props ||= {}, a.props[e] = r[e]);
			return a;
		}
		return Array.isArray(s) && s.length === 1 ? s[0] : s;
	}
	return ss(a, Object.assign({}, o, c), { default: () => s });
}
function kx(e) {
	return e.flatMap((e) => e.type === P ? kx(e.children) : [e]);
}
function Ax(...e) {
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
function jx(e, t = []) {
	let n = Object.assign({}, e);
	for (let e of t) e in n && delete n[e];
	return n;
}
function Mx(e) {
	return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
//#endregion
//#region node_modules/@headlessui/vue/dist/internal/open-closed.js
var Nx = Symbol("Context"), Px = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Px || {});
function Fx() {
	return Zr(Nx, null);
}
function Ix(e) {
	Xr(Nx, e);
}
//#endregion
//#region node_modules/@headlessui/vue/dist/keyboard.js
var $ = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($ || {});
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function Lx(e) {
	throw Error("Unexpected object: " + e);
}
var Rx = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Rx || {});
function zx(e, t) {
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
		default: Lx(e);
	}
}
//#endregion
//#region node_modules/@headlessui/vue/dist/utils/get-text-value.js
var Bx = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Vx(e) {
	let t = e.innerText ?? "", n = e.cloneNode(!0);
	if (!(n instanceof HTMLElement)) return t;
	let r = !1;
	for (let e of n.querySelectorAll("[hidden],[aria-hidden],[role=\"img\"]")) e.remove(), r = !0;
	let i = r ? n.innerText ?? "" : t;
	return Bx.test(i) && (i = i.replace(Bx, "")), i;
}
function Hx(e) {
	let t = e.getAttribute("aria-label");
	if (typeof t == "string") return t.trim();
	let n = e.getAttribute("aria-labelledby");
	if (n) {
		let e = n.split(" ").map((e) => {
			let t = document.getElementById(e);
			if (t) {
				let e = t.getAttribute("aria-label");
				return typeof e == "string" ? e.trim() : Vx(t).trim();
			}
			return null;
		}).filter(Boolean);
		if (e.length > 0) return e.join(", ");
	}
	return Vx(e).trim();
}
//#endregion
//#region node_modules/@headlessui/vue/dist/hooks/use-text-value.js
function Ux(e) {
	let t = A(""), n = A("");
	return () => {
		let r = Q(e);
		if (!r) return "";
		let i = r.innerText;
		if (t.value === i) return n.value;
		let a = Hx(r).trim().toLowerCase();
		return t.value = i, n.value = a, a;
	};
}
//#endregion
//#region node_modules/@headlessui/vue/dist/components/menu/menu.js
var Wx = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wx || {}), Gx = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Gx || {});
function Kx(e) {
	requestAnimationFrame(() => requestAnimationFrame(e));
}
var qx = Symbol("MenuContext");
function Jx(e) {
	let t = Zr(qx, null);
	if (t === null) {
		let t = /* @__PURE__ */ Error(`<${e} /> is missing a parent <Menu /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, Jx), t;
	}
	return t;
}
var Yx = /* @__PURE__ */ Si({
	name: "Menu",
	props: { as: {
		type: [Object, String],
		default: "template"
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = A(1), i = A(null), a = A(null), o = A([]), s = A(""), c = A(null), l = A(1);
		function u(e = (e) => e) {
			let t = c.value === null ? null : o.value[c.value], n = dx(e(o.value.slice()), (e) => Q(e.dataRef.domRef)), r = t ? n.indexOf(t) : null;
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
				let r = u(), i = zx(e === Rx.Specific ? {
					focus: Rx.Specific,
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
		return yx([i, a], (e, t) => {
			var n;
			d.closeMenu(), ax(t, ix.Loose) || (e.preventDefault(), (n = Q(i)) == null || n.focus());
		}, z(() => r.value === 0)), Xr(qx, d), Ix(z(() => qb(r.value, {
			0: Px.Open,
			1: Px.Closed
		}))), () => Dx({
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
}), Xx = /* @__PURE__ */ Si({
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
		let i = e.id ?? `headlessui-menu-button-${Kb()}`, a = Jx("MenuButton");
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
						(e = Q(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(Rx.First);
					});
					break;
				case $.ArrowUp:
					e.preventDefault(), e.stopPropagation(), a.openMenu(), Ir(() => {
						var e;
						(e = Q(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(Rx.Last);
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
			e.disabled || (a.menuState.value === 0 ? (a.closeMenu(), Ir(() => Q(a.buttonRef)?.focus({ preventScroll: !0 }))) : (t.preventDefault(), a.openMenu(), Kx(() => Q(a.itemsRef)?.focus({ preventScroll: !0 }))));
		}
		let l = xx(z(() => ({
			as: e.as,
			type: t.type
		})), a.buttonRef);
		return () => {
			let r = { open: a.menuState.value === 0 }, { ...u } = e;
			return Dx({
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
}), Zx = /* @__PURE__ */ Si({
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
		let i = e.id ?? `headlessui-menu-items-${Kb()}`, a = Jx("MenuItems"), o = A(null);
		r({
			el: a.itemsRef,
			$el: a.itemsRef
		}), wx({
			container: z(() => Q(a.itemsRef)),
			enabled: z(() => a.menuState.value === 0),
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
					a.closeMenu(), ox(Q(a.buttonRef));
					break;
				case $.ArrowDown: return e.preventDefault(), e.stopPropagation(), a.goToItem(Rx.Next);
				case $.ArrowUp: return e.preventDefault(), e.stopPropagation(), a.goToItem(Rx.Previous);
				case $.Home:
				case $.PageUp: return e.preventDefault(), e.stopPropagation(), a.goToItem(Rx.First);
				case $.End:
				case $.PageDown: return e.preventDefault(), e.stopPropagation(), a.goToItem(Rx.Last);
				case $.Escape:
					e.preventDefault(), e.stopPropagation(), a.closeMenu(), Ir(() => Q(a.buttonRef)?.focus({ preventScroll: !0 }));
					break;
				case $.Tab:
					e.preventDefault(), e.stopPropagation(), a.closeMenu(), Ir(() => fx(Q(a.buttonRef), e.shiftKey ? ex.Previous : ex.Next));
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
		let l = Fx(), u = z(() => l === null ? a.menuState.value === 0 : (l.value & Px.Open) === Px.Open);
		return () => {
			var r;
			let o = { open: a.menuState.value === 0 }, { ...l } = e;
			return Dx({
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
				features: Tx.RenderStrategy | Tx.Static,
				visible: u.value,
				name: "MenuItems"
			});
		};
	}
}), Qx = /* @__PURE__ */ Si({
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
		let i = e.id ?? `headlessui-menu-item-${Kb()}`, a = Jx("MenuItem"), o = A(null);
		r({
			el: o,
			$el: o
		});
		let s = z(() => a.activeItemIndex.value === null ? !1 : a.items.value[a.activeItemIndex.value].id === i), c = Ux(o), l = z(() => ({
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
			a.closeMenu(), ox(Q(a.buttonRef));
		}
		function d() {
			if (e.disabled) return a.goToItem(Rx.Nothing);
			a.goToItem(Rx.Specific, i);
		}
		let f = Cx();
		function p(e) {
			f.update(e);
		}
		function m(t) {
			f.wasMoved(t) && (e.disabled || s.value || a.goToItem(Rx.Specific, i, 0));
		}
		function h(t) {
			f.wasMoved(t) && (e.disabled || s.value && a.goToItem(Rx.Nothing));
		}
		return () => {
			let { disabled: r, ...c } = e, l = {
				active: s.value,
				disabled: r,
				close: a.closeMenu
			};
			return Dx({
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
}), $x = ["innerHTML"], eS = "typo3-backend-icon", tS = /* @__PURE__ */ Si({
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
		}, r = z(() => n[t.icon] || "");
		return (e, n) => r.value ? (I(), L("span", {
			key: 0,
			class: "icon-wrapper",
			style: ke({
				width: t.size,
				height: t.size
			}),
			innerHTML: r.value
		}, null, 12, $x)) : (I(), Co(Yi(eS), {
			key: 1,
			identifier: t.icon,
			size: "small",
			style: ke({
				width: t.size,
				height: t.size
			})
		}, null, 8, ["identifier", "style"]));
	}
}), nS = { class: "tiptap-sr-only" }, rS = ["onClick"], iS = /* @__PURE__ */ Si({
	__name: "Dropdown",
	props: {
		label: {},
		iconIdentifier: {},
		editorDomNode: {},
		items: {}
	},
	emits: ["open", "close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = A(null), a = A(null), o = A("not-calculated"), s = z(() => n.items.some((e) => !e.isDisabled)), c = z(() => n.items.some((e) => e.isActive));
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
		return (t, n) => (I(), Co(m(Yx), {
			as: "div",
			class: "tiptap-dropdown"
		}, {
			default: qr(() => [R(m(Xx), {
				ref_key: "dropdownButtonRef",
				ref: a,
				class: k(["tiptap-dropdown__button", { "tiptap-dropdown__button--active": c.value }]),
				disabled: !s.value
			}, {
				default: qr(() => [
					Oo("span", nS, Ee(e.label), 1),
					R(tS, {
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
			}, 8, ["class", "disabled"]), R(Ss, {
				"enter-active-class": "transition-enter-active",
				"enter-from-class": "transition-enter-from",
				"enter-to-class": "transition-enter-to",
				"leave-active-class": "transition-leave-active",
				"leave-from-class": "transition-leave-from",
				"leave-to-class": "transition-leave-to",
				onAfterLeave: n[0] ||= () => u("close"),
				onAfterEnter: n[1] ||= () => u("open")
			}, {
				default: qr(() => [R(m(Zx), {
					ref_key: "dropdownContentRef",
					ref: i,
					class: k(["tiptap-dropdown__content", {
						"tiptap-dropdown__content--bottom-left": o.value === "bottom-left",
						"tiptap-dropdown__content--bottom-right": o.value === "bottom-right"
					}])
				}, {
					default: qr(() => [(I(!0), L(P, null, Qi(e.items, (e, t) => (I(), Co(m(Qx), {
						key: `item-${t}`,
						as: "template"
					}, {
						default: qr(() => [Oo("button", {
							class: k(["tiptap-dropdown__content-button", { "tiptap-dropdown__content-button--active": e.isActive }]),
							onClick: e.action
						}, [e.icon ? (I(), Co(tS, {
							key: 0,
							icon: e.icon,
							size: "16px"
						}, null, 8, ["icon"])) : No("", !0), Oo("span", null, Ee(e.label), 1)], 10, rS)]),
						_: 2
					}, 1024))), 128))]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			})]),
			_: 1
		}));
	}
}), aS = /* @__PURE__ */ Si({
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
			let a = await fetch(e);
			if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
			let o = await a.text(), s = document.createElement("style");
			s.textContent = `.tiptap { ${o} }`, s.dataset.source = e, t.appendChild(s), i.value.push(s), r.value.push(e);
		}
		return Hi(() => {
			i.value.forEach((e) => {
				e.parentNode && e.parentNode.removeChild(e);
			});
		}), (e, t) => (I(), L("div", {
			ref_key: "componentRef",
			ref: n
		}, null, 512));
	}
}), oS = a({
	id: t(),
	contentCss: n(t()).optional(),
	plugins: n(a({
		path: t(),
		config: s(t(), r()).optional()
	})).optional(),
	enableContentDragAndDrop: e().default(!1),
	linkBrowserUrl: t(),
	enableDebugMode: e().default(!1)
}), sS = {
	key: 0,
	class: "tiptap-container"
}, cS = {
	key: 0,
	class: "tiptap-toolbar"
}, lS = {
	key: 0,
	class: "tiptap-toolbar__group"
}, uS = { key: 0 }, dS = [
	"title",
	"disabled",
	"onClick"
], fS = { class: "tiptap-sr-only" }, pS = { key: 1 }, mS = { class: "tiptap-bubble-menu" }, hS = {
	key: 0,
	class: "tiptap-toolbar__group"
}, gS = { key: 0 }, _S = [
	"title",
	"disabled",
	"onClick"
], vS = { class: "tiptap-sr-only" }, yS = { key: 5 }, bS = /* @__PURE__ */ gc(/* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ Si({
	__name: "TipTapEditor.ce",
	props: { options: { type: String } },
	setup(e) {
		let t = e, n = _(), r = v(n), i = A(), a = A(), o = A(), s = A(), l = A(), u = A(!1), d = A(0), f = A(!1), p = A(!1), h = z(() => !a.value || u.value || f.value ? !1 : a.value.bubbleMenu.some((e) => e.commands.length > 0)), g = z(() => r.filter((e) => e.element.toLowerCase() === l.value?.tagName.toLowerCase()));
		function _() {
			try {
				let e = JSON.parse(t.options || "{}"), n = oS.safeParse(e);
				if (!n.success) throw Error(`Invalid options: ${JSON.stringify(n.error.issues)}`);
				return n.data;
			} catch (e) {
				throw Error(`Failed to parse options: ${e.message}`);
			}
		}
		function v(e) {
			let t = e.plugins?.find((e) => e.path.endsWith("styles.js") || e.path.endsWith("styles.ts"));
			if (!t) return [];
			let n = Oe.safeParse(t.config);
			if (!n.success) throw Error(`Invalid styles plugin config: ${JSON.stringify(n.error.issues)}`);
			return n.data.styles;
		}
		function y(e) {
			return e.replace(/(\s*<p>(\s|&nbsp;)*<\/p>)+\s*$/, "");
		}
		function b() {
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
		async function x() {
			return Promise.all(n.plugins?.map(async (e) => {
				let t = await import(
					/* @vite-ignore */
					e.path
);
				if (!t.default || typeof t.default != "function") throw Error(`Plugin ${e.path} does not have a default export or it is not a function.`);
				return t.default(e.config);
			}) ?? []);
		}
		function S(e) {
			return u.value && e.id !== "source" ? !0 : e?.status?.isDisabled?.({
				editor: i.value,
				linkBrowserUrl: n.linkBrowserUrl
			}) ?? !1;
		}
		function C(e) {
			return e.status && e.status.isVisible ? e.status.isVisible({
				editor: i.value,
				linkBrowserUrl: n.linkBrowserUrl
			}) : !0;
		}
		return Ri(async () => {
			a.value = c(await x()), await Ir();
			let e = o.value?.assignedElements()[0];
			if (!e || !(e instanceof HTMLTextAreaElement)) throw Error("No textarea found in slot \"content\".");
			s.value = e;
			let t = new Event("change", {
				bubbles: !0,
				cancelable: !0
			});
			i.value = new Fb({
				content: s.value.value,
				extensions: [
					Nb.configure({
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
					hb,
					...a.value?.extensions ?? []
				],
				onUpdate: () => {
					!i.value || !s.value || (u.value = wr(i.value), s.value.value = u.value ? i.value.getText() : y(i.value.getHTML()), s.value.dispatchEvent(t));
				}
			}), i.value.on("parentNodeChanged", (e) => {
				e.tagName === "doc" ? l.value = void 0 : l.value = e;
			});
			let n = i.value?.extensionManager?.extensions.find((e) => e.name === "characterCount");
			n && n.options.limit && (p.value = { characterLimit: n.options.limit }), b();
		}), Hi(() => i.value?.destroy()), (e, t) => (I(), L(P, null, [i.value ? (I(), L("div", sS, [
			a.value.toolbar.some((e) => e.commands.length > 0) ? (I(), L("nav", cS, [(I(!0), L(P, null, Qi(a.value.toolbar, (e, t) => (I(), L(P, { key: `tiptap-command-group-${t}` }, [e.commands.length > 0 ? (I(), L("ol", lS, [e.dropdown ? (I(), L("li", uS, [(I(), Co(iS, {
				key: u.value,
				label: e.dropdown.label,
				"editor-dom-node": i.value.view.dom,
				"icon-identifier": e.dropdown.iconIdentifier,
				items: e.commands.filter(C).map((e) => ({
					label: e.label,
					isActive: e?.status?.isActive?.({
						editor: i.value,
						linkBrowserUrl: m(n).linkBrowserUrl
					}) ?? !1,
					isDisabled: S(e),
					icon: e.iconIdentifier,
					action: () => e.onExecute({
						editor: i.value,
						linkBrowserUrl: m(n).linkBrowserUrl
					})
				}))
			}, null, 8, [
				"label",
				"editor-dom-node",
				"icon-identifier",
				"items"
			]))])) : (I(!0), L(P, { key: 1 }, Qi(e.commands, (t) => (I(), L("li", { key: `tiptap-group-${e.id}-command-${t.id}` }, [C(t) ? (I(), L("button", {
				key: u.value,
				title: t.label,
				class: k(["tiptap-toolbar__group-command", { "is-active": t?.status?.isActive?.({
					editor: i.value,
					linkBrowserUrl: m(n).linkBrowserUrl
				}) ?? !1 }]),
				disabled: S(t),
				onClick: (e) => t.onExecute({
					editor: i.value,
					linkBrowserUrl: m(n).linkBrowserUrl
				})
			}, [Oo("span", fS, Ee(t.label), 1), R(tS, {
				icon: t.iconIdentifier,
				size: "16px"
			}, null, 8, ["icon"])], 10, dS)) : No("", !0)]))), 128))])) : No("", !0)], 64))), 128))])) : No("", !0),
			a.value && h.value ? (I(), L("nav", pS, [R(m(Bb), {
				editor: i.value,
				options: { onHide: () => d.value += 1 }
			}, {
				default: qr(() => [Oo("div", mS, [(I(!0), L(P, null, Qi(a.value.bubbleMenu, (e, t) => (I(), L(P, { key: `tiptap-command-group-${t}` }, [e.commands.some((e) => C(e)) ? (I(), L("ol", hS, [e.dropdown ? (I(), L("li", gS, [(I(), Co(iS, {
					key: `${u.value}-${d.value}`,
					label: e.dropdown.label,
					"icon-identifier": e.dropdown.iconIdentifier,
					"editor-dom-node": i.value.view.dom,
					items: e.commands.filter(C).map((e) => ({
						label: e.label,
						isActive: e?.status?.isActive?.({
							editor: i.value,
							linkBrowserUrl: m(n).linkBrowserUrl
						}) ?? !1,
						isDisabled: S(e),
						icon: e.iconIdentifier,
						action: () => e.onExecute({
							editor: i.value,
							linkBrowserUrl: m(n).linkBrowserUrl
						})
					}))
				}, null, 8, [
					"label",
					"icon-identifier",
					"editor-dom-node",
					"items"
				]))])) : (I(!0), L(P, { key: 1 }, Qi(e.commands, (t) => Jr((I(), L("li", { key: `tiptap-group-${e.id}-command-${t.id}` }, [(I(), L("button", {
					key: u.value,
					title: t.label,
					class: k(["tiptap-toolbar__group-command", { "is-active": t?.status?.isActive?.({
						editor: i.value,
						linkBrowserUrl: m(n).linkBrowserUrl
					}) ?? !1 }]),
					disabled: S(t),
					onClick: (e) => t.onExecute({
						editor: i.value,
						linkBrowserUrl: m(n).linkBrowserUrl
					})
				}, [Oo("span", vS, Ee(t.label), 1), R(tS, {
					icon: t.iconIdentifier,
					size: "16px"
				}, null, 8, ["icon"])], 10, _S))])), [[Bs, C(t)]])), 128))])) : No("", !0)], 64))), 128))])]),
				_: 1
			}, 8, ["editor", "options"])])) : No("", !0),
			m(n).enableContentDragAndDrop ? (I(), Co(m(Ky), {
				key: 2,
				editor: i.value
			}, {
				default: qr(() => [...t[0] ||= [Oo("div", { class: "custom-drag-handle" }, null, -1)]]),
				_: 1
			}, 8, ["editor"])) : No("", !0),
			R(m(Ib), {
				editor: i.value,
				class: k([{ "pl-9": m(n).enableContentDragAndDrop }, "tiptap-editor-content"])
			}, null, 8, ["editor", "class"]),
			p.value ? (I(), Co(Ub, {
				key: 3,
				editor: i.value,
				limit: p.value.characterLimit
			}, null, 8, ["editor", "limit"])) : No("", !0),
			m(n) && m(n).contentCss ? (I(), Co(aS, {
				key: 4,
				stylesheets: m(n).contentCss
			}, null, 8, ["stylesheets"])) : No("", !0),
			m(n).enableDebugMode ? (I(), L("pre", yS, Ee(g.value), 1)) : No("", !0)
		])) : No("", !0), $i(e.$slots, "default", {
			ref_key: "slotRef",
			ref: o
		})], 64));
	}
}), [["styles", [".text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.tiptap-container{--tiptap-color-primary:light-dark(#2a6df4,#5a8ef6);--tiptap-color-neutral-white:#fff;--tiptap-color-neutral-10:#1a1a1a;--tiptap-color-neutral-20:#333;--tiptap-color-neutral-40:#666;--tiptap-color-neutral-80:#ccc;--tiptap-color-neutral-90:#e6e6e6;--tiptap-color-surface:light-dark(var(--tiptap-color-neutral-white),var(--tiptap-color-neutral-10));--tiptap-color-surface-highlight:light-dark(var(--tiptap-color-neutral-90),var(--tiptap-color-neutral-20));--tiptap-color-border:var(--typo3-input-border-color);--tiptap-color-text-subtle:light-dark(var(--tiptap-color-neutral-40),var(--tiptap-color-neutral-80));--tiptap-border-width:var(--typo3-input-border-width);--tiptap-border-radius:var(--typo3-input-border-radius);--tiptap-border-radius-inner-gap:.25rem;--tiptap-border-inner-radius:calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));--tiptap-toolbar-gap:.25rem;--tiptap-box-shadow:0 .1rem .3rem #0000001a;border:var(--tiptap-border-width) solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);overflow:hidden}:where(.tiptap-container button){color:inherit;background-color:#0000;border:none;padding:0}.tiptap-container{background-color:light-dark(white,var(--tiptap-color-neutral-10));color:light-dark(#000,#fff)}.tiptap{outline:none;min-block-size:20rem;padding:3rem}.tiptap :first-child{margin-block-start:0}.tiptap-editor-content{position:relative;overflow:hidden}.tiptap-toolbar{padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border-block-end:1px solid var(--tiptap-color-border);flex-wrap:wrap;display:flex}.tiptap-toolbar__group{gap:var(--tiptap-toolbar-gap);flex-wrap:wrap;margin:0;padding:0;list-style:none;display:flex}.tiptap-toolbar__group:not(:last-child){border-inline-end:1px solid var(--tiptap-color-border);margin-inline-end:var(--tiptap-toolbar-gap);padding-inline-end:var(--tiptap-toolbar-gap)}.tiptap-toolbar__group-command{border-radius:var(--tiptap-border-inner-radius);aspect-ratio:1;block-size:100%;padding:.5rem;transition:background-color .15s,color .15s,transform .15s}.tiptap-toolbar__group-command:is(:hover,:focus):not(:disabled,.is-active){background-color:color-mix(in hsl, var(--tiptap-color-surface-highlight) 50%, transparent)}.tiptap-toolbar__group-command:active:not(:disabled){transform:scale(.8)}.tiptap-toolbar__group-command:not(:disabled){cursor:pointer}.tiptap-toolbar__group-command:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-toolbar__group-command.is-active{background-color:var(--tiptap-color-surface-highlight);color:var(--tiptap-color-primary)}.tiptap-sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.icon-wrapper{display:inline-block;position:relative}.icon-wrapper svg{block-size:100%;inline-size:100%}.tiptap-bubble-menu{padding:var(--tiptap-border-radius-inner-gap);background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);gap:var(--tiptap-toolbar-gap);margin-inline:1rem;display:flex}.tiptap-bubble-menu .tiptap-command-button{border-radius:var(--tiptap-border-inner-radius)}.ProseMirror{padding:1rem}.ProseMirror>.ProseMirror-widget *{margin-top:auto}.ProseMirror ul,.ProseMirror ol{padding:0 1rem}.tiptap-dropdown{--chevron-rotation:0deg;display:inline-block;position:relative}.tiptap-dropdown:has(.tiptap-dropdown__button[aria-expanded=true]){--chevron-rotation:180deg}.tiptap-dropdown__button{cursor:pointer;background-color:#0000;border:none;justify-content:space-between;align-items:center;gap:.25rem;padding:.5rem;transition:color .2s ease-in-out,transform .1s ease-in-out;display:inline-flex}.tiptap-dropdown__button *{flex-shrink:0}.tiptap-dropdown__button--active{color:var(--tiptap-color-primary)}.tiptap-dropdown__button:disabled{color:var(--tiptap-color-text-subtle);cursor:not-allowed}.tiptap-dropdown__button-icon{--icon-size:.9em;inline-size:var(--icon-size);block-size:var(--icon-size);transform:rotate(var(--chevron-rotation));transform-origin:50%;transition:transform .2s ease-in-out}.tiptap-dropdown__content{background-color:var(--tiptap-color-surface);border:1px solid var(--tiptap-color-border);border-radius:var(--tiptap-border-radius);box-shadow:var(--tiptap-box-shadow);z-index:10;padding-block:.25rem;display:grid;position:absolute}.tiptap-dropdown__content:not(.tiptap-dropdown__content--bottom-left):not(.tiptap-dropdown__content--bottom-right){visibility:hidden;opacity:0}.tiptap-dropdown__content--bottom-left{transform-origin:0 0;inset-inline-start:0}.tiptap-dropdown__content--bottom-right{transform-origin:100% 0;inset-inline-end:0}.tiptap-dropdown__content-button{cursor:pointer;align-items:center;gap:.5rem;padding:.5rem 1rem;display:flex}.tiptap-dropdown__content-button>*{text-wrap:nowrap;flex-shrink:0}.tiptap-dropdown__content-button--active{color:var(--tiptap-color-primary)}.ProseMirror-noderangeselection ::selection{background:0 0}.ProseMirror-noderangeselection *{caret-color:#0000}.ProseMirror-selectednode,.ProseMirror-selectednoderange{position:relative}.ProseMirror-selectednode:before,.ProseMirror-selectednoderange:before{pointer-events:none;z-index:-1;content:\"\";background-color:#70cff850;border-radius:.2rem;position:absolute;inset:-.25rem}.custom-drag-handle:after{content:\"⠿\";cursor:grab;width:1rem;height:1.25rem;color:light-dark(var(--tiptap-color-neutral-10),var(--tiptap-color-neutral-90));border-radius:.25rem;justify-content:center;align-items:center;margin-inline-end:.5rem;padding:.25rem .1rem;font-weight:700;transition:background-color .2s ease-in-out;display:flex}.custom-drag-handle:is(:hover,:focus):after{background:var(--tiptap-color-surface-highlight)}.pl-9{padding-left:1.25rem}.transition-dropdown{--scale:1;--translate-y:0;--opacity:1;transform:scale(var(--scale)) translateY(var(--translate-y));opacity:var(--opacity);transition:transform 75ms cubic-bezier(.4,0,1,1),opacity 75ms cubic-bezier(.4,0,1,1)}.transition-dropdown-enter-from{--scale:.95;--opacity:1}.transition-dropdown-enter-to,.transition-dropdown-leave-from{--scale:1;--opacity:1}.transition-dropdown-leave-to{--scale:.95;--opacity:0}.tiptap-character-count{color:var(--tiptap-color-text-subtle);align-items:center;gap:.5rem;margin:1.25rem .75rem;font-size:.75rem;display:flex}.tiptap-character-count svg{color:var(--token-color-orange-40)}.tiptap-character-count--warning,.tiptap-character-count--warning svg{color:var(--bs-danger)}table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}table td,table th{border:var(--tiptap-border-width) solid var(--tiptap-color-border);box-sizing:border-box;vertical-align:top;min-width:1em;padding:6px 8px;position:relative}table td>*,table th>*{margin-bottom:0}table th{background-color:var(--tiptap-color-surface-highlight);text-align:left;font-weight:700}table .selectedCell:after{background:var(--typo3-surface-container-info);content:\"\";pointer-events:none;z-index:2;position:absolute;inset:0}table .column-resize-handle{background-color:var(--typo3-surface-container-info);pointer-events:none;width:4px;position:absolute;top:0;bottom:-2px;right:-2px}.tableWrapper{margin:1.5rem 0;overflow-x:auto}.tiptap.resize-cursor{cursor:ew-resize;cursor:col-resize}"]]]));
customElements.define("editor-tiptap", bS);
//#endregion
export { Un as CommandManager, En as Editor, Ln as Extendable, dn as Extension, Ut as Fragment, kn as InputRule, Bn as MappablePosition, Yt as Mark, bn as MarkView, Kn as Node, Qt as NodePos, nn as NodeView, Mn as PasteRule, Cn as ResizableNodeView, cn as ResizableNodeview, on as Tracker, Bt as callOrReturn, Yn as canInsertNode, ir as cancelPositionCheck, Kt as combineTransactionSteps, tr as commands, St as createAtomBlockMarkdownSpec, Ue as createBlockMarkdownSpec, Qn as createChainableState, Tt as createDocument, Ht as createElement, Ht as h, Je as createInlineMarkdownSpec, Ke as createMappablePosition, mt as createNodeFromContent, _n as createStyleTag, Re as decodeHtmlEntities, mn as defaultBlockAt, i as defineTipTapPlugin, ut as deleteProps, ft as elementFromString, gt as encodeHtmlEntities, Xe as escapeForRegEx, nt as extensions, ct as findChildren, bt as findChildrenInRange, sr as findDuplicates, Ve as findParentNode, At as findParentNodeClosestToPos, et as flattenExtensions, Ot as fromString, Mt as generateHTML, Qe as generateJSON, ot as generateText, Fn as getAttributes, it as getAttributesFromExtensions, It as getChangedRanges, Pt as getDebugJSON, Rt as getExtensionField, vt as getHTMLFromFragment, Ie as getMarkAttributes, tn as getMarkRange, Gn as getMarkType, On as getMarksBetween, zn as getNodeAtPosition, pn as getNodeAttributes, Gt as getNodeType, jn as getRenderedAttributes, Hn as getSchema, Zt as getSchemaByResolvedExtensions, Sn as getSchemaTypeByName, Jn as getSchemaTypeNameByName, $t as getSplittedAttributes, an as getText, Pn as getTextBetween, Tn as getTextContentFromNodes, un as getTextSerializersFromSchema, sn as getUpdatedPosition, Zn as injectExtensionAttributesToParseRule, or as inputRulesPlugin, Jt as isActive, rr as isAndroid, wt as isAtEndOfNode, Ge as isAtStartOfNode, er as isEmptyObject, Dt as isExtensionRulesEnabled, Ye as isFirefox, qe as isFunction, ht as isList, yn as isMacOS, Be as isMarkActive, gn as isNodeActive, dt as isNodeEmpty, pt as isNodeSelection, _t as isNodeViewSelected, Ze as isNumber, rt as isPlainObject, lt as isRegExp, xt as isSafari, cr as isString, He as isTextSelection, jt as isiOS, tt as markInputRule, kt as markPasteRule, Nt as markdown, $e as mergeAttributes, st as mergeDeep, In as minMax, at as nodeInputRule, Lt as nodePasteRule, Ft as objectIncludes, zt as parseAttributes, yt as parseIndentedBlocks, o as parseTipTapPluginYamlConfiguration, Le as pasteRulesPlugin, en as posToDOMRect, Wn as removeDuplicates, Dn as renderNestedMarkdownContent, Rn as resolveExtensions, fn as resolveFocusPosition, Wt as rewriteUnknownContent, An as schedulePositionCheck, Vn as selectionToInsertionEnd, Xt as serializeAttributes, xn as sortExtensions, qn as splitExtensions, M as textInputRule, rn as textPasteRule, Nn as textblockTypeInputRule, wn as updateMarkViewAttributes, ln as wrappingInputRule };
