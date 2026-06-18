<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const store = useAppStore()

const tabs = [
  { name: 'home', path: '/', label: 'หน้าแรก', icon: 'home' },
  { name: 'explore', path: '/explore', label: 'ค้นหา', icon: 'search' },
  { name: 'bookings', path: '/bookings', label: 'จอง', icon: 'calendar' },
  { name: 'knowledge', path: '/knowledge', label: 'ความรู้', icon: 'book' },
  { name: 'profile', path: '/profile', label: 'โปรไฟล์', icon: 'user' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="border-t border-stone-100 bg-white px-2 pb-5 pt-2">
    <div class="flex items-center justify-around">
      <router-link
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.path"
        class="relative flex flex-col items-center gap-0.5 px-2 py-1 transition"
        :class="isActive(tab.path) ? 'text-forest-700' : 'text-stone-400'"
      >
        <svg v-if="tab.icon === 'home'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <svg v-else-if="tab.icon === 'search'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg v-else-if="tab.icon === 'calendar'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <svg v-else-if="tab.icon === 'book'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-[10px] font-medium">{{ tab.label }}</span>
        <span
          v-if="tab.name === 'bookings' && store.pendingBookings.length > 0"
          class="absolute -mt-6 ml-4 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold text-white"
        >
          {{ store.pendingBookings.length }}
        </span>
      </router-link>
    </div>
  </nav>
</template>
