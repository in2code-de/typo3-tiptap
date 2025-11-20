import { C as a } from "../index-Ds3IlGiQ.js";
import { p as o, d as e } from "../configuration-Kd-wz9S1.js";
function m(n) {
  const t = o({
    pluginId: "character-count",
    config: n,
    getValidationSchema: (i) => i.object({
      limit: i.number().min(1)
    })
  });
  e({
    extensions: [
      a.configure({
        limit: t.limit
      })
    ]
  });
}
export {
  m as default
};
