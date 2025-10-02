import { B as o, O as n } from "../index-DdYLZdgi.js";
import { p as r, d as u } from "../configuration-DkMIcjSq.js";
function c(l) {
  const s = r({
    pluginId: "list",
    config: l,
    getValidationSchema: (e) => e.object({
      types: e.array(
        e.enum(["bullet", "ordered"])
      ).min(1)
    })
  }), t = [], i = [];
  s.types.includes("bullet") && (t.push(o), i.push({
    id: "list-bullet",
    label: "Bullet List",
    iconIdentifier: "list-bullet",
    position: {
      toolbarGroupId: "formatting",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: e }) => e.isActive("bulletList"),
      isDisabled: ({ editor: e }) => !e.can().toggleBulletList() && !e.can().toggleOrderedList()
    },
    onExecute: ({ editor: e }) => {
      e.chain().focus().toggleBulletList().run();
    }
  })), s.types.includes("ordered") && (t.push(n), i.push({
    id: "list-ordered",
    label: "Ordered List",
    iconIdentifier: "list-ordered",
    position: {
      toolbarGroupId: "formatting",
      bubbleMenuGroupId: !1
    },
    status: {
      isActive: ({ editor: e }) => e.isActive("orderedList"),
      isDisabled: ({ editor: e }) => !e.can().toggleOrderedList() && !e.can().toggleBulletList()
    },
    onExecute: ({ editor: e }) => {
      e.chain().focus().toggleOrderedList().run();
    }
  })), u({
    extensions: t,
    commands: i
  });
}
export {
  c as default
};
