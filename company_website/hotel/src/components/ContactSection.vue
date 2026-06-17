<script setup lang="ts">
import { siteInfo } from '../data/content'
</script>

<template>
  <section id="contact" class="py-16 md:py-24 bg-sand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">Contact</p>
        <h2 class="section-heading">ติดต่อเรา</h2>
        <p class="section-subheading">
          พร้อมให้บริการและตอบคำถามทุกวัน ตั้งแต่ 08:00 – 22:00 น.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <span class="text-2xl">📍</span>
            <h3 class="mt-3 font-display text-lg font-semibold text-ocean-900">ที่อยู่</h3>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">{{ siteInfo.address }}</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <span class="text-2xl">📞</span>
            <h3 class="mt-3 font-display text-lg font-semibold text-ocean-900">โทรศัพท์</h3>
            <a :href="`tel:${siteInfo.phone}`" class="mt-2 block text-sm text-ocean-700 hover:text-ocean-800">
              {{ siteInfo.phone }}
            </a>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <span class="text-2xl">✉️</span>
            <h3 class="mt-3 font-display text-lg font-semibold text-ocean-900">อีเมล</h3>
            <a :href="`mailto:${siteInfo.email}`" class="mt-2 block text-sm text-ocean-700 hover:text-ocean-800">
              {{ siteInfo.email }}
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto min-h-[400px]">
          <iframe
            :src="siteInfo.mapEmbedUrl"
            width="100%"
            height="100%"
            style="border: 0; min-height: 400px"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Azure Bay Resort บน Google Maps"
          />
        </div>
      </div>
    </div>
  </section>
</template>
