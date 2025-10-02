import { P as C, aY as K, o as U, F as R, S as B, T as G, N as H, D as x, c as k, b as T, a as I, aZ as X, E, B as J, a9 as Z, aD as Q, k as q } from "./index-CXcNTZf2.js";
function $(i = {}) {
  return new C({
    view(e) {
      return new ee(e, i);
    }
  });
}
class ee {
  constructor(e, t) {
    var n;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = t.width) !== null && n !== void 0 ? n : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let s = (o) => {
        this[r](o);
      };
      return e.dom.addEventListener(r, s), { name: r, handler: s };
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
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, r = this.editorView.dom, s = r.getBoundingClientRect(), o = s.width / r.offsetWidth, l = s.height / r.offsetHeight;
    if (t) {
      let p = e.nodeBefore, u = e.nodeAfter;
      if (p || u) {
        let f = this.editorView.nodeDOM(this.cursorPos - (p ? p.nodeSize : 0));
        if (f) {
          let g = f.getBoundingClientRect(), b = p ? g.bottom : g.top;
          p && u && (b = (b + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let P = this.width / 2 * l;
          n = { left: g.left, right: g.right, top: b - P, bottom: b + P };
        }
      }
    }
    if (!n) {
      let p = this.editorView.coordsAtPos(this.cursorPos), u = this.width / 2 * o;
      n = { left: p.left - u, right: p.left + u, top: p.top, bottom: p.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let d, c;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      d = -pageXOffset, c = -pageYOffset;
    else {
      let p = a.getBoundingClientRect(), u = p.width / a.offsetWidth, f = p.height / a.offsetHeight;
      d = p.left - a.scrollLeft * u, c = p.top - a.scrollTop * f;
    }
    this.element.style.left = (n.left - d) / o + "px", this.element.style.top = (n.top - c) / l + "px", this.element.style.width = (n.right - n.left) / o + "px", this.element.style.height = (n.bottom - n.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), r = n && n.type.spec.disableDropCursor, s = typeof r == "function" ? r(this.editorView, t, e) : r;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = K(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
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
}
class h extends T {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    return h.valid(n) ? new h(n) : T.near(n);
  }
  content() {
    return B.empty;
  }
  eq(e) {
    return e instanceof h && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new h(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new N(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !te(e) || !ne(e))
      return !1;
    let n = t.type.spec.allowGapCursor;
    if (n != null)
      return n;
    let r = t.contentMatchAt(e.index()).defaultType;
    return r && r.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, n = !1) {
    e: for (; ; ) {
      if (!n && h.valid(e))
        return e;
      let r = e.pos, s = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        r += t;
        let a = e.doc.resolve(r);
        if (h.valid(a))
          return a;
      }
      for (; ; ) {
        let o = t > 0 ? s.firstChild : s.lastChild;
        if (!o) {
          if (s.isAtom && !s.isText && !H.isSelectable(s)) {
            e = e.doc.resolve(r + s.nodeSize * t), n = !1;
            continue e;
          }
          break;
        }
        s = o, r += t;
        let l = e.doc.resolve(r);
        if (h.valid(l))
          return l;
      }
      return null;
    }
  }
}
h.prototype.visible = !1;
h.findFrom = h.findGapCursorFrom;
T.jsonID("gapcursor", h);
class N {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new N(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return h.valid(t) ? new h(t) : T.near(t);
  }
}
function te(i) {
  for (let e = i.depth; e >= 0; e--) {
    let t = i.index(e), n = i.node(e);
    if (t == 0) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = n.child(t - 1); ; r = r.lastChild) {
      if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function ne(i) {
  for (let e = i.depth; e >= 0; e--) {
    let t = i.indexAfter(e), n = i.node(e);
    if (t == n.childCount) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = n.child(t); ; r = r.firstChild) {
      if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function re() {
  return new C({
    props: {
      decorations: le,
      createSelectionBetween(i, e, t) {
        return e.pos == t.pos && h.valid(t) ? new h(t) : null;
      },
      handleClick: se,
      handleKeyDown: ie,
      handleDOMEvents: { beforeinput: oe }
    }
  });
}
const ie = U({
  ArrowLeft: S("horiz", -1),
  ArrowRight: S("horiz", 1),
  ArrowUp: S("vert", -1),
  ArrowDown: S("vert", 1)
});
function S(i, e) {
  const t = i == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(n, r, s) {
    let o = n.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof G) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = n.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let d = h.findGapCursorFrom(l, e, a);
    return d ? (r && r(n.tr.setSelection(new h(d))), !0) : !1;
  };
}
function se(i, e, t) {
  if (!i || !i.editable)
    return !1;
  let n = i.state.doc.resolve(e);
  if (!h.valid(n))
    return !1;
  let r = i.posAtCoords({ left: t.clientX, top: t.clientY });
  return r && r.inside > -1 && H.isSelectable(i.state.doc.nodeAt(r.inside)) ? !1 : (i.dispatch(i.state.tr.setSelection(new h(n))), !0);
}
function oe(i, e) {
  if (e.inputType != "insertCompositionText" || !(i.state.selection instanceof h))
    return !1;
  let { $from: t } = i.state.selection, n = t.parent.contentMatchAt(t.index()).findWrapping(i.state.schema.nodes.text);
  if (!n)
    return !1;
  let r = R.empty;
  for (let o = n.length - 1; o >= 0; o--)
    r = R.from(n[o].createAndFill(null, r));
  let s = i.state.tr.replace(t.pos, t.pos, new B(r, 0, 0));
  return s.setSelection(G.near(s.doc.resolve(t.pos + 1))), i.dispatch(s), !1;
}
function le(i) {
  if (!(i.selection instanceof h))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", x.create(i.doc, [k.widget(i.selection.head, e, { key: "gapcursor" })]);
}
var A = 200, m = function() {
};
m.prototype.append = function(e) {
  return e.length ? (e = m.from(e), !this.length && e || e.length < A && this.leafAppend(e) || this.length < A && e.leafPrepend(this) || this.appendInner(e)) : this;
};
m.prototype.prepend = function(e) {
  return e.length ? m.from(e).append(this) : this;
};
m.prototype.appendInner = function(e) {
  return new ae(this, e);
};
m.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? m.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
m.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
m.prototype.forEach = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
};
m.prototype.map = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length);
  var r = [];
  return this.forEach(function(s, o) {
    return r.push(e(s, o));
  }, t, n), r;
};
m.from = function(e) {
  return e instanceof m ? e : e && e.length ? new W(e) : m.empty;
};
var W = /* @__PURE__ */ (function(i) {
  function e(n) {
    i.call(this), this.values = n;
  }
  i && (e.__proto__ = i), e.prototype = Object.create(i && i.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(r, s) {
    return r == 0 && s == this.length ? this : new e(this.values.slice(r, s));
  }, e.prototype.getInner = function(r) {
    return this.values[r];
  }, e.prototype.forEachInner = function(r, s, o, l) {
    for (var a = s; a < o; a++)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(r, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(r) {
    if (this.length + r.length <= A)
      return new e(this.values.concat(r.flatten()));
  }, e.prototype.leafPrepend = function(r) {
    if (this.length + r.length <= A)
      return new e(r.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
})(m);
m.empty = new W([]);
var ae = /* @__PURE__ */ (function(i) {
  function e(t, n) {
    i.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
  }
  return i && (e.__proto__ = i), e.prototype = Object.create(i && i.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(n) {
    return n < this.left.length ? this.left.get(n) : this.right.get(n - this.left.length);
  }, e.prototype.forEachInner = function(n, r, s, o) {
    var l = this.left.length;
    if (r < l && this.left.forEachInner(n, r, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(n, Math.max(r - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(n, r, s, o) {
    var l = this.left.length;
    if (r > l && this.right.forEachInvertedInner(n, r - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(n, Math.min(r, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(n, r) {
    if (n == 0 && r == this.length)
      return this;
    var s = this.left.length;
    return r <= s ? this.left.slice(n, r) : n >= s ? this.right.slice(n - s, r - s) : this.left.slice(n, s).append(this.right.slice(0, r - s));
  }, e.prototype.leafAppend = function(n) {
    var r = this.right.leafAppend(n);
    if (r)
      return new e(this.left, r);
  }, e.prototype.leafPrepend = function(n) {
    var r = this.left.leafPrepend(n);
    if (r)
      return new e(r, this.right);
  }, e.prototype.appendInner = function(n) {
    return this.left.depth >= Math.max(this.right.depth, n.depth) + 1 ? new e(this.left, new e(this.right, n)) : new e(this, n);
  }, e;
})(m);
const de = 500;
class v {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let n = this.items.length;
    for (; ; n--)
      if (this.items.get(n - 1).selection) {
        --n;
        break;
      }
    let r, s;
    t && (r = this.remapping(n, this.items.length), s = r.maps.length);
    let o = e.tr, l, a, d = [], c = [];
    return this.items.forEach((p, u) => {
      if (!p.step) {
        r || (r = this.remapping(n, u + 1), s = r.maps.length), s--, c.push(p);
        return;
      }
      if (r) {
        c.push(new w(p.map));
        let f = p.step.map(r.slice(s)), g;
        f && o.maybeStep(f).doc && (g = o.mapping.maps[o.mapping.maps.length - 1], d.push(new w(g, void 0, void 0, d.length + c.length))), s--, g && r.appendMap(g, s);
      } else
        o.maybeStep(p.step);
      if (p.selection)
        return l = r ? p.selection.map(r.slice(s)) : p.selection, a = new v(this.items.slice(0, n).append(c.reverse().concat(d)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, n, r) {
    let s = [], o = this.eventCount, l = this.items, a = !r && l.length ? l.get(l.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let p = e.steps[c].invert(e.docs[c]), u = new w(e.mapping.maps[c], p, t), f;
      (f = a && a.merge(u)) && (u = f, c ? s.pop() : l = l.slice(0, l.length - 1)), s.push(u), t && (o++, t = void 0), r || (a = u);
    }
    let d = o - n.depth;
    return d > ce && (l = pe(l, d), o -= d), new v(l.append(s), o);
  }
  remapping(e, t) {
    let n = new X();
    return this.items.forEach((r, s) => {
      let o = r.mirrorOffset != null && s - r.mirrorOffset >= e ? n.maps.length - r.mirrorOffset : void 0;
      n.appendMap(r.map, o);
    }, e, t), n;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new v(this.items.append(e.map((t) => new w(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let n = [], r = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, r);
    let a = t;
    this.items.forEach((u) => {
      let f = s.getMirror(--a);
      if (f == null)
        return;
      o = Math.min(o, f);
      let g = s.maps[f];
      if (u.step) {
        let b = e.steps[f].invert(e.docs[f]), P = u.selection && u.selection.map(s.slice(a + 1, f));
        P && l++, n.push(new w(g, b, P));
      } else
        n.push(new w(g));
    }, r);
    let d = [];
    for (let u = t; u < o; u++)
      d.push(new w(s.maps[u]));
    let c = this.items.slice(0, r).append(d).append(n), p = new v(c, l);
    return p.emptyItemCount() > de && (p = p.compress(this.items.length - n.length)), p;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), n = t.maps.length, r = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        r.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(n)), d = a && a.getMap();
        if (n--, d && t.appendMap(d, n), a) {
          let c = o.selection && o.selection.map(t.slice(n));
          c && s++;
          let p = new w(d.invert(), a, c), u, f = r.length - 1;
          (u = r.length && r[f].merge(p)) ? r[f] = u : r.push(p);
        }
      } else o.map && n--;
    }, this.items.length, 0), new v(m.from(r.reverse()), s);
  }
}
v.empty = new v(m.empty, 0);
function pe(i, e) {
  let t;
  return i.forEach((n, r) => {
    if (n.selection && e-- == 0)
      return t = r, !1;
  }), i.slice(t);
}
class w {
  constructor(e, t, n, r) {
    this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new w(t.getMap().invert(), t, this.selection);
    }
  }
}
class y {
  constructor(e, t, n, r, s) {
    this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = s;
  }
}
const ce = 20;
function ue(i, e, t, n) {
  let r = t.getMeta(M), s;
  if (r)
    return r.historyState;
  t.getMeta(me) && (i = new y(i.done, i.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return i;
  if (o && o.getMeta(M))
    return o.getMeta(M).redo ? new y(i.done.addTransform(t, void 0, n, O(e)), i.undone, V(t.mapping.maps), i.prevTime, i.prevComposition) : new y(i.done, i.undone.addTransform(t, void 0, n, O(e)), null, i.prevTime, i.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = i.prevTime == 0 || !o && i.prevComposition != l && (i.prevTime < (t.time || 0) - n.newGroupDelay || !he(t, i.prevRanges)), d = o ? D(i.prevRanges, t.mapping) : V(t.mapping.maps);
    return new y(i.done.addTransform(t, a ? e.selection.getBookmark() : void 0, n, O(e)), v.empty, d, t.time, l ?? i.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new y(i.done.rebased(t, s), i.undone.rebased(t, s), D(i.prevRanges, t.mapping), i.prevTime, i.prevComposition) : new y(i.done.addMaps(t.mapping.maps), i.undone.addMaps(t.mapping.maps), D(i.prevRanges, t.mapping), i.prevTime, i.prevComposition);
}
function he(i, e) {
  if (!e)
    return !1;
  if (!i.docChanged)
    return !0;
  let t = !1;
  return i.mapping.maps[0].forEach((n, r) => {
    for (let s = 0; s < e.length; s += 2)
      n <= e[s + 1] && r >= e[s] && (t = !0);
  }), t;
}
function V(i) {
  let e = [];
  for (let t = i.length - 1; t >= 0 && e.length == 0; t--)
    i[t].forEach((n, r, s, o) => e.push(s, o));
  return e;
}
function D(i, e) {
  if (!i)
    return null;
  let t = [];
  for (let n = 0; n < i.length; n += 2) {
    let r = e.map(i[n], 1), s = e.map(i[n + 1], -1);
    r <= s && t.push(r, s);
  }
  return t;
}
function fe(i, e, t) {
  let n = O(e), r = M.get(e).spec.config, s = (t ? i.undone : i.done).popEvent(e, n);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? i.done : i.undone).addTransform(s.transform, e.selection.getBookmark(), r, n), a = new y(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(M, { redo: t, historyState: a });
}
let z = !1, F = null;
function O(i) {
  let e = i.plugins;
  if (F != e) {
    z = !1, F = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        z = !0;
        break;
      }
  }
  return z;
}
const M = new I("history"), me = new I("closeHistory");
function ge(i = {}) {
  return i = {
    depth: i.depth || 100,
    newGroupDelay: i.newGroupDelay || 500
  }, new C({
    key: M,
    state: {
      init() {
        return new y(v.empty, v.empty, null, 0, -1);
      },
      apply(e, t, n) {
        return ue(t, n, e, i);
      }
    },
    config: i,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let n = t.inputType, r = n == "historyUndo" ? j : n == "historyRedo" ? Y : null;
          return r ? (t.preventDefault(), r(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function _(i, e) {
  return (t, n) => {
    let r = M.getState(t);
    if (!r || (i ? r.undone : r.done).eventCount == 0)
      return !1;
    if (n) {
      let s = fe(r, t, i);
      s && n(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const j = _(!1, !0), Y = _(!0, !0);
E.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (i) => i.length,
      wordCounter: (i) => i.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (i) => {
      const e = i?.node || this.editor.state.doc;
      if ((i?.mode || this.options.mode) === "textSize") {
        const n = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(n);
      }
      return e.nodeSize;
    }, this.storage.words = (i) => {
      const e = i?.node || this.editor.state.doc, t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let i = !1;
    return [
      new C({
        key: new I("characterCount"),
        appendTransaction: (e, t, n) => {
          if (i)
            return;
          const r = this.options.limit;
          if (r == null || r === 0) {
            i = !0;
            return;
          }
          const s = this.storage.characters({ node: n.doc });
          if (s > r) {
            const o = s - r, l = 0, a = o;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`
            );
            const d = n.tr.deleteRange(l, a);
            return i = !0, d;
          }
          i = !0;
        },
        filterTransaction: (e, t) => {
          const n = this.options.limit;
          if (!e.docChanged || n === 0 || n === null || n === void 0)
            return !0;
          const r = this.storage.characters({ node: t.doc }), s = this.storage.characters({ node: e.doc });
          if (s <= n || r > n && s > n && s <= r)
            return !0;
          if (r > n && s > n && s > r || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = s - n, d = l - a, c = l;
          return e.deleteRange(d, c), !(this.storage.characters({ node: e.doc }) > n);
        }
      })
    ];
  }
});
var we = E.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [$(this.options)];
  }
});
E.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new C({
        key: new I("focus"),
        props: {
          decorations: ({ doc: i, selection: e }) => {
            const { isEditable: t, isFocused: n } = this.editor, { anchor: r } = e, s = [];
            if (!t || !n)
              return x.create(i, []);
            let o = 0;
            this.options.mode === "deepest" && i.descendants((a, d) => {
              if (a.isText)
                return;
              if (!(r >= d && r <= d + a.nodeSize - 1))
                return !1;
              o += 1;
            });
            let l = 0;
            return i.descendants((a, d) => {
              if (a.isText || !(r >= d && r <= d + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && o - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              s.push(
                k.node(d, d + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), x.create(i, s);
          }
        }
      })
    ];
  }
});
var ye = E.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [re()];
  },
  extendNodeSchema(i) {
    var e;
    const t = {
      name: i.name,
      options: i.options,
      storage: i.storage
    };
    return {
      allowGapCursor: (e = J(Z(i, "allowGapCursor", t))) != null ? e : null
    };
  }
});
E.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new C({
        key: new I("placeholder"),
        props: {
          decorations: ({ doc: i, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: n } = e, r = [];
            if (!t)
              return null;
            const s = this.editor.isEmpty;
            return i.descendants((o, l) => {
              const a = n >= l && n <= l + o.nodeSize, d = !o.isLeaf && Q(o);
              if ((a || !this.options.showOnlyCurrent) && d) {
                const c = [this.options.emptyNodeClass];
                s && c.push(this.options.emptyEditorClass);
                const p = k.node(l, l + o.nodeSize, {
                  class: c.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                r.push(p);
              }
              return this.options.includeChildren;
            }), x.create(i, r);
          }
        }
      })
    ];
  }
});
E.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: i, options: e } = this;
    return [
      new C({
        key: new I("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || i.isFocused || !i.isEditable || q(t.selection) || i.view.dragging ? null : x.create(t.doc, [
              k.inline(t.selection.from, t.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function L({ types: i, node: e }) {
  return e && Array.isArray(i) && i.includes(e.type) || e?.type === i;
}
var Ce = E.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const i = new I(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => (this.options.notAfter || []).concat(this.options.node).includes(t.name));
    return [
      new C({
        key: i,
        appendTransaction: (t, n, r) => {
          const { doc: s, tr: o, schema: l } = r, a = i.getState(r), d = s.content.size, c = l.nodes[this.options.node];
          if (a)
            return o.insert(d, c.create());
        },
        state: {
          init: (t, n) => {
            const r = n.tr.doc.lastChild;
            return !L({ node: r, types: e });
          },
          apply: (t, n) => {
            if (!t.docChanged)
              return n;
            const r = t.doc.lastChild;
            return !L({ node: r, types: e });
          }
        }
      })
    ];
  }
}), Ee = E.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: i, dispatch: e }) => j(i, e),
      redo: () => ({ state: i, dispatch: e }) => Y(i, e)
    };
  },
  addProseMirrorPlugins() {
    return [ge(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
export {
  we as D,
  ye as G,
  Ce as T,
  Ee as U
};
