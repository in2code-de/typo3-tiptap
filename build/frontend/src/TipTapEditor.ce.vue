<script setup lang="ts">
import type { Extension } from '@tiptap/core'
import type { TipTapConfiguration } from './types'
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
const configuration = ref<TipTapConfiguration>()

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

function executeCommandHooks() {
  if (!editor.value)
    throw new Error('Editor is not initialized yet.')

  if (!configuration.value)
    throw new Error('Configuration is not initialized yet.')

  const executedCommandHooksId: string[] = []

  configuration.value.toolbar.forEach((group) => {
    group.commands.forEach((command) => {
      if (
        command.hooks?.onEditorMounted
        && !executedCommandHooksId.includes(command.id)
      ) {
        command.hooks.onEditorMounted({ editor: editor.value! })
        executedCommandHooksId.push(command.id)
      }
    })
  })

  configuration.value.bubbleMenu.forEach((group) => {
    group.commands.forEach((command) => {
      if (
        command.hooks?.onEditorMounted
        && !executedCommandHooksId.includes(command.id)
      ) {
        command.hooks.onEditorMounted({ editor: editor.value! })
        executedCommandHooksId.push(command.id)
      }
    })
  })
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
      ...(configuration.value?.extensions ?? []) as Extension[],
    ],
    onUpdate: () => {
      if (!editor.value || !textarea.value)
        return

      textarea.value.value = editor.value.getHTML()
    },
  })

  executeCommandHooks()
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
    <!-- Command Bar -->
    <nav
      v-if="configuration.toolbar.some(group => group.commands.length > 0)"
      class="tiptap-toolbar"
    >
      <template
        v-for="(group, groupIndex) in configuration.toolbar"
        :key="`tiptap-command-group-${groupIndex}`"
      >
        <ol
          v-if="group.commands.length > 0"
          class="tiptap-toolbar__group"
        >
          <li
            v-for="command in group.commands"
            :key="`tiptap-group-${group.id}-command-${command.id}`"
          >
            <button
              class="tiptap-toolbar__group-command"
              :class="{
                'is-active': command?.status?.isActive?.({ editor }) ?? false,
              }"
              :disabled="command?.status?.isDisabled?.({ editor }) ?? false"
              @click="command.onExecute({ editor })"
            >
              <Icon
                :icon="command.iconIdentifier"
                size="16px"
              />
              <span class="tiptap-sr-only">{{ command.label }}</span>
            </button>
          </li>
        </ol>
      </template>
    </nav>

    <!-- Bubble Menu -->
    <nav v-if="configuration.bubbleMenu.some(group => group.commands.length > 0)">
      <BubbleMenu :editor="editor">
        <div class="tiptap-bubble-menu">
          <template
            v-for="(group, groupIndex) in configuration.bubbleMenu"
            :key="`tiptap-command-group-${groupIndex}`"
          >
            <ol
              v-if="group.commands.length > 0"
              class="tiptap-toolbar__group"
            >
              <li
                v-for="command in group.commands"
                :key="`tiptap-group-${group.id}-command-${command.id}`"
              >
                <button
                  class="tiptap-toolbar__group-command"
                  :class="{
                    'is-active': command?.status?.isActive?.({ editor }) ?? false,
                  }"
                  :disabled="command?.status?.isDisabled?.({ editor }) ?? false"
                  @click="command.onExecute({ editor })"
                >
                  <Icon
                    :icon="command.iconIdentifier"
                    size="16px"
                  />
                  <span class="tiptap-sr-only">{{ command.label }}</span>
                </button>
              </li>
            </ol>
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
  --tiptap-color-primary: light-dark(hsl(220deg 90% 56%), hsl(220deg 90% 66%));
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
  padding: var(--tiptap-border-radius-inner-gap);
  background-color: var(--tiptap-color-surface);
  border-block-end: 1px solid var(--tiptap-color-surface-border);
}

.tiptap-toolbar__group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--tiptap-toolbar-gap);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tiptap-toolbar__group:not(:last-child) {
  margin-inline-end: var(--tiptap-toolbar-gap);
  padding-inline-end: var(--tiptap-toolbar-gap);
  border-inline-end: 1px solid var(--tiptap-color-surface-border);
}

.tiptap-toolbar__group-command {
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

.tiptap-bubble-menu {
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
