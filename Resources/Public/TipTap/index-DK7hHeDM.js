import { h as r, aX as o, g as n } from "./index-Dv80tyPl.js";
import { h as e } from "./jsx-runtime-CT7Pcg-t.js";
var u = /^\s*>\s$/, a = r.create({
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
    return /* @__PURE__ */ e("blockquote", { ...n(this.options.HTMLAttributes, t), children: /* @__PURE__ */ e("slot", {}) });
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
      o({
        find: u,
        type: this.type
      })
    ];
  }
}), d = a;
export {
  a as B,
  d as i
};
