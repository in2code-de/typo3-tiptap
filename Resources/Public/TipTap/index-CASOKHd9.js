import { h as a, b7 as d, g as c } from "./index-DCsf0cLd.js";
import { h as i } from "./jsx-runtime-CT7Pcg-t.js";
var l = /^\s*>\s$/, p = a.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ i("blockquote", { ...c(this.options.HTMLAttributes, t), children: /* @__PURE__ */ i("slot", {}) });
  },
  parseMarkdown: (t, e) => e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
  renderMarkdown: (t, e) => {
    if (!t.content)
      return "";
    const r = ">", n = [];
    return t.content.forEach((s) => {
      const u = e.renderChildren([s]).split(`
`).map((o) => o.trim() === "" ? r : `${r} ${o}`);
      n.push(u.join(`
`));
    }), n.join(`
${r}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      d({
        find: l,
        type: this.type
      })
    ];
  }
}), b = p;
export {
  p as B,
  b as i
};
