import { C as i } from "../index-DNW1a_UZ.js";
import { p as o, d as a } from "../configuration-DkMIcjSq.js";
function p(n) {
  const e = o({
    pluginId: "character-count",
    config: n,
    getValidationSchema: (t) => t.object({
      limit: t.number().min(1)
    })
  });
  function r(t) {
    return new DOMParser().parseFromString(t, "text/html").body.innerText.length;
  }
  a({
    extensions: [
      i.configure({
        limit: e.limit,
        textCounter: (t) => r(t)
      })
    ]
  });
}
export {
  p as default
};
