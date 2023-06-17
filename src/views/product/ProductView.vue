<script setup lang="ts">
import { useProductBindStore } from '@/views/product/controller/product-controller'
import { onMounted } from 'vue'
import Navigation from '@/router/navigation'
import MiLoading from '@/components/global/MiLoading.vue'
import MiButton from '@/components/global/MiButton.vue'
import MiIcon from '@/components/global/MiIcon.vue'
import MiMath from '@/utils/math'
import MiPrice from '@/utils/price'

const productBindStore = useProductBindStore()
const navigation = new Navigation()
const miMath = new MiMath()
const miPrice = new MiPrice()

onMounted(() => {
  const params = navigation.getParams()
  productBindStore.getProductData(params.id as string)
})
</script>

<template>
  <mi-loading v-if="productBindStore.getLoadingState" />
  <div v-else-if="productBindStore.getProductState != null" class="mx-[30rem] mt-10">
    <div class="grid grid-cols-[20rem,1fr] gap-x-4">
      <div>
        <img
          :src="productBindStore.getProductState.image"
          :alt="productBindStore.getProductState.title ?? 'image'"
        />
        <div class="flex space-x-10 items-center justify-center text-xl mt-10">
          <!--todo: change this to component-->
          <div
            class="flex group p-2 hover:bg-primary cursor-pointer items-center space-x-2 transition"
          >
            <mi-icon class="group-hover:text-white" icon="material-symbols:share" />
            <span class="group-hover:text-white">Share</span>
          </div>
          <div
            class="flex group p-2 hover:bg-primary cursor-pointer items-center space-x-2 transition"
          >
            <mi-icon class="group-hover:text-white" icon="material-symbols:heart-plus-outline" />
            <span class="group-hover:text-white">Wishlist</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="font-semibold text-3xl">{{ productBindStore.getProductState.title }}</span>
        <div class="flex space-x-2 items-center">
          <div class="flex items-center space-x-1.5">
            <span>{{ productBindStore.getProductState.rating.rate }}</span>
            <div class="flex">
              <mi-icon
                v-for="i in miMath.floor(productBindStore.getProductState.rating.rate)"
                :key="i"
                icon="material-symbols:star"
                class="text-yellow-400"
                size="large"
              />
            </div>
          </div>
          <span>|</span>
          <div class="flex items-center">
            <span>{{ productBindStore.getProductState.rating.count }} rating</span>
          </div>
        </div>
        <div class="detail-background flex space-x-4">
          <span class="text-2xl line-through">{{
            miPrice.markupPrice(productBindStore.getProductState.price)
          }}</span>
          <span class="text-3xl">{{
            miPrice.convertToRupiah(productBindStore.getProductState.price)
          }}</span>
        </div>
        <div class="detail-background">
          <h3 class="text-xl">Description</h3>
          <span>{{ productBindStore.getProductState.description }}</span>
        </div>
        <mi-button>
          <div class="flex group justify-center items-center space-x-2">
            <mi-icon
              class="group-hover:text-white text-quaternary transition"
              icon="material-symbols:shopping-cart-outline"
            />
            <span>Add to cart</span>
          </div>
        </mi-button>
      </div>
    </div>
  </div>
  <div v-else class="center flex-col space-y-10 h-[36rem]">
    <span class="error text-2xl">{{ productBindStore.getErrorMessage }}</span>
    <mi-button text="Go Home" @click="navigation.go({ name: 'home' })" />
  </div>
</template>

<style scoped>
.detail-background {
  @apply w-full p-8 bg-gray-200 bg-opacity-25;
}
</style>
