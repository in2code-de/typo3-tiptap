import { N as L, w as k, m, r as E, E as H, p as M, i as y, a as K, b as G, g as $, c as V } from "../index-DHU43GOd.js";
import { p as X, d as F } from "../configuration-C_XBPA12.js";
var z = Object.defineProperty, W = (t, e) => {
  for (var s in e)
    z(t, s, { get: e[s], enumerable: !0 });
}, Y = "listItem", x = "textStyle", A = /^\s*([-+*])\s$/, O = L.create({
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
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", m(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => t.type !== "list" || t.ordered ? [] : {
    type: "bulletList",
    content: t.items ? e.parseChildren(t.items) : []
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Y, this.editor.getAttributes(x)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = k({
      find: A,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = k({
      find: A,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(x),
      editor: this.editor
    })), [t];
  }
}), q = L.create({
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
  renderHTML({ HTMLAttributes: t }) {
    return ["li", m(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (t, e) => {
    if (t.type !== "list_item")
      return [];
    let s = [];
    if (t.tokens && t.tokens.length > 0)
      if (t.tokens.some((n) => n.type === "paragraph"))
        s = e.parseChildren(t.tokens);
      else {
        const n = t.tokens[0];
        if (n && n.type === "text" && n.tokens && n.tokens.length > 0) {
          if (s = [
            {
              type: "paragraph",
              content: e.parseInline(n.tokens)
            }
          ], t.tokens.length > 1) {
            const d = t.tokens.slice(1), a = e.parseChildren(d);
            s.push(...a);
          }
        } else
          s = e.parseChildren(t.tokens);
      }
    return s.length === 0 && (s = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: s
    };
  },
  renderMarkdown: (t, e, s) => E(
    t,
    e,
    (r) => r.parentType === "bulletList" ? "- " : r.parentType === "orderedList" ? `${r.index + 1}. ` : "- ",
    s
  ),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), J = {};
W(J, {
  findListItemPos: () => b,
  getNextListDepth: () => T,
  handleBackspace: () => v,
  handleDelete: () => I,
  hasListBefore: () => P,
  hasListItemAfter: () => Q,
  hasListItemBefore: () => S,
  listItemHasSubList: () => D,
  nextListIsDeeper: () => _,
  nextListIsHigher: () => B
});
var b = (t, e) => {
  const { $from: s } = e.selection, r = $(t, e.schema);
  let n = null, i = s.depth, d = s.pos, a = null;
  for (; i > 0 && a === null; )
    n = s.node(i), n.type === r ? a = i : (i -= 1, d -= 1);
  return a === null ? null : { $pos: e.doc.resolve(d), depth: a };
}, T = (t, e) => {
  const s = b(t, e);
  if (!s)
    return !1;
  const [, r] = V(e, t, s.$pos.pos + 4);
  return r;
}, P = (t, e, s) => {
  const { $anchor: r } = t.selection, n = Math.max(0, r.pos - 2), i = t.doc.resolve(n).node();
  return !(!i || !s.includes(i.type.name));
}, S = (t, e) => {
  var s;
  const { $anchor: r } = e.selection, n = e.doc.resolve(r.pos - 2);
  return !(n.index() === 0 || ((s = n.nodeBefore) == null ? void 0 : s.type.name) !== t);
}, D = (t, e, s) => {
  if (!s)
    return !1;
  const r = $(t, e.schema);
  let n = !1;
  return s.descendants((i) => {
    i.type === r && (n = !0);
  }), n;
}, v = (t, e, s) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!y(t.state, e) && P(t.state, e, s)) {
    const { $anchor: a } = t.state.selection, p = t.state.doc.resolve(a.before() - 1), h = [];
    p.node().descendants((u, c) => {
      u.type.name === e && h.push({ node: u, pos: c });
    });
    const o = h.at(-1);
    if (!o)
      return !1;
    const l = t.state.doc.resolve(p.start() + o.pos + 1);
    return t.chain().cut({ from: a.start() - 1, to: a.end() + 1 }, l.end()).joinForward().run();
  }
  if (!y(t.state, e) || !K(t.state))
    return !1;
  const r = b(e, t.state);
  if (!r)
    return !1;
  const i = t.state.doc.resolve(r.$pos.pos - 2).node(r.depth), d = D(e, t.state, i);
  return S(e, t.state) && !d ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, _ = (t, e) => {
  const s = T(t, e), r = b(t, e);
  return !r || !s ? !1 : s > r.depth;
}, B = (t, e) => {
  const s = T(t, e), r = b(t, e);
  return !r || !s ? !1 : s < r.depth;
}, I = (t, e) => {
  if (!y(t.state, e) || !G(t.state, e))
    return !1;
  const { selection: s } = t.state, { $from: r, $to: n } = s;
  return !s.empty && r.sameParent(n) ? !1 : _(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : B(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, Q = (t, e) => {
  var s;
  const { $anchor: r } = e.selection, n = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(n.index() === n.parent.childCount - 1 || ((s = n.nodeAfter) == null ? void 0 : s.type.name) !== t);
}, U = H.create({
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
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s }) => {
          t.state.schema.nodes[s] !== void 0 && I(t, s) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s }) => {
          t.state.schema.nodes[s] !== void 0 && I(t, s) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: r }) => {
          t.state.schema.nodes[s] !== void 0 && v(t, s, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: r }) => {
          t.state.schema.nodes[s] !== void 0 && v(t, s, r) && (e = !0);
        }), e;
      }
    };
  }
}), w = /^(\s*)(\d+)\.\s+(.*)$/, Z = /^\s/;
function tt(t) {
  const e = [];
  let s = 0, r = 0;
  for (; s < t.length; ) {
    const n = t[s], i = n.match(w);
    if (!i)
      break;
    const [, d, a, p] = i, h = d.length;
    let o = p, l = s + 1;
    const u = [n];
    for (; l < t.length; ) {
      const c = t[l];
      if (c.match(w))
        break;
      if (c.trim() === "")
        u.push(c), o += `
`, l += 1;
      else if (c.match(Z))
        u.push(c), o += `
${c.slice(h + 2)}`, l += 1;
      else
        break;
    }
    e.push({
      indent: h,
      number: parseInt(a, 10),
      content: o.trim(),
      raw: u.join(`
`)
    }), r = l, s = l;
  }
  return [e, r];
}
function R(t, e, s) {
  var r;
  const n = [];
  let i = 0;
  for (; i < t.length; ) {
    const d = t[i];
    if (d.indent === e) {
      const a = d.content.split(`
`), p = ((r = a[0]) == null ? void 0 : r.trim()) || "", h = [];
      p && h.push({
        type: "paragraph",
        raw: p,
        tokens: s.inlineTokens(p)
      });
      const o = a.slice(1).join(`
`).trim();
      if (o) {
        const c = s.blockTokens(o);
        h.push(...c);
      }
      let l = i + 1;
      const u = [];
      for (; l < t.length && t[l].indent > e; )
        u.push(t[l]), l += 1;
      if (u.length > 0) {
        const c = Math.min(...u.map((g) => g.indent)), f = R(u, c, s);
        h.push({
          type: "list",
          ordered: !0,
          start: u[0].number,
          items: f,
          raw: u.map((g) => g.raw).join(`
`)
        });
      }
      n.push({
        type: "list_item",
        raw: d.raw,
        tokens: h
      }), i = l;
    } else
      i += 1;
  }
  return n;
}
function et(t, e) {
  return t.map((s) => {
    if (s.type !== "list_item")
      return e.parseChildren([s])[0];
    const r = [];
    return s.tokens && s.tokens.length > 0 && s.tokens.forEach((n) => {
      if (n.type === "paragraph" || n.type === "list" || n.type === "blockquote" || n.type === "code")
        r.push(...e.parseChildren([n]));
      else if (n.type === "text" && n.tokens) {
        const i = e.parseChildren([n]);
        r.push({
          type: "paragraph",
          content: i
        });
      } else {
        const i = e.parseChildren([n]);
        i.length > 0 && r.push(...i);
      }
    }), {
      type: "listItem",
      content: r
    };
  });
}
var st = "listItem", C = "textStyle", N = /^(\d+)\.\s$/, j = L.create({
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
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
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
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...s } = t;
    return e === 1 ? ["ol", m(this.options.HTMLAttributes, s), 0] : ["ol", m(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => {
    if (t.type !== "list" || !t.ordered)
      return [];
    const s = t.start || 1, r = t.items ? et(t.items, e) : [];
    return s !== 1 ? {
      type: "orderedList",
      attrs: { start: s },
      content: r
    } : {
      type: "orderedList",
      content: r
    };
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: (t) => {
      const e = t.match(/^(\s*)(\d+)\.\s+/), s = e?.index;
      return s !== void 0 ? s : -1;
    },
    tokenize: (t, e, s) => {
      var r;
      const n = t.split(`
`), [i, d] = tt(n);
      if (i.length === 0)
        return;
      const a = R(i, 0, s);
      return a.length === 0 ? void 0 : {
        type: "list",
        ordered: !0,
        start: ((r = i[0]) == null ? void 0 : r.number) || 1,
        items: a,
        raw: n.slice(0, d).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(st, this.editor.getAttributes(C)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = k({
      find: N,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = k({
      find: N,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(C) }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1],
      editor: this.editor
    })), [t];
  }
}), nt = /^\s*(\[([( |x])?\])\s$/, rt = L.create({
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
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
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
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      m(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (t, e) => {
    const s = [];
    if (t.tokens && t.tokens.length > 0 ? s.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? s.push(e.createNode("paragraph", {}, [e.createNode("text", { text: t.text })])) : s.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
      const r = e.parseChildren(t.nestedTokens);
      s.push(...r);
    }
    return e.createNode("taskItem", { checked: t.checked || !1 }, s);
  },
  renderMarkdown: (t, e) => {
    var s;
    const n = `- [${(s = t.attrs) != null && s.checked ? "x" : " "}] `;
    return E(t, e, n);
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: s, editor: r }) => {
      const n = document.createElement("li"), i = document.createElement("label"), d = document.createElement("span"), a = document.createElement("input"), p = document.createElement("div"), h = (o) => {
        var l, u;
        a.ariaLabel = ((u = (l = this.options.a11y) == null ? void 0 : l.checkboxLabel) == null ? void 0 : u.call(l, o, a.checked)) || `Task item checkbox for ${o.textContent || "empty task item"}`;
      };
      return h(t), i.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (o) => o.preventDefault()), a.addEventListener("change", (o) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          a.checked = !a.checked;
          return;
        }
        const { checked: l } = o.target;
        r.isEditable && typeof s == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: u }) => {
          const c = s();
          if (typeof c != "number")
            return !1;
          const f = u.doc.nodeAt(c);
          return u.setNodeMarkup(c, void 0, {
            ...f?.attrs,
            checked: l
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, l) || (a.checked = !a.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([o, l]) => {
        n.setAttribute(o, l);
      }), n.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, i.append(a, d), n.append(i, p), Object.entries(e).forEach(([o, l]) => {
        n.setAttribute(o, l);
      }), {
        dom: n,
        contentDOM: p,
        update: (o) => o.type !== this.type ? !1 : (n.dataset.checked = o.attrs.checked, a.checked = o.attrs.checked, h(o), !0)
      };
    };
  },
  addInputRules() {
    return [
      k({
        find: nt,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), it = L.create({
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
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", m(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(t) {
      var e;
      const s = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
      return s !== void 0 ? s : -1;
    },
    tokenize(t, e, s) {
      const r = (i) => {
        const d = M(
          i,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (a) => ({
              indentLevel: a[1].length,
              mainContent: a[4],
              checked: a[3].toLowerCase() === "x"
            }),
            createToken: (a, p) => ({
              type: "taskItem",
              raw: "",
              mainContent: a.mainContent,
              indentLevel: a.indentLevel,
              checked: a.checked,
              text: a.mainContent,
              tokens: s.inlineTokens(a.mainContent),
              nestedTokens: p
            }),
            // Allow recursive nesting
            customNestedParser: r
          },
          s
        );
        return d ? [
          {
            type: "taskList",
            raw: d.raw,
            items: d.items
          }
        ] : s.blockTokens(i);
      }, n = M(
        t,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (i) => ({
            indentLevel: i[1].length,
            mainContent: i[4],
            checked: i[3].toLowerCase() === "x"
          }),
          createToken: (i, d) => ({
            type: "taskItem",
            raw: "",
            mainContent: i.mainContent,
            indentLevel: i.indentLevel,
            checked: i.checked,
            text: i.mainContent,
            tokens: s.inlineTokens(i.mainContent),
            nestedTokens: d
          }),
          // Use the recursive parser for nested content
          customNestedParser: r
        },
        s
      );
      if (n)
        return {
          type: "taskList",
          raw: n.raw,
          items: n.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
H.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(O.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(q.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(U.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(j.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(rt.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(it.configure(this.options.taskList)), t;
  }
});
function lt(t) {
  const e = X({
    pluginId: "list",
    config: t,
    getValidationSchema: (n) => n.object({
      types: n.array(
        n.enum(["bullet", "ordered"])
      ).min(1)
    })
  }), s = [], r = [];
  e.types.includes("bullet") && (s.push(O), r.push({
    id: "list-bullet",
    label: "Bullet List",
    iconIdentifier: "list-bullet",
    position: {
      toolbarGroupId: "formatting",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: n }) => n.isActive("bulletList"),
      isDisabled: ({ editor: n }) => !n.can().toggleBulletList() && !n.can().toggleOrderedList()
    },
    onExecute: ({ editor: n }) => {
      n.chain().focus().toggleBulletList().run();
    }
  })), e.types.includes("ordered") && (s.push(j), r.push({
    id: "list-ordered",
    label: "Ordered List",
    iconIdentifier: "list-ordered",
    position: {
      toolbarGroupId: "formatting",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: n }) => n.isActive("orderedList"),
      isDisabled: ({ editor: n }) => !n.can().toggleOrderedList() && !n.can().toggleBulletList()
    },
    onExecute: ({ editor: n }) => {
      n.chain().focus().toggleOrderedList().run();
    }
  })), F({
    extensions: s,
    commands: r
  });
}
export {
  lt as default
};
