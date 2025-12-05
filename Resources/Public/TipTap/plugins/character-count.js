import { C as i } from "../index-CtrK7FeN.js";
import { p as o, d as a } from "../configuration-C_XBPA12.js";
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
