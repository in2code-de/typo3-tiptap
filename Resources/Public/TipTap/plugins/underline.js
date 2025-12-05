import { M as o, m as s } from "../index-DHU43GOd.js";
import { d } from "../configuration-C_XBPA12.js";
var a = o.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["u", s(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown(e, n) {
    return n.applyMark(this.name || "underline", n.parseInline(e.tokens || []));
  },
  renderMarkdown(e, n) {
    return `++${n.renderChildren(e)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(e) {
      return e.indexOf("++");
    },
    tokenize(e, n, i) {
      const r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
      if (!r)
        return;
      const t = r[2].trim();
      return {
        type: "underline",
        raw: r[0],
        text: t,
        tokens: i.inlineTokens(t)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: e }) => e.setMark(this.name),
      toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), u = a;
function g() {
  d({
    extensions: [u],
    commands: [
      {
        id: "underline",
        label: "Underline",
        iconIdentifier: "underline",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: "formatting"
        },
        status: {
          isActive: ({ editor: e }) => e.isActive("underline"),
          isDisabled: ({ editor: e }) => !e.can().toggleUnderline() || e.state.selection.empty
        },
        onExecute: ({ editor: e }) => {
          e.chain().focus().toggleUnderline().run();
        }
      }
    ]
  });
}
export {
  g as default
};
