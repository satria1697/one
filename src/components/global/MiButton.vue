<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button
    class="bg-primary text-quaternary py-1.5 px-2.5 rounded-md hover:bg-secondary transition hover:text-white"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
