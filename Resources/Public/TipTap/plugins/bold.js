import { i as t } from "../index--CKuz1_C.js";
import { d as i } from "../configuration-DkMIcjSq.js";
function n() {
  i({
    extensions: [t],
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
          isActive: ({ editor: o }) => o.isActive("bold"),
          isDisabled: ({ editor: o }) => !o.can().toggleBold()
        },
        onExecute: ({ editor: o }) => {
          o.chain().focus().toggleBold().updateAttributes("strong", { class: null }).run();
        }
      }
    ]
  });
}
export {
  n as default
};
