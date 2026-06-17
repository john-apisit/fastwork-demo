<script setup lang="ts">
import { doctors } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="doctors" class="section-padding bg-rose-50">
    <div class="container-narrow">
      <SectionHeading
        label="Our Team"
        title="ทีมแพทย์และผู้เชี่ยวชาญ"
        description="ดูแลโดยแพทย์ผู้เชี่ยวชาญด้านความงามและผิวพรรณ พร้อมทีม Beauty Consultant มืออาชีพ"
      />

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="doctor in doctors"
          :key="doctor.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="aspect-[4/5] overflow-hidden">
            <img
              :src="doctor.image"
              :alt="doctor.name"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900">{{ doctor.name }}</h3>
            <p class="mt-1 text-sm font-medium text-rose-500">{{ doctor.title }}</p>
            <p class="mt-3 text-sm text-gray-600">{{ doctor.specialty }}</p>
            <p class="mt-2 text-xs text-gray-400">{{ doctor.experience }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
