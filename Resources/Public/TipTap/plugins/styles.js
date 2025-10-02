import { t as y } from "../index-e_Ie-2wz.js";
import { E as C } from "../index-CXcNTZf2.js";
import { p as k, d as b, c as m } from "../configuration-DkMIcjSq.js";
import { $ as T, a2 as N } from "../styles-CDw1qn-h.js";
function f(e) {
  return e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] && e.type.spec.parseDOM[0].tag || e.type.name;
}
function g(e) {
  return e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] ? e.type.spec.parseDOM[0].tag.split("[")[0] : null;
}
function d(e) {
  const { selection: i } = e, { from: n, to: c } = i, t = e.doc.resolve(n), l = e.doc.resolve(c);
  if (t.sameParent(l)) {
    let r = [];
    if (n === c)
      r = [...t.marks()];
    else {
      const s = n + 1 < c ? n + 1 : n;
      try {
        if (r = [...e.doc.resolve(s).marks()], c - n > 1)
          for (let a = n + 1; a < c; a++) {
            const p = [...e.doc.resolve(a).marks()];
            r = r.filter(
              (u) => p.some((h) => h.type === u.type)
            );
          }
      } catch {
        r = [...t.marks()];
      }
    }
    const o = r.find((s) => {
      const a = g(s);
      return a && a !== "span";
    });
    if (o)
      return {
        tagName: g(o),
        // 'a' - from the mark
        mark: o
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
  for (let r = Math.min(t.depth, l.depth); r >= 0; r--) {
    const o = t.node(r);
    if (o.type.name !== "doc")
      return {
        node: o,
        tagName: f(o)
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
      toggleNodeClass: (e) => ({ editor: i, commands: n }) => {
        const { selection: c } = i.state, t = c.$from.node(), l = d(i.state);
        if (l.mark) {
          n.extendMarkRange(l.mark.type);
          const o = (l.mark.attrs.class || "").trim(), s = e.trim();
          return o === s ? n.updateAttributes(l.mark.type.name, { class: null }) : n.updateAttributes(l.mark.type.name, {
            class: s.length > 0 ? s : null
          });
        } else if (l.node) {
          const o = (t.attrs.class || "").trim(), s = e.trim();
          return o === s ? n.updateAttributes(t.type.name, { class: null }) : n.updateAttributes(t.type.name, {
            class: s.length > 0 ? s : null
          });
        }
        return !1;
      },
      hasNodeClass: (e) => ({ editor: i }) => {
        const { selection: n } = i.state, c = n.$from.node(), t = d(i.state);
        if (t.mark) {
          const r = (t.mark.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => r.includes(s));
        } else if (t.node) {
          const r = (c.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => r.includes(s));
        }
        return !1;
      }
    };
  }
});
function P(e) {
  const i = k({
    pluginId: "styles",
    config: e,
    getValidationSchema: () => N
  }), n = T(), c = (t) => t.replaceAll(" ", "_").toLowerCase();
  b({
    extensions: [
      v
    ],
    commands: i.styles.map((t, l) => {
      const r = m(({ editor: a }) => a.commands.hasNodeClass(t.classes), 300), o = m(() => n.value?.tagName === t.element, 300), s = t.classes;
      return {
        id: c(`style:${t.name}`),
        label: t.name,
        iconIdentifier: "styles",
        position: {
          toolbarGroupId: "styles",
          bubbleMenuGroupId: "styles"
        },
        status: {
          isActive: r,
          isVisible: o
        },
        onExecute: ({ editor: a }) => {
          a.chain().focus().toggleNodeClass(s).run();
        },
        hooks: {
          onEditorMounted: l === 0 ? ({ editor: a }) => {
            const p = y(250, () => {
              const u = d(a.state);
              n.value = u, a.emit("parentNodeChanged", u);
            });
            a.on("selectionUpdate", p);
          } : void 0
        }
      };
    })
  });
}
export {
  P as default
};
