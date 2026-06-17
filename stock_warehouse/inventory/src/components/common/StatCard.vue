<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  subtitle?: string
  icon: string
  trend?: number
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple'
}>()

const colorMap = {
  blue: 'bg-brand-50 text-brand-600',
  green: 'bg-warehouse-50 text-warehouse-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
  purple: 'bg-purple-50 text-purple-600',
}
</script>

<template>
  <div class="card p-5">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-slate-500 font-medium">{{ title }}</p>
        <p class="text-2xl font-bold text-slate-900 mt-1">{{ value }}</p>
        <p v-if="subtitle" class="text-xs text-slate-400 mt-1">{{ subtitle }}</p>
        <div v-if="trend !== undefined" class="flex items-center gap-1 mt-2">
          <span
            :class="trend >= 0 ? 'text-warehouse-600' : 'text-red-500'"
            class="text-xs font-semibold"
          >
            {{ trend >= 0 ? '↑' : '↓' }} {{ Math.abs(trend) }}%
          </span>
          <span class="text-xs text-slate-400">จากเดือนที่แล้ว</span>
        </div>
      </div>
      <div
        :class="colorMap[color || 'blue']"
        class="w-11 h-11 rounded-lg flex items-center justify-center text-xl"
      >
        {{ icon }}
      </div>
    </div>
  </div>
</template>
