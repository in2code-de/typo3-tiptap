import { defineCustomElement } from 'vue'
import { defineTipTapPlugin } from './configuration.ts'
import TipTapEditor from './TipTapEditor.ce.vue'

const webComponent = defineCustomElement(TipTapEditor)
customElements.define('editor-tiptap', webComponent)

export {
  defineTipTapPlugin,
}
