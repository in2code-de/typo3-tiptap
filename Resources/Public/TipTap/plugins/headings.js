import { i as d } from "../index-DW3_VDBk.js";
import { p as r, d as u } from "../configuration-C_EeEZGV.js";
function c(t) {
  const a = r({
    pluginId: "headings",
    config: t,
    getValidationSchema: (e) => {
      const n = e.custom((i) => {
        if (!Array.isArray(i) || i.length === 0)
          return !1;
        const s = [1, 2, 3, 4, 5, 6];
        return i.some((o) => s.includes(o));
      }, {
        message: "Must be an array of numbers between 1 and 6 with at least one element"
      });
      return e.object({
        levels: n
      });
    }
  });
  return u({
    extensions: [
      d.configure({
        levels: a.levels
      })
    ],
    commands: a.levels.map((e) => ({
      id: `heading-${e}`,
      label: `Heading ${e}`,
      iconIdentifier: `heading-${e}`,
      position: {
        toolbarGroupId: "heading",
        bubbleMenuGroupId: "heading"
      },
      status: {
        isActive: ({ editor: n }) => n.isActive("heading", { level: e }),
        isDisabled: ({ editor: n }) => !n.can().toggleHeading({ level: e })
      },
      onExecute: ({ editor: n }) => {
        n.chain().focus().unsetMark("bold").toggleHeading({ level: e }).updateAttributes("heading", { class: null }).run();
      }
    }))
  });
}
export {
  c as default
};
