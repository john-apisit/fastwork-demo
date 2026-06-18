<script setup lang="ts">
import type { GolfCourse } from '@/types'

defineProps<{
  course: GolfCourse
  selected?: boolean
}>()

defineEmits<{
  select: []
}>()
</script>

<template>
  <button
    class="card w-full overflow-hidden text-left transition"
    :class="selected ? 'ring-2 ring-forest-600' : 'hover:shadow-premium'"
    @click="$emit('select')"
  >
    <div class="relative h-28">
      <img :src="course.image" :alt="course.name" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div class="absolute bottom-2 left-3 right-3">
        <p class="text-sm font-semibold text-white">{{ course.name }}</p>
        <p class="text-[11px] text-white/75">{{ course.nameEn }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between px-3 py-2 text-xs text-stone-500">
      <span>{{ course.province }}</span>
      <span>{{ course.holes }} หลุม</span>
    </div>
  </button>
</template>
