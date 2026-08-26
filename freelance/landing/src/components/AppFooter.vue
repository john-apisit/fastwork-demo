<script setup lang="ts">
import { navLinks } from '../data/content'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white py-12">
    <div class="section-container">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <a href="#home" class="flex items-center gap-2.5">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white"
            >
              JD
            </span>
            <span class="font-display text-lg font-bold text-surface-900">
              Mr.John<span class="text-brand-600">Dev</span>
            </span>
          </a>
          <p class="mt-4 max-w-xs text-sm text-slate-500">
            รับพัฒนาเว็บไซต์ ระบบ Web Application CRM/ERP คลังสินค้า และ Mobile App
            ตามความต้องการของธุรกิจ
          </p>
        </div>

        <div>
          <h4 class="font-display font-semibold text-surface-900">เมนู</h4>
          <nav class="mt-4 flex flex-col gap-2" aria-label="เมนูท้ายหน้า">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-sm text-slate-500 transition hover:text-brand-600"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>

        <div>
          <h4 class="font-display font-semibold text-surface-900">บริการหลัก</h4>
          <ul class="mt-4 space-y-2 text-sm text-slate-500">
            <li>Company Website</li>
            <li>Web Application</li>
            <li>CRM & ERP</li>
            <li>Stock & Warehouse</li>
            <li>Mobile Application</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
        <p class="text-sm text-slate-400">
          © {{ currentYear }} Mr.John Dev. All rights reserved.
        </p>
        <p class="text-sm text-slate-400">
          Built with Vue 3 · TypeScript · Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
