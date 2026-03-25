import { t as y } from "../index-e_Ie-2wz.js";
import { E as C } from "../index-oLzXX581.js";
import { p as k, d as b } from "../configuration-C_EeEZGV.js";
import { a0 as T, a4 as N } from "../styles-DkDB69Ie.js";
function m(e, i = 300) {
  let r, c = 0, t = !1;
  return (...o) => {
    const n = Date.now();
    return (!t || n - c >= i) && (r = e(...o), c = n, t = !0), r;
  };
}
function f(e) {
  return e.type.name === "heading" && e.attrs?.level ? `h${e.attrs.level}` : e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] && e.type.spec.parseDOM[0].tag || e.type.name;
}
function g(e) {
  return e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] ? e.type.spec.parseDOM[0].tag.split("[")[0] : null;
}
function d(e) {
  const { selection: i } = e, { from: r, to: c } = i, t = e.doc.resolve(r), o = e.doc.resolve(c);
  if (t.sameParent(o)) {
    let n = [];
    if (r === c)
      n = [...t.marks()];
    else {
      const s = r + 1 < c ? r + 1 : r;
      try {
        if (n = [...e.doc.resolve(s).marks()], c - r > 1)
          for (let a = r + 1; a < c; a++) {
            const p = [...e.doc.resolve(a).marks()];
            n = n.filter(
              (u) => p.some((h) => h.type === u.type)
            );
          }
      } catch {
        n = [...t.marks()];
      }
    }
    const l = n.find((s) => {
      const a = g(s);
      return a && a !== "span";
    });
    if (l)
      return {
        tagName: g(l),
        // 'a' - from the mark
        mark: l
        // the actual mark
        // Don't include node when returning a mark
        // This makes it clear we're dealing with a mark, not a node
      };
    for (let s = t.depth; s >= 0; s--) {
      const a = t.node(s);
      if (a.type.name !== "doc")
        return {
          node: a,
          tagName: f(a)
          // No mark when returning a node
        };
    }
  }
  for (let n = Math.min(t.depth, o.depth); n >= 0; n--) {
    const l = t.node(n);
    if (l.type.name !== "doc")
      return {
        node: l,
        tagName: f(l)
      };
  }
  return {
    node: e.doc,
    tagName: "doc"
  };
}
const M = [
  // Core block nodes (from StarterKit and common extensions)
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "horizontalRule",
  "hardBreak",
  // Task list extension
  "taskList",
  "taskItem",
  // Table extension
  "table",
  "tableRow",
  "tableCell",
  "tableHeader",
  // Media extensions
  "image",
  "video",
  "audio",
  "figure",
  "figcaption",
  // Typography extensions
  "superscript",
  "subscript",
  // Layout extensions
  "columns",
  "column",
  "details",
  "summary",
  "div",
  "span",
  // Text marks (inline formatting)
  "bold",
  "italic",
  "underline",
  "strike",
  "code",
  "link"
], v = C.create({
  name: "styles",
  addGlobalAttributes() {
    return [
      {
        // List all node types that should support classes
        types: M,
        attributes: {
          class: {
            default: null,
            parseHTML: (e) => e.getAttribute("class") || null,
            renderHTML: (e) => e.class ? { class: e.class } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      toggleNodeClass: (e) => ({ editor: i, commands: r }) => {
        const { selection: c } = i.state, t = c.$from.node(), o = d(i.state);
        if (o.mark) {
          r.extendMarkRange(o.mark.type);
          const l = (o.mark.attrs.class || "").trim(), s = e.trim();
          return l === s ? r.updateAttributes(o.mark.type.name, { class: null }) : r.updateAttributes(o.mark.type.name, {
            class: s.length > 0 ? s : null
          });
        } else if (o.node) {
          const l = (t.attrs.class || "").trim(), s = e.trim();
          return l === s ? r.updateAttributes(t.type.name, { class: null }) : r.updateAttributes(t.type.name, {
            class: s.length > 0 ? s : null
          });
        }
        return !1;
      },
      hasNodeClass: (e) => ({ editor: i }) => {
        const { selection: r } = i.state, c = r.$from.node(), t = d(i.state);
        if (t.mark) {
          const n = (t.mark.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => n.includes(s));
        } else if (t.node) {
          const n = (c.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => n.includes(s));
        }
        return !1;
      }
    };
  }
});
function O(e) {
  const i = k({
    pluginId: "styles",
    config: e,
    getValidationSchema: () => N
  }), r = T(), c = (t) => t.replaceAll(" ", "_").toLowerCase();
  return b({
    extensions: [
      v
    ],
    commands: i.styles.map((t, o) => {
      const n = m(({ editor: a }) => a.commands.hasNodeClass(t.classes), 300), l = m(() => r.value?.tagName === t.element, 300), s = t.classes;
      return {
        id: c(`style:${t.name}`),
        label: t.name,
        iconIdentifier: "styles",
        position: {
          toolbarGroupId: "styles",
          bubbleMenuGroupId: "styles"
        },
        status: {
          isActive: n,
          isVisible: l
        },
        onExecute: ({ editor: a }) => {
          a.chain().focus().toggleNodeClass(s).run();
        },
        hooks: {
          onEditorMounted: o === 0 ? ({ editor: a }) => {
            const p = y(250, () => {
              const u = d(a.state);
              r.value = u, a.emit("parentNodeChanged", u);
            });
            a.on("selectionUpdate", p);
          } : void 0
        }
      };
    })
  });
}
export {
  O as default
};
