import { i as n } from "../index-oABNFgEZ.js";
import { d as i } from "../configuration-DkMIcjSq.js";
function r() {
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
          isDisabled: ({ editor: e }) => !e.can().toggleUnderline()
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
