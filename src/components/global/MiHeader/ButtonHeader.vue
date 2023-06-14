<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hover:text-primary hover:cursor-pointer w-fit">{{ text }}</div>
</template>
