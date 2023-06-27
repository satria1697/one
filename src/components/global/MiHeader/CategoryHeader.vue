<script setup lang="ts">
import type { PropType } from 'vue'
import MiButton from '@/components/global/MiButton.vue'
import Navigation from '@/router/navigation'

const navigation = new Navigation()

defineProps({
  categories: {
    type: Array as PropType<Array<String>>,
    required: true
  }
})

const goToFilterProduct = (category: string) => {
  navigation.go({ name: 'product:filter', query: { category } })
}
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
          <mi-button type="empty" size="small" length="full" @click="goToFilterProduct(category)">
            <span>{{ category }}</span>
          </mi-button>
        </div>
      </div>
    </div>
  </div>
</template>
