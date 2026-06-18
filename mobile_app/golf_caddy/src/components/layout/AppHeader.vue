<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

defineProps<{
  title?: string
  showBack?: boolean
  showCredits?: boolean
}>()

const router = useRouter()
const store = useAppStore()

function goBack() {
  router.back()
}
</script>

<template>
  <header class="flex items-center justify-between px-5 pb-3 pt-1">
    <div class="flex items-center gap-3">
      <button
        v-if="showBack"
        class="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-forest-700 transition hover:bg-stone-200"
        @click="goBack"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div v-else-if="!title" class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-700">
          <svg class="h-4 w-4 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 20h16L12 2zm0 4.5L16.5 18h-9L12 6.5z" />
          </svg>
        </div>
        <span class="font-display text-lg font-semibold tracking-wide text-forest-800">CaddyLink</span>
      </div>
      <h1 v-if="title && !showBack" class="font-display text-xl font-semibold text-forest-900">{{ title }}</h1>
      <h1 v-if="title && showBack" class="font-display text-lg font-semibold text-forest-900">{{ title }}</h1>
    </div>
    <router-link
      v-if="showCredits !== false"
      to="/credits"
      class="flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1.5 text-xs font-semibold text-gold-700 ring-1 ring-gold-200"
    >
      <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
      </svg>
      {{ store.credits }} บาท
    </router-link>
  </header>
</template>
