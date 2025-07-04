import { css, html, LitElement } from 'lit'

class EditorTipTap extends LitElement {
  static styles = css`p { color: blue }`

  plugins?: {
    path: string
    exports?: string[]
  }[]

  private hasImportedConfiguration = false

  constructor() {
    super()
  }

  private async importModules() {
    if (!this.plugins || this.plugins.length === 0)
      return

    await Promise.all(
      this.plugins.map(async (plugin) => {
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
  }

  async render() {
    if (!this.hasImportedConfiguration) {
      await this.importModules()
      this.hasImportedConfiguration = true
    }

    return html`<p>Hello, I'm TipTap!</p>`
  }
}

window.customElements.define('editor-tiptap', EditorTipTap)
