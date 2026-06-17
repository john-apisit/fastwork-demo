<script setup lang="ts">
import { companyInfo, navLinks } from '@/data/content'
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-850 text-slate-300">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white">
              ส
            </div>
            <div>
              <p class="text-lg font-bold text-white">{{ companyInfo.name }}</p>
              <p class="text-sm text-slate-400">{{ companyInfo.tagline }}</p>
            </div>
          </div>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            ผู้เชี่ยวชาญด้านการก่อสร้างและวิศวกรรม มุ่งมั่นสร้างโครงสร้างที่ปลอดภัย มีคุณภาพ
            และยั่งยืน ด้วยประสบการณ์กว่า 25 ปี
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">เมนู</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="link in navLinks" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm text-slate-400 transition hover:text-brand-400"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">ติดต่อ</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li>{{ companyInfo.address }}</li>
            <li>
              <a :href="`tel:${companyInfo.phone}`" class="transition hover:text-brand-400">
                {{ companyInfo.phone }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${companyInfo.email}`" class="transition hover:text-brand-400">
                {{ companyInfo.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {{ new Date().getFullYear() }} {{ companyInfo.name }}. สงวนลิขสิทธิ์.
      </div>
    </div>
  </footer>
</template>
