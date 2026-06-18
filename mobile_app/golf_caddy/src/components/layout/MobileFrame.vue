<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './BottomNav.vue'

const route = useRoute()
const showNav = computed(() => {
  const hidden = ['register', 'chat', 'review', 'admin']
  return !hidden.includes(route.name as string)
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-300 via-stone-200 to-forest-100 p-4">
    <div class="relative flex h-[812px] w-full max-w-[390px] flex-col overflow-hidden rounded-[2.5rem] border-[6px] border-forest-900 bg-white shadow-2xl">
      <div class="absolute left-1/2 top-2 z-50 h-6 w-28 -translate-x-1/2 rounded-full bg-forest-900" />
      <main class="hide-scrollbar flex-1 overflow-y-auto pt-8">
        <slot />
      </main>
      <BottomNav v-if="showNav" />
    </div>
  </div>
</template>
