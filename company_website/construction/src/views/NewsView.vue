<script setup lang="ts">
import { ref, computed } from 'vue'
import { newsArticles } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
import NewsCard from '@/components/NewsCard.vue'

const categories = ['ทั้งหมด', ...new Set(newsArticles.map((a) => a.category))]
const activeCategory = ref('ทั้งหมด')

const filteredArticles = computed(() =>
  activeCategory.value === 'ทั้งหมด'
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory.value),
)
</script>

<template>
  <section class="bg-slate-850 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ข่าวสาร"
        title="ข่าวสารและบทความ"
        description="ติดตามข่าวโครงการ กิจกรรมองค์กร และบทความด้านการก่อสร้าง"
        light
      />
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium transition"
          :class="
            activeCategory === cat
              ? 'bg-brand-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          "
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <NewsCard
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </section>
</template>
