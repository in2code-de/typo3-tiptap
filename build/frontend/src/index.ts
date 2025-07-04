import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './styles.css'

@customElement('editor-tiptap')
export class EditorTipTap extends LitElement {
  static styles = css`p { color: blue }`

  render() {
    return html`<p>Hello, I'm TipTap!</p>`
  }
}
