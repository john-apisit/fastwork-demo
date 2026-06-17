<script setup lang="ts">
import type { NewsArticle } from '@/data/content'

defineProps<{
  article: NewsArticle
}>()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl">
    <div class="relative aspect-[16/9] overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span
        class="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
      >
        {{ article.category }}
      </span>
    </div>
    <div class="p-6">
      <time class="text-xs font-medium text-brand-600">{{ formatDate(article.date) }}</time>
      <h3 class="mt-2 text-lg font-bold text-slate-900 group-hover:text-brand-700">
        {{ article.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ article.excerpt }}</p>
    </div>
  </article>
</template>
