import { U as t } from "../index-Ds3IlGiQ.js";
import { p as a, d as s } from "../configuration-Kd-wz9S1.js";
function u(i) {
  const e = a({
    pluginId: "history",
    config: i,
    getValidationSchema: (o) => o.object({
      types: o.array(o.enum(["undo", "redo"])).min(1)
    }, {
      error: 'Must be an object with a "types" property that is an array containing at least one of "undo" or "redo"'
    })
  }), n = [];
  e.types.includes("undo") && n.push({
    id: "undo",
    label: "Undo last action",
    iconIdentifier: "undo",
    position: {
      toolbarGroupId: "history",
      bubbleMenuGroupId: !1
    },
    status: {
      isDisabled: ({ editor: o }) => !o.can().undo()
    },
    onExecute: ({ editor: o }) => {
      o.chain().focus().undo().run();
    }
  }), e.types.includes("redo") && n.push({
    id: "redo",
    label: "Redo last action",
    iconIdentifier: "redo",
    position: {
      toolbarGroupId: "history",
      bubbleMenuGroupId: !1
    },
    status: {
      isDisabled: ({ editor: o }) => !o.can().redo()
    },
    onExecute: ({ editor: o }) => {
      o.chain().focus().redo().run();
    }
  }), s({
    extensions: [t],
    commands: n
  });
}
export {
  u as default
};
