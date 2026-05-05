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
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!D || !A || D === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== D) t = this.activeLink = new Xe(D, this), D.deps ? (t.prevDep = D.depsTail, D.depsTail.nextDep = t, D.depsTail = t) : D.deps = D.depsTail = t, Qe(t);
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
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol(""), N = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (A && D) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function F(e, t, n, r, i, a) {
	let o = $e.get(e);
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
				(n === "length" || n === N || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(N)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(M)), m(e) && s(o.get(et)));
				break;
			case "delete":
				i || (s(o.get(M)), m(e) && s(o.get(et)));
				break;
			case "set":
				m(e) && s(o.get(M));
				break;
		}
	}
	ze();
}
function I(e) {
	let t = /* @__PURE__ */ K(e);
	return t === e ? t : (P(t, "iterate", N), /* @__PURE__ */ G(e) ? t : t.map(q));
}
function L(e) {
	return P(e = /* @__PURE__ */ K(e), "iterate", N), e;
}
function R(e, t) {
	return /* @__PURE__ */ W(e) ? J(/* @__PURE__ */ U(e) ? q(t) : t) : q(t);
}
var tt = {
	__proto__: null,
	[Symbol.iterator]() {
		return nt(this, Symbol.iterator, (e) => R(this, e));
	},
	concat(...e) {
		return I(this).concat(...e.map((e) => p(e) ? I(e) : e));
	},
	entries() {
		return nt(this, "entries", (e) => (e[1] = R(this, e[1]), e));
	},
	every(e, t) {
		return z(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return z(this, "filter", e, t, (e) => e.map((e) => R(this, e)), arguments);
	},
	find(e, t) {
		return z(this, "find", e, t, (e) => R(this, e), arguments);
	},
	findIndex(e, t) {
		return z(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return z(this, "findLast", e, t, (e) => R(this, e), arguments);
	},
	findLastIndex(e, t) {
		return z(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return z(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return at(this, "includes", e);
	},
	indexOf(...e) {
		return at(this, "indexOf", e);
	},
	join(e) {
		return I(this).join(e);
	},
	lastIndexOf(...e) {
		return at(this, "lastIndexOf", e);
	},
	map(e, t) {
		return z(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return B(this, "pop");
	},
	push(...e) {
		return B(this, "push", e);
	},
	reduce(e, ...t) {
		return it(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return it(this, "reduceRight", e, t);
	},
	shift() {
		return B(this, "shift");
	},
	some(e, t) {
		return z(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return B(this, "splice", e);
	},
	toReversed() {
		return I(this).toReversed();
	},
	toSorted(e) {
		return I(this).toSorted(e);
	},
	toSpliced(...e) {
		return I(this).toSpliced(...e);
	},
	unshift(...e) {
		return B(this, "unshift", e);
	},
	values() {
		return nt(this, "values", (e) => R(this, e));
	}
};
function nt(e, t, n) {
	let r = L(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ G(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var rt = Array.prototype;
function z(e, t, n, r, i, a) {
	let o = L(e), s = o !== e && !/* @__PURE__ */ G(e), c = o[t];
	if (c !== rt[t]) {
		let t = c.apply(e, a);
		return s ? q(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, R(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function it(e, t, n, r) {
	let i = L(e), a = i !== e && !/* @__PURE__ */ G(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = R(e, t)), n.call(this, t, R(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? R(e, c) : c;
}
function at(e, t, n) {
	let r = /* @__PURE__ */ K(e);
	P(r, "iterate", N);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Mt(n[0]) ? (n[0] = /* @__PURE__ */ K(n[0]), r[t](...n)) : i;
}
function B(e, t, n = []) {
	qe(), Re();
	let r = (/* @__PURE__ */ K(e))[t].apply(e, n);
	return ze(), Je(), r;
}
var ot = /* @__PURE__ */ r("__proto__,__v_isRef,__isVue"), st = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function ct(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ K(this);
	return P(t, "has", e), t.hasOwnProperty(e);
}
var lt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Tt : wt : i ? Ct : St).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = tt[t])) return e;
			if (t === "hasOwnProperty") return ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ Y(e) ? e : n);
		if ((y(t) ? st.has(t) : ot(t)) || (r || P(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Y(o)) {
			let e = a && re(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ At(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ At(o) : /* @__PURE__ */ Ot(o) : o;
	}
}, ut = class extends lt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ W(i);
			if (!/* @__PURE__ */ G(n) && !/* @__PURE__ */ W(n) && (i = /* @__PURE__ */ K(i), n = /* @__PURE__ */ K(n)), !a && /* @__PURE__ */ Y(i) && !/* @__PURE__ */ Y(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Y(e) ? e : r);
		return e === /* @__PURE__ */ K(r) && (o ? T(n, i) && F(e, "set", t, n, i) : F(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && F(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !st.has(t)) && P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", p(e) ? "length" : M), Reflect.ownKeys(e);
	}
}, dt = class extends lt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, ft = /* @__PURE__ */ new ut(), pt = /* @__PURE__ */ new dt(), mt = /* @__PURE__ */ new ut(!0), ht = (e) => e, V = (e) => Reflect.getPrototypeOf(e);
function gt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ K(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? ht : t ? J : q;
		return !t && P(a, "iterate", c ? et : M), u(Object.create(l), { next() {
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
function H(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function _t(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ K(r), a = /* @__PURE__ */ K(n);
			e || (T(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = V(i), s = t ? ht : e ? J : q;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ K(t), "iterate", M), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ K(n), i = /* @__PURE__ */ K(t);
			return e || (T(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ K(a), s = t ? ht : e ? J : q;
			return !e && P(o, "iterate", M), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return u(n, e ? {
		add: H("add"),
		set: H("set"),
		delete: H("delete"),
		clear: H("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ K(this), r = V(n), i = /* @__PURE__ */ K(e), a = !t && !/* @__PURE__ */ G(e) && !/* @__PURE__ */ W(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), F(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ G(n) && !/* @__PURE__ */ W(n) && (n = /* @__PURE__ */ K(n));
			let r = /* @__PURE__ */ K(this), { has: i, get: a } = V(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ K(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && F(r, "set", e, n, s) : F(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ K(this), { has: n, get: r } = V(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ K(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && F(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ K(this), t = e.size !== 0, n = e.clear();
			return t && F(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = gt(r, e, t);
	}), n;
}
function vt(e, t) {
	let n = _t(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var yt = { get: /* @__PURE__ */ vt(!1, !1) }, bt = { get: /* @__PURE__ */ vt(!1, !0) }, xt = { get: /* @__PURE__ */ vt(!0, !1) }, St = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap();
function Et(e) {
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
function Dt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Et(te(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ot(e) {
	return /* @__PURE__ */ W(e) ? e : jt(e, !1, ft, yt, St);
}
/* @__NO_SIDE_EFFECTS__ */
function kt(e) {
	return jt(e, !1, mt, bt, Ct);
}
/* @__NO_SIDE_EFFECTS__ */
function At(e) {
	return jt(e, !0, pt, xt, wt);
}
function jt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Dt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function U(e) {
	return /* @__PURE__ */ W(e) ? /* @__PURE__ */ U(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function W(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function G(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Mt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function K(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ K(t) : e;
}
function Nt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var q = (e) => b(e) ? /* @__PURE__ */ Ot(e) : e, J = (e) => b(e) ? /* @__PURE__ */ At(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function Y(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function Pt(e) {
	return It(e, !1);
}
/* @__NO_SIDE_EFFECTS__ */
function Ft(e) {
	return It(e, !0);
}
function It(e, t) {
	return /* @__PURE__ */ Y(e) ? e : new Lt(e, t);
}
var Lt = class {
	constructor(e, t) {
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ K(e), this._value = t ? e : q(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ G(e) || /* @__PURE__ */ W(e);
		e = n ? e : /* @__PURE__ */ K(e), T(e, t) && (this._rawValue = e, this._value = n ? e : q(e), this.dep.trigger());
	}
};
function Rt(e) {
	return /* @__PURE__ */ Y(e) ? e.value : e;
}
var zt = {
	get: (e, t, n) => t === "__v_raw" ? e : Rt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Y(i) && !/* @__PURE__ */ Y(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Bt(e) {
	return /* @__PURE__ */ U(e) ? e : new Proxy(e, zt);
}
var Vt = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Ze(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function Ht(e) {
	return new Vt(e);
}
var Ut = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = j - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
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
function Wt(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new Ut(r, i, n);
}
var X = {}, Z = /* @__PURE__ */ new WeakMap(), Q = void 0;
function Gt(e, t = !1, n = Q) {
	if (n) {
		let t = Z.get(n);
		t || Z.set(n, t = []), t.push(e);
	}
}
function Kt(e, t, n = i) {
	let { immediate: r, deep: a, once: s, scheduler: c, augmentJob: l, call: u } = n, ee = (e) => a ? e : /* @__PURE__ */ G(e) || a === !1 || a === 0 ? $(e, 1) : $(e), f, m, h, g, v = !1, y = !1;
	if (/* @__PURE__ */ Y(e) ? (m = () => e.value, v = /* @__PURE__ */ G(e)) : /* @__PURE__ */ U(e) ? (m = () => ee(e), v = !0) : p(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ U(e) || /* @__PURE__ */ G(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ Y(e)) return e.value;
		if (/* @__PURE__ */ U(e)) return ee(e);
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
	let S = y ? Array(e.length).fill(X) : X, C = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let e = f.run();
			if (a || v || (y ? e.some((e, t) => T(e, S[t])) : T(e, S))) {
				h && h();
				let n = Q;
				Q = f;
				try {
					let n = [
						e,
						S === X ? void 0 : y && S[0] === X ? [] : S,
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
		let e = Z.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			Z.delete(f);
		}
	}, t ? r ? C(!0) : S = f.run() : c ? c(C.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function $(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ Y(e)) $(e.value, t, n);
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
//#region src/schema/plugin/styles.ts
var qt = n({ styles: t(n({
	name: e().min(1),
	element: e().min(1),
	classes: e().min(1)
})).min(1) });
//#endregion
export { pe as $, s as A, de as B, P as C, Kt as D, Rt as E, u as F, c as G, _ as H, ge as I, ie as J, ne as K, f as L, oe as M, le as N, a as O, fe as P, De as Q, ce as R, J as S, F as T, l as U, p as V, b as W, v as X, we as Y, y as Z, kt as _, Ht as a, me as at, K as b, W as c, Nt as d, Se as et, qe as f, Je as g, Pt as h, Wt as i, ue as it, o as j, i as k, Y as l, Ot as m, Me as n, d as nt, Mt as o, Bt as p, x as q, Fe as r, ke as rt, U as s, qt as t, _e as tt, G as u, L as v, $ as w, q as x, Ft as y, Te as z };
