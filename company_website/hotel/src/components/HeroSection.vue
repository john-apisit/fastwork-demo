<script setup lang="ts">
import { siteInfo } from '../data/content'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      alt="Azure Bay Resort"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-900/50 to-ocean-900/80" />

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
      <p class="text-gold-400 tracking-[0.3em] uppercase text-sm mb-4">Resort & Spa</p>
      <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight">
        {{ siteInfo.name }}
      </h1>
      <p class="mt-6 text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
        {{ siteInfo.tagline }}
      </p>
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#booking" class="btn-primary bg-gold-500 hover:bg-gold-400 text-ocean-900">
          จองห้องพัก
        </a>
        <a href="#rooms" class="btn-outline">
          ดูห้องพัก
        </a>
      </div>
    </div>

    <a
      href="#rooms"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      aria-label="เลื่อนลง"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7" />
      </svg>
    </a>
  </section>
</template>
