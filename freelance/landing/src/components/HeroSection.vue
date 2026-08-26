<script setup lang="ts">
import { heroStats } from '../data/content'
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-16 lg:pt-20">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-indigo-50" />
      <div
        class="absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        class="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"
      />
    </div>

    <div class="section-container py-16 lg:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="animate-fade-up">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
          >
            <span class="h-2 w-2 rounded-full bg-brand-500" />
            รับงาน Freelance — Web & Mobile
          </span>

          <h1
            class="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-surface-900 sm:text-5xl lg:text-6xl"
          >
            สร้าง
            <span class="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">
              ระบบและเว็บไซต์
            </span>
            ที่ตอบโจทย์ธุรกิจของคุณ
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            รับทำ Company Website, Web Application, CRM/ERP, ระบบคลังสินค้า และ Mobile App
            ด้วย Vue, React, Node.js และ Flutter — ออกแบบและพัฒนาตามความต้องการ พร้อมส่งมอบ Source Code
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a href="#services" class="btn-primary">ดูบริการทั้งหมด</a>
            <a href="#contact" class="btn-secondary">ติดต่อปรึกษา</a>
          </div>

          <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div v-for="stat in heroStats" :key="stat.label">
              <p class="font-display text-2xl font-bold text-brand-600 sm:text-3xl">
                {{ stat.value }}
              </p>
              <p class="mt-1 text-sm text-slate-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="relative animate-fade-up lg:pl-8" style="animation-delay: 0.15s">
          <div class="relative mx-auto max-w-lg">
            <div class="overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10 ring-1 ring-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="ทีมพัฒนาซอฟต์แวร์"
                class="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>

            <div
              class="absolute -bottom-6 -left-6 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
            >
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg">
                  ✓
                </div>
                <div>
                  <p class="text-sm font-semibold text-surface-900">Source Code</p>
                  <p class="text-xs text-slate-500">ส่งมอบครบทุกโปรเจกต์</p>
                </div>
              </div>
            </div>

            <div
              class="absolute -right-4 top-8 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              style="animation-delay: 1s"
            >
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-lg">
                  ⚡
                </div>
                <div>
                  <p class="text-sm font-semibold text-surface-900">5 บริการหลัก</p>
                  <p class="text-xs text-slate-500">Web, CRM, WMS, Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
