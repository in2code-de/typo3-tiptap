//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n, r = /* @__PURE__ */ Object.freeze({ status: "aborted" });
function i(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var a = Symbol("zod_brand"), o = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, s = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(n = globalThis).__zod_globalConfig ?? (n.__zod_globalConfig = {});
var c = globalThis.__zod_globalConfig;
function l(e) {
	return e && Object.assign(c, e), c;
}
//#endregion
//#region node_modules/zod/v4/core/util.js
var u = /* @__PURE__ */ t({
	BIGINT_FORMAT_RANGES: () => Oe,
	Class: () => Ye,
	NUMBER_FORMAT_RANGES: () => De,
	aborted: () => Ie,
	allowsEval: () => ye,
	assert: () => ne,
	assertEqual: () => d,
	assertIs: () => ee,
	assertNever: () => te,
	assertNotEqual: () => f,
	assignProp: () => h,
	base64ToUint8Array: () => Ue,
	base64urlToUint8Array: () => Ge,
	cached: () => ae,
	captureStackTrace: () => _e,
	cleanEnum: () => He,
	cleanRegex: () => se,
	clone: () => y,
	cloneDef: () => de,
	createTransparentProxy: () => Te,
	defineLazy: () => m,
	esc: () => he,
	escapeRegex: () => v,
	explicitlyAborted: () => Le,
	extend: () => je,
	finalizeIssue: () => C,
	floatSafeRemainder: () => ce,
	getElementAtPath: () => fe,
	getEnumValues: () => re,
	getLengthableOrigin: () => Be,
	getParsedType: () => Se,
	getSizableOrigin: () => ze,
	hexToUint8Array: () => qe,
	isObject: () => ve,
	isPlainObject: () => _,
	issue: () => Ve,
	joinValues: () => p,
	jsonStringifyReplacer: () => ie,
	merge: () => Ne,
	mergeDefs: () => g,
	normalizeParams: () => b,
	nullish: () => oe,
	numKeys: () => xe,
	objectClone: () => ue,
	omit: () => Ae,
	optionalKeys: () => Ee,
	parsedType: () => w,
	partial: () => Pe,
	pick: () => ke,
	prefixIssues: () => S,
	primitiveTypes: () => we,
	promiseAllObject: () => pe,
	propertyKeyTypes: () => Ce,
	randomString: () => me,
	required: () => Fe,
	safeExtend: () => Me,
	shallowClone: () => be,
	slugify: () => ge,
	stringifyPrimitive: () => x,
	uint8ArrayToBase64: () => We,
	uint8ArrayToBase64url: () => Ke,
	uint8ArrayToHex: () => Je,
	unwrapMessage: () => Re
});
function d(e) {
	return e;
}
function f(e) {
	return e;
}
function ee(e) {}
function te(e) {
	throw Error("Unexpected value in exhaustive check");
}
function ne(e) {}
function re(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function p(e, t = "|") {
	return e.map((e) => x(e)).join(t);
}
function ie(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function ae(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function oe(e) {
	return e == null;
}
function se(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function ce(e, t) {
	let n = e / t, r = Math.round(n), i = 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
var le = /* @__PURE__ */ Symbol("evaluating");
function m(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== le) return r === void 0 && (r = le, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function ue(e) {
	return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function h(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function g(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function de(e) {
	return g(e._zod.def);
}
function fe(e, t) {
	return t ? t.reduce((e, t) => e?.[t], e) : e;
}
function pe(e) {
	let t = Object.keys(e), n = t.map((t) => e[t]);
	return Promise.all(n).then((e) => {
		let n = {};
		for (let r = 0; r < t.length; r++) n[t[r]] = e[r];
		return n;
	});
}
function me(e = 10) {
	let t = "";
	for (let n = 0; n < e; n++) t += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
	return t;
}
function he(e) {
	return JSON.stringify(e);
}
function ge(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var _e = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function ve(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var ye = /* @__PURE__ */ ae(() => {
	if (c.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function _(e) {
	if (ve(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(ve(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function be(e) {
	return _(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function xe(e) {
	let t = 0;
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
	return t;
}
var Se = (e) => {
	let t = typeof e;
	switch (t) {
		case "undefined": return "undefined";
		case "string": return "string";
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "boolean": return "boolean";
		case "function": return "function";
		case "bigint": return "bigint";
		case "symbol": return "symbol";
		case "object": return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
		default: throw Error(`Unknown data type: ${t}`);
	}
}, Ce = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]), we = /* @__PURE__ */ new Set([
	"string",
	"number",
	"bigint",
	"boolean",
	"symbol",
	"undefined"
]);
function v(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function y(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function b(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Te(e) {
	let t;
	return new Proxy({}, {
		get(n, r, i) {
			return t ??= e(), Reflect.get(t, r, i);
		},
		set(n, r, i, a) {
			return t ??= e(), Reflect.set(t, r, i, a);
		},
		has(n, r) {
			return t ??= e(), Reflect.has(t, r);
		},
		deleteProperty(n, r) {
			return t ??= e(), Reflect.deleteProperty(t, r);
		},
		ownKeys(n) {
			return t ??= e(), Reflect.ownKeys(t);
		},
		getOwnPropertyDescriptor(n, r) {
			return t ??= e(), Reflect.getOwnPropertyDescriptor(t, r);
		},
		defineProperty(n, r, i) {
			return t ??= e(), Reflect.defineProperty(t, r, i);
		}
	});
}
function x(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ee(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var De = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Oe = {
	int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function ke(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return y(e, g(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return h(this, "shape", e), e;
		},
		checks: []
	}));
}
function Ae(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return y(e, g(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return h(this, "shape", r), r;
		},
		checks: []
	}));
}
function je(e, t) {
	if (!_(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return y(e, g(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return h(this, "shape", n), n;
	} }));
}
function Me(e, t) {
	if (!_(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return y(e, g(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return h(this, "shape", n), n;
	} }));
}
function Ne(e, t) {
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return y(e, g(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return h(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function Pe(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return y(t, g(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return h(this, "shape", i), i;
		},
		checks: []
	}));
}
function Fe(e, t, n) {
	return y(t, g(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return h(this, "shape", i), i;
	} }));
}
function Ie(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Le(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function S(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Re(e) {
	return typeof e == "string" ? e : e?.message;
}
function C(e, t, n) {
	let r = e.message ? e.message : Re(e.inst?._zod.def?.error?.(e)) ?? Re(t?.error?.(e)) ?? Re(n.customError?.(e)) ?? Re(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: a, input: o, ...s } = e;
	return s.path ??= [], s.message = r, t?.reportInput && (s.input = o), s;
}
function ze(e) {
	return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Be(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function w(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function Ve(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function He(e) {
	return Object.entries(e).filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10))).map((e) => e[1]);
}
function Ue(e) {
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return n;
}
function We(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
	return btoa(t);
}
function Ge(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/");
	return Ue(t + "=".repeat((4 - t.length % 4) % 4));
}
function Ke(e) {
	return We(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function qe(e) {
	let t = e.replace(/^0x/, "");
	if (t.length % 2 != 0) throw Error("Invalid hex string length");
	let n = new Uint8Array(t.length / 2);
	for (let e = 0; e < t.length; e += 2) n[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
	return n;
}
function Je(e) {
	return Array.from(e).map((e) => e.toString(16).padStart(2, "0")).join("");
}
var Ye = class {
	constructor(...e) {}
}, Xe = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, ie, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Ze = i("$ZodError", Xe), T = i("$ZodError", Xe, { Parent: Error });
function Qe(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function $e(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i];
					i === e.length - 1 ? (r[n] = r[n] || { _errors: [] }, r[n]._errors.push(t(a))) : r[n] = r[n] || { _errors: [] }, r = r[n], i++;
				}
			}
		}
	};
	return r(e), n;
}
function et(e, t = (e) => e.message) {
	let n = { errors: [] }, r = (e, i = []) => {
		var a, o;
		for (let s of e.issues) if (s.code === "invalid_union" && s.errors.length) s.errors.map((e) => r({ issues: e }, [...i, ...s.path]));
		else if (s.code === "invalid_key") r({ issues: s.issues }, [...i, ...s.path]);
		else if (s.code === "invalid_element") r({ issues: s.issues }, [...i, ...s.path]);
		else {
			let e = [...i, ...s.path];
			if (e.length === 0) {
				n.errors.push(t(s));
				continue;
			}
			let r = n, c = 0;
			for (; c < e.length;) {
				let n = e[c], i = c === e.length - 1;
				typeof n == "string" ? (r.properties ??= {}, (a = r.properties)[n] ?? (a[n] = { errors: [] }), r = r.properties[n]) : (r.items ??= [], (o = r.items)[n] ?? (o[n] = { errors: [] }), r = r.items[n]), i && r.errors.push(t(s)), c++;
			}
		}
	};
	return r(e), n;
}
function tt(e) {
	let t = [], n = e.map((e) => typeof e == "object" ? e.key : e);
	for (let e of n) typeof e == "number" ? t.push(`[${e}]`) : typeof e == "symbol" ? t.push(`[${JSON.stringify(String(e))}]`) : /[^\w$]/.test(e) ? t.push(`[${JSON.stringify(e)}]`) : (t.length && t.push("."), t.push(e));
	return t.join("");
}
function nt(e) {
	let t = [], n = [...e.issues].sort((e, t) => (e.path ?? []).length - (t.path ?? []).length);
	for (let e of n) t.push(`✖ ${e.message}`), e.path?.length && t.push(`  → at ${tt(e.path)}`);
	return t.join("\n");
}
//#endregion
//#region node_modules/zod/v4/core/parse.js
var rt = (e) => (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (s instanceof Promise) throw new o();
	if (s.issues.length) {
		let t = new (i?.Err ?? e)(s.issues.map((e) => C(e, a, l())));
		throw _e(t, i?.callee), t;
	}
	return s.value;
}, it = /* @__PURE__ */ rt(T), at = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => C(e, a, l())));
		throw _e(t, i?.callee), t;
	}
	return o.value;
}, ot = /* @__PURE__ */ at(T), st = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new o();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Ze)(a.issues.map((e) => C(e, i, l())))
	} : {
		success: !0,
		data: a.value
	};
}, ct = /* @__PURE__ */ st(T), lt = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => C(e, i, l())))
	} : {
		success: !0,
		data: a.value
	};
}, ut = /* @__PURE__ */ lt(T), dt = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return rt(e)(t, n, i);
}, ft = /* @__PURE__ */ dt(T), pt = (e) => (t, n, r) => rt(e)(t, n, r), mt = /* @__PURE__ */ pt(T), ht = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return at(e)(t, n, i);
}, gt = /* @__PURE__ */ ht(T), _t = (e) => async (t, n, r) => at(e)(t, n, r), vt = /* @__PURE__ */ _t(T), yt = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return st(e)(t, n, i);
}, bt = /* @__PURE__ */ yt(T), xt = (e) => (t, n, r) => st(e)(t, n, r), St = /* @__PURE__ */ xt(T), Ct = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return lt(e)(t, n, i);
}, wt = /* @__PURE__ */ Ct(T), Tt = (e) => async (t, n, r) => lt(e)(t, n, r), Et = /* @__PURE__ */ Tt(T), Dt = /* @__PURE__ */ t({
	base64: () => en,
	base64url: () => tn,
	bigint: () => pn,
	boolean: () => gn,
	browserEmail: () => Kt,
	cidrv4: () => Qt,
	cidrv6: () => $t,
	cuid: () => Ot,
	cuid2: () => kt,
	date: () => cn,
	datetime: () => dn,
	domain: () => rn,
	duration: () => Pt,
	e164: () => on,
	email: () => Vt,
	emoji: () => Jt,
	extendedDuration: () => Ft,
	guid: () => It,
	hex: () => xn,
	hostname: () => nn,
	html5Email: () => Ht,
	httpProtocol: () => an,
	idnEmail: () => Gt,
	integer: () => mn,
	ipv4: () => Yt,
	ipv6: () => Xt,
	ksuid: () => Mt,
	lowercase: () => yn,
	mac: () => Zt,
	md5_base64: () => Tn,
	md5_base64url: () => En,
	md5_hex: () => wn,
	nanoid: () => Nt,
	null: () => _n,
	number: () => hn,
	rfc5322Email: () => Ut,
	sha1_base64: () => On,
	sha1_base64url: () => kn,
	sha1_hex: () => Dn,
	sha256_base64: () => jn,
	sha256_base64url: () => Mn,
	sha256_hex: () => An,
	sha384_base64: () => Pn,
	sha384_base64url: () => Fn,
	sha384_hex: () => Nn,
	sha512_base64: () => Ln,
	sha512_base64url: () => Rn,
	sha512_hex: () => In,
	string: () => fn,
	time: () => un,
	ulid: () => At,
	undefined: () => vn,
	unicodeEmail: () => Wt,
	uppercase: () => bn,
	uuid: () => Lt,
	uuid4: () => Rt,
	uuid6: () => zt,
	uuid7: () => Bt,
	xid: () => jt
}), Ot = /^[cC][0-9a-z]{6,}$/, kt = /^[0-9a-z]+$/, At = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jt = /^[0-9a-vA-V]{20}$/, Mt = /^[A-Za-z0-9]{27}$/, Nt = /^[a-zA-Z0-9_-]{21}$/, Pt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ft = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, It = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Lt = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Rt = /* @__PURE__ */ Lt(4), zt = /* @__PURE__ */ Lt(6), Bt = /* @__PURE__ */ Lt(7), Vt = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ht = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ut = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Wt = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Gt = Wt, Kt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, qt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Jt() {
	return new RegExp(qt, "u");
}
var Yt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Zt = (e) => {
	let t = v(e ?? ":");
	return RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
}, Qt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $t = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, en = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, tn = /^[A-Za-z0-9_-]*$/, nn = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, rn = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, an = /^https?$/, on = /^\+[1-9]\d{6,14}$/, sn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", cn = /* @__PURE__ */ RegExp(`^${sn}$`);
function ln(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function un(e) {
	return RegExp(`^${ln(e)}$`);
}
function dn(e) {
	let t = ln({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${sn}T(?:${r})$`);
}
var fn = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, pn = /^-?\d+n?$/, mn = /^-?\d+$/, hn = /^-?\d+(?:\.\d+)?$/, gn = /^(?:true|false)$/i, _n = /^null$/i, vn = /^undefined$/i, yn = /^[^A-Z]*$/, bn = /^[^a-z]*$/, xn = /^[0-9a-fA-F]*$/;
function Sn(e, t) {
	return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function Cn(e) {
	return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
var wn = /^[0-9a-fA-F]{32}$/, Tn = /* @__PURE__ */ Sn(22, "=="), En = /* @__PURE__ */ Cn(22), Dn = /^[0-9a-fA-F]{40}$/, On = /* @__PURE__ */ Sn(27, "="), kn = /* @__PURE__ */ Cn(27), An = /^[0-9a-fA-F]{64}$/, jn = /* @__PURE__ */ Sn(43, "="), Mn = /* @__PURE__ */ Cn(43), Nn = /^[0-9a-fA-F]{96}$/, Pn = /* @__PURE__ */ Sn(64, ""), Fn = /* @__PURE__ */ Cn(64), In = /^[0-9a-fA-F]{128}$/, Ln = /* @__PURE__ */ Sn(86, "=="), Rn = /* @__PURE__ */ Cn(86), E = /* @__PURE__ */ i("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), zn = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Bn = /* @__PURE__ */ i("$ZodCheckLessThan", (e, t) => {
	E.init(e, t);
	let n = zn[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Vn = /* @__PURE__ */ i("$ZodCheckGreaterThan", (e, t) => {
	E.init(e, t);
	let n = zn[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Hn = /* @__PURE__ */ i("$ZodCheckMultipleOf", (e, t) => {
	E.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : ce(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Un = /* @__PURE__ */ i("$ZodCheckNumberFormat", (e, t) => {
	E.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = De[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = mn);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Wn = /* @__PURE__ */ i("$ZodCheckBigIntFormat", (e, t) => {
	E.init(e, t);
	let [n, r] = Oe[t.format];
	e._zod.onattach.push((e) => {
		let i = e._zod.bag;
		i.format = t.format, i.minimum = n, i.maximum = r;
	}), e._zod.check = (i) => {
		let a = i.value;
		a < n && i.issues.push({
			origin: "bigint",
			input: a,
			code: "too_small",
			minimum: n,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), a > r && i.issues.push({
			origin: "bigint",
			input: a,
			code: "too_big",
			maximum: r,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Gn = /* @__PURE__ */ i("$ZodCheckMaxSize", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.size !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		r.size <= t.maximum || n.issues.push({
			origin: ze(r),
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Kn = /* @__PURE__ */ i("$ZodCheckMinSize", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.size !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		r.size >= t.minimum || n.issues.push({
			origin: ze(r),
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), qn = /* @__PURE__ */ i("$ZodCheckSizeEquals", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.size !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.size, n.maximum = t.size, n.size = t.size;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.size;
		if (i === t.size) return;
		let a = i > t.size;
		n.issues.push({
			origin: ze(r),
			...a ? {
				code: "too_big",
				maximum: t.size
			} : {
				code: "too_small",
				minimum: t.size
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Jn = /* @__PURE__ */ i("$ZodCheckMaxLength", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = Be(r);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Yn = /* @__PURE__ */ i("$ZodCheckMinLength", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = Be(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Xn = /* @__PURE__ */ i("$ZodCheckLengthEquals", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !oe(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = Be(r), o = i > t.length;
		n.issues.push({
			origin: a,
			...o ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zn = /* @__PURE__ */ i("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	E.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Qn = /* @__PURE__ */ i("$ZodCheckRegex", (e, t) => {
	Zn.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), $n = /* @__PURE__ */ i("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= yn, Zn.init(e, t);
}), er = /* @__PURE__ */ i("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= bn, Zn.init(e, t);
}), tr = /* @__PURE__ */ i("$ZodCheckIncludes", (e, t) => {
	E.init(e, t);
	let n = v(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nr = /* @__PURE__ */ i("$ZodCheckStartsWith", (e, t) => {
	E.init(e, t);
	let n = RegExp(`^${v(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), rr = /* @__PURE__ */ i("$ZodCheckEndsWith", (e, t) => {
	E.init(e, t);
	let n = RegExp(`.*${v(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function ir(e, t, n) {
	e.issues.length && t.issues.push(...S(n, e.issues));
}
var ar = /* @__PURE__ */ i("$ZodCheckProperty", (e, t) => {
	E.init(e, t), e._zod.check = (e) => {
		let n = t.schema._zod.run({
			value: e.value[t.property],
			issues: []
		}, {});
		if (n instanceof Promise) return n.then((n) => ir(n, e, t.property));
		ir(n, e, t.property);
	};
}), or = /* @__PURE__ */ i("$ZodCheckMimeType", (e, t) => {
	E.init(e, t);
	let n = new Set(t.mime);
	e._zod.onattach.push((e) => {
		e._zod.bag.mime = t.mime;
	}), e._zod.check = (r) => {
		n.has(r.value.type) || r.issues.push({
			code: "invalid_value",
			values: t.mime,
			input: r.value.type,
			inst: e,
			continue: !t.abort
		});
	};
}), sr = /* @__PURE__ */ i("$ZodCheckOverwrite", (e, t) => {
	E.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), cr = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.args, n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
		return new e(...t, n.join("\n"));
	}
}, lr = {
	major: 4,
	minor: 4,
	patch: 3
}, D = /* @__PURE__ */ i("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = lr;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = Ie(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (Le(e) || !a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, s = a._zod.check(e);
				if (s instanceof Promise && n?.async === !1) throw new o();
				if (i || s instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await s, e.issues.length !== t && (r ||= Ie(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= Ie(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (Ie(n)) return n.aborted = !0, n;
			let s = t(i, r, a);
			if (s instanceof Promise) {
				if (a.async === !1) throw new o();
				return s.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(s, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let s = e._zod.parse(i, a);
			if (s instanceof Promise) {
				if (a.async === !1) throw new o();
				return s.then((e) => t(e, r, a));
			}
			return t(s, r, a);
		};
	}
	m(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = ct(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return ut(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), ur = /* @__PURE__ */ i("$ZodString", (e, t) => {
	D.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? fn(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), O = /* @__PURE__ */ i("$ZodStringFormat", (e, t) => {
	Zn.init(e, t), ur.init(e, t);
}), dr = /* @__PURE__ */ i("$ZodGUID", (e, t) => {
	t.pattern ??= It, O.init(e, t);
}), fr = /* @__PURE__ */ i("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Lt(e);
	} else t.pattern ??= Lt();
	O.init(e, t);
}), pr = /* @__PURE__ */ i("$ZodEmail", (e, t) => {
	t.pattern ??= Vt, O.init(e, t);
}), mr = /* @__PURE__ */ i("$ZodURL", (e, t) => {
	O.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === an.source && !/^https?:\/\//i.test(r)) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			let i = new URL(r);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = i.href : n.value = r;
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), hr = /* @__PURE__ */ i("$ZodEmoji", (e, t) => {
	t.pattern ??= Jt(), O.init(e, t);
}), gr = /* @__PURE__ */ i("$ZodNanoID", (e, t) => {
	t.pattern ??= Nt, O.init(e, t);
}), _r = /* @__PURE__ */ i("$ZodCUID", (e, t) => {
	t.pattern ??= Ot, O.init(e, t);
}), vr = /* @__PURE__ */ i("$ZodCUID2", (e, t) => {
	t.pattern ??= kt, O.init(e, t);
}), yr = /* @__PURE__ */ i("$ZodULID", (e, t) => {
	t.pattern ??= At, O.init(e, t);
}), br = /* @__PURE__ */ i("$ZodXID", (e, t) => {
	t.pattern ??= jt, O.init(e, t);
}), xr = /* @__PURE__ */ i("$ZodKSUID", (e, t) => {
	t.pattern ??= Mt, O.init(e, t);
}), Sr = /* @__PURE__ */ i("$ZodISODateTime", (e, t) => {
	t.pattern ??= dn(t), O.init(e, t);
}), Cr = /* @__PURE__ */ i("$ZodISODate", (e, t) => {
	t.pattern ??= cn, O.init(e, t);
}), wr = /* @__PURE__ */ i("$ZodISOTime", (e, t) => {
	t.pattern ??= un(t), O.init(e, t);
}), Tr = /* @__PURE__ */ i("$ZodISODuration", (e, t) => {
	t.pattern ??= Pt, O.init(e, t);
}), Er = /* @__PURE__ */ i("$ZodIPv4", (e, t) => {
	t.pattern ??= Yt, O.init(e, t), e._zod.bag.format = "ipv4";
}), Dr = /* @__PURE__ */ i("$ZodIPv6", (e, t) => {
	t.pattern ??= Xt, O.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Or = /* @__PURE__ */ i("$ZodMAC", (e, t) => {
	t.pattern ??= Zt(t.delimiter), O.init(e, t), e._zod.bag.format = "mac";
}), kr = /* @__PURE__ */ i("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Qt, O.init(e, t);
}), Ar = /* @__PURE__ */ i("$ZodCIDRv6", (e, t) => {
	t.pattern ??= $t, O.init(e, t), e._zod.check = (n) => {
		let r = n.value.split("/");
		try {
			if (r.length !== 2) throw Error();
			let [e, t] = r;
			if (!t) throw Error();
			let n = Number(t);
			if (`${n}` !== t || n < 0 || n > 128) throw Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function jr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Mr = /* @__PURE__ */ i("$ZodBase64", (e, t) => {
	t.pattern ??= en, O.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		jr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Nr(e) {
	if (!tn.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return jr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Pr = /* @__PURE__ */ i("$ZodBase64URL", (e, t) => {
	t.pattern ??= tn, O.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Nr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Fr = /* @__PURE__ */ i("$ZodE164", (e, t) => {
	t.pattern ??= on, O.init(e, t);
});
function Ir(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Lr = /* @__PURE__ */ i("$ZodJWT", (e, t) => {
	O.init(e, t), e._zod.check = (n) => {
		Ir(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Rr = /* @__PURE__ */ i("$ZodCustomStringFormat", (e, t) => {
	O.init(e, t), e._zod.check = (n) => {
		t.fn(n.value) || n.issues.push({
			code: "invalid_format",
			format: t.format,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), zr = /* @__PURE__ */ i("$ZodNumber", (e, t) => {
	D.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? hn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), Br = /* @__PURE__ */ i("$ZodNumberFormat", (e, t) => {
	Un.init(e, t), zr.init(e, t);
}), Vr = /* @__PURE__ */ i("$ZodBoolean", (e, t) => {
	D.init(e, t), e._zod.pattern = gn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Hr = /* @__PURE__ */ i("$ZodBigInt", (e, t) => {
	D.init(e, t), e._zod.pattern = pn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = BigInt(n.value);
		} catch {}
		return typeof n.value == "bigint" || n.issues.push({
			expected: "bigint",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), Ur = /* @__PURE__ */ i("$ZodBigIntFormat", (e, t) => {
	Wn.init(e, t), Hr.init(e, t);
}), Wr = /* @__PURE__ */ i("$ZodSymbol", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => {
		let r = t.value;
		return typeof r == "symbol" || t.issues.push({
			expected: "symbol",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), Gr = /* @__PURE__ */ i("$ZodUndefined", (e, t) => {
	D.init(e, t), e._zod.pattern = vn, e._zod.values = new Set([void 0]), e._zod.parse = (t, n) => {
		let r = t.value;
		return r === void 0 || t.issues.push({
			expected: "undefined",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), Kr = /* @__PURE__ */ i("$ZodNull", (e, t) => {
	D.init(e, t), e._zod.pattern = _n, e._zod.values = new Set([null]), e._zod.parse = (t, n) => {
		let r = t.value;
		return r === null || t.issues.push({
			expected: "null",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), qr = /* @__PURE__ */ i("$ZodAny", (e, t) => {
	D.init(e, t), e._zod.parse = (e) => e;
}), Jr = /* @__PURE__ */ i("$ZodUnknown", (e, t) => {
	D.init(e, t), e._zod.parse = (e) => e;
}), Yr = /* @__PURE__ */ i("$ZodNever", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
}), Xr = /* @__PURE__ */ i("$ZodVoid", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => {
		let r = t.value;
		return r === void 0 || t.issues.push({
			expected: "void",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), Zr = /* @__PURE__ */ i("$ZodDate", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = new Date(n.value);
		} catch {}
		let i = n.value, a = i instanceof Date;
		return a && !Number.isNaN(i.getTime()) || n.issues.push({
			expected: "date",
			code: "invalid_type",
			input: i,
			...a ? { received: "Invalid Date" } : {},
			inst: e
		}), n;
	};
});
function Qr(e, t, n) {
	e.issues.length && t.issues.push(...S(n, e.issues)), t.value[n] = e.value;
}
var $r = /* @__PURE__ */ i("$ZodArray", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => Qr(t, n, e))) : Qr(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function ei(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...S(n, e.issues));
	}
	if (!o && !i) {
		e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
		return;
	}
	e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function ti(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = Ee(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function ni(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin === "optional", d = c.optout === "optional";
	for (let i in t) {
		if (i === "__proto__" || s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => ei(e, n, i, t, u, d))) : ei(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var ri = /* @__PURE__ */ i("$ZodObject", (e, t) => {
	if (D.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = ae(() => ti(t));
	m(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = ve, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optin === "optional", i = n._zod.optout === "optional", a = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			a instanceof Promise ? c.push(a.then((n) => ei(n, t, e, s, r, i))) : ei(a, t, e, s, r, i);
		}
		return i ? ni(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), ii = /* @__PURE__ */ i("$ZodObjectJIT", (e, t) => {
	ri.init(e, t);
	let n = e._zod.parse, r = ae(() => ti(t)), i = (e) => {
		let t = new cr([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = he(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = he(r), s = e[r], c = s?._zod?.optin === "optional", l = s?._zod?.optout === "optional";
			t.write(`const ${n} = ${i(r)};`), c && l ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : c ? t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `);
		}
		t.write("payload.value = newResult;"), t.write("return payload;");
		let s = t.compile();
		return (t, n) => s(e, t, n);
	}, a, o = ve, s = !c.jitless, l = s && ye.value, u = t.catchall, d;
	e._zod.parse = (c, f) => {
		d ??= r.value;
		let ee = c.value;
		return o(ee) ? s && l && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), c = a(c, f), u ? ni([], ee, c, f, d, e) : c) : n(c, f) : (c.issues.push({
			expected: "object",
			code: "invalid_type",
			input: ee,
			inst: e
		}), c);
	};
});
function ai(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !Ie(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => C(e, r, l())))
	}), t);
}
var oi = /* @__PURE__ */ i("$ZodUnion", (e, t) => {
	D.init(e, t), m(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), m(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), m(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), m(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => se(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => ai(t, r, e, i)) : ai(o, r, e, i);
	};
});
function si(e, t, n, r) {
	let i = e.filter((e) => e.issues.length === 0);
	return i.length === 1 ? (t.value = i[0].value, t) : (i.length === 0 ? t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => C(e, r, l())))
	}) : t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: [],
		inclusive: !1
	}), t);
}
var ci = /* @__PURE__ */ i("$ZodXor", (e, t) => {
	oi.init(e, t), t.inclusive = !1;
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			t instanceof Promise ? (o.push(t), a = !0) : o.push(t);
		}
		return a ? Promise.all(o).then((t) => si(t, r, e, i)) : si(o, r, e, i);
	};
}), li = /* @__PURE__ */ i("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, oi.init(e, t);
	let n = e._zod.parse;
	m(e._zod, "propValues", () => {
		let e = {};
		for (let n of t.options) {
			let r = n._zod.propValues;
			if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
			for (let [t, n] of Object.entries(r)) {
				e[t] || (e[t] = /* @__PURE__ */ new Set());
				for (let r of n) e[t].add(r);
			}
		}
		return e;
	});
	let r = ae(() => {
		let e = t.options, n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r._zod.propValues?.[t.discriminator];
			if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
			for (let t of e) {
				if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
				n.set(t, r);
			}
		}
		return n;
	});
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!ve(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = r.value.get(o?.[t.discriminator]);
		return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			options: Array.from(r.value.keys()),
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), ui = /* @__PURE__ */ i("$ZodIntersection", (e, t) => {
	D.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => fi(e, t, n)) : fi(e, i, a);
	};
});
function di(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (_(e) && _(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = di(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = di(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function fi(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), Ie(e)) return e;
	let o = di(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var pi = /* @__PURE__ */ i("$ZodTuple", (e, t) => {
	D.init(e, t);
	let n = t.items;
	e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			input: a,
			inst: e,
			expected: "tuple",
			code: "invalid_type"
		}), r;
		r.value = [];
		let o = [], s = mi(n, "optin"), c = mi(n, "optout");
		if (!t.rest) {
			if (a.length < s) return r.issues.push({
				code: "too_small",
				minimum: s,
				inclusive: !0,
				input: a,
				inst: e,
				origin: "array"
			}), r;
			a.length > n.length && r.issues.push({
				code: "too_big",
				maximum: n.length,
				inclusive: !0,
				input: a,
				inst: e,
				origin: "array"
			});
		}
		let l = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e]._zod.run({
				value: a[e],
				issues: []
			}, i);
			t instanceof Promise ? o.push(t.then((t) => {
				l[e] = t;
			})) : l[e] = t;
		}
		if (t.rest) {
			let e = n.length - 1, s = a.slice(n.length);
			for (let n of s) {
				e++;
				let a = t.rest._zod.run({
					value: n,
					issues: []
				}, i);
				a instanceof Promise ? o.push(a.then((t) => hi(t, r, e))) : hi(a, r, e);
			}
		}
		return o.length ? Promise.all(o).then(() => gi(l, r, n, a, c)) : gi(l, r, n, a, c);
	};
});
function mi(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (e[n]._zod[t] !== "optional") return n + 1;
	return 0;
}
function hi(e, t, n) {
	e.issues.length && t.issues.push(...S(n, e.issues)), t.value[n] = e.value;
}
function gi(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let n = e[a], o = a < r.length;
		if (n.issues.length) {
			if (!o && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...S(a, n.issues));
		}
		t.value[a] = n.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
var _i = /* @__PURE__ */ i("$ZodRecord", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!_(i)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		let a = [], o = t.keyType._zod.values;
		if (o) {
			n.value = {};
			let s = /* @__PURE__ */ new Set();
			for (let c of o) if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
				s.add(typeof c == "number" ? c.toString() : c);
				let o = t.keyType._zod.run({
					value: c,
					issues: []
				}, r);
				if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (o.issues.length) {
					n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => C(e, r, l())),
						input: c,
						path: [c],
						inst: e
					});
					continue;
				}
				let u = o.value, d = t.valueType._zod.run({
					value: i[c],
					issues: []
				}, r);
				d instanceof Promise ? a.push(d.then((e) => {
					e.issues.length && n.issues.push(...S(c, e.issues)), n.value[u] = e.value;
				})) : (d.issues.length && n.issues.push(...S(c, d.issues)), n.value[u] = d.value);
			}
			let c;
			for (let e in i) s.has(e) || (c ??= [], c.push(e));
			c && c.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: i,
				inst: e,
				keys: c
			});
		} else {
			n.value = {};
			for (let o of Reflect.ownKeys(i)) {
				if (o === "__proto__" || !Object.prototype.propertyIsEnumerable.call(i, o)) continue;
				let s = t.keyType._zod.run({
					value: o,
					issues: []
				}, r);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof o == "string" && hn.test(o) && s.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(o),
						issues: []
					}, r);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (s = e);
				}
				if (s.issues.length) {
					t.mode === "loose" ? n.value[o] = i[o] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => C(e, r, l())),
						input: o,
						path: [o],
						inst: e
					});
					continue;
				}
				let c = t.valueType._zod.run({
					value: i[o],
					issues: []
				}, r);
				c instanceof Promise ? a.push(c.then((e) => {
					e.issues.length && n.issues.push(...S(o, e.issues)), n.value[s.value] = e.value;
				})) : (c.issues.length && n.issues.push(...S(o, c.issues)), n.value[s.value] = c.value);
			}
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
}), vi = /* @__PURE__ */ i("$ZodMap", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!(i instanceof Map)) return n.issues.push({
			expected: "map",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		let a = [];
		n.value = /* @__PURE__ */ new Map();
		for (let [o, s] of i) {
			let c = t.keyType._zod.run({
				value: o,
				issues: []
			}, r), l = t.valueType._zod.run({
				value: s,
				issues: []
			}, r);
			c instanceof Promise || l instanceof Promise ? a.push(Promise.all([c, l]).then(([t, a]) => {
				yi(t, a, n, o, i, e, r);
			})) : yi(c, l, n, o, i, e, r);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function yi(e, t, n, r, i, a, o) {
	e.issues.length && (Ce.has(typeof r) ? n.issues.push(...S(r, e.issues)) : n.issues.push({
		code: "invalid_key",
		origin: "map",
		input: i,
		inst: a,
		issues: e.issues.map((e) => C(e, o, l()))
	})), t.issues.length && (Ce.has(typeof r) ? n.issues.push(...S(r, t.issues)) : n.issues.push({
		origin: "map",
		code: "invalid_element",
		input: i,
		inst: a,
		key: r,
		issues: t.issues.map((e) => C(e, o, l()))
	})), n.value.set(e.value, t.value);
}
var bi = /* @__PURE__ */ i("$ZodSet", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!(i instanceof Set)) return n.issues.push({
			input: i,
			inst: e,
			expected: "set",
			code: "invalid_type"
		}), n;
		let a = [];
		n.value = /* @__PURE__ */ new Set();
		for (let e of i) {
			let i = t.valueType._zod.run({
				value: e,
				issues: []
			}, r);
			i instanceof Promise ? a.push(i.then((e) => xi(e, n))) : xi(i, n);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function xi(e, t) {
	e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
var Si = /* @__PURE__ */ i("$ZodEnum", (e, t) => {
	D.init(e, t);
	let n = re(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => Ce.has(typeof e)).map((e) => typeof e == "string" ? v(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Ci = /* @__PURE__ */ i("$ZodLiteral", (e, t) => {
	if (D.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? v(e) : e ? v(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), wi = /* @__PURE__ */ i("$ZodFile", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => {
		let r = t.value;
		return r instanceof File || t.issues.push({
			expected: "file",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), Ti = /* @__PURE__ */ i("$ZodTransform", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new s(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new o();
		return n.value = i, n.fallback = !0, n;
	};
});
function Ei(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var Di = /* @__PURE__ */ i("$ZodOptional", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", m(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), m(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${se(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => Ei(e, r)) : Ei(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), Oi = /* @__PURE__ */ i("$ZodExactOptional", (e, t) => {
	Di.init(e, t), m(e._zod, "values", () => t.innerType._zod.values), m(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), ki = /* @__PURE__ */ i("$ZodNullable", (e, t) => {
	D.init(e, t), m(e._zod, "optin", () => t.innerType._zod.optin), m(e._zod, "optout", () => t.innerType._zod.optout), m(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${se(e.source)}|null)$`) : void 0;
	}), m(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Ai = /* @__PURE__ */ i("$ZodDefault", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", m(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => ji(e, t)) : ji(r, t);
	};
});
function ji(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Mi = /* @__PURE__ */ i("$ZodPrefault", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", m(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Ni = /* @__PURE__ */ i("$ZodNonOptional", (e, t) => {
	D.init(e, t), m(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Pi(t, e)) : Pi(i, e);
	};
});
function Pi(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Fi = /* @__PURE__ */ i("$ZodSuccess", (e, t) => {
	D.init(e, t), e._zod.parse = (e, n) => {
		if (n.direction === "backward") throw new s("ZodSuccess");
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((t) => (e.value = t.issues.length === 0, e)) : (e.value = r.issues.length === 0, e);
	};
}), Ii = /* @__PURE__ */ i("$ZodCatch", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", m(e._zod, "optout", () => t.innerType._zod.optout), m(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => C(e, n, l())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => C(e, n, l())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), Li = /* @__PURE__ */ i("$ZodNaN", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => ((typeof t.value != "number" || !Number.isNaN(t.value)) && t.issues.push({
		input: t.value,
		inst: e,
		expected: "nan",
		code: "invalid_type"
	}), t);
}), Ri = /* @__PURE__ */ i("$ZodPipe", (e, t) => {
	D.init(e, t), m(e._zod, "values", () => t.in._zod.values), m(e._zod, "optin", () => t.in._zod.optin), m(e._zod, "optout", () => t.out._zod.optout), m(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => zi(e, t.in, n)) : zi(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => zi(e, t.out, n)) : zi(r, t.out, n);
	};
});
function zi(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
var Bi = /* @__PURE__ */ i("$ZodCodec", (e, t) => {
	D.init(e, t), m(e._zod, "values", () => t.in._zod.values), m(e._zod, "optin", () => t.in._zod.optin), m(e._zod, "optout", () => t.out._zod.optout), m(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ((n.direction || "forward") === "forward") {
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Vi(e, t, n)) : Vi(r, t, n);
		} else {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Vi(e, t, n)) : Vi(r, t, n);
		}
	};
});
function Vi(e, t, n) {
	if (e.issues.length) return e.aborted = !0, e;
	if ((n.direction || "forward") === "forward") {
		let r = t.transform(e.value, e);
		return r instanceof Promise ? r.then((r) => Hi(e, r, t.out, n)) : Hi(e, r, t.out, n);
	} else {
		let r = t.reverseTransform(e.value, e);
		return r instanceof Promise ? r.then((r) => Hi(e, r, t.in, n)) : Hi(e, r, t.in, n);
	}
}
function Hi(e, t, n, r) {
	return e.issues.length ? (e.aborted = !0, e) : n._zod.run({
		value: t,
		issues: e.issues
	}, r);
}
var Ui = /* @__PURE__ */ i("$ZodPreprocess", (e, t) => {
	Ri.init(e, t);
}), Wi = /* @__PURE__ */ i("$ZodReadonly", (e, t) => {
	D.init(e, t), m(e._zod, "propValues", () => t.innerType._zod.propValues), m(e._zod, "values", () => t.innerType._zod.values), m(e._zod, "optin", () => t.innerType?._zod?.optin), m(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Gi) : Gi(r);
	};
});
function Gi(e) {
	return e.value = Object.freeze(e.value), e;
}
var Ki = /* @__PURE__ */ i("$ZodTemplateLiteral", (e, t) => {
	D.init(e, t);
	let n = [];
	for (let e of t.parts) if (typeof e == "object" && e) {
		if (!e._zod.pattern) throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`);
		let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
		if (!t) throw Error(`Invalid template literal part: ${e._zod.traits}`);
		let r = +!!t.startsWith("^"), i = t.endsWith("$") ? t.length - 1 : t.length;
		n.push(t.slice(r, i));
	} else if (e === null || we.has(typeof e)) n.push(v(`${e}`));
	else throw Error(`Invalid template literal part: ${e}`);
	e._zod.pattern = RegExp(`^${n.join("")}$`), e._zod.parse = (n, r) => typeof n.value == "string" ? (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(n.value) || n.issues.push({
		input: n.value,
		inst: e,
		code: "invalid_format",
		format: t.format ?? "template_literal",
		pattern: e._zod.pattern.source
	}), n) : (n.issues.push({
		input: n.value,
		inst: e,
		expected: "string",
		code: "invalid_type"
	}), n);
}), qi = /* @__PURE__ */ i("$ZodFunction", (e, t) => (D.init(e, t), e._def = t, e._zod.def = t, e.implement = (t) => {
	if (typeof t != "function") throw Error("implement() must be called with a function");
	return function(...n) {
		let r = e._def.input ? it(e._def.input, n) : n, i = Reflect.apply(t, this, r);
		return e._def.output ? it(e._def.output, i) : i;
	};
}, e.implementAsync = (t) => {
	if (typeof t != "function") throw Error("implementAsync() must be called with a function");
	return async function(...n) {
		let r = e._def.input ? await ot(e._def.input, n) : n, i = await Reflect.apply(t, this, r);
		return e._def.output ? await ot(e._def.output, i) : i;
	};
}, e._zod.parse = (t, n) => typeof t.value == "function" ? (e._def.output && e._def.output._zod.def.type === "promise" ? t.value = e.implementAsync(t.value) : t.value = e.implement(t.value), t) : (t.issues.push({
	code: "invalid_type",
	expected: "function",
	input: t.value,
	inst: e
}), t), e.input = (...t) => {
	let n = e.constructor;
	return Array.isArray(t[0]) ? new n({
		type: "function",
		input: new pi({
			type: "tuple",
			items: t[0],
			rest: t[1]
		}),
		output: e._def.output
	}) : new n({
		type: "function",
		input: t[0],
		output: e._def.output
	});
}, e.output = (t) => {
	let n = e.constructor;
	return new n({
		type: "function",
		input: e._def.input,
		output: t
	});
}, e)), Ji = /* @__PURE__ */ i("$ZodPromise", (e, t) => {
	D.init(e, t), e._zod.parse = (e, n) => Promise.resolve(e.value).then((e) => t.innerType._zod.run({
		value: e,
		issues: []
	}, n));
}), Yi = /* @__PURE__ */ i("$ZodLazy", (e, t) => {
	D.init(e, t), m(e._zod, "innerType", () => {
		let e = t;
		return e._cachedInner ||= t.getter(), e._cachedInner;
	}), m(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), m(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), m(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), m(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
}), Xi = /* @__PURE__ */ i("$ZodCustom", (e, t) => {
	E.init(e, t), D.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Zi(t, n, r, e));
		Zi(i, n, r, e);
	};
});
function Zi(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Ve(e));
	}
}
//#endregion
//#region node_modules/zod/v4/locales/ar.js
var Qi = () => {
	let e = {
		string: {
			unit: "حرف",
			verb: "أن يحوي"
		},
		file: {
			unit: "بايت",
			verb: "أن يحوي"
		},
		array: {
			unit: "عنصر",
			verb: "أن يحوي"
		},
		set: {
			unit: "عنصر",
			verb: "أن يحوي"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "مدخل",
		email: "بريد إلكتروني",
		url: "رابط",
		emoji: "إيموجي",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "تاريخ ووقت بمعيار ISO",
		date: "تاريخ بمعيار ISO",
		time: "وقت بمعيار ISO",
		duration: "مدة بمعيار ISO",
		ipv4: "عنوان IPv4",
		ipv6: "عنوان IPv6",
		cidrv4: "مدى عناوين بصيغة IPv4",
		cidrv6: "مدى عناوين بصيغة IPv6",
		base64: "نَص بترميز base64-encoded",
		base64url: "نَص بترميز base64url-encoded",
		json_string: "نَص على هيئة JSON",
		e164: "رقم هاتف بمعيار E.164",
		jwt: "JWT",
		template_literal: "مدخل"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${e.expected}، ولكن تم إدخال ${i}` : `مدخلات غير مقبولة: يفترض إدخال ${t}، ولكن تم إدخال ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${x(e.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? ` أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${n} ${e.maximum.toString()} ${r.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${n} ${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()} ${r.unit}` : `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${e.prefix}"` : t.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${t.suffix}"` : t.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${t.includes}"` : t.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${t.pattern}` : `${n[t.format] ?? e.format} غير مقبول`;
			}
			case "not_multiple_of": return `رقم غير مقبول: يجب أن يكون من مضاعفات ${e.divisor}`;
			case "unrecognized_keys": return `معرف${e.keys.length > 1 ? "ات" : ""} غريب${e.keys.length > 1 ? "ة" : ""}: ${p(e.keys, "، ")}`;
			case "invalid_key": return `معرف غير مقبول في ${e.origin}`;
			case "invalid_union": return "مدخل غير مقبول";
			case "invalid_element": return `مدخل غير مقبول في ${e.origin}`;
			default: return "مدخل غير مقبول";
		}
	};
};
function $i() {
	return { localeError: Qi() };
}
//#endregion
//#region node_modules/zod/v4/locales/az.js
var ea = () => {
	let e = {
		string: {
			unit: "simvol",
			verb: "olmalıdır"
		},
		file: {
			unit: "bayt",
			verb: "olmalıdır"
		},
		array: {
			unit: "element",
			verb: "olmalıdır"
		},
		set: {
			unit: "element",
			verb: "olmalıdır"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Yanlış dəyər: gözlənilən instanceof ${e.expected}, daxil olan ${i}` : `Yanlış dəyər: gözlənilən ${t}, daxil olan ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Yanlış dəyər: gözlənilən ${x(e.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Çox böyük: gözlənilən ${e.origin ?? "dəyər"} ${n}${e.maximum.toString()} ${r.unit ?? "element"}` : `Çox böyük: gözlənilən ${e.origin ?? "dəyər"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()} ${r.unit}` : `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Yanlış mətn: "${t.prefix}" ilə başlamalıdır` : t.format === "ends_with" ? `Yanlış mətn: "${t.suffix}" ilə bitməlidir` : t.format === "includes" ? `Yanlış mətn: "${t.includes}" daxil olmalıdır` : t.format === "regex" ? `Yanlış mətn: ${t.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Yanlış ədəd: ${e.divisor} ilə bölünə bilən olmalıdır`;
			case "unrecognized_keys": return `Tanınmayan açar${e.keys.length > 1 ? "lar" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} daxilində yanlış açar`;
			case "invalid_union": return "Yanlış dəyər";
			case "invalid_element": return `${e.origin} daxilində yanlış dəyər`;
			default: return "Yanlış dəyər";
		}
	};
};
function ta() {
	return { localeError: ea() };
}
//#endregion
//#region node_modules/zod/v4/locales/be.js
function na(e, t, n, r) {
	let i = Math.abs(e), a = i % 10, o = i % 100;
	return o >= 11 && o <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r;
}
var ra = () => {
	let e = {
		string: {
			unit: {
				one: "сімвал",
				few: "сімвалы",
				many: "сімвалаў"
			},
			verb: "мець"
		},
		array: {
			unit: {
				one: "элемент",
				few: "элементы",
				many: "элементаў"
			},
			verb: "мець"
		},
		set: {
			unit: {
				one: "элемент",
				few: "элементы",
				many: "элементаў"
			},
			verb: "мець"
		},
		file: {
			unit: {
				one: "байт",
				few: "байты",
				many: "байтаў"
			},
			verb: "мець"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "увод",
		email: "email адрас",
		url: "URL",
		emoji: "эмодзі",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO дата і час",
		date: "ISO дата",
		time: "ISO час",
		duration: "ISO працягласць",
		ipv4: "IPv4 адрас",
		ipv6: "IPv6 адрас",
		cidrv4: "IPv4 дыяпазон",
		cidrv6: "IPv6 дыяпазон",
		base64: "радок у фармаце base64",
		base64url: "радок у фармаце base64url",
		json_string: "JSON радок",
		e164: "нумар E.164",
		jwt: "JWT",
		template_literal: "увод"
	}, r = {
		nan: "NaN",
		number: "лік",
		array: "масіў"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Няправільны ўвод: чакаўся instanceof ${e.expected}, атрымана ${i}` : `Няправільны ўвод: чакаўся ${t}, атрымана ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Няправільны ўвод: чакалася ${x(e.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				if (r) {
					let t = na(Number(e.maximum), r.unit.one, r.unit.few, r.unit.many);
					return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна ${r.verb} ${n}${e.maximum.toString()} ${t}`;
				}
				return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна быць ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				if (r) {
					let t = na(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
					return `Занадта малы: чакалася, што ${e.origin} павінна ${r.verb} ${n}${e.minimum.toString()} ${t}`;
				}
				return `Занадта малы: чакалася, што ${e.origin} павінна быць ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${t.prefix}"` : t.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${t.suffix}"` : t.format === "includes" ? `Няправільны радок: павінен змяшчаць "${t.includes}"` : t.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${t.pattern}` : `Няправільны ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Няправільны лік: павінен быць кратным ${e.divisor}`;
			case "unrecognized_keys": return `Нераспазнаны ${e.keys.length > 1 ? "ключы" : "ключ"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Няправільны ключ у ${e.origin}`;
			case "invalid_union": return "Няправільны ўвод";
			case "invalid_element": return `Няправільнае значэнне ў ${e.origin}`;
			default: return "Няправільны ўвод";
		}
	};
};
function ia() {
	return { localeError: ra() };
}
//#endregion
//#region node_modules/zod/v4/locales/bg.js
var aa = () => {
	let e = {
		string: {
			unit: "символа",
			verb: "да съдържа"
		},
		file: {
			unit: "байта",
			verb: "да съдържа"
		},
		array: {
			unit: "елемента",
			verb: "да съдържа"
		},
		set: {
			unit: "елемента",
			verb: "да съдържа"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "вход",
		email: "имейл адрес",
		url: "URL",
		emoji: "емоджи",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO време",
		date: "ISO дата",
		time: "ISO време",
		duration: "ISO продължителност",
		ipv4: "IPv4 адрес",
		ipv6: "IPv6 адрес",
		cidrv4: "IPv4 диапазон",
		cidrv6: "IPv6 диапазон",
		base64: "base64-кодиран низ",
		base64url: "base64url-кодиран низ",
		json_string: "JSON низ",
		e164: "E.164 номер",
		jwt: "JWT",
		template_literal: "вход"
	}, r = {
		nan: "NaN",
		number: "число",
		array: "масив"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Невалиден вход: очакван instanceof ${e.expected}, получен ${i}` : `Невалиден вход: очакван ${t}, получен ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Невалиден вход: очакван ${x(e.values[0])}` : `Невалидна опция: очаквано едно от ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Твърде голямо: очаква се ${e.origin ?? "стойност"} да съдържа ${n}${e.maximum.toString()} ${r.unit ?? "елемента"}` : `Твърде голямо: очаква се ${e.origin ?? "стойност"} да бъде ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Твърде малко: очаква се ${e.origin} да съдържа ${n}${e.minimum.toString()} ${r.unit}` : `Твърде малко: очаква се ${e.origin} да бъде ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				if (t.format === "starts_with") return `Невалиден низ: трябва да започва с "${t.prefix}"`;
				if (t.format === "ends_with") return `Невалиден низ: трябва да завършва с "${t.suffix}"`;
				if (t.format === "includes") return `Невалиден низ: трябва да включва "${t.includes}"`;
				if (t.format === "regex") return `Невалиден низ: трябва да съвпада с ${t.pattern}`;
				let r = "Невалиден";
				return t.format === "emoji" && (r = "Невалидно"), t.format === "datetime" && (r = "Невалидно"), t.format === "date" && (r = "Невалидна"), t.format === "time" && (r = "Невалидно"), t.format === "duration" && (r = "Невалидна"), `${r} ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Невалидно число: трябва да бъде кратно на ${e.divisor}`;
			case "unrecognized_keys": return `Неразпознат${e.keys.length > 1 ? "и" : ""} ключ${e.keys.length > 1 ? "ове" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Невалиден ключ в ${e.origin}`;
			case "invalid_union": return "Невалиден вход";
			case "invalid_element": return `Невалидна стойност в ${e.origin}`;
			default: return "Невалиден вход";
		}
	};
};
function oa() {
	return { localeError: aa() };
}
//#endregion
//#region node_modules/zod/v4/locales/ca.js
var sa = () => {
	let e = {
		string: {
			unit: "caràcters",
			verb: "contenir"
		},
		file: {
			unit: "bytes",
			verb: "contenir"
		},
		array: {
			unit: "elements",
			verb: "contenir"
		},
		set: {
			unit: "elements",
			verb: "contenir"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "entrada",
		email: "adreça electrònica",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "data i hora ISO",
		date: "data ISO",
		time: "hora ISO",
		duration: "durada ISO",
		ipv4: "adreça IPv4",
		ipv6: "adreça IPv6",
		cidrv4: "rang IPv4",
		cidrv6: "rang IPv6",
		base64: "cadena codificada en base64",
		base64url: "cadena codificada en base64url",
		json_string: "cadena JSON",
		e164: "número E.164",
		jwt: "JWT",
		template_literal: "entrada"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Tipus invàlid: s'esperava instanceof ${e.expected}, s'ha rebut ${i}` : `Tipus invàlid: s'esperava ${t}, s'ha rebut ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Valor invàlid: s'esperava ${x(e.values[0])}` : `Opció invàlida: s'esperava una de ${p(e.values, " o ")}`;
			case "too_big": {
				let n = e.inclusive ? "com a màxim" : "menys de", r = t(e.origin);
				return r ? `Massa gran: s'esperava que ${e.origin ?? "el valor"} contingués ${n} ${e.maximum.toString()} ${r.unit ?? "elements"}` : `Massa gran: s'esperava que ${e.origin ?? "el valor"} fos ${n} ${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? "com a mínim" : "més de", r = t(e.origin);
				return r ? `Massa petit: s'esperava que ${e.origin} contingués ${n} ${e.minimum.toString()} ${r.unit}` : `Massa petit: s'esperava que ${e.origin} fos ${n} ${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Format invàlid: ha de començar amb "${t.prefix}"` : t.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${t.suffix}"` : t.format === "includes" ? `Format invàlid: ha d'incloure "${t.includes}"` : t.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${t.pattern}` : `Format invàlid per a ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Número invàlid: ha de ser múltiple de ${e.divisor}`;
			case "unrecognized_keys": return `Clau${e.keys.length > 1 ? "s" : ""} no reconeguda${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Clau invàlida a ${e.origin}`;
			case "invalid_union": return "Entrada invàlida";
			case "invalid_element": return `Element invàlid a ${e.origin}`;
			default: return "Entrada invàlida";
		}
	};
};
function ca() {
	return { localeError: sa() };
}
//#endregion
//#region node_modules/zod/v4/locales/cs.js
var la = () => {
	let e = {
		string: {
			unit: "znaků",
			verb: "mít"
		},
		file: {
			unit: "bajtů",
			verb: "mít"
		},
		array: {
			unit: "prvků",
			verb: "mít"
		},
		set: {
			unit: "prvků",
			verb: "mít"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "regulární výraz",
		email: "e-mailová adresa",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "datum a čas ve formátu ISO",
		date: "datum ve formátu ISO",
		time: "čas ve formátu ISO",
		duration: "doba trvání ISO",
		ipv4: "IPv4 adresa",
		ipv6: "IPv6 adresa",
		cidrv4: "rozsah IPv4",
		cidrv6: "rozsah IPv6",
		base64: "řetězec zakódovaný ve formátu base64",
		base64url: "řetězec zakódovaný ve formátu base64url",
		json_string: "řetězec ve formátu JSON",
		e164: "číslo E.164",
		jwt: "JWT",
		template_literal: "vstup"
	}, r = {
		nan: "NaN",
		number: "číslo",
		string: "řetězec",
		function: "funkce",
		array: "pole"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Neplatný vstup: očekáváno instanceof ${e.expected}, obdrženo ${i}` : `Neplatný vstup: očekáváno ${t}, obdrženo ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Neplatný vstup: očekáváno ${x(e.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Hodnota je příliš velká: ${e.origin ?? "hodnota"} musí mít ${n}${e.maximum.toString()} ${r.unit ?? "prvků"}` : `Hodnota je příliš velká: ${e.origin ?? "hodnota"} musí být ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Hodnota je příliš malá: ${e.origin ?? "hodnota"} musí mít ${n}${e.minimum.toString()} ${r.unit ?? "prvků"}` : `Hodnota je příliš malá: ${e.origin ?? "hodnota"} musí být ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${t.prefix}"` : t.format === "ends_with" ? `Neplatný řetězec: musí končit na "${t.suffix}"` : t.format === "includes" ? `Neplatný řetězec: musí obsahovat "${t.includes}"` : t.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${t.pattern}` : `Neplatný formát ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Neplatné číslo: musí být násobkem ${e.divisor}`;
			case "unrecognized_keys": return `Neznámé klíče: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Neplatný klíč v ${e.origin}`;
			case "invalid_union": return "Neplatný vstup";
			case "invalid_element": return `Neplatná hodnota v ${e.origin}`;
			default: return "Neplatný vstup";
		}
	};
};
function ua() {
	return { localeError: la() };
}
//#endregion
//#region node_modules/zod/v4/locales/da.js
var da = () => {
	let e = {
		string: {
			unit: "tegn",
			verb: "havde"
		},
		file: {
			unit: "bytes",
			verb: "havde"
		},
		array: {
			unit: "elementer",
			verb: "indeholdt"
		},
		set: {
			unit: "elementer",
			verb: "indeholdt"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "e-mailadresse",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO dato- og klokkeslæt",
		date: "ISO-dato",
		time: "ISO-klokkeslæt",
		duration: "ISO-varighed",
		ipv4: "IPv4-område",
		ipv6: "IPv6-område",
		cidrv4: "IPv4-spektrum",
		cidrv6: "IPv6-spektrum",
		base64: "base64-kodet streng",
		base64url: "base64url-kodet streng",
		json_string: "JSON-streng",
		e164: "E.164-nummer",
		jwt: "JWT",
		template_literal: "input"
	}, r = {
		nan: "NaN",
		string: "streng",
		number: "tal",
		boolean: "boolean",
		array: "liste",
		object: "objekt",
		set: "sæt",
		file: "fil"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ugyldigt input: forventede instanceof ${e.expected}, fik ${i}` : `Ugyldigt input: forventede ${t}, fik ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ugyldig værdi: forventede ${x(e.values[0])}` : `Ugyldigt valg: forventede en af følgende ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `For stor: forventede ${a ?? "value"} ${i.verb} ${n} ${e.maximum.toString()} ${i.unit ?? "elementer"}` : `For stor: forventede ${a ?? "value"} havde ${n} ${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `For lille: forventede ${a} ${i.verb} ${n} ${e.minimum.toString()} ${i.unit}` : `For lille: forventede ${a} havde ${n} ${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ugyldig streng: skal starte med "${t.prefix}"` : t.format === "ends_with" ? `Ugyldig streng: skal ende med "${t.suffix}"` : t.format === "includes" ? `Ugyldig streng: skal indeholde "${t.includes}"` : t.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${t.pattern}` : `Ugyldig ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Ugyldigt tal: skal være deleligt med ${e.divisor}`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Ugyldig nøgle i ${e.origin}`;
			case "invalid_union": return "Ugyldigt input: matcher ingen af de tilladte typer";
			case "invalid_element": return `Ugyldig værdi i ${e.origin}`;
			default: return "Ugyldigt input";
		}
	};
};
function fa() {
	return { localeError: da() };
}
//#endregion
//#region node_modules/zod/v4/locales/de.js
var pa = () => {
	let e = {
		string: {
			unit: "Zeichen",
			verb: "zu haben"
		},
		file: {
			unit: "Bytes",
			verb: "zu haben"
		},
		array: {
			unit: "Elemente",
			verb: "zu haben"
		},
		set: {
			unit: "Elemente",
			verb: "zu haben"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "Eingabe",
		email: "E-Mail-Adresse",
		url: "URL",
		emoji: "Emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO-Datum und -Uhrzeit",
		date: "ISO-Datum",
		time: "ISO-Uhrzeit",
		duration: "ISO-Dauer",
		ipv4: "IPv4-Adresse",
		ipv6: "IPv6-Adresse",
		cidrv4: "IPv4-Bereich",
		cidrv6: "IPv6-Bereich",
		base64: "Base64-codierter String",
		base64url: "Base64-URL-codierter String",
		json_string: "JSON-String",
		e164: "E.164-Nummer",
		jwt: "JWT",
		template_literal: "Eingabe"
	}, r = {
		nan: "NaN",
		number: "Zahl",
		array: "Array"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ungültige Eingabe: erwartet instanceof ${e.expected}, erhalten ${i}` : `Ungültige Eingabe: erwartet ${t}, erhalten ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ungültige Eingabe: erwartet ${x(e.values[0])}` : `Ungültige Option: erwartet eine von ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Zu groß: erwartet, dass ${e.origin ?? "Wert"} ${n}${e.maximum.toString()} ${r.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${e.origin ?? "Wert"} ${n}${e.maximum.toString()} ist`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ${r.unit} hat` : `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ist`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ungültiger String: muss mit "${t.prefix}" beginnen` : t.format === "ends_with" ? `Ungültiger String: muss mit "${t.suffix}" enden` : t.format === "includes" ? `Ungültiger String: muss "${t.includes}" enthalten` : t.format === "regex" ? `Ungültiger String: muss dem Muster ${t.pattern} entsprechen` : `Ungültig: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Ungültige Zahl: muss ein Vielfaches von ${e.divisor} sein`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Ungültiger Schlüssel in ${e.origin}`;
			case "invalid_union": return "Ungültige Eingabe";
			case "invalid_element": return `Ungültiger Wert in ${e.origin}`;
			default: return "Ungültige Eingabe";
		}
	};
};
function ma() {
	return { localeError: pa() };
}
//#endregion
//#region node_modules/zod/v4/locales/el.js
var ha = () => {
	let e = {
		string: {
			unit: "χαρακτήρες",
			verb: "να έχει"
		},
		file: {
			unit: "bytes",
			verb: "να έχει"
		},
		array: {
			unit: "στοιχεία",
			verb: "να έχει"
		},
		set: {
			unit: "στοιχεία",
			verb: "να έχει"
		},
		map: {
			unit: "καταχωρήσεις",
			verb: "να έχει"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "είσοδος",
		email: "διεύθυνση email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO ημερομηνία και ώρα",
		date: "ISO ημερομηνία",
		time: "ISO ώρα",
		duration: "ISO διάρκεια",
		ipv4: "διεύθυνση IPv4",
		ipv6: "διεύθυνση IPv6",
		mac: "διεύθυνση MAC",
		cidrv4: "εύρος IPv4",
		cidrv6: "εύρος IPv6",
		base64: "συμβολοσειρά κωδικοποιημένη σε base64",
		base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
		json_string: "συμβολοσειρά JSON",
		e164: "αριθμός E.164",
		jwt: "JWT",
		template_literal: "είσοδος"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return typeof e.expected == "string" && /^[A-Z]/.test(e.expected) ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${e.expected}, λήφθηκε ${i}` : `Μη έγκυρη είσοδος: αναμενόταν ${t}, λήφθηκε ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Μη έγκυρη είσοδος: αναμενόταν ${x(e.values[0])}` : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Πολύ μεγάλο: αναμενόταν ${e.origin ?? "τιμή"} να έχει ${n}${e.maximum.toString()} ${r.unit ?? "στοιχεία"}` : `Πολύ μεγάλο: αναμενόταν ${e.origin ?? "τιμή"} να είναι ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Πολύ μικρό: αναμενόταν ${e.origin} να έχει ${n}${e.minimum.toString()} ${r.unit}` : `Πολύ μικρό: αναμενόταν ${e.origin} να είναι ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${t.prefix}"` : t.format === "ends_with" ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${t.suffix}"` : t.format === "includes" ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${t.includes}"` : t.format === "regex" ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${t.pattern}` : `Μη έγκυρο: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${e.divisor}`;
			case "unrecognized_keys": return `Άγνωστ${e.keys.length > 1 ? "α" : "ο"} κλειδ${e.keys.length > 1 ? "ιά" : "ί"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Μη έγκυρο κλειδί στο ${e.origin}`;
			case "invalid_union": return "Μη έγκυρη είσοδος";
			case "invalid_element": return `Μη έγκυρη τιμή στο ${e.origin}`;
			default: return "Μη έγκυρη είσοδος";
		}
	};
};
function ga() {
	return { localeError: ha() };
}
//#endregion
//#region node_modules/zod/v4/locales/en.js
var _a = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input);
				return `Invalid input: expected ${t}, received ${r[n] ?? n}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${x(e.values[0])}` : `Invalid option: expected one of ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function va() {
	return { localeError: _a() };
}
//#endregion
//#region node_modules/zod/v4/locales/eo.js
var ya = () => {
	let e = {
		string: {
			unit: "karaktrojn",
			verb: "havi"
		},
		file: {
			unit: "bajtojn",
			verb: "havi"
		},
		array: {
			unit: "elementojn",
			verb: "havi"
		},
		set: {
			unit: "elementojn",
			verb: "havi"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "enigo",
		email: "retadreso",
		url: "URL",
		emoji: "emoĝio",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO-datotempo",
		date: "ISO-dato",
		time: "ISO-tempo",
		duration: "ISO-daŭro",
		ipv4: "IPv4-adreso",
		ipv6: "IPv6-adreso",
		cidrv4: "IPv4-rango",
		cidrv6: "IPv6-rango",
		base64: "64-ume kodita karaktraro",
		base64url: "URL-64-ume kodita karaktraro",
		json_string: "JSON-karaktraro",
		e164: "E.164-nombro",
		jwt: "JWT",
		template_literal: "enigo"
	}, r = {
		nan: "NaN",
		number: "nombro",
		array: "tabelo",
		null: "senvalora"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Nevalida enigo: atendiĝis instanceof ${e.expected}, riceviĝis ${i}` : `Nevalida enigo: atendiĝis ${t}, riceviĝis ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Nevalida enigo: atendiĝis ${x(e.values[0])}` : `Nevalida opcio: atendiĝis unu el ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${n}${e.maximum.toString()} ${r.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Tro malgranda: atendiĝis ke ${e.origin} havu ${n}${e.minimum.toString()} ${r.unit}` : `Tro malgranda: atendiĝis ke ${e.origin} estu ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${t.prefix}"` : t.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${t.suffix}"` : t.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${t.includes}"` : t.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}` : `Nevalida ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Nevalida nombro: devas esti oblo de ${e.divisor}`;
			case "unrecognized_keys": return `Nekonata${e.keys.length > 1 ? "j" : ""} ŝlosilo${e.keys.length > 1 ? "j" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Nevalida ŝlosilo en ${e.origin}`;
			case "invalid_union": return "Nevalida enigo";
			case "invalid_element": return `Nevalida valoro en ${e.origin}`;
			default: return "Nevalida enigo";
		}
	};
};
function ba() {
	return { localeError: ya() };
}
//#endregion
//#region node_modules/zod/v4/locales/es.js
var xa = () => {
	let e = {
		string: {
			unit: "caracteres",
			verb: "tener"
		},
		file: {
			unit: "bytes",
			verb: "tener"
		},
		array: {
			unit: "elementos",
			verb: "tener"
		},
		set: {
			unit: "elementos",
			verb: "tener"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "entrada",
		email: "dirección de correo electrónico",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "fecha y hora ISO",
		date: "fecha ISO",
		time: "hora ISO",
		duration: "duración ISO",
		ipv4: "dirección IPv4",
		ipv6: "dirección IPv6",
		cidrv4: "rango IPv4",
		cidrv6: "rango IPv6",
		base64: "cadena codificada en base64",
		base64url: "URL codificada en base64",
		json_string: "cadena JSON",
		e164: "número E.164",
		jwt: "JWT",
		template_literal: "entrada"
	}, r = {
		nan: "NaN",
		string: "texto",
		number: "número",
		boolean: "booleano",
		array: "arreglo",
		object: "objeto",
		set: "conjunto",
		file: "archivo",
		date: "fecha",
		bigint: "número grande",
		symbol: "símbolo",
		undefined: "indefinido",
		null: "nulo",
		function: "función",
		map: "mapa",
		record: "registro",
		tuple: "tupla",
		enum: "enumeración",
		union: "unión",
		literal: "literal",
		promise: "promesa",
		void: "vacío",
		never: "nunca",
		unknown: "desconocido",
		any: "cualquiera"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Entrada inválida: se esperaba instanceof ${e.expected}, recibido ${i}` : `Entrada inválida: se esperaba ${t}, recibido ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Entrada inválida: se esperaba ${x(e.values[0])}` : `Opción inválida: se esperaba una de ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `Demasiado grande: se esperaba que ${a ?? "valor"} tuviera ${n}${e.maximum.toString()} ${i.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${a ?? "valor"} fuera ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `Demasiado pequeño: se esperaba que ${a} tuviera ${n}${e.minimum.toString()} ${i.unit}` : `Demasiado pequeño: se esperaba que ${a} fuera ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Cadena inválida: debe comenzar con "${t.prefix}"` : t.format === "ends_with" ? `Cadena inválida: debe terminar en "${t.suffix}"` : t.format === "includes" ? `Cadena inválida: debe incluir "${t.includes}"` : t.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${t.pattern}` : `Inválido ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Número inválido: debe ser múltiplo de ${e.divisor}`;
			case "unrecognized_keys": return `Llave${e.keys.length > 1 ? "s" : ""} desconocida${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Llave inválida en ${r[e.origin] ?? e.origin}`;
			case "invalid_union": return "Entrada inválida";
			case "invalid_element": return `Valor inválido en ${r[e.origin] ?? e.origin}`;
			default: return "Entrada inválida";
		}
	};
};
function Sa() {
	return { localeError: xa() };
}
//#endregion
//#region node_modules/zod/v4/locales/fa.js
var Ca = () => {
	let e = {
		string: {
			unit: "کاراکتر",
			verb: "داشته باشد"
		},
		file: {
			unit: "بایت",
			verb: "داشته باشد"
		},
		array: {
			unit: "آیتم",
			verb: "داشته باشد"
		},
		set: {
			unit: "آیتم",
			verb: "داشته باشد"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ورودی",
		email: "آدرس ایمیل",
		url: "URL",
		emoji: "ایموجی",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "تاریخ و زمان ایزو",
		date: "تاریخ ایزو",
		time: "زمان ایزو",
		duration: "مدت زمان ایزو",
		ipv4: "IPv4 آدرس",
		ipv6: "IPv6 آدرس",
		cidrv4: "IPv4 دامنه",
		cidrv6: "IPv6 دامنه",
		base64: "base64-encoded رشته",
		base64url: "base64url-encoded رشته",
		json_string: "JSON رشته",
		e164: "E.164 عدد",
		jwt: "JWT",
		template_literal: "ورودی"
	}, r = {
		nan: "NaN",
		number: "عدد",
		array: "آرایه"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `ورودی نامعتبر: می‌بایست instanceof ${e.expected} می‌بود، ${i} دریافت شد` : `ورودی نامعتبر: می‌بایست ${t} می‌بود، ${i} دریافت شد`;
			}
			case "invalid_value": return e.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${x(e.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${p(e.values, "|")} می‌بود`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${n}${e.maximum.toString()} ${r.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${n}${e.maximum.toString()} باشد`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} ${r.unit} باشد` : `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} باشد`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `رشته نامعتبر: باید با "${t.prefix}" شروع شود` : t.format === "ends_with" ? `رشته نامعتبر: باید با "${t.suffix}" تمام شود` : t.format === "includes" ? `رشته نامعتبر: باید شامل "${t.includes}" باشد` : t.format === "regex" ? `رشته نامعتبر: باید با الگوی ${t.pattern} مطابقت داشته باشد` : `${n[t.format] ?? e.format} نامعتبر`;
			}
			case "not_multiple_of": return `عدد نامعتبر: باید مضرب ${e.divisor} باشد`;
			case "unrecognized_keys": return `کلید${e.keys.length > 1 ? "های" : ""} ناشناس: ${p(e.keys, ", ")}`;
			case "invalid_key": return `کلید ناشناس در ${e.origin}`;
			case "invalid_union": return "ورودی نامعتبر";
			case "invalid_element": return `مقدار نامعتبر در ${e.origin}`;
			default: return "ورودی نامعتبر";
		}
	};
};
function wa() {
	return { localeError: Ca() };
}
//#endregion
//#region node_modules/zod/v4/locales/fi.js
var Ta = () => {
	let e = {
		string: {
			unit: "merkkiä",
			subject: "merkkijonon"
		},
		file: {
			unit: "tavua",
			subject: "tiedoston"
		},
		array: {
			unit: "alkiota",
			subject: "listan"
		},
		set: {
			unit: "alkiota",
			subject: "joukon"
		},
		number: {
			unit: "",
			subject: "luvun"
		},
		bigint: {
			unit: "",
			subject: "suuren kokonaisluvun"
		},
		int: {
			unit: "",
			subject: "kokonaisluvun"
		},
		date: {
			unit: "",
			subject: "päivämäärän"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "säännöllinen lauseke",
		email: "sähköpostiosoite",
		url: "URL-osoite",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO-aikaleima",
		date: "ISO-päivämäärä",
		time: "ISO-aika",
		duration: "ISO-kesto",
		ipv4: "IPv4-osoite",
		ipv6: "IPv6-osoite",
		cidrv4: "IPv4-alue",
		cidrv6: "IPv6-alue",
		base64: "base64-koodattu merkkijono",
		base64url: "base64url-koodattu merkkijono",
		json_string: "JSON-merkkijono",
		e164: "E.164-luku",
		jwt: "JWT",
		template_literal: "templaattimerkkijono"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${e.expected}, oli ${i}` : `Virheellinen tyyppi: odotettiin ${t}, oli ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Virheellinen syöte: täytyy olla ${x(e.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Liian suuri: ${r.subject} täytyy olla ${n}${e.maximum.toString()} ${r.unit}`.trim() : `Liian suuri: arvon täytyy olla ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Liian pieni: ${r.subject} täytyy olla ${n}${e.minimum.toString()} ${r.unit}`.trim() : `Liian pieni: arvon täytyy olla ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${t.prefix}"` : t.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${t.suffix}"` : t.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${t.includes}"` : t.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${t.pattern}` : `Virheellinen ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Virheellinen luku: täytyy olla luvun ${e.divisor} monikerta`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return "Virheellinen avain tietueessa";
			case "invalid_union": return "Virheellinen unioni";
			case "invalid_element": return "Virheellinen arvo joukossa";
			default: return "Virheellinen syöte";
		}
	};
};
function Ea() {
	return { localeError: Ta() };
}
//#endregion
//#region node_modules/zod/v4/locales/fr.js
var Da = () => {
	let e = {
		string: {
			unit: "caractères",
			verb: "avoir"
		},
		file: {
			unit: "octets",
			verb: "avoir"
		},
		array: {
			unit: "éléments",
			verb: "avoir"
		},
		set: {
			unit: "éléments",
			verb: "avoir"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "entrée",
		email: "adresse e-mail",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "date et heure ISO",
		date: "date ISO",
		time: "heure ISO",
		duration: "durée ISO",
		ipv4: "adresse IPv4",
		ipv6: "adresse IPv6",
		cidrv4: "plage IPv4",
		cidrv6: "plage IPv6",
		base64: "chaîne encodée en base64",
		base64url: "chaîne encodée en base64url",
		json_string: "chaîne JSON",
		e164: "numéro E.164",
		jwt: "JWT",
		template_literal: "entrée"
	}, r = {
		string: "chaîne",
		number: "nombre",
		int: "entier",
		boolean: "booléen",
		bigint: "grand entier",
		symbol: "symbole",
		undefined: "indéfini",
		null: "null",
		never: "jamais",
		void: "vide",
		date: "date",
		array: "tableau",
		object: "objet",
		tuple: "tuple",
		record: "enregistrement",
		map: "carte",
		set: "ensemble",
		file: "fichier",
		nonoptional: "non-optionnel",
		nan: "NaN",
		function: "fonction"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Entrée invalide : instanceof ${e.expected} attendu, ${i} reçu` : `Entrée invalide : ${t} attendu, ${i} reçu`;
			}
			case "invalid_value": return e.values.length === 1 ? `Entrée invalide : ${x(e.values[0])} attendu` : `Option invalide : une valeur parmi ${p(e.values, "|")} attendue`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", i = t(e.origin);
				return i ? `Trop grand : ${r[e.origin] ?? "valeur"} doit ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? "élément(s)"}` : `Trop grand : ${r[e.origin] ?? "valeur"} doit être ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", i = t(e.origin);
				return i ? `Trop petit : ${r[e.origin] ?? "valeur"} doit ${i.verb} ${n}${e.minimum.toString()} ${i.unit}` : `Trop petit : ${r[e.origin] ?? "valeur"} doit être ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Chaîne invalide : doit commencer par "${t.prefix}"` : t.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${t.suffix}"` : t.format === "includes" ? `Chaîne invalide : doit inclure "${t.includes}"` : t.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${t.pattern}` : `${n[t.format] ?? e.format} invalide`;
			}
			case "not_multiple_of": return `Nombre invalide : doit être un multiple de ${e.divisor}`;
			case "unrecognized_keys": return `Clé${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${p(e.keys, ", ")}`;
			case "invalid_key": return `Clé invalide dans ${e.origin}`;
			case "invalid_union": return "Entrée invalide";
			case "invalid_element": return `Valeur invalide dans ${e.origin}`;
			default: return "Entrée invalide";
		}
	};
};
function Oa() {
	return { localeError: Da() };
}
//#endregion
//#region node_modules/zod/v4/locales/fr-CA.js
var ka = () => {
	let e = {
		string: {
			unit: "caractères",
			verb: "avoir"
		},
		file: {
			unit: "octets",
			verb: "avoir"
		},
		array: {
			unit: "éléments",
			verb: "avoir"
		},
		set: {
			unit: "éléments",
			verb: "avoir"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "entrée",
		email: "adresse courriel",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "date-heure ISO",
		date: "date ISO",
		time: "heure ISO",
		duration: "durée ISO",
		ipv4: "adresse IPv4",
		ipv6: "adresse IPv6",
		cidrv4: "plage IPv4",
		cidrv6: "plage IPv6",
		base64: "chaîne encodée en base64",
		base64url: "chaîne encodée en base64url",
		json_string: "chaîne JSON",
		e164: "numéro E.164",
		jwt: "JWT",
		template_literal: "entrée"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Entrée invalide : attendu instanceof ${e.expected}, reçu ${i}` : `Entrée invalide : attendu ${t}, reçu ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Entrée invalide : attendu ${x(e.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "≤" : "<", r = t(e.origin);
				return r ? `Trop grand : attendu que ${e.origin ?? "la valeur"} ait ${n}${e.maximum.toString()} ${r.unit}` : `Trop grand : attendu que ${e.origin ?? "la valeur"} soit ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? "≥" : ">", r = t(e.origin);
				return r ? `Trop petit : attendu que ${e.origin} ait ${n}${e.minimum.toString()} ${r.unit}` : `Trop petit : attendu que ${e.origin} soit ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Chaîne invalide : doit commencer par "${t.prefix}"` : t.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${t.suffix}"` : t.format === "includes" ? `Chaîne invalide : doit inclure "${t.includes}"` : t.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${t.pattern}` : `${n[t.format] ?? e.format} invalide`;
			}
			case "not_multiple_of": return `Nombre invalide : doit être un multiple de ${e.divisor}`;
			case "unrecognized_keys": return `Clé${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${p(e.keys, ", ")}`;
			case "invalid_key": return `Clé invalide dans ${e.origin}`;
			case "invalid_union": return "Entrée invalide";
			case "invalid_element": return `Valeur invalide dans ${e.origin}`;
			default: return "Entrée invalide";
		}
	};
};
function Aa() {
	return { localeError: ka() };
}
//#endregion
//#region node_modules/zod/v4/locales/he.js
var ja = () => {
	let e = {
		string: {
			label: "מחרוזת",
			gender: "f"
		},
		number: {
			label: "מספר",
			gender: "m"
		},
		boolean: {
			label: "ערך בוליאני",
			gender: "m"
		},
		bigint: {
			label: "BigInt",
			gender: "m"
		},
		date: {
			label: "תאריך",
			gender: "m"
		},
		array: {
			label: "מערך",
			gender: "m"
		},
		object: {
			label: "אובייקט",
			gender: "m"
		},
		null: {
			label: "ערך ריק (null)",
			gender: "m"
		},
		undefined: {
			label: "ערך לא מוגדר (undefined)",
			gender: "m"
		},
		symbol: {
			label: "סימבול (Symbol)",
			gender: "m"
		},
		function: {
			label: "פונקציה",
			gender: "f"
		},
		map: {
			label: "מפה (Map)",
			gender: "f"
		},
		set: {
			label: "קבוצה (Set)",
			gender: "f"
		},
		file: {
			label: "קובץ",
			gender: "m"
		},
		promise: {
			label: "Promise",
			gender: "m"
		},
		NaN: {
			label: "NaN",
			gender: "m"
		},
		unknown: {
			label: "ערך לא ידוע",
			gender: "m"
		},
		value: {
			label: "ערך",
			gender: "m"
		}
	}, t = {
		string: {
			unit: "תווים",
			shortLabel: "קצר",
			longLabel: "ארוך"
		},
		file: {
			unit: "בייטים",
			shortLabel: "קטן",
			longLabel: "גדול"
		},
		array: {
			unit: "פריטים",
			shortLabel: "קטן",
			longLabel: "גדול"
		},
		set: {
			unit: "פריטים",
			shortLabel: "קטן",
			longLabel: "גדול"
		},
		number: {
			unit: "",
			shortLabel: "קטן",
			longLabel: "גדול"
		}
	}, n = (t) => t ? e[t] : void 0, r = (t) => {
		let r = n(t);
		return r ? r.label : t ?? e.unknown.label;
	}, i = (e) => `ה${r(e)}`, a = (e) => (n(e)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", o = (e) => e ? t[e] ?? null : null, s = {
		regex: {
			label: "קלט",
			gender: "m"
		},
		email: {
			label: "כתובת אימייל",
			gender: "f"
		},
		url: {
			label: "כתובת רשת",
			gender: "f"
		},
		emoji: {
			label: "אימוג'י",
			gender: "m"
		},
		uuid: {
			label: "UUID",
			gender: "m"
		},
		nanoid: {
			label: "nanoid",
			gender: "m"
		},
		guid: {
			label: "GUID",
			gender: "m"
		},
		cuid: {
			label: "cuid",
			gender: "m"
		},
		cuid2: {
			label: "cuid2",
			gender: "m"
		},
		ulid: {
			label: "ULID",
			gender: "m"
		},
		xid: {
			label: "XID",
			gender: "m"
		},
		ksuid: {
			label: "KSUID",
			gender: "m"
		},
		datetime: {
			label: "תאריך וזמן ISO",
			gender: "m"
		},
		date: {
			label: "תאריך ISO",
			gender: "m"
		},
		time: {
			label: "זמן ISO",
			gender: "m"
		},
		duration: {
			label: "משך זמן ISO",
			gender: "m"
		},
		ipv4: {
			label: "כתובת IPv4",
			gender: "f"
		},
		ipv6: {
			label: "כתובת IPv6",
			gender: "f"
		},
		cidrv4: {
			label: "טווח IPv4",
			gender: "m"
		},
		cidrv6: {
			label: "טווח IPv6",
			gender: "m"
		},
		base64: {
			label: "מחרוזת בבסיס 64",
			gender: "f"
		},
		base64url: {
			label: "מחרוזת בבסיס 64 לכתובות רשת",
			gender: "f"
		},
		json_string: {
			label: "מחרוזת JSON",
			gender: "f"
		},
		e164: {
			label: "מספר E.164",
			gender: "m"
		},
		jwt: {
			label: "JWT",
			gender: "m"
		},
		ends_with: {
			label: "קלט",
			gender: "m"
		},
		includes: {
			label: "קלט",
			gender: "m"
		},
		lowercase: {
			label: "קלט",
			gender: "m"
		},
		starts_with: {
			label: "קלט",
			gender: "m"
		},
		uppercase: {
			label: "קלט",
			gender: "m"
		}
	}, c = { nan: "NaN" };
	return (t) => {
		switch (t.code) {
			case "invalid_type": {
				let n = t.expected, i = c[n ?? ""] ?? r(n), a = w(t.input), o = c[a] ?? e[a]?.label ?? a;
				return /^[A-Z]/.test(t.expected) ? `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${o}` : `קלט לא תקין: צריך להיות ${i}, התקבל ${o}`;
			}
			case "invalid_value": {
				if (t.values.length === 1) return `ערך לא תקין: הערך חייב להיות ${x(t.values[0])}`;
				let e = t.values.map((e) => x(e));
				if (t.values.length === 2) return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
				let n = e[e.length - 1];
				return `ערך לא תקין: האפשרויות המתאימות הן ${e.slice(0, -1).join(", ")} או ${n}`;
			}
			case "too_big": {
				let e = o(t.origin), n = i(t.origin ?? "value");
				if (t.origin === "string") return `${e?.longLabel ?? "ארוך"} מדי: ${n} צריכה להכיל ${t.maximum.toString()} ${e?.unit ?? ""} ${t.inclusive ? "או פחות" : "לכל היותר"}`.trim();
				if (t.origin === "number") return `גדול מדי: ${n} צריך להיות ${t.inclusive ? `קטן או שווה ל-${t.maximum}` : `קטן מ-${t.maximum}`}`;
				if (t.origin === "array" || t.origin === "set") return `גדול מדי: ${n} ${t.origin === "set" ? "צריכה" : "צריך"} להכיל ${t.inclusive ? `${t.maximum} ${e?.unit ?? ""} או פחות` : `פחות מ-${t.maximum} ${e?.unit ?? ""}`}`.trim();
				let r = t.inclusive ? "<=" : "<", s = a(t.origin ?? "value");
				return e?.unit ? `${e.longLabel} מדי: ${n} ${s} ${r}${t.maximum.toString()} ${e.unit}` : `${e?.longLabel ?? "גדול"} מדי: ${n} ${s} ${r}${t.maximum.toString()}`;
			}
			case "too_small": {
				let e = o(t.origin), n = i(t.origin ?? "value");
				if (t.origin === "string") return `${e?.shortLabel ?? "קצר"} מדי: ${n} צריכה להכיל ${t.minimum.toString()} ${e?.unit ?? ""} ${t.inclusive ? "או יותר" : "לפחות"}`.trim();
				if (t.origin === "number") return `קטן מדי: ${n} צריך להיות ${t.inclusive ? `גדול או שווה ל-${t.minimum}` : `גדול מ-${t.minimum}`}`;
				if (t.origin === "array" || t.origin === "set") {
					let r = t.origin === "set" ? "צריכה" : "צריך";
					return t.minimum === 1 && t.inclusive ? `קטן מדי: ${n} ${r} להכיל ${t.origin, "לפחות פריט אחד"}` : `קטן מדי: ${n} ${r} להכיל ${t.inclusive ? `${t.minimum} ${e?.unit ?? ""} או יותר` : `יותר מ-${t.minimum} ${e?.unit ?? ""}`}`.trim();
				}
				let r = t.inclusive ? ">=" : ">", s = a(t.origin ?? "value");
				return e?.unit ? `${e.shortLabel} מדי: ${n} ${s} ${r}${t.minimum.toString()} ${e.unit}` : `${e?.shortLabel ?? "קטן"} מדי: ${n} ${s} ${r}${t.minimum.toString()}`;
			}
			case "invalid_format": {
				let e = t;
				if (e.format === "starts_with") return `המחרוזת חייבת להתחיל ב "${e.prefix}"`;
				if (e.format === "ends_with") return `המחרוזת חייבת להסתיים ב "${e.suffix}"`;
				if (e.format === "includes") return `המחרוזת חייבת לכלול "${e.includes}"`;
				if (e.format === "regex") return `המחרוזת חייבת להתאים לתבנית ${e.pattern}`;
				let n = s[e.format];
				return `${n?.label ?? e.format} לא ${(n?.gender ?? "m") === "f" ? "תקינה" : "תקין"}`;
			}
			case "not_multiple_of": return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
			case "unrecognized_keys": return `מפתח${t.keys.length > 1 ? "ות" : ""} לא מזוה${t.keys.length > 1 ? "ים" : "ה"}: ${p(t.keys, ", ")}`;
			case "invalid_key": return "שדה לא תקין באובייקט";
			case "invalid_union": return "קלט לא תקין";
			case "invalid_element": return `ערך לא תקין ב${i(t.origin ?? "array")}`;
			default: return "קלט לא תקין";
		}
	};
};
function Ma() {
	return { localeError: ja() };
}
//#endregion
//#region node_modules/zod/v4/locales/hr.js
var Na = () => {
	let e = {
		string: {
			unit: "znakova",
			verb: "imati"
		},
		file: {
			unit: "bajtova",
			verb: "imati"
		},
		array: {
			unit: "stavki",
			verb: "imati"
		},
		set: {
			unit: "stavki",
			verb: "imati"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "unos",
		email: "email adresa",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datum i vrijeme",
		date: "ISO datum",
		time: "ISO vrijeme",
		duration: "ISO trajanje",
		ipv4: "IPv4 adresa",
		ipv6: "IPv6 adresa",
		cidrv4: "IPv4 raspon",
		cidrv6: "IPv6 raspon",
		base64: "base64 kodirani tekst",
		base64url: "base64url kodirani tekst",
		json_string: "JSON tekst",
		e164: "E.164 broj",
		jwt: "JWT",
		template_literal: "unos"
	}, r = {
		nan: "NaN",
		string: "tekst",
		number: "broj",
		boolean: "boolean",
		array: "niz",
		object: "objekt",
		set: "skup",
		file: "datoteka",
		date: "datum",
		bigint: "bigint",
		symbol: "simbol",
		undefined: "undefined",
		null: "null",
		function: "funkcija",
		map: "mapa"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Neispravan unos: očekuje se instanceof ${e.expected}, a primljeno je ${i}` : `Neispravan unos: očekuje se ${t}, a primljeno je ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Neispravna vrijednost: očekivano ${x(e.values[0])}` : `Neispravna opcija: očekivano jedno od ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `Preveliko: očekivano da ${a ?? "vrijednost"} ima ${n}${e.maximum.toString()} ${i.unit ?? "elemenata"}` : `Preveliko: očekivano da ${a ?? "vrijednost"} bude ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", i = t(e.origin), a = r[e.origin] ?? e.origin;
				return i ? `Premalo: očekivano da ${a} ima ${n}${e.minimum.toString()} ${i.unit}` : `Premalo: očekivano da ${a} bude ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Neispravan tekst: mora započinjati s "${t.prefix}"` : t.format === "ends_with" ? `Neispravan tekst: mora završavati s "${t.suffix}"` : t.format === "includes" ? `Neispravan tekst: mora sadržavati "${t.includes}"` : t.format === "regex" ? `Neispravan tekst: mora odgovarati uzorku ${t.pattern}` : `Neispravna ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Neispravan broj: mora biti višekratnik od ${e.divisor}`;
			case "unrecognized_keys": return `Neprepoznat${e.keys.length > 1 ? "i ključevi" : " ključ"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Neispravan ključ u ${r[e.origin] ?? e.origin}`;
			case "invalid_union": return "Neispravan unos";
			case "invalid_element": return `Neispravna vrijednost u ${r[e.origin] ?? e.origin}`;
			default: return "Neispravan unos";
		}
	};
};
function Pa() {
	return { localeError: Na() };
}
//#endregion
//#region node_modules/zod/v4/locales/hu.js
var Fa = () => {
	let e = {
		string: {
			unit: "karakter",
			verb: "legyen"
		},
		file: {
			unit: "byte",
			verb: "legyen"
		},
		array: {
			unit: "elem",
			verb: "legyen"
		},
		set: {
			unit: "elem",
			verb: "legyen"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "bemenet",
		email: "email cím",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO időbélyeg",
		date: "ISO dátum",
		time: "ISO idő",
		duration: "ISO időintervallum",
		ipv4: "IPv4 cím",
		ipv6: "IPv6 cím",
		cidrv4: "IPv4 tartomány",
		cidrv6: "IPv6 tartomány",
		base64: "base64-kódolt string",
		base64url: "base64url-kódolt string",
		json_string: "JSON string",
		e164: "E.164 szám",
		jwt: "JWT",
		template_literal: "bemenet"
	}, r = {
		nan: "NaN",
		number: "szám",
		array: "tömb"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Érvénytelen bemenet: a várt érték instanceof ${e.expected}, a kapott érték ${i}` : `Érvénytelen bemenet: a várt érték ${t}, a kapott érték ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${x(e.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Túl nagy: ${e.origin ?? "érték"} mérete túl nagy ${n}${e.maximum.toString()} ${r.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${e.origin ?? "érték"} túl nagy: ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Túl kicsi: a bemeneti érték ${e.origin} mérete túl kicsi ${n}${e.minimum.toString()} ${r.unit}` : `Túl kicsi: a bemeneti érték ${e.origin} túl kicsi ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Érvénytelen string: "${t.prefix}" értékkel kell kezdődnie` : t.format === "ends_with" ? `Érvénytelen string: "${t.suffix}" értékkel kell végződnie` : t.format === "includes" ? `Érvénytelen string: "${t.includes}" értéket kell tartalmaznia` : t.format === "regex" ? `Érvénytelen string: ${t.pattern} mintának kell megfelelnie` : `Érvénytelen ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Érvénytelen szám: ${e.divisor} többszörösének kell lennie`;
			case "unrecognized_keys": return `Ismeretlen kulcs${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Érvénytelen kulcs ${e.origin}`;
			case "invalid_union": return "Érvénytelen bemenet";
			case "invalid_element": return `Érvénytelen érték: ${e.origin}`;
			default: return "Érvénytelen bemenet";
		}
	};
};
function Ia() {
	return { localeError: Fa() };
}
//#endregion
//#region node_modules/zod/v4/locales/hy.js
function La(e, t, n) {
	return Math.abs(e) === 1 ? t : n;
}
function Ra(e) {
	if (!e) return "";
	let t = [
		"ա",
		"ե",
		"ը",
		"ի",
		"ո",
		"ու",
		"օ"
	], n = e[e.length - 1];
	return e + (t.includes(n) ? "ն" : "ը");
}
var za = () => {
	let e = {
		string: {
			unit: {
				one: "նշան",
				many: "նշաններ"
			},
			verb: "ունենալ"
		},
		file: {
			unit: {
				one: "բայթ",
				many: "բայթեր"
			},
			verb: "ունենալ"
		},
		array: {
			unit: {
				one: "տարր",
				many: "տարրեր"
			},
			verb: "ունենալ"
		},
		set: {
			unit: {
				one: "տարր",
				many: "տարրեր"
			},
			verb: "ունենալ"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "մուտք",
		email: "էլ. հասցե",
		url: "URL",
		emoji: "էմոջի",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO ամսաթիվ և ժամ",
		date: "ISO ամսաթիվ",
		time: "ISO ժամ",
		duration: "ISO տևողություն",
		ipv4: "IPv4 հասցե",
		ipv6: "IPv6 հասցե",
		cidrv4: "IPv4 միջակայք",
		cidrv6: "IPv6 միջակայք",
		base64: "base64 ձևաչափով տող",
		base64url: "base64url ձևաչափով տող",
		json_string: "JSON տող",
		e164: "E.164 համար",
		jwt: "JWT",
		template_literal: "մուտք"
	}, r = {
		nan: "NaN",
		number: "թիվ",
		array: "զանգված"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${e.expected}, ստացվել է ${i}` : `Սխալ մուտքագրում․ սպասվում էր ${t}, ստացվել է ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Սխալ մուտքագրում․ սպասվում էր ${x(e.values[1])}` : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				if (r) {
					let t = La(Number(e.maximum), r.unit.one, r.unit.many);
					return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ra(e.origin ?? "արժեք")} կունենա ${n}${e.maximum.toString()} ${t}`;
				}
				return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ra(e.origin ?? "արժեք")} լինի ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				if (r) {
					let t = La(Number(e.minimum), r.unit.one, r.unit.many);
					return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ra(e.origin)} կունենա ${n}${e.minimum.toString()} ${t}`;
				}
				return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ra(e.origin)} լինի ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Սխալ տող․ պետք է սկսվի "${t.prefix}"-ով` : t.format === "ends_with" ? `Սխալ տող․ պետք է ավարտվի "${t.suffix}"-ով` : t.format === "includes" ? `Սխալ տող․ պետք է պարունակի "${t.includes}"` : t.format === "regex" ? `Սխալ տող․ պետք է համապատասխանի ${t.pattern} ձևաչափին` : `Սխալ ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${e.divisor}-ի`;
			case "unrecognized_keys": return `Չճանաչված բանալի${e.keys.length > 1 ? "ներ" : ""}. ${p(e.keys, ", ")}`;
			case "invalid_key": return `Սխալ բանալի ${Ra(e.origin)}-ում`;
			case "invalid_union": return "Սխալ մուտքագրում";
			case "invalid_element": return `Սխալ արժեք ${Ra(e.origin)}-ում`;
			default: return "Սխալ մուտքագրում";
		}
	};
};
function Ba() {
	return { localeError: za() };
}
//#endregion
//#region node_modules/zod/v4/locales/id.js
var Va = () => {
	let e = {
		string: {
			unit: "karakter",
			verb: "memiliki"
		},
		file: {
			unit: "byte",
			verb: "memiliki"
		},
		array: {
			unit: "item",
			verb: "memiliki"
		},
		set: {
			unit: "item",
			verb: "memiliki"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "alamat email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "tanggal dan waktu format ISO",
		date: "tanggal format ISO",
		time: "jam format ISO",
		duration: "durasi format ISO",
		ipv4: "alamat IPv4",
		ipv6: "alamat IPv6",
		cidrv4: "rentang alamat IPv4",
		cidrv6: "rentang alamat IPv6",
		base64: "string dengan enkode base64",
		base64url: "string dengan enkode base64url",
		json_string: "string JSON",
		e164: "angka E.164",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Input tidak valid: diharapkan instanceof ${e.expected}, diterima ${i}` : `Input tidak valid: diharapkan ${t}, diterima ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Input tidak valid: diharapkan ${x(e.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Terlalu besar: diharapkan ${e.origin ?? "value"} memiliki ${n}${e.maximum.toString()} ${r.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${e.origin ?? "value"} menjadi ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Terlalu kecil: diharapkan ${e.origin} memiliki ${n}${e.minimum.toString()} ${r.unit}` : `Terlalu kecil: diharapkan ${e.origin} menjadi ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${t.prefix}"` : t.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${t.suffix}"` : t.format === "includes" ? `String tidak valid: harus menyertakan "${t.includes}"` : t.format === "regex" ? `String tidak valid: harus sesuai pola ${t.pattern}` : `${n[t.format] ?? e.format} tidak valid`;
			}
			case "not_multiple_of": return `Angka tidak valid: harus kelipatan dari ${e.divisor}`;
			case "unrecognized_keys": return `Kunci tidak dikenali ${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Kunci tidak valid di ${e.origin}`;
			case "invalid_union": return "Input tidak valid";
			case "invalid_element": return `Nilai tidak valid di ${e.origin}`;
			default: return "Input tidak valid";
		}
	};
};
function Ha() {
	return { localeError: Va() };
}
//#endregion
//#region node_modules/zod/v4/locales/is.js
var Ua = () => {
	let e = {
		string: {
			unit: "stafi",
			verb: "að hafa"
		},
		file: {
			unit: "bæti",
			verb: "að hafa"
		},
		array: {
			unit: "hluti",
			verb: "að hafa"
		},
		set: {
			unit: "hluti",
			verb: "að hafa"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "gildi",
		email: "netfang",
		url: "vefslóð",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO dagsetning og tími",
		date: "ISO dagsetning",
		time: "ISO tími",
		duration: "ISO tímalengd",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded strengur",
		base64url: "base64url-encoded strengur",
		json_string: "JSON strengur",
		e164: "E.164 tölugildi",
		jwt: "JWT",
		template_literal: "gildi"
	}, r = {
		nan: "NaN",
		number: "númer",
		array: "fylki"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Rangt gildi: Þú slóst inn ${i} þar sem á að vera instanceof ${e.expected}` : `Rangt gildi: Þú slóst inn ${i} þar sem á að vera ${t}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${x(e.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Of stórt: gert er ráð fyrir að ${e.origin ?? "gildi"} hafi ${n}${e.maximum.toString()} ${r.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${e.origin ?? "gildi"} sé ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Of lítið: gert er ráð fyrir að ${e.origin} hafi ${n}${e.minimum.toString()} ${r.unit}` : `Of lítið: gert er ráð fyrir að ${e.origin} sé ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${t.prefix}"` : t.format === "ends_with" ? `Ógildur strengur: verður að enda á "${t.suffix}"` : t.format === "includes" ? `Ógildur strengur: verður að innihalda "${t.includes}"` : t.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${t.pattern}` : `Rangt ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Röng tala: verður að vera margfeldi af ${e.divisor}`;
			case "unrecognized_keys": return `Óþekkt ${e.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Rangur lykill í ${e.origin}`;
			case "invalid_union": return "Rangt gildi";
			case "invalid_element": return `Rangt gildi í ${e.origin}`;
			default: return "Rangt gildi";
		}
	};
};
function Wa() {
	return { localeError: Ua() };
}
//#endregion
//#region node_modules/zod/v4/locales/it.js
var Ga = () => {
	let e = {
		string: {
			unit: "caratteri",
			verb: "avere"
		},
		file: {
			unit: "byte",
			verb: "avere"
		},
		array: {
			unit: "elementi",
			verb: "avere"
		},
		set: {
			unit: "elementi",
			verb: "avere"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "indirizzo email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "data e ora ISO",
		date: "data ISO",
		time: "ora ISO",
		duration: "durata ISO",
		ipv4: "indirizzo IPv4",
		ipv6: "indirizzo IPv6",
		cidrv4: "intervallo IPv4",
		cidrv6: "intervallo IPv6",
		base64: "stringa codificata in base64",
		base64url: "URL codificata in base64",
		json_string: "stringa JSON",
		e164: "numero E.164",
		jwt: "JWT",
		template_literal: "input"
	}, r = {
		nan: "NaN",
		number: "numero",
		array: "vettore"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Input non valido: atteso instanceof ${e.expected}, ricevuto ${i}` : `Input non valido: atteso ${t}, ricevuto ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Input non valido: atteso ${x(e.values[0])}` : `Opzione non valida: atteso uno tra ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Troppo grande: ${e.origin ?? "valore"} deve avere ${n}${e.maximum.toString()} ${r.unit ?? "elementi"}` : `Troppo grande: ${e.origin ?? "valore"} deve essere ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Troppo piccolo: ${e.origin} deve avere ${n}${e.minimum.toString()} ${r.unit}` : `Troppo piccolo: ${e.origin} deve essere ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Stringa non valida: deve iniziare con "${t.prefix}"` : t.format === "ends_with" ? `Stringa non valida: deve terminare con "${t.suffix}"` : t.format === "includes" ? `Stringa non valida: deve includere "${t.includes}"` : t.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${t.pattern}` : `Input non valido: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Numero non valido: deve essere un multiplo di ${e.divisor}`;
			case "unrecognized_keys": return `Chiav${e.keys.length > 1 ? "i" : "e"} non riconosciut${e.keys.length > 1 ? "e" : "a"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Chiave non valida in ${e.origin}`;
			case "invalid_union": return "Input non valido";
			case "invalid_element": return `Valore non valido in ${e.origin}`;
			default: return "Input non valido";
		}
	};
};
function Ka() {
	return { localeError: Ga() };
}
//#endregion
//#region node_modules/zod/v4/locales/ja.js
var qa = () => {
	let e = {
		string: {
			unit: "文字",
			verb: "である"
		},
		file: {
			unit: "バイト",
			verb: "である"
		},
		array: {
			unit: "要素",
			verb: "である"
		},
		set: {
			unit: "要素",
			verb: "である"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "入力値",
		email: "メールアドレス",
		url: "URL",
		emoji: "絵文字",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO日時",
		date: "ISO日付",
		time: "ISO時刻",
		duration: "ISO期間",
		ipv4: "IPv4アドレス",
		ipv6: "IPv6アドレス",
		cidrv4: "IPv4範囲",
		cidrv6: "IPv6範囲",
		base64: "base64エンコード文字列",
		base64url: "base64urlエンコード文字列",
		json_string: "JSON文字列",
		e164: "E.164番号",
		jwt: "JWT",
		template_literal: "入力値"
	}, r = {
		nan: "NaN",
		number: "数値",
		array: "配列"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `無効な入力: instanceof ${e.expected}が期待されましたが、${i}が入力されました` : `無効な入力: ${t}が期待されましたが、${i}が入力されました`;
			}
			case "invalid_value": return e.values.length === 1 ? `無効な入力: ${x(e.values[0])}が期待されました` : `無効な選択: ${p(e.values, "、")}のいずれかである必要があります`;
			case "too_big": {
				let n = e.inclusive ? "以下である" : "より小さい", r = t(e.origin);
				return r ? `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${r.unit ?? "要素"}${n}必要があります` : `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${n}必要があります`;
			}
			case "too_small": {
				let n = e.inclusive ? "以上である" : "より大きい", r = t(e.origin);
				return r ? `小さすぎる値: ${e.origin}は${e.minimum.toString()}${r.unit}${n}必要があります` : `小さすぎる値: ${e.origin}は${e.minimum.toString()}${n}必要があります`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `無効な文字列: "${t.prefix}"で始まる必要があります` : t.format === "ends_with" ? `無効な文字列: "${t.suffix}"で終わる必要があります` : t.format === "includes" ? `無効な文字列: "${t.includes}"を含む必要があります` : t.format === "regex" ? `無効な文字列: パターン${t.pattern}に一致する必要があります` : `無効な${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `無効な数値: ${e.divisor}の倍数である必要があります`;
			case "unrecognized_keys": return `認識されていないキー${e.keys.length > 1 ? "群" : ""}: ${p(e.keys, "、")}`;
			case "invalid_key": return `${e.origin}内の無効なキー`;
			case "invalid_union": return "無効な入力";
			case "invalid_element": return `${e.origin}内の無効な値`;
			default: return "無効な入力";
		}
	};
};
function Ja() {
	return { localeError: qa() };
}
//#endregion
//#region node_modules/zod/v4/locales/ka.js
var Ya = () => {
	let e = {
		string: {
			unit: "სიმბოლო",
			verb: "უნდა შეიცავდეს"
		},
		file: {
			unit: "ბაიტი",
			verb: "უნდა შეიცავდეს"
		},
		array: {
			unit: "ელემენტი",
			verb: "უნდა შეიცავდეს"
		},
		set: {
			unit: "ელემენტი",
			verb: "უნდა შეიცავდეს"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "შეყვანა",
		email: "ელ-ფოსტის მისამართი",
		url: "URL",
		emoji: "ემოჯი",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "თარიღი-დრო",
		date: "თარიღი",
		time: "დრო",
		duration: "ხანგრძლივობა",
		ipv4: "IPv4 მისამართი",
		ipv6: "IPv6 მისამართი",
		cidrv4: "IPv4 დიაპაზონი",
		cidrv6: "IPv6 დიაპაზონი",
		base64: "base64-კოდირებული ველი",
		base64url: "base64url-კოდირებული ველი",
		json_string: "JSON ველი",
		e164: "E.164 ნომერი",
		jwt: "JWT",
		template_literal: "შეყვანა"
	}, r = {
		nan: "NaN",
		number: "რიცხვი",
		string: "ველი",
		boolean: "ბულეანი",
		function: "ფუნქცია",
		array: "მასივი"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${e.expected}, მიღებული ${i}` : `არასწორი შეყვანა: მოსალოდნელი ${t}, მიღებული ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${x(e.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${p(e.values, "|")}-დან`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} ${r.verb} ${n}${e.maximum.toString()} ${r.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} იყოს ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `ზედმეტად პატარა: მოსალოდნელი ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${e.origin} იყოს ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `არასწორი ველი: უნდა იწყებოდეს "${t.prefix}"-ით` : t.format === "ends_with" ? `არასწორი ველი: უნდა მთავრდებოდეს "${t.suffix}"-ით` : t.format === "includes" ? `არასწორი ველი: უნდა შეიცავდეს "${t.includes}"-ს` : t.format === "regex" ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${t.pattern}` : `არასწორი ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `არასწორი რიცხვი: უნდა იყოს ${e.divisor}-ის ჯერადი`;
			case "unrecognized_keys": return `უცნობი გასაღებ${e.keys.length > 1 ? "ები" : "ი"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `არასწორი გასაღები ${e.origin}-ში`;
			case "invalid_union": return "არასწორი შეყვანა";
			case "invalid_element": return `არასწორი მნიშვნელობა ${e.origin}-ში`;
			default: return "არასწორი შეყვანა";
		}
	};
};
function Xa() {
	return { localeError: Ya() };
}
//#endregion
//#region node_modules/zod/v4/locales/km.js
var Za = () => {
	let e = {
		string: {
			unit: "តួអក្សរ",
			verb: "គួរមាន"
		},
		file: {
			unit: "បៃ",
			verb: "គួរមាន"
		},
		array: {
			unit: "ធាតុ",
			verb: "គួរមាន"
		},
		set: {
			unit: "ធាតុ",
			verb: "គួរមាន"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ទិន្នន័យបញ្ចូល",
		email: "អាសយដ្ឋានអ៊ីមែល",
		url: "URL",
		emoji: "សញ្ញាអារម្មណ៍",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
		date: "កាលបរិច្ឆេទ ISO",
		time: "ម៉ោង ISO",
		duration: "រយៈពេល ISO",
		ipv4: "អាសយដ្ឋាន IPv4",
		ipv6: "អាសយដ្ឋាន IPv6",
		cidrv4: "ដែនអាសយដ្ឋាន IPv4",
		cidrv6: "ដែនអាសយដ្ឋាន IPv6",
		base64: "ខ្សែអក្សរអ៊ិកូដ base64",
		base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
		json_string: "ខ្សែអក្សរ JSON",
		e164: "លេខ E.164",
		jwt: "JWT",
		template_literal: "ទិន្នន័យបញ្ចូល"
	}, r = {
		nan: "NaN",
		number: "លេខ",
		array: "អារេ (Array)",
		null: "គ្មានតម្លៃ (null)"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${e.expected} ប៉ុន្តែទទួលបាន ${i}` : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t} ប៉ុន្តែទទួលបាន ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${x(e.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${n} ${e.maximum.toString()} ${r.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${n} ${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()} ${r.unit}` : `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${t.prefix}"` : t.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${t.suffix}"` : t.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${t.includes}"` : t.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${t.pattern}` : `មិនត្រឹមត្រូវ៖ ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${e.divisor}`;
			case "unrecognized_keys": return `រកឃើញសោមិនស្គាល់៖ ${p(e.keys, ", ")}`;
			case "invalid_key": return `សោមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
			case "invalid_union": return "ទិន្នន័យមិនត្រឹមត្រូវ";
			case "invalid_element": return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
			default: return "ទិន្នន័យមិនត្រឹមត្រូវ";
		}
	};
};
function Qa() {
	return { localeError: Za() };
}
//#endregion
//#region node_modules/zod/v4/locales/kh.js
function $a() {
	return Qa();
}
//#endregion
//#region node_modules/zod/v4/locales/ko.js
var eo = () => {
	let e = {
		string: {
			unit: "문자",
			verb: "to have"
		},
		file: {
			unit: "바이트",
			verb: "to have"
		},
		array: {
			unit: "개",
			verb: "to have"
		},
		set: {
			unit: "개",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "입력",
		email: "이메일 주소",
		url: "URL",
		emoji: "이모지",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO 날짜시간",
		date: "ISO 날짜",
		time: "ISO 시간",
		duration: "ISO 기간",
		ipv4: "IPv4 주소",
		ipv6: "IPv6 주소",
		cidrv4: "IPv4 범위",
		cidrv6: "IPv6 범위",
		base64: "base64 인코딩 문자열",
		base64url: "base64url 인코딩 문자열",
		json_string: "JSON 문자열",
		e164: "E.164 번호",
		jwt: "JWT",
		template_literal: "입력"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `잘못된 입력: 예상 타입은 instanceof ${e.expected}, 받은 타입은 ${i}입니다` : `잘못된 입력: 예상 타입은 ${t}, 받은 타입은 ${i}입니다`;
			}
			case "invalid_value": return e.values.length === 1 ? `잘못된 입력: 값은 ${x(e.values[0])} 이어야 합니다` : `잘못된 옵션: ${p(e.values, "또는 ")} 중 하나여야 합니다`;
			case "too_big": {
				let n = e.inclusive ? "이하" : "미만", r = n === "미만" ? "이어야 합니다" : "여야 합니다", i = t(e.origin), a = i?.unit ?? "요소";
				return i ? `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()}${a} ${n}${r}` : `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()} ${n}${r}`;
			}
			case "too_small": {
				let n = e.inclusive ? "이상" : "초과", r = n === "이상" ? "이어야 합니다" : "여야 합니다", i = t(e.origin), a = i?.unit ?? "요소";
				return i ? `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()}${a} ${n}${r}` : `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()} ${n}${r}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `잘못된 문자열: "${t.prefix}"(으)로 시작해야 합니다` : t.format === "ends_with" ? `잘못된 문자열: "${t.suffix}"(으)로 끝나야 합니다` : t.format === "includes" ? `잘못된 문자열: "${t.includes}"을(를) 포함해야 합니다` : t.format === "regex" ? `잘못된 문자열: 정규식 ${t.pattern} 패턴과 일치해야 합니다` : `잘못된 ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `잘못된 숫자: ${e.divisor}의 배수여야 합니다`;
			case "unrecognized_keys": return `인식할 수 없는 키: ${p(e.keys, ", ")}`;
			case "invalid_key": return `잘못된 키: ${e.origin}`;
			case "invalid_union": return "잘못된 입력";
			case "invalid_element": return `잘못된 값: ${e.origin}`;
			default: return "잘못된 입력";
		}
	};
};
function to() {
	return { localeError: eo() };
}
//#endregion
//#region node_modules/zod/v4/locales/lt.js
var no = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function ro(e) {
	let t = Math.abs(e), n = t % 10, r = t % 100;
	return r >= 11 && r <= 19 || n === 0 ? "many" : n === 1 ? "one" : "few";
}
var io = () => {
	let e = {
		string: {
			unit: {
				one: "simbolis",
				few: "simboliai",
				many: "simbolių"
			},
			verb: {
				smaller: {
					inclusive: "turi būti ne ilgesnė kaip",
					notInclusive: "turi būti trumpesnė kaip"
				},
				bigger: {
					inclusive: "turi būti ne trumpesnė kaip",
					notInclusive: "turi būti ilgesnė kaip"
				}
			}
		},
		file: {
			unit: {
				one: "baitas",
				few: "baitai",
				many: "baitų"
			},
			verb: {
				smaller: {
					inclusive: "turi būti ne didesnis kaip",
					notInclusive: "turi būti mažesnis kaip"
				},
				bigger: {
					inclusive: "turi būti ne mažesnis kaip",
					notInclusive: "turi būti didesnis kaip"
				}
			}
		},
		array: {
			unit: {
				one: "elementą",
				few: "elementus",
				many: "elementų"
			},
			verb: {
				smaller: {
					inclusive: "turi turėti ne daugiau kaip",
					notInclusive: "turi turėti mažiau kaip"
				},
				bigger: {
					inclusive: "turi turėti ne mažiau kaip",
					notInclusive: "turi turėti daugiau kaip"
				}
			}
		},
		set: {
			unit: {
				one: "elementą",
				few: "elementus",
				many: "elementų"
			},
			verb: {
				smaller: {
					inclusive: "turi turėti ne daugiau kaip",
					notInclusive: "turi turėti mažiau kaip"
				},
				bigger: {
					inclusive: "turi turėti ne mažiau kaip",
					notInclusive: "turi turėti daugiau kaip"
				}
			}
		}
	};
	function t(t, n, r, i) {
		let a = e[t] ?? null;
		return a === null ? a : {
			unit: a.unit[n],
			verb: a.verb[i][r ? "inclusive" : "notInclusive"]
		};
	}
	let n = {
		regex: "įvestis",
		email: "el. pašto adresas",
		url: "URL",
		emoji: "jaustukas",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO data ir laikas",
		date: "ISO data",
		time: "ISO laikas",
		duration: "ISO trukmė",
		ipv4: "IPv4 adresas",
		ipv6: "IPv6 adresas",
		cidrv4: "IPv4 tinklo prefiksas (CIDR)",
		cidrv6: "IPv6 tinklo prefiksas (CIDR)",
		base64: "base64 užkoduota eilutė",
		base64url: "base64url užkoduota eilutė",
		json_string: "JSON eilutė",
		e164: "E.164 numeris",
		jwt: "JWT",
		template_literal: "įvestis"
	}, r = {
		nan: "NaN",
		number: "skaičius",
		bigint: "sveikasis skaičius",
		string: "eilutė",
		boolean: "loginė reikšmė",
		undefined: "neapibrėžta reikšmė",
		function: "funkcija",
		symbol: "simbolis",
		array: "masyvas",
		object: "objektas",
		null: "nulinė reikšmė"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Gautas tipas ${i}, o tikėtasi - instanceof ${e.expected}` : `Gautas tipas ${i}, o tikėtasi - ${t}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Privalo būti ${x(e.values[0])}` : `Privalo būti vienas iš ${p(e.values, "|")} pasirinkimų`;
			case "too_big": {
				let n = r[e.origin] ?? e.origin, i = t(e.origin, ro(Number(e.maximum)), e.inclusive ?? !1, "smaller");
				if (i?.verb) return `${no(n ?? e.origin ?? "reikšmė")} ${i.verb} ${e.maximum.toString()} ${i.unit ?? "elementų"}`;
				let a = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
				return `${no(n ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.maximum.toString()} ${i?.unit}`;
			}
			case "too_small": {
				let n = r[e.origin] ?? e.origin, i = t(e.origin, ro(Number(e.minimum)), e.inclusive ?? !1, "bigger");
				if (i?.verb) return `${no(n ?? e.origin ?? "reikšmė")} ${i.verb} ${e.minimum.toString()} ${i.unit ?? "elementų"}`;
				let a = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
				return `${no(n ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.minimum.toString()} ${i?.unit}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Eilutė privalo prasidėti "${t.prefix}"` : t.format === "ends_with" ? `Eilutė privalo pasibaigti "${t.suffix}"` : t.format === "includes" ? `Eilutė privalo įtraukti "${t.includes}"` : t.format === "regex" ? `Eilutė privalo atitikti ${t.pattern}` : `Neteisingas ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Skaičius privalo būti ${e.divisor} kartotinis.`;
			case "unrecognized_keys": return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${e.keys.length > 1 ? "ai" : "as"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return "Rastas klaidingas raktas";
			case "invalid_union": return "Klaidinga įvestis";
			case "invalid_element": return `${no(r[e.origin] ?? e.origin ?? e.origin ?? "reikšmė")} turi klaidingą įvestį`;
			default: return "Klaidinga įvestis";
		}
	};
};
function ao() {
	return { localeError: io() };
}
//#endregion
//#region node_modules/zod/v4/locales/mk.js
var oo = () => {
	let e = {
		string: {
			unit: "знаци",
			verb: "да имаат"
		},
		file: {
			unit: "бајти",
			verb: "да имаат"
		},
		array: {
			unit: "ставки",
			verb: "да имаат"
		},
		set: {
			unit: "ставки",
			verb: "да имаат"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "внес",
		email: "адреса на е-пошта",
		url: "URL",
		emoji: "емоџи",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO датум и време",
		date: "ISO датум",
		time: "ISO време",
		duration: "ISO времетраење",
		ipv4: "IPv4 адреса",
		ipv6: "IPv6 адреса",
		cidrv4: "IPv4 опсег",
		cidrv6: "IPv6 опсег",
		base64: "base64-енкодирана низа",
		base64url: "base64url-енкодирана низа",
		json_string: "JSON низа",
		e164: "E.164 број",
		jwt: "JWT",
		template_literal: "внес"
	}, r = {
		nan: "NaN",
		number: "број",
		array: "низа"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Грешен внес: се очекува instanceof ${e.expected}, примено ${i}` : `Грешен внес: се очекува ${t}, примено ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${x(e.values[0])}` : `Грешана опција: се очекува една ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Премногу голем: се очекува ${e.origin ?? "вредноста"} да има ${n}${e.maximum.toString()} ${r.unit ?? "елементи"}` : `Премногу голем: се очекува ${e.origin ?? "вредноста"} да биде ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Премногу мал: се очекува ${e.origin} да има ${n}${e.minimum.toString()} ${r.unit}` : `Премногу мал: се очекува ${e.origin} да биде ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Неважечка низа: мора да започнува со "${t.prefix}"` : t.format === "ends_with" ? `Неважечка низа: мора да завршува со "${t.suffix}"` : t.format === "includes" ? `Неважечка низа: мора да вклучува "${t.includes}"` : t.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Грешен број: мора да биде делив со ${e.divisor}`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Грешен клуч во ${e.origin}`;
			case "invalid_union": return "Грешен внес";
			case "invalid_element": return `Грешна вредност во ${e.origin}`;
			default: return "Грешен внес";
		}
	};
};
function so() {
	return { localeError: oo() };
}
//#endregion
//#region node_modules/zod/v4/locales/ms.js
var co = () => {
	let e = {
		string: {
			unit: "aksara",
			verb: "mempunyai"
		},
		file: {
			unit: "bait",
			verb: "mempunyai"
		},
		array: {
			unit: "elemen",
			verb: "mempunyai"
		},
		set: {
			unit: "elemen",
			verb: "mempunyai"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "alamat e-mel",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "tarikh masa ISO",
		date: "tarikh ISO",
		time: "masa ISO",
		duration: "tempoh ISO",
		ipv4: "alamat IPv4",
		ipv6: "alamat IPv6",
		cidrv4: "julat IPv4",
		cidrv6: "julat IPv6",
		base64: "string dikodkan base64",
		base64url: "string dikodkan base64url",
		json_string: "string JSON",
		e164: "nombor E.164",
		jwt: "JWT",
		template_literal: "input"
	}, r = {
		nan: "NaN",
		number: "nombor"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Input tidak sah: dijangka instanceof ${e.expected}, diterima ${i}` : `Input tidak sah: dijangka ${t}, diterima ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Input tidak sah: dijangka ${x(e.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Terlalu besar: dijangka ${e.origin ?? "nilai"} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? "elemen"}` : `Terlalu besar: dijangka ${e.origin ?? "nilai"} adalah ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Terlalu kecil: dijangka ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}` : `Terlalu kecil: dijangka ${e.origin} adalah ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${t.prefix}"` : t.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${t.suffix}"` : t.format === "includes" ? `String tidak sah: mesti mengandungi "${t.includes}"` : t.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${t.pattern}` : `${n[t.format] ?? e.format} tidak sah`;
			}
			case "not_multiple_of": return `Nombor tidak sah: perlu gandaan ${e.divisor}`;
			case "unrecognized_keys": return `Kunci tidak dikenali: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Kunci tidak sah dalam ${e.origin}`;
			case "invalid_union": return "Input tidak sah";
			case "invalid_element": return `Nilai tidak sah dalam ${e.origin}`;
			default: return "Input tidak sah";
		}
	};
};
function lo() {
	return { localeError: co() };
}
//#endregion
//#region node_modules/zod/v4/locales/nl.js
var uo = () => {
	let e = {
		string: {
			unit: "tekens",
			verb: "heeft"
		},
		file: {
			unit: "bytes",
			verb: "heeft"
		},
		array: {
			unit: "elementen",
			verb: "heeft"
		},
		set: {
			unit: "elementen",
			verb: "heeft"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "invoer",
		email: "emailadres",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datum en tijd",
		date: "ISO datum",
		time: "ISO tijd",
		duration: "ISO duur",
		ipv4: "IPv4-adres",
		ipv6: "IPv6-adres",
		cidrv4: "IPv4-bereik",
		cidrv6: "IPv6-bereik",
		base64: "base64-gecodeerde tekst",
		base64url: "base64 URL-gecodeerde tekst",
		json_string: "JSON string",
		e164: "E.164-nummer",
		jwt: "JWT",
		template_literal: "invoer"
	}, r = {
		nan: "NaN",
		number: "getal"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ongeldige invoer: verwacht instanceof ${e.expected}, ontving ${i}` : `Ongeldige invoer: verwacht ${t}, ontving ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ongeldige invoer: verwacht ${x(e.values[0])}` : `Ongeldige optie: verwacht één van ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin), i = e.origin === "date" ? "laat" : e.origin === "string" ? "lang" : "groot";
				return r ? `Te ${i}: verwacht dat ${e.origin ?? "waarde"} ${n}${e.maximum.toString()} ${r.unit ?? "elementen"} ${r.verb}` : `Te ${i}: verwacht dat ${e.origin ?? "waarde"} ${n}${e.maximum.toString()} is`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin), i = e.origin === "date" ? "vroeg" : e.origin === "string" ? "kort" : "klein";
				return r ? `Te ${i}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ${r.verb}` : `Te ${i}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} is`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ongeldige tekst: moet met "${t.prefix}" beginnen` : t.format === "ends_with" ? `Ongeldige tekst: moet op "${t.suffix}" eindigen` : t.format === "includes" ? `Ongeldige tekst: moet "${t.includes}" bevatten` : t.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${t.pattern}` : `Ongeldig: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Ongeldig getal: moet een veelvoud van ${e.divisor} zijn`;
			case "unrecognized_keys": return `Onbekende key${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Ongeldige key in ${e.origin}`;
			case "invalid_union": return "Ongeldige invoer";
			case "invalid_element": return `Ongeldige waarde in ${e.origin}`;
			default: return "Ongeldige invoer";
		}
	};
};
function fo() {
	return { localeError: uo() };
}
//#endregion
//#region node_modules/zod/v4/locales/no.js
var po = () => {
	let e = {
		string: {
			unit: "tegn",
			verb: "å ha"
		},
		file: {
			unit: "bytes",
			verb: "å ha"
		},
		array: {
			unit: "elementer",
			verb: "å inneholde"
		},
		set: {
			unit: "elementer",
			verb: "å inneholde"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "e-postadresse",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO dato- og klokkeslett",
		date: "ISO-dato",
		time: "ISO-klokkeslett",
		duration: "ISO-varighet",
		ipv4: "IPv4-område",
		ipv6: "IPv6-område",
		cidrv4: "IPv4-spekter",
		cidrv6: "IPv6-spekter",
		base64: "base64-enkodet streng",
		base64url: "base64url-enkodet streng",
		json_string: "JSON-streng",
		e164: "E.164-nummer",
		jwt: "JWT",
		template_literal: "input"
	}, r = {
		nan: "NaN",
		number: "tall",
		array: "liste"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ugyldig input: forventet instanceof ${e.expected}, fikk ${i}` : `Ugyldig input: forventet ${t}, fikk ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ugyldig verdi: forventet ${x(e.values[0])}` : `Ugyldig valg: forventet en av ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `For stor(t): forventet ${e.origin ?? "value"} til å ha ${n}${e.maximum.toString()} ${r.unit ?? "elementer"}` : `For stor(t): forventet ${e.origin ?? "value"} til å ha ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()} ${r.unit}` : `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ugyldig streng: må starte med "${t.prefix}"` : t.format === "ends_with" ? `Ugyldig streng: må ende med "${t.suffix}"` : t.format === "includes" ? `Ugyldig streng: må inneholde "${t.includes}"` : t.format === "regex" ? `Ugyldig streng: må matche mønsteret ${t.pattern}` : `Ugyldig ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Ugyldig tall: må være et multiplum av ${e.divisor}`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Ugyldig nøkkel i ${e.origin}`;
			case "invalid_union": return "Ugyldig input";
			case "invalid_element": return `Ugyldig verdi i ${e.origin}`;
			default: return "Ugyldig input";
		}
	};
};
function mo() {
	return { localeError: po() };
}
//#endregion
//#region node_modules/zod/v4/locales/ota.js
var ho = () => {
	let e = {
		string: {
			unit: "harf",
			verb: "olmalıdır"
		},
		file: {
			unit: "bayt",
			verb: "olmalıdır"
		},
		array: {
			unit: "unsur",
			verb: "olmalıdır"
		},
		set: {
			unit: "unsur",
			verb: "olmalıdır"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "giren",
		email: "epostagâh",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO hengâmı",
		date: "ISO tarihi",
		time: "ISO zamanı",
		duration: "ISO müddeti",
		ipv4: "IPv4 nişânı",
		ipv6: "IPv6 nişânı",
		cidrv4: "IPv4 menzili",
		cidrv6: "IPv6 menzili",
		base64: "base64-şifreli metin",
		base64url: "base64url-şifreli metin",
		json_string: "JSON metin",
		e164: "E.164 sayısı",
		jwt: "JWT",
		template_literal: "giren"
	}, r = {
		nan: "NaN",
		number: "numara",
		array: "saf",
		null: "gayb"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Fâsit giren: umulan instanceof ${e.expected}, alınan ${i}` : `Fâsit giren: umulan ${t}, alınan ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Fâsit giren: umulan ${x(e.values[0])}` : `Fâsit tercih: mûteberler ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Fazla büyük: ${e.origin ?? "value"}, ${n}${e.maximum.toString()} ${r.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${e.origin ?? "value"}, ${n}${e.maximum.toString()} olmalıydı.`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} ${r.unit} sahip olmalıydı.` : `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} olmalıydı.`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Fâsit metin: "${t.prefix}" ile başlamalı.` : t.format === "ends_with" ? `Fâsit metin: "${t.suffix}" ile bitmeli.` : t.format === "includes" ? `Fâsit metin: "${t.includes}" ihtivâ etmeli.` : t.format === "regex" ? `Fâsit metin: ${t.pattern} nakşına uymalı.` : `Fâsit ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Fâsit sayı: ${e.divisor} katı olmalıydı.`;
			case "unrecognized_keys": return `Tanınmayan anahtar ${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} için tanınmayan anahtar var.`;
			case "invalid_union": return "Giren tanınamadı.";
			case "invalid_element": return `${e.origin} için tanınmayan kıymet var.`;
			default: return "Kıymet tanınamadı.";
		}
	};
};
function go() {
	return { localeError: ho() };
}
//#endregion
//#region node_modules/zod/v4/locales/ps.js
var _o = () => {
	let e = {
		string: {
			unit: "توکي",
			verb: "ولري"
		},
		file: {
			unit: "بایټس",
			verb: "ولري"
		},
		array: {
			unit: "توکي",
			verb: "ولري"
		},
		set: {
			unit: "توکي",
			verb: "ولري"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ورودي",
		email: "بریښنالیک",
		url: "یو آر ال",
		emoji: "ایموجي",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "نیټه او وخت",
		date: "نېټه",
		time: "وخت",
		duration: "موده",
		ipv4: "د IPv4 پته",
		ipv6: "د IPv6 پته",
		cidrv4: "د IPv4 ساحه",
		cidrv6: "د IPv6 ساحه",
		base64: "base64-encoded متن",
		base64url: "base64url-encoded متن",
		json_string: "JSON متن",
		e164: "د E.164 شمېره",
		jwt: "JWT",
		template_literal: "ورودي"
	}, r = {
		nan: "NaN",
		number: "عدد",
		array: "ارې"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `ناسم ورودي: باید instanceof ${e.expected} وای, مګر ${i} ترلاسه شو` : `ناسم ورودي: باید ${t} وای, مګر ${i} ترلاسه شو`;
			}
			case "invalid_value": return e.values.length === 1 ? `ناسم ورودي: باید ${x(e.values[0])} وای` : `ناسم انتخاب: باید یو له ${p(e.values, "|")} څخه وای`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${n}${e.maximum.toString()} ${r.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${n}${e.maximum.toString()} وي`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} ${r.unit} ولري` : `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} وي`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `ناسم متن: باید د "${t.prefix}" سره پیل شي` : t.format === "ends_with" ? `ناسم متن: باید د "${t.suffix}" سره پای ته ورسيږي` : t.format === "includes" ? `ناسم متن: باید "${t.includes}" ولري` : t.format === "regex" ? `ناسم متن: باید د ${t.pattern} سره مطابقت ولري` : `${n[t.format] ?? e.format} ناسم دی`;
			}
			case "not_multiple_of": return `ناسم عدد: باید د ${e.divisor} مضرب وي`;
			case "unrecognized_keys": return `ناسم ${e.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `ناسم کلیډ په ${e.origin} کې`;
			case "invalid_union": return "ناسمه ورودي";
			case "invalid_element": return `ناسم عنصر په ${e.origin} کې`;
			default: return "ناسمه ورودي";
		}
	};
};
function vo() {
	return { localeError: _o() };
}
//#endregion
//#region node_modules/zod/v4/locales/pl.js
var yo = () => {
	let e = {
		string: {
			unit: "znaków",
			verb: "mieć"
		},
		file: {
			unit: "bajtów",
			verb: "mieć"
		},
		array: {
			unit: "elementów",
			verb: "mieć"
		},
		set: {
			unit: "elementów",
			verb: "mieć"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "wyrażenie",
		email: "adres email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "data i godzina w formacie ISO",
		date: "data w formacie ISO",
		time: "godzina w formacie ISO",
		duration: "czas trwania ISO",
		ipv4: "adres IPv4",
		ipv6: "adres IPv6",
		cidrv4: "zakres IPv4",
		cidrv6: "zakres IPv6",
		base64: "ciąg znaków zakodowany w formacie base64",
		base64url: "ciąg znaków zakodowany w formacie base64url",
		json_string: "ciąg znaków w formacie JSON",
		e164: "liczba E.164",
		jwt: "JWT",
		template_literal: "wejście"
	}, r = {
		nan: "NaN",
		number: "liczba",
		array: "tablica"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${e.expected}, otrzymano ${i}` : `Nieprawidłowe dane wejściowe: oczekiwano ${t}, otrzymano ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${x(e.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Za duża wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${n}${e.maximum.toString()} ${r.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Za mała wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${n}${e.minimum.toString()} ${r.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${t.prefix}"` : t.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${t.suffix}"` : t.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${t.includes}"` : t.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${t.pattern}` : `Nieprawidłow(y/a/e) ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Nieprawidłowa liczba: musi być wielokrotnością ${e.divisor}`;
			case "unrecognized_keys": return `Nierozpoznane klucze${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Nieprawidłowy klucz w ${e.origin}`;
			case "invalid_union": return "Nieprawidłowe dane wejściowe";
			case "invalid_element": return `Nieprawidłowa wartość w ${e.origin}`;
			default: return "Nieprawidłowe dane wejściowe";
		}
	};
};
function bo() {
	return { localeError: yo() };
}
//#endregion
//#region node_modules/zod/v4/locales/pt.js
var xo = () => {
	let e = {
		string: {
			unit: "caracteres",
			verb: "ter"
		},
		file: {
			unit: "bytes",
			verb: "ter"
		},
		array: {
			unit: "itens",
			verb: "ter"
		},
		set: {
			unit: "itens",
			verb: "ter"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "padrão",
		email: "endereço de e-mail",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "data e hora ISO",
		date: "data ISO",
		time: "hora ISO",
		duration: "duração ISO",
		ipv4: "endereço IPv4",
		ipv6: "endereço IPv6",
		cidrv4: "faixa de IPv4",
		cidrv6: "faixa de IPv6",
		base64: "texto codificado em base64",
		base64url: "URL codificada em base64",
		json_string: "texto JSON",
		e164: "número E.164",
		jwt: "JWT",
		template_literal: "entrada"
	}, r = {
		nan: "NaN",
		number: "número",
		null: "nulo"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Tipo inválido: esperado instanceof ${e.expected}, recebido ${i}` : `Tipo inválido: esperado ${t}, recebido ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Entrada inválida: esperado ${x(e.values[0])}` : `Opção inválida: esperada uma das ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Muito grande: esperado que ${e.origin ?? "valor"} tivesse ${n}${e.maximum.toString()} ${r.unit ?? "elementos"}` : `Muito grande: esperado que ${e.origin ?? "valor"} fosse ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Muito pequeno: esperado que ${e.origin} tivesse ${n}${e.minimum.toString()} ${r.unit}` : `Muito pequeno: esperado que ${e.origin} fosse ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Texto inválido: deve começar com "${t.prefix}"` : t.format === "ends_with" ? `Texto inválido: deve terminar com "${t.suffix}"` : t.format === "includes" ? `Texto inválido: deve incluir "${t.includes}"` : t.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${t.pattern}` : `${n[t.format] ?? e.format} inválido`;
			}
			case "not_multiple_of": return `Número inválido: deve ser múltiplo de ${e.divisor}`;
			case "unrecognized_keys": return `Chave${e.keys.length > 1 ? "s" : ""} desconhecida${e.keys.length > 1 ? "s" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Chave inválida em ${e.origin}`;
			case "invalid_union": return "Entrada inválida";
			case "invalid_element": return `Valor inválido em ${e.origin}`;
			default: return "Campo inválido";
		}
	};
};
function So() {
	return { localeError: xo() };
}
//#endregion
//#region node_modules/zod/v4/locales/ro.js
var Co = () => {
	let e = {
		string: {
			unit: "caractere",
			verb: "să aibă"
		},
		file: {
			unit: "octeți",
			verb: "să aibă"
		},
		array: {
			unit: "elemente",
			verb: "să aibă"
		},
		set: {
			unit: "elemente",
			verb: "să aibă"
		},
		map: {
			unit: "intrări",
			verb: "să aibă"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "intrare",
		email: "adresă de email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "dată și oră ISO",
		date: "dată ISO",
		time: "oră ISO",
		duration: "durată ISO",
		ipv4: "adresă IPv4",
		ipv6: "adresă IPv6",
		mac: "adresă MAC",
		cidrv4: "interval IPv4",
		cidrv6: "interval IPv6",
		base64: "șir codat base64",
		base64url: "șir codat base64url",
		json_string: "șir JSON",
		e164: "număr E.164",
		jwt: "JWT",
		template_literal: "intrare"
	}, r = {
		nan: "NaN",
		string: "șir",
		number: "număr",
		boolean: "boolean",
		function: "funcție",
		array: "matrice",
		object: "obiect",
		undefined: "nedefinit",
		symbol: "simbol",
		bigint: "număr mare",
		void: "void",
		never: "never",
		map: "hartă",
		set: "set"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input);
				return `Intrare invalidă: așteptat ${t}, primit ${r[n] ?? n}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Intrare invalidă: așteptat ${x(e.values[0])}` : `Opțiune invalidă: așteptat una dintre ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Prea mare: așteptat ca ${e.origin ?? "valoarea"} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? "elemente"}` : `Prea mare: așteptat ca ${e.origin ?? "valoarea"} să fie ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Prea mic: așteptat ca ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}` : `Prea mic: așteptat ca ${e.origin} să fie ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Șir invalid: trebuie să înceapă cu "${t.prefix}"` : t.format === "ends_with" ? `Șir invalid: trebuie să se termine cu "${t.suffix}"` : t.format === "includes" ? `Șir invalid: trebuie să includă "${t.includes}"` : t.format === "regex" ? `Șir invalid: trebuie să se potrivească cu modelul ${t.pattern}` : `Format invalid: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Număr invalid: trebuie să fie multiplu de ${e.divisor}`;
			case "unrecognized_keys": return `Chei nerecunoscute: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Cheie invalidă în ${e.origin}`;
			case "invalid_union": return "Intrare invalidă";
			case "invalid_element": return `Valoare invalidă în ${e.origin}`;
			default: return "Intrare invalidă";
		}
	};
};
function wo() {
	return { localeError: Co() };
}
//#endregion
//#region node_modules/zod/v4/locales/ru.js
function To(e, t, n, r) {
	let i = Math.abs(e), a = i % 10, o = i % 100;
	return o >= 11 && o <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r;
}
var Eo = () => {
	let e = {
		string: {
			unit: {
				one: "символ",
				few: "символа",
				many: "символов"
			},
			verb: "иметь"
		},
		file: {
			unit: {
				one: "байт",
				few: "байта",
				many: "байт"
			},
			verb: "иметь"
		},
		array: {
			unit: {
				one: "элемент",
				few: "элемента",
				many: "элементов"
			},
			verb: "иметь"
		},
		set: {
			unit: {
				one: "элемент",
				few: "элемента",
				many: "элементов"
			},
			verb: "иметь"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ввод",
		email: "email адрес",
		url: "URL",
		emoji: "эмодзи",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO дата и время",
		date: "ISO дата",
		time: "ISO время",
		duration: "ISO длительность",
		ipv4: "IPv4 адрес",
		ipv6: "IPv6 адрес",
		cidrv4: "IPv4 диапазон",
		cidrv6: "IPv6 диапазон",
		base64: "строка в формате base64",
		base64url: "строка в формате base64url",
		json_string: "JSON строка",
		e164: "номер E.164",
		jwt: "JWT",
		template_literal: "ввод"
	}, r = {
		nan: "NaN",
		number: "число",
		array: "массив"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Неверный ввод: ожидалось instanceof ${e.expected}, получено ${i}` : `Неверный ввод: ожидалось ${t}, получено ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Неверный ввод: ожидалось ${x(e.values[0])}` : `Неверный вариант: ожидалось одно из ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				if (r) {
					let t = To(Number(e.maximum), r.unit.one, r.unit.few, r.unit.many);
					return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет иметь ${n}${e.maximum.toString()} ${t}`;
				}
				return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				if (r) {
					let t = To(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
					return `Слишком маленькое значение: ожидалось, что ${e.origin} будет иметь ${n}${e.minimum.toString()} ${t}`;
				}
				return `Слишком маленькое значение: ожидалось, что ${e.origin} будет ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Неверная строка: должна начинаться с "${t.prefix}"` : t.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${t.suffix}"` : t.format === "includes" ? `Неверная строка: должна содержать "${t.includes}"` : t.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${t.pattern}` : `Неверный ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Неверное число: должно быть кратным ${e.divisor}`;
			case "unrecognized_keys": return `Нераспознанн${e.keys.length > 1 ? "ые" : "ый"} ключ${e.keys.length > 1 ? "и" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Неверный ключ в ${e.origin}`;
			case "invalid_union": return "Неверные входные данные";
			case "invalid_element": return `Неверное значение в ${e.origin}`;
			default: return "Неверные входные данные";
		}
	};
};
function Do() {
	return { localeError: Eo() };
}
//#endregion
//#region node_modules/zod/v4/locales/sl.js
var Oo = () => {
	let e = {
		string: {
			unit: "znakov",
			verb: "imeti"
		},
		file: {
			unit: "bajtov",
			verb: "imeti"
		},
		array: {
			unit: "elementov",
			verb: "imeti"
		},
		set: {
			unit: "elementov",
			verb: "imeti"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "vnos",
		email: "e-poštni naslov",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datum in čas",
		date: "ISO datum",
		time: "ISO čas",
		duration: "ISO trajanje",
		ipv4: "IPv4 naslov",
		ipv6: "IPv6 naslov",
		cidrv4: "obseg IPv4",
		cidrv6: "obseg IPv6",
		base64: "base64 kodiran niz",
		base64url: "base64url kodiran niz",
		json_string: "JSON niz",
		e164: "E.164 številka",
		jwt: "JWT",
		template_literal: "vnos"
	}, r = {
		nan: "NaN",
		number: "število",
		array: "tabela"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Neveljaven vnos: pričakovano instanceof ${e.expected}, prejeto ${i}` : `Neveljaven vnos: pričakovano ${t}, prejeto ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Neveljaven vnos: pričakovano ${x(e.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} imelo ${n}${e.maximum.toString()} ${r.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Premajhno: pričakovano, da bo ${e.origin} imelo ${n}${e.minimum.toString()} ${r.unit}` : `Premajhno: pričakovano, da bo ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${t.prefix}"` : t.format === "ends_with" ? `Neveljaven niz: mora se končati z "${t.suffix}"` : t.format === "includes" ? `Neveljaven niz: mora vsebovati "${t.includes}"` : t.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${t.pattern}` : `Neveljaven ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Neveljavno število: mora biti večkratnik ${e.divisor}`;
			case "unrecognized_keys": return `Neprepoznan${e.keys.length > 1 ? "i ključi" : " ključ"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Neveljaven ključ v ${e.origin}`;
			case "invalid_union": return "Neveljaven vnos";
			case "invalid_element": return `Neveljavna vrednost v ${e.origin}`;
			default: return "Neveljaven vnos";
		}
	};
};
function ko() {
	return { localeError: Oo() };
}
//#endregion
//#region node_modules/zod/v4/locales/sv.js
var Ao = () => {
	let e = {
		string: {
			unit: "tecken",
			verb: "att ha"
		},
		file: {
			unit: "bytes",
			verb: "att ha"
		},
		array: {
			unit: "objekt",
			verb: "att innehålla"
		},
		set: {
			unit: "objekt",
			verb: "att innehålla"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "reguljärt uttryck",
		email: "e-postadress",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO-datum och tid",
		date: "ISO-datum",
		time: "ISO-tid",
		duration: "ISO-varaktighet",
		ipv4: "IPv4-intervall",
		ipv6: "IPv6-intervall",
		cidrv4: "IPv4-spektrum",
		cidrv6: "IPv6-spektrum",
		base64: "base64-kodad sträng",
		base64url: "base64url-kodad sträng",
		json_string: "JSON-sträng",
		e164: "E.164-nummer",
		jwt: "JWT",
		template_literal: "mall-literal"
	}, r = {
		nan: "NaN",
		number: "antal",
		array: "lista"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ogiltig inmatning: förväntat instanceof ${e.expected}, fick ${i}` : `Ogiltig inmatning: förväntat ${t}, fick ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ogiltig inmatning: förväntat ${x(e.values[0])}` : `Ogiltigt val: förväntade en av ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `För stor(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.maximum.toString()} ${r.unit ?? "element"}` : `För stor(t): förväntat ${e.origin ?? "värdet"} att ha ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `För lite(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.minimum.toString()} ${r.unit}` : `För lite(t): förväntade ${e.origin ?? "värdet"} att ha ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ogiltig sträng: måste börja med "${t.prefix}"` : t.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${t.suffix}"` : t.format === "includes" ? `Ogiltig sträng: måste innehålla "${t.includes}"` : t.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${t.pattern}"` : `Ogiltig(t) ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Ogiltigt tal: måste vara en multipel av ${e.divisor}`;
			case "unrecognized_keys": return `${e.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Ogiltig nyckel i ${e.origin ?? "värdet"}`;
			case "invalid_union": return "Ogiltig input";
			case "invalid_element": return `Ogiltigt värde i ${e.origin ?? "värdet"}`;
			default: return "Ogiltig input";
		}
	};
};
function jo() {
	return { localeError: Ao() };
}
//#endregion
//#region node_modules/zod/v4/locales/ta.js
var Mo = () => {
	let e = {
		string: {
			unit: "எழுத்துக்கள்",
			verb: "கொண்டிருக்க வேண்டும்"
		},
		file: {
			unit: "பைட்டுகள்",
			verb: "கொண்டிருக்க வேண்டும்"
		},
		array: {
			unit: "உறுப்புகள்",
			verb: "கொண்டிருக்க வேண்டும்"
		},
		set: {
			unit: "உறுப்புகள்",
			verb: "கொண்டிருக்க வேண்டும்"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "உள்ளீடு",
		email: "மின்னஞ்சல் முகவரி",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO தேதி நேரம்",
		date: "ISO தேதி",
		time: "ISO நேரம்",
		duration: "ISO கால அளவு",
		ipv4: "IPv4 முகவரி",
		ipv6: "IPv6 முகவரி",
		cidrv4: "IPv4 வரம்பு",
		cidrv6: "IPv6 வரம்பு",
		base64: "base64-encoded சரம்",
		base64url: "base64url-encoded சரம்",
		json_string: "JSON சரம்",
		e164: "E.164 எண்",
		jwt: "JWT",
		template_literal: "input"
	}, r = {
		nan: "NaN",
		number: "எண்",
		array: "அணி",
		null: "வெறுமை"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${e.expected}, பெறப்பட்டது ${i}` : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t}, பெறப்பட்டது ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${x(e.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${p(e.values, "|")} இல் ஒன்று`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${n}${e.maximum.toString()} ${r.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${n}${e.maximum.toString()} ஆக இருக்க வேண்டும்`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ஆக இருக்க வேண்டும்`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `தவறான சரம்: "${t.prefix}" இல் தொடங்க வேண்டும்` : t.format === "ends_with" ? `தவறான சரம்: "${t.suffix}" இல் முடிவடைய வேண்டும்` : t.format === "includes" ? `தவறான சரம்: "${t.includes}" ஐ உள்ளடக்க வேண்டும்` : t.format === "regex" ? `தவறான சரம்: ${t.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `தவறான எண்: ${e.divisor} இன் பலமாக இருக்க வேண்டும்`;
			case "unrecognized_keys": return `அடையாளம் தெரியாத விசை${e.keys.length > 1 ? "கள்" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} இல் தவறான விசை`;
			case "invalid_union": return "தவறான உள்ளீடு";
			case "invalid_element": return `${e.origin} இல் தவறான மதிப்பு`;
			default: return "தவறான உள்ளீடு";
		}
	};
};
function No() {
	return { localeError: Mo() };
}
//#endregion
//#region node_modules/zod/v4/locales/th.js
var Po = () => {
	let e = {
		string: {
			unit: "ตัวอักษร",
			verb: "ควรมี"
		},
		file: {
			unit: "ไบต์",
			verb: "ควรมี"
		},
		array: {
			unit: "รายการ",
			verb: "ควรมี"
		},
		set: {
			unit: "รายการ",
			verb: "ควรมี"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ข้อมูลที่ป้อน",
		email: "ที่อยู่อีเมล",
		url: "URL",
		emoji: "อิโมจิ",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "วันที่เวลาแบบ ISO",
		date: "วันที่แบบ ISO",
		time: "เวลาแบบ ISO",
		duration: "ช่วงเวลาแบบ ISO",
		ipv4: "ที่อยู่ IPv4",
		ipv6: "ที่อยู่ IPv6",
		cidrv4: "ช่วง IP แบบ IPv4",
		cidrv6: "ช่วง IP แบบ IPv6",
		base64: "ข้อความแบบ Base64",
		base64url: "ข้อความแบบ Base64 สำหรับ URL",
		json_string: "ข้อความแบบ JSON",
		e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
		jwt: "โทเคน JWT",
		template_literal: "ข้อมูลที่ป้อน"
	}, r = {
		nan: "NaN",
		number: "ตัวเลข",
		array: "อาร์เรย์ (Array)",
		null: "ไม่มีค่า (null)"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${e.expected} แต่ได้รับ ${i}` : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t} แต่ได้รับ ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${x(e.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "ไม่เกิน" : "น้อยกว่า", r = t(e.origin);
				return r ? `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${n} ${e.maximum.toString()} ${r.unit ?? "รายการ"}` : `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${n} ${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? "อย่างน้อย" : "มากกว่า", r = t(e.origin);
				return r ? `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()} ${r.unit}` : `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${t.prefix}"` : t.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${t.suffix}"` : t.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${t.includes}" อยู่ในข้อความ` : t.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${t.pattern}` : `รูปแบบไม่ถูกต้อง: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${e.divisor} ได้ลงตัว`;
			case "unrecognized_keys": return `พบคีย์ที่ไม่รู้จัก: ${p(e.keys, ", ")}`;
			case "invalid_key": return `คีย์ไม่ถูกต้องใน ${e.origin}`;
			case "invalid_union": return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
			case "invalid_element": return `ข้อมูลไม่ถูกต้องใน ${e.origin}`;
			default: return "ข้อมูลไม่ถูกต้อง";
		}
	};
};
function Fo() {
	return { localeError: Po() };
}
//#endregion
//#region node_modules/zod/v4/locales/tr.js
var Io = () => {
	let e = {
		string: {
			unit: "karakter",
			verb: "olmalı"
		},
		file: {
			unit: "bayt",
			verb: "olmalı"
		},
		array: {
			unit: "öğe",
			verb: "olmalı"
		},
		set: {
			unit: "öğe",
			verb: "olmalı"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "girdi",
		email: "e-posta adresi",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO tarih ve saat",
		date: "ISO tarih",
		time: "ISO saat",
		duration: "ISO süre",
		ipv4: "IPv4 adresi",
		ipv6: "IPv6 adresi",
		cidrv4: "IPv4 aralığı",
		cidrv6: "IPv6 aralığı",
		base64: "base64 ile şifrelenmiş metin",
		base64url: "base64url ile şifrelenmiş metin",
		json_string: "JSON dizesi",
		e164: "E.164 sayısı",
		jwt: "JWT",
		template_literal: "Şablon dizesi"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Geçersiz değer: beklenen instanceof ${e.expected}, alınan ${i}` : `Geçersiz değer: beklenen ${t}, alınan ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Geçersiz değer: beklenen ${x(e.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Çok büyük: beklenen ${e.origin ?? "değer"} ${n}${e.maximum.toString()} ${r.unit ?? "öğe"}` : `Çok büyük: beklenen ${e.origin ?? "değer"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()} ${r.unit}` : `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Geçersiz metin: "${t.prefix}" ile başlamalı` : t.format === "ends_with" ? `Geçersiz metin: "${t.suffix}" ile bitmeli` : t.format === "includes" ? `Geçersiz metin: "${t.includes}" içermeli` : t.format === "regex" ? `Geçersiz metin: ${t.pattern} desenine uymalı` : `Geçersiz ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Geçersiz sayı: ${e.divisor} ile tam bölünebilmeli`;
			case "unrecognized_keys": return `Tanınmayan anahtar${e.keys.length > 1 ? "lar" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} içinde geçersiz anahtar`;
			case "invalid_union": return "Geçersiz değer";
			case "invalid_element": return `${e.origin} içinde geçersiz değer`;
			default: return "Geçersiz değer";
		}
	};
};
function Lo() {
	return { localeError: Io() };
}
//#endregion
//#region node_modules/zod/v4/locales/uk.js
var Ro = () => {
	let e = {
		string: {
			unit: "символів",
			verb: "матиме"
		},
		file: {
			unit: "байтів",
			verb: "матиме"
		},
		array: {
			unit: "елементів",
			verb: "матиме"
		},
		set: {
			unit: "елементів",
			verb: "матиме"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "вхідні дані",
		email: "адреса електронної пошти",
		url: "URL",
		emoji: "емодзі",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "дата та час ISO",
		date: "дата ISO",
		time: "час ISO",
		duration: "тривалість ISO",
		ipv4: "адреса IPv4",
		ipv6: "адреса IPv6",
		cidrv4: "діапазон IPv4",
		cidrv6: "діапазон IPv6",
		base64: "рядок у кодуванні base64",
		base64url: "рядок у кодуванні base64url",
		json_string: "рядок JSON",
		e164: "номер E.164",
		jwt: "JWT",
		template_literal: "вхідні дані"
	}, r = {
		nan: "NaN",
		number: "число",
		array: "масив"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Неправильні вхідні дані: очікується instanceof ${e.expected}, отримано ${i}` : `Неправильні вхідні дані: очікується ${t}, отримано ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Неправильні вхідні дані: очікується ${x(e.values[0])}` : `Неправильна опція: очікується одне з ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Занадто велике: очікується, що ${e.origin ?? "значення"} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? "елементів"}` : `Занадто велике: очікується, що ${e.origin ?? "значення"} буде ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Занадто мале: очікується, що ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}` : `Занадто мале: очікується, що ${e.origin} буде ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${t.prefix}"` : t.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${t.suffix}"` : t.format === "includes" ? `Неправильний рядок: повинен містити "${t.includes}"` : t.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${t.pattern}` : `Неправильний ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Неправильне число: повинно бути кратним ${e.divisor}`;
			case "unrecognized_keys": return `Нерозпізнаний ключ${e.keys.length > 1 ? "і" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Неправильний ключ у ${e.origin}`;
			case "invalid_union": return "Неправильні вхідні дані";
			case "invalid_element": return `Неправильне значення у ${e.origin}`;
			default: return "Неправильні вхідні дані";
		}
	};
};
function zo() {
	return { localeError: Ro() };
}
//#endregion
//#region node_modules/zod/v4/locales/ua.js
function Bo() {
	return zo();
}
//#endregion
//#region node_modules/zod/v4/locales/ur.js
var Vo = () => {
	let e = {
		string: {
			unit: "حروف",
			verb: "ہونا"
		},
		file: {
			unit: "بائٹس",
			verb: "ہونا"
		},
		array: {
			unit: "آئٹمز",
			verb: "ہونا"
		},
		set: {
			unit: "آئٹمز",
			verb: "ہونا"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ان پٹ",
		email: "ای میل ایڈریس",
		url: "یو آر ایل",
		emoji: "ایموجی",
		uuid: "یو یو آئی ڈی",
		uuidv4: "یو یو آئی ڈی وی 4",
		uuidv6: "یو یو آئی ڈی وی 6",
		nanoid: "نینو آئی ڈی",
		guid: "جی یو آئی ڈی",
		cuid: "سی یو آئی ڈی",
		cuid2: "سی یو آئی ڈی 2",
		ulid: "یو ایل آئی ڈی",
		xid: "ایکس آئی ڈی",
		ksuid: "کے ایس یو آئی ڈی",
		datetime: "آئی ایس او ڈیٹ ٹائم",
		date: "آئی ایس او تاریخ",
		time: "آئی ایس او وقت",
		duration: "آئی ایس او مدت",
		ipv4: "آئی پی وی 4 ایڈریس",
		ipv6: "آئی پی وی 6 ایڈریس",
		cidrv4: "آئی پی وی 4 رینج",
		cidrv6: "آئی پی وی 6 رینج",
		base64: "بیس 64 ان کوڈڈ سٹرنگ",
		base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
		json_string: "جے ایس او این سٹرنگ",
		e164: "ای 164 نمبر",
		jwt: "جے ڈبلیو ٹی",
		template_literal: "ان پٹ"
	}, r = {
		nan: "NaN",
		number: "نمبر",
		array: "آرے",
		null: "نل"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `غلط ان پٹ: instanceof ${e.expected} متوقع تھا، ${i} موصول ہوا` : `غلط ان پٹ: ${t} متوقع تھا، ${i} موصول ہوا`;
			}
			case "invalid_value": return e.values.length === 1 ? `غلط ان پٹ: ${x(e.values[0])} متوقع تھا` : `غلط آپشن: ${p(e.values, "|")} میں سے ایک متوقع تھا`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `بہت بڑا: ${e.origin ?? "ویلیو"} کے ${n}${e.maximum.toString()} ${r.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${e.origin ?? "ویلیو"} کا ${n}${e.maximum.toString()} ہونا متوقع تھا`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `بہت چھوٹا: ${e.origin} کے ${n}${e.minimum.toString()} ${r.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${e.origin} کا ${n}${e.minimum.toString()} ہونا متوقع تھا`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `غلط سٹرنگ: "${t.prefix}" سے شروع ہونا چاہیے` : t.format === "ends_with" ? `غلط سٹرنگ: "${t.suffix}" پر ختم ہونا چاہیے` : t.format === "includes" ? `غلط سٹرنگ: "${t.includes}" شامل ہونا چاہیے` : t.format === "regex" ? `غلط سٹرنگ: پیٹرن ${t.pattern} سے میچ ہونا چاہیے` : `غلط ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `غلط نمبر: ${e.divisor} کا مضاعف ہونا چاہیے`;
			case "unrecognized_keys": return `غیر تسلیم شدہ کی${e.keys.length > 1 ? "ز" : ""}: ${p(e.keys, "، ")}`;
			case "invalid_key": return `${e.origin} میں غلط کی`;
			case "invalid_union": return "غلط ان پٹ";
			case "invalid_element": return `${e.origin} میں غلط ویلیو`;
			default: return "غلط ان پٹ";
		}
	};
};
function Ho() {
	return { localeError: Vo() };
}
//#endregion
//#region node_modules/zod/v4/locales/uz.js
var Uo = () => {
	let e = {
		string: {
			unit: "belgi",
			verb: "bo‘lishi kerak"
		},
		file: {
			unit: "bayt",
			verb: "bo‘lishi kerak"
		},
		array: {
			unit: "element",
			verb: "bo‘lishi kerak"
		},
		set: {
			unit: "element",
			verb: "bo‘lishi kerak"
		},
		map: {
			unit: "yozuv",
			verb: "bo‘lishi kerak"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "kirish",
		email: "elektron pochta manzili",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO sana va vaqti",
		date: "ISO sana",
		time: "ISO vaqt",
		duration: "ISO davomiylik",
		ipv4: "IPv4 manzil",
		ipv6: "IPv6 manzil",
		mac: "MAC manzil",
		cidrv4: "IPv4 diapazon",
		cidrv6: "IPv6 diapazon",
		base64: "base64 kodlangan satr",
		base64url: "base64url kodlangan satr",
		json_string: "JSON satr",
		e164: "E.164 raqam",
		jwt: "JWT",
		template_literal: "kirish"
	}, r = {
		nan: "NaN",
		number: "raqam",
		array: "massiv"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Noto‘g‘ri kirish: kutilgan instanceof ${e.expected}, qabul qilingan ${i}` : `Noto‘g‘ri kirish: kutilgan ${t}, qabul qilingan ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Noto‘g‘ri kirish: kutilgan ${x(e.values[0])}` : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Juda katta: kutilgan ${e.origin ?? "qiymat"} ${n}${e.maximum.toString()} ${r.unit} ${r.verb}` : `Juda katta: kutilgan ${e.origin ?? "qiymat"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ${r.verb}` : `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Noto‘g‘ri satr: "${t.prefix}" bilan boshlanishi kerak` : t.format === "ends_with" ? `Noto‘g‘ri satr: "${t.suffix}" bilan tugashi kerak` : t.format === "includes" ? `Noto‘g‘ri satr: "${t.includes}" ni o‘z ichiga olishi kerak` : t.format === "regex" ? `Noto‘g‘ri satr: ${t.pattern} shabloniga mos kelishi kerak` : `Noto‘g‘ri ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Noto‘g‘ri raqam: ${e.divisor} ning karralisi bo‘lishi kerak`;
			case "unrecognized_keys": return `Noma’lum kalit${e.keys.length > 1 ? "lar" : ""}: ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} dagi kalit noto‘g‘ri`;
			case "invalid_union": return "Noto‘g‘ri kirish";
			case "invalid_element": return `${e.origin} da noto‘g‘ri qiymat`;
			default: return "Noto‘g‘ri kirish";
		}
	};
};
function Wo() {
	return { localeError: Uo() };
}
//#endregion
//#region node_modules/zod/v4/locales/vi.js
var Go = () => {
	let e = {
		string: {
			unit: "ký tự",
			verb: "có"
		},
		file: {
			unit: "byte",
			verb: "có"
		},
		array: {
			unit: "phần tử",
			verb: "có"
		},
		set: {
			unit: "phần tử",
			verb: "có"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "đầu vào",
		email: "địa chỉ email",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ngày giờ ISO",
		date: "ngày ISO",
		time: "giờ ISO",
		duration: "khoảng thời gian ISO",
		ipv4: "địa chỉ IPv4",
		ipv6: "địa chỉ IPv6",
		cidrv4: "dải IPv4",
		cidrv6: "dải IPv6",
		base64: "chuỗi mã hóa base64",
		base64url: "chuỗi mã hóa base64url",
		json_string: "chuỗi JSON",
		e164: "số E.164",
		jwt: "JWT",
		template_literal: "đầu vào"
	}, r = {
		nan: "NaN",
		number: "số",
		array: "mảng"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Đầu vào không hợp lệ: mong đợi instanceof ${e.expected}, nhận được ${i}` : `Đầu vào không hợp lệ: mong đợi ${t}, nhận được ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${x(e.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Quá lớn: mong đợi ${e.origin ?? "giá trị"} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${e.origin ?? "giá trị"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Quá nhỏ: mong đợi ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}` : `Quá nhỏ: mong đợi ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${t.prefix}"` : t.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${t.suffix}"` : t.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${t.includes}"` : t.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${t.pattern}` : `${n[t.format] ?? e.format} không hợp lệ`;
			}
			case "not_multiple_of": return `Số không hợp lệ: phải là bội số của ${e.divisor}`;
			case "unrecognized_keys": return `Khóa không được nhận dạng: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Khóa không hợp lệ trong ${e.origin}`;
			case "invalid_union": return "Đầu vào không hợp lệ";
			case "invalid_element": return `Giá trị không hợp lệ trong ${e.origin}`;
			default: return "Đầu vào không hợp lệ";
		}
	};
};
function Ko() {
	return { localeError: Go() };
}
//#endregion
//#region node_modules/zod/v4/locales/zh-CN.js
var qo = () => {
	let e = {
		string: {
			unit: "字符",
			verb: "包含"
		},
		file: {
			unit: "字节",
			verb: "包含"
		},
		array: {
			unit: "项",
			verb: "包含"
		},
		set: {
			unit: "项",
			verb: "包含"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "输入",
		email: "电子邮件",
		url: "URL",
		emoji: "表情符号",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO日期时间",
		date: "ISO日期",
		time: "ISO时间",
		duration: "ISO时长",
		ipv4: "IPv4地址",
		ipv6: "IPv6地址",
		cidrv4: "IPv4网段",
		cidrv6: "IPv6网段",
		base64: "base64编码字符串",
		base64url: "base64url编码字符串",
		json_string: "JSON字符串",
		e164: "E.164号码",
		jwt: "JWT",
		template_literal: "输入"
	}, r = {
		nan: "NaN",
		number: "数字",
		array: "数组",
		null: "空值(null)"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `无效输入：期望 instanceof ${e.expected}，实际接收 ${i}` : `无效输入：期望 ${t}，实际接收 ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `无效输入：期望 ${x(e.values[0])}` : `无效选项：期望以下之一 ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `数值过大：期望 ${e.origin ?? "值"} ${n}${e.maximum.toString()} ${r.unit ?? "个元素"}` : `数值过大：期望 ${e.origin ?? "值"} ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()} ${r.unit}` : `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `无效字符串：必须以 "${t.prefix}" 开头` : t.format === "ends_with" ? `无效字符串：必须以 "${t.suffix}" 结尾` : t.format === "includes" ? `无效字符串：必须包含 "${t.includes}"` : t.format === "regex" ? `无效字符串：必须满足正则表达式 ${t.pattern}` : `无效${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `无效数字：必须是 ${e.divisor} 的倍数`;
			case "unrecognized_keys": return `出现未知的键(key): ${p(e.keys, ", ")}`;
			case "invalid_key": return `${e.origin} 中的键(key)无效`;
			case "invalid_union": return "无效输入";
			case "invalid_element": return `${e.origin} 中包含无效值(value)`;
			default: return "无效输入";
		}
	};
};
function Jo() {
	return { localeError: qo() };
}
//#endregion
//#region node_modules/zod/v4/locales/zh-TW.js
var Yo = () => {
	let e = {
		string: {
			unit: "字元",
			verb: "擁有"
		},
		file: {
			unit: "位元組",
			verb: "擁有"
		},
		array: {
			unit: "項目",
			verb: "擁有"
		},
		set: {
			unit: "項目",
			verb: "擁有"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "輸入",
		email: "郵件地址",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO 日期時間",
		date: "ISO 日期",
		time: "ISO 時間",
		duration: "ISO 期間",
		ipv4: "IPv4 位址",
		ipv6: "IPv6 位址",
		cidrv4: "IPv4 範圍",
		cidrv6: "IPv6 範圍",
		base64: "base64 編碼字串",
		base64url: "base64url 編碼字串",
		json_string: "JSON 字串",
		e164: "E.164 數值",
		jwt: "JWT",
		template_literal: "輸入"
	}, r = { nan: "NaN" };
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `無效的輸入值：預期為 instanceof ${e.expected}，但收到 ${i}` : `無效的輸入值：預期為 ${t}，但收到 ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `無效的輸入值：預期為 ${x(e.values[0])}` : `無效的選項：預期為以下其中之一 ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `數值過大：預期 ${e.origin ?? "值"} 應為 ${n}${e.maximum.toString()} ${r.unit ?? "個元素"}` : `數值過大：預期 ${e.origin ?? "值"} 應為 ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()} ${r.unit}` : `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `無效的字串：必須以 "${t.prefix}" 開頭` : t.format === "ends_with" ? `無效的字串：必須以 "${t.suffix}" 結尾` : t.format === "includes" ? `無效的字串：必須包含 "${t.includes}"` : t.format === "regex" ? `無效的字串：必須符合格式 ${t.pattern}` : `無效的 ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `無效的數字：必須為 ${e.divisor} 的倍數`;
			case "unrecognized_keys": return `無法識別的鍵值${e.keys.length > 1 ? "們" : ""}：${p(e.keys, "、")}`;
			case "invalid_key": return `${e.origin} 中有無效的鍵值`;
			case "invalid_union": return "無效的輸入值";
			case "invalid_element": return `${e.origin} 中有無效的值`;
			default: return "無效的輸入值";
		}
	};
};
function Xo() {
	return { localeError: Yo() };
}
//#endregion
//#region node_modules/zod/v4/locales/yo.js
var Zo = () => {
	let e = {
		string: {
			unit: "àmi",
			verb: "ní"
		},
		file: {
			unit: "bytes",
			verb: "ní"
		},
		array: {
			unit: "nkan",
			verb: "ní"
		},
		set: {
			unit: "nkan",
			verb: "ní"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "ẹ̀rọ ìbáwọlé",
		email: "àdírẹ́sì ìmẹ́lì",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "àkókò ISO",
		date: "ọjọ́ ISO",
		time: "àkókò ISO",
		duration: "àkókò tó pé ISO",
		ipv4: "àdírẹ́sì IPv4",
		ipv6: "àdírẹ́sì IPv6",
		cidrv4: "àgbègbè IPv4",
		cidrv6: "àgbègbè IPv6",
		base64: "ọ̀rọ̀ tí a kọ́ ní base64",
		base64url: "ọ̀rọ̀ base64url",
		json_string: "ọ̀rọ̀ JSON",
		e164: "nọ́mbà E.164",
		jwt: "JWT",
		template_literal: "ẹ̀rọ ìbáwọlé"
	}, r = {
		nan: "NaN",
		number: "nọ́mbà",
		array: "akopọ"
	};
	return (e) => {
		switch (e.code) {
			case "invalid_type": {
				let t = r[e.expected] ?? e.expected, n = w(e.input), i = r[n] ?? n;
				return /^[A-Z]/.test(e.expected) ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${e.expected}, àmọ̀ a rí ${i}` : `Ìbáwọlé aṣìṣe: a ní láti fi ${t}, àmọ̀ a rí ${i}`;
			}
			case "invalid_value": return e.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${x(e.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${p(e.values, "|")}`;
			case "too_big": {
				let n = e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${e.origin ?? "iye"} ${r.verb} ${n}${e.maximum} ${r.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${n}${e.maximum}`;
			}
			case "too_small": {
				let n = e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Kéré ju: a ní láti jẹ́ pé ${e.origin} ${r.verb} ${n}${e.minimum} ${r.unit}` : `Kéré ju: a ní láti jẹ́ ${n}${e.minimum}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${t.prefix}"` : t.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${t.suffix}"` : t.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${t.includes}"` : t.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${t.pattern}` : `Aṣìṣe: ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${e.divisor}`;
			case "unrecognized_keys": return `Bọtìnì àìmọ̀: ${p(e.keys, ", ")}`;
			case "invalid_key": return `Bọtìnì aṣìṣe nínú ${e.origin}`;
			case "invalid_union": return "Ìbáwọlé aṣìṣe";
			case "invalid_element": return `Iye aṣìṣe nínú ${e.origin}`;
			default: return "Ìbáwọlé aṣìṣe";
		}
	};
};
function Qo() {
	return { localeError: Zo() };
}
//#endregion
//#region node_modules/zod/v4/locales/index.js
var $o = /* @__PURE__ */ t({
	ar: () => $i,
	az: () => ta,
	be: () => ia,
	bg: () => oa,
	ca: () => ca,
	cs: () => ua,
	da: () => fa,
	de: () => ma,
	el: () => ga,
	en: () => va,
	eo: () => ba,
	es: () => Sa,
	fa: () => wa,
	fi: () => Ea,
	fr: () => Oa,
	frCA: () => Aa,
	he: () => Ma,
	hr: () => Pa,
	hu: () => Ia,
	hy: () => Ba,
	id: () => Ha,
	is: () => Wa,
	it: () => Ka,
	ja: () => Ja,
	ka: () => Xa,
	kh: () => $a,
	km: () => Qa,
	ko: () => to,
	lt: () => ao,
	mk: () => so,
	ms: () => lo,
	nl: () => fo,
	no: () => mo,
	ota: () => go,
	pl: () => bo,
	ps: () => vo,
	pt: () => So,
	ro: () => wo,
	ru: () => Do,
	sl: () => ko,
	sv: () => jo,
	ta: () => No,
	th: () => Fo,
	tr: () => Lo,
	ua: () => Bo,
	uk: () => zo,
	ur: () => Ho,
	uz: () => Wo,
	vi: () => Ko,
	yo: () => Qo,
	zhCN: () => Jo,
	zhTW: () => Xo
}), es, ts = Symbol("ZodOutput"), ns = Symbol("ZodInput"), rs = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function is() {
	return new rs();
}
(es = globalThis).__zod_globalRegistry ?? (es.__zod_globalRegistry = is());
var k = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function as(e, t) {
	return new e({
		type: "string",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function os(e, t) {
	return new e({
		type: "string",
		coerce: !0,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ss(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cs(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ls(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function us(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ds(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fs(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ps(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ms(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hs(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gs(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _s(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vs(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ys(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function bs(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xs(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ss(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Cs(e, t) {
	return new e({
		type: "string",
		format: "mac",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ws(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ts(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Es(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ds(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Os(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ks(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
var As = {
	Any: null,
	Minute: -1,
	Second: 0,
	Millisecond: 3,
	Microsecond: 6
};
/* @__NO_SIDE_EFFECTS__ */
function js(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ms(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ns(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ps(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fs(e, t) {
	return new e({
		type: "number",
		checks: [],
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Is(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ls(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rs(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "float32",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zs(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "float64",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bs(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "int32",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vs(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "uint32",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hs(e, t) {
	return new e({
		type: "boolean",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Us(e, t) {
	return new e({
		type: "boolean",
		coerce: !0,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ws(e, t) {
	return new e({
		type: "bigint",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gs(e, t) {
	return new e({
		type: "bigint",
		coerce: !0,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ks(e, t) {
	return new e({
		type: "bigint",
		check: "bigint_format",
		abort: !1,
		format: "int64",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qs(e, t) {
	return new e({
		type: "bigint",
		check: "bigint_format",
		abort: !1,
		format: "uint64",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Js(e, t) {
	return new e({
		type: "symbol",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ys(e, t) {
	return new e({
		type: "undefined",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xs(e, t) {
	return new e({
		type: "null",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zs(e) {
	return new e({ type: "any" });
}
/* @__NO_SIDE_EFFECTS__ */
function Qs(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function $s(e, t) {
	return new e({
		type: "never",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ec(e, t) {
	return new e({
		type: "void",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tc(e, t) {
	return new e({
		type: "date",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nc(e, t) {
	return new e({
		type: "date",
		coerce: !0,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function rc(e, t) {
	return new e({
		type: "nan",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function A(e, t) {
	return new Bn({
		check: "less_than",
		...b(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function j(e, t) {
	return new Bn({
		check: "less_than",
		...b(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function M(e, t) {
	return new Vn({
		check: "greater_than",
		...b(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function N(e, t) {
	return new Vn({
		check: "greater_than",
		...b(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ic(e) {
	return /* @__PURE__ */ M(0, e);
}
/* @__NO_SIDE_EFFECTS__ */
function ac(e) {
	return /* @__PURE__ */ A(0, e);
}
/* @__NO_SIDE_EFFECTS__ */
function oc(e) {
	return /* @__PURE__ */ j(0, e);
}
/* @__NO_SIDE_EFFECTS__ */
function sc(e) {
	return /* @__PURE__ */ N(0, e);
}
/* @__NO_SIDE_EFFECTS__ */
function P(e, t) {
	return new Hn({
		check: "multiple_of",
		...b(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function F(e, t) {
	return new Gn({
		check: "max_size",
		...b(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t) {
	return new Kn({
		check: "min_size",
		...b(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cc(e, t) {
	return new qn({
		check: "size_equals",
		...b(t),
		size: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function lc(e, t) {
	return new Jn({
		check: "max_length",
		...b(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function L(e, t) {
	return new Yn({
		check: "min_length",
		...b(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function uc(e, t) {
	return new Xn({
		check: "length_equals",
		...b(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function dc(e, t) {
	return new Qn({
		check: "string_format",
		format: "regex",
		...b(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fc(e) {
	return new $n({
		check: "string_format",
		format: "lowercase",
		...b(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pc(e) {
	return new er({
		check: "string_format",
		format: "uppercase",
		...b(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mc(e, t) {
	return new tr({
		check: "string_format",
		format: "includes",
		...b(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hc(e, t) {
	return new nr({
		check: "string_format",
		format: "starts_with",
		...b(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gc(e, t) {
	return new rr({
		check: "string_format",
		format: "ends_with",
		...b(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _c(e, t, n) {
	return new ar({
		check: "property",
		property: e,
		schema: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vc(e, t) {
	return new or({
		check: "mime_type",
		mime: e,
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function R(e) {
	return new sr({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yc(e) {
	return /* @__PURE__ */ R((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function bc() {
	return /* @__PURE__ */ R((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function xc() {
	return /* @__PURE__ */ R((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Sc() {
	return /* @__PURE__ */ R((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Cc() {
	return /* @__PURE__ */ R((e) => ge(e));
}
/* @__NO_SIDE_EFFECTS__ */
function wc(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Tc(e, t, n) {
	return new e({
		type: "union",
		options: t,
		...b(n)
	});
}
function Ec(e, t, n) {
	return new e({
		type: "union",
		options: t,
		inclusive: !1,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Dc(e, t, n, r) {
	return new e({
		type: "union",
		options: n,
		discriminator: t,
		...b(r)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Oc(e, t, n) {
	return new e({
		type: "intersection",
		left: t,
		right: n
	});
}
/* @__NO_SIDE_EFFECTS__ */
function kc(e, t, n, r) {
	let i = n instanceof D;
	return new e({
		type: "tuple",
		items: t,
		rest: i ? n : null,
		...b(i ? r : n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ac(e, t, n, r) {
	return new e({
		type: "record",
		keyType: t,
		valueType: n,
		...b(r)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function jc(e, t, n, r) {
	return new e({
		type: "map",
		keyType: t,
		valueType: n,
		...b(r)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mc(e, t, n) {
	return new e({
		type: "set",
		valueType: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Nc(e, t, n) {
	return new e({
		type: "enum",
		entries: Array.isArray(t) ? Object.fromEntries(t.map((e) => [e, e])) : t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Pc(e, t, n) {
	return new e({
		type: "enum",
		entries: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fc(e, t, n) {
	return new e({
		type: "literal",
		values: Array.isArray(t) ? t : [t],
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ic(e, t) {
	return new e({
		type: "file",
		...b(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Lc(e, t) {
	return new e({
		type: "transform",
		transform: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rc(e, t) {
	return new e({
		type: "optional",
		innerType: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zc(e, t) {
	return new e({
		type: "nullable",
		innerType: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bc(e, t, n) {
	return new e({
		type: "default",
		innerType: t,
		get defaultValue() {
			return typeof n == "function" ? n() : be(n);
		}
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vc(e, t, n) {
	return new e({
		type: "nonoptional",
		innerType: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hc(e, t) {
	return new e({
		type: "success",
		innerType: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Uc(e, t, n) {
	return new e({
		type: "catch",
		innerType: t,
		catchValue: typeof n == "function" ? n : () => n
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Wc(e, t, n) {
	return new e({
		type: "pipe",
		in: t,
		out: n
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gc(e, t) {
	return new e({
		type: "readonly",
		innerType: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Kc(e, t, n) {
	return new e({
		type: "template_literal",
		parts: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qc(e, t) {
	return new e({
		type: "lazy",
		getter: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Jc(e, t) {
	return new e({
		type: "promise",
		innerType: t
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yc(e, t, n) {
	let r = b(n);
	return r.abort ??= !0, new e({
		type: "custom",
		check: "custom",
		fn: t,
		...r
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xc(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...b(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zc(e, t) {
	let n = /* @__PURE__ */ Qc((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(Ve(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(Ve(r));
		}
	}, e(t.value, t)), t);
	return n;
}
/* @__NO_SIDE_EFFECTS__ */
function Qc(e, t) {
	let n = new E({
		check: "custom",
		...b(t)
	});
	return n._zod.check = e, n;
}
/* @__NO_SIDE_EFFECTS__ */
function $c(e) {
	let t = new E({ check: "describe" });
	return t._zod.onattach = [(t) => {
		let n = k.get(t) ?? {};
		k.add(t, {
			...n,
			description: e
		});
	}], t._zod.check = () => {}, t;
}
/* @__NO_SIDE_EFFECTS__ */
function el(e) {
	let t = new E({ check: "meta" });
	return t._zod.onattach = [(t) => {
		let n = k.get(t) ?? {};
		k.add(t, {
			...n,
			...e
		});
	}], t._zod.check = () => {}, t;
}
/* @__NO_SIDE_EFFECTS__ */
function tl(e, t) {
	let n = b(t), r = n.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	], i = n.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	n.case !== "sensitive" && (r = r.map((e) => typeof e == "string" ? e.toLowerCase() : e), i = i.map((e) => typeof e == "string" ? e.toLowerCase() : e));
	let a = new Set(r), o = new Set(i), s = e.Codec ?? Bi, c = e.Boolean ?? Vr, l = new s({
		type: "pipe",
		in: new (e.String ?? ur)({
			type: "string",
			error: n.error
		}),
		out: new c({
			type: "boolean",
			error: n.error
		}),
		transform: ((e, t) => {
			let r = e;
			return n.case !== "sensitive" && (r = r.toLowerCase()), a.has(r) ? !0 : o.has(r) ? !1 : (t.issues.push({
				code: "invalid_value",
				expected: "stringbool",
				values: [...a, ...o],
				input: t.value,
				inst: l,
				continue: !1
			}), {});
		}),
		reverseTransform: ((e, t) => e === !0 ? r[0] || "true" : i[0] || "false"),
		error: n.error
	});
	return l;
}
/* @__NO_SIDE_EFFECTS__ */
function nl(e, t, n, r = {}) {
	let i = b(r), a = {
		...b(r),
		check: "string_format",
		type: "string",
		format: t,
		fn: typeof n == "function" ? n : (e) => n.test(e),
		...i
	};
	return n instanceof RegExp && (a.pattern = n), new e(a);
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function rl(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? k,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function z(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, z(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && B(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function il(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function al(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, o[e.defId] = e.def);
	}
	e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: sl(t, "input", e.processors),
					output: sl(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function B(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return B(r.element, n);
	if (r.type === "set") return B(r.valueType, n);
	if (r.type === "lazy") return B(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return B(r.innerType, n);
	if (r.type === "intersection") return B(r.left, n) || B(r.right, n);
	if (r.type === "record" || r.type === "map") return B(r.keyType, n) || B(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : B(r.in, n) || B(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (B(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (B(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (B(e, n)) return !0;
		return !!(r.rest && B(r.rest, n));
	}
	return !1;
}
var ol = (e, t = {}) => (n) => {
	let r = rl({
		...n,
		processors: t
	});
	return z(e, r), il(r, e), al(r, e);
}, sl = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = rl({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return z(e, o), il(o, e), al(o, e);
}, cl = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, ll = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = cl[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, ul = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	typeof s == "string" && s.includes("int") ? i.type = "integer" : i.type = "number";
	let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), ee = t.target === "draft-04" || t.target === "openapi-3.0";
	d ? ee ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? ee ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (i.multipleOf = c);
}, dl = (e, t, n, r) => {
	n.type = "boolean";
}, fl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
}, pl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
}, ml = (e, t, n, r) => {
	t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
}, hl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Undefined cannot be represented in JSON Schema");
}, gl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
}, _l = (e, t, n, r) => {
	n.not = {};
}, vl = (e, t, n, r) => {}, yl = (e, t, n, r) => {}, bl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
}, xl = (e, t, n, r) => {
	let i = e._zod.def, a = re(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Sl = (e, t, n, r) => {
	let i = e._zod.def, a = [];
	for (let e of i.values) if (e === void 0) {
		if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof e == "bigint") {
		if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
		a.push(Number(e));
	} else a.push(e);
	if (a.length !== 0) if (a.length === 1) {
		let e = a[0];
		n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
	} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
}, Cl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
}, wl = (e, t, n, r) => {
	let i = n, a = e._zod.pattern;
	if (!a) throw Error("Pattern not found in template literal");
	i.type = "string", i.pattern = a.source;
}, Tl = (e, t, n, r) => {
	let i = n, a = {
		type: "string",
		format: "binary",
		contentEncoding: "binary"
	}, { minimum: o, maximum: s, mime: c } = e._zod.bag;
	o !== void 0 && (a.minLength = o), s !== void 0 && (a.maxLength = s), c ? c.length === 1 ? (a.contentMediaType = c[0], Object.assign(i, a)) : (Object.assign(i, a), i.anyOf = c.map((e) => ({ contentMediaType: e }))) : Object.assign(i, a);
}, El = (e, t, n, r) => {
	n.type = "boolean";
}, Dl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, Ol = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Function types cannot be represented in JSON Schema");
}, kl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, Al = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
}, jl = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
}, Ml = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = z(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, Nl = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = z(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	});
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e]._zod;
		return t.io === "input" ? n.optin === void 0 : n.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = z(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Pl = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => z(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Fl = (e, t, n, r) => {
	let i = e._zod.def, a = z(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = z(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, Il = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "array";
	let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => z(e, t, {
		...r,
		path: [
			...r.path,
			o,
			n
		]
	})), l = a.rest ? z(a.rest, t, {
		...r,
		path: [
			...r.path,
			s,
			...t.target === "openapi-3.0" ? [a.items.length] : []
		]
	}) : null;
	t.target === "draft-2020-12" ? (i.prefixItems = c, l && (i.items = l)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), i.minItems = c.length, l || (i.maxItems = c.length)) : (i.items = c, l && (i.additionalItems = l));
	let { minimum: u, maximum: d } = e._zod.bag;
	typeof u == "number" && (i.minItems = u), typeof d == "number" && (i.maxItems = d);
}, Ll = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = z(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) i.patternProperties[t.source] = e;
	} else (t.target === "draft-07" || t.target === "draft-2020-12") && (i.propertyNames = z(a.keyType, t, {
		...r,
		path: [...r.path, "propertyNames"]
	})), i.additionalProperties = z(a.valueType, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	});
	let c = o._zod.values;
	if (c) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e);
	}
}, Rl = (e, t, n, r) => {
	let i = e._zod.def, a = z(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, zl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Bl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Vl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, Hl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Ul = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	z(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Wl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Gl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Kl = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, ql = (e, t, n, r) => {
	let i = e._zod.innerType;
	z(i, t, r);
	let a = t.seen.get(e);
	a.ref = i;
}, Jl = {
	string: ll,
	number: ul,
	boolean: dl,
	bigint: fl,
	symbol: pl,
	null: ml,
	undefined: hl,
	void: gl,
	never: _l,
	any: vl,
	unknown: yl,
	date: bl,
	enum: xl,
	literal: Sl,
	nan: Cl,
	template_literal: wl,
	file: Tl,
	success: El,
	custom: Dl,
	function: Ol,
	transform: kl,
	map: Al,
	set: jl,
	array: Ml,
	object: Nl,
	union: Pl,
	intersection: Fl,
	tuple: Il,
	record: Ll,
	nullable: Rl,
	nonoptional: zl,
	default: Bl,
	prefault: Vl,
	catch: Hl,
	pipe: Ul,
	readonly: Wl,
	promise: Gl,
	optional: Kl,
	lazy: ql
};
function Yl(e, t) {
	if ("_idmap" in e) {
		let n = e, r = rl({
			...t,
			processors: Jl
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			z(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			il(r, n), a[t] = al(r, n);
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = rl({
		...t,
		processors: Jl
	});
	return z(e, n), il(n, e), al(n, e);
}
//#endregion
//#region node_modules/zod/v4/core/json-schema-generator.js
var Xl = class {
	get metadataRegistry() {
		return this.ctx.metadataRegistry;
	}
	get target() {
		return this.ctx.target;
	}
	get unrepresentable() {
		return this.ctx.unrepresentable;
	}
	get override() {
		return this.ctx.override;
	}
	get io() {
		return this.ctx.io;
	}
	get counter() {
		return this.ctx.counter;
	}
	set counter(e) {
		this.ctx.counter = e;
	}
	get seen() {
		return this.ctx.seen;
	}
	constructor(e) {
		let t = e?.target ?? "draft-2020-12";
		t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), this.ctx = rl({
			processors: Jl,
			target: t,
			...e?.metadata && { metadata: e.metadata },
			...e?.unrepresentable && { unrepresentable: e.unrepresentable },
			...e?.override && { override: e.override },
			...e?.io && { io: e.io }
		});
	}
	process(e, t = {
		path: [],
		schemaPath: []
	}) {
		return z(e, this.ctx, t);
	}
	emit(e, t) {
		t && (t.cycles && (this.ctx.cycles = t.cycles), t.reused && (this.ctx.reused = t.reused), t.external && (this.ctx.external = t.external)), il(this.ctx, e);
		let { "~standard": n, ...r } = al(this.ctx, e);
		return r;
	}
}, Zl = /* @__PURE__ */ t({}), Ql = /* @__PURE__ */ t({
	$ZodAny: () => qr,
	$ZodArray: () => $r,
	$ZodAsyncError: () => o,
	$ZodBase64: () => Mr,
	$ZodBase64URL: () => Pr,
	$ZodBigInt: () => Hr,
	$ZodBigIntFormat: () => Ur,
	$ZodBoolean: () => Vr,
	$ZodCIDRv4: () => kr,
	$ZodCIDRv6: () => Ar,
	$ZodCUID: () => _r,
	$ZodCUID2: () => vr,
	$ZodCatch: () => Ii,
	$ZodCheck: () => E,
	$ZodCheckBigIntFormat: () => Wn,
	$ZodCheckEndsWith: () => rr,
	$ZodCheckGreaterThan: () => Vn,
	$ZodCheckIncludes: () => tr,
	$ZodCheckLengthEquals: () => Xn,
	$ZodCheckLessThan: () => Bn,
	$ZodCheckLowerCase: () => $n,
	$ZodCheckMaxLength: () => Jn,
	$ZodCheckMaxSize: () => Gn,
	$ZodCheckMimeType: () => or,
	$ZodCheckMinLength: () => Yn,
	$ZodCheckMinSize: () => Kn,
	$ZodCheckMultipleOf: () => Hn,
	$ZodCheckNumberFormat: () => Un,
	$ZodCheckOverwrite: () => sr,
	$ZodCheckProperty: () => ar,
	$ZodCheckRegex: () => Qn,
	$ZodCheckSizeEquals: () => qn,
	$ZodCheckStartsWith: () => nr,
	$ZodCheckStringFormat: () => Zn,
	$ZodCheckUpperCase: () => er,
	$ZodCodec: () => Bi,
	$ZodCustom: () => Xi,
	$ZodCustomStringFormat: () => Rr,
	$ZodDate: () => Zr,
	$ZodDefault: () => Ai,
	$ZodDiscriminatedUnion: () => li,
	$ZodE164: () => Fr,
	$ZodEmail: () => pr,
	$ZodEmoji: () => hr,
	$ZodEncodeError: () => s,
	$ZodEnum: () => Si,
	$ZodError: () => Ze,
	$ZodExactOptional: () => Oi,
	$ZodFile: () => wi,
	$ZodFunction: () => qi,
	$ZodGUID: () => dr,
	$ZodIPv4: () => Er,
	$ZodIPv6: () => Dr,
	$ZodISODate: () => Cr,
	$ZodISODateTime: () => Sr,
	$ZodISODuration: () => Tr,
	$ZodISOTime: () => wr,
	$ZodIntersection: () => ui,
	$ZodJWT: () => Lr,
	$ZodKSUID: () => xr,
	$ZodLazy: () => Yi,
	$ZodLiteral: () => Ci,
	$ZodMAC: () => Or,
	$ZodMap: () => vi,
	$ZodNaN: () => Li,
	$ZodNanoID: () => gr,
	$ZodNever: () => Yr,
	$ZodNonOptional: () => Ni,
	$ZodNull: () => Kr,
	$ZodNullable: () => ki,
	$ZodNumber: () => zr,
	$ZodNumberFormat: () => Br,
	$ZodObject: () => ri,
	$ZodObjectJIT: () => ii,
	$ZodOptional: () => Di,
	$ZodPipe: () => Ri,
	$ZodPrefault: () => Mi,
	$ZodPreprocess: () => Ui,
	$ZodPromise: () => Ji,
	$ZodReadonly: () => Wi,
	$ZodRealError: () => T,
	$ZodRecord: () => _i,
	$ZodRegistry: () => rs,
	$ZodSet: () => bi,
	$ZodString: () => ur,
	$ZodStringFormat: () => O,
	$ZodSuccess: () => Fi,
	$ZodSymbol: () => Wr,
	$ZodTemplateLiteral: () => Ki,
	$ZodTransform: () => Ti,
	$ZodTuple: () => pi,
	$ZodType: () => D,
	$ZodULID: () => yr,
	$ZodURL: () => mr,
	$ZodUUID: () => fr,
	$ZodUndefined: () => Gr,
	$ZodUnion: () => oi,
	$ZodUnknown: () => Jr,
	$ZodVoid: () => Xr,
	$ZodXID: () => br,
	$ZodXor: () => ci,
	$brand: () => a,
	$constructor: () => i,
	$input: () => ns,
	$output: () => ts,
	Doc: () => cr,
	JSONSchema: () => Zl,
	JSONSchemaGenerator: () => Xl,
	NEVER: () => r,
	TimePrecision: () => As,
	_any: () => Zs,
	_array: () => wc,
	_base64: () => Es,
	_base64url: () => Ds,
	_bigint: () => Ws,
	_boolean: () => Hs,
	_catch: () => Uc,
	_check: () => Qc,
	_cidrv4: () => ws,
	_cidrv6: () => Ts,
	_coercedBigint: () => Gs,
	_coercedBoolean: () => Us,
	_coercedDate: () => nc,
	_coercedNumber: () => Is,
	_coercedString: () => os,
	_cuid: () => gs,
	_cuid2: () => _s,
	_custom: () => Yc,
	_date: () => tc,
	_decode: () => pt,
	_decodeAsync: () => _t,
	_default: () => Bc,
	_discriminatedUnion: () => Dc,
	_e164: () => Os,
	_email: () => ss,
	_emoji: () => ms,
	_encode: () => dt,
	_encodeAsync: () => ht,
	_endsWith: () => gc,
	_enum: () => Nc,
	_file: () => Ic,
	_float32: () => Rs,
	_float64: () => zs,
	_gt: () => M,
	_gte: () => N,
	_guid: () => cs,
	_includes: () => mc,
	_int: () => Ls,
	_int32: () => Bs,
	_int64: () => Ks,
	_intersection: () => Oc,
	_ipv4: () => xs,
	_ipv6: () => Ss,
	_isoDate: () => Ms,
	_isoDateTime: () => js,
	_isoDuration: () => Ps,
	_isoTime: () => Ns,
	_jwt: () => ks,
	_ksuid: () => bs,
	_lazy: () => qc,
	_length: () => uc,
	_literal: () => Fc,
	_lowercase: () => fc,
	_lt: () => A,
	_lte: () => j,
	_mac: () => Cs,
	_map: () => jc,
	_max: () => j,
	_maxLength: () => lc,
	_maxSize: () => F,
	_mime: () => vc,
	_min: () => N,
	_minLength: () => L,
	_minSize: () => I,
	_multipleOf: () => P,
	_nan: () => rc,
	_nanoid: () => hs,
	_nativeEnum: () => Pc,
	_negative: () => ac,
	_never: () => $s,
	_nonnegative: () => sc,
	_nonoptional: () => Vc,
	_nonpositive: () => oc,
	_normalize: () => yc,
	_null: () => Xs,
	_nullable: () => zc,
	_number: () => Fs,
	_optional: () => Rc,
	_overwrite: () => R,
	_parse: () => rt,
	_parseAsync: () => at,
	_pipe: () => Wc,
	_positive: () => ic,
	_promise: () => Jc,
	_property: () => _c,
	_readonly: () => Gc,
	_record: () => Ac,
	_refine: () => Xc,
	_regex: () => dc,
	_safeDecode: () => xt,
	_safeDecodeAsync: () => Tt,
	_safeEncode: () => yt,
	_safeEncodeAsync: () => Ct,
	_safeParse: () => st,
	_safeParseAsync: () => lt,
	_set: () => Mc,
	_size: () => cc,
	_slugify: () => Cc,
	_startsWith: () => hc,
	_string: () => as,
	_stringFormat: () => nl,
	_stringbool: () => tl,
	_success: () => Hc,
	_superRefine: () => Zc,
	_symbol: () => Js,
	_templateLiteral: () => Kc,
	_toLowerCase: () => xc,
	_toUpperCase: () => Sc,
	_transform: () => Lc,
	_trim: () => bc,
	_tuple: () => kc,
	_uint32: () => Vs,
	_uint64: () => qs,
	_ulid: () => vs,
	_undefined: () => Ys,
	_union: () => Tc,
	_unknown: () => Qs,
	_uppercase: () => pc,
	_url: () => ps,
	_uuid: () => ls,
	_uuidv4: () => us,
	_uuidv6: () => ds,
	_uuidv7: () => fs,
	_void: () => ec,
	_xid: () => ys,
	_xor: () => Ec,
	clone: () => y,
	config: () => l,
	createStandardJSONSchemaMethod: () => sl,
	createToJSONSchemaMethod: () => ol,
	decode: () => mt,
	decodeAsync: () => vt,
	describe: () => $c,
	encode: () => ft,
	encodeAsync: () => gt,
	extractDefs: () => il,
	finalize: () => al,
	flattenError: () => Qe,
	formatError: () => $e,
	globalConfig: () => c,
	globalRegistry: () => k,
	initializeContext: () => rl,
	isValidBase64: () => jr,
	isValidBase64URL: () => Nr,
	isValidJWT: () => Ir,
	locales: () => $o,
	meta: () => el,
	parse: () => it,
	parseAsync: () => ot,
	prettifyError: () => nt,
	process: () => z,
	regexes: () => Dt,
	registry: () => is,
	safeDecode: () => St,
	safeDecodeAsync: () => Et,
	safeEncode: () => bt,
	safeEncodeAsync: () => wt,
	safeParse: () => ct,
	safeParseAsync: () => ut,
	toDotPath: () => tt,
	toJSONSchema: () => Yl,
	treeifyError: () => et,
	util: () => u,
	version: () => lr
}), $l = /* @__PURE__ */ t({
	endsWith: () => gc,
	gt: () => M,
	gte: () => N,
	includes: () => mc,
	length: () => uc,
	lowercase: () => fc,
	lt: () => A,
	lte: () => j,
	maxLength: () => lc,
	maxSize: () => F,
	mime: () => vc,
	minLength: () => L,
	minSize: () => I,
	multipleOf: () => P,
	negative: () => ac,
	nonnegative: () => sc,
	nonpositive: () => oc,
	normalize: () => yc,
	overwrite: () => R,
	positive: () => ic,
	property: () => _c,
	regex: () => dc,
	size: () => cc,
	slugify: () => Cc,
	startsWith: () => hc,
	toLowerCase: () => xc,
	toUpperCase: () => Sc,
	trim: () => bc,
	uppercase: () => pc
}), eu = /* @__PURE__ */ t({
	ZodISODate: () => ru,
	ZodISODateTime: () => tu,
	ZodISODuration: () => su,
	ZodISOTime: () => au,
	date: () => iu,
	datetime: () => nu,
	duration: () => cu,
	time: () => ou
}), tu = /* @__PURE__ */ i("ZodISODateTime", (e, t) => {
	Sr.init(e, t), W.init(e, t);
});
function nu(e) {
	return /* @__PURE__ */ js(tu, e);
}
var ru = /* @__PURE__ */ i("ZodISODate", (e, t) => {
	Cr.init(e, t), W.init(e, t);
});
function iu(e) {
	return /* @__PURE__ */ Ms(ru, e);
}
var au = /* @__PURE__ */ i("ZodISOTime", (e, t) => {
	wr.init(e, t), W.init(e, t);
});
function ou(e) {
	return /* @__PURE__ */ Ns(au, e);
}
var su = /* @__PURE__ */ i("ZodISODuration", (e, t) => {
	Tr.init(e, t), W.init(e, t);
});
function cu(e) {
	return /* @__PURE__ */ Ps(su, e);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var lu = (e, t) => {
	Ze.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => $e(e, t) },
		flatten: { value: (t) => Qe(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, ie, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, ie, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
}, uu = /* @__PURE__ */ i("ZodError", lu), V = /* @__PURE__ */ i("ZodError", lu, { Parent: Error }), du = /* @__PURE__ */ rt(V), fu = /* @__PURE__ */ at(V), pu = /* @__PURE__ */ st(V), mu = /* @__PURE__ */ lt(V), hu = /* @__PURE__ */ dt(V), gu = /* @__PURE__ */ pt(V), _u = /* @__PURE__ */ ht(V), vu = /* @__PURE__ */ _t(V), yu = /* @__PURE__ */ yt(V), bu = /* @__PURE__ */ xt(V), xu = /* @__PURE__ */ Ct(V), Su = /* @__PURE__ */ Tt(V), Cu = /* @__PURE__ */ t({
	ZodAny: () => Vd,
	ZodArray: () => Xd,
	ZodBase64: () => ld,
	ZodBase64URL: () => dd,
	ZodBigInt: () => Ad,
	ZodBigIntFormat: () => Md,
	ZodBoolean: () => Od,
	ZodCIDRv4: () => ad,
	ZodCIDRv6: () => sd,
	ZodCUID: () => Uu,
	ZodCUID2: () => Gu,
	ZodCatch: () => Wf,
	ZodCodec: () => Xf,
	ZodCustom: () => lp,
	ZodCustomStringFormat: () => K,
	ZodDate: () => Jd,
	ZodDefault: () => If,
	ZodDiscriminatedUnion: () => of,
	ZodE164: () => pd,
	ZodEmail: () => Ou,
	ZodEmoji: () => zu,
	ZodEnum: () => bf,
	ZodExactOptional: () => jf,
	ZodFile: () => Tf,
	ZodFunction: () => cp,
	ZodGUID: () => Au,
	ZodIPv4: () => $u,
	ZodIPv6: () => rd,
	ZodIntersection: () => cf,
	ZodJWT: () => hd,
	ZodKSUID: () => Zu,
	ZodLazy: () => ip,
	ZodLiteral: () => Cf,
	ZodMAC: () => td,
	ZodMap: () => gf,
	ZodNaN: () => Kf,
	ZodNanoID: () => Vu,
	ZodNever: () => Wd,
	ZodNonOptional: () => Bf,
	ZodNull: () => zd,
	ZodNullable: () => Nf,
	ZodNumber: () => xd,
	ZodNumberFormat: () => q,
	ZodObject: () => Qd,
	ZodOptional: () => kf,
	ZodPipe: () => Jf,
	ZodPrefault: () => Rf,
	ZodPreprocess: () => $f,
	ZodPromise: () => op,
	ZodReadonly: () => ep,
	ZodRecord: () => ff,
	ZodSet: () => vf,
	ZodString: () => Du,
	ZodStringFormat: () => W,
	ZodSuccess: () => Hf,
	ZodSymbol: () => Fd,
	ZodTemplateLiteral: () => np,
	ZodTransform: () => Df,
	ZodTuple: () => uf,
	ZodType: () => H,
	ZodULID: () => qu,
	ZodURL: () => Iu,
	ZodUUID: () => G,
	ZodUndefined: () => Ld,
	ZodUnion: () => tf,
	ZodUnknown: () => Ud,
	ZodVoid: () => Kd,
	ZodXID: () => Yu,
	ZodXor: () => rf,
	_ZodString: () => Eu,
	_default: () => Lf,
	_function: () => Z,
	any: () => Hd,
	array: () => Y,
	base64: () => ud,
	base64url: () => fd,
	bigint: () => jd,
	boolean: () => kd,
	catch: () => Gf,
	check: () => up,
	cidrv4: () => od,
	cidrv6: () => cd,
	codec: () => Zf,
	cuid: () => Wu,
	cuid2: () => Ku,
	custom: () => dp,
	date: () => Yd,
	describe: () => mp,
	discriminatedUnion: () => sf,
	e164: () => md,
	email: () => ku,
	emoji: () => Bu,
	enum: () => xf,
	exactOptional: () => Mf,
	file: () => Ef,
	float32: () => wd,
	float64: () => Td,
	function: () => Z,
	guid: () => ju,
	hash: () => bd,
	hex: () => yd,
	hostname: () => vd,
	httpUrl: () => Ru,
	instanceof: () => gp,
	int: () => Cd,
	int32: () => Ed,
	int64: () => Nd,
	intersection: () => lf,
	invertCodec: () => Qf,
	ipv4: () => ed,
	ipv6: () => id,
	json: () => vp,
	jwt: () => gd,
	keyof: () => Zd,
	ksuid: () => Qu,
	lazy: () => ap,
	literal: () => wf,
	looseObject: () => ef,
	looseRecord: () => hf,
	mac: () => nd,
	map: () => _f,
	meta: () => hp,
	nan: () => qf,
	nanoid: () => Hu,
	nativeEnum: () => Sf,
	never: () => Gd,
	nonoptional: () => Vf,
	null: () => Bd,
	nullable: () => Pf,
	nullish: () => Ff,
	number: () => Sd,
	object: () => X,
	optional: () => Af,
	partialRecord: () => mf,
	pipe: () => Yf,
	prefault: () => zf,
	preprocess: () => yp,
	promise: () => sp,
	readonly: () => tp,
	record: () => pf,
	refine: () => fp,
	set: () => yf,
	strictObject: () => $d,
	string: () => U,
	stringFormat: () => _d,
	stringbool: () => _p,
	success: () => Uf,
	superRefine: () => pp,
	symbol: () => Id,
	templateLiteral: () => rp,
	transform: () => Of,
	tuple: () => df,
	uint32: () => Dd,
	uint64: () => Pd,
	ulid: () => Ju,
	undefined: () => Rd,
	union: () => nf,
	unknown: () => J,
	url: () => Lu,
	uuid: () => Mu,
	uuidv4: () => Nu,
	uuidv6: () => Pu,
	uuidv7: () => Fu,
	void: () => qd,
	xid: () => Xu,
	xor: () => af
}), wu = /* @__PURE__ */ new WeakMap();
function Tu(e, t, n) {
	let r = Object.getPrototypeOf(e), i = wu.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), wu.set(r, i)), !i.has(t)) {
		i.add(t);
		for (let e in n) {
			let t = n[e];
			Object.defineProperty(r, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					let n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
var H = /* @__PURE__ */ i("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: sl(e, "input"),
	output: sl(e, "output")
} }), e.toJSONSchema = ol(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => du(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => pu(e, t, n), e.parseAsync = async (t, n) => fu(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => mu(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => hu(e, t, n), e.decode = (t, n) => gu(e, t, n), e.encodeAsync = async (t, n) => _u(e, t, n), e.decodeAsync = async (t, n) => vu(e, t, n), e.safeEncode = (t, n) => yu(e, t, n), e.safeDecode = (t, n) => bu(e, t, n), e.safeEncodeAsync = async (t, n) => xu(e, t, n), e.safeDecodeAsync = async (t, n) => Su(e, t, n), Tu(e, "ZodType", {
	check(...e) {
		let t = this.def;
		return this.clone(g(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return y(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(fp(e, t));
	},
	superRefine(e, t) {
		return this.check(pp(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ R(e));
	},
	optional() {
		return Af(this);
	},
	exactOptional() {
		return Mf(this);
	},
	nullable() {
		return Pf(this);
	},
	nullish() {
		return Af(Pf(this));
	},
	nonoptional(e) {
		return Vf(this, e);
	},
	array() {
		return Y(this);
	},
	or(e) {
		return nf([this, e]);
	},
	and(e) {
		return lf(this, e);
	},
	transform(e) {
		return Yf(this, Of(e));
	},
	default(e) {
		return Lf(this, e);
	},
	prefault(e) {
		return zf(this, e);
	},
	catch(e) {
		return Gf(this, e);
	},
	pipe(e) {
		return Yf(this, e);
	},
	readonly() {
		return tp(this);
	},
	describe(e) {
		let t = this.clone();
		return k.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return k.get(this);
		let t = this.clone();
		return k.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get() {
		return k.get(e)?.description;
	},
	configurable: !0
}), e)), Eu = /* @__PURE__ */ i("_ZodString", (e, t) => {
	ur.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ll(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Tu(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ dc(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ mc(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ hc(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ gc(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ L(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ lc(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ uc(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ L(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ fc(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ pc(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ bc());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ yc(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ xc());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ Sc());
		},
		slugify() {
			return this.check(/* @__PURE__ */ Cc());
		}
	});
}), Du = /* @__PURE__ */ i("ZodString", (e, t) => {
	ur.init(e, t), Eu.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ ss(Ou, t)), e.url = (t) => e.check(/* @__PURE__ */ ps(Iu, t)), e.jwt = (t) => e.check(/* @__PURE__ */ ks(hd, t)), e.emoji = (t) => e.check(/* @__PURE__ */ ms(zu, t)), e.guid = (t) => e.check(/* @__PURE__ */ cs(Au, t)), e.uuid = (t) => e.check(/* @__PURE__ */ ls(G, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ us(G, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ ds(G, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ fs(G, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ hs(Vu, t)), e.guid = (t) => e.check(/* @__PURE__ */ cs(Au, t)), e.cuid = (t) => e.check(/* @__PURE__ */ gs(Uu, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ _s(Gu, t)), e.ulid = (t) => e.check(/* @__PURE__ */ vs(qu, t)), e.base64 = (t) => e.check(/* @__PURE__ */ Es(ld, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Ds(dd, t)), e.xid = (t) => e.check(/* @__PURE__ */ ys(Yu, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ bs(Zu, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ xs($u, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ Ss(rd, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ ws(ad, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ Ts(sd, t)), e.e164 = (t) => e.check(/* @__PURE__ */ Os(pd, t)), e.datetime = (t) => e.check(nu(t)), e.date = (t) => e.check(iu(t)), e.time = (t) => e.check(ou(t)), e.duration = (t) => e.check(cu(t));
});
function U(e) {
	return /* @__PURE__ */ as(Du, e);
}
var W = /* @__PURE__ */ i("ZodStringFormat", (e, t) => {
	O.init(e, t), Eu.init(e, t);
}), Ou = /* @__PURE__ */ i("ZodEmail", (e, t) => {
	pr.init(e, t), W.init(e, t);
});
function ku(e) {
	return /* @__PURE__ */ ss(Ou, e);
}
var Au = /* @__PURE__ */ i("ZodGUID", (e, t) => {
	dr.init(e, t), W.init(e, t);
});
function ju(e) {
	return /* @__PURE__ */ cs(Au, e);
}
var G = /* @__PURE__ */ i("ZodUUID", (e, t) => {
	fr.init(e, t), W.init(e, t);
});
function Mu(e) {
	return /* @__PURE__ */ ls(G, e);
}
function Nu(e) {
	return /* @__PURE__ */ us(G, e);
}
function Pu(e) {
	return /* @__PURE__ */ ds(G, e);
}
function Fu(e) {
	return /* @__PURE__ */ fs(G, e);
}
var Iu = /* @__PURE__ */ i("ZodURL", (e, t) => {
	mr.init(e, t), W.init(e, t);
});
function Lu(e) {
	return /* @__PURE__ */ ps(Iu, e);
}
function Ru(e) {
	return /* @__PURE__ */ ps(Iu, {
		protocol: an,
		hostname: rn,
		...b(e)
	});
}
var zu = /* @__PURE__ */ i("ZodEmoji", (e, t) => {
	hr.init(e, t), W.init(e, t);
});
function Bu(e) {
	return /* @__PURE__ */ ms(zu, e);
}
var Vu = /* @__PURE__ */ i("ZodNanoID", (e, t) => {
	gr.init(e, t), W.init(e, t);
});
function Hu(e) {
	return /* @__PURE__ */ hs(Vu, e);
}
var Uu = /* @__PURE__ */ i("ZodCUID", (e, t) => {
	_r.init(e, t), W.init(e, t);
});
function Wu(e) {
	return /* @__PURE__ */ gs(Uu, e);
}
var Gu = /* @__PURE__ */ i("ZodCUID2", (e, t) => {
	vr.init(e, t), W.init(e, t);
});
function Ku(e) {
	return /* @__PURE__ */ _s(Gu, e);
}
var qu = /* @__PURE__ */ i("ZodULID", (e, t) => {
	yr.init(e, t), W.init(e, t);
});
function Ju(e) {
	return /* @__PURE__ */ vs(qu, e);
}
var Yu = /* @__PURE__ */ i("ZodXID", (e, t) => {
	br.init(e, t), W.init(e, t);
});
function Xu(e) {
	return /* @__PURE__ */ ys(Yu, e);
}
var Zu = /* @__PURE__ */ i("ZodKSUID", (e, t) => {
	xr.init(e, t), W.init(e, t);
});
function Qu(e) {
	return /* @__PURE__ */ bs(Zu, e);
}
var $u = /* @__PURE__ */ i("ZodIPv4", (e, t) => {
	Er.init(e, t), W.init(e, t);
});
function ed(e) {
	return /* @__PURE__ */ xs($u, e);
}
var td = /* @__PURE__ */ i("ZodMAC", (e, t) => {
	Or.init(e, t), W.init(e, t);
});
function nd(e) {
	return /* @__PURE__ */ Cs(td, e);
}
var rd = /* @__PURE__ */ i("ZodIPv6", (e, t) => {
	Dr.init(e, t), W.init(e, t);
});
function id(e) {
	return /* @__PURE__ */ Ss(rd, e);
}
var ad = /* @__PURE__ */ i("ZodCIDRv4", (e, t) => {
	kr.init(e, t), W.init(e, t);
});
function od(e) {
	return /* @__PURE__ */ ws(ad, e);
}
var sd = /* @__PURE__ */ i("ZodCIDRv6", (e, t) => {
	Ar.init(e, t), W.init(e, t);
});
function cd(e) {
	return /* @__PURE__ */ Ts(sd, e);
}
var ld = /* @__PURE__ */ i("ZodBase64", (e, t) => {
	Mr.init(e, t), W.init(e, t);
});
function ud(e) {
	return /* @__PURE__ */ Es(ld, e);
}
var dd = /* @__PURE__ */ i("ZodBase64URL", (e, t) => {
	Pr.init(e, t), W.init(e, t);
});
function fd(e) {
	return /* @__PURE__ */ Ds(dd, e);
}
var pd = /* @__PURE__ */ i("ZodE164", (e, t) => {
	Fr.init(e, t), W.init(e, t);
});
function md(e) {
	return /* @__PURE__ */ Os(pd, e);
}
var hd = /* @__PURE__ */ i("ZodJWT", (e, t) => {
	Lr.init(e, t), W.init(e, t);
});
function gd(e) {
	return /* @__PURE__ */ ks(hd, e);
}
var K = /* @__PURE__ */ i("ZodCustomStringFormat", (e, t) => {
	Rr.init(e, t), W.init(e, t);
});
function _d(e, t, n = {}) {
	return /* @__PURE__ */ nl(K, e, t, n);
}
function vd(e) {
	return /* @__PURE__ */ nl(K, "hostname", nn, e);
}
function yd(e) {
	return /* @__PURE__ */ nl(K, "hex", xn, e);
}
function bd(e, t) {
	let n = `${e}_${t?.enc ?? "hex"}`, r = Dt[n];
	if (!r) throw Error(`Unrecognized hash format: ${n}`);
	return /* @__PURE__ */ nl(K, n, r, t);
}
var xd = /* @__PURE__ */ i("ZodNumber", (e, t) => {
	zr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ul(e, t, n, r), Tu(e, "ZodNumber", {
		gt(e, t) {
			return this.check(/* @__PURE__ */ M(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ N(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ N(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ A(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ j(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ j(e, t));
		},
		int(e) {
			return this.check(Cd(e));
		},
		safe(e) {
			return this.check(Cd(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ M(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ N(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ A(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ j(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ P(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ P(e, t));
		},
		finite() {
			return this;
		}
	});
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function Sd(e) {
	return /* @__PURE__ */ Fs(xd, e);
}
var q = /* @__PURE__ */ i("ZodNumberFormat", (e, t) => {
	Br.init(e, t), xd.init(e, t);
});
function Cd(e) {
	return /* @__PURE__ */ Ls(q, e);
}
function wd(e) {
	return /* @__PURE__ */ Rs(q, e);
}
function Td(e) {
	return /* @__PURE__ */ zs(q, e);
}
function Ed(e) {
	return /* @__PURE__ */ Bs(q, e);
}
function Dd(e) {
	return /* @__PURE__ */ Vs(q, e);
}
var Od = /* @__PURE__ */ i("ZodBoolean", (e, t) => {
	Vr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => dl(e, t, n, r);
});
function kd(e) {
	return /* @__PURE__ */ Hs(Od, e);
}
var Ad = /* @__PURE__ */ i("ZodBigInt", (e, t) => {
	Hr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => fl(e, t, n, r), e.gte = (t, n) => e.check(/* @__PURE__ */ N(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ N(t, n)), e.gt = (t, n) => e.check(/* @__PURE__ */ M(t, n)), e.gte = (t, n) => e.check(/* @__PURE__ */ N(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ N(t, n)), e.lt = (t, n) => e.check(/* @__PURE__ */ A(t, n)), e.lte = (t, n) => e.check(/* @__PURE__ */ j(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ j(t, n)), e.positive = (t) => e.check(/* @__PURE__ */ M(BigInt(0), t)), e.negative = (t) => e.check(/* @__PURE__ */ A(BigInt(0), t)), e.nonpositive = (t) => e.check(/* @__PURE__ */ j(BigInt(0), t)), e.nonnegative = (t) => e.check(/* @__PURE__ */ N(BigInt(0), t)), e.multipleOf = (t, n) => e.check(/* @__PURE__ */ P(t, n));
	let n = e._zod.bag;
	e.minValue = n.minimum ?? null, e.maxValue = n.maximum ?? null, e.format = n.format ?? null;
});
function jd(e) {
	return /* @__PURE__ */ Ws(Ad, e);
}
var Md = /* @__PURE__ */ i("ZodBigIntFormat", (e, t) => {
	Ur.init(e, t), Ad.init(e, t);
});
function Nd(e) {
	return /* @__PURE__ */ Ks(Md, e);
}
function Pd(e) {
	return /* @__PURE__ */ qs(Md, e);
}
var Fd = /* @__PURE__ */ i("ZodSymbol", (e, t) => {
	Wr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => pl(e, t, n, r);
});
function Id(e) {
	return /* @__PURE__ */ Js(Fd, e);
}
var Ld = /* @__PURE__ */ i("ZodUndefined", (e, t) => {
	Gr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => hl(e, t, n, r);
});
function Rd(e) {
	return /* @__PURE__ */ Ys(Ld, e);
}
var zd = /* @__PURE__ */ i("ZodNull", (e, t) => {
	Kr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ml(e, t, n, r);
});
function Bd(e) {
	return /* @__PURE__ */ Xs(zd, e);
}
var Vd = /* @__PURE__ */ i("ZodAny", (e, t) => {
	qr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Hd() {
	return /* @__PURE__ */ Zs(Vd);
}
var Ud = /* @__PURE__ */ i("ZodUnknown", (e, t) => {
	Jr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function J() {
	return /* @__PURE__ */ Qs(Ud);
}
var Wd = /* @__PURE__ */ i("ZodNever", (e, t) => {
	Yr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => _l(e, t, n, r);
});
function Gd(e) {
	return /* @__PURE__ */ $s(Wd, e);
}
var Kd = /* @__PURE__ */ i("ZodVoid", (e, t) => {
	Xr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => gl(e, t, n, r);
});
function qd(e) {
	return /* @__PURE__ */ ec(Kd, e);
}
var Jd = /* @__PURE__ */ i("ZodDate", (e, t) => {
	Zr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => bl(e, t, n, r), e.min = (t, n) => e.check(/* @__PURE__ */ N(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ j(t, n));
	let n = e._zod.bag;
	e.minDate = n.minimum ? new Date(n.minimum) : null, e.maxDate = n.maximum ? new Date(n.maximum) : null;
});
function Yd(e) {
	return /* @__PURE__ */ tc(Jd, e);
}
var Xd = /* @__PURE__ */ i("ZodArray", (e, t) => {
	$r.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ml(e, t, n, r), e.element = t.element, Tu(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ L(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ L(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ lc(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ uc(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Y(e, t) {
	return /* @__PURE__ */ wc(Xd, e, t);
}
function Zd(e) {
	let t = e._zod.def.shape;
	return xf(Object.keys(t));
}
var Qd = /* @__PURE__ */ i("ZodObject", (e, t) => {
	ii.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Nl(e, t, n, r), m(e, "shape", () => t.shape), Tu(e, "ZodObject", {
		keyof() {
			return xf(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: J()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: J()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: Gd()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return je(this, e);
		},
		safeExtend(e) {
			return Me(this, e);
		},
		merge(e) {
			return Ne(this, e);
		},
		pick(e) {
			return ke(this, e);
		},
		omit(e) {
			return Ae(this, e);
		},
		partial(...e) {
			return Pe(kf, this, e[0]);
		},
		required(...e) {
			return Fe(Bf, this, e[0]);
		}
	});
});
function X(e, t) {
	return new Qd({
		type: "object",
		shape: e ?? {},
		...b(t)
	});
}
function $d(e, t) {
	return new Qd({
		type: "object",
		shape: e,
		catchall: Gd(),
		...b(t)
	});
}
function ef(e, t) {
	return new Qd({
		type: "object",
		shape: e,
		catchall: J(),
		...b(t)
	});
}
var tf = /* @__PURE__ */ i("ZodUnion", (e, t) => {
	oi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pl(e, t, n, r), e.options = t.options;
});
function nf(e, t) {
	return new tf({
		type: "union",
		options: e,
		...b(t)
	});
}
var rf = /* @__PURE__ */ i("ZodXor", (e, t) => {
	tf.init(e, t), ci.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pl(e, t, n, r), e.options = t.options;
});
function af(e, t) {
	return new rf({
		type: "union",
		options: e,
		inclusive: !1,
		...b(t)
	});
}
var of = /* @__PURE__ */ i("ZodDiscriminatedUnion", (e, t) => {
	tf.init(e, t), li.init(e, t);
});
function sf(e, t, n) {
	return new of({
		type: "union",
		options: t,
		discriminator: e,
		...b(n)
	});
}
var cf = /* @__PURE__ */ i("ZodIntersection", (e, t) => {
	ui.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fl(e, t, n, r);
});
function lf(e, t) {
	return new cf({
		type: "intersection",
		left: e,
		right: t
	});
}
var uf = /* @__PURE__ */ i("ZodTuple", (e, t) => {
	pi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Il(e, t, n, r), e.rest = (t) => e.clone({
		...e._zod.def,
		rest: t
	});
});
function df(e, t, n) {
	let r = t instanceof D;
	return new uf({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...b(r ? n : t)
	});
}
var ff = /* @__PURE__ */ i("ZodRecord", (e, t) => {
	_i.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ll(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function pf(e, t, n) {
	return !t || !t._zod ? new ff({
		type: "record",
		keyType: U(),
		valueType: e,
		...b(t)
	}) : new ff({
		type: "record",
		keyType: e,
		valueType: t,
		...b(n)
	});
}
function mf(e, t, n) {
	let r = y(e);
	return r._zod.values = void 0, new ff({
		type: "record",
		keyType: r,
		valueType: t,
		...b(n)
	});
}
function hf(e, t, n) {
	return new ff({
		type: "record",
		keyType: e,
		valueType: t,
		mode: "loose",
		...b(n)
	});
}
var gf = /* @__PURE__ */ i("ZodMap", (e, t) => {
	vi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Al(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...t) => e.check(/* @__PURE__ */ I(...t)), e.nonempty = (t) => e.check(/* @__PURE__ */ I(1, t)), e.max = (...t) => e.check(/* @__PURE__ */ F(...t)), e.size = (...t) => e.check(/* @__PURE__ */ cc(...t));
});
function _f(e, t, n) {
	return new gf({
		type: "map",
		keyType: e,
		valueType: t,
		...b(n)
	});
}
var vf = /* @__PURE__ */ i("ZodSet", (e, t) => {
	bi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => jl(e, t, n, r), e.min = (...t) => e.check(/* @__PURE__ */ I(...t)), e.nonempty = (t) => e.check(/* @__PURE__ */ I(1, t)), e.max = (...t) => e.check(/* @__PURE__ */ F(...t)), e.size = (...t) => e.check(/* @__PURE__ */ cc(...t));
});
function yf(e, t) {
	return new vf({
		type: "set",
		valueType: e,
		...b(t)
	});
}
var bf = /* @__PURE__ */ i("ZodEnum", (e, t) => {
	Si.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => xl(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new bf({
			...t,
			checks: [],
			...b(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new bf({
			...t,
			checks: [],
			...b(r),
			entries: i
		});
	};
});
function xf(e, t) {
	return new bf({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...b(t)
	});
}
function Sf(e, t) {
	return new bf({
		type: "enum",
		entries: e,
		...b(t)
	});
}
var Cf = /* @__PURE__ */ i("ZodLiteral", (e, t) => {
	Ci.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Sl(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function wf(e, t) {
	return new Cf({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...b(t)
	});
}
var Tf = /* @__PURE__ */ i("ZodFile", (e, t) => {
	wi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Tl(e, t, n, r), e.min = (t, n) => e.check(/* @__PURE__ */ I(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ F(t, n)), e.mime = (t, n) => e.check(/* @__PURE__ */ vc(Array.isArray(t) ? t : [t], n));
});
function Ef(e) {
	return /* @__PURE__ */ Ic(Tf, e);
}
var Df = /* @__PURE__ */ i("ZodTransform", (e, t) => {
	Ti.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => kl(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new s(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(Ve(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(Ve(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
});
function Of(e) {
	return new Df({
		type: "transform",
		transform: e
	});
}
var kf = /* @__PURE__ */ i("ZodOptional", (e, t) => {
	Di.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Af(e) {
	return new kf({
		type: "optional",
		innerType: e
	});
}
var jf = /* @__PURE__ */ i("ZodExactOptional", (e, t) => {
	Oi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Mf(e) {
	return new jf({
		type: "optional",
		innerType: e
	});
}
var Nf = /* @__PURE__ */ i("ZodNullable", (e, t) => {
	ki.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Pf(e) {
	return new Nf({
		type: "nullable",
		innerType: e
	});
}
function Ff(e) {
	return Af(Pf(e));
}
var If = /* @__PURE__ */ i("ZodDefault", (e, t) => {
	Ai.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Bl(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Lf(e, t) {
	return new If({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : be(t);
		}
	});
}
var Rf = /* @__PURE__ */ i("ZodPrefault", (e, t) => {
	Mi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function zf(e, t) {
	return new Rf({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : be(t);
		}
	});
}
var Bf = /* @__PURE__ */ i("ZodNonOptional", (e, t) => {
	Ni.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => zl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Vf(e, t) {
	return new Bf({
		type: "nonoptional",
		innerType: e,
		...b(t)
	});
}
var Hf = /* @__PURE__ */ i("ZodSuccess", (e, t) => {
	Fi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => El(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Uf(e) {
	return new Hf({
		type: "success",
		innerType: e
	});
}
var Wf = /* @__PURE__ */ i("ZodCatch", (e, t) => {
	Ii.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hl(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Gf(e, t) {
	return new Wf({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Kf = /* @__PURE__ */ i("ZodNaN", (e, t) => {
	Li.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cl(e, t, n, r);
});
function qf(e) {
	return /* @__PURE__ */ rc(Kf, e);
}
var Jf = /* @__PURE__ */ i("ZodPipe", (e, t) => {
	Ri.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ul(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Yf(e, t) {
	return new Jf({
		type: "pipe",
		in: e,
		out: t
	});
}
var Xf = /* @__PURE__ */ i("ZodCodec", (e, t) => {
	Jf.init(e, t), Bi.init(e, t);
});
function Zf(e, t, n) {
	return new Xf({
		type: "pipe",
		in: e,
		out: t,
		transform: n.decode,
		reverseTransform: n.encode
	});
}
function Qf(e) {
	let t = e._zod.def;
	return new Xf({
		type: "pipe",
		in: t.out,
		out: t.in,
		transform: t.reverseTransform,
		reverseTransform: t.transform
	});
}
var $f = /* @__PURE__ */ i("ZodPreprocess", (e, t) => {
	Jf.init(e, t), Ui.init(e, t);
}), ep = /* @__PURE__ */ i("ZodReadonly", (e, t) => {
	Wi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function tp(e) {
	return new ep({
		type: "readonly",
		innerType: e
	});
}
var np = /* @__PURE__ */ i("ZodTemplateLiteral", (e, t) => {
	Ki.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => wl(e, t, n, r);
});
function rp(e, t) {
	return new np({
		type: "template_literal",
		parts: e,
		...b(t)
	});
}
var ip = /* @__PURE__ */ i("ZodLazy", (e, t) => {
	Yi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ql(e, t, n, r), e.unwrap = () => e._zod.def.getter();
});
function ap(e) {
	return new ip({
		type: "lazy",
		getter: e
	});
}
var op = /* @__PURE__ */ i("ZodPromise", (e, t) => {
	Ji.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Gl(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function sp(e) {
	return new op({
		type: "promise",
		innerType: e
	});
}
var cp = /* @__PURE__ */ i("ZodFunction", (e, t) => {
	qi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ol(e, t, n, r);
});
function Z(e) {
	return new cp({
		type: "function",
		input: Array.isArray(e?.input) ? df(e?.input) : e?.input ?? Y(J()),
		output: e?.output ?? J()
	});
}
var lp = /* @__PURE__ */ i("ZodCustom", (e, t) => {
	Xi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Dl(e, t, n, r);
});
function up(e) {
	let t = new E({ check: "custom" });
	return t._zod.check = e, t;
}
function dp(e, t) {
	return /* @__PURE__ */ Yc(lp, e ?? (() => !0), t);
}
function fp(e, t = {}) {
	return /* @__PURE__ */ Xc(lp, e, t);
}
function pp(e, t) {
	return /* @__PURE__ */ Zc(e, t);
}
var mp = $c, hp = el;
function gp(e, t = {}) {
	let n = new lp({
		type: "custom",
		check: "custom",
		fn: (t) => t instanceof e,
		abort: !0,
		...b(t)
	});
	return n._zod.bag.Class = e, n._zod.check = (t) => {
		t.value instanceof e || t.issues.push({
			code: "invalid_type",
			expected: e.name,
			input: t.value,
			inst: n,
			path: [...n._zod.def.path ?? []]
		});
	}, n;
}
var _p = (...e) => /* @__PURE__ */ tl({
	Codec: Xf,
	Boolean: Od,
	String: Du
}, ...e);
function vp(e) {
	let t = ap(() => nf([
		U(e),
		Sd(),
		kd(),
		Bd(),
		Y(t),
		pf(U(), t)
	]));
	return t;
}
function yp(e, t) {
	return new $f({
		type: "pipe",
		in: Of(e),
		out: t
	});
}
//#endregion
//#region node_modules/zod/v4/classic/compat.js
var bp = {
	invalid_type: "invalid_type",
	too_big: "too_big",
	too_small: "too_small",
	invalid_format: "invalid_format",
	not_multiple_of: "not_multiple_of",
	unrecognized_keys: "unrecognized_keys",
	invalid_union: "invalid_union",
	invalid_key: "invalid_key",
	invalid_element: "invalid_element",
	invalid_value: "invalid_value",
	custom: "custom"
};
function xp(e) {
	l({ customError: e });
}
function Sp() {
	return l().customError;
}
var Cp;
(function(e) {})(Cp ||= {});
//#endregion
//#region node_modules/zod/v4/classic/from-json-schema.js
var Q = {
	...Cu,
	...$l,
	iso: eu
}, wp = /* @__PURE__ */ new Set(/* @__PURE__ */ "$schema.$ref.$defs.definitions.$id.id.$comment.$anchor.$vocabulary.$dynamicRef.$dynamicAnchor.type.enum.const.anyOf.oneOf.allOf.not.properties.required.additionalProperties.patternProperties.propertyNames.minProperties.maxProperties.items.prefixItems.additionalItems.minItems.maxItems.uniqueItems.contains.minContains.maxContains.minLength.maxLength.pattern.format.minimum.maximum.exclusiveMinimum.exclusiveMaximum.multipleOf.description.default.contentEncoding.contentMediaType.contentSchema.unevaluatedItems.unevaluatedProperties.if.then.else.dependentSchemas.dependentRequired.nullable.readOnly".split("."));
function Tp(e, t) {
	let n = e.$schema;
	return n === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : n === "http://json-schema.org/draft-07/schema#" ? "draft-7" : n === "http://json-schema.org/draft-04/schema#" ? "draft-4" : t ?? "draft-2020-12";
}
function Ep(e, t) {
	if (!e.startsWith("#")) throw Error("External $ref is not supported, only local refs (#/...) are allowed");
	let n = e.slice(1).split("/").filter(Boolean);
	if (n.length === 0) return t.rootSchema;
	let r = t.version === "draft-2020-12" ? "$defs" : "definitions";
	if (n[0] === r) {
		let r = n[1];
		if (!r || !t.defs[r]) throw Error(`Reference not found: ${e}`);
		return t.defs[r];
	}
	throw Error(`Reference not found: ${e}`);
}
function Dp(e, t) {
	if (e.not !== void 0) {
		if (typeof e.not == "object" && Object.keys(e.not).length === 0) return Q.never();
		throw Error("not is not supported in Zod (except { not: {} } for never)");
	}
	if (e.unevaluatedItems !== void 0) throw Error("unevaluatedItems is not supported");
	if (e.unevaluatedProperties !== void 0) throw Error("unevaluatedProperties is not supported");
	if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0) throw Error("Conditional schemas (if/then/else) are not supported");
	if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0) throw Error("dependentSchemas and dependentRequired are not supported");
	if (e.$ref) {
		let n = e.$ref;
		if (t.refs.has(n)) return t.refs.get(n);
		if (t.processing.has(n)) return Q.lazy(() => {
			if (!t.refs.has(n)) throw Error(`Circular reference not resolved: ${n}`);
			return t.refs.get(n);
		});
		t.processing.add(n);
		let r = $(Ep(n, t), t);
		return t.refs.set(n, r), t.processing.delete(n), r;
	}
	if (e.enum !== void 0) {
		let n = e.enum;
		if (t.version === "openapi-3.0" && e.nullable === !0 && n.length === 1 && n[0] === null) return Q.null();
		if (n.length === 0) return Q.never();
		if (n.length === 1) return Q.literal(n[0]);
		if (n.every((e) => typeof e == "string")) return Q.enum(n);
		let r = n.map((e) => Q.literal(e));
		return r.length < 2 ? r[0] : Q.union([
			r[0],
			r[1],
			...r.slice(2)
		]);
	}
	if (e.const !== void 0) return Q.literal(e.const);
	let n = e.type;
	if (Array.isArray(n)) {
		let r = n.map((n) => Dp({
			...e,
			type: n
		}, t));
		return r.length === 0 ? Q.never() : r.length === 1 ? r[0] : Q.union(r);
	}
	if (!n) return Q.any();
	let r;
	switch (n) {
		case "string": {
			let t = Q.string();
			if (e.format) {
				let n = e.format;
				n === "email" ? t = t.check(Q.email()) : n === "uri" || n === "uri-reference" ? t = t.check(Q.url()) : n === "uuid" || n === "guid" ? t = t.check(Q.uuid()) : n === "date-time" ? t = t.check(Q.iso.datetime()) : n === "date" ? t = t.check(Q.iso.date()) : n === "time" ? t = t.check(Q.iso.time()) : n === "duration" ? t = t.check(Q.iso.duration()) : n === "ipv4" ? t = t.check(Q.ipv4()) : n === "ipv6" ? t = t.check(Q.ipv6()) : n === "mac" ? t = t.check(Q.mac()) : n === "cidr" ? t = t.check(Q.cidrv4()) : n === "cidr-v6" ? t = t.check(Q.cidrv6()) : n === "base64" ? t = t.check(Q.base64()) : n === "base64url" ? t = t.check(Q.base64url()) : n === "e164" ? t = t.check(Q.e164()) : n === "jwt" ? t = t.check(Q.jwt()) : n === "emoji" ? t = t.check(Q.emoji()) : n === "nanoid" ? t = t.check(Q.nanoid()) : n === "cuid" ? t = t.check(Q.cuid()) : n === "cuid2" ? t = t.check(Q.cuid2()) : n === "ulid" ? t = t.check(Q.ulid()) : n === "xid" ? t = t.check(Q.xid()) : n === "ksuid" && (t = t.check(Q.ksuid()));
			}
			typeof e.minLength == "number" && (t = t.min(e.minLength)), typeof e.maxLength == "number" && (t = t.max(e.maxLength)), e.pattern && (t = t.regex(new RegExp(e.pattern))), r = t;
			break;
		}
		case "number":
		case "integer": {
			let t = n === "integer" ? Q.number().int() : Q.number();
			typeof e.minimum == "number" && (t = t.min(e.minimum)), typeof e.maximum == "number" && (t = t.max(e.maximum)), typeof e.exclusiveMinimum == "number" ? t = t.gt(e.exclusiveMinimum) : e.exclusiveMinimum === !0 && typeof e.minimum == "number" && (t = t.gt(e.minimum)), typeof e.exclusiveMaximum == "number" ? t = t.lt(e.exclusiveMaximum) : e.exclusiveMaximum === !0 && typeof e.maximum == "number" && (t = t.lt(e.maximum)), typeof e.multipleOf == "number" && (t = t.multipleOf(e.multipleOf)), r = t;
			break;
		}
		case "boolean":
			r = Q.boolean();
			break;
		case "null":
			r = Q.null();
			break;
		case "object": {
			let n = {}, i = e.properties || {}, a = new Set(e.required || []);
			for (let [e, r] of Object.entries(i)) {
				let i = $(r, t);
				n[e] = a.has(e) ? i : i.optional();
			}
			if (e.propertyNames) {
				let i = $(e.propertyNames, t), a = e.additionalProperties && typeof e.additionalProperties == "object" ? $(e.additionalProperties, t) : Q.any();
				if (Object.keys(n).length === 0) {
					r = Q.record(i, a);
					break;
				}
				let o = Q.object(n).passthrough(), s = Q.looseRecord(i, a);
				r = Q.intersection(o, s);
				break;
			}
			if (e.patternProperties) {
				let i = e.patternProperties, a = Object.keys(i), o = [];
				for (let e of a) {
					let n = $(i[e], t), r = Q.string().regex(new RegExp(e));
					o.push(Q.looseRecord(r, n));
				}
				let s = [];
				if (Object.keys(n).length > 0 && s.push(Q.object(n).passthrough()), s.push(...o), s.length === 0) r = Q.object({}).passthrough();
				else if (s.length === 1) r = s[0];
				else {
					let e = Q.intersection(s[0], s[1]);
					for (let t = 2; t < s.length; t++) e = Q.intersection(e, s[t]);
					r = e;
				}
				break;
			}
			let o = Q.object(n);
			r = e.additionalProperties === !1 ? o.strict() : typeof e.additionalProperties == "object" ? o.catchall($(e.additionalProperties, t)) : o.passthrough();
			break;
		}
		case "array": {
			let n = e.prefixItems, i = e.items;
			if (n && Array.isArray(n)) {
				let a = n.map((e) => $(e, t)), o = i && typeof i == "object" && !Array.isArray(i) ? $(i, t) : void 0;
				r = o ? Q.tuple(a).rest(o) : Q.tuple(a), typeof e.minItems == "number" && (r = r.check(Q.minLength(e.minItems))), typeof e.maxItems == "number" && (r = r.check(Q.maxLength(e.maxItems)));
			} else if (Array.isArray(i)) {
				let n = i.map((e) => $(e, t)), a = e.additionalItems && typeof e.additionalItems == "object" ? $(e.additionalItems, t) : void 0;
				r = a ? Q.tuple(n).rest(a) : Q.tuple(n), typeof e.minItems == "number" && (r = r.check(Q.minLength(e.minItems))), typeof e.maxItems == "number" && (r = r.check(Q.maxLength(e.maxItems)));
			} else if (i !== void 0) {
				let n = $(i, t), a = Q.array(n);
				typeof e.minItems == "number" && (a = a.min(e.minItems)), typeof e.maxItems == "number" && (a = a.max(e.maxItems)), r = a;
			} else r = Q.array(Q.any());
			break;
		}
		default: throw Error(`Unsupported type: ${n}`);
	}
	return r;
}
function $(e, t) {
	if (typeof e == "boolean") return e ? Q.any() : Q.never();
	let n = Dp(e, t), r = e.type || e.enum !== void 0 || e.const !== void 0;
	if (e.anyOf && Array.isArray(e.anyOf)) {
		let i = e.anyOf.map((e) => $(e, t)), a = Q.union(i);
		n = r ? Q.intersection(n, a) : a;
	}
	if (e.oneOf && Array.isArray(e.oneOf)) {
		let i = e.oneOf.map((e) => $(e, t)), a = Q.xor(i);
		n = r ? Q.intersection(n, a) : a;
	}
	if (e.allOf && Array.isArray(e.allOf)) if (e.allOf.length === 0) n = r ? n : Q.any();
	else {
		let i = r ? n : $(e.allOf[0], t), a = +!r;
		for (let n = a; n < e.allOf.length; n++) i = Q.intersection(i, $(e.allOf[n], t));
		n = i;
	}
	e.nullable === !0 && t.version === "openapi-3.0" && (n = Q.nullable(n)), e.readOnly === !0 && (n = Q.readonly(n)), e.default !== void 0 && (n = n.default(e.default));
	let i = {};
	for (let t of [
		"$id",
		"id",
		"$comment",
		"$anchor",
		"$vocabulary",
		"$dynamicRef",
		"$dynamicAnchor"
	]) t in e && (i[t] = e[t]);
	for (let t of [
		"contentEncoding",
		"contentMediaType",
		"contentSchema"
	]) t in e && (i[t] = e[t]);
	for (let t of Object.keys(e)) wp.has(t) || (i[t] = e[t]);
	return Object.keys(i).length > 0 && t.registry.add(n, i), e.description && (n = n.describe(e.description)), n;
}
function Op(e, t) {
	if (typeof e == "boolean") return e ? Q.any() : Q.never();
	let n;
	try {
		n = JSON.parse(JSON.stringify(e));
	} catch {
		throw Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
	}
	let r = {
		version: Tp(n, t?.defaultTarget),
		defs: n.$defs || n.definitions || {},
		refs: /* @__PURE__ */ new Map(),
		processing: /* @__PURE__ */ new Set(),
		rootSchema: n,
		registry: t?.registry ?? k
	};
	return $(n, r);
}
//#endregion
//#region node_modules/zod/v4/classic/coerce.js
var kp = /* @__PURE__ */ t({
	bigint: () => Np,
	boolean: () => Mp,
	date: () => Pp,
	number: () => jp,
	string: () => Ap
});
function Ap(e) {
	return /* @__PURE__ */ os(Du, e);
}
function jp(e) {
	return /* @__PURE__ */ Is(xd, e);
}
function Mp(e) {
	return /* @__PURE__ */ Us(Od, e);
}
function Np(e) {
	return /* @__PURE__ */ Gs(Ad, e);
}
function Pp(e) {
	return /* @__PURE__ */ nc(Jd, e);
}
//#endregion
//#region node_modules/zod/v4/classic/external.js
var Fp = /* @__PURE__ */ t({
	$brand: () => a,
	$input: () => ns,
	$output: () => ts,
	NEVER: () => r,
	TimePrecision: () => As,
	ZodAny: () => Vd,
	ZodArray: () => Xd,
	ZodBase64: () => ld,
	ZodBase64URL: () => dd,
	ZodBigInt: () => Ad,
	ZodBigIntFormat: () => Md,
	ZodBoolean: () => Od,
	ZodCIDRv4: () => ad,
	ZodCIDRv6: () => sd,
	ZodCUID: () => Uu,
	ZodCUID2: () => Gu,
	ZodCatch: () => Wf,
	ZodCodec: () => Xf,
	ZodCustom: () => lp,
	ZodCustomStringFormat: () => K,
	ZodDate: () => Jd,
	ZodDefault: () => If,
	ZodDiscriminatedUnion: () => of,
	ZodE164: () => pd,
	ZodEmail: () => Ou,
	ZodEmoji: () => zu,
	ZodEnum: () => bf,
	ZodError: () => uu,
	ZodExactOptional: () => jf,
	ZodFile: () => Tf,
	ZodFirstPartyTypeKind: () => Cp,
	ZodFunction: () => cp,
	ZodGUID: () => Au,
	ZodIPv4: () => $u,
	ZodIPv6: () => rd,
	ZodISODate: () => ru,
	ZodISODateTime: () => tu,
	ZodISODuration: () => su,
	ZodISOTime: () => au,
	ZodIntersection: () => cf,
	ZodIssueCode: () => bp,
	ZodJWT: () => hd,
	ZodKSUID: () => Zu,
	ZodLazy: () => ip,
	ZodLiteral: () => Cf,
	ZodMAC: () => td,
	ZodMap: () => gf,
	ZodNaN: () => Kf,
	ZodNanoID: () => Vu,
	ZodNever: () => Wd,
	ZodNonOptional: () => Bf,
	ZodNull: () => zd,
	ZodNullable: () => Nf,
	ZodNumber: () => xd,
	ZodNumberFormat: () => q,
	ZodObject: () => Qd,
	ZodOptional: () => kf,
	ZodPipe: () => Jf,
	ZodPrefault: () => Rf,
	ZodPreprocess: () => $f,
	ZodPromise: () => op,
	ZodReadonly: () => ep,
	ZodRealError: () => V,
	ZodRecord: () => ff,
	ZodSet: () => vf,
	ZodString: () => Du,
	ZodStringFormat: () => W,
	ZodSuccess: () => Hf,
	ZodSymbol: () => Fd,
	ZodTemplateLiteral: () => np,
	ZodTransform: () => Df,
	ZodTuple: () => uf,
	ZodType: () => H,
	ZodULID: () => qu,
	ZodURL: () => Iu,
	ZodUUID: () => G,
	ZodUndefined: () => Ld,
	ZodUnion: () => tf,
	ZodUnknown: () => Ud,
	ZodVoid: () => Kd,
	ZodXID: () => Yu,
	ZodXor: () => rf,
	_ZodString: () => Eu,
	_default: () => Lf,
	_function: () => Z,
	any: () => Hd,
	array: () => Y,
	base64: () => ud,
	base64url: () => fd,
	bigint: () => jd,
	boolean: () => kd,
	catch: () => Gf,
	check: () => up,
	cidrv4: () => od,
	cidrv6: () => cd,
	clone: () => y,
	codec: () => Zf,
	coerce: () => kp,
	config: () => l,
	core: () => Ql,
	cuid: () => Wu,
	cuid2: () => Ku,
	custom: () => dp,
	date: () => Yd,
	decode: () => gu,
	decodeAsync: () => vu,
	describe: () => mp,
	discriminatedUnion: () => sf,
	e164: () => md,
	email: () => ku,
	emoji: () => Bu,
	encode: () => hu,
	encodeAsync: () => _u,
	endsWith: () => gc,
	enum: () => xf,
	exactOptional: () => Mf,
	file: () => Ef,
	flattenError: () => Qe,
	float32: () => wd,
	float64: () => Td,
	formatError: () => $e,
	fromJSONSchema: () => Op,
	function: () => Z,
	getErrorMap: () => Sp,
	globalRegistry: () => k,
	gt: () => M,
	gte: () => N,
	guid: () => ju,
	hash: () => bd,
	hex: () => yd,
	hostname: () => vd,
	httpUrl: () => Ru,
	includes: () => mc,
	instanceof: () => gp,
	int: () => Cd,
	int32: () => Ed,
	int64: () => Nd,
	intersection: () => lf,
	invertCodec: () => Qf,
	ipv4: () => ed,
	ipv6: () => id,
	iso: () => eu,
	json: () => vp,
	jwt: () => gd,
	keyof: () => Zd,
	ksuid: () => Qu,
	lazy: () => ap,
	length: () => uc,
	literal: () => wf,
	locales: () => $o,
	looseObject: () => ef,
	looseRecord: () => hf,
	lowercase: () => fc,
	lt: () => A,
	lte: () => j,
	mac: () => nd,
	map: () => _f,
	maxLength: () => lc,
	maxSize: () => F,
	meta: () => hp,
	mime: () => vc,
	minLength: () => L,
	minSize: () => I,
	multipleOf: () => P,
	nan: () => qf,
	nanoid: () => Hu,
	nativeEnum: () => Sf,
	negative: () => ac,
	never: () => Gd,
	nonnegative: () => sc,
	nonoptional: () => Vf,
	nonpositive: () => oc,
	normalize: () => yc,
	null: () => Bd,
	nullable: () => Pf,
	nullish: () => Ff,
	number: () => Sd,
	object: () => X,
	optional: () => Af,
	overwrite: () => R,
	parse: () => du,
	parseAsync: () => fu,
	partialRecord: () => mf,
	pipe: () => Yf,
	positive: () => ic,
	prefault: () => zf,
	preprocess: () => yp,
	prettifyError: () => nt,
	promise: () => sp,
	property: () => _c,
	readonly: () => tp,
	record: () => pf,
	refine: () => fp,
	regex: () => dc,
	regexes: () => Dt,
	registry: () => is,
	safeDecode: () => bu,
	safeDecodeAsync: () => Su,
	safeEncode: () => yu,
	safeEncodeAsync: () => xu,
	safeParse: () => pu,
	safeParseAsync: () => mu,
	set: () => yf,
	setErrorMap: () => xp,
	size: () => cc,
	slugify: () => Cc,
	startsWith: () => hc,
	strictObject: () => $d,
	string: () => U,
	stringFormat: () => _d,
	stringbool: () => _p,
	success: () => Uf,
	superRefine: () => pp,
	symbol: () => Id,
	templateLiteral: () => rp,
	toJSONSchema: () => Yl,
	toLowerCase: () => xc,
	toUpperCase: () => Sc,
	transform: () => Of,
	treeifyError: () => et,
	trim: () => bc,
	tuple: () => df,
	uint32: () => Dd,
	uint64: () => Pd,
	ulid: () => Ju,
	undefined: () => Rd,
	union: () => nf,
	unknown: () => J,
	uppercase: () => pc,
	url: () => Lu,
	util: () => u,
	uuid: () => Mu,
	uuidv4: () => Nu,
	uuidv6: () => Pu,
	uuidv7: () => Fu,
	void: () => qd,
	xid: () => Xu,
	xor: () => af
});
l(va());
//#endregion
//#region node_modules/zod/index.js
var Ip = /* @__PURE__ */ t({
	$brand: () => a,
	$input: () => ns,
	$output: () => ts,
	NEVER: () => r,
	TimePrecision: () => As,
	ZodAny: () => Vd,
	ZodArray: () => Xd,
	ZodBase64: () => ld,
	ZodBase64URL: () => dd,
	ZodBigInt: () => Ad,
	ZodBigIntFormat: () => Md,
	ZodBoolean: () => Od,
	ZodCIDRv4: () => ad,
	ZodCIDRv6: () => sd,
	ZodCUID: () => Uu,
	ZodCUID2: () => Gu,
	ZodCatch: () => Wf,
	ZodCodec: () => Xf,
	ZodCustom: () => lp,
	ZodCustomStringFormat: () => K,
	ZodDate: () => Jd,
	ZodDefault: () => If,
	ZodDiscriminatedUnion: () => of,
	ZodE164: () => pd,
	ZodEmail: () => Ou,
	ZodEmoji: () => zu,
	ZodEnum: () => bf,
	ZodError: () => uu,
	ZodExactOptional: () => jf,
	ZodFile: () => Tf,
	ZodFirstPartyTypeKind: () => Cp,
	ZodFunction: () => cp,
	ZodGUID: () => Au,
	ZodIPv4: () => $u,
	ZodIPv6: () => rd,
	ZodISODate: () => ru,
	ZodISODateTime: () => tu,
	ZodISODuration: () => su,
	ZodISOTime: () => au,
	ZodIntersection: () => cf,
	ZodIssueCode: () => bp,
	ZodJWT: () => hd,
	ZodKSUID: () => Zu,
	ZodLazy: () => ip,
	ZodLiteral: () => Cf,
	ZodMAC: () => td,
	ZodMap: () => gf,
	ZodNaN: () => Kf,
	ZodNanoID: () => Vu,
	ZodNever: () => Wd,
	ZodNonOptional: () => Bf,
	ZodNull: () => zd,
	ZodNullable: () => Nf,
	ZodNumber: () => xd,
	ZodNumberFormat: () => q,
	ZodObject: () => Qd,
	ZodOptional: () => kf,
	ZodPipe: () => Jf,
	ZodPrefault: () => Rf,
	ZodPreprocess: () => $f,
	ZodPromise: () => op,
	ZodReadonly: () => ep,
	ZodRealError: () => V,
	ZodRecord: () => ff,
	ZodSet: () => vf,
	ZodString: () => Du,
	ZodStringFormat: () => W,
	ZodSuccess: () => Hf,
	ZodSymbol: () => Fd,
	ZodTemplateLiteral: () => np,
	ZodTransform: () => Df,
	ZodTuple: () => uf,
	ZodType: () => H,
	ZodULID: () => qu,
	ZodURL: () => Iu,
	ZodUUID: () => G,
	ZodUndefined: () => Ld,
	ZodUnion: () => tf,
	ZodUnknown: () => Ud,
	ZodVoid: () => Kd,
	ZodXID: () => Yu,
	ZodXor: () => rf,
	_ZodString: () => Eu,
	_default: () => Lf,
	_function: () => Z,
	any: () => Hd,
	array: () => Y,
	base64: () => ud,
	base64url: () => fd,
	bigint: () => jd,
	boolean: () => kd,
	catch: () => Gf,
	check: () => up,
	cidrv4: () => od,
	cidrv6: () => cd,
	clone: () => y,
	codec: () => Zf,
	coerce: () => kp,
	config: () => l,
	core: () => Ql,
	cuid: () => Wu,
	cuid2: () => Ku,
	custom: () => dp,
	date: () => Yd,
	decode: () => gu,
	decodeAsync: () => vu,
	default: () => Lp,
	describe: () => mp,
	discriminatedUnion: () => sf,
	e164: () => md,
	email: () => ku,
	emoji: () => Bu,
	encode: () => hu,
	encodeAsync: () => _u,
	endsWith: () => gc,
	enum: () => xf,
	exactOptional: () => Mf,
	file: () => Ef,
	flattenError: () => Qe,
	float32: () => wd,
	float64: () => Td,
	formatError: () => $e,
	fromJSONSchema: () => Op,
	function: () => Z,
	getErrorMap: () => Sp,
	globalRegistry: () => k,
	gt: () => M,
	gte: () => N,
	guid: () => ju,
	hash: () => bd,
	hex: () => yd,
	hostname: () => vd,
	httpUrl: () => Ru,
	includes: () => mc,
	instanceof: () => gp,
	int: () => Cd,
	int32: () => Ed,
	int64: () => Nd,
	intersection: () => lf,
	invertCodec: () => Qf,
	ipv4: () => ed,
	ipv6: () => id,
	iso: () => eu,
	json: () => vp,
	jwt: () => gd,
	keyof: () => Zd,
	ksuid: () => Qu,
	lazy: () => ap,
	length: () => uc,
	literal: () => wf,
	locales: () => $o,
	looseObject: () => ef,
	looseRecord: () => hf,
	lowercase: () => fc,
	lt: () => A,
	lte: () => j,
	mac: () => nd,
	map: () => _f,
	maxLength: () => lc,
	maxSize: () => F,
	meta: () => hp,
	mime: () => vc,
	minLength: () => L,
	minSize: () => I,
	multipleOf: () => P,
	nan: () => qf,
	nanoid: () => Hu,
	nativeEnum: () => Sf,
	negative: () => ac,
	never: () => Gd,
	nonnegative: () => sc,
	nonoptional: () => Vf,
	nonpositive: () => oc,
	normalize: () => yc,
	null: () => Bd,
	nullable: () => Pf,
	nullish: () => Ff,
	number: () => Sd,
	object: () => X,
	optional: () => Af,
	overwrite: () => R,
	parse: () => du,
	parseAsync: () => fu,
	partialRecord: () => mf,
	pipe: () => Yf,
	positive: () => ic,
	prefault: () => zf,
	preprocess: () => yp,
	prettifyError: () => nt,
	promise: () => sp,
	property: () => _c,
	readonly: () => tp,
	record: () => pf,
	refine: () => fp,
	regex: () => dc,
	regexes: () => Dt,
	registry: () => is,
	safeDecode: () => bu,
	safeDecodeAsync: () => Su,
	safeEncode: () => yu,
	safeEncodeAsync: () => xu,
	safeParse: () => pu,
	safeParseAsync: () => mu,
	set: () => yf,
	setErrorMap: () => xp,
	size: () => cc,
	slugify: () => Cc,
	startsWith: () => hc,
	strictObject: () => $d,
	string: () => U,
	stringFormat: () => _d,
	stringbool: () => _p,
	success: () => Uf,
	superRefine: () => pp,
	symbol: () => Id,
	templateLiteral: () => rp,
	toJSONSchema: () => Yl,
	toLowerCase: () => xc,
	toUpperCase: () => Sc,
	transform: () => Of,
	treeifyError: () => et,
	trim: () => bc,
	tuple: () => df,
	uint32: () => Dd,
	uint64: () => Pd,
	ulid: () => Ju,
	undefined: () => Rd,
	union: () => nf,
	unknown: () => J,
	uppercase: () => pc,
	url: () => Lu,
	util: () => u,
	uuid: () => Mu,
	uuidv4: () => Nu,
	uuidv6: () => Pu,
	uuidv7: () => Fu,
	void: () => qd,
	xid: () => Xu,
	xor: () => af,
	z: () => Fp
}), Lp = Fp, Rp = Z({
	input: df([X({
		editor: dp((e) => e !== void 0),
		linkBrowserUrl: U()
	})]),
	output: kd()
}), zp = Z({
	input: df([X({
		editor: dp((e) => e !== void 0),
		linkBrowserUrl: U()
	})]),
	output: qd()
}), Bp = X({
	commands: Y(X({
		id: U(),
		label: U(),
		iconIdentifier: U(),
		position: X({
			toolbarGroupId: U().or(wf(!1)),
			bubbleMenuGroupId: U().or(wf(!1))
		}),
		status: X({
			isActive: Rp.optional(),
			isDisabled: Rp.optional(),
			isVisible: Rp.optional()
		}).optional(),
		hooks: X({ onEditorMounted: zp.optional() }).optional(),
		onExecute: zp
	})).optional(),
	extensions: Y(J()).optional()
});
//#endregion
//#region src/configuration.ts
function Vp() {
	return [
		{
			id: "history",
			commands: []
		},
		{
			id: "styles",
			commands: [],
			dropdown: {
				label: "Styles",
				iconIdentifier: "styles"
			}
		},
		{
			id: "heading",
			commands: [],
			dropdown: {
				label: "Headings",
				iconIdentifier: "heading"
			}
		},
		{
			id: "formatting",
			commands: []
		},
		{
			id: "general",
			commands: []
		},
		{
			id: "textAlignment",
			commands: [],
			dropdown: {
				label: "Text alignment",
				iconIdentifier: "justify-left"
			}
		},
		{
			id: "developer",
			commands: []
		}
	];
}
function Hp() {
	return [
		{
			id: "heading",
			commands: [],
			dropdown: {
				label: "Headings",
				iconIdentifier: "heading"
			}
		},
		{
			id: "formatting",
			commands: []
		},
		{
			id: "table",
			commands: []
		},
		{
			id: "styles",
			commands: [],
			dropdown: {
				label: "Styles",
				iconIdentifier: "styles"
			}
		},
		{
			id: "textAlignment",
			commands: [],
			dropdown: {
				label: "Text alignment",
				iconIdentifier: "justify-left"
			}
		}
	];
}
function Up(e) {
	let t = Bp.safeParse(e);
	if (!t.success) throw Error(`Invalid TipTap plugin options: ${t.error.message}`);
	return t.data;
}
function Wp(e) {
	let t = Vp(), n = Hp(), r = e.flatMap((e) => e.extensions ?? []);
	for (let r of e) if (r.commands) for (let e of r.commands) {
		if (e.position.toolbarGroupId !== !1) {
			let n = t.find((t) => t.id === e.position.toolbarGroupId);
			if (!n) throw Error(`Top bar group ${e.position.toolbarGroupId} not found for command id ${e.id}.`);
			n.commands.push(e);
		}
		if (e.position.bubbleMenuGroupId !== !1) {
			let t = n.find((t) => t.id === e.position.bubbleMenuGroupId);
			if (!t) throw Error(`Bubble menu group ${e.position.bubbleMenuGroupId} not found for command id ${e.id}.`);
			t.commands.push(e);
		}
	}
	return {
		toolbar: t,
		bubbleMenu: n,
		extensions: r
	};
}
function Gp(e) {
	let t = e.getValidationSchema(Ip).safeParse(e.config);
	if (!t.success) {
		let n = `Invalid TipTap configuration for plugin id: ${e.pluginId}!
Received plugin configuration:
${JSON.stringify(e.config, null, 2)}

Zod Validation Error:
${t.error.message}`;
		throw Error(n);
	}
	return t.data;
}
//#endregion
export { kd as a, U as c, Y as i, J as l, Up as n, X as o, Gp as r, pf as s, Wp as t };
