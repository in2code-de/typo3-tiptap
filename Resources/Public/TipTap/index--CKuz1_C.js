import { M as a, m as e, f as r, g as n } from "./index-CXcNTZf2.js";
import { h as s } from "./jsx-runtime-CT7Pcg-t.js";
var o = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, d = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, i = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, u = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, l = a.create({
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
    return /* @__PURE__ */ s("strong", { ...n(this.options.HTMLAttributes, t), children: /* @__PURE__ */ s("slot", {}) });
  },
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
      r({
        find: o,
        type: this.type
      }),
      r({
        find: i,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      e({
        find: d,
        type: this.type
      }),
      e({
        find: u,
        type: this.type
      })
    ];
  }
}), p = l;
export {
  l as B,
  p as i
};
