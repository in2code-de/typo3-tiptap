<script setup lang="ts">
import type { Extension } from '@tiptap/core'
import type { TipTapConfiguration } from './configuration.ts'
import type { ParentNodeResult } from './plugins/styles.ts'
import type { TipTapPluginCommand } from './schema/plugins.ts'
import type { WebComponentOptions } from './schema/web-component.ts'
import { DragHandle } from '@tiptap/extension-drag-handle-vue-3'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { BubbleMenu } from '@tiptap/vue-3/menus'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import Dropdown from './components/Dropdown.vue'
import Icon from './components/Icon.vue'
import Stylesheets from './components/Stylesheets.vue'
import { getConfiguration } from './configuration.ts'
import { getEditorSourceViewActiveStatus } from './plugins/source.ts'
import { stylesPluginConfigSchema } from './schema/plugin/styles.ts'
import { WebComponentOptionsSchema } from './schema/web-component.ts'

const props = defineProps<{
  options: string
}>()

const options = getParsedOptions()
const styles = getParsedStyles(options)

const editor = ref<Editor>()
const configuration = ref<TipTapConfiguration>()

const slotRef = ref<HTMLSlotElement | undefined>()
const textareaRef = ref<HTMLTextAreaElement | undefined>()

const stylesParentNode = ref<ParentNodeResult>()

const isHtmlSourceViewActive = ref(false)
const isTopBarDropdownActive = ref(false)
const selectionCharacterCount = ref(0)

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

const availableStyles = computed(() => styles.filter(
  style => style.element.toLowerCase() === stylesParentNode.value?.tagName.toLowerCase(),
))

function getParsedOptions(): WebComponentOptions {
  try {
    const parsedUnsafeJsonOptions = JSON.parse(props.options || '{}')

    const output = WebComponentOptionsSchema.safeParse(parsedUnsafeJsonOptions)
    if (!output.success) {
      throw new Error(`Invalid options: ${JSON.stringify(output.error.issues)}`)
    }

    return output.data
  }
  catch (error) {
    throw new Error(`Failed to parse options: ${(error as Error).message}`)
  }
}

function getParsedStyles(options: WebComponentOptions) {
  const stylesPlugin = options.plugins?.find(plugin => plugin.path.endsWith('styles.js') || plugin.path.endsWith('styles.ts'))
  if (!stylesPlugin)
    return []

  const styles = stylesPluginConfigSchema.safeParse(stylesPlugin.config)
  if (!styles.success) {
    throw new Error(`Invalid styles plugin config: ${JSON.stringify(styles.error.issues)}`)
  }

  return styles.data.styles
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

      command.hooks!.onEditorMounted!({
        editor: editor.value!,
        linkBrowserUrl: options.linkBrowserUrl,
      })
      executedCommandHooksId.push(command.id)
    })
  })

  configuration.value.bubbleMenu.forEach((group) => {
    group.commands.forEach((command) => {
      const isValidCommand = command.hooks && command.hooks.onEditorMounted && !executedCommandHooksId.includes(command.id)
      if (!isValidCommand)
        return

      command.hooks!.onEditorMounted!({
        editor: editor.value!,
        linkBrowserUrl: options.linkBrowserUrl,
      })
      executedCommandHooksId.push(command.id)
    })
  })
}

async function importPluginFiles() {
  const imports = await Promise.all(
    options.plugins?.map(async (plugin) => {
      const importValue = await import(/* @vite-ignore */ plugin.path)
      if (!importValue.default || !(typeof importValue.default === 'function'))
        throw new Error(`Plugin ${plugin.path} does not have a default export or it is not a function.`)

      return () => importValue.default(plugin.config)
    }) ?? [],
  )

  imports.forEach(fn => fn())
}

function getCommandIsDisabledStatus(command: TipTapPluginCommand) {
  // when html source mode is active, only enable source command to re-enable WYSIWYG mode
  if (isHtmlSourceViewActive.value && command.id !== 'source')
    return true

  return command?.status?.isDisabled?.({
    editor: editor.value!,
    linkBrowserUrl: options.linkBrowserUrl,
  }) ?? false
}

function getCommandIsVisible(command: TipTapPluginCommand) {
  if (command.status && command.status.isVisible) {
    return command.status.isVisible({
      editor: editor.value!,
      linkBrowserUrl: options.linkBrowserUrl,
    })
  }

  return true
}

onMounted(async () => {
  await importPluginFiles()
  configuration.value = getConfiguration()

  // wait for slot content to be rendered
  await nextTick()

  const textareaReference = slotRef.value?.assignedElements()[0] as HTMLTextAreaElement | undefined
  if (!textareaReference || !(textareaReference instanceof HTMLTextAreaElement))
    throw new Error('No textarea found in slot "content".')

  textareaRef.value = textareaReference

  editor.value = new Editor({
    content: textareaRef.value.value,
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
      if (!editor.value || !textareaRef.value)
        return

      isHtmlSourceViewActive.value = getEditorSourceViewActiveStatus(editor.value)
      textareaRef.value.value = isHtmlSourceViewActive.value
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
                  isActive: command?.status?.isActive?.({ editor, linkBrowserUrl: options.linkBrowserUrl }) ?? false,
                  isDisabled: getCommandIsDisabledStatus(command),
                  icon: command.iconIdentifier,
                  action: () => command.onExecute({ editor, linkBrowserUrl: options.linkBrowserUrl }),
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
                  'is-active': command?.status?.isActive?.({ editor, linkBrowserUrl: options.linkBrowserUrl }) ?? false,
                }"
                :disabled="getCommandIsDisabledStatus(command)"
                @click="command.onExecute({ editor, linkBrowserUrl: options.linkBrowserUrl })"
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
                      isActive: command?.status?.isActive?.({
                        editor,
                        linkBrowserUrl: options.linkBrowserUrl,
                      }) ?? false,
                      isDisabled: getCommandIsDisabledStatus(command),
                      icon: command.iconIdentifier,
                      action: () => command.onExecute({
                        editor,
                        linkBrowserUrl: options.linkBrowserUrl,
                      }),
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
                      'is-active': command?.status?.isActive?.({
                        editor,
                        linkBrowserUrl: options.linkBrowserUrl }) ?? false,
                    }"
                    :disabled="getCommandIsDisabledStatus(command)"
                    @click="command.onExecute({
                      editor,
                      linkBrowserUrl: options.linkBrowserUrl,
                    })"
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
      v-if="options && options.contentCss"
      :stylesheets="options.contentCss"
    />
    <pre>{{ availableStyles }}</pre>
  </div>

  <slot ref="slotRef" />
</template>

<style lang="scss">
@use './styles';
</style>
