import { q as r, p as o } from "./index-DUM9j6q6.js";
import { i as u } from "./clsx-eca3fadc-OuTLNxxd-R4Zi8OoI.js";
const n = ".utrecht-button-group{align-items:baseline;background-color:var(--utrecht-button-group-background-color);break-inside:avoid;display:flex;flex-wrap:wrap;gap:var(--utrecht-button-group-inline-gap, 1em);margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-button-group-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-button-group-margin-block-start, 0));min-block-size:var(--utrecht-button-block-size);padding-block-end:var(--utrecht-button-group-padding-block-end);padding-block-start:var(--utrecht-button-group-padding-block-start)}.utrecht-button-group--distanced{--utrecht-space-around:1}.utrecht-button-group__link-button--row,.utrecht-button-group--row .utrecht-link-button,.utrecht-button-group:not(.utrecht-button-group--column) .utrecht-link-button{--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0}.utrecht-button-group--column{flex-direction:column;gap:var(--utrecht-button-group-block-gap, 1em)}:host{display:block}:host([hidden]){display:none !important}", c = n, e = class {
  constructor(t) {
    r(this, t), this.direction = void 0;
  }
  render() {
    const { direction: t } = this;
    return o("div", { key: "258c21fc35ddbf114a92037b6fd7cc9c4c9f2945", class: u("utrecht-button-group", {
      "utrecht-button-group--column": t === "column",
      "utrecht-button-group--row": t === "row"
    }) }, o("slot", { key: "9a0570f8b24822702be5d0b74ab8cc5b315d41bc" }));
  }
};
e.style = c;
export {
  e as utrecht_button_group
};
