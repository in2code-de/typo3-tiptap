import { M as s, m as r, f as a, g as n } from "./index-DCsf0cLd.js";
var i = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, d = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, l = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, o = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, u = s.create({
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
    return ["em", n(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (t, e) => e.applyMark("italic", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      a({
        find: i,
        type: this.type
      }),
      a({
        find: l,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      r({
        find: d,
        type: this.type
      }),
      r({
        find: o,
        type: this.type
      })
    ];
  }
}), p = u;
export {
  u as I,
  p as i
};
