<script setup lang="ts">
import type { PropType } from 'vue'
import MiIcon from '@/components/global/MiIcon.vue'
import type { Product } from '@/entities/product'
import Navigation from '@/router/navigation'
import Price from '@/utils/price'

const navigation = new Navigation()
const miPrice = new Price()

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const navigateToProduct = () => {
  navigation.go({ name: 'product:id', params: { id: props.product?.id } })
}
</script>

<template>
  <div
    class="shadow-md hover:shadow-xl transition w-48 h-64 rounded-md grid grid-rows-[6rem,1fr] m-2"
    @click="navigateToProduct()"
  >
    <div class="m-2 h-full">
      <img class="max-h-full max-w-full mx-auto" alt="vue" :src="product.image" />
    </div>
    <div class="m-2 flex flex-col space-y-1">
      <span class="line-clamp-2">{{ product.title }}</span>
      <span class="font-bold">{{ miPrice.convertToRupiah(product.price) }}</span>
      <div class="flex text-sm">
        <div class="w-5">
          <mi-icon icon="material-symbols:pin-drop" />
        </div>
        <span class="text-xs">Karanganyar</span>
      </div>
      <div class="flex text-xs space-x-1 items-center">
        <div class="flex items-center">
          <div class="w-5">
            <mi-icon icon="material-symbols:star" class="text-yellow-400" size="large" />
          </div>
          <span>3.8</span>
        </div>
        <span> | </span>
        <span>Terjual 10 rb+</span>
      </div>
    </div>
  </div>
</template>
