<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { label: 'ภาพรวม', href: '#overview' },
  { label: 'ฟีเจอร์', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'เทคโนโลยี', href: '#tech' },
  { label: 'ผลลัพธ์', href: '#results' },
]

const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-950/80 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="#" class="flex items-center gap-2.5">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 font-display text-sm font-bold text-white"
        >
          HR
        </div>
        <div class="hidden sm:block">
          <p class="font-display text-sm font-bold text-white">HR Management</p>
          <p class="text-xs text-brand-200">Back Office System</p>
        </div>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-brand-100 transition hover:text-white"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        href="#dashboard"
        class="hidden rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 md:inline-block"
      >
        ดูตัวอย่างระบบ
      </a>

      <button
        class="inline-flex items-center justify-center rounded-lg p-2 text-brand-100 md:hidden"
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
    </nav>

    <div
      v-if="mobileOpen"
      class="border-t border-white/10 bg-brand-950/95 px-4 py-4 md:hidden"
    >
      <ul class="space-y-3">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block text-sm font-medium text-brand-100"
            @click="closeMobile"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#dashboard"
            class="block rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white"
            @click="closeMobile"
          >
            ดูตัวอย่างระบบ
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
