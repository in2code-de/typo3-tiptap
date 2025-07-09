import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('typo3-icon')
export class IconComponent extends LitElement {
  @property({ type: String })
  name = ''

  @property({ type: String })
  size = '16px'

  static styles = css`
    :host {
      display: inline-block;
      width: var(--icon-size, 16px);
      height: var(--icon-size, 16px);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  `

  updated(changedProperties) {
    if (changedProperties.has('size')) {
      this.style.setProperty('--icon-size', this.size)
    }
  }

  // Icon library - add more icons here
  private get icons() {
    return {
      bold: html`
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M293.54-215v-530H488q61.15 0 110.58 38.08Q648-668.85 648-604.38q0 44.84-21.66 73.11-21.65 28.27-46.65 41.04 30.77 10.61 58.77 41.96 28 31.35 28 84.42 0 76.69-56.54 112.77T496-215H293.54Zm86-79.69h113.23q47.23 0 66.77-26.23t19.54-50.31q0-24.08-19.54-50.31-19.54-26.23-68.62-26.23H379.54v153.08Zm0-230.31h103.77q36.46 0 57.81-20.85 21.34-20.84 21.34-49.92 0-30.92-22.57-50.54-22.58-19.61-55.35-19.61h-105V-525Z"/></svg>
      `,
      redo: html`
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/></svg>
      `,
      undo: html`
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>
      `,
    }
  }

  private getFallbackIcon() {
    return html`
      <svg viewBox="0 0 24 24">
        <path
          d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,21H5V3H13V9H19V21Z"/>
      </svg>
    `
  }

  render() {
    const icon = this.icons[this.name]!
    return icon || this.getFallbackIcon()
  }
}
