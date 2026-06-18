<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  modelValue: string | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const viewDate = ref(new Date())

const monthLabel = computed(() =>
  viewDate.value.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' }),
)

const days = computed(() => {
  const year = viewDate.value.getFullYear()
  const month = viewDate.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const cells: { date: string; day: number; disabled: boolean; isToday: boolean }[] = []

  for (let i = 0; i < firstDay; i++) {
    cells.push({ date: '', day: 0, disabled: true, isToday: false })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    const iso = date.toISOString().split('T')[0]
    cells.push({
      date: iso,
      day: d,
      disabled: date < today,
      isToday: date.getTime() === today.getTime(),
    })
  }

  return cells
})

function prevMonth() {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() - 1, 1)
}

function nextMonth() {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() + 1, 1)
}

function selectDay(date: string, disabled: boolean) {
  if (disabled || !date) return
  emit('update:modelValue', date)
}

const weekDays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
</script>

<template>
  <div class="card p-4">
    <div class="mb-3 flex items-center justify-between">
      <button class="rounded-lg p-1 hover:bg-stone-100" @click="prevMonth">
        <svg class="h-5 w-5 text-forest-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="text-sm font-semibold text-forest-800">{{ monthLabel }}</span>
      <button class="rounded-lg p-1 hover:bg-stone-100" @click="nextMonth">
        <svg class="h-5 w-5 text-forest-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center">
      <span v-for="wd in weekDays" :key="wd" class="py-1 text-[10px] font-medium text-stone-400">{{ wd }}</span>
      <button
        v-for="(cell, i) in days"
        :key="i"
        class="flex h-9 items-center justify-center rounded-lg text-sm transition"
        :class="{
          'invisible': !cell.day,
          'text-stone-300': cell.disabled,
          'bg-forest-700 font-semibold text-white': modelValue === cell.date,
          'ring-1 ring-gold-400': cell.isToday && modelValue !== cell.date,
          'hover:bg-forest-50': !cell.disabled && modelValue !== cell.date,
        }"
        :disabled="cell.disabled"
        @click="selectDay(cell.date, cell.disabled)"
      >
        {{ cell.day || '' }}
      </button>
    </div>
  </div>
</template>
