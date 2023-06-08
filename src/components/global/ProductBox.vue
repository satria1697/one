<script setup lang="ts">
import type { Product } from '@/stores/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="shadow-md w-36 h-64 rounded-md grid grid-rows-[6rem,1fr] m-2">
    <div class="m-2 h-full">
      <img class="max-h-full max-w-full mx-auto" alt="vue" :src="product.image" />
    </div>
    <div class="m-2 flex flex-col space-y-1">
      <span class="line-clamp-2">{{ product.title }}</span>
      <span class="font-bold">${{ product.price }}</span>
      <div class="flex text-sm">
        <div class="w-5">
          <img alt="vue" src="@/assets/logo.svg" />
        </div>
        <span class="text-xs">Karanganyar</span>
      </div>
      <div class="flex text-xs space-x-1">
        <div class="flex">
          <div class="w-5">
            <img alt="vue" src="@/assets/logo.svg" />
          </div>
          <span>3.8</span>
        </div>
        <span> | </span>
        <span>Terjual 10 rb+</span>
      </div>
    </div>
  </div>
</template>
