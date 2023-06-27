<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'normal' | 'outline' | 'empty'>,
    default: 'normal'
  },
  length: {
    type: String as PropType<'full' | 'fit'>,
    default: 'fit'
  },
  size: {
    type: String as PropType<'big' | 'normal' | 'small'>,
    default: 'normal'
  },
  textPosition: {
    type: String as PropType<'left' | 'middle'>,
    default: 'left'
  }
})

const classList = computed(() => {
  const classList = ['hover:bg-secondary', 'transition', 'hover:text-white', 'rounded-md']
  if (props.size === 'normal') {
    classList.push('py-1.5', 'px-2.5')
  }
  if (props.size == 'small') {
    classList.push('py-0.5', 'px-1.5')
  }
  if (props.size == 'big') {
    classList.push('py-2.5', 'px-3.5')
  }
  if (props.length === 'full') {
    classList.push('w-full')
  }

  if (props.textPosition == 'left') {
    classList.push('flex items-start')
  }

  if (props.type === 'empty') {
    classList.push('hover:bg-primary')
    return classList.join(' ')
  }
  classList.push('bg-primary', 'text-quaternary')
  return classList.join(' ')
})
</script>

<template>
  <button :class="classList">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
