<script setup lang="ts">
import {computed, PropType} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  decoration: {
    type: String as PropType<'none'| ''>,
    default: ''
  }
})

const classList = computed(() => {
  if (props.decoration == 'none') {
    return ''
  }
  return 'bg-primary text-quaternary py-1.5 px-2.5 rounded-md hover:bg-secondary transition hover:text-white'
})
</script>

<template>
  <button
    :class="classList"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
