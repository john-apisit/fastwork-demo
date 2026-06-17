<script setup lang="ts">
import { services } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section class="bg-slate-850 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="บริการ"
        title="บริการรับเหมาก่อสร้าง"
        description="เรามีบริการครบวงจรสำหรับทุกขนาดโครงการ ตั้งแต่การออกแบบ ก่อสร้าง ไปจนถึงส่งมอบงาน"
        light
      />
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.id"
          class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-brand-300 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-2xl transition group-hover:bg-brand-100"
          >
            {{ service.icon }}
          </div>
          <h2 class="mt-6 text-xl font-bold text-slate-900">{{ service.title }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="กระบวนการ"
        title="ขั้นตอนการทำงาน"
        description="เรามีกระบวนการที่ชัดเจน เพื่อให้โครงการของคุณดำเนินไปอย่างราบรื่น"
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in [
            { title: 'ปรึกษาและสำรวจ', desc: 'รับฟังความต้องการ สำรวจพื้นที่ และประเมินความเป็นไปได้' },
            { title: 'ออกแบบและเสนอราคา', desc: 'จัดทำแบบแปลน รายการวัสดุ และใบเสนอราคาที่โปร่งใส' },
            { title: 'ก่อสร้างและควบคุม', desc: 'ดำเนินการก่อสร้างตามมาตรฐาน พร้อมรายงานความคืบหน้า' },
            { title: 'ส่งมอบและรับประกัน', desc: 'ตรวจรับงาน ส่งมอบโครงการ และให้การรับประกันตามเงื่อนไข' },
          ]"
          :key="step.title"
          class="relative rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200/60"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
          >
            {{ index + 1 }}
          </span>
          <h3 class="mt-4 font-bold text-slate-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-slate-600">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-slate-900">สนใจบริการของเรา?</h2>
      <p class="mt-4 text-slate-600">ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาฟรี</p>
      <RouterLink
        to="/contact"
        class="mt-6 inline-flex items-center rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        ติดต่อเรา
      </RouterLink>
    </div>
  </section>
</template>
