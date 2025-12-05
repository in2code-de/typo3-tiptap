import { d as s } from "../configuration-C_XBPA12.js";
const n = "data-tiptap-source-view-active";
function o(t) {
  return t.view.dom.getAttribute(n) === "true";
}
function i(t, e) {
  t.view.dom.setAttribute(n, e.toString());
}
function a() {
  s({
    commands: [
      {
        id: "source",
        label: "Source",
        iconIdentifier: "source",
        position: {
          toolbarGroupId: "developer",
          bubbleMenuGroupId: !1
        },
        status: {
          isActive: ({ editor: t }) => o(t)
        },
        onExecute: ({ editor: t }) => {
          const e = o(t), u = e ? t.getText() : `<textarea>${t.getHTML()}</textarea>`;
          i(t, !e), t.commands.setContent(u);
        },
        hooks: {
          onEditorMounted: ({ editor: t }) => {
            i(t, !1);
          }
        }
      }
    ]
  });
}
export {
  a as default,
  o as getEditorSourceViewActiveStatus,
  i as saveEditorSourceViewActiveStatus
};
