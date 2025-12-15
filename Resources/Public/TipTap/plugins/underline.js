import { i as n } from "../index-BBLae1Hh.js";
import { d as i } from "../configuration-CsNrhtrS.js";
function l() {
  i({
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
  l as default
};
