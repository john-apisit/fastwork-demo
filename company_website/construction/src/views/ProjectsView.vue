<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const categories = ['ทั้งหมด', ...new Set(projects.map((p) => p.category))]
const activeCategory = ref('ทั้งหมด')

const filteredProjects = computed(() =>
  activeCategory.value === 'ทั้งหมด'
    ? projects
    : projects.filter((p) => p.category === activeCategory.value),
)
</script>

<template>
  <section class="bg-slate-850 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ผลงาน"
        title="โครงการที่เราสร้างสรรค์"
        description="ผลงานก่อสร้างที่หลากหลาย ครอบคลุมอาคาร โรงงาน โครงสร้างพื้นฐาน และงานรีโนเวท"
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

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <p
        v-if="filteredProjects.length === 0"
        class="mt-12 text-center text-slate-500"
      >
        ไม่พบโครงการในหมวดหมู่นี้
      </p>
    </div>
  </section>
</template>
