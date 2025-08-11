<script setup lang="ts">
import type { Extension } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import Icon from './components/Icon.vue'
import { getConfiguration } from './configuration.ts'

interface PluginImport {
  path: string
  exports?: string[]
}

const props = defineProps<{
  plugins: string
}>()

const slotRef = ref<HTMLSlotElement | undefined>()
const textarea = ref<HTMLTextAreaElement | undefined>()

const editor = ref<Editor>()
const configuration = ref<any>()

let hasPluginConfigurationBeenLoaded = false
async function loadPluginConfiguration() {
  if (hasPluginConfigurationBeenLoaded)
    return

  const plugins = JSON.parse(props.plugins.replace(/'/g, '"')) as PluginImport[]

  const imports: (() => void)[][] = await Promise.all(
    plugins.map(async (plugin) => {
      const importValue = await import(/* @vite-ignore */ plugin.path)
      const exportNames = plugin.exports ?? ['default']
      return exportNames.map(name => importValue[name])
    }),
  )

  imports.forEach((functionRepository) => {
    functionRepository.forEach((fn) => {
      if (!(typeof fn === 'function'))
        return

      fn()
    })
  })

  hasPluginConfigurationBeenLoaded = true
}

function isGroupCommand(commandId: string) {
  return configuration.value.groupCommands
    && Object.keys(configuration.value.groupCommands).includes(commandId)
}

// const navbar = computed(() => {
//   const groupCommands
// })

onMounted(async () => {
  await loadPluginConfiguration()
  configuration.value = getConfiguration()

  await nextTick()

  const textareaReference = slotRef.value?.assignedElements()[0] as HTMLTextAreaElement | undefined
  if (!textareaReference || !(textareaReference instanceof HTMLTextAreaElement)) {
    console.error('No textarea found in slot "content".')
    return
  }

  textarea.value = textareaReference

  editor.value = new Editor({
    content: textarea.value.value,
    extensions: [
      StarterKit,
      ...(configuration.value?.extension ?? []) as Extension[],
    ],
    onUpdate: () => {
      if (!editor.value || !textarea.value)
        return

      textarea.value.value = editor.value.getHTML()
    },
  })
})

onUnmounted(() => editor.value?.destroy())
</script>

<template>
  <div
    v-if="editor"
    class="tiptap-container"
  >
    <nav
      v-if="configuration.commands"
      class="tiptap-toolbar"
    >
      <button
        v-for="command in configuration.commands"
        :key="command.id"
        class="tiptap-command-button"
        :class="{
          'is-active': command?.isActive?.({ editor }) ?? false,
        }"
        :disabled="command?.isDisabled?.({ editor }) ?? false"
        @click="command.action({ editor })"
      >
        <Icon
          :icon="command.iconIdentifier"
          size="16px"
        />
        <span class="tiptap-sr-only">{{ command.label }}</span>
      </button>
    </nav>
  </div>

  <EditorContent :editor="editor" />

  <slot ref="slotRef" />
</template>

<style>
.tiptap-container {
  --tiptap-primary: #4c51bf;
  --tiptap-neutral-light: light-dark(#efefef, #333);
}

.tiptap {
  padding: 3rem;
  min-block-size: 300px;
  outline: none;
}

.tiptap-toolbar {
  border-block-end: 1px solid var(--tiptap-neutral-light);
}

.tiptap-command-button {
  padding: 0.5rem;
  background: none;
  border: none;
  aspect-ratio: 1/1;
  block-size: 100%;
  transition: ease 0.2s;
  transition-property: background-color, color;

  &:is(:hover, :focus):not(:disabled) {
    background-color: var(--tiptap-neutral-light);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.is-active {
    background-color: var(--tiptap-neutral-light);
    color: var(--tiptap-primary);
  }
}

.tiptap-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.icon-wrapper {
  display: inline-block;
  position: relative;
}

.icon-wrapper svg {
  inline-size: 100%;
  block-size: 100%;
}

/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    background-color: var(--purple-light);
    border-radius: 0.4rem;
    color: var(--black);
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: var(--black);
    border-radius: 0.5rem;
    color: var(--white);
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid var(--gray-3);
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--gray-2);
    margin: 2rem 0;
  }
}
</style>
