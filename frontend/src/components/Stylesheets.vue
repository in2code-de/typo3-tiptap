<script setup lang="ts">
import type { TipTapPluginOptions } from '../types'
import { nextTick, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  stylesheets: TipTapPluginOptions['styleSheets']
}>()

const componentRef = ref<HTMLElement | null>(null)
const loadedStylesheets = ref<string[]>([])
const styleElements = ref<HTMLStyleElement[]>([])

watch(() => props.stylesheets, async (newStylesheets) => {
  await nextTick()
  await Promise.all(newStylesheets.map(async (url) => {
    if (!loadedStylesheets.value.includes(url)) {
      await loadStylesheet(url)
    }
  }))
}, { immediate: true })

async function loadStylesheet(url: string): Promise<void> {
  if (!componentRef.value) {
    throw new Error('Component ref not available')
  }

  const shadowRoot = componentRef.value.getRootNode()

  if (!shadowRoot || shadowRoot.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    throw new Error('Shadow root not found or invalid')
  }

  // Fetch CSS content
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const cssText = await response.text()

  const style = document.createElement('style')
  style.textContent = `.tiptap { ${cssText} }` // scope styles to tiptap
  style.dataset.source = url

  shadowRoot.appendChild(style)
  styleElements.value.push(style)
  loadedStylesheets.value.push(url)
}

onUnmounted(() => {
  styleElements.value.forEach((style) => {
    if (style.parentNode) {
      style.parentNode.removeChild(style)
    }
  })
})
</script>

<template>
  <div ref="componentRef" />
</template>
