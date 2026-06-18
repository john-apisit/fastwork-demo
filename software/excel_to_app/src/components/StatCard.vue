<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  icon?: string
  trend?: string
  color?: 'blue' | 'amber' | 'emerald' | 'violet' | 'rose'
}>()
</script>

<template>
  <div class="card p-5">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm font-medium text-slate-500">{{ label }}</p>
        <p class="mt-1 text-2xl font-bold text-slate-900">{{ value }}</p>
        <p v-if="trend" class="mt-1 text-xs text-emerald-600">{{ trend }}</p>
      </div>
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg"
        :class="{
          'bg-blue-100 text-blue-600': color === 'blue' || !color,
          'bg-amber-100 text-amber-600': color === 'amber',
          'bg-emerald-100 text-emerald-600': color === 'emerald',
          'bg-violet-100 text-violet-600': color === 'violet',
          'bg-rose-100 text-rose-600': color === 'rose',
        }"
      >
        <span class="text-lg">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>
