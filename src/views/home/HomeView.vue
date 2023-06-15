<script setup lang="ts">
import ProductBox from '@/components/global/ProductBox.vue'
import { onMounted } from 'vue'
import MiLoading from '@/components/global/MiLoading.vue'
import { useProductStore } from '@/views/home/controller/home-controller'

let productStore = useProductStore()
onMounted(() => {
  productStore.getProductData()
})
</script>

<template>
  <mi-loading v-if="productStore.getLoadingState" />
  <div v-else-if="productStore.getProductState.length" class="flex flex-wrap items-start m-2">
    <product-box
      v-for="product in productStore.getProductState"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else-if="!productStore.getProductState.length" class="center">
    <span>There are no product to display</span>
  </div>
</template>
