import { N as a, w as c, m as l } from "../index-DHU43GOd.js";
import { h as i } from "../jsx-runtime-CT7Pcg-t.js";
import { d } from "../configuration-C_XBPA12.js";
var p = /^\s*>\s$/, m = a.create({
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
    return /* @__PURE__ */ i("blockquote", { ...l(this.options.HTMLAttributes, t), children: /* @__PURE__ */ i("slot", {}) });
  },
  parseMarkdown: (t, e) => e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
  renderMarkdown: (t, e) => {
    if (!t.content)
      return "";
    const o = ">", n = [];
    return t.content.forEach((u) => {
      const s = e.renderChildren([u]).split(`
`).map((r) => r.trim() === "" ? o : `${o} ${r}`);
      n.push(s.join(`
`));
    }), n.join(`
${o}
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
      c({
        find: p,
        type: this.type
      })
    ];
  }
}), b = m;
function M() {
  d({
    extensions: [b],
    commands: [
      {
        id: "blockquote",
        label: "Blockquote",
        iconIdentifier: "blockquote",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: !1
        },
        status: {
          isActive: ({ editor: t }) => t.isActive("blockquote")
        },
        onExecute: ({ editor: t }) => {
          t.chain().focus().toggleBlockquote().run();
        }
      }
    ]
  });
}
export {
  M as default
};
