<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { companyInfo, navLinks } from '@/data/content'

const route = useRoute()
const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeMobile">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white transition group-hover:bg-brand-700"
        >
          ส
        </div>
        <div>
          <p class="text-lg font-bold text-slate-900">{{ companyInfo.name }}</p>
          <p class="hidden text-xs text-slate-500 sm:block">{{ companyInfo.tagline }}</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="rounded-lg px-3 py-2 text-sm font-medium transition"
          :class="
            route.path === link.path
              ? 'bg-brand-50 text-brand-700'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          "
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="hidden lg:block">
        <RouterLink
          to="/contact"
          class="inline-flex items-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          ขอใบเสนอราคา
        </RouterLink>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        aria-label="เปิดเมนู"
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

    <nav
      v-show="mobileOpen"
      class="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="block rounded-lg px-3 py-2.5 text-sm font-medium"
        :class="
          route.path === link.path
            ? 'bg-brand-50 text-brand-700'
            : 'text-slate-600 hover:bg-slate-50'
        "
        @click="closeMobile"
      >
        {{ link.name }}
      </RouterLink>
      <RouterLink
        to="/contact"
        class="mt-2 block rounded-lg bg-brand-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
        @click="closeMobile"
      >
        ขอใบเสนอราคา
      </RouterLink>
    </nav>
  </header>
</template>
