import { q as a, p as r } from "./index-DUM9j6q6.js";
import { i as e } from "./clsx-eca3fadc-OuTLNxxd-R4Zi8OoI.js";
const o = ".utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}", c = o, i = class {
  constructor(t) {
    a(this, t), this.viewport = void 0;
  }
  render() {
    const { viewport: t } = this;
    return r("div", { key: "a6164e33edca910e3e4723583ade6cfee616cbdc", class: e("utrecht-backdrop", t && "utrecht-backdrop--viewport") }, r("slot", { key: "f46cad65a192d1bd5e319eb69e5fb2347205129f" }));
  }
};
i.style = c;
export {
  i as utrecht_backdrop
};
