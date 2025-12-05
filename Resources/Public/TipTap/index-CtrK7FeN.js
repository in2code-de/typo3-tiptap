import { T as x, o as m, S as $, q as z, s as rt, D as ot, F as K, u as Rt, A as Lt, P as H, e as _, v as Vt, E as W, x as Ft, y as $t, z as Bt, B as Ht } from "./index-DHU43GOd.js";
const J = function(e) {
  for (var t = 0; ; t++)
    if (e = e.previousSibling, !e)
      return t;
}, st = function(e, t, n, r) {
  return n && (He(e, t, n, r, -1) || He(e, t, n, r, 1));
}, Wt = /^(img|br|input|textarea|hr)$/i;
function He(e, t, n, r, o) {
  for (var s; ; ) {
    if (e == n && t == r)
      return !0;
    if (t == (o < 0 ? 0 : ae(e))) {
      let i = e.parentNode;
      if (!i || i.nodeType != 1 || Ae(e) || Wt.test(e.nodeName) || e.contentEditable == "false")
        return !1;
      t = J(e) + (o < 0 ? 0 : 1), e = i;
    } else if (e.nodeType == 1) {
      let i = e.childNodes[t + (o < 0 ? -1 : 0)];
      if (i.nodeType == 1 && i.contentEditable == "false")
        if (!((s = i.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          t += o;
        else
          return !1;
      else
        e = i, t = o < 0 ? ae(e) : 0;
    } else
      return !1;
  }
}
function ae(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function qt(e, t, n) {
  for (let r = t == 0, o = t == ae(e); r || o; ) {
    if (e == n)
      return !0;
    let s = J(e);
    if (e = e.parentNode, !e)
      return !1;
    r = r && s == 0, o = o && s == ae(e);
  }
}
function Ae(e) {
  let t;
  for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode)
    ;
  return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
const it = function(e) {
  return e.focusNode && st(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function lt(e, t) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
const I = typeof navigator < "u" ? navigator : null, We = typeof document < "u" ? document : null, q = I && I.userAgent || "", xe = /Edge\/(\d+)/.exec(q), at = /MSIE \d/.exec(q), De = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(q), re = !!(at || De || xe), ct = at ? document.documentMode : De ? +De[1] : xe ? +xe[1] : 0, me = !re && /gecko\/(\d+)/i.test(q);
me && +(/Firefox\/(\d+)/.exec(q) || [0, 0])[1];
const ke = !re && /Chrome\/(\d+)/.exec(q), U = !!ke, ft = ke ? +ke[1] : 0, Z = !re && !!I && /Apple Computer/.test(I.vendor), Ie = Z && (/Mobile\/\w+/.test(q) || !!I && I.maxTouchPoints > 2), N = Ie || (I ? /Mac/.test(I.platform) : !1), Ut = I ? /Win/.test(I.platform) : !1, oe = /Android \d/.test(q), ze = !!We && "webkitFontSmoothing" in We.documentElement.style, jt = ze ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Gt(e, t = null) {
  let n = e.domSelectionRange(), r = e.state.doc;
  if (!n.focusNode)
    return null;
  let o = e.docView.nearestDesc(n.focusNode), s = o && o.size == 0, i = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (i < 0)
    return null;
  let l = r.resolve(i), a, c;
  if (it(n)) {
    for (a = i; o && !o.node; )
      o = o.parent;
    let f = o.node;
    if (o && f.isAtom && m.isSelectable(f) && o.parent && !(f.isInline && qt(n.focusNode, n.focusOffset, o.dom))) {
      let u = o.posBefore;
      c = new m(i == u ? l : r.resolve(u));
    }
  } else {
    if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let f = i, u = i;
      for (let p = 0; p < n.rangeCount; p++) {
        let h = n.getRangeAt(p);
        f = Math.min(f, e.docView.posFromDOM(h.startContainer, h.startOffset, 1)), u = Math.max(u, e.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (f < 0)
        return null;
      [a, i] = u == e.state.selection.anchor ? [u, f] : [f, u], l = r.resolve(i);
    } else
      a = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!c) {
    let f = t == "pointer" || e.state.selection.head < l.pos && !s ? 1 : -1;
    c = ut(e, d, l, f);
  }
  return c;
}
function dt(e) {
  return e.editable ? e.hasFocus() : Jt(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function Ke(e, t = !1) {
  let n = e.state.selection;
  if (_t(e, n), !!dt(e)) {
    if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && U) {
      let r = e.domSelectionRange(), o = e.domObserver.currentSelection;
      if (r.anchorNode && o.anchorNode && st(r.anchorNode, r.anchorOffset, o.anchorNode, o.anchorOffset)) {
        e.input.mouseDown.delayedSelectionSync = !0, e.domObserver.setCurSelection();
        return;
      }
    }
    if (e.domObserver.disconnectSelection(), e.cursorWrapper)
      Yt(e);
    else {
      let { anchor: r, head: o } = n, s, i;
      qe && !(n instanceof x) && (n.$from.parent.inlineContent || (s = Ue(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (i = Ue(e, n.to))), e.docView.setSelection(r, o, e, t), qe && (s && je(s), i && je(i)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Xt(e));
    }
    e.domObserver.setCurSelection(), e.domObserver.connectSelection();
  }
}
const qe = Z || U && ft < 63;
function Ue(e, t) {
  let { node: n, offset: r } = e.docView.domFromPos(t, 0), o = r < n.childNodes.length ? n.childNodes[r] : null, s = r ? n.childNodes[r - 1] : null;
  if (Z && o && o.contentEditable == "false")
    return ye(o);
  if ((!o || o.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (o)
      return ye(o);
    if (s)
      return ye(s);
  }
}
function ye(e) {
  return e.contentEditable = "true", Z && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function je(e) {
  e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null);
}
function Xt(e) {
  let t = e.dom.ownerDocument;
  t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
  let n = e.domSelectionRange(), r = n.anchorNode, o = n.anchorOffset;
  t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != o) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
      (!dt(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Yt(e) {
  let t = e.domSelection();
  if (!t)
    return;
  let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? t.collapse(n.parentNode, J(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && re && ct <= 11 && (n.disabled = !0, n.disabled = !1);
}
function _t(e, t) {
  if (t instanceof m) {
    let n = e.docView.descAt(t.from);
    n != e.lastSelectedViewDesc && (Ge(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
  } else
    Ge(e);
}
function Ge(e) {
  e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0);
}
function ut(e, t, n, r) {
  return e.someProp("createSelectionBetween", (o) => o(e, t, n)) || x.between(t, n, r);
}
function Jt(e) {
  let t = e.domSelectionRange();
  if (!t.anchorNode)
    return !1;
  try {
    return e.dom.contains(t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode));
  } catch {
    return !1;
  }
}
function Ne(e, t) {
  let { $anchor: n, $head: r } = e.selection, o = t > 0 ? n.max(r) : n.min(r), s = o.parent.inlineContent ? o.depth ? e.doc.resolve(t > 0 ? o.after() : o.before()) : null : o;
  return s && $.findFrom(s, t);
}
function R(e, t) {
  return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function Xe(e, t, n) {
  let r = e.state.selection;
  if (r instanceof x)
    if (n.indexOf("s") > -1) {
      let { $head: o } = r, s = o.textOffset ? null : t < 0 ? o.nodeBefore : o.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let i = e.state.doc.resolve(o.pos + s.nodeSize * (t < 0 ? -1 : 1));
      return R(e, new x(r.$anchor, i));
    } else if (r.empty) {
      if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
        let o = Ne(e.state, t);
        return o && o instanceof m ? R(e, o) : !1;
      } else if (!(N && n.indexOf("m") > -1)) {
        let o = r.$head, s = o.textOffset ? null : t < 0 ? o.nodeBefore : o.nodeAfter, i;
        if (!s || s.isText)
          return !1;
        let l = t < 0 ? o.pos - s.nodeSize : o.pos;
        return s.isAtom || (i = e.docView.descAt(l)) && !i.contentDOM ? m.isSelectable(s) ? R(e, new m(t < 0 ? e.state.doc.resolve(o.pos - s.nodeSize) : o)) : ze ? R(e, new x(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof m && r.node.isInline)
      return R(e, new x(t > 0 ? r.$to : r.$from));
    {
      let o = Ne(e.state, t);
      return o ? R(e, o) : !1;
    }
  }
}
function ce(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function ee(e, t) {
  let n = e.pmViewDesc;
  return n && n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR");
}
function Q(e, t) {
  return t < 0 ? Zt(e) : Qt(e);
}
function Zt(e) {
  let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
  if (!n)
    return;
  let o, s, i = !1;
  for (me && n.nodeType == 1 && r < ce(n) && ee(n.childNodes[r], -1) && (i = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (ee(l, -1))
          o = n, s = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (pt(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && ee(l, -1); )
          o = n.parentNode, s = J(l), l = l.previousSibling;
        if (l)
          n = l, r = ce(n);
        else {
          if (n = n.parentNode, n == e.dom)
            break;
          r = 0;
        }
      }
    }
  i ? Me(e, n, r) : o && Me(e, o, s);
}
function Qt(e) {
  let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
  if (!n)
    return;
  let o = ce(n), s, i;
  for (; ; )
    if (r < o) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (ee(l, 1))
        s = n, i = ++r;
      else
        break;
    } else {
      if (pt(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && ee(l, 1); )
          s = l.parentNode, i = J(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, o = ce(n);
        else {
          if (n = n.parentNode, n == e.dom)
            break;
          r = o = 0;
        }
      }
    }
  s && Me(e, s, i);
}
function pt(e) {
  let t = e.pmViewDesc;
  return t && t.node && t.node.isBlock;
}
function wt(e, t) {
  for (; e && t == e.childNodes.length && !Ae(e); )
    t = J(e) + 1, e = e.parentNode;
  for (; e && t < e.childNodes.length; ) {
    let n = e.childNodes[t];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    e = n, t = 0;
  }
}
function vt(e, t) {
  for (; e && !t && !Ae(e); )
    t = J(e), e = e.parentNode;
  for (; e && t; ) {
    let n = e.childNodes[t - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    e = n, t = e.childNodes.length;
  }
}
function Me(e, t, n) {
  if (t.nodeType != 3) {
    let s, i;
    (i = wt(t, n)) ? (t = i, n = 0) : (s = vt(t, n)) && (t = s, n = s.nodeValue.length);
  }
  let r = e.domSelection();
  if (!r)
    return;
  if (it(r)) {
    let s = document.createRange();
    s.setEnd(t, n), s.setStart(t, n), r.removeAllRanges(), r.addRange(s);
  } else r.extend && r.extend(t, n);
  e.domObserver.setCurSelection();
  let { state: o } = e;
  setTimeout(() => {
    e.state == o && Ke(e);
  }, 50);
}
function Ye(e, t) {
  let n = e.state.doc.resolve(t);
  if (!(U || Ut) && n.parent.inlineContent) {
    let o = e.coordsAtPos(t);
    if (t > n.start()) {
      let s = e.coordsAtPos(t - 1), i = (s.top + s.bottom) / 2;
      if (i > o.top && i < o.bottom && Math.abs(s.left - o.left) > 1)
        return s.left < o.left ? "ltr" : "rtl";
    }
    if (t < n.end()) {
      let s = e.coordsAtPos(t + 1), i = (s.top + s.bottom) / 2;
      if (i > o.top && i < o.bottom && Math.abs(s.left - o.left) > 1)
        return s.left > o.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(e.dom).direction == "rtl" ? "rtl" : "ltr";
}
function _e(e, t, n) {
  let r = e.state.selection;
  if (r instanceof x && !r.empty || n.indexOf("s") > -1 || N && n.indexOf("m") > -1)
    return !1;
  let { $from: o, $to: s } = r;
  if (!o.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
    let i = Ne(e.state, t);
    if (i && i instanceof m)
      return R(e, i);
  }
  if (!o.parent.inlineContent) {
    let i = t < 0 ? o : s, l = r instanceof Lt ? $.near(i, t) : $.findFrom(i, t);
    return l ? R(e, l) : !1;
  }
  return !1;
}
function Je(e, t) {
  if (!(e.state.selection instanceof x))
    return !0;
  let { $head: n, $anchor: r, empty: o } = e.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!o)
    return !1;
  if (e.endOfTextblock(t > 0 ? "forward" : "backward"))
    return !0;
  let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
  if (s && !s.isText) {
    let i = e.state.tr;
    return t < 0 ? i.delete(n.pos - s.nodeSize, n.pos) : i.delete(n.pos, n.pos + s.nodeSize), e.dispatch(i), !0;
  }
  return !1;
}
function Ze(e, t, n) {
  e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function en(e) {
  if (!Z || e.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
  if (t && t.nodeType == 1 && n == 0 && t.firstChild && t.firstChild.contentEditable == "false") {
    let r = t.firstChild;
    Ze(e, r, "true"), setTimeout(() => Ze(e, r, "false"), 20);
  }
  return !1;
}
function tn(e) {
  let t = "";
  return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function nn(e, t) {
  let n = t.keyCode, r = tn(t);
  if (n == 8 || N && n == 72 && r == "c")
    return Je(e, -1) || Q(e, -1);
  if (n == 46 && !t.shiftKey || N && n == 68 && r == "c")
    return Je(e, 1) || Q(e, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || N && n == 66 && r == "c") {
    let o = n == 37 ? Ye(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Xe(e, o, r) || Q(e, o);
  } else if (n == 39 || N && n == 70 && r == "c") {
    let o = n == 39 ? Ye(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Xe(e, o, r) || Q(e, o);
  } else {
    if (n == 38 || N && n == 80 && r == "c")
      return _e(e, -1, r) || Q(e, -1);
    if (n == 40 || N && n == 78 && r == "c")
      return en(e) || _e(e, 1, r) || Q(e, 1);
    if (r == (N ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function ht(e, t) {
  e.someProp("transformCopied", (p) => {
    t = p(t, e);
  });
  let n = [], { content: r, openStart: o, openEnd: s } = t;
  for (; o > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    o--, s--;
    let p = r.firstChild;
    n.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
  }
  let i = e.someProp("clipboardSerializer") || ot.fromSchema(e.state.schema), l = St(), a = l.createElement("div");
  a.appendChild(i.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, f = 0;
  for (; c && c.nodeType == 1 && (d = Ct[c.nodeName.toLowerCase()]); ) {
    for (let p = d.length - 1; p >= 0; p--) {
      let h = l.createElement(d[p]);
      for (; a.firstChild; )
        h.appendChild(a.firstChild);
      a.appendChild(h), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${o} ${s}${f ? ` -${f}` : ""} ${JSON.stringify(n)}`);
  let u = e.someProp("clipboardTextSerializer", (p) => p(t, e)) || t.content.textBetween(0, t.content.size, `

`);
  return { dom: a, text: u, slice: t };
}
function mt(e, t, n, r, o) {
  let s = o.parent.type.spec.code, i, l;
  if (!n && !t)
    return null;
  let a = !!t && (r || s || !n);
  if (a) {
    if (e.someProp("transformPastedText", (u) => {
      t = u(t, s || r, e);
    }), s)
      return l = new z(K.from(e.state.schema.text(t.replace(/\r\n?/g, `
`))), 0, 0), e.someProp("transformPasted", (u) => {
        l = u(l, e, !0);
      }), l;
    let f = e.someProp("clipboardTextParser", (u) => u(t, o, r, e));
    if (f)
      l = f;
    else {
      let u = o.marks(), { schema: p } = e.state, h = ot.fromSchema(p);
      i = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((E) => {
        let C = i.appendChild(document.createElement("p"));
        E && C.appendChild(h.serializeNode(p.text(E, u)));
      });
    }
  } else
    e.someProp("transformPastedHTML", (f) => {
      n = f(n, e);
    }), i = ln(n), ze && an(i);
  let c = i && i.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let f = +d[3]; f > 0; f--) {
      let u = i.firstChild;
      for (; u && u.nodeType != 1; )
        u = u.nextSibling;
      if (!u)
        break;
      i = u;
    }
  if (l || (l = (e.someProp("clipboardParser") || e.someProp("domParser") || Rt.fromSchema(e.state.schema)).parseSlice(i, {
    preserveWhitespace: !!(a || d),
    context: o,
    ruleFromNode(u) {
      return u.nodeName == "BR" && !u.nextSibling && u.parentNode && !rn.test(u.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = cn(Qe(l, +d[1], +d[2]), d[4]);
  else if (l = z.maxOpen(on(l.content, o), !0), l.openStart || l.openEnd) {
    let f = 0, u = 0;
    for (let p = l.content.firstChild; f < l.openStart && !p.type.spec.isolating; f++, p = p.firstChild)
      ;
    for (let p = l.content.lastChild; u < l.openEnd && !p.type.spec.isolating; u++, p = p.lastChild)
      ;
    l = Qe(l, f, u);
  }
  return e.someProp("transformPasted", (f) => {
    l = f(l, e, a);
  }), l;
}
const rn = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function on(e, t) {
  if (e.childCount < 2)
    return e;
  for (let n = t.depth; n >= 0; n--) {
    let o = t.node(n).contentMatchAt(t.index(n)), s, i = [];
    if (e.forEach((l) => {
      if (!i)
        return;
      let a = o.findWrapping(l.type), c;
      if (!a)
        return i = null;
      if (c = i.length && s.length && yt(a, s, l, i[i.length - 1], 0))
        i[i.length - 1] = c;
      else {
        i.length && (i[i.length - 1] = bt(i[i.length - 1], s.length));
        let d = gt(l, a);
        i.push(d), o = o.matchType(d.type), s = a;
      }
    }), i)
      return K.from(i);
  }
  return e;
}
function gt(e, t, n = 0) {
  for (let r = t.length - 1; r >= n; r--)
    e = t[r].create(null, K.from(e));
  return e;
}
function yt(e, t, n, r, o) {
  if (o < e.length && o < t.length && e[o] == t[o]) {
    let s = yt(e, t, n, r.lastChild, o + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(o == e.length - 1 ? n.type : e[o + 1]))
      return r.copy(r.content.append(K.from(gt(n, e, o + 1))));
  }
}
function bt(e, t) {
  if (t == 0)
    return e;
  let n = e.content.replaceChild(e.childCount - 1, bt(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(K.empty, !0);
  return e.copy(n.append(r));
}
function Oe(e, t, n, r, o, s) {
  let i = t < 0 ? e.firstChild : e.lastChild, l = i.content;
  return e.childCount > 1 && (s = 0), o < r - 1 && (l = Oe(l, t, n, r, o + 1, s)), o >= n && (l = t < 0 ? i.contentMatchAt(0).fillBefore(l, s <= o).append(l) : l.append(i.contentMatchAt(i.childCount).fillBefore(K.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, i.copy(l));
}
function Qe(e, t, n) {
  return t < e.openStart && (e = new z(Oe(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new z(Oe(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
const Ct = {
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
let we = null;
function St() {
  return we || (we = document.implementation.createHTMLDocument("title"));
}
let be = null;
function sn(e) {
  let t = window.trustedTypes;
  return t ? (be || (be = t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), be.createHTML(e)) : e;
}
function ln(e) {
  let t = /^(\s*<meta [^>]*>)*/.exec(e);
  t && (e = e.slice(t[0].length));
  let n = St().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(e), o;
  if ((o = r && Ct[r[1].toLowerCase()]) && (e = o.map((s) => "<" + s + ">").join("") + e + o.map((s) => "</" + s + ">").reverse().join("")), n.innerHTML = sn(e), o)
    for (let s = 0; s < o.length; s++)
      n = n.querySelector(o[s]) || n;
  return n;
}
function an(e) {
  let t = e.querySelectorAll(U ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
  }
}
function cn(e, t) {
  if (!e.size)
    return e;
  let n = e.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(t);
  } catch {
    return e;
  }
  let { content: o, openStart: s, openEnd: i } = e;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    o = K.from(a.create(r[l + 1], o)), s++, i++;
  }
  return new z(o, s, i);
}
const P = {}, k = {};
function V(e, t) {
  e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
k.keydown = (e, t) => {
  let n = t;
  if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Tt(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !(oe && U && n.keyCode == 13)))
    if (n.keyCode != 229 && e.domObserver.forceFlush(), Ie && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      e.input.lastIOSEnter = r, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        e.input.lastIOSEnter == r && (e.someProp("handleKeyDown", (o) => o(e, lt(13, "Enter"))), e.input.lastIOSEnter = 0);
      }, 200);
    } else e.someProp("handleKeyDown", (r) => r(e, n)) || nn(e, n) ? n.preventDefault() : V(e, "key");
};
k.keyup = (e, t) => {
  t.keyCode == 16 && (e.input.shiftKey = !1);
};
k.keypress = (e, t) => {
  let n = t;
  if (Tt(e, n) || !n.charCode || n.ctrlKey && !n.altKey || N && n.metaKey)
    return;
  if (e.someProp("handleKeyPress", (o) => o(e, n))) {
    n.preventDefault();
    return;
  }
  let r = e.state.selection;
  if (!(r instanceof x) || !r.$from.sameParent(r.$to)) {
    let o = String.fromCharCode(n.charCode), s = () => e.state.tr.insertText(o).scrollIntoView();
    !/[\r\n]/.test(o) && !e.someProp("handleTextInput", (i) => i(e, r.$from.pos, r.$to.pos, o, s)) && e.dispatch(s()), n.preventDefault();
  }
};
function ge(e) {
  return { left: e.clientX, top: e.clientY };
}
function fn(e, t) {
  let n = t.x - e.clientX, r = t.y - e.clientY;
  return n * n + r * r < 100;
}
function Re(e, t, n, r, o) {
  if (r == -1)
    return !1;
  let s = e.state.doc.resolve(r);
  for (let i = s.depth + 1; i > 0; i--)
    if (e.someProp(t, (l) => i > s.depth ? l(e, n, s.nodeAfter, s.before(i), o, !0) : l(e, n, s.node(i), s.before(i), o, !1)))
      return !0;
  return !1;
}
function v(e, t, n) {
  if (e.focused || e.focus(), e.state.selection.eq(t))
    return;
  let r = e.state.tr.setSelection(t);
  r.setMeta("pointer", !0), e.dispatch(r);
}
function dn(e, t) {
  if (t == -1)
    return !1;
  let n = e.state.doc.resolve(t), r = n.nodeAfter;
  return r && r.isAtom && m.isSelectable(r) ? (v(e, new m(n)), !0) : !1;
}
function un(e, t) {
  if (t == -1)
    return !1;
  let n = e.state.selection, r, o;
  n instanceof m && (r = n.node);
  let s = e.state.doc.resolve(t);
  for (let i = s.depth + 1; i > 0; i--) {
    let l = i > s.depth ? s.nodeAfter : s.node(i);
    if (m.isSelectable(l)) {
      r && n.$from.depth > 0 && i >= n.$from.depth && s.before(n.$from.depth + 1) == n.$from.pos ? o = s.before(n.$from.depth) : o = s.before(i);
      break;
    }
  }
  return o != null ? (v(e, m.create(e.state.doc, o)), !0) : !1;
}
function pn(e, t, n, r, o) {
  return Re(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (s) => s(e, t, r)) || (o ? un(e, n) : dn(e, n));
}
function hn(e, t, n, r) {
  return Re(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (o) => o(e, t, r));
}
function mn(e, t, n, r) {
  return Re(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (o) => o(e, t, r)) || gn(e, n, r);
}
function gn(e, t, n) {
  if (n.button != 0)
    return !1;
  let r = e.state.doc;
  if (t == -1)
    return r.inlineContent ? (v(e, x.create(r, 0, r.content.size)), !0) : !1;
  let o = r.resolve(t);
  for (let s = o.depth + 1; s > 0; s--) {
    let i = s > o.depth ? o.nodeAfter : o.node(s), l = o.before(s);
    if (i.inlineContent)
      v(e, x.create(r, l + 1, l + 1 + i.content.size));
    else if (m.isSelectable(i))
      v(e, m.create(r, l));
    else
      continue;
    return !0;
  }
}
function Le(e) {
  return fe(e);
}
const Et = N ? "metaKey" : "ctrlKey";
P.mousedown = (e, t) => {
  let n = t;
  e.input.shiftKey = n.shiftKey;
  let r = Le(e), o = Date.now(), s = "singleClick";
  o - e.input.lastClick.time < 500 && fn(n, e.input.lastClick) && !n[Et] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? s = "doubleClick" : e.input.lastClick.type == "doubleClick" && (s = "tripleClick")), e.input.lastClick = { time: o, x: n.clientX, y: n.clientY, type: s, button: n.button };
  let i = e.posAtCoords(ge(n));
  i && (s == "singleClick" ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new yn(e, i, n, !!r)) : (s == "doubleClick" ? hn : mn)(e, i.pos, i.inside, n) ? n.preventDefault() : V(e, "pointer"));
};
class yn {
  constructor(t, n, r, o) {
    this.view = t, this.pos = n, this.event = r, this.flushed = o, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!r[Et], this.allowDefault = r.shiftKey;
    let s, i;
    if (n.inside > -1)
      s = t.state.doc.nodeAt(n.inside), i = n.inside;
    else {
      let d = t.state.doc.resolve(n.pos);
      s = d.parent, i = d.depth ? d.before() : 0;
    }
    const l = o ? null : r.target, a = l ? t.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = t.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof m && c.from <= i && c.to > i) && (this.mightDrag = {
      node: s,
      pos: i,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && me && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), V(t, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ke(this.view)), this.view.input.mouseDown = null;
  }
  up(t) {
    if (this.done(), !this.view.dom.contains(t.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(ge(t))), this.updateAllowDefault(t), this.allowDefault || !n ? V(this.view, "pointer") : pn(this.view, n.pos, n.inside, t, this.selectNode) ? t.preventDefault() : t.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Z && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    U && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (v(this.view, $.near(this.view.state.doc.resolve(n.pos))), t.preventDefault()) : V(this.view, "pointer");
  }
  move(t) {
    this.updateAllowDefault(t), V(this.view, "pointer"), t.buttons == 0 && this.done();
  }
  updateAllowDefault(t) {
    !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0);
  }
}
P.touchstart = (e) => {
  e.input.lastTouch = Date.now(), Le(e), V(e, "pointer");
};
P.touchmove = (e) => {
  e.input.lastTouch = Date.now(), V(e, "pointer");
};
P.contextmenu = (e) => Le(e);
function Tt(e, t) {
  return e.composing ? !0 : Z && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
const bn = oe ? 5e3 : -1;
k.compositionstart = k.compositionupdate = (e) => {
  if (!e.composing) {
    e.domObserver.flush();
    let { state: t } = e, n = t.selection.$to;
    if (t.selection instanceof x && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      e.markCursor = e.state.storedMarks || n.marks(), fe(e, !0), e.markCursor = null;
    else if (fe(e, !t.selection.empty), me && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = e.domSelectionRange();
      for (let o = r.focusNode, s = r.focusOffset; o && o.nodeType == 1 && s != 0; ) {
        let i = s < 0 ? o.lastChild : o.childNodes[s - 1];
        if (!i)
          break;
        if (i.nodeType == 3) {
          let l = e.domSelection();
          l && l.collapse(i, i.nodeValue.length);
          break;
        } else
          o = i, s = -1;
      }
    }
    e.input.composing = !0;
  }
  xt(e, bn);
};
k.compositionend = (e, t) => {
  e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, xt(e, 20));
};
function xt(e, t) {
  clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => fe(e), t));
}
function Cn(e) {
  for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Sn()); e.input.compositionNodes.length > 0; )
    e.input.compositionNodes.pop().markParentsDirty();
}
function Sn() {
  let e = document.createEvent("Event");
  return e.initEvent("event", !0, !0), e.timeStamp;
}
function fe(e, t = !1) {
  if (!(oe && e.domObserver.flushingSoon >= 0)) {
    if (e.domObserver.forceFlush(), Cn(e), t || e.docView && e.docView.dirty) {
      let n = Gt(e), r = e.state.selection;
      return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
    }
    return !1;
  }
}
function En(e, t) {
  if (!e.dom.parentNode)
    return;
  let n = e.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), o = document.createRange();
  o.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(o), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), e.focus();
  }, 50);
}
const te = re && ct < 15 || Ie && jt < 604;
P.copy = k.cut = (e, t) => {
  let n = t, r = e.state.selection, o = n.type == "cut";
  if (r.empty)
    return;
  let s = te ? null : n.clipboardData, i = r.content(), { dom: l, text: a } = ht(e, i);
  s ? (n.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : En(e, l), o && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Tn(e) {
  return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function xn(e, t) {
  if (!e.dom.parentNode)
    return;
  let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let o = e.input.shiftKey && e.input.lastKeyCode != 45;
  setTimeout(() => {
    e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Pe(e, r.value, null, o, t) : Pe(e, r.textContent, r.innerHTML, o, t);
  }, 50);
}
function Pe(e, t, n, r, o) {
  let s = mt(e, t, n, r, e.state.selection.$from);
  if (e.someProp("handlePaste", (a) => a(e, o, s || z.empty)))
    return !0;
  if (!s)
    return !1;
  let i = Tn(s), l = i ? e.state.tr.replaceSelectionWith(i, r) : e.state.tr.replaceSelection(s);
  return e.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Dt(e) {
  let t = e.getData("text/plain") || e.getData("Text");
  if (t)
    return t;
  let n = e.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
k.paste = (e, t) => {
  let n = t;
  if (e.composing && !oe)
    return;
  let r = te ? null : n.clipboardData, o = e.input.shiftKey && e.input.lastKeyCode != 45;
  r && Pe(e, Dt(r), r.getData("text/html"), o, n) ? n.preventDefault() : xn(e, n);
};
class Dn {
  constructor(t, n, r) {
    this.slice = t, this.move = n, this.node = r;
  }
}
const kn = N ? "altKey" : "ctrlKey";
function kt(e, t) {
  let n = e.someProp("dragCopies", (r) => !r(t));
  return n ?? !t[kn];
}
P.dragstart = (e, t) => {
  let n = t, r = e.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let o = e.state.selection, s = o.empty ? null : e.posAtCoords(ge(n)), i;
  if (!(s && s.pos >= o.from && s.pos <= (o instanceof m ? o.to - 1 : o.to))) {
    if (r && r.mightDrag)
      i = m.create(e.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let f = e.docView.nearestDesc(n.target, !0);
      f && f.node.type.spec.draggable && f != e.docView && (i = m.create(e.state.doc, f.posBefore));
    }
  }
  let l = (i || e.state.selection).content(), { dom: a, text: c, slice: d } = ht(e, l);
  (!n.dataTransfer.files.length || !U || ft > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(te ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", te || n.dataTransfer.setData("text/plain", c), e.dragging = new Dn(d, kt(e, n), i);
};
P.dragend = (e) => {
  let t = e.dragging;
  window.setTimeout(() => {
    e.dragging == t && (e.dragging = null);
  }, 50);
};
k.dragover = k.dragenter = (e, t) => t.preventDefault();
k.drop = (e, t) => {
  let n = t, r = e.dragging;
  if (e.dragging = null, !n.dataTransfer)
    return;
  let o = e.posAtCoords(ge(n));
  if (!o)
    return;
  let s = e.state.doc.resolve(o.pos), i = r && r.slice;
  i ? e.someProp("transformPasted", (h) => {
    i = h(i, e, !1);
  }) : i = mt(e, Dt(n.dataTransfer), te ? null : n.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && kt(e, n));
  if (e.someProp("handleDrop", (h) => h(e, n, i || z.empty, l))) {
    n.preventDefault();
    return;
  }
  if (!i)
    return;
  n.preventDefault();
  let a = i ? rt(e.state.doc, s.pos, i) : s.pos;
  a == null && (a = s.pos);
  let c = e.state.tr;
  if (l) {
    let { node: h } = r;
    h ? h.replace(c) : c.deleteSelection();
  }
  let d = c.mapping.map(a), f = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1, u = c.doc;
  if (f ? c.replaceRangeWith(d, d, i.content.firstChild) : c.replaceRange(d, d, i), c.doc.eq(u))
    return;
  let p = c.doc.resolve(d);
  if (f && m.isSelectable(i.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(i.content.firstChild))
    c.setSelection(new m(p));
  else {
    let h = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((E, C, M, se) => h = se), c.setSelection(ut(e, p, c.doc.resolve(h)));
  }
  e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
};
P.focus = (e) => {
  e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(() => {
    e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && Ke(e);
  }, 20));
};
P.blur = (e, t) => {
  let n = t;
  e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1);
};
P.beforeinput = (e, t) => {
  if (U && oe && t.inputType == "deleteContentBackward") {
    e.domObserver.flushSoon();
    let { domChangeCount: r } = e.input;
    setTimeout(() => {
      if (e.input.domChangeCount != r || (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (s) => s(e, lt(8, "Backspace")))))
        return;
      let { $cursor: o } = e.state.selection;
      o && o.pos > 0 && e.dispatch(e.state.tr.delete(o.pos - 1, o.pos).scrollIntoView());
    }, 50);
  }
};
for (let e in k)
  P[e] = k[e];
function ne(e, t) {
  if (e == t)
    return !0;
  for (let n in e)
    if (e[n] !== t[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
class de {
  constructor(t, n) {
    this.toDOM = t, this.spec = n || G, this.side = this.spec.side || 0;
  }
  map(t, n, r, o) {
    let { pos: s, deleted: i } = t.mapResult(n.from + o, this.side < 0 ? -1 : 1);
    return i ? null : new D(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(t) {
    return this == t || t instanceof de && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && ne(this.spec, t.spec));
  }
  destroy(t) {
    this.spec.destroy && this.spec.destroy(t);
  }
}
class F {
  constructor(t, n) {
    this.attrs = t, this.spec = n || G;
  }
  map(t, n, r, o) {
    let s = t.map(n.from + o, this.spec.inclusiveStart ? -1 : 1) - r, i = t.map(n.to + o, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= i ? null : new D(s, i, this);
  }
  valid(t, n) {
    return n.from < n.to;
  }
  eq(t) {
    return this == t || t instanceof F && ne(this.attrs, t.attrs) && ne(this.spec, t.spec);
  }
  static is(t) {
    return t.type instanceof F;
  }
  destroy() {
  }
}
class Ve {
  constructor(t, n) {
    this.attrs = t, this.spec = n || G;
  }
  map(t, n, r, o) {
    let s = t.mapResult(n.from + o, 1);
    if (s.deleted)
      return null;
    let i = t.mapResult(n.to + o, -1);
    return i.deleted || i.pos <= s.pos ? null : new D(s.pos - r, i.pos - r, this);
  }
  valid(t, n) {
    let { index: r, offset: o } = t.content.findIndex(n.from), s;
    return o == n.from && !(s = t.child(r)).isText && o + s.nodeSize == n.to;
  }
  eq(t) {
    return this == t || t instanceof Ve && ne(this.attrs, t.attrs) && ne(this.spec, t.spec);
  }
  destroy() {
  }
}
class D {
  /**
  @internal
  */
  constructor(t, n, r) {
    this.from = t, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(t, n) {
    return new D(t, n, this.type);
  }
  /**
  @internal
  */
  eq(t, n = 0) {
    return this.type.eq(t.type) && this.from + n == t.from && this.to + n == t.to;
  }
  /**
  @internal
  */
  map(t, n, r) {
    return this.type.map(t, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(t, n, r) {
    return new D(t, t, new de(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(t, n, r, o) {
    return new D(t, n, new F(r, o));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(t, n, r, o) {
    return new D(t, n, new Ve(r, o));
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
    return this.type instanceof F;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof de;
  }
}
const w = [], G = {};
class g {
  /**
  @internal
  */
  constructor(t, n) {
    this.local = t.length ? t : w, this.children = n.length ? n : w;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(t, n) {
    return n.length ? ue(n, t, 0, G) : T;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(t, n, r) {
    let o = [];
    return this.findInner(t ?? 0, n ?? 1e9, o, 0, r), o;
  }
  findInner(t, n, r, o, s) {
    for (let i = 0; i < this.local.length; i++) {
      let l = this.local[i];
      l.from <= n && l.to >= t && (!s || s(l.spec)) && r.push(l.copy(l.from + o, l.to + o));
    }
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] < n && this.children[i + 1] > t) {
        let l = this.children[i] + 1;
        this.children[i + 2].findInner(t - l, n - l, r, o + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(t, n, r) {
    return this == T || t.maps.length == 0 ? this : this.mapInner(t, n, 0, 0, r || G);
  }
  /**
  @internal
  */
  mapInner(t, n, r, o, s) {
    let i;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(t, r, o);
      a && a.type.valid(n, a) ? (i || (i = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? Nn(this.children, i || [], t, n, r, o, s) : i ? new g(i.sort(X), w) : T;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(t, n) {
    return n.length ? this == T ? g.create(t, n) : this.addInner(t, n, 0) : this;
  }
  addInner(t, n, r) {
    let o, s = 0;
    t.forEach((l, a) => {
      let c = a + r, d;
      if (d = Mt(n, l, c)) {
        for (o || (o = this.children.slice()); s < o.length && o[s] < a; )
          s += 3;
        o[s] == a ? o[s + 2] = o[s + 2].addInner(l, d, c + 1) : o.splice(s, 0, a, a + l.nodeSize, ue(d, l, c + 1, G)), s += 3;
      }
    });
    let i = Nt(s ? Ot(n) : n, -r);
    for (let l = 0; l < i.length; l++)
      i[l].type.valid(t, i[l]) || i.splice(l--, 1);
    return new g(i.length ? this.local.concat(i).sort(X) : this.local, o || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(t) {
    return t.length == 0 || this == T ? this : this.removeInner(t, 0);
  }
  removeInner(t, n) {
    let r = this.children, o = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let i, l = r[s] + n, a = r[s + 1] + n;
      for (let d = 0, f; d < t.length; d++)
        (f = t[d]) && f.from > l && f.to < a && (t[d] = null, (i || (i = [])).push(f));
      if (!i)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(i, l + 1);
      c != T ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (o.length) {
      for (let s = 0, i; s < t.length; s++)
        if (i = t[s])
          for (let l = 0; l < o.length; l++)
            o[l].eq(i, n) && (o == this.local && (o = this.local.slice()), o.splice(l--, 1));
    }
    return r == this.children && o == this.local ? this : o.length || r.length ? new g(o, r) : T;
  }
  forChild(t, n) {
    if (this == T)
      return this;
    if (n.isLeaf)
      return g.empty;
    let r, o;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= t) {
        this.children[l] == t && (r = this.children[l + 2]);
        break;
      }
    let s = t + 1, i = s + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < i && a.to > s && a.type instanceof F) {
        let c = Math.max(s, a.from) - s, d = Math.min(i, a.to) - s;
        c < d && (o || (o = [])).push(a.copy(c, d));
      }
    }
    if (o) {
      let l = new g(o.sort(X), w);
      return r ? new j([l, r]) : l;
    }
    return r || T;
  }
  /**
  @internal
  */
  eq(t) {
    if (this == t)
      return !0;
    if (!(t instanceof g) || this.local.length != t.local.length || this.children.length != t.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(t.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != t.children[n] || this.children[n + 1] != t.children[n + 1] || !this.children[n + 2].eq(t.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(t) {
    return Fe(this.localsInner(t));
  }
  /**
  @internal
  */
  localsInner(t) {
    if (this == T)
      return w;
    if (t.inlineContent || !this.local.some(F.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof F || n.push(this.local[r]);
    return n;
  }
  forEachSet(t) {
    t(this);
  }
}
g.empty = new g([], []);
g.removeOverlap = Fe;
const T = g.empty;
class j {
  constructor(t) {
    this.members = t;
  }
  map(t, n) {
    const r = this.members.map((o) => o.map(t, n, G));
    return j.from(r);
  }
  forChild(t, n) {
    if (n.isLeaf)
      return g.empty;
    let r = [];
    for (let o = 0; o < this.members.length; o++) {
      let s = this.members[o].forChild(t, n);
      s != T && (s instanceof j ? r = r.concat(s.members) : r.push(s));
    }
    return j.from(r);
  }
  eq(t) {
    if (!(t instanceof j) || t.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(t.members[n]))
        return !1;
    return !0;
  }
  locals(t) {
    let n, r = !0;
    for (let o = 0; o < this.members.length; o++) {
      let s = this.members[o].localsInner(t);
      if (s.length)
        if (!n)
          n = s;
        else {
          r && (n = n.slice(), r = !1);
          for (let i = 0; i < s.length; i++)
            n.push(s[i]);
        }
    }
    return n ? Fe(r ? n : n.sort(X)) : w;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(t) {
    switch (t.length) {
      case 0:
        return T;
      case 1:
        return t[0];
      default:
        return new j(t.every((n) => n instanceof g) ? t : t.reduce((n, r) => n.concat(r instanceof g ? r : r.members), []));
    }
  }
  forEachSet(t) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(t);
  }
}
function Nn(e, t, n, r, o, s, i) {
  let l = e.slice();
  for (let c = 0, d = s; c < n.maps.length; c++) {
    let f = 0;
    n.maps[c].forEach((u, p, h, E) => {
      let C = E - h - (p - u);
      for (let M = 0; M < l.length; M += 3) {
        let se = l[M + 1];
        if (se < 0 || u > se + d - f)
          continue;
        let Be = l[M] + d - f;
        p >= Be ? l[M + 1] = u <= Be ? -2 : -1 : u >= d && C && (l[M] += C, l[M + 1] += C);
      }
      f += C;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(e[c] + s), f = d - o;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let u = n.map(e[c + 1] + s, -1), p = u - o, { index: h, offset: E } = r.content.findIndex(f), C = r.maybeChild(h);
      if (C && E == f && E + C.nodeSize == p) {
        let M = l[c + 2].mapInner(n, C, d + 1, e[c] + s + 1, i);
        M != T ? (l[c] = f, l[c + 1] = p, l[c + 2] = M) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Mn(l, e, t, n, o, s, i), d = ue(c, r, 0, i);
    t = d.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, u = 0; f < d.children.length; f += 3) {
      let p = d.children[f];
      for (; u < l.length && l[u] < p; )
        u += 3;
      l.splice(u, 0, d.children[f], d.children[f + 1], d.children[f + 2]);
    }
  }
  return new g(t.sort(X), l);
}
function Nt(e, t) {
  if (!t || !e.length)
    return e;
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    n.push(new D(o.from + t, o.to + t, o.type));
  }
  return n;
}
function Mn(e, t, n, r, o, s, i) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let f = a.local[d].map(r, o, c);
      f ? n.push(f) : i.onRemove && i.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < e.length; a += 3)
    e[a + 1] == -1 && l(e[a + 2], t[a] + s + 1);
  return n;
}
function Mt(e, t, n) {
  if (t.isLeaf)
    return null;
  let r = n + t.nodeSize, o = null;
  for (let s = 0, i; s < e.length; s++)
    (i = e[s]) && i.from > n && i.to < r && ((o || (o = [])).push(i), e[s] = null);
  return o;
}
function Ot(e) {
  let t = [];
  for (let n = 0; n < e.length; n++)
    e[n] != null && t.push(e[n]);
  return t;
}
function ue(e, t, n, r) {
  let o = [], s = !1;
  t.forEach((l, a) => {
    let c = Mt(e, l, a + n);
    if (c) {
      s = !0;
      let d = ue(c, l, n + a + 1, r);
      d != T && o.push(a, a + l.nodeSize, d);
    }
  });
  let i = Nt(s ? Ot(e) : e, -n).sort(X);
  for (let l = 0; l < i.length; l++)
    i[l].type.valid(t, i[l]) || (r.onRemove && r.onRemove(i[l].spec), i.splice(l--, 1));
  return i.length || o.length ? new g(i, o) : T;
}
function X(e, t) {
  return e.from - t.from || e.to - t.to;
}
function Fe(e) {
  let t = e;
  for (let n = 0; n < t.length - 1; n++) {
    let r = t[n];
    if (r.from != r.to)
      for (let o = n + 1; o < t.length; o++) {
        let s = t[o];
        if (s.from == r.from) {
          s.to != r.to && (t == e && (t = e.slice()), t[o] = s.copy(s.from, r.to), ve(t, o + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, s.from), ve(t, o, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return t;
}
function ve(e, t, n) {
  for (; t < e.length && X(n, e[t]) > 0; )
    t++;
  e.splice(t, 0, n);
}
var B = {
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
}, pe = {
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
}, On = typeof navigator < "u" && /Mac/.test(navigator.platform), Pn = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var S = 0; S < 10; S++) B[48 + S] = B[96 + S] = String(S);
for (var S = 1; S <= 24; S++) B[S + 111] = "F" + S;
for (var S = 65; S <= 90; S++)
  B[S] = String.fromCharCode(S + 32), pe[S] = String.fromCharCode(S);
for (var Ce in B) pe.hasOwnProperty(Ce) || (pe[Ce] = B[Ce]);
function An(e) {
  var t = On && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || Pn && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified", n = !t && e.key || (e.shiftKey ? pe : B)[e.keyCode] || e.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const In = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), zn = typeof navigator < "u" && /Win/.test(navigator.platform);
function Kn(e) {
  let t = e.split(/-(?!$)/), n = t[t.length - 1];
  n == "Space" && (n = " ");
  let r, o, s, i;
  for (let l = 0; l < t.length - 1; l++) {
    let a = t[l];
    if (/^(cmd|meta|m)$/i.test(a))
      i = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      o = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      In ? i = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), o && (n = "Ctrl-" + n), i && (n = "Meta-" + n), s && (n = "Shift-" + n), n;
}
function Rn(e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n in e)
    t[Kn(n)] = e[n];
  return t;
}
function Se(e, t, n = !0) {
  return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function Ln(e) {
  let t = Rn(e);
  return function(n, r) {
    let o = An(r), s, i = t[Se(o, r)];
    if (i && i(n.state, n.dispatch, n))
      return !0;
    if (o.length == 1 && o != " ") {
      if (r.shiftKey) {
        let l = t[Se(o, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(zn && r.ctrlKey && r.altKey) && (s = B[r.keyCode]) && s != o) {
        let l = t[Se(s, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
function Vn(e = {}) {
  return new H({
    view(t) {
      return new Fn(t, e);
    }
  });
}
class Fn {
  constructor(t, n) {
    var r;
    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((o) => {
      let s = (i) => {
        this[o](i);
      };
      return t.dom.addEventListener(o, s), { name: o, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: t, handler: n }) => this.editorView.dom.removeEventListener(t, n));
  }
  update(t, n) {
    this.cursorPos != null && n.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(t) {
    t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let t = this.editorView.state.doc.resolve(this.cursorPos), n = !t.parent.inlineContent, r, o = this.editorView.dom, s = o.getBoundingClientRect(), i = s.width / o.offsetWidth, l = s.height / o.offsetHeight;
    if (n) {
      let f = t.nodeBefore, u = t.nodeAfter;
      if (f || u) {
        let p = this.editorView.nodeDOM(this.cursorPos - (f ? f.nodeSize : 0));
        if (p) {
          let h = p.getBoundingClientRect(), E = f ? h.bottom : h.top;
          f && u && (E = (E + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let C = this.width / 2 * l;
          r = { left: h.left, right: h.right, top: E - C, bottom: E + C };
        }
      }
    }
    if (!r) {
      let f = this.editorView.coordsAtPos(this.cursorPos), u = this.width / 2 * i;
      r = { left: f.left - u, right: f.left + u, top: f.top, bottom: f.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let c, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, d = -pageYOffset;
    else {
      let f = a.getBoundingClientRect(), u = f.width / a.offsetWidth, p = f.height / a.offsetHeight;
      c = f.left - a.scrollLeft * u, d = f.top - a.scrollTop * p;
    }
    this.element.style.left = (r.left - c) / i + "px", this.element.style.top = (r.top - d) / l + "px", this.element.style.width = (r.right - r.left) / i + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(t) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t);
  }
  dragover(t) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: t.clientX, top: t.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), o = r && r.type.spec.disableDropCursor, s = typeof o == "function" ? o(this.editorView, n, t) : o;
    if (n && !s) {
      let i = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = rt(this.editorView.state.doc, i, this.editorView.dragging.slice);
        l != null && (i = l);
      }
      this.setCursor(i), this.scheduleRemoval(5e3);
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
class y extends $ {
  /**
  Create a gap cursor.
  */
  constructor(t) {
    super(t, t);
  }
  map(t, n) {
    let r = t.resolve(n.map(this.head));
    return y.valid(r) ? new y(r) : $.near(r);
  }
  content() {
    return z.empty;
  }
  eq(t) {
    return t instanceof y && t.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new y(t.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new $e(this.anchor);
  }
  /**
  @internal
  */
  static valid(t) {
    let n = t.parent;
    if (n.isTextblock || !$n(t) || !Bn(t))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let o = n.contentMatchAt(t.index()).defaultType;
    return o && o.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(t, n, r = !1) {
    e: for (; ; ) {
      if (!r && y.valid(t))
        return t;
      let o = t.pos, s = null;
      for (let i = t.depth; ; i--) {
        let l = t.node(i);
        if (n > 0 ? t.indexAfter(i) < l.childCount : t.index(i) > 0) {
          s = l.child(n > 0 ? t.indexAfter(i) : t.index(i) - 1);
          break;
        } else if (i == 0)
          return null;
        o += n;
        let a = t.doc.resolve(o);
        if (y.valid(a))
          return a;
      }
      for (; ; ) {
        let i = n > 0 ? s.firstChild : s.lastChild;
        if (!i) {
          if (s.isAtom && !s.isText && !m.isSelectable(s)) {
            t = t.doc.resolve(o + s.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        s = i, o += n;
        let l = t.doc.resolve(o);
        if (y.valid(l))
          return l;
      }
      return null;
    }
  }
}
y.prototype.visible = !1;
y.findFrom = y.findGapCursorFrom;
$.jsonID("gapcursor", y);
class $e {
  constructor(t) {
    this.pos = t;
  }
  map(t) {
    return new $e(t.map(this.pos));
  }
  resolve(t) {
    let n = t.resolve(this.pos);
    return y.valid(n) ? new y(n) : $.near(n);
  }
}
function Pt(e) {
  return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function $n(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t), r = e.node(t);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = r.child(n - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || Pt(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Bn(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t), r = e.node(t);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = r.child(n); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || Pt(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Hn() {
  return new H({
    props: {
      decorations: jn,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && y.valid(n) ? new y(n) : null;
      },
      handleClick: qn,
      handleKeyDown: Wn,
      handleDOMEvents: { beforeinput: Un }
    }
  });
}
const Wn = Ln({
  ArrowLeft: ie("horiz", -1),
  ArrowRight: ie("horiz", 1),
  ArrowUp: ie("vert", -1),
  ArrowDown: ie("vert", 1)
});
function ie(e, t) {
  const n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
  return function(r, o, s) {
    let i = r.selection, l = t > 0 ? i.$to : i.$from, a = i.empty;
    if (i instanceof x) {
      if (!s.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(t > 0 ? l.after() : l.before());
    }
    let c = y.findGapCursorFrom(l, t, a);
    return c ? (o && o(r.tr.setSelection(new y(c))), !0) : !1;
  };
}
function qn(e, t, n) {
  if (!e || !e.editable)
    return !1;
  let r = e.state.doc.resolve(t);
  if (!y.valid(r))
    return !1;
  let o = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return o && o.inside > -1 && m.isSelectable(e.state.doc.nodeAt(o.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new y(r))), !0);
}
function Un(e, t) {
  if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof y))
    return !1;
  let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
  if (!r)
    return !1;
  let o = K.empty;
  for (let i = r.length - 1; i >= 0; i--)
    o = K.from(r[i].createAndFill(null, o));
  let s = e.state.tr.replace(n.pos, n.pos, new z(o, 0, 0));
  return s.setSelection(x.near(s.doc.resolve(n.pos + 1))), e.dispatch(s), !1;
}
function jn(e) {
  if (!(e.selection instanceof y))
    return null;
  let t = document.createElement("div");
  return t.className = "ProseMirror-gapcursor", g.create(e.doc, [D.widget(e.selection.head, t, { key: "gapcursor" })]);
}
var he = 200, b = function() {
};
b.prototype.append = function(t) {
  return t.length ? (t = b.from(t), !this.length && t || t.length < he && this.leafAppend(t) || this.length < he && t.leafPrepend(this) || this.appendInner(t)) : this;
};
b.prototype.prepend = function(t) {
  return t.length ? b.from(t).append(this) : this;
};
b.prototype.appendInner = function(t) {
  return new Gn(this, t);
};
b.prototype.slice = function(t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = this.length), t >= n ? b.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, n));
};
b.prototype.get = function(t) {
  if (!(t < 0 || t >= this.length))
    return this.getInner(t);
};
b.prototype.forEach = function(t, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(t, n, r, 0) : this.forEachInvertedInner(t, n, r, 0);
};
b.prototype.map = function(t, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var o = [];
  return this.forEach(function(s, i) {
    return o.push(t(s, i));
  }, n, r), o;
};
b.from = function(t) {
  return t instanceof b ? t : t && t.length ? new At(t) : b.empty;
};
var At = /* @__PURE__ */ (function(e) {
  function t(r) {
    e.call(this), this.values = r;
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return t.prototype.flatten = function() {
    return this.values;
  }, t.prototype.sliceInner = function(o, s) {
    return o == 0 && s == this.length ? this : new t(this.values.slice(o, s));
  }, t.prototype.getInner = function(o) {
    return this.values[o];
  }, t.prototype.forEachInner = function(o, s, i, l) {
    for (var a = s; a < i; a++)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, t.prototype.forEachInvertedInner = function(o, s, i, l) {
    for (var a = s - 1; a >= i; a--)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, t.prototype.leafAppend = function(o) {
    if (this.length + o.length <= he)
      return new t(this.values.concat(o.flatten()));
  }, t.prototype.leafPrepend = function(o) {
    if (this.length + o.length <= he)
      return new t(o.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(t.prototype, n), t;
})(b);
b.empty = new At([]);
var Gn = /* @__PURE__ */ (function(e) {
  function t(n, r) {
    e.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, t.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, t.prototype.forEachInner = function(r, o, s, i) {
    var l = this.left.length;
    if (o < l && this.left.forEachInner(r, o, Math.min(s, l), i) === !1 || s > l && this.right.forEachInner(r, Math.max(o - l, 0), Math.min(this.length, s) - l, i + l) === !1)
      return !1;
  }, t.prototype.forEachInvertedInner = function(r, o, s, i) {
    var l = this.left.length;
    if (o > l && this.right.forEachInvertedInner(r, o - l, Math.max(s, l) - l, i + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(o, l), s, i) === !1)
      return !1;
  }, t.prototype.sliceInner = function(r, o) {
    if (r == 0 && o == this.length)
      return this;
    var s = this.left.length;
    return o <= s ? this.left.slice(r, o) : r >= s ? this.right.slice(r - s, o - s) : this.left.slice(r, s).append(this.right.slice(0, o - s));
  }, t.prototype.leafAppend = function(r) {
    var o = this.right.leafAppend(r);
    if (o)
      return new t(this.left, o);
  }, t.prototype.leafPrepend = function(r) {
    var o = this.left.leafPrepend(r);
    if (o)
      return new t(o, this.right);
  }, t.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new t(this.left, new t(this.right, r)) : new t(this, r);
  }, t;
})(b);
const Xn = 500;
class O {
  constructor(t, n) {
    this.items = t, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(t, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let o, s;
    n && (o = this.remapping(r, this.items.length), s = o.maps.length);
    let i = t.tr, l, a, c = [], d = [];
    return this.items.forEach((f, u) => {
      if (!f.step) {
        o || (o = this.remapping(r, u + 1), s = o.maps.length), s--, d.push(f);
        return;
      }
      if (o) {
        d.push(new A(f.map));
        let p = f.step.map(o.slice(s)), h;
        p && i.maybeStep(p).doc && (h = i.mapping.maps[i.mapping.maps.length - 1], c.push(new A(h, void 0, void 0, c.length + d.length))), s--, h && o.appendMap(h, s);
      } else
        i.maybeStep(f.step);
      if (f.selection)
        return l = o ? f.selection.map(o.slice(s)) : f.selection, a = new O(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: i, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(t, n, r, o) {
    let s = [], i = this.eventCount, l = this.items, a = !o && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < t.steps.length; d++) {
      let f = t.steps[d].invert(t.docs[d]), u = new A(t.mapping.maps[d], f, n), p;
      (p = a && a.merge(u)) && (u = p, d ? s.pop() : l = l.slice(0, l.length - 1)), s.push(u), n && (i++, n = void 0), o || (a = u);
    }
    let c = i - r.depth;
    return c > _n && (l = Yn(l, c), i -= c), new O(l.append(s), i);
  }
  remapping(t, n) {
    let r = new Vt();
    return this.items.forEach((o, s) => {
      let i = o.mirrorOffset != null && s - o.mirrorOffset >= t ? r.maps.length - o.mirrorOffset : void 0;
      r.appendMap(o.map, i);
    }, t, n), r;
  }
  addMaps(t) {
    return this.eventCount == 0 ? this : new O(this.items.append(t.map((n) => new A(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(t, n) {
    if (!this.eventCount)
      return this;
    let r = [], o = Math.max(0, this.items.length - n), s = t.mapping, i = t.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, o);
    let a = n;
    this.items.forEach((u) => {
      let p = s.getMirror(--a);
      if (p == null)
        return;
      i = Math.min(i, p);
      let h = s.maps[p];
      if (u.step) {
        let E = t.steps[p].invert(t.docs[p]), C = u.selection && u.selection.map(s.slice(a + 1, p));
        C && l++, r.push(new A(h, E, C));
      } else
        r.push(new A(h));
    }, o);
    let c = [];
    for (let u = n; u < i; u++)
      c.push(new A(s.maps[u]));
    let d = this.items.slice(0, o).append(c).append(r), f = new O(d, l);
    return f.emptyItemCount() > Xn && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let t = 0;
    return this.items.forEach((n) => {
      n.step || t++;
    }), t;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(t = this.items.length) {
    let n = this.remapping(0, t), r = n.maps.length, o = [], s = 0;
    return this.items.forEach((i, l) => {
      if (l >= t)
        o.push(i), i.selection && s++;
      else if (i.step) {
        let a = i.step.map(n.slice(r)), c = a && a.getMap();
        if (r--, c && n.appendMap(c, r), a) {
          let d = i.selection && i.selection.map(n.slice(r));
          d && s++;
          let f = new A(c.invert(), a, d), u, p = o.length - 1;
          (u = o.length && o[p].merge(f)) ? o[p] = u : o.push(f);
        }
      } else i.map && r--;
    }, this.items.length, 0), new O(b.from(o.reverse()), s);
  }
}
O.empty = new O(b.empty, 0);
function Yn(e, t) {
  let n;
  return e.forEach((r, o) => {
    if (r.selection && t-- == 0)
      return n = o, !1;
  }), e.slice(n);
}
class A {
  constructor(t, n, r, o) {
    this.map = t, this.step = n, this.selection = r, this.mirrorOffset = o;
  }
  merge(t) {
    if (this.step && t.step && !t.selection) {
      let n = t.step.merge(this.step);
      if (n)
        return new A(n.getMap().invert(), n, this.selection);
    }
  }
}
class L {
  constructor(t, n, r, o, s) {
    this.done = t, this.undone = n, this.prevRanges = r, this.prevTime = o, this.prevComposition = s;
  }
}
const _n = 20;
function Jn(e, t, n, r) {
  let o = n.getMeta(Y), s;
  if (o)
    return o.historyState;
  n.getMeta(wn) && (e = new L(e.done, e.undone, null, 0, -1));
  let i = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return e;
  if (i && i.getMeta(Y))
    return i.getMeta(Y).redo ? new L(e.done.addTransform(n, void 0, r, le(t)), e.undone, et(n.mapping.maps), e.prevTime, e.prevComposition) : new L(e.done, e.undone.addTransform(n, void 0, r, le(t)), null, e.prevTime, e.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = e.prevTime == 0 || !i && e.prevComposition != l && (e.prevTime < (n.time || 0) - r.newGroupDelay || !Zn(n, e.prevRanges)), c = i ? Ee(e.prevRanges, n.mapping) : et(n.mapping.maps);
    return new L(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, le(t)), O.empty, c, n.time, l ?? e.prevComposition);
  } else return (s = n.getMeta("rebased")) ? new L(e.done.rebased(n, s), e.undone.rebased(n, s), Ee(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new L(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), Ee(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function Zn(e, t) {
  if (!t)
    return !1;
  if (!e.docChanged)
    return !0;
  let n = !1;
  return e.mapping.maps[0].forEach((r, o) => {
    for (let s = 0; s < t.length; s += 2)
      r <= t[s + 1] && o >= t[s] && (n = !0);
  }), n;
}
function et(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0 && t.length == 0; n--)
    e[n].forEach((r, o, s, i) => t.push(s, i));
  return t;
}
function Ee(e, t) {
  if (!e)
    return null;
  let n = [];
  for (let r = 0; r < e.length; r += 2) {
    let o = t.map(e[r], 1), s = t.map(e[r + 1], -1);
    o <= s && n.push(o, s);
  }
  return n;
}
function Qn(e, t, n) {
  let r = le(t), o = Y.get(t).spec.config, s = (n ? e.undone : e.done).popEvent(t, r);
  if (!s)
    return null;
  let i = s.selection.resolve(s.transform.doc), l = (n ? e.done : e.undone).addTransform(s.transform, t.selection.getBookmark(), o, r), a = new L(n ? l : s.remaining, n ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(i).setMeta(Y, { redo: n, historyState: a });
}
let Te = !1, tt = null;
function le(e) {
  let t = e.plugins;
  if (tt != t) {
    Te = !1, tt = t;
    for (let n = 0; n < t.length; n++)
      if (t[n].spec.historyPreserveItems) {
        Te = !0;
        break;
      }
  }
  return Te;
}
const Y = new _("history"), wn = new _("closeHistory");
function vn(e = {}) {
  return e = {
    depth: e.depth || 100,
    newGroupDelay: e.newGroupDelay || 500
  }, new H({
    key: Y,
    state: {
      init() {
        return new L(O.empty, O.empty, null, 0, -1);
      },
      apply(t, n, r) {
        return Jn(n, r, t, e);
      }
    },
    config: e,
    props: {
      handleDOMEvents: {
        beforeinput(t, n) {
          let r = n.inputType, o = r == "historyUndo" ? zt : r == "historyRedo" ? Kt : null;
          return !o || !t.editable ? !1 : (n.preventDefault(), o(t.state, t.dispatch));
        }
      }
    }
  });
}
function It(e, t) {
  return (n, r) => {
    let o = Y.getState(n);
    if (!o || (e ? o.undone : o.done).eventCount == 0)
      return !1;
    if (r) {
      let s = Qn(o, n, e);
      s && r(t ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const zt = It(!1, !0), Kt = It(!0, !0);
var tr = W.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (e) => e.length,
      wordCounter: (e) => e.split(" ").filter((t) => t !== "").length
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
      const t = e?.node || this.editor.state.doc;
      if ((e?.mode || this.options.mode) === "textSize") {
        const r = t.textBetween(0, t.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return t.nodeSize;
    }, this.storage.words = (e) => {
      const t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let e = !1;
    return [
      new H({
        key: new _("characterCount"),
        appendTransaction: (t, n, r) => {
          if (e)
            return;
          const o = this.options.limit;
          if (o == null || o === 0) {
            e = !0;
            return;
          }
          const s = this.storage.characters({ node: r.doc });
          if (s > o) {
            const i = s - o, l = 0, a = i;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`
            );
            const c = r.tr.deleteRange(l, a);
            return e = !0, c;
          }
          e = !0;
        },
        filterTransaction: (t, n) => {
          const r = this.options.limit;
          if (!t.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const o = this.storage.characters({ node: n.doc }), s = this.storage.characters({ node: t.doc });
          if (s <= r || o > r && s > r && s <= o)
            return !0;
          if (o > r && s > r && s > o || !t.getMeta("paste"))
            return !1;
          const l = t.selection.$head.pos, a = s - r, c = l - a, d = l;
          return t.deleteRange(c, d), !(this.storage.characters({ node: t.doc }) > r);
        }
      })
    ];
  }
});
W.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [Vn(this.options)];
  }
});
W.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new H({
        key: new _("focus"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: o } = t, s = [];
            if (!n || !r)
              return g.create(e, []);
            let i = 0;
            this.options.mode === "deepest" && e.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              i += 1;
            });
            let l = 0;
            return e.descendants((a, c) => {
              if (a.isText || !(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && i - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              s.push(
                D.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), g.create(e, s);
          }
        }
      })
    ];
  }
});
W.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [Hn()];
  },
  extendNodeSchema(e) {
    var t;
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      allowGapCursor: (t = Ft($t(e, "allowGapCursor", n))) != null ? t : null
    };
  }
});
W.create({
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
      new H({
        key: new _("placeholder"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = t, o = [];
            if (!n)
              return null;
            const s = this.editor.isEmpty;
            return e.descendants((i, l) => {
              const a = r >= l && r <= l + i.nodeSize, c = !i.isLeaf && Bt(i);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const d = [this.options.emptyNodeClass];
                s && d.push(this.options.emptyEditorClass);
                const f = D.node(l, l + i.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: i,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                o.push(f);
              }
              return this.options.includeChildren;
            }), g.create(e, o);
          }
        }
      })
    ];
  }
});
W.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: e, options: t } = this;
    return [
      new H({
        key: new _("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || e.isFocused || !e.isEditable || Ht(n.selection) || e.view.dragging ? null : g.create(n.doc, [
              D.inline(n.selection.from, n.selection.to, {
                class: t.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function nt({ types: e, node: t }) {
  return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
W.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var e;
    const t = new _(this.name), n = ((e = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : e.name) || this.options.node || "paragraph", r = Object.entries(this.editor.schema.nodes).map(([, o]) => o).filter((o) => (this.options.notAfter || []).concat(n).includes(o.name));
    return [
      new H({
        key: t,
        appendTransaction: (o, s, i) => {
          const { doc: l, tr: a, schema: c } = i, d = t.getState(i), f = l.content.size, u = c.nodes[n];
          if (d)
            return a.insert(f, u.create());
        },
        state: {
          init: (o, s) => {
            const i = s.tr.doc.lastChild;
            return !nt({ node: i, types: r });
          },
          apply: (o, s) => {
            if (!o.docChanged || o.getMeta("__uniqueIDTransaction"))
              return s;
            const i = o.doc.lastChild;
            return !nt({ node: i, types: r });
          }
        }
      })
    ];
  }
});
var nr = W.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: e, dispatch: t }) => zt(e, t),
      redo: () => ({ state: e, dispatch: t }) => Kt(e, t)
    };
  },
  addProseMirrorPlugins() {
    return [vn(this.options)];
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
  tr as C,
  nr as U
};
