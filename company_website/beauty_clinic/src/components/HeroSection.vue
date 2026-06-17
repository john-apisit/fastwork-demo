<script setup lang="ts">
import { heroBanner, site } from '../data/content'
</script>

<template>
  <section id="home" class="relative min-h-screen">
    <div class="absolute inset-0">
      <img
        :src="heroBanner.image"
        :alt="heroBanner.alt"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
    </div>

    <div class="container-narrow relative flex min-h-screen items-center px-4 pt-20 sm:px-6 lg:px-8">
      <div class="max-w-2xl text-white">
        <p class="mb-4 text-sm font-medium uppercase tracking-widest text-rose-300">
          Aesthetic & Medical Clinic
        </p>
        <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {{ site.tagline }}
        </h1>
        <p class="mt-6 text-lg text-gray-200">
          คลินิกความงามและเวชกรรมโดยแพทย์ผู้เชี่ยวชาญ
          บริการ Botox, Filler, Laser และดูแลผิวพรรณครบวงจร
          นัดหมายออนไลน์ได้ทันที
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#appointment" class="btn-primary">นัดหมายออนไลน์</a>
          <a href="#services" class="btn-outline border-white text-white hover:bg-white/10">
            ดูบริการและราคา
          </a>
        </div>

        <div class="mt-12 flex flex-wrap gap-8 text-sm">
          <div>
            <p class="text-2xl font-bold text-gold-400">12+</p>
            <p class="text-gray-300">ปีประสบการณ์</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-gold-400">5,000+</p>
            <p class="text-gray-300">ลูกค้าที่ไว้วางใจ</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-gold-400">4.9</p>
            <p class="text-gray-300">คะแนนรีวิว</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
