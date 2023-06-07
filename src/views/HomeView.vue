<script setup lang="ts">
import ProductBox from '@/components/global/ProductBox.vue'
import { useProductStore } from '@/stores/product'
import { onMounted } from 'vue'

let productStore = useProductStore()
onMounted(() => {
  productStore.getProduct()
})
</script>

<template>
  <div class="flex flex-wrap items-start m-2">
    <product-box v-for="product in productStore.productList" :key="product.id" :product="product" />
  </div>
</template>
