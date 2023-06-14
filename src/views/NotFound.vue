<script setup lang="ts">
import MiButton from '@/components/global/MiButton.vue'
import Navigation from '@/router/navigation'

const navigation = new Navigation()
</script>

<template>
  <div class="center h-screen flex-col">
    <div>
      <span class="text-9xl">404</span>
      <span>Sorry, we can't find your page</span>
    </div>
    <div class="mt-10">
      <mi-button text="Go To Home" @click="() => navigation.go({ name: 'home' })" />
    </div>
  </div>
</template>
