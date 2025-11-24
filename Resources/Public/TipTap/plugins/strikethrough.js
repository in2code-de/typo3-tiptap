import { d as i } from "../configuration-B8zvYdvw.js";
function o() {
  i({
    commands: [
      {
        id: "strike",
        label: "strike",
        iconIdentifier: "strike",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: "formatting"
        },
        status: {
          isActive: ({ editor: t }) => t.isActive("strike"),
          isDisabled: ({ editor: t }) => !t.can().toggleStrike() || t.state.selection.empty
        },
        onExecute: ({ editor: t }) => {
          t.chain().focus().toggleStrike().run();
        }
      }
    ]
  });
}
export {
  o as default
};
