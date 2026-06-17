<script setup lang="ts">
import { roomTypes } from '../data/content'

function formatPrice(price: number) {
  return price.toLocaleString('th-TH')
}
</script>

<template>
  <section id="rooms" class="py-16 md:py-24 bg-sand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">ห้องพัก</p>
        <h2 class="section-heading">ประเภทห้องพัก</h2>
        <p class="section-subheading">
          เลือกห้องพักที่เหมาะกับคุณ ตั้งแต่ห้อง Deluxe วิวทะเล ไปจนถึง Pool Villa ส่วนตัว
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="room in roomTypes"
          :key="room.id"
          class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
        >
          <div class="relative overflow-hidden aspect-[4/3]">
            <img
              :src="room.image"
              :alt="room.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-4 right-4 bg-ocean-700/90 text-white text-xs px-3 py-1 rounded-full">
              {{ room.size }}
            </span>
          </div>
          <div class="p-5">
            <h3 class="font-display text-xl font-semibold text-ocean-900">{{ room.name }}</h3>
            <p class="mt-2 text-sm text-gray-600 line-clamp-2">{{ room.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="feature in room.features.slice(0, 3)"
                :key="feature"
                class="text-xs bg-sand-100 text-ocean-800 px-2 py-1 rounded"
              >
                {{ feature }}
              </span>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex items-end justify-between">
              <div>
                <p class="text-xs text-gray-500">{{ room.beds }} · {{ room.capacity }} ท่าน</p>
                <p class="mt-1 font-display text-2xl text-ocean-700 font-semibold">
                  ฿{{ formatPrice(room.price) }}
                  <span class="text-sm font-body font-normal text-gray-500">/ คืน</span>
                </p>
              </div>
              <a
                :href="`#booking?room=${room.id}`"
                class="text-sm text-gold-500 hover:text-gold-400 font-medium whitespace-nowrap"
              >
                จอง →
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
