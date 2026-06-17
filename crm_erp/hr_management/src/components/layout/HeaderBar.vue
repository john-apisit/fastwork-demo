<script setup lang="ts">
import { computed, ref } from 'vue'
import { notifications as initialNotifications } from '@/data/mockData'
import NotificationPanel from './NotificationPanel.vue'

defineProps<{
  title: string
}>()

const showNotifications = ref(false)
const notificationList = ref([...initialNotifications])

const unreadCount = computed(() => notificationList.value.filter((n) => !n.read).length)

function toggleNotifications() {
  showNotifications.value = !showNotifications.value
}

function markAllRead() {
  notificationList.value = notificationList.value.map((n) => ({ ...n, read: true }))
}

function markRead(id: string) {
  notificationList.value = notificationList.value.map((n) =>
    n.id === id ? { ...n, read: true } : n,
  )
}
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md">
    <div class="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 class="font-display text-lg font-bold text-slate-900 sm:text-xl">{{ title }}</h1>
        <p class="hidden text-sm text-slate-500 sm:block">ระบบ Back Office สำหรับองค์กรขนาดกลาง</p>
      </div>

      <div class="flex items-center gap-2 sm:gap-4">
        <div class="relative hidden sm:block">
          <svg class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="ค้นหาพนักงาน, เอกสาร..."
            class="w-48 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 lg:w-64"
          />
        </div>

        <button
          class="relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="การแจ้งเตือน"
          @click="toggleNotifications"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span
            v-if="unreadCount > 0"
            class="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white"
          >
            {{ unreadCount }}
          </span>
        </button>

        <div class="flex items-center gap-3 border-l border-slate-200 pl-2 sm:pl-4">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
            alt="ผู้ใช้งาน"
            class="h-9 w-9 rounded-full object-cover ring-2 ring-brand-100"
          />
          <div class="hidden md:block">
            <p class="text-sm font-semibold text-slate-900">คุณพิมพ์ใจ ศรีสุข</p>
            <p class="text-xs text-slate-500">HR Manager</p>
          </div>
        </div>
      </div>
    </div>

    <NotificationPanel
      v-if="showNotifications"
      :notifications="notificationList"
      @close="showNotifications = false"
      @mark-all-read="markAllRead"
      @mark-read="markRead"
    />
  </header>
</template>
