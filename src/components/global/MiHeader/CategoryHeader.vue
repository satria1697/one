<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  categories: {
    type: Array as PropType<Array<String>>,
    required: true
  }
})
</script>

<template>
  <div class="relative group">
    <div class="text-gray-500 text-xs cursor-pointer">
      <span>Kategori</span>
    </div>
    <div class="absolute z-10 group-hover:visible invisible">
      <div class="border rounded-md min-w-[20rem] bg-white p-2.5">
        <span v-if="!categories.length"> Empty Category </span>
        <div v-for="category in categories" v-else :key="category">
          <div class="hover:bg-primary py-0.5 px-1.5 cursor-pointer hover:text-white transform">
            <span>{{ category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
