import { i as o } from "../index-Cx092m1B.js";
import { d as e } from "../configuration-C_EeEZGV.js";
function l() {
  return e({
    extensions: [o],
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
  l as default
};
