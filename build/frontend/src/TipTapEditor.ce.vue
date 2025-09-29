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
import Stylesheets from './components/Stylesheets.vue'
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
const selectionCharacterCount = ref(0)

const stylesParentNode = ref<ParentNodeResult>()

const parsedTipTapOptions = JSON.parse(props.options || '{}') as unknown

const shouldShowBubbleMenu = computed(() => {
  if (!configuration.value)
    return false

  if (isHtmlSourceViewActive.value)
    return false

  if (isTopBarDropdownActive.value)
    return false

  if (selectionCharacterCount.value <= 50) {
    return false
  }

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
      const isValidCommand = command.hooks && command.hooks.onEditorMounted && !executedCommandHooksId.includes(command.id)
      if (!isValidCommand)
        return

      command.hooks!.onEditorMounted!({ editor: editor.value! })
      executedCommandHooksId.push(command.id)
    })
  })

  configuration.value.bubbleMenu.forEach((group) => {
    group.commands.forEach((command) => {
      const isValidCommand = command.hooks && command.hooks.onEditorMounted && !executedCommandHooksId.includes(command.id)
      if (!isValidCommand)
        return

      command.hooks!.onEditorMounted!({ editor: editor.value! })
      executedCommandHooksId.push(command.id)
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
        link: false,
        bulletList: false,
        orderedList: false,
        heading: false,
        underline: false,
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
    selectionCharacterCount.value = editor.value?.state.selection.$from.pos ?? 0
  })

  watch(stylesParentNode, () => {
    console.log('Parent node changed:', stylesParentNode.value)
  })

  executeCommandHooks()
})

onUnmounted(() => editor.value?.destroy())
</script>

<template>
  <pre>{{ selectionCharacterCount }}</pre>

  <div
    v-if="editor"
    class="tiptap-container"
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
              :key="isHtmlSourceViewActive"
              :label="group.dropdown.label"
              :editor-dom-node="editor.view.dom"
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
                  :editor-dom-node="editor.view.dom"
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

    <EditorContent
      :editor="editor"
      :class="{
        'pl-9': enableContentDragAndDrop,
      }"
    />

    <Stylesheets
      v-if="configuration && configuration.styleSheets"
      :stylesheets="configuration.styleSheets"
    />
    <pre>{{ availableStyles }}</pre>
  </div>

  <slot ref="slotRef" />
</template>

<style lang="scss">
@import './styles';
</style>
