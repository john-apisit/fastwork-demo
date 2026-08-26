<script setup lang="ts">
import { techStack, cloudProviders } from '../data/content'
</script>

<template>
  <section id="tech" class="py-20 lg:py-28">
    <div class="section-container">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">เทคโนโลยี</span>
          <h2 class="section-title mt-2">Tech Stack ที่ใช้พัฒนา</h2>
          <p class="section-subtitle">
            เลือกใช้เทคโนโลยีที่เหมาะสมกับแต่ละโปรเจกต์ เน้นความเสถียร ขยายได้ และดูแลรักษาง่าย
          </p>

          <div class="mt-8 space-y-6">
            <div v-for="category in techStack" :key="category.name">
              <h3 class="font-display text-sm font-bold uppercase tracking-wide text-slate-500">
                {{ category.name }}
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="item in category.items"
                  :key="item"
                  :class="[
                    'rounded-xl px-4 py-2 text-sm font-medium transition',
                    item === 'Vue' || item === 'TypeScript' || item === 'Tailwind CSS'
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50',
                  ]"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <p class="text-sm font-semibold text-surface-900">Cloud Deployment</p>
            <div class="mt-3 flex flex-wrap gap-3">
              <span
                v-for="provider in cloudProviders"
                :key="provider"
                class="text-sm text-slate-600"
              >
                ☁️ {{ provider }}
              </span>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200/80">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยีสมัยใหม่"
              class="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:-right-8"
          >
            <p class="font-display text-3xl font-extrabold text-brand-600">Vue 3</p>
            <p class="text-sm text-slate-500">+ TypeScript + Tailwind CSS</p>
            <p class="mt-1 text-xs text-slate-400">เว็บไซต์นี้สร้างด้วยเทคโนโลยีหลัก</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
