import { i as t } from "../index-BdSithC_.js";
import { d as e } from "../configuration-C_EeEZGV.js";
function n() {
  return e({
    extensions: [t],
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
          isActive: ({ editor: i }) => i.isActive("italic"),
          isDisabled: ({ editor: i }) => !i.can().toggleItalic() || i.state.selection.empty
        },
        onExecute: ({ editor: i }) => {
          i.chain().focus().toggleItalic().run();
        }
      }
    ]
  });
}
export {
  n as default
};
