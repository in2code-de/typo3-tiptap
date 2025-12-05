import "./configuration-C_XBPA12.js";
let qa = class extends Event {
  constructor(r, t, e, n) {
    super("context-request", { bubbles: !0, composed: !0 }), this.context = r, this.contextTarget = t, this.callback = e, this.subscribe = n ?? !1;
  }
}, is = class {
  constructor(r, t, e, n) {
    if (this.subscribe = !1, this.provided = !1, this.value = void 0, this.t = (o, i) => {
      this.unsubscribe && (this.unsubscribe !== i && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = o, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(o, i)), this.unsubscribe = i;
    }, this.host = r, t.context !== void 0) {
      const o = t;
      this.context = o.context, this.callback = o.callback, this.subscribe = o.subscribe ?? !1;
    } else this.context = t, this.callback = e, this.subscribe = n ?? !1;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new qa(this.context, this.host, this.t, this.subscribe));
  }
}, Yh = class {
  get value() {
    return this.o;
  }
  set value(r) {
    this.setValue(r);
  }
  setValue(r, t = !1) {
    const e = t || !Object.is(r, this.o);
    this.o = r, e && this.updateObservers();
  }
  constructor(r) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [t, { disposer: e }] of this.subscriptions) t(this.o, e);
    }, r !== void 0 && (this.value = r);
  }
  addCallback(r, t, e) {
    if (!e) return void r(this.value);
    this.subscriptions.has(r) || this.subscriptions.set(r, { disposer: () => {
      this.subscriptions.delete(r);
    }, consumerHost: t });
    const { disposer: n } = this.subscriptions.get(r);
    r(this.value, n);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
}, Xh = class extends Event {
  constructor(r, t) {
    super("context-provider", { bubbles: !0, composed: !0 }), this.context = r, this.contextTarget = t;
  }
}, ss = class extends Yh {
  constructor(r, t, e) {
    super(t.context !== void 0 ? t.initialValue : e), this.onContextRequest = (n) => {
      if (n.context !== this.context) return;
      const o = n.contextTarget ?? n.composedPath()[0];
      o !== this.host && (n.stopPropagation(), this.addCallback(n.callback, o, n.subscribe));
    }, this.onProviderRequest = (n) => {
      if (n.context !== this.context || (n.contextTarget ?? n.composedPath()[0]) === this.host) return;
      const o = /* @__PURE__ */ new Set();
      for (const [i, { consumerHost: s }] of this.subscriptions) o.has(i) || (o.add(i), s.dispatchEvent(new qa(this.context, s, i, !0)));
      n.stopPropagation();
    }, this.host = r, t.context !== void 0 ? this.context = t.context : this.context = t, this.attachListeners(), this.host.addController?.(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new Xh(this.context, this.host));
  }
};
function Ja({ context: r }) {
  return (t, e) => {
    const n = /* @__PURE__ */ new WeakMap();
    if (typeof e == "object") return { get() {
      return t.get.call(this);
    }, set(o) {
      return n.get(this).setValue(o), t.set.call(this, o);
    }, init(o) {
      return n.set(this, new ss(this, { context: r, initialValue: o })), o;
    } };
    {
      t.constructor.addInitializer(((s) => {
        n.set(s, new ss(s, { context: r }));
      }));
      const o = Object.getOwnPropertyDescriptor(t, e);
      let i;
      if (o === void 0) {
        const s = /* @__PURE__ */ new WeakMap();
        i = { get() {
          return s.get(this);
        }, set(a) {
          n.get(this).setValue(a), s.set(this, a);
        }, configurable: !0, enumerable: !0 };
      } else {
        const s = o.set;
        i = { ...o, set(a) {
          n.get(this).setValue(a), s?.call(this, a);
        } };
      }
      return void Object.defineProperty(t, e, i);
    }
  };
}
function Je({ context: r, subscribe: t }) {
  return (e, n) => {
    typeof n == "object" ? n.addInitializer((function() {
      new is(this, { context: r, callback: (o) => {
        e.set.call(this, o);
      }, subscribe: t });
    })) : e.constructor.addInitializer(((o) => {
      new is(o, { context: r, callback: (i) => {
        o[n] = i;
      }, subscribe: t });
    }));
  };
}
function J(r) {
  this.content = r;
}
J.prototype = {
  constructor: J,
  find: function(r) {
    for (var t = 0; t < this.content.length; t += 2)
      if (this.content[t] === r) return t;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var t = this.find(r);
    return t == -1 ? void 0 : this.content[t + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, t, e) {
    var n = e && e != r ? this.remove(e) : this, o = n.find(r), i = n.content.slice();
    return o == -1 ? i.push(e || r, t) : (i[o + 1] = t, e && (i[o] = e)), new J(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var t = this.find(r);
    if (t == -1) return this;
    var e = this.content.slice();
    return e.splice(t, 2), new J(e);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, t) {
    return new J([r, t].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, t) {
    var e = this.remove(r).content.slice();
    return e.push(r, t), new J(e);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, t, e) {
    var n = this.remove(t), o = n.content.slice(), i = n.find(r);
    return o.splice(i == -1 ? o.length : i, 0, t, e), new J(o);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var t = 0; t < this.content.length; t += 2)
      r(this.content[t], this.content[t + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = J.from(r), r.size ? new J(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = J.from(r), r.size ? new J(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var t = this;
    r = J.from(r);
    for (var e = 0; e < r.content.length; e += 2)
      t = t.remove(r.content[e]);
    return t;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(t, e) {
      r[t] = e;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
J.from = function(r) {
  if (r instanceof J) return r;
  var t = [];
  if (r) for (var e in r) t.push(e, r[e]);
  return new J(t);
};
function Ga(r, t, e) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == t.childCount)
      return r.childCount == t.childCount ? null : e;
    let o = r.child(n), i = t.child(n);
    if (o == i) {
      e += o.nodeSize;
      continue;
    }
    if (!o.sameMarkup(i))
      return e;
    if (o.isText && o.text != i.text) {
      for (let s = 0; o.text[s] == i.text[s]; s++)
        e++;
      return e;
    }
    if (o.content.size || i.content.size) {
      let s = Ga(o.content, i.content, e + 1);
      if (s != null)
        return s;
    }
    e += o.nodeSize;
  }
}
function Ka(r, t, e, n) {
  for (let o = r.childCount, i = t.childCount; ; ) {
    if (o == 0 || i == 0)
      return o == i ? null : { a: e, b: n };
    let s = r.child(--o), a = t.child(--i), l = s.nodeSize;
    if (s == a) {
      e -= l, n -= l;
      continue;
    }
    if (!s.sameMarkup(a))
      return { a: e, b: n };
    if (s.isText && s.text != a.text) {
      let c = 0, h = Math.min(s.text.length, a.text.length);
      for (; c < h && s.text[s.text.length - c - 1] == a.text[a.text.length - c - 1]; )
        c++, e--, n--;
      return { a: e, b: n };
    }
    if (s.content.size || a.content.size) {
      let c = Ka(s.content, a.content, e - 1, n - 1);
      if (c)
        return c;
    }
    e -= l, n -= l;
  }
}
class v {
  /**
  @internal
  */
  constructor(t, e) {
    if (this.content = t, this.size = e || 0, e == null)
      for (let n = 0; n < t.length; n++)
        this.size += t[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(t, e, n, o = 0, i) {
    for (let s = 0, a = 0; a < e; s++) {
      let l = this.content[s], c = a + l.nodeSize;
      if (c > t && n(l, o + a, i || null, s) !== !1 && l.content.size) {
        let h = a + 1;
        l.nodesBetween(Math.max(0, t - h), Math.min(l.content.size, e - h), n, o + h);
      }
      a = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(t) {
    this.nodesBetween(0, this.size, t);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(t, e, n, o) {
    let i = "", s = !0;
    return this.nodesBetween(t, e, (a, l) => {
      let c = a.isText ? a.text.slice(Math.max(t, l) - l, e - l) : a.isLeaf ? o ? typeof o == "function" ? o(a) : o : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && c || a.isTextblock) && n && (s ? s = !1 : i += n), i += c;
    }, 0), i;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(t) {
    if (!t.size)
      return this;
    if (!this.size)
      return t;
    let e = this.lastChild, n = t.firstChild, o = this.content.slice(), i = 0;
    for (e.isText && e.sameMarkup(n) && (o[o.length - 1] = e.withText(e.text + n.text), i = 1); i < t.content.length; i++)
      o.push(t.content[i]);
    return new v(o, this.size + t.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(t, e = this.size) {
    if (t == 0 && e == this.size)
      return this;
    let n = [], o = 0;
    if (e > t)
      for (let i = 0, s = 0; s < e; i++) {
        let a = this.content[i], l = s + a.nodeSize;
        l > t && ((s < t || l > e) && (a.isText ? a = a.cut(Math.max(0, t - s), Math.min(a.text.length, e - s)) : a = a.cut(Math.max(0, t - s - 1), Math.min(a.content.size, e - s - 1))), n.push(a), o += a.nodeSize), s = l;
      }
    return new v(n, o);
  }
  /**
  @internal
  */
  cutByIndex(t, e) {
    return t == e ? v.empty : t == 0 && e == this.content.length ? this : new v(this.content.slice(t, e));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(t, e) {
    let n = this.content[t];
    if (n == e)
      return this;
    let o = this.content.slice(), i = this.size + e.nodeSize - n.nodeSize;
    return o[t] = e, new v(o, i);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(t) {
    return new v([t].concat(this.content), this.size + t.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(t) {
    return new v(this.content.concat(t), this.size + t.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(t) {
    if (this.content.length != t.content.length)
      return !1;
    for (let e = 0; e < this.content.length; e++)
      if (!this.content[e].eq(t.content[e]))
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
  child(t) {
    let e = this.content[t];
    if (!e)
      throw new RangeError("Index " + t + " out of range for " + this);
    return e;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(t) {
    return this.content[t] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(t) {
    for (let e = 0, n = 0; e < this.content.length; e++) {
      let o = this.content[e];
      t(o, n, e), n += o.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(t, e = 0) {
    return Ga(this, t, e);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(t, e = this.size, n = t.size) {
    return Ka(this, t, e, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(t) {
    if (t == 0)
      return Rr(0, t);
    if (t == this.size)
      return Rr(this.content.length, t);
    if (t > this.size || t < 0)
      throw new RangeError(`Position ${t} outside of fragment (${this})`);
    for (let e = 0, n = 0; ; e++) {
      let o = this.child(e), i = n + o.nodeSize;
      if (i >= t)
        return i == t ? Rr(e + 1, i) : Rr(e, n);
      n = i;
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
    return this.content.length ? this.content.map((t) => t.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      return v.empty;
    if (!Array.isArray(e))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new v(e.map(t.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(t) {
    if (!t.length)
      return v.empty;
    let e, n = 0;
    for (let o = 0; o < t.length; o++) {
      let i = t[o];
      n += i.nodeSize, o && i.isText && t[o - 1].sameMarkup(i) ? (e || (e = t.slice(0, o)), e[e.length - 1] = i.withText(e[e.length - 1].text + i.text)) : e && e.push(i);
    }
    return new v(e || t, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(t) {
    if (!t)
      return v.empty;
    if (t instanceof v)
      return t;
    if (Array.isArray(t))
      return this.fromArray(t);
    if (t.attrs)
      return new v([t], t.nodeSize);
    throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
v.empty = new v([], 0);
const Xn = { index: 0, offset: 0 };
function Rr(r, t) {
  return Xn.index = r, Xn.offset = t, Xn;
}
function nn(r, t) {
  if (r === t)
    return !0;
  if (!(r && typeof r == "object") || !(t && typeof t == "object"))
    return !1;
  let e = Array.isArray(r);
  if (Array.isArray(t) != e)
    return !1;
  if (e) {
    if (r.length != t.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!nn(r[n], t[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in t) || !nn(r[n], t[n]))
        return !1;
    for (let n in t)
      if (!(n in r))
        return !1;
  }
  return !0;
}
let D = class Mo {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.attrs = e;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(t) {
    let e, n = !1;
    for (let o = 0; o < t.length; o++) {
      let i = t[o];
      if (this.eq(i))
        return t;
      if (this.type.excludes(i.type))
        e || (e = t.slice(0, o));
      else {
        if (i.type.excludes(this.type))
          return t;
        !n && i.type.rank > this.type.rank && (e || (e = t.slice(0, o)), e.push(this), n = !0), e && e.push(i);
      }
    }
    return e || (e = t.slice()), n || e.push(this), e;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(t) {
    for (let e = 0; e < t.length; e++)
      if (this.eq(t[e]))
        return t.slice(0, e).concat(t.slice(e + 1));
    return t;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(t) {
    for (let e = 0; e < t.length; e++)
      if (this.eq(t[e]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(t) {
    return this == t || this.type == t.type && nn(this.attrs, t.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let t = { type: this.type.name };
    for (let e in this.attrs) {
      t.attrs = this.attrs;
      break;
    }
    return t;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(t, e) {
    if (!e)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = t.marks[e.type];
    if (!n)
      throw new RangeError(`There is no mark type ${e.type} in this schema`);
    let o = n.create(e.attrs);
    return n.checkAttrs(o.attrs), o;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(t, e) {
    if (t == e)
      return !0;
    if (t.length != e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (!t[n].eq(e[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(t) {
    if (!t || Array.isArray(t) && t.length == 0)
      return Mo.none;
    if (t instanceof Mo)
      return [t];
    let e = t.slice();
    return e.sort((n, o) => n.type.rank - o.type.rank), e;
  }
};
D.none = [];
class on extends Error {
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
  constructor(t, e, n) {
    this.content = t, this.openStart = e, this.openEnd = n;
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
  insertAt(t, e) {
    let n = Ya(this.content, t + this.openStart, e);
    return n && new k(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(t, e) {
    return new k(Za(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(t) {
    return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
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
    let t = { content: this.content.toJSON() };
    return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      return k.empty;
    let n = e.openStart || 0, o = e.openEnd || 0;
    if (typeof n != "number" || typeof o != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new k(v.fromJSON(t, e.content), n, o);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(t, e = !0) {
    let n = 0, o = 0;
    for (let i = t.firstChild; i && !i.isLeaf && (e || !i.type.spec.isolating); i = i.firstChild)
      n++;
    for (let i = t.lastChild; i && !i.isLeaf && (e || !i.type.spec.isolating); i = i.lastChild)
      o++;
    return new k(t, n, o);
  }
}
k.empty = new k(v.empty, 0, 0);
function Za(r, t, e) {
  let { index: n, offset: o } = r.findIndex(t), i = r.maybeChild(n), { index: s, offset: a } = r.findIndex(e);
  if (o == t || i.isText) {
    if (a != e && !r.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, t).append(r.cut(e));
  }
  if (n != s)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, i.copy(Za(i.content, t - o - 1, e - o - 1)));
}
function Ya(r, t, e, n) {
  let { index: o, offset: i } = r.findIndex(t), s = r.maybeChild(o);
  if (i == t || s.isText)
    return n && !n.canReplace(o, o, e) ? null : r.cut(0, t).append(e).append(r.cut(t));
  let a = Ya(s.content, t - i - 1, e, s);
  return a && r.replaceChild(o, s.copy(a));
}
function Qh(r, t, e) {
  if (e.openStart > r.depth)
    throw new on("Inserted content deeper than insertion position");
  if (r.depth - e.openStart != t.depth - e.openEnd)
    throw new on("Inconsistent open depths");
  return Xa(r, t, e, 0);
}
function Xa(r, t, e, n) {
  let o = r.index(n), i = r.node(n);
  if (o == t.index(n) && n < r.depth - e.openStart) {
    let s = Xa(r, t, e, n + 1);
    return i.copy(i.content.replaceChild(o, s));
  } else if (e.content.size)
    if (!e.openStart && !e.openEnd && r.depth == n && t.depth == n) {
      let s = r.parent, a = s.content;
      return fe(s, a.cut(0, r.parentOffset).append(e.content).append(a.cut(t.parentOffset)));
    } else {
      let { start: s, end: a } = td(e, r);
      return fe(i, tl(r, s, a, t, n));
    }
  else return fe(i, sn(r, t, n));
}
function Qa(r, t) {
  if (!t.type.compatibleContent(r.type))
    throw new on("Cannot join " + t.type.name + " onto " + r.type.name);
}
function So(r, t, e) {
  let n = r.node(e);
  return Qa(n, t.node(e)), n;
}
function pe(r, t) {
  let e = t.length - 1;
  e >= 0 && r.isText && r.sameMarkup(t[e]) ? t[e] = r.withText(t[e].text + r.text) : t.push(r);
}
function or(r, t, e, n) {
  let o = (t || r).node(e), i = 0, s = t ? t.index(e) : o.childCount;
  r && (i = r.index(e), r.depth > e ? i++ : r.textOffset && (pe(r.nodeAfter, n), i++));
  for (let a = i; a < s; a++)
    pe(o.child(a), n);
  t && t.depth == e && t.textOffset && pe(t.nodeBefore, n);
}
function fe(r, t) {
  return r.type.checkContent(t), r.copy(t);
}
function tl(r, t, e, n, o) {
  let i = r.depth > o && So(r, t, o + 1), s = n.depth > o && So(e, n, o + 1), a = [];
  return or(null, r, o, a), i && s && t.index(o) == e.index(o) ? (Qa(i, s), pe(fe(i, tl(r, t, e, n, o + 1)), a)) : (i && pe(fe(i, sn(r, t, o + 1)), a), or(t, e, o, a), s && pe(fe(s, sn(e, n, o + 1)), a)), or(n, null, o, a), new v(a);
}
function sn(r, t, e) {
  let n = [];
  if (or(null, r, e, n), r.depth > e) {
    let o = So(r, t, e + 1);
    pe(fe(o, sn(r, t, e + 1)), n);
  }
  return or(t, null, e, n), new v(n);
}
function td(r, t) {
  let e = t.depth - r.openStart, n = t.node(e).copy(r.content);
  for (let o = e - 1; o >= 0; o--)
    n = t.node(o).copy(v.from(n));
  return {
    start: n.resolveNoCache(r.openStart + e),
    end: n.resolveNoCache(n.content.size - r.openEnd - e)
  };
}
class hr {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.pos = t, this.path = e, this.parentOffset = n, this.depth = e.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(t) {
    return t == null ? this.depth : t < 0 ? this.depth + t : t;
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
  node(t) {
    return this.path[this.resolveDepth(t) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(t) {
    return this.path[this.resolveDepth(t) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(t) {
    return t = this.resolveDepth(t), this.index(t) + (t == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(t) {
    return t = this.resolveDepth(t), t == 0 ? 0 : this.path[t * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(t) {
    return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(t) {
    if (t = this.resolveDepth(t), !t)
      throw new RangeError("There is no position before the top-level node");
    return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(t) {
    if (t = this.resolveDepth(t), !t)
      throw new RangeError("There is no position after the top-level node");
    return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1] + this.path[t * 3].nodeSize;
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
    let t = this.parent, e = this.index(this.depth);
    if (e == t.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], o = t.child(e);
    return n ? t.child(e).cut(n) : o;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let t = this.index(this.depth), e = this.pos - this.path[this.path.length - 1];
    return e ? this.parent.child(t).cut(0, e) : t == 0 ? null : this.parent.child(t - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(t, e) {
    e = this.resolveDepth(e);
    let n = this.path[e * 3], o = e == 0 ? 0 : this.path[e * 3 - 1] + 1;
    for (let i = 0; i < t; i++)
      o += n.child(i).nodeSize;
    return o;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let t = this.parent, e = this.index();
    if (t.content.size == 0)
      return D.none;
    if (this.textOffset)
      return t.child(e).marks;
    let n = t.maybeChild(e - 1), o = t.maybeChild(e);
    if (!n) {
      let a = n;
      n = o, o = a;
    }
    let i = n.marks;
    for (var s = 0; s < i.length; s++)
      i[s].type.spec.inclusive === !1 && (!o || !i[s].isInSet(o.marks)) && (i = i[s--].removeFromSet(i));
    return i;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(t) {
    let e = this.parent.maybeChild(this.index());
    if (!e || !e.isInline)
      return null;
    let n = e.marks, o = t.parent.maybeChild(t.index());
    for (var i = 0; i < n.length; i++)
      n[i].type.spec.inclusive === !1 && (!o || !n[i].isInSet(o.marks)) && (n = n[i--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(t) {
    for (let e = this.depth; e > 0; e--)
      if (this.start(e) <= t && this.end(e) >= t)
        return e;
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
  blockRange(t = this, e) {
    if (t.pos < this.pos)
      return t.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--)
      if (t.pos <= this.end(n) && (!e || e(this.node(n))))
        return new an(this, t, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(t) {
    return this.pos - this.parentOffset == t.pos - t.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(t) {
    return t.pos > this.pos ? t : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(t) {
    return t.pos < this.pos ? t : this;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 1; e <= this.depth; e++)
      t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
    return t + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(t, e) {
    if (!(e >= 0 && e <= t.content.size))
      throw new RangeError("Position " + e + " out of range");
    let n = [], o = 0, i = e;
    for (let s = t; ; ) {
      let { index: a, offset: l } = s.content.findIndex(i), c = i - l;
      if (n.push(s, a, o + l), !c || (s = s.child(a), s.isText))
        break;
      i = c - 1, o += l + 1;
    }
    return new hr(e, n, i);
  }
  /**
  @internal
  */
  static resolveCached(t, e) {
    let n = as.get(t);
    if (n)
      for (let i = 0; i < n.elts.length; i++) {
        let s = n.elts[i];
        if (s.pos == e)
          return s;
      }
    else
      as.set(t, n = new ed());
    let o = n.elts[n.i] = hr.resolve(t, e);
    return n.i = (n.i + 1) % rd, o;
  }
}
class ed {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const rd = 12, as = /* @__PURE__ */ new WeakMap();
class an {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(t, e, n) {
    this.$from = t, this.$to = e, this.depth = n;
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
const nd = /* @__PURE__ */ Object.create(null);
class wt {
  /**
  @internal
  */
  constructor(t, e, n, o = D.none) {
    this.type = t, this.attrs = e, this.marks = o, this.content = n || v.empty;
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
  child(t) {
    return this.content.child(t);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(t) {
    return this.content.maybeChild(t);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(t) {
    this.content.forEach(t);
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
  nodesBetween(t, e, n, o = 0) {
    this.content.nodesBetween(t, e, n, o, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(t) {
    this.nodesBetween(0, this.content.size, t);
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
  textBetween(t, e, n, o) {
    return this.content.textBetween(t, e, n, o);
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
  eq(t) {
    return this == t || this.sameMarkup(t) && this.content.eq(t.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(t) {
    return this.hasMarkup(t.type, t.attrs, t.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(t, e, n) {
    return this.type == t && nn(this.attrs, e || t.defaultAttrs || nd) && D.sameSet(this.marks, n || D.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(t = null) {
    return t == this.content ? this : new wt(this.type, this.attrs, t, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(t) {
    return t == this.marks ? this : new wt(this.type, this.attrs, this.content, t);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(t, e = this.content.size) {
    return t == 0 && e == this.content.size ? this : this.copy(this.content.cut(t, e));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(t, e = this.content.size, n = !1) {
    if (t == e)
      return k.empty;
    let o = this.resolve(t), i = this.resolve(e), s = n ? 0 : o.sharedDepth(e), a = o.start(s), l = o.node(s).content.cut(o.pos - a, i.pos - a);
    return new k(l, o.depth - s, i.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(t, e, n) {
    return Qh(this.resolve(t), this.resolve(e), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(t) {
    for (let e = this; ; ) {
      let { index: n, offset: o } = e.content.findIndex(t);
      if (e = e.maybeChild(n), !e)
        return null;
      if (o == t || e.isText)
        return e;
      t -= o + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(t) {
    let { index: e, offset: n } = this.content.findIndex(t);
    return { node: this.content.maybeChild(e), index: e, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(t) {
    if (t == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: e, offset: n } = this.content.findIndex(t);
    if (n < t)
      return { node: this.content.child(e), index: e, offset: n };
    let o = this.content.child(e - 1);
    return { node: o, index: e - 1, offset: n - o.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(t) {
    return hr.resolveCached(this, t);
  }
  /**
  @internal
  */
  resolveNoCache(t) {
    return hr.resolve(this, t);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(t, e, n) {
    let o = !1;
    return e > t && this.nodesBetween(t, e, (i) => (n.isInSet(i.marks) && (o = !0), !o)), o;
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
    let t = this.type.name;
    return this.content.size && (t += "(" + this.content.toStringInner() + ")"), el(this.marks, t);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(t) {
    let e = this.type.contentMatch.matchFragment(this.content, 0, t);
    if (!e)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return e;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(t, e, n = v.empty, o = 0, i = n.childCount) {
    let s = this.contentMatchAt(t).matchFragment(n, o, i), a = s && s.matchFragment(this.content, e);
    if (!a || !a.validEnd)
      return !1;
    for (let l = o; l < i; l++)
      if (!this.type.allowsMarks(n.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(t, e, n, o) {
    if (o && !this.type.allowsMarks(o))
      return !1;
    let i = this.contentMatchAt(t).matchType(n), s = i && i.matchFragment(this.content, e);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(t) {
    return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let t = D.none;
    for (let e = 0; e < this.marks.length; e++) {
      let n = this.marks[e];
      n.type.checkAttrs(n.attrs), t = n.addToSet(t);
    }
    if (!D.sameSet(t, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
    this.content.forEach((e) => e.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let t = { type: this.type.name };
    for (let e in this.attrs) {
      t.attrs = this.attrs;
      break;
    }
    return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map((e) => e.toJSON())), t;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n;
    if (e.marks) {
      if (!Array.isArray(e.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = e.marks.map(t.markFromJSON);
    }
    if (e.type == "text") {
      if (typeof e.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return t.text(e.text, n);
    }
    let o = v.fromJSON(t, e.content), i = t.nodeType(e.type).create(e.attrs, o, n);
    return i.type.checkAttrs(i.attrs), i;
  }
}
wt.prototype.text = void 0;
class ln extends wt {
  /**
  @internal
  */
  constructor(t, e, n, o) {
    if (super(t, e, null, o), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : el(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(t, e) {
    return this.text.slice(t, e);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(t) {
    return t == this.marks ? this : new ln(this.type, this.attrs, this.text, t);
  }
  withText(t) {
    return t == this.text ? this : new ln(this.type, this.attrs, t, this.marks);
  }
  cut(t = 0, e = this.text.length) {
    return t == 0 && e == this.text.length ? this : this.withText(this.text.slice(t, e));
  }
  eq(t) {
    return this.sameMarkup(t) && this.text == t.text;
  }
  toJSON() {
    let t = super.toJSON();
    return t.text = this.text, t;
  }
}
function el(r, t) {
  for (let e = r.length - 1; e >= 0; e--)
    t = r[e].type.name + "(" + t + ")";
  return t;
}
class ye {
  /**
  @internal
  */
  constructor(t) {
    this.validEnd = t, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(t, e) {
    let n = new od(t, e);
    if (n.next == null)
      return ye.empty;
    let o = rl(n);
    n.next && n.err("Unexpected trailing text");
    let i = dd(hd(o));
    return ud(i, n), i;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(t) {
    for (let e = 0; e < this.next.length; e++)
      if (this.next[e].type == t)
        return this.next[e].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(t, e = 0, n = t.childCount) {
    let o = this;
    for (let i = e; o && i < n; i++)
      o = o.matchType(t.child(i).type);
    return o;
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
    for (let t = 0; t < this.next.length; t++) {
      let { type: e } = this.next[t];
      if (!(e.isText || e.hasRequiredAttrs()))
        return e;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(t) {
    for (let e = 0; e < this.next.length; e++)
      for (let n = 0; n < t.next.length; n++)
        if (this.next[e].type == t.next[n].type)
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
  fillBefore(t, e = !1, n = 0) {
    let o = [this];
    function i(s, a) {
      let l = s.matchFragment(t, n);
      if (l && (!e || l.validEnd))
        return v.from(a.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: h, next: d } = s.next[c];
        if (!(h.isText || h.hasRequiredAttrs()) && o.indexOf(d) == -1) {
          o.push(d);
          let u = i(d, a.concat(h));
          if (u)
            return u;
        }
      }
      return null;
    }
    return i(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(t) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == t)
        return this.wrapCache[n + 1];
    let e = this.computeWrapping(t);
    return this.wrapCache.push(t, e), e;
  }
  /**
  @internal
  */
  computeWrapping(t) {
    let e = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let o = n.shift(), i = o.match;
      if (i.matchType(t)) {
        let s = [];
        for (let a = o; a.type; a = a.via)
          s.push(a.type);
        return s.reverse();
      }
      for (let s = 0; s < i.next.length; s++) {
        let { type: a, next: l } = i.next[s];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in e) && (!o.type || l.validEnd) && (n.push({ match: a.contentMatch, type: a, via: o }), e[a.name] = !0);
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
  edge(t) {
    if (t >= this.next.length)
      throw new RangeError(`There's no ${t}th edge in this content match`);
    return this.next[t];
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    function e(n) {
      t.push(n);
      for (let o = 0; o < n.next.length; o++)
        t.indexOf(n.next[o].next) == -1 && e(n.next[o].next);
    }
    return e(this), t.map((n, o) => {
      let i = o + (n.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < n.next.length; s++)
        i += (s ? ", " : "") + n.next[s].type.name + "->" + t.indexOf(n.next[s].next);
      return i;
    }).join(`
`);
  }
}
ye.empty = new ye(!0);
class od {
  constructor(t, e) {
    this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(t) {
    return this.next == t && (this.pos++ || !0);
  }
  err(t) {
    throw new SyntaxError(t + " (in content expression '" + this.string + "')");
  }
}
function rl(r) {
  let t = [];
  do
    t.push(id(r));
  while (r.eat("|"));
  return t.length == 1 ? t[0] : { type: "choice", exprs: t };
}
function id(r) {
  let t = [];
  do
    t.push(sd(r));
  while (r.next && r.next != ")" && r.next != "|");
  return t.length == 1 ? t[0] : { type: "seq", exprs: t };
}
function sd(r) {
  let t = cd(r);
  for (; ; )
    if (r.eat("+"))
      t = { type: "plus", expr: t };
    else if (r.eat("*"))
      t = { type: "star", expr: t };
    else if (r.eat("?"))
      t = { type: "opt", expr: t };
    else if (r.eat("{"))
      t = ad(r, t);
    else
      break;
  return t;
}
function ls(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let t = Number(r.next);
  return r.pos++, t;
}
function ad(r, t) {
  let e = ls(r), n = e;
  return r.eat(",") && (r.next != "}" ? n = ls(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: e, max: n, expr: t };
}
function ld(r, t) {
  let e = r.nodeTypes, n = e[t];
  if (n)
    return [n];
  let o = [];
  for (let i in e) {
    let s = e[i];
    s.isInGroup(t) && o.push(s);
  }
  return o.length == 0 && r.err("No node type or group '" + t + "' found"), o;
}
function cd(r) {
  if (r.eat("(")) {
    let t = rl(r);
    return r.eat(")") || r.err("Missing closing paren"), t;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let t = ld(r, r.next).map((e) => (r.inline == null ? r.inline = e.isInline : r.inline != e.isInline && r.err("Mixing inline and block content"), { type: "name", value: e }));
    return r.pos++, t.length == 1 ? t[0] : { type: "choice", exprs: t };
  }
}
function hd(r) {
  let t = [[]];
  return o(i(r, 0), e()), t;
  function e() {
    return t.push([]) - 1;
  }
  function n(s, a, l) {
    let c = { term: l, to: a };
    return t[s].push(c), c;
  }
  function o(s, a) {
    s.forEach((l) => l.to = a);
  }
  function i(s, a) {
    if (s.type == "choice")
      return s.exprs.reduce((l, c) => l.concat(i(c, a)), []);
    if (s.type == "seq")
      for (let l = 0; ; l++) {
        let c = i(s.exprs[l], a);
        if (l == s.exprs.length - 1)
          return c;
        o(c, a = e());
      }
    else if (s.type == "star") {
      let l = e();
      return n(a, l), o(i(s.expr, l), l), [n(l)];
    } else if (s.type == "plus") {
      let l = e();
      return o(i(s.expr, a), l), o(i(s.expr, l), l), [n(l)];
    } else {
      if (s.type == "opt")
        return [n(a)].concat(i(s.expr, a));
      if (s.type == "range") {
        let l = a;
        for (let c = 0; c < s.min; c++) {
          let h = e();
          o(i(s.expr, l), h), l = h;
        }
        if (s.max == -1)
          o(i(s.expr, l), l);
        else
          for (let c = s.min; c < s.max; c++) {
            let h = e();
            n(l, h), o(i(s.expr, l), h), l = h;
          }
        return [n(l)];
      } else {
        if (s.type == "name")
          return [n(a, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function nl(r, t) {
  return t - r;
}
function cs(r, t) {
  let e = [];
  return n(t), e.sort(nl);
  function n(o) {
    let i = r[o];
    if (i.length == 1 && !i[0].term)
      return n(i[0].to);
    e.push(o);
    for (let s = 0; s < i.length; s++) {
      let { term: a, to: l } = i[s];
      !a && e.indexOf(l) == -1 && n(l);
    }
  }
}
function dd(r) {
  let t = /* @__PURE__ */ Object.create(null);
  return e(cs(r, 0));
  function e(n) {
    let o = [];
    n.forEach((s) => {
      r[s].forEach(({ term: a, to: l }) => {
        if (!a)
          return;
        let c;
        for (let h = 0; h < o.length; h++)
          o[h][0] == a && (c = o[h][1]);
        cs(r, l).forEach((h) => {
          c || o.push([a, c = []]), c.indexOf(h) == -1 && c.push(h);
        });
      });
    });
    let i = t[n.join(",")] = new ye(n.indexOf(r.length - 1) > -1);
    for (let s = 0; s < o.length; s++) {
      let a = o[s][1].sort(nl);
      i.next.push({ type: o[s][0], next: t[a.join(",")] || e(a) });
    }
    return i;
  }
}
function ud(r, t) {
  for (let e = 0, n = [r]; e < n.length; e++) {
    let o = n[e], i = !o.validEnd, s = [];
    for (let a = 0; a < o.next.length; a++) {
      let { type: l, next: c } = o.next[a];
      s.push(l.name), i && !(l.isText || l.hasRequiredAttrs()) && (i = !1), n.indexOf(c) == -1 && n.push(c);
    }
    i && t.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function ol(r) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in r) {
    let n = r[e];
    if (!n.hasDefault)
      return null;
    t[e] = n.default;
  }
  return t;
}
function il(r, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let o = t && t[n];
    if (o === void 0) {
      let i = r[n];
      if (i.hasDefault)
        o = i.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    }
    e[n] = o;
  }
  return e;
}
function sl(r, t, e, n) {
  for (let o in t)
    if (!(o in r))
      throw new RangeError(`Unsupported attribute ${o} for ${e} of type ${o}`);
  for (let o in r) {
    let i = r[o];
    i.validate && i.validate(t[o]);
  }
}
function al(r, t) {
  let e = /* @__PURE__ */ Object.create(null);
  if (t)
    for (let n in t)
      e[n] = new fd(r, n, t[n]);
  return e;
}
let hs = class ll {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.name = t, this.schema = e, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = al(t, n.attrs), this.defaultAttrs = ol(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || t == "text"), this.isText = t == "text";
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
    return this.contentMatch == ye.empty;
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
  isInGroup(t) {
    return this.groups.indexOf(t) > -1;
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
    for (let t in this.attrs)
      if (this.attrs[t].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(t) {
    return this == t || this.contentMatch.compatible(t.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(t) {
    return !t && this.defaultAttrs ? this.defaultAttrs : il(this.attrs, t);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(t = null, e, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new wt(this, this.computeAttrs(t), v.from(e), D.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(t = null, e, n) {
    return e = v.from(e), this.checkContent(e), new wt(this, this.computeAttrs(t), e, D.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(t = null, e, n) {
    if (t = this.computeAttrs(t), e = v.from(e), e.size) {
      let s = this.contentMatch.fillBefore(e);
      if (!s)
        return null;
      e = s.append(e);
    }
    let o = this.contentMatch.matchFragment(e), i = o && o.fillBefore(v.empty, !0);
    return i ? new wt(this, t, e.append(i), D.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(t) {
    let e = this.contentMatch.matchFragment(t);
    if (!e || !e.validEnd)
      return !1;
    for (let n = 0; n < t.childCount; n++)
      if (!this.allowsMarks(t.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(t) {
    if (!this.validContent(t))
      throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(t) {
    sl(this.attrs, t, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(t) {
    return this.markSet == null || this.markSet.indexOf(t) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(t) {
    if (this.markSet == null)
      return !0;
    for (let e = 0; e < t.length; e++)
      if (!this.allowsMarkType(t[e].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(t) {
    if (this.markSet == null)
      return t;
    let e;
    for (let n = 0; n < t.length; n++)
      this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
    return e ? e.length ? e : D.none : t;
  }
  /**
  @internal
  */
  static compile(t, e) {
    let n = /* @__PURE__ */ Object.create(null);
    t.forEach((i, s) => n[i] = new ll(i, e, s));
    let o = e.spec.topNode || "doc";
    if (!n[o])
      throw new RangeError("Schema is missing its top node type ('" + o + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let i in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
};
function pd(r, t, e) {
  let n = e.split("|");
  return (o) => {
    let i = o === null ? "null" : typeof o;
    if (n.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${n} for attribute ${t} on type ${r}, got ${i}`);
  };
}
class fd {
  constructor(t, e, n) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? pd(t, e, n.validate) : n.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class En {
  /**
  @internal
  */
  constructor(t, e, n, o) {
    this.name = t, this.rank = e, this.schema = n, this.spec = o, this.attrs = al(t, o.attrs), this.excluded = null;
    let i = ol(this.attrs);
    this.instance = i ? new D(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(t = null) {
    return !t && this.instance ? this.instance : new D(this, il(this.attrs, t));
  }
  /**
  @internal
  */
  static compile(t, e) {
    let n = /* @__PURE__ */ Object.create(null), o = 0;
    return t.forEach((i, s) => n[i] = new En(i, o++, e, s)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(t) {
    for (var e = 0; e < t.length; e++)
      t[e].type == this && (t = t.slice(0, e).concat(t.slice(e + 1)), e--);
    return t;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(t) {
    for (let e = 0; e < t.length; e++)
      if (t[e].type == this)
        return t[e];
  }
  /**
  @internal
  */
  checkAttrs(t) {
    sl(this.attrs, t, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(t) {
    return this.excluded.indexOf(t) > -1;
  }
}
class cl {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(t) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let e = this.spec = {};
    for (let o in t)
      e[o] = t[o];
    e.nodes = J.from(t.nodes), e.marks = J.from(t.marks || {}), this.nodes = hs.compile(this.spec.nodes, this), this.marks = En.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let o in this.nodes) {
      if (o in this.marks)
        throw new RangeError(o + " can not be both a node and a mark");
      let i = this.nodes[o], s = i.spec.content || "", a = i.spec.marks;
      if (i.contentMatch = n[s] || (n[s] = ye.parse(s, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = i;
      }
      i.markSet = a == "_" ? null : a ? ds(this, a.split(" ")) : a == "" || !i.inlineContent ? [] : null;
    }
    for (let o in this.marks) {
      let i = this.marks[o], s = i.spec.excludes;
      i.excluded = s == null ? [i] : s == "" ? [] : ds(this, s.split(" "));
    }
    this.nodeFromJSON = (o) => wt.fromJSON(this, o), this.markFromJSON = (o) => D.fromJSON(this, o), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(t, e = null, n, o) {
    if (typeof t == "string")
      t = this.nodeType(t);
    else if (t instanceof hs) {
      if (t.schema != this)
        throw new RangeError("Node type from different schema used (" + t.name + ")");
    } else throw new RangeError("Invalid node type: " + t);
    return t.createChecked(e, n, o);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(t, e) {
    let n = this.nodes.text;
    return new ln(n, n.defaultAttrs, t, D.setFrom(e));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(t, e) {
    return typeof t == "string" && (t = this.marks[t]), t.create(e);
  }
  /**
  @internal
  */
  nodeType(t) {
    let e = this.nodes[t];
    if (!e)
      throw new RangeError("Unknown node type: " + t);
    return e;
  }
}
function ds(r, t) {
  let e = [];
  for (let n = 0; n < t.length; n++) {
    let o = t[n], i = r.marks[o], s = i;
    if (i)
      e.push(i);
    else
      for (let a in r.marks) {
        let l = r.marks[a];
        (o == "_" || l.spec.group && l.spec.group.split(" ").indexOf(o) > -1) && e.push(s = l);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + t[n] + "'");
  }
  return e;
}
function md(r) {
  return r.tag != null;
}
function gd(r) {
  return r.style != null;
}
class Ut {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(t, e) {
    this.schema = t, this.rules = e, this.tags = [], this.styles = [];
    let n = this.matchedStyles = [];
    e.forEach((o) => {
      if (md(o))
        this.tags.push(o);
      else if (gd(o)) {
        let i = /[^=]*/.exec(o.style)[0];
        n.indexOf(i) < 0 && n.push(i), this.styles.push(o);
      }
    }), this.normalizeLists = !this.tags.some((o) => {
      if (!/^(ul|ol)\b/.test(o.tag) || !o.node)
        return !1;
      let i = t.nodes[o.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(t, e = {}) {
    let n = new ps(this, e, !1);
    return n.addAll(t, D.none, e.from, e.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(t, e = {}) {
    let n = new ps(this, e, !0);
    return n.addAll(t, D.none, e.from, e.to), k.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(t, e, n) {
    for (let o = n ? this.tags.indexOf(n) + 1 : 0; o < this.tags.length; o++) {
      let i = this.tags[o];
      if (vd(t, i.tag) && (i.namespace === void 0 || t.namespaceURI == i.namespace) && (!i.context || e.matchesContext(i.context))) {
        if (i.getAttrs) {
          let s = i.getAttrs(t);
          if (s === !1)
            continue;
          i.attrs = s || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(t, e, n, o) {
    for (let i = o ? this.styles.indexOf(o) + 1 : 0; i < this.styles.length; i++) {
      let s = this.styles[i], a = s.style;
      if (!(a.indexOf(t) != 0 || s.context && !n.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > t.length && (a.charCodeAt(t.length) != 61 || a.slice(t.length + 1) != e))) {
        if (s.getAttrs) {
          let l = s.getAttrs(e);
          if (l === !1)
            continue;
          s.attrs = l || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(t) {
    let e = [];
    function n(o) {
      let i = o.priority == null ? 50 : o.priority, s = 0;
      for (; s < e.length; s++) {
        let a = e[s];
        if ((a.priority == null ? 50 : a.priority) < i)
          break;
      }
      e.splice(s, 0, o);
    }
    for (let o in t.marks) {
      let i = t.marks[o].spec.parseDOM;
      i && i.forEach((s) => {
        n(s = fs(s)), s.mark || s.ignore || s.clearMark || (s.mark = o);
      });
    }
    for (let o in t.nodes) {
      let i = t.nodes[o].spec.parseDOM;
      i && i.forEach((s) => {
        n(s = fs(s)), s.node || s.ignore || s.mark || (s.node = o);
      });
    }
    return e;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(t) {
    return t.cached.domParser || (t.cached.domParser = new Ut(t, Ut.schemaRules(t)));
  }
}
const hl = {
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
}, bd = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, dl = { ol: !0, ul: !0 }, dr = 1, Co = 2, ir = 4;
function us(r, t, e) {
  return t != null ? (t ? dr : 0) | (t === "full" ? Co : 0) : r && r.whitespace == "pre" ? dr | Co : e & ~ir;
}
class zr {
  constructor(t, e, n, o, i, s) {
    this.type = t, this.attrs = e, this.marks = n, this.solid = o, this.options = s, this.content = [], this.activeMarks = D.none, this.match = i || (s & ir ? null : t.contentMatch);
  }
  findWrapping(t) {
    if (!this.match) {
      if (!this.type)
        return [];
      let e = this.type.contentMatch.fillBefore(v.from(t));
      if (e)
        this.match = this.type.contentMatch.matchFragment(e);
      else {
        let n = this.type.contentMatch, o;
        return (o = n.findWrapping(t.type)) ? (this.match = n, o) : null;
      }
    }
    return this.match.findWrapping(t.type);
  }
  finish(t) {
    if (!(this.options & dr)) {
      let n = this.content[this.content.length - 1], o;
      if (n && n.isText && (o = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let i = n;
        n.text.length == o[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - o[0].length));
      }
    }
    let e = v.from(this.content);
    return !t && this.match && (e = e.append(this.match.fillBefore(v.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e;
  }
  inlineContext(t) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !hl.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
  }
}
class ps {
  constructor(t, e, n) {
    this.parser = t, this.options = e, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
    let o = e.topNode, i, s = us(null, e.preserveWhitespace, 0) | (n ? ir : 0);
    o ? i = new zr(o.type, o.attrs, D.none, !0, e.topMatch || o.type.contentMatch, s) : n ? i = new zr(null, null, D.none, !0, null, s) : i = new zr(t.schema.topNodeType, null, D.none, !0, null, s), this.nodes = [i], this.find = e.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(t, e) {
    t.nodeType == 3 ? this.addTextNode(t, e) : t.nodeType == 1 && this.addElement(t, e);
  }
  addTextNode(t, e) {
    let n = t.nodeValue, o = this.top, i = o.options & Co ? "full" : this.localPreserveWS || (o.options & dr) > 0, { schema: s } = this.parser;
    if (i === "full" || o.inlineContext(t) || /[^ \t\r\n\u000c]/.test(n)) {
      if (i)
        if (i === "full")
          n = n.replace(/\r\n?/g, `
`);
        else if (s.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(s.linebreakReplacement.create())) {
          let a = n.split(/\r?\n|\r/);
          for (let l = 0; l < a.length; l++)
            l && this.insertNode(s.linebreakReplacement.create(), e, !0), a[l] && this.insertNode(s.text(a[l]), e, !/\S/.test(a[l]));
          n = "";
        } else
          n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let a = o.content[o.content.length - 1], l = t.previousSibling;
        (!a || l && l.nodeName == "BR" || a.isText && /[ \t\r\n\u000c]$/.test(a.text)) && (n = n.slice(1));
      }
      n && this.insertNode(s.text(n), e, !/\S/.test(n)), this.findInText(t);
    } else
      this.findInside(t);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(t, e, n) {
    let o = this.localPreserveWS, i = this.top;
    (t.tagName == "PRE" || /pre/.test(t.style && t.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = t.nodeName.toLowerCase(), a;
    dl.hasOwnProperty(s) && this.parser.normalizeLists && yd(t);
    let l = this.options.ruleFromNode && this.options.ruleFromNode(t) || (a = this.parser.matchTag(t, this, n));
    t: if (l ? l.ignore : bd.hasOwnProperty(s))
      this.findInside(t), this.ignoreFallback(t, e);
    else if (!l || l.skip || l.closeParent) {
      l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (t = l.skip);
      let c, h = this.needsBlock;
      if (hl.hasOwnProperty(s))
        i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), c = !0, i.type || (this.needsBlock = !0);
      else if (!t.firstChild) {
        this.leafFallback(t, e);
        break t;
      }
      let d = l && l.skip ? e : this.readStyles(t, e);
      d && this.addAll(t, d), c && this.sync(i), this.needsBlock = h;
    } else {
      let c = this.readStyles(t, e);
      c && this.addElementByRule(t, l, c, l.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = o;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(t, e) {
    t.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode(`
`), e);
  }
  // Called for ignored nodes
  ignoreFallback(t, e) {
    t.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), e, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(t, e) {
    let n = t.style;
    if (n && n.length)
      for (let o = 0; o < this.parser.matchedStyles.length; o++) {
        let i = this.parser.matchedStyles[o], s = n.getPropertyValue(i);
        if (s)
          for (let a = void 0; ; ) {
            let l = this.parser.matchStyle(i, s, this, a);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? e = e.filter((c) => !l.clearMark(c)) : e = e.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
              a = l;
            else
              break;
          }
      }
    return e;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(t, e, n, o) {
    let i, s;
    if (e.node)
      if (s = this.parser.schema.nodes[e.node], s.isLeaf)
        this.insertNode(s.create(e.attrs), n, t.nodeName == "BR") || this.leafFallback(t, n);
      else {
        let l = this.enter(s, e.attrs || null, n, e.preserveWhitespace);
        l && (i = !0, n = l);
      }
    else {
      let l = this.parser.schema.marks[e.mark];
      n = n.concat(l.create(e.attrs));
    }
    let a = this.top;
    if (s && s.isLeaf)
      this.findInside(t);
    else if (o)
      this.addElement(t, n, o);
    else if (e.getContent)
      this.findInside(t), e.getContent(t, this.parser.schema).forEach((l) => this.insertNode(l, n, !1));
    else {
      let l = t;
      typeof e.contentElement == "string" ? l = t.querySelector(e.contentElement) : typeof e.contentElement == "function" ? l = e.contentElement(t) : e.contentElement && (l = e.contentElement), this.findAround(t, l, !0), this.addAll(l, n), this.findAround(t, l, !1);
    }
    i && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(t, e, n, o) {
    let i = n || 0;
    for (let s = n ? t.childNodes[n] : t.firstChild, a = o == null ? null : t.childNodes[o]; s != a; s = s.nextSibling, ++i)
      this.findAtPoint(t, i), this.addDOM(s, e);
    this.findAtPoint(t, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(t, e, n) {
    let o, i;
    for (let s = this.open, a = 0; s >= 0; s--) {
      let l = this.nodes[s], c = l.findWrapping(t);
      if (c && (!o || o.length > c.length + a) && (o = c, i = l, !c.length))
        break;
      if (l.solid) {
        if (n)
          break;
        a += 2;
      }
    }
    if (!o)
      return null;
    this.sync(i);
    for (let s = 0; s < o.length; s++)
      e = this.enterInner(o[s], null, e, !1);
    return e;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(t, e, n) {
    if (t.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (e = this.enterInner(i, null, e));
    }
    let o = this.findPlace(t, e, n);
    if (o) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(t.type));
      let s = D.none;
      for (let a of o.concat(t.marks))
        (i.type ? i.type.allowsMarkType(a.type) : ms(a.type, t.type)) && (s = a.addToSet(s));
      return i.content.push(t.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(t, e, n, o) {
    let i = this.findPlace(t.create(e), n, !1);
    return i && (i = this.enterInner(t, e, n, !0, o)), i;
  }
  // Open a node of the given type
  enterInner(t, e, n, o = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(t);
    let a = us(t, i, s.options);
    s.options & ir && s.content.length == 0 && (a |= ir);
    let l = D.none;
    return n = n.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : ms(c.type, t)) ? (l = c.addToSet(l), !1) : !0), this.nodes.push(new zr(t, e, l, o, null, a)), this.open++, n;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(t = !1) {
    let e = this.nodes.length - 1;
    if (e > this.open) {
      for (; e > this.open; e--)
        this.nodes[e - 1].content.push(this.nodes[e].finish(t));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(t) {
    for (let e = this.open; e >= 0; e--) {
      if (this.nodes[e] == t)
        return this.open = e, !0;
      this.localPreserveWS && (this.nodes[e].options |= dr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let t = 0;
    for (let e = this.open; e >= 0; e--) {
      let n = this.nodes[e].content;
      for (let o = n.length - 1; o >= 0; o--)
        t += n[o].nodeSize;
      e && t++;
    }
    return t;
  }
  findAtPoint(t, e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos);
  }
  findInside(t) {
    if (this.find)
      for (let e = 0; e < this.find.length; e++)
        this.find[e].pos == null && t.nodeType == 1 && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos);
  }
  findAround(t, e, n) {
    if (t != e && this.find)
      for (let o = 0; o < this.find.length; o++)
        this.find[o].pos == null && t.nodeType == 1 && t.contains(this.find[o].node) && e.compareDocumentPosition(this.find[o].node) & (n ? 2 : 4) && (this.find[o].pos = this.currentPos);
  }
  findInText(t) {
    if (this.find)
      for (let e = 0; e < this.find.length; e++)
        this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(t) {
    if (t.indexOf("|") > -1)
      return t.split(/\s*\|\s*/).some(this.matchesContext, this);
    let e = t.split("/"), n = this.options.context, o = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), i = -(n ? n.depth + 1 : 0) + (o ? 0 : 1), s = (a, l) => {
      for (; a >= 0; a--) {
        let c = e[a];
        if (c == "") {
          if (a == e.length - 1 || a == 0)
            continue;
          for (; l >= i; l--)
            if (s(a - 1, l))
              return !0;
          return !1;
        } else {
          let h = l > 0 || l == 0 && o ? this.nodes[l].type : n && l >= i ? n.node(l - i).type : null;
          if (!h || h.name != c && !h.isInGroup(c))
            return !1;
          l--;
        }
      }
      return !0;
    };
    return s(e.length - 1, this.open);
  }
  textblockFromContext() {
    let t = this.options.context;
    if (t)
      for (let e = t.depth; e >= 0; e--) {
        let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let e in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[e];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
}
function yd(r) {
  for (let t = r.firstChild, e = null; t; t = t.nextSibling) {
    let n = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
    n && dl.hasOwnProperty(n) && e ? (e.appendChild(t), t = e) : n == "li" ? e = t : n && (e = null);
  }
}
function vd(r, t) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, t);
}
function fs(r) {
  let t = {};
  for (let e in r)
    t[e] = r[e];
  return t;
}
function ms(r, t) {
  let e = t.schema.nodes;
  for (let n in e) {
    let o = e[n];
    if (!o.allowsMarkType(r))
      continue;
    let i = [], s = (a) => {
      i.push(a);
      for (let l = 0; l < a.edgeCount; l++) {
        let { type: c, next: h } = a.edge(l);
        if (c == t || i.indexOf(h) < 0 && s(h))
          return !0;
      }
    };
    if (s(o.contentMatch))
      return !0;
  }
}
class Se {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(t, e) {
    this.nodes = t, this.marks = e;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(t, e = {}, n) {
    n || (n = Qn(e).createDocumentFragment());
    let o = n, i = [];
    return t.forEach((s) => {
      if (i.length || s.marks.length) {
        let a = 0, l = 0;
        for (; a < i.length && l < s.marks.length; ) {
          let c = s.marks[l];
          if (!this.marks[c.type.name]) {
            l++;
            continue;
          }
          if (!c.eq(i[a][0]) || c.type.spec.spanning === !1)
            break;
          a++, l++;
        }
        for (; a < i.length; )
          o = i.pop()[1];
        for (; l < s.marks.length; ) {
          let c = s.marks[l++], h = this.serializeMark(c, s.isInline, e);
          h && (i.push([c, o]), o.appendChild(h.dom), o = h.contentDOM || h.dom);
        }
      }
      o.appendChild(this.serializeNodeInner(s, e));
    }), n;
  }
  /**
  @internal
  */
  serializeNodeInner(t, e) {
    let { dom: n, contentDOM: o } = Wr(Qn(e), this.nodes[t.type.name](t), null, t.attrs);
    if (o) {
      if (t.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(t.content, e, o);
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
  serializeNode(t, e = {}) {
    let n = this.serializeNodeInner(t, e);
    for (let o = t.marks.length - 1; o >= 0; o--) {
      let i = this.serializeMark(t.marks[o], t.isInline, e);
      i && ((i.contentDOM || i.dom).appendChild(n), n = i.dom);
    }
    return n;
  }
  /**
  @internal
  */
  serializeMark(t, e, n = {}) {
    let o = this.marks[t.type.name];
    return o && Wr(Qn(n), o(t, e), null, t.attrs);
  }
  static renderSpec(t, e, n = null, o) {
    return Wr(t, e, n, o);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(t) {
    return t.cached.domSerializer || (t.cached.domSerializer = new Se(this.nodesFromSchema(t), this.marksFromSchema(t)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(t) {
    let e = gs(t.nodes);
    return e.text || (e.text = (n) => n.text), e;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(t) {
    return gs(t.marks);
  }
}
function gs(r) {
  let t = {};
  for (let e in r) {
    let n = r[e].spec.toDOM;
    n && (t[e] = n);
  }
  return t;
}
function Qn(r) {
  return r.document || window.document;
}
const bs = /* @__PURE__ */ new WeakMap();
function kd(r) {
  let t = bs.get(r);
  return t === void 0 && bs.set(r, t = wd(r)), t;
}
function wd(r) {
  let t = null;
  function e(n) {
    if (n && typeof n == "object")
      if (Array.isArray(n))
        if (typeof n[0] == "string")
          t || (t = []), t.push(n);
        else
          for (let o = 0; o < n.length; o++)
            e(n[o]);
      else
        for (let o in n)
          e(n[o]);
  }
  return e(r), t;
}
function Wr(r, t, e, n) {
  if (typeof t == "string")
    return { dom: r.createTextNode(t) };
  if (t.nodeType != null)
    return { dom: t };
  if (t.dom && t.dom.nodeType != null)
    return t;
  let o = t[0], i;
  if (typeof o != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (n && (i = kd(n)) && i.indexOf(t) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = o.indexOf(" ");
  s > 0 && (e = o.slice(0, s), o = o.slice(s + 1));
  let a, l = e ? r.createElementNS(e, o) : r.createElement(o), c = t[1], h = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    h = 2;
    for (let d in c)
      if (c[d] != null) {
        let u = d.indexOf(" ");
        u > 0 ? l.setAttributeNS(d.slice(0, u), d.slice(u + 1), c[d]) : d == "style" && l.style ? l.style.cssText = c[d] : l.setAttribute(d, c[d]);
      }
  }
  for (let d = h; d < t.length; d++) {
    let u = t[d];
    if (u === 0) {
      if (d < t.length - 1 || d > h)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: p, contentDOM: f } = Wr(r, u, e, n);
      if (l.appendChild(p), f) {
        if (a)
          throw new RangeError("Multiple content holes");
        a = f;
      }
    }
  }
  return { dom: l, contentDOM: a };
}
const ul = 65535, pl = Math.pow(2, 16);
function xd(r, t) {
  return r + t * pl;
}
function ys(r) {
  return r & ul;
}
function $d(r) {
  return (r - (r & ul)) / pl;
}
const fl = 1, ml = 2, Ur = 4, gl = 8;
class To {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.pos = t, this.delInfo = e, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & gl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (fl | Ur)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ml | Ur)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ur) > 0;
  }
}
class at {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(t, e = !1) {
    if (this.ranges = t, this.inverted = e, !t.length && at.empty)
      return at.empty;
  }
  /**
  @internal
  */
  recover(t) {
    let e = 0, n = ys(t);
    if (!this.inverted)
      for (let o = 0; o < n; o++)
        e += this.ranges[o * 3 + 2] - this.ranges[o * 3 + 1];
    return this.ranges[n * 3] + e + $d(t);
  }
  mapResult(t, e = 1) {
    return this._map(t, e, !1);
  }
  map(t, e = 1) {
    return this._map(t, e, !0);
  }
  /**
  @internal
  */
  _map(t, e, n) {
    let o = 0, i = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? o : 0);
      if (l > t)
        break;
      let c = this.ranges[a + i], h = this.ranges[a + s], d = l + c;
      if (t <= d) {
        let u = c ? t == l ? -1 : t == d ? 1 : e : e, p = l + o + (u < 0 ? 0 : h);
        if (n)
          return p;
        let f = t == (e < 0 ? l : d) ? null : xd(a / 3, t - l), g = t == l ? ml : t == d ? fl : Ur;
        return (e < 0 ? t != l : t != d) && (g |= gl), new To(p, g, f);
      }
      o += h - c;
    }
    return n ? t + o : new To(t + o, 0, null);
  }
  /**
  @internal
  */
  touches(t, e) {
    let n = 0, o = ys(e), i = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? n : 0);
      if (l > t)
        break;
      let c = this.ranges[a + i], h = l + c;
      if (t <= h && a == o * 3)
        return !0;
      n += this.ranges[a + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(t) {
    let e = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let o = 0, i = 0; o < this.ranges.length; o += 3) {
      let s = this.ranges[o], a = s - (this.inverted ? i : 0), l = s + (this.inverted ? 0 : i), c = this.ranges[o + e], h = this.ranges[o + n];
      t(a, a + c, l, l + h), i += h - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new at(this.ranges, !this.inverted);
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
  static offset(t) {
    return t == 0 ? at.empty : new at(t < 0 ? [0, -t, 0] : [0, 0, t]);
  }
}
at.empty = new at([]);
class ur {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(t, e, n = 0, o = t ? t.length : 0) {
    this.mirror = e, this.from = n, this.to = o, this._maps = t || [], this.ownData = !(t || e);
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
  slice(t = 0, e = this.maps.length) {
    return new ur(this._maps, this.mirror, t, e);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(t, e) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(t), e != null && this.setMirror(this._maps.length - 1, e);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(t) {
    for (let e = 0, n = this._maps.length; e < t._maps.length; e++) {
      let o = t.getMirror(e);
      this.appendMap(t._maps[e], o != null && o < e ? n + o : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(t) {
    if (this.mirror) {
      for (let e = 0; e < this.mirror.length; e++)
        if (this.mirror[e] == t)
          return this.mirror[e + (e % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(t, e) {
    this.mirror || (this.mirror = []), this.mirror.push(t, e);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(t) {
    for (let e = t.maps.length - 1, n = this._maps.length + t._maps.length; e >= 0; e--) {
      let o = t.getMirror(e);
      this.appendMap(t._maps[e].invert(), o != null && o > e ? n - o - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let t = new ur();
    return t.appendMappingInverted(this), t;
  }
  /**
  Map a position through this mapping.
  */
  map(t, e = 1) {
    if (this.mirror)
      return this._map(t, e, !0);
    for (let n = this.from; n < this.to; n++)
      t = this._maps[n].map(t, e);
    return t;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(t, e = 1) {
    return this._map(t, e, !1);
  }
  /**
  @internal
  */
  _map(t, e, n) {
    let o = 0;
    for (let i = this.from; i < this.to; i++) {
      let s = this._maps[i], a = s.mapResult(t, e);
      if (a.recover != null) {
        let l = this.getMirror(i);
        if (l != null && l > i && l < this.to) {
          i = l, t = this._maps[l].recover(a.recover);
          continue;
        }
      }
      o |= a.delInfo, t = a.pos;
    }
    return n ? t : new To(t, o, null);
  }
}
const to = /* @__PURE__ */ Object.create(null);
class X {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return at.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(t) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(t, e) {
    if (!e || !e.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = to[e.stepType];
    if (!n)
      throw new RangeError(`No step type ${e.stepType} defined`);
    return n.fromJSON(t, e);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(t, e) {
    if (t in to)
      throw new RangeError("Duplicate use of step JSON ID " + t);
    return to[t] = e, e.prototype.jsonID = t, e;
  }
}
class V {
  /**
  @internal
  */
  constructor(t, e) {
    this.doc = t, this.failed = e;
  }
  /**
  Create a successful step result.
  */
  static ok(t) {
    return new V(t, null);
  }
  /**
  Create a failed step result.
  */
  static fail(t) {
    return new V(null, t);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(t, e, n, o) {
    try {
      return V.ok(t.replace(e, n, o));
    } catch (i) {
      if (i instanceof on)
        return V.fail(i.message);
      throw i;
    }
  }
}
function ii(r, t, e) {
  let n = [];
  for (let o = 0; o < r.childCount; o++) {
    let i = r.child(o);
    i.content.size && (i = i.copy(ii(i.content, t, i))), i.isInline && (i = t(i, e, o)), n.push(i);
  }
  return v.fromArray(n);
}
class Ht extends X {
  /**
  Create a mark step.
  */
  constructor(t, e, n) {
    super(), this.from = t, this.to = e, this.mark = n;
  }
  apply(t) {
    let e = t.slice(this.from, this.to), n = t.resolve(this.from), o = n.node(n.sharedDepth(this.to)), i = new k(ii(e.content, (s, a) => !s.isAtom || !a.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), o), e.openStart, e.openEnd);
    return V.fromReplace(t, this.from, this.to, i);
  }
  invert() {
    return new vt(this.from, this.to, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deleted && n.deleted || e.pos >= n.pos ? null : new Ht(e.pos, n.pos, this.mark);
  }
  merge(t) {
    return t instanceof Ht && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new Ht(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
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
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Ht(e.from, e.to, t.markFromJSON(e.mark));
  }
}
X.jsonID("addMark", Ht);
class vt extends X {
  /**
  Create a mark-removing step.
  */
  constructor(t, e, n) {
    super(), this.from = t, this.to = e, this.mark = n;
  }
  apply(t) {
    let e = t.slice(this.from, this.to), n = new k(ii(e.content, (o) => o.mark(this.mark.removeFromSet(o.marks)), t), e.openStart, e.openEnd);
    return V.fromReplace(t, this.from, this.to, n);
  }
  invert() {
    return new Ht(this.from, this.to, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deleted && n.deleted || e.pos >= n.pos ? null : new vt(e.pos, n.pos, this.mark);
  }
  merge(t) {
    return t instanceof vt && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new vt(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
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
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new vt(e.from, e.to, t.markFromJSON(e.mark));
  }
}
X.jsonID("removeMark", vt);
class Ft extends X {
  /**
  Create a node mark step.
  */
  constructor(t, e) {
    super(), this.pos = t, this.mark = e;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return V.fail("No node at mark step's position");
    let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
    return V.fromReplace(t, this.pos, this.pos + 1, new k(v.from(n), 0, e.isLeaf ? 0 : 1));
  }
  invert(t) {
    let e = t.nodeAt(this.pos);
    if (e) {
      let n = this.mark.addToSet(e.marks);
      if (n.length == e.marks.length) {
        for (let o = 0; o < e.marks.length; o++)
          if (!e.marks[o].isInSet(n))
            return new Ft(this.pos, e.marks[o]);
        return new Ft(this.pos, this.mark);
      }
    }
    return new ve(this.pos, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new Ft(e.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ft(e.pos, t.markFromJSON(e.mark));
  }
}
X.jsonID("addNodeMark", Ft);
class ve extends X {
  /**
  Create a mark-removing step.
  */
  constructor(t, e) {
    super(), this.pos = t, this.mark = e;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return V.fail("No node at mark step's position");
    let n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
    return V.fromReplace(t, this.pos, this.pos + 1, new k(v.from(n), 0, e.isLeaf ? 0 : 1));
  }
  invert(t) {
    let e = t.nodeAt(this.pos);
    return !e || !this.mark.isInSet(e.marks) ? this : new Ft(this.pos, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new ve(e.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new ve(e.pos, t.markFromJSON(e.mark));
  }
}
X.jsonID("removeNodeMark", ve);
class F extends X {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(t, e, n, o = !1) {
    super(), this.from = t, this.to = e, this.slice = n, this.structure = o;
  }
  apply(t) {
    return this.structure && Oo(t, this.from, this.to) ? V.fail("Structure replace would overwrite content") : V.fromReplace(t, this.from, this.to, this.slice);
  }
  getMap() {
    return new at([this.from, this.to - this.from, this.slice.size]);
  }
  invert(t) {
    return new F(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deletedAcross && n.deletedAcross ? null : new F(e.pos, Math.max(e.pos, n.pos), this.slice, this.structure);
  }
  merge(t) {
    if (!(t instanceof F) || t.structure || this.structure)
      return null;
    if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
      let e = this.slice.size + t.slice.size == 0 ? k.empty : new k(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
      return new F(this.from, this.to + (t.to - t.from), e, this.structure);
    } else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
      let e = this.slice.size + t.slice.size == 0 ? k.empty : new k(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
      return new F(t.from, this.to, e, this.structure);
    } else
      return null;
  }
  toJSON() {
    let t = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new F(e.from, e.to, k.fromJSON(t, e.slice), !!e.structure);
  }
}
X.jsonID("replace", F);
class W extends X {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(t, e, n, o, i, s, a = !1) {
    super(), this.from = t, this.to = e, this.gapFrom = n, this.gapTo = o, this.slice = i, this.insert = s, this.structure = a;
  }
  apply(t) {
    if (this.structure && (Oo(t, this.from, this.gapFrom) || Oo(t, this.gapTo, this.to)))
      return V.fail("Structure gap-replace would overwrite content");
    let e = t.slice(this.gapFrom, this.gapTo);
    if (e.openStart || e.openEnd)
      return V.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, e.content);
    return n ? V.fromReplace(t, this.from, this.to, n) : V.fail("Content does not fit in gap");
  }
  getMap() {
    return new at([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(t) {
    let e = this.gapTo - this.gapFrom;
    return new W(this.from, this.from + this.slice.size + e, this.from + this.insert, this.from + this.insert + e, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1), o = this.from == this.gapFrom ? e.pos : t.map(this.gapFrom, -1), i = this.to == this.gapTo ? n.pos : t.map(this.gapTo, 1);
    return e.deletedAcross && n.deletedAcross || o < e.pos || i > n.pos ? null : new W(e.pos, n.pos, o, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let t = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number" || typeof e.gapFrom != "number" || typeof e.gapTo != "number" || typeof e.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new W(e.from, e.to, e.gapFrom, e.gapTo, k.fromJSON(t, e.slice), e.insert, !!e.structure);
  }
}
X.jsonID("replaceAround", W);
function Oo(r, t, e) {
  let n = r.resolve(t), o = e - t, i = n.depth;
  for (; o > 0 && i > 0 && n.indexAfter(i) == n.node(i).childCount; )
    i--, o--;
  if (o > 0) {
    let s = n.node(i).maybeChild(n.indexAfter(i));
    for (; o > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, o--;
    }
  }
  return !1;
}
function Md(r, t, e, n) {
  let o = [], i = [], s, a;
  r.doc.nodesBetween(t, e, (l, c, h) => {
    if (!l.isInline)
      return;
    let d = l.marks;
    if (!n.isInSet(d) && h.type.allowsMarkType(n.type)) {
      let u = Math.max(c, t), p = Math.min(c + l.nodeSize, e), f = n.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(f) || (s && s.to == u && s.mark.eq(d[g]) ? s.to = p : o.push(s = new vt(u, p, d[g])));
      a && a.to == u ? a.to = p : i.push(a = new Ht(u, p, n));
    }
  }), o.forEach((l) => r.step(l)), i.forEach((l) => r.step(l));
}
function Sd(r, t, e, n) {
  let o = [], i = 0;
  r.doc.nodesBetween(t, e, (s, a) => {
    if (!s.isInline)
      return;
    i++;
    let l = null;
    if (n instanceof En) {
      let c = s.marks, h;
      for (; h = n.isInSet(c); )
        (l || (l = [])).push(h), c = h.removeFromSet(c);
    } else n ? n.isInSet(s.marks) && (l = [n]) : l = s.marks;
    if (l && l.length) {
      let c = Math.min(a + s.nodeSize, e);
      for (let h = 0; h < l.length; h++) {
        let d = l[h], u;
        for (let p = 0; p < o.length; p++) {
          let f = o[p];
          f.step == i - 1 && d.eq(o[p].style) && (u = f);
        }
        u ? (u.to = c, u.step = i) : o.push({ style: d, from: Math.max(a, t), to: c, step: i });
      }
    }
  }), o.forEach((s) => r.step(new vt(s.from, s.to, s.style)));
}
function si(r, t, e, n = e.contentMatch, o = !0) {
  let i = r.doc.nodeAt(t), s = [], a = t + 1;
  for (let l = 0; l < i.childCount; l++) {
    let c = i.child(l), h = a + c.nodeSize, d = n.matchType(c.type);
    if (!d)
      s.push(new F(a, h, k.empty));
    else {
      n = d;
      for (let u = 0; u < c.marks.length; u++)
        e.allowsMarkType(c.marks[u].type) || r.step(new vt(a, h, c.marks[u]));
      if (o && c.isText && e.whitespace != "pre") {
        let u, p = /\r?\n|\r/g, f;
        for (; u = p.exec(c.text); )
          f || (f = new k(v.from(e.schema.text(" ", e.allowedMarks(c.marks))), 0, 0)), s.push(new F(a + u.index, a + u.index + u[0].length, f));
      }
    }
    a = h;
  }
  if (!n.validEnd) {
    let l = n.fillBefore(v.empty, !0);
    r.replace(a, a, new k(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    r.step(s[l]);
}
function Cd(r, t, e) {
  return (t == 0 || r.canReplace(t, r.childCount)) && (e == r.childCount || r.canReplace(0, e));
}
function Ge(r) {
  let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let e = r.depth; ; --e) {
    let n = r.$from.node(e), o = r.$from.index(e), i = r.$to.indexAfter(e);
    if (e < r.depth && n.canReplace(o, i, t))
      return e;
    if (e == 0 || n.type.spec.isolating || !Cd(n, o, i))
      break;
  }
  return null;
}
function Td(r, t, e) {
  let { $from: n, $to: o, depth: i } = t, s = n.before(i + 1), a = o.after(i + 1), l = s, c = a, h = v.empty, d = 0;
  for (let f = i, g = !1; f > e; f--)
    g || n.index(f) > 0 ? (g = !0, h = v.from(n.node(f).copy(h)), d++) : l--;
  let u = v.empty, p = 0;
  for (let f = i, g = !1; f > e; f--)
    g || o.after(f + 1) < o.end(f) ? (g = !0, u = v.from(o.node(f).copy(u)), p++) : c++;
  r.step(new W(l, c, s, a, new k(h.append(u), d, p), h.size - d, !0));
}
function ai(r, t, e = null, n = r) {
  let o = Od(r, t), i = o && Ad(n, t);
  return i ? o.map(vs).concat({ type: t, attrs: e }).concat(i.map(vs)) : null;
}
function vs(r) {
  return { type: r, attrs: null };
}
function Od(r, t) {
  let { parent: e, startIndex: n, endIndex: o } = r, i = e.contentMatchAt(n).findWrapping(t);
  if (!i)
    return null;
  let s = i.length ? i[0] : t;
  return e.canReplaceWith(n, o, s) ? i : null;
}
function Ad(r, t) {
  let { parent: e, startIndex: n, endIndex: o } = r, i = e.child(n), s = t.contentMatch.findWrapping(i.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : t).contentMatch;
  for (let l = n; a && l < o; l++)
    a = a.matchType(e.child(l).type);
  return !a || !a.validEnd ? null : s;
}
function Ed(r, t, e) {
  let n = v.empty;
  for (let s = e.length - 1; s >= 0; s--) {
    if (n.size) {
      let a = e[s].type.contentMatch.matchFragment(n);
      if (!a || !a.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    n = v.from(e[s].type.create(e[s].attrs, n));
  }
  let o = t.start, i = t.end;
  r.step(new W(o, i, o, i, new k(n, 0, 0), e.length, !0));
}
function Nd(r, t, e, n, o) {
  if (!n.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = r.steps.length;
  r.doc.nodesBetween(t, e, (s, a) => {
    let l = typeof o == "function" ? o(s) : o;
    if (s.isTextblock && !s.hasMarkup(n, l) && Id(r.doc, r.mapping.slice(i).map(a), n)) {
      let c = null;
      if (n.schema.linebreakReplacement) {
        let p = n.whitespace == "pre", f = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
        p && !f ? c = !1 : !p && f && (c = !0);
      }
      c === !1 && yl(r, s, a, i), si(r, r.mapping.slice(i).map(a, 1), n, void 0, c === null);
      let h = r.mapping.slice(i), d = h.map(a, 1), u = h.map(a + s.nodeSize, 1);
      return r.step(new W(d, u, d + 1, u - 1, new k(v.from(n.create(l, null, s.marks)), 0, 0), 1, !0)), c === !0 && bl(r, s, a, i), !1;
    }
  });
}
function bl(r, t, e, n) {
  t.forEach((o, i) => {
    if (o.isText) {
      let s, a = /\r?\n|\r/g;
      for (; s = a.exec(o.text); ) {
        let l = r.mapping.slice(n).map(e + 1 + i + s.index);
        r.replaceWith(l, l + 1, t.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function yl(r, t, e, n) {
  t.forEach((o, i) => {
    if (o.type == o.type.schema.linebreakReplacement) {
      let s = r.mapping.slice(n).map(e + 1 + i);
      r.replaceWith(s, s + 1, t.type.schema.text(`
`));
    }
  });
}
function Id(r, t, e) {
  let n = r.resolve(t), o = n.index();
  return n.parent.canReplaceWith(o, o + 1, e);
}
function Dd(r, t, e, n, o) {
  let i = r.doc.nodeAt(t);
  if (!i)
    throw new RangeError("No node at given position");
  e || (e = i.type);
  let s = e.create(n, null, o || i.marks);
  if (i.isLeaf)
    return r.replaceWith(t, t + i.nodeSize, s);
  if (!e.validContent(i.content))
    throw new RangeError("Invalid content for node type " + e.name);
  r.step(new W(t, t + i.nodeSize, t + 1, t + i.nodeSize - 1, new k(v.from(s), 0, 0), 1, !0));
}
function It(r, t, e = 1, n) {
  let o = r.resolve(t), i = o.depth - e, s = n && n[n.length - 1] || o.parent;
  if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount)))
    return !1;
  for (let c = o.depth - 1, h = e - 2; c > i; c--, h--) {
    let d = o.node(c), u = o.index(c);
    if (d.type.spec.isolating)
      return !1;
    let p = d.content.cutByIndex(u, d.childCount), f = n && n[h + 1];
    f && (p = p.replaceChild(0, f.type.create(f.attrs)));
    let g = n && n[h] || d;
    if (!d.canReplace(u + 1, d.childCount) || !g.type.validContent(p))
      return !1;
  }
  let a = o.indexAfter(i), l = n && n[0];
  return o.node(i).canReplaceWith(a, a, l ? l.type : o.node(i + 1).type);
}
function Rd(r, t, e = 1, n) {
  let o = r.doc.resolve(t), i = v.empty, s = v.empty;
  for (let a = o.depth, l = o.depth - e, c = e - 1; a > l; a--, c--) {
    i = v.from(o.node(a).copy(i));
    let h = n && n[c];
    s = v.from(h ? h.type.create(h.attrs, s) : o.node(a).copy(s));
  }
  r.step(new F(t, t, new k(i.append(s), e, e), !0));
}
function oe(r, t) {
  let e = r.resolve(t), n = e.index();
  return vl(e.nodeBefore, e.nodeAfter) && e.parent.canReplace(n, n + 1);
}
function zd(r, t) {
  t.content.size || r.type.compatibleContent(t.type);
  let e = r.contentMatchAt(r.childCount), { linebreakReplacement: n } = r.type.schema;
  for (let o = 0; o < t.childCount; o++) {
    let i = t.child(o), s = i.type == n ? r.type.schema.nodes.text : i.type;
    if (e = e.matchType(s), !e || !r.type.allowsMarks(i.marks))
      return !1;
  }
  return e.validEnd;
}
function vl(r, t) {
  return !!(r && t && !r.isLeaf && zd(r, t));
}
function Nn(r, t, e = -1) {
  let n = r.resolve(t);
  for (let o = n.depth; ; o--) {
    let i, s, a = n.index(o);
    if (o == n.depth ? (i = n.nodeBefore, s = n.nodeAfter) : e > 0 ? (i = n.node(o + 1), a++, s = n.node(o).maybeChild(a)) : (i = n.node(o).maybeChild(a - 1), s = n.node(o + 1)), i && !i.isTextblock && vl(i, s) && n.node(o).canReplace(a, a + 1))
      return t;
    if (o == 0)
      break;
    t = e < 0 ? n.before(o) : n.after(o);
  }
}
function Pd(r, t, e) {
  let n = null, { linebreakReplacement: o } = r.doc.type.schema, i = r.doc.resolve(t - e), s = i.node().type;
  if (o && s.inlineContent) {
    let h = s.whitespace == "pre", d = !!s.contentMatch.matchType(o);
    h && !d ? n = !1 : !h && d && (n = !0);
  }
  let a = r.steps.length;
  if (n === !1) {
    let h = r.doc.resolve(t + e);
    yl(r, h.node(), h.before(), a);
  }
  s.inlineContent && si(r, t + e - 1, s, i.node().contentMatchAt(i.index()), n == null);
  let l = r.mapping.slice(a), c = l.map(t - e);
  if (r.step(new F(c, l.map(t + e, -1), k.empty, !0)), n === !0) {
    let h = r.doc.resolve(c);
    bl(r, h.node(), h.before(), r.steps.length);
  }
  return r;
}
function jd(r, t, e) {
  let n = r.resolve(t);
  if (n.parent.canReplaceWith(n.index(), n.index(), e))
    return t;
  if (n.parentOffset == 0)
    for (let o = n.depth - 1; o >= 0; o--) {
      let i = n.index(o);
      if (n.node(o).canReplaceWith(i, i, e))
        return n.before(o + 1);
      if (i > 0)
        return null;
    }
  if (n.parentOffset == n.parent.content.size)
    for (let o = n.depth - 1; o >= 0; o--) {
      let i = n.indexAfter(o);
      if (n.node(o).canReplaceWith(i, i, e))
        return n.after(o + 1);
      if (i < n.node(o).childCount)
        return null;
    }
  return null;
}
function kl(r, t, e) {
  let n = r.resolve(t);
  if (!e.content.size)
    return t;
  let o = e.content;
  for (let i = 0; i < e.openStart; i++)
    o = o.firstChild.content;
  for (let i = 1; i <= (e.openStart == 0 && e.size ? 2 : 1); i++)
    for (let s = n.depth; s >= 0; s--) {
      let a = s == n.depth ? 0 : n.pos <= (n.start(s + 1) + n.end(s + 1)) / 2 ? -1 : 1, l = n.index(s) + (a > 0 ? 1 : 0), c = n.node(s), h = !1;
      if (i == 1)
        h = c.canReplace(l, l, o);
      else {
        let d = c.contentMatchAt(l).findWrapping(o.firstChild.type);
        h = d && c.canReplaceWith(l, l, d[0]);
      }
      if (h)
        return a == 0 ? n.pos : a < 0 ? n.before(s + 1) : n.after(s + 1);
    }
  return null;
}
function In(r, t, e = t, n = k.empty) {
  if (t == e && !n.size)
    return null;
  let o = r.resolve(t), i = r.resolve(e);
  return wl(o, i, n) ? new F(t, e, n) : new Ld(o, i, n).fit();
}
function wl(r, t, e) {
  return !e.openStart && !e.openEnd && r.start() == t.start() && r.parent.canReplace(r.index(), t.index(), e.content);
}
class Ld {
  constructor(t, e, n) {
    this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = v.empty;
    for (let o = 0; o <= t.depth; o++) {
      let i = t.node(o);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(t.indexAfter(o))
      });
    }
    for (let o = t.depth; o > 0; o--)
      this.placed = v.from(t.node(o).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let t = this.mustMoveInline(), e = this.placed.size - this.depth - this.$from.depth, n = this.$from, o = this.close(t < 0 ? this.$to : n.doc.resolve(t));
    if (!o)
      return null;
    let i = this.placed, s = n.depth, a = o.depth;
    for (; s && a && i.childCount == 1; )
      i = i.firstChild.content, s--, a--;
    let l = new k(i, s, a);
    return t > -1 ? new W(n.pos, t, this.$to.pos, this.$to.end(), l, e) : l.size || n.pos != this.$to.pos ? new F(n.pos, o.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let t = this.unplaced.openStart;
    for (let e = this.unplaced.content, n = 0, o = this.unplaced.openEnd; n < t; n++) {
      let i = e.firstChild;
      if (e.childCount > 1 && (o = 0), i.type.spec.isolating && o <= n) {
        t = n;
        break;
      }
      e = i.content;
    }
    for (let e = 1; e <= 2; e++)
      for (let n = e == 1 ? t : this.unplaced.openStart; n >= 0; n--) {
        let o, i = null;
        n ? (i = eo(this.unplaced.content, n - 1).firstChild, o = i.content) : o = this.unplaced.content;
        let s = o.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: l, match: c } = this.frontier[a], h, d = null;
          if (e == 1 && (s ? c.matchType(s.type) || (d = c.fillBefore(v.from(s), !1)) : i && l.compatibleContent(i.type)))
            return { sliceDepth: n, frontierDepth: a, parent: i, inject: d };
          if (e == 2 && s && (h = c.findWrapping(s.type)))
            return { sliceDepth: n, frontierDepth: a, parent: i, wrap: h };
          if (i && c.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: t, openStart: e, openEnd: n } = this.unplaced, o = eo(t, e);
    return !o.childCount || o.firstChild.isLeaf ? !1 : (this.unplaced = new k(t, e + 1, Math.max(n, o.size + e >= t.size - n ? e + 1 : 0)), !0);
  }
  dropNode() {
    let { content: t, openStart: e, openEnd: n } = this.unplaced, o = eo(t, e);
    if (o.childCount <= 1 && e > 0) {
      let i = t.size - e <= e + o.size;
      this.unplaced = new k(tr(t, e - 1, 1), e - 1, i ? e - 1 : n);
    } else
      this.unplaced = new k(tr(t, e, 1), e, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: t, frontierDepth: e, parent: n, inject: o, wrap: i }) {
    for (; this.depth > e; )
      this.closeFrontierNode();
    if (i)
      for (let g = 0; g < i.length; g++)
        this.openFrontierNode(i[g]);
    let s = this.unplaced, a = n ? n.content : s.content, l = s.openStart - t, c = 0, h = [], { match: d, type: u } = this.frontier[e];
    if (o) {
      for (let g = 0; g < o.childCount; g++)
        h.push(o.child(g));
      d = d.matchFragment(o);
    }
    let p = a.size + t - (s.content.size - s.openEnd);
    for (; c < a.childCount; ) {
      let g = a.child(c), b = d.matchType(g.type);
      if (!b)
        break;
      c++, (c > 1 || l == 0 || g.content.size) && (d = b, h.push(xl(g.mark(u.allowedMarks(g.marks)), c == 1 ? l : 0, c == a.childCount ? p : -1)));
    }
    let f = c == a.childCount;
    f || (p = -1), this.placed = er(this.placed, e, v.from(h)), this.frontier[e].match = d, f && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, b = a; g < p; g++) {
      let y = b.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), b = y.content;
    }
    this.unplaced = f ? t == 0 ? k.empty : new k(tr(s.content, t - 1, 1), t - 1, p < 0 ? s.openEnd : t - 1) : new k(tr(s.content, t, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let t = this.frontier[this.depth], e;
    if (!t.type.isTextblock || !ro(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, o = this.$to.after(n);
    for (; n > 1 && o == this.$to.end(--n); )
      ++o;
    return o;
  }
  findCloseLevel(t) {
    t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
      let { match: n, type: o } = this.frontier[e], i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), s = ro(t, e, o, n, i);
      if (s) {
        for (let a = e - 1; a >= 0; a--) {
          let { match: l, type: c } = this.frontier[a], h = ro(t, a, c, l, !0);
          if (!h || h.childCount)
            continue t;
        }
        return { depth: e, fit: s, move: i ? t.doc.resolve(t.after(e + 1)) : t };
      }
    }
  }
  close(t) {
    let e = this.findCloseLevel(t);
    if (!e)
      return null;
    for (; this.depth > e.depth; )
      this.closeFrontierNode();
    e.fit.childCount && (this.placed = er(this.placed, e.depth, e.fit)), t = e.move;
    for (let n = e.depth + 1; n <= t.depth; n++) {
      let o = t.node(n), i = o.type.contentMatch.fillBefore(o.content, !0, t.index(n));
      this.openFrontierNode(o.type, o.attrs, i);
    }
    return t;
  }
  openFrontierNode(t, e = null, n) {
    let o = this.frontier[this.depth];
    o.match = o.match.matchType(t), this.placed = er(this.placed, this.depth, v.from(t.create(e, n))), this.frontier.push({ type: t, match: t.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(v.empty, !0);
    t.childCount && (this.placed = er(this.placed, this.frontier.length, t));
  }
}
function tr(r, t, e) {
  return t == 0 ? r.cutByIndex(e, r.childCount) : r.replaceChild(0, r.firstChild.copy(tr(r.firstChild.content, t - 1, e)));
}
function er(r, t, e) {
  return t == 0 ? r.append(e) : r.replaceChild(r.childCount - 1, r.lastChild.copy(er(r.lastChild.content, t - 1, e)));
}
function eo(r, t) {
  for (let e = 0; e < t; e++)
    r = r.firstChild.content;
  return r;
}
function xl(r, t, e) {
  if (t <= 0)
    return r;
  let n = r.content;
  return t > 1 && (n = n.replaceChild(0, xl(n.firstChild, t - 1, n.childCount == 1 ? e - 1 : 0))), t > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), e <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(v.empty, !0)))), r.copy(n);
}
function ro(r, t, e, n, o) {
  let i = r.node(t), s = o ? r.indexAfter(t) : r.index(t);
  if (s == i.childCount && !e.compatibleContent(i.type))
    return null;
  let a = n.fillBefore(i.content, !0, s);
  return a && !_d(e, i.content, s) ? a : null;
}
function _d(r, t, e) {
  for (let n = e; n < t.childCount; n++)
    if (!r.allowsMarks(t.child(n).marks))
      return !0;
  return !1;
}
function Bd(r) {
  return r.spec.defining || r.spec.definingForContent;
}
function Vd(r, t, e, n) {
  if (!n.size)
    return r.deleteRange(t, e);
  let o = r.doc.resolve(t), i = r.doc.resolve(e);
  if (wl(o, i, n))
    return r.step(new F(t, e, n));
  let s = Ml(o, r.doc.resolve(e));
  s[s.length - 1] == 0 && s.pop();
  let a = -(o.depth + 1);
  s.unshift(a);
  for (let u = o.depth, p = o.pos - 1; u > 0; u--, p--) {
    let f = o.node(u).type.spec;
    if (f.defining || f.definingAsContext || f.isolating)
      break;
    s.indexOf(u) > -1 ? a = u : o.before(u) == p && s.splice(1, 0, -u);
  }
  let l = s.indexOf(a), c = [], h = n.openStart;
  for (let u = n.content, p = 0; ; p++) {
    let f = u.firstChild;
    if (c.push(f), p == n.openStart)
      break;
    u = f.content;
  }
  for (let u = h - 1; u >= 0; u--) {
    let p = c[u], f = Bd(p.type);
    if (f && !p.sameMarkup(o.node(Math.abs(a) - 1)))
      h = u;
    else if (f || !p.type.isTextblock)
      break;
  }
  for (let u = n.openStart; u >= 0; u--) {
    let p = (u + h + 1) % (n.openStart + 1), f = c[p];
    if (f)
      for (let g = 0; g < s.length; g++) {
        let b = s[(g + l) % s.length], y = !0;
        b < 0 && (y = !1, b = -b);
        let w = o.node(b - 1), x = o.index(b - 1);
        if (w.canReplaceWith(x, x, f.type, f.marks))
          return r.replace(o.before(b), y ? i.after(b) : e, new k($l(n.content, 0, n.openStart, p), p, n.openEnd));
      }
  }
  let d = r.steps.length;
  for (let u = s.length - 1; u >= 0 && (r.replace(t, e, n), !(r.steps.length > d)); u--) {
    let p = s[u];
    p < 0 || (t = o.before(p), e = i.after(p));
  }
}
function $l(r, t, e, n, o) {
  if (t < e) {
    let i = r.firstChild;
    r = r.replaceChild(0, i.copy($l(i.content, t + 1, e, n, i)));
  }
  if (t > n) {
    let i = o.contentMatchAt(0), s = i.fillBefore(r).append(r);
    r = s.append(i.matchFragment(s).fillBefore(v.empty, !0));
  }
  return r;
}
function Hd(r, t, e, n) {
  if (!n.isInline && t == e && r.doc.resolve(t).parent.content.size) {
    let o = jd(r.doc, t, n.type);
    o != null && (t = e = o);
  }
  r.replaceRange(t, e, new k(v.from(n), 0, 0));
}
function Fd(r, t, e) {
  let n = r.doc.resolve(t), o = r.doc.resolve(e), i = Ml(n, o);
  for (let s = 0; s < i.length; s++) {
    let a = i[s], l = s == i.length - 1;
    if (l && a == 0 || n.node(a).type.contentMatch.validEnd)
      return r.delete(n.start(a), o.end(a));
    if (a > 0 && (l || n.node(a - 1).canReplace(n.index(a - 1), o.indexAfter(a - 1))))
      return r.delete(n.before(a), o.after(a));
  }
  for (let s = 1; s <= n.depth && s <= o.depth; s++)
    if (t - n.start(s) == n.depth - s && e > n.end(s) && o.end(s) - e != o.depth - s && n.start(s - 1) == o.start(s - 1) && n.node(s - 1).canReplace(n.index(s - 1), o.index(s - 1)))
      return r.delete(n.before(s), e);
  r.delete(t, e);
}
function Ml(r, t) {
  let e = [], n = Math.min(r.depth, t.depth);
  for (let o = n; o >= 0; o--) {
    let i = r.start(o);
    if (i < r.pos - (r.depth - o) || t.end(o) > t.pos + (t.depth - o) || r.node(o).type.spec.isolating || t.node(o).type.spec.isolating)
      break;
    (i == t.start(o) || o == r.depth && o == t.depth && r.parent.inlineContent && t.parent.inlineContent && o && t.start(o - 1) == i - 1) && e.push(o);
  }
  return e;
}
class _e extends X {
  /**
  Construct an attribute step.
  */
  constructor(t, e, n) {
    super(), this.pos = t, this.attr = e, this.value = n;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return V.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      n[i] = e.attrs[i];
    n[this.attr] = this.value;
    let o = e.type.create(n, null, e.marks);
    return V.fromReplace(t, this.pos, this.pos + 1, new k(v.from(o), 0, e.isLeaf ? 0 : 1));
  }
  getMap() {
    return at.empty;
  }
  invert(t) {
    return new _e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new _e(e.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(t, e) {
    if (typeof e.pos != "number" || typeof e.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _e(e.pos, e.attr, e.value);
  }
}
X.jsonID("attr", _e);
class pr extends X {
  /**
  Construct an attribute step.
  */
  constructor(t, e) {
    super(), this.attr = t, this.value = e;
  }
  apply(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      e[o] = t.attrs[o];
    e[this.attr] = this.value;
    let n = t.type.create(e, t.content, t.marks);
    return V.ok(n);
  }
  getMap() {
    return at.empty;
  }
  invert(t) {
    return new pr(this.attr, t.attrs[this.attr]);
  }
  map(t) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(t, e) {
    if (typeof e.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new pr(e.attr, e.value);
  }
}
X.jsonID("docAttr", pr);
let He = class extends Error {
};
He = function r(t) {
  let e = Error.call(this, t);
  return e.__proto__ = r.prototype, e;
};
He.prototype = Object.create(Error.prototype);
He.prototype.constructor = He;
He.prototype.name = "TransformError";
class Sl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(t) {
    this.doc = t, this.steps = [], this.docs = [], this.mapping = new ur();
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
  step(t) {
    let e = this.maybeStep(t);
    if (e.failed)
      throw new He(e.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(t) {
    let e = t.apply(this.doc);
    return e.failed || this.addStep(t, e.doc), e;
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
  addStep(t, e) {
    this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(t, e = t, n = k.empty) {
    let o = In(this.doc, t, e, n);
    return o && this.step(o), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(t, e, n) {
    return this.replace(t, e, new k(v.from(n), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(t, e) {
    return this.replace(t, e, k.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(t, e) {
    return this.replaceWith(t, t, e);
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
  replaceRange(t, e, n) {
    return Vd(this, t, e, n), this;
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
  replaceRangeWith(t, e, n) {
    return Hd(this, t, e, n), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(t, e) {
    return Fd(this, t, e), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(t, e) {
    return Td(this, t, e), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(t, e = 1) {
    return Pd(this, t, e), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(t, e) {
    return Ed(this, t, e), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(t, e = t, n, o = null) {
    return Nd(this, t, e, n, o), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(t, e, n = null, o) {
    return Dd(this, t, e, n, o), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(t, e, n) {
    return this.step(new _e(t, e, n)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(t, e) {
    return this.step(new pr(t, e)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(t, e) {
    return this.step(new Ft(t, e)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(t, e) {
    let n = this.doc.nodeAt(t);
    if (!n)
      throw new RangeError("No node at position " + t);
    if (e instanceof D)
      e.isInSet(n.marks) && this.step(new ve(t, e));
    else {
      let o = n.marks, i, s = [];
      for (; i = e.isInSet(o); )
        s.push(new ve(t, i)), o = i.removeFromSet(o);
      for (let a = s.length - 1; a >= 0; a--)
        this.step(s[a]);
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
  split(t, e = 1, n) {
    return Rd(this, t, e, n), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(t, e, n) {
    return Md(this, t, e, n), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(t, e, n) {
    return Sd(this, t, e, n), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(t, e, n) {
    return si(this, t, e, n), this;
  }
}
const no = /* @__PURE__ */ Object.create(null);
class A {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(t, e, n) {
    this.$anchor = t, this.$head = e, this.ranges = n || [new Wd(t.min(e), t.max(e))];
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
    let t = this.ranges;
    for (let e = 0; e < t.length; e++)
      if (t[e].$from.pos != t[e].$to.pos)
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
  replace(t, e = k.empty) {
    let n = e.content.lastChild, o = null;
    for (let a = 0; a < e.openEnd; a++)
      o = n, n = n.lastChild;
    let i = t.steps.length, s = this.ranges;
    for (let a = 0; a < s.length; a++) {
      let { $from: l, $to: c } = s[a], h = t.mapping.slice(i);
      t.replaceRange(h.map(l.pos), h.map(c.pos), a ? k.empty : e), a == 0 && xs(t, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(t, e) {
    let n = t.steps.length, o = this.ranges;
    for (let i = 0; i < o.length; i++) {
      let { $from: s, $to: a } = o[i], l = t.mapping.slice(n), c = l.map(s.pos), h = l.map(a.pos);
      i ? t.deleteRange(c, h) : (t.replaceRangeWith(c, h, e), xs(t, n, e.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(t, e, n = !1) {
    let o = t.parent.inlineContent ? new C(t) : Ne(t.node(0), t.parent, t.pos, t.index(), e, n);
    if (o)
      return o;
    for (let i = t.depth - 1; i >= 0; i--) {
      let s = e < 0 ? Ne(t.node(0), t.node(i), t.before(i + 1), t.index(i), e, n) : Ne(t.node(0), t.node(i), t.after(i + 1), t.index(i) + 1, e, n);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(t, e = 1) {
    return this.findFrom(t, e) || this.findFrom(t, -e) || new ct(t.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(t) {
    return Ne(t, t, 0, 0, 1) || new ct(t);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(t) {
    return Ne(t, t, t.content.size, t.childCount, -1) || new ct(t);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(t, e) {
    if (!e || !e.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = no[e.type];
    if (!n)
      throw new RangeError(`No selection type ${e.type} defined`);
    return n.fromJSON(t, e);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(t, e) {
    if (t in no)
      throw new RangeError("Duplicate use of selection JSON ID " + t);
    return no[t] = e, e.prototype.jsonID = t, e;
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
    return C.between(this.$anchor, this.$head).getBookmark();
  }
}
A.prototype.visible = !0;
class Wd {
  /**
  Create a range.
  */
  constructor(t, e) {
    this.$from = t, this.$to = e;
  }
}
let ks = !1;
function ws(r) {
  !ks && !r.parent.inlineContent && (ks = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class C extends A {
  /**
  Construct a text selection between the given points.
  */
  constructor(t, e = t) {
    ws(t), ws(e), super(t, e);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(t, e) {
    let n = t.resolve(e.map(this.head));
    if (!n.parent.inlineContent)
      return A.near(n);
    let o = t.resolve(e.map(this.anchor));
    return new C(o.parent.inlineContent ? o : n, n);
  }
  replace(t, e = k.empty) {
    if (super.replace(t, e), e == k.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && t.ensureMarks(n);
    }
  }
  eq(t) {
    return t instanceof C && t.anchor == this.anchor && t.head == this.head;
  }
  getBookmark() {
    return new Dn(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new C(t.resolve(e.anchor), t.resolve(e.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(t, e, n = e) {
    let o = t.resolve(e);
    return new this(o, n == e ? o : t.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(t, e, n) {
    let o = t.pos - e.pos;
    if ((!n || o) && (n = o >= 0 ? 1 : -1), !e.parent.inlineContent) {
      let i = A.findFrom(e, n, !0) || A.findFrom(e, -n, !0);
      if (i)
        e = i.$head;
      else
        return A.near(e, n);
    }
    return t.parent.inlineContent || (o == 0 ? t = e : (t = (A.findFrom(t, -n, !0) || A.findFrom(t, n, !0)).$anchor, t.pos < e.pos != o < 0 && (t = e))), new C(t, e);
  }
}
A.jsonID("text", C);
class Dn {
  constructor(t, e) {
    this.anchor = t, this.head = e;
  }
  map(t) {
    return new Dn(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    return C.between(t.resolve(this.anchor), t.resolve(this.head));
  }
}
class S extends A {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(t) {
    let e = t.nodeAfter, n = t.node(0).resolve(t.pos + e.nodeSize);
    super(t, n), this.node = e;
  }
  map(t, e) {
    let { deleted: n, pos: o } = e.mapResult(this.anchor), i = t.resolve(o);
    return n ? A.near(i) : new S(i);
  }
  content() {
    return new k(v.from(this.node), 0, 0);
  }
  eq(t) {
    return t instanceof S && t.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new li(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new S(t.resolve(e.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(t, e) {
    return new S(t.resolve(e));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(t) {
    return !t.isText && t.type.spec.selectable !== !1;
  }
}
S.prototype.visible = !1;
A.jsonID("node", S);
class li {
  constructor(t) {
    this.anchor = t;
  }
  map(t) {
    let { deleted: e, pos: n } = t.mapResult(this.anchor);
    return e ? new Dn(n, n) : new li(n);
  }
  resolve(t) {
    let e = t.resolve(this.anchor), n = e.nodeAfter;
    return n && S.isSelectable(n) ? new S(e) : A.near(e);
  }
}
class ct extends A {
  /**
  Create an all-selection over the given document.
  */
  constructor(t) {
    super(t.resolve(0), t.resolve(t.content.size));
  }
  replace(t, e = k.empty) {
    if (e == k.empty) {
      t.delete(0, t.doc.content.size);
      let n = A.atStart(t.doc);
      n.eq(t.selection) || t.setSelection(n);
    } else
      super.replace(t, e);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(t) {
    return new ct(t);
  }
  map(t) {
    return new ct(t);
  }
  eq(t) {
    return t instanceof ct;
  }
  getBookmark() {
    return Ud;
  }
}
A.jsonID("all", ct);
const Ud = {
  map() {
    return this;
  },
  resolve(r) {
    return new ct(r);
  }
};
function Ne(r, t, e, n, o, i = !1) {
  if (t.inlineContent)
    return C.create(r, e);
  for (let s = n - (o > 0 ? 0 : 1); o > 0 ? s < t.childCount : s >= 0; s += o) {
    let a = t.child(s);
    if (a.isAtom) {
      if (!i && S.isSelectable(a))
        return S.create(r, e - (o < 0 ? a.nodeSize : 0));
    } else {
      let l = Ne(r, a, e + o, o < 0 ? a.childCount : 0, o, i);
      if (l)
        return l;
    }
    e += a.nodeSize * o;
  }
  return null;
}
function xs(r, t, e) {
  let n = r.steps.length - 1;
  if (n < t)
    return;
  let o = r.steps[n];
  if (!(o instanceof F || o instanceof W))
    return;
  let i = r.mapping.maps[n], s;
  i.forEach((a, l, c, h) => {
    s == null && (s = h);
  }), r.setSelection(A.near(r.doc.resolve(s), e));
}
const $s = 1, Pr = 2, Ms = 4;
class qd extends Sl {
  /**
  @internal
  */
  constructor(t) {
    super(t.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = t.selection, this.storedMarks = t.storedMarks;
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
  setSelection(t) {
    if (t.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = (this.updated | $s) & ~Pr, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & $s) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(t) {
    return this.storedMarks = t, this.updated |= Pr, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(t) {
    return D.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(t) {
    return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(t) {
    return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Pr) > 0;
  }
  /**
  @internal
  */
  addStep(t, e) {
    super.addStep(t, e), this.updated = this.updated & ~Pr, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(t) {
    return this.time = t, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(t) {
    return this.selection.replace(this, t), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(t, e = !0) {
    let n = this.selection;
    return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || D.none))), n.replaceWith(this, t), this;
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
  insertText(t, e, n) {
    let o = this.doc.type.schema;
    if (e == null)
      return t ? this.replaceSelectionWith(o.text(t), !0) : this.deleteSelection();
    {
      if (n == null && (n = e), !t)
        return this.deleteRange(e, n);
      let i = this.storedMarks;
      if (!i) {
        let s = this.doc.resolve(e);
        i = n == e ? s.marks() : s.marksAcross(this.doc.resolve(n));
      }
      return this.replaceRangeWith(e, n, o.text(t, i)), !this.selection.empty && this.selection.to == e + t.length && this.setSelection(A.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(t, e) {
    return this.meta[typeof t == "string" ? t : t.key] = e, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(t) {
    return this.meta[typeof t == "string" ? t : t.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let t in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Ms, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Ms) > 0;
  }
}
function Ss(r, t) {
  return !t || !r ? r : r.bind(t);
}
class rr {
  constructor(t, e, n) {
    this.name = t, this.init = Ss(e.init, n), this.apply = Ss(e.apply, n);
  }
}
const Jd = [
  new rr("doc", {
    init(r) {
      return r.doc || r.schema.topNodeType.createAndFill();
    },
    apply(r) {
      return r.doc;
    }
  }),
  new rr("selection", {
    init(r, t) {
      return r.selection || A.atStart(t.doc);
    },
    apply(r) {
      return r.selection;
    }
  }),
  new rr("storedMarks", {
    init(r) {
      return r.storedMarks || null;
    },
    apply(r, t, e, n) {
      return n.selection.$cursor ? r.storedMarks : null;
    }
  }),
  new rr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(r, t) {
      return r.scrolledIntoView ? t + 1 : t;
    }
  })
];
class oo {
  constructor(t, e) {
    this.schema = t, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Jd.slice(), e && e.forEach((n) => {
      if (this.pluginsByKey[n.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
      this.plugins.push(n), this.pluginsByKey[n.key] = n, n.spec.state && this.fields.push(new rr(n.key, n.spec.state, n));
    });
  }
}
class Le {
  /**
  @internal
  */
  constructor(t) {
    this.config = t;
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
  apply(t) {
    return this.applyTransaction(t).state;
  }
  /**
  @internal
  */
  filterTransaction(t, e = -1) {
    for (let n = 0; n < this.config.plugins.length; n++)
      if (n != e) {
        let o = this.config.plugins[n];
        if (o.spec.filterTransaction && !o.spec.filterTransaction.call(o, t, this))
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
  applyTransaction(t) {
    if (!this.filterTransaction(t))
      return { state: this, transactions: [] };
    let e = [t], n = this.applyInner(t), o = null;
    for (; ; ) {
      let i = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let a = this.config.plugins[s];
        if (a.spec.appendTransaction) {
          let l = o ? o[s].n : 0, c = o ? o[s].state : this, h = l < e.length && a.spec.appendTransaction.call(a, l ? e.slice(l) : e, c, n);
          if (h && n.filterTransaction(h, s)) {
            if (h.setMeta("appendedTransaction", t), !o) {
              o = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                o.push(d < s ? { state: n, n: e.length } : { state: this, n: 0 });
            }
            e.push(h), n = n.applyInner(h), i = !0;
          }
          o && (o[s] = { state: n, n: e.length });
        }
      }
      if (!i)
        return { state: n, transactions: e };
    }
  }
  /**
  @internal
  */
  applyInner(t) {
    if (!t.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let e = new Le(this.config), n = this.config.fields;
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      e[i.name] = i.apply(t, this[i.name], this, e);
    }
    return e;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new qd(this);
  }
  /**
  Create a new state.
  */
  static create(t) {
    let e = new oo(t.doc ? t.doc.type.schema : t.schema, t.plugins), n = new Le(e);
    for (let o = 0; o < e.fields.length; o++)
      n[e.fields[o].name] = e.fields[o].init(t, n);
    return n;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(t) {
    let e = new oo(this.schema, t.plugins), n = e.fields, o = new Le(e);
    for (let i = 0; i < n.length; i++) {
      let s = n[i].name;
      o[s] = this.hasOwnProperty(s) ? this[s] : n[i].init(t, o);
    }
    return o;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(t) {
    let e = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (e.storedMarks = this.storedMarks.map((n) => n.toJSON())), t && typeof t == "object")
      for (let n in t) {
        if (n == "doc" || n == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let o = t[n], i = o.spec.state;
        i && i.toJSON && (e[n] = i.toJSON.call(o, this[o.key]));
      }
    return e;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(t, e, n) {
    if (!e)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!t.schema)
      throw new RangeError("Required config field 'schema' missing");
    let o = new oo(t.schema, t.plugins), i = new Le(o);
    return o.fields.forEach((s) => {
      if (s.name == "doc")
        i.doc = wt.fromJSON(t.schema, e.doc);
      else if (s.name == "selection")
        i.selection = A.fromJSON(i.doc, e.selection);
      else if (s.name == "storedMarks")
        e.storedMarks && (i.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
      else {
        if (n)
          for (let a in n) {
            let l = n[a], c = l.spec.state;
            if (l.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(e, a)) {
              i[s.name] = c.fromJSON.call(l, t, e[a], i);
              return;
            }
          }
        i[s.name] = s.init(t, i);
      }
    }), i;
  }
}
function Cl(r, t, e) {
  for (let n in r) {
    let o = r[n];
    o instanceof Function ? o = o.bind(t) : n == "handleDOMEvents" && (o = Cl(o, t, {})), e[n] = o;
  }
  return e;
}
class q {
  /**
  Create a plugin.
  */
  constructor(t) {
    this.spec = t, this.props = {}, t.props && Cl(t.props, this, this.props), this.key = t.key ? t.key.key : Tl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(t) {
    return t[this.key];
  }
}
const io = /* @__PURE__ */ Object.create(null);
function Tl(r) {
  return r in io ? r + "$" + ++io[r] : (io[r] = 0, r + "$");
}
class it {
  /**
  Create a plugin key.
  */
  constructor(t = "key") {
    this.key = Tl(t);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(t) {
    return t.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(t) {
    return t[this.key];
  }
}
const ci = (r, t) => r.selection.empty ? !1 : (t && t(r.tr.deleteSelection().scrollIntoView()), !0);
function Ol(r, t) {
  let { $cursor: e } = r.selection;
  return !e || (t ? !t.endOfTextblock("backward", r) : e.parentOffset > 0) ? null : e;
}
const Al = (r, t, e) => {
  let n = Ol(r, e);
  if (!n)
    return !1;
  let o = hi(n);
  if (!o) {
    let s = n.blockRange(), a = s && Ge(s);
    return a == null ? !1 : (t && t(r.tr.lift(s, a).scrollIntoView()), !0);
  }
  let i = o.nodeBefore;
  if (Ll(r, o, t, -1))
    return !0;
  if (n.parent.content.size == 0 && (Fe(i, "end") || S.isSelectable(i)))
    for (let s = n.depth; ; s--) {
      let a = In(r.doc, n.before(s), n.after(s), k.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (t) {
          let l = r.tr.step(a);
          l.setSelection(Fe(i, "end") ? A.findFrom(l.doc.resolve(l.mapping.map(o.pos, -1)), -1) : S.create(l.doc, o.pos - i.nodeSize)), t(l.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || n.node(s - 1).childCount > 1)
        break;
    }
  return i.isAtom && o.depth == n.depth - 1 ? (t && t(r.tr.delete(o.pos - i.nodeSize, o.pos).scrollIntoView()), !0) : !1;
}, Gd = (r, t, e) => {
  let n = Ol(r, e);
  if (!n)
    return !1;
  let o = hi(n);
  return o ? El(r, o, t) : !1;
}, Kd = (r, t, e) => {
  let n = Il(r, e);
  if (!n)
    return !1;
  let o = di(n);
  return o ? El(r, o, t) : !1;
};
function El(r, t, e) {
  let n = t.nodeBefore, o = n, i = t.pos - 1;
  for (; !o.isTextblock; i--) {
    if (o.type.spec.isolating)
      return !1;
    let h = o.lastChild;
    if (!h)
      return !1;
    o = h;
  }
  let s = t.nodeAfter, a = s, l = t.pos + 1;
  for (; !a.isTextblock; l++) {
    if (a.type.spec.isolating)
      return !1;
    let h = a.firstChild;
    if (!h)
      return !1;
    a = h;
  }
  let c = In(r.doc, i, l, k.empty);
  if (!c || c.from != i || c instanceof F && c.slice.size >= l - i)
    return !1;
  if (e) {
    let h = r.tr.step(c);
    h.setSelection(C.create(h.doc, i)), e(h.scrollIntoView());
  }
  return !0;
}
function Fe(r, t, e = !1) {
  for (let n = r; n; n = t == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (e && n.childCount != 1)
      return !1;
  }
  return !1;
}
const Nl = (r, t, e) => {
  let { $head: n, empty: o } = r.selection, i = n;
  if (!o)
    return !1;
  if (n.parent.isTextblock) {
    if (e ? !e.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    i = hi(n);
  }
  let s = i && i.nodeBefore;
  return !s || !S.isSelectable(s) ? !1 : (t && t(r.tr.setSelection(S.create(r.doc, i.pos - s.nodeSize)).scrollIntoView()), !0);
};
function hi(r) {
  if (!r.parent.type.spec.isolating)
    for (let t = r.depth - 1; t >= 0; t--) {
      if (r.index(t) > 0)
        return r.doc.resolve(r.before(t + 1));
      if (r.node(t).type.spec.isolating)
        break;
    }
  return null;
}
function Il(r, t) {
  let { $cursor: e } = r.selection;
  return !e || (t ? !t.endOfTextblock("forward", r) : e.parentOffset < e.parent.content.size) ? null : e;
}
const Dl = (r, t, e) => {
  let n = Il(r, e);
  if (!n)
    return !1;
  let o = di(n);
  if (!o)
    return !1;
  let i = o.nodeAfter;
  if (Ll(r, o, t, 1))
    return !0;
  if (n.parent.content.size == 0 && (Fe(i, "start") || S.isSelectable(i))) {
    let s = In(r.doc, n.before(), n.after(), k.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (t) {
        let a = r.tr.step(s);
        a.setSelection(Fe(i, "start") ? A.findFrom(a.doc.resolve(a.mapping.map(o.pos)), 1) : S.create(a.doc, a.mapping.map(o.pos))), t(a.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && o.depth == n.depth - 1 ? (t && t(r.tr.delete(o.pos, o.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, Rl = (r, t, e) => {
  let { $head: n, empty: o } = r.selection, i = n;
  if (!o)
    return !1;
  if (n.parent.isTextblock) {
    if (e ? !e.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    i = di(n);
  }
  let s = i && i.nodeAfter;
  return !s || !S.isSelectable(s) ? !1 : (t && t(r.tr.setSelection(S.create(r.doc, i.pos)).scrollIntoView()), !0);
};
function di(r) {
  if (!r.parent.type.spec.isolating)
    for (let t = r.depth - 1; t >= 0; t--) {
      let e = r.node(t);
      if (r.index(t) + 1 < e.childCount)
        return r.doc.resolve(r.after(t + 1));
      if (e.type.spec.isolating)
        break;
    }
  return null;
}
const Zd = (r, t) => {
  let e = r.selection, n = e instanceof S, o;
  if (n) {
    if (e.node.isTextblock || !oe(r.doc, e.from))
      return !1;
    o = e.from;
  } else if (o = Nn(r.doc, e.from, -1), o == null)
    return !1;
  if (t) {
    let i = r.tr.join(o);
    n && i.setSelection(S.create(i.doc, o - r.doc.resolve(o).nodeBefore.nodeSize)), t(i.scrollIntoView());
  }
  return !0;
}, Yd = (r, t) => {
  let e = r.selection, n;
  if (e instanceof S) {
    if (e.node.isTextblock || !oe(r.doc, e.to))
      return !1;
    n = e.to;
  } else if (n = Nn(r.doc, e.to, 1), n == null)
    return !1;
  return t && t(r.tr.join(n).scrollIntoView()), !0;
}, Xd = (r, t) => {
  let { $from: e, $to: n } = r.selection, o = e.blockRange(n), i = o && Ge(o);
  return i == null ? !1 : (t && t(r.tr.lift(o, i).scrollIntoView()), !0);
}, zl = (r, t) => {
  let { $head: e, $anchor: n } = r.selection;
  return !e.parent.type.spec.code || !e.sameParent(n) ? !1 : (t && t(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function ui(r) {
  for (let t = 0; t < r.edgeCount; t++) {
    let { type: e } = r.edge(t);
    if (e.isTextblock && !e.hasRequiredAttrs())
      return e;
  }
  return null;
}
const Qd = (r, t) => {
  let { $head: e, $anchor: n } = r.selection;
  if (!e.parent.type.spec.code || !e.sameParent(n))
    return !1;
  let o = e.node(-1), i = e.indexAfter(-1), s = ui(o.contentMatchAt(i));
  if (!s || !o.canReplaceWith(i, i, s))
    return !1;
  if (t) {
    let a = e.after(), l = r.tr.replaceWith(a, a, s.createAndFill());
    l.setSelection(A.near(l.doc.resolve(a), 1)), t(l.scrollIntoView());
  }
  return !0;
}, Pl = (r, t) => {
  let e = r.selection, { $from: n, $to: o } = e;
  if (e instanceof ct || n.parent.inlineContent || o.parent.inlineContent)
    return !1;
  let i = ui(o.parent.contentMatchAt(o.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (t) {
    let s = (!n.parentOffset && o.index() < o.parent.childCount ? n : o).pos, a = r.tr.insert(s, i.createAndFill());
    a.setSelection(C.create(a.doc, s + 1)), t(a.scrollIntoView());
  }
  return !0;
}, jl = (r, t) => {
  let { $cursor: e } = r.selection;
  if (!e || e.parent.content.size)
    return !1;
  if (e.depth > 1 && e.after() != e.end(-1)) {
    let i = e.before();
    if (It(r.doc, i))
      return t && t(r.tr.split(i).scrollIntoView()), !0;
  }
  let n = e.blockRange(), o = n && Ge(n);
  return o == null ? !1 : (t && t(r.tr.lift(n, o).scrollIntoView()), !0);
};
function tu(r) {
  return (t, e) => {
    let { $from: n, $to: o } = t.selection;
    if (t.selection instanceof S && t.selection.node.isBlock)
      return !n.parentOffset || !It(t.doc, n.pos) ? !1 : (e && e(t.tr.split(n.pos).scrollIntoView()), !0);
    if (!n.depth)
      return !1;
    let i = [], s, a, l = !1, c = !1;
    for (let p = n.depth; ; p--)
      if (n.node(p).isBlock) {
        l = n.end(p) == n.pos + (n.depth - p), c = n.start(p) == n.pos - (n.depth - p), a = ui(n.node(p - 1).contentMatchAt(n.indexAfter(p - 1))), i.unshift(l && a ? { type: a } : null), s = p;
        break;
      } else {
        if (p == 1)
          return !1;
        i.unshift(null);
      }
    let h = t.tr;
    (t.selection instanceof C || t.selection instanceof ct) && h.deleteSelection();
    let d = h.mapping.map(n.pos), u = It(h.doc, d, i.length, i);
    if (u || (i[0] = a ? { type: a } : null, u = It(h.doc, d, i.length, i)), !u)
      return !1;
    if (h.split(d, i.length, i), !l && c && n.node(s).type != a) {
      let p = h.mapping.map(n.before(s)), f = h.doc.resolve(p);
      a && n.node(s - 1).canReplaceWith(f.index(), f.index() + 1, a) && h.setNodeMarkup(h.mapping.map(n.before(s)), a);
    }
    return e && e(h.scrollIntoView()), !0;
  };
}
const eu = tu(), ru = (r, t) => {
  let { $from: e, to: n } = r.selection, o, i = e.sharedDepth(n);
  return i == 0 ? !1 : (o = e.before(i), t && t(r.tr.setSelection(S.create(r.doc, o))), !0);
};
function nu(r, t, e) {
  let n = t.nodeBefore, o = t.nodeAfter, i = t.index();
  return !n || !o || !n.type.compatibleContent(o.type) ? !1 : !n.content.size && t.parent.canReplace(i - 1, i) ? (e && e(r.tr.delete(t.pos - n.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(i, i + 1) || !(o.isTextblock || oe(r.doc, t.pos)) ? !1 : (e && e(r.tr.join(t.pos).scrollIntoView()), !0);
}
function Ll(r, t, e, n) {
  let o = t.nodeBefore, i = t.nodeAfter, s, a, l = o.type.spec.isolating || i.type.spec.isolating;
  if (!l && nu(r, t, e))
    return !0;
  let c = !l && t.parent.canReplace(t.index(), t.index() + 1);
  if (c && (s = (a = o.contentMatchAt(o.childCount)).findWrapping(i.type)) && a.matchType(s[0] || i.type).validEnd) {
    if (e) {
      let p = t.pos + i.nodeSize, f = v.empty;
      for (let y = s.length - 1; y >= 0; y--)
        f = v.from(s[y].create(null, f));
      f = v.from(o.copy(f));
      let g = r.tr.step(new W(t.pos - 1, p, t.pos, p, new k(f, 1, 0), s.length, !0)), b = g.doc.resolve(p + 2 * s.length);
      b.nodeAfter && b.nodeAfter.type == o.type && oe(g.doc, b.pos) && g.join(b.pos), e(g.scrollIntoView());
    }
    return !0;
  }
  let h = i.type.spec.isolating || n > 0 && l ? null : A.findFrom(t, 1), d = h && h.$from.blockRange(h.$to), u = d && Ge(d);
  if (u != null && u >= t.depth)
    return e && e(r.tr.lift(d, u).scrollIntoView()), !0;
  if (c && Fe(i, "start", !0) && Fe(o, "end")) {
    let p = o, f = [];
    for (; f.push(p), !p.isTextblock; )
      p = p.lastChild;
    let g = i, b = 1;
    for (; !g.isTextblock; g = g.firstChild)
      b++;
    if (p.canReplace(p.childCount, p.childCount, g.content)) {
      if (e) {
        let y = v.empty;
        for (let x = f.length - 1; x >= 0; x--)
          y = v.from(f[x].copy(y));
        let w = r.tr.step(new W(t.pos - f.length, t.pos + i.nodeSize, t.pos + b, t.pos + i.nodeSize - b, new k(y, f.length, 0), 0, !0));
        e(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function _l(r) {
  return function(t, e) {
    let n = t.selection, o = r < 0 ? n.$from : n.$to, i = o.depth;
    for (; o.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return o.node(i).isTextblock ? (e && e(t.tr.setSelection(C.create(t.doc, r < 0 ? o.start(i) : o.end(i)))), !0) : !1;
  };
}
const ou = _l(-1), iu = _l(1);
function su(r, t = null) {
  return function(e, n) {
    let { $from: o, $to: i } = e.selection, s = o.blockRange(i), a = s && ai(s, r, t);
    return a ? (n && n(e.tr.wrap(s, a).scrollIntoView()), !0) : !1;
  };
}
function Cs(r, t = null) {
  return function(e, n) {
    let o = !1;
    for (let i = 0; i < e.selection.ranges.length && !o; i++) {
      let { $from: { pos: s }, $to: { pos: a } } = e.selection.ranges[i];
      e.doc.nodesBetween(s, a, (l, c) => {
        if (o)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(r, t)))
          if (l.type == r)
            o = !0;
          else {
            let h = e.doc.resolve(c), d = h.index();
            o = h.parent.canReplaceWith(d, d + 1, r);
          }
      });
    }
    if (!o)
      return !1;
    if (n) {
      let i = e.tr;
      for (let s = 0; s < e.selection.ranges.length; s++) {
        let { $from: { pos: a }, $to: { pos: l } } = e.selection.ranges[s];
        i.setBlockType(a, l, r, t);
      }
      n(i.scrollIntoView());
    }
    return !0;
  };
}
function pi(...r) {
  return function(t, e, n) {
    for (let o = 0; o < r.length; o++)
      if (r[o](t, e, n))
        return !0;
    return !1;
  };
}
pi(ci, Al, Nl);
pi(ci, Dl, Rl);
pi(zl, Pl, jl, eu);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function au(r, t = null) {
  return function(e, n) {
    let { $from: o, $to: i } = e.selection, s = o.blockRange(i);
    if (!s)
      return !1;
    let a = n ? e.tr : null;
    return lu(a, s, r, t) ? (n && n(a.scrollIntoView()), !0) : !1;
  };
}
function lu(r, t, e, n = null) {
  let o = !1, i = t, s = t.$from.doc;
  if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(e) && t.startIndex == 0) {
    if (t.$from.index(t.depth - 1) == 0)
      return !1;
    let l = s.resolve(t.start - 2);
    i = new an(l, l, t.depth), t.endIndex < t.parent.childCount && (t = new an(t.$from, s.resolve(t.$to.end(t.depth)), t.depth)), o = !0;
  }
  let a = ai(i, e, n, t);
  return a ? (r && cu(r, t, a, o, e), !0) : !1;
}
function cu(r, t, e, n, o) {
  let i = v.empty;
  for (let h = e.length - 1; h >= 0; h--)
    i = v.from(e[h].type.create(e[h].attrs, i));
  r.step(new W(t.start - (n ? 2 : 0), t.end, t.start, t.end, new k(i, 0, 0), e.length, !0));
  let s = 0;
  for (let h = 0; h < e.length; h++)
    e[h].type == o && (s = h + 1);
  let a = e.length - s, l = t.start + e.length - (n ? 2 : 0), c = t.parent;
  for (let h = t.startIndex, d = t.endIndex, u = !0; h < d; h++, u = !1)
    !u && It(r.doc, l, a) && (r.split(l, a), l += 2 * a), l += c.child(h).nodeSize;
  return r;
}
function hu(r) {
  return function(t, e) {
    let { $from: n, $to: o } = t.selection, i = n.blockRange(o, (s) => s.childCount > 0 && s.firstChild.type == r);
    return i ? e ? n.node(i.depth - 1).type == r ? du(t, e, r, i) : uu(t, e, i) : !0 : !1;
  };
}
function du(r, t, e, n) {
  let o = r.tr, i = n.end, s = n.$to.end(n.depth);
  i < s && (o.step(new W(i - 1, s, i, s, new k(v.from(e.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new an(o.doc.resolve(n.$from.pos), o.doc.resolve(s), n.depth));
  const a = Ge(n);
  if (a == null)
    return !1;
  o.lift(n, a);
  let l = o.doc.resolve(o.mapping.map(i, -1) - 1);
  return oe(o.doc, l.pos) && l.nodeBefore.type == l.nodeAfter.type && o.join(l.pos), t(o.scrollIntoView()), !0;
}
function uu(r, t, e) {
  let n = r.tr, o = e.parent;
  for (let p = e.end, f = e.endIndex - 1, g = e.startIndex; f > g; f--)
    p -= o.child(f).nodeSize, n.delete(p - 1, p + 1);
  let i = n.doc.resolve(e.start), s = i.nodeAfter;
  if (n.mapping.map(e.end) != e.start + i.nodeAfter.nodeSize)
    return !1;
  let a = e.startIndex == 0, l = e.endIndex == o.childCount, c = i.node(-1), h = i.index(-1);
  if (!c.canReplace(h + (a ? 0 : 1), h + 1, s.content.append(l ? v.empty : v.from(o))))
    return !1;
  let d = i.pos, u = d + s.nodeSize;
  return n.step(new W(d - (a ? 1 : 0), u + (l ? 1 : 0), d + 1, u - 1, new k((a ? v.empty : v.from(o.copy(v.empty))).append(l ? v.empty : v.from(o.copy(v.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), t(n.scrollIntoView()), !0;
}
function pu(r) {
  return function(t, e) {
    let { $from: n, $to: o } = t.selection, i = n.blockRange(o, (c) => c.childCount > 0 && c.firstChild.type == r);
    if (!i)
      return !1;
    let s = i.startIndex;
    if (s == 0)
      return !1;
    let a = i.parent, l = a.child(s - 1);
    if (l.type != r)
      return !1;
    if (e) {
      let c = l.lastChild && l.lastChild.type == a.type, h = v.from(c ? r.create() : null), d = new k(v.from(r.create(null, v.from(a.type.create(null, h)))), c ? 3 : 1, 0), u = i.start, p = i.end;
      e(t.tr.step(new W(u - (c ? 3 : 1), p, u, p, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const G = function(r) {
  for (var t = 0; ; t++)
    if (r = r.previousSibling, !r)
      return t;
}, We = function(r) {
  let t = r.assignedSlot || r.parentNode;
  return t && t.nodeType == 11 ? t.host : t;
};
let Ao = null;
const At = function(r, t, e) {
  let n = Ao || (Ao = document.createRange());
  return n.setEnd(r, e ?? r.nodeValue.length), n.setStart(r, t || 0), n;
}, fu = function() {
  Ao = null;
}, ke = function(r, t, e, n) {
  return e && (Ts(r, t, e, n, -1) || Ts(r, t, e, n, 1));
}, mu = /^(img|br|input|textarea|hr)$/i;
function Ts(r, t, e, n, o) {
  for (var i; ; ) {
    if (r == e && t == n)
      return !0;
    if (t == (o < 0 ? 0 : pt(r))) {
      let s = r.parentNode;
      if (!s || s.nodeType != 1 || Tr(r) || mu.test(r.nodeName) || r.contentEditable == "false")
        return !1;
      t = G(r) + (o < 0 ? 0 : 1), r = s;
    } else if (r.nodeType == 1) {
      let s = r.childNodes[t + (o < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((i = s.pmViewDesc) === null || i === void 0) && i.ignoreForSelection)
          t += o;
        else
          return !1;
      else
        r = s, t = o < 0 ? pt(r) : 0;
    } else
      return !1;
  }
}
function pt(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
function gu(r, t) {
  for (; ; ) {
    if (r.nodeType == 3 && t)
      return r;
    if (r.nodeType == 1 && t > 0) {
      if (r.contentEditable == "false")
        return null;
      r = r.childNodes[t - 1], t = pt(r);
    } else if (r.parentNode && !Tr(r))
      t = G(r), r = r.parentNode;
    else
      return null;
  }
}
function bu(r, t) {
  for (; ; ) {
    if (r.nodeType == 3 && t < r.nodeValue.length)
      return r;
    if (r.nodeType == 1 && t < r.childNodes.length) {
      if (r.contentEditable == "false")
        return null;
      r = r.childNodes[t], t = 0;
    } else if (r.parentNode && !Tr(r))
      t = G(r) + 1, r = r.parentNode;
    else
      return null;
  }
}
function yu(r, t, e) {
  for (let n = t == 0, o = t == pt(r); n || o; ) {
    if (r == e)
      return !0;
    let i = G(r);
    if (r = r.parentNode, !r)
      return !1;
    n = n && i == 0, o = o && i == pt(r);
  }
}
function Tr(r) {
  let t;
  for (let e = r; e && !(t = e.pmViewDesc); e = e.parentNode)
    ;
  return t && t.node && t.node.isBlock && (t.dom == r || t.contentDOM == r);
}
const Rn = function(r) {
  return r.focusNode && ke(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset);
};
function le(r, t) {
  let e = document.createEvent("Event");
  return e.initEvent("keydown", !0, !0), e.keyCode = r, e.key = e.code = t, e;
}
function vu(r) {
  let t = r.activeElement;
  for (; t && t.shadowRoot; )
    t = t.shadowRoot.activeElement;
  return t;
}
function ku(r, t, e) {
  if (r.caretPositionFromPoint)
    try {
      let n = r.caretPositionFromPoint(t, e);
      if (n)
        return { node: n.offsetNode, offset: Math.min(pt(n.offsetNode), n.offset) };
    } catch {
    }
  if (r.caretRangeFromPoint) {
    let n = r.caretRangeFromPoint(t, e);
    if (n)
      return { node: n.startContainer, offset: Math.min(pt(n.startContainer), n.startOffset) };
  }
}
const $t = typeof navigator < "u" ? navigator : null, Os = typeof document < "u" ? document : null, ie = $t && $t.userAgent || "", Eo = /Edge\/(\d+)/.exec(ie), Bl = /MSIE \d/.exec(ie), No = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ie), nt = !!(Bl || No || Eo), qt = Bl ? document.documentMode : No ? +No[1] : Eo ? +Eo[1] : 0, ft = !nt && /gecko\/(\d+)/i.test(ie);
ft && +(/Firefox\/(\d+)/.exec(ie) || [0, 0])[1];
const Io = !nt && /Chrome\/(\d+)/.exec(ie), Y = !!Io, Vl = Io ? +Io[1] : 0, tt = !nt && !!$t && /Apple Computer/.test($t.vendor), Ue = tt && (/Mobile\/\w+/.test(ie) || !!$t && $t.maxTouchPoints > 2), ut = Ue || ($t ? /Mac/.test($t.platform) : !1), wu = $t ? /Win/.test($t.platform) : !1, Nt = /Android \d/.test(ie), Or = !!Os && "webkitFontSmoothing" in Os.documentElement.style, xu = Or ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function $u(r) {
  let t = r.defaultView && r.defaultView.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: r.documentElement.clientWidth,
    top: 0,
    bottom: r.documentElement.clientHeight
  };
}
function Tt(r, t) {
  return typeof r == "number" ? r : r[t];
}
function Mu(r) {
  let t = r.getBoundingClientRect(), e = t.width / r.offsetWidth || 1, n = t.height / r.offsetHeight || 1;
  return {
    left: t.left,
    right: t.left + r.clientWidth * e,
    top: t.top,
    bottom: t.top + r.clientHeight * n
  };
}
function As(r, t, e) {
  let n = r.someProp("scrollThreshold") || 0, o = r.someProp("scrollMargin") || 5, i = r.dom.ownerDocument;
  for (let s = e || r.dom; s; ) {
    if (s.nodeType != 1) {
      s = We(s);
      continue;
    }
    let a = s, l = a == i.body, c = l ? $u(i) : Mu(a), h = 0, d = 0;
    if (t.top < c.top + Tt(n, "top") ? d = -(c.top - t.top + Tt(o, "top")) : t.bottom > c.bottom - Tt(n, "bottom") && (d = t.bottom - t.top > c.bottom - c.top ? t.top + Tt(o, "top") - c.top : t.bottom - c.bottom + Tt(o, "bottom")), t.left < c.left + Tt(n, "left") ? h = -(c.left - t.left + Tt(o, "left")) : t.right > c.right - Tt(n, "right") && (h = t.right - c.right + Tt(o, "right")), h || d)
      if (l)
        i.defaultView.scrollBy(h, d);
      else {
        let p = a.scrollLeft, f = a.scrollTop;
        d && (a.scrollTop += d), h && (a.scrollLeft += h);
        let g = a.scrollLeft - p, b = a.scrollTop - f;
        t = { left: t.left - g, top: t.top - b, right: t.right - g, bottom: t.bottom - b };
      }
    let u = l ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(u))
      break;
    s = u == "absolute" ? s.offsetParent : We(s);
  }
}
function Su(r) {
  let t = r.dom.getBoundingClientRect(), e = Math.max(0, t.top), n, o;
  for (let i = (t.left + t.right) / 2, s = e + 1; s < Math.min(innerHeight, t.bottom); s += 5) {
    let a = r.root.elementFromPoint(i, s);
    if (!a || a == r.dom || !r.dom.contains(a))
      continue;
    let l = a.getBoundingClientRect();
    if (l.top >= e - 20) {
      n = a, o = l.top;
      break;
    }
  }
  return { refDOM: n, refTop: o, stack: Hl(r.dom) };
}
function Hl(r) {
  let t = [], e = r.ownerDocument;
  for (let n = r; n && (t.push({ dom: n, top: n.scrollTop, left: n.scrollLeft }), r != e); n = We(n))
    ;
  return t;
}
function Cu({ refDOM: r, refTop: t, stack: e }) {
  let n = r ? r.getBoundingClientRect().top : 0;
  Fl(e, n == 0 ? 0 : n - t);
}
function Fl(r, t) {
  for (let e = 0; e < r.length; e++) {
    let { dom: n, top: o, left: i } = r[e];
    n.scrollTop != o + t && (n.scrollTop = o + t), n.scrollLeft != i && (n.scrollLeft = i);
  }
}
let Oe = null;
function Tu(r) {
  if (r.setActive)
    return r.setActive();
  if (Oe)
    return r.focus(Oe);
  let t = Hl(r);
  r.focus(Oe == null ? {
    get preventScroll() {
      return Oe = { preventScroll: !0 }, !0;
    }
  } : void 0), Oe || (Oe = !1, Fl(t, 0));
}
function Wl(r, t) {
  let e, n = 2e8, o, i = 0, s = t.top, a = t.top, l, c;
  for (let h = r.firstChild, d = 0; h; h = h.nextSibling, d++) {
    let u;
    if (h.nodeType == 1)
      u = h.getClientRects();
    else if (h.nodeType == 3)
      u = At(h).getClientRects();
    else
      continue;
    for (let p = 0; p < u.length; p++) {
      let f = u[p];
      if (f.top <= s && f.bottom >= a) {
        s = Math.max(f.bottom, s), a = Math.min(f.top, a);
        let g = f.left > t.left ? f.left - t.left : f.right < t.left ? t.left - f.right : 0;
        if (g < n) {
          e = h, n = g, o = g && e.nodeType == 3 ? {
            left: f.right < t.left ? f.right : f.left,
            top: t.top
          } : t, h.nodeType == 1 && g && (i = d + (t.left >= (f.left + f.right) / 2 ? 1 : 0));
          continue;
        }
      } else f.top > t.top && !l && f.left <= t.left && f.right >= t.left && (l = h, c = { left: Math.max(f.left, Math.min(f.right, t.left)), top: f.top });
      !e && (t.left >= f.right && t.top >= f.top || t.left >= f.left && t.top >= f.bottom) && (i = d + 1);
    }
  }
  return !e && l && (e = l, o = c, n = 0), e && e.nodeType == 3 ? Ou(e, o) : !e || n && e.nodeType == 1 ? { node: r, offset: i } : Wl(e, o);
}
function Ou(r, t) {
  let e = r.nodeValue.length, n = document.createRange();
  for (let o = 0; o < e; o++) {
    n.setEnd(r, o + 1), n.setStart(r, o);
    let i = jt(n, 1);
    if (i.top != i.bottom && fi(t, i))
      return { node: r, offset: o + (t.left >= (i.left + i.right) / 2 ? 1 : 0) };
  }
  return { node: r, offset: 0 };
}
function fi(r, t) {
  return r.left >= t.left - 1 && r.left <= t.right + 1 && r.top >= t.top - 1 && r.top <= t.bottom + 1;
}
function Au(r, t) {
  let e = r.parentNode;
  return e && /^li$/i.test(e.nodeName) && t.left < r.getBoundingClientRect().left ? e : r;
}
function Eu(r, t, e) {
  let { node: n, offset: o } = Wl(t, e), i = -1;
  if (n.nodeType == 1 && !n.firstChild) {
    let s = n.getBoundingClientRect();
    i = s.left != s.right && e.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return r.docView.posFromDOM(n, o, i);
}
function Nu(r, t, e, n) {
  let o = -1;
  for (let i = t, s = !1; i != r.dom; ) {
    let a = r.docView.nearestDesc(i, !0), l;
    if (!a)
      return null;
    if (a.dom.nodeType == 1 && (a.node.isBlock && a.parent || !a.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((l = a.dom.getBoundingClientRect()).width || l.height) && (a.node.isBlock && a.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(a.dom.nodeName) && (!s && l.left > n.left || l.top > n.top ? o = a.posBefore : (!s && l.right < n.left || l.bottom < n.top) && (o = a.posAfter), s = !0), !a.contentDOM && o < 0 && !a.node.isText))
      return (a.node.isBlock ? n.top < (l.top + l.bottom) / 2 : n.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter;
    i = a.dom.parentNode;
  }
  return o > -1 ? o : r.docView.posFromDOM(t, e, -1);
}
function Ul(r, t, e) {
  let n = r.childNodes.length;
  if (n && e.top < e.bottom)
    for (let o = Math.max(0, Math.min(n - 1, Math.floor(n * (t.top - e.top) / (e.bottom - e.top)) - 2)), i = o; ; ) {
      let s = r.childNodes[i];
      if (s.nodeType == 1) {
        let a = s.getClientRects();
        for (let l = 0; l < a.length; l++) {
          let c = a[l];
          if (fi(t, c))
            return Ul(s, t, c);
        }
      }
      if ((i = (i + 1) % n) == o)
        break;
    }
  return r;
}
function Iu(r, t) {
  let e = r.dom.ownerDocument, n, o = 0, i = ku(e, t.left, t.top);
  i && ({ node: n, offset: o } = i);
  let s = (r.root.elementFromPoint ? r.root : e).elementFromPoint(t.left, t.top), a;
  if (!s || !r.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = r.dom.getBoundingClientRect();
    if (!fi(t, c) || (s = Ul(r.dom, t, c), !s))
      return null;
  }
  if (tt)
    for (let c = s; n && c; c = We(c))
      c.draggable && (n = void 0);
  if (s = Au(s, t), n) {
    if (ft && n.nodeType == 1 && (o = Math.min(o, n.childNodes.length), o < n.childNodes.length)) {
      let h = n.childNodes[o], d;
      h.nodeName == "IMG" && (d = h.getBoundingClientRect()).right <= t.left && d.bottom > t.top && o++;
    }
    let c;
    Or && o && n.nodeType == 1 && (c = n.childNodes[o - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= t.top && o--, n == r.dom && o == n.childNodes.length - 1 && n.lastChild.nodeType == 1 && t.top > n.lastChild.getBoundingClientRect().bottom ? a = r.state.doc.content.size : (o == 0 || n.nodeType != 1 || n.childNodes[o - 1].nodeName != "BR") && (a = Nu(r, n, o, t));
  }
  a == null && (a = Eu(r, s, t));
  let l = r.docView.nearestDesc(s, !0);
  return { pos: a, inside: l ? l.posAtStart - l.border : -1 };
}
function Es(r) {
  return r.top < r.bottom || r.left < r.right;
}
function jt(r, t) {
  let e = r.getClientRects();
  if (e.length) {
    let n = e[t < 0 ? 0 : e.length - 1];
    if (Es(n))
      return n;
  }
  return Array.prototype.find.call(e, Es) || r.getBoundingClientRect();
}
const Du = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function ql(r, t, e) {
  let { node: n, offset: o, atom: i } = r.docView.domFromPos(t, e < 0 ? -1 : 1), s = Or || ft;
  if (n.nodeType == 3)
    if (s && (Du.test(n.nodeValue) || (e < 0 ? !o : o == n.nodeValue.length))) {
      let a = jt(At(n, o, o), e);
      if (ft && o && /\s/.test(n.nodeValue[o - 1]) && o < n.nodeValue.length) {
        let l = jt(At(n, o - 1, o - 1), -1);
        if (l.top == a.top) {
          let c = jt(At(n, o, o + 1), -1);
          if (c.top != a.top)
            return Xe(c, c.left < l.left);
        }
      }
      return a;
    } else {
      let a = o, l = o, c = e < 0 ? 1 : -1;
      return e < 0 && !o ? (l++, c = -1) : e >= 0 && o == n.nodeValue.length ? (a--, c = 1) : e < 0 ? a-- : l++, Xe(jt(At(n, a, l), c), c < 0);
    }
  if (!r.state.doc.resolve(t - (i || 0)).parent.inlineContent) {
    if (i == null && o && (e < 0 || o == pt(n))) {
      let a = n.childNodes[o - 1];
      if (a.nodeType == 1)
        return so(a.getBoundingClientRect(), !1);
    }
    if (i == null && o < pt(n)) {
      let a = n.childNodes[o];
      if (a.nodeType == 1)
        return so(a.getBoundingClientRect(), !0);
    }
    return so(n.getBoundingClientRect(), e >= 0);
  }
  if (i == null && o && (e < 0 || o == pt(n))) {
    let a = n.childNodes[o - 1], l = a.nodeType == 3 ? At(a, pt(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (l)
      return Xe(jt(l, 1), !1);
  }
  if (i == null && o < pt(n)) {
    let a = n.childNodes[o];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let l = a ? a.nodeType == 3 ? At(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (l)
      return Xe(jt(l, -1), !0);
  }
  return Xe(jt(n.nodeType == 3 ? At(n) : n, -e), e >= 0);
}
function Xe(r, t) {
  if (r.width == 0)
    return r;
  let e = t ? r.left : r.right;
  return { top: r.top, bottom: r.bottom, left: e, right: e };
}
function so(r, t) {
  if (r.height == 0)
    return r;
  let e = t ? r.top : r.bottom;
  return { top: e, bottom: e, left: r.left, right: r.right };
}
function Jl(r, t, e) {
  let n = r.state, o = r.root.activeElement;
  n != t && r.updateState(t), o != r.dom && r.focus();
  try {
    return e();
  } finally {
    n != t && r.updateState(n), o != r.dom && o && o.focus();
  }
}
function Ru(r, t, e) {
  let n = t.selection, o = e == "up" ? n.$from : n.$to;
  return Jl(r, t, () => {
    let { node: i } = r.docView.domFromPos(o.pos, e == "up" ? -1 : 1);
    for (; ; ) {
      let a = r.docView.nearestDesc(i, !0);
      if (!a)
        break;
      if (a.node.isBlock) {
        i = a.contentDOM || a.dom;
        break;
      }
      i = a.dom.parentNode;
    }
    let s = ql(r, o.pos, 1);
    for (let a = i.firstChild; a; a = a.nextSibling) {
      let l;
      if (a.nodeType == 1)
        l = a.getClientRects();
      else if (a.nodeType == 3)
        l = At(a, 0, a.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < l.length; c++) {
        let h = l[c];
        if (h.bottom > h.top + 1 && (e == "up" ? s.top - h.top > (h.bottom - s.top) * 2 : h.bottom - s.bottom > (s.bottom - h.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const zu = /[\u0590-\u08ac]/;
function Pu(r, t, e) {
  let { $head: n } = t.selection;
  if (!n.parent.isTextblock)
    return !1;
  let o = n.parentOffset, i = !o, s = o == n.parent.content.size, a = r.domSelection();
  return a ? !zu.test(n.parent.textContent) || !a.modify ? e == "left" || e == "backward" ? i : s : Jl(r, t, () => {
    let { focusNode: l, focusOffset: c, anchorNode: h, anchorOffset: d } = r.domSelectionRange(), u = a.caretBidiLevel;
    a.modify("move", e, "character");
    let p = n.depth ? r.docView.domAfterPos(n.before()) : r.dom, { focusNode: f, focusOffset: g } = r.domSelectionRange(), b = f && !p.contains(f.nodeType == 1 ? f : f.parentNode) || l == f && c == g;
    try {
      a.collapse(h, d), l && (l != h || c != d) && a.extend && a.extend(l, c);
    } catch {
    }
    return u != null && (a.caretBidiLevel = u), b;
  }) : n.pos == n.start() || n.pos == n.end();
}
let Ns = null, Is = null, Ds = !1;
function ju(r, t, e) {
  return Ns == t && Is == e ? Ds : (Ns = t, Is = e, Ds = e == "up" || e == "down" ? Ru(r, t, e) : Pu(r, t, e));
}
const mt = 0, Rs = 1, ce = 2, Mt = 3;
class Ar {
  constructor(t, e, n, o) {
    this.parent = t, this.children = e, this.dom = n, this.contentDOM = o, this.dirty = mt, n.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(t) {
    return !1;
  }
  matchesMark(t) {
    return !1;
  }
  matchesNode(t, e, n) {
    return !1;
  }
  matchesHack(t) {
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
  stopEvent(t) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let t = 0;
    for (let e = 0; e < this.children.length; e++)
      t += this.children[e].size;
    return t;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let t = 0; t < this.children.length; t++)
      this.children[t].destroy();
  }
  posBeforeChild(t) {
    for (let e = 0, n = this.posAtStart; ; e++) {
      let o = this.children[e];
      if (o == t)
        return n;
      n += o.size;
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
  localPosFromDOM(t, e, n) {
    if (this.contentDOM && this.contentDOM.contains(t.nodeType == 1 ? t : t.parentNode))
      if (n < 0) {
        let i, s;
        if (t == this.contentDOM)
          i = t.childNodes[e - 1];
        else {
          for (; t.parentNode != this.contentDOM; )
            t = t.parentNode;
          i = t.previousSibling;
        }
        for (; i && !((s = i.pmViewDesc) && s.parent == this); )
          i = i.previousSibling;
        return i ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let i, s;
        if (t == this.contentDOM)
          i = t.childNodes[e];
        else {
          for (; t.parentNode != this.contentDOM; )
            t = t.parentNode;
          i = t.nextSibling;
        }
        for (; i && !((s = i.pmViewDesc) && s.parent == this); )
          i = i.nextSibling;
        return i ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let o;
    if (t == this.dom && this.contentDOM)
      o = e > G(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      o = t.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (e == 0)
        for (let i = t; ; i = i.parentNode) {
          if (i == this.dom) {
            o = !1;
            break;
          }
          if (i.previousSibling)
            break;
        }
      if (o == null && e == t.childNodes.length)
        for (let i = t; ; i = i.parentNode) {
          if (i == this.dom) {
            o = !0;
            break;
          }
          if (i.nextSibling)
            break;
        }
    }
    return o ?? n > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(t, e = !1) {
    for (let n = !0, o = t; o; o = o.parentNode) {
      let i = this.getDesc(o), s;
      if (i && (!e || i.node))
        if (n && (s = i.nodeDOM) && !(s.nodeType == 1 ? s.contains(t.nodeType == 1 ? t : t.parentNode) : s == t))
          n = !1;
        else
          return i;
    }
  }
  getDesc(t) {
    let e = t.pmViewDesc;
    for (let n = e; n; n = n.parent)
      if (n == this)
        return e;
  }
  posFromDOM(t, e, n) {
    for (let o = t; o; o = o.parentNode) {
      let i = this.getDesc(o);
      if (i)
        return i.localPosFromDOM(t, e, n);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(t) {
    for (let e = 0, n = 0; e < this.children.length; e++) {
      let o = this.children[e], i = n + o.size;
      if (n == t && i != n) {
        for (; !o.border && o.children.length; )
          for (let s = 0; s < o.children.length; s++) {
            let a = o.children[s];
            if (a.size) {
              o = a;
              break;
            }
          }
        return o;
      }
      if (t < i)
        return o.descAt(t - n - o.border);
      n = i;
    }
  }
  domFromPos(t, e) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: t + 1 };
    let n = 0, o = 0;
    for (let i = 0; n < this.children.length; n++) {
      let s = this.children[n], a = i + s.size;
      if (a > t || s instanceof Kl) {
        o = t - i;
        break;
      }
      i = a;
    }
    if (o)
      return this.children[n].domFromPos(o - this.children[n].border, e);
    for (let i; n && !(i = this.children[n - 1]).size && i instanceof Gl && i.side >= 0; n--)
      ;
    if (e <= 0) {
      let i, s = !0;
      for (; i = n ? this.children[n - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); n--, s = !1)
        ;
      return i && e && s && !i.border && !i.domAtom ? i.domFromPos(i.size, e) : { node: this.contentDOM, offset: i ? G(i.dom) + 1 : 0 };
    } else {
      let i, s = !0;
      for (; i = n < this.children.length ? this.children[n] : null, !(!i || i.dom.parentNode == this.contentDOM); n++, s = !1)
        ;
      return i && s && !i.border && !i.domAtom ? i.domFromPos(0, e) : { node: this.contentDOM, offset: i ? G(i.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(t, e, n = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: t, to: e, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let o = -1, i = -1;
    for (let s = n, a = 0; ; a++) {
      let l = this.children[a], c = s + l.size;
      if (o == -1 && t <= c) {
        let h = s + l.border;
        if (t >= h && e <= c - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM))
          return l.parseRange(t, e, h);
        t = s;
        for (let d = a; d > 0; d--) {
          let u = this.children[d - 1];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(1)) {
            o = G(u.dom) + 1;
            break;
          }
          t -= u.size;
        }
        o == -1 && (o = 0);
      }
      if (o > -1 && (c > e || a == this.children.length - 1)) {
        e = c;
        for (let h = a + 1; h < this.children.length; h++) {
          let d = this.children[h];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            i = G(d.dom);
            break;
          }
          e += d.size;
        }
        i == -1 && (i = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: t, to: e, fromOffset: o, toOffset: i };
  }
  emptyChildAt(t) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let e = this.children[t < 0 ? 0 : this.children.length - 1];
    return e.size == 0 || e.emptyChildAt(t);
  }
  domAfterPos(t) {
    let { node: e, offset: n } = this.domFromPos(t, 0);
    if (e.nodeType != 1 || n == e.childNodes.length)
      throw new RangeError("No node after pos " + t);
    return e.childNodes[n];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(t, e, n, o = !1) {
    let i = Math.min(t, e), s = Math.max(t, e);
    for (let p = 0, f = 0; p < this.children.length; p++) {
      let g = this.children[p], b = f + g.size;
      if (i > f && s < b)
        return g.setSelection(t - f - g.border, e - f - g.border, n, o);
      f = b;
    }
    let a = this.domFromPos(t, t ? -1 : 1), l = e == t ? a : this.domFromPos(e, e ? -1 : 1), c = n.root.getSelection(), h = n.domSelectionRange(), d = !1;
    if ((ft || tt) && t == e) {
      let { node: p, offset: f } = a;
      if (p.nodeType == 3) {
        if (d = !!(f && p.nodeValue[f - 1] == `
`), d && f == p.nodeValue.length)
          for (let g = p, b; g; g = g.parentNode) {
            if (b = g.nextSibling) {
              b.nodeName == "BR" && (a = l = { node: b.parentNode, offset: G(b) + 1 });
              break;
            }
            let y = g.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let g = p.childNodes[f - 1];
        d = g && (g.nodeName == "BR" || g.contentEditable == "false");
      }
    }
    if (ft && h.focusNode && h.focusNode != l.node && h.focusNode.nodeType == 1) {
      let p = h.focusNode.childNodes[h.focusOffset];
      p && p.contentEditable == "false" && (o = !0);
    }
    if (!(o || d && tt) && ke(a.node, a.offset, h.anchorNode, h.anchorOffset) && ke(l.node, l.offset, h.focusNode, h.focusOffset))
      return;
    let u = !1;
    if ((c.extend || t == e) && !(d && ft)) {
      c.collapse(a.node, a.offset);
      try {
        t != e && c.extend(l.node, l.offset), u = !0;
      } catch {
      }
    }
    if (!u) {
      if (t > e) {
        let f = a;
        a = l, l = f;
      }
      let p = document.createRange();
      p.setEnd(l.node, l.offset), p.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(p);
    }
  }
  ignoreMutation(t) {
    return !this.contentDOM && t.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(t, e) {
    for (let n = 0, o = 0; o < this.children.length; o++) {
      let i = this.children[o], s = n + i.size;
      if (n == s ? t <= s && e >= n : t < s && e > n) {
        let a = n + i.border, l = s - i.border;
        if (t >= a && e <= l) {
          this.dirty = t == n || e == s ? ce : Rs, t == a && e == l && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = Mt : i.markDirty(t - a, e - a);
          return;
        } else
          i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? ce : Mt;
      }
      n = s;
    }
    this.dirty = ce;
  }
  markParentsDirty() {
    let t = 1;
    for (let e = this.parent; e; e = e.parent, t++) {
      let n = t == 1 ? ce : Rs;
      e.dirty < n && (e.dirty = n);
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
  isText(t) {
    return !1;
  }
}
class Gl extends Ar {
  constructor(t, e, n, o) {
    let i, s = e.type.toDOM;
    if (typeof s == "function" && (s = s(n, () => {
      if (!i)
        return o;
      if (i.parent)
        return i.parent.posBeforeChild(i);
    })), !e.type.spec.raw) {
      if (s.nodeType != 1) {
        let a = document.createElement("span");
        a.appendChild(s), s = a;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(t, [], s, null), this.widget = e, this.widget = e, i = this;
  }
  matchesWidget(t) {
    return this.dirty == mt && t.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(t) {
    let e = this.widget.spec.stopEvent;
    return e ? e(t) : !1;
  }
  ignoreMutation(t) {
    return t.type != "selection" || this.widget.spec.ignoreSelection;
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
class Lu extends Ar {
  constructor(t, e, n, o) {
    super(t, [], e, null), this.textDOM = n, this.text = o;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(t, e) {
    return t != this.textDOM ? this.posAtStart + (e ? this.size : 0) : this.posAtStart + e;
  }
  domFromPos(t) {
    return { node: this.textDOM, offset: t };
  }
  ignoreMutation(t) {
    return t.type === "characterData" && t.target.nodeValue == t.oldValue;
  }
}
class we extends Ar {
  constructor(t, e, n, o, i) {
    super(t, [], n, o), this.mark = e, this.spec = i;
  }
  static create(t, e, n, o) {
    let i = o.nodeViews[e.type.name], s = i && i(e, o, n);
    return (!s || !s.dom) && (s = Se.renderSpec(document, e.type.spec.toDOM(e, n), null, e.attrs)), new we(t, e, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & Mt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(t) {
    return this.dirty != Mt && this.mark.eq(t);
  }
  markDirty(t, e) {
    if (super.markDirty(t, e), this.dirty != mt) {
      let n = this.parent;
      for (; !n.node; )
        n = n.parent;
      n.dirty < this.dirty && (n.dirty = this.dirty), this.dirty = mt;
    }
  }
  slice(t, e, n) {
    let o = we.create(this.parent, this.mark, !0, n), i = this.children, s = this.size;
    e < s && (i = Ro(i, e, s, n)), t > 0 && (i = Ro(i, 0, t, n));
    for (let a = 0; a < i.length; a++)
      i[a].parent = o;
    return o.children = i, o;
  }
  ignoreMutation(t) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : super.ignoreMutation(t);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class Jt extends Ar {
  constructor(t, e, n, o, i, s, a, l, c) {
    super(t, [], i, s), this.node = e, this.outerDeco = n, this.innerDeco = o, this.nodeDOM = a;
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
  static create(t, e, n, o, i, s) {
    let a = i.nodeViews[e.type.name], l, c = a && a(e, i, () => {
      if (!l)
        return s;
      if (l.parent)
        return l.parent.posBeforeChild(l);
    }, n, o), h = c && c.dom, d = c && c.contentDOM;
    if (e.isText) {
      if (!h)
        h = document.createTextNode(e.text);
      else if (h.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else h || ({ dom: h, contentDOM: d } = Se.renderSpec(document, e.type.spec.toDOM(e), null, e.attrs));
    !d && !e.isText && h.nodeName != "BR" && (h.hasAttribute("contenteditable") || (h.contentEditable = "false"), e.type.spec.draggable && (h.draggable = !0));
    let u = h;
    return h = Xl(h, n, e), c ? l = new _u(t, e, n, o, h, d || null, u, c, i, s + 1) : e.isText ? new zn(t, e, n, o, h, u, i) : new Jt(t, e, n, o, h, d || null, u, i, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let t = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (t.preserveWhitespace = "full"), !this.contentDOM)
      t.getContent = () => this.node.content;
    else if (!this.contentLost)
      t.contentElement = this.contentDOM;
    else {
      for (let e = this.children.length - 1; e >= 0; e--) {
        let n = this.children[e];
        if (this.dom.contains(n.dom.parentNode)) {
          t.contentElement = n.dom.parentNode;
          break;
        }
      }
      t.contentElement || (t.getContent = () => v.empty);
    }
    return t;
  }
  matchesNode(t, e, n) {
    return this.dirty == mt && t.eq(this.node) && cn(e, this.outerDeco) && n.eq(this.innerDeco);
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
  updateChildren(t, e) {
    let n = this.node.inlineContent, o = e, i = t.composing ? this.localCompositionInfo(t, e) : null, s = i && i.pos > -1 ? i : null, a = i && i.pos < 0, l = new Vu(this, s && s.node, t);
    Wu(this.node, this.innerDeco, (c, h, d) => {
      c.spec.marks ? l.syncToMarks(c.spec.marks, n, t) : c.type.side >= 0 && !d && l.syncToMarks(h == this.node.childCount ? D.none : this.node.child(h).marks, n, t), l.placeWidget(c, t, o);
    }, (c, h, d, u) => {
      l.syncToMarks(c.marks, n, t);
      let p;
      l.findNodeMatch(c, h, d, u) || a && t.state.selection.from > o && t.state.selection.to < o + c.nodeSize && (p = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(c, h, d, p, t) || l.updateNextNode(c, h, d, t, u, o) || l.addNode(c, h, d, t, o), o += c.nodeSize;
    }), l.syncToMarks([], n, t), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || this.dirty == ce) && (s && this.protectLocalComposition(t, s), Zl(this.contentDOM, this.children, t), Ue && Uu(this.dom));
  }
  localCompositionInfo(t, e) {
    let { from: n, to: o } = t.state.selection;
    if (!(t.state.selection instanceof C) || n < e || o > e + this.node.content.size)
      return null;
    let i = t.input.compositionNode;
    if (!i || !this.dom.contains(i.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = i.nodeValue, a = qu(this.node.content, s, n - e, o - e);
      return a < 0 ? null : { node: i, pos: a, text: s };
    } else
      return { node: i, pos: -1, text: "" };
  }
  protectLocalComposition(t, { node: e, pos: n, text: o }) {
    if (this.getDesc(e))
      return;
    let i = e;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      for (; i.previousSibling; )
        i.parentNode.removeChild(i.previousSibling);
      for (; i.nextSibling; )
        i.parentNode.removeChild(i.nextSibling);
      i.pmViewDesc && (i.pmViewDesc = void 0);
    }
    let s = new Lu(this, i, e, o);
    t.input.compositionNodes.push(s), this.children = Ro(this.children, n, n + o.length, t, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(t, e, n, o) {
    return this.dirty == Mt || !t.sameMarkup(this.node) ? !1 : (this.updateInner(t, e, n, o), !0);
  }
  updateInner(t, e, n, o) {
    this.updateOuterDeco(e), this.node = t, this.innerDeco = n, this.contentDOM && this.updateChildren(o, this.posAtStart), this.dirty = mt;
  }
  updateOuterDeco(t) {
    if (cn(t, this.outerDeco))
      return;
    let e = this.nodeDOM.nodeType != 1, n = this.dom;
    this.dom = Yl(this.dom, this.nodeDOM, Do(this.outerDeco, this.node, e), Do(t, this.node, e)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = t;
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
function zs(r, t, e, n, o) {
  Xl(n, t, r);
  let i = new Jt(void 0, r, t, e, n, n, n, o, 0);
  return i.contentDOM && i.updateChildren(o, 0), i;
}
class zn extends Jt {
  constructor(t, e, n, o, i, s, a) {
    super(t, e, n, o, i, null, s, a, 0);
  }
  parseRule() {
    let t = this.nodeDOM.parentNode;
    for (; t && t != this.dom && !t.pmIsDeco; )
      t = t.parentNode;
    return { skip: t || !0 };
  }
  update(t, e, n, o) {
    return this.dirty == Mt || this.dirty != mt && !this.inParent() || !t.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(e), (this.dirty != mt || t.text != this.node.text) && t.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = t.text, o.trackWrites == this.nodeDOM && (o.trackWrites = null)), this.node = t, this.dirty = mt, !0);
  }
  inParent() {
    let t = this.parent.contentDOM;
    for (let e = this.nodeDOM; e; e = e.parentNode)
      if (e == t)
        return !0;
    return !1;
  }
  domFromPos(t) {
    return { node: this.nodeDOM, offset: t };
  }
  localPosFromDOM(t, e, n) {
    return t == this.nodeDOM ? this.posAtStart + Math.min(e, this.node.text.length) : super.localPosFromDOM(t, e, n);
  }
  ignoreMutation(t) {
    return t.type != "characterData" && t.type != "selection";
  }
  slice(t, e, n) {
    let o = this.node.cut(t, e), i = document.createTextNode(o.text);
    return new zn(this.parent, o, this.outerDeco, this.innerDeco, i, i, n);
  }
  markDirty(t, e) {
    super.markDirty(t, e), this.dom != this.nodeDOM && (t == 0 || e == this.nodeDOM.nodeValue.length) && (this.dirty = Mt);
  }
  get domAtom() {
    return !1;
  }
  isText(t) {
    return this.node.text == t;
  }
}
class Kl extends Ar {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(t) {
    return this.dirty == mt && this.dom.nodeName == t;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class _u extends Jt {
  constructor(t, e, n, o, i, s, a, l, c, h) {
    super(t, e, n, o, i, s, a, c, h), this.spec = l;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(t, e, n, o) {
    if (this.dirty == Mt)
      return !1;
    if (this.spec.update && (this.node.type == t.type || this.spec.multiType)) {
      let i = this.spec.update(t, e, n);
      return i && this.updateInner(t, e, n, o), i;
    } else return !this.contentDOM && !t.isLeaf ? !1 : super.update(t, e, n, o);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(t, e, n, o) {
    this.spec.setSelection ? this.spec.setSelection(t, e, n.root) : super.setSelection(t, e, n, o);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(t) {
    return this.spec.stopEvent ? this.spec.stopEvent(t) : !1;
  }
  ignoreMutation(t) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : super.ignoreMutation(t);
  }
}
function Zl(r, t, e) {
  let n = r.firstChild, o = !1;
  for (let i = 0; i < t.length; i++) {
    let s = t[i], a = s.dom;
    if (a.parentNode == r) {
      for (; a != n; )
        n = Ps(n), o = !0;
      n = n.nextSibling;
    } else
      o = !0, r.insertBefore(a, n);
    if (s instanceof we) {
      let l = n ? n.previousSibling : r.lastChild;
      Zl(s.contentDOM, s.children, e), n = l ? l.nextSibling : r.firstChild;
    }
  }
  for (; n; )
    n = Ps(n), o = !0;
  o && e.trackWrites == r && (e.trackWrites = null);
}
const sr = function(r) {
  r && (this.nodeName = r);
};
sr.prototype = /* @__PURE__ */ Object.create(null);
const he = [new sr()];
function Do(r, t, e) {
  if (r.length == 0)
    return he;
  let n = e ? he[0] : new sr(), o = [n];
  for (let i = 0; i < r.length; i++) {
    let s = r[i].type.attrs;
    if (s) {
      s.nodeName && o.push(n = new sr(s.nodeName));
      for (let a in s) {
        let l = s[a];
        l != null && (e && o.length == 1 && o.push(n = new sr(t.isInline ? "span" : "div")), a == "class" ? n.class = (n.class ? n.class + " " : "") + l : a == "style" ? n.style = (n.style ? n.style + ";" : "") + l : a != "nodeName" && (n[a] = l));
      }
    }
  }
  return o;
}
function Yl(r, t, e, n) {
  if (e == he && n == he)
    return t;
  let o = t;
  for (let i = 0; i < n.length; i++) {
    let s = n[i], a = e[i];
    if (i) {
      let l;
      a && a.nodeName == s.nodeName && o != r && (l = o.parentNode) && l.nodeName.toLowerCase() == s.nodeName || (l = document.createElement(s.nodeName), l.pmIsDeco = !0, l.appendChild(o), a = he[0]), o = l;
    }
    Bu(o, a || he[0], s);
  }
  return o;
}
function Bu(r, t, e) {
  for (let n in t)
    n != "class" && n != "style" && n != "nodeName" && !(n in e) && r.removeAttribute(n);
  for (let n in e)
    n != "class" && n != "style" && n != "nodeName" && e[n] != t[n] && r.setAttribute(n, e[n]);
  if (t.class != e.class) {
    let n = t.class ? t.class.split(" ").filter(Boolean) : [], o = e.class ? e.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < n.length; i++)
      o.indexOf(n[i]) == -1 && r.classList.remove(n[i]);
    for (let i = 0; i < o.length; i++)
      n.indexOf(o[i]) == -1 && r.classList.add(o[i]);
    r.classList.length == 0 && r.removeAttribute("class");
  }
  if (t.style != e.style) {
    if (t.style) {
      let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, o;
      for (; o = n.exec(t.style); )
        r.style.removeProperty(o[1]);
    }
    e.style && (r.style.cssText += e.style);
  }
}
function Xl(r, t, e) {
  return Yl(r, r, he, Do(t, e, r.nodeType != 1));
}
function cn(r, t) {
  if (r.length != t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (!r[e].type.eq(t[e].type))
      return !1;
  return !0;
}
function Ps(r) {
  let t = r.nextSibling;
  return r.parentNode.removeChild(r), t;
}
class Vu {
  constructor(t, e, n) {
    this.lock = e, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = Hu(t.node.content, t);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(t, e) {
    if (t != e) {
      for (let n = t; n < e; n++)
        this.top.children[n].destroy();
      this.top.children.splice(t, e - t), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(t, e, n) {
    let o = 0, i = this.stack.length >> 1, s = Math.min(i, t.length);
    for (; o < s && (o == i - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(t[o]) && t[o].type.spec.spanning !== !1; )
      o++;
    for (; o < i; )
      this.destroyRest(), this.top.dirty = mt, this.index = this.stack.pop(), this.top = this.stack.pop(), i--;
    for (; i < t.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1;
      for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
        let c = this.top.children[l];
        if (c.matchesMark(t[i]) && !this.isLocked(c.dom)) {
          a = l;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let l = we.create(this.top, t[i], e, n);
        this.top.children.splice(this.index, 0, l), this.top = l, this.changed = !0;
      }
      this.index = 0, i++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(t, e, n, o) {
    let i = -1, s;
    if (o >= this.preMatch.index && (s = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && s.matchesNode(t, e, n))
      i = this.top.children.indexOf(s, this.index);
    else
      for (let a = this.index, l = Math.min(this.top.children.length, a + 5); a < l; a++) {
        let c = this.top.children[a];
        if (c.matchesNode(t, e, n) && !this.preMatch.matched.has(c)) {
          i = a;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(t, e, n, o, i) {
    let s = this.top.children[o];
    return s.dirty == Mt && s.dom == s.contentDOM && (s.dirty = ce), s.update(t, e, n, i) ? (this.destroyBetween(this.index, o), this.index++, !0) : !1;
  }
  findIndexWithChild(t) {
    for (; ; ) {
      let e = t.parentNode;
      if (!e)
        return -1;
      if (e == this.top.contentDOM) {
        let n = t.pmViewDesc;
        if (n) {
          for (let o = this.index; o < this.top.children.length; o++)
            if (this.top.children[o] == n)
              return o;
        }
        return -1;
      }
      t = e;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(t, e, n, o, i, s) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let l = this.top.children[a];
      if (l instanceof Jt) {
        let c = this.preMatch.matched.get(l);
        if (c != null && c != i)
          return !1;
        let h = l.dom, d, u = this.isLocked(h) && !(t.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == t.text && l.dirty != Mt && cn(e, l.outerDeco));
        if (!u && l.update(t, e, n, o))
          return this.destroyBetween(this.index, a), l.dom != h && (this.changed = !0), this.index++, !0;
        if (!u && (d = this.recreateWrapper(l, t, e, n, o, s)))
          return this.destroyBetween(this.index, a), this.top.children[this.index] = d, d.contentDOM && (d.dirty = ce, d.updateChildren(o, s + 1), d.dirty = mt), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(t, e, n, o, i, s) {
    if (t.dirty || e.isAtom || !t.children.length || !t.node.content.eq(e.content) || !cn(n, t.outerDeco) || !o.eq(t.innerDeco))
      return null;
    let a = Jt.create(this.top, e, n, o, i, s);
    if (a.contentDOM) {
      a.children = t.children, t.children = [];
      for (let l of a.children)
        l.parent = a;
    }
    return t.destroy(), a;
  }
  // Insert the node as a newly created node desc.
  addNode(t, e, n, o, i) {
    let s = Jt.create(this.top, t, e, n, o, i);
    s.contentDOM && s.updateChildren(o, i + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(t, e, n) {
    let o = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (o && o.matchesWidget(t) && (t == o.widget || !o.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let i = new Gl(this.top, t, e, n);
      this.top.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let t = this.top.children[this.index - 1], e = this.top;
    for (; t instanceof we; )
      e = t, t = e.children[e.children.length - 1];
    (!t || // Empty textblock
    !(t instanceof zn) || /\n$/.test(t.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(t.node.text)) && ((tt || Y) && t && t.dom.contentEditable == "false" && this.addHackNode("IMG", e), this.addHackNode("BR", this.top));
  }
  addHackNode(t, e) {
    if (e == this.top && this.index < e.children.length && e.children[this.index].matchesHack(t))
      this.index++;
    else {
      let n = document.createElement(t);
      t == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), t == "BR" && (n.className = "ProseMirror-trailingBreak");
      let o = new Kl(this.top, [], n, null);
      e != this.top ? e.children.push(o) : e.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  isLocked(t) {
    return this.lock && (t == this.lock || t.nodeType == 1 && t.contains(this.lock.parentNode));
  }
}
function Hu(r, t) {
  let e = t, n = e.children.length, o = r.childCount, i = /* @__PURE__ */ new Map(), s = [];
  t: for (; o > 0; ) {
    let a;
    for (; ; )
      if (n) {
        let c = e.children[n - 1];
        if (c instanceof we)
          e = c, n = c.children.length;
        else {
          a = c, n--;
          break;
        }
      } else {
        if (e == t)
          break t;
        n = e.parent.children.indexOf(e), e = e.parent;
      }
    let l = a.node;
    if (l) {
      if (l != r.child(o - 1))
        break;
      --o, i.set(a, o), s.push(a);
    }
  }
  return { index: o, matched: i, matches: s.reverse() };
}
function Fu(r, t) {
  return r.type.side - t.type.side;
}
function Wu(r, t, e, n) {
  let o = t.locals(r), i = 0;
  if (o.length == 0) {
    for (let c = 0; c < r.childCount; c++) {
      let h = r.child(c);
      n(h, o, t.forChild(i, h), c), i += h.nodeSize;
    }
    return;
  }
  let s = 0, a = [], l = null;
  for (let c = 0; ; ) {
    let h, d;
    for (; s < o.length && o[s].to == i; ) {
      let b = o[s++];
      b.widget && (h ? (d || (d = [h])).push(b) : h = b);
    }
    if (h)
      if (d) {
        d.sort(Fu);
        for (let b = 0; b < d.length; b++)
          e(d[b], c, !!l);
      } else
        e(h, c, !!l);
    let u, p;
    if (l)
      p = -1, u = l, l = null;
    else if (c < r.childCount)
      p = c, u = r.child(c++);
    else
      break;
    for (let b = 0; b < a.length; b++)
      a[b].to <= i && a.splice(b--, 1);
    for (; s < o.length && o[s].from <= i && o[s].to > i; )
      a.push(o[s++]);
    let f = i + u.nodeSize;
    if (u.isText) {
      let b = f;
      s < o.length && o[s].from < b && (b = o[s].from);
      for (let y = 0; y < a.length; y++)
        a[y].to < b && (b = a[y].to);
      b < f && (l = u.cut(b - i), u = u.cut(0, b - i), f = b, p = -1);
    } else
      for (; s < o.length && o[s].to < f; )
        s++;
    let g = u.isInline && !u.isLeaf ? a.filter((b) => !b.inline) : a.slice();
    n(u, g, t.forChild(i, u), p), i = f;
  }
}
function Uu(r) {
  if (r.nodeName == "UL" || r.nodeName == "OL") {
    let t = r.style.cssText;
    r.style.cssText = t + "; list-style: square !important", window.getComputedStyle(r).listStyle, r.style.cssText = t;
  }
}
function qu(r, t, e, n) {
  for (let o = 0, i = 0; o < r.childCount && i <= n; ) {
    let s = r.child(o++), a = i;
    if (i += s.nodeSize, !s.isText)
      continue;
    let l = s.text;
    for (; o < r.childCount; ) {
      let c = r.child(o++);
      if (i += c.nodeSize, !c.isText)
        break;
      l += c.text;
    }
    if (i >= e) {
      if (i >= n && l.slice(n - t.length - a, n - a) == t)
        return n - t.length;
      let c = a < n ? l.lastIndexOf(t, n - a - 1) : -1;
      if (c >= 0 && c + t.length + a >= e)
        return a + c;
      if (e == n && l.length >= n + t.length - a && l.slice(n - a, n - a + t.length) == t)
        return n;
    }
  }
  return -1;
}
function Ro(r, t, e, n, o) {
  let i = [];
  for (let s = 0, a = 0; s < r.length; s++) {
    let l = r[s], c = a, h = a += l.size;
    c >= e || h <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, n)), o && (i.push(o), o = void 0), h > e && i.push(l.slice(e - c, l.size, n)));
  }
  return i;
}
function mi(r, t = null) {
  let e = r.domSelectionRange(), n = r.state.doc;
  if (!e.focusNode)
    return null;
  let o = r.docView.nearestDesc(e.focusNode), i = o && o.size == 0, s = r.docView.posFromDOM(e.focusNode, e.focusOffset, 1);
  if (s < 0)
    return null;
  let a = n.resolve(s), l, c;
  if (Rn(e)) {
    for (l = s; o && !o.node; )
      o = o.parent;
    let d = o.node;
    if (o && d.isAtom && S.isSelectable(d) && o.parent && !(d.isInline && yu(e.focusNode, e.focusOffset, o.dom))) {
      let u = o.posBefore;
      c = new S(s == u ? a : n.resolve(u));
    }
  } else {
    if (e instanceof r.dom.ownerDocument.defaultView.Selection && e.rangeCount > 1) {
      let d = s, u = s;
      for (let p = 0; p < e.rangeCount; p++) {
        let f = e.getRangeAt(p);
        d = Math.min(d, r.docView.posFromDOM(f.startContainer, f.startOffset, 1)), u = Math.max(u, r.docView.posFromDOM(f.endContainer, f.endOffset, -1));
      }
      if (d < 0)
        return null;
      [l, s] = u == r.state.selection.anchor ? [u, d] : [d, u], a = n.resolve(s);
    } else
      l = r.docView.posFromDOM(e.anchorNode, e.anchorOffset, 1);
    if (l < 0)
      return null;
  }
  let h = n.resolve(l);
  if (!c) {
    let d = t == "pointer" || r.state.selection.head < a.pos && !i ? 1 : -1;
    c = gi(r, h, a, d);
  }
  return c;
}
function Ql(r) {
  return r.editable ? r.hasFocus() : ec(r) && document.activeElement && document.activeElement.contains(r.dom);
}
function Dt(r, t = !1) {
  let e = r.state.selection;
  if (tc(r, e), !!Ql(r)) {
    if (!t && r.input.mouseDown && r.input.mouseDown.allowDefault && Y) {
      let n = r.domSelectionRange(), o = r.domObserver.currentSelection;
      if (n.anchorNode && o.anchorNode && ke(n.anchorNode, n.anchorOffset, o.anchorNode, o.anchorOffset)) {
        r.input.mouseDown.delayedSelectionSync = !0, r.domObserver.setCurSelection();
        return;
      }
    }
    if (r.domObserver.disconnectSelection(), r.cursorWrapper)
      Gu(r);
    else {
      let { anchor: n, head: o } = e, i, s;
      js && !(e instanceof C) && (e.$from.parent.inlineContent || (i = Ls(r, e.from)), !e.empty && !e.$from.parent.inlineContent && (s = Ls(r, e.to))), r.docView.setSelection(n, o, r, t), js && (i && _s(i), s && _s(s)), e.visible ? r.dom.classList.remove("ProseMirror-hideselection") : (r.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ju(r));
    }
    r.domObserver.setCurSelection(), r.domObserver.connectSelection();
  }
}
const js = tt || Y && Vl < 63;
function Ls(r, t) {
  let { node: e, offset: n } = r.docView.domFromPos(t, 0), o = n < e.childNodes.length ? e.childNodes[n] : null, i = n ? e.childNodes[n - 1] : null;
  if (tt && o && o.contentEditable == "false")
    return ao(o);
  if ((!o || o.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (o)
      return ao(o);
    if (i)
      return ao(i);
  }
}
function ao(r) {
  return r.contentEditable = "true", tt && r.draggable && (r.draggable = !1, r.wasDraggable = !0), r;
}
function _s(r) {
  r.contentEditable = "false", r.wasDraggable && (r.draggable = !0, r.wasDraggable = null);
}
function Ju(r) {
  let t = r.dom.ownerDocument;
  t.removeEventListener("selectionchange", r.input.hideSelectionGuard);
  let e = r.domSelectionRange(), n = e.anchorNode, o = e.anchorOffset;
  t.addEventListener("selectionchange", r.input.hideSelectionGuard = () => {
    (e.anchorNode != n || e.anchorOffset != o) && (t.removeEventListener("selectionchange", r.input.hideSelectionGuard), setTimeout(() => {
      (!Ql(r) || r.state.selection.visible) && r.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Gu(r) {
  let t = r.domSelection();
  if (!t)
    return;
  let e = r.cursorWrapper.dom, n = e.nodeName == "IMG";
  n ? t.collapse(e.parentNode, G(e) + 1) : t.collapse(e, 0), !n && !r.state.selection.visible && nt && qt <= 11 && (e.disabled = !0, e.disabled = !1);
}
function tc(r, t) {
  if (t instanceof S) {
    let e = r.docView.descAt(t.from);
    e != r.lastSelectedViewDesc && (Bs(r), e && e.selectNode(), r.lastSelectedViewDesc = e);
  } else
    Bs(r);
}
function Bs(r) {
  r.lastSelectedViewDesc && (r.lastSelectedViewDesc.parent && r.lastSelectedViewDesc.deselectNode(), r.lastSelectedViewDesc = void 0);
}
function gi(r, t, e, n) {
  return r.someProp("createSelectionBetween", (o) => o(r, t, e)) || C.between(t, e, n);
}
function Vs(r) {
  return r.editable && !r.hasFocus() ? !1 : ec(r);
}
function ec(r) {
  let t = r.domSelectionRange();
  if (!t.anchorNode)
    return !1;
  try {
    return r.dom.contains(t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode) && (r.editable || r.dom.contains(t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode));
  } catch {
    return !1;
  }
}
function Ku(r) {
  let t = r.docView.domFromPos(r.state.selection.anchor, 0), e = r.domSelectionRange();
  return ke(t.node, t.offset, e.anchorNode, e.anchorOffset);
}
function zo(r, t) {
  let { $anchor: e, $head: n } = r.selection, o = t > 0 ? e.max(n) : e.min(n), i = o.parent.inlineContent ? o.depth ? r.doc.resolve(t > 0 ? o.after() : o.before()) : null : o;
  return i && A.findFrom(i, t);
}
function Lt(r, t) {
  return r.dispatch(r.state.tr.setSelection(t).scrollIntoView()), !0;
}
function Hs(r, t, e) {
  let n = r.state.selection;
  if (n instanceof C)
    if (e.indexOf("s") > -1) {
      let { $head: o } = n, i = o.textOffset ? null : t < 0 ? o.nodeBefore : o.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let s = r.state.doc.resolve(o.pos + i.nodeSize * (t < 0 ? -1 : 1));
      return Lt(r, new C(n.$anchor, s));
    } else if (n.empty) {
      if (r.endOfTextblock(t > 0 ? "forward" : "backward")) {
        let o = zo(r.state, t);
        return o && o instanceof S ? Lt(r, o) : !1;
      } else if (!(ut && e.indexOf("m") > -1)) {
        let o = n.$head, i = o.textOffset ? null : t < 0 ? o.nodeBefore : o.nodeAfter, s;
        if (!i || i.isText)
          return !1;
        let a = t < 0 ? o.pos - i.nodeSize : o.pos;
        return i.isAtom || (s = r.docView.descAt(a)) && !s.contentDOM ? S.isSelectable(i) ? Lt(r, new S(t < 0 ? r.state.doc.resolve(o.pos - i.nodeSize) : o)) : Or ? Lt(r, new C(r.state.doc.resolve(t < 0 ? a : a + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (n instanceof S && n.node.isInline)
      return Lt(r, new C(t > 0 ? n.$to : n.$from));
    {
      let o = zo(r.state, t);
      return o ? Lt(r, o) : !1;
    }
  }
}
function hn(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
function ar(r, t) {
  let e = r.pmViewDesc;
  return e && e.size == 0 && (t < 0 || r.nextSibling || r.nodeName != "BR");
}
function Ae(r, t) {
  return t < 0 ? Zu(r) : Yu(r);
}
function Zu(r) {
  let t = r.domSelectionRange(), e = t.focusNode, n = t.focusOffset;
  if (!e)
    return;
  let o, i, s = !1;
  for (ft && e.nodeType == 1 && n < hn(e) && ar(e.childNodes[n], -1) && (s = !0); ; )
    if (n > 0) {
      if (e.nodeType != 1)
        break;
      {
        let a = e.childNodes[n - 1];
        if (ar(a, -1))
          o = e, i = --n;
        else if (a.nodeType == 3)
          e = a, n = e.nodeValue.length;
        else
          break;
      }
    } else {
      if (rc(e))
        break;
      {
        let a = e.previousSibling;
        for (; a && ar(a, -1); )
          o = e.parentNode, i = G(a), a = a.previousSibling;
        if (a)
          e = a, n = hn(e);
        else {
          if (e = e.parentNode, e == r.dom)
            break;
          n = 0;
        }
      }
    }
  s ? Po(r, e, n) : o && Po(r, o, i);
}
function Yu(r) {
  let t = r.domSelectionRange(), e = t.focusNode, n = t.focusOffset;
  if (!e)
    return;
  let o = hn(e), i, s;
  for (; ; )
    if (n < o) {
      if (e.nodeType != 1)
        break;
      let a = e.childNodes[n];
      if (ar(a, 1))
        i = e, s = ++n;
      else
        break;
    } else {
      if (rc(e))
        break;
      {
        let a = e.nextSibling;
        for (; a && ar(a, 1); )
          i = a.parentNode, s = G(a) + 1, a = a.nextSibling;
        if (a)
          e = a, n = 0, o = hn(e);
        else {
          if (e = e.parentNode, e == r.dom)
            break;
          n = o = 0;
        }
      }
    }
  i && Po(r, i, s);
}
function rc(r) {
  let t = r.pmViewDesc;
  return t && t.node && t.node.isBlock;
}
function Xu(r, t) {
  for (; r && t == r.childNodes.length && !Tr(r); )
    t = G(r) + 1, r = r.parentNode;
  for (; r && t < r.childNodes.length; ) {
    let e = r.childNodes[t];
    if (e.nodeType == 3)
      return e;
    if (e.nodeType == 1 && e.contentEditable == "false")
      break;
    r = e, t = 0;
  }
}
function Qu(r, t) {
  for (; r && !t && !Tr(r); )
    t = G(r), r = r.parentNode;
  for (; r && t; ) {
    let e = r.childNodes[t - 1];
    if (e.nodeType == 3)
      return e;
    if (e.nodeType == 1 && e.contentEditable == "false")
      break;
    r = e, t = r.childNodes.length;
  }
}
function Po(r, t, e) {
  if (t.nodeType != 3) {
    let i, s;
    (s = Xu(t, e)) ? (t = s, e = 0) : (i = Qu(t, e)) && (t = i, e = i.nodeValue.length);
  }
  let n = r.domSelection();
  if (!n)
    return;
  if (Rn(n)) {
    let i = document.createRange();
    i.setEnd(t, e), i.setStart(t, e), n.removeAllRanges(), n.addRange(i);
  } else n.extend && n.extend(t, e);
  r.domObserver.setCurSelection();
  let { state: o } = r;
  setTimeout(() => {
    r.state == o && Dt(r);
  }, 50);
}
function Fs(r, t) {
  let e = r.state.doc.resolve(t);
  if (!(Y || wu) && e.parent.inlineContent) {
    let n = r.coordsAtPos(t);
    if (t > e.start()) {
      let o = r.coordsAtPos(t - 1), i = (o.top + o.bottom) / 2;
      if (i > n.top && i < n.bottom && Math.abs(o.left - n.left) > 1)
        return o.left < n.left ? "ltr" : "rtl";
    }
    if (t < e.end()) {
      let o = r.coordsAtPos(t + 1), i = (o.top + o.bottom) / 2;
      if (i > n.top && i < n.bottom && Math.abs(o.left - n.left) > 1)
        return o.left > n.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(r.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ws(r, t, e) {
  let n = r.state.selection;
  if (n instanceof C && !n.empty || e.indexOf("s") > -1 || ut && e.indexOf("m") > -1)
    return !1;
  let { $from: o, $to: i } = n;
  if (!o.parent.inlineContent || r.endOfTextblock(t < 0 ? "up" : "down")) {
    let s = zo(r.state, t);
    if (s && s instanceof S)
      return Lt(r, s);
  }
  if (!o.parent.inlineContent) {
    let s = t < 0 ? o : i, a = n instanceof ct ? A.near(s, t) : A.findFrom(s, t);
    return a ? Lt(r, a) : !1;
  }
  return !1;
}
function Us(r, t) {
  if (!(r.state.selection instanceof C))
    return !0;
  let { $head: e, $anchor: n, empty: o } = r.state.selection;
  if (!e.sameParent(n))
    return !0;
  if (!o)
    return !1;
  if (r.endOfTextblock(t > 0 ? "forward" : "backward"))
    return !0;
  let i = !e.textOffset && (t < 0 ? e.nodeBefore : e.nodeAfter);
  if (i && !i.isText) {
    let s = r.state.tr;
    return t < 0 ? s.delete(e.pos - i.nodeSize, e.pos) : s.delete(e.pos, e.pos + i.nodeSize), r.dispatch(s), !0;
  }
  return !1;
}
function qs(r, t, e) {
  r.domObserver.stop(), t.contentEditable = e, r.domObserver.start();
}
function tp(r) {
  if (!tt || r.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: t, focusOffset: e } = r.domSelectionRange();
  if (t && t.nodeType == 1 && e == 0 && t.firstChild && t.firstChild.contentEditable == "false") {
    let n = t.firstChild;
    qs(r, n, "true"), setTimeout(() => qs(r, n, "false"), 20);
  }
  return !1;
}
function ep(r) {
  let t = "";
  return r.ctrlKey && (t += "c"), r.metaKey && (t += "m"), r.altKey && (t += "a"), r.shiftKey && (t += "s"), t;
}
function rp(r, t) {
  let e = t.keyCode, n = ep(t);
  if (e == 8 || ut && e == 72 && n == "c")
    return Us(r, -1) || Ae(r, -1);
  if (e == 46 && !t.shiftKey || ut && e == 68 && n == "c")
    return Us(r, 1) || Ae(r, 1);
  if (e == 13 || e == 27)
    return !0;
  if (e == 37 || ut && e == 66 && n == "c") {
    let o = e == 37 ? Fs(r, r.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Hs(r, o, n) || Ae(r, o);
  } else if (e == 39 || ut && e == 70 && n == "c") {
    let o = e == 39 ? Fs(r, r.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Hs(r, o, n) || Ae(r, o);
  } else {
    if (e == 38 || ut && e == 80 && n == "c")
      return Ws(r, -1, n) || Ae(r, -1);
    if (e == 40 || ut && e == 78 && n == "c")
      return tp(r) || Ws(r, 1, n) || Ae(r, 1);
    if (n == (ut ? "m" : "c") && (e == 66 || e == 73 || e == 89 || e == 90))
      return !0;
  }
  return !1;
}
function bi(r, t) {
  r.someProp("transformCopied", (p) => {
    t = p(t, r);
  });
  let e = [], { content: n, openStart: o, openEnd: i } = t;
  for (; o > 1 && i > 1 && n.childCount == 1 && n.firstChild.childCount == 1; ) {
    o--, i--;
    let p = n.firstChild;
    e.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), n = p.content;
  }
  let s = r.someProp("clipboardSerializer") || Se.fromSchema(r.state.schema), a = lc(), l = a.createElement("div");
  l.appendChild(s.serializeFragment(n, { document: a }));
  let c = l.firstChild, h, d = 0;
  for (; c && c.nodeType == 1 && (h = ac[c.nodeName.toLowerCase()]); ) {
    for (let p = h.length - 1; p >= 0; p--) {
      let f = a.createElement(h[p]);
      for (; l.firstChild; )
        f.appendChild(l.firstChild);
      l.appendChild(f), d++;
    }
    c = l.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${o} ${i}${d ? ` -${d}` : ""} ${JSON.stringify(e)}`);
  let u = r.someProp("clipboardTextSerializer", (p) => p(t, r)) || t.content.textBetween(0, t.content.size, `

`);
  return { dom: l, text: u, slice: t };
}
function nc(r, t, e, n, o) {
  let i = o.parent.type.spec.code, s, a;
  if (!e && !t)
    return null;
  let l = !!t && (n || i || !e);
  if (l) {
    if (r.someProp("transformPastedText", (u) => {
      t = u(t, i || n, r);
    }), i)
      return a = new k(v.from(r.state.schema.text(t.replace(/\r\n?/g, `
`))), 0, 0), r.someProp("transformPasted", (u) => {
        a = u(a, r, !0);
      }), a;
    let d = r.someProp("clipboardTextParser", (u) => u(t, o, n, r));
    if (d)
      a = d;
    else {
      let u = o.marks(), { schema: p } = r.state, f = Se.fromSchema(p);
      s = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let b = s.appendChild(document.createElement("p"));
        g && b.appendChild(f.serializeNode(p.text(g, u)));
      });
    }
  } else
    r.someProp("transformPastedHTML", (d) => {
      e = d(e, r);
    }), s = sp(e), Or && ap(s);
  let c = s && s.querySelector("[data-pm-slice]"), h = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (h && h[3])
    for (let d = +h[3]; d > 0; d--) {
      let u = s.firstChild;
      for (; u && u.nodeType != 1; )
        u = u.nextSibling;
      if (!u)
        break;
      s = u;
    }
  if (a || (a = (r.someProp("clipboardParser") || r.someProp("domParser") || Ut.fromSchema(r.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(l || h),
    context: o,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !np.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), h)
    a = lp(Js(a, +h[1], +h[2]), h[4]);
  else if (a = k.maxOpen(op(a.content, o), !0), a.openStart || a.openEnd) {
    let d = 0, u = 0;
    for (let p = a.content.firstChild; d < a.openStart && !p.type.spec.isolating; d++, p = p.firstChild)
      ;
    for (let p = a.content.lastChild; u < a.openEnd && !p.type.spec.isolating; u++, p = p.lastChild)
      ;
    a = Js(a, d, u);
  }
  return r.someProp("transformPasted", (d) => {
    a = d(a, r, l);
  }), a;
}
const np = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function op(r, t) {
  if (r.childCount < 2)
    return r;
  for (let e = t.depth; e >= 0; e--) {
    let n = t.node(e).contentMatchAt(t.index(e)), o, i = [];
    if (r.forEach((s) => {
      if (!i)
        return;
      let a = n.findWrapping(s.type), l;
      if (!a)
        return i = null;
      if (l = i.length && o.length && ic(a, o, s, i[i.length - 1], 0))
        i[i.length - 1] = l;
      else {
        i.length && (i[i.length - 1] = sc(i[i.length - 1], o.length));
        let c = oc(s, a);
        i.push(c), n = n.matchType(c.type), o = a;
      }
    }), i)
      return v.from(i);
  }
  return r;
}
function oc(r, t, e = 0) {
  for (let n = t.length - 1; n >= e; n--)
    r = t[n].create(null, v.from(r));
  return r;
}
function ic(r, t, e, n, o) {
  if (o < r.length && o < t.length && r[o] == t[o]) {
    let i = ic(r, t, e, n.lastChild, o + 1);
    if (i)
      return n.copy(n.content.replaceChild(n.childCount - 1, i));
    if (n.contentMatchAt(n.childCount).matchType(o == r.length - 1 ? e.type : r[o + 1]))
      return n.copy(n.content.append(v.from(oc(e, r, o + 1))));
  }
}
function sc(r, t) {
  if (t == 0)
    return r;
  let e = r.content.replaceChild(r.childCount - 1, sc(r.lastChild, t - 1)), n = r.contentMatchAt(r.childCount).fillBefore(v.empty, !0);
  return r.copy(e.append(n));
}
function jo(r, t, e, n, o, i) {
  let s = t < 0 ? r.firstChild : r.lastChild, a = s.content;
  return r.childCount > 1 && (i = 0), o < n - 1 && (a = jo(a, t, e, n, o + 1, i)), o >= e && (a = t < 0 ? s.contentMatchAt(0).fillBefore(a, i <= o).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(v.empty, !0))), r.replaceChild(t < 0 ? 0 : r.childCount - 1, s.copy(a));
}
function Js(r, t, e) {
  return t < r.openStart && (r = new k(jo(r.content, -1, t, r.openStart, 0, r.openEnd), t, r.openEnd)), e < r.openEnd && (r = new k(jo(r.content, 1, e, r.openEnd, 0, 0), r.openStart, e)), r;
}
const ac = {
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
let Gs = null;
function lc() {
  return Gs || (Gs = document.implementation.createHTMLDocument("title"));
}
let lo = null;
function ip(r) {
  let t = window.trustedTypes;
  return t ? (lo || (lo = t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e })), lo.createHTML(r)) : r;
}
function sp(r) {
  let t = /^(\s*<meta [^>]*>)*/.exec(r);
  t && (r = r.slice(t[0].length));
  let e = lc().createElement("div"), n = /<([a-z][^>\s]+)/i.exec(r), o;
  if ((o = n && ac[n[1].toLowerCase()]) && (r = o.map((i) => "<" + i + ">").join("") + r + o.map((i) => "</" + i + ">").reverse().join("")), e.innerHTML = ip(r), o)
    for (let i = 0; i < o.length; i++)
      e = e.querySelector(o[i]) || e;
  return e;
}
function ap(r) {
  let t = r.querySelectorAll(Y ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    n.childNodes.length == 1 && n.textContent == " " && n.parentNode && n.parentNode.replaceChild(r.ownerDocument.createTextNode(" "), n);
  }
}
function lp(r, t) {
  if (!r.size)
    return r;
  let e = r.content.firstChild.type.schema, n;
  try {
    n = JSON.parse(t);
  } catch {
    return r;
  }
  let { content: o, openStart: i, openEnd: s } = r;
  for (let a = n.length - 2; a >= 0; a -= 2) {
    let l = e.nodes[n[a]];
    if (!l || l.hasRequiredAttrs())
      break;
    o = v.from(l.create(n[a + 1], o)), i++, s++;
  }
  return new k(o, i, s);
}
const et = {}, rt = {}, cp = { touchstart: !0, touchmove: !0 };
class hp {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function dp(r) {
  for (let t in et) {
    let e = et[t];
    r.dom.addEventListener(t, r.input.eventHandlers[t] = (n) => {
      pp(r, n) && !yi(r, n) && (r.editable || !(n.type in rt)) && e(r, n);
    }, cp[t] ? { passive: !0 } : void 0);
  }
  tt && r.dom.addEventListener("input", () => null), Lo(r);
}
function Wt(r, t) {
  r.input.lastSelectionOrigin = t, r.input.lastSelectionTime = Date.now();
}
function up(r) {
  r.domObserver.stop();
  for (let t in r.input.eventHandlers)
    r.dom.removeEventListener(t, r.input.eventHandlers[t]);
  clearTimeout(r.input.composingTimeout), clearTimeout(r.input.lastIOSEnterFallbackTimeout);
}
function Lo(r) {
  r.someProp("handleDOMEvents", (t) => {
    for (let e in t)
      r.input.eventHandlers[e] || r.dom.addEventListener(e, r.input.eventHandlers[e] = (n) => yi(r, n));
  });
}
function yi(r, t) {
  return r.someProp("handleDOMEvents", (e) => {
    let n = e[t.type];
    return n ? n(r, t) || t.defaultPrevented : !1;
  });
}
function pp(r, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target; e != r.dom; e = e.parentNode)
    if (!e || e.nodeType == 11 || e.pmViewDesc && e.pmViewDesc.stopEvent(t))
      return !1;
  return !0;
}
function fp(r, t) {
  !yi(r, t) && et[t.type] && (r.editable || !(t.type in rt)) && et[t.type](r, t);
}
rt.keydown = (r, t) => {
  let e = t;
  if (r.input.shiftKey = e.keyCode == 16 || e.shiftKey, !hc(r, e) && (r.input.lastKeyCode = e.keyCode, r.input.lastKeyCodeTime = Date.now(), !(Nt && Y && e.keyCode == 13)))
    if (e.keyCode != 229 && r.domObserver.forceFlush(), Ue && e.keyCode == 13 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      let n = Date.now();
      r.input.lastIOSEnter = n, r.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        r.input.lastIOSEnter == n && (r.someProp("handleKeyDown", (o) => o(r, le(13, "Enter"))), r.input.lastIOSEnter = 0);
      }, 200);
    } else r.someProp("handleKeyDown", (n) => n(r, e)) || rp(r, e) ? e.preventDefault() : Wt(r, "key");
};
rt.keyup = (r, t) => {
  t.keyCode == 16 && (r.input.shiftKey = !1);
};
rt.keypress = (r, t) => {
  let e = t;
  if (hc(r, e) || !e.charCode || e.ctrlKey && !e.altKey || ut && e.metaKey)
    return;
  if (r.someProp("handleKeyPress", (o) => o(r, e))) {
    e.preventDefault();
    return;
  }
  let n = r.state.selection;
  if (!(n instanceof C) || !n.$from.sameParent(n.$to)) {
    let o = String.fromCharCode(e.charCode), i = () => r.state.tr.insertText(o).scrollIntoView();
    !/[\r\n]/.test(o) && !r.someProp("handleTextInput", (s) => s(r, n.$from.pos, n.$to.pos, o, i)) && r.dispatch(i()), e.preventDefault();
  }
};
function Pn(r) {
  return { left: r.clientX, top: r.clientY };
}
function mp(r, t) {
  let e = t.x - r.clientX, n = t.y - r.clientY;
  return e * e + n * n < 100;
}
function vi(r, t, e, n, o) {
  if (n == -1)
    return !1;
  let i = r.state.doc.resolve(n);
  for (let s = i.depth + 1; s > 0; s--)
    if (r.someProp(t, (a) => s > i.depth ? a(r, e, i.nodeAfter, i.before(s), o, !0) : a(r, e, i.node(s), i.before(s), o, !1)))
      return !0;
  return !1;
}
function Be(r, t, e) {
  if (r.focused || r.focus(), r.state.selection.eq(t))
    return;
  let n = r.state.tr.setSelection(t);
  n.setMeta("pointer", !0), r.dispatch(n);
}
function gp(r, t) {
  if (t == -1)
    return !1;
  let e = r.state.doc.resolve(t), n = e.nodeAfter;
  return n && n.isAtom && S.isSelectable(n) ? (Be(r, new S(e)), !0) : !1;
}
function bp(r, t) {
  if (t == -1)
    return !1;
  let e = r.state.selection, n, o;
  e instanceof S && (n = e.node);
  let i = r.state.doc.resolve(t);
  for (let s = i.depth + 1; s > 0; s--) {
    let a = s > i.depth ? i.nodeAfter : i.node(s);
    if (S.isSelectable(a)) {
      n && e.$from.depth > 0 && s >= e.$from.depth && i.before(e.$from.depth + 1) == e.$from.pos ? o = i.before(e.$from.depth) : o = i.before(s);
      break;
    }
  }
  return o != null ? (Be(r, S.create(r.state.doc, o)), !0) : !1;
}
function yp(r, t, e, n, o) {
  return vi(r, "handleClickOn", t, e, n) || r.someProp("handleClick", (i) => i(r, t, n)) || (o ? bp(r, e) : gp(r, e));
}
function vp(r, t, e, n) {
  return vi(r, "handleDoubleClickOn", t, e, n) || r.someProp("handleDoubleClick", (o) => o(r, t, n));
}
function kp(r, t, e, n) {
  return vi(r, "handleTripleClickOn", t, e, n) || r.someProp("handleTripleClick", (o) => o(r, t, n)) || wp(r, e, n);
}
function wp(r, t, e) {
  if (e.button != 0)
    return !1;
  let n = r.state.doc;
  if (t == -1)
    return n.inlineContent ? (Be(r, C.create(n, 0, n.content.size)), !0) : !1;
  let o = n.resolve(t);
  for (let i = o.depth + 1; i > 0; i--) {
    let s = i > o.depth ? o.nodeAfter : o.node(i), a = o.before(i);
    if (s.inlineContent)
      Be(r, C.create(n, a + 1, a + 1 + s.content.size));
    else if (S.isSelectable(s))
      Be(r, S.create(n, a));
    else
      continue;
    return !0;
  }
}
function ki(r) {
  return dn(r);
}
const cc = ut ? "metaKey" : "ctrlKey";
et.mousedown = (r, t) => {
  let e = t;
  r.input.shiftKey = e.shiftKey;
  let n = ki(r), o = Date.now(), i = "singleClick";
  o - r.input.lastClick.time < 500 && mp(e, r.input.lastClick) && !e[cc] && r.input.lastClick.button == e.button && (r.input.lastClick.type == "singleClick" ? i = "doubleClick" : r.input.lastClick.type == "doubleClick" && (i = "tripleClick")), r.input.lastClick = { time: o, x: e.clientX, y: e.clientY, type: i, button: e.button };
  let s = r.posAtCoords(Pn(e));
  s && (i == "singleClick" ? (r.input.mouseDown && r.input.mouseDown.done(), r.input.mouseDown = new xp(r, s, e, !!n)) : (i == "doubleClick" ? vp : kp)(r, s.pos, s.inside, e) ? e.preventDefault() : Wt(r, "pointer"));
};
class xp {
  constructor(t, e, n, o) {
    this.view = t, this.pos = e, this.event = n, this.flushed = o, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!n[cc], this.allowDefault = n.shiftKey;
    let i, s;
    if (e.inside > -1)
      i = t.state.doc.nodeAt(e.inside), s = e.inside;
    else {
      let h = t.state.doc.resolve(e.pos);
      i = h.parent, s = h.depth ? h.before() : 0;
    }
    const a = o ? null : n.target, l = a ? t.docView.nearestDesc(a, !0) : null;
    this.target = l && l.nodeDOM.nodeType == 1 ? l.nodeDOM : null;
    let { selection: c } = t.state;
    (n.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof S && c.from <= s && c.to > s) && (this.mightDrag = {
      node: i,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ft && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), Wt(t, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Dt(this.view)), this.view.input.mouseDown = null;
  }
  up(t) {
    if (this.done(), !this.view.dom.contains(t.target))
      return;
    let e = this.pos;
    this.view.state.doc != this.startDoc && (e = this.view.posAtCoords(Pn(t))), this.updateAllowDefault(t), this.allowDefault || !e ? Wt(this.view, "pointer") : yp(this.view, e.pos, e.inside, t, this.selectNode) ? t.preventDefault() : t.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    tt && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Y && !this.view.state.selection.visible && Math.min(Math.abs(e.pos - this.view.state.selection.from), Math.abs(e.pos - this.view.state.selection.to)) <= 2) ? (Be(this.view, A.near(this.view.state.doc.resolve(e.pos))), t.preventDefault()) : Wt(this.view, "pointer");
  }
  move(t) {
    this.updateAllowDefault(t), Wt(this.view, "pointer"), t.buttons == 0 && this.done();
  }
  updateAllowDefault(t) {
    !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0);
  }
}
et.touchstart = (r) => {
  r.input.lastTouch = Date.now(), ki(r), Wt(r, "pointer");
};
et.touchmove = (r) => {
  r.input.lastTouch = Date.now(), Wt(r, "pointer");
};
et.contextmenu = (r) => ki(r);
function hc(r, t) {
  return r.composing ? !0 : tt && Math.abs(t.timeStamp - r.input.compositionEndedAt) < 500 ? (r.input.compositionEndedAt = -2e8, !0) : !1;
}
const $p = Nt ? 5e3 : -1;
rt.compositionstart = rt.compositionupdate = (r) => {
  if (!r.composing) {
    r.domObserver.flush();
    let { state: t } = r, e = t.selection.$to;
    if (t.selection instanceof C && (t.storedMarks || !e.textOffset && e.parentOffset && e.nodeBefore.marks.some((n) => n.type.spec.inclusive === !1)))
      r.markCursor = r.state.storedMarks || e.marks(), dn(r, !0), r.markCursor = null;
    else if (dn(r, !t.selection.empty), ft && t.selection.empty && e.parentOffset && !e.textOffset && e.nodeBefore.marks.length) {
      let n = r.domSelectionRange();
      for (let o = n.focusNode, i = n.focusOffset; o && o.nodeType == 1 && i != 0; ) {
        let s = i < 0 ? o.lastChild : o.childNodes[i - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let a = r.domSelection();
          a && a.collapse(s, s.nodeValue.length);
          break;
        } else
          o = s, i = -1;
      }
    }
    r.input.composing = !0;
  }
  dc(r, $p);
};
rt.compositionend = (r, t) => {
  r.composing && (r.input.composing = !1, r.input.compositionEndedAt = t.timeStamp, r.input.compositionPendingChanges = r.domObserver.pendingRecords().length ? r.input.compositionID : 0, r.input.compositionNode = null, r.input.compositionPendingChanges && Promise.resolve().then(() => r.domObserver.flush()), r.input.compositionID++, dc(r, 20));
};
function dc(r, t) {
  clearTimeout(r.input.composingTimeout), t > -1 && (r.input.composingTimeout = setTimeout(() => dn(r), t));
}
function uc(r) {
  for (r.composing && (r.input.composing = !1, r.input.compositionEndedAt = Sp()); r.input.compositionNodes.length > 0; )
    r.input.compositionNodes.pop().markParentsDirty();
}
function Mp(r) {
  let t = r.domSelectionRange();
  if (!t.focusNode)
    return null;
  let e = gu(t.focusNode, t.focusOffset), n = bu(t.focusNode, t.focusOffset);
  if (e && n && e != n) {
    let o = n.pmViewDesc, i = r.domObserver.lastChangedTextNode;
    if (e == i || n == i)
      return i;
    if (!o || !o.isText(n.nodeValue))
      return n;
    if (r.input.compositionNode == n) {
      let s = e.pmViewDesc;
      if (!(!s || !s.isText(e.nodeValue)))
        return n;
    }
  }
  return e || n;
}
function Sp() {
  let r = document.createEvent("Event");
  return r.initEvent("event", !0, !0), r.timeStamp;
}
function dn(r, t = !1) {
  if (!(Nt && r.domObserver.flushingSoon >= 0)) {
    if (r.domObserver.forceFlush(), uc(r), t || r.docView && r.docView.dirty) {
      let e = mi(r), n = r.state.selection;
      return e && !e.eq(n) ? r.dispatch(r.state.tr.setSelection(e)) : (r.markCursor || t) && !n.$from.node(n.$from.sharedDepth(n.to)).inlineContent ? r.dispatch(r.state.tr.deleteSelection()) : r.updateState(r.state), !0;
    }
    return !1;
  }
}
function Cp(r, t) {
  if (!r.dom.parentNode)
    return;
  let e = r.dom.parentNode.appendChild(document.createElement("div"));
  e.appendChild(t), e.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let n = getSelection(), o = document.createRange();
  o.selectNodeContents(t), r.dom.blur(), n.removeAllRanges(), n.addRange(o), setTimeout(() => {
    e.parentNode && e.parentNode.removeChild(e), r.focus();
  }, 50);
}
const fr = nt && qt < 15 || Ue && xu < 604;
et.copy = rt.cut = (r, t) => {
  let e = t, n = r.state.selection, o = e.type == "cut";
  if (n.empty)
    return;
  let i = fr ? null : e.clipboardData, s = n.content(), { dom: a, text: l } = bi(r, s);
  i ? (e.preventDefault(), i.clearData(), i.setData("text/html", a.innerHTML), i.setData("text/plain", l)) : Cp(r, a), o && r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Tp(r) {
  return r.openStart == 0 && r.openEnd == 0 && r.content.childCount == 1 ? r.content.firstChild : null;
}
function Op(r, t) {
  if (!r.dom.parentNode)
    return;
  let e = r.input.shiftKey || r.state.selection.$from.parent.type.spec.code, n = r.dom.parentNode.appendChild(document.createElement(e ? "textarea" : "div"));
  e || (n.contentEditable = "true"), n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus();
  let o = r.input.shiftKey && r.input.lastKeyCode != 45;
  setTimeout(() => {
    r.focus(), n.parentNode && n.parentNode.removeChild(n), e ? mr(r, n.value, null, o, t) : mr(r, n.textContent, n.innerHTML, o, t);
  }, 50);
}
function mr(r, t, e, n, o) {
  let i = nc(r, t, e, n, r.state.selection.$from);
  if (r.someProp("handlePaste", (l) => l(r, o, i || k.empty)))
    return !0;
  if (!i)
    return !1;
  let s = Tp(i), a = s ? r.state.tr.replaceSelectionWith(s, n) : r.state.tr.replaceSelection(i);
  return r.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function pc(r) {
  let t = r.getData("text/plain") || r.getData("Text");
  if (t)
    return t;
  let e = r.getData("text/uri-list");
  return e ? e.replace(/\r?\n/g, " ") : "";
}
rt.paste = (r, t) => {
  let e = t;
  if (r.composing && !Nt)
    return;
  let n = fr ? null : e.clipboardData, o = r.input.shiftKey && r.input.lastKeyCode != 45;
  n && mr(r, pc(n), n.getData("text/html"), o, e) ? e.preventDefault() : Op(r, e);
};
class fc {
  constructor(t, e, n) {
    this.slice = t, this.move = e, this.node = n;
  }
}
const Ap = ut ? "altKey" : "ctrlKey";
function mc(r, t) {
  return r.someProp("dragCopies", (n) => !n(t)) ?? !t[Ap];
}
et.dragstart = (r, t) => {
  let e = t, n = r.input.mouseDown;
  if (n && n.done(), !e.dataTransfer)
    return;
  let o = r.state.selection, i = o.empty ? null : r.posAtCoords(Pn(e)), s;
  if (!(i && i.pos >= o.from && i.pos <= (o instanceof S ? o.to - 1 : o.to))) {
    if (n && n.mightDrag)
      s = S.create(r.state.doc, n.mightDrag.pos);
    else if (e.target && e.target.nodeType == 1) {
      let d = r.docView.nearestDesc(e.target, !0);
      d && d.node.type.spec.draggable && d != r.docView && (s = S.create(r.state.doc, d.posBefore));
    }
  }
  let a = (s || r.state.selection).content(), { dom: l, text: c, slice: h } = bi(r, a);
  (!e.dataTransfer.files.length || !Y || Vl > 120) && e.dataTransfer.clearData(), e.dataTransfer.setData(fr ? "Text" : "text/html", l.innerHTML), e.dataTransfer.effectAllowed = "copyMove", fr || e.dataTransfer.setData("text/plain", c), r.dragging = new fc(h, mc(r, e), s);
};
et.dragend = (r) => {
  let t = r.dragging;
  window.setTimeout(() => {
    r.dragging == t && (r.dragging = null);
  }, 50);
};
rt.dragover = rt.dragenter = (r, t) => t.preventDefault();
rt.drop = (r, t) => {
  let e = t, n = r.dragging;
  if (r.dragging = null, !e.dataTransfer)
    return;
  let o = r.posAtCoords(Pn(e));
  if (!o)
    return;
  let i = r.state.doc.resolve(o.pos), s = n && n.slice;
  s ? r.someProp("transformPasted", (f) => {
    s = f(s, r, !1);
  }) : s = nc(r, pc(e.dataTransfer), fr ? null : e.dataTransfer.getData("text/html"), !1, i);
  let a = !!(n && mc(r, e));
  if (r.someProp("handleDrop", (f) => f(r, e, s || k.empty, a))) {
    e.preventDefault();
    return;
  }
  if (!s)
    return;
  e.preventDefault();
  let l = s ? kl(r.state.doc, i.pos, s) : i.pos;
  l == null && (l = i.pos);
  let c = r.state.tr;
  if (a) {
    let { node: f } = n;
    f ? f.replace(c) : c.deleteSelection();
  }
  let h = c.mapping.map(l), d = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, u = c.doc;
  if (d ? c.replaceRangeWith(h, h, s.content.firstChild) : c.replaceRange(h, h, s), c.doc.eq(u))
    return;
  let p = c.doc.resolve(h);
  if (d && S.isSelectable(s.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new S(p));
  else {
    let f = c.mapping.map(l);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, b, y, w) => f = w), c.setSelection(gi(r, p, c.doc.resolve(f)));
  }
  r.focus(), r.dispatch(c.setMeta("uiEvent", "drop"));
};
et.focus = (r) => {
  r.input.lastFocus = Date.now(), r.focused || (r.domObserver.stop(), r.dom.classList.add("ProseMirror-focused"), r.domObserver.start(), r.focused = !0, setTimeout(() => {
    r.docView && r.hasFocus() && !r.domObserver.currentSelection.eq(r.domSelectionRange()) && Dt(r);
  }, 20));
};
et.blur = (r, t) => {
  let e = t;
  r.focused && (r.domObserver.stop(), r.dom.classList.remove("ProseMirror-focused"), r.domObserver.start(), e.relatedTarget && r.dom.contains(e.relatedTarget) && r.domObserver.currentSelection.clear(), r.focused = !1);
};
et.beforeinput = (r, t) => {
  if (Y && Nt && t.inputType == "deleteContentBackward") {
    r.domObserver.flushSoon();
    let { domChangeCount: e } = r.input;
    setTimeout(() => {
      if (r.input.domChangeCount != e || (r.dom.blur(), r.focus(), r.someProp("handleKeyDown", (o) => o(r, le(8, "Backspace")))))
        return;
      let { $cursor: n } = r.state.selection;
      n && n.pos > 0 && r.dispatch(r.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
    }, 50);
  }
};
for (let r in rt)
  et[r] = rt[r];
function gr(r, t) {
  if (r == t)
    return !0;
  for (let e in r)
    if (r[e] !== t[e])
      return !1;
  for (let e in t)
    if (!(e in r))
      return !1;
  return !0;
}
class un {
  constructor(t, e) {
    this.toDOM = t, this.spec = e || me, this.side = this.spec.side || 0;
  }
  map(t, e, n, o) {
    let { pos: i, deleted: s } = t.mapResult(e.from + o, this.side < 0 ? -1 : 1);
    return s ? null : new Q(i - n, i - n, this);
  }
  valid() {
    return !0;
  }
  eq(t) {
    return this == t || t instanceof un && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && gr(this.spec, t.spec));
  }
  destroy(t) {
    this.spec.destroy && this.spec.destroy(t);
  }
}
class Gt {
  constructor(t, e) {
    this.attrs = t, this.spec = e || me;
  }
  map(t, e, n, o) {
    let i = t.map(e.from + o, this.spec.inclusiveStart ? -1 : 1) - n, s = t.map(e.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
    return i >= s ? null : new Q(i, s, this);
  }
  valid(t, e) {
    return e.from < e.to;
  }
  eq(t) {
    return this == t || t instanceof Gt && gr(this.attrs, t.attrs) && gr(this.spec, t.spec);
  }
  static is(t) {
    return t.type instanceof Gt;
  }
  destroy() {
  }
}
class wi {
  constructor(t, e) {
    this.attrs = t, this.spec = e || me;
  }
  map(t, e, n, o) {
    let i = t.mapResult(e.from + o, 1);
    if (i.deleted)
      return null;
    let s = t.mapResult(e.to + o, -1);
    return s.deleted || s.pos <= i.pos ? null : new Q(i.pos - n, s.pos - n, this);
  }
  valid(t, e) {
    let { index: n, offset: o } = t.content.findIndex(e.from), i;
    return o == e.from && !(i = t.child(n)).isText && o + i.nodeSize == e.to;
  }
  eq(t) {
    return this == t || t instanceof wi && gr(this.attrs, t.attrs) && gr(this.spec, t.spec);
  }
  destroy() {
  }
}
class Q {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.from = t, this.to = e, this.type = n;
  }
  /**
  @internal
  */
  copy(t, e) {
    return new Q(t, e, this.type);
  }
  /**
  @internal
  */
  eq(t, e = 0) {
    return this.type.eq(t.type) && this.from + e == t.from && this.to + e == t.to;
  }
  /**
  @internal
  */
  map(t, e, n) {
    return this.type.map(t, this, e, n);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(t, e, n) {
    return new Q(t, t, new un(e, n));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(t, e, n, o) {
    return new Q(t, e, new Gt(n, o));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(t, e, n, o) {
    return new Q(t, e, new wi(n, o));
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
    return this.type instanceof Gt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof un;
  }
}
const Ie = [], me = {};
class z {
  /**
  @internal
  */
  constructor(t, e) {
    this.local = t.length ? t : Ie, this.children = e.length ? e : Ie;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(t, e) {
    return e.length ? pn(e, t, 0, me) : Z;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(t, e, n) {
    let o = [];
    return this.findInner(t ?? 0, e ?? 1e9, o, 0, n), o;
  }
  findInner(t, e, n, o, i) {
    for (let s = 0; s < this.local.length; s++) {
      let a = this.local[s];
      a.from <= e && a.to >= t && (!i || i(a.spec)) && n.push(a.copy(a.from + o, a.to + o));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < e && this.children[s + 1] > t) {
        let a = this.children[s] + 1;
        this.children[s + 2].findInner(t - a, e - a, n, o + a, i);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(t, e, n) {
    return this == Z || t.maps.length == 0 ? this : this.mapInner(t, e, 0, 0, n || me);
  }
  /**
  @internal
  */
  mapInner(t, e, n, o, i) {
    let s;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a].map(t, n, o);
      l && l.type.valid(e, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[a].spec);
    }
    return this.children.length ? Ep(this.children, s || [], t, e, n, o, i) : s ? new z(s.sort(ge), Ie) : Z;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(t, e) {
    return e.length ? this == Z ? z.create(t, e) : this.addInner(t, e, 0) : this;
  }
  addInner(t, e, n) {
    let o, i = 0;
    t.forEach((a, l) => {
      let c = l + n, h;
      if (h = bc(e, a, c)) {
        for (o || (o = this.children.slice()); i < o.length && o[i] < l; )
          i += 3;
        o[i] == l ? o[i + 2] = o[i + 2].addInner(a, h, c + 1) : o.splice(i, 0, l, l + a.nodeSize, pn(h, a, c + 1, me)), i += 3;
      }
    });
    let s = gc(i ? yc(e) : e, -n);
    for (let a = 0; a < s.length; a++)
      s[a].type.valid(t, s[a]) || s.splice(a--, 1);
    return new z(s.length ? this.local.concat(s).sort(ge) : this.local, o || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(t) {
    return t.length == 0 || this == Z ? this : this.removeInner(t, 0);
  }
  removeInner(t, e) {
    let n = this.children, o = this.local;
    for (let i = 0; i < n.length; i += 3) {
      let s, a = n[i] + e, l = n[i + 1] + e;
      for (let h = 0, d; h < t.length; h++)
        (d = t[h]) && d.from > a && d.to < l && (t[h] = null, (s || (s = [])).push(d));
      if (!s)
        continue;
      n == this.children && (n = this.children.slice());
      let c = n[i + 2].removeInner(s, a + 1);
      c != Z ? n[i + 2] = c : (n.splice(i, 3), i -= 3);
    }
    if (o.length) {
      for (let i = 0, s; i < t.length; i++)
        if (s = t[i])
          for (let a = 0; a < o.length; a++)
            o[a].eq(s, e) && (o == this.local && (o = this.local.slice()), o.splice(a--, 1));
    }
    return n == this.children && o == this.local ? this : o.length || n.length ? new z(o, n) : Z;
  }
  forChild(t, e) {
    if (this == Z)
      return this;
    if (e.isLeaf)
      return z.empty;
    let n, o;
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] >= t) {
        this.children[a] == t && (n = this.children[a + 2]);
        break;
      }
    let i = t + 1, s = i + e.content.size;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a];
      if (l.from < s && l.to > i && l.type instanceof Gt) {
        let c = Math.max(i, l.from) - i, h = Math.min(s, l.to) - i;
        c < h && (o || (o = [])).push(l.copy(c, h));
      }
    }
    if (o) {
      let a = new z(o.sort(ge), Ie);
      return n ? new Bt([a, n]) : a;
    }
    return n || Z;
  }
  /**
  @internal
  */
  eq(t) {
    if (this == t)
      return !0;
    if (!(t instanceof z) || this.local.length != t.local.length || this.children.length != t.children.length)
      return !1;
    for (let e = 0; e < this.local.length; e++)
      if (!this.local[e].eq(t.local[e]))
        return !1;
    for (let e = 0; e < this.children.length; e += 3)
      if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(t) {
    return xi(this.localsInner(t));
  }
  /**
  @internal
  */
  localsInner(t) {
    if (this == Z)
      return Ie;
    if (t.inlineContent || !this.local.some(Gt.is))
      return this.local;
    let e = [];
    for (let n = 0; n < this.local.length; n++)
      this.local[n].type instanceof Gt || e.push(this.local[n]);
    return e;
  }
  forEachSet(t) {
    t(this);
  }
}
z.empty = new z([], []);
z.removeOverlap = xi;
const Z = z.empty;
class Bt {
  constructor(t) {
    this.members = t;
  }
  map(t, e) {
    const n = this.members.map((o) => o.map(t, e, me));
    return Bt.from(n);
  }
  forChild(t, e) {
    if (e.isLeaf)
      return z.empty;
    let n = [];
    for (let o = 0; o < this.members.length; o++) {
      let i = this.members[o].forChild(t, e);
      i != Z && (i instanceof Bt ? n = n.concat(i.members) : n.push(i));
    }
    return Bt.from(n);
  }
  eq(t) {
    if (!(t instanceof Bt) || t.members.length != this.members.length)
      return !1;
    for (let e = 0; e < this.members.length; e++)
      if (!this.members[e].eq(t.members[e]))
        return !1;
    return !0;
  }
  locals(t) {
    let e, n = !0;
    for (let o = 0; o < this.members.length; o++) {
      let i = this.members[o].localsInner(t);
      if (i.length)
        if (!e)
          e = i;
        else {
          n && (e = e.slice(), n = !1);
          for (let s = 0; s < i.length; s++)
            e.push(i[s]);
        }
    }
    return e ? xi(n ? e : e.sort(ge)) : Ie;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(t) {
    switch (t.length) {
      case 0:
        return Z;
      case 1:
        return t[0];
      default:
        return new Bt(t.every((e) => e instanceof z) ? t : t.reduce((e, n) => e.concat(n instanceof z ? n : n.members), []));
    }
  }
  forEachSet(t) {
    for (let e = 0; e < this.members.length; e++)
      this.members[e].forEachSet(t);
  }
}
function Ep(r, t, e, n, o, i, s) {
  let a = r.slice();
  for (let c = 0, h = i; c < e.maps.length; c++) {
    let d = 0;
    e.maps[c].forEach((u, p, f, g) => {
      let b = g - f - (p - u);
      for (let y = 0; y < a.length; y += 3) {
        let w = a[y + 1];
        if (w < 0 || u > w + h - d)
          continue;
        let x = a[y] + h - d;
        p >= x ? a[y + 1] = u <= x ? -2 : -1 : u >= h && b && (a[y] += b, a[y + 1] += b);
      }
      d += b;
    }), h = e.maps[c].map(h, -1);
  }
  let l = !1;
  for (let c = 0; c < a.length; c += 3)
    if (a[c + 1] < 0) {
      if (a[c + 1] == -2) {
        l = !0, a[c + 1] = -1;
        continue;
      }
      let h = e.map(r[c] + i), d = h - o;
      if (d < 0 || d >= n.content.size) {
        l = !0;
        continue;
      }
      let u = e.map(r[c + 1] + i, -1), p = u - o, { index: f, offset: g } = n.content.findIndex(d), b = n.maybeChild(f);
      if (b && g == d && g + b.nodeSize == p) {
        let y = a[c + 2].mapInner(e, b, h + 1, r[c] + i + 1, s);
        y != Z ? (a[c] = d, a[c + 1] = p, a[c + 2] = y) : (a[c + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let c = Np(a, r, t, e, o, i, s), h = pn(c, n, 0, s);
    t = h.local;
    for (let d = 0; d < a.length; d += 3)
      a[d + 1] < 0 && (a.splice(d, 3), d -= 3);
    for (let d = 0, u = 0; d < h.children.length; d += 3) {
      let p = h.children[d];
      for (; u < a.length && a[u] < p; )
        u += 3;
      a.splice(u, 0, h.children[d], h.children[d + 1], h.children[d + 2]);
    }
  }
  return new z(t.sort(ge), a);
}
function gc(r, t) {
  if (!t || !r.length)
    return r;
  let e = [];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    e.push(new Q(o.from + t, o.to + t, o.type));
  }
  return e;
}
function Np(r, t, e, n, o, i, s) {
  function a(l, c) {
    for (let h = 0; h < l.local.length; h++) {
      let d = l.local[h].map(n, o, c);
      d ? e.push(d) : s.onRemove && s.onRemove(l.local[h].spec);
    }
    for (let h = 0; h < l.children.length; h += 3)
      a(l.children[h + 2], l.children[h] + c + 1);
  }
  for (let l = 0; l < r.length; l += 3)
    r[l + 1] == -1 && a(r[l + 2], t[l] + i + 1);
  return e;
}
function bc(r, t, e) {
  if (t.isLeaf)
    return null;
  let n = e + t.nodeSize, o = null;
  for (let i = 0, s; i < r.length; i++)
    (s = r[i]) && s.from > e && s.to < n && ((o || (o = [])).push(s), r[i] = null);
  return o;
}
function yc(r) {
  let t = [];
  for (let e = 0; e < r.length; e++)
    r[e] != null && t.push(r[e]);
  return t;
}
function pn(r, t, e, n) {
  let o = [], i = !1;
  t.forEach((a, l) => {
    let c = bc(r, a, l + e);
    if (c) {
      i = !0;
      let h = pn(c, a, e + l + 1, n);
      h != Z && o.push(l, l + a.nodeSize, h);
    }
  });
  let s = gc(i ? yc(r) : r, -e).sort(ge);
  for (let a = 0; a < s.length; a++)
    s[a].type.valid(t, s[a]) || (n.onRemove && n.onRemove(s[a].spec), s.splice(a--, 1));
  return s.length || o.length ? new z(s, o) : Z;
}
function ge(r, t) {
  return r.from - t.from || r.to - t.to;
}
function xi(r) {
  let t = r;
  for (let e = 0; e < t.length - 1; e++) {
    let n = t[e];
    if (n.from != n.to)
      for (let o = e + 1; o < t.length; o++) {
        let i = t[o];
        if (i.from == n.from) {
          i.to != n.to && (t == r && (t = r.slice()), t[o] = i.copy(i.from, n.to), Ks(t, o + 1, i.copy(n.to, i.to)));
          continue;
        } else {
          i.from < n.to && (t == r && (t = r.slice()), t[e] = n.copy(n.from, i.from), Ks(t, o, n.copy(i.from, n.to)));
          break;
        }
      }
  }
  return t;
}
function Ks(r, t, e) {
  for (; t < r.length && ge(e, r[t]) > 0; )
    t++;
  r.splice(t, 0, e);
}
function co(r) {
  let t = [];
  return r.someProp("decorations", (e) => {
    let n = e(r.state);
    n && n != Z && t.push(n);
  }), r.cursorWrapper && t.push(z.create(r.state.doc, [r.cursorWrapper.deco])), Bt.from(t);
}
const Ip = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Dp = nt && qt <= 11;
class Rp {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(t) {
    this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(t) {
    return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset;
  }
}
class zp {
  constructor(t, e) {
    this.view = t, this.handleDOMChange = e, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Rp(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((n) => {
      for (let o = 0; o < n.length; o++)
        this.queue.push(n[o]);
      nt && qt <= 11 && n.some((o) => o.type == "childList" && o.removedNodes.length || o.type == "characterData" && o.oldValue.length > o.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Dp && (this.onCharData = (n) => {
      this.queue.push({ target: n.target, type: "characterData", oldValue: n.prevValue }), this.flushSoon();
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Ip)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let t = this.observer.takeRecords();
      if (t.length) {
        for (let e = 0; e < t.length; e++)
          this.queue.push(t[e]);
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
    if (Vs(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Dt(this.view);
      if (nt && qt <= 11 && !this.view.state.selection.empty) {
        let t = this.view.domSelectionRange();
        if (t.focusNode && ke(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(t) {
    if (!t.focusNode)
      return !0;
    let e = /* @__PURE__ */ new Set(), n;
    for (let i = t.focusNode; i; i = We(i))
      e.add(i);
    for (let i = t.anchorNode; i; i = We(i))
      if (e.has(i)) {
        n = i;
        break;
      }
    let o = n && this.view.docView.nearestDesc(n);
    if (o && o.ignoreMutation({
      type: "selection",
      target: n.nodeType == 3 ? n.parentNode : n
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let t of this.observer.takeRecords())
        this.queue.push(t);
    return this.queue;
  }
  flush() {
    let { view: t } = this;
    if (!t.docView || this.flushingSoon > -1)
      return;
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let n = t.domSelectionRange(), o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Vs(t) && !this.ignoreSelectionChange(n), i = -1, s = -1, a = !1, l = [];
    if (t.editable)
      for (let h = 0; h < e.length; h++) {
        let d = this.registerMutation(e[h], l);
        d && (i = i < 0 ? d.from : Math.min(d.from, i), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (a = !0));
      }
    if (ft && l.length) {
      let h = l.filter((d) => d.nodeName == "BR");
      if (h.length == 2) {
        let [d, u] = h;
        d.parentNode && d.parentNode.parentNode == u.parentNode ? u.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let u of h) {
          let p = u.parentNode;
          p && p.nodeName == "LI" && (!d || Lp(t, d) != p) && u.remove();
        }
      }
    }
    let c = null;
    i < 0 && o && t.input.lastFocus > Date.now() - 200 && Math.max(t.input.lastTouch, t.input.lastClick.time) < Date.now() - 300 && Rn(n) && (c = mi(t)) && c.eq(A.near(t.state.doc.resolve(0), 1)) ? (t.input.lastFocus = 0, Dt(t), this.currentSelection.set(n), t.scrollToSelection()) : (i > -1 || o) && (i > -1 && (t.docView.markDirty(i, s), Pp(t)), this.handleDOMChange(i, s, a, l), t.docView && t.docView.dirty ? t.updateState(t.state) : this.currentSelection.eq(n) || Dt(t), this.currentSelection.set(n));
  }
  registerMutation(t, e) {
    if (e.indexOf(t.target) > -1)
      return null;
    let n = this.view.docView.nearestDesc(t.target);
    if (t.type == "attributes" && (n == this.view.docView || t.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    t.attributeName == "style" && !t.oldValue && !t.target.getAttribute("style")) || !n || n.ignoreMutation(t))
      return null;
    if (t.type == "childList") {
      for (let h = 0; h < t.addedNodes.length; h++) {
        let d = t.addedNodes[h];
        e.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(t.target))
        return { from: n.posBefore, to: n.posAfter };
      let o = t.previousSibling, i = t.nextSibling;
      if (nt && qt <= 11 && t.addedNodes.length)
        for (let h = 0; h < t.addedNodes.length; h++) {
          let { previousSibling: d, nextSibling: u } = t.addedNodes[h];
          (!d || Array.prototype.indexOf.call(t.addedNodes, d) < 0) && (o = d), (!u || Array.prototype.indexOf.call(t.addedNodes, u) < 0) && (i = u);
        }
      let s = o && o.parentNode == t.target ? G(o) + 1 : 0, a = n.localPosFromDOM(t.target, s, -1), l = i && i.parentNode == t.target ? G(i) : t.target.childNodes.length, c = n.localPosFromDOM(t.target, l, 1);
      return { from: a, to: c };
    } else return t.type == "attributes" ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border } : (this.lastChangedTextNode = t.target, {
      from: n.posAtStart,
      to: n.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: t.target.nodeValue == t.oldValue
    });
  }
}
let Zs = /* @__PURE__ */ new WeakMap(), Ys = !1;
function Pp(r) {
  if (!Zs.has(r) && (Zs.set(r, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(r.dom).whiteSpace) !== -1)) {
    if (r.requiresGeckoHackNode = ft, Ys)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Ys = !0;
  }
}
function Xs(r, t) {
  let e = t.startContainer, n = t.startOffset, o = t.endContainer, i = t.endOffset, s = r.domAtPos(r.state.selection.anchor);
  return ke(s.node, s.offset, o, i) && ([e, n, o, i] = [o, i, e, n]), { anchorNode: e, anchorOffset: n, focusNode: o, focusOffset: i };
}
function jp(r, t) {
  if (t.getComposedRanges) {
    let o = t.getComposedRanges(r.root)[0];
    if (o)
      return Xs(r, o);
  }
  let e;
  function n(o) {
    o.preventDefault(), o.stopImmediatePropagation(), e = o.getTargetRanges()[0];
  }
  return r.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), r.dom.removeEventListener("beforeinput", n, !0), e ? Xs(r, e) : null;
}
function Lp(r, t) {
  for (let e = t.parentNode; e && e != r.dom; e = e.parentNode) {
    let n = r.docView.nearestDesc(e, !0);
    if (n && n.node.isBlock)
      return e;
  }
  return null;
}
function _p(r, t, e) {
  let { node: n, fromOffset: o, toOffset: i, from: s, to: a } = r.docView.parseRange(t, e), l = r.domSelectionRange(), c, h = l.anchorNode;
  if (h && r.dom.contains(h.nodeType == 1 ? h : h.parentNode) && (c = [{ node: h, offset: l.anchorOffset }], Rn(l) || c.push({ node: l.focusNode, offset: l.focusOffset })), Y && r.input.lastKeyCode === 8)
    for (let b = i; b > o; b--) {
      let y = n.childNodes[b - 1], w = y.pmViewDesc;
      if (y.nodeName == "BR" && !w) {
        i = b;
        break;
      }
      if (!w || w.size)
        break;
    }
  let d = r.state.doc, u = r.someProp("domParser") || Ut.fromSchema(r.state.schema), p = d.resolve(s), f = null, g = u.parse(n, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: o,
    to: i,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Bp,
    context: p
  });
  if (c && c[0].pos != null) {
    let b = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = b), f = { anchor: b + s, head: y + s };
  }
  return { doc: g, sel: f, from: s, to: a };
}
function Bp(r) {
  let t = r.pmViewDesc;
  if (t)
    return t.parseRule();
  if (r.nodeName == "BR" && r.parentNode) {
    if (tt && /^(ul|ol)$/i.test(r.parentNode.nodeName)) {
      let e = document.createElement("div");
      return e.appendChild(document.createElement("li")), { skip: e };
    } else if (r.parentNode.lastChild == r || tt && /^(tr|table)$/i.test(r.parentNode.nodeName))
      return { ignore: !0 };
  } else if (r.nodeName == "IMG" && r.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Vp = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Hp(r, t, e, n, o) {
  let i = r.input.compositionPendingChanges || (r.composing ? r.input.compositionID : 0);
  if (r.input.compositionPendingChanges = 0, t < 0) {
    let M = r.input.lastSelectionTime > Date.now() - 50 ? r.input.lastSelectionOrigin : null, E = mi(r, M);
    if (E && !r.state.selection.eq(E)) {
      if (Y && Nt && r.input.lastKeyCode === 13 && Date.now() - 100 < r.input.lastKeyCodeTime && r.someProp("handleKeyDown", (Te) => Te(r, le(13, "Enter"))))
        return;
      let R = r.state.tr.setSelection(E);
      M == "pointer" ? R.setMeta("pointer", !0) : M == "key" && R.scrollIntoView(), i && R.setMeta("composition", i), r.dispatch(R);
    }
    return;
  }
  let s = r.state.doc.resolve(t), a = s.sharedDepth(e);
  t = s.before(a + 1), e = r.state.doc.resolve(e).after(a + 1);
  let l = r.state.selection, c = _p(r, t, e), h = r.state.doc, d = h.slice(c.from, c.to), u, p;
  r.input.lastKeyCode === 8 && Date.now() - 100 < r.input.lastKeyCodeTime ? (u = r.state.selection.to, p = "end") : (u = r.state.selection.from, p = "start"), r.input.lastKeyCode = null;
  let f = Up(d.content, c.doc.content, c.from, u, p);
  if (f && r.input.domChangeCount++, (Ue && r.input.lastIOSEnter > Date.now() - 225 || Nt) && o.some((M) => M.nodeType == 1 && !Vp.test(M.nodeName)) && (!f || f.endA >= f.endB) && r.someProp("handleKeyDown", (M) => M(r, le(13, "Enter")))) {
    r.input.lastIOSEnter = 0;
    return;
  }
  if (!f)
    if (n && l instanceof C && !l.empty && l.$head.sameParent(l.$anchor) && !r.composing && !(c.sel && c.sel.anchor != c.sel.head))
      f = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (c.sel) {
        let M = Qs(r, r.state.doc, c.sel);
        if (M && !M.eq(r.state.selection)) {
          let E = r.state.tr.setSelection(M);
          i && E.setMeta("composition", i), r.dispatch(E);
        }
      }
      return;
    }
  r.state.selection.from < r.state.selection.to && f.start == f.endB && r.state.selection instanceof C && (f.start > r.state.selection.from && f.start <= r.state.selection.from + 2 && r.state.selection.from >= c.from ? f.start = r.state.selection.from : f.endA < r.state.selection.to && f.endA >= r.state.selection.to - 2 && r.state.selection.to <= c.to && (f.endB += r.state.selection.to - f.endA, f.endA = r.state.selection.to)), nt && qt <= 11 && f.endB == f.start + 1 && f.endA == f.start && f.start > c.from && c.doc.textBetween(f.start - c.from - 1, f.start - c.from + 1) == "  " && (f.start--, f.endA--, f.endB--);
  let g = c.doc.resolveNoCache(f.start - c.from), b = c.doc.resolveNoCache(f.endB - c.from), y = h.resolve(f.start), w = g.sameParent(b) && g.parent.inlineContent && y.end() >= f.endA;
  if ((Ue && r.input.lastIOSEnter > Date.now() - 225 && (!w || o.some((M) => M.nodeName == "DIV" || M.nodeName == "P")) || !w && g.pos < c.doc.content.size && (!g.sameParent(b) || !g.parent.inlineContent) && g.pos < b.pos && !/\S/.test(c.doc.textBetween(g.pos, b.pos, "", ""))) && r.someProp("handleKeyDown", (M) => M(r, le(13, "Enter")))) {
    r.input.lastIOSEnter = 0;
    return;
  }
  if (r.state.selection.anchor > f.start && Wp(h, f.start, f.endA, g, b) && r.someProp("handleKeyDown", (M) => M(r, le(8, "Backspace")))) {
    Nt && Y && r.domObserver.suppressSelectionUpdates();
    return;
  }
  Y && f.endB == f.start && (r.input.lastChromeDelete = Date.now()), Nt && !w && g.start() != b.start() && b.parentOffset == 0 && g.depth == b.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == f.endA && (f.endB -= 2, b = c.doc.resolveNoCache(f.endB - c.from), setTimeout(() => {
    r.someProp("handleKeyDown", function(M) {
      return M(r, le(13, "Enter"));
    });
  }, 20));
  let x = f.start, O = f.endA, T = (M) => {
    let E = M || r.state.tr.replace(x, O, c.doc.slice(f.start - c.from, f.endB - c.from));
    if (c.sel) {
      let R = Qs(r, E.doc, c.sel);
      R && !(Y && r.composing && R.empty && (f.start != f.endB || r.input.lastChromeDelete < Date.now() - 100) && (R.head == x || R.head == E.mapping.map(O) - 1) || nt && R.empty && R.head == x) && E.setSelection(R);
    }
    return i && E.setMeta("composition", i), E.scrollIntoView();
  }, N;
  if (w)
    if (g.pos == b.pos) {
      nt && qt <= 11 && g.parentOffset == 0 && (r.domObserver.suppressSelectionUpdates(), setTimeout(() => Dt(r), 20));
      let M = T(r.state.tr.delete(x, O)), E = h.resolve(f.start).marksAcross(h.resolve(f.endA));
      E && M.ensureMarks(E), r.dispatch(M);
    } else if (
      // Adding or removing a mark
      f.endA == f.endB && (N = Fp(g.parent.content.cut(g.parentOffset, b.parentOffset), y.parent.content.cut(y.parentOffset, f.endA - y.start())))
    ) {
      let M = T(r.state.tr);
      N.type == "add" ? M.addMark(x, O, N.mark) : M.removeMark(x, O, N.mark), r.dispatch(M);
    } else if (g.parent.child(g.index()).isText && g.index() == b.index() - (b.textOffset ? 0 : 1)) {
      let M = g.parent.textBetween(g.parentOffset, b.parentOffset), E = () => T(r.state.tr.insertText(M, x, O));
      r.someProp("handleTextInput", (R) => R(r, x, O, M, E)) || r.dispatch(E());
    } else
      r.dispatch(T());
  else
    r.dispatch(T());
}
function Qs(r, t, e) {
  return Math.max(e.anchor, e.head) > t.content.size ? null : gi(r, t.resolve(e.anchor), t.resolve(e.head));
}
function Fp(r, t) {
  let e = r.firstChild.marks, n = t.firstChild.marks, o = e, i = n, s, a, l;
  for (let h = 0; h < n.length; h++)
    o = n[h].removeFromSet(o);
  for (let h = 0; h < e.length; h++)
    i = e[h].removeFromSet(i);
  if (o.length == 1 && i.length == 0)
    a = o[0], s = "add", l = (h) => h.mark(a.addToSet(h.marks));
  else if (o.length == 0 && i.length == 1)
    a = i[0], s = "remove", l = (h) => h.mark(a.removeFromSet(h.marks));
  else
    return null;
  let c = [];
  for (let h = 0; h < t.childCount; h++)
    c.push(l(t.child(h)));
  if (v.from(c).eq(r))
    return { mark: a, type: s };
}
function Wp(r, t, e, n, o) {
  if (
    // The content must have shrunk
    e - t <= o.pos - n.pos || // newEnd must point directly at or after the end of the block that newStart points into
    ho(n, !0, !1) < o.pos
  )
    return !1;
  let i = r.resolve(t);
  if (!n.parent.isTextblock) {
    let a = i.nodeAfter;
    return a != null && e == t + a.nodeSize;
  }
  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
    return !1;
  let s = r.resolve(ho(i, !0, !0));
  return !s.parent.isTextblock || s.pos > e || ho(s, !0, !1) < e ? !1 : n.parent.content.cut(n.parentOffset).eq(s.parent.content);
}
function ho(r, t, e) {
  let n = r.depth, o = t ? r.end() : r.pos;
  for (; n > 0 && (t || r.indexAfter(n) == r.node(n).childCount); )
    n--, o++, t = !1;
  if (e) {
    let i = r.node(n).maybeChild(r.indexAfter(n));
    for (; i && !i.isLeaf; )
      i = i.firstChild, o++;
  }
  return o;
}
function Up(r, t, e, n, o) {
  let i = r.findDiffStart(t, e);
  if (i == null)
    return null;
  let { a: s, b: a } = r.findDiffEnd(t, e + r.size, e + t.size);
  if (o == "end") {
    let l = Math.max(0, i - Math.min(s, a));
    n -= s + l - i;
  }
  if (s < i && r.size < t.size) {
    let l = n <= i && n >= s ? i - n : 0;
    i -= l, i && i < t.size && ta(t.textBetween(i - 1, i + 1)) && (i += l ? 1 : -1), a = i + (a - s), s = i;
  } else if (a < i) {
    let l = n <= i && n >= a ? i - n : 0;
    i -= l, i && i < r.size && ta(r.textBetween(i - 1, i + 1)) && (i += l ? 1 : -1), s = i + (s - a), a = i;
  }
  return { start: i, endA: s, endB: a };
}
function ta(r) {
  if (r.length != 2)
    return !1;
  let t = r.charCodeAt(0), e = r.charCodeAt(1);
  return t >= 56320 && t <= 57343 && e >= 55296 && e <= 56319;
}
class vc {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(t, e) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new hp(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = e, this.state = e.state, this.directPlugins = e.plugins || [], this.directPlugins.forEach(ia), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : typeof t == "function" ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = na(this), ra(this), this.nodeViews = oa(this), this.docView = zs(this.state.doc, ea(this), co(this), this.dom, this), this.domObserver = new zp(this, (n, o, i, s) => Hp(this, n, o, i, s)), this.domObserver.start(), dp(this), this.updatePluginViews();
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
      let t = this._props;
      this._props = {};
      for (let e in t)
        this._props[e] = t[e];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(t) {
    t.handleDOMEvents != this._props.handleDOMEvents && Lo(this);
    let e = this._props;
    this._props = t, t.plugins && (t.plugins.forEach(ia), this.directPlugins = t.plugins), this.updateStateInner(t.state, e);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(t) {
    let e = {};
    for (let n in this._props)
      e[n] = this._props[n];
    e.state = this.state;
    for (let n in t)
      e[n] = t[n];
    this.update(e);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(t) {
    this.updateStateInner(t, this._props);
  }
  updateStateInner(t, e) {
    var n;
    let o = this.state, i = !1, s = !1;
    t.storedMarks && this.composing && (uc(this), s = !0), this.state = t;
    let a = o.plugins != t.plugins || this._props.plugins != e.plugins;
    if (a || this._props.plugins != e.plugins || this._props.nodeViews != e.nodeViews) {
      let p = oa(this);
      Jp(p, this.nodeViews) && (this.nodeViews = p, i = !0);
    }
    (a || e.handleDOMEvents != this._props.handleDOMEvents) && Lo(this), this.editable = na(this), ra(this);
    let l = co(this), c = ea(this), h = o.plugins != t.plugins && !o.doc.eq(t.doc) ? "reset" : t.scrollToSelection > o.scrollToSelection ? "to selection" : "preserve", d = i || !this.docView.matchesNode(t.doc, c, l);
    (d || !t.selection.eq(o.selection)) && (s = !0);
    let u = h == "preserve" && s && this.dom.style.overflowAnchor == null && Su(this);
    if (s) {
      this.domObserver.stop();
      let p = d && (nt || Y) && !this.composing && !o.selection.empty && !t.selection.empty && qp(o.selection, t.selection);
      if (d) {
        let f = Y ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Mp(this)), (i || !this.docView.update(t.doc, c, l, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = zs(t.doc, c, l, this.dom, this)), f && !this.trackWrites && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Ku(this)) ? Dt(this, p) : (tc(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(o), !((n = this.dragging) === null || n === void 0) && n.node && !o.doc.eq(t.doc) && this.updateDraggedNode(this.dragging, o), h == "reset" ? this.dom.scrollTop = 0 : h == "to selection" ? this.scrollToSelection() : u && Cu(u);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let t = this.domSelectionRange().focusNode;
    if (!(!t || !this.dom.contains(t.nodeType == 1 ? t : t.parentNode)) && !this.someProp("handleScrollToSelection", (e) => e(this)))
      if (this.state.selection instanceof S) {
        let e = this.docView.domAfterPos(this.state.selection.from);
        e.nodeType == 1 && As(this, e.getBoundingClientRect(), t);
      } else
        As(this, this.coordsAtPos(this.state.selection.head, 1), t);
  }
  destroyPluginViews() {
    let t;
    for (; t = this.pluginViews.pop(); )
      t.destroy && t.destroy();
  }
  updatePluginViews(t) {
    if (!t || t.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let e = 0; e < this.directPlugins.length; e++) {
        let n = this.directPlugins[e];
        n.spec.view && this.pluginViews.push(n.spec.view(this));
      }
      for (let e = 0; e < this.state.plugins.length; e++) {
        let n = this.state.plugins[e];
        n.spec.view && this.pluginViews.push(n.spec.view(this));
      }
    } else
      for (let e = 0; e < this.pluginViews.length; e++) {
        let n = this.pluginViews[e];
        n.update && n.update(this, t);
      }
  }
  updateDraggedNode(t, e) {
    let n = t.node, o = -1;
    if (this.state.doc.nodeAt(n.from) == n.node)
      o = n.from;
    else {
      let i = n.from + (this.state.doc.content.size - e.doc.content.size);
      (i > 0 && this.state.doc.nodeAt(i)) == n.node && (o = i);
    }
    this.dragging = new fc(t.slice, t.move, o < 0 ? void 0 : S.create(this.state.doc, o));
  }
  someProp(t, e) {
    let n = this._props && this._props[t], o;
    if (n != null && (o = e ? e(n) : n))
      return o;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let a = this.directPlugins[s].props[t];
      if (a != null && (o = e ? e(a) : a))
        return o;
    }
    let i = this.state.plugins;
    if (i)
      for (let s = 0; s < i.length; s++) {
        let a = i[s].props[t];
        if (a != null && (o = e ? e(a) : a))
          return o;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (nt) {
      let t = this.root.activeElement;
      if (t == this.dom)
        return !0;
      if (!t || !this.dom.contains(t))
        return !1;
      for (; t && this.dom != t && this.dom.contains(t); ) {
        if (t.contentEditable == "false")
          return !1;
        t = t.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && Tu(this.dom), Dt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let t = this._root;
    if (t == null) {
      for (let e = this.dom.parentNode; e; e = e.parentNode)
        if (e.nodeType == 9 || e.nodeType == 11 && e.host)
          return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
    }
    return t || document;
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
  posAtCoords(t) {
    return Iu(this, t);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(t, e = 1) {
    return ql(this, t, e);
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
  domAtPos(t, e = 0) {
    return this.docView.domFromPos(t, e);
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
  nodeDOM(t) {
    let e = this.docView.descAt(t);
    return e ? e.nodeDOM : null;
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
  posAtDOM(t, e, n = -1) {
    let o = this.docView.posFromDOM(t, e, n);
    if (o == null)
      throw new RangeError("DOM position not inside the editor");
    return o;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(t, e) {
    return ju(this, e || this.state, t);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(t, e) {
    return mr(this, "", t, !1, e || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(t, e) {
    return mr(this, t, null, !0, e || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(t) {
    return bi(this, t);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (up(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], co(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, fu());
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
  dispatchEvent(t) {
    return fp(this, t);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let t = this.domSelection();
    return t ? tt && this.root.nodeType === 11 && vu(this.dom.ownerDocument) == this.dom && jp(this, t) || t : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
vc.prototype.dispatch = function(r) {
  let t = this._props.dispatchTransaction;
  t ? t.call(this, r) : this.updateState(this.state.apply(r));
};
function ea(r) {
  let t = /* @__PURE__ */ Object.create(null);
  return t.class = "ProseMirror", t.contenteditable = String(r.editable), r.someProp("attributes", (e) => {
    if (typeof e == "function" && (e = e(r.state)), e)
      for (let n in e)
        n == "class" ? t.class += " " + e[n] : n == "style" ? t.style = (t.style ? t.style + ";" : "") + e[n] : !t[n] && n != "contenteditable" && n != "nodeName" && (t[n] = String(e[n]));
  }), t.translate || (t.translate = "no"), [Q.node(0, r.state.doc.content.size, t)];
}
function ra(r) {
  if (r.markCursor) {
    let t = document.createElement("img");
    t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), r.cursorWrapper = { dom: t, deco: Q.widget(r.state.selection.from, t, { raw: !0, marks: r.markCursor }) };
  } else
    r.cursorWrapper = null;
}
function na(r) {
  return !r.someProp("editable", (t) => t(r.state) === !1);
}
function qp(r, t) {
  let e = Math.min(r.$anchor.sharedDepth(r.head), t.$anchor.sharedDepth(t.head));
  return r.$anchor.start(e) != t.$anchor.start(e);
}
function oa(r) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(n) {
    for (let o in n)
      Object.prototype.hasOwnProperty.call(t, o) || (t[o] = n[o]);
  }
  return r.someProp("nodeViews", e), r.someProp("markViews", e), t;
}
function Jp(r, t) {
  let e = 0, n = 0;
  for (let o in r) {
    if (r[o] != t[o])
      return !0;
    e++;
  }
  for (let o in t)
    n++;
  return e != n;
}
function ia(r) {
  if (r.spec.state || r.spec.filterTransaction || r.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Zt = {
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
}, fn = {
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
}, Gp = typeof navigator < "u" && /Mac/.test(navigator.platform), Kp = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var K = 0; K < 10; K++) Zt[48 + K] = Zt[96 + K] = String(K);
for (var K = 1; K <= 24; K++) Zt[K + 111] = "F" + K;
for (var K = 65; K <= 90; K++)
  Zt[K] = String.fromCharCode(K + 32), fn[K] = String.fromCharCode(K);
for (var uo in Zt) fn.hasOwnProperty(uo) || (fn[uo] = Zt[uo]);
function Zp(r) {
  var t = Gp && r.metaKey && r.shiftKey && !r.ctrlKey && !r.altKey || Kp && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", e = !t && r.key || (r.shiftKey ? fn : Zt)[r.keyCode] || r.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
const Yp = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Xp = typeof navigator < "u" && /Win/.test(navigator.platform);
function Qp(r) {
  let t = r.split(/-(?!$)/), e = t[t.length - 1];
  e == "Space" && (e = " ");
  let n, o, i, s;
  for (let a = 0; a < t.length - 1; a++) {
    let l = t[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      o = !0;
    else if (/^s(hift)?$/i.test(l))
      i = !0;
    else if (/^mod$/i.test(l))
      Yp ? s = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + l);
  }
  return n && (e = "Alt-" + e), o && (e = "Ctrl-" + e), s && (e = "Meta-" + e), i && (e = "Shift-" + e), e;
}
function tf(r) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in r)
    t[Qp(e)] = r[e];
  return t;
}
function po(r, t, e = !0) {
  return t.altKey && (r = "Alt-" + r), t.ctrlKey && (r = "Ctrl-" + r), t.metaKey && (r = "Meta-" + r), e && t.shiftKey && (r = "Shift-" + r), r;
}
function ef(r) {
  return new q({ props: { handleKeyDown: kc(r) } });
}
function kc(r) {
  let t = tf(r);
  return function(e, n) {
    let o = Zp(n), i, s = t[po(o, n)];
    if (s && s(e.state, e.dispatch, e))
      return !0;
    if (o.length == 1 && o != " ") {
      if (n.shiftKey) {
        let a = t[po(o, n, !1)];
        if (a && a(e.state, e.dispatch, e))
          return !0;
      }
      if ((n.altKey || n.metaKey || n.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Xp && n.ctrlKey && n.altKey) && (i = Zt[n.keyCode]) && i != o) {
        let a = t[po(i, n)];
        if (a && a(e.state, e.dispatch, e))
          return !0;
      }
    }
    return !1;
  };
}
var rf = Object.defineProperty, $i = (r, t) => {
  for (var e in t)
    rf(r, e, { get: t[e], enumerable: !0 });
};
function jn(r) {
  const { state: t, transaction: e } = r;
  let { selection: n } = e, { doc: o } = e, { storedMarks: i } = e;
  return {
    ...t,
    apply: t.apply.bind(t),
    applyTransaction: t.applyTransaction.bind(t),
    plugins: t.plugins,
    schema: t.schema,
    reconfigure: t.reconfigure.bind(t),
    toJSON: t.toJSON.bind(t),
    get storedMarks() {
      return i;
    },
    get selection() {
      return n;
    },
    get doc() {
      return o;
    },
    get tr() {
      return n = e.selection, o = e.doc, i = e.storedMarks, e;
    }
  };
}
var Ln = class {
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
    const { rawCommands: r, editor: t, state: e } = this, { view: n } = t, { tr: o } = e, i = this.buildProps(o);
    return Object.fromEntries(
      Object.entries(r).map(([s, a]) => [s, (...l) => {
        const c = a(...l)(i);
        return !o.getMeta("preventDispatch") && !this.hasCustomState && n.dispatch(o), c;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(r, t = !0) {
    const { rawCommands: e, editor: n, state: o } = this, { view: i } = n, s = [], a = !!r, l = r || o.tr, c = () => (!a && t && !l.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(l), s.every((d) => d === !0)), h = {
      ...Object.fromEntries(
        Object.entries(e).map(([d, u]) => [d, (...p) => {
          const f = this.buildProps(l, t), g = u(...p)(f);
          return s.push(g), h;
        }])
      ),
      run: c
    };
    return h;
  }
  createCan(r) {
    const { rawCommands: t, state: e } = this, n = !1, o = r || e.tr, i = this.buildProps(o, n);
    return {
      ...Object.fromEntries(
        Object.entries(t).map(([s, a]) => [s, (...l) => a(...l)({ ...i, dispatch: void 0 })])
      ),
      chain: () => this.createChain(o, n)
    };
  }
  buildProps(r, t = !0) {
    const { rawCommands: e, editor: n, state: o } = this, { view: i } = n, s = {
      tr: r,
      editor: n,
      view: i,
      state: jn({
        state: o,
        transaction: r
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(r, t),
      can: () => this.createCan(r),
      get commands() {
        return Object.fromEntries(
          Object.entries(e).map(([a, l]) => [a, (...c) => l(...c)(s)])
        );
      }
    };
    return s;
  }
}, wc = {};
$i(wc, {
  blur: () => nf,
  clearContent: () => of,
  clearNodes: () => sf,
  command: () => af,
  createParagraphNear: () => lf,
  cut: () => cf,
  deleteCurrentNode: () => hf,
  deleteNode: () => df,
  deleteRange: () => uf,
  deleteSelection: () => pf,
  enter: () => ff,
  exitCode: () => mf,
  extendMarkRange: () => gf,
  first: () => bf,
  focus: () => vf,
  forEach: () => kf,
  insertContent: () => wf,
  insertContentAt: () => Mf,
  joinBackward: () => Tf,
  joinDown: () => Cf,
  joinForward: () => Of,
  joinItemBackward: () => Af,
  joinItemForward: () => Ef,
  joinTextblockBackward: () => Nf,
  joinTextblockForward: () => If,
  joinUp: () => Sf,
  keyboardShortcut: () => Rf,
  lift: () => zf,
  liftEmptyBlock: () => Pf,
  liftListItem: () => jf,
  newlineInCode: () => Lf,
  resetAttributes: () => _f,
  scrollIntoView: () => Bf,
  selectAll: () => Vf,
  selectNodeBackward: () => Hf,
  selectNodeForward: () => Ff,
  selectParentNode: () => Wf,
  selectTextblockEnd: () => Uf,
  selectTextblockStart: () => qf,
  setContent: () => Jf,
  setMark: () => fm,
  setMeta: () => mm,
  setNode: () => gm,
  setNodeSelection: () => bm,
  setTextSelection: () => ym,
  sinkListItem: () => vm,
  splitBlock: () => km,
  splitListItem: () => wm,
  toggleList: () => xm,
  toggleMark: () => $m,
  toggleNode: () => Mm,
  toggleWrap: () => Sm,
  undoInputRule: () => Cm,
  unsetAllMarks: () => Tm,
  unsetMark: () => Om,
  updateAttributes: () => Am,
  wrapIn: () => Em,
  wrapInList: () => Nm
});
var nf = () => ({ editor: r, view: t }) => (requestAnimationFrame(() => {
  var e;
  r.isDestroyed || (t.dom.blur(), (e = window?.getSelection()) == null || e.removeAllRanges());
}), !0), of = (r = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: r }), sf = () => ({ state: r, tr: t, dispatch: e }) => {
  const { selection: n } = t, { ranges: o } = n;
  return e && o.forEach(({ $from: i, $to: s }) => {
    r.doc.nodesBetween(i.pos, s.pos, (a, l) => {
      if (a.type.isText)
        return;
      const { doc: c, mapping: h } = t, d = c.resolve(h.map(l)), u = c.resolve(h.map(l + a.nodeSize)), p = d.blockRange(u);
      if (!p)
        return;
      const f = Ge(p);
      if (a.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        t.setNodeMarkup(p.start, g);
      }
      (f || f === 0) && t.lift(p, f);
    });
  }), !0;
}, af = (r) => (t) => r(t), lf = () => ({ state: r, dispatch: t }) => Pl(r, t), cf = (r, t) => ({ editor: e, tr: n }) => {
  const { state: o } = e, i = o.doc.slice(r.from, r.to);
  n.deleteRange(r.from, r.to);
  const s = n.mapping.map(t);
  return n.insert(s, i.content), n.setSelection(new C(n.doc.resolve(Math.max(s - 1, 0)))), !0;
}, hf = () => ({ tr: r, dispatch: t }) => {
  const { selection: e } = r, n = e.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const o = r.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === n.type) {
      if (t) {
        const s = o.before(i), a = o.after(i);
        r.delete(s, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function H(r, t) {
  if (typeof r == "string") {
    if (!t.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return t.nodes[r];
  }
  return r;
}
var df = (r) => ({ tr: t, state: e, dispatch: n }) => {
  const o = H(r, e.schema), i = t.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === o) {
      if (n) {
        const a = i.before(s), l = i.after(s);
        t.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, uf = (r) => ({ tr: t, dispatch: e }) => {
  const { from: n, to: o } = r;
  return e && t.delete(n, o), !0;
}, pf = () => ({ state: r, dispatch: t }) => ci(r, t), ff = () => ({ commands: r }) => r.keyboardShortcut("Enter"), mf = () => ({ state: r, dispatch: t }) => Qd(r, t);
function Mi(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
function mn(r, t, e = { strict: !0 }) {
  const n = Object.keys(t);
  return n.length ? n.every((o) => e.strict ? t[o] === r[o] : Mi(t[o]) ? t[o].test(r[o]) : t[o] === r[o]) : !0;
}
function xc(r, t, e = {}) {
  return r.find((n) => n.type === t && mn(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(e).map((o) => [o, n.attrs[o]])),
    e
  ));
}
function sa(r, t, e = {}) {
  return !!xc(r, t, e);
}
function Si(r, t, e) {
  var n;
  if (!r || !t)
    return;
  let o = r.parent.childAfter(r.parentOffset);
  if ((!o.node || !o.node.marks.some((c) => c.type === t)) && (o = r.parent.childBefore(r.parentOffset)), !o.node || !o.node.marks.some((c) => c.type === t) || (e = e || ((n = o.node.marks[0]) == null ? void 0 : n.attrs), !xc([...o.node.marks], t, e)))
    return;
  let i = o.index, s = r.start() + o.offset, a = i + 1, l = s + o.node.nodeSize;
  for (; i > 0 && sa([...r.parent.child(i - 1).marks], t, e); )
    i -= 1, s -= r.parent.child(i).nodeSize;
  for (; a < r.parent.childCount && sa([...r.parent.child(a).marks], t, e); )
    l += r.parent.child(a).nodeSize, a += 1;
  return {
    from: s,
    to: l
  };
}
function Rt(r, t) {
  if (typeof r == "string") {
    if (!t.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return t.marks[r];
  }
  return r;
}
var gf = (r, t = {}) => ({ tr: e, state: n, dispatch: o }) => {
  const i = Rt(r, n.schema), { doc: s, selection: a } = e, { $from: l, from: c, to: h } = a;
  if (o) {
    const d = Si(l, i, t);
    if (d && d.from <= c && d.to >= h) {
      const u = C.create(s, d.from, d.to);
      e.setSelection(u);
    }
  }
  return !0;
}, bf = (r) => (t) => {
  const e = typeof r == "function" ? r(t) : r;
  for (let n = 0; n < e.length; n += 1)
    if (e[n](t))
      return !0;
  return !1;
};
function $c(r) {
  return r instanceof C;
}
function de(r = 0, t = 0, e = 0) {
  return Math.min(Math.max(r, t), e);
}
function Mc(r, t = null) {
  if (!t)
    return null;
  const e = A.atStart(r), n = A.atEnd(r);
  if (t === "start" || t === !0)
    return e;
  if (t === "end")
    return n;
  const o = e.from, i = n.to;
  return t === "all" ? C.create(r, de(0, o, i), de(r.content.size, o, i)) : C.create(r, de(t, o, i), de(t, o, i));
}
function yf() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Ci() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var vf = (r = null, t = {}) => ({ editor: e, view: n, tr: o, dispatch: i }) => {
  t = {
    scrollIntoView: !0,
    ...t
  };
  const s = () => {
    (Ci() || yf()) && n.dom.focus(), requestAnimationFrame(() => {
      e.isDestroyed || (n.focus(), t?.scrollIntoView && e.commands.scrollIntoView());
    });
  };
  if (n.hasFocus() && r === null || r === !1)
    return !0;
  if (i && r === null && !$c(e.state.selection))
    return s(), !0;
  const a = Mc(o.doc, r) || e.state.selection, l = e.state.selection.eq(a);
  return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0;
}, kf = (r, t) => (e) => r.every((n, o) => t(n, { ...e, index: o })), wf = (r, t) => ({ tr: e, commands: n }) => n.insertContentAt({ from: e.selection.from, to: e.selection.to }, r, t), Sc = (r) => {
  const t = r.childNodes;
  for (let e = t.length - 1; e >= 0; e -= 1) {
    const n = t[e];
    n.nodeType === 3 && n.nodeValue && /^(\n\s\s|\n)$/.test(n.nodeValue) ? r.removeChild(n) : n.nodeType === 1 && Sc(n);
  }
  return r;
};
function jr(r) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const t = `<body>${r}</body>`, e = new window.DOMParser().parseFromString(t, "text/html").body;
  return Sc(e);
}
function br(r, t, e) {
  if (r instanceof wt || r instanceof v)
    return r;
  e = {
    slice: !0,
    parseOptions: {},
    ...e
  };
  const n = typeof r == "object" && r !== null, o = typeof r == "string";
  if (n)
    try {
      if (Array.isArray(r) && r.length > 0)
        return v.fromArray(r.map((s) => t.nodeFromJSON(s)));
      const i = t.nodeFromJSON(r);
      return e.errorOnInvalidContent && i.check(), i;
    } catch (i) {
      if (e.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", i), br("", t, e);
    }
  if (o) {
    if (e.errorOnInvalidContent) {
      let s = !1, a = "";
      const l = new cl({
        topNode: t.spec.topNode,
        marks: t.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: t.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, a = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (e.slice ? Ut.fromSchema(l).parseSlice(jr(r), e.parseOptions) : Ut.fromSchema(l).parse(jr(r), e.parseOptions), e.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${a}`)
        });
    }
    const i = Ut.fromSchema(t);
    return e.slice ? i.parseSlice(jr(r), e.parseOptions).content : i.parse(jr(r), e.parseOptions);
  }
  return br("", t, e);
}
function xf(r, t, e) {
  const n = r.steps.length - 1;
  if (n < t)
    return;
  const o = r.steps[n];
  if (!(o instanceof F || o instanceof W))
    return;
  const i = r.mapping.maps[n];
  let s = 0;
  i.forEach((a, l, c, h) => {
    s === 0 && (s = h);
  }), r.setSelection(A.near(r.doc.resolve(s), e));
}
var $f = (r) => !("type" in r), Mf = (r, t, e) => ({ tr: n, dispatch: o, editor: i }) => {
  var s;
  if (o) {
    e = {
      parseOptions: i.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...e
    };
    let a;
    const l = (g) => {
      i.emit("contentError", {
        editor: i,
        error: g,
        disableCollaboration: () => {
          "collaboration" in i.storage && typeof i.storage.collaboration == "object" && i.storage.collaboration && (i.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...e.parseOptions
    };
    if (!e.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError)
      try {
        br(t, i.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        l(g);
      }
    try {
      a = br(t, i.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = e.errorOnInvalidContent) != null ? s : i.options.enableContentCheck
      });
    } catch (g) {
      return l(g), !1;
    }
    let { from: h, to: d } = typeof r == "number" ? { from: r, to: r } : { from: r.from, to: r.to }, u = !0, p = !0;
    if (($f(a) ? a : [a]).forEach((g) => {
      g.check(), u = u ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), h === d && p) {
      const { parent: g } = n.doc.resolve(h);
      g.isTextblock && !g.type.spec.code && !g.childCount && (h -= 1, d += 1);
    }
    let f;
    if (u) {
      if (Array.isArray(t))
        f = t.map((g) => g.text || "").join("");
      else if (t instanceof v) {
        let g = "";
        t.forEach((b) => {
          b.text && (g += b.text);
        }), f = g;
      } else typeof t == "object" && t && t.text ? f = t.text : f = t;
      n.insertText(f, h, d);
    } else {
      f = a;
      const g = n.doc.resolve(h), b = g.node(), y = g.parentOffset === 0, w = b.isText || b.isTextblock, x = b.content.size > 0;
      y && w && x && (h = Math.max(0, h - 1)), n.replaceWith(h, d, f);
    }
    e.updateSelection && xf(n, n.steps.length - 1, -1), e.applyInputRules && n.setMeta("applyInputRules", { from: h, text: f }), e.applyPasteRules && n.setMeta("applyPasteRules", { from: h, text: f });
  }
  return !0;
}, Sf = () => ({ state: r, dispatch: t }) => Zd(r, t), Cf = () => ({ state: r, dispatch: t }) => Yd(r, t), Tf = () => ({ state: r, dispatch: t }) => Al(r, t), Of = () => ({ state: r, dispatch: t }) => Dl(r, t), Af = () => ({ state: r, dispatch: t, tr: e }) => {
  try {
    const n = Nn(r.doc, r.selection.$from.pos, -1);
    return n == null ? !1 : (e.join(n, 2), t && t(e), !0);
  } catch {
    return !1;
  }
}, Ef = () => ({ state: r, dispatch: t, tr: e }) => {
  try {
    const n = Nn(r.doc, r.selection.$from.pos, 1);
    return n == null ? !1 : (e.join(n, 2), t && t(e), !0);
  } catch {
    return !1;
  }
}, Nf = () => ({ state: r, dispatch: t }) => Gd(r, t), If = () => ({ state: r, dispatch: t }) => Kd(r, t);
function Cc() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Df(r) {
  const t = r.split(/-(?!$)/);
  let e = t[t.length - 1];
  e === "Space" && (e = " ");
  let n, o, i, s;
  for (let a = 0; a < t.length - 1; a += 1) {
    const l = t[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      o = !0;
    else if (/^s(hift)?$/i.test(l))
      i = !0;
    else if (/^mod$/i.test(l))
      Ci() || Cc() ? s = !0 : o = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return n && (e = `Alt-${e}`), o && (e = `Ctrl-${e}`), s && (e = `Meta-${e}`), i && (e = `Shift-${e}`), e;
}
var Rf = (r) => ({ editor: t, view: e, tr: n, dispatch: o }) => {
  const i = Df(r).split(/-(?!$)/), s = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), a = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  });
  return t.captureTransaction(() => {
    e.someProp("handleKeyDown", (c) => c(e, a));
  })?.steps.forEach((c) => {
    const h = c.map(n.mapping);
    h && o && n.maybeStep(h);
  }), !0;
};
function Yt(r, t, e = {}) {
  const { from: n, to: o, empty: i } = r.selection, s = t ? H(t, r.schema) : null, a = [];
  r.doc.nodesBetween(n, o, (h, d) => {
    if (h.isText)
      return;
    const u = Math.max(n, d), p = Math.min(o, d + h.nodeSize);
    a.push({
      node: h,
      from: u,
      to: p
    });
  });
  const l = o - n, c = a.filter((h) => s ? s.name === h.node.type.name : !0).filter((h) => mn(h.node.attrs, e, { strict: !1 }));
  return i ? !!c.length : c.reduce((h, d) => h + d.to - d.from, 0) >= l;
}
var zf = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const o = H(r, e.schema);
  return Yt(e, o, t) ? Xd(e, n) : !1;
}, Pf = () => ({ state: r, dispatch: t }) => jl(r, t), jf = (r) => ({ state: t, dispatch: e }) => {
  const n = H(r, t.schema);
  return hu(n)(t, e);
}, Lf = () => ({ state: r, dispatch: t }) => zl(r, t);
function _n(r, t) {
  return t.nodes[r] ? "node" : t.marks[r] ? "mark" : null;
}
function aa(r, t) {
  const e = typeof t == "string" ? [t] : t;
  return Object.keys(r).reduce((n, o) => (e.includes(o) || (n[o] = r[o]), n), {});
}
var _f = (r, t) => ({ tr: e, state: n, dispatch: o }) => {
  let i = null, s = null;
  const a = _n(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  return a ? (a === "node" && (i = H(r, n.schema)), a === "mark" && (s = Rt(r, n.schema)), o && e.selection.ranges.forEach((l) => {
    n.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, h) => {
      i && i === c.type && e.setNodeMarkup(h, void 0, aa(c.attrs, t)), s && c.marks.length && c.marks.forEach((d) => {
        s === d.type && e.addMark(h, h + c.nodeSize, s.create(aa(d.attrs, t)));
      });
    });
  }), !0) : !1;
}, Bf = () => ({ tr: r, dispatch: t }) => (t && r.scrollIntoView(), !0), Vf = () => ({ tr: r, dispatch: t }) => {
  if (t) {
    const e = new ct(r.doc);
    r.setSelection(e);
  }
  return !0;
}, Hf = () => ({ state: r, dispatch: t }) => Nl(r, t), Ff = () => ({ state: r, dispatch: t }) => Rl(r, t), Wf = () => ({ state: r, dispatch: t }) => ru(r, t), Uf = () => ({ state: r, dispatch: t }) => iu(r, t), qf = () => ({ state: r, dispatch: t }) => ou(r, t);
function _o(r, t, e = {}, n = {}) {
  return br(r, t, {
    slice: !1,
    parseOptions: e,
    errorOnInvalidContent: n.errorOnInvalidContent
  });
}
var Jf = (r, { errorOnInvalidContent: t, emitUpdate: e = !0, parseOptions: n = {} } = {}) => ({ editor: o, tr: i, dispatch: s, commands: a }) => {
  const { doc: l } = i;
  if (n.preserveWhitespace !== "full") {
    const c = _o(r, o.schema, n, {
      errorOnInvalidContent: t ?? o.options.enableContentCheck
    });
    return s && i.replaceWith(0, l.content.size, c).setMeta("preventUpdate", !e), !0;
  }
  return s && i.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: l.content.size }, r, {
    parseOptions: n,
    errorOnInvalidContent: t ?? o.options.enableContentCheck
  });
};
function Tc(r, t) {
  const e = Rt(t, r.schema), { from: n, to: o, empty: i } = r.selection, s = [];
  i ? (r.storedMarks && s.push(...r.storedMarks), s.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, o, (l) => {
    s.push(...l.marks);
  });
  const a = s.find((l) => l.type.name === e.name);
  return a ? { ...a.attrs } : {};
}
function Gf(r, t) {
  const e = new Sl(r);
  return t.forEach((n) => {
    n.steps.forEach((o) => {
      e.step(o);
    });
  }), e;
}
function Kf(r) {
  for (let t = 0; t < r.edgeCount; t += 1) {
    const { type: e } = r.edge(t);
    if (e.isTextblock && !e.hasRequiredAttrs())
      return e;
  }
  return null;
}
function Zf(r, t) {
  for (let e = r.depth; e > 0; e -= 1) {
    const n = r.node(e);
    if (t(n))
      return {
        pos: e > 0 ? r.before(e) : 0,
        start: r.start(e),
        depth: e,
        node: n
      };
  }
}
function Bn(r) {
  return (t) => Zf(t.$from, r);
}
function $(r, t, e) {
  return r.config[t] === void 0 && r.parent ? $(r.parent, t, e) : typeof r.config[t] == "function" ? r.config[t].bind({
    ...e,
    parent: r.parent ? $(r.parent, t, e) : null
  }) : r.config[t];
}
function Ti(r) {
  return r.map((t) => {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    }, n = $(t, "addExtensions", e);
    return n ? [t, ...Ti(n())] : t;
  }).flat(10);
}
function Oi(r, t) {
  const e = Se.fromSchema(t).serializeFragment(r), n = document.implementation.createHTMLDocument().createElement("div");
  return n.appendChild(e), n.innerHTML;
}
function Oc(r) {
  return typeof r == "function";
}
function I(r, t = void 0, ...e) {
  return Oc(r) ? t ? r.bind(t)(...e) : r(...e) : r;
}
function Yf(r = {}) {
  return Object.keys(r).length === 0 && r.constructor === Object;
}
function yr(r) {
  const t = r.filter((o) => o.type === "extension"), e = r.filter((o) => o.type === "node"), n = r.filter((o) => o.type === "mark");
  return {
    baseExtensions: t,
    nodeExtensions: e,
    markExtensions: n
  };
}
function Ac(r) {
  const t = [], { nodeExtensions: e, markExtensions: n } = yr(r), o = [...e, ...n], i = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return r.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: o
    }, l = $(
      s,
      "addGlobalAttributes",
      a
    );
    l && l().forEach((c) => {
      c.types.forEach((h) => {
        Object.entries(c.attributes).forEach(([d, u]) => {
          t.push({
            type: h,
            name: d,
            attribute: {
              ...i,
              ...u
            }
          });
        });
      });
    });
  }), o.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, l = $(
      s,
      "addAttributes",
      a
    );
    if (!l)
      return;
    const c = l();
    Object.entries(c).forEach(([h, d]) => {
      const u = {
        ...i,
        ...d
      };
      typeof u?.default == "function" && (u.default = u.default()), u?.isRequired && u?.default === void 0 && delete u.default, t.push({
        type: s.name,
        name: h,
        attribute: u
      });
    });
  }), t;
}
function ht(...r) {
  return r.filter((t) => !!t).reduce((t, e) => {
    const n = { ...t };
    return Object.entries(e).forEach(([o, i]) => {
      if (!n[o]) {
        n[o] = i;
        return;
      }
      if (o === "class") {
        const s = i ? String(i).split(" ") : [], a = n[o] ? n[o].split(" ") : [], l = s.filter((c) => !a.includes(c));
        n[o] = [...a, ...l].join(" ");
      } else if (o === "style") {
        const s = i ? i.split(";").map((c) => c.trim()).filter(Boolean) : [], a = n[o] ? n[o].split(";").map((c) => c.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        a.forEach((c) => {
          const [h, d] = c.split(":").map((u) => u.trim());
          l.set(h, d);
        }), s.forEach((c) => {
          const [h, d] = c.split(":").map((u) => u.trim());
          l.set(h, d);
        }), n[o] = Array.from(l.entries()).map(([c, h]) => `${c}: ${h}`).join("; ");
      } else
        n[o] = i;
    }), n;
  }, {});
}
function gn(r, t) {
  return t.filter((e) => e.type === r.type.name).filter((e) => e.attribute.rendered).map((e) => e.attribute.renderHTML ? e.attribute.renderHTML(r.attrs) || {} : {
    [e.name]: r.attrs[e.name]
  }).reduce((e, n) => ht(e, n), {});
}
function Xf(r) {
  return typeof r != "string" ? r : r.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(r) : r === "true" ? !0 : r === "false" ? !1 : r;
}
function la(r, t) {
  return "style" in r ? r : {
    ...r,
    getAttrs: (e) => {
      const n = r.getAttrs ? r.getAttrs(e) : r.attrs;
      if (n === !1)
        return !1;
      const o = t.reduce((i, s) => {
        const a = s.attribute.parseHTML ? s.attribute.parseHTML(e) : Xf(e.getAttribute(s.name));
        return a == null ? i : {
          ...i,
          [s.name]: a
        };
      }, {});
      return { ...n, ...o };
    }
  };
}
function ca(r) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(r).filter(([t, e]) => t === "attrs" && Yf(e) ? !1 : e != null)
  );
}
function Qf(r, t) {
  var e;
  const n = Ac(r), { nodeExtensions: o, markExtensions: i } = yr(r), s = (e = o.find((c) => $(c, "topNode"))) == null ? void 0 : e.name, a = Object.fromEntries(
    o.map((c) => {
      const h = n.filter((y) => y.type === c.name), d = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: t
      }, u = r.reduce((y, w) => {
        const x = $(w, "extendNodeSchema", d);
        return {
          ...y,
          ...x ? x(c) : {}
        };
      }, {}), p = ca({
        ...u,
        content: I($(c, "content", d)),
        marks: I($(c, "marks", d)),
        group: I($(c, "group", d)),
        inline: I($(c, "inline", d)),
        atom: I($(c, "atom", d)),
        selectable: I($(c, "selectable", d)),
        draggable: I($(c, "draggable", d)),
        code: I($(c, "code", d)),
        whitespace: I($(c, "whitespace", d)),
        linebreakReplacement: I(
          $(c, "linebreakReplacement", d)
        ),
        defining: I($(c, "defining", d)),
        isolating: I($(c, "isolating", d)),
        attrs: Object.fromEntries(
          h.map((y) => {
            var w, x;
            return [
              y.name,
              { default: (w = y?.attribute) == null ? void 0 : w.default, validate: (x = y?.attribute) == null ? void 0 : x.validate }
            ];
          })
        )
      }), f = I($(c, "parseHTML", d));
      f && (p.parseDOM = f.map(
        (y) => la(y, h)
      ));
      const g = $(c, "renderHTML", d);
      g && (p.toDOM = (y) => g({
        node: y,
        HTMLAttributes: gn(y, h)
      }));
      const b = $(c, "renderText", d);
      return b && (p.toText = b), [c.name, p];
    })
  ), l = Object.fromEntries(
    i.map((c) => {
      const h = n.filter((b) => b.type === c.name), d = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: t
      }, u = r.reduce((b, y) => {
        const w = $(y, "extendMarkSchema", d);
        return {
          ...b,
          ...w ? w(c) : {}
        };
      }, {}), p = ca({
        ...u,
        inclusive: I($(c, "inclusive", d)),
        excludes: I($(c, "excludes", d)),
        group: I($(c, "group", d)),
        spanning: I($(c, "spanning", d)),
        code: I($(c, "code", d)),
        attrs: Object.fromEntries(
          h.map((b) => {
            var y, w;
            return [
              b.name,
              { default: (y = b?.attribute) == null ? void 0 : y.default, validate: (w = b?.attribute) == null ? void 0 : w.validate }
            ];
          })
        )
      }), f = I($(c, "parseHTML", d));
      f && (p.parseDOM = f.map(
        (b) => la(b, h)
      ));
      const g = $(c, "renderHTML", d);
      return g && (p.toDOM = (b) => g({
        mark: b,
        HTMLAttributes: gn(b, h)
      })), [c.name, p];
    })
  );
  return new cl({
    topNode: s,
    nodes: a,
    marks: l
  });
}
function tm(r) {
  const t = r.filter((e, n) => r.indexOf(e) !== n);
  return Array.from(new Set(t));
}
function Ai(r) {
  return r.sort((t, e) => {
    const n = $(t, "priority") || 100, o = $(e, "priority") || 100;
    return n > o ? -1 : n < o ? 1 : 0;
  });
}
function Ec(r) {
  const t = Ai(Ti(r)), e = tm(t.map((n) => n.name));
  return e.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${e.map((n) => `'${n}'`).join(", ")}]. This can lead to issues.`
  ), t;
}
function Nc(r, t, e) {
  const { from: n, to: o } = t, { blockSeparator: i = `

`, textSerializers: s = {} } = e || {};
  let a = "";
  return r.nodesBetween(n, o, (l, c, h, d) => {
    var u;
    l.isBlock && c > n && (a += i);
    const p = s?.[l.type.name];
    if (p)
      return h && (a += p({
        node: l,
        pos: c,
        parent: h,
        index: d,
        range: t
      })), !1;
    l.isText && (a += (u = l?.text) == null ? void 0 : u.slice(Math.max(n, c) - c, o - c));
  }), a;
}
function em(r, t) {
  const e = {
    from: 0,
    to: r.content.size
  };
  return Nc(r, e, t);
}
function Ic(r) {
  return Object.fromEntries(
    Object.entries(r.nodes).filter(([, t]) => t.spec.toText).map(([t, e]) => [t, e.spec.toText])
  );
}
function rm(r, t) {
  const e = H(t, r.schema), { from: n, to: o } = r.selection, i = [];
  r.doc.nodesBetween(n, o, (a) => {
    i.push(a);
  });
  const s = i.reverse().find((a) => a.type.name === e.name);
  return s ? { ...s.attrs } : {};
}
function nm(r, t) {
  const e = _n(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  return e === "node" ? rm(r, t) : e === "mark" ? Tc(r, t) : {};
}
function om(r, t = JSON.stringify) {
  const e = {};
  return r.filter((n) => {
    const o = t(n);
    return Object.prototype.hasOwnProperty.call(e, o) ? !1 : e[o] = !0;
  });
}
function im(r) {
  const t = om(r);
  return t.length === 1 ? t : t.filter((e, n) => !t.filter((o, i) => i !== n).some((o) => e.oldRange.from >= o.oldRange.from && e.oldRange.to <= o.oldRange.to && e.newRange.from >= o.newRange.from && e.newRange.to <= o.newRange.to));
}
function sm(r) {
  const { mapping: t, steps: e } = r, n = [];
  return t.maps.forEach((o, i) => {
    const s = [];
    if (o.ranges.length)
      o.forEach((a, l) => {
        s.push({ from: a, to: l });
      });
    else {
      const { from: a, to: l } = e[i];
      if (a === void 0 || l === void 0)
        return;
      s.push({ from: a, to: l });
    }
    s.forEach(({ from: a, to: l }) => {
      const c = t.slice(i).map(a, -1), h = t.slice(i).map(l), d = t.invert().map(c, -1), u = t.invert().map(h);
      n.push({
        oldRange: {
          from: d,
          to: u
        },
        newRange: {
          from: c,
          to: h
        }
      });
    });
  }), im(n);
}
function Dc(r, t, e) {
  const n = [];
  return r === t ? e.resolve(r).marks().forEach((o) => {
    const i = e.resolve(r), s = Si(i, o.type);
    s && n.push({
      mark: o,
      ...s
    });
  }) : e.nodesBetween(r, t, (o, i) => {
    !o || o?.nodeSize === void 0 || n.push(
      ...o.marks.map((s) => ({
        from: i,
        to: i + o.nodeSize,
        mark: s
      }))
    );
  }), n;
}
var am = (r, t, e, n = 20) => {
  const o = r.doc.resolve(e);
  let i = n, s = null;
  for (; i > 0 && s === null; ) {
    const a = o.node(i);
    a?.type.name === t ? s = a : i -= 1;
  }
  return [s, i];
};
function fo(r, t) {
  return t.nodes[r] || t.marks[r] || null;
}
function qr(r, t, e) {
  return Object.fromEntries(
    Object.entries(e).filter(([n]) => {
      const o = r.find((i) => i.type === t && i.name === n);
      return o ? o.attribute.keepOnSplit : !1;
    })
  );
}
var lm = (r, t = 500) => {
  let e = "";
  const n = r.parentOffset;
  return r.parent.nodesBetween(Math.max(0, n - t), n, (o, i, s, a) => {
    var l, c;
    const h = ((c = (l = o.type.spec).toText) == null ? void 0 : c.call(l, {
      node: o,
      pos: i,
      parent: s,
      index: a
    })) || o.textContent || "%leaf%";
    e += o.isAtom && !o.isText ? h : h.slice(0, Math.max(0, n - i));
  }), e;
};
function Bo(r, t, e = {}) {
  const { empty: n, ranges: o } = r.selection, i = t ? Rt(t, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((h) => i ? i.name === h.type.name : !0).find((h) => mn(h.attrs, e, { strict: !1 }));
  let s = 0;
  const a = [];
  if (o.forEach(({ $from: h, $to: d }) => {
    const u = h.pos, p = d.pos;
    r.doc.nodesBetween(u, p, (f, g) => {
      if (!f.isText && !f.marks.length)
        return;
      const b = Math.max(u, g), y = Math.min(p, g + f.nodeSize), w = y - b;
      s += w, a.push(
        ...f.marks.map((x) => ({
          mark: x,
          from: b,
          to: y
        }))
      );
    });
  }), s === 0)
    return !1;
  const l = a.filter((h) => i ? i.name === h.mark.type.name : !0).filter((h) => mn(h.mark.attrs, e, { strict: !1 })).reduce((h, d) => h + d.to - d.from, 0), c = a.filter((h) => i ? h.mark.type !== i && h.mark.type.excludes(i) : !0).reduce((h, d) => h + d.to - d.from, 0);
  return (l > 0 ? l + c : l) >= s;
}
function cm(r, t, e = {}) {
  if (!t)
    return Yt(r, null, e) || Bo(r, null, e);
  const n = _n(t, r.schema);
  return n === "node" ? Yt(r, t, e) : n === "mark" ? Bo(r, t, e) : !1;
}
var hm = (r, t) => {
  const { $from: e, $to: n, $anchor: o } = r.selection;
  if (t) {
    const i = Bn((a) => a.type.name === t)(r.selection);
    if (!i)
      return !1;
    const s = r.doc.resolve(i.pos + 1);
    return o.pos + 1 === s.end();
  }
  return !(n.parentOffset < n.parent.nodeSize - 2 || e.pos !== n.pos);
}, dm = (r) => {
  const { $from: t, $to: e } = r.selection;
  return !(t.parentOffset > 0 || t.pos !== e.pos);
};
function ha(r, t) {
  return Array.isArray(t) ? t.some((e) => (typeof e == "string" ? e : e.name) === r.name) : t;
}
function da(r, t) {
  const { nodeExtensions: e } = yr(t), n = e.find((s) => s.name === r);
  if (!n)
    return !1;
  const o = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, i = I($(n, "group", o));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function Vn(r, {
  checkChildren: t = !0,
  ignoreWhitespace: e = !1
} = {}) {
  var n;
  if (e) {
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
  if (t) {
    let o = !0;
    return r.content.forEach((i) => {
      o !== !1 && (Vn(i, { ignoreWhitespace: e, checkChildren: t }) || (o = !1));
    }), o;
  }
  return !1;
}
function um(r) {
  return r instanceof S;
}
function pm(r, t, e) {
  var n;
  const { selection: o } = t;
  let i = null;
  if ($c(o) && (i = o.$cursor), i) {
    const a = (n = r.storedMarks) != null ? n : i.marks();
    return i.parent.type.allowsMarkType(e) && (!!e.isInSet(a) || !a.some((l) => l.type.excludes(e)));
  }
  const { ranges: s } = o;
  return s.some(({ $from: a, $to: l }) => {
    let c = a.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(e) : !1;
    return r.doc.nodesBetween(a.pos, l.pos, (h, d, u) => {
      if (c)
        return !1;
      if (h.isInline) {
        const p = !u || u.type.allowsMarkType(e), f = !!e.isInSet(h.marks) || !h.marks.some((g) => g.type.excludes(e));
        c = p && f;
      }
      return !c;
    }), c;
  });
}
var fm = (r, t = {}) => ({ tr: e, state: n, dispatch: o }) => {
  const { selection: i } = e, { empty: s, ranges: a } = i, l = Rt(r, n.schema);
  if (o)
    if (s) {
      const c = Tc(n, l);
      e.addStoredMark(
        l.create({
          ...c,
          ...t
        })
      );
    } else
      a.forEach((c) => {
        const h = c.$from.pos, d = c.$to.pos;
        n.doc.nodesBetween(h, d, (u, p) => {
          const f = Math.max(p, h), g = Math.min(p + u.nodeSize, d);
          u.marks.find((b) => b.type === l) ? u.marks.forEach((b) => {
            l === b.type && e.addMark(
              f,
              g,
              l.create({
                ...b.attrs,
                ...t
              })
            );
          }) : e.addMark(f, g, l.create(t));
        });
      });
  return pm(n, e, l);
}, mm = (r, t) => ({ tr: e }) => (e.setMeta(r, t), !0), gm = (r, t = {}) => ({ state: e, dispatch: n, chain: o }) => {
  const i = H(r, e.schema);
  let s;
  return e.selection.$anchor.sameParent(e.selection.$head) && (s = e.selection.$anchor.parent.attrs), i.isTextblock ? o().command(({ commands: a }) => Cs(i, { ...s, ...t })(e) ? !0 : a.clearNodes()).command(({ state: a }) => Cs(i, { ...s, ...t })(a, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, bm = (r) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: n } = t, o = de(r, 0, n.content.size), i = S.create(n, o);
    t.setSelection(i);
  }
  return !0;
}, ym = (r) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: n } = t, { from: o, to: i } = typeof r == "number" ? { from: r, to: r } : r, s = C.atStart(n).from, a = C.atEnd(n).to, l = de(o, s, a), c = de(i, s, a), h = C.create(n, l, c);
    t.setSelection(h);
  }
  return !0;
}, vm = (r) => ({ state: t, dispatch: e }) => {
  const n = H(r, t.schema);
  return pu(n)(t, e);
};
function ua(r, t) {
  const e = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (e) {
    const n = e.filter((o) => t?.includes(o.type.name));
    r.tr.ensureMarks(n);
  }
}
var km = ({ keepMarks: r = !0 } = {}) => ({ tr: t, state: e, dispatch: n, editor: o }) => {
  const { selection: i, doc: s } = t, { $from: a, $to: l } = i, c = o.extensionManager.attributes, h = qr(c, a.node().type.name, a.node().attrs);
  if (i instanceof S && i.node.isBlock)
    return !a.parentOffset || !It(s, a.pos) ? !1 : (n && (r && ua(e, o.extensionManager.splittableMarks), t.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const d = l.parentOffset === l.parent.content.size, u = a.depth === 0 ? void 0 : Kf(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let p = d && u ? [
    {
      type: u,
      attrs: h
    }
  ] : void 0, f = It(t.doc, t.mapping.map(a.pos), 1, p);
  if (!p && !f && It(t.doc, t.mapping.map(a.pos), 1, u ? [{ type: u }] : void 0) && (f = !0, p = u ? [
    {
      type: u,
      attrs: h
    }
  ] : void 0), n) {
    if (f && (i instanceof C && t.deleteSelection(), t.split(t.mapping.map(a.pos), 1, p), u && !d && !a.parentOffset && a.parent.type !== u)) {
      const g = t.mapping.map(a.before()), b = t.doc.resolve(g);
      a.node(-1).canReplaceWith(b.index(), b.index() + 1, u) && t.setNodeMarkup(t.mapping.map(a.before()), u);
    }
    r && ua(e, o.extensionManager.splittableMarks), t.scrollIntoView();
  }
  return f;
}, wm = (r, t = {}) => ({ tr: e, state: n, dispatch: o, editor: i }) => {
  var s;
  const a = H(r, n.schema), { $from: l, $to: c } = n.selection, h = n.selection.node;
  if (h && h.isBlock || l.depth < 2 || !l.sameParent(c))
    return !1;
  const d = l.node(-1);
  if (d.type !== a)
    return !1;
  const u = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (o) {
      let y = v.empty;
      const w = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let E = l.depth - w; E >= l.depth - 3; E -= 1)
        y = v.from(l.node(E).copy(y));
      const x = (
        // eslint-disable-next-line no-nested-ternary
        l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3
      ), O = {
        ...qr(u, l.node().type.name, l.node().attrs),
        ...t
      }, T = ((s = a.contentMatch.defaultType) == null ? void 0 : s.createAndFill(O)) || void 0;
      y = y.append(v.from(a.createAndFill(null, T) || void 0));
      const N = l.before(l.depth - (w - 1));
      e.replace(N, l.after(-x), new k(y, 4 - w, 0));
      let M = -1;
      e.doc.nodesBetween(N, e.doc.content.size, (E, R) => {
        if (M > -1)
          return !1;
        E.isTextblock && E.content.size === 0 && (M = R + 1);
      }), M > -1 && e.setSelection(C.near(e.doc.resolve(M))), e.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === l.end() ? d.contentMatchAt(0).defaultType : null, f = {
    ...qr(u, d.type.name, d.attrs),
    ...t
  }, g = {
    ...qr(u, l.node().type.name, l.node().attrs),
    ...t
  };
  e.delete(l.pos, c.pos);
  const b = p ? [
    { type: a, attrs: f },
    { type: p, attrs: g }
  ] : [{ type: a, attrs: f }];
  if (!It(e.doc, l.pos, 2))
    return !1;
  if (o) {
    const { selection: y, storedMarks: w } = n, { splittableMarks: x } = i.extensionManager, O = w || y.$to.parentOffset && y.$from.marks();
    if (e.split(l.pos, 2, b).scrollIntoView(), !O || !o)
      return !0;
    const T = O.filter((N) => x.includes(N.type.name));
    e.ensureMarks(T);
  }
  return !0;
}, mo = (r, t) => {
  const e = Bn((i) => i.type === t)(r.selection);
  if (!e)
    return !0;
  const n = r.doc.resolve(Math.max(0, e.pos - 1)).before(e.depth);
  if (n === void 0)
    return !0;
  const o = r.doc.nodeAt(n);
  return e.node.type === o?.type && oe(r.doc, e.pos) && r.join(e.pos), !0;
}, go = (r, t) => {
  const e = Bn((i) => i.type === t)(r.selection);
  if (!e)
    return !0;
  const n = r.doc.resolve(e.start).after(e.depth);
  if (n === void 0)
    return !0;
  const o = r.doc.nodeAt(n);
  return e.node.type === o?.type && oe(r.doc, n) && r.join(n), !0;
}, xm = (r, t, e, n = {}) => ({ editor: o, tr: i, state: s, dispatch: a, chain: l, commands: c, can: h }) => {
  const { extensions: d, splittableMarks: u } = o.extensionManager, p = H(r, s.schema), f = H(t, s.schema), { selection: g, storedMarks: b } = s, { $from: y, $to: w } = g, x = y.blockRange(w), O = b || g.$to.parentOffset && g.$from.marks();
  if (!x)
    return !1;
  const T = Bn((N) => da(N.type.name, d))(g);
  if (x.depth >= 1 && T && x.depth - T.depth <= 1) {
    if (T.node.type === p)
      return c.liftListItem(f);
    if (da(T.node.type.name, d) && p.validContent(T.node.content) && a)
      return l().command(() => (i.setNodeMarkup(T.pos, p), !0)).command(() => mo(i, p)).command(() => go(i, p)).run();
  }
  return !e || !O || !a ? l().command(() => h().wrapInList(p, n) ? !0 : c.clearNodes()).wrapInList(p, n).command(() => mo(i, p)).command(() => go(i, p)).run() : l().command(() => {
    const N = h().wrapInList(p, n), M = O.filter((E) => u.includes(E.type.name));
    return i.ensureMarks(M), N ? !0 : c.clearNodes();
  }).wrapInList(p, n).command(() => mo(i, p)).command(() => go(i, p)).run();
}, $m = (r, t = {}, e = {}) => ({ state: n, commands: o }) => {
  const { extendEmptyMarkRange: i = !1 } = e, s = Rt(r, n.schema);
  return Bo(n, s, t) ? o.unsetMark(s, { extendEmptyMarkRange: i }) : o.setMark(s, t);
}, Mm = (r, t, e = {}) => ({ state: n, commands: o }) => {
  const i = H(r, n.schema), s = H(t, n.schema), a = Yt(n, i, e);
  let l;
  return n.selection.$anchor.sameParent(n.selection.$head) && (l = n.selection.$anchor.parent.attrs), a ? o.setNode(s, l) : o.setNode(i, { ...l, ...e });
}, Sm = (r, t = {}) => ({ state: e, commands: n }) => {
  const o = H(r, e.schema);
  return Yt(e, o, t) ? n.lift(o) : n.wrapIn(o, t);
}, Cm = () => ({ state: r, dispatch: t }) => {
  const e = r.plugins;
  for (let n = 0; n < e.length; n += 1) {
    const o = e[n];
    let i;
    if (o.spec.isInputRules && (i = o.getState(r))) {
      if (t) {
        const s = r.tr, a = i.transform;
        for (let l = a.steps.length - 1; l >= 0; l -= 1)
          s.step(a.steps[l].invert(a.docs[l]));
        if (i.text) {
          const l = s.doc.resolve(i.from).marks();
          s.replaceWith(i.from, i.to, r.schema.text(i.text, l));
        } else
          s.delete(i.from, i.to);
      }
      return !0;
    }
  }
  return !1;
}, Tm = () => ({ tr: r, dispatch: t }) => {
  const { selection: e } = r, { empty: n, ranges: o } = e;
  return n || t && o.forEach((i) => {
    r.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, Om = (r, t = {}) => ({ tr: e, state: n, dispatch: o }) => {
  var i;
  const { extendEmptyMarkRange: s = !1 } = t, { selection: a } = e, l = Rt(r, n.schema), { $from: c, empty: h, ranges: d } = a;
  if (!o)
    return !0;
  if (h && s) {
    let { from: u, to: p } = a;
    const f = (i = c.marks().find((b) => b.type === l)) == null ? void 0 : i.attrs, g = Si(c, l, f);
    g && (u = g.from, p = g.to), e.removeMark(u, p, l);
  } else
    d.forEach((u) => {
      e.removeMark(u.$from.pos, u.$to.pos, l);
    });
  return e.removeStoredMark(l), !0;
}, Am = (r, t = {}) => ({ tr: e, state: n, dispatch: o }) => {
  let i = null, s = null;
  const a = _n(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  return a ? (a === "node" && (i = H(r, n.schema)), a === "mark" && (s = Rt(r, n.schema)), o && e.selection.ranges.forEach((l) => {
    const c = l.$from.pos, h = l.$to.pos;
    let d, u, p, f;
    e.selection.empty ? n.doc.nodesBetween(c, h, (g, b) => {
      i && i === g.type && (p = Math.max(b, c), f = Math.min(b + g.nodeSize, h), d = b, u = g);
    }) : n.doc.nodesBetween(c, h, (g, b) => {
      b < c && i && i === g.type && (p = Math.max(b, c), f = Math.min(b + g.nodeSize, h), d = b, u = g), b >= c && b <= h && (i && i === g.type && e.setNodeMarkup(b, void 0, {
        ...g.attrs,
        ...t
      }), s && g.marks.length && g.marks.forEach((y) => {
        if (s === y.type) {
          const w = Math.max(b, c), x = Math.min(b + g.nodeSize, h);
          e.addMark(
            w,
            x,
            s.create({
              ...y.attrs,
              ...t
            })
          );
        }
      }));
    }), u && (d !== void 0 && e.setNodeMarkup(d, void 0, {
      ...u.attrs,
      ...t
    }), s && u.marks.length && u.marks.forEach((g) => {
      s === g.type && e.addMark(
        p,
        f,
        s.create({
          ...g.attrs,
          ...t
        })
      );
    }));
  }), !0) : !1;
}, Em = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const o = H(r, e.schema);
  return su(o, t)(e, n);
}, Nm = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const o = H(r, e.schema);
  return au(o, t)(e, n);
}, Im = class {
  constructor() {
    this.callbacks = {};
  }
  on(r, t) {
    return this.callbacks[r] || (this.callbacks[r] = []), this.callbacks[r].push(t), this;
  }
  emit(r, ...t) {
    const e = this.callbacks[r];
    return e && e.forEach((n) => n.apply(this, t)), this;
  }
  off(r, t) {
    const e = this.callbacks[r];
    return e && (t ? this.callbacks[r] = e.filter((n) => n !== t) : delete this.callbacks[r]), this;
  }
  once(r, t) {
    const e = (...n) => {
      this.off(r, e), t.apply(this, n);
    };
    return this.on(r, e);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}, Ei = class {
  constructor(r) {
    var t;
    this.find = r.find, this.handler = r.handler, this.undoable = (t = r.undoable) != null ? t : !0;
  }
}, Dm = (r, t) => {
  if (Mi(t))
    return t.exec(r);
  const e = t(r);
  if (!e)
    return null;
  const n = [e.text];
  return n.index = e.index, n.input = r, n.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), n.push(e.replaceWith)), n;
};
function Lr(r) {
  var t;
  const { editor: e, from: n, to: o, text: i, rules: s, plugin: a } = r, { view: l } = e;
  if (l.composing)
    return !1;
  const c = l.state.doc.resolve(n);
  if (
    // check for code node
    c.parent.type.spec.code || (t = c.nodeBefore || c.nodeAfter) != null && t.marks.find((u) => u.type.spec.code)
  )
    return !1;
  let h = !1;
  const d = lm(c) + i;
  return s.forEach((u) => {
    if (h)
      return;
    const p = Dm(d, u.find);
    if (!p)
      return;
    const f = l.state.tr, g = jn({
      state: l.state,
      transaction: f
    }), b = {
      from: n - (p[0].length - i.length),
      to: o
    }, { commands: y, chain: w, can: x } = new Ln({
      editor: e,
      state: g
    });
    u.handler({
      state: g,
      range: b,
      match: p,
      commands: y,
      chain: w,
      can: x
    }) === null || !f.steps.length || (u.undoable && f.setMeta(a, {
      transform: f,
      from: n,
      to: o,
      text: i
    }), l.dispatch(f), h = !0);
  }), h;
}
function Rm(r) {
  const { editor: t, rules: e } = r, n = new q({
    state: {
      init() {
        return null;
      },
      apply(o, i, s) {
        const a = o.getMeta(n);
        if (a)
          return a;
        const l = o.getMeta("applyInputRules");
        return l && setTimeout(() => {
          let { text: c } = l;
          typeof c == "string" ? c = c : c = Oi(v.from(c), s.schema);
          const { from: h } = l, d = h + c.length;
          Lr({
            editor: t,
            from: h,
            to: d,
            text: c,
            rules: e,
            plugin: n
          });
        }), o.selectionSet || o.docChanged ? null : i;
      }
    },
    props: {
      handleTextInput(o, i, s, a) {
        return Lr({
          editor: t,
          from: i,
          to: s,
          text: a,
          rules: e,
          plugin: n
        });
      },
      handleDOMEvents: {
        compositionend: (o) => (setTimeout(() => {
          const { $cursor: i } = o.state.selection;
          i && Lr({
            editor: t,
            from: i.pos,
            to: i.pos,
            text: "",
            rules: e,
            plugin: n
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(o, i) {
        if (i.key !== "Enter")
          return !1;
        const { $cursor: s } = o.state.selection;
        return s ? Lr({
          editor: t,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: e,
          plugin: n
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return n;
}
function zm(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function _r(r) {
  return zm(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function Rc(r, t) {
  const e = { ...r };
  return _r(r) && _r(t) && Object.keys(t).forEach((n) => {
    _r(t[n]) && _r(r[n]) ? e[n] = Rc(r[n], t[n]) : e[n] = t[n];
  }), e;
}
var Ni = class {
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
      ...I(
        $(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...I(
        $(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(r = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Rc(this.options, r)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(r = {}) {
    const t = new this.constructor({ ...this.config, ...r });
    return t.parent = this, this.child = t, t.name = "name" in r ? r.name : t.parent.name, t;
  }
}, Hn = class zc extends Ni {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(t = {}) {
    const e = typeof t == "function" ? t() : t;
    return new zc(e);
  }
  static handleExit({ editor: t, mark: e }) {
    const { tr: n } = t.state, o = t.state.selection.$from;
    if (o.pos === o.end()) {
      const i = o.marks();
      if (!i.find((a) => a?.type.name === e.name))
        return !1;
      const s = i.find((a) => a?.type.name === e.name);
      return s && n.removeStoredMark(s), n.insertText(" ", o.pos), t.view.dispatch(n), !0;
    }
    return !1;
  }
  configure(t) {
    return super.configure(t);
  }
  extend(t) {
    const e = typeof t == "function" ? t() : t;
    return super.extend(e);
  }
};
function Pm(r) {
  return typeof r == "number";
}
var jm = class {
  constructor(r) {
    this.find = r.find, this.handler = r.handler;
  }
}, Lm = (r, t, e) => {
  if (Mi(t))
    return [...r.matchAll(t)];
  const n = t(r, e);
  return n ? n.map((o) => {
    const i = [o.text];
    return i.index = o.index, i.input = r, i.data = o.data, o.replaceWith && (o.text.includes(o.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(o.replaceWith)), i;
  }) : [];
};
function _m(r) {
  const { editor: t, state: e, from: n, to: o, rule: i, pasteEvent: s, dropEvent: a } = r, { commands: l, chain: c, can: h } = new Ln({
    editor: t,
    state: e
  }), d = [];
  return e.doc.nodesBetween(n, o, (u, p) => {
    var f, g, b, y, w;
    if ((g = (f = u.type) == null ? void 0 : f.spec) != null && g.code || !(u.isText || u.isTextblock || u.isInline))
      return;
    const x = (w = (y = (b = u.content) == null ? void 0 : b.size) != null ? y : u.nodeSize) != null ? w : 0, O = Math.max(n, p), T = Math.min(o, p + x);
    if (O >= T)
      return;
    const N = u.isText ? u.text || "" : u.textBetween(O - p, T - p, void 0, "￼");
    Lm(N, i.find, s).forEach((M) => {
      if (M.index === void 0)
        return;
      const E = O + M.index + 1, R = E + M[0].length, Te = {
        from: e.tr.mapping.map(E),
        to: e.tr.mapping.map(R)
      }, Yn = i.handler({
        state: e,
        range: Te,
        match: M,
        commands: l,
        chain: c,
        can: h,
        pasteEvent: s,
        dropEvent: a
      });
      d.push(Yn);
    });
  }), d.every((u) => u !== null);
}
var Br = null, Bm = (r) => {
  var t;
  const e = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (t = e.clipboardData) == null || t.setData("text/html", r), e;
};
function Vm(r) {
  const { editor: t, rules: e } = r;
  let n = null, o = !1, i = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a;
  try {
    a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    a = null;
  }
  const l = ({
    state: c,
    from: h,
    to: d,
    rule: u,
    pasteEvt: p
  }) => {
    const f = c.tr, g = jn({
      state: c,
      transaction: f
    });
    if (!(!_m({
      editor: t,
      state: g,
      from: Math.max(h - 1, 0),
      to: d.b - 1,
      rule: u,
      pasteEvent: p,
      dropEvent: a
    }) || !f.steps.length)) {
      try {
        a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        a = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, f;
    }
  };
  return e.map((c) => new q({
    // we register a global drag handler to track the current drag source element
    view(h) {
      const d = (p) => {
        var f;
        n = (f = h.dom.parentElement) != null && f.contains(p.target) ? h.dom.parentElement : null, n && (Br = t);
      }, u = () => {
        Br && (Br = null);
      };
      return window.addEventListener("dragstart", d), window.addEventListener("dragend", u), {
        destroy() {
          window.removeEventListener("dragstart", d), window.removeEventListener("dragend", u);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (h, d) => {
          if (i = n === h.dom.parentElement, a = d, !i) {
            const u = Br;
            u?.isEditable && setTimeout(() => {
              const p = u.state.selection;
              p && u.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (h, d) => {
          var u;
          const p = (u = d.clipboardData) == null ? void 0 : u.getData("text/html");
          return s = d, o = !!p?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (h, d, u) => {
      const p = h[0], f = p.getMeta("uiEvent") === "paste" && !o, g = p.getMeta("uiEvent") === "drop" && !i, b = p.getMeta("applyPasteRules"), y = !!b;
      if (!f && !g && !y)
        return;
      if (y) {
        let { text: O } = b;
        typeof O == "string" ? O = O : O = Oi(v.from(O), u.schema);
        const { from: T } = b, N = T + O.length, M = Bm(O);
        return l({
          rule: c,
          state: u,
          from: T,
          to: { b: N },
          pasteEvt: M
        });
      }
      const w = d.doc.content.findDiffStart(u.doc.content), x = d.doc.content.findDiffEnd(u.doc.content);
      if (!(!Pm(w) || !x || w === x.b))
        return l({
          rule: c,
          state: u,
          from: w,
          to: x,
          pasteEvt: s
        });
    }
  }));
}
var Fn = class {
  constructor(r, t) {
    this.splittableMarks = [], this.editor = t, this.baseExtensions = r, this.extensions = Ec(r), this.schema = Qf(this.extensions, t), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((r, t) => {
      const e = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor: this.editor,
        type: fo(t.name, this.schema)
      }, n = $(t, "addCommands", e);
      return n ? {
        ...r,
        ...n()
      } : r;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: r } = this;
    return Ai([...this.extensions].reverse()).flatMap((t) => {
      const e = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor: r,
        type: fo(t.name, this.schema)
      }, n = [], o = $(
        t,
        "addKeyboardShortcuts",
        e
      );
      let i = {};
      if (t.type === "mark" && $(t, "exitable", e) && (i.ArrowRight = () => Hn.handleExit({ editor: r, mark: t })), o) {
        const h = Object.fromEntries(
          Object.entries(o()).map(([d, u]) => [d, () => u({ editor: r })])
        );
        i = { ...i, ...h };
      }
      const s = ef(i);
      n.push(s);
      const a = $(t, "addInputRules", e);
      if (ha(t, r.options.enableInputRules) && a) {
        const h = a();
        if (h && h.length) {
          const d = Rm({
            editor: r,
            rules: h
          }), u = Array.isArray(d) ? d : [d];
          n.push(...u);
        }
      }
      const l = $(t, "addPasteRules", e);
      if (ha(t, r.options.enablePasteRules) && l) {
        const h = l();
        if (h && h.length) {
          const d = Vm({ editor: r, rules: h });
          n.push(...d);
        }
      }
      const c = $(
        t,
        "addProseMirrorPlugins",
        e
      );
      if (c) {
        const h = c();
        n.push(...h);
      }
      return n;
    });
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Ac(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: r } = this, { nodeExtensions: t } = yr(this.extensions);
    return Object.fromEntries(
      t.filter((e) => !!$(e, "addNodeView")).map((e) => {
        const n = this.attributes.filter((l) => l.type === e.name), o = {
          name: e.name,
          options: e.options,
          storage: this.editor.extensionStorage[e.name],
          editor: r,
          type: H(e.name, this.schema)
        }, i = $(e, "addNodeView", o);
        if (!i)
          return [];
        const s = i();
        if (!s)
          return [];
        const a = (l, c, h, d, u) => {
          const p = gn(l, n);
          return s({
            // pass-through
            node: l,
            view: c,
            getPos: h,
            decorations: d,
            innerDecorations: u,
            // tiptap-specific
            editor: r,
            extension: e,
            HTMLAttributes: p
          });
        };
        return [e.name, a];
      })
    );
  }
  get markViews() {
    const { editor: r } = this, { markExtensions: t } = yr(this.extensions);
    return Object.fromEntries(
      t.filter((e) => !!$(e, "addMarkView")).map((e) => {
        const n = this.attributes.filter((a) => a.type === e.name), o = {
          name: e.name,
          options: e.options,
          storage: this.editor.extensionStorage[e.name],
          editor: r,
          type: Rt(e.name, this.schema)
        }, i = $(e, "addMarkView", o);
        if (!i)
          return [];
        const s = (a, l, c) => {
          const h = gn(a, n);
          return i()({
            // pass-through
            mark: a,
            view: l,
            inline: c,
            // tiptap-specific
            editor: r,
            extension: e,
            HTMLAttributes: h,
            updateAttributes: (d) => {
              tg(a, r, d);
            }
          });
        };
        return [e.name, s];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const r = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      r.map((t) => [t.name, t.storage])
    ), r.forEach((t) => {
      var e;
      const n = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor: this.editor,
        type: fo(t.name, this.schema)
      };
      t.type === "mark" && ((e = I($(t, "keepOnSplit", n))) == null || e) && this.splittableMarks.push(t.name);
      const o = $(t, "onBeforeCreate", n), i = $(t, "onCreate", n), s = $(t, "onUpdate", n), a = $(
        t,
        "onSelectionUpdate",
        n
      ), l = $(t, "onTransaction", n), c = $(t, "onFocus", n), h = $(t, "onBlur", n), d = $(t, "onDestroy", n);
      o && this.editor.on("beforeCreate", o), i && this.editor.on("create", i), s && this.editor.on("update", s), a && this.editor.on("selectionUpdate", a), l && this.editor.on("transaction", l), c && this.editor.on("focus", c), h && this.editor.on("blur", h), d && this.editor.on("destroy", d);
    });
  }
};
Fn.resolve = Ec;
Fn.sort = Ai;
Fn.flatten = Ti;
var Hm = {};
$i(Hm, {
  ClipboardTextSerializer: () => jc,
  Commands: () => Lc,
  Delete: () => _c,
  Drop: () => Bc,
  Editable: () => Vc,
  FocusEvents: () => Fc,
  Keymap: () => Wc,
  Paste: () => Uc,
  Tabindex: () => qc,
  focusEventsPluginKey: () => Hc
});
var _ = class Pc extends Ni {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(t = {}) {
    const e = typeof t == "function" ? t() : t;
    return new Pc(e);
  }
  configure(t) {
    return super.configure(t);
  }
  extend(t) {
    const e = typeof t == "function" ? t() : t;
    return super.extend(e);
  }
}, jc = _.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: t, schema: e } = r, { doc: n, selection: o } = t, { ranges: i } = o, s = Math.min(...i.map((c) => c.$from.pos)), a = Math.max(...i.map((c) => c.$to.pos)), l = Ic(e);
            return Nc(n, { from: s, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
}), Lc = _.create({
  name: "commands",
  addCommands() {
    return {
      ...wc
    };
  }
}), _c = _.create({
  name: "delete",
  onUpdate({ transaction: r, appendedTransactions: t }) {
    var e, n, o;
    const i = () => {
      var s, a, l, c;
      if ((c = (l = (a = (s = this.editor.options.coreExtensionOptions) == null ? void 0 : s.delete) == null ? void 0 : a.filterTransaction) == null ? void 0 : l.call(a, r)) != null ? c : r.getMeta("y-sync$"))
        return;
      const h = Gf(r.before, [r, ...t]);
      sm(h).forEach((u) => {
        h.mapping.mapResult(u.oldRange.from).deletedAfter && h.mapping.mapResult(u.oldRange.to).deletedBefore && h.before.nodesBetween(u.oldRange.from, u.oldRange.to, (p, f) => {
          const g = f + p.nodeSize - 2, b = u.oldRange.from <= f && g <= u.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: f,
            to: g,
            newFrom: h.mapping.map(f),
            newTo: h.mapping.map(g),
            deletedRange: u.oldRange,
            newRange: u.newRange,
            partial: !b,
            editor: this.editor,
            transaction: r,
            combinedTransform: h
          });
        });
      });
      const d = h.mapping;
      h.steps.forEach((u, p) => {
        var f, g;
        if (u instanceof vt) {
          const b = d.slice(p).map(u.from, -1), y = d.slice(p).map(u.to), w = d.invert().map(b, -1), x = d.invert().map(y), O = (f = h.doc.nodeAt(b - 1)) == null ? void 0 : f.marks.some((N) => N.eq(u.mark)), T = (g = h.doc.nodeAt(y)) == null ? void 0 : g.marks.some((N) => N.eq(u.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: u.mark,
            from: u.from,
            to: u.to,
            deletedRange: {
              from: w,
              to: x
            },
            newRange: {
              from: b,
              to: y
            },
            partial: !!(T || O),
            editor: this.editor,
            transaction: r,
            combinedTransform: h
          });
        }
      });
    };
    (o = (n = (e = this.editor.options.coreExtensionOptions) == null ? void 0 : e.delete) == null ? void 0 : n.async) == null || o ? setTimeout(i, 0) : i();
  }
}), Bc = _.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("tiptapDrop"),
        props: {
          handleDrop: (r, t, e, n) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: t,
              slice: e,
              moved: n
            });
          }
        }
      })
    ];
  }
}), Vc = _.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Hc = new it("focusEvents"), Fc = _.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new q({
        key: Hc,
        props: {
          handleDOMEvents: {
            focus: (t, e) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(n), !1;
            },
            blur: (t, e) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
}), Wc = _.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: s }) => {
        const { selection: a, doc: l } = s, { empty: c, $anchor: h } = a, { pos: d, parent: u } = h, p = h.parent.isTextblock && d > 0 ? s.doc.resolve(d - 1) : h, f = p.parent.type.spec.isolating, g = h.pos - h.parentOffset, b = f && p.parent.childCount === 1 ? g === h.pos : A.atStart(l).from === d;
        return !c || !u.type.isTextblock || u.textContent.length || !b || b && h.parent.type.name === "paragraph" ? !1 : i.clearNodes();
      }),
      () => i.deleteSelection(),
      () => i.joinBackward(),
      () => i.selectNodeBackward()
    ]), t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.deleteSelection(),
      () => i.deleteCurrentNode(),
      () => i.joinForward(),
      () => i.selectNodeForward()
    ]), e = {
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        () => i.newlineInCode(),
        () => i.createParagraphNear(),
        () => i.liftEmptyBlock(),
        () => i.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: t,
      "Mod-Delete": t,
      "Mod-a": () => this.editor.commands.selectAll()
    }, n = {
      ...e
    }, o = {
      ...e,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": t,
      "Ctrl-Alt-Backspace": t,
      "Alt-Delete": t,
      "Alt-d": t,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ci() || Cc() ? o : n;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new q({
        key: new it("clearDocument"),
        appendTransaction: (r, t, e) => {
          if (r.some((p) => p.getMeta("composition")))
            return;
          const n = r.some((p) => p.docChanged) && !t.doc.eq(e.doc), o = r.some((p) => p.getMeta("preventClearDocument"));
          if (!n || o)
            return;
          const { empty: i, from: s, to: a } = t.selection, l = A.atStart(t.doc).from, c = A.atEnd(t.doc).to;
          if (i || !(s === l && a === c) || !Vn(e.doc))
            return;
          const h = e.tr, d = jn({
            state: e,
            transaction: h
          }), { commands: u } = new Ln({
            editor: this.editor,
            state: d
          });
          if (u.clearNodes(), !!h.steps.length)
            return h;
        }
      })
    ];
  }
}), Uc = _.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("tiptapPaste"),
        props: {
          handlePaste: (r, t, e) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: t,
              slice: e
            });
          }
        }
      })
    ];
  }
}), qc = _.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Fm = class De {
  constructor(t, e, n = !1, o = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = t, this.editor = e, this.currentNode = o;
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
    var t;
    return (t = this.actualDepth) != null ? t : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(t) {
    let e = this.from, n = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      e = this.from + 1, n = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: e, to: n }, t);
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
    const t = this.resolvedPos.start(this.resolvedPos.depth - 1), e = this.resolvedPos.doc.resolve(t);
    return new De(e, this.editor);
  }
  get before() {
    let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new De(t, this.editor);
  }
  get after() {
    let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new De(t, this.editor);
  }
  get children() {
    const t = [];
    return this.node.content.forEach((e, n) => {
      const o = e.isBlock && !e.isTextblock, i = e.isAtom && !e.isText, s = this.pos + n + (i ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const a = this.resolvedPos.doc.resolve(s);
      if (!o && a.depth <= this.depth)
        return;
      const l = new De(a, this.editor, o, o ? e : null);
      o && (l.actualDepth = this.depth + 1), t.push(new De(a, this.editor, o, o ? e : null));
    }), t;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const t = this.children;
    return t[t.length - 1] || null;
  }
  closest(t, e = {}) {
    let n = null, o = this.parent;
    for (; o && !n; ) {
      if (o.node.type.name === t)
        if (Object.keys(e).length > 0) {
          const i = o.node.attrs, s = Object.keys(e);
          for (let a = 0; a < s.length; a += 1) {
            const l = s[a];
            if (i[l] !== e[l])
              break;
          }
        } else
          n = o;
      o = o.parent;
    }
    return n;
  }
  querySelector(t, e = {}) {
    return this.querySelectorAll(t, e, !0)[0] || null;
  }
  querySelectorAll(t, e = {}, n = !1) {
    let o = [];
    if (!this.children || this.children.length === 0)
      return o;
    const i = Object.keys(e);
    return this.children.forEach((s) => {
      n && o.length > 0 || (s.node.type.name === t && i.every((a) => e[a] === s.node.attrs[a]) && o.push(s), !(n && o.length > 0) && (o = o.concat(s.querySelectorAll(t, e, n))));
    }), o;
  }
  setAttribute(t) {
    const { tr: e } = this.editor.state;
    e.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...t
    }), this.editor.view.dispatch(e);
  }
}, Wm = `.ProseMirror {
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
function Um(r, t, e) {
  const n = document.querySelector("style[data-tiptap-style]");
  if (n !== null)
    return n;
  const o = document.createElement("style");
  return t && o.setAttribute("nonce", t), o.setAttribute("data-tiptap-style", ""), o.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(o), o;
}
var qm = class extends Im {
  constructor(r = {}) {
    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
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
      onContentError: ({ error: n }) => {
        throw n;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(r), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: n, slice: o, moved: i }) => this.options.onDrop(n, o, i)), this.on("paste", ({ event: n, slice: o }) => this.options.onPaste(n, o)), this.on("delete", this.options.onDelete);
    const t = this.createDoc(), e = Mc(t, this.options.autofocus);
    this.editorState = Le.create({
      doc: t,
      schema: this.schema,
      selection: e || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(r) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(r), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const r = this.editorView.dom;
      r?.editor && delete r.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (r) {
        console.warn("Failed to remove CSS element:", r);
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
    this.options.injectCSS && typeof document < "u" && (this.css = Um(Wm, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(r = {}) {
    this.options = {
      ...this.options,
      ...r
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(r, t = !0) {
    this.setOptions({ editable: r }), t && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
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
        updateState: (r) => {
          this.editorState = r;
        },
        dispatch: (r) => {
          this.dispatchTransaction(r);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (r, t) => {
          if (this.editorView)
            return this.editorView[t];
          if (t === "state")
            return this.editorState;
          if (t in r)
            return Reflect.get(r, t);
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
  registerPlugin(r, t) {
    const e = Oc(t) ? t(r, [...this.state.plugins]) : [...this.state.plugins, r], n = this.state.reconfigure({ plugins: e });
    return this.view.updateState(n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(r) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let e = t;
    if ([].concat(r).forEach((o) => {
      const i = typeof o == "string" ? `${o}$` : o.key;
      e = e.filter((s) => !s.key.startsWith(i));
    }), t.length === e.length)
      return;
    const n = this.state.reconfigure({
      plugins: e
    });
    return this.view.updateState(n), n;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var r, t;
    const e = [...this.options.enableCoreExtensions ? [
      Vc,
      jc.configure({
        blockSeparator: (t = (r = this.options.coreExtensionOptions) == null ? void 0 : r.clipboardTextSerializer) == null ? void 0 : t.blockSeparator
      }),
      Lc,
      Fc,
      Wc,
      qc,
      Bc,
      Uc,
      _c
    ].filter((n) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[n.name] !== !1 : !0) : [], ...this.options.extensions].filter((n) => ["extension", "node", "mark"].includes(n?.type));
    this.extensionManager = new Fn(e, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Ln({
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
    let r;
    try {
      r = _o(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (t) {
      if (!(t instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(t.message))
        throw t;
      this.emit("contentError", {
        editor: this,
        error: t,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((e) => e.name !== "collaboration"), this.createExtensionManager();
        }
      }), r = _o(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return r;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(r) {
    var t;
    this.editorView = new vc(r, {
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
    const e = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(e), this.prependClass(), this.injectCSS();
    const n = this.view.dom;
    n.editor = this;
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
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(r) {
    this.isCapturingTransaction = !0, r(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(r) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = r;
        return;
      }
      r.steps.forEach((c) => {
        var h;
        return (h = this.capturedTransaction) == null ? void 0 : h.step(c);
      });
      return;
    }
    const { state: t, transactions: e } = this.state.applyTransaction(r), n = !this.state.selection.eq(t.selection), o = e.includes(r), i = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: r,
      nextState: t
    }), !o)
      return;
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: r,
      appendedTransactions: e.slice(1)
    }), n && this.emit("selectionUpdate", {
      editor: this,
      transaction: r
    });
    const s = e.findLast((c) => c.getMeta("focus") || c.getMeta("blur")), a = s?.getMeta("focus"), l = s?.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: s
    }), l && this.emit("blur", {
      editor: this,
      event: l.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: s
    }), !(r.getMeta("preventUpdate") || !e.some((c) => c.docChanged) || i.doc.eq(t.doc)) && this.emit("update", {
      editor: this,
      transaction: r,
      appendedTransactions: e.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(r) {
    return nm(this.state, r);
  }
  isActive(r, t) {
    const e = typeof r == "string" ? r : null, n = typeof r == "string" ? t : r;
    return cm(this.state, e, n);
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
    return Oi(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(r) {
    const { blockSeparator: t = `

`, textSerializers: e = {} } = r || {};
    return em(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Ic(this.schema),
        ...e
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Vn(this.state.doc);
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
    var r, t;
    return (t = (r = this.editorView) == null ? void 0 : r.isDestroyed) != null ? t : !0;
  }
  $node(r, t) {
    var e;
    return ((e = this.$doc) == null ? void 0 : e.querySelector(r, t)) || null;
  }
  $nodes(r, t) {
    var e;
    return ((e = this.$doc) == null ? void 0 : e.querySelectorAll(r, t)) || null;
  }
  $pos(r) {
    const t = this.state.doc.resolve(r);
    return new Fm(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function bn(r) {
  return new Ei({
    find: r.find,
    handler: ({ state: t, range: e, match: n }) => {
      const o = I(r.getAttributes, void 0, n);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = t, s = n[n.length - 1], a = n[0];
      if (s) {
        const l = a.search(/\S/), c = e.from + a.indexOf(s), h = c + s.length;
        if (Dc(e.from, e.to, t.doc).filter((u) => u.mark.type.excluded.find((p) => p === r.type && p !== u.mark.type)).filter((u) => u.to > c).length)
          return null;
        h < e.to && i.delete(h, e.to), c > e.from && i.delete(e.from + l, c);
        const d = e.from + l + s.length;
        i.addMark(e.from + l, d, r.type.create(o || {})), i.removeStoredMark(r.type);
      }
    },
    undoable: r.undoable
  });
}
function Jm(r) {
  return new Ei({
    find: r.find,
    handler: ({ state: t, range: e, match: n }) => {
      const o = t.doc.resolve(e.from), i = I(r.getAttributes, void 0, n) || {};
      if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), r.type))
        return null;
      t.tr.delete(e.from, e.to).setBlockType(e.from, e.from, r.type, i);
    },
    undoable: r.undoable
  });
}
function vr(r) {
  return new Ei({
    find: r.find,
    handler: ({ state: t, range: e, match: n, chain: o }) => {
      const i = I(r.getAttributes, void 0, n) || {}, s = t.tr.delete(e.from, e.to), a = s.doc.resolve(e.from).blockRange(), l = a && ai(a, r.type, i);
      if (!l)
        return null;
      if (s.wrap(a, l), r.keepMarks && r.editor) {
        const { selection: h, storedMarks: d } = t, { splittableMarks: u } = r.editor.extensionManager, p = d || h.$to.parentOffset && h.$from.marks();
        if (p) {
          const f = p.filter((g) => u.includes(g.type.name));
          s.ensureMarks(f);
        }
      }
      if (r.keepAttributes) {
        const h = r.type.name === "bulletList" || r.type.name === "orderedList" ? "listItem" : "taskList";
        o().updateAttributes(h, i).run();
      }
      const c = s.doc.resolve(e.from - 1).nodeBefore;
      c && c.type === r.type && oe(s.doc, e.from - 1) && (!r.joinPredicate || r.joinPredicate(n, c)) && s.join(e.from - 1);
    },
    undoable: r.undoable
  });
}
var Gm = {};
$i(Gm, {
  createAtomBlockMarkdownSpec: () => Km,
  createBlockMarkdownSpec: () => Zm,
  createInlineMarkdownSpec: () => Qm,
  parseAttributes: () => Ii,
  parseIndentedBlocks: () => Vo,
  renderNestedMarkdownContent: () => Ri,
  serializeAttributes: () => Di
});
function Ii(r) {
  if (!r?.trim())
    return {};
  const t = {}, e = [], n = r.replace(/["']([^"']*)["']/g, (l) => (e.push(l), `__QUOTED_${e.length - 1}__`)), o = n.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (o) {
    const l = o.map((c) => c.trim().slice(1));
    t.class = l.join(" ");
  }
  const i = n.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  i && (t.id = i[1]);
  const s = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(n.matchAll(s)).forEach(([, l, c]) => {
    var h;
    const d = parseInt(((h = c.match(/__QUOTED_(\d+)__/)) == null ? void 0 : h[1]) || "0", 10), u = e[d];
    u && (t[l] = u.slice(1, -1));
  });
  const a = n.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((l) => {
    l.match(/^[a-zA-Z][\w-]*$/) && (t[l] = !0);
  }), t;
}
function Di(r) {
  if (!r || Object.keys(r).length === 0)
    return "";
  const t = [];
  return r.class && String(r.class).split(/\s+/).filter(Boolean).forEach((e) => t.push(`.${e}`)), r.id && t.push(`#${r.id}`), Object.entries(r).forEach(([e, n]) => {
    e === "class" || e === "id" || (n === !0 ? t.push(e) : n !== !1 && n != null && t.push(`${e}="${String(n)}"`));
  }), t.join(" ");
}
function Km(r) {
  const {
    nodeName: t,
    name: e,
    parseAttributes: n = Ii,
    serializeAttributes: o = Di,
    defaultAttributes: i = {},
    requiredAttributes: s = [],
    allowedAttributes: a
  } = r, l = e || t, c = (h) => {
    if (!a)
      return h;
    const d = {};
    return a.forEach((u) => {
      u in h && (d[u] = h[u]);
    }), d;
  };
  return {
    parseMarkdown: (h, d) => {
      const u = { ...i, ...h.attributes };
      return d.createNode(t, u, []);
    },
    markdownTokenizer: {
      name: t,
      level: "block",
      start(h) {
        var d;
        const u = new RegExp(`^:::${l}(?:\\s|$)`, "m"), p = (d = h.match(u)) == null ? void 0 : d.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(h, d, u) {
        const p = new RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), f = h.match(p);
        if (!f)
          return;
        const g = f[1] || "", b = n(g);
        if (!s.find((y) => !(y in b)))
          return {
            type: t,
            raw: f[0],
            attributes: b
          };
      }
    },
    renderMarkdown: (h) => {
      const d = c(h.attrs || {}), u = o(d), p = u ? ` {${u}}` : "";
      return `:::${l}${p} :::`;
    }
  };
}
function Zm(r) {
  const {
    nodeName: t,
    name: e,
    getContent: n,
    parseAttributes: o = Ii,
    serializeAttributes: i = Di,
    defaultAttributes: s = {},
    content: a = "block",
    allowedAttributes: l
  } = r, c = e || t, h = (d) => {
    if (!l)
      return d;
    const u = {};
    return l.forEach((p) => {
      p in d && (u[p] = d[p]);
    }), u;
  };
  return {
    parseMarkdown: (d, u) => {
      let p;
      if (n) {
        const g = n(d);
        p = typeof g == "string" ? [{ type: "text", text: g }] : g;
      } else a === "block" ? p = u.parseChildren(d.tokens || []) : p = u.parseInline(d.tokens || []);
      const f = { ...s, ...d.attributes };
      return u.createNode(t, f, p);
    },
    markdownTokenizer: {
      name: t,
      level: "block",
      start(d) {
        var u;
        const p = new RegExp(`^:::${c}`, "m"), f = (u = d.match(p)) == null ? void 0 : u.index;
        return f !== void 0 ? f : -1;
      },
      tokenize(d, u, p) {
        var f;
        const g = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), b = d.match(g);
        if (!b)
          return;
        const [y, w = ""] = b, x = o(w);
        let O = 1;
        const T = y.length;
        let N = "";
        const M = /^:::([\w-]*)(\s.*)?/gm, E = d.slice(T);
        for (M.lastIndex = 0; ; ) {
          const R = M.exec(E);
          if (R === null)
            break;
          const Te = R.index, Yn = R[1];
          if (!((f = R[2]) != null && f.endsWith(":::"))) {
            if (Yn)
              O += 1;
            else if (O -= 1, O === 0) {
              const ns = E.slice(0, Te);
              N = ns.trim();
              const Zh = d.slice(0, T + Te + R[0].length);
              let zt = [];
              if (N)
                if (a === "block")
                  for (zt = p.blockTokens(ns), zt.forEach((Ct) => {
                    Ct.text && (!Ct.tokens || Ct.tokens.length === 0) && (Ct.tokens = p.inlineTokens(Ct.text));
                  }); zt.length > 0; ) {
                    const Ct = zt[zt.length - 1];
                    if (Ct.type === "paragraph" && (!Ct.text || Ct.text.trim() === ""))
                      zt.pop();
                    else
                      break;
                  }
                else
                  zt = p.inlineTokens(N);
              return {
                type: t,
                raw: Zh,
                attributes: x,
                content: N,
                tokens: zt
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d, u) => {
      const p = h(d.attrs || {}), f = i(p), g = f ? ` {${f}}` : "", b = u.renderChildren(d.content || [], `

`);
      return `:::${c}${g}

${b}

:::`;
    }
  };
}
function Ym(r) {
  if (!r.trim())
    return {};
  const t = {}, e = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let n = e.exec(r);
  for (; n !== null; ) {
    const [, o, i, s] = n;
    t[o] = i || s, n = e.exec(r);
  }
  return t;
}
function Xm(r) {
  return Object.entries(r).filter(([, t]) => t != null).map(([t, e]) => `${t}="${e}"`).join(" ");
}
function Qm(r) {
  const {
    nodeName: t,
    name: e,
    getContent: n,
    parseAttributes: o = Ym,
    serializeAttributes: i = Xm,
    defaultAttributes: s = {},
    selfClosing: a = !1,
    allowedAttributes: l
  } = r, c = e || t, h = (u) => {
    if (!l)
      return u;
    const p = {};
    return l.forEach((f) => {
      f in u && (p[f] = u[f]);
    }), p;
  }, d = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (u, p) => {
      const f = { ...s, ...u.attributes };
      if (a)
        return p.createNode(t, f);
      const g = n ? n(u) : u.content || "";
      return g ? p.createNode(t, f, [p.createTextNode(g)]) : p.createNode(t, f, []);
    },
    markdownTokenizer: {
      name: t,
      level: "inline",
      start(u) {
        const p = a ? new RegExp(`\\[${d}\\s*[^\\]]*\\]`) : new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`), f = u.match(p), g = f?.index;
        return g !== void 0 ? g : -1;
      },
      tokenize(u, p, f) {
        const g = a ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), b = u.match(g);
        if (!b)
          return;
        let y = "", w = "";
        if (a) {
          const [, O] = b;
          w = O;
        } else {
          const [, O, T] = b;
          w = O, y = T || "";
        }
        const x = o(w.trim());
        return {
          type: t,
          raw: b[0],
          content: y.trim(),
          attributes: x
        };
      }
    },
    renderMarkdown: (u) => {
      let p = "";
      n ? p = n(u) : u.content && u.content.length > 0 && (p = u.content.filter((y) => y.type === "text").map((y) => y.text).join(""));
      const f = h(u.attrs || {}), g = i(f), b = g ? ` ${g}` : "";
      return a ? `[${c}${b}]` : `[${c}${b}]${p}[/${c}]`;
    }
  };
}
function Vo(r, t, e) {
  var n, o, i, s;
  const a = r.split(`
`), l = [];
  let c = "", h = 0;
  const d = t.baseIndentSize || 2;
  for (; h < a.length; ) {
    const u = a[h], p = u.match(t.itemPattern);
    if (!p) {
      if (l.length > 0)
        break;
      if (u.trim() === "") {
        h += 1;
        continue;
      } else
        return;
    }
    const f = t.extractItemData(p), { indentLevel: g, mainContent: b } = f;
    c = `${c}${u}
`;
    const y = [b];
    for (h += 1; h < a.length; ) {
      const T = a[h];
      if (T.trim() === "") {
        const N = a.slice(h + 1).findIndex((M) => M.trim() !== "");
        if (N === -1)
          break;
        if ((((o = (n = a[h + 1 + N].match(/^(\s*)/)) == null ? void 0 : n[1]) == null ? void 0 : o.length) || 0) > g) {
          y.push(T), c = `${c}${T}
`, h += 1;
          continue;
        } else
          break;
      }
      if ((((s = (i = T.match(/^(\s*)/)) == null ? void 0 : i[1]) == null ? void 0 : s.length) || 0) > g)
        y.push(T), c = `${c}${T}
`, h += 1;
      else
        break;
    }
    let w;
    const x = y.slice(1);
    if (x.length > 0) {
      const T = x.map((N) => N.slice(g + d)).join(`
`);
      T.trim() && (t.customNestedParser ? w = t.customNestedParser(T) : w = e.blockTokens(T));
    }
    const O = t.createToken(f, w);
    l.push(O);
  }
  if (l.length !== 0)
    return {
      items: l,
      raw: c.trim()
    };
}
function Ri(r, t, e, n) {
  if (!r || !Array.isArray(r.content))
    return "";
  const o = typeof e == "function" ? e(n) : e, [i, ...s] = r.content, a = t.renderChildren([i]), l = [`${o}${a}`];
  return s && s.length > 0 && s.forEach((c) => {
    const h = t.renderChildren([c]);
    if (h) {
      const d = h.split(`
`).map((u) => u ? t.indent(u) : "").join(`
`);
      l.push(d);
    }
  }), l.join(`
`);
}
function tg(r, t, e = {}) {
  const { state: n } = t, { doc: o, tr: i } = n, s = r;
  o.descendants((a, l) => {
    const c = i.mapping.map(l), h = i.mapping.map(l) + a.nodeSize;
    let d = null;
    if (a.marks.forEach((p) => {
      if (p !== s)
        return !1;
      d = p;
    }), !d)
      return;
    let u = !1;
    if (Object.keys(e).forEach((p) => {
      e[p] !== d.attrs[p] && (u = !0);
    }), u) {
      const p = r.type.create({
        ...r.attrs,
        ...e
      });
      i.removeMark(c, h, r.type), i.addMark(c, h, p);
    }
  }), i.docChanged && t.view.dispatch(i);
}
var St = class Jc extends Ni {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(t = {}) {
    const e = typeof t == "function" ? t() : t;
    return new Jc(e);
  }
  configure(t) {
    return super.configure(t);
  }
  extend(t) {
    const e = typeof t == "function" ? t() : t;
    return super.extend(e);
  }
};
function yn(r) {
  return new jm({
    find: r.find,
    handler: ({ state: t, range: e, match: n, pasteEvent: o }) => {
      const i = I(r.getAttributes, void 0, n, o);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = t, a = n[n.length - 1], l = n[0];
      let c = e.to;
      if (a) {
        const h = l.search(/\S/), d = e.from + l.indexOf(a), u = d + a.length;
        if (Dc(e.from, e.to, t.doc).filter((p) => p.mark.type.excluded.find((f) => f === r.type && f !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        u < e.to && s.delete(u, e.to), d > e.from && s.delete(e.from + h, d), c = e.from + h + a.length, s.addMark(e.from + h, c, r.type.create(i || {})), s.removeStoredMark(r.type);
      }
    }
  });
}
const eg = "utrecht", Gc = (
  /* utrecht */
  { experimentalSlotFixes: !1, hydratedSelectorName: "hydrated" }
);
var rg = Object.defineProperty, ng = (r, t) => {
  for (var e in t)
    rg(r, e, { get: t[e], enumerable: !0 });
}, pa = {}, og = "http://www.w3.org/2000/svg", ig = "http://www.w3.org/1999/xhtml", sg = (r) => r != null, zi = (r) => (r = typeof r, r === "object" || r === "function");
function Kc(r) {
  var t, e, n;
  return (n = (e = (t = r.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : e.getAttribute("content")) != null ? n : void 0;
}
var ag = {};
ng(ag, {
  err: () => Zc,
  map: () => lg,
  ok: () => Ho,
  unwrap: () => cg,
  unwrapErr: () => hg
});
var Ho = (r) => ({
  isOk: !0,
  isErr: !1,
  value: r
}), Zc = (r) => ({
  isOk: !1,
  isErr: !0,
  value: r
});
function lg(r, t) {
  if (r.isOk) {
    const e = t(r.value);
    return e instanceof Promise ? e.then((n) => Ho(n)) : Ho(e);
  }
  if (r.isErr) {
    const e = r.value;
    return Zc(e);
  }
  throw "should never get here";
}
var cg = (r) => {
  if (r.isOk)
    return r.value;
  throw r.value;
}, hg = (r) => {
  if (r.isErr)
    return r.value;
  throw r.value;
}, Xt = (r, t = "") => () => {
}, dg = "{visibility:hidden}.hydrated{visibility:inherit}", Yc = "slot-fb{display:contents}slot-fb[hidden]{display:none}", ug = (r, t, ...e) => {
  let n = null, o = null, i = null, s = !1, a = !1;
  const l = [], c = (d) => {
    for (let u = 0; u < d.length; u++)
      n = d[u], Array.isArray(n) ? c(n) : n != null && typeof n != "boolean" && ((s = typeof r != "function" && !zi(n)) && (n = String(n)), s && a ? l[l.length - 1].$text$ += n : l.push(s ? Fo(null, n) : n), a = s);
  };
  if (c(e), t) {
    t.key && (o = t.key), t.name && (i = t.name);
    {
      const d = t.className || t.class;
      d && (t.class = typeof d != "object" ? d : Object.keys(d).filter((u) => d[u]).join(" "));
    }
  }
  const h = Fo(r, null);
  return h.$attrs$ = t, l.length > 0 && (h.$children$ = l), h.$key$ = o, h.$name$ = i, h;
}, Fo = (r, t) => {
  const e = {
    $flags$: 0,
    $tag$: r,
    $text$: t,
    $elm$: null,
    $children$: null
  };
  return e.$attrs$ = null, e.$key$ = null, e.$name$ = null, e;
}, pg = {}, fg = (r) => r && r.$tag$ === pg, mg = (r, t) => r != null && !zi(r) ? t & 4 ? r === "false" ? !1 : r === "" || !!r : t & 2 ? parseFloat(r) : t & 1 ? String(r) : r : r, gg = (r) => Qt(r).$hostElement$, _v = (r, t, e) => {
  const n = gg(r);
  return {
    emit: (o) => Xc(n, t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: o
    })
  };
}, Xc = (r, t, e) => {
  const n = B.ce(t, e);
  return r.dispatchEvent(n), n;
}, fa = /* @__PURE__ */ new WeakMap(), bg = (r, t, e) => {
  let n = wn.get(r);
  Bg && e ? (n = n || new CSSStyleSheet(), typeof n == "string" ? n = t : n.replaceSync(t)) : n = t, wn.set(r, n);
}, yg = (r, t, e) => {
  var n;
  const o = Qc(t), i = wn.get(o);
  if (r = r.nodeType === 11 ? r : lt, i)
    if (typeof i == "string") {
      r = r.head || r;
      let s = fa.get(r), a;
      if (s || fa.set(r, s = /* @__PURE__ */ new Set()), !s.has(o)) {
        {
          a = lt.createElement("style"), a.innerHTML = i;
          const l = (n = B.$nonce$) != null ? n : Kc(lt);
          l != null && a.setAttribute("nonce", l), r.insertBefore(a, r.querySelector("link"));
        }
        t.$flags$ & 4 && (a.innerHTML += Yc), s && s.add(o);
      }
    } else r.adoptedStyleSheets.includes(i) || (r.adoptedStyleSheets = [...r.adoptedStyleSheets, i]);
  return o;
}, vg = (r) => {
  const t = r.$cmpMeta$, e = r.$hostElement$, n = t.$flags$;
  Xt("attachStyles", t.$tagName$);
  const o = yg(
    e.shadowRoot ? e.shadowRoot : e.getRootNode(),
    t
  );
  n & 10 && (e["s-sc"] = o, e.classList.add(o + "-h"));
}, Qc = (r, t) => "sc-" + r.$tagName$, ma = (r, t, e, n, o, i) => {
  if (e !== n) {
    let s = ka(r, t), a = t.toLowerCase();
    if (t === "class") {
      const l = r.classList, c = ga(e), h = ga(n);
      l.remove(...c.filter((d) => d && !h.includes(d))), l.add(...h.filter((d) => d && !c.includes(d)));
    } else if (t === "style") {
      for (const l in e)
        (!n || n[l] == null) && (l.includes("-") ? r.style.removeProperty(l) : r.style[l] = "");
      for (const l in n)
        (!e || n[l] !== e[l]) && (l.includes("-") ? r.style.setProperty(l, n[l]) : r.style[l] = n[l]);
    } else if (t !== "key") if (t === "ref")
      n && n(r);
    else if (!s && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-" ? t = t.slice(3) : ka(Un, a) ? t = a.slice(2) : t = a[2] + t.slice(3), e || n) {
        const l = t.endsWith(th);
        t = t.replace(wg, ""), e && B.rel(r, t, e, l), n && B.ael(r, t, n, l);
      }
    } else {
      const l = zi(n);
      if ((s || l && n !== null) && !o)
        try {
          if (r.tagName.includes("-"))
            r[t] = n;
          else {
            const c = n ?? "";
            t === "list" ? s = !1 : (e == null || r[t] != c) && (r[t] = c);
          }
        } catch {
        }
      n == null || n === !1 ? (n !== !1 || r.getAttribute(t) === "") && r.removeAttribute(t) : (!s || i & 4 || o) && !l && (n = n === !0 ? "" : n, r.setAttribute(t, n));
    }
  }
}, kg = /\s/, ga = (r) => r ? r.split(kg) : [], th = "Capture", wg = new RegExp(th + "$"), eh = (r, t, e) => {
  const n = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$, o = r && r.$attrs$ || pa, i = t.$attrs$ || pa;
  for (const s of ba(Object.keys(o)))
    s in i || ma(n, s, o[s], void 0, e, t.$flags$);
  for (const s of ba(Object.keys(i)))
    ma(n, s, o[s], i[s], e, t.$flags$);
};
function ba(r) {
  return r.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...r.filter((t) => t !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    r
  );
}
var Re, Wo, Wn, Pi = !1, vn = !1, ji = !1, st = !1, kn = (r, t, e, n) => {
  var o;
  const i = t.$children$[e];
  let s = 0, a, l, c;
  if (Pi || (ji = !0, i.$tag$ === "slot" && (Re && n.classList.add(Re + "-s"), i.$flags$ |= i.$children$ ? (
    // slot element has fallback content
    // still create an element that "mocks" the slot element
    2
  ) : (
    // slot element does not have fallback content
    // create an html comment we'll use to always reference
    // where actual slot content should sit next to
    1
  ))), i.$text$ !== null)
    a = i.$elm$ = lt.createTextNode(i.$text$);
  else if (i.$flags$ & 1)
    a = i.$elm$ = lt.createTextNode("");
  else {
    if (st || (st = i.$tag$ === "svg"), a = i.$elm$ = lt.createElementNS(
      st ? og : ig,
      i.$flags$ & 2 ? "slot-fb" : i.$tag$
    ), st && i.$tag$ === "foreignObject" && (st = !1), eh(null, i, st), sg(Re) && a["s-si"] !== Re && a.classList.add(a["s-si"] = Re), i.$children$)
      for (s = 0; s < i.$children$.length; ++s)
        l = kn(r, i, s, a), l && a.appendChild(l);
    i.$tag$ === "svg" ? st = !1 : a.tagName === "foreignObject" && (st = !0);
  }
  return a["s-hn"] = Wn, i.$flags$ & 3 && (a["s-sr"] = !0, a["s-cr"] = Wo, a["s-sn"] = i.$name$ || "", a["s-rf"] = (o = i.$attrs$) == null ? void 0 : o.ref, c = r && r.$children$ && r.$children$[e], c && c.$tag$ === i.$tag$ && r.$elm$ && kr(r.$elm$, !1)), a;
}, kr = (r, t) => {
  B.$flags$ |= 1;
  const e = Array.from(r.childNodes);
  r["s-sr"] && Gc.experimentalSlotFixes;
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    o["s-hn"] !== Wn && o["s-ol"] && (Kt(oh(o), o, Li(o)), o["s-ol"].remove(), o["s-ol"] = void 0, o["s-sh"] = void 0, ji = !0), t && kr(o, t);
  }
  B.$flags$ &= -2;
}, rh = (r, t, e, n, o, i) => {
  let s = r["s-cr"] && r["s-cr"].parentNode || r, a;
  for (s.shadowRoot && s.tagName === Wn && (s = s.shadowRoot); o <= i; ++o)
    n[o] && (a = kn(null, e, o, r), a && (n[o].$elm$ = a, Kt(s, a, Li(t))));
}, nh = (r, t, e) => {
  for (let n = t; n <= e; ++n) {
    const o = r[n];
    if (o) {
      const i = o.$elm$;
      ah(o), i && (vn = !0, i["s-ol"] ? i["s-ol"].remove() : kr(i, !0), i.remove());
    }
  }
}, xg = (r, t, e, n, o = !1) => {
  let i = 0, s = 0, a = 0, l = 0, c = t.length - 1, h = t[0], d = t[c], u = n.length - 1, p = n[0], f = n[u], g, b;
  for (; i <= c && s <= u; )
    if (h == null)
      h = t[++i];
    else if (d == null)
      d = t[--c];
    else if (p == null)
      p = n[++s];
    else if (f == null)
      f = n[--u];
    else if (Vr(h, p, o))
      ze(h, p, o), h = t[++i], p = n[++s];
    else if (Vr(d, f, o))
      ze(d, f, o), d = t[--c], f = n[--u];
    else if (Vr(h, f, o))
      (h.$tag$ === "slot" || f.$tag$ === "slot") && kr(h.$elm$.parentNode, !1), ze(h, f, o), Kt(r, h.$elm$, d.$elm$.nextSibling), h = t[++i], f = n[--u];
    else if (Vr(d, p, o))
      (h.$tag$ === "slot" || f.$tag$ === "slot") && kr(d.$elm$.parentNode, !1), ze(d, p, o), Kt(r, d.$elm$, h.$elm$), d = t[--c], p = n[++s];
    else {
      for (a = -1, l = i; l <= c; ++l)
        if (t[l] && t[l].$key$ !== null && t[l].$key$ === p.$key$) {
          a = l;
          break;
        }
      a >= 0 ? (b = t[a], b.$tag$ !== p.$tag$ ? g = kn(t && t[s], e, a, r) : (ze(b, p, o), t[a] = void 0, g = b.$elm$), p = n[++s]) : (g = kn(t && t[s], e, s, r), p = n[++s]), g && Kt(oh(h.$elm$), g, Li(h.$elm$));
    }
  i > c ? rh(
    r,
    n[u + 1] == null ? null : n[u + 1].$elm$,
    e,
    n,
    s,
    u
  ) : s > u && nh(t, i, c);
}, Vr = (r, t, e = !1) => r.$tag$ === t.$tag$ ? r.$tag$ === "slot" ? r.$name$ === t.$name$ : e ? !0 : r.$key$ === t.$key$ : !1, Li = (r) => r && r["s-ol"] || r, oh = (r) => (r["s-ol"] ? r["s-ol"] : r).parentNode, ze = (r, t, e = !1) => {
  const n = t.$elm$ = r.$elm$, o = r.$children$, i = t.$children$, s = t.$tag$, a = t.$text$;
  let l;
  a === null ? (st = s === "svg" ? !0 : s === "foreignObject" ? !1 : st, s === "slot" && !Pi || eh(r, t, st), o !== null && i !== null ? xg(n, o, t, i, e) : i !== null ? (r.$text$ !== null && (n.textContent = ""), rh(n, null, t, i, 0, i.length - 1)) : o !== null && nh(o, 0, o.length - 1), st && s === "svg" && (st = !1)) : (l = n["s-cr"]) ? l.parentNode.textContent = a : r.$text$ !== a && (n.data = a);
}, ih = (r) => {
  const t = r.childNodes;
  for (const e of t)
    if (e.nodeType === 1) {
      if (e["s-sr"]) {
        const n = e["s-sn"];
        e.hidden = !1;
        for (const o of t)
          if (o !== e) {
            if (o["s-hn"] !== e["s-hn"] || n !== "") {
              if (o.nodeType === 1 && (n === o.getAttribute("slot") || n === o["s-sn"]) || o.nodeType === 3 && n === o["s-sn"]) {
                e.hidden = !0;
                break;
              }
            } else if (o.nodeType === 1 || o.nodeType === 3 && o.textContent.trim() !== "") {
              e.hidden = !0;
              break;
            }
          }
      }
      ih(e);
    }
}, Et = [], sh = (r) => {
  let t, e, n;
  for (const o of r.childNodes) {
    if (o["s-sr"] && (t = o["s-cr"]) && t.parentNode) {
      e = t.parentNode.childNodes;
      const i = o["s-sn"];
      for (n = e.length - 1; n >= 0; n--)
        if (t = e[n], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== o["s-hn"])
          if (ya(t, i)) {
            let s = Et.find((a) => a.$nodeToRelocate$ === t);
            vn = !0, t["s-sn"] = t["s-sn"] || i, s ? (s.$nodeToRelocate$["s-sh"] = o["s-hn"], s.$slotRefNode$ = o) : (t["s-sh"] = o["s-hn"], Et.push({
              $slotRefNode$: o,
              $nodeToRelocate$: t
            })), t["s-sr"] && Et.map((a) => {
              ya(a.$nodeToRelocate$, t["s-sn"]) && (s = Et.find((l) => l.$nodeToRelocate$ === t), s && !a.$slotRefNode$ && (a.$slotRefNode$ = s.$slotRefNode$));
            });
          } else Et.some((s) => s.$nodeToRelocate$ === t) || Et.push({
            $nodeToRelocate$: t
          });
    }
    o.nodeType === 1 && sh(o);
  }
}, ya = (r, t) => r.nodeType === 1 ? r.getAttribute("slot") === null && t === "" || r.getAttribute("slot") === t : r["s-sn"] === t ? !0 : t === "", ah = (r) => {
  r.$attrs$ && r.$attrs$.ref && r.$attrs$.ref(null), r.$children$ && r.$children$.map(ah);
}, Kt = (r, t, e) => r?.insertBefore(t, e), $g = (r, t, e = !1) => {
  var n, o, i, s;
  const a = r.$hostElement$, l = r.$cmpMeta$, c = r.$vnode$ || Fo(null, null), h = fg(t) ? t : ug(null, null, t);
  if (Wn = a.tagName, l.$attrsToReflect$ && (h.$attrs$ = h.$attrs$ || {}, l.$attrsToReflect$.map(
    ([d, u]) => h.$attrs$[u] = a[d]
  )), e && h.$attrs$)
    for (const d of Object.keys(h.$attrs$))
      a.hasAttribute(d) && !["key", "ref", "style", "class"].includes(d) && (h.$attrs$[d] = a[d]);
  h.$tag$ = null, h.$flags$ |= 4, r.$vnode$ = h, h.$elm$ = c.$elm$ = a.shadowRoot || a, Re = a["s-sc"], Pi = (l.$flags$ & 1) !== 0, Wo = a["s-cr"], vn = !1, ze(c, h, e);
  {
    if (B.$flags$ |= 1, ji) {
      sh(h.$elm$);
      for (const d of Et) {
        const u = d.$nodeToRelocate$;
        if (!u["s-ol"]) {
          const p = lt.createTextNode("");
          p["s-nr"] = u, Kt(u.parentNode, u["s-ol"] = p, u);
        }
      }
      for (const d of Et) {
        const u = d.$nodeToRelocate$, p = d.$slotRefNode$;
        if (p) {
          const f = p.parentNode;
          let g = p.nextSibling;
          {
            let b = (n = u["s-ol"]) == null ? void 0 : n.previousSibling;
            for (; b; ) {
              let y = (o = b["s-nr"]) != null ? o : null;
              if (y && y["s-sn"] === u["s-sn"] && f === y.parentNode) {
                for (y = y.nextSibling; y === u || y?.["s-sr"]; )
                  y = y?.nextSibling;
                if (!y || !y["s-nr"]) {
                  g = y;
                  break;
                }
              }
              b = b.previousSibling;
            }
          }
          (!g && f !== u.parentNode || u.nextSibling !== g) && u !== g && (!u["s-hn"] && u["s-ol"] && (u["s-hn"] = u["s-ol"].parentNode.nodeName), Kt(f, u, g), u.nodeType === 1 && (u.hidden = (i = u["s-ih"]) != null ? i : !1)), u && typeof p["s-rf"] == "function" && p["s-rf"](u);
        } else
          u.nodeType === 1 && (e && (u["s-ih"] = (s = u.hidden) != null ? s : !1), u.hidden = !0);
      }
    }
    vn && ih(h.$elm$), B.$flags$ &= -2, Et.length = 0;
  }
  Wo = void 0;
}, lh = (r, t) => {
  t && !r.$onRenderResolve$ && t["s-p"] && t["s-p"].push(new Promise((e) => r.$onRenderResolve$ = e));
}, _i = (r, t) => {
  if (r.$flags$ |= 16, r.$flags$ & 4) {
    r.$flags$ |= 512;
    return;
  }
  return lh(r, r.$ancestorComponent$), Hg(() => Mg(r, t));
}, Mg = (r, t) => {
  const e = r.$hostElement$;
  Xt("scheduleUpdate", r.$cmpMeta$.$tagName$);
  const n = r.$lazyInstance$;
  if (!n)
    throw new Error(
      `Can't render component <${e.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  return Sg(void 0, () => Tg(r, n, t));
}, Sg = (r, t) => Cg(r) ? r.then(t) : t(), Cg = (r) => r instanceof Promise || r && r.then && typeof r.then == "function", Tg = async (r, t, e) => {
  var n;
  const o = r.$hostElement$;
  Xt("update", r.$cmpMeta$.$tagName$);
  const i = o["s-rc"];
  e && vg(r), Xt("render", r.$cmpMeta$.$tagName$), Og(r, t, o, e), i && (i.map((s) => s()), o["s-rc"] = void 0);
  {
    const s = (n = o["s-p"]) != null ? n : [], a = () => Ag(r);
    s.length === 0 ? a() : (Promise.all(s).then(a), r.$flags$ |= 4, s.length = 0);
  }
}, Og = (r, t, e, n) => {
  try {
    t = t.render(), r.$flags$ &= -17, r.$flags$ |= 2, $g(r, t, n);
  } catch (o) {
    m(o, r.$hostElement$);
  }
  return null;
}, Ag = (r) => {
  const t = r.$cmpMeta$.$tagName$, e = r.$hostElement$, n = Xt("postUpdate", t), o = r.$ancestorComponent$;
  r.$flags$ & 64 ? n() : (r.$flags$ |= 64, dh(e), r.$onReadyResolve$(e), o || ch()), r.$onInstanceResolve$(e), r.$onRenderResolve$ && (r.$onRenderResolve$(), r.$onRenderResolve$ = void 0), r.$flags$ & 512 && Vi(() => _i(r, !1)), r.$flags$ &= -517;
}, ch = (r) => {
  dh(lt.documentElement), Vi(() => Xc(Un, "appload", { detail: { namespace: eg } }));
}, hh = (r, t, e) => {
  if (r && r[t])
    try {
      return r[t](e);
    } catch (n) {
      m(n);
    }
}, dh = (r) => {
  var t;
  return r.classList.add((t = Gc.hydratedSelectorName) != null ? t : "hydrated");
}, Eg = (r, t) => Qt(r).$instanceValues$.get(t), Ng = (r, t, e, n) => {
  const o = Qt(r);
  if (!o)
    throw new Error(
      `Couldn't find host element for "${n.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
    );
  const i = o.$instanceValues$.get(t), s = o.$flags$, a = o.$lazyInstance$;
  e = mg(e, n.$members$[t][0]);
  const l = Number.isNaN(i) && Number.isNaN(e), c = e !== i && !l;
  (!(s & 8) || i === void 0) && c && (o.$instanceValues$.set(t, e), a && (s & 18) === 2 && _i(o, !1));
}, uh = (r, t, e) => {
  var n;
  const o = r.prototype;
  if (t.$members$) {
    const i = Object.entries(t.$members$);
    if (i.map(([s, [a]]) => {
      a & 31 || e & 2 && a & 32 ? Object.defineProperty(o, s, {
        get() {
          return Eg(this, s);
        },
        set(l) {
          Ng(this, s, l, t);
        },
        configurable: !0,
        enumerable: !0
      }) : e & 1 && a & 64 && Object.defineProperty(o, s, {
        value(...l) {
          var c;
          const h = Qt(this);
          return (c = h?.$onInstancePromise$) == null ? void 0 : c.then(() => {
            var d;
            return (d = h.$lazyInstance$) == null ? void 0 : d[s](...l);
          });
        }
      });
    }), e & 1) {
      const s = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(a, l, c) {
        B.jmp(() => {
          var h;
          const d = s.get(a);
          if (this.hasOwnProperty(d))
            c = this[d], delete this[d];
          else {
            if (o.hasOwnProperty(d) && typeof this[d] == "number" && this[d] == c)
              return;
            if (d == null) {
              const u = Qt(this), p = u?.$flags$;
              if (p && !(p & 8) && p & 128 && c !== l) {
                const f = u.$lazyInstance$;
                ((h = t.$watchers$) == null ? void 0 : h[a])?.forEach((b) => {
                  f[b] != null && f[b].call(f, c, l, a);
                });
              }
              return;
            }
          }
          this[d] = c === null && typeof this[d] == "boolean" ? !1 : c;
        });
      }, r.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((n = t.$watchers$) != null ? n : {}),
          ...i.filter(
            ([a, l]) => l[0] & 15
            /* HasAttribute */
          ).map(([a, l]) => {
            var c;
            const h = l[1] || a;
            return s.set(h, a), l[0] & 512 && ((c = t.$attrsToReflect$) == null || c.push([a, h])), h;
          })
        ])
      );
    }
  }
  return r;
}, Ig = async (r, t, e, n) => {
  let o;
  if ((t.$flags$ & 32) === 0) {
    if (t.$flags$ |= 32, e.$lazyBundleId$) {
      const a = Lg(e);
      if (a && "then" in a ? o = await a : o = a, !o)
        throw new Error(`Constructor for "${e.$tagName$}#${t.$modeName$}" was not found`);
      o.isProxied || (uh(
        o,
        e,
        2
        /* proxyState */
      ), o.isProxied = !0), Xt("createInstance", e.$tagName$), t.$flags$ |= 8;
      try {
        new o(t);
      } catch (l) {
        m(l);
      }
      t.$flags$ &= -9, Uo(t.$lazyInstance$);
    } else {
      o = r.constructor;
      const a = r.localName;
      customElements.whenDefined(a).then(
        () => t.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (o && o.style) {
      let a = o.style;
      const l = Qc(e);
      wn.has(l) || (Xt("registerStyles", e.$tagName$), bg(l, a, !!(e.$flags$ & 1)));
    }
  }
  const i = t.$ancestorComponent$, s = () => _i(t, !0);
  i && i["s-rc"] ? i["s-rc"].push(s) : s();
}, Uo = (r) => {
  hh(r, "connectedCallback");
}, Dg = (r) => {
  if ((B.$flags$ & 1) === 0) {
    const t = Qt(r), e = t.$cmpMeta$;
    if (Xt("connectedCallback", e.$tagName$), t.$flags$ & 1)
      t?.$lazyInstance$ ? Uo(t.$lazyInstance$) : t?.$onReadyPromise$ && t.$onReadyPromise$.then(() => Uo(t.$lazyInstance$));
    else {
      t.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
      e.$flags$ & 12 && Rg(r);
      {
        let n = r;
        for (; n = n.parentNode || n.host; )
          if (n["s-p"]) {
            lh(t, t.$ancestorComponent$ = n);
            break;
          }
      }
      e.$members$ && Object.entries(e.$members$).map(([n, [o]]) => {
        if (o & 31 && r.hasOwnProperty(n)) {
          const i = r[n];
          delete r[n], r[n] = i;
        }
      }), Ig(r, t, e);
    }
  }
}, Rg = (r) => {
  const t = r["s-cr"] = lt.createComment(
    ""
  );
  t["s-cn"] = !0, Kt(r, t, r.firstChild);
}, va = (r) => {
  hh(r, "disconnectedCallback");
}, zg = async (r) => {
  if ((B.$flags$ & 1) === 0) {
    const t = Qt(r);
    t?.$lazyInstance$ ? va(t.$lazyInstance$) : t?.$onReadyPromise$ && t.$onReadyPromise$.then(() => va(t.$lazyInstance$));
  }
}, Pg = (r, t = {}) => {
  var e;
  const n = [], o = t.exclude || [], i = Un.customElements, s = lt.head, a = /* @__PURE__ */ s.querySelector("meta[charset]"), l = /* @__PURE__ */ lt.createElement("style"), c = [];
  let h, d = !0;
  Object.assign(B, t), B.$resourcesUrl$ = new URL(t.resourcesUrl || "./", lt.baseURI).href;
  let u = !1;
  if (r.map((p) => {
    p[1].map((f) => {
      const g = {
        $flags$: f[0],
        $tagName$: f[1],
        $members$: f[2],
        $listeners$: f[3]
      };
      g.$flags$ & 4 && (u = !0), g.$members$ = f[2], g.$attrsToReflect$ = [];
      const b = g.$tagName$, y = class extends HTMLElement {
        // StencilLazyHost
        constructor(w) {
          super(w), w = this, jg(w, g), g.$flags$ & 1 && w.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          h && (clearTimeout(h), h = null), d ? c.push(this) : B.jmp(() => Dg(this));
        }
        disconnectedCallback() {
          B.jmp(() => zg(this));
        }
        componentOnReady() {
          return Qt(this).$onReadyPromise$;
        }
      };
      g.$lazyBundleId$ = p[0], !o.includes(b) && !i.get(b) && (n.push(b), i.define(
        b,
        uh(
          y,
          g,
          1
          /* isElementConstructor */
        )
      ));
    });
  }), n.length > 0 && (u && (l.textContent += Yc), l.textContent += n + dg, l.innerHTML.length)) {
    l.setAttribute("data-styles", "");
    const p = (e = B.$nonce$) != null ? e : Kc(lt);
    p != null && l.setAttribute("nonce", p), s.insertBefore(l, a ? a.nextSibling : s.firstChild);
  }
  d = !1, c.length ? c.map((p) => p.connectedCallback()) : B.jmp(() => h = setTimeout(ch, 30));
}, Bi = /* @__PURE__ */ new WeakMap(), Qt = (r) => Bi.get(r), Bv = (r, t) => Bi.set(t.$lazyInstance$ = r, t), jg = (r, t) => {
  const e = {
    $flags$: 0,
    $hostElement$: r,
    $cmpMeta$: t,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return e.$onInstancePromise$ = new Promise((n) => e.$onInstanceResolve$ = n), e.$onReadyPromise$ = new Promise((n) => e.$onReadyResolve$ = n), r["s-p"] = [], r["s-rc"] = [], Bi.set(r, e);
}, ka = (r, t) => t in r, m = (r, t) => (0, console.error)(r, t), bo = /* @__PURE__ */ new Map(), Lg = (r, t, e) => {
  const n = r.$tagName$.replace(/-/g, "_"), o = r.$lazyBundleId$;
  if (!o)
    return;
  const i = bo.get(o);
  if (i)
    return i[n];
  {
    const s = (a) => (bo.set(o, a), a[n]);
    switch (o) {
      case "utrecht-action-group_46":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-action-group_46.entry-aqalLUcY-76p_Dgqh.js"
        ).then(s, m);
      case "utrecht-backdrop":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-backdrop.entry-c112hjIB-hhyGV6Gl.js"
        ).then(s, m);
      case "utrecht-body":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-body.entry-DpHYV-fr-Ptiurh2m.js"
        ).then(s, m);
      case "utrecht-breadcrumb-nav":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-breadcrumb-nav.entry-BmcHc9tb-BB8gov_o.js"
        ).then(s, m);
      case "utrecht-button-group":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-button-group.entry-CsedZoTh-C1zagLY7.js"
        ).then(s, m);
      case "utrecht-checkbox":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-checkbox.entry-4QURtep0-D1u3LDfg.js"
        ).then(s, m);
      case "utrecht-column-layout":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-column-layout.entry-DnQvm9J8-Bi4FlqvR.js"
        ).then(s, m);
      case "utrecht-contact-card-template":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-contact-card-template.entry-BnYjhChF-CR1J7fGo.js"
        ).then(s, m);
      case "utrecht-custom-checkbox":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-custom-checkbox.entry-DKDKJRl4-Sqry3BfZ.js"
        ).then(s, m);
      case "utrecht-data-list":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-data-list.entry-abId8GXv-BEMlOf28.js"
        ).then(s, m);
      case "utrecht-data-list-actions":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-data-list-actions.entry-CBmQ-Chx-Cwvgpc_G.js"
        ).then(s, m);
      case "utrecht-data-list-item":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-data-list-item.entry-OECmwWBY-CCD3QGpK.js"
        ).then(s, m);
      case "utrecht-data-list-key":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-data-list-key.entry-B558uGHR-CXIQfbem.js"
        ).then(s, m);
      case "utrecht-data-list-value":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-data-list-value.entry-DetNFJqq-OCSuUQCf.js"
        ).then(s, m);
      case "utrecht-digid-button":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-digid-button.entry-DCOTpE5I--UI-cdyb.js"
        ).then(s, m);
      case "utrecht-eherkenning-logo":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-eherkenning-logo.entry-C9rS8QCC-_k7ZrQ_4.js"
        ).then(s, m);
      case "utrecht-eidas-logo":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-eidas-logo.entry-T77390SM-CNWBmc1W.js"
        ).then(s, m);
      case "utrecht-form-field-error-message":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-form-field-error-message.entry-BC7LUdnf-D3hgErdd.js"
        ).then(s, m);
      case "utrecht-form-toggle":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-form-toggle.entry-BtMoL85Q-TVu98_H8.js"
        ).then(s, m);
      case "utrecht-html-content":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-html-content.entry-DXE0NjPS-D6i9Y3vV.js"
        ).then(s, m);
      case "utrecht-icon-afspraak-maken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afspraak-maken.entry-BcYwpirq-DmrivyL6.js"
        ).then(s, m);
      case "utrecht-icon-afval":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval.entry-6MSxlm3M-CGStdVzh.js"
        ).then(s, m);
      case "utrecht-icon-afval-container":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval-container.entry-BHBtVSZD-DAmJXFy1.js"
        ).then(s, m);
      case "utrecht-icon-afval-containerpas":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval-containerpas.entry-2X57ZHCh-DKH6_VRF.js"
        ).then(s, m);
      case "utrecht-icon-afval-kalender":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval-kalender.entry-CSc8N9wb-B9owzW6h.js"
        ).then(s, m);
      case "utrecht-icon-afval-pmd":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval-pmd.entry-WC_VqF6Y-D0kNcawY.js"
        ).then(s, m);
      case "utrecht-icon-afval-scheiden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afval-scheiden.entry-DvZd_zLM-BYViY7zt.js"
        ).then(s, m);
      case "utrecht-icon-afvalkalender":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-afvalkalender.entry-BnZEaom1-DhXXAckI.js"
        ).then(s, m);
      case "utrecht-icon-alleen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-alleen.entry-BwVhniVQ-DSLMM0hx.js"
        ).then(s, m);
      case "utrecht-icon-arrow":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-arrow.entry-CSiD99TW-DkmC2nVU.js"
        ).then(s, m);
      case "utrecht-icon-auto":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-auto.entry-0JsM0EYH-U3UBJ5DS.js"
        ).then(s, m);
      case "utrecht-icon-begroting":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-begroting.entry-BXm8j7x7-mIXyX6tt.js"
        ).then(s, m);
      case "utrecht-icon-bestemmingsplan":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bestemmingsplan.entry-G7RlW5XS-DTVyPeJu.js"
        ).then(s, m);
      case "utrecht-icon-betaaldatum":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-betaaldatum.entry-XhOVuyrc-af7skkah.js"
        ).then(s, m);
      case "utrecht-icon-bewijsstukken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bewijsstukken.entry-Cyav-hki-CWyM0cFh.js"
        ).then(s, m);
      case "utrecht-icon-bijstand":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bijstand.entry-DKOpJHAc-kQ8ikHXL.js"
        ).then(s, m);
      case "utrecht-icon-blad":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-blad.entry-DEDVEIC_-B11tURzd.js"
        ).then(s, m);
      case "utrecht-icon-bluesky":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bluesky.entry-BpPNb37z-bGRNC3hy.js"
        ).then(s, m);
      case "utrecht-icon-bouw-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bouw-projecten.entry-C_kQOjPZ--VP_ubLt.js"
        ).then(s, m);
      case "utrecht-icon-bouwproject":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-bouwproject.entry-RU3cstZS-D0pZKG_K.js"
        ).then(s, m);
      case "utrecht-icon-brandgevaar":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-brandgevaar.entry-BCHg1O7A-DpJrsvur.js"
        ).then(s, m);
      case "utrecht-icon-brief-betalen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-brief-betalen.entry-CxsibJOD-ChYMKR-v.js"
        ).then(s, m);
      case "utrecht-icon-buurtcentra":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-buurtcentra.entry-DsGiNeET-B1ARbjNs.js"
        ).then(s, m);
      case "utrecht-icon-checkmark":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-checkmark.entry-BoxvBu-d-BqnSOD6T.js"
        ).then(s, m);
      case "utrecht-icon-chevron-down":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-chevron-down.entry-DaDXjEmi-CB74iPwN.js"
        ).then(s, m);
      case "utrecht-icon-chevron-left":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-chevron-left.entry-DNlX0wfP-kXQN0EfV.js"
        ).then(s, m);
      case "utrecht-icon-chevron-right":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-chevron-right.entry-DjAX_q9n-Qv060DQm.js"
        ).then(s, m);
      case "utrecht-icon-chevron-up":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-chevron-up.entry-j1ZoLclj-DaI6PblA.js"
        ).then(s, m);
      case "utrecht-icon-close":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-close.entry-fbksnBs0-dILM1AwY.js"
        ).then(s, m);
      case "utrecht-icon-coffee":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-coffee.entry-BcD_dXwv-D4FQwfex.js"
        ).then(s, m);
      case "utrecht-icon-college-b-w":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-college-b-w.entry-CAte60dj-ZpajOqI-.js"
        ).then(s, m);
      case "utrecht-icon-container":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container.entry-DjHv387D-SFXok6kc.js"
        ).then(s, m);
      case "utrecht-icon-container-bio":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-bio.entry-fJ7at_fl-COKtW1VO.js"
        ).then(s, m);
      case "utrecht-icon-container-glas":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-glas.entry-YWeWr6qD-DJAzQdHu.js"
        ).then(s, m);
      case "utrecht-icon-container-groenafval":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-groenafval.entry-BVlOmSsj-CY4Xs_xI.js"
        ).then(s, m);
      case "utrecht-icon-container-met-zak":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-met-zak.entry-CLuRNOsE-9SEIUzKb.js"
        ).then(s, m);
      case "utrecht-icon-container-papier":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-papier.entry-e1PLTCGQ-CwTapAgb.js"
        ).then(s, m);
      case "utrecht-icon-container-pmd":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-pmd.entry-DPcVH5IS-g4v6pgPA.js"
        ).then(s, m);
      case "utrecht-icon-container-restafval":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-restafval.entry-1zd3ce52-DmMn2KO5.js"
        ).then(s, m);
      case "utrecht-icon-container-textiel":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-container-textiel.entry-K9-YJxlO-DdocUu3p.js"
        ).then(s, m);
      case "utrecht-icon-cross":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-cross.entry-CTUPiYqk-L9I4Ve5b.js"
        ).then(s, m);
      case "utrecht-icon-dakloos":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-dakloos.entry-ClkYZ4BK-CzQcLnw1.js"
        ).then(s, m);
      case "utrecht-icon-dementie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-dementie.entry-Crztrzlx-BwyNxo_A.js"
        ).then(s, m);
      case "utrecht-icon-documenten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-documenten.entry-CH2_WFx4-C_4mWW9-.js"
        ).then(s, m);
      case "utrecht-icon-duurzaam":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-duurzaam.entry-BKhK_ReR-DB93AbqM.js"
        ).then(s, m);
      case "utrecht-icon-eenzaamheid":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-eenzaamheid.entry-CNelAPyR-Dbj41Xbu.js"
        ).then(s, m);
      case "utrecht-icon-eikenprocessie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-eikenprocessie.entry-5eENQN0Y-B-An_xPU.js"
        ).then(s, m);
      case "utrecht-icon-elektrisch-rijden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-elektrisch-rijden.entry-C79-0xX7-mKspaZNZ.js"
        ).then(s, m);
      case "utrecht-icon-energie-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-energie-projecten.entry-aUjGgS96--NxTqsQ5.js"
        ).then(s, m);
      case "utrecht-icon-energie-vergoeding":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-energie-vergoeding.entry-DDIkLyL7-D-hYvmnj.js"
        ).then(s, m);
      case "utrecht-icon-energietransitie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-energietransitie.entry-Bj1bbRZR-nmATcKtE.js"
        ).then(s, m);
      case "utrecht-icon-error":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-error.entry-C1JOTRYa-DPSvgsdj.js"
        ).then(s, m);
      case "utrecht-icon-evenementen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-evenementen.entry-DNgoJ-EG-Ct4qLIjg.js"
        ).then(s, m);
      case "utrecht-icon-facebook":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-facebook.entry-Dm8th6Ck-Bpt8r37z.js"
        ).then(s, m);
      case "utrecht-icon-fiets":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-fiets.entry-BJf1DR62-BwZ5jiHe.js"
        ).then(s, m);
      case "utrecht-icon-filter":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-filter.entry-BrdwirMy-Bzprt6hP.js"
        ).then(s, m);
      case "utrecht-icon-flickr":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-flickr.entry-DoEtHAwj-BZ3fToNi.js"
        ).then(s, m);
      case "utrecht-icon-geboorte":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-geboorte.entry-BpljqKQU-nGas6_Xw.js"
        ).then(s, m);
      case "utrecht-icon-gebruiker-centraal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gebruiker-centraal.entry-BGzObRPI-BBrsIq7B.js"
        ).then(s, m);
      case "utrecht-icon-gebruiker-ingelogd":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gebruiker-ingelogd.entry-CiAxzFJw-dSJDl15H.js"
        ).then(s, m);
      case "utrecht-icon-gegevenswoordenboek":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gegevenswoordenboek.entry-24LFf-s5-nxk09RUW.js"
        ).then(s, m);
      case "utrecht-icon-geluid":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-geluid.entry-Cr_E5EkH-DYstgmYE.js"
        ).then(s, m);
      case "utrecht-icon-gemeente-locatie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gemeente-locatie.entry-CBilY8ZY-B1bAy2JI.js"
        ).then(s, m);
      case "utrecht-icon-gemeenteraad":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gemeenteraad.entry-BrUBKf2Q-BQiAPU46.js"
        ).then(s, m);
      case "utrecht-icon-gereedschap":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gereedschap.entry-DExHPkq2-B257fxwt.js"
        ).then(s, m);
      case "utrecht-icon-gezicht":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gezicht.entry-DCuv55WH-BccO0d8C.js"
        ).then(s, m);
      case "utrecht-icon-gezin":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-gezin.entry-DonBtoPp-foOrWkkL.js"
        ).then(s, m);
      case "utrecht-icon-glas-afval":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-glas-afval.entry-B9GDBtlM-Cf54WZTY.js"
        ).then(s, m);
      case "utrecht-icon-glijbaan":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-glijbaan.entry-Um9w68bM-BtpYyNtq.js"
        ).then(s, m);
      case "utrecht-icon-grafiek":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-grafiek.entry-DaL7fi6E-DHx7MKGo.js"
        ).then(s, m);
      case "utrecht-icon-groen-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-groen-projecten.entry-B5B1Nl4f-UBq6nVRN.js"
        ).then(s, m);
      case "utrecht-icon-grofvuil":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-grofvuil.entry-DWrH1GE0-DkpU5phN.js"
        ).then(s, m);
      case "utrecht-icon-grofvuil-ophalen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-grofvuil-ophalen.entry-DmbGkqt5-CiNUwSDR.js"
        ).then(s, m);
      case "utrecht-icon-hamburger-menu":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hamburger-menu.entry-Czpo85Bx-DA104kG-.js"
        ).then(s, m);
      case "utrecht-icon-herdenking":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-herdenking.entry-BG4SA5WP-DjRXhll5.js"
        ).then(s, m);
      case "utrecht-icon-hondenbelasting":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hondenbelasting.entry-D2ss9eRb-Bpar-qAk.js"
        ).then(s, m);
      case "utrecht-icon-horeca":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-horeca.entry-CGqVsFj0-Dy6tDGaR.js"
        ).then(s, m);
      case "utrecht-icon-horecavergunning":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-horecavergunning.entry-Du2A9CHn-BL3qT4to.js"
        ).then(s, m);
      case "utrecht-icon-huis":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-huis.entry-Byo5D4-m-DaPRePrj.js"
        ).then(s, m);
      case "utrecht-icon-huis-en-omgeving":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-huis-en-omgeving.entry-DbuX_xHu-DiG3ftOR.js"
        ).then(s, m);
      case "utrecht-icon-huishoudelijk-geweld":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-huishoudelijk-geweld.entry-CEqd9yzz-D5sla_zr.js"
        ).then(s, m);
      case "utrecht-icon-hulp-huishouden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hulp-huishouden.entry-GteqHYpv-B67sdQYy.js"
        ).then(s, m);
      case "utrecht-icon-hulp-vervoer":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hulp-vervoer.entry-DWqDQdPU-CnwpYg74.js"
        ).then(s, m);
      case "utrecht-icon-hulp-zorg":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hulp-zorg.entry-CgHVKfdB-gaQzK_1J.js"
        ).then(s, m);
      case "utrecht-icon-hulpmiddelen-gezin":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hulpmiddelen-gezin.entry-0_VYlMia-Drys7NSN.js"
        ).then(s, m);
      case "utrecht-icon-hulpverlening":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-hulpverlening.entry-C44e3Fa_--o4P0nM_.js"
        ).then(s, m);
      case "utrecht-icon-idee":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-idee.entry-D0SEpSdg-BA_TpBKU.js"
        ).then(s, m);
      case "utrecht-icon-informatie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-informatie.entry-B3Z_SEwD-CIY22fa-.js"
        ).then(s, m);
      case "utrecht-icon-information":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-information.entry-BCiCJD8i-CjIvxG2L.js"
        ).then(s, m);
      case "utrecht-icon-innovatie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-innovatie.entry-BKUG0oJb-kLEyzv0n.js"
        ).then(s, m);
      case "utrecht-icon-inspraak-inwoners":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-inspraak-inwoners.entry-9xCk51-D-Bjx477j8.js"
        ).then(s, m);
      case "utrecht-icon-instagram":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-instagram.entry-BonU19bh-D6wnJ7tz.js"
        ).then(s, m);
      case "utrecht-icon-kalender":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-kalender.entry-hKzwHAy8-Br2FMHUd.js"
        ).then(s, m);
      case "utrecht-icon-kennis":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-kennis.entry-CRIgPb2_-Blf0A38S.js"
        ).then(s, m);
      case "utrecht-icon-kerstbomen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-kerstbomen.entry-DMKs-tz7-BEXe-0BC.js"
        ).then(s, m);
      case "utrecht-icon-klachten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-klachten.entry-D_fdk29b-gsFOUSR0.js"
        ).then(s, m);
      case "utrecht-icon-kroon":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-kroon.entry-BX7XX6ly-53Az0hpt.js"
        ).then(s, m);
      case "utrecht-icon-laadpaal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-laadpaal.entry-CgvY6nVB-5pWHaMex.js"
        ).then(s, m);
      case "utrecht-icon-language":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-language.entry-Cc3mvCq5-4Husc6Cf.js"
        ).then(s, m);
      case "utrecht-icon-lantaarnpaal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-lantaarnpaal.entry-DrInkxRY-CO5D_OQb.js"
        ).then(s, m);
      case "utrecht-icon-lantaarnpaal-oud":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-lantaarnpaal-oud.entry-CcGiD8Ia-C81Nt3kr.js"
        ).then(s, m);
      case "utrecht-icon-leren":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-leren.entry-DtA8NxIc-DxTqyOuk.js"
        ).then(s, m);
      case "utrecht-icon-let-op":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-let-op.entry-BJpUjYsO-CCr-K8ay.js"
        ).then(s, m);
      case "utrecht-icon-linkedin":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-linkedin.entry-6qoTZk4a-BRwUr9m9.js"
        ).then(s, m);
      case "utrecht-icon-list":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-list.entry-Bh7JcKe3-BubtiYnx.js"
        ).then(s, m);
      case "utrecht-icon-list-check":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-list-check.entry-BV9yEywP-Dx6EREsD.js"
        ).then(s, m);
      case "utrecht-icon-list-number":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-list-number.entry-CNb12eJd-CnsDCIuk.js"
        ).then(s, m);
      case "utrecht-icon-loupe":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-loupe.entry-Dz2atq8H-CA_gxmg_.js"
        ).then(s, m);
      case "utrecht-icon-mail":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-mail.entry-BZ9sIUFi-DT4DHoN5.js"
        ).then(s, m);
      case "utrecht-icon-markt":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-markt.entry-DhBZBZby-DSI9Zld3.js"
        ).then(s, m);
      case "utrecht-icon-mastodon":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-mastodon.entry-Cu5D3HQD-DpkwGNPh.js"
        ).then(s, m);
      case "utrecht-icon-melding":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-melding.entry-u-FnN5a8-BE9h8-cg.js"
        ).then(s, m);
      case "utrecht-icon-melding-boom":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-melding-boom.entry-hwgLmnx5-DRAx-mSB.js"
        ).then(s, m);
      case "utrecht-icon-melding-klacht":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-melding-klacht.entry-DQ9jMqXF-COqMBmA1.js"
        ).then(s, m);
      case "utrecht-icon-melding-openbareruimte":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-melding-openbareruimte.entry-4Ibd6pKG-DVdiAB7y.js"
        ).then(s, m);
      case "utrecht-icon-melding-verlichting":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-melding-verlichting.entry-DusFh2jW-BSFvgcAs.js"
        ).then(s, m);
      case "utrecht-icon-menselijk":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-menselijk.entry-BDlDeoBu-CR7rFV3c.js"
        ).then(s, m);
      case "utrecht-icon-menu-dot":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-menu-dot.entry-BTdroNz9-OTAlvRyL.js"
        ).then(s, m);
      case "utrecht-icon-menu-dot-open":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-menu-dot-open.entry-C1qpnS9N-1OI06Kin.js"
        ).then(s, m);
      case "utrecht-icon-meterkast":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-meterkast.entry-AbxQWK9K-14YaWf7c.js"
        ).then(s, m);
      case "utrecht-icon-milieu-ontheffing":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-milieu-ontheffing.entry-D73hOn5w-ajz8musq.js"
        ).then(s, m);
      case "utrecht-icon-milieu-zone":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-milieu-zone.entry-B8Hbp8U3-CY3TzfO6.js"
        ).then(s, m);
      case "utrecht-icon-minus":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-minus.entry-CFg23WBG-rSzCJ0pk.js"
        ).then(s, m);
      case "utrecht-icon-minus-vertical":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-minus-vertical.entry-CBYFvWlJ-ng_VIBbe.js"
        ).then(s, m);
      case "utrecht-icon-mobiliteit":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-mobiliteit.entry-CPGfI2We-BpaS_Oif.js"
        ).then(s, m);
      case "utrecht-icon-natuur":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-natuur.entry-Dl5Y5p4i-CtcbWPxI.js"
        ).then(s, m);
      case "utrecht-icon-nieuw-huis":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-nieuw-huis.entry-CtGdRNKc-UQNW0Fr4.js"
        ).then(s, m);
      case "utrecht-icon-nieuwsbrief":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-nieuwsbrief.entry-BMSsD5Hc-Der9pSkv.js"
        ).then(s, m);
      case "utrecht-icon-nummerbord":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-nummerbord.entry-2YOViMU1-BlXMpAlP.js"
        ).then(s, m);
      case "utrecht-icon-om-het-huis":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-om-het-huis.entry-CdPHvdyh-CAQlhtMo.js"
        ).then(s, m);
      case "utrecht-icon-omgeving":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-omgeving.entry-n1Ks3d7_-D5KS49_7.js"
        ).then(s, m);
      case "utrecht-icon-omgevingsvisie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-omgevingsvisie.entry-hfVnqIBJ-DBkB6ZDz.js"
        ).then(s, m);
      case "utrecht-icon-omgevingswet":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-omgevingswet.entry-vcKaqMxE-D0YU8bUG.js"
        ).then(s, m);
      case "utrecht-icon-onderhoud":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-onderhoud.entry-p49RgoYI-DKkWjLjV.js"
        ).then(s, m);
      case "utrecht-icon-ondernemen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-ondernemen.entry-BstT39Ab-CdX0CWiq.js"
        ).then(s, m);
      case "utrecht-icon-openingstijden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-openingstijden.entry-DPpdisF4-CBSJ3JPh.js"
        ).then(s, m);
      case "utrecht-icon-over-de-stad":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-over-de-stad.entry-Cnw66GgP-CiPGpEcT.js"
        ).then(s, m);
      case "utrecht-icon-overlijden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-overlijden.entry-DozV560T-BMmZuIad.js"
        ).then(s, m);
      case "utrecht-icon-panden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-panden.entry-pSDQUgus-C5S0Lgmh.js"
        ).then(s, m);
      case "utrecht-icon-park":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-park.entry-DibMrHCa-Cl9McAB3.js"
        ).then(s, m);
      case "utrecht-icon-parkeerkaart":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeerkaart.entry-kykBS1eL-CY3Xqyo2.js"
        ).then(s, m);
      case "utrecht-icon-parkeervergunning":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeervergunning.entry-C9S4oNWr-xR9VUwQL.js"
        ).then(s, m);
      case "utrecht-icon-parken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parken.entry-DM-Jdsfu-7N0TWofJ.js"
        ).then(s, m);
      case "utrecht-icon-parkeren":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeren.entry-DHefpEkv-CdNOJPZh.js"
        ).then(s, m);
      case "utrecht-icon-parkeren-bedrijven":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeren-bedrijven.entry-Bgkz9aFM-xAiZAKHj.js"
        ).then(s, m);
      case "utrecht-icon-parkeren-betaalautomaat":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeren-betaalautomaat.entry-BEzvbOQX-Cn5XV8NZ.js"
        ).then(s, m);
      case "utrecht-icon-parkeren-betalen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-parkeren-betalen.entry-Ba1KPyQY--Uwf79et.js"
        ).then(s, m);
      case "utrecht-icon-participatie-campagne":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-participatie-campagne.entry-DYqLy-lH-ChOACyNv.js"
        ).then(s, m);
      case "utrecht-icon-participatie-like":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-participatie-like.entry-BJAhm6Sn-DvHmdRz-.js"
        ).then(s, m);
      case "utrecht-icon-participatie-pitch":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-participatie-pitch.entry-DQUJBbiY-BetfqOd6.js"
        ).then(s, m);
      case "utrecht-icon-paspoort":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-paspoort.entry-BkYXhTSQ-Ckzs3Jyy.js"
        ).then(s, m);
      case "utrecht-icon-phone":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-phone.entry-g3t3pfBH-HPfakWJs.js"
        ).then(s, m);
      case "utrecht-icon-pinterest":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-pinterest.entry-CJKzslvT-D9QhpXho.js"
        ).then(s, m);
      case "utrecht-icon-presentatie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-presentatie.entry-BtxkO1R7-DwE1OV3a.js"
        ).then(s, m);
      case "utrecht-icon-prijskaartje":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-prijskaartje.entry-DZI0Yd-K-CF9NOZUk.js"
        ).then(s, m);
      case "utrecht-icon-read-aloud":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-read-aloud.entry-YYNV_s4H-BzqqZL6m.js"
        ).then(s, m);
      case "utrecht-icon-report":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-report.entry-CKwgzDLe-z1f3qMco.js"
        ).then(s, m);
      case "utrecht-icon-rijbewijs":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-rijbewijs.entry-BWCCMIcw-CcW4KMFP.js"
        ).then(s, m);
      case "utrecht-icon-rioolheffing":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-rioolheffing.entry-rCMsTBwW-w9CimPJJ.js"
        ).then(s, m);
      case "utrecht-icon-rolstoel":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-rolstoel.entry-BbsFCGr_-BqOJ0h4s.js"
        ).then(s, m);
      case "utrecht-icon-schild-gemeente-utrecht":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-schild-gemeente-utrecht.entry-C3Ghq9tJ-CS3U9QXO.js"
        ).then(s, m);
      case "utrecht-icon-search":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-search.entry-CosFfp07-6R0-O3tP.js"
        ).then(s, m);
      case "utrecht-icon-shoppen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-shoppen.entry-kRGMM24q-hM8A4xan.js"
        ).then(s, m);
      case "utrecht-icon-sinterklaas":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-sinterklaas.entry-DZHB3-dP-s8H6tY1R.js"
        ).then(s, m);
      case "utrecht-icon-slechtziende-hoordende":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-slechtziende-hoordende.entry-XG3wz7Py-BzxixOuZ.js"
        ).then(s, m);
      case "utrecht-icon-sport":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-sport.entry-CR83x9SL-DgS-TUvY.js"
        ).then(s, m);
      case "utrecht-icon-sport-en-cultuur":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-sport-en-cultuur.entry-CgIJT8ra-Bvb-_ksF.js"
        ).then(s, m);
      case "utrecht-icon-sport-voetbal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-sport-voetbal.entry-BGsqpPOp-CocsHmLu.js"
        ).then(s, m);
      case "utrecht-icon-standaard-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-standaard-projecten.entry-D-gwFS6k-xWxit4Sr.js"
        ).then(s, m);
      case "utrecht-icon-stookverbod":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-stookverbod.entry-Be89cxAF-s3rhAA1W.js"
        ).then(s, m);
      case "utrecht-icon-strand":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-strand.entry-OgqBl44F-DjhfSKDR.js"
        ).then(s, m);
      case "utrecht-icon-strooien":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-strooien.entry-BeEqyhdM-DJpAJYWK.js"
        ).then(s, m);
      case "utrecht-icon-subsidie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-subsidie.entry-BTnlwO8l-NnPxaVfX.js"
        ).then(s, m);
      case "utrecht-icon-subsidie-gezin":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-subsidie-gezin.entry-CACi8rSw-RGPBIlKS.js"
        ).then(s, m);
      case "utrecht-icon-t-shirt":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-t-shirt.entry-Daib8Wxm-DFts35MD.js"
        ).then(s, m);
      case "utrecht-icon-threads":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-threads.entry-BwP_JyrJ-DpG7X1oP.js"
        ).then(s, m);
      case "utrecht-icon-thuiswerken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-thuiswerken.entry-Dp-uD3c_-DHWjemOp.js"
        ).then(s, m);
      case "utrecht-icon-toeslag":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-toeslag.entry-BOh588zM-a7o2nyBf.js"
        ).then(s, m);
      case "utrecht-icon-trein":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-trein.entry-DkTI8w7H-ChZceqTq.js"
        ).then(s, m);
      case "utrecht-icon-trouwen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-trouwen.entry-ChsxeH5_-DrhMBGU3.js"
        ).then(s, m);
      case "utrecht-icon-twitter":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-twitter.entry-Br2Lgxgw-DaDLRM8P.js"
        ).then(s, m);
      case "utrecht-icon-user":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-user.entry-Bo5zbZDz-DwGFHrvI.js"
        ).then(s, m);
      case "utrecht-icon-uw-wijk":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-uw-wijk.entry-p6WkY7Lh-iju0hHSH.js"
        ).then(s, m);
      case "utrecht-icon-vaccinatie":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vaccinatie.entry-3K9I9d0A-CS46iGHw.js"
        ).then(s, m);
      case "utrecht-icon-veilige-wijk":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-veilige-wijk.entry-D8tQaHEX--NP94ejY.js"
        ).then(s, m);
      case "utrecht-icon-vergaderen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vergaderen.entry-Dhk27eQF-CmrEwRns.js"
        ).then(s, m);
      case "utrecht-icon-vergaderendigitaal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vergaderendigitaal.entry-BSZutoR3-DbQXvMLM.js"
        ).then(s, m);
      case "utrecht-icon-vergoeding":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vergoeding.entry-Drqq_fWh-CDO7m-wq.js"
        ).then(s, m);
      case "utrecht-icon-verhuizen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-verhuizen.entry-BKjtuUw8-CpSznYcN.js"
        ).then(s, m);
      case "utrecht-icon-verkeers-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-verkeers-projecten.entry-BcV1ZxGL-BBMHvqqy.js"
        ).then(s, m);
      case "utrecht-icon-verkeerslicht":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-verkeerslicht.entry-C62GAD5A-B3UHacMx.js"
        ).then(s, m);
      case "utrecht-icon-verkiezingen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-verkiezingen.entry-he6vi6mE-Cy82uqMj.js"
        ).then(s, m);
      case "utrecht-icon-verslaving":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-verslaving.entry-Dipca-yn-Dz-b-g2A.js"
        ).then(s, m);
      case "utrecht-icon-vervoersvoorziening":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vervoersvoorziening.entry-BxP6tjUn-DvGf36Y7.js"
        ).then(s, m);
      case "utrecht-icon-virus":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-virus.entry-C0po5MoT-CtqdxMGD.js"
        ).then(s, m);
      case "utrecht-icon-vluchtelingen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vluchtelingen.entry-C6fvWR_D-BRmxOqD8.js"
        ).then(s, m);
      case "utrecht-icon-voorzieningen-vervoer":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-voorzieningen-vervoer.entry-2Qhr7GT5-Bb0MOE6H.js"
        ).then(s, m);
      case "utrecht-icon-vrijwilligerswerk":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vrijwilligerswerk.entry-CEYwI7FO-CoBEE58r.js"
        ).then(s, m);
      case "utrecht-icon-vuilnisbak":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vuilnisbak.entry-DsjERuEI-Db_9-5xN.js"
        ).then(s, m);
      case "utrecht-icon-vuilniszak":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vuilniszak.entry-CZatk-Vu-COtOg92L.js"
        ).then(s, m);
      case "utrecht-icon-vuurwerk":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-vuurwerk.entry-CPPygJVB-4dSbnPP_.js"
        ).then(s, m);
      case "utrecht-icon-wandelstok":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wandelstok.entry-D0ZHozZq-CrBWQHq2.js"
        ).then(s, m);
      case "utrecht-icon-warm":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-warm.entry-Bo9wMqeJ-CmTDbhS4.js"
        ).then(s, m);
      case "utrecht-icon-warning":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-warning.entry-Df5s_Lfa-DFghmEAj.js"
        ).then(s, m);
      case "utrecht-icon-werken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-werken.entry-hfYAH76I-C5EgMj6W.js"
        ).then(s, m);
      case "utrecht-icon-werkzaamheden":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-werkzaamheden.entry-Bzk9n4kX-C9tlAXPU.js"
        ).then(s, m);
      case "utrecht-icon-whatsapp":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-whatsapp.entry-CaNAiDxw-DMaqD11U.js"
        ).then(s, m);
      case "utrecht-icon-wijk-denkmee":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-denkmee.entry-Cgvjr4Yv-CLVigQVr.js"
        ).then(s, m);
      case "utrecht-icon-wijk-overlast":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-overlast.entry-W1Ijf9FS-DtlFgCv1.js"
        ).then(s, m);
      case "utrecht-icon-wijk-park":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-park.entry-Dq_KBMgO-H4LMON8s.js"
        ).then(s, m);
      case "utrecht-icon-wijk-projecten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-projecten.entry-oTTsRiZl-DgUkaOs8.js"
        ).then(s, m);
      case "utrecht-icon-wijk-speelplaats":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-speelplaats.entry-XdLz3p9P-Dafq60OB.js"
        ).then(s, m);
      case "utrecht-icon-wijk-sport":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-sport.entry-C4qRcdvW-COqX81Ey.js"
        ).then(s, m);
      case "utrecht-icon-wijk-zwemmen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wijk-zwemmen.entry-C6fzJKLd-D6dZa2lk.js"
        ).then(s, m);
      case "utrecht-icon-wonen-kosten":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-wonen-kosten.entry-CVxMjp-m-Tj0vdcAm.js"
        ).then(s, m);
      case "utrecht-icon-woning-zoeken":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-woning-zoeken.entry-CqadKddA-Bez13Wav.js"
        ).then(s, m);
      case "utrecht-icon-x":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-x.entry-CngQ6Zt3-CO5GGm9O.js"
        ).then(s, m);
      case "utrecht-icon-youtube":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-youtube.entry-dXAO0qUR-Z3Gl7vuH.js"
        ).then(s, m);
      case "utrecht-icon-zelfstandig-wonen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zelfstandig-wonen.entry-1nsLBa5n-B7tPHj0O.js"
        ).then(s, m);
      case "utrecht-icon-zoom-minus":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zoom-minus.entry-BzyfUs3n-Dkn69Sef.js"
        ).then(s, m);
      case "utrecht-icon-zoom-plus":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zoom-plus.entry-uVsiBJ91-B3r41fD6.js"
        ).then(s, m);
      case "utrecht-icon-zoomin":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zoomin.entry-CoLR5nqD-Cbfj1CZi.js"
        ).then(s, m);
      case "utrecht-icon-zoomout":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zoomout.entry-CgNSAKQp-CNQ7Z0Sf.js"
        ).then(s, m);
      case "utrecht-icon-zorg-huis":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zorg-huis.entry-rm3RMx-i-U-XfBfZY.js"
        ).then(s, m);
      case "utrecht-icon-zweefpaal":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zweefpaal.entry-C6FT5W7A-CIih6f8t.js"
        ).then(s, m);
      case "utrecht-icon-zwemmen":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-icon-zwemmen.entry-iDEK2w7g-Bi0LXanv.js"
        ).then(s, m);
      case "utrecht-logo-button":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-logo-button.entry-BFn5Caw1-6saYaXBY.js"
        ).then(s, m);
      case "utrecht-map-marker":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-map-marker.entry-CiShd1hW-BxTtapIs.js"
        ).then(s, m);
      case "utrecht-multiline-data":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-multiline-data.entry-DBS0bo6v-BQdx24sz.js"
        ).then(s, m);
      case "utrecht-nav-bar":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-nav-bar.entry-LXX-BUCc-BAAJd2ea.js"
        ).then(s, m);
      case "utrecht-number-badge":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-number-badge.entry-_pJL_iK_-B8XKWwI3.js"
        ).then(s, m);
      case "utrecht-page-body":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-page-body.entry-CL3ThZEi-DnQGuQlt.js"
        ).then(s, m);
      case "utrecht-page-footer":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-page-footer.entry-DV6HcW88-BbD5JpeU.js"
        ).then(s, m);
      case "utrecht-page-layout":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-page-layout.entry-DuSxRYfw-iMqW-OJ1.js"
        ).then(s, m);
      case "utrecht-pagination":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-pagination.entry-Cx8zakaT-DtcJKLlI.js"
        ).then(s, m);
      case "utrecht-preserve-data":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-preserve-data.entry-CF80wsy1-BxREvH-Y.js"
        ).then(s, m);
      case "utrecht-progress-list":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-progress-list.entry-Bbfcl77_-DM6NtmPl.js"
        ).then(s, m);
      case "utrecht-progress-list-item":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-progress-list-item.entry-cYKRCrAi-BIVLIZCm.js"
        ).then(s, m);
      case "utrecht-progress-sublist-item":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-progress-sublist-item.entry-Bn5oFMlb-46605aUq.js"
        ).then(s, m);
      case "utrecht-root":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-root.entry-CYKNi7ja-DAdH9XAf.js"
        ).then(s, m);
      case "utrecht-sidenav":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-sidenav.entry-DsJntcr3-Cqw-scLh.js"
        ).then(s, m);
      case "utrecht-surface":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-surface.entry-Bqk1rnMt-dWKODk6t.js"
        ).then(s, m);
      case "utrecht-table":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table.entry-YzsMHSzv-yHTjS2JH.js"
        ).then(s, m);
      case "utrecht-table-body":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-body.entry-CanFOVXv-CSmCH7Rd.js"
        ).then(s, m);
      case "utrecht-table-caption":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-caption.entry-Cd_6frE7-oNKPMCmq.js"
        ).then(s, m);
      case "utrecht-table-cell":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-cell.entry-ChM1itP3-MfXa2do0.js"
        ).then(s, m);
      case "utrecht-table-container":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-container.entry-RCSX6-7h-BEYLagoe.js"
        ).then(s, m);
      case "utrecht-table-footer":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-footer.entry-9nZkF692-DoCZKexV.js"
        ).then(s, m);
      case "utrecht-table-header":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-header.entry-FDdpoHLc-nYM3WM7V.js"
        ).then(s, m);
      case "utrecht-table-header-cell":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-header-cell.entry-DdCfW9Bq-C1YabBhd.js"
        ).then(s, m);
      case "utrecht-table-row":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-table-row.entry-BweE8PNb-CwjImDto.js"
        ).then(s, m);
      case "utrecht-textarea":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-textarea.entry-kHMTSzi1-iTRdXABQ.js"
        ).then(s, m);
      case "utrecht-textbox":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-textbox.entry-DPIuFeEa-DCPvW_uP.js"
        ).then(s, m);
      case "utrecht-top-task-link":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-top-task-link.entry-BXbMC0vy-B98ZRzT0.js"
        ).then(s, m);
      case "utrecht-top-task-nav":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-top-task-nav.entry-DyhTnI36-DtooUQIh.js"
        ).then(s, m);
      case "utrecht-digid-logo":
        return import(
          /* webpackMode: "lazy" */
          "./utrecht-digid-logo.entry-D92Sc2v6-14nn2VTU.js"
        ).then(s, m);
    }
  }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${o}.entry.js`
  ).then((s) => (bo.set(o, s), s[n]), m);
}, wn = /* @__PURE__ */ new Map(), Un = typeof window < "u" ? window : {}, lt = Un.document || { head: {} }, B = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (r) => r(),
  raf: (r) => requestAnimationFrame(r),
  ael: (r, t, e, n) => r.addEventListener(t, e, n),
  rel: (r, t, e, n) => r.removeEventListener(t, e, n),
  ce: (r, t) => new CustomEvent(r, t)
}, _g = (r) => Promise.resolve(r), Bg = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), qo = !1, wa = [], ph = [], Vg = (r, t) => (e) => {
  r.push(e), qo || (qo = !0, B.$flags$ & 4 ? Vi(Jo) : B.raf(Jo));
}, xa = (r) => {
  for (let t = 0; t < r.length; t++)
    try {
      r[t](performance.now());
    } catch (e) {
      m(e);
    }
  r.length = 0;
}, Jo = () => {
  xa(wa), xa(ph), (qo = wa.length > 0) && B.raf(Jo);
}, Vi = (r) => _g().then(r), Hg = /* @__PURE__ */ Vg(ph);
const Fg = () => {
}, Wg = async (r, t) => {
  if (!(typeof window > "u"))
    return await Fg(), Pg(JSON.parse('[["utrecht-contact-card-template",[[1,"utrecht-contact-card-template"]]],["utrecht-digid-button",[[1,"utrecht-digid-button",{"type":[1]}]]],["utrecht-progress-list-item",[[1,"utrecht-progress-list-item",{"checked":[4],"from":[1],"to":[1],"appearance":[1],"details":[4],"_open":[32]}]]],["utrecht-backdrop",[[1,"utrecht-backdrop",{"viewport":[4]}]]],["utrecht-body",[[1,"utrecht-body"]]],["utrecht-breadcrumb-nav",[[1,"utrecht-breadcrumb-nav",{"json":[1],"variant":[1]}]]],["utrecht-button-group",[[1,"utrecht-button-group",{"direction":[1]}]]],["utrecht-checkbox",[[1,"utrecht-checkbox",{"disabled":[516],"readOnly":[516,"readonly"],"checked":[4],"value":[1]}]]],["utrecht-column-layout",[[1,"utrecht-column-layout",{"rule":[516]}]]],["utrecht-custom-checkbox",[[1,"utrecht-custom-checkbox",{"disabled":[4],"checked":[4],"indeterminate":[4],"invalid":[4],"required":[4]}]]],["utrecht-data-list",[[1,"utrecht-data-list"]]],["utrecht-data-list-actions",[[1,"utrecht-data-list-actions"]]],["utrecht-data-list-item",[[1,"utrecht-data-list-item"]]],["utrecht-data-list-key",[[1,"utrecht-data-list-key"]]],["utrecht-data-list-value",[[1,"utrecht-data-list-value"]]],["utrecht-eherkenning-logo",[[1,"utrecht-eherkenning-logo"]]],["utrecht-eidas-logo",[[1,"utrecht-eidas-logo"]]],["utrecht-form-field-error-message",[[1,"utrecht-form-field-error-message"]]],["utrecht-form-toggle",[[1,"utrecht-form-toggle",{"disabled":[516],"checked":[516]}]]],["utrecht-html-content",[[4,"utrecht-html-content"]]],["utrecht-icon-afspraak-maken",[[1,"utrecht-icon-afspraak-maken"]]],["utrecht-icon-afval",[[1,"utrecht-icon-afval"]]],["utrecht-icon-afval-container",[[1,"utrecht-icon-afval-container"]]],["utrecht-icon-afval-containerpas",[[1,"utrecht-icon-afval-containerpas"]]],["utrecht-icon-afval-kalender",[[1,"utrecht-icon-afval-kalender"]]],["utrecht-icon-afval-pmd",[[1,"utrecht-icon-afval-pmd"]]],["utrecht-icon-afval-scheiden",[[1,"utrecht-icon-afval-scheiden"]]],["utrecht-icon-afvalkalender",[[1,"utrecht-icon-afvalkalender"]]],["utrecht-icon-alleen",[[1,"utrecht-icon-alleen"]]],["utrecht-icon-arrow",[[1,"utrecht-icon-arrow"]]],["utrecht-icon-auto",[[1,"utrecht-icon-auto"]]],["utrecht-icon-begroting",[[1,"utrecht-icon-begroting"]]],["utrecht-icon-bestemmingsplan",[[1,"utrecht-icon-bestemmingsplan"]]],["utrecht-icon-betaaldatum",[[1,"utrecht-icon-betaaldatum"]]],["utrecht-icon-bewijsstukken",[[1,"utrecht-icon-bewijsstukken"]]],["utrecht-icon-bijstand",[[1,"utrecht-icon-bijstand"]]],["utrecht-icon-blad",[[1,"utrecht-icon-blad"]]],["utrecht-icon-bluesky",[[1,"utrecht-icon-bluesky"]]],["utrecht-icon-bouw-projecten",[[1,"utrecht-icon-bouw-projecten"]]],["utrecht-icon-bouwproject",[[1,"utrecht-icon-bouwproject"]]],["utrecht-icon-brandgevaar",[[1,"utrecht-icon-brandgevaar"]]],["utrecht-icon-brief-betalen",[[1,"utrecht-icon-brief-betalen"]]],["utrecht-icon-buurtcentra",[[1,"utrecht-icon-buurtcentra"]]],["utrecht-icon-checkmark",[[1,"utrecht-icon-checkmark"]]],["utrecht-icon-chevron-down",[[1,"utrecht-icon-chevron-down"]]],["utrecht-icon-chevron-left",[[1,"utrecht-icon-chevron-left",{"direction":[513]}]]],["utrecht-icon-chevron-right",[[1,"utrecht-icon-chevron-right",{"direction":[513]}]]],["utrecht-icon-chevron-up",[[1,"utrecht-icon-chevron-up"]]],["utrecht-icon-close",[[1,"utrecht-icon-close"]]],["utrecht-icon-coffee",[[1,"utrecht-icon-coffee"]]],["utrecht-icon-college-b-w",[[1,"utrecht-icon-college-b-w"]]],["utrecht-icon-container",[[1,"utrecht-icon-container"]]],["utrecht-icon-container-bio",[[1,"utrecht-icon-container-bio"]]],["utrecht-icon-container-glas",[[1,"utrecht-icon-container-glas"]]],["utrecht-icon-container-groenafval",[[1,"utrecht-icon-container-groenafval"]]],["utrecht-icon-container-met-zak",[[1,"utrecht-icon-container-met-zak"]]],["utrecht-icon-container-papier",[[1,"utrecht-icon-container-papier"]]],["utrecht-icon-container-pmd",[[1,"utrecht-icon-container-pmd"]]],["utrecht-icon-container-restafval",[[1,"utrecht-icon-container-restafval"]]],["utrecht-icon-container-textiel",[[1,"utrecht-icon-container-textiel"]]],["utrecht-icon-cross",[[1,"utrecht-icon-cross"]]],["utrecht-icon-dakloos",[[1,"utrecht-icon-dakloos"]]],["utrecht-icon-dementie",[[1,"utrecht-icon-dementie"]]],["utrecht-icon-documenten",[[1,"utrecht-icon-documenten"]]],["utrecht-icon-duurzaam",[[1,"utrecht-icon-duurzaam"]]],["utrecht-icon-eenzaamheid",[[1,"utrecht-icon-eenzaamheid"]]],["utrecht-icon-eikenprocessie",[[1,"utrecht-icon-eikenprocessie"]]],["utrecht-icon-elektrisch-rijden",[[1,"utrecht-icon-elektrisch-rijden"]]],["utrecht-icon-energie-projecten",[[1,"utrecht-icon-energie-projecten"]]],["utrecht-icon-energie-vergoeding",[[1,"utrecht-icon-energie-vergoeding"]]],["utrecht-icon-energietransitie",[[1,"utrecht-icon-energietransitie"]]],["utrecht-icon-error",[[1,"utrecht-icon-error"]]],["utrecht-icon-evenementen",[[1,"utrecht-icon-evenementen"]]],["utrecht-icon-facebook",[[1,"utrecht-icon-facebook"]]],["utrecht-icon-fiets",[[1,"utrecht-icon-fiets"]]],["utrecht-icon-filter",[[1,"utrecht-icon-filter"]]],["utrecht-icon-flickr",[[1,"utrecht-icon-flickr"]]],["utrecht-icon-geboorte",[[1,"utrecht-icon-geboorte"]]],["utrecht-icon-gebruiker-centraal",[[1,"utrecht-icon-gebruiker-centraal"]]],["utrecht-icon-gebruiker-ingelogd",[[1,"utrecht-icon-gebruiker-ingelogd"]]],["utrecht-icon-gegevenswoordenboek",[[1,"utrecht-icon-gegevenswoordenboek"]]],["utrecht-icon-geluid",[[1,"utrecht-icon-geluid"]]],["utrecht-icon-gemeente-locatie",[[1,"utrecht-icon-gemeente-locatie"]]],["utrecht-icon-gemeenteraad",[[1,"utrecht-icon-gemeenteraad"]]],["utrecht-icon-gereedschap",[[1,"utrecht-icon-gereedschap"]]],["utrecht-icon-gezicht",[[1,"utrecht-icon-gezicht"]]],["utrecht-icon-gezin",[[1,"utrecht-icon-gezin"]]],["utrecht-icon-glas-afval",[[1,"utrecht-icon-glas-afval"]]],["utrecht-icon-glijbaan",[[1,"utrecht-icon-glijbaan"]]],["utrecht-icon-grafiek",[[1,"utrecht-icon-grafiek"]]],["utrecht-icon-groen-projecten",[[1,"utrecht-icon-groen-projecten"]]],["utrecht-icon-grofvuil",[[1,"utrecht-icon-grofvuil"]]],["utrecht-icon-grofvuil-ophalen",[[1,"utrecht-icon-grofvuil-ophalen"]]],["utrecht-icon-hamburger-menu",[[1,"utrecht-icon-hamburger-menu"]]],["utrecht-icon-herdenking",[[1,"utrecht-icon-herdenking"]]],["utrecht-icon-hondenbelasting",[[1,"utrecht-icon-hondenbelasting"]]],["utrecht-icon-horeca",[[1,"utrecht-icon-horeca"]]],["utrecht-icon-horecavergunning",[[1,"utrecht-icon-horecavergunning"]]],["utrecht-icon-huis",[[1,"utrecht-icon-huis"]]],["utrecht-icon-huis-en-omgeving",[[1,"utrecht-icon-huis-en-omgeving"]]],["utrecht-icon-huishoudelijk-geweld",[[1,"utrecht-icon-huishoudelijk-geweld"]]],["utrecht-icon-hulp-huishouden",[[1,"utrecht-icon-hulp-huishouden"]]],["utrecht-icon-hulp-vervoer",[[1,"utrecht-icon-hulp-vervoer"]]],["utrecht-icon-hulp-zorg",[[1,"utrecht-icon-hulp-zorg"]]],["utrecht-icon-hulpmiddelen-gezin",[[1,"utrecht-icon-hulpmiddelen-gezin"]]],["utrecht-icon-hulpverlening",[[1,"utrecht-icon-hulpverlening"]]],["utrecht-icon-idee",[[1,"utrecht-icon-idee"]]],["utrecht-icon-informatie",[[1,"utrecht-icon-informatie"]]],["utrecht-icon-information",[[1,"utrecht-icon-information"]]],["utrecht-icon-innovatie",[[1,"utrecht-icon-innovatie"]]],["utrecht-icon-inspraak-inwoners",[[1,"utrecht-icon-inspraak-inwoners"]]],["utrecht-icon-instagram",[[1,"utrecht-icon-instagram"]]],["utrecht-icon-kalender",[[1,"utrecht-icon-kalender"]]],["utrecht-icon-kennis",[[1,"utrecht-icon-kennis"]]],["utrecht-icon-kerstbomen",[[1,"utrecht-icon-kerstbomen"]]],["utrecht-icon-klachten",[[1,"utrecht-icon-klachten"]]],["utrecht-icon-kroon",[[1,"utrecht-icon-kroon"]]],["utrecht-icon-laadpaal",[[1,"utrecht-icon-laadpaal"]]],["utrecht-icon-language",[[1,"utrecht-icon-language"]]],["utrecht-icon-lantaarnpaal",[[1,"utrecht-icon-lantaarnpaal"]]],["utrecht-icon-lantaarnpaal-oud",[[1,"utrecht-icon-lantaarnpaal-oud"]]],["utrecht-icon-leren",[[1,"utrecht-icon-leren"]]],["utrecht-icon-let-op",[[1,"utrecht-icon-let-op"]]],["utrecht-icon-linkedin",[[1,"utrecht-icon-linkedin"]]],["utrecht-icon-list",[[1,"utrecht-icon-list"]]],["utrecht-icon-list-check",[[1,"utrecht-icon-list-check"]]],["utrecht-icon-list-number",[[1,"utrecht-icon-list-number"]]],["utrecht-icon-loupe",[[1,"utrecht-icon-loupe"]]],["utrecht-icon-mail",[[1,"utrecht-icon-mail"]]],["utrecht-icon-markt",[[1,"utrecht-icon-markt"]]],["utrecht-icon-mastodon",[[1,"utrecht-icon-mastodon"]]],["utrecht-icon-melding",[[1,"utrecht-icon-melding"]]],["utrecht-icon-melding-boom",[[1,"utrecht-icon-melding-boom"]]],["utrecht-icon-melding-klacht",[[1,"utrecht-icon-melding-klacht"]]],["utrecht-icon-melding-openbareruimte",[[1,"utrecht-icon-melding-openbareruimte"]]],["utrecht-icon-melding-verlichting",[[1,"utrecht-icon-melding-verlichting"]]],["utrecht-icon-menselijk",[[1,"utrecht-icon-menselijk"]]],["utrecht-icon-menu-dot",[[1,"utrecht-icon-menu-dot"]]],["utrecht-icon-menu-dot-open",[[1,"utrecht-icon-menu-dot-open"]]],["utrecht-icon-meterkast",[[1,"utrecht-icon-meterkast"]]],["utrecht-icon-milieu-ontheffing",[[1,"utrecht-icon-milieu-ontheffing"]]],["utrecht-icon-milieu-zone",[[1,"utrecht-icon-milieu-zone"]]],["utrecht-icon-minus",[[1,"utrecht-icon-minus"]]],["utrecht-icon-minus-vertical",[[1,"utrecht-icon-minus-vertical"]]],["utrecht-icon-mobiliteit",[[1,"utrecht-icon-mobiliteit"]]],["utrecht-icon-natuur",[[1,"utrecht-icon-natuur"]]],["utrecht-icon-nieuw-huis",[[1,"utrecht-icon-nieuw-huis"]]],["utrecht-icon-nieuwsbrief",[[1,"utrecht-icon-nieuwsbrief"]]],["utrecht-icon-nummerbord",[[1,"utrecht-icon-nummerbord"]]],["utrecht-icon-om-het-huis",[[1,"utrecht-icon-om-het-huis"]]],["utrecht-icon-omgeving",[[1,"utrecht-icon-omgeving"]]],["utrecht-icon-omgevingsvisie",[[1,"utrecht-icon-omgevingsvisie"]]],["utrecht-icon-omgevingswet",[[1,"utrecht-icon-omgevingswet"]]],["utrecht-icon-onderhoud",[[1,"utrecht-icon-onderhoud"]]],["utrecht-icon-ondernemen",[[1,"utrecht-icon-ondernemen"]]],["utrecht-icon-openingstijden",[[1,"utrecht-icon-openingstijden"]]],["utrecht-icon-over-de-stad",[[1,"utrecht-icon-over-de-stad"]]],["utrecht-icon-overlijden",[[1,"utrecht-icon-overlijden"]]],["utrecht-icon-panden",[[1,"utrecht-icon-panden"]]],["utrecht-icon-park",[[1,"utrecht-icon-park"]]],["utrecht-icon-parkeerkaart",[[1,"utrecht-icon-parkeerkaart"]]],["utrecht-icon-parkeervergunning",[[1,"utrecht-icon-parkeervergunning"]]],["utrecht-icon-parken",[[1,"utrecht-icon-parken"]]],["utrecht-icon-parkeren",[[1,"utrecht-icon-parkeren"]]],["utrecht-icon-parkeren-bedrijven",[[1,"utrecht-icon-parkeren-bedrijven"]]],["utrecht-icon-parkeren-betaalautomaat",[[1,"utrecht-icon-parkeren-betaalautomaat"]]],["utrecht-icon-parkeren-betalen",[[1,"utrecht-icon-parkeren-betalen"]]],["utrecht-icon-participatie-campagne",[[1,"utrecht-icon-participatie-campagne"]]],["utrecht-icon-participatie-like",[[1,"utrecht-icon-participatie-like"]]],["utrecht-icon-participatie-pitch",[[1,"utrecht-icon-participatie-pitch"]]],["utrecht-icon-paspoort",[[1,"utrecht-icon-paspoort"]]],["utrecht-icon-phone",[[1,"utrecht-icon-phone"]]],["utrecht-icon-pinterest",[[1,"utrecht-icon-pinterest"]]],["utrecht-icon-presentatie",[[1,"utrecht-icon-presentatie"]]],["utrecht-icon-prijskaartje",[[1,"utrecht-icon-prijskaartje"]]],["utrecht-icon-read-aloud",[[1,"utrecht-icon-read-aloud"]]],["utrecht-icon-report",[[1,"utrecht-icon-report"]]],["utrecht-icon-rijbewijs",[[1,"utrecht-icon-rijbewijs"]]],["utrecht-icon-rioolheffing",[[1,"utrecht-icon-rioolheffing"]]],["utrecht-icon-rolstoel",[[1,"utrecht-icon-rolstoel"]]],["utrecht-icon-schild-gemeente-utrecht",[[1,"utrecht-icon-schild-gemeente-utrecht"]]],["utrecht-icon-search",[[1,"utrecht-icon-search"]]],["utrecht-icon-shoppen",[[1,"utrecht-icon-shoppen"]]],["utrecht-icon-sinterklaas",[[1,"utrecht-icon-sinterklaas"]]],["utrecht-icon-slechtziende-hoordende",[[1,"utrecht-icon-slechtziende-hoordende"]]],["utrecht-icon-sport",[[1,"utrecht-icon-sport"]]],["utrecht-icon-sport-en-cultuur",[[1,"utrecht-icon-sport-en-cultuur"]]],["utrecht-icon-sport-voetbal",[[1,"utrecht-icon-sport-voetbal"]]],["utrecht-icon-standaard-projecten",[[1,"utrecht-icon-standaard-projecten"]]],["utrecht-icon-stookverbod",[[1,"utrecht-icon-stookverbod"]]],["utrecht-icon-strand",[[1,"utrecht-icon-strand"]]],["utrecht-icon-strooien",[[1,"utrecht-icon-strooien"]]],["utrecht-icon-subsidie",[[1,"utrecht-icon-subsidie"]]],["utrecht-icon-subsidie-gezin",[[1,"utrecht-icon-subsidie-gezin"]]],["utrecht-icon-t-shirt",[[1,"utrecht-icon-t-shirt"]]],["utrecht-icon-threads",[[1,"utrecht-icon-threads"]]],["utrecht-icon-thuiswerken",[[1,"utrecht-icon-thuiswerken"]]],["utrecht-icon-toeslag",[[1,"utrecht-icon-toeslag"]]],["utrecht-icon-trein",[[1,"utrecht-icon-trein"]]],["utrecht-icon-trouwen",[[1,"utrecht-icon-trouwen"]]],["utrecht-icon-twitter",[[1,"utrecht-icon-twitter"]]],["utrecht-icon-user",[[1,"utrecht-icon-user"]]],["utrecht-icon-uw-wijk",[[1,"utrecht-icon-uw-wijk"]]],["utrecht-icon-vaccinatie",[[1,"utrecht-icon-vaccinatie"]]],["utrecht-icon-veilige-wijk",[[1,"utrecht-icon-veilige-wijk"]]],["utrecht-icon-vergaderen",[[1,"utrecht-icon-vergaderen"]]],["utrecht-icon-vergaderendigitaal",[[1,"utrecht-icon-vergaderendigitaal"]]],["utrecht-icon-vergoeding",[[1,"utrecht-icon-vergoeding"]]],["utrecht-icon-verhuizen",[[1,"utrecht-icon-verhuizen"]]],["utrecht-icon-verkeers-projecten",[[1,"utrecht-icon-verkeers-projecten"]]],["utrecht-icon-verkeerslicht",[[1,"utrecht-icon-verkeerslicht"]]],["utrecht-icon-verkiezingen",[[1,"utrecht-icon-verkiezingen"]]],["utrecht-icon-verslaving",[[1,"utrecht-icon-verslaving"]]],["utrecht-icon-vervoersvoorziening",[[1,"utrecht-icon-vervoersvoorziening"]]],["utrecht-icon-virus",[[1,"utrecht-icon-virus"]]],["utrecht-icon-vluchtelingen",[[1,"utrecht-icon-vluchtelingen"]]],["utrecht-icon-voorzieningen-vervoer",[[1,"utrecht-icon-voorzieningen-vervoer"]]],["utrecht-icon-vrijwilligerswerk",[[1,"utrecht-icon-vrijwilligerswerk"]]],["utrecht-icon-vuilnisbak",[[1,"utrecht-icon-vuilnisbak"]]],["utrecht-icon-vuilniszak",[[1,"utrecht-icon-vuilniszak"]]],["utrecht-icon-vuurwerk",[[1,"utrecht-icon-vuurwerk"]]],["utrecht-icon-wandelstok",[[1,"utrecht-icon-wandelstok"]]],["utrecht-icon-warm",[[1,"utrecht-icon-warm"]]],["utrecht-icon-warning",[[1,"utrecht-icon-warning"]]],["utrecht-icon-werken",[[1,"utrecht-icon-werken"]]],["utrecht-icon-werkzaamheden",[[1,"utrecht-icon-werkzaamheden"]]],["utrecht-icon-whatsapp",[[1,"utrecht-icon-whatsapp"]]],["utrecht-icon-wijk-denkmee",[[1,"utrecht-icon-wijk-denkmee"]]],["utrecht-icon-wijk-overlast",[[1,"utrecht-icon-wijk-overlast"]]],["utrecht-icon-wijk-park",[[1,"utrecht-icon-wijk-park"]]],["utrecht-icon-wijk-projecten",[[1,"utrecht-icon-wijk-projecten"]]],["utrecht-icon-wijk-speelplaats",[[1,"utrecht-icon-wijk-speelplaats"]]],["utrecht-icon-wijk-sport",[[1,"utrecht-icon-wijk-sport"]]],["utrecht-icon-wijk-zwemmen",[[1,"utrecht-icon-wijk-zwemmen"]]],["utrecht-icon-wonen-kosten",[[1,"utrecht-icon-wonen-kosten"]]],["utrecht-icon-woning-zoeken",[[1,"utrecht-icon-woning-zoeken"]]],["utrecht-icon-x",[[1,"utrecht-icon-x"]]],["utrecht-icon-youtube",[[1,"utrecht-icon-youtube"]]],["utrecht-icon-zelfstandig-wonen",[[1,"utrecht-icon-zelfstandig-wonen"]]],["utrecht-icon-zoom-minus",[[1,"utrecht-icon-zoom-minus"]]],["utrecht-icon-zoom-plus",[[1,"utrecht-icon-zoom-plus"]]],["utrecht-icon-zoomin",[[1,"utrecht-icon-zoomin"]]],["utrecht-icon-zoomout",[[1,"utrecht-icon-zoomout"]]],["utrecht-icon-zorg-huis",[[1,"utrecht-icon-zorg-huis"]]],["utrecht-icon-zweefpaal",[[1,"utrecht-icon-zweefpaal"]]],["utrecht-icon-zwemmen",[[1,"utrecht-icon-zwemmen"]]],["utrecht-logo-button",[[1,"utrecht-logo-button"]]],["utrecht-map-marker",[[1,"utrecht-map-marker"]]],["utrecht-multiline-data",[[1,"utrecht-multiline-data"]]],["utrecht-nav-bar",[[1,"utrecht-nav-bar"]]],["utrecht-number-badge",[[1,"utrecht-number-badge",{"value":[2],"max":[2],"locale":[1]}]]],["utrecht-page-body",[[1,"utrecht-page-body"]]],["utrecht-page-footer",[[1,"utrecht-page-footer"]]],["utrecht-page-layout",[[1,"utrecht-page-layout"]]],["utrecht-pagination",[[1,"utrecht-pagination",{"links":[1],"next":[1],"prev":[1],"currentIndex":[2,"current-index"]}]]],["utrecht-preserve-data",[[4,"utrecht-preserve-data",{"dateTime":[513,"datetime"],"value":[1]}]]],["utrecht-progress-list",[[1,"utrecht-progress-list"]]],["utrecht-progress-sublist-item",[[1,"utrecht-progress-sublist-item",{"appearance":[1],"checked":[4]}]]],["utrecht-root",[[1,"utrecht-root"]]],["utrecht-sidenav",[[1,"utrecht-sidenav",{"json":[1]}]]],["utrecht-surface",[[1,"utrecht-surface"]]],["utrecht-table",[[1,"utrecht-table"]]],["utrecht-table-body",[[1,"utrecht-table-body"]]],["utrecht-table-caption",[[1,"utrecht-table-caption"]]],["utrecht-table-cell",[[1,"utrecht-table-cell"]]],["utrecht-table-container",[[4,"utrecht-table-container"]]],["utrecht-table-footer",[[1,"utrecht-table-footer"]]],["utrecht-table-header",[[1,"utrecht-table-header"]]],["utrecht-table-header-cell",[[1,"utrecht-table-header-cell",{"scope":[1]}]]],["utrecht-table-row",[[1,"utrecht-table-row"]]],["utrecht-textarea",[[1,"utrecht-textarea",{"autocomplete":[1],"cols":[2],"spellcheck":[4],"disabled":[516],"invalid":[516],"placeholder":[1],"readOnly":[516,"readonly"],"required":[516],"rows":[2],"value":[1]}]]],["utrecht-textbox",[[1,"utrecht-textbox",{"autoComplete":[513,"autocomplete"],"disabled":[516],"invalid":[516],"min":[8],"max":[8],"pattern":[1],"placeholder":[1],"readOnly":[516,"readonly"],"required":[516],"type":[513],"value":[1]}]]],["utrecht-top-task-link",[[1,"utrecht-top-task-link",{"external":[4],"href":[1],"target":[1]}]]],["utrecht-top-task-nav",[[1,"utrecht-top-task-nav"]]],["utrecht-digid-logo",[[1,"utrecht-digid-logo"]]],["utrecht-action-group_46",[[1,"utrecht-form-field-checkbox",{"label":[1],"disabled":[516],"checked":[516],"invalid":[516],"required":[516],"name":[1],"value":[1]}],[1,"utrecht-form-field-textarea",{"cols":[2],"disabled":[516],"invalid":[516],"label":[1],"name":[1],"readOnly":[516,"readonly"],"placeholder":[1],"required":[516],"rows":[2],"value":[1]}],[1,"utrecht-form-field-textbox",{"autoComplete":[513,"autocomplete"],"disabled":[516],"invalid":[516],"label":[1],"min":[8],"max":[8],"name":[1],"pattern":[1],"placeholder":[1],"readOnly":[516,"readonly"],"required":[516],"type":[513],"value":[1]}],[1,"utrecht-action-group",{"direction":[1]}],[1,"utrecht-alert",{"type":[1]}],[1,"utrecht-article"],[1,"utrecht-badge-counter",{"value":[2],"max":[2],"locale":[1]}],[1,"utrecht-badge-list"],[1,"utrecht-badge-status",{"status":[1]}],[1,"utrecht-button-link",{"appearance":[1],"download":[1],"external":[4],"href":[1],"placeholder":[4],"target":[1]}],[1,"utrecht-code"],[1,"utrecht-code-block"],[1,"utrecht-color-sample",{"color":[1]}],[1,"utrecht-data-badge"],[1,"utrecht-document"],[1,"utrecht-drawer",{"align":[1],"open":[4],"close":[64],"showModal":[64]}],[1,"utrecht-emphasis"],[1,"utrecht-flex-wrap-fallback",{"flexTarget":[513,"flextarget"],"resizeObserver":[32],"contentWraps":[32]}],[4,"utrecht-form",{"action":[1],"autocomplete":[1],"enctype":[1],"method":[1],"noValidate":[1,"novalidate"],"target":[1]}],[1,"utrecht-heading",{"level":[2]}],[1,"utrecht-heading-1"],[1,"utrecht-heading-4"],[1,"utrecht-heading-5"],[1,"utrecht-heading-6"],[1,"utrecht-heading-group"],[1,"utrecht-iban-data",{"value":[1]}],[1,"utrecht-icon"],[1,"utrecht-link",{"download":[1],"href":[1],"target":[1]}],[1,"utrecht-link-button",{"disabled":[4],"type":[1],"inline":[4],"pressed":[4],"form":[513],"formAction":[513,"formaction"],"formEnctype":[513,"formenctype"],"formMethod":[513,"formmethod"],"formNoValidate":[516,"formnovalidate"],"formTarget":[513,"formtarget"],"popoverTarget":[513,"popovertarget"],"popoverTargetAction":[513,"popovertargetaction"],"name":[1],"value":[1]}],[1,"utrecht-logo"],[1,"utrecht-logo-image"],[1,"utrecht-mark"],[1,"utrecht-number-data",{"value":[8]}],[1,"utrecht-page"],[1,"utrecht-page-content"],[1,"utrecht-page-header"],[1,"utrecht-pre-heading"],[1,"utrecht-separator"],[1,"utrecht-skip-link",{"href":[1]}],[1,"utrecht-spotlight-section",{"appearance":[1]}],[1,"utrecht-url-data"],[1,"utrecht-button",{"appearance":[1],"busy":[4],"disabled":[4],"expanded":[8],"pressed":[8],"form":[513,"readonly"],"formAction":[513,"formaction"],"formEnctype":[513,"formenctype"],"formMethod":[513,"formmethod"],"formNoValidate":[516,"formnovalidate"],"formTarget":[513,"formtarget"],"popoverTarget":[513,"popovertarget"],"popoverTargetAction":[513,"popovertargetaction"],"name":[1],"value":[1],"type":[1]}],[1,"utrecht-heading-2"],[1,"utrecht-heading-3"],[1,"utrecht-paragraph",{"lead":[4]}],[1,"utrecht-form-field-description",{"status":[513]}]]]]'), t);
};
(function() {
  if (typeof window < "u" && window.Reflect !== void 0 && window.customElements !== void 0) {
    var r = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(r, [], this.constructor);
    }, HTMLElement.prototype = r.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, r);
  }
})();
const fh = ".nl-number-badge{align-items:center;background-color:var(--nl-number-badge-background-color);border-color:var(--nl-number-badge-border-color);border-radius:var(--nl-number-badge-border-radius);border-style:solid;border-width:var(--nl-number-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-number-badge-color);display:inline-flex;font-family:var(--nl-number-badge-font-family);font-size:max(var(--nl-number-badge-font-size),1rem);font-style:normal;font-variant-numeric:lining-nums tabular-nums;font-weight:var(--nl-number-badge-font-weight);justify-content:center;line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-number-badge-min-block-size);min-inline-size:var(--nl-number-badge-min-inline-size);padding-block:var(--nl-number-badge-padding-block);padding-inline:var(--nl-number-badge-padding-inline);white-space:nowrap}.nl-number-badge__hidden-label{block-size:1px!important;border:0!important;clip:rect(1px,1px,1px,1px)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;inline-size:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important}.nl-number-badge__visible-label{display:inline}@media screen and (forced-colors:active){.nl-number-badge{border-color:currentColor!important;border-width:max(var(--nl-number-badge-min-border-width, 0),1px)!important;color:currentColor!important}}", Ug = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-accessible"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
</svg>`, qg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 14l-4 -4l4 -4" />
  <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
</svg>`, Jg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 14l4 -4l-4 -4" />
  <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
</svg>`, Gg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-x"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>`, Jr = globalThis, Hi = Jr.ShadowRoot && (Jr.ShadyCSS === void 0 || Jr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Fi = Symbol(), $a = /* @__PURE__ */ new WeakMap();
let mh = class {
  constructor(r, t, e) {
    if (this._$cssResult$ = !0, e !== Fi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = r, this.t = t;
  }
  get styleSheet() {
    let r = this.o;
    const t = this.t;
    if (Hi && r === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (r = $a.get(t)), r === void 0 && ((this.o = r = new CSSStyleSheet()).replaceSync(this.cssText), e && $a.set(t, r));
    }
    return r;
  }
  toString() {
    return this.cssText;
  }
};
const Wi = (r) => new mh(typeof r == "string" ? r : r + "", void 0, Fi), Ce = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce(((n, o, i) => n + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[i + 1]), r[0]);
  return new mh(e, r, Fi);
}, Kg = (r, t) => {
  if (Hi) r.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const n = document.createElement("style"), o = Jr.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ma = Hi ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Wi(e);
})(r) : r, { is: Zg, defineProperty: Yg, getOwnPropertyDescriptor: Xg, getOwnPropertyNames: Qg, getOwnPropertySymbols: tb, getPrototypeOf: eb } = Object, qn = globalThis, Sa = qn.trustedTypes, rb = Sa ? Sa.emptyScript : "", nb = qn.reactiveElementPolyfillSupport, lr = (r, t) => r, xn = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? rb : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, Ui = (r, t) => !Zg(r, t), Ca = { attribute: !0, type: String, converter: xn, reflect: !1, useDefault: !1, hasChanged: Ui };
Symbol.metadata ??= Symbol("metadata"), qn.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let Pe = class extends HTMLElement {
  static addInitializer(r) {
    this._$Ei(), (this.l ??= []).push(r);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(r, t = Ca) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(r) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(r, t), !t.noAccessor) {
      const e = Symbol(), n = this.getPropertyDescriptor(r, e, t);
      n !== void 0 && Yg(this.prototype, r, n);
    }
  }
  static getPropertyDescriptor(r, t, e) {
    const { get: n, set: o } = Xg(this.prototype, r) ?? { get() {
      return this[t];
    }, set(i) {
      this[t] = i;
    } };
    return { get: n, set(i) {
      const s = n?.call(this);
      o?.call(this, i), this.requestUpdate(r, s, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(r) {
    return this.elementProperties.get(r) ?? Ca;
  }
  static _$Ei() {
    if (this.hasOwnProperty(lr("elementProperties"))) return;
    const r = eb(this);
    r.finalize(), r.l !== void 0 && (this.l = [...r.l]), this.elementProperties = new Map(r.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(lr("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lr("properties"))) {
      const t = this.properties, e = [...Qg(t), ...tb(t)];
      for (const n of e) this.createProperty(n, t[n]);
    }
    const r = this[Symbol.metadata];
    if (r !== null) {
      const t = litPropertyMetadata.get(r);
      if (t !== void 0) for (const [e, n] of t) this.elementProperties.set(e, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, e] of this.elementProperties) {
      const n = this._$Eu(t, e);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(r) {
    const t = [];
    if (Array.isArray(r)) {
      const e = new Set(r.flat(1 / 0).reverse());
      for (const n of e) t.unshift(Ma(n));
    } else r !== void 0 && t.push(Ma(r));
    return t;
  }
  static _$Eu(r, t) {
    const e = t.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof r == "string" ? r.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((r) => this.enableUpdating = r)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((r) => r(this)));
  }
  addController(r) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(r), this.renderRoot !== void 0 && this.isConnected && r.hostConnected?.();
  }
  removeController(r) {
    this._$EO?.delete(r);
  }
  _$E_() {
    const r = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const e of t.keys()) this.hasOwnProperty(e) && (r.set(e, this[e]), delete this[e]);
    r.size > 0 && (this._$Ep = r);
  }
  createRenderRoot() {
    const r = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Kg(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((r) => r.hostConnected?.()));
  }
  enableUpdating(r) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((r) => r.hostDisconnected?.()));
  }
  attributeChangedCallback(r, t, e) {
    this._$AK(r, e);
  }
  _$ET(r, t) {
    const e = this.constructor.elementProperties.get(r), n = this.constructor._$Eu(r, e);
    if (n !== void 0 && e.reflect === !0) {
      const o = (e.converter?.toAttribute !== void 0 ? e.converter : xn).toAttribute(t, e.type);
      this._$Em = r, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(r, t) {
    const e = this.constructor, n = e._$Eh.get(r);
    if (n !== void 0 && this._$Em !== n) {
      const o = e.getPropertyOptions(n), i = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : xn;
      this._$Em = n;
      const s = i.fromAttribute(t, o.type);
      this[n] = s ?? this._$Ej?.get(n) ?? s, this._$Em = null;
    }
  }
  requestUpdate(r, t, e) {
    if (r !== void 0) {
      const n = this.constructor, o = this[r];
      if (e ??= n.getPropertyOptions(r), !((e.hasChanged ?? Ui)(o, t) || e.useDefault && e.reflect && o === this._$Ej?.get(r) && !this.hasAttribute(n._$Eu(r, e)))) return;
      this.C(r, t, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(r, t, { useDefault: e, reflect: n, wrapped: o }, i) {
    e && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(r) && (this._$Ej.set(r, i ?? t ?? this[r]), o !== !0 || i !== void 0) || (this._$AL.has(r) || (this.hasUpdated || e || (t = void 0), this._$AL.set(r, t)), n === !0 && this._$Em !== r && (this._$Eq ??= /* @__PURE__ */ new Set()).add(r));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const r = this.scheduleUpdate();
    return r != null && await r, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const e = this.constructor.elementProperties;
      if (e.size > 0) for (const [n, o] of e) {
        const { wrapped: i } = o, s = this[n];
        i !== !0 || this._$AL.has(n) || s === void 0 || this.C(n, void 0, o, s);
      }
    }
    let r = !1;
    const t = this._$AL;
    try {
      r = this.shouldUpdate(t), r ? (this.willUpdate(t), this._$EO?.forEach(((e) => e.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (e) {
      throw r = !1, this._$EM(), e;
    }
    r && this._$AE(t);
  }
  willUpdate(r) {
  }
  _$AE(r) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(r)), this.updated(r);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(r) {
    return !0;
  }
  update(r) {
    this._$Eq &&= this._$Eq.forEach(((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(r) {
  }
  firstUpdated(r) {
  }
};
Pe.elementStyles = [], Pe.shadowRootOptions = { mode: "open" }, Pe[lr("elementProperties")] = /* @__PURE__ */ new Map(), Pe[lr("finalized")] = /* @__PURE__ */ new Map(), nb?.({ ReactiveElement: Pe }), (qn.reactiveElementVersions ??= []).push("2.1.1");
const qi = globalThis, $n = qi.trustedTypes, Ta = $n ? $n.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, gh = "$lit$", Vt = `lit$${Math.random().toFixed(9).slice(2)}$`, bh = "?" + Vt, ob = `<${bh}>`, xe = document, wr = () => xe.createComment(""), xr = (r) => r === null || typeof r != "object" && typeof r != "function", Ji = Array.isArray, ib = (r) => Ji(r) || typeof r?.[Symbol.iterator] == "function", yo = `[ 	
\f\r]`, Qe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Oa = /-->/g, Aa = />/g, ae = RegExp(`>|${yo}(?:([^\\s"'>=/]+)(${yo}*=${yo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ea = /'/g, Na = /"/g, yh = /^(?:script|style|textarea|title)$/i, sb = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ot = sb(1), te = Symbol.for("lit-noChange"), j = Symbol.for("lit-nothing"), Ia = /* @__PURE__ */ new WeakMap(), ue = xe.createTreeWalker(xe, 129);
function vh(r, t) {
  if (!Ji(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ta !== void 0 ? Ta.createHTML(t) : t;
}
const ab = (r, t) => {
  const e = r.length - 1, n = [];
  let o, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", s = Qe;
  for (let a = 0; a < e; a++) {
    const l = r[a];
    let c, h, d = -1, u = 0;
    for (; u < l.length && (s.lastIndex = u, h = s.exec(l), h !== null); ) u = s.lastIndex, s === Qe ? h[1] === "!--" ? s = Oa : h[1] !== void 0 ? s = Aa : h[2] !== void 0 ? (yh.test(h[2]) && (o = RegExp("</" + h[2], "g")), s = ae) : h[3] !== void 0 && (s = ae) : s === ae ? h[0] === ">" ? (s = o ?? Qe, d = -1) : h[1] === void 0 ? d = -2 : (d = s.lastIndex - h[2].length, c = h[1], s = h[3] === void 0 ? ae : h[3] === '"' ? Na : Ea) : s === Na || s === Ea ? s = ae : s === Oa || s === Aa ? s = Qe : (s = ae, o = void 0);
    const p = s === ae && r[a + 1].startsWith("/>") ? " " : "";
    i += s === Qe ? l + ob : d >= 0 ? (n.push(c), l.slice(0, d) + gh + l.slice(d) + Vt + p) : l + Vt + (d === -2 ? a : p);
  }
  return [vh(r, i + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class $r {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let i = 0, s = 0;
    const a = t.length - 1, l = this.parts, [c, h] = ab(t, e);
    if (this.el = $r.createElement(c, n), ue.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = ue.nextNode()) !== null && l.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(gh)) {
          const u = h[s++], p = o.getAttribute(d).split(Vt), f = /([.?@])?(.*)/.exec(u);
          l.push({ type: 1, index: i, name: f[2], strings: p, ctor: f[1] === "." ? cb : f[1] === "?" ? hb : f[1] === "@" ? db : Jn }), o.removeAttribute(d);
        } else d.startsWith(Vt) && (l.push({ type: 6, index: i }), o.removeAttribute(d));
        if (yh.test(o.tagName)) {
          const d = o.textContent.split(Vt), u = d.length - 1;
          if (u > 0) {
            o.textContent = $n ? $n.emptyScript : "";
            for (let p = 0; p < u; p++) o.append(d[p], wr()), ue.nextNode(), l.push({ type: 2, index: ++i });
            o.append(d[u], wr());
          }
        }
      } else if (o.nodeType === 8) if (o.data === bh) l.push({ type: 2, index: i });
      else {
        let d = -1;
        for (; (d = o.data.indexOf(Vt, d + 1)) !== -1; ) l.push({ type: 7, index: i }), d += Vt.length - 1;
      }
      i++;
    }
  }
  static createElement(t, e) {
    const n = xe.createElement("template");
    return n.innerHTML = t, n;
  }
}
function qe(r, t, e = r, n) {
  if (t === te) return t;
  let o = n !== void 0 ? e._$Co?.[n] : e._$Cl;
  const i = xr(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== i && (o?._$AO?.(!1), i === void 0 ? o = void 0 : (o = new i(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ??= [])[n] = o : e._$Cl = o), o !== void 0 && (t = qe(r, o._$AS(r, t.values), o, n)), t;
}
class lb {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, o = (t?.creationScope ?? xe).importNode(e, !0);
    ue.currentNode = o;
    let i = ue.nextNode(), s = 0, a = 0, l = n[0];
    for (; l !== void 0; ) {
      if (s === l.index) {
        let c;
        l.type === 2 ? c = new Er(i, i.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(i, l.name, l.strings, this, t) : l.type === 6 && (c = new ub(i, this, t)), this._$AV.push(c), l = n[++a];
      }
      s !== l?.index && (i = ue.nextNode(), s++);
    }
    return ue.currentNode = xe, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class Er {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = j, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = qe(this, t, e), xr(t) ? t === j || t == null || t === "" ? (this._$AH !== j && this._$AR(), this._$AH = j) : t !== this._$AH && t !== te && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ib(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== j && xr(this._$AH) ? this._$AA.nextSibling.data = t : this.T(xe.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = $r.createElement(vh(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const i = new lb(o, this), s = i.u(this.options);
      i.p(e), this.T(s), this._$AH = i;
    }
  }
  _$AC(t) {
    let e = Ia.get(t.strings);
    return e === void 0 && Ia.set(t.strings, e = new $r(t)), e;
  }
  k(t) {
    Ji(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const i of t) o === e.length ? e.push(n = new Er(this.O(wr()), this.O(wr()), this, this.options)) : n = e[o], n._$AI(i), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Jn {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, i) {
    this.type = 1, this._$AH = j, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = j;
  }
  _$AI(t, e = this, n, o) {
    const i = this.strings;
    let s = !1;
    if (i === void 0) t = qe(this, t, e, 0), s = !xr(t) || t !== this._$AH && t !== te, s && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = i[0], l = 0; l < i.length - 1; l++) c = qe(this, a[n + l], e, l), c === te && (c = this._$AH[l]), s ||= !xr(c) || c !== this._$AH[l], c === j ? t = j : t !== j && (t += (c ?? "") + i[l + 1]), this._$AH[l] = c;
    }
    s && !o && this.j(t);
  }
  j(t) {
    t === j ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class cb extends Jn {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === j ? void 0 : t;
  }
}
class hb extends Jn {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== j);
  }
}
class db extends Jn {
  constructor(t, e, n, o, i) {
    super(t, e, n, o, i), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = qe(this, t, e, 0) ?? j) === te) return;
    const n = this._$AH, o = t === j && n !== j || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, i = t !== j && (n === j || o);
    o && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ub {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    qe(this, t);
  }
}
const pb = qi.litHtmlPolyfillSupport;
pb?.($r, Er), (qi.litHtmlVersions ??= []).push("3.3.1");
const fb = (r, t, e) => {
  const n = e?.renderBefore ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const i = e?.renderBefore ?? null;
    n._$litPart$ = o = new Er(t.insertBefore(wr(), i), i, void 0, e ?? {});
  }
  return o._$AI(r), o;
}, Gi = globalThis;
let gt = class extends Pe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const r = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= r.firstChild, r;
  }
  update(r) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(r), this._$Do = fb(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return te;
  }
};
gt._$litElement$ = !0, gt.finalized = !0, Gi.litElementHydrateSupport?.({ LitElement: gt });
const mb = Gi.litElementPolyfillSupport;
mb?.({ LitElement: gt });
(Gi.litElementVersions ??= []).push("4.2.1");
const se = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(r, t);
  })) : customElements.define(r, t);
}, gb = { attribute: !0, type: String, converter: xn, reflect: !1, hasChanged: Ui }, bb = (r = gb, t, e) => {
  const { kind: n, metadata: o } = e;
  let i = globalThis.litPropertyMetadata.get(o);
  if (i === void 0 && globalThis.litPropertyMetadata.set(o, i = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), i.set(e.name, r), n === "accessor") {
    const { name: s } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(s, l, r);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, r, a), a;
    } };
  }
  if (n === "setter") {
    const { name: s } = e;
    return function(a) {
      const l = this[s];
      t.call(this, a), this.requestUpdate(s, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function L(r) {
  return (t, e) => typeof e == "object" ? bb(r, t, e) : ((n, o, i) => {
    const s = o.hasOwnProperty(i);
    return o.constructor.createProperty(i, n), s ? Object.getOwnPropertyDescriptor(o, i) : void 0;
  })(r, t, e);
}
function kh(r) {
  return L({ ...r, state: !0, attribute: !1 });
}
const wh = (r, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(r, t, e), e);
let yb;
function vb(r) {
  return (t, e) => wh(t, e, { get() {
    return (this.renderRoot ?? (yb ??= document.createDocumentFragment())).querySelectorAll(r);
  } });
}
function kb(r) {
  return (t, e) => {
    const { slot: n, selector: o } = r ?? {}, i = "slot" + (n ? `[name=${n}]` : ":not([name])");
    return wh(t, e, { get() {
      const s = this.renderRoot?.querySelector(i), a = s?.assignedElements(r) ?? [];
      return o === void 0 ? a : a.filter(((l) => l.matches(o)));
    } });
  };
}
const wb = (r) => r.strings === void 0, Ki = { ATTRIBUTE: 1, CHILD: 2 }, Gn = (r) => (...t) => ({ _$litDirective$: r, values: t });
class Zi {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, n) {
    this._$Ct = t, this._$AM = e, this._$Ci = n;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
const cr = (r, t) => {
  const e = r._$AN;
  if (e === void 0) return !1;
  for (const n of e) n._$AO?.(t, !1), cr(n, t);
  return !0;
}, Mn = (r) => {
  let t, e;
  do {
    if ((t = r._$AM) === void 0) break;
    e = t._$AN, e.delete(r), r = t;
  } while (e?.size === 0);
}, xh = (r) => {
  for (let t; t = r._$AM; r = t) {
    let e = t._$AN;
    if (e === void 0) t._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(r)) break;
    e.add(r), Mb(t);
  }
};
function xb(r) {
  this._$AN !== void 0 ? (Mn(this), this._$AM = r, xh(this)) : this._$AM = r;
}
function $b(r, t = !1, e = 0) {
  const n = this._$AH, o = this._$AN;
  if (o !== void 0 && o.size !== 0) if (t) if (Array.isArray(n)) for (let i = e; i < n.length; i++) cr(n[i], !1), Mn(n[i]);
  else n != null && (cr(n, !1), Mn(n));
  else cr(this, r);
}
const Mb = (r) => {
  r.type == Ki.CHILD && (r._$AP ??= $b, r._$AQ ??= xb);
};
class Sb extends Zi {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, e, n) {
    super._$AT(t, e, n), xh(this), this.isConnected = t._$AU;
  }
  _$AO(t, e = !0) {
    t !== this.isConnected && (this.isConnected = t, t ? this.reconnected?.() : this.disconnected?.()), e && (cr(this, t), Mn(this));
  }
  setValue(t) {
    if (wb(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const e = [...this._$Ct._$AH];
      e[this._$Ci] = t, this._$Ct._$AI(e, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const Go = () => new Cb();
let Cb = class {
};
const vo = /* @__PURE__ */ new WeakMap(), Yi = Gn(class extends Sb {
  render(r) {
    return j;
  }
  update(r, [t]) {
    const e = t !== this.G;
    return e && this.G !== void 0 && this.rt(void 0), (e || this.lt !== this.ct) && (this.G = t, this.ht = r.options?.host, this.rt(this.ct = r.element)), j;
  }
  rt(r) {
    if (this.isConnected || (r = void 0), typeof this.G == "function") {
      const t = this.ht ?? globalThis;
      let e = vo.get(t);
      e === void 0 && (e = /* @__PURE__ */ new WeakMap(), vo.set(t, e)), e.get(this.G) !== void 0 && this.G.call(this.ht, void 0), e.set(this.G, r), r !== void 0 && this.G.call(this.ht, r);
    } else this.G.value = r;
  }
  get lt() {
    return typeof this.G == "function" ? vo.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
let Sn = class extends Zi {
  constructor(r) {
    if (super(r), this.it = j, r.type !== Ki.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === j || r == null) return this._t = void 0, this.it = r;
    if (r === te) return r;
    if (typeof r != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.it) return this._t;
    this.it = r;
    const t = [r];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
};
Sn.directiveName = "unsafeHTML", Sn.resultType = 1;
const Tb = Gn(Sn);
class Ko extends Sn {
}
Ko.directiveName = "unsafeSVG", Ko.resultType = 2;
const bt = Gn(Ko), Ob = Ce`
  .clippy-shortcuts__dialog {
    background-color: #fff;
    border: 1px solid var(--basis-color-action-1-color-active);
    color: var(--basis-color-text);
    padding-block: var(--basis-space-block-xl);
    padding-inline: var(--basis-space-inline-xl);
    inline-size: 100%;
    max-inline-size: 600px;
  }

  .clippy-shortcuts__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      margin-block: var(--basis-space-inline-sm);
    }
  }

  .clippy-shortcuts__table {
    inline-size: 100%;
    border-collapse: collapse;

    & caption {
      text-align: start;
      font-size: 1.5em;
      padding-block: var(--basis-space-block-xl);
    }
    & thead {
      th {
        text-align: start;
        border-block-end: 2px solid var(--basis-color-action-1-color-active);
      }
    }

    & td,
    th {
      padding-block: var(--basis-space-block-sm);
      padding-inline: var(--basis-space-inline-md);
    }

    kbd {
      display: inline-block;
      border: 1px solid var(--basis-color-action-1-color-active);
      padding-block: var(--basis-space-block-sm);
      padding-inline: var(--basis-space-inline-sm);
      border-radius: 0.5em;
      background-color: var(--basis-color-default-bg-default);
    }
  }
`;
var Ab = Object.defineProperty, Eb = Object.getOwnPropertyDescriptor, $h = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Eb(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && Ab(t, e, o), o;
};
let Cn = class extends gt {
  close() {
    this.dialogRef?.value?.close();
  }
  render() {
    return ot`
      <dialog
        id="clippy-shortcuts"
        class="clippy-shortcuts__dialog"
        aria-labelledby="clippy-shortcuts-title"
        ${Yi(this.dialogRef)}
      >
        <div class="clippy-shortcuts__header">
          <h1 id="clippy-shortcuts-title">Sneltoetsen</h1>
          <clippy-toolbar-button @click=${() => this.close()} aria-label="Sluit sneltoetsen dialog">
            ${bt(Gg)}
          </clippy-toolbar-button>
        </div>
        <table class="clippy-shortcuts__table">
          <caption>
            Structuur
          </caption>
          <thead>
            <tr>
              <th>Command</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vet</td>
              <td><kbd>Control</kbd> + <kbd>B</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>B</kbd></td>
            </tr>
            <tr>
              <td>Cursief</td>
              <td><kbd>Control</kbd> + <kbd>I</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>I</kbd></td>
            </tr>
            <tr>
              <td>Onderstrepen</td>
              <td><kbd>Control</kbd> + <kbd>U</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>U</kbd></td>
            </tr>
            <tr>
              <td>Doorstrepen</td>
              <td><kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
            </tr>
          </tbody>
        </table>

        <table class="clippy-shortcuts__table">
          <caption>
            Tekstopmaak
          </caption>
          <thead>
            <tr>
              <th>Commando</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paragraaf</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 1</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 2</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 3</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 4</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 5</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd></td>
            </tr>
            <tr>
              <td>Kopniveau 6</td>
              <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd></td>
            </tr>
            <tr>
              <td>Geordende lijst</td>
              <td><kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd></td>
            </tr>
            <tr>
              <td>Ongeordende lijst</td>
              <td><kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd></td>
              <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd></td>
            </tr>
          </tbody>
        </table>
        <table class="clippy-shortcuts__table">
          <caption>
            Toegankelijkheid
          </caption>
          <thead>
          <tr>
            <th>Commando</th>
            <th>Windows/Linux</th>
            <th>macOS</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Toegankelijkheidsfouten</td>
            <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd></td>
            <td><kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>T</kbd></td>
          </tr>
          <tr>
            <td>Focus toolbar</td>
            <td><kbd>Alt</kbd> + <kbd>F10</kbd></td>
            <td>( <kbd>Fn</kbd> ) + <kbd>Option</kbd> + <kbd>F10</kbd></td>
          </tr>
      </dialog>
    `;
  }
};
Cn.styles = [Ob];
$h([
  L({ attribute: !1 })
], Cn.prototype, "dialogRef", 2);
Cn = $h([
  se("clippy-shortcuts")
], Cn);
const Nb = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-bold"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
</svg>`, Ib = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-italic"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 5l6 0" />
  <path d="M7 19l6 0" />
  <path d="M14 5l-4 14" />
</svg>`, Db = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-keyboard"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
  <path d="M6 10l0 .01" />
  <path d="M10 10l0 .01" />
  <path d="M14 10l0 .01" />
  <path d="M18 10l0 .01" />
  <path d="M6 14l0 .01" />
  <path d="M18 14l0 .01" />
  <path d="M10 14l4 .01" />
</svg>`, Rb = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-list-numbers"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
</svg>`, zb = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-list"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 6l11 0" />
  <path d="M9 12l11 0" />
  <path d="M9 18l11 0" />
  <path d="M5 6l0 .01" />
  <path d="M5 12l0 .01" />
  <path d="M5 18l0 .01" />
</svg>`, Pb = Gn(class extends Zi {
  constructor(r) {
    if (super(r), r.type !== Ki.ATTRIBUTE || r.name !== "class" || r.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return " " + Object.keys(r).filter(((t) => r[t])).join(" ") + " ";
  }
  update(r, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), r.strings !== void 0 && (this.nt = new Set(r.strings.join(" ").split(/\s/).filter(((n) => n !== ""))));
      for (const n in t) t[n] && !this.nt?.has(n) && this.st.add(n);
      return this.render(t);
    }
    const e = r.element.classList;
    for (const n of this.st) n in t || (e.remove(n), this.st.delete(n));
    for (const n in t) {
      const o = !!t[n];
      o === this.st.has(n) || this.nt?.has(n) || (o ? (e.add(n), this.st.add(n)) : (e.remove(n), this.st.delete(n)));
    }
    return te;
  }
}), Mh = Ce`
  :host {
    display: inline-block;
  }
  .clippy-toolbar-button {
    position: relative;
    background-color: #fff;
    border: 1px solid var(--basis-color-action-1-color-active);
    border-radius: 3px;
    color: var(--basis-color-action-1-color-active);
    display: inline-flex;
    padding-block: var(--basis-space-inline-sm);
    padding-inline: var(--basis-space-inline-md);
    block-size: 100%;
  }

  .clippy-toolbar-button:disabled {
    color: var(--basis-color-disabled-color-active);
  }

  ::slotted(svg) {
    inline-size: 16px;
  }
  .clippy-toolbar-button--pressed {
    background-color: var(--basis-color-action-1-bg-default);
    border-color: var(--ma-color-grijs-6);
  }
`;
var jb = Object.defineProperty, Lb = Object.getOwnPropertyDescriptor, Nr = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Lb(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && jb(t, e, o), o;
};
let $e = class extends gt {
  constructor() {
    super(...arguments), this.label = "", this.pressed = !1, this.disabled = !1;
  }
  render() {
    return ot`
      <button
        type="button"
        aria-label=${this.label}
        aria-pressed=${this.pressed}
        ?disabled=${this.disabled}
        class=${Pb({
      "clippy-toolbar-button": !0,
      "clippy-toolbar-button--pressed": this.pressed
    })}
        @click=${this.onClick}
      >
        <slot></slot>
      </button>
    `;
  }
};
$e.styles = [Mh];
Nr([
  L({ type: String })
], $e.prototype, "label", 2);
Nr([
  L({ type: Boolean })
], $e.prototype, "pressed", 2);
Nr([
  L({ type: Boolean })
], $e.prototype, "disabled", 2);
Nr([
  L({ type: Function })
], $e.prototype, "onClick", 2);
$e = Nr([
  se("clippy-toolbar-button")
], $e);
function* Xi(r, t) {
  if (r !== void 0) {
    let e = 0;
    for (const n of r) yield t(n, e++);
  }
}
const Kn = "tiptap";
var _b = Object.defineProperty, Bb = Object.getOwnPropertyDescriptor, Sh = (r) => {
  throw TypeError(r);
}, Ke = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Bb(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && _b(t, e, o), o;
}, Ch = (r, t, e) => t.has(r) || Sh("Cannot " + e), ko = (r, t, e) => (Ch(r, t, "read from private field"), e ? e.call(r) : t.get(r)), wo = (r, t, e) => t.has(r) ? Sh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), Da = (r, t, e) => (Ch(r, t, "access private method"), e), Gr, Zo, Yo, Kr;
const Vb = (r) => r.extensionManager.extensions.find((t) => t.name === "heading")?.options.levels;
let ee = class extends gt {
  constructor() {
    super(...arguments), wo(this, Gr), this.disabled = !1, this.readOnly = !1, this.onSelect = (r) => r, wo(this, Yo, (r) => {
      const { value: t } = r.target;
      if (!t || !this.editor) return;
      const e = this.editor.chain().focus();
      ({
        h1: () => e.toggleHeading({ level: 1 }),
        h2: () => e.toggleHeading({ level: 2 }),
        h3: () => e.toggleHeading({ level: 3 }),
        h4: () => e.toggleHeading({ level: 4 }),
        h5: () => e.toggleHeading({ level: 5 }),
        h6: () => e.toggleHeading({ level: 6 }),
        paragraph: () => e.setParagraph()
      })[t]().run();
    }), wo(this, Kr, () => {
      this.requestUpdate();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.editor?.on("transaction", ko(this, Kr));
  }
  disconnectedCallback() {
    this.editor?.off("transaction", ko(this, Kr)), super.disconnectedCallback();
  }
  get options() {
    return this.editor ? [
      ...Vb(this.editor).map((r) => ({
        active: Da(this, Gr, Zo).call(this, "heading", { level: r }),
        label: `Kopniveau ${r}`,
        value: `h${r}`
      })),
      {
        active: Da(this, Gr, Zo).call(this, "paragraph"),
        label: "Paragraaf",
        value: "paragraph"
      }
    ] : [];
  }
  render() {
    return ot`
      <select class="clippy-toolbar-button" @change=${ko(this, Yo)}>
        ${Xi(
      this.options,
      (r) => ot`<option ?selected=${r.active} value=${r.value}>${r.label}</option>`
    )}
      </select>
    `;
  }
};
Gr = /* @__PURE__ */ new WeakSet();
Zo = function(r, t) {
  return this.editor?.isActive(r, t) ?? !1;
};
Yo = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakMap();
ee.styles = [Mh];
Ke([
  L({ type: Boolean })
], ee.prototype, "disabled", 2);
Ke([
  L({ type: Boolean })
], ee.prototype, "readOnly", 2);
Ke([
  L({ type: Function })
], ee.prototype, "onSelect", 2);
Ke([
  Je({ context: Kn, subscribe: !0 }),
  L({ attribute: !1 })
], ee.prototype, "editor", 2);
Ke([
  kh()
], ee.prototype, "options", 1);
ee = Ke([
  se("clippy-format-select")
], ee);
const Hb = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-underline"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
  <path d="M5 19h14" />
</svg>`, Zn = "validations-context", kt = {
  FOCUS_NODE: "FOCUS_NODE",
  FOCUS_TOOLBAR: "FOCUS_TOOLBAR",
  OPEN_VALIDATIONS_DIALOG: "OPEN_VALIDATIONS_DIALOG"
}, Fb = Ce`
  .clippy-toolbar__wrapper {
    display: flex;
    gap: var(--basis-space-inline-sm);
    background-color: var(--ma-color-paars-1);
    border: 1px solid var(--ma-color-paars-8);
    border-radius: 3px;
    padding-block: var(--basis-space-inline-md);
    padding-inline: var(--basis-space-inline-md);
  }

  .clippy-toolbar__divider {
    inline-size: 2px;
    margin-inline: var(--basis-space-inline-sm);
    background: var(--ma-color-paars-8);
  }

  .clippy-screen-reader-text {
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }

  .nl-number-badge--clippy {
    position: absolute;
    inset-block-start: calc(var(--nl-number-badge-min-block-size) * -0.3);
    inset-inline-end: calc(var(--nl-number-badge-min-inline-size) * -0.3);
  }
`;
var Wb = Object.defineProperty, Ub = Object.getOwnPropertyDescriptor, Th = (r) => {
  throw TypeError(r);
}, Qi = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Ub(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && Wb(t, e, o), o;
}, qb = (r, t, e) => t.has(r) || Th("Cannot " + e), dt = (r, t, e) => (qb(r, t, "read from private field"), t.get(r)), Ee = (r, t, e) => t.has(r) ? Th("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), je, Zr, Yr, Xo, Xr, Qo;
const Pt = (r) => r.replace("<svg", '<svg aria-hidden="true"');
let Mr = class extends gt {
  constructor() {
    super(...arguments), Ee(this, je, Go()), Ee(this, Zr, Go()), Ee(this, Yr, () => {
      this.requestUpdate();
    }), Ee(this, Xo, () => {
      const { value: r } = dt(this, je);
      dt(this, je).value?.open ? r?.close() : r?.showModal();
    }), Ee(this, Xr, () => {
      const { value: r } = dt(this, Zr);
      r?.shadowRoot?.querySelector("button")?.focus();
    }), Ee(this, Qo, () => {
      globalThis.dispatchEvent(
        new CustomEvent(kt.OPEN_VALIDATIONS_DIALOG, {
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  connectedCallback() {
    globalThis.addEventListener(kt.FOCUS_TOOLBAR, dt(this, Xr)), super.connectedCallback();
  }
  firstUpdated() {
    this.editor?.on("selectionUpdate", dt(this, Yr));
  }
  disconnectedCallback() {
    this.editor?.off("selectionUpdate", dt(this, Yr)), globalThis.removeEventListener(kt.FOCUS_TOOLBAR, dt(this, Xr)), super.disconnectedCallback();
  }
  render() {
    const { size: r = 0 } = this.validationsContext || {};
    return ot`
      <div class="clippy-toolbar__wrapper" aria-label="Werkbalk tekstbewerker">
        <clippy-format-select></clippy-format-select>
        <clippy-toolbar-button
          label="Bold"
          .pressed=${this.editor?.isActive("bold") ?? !1}
          @click=${() => this.editor?.chain().focus().toggleBold().run()}
          ${Yi(dt(this, Zr))}
        >
          ${bt(Pt(Nb))}
        </clippy-toolbar-button>
        <clippy-toolbar-button
          label="Italic"
          .pressed=${this.editor?.isActive("italic") ?? !1}
          @click=${() => this.editor?.chain().focus().toggleItalic().run()}
        >
          ${bt(Pt(Ib))}
        </clippy-toolbar-button>
        <clippy-toolbar-button
          label="Underline"
          .pressed=${this.editor?.isActive("underline") ?? !1}
          @click=${() => this.editor?.chain().focus().toggleUnderline().run()}
        >
          ${bt(Pt(Hb))}
        </clippy-toolbar-button>
        <div class="clippy-toolbar__divider"></div>
        <clippy-toolbar-button
          label="Undo"
          ?disabled=${!(this.editor?.can().undo() ?? !1)}
          @click=${() => this.editor?.commands.undo()}
        >
          ${bt(Pt(qg))}
        </clippy-toolbar-button>
        <clippy-toolbar-button
          label="Redo"
          ?disabled=${!(this.editor?.can().redo() ?? !1)}
          @click=${() => this.editor?.commands.redo()}
          >${bt(Pt(Jg))}
        </clippy-toolbar-button>
        <div class="clippy-toolbar__divider"></div>
        <clippy-toolbar-button
          label="Ordered list"
          .pressed=${this.editor?.isActive("orderedList") ?? !1}
          @click=${() => {
      this.editor?.chain().focus().toggleOrderedList().run();
    }}
        >
          ${bt(Pt(Rb))}
        </clippy-toolbar-button>
        <clippy-toolbar-button
          label="Bullet list"
          .pressed=${this.editor?.isActive("bulletList") ?? !1}
          @click=${() => this.editor?.chain().focus().toggleBulletList().run()}
        >
          ${bt(Pt(zb))}
        </clippy-toolbar-button>
        <div class="clippy-toolbar__divider"></div>
        <clippy-toolbar-button
          label="Keyboard shortcuts"
          .pressed=${dt(this, je).value?.open ?? !1}
          @click=${dt(this, Xo)}
        >
          ${bt(Pt(Db))}
        </clippy-toolbar-button>
        <clippy-toolbar-button
          class="clippy-dialog-toggle"
          @click=${dt(this, Qo)}
          aria-controls="dialog-content"
        >
          <span class="clippy-screen-reader-text">Toon toegankelijkheidsfouten</span>
          ${bt(Ug)}
          ${r > 0 ? ot`<data value=${r} class="nl-number-badge nl-number-badge--clippy">
                <span hidden aria-hidden="true" class="nl-number-badge__visible-label">${r}</span>
                <span class="nl-number-badge__hidden-label">${r} toegankelijkheidsmeldingen</span>
              </data>` : null}
        </clippy-toolbar-button>
      </div>
      <clippy-shortcuts .dialogRef=${dt(this, je)}></clippy-shortcuts>
      <div class="clippy-screen-reader-text" aria-live=${r > 0 ? "polite" : "off"}>
        Totaal ${r} gevonden toegankelijkheidsfouten.
      </div>
    `;
  }
};
je = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakMap();
Xo = /* @__PURE__ */ new WeakMap();
Xr = /* @__PURE__ */ new WeakMap();
Qo = /* @__PURE__ */ new WeakMap();
Mr.styles = [Fb, Wi(fh)];
Qi([
  Je({ context: Kn, subscribe: !0 }),
  L({ attribute: !1 })
], Mr.prototype, "editor", 2);
Qi([
  Je({ context: Zn, subscribe: !0 }),
  L({ attribute: !1 })
], Mr.prototype, "validationsContext", 2);
Mr = Qi([
  se("clippy-toolbar")
], Mr);
const Jb = Ce`
  :host {
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-end: 0;
    position: absolute;
    align-items: flex-end;
    display: flex;
    inline-size: 1rem;
  }

  .clippy-validations-gutter__list {
    list-style: none;
    padding-inline: 0;
    inline-size: 100%;
  }

  .clippy-validations-gutter__indicator {
    block-size: 30px;
    display: block;
    cursor: pointer;
    inline-size: 100%;
    inset-inline-end: 0;
    position: absolute;
    mask-repeat: repeat;
    transition: filter 0.5s 0s;

    &::before {
      content: '';
      display: block;
      inline-size: calc(1rem / 3);
      block-size: 100%;
      inset-block-start: 0;
      inset-inline-start: 0;
      background-color: var(--ma-color-neutral-8);
      border-radius: calc(1rem / 6);
      outline: 1px solid var(--ma-color-white);
      transition: all 0.2s 0s;
      mask-image: var(--clippy-background-texture-info);
      mask-repeat: repeat;
      mask-composite: subtract;
      mask-size: 10px;
    }
    &.clippy-validations-gutter__indicator--info::before {
      mask-position: -1px;
    }
    &.clippy-validations-gutter__indicator--warning::before {
      margin-inline-start: calc(1rem / 3);
      background-color: var(--ma-color-signal-warning-700);
      mask-image: var(--clippy-background-texture-warning);
    }
    &.clippy-validations-gutter__indicator--error::before {
      margin-inline-start: calc(1rem * 2 / 3);
      background-color: var(--ma-color-signal-rood-500);
      mask-image: var(--clippy-background-texture-error);
    }
  }
  .clippy-validations-gutter__indicator:hover::before {
    transition: all 0.1s 0s;
    margin-inline-start: 0;
    inline-size: 100%;
  }
`;
var Gb = Object.defineProperty, Kb = Object.getOwnPropertyDescriptor, Oh = (r) => {
  throw TypeError(r);
}, Ah = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Kb(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && Gb(t, e, o), o;
}, Zb = (r, t, e) => t.has(r) || Oh("Cannot " + e), Yb = (r, t, e) => t.has(r) ? Oh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), Xb = (r, t, e) => (Zb(r, t, "access private method"), e), ti, Eh;
let Tn = class extends gt {
  constructor() {
    super(...arguments), Yb(this, ti);
  }
  render() {
    return ot`
      <ol class="clippy-validations-gutter__list" role="list">
        ${Xi(
      this.validationsContext?.entries(),
      ([r, { boundingBox: t, severity: e }]) => t && ot`<li
              class="clippy-validations-gutter__indicator clippy-validations-gutter__indicator--${e}"
              style="inset-block-start: ${t.top}px; block-size: ${t.height}px"
              @click=${() => Xb(this, ti, Eh).call(this, r)}
            ></li>`
    )}
      </ol>
    `;
  }
};
ti = /* @__PURE__ */ new WeakSet();
Eh = function(r) {
  globalThis.dispatchEvent(
    new CustomEvent(kt.OPEN_VALIDATIONS_DIALOG, {
      bubbles: !0,
      composed: !0,
      detail: { key: r }
    })
  );
};
Tn.styles = [Jb];
Ah([
  Je({ context: Zn, subscribe: !0 }),
  L({ attribute: !1 })
], Tn.prototype, "validationsContext", 2);
Tn = Ah([
  se("clippy-validations-gutter")
], Tn);
const Ve = {
  DOCUMENT_MUST_HAVE_CORRECT_HEADING_ORDER: "document-must-have-correct-heading-order",
  DOCUMENT_MUST_HAVE_SEMANTIC_LISTS: "document-must-have-semantic-lists",
  DOCUMENT_MUST_HAVE_TOP_LEVEL_HEADING: "document-must-have-top-level-heading"
}, On = {
  HEADING_MUST_NOT_BE_EMPTY: "heading-must-not-be-empty",
  PARAGRAPH_MUST_NOT_BE_EMPTY: "paragraph-must-not-be-empty"
}, Sr = {
  ERROR: "error",
  INFO: "info",
  WARNING: "warning"
}, Qb = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
</svg>`, ty = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9v4" />
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
  <path d="M12 16h.01" />
</svg>`, ey = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
</svg>`, ry = Ce`
  .clippy-dialog__list-item {
    display: grid;
    position: relative;
    gap: var(--basis-space-inline-md);
    background-color: white;
    border: 1px solid var(--ma-color-neutral-8);
    padding-block: 1rem;
    padding-inline: 2rem 1rem;
    min-inline-size: 250px;
    border-radius: 1rem;

    &:focus {
      outline: oklch(from var(--ma-color-neutral-8) l c h) solid 1px;
    }
  }

  .clippy-dialog__list-item::after {
    content: '';
    position: absolute;
    display: block;
    inset-inline-start: 0;
    inset-block-start: 0;
    height: 100%;
    width: 1rem;
    border-radius: 1rem 0 0 1rem;
    background-color: var(--ma-color-neutral-8);
    mask-image: var(--clippy-background-texture-info);
    mask-repeat: repeat;
    mask-composite: subtract;
    mask-size: 10px;
  }

  .clippy-dialog__list-item--warning {
    border: 1px solid var(--ma-color-signal-warning-700);

    &:focus {
      outline-color: oklch(from var(--ma-color-signal-warning-700) l c h);
    }

    &::after {
      background-color: var(--ma-color-signal-warning-700);
      mask-image: var(--clippy-background-texture-warning);
    }
  }

  .clippy-dialog__list-item--error {
    border: 1px solid var(--ma-color-signal-rood-500);

    &:focus {
      outline-color: oklch(from var(--ma-color-signal-rood-500) l c h);
    }

    &::after {
      background-color: var(--ma-color-signal-rood-500);
      mask-image: var(--clippy-background-texture-error);
    }
  }

  .clippy-dialog__list-item-message {
    display: flex;
    justify-content: space-between;
    gap: var(--basis-space-inline-sm);
  }

  .clippy-dialog__list-item-tip {
  }

  .clippy-dialog__list-item-severity {
    color: var(--ma-color-neutral-8);
    &.clippy-dialog__list-item-severity--warning {
      color: var(--ma-color-signal-warning-700);
    }

    &.clippy-dialog__list-item-severity--error {
      color: var(--ma-color-signal-rood-500);
    }
  }

  .clippy-dialog__list-item-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--basis-space-inline-md);
  }
`;
var ny = Object.defineProperty, oy = Object.getOwnPropertyDescriptor, Nh = (r) => {
  throw TypeError(r);
}, Ze = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? oy(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && ny(t, e, o), o;
}, iy = (r, t, e) => t.has(r) || Nh("Cannot " + e), Ra = (r, t, e) => (iy(r, t, "read from private field"), e ? e.call(r) : t.get(r)), za = (r, t, e) => t.has(r) ? Nh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), ei, ri;
let re = class extends gt {
  constructor() {
    super(...arguments), this.key = "", this.pos = 0, za(this, ei, () => {
      this.dispatchEvent(
        new CustomEvent(kt.FOCUS_NODE, { bubbles: !0, composed: !0, detail: { pos: this.pos } })
      );
    }), za(this, ri, () => {
      switch (this.severity) {
        case "error":
          return ty;
        case "warning":
          return Qb;
        default:
          return ey;
      }
    });
  }
  render() {
    return ot`
      <li
        class="clippy-dialog__list-item clippy-dialog__list-item--${this.severity}"
        data-validation-key="${this.key}"
        tabindex="-1"
      >
        <div class="clippy-dialog__list-item-message">
          <strong>${this.description}</strong>
          <span class="clippy-dialog__list-item-severity clippy-dialog__list-item-severity--${this.severity}">
            ${bt(Ra(this, ri).call(this))}
          </span>
        </div>
        <slot name="tip-html" class="clippy-dialog__list-item-tip"></slot>
        ${this.href ? ot`
              <div class="clippy-dialog__list-item-link">
                <utrecht-link href="${this.href}" target="_blank"> Uitgebreide toelichting </utrecht-link>
              </div>
            ` : null}
        <div class="clippy-dialog__list-item-actions">
          <utrecht-button disabled="true">Negeren</utrecht-button>
          <utrecht-button appearance="secondary-action-button" @click=${Ra(this, ei)}>Aanpassen</utrecht-button>
        </div>
      </li>
    `;
  }
};
ei = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
re.styles = [ry];
Ze([
  L({ type: String })
], re.prototype, "key", 2);
Ze([
  L({ type: Number })
], re.prototype, "pos", 2);
Ze([
  L({ type: String })
], re.prototype, "severity", 2);
Ze([
  L({ type: String })
], re.prototype, "description", 2);
Ze([
  L({ type: String })
], re.prototype, "href", 2);
re = Ze([
  se("clippy-validation-list-item")
], re);
const sy = Ce`
  :host {
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-end: 0;
    position: absolute;
    align-items: flex-end;
    display: flex;
    inline-size: fit-content;
    pointer-events: none;
  }

  :host > * {
    pointer-events: auto;
  }

  .clippy-dialog__content {
    padding-inline-end: var(--basis-space-inline-xl);
    padding-block-end: calc(var(--basis-space-inline-xl) * 2);
    position: relative;
    margin-block: unset;
    margin-inline: unset;
    background: transparent;
    border: 0;
    overflow: auto;
    max-inline-size: 500px;
    max-block-size: calc(100% - var(--basis-space-inline-xl) * 2);
    &:focus-visible {
      outline: none;
    }
  }

  .clippy-dialog__list {
    display: grid;
    gap: 0.5rem;
    list-style: none;
    margin-block: 0;
    padding-block: 0.5rem;
    padding-inline: 0.5rem;
  }
`;
var ay = Object.defineProperty, ly = Object.getOwnPropertyDescriptor, Ih = (r) => {
  throw TypeError(r);
}, Ir = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? ly(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && ay(t, e, o), o;
}, cy = (r, t, e) => t.has(r) || Ih("Cannot " + e), Ot = (r, t, e) => (cy(r, t, "read from private field"), t.get(r)), Hr = (r, t, e) => t.has(r) ? Ih("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), Qr, tn, nr, en;
const hy = (r, t) => r[1].pos - t[1].pos, dy = {
  [On.HEADING_MUST_NOT_BE_EMPTY]: {
    description: "Koptekst mag niet leeg zijn",
    href: "https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/koppen/#voor-wie-zijn-toegankelijke-koppen-belangrijk"
  },
  [On.PARAGRAPH_MUST_NOT_BE_EMPTY]: {
    description: "Paragraaf mag niet leeg zijn"
  },
  [Ve.DOCUMENT_MUST_HAVE_CORRECT_HEADING_ORDER]: {
    description: "Document moet correcte kopvolgorde hebben",
    href: "https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/koppen/#kopniveaus",
    tip: (r) => {
      const { headingLevel: t, precedingHeadingLevel: e } = r || {};
      return typeof e != "number" || !t ? null : `<strong>Kopniveau ${t}</strong> mag niet direct volgen op een
        <strong>kopniveau ${e}</strong>. Gebruik een koptekst op niveau ${e + 1}
        of lager.`;
    }
  },
  [Ve.DOCUMENT_MUST_HAVE_SEMANTIC_LISTS]: {
    description: "Lijst moet een semantische lijst zijn",
    href: "https://nldesignsystem.nl/richtlijnen/content/tekstopmaak/opsommingen/#genummerde-en-ongenummerde-lijsten",
    tip: (r) => {
      const { prefix: t } = r || {};
      return t ? `Gebruik een semantische lijst in plaats van regels die beginnen met "<strong>${t}</strong>"` : null;
    }
  },
  [Ve.DOCUMENT_MUST_HAVE_TOP_LEVEL_HEADING]: {
    description: "Document moet starten met het juiste kopniveau",
    tip: (r) => {
      const { topHeadingLevel: t } = r || {};
      return `Verwachting: <strong>kopniveau ${t ?? 1}</strong>`;
    }
  }
};
let Me = class extends gt {
  constructor() {
    super(...arguments), this.open = !1, Hr(this, Qr, Go()), Hr(this, tn, (r) => {
      r.detail?.key ? (this.open || Ot(this, nr).call(this), this.validationListItems?.forEach((t) => {
        const e = t.shadowRoot?.querySelector(`[data-validation-key="${r.detail?.key}"]`);
        e instanceof HTMLElement && e.focus();
      })) : Ot(this, nr).call(this);
    }), Hr(this, nr, () => {
      const { value: r } = Ot(this, Qr);
      this.open ? r?.close() : r?.show(), this.open = !this.open;
    }), Hr(this, en, (r) => {
      const { pos: t = 0 } = r.detail || {};
      try {
        const { view: e } = this.editor || {}, n = e?.nodeDOM?.(t) ?? e?.domAtPos(t).node;
        n instanceof HTMLElement && n.scrollIntoView({ behavior: "smooth", block: "center" }), this.editor?.commands.focus(t), Ot(this, nr).call(this);
      } catch (e) {
        console.error("Cannot scroll to and focus node", e);
      }
    });
  }
  connectedCallback() {
    super.connectedCallback(), globalThis.addEventListener(kt.OPEN_VALIDATIONS_DIALOG, Ot(this, tn)), globalThis.addEventListener(kt.FOCUS_NODE, Ot(this, en));
  }
  disconnectedCallback() {
    globalThis.removeEventListener(kt.OPEN_VALIDATIONS_DIALOG, Ot(this, tn)), globalThis.removeEventListener(kt.FOCUS_NODE, Ot(this, en)), super.disconnectedCallback();
  }
  render() {
    const { size: r = 0 } = this.validationsContext || {}, t = [...this.validationsContext?.entries() ?? []].sort(hy);
    return ot`
      <dialog
        ${Yi(Ot(this, Qr))}
        id="dialog-content"
        class="clippy-dialog__content"
        aria-label="Toegankelijkheidsfouten"
      >
        <ul class="clippy-dialog__list" id="validation-list">
          ${r > 0 ? Xi(t, ([e, { pos: n, severity: o, tipPayload: i }]) => {
      const s = e.split("_")[0], { description: a, href: l, tip: c } = dy[s], h = c?.(i) ?? null;
      return ot`
                  <clippy-validation-list-item
                    .key=${e}
                    .pos=${n}
                    .severity=${o}
                    .description=${a}
                    .href=${l}
                  >
                    <div slot="tip-html">${Tb(h)}</div>
                  </clippy-validation-list-item>
                `;
    }) : ot`<li class="clippy-dialog__list-item">Geen toegankelijkheidsfouten gevonden.</li>`}
        </ul>
      </dialog>
    `;
  }
};
Qr = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
nr = /* @__PURE__ */ new WeakMap();
en = /* @__PURE__ */ new WeakMap();
Me.styles = [sy, Wi(fh)];
Ir([
  kh()
], Me.prototype, "open", 2);
Ir([
  vb("clippy-validation-list-item")
], Me.prototype, "validationListItems", 2);
Ir([
  Je({ context: Kn, subscribe: !0 }),
  L({ attribute: !1 })
], Me.prototype, "editor", 2);
Ir([
  Je({ context: Zn, subscribe: !0 }),
  L({ attribute: !1 })
], Me.prototype, "validationsContext", 2);
Me = Ir([
  se("clippy-validations-dialog")
], Me);
var Pa = (r, t) => {
  if (r === "slot")
    return 0;
  if (r instanceof Function)
    return r(t);
  const { children: e, ...n } = t ?? {};
  if (r === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [r, n, e];
}, uy = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, py = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, fy = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, my = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, gy = Hn.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (r) => r.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (r) => r.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (r) => /^(bold(er)?|[5-9]\d{2,})$/.test(r) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return /* @__PURE__ */ Pa("strong", { ...ht(this.options.HTMLAttributes, r), children: /* @__PURE__ */ Pa("slot", {}) });
  },
  markdownTokenName: "strong",
  parseMarkdown: (r, t) => t.applyMark("bold", t.parseInline(r.tokens || [])),
  renderMarkdown: (r, t) => `**${t.renderChildren(r)}**`,
  addCommands() {
    return {
      setBold: () => ({ commands: r }) => r.setMark(this.name),
      toggleBold: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetBold: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      bn({
        find: uy,
        type: this.type
      }),
      bn({
        find: fy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      yn({
        find: py,
        type: this.type
      }),
      yn({
        find: my,
        type: this.type
      })
    ];
  }
}), by = gy, yy = St.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (r, t) => r.content ? t.renderChildren(r.content, `

`) : ""
}), vy = yy, ky = St.create({
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
  renderHTML({ HTMLAttributes: r }) {
    return ["br", ht(this.options.HTMLAttributes, r)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: (r, t) => t.indent(`
`),
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({ commands: r, chain: t, state: e, editor: n }) => r.first([
        () => r.exitCode(),
        () => r.command(() => {
          const { selection: o, storedMarks: i } = e;
          if (o.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: a } = n.extensionManager, l = i || o.$to.parentOffset && o.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: c, dispatch: h }) => {
            if (h && l && s) {
              const d = l.filter((u) => a.includes(u.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), wy = ky, xy = St.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((r) => ({
      tag: `h${r}`,
      attrs: { level: r }
    }));
  },
  renderHTML({ node: r, HTMLAttributes: t }) {
    return [`h${this.options.levels.includes(r.attrs.level) ? r.attrs.level : this.options.levels[0]}`, ht(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown: (r, t) => t.createNode("heading", { level: r.depth || 1 }, t.parseInline(r.tokens || [])),
  renderMarkdown: (r, t) => {
    var e;
    const n = (e = r.attrs) != null && e.level ? parseInt(r.attrs.level, 10) : 1, o = "#".repeat(n);
    return r.content ? `${o} ${t.renderChildren(r.content)}` : "";
  },
  addCommands() {
    return {
      setHeading: (r) => ({ commands: t }) => this.options.levels.includes(r.level) ? t.setNode(this.name, r) : !1,
      toggleHeading: (r) => ({ commands: t }) => this.options.levels.includes(r.level) ? t.toggleNode(this.name, "paragraph", r) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (r, t) => ({
        ...r,
        [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((r) => Jm({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${r}})\\s$`),
      type: this.type,
      getAttributes: {
        level: r
      }
    }));
  }
}), Dh = xy, $y = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, My = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Sy = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Cy = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Ty = Hn.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (r) => r.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (r) => r.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["em", ht(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: r }) => r.setMark(this.name),
      toggleItalic: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetItalic: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (r, t) => t.applyMark("italic", t.parseInline(r.tokens || [])),
  renderMarkdown: (r, t) => `*${t.renderChildren(r)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      bn({
        find: $y,
        type: this.type
      }),
      bn({
        find: Sy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      yn({
        find: My,
        type: this.type
      }),
      yn({
        find: Cy,
        type: this.type
      })
    ];
  }
}), Oy = Ty, Ay = Object.defineProperty, Ey = (r, t) => {
  for (var e in t)
    Ay(r, e, { get: t[e], enumerable: !0 });
}, Ny = "listItem", ja = "textStyle", La = /^\s*([-+*])\s$/, Rh = St.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["ul", ht(this.options.HTMLAttributes, r), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (r, t) => r.type !== "list" || r.ordered ? [] : {
    type: "bulletList",
    content: r.items ? t.parseChildren(r.items) : []
  },
  renderMarkdown: (r, t) => r.content ? t.renderChildren(r.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: r, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ny, this.editor.getAttributes(ja)).run() : r.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let r = vr({
      find: La,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (r = vr({
      find: La,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(ja),
      editor: this.editor
    })), [r];
  }
}), zh = St.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["li", ht(this.options.HTMLAttributes, r), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (r, t) => {
    if (r.type !== "list_item")
      return [];
    let e = [];
    if (r.tokens && r.tokens.length > 0)
      if (r.tokens.some((n) => n.type === "paragraph"))
        e = t.parseChildren(r.tokens);
      else {
        const n = r.tokens[0];
        if (n && n.type === "text" && n.tokens && n.tokens.length > 0) {
          if (e = [
            {
              type: "paragraph",
              content: t.parseInline(n.tokens)
            }
          ], r.tokens.length > 1) {
            const o = r.tokens.slice(1), i = t.parseChildren(o);
            e.push(...i);
          }
        } else
          e = t.parseChildren(r.tokens);
      }
    return e.length === 0 && (e = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: e
    };
  },
  renderMarkdown: (r, t, e) => Ri(
    r,
    t,
    (n) => n.parentType === "bulletList" ? "- " : n.parentType === "orderedList" ? `${n.index + 1}. ` : "- ",
    e
  ),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Iy = {};
Ey(Iy, {
  findListItemPos: () => Dr,
  getNextListDepth: () => ts,
  handleBackspace: () => ni,
  handleDelete: () => oi,
  hasListBefore: () => Ph,
  hasListItemAfter: () => Dy,
  hasListItemBefore: () => jh,
  listItemHasSubList: () => Lh,
  nextListIsDeeper: () => _h,
  nextListIsHigher: () => Bh
});
var Dr = (r, t) => {
  const { $from: e } = t.selection, n = H(r, t.schema);
  let o = null, i = e.depth, s = e.pos, a = null;
  for (; i > 0 && a === null; )
    o = e.node(i), o.type === n ? a = i : (i -= 1, s -= 1);
  return a === null ? null : { $pos: t.doc.resolve(s), depth: a };
}, ts = (r, t) => {
  const e = Dr(r, t);
  if (!e)
    return !1;
  const [, n] = am(t, r, e.$pos.pos + 4);
  return n;
}, Ph = (r, t, e) => {
  const { $anchor: n } = r.selection, o = Math.max(0, n.pos - 2), i = r.doc.resolve(o).node();
  return !(!i || !e.includes(i.type.name));
}, jh = (r, t) => {
  var e;
  const { $anchor: n } = t.selection, o = t.doc.resolve(n.pos - 2);
  return !(o.index() === 0 || ((e = o.nodeBefore) == null ? void 0 : e.type.name) !== r);
}, Lh = (r, t, e) => {
  if (!e)
    return !1;
  const n = H(r, t.schema);
  let o = !1;
  return e.descendants((i) => {
    i.type === n && (o = !0);
  }), o;
}, ni = (r, t, e) => {
  if (r.commands.undoInputRule())
    return !0;
  if (r.state.selection.from !== r.state.selection.to)
    return !1;
  if (!Yt(r.state, t) && Ph(r.state, t, e)) {
    const { $anchor: s } = r.state.selection, a = r.state.doc.resolve(s.before() - 1), l = [];
    a.node().descendants((d, u) => {
      d.type.name === t && l.push({ node: d, pos: u });
    });
    const c = l.at(-1);
    if (!c)
      return !1;
    const h = r.state.doc.resolve(a.start() + c.pos + 1);
    return r.chain().cut({ from: s.start() - 1, to: s.end() + 1 }, h.end()).joinForward().run();
  }
  if (!Yt(r.state, t) || !dm(r.state))
    return !1;
  const n = Dr(t, r.state);
  if (!n)
    return !1;
  const o = r.state.doc.resolve(n.$pos.pos - 2).node(n.depth), i = Lh(t, r.state, o);
  return jh(t, r.state) && !i ? r.commands.joinItemBackward() : r.chain().liftListItem(t).run();
}, _h = (r, t) => {
  const e = ts(r, t), n = Dr(r, t);
  return !n || !e ? !1 : e > n.depth;
}, Bh = (r, t) => {
  const e = ts(r, t), n = Dr(r, t);
  return !n || !e ? !1 : e < n.depth;
}, oi = (r, t) => {
  if (!Yt(r.state, t) || !hm(r.state, t))
    return !1;
  const { selection: e } = r.state, { $from: n, $to: o } = e;
  return !e.empty && n.sameParent(o) ? !1 : _h(t, r.state) ? r.chain().focus(r.state.selection.from + 4).lift(t).joinBackward().run() : Bh(t, r.state) ? r.chain().joinForward().joinBackward().run() : r.commands.joinItemForward();
}, Dy = (r, t) => {
  var e;
  const { $anchor: n } = t.selection, o = t.doc.resolve(n.pos - n.parentOffset - 2);
  return !(o.index() === o.parent.childCount - 1 || ((e = o.nodeAfter) == null ? void 0 : e.type.name) !== r);
}, Ry = _.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: r }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: e }) => {
          r.state.schema.nodes[e] !== void 0 && oi(r, e) && (t = !0);
        }), t;
      },
      "Mod-Delete": ({ editor: r }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: e }) => {
          r.state.schema.nodes[e] !== void 0 && oi(r, e) && (t = !0);
        }), t;
      },
      Backspace: ({ editor: r }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: e, wrapperNames: n }) => {
          r.state.schema.nodes[e] !== void 0 && ni(r, e, n) && (t = !0);
        }), t;
      },
      "Mod-Backspace": ({ editor: r }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: e, wrapperNames: n }) => {
          r.state.schema.nodes[e] !== void 0 && ni(r, e, n) && (t = !0);
        }), t;
      }
    };
  }
}), _a = /^(\s*)(\d+)\.\s+(.*)$/, zy = /^\s/;
function Py(r) {
  const t = [];
  let e = 0, n = 0;
  for (; e < r.length; ) {
    const o = r[e], i = o.match(_a);
    if (!i)
      break;
    const [, s, a, l] = i, c = s.length;
    let h = l, d = e + 1;
    const u = [o];
    for (; d < r.length; ) {
      const p = r[d];
      if (p.match(_a))
        break;
      if (p.trim() === "")
        u.push(p), h += `
`, d += 1;
      else if (p.match(zy))
        u.push(p), h += `
${p.slice(c + 2)}`, d += 1;
      else
        break;
    }
    t.push({
      indent: c,
      number: parseInt(a, 10),
      content: h.trim(),
      raw: u.join(`
`)
    }), n = d, e = d;
  }
  return [t, n];
}
function Vh(r, t, e) {
  var n;
  const o = [];
  let i = 0;
  for (; i < r.length; ) {
    const s = r[i];
    if (s.indent === t) {
      const a = s.content.split(`
`), l = ((n = a[0]) == null ? void 0 : n.trim()) || "", c = [];
      l && c.push({
        type: "paragraph",
        raw: l,
        tokens: e.inlineTokens(l)
      });
      const h = a.slice(1).join(`
`).trim();
      if (h) {
        const p = e.blockTokens(h);
        c.push(...p);
      }
      let d = i + 1;
      const u = [];
      for (; d < r.length && r[d].indent > t; )
        u.push(r[d]), d += 1;
      if (u.length > 0) {
        const p = Math.min(...u.map((g) => g.indent)), f = Vh(u, p, e);
        c.push({
          type: "list",
          ordered: !0,
          start: u[0].number,
          items: f,
          raw: u.map((g) => g.raw).join(`
`)
        });
      }
      o.push({
        type: "list_item",
        raw: s.raw,
        tokens: c
      }), i = d;
    } else
      i += 1;
  }
  return o;
}
function jy(r, t) {
  return r.map((e) => {
    if (e.type !== "list_item")
      return t.parseChildren([e])[0];
    const n = [];
    return e.tokens && e.tokens.length > 0 && e.tokens.forEach((o) => {
      if (o.type === "paragraph" || o.type === "list" || o.type === "blockquote" || o.type === "code")
        n.push(...t.parseChildren([o]));
      else if (o.type === "text" && o.tokens) {
        const i = t.parseChildren([o]);
        n.push({
          type: "paragraph",
          content: i
        });
      } else {
        const i = t.parseChildren([o]);
        i.length > 0 && n.push(...i);
      }
    }), {
      type: "listItem",
      content: n
    };
  });
}
var Ly = "listItem", Ba = "textStyle", Va = /^(\d+)\.\s$/, Hh = St.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (r) => r.hasAttribute("start") ? parseInt(r.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (r) => r.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    const { start: t, ...e } = r;
    return t === 1 ? ["ol", ht(this.options.HTMLAttributes, e), 0] : ["ol", ht(this.options.HTMLAttributes, r), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (r, t) => {
    if (r.type !== "list" || !r.ordered)
      return [];
    const e = r.start || 1, n = r.items ? jy(r.items, t) : [];
    return e !== 1 ? {
      type: "orderedList",
      attrs: { start: e },
      content: n
    } : {
      type: "orderedList",
      content: n
    };
  },
  renderMarkdown: (r, t) => r.content ? t.renderChildren(r.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: (r) => {
      const t = r.match(/^(\s*)(\d+)\.\s+/), e = t?.index;
      return e !== void 0 ? e : -1;
    },
    tokenize: (r, t, e) => {
      var n;
      const o = r.split(`
`), [i, s] = Py(o);
      if (i.length === 0)
        return;
      const a = Vh(i, 0, e);
      return a.length === 0 ? void 0 : {
        type: "list",
        ordered: !0,
        start: ((n = i[0]) == null ? void 0 : n.number) || 1,
        items: a,
        raw: o.slice(0, s).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: r, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ly, this.editor.getAttributes(Ba)).run() : r.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let r = vr({
      find: Va,
      type: this.type,
      getAttributes: (t) => ({ start: +t[1] }),
      joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (r = vr({
      find: Va,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (t) => ({ start: +t[1], ...this.editor.getAttributes(Ba) }),
      joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1],
      editor: this.editor
    })), [r];
  }
}), _y = /^\s*(\[([( |x])?\])\s$/, By = St.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (r) => {
          const t = r.getAttribute("data-checked");
          return t === "" || t === "true";
        },
        renderHTML: (r) => ({
          "data-checked": r.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: r, HTMLAttributes: t }) {
    return [
      "li",
      ht(this.options.HTMLAttributes, t, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: r.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (r, t) => {
    const e = [];
    if (r.tokens && r.tokens.length > 0 ? e.push(t.createNode("paragraph", {}, t.parseInline(r.tokens))) : r.text ? e.push(t.createNode("paragraph", {}, [t.createNode("text", { text: r.text })])) : e.push(t.createNode("paragraph", {}, [])), r.nestedTokens && r.nestedTokens.length > 0) {
      const n = t.parseChildren(r.nestedTokens);
      e.push(...n);
    }
    return t.createNode("taskItem", { checked: r.checked || !1 }, e);
  },
  renderMarkdown: (r, t) => {
    var e;
    const n = `- [${(e = r.attrs) != null && e.checked ? "x" : " "}] `;
    return Ri(r, t, n);
  },
  addKeyboardShortcuts() {
    const r = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...r,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : r;
  },
  addNodeView() {
    return ({ node: r, HTMLAttributes: t, getPos: e, editor: n }) => {
      const o = document.createElement("li"), i = document.createElement("label"), s = document.createElement("span"), a = document.createElement("input"), l = document.createElement("div"), c = (h) => {
        var d, u;
        a.ariaLabel = ((u = (d = this.options.a11y) == null ? void 0 : d.checkboxLabel) == null ? void 0 : u.call(d, h, a.checked)) || `Task item checkbox for ${h.textContent || "empty task item"}`;
      };
      return c(r), i.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (h) => h.preventDefault()), a.addEventListener("change", (h) => {
        if (!n.isEditable && !this.options.onReadOnlyChecked) {
          a.checked = !a.checked;
          return;
        }
        const { checked: d } = h.target;
        n.isEditable && typeof e == "function" && n.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: u }) => {
          const p = e();
          if (typeof p != "number")
            return !1;
          const f = u.doc.nodeAt(p);
          return u.setNodeMarkup(p, void 0, {
            ...f?.attrs,
            checked: d
          }), !0;
        }).run(), !n.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(r, d) || (a.checked = !a.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([h, d]) => {
        o.setAttribute(h, d);
      }), o.dataset.checked = r.attrs.checked, a.checked = r.attrs.checked, i.append(a, s), o.append(i, l), Object.entries(t).forEach(([h, d]) => {
        o.setAttribute(h, d);
      }), {
        dom: o,
        contentDOM: l,
        update: (h) => h.type !== this.type ? !1 : (o.dataset.checked = h.attrs.checked, a.checked = h.attrs.checked, c(h), !0)
      };
    };
  },
  addInputRules() {
    return [
      vr({
        find: _y,
        type: this.type,
        getAttributes: (r) => ({
          checked: r[r.length - 1] === "x"
        })
      })
    ];
  }
}), Vy = St.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["ul", ht(this.options.HTMLAttributes, r, { "data-type": this.name }), 0];
  },
  parseMarkdown: (r, t) => t.createNode("taskList", {}, t.parseChildren(r.items || [])),
  renderMarkdown: (r, t) => r.content ? t.renderChildren(r.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(r) {
      var t;
      const e = (t = r.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : t.index;
      return e !== void 0 ? e : -1;
    },
    tokenize(r, t, e) {
      const n = (i) => {
        const s = Vo(
          i,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (a) => ({
              indentLevel: a[1].length,
              mainContent: a[4],
              checked: a[3].toLowerCase() === "x"
            }),
            createToken: (a, l) => ({
              type: "taskItem",
              raw: "",
              mainContent: a.mainContent,
              indentLevel: a.indentLevel,
              checked: a.checked,
              text: a.mainContent,
              tokens: e.inlineTokens(a.mainContent),
              nestedTokens: l
            }),
            // Allow recursive nesting
            customNestedParser: n
          },
          e
        );
        return s ? [
          {
            type: "taskList",
            raw: s.raw,
            items: s.items
          }
        ] : e.blockTokens(i);
      }, o = Vo(
        r,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (i) => ({
            indentLevel: i[1].length,
            mainContent: i[4],
            checked: i[3].toLowerCase() === "x"
          }),
          createToken: (i, s) => ({
            type: "taskItem",
            raw: "",
            mainContent: i.mainContent,
            indentLevel: i.indentLevel,
            checked: i.checked,
            text: i.mainContent,
            tokens: e.inlineTokens(i.mainContent),
            nestedTokens: s
          }),
          // Use the recursive parser for nested content
          customNestedParser: n
        },
        e
      );
      if (o)
        return {
          type: "taskList",
          raw: o.raw,
          items: o.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: r }) => r.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
_.create({
  name: "listKit",
  addExtensions() {
    const r = [];
    return this.options.bulletList !== !1 && r.push(Rh.configure(this.options.bulletList)), this.options.listItem !== !1 && r.push(zh.configure(this.options.listItem)), this.options.listKeymap !== !1 && r.push(Ry.configure(this.options.listKeymap)), this.options.orderedList !== !1 && r.push(Hh.configure(this.options.orderedList)), this.options.taskItem !== !1 && r.push(By.configure(this.options.taskItem)), this.options.taskList !== !1 && r.push(Vy.configure(this.options.taskList)), r;
  }
});
var Hy = St.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["p", ht(this.options.HTMLAttributes, r), 0];
  },
  parseMarkdown: (r, t) => {
    const e = r.tokens || [];
    return e.length === 1 && e[0].type === "image" ? t.parseChildren([e[0]]) : t.createNode(
      "paragraph",
      void 0,
      // no attributes for paragraph
      t.parseInline(e)
    );
  },
  renderMarkdown: (r, t) => !r || !Array.isArray(r.content) ? "" : t.renderChildren(r.content),
  addCommands() {
    return {
      setParagraph: () => ({ commands: r }) => r.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Fy = Hy, Wy = St.create({
  name: "text",
  group: "inline",
  parseMarkdown: (r) => ({
    type: "text",
    text: r.text || ""
  }),
  renderMarkdown: (r) => r.text || ""
}), Uy = Wy, qy = Hn.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (r) => r.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["u", ht(this.options.HTMLAttributes, r), 0];
  },
  parseMarkdown(r, t) {
    return t.applyMark(this.name || "underline", t.parseInline(r.tokens || []));
  },
  renderMarkdown(r, t) {
    return `++${t.renderChildren(r)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(r) {
      return r.indexOf("++");
    },
    tokenize(r, t, e) {
      const n = /^(\+\+)([\s\S]+?)(\+\+)/.exec(r);
      if (!n)
        return;
      const o = n[2].trim();
      return {
        type: "underline",
        raw: n[0],
        text: o,
        tokens: e.inlineTokens(o)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: r }) => r.setMark(this.name),
      toggleUnderline: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetUnderline: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Jy = qy;
function Gy(r = {}) {
  return new q({
    view(t) {
      return new Ky(t, r);
    }
  });
}
class Ky {
  constructor(t, e) {
    var n;
    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = e.width) !== null && n !== void 0 ? n : 1, this.color = e.color === !1 ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((o) => {
      let i = (s) => {
        this[o](s);
      };
      return t.dom.addEventListener(o, i), { name: o, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: t, handler: e }) => this.editorView.dom.removeEventListener(t, e));
  }
  update(t, e) {
    this.cursorPos != null && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(t) {
    t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let t = this.editorView.state.doc.resolve(this.cursorPos), e = !t.parent.inlineContent, n, o = this.editorView.dom, i = o.getBoundingClientRect(), s = i.width / o.offsetWidth, a = i.height / o.offsetHeight;
    if (e) {
      let d = t.nodeBefore, u = t.nodeAfter;
      if (d || u) {
        let p = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
        if (p) {
          let f = p.getBoundingClientRect(), g = d ? f.bottom : f.top;
          d && u && (g = (g + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let b = this.width / 2 * a;
          n = { left: f.left, right: f.right, top: g - b, bottom: g + b };
        }
      }
    }
    if (!n) {
      let d = this.editorView.coordsAtPos(this.cursorPos), u = this.width / 2 * s;
      n = { left: d.left - u, right: d.left + u, top: d.top, bottom: d.bottom };
    }
    let l = this.editorView.dom.offsetParent;
    this.element || (this.element = l.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", e), this.element.classList.toggle("prosemirror-dropcursor-inline", !e);
    let c, h;
    if (!l || l == document.body && getComputedStyle(l).position == "static")
      c = -pageXOffset, h = -pageYOffset;
    else {
      let d = l.getBoundingClientRect(), u = d.width / l.offsetWidth, p = d.height / l.offsetHeight;
      c = d.left - l.scrollLeft * u, h = d.top - l.scrollTop * p;
    }
    this.element.style.left = (n.left - c) / s + "px", this.element.style.top = (n.top - h) / a + "px", this.element.style.width = (n.right - n.left) / s + "px", this.element.style.height = (n.bottom - n.top) / a + "px";
  }
  scheduleRemoval(t) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t);
  }
  dragover(t) {
    if (!this.editorView.editable)
      return;
    let e = this.editorView.posAtCoords({ left: t.clientX, top: t.clientY }), n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside), o = n && n.type.spec.disableDropCursor, i = typeof o == "function" ? o(this.editorView, e, t) : o;
    if (e && !i) {
      let s = e.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let a = kl(this.editorView.state.doc, s, this.editorView.dragging.slice);
        a != null && (s = a);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(t) {
    this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null);
  }
}
class P extends A {
  /**
  Create a gap cursor.
  */
  constructor(t) {
    super(t, t);
  }
  map(t, e) {
    let n = t.resolve(e.map(this.head));
    return P.valid(n) ? new P(n) : A.near(n);
  }
  content() {
    return k.empty;
  }
  eq(t) {
    return t instanceof P && t.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new P(t.resolve(e.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new es(this.anchor);
  }
  /**
  @internal
  */
  static valid(t) {
    let e = t.parent;
    if (e.isTextblock || !Zy(t) || !Yy(t))
      return !1;
    let n = e.type.spec.allowGapCursor;
    if (n != null)
      return n;
    let o = e.contentMatchAt(t.index()).defaultType;
    return o && o.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(t, e, n = !1) {
    t: for (; ; ) {
      if (!n && P.valid(t))
        return t;
      let o = t.pos, i = null;
      for (let s = t.depth; ; s--) {
        let a = t.node(s);
        if (e > 0 ? t.indexAfter(s) < a.childCount : t.index(s) > 0) {
          i = a.child(e > 0 ? t.indexAfter(s) : t.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        o += e;
        let l = t.doc.resolve(o);
        if (P.valid(l))
          return l;
      }
      for (; ; ) {
        let s = e > 0 ? i.firstChild : i.lastChild;
        if (!s) {
          if (i.isAtom && !i.isText && !S.isSelectable(i)) {
            t = t.doc.resolve(o + i.nodeSize * e), n = !1;
            continue t;
          }
          break;
        }
        i = s, o += e;
        let a = t.doc.resolve(o);
        if (P.valid(a))
          return a;
      }
      return null;
    }
  }
}
P.prototype.visible = !1;
P.findFrom = P.findGapCursorFrom;
A.jsonID("gapcursor", P);
class es {
  constructor(t) {
    this.pos = t;
  }
  map(t) {
    return new es(t.map(this.pos));
  }
  resolve(t) {
    let e = t.resolve(this.pos);
    return P.valid(e) ? new P(e) : A.near(e);
  }
}
function Fh(r) {
  return r.isAtom || r.spec.isolating || r.spec.createGapCursor;
}
function Zy(r) {
  for (let t = r.depth; t >= 0; t--) {
    let e = r.index(t), n = r.node(t);
    if (e == 0) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = n.child(e - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || Fh(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Yy(r) {
  for (let t = r.depth; t >= 0; t--) {
    let e = r.indexAfter(t), n = r.node(t);
    if (e == n.childCount) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = n.child(e); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || Fh(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Xy() {
  return new q({
    props: {
      decorations: rv,
      createSelectionBetween(r, t, e) {
        return t.pos == e.pos && P.valid(e) ? new P(e) : null;
      },
      handleClick: tv,
      handleKeyDown: Qy,
      handleDOMEvents: { beforeinput: ev }
    }
  });
}
const Qy = kc({
  ArrowLeft: Fr("horiz", -1),
  ArrowRight: Fr("horiz", 1),
  ArrowUp: Fr("vert", -1),
  ArrowDown: Fr("vert", 1)
});
function Fr(r, t) {
  const e = r == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
  return function(n, o, i) {
    let s = n.selection, a = t > 0 ? s.$to : s.$from, l = s.empty;
    if (s instanceof C) {
      if (!i.endOfTextblock(e) || a.depth == 0)
        return !1;
      l = !1, a = n.doc.resolve(t > 0 ? a.after() : a.before());
    }
    let c = P.findGapCursorFrom(a, t, l);
    return c ? (o && o(n.tr.setSelection(new P(c))), !0) : !1;
  };
}
function tv(r, t, e) {
  if (!r || !r.editable)
    return !1;
  let n = r.state.doc.resolve(t);
  if (!P.valid(n))
    return !1;
  let o = r.posAtCoords({ left: e.clientX, top: e.clientY });
  return o && o.inside > -1 && S.isSelectable(r.state.doc.nodeAt(o.inside)) ? !1 : (r.dispatch(r.state.tr.setSelection(new P(n))), !0);
}
function ev(r, t) {
  if (t.inputType != "insertCompositionText" || !(r.state.selection instanceof P))
    return !1;
  let { $from: e } = r.state.selection, n = e.parent.contentMatchAt(e.index()).findWrapping(r.state.schema.nodes.text);
  if (!n)
    return !1;
  let o = v.empty;
  for (let s = n.length - 1; s >= 0; s--)
    o = v.from(n[s].createAndFill(null, o));
  let i = r.state.tr.replace(e.pos, e.pos, new k(o, 0, 0));
  return i.setSelection(C.near(i.doc.resolve(e.pos + 1))), r.dispatch(i), !1;
}
function rv(r) {
  if (!(r.selection instanceof P))
    return null;
  let t = document.createElement("div");
  return t.className = "ProseMirror-gapcursor", z.create(r.doc, [Q.widget(r.selection.head, t, { key: "gapcursor" })]);
}
var An = 200, U = function() {
};
U.prototype.append = function(r) {
  return r.length ? (r = U.from(r), !this.length && r || r.length < An && this.leafAppend(r) || this.length < An && r.leafPrepend(this) || this.appendInner(r)) : this;
};
U.prototype.prepend = function(r) {
  return r.length ? U.from(r).append(this) : this;
};
U.prototype.appendInner = function(r) {
  return new nv(this, r);
};
U.prototype.slice = function(r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = this.length), r >= t ? U.empty : this.sliceInner(Math.max(0, r), Math.min(this.length, t));
};
U.prototype.get = function(r) {
  if (!(r < 0 || r >= this.length))
    return this.getInner(r);
};
U.prototype.forEach = function(r, t, e) {
  t === void 0 && (t = 0), e === void 0 && (e = this.length), t <= e ? this.forEachInner(r, t, e, 0) : this.forEachInvertedInner(r, t, e, 0);
};
U.prototype.map = function(r, t, e) {
  t === void 0 && (t = 0), e === void 0 && (e = this.length);
  var n = [];
  return this.forEach(function(o, i) {
    return n.push(r(o, i));
  }, t, e), n;
};
U.from = function(r) {
  return r instanceof U ? r : r && r.length ? new Wh(r) : U.empty;
};
var Wh = /* @__PURE__ */ (function(r) {
  function t(n) {
    r.call(this), this.values = n;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return t.prototype.flatten = function() {
    return this.values;
  }, t.prototype.sliceInner = function(n, o) {
    return n == 0 && o == this.length ? this : new t(this.values.slice(n, o));
  }, t.prototype.getInner = function(n) {
    return this.values[n];
  }, t.prototype.forEachInner = function(n, o, i, s) {
    for (var a = o; a < i; a++)
      if (n(this.values[a], s + a) === !1)
        return !1;
  }, t.prototype.forEachInvertedInner = function(n, o, i, s) {
    for (var a = o - 1; a >= i; a--)
      if (n(this.values[a], s + a) === !1)
        return !1;
  }, t.prototype.leafAppend = function(n) {
    if (this.length + n.length <= An)
      return new t(this.values.concat(n.flatten()));
  }, t.prototype.leafPrepend = function(n) {
    if (this.length + n.length <= An)
      return new t(n.flatten().concat(this.values));
  }, e.length.get = function() {
    return this.values.length;
  }, e.depth.get = function() {
    return 0;
  }, Object.defineProperties(t.prototype, e), t;
})(U);
U.empty = new Wh([]);
var nv = /* @__PURE__ */ (function(r) {
  function t(e, n) {
    r.call(this), this.left = e, this.right = n, this.length = e.length + n.length, this.depth = Math.max(e.depth, n.depth) + 1;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, t.prototype.getInner = function(e) {
    return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
  }, t.prototype.forEachInner = function(e, n, o, i) {
    var s = this.left.length;
    if (n < s && this.left.forEachInner(e, n, Math.min(o, s), i) === !1 || o > s && this.right.forEachInner(e, Math.max(n - s, 0), Math.min(this.length, o) - s, i + s) === !1)
      return !1;
  }, t.prototype.forEachInvertedInner = function(e, n, o, i) {
    var s = this.left.length;
    if (n > s && this.right.forEachInvertedInner(e, n - s, Math.max(o, s) - s, i + s) === !1 || o < s && this.left.forEachInvertedInner(e, Math.min(n, s), o, i) === !1)
      return !1;
  }, t.prototype.sliceInner = function(e, n) {
    if (e == 0 && n == this.length)
      return this;
    var o = this.left.length;
    return n <= o ? this.left.slice(e, n) : e >= o ? this.right.slice(e - o, n - o) : this.left.slice(e, o).append(this.right.slice(0, n - o));
  }, t.prototype.leafAppend = function(e) {
    var n = this.right.leafAppend(e);
    if (n)
      return new t(this.left, n);
  }, t.prototype.leafPrepend = function(e) {
    var n = this.left.leafPrepend(e);
    if (n)
      return new t(n, this.right);
  }, t.prototype.appendInner = function(e) {
    return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
  }, t;
})(U);
const ov = 500;
class yt {
  constructor(t, e) {
    this.items = t, this.eventCount = e;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(t, e) {
    if (this.eventCount == 0)
      return null;
    let n = this.items.length;
    for (; ; n--)
      if (this.items.get(n - 1).selection) {
        --n;
        break;
      }
    let o, i;
    e && (o = this.remapping(n, this.items.length), i = o.maps.length);
    let s = t.tr, a, l, c = [], h = [];
    return this.items.forEach((d, u) => {
      if (!d.step) {
        o || (o = this.remapping(n, u + 1), i = o.maps.length), i--, h.push(d);
        return;
      }
      if (o) {
        h.push(new xt(d.map));
        let p = d.step.map(o.slice(i)), f;
        p && s.maybeStep(p).doc && (f = s.mapping.maps[s.mapping.maps.length - 1], c.push(new xt(f, void 0, void 0, c.length + h.length))), i--, f && o.appendMap(f, i);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return a = o ? d.selection.map(o.slice(i)) : d.selection, l = new yt(this.items.slice(0, n).append(h.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: s, selection: a };
  }
  // Create a new branch with the given transform added.
  addTransform(t, e, n, o) {
    let i = [], s = this.eventCount, a = this.items, l = !o && a.length ? a.get(a.length - 1) : null;
    for (let h = 0; h < t.steps.length; h++) {
      let d = t.steps[h].invert(t.docs[h]), u = new xt(t.mapping.maps[h], d, e), p;
      (p = l && l.merge(u)) && (u = p, h ? i.pop() : a = a.slice(0, a.length - 1)), i.push(u), e && (s++, e = void 0), o || (l = u);
    }
    let c = s - n.depth;
    return c > sv && (a = iv(a, c), s -= c), new yt(a.append(i), s);
  }
  remapping(t, e) {
    let n = new ur();
    return this.items.forEach((o, i) => {
      let s = o.mirrorOffset != null && i - o.mirrorOffset >= t ? n.maps.length - o.mirrorOffset : void 0;
      n.appendMap(o.map, s);
    }, t, e), n;
  }
  addMaps(t) {
    return this.eventCount == 0 ? this : new yt(this.items.append(t.map((e) => new xt(e))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(t, e) {
    if (!this.eventCount)
      return this;
    let n = [], o = Math.max(0, this.items.length - e), i = t.mapping, s = t.steps.length, a = this.eventCount;
    this.items.forEach((u) => {
      u.selection && a--;
    }, o);
    let l = e;
    this.items.forEach((u) => {
      let p = i.getMirror(--l);
      if (p == null)
        return;
      s = Math.min(s, p);
      let f = i.maps[p];
      if (u.step) {
        let g = t.steps[p].invert(t.docs[p]), b = u.selection && u.selection.map(i.slice(l + 1, p));
        b && a++, n.push(new xt(f, g, b));
      } else
        n.push(new xt(f));
    }, o);
    let c = [];
    for (let u = e; u < s; u++)
      c.push(new xt(i.maps[u]));
    let h = this.items.slice(0, o).append(c).append(n), d = new yt(h, a);
    return d.emptyItemCount() > ov && (d = d.compress(this.items.length - n.length)), d;
  }
  emptyItemCount() {
    let t = 0;
    return this.items.forEach((e) => {
      e.step || t++;
    }), t;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(t = this.items.length) {
    let e = this.remapping(0, t), n = e.maps.length, o = [], i = 0;
    return this.items.forEach((s, a) => {
      if (a >= t)
        o.push(s), s.selection && i++;
      else if (s.step) {
        let l = s.step.map(e.slice(n)), c = l && l.getMap();
        if (n--, c && e.appendMap(c, n), l) {
          let h = s.selection && s.selection.map(e.slice(n));
          h && i++;
          let d = new xt(c.invert(), l, h), u, p = o.length - 1;
          (u = o.length && o[p].merge(d)) ? o[p] = u : o.push(d);
        }
      } else s.map && n--;
    }, this.items.length, 0), new yt(U.from(o.reverse()), i);
  }
}
yt.empty = new yt(U.empty, 0);
function iv(r, t) {
  let e;
  return r.forEach((n, o) => {
    if (n.selection && t-- == 0)
      return e = o, !1;
  }), r.slice(e);
}
class xt {
  constructor(t, e, n, o) {
    this.map = t, this.step = e, this.selection = n, this.mirrorOffset = o;
  }
  merge(t) {
    if (this.step && t.step && !t.selection) {
      let e = t.step.merge(this.step);
      if (e)
        return new xt(e.getMap().invert(), e, this.selection);
    }
  }
}
class _t {
  constructor(t, e, n, o, i) {
    this.done = t, this.undone = e, this.prevRanges = n, this.prevTime = o, this.prevComposition = i;
  }
}
const sv = 20;
function av(r, t, e, n) {
  let o = e.getMeta(be), i;
  if (o)
    return o.historyState;
  e.getMeta(hv) && (r = new _t(r.done, r.undone, null, 0, -1));
  let s = e.getMeta("appendedTransaction");
  if (e.steps.length == 0)
    return r;
  if (s && s.getMeta(be))
    return s.getMeta(be).redo ? new _t(r.done.addTransform(e, void 0, n, rn(t)), r.undone, Ha(e.mapping.maps), r.prevTime, r.prevComposition) : new _t(r.done, r.undone.addTransform(e, void 0, n, rn(t)), null, r.prevTime, r.prevComposition);
  if (e.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let a = e.getMeta("composition"), l = r.prevTime == 0 || !s && r.prevComposition != a && (r.prevTime < (e.time || 0) - n.newGroupDelay || !lv(e, r.prevRanges)), c = s ? xo(r.prevRanges, e.mapping) : Ha(e.mapping.maps);
    return new _t(r.done.addTransform(e, l ? t.selection.getBookmark() : void 0, n, rn(t)), yt.empty, c, e.time, a ?? r.prevComposition);
  } else return (i = e.getMeta("rebased")) ? new _t(r.done.rebased(e, i), r.undone.rebased(e, i), xo(r.prevRanges, e.mapping), r.prevTime, r.prevComposition) : new _t(r.done.addMaps(e.mapping.maps), r.undone.addMaps(e.mapping.maps), xo(r.prevRanges, e.mapping), r.prevTime, r.prevComposition);
}
function lv(r, t) {
  if (!t)
    return !1;
  if (!r.docChanged)
    return !0;
  let e = !1;
  return r.mapping.maps[0].forEach((n, o) => {
    for (let i = 0; i < t.length; i += 2)
      n <= t[i + 1] && o >= t[i] && (e = !0);
  }), e;
}
function Ha(r) {
  let t = [];
  for (let e = r.length - 1; e >= 0 && t.length == 0; e--)
    r[e].forEach((n, o, i, s) => t.push(i, s));
  return t;
}
function xo(r, t) {
  if (!r)
    return null;
  let e = [];
  for (let n = 0; n < r.length; n += 2) {
    let o = t.map(r[n], 1), i = t.map(r[n + 1], -1);
    o <= i && e.push(o, i);
  }
  return e;
}
function cv(r, t, e) {
  let n = rn(t), o = be.get(t).spec.config, i = (e ? r.undone : r.done).popEvent(t, n);
  if (!i)
    return null;
  let s = i.selection.resolve(i.transform.doc), a = (e ? r.done : r.undone).addTransform(i.transform, t.selection.getBookmark(), o, n), l = new _t(e ? a : i.remaining, e ? i.remaining : a, null, 0, -1);
  return i.transform.setSelection(s).setMeta(be, { redo: e, historyState: l });
}
let $o = !1, Fa = null;
function rn(r) {
  let t = r.plugins;
  if (Fa != t) {
    $o = !1, Fa = t;
    for (let e = 0; e < t.length; e++)
      if (t[e].spec.historyPreserveItems) {
        $o = !0;
        break;
      }
  }
  return $o;
}
const be = new it("history"), hv = new it("closeHistory");
function dv(r = {}) {
  return r = {
    depth: r.depth || 100,
    newGroupDelay: r.newGroupDelay || 500
  }, new q({
    key: be,
    state: {
      init() {
        return new _t(yt.empty, yt.empty, null, 0, -1);
      },
      apply(t, e, n) {
        return av(e, n, t, r);
      }
    },
    config: r,
    props: {
      handleDOMEvents: {
        beforeinput(t, e) {
          let n = e.inputType, o = n == "historyUndo" ? qh : n == "historyRedo" ? Jh : null;
          return o ? (e.preventDefault(), o(t.state, t.dispatch)) : !1;
        }
      }
    }
  });
}
function Uh(r, t) {
  return (e, n) => {
    let o = be.getState(e);
    if (!o || (r ? o.undone : o.done).eventCount == 0)
      return !1;
    if (n) {
      let i = cv(o, e, r);
      i && n(i.scrollIntoView());
    }
    return !0;
  };
}
const qh = Uh(!1), Jh = Uh(!0);
_.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (r) => r.length,
      wordCounter: (r) => r.split(" ").filter((t) => t !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (r) => {
      const t = r?.node || this.editor.state.doc;
      if ((r?.mode || this.options.mode) === "textSize") {
        const e = t.textBetween(0, t.content.size, void 0, " ");
        return this.options.textCounter(e);
      }
      return t.nodeSize;
    }, this.storage.words = (r) => {
      const t = r?.node || this.editor.state.doc, e = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(e);
    };
  },
  addProseMirrorPlugins() {
    let r = !1;
    return [
      new q({
        key: new it("characterCount"),
        appendTransaction: (t, e, n) => {
          if (r)
            return;
          const o = this.options.limit;
          if (o == null || o === 0) {
            r = !0;
            return;
          }
          const i = this.storage.characters({ node: n.doc });
          if (i > o) {
            const s = i - o, a = 0, l = s;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`
            );
            const c = n.tr.deleteRange(a, l);
            return r = !0, c;
          }
          r = !0;
        },
        filterTransaction: (t, e) => {
          const n = this.options.limit;
          if (!t.docChanged || n === 0 || n === null || n === void 0)
            return !0;
          const o = this.storage.characters({ node: e.doc }), i = this.storage.characters({ node: t.doc });
          if (i <= n || o > n && i > n && i <= o)
            return !0;
          if (o > n && i > n && i > o || !t.getMeta("paste"))
            return !1;
          const s = t.selection.$head.pos, a = i - n, l = s - a, c = s;
          return t.deleteRange(l, c), !(this.storage.characters({ node: t.doc }) > n);
        }
      })
    ];
  }
});
_.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [Gy(this.options)];
  }
});
_.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new q({
        key: new it("focus"),
        props: {
          decorations: ({ doc: r, selection: t }) => {
            const { isEditable: e, isFocused: n } = this.editor, { anchor: o } = t, i = [];
            if (!e || !n)
              return z.create(r, []);
            let s = 0;
            this.options.mode === "deepest" && r.descendants((l, c) => {
              if (!l.isText) {
                if (!(o >= c && o <= c + l.nodeSize - 1))
                  return !1;
                s += 1;
              }
            });
            let a = 0;
            return r.descendants((l, c) => {
              if (l.isText || !(o >= c && o <= c + l.nodeSize - 1))
                return !1;
              if (a += 1, this.options.mode === "deepest" && s - a > 0 || this.options.mode === "shallowest" && a > 1)
                return this.options.mode === "deepest";
              i.push(
                Q.node(c, c + l.nodeSize, {
                  class: this.options.className
                })
              );
            }), z.create(r, i);
          }
        }
      })
    ];
  }
});
_.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [Xy()];
  },
  extendNodeSchema(r) {
    var t;
    const e = {
      name: r.name,
      options: r.options,
      storage: r.storage
    };
    return {
      allowGapCursor: (t = I($(r, "allowGapCursor", e))) != null ? t : null
    };
  }
});
var uv = _.create({
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
      new q({
        key: new it("placeholder"),
        props: {
          decorations: ({ doc: r, selection: t }) => {
            const e = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: n } = t, o = [];
            if (!e)
              return null;
            const i = this.editor.isEmpty;
            return r.descendants((s, a) => {
              const l = n >= a && n <= a + s.nodeSize, c = !s.isLeaf && Vn(s);
              if ((l || !this.options.showOnlyCurrent) && c) {
                const h = [this.options.emptyNodeClass];
                i && h.push(this.options.emptyEditorClass);
                const d = Q.node(a, a + s.nodeSize, {
                  class: h.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: a,
                    hasAnchor: l
                  }) : this.options.placeholder
                });
                o.push(d);
              }
              return this.options.includeChildren;
            }), z.create(r, o);
          }
        }
      })
    ];
  }
});
_.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: r, options: t } = this;
    return [
      new q({
        key: new it("selection"),
        props: {
          decorations(e) {
            return e.selection.empty || r.isFocused || !r.isEditable || um(e.selection) || r.view.dragging ? null : z.create(e.doc, [
              Q.inline(e.selection.from, e.selection.to, {
                class: t.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function Wa({ types: r, node: t }) {
  return t && Array.isArray(r) && r.includes(t.type) || t?.type === r;
}
_.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var r;
    const t = new it(this.name), e = ((r = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : r.name) || this.options.node || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, o]) => o).filter((o) => (this.options.notAfter || []).concat(e).includes(o.name));
    return [
      new q({
        key: t,
        appendTransaction: (o, i, s) => {
          const { doc: a, tr: l, schema: c } = s, h = t.getState(s), d = a.content.size, u = c.nodes[e];
          if (h)
            return l.insert(d, u.create());
        },
        state: {
          init: (o, i) => {
            const s = i.tr.doc.lastChild;
            return !Wa({ node: s, types: n });
          },
          apply: (o, i) => {
            if (!o.docChanged)
              return i;
            const s = o.doc.lastChild;
            return !Wa({ node: s, types: n });
          }
        }
      })
    ];
  }
});
var pv = _.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: r, dispatch: t }) => qh(r, t),
      redo: () => ({ state: r, dispatch: t }) => Jh(r, t)
    };
  },
  addProseMirrorPlugins() {
    return [dv(this.options)];
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
const fv = _.create({
  name: "keyboardShortcuts",
  addKeyboardShortcuts() {
    return {
      "Alt-F10": () => (globalThis.dispatchEvent(
        new CustomEvent(kt.FOCUS_TOOLBAR, {
          bubbles: !0,
          composed: !0
        })
      ), !0)
    };
  }
}), mv = zh.extend({
  name: "listItem",
  // TODO: bummer, content does not allow mix of inline and block, so can't allow both text and nested lists
  // Documentation: https://tiptap.dev/docs/editor/core-concepts/schema#nodes-and-marks
  content: "inline*"
}), Cr = (r, t) => {
  const e = r.view.nodeDOM(t);
  return e instanceof HTMLElement ? { height: e.offsetHeight, top: e.offsetTop } : null;
}, gv = (r) => /^\s*$/.test(r), rs = (r) => r.type.name === "text" ? !r.text || gv(r.text) : r.content?.content ? r.content?.content.every((t) => rs(t)) : !0, bv = (r, t, e) => t.type.name === "paragraph" && rs(t) ? {
  boundingBox: Cr(r, e),
  pos: e,
  severity: "error"
} : null, yv = (r, t, e) => t.type.name === "heading" && rs(t) ? {
  boundingBox: Cr(r, e),
  pos: e,
  severity: Sr.ERROR
} : null, vv = {
  [On.HEADING_MUST_NOT_BE_EMPTY]: yv,
  [On.PARAGRAPH_MUST_NOT_BE_EMPTY]: bv
}, kv = (r) => {
  const t = /* @__PURE__ */ new Map();
  return r.$doc.node.descendants((e, n) => {
    for (const [o, i] of Object.entries(vv)) {
      const s = i(r, e, n);
      s && t.set(`${o}_${n}`, s);
    }
  }), t;
}, Gh = /* @__PURE__ */ new Map(), wv = (r) => {
  const t = [];
  let e = 0;
  return r.$doc.node.descendants((n, o) => {
    if (n.type.name === "heading") {
      const i = n.attrs.level;
      i > e + 1 && t.push({
        boundingBox: Cr(r, o),
        pos: o,
        severity: Sr.WARNING,
        tipPayload: { headingLevel: i, precedingHeadingLevel: e }
      }), e = i;
    }
  }), t;
}, xv = (r) => {
  const t = [];
  let e = "";
  return r.content.forEach((n) => {
    n.type.name === "hardBreak" ? (e.trim().length && t.push(e), e = "") : e += n.textContent;
  }), e.trim().length && t.push(e), t;
}, $v = new RegExp(/^\d+[.)\]/ ]$/), Mv = new RegExp(/^\s*([•\-*+])\s+/), Sv = (r) => {
  const t = [], e = [];
  r.$doc.node.descendants((o, i) => {
    o.type.isBlock && e.push({ node: o, pos: i });
  });
  const n = (o) => o.startsWith("2") ? o.replace("2", "1") : o;
  for (const [o, { node: i, pos: s }] of e.entries()) {
    if (i.type.name !== "paragraph")
      continue;
    const a = i.textContent.substring(0, 2), l = $v.test(a), c = Mv.test(a);
    if (!l && !c)
      continue;
    if (e[o + 1] && e[o + 1].node.type.name === "paragraph") {
      const d = e[o + 1].node.textContent.substring(0, 2);
      n(d) === a && t.push({
        boundingBox: Cr(r, s),
        pos: s,
        severity: Sr.INFO,
        tipPayload: { prefix: a.trim() }
      });
    }
    const h = xv(i);
    h.length > 1 && a === n(h[1].substring(0, 2)) && t.push({
      boundingBox: Cr(r, s),
      pos: s,
      severity: Sr.INFO,
      tipPayload: { prefix: a.trim() }
    });
  }
  return t;
}, Cv = (r, t) => {
  const { firstChild: e } = r.$doc.node, n = t?.topHeadingLevel ?? 1;
  return e?.attrs.level !== n ? [
    {
      boundingBox: null,
      pos: 0,
      severity: Sr.INFO,
      tipPayload: { topHeadingLevel: n }
    }
  ] : [];
}, Tv = {
  [Ve.DOCUMENT_MUST_HAVE_CORRECT_HEADING_ORDER]: wv,
  [Ve.DOCUMENT_MUST_HAVE_SEMANTIC_LISTS]: Sv,
  [Ve.DOCUMENT_MUST_HAVE_TOP_LEVEL_HEADING]: Cv
};
for (const [r, t] of Object.entries(Tv))
  Gh.set(r, t);
function Ov(r, t = 200) {
  let e;
  return (...n) => {
    e && clearTimeout(e), e = setTimeout(() => r(...n), t);
  };
}
const Av = 500, Kh = (r, t, e) => {
  let n = /* @__PURE__ */ new Map();
  for (const [o, i] of Gh.entries())
    try {
      const s = i(r, t);
      if (s.length > 0)
        for (const a of s)
          n.set(`${o}_${a.pos}`, a);
    } catch (s) {
      console.error("document validator error", s);
    }
  try {
    const o = kv(r);
    o.size > 0 && (n = new Map([...n, ...o]));
  } catch (o) {
    console.error("content validator error", o);
  }
  e(n);
}, Ev = Ov(Kh, Av), Nv = _.create({
  name: "validation",
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-t": () => {
        const r = new CustomEvent(kt.OPEN_VALIDATIONS_DIALOG, {
          bubbles: !0,
          composed: !0
        });
        return globalThis.dispatchEvent(r), !0;
      }
    };
  },
  onCreate({ editor: r }) {
    const { settings: t, updateValidationsContext: e } = this.options;
    Kh(r, t, e);
  },
  onUpdate({ editor: r }) {
    const { settings: t, updateValidationsContext: e } = this.options;
    Ev(r, t, e);
  }
}), Iv = (r) => Dh.options.levels.filter((t) => t >= r), Dv = (r, t) => [
  vy,
  uv.configure({
    placeholder: "Start met typen..."
  }),
  Fy,
  Uy,
  Dh.configure({
    levels: Iv(r.topHeadingLevel)
  }),
  by,
  Oy,
  Jy,
  pv,
  wy,
  Rh,
  Hh,
  mv,
  fv,
  Nv.configure({
    settings: r,
    updateValidationsContext: t
  })
], Rv = Ce`
  :host {
    background-color: #fff;
    display: block;
    padding-block: var(--basis-space-inline-xl);
    padding-inline: var(--basis-space-inline-xl);
    position: relative;

    --clippy-background-texture-info: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPG1hc2sgaWQ9ImN1dG91dCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPgogICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIgZmlsbD0iIzAwMCIvPgogICAgICA8Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSIzIiBmaWxsPSIjMDAwIi8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIgbWFzaz0idXJsKCNjdXRvdXQpIi8+Cjwvc3ZnPgo=');
    --clippy-background-texture-warning: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCA2IDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxkZWZzPgogICAgPG1hc2sgaWQ9ImN1dG91dCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iMSAwIDAgMCA2IDYgNiA1IiBmaWxsPSIjMDAwMDAwIi8+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCA1IDAgNiAxIDYiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDwvbWFzaz4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0iI0ZGRkZGRiIgbWFzaz0idXJsKCNjdXRvdXQpIi8+Cjwvc3ZnPg==');
    --clippy-background-texture-error: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCA2IDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxkZWZzPgogICAgPG1hc2sgaWQ9ImN1dG91dCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iNSAwIDYgMCAwIDYgMCA1IiBmaWxsPSIjMDAwMDAwIi8+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iNiA1IDYgNiA1IDYiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDwvbWFzaz4KICA8L2RlZnM+CiAgPCEtLSBDaGFuZ2UgZmlsbCB0byBkZXNpcmVkIHNvbGlkIGNvbG9yIC0tPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNGRkZGRkYiIG1hc2s9InVybCgjY3V0b3V0KSIvPgo8L3N2Zz4K');
  }

  p.is-editor-empty:first-child::before {
    color: var(--ma-color-neutral-8);
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .clippy-editor-content {
    padding-block: var(--basis-space-inline-lg);
    padding-inline: var(--basis-space-inline-lg);
  }

  .clippy-editor-content:focus-visible {
    outline-style: dashed;
    outline-color: var(--ma-color-paars-8);
    outline-offset: -1px;
  }
`;
var zv = Object.defineProperty, Pv = Object.getOwnPropertyDescriptor, Ye = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? Pv(t, e) : t, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (o = (n ? s(t, e, o) : s(o)) || o);
  return n && o && zv(t, e, o), o;
};
const Ua = "editor";
Wg();
const jv = (r) => !Number.isNaN(r) && r >= 1 && r <= 6 ? r : 1;
let ne = class extends gt {
  constructor() {
    super(...arguments), this.identifier = "clippy-editor-id", this.topHeadingLevel = 1, this.validationsContext = /* @__PURE__ */ new Map(), this.updateValidationsContext = (r) => {
      this.validationsContext = r;
    };
  }
  createEditor() {
    const r = jv(this.topHeadingLevel), t = this.contentSlot.find((n) => n instanceof HTMLDivElement)?.innerHTML || "";
    this.editor = new qm({
      content: t,
      editorProps: {
        attributes: {
          id: this.identifier,
          class: "clippy-editor-content"
        }
      },
      extensions: Dv({ topHeadingLevel: r }, this.updateValidationsContext)
    });
    const e = this.shadowRoot?.getElementById(Ua);
    e && (this.contentSlot.forEach((n) => n.remove()), this.editor.mount(e));
  }
  firstUpdated() {
    this.createEditor();
  }
  disconnectedCallback() {
    this.editor?.destroy(), super.disconnectedCallback();
  }
  render() {
    return ot`
      <clippy-toolbar></clippy-toolbar>
      <slot name="content" hidden></slot>
      <div id=${Ua}></div>
      <clippy-validations-dialog></clippy-validations-dialog>
      <clippy-validations-gutter></clippy-validations-gutter>
    `;
  }
};
ne.styles = [Rv];
Ye([
  L({ type: String })
], ne.prototype, "identifier", 2);
Ye([
  L({ attribute: "top-heading-level", reflect: !0, type: Number })
], ne.prototype, "topHeadingLevel", 2);
Ye([
  kb({ flatten: !0, slot: "content" })
], ne.prototype, "contentSlot", 2);
Ye([
  Ja({ context: Zn })
], ne.prototype, "validationsContext", 2);
Ye([
  Ja({ context: Kn })
], ne.prototype, "editor", 2);
ne = Ye([
  se("clippy-editor")
], ne);
export {
  _v as U,
  gg as b,
  pg as f,
  ug as p,
  Bv as q
};
