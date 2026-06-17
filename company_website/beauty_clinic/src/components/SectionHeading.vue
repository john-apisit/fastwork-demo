<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto mb-12 max-w-2xl text-center">
    <p class="mb-2 text-sm font-medium uppercase tracking-widest text-rose-500">
      {{ label }}
    </p>
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
