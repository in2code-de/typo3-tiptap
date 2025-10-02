import { o as a } from "../index-e_Ie-2wz.js";
import { L as c } from "../index-DB0IANgP.js";
import n from "@typo3/backend/modal.js";
import { d as u } from "../configuration-DkMIcjSq.js";
const f = c.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      title: {
        default: null,
        parseHTML: (t) => t.getAttribute("title"),
        renderHTML: (t) => t.title ? {
          title: t.title
        } : {}
      }
    };
  }
});
function L() {
  u({
    extensions: [
      f.configure({
        openOnClick: !1,
        defaultProtocol: "https",
        protocols: ["http", "https", "t3"]
      })
    ],
    commands: [
      {
        id: "link",
        label: "Link",
        iconIdentifier: "link",
        position: {
          toolbarGroupId: "formatting",
          bubbleMenuGroupId: !1
        },
        status: {
          isActive: ({ editor: t }) => t.isActive("link"),
          isDisabled: ({ editor: t }) => !t.can().setLink({ href: "" }) || t.state.selection.empty
        },
        onExecute: ({ editor: t, linkBrowserUrl: r }) => {
          const o = new URL(r, window.location.origin);
          if (t.isActive("link")) {
            const i = t.getAttributes("link");
            a(i).filter(([, e]) => !!e).forEach(([e, s]) => {
              const l = e === "href" ? "url" : encodeURIComponent(e);
              o.searchParams.set(`P[curUrl][${l}]`, s);
            });
          }
          n.advanced({
            type: n.types.iframe,
            title: "Set Link",
            content: o.toString(),
            size: n.sizes.large,
            callback: (i) => {
              i.userData.editor = t;
            }
          });
        }
      }
    ]
  });
}
export {
  f as CustomLink,
  L as default
};
