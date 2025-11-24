import { t as y } from "../index-e_Ie-2wz.js";
import { E as C } from "../index-DCsf0cLd.js";
import { p as k, d as b, c as m } from "../configuration-B8zvYdvw.js";
import { $ as T, a3 as N } from "../styles-zL8IYZyO.js";
function f(e) {
  return e.type.name === "heading" && e.attrs?.level ? `h${e.attrs.level}` : e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] && e.type.spec.parseDOM[0].tag || e.type.name;
}
function g(e) {
  return e.type.spec.parseDOM?.[0] && typeof e.type.spec.parseDOM[0] == "object" && "tag" in e.type.spec.parseDOM[0] ? e.type.spec.parseDOM[0].tag.split("[")[0] : null;
}
function d(e) {
  const { selection: i } = e, { from: r, to: c } = i, t = e.doc.resolve(r), l = e.doc.resolve(c);
  if (t.sameParent(l)) {
    let a = [];
    if (r === c)
      a = [...t.marks()];
    else {
      const s = r + 1 < c ? r + 1 : r;
      try {
        if (a = [...e.doc.resolve(s).marks()], c - r > 1)
          for (let n = r + 1; n < c; n++) {
            const p = [...e.doc.resolve(n).marks()];
            a = a.filter(
              (u) => p.some((h) => h.type === u.type)
            );
          }
      } catch {
        a = [...t.marks()];
      }
    }
    const o = a.find((s) => {
      const n = g(s);
      return n && n !== "span";
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
      const n = t.node(s);
      if (n.type.name !== "doc")
        return {
          node: n,
          tagName: f(n)
          // No mark when returning a node
        };
    }
  }
  for (let a = Math.min(t.depth, l.depth); a >= 0; a--) {
    const o = t.node(a);
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
      toggleNodeClass: (e) => ({ editor: i, commands: r }) => {
        const { selection: c } = i.state, t = c.$from.node(), l = d(i.state);
        if (l.mark) {
          r.extendMarkRange(l.mark.type);
          const o = (l.mark.attrs.class || "").trim(), s = e.trim();
          return o === s ? r.updateAttributes(l.mark.type.name, { class: null }) : r.updateAttributes(l.mark.type.name, {
            class: s.length > 0 ? s : null
          });
        } else if (l.node) {
          const o = (t.attrs.class || "").trim(), s = e.trim();
          return o === s ? r.updateAttributes(t.type.name, { class: null }) : r.updateAttributes(t.type.name, {
            class: s.length > 0 ? s : null
          });
        }
        return !1;
      },
      hasNodeClass: (e) => ({ editor: i }) => {
        const { selection: r } = i.state, c = r.$from.node(), t = d(i.state);
        if (t.mark) {
          const a = (t.mark.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => a.includes(s));
        } else if (t.node) {
          const a = (c.attrs.class || "").split(" ").filter(Boolean).toSorted();
          return e.split(" ").filter(Boolean).toSorted().every((s) => a.includes(s));
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
  }), r = T(), c = (t) => t.replaceAll(" ", "_").toLowerCase();
  b({
    extensions: [
      v
    ],
    commands: i.styles.map((t, l) => {
      const a = m(({ editor: n }) => n.commands.hasNodeClass(t.classes), 300), o = m(() => r.value?.tagName === t.element, 300), s = t.classes;
      return {
        id: c(`style:${t.name}`),
        label: t.name,
        iconIdentifier: "styles",
        position: {
          toolbarGroupId: "styles",
          bubbleMenuGroupId: "styles"
        },
        status: {
          isActive: a,
          isVisible: o
        },
        onExecute: ({ editor: n }) => {
          n.chain().focus().toggleNodeClass(s).run();
        },
        hooks: {
          onEditorMounted: l === 0 ? ({ editor: n }) => {
            const p = y(250, () => {
              const u = d(n.state);
              console.log(1759391901984, u), r.value = u, n.emit("parentNodeChanged", u);
            });
            n.on("selectionUpdate", p);
          } : void 0
        }
      };
    })
  });
}
export {
  P as default
};
