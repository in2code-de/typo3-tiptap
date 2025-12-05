function O(r) {
  this.content = r;
}
O.prototype = {
  constructor: O,
  find: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === r) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var e = this.find(r);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, e, t) {
    var n = t && t != r ? this.remove(t) : this, i = n.find(r), s = n.content.slice();
    return i == -1 ? s.push(t || r, e) : (s[i + 1] = e, t && (s[i] = t)), new O(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var e = this.find(r);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new O(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, e) {
    return new O([r, e].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, e) {
    var t = this.remove(r).content.slice();
    return t.push(r, e), new O(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, e, t) {
    var n = this.remove(e), i = n.content.slice(), s = n.find(r);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new O(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      r(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = O.from(r), r.size ? new O(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = O.from(r), r.size ? new O(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var e = this;
    r = O.from(r);
    for (var t = 0; t < r.content.length; t += 2)
      e = e.remove(r.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(e, t) {
      r[e] = t;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
O.from = function(r) {
  if (r instanceof O) return r;
  var e = [];
  if (r) for (var t in r) e.push(t, r[t]);
  return new O(e);
};
function jt(r, e, t) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == e.childCount)
      return r.childCount == e.childCount ? null : t;
    let i = r.child(n), s = e.child(n);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = jt(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Wt(r, e, t, n) {
  for (let i = r.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: n };
    let o = r.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, n -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: n };
    if (o.isText && o.text != l.text) {
      let c = 0, f = Math.min(o.text.length, l.text.length);
      for (; c < f && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, n--;
      return { a: t, b: n };
    }
    if (o.content.size || l.content.size) {
      let c = Wt(o.content, l.content, t - 1, n - 1);
      if (c)
        return c;
    }
    t -= a, n -= a;
  }
}
class g {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let n = 0; n < e.length; n++)
        this.size += e[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, n, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && n(a, i + l, s || null, o) !== !1 && a.content.size) {
        let f = l + 1;
        a.nodesBetween(Math.max(0, e - f), Math.min(a.content.size, t - f), n, i + f);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, n, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && n && (o ? o = !1 : s += n), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, n = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(n) && (i[i.length - 1] = t.withText(t.text + n.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new g(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let n = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), n.push(l), i += l.nodeSize), o = a;
      }
    return new g(n, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? g.empty : e == 0 && t == this.content.length ? this : new g(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let n = this.content[e];
    if (n == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - n.nodeSize;
    return i[e] = t, new g(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new g([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new g(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, n, t), n += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return jt(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, n = e.size) {
    return Wt(this, e, t, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return ke(0, e);
    if (e == this.size)
      return ke(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, n = 0; ; t++) {
      let i = this.child(t), s = n + i.nodeSize;
      if (s >= e)
        return s == e ? ke(t + 1, s) : ke(t, n);
      n = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return g.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new g(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return g.empty;
    let t, n = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      n += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new g(t || e, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return g.empty;
    if (e instanceof g)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new g([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
g.empty = new g([], 0);
const je = { index: 0, offset: 0 };
function ke(r, e) {
  return je.index = r, je.offset = e, je;
}
function Ae(r, e) {
  if (r === e)
    return !0;
  if (!(r && typeof r == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(r);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (r.length != e.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!Ae(r[n], e[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in e) || !Ae(r[n], e[n]))
        return !1;
    for (let n in e)
      if (!(n in r))
        return !1;
  }
  return !0;
}
let E = class Qe {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, n = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !n && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), n = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), n || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Ae(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = e.marks[t.type];
    if (!n)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = n.create(t.attrs);
    return n.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!e[n].eq(t[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Qe.none;
    if (e instanceof Qe)
      return [e];
    let t = e.slice();
    return t.sort((n, i) => n.type.rank - i.type.rank), t;
  }
};
E.none = [];
class Ie extends Error {
}
class x {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, n) {
    this.content = e, this.openStart = t, this.openEnd = n;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let n = qt(this.content, e + this.openStart, t);
    return n && new x(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new x(Vt(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    let n = t.openStart || 0, i = t.openEnd || 0;
    if (typeof n != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new x(g.fromJSON(e, t.content), n, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let n = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      n++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new x(e, n, i);
  }
}
x.empty = new x(g.empty, 0, 0);
function Vt(r, e, t) {
  let { index: n, offset: i } = r.findIndex(e), s = r.maybeChild(n), { index: o, offset: l } = r.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !r.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, e).append(r.cut(t));
  }
  if (n != o)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, s.copy(Vt(s.content, e - i - 1, t - i - 1)));
}
function qt(r, e, t, n) {
  let { index: i, offset: s } = r.findIndex(e), o = r.maybeChild(i);
  if (s == e || o.isText)
    return n && !n.canReplace(i, i, t) ? null : r.cut(0, e).append(t).append(r.cut(e));
  let l = qt(o.content, e - s - 1, t, o);
  return l && r.replaceChild(i, o.copy(l));
}
function Hn(r, e, t) {
  if (t.openStart > r.depth)
    throw new Ie("Inserted content deeper than insertion position");
  if (r.depth - t.openStart != e.depth - t.openEnd)
    throw new Ie("Inconsistent open depths");
  return _t(r, e, t, 0);
}
function _t(r, e, t, n) {
  let i = r.index(n), s = r.node(n);
  if (i == e.index(n) && n < r.depth - t.openStart) {
    let o = _t(r, e, t, n + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && r.depth == n && e.depth == n) {
      let o = r.parent, l = o.content;
      return ee(o, l.cut(0, r.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = Zn(t, r);
      return ee(s, Kt(r, o, l, e, n));
    }
  else return ee(s, Re(r, e, n));
}
function Ut(r, e) {
  if (!e.type.compatibleContent(r.type))
    throw new Ie("Cannot join " + e.type.name + " onto " + r.type.name);
}
function Ge(r, e, t) {
  let n = r.node(t);
  return Ut(n, e.node(t)), n;
}
function Y(r, e) {
  let t = e.length - 1;
  t >= 0 && r.isText && r.sameMarkup(e[t]) ? e[t] = r.withText(e[t].text + r.text) : e.push(r);
}
function he(r, e, t, n) {
  let i = (e || r).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  r && (s = r.index(t), r.depth > t ? s++ : r.textOffset && (Y(r.nodeAfter, n), s++));
  for (let l = s; l < o; l++)
    Y(i.child(l), n);
  e && e.depth == t && e.textOffset && Y(e.nodeBefore, n);
}
function ee(r, e) {
  return r.type.checkContent(e), r.copy(e);
}
function Kt(r, e, t, n, i) {
  let s = r.depth > i && Ge(r, e, i + 1), o = n.depth > i && Ge(t, n, i + 1), l = [];
  return he(null, r, i, l), s && o && e.index(i) == t.index(i) ? (Ut(s, o), Y(ee(s, Kt(r, e, t, n, i + 1)), l)) : (s && Y(ee(s, Re(r, e, i + 1)), l), he(e, t, i, l), o && Y(ee(o, Re(t, n, i + 1)), l)), he(n, null, i, l), new g(l);
}
function Re(r, e, t) {
  let n = [];
  if (he(null, r, t, n), r.depth > t) {
    let i = Ge(r, e, t + 1);
    Y(ee(i, Re(r, e, t + 1)), n);
  }
  return he(e, null, t, n), new g(n);
}
function Zn(r, e) {
  let t = e.depth - r.openStart, i = e.node(t).copy(r.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(g.from(i));
  return {
    start: i.resolveNoCache(r.openStart + t),
    end: i.resolveNoCache(i.content.size - r.openEnd - t)
  };
}
class pe {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return n ? e.child(t).cut(n) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let n = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += n.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return E.none;
    if (this.textOffset)
      return e.child(t).marks;
    let n = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!n) {
      let l = n;
      n = i, i = l;
    }
    let s = n.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let n = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < n.length; s++)
      n[s].type.spec.inclusive === !1 && (!i || !n[s].isInSet(i.marks)) && (n = n[s--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
      if (e.pos <= this.end(n) && (!t || t(this.node(n))))
        return new Ne(this, e, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let n = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (n.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new pe(t, n, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let n = kt.get(e);
    if (n)
      for (let s = 0; s < n.elts.length; s++) {
        let o = n.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      kt.set(e, n = new Qn());
    let i = n.elts[n.i] = pe.resolve(e, t);
    return n.i = (n.i + 1) % Gn, i;
  }
}
class Qn {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Gn = 12, kt = /* @__PURE__ */ new WeakMap();
class Ne {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.depth = n;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Xn = /* @__PURE__ */ Object.create(null);
class L {
  /**
  @internal
  */
  constructor(e, t, n, i = E.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = n || g.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, n, i = 0) {
    this.content.nodesBetween(e, t, n, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, n, i) {
    return this.content.textBetween(e, t, n, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, n) {
    return this.type == e && Ae(this.attrs, t || e.defaultAttrs || Xn) && E.sameSet(this.marks, n || E.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new L(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new L(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, n = !1) {
    if (e == t)
      return x.empty;
    let i = this.resolve(e), s = this.resolve(t), o = n ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new x(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, n) {
    return Hn(this.resolve(e), this.resolve(t), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: n, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(n), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: n } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: n } = this.content.findIndex(e);
    if (n < e)
      return { node: this.content.child(t), index: t, offset: n };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: n - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return pe.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return pe.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, n) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (n.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ht(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, n = g.empty, i = 0, s = n.childCount) {
    let o = this.contentMatchAt(e).matchFragment(n, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(n.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, n, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(n), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = E.none;
    for (let t = 0; t < this.marks.length; t++) {
      let n = this.marks[t];
      n.type.checkAttrs(n.attrs), e = n.addToSet(e);
    }
    if (!E.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, n);
    }
    let i = g.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, n);
    return s.type.checkAttrs(s.attrs), s;
  }
}
L.prototype.text = void 0;
class Oe extends L {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    if (super(e, t, null, i), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ht(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Oe(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Oe(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Ht(r, e) {
  for (let t = r.length - 1; t >= 0; t--)
    e = r[t].type.name + "(" + e + ")";
  return e;
}
class te {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let n = new Yn(e, t);
    if (n.next == null)
      return te.empty;
    let i = Zt(n);
    n.next && n.err("Unexpected trailing text");
    let s = or(sr(i));
    return lr(s, n), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, n = e.childCount) {
    let i = this;
    for (let s = t; i && s < n; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++)
        if (this.next[t].type == e.next[n].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, n = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, n);
      if (a && (!t || a.validEnd))
        return g.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: f, next: u } = o.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let h = s(u, l.concat(f));
          if (h)
            return h;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == e)
        return this.wrapCache[n + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let i = n.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (n.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let i = 0; i < n.next.length; i++)
        e.indexOf(n.next[i].next) == -1 && t(n.next[i].next);
    }
    return t(this), e.map((n, i) => {
      let s = i + (n.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < n.next.length; o++)
        s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
      return s;
    }).join(`
`);
  }
}
te.empty = new te(!0);
class Yn {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Zt(r) {
  let e = [];
  do
    e.push(er(r));
  while (r.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function er(r) {
  let e = [];
  do
    e.push(tr(r));
  while (r.next && r.next != ")" && r.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function tr(r) {
  let e = ir(r);
  for (; ; )
    if (r.eat("+"))
      e = { type: "plus", expr: e };
    else if (r.eat("*"))
      e = { type: "star", expr: e };
    else if (r.eat("?"))
      e = { type: "opt", expr: e };
    else if (r.eat("{"))
      e = nr(r, e);
    else
      break;
  return e;
}
function vt(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let e = Number(r.next);
  return r.pos++, e;
}
function nr(r, e) {
  let t = vt(r), n = t;
  return r.eat(",") && (r.next != "}" ? n = vt(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: t, max: n, expr: e };
}
function rr(r, e) {
  let t = r.nodeTypes, n = t[e];
  if (n)
    return [n];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && r.err("No node type or group '" + e + "' found"), i;
}
function ir(r) {
  if (r.eat("(")) {
    let e = Zt(r);
    return r.eat(")") || r.err("Missing closing paren"), e;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let e = rr(r, r.next).map((t) => (r.inline == null ? r.inline = t.isInline : r.inline != t.isInline && r.err("Mixing inline and block content"), { type: "name", value: t }));
    return r.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function sr(r) {
  let e = [[]];
  return i(s(r, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function n(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return n(l, a), i(s(o.expr, a), a), [n(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [n(a)];
    } else {
      if (o.type == "opt")
        return [n(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let f = t();
          i(s(o.expr, a), f), a = f;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let f = t();
            n(a, f), i(s(o.expr, a), f), a = f;
          }
        return [n(a)];
      } else {
        if (o.type == "name")
          return [n(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Qt(r, e) {
  return e - r;
}
function bt(r, e) {
  let t = [];
  return n(e), t.sort(Qt);
  function n(i) {
    let s = r[i];
    if (s.length == 1 && !s[0].term)
      return n(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && n(a);
    }
  }
}
function or(r) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(bt(r, 0));
  function t(n) {
    let i = [];
    n.forEach((o) => {
      r[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (c = i[f][1]);
        bt(r, a).forEach((f) => {
          c || i.push([l, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let s = e[n.join(",")] = new te(n.indexOf(r.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Qt);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function lr(r, e) {
  for (let t = 0, n = [r]; t < n.length; t++) {
    let i = n[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(c) == -1 && n.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Gt(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r) {
    let n = r[t];
    if (!n.hasDefault)
      return null;
    e[t] = n.default;
  }
  return e;
}
function Xt(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let i = e && e[n];
    if (i === void 0) {
      let s = r[n];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    }
    t[n] = i;
  }
  return t;
}
function Yt(r, e, t, n) {
  for (let i in e)
    if (!(i in r))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in r) {
    let s = r[i];
    s.validate && s.validate(e[i]);
  }
}
function en(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let n in e)
      t[n] = new cr(r, n, e[n]);
  return t;
}
class ze {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = en(e, n.attrs), this.defaultAttrs = Gt(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == te.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Xt(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new L(this, this.computeAttrs(e), g.from(t), E.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, n) {
    return t = g.from(t), this.checkContent(t), new L(this, this.computeAttrs(e), t, E.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, n) {
    if (e = this.computeAttrs(e), t = g.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(g.empty, !0);
    return s ? new L(this, e, t.append(s), E.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let n = 0; n < e.childCount; n++)
      if (!this.allowsMarks(e.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Yt(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
    return t ? t.length ? t : E.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => n[s] = new ze(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!n[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
}
function ar(r, e, t) {
  let n = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (n.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${r}, got ${s}`);
  };
}
class cr {
  constructor(e, t, n) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? ar(e, t, n.validate) : n.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Pe {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    this.name = e, this.rank = t, this.schema = n, this.spec = i, this.attrs = en(e, i.attrs), this.excluded = null;
    let s = Gt(this.attrs);
    this.instance = s ? new E(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new E(this, Xt(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => n[s] = new Pe(s, i++, t, o)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Yt(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class fr {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = O.from(e.nodes), t.marks = O.from(e.marks || {}), this.nodes = ze.compile(this.spec.nodes, this), this.marks = Pe.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = n[o] || (n[o] = te.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? St(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : St(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => L.fromJSON(this, i), this.markFromJSON = (i) => E.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, n, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ze) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, n, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let n = this.nodes.text;
    return new Oe(n, n.defaultAttrs, e, E.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function St(r, e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n], s = r.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in r.marks) {
        let a = r.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[n] + "'");
  }
  return t;
}
function ur(r) {
  return r.tag != null;
}
function hr(r) {
  return r.style != null;
}
class se {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let n = this.matchedStyles = [];
    t.forEach((i) => {
      if (ur(i))
        this.tags.push(i);
      else if (hr(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        n.indexOf(s) < 0 && n.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let n = new Ct(this, t, !1);
    return n.addAll(e, E.none, t.from, t.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let n = new Ct(this, t, !0);
    return n.addAll(e, E.none, t.from, t.to), x.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, n) {
    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (mr(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, n, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function n(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = Et(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = Et(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new se(e, se.schemaRules(e)));
  }
}
const tn = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, dr = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, nn = { ol: !0, ul: !0 }, me = 1, Xe = 2, de = 4;
function Mt(r, e, t) {
  return e != null ? (e ? me : 0) | (e === "full" ? Xe : 0) : r && r.whitespace == "pre" ? me | Xe : t & ~de;
}
class ve {
  constructor(e, t, n, i, s, o) {
    this.type = e, this.attrs = t, this.marks = n, this.solid = i, this.options = o, this.content = [], this.activeMarks = E.none, this.match = s || (o & de ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(g.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let n = this.type.contentMatch, i;
        return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & me)) {
      let n = this.content[this.content.length - 1], i;
      if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let s = n;
        n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = g.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(g.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !tn.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ct {
  constructor(e, t, n) {
    this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = Mt(null, t.preserveWhitespace, 0) | (n ? de : 0);
    i ? s = new ve(i.type, i.attrs, E.none, !0, t.topMatch || i.type.contentMatch, o) : n ? s = new ve(null, null, E.none, !0, null, o) : s = new ve(e.schema.topNodeType, null, E.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let n = e.nodeValue, i = this.top, s = i.options & Xe ? "full" : this.localPreserveWS || (i.options & me) > 0, { schema: o } = this.parser;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
      if (s)
        if (s === "full")
          n = n.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = n.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(o.linebreakReplacement.create(), t, !0), l[a] && this.insertNode(o.text(l[a]), t, !/\S/.test(l[a]));
          n = "";
        } else
          n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (n = n.slice(1));
      }
      n && this.insertNode(o.text(n), t, !/\S/.test(n)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, n) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    nn.hasOwnProperty(o) && this.parser.normalizeLists && pr(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, n));
    e: if (a ? a.ignore : dr.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, f = this.needsBlock;
      if (tn.hasOwnProperty(o))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), c = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let u = a && a.skip ? t : this.readStyles(e, t);
      u && this.addAll(e, u), c && this.sync(s), this.needsBlock = f;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let n = e.style;
    if (n && n.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = n.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(s, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, n, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
      else {
        let a = this.enter(o, t.attrs || null, n, t.preserveWhitespace);
        a && (s = !0, n = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      n = n.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, n, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, n, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, n), this.findAround(e, a, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, n, i) {
    let s = n || 0;
    for (let o = n ? e.childNodes[n] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, n) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break;
      if (a.solid) {
        if (n)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(s);
    for (let o = 0; o < i.length; o++)
      t = this.enterInner(i[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, n);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = E.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : Tt(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, n, i) {
    let s = this.findPlace(e.create(t), n, !1);
    return s && (s = this.enterInner(e, t, n, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, n, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Mt(e, s, o.options);
    o.options & de && o.content.length == 0 && (l |= de);
    let a = E.none;
    return n = n.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : Tt(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new ve(e, t, a, i, null, l)), this.open++, n;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= me);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let n = this.nodes[t].content;
      for (let i = n.length - 1; i >= 0; i--)
        e += n[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, n) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), s = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let f = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
          if (!f || f.name != c && !f.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let t in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[t];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
}
function pr(r) {
  for (let e = r.firstChild, t = null; e; e = e.nextSibling) {
    let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    n && nn.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null);
  }
}
function mr(r, e) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, e);
}
function Et(r) {
  let e = {};
  for (let t in r)
    e[t] = r[t];
  return e;
}
function Tt(r, e) {
  let t = e.schema.nodes;
  for (let n in t) {
    let i = t[n];
    if (!i.allowsMarkType(r))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: f } = l.edge(a);
        if (c == e || s.indexOf(f) < 0 && o(f))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
class rn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, n) {
    n || (n = We(t).createDocumentFragment());
    let i = n, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], f = this.serializeMark(c, o.isInline, t);
          f && (s.push([c, i]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), n;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: n, contentDOM: i } = Ce(We(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return n;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let n = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(n), n = s.dom);
    }
    return n;
  }
  /**
  @internal
  */
  serializeMark(e, t, n = {}) {
    let i = this.marks[e.type.name];
    return i && Ce(We(n), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, n = null, i) {
    return Ce(e, t, n, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new rn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = At(e.nodes);
    return t.text || (t.text = (n) => n.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return At(e.marks);
  }
}
function At(r) {
  let e = {};
  for (let t in r) {
    let n = r[t].spec.toDOM;
    n && (e[t] = n);
  }
  return e;
}
function We(r) {
  return r.document || window.document;
}
const It = /* @__PURE__ */ new WeakMap();
function yr(r) {
  let e = It.get(r);
  return e === void 0 && It.set(r, e = gr(r)), e;
}
function gr(r) {
  let e = null;
  function t(n) {
    if (n && typeof n == "object")
      if (Array.isArray(n))
        if (typeof n[0] == "string")
          e || (e = []), e.push(n);
        else
          for (let i = 0; i < n.length; i++)
            t(n[i]);
      else
        for (let i in n)
          t(n[i]);
  }
  return t(r), e;
}
function Ce(r, e, t, n) {
  if (typeof e == "string")
    return { dom: r.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (n && (s = yr(n)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, a = t ? r.createElementNS(t, i) : r.createElement(i), c = e[1], f = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    f = 2;
    for (let u in c)
      if (c[u] != null) {
        let h = u.indexOf(" ");
        h > 0 ? a.setAttributeNS(u.slice(0, h), u.slice(h + 1), c[u]) : u == "style" && a.style ? a.style.cssText = c[u] : a.setAttribute(u, c[u]);
      }
  }
  for (let u = f; u < e.length; u++) {
    let h = e[u];
    if (h === 0) {
      if (u < e.length - 1 || u > f)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: d, contentDOM: p } = Ce(r, h, t, n);
      if (a.appendChild(d), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const sn = 65535, on = Math.pow(2, 16);
function wr(r, e) {
  return r + e * on;
}
function Rt(r) {
  return r & sn;
}
function xr(r) {
  return (r - (r & sn)) / on;
}
const ln = 1, an = 2, Ee = 4, cn = 8;
class Ye {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.delInfo = t, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & cn) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (ln | Ee)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (an | Ee)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ee) > 0;
  }
}
class P {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && P.empty)
      return P.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, n = Rt(e);
    if (!this.inverted)
      for (let i = 0; i < n; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[n * 3] + t + xr(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = this.ranges[l + o], u = a + c;
      if (e <= u) {
        let h = c ? e == a ? -1 : e == u ? 1 : t : t, d = a + i + (h < 0 ? 0 : f);
        if (n)
          return d;
        let p = e == (t < 0 ? a : u) ? null : wr(l / 3, e - a), m = e == a ? an : e == u ? ln : Ee;
        return (t < 0 ? e != a : e != u) && (m |= cn), new Ye(d, m, p);
      }
      i += f - c;
    }
    return n ? e + i : new Ye(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let n = 0, i = Rt(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? n : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = a + c;
      if (e <= f && l == i * 3)
        return !0;
      n += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], f = this.ranges[i + n];
      e(l, l + c, a, a + f), s += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new P(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? P.empty : new P(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
P.empty = new P([]);
class Be {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, n = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = n, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Be(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? n + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? n - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Be();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let n = this.from; n < this.to; n++)
      e = this._maps[n].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this._maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return n ? e : new Ye(e, i, null);
  }
}
const Ve = /* @__PURE__ */ Object.create(null);
class F {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return P.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = Ve[t.stepType];
    if (!n)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Ve)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ve[e] = t, t.prototype.jsonID = e, t;
  }
}
class A {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new A(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new A(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, n, i) {
    try {
      return A.ok(e.replace(t, n, i));
    } catch (s) {
      if (s instanceof Ie)
        return A.fail(s.message);
      throw s;
    }
  }
}
function tt(r, e, t) {
  let n = [];
  for (let i = 0; i < r.childCount; i++) {
    let s = r.child(i);
    s.content.size && (s = s.copy(tt(s.content, e, s))), s.isInline && (s = e(s, t, i)), n.push(s);
  }
  return g.fromArray(n);
}
class U extends F {
  /**
  Create a mark step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = e.resolve(this.from), i = n.node(n.sharedDepth(this.to)), s = new x(tt(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return A.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new J(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new U(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof U && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new U(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new U(t.from, t.to, e.markFromJSON(t.mark));
  }
}
F.jsonID("addMark", U);
class J extends F {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = new x(tt(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return A.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new U(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new J(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof J && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new J(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new J(t.from, t.to, e.markFromJSON(t.mark));
  }
}
F.jsonID("removeMark", J);
class K extends F {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return A.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return A.fromReplace(e, this.pos, this.pos + 1, new x(g.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let n = this.mark.addToSet(t.marks);
      if (n.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(n))
            return new K(this.pos, t.marks[i]);
        return new K(this.pos, this.mark);
      }
    }
    return new ne(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new K(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new K(t.pos, e.markFromJSON(t.mark));
  }
}
F.jsonID("addNodeMark", K);
class ne extends F {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return A.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return A.fromReplace(e, this.pos, this.pos + 1, new x(g.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new K(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ne(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new ne(t.pos, e.markFromJSON(t.mark));
  }
}
F.jsonID("removeNodeMark", ne);
class R extends F {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, n, i = !1) {
    super(), this.from = e, this.to = t, this.slice = n, this.structure = i;
  }
  apply(e) {
    return this.structure && et(e, this.from, this.to) ? A.fail("Structure replace would overwrite content") : A.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new P([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new R(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deletedAcross && n.deletedAcross ? null : new R(t.pos, Math.max(t.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof R) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new R(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new R(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new R(t.from, t.to, x.fromJSON(e, t.slice), !!t.structure);
  }
}
F.jsonID("replace", R);
class N extends F {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, n, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (et(e, this.from, this.gapFrom) || et(e, this.gapTo, this.to)))
      return A.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return A.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, t.content);
    return n ? A.fromReplace(e, this.from, this.to, n) : A.fail("Content does not fit in gap");
  }
  getMap() {
    return new P([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new N(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && n.deletedAcross || i < t.pos || s > n.pos ? null : new N(t.pos, n.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new N(t.from, t.to, t.gapFrom, t.gapTo, x.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
F.jsonID("replaceAround", N);
function et(r, e, t) {
  let n = r.resolve(e), i = t - e, s = n.depth;
  for (; i > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = n.node(s).maybeChild(n.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function kr(r, e, t, n) {
  let i = [], s = [], o, l;
  r.doc.nodesBetween(e, t, (a, c, f) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!n.isInSet(u) && f.type.allowsMarkType(n.type)) {
      let h = Math.max(c, e), d = Math.min(c + a.nodeSize, t), p = n.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(p) || (o && o.to == h && o.mark.eq(u[m]) ? o.to = d : i.push(o = new J(h, d, u[m])));
      l && l.to == h ? l.to = d : s.push(l = new U(h, d, n));
    }
  }), i.forEach((a) => r.step(a)), s.forEach((a) => r.step(a));
}
function vr(r, e, t, n) {
  let i = [], s = 0;
  r.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (n instanceof Pe) {
      let c = o.marks, f;
      for (; f = n.isInSet(c); )
        (a || (a = [])).push(f), c = f.removeFromSet(c);
    } else n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let f = 0; f < a.length; f++) {
        let u = a[f], h;
        for (let d = 0; d < i.length; d++) {
          let p = i[d];
          p.step == s - 1 && u.eq(i[d].style) && (h = p);
        }
        h ? (h.to = c, h.step = s) : i.push({ style: u, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => r.step(new J(o.from, o.to, o.style)));
}
function nt(r, e, t, n = t.contentMatch, i = !0) {
  let s = r.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), f = l + c.nodeSize, u = n.matchType(c.type);
    if (!u)
      o.push(new R(l, f, x.empty));
    else {
      n = u;
      for (let h = 0; h < c.marks.length; h++)
        t.allowsMarkType(c.marks[h].type) || r.step(new J(l, f, c.marks[h]));
      if (i && c.isText && t.whitespace != "pre") {
        let h, d = /\r?\n|\r/g, p;
        for (; h = d.exec(c.text); )
          p || (p = new x(g.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new R(l + h.index, l + h.index + h[0].length, p));
      }
    }
    l = f;
  }
  if (!n.validEnd) {
    let a = n.fillBefore(g.empty, !0);
    r.replace(l, l, new x(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    r.step(o[a]);
}
function br(r, e, t) {
  return (e == 0 || r.canReplace(e, r.childCount)) && (t == r.childCount || r.canReplace(0, t));
}
function ce(r) {
  let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let n = r.depth, i = 0, s = 0; ; --n) {
    let o = r.$from.node(n), l = r.$from.index(n) + i, a = r.$to.indexAfter(n) - s;
    if (n < r.depth && o.canReplace(l, a, t))
      return n;
    if (n == 0 || o.type.spec.isolating || !br(o, l, a))
      break;
    l && (i = 1), a < o.childCount && (s = 1);
  }
  return null;
}
function Sr(r, e, t) {
  let { $from: n, $to: i, depth: s } = e, o = n.before(s + 1), l = i.after(s + 1), a = o, c = l, f = g.empty, u = 0;
  for (let p = s, m = !1; p > t; p--)
    m || n.index(p) > 0 ? (m = !0, f = g.from(n.node(p).copy(f)), u++) : a--;
  let h = g.empty, d = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, h = g.from(i.node(p).copy(h)), d++) : c++;
  r.step(new N(a, c, o, l, new x(f.append(h), u, d), f.size - u, !0));
}
function rt(r, e, t = null, n = r) {
  let i = Mr(r, e), s = i && Cr(n, e);
  return s ? i.map(Nt).concat({ type: e, attrs: t }).concat(s.map(Nt)) : null;
}
function Nt(r) {
  return { type: r, attrs: null };
}
function Mr(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.contentMatchAt(n).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(n, i, o) ? s : null;
}
function Cr(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.child(n), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = n; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Er(r, e, t) {
  let n = g.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (n.size) {
      let l = t[o].type.contentMatch.matchFragment(n);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    n = g.from(t[o].type.create(t[o].attrs, n));
  }
  let i = e.start, s = e.end;
  r.step(new N(i, s, i, s, new x(n, 0, 0), t.length, !0));
}
function Tr(r, e, t, n, i) {
  if (!n.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = r.steps.length;
  r.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(n, a) && Ar(r.doc, r.mapping.slice(s).map(l), n)) {
      let c = null;
      if (n.schema.linebreakReplacement) {
        let d = n.whitespace == "pre", p = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
        d && !p ? c = !1 : !d && p && (c = !0);
      }
      c === !1 && un(r, o, l, s), nt(r, r.mapping.slice(s).map(l, 1), n, void 0, c === null);
      let f = r.mapping.slice(s), u = f.map(l, 1), h = f.map(l + o.nodeSize, 1);
      return r.step(new N(u, h, u + 1, h - 1, new x(g.from(n.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && fn(r, o, l, s), !1;
    }
  });
}
function fn(r, e, t, n) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = r.mapping.slice(n).map(t + 1 + s + o.index);
        r.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function un(r, e, t, n) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = r.mapping.slice(n).map(t + 1 + s);
      r.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function Ar(r, e, t) {
  let n = r.resolve(e), i = n.index();
  return n.parent.canReplaceWith(i, i + 1, t);
}
function Ir(r, e, t, n, i) {
  let s = r.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(n, null, i || s.marks);
  if (s.isLeaf)
    return r.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  r.step(new N(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new x(g.from(o), 0, 0), 1, !0));
}
function V(r, e, t = 1, n) {
  let i = r.resolve(e), s = i.depth - t, o = n && n[n.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = t - 2; c > s; c--, f--) {
    let u = i.node(c), h = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let d = u.content.cutByIndex(h, u.childCount), p = n && n[f + 1];
    p && (d = d.replaceChild(0, p.type.create(p.attrs)));
    let m = n && n[f] || u;
    if (!u.canReplace(h + 1, u.childCount) || !m.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(s), a = n && n[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Rr(r, e, t = 1, n) {
  let i = r.doc.resolve(e), s = g.empty, o = g.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = g.from(i.node(l).copy(s));
    let f = n && n[c];
    o = g.from(f ? f.type.create(f.attrs, o) : i.node(l).copy(o));
  }
  r.step(new R(e, e, new x(s.append(o), t, t), !0));
}
function H(r, e) {
  let t = r.resolve(e), n = t.index();
  return hn(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1);
}
function Nr(r, e) {
  e.content.size || r.type.compatibleContent(e.type);
  let t = r.contentMatchAt(r.childCount), { linebreakReplacement: n } = r.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == n ? r.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !r.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function hn(r, e) {
  return !!(r && e && !r.isLeaf && Nr(r, e));
}
function $e(r, e, t = -1) {
  let n = r.resolve(e);
  for (let i = n.depth; ; i--) {
    let s, o, l = n.index(i);
    if (i == n.depth ? (s = n.nodeBefore, o = n.nodeAfter) : t > 0 ? (s = n.node(i + 1), l++, o = n.node(i).maybeChild(l)) : (s = n.node(i).maybeChild(l - 1), o = n.node(i + 1)), s && !s.isTextblock && hn(s, o) && n.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? n.before(i) : n.after(i);
  }
}
function Or(r, e, t) {
  let n = null, { linebreakReplacement: i } = r.doc.type.schema, s = r.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let f = o.whitespace == "pre", u = !!o.contentMatch.matchType(i);
    f && !u ? n = !1 : !f && u && (n = !0);
  }
  let l = r.steps.length;
  if (n === !1) {
    let f = r.doc.resolve(e + t);
    un(r, f.node(), f.before(), l);
  }
  o.inlineContent && nt(r, e + t - 1, o, s.node().contentMatchAt(s.index()), n == null);
  let a = r.mapping.slice(l), c = a.map(e - t);
  if (r.step(new R(c, a.map(e + t, -1), x.empty, !0)), n === !0) {
    let f = r.doc.resolve(c);
    fn(r, f.node(), f.before(), r.steps.length);
  }
  return r;
}
function zr(r, e, t) {
  let n = r.resolve(e);
  if (n.parent.canReplaceWith(n.index(), n.index(), t))
    return e;
  if (n.parentOffset == 0)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.index(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.before(i + 1);
      if (s > 0)
        return null;
    }
  if (n.parentOffset == n.parent.content.size)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.indexAfter(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.after(i + 1);
      if (s < n.node(i).childCount)
        return null;
    }
  return null;
}
function io(r, e, t) {
  let n = r.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = n.depth; o >= 0; o--) {
      let l = o == n.depth ? 0 : n.pos <= (n.start(o + 1) + n.end(o + 1)) / 2 ? -1 : 1, a = n.index(o) + (l > 0 ? 1 : 0), c = n.node(o), f = !1;
      if (s == 1)
        f = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        f = u && c.canReplaceWith(a, a, u[0]);
      }
      if (f)
        return l == 0 ? n.pos : l < 0 ? n.before(o + 1) : n.after(o + 1);
    }
  return null;
}
function De(r, e, t = e, n = x.empty) {
  if (e == t && !n.size)
    return null;
  let i = r.resolve(e), s = r.resolve(t);
  return dn(i, s, n) ? new R(e, t, n) : new Br(i, s, n).fit();
}
function dn(r, e, t) {
  return !t.openStart && !t.openEnd && r.start() == e.start() && r.parent.canReplace(r.index(), e.index(), t.content);
}
class Br {
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = g.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = g.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = n.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new x(s, o, l);
    return e > -1 ? new N(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new R(n.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= n) {
        e = n;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let i, s = null;
        n ? (s = qe(this.unplaced.content, n - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], f, u = null;
          if (t == 1 && (o ? c.matchType(o.type) || (u = c.fillBefore(g.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, inject: u };
          if (t == 2 && o && (f = c.findWrapping(o.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, wrap: f };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = qe(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new x(e, t + 1, Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = qe(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new x(fe(e, t - 1, 1), t - 1, s ? t - 1 : n);
    } else
      this.unplaced = new x(fe(e, t, 1), t, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = n ? n.content : o.content, a = o.openStart - e, c = 0, f = [], { match: u, type: h } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        f.push(i.child(m));
      u = u.matchFragment(i);
    }
    let d = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), y = u.matchType(m.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = y, f.push(pn(m.mark(h.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = ue(this.placed, t, g.from(f)), this.frontier[t].match = u, p && d < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, y = l; m < d; m++) {
      let w = y.lastChild;
      this.frontier.push({ type: w.type, match: w.contentMatchAt(w.childCount) }), y = w.content;
    }
    this.unplaced = p ? e == 0 ? x.empty : new x(fe(o.content, e - 1, 1), e - 1, d < 0 ? o.openEnd : e - 1) : new x(fe(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !_e(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, i = this.$to.after(n);
    for (; n > 1 && i == this.$to.end(--n); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: n, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = _e(e, t, i, n, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], f = _e(e, l, c, a, !0);
          if (!f || f.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = ue(this.placed, t.depth, t.fit)), e = t.move;
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let i = e.node(n), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = ue(this.placed, this.depth, g.from(e.create(t, n))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(g.empty, !0);
    t.childCount && (this.placed = ue(this.placed, this.frontier.length, t));
  }
}
function fe(r, e, t) {
  return e == 0 ? r.cutByIndex(t, r.childCount) : r.replaceChild(0, r.firstChild.copy(fe(r.firstChild.content, e - 1, t)));
}
function ue(r, e, t) {
  return e == 0 ? r.append(t) : r.replaceChild(r.childCount - 1, r.lastChild.copy(ue(r.lastChild.content, e - 1, t)));
}
function qe(r, e) {
  for (let t = 0; t < e; t++)
    r = r.firstChild.content;
  return r;
}
function pn(r, e, t) {
  if (e <= 0)
    return r;
  let n = r.content;
  return e > 1 && (n = n.replaceChild(0, pn(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(g.empty, !0)))), r.copy(n);
}
function _e(r, e, t, n, i) {
  let s = r.node(e), o = i ? r.indexAfter(e) : r.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = n.fillBefore(s.content, !0, o);
  return l && !Fr(t, s.content, o) ? l : null;
}
function Fr(r, e, t) {
  for (let n = t; n < e.childCount; n++)
    if (!r.allowsMarks(e.child(n).marks))
      return !0;
  return !1;
}
function Pr(r) {
  return r.spec.defining || r.spec.definingForContent;
}
function $r(r, e, t, n) {
  if (!n.size)
    return r.deleteRange(e, t);
  let i = r.doc.resolve(e), s = r.doc.resolve(t);
  if (dn(i, s, n))
    return r.step(new R(e, t, n));
  let o = yn(i, s);
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let h = i.depth, d = i.pos - 1; h > 0; h--, d--) {
    let p = i.node(h).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(h) > -1 ? l = h : i.before(h) == d && o.splice(1, 0, -h);
  }
  let a = o.indexOf(l), c = [], f = n.openStart;
  for (let h = n.content, d = 0; ; d++) {
    let p = h.firstChild;
    if (c.push(p), d == n.openStart)
      break;
    h = p.content;
  }
  for (let h = f - 1; h >= 0; h--) {
    let d = c[h], p = Pr(d.type);
    if (p && !d.sameMarkup(i.node(Math.abs(l) - 1)))
      f = h;
    else if (p || !d.type.isTextblock)
      break;
  }
  for (let h = n.openStart; h >= 0; h--) {
    let d = (h + f + 1) % (n.openStart + 1), p = c[d];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let y = o[(m + a) % o.length], w = !0;
        y < 0 && (w = !1, y = -y);
        let k = i.node(y - 1), v = i.index(y - 1);
        if (k.canReplaceWith(v, v, p.type, p.marks))
          return r.replace(i.before(y), w ? s.after(y) : t, new x(mn(n.content, 0, n.openStart, d), d, n.openEnd));
      }
  }
  let u = r.steps.length;
  for (let h = o.length - 1; h >= 0 && (r.replace(e, t, n), !(r.steps.length > u)); h--) {
    let d = o[h];
    d < 0 || (e = i.before(d), t = s.after(d));
  }
}
function mn(r, e, t, n, i) {
  if (e < t) {
    let s = r.firstChild;
    r = r.replaceChild(0, s.copy(mn(s.content, e + 1, t, n, s)));
  }
  if (e > n) {
    let s = i.contentMatchAt(0), o = s.fillBefore(r).append(r);
    r = o.append(s.matchFragment(o).fillBefore(g.empty, !0));
  }
  return r;
}
function Dr(r, e, t, n) {
  if (!n.isInline && e == t && r.doc.resolve(e).parent.content.size) {
    let i = zr(r.doc, e, n.type);
    i != null && (e = t = i);
  }
  r.replaceRange(e, t, new x(g.from(n), 0, 0));
}
function Jr(r, e, t) {
  let n = r.doc.resolve(e), i = r.doc.resolve(t), s = yn(n, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || n.node(l).type.contentMatch.validEnd)
      return r.delete(n.start(l), i.end(l));
    if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), i.indexAfter(l - 1))))
      return r.delete(n.before(l), i.after(l));
  }
  for (let o = 1; o <= n.depth && o <= i.depth; o++)
    if (e - n.start(o) == n.depth - o && t > n.end(o) && i.end(o) - t != i.depth - o && n.start(o - 1) == i.start(o - 1) && n.node(o - 1).canReplace(n.index(o - 1), i.index(o - 1)))
      return r.delete(n.before(o), t);
  r.delete(e, t);
}
function yn(r, e) {
  let t = [], n = Math.min(r.depth, e.depth);
  for (let i = n; i >= 0; i--) {
    let s = r.start(i);
    if (s < r.pos - (r.depth - i) || e.end(i) > e.pos + (e.depth - i) || r.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == r.depth && i == e.depth && r.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class oe extends F {
  /**
  Construct an attribute step.
  */
  constructor(e, t, n) {
    super(), this.pos = e, this.attr = t, this.value = n;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return A.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      n[s] = t.attrs[s];
    n[this.attr] = this.value;
    let i = t.type.create(n, null, t.marks);
    return A.fromReplace(e, this.pos, this.pos + 1, new x(g.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return P.empty;
  }
  invert(e) {
    return new oe(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new oe(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new oe(t.pos, t.attr, t.value);
  }
}
F.jsonID("attr", oe);
class ye extends F {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return A.ok(n);
  }
  getMap() {
    return P.empty;
  }
  invert(e) {
    return new ye(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new ye(t.attr, t.value);
  }
}
F.jsonID("docAttr", ye);
let le = class extends Error {
};
le = function r(e) {
  let t = Error.call(this, e);
  return t.__proto__ = r.prototype, t;
};
le.prototype = Object.create(Error.prototype);
le.prototype.constructor = le;
le.prototype.name = "TransformError";
class Lr {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Be();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new le(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, n = x.empty) {
    let i = De(this.doc, e, t, n);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, n) {
    return this.replace(e, t, new x(g.from(n), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, x.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, n) {
    return $r(this, e, t, n), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, n) {
    return Dr(this, e, t, n), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Jr(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Sr(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Or(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Er(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, n, i = null) {
    return Tr(this, e, t, n, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, n = null, i) {
    return Ir(this, e, t, n, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, n) {
    return this.step(new oe(e, t, n)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new ye(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new K(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let n = this.doc.nodeAt(e);
    if (!n)
      throw new RangeError("No node at position " + e);
    if (t instanceof E)
      t.isInSet(n.marks) && this.step(new ne(e, t));
    else {
      let i = n.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new ne(e, s)), i = s.removeFromSet(i);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, n) {
    return Rr(this, e, t, n), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, n) {
    return kr(this, e, t, n), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, n) {
    return vr(this, e, t, n), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, n) {
    return nt(this, e, t, n), this;
  }
}
const Ue = /* @__PURE__ */ Object.create(null);
class S {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, n) {
    this.$anchor = e, this.$head = t, this.ranges = n || [new jr(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = x.empty) {
    let n = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = n, n = n.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], f = e.mapping.slice(s);
      e.replaceRange(f.map(a.pos), f.map(c.pos), l ? x.empty : t), l == 0 && Bt(e, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let n = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(n), c = a.map(o.pos), f = a.map(l.pos);
      s ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), Bt(e, n, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, n = !1) {
    let i = e.parent.inlineContent ? new T(e) : ie(e.node(0), e.parent, e.pos, e.index(), t, n);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? ie(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : ie(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new D(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return ie(e, e, 0, 0, 1) || new D(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return ie(e, e, e.content.size, e.childCount, -1) || new D(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = Ue[t.type];
    if (!n)
      throw new RangeError(`No selection type ${t.type} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Ue)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Ue[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return T.between(this.$anchor, this.$head).getBookmark();
  }
}
S.prototype.visible = !0;
class jr {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Ot = !1;
function zt(r) {
  !Ot && !r.parent.inlineContent && (Ot = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class T extends S {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    zt(e), zt(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (!n.parent.inlineContent)
      return S.near(n);
    let i = e.resolve(t.map(this.anchor));
    return new T(i.parent.inlineContent ? i : n, n);
  }
  replace(e, t = x.empty) {
    if (super.replace(e, t), t == x.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && e.ensureMarks(n);
    }
  }
  eq(e) {
    return e instanceof T && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Je(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new T(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, n = t) {
    let i = e.resolve(t);
    return new this(i, n == t ? i : e.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, n) {
    let i = e.pos - t.pos;
    if ((!n || i) && (n = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = S.findFrom(t, n, !0) || S.findFrom(t, -n, !0);
      if (s)
        t = s.$head;
      else
        return S.near(t, n);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (S.findFrom(e, -n, !0) || S.findFrom(e, n, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new T(e, t);
  }
}
S.jsonID("text", T);
class Je {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Je(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return T.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class M extends S {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, n), this.node = t;
  }
  map(e, t) {
    let { deleted: n, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return n ? S.near(s) : new M(s);
  }
  content() {
    return new x(g.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof M && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new it(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new M(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new M(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
M.prototype.visible = !1;
S.jsonID("node", M);
class it {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: n } = e.mapResult(this.anchor);
    return t ? new Je(n, n) : new it(n);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), n = t.nodeAfter;
    return n && M.isSelectable(n) ? new M(t) : S.near(t);
  }
}
class D extends S {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = x.empty) {
    if (t == x.empty) {
      e.delete(0, e.doc.content.size);
      let n = S.atStart(e.doc);
      n.eq(e.selection) || e.setSelection(n);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new D(e);
  }
  map(e) {
    return new D(e);
  }
  eq(e) {
    return e instanceof D;
  }
  getBookmark() {
    return Wr;
  }
}
S.jsonID("all", D);
const Wr = {
  map() {
    return this;
  },
  resolve(r) {
    return new D(r);
  }
};
function ie(r, e, t, n, i, s = !1) {
  if (e.inlineContent)
    return T.create(r, t);
  for (let o = n - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && M.isSelectable(l))
        return M.create(r, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = ie(r, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Bt(r, e, t) {
  let n = r.steps.length - 1;
  if (n < e)
    return;
  let i = r.steps[n];
  if (!(i instanceof R || i instanceof N))
    return;
  let s = r.mapping.maps[n], o;
  s.forEach((l, a, c, f) => {
    o == null && (o = f);
  }), r.setSelection(S.near(r.doc.resolve(o), t));
}
function Ft(r, e) {
  return !e || !r ? r : r.bind(e);
}
class be {
  constructor(e, t, n) {
    this.name = e, this.init = Ft(t.init, n), this.apply = Ft(t.apply, n);
  }
}
new be("doc", {
  init(r) {
    return r.doc || r.schema.topNodeType.createAndFill();
  },
  apply(r) {
    return r.doc;
  }
}), new be("selection", {
  init(r, e) {
    return r.selection || S.atStart(e.doc);
  },
  apply(r) {
    return r.selection;
  }
}), new be("storedMarks", {
  init(r) {
    return r.storedMarks || null;
  },
  apply(r, e, t, n) {
    return n.selection.$cursor ? r.storedMarks : null;
  }
}), new be("scrollToSelection", {
  init() {
    return 0;
  },
  apply(r, e) {
    return r.scrolledIntoView ? e + 1 : e;
  }
});
function gn(r, e, t) {
  for (let n in r) {
    let i = r[n];
    i instanceof Function ? i = i.bind(e) : n == "handleDOMEvents" && (i = gn(i, e, {})), t[n] = i;
  }
  return t;
}
class Z {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && gn(e.props, this, this.props), this.key = e.key ? e.key.key : wn("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ke = /* @__PURE__ */ Object.create(null);
function wn(r) {
  return r in Ke ? r + "$" + ++Ke[r] : (Ke[r] = 0, r + "$");
}
class Q {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = wn(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const st = (r, e) => r.selection.empty ? !1 : (e && e(r.tr.deleteSelection().scrollIntoView()), !0);
function xn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("backward", r) : t.parentOffset > 0) ? null : t;
}
const kn = (r, e, t) => {
  let n = xn(r, t);
  if (!n)
    return !1;
  let i = ot(n);
  if (!i) {
    let o = n.blockRange(), l = o && ce(o);
    return l == null ? !1 : (e && e(r.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (In(r, i, e, -1))
    return !0;
  if (n.parent.content.size == 0 && (ae(s, "end") || M.isSelectable(s)))
    for (let o = n.depth; ; o--) {
      let l = De(r.doc, n.before(o), n.after(o), x.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = r.tr.step(l);
          a.setSelection(ae(s, "end") ? S.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : M.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || n.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Vr = (r, e, t) => {
  let n = xn(r, t);
  if (!n)
    return !1;
  let i = ot(n);
  return i ? vn(r, i, e) : !1;
}, qr = (r, e, t) => {
  let n = Sn(r, t);
  if (!n)
    return !1;
  let i = lt(n);
  return i ? vn(r, i, e) : !1;
};
function vn(r, e, t) {
  let n = e.nodeBefore, i = n, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let f = i.lastChild;
    if (!f)
      return !1;
    i = f;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let f = l.firstChild;
    if (!f)
      return !1;
    l = f;
  }
  let c = De(r.doc, s, a, x.empty);
  if (!c || c.from != s || c instanceof R && c.slice.size >= a - s)
    return !1;
  if (t) {
    let f = r.tr.step(c);
    f.setSelection(T.create(f.doc, s)), t(f.scrollIntoView());
  }
  return !0;
}
function ae(r, e, t = !1) {
  for (let n = r; n; n = e == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (t && n.childCount != 1)
      return !1;
  }
  return !1;
}
const bn = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    s = ot(n);
  }
  let o = s && s.nodeBefore;
  return !o || !M.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(M.create(r.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function ot(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      if (r.index(e) > 0)
        return r.doc.resolve(r.before(e + 1));
      if (r.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Sn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("forward", r) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Mn = (r, e, t) => {
  let n = Sn(r, t);
  if (!n)
    return !1;
  let i = lt(n);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (In(r, i, e, 1))
    return !0;
  if (n.parent.content.size == 0 && (ae(s, "start") || M.isSelectable(s))) {
    let o = De(r.doc, n.before(), n.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = r.tr.step(o);
        l.setSelection(ae(s, "start") ? S.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : M.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Cn = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    s = lt(n);
  }
  let o = s && s.nodeAfter;
  return !o || !M.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(M.create(r.doc, s.pos)).scrollIntoView()), !0);
};
function lt(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.node(e);
      if (r.index(e) + 1 < t.childCount)
        return r.doc.resolve(r.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const _r = (r, e) => {
  let t = r.selection, n = t instanceof M, i;
  if (n) {
    if (t.node.isTextblock || !H(r.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = $e(r.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = r.tr.join(i);
    n && s.setSelection(M.create(s.doc, i - r.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Ur = (r, e) => {
  let t = r.selection, n;
  if (t instanceof M) {
    if (t.node.isTextblock || !H(r.doc, t.to))
      return !1;
    n = t.to;
  } else if (n = $e(r.doc, t.to, 1), n == null)
    return !1;
  return e && e(r.tr.join(n).scrollIntoView()), !0;
}, Kr = (r, e) => {
  let { $from: t, $to: n } = r.selection, i = t.blockRange(n), s = i && ce(i);
  return s == null ? !1 : (e && e(r.tr.lift(i, s).scrollIntoView()), !0);
}, En = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function at(r) {
  for (let e = 0; e < r.edgeCount; e++) {
    let { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Hr = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  if (!t.parent.type.spec.code || !t.sameParent(n))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = at(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = r.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(S.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Tn = (r, e) => {
  let t = r.selection, { $from: n, $to: i } = t;
  if (t instanceof D || n.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = at(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos, l = r.tr.insert(o, s.createAndFill());
    l.setSelection(T.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, An = (r, e) => {
  let { $cursor: t } = r.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (V(r.doc, s))
      return e && e(r.tr.split(s).scrollIntoView()), !0;
  }
  let n = t.blockRange(), i = n && ce(n);
  return i == null ? !1 : (e && e(r.tr.lift(n, i).scrollIntoView()), !0);
};
function Zr(r) {
  return (e, t) => {
    let { $from: n, $to: i } = e.selection;
    if (e.selection instanceof M && e.selection.node.isBlock)
      return !n.parentOffset || !V(e.doc, n.pos) ? !1 : (t && t(e.tr.split(n.pos).scrollIntoView()), !0);
    if (!n.depth)
      return !1;
    let s = [], o, l, a = !1, c = !1;
    for (let d = n.depth; ; d--)
      if (n.node(d).isBlock) {
        a = n.end(d) == n.pos + (n.depth - d), c = n.start(d) == n.pos - (n.depth - d), l = at(n.node(d - 1).contentMatchAt(n.indexAfter(d - 1))), s.unshift(a && l ? { type: l } : null), o = d;
        break;
      } else {
        if (d == 1)
          return !1;
        s.unshift(null);
      }
    let f = e.tr;
    (e.selection instanceof T || e.selection instanceof D) && f.deleteSelection();
    let u = f.mapping.map(n.pos), h = V(f.doc, u, s.length, s);
    if (h || (s[0] = l ? { type: l } : null, h = V(f.doc, u, s.length, s)), !h)
      return !1;
    if (f.split(u, s.length, s), !a && c && n.node(o).type != l) {
      let d = f.mapping.map(n.before(o)), p = f.doc.resolve(d);
      l && n.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l) && f.setNodeMarkup(f.mapping.map(n.before(o)), l);
    }
    return t && t(f.scrollIntoView()), !0;
  };
}
const Qr = Zr(), Gr = (r, e) => {
  let { $from: t, to: n } = r.selection, i, s = t.sharedDepth(n);
  return s == 0 ? !1 : (i = t.before(s), e && e(r.tr.setSelection(M.create(r.doc, i))), !0);
};
function Xr(r, e, t) {
  let n = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && e.parent.canReplace(s - 1, s) ? (t && t(r.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || H(r.doc, e.pos)) ? !1 : (t && t(r.tr.join(e.pos).scrollIntoView()), !0);
}
function In(r, e, t, n) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && Xr(r, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let d = e.pos + s.nodeSize, p = g.empty;
      for (let w = o.length - 1; w >= 0; w--)
        p = g.from(o[w].create(null, p));
      p = g.from(i.copy(p));
      let m = r.tr.step(new N(e.pos - 1, d, e.pos, d, new x(p, 1, 0), o.length, !0)), y = m.doc.resolve(d + 2 * o.length);
      y.nodeAfter && y.nodeAfter.type == i.type && H(m.doc, y.pos) && m.join(y.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let f = s.type.spec.isolating || n > 0 && a ? null : S.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), h = u && ce(u);
  if (h != null && h >= e.depth)
    return t && t(r.tr.lift(u, h).scrollIntoView()), !0;
  if (c && ae(s, "start", !0) && ae(i, "end")) {
    let d = i, p = [];
    for (; p.push(d), !d.isTextblock; )
      d = d.lastChild;
    let m = s, y = 1;
    for (; !m.isTextblock; m = m.firstChild)
      y++;
    if (d.canReplace(d.childCount, d.childCount, m.content)) {
      if (t) {
        let w = g.empty;
        for (let v = p.length - 1; v >= 0; v--)
          w = g.from(p[v].copy(w));
        let k = r.tr.step(new N(e.pos - p.length, e.pos + s.nodeSize, e.pos + y, e.pos + s.nodeSize - y, new x(w, p.length, 0), 0, !0));
        t(k.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Rn(r) {
  return function(e, t) {
    let n = e.selection, i = r < 0 ? n.$from : n.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(T.create(e.doc, r < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Yr = Rn(-1), ei = Rn(1);
function ti(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && rt(o, r, e);
    return l ? (n && n(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Pt(r, e = null) {
  return function(t, n) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(r, e)))
          if (a.type == r)
            i = !0;
          else {
            let f = t.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, r);
          }
      });
    }
    if (!i)
      return !1;
    if (n) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, r, e);
      }
      n(s.scrollIntoView());
    }
    return !0;
  };
}
function ct(...r) {
  return function(e, t, n) {
    for (let i = 0; i < r.length; i++)
      if (r[i](e, t, n))
        return !0;
    return !1;
  };
}
ct(st, kn, bn);
ct(st, Mn, Cn);
ct(En, Tn, An, Qr);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function ni(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = n ? t.tr : null;
    return ri(l, o, r, e) ? (n && n(l.scrollIntoView()), !0) : !1;
  };
}
function ri(r, e, t, n = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    s = new Ne(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Ne(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = rt(s, t, n, e);
  return l ? (r && ii(r, e, l, i, t), !0) : !1;
}
function ii(r, e, t, n, i) {
  let s = g.empty;
  for (let f = t.length - 1; f >= 0; f--)
    s = g.from(t[f].type.create(t[f].attrs, s));
  r.step(new N(e.start - (n ? 2 : 0), e.end, e.start, e.end, new x(s, 0, 0), t.length, !0));
  let o = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (o = f + 1);
  let l = t.length - o, a = e.start + t.length - (n ? 2 : 0), c = e.parent;
  for (let f = e.startIndex, u = e.endIndex, h = !0; f < u; f++, h = !1)
    !h && V(r.doc, a, l) && (r.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
  return r;
}
function si(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == r);
    return s ? t ? n.node(s.depth - 1).type == r ? oi(e, t, r, s) : li(e, t, s) : !0 : !1;
  };
}
function oi(r, e, t, n) {
  let i = r.tr, s = n.end, o = n.$to.end(n.depth);
  s < o && (i.step(new N(s - 1, o, s, o, new x(g.from(t.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new Ne(i.doc.resolve(n.$from.pos), i.doc.resolve(o), n.depth));
  const l = ce(n);
  if (l == null)
    return !1;
  i.lift(n, l);
  let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return H(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function li(r, e, t) {
  let n = r.tr, i = t.parent;
  for (let d = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    d -= i.child(p).nodeSize, n.delete(d - 1, d + 1);
  let s = n.doc.resolve(t.start), o = s.nodeAfter;
  if (n.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), f = s.index(-1);
  if (!c.canReplace(f + (l ? 0 : 1), f + 1, o.content.append(a ? g.empty : g.from(i))))
    return !1;
  let u = s.pos, h = u + o.nodeSize;
  return n.step(new N(u - (l ? 1 : 0), h + (a ? 1 : 0), u + 1, h - 1, new x((l ? g.empty : g.from(i.copy(g.empty))).append(a ? g.empty : g.from(i.copy(g.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(n.scrollIntoView()), !0;
}
function ai(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == r);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != r)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, f = g.from(c ? r.create() : null), u = new x(g.from(r.create(null, g.from(l.type.create(null, f)))), c ? 3 : 1, 0), h = s.start, d = s.end;
      t(e.tr.step(new N(h - (c ? 3 : 1), d, h, d, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var ci = Object.defineProperty, ft = (r, e) => {
  for (var t in e)
    ci(r, t, { get: e[t], enumerable: !0 });
};
function Nn(r) {
  const { state: e, transaction: t } = r;
  let { selection: n } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return n;
    },
    get doc() {
      return i;
    },
    get tr() {
      return n = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
var fi = class {
  constructor(r) {
    this.editor = r.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = r.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: r, editor: e, state: t } = this, { view: n } = e, { tr: i } = t, s = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(r).map(([o, l]) => [o, (...c) => {
        const f = l(...c)(s);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && n.dispatch(i), f;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(r, e = !0) {
    const { rawCommands: t, editor: n, state: i } = this, { view: s } = n, o = [], l = !!r, a = r || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(a), o.every((u) => u === !0)), f = {
      ...Object.fromEntries(
        Object.entries(t).map(([u, h]) => [u, (...p) => {
          const m = this.buildProps(a, e), y = h(...p)(m);
          return o.push(y), f;
        }])
      ),
      run: c
    };
    return f;
  }
  createCan(r) {
    const { rawCommands: e, state: t } = this, n = !1, i = r || t.tr, s = this.buildProps(i, n);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...s, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, n)
    };
  }
  buildProps(r, e = !0) {
    const { rawCommands: t, editor: n, state: i } = this, { view: s } = n, o = {
      tr: r,
      editor: n,
      view: s,
      state: Nn({
        state: i,
        transaction: r
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(r, e),
      can: () => this.createCan(r),
      get commands() {
        return Object.fromEntries(
          Object.entries(t).map(([l, a]) => [l, (...c) => a(...c)(o)])
        );
      }
    };
    return o;
  }
}, On = {};
ft(On, {
  blur: () => ui,
  clearContent: () => hi,
  clearNodes: () => di,
  command: () => pi,
  createParagraphNear: () => mi,
  cut: () => yi,
  deleteCurrentNode: () => gi,
  deleteNode: () => wi,
  deleteRange: () => xi,
  deleteSelection: () => ki,
  enter: () => vi,
  exitCode: () => bi,
  extendMarkRange: () => Mi,
  first: () => Ci,
  focus: () => Ai,
  forEach: () => Ii,
  insertContent: () => Ri,
  insertContentAt: () => zi,
  joinBackward: () => Pi,
  joinDown: () => Fi,
  joinForward: () => $i,
  joinItemBackward: () => Di,
  joinItemForward: () => Ji,
  joinTextblockBackward: () => Li,
  joinTextblockForward: () => ji,
  joinUp: () => Bi,
  keyboardShortcut: () => Vi,
  lift: () => qi,
  liftEmptyBlock: () => _i,
  liftListItem: () => Ui,
  newlineInCode: () => Ki,
  resetAttributes: () => Hi,
  scrollIntoView: () => Zi,
  selectAll: () => Qi,
  selectNodeBackward: () => Gi,
  selectNodeForward: () => Xi,
  selectParentNode: () => Yi,
  selectTextblockEnd: () => es,
  selectTextblockStart: () => ts,
  setContent: () => rs,
  setMark: () => gs,
  setMeta: () => ws,
  setNode: () => xs,
  setNodeSelection: () => ks,
  setTextDirection: () => vs,
  setTextSelection: () => bs,
  sinkListItem: () => Ss,
  splitBlock: () => Ms,
  splitListItem: () => Cs,
  toggleList: () => Es,
  toggleMark: () => Ts,
  toggleNode: () => As,
  toggleWrap: () => Is,
  undoInputRule: () => Rs,
  unsetAllMarks: () => Ns,
  unsetMark: () => Os,
  unsetTextDirection: () => zs,
  updateAttributes: () => Bs,
  wrapIn: () => Fs,
  wrapInList: () => Ps
});
var ui = () => ({ editor: r, view: e }) => (requestAnimationFrame(() => {
  var t;
  r.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) == null || t.removeAllRanges());
}), !0), hi = (r = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: r }), di = () => ({ state: r, tr: e, dispatch: t }) => {
  const { selection: n } = e, { ranges: i } = n;
  return t && i.forEach(({ $from: s, $to: o }) => {
    r.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: f } = e, u = c.resolve(f.map(a)), h = c.resolve(f.map(a + l.nodeSize)), d = u.blockRange(h);
      if (!d)
        return;
      const p = ce(d);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(d.start, m);
      }
      (p || p === 0) && e.lift(d, p);
    });
  }), !0;
}, pi = (r) => (e) => r(e), mi = () => ({ state: r, dispatch: e }) => Tn(r, e), yi = (r, e) => ({ editor: t, tr: n }) => {
  const { state: i } = t, s = i.doc.slice(r.from, r.to);
  n.deleteRange(r.from, r.to);
  const o = n.mapping.map(e);
  return n.insert(o, s.content), n.setSelection(new T(n.doc.resolve(Math.max(o - 1, 0)))), !0;
}, gi = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, n = t.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const i = r.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === n.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        r.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function z(r, e) {
  if (typeof r == "string") {
    if (!e.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return e.nodes[r];
  }
  return r;
}
var wi = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const i = z(r, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (n) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, xi = (r) => ({ tr: e, dispatch: t }) => {
  const { from: n, to: i } = r;
  return t && e.delete(n, i), !0;
}, ki = () => ({ state: r, dispatch: e }) => st(r, e), vi = () => ({ commands: r }) => r.keyboardShortcut("Enter"), bi = () => ({ state: r, dispatch: e }) => Hr(r, e);
function Si(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
function Fe(r, e, t = { strict: !0 }) {
  const n = Object.keys(e);
  return n.length ? n.every((i) => t.strict ? e[i] === r[i] : Si(e[i]) ? e[i].test(r[i]) : e[i] === r[i]) : !0;
}
function zn(r, e, t = {}) {
  return r.find((n) => n.type === e && Fe(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, n.attrs[i]])),
    t
  ));
}
function $t(r, e, t = {}) {
  return !!zn(r, e, t);
}
function ut(r, e, t) {
  var n;
  if (!r || !e)
    return;
  let i = r.parent.childAfter(r.parentOffset);
  if ((!i.node || !i.node.marks.some((f) => f.type === e)) && (i = r.parent.childBefore(r.parentOffset)), !i.node || !i.node.marks.some((f) => f.type === e) || (t = t || ((n = i.node.marks[0]) == null ? void 0 : n.attrs), !zn([...i.node.marks], e, t)))
    return;
  let o = i.index, l = r.start() + i.offset, a = o + 1, c = l + i.node.nodeSize;
  for (; o > 0 && $t([...r.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= r.parent.child(o).nodeSize;
  for (; a < r.parent.childCount && $t([...r.parent.child(a).marks], e, t); )
    c += r.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function G(r, e) {
  if (typeof r == "string") {
    if (!e.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return e.marks[r];
  }
  return r;
}
var Mi = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const s = G(r, n.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: f } = l;
  if (i) {
    const u = ut(a, s, e);
    if (u && u.from <= c && u.to >= f) {
      const h = T.create(o, u.from, u.to);
      t.setSelection(h);
    }
  }
  return !0;
}, Ci = (r) => (e) => {
  const t = typeof r == "function" ? r(e) : r;
  for (let n = 0; n < t.length; n += 1)
    if (t[n](e))
      return !0;
  return !1;
};
function Bn(r) {
  return r instanceof T;
}
function X(r = 0, e = 0, t = 0) {
  return Math.min(Math.max(r, e), t);
}
function Ei(r, e = null) {
  if (!e)
    return null;
  const t = S.atStart(r), n = S.atEnd(r);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return n;
  const i = t.from, s = n.to;
  return e === "all" ? T.create(r, X(0, i, s), X(r.content.size, i, s)) : T.create(r, X(e, i, s), X(e, i, s));
}
function Ti() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function ht() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var Ai = (r = null, e = {}) => ({ editor: t, view: n, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (ht() || Ti()) && n.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (n.focus(), e?.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (n.hasFocus() && r === null || r === !1)
    return !0;
  if (s && r === null && !Bn(t.state.selection))
    return o(), !0;
  const l = Ei(i.doc, r) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, Ii = (r, e) => (t) => r.every((n, i) => e(n, { ...t, index: i })), Ri = (r, e) => ({ tr: t, commands: n }) => n.insertContentAt({ from: t.selection.from, to: t.selection.to }, r, e), Fn = (r) => {
  const e = r.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const n = e[t];
    n.nodeType === 3 && n.nodeValue && /^(\n\s\s|\n)$/.test(n.nodeValue) ? r.removeChild(n) : n.nodeType === 1 && Fn(n);
  }
  return r;
};
function Se(r) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${r}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Fn(t);
}
function ge(r, e, t) {
  if (r instanceof L || r instanceof g)
    return r;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const n = typeof r == "object" && r !== null, i = typeof r == "string";
  if (n)
    try {
      if (Array.isArray(r) && r.length > 0)
        return g.fromArray(r.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(r);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", s), ge("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new fr({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? se.fromSchema(a).parseSlice(Se(r), t.parseOptions) : se.fromSchema(a).parse(Se(r), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const s = se.fromSchema(e);
    return t.slice ? s.parseSlice(Se(r), t.parseOptions).content : s.parse(Se(r), t.parseOptions);
  }
  return ge("", e, t);
}
function Ni(r, e, t) {
  const n = r.steps.length - 1;
  if (n < e)
    return;
  const i = r.steps[n];
  if (!(i instanceof R || i instanceof N))
    return;
  const s = r.mapping.maps[n];
  let o = 0;
  s.forEach((l, a, c, f) => {
    o === 0 && (o = f);
  }), r.setSelection(S.near(r.doc.resolve(o), t));
}
var Oi = (r) => !("type" in r), zi = (r, e, t) => ({ tr: n, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (y) => {
      s.emit("contentError", {
        editor: s,
        error: y,
        disableCollaboration: () => {
          "collaboration" in s.storage && typeof s.storage.collaboration == "object" && s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        ge(e, s.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        a(y);
      }
    try {
      l = ge(e, s.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) != null ? o : s.options.enableContentCheck
      });
    } catch (y) {
      return a(y), !1;
    }
    let { from: f, to: u } = typeof r == "number" ? { from: r, to: r } : { from: r.from, to: r.to }, h = !0, d = !0;
    if ((Oi(l) ? l : [l]).forEach((y) => {
      y.check(), h = h ? y.isText && y.marks.length === 0 : !1, d = d ? y.isBlock : !1;
    }), f === u && d) {
      const { parent: y } = n.doc.resolve(f);
      y.isTextblock && !y.type.spec.code && !y.childCount && (f -= 1, u += 1);
    }
    let m;
    if (h) {
      if (Array.isArray(e))
        m = e.map((y) => y.text || "").join("");
      else if (e instanceof g) {
        let y = "";
        e.forEach((w) => {
          w.text && (y += w.text);
        }), m = y;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      n.insertText(m, f, u);
    } else {
      m = l;
      const y = n.doc.resolve(f), w = y.node(), k = y.parentOffset === 0, v = w.isText || w.isTextblock, C = w.content.size > 0;
      k && v && C && (f = Math.max(0, f - 1)), n.replaceWith(f, u, m);
    }
    t.updateSelection && Ni(n, n.steps.length - 1, -1), t.applyInputRules && n.setMeta("applyInputRules", { from: f, text: m }), t.applyPasteRules && n.setMeta("applyPasteRules", { from: f, text: m });
  }
  return !0;
}, Bi = () => ({ state: r, dispatch: e }) => _r(r, e), Fi = () => ({ state: r, dispatch: e }) => Ur(r, e), Pi = () => ({ state: r, dispatch: e }) => kn(r, e), $i = () => ({ state: r, dispatch: e }) => Mn(r, e), Di = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = $e(r.doc, r.selection.$from.pos, -1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ji = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = $e(r.doc, r.selection.$from.pos, 1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Li = () => ({ state: r, dispatch: e }) => Vr(r, e), ji = () => ({ state: r, dispatch: e }) => qr(r, e);
function Pn() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Wi(r) {
  const e = r.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let n, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ht() || Pn() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return n && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
var Vi = (r) => ({ editor: e, view: t, tr: n, dispatch: i }) => {
  const s = Wi(r).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a?.steps.forEach((c) => {
    const f = c.map(n.mapping);
    f && i && n.maybeStep(f);
  }), !0;
};
function dt(r, e, t = {}) {
  const { from: n, to: i, empty: s } = r.selection, o = e ? z(e, r.schema) : null, l = [];
  r.doc.nodesBetween(n, i, (u, h) => {
    if (u.isText)
      return;
    const d = Math.max(n, h), p = Math.min(i, h + u.nodeSize);
    l.push({
      node: u,
      from: d,
      to: p
    });
  });
  const a = i - n, c = l.filter((u) => o ? o.name === u.node.type.name : !0).filter((u) => Fe(u.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((u, h) => u + h.to - h.from, 0) >= a;
}
var qi = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = z(r, t.schema);
  return dt(t, i, e) ? Kr(t, n) : !1;
}, _i = () => ({ state: r, dispatch: e }) => An(r, e), Ui = (r) => ({ state: e, dispatch: t }) => {
  const n = z(r, e.schema);
  return si(n)(e, t);
}, Ki = () => ({ state: r, dispatch: e }) => En(r, e);
function pt(r, e) {
  return e.nodes[r] ? "node" : e.marks[r] ? "mark" : null;
}
function Dt(r, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(r).reduce((n, i) => (t.includes(i) || (n[i] = r[i]), n), {});
}
var Hi = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = pt(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  if (!l)
    return !1;
  l === "node" && (s = z(r, n.schema)), l === "mark" && (o = G(r, n.schema));
  let a = !1;
  return t.selection.ranges.forEach((c) => {
    n.doc.nodesBetween(c.$from.pos, c.$to.pos, (f, u) => {
      s && s === f.type && (a = !0, i && t.setNodeMarkup(u, void 0, Dt(f.attrs, e))), o && f.marks.length && f.marks.forEach((h) => {
        o === h.type && (a = !0, i && t.addMark(u, u + f.nodeSize, o.create(Dt(h.attrs, e))));
      });
    });
  }), a;
}, Zi = () => ({ tr: r, dispatch: e }) => (e && r.scrollIntoView(), !0), Qi = () => ({ tr: r, dispatch: e }) => {
  if (e) {
    const t = new D(r.doc);
    r.setSelection(t);
  }
  return !0;
}, Gi = () => ({ state: r, dispatch: e }) => bn(r, e), Xi = () => ({ state: r, dispatch: e }) => Cn(r, e), Yi = () => ({ state: r, dispatch: e }) => Gr(r, e), es = () => ({ state: r, dispatch: e }) => ei(r, e), ts = () => ({ state: r, dispatch: e }) => Yr(r, e);
function ns(r, e, t = {}, n = {}) {
  return ge(r, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: n.errorOnInvalidContent
  });
}
var rs = (r, { errorOnInvalidContent: e, emitUpdate: t = !0, parseOptions: n = {} } = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  const { doc: a } = s;
  if (n.preserveWhitespace !== "full") {
    const c = ns(r, i.schema, n, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return o && s.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !t), !0;
  }
  return o && s.setMeta("preventUpdate", !t), l.insertContentAt({ from: 0, to: a.content.size }, r, {
    parseOptions: n,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function $n(r, e) {
  const t = G(e, r.schema), { from: n, to: i, empty: s } = r.selection, o = [];
  s ? (r.storedMarks && o.push(...r.storedMarks), o.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function is(r, e) {
  const t = new Lr(r);
  return e.forEach((n) => {
    n.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function ss(r) {
  for (let e = 0; e < r.edgeCount; e += 1) {
    const { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function so(r, e, t) {
  const n = [];
  return r.nodesBetween(e.from, e.to, (i, s) => {
    t(i) && n.push({
      node: i,
      pos: s
    });
  }), n;
}
function ls(r, e) {
  for (let t = r.depth; t > 0; t -= 1) {
    const n = r.node(t);
    if (e(n))
      return {
        pos: t > 0 ? r.before(t) : 0,
        start: r.start(t),
        depth: t,
        node: n
      };
  }
}
function Le(r) {
  return (e) => ls(e.$from, r);
}
function we(r, e, t) {
  return r.config[e] === void 0 && r.parent ? we(r.parent, e, t) : typeof r.config[e] == "function" ? r.config[e].bind({
    ...t,
    parent: r.parent ? we(r.parent, e, t) : null
  }) : r.config[e];
}
function as(r) {
  return typeof r == "function";
}
function re(r, e = void 0, ...t) {
  return as(r) ? e ? r.bind(e)(...t) : r(...t) : r;
}
function Dn(r) {
  const e = r.filter((i) => i.type === "extension"), t = r.filter((i) => i.type === "node"), n = r.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: n
  };
}
function oo(...r) {
  return r.filter((e) => !!e).reduce((e, t) => {
    const n = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!n[i]) {
        n[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? String(s).split(" ") : [], a = n[i] ? n[i].split(" ") : [], c = l.filter((f) => !a.includes(f));
        n[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = s ? s.split(";").map((f) => f.trim()).filter(Boolean) : [], a = n[i] ? n[i].split(";").map((f) => f.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((f) => {
          const [u, h] = f.split(":").map((d) => d.trim());
          c.set(u, h);
        }), l.forEach((f) => {
          const [u, h] = f.split(":").map((d) => d.trim());
          c.set(u, h);
        }), n[i] = Array.from(c.entries()).map(([f, u]) => `${f}: ${u}`).join("; ");
      } else
        n[i] = s;
    }), n;
  }, {});
}
function cs(r, e, t) {
  const { from: n, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return r.nodesBetween(n, i, (a, c, f, u) => {
    var h;
    a.isBlock && c > n && (l += s);
    const d = o?.[a.type.name];
    if (d)
      return f && (l += d({
        node: a,
        pos: c,
        parent: f,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (h = a?.text) == null ? void 0 : h.slice(Math.max(n, c) - c, i - c));
  }), l;
}
function fs(r) {
  return Object.fromEntries(
    Object.entries(r.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText])
  );
}
function us(r, e) {
  const t = z(e, r.schema), { from: n, to: i } = r.selection, s = [];
  r.doc.nodesBetween(n, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function lo(r, e) {
  const t = pt(
    typeof e == "string" ? e : e.name,
    r.schema
  );
  return t === "node" ? us(r, e) : t === "mark" ? $n(r, e) : {};
}
function hs(r, e = JSON.stringify) {
  const t = {};
  return r.filter((n) => {
    const i = e(n);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function ds(r) {
  const e = hs(r);
  return e.length === 1 ? e : e.filter((t, n) => !e.filter((s, o) => o !== n).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function ps(r) {
  const { mapping: e, steps: t } = r, n = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[s];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(s).map(l, -1), f = e.slice(s).map(a), u = e.invert().map(c, -1), h = e.invert().map(f);
      n.push({
        oldRange: {
          from: u,
          to: h
        },
        newRange: {
          from: c,
          to: f
        }
      });
    });
  }), ds(n);
}
function Jn(r, e, t) {
  const n = [];
  return r === e ? t.resolve(r).marks().forEach((i) => {
    const s = t.resolve(r), o = ut(s, i.type);
    o && n.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(r, e, (i, s) => {
    !i || i?.nodeSize === void 0 || n.push(
      ...i.marks.map((o) => ({
        from: s,
        to: s + i.nodeSize,
        mark: o
      }))
    );
  }), n;
}
var ao = (r, e, t, n = 20) => {
  const i = r.doc.resolve(t);
  let s = n, o = null;
  for (; s > 0 && o === null; ) {
    const l = i.node(s);
    l?.type.name === e ? o = l : s -= 1;
  }
  return [o, s];
};
function Te(r, e, t) {
  return Object.fromEntries(
    Object.entries(t).filter(([n]) => {
      const i = r.find((s) => s.type === e && s.name === n);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
function ms(r, e, t = {}) {
  const { empty: n, ranges: i } = r.selection, s = e ? G(e, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => Fe(u.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: h }) => {
    const d = u.pos, p = h.pos;
    r.doc.nodesBetween(d, p, (m, y) => {
      if (!m.isText && !m.marks.length)
        return;
      const w = Math.max(d, y), k = Math.min(p, y + m.nodeSize), v = k - w;
      o += v, l.push(
        ...m.marks.map((C) => ({
          mark: C,
          from: w,
          to: k
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => Fe(u.mark.attrs, t, { strict: !1 })).reduce((u, h) => u + h.to - h.from, 0), c = l.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, h) => u + h.to - h.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
var co = (r, e) => {
  const { $from: t, $to: n, $anchor: i } = r.selection;
  if (e) {
    const s = Le((l) => l.type.name === e)(r.selection);
    if (!s)
      return !1;
    const o = r.doc.resolve(s.pos + 1);
    return i.pos + 1 === o.end();
  }
  return !(n.parentOffset < n.parent.nodeSize - 2 || t.pos !== n.pos);
}, fo = (r) => {
  const { $from: e, $to: t } = r.selection;
  return !(e.parentOffset > 0 || e.pos !== t.pos);
};
function Jt(r, e) {
  const { nodeExtensions: t } = Dn(e), n = t.find((o) => o.name === r);
  if (!n)
    return !1;
  const i = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, s = re(we(n, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Ln(r, {
  checkChildren: e = !0,
  ignoreWhitespace: t = !1
} = {}) {
  var n;
  if (t) {
    if (r.type.name === "hardBreak")
      return !0;
    if (r.isText)
      return /^\s*$/m.test((n = r.text) != null ? n : "");
  }
  if (r.isText)
    return !r.text;
  if (r.isAtom || r.isLeaf)
    return !1;
  if (r.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return r.content.forEach((s) => {
      i !== !1 && (Ln(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function uo(r) {
  return r instanceof M;
}
function ys(r, e, t) {
  var n;
  const { selection: i } = e;
  let s = null;
  if (Bn(i) && (s = i.$cursor), s) {
    const l = (n = r.storedMarks) != null ? n : s.marks();
    return s.parent.type.allowsMarkType(t) && (!!t.isInSet(l) || !l.some((c) => c.type.excludes(t)));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(t) : !1;
    return r.doc.nodesBetween(l.pos, a.pos, (f, u, h) => {
      if (c)
        return !1;
      if (f.isInline) {
        const d = !h || h.type.allowsMarkType(t), p = !!t.isInSet(f.marks) || !f.marks.some((m) => m.type.excludes(t));
        c = d && p;
      }
      return !c;
    }), c;
  });
}
var gs = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = G(r, n.schema);
  if (i)
    if (o) {
      const c = $n(n, a);
      t.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const f = c.$from.pos, u = c.$to.pos;
        n.doc.nodesBetween(f, u, (h, d) => {
          const p = Math.max(d, f), m = Math.min(d + h.nodeSize, u);
          h.marks.find((w) => w.type === a) ? h.marks.forEach((w) => {
            a === w.type && t.addMark(
              p,
              m,
              a.create({
                ...w.attrs,
                ...e
              })
            );
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return ys(n, t, a);
}, ws = (r, e) => ({ tr: t }) => (t.setMeta(r, e), !0), xs = (r, e = {}) => ({ state: t, dispatch: n, chain: i }) => {
  const s = z(r, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => Pt(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => Pt(s, { ...o, ...e })(l, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, ks = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, i = X(r, 0, n.content.size), s = M.create(n, i);
    e.setSelection(s);
  }
  return !0;
}, vs = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: s } = n;
  let o, l;
  return typeof e == "number" ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = e.from, l = e.to) : (o = s.from, l = s.to), i && t.doc.nodesBetween(o, l, (a, c) => {
    a.isText || t.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: r
    });
  }), !0;
}, bs = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, { from: i, to: s } = typeof r == "number" ? { from: r, to: r } : r, o = T.atStart(n).from, l = T.atEnd(n).to, a = X(i, o, l), c = X(s, o, l), f = T.create(n, a, c);
    e.setSelection(f);
  }
  return !0;
}, Ss = (r) => ({ state: e, dispatch: t }) => {
  const n = z(r, e.schema);
  return ai(n)(e, t);
};
function Lt(r, e) {
  const t = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (t) {
    const n = t.filter((i) => e?.includes(i.type.name));
    r.tr.ensureMarks(n);
  }
}
var Ms = ({ keepMarks: r = !0 } = {}) => ({ tr: e, state: t, dispatch: n, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, f = Te(c, l.node().type.name, l.node().attrs);
  if (s instanceof M && s.node.isBlock)
    return !l.parentOffset || !V(o, l.pos) ? !1 : (n && (r && Lt(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, h = l.depth === 0 ? void 0 : ss(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let d = u && h ? [
    {
      type: h,
      attrs: f
    }
  ] : void 0, p = V(e.doc, e.mapping.map(l.pos), 1, d);
  if (!d && !p && V(e.doc, e.mapping.map(l.pos), 1, h ? [{ type: h }] : void 0) && (p = !0, d = h ? [
    {
      type: h,
      attrs: f
    }
  ] : void 0), n) {
    if (p && (s instanceof T && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, d), h && !u && !l.parentOffset && l.parent.type !== h)) {
      const m = e.mapping.map(l.before()), y = e.doc.resolve(m);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, h) && e.setNodeMarkup(e.mapping.map(l.before()), h);
    }
    r && Lt(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Cs = (r, e = {}) => ({ tr: t, state: n, dispatch: i, editor: s }) => {
  var o;
  const l = z(r, n.schema), { $from: a, $to: c } = n.selection, f = n.selection.node;
  if (f && f.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const h = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let w = g.empty;
      const k = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let $ = a.depth - k; $ >= a.depth - 3; $ -= 1)
        w = g.from(a.node($).copy(w));
      const v = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), C = {
        ...Te(h, a.node().type.name, a.node().attrs),
        ...e
      }, b = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(C)) || void 0;
      w = w.append(g.from(l.createAndFill(null, b) || void 0));
      const I = a.before(a.depth - (k - 1));
      t.replace(I, a.after(-v), new x(w, 4 - k, 0));
      let B = -1;
      t.doc.nodesBetween(I, t.doc.content.size, ($, q) => {
        if (B > -1)
          return !1;
        $.isTextblock && $.content.size === 0 && (B = q + 1);
      }), B > -1 && t.setSelection(T.near(t.doc.resolve(B))), t.scrollIntoView();
    }
    return !0;
  }
  const d = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, p = {
    ...Te(h, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Te(h, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const y = d ? [
    { type: l, attrs: p },
    { type: d, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!V(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: w, storedMarks: k } = n, { splittableMarks: v } = s.extensionManager, C = k || w.$to.parentOffset && w.$from.marks();
    if (t.split(a.pos, 2, y).scrollIntoView(), !C || !i)
      return !0;
    const b = C.filter((I) => v.includes(I.type.name));
    t.ensureMarks(b);
  }
  return !0;
}, He = (r, e) => {
  const t = Le((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === i?.type && H(r.doc, t.pos) && r.join(t.pos), !0;
}, Ze = (r, e) => {
  const t = Le((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(t.start).after(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === i?.type && H(r.doc, n) && r.join(n), !0;
}, Es = (r, e, t, n = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: f }) => {
  const { extensions: u, splittableMarks: h } = i.extensionManager, d = z(r, o.schema), p = z(e, o.schema), { selection: m, storedMarks: y } = o, { $from: w, $to: k } = m, v = w.blockRange(k), C = y || m.$to.parentOffset && m.$from.marks();
  if (!v)
    return !1;
  const b = Le((I) => Jt(I.type.name, u))(m);
  if (v.depth >= 1 && b && v.depth - b.depth <= 1) {
    if (b.node.type === d)
      return c.liftListItem(p);
    if (Jt(b.node.type.name, u) && d.validContent(b.node.content) && l)
      return a().command(() => (s.setNodeMarkup(b.pos, d), !0)).command(() => He(s, d)).command(() => Ze(s, d)).run();
  }
  return !t || !C || !l ? a().command(() => f().wrapInList(d, n) ? !0 : c.clearNodes()).wrapInList(d, n).command(() => He(s, d)).command(() => Ze(s, d)).run() : a().command(() => {
    const I = f().wrapInList(d, n), B = C.filter(($) => h.includes($.type.name));
    return s.ensureMarks(B), I ? !0 : c.clearNodes();
  }).wrapInList(d, n).command(() => He(s, d)).command(() => Ze(s, d)).run();
}, Ts = (r, e = {}, t = {}) => ({ state: n, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = G(r, n.schema);
  return ms(n, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, As = (r, e, t = {}) => ({ state: n, commands: i }) => {
  const s = z(r, n.schema), o = z(e, n.schema), l = dt(n, s, t);
  let a;
  return n.selection.$anchor.sameParent(n.selection.$head) && (a = n.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t });
}, Is = (r, e = {}) => ({ state: t, commands: n }) => {
  const i = z(r, t.schema);
  return dt(t, i, e) ? n.lift(i) : n.wrapIn(i, e);
}, Rs = () => ({ state: r, dispatch: e }) => {
  const t = r.plugins;
  for (let n = 0; n < t.length; n += 1) {
    const i = t[n];
    let s;
    if (i.spec.isInputRules && (s = i.getState(r))) {
      if (e) {
        const o = r.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, r.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, Ns = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, { empty: n, ranges: i } = t;
  return n || e && i.forEach((s) => {
    r.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Os = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = G(r, n.schema), { $from: c, empty: f, ranges: u } = l;
  if (!i)
    return !0;
  if (f && o) {
    let { from: h, to: d } = l;
    const p = (s = c.marks().find((y) => y.type === a)) == null ? void 0 : s.attrs, m = ut(c, a, p);
    m && (h = m.from, d = m.to), t.removeMark(h, d, a);
  } else
    u.forEach((h) => {
      t.removeMark(h.$from.pos, h.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, zs = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const { selection: i } = t;
  let s, o;
  return typeof r == "number" ? (s = r, o = r) : r && "from" in r && "to" in r ? (s = r.from, o = r.to) : (s = i.from, o = i.to), n && e.doc.nodesBetween(s, o, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Bs = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = pt(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  if (!l)
    return !1;
  l === "node" && (s = z(r, n.schema)), l === "mark" && (o = G(r, n.schema));
  let a = !1;
  return t.selection.ranges.forEach((c) => {
    const f = c.$from.pos, u = c.$to.pos;
    let h, d, p, m;
    t.selection.empty ? n.doc.nodesBetween(f, u, (y, w) => {
      s && s === y.type && (a = !0, p = Math.max(w, f), m = Math.min(w + y.nodeSize, u), h = w, d = y);
    }) : n.doc.nodesBetween(f, u, (y, w) => {
      w < f && s && s === y.type && (a = !0, p = Math.max(w, f), m = Math.min(w + y.nodeSize, u), h = w, d = y), w >= f && w <= u && (s && s === y.type && (a = !0, i && t.setNodeMarkup(w, void 0, {
        ...y.attrs,
        ...e
      })), o && y.marks.length && y.marks.forEach((k) => {
        if (o === k.type && (a = !0, i)) {
          const v = Math.max(w, f), C = Math.min(w + y.nodeSize, u);
          t.addMark(
            v,
            C,
            o.create({
              ...k.attrs,
              ...e
            })
          );
        }
      }));
    }), d && (h !== void 0 && i && t.setNodeMarkup(h, void 0, {
      ...d.attrs,
      ...e
    }), o && d.marks.length && d.marks.forEach((y) => {
      o === y.type && i && t.addMark(
        p,
        m,
        o.create({
          ...y.attrs,
          ...e
        })
      );
    }));
  }), a;
}, Fs = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = z(r, t.schema);
  return ti(i, e)(t, n);
}, Ps = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = z(r, t.schema);
  return ni(i, e)(t, n);
}, mt = class {
  constructor(r) {
    var e;
    this.find = r.find, this.handler = r.handler, this.undoable = (e = r.undoable) != null ? e : !0;
  }
};
function $s(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function Me(r) {
  return $s(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function jn(r, e) {
  const t = { ...r };
  return Me(r) && Me(e) && Object.keys(e).forEach((n) => {
    Me(e[n]) && Me(r[n]) ? t[n] = jn(r[n], e[n]) : t[n] = e[n];
  }), t;
}
var yt = class {
  constructor(r = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...r
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...re(
        we(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...re(
        we(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(r = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => jn(this.options, r)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(r = {}) {
    const e = new this.constructor({ ...this.config, ...r });
    return e.parent = this, this.child = e, e.name = "name" in r ? r.name : e.parent.name, e;
  }
}, ho = class Wn extends yt {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new Wn(t);
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: n } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => c?.type.name === t.name))
        return !1;
      const a = o.find((c) => c?.type.name === t.name);
      return a && n.removeStoredMark(a), n.insertText(" ", i.pos), e.view.dispatch(n), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, Ds = class {
  constructor(r) {
    this.find = r.find, this.handler = r.handler;
  }
}, Js = {};
ft(Js, {
  ClipboardTextSerializer: () => Ls,
  Commands: () => js,
  Delete: () => Ws,
  Drop: () => Vs,
  Editable: () => qs,
  FocusEvents: () => _s,
  Keymap: () => Us,
  Paste: () => Ks,
  Tabindex: () => Hs,
  TextDirection: () => Zs,
  focusEventsPluginKey: () => qn
});
var j = class Vn extends yt {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new Vn(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, Ls = j.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: e, schema: t } = r, { doc: n, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((f) => f.$from.pos)), l = Math.max(...s.map((f) => f.$to.pos)), a = fs(t);
            return cs(n, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), js = j.create({
  name: "commands",
  addCommands() {
    return {
      ...On
    };
  }
}), Ws = j.create({
  name: "delete",
  onUpdate({ transaction: r, appendedTransactions: e }) {
    var t, n, i;
    const s = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, r)) != null ? c : r.getMeta("y-sync$"))
        return;
      const f = is(r.before, [r, ...e]);
      ps(f).forEach((d) => {
        f.mapping.mapResult(d.oldRange.from).deletedAfter && f.mapping.mapResult(d.oldRange.to).deletedBefore && f.before.nodesBetween(d.oldRange.from, d.oldRange.to, (p, m) => {
          const y = m + p.nodeSize - 2, w = d.oldRange.from <= m && y <= d.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: m,
            to: y,
            newFrom: f.mapping.map(m),
            newTo: f.mapping.map(y),
            deletedRange: d.oldRange,
            newRange: d.newRange,
            partial: !w,
            editor: this.editor,
            transaction: r,
            combinedTransform: f
          });
        });
      });
      const h = f.mapping;
      f.steps.forEach((d, p) => {
        var m, y;
        if (d instanceof J) {
          const w = h.slice(p).map(d.from, -1), k = h.slice(p).map(d.to), v = h.invert().map(w, -1), C = h.invert().map(k), b = (m = f.doc.nodeAt(w - 1)) == null ? void 0 : m.marks.some((B) => B.eq(d.mark)), I = (y = f.doc.nodeAt(k)) == null ? void 0 : y.marks.some((B) => B.eq(d.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: d.mark,
            from: d.from,
            to: d.to,
            deletedRange: {
              from: v,
              to: C
            },
            newRange: {
              from: w,
              to: k
            },
            partial: !!(I || b),
            editor: this.editor,
            transaction: r,
            combinedTransform: f
          });
        }
      });
    };
    (i = (n = (t = this.editor.options.coreExtensionOptions) == null ? void 0 : t.delete) == null ? void 0 : n.async) == null || i ? setTimeout(s, 0) : s();
  }
}), Vs = j.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("tiptapDrop"),
        props: {
          handleDrop: (r, e, t, n) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: n
            });
          }
        }
      })
    ];
  }
}), qs = j.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), qn = new Q("focusEvents"), _s = j.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new Z({
        key: qn,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            },
            blur: (e, t) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
}), Us = j.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: f, $anchor: u } = a, { pos: h, parent: d } = u, p = u.parent.isTextblock && h > 0 ? l.doc.resolve(h - 1) : u, m = p.parent.type.spec.isolating, y = u.pos - u.parentOffset, w = m && p.parent.childCount === 1 ? y === u.pos : S.atStart(c).from === h;
        return !f || !d.type.isTextblock || d.textContent.length || !w || w && u.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), n = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...n
    }, s = {
      ...n,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ht() || Pn() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Z({
        key: new Q("clearDocument"),
        appendTransaction: (r, e, t) => {
          if (r.some((m) => m.getMeta("composition")))
            return;
          const n = r.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = r.some((m) => m.getMeta("preventClearDocument"));
          if (!n || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, a = S.atStart(e.doc).from, c = S.atEnd(e.doc).to;
          if (s || !(o === a && l === c) || !Ln(t.doc))
            return;
          const h = t.tr, d = Nn({
            state: t,
            transaction: h
          }), { commands: p } = new fi({
            editor: this.editor,
            state: d
          });
          if (p.clearNodes(), !!h.steps.length)
            return h;
        }
      })
    ];
  }
}), Ks = j.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("tiptapPaste"),
        props: {
          handlePaste: (r, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), Hs = j.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Zs = j.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: r } = Dn(this.extensions);
    return [
      {
        types: r.filter((e) => e.name !== "text").map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              const t = e.getAttribute("dir");
              return t && (t === "ltr" || t === "rtl" || t === "auto") ? t : this.options.direction;
            },
            renderHTML: (e) => e.dir ? {
              dir: e.dir
            } : {}
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new Q("textDirection"),
        props: {
          attributes: () => {
            const r = this.options.direction;
            return r ? {
              dir: r
            } : {};
          }
        }
      })
    ];
  }
});
function po(r) {
  return new mt({
    find: r.find,
    handler: ({ state: e, range: t, match: n }) => {
      const i = re(r.getAttributes, void 0, n);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = n[n.length - 1], l = n[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), f = c + o.length;
        if (Jn(t.from, t.to, e.doc).filter((d) => d.mark.type.excluded.find((m) => m === r.type && m !== d.mark.type)).filter((d) => d.to > c).length)
          return null;
        f < t.to && s.delete(f, t.to), c > t.from && s.delete(t.from + a, c);
        const h = t.from + a + o.length;
        s.addMark(t.from + a, h, r.type.create(i || {})), s.removeStoredMark(r.type);
      }
    },
    undoable: r.undoable
  });
}
function mo(r) {
  return new mt({
    find: r.find,
    handler: ({ state: e, range: t, match: n }) => {
      const i = e.doc.resolve(t.from), s = re(r.getAttributes, void 0, n) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), r.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, r.type, s);
    },
    undoable: r.undoable
  });
}
function yo(r) {
  return new mt({
    find: r.find,
    handler: ({ state: e, range: t, match: n, chain: i }) => {
      const s = re(r.getAttributes, void 0, n) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && rt(a, r.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), r.keepMarks && r.editor) {
        const { selection: u, storedMarks: h } = e, { splittableMarks: d } = r.editor.extensionManager, p = h || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const m = p.filter((y) => d.includes(y.type.name));
          o.ensureMarks(m);
        }
      }
      if (r.keepAttributes) {
        const u = r.type.name === "bulletList" || r.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, s).run();
      }
      const f = o.doc.resolve(t.from - 1).nodeBefore;
      f && f.type === r.type && H(o.doc, t.from - 1) && (!r.joinPredicate || r.joinPredicate(n, f)) && o.join(t.from - 1);
    },
    undoable: r.undoable
  });
}
var Qs = {};
ft(Qs, {
  createAtomBlockMarkdownSpec: () => Gs,
  createBlockMarkdownSpec: () => Xs,
  createInlineMarkdownSpec: () => to,
  parseAttributes: () => gt,
  parseIndentedBlocks: () => no,
  renderNestedMarkdownContent: () => ro,
  serializeAttributes: () => wt
});
function gt(r) {
  if (!r?.trim())
    return {};
  const e = {}, t = [], n = r.replace(/["']([^"']*)["']/g, (c) => (t.push(c), `__QUOTED_${t.length - 1}__`)), i = n.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    const c = i.map((f) => f.trim().slice(1));
    e.class = c.join(" ");
  }
  const s = n.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  s && (e.id = s[1]);
  const o = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(n.matchAll(o)).forEach(([, c, f]) => {
    var u;
    const h = parseInt(((u = f.match(/__QUOTED_(\d+)__/)) == null ? void 0 : u[1]) || "0", 10), d = t[h];
    d && (e[c] = d.slice(1, -1));
  });
  const a = n.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((f) => {
    f.match(/^[a-zA-Z][\w-]*$/) && (e[f] = !0);
  }), e;
}
function wt(r) {
  if (!r || Object.keys(r).length === 0)
    return "";
  const e = [];
  return r.class && String(r.class).split(/\s+/).filter(Boolean).forEach((n) => e.push(`.${n}`)), r.id && e.push(`#${r.id}`), Object.entries(r).forEach(([t, n]) => {
    t === "class" || t === "id" || (n === !0 ? e.push(t) : n !== !1 && n != null && e.push(`${t}="${String(n)}"`));
  }), e.join(" ");
}
function Gs(r) {
  const {
    nodeName: e,
    name: t,
    parseAttributes: n = gt,
    serializeAttributes: i = wt,
    defaultAttributes: s = {},
    requiredAttributes: o = [],
    allowedAttributes: l
  } = r, a = t || e, c = (f) => {
    if (!l)
      return f;
    const u = {};
    return l.forEach((h) => {
      h in f && (u[h] = f[h]);
    }), u;
  };
  return {
    parseMarkdown: (f, u) => {
      const h = { ...s, ...f.attributes };
      return u.createNode(e, h, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(f) {
        var u;
        const h = new RegExp(`^:::${a}(?:\\s|$)`, "m"), d = (u = f.match(h)) == null ? void 0 : u.index;
        return d !== void 0 ? d : -1;
      },
      tokenize(f, u, h) {
        const d = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), p = f.match(d);
        if (!p)
          return;
        const m = p[1] || "", y = n(m);
        if (!o.find((k) => !(k in y)))
          return {
            type: e,
            raw: p[0],
            attributes: y
          };
      }
    },
    renderMarkdown: (f) => {
      const u = c(f.attrs || {}), h = i(u), d = h ? ` {${h}}` : "";
      return `:::${a}${d} :::`;
    }
  };
}
function Xs(r) {
  const {
    nodeName: e,
    name: t,
    getContent: n,
    parseAttributes: i = gt,
    serializeAttributes: s = wt,
    defaultAttributes: o = {},
    content: l = "block",
    allowedAttributes: a
  } = r, c = t || e, f = (u) => {
    if (!a)
      return u;
    const h = {};
    return a.forEach((d) => {
      d in u && (h[d] = u[d]);
    }), h;
  };
  return {
    parseMarkdown: (u, h) => {
      let d;
      if (n) {
        const m = n(u);
        d = typeof m == "string" ? [{ type: "text", text: m }] : m;
      } else l === "block" ? d = h.parseChildren(u.tokens || []) : d = h.parseInline(u.tokens || []);
      const p = { ...o, ...u.attributes };
      return h.createNode(e, p, d);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u) {
        var h;
        const d = new RegExp(`^:::${c}`, "m"), p = (h = u.match(d)) == null ? void 0 : h.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(u, h, d) {
        var p;
        const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), y = u.match(m);
        if (!y)
          return;
        const [w, k = ""] = y, v = i(k);
        let C = 1;
        const b = w.length;
        let I = "";
        const B = /^:::([\w-]*)(\s.*)?/gm, $ = u.slice(b);
        for (B.lastIndex = 0; ; ) {
          const q = B.exec($);
          if (q === null)
            break;
          const xe = q.index, Un = q[1];
          if (!((p = q[2]) != null && p.endsWith(":::"))) {
            if (Un)
              C += 1;
            else if (C -= 1, C === 0) {
              const xt = $.slice(0, xe);
              I = xt.trim();
              const Kn = u.slice(0, b + xe + q[0].length);
              let _ = [];
              if (I)
                if (l === "block")
                  for (_ = d.blockTokens(xt), _.forEach((W) => {
                    W.text && (!W.tokens || W.tokens.length === 0) && (W.tokens = d.inlineTokens(W.text));
                  }); _.length > 0; ) {
                    const W = _[_.length - 1];
                    if (W.type === "paragraph" && (!W.text || W.text.trim() === ""))
                      _.pop();
                    else
                      break;
                  }
                else
                  _ = d.inlineTokens(I);
              return {
                type: e,
                raw: Kn,
                attributes: v,
                content: I,
                tokens: _
              };
            }
          }
        }
      }
    },
    renderMarkdown: (u, h) => {
      const d = f(u.attrs || {}), p = s(d), m = p ? ` {${p}}` : "", y = h.renderChildren(u.content || [], `

`);
      return `:::${c}${m}

${y}

:::`;
    }
  };
}
function Ys(r) {
  if (!r.trim())
    return {};
  const e = {}, t = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let n = t.exec(r);
  for (; n !== null; ) {
    const [, i, s, o] = n;
    e[i] = s || o, n = t.exec(r);
  }
  return e;
}
function eo(r) {
  return Object.entries(r).filter(([, e]) => e != null).map(([e, t]) => `${e}="${t}"`).join(" ");
}
function to(r) {
  const {
    nodeName: e,
    name: t,
    getContent: n,
    parseAttributes: i = Ys,
    serializeAttributes: s = eo,
    defaultAttributes: o = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = r, c = t || e, f = (h) => {
    if (!a)
      return h;
    const d = {};
    return a.forEach((p) => {
      p in h && (d[p] = h[p]);
    }), d;
  }, u = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (h, d) => {
      const p = { ...o, ...h.attributes };
      if (l)
        return d.createNode(e, p);
      const m = n ? n(h) : h.content || "";
      return m ? d.createNode(e, p, [d.createTextNode(m)]) : d.createNode(e, p, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(h) {
        const d = l ? new RegExp(`\\[${u}\\s*[^\\]]*\\]`) : new RegExp(`\\[${u}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${u}\\]`), p = h.match(d), m = p?.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(h, d, p) {
        const m = l ? new RegExp(`^\\[${u}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${u}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${u}\\]`), y = h.match(m);
        if (!y)
          return;
        let w = "", k = "";
        if (l) {
          const [, C] = y;
          k = C;
        } else {
          const [, C, b] = y;
          k = C, w = b || "";
        }
        const v = i(k.trim());
        return {
          type: e,
          raw: y[0],
          content: w.trim(),
          attributes: v
        };
      }
    },
    renderMarkdown: (h) => {
      let d = "";
      n ? d = n(h) : h.content && h.content.length > 0 && (d = h.content.filter((w) => w.type === "text").map((w) => w.text).join(""));
      const p = f(h.attrs || {}), m = s(p), y = m ? ` ${m}` : "";
      return l ? `[${c}${y}]` : `[${c}${y}]${d}[/${c}]`;
    }
  };
}
function no(r, e, t) {
  var n, i, s, o;
  const l = r.split(`
`), a = [];
  let c = "", f = 0;
  const u = e.baseIndentSize || 2;
  for (; f < l.length; ) {
    const h = l[f], d = h.match(e.itemPattern);
    if (!d) {
      if (a.length > 0)
        break;
      if (h.trim() === "") {
        f += 1, c = `${c}${h}
`;
        continue;
      } else
        return;
    }
    const p = e.extractItemData(d), { indentLevel: m, mainContent: y } = p;
    c = `${c}${h}
`;
    const w = [y];
    for (f += 1; f < l.length; ) {
      const b = l[f];
      if (b.trim() === "") {
        const B = l.slice(f + 1).findIndex((xe) => xe.trim() !== "");
        if (B === -1)
          break;
        if ((((i = (n = l[f + 1 + B].match(/^(\s*)/)) == null ? void 0 : n[1]) == null ? void 0 : i.length) || 0) > m) {
          w.push(b), c = `${c}${b}
`, f += 1;
          continue;
        } else
          break;
      }
      if ((((o = (s = b.match(/^(\s*)/)) == null ? void 0 : s[1]) == null ? void 0 : o.length) || 0) > m)
        w.push(b), c = `${c}${b}
`, f += 1;
      else
        break;
    }
    let k;
    const v = w.slice(1);
    if (v.length > 0) {
      const b = v.map((I) => I.slice(m + u)).join(`
`);
      b.trim() && (e.customNestedParser ? k = e.customNestedParser(b) : k = t.blockTokens(b));
    }
    const C = e.createToken(p, k);
    a.push(C);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function ro(r, e, t, n) {
  if (!r || !Array.isArray(r.content))
    return "";
  const i = typeof t == "function" ? t(n) : t, [s, ...o] = r.content, l = e.renderChildren([s]), a = [`${i}${l}`];
  return o && o.length > 0 && o.forEach((c) => {
    const f = e.renderChildren([c]);
    if (f) {
      const u = f.split(`
`).map((h) => h ? e.indent(h) : "").join(`
`);
      a.push(u);
    }
  }), a.join(`
`);
}
var go = class _n extends yt {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new _n(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
};
function wo(r) {
  return new Ds({
    find: r.find,
    handler: ({ state: e, range: t, match: n, pasteEvent: i }) => {
      const s = re(r.getAttributes, void 0, n, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = n[n.length - 1], a = n[0];
      let c = t.to;
      if (l) {
        const f = a.search(/\S/), u = t.from + a.indexOf(l), h = u + l.length;
        if (Jn(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === r.type && y !== p.mark.type)).filter((p) => p.to > u).length)
          return null;
        h < t.to && o.delete(h, t.to), u > t.from && o.delete(t.from + f, u), c = t.from + f + l.length, o.addMark(t.from + f, c, r.type.create(s || {})), o.removeStoredMark(r.type);
      }
    }
  });
}
export {
  D as A,
  uo as B,
  rn as D,
  j as E,
  g as F,
  ho as M,
  go as N,
  Z as P,
  S,
  T,
  fo as a,
  co as b,
  ao as c,
  wo as d,
  Q as e,
  is as f,
  z as g,
  ps as h,
  dt as i,
  so as j,
  Jn as k,
  lo as l,
  oo as m,
  po as n,
  M as o,
  no as p,
  x as q,
  ro as r,
  io as s,
  mo as t,
  se as u,
  Be as v,
  yo as w,
  re as x,
  we as y,
  Ln as z
};
