import TextAlign from '@tiptap/extension-text-align'
import { defineTipTapPlugin } from '../configuration.ts'

let hasTextAlignExtensionBeenSetup = false

function ensureTextAlignPluginSetup() {
  if (hasTextAlignExtensionBeenSetup)
    return

  defineTipTapPlugin({
    extension: [TextAlign.configure({
      // Specify the types you want to apply text alignment to
      types: ['heading', 'paragraph'],
    })],
  })

  hasTextAlignExtensionBeenSetup = true
}

export function setupJustifyLeft() {
  ensureTextAlignPluginSetup()

  defineTipTapPlugin({
    commands: [
      {
        id: 'justify-left',
        label: 'Justify Left',
        iconIdentifier: 'justify-left',
        action: ({ editor }) => {
          editor.chain().focus().setTextAlign('left').run()
        },
        isActive: ({ editor }) => editor.isActive({ textAlign: 'left' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('left'),
      },
    ],
  })
}

export function setupJustifyCenter() {
  ensureTextAlignPluginSetup()

  defineTipTapPlugin({
    commands: [
      {
        id: 'justify-center',
        label: 'Justify Center',
        iconIdentifier: 'justify-center',
        action: ({ editor }) => {
          editor.chain().focus().setTextAlign('center').run()
        },
        isActive: ({ editor }) => editor.isActive({ textAlign: 'center' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('center'),
      },
    ],
  })
}

export function setupJustifyRight() {
  ensureTextAlignPluginSetup()

  defineTipTapPlugin({
    commands: [
      {
        id: 'justify-right',
        label: 'Justify Right',
        iconIdentifier: 'justify-right',
        action: ({ editor }) => {
          console.log(1754577632277, 'called1')
          editor.chain().focus().setTextAlign('right').run()
        },
        isActive: ({ editor }) => editor.isActive({ textAlign: 'right' }),
        isDisabled: ({ editor }) => !editor.can().setTextAlign('right'),
      },
    ],
  })
}
