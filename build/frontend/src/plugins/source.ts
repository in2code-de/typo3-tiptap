import { defineTipTapPlugin } from '../configuration.ts'

let isHTMLViewActive = false

export default function () {
  defineTipTapPlugin({
    commands: [
      {
        id: 'source',
        label: 'Source',
        iconIdentifier: 'source',
        action: ({ editor }) => {
          const editorContent = isHTMLViewActive
            ? editor.getText()
            : `<textarea>${editor.getHTML()}</textarea>`

          editor.commands.setContent(editorContent)
          isHTMLViewActive = !isHTMLViewActive
        },
      },
    ],
  })
}
