<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

const navItems = [
  { to: '/dashboard', label: 'Executive Dashboard', icon: 'chart' },
  { to: '/employees', label: 'Employee Management', icon: 'users' },
  { to: '/leave', label: 'Leave Management', icon: 'calendar' },
  { to: '/attendance', label: 'Time Attendance', icon: 'clock' },
  { to: '/expenses', label: 'Expense Claim', icon: 'receipt' },
  { to: '/approvals', label: 'Approval Workflow', icon: 'check' },
  { to: '/documents', label: 'Document Management', icon: 'folder' },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <!-- Mobile overlay -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
    @click="mobileOpen = false"
  />

  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0',
      mobileOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <div class="flex h-16 items-center gap-3 border-b border-slate-100 px-5">
      <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
        HR
      </div>
      <div>
        <p class="font-display text-sm font-bold text-slate-900">HR Management</p>
        <p class="text-xs text-slate-500">Back Office Demo</p>
      </div>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
      <p class="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">เมนูหลัก</p>
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        :class="isActive(item.to)
          ? 'bg-brand-50 text-brand-700'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
        @click="mobileOpen = false"
      >
        <span
          class="flex h-8 w-8 items-center justify-center rounded-md"
          :class="isActive(item.to) ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'"
        >
          <svg v-if="item.icon === 'chart'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13h4v8H3v-8zm7-10h4v18h-4V3zm7 6h4v12h-4V9z" />
          </svg>
          <svg v-else-if="item.icon === 'users'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <svg v-else-if="item.icon === 'calendar'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg v-else-if="item.icon === 'clock'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else-if="item.icon === 'receipt'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
          </svg>
          <svg v-else-if="item.icon === 'check'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </span>
        <span class="leading-tight">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="border-t border-slate-100 p-4">
      <div class="rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
        <p class="text-xs font-medium text-brand-100">ผลลัพธ์จากระบบ</p>
        <p class="mt-1 font-display text-lg font-bold">ลดงานเอกสาร 90%</p>
        <p class="mt-1 text-xs text-brand-100">อนุมัติเร็วขึ้น ข้อมูลค้นหาง่าย</p>
      </div>
    </div>
  </aside>

  <!-- Mobile toggle (rendered in header via teleport would be complex; expose via provide or duplicate) -->
  <button
    class="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg lg:hidden"
    aria-label="เปิดเมนู"
    @click="mobileOpen = !mobileOpen"
  >
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</template>
