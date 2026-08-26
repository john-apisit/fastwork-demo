<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/content'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <div class="section-container flex h-16 items-center justify-between lg:h-20">
      <a href="#home" class="flex items-center gap-2.5">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white"
        >
          JD
        </span>
        <span class="font-display text-lg font-bold text-surface-900">
          Mr.John<span class="text-brand-600">Dev</span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="เมนูหลัก">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-600 transition hover:text-brand-600"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary !px-5 !py-2.5">ปรึกษาฟรี</a>
      </nav>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 md:hidden"
        aria-label="เปิดเมนู"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="เมนูมือถือ">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary mt-2 text-center" @click="closeMobileMenu">
          ปรึกษาฟรี
        </a>
      </nav>
    </div>
  </header>
</template>
