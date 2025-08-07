import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { Decoration, DecorationSet } from 'prosemirror-view'

// Define the structure for style presets
export interface StylePreset {
  name: string
  classes: string[]
  allowedTags: string[]
  description?: string
}

// Extension options interface
export interface PredefinedStylingOptions {
  presets: StylePreset[]
}

// Plugin key for managing decorations
const predefinedStylingPluginKey = new PluginKey('predefinedStyling')

// Default presets
const defaultPresets: StylePreset[] = [
  {
    name: 'Black Box',
    classes: ['box', 'box--black'],
    allowedTags: ['p', 'div', 'span'],
    description: 'A black styled box',
  },
  {
    name: 'Blue Box',
    classes: ['box', 'box--blue'],
    allowedTags: ['p', 'div', 'span'],
    description: 'A blue styled box',
  },
  {
    name: 'Highlight',
    classes: ['highlight'],
    allowedTags: ['span', 'mark'],
    description: 'Highlighted text',
  },
]

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    predefinedStyling: {
      /**
       * Apply a predefined style preset to the current selection
       */
      applyStylePreset: (presetName: string) => ReturnType
      /**
       * Remove a predefined style preset from the current selection
       */
      removeStylePreset: (presetName: string) => ReturnType
      /**
       * Remove all predefined style presets from the current selection
       */
      removeAllStylePresets: () => ReturnType
      /**
       * Check if a style preset is active in the current selection
       */
      isStylePresetActive: (presetName: string) => boolean
    }
  }
}

export const PredefinedStyling = Extension.create<PredefinedStylingOptions>({
  name: 'predefinedStyling',

  addOptions() {
    return {
      presets: defaultPresets,
    }
  },

  addCommands() {
    return {
      applyStylePreset:
        (presetName: string) =>
          ({ commands, state, dispatch }) => {
            const preset = this.options.presets.find(p => p.name === presetName)
            if (!preset) {
              console.warn(`Style preset "${presetName}" not found`)
              return false
            }

            const { selection } = state
            const { from, to } = selection

            if (from === to) {
              // No selection, apply to current node
              return commands.updateAttributes(state.selection.$anchor.parent.type.name, {
                class: this.mergeClasses(
                  state.selection.$anchor.parent.attrs.class || '',
                  preset.classes,
                ),
              })
            }

            // Apply to selection
            return commands.setMark('span', {
              'class': preset.classes.join(' '),
              'data-preset': presetName,
            })
          },

      removeStylePreset:
        (presetName: string) =>
          ({ commands, state }) => {
            const preset = this.options.presets.find(p => p.name === presetName)
            if (!preset) {
              return false
            }

            const { selection } = state
            const { from, to } = selection

            if (from === to) {
              // Remove from current node
              const currentClasses = state.selection.$anchor.parent.attrs.class || ''
              const newClasses = this.removeClasses(currentClasses, preset.classes)

              return commands.updateAttributes(state.selection.$anchor.parent.type.name, {
                class: newClasses,
              })
            }

            // Remove from selection
            return commands.unsetMark('span')
          },

      removeAllStylePresets:
        () =>
          ({ commands, state }) => {
            const { selection } = state
            const { from, to } = selection

            if (from === to) {
              // Remove all preset classes from current node
              return commands.updateAttributes(state.selection.$anchor.parent.type.name, {
                class: '',
              })
            }

            // Remove all marks from selection
            return commands.unsetMark('span')
          },

      isStylePresetActive:
        (presetName: string) =>
          ({ state }) => {
            const preset = this.options.presets.find(p => p.name === presetName)
            if (!preset) {
              return false
            }

            const { selection } = state
            const { from, to } = selection

            if (from === to) {
              // Check current node
              const currentClasses = state.selection.$anchor.parent.attrs.class || ''
              return preset.classes.every(cls => currentClasses.includes(cls))
            }

            // Check if mark is active in selection
            const marks = state.selection.$anchor.marks()
            return marks.some(mark =>
              mark.type.name === 'span'
              && mark.attrs['data-preset'] === presetName,
            )
          },
    }
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: predefinedStylingPluginKey,
        state: {
          init() {
            return DecorationSet.empty
          },
          apply(tr, decorationSet) {
            // Update decorations to highlight active presets
            decorationSet = decorationSet.map(tr.mapping, tr.doc)

            // Add new decorations for active presets
            const { selection } = tr
            const decorations: Decoration[] = []

            // Check for active presets and add visual indicators
            this.spec.options.presets.forEach((preset: StylePreset) => {
              if (this.spec.commands.isStylePresetActive(preset.name)) {
                decorations.push(
                  Decoration.inline(selection.from, selection.to, {
                    class: `preset-active preset-${preset.name.toLowerCase().replace(/\s+/g, '-')}`,
                  }),
                )
              }
            })

            return decorationSet.add(tr.doc, decorations)
          },
        },
        props: {
          decorations(state) {
            return this.getState(state)
          },
        },
      }),
    ]
  },

  // Helper methods
  mergeClasses(existing: string, newClasses: string[]): string {
    const existingArray = existing.split(/\s+/).filter(Boolean)
    const merged = [...new Set([...existingArray, ...newClasses])]
    return merged.join(' ')
  },

  removeClasses(existing: string, classesToRemove: string[]): string {
    const existingArray = existing.split(/\s+/).filter(Boolean)
    const filtered = existingArray.filter(cls => !classesToRemove.includes(cls))
    return filtered.join(' ')
  },

  // Add storage for managing presets
  addStorage() {
    return {
      presets: this.options.presets,
    }
  },
})

// Usage example and utility functions
export class PredefinedStylingManager {
  private editor: any

  constructor(editor: any) {
    this.editor = editor
  }

  // Apply a style preset
  applyStyle(presetName: string): boolean {
    return this.editor.chain().focus().applyStylePreset(presetName).run()
  }

  // Remove a style preset
  removeStyle(presetName: string): boolean {
    return this.editor.chain().focus().removeStylePreset(presetName).run()
  }

  // Remove all style presets
  removeAllStyles(): boolean {
    return this.editor.chain().focus().removeAllStylePresets().run()
  }

  // Check if a style is active
  isStyleActive(presetName: string): boolean {
    return this.editor.commands.isStylePresetActive(presetName)
  }

  // Get all available presets
  getAvailablePresets(): StylePreset[] {
    return this.editor.storage.predefinedStyling?.presets || []
  }

  // Add a new preset
  addPreset(preset: StylePreset): void {
    if (this.editor.storage.predefinedStyling) {
      this.editor.storage.predefinedStyling.presets.push(preset)
    }
  }

  // Remove a preset
  removePreset(presetName: string): boolean {
    if (this.editor.storage.predefinedStyling) {
      const presets = this.editor.storage.predefinedStyling.presets
      const index = presets.findIndex((p: StylePreset) => p.name === presetName)
      if (index > -1) {
        presets.splice(index, 1)
        return true
      }
    }
    return false
  }

  // Toggle a style preset
  toggleStyle(presetName: string): boolean {
    if (this.isStyleActive(presetName)) {
      return this.removeStyle(presetName)
    }
    else {
      return this.applyStyle(presetName)
    }
  }
}
