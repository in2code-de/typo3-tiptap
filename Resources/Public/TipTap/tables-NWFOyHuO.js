import { Cn as e, Dn as t, Sn as n, Tn as r, _n as i, bn as a, gn as o, jn as s, kn as c, vn as l, wn as u, xn as d } from "./dist-BppL3qHu.js";
//#region node_modules/prosemirror-tables/dist/index.js
var f, p;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	f = (t) => e.get(t), p = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	f = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, p = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var m = class {
	constructor(e, t, n, r) {
		this.width = e, this.height = t, this.map = n, this.problems = r;
	}
	findCell(e) {
		for (let t = 0; t < this.map.length; t++) {
			let n = this.map[t];
			if (n != e) continue;
			let r = t % this.width, i = t / this.width | 0, a = r + 1, o = i + 1;
			for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
			for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
			return {
				left: r,
				top: i,
				right: a,
				bottom: o
			};
		}
		throw RangeError(`No cell with offset ${e} found`);
	}
	colCount(e) {
		for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
		throw RangeError(`No cell with offset ${e} found`);
	}
	nextCell(e, t, n) {
		let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
		return t == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[a * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? a == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? a - 1 : o)];
	}
	rectBetween(e, t) {
		let { left: n, right: r, top: i, bottom: a } = this.findCell(e), { left: o, right: s, top: c, bottom: l } = this.findCell(t);
		return {
			left: Math.min(n, o),
			top: Math.min(i, c),
			right: Math.max(r, s),
			bottom: Math.max(a, l)
		};
	}
	cellsInRect(e) {
		let t = [], n = {};
		for (let r = e.top; r < e.bottom; r++) for (let i = e.left; i < e.right; i++) {
			let a = r * this.width + i, o = this.map[a];
			n[o] || (n[o] = !0, !(i == e.left && i && this.map[a - 1] == o || r == e.top && r && this.map[a - this.width] == o) && t.push(o));
		}
		return t;
	}
	positionAt(e, t, n) {
		for (let r = 0, i = 0;; r++) {
			let a = i + n.child(r).nodeSize;
			if (r == e) {
				let n = t + e * this.width, r = (e + 1) * this.width;
				for (; n < r && this.map[n] < i;) n++;
				return n == r ? a - 1 : this.map[n];
			}
			i = a;
		}
	}
	static get(e) {
		return f(e) || p(e, h(e));
	}
};
function h(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = ee(e), n = e.childCount, r = [], i = 0, a = null, o = [];
	for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
	for (let s = 0, c = 0; s < n; s++) {
		let l = e.child(s);
		c++;
		for (let e = 0;; e++) {
			for (; i < r.length && r[i] != 0;) i++;
			if (e == l.childCount) break;
			let u = l.child(e), { colspan: d, rowspan: f, colwidth: p } = u.attrs;
			for (let e = 0; e < f; e++) {
				if (e + s >= n) {
					(a ||= []).push({
						type: "overlong_rowspan",
						pos: c,
						n: f - e
					});
					break;
				}
				let l = i + e * t;
				for (let e = 0; e < d; e++) {
					r[l + e] == 0 ? r[l + e] = c : (a ||= []).push({
						type: "collision",
						row: s,
						pos: c,
						n: d - e
					});
					let n = p && p[e];
					if (n) {
						let r = (l + e) % t * 2, i = o[r];
						i == null || i != n && o[r + 1] == 1 ? (o[r] = n, o[r + 1] = 1) : i == n && o[r + 1]++;
					}
				}
			}
			i += d, c += u.nodeSize;
		}
		let u = (s + 1) * t, d = 0;
		for (; i < u;) r[i++] == 0 && d++;
		d && (a ||= []).push({
			type: "missing",
			row: s,
			n: d
		}), c++;
	}
	(t === 0 || n === 0) && (a ||= []).push({ type: "zero_sized" });
	let s = new m(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && te(s, o, e), s;
}
function ee(e) {
	let t = -1, n = !1;
	for (let r = 0; r < e.childCount; r++) {
		let i = e.child(r), a = 0;
		if (n) for (let t = 0; t < r; t++) {
			let n = e.child(t);
			for (let e = 0; e < n.childCount; e++) {
				let i = n.child(e);
				t + i.attrs.rowspan > r && (a += i.attrs.colspan);
			}
		}
		for (let e = 0; e < i.childCount; e++) {
			let t = i.child(e);
			a += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
		}
		t == -1 ? t = a : t != a && (t = Math.max(t, a));
	}
	return t;
}
function te(e, t, n) {
	e.problems ||= [];
	let r = {};
	for (let i = 0; i < e.map.length; i++) {
		let a = e.map[i];
		if (r[a]) continue;
		r[a] = !0;
		let o = n.nodeAt(a);
		if (!o) throw RangeError(`No cell with offset ${a} found`);
		let s = null, c = o.attrs;
		for (let n = 0; n < c.colspan; n++) {
			let r = t[(i + n) % e.width * 2];
			r != null && (!c.colwidth || c.colwidth[n] != r) && ((s ||= ne(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function ne(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function g(e) {
	let t = e.cached.tableNodeTypes;
	if (!t) {
		t = e.cached.tableNodeTypes = {};
		for (let n in e.nodes) {
			let r = e.nodes[n], i = r.spec.tableRole;
			i && (t[i] = r);
		}
	}
	return t;
}
var _ = new n("selectingCells");
function v(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function re(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function y(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function b(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = v(t.$head) || ie(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function ie(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function x(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function ae(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function S(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function C(e, t, n) {
	let r = e.node(-1), i = m.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function w(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function T(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan + n
	};
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
	}
	return r;
}
function oe(e, t, n) {
	let r = g(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var E = class t extends e {
	constructor(e, t = e) {
		let n = e.node(-1), r = m.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new u(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(e, n) {
		let i = e.resolve(n.map(this.$anchorCell.pos)), a = e.resolve(n.map(this.$headCell.pos));
		if (x(i) && x(a) && S(i, a)) {
			let e = this.$anchorCell.node(-1) != i.node(-1);
			return e && this.isRowSelection() ? t.rowSelection(i, a) : e && this.isColSelection() ? t.colSelection(i, a) : new t(i, a);
		}
		return r.between(i, a);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = m.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
		for (let n = r.top; n < r.bottom; n++) {
			let o = [];
			for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
				let n = t.map[a];
				if (i[n]) continue;
				i[n] = !0;
				let s = t.findCell(n), c = e.nodeAt(n);
				if (!c) throw RangeError(`No cell with offset ${n} found`);
				let l = r.left - s.left, u = s.right - r.right;
				if (l > 0 || u > 0) {
					let e = c.attrs;
					if (l > 0 && (e = w(e, 0, l)), u > 0 && (e = w(e, e.colspan - u, u)), s.left < r.left) {
						if (c = c.type.createAndFill(e), !c) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
					} else c = c.type.create(e, c.content);
				}
				if (s.top < r.top || s.bottom > r.bottom) {
					let e = {
						...c.attrs,
						rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
					};
					c = s.top < r.top ? c.type.createAndFill(e) : c.type.create(e, c.content);
				}
				o.push(c);
			}
			a.push(e.child(n).copy(c.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new s(c.from(o), 1, 1);
	}
	replace(t, n = s.empty) {
		let r = t.steps.length, i = this.ranges;
		for (let e = 0; e < i.length; e++) {
			let { $from: a, $to: o } = i[e], c = t.mapping.slice(r);
			t.replace(c.map(a.pos), c.map(o.pos), e ? s.empty : n);
		}
		let a = e.findFrom(t.doc.resolve(t.mapping.slice(r).map(this.to)), -1);
		a && t.setSelection(a);
	}
	replaceWith(e, t) {
		this.replace(e, new s(c.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = m.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(e, n = e) {
		let r = e.node(-1), i = m.get(r), a = e.start(-1), o = i.findCell(e.pos - a), s = i.findCell(n.pos - a), c = e.node(0);
		return o.top <= s.top ? (o.top > 0 && (e = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (e = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new t(e, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = m.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(e) {
		return e instanceof t && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(e, n = e) {
		let r = e.node(-1), i = m.get(r), a = e.start(-1), o = i.findCell(e.pos - a), s = i.findCell(n.pos - a), c = e.node(0);
		return o.left <= s.left ? (o.left > 0 && (e = c.resolve(a + i.map[o.top * i.width])), s.right < i.width && (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])), o.right < i.width && (e = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))), new t(e, n);
	}
	toJSON() {
		return {
			type: "cell",
			anchor: this.$anchorCell.pos,
			head: this.$headCell.pos
		};
	}
	static fromJSON(e, n) {
		return new t(e.resolve(n.anchor), e.resolve(n.head));
	}
	static create(e, n, r = n) {
		return new t(e.resolve(n), e.resolve(r));
	}
	getBookmark() {
		return new se(this.$anchorCell.pos, this.$headCell.pos);
	}
};
E.prototype.visible = !1, e.jsonID("cell", E);
var se = class t {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(e) {
		return new t(e.map(this.anchor), e.map(this.head));
	}
	resolve(t) {
		let n = t.resolve(this.anchor), r = t.resolve(this.head);
		return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && S(n, r) ? new E(n, r) : e.near(r, 1);
	}
};
function ce(e) {
	if (!(e.selection instanceof E)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(i.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), l.create(e.doc, t);
}
function le({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function ue({ $from: e, $to: t }) {
	let n, r;
	for (let t = e.depth; t > 0; t--) {
		let r = e.node(t);
		if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
			n = r;
			break;
		}
	}
	for (let e = t.depth; e > 0; e--) {
		let n = t.node(e);
		if (n.type.spec.tableRole === "cell" || n.type.spec.tableRole === "header_cell") {
			r = n;
			break;
		}
	}
	return n !== r && t.parentOffset === 0;
}
function de(e, t, n) {
	let i = (t || e).selection, o = (t || e).doc, s, c;
	if (i instanceof a && (c = i.node.type.spec.tableRole)) {
		if (c == "cell" || c == "header_cell") s = E.create(o, i.from);
		else if (c == "row") {
			let e = o.resolve(i.from + 1);
			s = E.rowSelection(e, e);
		} else if (!n) {
			let e = m.get(i.node), t = i.from + 1, n = t + e.map[e.width * e.height - 1];
			s = E.create(o, t + 1, n);
		}
	} else i instanceof r && le(i) ? s = r.create(o, i.from) : i instanceof r && ue(i) && (s = r.create(o, i.$from.start(), i.$from.end()));
	return s && (t ||= e.tr).setSelection(s), t;
}
var fe = new n("fix-tables");
function D(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? D(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function O(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = pe(e, t, r, n));
	};
	return t ? t.doc != e.doc && D(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function pe(e, t, n, r) {
	let i = m.get(t);
	if (!i.problems) return r;
	r ||= e.tr;
	let a = [];
	for (let e = 0; e < i.height; e++) a.push(0);
	for (let e = 0; e < i.problems.length; e++) {
		let o = i.problems[e];
		if (o.type == "collision") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			let i = e.attrs;
			for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, w(i, i.colspan - o.n, o.n));
		} else if (o.type == "missing") a[o.row] += o.n;
		else if (o.type == "overlong_rowspan") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				rowspan: e.attrs.rowspan - o.n
			});
		} else if (o.type == "colwidth mismatch") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				colwidth: o.colwidth
			});
		} else if (o.type == "zero_sized") {
			let e = r.mapping.map(n);
			r.delete(e, e + t.nodeSize);
		}
	}
	let o, s;
	for (let e = 0; e < a.length; e++) a[e] && (o ??= e, s = e);
	for (let c = 0, l = n + 1; c < i.height; c++) {
		let n = t.child(c), i = l + n.nodeSize, u = a[c];
		if (u > 0) {
			let t = "cell";
			n.firstChild && (t = n.firstChild.type.spec.tableRole);
			let a = [];
			for (let n = 0; n < u; n++) {
				let n = g(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(fe, { fixTables: !0 });
}
function k(e) {
	let t = e.selection, n = b(e), r = n.node(-1), i = n.start(-1), a = m.get(r);
	return {
		...t instanceof E ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function A(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	oe(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, T(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? g(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function me(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e);
		t(A(e.tr, n, n.left));
	}
	return !0;
}
function he(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e);
		t(A(e.tr, n, n.right));
	}
	return !0;
}
function ge(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, w(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function _e(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; ge(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = m.get(e);
		}
		t(r);
	}
	return !0;
}
function ve(e, t, n) {
	let r = g(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function j(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	ve(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? g(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, g(r.type.schema).row.create(null, o)), e;
}
function ye(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e);
		t(j(e.tr, n, n.top));
	}
	return !0;
}
function be(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e);
		t(j(e.tr, n, n.bottom));
	}
	return !0;
}
function xe(e, { map: t, table: n, tableStart: r }, i) {
	let a = 0;
	for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
	let o = a + n.child(i).nodeSize, s = e.mapping.maps.length;
	e.delete(a + r, o + r);
	let c = /* @__PURE__ */ new Set();
	for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
		let l = t.map[o];
		if (!c.has(l)) {
			if (c.add(l), i > 0 && l == t.map[o - t.width]) {
				let t = n.nodeAt(l).attrs;
				e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
					...t,
					rowspan: t.rowspan - 1
				}), a += t.colspan - 1;
			} else if (i < t.height && l == t.map[o + t.width]) {
				let o = n.nodeAt(l), c = o.attrs, u = o.type.create({
					...c,
					rowspan: o.attrs.rowspan - 1
				}, o.content), d = t.positionAt(i + 1, a, n);
				e.insert(e.mapping.slice(s).map(r + d), u), a += c.colspan - 1;
			}
		}
	}
}
function M(e, t) {
	if (!y(e)) return !1;
	if (t) {
		let n = k(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; xe(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = m.get(n.table);
		}
		t(r);
	}
	return !0;
}
function N(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function Se({ width: e, height: t, map: n }, r) {
	let i = r.top * e + r.left, a = i, o = (r.bottom - 1) * e + r.left, s = i + (r.right - r.left - 1);
	for (let t = r.top; t < r.bottom; t++) {
		if (r.left > 0 && n[a] == n[a - 1] || r.right < e && n[s] == n[s + 1]) return !0;
		a += e, s += e;
	}
	for (let a = r.left; a < r.right; a++) {
		if (r.top > 0 && n[i] == n[i - e] || r.bottom < t && n[o] == n[o + e]) return !0;
		i++, o++;
	}
	return !1;
}
function Ce(e, t) {
	let n = e.selection;
	if (!(n instanceof E) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = k(e), { map: i } = r;
	if (Se(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = c.empty, s, l;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let c = i.map[e * i.width + t], u = r.table.nodeAt(c);
			if (!(a[c] || !u)) if (a[c] = !0, s == null) s = c, l = u;
			else {
				N(u) || (o = o.append(u.content));
				let e = n.mapping.map(c + r.tableStart);
				n.delete(e, e + u.nodeSize);
			}
		}
		if (s == null || l == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...T(l.attrs, l.attrs.colspan, r.right - r.left - l.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + l.content.size, t = N(l) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new E(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function we(e, t) {
	let n = g(e.schema);
	return Te(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function Te(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof E) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = re(r.$from), !i) return !1;
			a = v(r.$from)?.pos;
		}
		if (i == null || a == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
		if (n) {
			let o = i.attrs, s = [], c = o.colwidth;
			o.rowspan > 1 && (o = {
				...o,
				rowspan: 1
			}), o.colspan > 1 && (o = {
				...o,
				colspan: 1
			});
			let l = k(t), u = t.tr;
			for (let e = 0; e < l.right - l.left; e++) s.push(c ? {
				...o,
				colwidth: c && c[e] ? [c[e]] : null
			} : o);
			let d;
			for (let t = l.top; t < l.bottom; t++) {
				let n = l.map.positionAt(t, l.left, l.table);
				t == l.top && (n += i.nodeSize);
				for (let r = l.left, a = 0; r < l.right; r++, a++) r == l.left && t == l.top || u.insert(d = u.mapping.map(n + l.tableStart, 1), e({
					node: i,
					row: t,
					col: r
				}).createAndFill(s[a]));
			}
			u.setNodeMarkup(a, e({
				node: i,
				row: l.top,
				col: l.left
			}), s[0]), r instanceof E && u.setSelection(new E(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function Ee(e, t) {
	return function(n, r) {
		if (!y(n)) return !1;
		let i = b(n);
		if (i.nodeAfter.attrs[e] === t) return !1;
		if (r) {
			let a = n.tr;
			n.selection instanceof E ? n.selection.forEachCell((n, r) => {
				n.attrs[e] !== t && a.setNodeMarkup(r, null, {
					...n.attrs,
					[e]: t
				});
			}) : a.setNodeMarkup(i.pos, null, {
				...i.nodeAfter.attrs,
				[e]: t
			}), r(a);
		}
		return !0;
	};
}
function De(e) {
	return function(t, n) {
		if (!y(t)) return !1;
		if (n) {
			let r = g(t.schema), i = k(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
				left: i.left,
				top: 0,
				right: i.right,
				bottom: i.map.height
			} : e == "row" ? {
				left: 0,
				top: i.top,
				right: i.map.width,
				bottom: i.bottom
			} : i), s = o.map((e) => i.table.nodeAt(e));
			for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
			if (a.steps.length === 0) for (let e = 0; e < o.length; e++) a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
			n(a);
		}
		return !0;
	};
}
function P(e, t, n) {
	let r = t.map.cellsInRect({
		left: 0,
		top: 0,
		right: e == "row" ? t.map.width : 1,
		bottom: e == "column" ? t.map.height : 1
	});
	for (let e = 0; e < r.length; e++) {
		let i = t.table.nodeAt(r[e]);
		if (i && i.type !== n.header_cell) return !1;
	}
	return !0;
}
function F(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? De(e) : function(t, n) {
		if (!y(t)) return !1;
		if (n) {
			let r = g(t.schema), i = k(t), a = t.tr, o = P("row", i, r), s = P("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
				left: 0,
				top: c,
				right: 1,
				bottom: i.map.height
			} : e == "row" ? {
				left: c,
				top: 0,
				right: i.map.width,
				bottom: 1
			} : i, u = e == "column" ? s ? r.cell : r.header_cell : e == "row" ? o ? r.cell : r.header_cell : r.cell;
			i.map.cellsInRect(l).forEach((e) => {
				let t = e + i.tableStart, n = a.doc.nodeAt(t);
				n && a.setNodeMarkup(t, u, n.attrs);
			}), n(a);
		}
		return !0;
	};
}
F("row", { useDeprecatedLogic: !0 }), F("column", { useDeprecatedLogic: !0 });
var Oe = F("cell", { useDeprecatedLogic: !0 });
function ke(e, t) {
	if (t < 0) {
		let t = e.nodeBefore;
		if (t) return e.pos - t.nodeSize;
		for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
			let r = e.node(-1).child(t), i = r.lastChild;
			if (i) return n - 1 - i.nodeSize;
			n -= r.nodeSize;
		}
	} else {
		if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
		let t = e.node(-1);
		for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
			let e = t.child(n);
			if (e.childCount) return r + 1;
			r += e.nodeSize;
		}
	}
	return null;
}
function Ae(e) {
	return function(t, n) {
		if (!y(t)) return !1;
		let i = ke(b(t), e);
		if (i == null) return !1;
		if (n) {
			let e = t.doc.resolve(i);
			n(t.tr.setSelection(r.between(e, ae(e))).scrollIntoView());
		}
		return !0;
	};
}
function je(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function I(e, t) {
	let n = e.selection;
	if (!(n instanceof E)) return !1;
	if (t) {
		let r = e.tr, i = g(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new s(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function Me(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, c = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), l = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || l) && (i = L(g(o).row, new s(i, a, l)).content), c.push(i);
	}
	else if (a == "cell" || a == "header_cell") c.push(n || r ? L(g(o).row, new s(t, n, r)).content : t);
	else return null;
	return Ne(o, c);
}
function Ne(e, t) {
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		for (let t = r.childCount - 1; t >= 0; t--) {
			let { rowspan: i, colspan: a } = r.child(t).attrs;
			for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
		}
	}
	let r = 0;
	for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(c.empty), n[i] < r) {
		let a = g(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(c.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function L(e, n) {
	let r = e.createAndFill();
	return new t(r).replace(0, r.content.size, n).doc;
}
function Pe({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(w(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(c.from(o));
		}
		n = i, e = r;
	}
	if (t != i) {
		let e = [];
		for (let r = 0, a = 0; r < i; r++, a++) {
			let o = [], s = n[a % t];
			for (let e = 0; e < s.childCount; e++) {
				let t = s.child(e);
				r + t.attrs.rowspan > i && (t = t.type.create({
					...t.attrs,
					rowspan: Math.max(1, i - t.attrs.rowspan)
				}, t.content)), o.push(t);
			}
			e.push(c.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function Fe(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, l = g(s), u, d;
	if (i > t.width) for (let a = 0, s = 0; a < t.height; a++) {
		let c = n.child(a);
		s += c.nodeSize;
		let f = [], p;
		p = c.lastChild == null || c.lastChild.type == l.cell ? u ||= l.cell.createAndFill() : d ||= l.header_cell.createAndFill();
		for (let e = t.width; e < i; e++) f.push(p);
		e.insert(e.mapping.slice(o).map(s - 1 + r), f);
	}
	if (a > t.height) {
		let s = [];
		for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, i); e++) {
			let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == l.header_cell;
			s.push(i ? d ||= l.header_cell.createAndFill() : u ||= l.cell.createAndFill());
		}
		let f = l.row.create(null, c.from(s)), p = [];
		for (let e = t.height; e < a; e++) p.push(f);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), p);
	}
	return !!(u || d);
}
function R(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.height) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = o * t.width + l, a = t.map[i];
		if (t.map[i - t.width] == a) {
			c = !0;
			let i = n.nodeAt(a), { top: u, left: d } = t.findCell(a);
			e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
				...i.attrs,
				rowspan: o - u
			}), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), i.type.createAndFill({
				...i.attrs,
				rowspan: u + i.attrs.rowspan - o
			})), l += i.attrs.colspan - 1;
		}
	}
	return c;
}
function z(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, w(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(w(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function B(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = m.get(a), { top: c, left: l } = r, u = l + i.width, d = c + i.height, f = e.tr, p = 0;
	function h() {
		if (a = n ? f.doc.nodeAt(n - 1) : f.doc, !a) throw Error("No table found");
		o = m.get(a), p = f.mapping.maps.length;
	}
	Fe(f, o, a, n, u, d, p) && h(), R(f, o, a, n, l, u, c, p) && h(), R(f, o, a, n, l, u, d, p) && h(), z(f, o, a, n, c, d, l, p) && h(), z(f, o, a, n, c, d, u, p) && h();
	for (let e = c; e < d; e++) {
		let t = o.positionAt(e, l, a), r = o.positionAt(e, u, a);
		f.replace(f.mapping.slice(p).map(t + n), f.mapping.slice(p).map(r + n), new s(i.rows[e - c], 0, 0));
	}
	h(), f.setSelection(new E(f.doc.resolve(n + o.positionAt(c, l, a)), f.doc.resolve(n + o.positionAt(d - 1, u - 1, a)))), t(f);
}
var Ie = o({
	ArrowLeft: H("horiz", -1),
	ArrowRight: H("horiz", 1),
	ArrowUp: H("vert", -1),
	ArrowDown: H("vert", 1),
	"Shift-ArrowLeft": U("horiz", -1),
	"Shift-ArrowRight": U("horiz", 1),
	"Shift-ArrowUp": U("vert", -1),
	"Shift-ArrowDown": U("vert", 1),
	Backspace: I,
	"Mod-Backspace": I,
	Delete: I,
	"Mod-Delete": I
});
function V(e, t, n) {
	return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function H(t, n) {
	return (r, i, a) => {
		if (!a) return !1;
		let o = r.selection;
		if (o instanceof E) return V(r, i, e.near(o.$headCell, n));
		if (t != "horiz" && !o.empty) return !1;
		let s = W(a, t, n);
		if (s == null) return !1;
		if (t == "horiz") return V(r, i, e.near(r.doc.resolve(o.head + n), n));
		{
			let a = r.doc.resolve(s), o = C(a, t, n), c;
			return c = o ? e.near(o, 1) : n < 0 ? e.near(r.doc.resolve(a.before(-1)), -1) : e.near(r.doc.resolve(a.after(-1)), 1), V(r, i, c);
		}
	};
}
function U(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof E) o = a;
		else {
			let r = W(i, e, t);
			if (r == null) return !1;
			o = new E(n.doc.resolve(r));
		}
		let s = C(o.$headCell, e, t);
		return s ? V(n, r, new E(o.$anchorCell, s)) : !1;
	};
}
function Le(e, t) {
	let n = e.state.doc, r = v(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new E(r))), !0) : !1;
}
function Re(e, t, n) {
	if (!y(e.state)) return !1;
	let r = Me(n), i = e.state.selection;
	if (i instanceof E) {
		r ||= {
			width: 1,
			height: 1,
			rows: [c.from(L(g(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = m.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = Pe(r, o.right - o.left, o.bottom - o.top), B(e.state, e.dispatch, a, o, r), !0;
	} else if (r) {
		let t = b(e.state), n = t.start(-1);
		return B(e.state, e.dispatch, n, m.get(t.node(-1)).findCell(t.pos - n), r), !0;
	} else return !1;
}
function ze(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = G(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof E) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = v(e.state.selection.$anchor)) != null && K(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = K(e, n), i = _.getState(e.state) == null;
		if (!r || !S(t, r)) if (i) r = t;
		else return;
		let a = new E(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(_, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), _.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(_, -1));
	}
	function o(r) {
		let o = r, s = _.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (G(e, o.target) != n && (c = K(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function W(e, t, n) {
	if (!(e.state.selection instanceof r)) return null;
	let { $head: i } = e.state.selection;
	for (let r = i.depth - 1; r >= 0; r--) {
		let a = i.node(r);
		if ((n < 0 ? i.index(r) : i.indexAfter(r)) != (n < 0 ? 0 : a.childCount)) return null;
		if (a.type.spec.tableRole == "cell" || a.type.spec.tableRole == "header_cell") {
			let a = i.before(r), o = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
			return e.endOfTextblock(o) ? a : null;
		}
	}
	return null;
}
function G(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function K(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && v(e.state.doc.resolve(r)) || v(e.state.doc.resolve(i));
}
var Be = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), q(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type ? (this.node = e, q(e, this.colgroup, this.table, this.defaultCellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function q(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l) {
		for (let e = 0, n = 0; e < l.childCount; e++) {
			let { colspan: u, colwidth: d } = l.child(e).attrs;
			for (let e = 0; e < u; e++, n++) {
				let l = i == n ? a : d && d[e], u = l ? l + "px" : "";
				if (o += l || r, l || (s = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;
				else {
					let e = document.createElement("col");
					e.style.width = u, t.appendChild(e);
				}
			}
		}
		for (; c;) {
			var u;
			let e = c.nextSibling;
			(u = c.parentNode) == null || u.removeChild(c), c = e;
		}
		s ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
	}
}
var J = new n("tableColumnResizing");
function Ve({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = Be, lastColumnResizable: i = !0 } = {}) {
	let a = new d({
		key: J,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = g(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new He(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = J.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					Ue(t, n, e, i);
				},
				mouseleave: (e) => {
					We(e);
				},
				mousedown: (e, r) => {
					Ge(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = J.getState(e);
				if (t && t.activeHandle > -1) return Ye(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var He = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(J);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return x(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function Ue(e, t, n, r) {
	if (!e.editable) return;
	let i = J.getState(e.state);
	if (i && !i.dragging) {
		let a = Ke(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = X(e, t, "left", n) : i - t.clientX <= n && (o = X(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = m.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			Q(e, o);
		}
	}
}
function We(e) {
	if (!e.editable) return;
	let t = J.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && Q(e, -1);
}
function Ge(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = J.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = Y(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(J, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = J.getState(e.state);
		r?.dragging && (qe(e, r.activeHandle, Z(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(J, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = J.getState(e.state);
		if (i && i.dragging) {
			let a = Z(i.dragging, t, n);
			$(e, i.activeHandle, a, r);
		}
	}
	return $(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function Y(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function Ke(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function X(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = v(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = m.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function Z(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function Q(e, t) {
	e.dispatch(e.state.tr.setMeta(J, { setHandle: t }));
}
function qe(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = m.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : Je(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function $(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = m.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && q(a, c.firstChild, c, r, s, n);
}
function Je(e) {
	return Array(e).fill(0);
}
function Ye(e, t) {
	let n = [], r = e.doc.resolve(t), a = r.node(-1);
	if (!a) return l.empty;
	let o = m.get(a), s = r.start(-1), c = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < o.height; t++) {
		let r = c + t * o.width;
		if ((c == o.width - 1 || o.map[r] != o.map[r + 1]) && (t == 0 || o.map[r] != o.map[r - o.width])) {
			let t = o.map[r], c = s + t + a.nodeAt(t).nodeSize - 1, l = document.createElement("div");
			l.className = "column-resize-handle", J.getState(e)?.dragging && n.push(i.node(s + t, s + t + a.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(i.widget(c, l));
		}
	}
	return l.create(e.doc, n);
}
function Xe({ allowTableNodeSelection: e = !1 } = {}) {
	return new d({
		key: _,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(_);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: ce,
			handleDOMEvents: { mousedown: ze },
			createSelectionBetween(e) {
				return _.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: Le,
			handleKeyDown: Ie,
			handlePaste: Re
		},
		appendTransaction(t, n, r) {
			return de(r, O(r, n), e);
		}
	});
}
//#endregion
export { Oe as _, ye as a, M as c, Ae as d, Ce as f, F as g, Xe as h, be as i, je as l, we as m, he as n, Ve as o, Ee as p, me as r, _e as s, E as t, O as u };
