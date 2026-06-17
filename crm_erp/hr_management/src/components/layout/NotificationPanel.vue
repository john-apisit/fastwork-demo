<script setup lang="ts">
import type { Notification } from '@/types'

defineProps<{
  notifications: Notification[]
}>()

const emit = defineEmits<{
  close: []
  markAllRead: []
  markRead: [id: string]
}>()
</script>

<template>
  <div class="absolute right-4 top-full z-30 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl sm:right-6 lg:right-8">
    <div class="flex items-center justify-between border-b border-slate-100 px-4 py-3">
      <h3 class="font-semibold text-slate-900">การแจ้งเตือน</h3>
      <div class="flex gap-2">
        <button class="text-xs font-medium text-brand-600 hover:text-brand-700" @click="emit('markAllRead')">
          อ่านทั้งหมด
        </button>
        <button class="text-slate-400 hover:text-slate-600" aria-label="ปิด" @click="emit('close')">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <ul class="max-h-80 overflow-y-auto scrollbar-thin">
      <li
        v-for="n in notifications"
        :key="n.id"
        class="cursor-pointer border-b border-slate-50 px-4 py-3 transition hover:bg-slate-50"
        :class="{ 'bg-brand-50/50': !n.read }"
        @click="emit('markRead', n.id)"
      >
        <div class="flex gap-3">
          <span
            class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
            :class="{
              'bg-amber-100 text-amber-600': n.type === 'approval' || n.type === 'warning',
              'bg-emerald-100 text-emerald-600': n.type === 'success',
              'bg-blue-100 text-blue-600': n.type === 'info',
            }"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-slate-900">{{ n.title }}</p>
            <p class="mt-0.5 text-xs text-slate-500 line-clamp-2">{{ n.message }}</p>
            <p class="mt-1 text-[11px] text-slate-400">{{ n.time }}</p>
          </div>
          <span v-if="!n.read" class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
        </div>
      </li>
    </ul>
  </div>
</template>
