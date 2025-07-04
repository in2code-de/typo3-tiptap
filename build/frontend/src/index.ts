import { css, html, LitElement } from 'lit'
import { defineTipTapPlugin, getConfiguration } from './configuration.ts'
import './styles.css'

class EditorTipTap extends LitElement {
  static styles = css`p { color: blue }`

  render() {
    return html`<p>Hello, I'm TipTap!</p>`
  }
}

async function init(data: {
  plugins: {
    path: string
    exports?: string[]
  }[]
}) {
  await Promise.all(
    data.plugins.map(async (plugin) => {
      const module = await import(plugin.path)

      if (plugin.exports) {
        plugin.exports.forEach((exportName) => {
          const exportData = module[exportName]

          if (exportData && exportData === 'function') {
            module[exportName]()
          }
          else {
            console.warn(`in2tiptap: Export ${exportName} not found in ${plugin.path}`)
          }
        })
      }
      else {
        if (module.default && typeof module.default === 'function') {
          module.default()
        }
        else {
          console.warn(`in2tiptap: No default export found in ${plugin.path} and no exports specified`)
        }
      }
    }),
  )

  console.log(getConfiguration())

  window.customElements.define('editor-tiptap', EditorTipTap)
}

export {
  defineTipTapPlugin,
  init,
}
