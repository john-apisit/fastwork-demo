<script setup lang="ts">
import type { Caddy } from '@/types'
import { useAppStore } from '@/stores/app'

defineProps<{
  caddy: Caddy
  compact?: boolean
  rank?: number
}>()

const store = useAppStore()

const typeLabels = { expert: 'Expert', entertainment: 'Entertainment' }
const genderLabels = { male: 'ชาย', female: 'หญิง' }
</script>

<template>
  <router-link
    :to="`/caddy/${caddy.id}`"
    class="card block overflow-hidden transition hover:shadow-premium"
    :class="compact ? '' : 'min-w-[160px]'"
  >
    <div class="relative">
      <img
        :src="caddy.image"
        :alt="caddy.name"
        class="h-40 w-full object-cover object-top"
        :class="compact ? 'h-32' : ''"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span
        v-if="rank"
        class="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white shadow"
      >
        {{ rank }}
      </span>
      <span
        v-if="!store.isCaddyUnlocked(caddy.id)"
        class="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white backdrop-blur"
      >
        🔒 150 บาท
      </span>
      <div class="absolute bottom-2 left-3 right-3">
        <p class="font-display text-base font-semibold text-white">{{ caddy.name }}</p>
        <p class="text-[11px] text-white/80">{{ caddy.nameEn }}</p>
      </div>
    </div>
    <div class="space-y-2 p-3">
      <div class="flex flex-wrap gap-1">
        <span class="badge bg-forest-100 text-forest-700">{{ typeLabels[caddy.type] }}</span>
        <span class="badge bg-stone-100 text-stone-600">{{ genderLabels[caddy.gender] }}</span>
      </div>
      <div class="flex items-center justify-between text-xs text-stone-500">
        <span class="flex items-center gap-0.5">
          <span class="text-gold-500">★</span>
          {{ caddy.rating }} ({{ caddy.reviewCount }})
        </span>
        <span>{{ caddy.experienceYears }} ปี</span>
      </div>
    </div>
  </router-link>
</template>
