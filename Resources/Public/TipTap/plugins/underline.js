import { i as n } from "../index-Bqn8FasZ.js";
import { d as i } from "../configuration-C_EeEZGV.js";
function r() {
  return i({
    extensions: [n],
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
  r as default
};
