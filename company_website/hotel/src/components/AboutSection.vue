<script setup lang="ts">
import { siteInfo } from '../data/content'
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">ยินดีต้อนรับ</p>
          <h2 class="section-heading">ประสบการณ์พักผ่อน<br />ที่ไม่มีวันลืม</h2>
          <p class="mt-6 text-gray-600 leading-relaxed">
            {{ siteInfo.description }}
          </p>
          <div class="mt-8 grid grid-cols-3 gap-6">
            <div class="text-center">
              <p class="font-display text-3xl text-ocean-700 font-semibold">120+</p>
              <p class="text-sm text-gray-500 mt-1">ห้องพัก</p>
            </div>
            <div class="text-center">
              <p class="font-display text-3xl text-ocean-700 font-semibold">5★</p>
              <p class="text-sm text-gray-500 mt-1">มาตรฐาน</p>
            </div>
            <div class="text-center">
              <p class="font-display text-3xl text-ocean-700 font-semibold">24/7</p>
              <p class="text-sm text-gray-500 mt-1">Concierge</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
            alt="สระว่ายน้ำ infinity"
            class="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
          />
          <div class="absolute -bottom-6 -left-6 bg-ocean-700 text-white p-6 rounded-xl shadow-lg hidden sm:block">
            <p class="font-display text-2xl font-semibold">Best Resort</p>
            <p class="text-sm text-white/80 mt-1">Phuket 2025</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
