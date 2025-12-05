import { q as u, U as e, p as s } from "./index-DUM9j6q6.js";
import { i } from "./clsx-eca3fadc-OuTLNxxd-R4Zi8OoI.js";
const h = `.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input :focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:block}:host([hidden]){display:none !important}`, n = h, a = class {
  constructor(r) {
    u(this, r), this.utrechtBlur = e(this, "utrechtBlur"), this.utrechtChange = e(this, "utrechtChange"), this.utrechtFocus = e(this, "utrechtFocus"), this.utrechtInput = e(this, "utrechtInput"), this.disabled = !1, this.readOnly = !1, this.checked = !1, this.value = "";
  }
  render() {
    const { checked: r, disabled: c, value: o } = this;
    return s("input", { key: "d58f170d3755f4d8839e7ce3272cdf5ed6b4f757", class: i("utrecht-checkbox"), type: "checkbox", checked: r, disabled: c, value: o, onBlur: (t) => this.utrechtBlur.emit(t), onChange: (t) => this.utrechtChange.emit(t), onFocus: (t) => this.utrechtFocus.emit(t), onInput: (t) => {
      this.checked = t.target.checked, this.utrechtInput.emit(t);
    } });
  }
};
a.style = n;
export {
  a as utrecht_checkbox
};
