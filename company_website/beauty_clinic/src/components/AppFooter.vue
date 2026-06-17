<script setup lang="ts">
import { site, navLinks } from '../data/content'
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container-narrow section-padding !py-12">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <h3 class="mb-4 text-lg font-bold text-white">{{ site.name }}</h3>
          <p class="text-sm leading-relaxed">{{ site.tagline }}</p>
          <p class="mt-4 text-sm">{{ site.address }}</p>
        </div>

        <div>
          <h4 class="mb-4 font-medium text-white">เมนู</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="transition hover:text-rose-400">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 font-medium text-white">ติดต่อเรา</h4>
          <ul class="space-y-2 text-sm">
            <li>โทร: {{ site.phone }}</li>
            <li>อีเมล: {{ site.email }}</li>
            <li>Line: {{ site.line }}</li>
            <li>เวลา: {{ site.hours }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} {{ site.name }}. ตัวอย่างเว็บไซต์สำหรับโชว์ผลงาน
      </div>
    </div>
  </footer>
</template>
