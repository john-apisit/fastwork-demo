<script setup lang="ts">
import { attractions } from '../data/content'
</script>

<template>
  <section id="attractions" class="py-16 md:py-24 bg-sand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">Explore</p>
        <h2 class="section-heading">สถานที่ท่องเที่ยวใกล้เคียง</h2>
        <p class="section-subheading">
          ทำเลที่ตั้งอันเป็นเลิศ ใกล้ชิดแหล่งท่องเที่ยวยอดนิยมของภูเก็ต
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="place in attractions"
          :key="place.id"
          class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="place.image"
              :alt="place.name"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-ocean-700 text-white text-xs px-3 py-1 rounded-full">
              🚗 {{ place.distance }}
            </span>
          </div>
          <div class="p-5">
            <h3 class="font-display text-lg font-semibold text-ocean-900">{{ place.name }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ place.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
