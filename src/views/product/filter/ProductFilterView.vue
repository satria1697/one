<script setup lang="ts">
import CategoryPresenter from '@/presenter/category-presenter'
import { onMounted, reactive, Ref, ref } from 'vue'
import MiButton from '@/components/global/MiButton.vue'
import Navigation from '@/router/navigation'
import CheckObject from '@/utils/checkObject'
import { onBeforeRouteUpdate } from 'vue-router'
import ProductPresenter from '@/presenter/product-presenter'
import ProductBox from '@/components/global/ProductBox.vue'

const navigation = new Navigation()
const checkObject = new CheckObject()
const categoryPresenter = new CategoryPresenter()
const productPresenter = new ProductPresenter()

let categories = ref([])
let selected = ref([])
let data = reactive({
  product: []
})

onMounted(async () => {
  const query = navigation.getQuery()
  if (checkObject.hasProperty(query, 'category')) {
    const category = query['category']
    selected.value.push(category)
    let response = await categoryPresenter.getAllCategory()
    categories.value = response.data
    await getProduct(navigation.getQueryDataAsString(category))
    return
  }
  navigation.go({ name: 'home' })
})

onBeforeRouteUpdate(async (to, from) => {
  selected.value = []
  if (to.query != from.query) {
    if (checkObject.hasProperty(to.query, 'category')) {
      const category = to.query['category']
      selected.value.push(category)
      await getProduct(navigation.getQueryDataAsString(category))
    }
  }
})

const getProduct = async (category: string) => {
  let filteredProductByCategory = await productPresenter.getFilteredProductByCategory(category)
  data.product = filteredProductByCategory.data
}

const goToFilterProduct = (category: string) => {
  navigation.go({ name: 'product:filter', query: { category } })
}
</script>

<template>
  <div class="mx-40">
    <div class="grid grid-cols-[16rem,1fr]">
      <div class="border rounded-md min-h-[10rem] p-4 space-y-2 flex flex-col">
        <span class="text-2xl font-semibold">Category</span>
        <div>
          <mi-button
            v-for="category in categories"
            :key="category"
            :class="selected.includes(category) ? 'text-secondary' : ''"
            type="empty"
            @click="goToFilterProduct(category)"
          >
            <span>{{ category }}</span>
          </mi-button>
        </div>
      </div>
      <div class="flex flex-1 flex-wrap items-start">
        <product-box v-for="product in data.product" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
