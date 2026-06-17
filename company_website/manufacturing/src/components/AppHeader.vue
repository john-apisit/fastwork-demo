<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const mobileOpen = ref(false)

const navItems = [
  { to: '/', label: 'nav.home' },
  { to: '/catalog', label: 'nav.catalog' },
  { to: '/standards', label: 'nav.standards' },
  { to: '/documents', label: 'nav.documents' },
  { to: '/quote', label: 'nav.quote' },
]

function isActive(path: string) {
  return route.path === path
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-brand-200 bg-white/95 backdrop-blur">
    <div class="section-container flex h-16 items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2" @click="closeMobile">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-md bg-brand-800 text-sm font-bold text-accent-400"
        >
          PT
        </div>
        <span class="hidden font-bold text-brand-900 sm:block">PrecisionTech</span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium transition"
          :class="
            isActive(item.to)
              ? 'bg-brand-100 text-brand-900'
              : 'text-brand-600 hover:bg-brand-50 hover:text-brand-900'
          "
        >
          {{ t(item.label) }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <LanguageSwitcher />
        <button
          type="button"
          class="rounded-md p-2 text-brand-700 md:hidden"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="!mobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-if="mobileOpen"
      class="border-t border-brand-200 bg-white px-4 py-3 md:hidden"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="block rounded-md px-3 py-2 text-sm font-medium"
        :class="
          isActive(item.to)
            ? 'bg-brand-100 text-brand-900'
            : 'text-brand-600 hover:bg-brand-50'
        "
        @click="closeMobile"
      >
        {{ t(item.label) }}
      </RouterLink>
    </nav>
  </header>
</template>
