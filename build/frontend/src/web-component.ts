import type { Extension } from '@tiptap/core'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getConfiguration } from './configuration.ts'

interface PluginImport {
  path: string
  exports?: string[]
}

const executedFunctions: (() => void)[] = []

@customElement('editor-tiptap')
export class EditorTipTap extends LitElement {
  @property({ type: String })
  plugins?: string

  @property({ type: Boolean, state: true })
  private pluginsLoaded = false

  @property({ type: Array })
  private activeTipTapPlugins: string[] = []

  private get textArea(): HTMLTextAreaElement | null {
    return this.querySelector<HTMLTextAreaElement>('textarea')
  }

  private editor: Editor | undefined

  async firstUpdated() {
    if (this.plugins) {
      await this.importPluginsConfiguration(this.plugins)
    }

    this.pluginsLoaded = true

    // wait for lit rerender
    await this.updateComplete

    this.setupTipTapEditorInstance()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.editor) {
      this.editor.destroy()
    }
  }

  async updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('plugins')) {
      this.pluginsLoaded = false
      await this.importPluginsConfiguration(this.plugins)
      this.pluginsLoaded = true

      // remount editor to apply new configuration
      if (this.editor) {
        this.editor.destroy()
        this.setupTipTapEditorInstance()
      }
    }
  }

  async importPluginsConfiguration(rawValue?: string) {
    if (!rawValue)
      return

    try {
      const plugins = JSON.parse(rawValue.replace(/'/g, '"')) as PluginImport[]

      const imports: (() => void)[][] = await Promise.all(
        plugins.map(async (plugin) => {
          const importValue = await import(plugin.path)
          const exportNames = plugin.exports ?? ['default']
          return exportNames.map(name => importValue[name])
        }),
      )

      imports.forEach((functionRepository) => {
        functionRepository.forEach((fn) => {
          if (!(typeof fn === 'function'))
            return

          if (executedFunctions.includes(fn))
            return

          fn()
          executedFunctions.push(fn)
        })
      })
    }
    catch (error) {
      console.error('in2TipTap: Failed to parse plugins attribute:', error)
    }
  }

  private setupTipTapEditorInstance() {
    if (this.editor) {
      console.warn('in2TipTap: Editor instance already exists, destroying it before creating a new one.')
      this.editor.destroy()
      this.editor = undefined
    }

    const textArea = this.textArea
    if (!textArea) {
      throw new Error('No textarea found in the container.')
    }

    const tipTapContainer = this.shadowRoot?.querySelector<Element>('#tiptap-container')
    if (!tipTapContainer)
      throw new Error('No tiptap container found in the shadow DOM.')

    this.editor = new Editor({
      element: tipTapContainer,
      extensions: [
        StarterKit,
        ...(getConfiguration()?.extension ?? []) as Extension[],
      ],
      content: textArea.value,
      onUpdate: () => {
        if (textArea && this.editor) {
          textArea.value = this.editor.getHTML()
        }
      },
      onTransaction: () => {
        const configuration = getConfiguration()

        if (!configuration.commands)
          return

        const activePlugins = configuration.commands
          .filter(command => this.editor?.isActive(command.id))
          .map(command => command.id)

        this.activeTipTapPlugins = activePlugins
      },
    })
  }

  render() {
    // Only show commands after plugins are loaded
    if (!this.pluginsLoaded) {
      return html`
        <slot></slot>`
    }

    const configuration = getConfiguration()

    const shouldRenderStyles = configuration.styles && configuration.styles.length > 0

    return html`
      <slot></slot>

      <link rel="stylesheet" href="/src/styles.css">

      <div class="container">
        ${configuration?.commands && configuration.commands.length > 0
            ? html`
            <div class="control-group">
              ${shouldRenderStyles
                ? html`
                  <select>
                    ${configuration.styles!.map(style => html`
                        <option>${style.name}</option>
                    `)}
                  </select>
                `
                : ''}

              <div>
                <nav
                  class="button-group"
                  style="list-style: none"
                >
                  ${configuration.commands.map(command => html`
                    <button
                      class="${this.activeTipTapPlugins.includes(command.id) ? 'active' : ''}"
                      style="${this.activeTipTapPlugins.includes(command.id) ? 'background-color: red' : ''}"
                      @click="${() => command.action({ editor: this.editor! })}"
                    >
                      <typo3-icon name="${command.iconIdentifier}"></typo3-icon>
                      ${command.label}
                    </button>
                  `)}
                </nav>
              </div>
            </div>
          `
            : html``
        }

        <div
          id="tiptap-container"
          class="tip-tap-container"
        ></div>
      </div>
    `
  }
}
