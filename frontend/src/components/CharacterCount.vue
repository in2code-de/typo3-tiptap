<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import { computed } from 'vue'

const props = defineProps<{
  editor: Editor
  limit: number
}>()

const percentage = computed(
  () => Math.round((100 / props.limit) * props.editor.storage.characterCount.characters()),
)
</script>

<template>
  <div
    class="tiptap-character-count" :class="{
      'tiptap-character-count--warning': editor.storage.characterCount.characters() === limit,
    }"
  >
    <svg height="20" width="20" viewBox="0 0 20 20">
      <circle r="10" cx="10" cy="10" fill="var(--tiptap-color-surface-highlight)" />
      <circle
        r="5"
        cx="10"
        cy="10"
        fill="transparent"
        stroke="currentColor"
        stroke-width="10"
        :stroke-dasharray="`calc(${percentage} * 31.4 / 100) 31.4`"
        transform="rotate(-90) translate(-20)"
      />
      <circle r="6" cx="10" cy="10" fill="var(--tiptap-color-surface)" />
    </svg>

    {{ editor.storage.characterCount.characters() }} / {{ limit }} characters
    <br>
    {{ editor.storage.characterCount.words() }} words
  </div>
</template>
