import { j as x, i as A, G as $, ag as _, T as k, E as O, a6 as P } from "../index-oLzXX581.js";
import { c as j, t as B, C as G, f as z, g as R, s as K, m as v, a as H, b as F, d as E, e as U, h as q, i as Y, j as J, k as Q, l as X, n as Z } from "../index-H4DBvHL_.js";
import { p as ee, d as te } from "../configuration-C_EeEZGV.js";
var L = x.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (e) => {
          var t, l;
          const o = e.getAttribute("colwidth"), u = o ? o.split(",").map((a) => parseInt(a, 10)) : null;
          if (!u) {
            const a = (t = e.closest("table")) == null ? void 0 : t.querySelectorAll("colgroup > col"), i = Array.from(((l = e.parentElement) == null ? void 0 : l.children) || []).indexOf(e);
            if (i && i > -1 && a && a[i]) {
              const n = a[i].getAttribute("width");
              return n ? [parseInt(n, 10)] : null;
            }
          }
          return u;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["td", A(this.options.HTMLAttributes, e), 0];
  }
}), V = x.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (e) => {
          const t = e.getAttribute("colwidth");
          return t ? t.split(",").map((o) => parseInt(o, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["th", A(this.options.HTMLAttributes, e), 0];
  }
}), D = x.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["tr", A(this.options.HTMLAttributes, e), 0];
  }
});
function I(e, t) {
  return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function W(e, t, l, o, u, a) {
  var i;
  let n = 0, f = !0, d = t.firstChild;
  const h = e.firstChild;
  if (h !== null)
    for (let m = 0, w = 0; m < h.childCount; m += 1) {
      const { colspan: s, colwidth: c } = h.child(m).attrs;
      for (let r = 0; r < s; r += 1, w += 1) {
        const p = u === w ? a : c && c[r], g = p ? `${p}px` : "";
        if (n += p || o, p || (f = !1), d) {
          if (d.style.width !== g) {
            const [C, T] = I(o, p);
            d.style.setProperty(C, T);
          }
          d = d.nextSibling;
        } else {
          const C = document.createElement("col"), [T, M] = I(o, p);
          C.style.setProperty(T, M), t.appendChild(C);
        }
      }
    }
  for (; d; ) {
    const m = d.nextSibling;
    (i = d.parentNode) == null || i.removeChild(d), d = m;
  }
  const b = e.attrs.style && typeof e.attrs.style == "string" && /\bwidth\s*:/i.test(e.attrs.style);
  f && !b ? (l.style.width = `${n}px`, l.style.minWidth = "") : (l.style.width = "", l.style.minWidth = `${n}px`);
}
var le = class {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), W(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, W(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    const t = e.target, l = this.dom.contains(t), o = this.contentDOM.contains(t);
    return !!(l && !o && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
  }
};
function oe(e, t, l, o) {
  let u = 0, a = !0;
  const i = [], n = e.firstChild;
  if (!n)
    return {};
  for (let b = 0, m = 0; b < n.childCount; b += 1) {
    const { colspan: w, colwidth: s } = n.child(b).attrs;
    for (let c = 0; c < w; c += 1, m += 1) {
      const r = l === m ? o : s && s[c];
      u += r || t, r || (a = !1);
      const [p, g] = I(t, r);
      i.push(["col", { style: `${p}: ${g}` }]);
    }
  }
  const f = a ? `${u}px` : "", d = a ? "" : `${u}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: f, tableMinWidth: d };
}
function S(e, t) {
  return e.createAndFill();
}
function ae(e) {
  if (e.cached.tableNodeTypes)
    return e.cached.tableNodeTypes;
  const t = {};
  return Object.keys(e.nodes).forEach((l) => {
    const o = e.nodes[l];
    o.spec.tableRole && (t[o.spec.tableRole] = o);
  }), e.cached.tableNodeTypes = t, t;
}
function re(e, t, l, o, u) {
  const a = ae(e), i = [], n = [];
  for (let d = 0; d < l; d += 1) {
    const h = S(a.cell);
    if (h && n.push(h), o) {
      const b = S(a.header_cell);
      b && i.push(b);
    }
  }
  const f = [];
  for (let d = 0; d < t; d += 1)
    f.push(a.row.createChecked(null, o && d === 0 ? i : n));
  return a.table.createChecked(null, f);
}
function ne(e) {
  return e instanceof G;
}
var y = ({ editor: e }) => {
  const { selection: t } = e.state;
  if (!ne(t))
    return !1;
  let l = 0;
  const o = P(t.ranges[0].$from, (a) => a.type.name === "table");
  return o?.node.descendants((a) => {
    if (a.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(a.type.name) && (l += 1);
  }), l === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
}, se = "";
function ie(e) {
  return (e || "").replace(/\s+/g, " ").trim();
}
function de(e, t, l = {}) {
  var o;
  const u = (o = l.cellLineSeparator) != null ? o : se;
  if (!e || !e.content || e.content.length === 0)
    return "";
  const a = [];
  e.content.forEach((s) => {
    const c = [];
    s.content && s.content.forEach((r) => {
      let p = "";
      r.content && Array.isArray(r.content) && r.content.length > 1 ? p = r.content.map((M) => t.renderChildren(M)).join(u) : p = r.content ? t.renderChildren(r.content) : "";
      const g = ie(p), C = r.type === "tableHeader";
      c.push({ text: g, isHeader: C });
    }), a.push(c);
  });
  const i = a.reduce((s, c) => Math.max(s, c.length), 0);
  if (i === 0)
    return "";
  const n = new Array(i).fill(0);
  a.forEach((s) => {
    var c;
    for (let r = 0; r < i; r += 1) {
      const g = (((c = s[r]) == null ? void 0 : c.text) || "").length;
      g > n[r] && (n[r] = g), n[r] < 3 && (n[r] = 3);
    }
  });
  const f = (s, c) => s + " ".repeat(Math.max(0, c - s.length)), d = a[0], h = d.some((s) => s.isHeader);
  let b = `
`;
  const m = new Array(i).fill(0).map((s, c) => h && d[c] && d[c].text || "");
  return b += `| ${m.map((s, c) => f(s, n[c])).join(" | ")} |
`, b += `| ${n.map((s) => "-".repeat(Math.max(3, s))).join(" | ")} |
`, (h ? a.slice(1) : a).forEach((s) => {
    b += `| ${new Array(i).fill(0).map((c, r) => f(s[r] && s[r].text || "", n[r])).join(" | ")} |
`;
  }), b;
}
var ce = de, N = x.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: le,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    const { colgroup: l, tableWidth: o, tableMinWidth: u } = oe(e, this.options.cellMinWidth), a = t.style;
    function i() {
      return a || (o ? `width: ${o}` : `min-width: ${u}`);
    }
    const n = [
      "table",
      A(this.options.HTMLAttributes, t, {
        style: i()
      }),
      l,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, n] : n;
  },
  parseMarkdown: (e, t) => {
    const l = [];
    if (e.header) {
      const o = [];
      e.header.forEach((u) => {
        o.push(t.createNode("tableHeader", {}, [{ type: "paragraph", content: t.parseInline(u.tokens) }]));
      }), l.push(t.createNode("tableRow", {}, o));
    }
    return e.rows && e.rows.forEach((o) => {
      const u = [];
      o.forEach((a) => {
        u.push(t.createNode("tableCell", {}, [{ type: "paragraph", content: t.parseInline(a.tokens) }]));
      }), l.push(t.createNode("tableRow", {}, u));
    }), t.createNode("table", void 0, l);
  },
  renderMarkdown: (e, t) => ce(e, t),
  addCommands() {
    return {
      insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: l = !0 } = {}) => ({ tr: o, dispatch: u, editor: a }) => {
        const i = re(a.schema, e, t, l);
        if (u) {
          const n = o.selection.from + 1;
          o.replaceSelectionWith(i).scrollIntoView().setSelection(k.near(o.doc.resolve(n)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: e, dispatch: t }) => Z(e, t),
      addColumnAfter: () => ({ state: e, dispatch: t }) => X(e, t),
      deleteColumn: () => ({ state: e, dispatch: t }) => Q(e, t),
      addRowBefore: () => ({ state: e, dispatch: t }) => J(e, t),
      addRowAfter: () => ({ state: e, dispatch: t }) => Y(e, t),
      deleteRow: () => ({ state: e, dispatch: t }) => q(e, t),
      deleteTable: () => ({ state: e, dispatch: t }) => U(e, t),
      mergeCells: () => ({ state: e, dispatch: t }) => v(e, t),
      splitCell: () => ({ state: e, dispatch: t }) => H(e, t),
      toggleHeaderColumn: () => ({ state: e, dispatch: t }) => E("column")(e, t),
      toggleHeaderRow: () => ({ state: e, dispatch: t }) => E("row")(e, t),
      toggleHeaderCell: () => ({ state: e, dispatch: t }) => F(e, t),
      mergeOrSplit: () => ({ state: e, dispatch: t }) => v(e, t) ? !0 : H(e, t),
      setCellAttribute: (e, t) => ({ state: l, dispatch: o }) => K(e, t)(l, o),
      goToNextCell: () => ({ state: e, dispatch: t }) => R(1)(e, t),
      goToPreviousCell: () => ({ state: e, dispatch: t }) => R(-1)(e, t),
      fixTables: () => ({ state: e, dispatch: t }) => (t && z(e), !0),
      setCellSelection: (e) => ({ tr: t, dispatch: l }) => {
        if (l) {
          const o = G.create(t.doc, e.anchorCell, e.headCell);
          t.setSelection(o);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: y,
      "Mod-Backspace": y,
      Delete: y,
      "Mod-Delete": y
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        j({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      B({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(e) {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      tableRole: $(_(e, "tableRole", t))
    };
  }
});
O.create({
  name: "tableKit",
  addExtensions() {
    const e = [];
    return this.options.table !== !1 && e.push(N.configure(this.options.table)), this.options.tableCell !== !1 && e.push(L.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(V.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(D.configure(this.options.tableRow)), e;
  }
});
function fe(e) {
  const t = ee({
    pluginId: "table",
    config: e ?? {},
    getValidationSchema: (l) => l.object({
      defaultRows: l.number().int().min(1).max(20).default(3),
      defaultCols: l.number().int().min(1).max(20).default(3),
      withHeaderRow: l.boolean().default(!0)
    })
  });
  return te({
    extensions: [
      N.configure({
        resizable: !0
      }),
      D,
      V,
      L
    ],
    commands: [
      {
        id: "table",
        label: "Insert Table",
        iconIdentifier: "table",
        position: {
          toolbarGroupId: "general",
          bubbleMenuGroupId: !1
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().insertTable({
            rows: t.defaultRows,
            cols: t.defaultCols,
            withHeaderRow: t.withHeaderRow
          }).run();
        }
      },
      {
        id: "table-delete",
        label: "Delete Table",
        iconIdentifier: "table-delete",
        position: {
          toolbarGroupId: "general",
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().deleteTable().run();
        }
      },
      {
        id: "table-toggle-header-row",
        label: "Toggle Header Row",
        iconIdentifier: "table-header-row",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().toggleHeaderRow().run();
        }
      },
      {
        id: "table-toggle-header-column",
        label: "Toggle Header Column",
        iconIdentifier: "table-header-column",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().toggleHeaderColumn().run();
        }
      },
      {
        id: "table-row-add-above",
        label: "Add Row Above",
        iconIdentifier: "table-row-add-above",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().addRowBefore().run();
        }
      },
      {
        id: "table-row-add-below",
        label: "Add Row Below",
        iconIdentifier: "table-row-add-below",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().addRowAfter().run();
        }
      },
      {
        id: "table-row-delete",
        label: "Delete Row",
        iconIdentifier: "table-row-delete",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table"),
          isDisabled: ({ editor: l }) => !l.can().deleteRow()
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().deleteRow().run();
        }
      },
      {
        id: "table-column-add-before",
        label: "Add Column Before",
        iconIdentifier: "table-column-add-before",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().addColumnBefore().run();
        }
      },
      {
        id: "table-column-add-after",
        label: "Add Column After",
        iconIdentifier: "table-column-add-after",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table")
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().addColumnAfter().run();
        }
      },
      {
        id: "table-column-delete",
        label: "Delete Column",
        iconIdentifier: "table-column-delete",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table"),
          isDisabled: ({ editor: l }) => !l.can().deleteColumn()
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().deleteColumn().run();
        }
      },
      {
        id: "table-merge-cells",
        label: "Merge Cells",
        iconIdentifier: "table-merge-cells",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table"),
          isDisabled: ({ editor: l }) => !l.can().mergeCells()
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().mergeCells().run();
        }
      },
      {
        id: "table-split-cell",
        label: "Split Cell",
        iconIdentifier: "table-split-cell",
        position: {
          toolbarGroupId: !1,
          bubbleMenuGroupId: "table"
        },
        status: {
          isVisible: ({ editor: l }) => l.isActive("table"),
          isDisabled: ({ editor: l }) => !l.can().splitCell()
        },
        onExecute: ({ editor: l }) => {
          l.chain().focus().splitCell().run();
        }
      }
    ]
  });
}
export {
  fe as default
};
