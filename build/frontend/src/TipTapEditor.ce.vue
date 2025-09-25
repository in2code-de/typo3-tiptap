<script setup lang="ts">
import type { Extension } from '@tiptap/core'
import type { ParentNodeResult } from './plugins/styles.ts'
import type { TipTapCommand, TipTapConfiguration } from './types'
import { DragHandle } from '@tiptap/extension-drag-handle-vue-3'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { BubbleMenu } from '@tiptap/vue-3/menus'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import Dropdown from './components/Dropdown.vue'
import Icon from './components/Icon.vue'
import { getConfiguration } from './configuration.ts'
import { getEditorSourceViewActiveStatus } from './plugins/source.ts'

interface PluginImport {
  path: string
  exports?: string[]
}

const props = defineProps<{
  plugins: string
  options: string
  enableContentDragAndDrop: string
}>()

const slotRef = ref<HTMLSlotElement | undefined>()
const textarea = ref<HTMLTextAreaElement | undefined>()

const editor = ref<Editor>()
const configuration = ref<TipTapConfiguration>()

const isHtmlSourceViewActive = ref(false)
const isTopBarDropdownActive = ref(false)
const isDarkModeEnabled = ref(false)

const stylesParentNode = ref<ParentNodeResult>()

const parsedTipTapOptions = JSON.parse(props.options || '{}') as unknown

const shouldShowBubbleMenu = computed(() => {
  if (!configuration.value)
    return false

  if (isHtmlSourceViewActive.value)
    return false

  if (isTopBarDropdownActive.value)
    return false

  return configuration.value.bubbleMenu.some(group => group.commands.length > 0)
})

const styles: {
  name: string
  element: string
  classes: string[]
}[] = [
  {
    name: 'Orange Title h1',
    element: 'h1',
    classes: ['text-3xl', 'font-bold', 'text-orange-600'],
  },
  {
    name: 'Orange Title H2',
    element: 'h2',
    classes: ['text-3xl', 'font-bold', 'text-orange-600'],
  },
  {
    name: 'Blue Title H3',
    element: 'h3',
    classes: ['text-2xl', 'font-bold', 'text-blue-600'],
  },
  {
    name: 'Link Blue',
    element: 'a',
    classes: ['text-blue-600', 'underline'],
  },
  {
    name: 'Green Title H4',
    element: 'h4',
    classes: ['text-xl', 'font-bold', 'text-green-600'],
  },
  {
    name: 'Paragraph Green',
    element: 'p',
    classes: ['text-green-600'],
  },
  {
    name: 'Unordered List Blue',
    element: 'ul',
    classes: ['list-disc', 'list-inside', 'text-blue-600'],
  },
  {
    name: 'Ordered List Blue',
    element: 'ol',
    classes: ['list-disc', 'list-inside', 'text-blue-600'],
  },
]

const availableStyles = computed(() => {
  if (!stylesParentNode.value || !stylesParentNode.value.tagName)
    return []

  return styles.filter(
    style => style.element.toLowerCase() === stylesParentNode.value?.tagName.toLowerCase(),
  )
})

let hasPluginConfigurationBeenLoaded = false
async function loadPluginConfiguration() {
  if (hasPluginConfigurationBeenLoaded)
    return

  const plugins = JSON.parse(props.plugins.replace(/'/g, '"')) as PluginImport[]

  const imports: ((options: unknown) => void)[][] = await Promise.all(
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

      fn(parsedTipTapOptions)
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

function getCommandIsDisabledStatus(command: TipTapCommand) {
  // when html source mode is active, only enable source command to re-enable WYSIWYG mode
  if (isHtmlSourceViewActive.value && command.id !== 'source')
    return true

  return command?.status?.isDisabled?.({ editor: editor.value! }) ?? false
}

function getCommandIsVisible(command: TipTapCommand) {
  console.log(1757599058383, { command })

  if (command.status && command.status.isVisible)
    return command.status.isVisible({ editor: editor.value! })

  return true
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
      StarterKit.configure({
        link: {
          openOnClick: false,
        },
      }),
      Typography,
      ...(configuration.value?.extensions ?? []) as Extension[],
    ],
    onUpdate: () => {
      if (!editor.value || !textarea.value)
        return

      isHtmlSourceViewActive.value = getEditorSourceViewActiveStatus(editor.value)
      textarea.value.value = isHtmlSourceViewActive.value
        ? editor.value.getText()
        : editor.value.getHTML()
    },
  })

  // update parent node to update styles selection
  editor.value.on('parentNodeChanged', (data) => {
    if (data.tagName === 'doc') {
      stylesParentNode.value = undefined
      return
    }

    stylesParentNode.value = data
  })

  watch(stylesParentNode, () => {
    console.log('Parent node changed:', stylesParentNode.value)
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
      colorScheme: isDarkModeEnabled ? 'dark' : 'light',
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
          <li v-if="group.dropdown">
            <Dropdown
              :label="group.dropdown.label"
              :icon-identifier="group.dropdown.iconIdentifier"
              :items="group.commands
                .filter(getCommandIsVisible)
                .map(command => ({
                  label: command.label,
                  isActive: command?.status?.isActive?.({ editor }) ?? false,
                  isDisabled: getCommandIsDisabledStatus(command),
                  icon: command.iconIdentifier,
                  action: () => command.onExecute({ editor }),
                }))
              "
              @open="isTopBarDropdownActive = true"
              @close="isTopBarDropdownActive = false"
            />
          </li>

          <template v-else>
            <li
              v-for="command in group.commands"
              :key="`tiptap-group-${group.id}-command-${command.id}`"
            >
              <button
                v-if="getCommandIsVisible(command)"
                :key="isHtmlSourceViewActive"
                class="tiptap-toolbar__group-command"
                :class="{
                  'is-active': command?.status?.isActive?.({ editor }) ?? false,
                }"
                :disabled="getCommandIsDisabledStatus(command)"
                @click="command.onExecute({ editor })"
              >
                <span class="tiptap-sr-only">{{ command.label }}</span>
                <Icon
                  :icon="command.iconIdentifier"
                  size="16px"
                />
              </button>
            </li>
          </template>
        </ol>
      </template>
    </nav>

    <!-- Bubble Menu -->
    <nav v-if="configuration && shouldShowBubbleMenu">
      <BubbleMenu :editor="editor">
        <div class="tiptap-bubble-menu">
          <template
            v-for="(group, groupIndex) in configuration.bubbleMenu"
            :key="`tiptap-command-group-${groupIndex}`"
          >
            <ol
              v-if="group.commands.some(command => !getCommandIsDisabledStatus(command))"
              class="tiptap-toolbar__group"
            >
              <li v-if="group.dropdown">
                <Dropdown
                  :key="isHtmlSourceViewActive"
                  :label="group.dropdown.label"
                  :icon-identifier="group.dropdown.iconIdentifier"
                  :items="group.commands
                    .filter(getCommandIsVisible)
                    .map(command => ({
                      label: command.label,
                      isActive: command?.status?.isActive?.({ editor }) ?? false,
                      isDisabled: getCommandIsDisabledStatus(command),
                      icon: command.iconIdentifier,
                      action: () => command.onExecute({ editor }),
                    }))
                  "
                />
              </li>

              <template v-else>
                <li
                  v-for="command in group.commands"
                  :key="`tiptap-group-${group.id}-command-${command.id}`"
                >
                  <button
                    v-if="getCommandIsVisible(command)"
                    :key="isHtmlSourceViewActive"
                    class="tiptap-toolbar__group-command"
                    :class="{
                      'is-active': command?.status?.isActive?.({ editor }) ?? false,
                    }"
                    :disabled="getCommandIsDisabledStatus(command)"
                    @click="command.onExecute({ editor })"
                  >
                    <span class="tiptap-sr-only">{{ command.label }}</span>
                    <Icon
                      :icon="command.iconIdentifier"
                      size="16px"
                    />
                  </button>
                </li>
              </template>
            </ol>
          </template>
        </div>
      </BubbleMenu>
    </nav>

    <DragHandle
      v-if="enableContentDragAndDrop === 'true'"
      :editor="editor"
    >
      <div class="custom-drag-handle" />
    </DragHandle>

    <EditorContent :editor="editor" />

    <pre>{{ availableStyles }}</pre>
  </div>

  <slot ref="slotRef" />

  <button @click="isDarkModeEnabled = !isDarkModeEnabled">
    {{ isDarkModeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
  </button>
</template>

<style lang="scss">
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
  --tiptap-color-text-disabled: light-dark(var(--tiptap-color-neutral-30), var(--tiptap-color-neutral-80));

  /* Utility variables */
  --tiptap-border-radius: 0.7rem;
  --tiptap-border-radius-inner-gap: 0.25rem;
  --tiptap-border-inner-radius: calc(var(--tiptap-border-radius) - var(--tiptap-border-radius-inner-gap));
  --tiptap-toolbar-gap: 0.25rem;
  --tiptap-box-shadow: 0 0.1rem 0.3rem rgb(0 0 0 / 0.1);

  /* Button reset */
  :where(& button) {
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: none;
  }

  /* Temporary styling before implementation into TYPO3 */
  background-color: light-dark(white, var(--tiptap-color-neutral-10));
  color: light-dark(black, white);

  /* text-3xl */
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  /* text-2xl */
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  /* text-xl */
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  /* font-bold */
  .font-bold {
    font-weight: 700;
  }

  /* text-orange-600 */
  .text-orange-600 {
    color: #ea580c;
  }

  /* text-blue-600 */
  .text-blue-600 {
    color: #2563eb;
  }

  /* text-green-600 */
  .text-green-600 {
    color: #16a34a;
  }

  .text-blue-600 {
    color: #2563eb;
  }

  /* list-disc */
  .list-disc {
    list-style-type: disc;
  }

  /* list-inside */
  .list-inside {
    list-style-position: inside;
  }
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
    color: var(--tiptap-color-text-disabled);
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
  box-shadow: var(--tiptap-box-shadow);
  gap: var(--tiptap-toolbar-gap);

  .tiptap-command-button {
    border-radius: var(--tiptap-border-inner-radius);
  }
}

.ProseMirror {
  padding: 1rem 1rem 1rem 0;

  * {
    margin-top: 0.75em;
  }

  > * {
    margin-left: 3rem;
  }

  .ProseMirror-widget * {
    margin-top: auto;
  }

  ul,
  ol {
    padding: 0 1rem;
  }
}

.tiptap-dropdown {
  --chevron-rotation: 0deg;

  display: inline-block;
  position: relative;

  &:has(&__button[aria-expanded='true']) {
    --chevron-rotation: 180deg;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: transparent;
    gap: 0.25rem;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    * {
      flex-shrink: 0;
    }

    &--active {
      color: var(--tiptap-color-primary);
    }

    &:disabled {
      color: var(--tiptap-color-text-disabled);
      cursor: not-allowed;
    }
  }

  &__button-icon {
    --icon-size: 0.9em;

    inline-size: var(--icon-size);
    block-size: var(--icon-size);
    transform: rotate(var(--chevron-rotation));
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }

  &__content {
    display: grid;
    position: absolute;
    inset-inline-end: 0;
    transform-origin: top right;
    padding-block: 0.25rem;
    background-color: var(--tiptap-color-surface);
    border: 1px solid var(--tiptap-color-surface-border);
    border-radius: var(--tiptap-border-radius);
    box-shadow: var(--tiptap-box-shadow);
    z-index: 10;
  }

  &__content-button {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    cursor: pointer;

    > * {
      flex-shrink: 0;
      text-wrap: nowrap;
    }

    &--active {
      color: var(--tiptap-color-primary);
    }
  }
}

.ProseMirror-noderangeselection {
  *::selection {
    background: transparent;
  }

  * {
    caret-color: transparent;
  }
}

.ProseMirror-selectednode,
.ProseMirror-selectednoderange {
  position: relative;

  &::before {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    content: '';
    top: -0.25rem;
    left: -0.25rem;
    right: -0.25rem;
    bottom: -0.25rem;
    background-color: #70cff850;
    border-radius: 0.2rem;
  }
}

.custom-drag-handle {

  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1.25rem;
    margin-inline-end: 0.5rem;
    padding: 0.25rem 0.1rem;
    content: '⠿';
    font-weight: 700;
    cursor: grab;
    color: light-dark(var(--tiptap-color-neutral-10), var(--tiptap-color-neutral-90));
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out;
  }

  &:is(:hover, :focus)::after {
    background: var(--tiptap-color-surface-highlight);
  }
}

.transition-enter-active {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1),
  opacity 100ms cubic-bezier(0, 0, 0.2, 1);
}

.transition-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.transition-enter-to {
  transform: scale(1);
  opacity: 1;
}

.transition-leave-active {
  transition: transform 75ms cubic-bezier(0.4, 0, 1, 1),
  opacity 75ms cubic-bezier(0.4, 0, 1, 1);
}

.transition-leave-from {
  transform: scale(1);
  opacity: 1;
}

.transition-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
