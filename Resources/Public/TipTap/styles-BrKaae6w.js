import { c as e, i as t, o as n } from "./configuration-BT9xaJ2A.js";
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function r(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var i = {}, a = [], o = () => {}, s = () => !1, c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), l = (e) => e.startsWith("onUpdate:"), u = Object.assign, d = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, ee = Object.prototype.hasOwnProperty, f = (e, t) => ee.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), te = (e) => C(e).slice(8, -1), ne = (e) => C(e) === "[object Object]", re = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ie = /* @__PURE__ */ r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), w = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, oe = w((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), se = /\B([A-Z])/g, ce = w((e) => e.replace(se, "-$1").toLowerCase()), le = w((e) => e.charAt(0).toUpperCase() + e.slice(1)), ue = w((e) => e ? `on${le(e)}` : ""), T = (e, t) => !Object.is(e, t), de = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, fe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, pe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, me = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, he, ge = () => he ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function _e(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? xe(r) : _e(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var ve = /;(?![^(]*\))/g, ye = /:([^]+)/, be = /\/\*[^]*?\*\//g;
function xe(e) {
	let t = {};
	return e.replace(be, "").split(ve).forEach((e) => {
		if (e) {
			let n = e.split(ye);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Se(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = Se(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ce = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", we = /* @__PURE__ */ r(Ce);
Ce + "";
function Te(e) {
	return !!e || e === "";
}
function Ee(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = De(e[r], t[r]);
	return n;
}
function De(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? Ee(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !De(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var Oe = (e) => !!(e && e.__v_isRef === !0), ke = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Oe(e) ? ke(e.value) : JSON.stringify(e, Ae, 2) : String(e), Ae = (e, t) => Oe(t) ? Ae(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[je(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => je(e)) } : y(t) ? je(t) : b(t) && !p(t) && !ne(t) ? String(t) : t, je = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, E, Me = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = E, !e && E && (this.index = (E.scopes ||= []).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = E;
			try {
				return E = this, e();
			} finally {
				E = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = E, E = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (E === this) E = this.prevScope;
			else {
				let e = E;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ne() {
	return E;
}
var D, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, E && E.active && E.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ye(this), Be(this);
		let e = D, t = A;
		D = this, A = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), D = e, A = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Ye(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Ie = 0, O, k;
function Le(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = k, k = e;
		return;
	}
	e.next = O, O = e;
}
function Re() {
	Ie++;
}
function ze() {
	if (--Ie > 0) return;
	if (k) {
		let e = k;
		for (k = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; O;) {
		let t = O;
		for (O = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === j) || (e.globalVersion = j, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = D, r = A;
	D = e, A = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		D = n, A = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var A = !0, Ke = [];
function qe() {
	Ke.push(A), A = !1;
}
function Je() {
	let e = Ke.pop();
	A = e === void 0 ? !0 : e;
}
function Ye(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = D;
		D = void 0;
		try {
			t();
		} finally {
			D = e;
		}
	}
}
var j = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, M = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!D || !A || D === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== D) t = this.activeLink = new Xe(D, this), D.deps ? (t.prevDep = D.depsTail, D.depsTail.nextDep = t, D.depsTail = t) : D.deps = D.depsTail = t, Ze(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = D.depsTail, t.nextDep = void 0, D.depsTail.nextDep = t, D.depsTail = t, D.deps === t && (D.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, j++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function Ze(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ze(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Qe = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), P = /* @__PURE__ */ Symbol("");
function F(e, t, n) {
	if (A && D) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new M()), r.map = t, r.key = n), r.track();
	}
}
function I(e, t, n, r, i, a) {
	let o = Qe.get(e);
	if (!o) {
		j++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === P || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(P)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(N)), m(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(N)), m(e) && s(o.get($e)));
				break;
			case "set":
				m(e) && s(o.get(N));
				break;
		}
	}
	ze();
}
function L(e) {
	let t = /* @__PURE__ */ q(e);
	return t === e ? t : (F(t, "iterate", P), /* @__PURE__ */ K(e) ? t : t.map(J));
}
function R(e) {
	return F(e = /* @__PURE__ */ q(e), "iterate", P), e;
}
function z(e, t) {
	return /* @__PURE__ */ G(e) ? Y(/* @__PURE__ */ W(e) ? J(t) : t) : J(t);
}
var et = {
	__proto__: null,
	[Symbol.iterator]() {
		return tt(this, Symbol.iterator, (e) => z(this, e));
	},
	concat(...e) {
		return L(this).concat(...e.map((e) => p(e) ? L(e) : e));
	},
	entries() {
		return tt(this, "entries", (e) => (e[1] = z(this, e[1]), e));
	},
	every(e, t) {
		return B(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return B(this, "filter", e, t, (e) => e.map((e) => z(this, e)), arguments);
	},
	find(e, t) {
		return B(this, "find", e, t, (e) => z(this, e), arguments);
	},
	findIndex(e, t) {
		return B(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return B(this, "findLast", e, t, (e) => z(this, e), arguments);
	},
	findLastIndex(e, t) {
		return B(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return B(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return it(this, "includes", e);
	},
	indexOf(...e) {
		return it(this, "indexOf", e);
	},
	join(e) {
		return L(this).join(e);
	},
	lastIndexOf(...e) {
		return it(this, "lastIndexOf", e);
	},
	map(e, t) {
		return B(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return V(this, "pop");
	},
	push(...e) {
		return V(this, "push", e);
	},
	reduce(e, ...t) {
		return rt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return rt(this, "reduceRight", e, t);
	},
	shift() {
		return V(this, "shift");
	},
	some(e, t) {
		return B(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return V(this, "splice", e);
	},
	toReversed() {
		return L(this).toReversed();
	},
	toSorted(e) {
		return L(this).toSorted(e);
	},
	toSpliced(...e) {
		return L(this).toSpliced(...e);
	},
	unshift(...e) {
		return V(this, "unshift", e);
	},
	values() {
		return tt(this, "values", (e) => z(this, e));
	}
};
function tt(e, t, n) {
	let r = R(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ K(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var nt = Array.prototype;
function B(e, t, n, r, i, a) {
	let o = R(e), s = o !== e && !/* @__PURE__ */ K(e), c = o[t];
	if (c !== nt[t]) {
		let t = c.apply(e, a);
		return s ? J(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, z(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function rt(e, t, n, r) {
	let i = R(e), a = i !== e && !/* @__PURE__ */ K(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = z(e, t)), n.call(this, t, z(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? z(e, c) : c;
}
function it(e, t, n) {
	let r = /* @__PURE__ */ q(e);
	F(r, "iterate", P);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ jt(n[0]) ? (n[0] = /* @__PURE__ */ q(n[0]), r[t](...n)) : i;
}
function V(e, t, n = []) {
	qe(), Re();
	let r = (/* @__PURE__ */ q(e))[t].apply(e, n);
	return ze(), Je(), r;
}
var at = /* @__PURE__ */ r("__proto__,__v_isRef,__isVue"), ot = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function st(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ q(this);
	return F(t, "has", e), t.hasOwnProperty(e);
}
var ct = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? wt : Ct : i ? St : xt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = et[t])) return e;
			if (t === "hasOwnProperty") return st;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ X(e) ? e : n);
		if ((y(t) ? ot.has(t) : at(t)) || (r || F(e, "get", t), i)) return o;
		if (/* @__PURE__ */ X(o)) {
			let e = a && re(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ kt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ kt(o) : /* @__PURE__ */ Dt(o) : o;
	}
}, lt = class extends ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ G(i);
			if (!/* @__PURE__ */ K(n) && !/* @__PURE__ */ G(n) && (i = /* @__PURE__ */ q(i), n = /* @__PURE__ */ q(n)), !a && /* @__PURE__ */ X(i) && !/* @__PURE__ */ X(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ X(e) ? e : r);
		return e === /* @__PURE__ */ q(r) && (o ? T(n, i) && I(e, "set", t, n, i) : I(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && I(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !ot.has(t)) && F(e, "has", t), n;
	}
	ownKeys(e) {
		return F(e, "iterate", p(e) ? "length" : N), Reflect.ownKeys(e);
	}
}, ut = class extends ct {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, dt = /* @__PURE__ */ new lt(), ft = /* @__PURE__ */ new ut(), pt = /* @__PURE__ */ new lt(!0), mt = (e) => e, H = (e) => Reflect.getPrototypeOf(e);
function ht(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ q(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? mt : t ? Y : J;
		return !t && F(a, "iterate", c ? $e : N), u(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function U(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function gt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ q(r), a = /* @__PURE__ */ q(n);
			e || (T(n, a) && F(i, "get", n), F(i, "get", a));
			let { has: o } = H(i), s = t ? mt : e ? Y : J;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && F(/* @__PURE__ */ q(t), "iterate", N), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ q(n), i = /* @__PURE__ */ q(t);
			return e || (T(t, i) && F(r, "has", t), F(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ q(a), s = t ? mt : e ? Y : J;
			return !e && F(o, "iterate", N), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return u(n, e ? {
		add: U("add"),
		set: U("set"),
		delete: U("delete"),
		clear: U("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ q(this), r = H(n), i = /* @__PURE__ */ q(e), a = !t && !/* @__PURE__ */ K(e) && !/* @__PURE__ */ G(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), I(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ K(n) && !/* @__PURE__ */ G(n) && (n = /* @__PURE__ */ q(n));
			let r = /* @__PURE__ */ q(this), { has: i, get: a } = H(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ q(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && I(r, "set", e, n, s) : I(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ q(this), { has: n, get: r } = H(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ q(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && I(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ q(this), t = e.size !== 0, n = e.clear();
			return t && I(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = ht(r, e, t);
	}), n;
}
function _t(e, t) {
	let n = gt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var vt = { get: /* @__PURE__ */ _t(!1, !1) }, yt = { get: /* @__PURE__ */ _t(!1, !0) }, bt = { get: /* @__PURE__ */ _t(!0, !1) }, xt = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap();
function Tt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function Et(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Tt(te(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Dt(e) {
	return /* @__PURE__ */ G(e) ? e : At(e, !1, dt, vt, xt);
}
/* @__NO_SIDE_EFFECTS__ */
function Ot(e) {
	return At(e, !1, pt, yt, St);
}
/* @__NO_SIDE_EFFECTS__ */
function kt(e) {
	return At(e, !0, ft, bt, Ct);
}
function At(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Et(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function W(e) {
	return /* @__PURE__ */ G(e) ? /* @__PURE__ */ W(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function G(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function K(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function jt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function q(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ q(t) : e;
}
function Mt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var J = (e) => b(e) ? /* @__PURE__ */ Dt(e) : e, Y = (e) => b(e) ? /* @__PURE__ */ kt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function X(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function Nt(e) {
	return Ft(e, !1);
}
/* @__NO_SIDE_EFFECTS__ */
function Pt(e) {
	return Ft(e, !0);
}
function Ft(e, t) {
	return /* @__PURE__ */ X(e) ? e : new It(e, t);
}
var It = class {
	constructor(e, t) {
		this.dep = new M(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ q(e), this._value = t ? e : J(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ K(e) || /* @__PURE__ */ G(e);
		e = n ? e : /* @__PURE__ */ q(e), T(e, t) && (this._rawValue = e, this._value = n ? e : J(e), this.dep.trigger());
	}
};
function Lt(e) {
	return /* @__PURE__ */ X(e) ? e.value : e;
}
var Rt = {
	get: (e, t, n) => t === "__v_raw" ? e : Lt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ X(i) && !/* @__PURE__ */ X(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function zt(e) {
	return /* @__PURE__ */ W(e) ? e : new Proxy(e, Rt);
}
var Bt = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new M(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function Vt(e) {
	return new Bt(e);
}
var Ht = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new M(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = j - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && D !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Ut(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new Ht(r, i, n);
}
var Z = {}, Wt = /* @__PURE__ */ new WeakMap(), Q = void 0;
function Gt(e, t = !1, n = Q) {
	if (n) {
		let t = Wt.get(n);
		t || Wt.set(n, t = []), t.push(e);
	}
}
function Kt(e, t, n = i) {
	let { immediate: r, deep: a, once: s, scheduler: c, augmentJob: l, call: u } = n, ee = (e) => a ? e : /* @__PURE__ */ K(e) || a === !1 || a === 0 ? $(e, 1) : $(e), f, m, h, g, v = !1, y = !1;
	if (/* @__PURE__ */ X(e) ? (m = () => e.value, v = /* @__PURE__ */ K(e)) : /* @__PURE__ */ W(e) ? (m = () => ee(e), v = !0) : p(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ W(e) || /* @__PURE__ */ K(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ X(e)) return e.value;
		if (/* @__PURE__ */ W(e)) return ee(e);
		if (_(e)) return u ? u(e, 2) : e();
	})) : m = _(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			qe();
			try {
				h();
			} finally {
				Je();
			}
		}
		let t = Q;
		Q = f;
		try {
			return u ? u(e, 3, [g]) : e(g);
		} finally {
			Q = t;
		}
	} : o, t && a) {
		let e = m, t = a === !0 ? Infinity : a;
		m = () => $(e(), t);
	}
	let b = Ne(), x = () => {
		f.stop(), b && b.active && d(b.effects, f);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), x();
		};
	}
	let S = y ? Array(e.length).fill(Z) : Z, C = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let e = f.run();
			if (a || v || (y ? e.some((e, t) => T(e, S[t])) : T(e, S))) {
				h && h();
				let n = Q;
				Q = f;
				try {
					let n = [
						e,
						S === Z ? void 0 : y && S[0] === Z ? [] : S,
						g
					];
					S = e, u ? u(t, 3, n) : t(...n);
				} finally {
					Q = n;
				}
			}
		} else f.run();
	};
	return l && l(C), f = new Fe(m), f.scheduler = c ? () => c(C, !1) : C, g = (e) => Gt(e, !1, f), h = f.onStop = () => {
		let e = Wt.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			Wt.delete(f);
		}
	}, t ? r ? C(!0) : S = f.run() : c ? c(C.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function $(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ X(e)) $(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) $(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		$(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) $(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && $(e[r], t, n);
	}
	return e;
}
//#endregion
//#region src/utils.ts
function qt(e, t = 300) {
	let n, r = 0, i = !1;
	return (...a) => {
		let o = Date.now();
		return (!i || o - r >= t) && (n = e(...a), r = o, i = !0), n;
	};
}
var Jt = "bust", Yt = "@typo3-tiptap/tiptap/index.js";
function Xt(e) {
	let t;
	try {
		t = new URL(import.meta.resolve(e));
	} catch {
		return e;
	}
	if (t.origin !== window.location.origin || t.searchParams.has(Jt)) return t.href;
	let n = new URL(import.meta.resolve(Yt)).searchParams.get(Jt);
	return n === null || t.searchParams.set(Jt, n), t.href;
}
//#endregion
//#region src/schema/plugin/styles.ts
var Zt = n({ styles: t(n({
	name: e().min(1),
	element: e().min(1),
	classes: e().min(1)
})).min(1) });
//#endregion
export { y as $, a as A, ce as B, J as C, I as D, $ as E, le as F, l as G, de as H, fe as I, ne as J, b as K, u as L, s as M, o as N, Lt as O, oe as P, v as Q, ge as R, q as S, F as T, p as U, Te as V, _ as W, ie as X, x as Y, we as Z, Nt as _, Fe as a, ke as at, R as b, jt as c, X as d, De as et, K as f, Dt as g, zt as h, Me as i, d as it, i as j, Kt as k, W as l, qe as m, Xt as n, Se as nt, Ut as o, ue as ot, Mt as p, c as q, qt as r, _e as rt, Vt as s, me as st, Zt as t, pe as tt, G as u, Je as v, Y as w, Pt as x, Ot as y, f as z };
