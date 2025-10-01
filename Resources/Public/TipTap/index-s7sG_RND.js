import { M as r, m as e, f as s, g as a } from "./index-Dv80tyPl.js";
var n = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, i = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, l = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, u = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, d = r.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      s({
        find: n,
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
      e({
        find: i,
        type: this.type
      }),
      e({
        find: u,
        type: this.type
      })
    ];
  }
}), m = d;
export {
  d as I,
  m as i
};
