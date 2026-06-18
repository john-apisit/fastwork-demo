<script setup lang="ts">
import { computed } from 'vue'
import { statusColors } from '@/data/mockData'

const props = defineProps<{
  status: string
}>()

const colorClass = computed(() => statusColors[props.status] ?? 'bg-slate-100 text-slate-700')
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="colorClass"
  >
    <slot />
  </span>
</template>
