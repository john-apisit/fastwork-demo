<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navItems, stepLabels, workflowSteps } from '@/data/mockData'
import type { WorkflowStep } from '@/types'

const route = useRoute()

const icons: Record<string, string> = {
  dashboard: '📊',
  jobs: '📋',
  assignment: '🚛',
  tracking: '📍',
  dealers: '🏢',
  reports: '📈',
}

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const currentStep = computed<WorkflowStep | null>(() => {
  const match = navItems.find((item) => {
    if (item.path === '/') return route.path === '/'
    return route.path.startsWith(item.path)
  })
  return match?.step ?? null
})

const stepProgress = computed(() => {
  if (!currentStep.value) return 0
  const idx = workflowSteps.indexOf(currentStep.value)
  return Math.round(((idx + 1) / workflowSteps.length) * 100)
})
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-white">
      <div class="border-b border-slate-200 px-5 py-5">
        <div class="flex items-center gap-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white"
          >
            <span class="text-lg">🚗</span>
          </div>
          <div>
            <h1 class="text-base font-bold text-slate-900">AutoLogistics</h1>
            <p class="text-xs text-slate-500">ระบบขนส่งรถยนต์</p>
          </div>
        </div>
      </div>

      <!-- Workflow progress -->
      <div class="border-b border-slate-200 px-5 py-4">
        <p class="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          ขั้นตอนงาน
        </p>
        <div class="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            class="h-full rounded-full bg-brand-600 transition-all duration-500"
            :style="{ width: `${stepProgress}%` }"
          />
        </div>
        <p v-if="currentStep" class="mt-2 text-xs text-slate-600">
          {{ stepLabels[currentStep] }}
        </p>
      </div>

      <nav class="flex-1 overflow-y-auto px-3 py-4">
        <ul class="space-y-1">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition"
              :class="
                isActive(item.path)
                  ? 'bg-brand-50 font-medium text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              "
            >
              <span class="text-base">{{ icons[item.icon] }}</span>
              <span>{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="border-t border-slate-200 px-5 py-4">
        <p class="text-xs text-slate-400">Demo — Excel to App</p>
        <p class="text-xs text-slate-400">Vue + TypeScript + Tailwind</p>
      </div>
    </aside>

    <!-- Main content -->
    <div class="ml-64 flex min-h-screen flex-1 flex-col">
      <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div class="flex items-center justify-between px-8 py-4">
          <div>
            <slot name="header" />
          </div>
          <div class="flex items-center gap-3">
            <span class="hidden text-sm text-slate-500 sm:inline">18 มิ.ย. 2569</span>
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-medium text-brand-700"
            >
              AD
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 px-8 py-6">
        <slot />
      </main>
    </div>
  </div>
</template>
