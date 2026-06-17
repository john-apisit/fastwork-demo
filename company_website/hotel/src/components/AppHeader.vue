<script setup lang="ts">
import { ref } from 'vue'
import { navLinks } from '../data/content'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-ocean-900/95 backdrop-blur-sm shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="#" class="flex items-center gap-2 shrink-0">
          <span class="text-gold-400 text-2xl">✦</span>
          <span class="font-display text-lg md:text-xl text-white font-semibold tracking-wide">
            Azure Bay
          </span>
        </a>

        <nav class="hidden lg:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm text-white/80 hover:text-gold-400 transition-colors tracking-wide"
          >
            {{ link.label }}
          </a>
          <a href="#booking" class="btn-primary text-sm py-2 px-5 bg-gold-500 hover:bg-gold-400 text-ocean-900">
            จองเลย
          </a>
        </nav>

        <button
          type="button"
          class="lg:hidden p-2 text-white"
          aria-label="เปิดเมนู"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="menuOpen"
      class="lg:hidden bg-ocean-900 border-t border-white/10 px-4 py-4 space-y-1"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="block py-3 text-white/90 hover:text-gold-400 border-b border-white/5 last:border-0"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        href="#booking"
        class="block mt-4 btn-primary text-center bg-gold-500 hover:bg-gold-400 text-ocean-900"
        @click="closeMenu"
      >
        จองเลย
      </a>
    </div>
  </header>
</template>
