import { n as e, r as t } from "../configuration-BT9xaJ2A.js";
import { t as n } from "../dist-BmtwYQ_m.js";
//#region src/plugins/character-count.ts
function r(r) {
	let i = t({
		pluginId: "character-count",
		config: r,
		getValidationSchema: (e) => e.object({ limit: e.number().min(1) })
	});
	function a(e) {
		return new DOMParser().parseFromString(e, "text/html").body.innerText.length;
	}
	return e({ extensions: [n.configure({
		limit: i.limit,
		textCounter: (e) => a(e)
	})] });
}
//#endregion
export { r as default };
