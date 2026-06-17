<script setup lang="ts">
import { amenities } from '../data/content'
</script>

<template>
  <section id="amenities" class="py-16 md:py-24 bg-ocean-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-400 tracking-widest uppercase text-sm mb-3">Amenities</p>
        <h2 class="font-display text-3xl md:text-4xl font-semibold">สิ่งอำนวยความสะดวก</h2>
        <p class="mt-3 text-white/70 max-w-2xl mx-auto">
          บริการครบครันเพื่อให้การพักผ่อนของคุณสมบูรณ์แบบ
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="amenity in amenities"
          :key="amenity.id"
          class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
        >
          <span class="text-4xl">{{ amenity.icon }}</span>
          <h3 class="mt-4 font-display text-lg font-semibold text-gold-400">{{ amenity.title }}</h3>
          <p class="mt-2 text-sm text-white/70 leading-relaxed">{{ amenity.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
