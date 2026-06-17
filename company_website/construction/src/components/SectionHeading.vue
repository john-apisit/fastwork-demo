<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description?: string
  light?: boolean
}>()
</script>

<template>
  <div class="text-center">
    <p
      class="text-sm font-semibold uppercase tracking-widest"
      :class="light ? 'text-brand-300' : 'text-brand-600'"
    >
      {{ label }}
    </p>
    <h2
      class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      :class="light ? 'text-white' : 'text-slate-900'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mx-auto mt-4 max-w-2xl text-lg"
      :class="light ? 'text-slate-300' : 'text-slate-600'"
    >
      {{ description }}
    </p>
  </div>
</template>
