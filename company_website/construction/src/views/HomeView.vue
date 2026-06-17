<script setup lang="ts">
import { computed } from 'vue'
import { companyInfo, projects, services, newsArticles } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import NewsCard from '@/components/NewsCard.vue'

const featuredProjects = computed(() => projects.filter((p) => p.featured))
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-slate-850">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="ไซต์งานก่อสร้าง"
        class="h-full w-full object-cover opacity-30"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-widest text-brand-400">
          {{ companyInfo.tagline }}
        </p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          สร้างโครงสร้าง<br />ที่มั่นคง ปลอดภัย<br />และยั่งยืน
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-slate-300">
          เราให้บริการรับเหมาก่อสร้างครบวงจร ตั้งแต่อาคารสำนักงาน โรงงาน
          ไปจนถึงโครงสร้างพื้นฐาน ด้วยทีมวิศวกรและช่างมืออาชีพ
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            ปรึกษาโครงการฟรี
          </RouterLink>
          <RouterLink
            to="/projects"
            class="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            ดูผลงานของเรา
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="border-b border-slate-200 bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div v-for="stat in companyInfo.stats" :key="stat.label" class="text-center">
        <p class="text-3xl font-bold text-brand-600 sm:text-4xl">{{ stat.value }}</p>
        <p class="mt-1 text-sm text-slate-600">{{ stat.label }}</p>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ผลงานเด่น"
        title="โครงการที่เราภูมิใจ"
        description="ตัวอย่างโครงการก่อสร้างที่แสดงความเชี่ยวชาญและมาตรฐานคุณภาพของเรา"
      />

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="mt-10 text-center">
        <RouterLink
          to="/projects"
          class="inline-flex items-center text-sm font-semibold text-brand-600 transition hover:text-brand-700"
        >
          ดูผลงานทั้งหมด →
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Services preview -->
  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="บริการ"
        title="บริการรับเหมาก่อสร้างครบวงจร"
        description="ตอบโจทย์ทุกประเภทโครงการ ด้วยทีมงานและเทคโนโลยีที่ทันสมัย"
      />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in services.slice(0, 3)"
          :key="service.id"
          class="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-lg"
        >
          <span class="text-3xl">{{ service.icon }}</span>
          <h3 class="mt-4 text-lg font-bold text-slate-900">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ service.description }}</p>
        </div>
      </div>

      <div class="mt-10 text-center">
        <RouterLink
          to="/services"
          class="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          ดูบริการทั้งหมด
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- News preview -->
  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ข่าวสาร"
        title="อัปเดตล่าสุด"
        description="ข่าวโครงการ บทความ และกิจกรรมของบริษัท"
      />

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NewsCard
          v-for="article in newsArticles.slice(0, 3)"
          :key="article.id"
          :article="article"
        />
      </div>

      <div class="mt-10 text-center">
        <RouterLink
          to="/news"
          class="inline-flex items-center text-sm font-semibold text-brand-600 transition hover:text-brand-700"
        >
          อ่านข่าวทั้งหมด →
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-brand-600 py-16">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-white">พร้อมเริ่มโครงการของคุณ?</h2>
      <p class="mx-auto mt-4 max-w-xl text-brand-100">
        ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
      </p>
      <RouterLink
        to="/contact"
        class="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
      >
        ติดต่อเรา
      </RouterLink>
    </div>
  </section>
</template>
