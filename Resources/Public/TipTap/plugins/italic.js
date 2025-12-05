import { M as s, d as a, n as r, m as i } from "../index-DHU43GOd.js";
import { d as n } from "../configuration-C_XBPA12.js";
var o = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, l = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, d = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, u = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, c = s.create({
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
    return ["em", i(this.options.HTMLAttributes, t), 0];
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
      r({
        find: o,
        type: this.type
      }),
      r({
        find: d,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      a({
        find: l,
        type: this.type
      }),
      a({
        find: u,
        type: this.type
      })
    ];
  }
}), m = c;
function y() {
  n({
    extensions: [m],
    commands: [
      {
        id: "italic",
        label: "Italic",
        iconIdentifier: "italic",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: "formatting"
        },
        status: {
          isActive: ({ editor: t }) => t.isActive("italic"),
          isDisabled: ({ editor: t }) => !t.can().toggleItalic() || t.state.selection.empty
        },
        onExecute: ({ editor: t }) => {
          t.chain().focus().toggleItalic().run();
        }
      }
    ]
  });
}
export {
  y as default
};
