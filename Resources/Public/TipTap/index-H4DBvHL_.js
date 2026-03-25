import { a as Z, b as M, bc as ye, T as E, e as Se, F as R, S as z, P as fe, D as X, c as q, N as Ae, bd as Re } from "./index-oLzXX581.js";
let U, J;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  U = (e) => t.get(e), J = (e, o) => (t.set(e, o), o);
} else {
  const t = [];
  let o = 0;
  U = (n) => {
    for (let l = 0; l < t.length; l += 2) if (t[l] == n) return t[l + 1];
  }, J = (n, l) => (o == 10 && (o = 0), t[o++] = n, t[o++] = l);
}
var C = class {
  constructor(t, e, o, n) {
    this.width = t, this.height = e, this.map = o, this.problems = n;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const o = this.map[e];
      if (o != t) continue;
      const n = e % this.width, l = e / this.width | 0;
      let s = n + 1, r = l + 1;
      for (let c = 1; s < this.width && this.map[e + c] == o; c++) s++;
      for (let c = 1; r < this.height && this.map[e + this.width * c] == o; c++) r++;
      return {
        left: n,
        top: l,
        right: s,
        bottom: r
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, o) {
    const { left: n, right: l, top: s, bottom: r } = this.findCell(t);
    return e == "horiz" ? (o < 0 ? n == 0 : l == this.width) ? null : this.map[s * this.width + (o < 0 ? n - 1 : l)] : (o < 0 ? s == 0 : r == this.height) ? null : this.map[n + this.width * (o < 0 ? s - 1 : r)];
  }
  rectBetween(t, e) {
    const { left: o, right: n, top: l, bottom: s } = this.findCell(t), { left: r, right: c, top: i, bottom: a } = this.findCell(e);
    return {
      left: Math.min(o, r),
      top: Math.min(l, i),
      right: Math.max(n, c),
      bottom: Math.max(s, a)
    };
  }
  cellsInRect(t) {
    const e = [], o = {};
    for (let n = t.top; n < t.bottom; n++) for (let l = t.left; l < t.right; l++) {
      const s = n * this.width + l, r = this.map[s];
      o[r] || (o[r] = !0, !(l == t.left && l && this.map[s - 1] == r || n == t.top && n && this.map[s - this.width] == r) && e.push(r));
    }
    return e;
  }
  positionAt(t, e, o) {
    for (let n = 0, l = 0; ; n++) {
      const s = l + o.child(n).nodeSize;
      if (n == t) {
        let r = e + t * this.width;
        const c = (t + 1) * this.width;
        for (; r < c && this.map[r] < l; ) r++;
        return r == c ? s - 1 : this.map[r];
      }
      l = s;
    }
  }
  static get(t) {
    return U(t) || J(t, xe(t));
  }
};
function xe(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = ve(t), o = t.childCount, n = [];
  let l = 0, s = null;
  const r = [];
  for (let a = 0, d = e * o; a < d; a++) n[a] = 0;
  for (let a = 0, d = 0; a < o; a++) {
    const f = t.child(a);
    d++;
    for (let p = 0; ; p++) {
      for (; l < n.length && n[l] != 0; ) l++;
      if (p == f.childCount) break;
      const m = f.child(p), { colspan: g, rowspan: b, colwidth: B } = m.attrs;
      for (let H = 0; H < b; H++) {
        if (H + a >= o) {
          (s || (s = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: b - H
          });
          break;
        }
        const _ = l + H * e;
        for (let k = 0; k < g; k++) {
          n[_ + k] == 0 ? n[_ + k] = d : (s || (s = [])).push({
            type: "collision",
            row: a,
            pos: d,
            n: g - k
          });
          const $ = B && B[k];
          if ($) {
            const L = (_ + k) % e * 2, K = r[L];
            K == null || K != $ && r[L + 1] == 1 ? (r[L] = $, r[L + 1] = 1) : K == $ && r[L + 1]++;
          }
        }
      }
      l += g, d += m.nodeSize;
    }
    const u = (a + 1) * e;
    let h = 0;
    for (; l < u; ) n[l++] == 0 && h++;
    h && (s || (s = [])).push({
      type: "missing",
      row: a,
      n: h
    }), d++;
  }
  (e === 0 || o === 0) && (s || (s = [])).push({ type: "zero_sized" });
  const c = new C(e, o, n, s);
  let i = !1;
  for (let a = 0; !i && a < r.length; a += 2) r[a] != null && r[a + 1] < o && (i = !0);
  return i && Me(c, r, t), c;
}
function ve(t) {
  let e = -1, o = !1;
  for (let n = 0; n < t.childCount; n++) {
    const l = t.child(n);
    let s = 0;
    if (o) for (let r = 0; r < n; r++) {
      const c = t.child(r);
      for (let i = 0; i < c.childCount; i++) {
        const a = c.child(i);
        r + a.attrs.rowspan > n && (s += a.attrs.colspan);
      }
    }
    for (let r = 0; r < l.childCount; r++) {
      const c = l.child(r);
      s += c.attrs.colspan, c.attrs.rowspan > 1 && (o = !0);
    }
    e == -1 ? e = s : e != s && (e = Math.max(e, s));
  }
  return e;
}
function Me(t, e, o) {
  t.problems || (t.problems = []);
  const n = {};
  for (let l = 0; l < t.map.length; l++) {
    const s = t.map[l];
    if (n[s]) continue;
    n[s] = !0;
    const r = o.nodeAt(s);
    if (!r) throw new RangeError(`No cell with offset ${s} found`);
    let c = null;
    const i = r.attrs;
    for (let a = 0; a < i.colspan; a++) {
      const d = e[(l + a) % t.width * 2];
      d != null && (!i.colwidth || i.colwidth[a] != d) && ((c || (c = Ne(i)))[a] = d);
    }
    c && t.problems.unshift({
      type: "colwidth mismatch",
      pos: s,
      colwidth: c
    });
  }
}
function Ne(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let o = 0; o < t.colspan; o++) e.push(0);
  return e;
}
function y(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const o in t.nodes) {
      const n = t.nodes[o], l = n.spec.tableRole;
      l && (e[l] = n);
    }
  }
  return e;
}
const N = new Z("selectingCells");
function D(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function ze(t) {
  for (let e = t.depth; e > 0; e--) {
    const o = t.node(e).type.spec.tableRole;
    if (o === "cell" || o === "header_cell") return t.node(e);
  }
  return null;
}
function A(t) {
  const e = t.selection.$head;
  for (let o = e.depth; o > 0; o--) if (e.node(o).type.spec.tableRole == "row") return !0;
  return !1;
}
function O(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const o = D(e.$head) || ke(e.$head);
  if (o) return o;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function ke(t) {
  for (let e = t.nodeAfter, o = t.pos; e; e = e.firstChild, o++) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell") return t.doc.resolve(o);
  }
  for (let e = t.nodeBefore, o = t.pos; e; e = e.lastChild, o--) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell") return t.doc.resolve(o - e.nodeSize);
  }
}
function Y(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function Ee(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ee(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function ue(t, e, o) {
  const n = t.node(-1), l = C.get(n), s = t.start(-1), r = l.nextCell(t.pos - s, e, o);
  return r == null ? null : t.node(0).resolve(s + r);
}
function T(t, e, o = 1) {
  const n = {
    ...t,
    colspan: t.colspan - o
  };
  return n.colwidth && (n.colwidth = n.colwidth.slice(), n.colwidth.splice(e, o), n.colwidth.some((l) => l > 0) || (n.colwidth = null)), n;
}
function he(t, e, o = 1) {
  const n = {
    ...t,
    colspan: t.colspan + o
  };
  if (n.colwidth) {
    n.colwidth = n.colwidth.slice();
    for (let l = 0; l < o; l++) n.colwidth.splice(e, 0, 0);
  }
  return n;
}
function Te(t, e, o) {
  const n = y(e.type.schema).header_cell;
  for (let l = 0; l < t.height; l++) if (e.nodeAt(t.map[o + l * t.width]).type != n) return !1;
  return !0;
}
var w = class v extends M {
  constructor(e, o = e) {
    const n = e.node(-1), l = C.get(n), s = e.start(-1), r = l.rectBetween(e.pos - s, o.pos - s), c = e.node(0), i = l.cellsInRect(r).filter((d) => d != o.pos - s);
    i.unshift(o.pos - s);
    const a = i.map((d) => {
      const f = n.nodeAt(d);
      if (!f) throw new RangeError(`No cell with offset ${d} found`);
      const u = s + d + 1;
      return new Se(c.resolve(u), c.resolve(u + f.content.size));
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = e, this.$headCell = o;
  }
  map(e, o) {
    const n = e.resolve(o.map(this.$anchorCell.pos)), l = e.resolve(o.map(this.$headCell.pos));
    if (Y(n) && Y(l) && ee(n, l)) {
      const s = this.$anchorCell.node(-1) != n.node(-1);
      return s && this.isRowSelection() ? v.rowSelection(n, l) : s && this.isColSelection() ? v.colSelection(n, l) : new v(n, l);
    }
    return E.between(n, l);
  }
  content() {
    const e = this.$anchorCell.node(-1), o = C.get(e), n = this.$anchorCell.start(-1), l = o.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), s = {}, r = [];
    for (let i = l.top; i < l.bottom; i++) {
      const a = [];
      for (let d = i * o.width + l.left, f = l.left; f < l.right; f++, d++) {
        const u = o.map[d];
        if (s[u]) continue;
        s[u] = !0;
        const h = o.findCell(u);
        let p = e.nodeAt(u);
        if (!p) throw new RangeError(`No cell with offset ${u} found`);
        const m = l.left - h.left, g = h.right - l.right;
        if (m > 0 || g > 0) {
          let b = p.attrs;
          if (m > 0 && (b = T(b, 0, m)), g > 0 && (b = T(b, b.colspan - g, g)), h.left < l.left) {
            if (p = p.type.createAndFill(b), !p) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
          } else p = p.type.create(b, p.content);
        }
        if (h.top < l.top || h.bottom > l.bottom) {
          const b = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, l.bottom) - Math.max(h.top, l.top)
          };
          h.top < l.top ? p = p.type.createAndFill(b) : p = p.type.create(b, p.content);
        }
        a.push(p);
      }
      r.push(e.child(i).copy(R.from(a)));
    }
    const c = this.isColSelection() && this.isRowSelection() ? e : r;
    return new z(R.from(c), 1, 1);
  }
  replace(e, o = z.empty) {
    const n = e.steps.length, l = this.ranges;
    for (let r = 0; r < l.length; r++) {
      const { $from: c, $to: i } = l[r], a = e.mapping.slice(n);
      e.replace(a.map(c.pos), a.map(i.pos), r ? z.empty : o);
    }
    const s = M.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
    s && e.setSelection(s);
  }
  replaceWith(e, o) {
    this.replace(e, new z(R.from(o), 0, 0));
  }
  forEachCell(e) {
    const o = this.$anchorCell.node(-1), n = C.get(o), l = this.$anchorCell.start(-1), s = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - l, this.$headCell.pos - l));
    for (let r = 0; r < s.length; r++) e(o.nodeAt(s[r]), l + s[r]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), o = this.$headCell.index(-1);
    if (Math.min(e, o) > 0) return !1;
    const n = e + this.$anchorCell.nodeAfter.attrs.rowspan, l = o + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, l) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, o = e) {
    const n = e.node(-1), l = C.get(n), s = e.start(-1), r = l.findCell(e.pos - s), c = l.findCell(o.pos - s), i = e.node(0);
    return r.top <= c.top ? (r.top > 0 && (e = i.resolve(s + l.map[r.left])), c.bottom < l.height && (o = i.resolve(s + l.map[l.width * (l.height - 1) + c.right - 1]))) : (c.top > 0 && (o = i.resolve(s + l.map[c.left])), r.bottom < l.height && (e = i.resolve(s + l.map[l.width * (l.height - 1) + r.right - 1]))), new v(e, o);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), o = C.get(e), n = this.$anchorCell.start(-1), l = o.colCount(this.$anchorCell.pos - n), s = o.colCount(this.$headCell.pos - n);
    if (Math.min(l, s) > 0) return !1;
    const r = l + this.$anchorCell.nodeAfter.attrs.colspan, c = s + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(r, c) == o.width;
  }
  eq(e) {
    return e instanceof v && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, o = e) {
    const n = e.node(-1), l = C.get(n), s = e.start(-1), r = l.findCell(e.pos - s), c = l.findCell(o.pos - s), i = e.node(0);
    return r.left <= c.left ? (r.left > 0 && (e = i.resolve(s + l.map[r.top * l.width])), c.right < l.width && (o = i.resolve(s + l.map[l.width * (c.top + 1) - 1]))) : (c.left > 0 && (o = i.resolve(s + l.map[c.top * l.width])), r.right < l.width && (e = i.resolve(s + l.map[l.width * (r.top + 1) - 1]))), new v(e, o);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, o) {
    return new v(e.resolve(o.anchor), e.resolve(o.head));
  }
  static create(e, o, n = o) {
    return new v(e.resolve(o), e.resolve(n));
  }
  getBookmark() {
    return new De(this.$anchorCell.pos, this.$headCell.pos);
  }
};
w.prototype.visible = !1;
M.jsonID("cell", w);
var De = class pe {
  constructor(e, o) {
    this.anchor = e, this.head = o;
  }
  map(e) {
    return new pe(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const o = e.resolve(this.anchor), n = e.resolve(this.head);
    return o.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && o.index() < o.parent.childCount && n.index() < n.parent.childCount && ee(o, n) ? new w(o, n) : M.near(n, 1);
  }
};
function Be(t) {
  if (!(t.selection instanceof w)) return null;
  const e = [];
  return t.selection.forEachCell((o, n) => {
    e.push(q.node(n, n + o.nodeSize, { class: "selectedCell" }));
  }), X.create(t.doc, e);
}
function He({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let o = t.pos, n = e.pos, l = t.depth;
  for (; l >= 0 && !(t.after(l + 1) < t.end(l)); l--, o++) ;
  for (let s = e.depth; s >= 0 && !(e.before(s + 1) > e.start(s)); s--, n--) ;
  return o == n && /row|table/.test(t.node(l).type.spec.tableRole);
}
function Le({ $from: t, $to: e }) {
  let o, n;
  for (let l = t.depth; l > 0; l--) {
    const s = t.node(l);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      o = s;
      break;
    }
  }
  for (let l = e.depth; l > 0; l--) {
    const s = e.node(l);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      n = s;
      break;
    }
  }
  return o !== n && e.parentOffset === 0;
}
function $e(t, e, o) {
  const n = (e || t).selection, l = (e || t).doc;
  let s, r;
  if (n instanceof Ae && (r = n.node.type.spec.tableRole)) {
    if (r == "cell" || r == "header_cell") s = w.create(l, n.from);
    else if (r == "row") {
      const c = l.resolve(n.from + 1);
      s = w.rowSelection(c, c);
    } else if (!o) {
      const c = C.get(n.node), i = n.from + 1, a = i + c.map[c.width * c.height - 1];
      s = w.create(l, i + 1, a);
    }
  } else n instanceof E && He(n) ? s = E.create(l, n.from) : n instanceof E && Le(n) && (s = E.create(l, n.$from.start(), n.$from.end()));
  return s && (e || (e = t.tr)).setSelection(s), e;
}
const Fe = new Z("fix-tables");
function me(t, e, o, n) {
  const l = t.childCount, s = e.childCount;
  e: for (let r = 0, c = 0; r < s; r++) {
    const i = e.child(r);
    for (let a = c, d = Math.min(l, r + 3); a < d; a++) if (t.child(a) == i) {
      c = a + 1, o += i.nodeSize;
      continue e;
    }
    n(i, o), c < l && t.child(c).sameMarkup(i) ? me(t.child(c), i, o + 1, n) : i.nodesBetween(0, i.content.size, n, o + 1), o += i.nodeSize;
  }
}
function Pe(t, e) {
  let o;
  const n = (l, s) => {
    l.type.spec.tableRole == "table" && (o = We(t, l, s, o));
  };
  return e ? e.doc != t.doc && me(e.doc, t.doc, 0, n) : t.doc.descendants(n), o;
}
function We(t, e, o, n) {
  const l = C.get(e);
  if (!l.problems) return n;
  n || (n = t.tr);
  const s = [];
  for (let i = 0; i < l.height; i++) s.push(0);
  for (let i = 0; i < l.problems.length; i++) {
    const a = l.problems[i];
    if (a.type == "collision") {
      const d = e.nodeAt(a.pos);
      if (!d) continue;
      const f = d.attrs;
      for (let u = 0; u < f.rowspan; u++) s[a.row + u] += a.n;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, T(f, f.colspan - a.n, a.n));
    } else if (a.type == "missing") s[a.row] += a.n;
    else if (a.type == "overlong_rowspan") {
      const d = e.nodeAt(a.pos);
      if (!d) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - a.n
      });
    } else if (a.type == "colwidth mismatch") {
      const d = e.nodeAt(a.pos);
      if (!d) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, {
        ...d.attrs,
        colwidth: a.colwidth
      });
    } else if (a.type == "zero_sized") {
      const d = n.mapping.map(o);
      n.delete(d, d + e.nodeSize);
    }
  }
  let r, c;
  for (let i = 0; i < s.length; i++) s[i] && (r == null && (r = i), c = i);
  for (let i = 0, a = o + 1; i < l.height; i++) {
    const d = e.child(i), f = a + d.nodeSize, u = s[i];
    if (u > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < u; g++) {
        const b = y(t.schema)[h].createAndFill();
        b && p.push(b);
      }
      const m = (i == 0 || r == i - 1) && c == i ? a + 1 : f - 1;
      n.insert(n.mapping.map(m), p);
    }
    a = f;
  }
  return n.setMeta(Fe, { fixTables: !0 });
}
function x(t) {
  const e = t.selection, o = O(t), n = o.node(-1), l = o.start(-1), s = C.get(n);
  return {
    ...e instanceof w ? s.rectBetween(e.$anchorCell.pos - l, e.$headCell.pos - l) : s.findCell(o.pos - l),
    tableStart: l,
    map: s,
    table: n
  };
}
function ge(t, { map: e, tableStart: o, table: n }, l) {
  let s = l > 0 ? -1 : 0;
  Te(e, n, l + s) && (s = l == 0 || l == e.width ? null : 0);
  for (let r = 0; r < e.height; r++) {
    const c = r * e.width + l;
    if (l > 0 && l < e.width && e.map[c - 1] == e.map[c]) {
      const i = e.map[c], a = n.nodeAt(i);
      t.setNodeMarkup(t.mapping.map(o + i), null, he(a.attrs, l - e.colCount(i))), r += a.attrs.rowspan - 1;
    } else {
      const i = s == null ? y(n.type.schema).cell : n.nodeAt(e.map[c + s]).type, a = e.positionAt(r, l, n);
      t.insert(t.mapping.map(o + a), i.createAndFill());
    }
  }
  return t;
}
function ut(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t);
    e(ge(t.tr, o, o.left));
  }
  return !0;
}
function ht(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t);
    e(ge(t.tr, o, o.right));
  }
  return !0;
}
function Ie(t, { map: e, table: o, tableStart: n }, l) {
  const s = t.mapping.maps.length;
  for (let r = 0; r < e.height; ) {
    const c = r * e.width + l, i = e.map[c], a = o.nodeAt(i), d = a.attrs;
    if (l > 0 && e.map[c - 1] == i || l < e.width - 1 && e.map[c + 1] == i) t.setNodeMarkup(t.mapping.slice(s).map(n + i), null, T(d, l - e.colCount(i)));
    else {
      const f = t.mapping.slice(s).map(n + i);
      t.delete(f, f + a.nodeSize);
    }
    r += d.rowspan;
  }
}
function pt(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t), n = t.tr;
    if (o.left == 0 && o.right == o.map.width) return !1;
    for (let l = o.right - 1; Ie(n, o, l), l != o.left; l--) {
      const s = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!s) throw new RangeError("No table found");
      o.table = s, o.map = C.get(s);
    }
    e(n);
  }
  return !0;
}
function je(t, e, o) {
  var n;
  const l = y(e.type.schema).header_cell;
  for (let s = 0; s < t.width; s++) if (((n = e.nodeAt(t.map[s + o * t.width])) === null || n === void 0 ? void 0 : n.type) != l) return !1;
  return !0;
}
function we(t, { map: e, tableStart: o, table: n }, l) {
  let s = o;
  for (let a = 0; a < l; a++) s += n.child(a).nodeSize;
  const r = [];
  let c = l > 0 ? -1 : 0;
  je(e, n, l + c) && (c = l == 0 || l == e.height ? null : 0);
  for (let a = 0, d = e.width * l; a < e.width; a++, d++) if (l > 0 && l < e.height && e.map[d] == e.map[d - e.width]) {
    const f = e.map[d], u = n.nodeAt(f).attrs;
    t.setNodeMarkup(o + f, null, {
      ...u,
      rowspan: u.rowspan + 1
    }), a += u.colspan - 1;
  } else {
    var i;
    const f = c == null ? y(n.type.schema).cell : (i = n.nodeAt(e.map[d + c * e.width])) === null || i === void 0 ? void 0 : i.type, u = f?.createAndFill();
    u && r.push(u);
  }
  return t.insert(s, y(n.type.schema).row.create(null, r)), t;
}
function mt(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t);
    e(we(t.tr, o, o.top));
  }
  return !0;
}
function gt(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t);
    e(we(t.tr, o, o.bottom));
  }
  return !0;
}
function Oe(t, { map: e, table: o, tableStart: n }, l) {
  let s = 0;
  for (let a = 0; a < l; a++) s += o.child(a).nodeSize;
  const r = s + o.child(l).nodeSize, c = t.mapping.maps.length;
  t.delete(s + n, r + n);
  const i = /* @__PURE__ */ new Set();
  for (let a = 0, d = l * e.width; a < e.width; a++, d++) {
    const f = e.map[d];
    if (!i.has(f)) {
      if (i.add(f), l > 0 && f == e.map[d - e.width]) {
        const u = o.nodeAt(f).attrs;
        t.setNodeMarkup(t.mapping.slice(c).map(f + n), null, {
          ...u,
          rowspan: u.rowspan - 1
        }), a += u.colspan - 1;
      } else if (l < e.height && f == e.map[d + e.width]) {
        const u = o.nodeAt(f), h = u.attrs, p = u.type.create({
          ...h,
          rowspan: u.attrs.rowspan - 1
        }, u.content), m = e.positionAt(l + 1, a, o);
        t.insert(t.mapping.slice(c).map(n + m), p), a += h.colspan - 1;
      }
    }
  }
}
function wt(t, e) {
  if (!A(t)) return !1;
  if (e) {
    const o = x(t), n = t.tr;
    if (o.top == 0 && o.bottom == o.map.height) return !1;
    for (let l = o.bottom - 1; Oe(n, o, l), l != o.top; l--) {
      const s = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!s) throw new RangeError("No table found");
      o.table = s, o.map = C.get(o.table);
    }
    e(n);
  }
  return !0;
}
function oe(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function _e({ width: t, height: e, map: o }, n) {
  let l = n.top * t + n.left, s = l, r = (n.bottom - 1) * t + n.left, c = l + (n.right - n.left - 1);
  for (let i = n.top; i < n.bottom; i++) {
    if (n.left > 0 && o[s] == o[s - 1] || n.right < t && o[c] == o[c + 1]) return !0;
    s += t, c += t;
  }
  for (let i = n.left; i < n.right; i++) {
    if (n.top > 0 && o[l] == o[l - t] || n.bottom < e && o[r] == o[r + t]) return !0;
    l++, r++;
  }
  return !1;
}
function Ct(t, e) {
  const o = t.selection;
  if (!(o instanceof w) || o.$anchorCell.pos == o.$headCell.pos) return !1;
  const n = x(t), { map: l } = n;
  if (_e(l, n)) return !1;
  if (e) {
    const s = t.tr, r = {};
    let c = R.empty, i, a;
    for (let d = n.top; d < n.bottom; d++) for (let f = n.left; f < n.right; f++) {
      const u = l.map[d * l.width + f], h = n.table.nodeAt(u);
      if (!(r[u] || !h))
        if (r[u] = !0, i == null)
          i = u, a = h;
        else {
          oe(h) || (c = c.append(h.content));
          const p = s.mapping.map(u + n.tableStart);
          s.delete(p, p + h.nodeSize);
        }
    }
    if (i == null || a == null) return !0;
    if (s.setNodeMarkup(i + n.tableStart, null, {
      ...he(a.attrs, a.attrs.colspan, n.right - n.left - a.attrs.colspan),
      rowspan: n.bottom - n.top
    }), c.size > 0) {
      const d = i + 1 + a.content.size, f = oe(a) ? i + 1 : d;
      s.replaceWith(f + n.tableStart, d + n.tableStart, c);
    }
    s.setSelection(new w(s.doc.resolve(i + n.tableStart))), e(s);
  }
  return !0;
}
function bt(t, e) {
  const o = y(t.schema);
  return Ke(({ node: n }) => o[n.type.spec.tableRole])(t, e);
}
function Ke(t) {
  return (e, o) => {
    const n = e.selection;
    let l, s;
    if (n instanceof w) {
      if (n.$anchorCell.pos != n.$headCell.pos) return !1;
      l = n.$anchorCell.nodeAfter, s = n.$anchorCell.pos;
    } else {
      var r;
      if (l = ze(n.$from), !l) return !1;
      s = (r = D(n.$from)) === null || r === void 0 ? void 0 : r.pos;
    }
    if (l == null || s == null || l.attrs.colspan == 1 && l.attrs.rowspan == 1) return !1;
    if (o) {
      let c = l.attrs;
      const i = [], a = c.colwidth;
      c.rowspan > 1 && (c = {
        ...c,
        rowspan: 1
      }), c.colspan > 1 && (c = {
        ...c,
        colspan: 1
      });
      const d = x(e), f = e.tr;
      for (let h = 0; h < d.right - d.left; h++) i.push(a ? {
        ...c,
        colwidth: a && a[h] ? [a[h]] : null
      } : c);
      let u;
      for (let h = d.top; h < d.bottom; h++) {
        let p = d.map.positionAt(h, d.left, d.table);
        h == d.top && (p += l.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && h == d.top || f.insert(u = f.mapping.map(p + d.tableStart, 1), t({
            node: l,
            row: h,
            col: m
          }).createAndFill(i[g]));
      }
      f.setNodeMarkup(s, t({
        node: l,
        row: d.top,
        col: d.left
      }), i[0]), n instanceof w && f.setSelection(new w(f.doc.resolve(n.$anchorCell.pos), u ? f.doc.resolve(u) : void 0)), o(f);
    }
    return !0;
  };
}
function yt(t, e) {
  return function(o, n) {
    if (!A(o)) return !1;
    const l = O(o);
    if (l.nodeAfter.attrs[t] === e) return !1;
    if (n) {
      const s = o.tr;
      o.selection instanceof w ? o.selection.forEachCell((r, c) => {
        r.attrs[t] !== e && s.setNodeMarkup(c, null, {
          ...r.attrs,
          [t]: e
        });
      }) : s.setNodeMarkup(l.pos, null, {
        ...l.nodeAfter.attrs,
        [t]: e
      }), n(s);
    }
    return !0;
  };
}
function Ve(t) {
  return function(e, o) {
    if (!A(e)) return !1;
    if (o) {
      const n = y(e.schema), l = x(e), s = e.tr, r = l.map.cellsInRect(t == "column" ? {
        left: l.left,
        top: 0,
        right: l.right,
        bottom: l.map.height
      } : t == "row" ? {
        left: 0,
        top: l.top,
        right: l.map.width,
        bottom: l.bottom
      } : l), c = r.map((i) => l.table.nodeAt(i));
      for (let i = 0; i < r.length; i++) c[i].type == n.header_cell && s.setNodeMarkup(l.tableStart + r[i], n.cell, c[i].attrs);
      if (s.steps.length === 0) for (let i = 0; i < r.length; i++) s.setNodeMarkup(l.tableStart + r[i], n.header_cell, c[i].attrs);
      o(s);
    }
    return !0;
  };
}
function ne(t, e, o) {
  const n = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let l = 0; l < n.length; l++) {
    const s = e.table.nodeAt(n[l]);
    if (s && s.type !== o.header_cell) return !1;
  }
  return !0;
}
function te(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Ve(t) : function(o, n) {
    if (!A(o)) return !1;
    if (n) {
      const l = y(o.schema), s = x(o), r = o.tr, c = ne("row", s, l), i = ne("column", s, l), a = (t === "column" ? c : t === "row" && i) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: a,
        right: 1,
        bottom: s.map.height
      } : t == "row" ? {
        left: a,
        top: 0,
        right: s.map.width,
        bottom: 1
      } : s, f = t == "column" ? i ? l.cell : l.header_cell : t == "row" ? c ? l.cell : l.header_cell : l.cell;
      s.map.cellsInRect(d).forEach((u) => {
        const h = u + s.tableStart, p = r.doc.nodeAt(h);
        p && r.setNodeMarkup(h, f, p.attrs);
      }), n(r);
    }
    return !0;
  };
}
te("row", { useDeprecatedLogic: !0 });
te("column", { useDeprecatedLogic: !0 });
const St = te("cell", { useDeprecatedLogic: !0 });
function Xe(t, e) {
  if (e < 0) {
    const o = t.nodeBefore;
    if (o) return t.pos - o.nodeSize;
    for (let n = t.index(-1) - 1, l = t.before(); n >= 0; n--) {
      const s = t.node(-1).child(n), r = s.lastChild;
      if (r) return l - 1 - r.nodeSize;
      l -= s.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const o = t.node(-1);
    for (let n = t.indexAfter(-1), l = t.after(); n < o.childCount; n++) {
      const s = o.child(n);
      if (s.childCount) return l + 1;
      l += s.nodeSize;
    }
  }
  return null;
}
function At(t) {
  return function(e, o) {
    if (!A(e)) return !1;
    const n = Xe(O(e), t);
    if (n == null) return !1;
    if (o) {
      const l = e.doc.resolve(n);
      o(e.tr.setSelection(E.between(l, Ee(l))).scrollIntoView());
    }
    return !0;
  };
}
function Rt(t, e) {
  const o = t.selection.$anchor;
  for (let n = o.depth; n > 0; n--) if (o.node(n).type.spec.tableRole == "table")
    return e && e(t.tr.delete(o.before(n), o.after(n)).scrollIntoView()), !0;
  return !1;
}
function F(t, e) {
  const o = t.selection;
  if (!(o instanceof w)) return !1;
  if (e) {
    const n = t.tr, l = y(t.schema).cell.createAndFill().content;
    o.forEachCell((s, r) => {
      s.content.eq(l) || n.replace(n.mapping.map(r + 1), n.mapping.map(r + s.nodeSize - 1), new z(l, 0, 0));
    }), n.docChanged && e(n);
  }
  return !0;
}
function qe(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: o, openEnd: n } = t;
  for (; e.childCount == 1 && (o > 0 && n > 0 || e.child(0).type.spec.tableRole == "table"); )
    o--, n--, e = e.child(0).content;
  const l = e.child(0), s = l.type.spec.tableRole, r = l.type.schema, c = [];
  if (s == "row") for (let i = 0; i < e.childCount; i++) {
    let a = e.child(i).content;
    const d = i ? 0 : Math.max(0, o - 1), f = i < e.childCount - 1 ? 0 : Math.max(0, n - 1);
    (d || f) && (a = G(y(r).row, new z(a, d, f)).content), c.push(a);
  }
  else if (s == "cell" || s == "header_cell") c.push(o || n ? G(y(r).row, new z(e, o, n)).content : e);
  else return null;
  return Ue(r, c);
}
function Ue(t, e) {
  const o = [];
  for (let l = 0; l < e.length; l++) {
    const s = e[l];
    for (let r = s.childCount - 1; r >= 0; r--) {
      const { rowspan: c, colspan: i } = s.child(r).attrs;
      for (let a = l; a < l + c; a++) o[a] = (o[a] || 0) + i;
    }
  }
  let n = 0;
  for (let l = 0; l < o.length; l++) n = Math.max(n, o[l]);
  for (let l = 0; l < o.length; l++)
    if (l >= e.length && e.push(R.empty), o[l] < n) {
      const s = y(t).cell.createAndFill(), r = [];
      for (let c = o[l]; c < n; c++) r.push(s);
      e[l] = e[l].append(R.from(r));
    }
  return {
    height: e.length,
    width: n,
    rows: e
  };
}
function G(t, e) {
  const o = t.createAndFill();
  return new Re(o).replace(0, o.content.size, e).doc;
}
function Je({ width: t, height: e, rows: o }, n, l) {
  if (t != n) {
    const s = [], r = [];
    for (let c = 0; c < o.length; c++) {
      const i = o[c], a = [];
      for (let d = s[c] || 0, f = 0; d < n; f++) {
        let u = i.child(f % i.childCount);
        d + u.attrs.colspan > n && (u = u.type.createChecked(T(u.attrs, u.attrs.colspan, d + u.attrs.colspan - n), u.content)), a.push(u), d += u.attrs.colspan;
        for (let h = 1; h < u.attrs.rowspan; h++) s[c + h] = (s[c + h] || 0) + u.attrs.colspan;
      }
      r.push(R.from(a));
    }
    o = r, t = n;
  }
  if (e != l) {
    const s = [];
    for (let r = 0, c = 0; r < l; r++, c++) {
      const i = [], a = o[c % e];
      for (let d = 0; d < a.childCount; d++) {
        let f = a.child(d);
        r + f.attrs.rowspan > l && (f = f.type.create({
          ...f.attrs,
          rowspan: Math.max(1, l - f.attrs.rowspan)
        }, f.content)), i.push(f);
      }
      s.push(R.from(i));
    }
    o = s, e = l;
  }
  return {
    width: t,
    height: e,
    rows: o
  };
}
function Ye(t, e, o, n, l, s, r) {
  const c = t.doc.type.schema, i = y(c);
  let a, d;
  if (l > e.width) for (let f = 0, u = 0; f < e.height; f++) {
    const h = o.child(f);
    u += h.nodeSize;
    const p = [];
    let m;
    h.lastChild == null || h.lastChild.type == i.cell ? m = a || (a = i.cell.createAndFill()) : m = d || (d = i.header_cell.createAndFill());
    for (let g = e.width; g < l; g++) p.push(m);
    t.insert(t.mapping.slice(r).map(u - 1 + n), p);
  }
  if (s > e.height) {
    const f = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, l); p++) {
      const g = p >= e.width ? !1 : o.nodeAt(e.map[m + p]).type == i.header_cell;
      f.push(g ? d || (d = i.header_cell.createAndFill()) : a || (a = i.cell.createAndFill()));
    }
    const u = i.row.create(null, R.from(f)), h = [];
    for (let p = e.height; p < s; p++) h.push(u);
    t.insert(t.mapping.slice(r).map(n + o.nodeSize - 2), h);
  }
  return !!(a || d);
}
function le(t, e, o, n, l, s, r, c) {
  if (r == 0 || r == e.height) return !1;
  let i = !1;
  for (let a = l; a < s; a++) {
    const d = r * e.width + a, f = e.map[d];
    if (e.map[d - e.width] == f) {
      i = !0;
      const u = o.nodeAt(f), { top: h, left: p } = e.findCell(f);
      t.setNodeMarkup(t.mapping.slice(c).map(f + n), null, {
        ...u.attrs,
        rowspan: r - h
      }), t.insert(t.mapping.slice(c).map(e.positionAt(r, p, o)), u.type.createAndFill({
        ...u.attrs,
        rowspan: h + u.attrs.rowspan - r
      })), a += u.attrs.colspan - 1;
    }
  }
  return i;
}
function se(t, e, o, n, l, s, r, c) {
  if (r == 0 || r == e.width) return !1;
  let i = !1;
  for (let a = l; a < s; a++) {
    const d = a * e.width + r, f = e.map[d];
    if (e.map[d - 1] == f) {
      i = !0;
      const u = o.nodeAt(f), h = e.colCount(f), p = t.mapping.slice(c).map(f + n);
      t.setNodeMarkup(p, null, T(u.attrs, r - h, u.attrs.colspan - (r - h))), t.insert(p + u.nodeSize, u.type.createAndFill(T(u.attrs, 0, r - h))), a += u.attrs.rowspan - 1;
    }
  }
  return i;
}
function re(t, e, o, n, l) {
  let s = o ? t.doc.nodeAt(o - 1) : t.doc;
  if (!s) throw new Error("No table found");
  let r = C.get(s);
  const { top: c, left: i } = n, a = i + l.width, d = c + l.height, f = t.tr;
  let u = 0;
  function h() {
    if (s = o ? f.doc.nodeAt(o - 1) : f.doc, !s) throw new Error("No table found");
    r = C.get(s), u = f.mapping.maps.length;
  }
  Ye(f, r, s, o, a, d, u) && h(), le(f, r, s, o, i, a, c, u) && h(), le(f, r, s, o, i, a, d, u) && h(), se(f, r, s, o, c, d, i, u) && h(), se(f, r, s, o, c, d, a, u) && h();
  for (let p = c; p < d; p++) {
    const m = r.positionAt(p, i, s), g = r.positionAt(p, a, s);
    f.replace(f.mapping.slice(u).map(m + o), f.mapping.slice(u).map(g + o), new z(l.rows[p - c], 0, 0));
  }
  h(), f.setSelection(new w(f.doc.resolve(o + r.positionAt(c, i, s)), f.doc.resolve(o + r.positionAt(d - 1, a - 1, s)))), e(f);
}
const Ge = ye({
  ArrowLeft: P("horiz", -1),
  ArrowRight: P("horiz", 1),
  ArrowUp: P("vert", -1),
  ArrowDown: P("vert", 1),
  "Shift-ArrowLeft": W("horiz", -1),
  "Shift-ArrowRight": W("horiz", 1),
  "Shift-ArrowUp": W("vert", -1),
  "Shift-ArrowDown": W("vert", 1),
  Backspace: F,
  "Mod-Backspace": F,
  Delete: F,
  "Mod-Delete": F
});
function I(t, e, o) {
  return o.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(o).scrollIntoView()), !0);
}
function P(t, e) {
  return (o, n, l) => {
    if (!l) return !1;
    const s = o.selection;
    if (s instanceof w) return I(o, n, M.near(s.$headCell, e));
    if (t != "horiz" && !s.empty) return !1;
    const r = Ce(l, t, e);
    if (r == null) return !1;
    if (t == "horiz") return I(o, n, M.near(o.doc.resolve(s.head + e), e));
    {
      const c = o.doc.resolve(r), i = ue(c, t, e);
      let a;
      return i ? a = M.near(i, 1) : e < 0 ? a = M.near(o.doc.resolve(c.before(-1)), -1) : a = M.near(o.doc.resolve(c.after(-1)), 1), I(o, n, a);
    }
  };
}
function W(t, e) {
  return (o, n, l) => {
    if (!l) return !1;
    const s = o.selection;
    let r;
    if (s instanceof w) r = s;
    else {
      const i = Ce(l, t, e);
      if (i == null) return !1;
      r = new w(o.doc.resolve(i));
    }
    const c = ue(r.$headCell, t, e);
    return c ? I(o, n, new w(r.$anchorCell, c)) : !1;
  };
}
function Qe(t, e) {
  const o = t.state.doc, n = D(o.resolve(e));
  return n ? (t.dispatch(t.state.tr.setSelection(new w(n))), !0) : !1;
}
function Ze(t, e, o) {
  if (!A(t.state)) return !1;
  let n = qe(o);
  const l = t.state.selection;
  if (l instanceof w) {
    n || (n = {
      width: 1,
      height: 1,
      rows: [R.from(G(y(t.state.schema).cell, o))]
    });
    const s = l.$anchorCell.node(-1), r = l.$anchorCell.start(-1), c = C.get(s).rectBetween(l.$anchorCell.pos - r, l.$headCell.pos - r);
    return n = Je(n, c.right - c.left, c.bottom - c.top), re(t.state, t.dispatch, r, c, n), !0;
  } else if (n) {
    const s = O(t.state), r = s.start(-1);
    return re(t.state, t.dispatch, r, C.get(s.node(-1)).findCell(s.pos - r), n), !0;
  } else return !1;
}
function et(t, e) {
  var o;
  if (e.ctrlKey || e.metaKey) return;
  const n = ie(t, e.target);
  let l;
  if (e.shiftKey && t.state.selection instanceof w)
    s(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && n && (l = D(t.state.selection.$anchor)) != null && ((o = V(t, e)) === null || o === void 0 ? void 0 : o.pos) != l.pos)
    s(l, e), e.preventDefault();
  else if (!n) return;
  function s(i, a) {
    let d = V(t, a);
    const f = N.getState(t.state) == null;
    if (!d || !ee(i, d)) if (f) d = i;
    else return;
    const u = new w(i, d);
    if (f || !t.state.selection.eq(u)) {
      const h = t.state.tr.setSelection(u);
      f && h.setMeta(N, i.pos), t.dispatch(h);
    }
  }
  function r() {
    t.root.removeEventListener("mouseup", r), t.root.removeEventListener("dragstart", r), t.root.removeEventListener("mousemove", c), N.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(N, -1));
  }
  function c(i) {
    const a = i, d = N.getState(t.state);
    let f;
    if (d != null) f = t.state.doc.resolve(d);
    else if (ie(t, a.target) != n && (f = V(t, e), !f))
      return r();
    f && s(f, a);
  }
  t.root.addEventListener("mouseup", r), t.root.addEventListener("dragstart", r), t.root.addEventListener("mousemove", c);
}
function Ce(t, e, o) {
  if (!(t.state.selection instanceof E)) return null;
  const { $head: n } = t.state.selection;
  for (let l = n.depth - 1; l >= 0; l--) {
    const s = n.node(l);
    if ((o < 0 ? n.index(l) : n.indexAfter(l)) != (o < 0 ? 0 : s.childCount)) return null;
    if (s.type.spec.tableRole == "cell" || s.type.spec.tableRole == "header_cell") {
      const r = n.before(l), c = e == "vert" ? o > 0 ? "down" : "up" : o > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? r : null;
    }
  }
  return null;
}
function ie(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function V(t, e) {
  const o = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!o) return null;
  const n = o.inside >= 0 ? o.inside : o.pos;
  return D(t.state.doc.resolve(n));
}
var tt = class {
  constructor(t, e) {
    this.node = t, this.defaultCellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${e}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Q(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type != this.node.type ? !1 : (this.node = t, Q(t, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(t) {
    return t.type == "attributes" && (t.target == this.table || this.colgroup.contains(t.target));
  }
};
function Q(t, e, o, n, l, s) {
  let r = 0, c = !0, i = e.firstChild;
  const a = t.firstChild;
  if (a) {
    for (let f = 0, u = 0; f < a.childCount; f++) {
      const { colspan: h, colwidth: p } = a.child(f).attrs;
      for (let m = 0; m < h; m++, u++) {
        const g = l == u ? s : p && p[m], b = g ? g + "px" : "";
        if (r += g || n, g || (c = !1), i)
          i.style.width != b && (i.style.width = b), i = i.nextSibling;
        else {
          const B = document.createElement("col");
          B.style.width = b, e.appendChild(B);
        }
      }
    }
    for (; i; ) {
      var d;
      const f = i.nextSibling;
      (d = i.parentNode) === null || d === void 0 || d.removeChild(i), i = f;
    }
    c ? (o.style.width = r + "px", o.style.minWidth = "") : (o.style.width = "", o.style.minWidth = r + "px");
  }
}
const S = new Z("tableColumnResizing");
function xt({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: o = 100, View: n = tt, lastColumnResizable: l = !0 } = {}) {
  const s = new fe({
    key: S,
    state: {
      init(r, c) {
        var i;
        const a = (i = s.spec) === null || i === void 0 || (i = i.props) === null || i === void 0 ? void 0 : i.nodeViews, d = y(c.schema).table.name;
        return n && a && (a[d] = (f, u) => new n(f, o, u)), new ot(-1, !1);
      },
      apply(r, c) {
        return c.apply(r);
      }
    },
    props: {
      attributes: (r) => {
        const c = S.getState(r);
        return c && c.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (r, c) => {
          nt(r, c, t, l);
        },
        mouseleave: (r) => {
          lt(r);
        },
        mousedown: (r, c) => {
          st(r, c, e, o);
        }
      },
      decorations: (r) => {
        const c = S.getState(r);
        if (c && c.activeHandle > -1) return dt(r, c.activeHandle);
      },
      nodeViews: {}
    }
  });
  return s;
}
var ot = class j {
  constructor(e, o) {
    this.activeHandle = e, this.dragging = o;
  }
  apply(e) {
    const o = this, n = e.getMeta(S);
    if (n && n.setHandle != null) return new j(n.setHandle, !1);
    if (n && n.setDragging !== void 0) return new j(o.activeHandle, n.setDragging);
    if (o.activeHandle > -1 && e.docChanged) {
      let l = e.mapping.map(o.activeHandle, -1);
      return Y(e.doc.resolve(l)) || (l = -1), new j(l, o.dragging);
    }
    return o;
  }
};
function nt(t, e, o, n) {
  if (!t.editable) return;
  const l = S.getState(t.state);
  if (l && !l.dragging) {
    const s = it(e.target);
    let r = -1;
    if (s) {
      const { left: c, right: i } = s.getBoundingClientRect();
      e.clientX - c <= o ? r = ce(t, e, "left", o) : i - e.clientX <= o && (r = ce(t, e, "right", o));
    }
    if (r != l.activeHandle) {
      if (!n && r !== -1) {
        const c = t.state.doc.resolve(r), i = c.node(-1), a = C.get(i), d = c.start(-1);
        if (a.colCount(c.pos - d) + c.nodeAfter.attrs.colspan - 1 == a.width - 1) return;
      }
      be(t, r);
    }
  }
}
function lt(t) {
  if (!t.editable) return;
  const e = S.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && be(t, -1);
}
function st(t, e, o, n) {
  var l;
  if (!t.editable) return !1;
  const s = (l = t.dom.ownerDocument.defaultView) !== null && l !== void 0 ? l : window, r = S.getState(t.state);
  if (!r || r.activeHandle == -1 || r.dragging) return !1;
  const c = t.state.doc.nodeAt(r.activeHandle), i = rt(t, r.activeHandle, c.attrs);
  t.dispatch(t.state.tr.setMeta(S, { setDragging: {
    startX: e.clientX,
    startWidth: i
  } }));
  function a(f) {
    s.removeEventListener("mouseup", a), s.removeEventListener("mousemove", d);
    const u = S.getState(t.state);
    u?.dragging && (ct(t, u.activeHandle, ae(u.dragging, f, o)), t.dispatch(t.state.tr.setMeta(S, { setDragging: null })));
  }
  function d(f) {
    if (!f.which) return a(f);
    const u = S.getState(t.state);
    if (u && u.dragging) {
      const h = ae(u.dragging, f, o);
      de(t, u.activeHandle, h, n);
    }
  }
  return de(t, r.activeHandle, i, n), s.addEventListener("mouseup", a), s.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function rt(t, e, { colspan: o, colwidth: n }) {
  const l = n && n[n.length - 1];
  if (l) return l;
  const s = t.domAtPos(e);
  let r = s.node.childNodes[s.offset].offsetWidth, c = o;
  if (n)
    for (let i = 0; i < o; i++) n[i] && (r -= n[i], c--);
  return r / c;
}
function it(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function ce(t, e, o, n) {
  const l = o == "right" ? -n : n, s = t.posAtCoords({
    left: e.clientX + l,
    top: e.clientY
  });
  if (!s) return -1;
  const { pos: r } = s, c = D(t.state.doc.resolve(r));
  if (!c) return -1;
  if (o == "right") return c.pos;
  const i = C.get(c.node(-1)), a = c.start(-1), d = i.map.indexOf(c.pos - a);
  return d % i.width == 0 ? -1 : a + i.map[d - 1];
}
function ae(t, e, o) {
  const n = e.clientX - t.startX;
  return Math.max(o, t.startWidth + n);
}
function be(t, e) {
  t.dispatch(t.state.tr.setMeta(S, { setHandle: e }));
}
function ct(t, e, o) {
  const n = t.state.doc.resolve(e), l = n.node(-1), s = C.get(l), r = n.start(-1), c = s.colCount(n.pos - r) + n.nodeAfter.attrs.colspan - 1, i = t.state.tr;
  for (let a = 0; a < s.height; a++) {
    const d = a * s.width + c;
    if (a && s.map[d] == s.map[d - s.width]) continue;
    const f = s.map[d], u = l.nodeAt(f).attrs, h = u.colspan == 1 ? 0 : c - s.colCount(f);
    if (u.colwidth && u.colwidth[h] == o) continue;
    const p = u.colwidth ? u.colwidth.slice() : at(u.colspan);
    p[h] = o, i.setNodeMarkup(r + f, null, {
      ...u,
      colwidth: p
    });
  }
  i.docChanged && t.dispatch(i);
}
function de(t, e, o, n) {
  const l = t.state.doc.resolve(e), s = l.node(-1), r = l.start(-1), c = C.get(s).colCount(l.pos - r) + l.nodeAfter.attrs.colspan - 1;
  let i = t.domAtPos(l.start(-1)).node;
  for (; i && i.nodeName != "TABLE"; ) i = i.parentNode;
  i && Q(s, i.firstChild, i, n, c, o);
}
function at(t) {
  return Array(t).fill(0);
}
function dt(t, e) {
  const o = [], n = t.doc.resolve(e), l = n.node(-1);
  if (!l) return X.empty;
  const s = C.get(l), r = n.start(-1), c = s.colCount(n.pos - r) + n.nodeAfter.attrs.colspan - 1;
  for (let a = 0; a < s.height; a++) {
    const d = c + a * s.width;
    if ((c == s.width - 1 || s.map[d] != s.map[d + 1]) && (a == 0 || s.map[d] != s.map[d - s.width])) {
      var i;
      const f = s.map[d], u = r + f + l.nodeAt(f).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((i = S.getState(t)) === null || i === void 0) && i.dragging && o.push(q.node(r + f, r + f + l.nodeAt(f).nodeSize, { class: "column-resize-dragging" })), o.push(q.widget(u, h));
    }
  }
  return X.create(t.doc, o);
}
function vt({ allowTableNodeSelection: t = !1 } = {}) {
  return new fe({
    key: N,
    state: {
      init() {
        return null;
      },
      apply(e, o) {
        const n = e.getMeta(N);
        if (n != null) return n == -1 ? null : n;
        if (o == null || !e.docChanged) return o;
        const { deleted: l, pos: s } = e.mapping.mapResult(o);
        return l ? null : s;
      }
    },
    props: {
      decorations: Be,
      handleDOMEvents: { mousedown: et },
      createSelectionBetween(e) {
        return N.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Qe,
      handleKeyDown: Ge,
      handlePaste: Ze
    },
    appendTransaction(e, o, n) {
      return $e(n, Pe(n, o), t);
    }
  });
}
export {
  w as C,
  bt as a,
  St as b,
  xt as c,
  te as d,
  Rt as e,
  Pe as f,
  At as g,
  wt as h,
  gt as i,
  mt as j,
  pt as k,
  ht as l,
  Ct as m,
  ut as n,
  yt as s,
  vt as t
};
