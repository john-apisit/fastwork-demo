<script setup lang="ts">
import { reviews } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="reviews" class="section-padding bg-gray-50">
    <div class="container-narrow">
      <SectionHeading
        label="Testimonials"
        title="รีวิวจากลูกค้า"
        description="เสียงจากลูกค้าที่ไว้วางใจให้เราดูแลความงาม"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="review in reviews"
          :key="review.id"
          class="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
        >
          <div class="mb-4 flex gap-1">
            <svg
              v-for="star in 5"
              :key="star"
              class="h-4 w-4"
              :class="star <= review.rating ? 'text-gold-400' : 'text-gray-200'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="flex-1 text-sm leading-relaxed text-gray-600">"{{ review.comment }}"</p>
          <div class="mt-4 border-t border-gray-100 pt-4">
            <p class="font-medium text-gray-900">{{ review.name }}</p>
            <p class="text-xs text-gray-400">{{ review.service }} · {{ review.date }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
