<script setup lang="ts">
import ButtonHeader from '@/components/global/MiHeader/ButtonHeader.vue'
import MiIcon from '@/components/global/MiIcon.vue'
</script>

<template>
  <div class="bg-gray-200 text-sm text-gray-600 grid grid-cols-2 py-1 px-10">
    <div class="flex">
      <mi-icon size="large" icon="material-symbols:phone-android-outline" />
      <button-header text="Download Aplikasi" />
    </div>
    <div class="justify-self-end flex space-x-4">
      <button-header text="Tentang" />
      <button-header text="Mitra" />
      <button-header text="Pusat Edukasi" />
      <button-header text="Promo" />
      <button-header text="Care" />
    </div>
  </div>
  <div class="pb-3 pt-5 px-10 flex items-center space-x-2.5">
    <span class="text-3xl">Mi Ehe</span>
    <span class="text-gray-500 text-xs">Kategori</span>
    <div class="flex-1 relative">
      <input class="border rounded-md w-full pl-10 py-2 pr-2" />
      <div class="absolute top-2 left-2">
        <mi-icon icon="material-symbols:search" size="extra-large" is-clickable />
      </div>
    </div>
    <mi-icon icon="material-symbols:shopping-basket-outline" size="extra-large" is-clickable />
    <mi-icon icon="material-symbols:notifications-outline" size="extra-large" is-clickable />
    <mi-icon icon="material-symbols:sms-outline" size="extra-large" is-clickable />
    <mi-icon icon="material-symbols:add-business-outline" size="extra-large" is-clickable />
    <span>Toko</span>
    <span>Mi Profile</span>
  </div>
</template>
