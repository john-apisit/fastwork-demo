<script setup lang="ts">
import { promotions } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="promotions" class="section-padding">
    <div class="container-narrow">
      <SectionHeading
        label="Promotions"
        title="โปรโมชั่นพิเศษ"
        description="ข้อเสนอพิเศษสำหรับลูกค้าใหม่และลูกค้าประจำ จองก่อนหมดเขต"
      />

      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="promo in promotions"
          :key="promo.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
        >
          <div class="relative aspect-[16/10] overflow-hidden">
            <img
              :src="promo.image"
              :alt="promo.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span class="absolute left-4 top-4 rounded-full bg-gold-500 px-4 py-1 text-sm font-bold text-white">
              {{ promo.discount }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900">{{ promo.title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ promo.description }}</p>
            <p class="mt-4 text-xs text-rose-500">หมดเขต: {{ promo.validUntil }}</p>
            <a href="#appointment" class="btn-primary mt-4 w-full text-center">
              จองโปรโมชั่น
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
