<script setup lang="ts">
import ProductBox from '@/components/global/ProductBox.vue'
</script>

<template>
  <div class="flex flex-wrap items-start m-2">
    <product-box v-for="i in 15" :key="i" />
  </div>
</template>
