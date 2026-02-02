import { i as t } from "../index-s7sG_RND.js";
import { d as a } from "../configuration-DkMIcjSq.js";
function n() {
  a({
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
