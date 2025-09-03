<script setup lang="ts">
import type { Extension } from '@tiptap/core'
import type { TipTapPluginOptions } from './types'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { BubbleMenu } from '@tiptap/vue-3/menus'
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
const configuration = ref<TipTapPluginOptions>()

const hasDarkModeEnabled = ref(false)

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

  // call onMounted plugin callback functions
  configuration.value.commands?.forEach((command) => {
    if (command.onEditorMounted && editor.value)
      command.onEditorMounted({ editor: editor.value })
  })
})

onUnmounted(() => editor.value?.destroy())
</script>

<template>
  <div
    v-if="editor"
    class="tiptap-container"
    :style="{
      colorScheme: hasDarkModeEnabled ? 'dark' : 'light',
    }"
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

    <nav v-if="configuration.commands">
      <BubbleMenu :editor="editor">
        <div class="tiptap-toolbar-floating">
          <template
            v-for="command in configuration.commands"
            :key="command.id"
          >
            <button
              v-if="command.isAvailableInBubbleMenu && command.isDisabled"
              v-show="!command.isDisabled({ editor })"
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
          </template>
        </div>
      </BubbleMenu>
    </nav>

    <EditorContent :editor="editor" />
  </div>

  <slot ref="slotRef" />

  <button @click="hasDarkModeEnabled = !hasDarkModeEnabled">
    {{ hasDarkModeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
  </button>
</template>

<style>
.tiptap-container {
  /* Primitive colors */
  --tiptap-color-primary: #4c51bf;
  --tiptap-color-neutral-white: hsl(0deg 0% 100%);
  --tiptap-color-neutral-10: hsl(0deg 0% 10%);
  --tiptap-color-neutral-20: hsl(0deg 0% 20%);
  --tiptap-color-neutral-30: hsl(0deg 0% 30%);
  --tiptap-color-neutral-80: hsl(0deg 0% 80%);
  --tiptap-color-neutral-90: hsl(0deg 0% 90%);

  /* Semantic colors */
  --tiptap-color-surface: light-dark(var(--tiptap-color-neutral-white), var(--tiptap-color-neutral-10));
  --tiptap-color-surface-highlight: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));
  --tiptap-color-surface-border: light-dark(var(--tiptap-color-neutral-90), var(--tiptap-color-neutral-20));

  /* Utility variables */
  --tiptap-border-radius: 0.7rem;
  --tiptap-border-radius-inner-gap: 0.25rem;
  --tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));
  --tiptap-toolbar-gap: 0.25rem;

  /* Temporary styling before implementation into TYPO3 */
  background-color: light-dark(white, var(--tiptap-color-neutral-10));
  color: light-dark(black, white);
}

.tiptap {
  padding: 3rem;
  min-block-size: 300px;
  outline: none;
}

.tiptap-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--tiptap-toolbar-gap);
  padding: var(--tiptap-border-radius-inner-gap);
  background-color: var(--tiptap-color-surface);
  border-block-end: 1px solid var(--tiptap-color-surface-border);
}

.tiptap-command-button {
  padding: 0.5rem;
  background: none;
  border: none;
  border-radius: var(--tiptap-border-inner-radius);
  aspect-ratio: 1/1;
  block-size: 100%;
  transition: ease 0.2s;
  transition-property: background-color, color;

  &:is(:hover, :focus):not(:disabled) {
    background-color: var(--tiptap-color-surface-highlight);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.is-active {
    background-color: var(--tiptap-color-surface-highlight);
    color: var(--tiptap-color-primary);
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

.tiptap-toolbar-floating {
  display: flex;
  padding: var(--tiptap-border-radius-inner-gap);
  background-color: var(--tiptap-color-surface);
  border: 1px solid var(--tiptap-color-surface-border);
  border-radius: var(--tiptap-border-radius);
  box-shadow: 0 0.1rem 0.3rem rgb(0 0 0 / 0.1);
  gap: var(--tiptap-toolbar-gap);

  .tiptap-command-button {
    border-radius: var(--tiptap-border-inner-radius);
  }
}
</style>
