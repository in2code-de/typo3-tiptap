import { defineCustomElement } from 'vue'
import TipTapEditor from './TipTapEditor.ce.vue'

const webComponent = defineCustomElement(TipTapEditor)
customElements.define('editor-tiptap', webComponent)
