import { N as l, t as o, m as d } from "../index-DHU43GOd.js";
import { p as u, d as g } from "../configuration-C_XBPA12.js";
var p = l.create({
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
    return this.options.levels.map((e) => ({
      tag: `h${e}`,
      attrs: { level: e }
    }));
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, d(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown: (e, t) => t.createNode("heading", { level: e.depth || 1 }, t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => {
    var n;
    const s = (n = e.attrs) != null && n.level ? parseInt(e.attrs.level, 10) : 1, i = "#".repeat(s);
    return e.content ? `${i} ${t.renderChildren(e.content)}` : "";
  },
  addCommands() {
    return {
      setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
      toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (e, t) => ({
        ...e,
        [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((e) => o({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
      type: this.type,
      getAttributes: {
        level: e
      }
    }));
  }
}), h = p;
function v(e) {
  const t = u({
    pluginId: "headings",
    config: e,
    getValidationSchema: (n) => {
      const s = n.custom((i) => {
        if (!Array.isArray(i) || i.length === 0)
          return !1;
        const a = [1, 2, 3, 4, 5, 6];
        return i.some((r) => a.includes(r));
      }, {
        message: "Must be an array of numbers between 1 and 6 with at least one element"
      });
      return n.object({
        levels: s
      });
    }
  });
  g({
    extensions: [
      h.configure({
        levels: t.levels
      })
    ],
    commands: t.levels.map((n) => ({
      id: `heading-${n}`,
      label: `Heading ${n}`,
      iconIdentifier: `heading-${n}`,
      position: {
        toolbarGroupId: "heading",
        bubbleMenuGroupId: "heading"
      },
      status: {
        isActive: ({ editor: s }) => s.isActive("heading", { level: n }),
        isDisabled: ({ editor: s }) => !s.can().toggleHeading({ level: n })
      },
      onExecute: ({ editor: s }) => {
        s.chain().focus().unsetMark("bold").toggleHeading({ level: n }).updateAttributes("heading", { class: null }).run();
      }
    }))
  });
}
export {
  v as default
};
