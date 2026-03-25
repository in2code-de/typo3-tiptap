import { E as f } from "../index-oLzXX581.js";
import { p as g, d as A } from "../configuration-CIDhfjTK.js";
const d = ["left", "center", "right"], a = ["heading", "paragraph"], p = {
  left: "Align Left",
  center: "Align Center",
  right: "Align Right"
};
function x(l, n) {
  const s = l.isActive({ textAlign: n }) ? null : n, o = l.chain().focus();
  return a.forEach((r) => o.updateAttributes(r, { textAlign: s })), o.run();
}
function m(l) {
  const n = g({
    pluginId: "justify",
    config: l ?? {},
    getValidationSchema: (t) => t.object({
      left: t.union([t.string(), t.literal(!1)]).default("text-left"),
      center: t.union([t.string(), t.literal(!1)]).default("text-center"),
      right: t.union([t.string(), t.literal(!1)]).default("text-right")
    })
  }), i = {}, s = {};
  for (const t of d)
    n[t] !== !1 && (i[t] = n[t], s[n[t]] = t);
  const o = Object.keys(i), r = f.create({
    name: "textAlignClass",
    addGlobalAttributes() {
      return [{
        types: [...a],
        attributes: {
          textAlign: {
            default: null,
            parseHTML: (t) => {
              for (const e of t.classList)
                if (s[e])
                  return t.classList.remove(e), s[e];
              return null;
            },
            renderHTML: (t) => {
              const e = t.textAlign;
              return !e || !i[e] ? {} : { class: i[e] };
            }
          }
        }
      }];
    }
  }), c = o.map((t) => ({
    id: `justify-${t}`,
    label: p[t],
    iconIdentifier: `justify-${t}`,
    position: {
      toolbarGroupId: "textAlignment",
      bubbleMenuGroupId: "textAlignment"
    },
    status: {
      isActive: ({ editor: e }) => e.isActive({ textAlign: t }),
      isDisabled: ({ editor: e }) => a.every(
        (u) => !e.can().updateAttributes(u, { textAlign: t })
      )
    },
    onExecute: ({ editor: e }) => {
      x(e, t);
    }
  }));
  A({
    extensions: [r],
    commands: c
  });
}
export {
  m as default
};
