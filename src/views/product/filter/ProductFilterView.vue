<script setup lang="ts">
import { onMounted } from 'vue'
import MiButton from '@/components/global/MiButton.vue'
import Navigation from '@/router/navigation'
import CheckObject from '@/utils/checkObject'
import { onBeforeRouteUpdate } from 'vue-router'
import ProductBox from '@/components/global/ProductBox.vue'
import { useProductFilterBindStore } from '@/views/product/filter/controller/product-filter-controller'
import MiLoading from '@/components/global/MiLoading.vue'

const navigation = new Navigation()
const checkObject = new CheckObject()

const productFilterBindStore = useProductFilterBindStore()

onMounted(async () => {
  const query = navigation.getQuery()
  if (checkObject.hasProperty(query, 'category')) {
    productFilterBindStore.setSelectedCategory(query['category'])
    await productFilterBindStore.getCategory()
    await productFilterBindStore.getProduct()
    return
  }
  navigation.go({ name: 'home' })
})

onBeforeRouteUpdate(async (to, from) => {
  if (to.query != from.query) {
    if (checkObject.hasProperty(to.query, 'category')) {
      productFilterBindStore.setSelectedCategory(to.query['category'])
      await productFilterBindStore.getProduct()
    }
  }
})

const goToFilterProduct = (category: string) => {
  navigation.go({ name: 'product:filter', query: { category } })
}
</script>

<template>
  <div class="mx-40">
    <div class="grid grid-cols-[16rem,1fr]">
      <div class="border rounded-md h-fit p-4 space-y-2 flex flex-col">
        <span class="text-2xl font-semibold">Category</span>
        <div v-if="productFilterBindStore.getIsLoadingCategoryState" class="w-full h-24">
          <mi-loading class="h-full" />
        </div>
        <div v-else>
          <mi-button
            v-for="category in productFilterBindStore.getCategoryState"
            :key="category"
            :class="productFilterBindStore.getSelectedState == category ? 'text-secondary' : ''"
            type="empty"
            @click="goToFilterProduct(category)"
          >
            <span>{{ category }}</span>
          </mi-button>
        </div>
      </div>
      <div class="flex flex-1 flex-wrap items-start">
        <div v-if="productFilterBindStore.getIsLoadingProductState" class="w-full h-72">
          <mi-loading class="h-full" />
        </div>
        <product-box
          v-for="product in productFilterBindStore.getProductState"
          v-else
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
