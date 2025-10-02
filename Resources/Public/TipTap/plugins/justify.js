import { E as s } from "../index-CXcNTZf2.js";
import { p as r, d as l } from "../configuration-DkMIcjSq.js";
var u = s.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (e) => {
              const i = e.style.textAlign;
              return this.options.alignments.includes(i) ? i : this.options.defaultAlignment;
            },
            renderHTML: (e) => e.textAlign ? { style: `text-align: ${e.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (e) => ({ commands: i }) => this.options.alignments.includes(e) ? this.options.types.map((n) => i.updateAttributes(n, { textAlign: e })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: e }) => this.options.types.map((i) => e.resetAttributes(i, "textAlign")).every((i) => i),
      toggleTextAlign: (e) => ({ editor: i, commands: n }) => this.options.alignments.includes(e) ? i.isActive({ textAlign: e }) ? n.unsetTextAlign() : n.setTextAlign(e) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), o = u;
function g(e) {
  const i = r({
    pluginId: "justify",
    config: e,
    getValidationSchema: (t) => t.object({
      types: t.array(t.enum(["justify-left", "justify-center", "justify-right"])).min(1)
    }, {
      error: 'Must be an object with a "types" property that is an array containing at least one of "justify-left", "justify-center", or "justify-right"'
    })
  }), n = [];
  i.types.includes("justify-left") && n.push({
    id: "justify-left",
    label: "Justify Left",
    iconIdentifier: "justify-left",
    position: {
      toolbarGroupId: "textAlignment",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: t }) => t.isActive({ textAlign: "left" }),
      isDisabled: ({ editor: t }) => !t.can().setTextAlign("left")
    },
    onExecute: ({ editor: t }) => {
      t.chain().focus().setTextAlign("left").run();
    }
  }), i.types.includes("justify-center") && n.push({
    id: "justify-center",
    label: "Justify Center",
    iconIdentifier: "justify-center",
    position: {
      toolbarGroupId: "textAlignment",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: t }) => t.isActive({ textAlign: "center" }),
      isDisabled: ({ editor: t }) => !t.can().setTextAlign("center")
    },
    onExecute: ({ editor: t }) => {
      t.chain().focus().setTextAlign("center").run();
    }
  }), i.types.includes("justify-right") && n.push({
    id: "justify-right",
    label: "Justify Right",
    iconIdentifier: "justify-right",
    position: {
      toolbarGroupId: "textAlignment",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: t }) => t.isActive({ textAlign: "right" }),
      isDisabled: ({ editor: t }) => !t.can().setTextAlign("right")
    },
    onExecute: ({ editor: t }) => {
      t.chain().focus().setTextAlign("right").run();
    }
  }), l({
    extensions: [
      o.configure({
        // Specify the types you want to apply text alignment to
        types: ["heading", "paragraph"]
      })
    ],
    commands: n
  });
}
export {
  g as default
};
