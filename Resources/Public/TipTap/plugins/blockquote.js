import { i as e } from "../index-CASOKHd9.js";
import { d as t } from "../configuration-Kd-wz9S1.js";
function n() {
  t({
    extensions: [e],
    commands: [
      {
        id: "blockquote",
        label: "Blockquote",
        iconIdentifier: "blockquote",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: !1
        },
        status: {
          isActive: ({ editor: o }) => o.isActive("blockquote")
        },
        onExecute: ({ editor: o }) => {
          o.chain().focus().toggleBlockquote().run();
        }
      }
    ]
  });
}
export {
  n as default
};
