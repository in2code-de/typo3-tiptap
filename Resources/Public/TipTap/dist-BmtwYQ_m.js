import { Cn as e, En as t, Mt as n, Nt as r, On as i, Sn as a, Tn as o, Z as s, _ as c, _n as l, bn as u, gn as d, i as f, jn as p, kn as m, vn as h, xn as g } from "./dist-BppL3qHu.js";
//#region node_modules/prosemirror-dropcursor/dist/index.js
function _(e = {}) {
	return new g({ view(t) {
		return new v(t, e);
	} });
}
var v = class {
	constructor(e, t) {
		this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = t.width ?? 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = [
			"dragover",
			"dragend",
			"drop",
			"dragleave"
		].map((t) => {
			let n = (e) => {
				this[t](e);
			};
			return e.dom.addEventListener(t, n), {
				name: t,
				handler: n
			};
		});
	}
	destroy() {
		this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
	}
	update(e, t) {
		this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
	}
	setCursor(e) {
		e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
	}
	updateOverlay() {
		let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, r = this.editorView.dom, i = r.getBoundingClientRect(), a = i.width / r.offsetWidth, o = i.height / r.offsetHeight;
		if (t) {
			let t = e.nodeBefore, r = e.nodeAfter;
			if (t || r) {
				let e = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
				if (e) {
					let i = e.getBoundingClientRect(), a = t ? i.bottom : i.top;
					t && r && (a = (a + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
					let s = this.width / 2 * o;
					n = {
						left: i.left,
						right: i.right,
						top: a - s,
						bottom: a + s
					};
				}
			}
		}
		if (!n) {
			let e = this.editorView.coordsAtPos(this.cursorPos), t = this.width / 2 * a;
			n = {
				left: e.left - t,
				right: e.left + t,
				top: e.top,
				bottom: e.bottom
			};
		}
		let s = this.editorView.dom.offsetParent;
		this.element || (this.element = s.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
		let c, l;
		if (!s || s == document.body && getComputedStyle(s).position == "static") c = -pageXOffset, l = -pageYOffset;
		else {
			let e = s.getBoundingClientRect(), t = e.width / s.offsetWidth, n = e.height / s.offsetHeight;
			c = e.left - s.scrollLeft * t, l = e.top - s.scrollTop * n;
		}
		this.element.style.left = (n.left - c) / a + "px", this.element.style.top = (n.top - l) / o + "px", this.element.style.width = (n.right - n.left) / a + "px", this.element.style.height = (n.bottom - n.top) / o + "px";
	}
	scheduleRemoval(e) {
		clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
	}
	dragover(e) {
		if (!this.editorView.editable) return;
		let t = this.editorView.posAtCoords({
			left: e.clientX,
			top: e.clientY
		}), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), r = n && n.type.spec.disableDropCursor, a = typeof r == "function" ? r(this.editorView, t, e) : r;
		if (t && !a) {
			let e = t.pos;
			if (this.editorView.dragging && this.editorView.dragging.slice) {
				let t = i(this.editorView.state.doc, e, this.editorView.dragging.slice);
				t != null && (e = t);
			}
			this.setCursor(e), this.scheduleRemoval(5e3);
		}
	}
	dragend() {
		this.scheduleRemoval(20);
	}
	drop() {
		this.scheduleRemoval(20);
	}
	dragleave(e) {
		this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
	}
}, y = class t extends e {
	constructor(e) {
		super(e, e);
	}
	map(n, r) {
		let i = n.resolve(r.map(this.head));
		return t.valid(i) ? new t(i) : e.near(i);
	}
	content() {
		return p.empty;
	}
	eq(e) {
		return e instanceof t && e.head == this.head;
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		};
	}
	static fromJSON(e, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for GapCursor.fromJSON");
		return new t(e.resolve(n.pos));
	}
	getBookmark() {
		return new b(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.inlineContent || !ee(e) || !S(e)) return !1;
		let n = t.type.spec.allowGapCursor;
		if (n != null) return n;
		let r = t.contentMatchAt(e.index()).defaultType;
		return r && r.isTextblock;
	}
	static findGapCursorFrom(e, n, r = !1) {
		search: for (;;) {
			if (!r && t.valid(e)) return e;
			let i = e.pos, a = null;
			for (let r = e.depth;; r--) {
				let o = e.node(r);
				if (n > 0 ? e.indexAfter(r) < o.childCount : e.index(r) > 0) {
					a = o.child(n > 0 ? e.indexAfter(r) : e.index(r) - 1);
					break;
				} else if (r == 0) return null;
				i += n;
				let s = e.doc.resolve(i);
				if (t.valid(s)) return s;
			}
			for (;;) {
				let o = n > 0 ? a.firstChild : a.lastChild;
				if (!o) {
					if (a.isAtom && !a.isText && !u.isSelectable(a)) {
						e = e.doc.resolve(i + a.nodeSize * n), r = !1;
						continue search;
					}
					break;
				}
				a = o, i += n;
				let s = e.doc.resolve(i);
				if (t.valid(s)) return s;
			}
			return null;
		}
	}
};
y.prototype.visible = !1, y.findFrom = y.findGapCursorFrom, e.jsonID("gapcursor", y);
var b = class t {
	constructor(e) {
		this.pos = e;
	}
	map(e) {
		return new t(e.map(this.pos));
	}
	resolve(t) {
		let n = t.resolve(this.pos);
		return y.valid(n) ? new y(n) : e.near(n);
	}
};
function x(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function ee(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || x(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function S(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || x(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function C() {
	return new g({ props: {
		decorations: O,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && y.valid(n) ? new y(n) : null;
		},
		handleClick: E,
		handleKeyDown: w,
		handleDOMEvents: { beforeinput: D }
	} });
}
var w = d({
	ArrowLeft: T("horiz", -1),
	ArrowRight: T("horiz", 1),
	ArrowUp: T("vert", -1),
	ArrowDown: T("vert", 1)
});
function T(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, s = t > 0 ? a.$to : a.$from, c = a.empty;
		if (a instanceof o) {
			if (!i.endOfTextblock(n) || s.depth == 0) return !1;
			c = !1, s = e.doc.resolve(t > 0 ? s.after() : s.before());
		}
		let l = y.findGapCursorFrom(s, t, c);
		return l ? (r && r(e.tr.setSelection(new y(l))), !0) : !1;
	};
}
function E(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!y.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && u.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new y(r))), !0);
}
function D(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof y)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = m.empty;
	for (let e = r.length - 1; e >= 0; e--) i = m.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new p(i, 0, 0));
	return a.setSelection(o.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function O(e) {
	if (!(e.selection instanceof y)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", h.create(e.doc, [l.widget(e.selection.head, t, { key: "gapcursor" })]);
}
//#endregion
//#region node_modules/rope-sequence/dist/index.js
var k = 200, A = function() {};
A.prototype.append = function(e) {
	return e.length ? (e = A.from(e), !this.length && e || e.length < k && this.leafAppend(e) || this.length < k && e.leafPrepend(this) || this.appendInner(e)) : this;
}, A.prototype.prepend = function(e) {
	return e.length ? A.from(e).append(this) : this;
}, A.prototype.appendInner = function(e) {
	return new M(this, e);
}, A.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? A.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, A.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, A.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, A.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, A.from = function(e) {
	return e instanceof A ? e : e && e.length ? new j(e) : A.empty;
};
var j = /* @__PURE__ */ function(e) {
	function t(t) {
		e.call(this), this.values = t;
	}
	e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
	var n = {
		length: { configurable: !0 },
		depth: { configurable: !0 }
	};
	return t.prototype.flatten = function() {
		return this.values;
	}, t.prototype.sliceInner = function(e, n) {
		return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
	}, t.prototype.getInner = function(e) {
		return this.values[e];
	}, t.prototype.forEachInner = function(e, t, n, r) {
		for (var i = t; i < n; i++) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		for (var i = t - 1; i >= n; i--) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.leafAppend = function(e) {
		if (this.length + e.length <= k) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= k) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(A);
A.empty = new j([]);
var M = /* @__PURE__ */ function(e) {
	function t(t, n) {
		e.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
	}
	return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
		return this.left.flatten().concat(this.right.flatten());
	}, t.prototype.getInner = function(e) {
		return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
	}, t.prototype.forEachInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1 || n > i && this.right.forEachInner(e, Math.max(t - i, 0), Math.min(this.length, n) - i, r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t > i && this.right.forEachInvertedInner(e, t - i, Math.max(n, i) - i, r + i) === !1 || n < i && this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1) return !1;
	}, t.prototype.sliceInner = function(e, t) {
		if (e == 0 && t == this.length) return this;
		var n = this.left.length;
		return t <= n ? this.left.slice(e, t) : e >= n ? this.right.slice(e - n, t - n) : this.left.slice(e, n).append(this.right.slice(0, t - n));
	}, t.prototype.leafAppend = function(e) {
		var n = this.right.leafAppend(e);
		if (n) return new t(this.left, n);
	}, t.prototype.leafPrepend = function(e) {
		var n = this.left.leafPrepend(e);
		if (n) return new t(n, this.right);
	}, t.prototype.appendInner = function(e) {
		return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
	}, t;
}(A), N = 500, P = class e {
	constructor(e, t) {
		this.items = e, this.eventCount = t;
	}
	popEvent(t, n) {
		if (this.eventCount == 0) return null;
		let r = this.items.length;
		for (;; r--) if (this.items.get(r - 1).selection) {
			--r;
			break;
		}
		let i, a;
		n && (i = this.remapping(r, this.items.length), a = i.maps.length);
		let o = t.tr, s, c, l = [], u = [];
		return this.items.forEach((t, n) => {
			if (!t.step) {
				i || (i = this.remapping(r, n + 1), a = i.maps.length), a--, u.push(t);
				return;
			}
			if (i) {
				u.push(new F(t.map));
				let e = t.step.map(i.slice(a)), n;
				e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new F(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
			} else o.maybeStep(t.step);
			if (t.selection) return s = i ? t.selection.map(i.slice(a)) : t.selection, c = new e(this.items.slice(0, r).append(u.reverse().concat(l)), this.eventCount - 1), !1;
		}, this.items.length, 0), {
			remaining: c,
			transform: o,
			selection: s
		};
	}
	addTransform(t, n, r, i) {
		let a = [], o = this.eventCount, s = this.items, c = !i && s.length ? s.get(s.length - 1) : null;
		for (let e = 0; e < t.steps.length; e++) {
			let r = t.steps[e].invert(t.docs[e]), l = new F(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > L && (s = te(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, n) {
		let r = new t();
		return this.items.forEach((t, n) => {
			let i = t.mirrorOffset != null && n - t.mirrorOffset >= e ? r.maps.length - t.mirrorOffset : void 0;
			r.appendMap(t.map, i);
		}, e, n), r;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new F(e))), this.eventCount);
	}
	rebased(t, n) {
		if (!this.eventCount) return this;
		let r = [], i = Math.max(0, this.items.length - n), a = t.mapping, o = t.steps.length, s = this.eventCount;
		this.items.forEach((e) => {
			e.selection && s--;
		}, i);
		let c = n;
		this.items.forEach((e) => {
			let n = a.getMirror(--c);
			if (n == null) return;
			o = Math.min(o, n);
			let i = a.maps[n];
			if (e.step) {
				let o = t.steps[n].invert(t.docs[n]), l = e.selection && e.selection.map(a.slice(c + 1, n));
				l && s++, r.push(new F(i, o, l));
			} else r.push(new F(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new F(a.maps[e]));
		let u = new e(this.items.slice(0, i).append(l).append(r), s);
		return u.emptyItemCount() > N && (u = u.compress(this.items.length - r.length)), u;
	}
	emptyItemCount() {
		let e = 0;
		return this.items.forEach((t) => {
			t.step || e++;
		}), e;
	}
	compress(t = this.items.length) {
		let n = this.remapping(0, t), r = n.maps.length, i = [], a = 0;
		return this.items.forEach((e, o) => {
			if (o >= t) i.push(e), e.selection && a++;
			else if (e.step) {
				let t = e.step.map(n.slice(r)), o = t && t.getMap();
				if (r--, o && n.appendMap(o, r), t) {
					let s = e.selection && e.selection.map(n.slice(r));
					s && a++;
					let c = new F(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(A.from(i.reverse()), a);
	}
};
P.empty = new P(A.empty, 0);
function te(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var F = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, I = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, L = 20;
function R(e, t, n, r) {
	let i = n.getMeta(K), a;
	if (i) return i.historyState;
	n.getMeta(q) && (e = new I(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(K)) return o.getMeta(K).redo ? new I(e.done.addTransform(n, void 0, r, G(t)), e.undone, B(n.mapping.maps), e.prevTime, e.prevComposition) : new I(e.done, e.undone.addTransform(n, void 0, r, G(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !z(n, e.prevRanges)), s = o ? V(e.prevRanges, n.mapping) : B(n.mapping.maps);
		return new I(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, G(t)), P.empty, s, n.time, i ?? e.prevComposition);
	} else if (a = n.getMeta("rebased")) return new I(e.done.rebased(n, a), e.undone.rebased(n, a), V(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
	else return new I(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), V(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function z(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function B(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function V(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function H(e, t, n) {
	let r = G(t), i = K.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new I(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(K, {
		redo: n,
		historyState: c
	});
}
var U = !1, W = null;
function G(e) {
	let t = e.plugins;
	if (W != t) {
		U = !1, W = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			U = !0;
			break;
		}
	}
	return U;
}
var K = new a("history"), q = new a("closeHistory");
function J(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new g({
		key: K,
		state: {
			init() {
				return new I(P.empty, P.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return R(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? X : n == "historyRedo" ? Z : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function Y(e, t) {
	return (n, r) => {
		let i = K.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = H(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var X = Y(!1, !0), Z = Y(!0, !0), ne = f.create({
	name: "characterCount",
	addOptions() {
		return {
			limit: null,
			mode: "textSize",
			textCounter: (e) => e.length,
			wordCounter: (e) => e.split(" ").filter((e) => e !== "").length
		};
	},
	addStorage() {
		return {
			characters: () => 0,
			words: () => 0
		};
	},
	onBeforeCreate() {
		this.storage.characters = (e) => {
			let t = e?.node || this.editor.state.doc;
			if ((e?.mode || this.options.mode) === "textSize") {
				let e = t.textBetween(0, t.content.size, void 0, " ");
				return this.options.textCounter(e);
			}
			return t.nodeSize;
		}, this.storage.words = (e) => {
			let t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
			return this.options.wordCounter(n);
		};
	},
	addProseMirrorPlugins() {
		let e = !1;
		return [new g({
			key: new a("characterCount"),
			appendTransaction: (t, n, r) => {
				if (e) return;
				let i = this.options.limit;
				if (i == null || i === 0) {
					e = !0;
					return;
				}
				let a = this.storage.characters({ node: r.doc });
				if (a > i) {
					let t = a - i;
					console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
					let n = r.tr.deleteRange(0, t);
					return e = !0, n;
				}
				e = !0;
			},
			filterTransaction: (e, t) => {
				let n = this.options.limit;
				if (!e.docChanged || n === 0 || n == null) return !0;
				let r = this.storage.characters({ node: t.doc }), i = this.storage.characters({ node: e.doc });
				if (i <= n || r > n && i > n && i <= r) return !0;
				if (r > n && i > n && i > r || !e.getMeta("paste")) return !1;
				let a = e.selection.$head.pos, o = a - (i - n), s = a;
				return e.deleteRange(o, s), !(this.storage.characters({ node: e.doc }) > n);
			}
		})];
	}
}), re = f.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [_(this.options)];
	}
});
f.create({
	name: "focus",
	addOptions() {
		return {
			className: "has-focus",
			mode: "all"
		};
	},
	addProseMirrorPlugins() {
		return [new g({
			key: new a("focus"),
			props: { decorations: ({ doc: e, selection: t }) => {
				let { isEditable: n, isFocused: r } = this.editor, { anchor: i } = t, a = [];
				if (!n || !r) return h.create(e, []);
				let o = 0;
				this.options.mode === "deepest" && e.descendants((e, t) => {
					if (!e.isText) {
						if (!(i >= t && i <= t + e.nodeSize - 1)) return !1;
						o += 1;
					}
				});
				let s = 0;
				return e.descendants((e, t) => {
					if (e.isText || !(i >= t && i <= t + e.nodeSize - 1)) return !1;
					if (s += 1, this.options.mode === "deepest" && o - s > 0 || this.options.mode === "shallowest" && s > 1) return this.options.mode === "deepest";
					a.push(l.node(t, t + e.nodeSize, { class: this.options.className }));
				}), h.create(e, a);
			} }
		})];
	}
});
var ie = f.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [C()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: c(s(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), Q = "placeholder";
function ae(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
f.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: Q,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		let e = this.options.dataAttribute ? `data-${ae(this.options.dataAttribute)}` : `data-${Q}`;
		return [new g({
			key: new a("placeholder"),
			props: { decorations: ({ doc: t, selection: r }) => {
				let i = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: a } = r, o = [];
				if (!i) return null;
				let s = this.editor.isEmpty;
				return t.descendants((t, r) => {
					let i = a >= r && a <= r + t.nodeSize, c = !t.isLeaf && n(t);
					if (!t.type.isTextblock) return this.options.includeChildren;
					if ((i || !this.options.showOnlyCurrent) && c) {
						let n = [this.options.emptyNodeClass];
						s && n.push(this.options.emptyEditorClass);
						let a = l.node(r, r + t.nodeSize, {
							class: n.join(" "),
							[e]: typeof this.options.placeholder == "function" ? this.options.placeholder({
								editor: this.editor,
								node: t,
								pos: r,
								hasAnchor: i
							}) : this.options.placeholder
						});
						o.push(a);
					}
					return this.options.includeChildren;
				}), h.create(t, o);
			} }
		})];
	}
}), f.create({
	name: "selection",
	addOptions() {
		return { className: "selection" };
	},
	addProseMirrorPlugins() {
		let { editor: e, options: t } = this;
		return [new g({
			key: new a("selection"),
			props: { decorations(n) {
				return n.selection.empty || e.isFocused || !e.isEditable || r(n.selection) || e.view.dragging ? null : h.create(n.doc, [l.inline(n.selection.from, n.selection.to, { class: t.className })]);
			} }
		})];
	}
});
function $({ types: e, node: t }) {
	return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var oe = f.create({
	name: "trailingNode",
	addOptions() {
		return {
			node: void 0,
			notAfter: []
		};
	},
	addProseMirrorPlugins() {
		let e = new a(this.name), t = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, e]) => e).filter((e) => (this.options.notAfter || []).concat(t).includes(e.name));
		return [new g({
			key: e,
			appendTransaction: (n, r, i) => {
				let { doc: a, tr: o, schema: s } = i, c = e.getState(i), l = a.content.size, u = s.nodes[t];
				if (!n.some((e) => e.getMeta("skipTrailingNode")) && c) return o.insert(l, u.create());
			},
			state: {
				init: (e, t) => {
					let r = t.tr.doc.lastChild;
					return !$({
						node: r,
						types: n
					});
				},
				apply: (e, t) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return t;
					let r = e.doc.lastChild;
					return !$({
						node: r,
						types: n
					});
				}
			}
		})];
	}
}), se = f.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: t }) => X(e, t),
			redo: () => ({ state: e, dispatch: t }) => Z(e, t)
		};
	},
	addProseMirrorPlugins() {
		return [J(this.options)];
	},
	addKeyboardShortcuts() {
		return {
			"Mod-z": () => this.editor.commands.undo(),
			"Shift-Mod-z": () => this.editor.commands.redo(),
			"Mod-y": () => this.editor.commands.redo(),
			"Mod-я": () => this.editor.commands.undo(),
			"Shift-Mod-я": () => this.editor.commands.redo()
		};
	}
});
//#endregion
export { se as a, oe as i, re as n, ie as r, ne as t };
