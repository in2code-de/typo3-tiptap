import { o as c } from "../index-e_Ie-2wz.js";
import { L as u } from "../index-DYCfnBXh.js";
import s from "@typo3/backend/modal.js";
import { d as p } from "../configuration-B8zvYdvw.js";
const f = u.extend({
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
function b() {
  p({
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
          isDisabled: ({ editor: t }) => {
            const n = t.can().setLink({ href: "" }), e = t.isActive("link"), r = t.state.selection.empty;
            return !n || r && !e;
          }
        },
        onExecute: ({ editor: t, linkBrowserUrl: n }) => {
          const e = new URL(n, window.location.origin);
          if (t.isActive("link")) {
            const o = t.getAttributes("link");
            c(o).filter(([, i]) => !!i).forEach(([i, l]) => {
              const a = i === "href" ? "url" : encodeURIComponent(i);
              e.searchParams.set(`P[curUrl][${a}]`, l);
            });
          }
          s.advanced({
            type: s.types.iframe,
            title: "Set Link",
            content: e.toString(),
            size: s.sizes.large,
            callback: (o) => {
              o.userData.editor = t;
            }
          });
        }
      }
    ]
  });
}
export {
  f as CustomLink,
  b as default
};
