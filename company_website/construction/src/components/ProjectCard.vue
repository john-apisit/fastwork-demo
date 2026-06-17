<script setup lang="ts">
import type { Project } from '@/data/content'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl">
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span
        class="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
      >
        {{ project.category }}
      </span>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-bold text-slate-900">{{ project.title }}</h3>
      <p class="mt-1 text-sm text-slate-500">{{ project.location }} · {{ project.year }}</p>
      <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ project.description }}</p>
    </div>
  </article>
</template>
