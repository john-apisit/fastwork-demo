<script setup lang="ts">
import { services } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="services" class="section-padding">
    <div class="container-narrow">
      <SectionHeading
        label="Services"
        title="บริการและราคา"
        description="บริการครบวงจรด้านความงามและเวชกรรม ราคาโปร่งใส ปรึกษาฟรีก่อนทำทุกครั้ง"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.id"
          class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg"
        >
          <div class="relative aspect-[3/2] overflow-hidden">
            <img
              :src="service.image"
              :alt="service.name"
              class="h-full w-full object-cover"
            />
            <span
              v-if="service.popular"
              class="absolute right-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white"
            >
              ยอดนิยม
            </span>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-lg font-bold text-gray-900">{{ service.name }}</h3>
              <p class="shrink-0 text-lg font-bold text-rose-500">฿{{ service.price }}</p>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ service.description }}</p>
            <p class="mt-4 text-xs text-gray-400">ระยะเวลา: {{ service.duration }}</p>
            <a
              href="#appointment"
              class="mt-4 inline-block text-sm font-medium text-rose-500 hover:text-rose-600"
            >
              นัดหมายบริการนี้ →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
