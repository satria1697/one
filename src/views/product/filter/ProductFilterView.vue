<script setup lang="ts">
import CategoryPresenter from '@/presenter/category-presenter'
import { onMounted, onUpdated, ref, watch } from 'vue'
import MiButton from '@/components/global/MiButton.vue'
import Navigation from '@/router/navigation'
import CheckObject from '@/utils/checkObject'
import { onBeforeRouteUpdate } from 'vue-router'

const navigation = new Navigation()
const checkObject = new CheckObject()
const categoryPresenter = new CategoryPresenter()

let categories = ref([])
let selected = ref([])

onMounted(async () => {
  const query = navigation.getQuery()
  if (checkObject.hasProperty(query, 'category')) {
    selected.value.push(query['category'])
    let response = await categoryPresenter.getAllCategory()
    categories.value = response.data
    return
  }
  navigation.go({ name: 'home' })
})

onBeforeRouteUpdate(async (to, from) => {
  selected.value = []
  if (to.query != from.query) {
    if (checkObject.hasProperty(to.query, 'category')) {
      selected.value.push(to.query['category'])
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
    </div>
  </div>
</template>
