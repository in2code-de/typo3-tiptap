import { M as a, m as r, f as s, g as o } from "./index-DCsf0cLd.js";
import { h as n } from "./jsx-runtime-CT7Pcg-t.js";
var d = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, l = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, u = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, g = a.create({
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
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ n("strong", { ...o(this.options.HTMLAttributes, t), children: /* @__PURE__ */ n("slot", {}) });
  },
  markdownTokenName: "strong",
  parseMarkdown: (t, e) => e.applyMark("bold", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
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
      s({
        find: d,
        type: this.type
      }),
      s({
        find: l,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      r({
        find: i,
        type: this.type
      }),
      r({
        find: u,
        type: this.type
      })
    ];
  }
}), _ = g;
export {
  g as B,
  _ as i
};
