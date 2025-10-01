import { d as t } from "../configuration-DkMIcjSq.js";
function o() {
  t({
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
          isActive: ({ editor: i }) => i.isActive("strike"),
          isDisabled: ({ editor: i }) => !i.can().toggleStrike()
        },
        onExecute: ({ editor: i }) => {
          i.chain().focus().toggleStrike().run();
        }
      }
    ]
  });
}
export {
  o as default
};
