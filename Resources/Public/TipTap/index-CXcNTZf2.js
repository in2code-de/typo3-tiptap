function L(n) {
  this.content = n;
}
L.prototype = {
  constructor: L,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new L(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new L(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new L([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new L(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new L(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = L.from(n), n.size ? new L(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = L.from(n), n.size ? new L(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = L.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
L.from = function(n) {
  if (n instanceof L) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new L(e);
};
function wi(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
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
      let o = wi(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Ci(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, f = Math.min(o.text.length, l.text.length);
      for (; c < f && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Ci(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let f = l + 1;
        a.nodesBetween(Math.max(0, e - f), Math.min(a.content.size, t - f), r, i + f);
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
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
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
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new b(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new b(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new b(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
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
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return wi(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Ci(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Ct(0, e);
    if (e == this.size)
      return Ct(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), s = r + i.nodeSize;
      if (s >= e)
        return s == e ? Ct(t + 1, s) : Ct(t, r);
      r = s;
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
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new b(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const ln = { index: 0, offset: 0 };
function Ct(n, e) {
  return ln.index = n, ln.offset = e, ln;
}
function It(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!It(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !It(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let A = class Tn {
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
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
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
    return this == e || this.type == e.type && It(this.attrs, e.attrs);
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
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Tn.none;
    if (e instanceof Tn)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
A.none = [];
class Pt extends Error {
}
class k {
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
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
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
    let r = Oi(this.content, e + this.openStart, t);
    return r && new k(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new k(Ti(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
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
      return k.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new k(b.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new k(e, r, i);
  }
}
k.empty = new k(b.empty, 0, 0);
function Ti(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Ti(s.content, e - i - 1, t - i - 1)));
}
function Oi(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Oi(o.content, e - s - 1, t, o);
  return l && n.replaceChild(i, o.copy(l));
}
function Do(n, e, t) {
  if (t.openStart > n.depth)
    throw new Pt("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Pt("Inconsistent open depths");
  return Ni(n, e, t, 0);
}
function Ni(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = Ni(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Re(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = vo(t, n);
      return Re(s, Di(n, o, l, e, r));
    }
  else return Re(s, Bt(n, e, r));
}
function Ei(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Pt("Cannot join " + e.type.name + " onto " + n.type.name);
}
function On(n, e, t) {
  let r = n.node(t);
  return Ei(r, e.node(t)), r;
}
function Ae(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function st(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Ae(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Ae(i.child(l), r);
  e && e.depth == t && e.textOffset && Ae(e.nodeBefore, r);
}
function Re(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Di(n, e, t, r, i) {
  let s = n.depth > i && On(n, e, i + 1), o = r.depth > i && On(t, r, i + 1), l = [];
  return st(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Ei(s, o), Ae(Re(s, Di(n, e, t, r, i + 1)), l)) : (s && Ae(Re(s, Bt(n, e, i + 1)), l), st(e, t, i, l), o && Ae(Re(o, Bt(t, r, i + 1)), l)), st(r, null, i, l), new b(l);
}
function Bt(n, e, t) {
  let r = [];
  if (st(null, n, t, r), n.depth > t) {
    let i = On(n, e, t + 1);
    Ae(Re(i, Bt(n, e, t + 1)), r);
  }
  return st(e, null, t, r), new b(r);
}
function vo(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(b.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class ct {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
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
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
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
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
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
      return A.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
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
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
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
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new zt(this, e, r);
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
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new ct(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = yr.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      yr.set(e, r = new Ao());
    let i = r.elts[r.i] = ct.resolve(e, t);
    return r.i = (r.i + 1) % Ro, i;
  }
}
class Ao {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Ro = 12, yr = /* @__PURE__ */ new WeakMap();
class zt {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
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
const Io = /* @__PURE__ */ Object.create(null);
class Y {
  /**
  @internal
  */
  constructor(e, t, r, i = A.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty;
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
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
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
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
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
  hasMarkup(e, t, r) {
    return this.type == e && It(this.attrs, t || e.defaultAttrs || Io) && A.sameSet(this.marks, r || A.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Y(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Y(this.type, this.attrs, this.content, e);
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
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return k.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new k(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Do(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
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
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return ct.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ct.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), vi(this.marks, e);
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
  canReplace(e, t, r = b.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
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
    let e = A.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!A.sameSet(e, this.marks))
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
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = b.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, r);
    return s.type.checkAttrs(s.attrs), s;
  }
}
Y.prototype.text = void 0;
class Ft extends Y {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : vi(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new Ft(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Ft(this.type, this.attrs, e, this.marks);
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
function vi(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Be {
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
    let r = new Po(e, t);
    if (r.next == null)
      return Be.empty;
    let i = Ai(r);
    r.next && r.err("Unexpected trailing text");
    let s = Wo($o(i));
    return Jo(s, r), s;
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
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
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
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
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
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: f, next: u } = o.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let d = s(u, l.concat(f));
          if (d)
            return d;
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
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
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
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
Be.empty = new Be(!0);
class Po {
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
function Ai(n) {
  let e = [];
  do
    e.push(Bo(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Bo(n) {
  let e = [];
  do
    e.push(zo(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function zo(n) {
  let e = Lo(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = Fo(n, e);
    else
      break;
  return e;
}
function br(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function Fo(n, e) {
  let t = br(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = br(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Vo(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function Lo(n) {
  if (n.eat("(")) {
    let e = Ai(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Vo(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function $o(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
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
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
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
            r(a, f), i(s(o.expr, a), f), a = f;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Ri(n, e) {
  return e - n;
}
function kr(n, e) {
  let t = [];
  return r(e), t.sort(Ri);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function Wo(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(kr(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (c = i[f][1]);
        kr(n, a).forEach((f) => {
          c || i.push([l, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let s = e[r.join(",")] = new Be(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Ri);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function Jo(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Ii(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Pi(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Bi(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let s = n[i];
    s.validate && s.validate(e[i]);
  }
}
function zi(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new jo(n, r, e[r]);
  return t;
}
let xr = class Fi {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = zi(e, r.attrs), this.defaultAttrs = Ii(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == Be.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : Pi(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Y(this, this.computeAttrs(e), b.from(t), A.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = b.from(t), this.checkContent(t), new Y(this, this.computeAttrs(e), t, A.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(b.empty, !0);
    return s ? new Y(this, e, t.append(s), A.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
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
    Bi(this.attrs, e, "node", this.name);
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
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : A.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Fi(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function qo(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
}
class jo {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? qo(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class _t {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = zi(e, i.attrs), this.excluded = null;
    let s = Ii(this.attrs);
    this.instance = s ? new A(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new A(this, Pi(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new _t(s, i++, t, o)), r;
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
    Bi(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Vi {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = L.from(e.nodes), t.marks = L.from(e.marks || {}), this.nodes = xr.compile(this.spec.nodes, this), this.marks = _t.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = Be.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? Sr(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Sr(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => Y.fromJSON(this, i), this.markFromJSON = (i) => A.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof xr) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Ft(r, r.defaultAttrs, e, A.setFrom(t));
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
function Sr(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Ko(n) {
  return n.tag != null;
}
function Ho(n) {
  return n.style != null;
}
class ue {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Ko(i))
        this.tags.push(i);
      else if (Ho(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(i);
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
    let r = new wr(this, t, !1);
    return r.addAll(e, A.none, t.from, t.to), r.finish();
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
    let r = new wr(this, t, !0);
    return r.addAll(e, A.none, t.from, t.to), k.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Go(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
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
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
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
    function r(i) {
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
        r(o = Cr(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = Cr(o)), o.node || o.ignore || o.mark || (o.node = i);
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
    return e.cached.domParser || (e.cached.domParser = new ue(e, ue.schemaRules(e)));
  }
}
const Li = {
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
}, _o = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, $i = { ol: !0, ul: !0 }, ft = 1, Nn = 2, ot = 4;
function Mr(n, e, t) {
  return e != null ? (e ? ft : 0) | (e === "full" ? Nn : 0) : n && n.whitespace == "pre" ? ft | Nn : t & ~ot;
}
class Tt {
  constructor(e, t, r, i, s, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = A.none, this.match = s || (o & ot ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & ft)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Li.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class wr {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = Mr(null, t.preserveWhitespace, 0) | (r ? ot : 0);
    i ? s = new Tt(i.type, i.attrs, A.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new Tt(null, null, A.none, !0, null, o) : s = new Tt(e.schema.topNodeType, null, A.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, i = this.top, s = i.options & Nn ? "full" : this.localPreserveWS || (i.options & ft) > 0;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (s)
        s !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let o = i.content[i.content.length - 1], l = e.previousSibling;
        (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    $i.hasOwnProperty(o) && this.parser.normalizeLists && Uo(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : _o.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, f = this.needsBlock;
      if (Li.hasOwnProperty(o))
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
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = r.getPropertyValue(s);
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
  addElementByRule(e, t, r, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (s = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let s = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break;
      if (a.solid) {
        if (r)
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
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = A.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : Tr(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let s = this.findPlace(e.create(t), r, !1);
    return s && (s = this.enterInner(e, t, r, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Mr(e, s, o.options);
    o.options & ot && o.content.length == 0 && (l |= ot);
    let a = A.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : Tr(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Tt(e, t, a, i, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[t].options |= ft);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
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
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
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
          let f = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
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
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Uo(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && $i.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Go(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Cr(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Tr(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
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
class Le {
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
  serializeFragment(e, t = {}, r) {
    r || (r = an(t).createDocumentFragment());
    let i = r, s = [];
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
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = vt(an(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && vt(an(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return vt(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Le(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Or(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Or(e.marks);
  }
}
function Or(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function an(n) {
  return n.document || window.document;
}
const Nr = /* @__PURE__ */ new WeakMap();
function Yo(n) {
  let e = Nr.get(n);
  return e === void 0 && Nr.set(n, e = Xo(n)), e;
}
function Xo(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function vt(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (s = Yo(r)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], f = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    f = 2;
    for (let u in c)
      if (c[u] != null) {
        let d = u.indexOf(" ");
        d > 0 ? a.setAttributeNS(u.slice(0, d), u.slice(d + 1), c[u]) : u == "style" && a.style ? a.style.cssText = c[u] : a.setAttribute(u, c[u]);
      }
  }
  for (let u = f; u < e.length; u++) {
    let d = e[u];
    if (d === 0) {
      if (u < e.length - 1 || u > f)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = vt(n, d, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Wi = 65535, Ji = Math.pow(2, 16);
function Zo(n, e) {
  return n + e * Ji;
}
function Er(n) {
  return n & Wi;
}
function Qo(n) {
  return (n - (n & Wi)) / Ji;
}
const qi = 1, ji = 2, At = 4, Ki = 8;
class En {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Ki) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (qi | At)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ji | At)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & At) > 0;
  }
}
class G {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && G.empty)
      return G.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = Er(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Qo(e);
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
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = this.ranges[l + o], u = a + c;
      if (e <= u) {
        let d = c ? e == a ? -1 : e == u ? 1 : t : t, h = a + i + (d < 0 ? 0 : f);
        if (r)
          return h;
        let p = e == (t < 0 ? a : u) ? null : Zo(l / 3, e - a), m = e == a ? ji : e == u ? qi : At;
        return (t < 0 ? e != a : e != u) && (m |= Ki), new En(h, m, p);
      }
      i += f - c;
    }
    return r ? e + i : new En(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = Er(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = a + c;
      if (e <= f && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], f = this.ranges[i + r];
      e(l, l + c, a, a + f), s += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new G(this.ranges, !this.inverted);
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
    return e == 0 ? G.empty : new G(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
G.empty = new G([]);
class Vt {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
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
    return new Vt(this._maps, this.mirror, e, t);
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
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
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
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Vt();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
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
  _map(e, t, r) {
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
    return r ? e : new En(e, i, null);
  }
}
const cn = /* @__PURE__ */ Object.create(null);
class j {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return G.empty;
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
    let r = cn[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in cn)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return cn[e] = t, t.prototype.jsonID = e, t;
  }
}
class P {
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
    return new P(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new P(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return P.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof Pt)
        return P.fail(s.message);
      throw s;
    }
  }
}
function Jn(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(Jn(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return b.fromArray(r);
}
class ke extends j {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new k(Jn(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return P.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new ne(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ke(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ke(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new ke(t.from, t.to, e.markFromJSON(t.mark));
  }
}
j.jsonID("addMark", ke);
class ne extends j {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new k(Jn(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return P.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new ke(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ne(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ne && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ne(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new ne(t.from, t.to, e.markFromJSON(t.mark));
  }
}
j.jsonID("removeMark", ne);
class xe extends j {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return P.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return P.fromReplace(e, this.pos, this.pos + 1, new k(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new xe(this.pos, t.marks[i]);
        return new xe(this.pos, this.mark);
      }
    }
    return new ze(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new xe(t.pos, this.mark);
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
    return new xe(t.pos, e.markFromJSON(t.mark));
  }
}
j.jsonID("addNodeMark", xe);
class ze extends j {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return P.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return P.fromReplace(e, this.pos, this.pos + 1, new k(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new xe(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ze(t.pos, this.mark);
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
    return new ze(t.pos, e.markFromJSON(t.mark));
  }
}
j.jsonID("removeNodeMark", ze);
class z extends j {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Dn(e, this.from, this.to) ? P.fail("Structure replace would overwrite content") : P.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new G([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new z(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new z(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof z) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? k.empty : new k(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new z(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? k.empty : new k(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new z(e.from, this.to, t, this.structure);
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
    return new z(t.from, t.to, k.fromJSON(e, t.slice), !!t.structure);
  }
}
j.jsonID("replace", z);
class F extends j {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Dn(e, this.from, this.gapFrom) || Dn(e, this.gapTo, this.to)))
      return P.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return P.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? P.fromReplace(e, this.from, this.to, r) : P.fail("Content does not fit in gap");
  }
  getMap() {
    return new G([
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
    return new F(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new F(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
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
    return new F(t.from, t.to, t.gapFrom, t.gapTo, k.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
j.jsonID("replaceAround", F);
function Dn(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function el(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, f) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && f.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(p) || (o && o.to == d && o.mark.eq(u[m]) ? o.to = h : i.push(o = new ne(d, h, u[m])));
      l && l.to == d ? l.to = h : s.push(l = new ke(d, h, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function tl(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof _t) {
      let c = o.marks, f;
      for (; f = r.isInSet(c); )
        (a || (a = [])).push(f), c = f.removeFromSet(c);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let f = 0; f < a.length; f++) {
        let u = a[f], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && u.eq(i[h].style) && (d = p);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: u, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new ne(o.from, o.to, o.style)));
}
function qn(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), f = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      o.push(new z(l, f, k.empty));
    else {
      r = u;
      for (let d = 0; d < c.marks.length; d++)
        t.allowsMarkType(c.marks[d].type) || n.step(new ne(l, f, c.marks[d]));
      if (i && c.isText && t.whitespace != "pre") {
        let d, h = /\r?\n|\r/g, p;
        for (; d = h.exec(c.text); )
          p || (p = new k(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new z(l + d.index, l + d.index + d[0].length, p));
      }
    }
    l = f;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(b.empty, !0);
    n.replace(l, l, new k(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function nl(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Qe(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !nl(i, s, o))
      break;
  }
  return null;
}
function rl(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, f = b.empty, u = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, f = b.from(r.node(p).copy(f)), u++) : a--;
  let d = b.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, d = b.from(i.node(p).copy(d)), h++) : c++;
  n.step(new F(a, c, o, l, new k(f.append(d), u, h), f.size - u, !0));
}
function jn(n, e, t = null, r = n) {
  let i = il(n, e), s = i && sl(r, e);
  return s ? i.map(Dr).concat({ type: e, attrs: t }).concat(s.map(Dr)) : null;
}
function Dr(n) {
  return { type: n, attrs: null };
}
function il(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function sl(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function ol(n, e, t) {
  let r = b.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = b.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new F(i, s, i, s, new k(r, 0, 0), t.length, !0));
}
function ll(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(r, a) && al(n.doc, n.mapping.slice(s).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && _i(n, o, l, s), qn(n, n.mapping.slice(s).map(l, 1), r, void 0, c === null);
      let f = n.mapping.slice(s), u = f.map(l, 1), d = f.map(l + o.nodeSize, 1);
      return n.step(new F(u, d, u + 1, d - 1, new k(b.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Hi(n, o, l, s), !1;
    }
  });
}
function Hi(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function _i(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function al(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function cl(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new F(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new k(b.from(o), 0, 0), 1, !0));
}
function de(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = t - 2; c > s; c--, f--) {
    let u = i.node(c), d = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(d, u.childCount), p = r && r[f + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[f] || u;
    if (!u.canReplace(d + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function fl(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = b.empty, o = b.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = b.from(i.node(l).copy(s));
    let f = r && r[c];
    o = b.from(f ? f.type.create(f.attrs, o) : i.node(l).copy(o));
  }
  n.step(new z(e, e, new k(s.append(o), t, t), !0));
}
function Oe(n, e) {
  let t = n.resolve(e), r = t.index();
  return Ui(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function ul(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == r ? n.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function Ui(n, e) {
  return !!(n && e && !n.isLeaf && ul(n, e));
}
function Ut(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Ui(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function dl(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, s = n.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let f = o.whitespace == "pre", u = !!o.contentMatch.matchType(i);
    f && !u ? r = !1 : !f && u && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let f = n.doc.resolve(e + t);
    _i(n, f.node(), f.before(), l);
  }
  o.inlineContent && qn(n, e + t - 1, o, s.node().contentMatchAt(s.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new z(c, a.map(e + t, -1), k.empty, !0)), r === !0) {
    let f = n.doc.resolve(c);
    Hi(n, f.node(), f.before(), n.steps.length);
  }
  return n;
}
function hl(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function pl(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), f = !1;
      if (s == 1)
        f = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        f = u && c.canReplaceWith(a, a, u[0]);
      }
      if (f)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Gt(n, e, t = e, r = k.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return Gi(i, s, r) ? new z(e, t, r) : new ml(i, s, r).fit();
}
function Gi(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class ml {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = b.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new k(s, o, l);
    return e > -1 ? new F(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new z(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = fn(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], f, u = null;
          if (t == 1 && (o ? c.matchType(o.type) || (u = c.fillBefore(b.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: u };
          if (t == 2 && o && (f = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: f };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = fn(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new k(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = fn(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new k(tt(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new k(tt(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, f = [], { match: u, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        f.push(i.child(m));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, f.push(Yi(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = nt(this.placed, t, b.from(f)), this.frontier[t].match = u, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? k.empty : new k(tt(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new k(tt(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !un(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = un(e, t, i, r, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], f = un(e, l, c, a, !0);
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
    t.fit.childCount && (this.placed = nt(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = nt(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = nt(this.placed, this.frontier.length, t));
  }
}
function tt(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(tt(n.firstChild.content, e - 1, t)));
}
function nt(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(nt(n.lastChild.content, e - 1, t)));
}
function fn(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Yi(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Yi(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function un(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !gl(t, s.content, o) ? l : null;
}
function gl(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function yl(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function bl(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (Gi(i, s, r))
    return n.step(new z(e, t, r));
  let o = Zi(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == h && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], f = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = f - 1; d >= 0; d--) {
    let h = c[d], p = yl(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      f = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + f + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let x = i.node(g - 1), w = i.index(g - 1);
        if (x.canReplaceWith(w, w, p.type, p.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new k(Xi(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let u = n.steps.length;
  for (let d = o.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > u)); d--) {
    let h = o[d];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function Xi(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(Xi(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(b.empty, !0));
  }
  return n;
}
function kl(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = hl(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new k(b.from(r), 0, 0));
}
function xl(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Zi(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Zi(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class _e extends j {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return P.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return P.fromReplace(e, this.pos, this.pos + 1, new k(b.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return G.empty;
  }
  invert(e) {
    return new _e(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new _e(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _e(t.pos, t.attr, t.value);
  }
}
j.jsonID("attr", _e);
class ut extends j {
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
    let r = e.type.create(t, e.content, e.marks);
    return P.ok(r);
  }
  getMap() {
    return G.empty;
  }
  invert(e) {
    return new ut(this.attr, e.attrs[this.attr]);
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
    return new ut(t.attr, t.value);
  }
}
j.jsonID("docAttr", ut);
let Ge = class extends Error {
};
Ge = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Ge.prototype = Object.create(Error.prototype);
Ge.prototype.constructor = Ge;
Ge.prototype.name = "TransformError";
class Qi {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Vt();
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
      throw new Ge(t.failed);
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
  replace(e, t = e, r = k.empty) {
    let i = Gt(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new k(b.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, k.empty);
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
  replaceRange(e, t, r) {
    return bl(this, e, t, r), this;
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
  replaceRangeWith(e, t, r) {
    return kl(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return xl(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return rl(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return dl(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return ol(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return ll(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return cl(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new _e(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new ut(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new xe(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof A)
      t.isInSet(r.marks) && this.step(new ze(e, t));
    else {
      let i = r.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new ze(e, s)), i = s.removeFromSet(i);
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
  split(e, t = 1, r) {
    return fl(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return el(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return tl(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return qn(this, e, t, r), this;
  }
}
const dn = /* @__PURE__ */ Object.create(null);
class O {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Sl(e.min(t), e.max(t))];
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
  replace(e, t = k.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], f = e.mapping.slice(s);
      e.replaceRange(f.map(a.pos), f.map(c.pos), l ? k.empty : t), l == 0 && Rr(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), f = a.map(l.pos);
      s ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), Rr(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new T(e) : qe(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? qe(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : qe(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
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
    return this.findFrom(e, t) || this.findFrom(e, -t) || new X(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return qe(e, e, 0, 0, 1) || new X(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return qe(e, e, e.content.size, e.childCount, -1) || new X(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = dn[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in dn)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return dn[e] = t, t.prototype.jsonID = e, t;
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
O.prototype.visible = !0;
class Sl {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let vr = !1;
function Ar(n) {
  !vr && !n.parent.inlineContent && (vr = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class T extends O {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Ar(e), Ar(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return O.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new T(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = k.empty) {
    if (super.replace(e, t), t == k.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof T && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Yt(this.anchor, this.head);
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
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = O.findFrom(t, r, !0) || O.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return O.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (O.findFrom(e, -r, !0) || O.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new T(e, t);
  }
}
O.jsonID("text", T);
class Yt {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Yt(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return T.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class M extends O {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? O.near(s) : new M(s);
  }
  content() {
    return new k(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof M && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Kn(this.anchor);
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
O.jsonID("node", M);
class Kn {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Yt(r, r) : new Kn(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && M.isSelectable(r) ? new M(t) : O.near(t);
  }
}
class X extends O {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = k.empty) {
    if (t == k.empty) {
      e.delete(0, e.doc.content.size);
      let r = O.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
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
    return new X(e);
  }
  map(e) {
    return new X(e);
  }
  eq(e) {
    return e instanceof X;
  }
  getBookmark() {
    return Ml;
  }
}
O.jsonID("all", X);
const Ml = {
  map() {
    return this;
  },
  resolve(n) {
    return new X(n);
  }
};
function qe(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return T.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && M.isSelectable(l))
        return M.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = qe(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Rr(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof z || i instanceof F))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, f) => {
    o == null && (o = f);
  }), n.setSelection(O.near(n.doc.resolve(o), t));
}
const Ir = 1, Ot = 2, Pr = 4;
class wl extends Qi {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Ir) & ~Ot, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Ir) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Ot, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return A.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Ot) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Ot, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || A.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(O.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Pr, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Pr) > 0;
  }
}
function Br(n, e) {
  return !e || !n ? n : n.bind(e);
}
class rt {
  constructor(e, t, r) {
    this.name = e, this.init = Br(t.init, r), this.apply = Br(t.apply, r);
  }
}
const Cl = [
  new rt("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new rt("selection", {
    init(n, e) {
      return n.selection || O.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new rt("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new rt("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class hn {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Cl.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new rt(r.key, r.spec.state, r));
    });
  }
}
class He {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, f = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (f && r.filterTransaction(f, o)) {
            if (f.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(f), r = r.applyInner(f), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new He(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new wl(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new hn(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new He(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new hn(this.schema, e.plugins), r = t.fields, i = new He(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new hn(e.schema, e.plugins), s = new He(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = Y.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = O.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function es(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = es(i, e, {})), t[r] = i;
  }
  return t;
}
class oe {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && es(e.props, this, this.props), this.key = e.key ? e.key.key : ts("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const pn = /* @__PURE__ */ Object.create(null);
function ts(n) {
  return n in pn ? n + "$" + ++pn[n] : (pn[n] = 0, n + "$");
}
class $e {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = ts(e);
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
const $ = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Ye = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let vn = null;
const ae = function(n, e, t) {
  let r = vn || (vn = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Tl = function() {
  vn = null;
}, Fe = function(n, e, t, r) {
  return t && (zr(n, e, t, r, -1) || zr(n, e, t, r, 1));
}, Ol = /^(img|br|input|textarea|hr)$/i;
function zr(n, e, t, r, i) {
  for (var s; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Q(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || bt(n) || Ol.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = $(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = o, e = i < 0 ? Q(n) : 0;
    } else
      return !1;
  }
}
function Q(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Nl(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Q(n);
    } else if (n.parentNode && !bt(n))
      e = $(n), n = n.parentNode;
    else
      return null;
  }
}
function El(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !bt(n))
      e = $(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Dl(n, e, t) {
  for (let r = e == 0, i = e == Q(n); r || i; ) {
    if (n == t)
      return !0;
    let s = $(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Q(n);
  }
}
function bt(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Xt = function(n) {
  return n.focusNode && Fe(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Ee(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function vl(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Al(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Q(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(Q(r.startContainer), r.startOffset) };
  }
}
const ie = typeof navigator < "u" ? navigator : null, Fr = typeof document < "u" ? document : null, Ne = ie && ie.userAgent || "", An = /Edge\/(\d+)/.exec(Ne), ns = /MSIE \d/.exec(Ne), Rn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ne), U = !!(ns || Rn || An), Me = ns ? document.documentMode : Rn ? +Rn[1] : An ? +An[1] : 0, ee = !U && /gecko\/(\d+)/i.test(Ne);
ee && +(/Firefox\/(\d+)/.exec(Ne) || [0, 0])[1];
const In = !U && /Chrome\/(\d+)/.exec(Ne), q = !!In, rs = In ? +In[1] : 0, K = !U && !!ie && /Apple Computer/.test(ie.vendor), Xe = K && (/Mobile\/\w+/.test(Ne) || !!ie && ie.maxTouchPoints > 2), Z = Xe || (ie ? /Mac/.test(ie.platform) : !1), Rl = ie ? /Win/.test(ie.platform) : !1, ce = /Android \d/.test(Ne), kt = !!Fr && "webkitFontSmoothing" in Fr.documentElement.style, Il = kt ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Pl(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function le(n, e) {
  return typeof n == "number" ? n : n[e];
}
function Bl(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Vr(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = Ye(o);
      continue;
    }
    let l = o, a = l == s.body, c = a ? Pl(s) : Bl(l), f = 0, u = 0;
    if (e.top < c.top + le(r, "top") ? u = -(c.top - e.top + le(i, "top")) : e.bottom > c.bottom - le(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + le(i, "top") - c.top : e.bottom - c.bottom + le(i, "bottom")), e.left < c.left + le(r, "left") ? f = -(c.left - e.left + le(i, "left")) : e.right > c.right - le(r, "right") && (f = e.right - c.right + le(i, "right")), f || u)
      if (a)
        s.defaultView.scrollBy(f, u);
      else {
        let h = l.scrollLeft, p = l.scrollTop;
        u && (l.scrollTop += u), f && (l.scrollLeft += f);
        let m = l.scrollLeft - h, g = l.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let d = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(d))
      break;
    o = d == "absolute" ? o.offsetParent : Ye(o);
  }
}
function zl(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: is(n.dom) };
}
function is(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Ye(r))
    ;
  return e;
}
function Fl({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  ss(t, r == 0 ? 0 : r - e);
}
function ss(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let We = null;
function Vl(n) {
  if (n.setActive)
    return n.setActive();
  if (We)
    return n.focus(We);
  let e = is(n);
  n.focus(We == null ? {
    get preventScroll() {
      return We = { preventScroll: !0 }, !0;
    }
  } : void 0), We || (We = !1, ss(e, 0));
}
function ls(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let f = n.firstChild, u = 0; f; f = f.nextSibling, u++) {
    let d;
    if (f.nodeType == 1)
      d = f.getClientRects();
    else if (f.nodeType == 3)
      d = ae(f).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = f, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, f.nodeType == 1 && m && (s = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = f, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = u + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Ll(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : ls(t, i);
}
function Ll(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = ge(r, 1);
    if (s.top != s.bottom && Hn(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function Hn(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function $l(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Wl(n, e, t) {
  let { node: r, offset: i } = ls(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function Jl(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function as(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Hn(e, c))
            return as(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function ql(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = Al(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!Hn(e, c) || (o = as(n.dom, e, c), !o))
      return null;
  }
  if (K)
    for (let c = o; r && c; c = Ye(c))
      c.draggable && (r = void 0);
  if (o = $l(o, e), r) {
    if (ee && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let f = r.childNodes[i], u;
      f.nodeName == "IMG" && (u = f.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    let c;
    kt && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Jl(n, r, i, e));
  }
  l == null && (l = Wl(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Lr(n) {
  return n.top < n.bottom || n.left < n.right;
}
function ge(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Lr(r))
      return r;
  }
  return Array.prototype.find.call(t, Lr) || n.getBoundingClientRect();
}
const jl = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function cs(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = kt || ee;
  if (r.nodeType == 3)
    if (o && (jl.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = ge(ae(r, i, i), t);
      if (ee && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = ge(ae(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let f = ge(ae(r, i, i + 1), -1);
          if (f.top != a.top)
            return et(f, f.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, f = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, f = -1) : t >= 0 && i == r.nodeValue.length ? (a--, f = 1) : t < 0 ? a-- : c++, et(ge(ae(r, a, c), f), f < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == Q(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return mn(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < Q(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return mn(a.getBoundingClientRect(), !0);
    }
    return mn(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == Q(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? ae(a, Q(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return et(ge(c, 1), !1);
  }
  if (s == null && i < Q(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? ae(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return et(ge(c, -1), !0);
  }
  return et(ge(r.nodeType == 3 ? ae(r) : r, -t), t >= 0);
}
function et(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function mn(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function fs(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function Kl(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return fs(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = cs(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = ae(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let f = a[c];
        if (f.bottom > f.top + 1 && (t == "up" ? o.top - f.top > (f.bottom - o.top) * 2 : f.bottom - o.bottom > (o.bottom - f.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Hl = /[\u0590-\u08ac]/;
function _l(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return l ? !Hl.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : fs(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: f, anchorOffset: u } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(f, u), a && (a != f || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let $r = null, Wr = null, Jr = !1;
function Ul(n, e, t) {
  return $r == e && Wr == t ? Jr : ($r = e, Wr = t, Jr = t == "up" || t == "down" ? Kl(n, e, t) : _l(n, e, t));
}
const te = 0, qr = 1, De = 2, se = 3;
class xt {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = te, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > $(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          for (let o = 0; o < i.children.length; o++) {
            let l = i.children[o];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof ds) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof us && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? $(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? $(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let f = o + a.border;
        if (e >= f && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, f);
        e = o;
        for (let u = l; u > 0; u--) {
          let d = this.children[u - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = $(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let f = l + 1; f < this.children.length; f++) {
          let u = this.children[f];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            s = $(u.dom);
            break;
          }
          t += u.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (s > p && o < g)
        return m.setSelection(e - p - m.border, t - p - m.border, r, i);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), f = r.domSelectionRange(), u = !1;
    if ((ee || K) && e == t) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (u = !!(p && h.nodeValue[p - 1] == `
`), u && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: $(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        u = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ee && f.focusNode && f.focusNode != a.node && f.focusNode.nodeType == 1) {
      let h = f.focusNode.childNodes[f.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && K) && Fe(l.node, l.offset, f.anchorNode, f.anchorOffset) && Fe(a.node, a.offset, f.focusNode, f.focusOffset))
      return;
    let d = !1;
    if ((c.extend || e == t) && !(u && ee)) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), d = !0;
      } catch {
      }
    }
    if (!d) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? De : qr, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = se : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? De : se;
      }
      r = o;
    }
    this.dirty = De;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? De : qr;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class us extends xt {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == te && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Gl extends xt {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ve extends xt {
  constructor(e, t, r, i, s) {
    super(e, [], r, i), this.mark = t, this.spec = s;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = Le.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Ve(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & se || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != se && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != te) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = te;
    }
  }
  slice(e, t, r) {
    let i = Ve.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = Bn(s, t, o, r)), e > 0 && (s = Bn(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class we extends xt {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), f = c && c.dom, u = c && c.contentDOM;
    if (t.isText) {
      if (!f)
        f = document.createTextNode(t.text);
      else if (f.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else f || ({ dom: f, contentDOM: u } = Le.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !u && !t.isText && f.nodeName != "BR" && (f.hasAttribute("contenteditable") || (f.contentEditable = "false"), t.type.spec.draggable && (f.draggable = !0));
    let d = f;
    return f = ms(f, r, t), c ? a = new Yl(e, t, r, i, f, u || null, d, c, s, o + 1) : t.isText ? new Zt(e, t, r, i, f, d, s) : new we(e, t, r, i, f, u || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == te && e.eq(this.node) && Lt(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new Zl(this, o && o.node, e);
    ta(this.node, this.innerDeco, (c, f, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(f == this.node.childCount ? A.none : this.node.child(f).marks, r, e), a.placeWidget(c, e, i);
    }, (c, f, u, d) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, f, u, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, f, u, h, e) || a.updateNextNode(c, f, u, e, d, i) || a.addNode(c, f, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == De) && (o && this.protectLocalComposition(e, o), hs(this.contentDOM, this.children, e), Xe && na(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof T) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = ra(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new Gl(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = Bn(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == se || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = te;
  }
  updateOuterDeco(e) {
    if (Lt(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = ps(this.dom, this.nodeDOM, Pn(this.outerDeco, this.node, t), Pn(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function jr(n, e, t, r, i) {
  ms(r, e, n);
  let s = new we(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class Zt extends we {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == se || this.dirty != te && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != te || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = te, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Zt(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = se);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class ds extends xt {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == te && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Yl extends we {
  constructor(e, t, r, i, s, o, l, a, c, f) {
    super(e, t, r, i, s, o, l, c, f), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == se)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function hs(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Kr(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof Ve) {
      let a = r ? r.previousSibling : n.lastChild;
      hs(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Kr(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const lt = function(n) {
  n && (this.nodeName = n);
};
lt.prototype = /* @__PURE__ */ Object.create(null);
const ve = [new lt()];
function Pn(n, e, t) {
  if (n.length == 0)
    return ve;
  let r = t ? ve[0] : new lt(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new lt(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new lt(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function ps(n, e, t, r) {
  if (t == ve && r == ve)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = ve[0]), i = a;
    }
    Xl(i, l || ve[0], o);
  }
  return i;
}
function Xl(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function ms(n, e, t) {
  return ps(n, n, ve, Pn(e, t, n.nodeType != 1));
}
function Lt(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Kr(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Zl {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ql(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = te, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Ve.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == se && o.dom == o.contentDOM && (o.dirty = De), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof we) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let f = a.dom, u, d = this.isLocked(f) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != se && Lt(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != f && (this.changed = !0), this.index++, !0;
        if (!d && (u = this.recreateWrapper(a, e, t, r, i, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = De, u.updateChildren(i, o + 1), u.dirty = te), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Lt(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = we.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = we.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new us(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ve; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Zt) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((K || q) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new ds(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Ql(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof Ve)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, s.set(l, i), o.push(l);
    }
  }
  return { index: i, matched: s, matches: o.reverse() };
}
function ea(n, e) {
  return n.type.side - e.type.side;
}
function ta(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let f = n.child(c);
      r(f, i, e.forChild(s, f), c), s += f.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let f, u;
    for (; o < i.length && i[o].to == s; ) {
      let g = i[o++];
      g.widget && (f ? (u || (u = [f])).push(g) : f = g);
    }
    if (f)
      if (u) {
        u.sort(ea);
        for (let g = 0; g < u.length; g++)
          t(u[g], c, !!a);
      } else
        t(f, c, !!a);
    let d, h;
    if (a)
      h = -1, d = a, a = null;
    else if (c < n.childCount)
      h = c, d = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= s && l.splice(g--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let p = s + d.nodeSize;
    if (d.isText) {
      let g = p;
      o < i.length && i[o].from < g && (g = i[o].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = d.cut(g - s), d = d.cut(0, g - s), p = g, h = -1);
    } else
      for (; o < i.length && i[o].to < p; )
        o++;
    let m = d.isInline && !d.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(d, m, e.forChild(s, d), h), s = p;
  }
}
function na(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function ra(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Bn(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, f = l += a.size;
    c >= t || f <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), f > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function _n(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Xt(t)) {
    for (a = o; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && M.isSelectable(u) && i.parent && !(u.isInline && Dl(t.focusNode, t.focusOffset, i.dom))) {
      let d = i.posBefore;
      c = new M(o == d ? l : r.resolve(d));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let u = o, d = o;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        u = Math.min(u, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), d = Math.max(d, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, o] = d == n.state.selection.anchor ? [d, u] : [u, d], l = r.resolve(o);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let f = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = Un(n, f, l, u);
  }
  return c;
}
function gs(n) {
  return n.editable ? n.hasFocus() : bs(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function he(n, e = !1) {
  let t = n.state.selection;
  if (ys(n, t), !!gs(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && q) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Fe(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      sa(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      Hr && !(t instanceof T) && (t.$from.parent.inlineContent || (s = _r(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = _r(n, t.to))), n.docView.setSelection(r, i, n, e), Hr && (s && Ur(s), o && Ur(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && ia(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Hr = K || q && rs < 63;
function _r(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (K && i && i.contentEditable == "false")
    return gn(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return gn(i);
    if (s)
      return gn(s);
  }
}
function gn(n) {
  return n.contentEditable = "true", K && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Ur(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function ia(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!gs(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function sa(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, $(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && U && Me <= 11 && (t.disabled = !0, t.disabled = !1);
}
function ys(n, e) {
  if (e instanceof M) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Gr(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Gr(n);
}
function Gr(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Un(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || T.between(e, t, r);
}
function Yr(n) {
  return n.editable && !n.hasFocus() ? !1 : bs(n);
}
function bs(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function oa(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Fe(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function zn(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && O.findFrom(s, e);
}
function ye(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Xr(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return ye(n, new T(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = zn(n.state, e);
        return i && i instanceof M ? ye(n, i) : !1;
      } else if (!(Z && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? M.isSelectable(s) ? ye(n, new M(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : kt ? ye(n, new T(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof M && r.node.isInline)
      return ye(n, new T(e > 0 ? r.$to : r.$from));
    {
      let i = zn(n.state, e);
      return i ? ye(n, i) : !1;
    }
  }
}
function $t(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function at(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Je(n, e) {
  return e < 0 ? la(n) : aa(n);
}
function la(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (ee && t.nodeType == 1 && r < $t(t) && at(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (at(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (ks(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && at(l, -1); )
          i = t.parentNode, s = $(l), l = l.previousSibling;
        if (l)
          t = l, r = $t(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Fn(n, t, r) : i && Fn(n, i, s);
}
function aa(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = $t(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (at(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (ks(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && at(l, 1); )
          s = l.parentNode, o = $(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = $t(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Fn(n, s, o);
}
function ks(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function ca(n, e) {
  for (; n && e == n.childNodes.length && !bt(n); )
    e = $(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function fa(n, e) {
  for (; n && !e && !bt(n); )
    e = $(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Fn(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = ca(e, t)) ? (e = o, t = 0) : (s = fa(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Xt(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && he(n);
  }, 50);
}
function Zr(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(q || Rl) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Qr(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T && !r.empty || t.indexOf("s") > -1 || Z && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = zn(n.state, e);
    if (o && o instanceof M)
      return ye(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof X ? O.near(o, e) : O.findFrom(o, e);
    return l ? ye(n, l) : !1;
  }
  return !1;
}
function ei(n, e) {
  if (!(n.state.selection instanceof T))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function ti(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function ua(n) {
  if (!K || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    ti(n, r, "true"), setTimeout(() => ti(n, r, "false"), 20);
  }
  return !1;
}
function da(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function ha(n, e) {
  let t = e.keyCode, r = da(e);
  if (t == 8 || Z && t == 72 && r == "c")
    return ei(n, -1) || Je(n, -1);
  if (t == 46 && !e.shiftKey || Z && t == 68 && r == "c")
    return ei(n, 1) || Je(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Z && t == 66 && r == "c") {
    let i = t == 37 ? Zr(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Xr(n, i, r) || Je(n, i);
  } else if (t == 39 || Z && t == 70 && r == "c") {
    let i = t == 39 ? Zr(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Xr(n, i, r) || Je(n, i);
  } else {
    if (t == 38 || Z && t == 80 && r == "c")
      return Qr(n, -1, r) || Je(n, -1);
    if (t == 40 || Z && t == 78 && r == "c")
      return ua(n) || Qr(n, 1, r) || Je(n, 1);
    if (r == (Z ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Gn(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || Le.fromSchema(n.state.schema), l = Ts(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, f, u = 0;
  for (; c && c.nodeType == 1 && (f = Cs[c.nodeName.toLowerCase()]); ) {
    for (let h = f.length - 1; h >= 0; h--) {
      let p = l.createElement(f[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d, slice: e };
}
function xs(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = !!e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, s || r, n);
    }), s)
      return l = new k(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (d) => {
        l = d(l, n, !0);
      }), l;
    let u = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (u)
      l = u;
    else {
      let d = i.marks(), { schema: h } = n.state, p = Le.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (u) => {
      t = u(t, n);
    }), o = ya(t), kt && ba(o);
  let c = o && o.querySelector("[data-pm-slice]"), f = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (f && f[3])
    for (let u = +f[3]; u > 0; u--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || ue.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || f),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !pa.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), f)
    l = ka(ni(l, +f[1], +f[2]), f[4]);
  else if (l = k.maxOpen(ma(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, d = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = ni(l, u, d);
  }
  return n.someProp("transformPasted", (u) => {
    l = u(l, n, a);
  }), l;
}
const pa = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function ma(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && Ms(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = ws(o[o.length - 1], s.length));
        let f = Ss(l, a);
        o.push(f), i = i.matchType(f.type), s = a;
      }
    }), o)
      return b.from(o);
  }
  return n;
}
function Ss(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, b.from(n));
  return n;
}
function Ms(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Ms(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(b.from(Ss(t, n, i + 1))));
  }
}
function ws(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ws(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
  return n.copy(t.append(r));
}
function Vn(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = Vn(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function ni(n, e, t) {
  return e < n.openStart && (n = new k(Vn(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new k(Vn(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Cs = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let ri = null;
function Ts() {
  return ri || (ri = document.implementation.createHTMLDocument("title"));
}
let yn = null;
function ga(n) {
  let e = window.trustedTypes;
  return e ? (yn || (yn = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), yn.createHTML(n)) : n;
}
function ya(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Ts().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Cs[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = ga(n), i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function ba(n) {
  let e = n.querySelectorAll(q ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function ka(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = b.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new k(i, s, o);
}
const H = {}, _ = {}, xa = { touchstart: !0, touchmove: !0 };
class Sa {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Ma(n) {
  for (let e in H) {
    let t = H[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Ca(n, r) && !Yn(n, r) && (n.editable || !(r.type in _)) && t(n, r);
    }, xa[e] ? { passive: !0 } : void 0);
  }
  K && n.dom.addEventListener("input", () => null), Ln(n);
}
function Se(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function wa(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Ln(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Yn(n, r));
  });
}
function Yn(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Ca(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Ta(n, e) {
  !Yn(n, e) && H[e.type] && (n.editable || !(e.type in _)) && H[e.type](n, e);
}
_.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Ns(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(ce && q && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Xe && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Ee(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || ha(n, t) ? t.preventDefault() : Se(n, "key");
};
_.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
_.keypress = (n, e) => {
  let t = e;
  if (Ns(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Z && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof T) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), s = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i, s)) && n.dispatch(s()), t.preventDefault();
  }
};
function Qt(n) {
  return { left: n.clientX, top: n.clientY };
}
function Oa(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Xn(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function Ue(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Na(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && M.isSelectable(r) ? (Ue(n, new M(t)), !0) : !1;
}
function Ea(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof M && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (M.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (Ue(n, M.create(n.state.doc, i)), !0) : !1;
}
function Da(n, e, t, r, i) {
  return Xn(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? Ea(n, t) : Na(n, t));
}
function va(n, e, t, r) {
  return Xn(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Aa(n, e, t, r) {
  return Xn(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || Ra(n, t, r);
}
function Ra(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Ue(n, T.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      Ue(n, T.create(r, l + 1, l + 1 + o.content.size));
    else if (M.isSelectable(o))
      Ue(n, M.create(r, l));
    else
      continue;
    return !0;
  }
}
function Zn(n) {
  return Wt(n);
}
const Os = Z ? "metaKey" : "ctrlKey";
H.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Zn(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && Oa(t, n.input.lastClick) && !t[Os] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s, button: t.button };
  let o = n.posAtCoords(Qt(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Ia(n, o, t, !!r)) : (s == "doubleClick" ? va : Aa)(n, o.pos, o.inside, t) ? t.preventDefault() : Se(n, "pointer"));
};
class Ia {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Os], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let f = e.state.doc.resolve(t.pos);
      s = f.parent, o = f.depth ? f.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof M && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ee && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Se(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => he(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Qt(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Se(this.view, "pointer") : Da(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    K && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    q && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ue(this.view, O.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : Se(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Se(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
H.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Zn(n), Se(n, "pointer");
};
H.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Se(n, "pointer");
};
H.contextmenu = (n) => Zn(n);
function Ns(n, e) {
  return n.composing ? !0 : K && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Pa = ce ? 5e3 : -1;
_.compositionstart = _.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof T && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Wt(n, !0), n.markCursor = null;
    else if (Wt(n, !e.selection.empty), ee && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  Es(n, Pa);
};
_.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Es(n, 20));
};
function Es(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Wt(n), e));
}
function Ds(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = za()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Ba(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Nl(e.focusNode, e.focusOffset), r = El(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function za() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Wt(n, e = !1) {
  if (!(ce && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Ds(n), e || n.docView && n.docView.dirty) {
      let t = _n(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Fa(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const dt = U && Me < 15 || Xe && Il < 604;
H.copy = _.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = dt ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Gn(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Fa(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Va(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function La(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? ht(n, r.value, null, i, e) : ht(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function ht(n, e, t, r, i) {
  let s = xs(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || k.empty)))
    return !0;
  if (!s)
    return !1;
  let o = Va(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function vs(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
_.paste = (n, e) => {
  let t = e;
  if (n.composing && !ce)
    return;
  let r = dt ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && ht(n, vs(r), r.getData("text/html"), i, t) ? t.preventDefault() : La(n, t);
};
class As {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const $a = Z ? "altKey" : "ctrlKey";
function Rs(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[$a];
}
H.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(Qt(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof M ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = M.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let u = n.docView.nearestDesc(t.target, !0);
      u && u.node.type.spec.draggable && u != n.docView && (o = M.create(n.state.doc, u.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: f } = Gn(n, l);
  (!t.dataTransfer.files.length || !q || rs > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(dt ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", dt || t.dataTransfer.setData("text/plain", c), n.dragging = new As(f, Rs(n, t), o);
};
H.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
_.dragover = _.dragenter = (n, e) => e.preventDefault();
_.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(Qt(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n, !1);
  }) : o = xs(n, vs(t.dataTransfer), dt ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && Rs(n, t));
  if (n.someProp("handleDrop", (p) => p(n, t, o || k.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? pl(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let f = c.mapping.map(a), u = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = c.doc;
  if (u ? c.replaceRangeWith(f, f, o.content.firstChild) : c.replaceRange(f, f, o), c.doc.eq(d))
    return;
  let h = c.doc.resolve(f);
  if (u && M.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new M(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, x) => p = x), c.setSelection(Un(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
H.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && he(n);
  }, 20));
};
H.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
H.beforeinput = (n, e) => {
  if (q && ce && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Ee(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in _)
  H[n] = _[n];
function pt(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Jt {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Ie, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new re(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Jt && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && pt(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ce {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Ie;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new re(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Ce && pt(this.attrs, e.attrs) && pt(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ce;
  }
  destroy() {
  }
}
class Qn {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Ie;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new re(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Qn && pt(this.attrs, e.attrs) && pt(this.spec, e.spec);
  }
  destroy() {
  }
}
class re {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new re(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new re(e, e, new Jt(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new re(e, t, new Ce(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new re(e, t, new Qn(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Ce;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Jt;
  }
}
const je = [], Ie = {};
class B {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : je, this.children = t.length ? t : je;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? qt(t, e, 0, Ie) : J;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == J || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Ie);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? Wa(this.children, o || [], e, t, r, i, s) : o ? new B(o.sort(Pe), je) : J;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == J ? B.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, f;
      if (f = Ps(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, f, c + 1) : i.splice(s, 0, a, a + l.nodeSize, qt(f, l, c + 1, Ie)), s += 3;
      }
    });
    let o = Is(s ? Bs(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new B(o.length ? this.local.concat(o).sort(Pe) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == J ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let f = 0, u; f < e.length; f++)
        (u = e[f]) && u.from > l && u.to < a && (e[f] = null, (o || (o = [])).push(u));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != J ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new B(i, r) : J;
  }
  forChild(e, t) {
    if (this == J)
      return this;
    if (t.isLeaf)
      return B.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Ce) {
        let c = Math.max(s, a.from) - s, f = Math.min(o, a.to) - s;
        c < f && (i || (i = [])).push(a.copy(c, f));
      }
    }
    if (i) {
      let l = new B(i.sort(Pe), je);
      return r ? new be([l, r]) : l;
    }
    return r || J;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof B) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return er(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == J)
      return je;
    if (e.inlineContent || !this.local.some(Ce.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Ce || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
B.empty = new B([], []);
B.removeOverlap = er;
const J = B.empty;
class be {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Ie));
    return be.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return B.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != J && (s instanceof be ? r = r.concat(s.members) : r.push(s));
    }
    return be.from(r);
  }
  eq(e) {
    if (!(e instanceof be) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? er(r ? t : t.sort(Pe)) : je;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return J;
      case 1:
        return e[0];
      default:
        return new be(e.every((t) => t instanceof B) ? e : e.reduce((t, r) => t.concat(r instanceof B ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function Wa(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, f = s; c < t.maps.length; c++) {
    let u = 0;
    t.maps[c].forEach((d, h, p, m) => {
      let g = m - p - (h - d);
      for (let y = 0; y < l.length; y += 3) {
        let x = l[y + 1];
        if (x < 0 || d > x + f - u)
          continue;
        let w = l[y] + f - u;
        h >= w ? l[y + 1] = d <= w ? -2 : -1 : d >= f && g && (l[y] += g, l[y + 1] += g);
      }
      u += g;
    }), f = t.maps[c].map(f, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let f = t.map(n[c] + s), u = f - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + s, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(u), g = r.maybeChild(p);
      if (g && m == u && m + g.nodeSize == h) {
        let y = l[c + 2].mapInner(t, g, f + 1, n[c] + s + 1, o);
        y != J ? (l[c] = u, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Ja(l, n, e, t, i, s, o), f = qt(c, r, 0, o);
    e = f.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, d = 0; u < f.children.length; u += 3) {
      let h = f.children[u];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, f.children[u], f.children[u + 1], f.children[u + 2]);
    }
  }
  return new B(e.sort(Pe), l);
}
function Is(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new re(i.from + e, i.to + e, i.type));
  }
  return t;
}
function Ja(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let f = 0; f < a.local.length; f++) {
      let u = a.local[f].map(r, i, c);
      u ? t.push(u) : o.onRemove && o.onRemove(a.local[f].spec);
    }
    for (let f = 0; f < a.children.length; f += 3)
      l(a.children[f + 2], a.children[f] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function Ps(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function Bs(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function qt(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = Ps(n, l, a + t);
    if (c) {
      s = !0;
      let f = qt(c, l, t + a + 1, r);
      f != J && i.push(a, a + l.nodeSize, f);
    }
  });
  let o = Is(s ? Bs(n) : n, -t).sort(Pe);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new B(o, i) : J;
}
function Pe(n, e) {
  return n.from - e.from || n.to - e.to;
}
function er(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), ii(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), ii(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function ii(n, e, t) {
  for (; e < n.length && Pe(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function bn(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != J && e.push(r);
  }), n.cursorWrapper && e.push(B.create(n.state.doc, [n.cursorWrapper.deco])), be.from(e);
}
const qa = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, ja = U && Me <= 11;
class Ka {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Ha {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Ka(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      U && Me <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), ja && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, qa)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Yr(this.view)) {
      if (this.suppressingSelectionUpdates)
        return he(this.view);
      if (U && Me <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Fe(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Ye(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Ye(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Yr(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let f = 0; f < t.length; f++) {
        let u = this.registerMutation(t[f], a);
        u && (s = s < 0 ? u.from : Math.min(u.from, s), o = o < 0 ? u.to : Math.max(u.to, o), u.typeOver && (l = !0));
      }
    if (ee && a.length) {
      let f = a.filter((u) => u.nodeName == "BR");
      if (f.length == 2) {
        let [u, d] = f;
        u.parentNode && u.parentNode.parentNode == d.parentNode ? d.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let d of f) {
          let h = d.parentNode;
          h && h.nodeName == "LI" && (!u || Ga(e, u) != h) && d.remove();
        }
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Xt(r) && (c = _n(e)) && c.eq(O.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, he(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), _a(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || he(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let f = 0; f < e.addedNodes.length; f++) {
        let u = e.addedNodes[f];
        t.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (U && Me <= 11 && e.addedNodes.length)
        for (let f = 0; f < e.addedNodes.length; f++) {
          let { previousSibling: u, nextSibling: d } = e.addedNodes[f];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? $(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? $(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let si = /* @__PURE__ */ new WeakMap(), oi = !1;
function _a(n) {
  if (!si.has(n) && (si.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = ee, oi)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), oi = !0;
  }
}
function li(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return Fe(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function Ua(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return li(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? li(n, t) : null;
}
function Ga(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function Ya(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, f = a.anchorNode;
  if (f && n.dom.contains(f.nodeType == 1 ? f : f.parentNode) && (c = [{ node: f, offset: a.anchorOffset }], Xt(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), q && n.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let y = r.childNodes[g - 1], x = y.pmViewDesc;
      if (y.nodeName == "BR" && !x) {
        s = g;
        break;
      }
      if (!x || x.size)
        break;
    }
  let u = n.state.doc, d = n.someProp("domParser") || ue.fromSchema(n.state.schema), h = u.resolve(o), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Xa,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), p = { anchor: g + o, head: y + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function Xa(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (K && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || K && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Za = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Qa(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let C = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, D = _n(n, C);
    if (D && !n.state.selection.eq(D)) {
      if (q && ce && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (wt) => wt(n, Ee(13, "Enter"))))
        return;
      let I = n.state.tr.setSelection(D);
      C == "pointer" ? I.setMeta("pointer", !0) : C == "key" && I.scrollIntoView(), s && I.setMeta("composition", s), n.dispatch(I);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = Ya(n, e, t), f = n.state.doc, u = f.slice(c.from, c.to), d, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, h = "end") : (d = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = nc(u.content, c.doc.content, c.from, d, h);
  if (p && n.input.domChangeCount++, (Xe && n.input.lastIOSEnter > Date.now() - 225 || ce) && i.some((C) => C.nodeType == 1 && !Za.test(C.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (C) => C(n, Ee(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof T && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let C = ai(n, n.state.doc, c.sel);
        if (C && !C.eq(n.state.selection)) {
          let D = n.state.tr.setSelection(C);
          s && D.setMeta("composition", s), n.dispatch(D);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof T && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), U && Me <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = f.resolve(p.start), x = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA;
  if ((Xe && n.input.lastIOSEnter > Date.now() - 225 && (!x || i.some((C) => C.nodeName == "DIV" || C.nodeName == "P")) || !x && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && n.someProp("handleKeyDown", (C) => C(n, Ee(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && tc(f, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (C) => C(n, Ee(8, "Backspace")))) {
    ce && q && n.domObserver.suppressSelectionUpdates();
    return;
  }
  q && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), ce && !x && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(C) {
      return C(n, Ee(13, "Enter"));
    });
  }, 20));
  let w = p.start, E = p.endA, N = (C) => {
    let D = C || n.state.tr.replace(w, E, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let I = ai(n, D.doc, c.sel);
      I && !(q && n.composing && I.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (I.head == w || I.head == D.mapping.map(E) - 1) || U && I.empty && I.head == w) && D.setSelection(I);
    }
    return s && D.setMeta("composition", s), D.scrollIntoView();
  }, R;
  if (x) {
    if (m.pos == g.pos) {
      U && Me <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => he(n), 20));
      let C = N(n.state.tr.delete(w, E)), D = f.resolve(p.start).marksAcross(f.resolve(p.endA));
      D && C.ensureMarks(D), n.dispatch(C);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (R = ec(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let C = N(n.state.tr);
      R.type == "add" ? C.addMark(w, E, R.mark) : C.removeMark(w, E, R.mark), n.dispatch(C);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let C = m.parent.textBetween(m.parentOffset, g.parentOffset), D = () => N(n.state.tr.insertText(C, w, E));
      n.someProp("handleTextInput", (I) => I(n, w, E, C, D)) || n.dispatch(D());
    }
  } else
    n.dispatch(N());
}
function ai(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Un(n, e.resolve(t.anchor), e.resolve(t.head));
}
function ec(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let f = 0; f < r.length; f++)
    i = r[f].removeFromSet(i);
  for (let f = 0; f < t.length; f++)
    s = t[f].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (f) => f.mark(l.addToSet(f.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (f) => f.mark(l.removeFromSet(f.marks));
  else
    return null;
  let c = [];
  for (let f = 0; f < e.childCount; f++)
    c.push(a(e.child(f)));
  if (b.from(c).eq(n))
    return { mark: l, type: o };
}
function tc(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    kn(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(kn(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || kn(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function kn(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function nc(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && ci(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && ci(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function ci(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class zs {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Sa(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(pi), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = di(this), ui(this), this.nodeViews = hi(this), this.docView = jr(this.state.doc, fi(this), bn(this), this.dom, this), this.domObserver = new Ha(this, (r, i, s, o) => Qa(this, r, i, s, o)), this.domObserver.start(), Ma(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Ln(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(pi), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Ds(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = hi(this);
      ic(h, this.nodeViews) && (this.nodeViews = h, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Ln(this), this.editable = di(this), ui(this);
    let a = bn(this), c = fi(this), f = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = s || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(i.selection)) && (o = !0);
    let d = f == "preserve" && o && this.dom.style.overflowAnchor == null && zl(this);
    if (o) {
      this.domObserver.stop();
      let h = u && (U || q) && !this.composing && !i.selection.empty && !e.selection.empty && rc(i.selection, e.selection);
      if (u) {
        let p = q ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Ba(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = jr(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && oa(this)) ? he(this, h) : (ys(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), f == "reset" ? this.dom.scrollTop = 0 : f == "to selection" ? this.scrollToSelection() : d && Fl(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof M) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Vr(this, t.getBoundingClientRect(), e);
      } else
        Vr(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new As(e.slice, e.move, i < 0 ? void 0 : M.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (U) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && Vl(this.dom), he(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return ql(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return cs(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Ul(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return ht(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return ht(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return Gn(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (wa(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], bn(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Tl());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Ta(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? K && this.root.nodeType === 11 && vl(this.dom.ownerDocument) == this.dom && Ua(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
zs.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function fi(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [re.node(0, n.state.doc.content.size, e)];
}
function ui(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: re.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function di(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function rc(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function hi(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function ic(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function pi(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Te = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, jt = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, sc = typeof navigator < "u" && /Mac/.test(navigator.platform), oc = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var W = 0; W < 10; W++) Te[48 + W] = Te[96 + W] = String(W);
for (var W = 1; W <= 24; W++) Te[W + 111] = "F" + W;
for (var W = 65; W <= 90; W++)
  Te[W] = String.fromCharCode(W + 32), jt[W] = String.fromCharCode(W);
for (var xn in Te) jt.hasOwnProperty(xn) || (jt[xn] = Te[xn]);
function lc(n) {
  var e = sc && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || oc && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? jt : Te)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const ac = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), cc = typeof navigator < "u" && /Win/.test(navigator.platform);
function fc(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ac ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function uc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[fc(t)] = n[t];
  return e;
}
function Sn(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function dc(n) {
  return new oe({ props: { handleKeyDown: hc(n) } });
}
function hc(n) {
  let e = uc(n);
  return function(t, r) {
    let i = lc(r), s, o = e[Sn(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Sn(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(cc && r.ctrlKey && r.altKey) && (s = Te[r.keyCode]) && s != i) {
        let l = e[Sn(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const tr = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Fs(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Vs = (n, e, t) => {
  let r = Fs(n, t);
  if (!r)
    return !1;
  let i = nr(r);
  if (!i) {
    let o = r.blockRange(), l = o && Qe(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (_s(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Ze(s, "end") || M.isSelectable(s)))
    for (let o = r.depth; ; o--) {
      let l = Gt(n.doc, r.before(o), r.after(o), k.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Ze(s, "end") ? O.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : M.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, pc = (n, e, t) => {
  let r = Fs(n, t);
  if (!r)
    return !1;
  let i = nr(r);
  return i ? Ls(n, i, e) : !1;
}, mc = (n, e, t) => {
  let r = Ws(n, t);
  if (!r)
    return !1;
  let i = rr(r);
  return i ? Ls(n, i, e) : !1;
};
function Ls(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
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
  let c = Gt(n.doc, s, a, k.empty);
  if (!c || c.from != s || c instanceof z && c.slice.size >= a - s)
    return !1;
  if (t) {
    let f = n.tr.step(c);
    f.setSelection(T.create(f.doc, s)), t(f.scrollIntoView());
  }
  return !0;
}
function Ze(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const $s = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = nr(r);
  }
  let o = s && s.nodeBefore;
  return !o || !M.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function nr(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Ws(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Js = (n, e, t) => {
  let r = Ws(n, t);
  if (!r)
    return !1;
  let i = rr(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (_s(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Ze(s, "start") || M.isSelectable(s))) {
    let o = Gt(n.doc, r.before(), r.after(), k.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Ze(s, "start") ? O.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : M.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, qs = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = rr(r);
  }
  let o = s && s.nodeAfter;
  return !o || !M.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function rr(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const gc = (n, e) => {
  let t = n.selection, r = t instanceof M, i;
  if (r) {
    if (t.node.isTextblock || !Oe(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Ut(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(M.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, yc = (n, e) => {
  let t = n.selection, r;
  if (t instanceof M) {
    if (t.node.isTextblock || !Oe(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Ut(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, bc = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && Qe(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, js = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function ir(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const kc = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = ir(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(O.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Ks = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof X || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = ir(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(T.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Hs = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (de(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && Qe(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
};
function xc(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof M && e.selection.node.isBlock)
      return !r.parentOffset || !de(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let s = [], o, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = ir(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), s.unshift(a && l ? { type: l } : null), o = h;
        break;
      } else {
        if (h == 1)
          return !1;
        s.unshift(null);
      }
    let f = e.tr;
    (e.selection instanceof T || e.selection instanceof X) && f.deleteSelection();
    let u = f.mapping.map(r.pos), d = de(f.doc, u, s.length, s);
    if (d || (s[0] = l ? { type: l } : null, d = de(f.doc, u, s.length, s)), !d)
      return !1;
    if (f.split(u, s.length, s), !a && c && r.node(o).type != l) {
      let h = f.mapping.map(r.before(o)), p = f.doc.resolve(h);
      l && r.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l) && f.setNodeMarkup(f.mapping.map(r.before(o)), l);
    }
    return t && t(f.scrollIntoView()), !0;
  };
}
const Sc = xc(), Mc = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(M.create(n.doc, i))), !0);
};
function wc(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Oe(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function _s(n, e, t, r) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && wc(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let h = e.pos + s.nodeSize, p = b.empty;
      for (let y = o.length - 1; y >= 0; y--)
        p = b.from(o[y].create(null, p));
      p = b.from(i.copy(p));
      let m = n.tr.step(new F(e.pos - 1, h, e.pos, h, new k(p, 1, 0), o.length, !0)), g = m.doc.resolve(h + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == i.type && Oe(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let f = s.type.spec.isolating || r > 0 && a ? null : O.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), d = u && Qe(u);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(u, d).scrollIntoView()), !0;
  if (c && Ze(s, "start", !0) && Ze(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = s, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (t) {
        let y = b.empty;
        for (let w = p.length - 1; w >= 0; w--)
          y = b.from(p[w].copy(y));
        let x = n.tr.step(new F(e.pos - p.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new k(y, p.length, 0), 0, !0));
        t(x.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Us(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(T.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Cc = Us(-1), Tc = Us(1);
function Oc(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && jn(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function mi(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let f = t.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
function sr(...n) {
  return function(e, t, r) {
    for (let i = 0; i < n.length; i++)
      if (n[i](e, t, r))
        return !0;
    return !1;
  };
}
sr(tr, Vs, $s);
sr(tr, Js, qs);
sr(js, Ks, Hs, Sc);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Nc(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return Ec(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Ec(n, e, t, r = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    s = new zt(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new zt(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = jn(s, t, r, e);
  return l ? (n && Dc(n, e, l, i, t), !0) : !1;
}
function Dc(n, e, t, r, i) {
  let s = b.empty;
  for (let f = t.length - 1; f >= 0; f--)
    s = b.from(t[f].type.create(t[f].attrs, s));
  n.step(new F(e.start - (r ? 2 : 0), e.end, e.start, e.end, new k(s, 0, 0), t.length, !0));
  let o = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (o = f + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let f = e.startIndex, u = e.endIndex, d = !0; f < u; f++, d = !1)
    !d && de(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
  return n;
}
function vc(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? Ac(e, t, n, s) : Rc(e, t, s) : !0 : !1;
  };
}
function Ac(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new F(s - 1, o, s, o, new k(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new zt(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = Qe(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return Oe(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function Rc(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), f = s.index(-1);
  if (!c.canReplace(f + (l ? 0 : 1), f + 1, o.content.append(a ? b.empty : b.from(i))))
    return !1;
  let u = s.pos, d = u + o.nodeSize;
  return r.step(new F(u - (l ? 1 : 0), d + (a ? 1 : 0), u + 1, d - 1, new k((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Ic(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, f = b.from(c ? n.create() : null), u = new k(b.from(n.create(null, b.from(l.type.create(null, f)))), c ? 3 : 1, 0), d = s.start, h = s.end;
      t(e.tr.step(new F(d - (c ? 3 : 1), h, d, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var Pc = Object.defineProperty, Gs = (n, e) => {
  for (var t in e)
    Pc(n, t, { get: e[t], enumerable: !0 });
};
function en(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
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
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
var tn = class {
  constructor(n) {
    this.editor = n.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = n.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: n, editor: e, state: t } = this, { view: r } = e, { tr: i } = t, s = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(n).map(([o, l]) => [o, (...c) => {
        const f = l(...c)(s);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), f;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(n, e = !0) {
    const { rawCommands: t, editor: r, state: i } = this, { view: s } = r, o = [], l = !!n, a = n || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(a), o.every((u) => u === !0)), f = {
      ...Object.fromEntries(
        Object.entries(t).map(([u, d]) => [u, (...p) => {
          const m = this.buildProps(a, e), g = d(...p)(m);
          return o.push(g), f;
        }])
      ),
      run: c
    };
    return f;
  }
  createCan(n) {
    const { rawCommands: e, state: t } = this, r = !1, i = n || t.tr, s = this.buildProps(i, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...s, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, r)
    };
  }
  buildProps(n, e = !0) {
    const { rawCommands: t, editor: r, state: i } = this, { view: s } = r, o = {
      tr: n,
      editor: r,
      view: s,
      state: en({
        state: i,
        transaction: n
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(n, e),
      can: () => this.createCan(n),
      get commands() {
        return Object.fromEntries(
          Object.entries(t).map(([l, a]) => [l, (...c) => a(...c)(o)])
        );
      }
    };
    return o;
  }
}, Bc = class {
  constructor() {
    this.callbacks = {};
  }
  on(n, e) {
    return this.callbacks[n] || (this.callbacks[n] = []), this.callbacks[n].push(e), this;
  }
  emit(n, ...e) {
    const t = this.callbacks[n];
    return t && t.forEach((r) => r.apply(this, e)), this;
  }
  off(n, e) {
    const t = this.callbacks[n];
    return t && (e ? this.callbacks[n] = t.filter((r) => r !== e) : delete this.callbacks[n]), this;
  }
  once(n, e) {
    const t = (...r) => {
      this.off(n, t), e.apply(this, r);
    };
    return this.on(n, t);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
function zc(n, e) {
  const t = new Qi(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
var Ys = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Ys(r);
  }
  return n;
};
function it(n) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ys(t);
}
function mt(n, e, t) {
  if (n instanceof Y || n instanceof b)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return b.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), mt("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new Vi({
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
      if (t.slice ? ue.fromSchema(a).parseSlice(it(n), t.parseOptions) : ue.fromSchema(a).parse(it(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const s = ue.fromSchema(e);
    return t.slice ? s.parseSlice(it(n), t.parseOptions).content : s.parse(it(n), t.parseOptions);
  }
  return mt("", e, t);
}
function $n(n, e, t = {}, r = {}) {
  return mt(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
function Fc(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function ku(n, e) {
  const t = [];
  return n.descendants((r, i) => {
    e(r) && t.push({
      node: r,
      pos: i
    });
  }), t;
}
function xu(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, s) => {
    t(i) && r.push({
      node: i,
      pos: s
    });
  }), r;
}
function Vc(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function nn(n) {
  return (e) => Vc(e.$from, n);
}
function S(n, e, t) {
  return n.config[e] === void 0 && n.parent ? S(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? S(n.parent, e, t) : null
  }) : n.config[e];
}
function or(n) {
  return n.map((e) => {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = S(e, "addExtensions", t);
    return r ? [e, ...or(r())] : e;
  }).flat(10);
}
function rn(n, e) {
  const t = Le.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function Xs(n) {
  return typeof n == "function";
}
function v(n, e = void 0, ...t) {
  return Xs(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function Lc(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function gt(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Zs(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = gt(n), i = [...t, ...r], s = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: i
    }, a = S(
      o,
      "addGlobalAttributes",
      l
    );
    if (!a)
      return;
    a().forEach((f) => {
      f.types.forEach((u) => {
        Object.entries(f.attributes).forEach(([d, h]) => {
          e.push({
            type: u,
            name: d,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = S(
      o,
      "addAttributes",
      l
    );
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([f, u]) => {
      const d = {
        ...s,
        ...u
      };
      typeof d?.default == "function" && (d.default = d.default()), d?.isRequired && d?.default === void 0 && delete d.default, e.push({
        type: o.name,
        name: f,
        attribute: d
      });
    });
  }), e;
}
function $c(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? String(s).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((f) => !a.includes(f));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = s ? s.split(";").map((f) => f.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((f) => f.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((f) => {
          const [u, d] = f.split(":").map((h) => h.trim());
          c.set(u, d);
        }), l.forEach((f) => {
          const [u, d] = f.split(":").map((h) => h.trim());
          c.set(u, d);
        }), r[i] = Array.from(c.entries()).map(([f, u]) => `${f}: ${u}`).join("; ");
      } else
        r[i] = s;
    }), r;
  }, {});
}
function Kt(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => $c(t, r), {});
}
function Wc(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function gi(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Wc(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function yi(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && Lc(t) ? !1 : t != null)
  );
}
function Qs(n, e) {
  var t;
  const r = Zs(n), { nodeExtensions: i, markExtensions: s } = gt(n), o = (t = i.find((c) => S(c, "topNode"))) == null ? void 0 : t.name, l = Object.fromEntries(
    i.map((c) => {
      const f = r.filter((y) => y.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, d = n.reduce((y, x) => {
        const w = S(x, "extendNodeSchema", u);
        return {
          ...y,
          ...w ? w(c) : {}
        };
      }, {}), h = yi({
        ...d,
        content: v(S(c, "content", u)),
        marks: v(S(c, "marks", u)),
        group: v(S(c, "group", u)),
        inline: v(S(c, "inline", u)),
        atom: v(S(c, "atom", u)),
        selectable: v(S(c, "selectable", u)),
        draggable: v(S(c, "draggable", u)),
        code: v(S(c, "code", u)),
        whitespace: v(S(c, "whitespace", u)),
        linebreakReplacement: v(
          S(c, "linebreakReplacement", u)
        ),
        defining: v(S(c, "defining", u)),
        isolating: v(S(c, "isolating", u)),
        attrs: Object.fromEntries(
          f.map((y) => {
            var x, w;
            return [
              y.name,
              { default: (x = y?.attribute) == null ? void 0 : x.default, validate: (w = y?.attribute) == null ? void 0 : w.validate }
            ];
          })
        )
      }), p = v(S(c, "parseHTML", u));
      p && (h.parseDOM = p.map(
        (y) => gi(y, f)
      ));
      const m = S(c, "renderHTML", u);
      m && (h.toDOM = (y) => m({
        node: y,
        HTMLAttributes: Kt(y, f)
      }));
      const g = S(c, "renderText", u);
      return g && (h.toText = g), [c.name, h];
    })
  ), a = Object.fromEntries(
    s.map((c) => {
      const f = r.filter((g) => g.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, d = n.reduce((g, y) => {
        const x = S(y, "extendMarkSchema", u);
        return {
          ...g,
          ...x ? x(c) : {}
        };
      }, {}), h = yi({
        ...d,
        inclusive: v(S(c, "inclusive", u)),
        excludes: v(S(c, "excludes", u)),
        group: v(S(c, "group", u)),
        spanning: v(S(c, "spanning", u)),
        code: v(S(c, "code", u)),
        attrs: Object.fromEntries(
          f.map((g) => {
            var y, x;
            return [
              g.name,
              { default: (y = g?.attribute) == null ? void 0 : y.default, validate: (x = g?.attribute) == null ? void 0 : x.validate }
            ];
          })
        )
      }), p = v(S(c, "parseHTML", u));
      p && (h.parseDOM = p.map(
        (g) => gi(g, f)
      ));
      const m = S(c, "renderHTML", u);
      return m && (h.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: Kt(g, f)
      })), [c.name, h];
    })
  );
  return new Vi({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Jc(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
function lr(n) {
  return n.sort((t, r) => {
    const i = S(t, "priority") || 100, s = S(r, "priority") || 100;
    return i > s ? -1 : i < s ? 1 : 0;
  });
}
function ar(n) {
  const e = lr(or(n)), t = Jc(e.map((r) => r.name));
  return t.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${t.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function cr(n, e) {
  const t = ar(n);
  return Qs(t, e);
}
function Su(n, e) {
  const t = cr(e), r = Y.fromJSON(t, n);
  return rn(r.content, t);
}
function Mu(n, e) {
  const t = cr(e), r = it(n);
  return ue.fromSchema(t).parse(r).toJSON();
}
function eo(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, f, u) => {
    var d;
    a.isBlock && c > r && (l += s);
    const h = o?.[a.type.name];
    if (h)
      return f && (l += h({
        node: a,
        pos: c,
        parent: f,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (d = a?.text) == null ? void 0 : d.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function to(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return eo(n, t, e);
}
function fr(n) {
  return Object.fromEntries(
    Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText])
  );
}
function wu(n, e, t) {
  const { blockSeparator: r = `

`, textSerializers: i = {} } = t || {}, s = cr(e), o = Y.fromJSON(s, n);
  return to(o, {
    blockSeparator: r,
    textSerializers: {
      ...fr(s),
      ...i
    }
  });
}
function pe(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
function no(n, e) {
  const t = pe(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function V(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function qc(n, e) {
  const t = V(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function sn(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function jc(n, e) {
  const t = sn(
    typeof e == "string" ? e : e.name,
    n.schema
  );
  return t === "node" ? qc(n, e) : t === "mark" ? no(n, e) : {};
}
function Kc(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function Hc(n) {
  const e = Kc(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((s, o) => o !== r).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function _c(n) {
  const { mapping: e, steps: t } = n, r = [];
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
      const c = e.slice(s).map(l, -1), f = e.slice(s).map(a), u = e.invert().map(c, -1), d = e.invert().map(f);
      r.push({
        oldRange: {
          from: u,
          to: d
        },
        newRange: {
          from: c,
          to: f
        }
      });
    });
  }), Hc(r);
}
function Uc(n, e = 0) {
  const r = n.type === n.type.schema.topNodeType ? 0 : 1, i = e, s = i + n.nodeSize, o = n.marks.map((c) => {
    const f = {
      type: c.type.name
    };
    return Object.keys(c.attrs).length && (f.attrs = { ...c.attrs }), f;
  }), l = { ...n.attrs }, a = {
    type: n.type.name,
    from: i,
    to: s
  };
  return Object.keys(l).length && (a.attrs = l), o.length && (a.marks = o), n.content.childCount && (a.content = [], n.forEach((c, f) => {
    var u;
    (u = a.content) == null || u.push(Uc(c, e + f + r));
  })), n.text && (a.text = n.text), a;
}
function ur(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
function Ht(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : ur(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function ro(n, e, t = {}) {
  return n.find((r) => r.type === e && Ht(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function bi(n, e, t = {}) {
  return !!ro(n, e, t);
}
function dr(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((f) => f.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((f) => f.type === e) || (t = t || ((r = i.node.marks[0]) == null ? void 0 : r.attrs), !ro([...i.node.marks], e, t)))
    return;
  let o = i.index, l = n.start() + i.offset, a = o + 1, c = l + i.node.nodeSize;
  for (; o > 0 && bi([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; a < n.parent.childCount && bi([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function io(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n), o = dr(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || i?.nodeSize === void 0 || r.push(
      ...i.marks.map((o) => ({
        from: s,
        to: s + i.nodeSize,
        mark: o
      }))
    );
  }), r;
}
var Cu = (n, e, t, r = 20) => {
  const i = n.doc.resolve(t);
  let s = r, o = null;
  for (; s > 0 && o === null; ) {
    const l = i.node(s);
    l?.type.name === e ? o = l : s -= 1;
  }
  return [o, s];
};
function Mn(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Rt(n, e, t) {
  return Object.fromEntries(
    Object.entries(t).filter(([r]) => {
      const i = n.find((s) => s.type === e && s.name === r);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
var Gc = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const f = ((c = (a = i.type.spec).toText) == null ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? f : f.slice(0, Math.max(0, r - s));
  }), t;
};
function Wn(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? pe(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => Ht(u.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: d }) => {
    const h = u.pos, p = d.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(h, g), x = Math.min(p, g + m.nodeSize), w = x - y;
      o += w, l.push(
        ...m.marks.map((E) => ({
          mark: E,
          from: y,
          to: x
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => Ht(u.mark.attrs, t, { strict: !1 })).reduce((u, d) => u + d.to - d.from, 0), c = l.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, d) => u + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function yt(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? V(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (u, d) => {
    if (u.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((u) => o ? o.name === u.node.type.name : !0).filter((u) => Ht(u.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((u, d) => u + d.to - d.from, 0) >= a;
}
function Yc(n, e, t = {}) {
  if (!e)
    return yt(n, null, t) || Wn(n, null, t);
  const r = sn(e, n.schema);
  return r === "node" ? yt(n, e, t) : r === "mark" ? Wn(n, e, t) : !1;
}
var Tu = (n, e) => {
  const { $from: t, $to: r, $anchor: i } = n.selection;
  if (e) {
    const s = nn((l) => l.type.name === e)(n.selection);
    if (!s)
      return !1;
    const o = n.doc.resolve(s.pos + 1);
    return i.pos + 1 === o.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || t.pos !== r.pos);
}, Ou = (n) => {
  const { $from: e, $to: t } = n.selection;
  return !(e.parentOffset > 0 || e.pos !== t.pos);
};
function ki(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function xi(n, e) {
  const { nodeExtensions: t } = gt(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = v(S(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function hr(n, {
  checkChildren: e = !0,
  ignoreWhitespace: t = !1
} = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) != null ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((s) => {
      i !== !1 && (hr(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Nu(n) {
  return n instanceof M;
}
function so(n) {
  return n instanceof T;
}
function fe(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Eu(n, e, t) {
  const i = n.state.doc.content.size, s = fe(e, 0, i), o = fe(t, 0, i), l = n.coordsAtPos(s), a = n.coordsAtPos(o, -1), c = Math.min(l.top, a.top), f = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), d = Math.max(l.right, a.right), h = d - u, p = f - c, y = {
    top: c,
    bottom: f,
    left: u,
    right: d,
    width: h,
    height: p,
    x: u,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function oo(n, e = null) {
  if (!e)
    return null;
  const t = O.atStart(n), r = O.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? T.create(n, fe(0, i, s), fe(n.content.size, i, s)) : T.create(n, fe(e, i, s), fe(e, i, s));
}
function lo({
  json: n,
  validMarks: e,
  validNodes: t,
  options: r,
  rewrittenContent: i = []
}) {
  return n.marks && Array.isArray(n.marks) && (n.marks = n.marks.filter((s) => {
    const o = typeof s == "string" ? s : s.type;
    return e.has(o) ? !0 : (i.push({
      original: JSON.parse(JSON.stringify(s)),
      unsupported: o
    }), !1);
  })), n.content && Array.isArray(n.content) && (n.content = n.content.map(
    (s) => lo({
      json: s,
      validMarks: e,
      validNodes: t,
      options: r,
      rewrittenContent: i
    }).json
  ).filter((s) => s != null)), n.type && !t.has(n.type) ? (i.push({
    original: JSON.parse(JSON.stringify(n)),
    unsupported: n.type
  }), n.content && Array.isArray(n.content) && r?.fallbackToParagraph !== !1 ? (n.type = "paragraph", {
    json: n,
    rewrittenContent: i
  }) : {
    json: null,
    rewrittenContent: i
  }) : { json: n, rewrittenContent: i };
}
function Du(n, e, t) {
  return lo({
    json: n,
    validNodes: new Set(Object.keys(e.nodes)),
    validMarks: new Set(Object.keys(e.marks)),
    options: t
  });
}
function Xc(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof z || i instanceof F))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, f) => {
    o === 0 && (o = f);
  }), n.setSelection(O.near(n.doc.resolve(o), t));
}
var St = class {
  constructor(n) {
    var e;
    this.find = n.find, this.handler = n.handler, this.undoable = (e = n.undoable) != null ? e : !0;
  }
}, Zc = (n, e) => {
  if (ur(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Nt(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let f = !1;
  const u = Gc(c) + s;
  return o.forEach((d) => {
    if (f)
      return;
    const h = Zc(u, d.find);
    if (!h)
      return;
    const p = a.state.tr, m = en({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: y, chain: x, can: w } = new tn({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: h,
      commands: y,
      chain: x,
      can: w
    }) === null || !p.steps.length || (d.undoable && p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), f = !0);
  }), f;
}
function Qc(n) {
  const { editor: e, rules: t } = n, r = new oe({
    state: {
      init() {
        return null;
      },
      apply(i, s, o) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: f } = a;
          typeof f == "string" ? f = f : f = rn(b.from(f), o.schema);
          const { from: u } = a, d = u + f.length;
          Nt({
            editor: e,
            from: u,
            to: d,
            text: f,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Nt({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Nt({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Nt({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function ef(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Et(n) {
  return ef(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ao(n, e) {
  const t = { ...n };
  return Et(n) && Et(e) && Object.keys(e).forEach((r) => {
    Et(e[r]) && Et(n[r]) ? t[r] = ao(n[r], e[r]) : t[r] = e[r];
  }), t;
}
var pr = class {
  constructor(n = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...n
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...v(
        S(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...v(
        S(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(n = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => ao(this.options, n)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(n = {}) {
    const e = new this.constructor({ ...this.config, ...n });
    return e.parent = this, this.child = e, e.name = "name" in n ? n.name : e.parent.name, e;
  }
}, tf = class co extends pr {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new co(t);
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => c?.type.name === t.name))
        return !1;
      const a = o.find((c) => c?.type.name === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
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
};
function nf(n) {
  return typeof n == "number";
}
var mr = class {
  constructor(n) {
    this.find = n.find, this.handler = n.handler;
  }
}, rf = (n, e, t) => {
  if (ur(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function sf(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: f } = new tn({
    editor: e,
    state: t
  }), u = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    var m, g, y, x, w;
    if ((g = (m = h.type) == null ? void 0 : m.spec) != null && g.code || !(h.isText || h.isTextblock || h.isInline))
      return;
    const E = (w = (x = (y = h.content) == null ? void 0 : y.size) != null ? x : h.nodeSize) != null ? w : 0, N = Math.max(r, p), R = Math.min(i, p + E);
    if (N >= R)
      return;
    const C = h.isText ? h.text || "" : h.textBetween(N - p, R - p, void 0, "￼");
    rf(C, s.find, o).forEach((I) => {
      if (I.index === void 0)
        return;
      const wt = N + I.index + 1, Oo = wt + I[0].length, No = {
        from: t.tr.mapping.map(wt),
        to: t.tr.mapping.map(Oo)
      }, Eo = s.handler({
        state: t,
        range: No,
        match: I,
        commands: a,
        chain: c,
        can: f,
        pasteEvent: o,
        dropEvent: l
      });
      u.push(Eo);
    });
  }), u.every((h) => h !== null);
}
var Dt = null, of = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) == null || e.setData("text/html", n), t;
};
function lf(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({
    state: f,
    from: u,
    to: d,
    rule: h,
    pasteEvt: p
  }) => {
    const m = f.tr, g = en({
      state: f,
      transaction: m
    });
    if (!(!sf({
      editor: e,
      state: g,
      from: Math.max(u - 1, 0),
      to: d.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((f) => new oe({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const d = (p) => {
        var m;
        r = (m = u.dom.parentElement) != null && m.contains(p.target) ? u.dom.parentElement : null, r && (Dt = e);
      }, h = () => {
        Dt && (Dt = null);
      };
      return window.addEventListener("dragstart", d), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", d), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, d) => {
          if (s = r === u.dom.parentElement, l = d, !s) {
            const h = Dt;
            h?.isEditable && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (u, d) => {
          var h;
          const p = (h = d.clipboardData) == null ? void 0 : h.getData("text/html");
          return o = d, i = !!p?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (u, d, h) => {
      const p = u[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !s, y = p.getMeta("applyPasteRules"), x = !!y;
      if (!m && !g && !x)
        return;
      if (x) {
        let { text: N } = y;
        typeof N == "string" ? N = N : N = rn(b.from(N), h.schema);
        const { from: R } = y, C = R + N.length, D = of(N);
        return a({
          rule: f,
          state: h,
          from: R,
          to: { b: C },
          pasteEvt: D
        });
      }
      const w = d.doc.content.findDiffStart(h.doc.content), E = d.doc.content.findDiffEnd(h.doc.content);
      if (!(!nf(w) || !E || w === E.b))
        return a({
          rule: f,
          state: h,
          from: w,
          to: E,
          pasteEvt: o
        });
    }
  }));
}
var on = class {
  constructor(n, e) {
    this.splittableMarks = [], this.editor = e, this.extensions = ar(n), this.schema = Qs(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((n, e) => {
      const t = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Mn(e.name, this.schema)
      }, r = S(e, "addCommands", t);
      return r ? {
        ...n,
        ...r()
      } : n;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: n } = this;
    return lr([...this.extensions].reverse()).flatMap((r) => {
      const i = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: n,
        type: Mn(r.name, this.schema)
      }, s = [], o = S(
        r,
        "addKeyboardShortcuts",
        i
      );
      let l = {};
      if (r.type === "mark" && S(r, "exitable", i) && (l.ArrowRight = () => tf.handleExit({ editor: n, mark: r })), o) {
        const d = Object.fromEntries(
          Object.entries(o()).map(([h, p]) => [h, () => p({ editor: n })])
        );
        l = { ...l, ...d };
      }
      const a = dc(l);
      s.push(a);
      const c = S(r, "addInputRules", i);
      if (ki(r, n.options.enableInputRules) && c) {
        const d = c();
        if (d && d.length) {
          const h = Qc({
            editor: n,
            rules: d
          }), p = Array.isArray(h) ? h : [h];
          s.push(...p);
        }
      }
      const f = S(r, "addPasteRules", i);
      if (ki(r, n.options.enablePasteRules) && f) {
        const d = f();
        if (d && d.length) {
          const h = lf({ editor: n, rules: d });
          s.push(...h);
        }
      }
      const u = S(
        r,
        "addProseMirrorPlugins",
        i
      );
      if (u) {
        const d = u();
        s.push(...d);
      }
      return s;
    });
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Zs(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: n } = this, { nodeExtensions: e } = gt(this.extensions);
    return Object.fromEntries(
      e.filter((t) => !!S(t, "addNodeView")).map((t) => {
        const r = this.attributes.filter((l) => l.type === t.name), i = {
          name: t.name,
          options: t.options,
          storage: this.editor.extensionStorage[t.name],
          editor: n,
          type: V(t.name, this.schema)
        }, s = S(t, "addNodeView", i);
        if (!s)
          return [];
        const o = (l, a, c, f, u) => {
          const d = Kt(l, r);
          return s()({
            // pass-through
            node: l,
            view: a,
            getPos: c,
            decorations: f,
            innerDecorations: u,
            // tiptap-specific
            editor: n,
            extension: t,
            HTMLAttributes: d
          });
        };
        return [t.name, o];
      })
    );
  }
  get markViews() {
    const { editor: n } = this, { markExtensions: e } = gt(this.extensions);
    return Object.fromEntries(
      e.filter((t) => !!S(t, "addMarkView")).map((t) => {
        const r = this.attributes.filter((l) => l.type === t.name), i = {
          name: t.name,
          options: t.options,
          storage: this.editor.extensionStorage[t.name],
          editor: n,
          type: pe(t.name, this.schema)
        }, s = S(t, "addMarkView", i);
        if (!s)
          return [];
        const o = (l, a, c) => {
          const f = Kt(l, r);
          return s()({
            // pass-through
            mark: l,
            view: a,
            inline: c,
            // tiptap-specific
            editor: n,
            extension: t,
            HTMLAttributes: f,
            updateAttributes: (u) => {
              Co(l, n, u);
            }
          });
        };
        return [t.name, o];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const n = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      n.map((e) => [e.name, e.storage])
    ), n.forEach((e) => {
      var t;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Mn(e.name, this.schema)
      };
      e.type === "mark" && ((t = v(S(e, "keepOnSplit", r))) == null || t) && this.splittableMarks.push(e.name);
      const i = S(e, "onBeforeCreate", r), s = S(e, "onCreate", r), o = S(e, "onUpdate", r), l = S(
        e,
        "onSelectionUpdate",
        r
      ), a = S(e, "onTransaction", r), c = S(e, "onFocus", r), f = S(e, "onBlur", r), u = S(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), f && this.editor.on("blur", f), u && this.editor.on("destroy", u);
    });
  }
};
on.resolve = ar;
on.sort = lr;
on.flatten = or;
var af = {};
Gs(af, {
  ClipboardTextSerializer: () => uo,
  Commands: () => mo,
  Delete: () => go,
  Drop: () => yo,
  Editable: () => bo,
  FocusEvents: () => xo,
  Keymap: () => So,
  Paste: () => Mo,
  Tabindex: () => wo,
  focusEventsPluginKey: () => ko
});
var me = class fo extends pr {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new fo(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, uo = me.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new $e("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((f) => f.$from.pos)), l = Math.max(...s.map((f) => f.$to.pos)), a = fr(t);
            return eo(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), ho = {};
Gs(ho, {
  blur: () => cf,
  clearContent: () => ff,
  clearNodes: () => uf,
  command: () => df,
  createParagraphNear: () => hf,
  cut: () => pf,
  deleteCurrentNode: () => mf,
  deleteNode: () => gf,
  deleteRange: () => yf,
  deleteSelection: () => bf,
  enter: () => kf,
  exitCode: () => xf,
  extendMarkRange: () => Sf,
  first: () => Mf,
  focus: () => wf,
  forEach: () => Cf,
  insertContent: () => Tf,
  insertContentAt: () => Nf,
  joinBackward: () => vf,
  joinDown: () => Df,
  joinForward: () => Af,
  joinItemBackward: () => Rf,
  joinItemForward: () => If,
  joinTextblockBackward: () => Pf,
  joinTextblockForward: () => Bf,
  joinUp: () => Ef,
  keyboardShortcut: () => Ff,
  lift: () => Vf,
  liftEmptyBlock: () => Lf,
  liftListItem: () => $f,
  newlineInCode: () => Wf,
  resetAttributes: () => Jf,
  scrollIntoView: () => qf,
  selectAll: () => jf,
  selectNodeBackward: () => Kf,
  selectNodeForward: () => Hf,
  selectParentNode: () => _f,
  selectTextblockEnd: () => Uf,
  selectTextblockStart: () => Gf,
  setContent: () => Yf,
  setMark: () => Zf,
  setMeta: () => Qf,
  setNode: () => eu,
  setNodeSelection: () => tu,
  setTextSelection: () => nu,
  sinkListItem: () => ru,
  splitBlock: () => iu,
  splitListItem: () => su,
  toggleList: () => ou,
  toggleMark: () => lu,
  toggleNode: () => au,
  toggleWrap: () => cu,
  undoInputRule: () => fu,
  unsetAllMarks: () => uu,
  unsetMark: () => du,
  updateAttributes: () => hu,
  wrapIn: () => pu,
  wrapInList: () => mu
});
var cf = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) == null || t.removeAllRanges());
}), !0), ff = (n = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: n }), uf = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: f } = e, u = c.resolve(f.map(a)), d = c.resolve(f.map(a + l.nodeSize)), h = u.blockRange(d);
      if (!h)
        return;
      const p = Qe(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, df = (n) => (e) => n(e), hf = () => ({ state: n, dispatch: e }) => Ks(n, e), pf = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new T(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, mf = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, gf = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = V(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, yf = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, bf = () => ({ state: n, dispatch: e }) => tr(n, e), kf = () => ({ commands: n }) => n.keyboardShortcut("Enter"), xf = () => ({ state: n, dispatch: e }) => kc(n, e), Sf = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = pe(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: f } = l;
  if (i) {
    const u = dr(a, s, e);
    if (u && u.from <= c && u.to >= f) {
      const d = T.create(o, u.from, u.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Mf = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function gr() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Mt() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var wf = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Mt() || gr()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e?.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !so(t.state.selection))
    return o(), !0;
  const l = oo(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, Cf = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Tf = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Of = (n) => !("type" in n), Nf = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
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
    const a = (g) => {
      s.emit("contentError", {
        editor: s,
        error: g,
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
        mt(e, s.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = mt(e, s.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) != null ? o : s.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: f, to: u } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, d = !0, h = !0;
    if ((Of(l) ? l : [l]).forEach((g) => {
      g.check(), d = d ? g.isText && g.marks.length === 0 : !1, h = h ? g.isBlock : !1;
    }), f === u && h) {
      const { parent: g } = r.doc.resolve(f);
      g.isTextblock && !g.type.spec.code && !g.childCount && (f -= 1, u += 1);
    }
    let m;
    if (d) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof b) {
        let g = "";
        e.forEach((y) => {
          y.text && (g += y.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, f, u);
    } else {
      m = l;
      const g = r.doc.resolve(f), y = g.node(), x = g.parentOffset === 0, w = y.isText || y.isTextblock, E = y.content.size > 0;
      x && w && E && (f = Math.max(0, f - 1)), r.replaceWith(f, u, m);
    }
    t.updateSelection && Xc(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: f, text: m }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: f, text: m });
  }
  return !0;
}, Ef = () => ({ state: n, dispatch: e }) => gc(n, e), Df = () => ({ state: n, dispatch: e }) => yc(n, e), vf = () => ({ state: n, dispatch: e }) => Vs(n, e), Af = () => ({ state: n, dispatch: e }) => Js(n, e), Rf = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Ut(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, If = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Ut(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Pf = () => ({ state: n, dispatch: e }) => pc(n, e), Bf = () => ({ state: n, dispatch: e }) => mc(n, e);
function po() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function zf(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Mt() || po() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
var Ff = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = zf(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
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
    const f = c.map(r.mapping);
    f && i && r.maybeStep(f);
  }), !0;
}, Vf = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = V(n, t.schema);
  return yt(t, i, e) ? bc(t, r) : !1;
}, Lf = () => ({ state: n, dispatch: e }) => Hs(n, e), $f = (n) => ({ state: e, dispatch: t }) => {
  const r = V(n, e.schema);
  return vc(r)(e, t);
}, Wf = () => ({ state: n, dispatch: e }) => js(n, e);
function Si(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
var Jf = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = sn(
    typeof n == "string" ? n : n.name,
    r.schema
  );
  return l ? (l === "node" && (s = V(n, r.schema)), l === "mark" && (o = pe(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, f) => {
      s && s === c.type && t.setNodeMarkup(f, void 0, Si(c.attrs, e)), o && c.marks.length && c.marks.forEach((u) => {
        o === u.type && t.addMark(f, f + c.nodeSize, o.create(Si(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, qf = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), jf = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new X(n.doc);
    n.setSelection(t);
  }
  return !0;
}, Kf = () => ({ state: n, dispatch: e }) => $s(n, e), Hf = () => ({ state: n, dispatch: e }) => qs(n, e), _f = () => ({ state: n, dispatch: e }) => Mc(n, e), Uf = () => ({ state: n, dispatch: e }) => Tc(n, e), Gf = () => ({ state: n, dispatch: e }) => Cc(n, e), Yf = (n, { errorOnInvalidContent: e, emitUpdate: t = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  const { doc: a } = s;
  if (r.preserveWhitespace !== "full") {
    const c = $n(n, i.schema, r, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return o && s.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !t), !0;
  }
  return o && s.setMeta("preventUpdate", !t), l.insertContentAt({ from: 0, to: a.content.size }, n, {
    parseOptions: r,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function Xf(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (so(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) != null ? r : s.marks();
    return s.parent.type.allowsMarkType(t) && (!!t.isInSet(l) || !l.some((c) => c.type.excludes(t)));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (f, u, d) => {
      if (c)
        return !1;
      if (f.isInline) {
        const h = !d || d.type.allowsMarkType(t), p = !!t.isInSet(f.marks) || !f.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
var Zf = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = pe(n, r.schema);
  if (i)
    if (o) {
      const c = no(r, a);
      t.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const f = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(f, u, (d, h) => {
          const p = Math.max(h, f), m = Math.min(h + d.nodeSize, u);
          d.marks.find((y) => y.type === a) ? d.marks.forEach((y) => {
            a === y.type && t.addMark(
              p,
              m,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return Xf(r, t, a);
}, Qf = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), eu = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = V(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => mi(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => mi(s, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, tu = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = fe(n, 0, r.content.size), s = M.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, nu = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = T.atStart(r).from, l = T.atEnd(r).to, a = fe(i, o, l), c = fe(s, o, l), f = T.create(r, a, c);
    e.setSelection(f);
  }
  return !0;
}, ru = (n) => ({ state: e, dispatch: t }) => {
  const r = V(n, e.schema);
  return Ic(r)(e, t);
};
function Mi(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e?.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
var iu = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, f = Rt(c, l.node().type.name, l.node().attrs);
  if (s instanceof M && s.node.isBlock)
    return !l.parentOffset || !de(o, l.pos) ? !1 : (r && (n && Mi(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, d = l.depth === 0 ? void 0 : Fc(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = u && d ? [
    {
      type: d,
      attrs: f
    }
  ] : void 0, p = de(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && de(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (p = !0, h = d ? [
    {
      type: d,
      attrs: f
    }
  ] : void 0), r) {
    if (p && (s instanceof T && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), d && !u && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && Mi(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, su = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: s }) => {
  var o;
  const l = V(n, r.schema), { $from: a, $to: c } = r.selection, f = r.selection.node;
  if (f && f.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const d = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = b.empty;
      const x = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let D = a.depth - x; D >= a.depth - 3; D -= 1)
        y = b.from(a.node(D).copy(y));
      const w = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), E = {
        ...Rt(d, a.node().type.name, a.node().attrs),
        ...e
      }, N = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(E)) || void 0;
      y = y.append(b.from(l.createAndFill(null, N) || void 0));
      const R = a.before(a.depth - (x - 1));
      t.replace(R, a.after(-w), new k(y, 4 - x, 0));
      let C = -1;
      t.doc.nodesBetween(R, t.doc.content.size, (D, I) => {
        if (C > -1)
          return !1;
        D.isTextblock && D.content.size === 0 && (C = I + 1);
      }), C > -1 && t.setSelection(T.near(t.doc.resolve(C))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, p = {
    ...Rt(d, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Rt(d, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = h ? [
    { type: l, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!de(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: x } = r, { splittableMarks: w } = s.extensionManager, E = x || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !E || !i)
      return !0;
    const N = E.filter((R) => w.includes(R.type.name));
    t.ensureMarks(N);
  }
  return !0;
}, wn = (n, e) => {
  const t = nn((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === i?.type && Oe(n.doc, t.pos) && n.join(t.pos), !0;
}, Cn = (n, e) => {
  const t = nn((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === i?.type && Oe(n.doc, r) && n.join(r), !0;
}, ou = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: f }) => {
  const { extensions: u, splittableMarks: d } = i.extensionManager, h = V(n, o.schema), p = V(e, o.schema), { selection: m, storedMarks: g } = o, { $from: y, $to: x } = m, w = y.blockRange(x), E = g || m.$to.parentOffset && m.$from.marks();
  if (!w)
    return !1;
  const N = nn((R) => xi(R.type.name, u))(m);
  if (w.depth >= 1 && N && w.depth - N.depth <= 1) {
    if (N.node.type === h)
      return c.liftListItem(p);
    if (xi(N.node.type.name, u) && h.validContent(N.node.content) && l)
      return a().command(() => (s.setNodeMarkup(N.pos, h), !0)).command(() => wn(s, h)).command(() => Cn(s, h)).run();
  }
  return !t || !E || !l ? a().command(() => f().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => wn(s, h)).command(() => Cn(s, h)).run() : a().command(() => {
    const R = f().wrapInList(h, r), C = E.filter((D) => d.includes(D.type.name));
    return s.ensureMarks(C), R ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => wn(s, h)).command(() => Cn(s, h)).run();
}, lu = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = pe(n, r.schema);
  return Wn(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, au = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = V(n, r.schema), o = V(e, r.schema), l = yt(r, s, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t });
}, cu = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = V(n, t.schema);
  return yt(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, fu = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, uu = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, du = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = pe(n, r.schema), { $from: c, empty: f, ranges: u } = l;
  if (!i)
    return !0;
  if (f && o) {
    let { from: d, to: h } = l;
    const p = (s = c.marks().find((g) => g.type === a)) == null ? void 0 : s.attrs, m = dr(c, a, p);
    m && (d = m.from, h = m.to), t.removeMark(d, h, a);
  } else
    u.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, hu = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = sn(
    typeof n == "string" ? n : n.name,
    r.schema
  );
  return l ? (l === "node" && (s = V(n, r.schema)), l === "mark" && (o = pe(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, f = a.$to.pos;
    let u, d, h, p;
    t.selection.empty ? r.doc.nodesBetween(c, f, (m, g) => {
      s && s === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, f), u = g, d = m);
    }) : r.doc.nodesBetween(c, f, (m, g) => {
      g < c && s && s === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, f), u = g, d = m), g >= c && g <= f && (s && s === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), o && m.marks.length && m.marks.forEach((y) => {
        if (o === y.type) {
          const x = Math.max(g, c), w = Math.min(g + m.nodeSize, f);
          t.addMark(
            x,
            w,
            o.create({
              ...y.attrs,
              ...e
            })
          );
        }
      }));
    }), d && (u !== void 0 && t.setNodeMarkup(u, void 0, {
      ...d.attrs,
      ...e
    }), o && d.marks.length && d.marks.forEach((m) => {
      o === m.type && t.addMark(
        h,
        p,
        o.create({
          ...m.attrs,
          ...e
        })
      );
    }));
  }), !0) : !1;
}, pu = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = V(n, t.schema);
  return Oc(i, e)(t, r);
}, mu = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = V(n, t.schema);
  return Nc(i, e)(t, r);
}, mo = me.create({
  name: "commands",
  addCommands() {
    return {
      ...ho
    };
  }
}), go = me.create({
  name: "delete",
  onUpdate({ transaction: n, appendedTransactions: e }) {
    var t, r, i;
    const s = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, n)) != null ? c : n.getMeta("y-sync$"))
        return;
      const f = zc(n.before, [n, ...e]);
      _c(f).forEach((h) => {
        f.mapping.mapResult(h.oldRange.from).deletedAfter && f.mapping.mapResult(h.oldRange.to).deletedBefore && f.before.nodesBetween(h.oldRange.from, h.oldRange.to, (p, m) => {
          const g = m + p.nodeSize - 2, y = h.oldRange.from <= m && g <= h.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: m,
            to: g,
            newFrom: f.mapping.map(m),
            newTo: f.mapping.map(g),
            deletedRange: h.oldRange,
            newRange: h.newRange,
            partial: !y,
            editor: this.editor,
            transaction: n,
            combinedTransform: f
          });
        });
      });
      const d = f.mapping;
      f.steps.forEach((h, p) => {
        var m, g;
        if (h instanceof ne) {
          const y = d.slice(p).map(h.from, -1), x = d.slice(p).map(h.to), w = d.invert().map(y, -1), E = d.invert().map(x), N = (m = f.doc.nodeAt(y - 1)) == null ? void 0 : m.marks.some((C) => C.eq(h.mark)), R = (g = f.doc.nodeAt(x)) == null ? void 0 : g.marks.some((C) => C.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: w,
              to: E
            },
            newRange: {
              from: y,
              to: x
            },
            partial: !!(R || N),
            editor: this.editor,
            transaction: n,
            combinedTransform: f
          });
        }
      });
    };
    (i = (r = (t = this.editor.options.coreExtensionOptions) == null ? void 0 : t.delete) == null ? void 0 : r.async) == null || i ? setTimeout(s, 0) : s();
  }
}), yo = me.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new $e("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), bo = me.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new $e("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), ko = new $e("focusEvents"), xo = me.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new oe({
        key: ko,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), So = me.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: f, $anchor: u } = a, { pos: d, parent: h } = u, p = u.parent.isTextblock && d > 0 ? l.doc.resolve(d - 1) : u, m = p.parent.type.spec.isolating, g = u.pos - u.parentOffset, y = m && p.parent.childCount === 1 ? g === u.pos : O.atStart(c).from === d;
        return !f || !h.type.isTextblock || h.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Mt() || po() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new oe({
        key: new $e("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, a = O.atStart(e.doc).from, c = O.atEnd(e.doc).to;
          if (s || !(o === a && l === c) || !hr(t.doc))
            return;
          const d = t.tr, h = en({
            state: t,
            transaction: d
          }), { commands: p } = new tn({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), Mo = me.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new $e("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
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
}), wo = me.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new $e("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), gu = class Ke {
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Ke(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Ke(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Ke(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = t.isAtom && !t.isText, o = this.pos + r + (s ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!i && l.depth <= this.depth)
        return;
      const a = new Ke(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new Ke(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((a) => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}, yu = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function bu(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
var vu = class extends Bc {
  constructor(e = {}) {
    super(), this.css = null, this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: i }) => {
        throw i;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: i, slice: s, moved: o }) => this.options.onDrop(i, s, o)), this.on("paste", ({ event: i, slice: s }) => this.options.onPaste(i, s)), this.on("delete", this.options.onDelete);
    const t = this.createDoc(), r = oo(t, this.options.autofocus);
    this.editorState = He.create({
      doc: t,
      schema: this.schema,
      selection: r || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(e) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const e = this.editorView.dom;
      e?.editor && delete e.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (e) {
        console.warn("Failed to remove CSS element:", e);
      }
    this.css = null, this.emit("unmount", { editor: this });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = bu(yu, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (e) => {
          this.editorState = e;
        },
        dispatch: (e) => {
          this.dispatchTransaction(e);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (e, t) => {
          if (t === "state")
            return this.editorState;
          if (t in e)
            return Reflect.get(e, t);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = Xs(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((s) => {
      const o = typeof s == "string" ? `${s}$` : s.key;
      r = r.filter((l) => !l.key.startsWith(o));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      bo,
      uo.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) == null ? void 0 : e.clipboardTextSerializer) == null ? void 0 : t.blockSeparator
      }),
      mo,
      xo,
      So,
      wo,
      yo,
      Mo,
      go
    ].filter((s) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[s.name] !== !1 : !0) : [], ...this.options.extensions].filter((s) => ["extension", "node", "mark"].includes(s?.type));
    this.extensionManager = new on(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new tn({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let e;
    try {
      e = $n(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (t) {
      if (!(t instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(t.message))
        throw t;
      this.emit("contentError", {
        editor: this,
        error: t,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((r) => r.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = $n(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return e;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(e) {
    var t;
    this.editorView = new zs(e, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(t = this.options.editorProps) == null ? void 0 : t.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.prependClass(), this.injectCSS();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((f) => {
        var u;
        return (u = this.capturedTransaction) == null ? void 0 : u.step(f);
      });
      return;
    }
    const { state: t, transactions: r } = this.state.applyTransaction(e), i = !this.state.selection.eq(t.selection), s = r.includes(e), o = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), !s)
      return;
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    }), i && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const l = r.findLast((f) => f.getMeta("focus") || f.getMeta("blur")), a = l?.getMeta("focus"), c = l?.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), c && this.emit("blur", {
      editor: this,
      event: c.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), !(e.getMeta("preventUpdate") || !r.some((f) => f.docChanged) || o.doc.eq(t.doc)) && this.emit("update", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return jc(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return Yc(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return rn(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return to(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...fr(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return hr(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.unmount(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e, t;
    return (t = (e = this.editorView) == null ? void 0 : e.isDestroyed) != null ? t : !0;
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new gu(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Ru(n) {
  return new St({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = v(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), f = c + o.length;
        if (io(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        f < t.to && s.delete(f, t.to), c > t.from && s.delete(t.from + a, c);
        const d = t.from + a + o.length;
        s.addMark(t.from + a, d, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    },
    undoable: n.undoable
  });
}
function Iu(n) {
  return new St({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = v(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let f = o + c;
        f > l ? f = l : l = f + r[1].length;
        const u = r[0][r[0].length - 1];
        s.insertText(u, o + r[0].length - 1), s.replaceWith(f, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? o : o - 1;
        s.insert(c, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      }
      s.scrollIntoView();
    },
    undoable: n.undoable
  });
}
function Pu(n) {
  return new St({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = v(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    },
    undoable: n.undoable
  });
}
function Bu(n) {
  return new St({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let i = n.replace, s = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        i += r[0].slice(l + r[1].length), s += l;
        const a = s - o;
        a > 0 && (i = r[0].slice(l - a, l) + i, s = o);
      }
      e.tr.insertText(i, s, o);
    },
    undoable: n.undoable
  });
}
function zu(n) {
  return new St({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = v(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && jn(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: u, storedMarks: d } = e, { splittableMarks: h } = n.editor.extensionManager, p = d || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const u = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, s).run();
      }
      const f = o.doc.resolve(t.from - 1).nodeBefore;
      f && f.type === n.type && Oe(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, f)) && o.join(t.from - 1);
    },
    undoable: n.undoable
  });
}
function Fu(n) {
  return n.children;
}
var Vu = (n, e) => {
  if (n === "slot")
    return 0;
  if (n instanceof Function)
    return n(e);
  const { children: t, ...r } = e ?? {};
  if (n === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [n, r, t];
};
function Lu(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof M) {
    const s = r.index();
    return r.parent.canReplaceWith(s, s + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const s = r.index(i);
    if (r.node(i).contentMatchAt(s).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
function $u(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Wu(n) {
  return typeof n == "string";
}
function Co(n, e, t = {}) {
  const { state: r } = e, { doc: i, tr: s } = r, o = n;
  i.descendants((l, a) => {
    const c = s.mapping.map(a), f = s.mapping.map(a) + l.nodeSize;
    let u = null;
    if (l.marks.forEach((h) => {
      if (h !== o)
        return !1;
      u = h;
    }), !u)
      return;
    let d = !1;
    if (Object.keys(t).forEach((h) => {
      t[h] !== u.attrs[h] && (d = !0);
    }), d) {
      const h = n.type.create({
        ...n.attrs,
        ...t
      });
      s.removeMark(c, f, n.type), s.addMark(c, f, h);
    }
  }), s.docChanged && e.view.dispatch(s);
}
var Ju = class {
  constructor(n, e, t) {
    this.component = n, this.editor = e.editor, this.options = { ...t }, this.mark = e.mark, this.HTMLAttributes = e.HTMLAttributes;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  /**
   * Update the attributes of the mark in the document.
   * @param attrs The attributes to update.
   */
  updateAttributes(n, e) {
    Co(e || this.mark, this.editor, n);
  }
  ignoreMutation(n) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: n }) : n.type === "selection" || this.dom.contains(n.target) && n.type === "childList" && (Mt() || gr()) && this.editor.isFocused && [...Array.from(n.addedNodes), ...Array.from(n.removedNodes)].every((t) => t.isContentEditable) ? !1 : this.contentDOM === n.target && n.type === "attributes" ? !0 : !this.contentDOM.contains(n.target);
  }
}, qu = class To extends pr {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new To(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, ju = class {
  constructor(n, e, t) {
    this.isDragging = !1, this.component = n, this.editor = e.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...t
    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = e.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(n) {
    var e, t, r, i, s, o, l;
    const { view: a } = this.editor, c = n.target, f = c.nodeType === 3 ? (e = c.parentElement) == null ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
    if (!this.dom || (t = this.contentDOM) != null && t.contains(c) || !f)
      return;
    let u = 0, d = 0;
    if (this.dom !== f) {
      const x = this.dom.getBoundingClientRect(), w = f.getBoundingClientRect(), E = (i = n.offsetX) != null ? i : (r = n.nativeEvent) == null ? void 0 : r.offsetX, N = (o = n.offsetY) != null ? o : (s = n.nativeEvent) == null ? void 0 : s.offsetY;
      u = w.x - x.x + E, d = w.y - x.y + N;
    }
    const h = this.dom.cloneNode(!0);
    try {
      const x = this.dom.getBoundingClientRect();
      h.style.width = `${Math.round(x.width)}px`, h.style.height = `${Math.round(x.height)}px`, h.style.boxSizing = "border-box", h.style.pointerEvents = "none";
    } catch {
    }
    let p = null;
    try {
      p = document.createElement("div"), p.style.position = "absolute", p.style.top = "-9999px", p.style.left = "-9999px", p.style.pointerEvents = "none", p.appendChild(h), document.body.appendChild(p), (l = n.dataTransfer) == null || l.setDragImage(h, u, d);
    } finally {
      p && setTimeout(() => {
        try {
          p?.remove();
        } catch {
        }
      }, 0);
    }
    const m = this.getPos();
    if (typeof m != "number")
      return;
    const g = M.create(a.state.doc, m), y = a.state.tr.setSelection(g);
    a.dispatch(y);
  }
  stopEvent(n) {
    var e;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: n });
    const t = n.target;
    if (!(this.dom.contains(t) && !((e = this.contentDOM) != null && e.contains(t))))
      return !1;
    const i = n.type.startsWith("drag"), s = n.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(t.tagName) || t.isContentEditable) && !s && !i)
      return !0;
    const { isEditable: l } = this.editor, { isDragging: a } = this, c = !!this.node.type.spec.draggable, f = M.isSelectable(this.node), u = n.type === "copy", d = n.type === "paste", h = n.type === "cut", p = n.type === "mousedown";
    if (!c && f && i && n.target === this.dom && n.preventDefault(), c && i && !a && n.target === this.dom)
      return n.preventDefault(), !1;
    if (c && l && !a && p) {
      const m = t.closest("[data-drag-handle]");
      m && (this.dom === m || this.dom.contains(m)) && (this.isDragging = !0, document.addEventListener(
        "dragend",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "drop",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "mouseup",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ));
    }
    return !(a || s || u || d || h || p && f);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(n) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: n }) : this.node.isLeaf || this.node.isAtom ? !0 : n.type === "selection" || this.dom.contains(n.target) && n.type === "childList" && (Mt() || gr()) && this.editor.isFocused && [...Array.from(n.addedNodes), ...Array.from(n.removedNodes)].every((t) => t.isContentEditable) ? !1 : this.contentDOM === n.target && n.type === "attributes" ? !0 : !this.contentDOM.contains(n.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(n) {
    this.editor.commands.command(({ tr: e }) => {
      const t = this.getPos();
      return typeof t != "number" ? !1 : (e.setNodeMarkup(t, void 0, {
        ...this.node.attrs,
        ...n
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const n = this.getPos();
    if (typeof n != "number")
      return;
    const e = n + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: n, to: e });
  }
};
function Ku(n) {
  return new mr({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = v(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const f = a.search(/\S/), u = t.from + a.indexOf(l), d = u + l.length;
        if (io(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > u).length)
          return null;
        d < t.to && o.delete(d, t.to), u > t.from && o.delete(t.from + f, u), c = t.from + f + l.length, o.addMark(t.from + f, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Hu(n) {
  return new mr({
    find: n.find,
    handler({ match: e, chain: t, range: r, pasteEvent: i }) {
      const s = v(n.getAttributes, void 0, e, i), o = v(n.getContent, void 0, s);
      if (s === !1 || s === null)
        return null;
      const l = { type: n.type.name, attrs: s };
      o && (l.content = o), e.input && t().deleteRange(r).insertContentAt(r.from, l);
    }
  });
}
function _u(n) {
  return new mr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let i = n.replace, s = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        i += r[0].slice(l + r[1].length), s += l;
        const a = s - o;
        a > 0 && (i = r[0].slice(l - a, l) + i, s = o);
      }
      e.tr.insertText(i, s, o);
    }
  });
}
var Uu = class {
  constructor(n) {
    this.transaction = n, this.currentStep = this.transaction.steps.length;
  }
  map(n) {
    let e = !1;
    return {
      position: this.transaction.steps.slice(this.currentStep).reduce((r, i) => {
        const s = i.getMap().mapResult(r);
        return s.deleted && (e = !0), s.pos;
      }, n),
      deleted: e
    };
  }
};
export {
  Vc as $,
  X as A,
  v as B,
  tn as C,
  B as D,
  me as E,
  b as F,
  zc as G,
  en as H,
  St as I,
  $n as J,
  Vu as K,
  mt as L,
  tf as M,
  M as N,
  bu as O,
  oe as P,
  Fc as Q,
  Si as R,
  k as S,
  T,
  it as U,
  $u as V,
  af as W,
  ku as X,
  xu as Y,
  Jc as Z,
  nn as _,
  $e as a,
  or as a0,
  Wc as a1,
  Su as a2,
  Mu as a3,
  wu as a4,
  jc as a5,
  Zs as a6,
  _c as a7,
  Uc as a8,
  S as a9,
  po as aA,
  Wn as aB,
  yt as aC,
  hr as aD,
  nf as aE,
  Et as aF,
  ur as aG,
  Wu as aH,
  Mt as aI,
  ao as aJ,
  fe as aK,
  Hu as aL,
  Ht as aM,
  lf as aN,
  Kc as aO,
  ar as aP,
  oo as aQ,
  Du as aR,
  Xc as aS,
  lr as aT,
  gt as aU,
  _u as aV,
  Co as aW,
  zu as aX,
  pl as aY,
  Vt as aZ,
  rn as aa,
  no as ab,
  dr as ac,
  pe as ad,
  io as ae,
  Cu as af,
  qc as ag,
  V as ah,
  Kt as ai,
  cr as aj,
  Qs as ak,
  Mn as al,
  sn as am,
  Rt as an,
  eo as ao,
  Gc as ap,
  gi as aq,
  Qc as ar,
  Yc as as,
  gr as at,
  Tu as au,
  Ou as av,
  Lc as aw,
  ki as ax,
  Xs as ay,
  xi as az,
  O as b,
  re as c,
  zt as d,
  Sl as e,
  Ru as f,
  $c as g,
  qu as h,
  Pu as i,
  Lu as j,
  Nu as k,
  vu as l,
  Ku as m,
  Iu as n,
  hc as o,
  so as p,
  Eu as q,
  to as r,
  fr as s,
  Bu as t,
  Fu as u,
  Ju as v,
  gu as w,
  ju as x,
  mr as y,
  Uu as z
};
