<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  change: string
  trend: 'up' | 'down' | 'neutral'
  icon?: string
}>()
</script>

<template>
  <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm font-medium text-slate-500">{{ label }}</p>
        <p class="mt-2 font-display text-2xl font-bold text-slate-900">{{ value }}</p>
      </div>
      <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <slot name="icon">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </slot>
      </div>
    </div>
    <p
      class="mt-3 text-xs font-medium"
      :class="{
        'text-emerald-600': trend === 'up',
        'text-rose-600': trend === 'down',
        'text-slate-500': trend === 'neutral',
      }"
    >
      {{ change }}
      <span class="font-normal text-slate-400">จากเดือนที่แล้ว</span>
    </p>
  </div>
</template>
