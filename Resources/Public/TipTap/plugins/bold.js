import { i as t } from "../index-0-i1tnEj.js";
import { d as e } from "../configuration-B8zvYdvw.js";
function n() {
  e({
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
          isDisabled: ({ editor: o }) => !o.can().toggleBold() || o.state.selection.empty
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
