import { M as o, d as r, n as s, m as a } from "../index-DHU43GOd.js";
import { h as n } from "../jsx-runtime-CT7Pcg-t.js";
import { d } from "../configuration-C_XBPA12.js";
var i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, u = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, g = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, m = o.create({
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
    return /* @__PURE__ */ n("strong", { ...a(this.options.HTMLAttributes, t), children: /* @__PURE__ */ n("slot", {}) });
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
        find: i,
        type: this.type
      }),
      s({
        find: u,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      r({
        find: l,
        type: this.type
      }),
      r({
        find: g,
        type: this.type
      })
    ];
  }
}), p = m;
function f() {
  d({
    extensions: [p],
    commands: [
      {
        id: "bold",
        label: "Bold",
        iconIdentifier: "bold",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: "formatting"
        },
        status: {
          isActive: ({ editor: t }) => t.isActive("bold"),
          isDisabled: ({ editor: t }) => !t.can().toggleBold() || t.state.selection.empty
        },
        onExecute: ({ editor: t }) => {
          t.chain().focus().toggleBold().updateAttributes("strong", { class: null }).run();
        }
      }
    ]
  });
}
export {
  f as default
};
