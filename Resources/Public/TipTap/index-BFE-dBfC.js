import { h as k, aX as m, g as d, E as H, aC as b, av as B, au as D, ah as N, af as w } from "./index-Dv80tyPl.js";
var R = Object.defineProperty, C = (t, e) => {
  for (var s in e)
    R(t, s, { get: e[s], enumerable: !0 });
}, j = "listItem", I = "textStyle", A = /^\s*([-+*])\s$/, K = k.create({
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
    return ["ul", d(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(j, this.editor.getAttributes(I)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = m({
      find: A,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = m({
      find: A,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(I),
      editor: this.editor
    })), [t];
  }
}), _ = k.create({
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
    return ["li", d(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), F = {};
C(F, {
  findListItemPos: () => L,
  getNextListDepth: () => v,
  handleBackspace: () => y,
  handleDelete: () => g,
  hasListBefore: () => $,
  hasListItemAfter: () => V,
  hasListItemBefore: () => E,
  listItemHasSubList: () => S,
  nextListIsDeeper: () => O,
  nextListIsHigher: () => P
});
var L = (t, e) => {
  const { $from: s } = e.selection, r = N(t, e.schema);
  let i = null, o = s.depth, p = s.pos, n = null;
  for (; o > 0 && n === null; )
    i = s.node(o), i.type === r ? n = o : (o -= 1, p -= 1);
  return n === null ? null : { $pos: e.doc.resolve(p), depth: n };
}, v = (t, e) => {
  const s = L(t, e);
  if (!s)
    return !1;
  const [, r] = w(e, t, s.$pos.pos + 4);
  return r;
}, $ = (t, e, s) => {
  const { $anchor: r } = t.selection, i = Math.max(0, r.pos - 2), o = t.doc.resolve(i).node();
  return !(!o || !s.includes(o.type.name));
}, E = (t, e) => {
  var s;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - 2);
  return !(i.index() === 0 || ((s = i.nodeBefore) == null ? void 0 : s.type.name) !== t);
}, S = (t, e, s) => {
  if (!s)
    return !1;
  const r = N(t, e.schema);
  let i = !1;
  return s.descendants((o) => {
    o.type === r && (i = !0);
  }), i;
}, y = (t, e, s) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!b(t.state, e) && $(t.state, e, s)) {
    const { $anchor: n } = t.state.selection, c = t.state.doc.resolve(n.before() - 1), h = [];
    c.node().descendants((l, f) => {
      l.type.name === e && h.push({ node: l, pos: f });
    });
    const a = h.at(-1);
    if (!a)
      return !1;
    const u = t.state.doc.resolve(c.start() + a.pos + 1);
    return t.chain().cut({ from: n.start() - 1, to: n.end() + 1 }, u.end()).joinForward().run();
  }
  if (!b(t.state, e) || !B(t.state))
    return !1;
  const r = L(e, t.state);
  if (!r)
    return !1;
  const o = t.state.doc.resolve(r.$pos.pos - 2).node(r.depth), p = S(e, t.state, o);
  return E(e, t.state) && !p ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, O = (t, e) => {
  const s = v(t, e), r = L(t, e);
  return !r || !s ? !1 : s > r.depth;
}, P = (t, e) => {
  const s = v(t, e), r = L(t, e);
  return !r || !s ? !1 : s < r.depth;
}, g = (t, e) => {
  if (!b(t.state, e) || !D(t.state, e))
    return !1;
  const { selection: s } = t.state, { $from: r, $to: i } = s;
  return !s.empty && r.sameParent(i) ? !1 : O(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : P(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, V = (t, e) => {
  var s;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(i.index() === i.parent.childCount - 1 || ((s = i.nodeAfter) == null ? void 0 : s.type.name) !== t);
}, W = H.create({
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
          t.state.schema.nodes[s] !== void 0 && g(t, s) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s }) => {
          t.state.schema.nodes[s] !== void 0 && g(t, s) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: r }) => {
          t.state.schema.nodes[s] !== void 0 && y(t, s, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: r }) => {
          t.state.schema.nodes[s] !== void 0 && y(t, s, r) && (e = !0);
        }), e;
      }
    };
  }
}), X = "listItem", M = "textStyle", x = /^(\d+)\.\s$/, Y = k.create({
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
    return e === 1 ? ["ol", d(this.options.HTMLAttributes, s), 0] : ["ol", d(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(X, this.editor.getAttributes(M)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = m({
      find: x,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = m({
      find: x,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(M) }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1],
      editor: this.editor
    })), [t];
  }
}), q = /^\s*(\[([( |x])?\])\s$/, z = k.create({
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
      d(this.options.HTMLAttributes, e, {
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
      const i = document.createElement("li"), o = document.createElement("label"), p = document.createElement("span"), n = document.createElement("input"), c = document.createElement("div"), h = (a) => {
        var u, l;
        n.ariaLabel = ((l = (u = this.options.a11y) == null ? void 0 : u.checkboxLabel) == null ? void 0 : l.call(u, a, n.checked)) || `Task item checkbox for ${a.textContent || "empty task item"}`;
      };
      return h(t), o.contentEditable = "false", n.type = "checkbox", n.addEventListener("mousedown", (a) => a.preventDefault()), n.addEventListener("change", (a) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          n.checked = !n.checked;
          return;
        }
        const { checked: u } = a.target;
        r.isEditable && typeof s == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: l }) => {
          const f = s();
          if (typeof f != "number")
            return !1;
          const T = l.doc.nodeAt(f);
          return l.setNodeMarkup(f, void 0, {
            ...T?.attrs,
            checked: u
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, u) || (n.checked = !n.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([a, u]) => {
        i.setAttribute(a, u);
      }), i.dataset.checked = t.attrs.checked, n.checked = t.attrs.checked, o.append(n, p), i.append(o, c), Object.entries(e).forEach(([a, u]) => {
        i.setAttribute(a, u);
      }), {
        dom: i,
        contentDOM: c,
        update: (a) => a.type !== this.type ? !1 : (i.dataset.checked = a.attrs.checked, n.checked = a.attrs.checked, h(a), !0)
      };
    };
  },
  addInputRules() {
    return [
      m({
        find: q,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), G = k.create({
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
    return ["ul", d(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
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
    return this.options.bulletList !== !1 && t.push(K.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(_.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(W.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(Y.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(z.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(G.configure(this.options.taskList)), t;
  }
});
export {
  K as B,
  _ as L,
  Y as O,
  W as a
};
