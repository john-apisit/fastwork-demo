<script setup lang="ts">
import { ref } from 'vue'
import { navLinks, site } from '../data/content'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
    <div class="container-narrow flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="#home" class="flex items-center gap-2">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <span class="text-lg font-bold text-gray-900">{{ site.name }}</span>
      </a>

      <nav class="hidden items-center gap-6 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-gray-600 transition hover:text-rose-500"
        >
          {{ link.label }}
        </a>
        <a href="#appointment" class="btn-primary text-sm">นัดหมายเลย</a>
      </nav>

      <button
        type="button"
        class="rounded-lg p-2 text-gray-600 lg:hidden"
        aria-label="เปิดเมนู"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-show="menuOpen"
      class="border-t border-gray-100 bg-white px-4 py-4 lg:hidden"
    >
      <nav class="flex flex-col gap-3">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-600"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a href="#appointment" class="btn-primary mt-2 text-center" @click="closeMenu">
          นัดหมายเลย
        </a>
      </nav>
    </div>
  </header>
</template>
