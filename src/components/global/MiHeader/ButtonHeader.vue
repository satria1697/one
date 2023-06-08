<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hover:text-blue-600 hover:cursor-pointer w-fit">{{ text }}</div>
</template>
