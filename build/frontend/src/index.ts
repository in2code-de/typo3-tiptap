import { css, html, LitElement } from 'lit'
import { defineTipTapPlugin, getConfiguration } from './configuration.ts'
import { tablePlugin } from './plugins/table.ts'
import './styles.css'

class EditorTipTap extends LitElement {
  static styles = css`p { color: blue }`

  render() {
    return html`<p>Hello, I'm TipTap!</p>`
  }
}

function init() {
  console.log('TODO: init TipTap editor')
  console.log(1751628463019, getConfiguration())

  window.customElements.define('editor-tiptap', EditorTipTap)
}

window.customElements.define('editor-tiptap', EditorTipTap)

export {
  defineTipTapPlugin,
  init,
  // plugins
  tablePlugin,
}
