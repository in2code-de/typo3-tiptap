<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps<{
  label: string
  iconIdentifier: string
  items: {
    label: string
    icon: string
    isActive: boolean
    isDisabled: boolean
    action: () => void
  }[]
}>()

const hasAvailableOptions = computed(() => props.items.some(item => !item.isDisabled))
</script>

<template>
  <Menu as="div" class="tiptap-dropdown">
    <MenuButton
      class="tiptap-dropdown__button"
      :disabled="!hasAvailableOptions"
    >
      <span class="tiptap-sr-only">{{ label }}</span>
      <Icon
        :icon="iconIdentifier"
        size="16px"
      />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="tiptap-dropdown__button-icon">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </MenuButton>

    <transition
      enter-active-class="tiptap-dropdown__content-transition-enter-active"
      enter-from-class="tiptap-dropdown__content-transition-enter-from"
      enter-to-class="tiptap-dropdown__content-transition-enter-to"
      leave-active-class="tiptap-dropdown__content-transition-leave-active"
      leave-from-class="tiptap-dropdown__content-transition-leave-from"
      leave-to-class="tiptap-dropdown__content-transition-leave-to"
    >
      <MenuItems class="tiptap-dropdown__content">
        <template
          v-for="(item, index) in items"
          :key="`item-${index}`"
        >
          <MenuItem as="template">
            <button
              class="tiptap-dropdown__content-button"
              :class="{
                'tiptap-dropdown__content-button--active': item.isActive,
              }"
              @click="item.action"
            >
              <Icon
                :icon="iconIdentifier"
                size="16px"
              />
              <span>{{ item.label }}</span>
            </button>
          </MenuItem>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>
