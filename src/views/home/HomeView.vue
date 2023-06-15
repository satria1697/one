<script setup lang="ts">
import ProductBox from '@/components/global/ProductBox.vue'
import { onMounted } from 'vue'
import MiLoading from '@/components/global/MiLoading.vue'
import { useHomeBindStore } from '@/views/home/controller/home-controller'

let homeBindStore = useHomeBindStore()
onMounted(() => {
  homeBindStore.getProductData()
})
</script>

<template>
  <mi-loading v-if="homeBindStore.getLoadingState" />
  <div v-else-if="homeBindStore.getProductState.length" class="flex flex-wrap items-start m-2">
    <product-box
      v-for="product in homeBindStore.getProductState"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else-if="!homeBindStore.getProductState.length" class="center">
    <span>There are no product to display</span>
  </div>
</template>
