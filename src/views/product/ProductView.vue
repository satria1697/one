<script setup lang="ts">
import { useProductBindStore } from '@/views/product/controller/product-controller'
import { onMounted } from 'vue'
import Navigation from '@/router/navigation'
import MiLoading from '@/components/global/MiLoading.vue'
import MiButton from '@/components/global/MiButton.vue'

const productBindStore = useProductBindStore()
const navigation = new Navigation()

onMounted(() => {
  const params = navigation.getParams()
  productBindStore.getProductData(params.id as string)
})
</script>

<template>
  <mi-loading v-if="productBindStore.getLoadingState" />
  <div v-else-if="productBindStore.getProductState != null" class="mx-[40rem] mt-10">
    <span>{{ productBindStore.getProductState }}</span>
  </div>
  <div v-else class="center flex-col space-y-10 h-[36rem]">
    <span class="error text-2xl">{{ productBindStore.getErrorMessage }}</span>
    <mi-button text="Go Home" @click="navigation.go({ name: 'home' })" />
  </div>
</template>
