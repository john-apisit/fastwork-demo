<script setup lang="ts">
import { siteInfo, navLinks } from '../data/content'
</script>

<template>
  <footer class="bg-ocean-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-10">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-gold-400 text-2xl">✦</span>
            <span class="font-display text-xl font-semibold">Azure Bay</span>
          </div>
          <p class="mt-4 text-sm text-white/70 leading-relaxed">
            {{ siteInfo.tagline }}
          </p>
        </div>

        <div>
          <h4 class="font-display text-lg font-semibold text-gold-400">เมนู</h4>
          <ul class="mt-4 space-y-2">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-white/70 hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-display text-lg font-semibold text-gold-400">ติดต่อ</h4>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>{{ siteInfo.address }}</li>
            <li>{{ siteInfo.phone }}</li>
            <li>{{ siteInfo.email }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        © {{ new Date().getFullYear() }} {{ siteInfo.name }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
