import { ref } from 'vue'
import { defineTipTapPlugin } from '../configuration.ts'

export default function () {
  const isHtmlActive = ref(false)

  defineTipTapPlugin({
    commands: [
      {
        id: 'source',
        label: 'Source',
        iconIdentifier: 'source',
        action: ({ editor }) => {
          const editorContent = isHtmlActive.value
            ? editor.getText()
            : `<textarea>${editor.getHTML()}</textarea>`

          editor.commands.setContent(editorContent)
          isHtmlActive.value = !isHtmlActive.value
        },
        isActive: () => isHtmlActive.value,
      },
    ],
  })
}
