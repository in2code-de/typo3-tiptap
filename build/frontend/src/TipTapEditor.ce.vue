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
  <slot ref="slotRef" />

  <template v-if="editor">
    <div class="container">
      <div class="control-group">
        <div
          v-if="configuration?.commands"
          class="commands-group"
        >
          <nav class="button-group">
            <button
              v-for="command in configuration.commands"
              :key="command.id"
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
              {{ command.label }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <EditorContent
      :editor="editor"
      class="tip-tap-container"
    />
  </template>
</template>

<style>
.tiptap {
  min-height: 500px;
}

/* Basic editor styles */
editor-tiptap {
  .tiptap {
    min-height: 500px;
  }

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

.control-group {
  margin-block-end: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
    }
  }

  button[disabled] {
    cursor: not-allowed;
  }

  .is-active {
    background-color: red;
  }
}

.icon-wrapper {
  display: inline-block;
  position: relative;
}

.icon-wrapper svg {
  inline-size: 100%;
  block-size: 100%;
}
</style>
