<script setup lang="ts">
defineProps<{
  status: string
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}>()

const colorMap: Record<string, string> = {
  active: 'bg-emerald-100 text-emerald-700',
  'on-leave': 'bg-amber-100 text-amber-700',
  probation: 'bg-violet-100 text-violet-700',
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-rose-100 text-rose-700',
  paid: 'bg-blue-100 text-blue-700',
  present: 'bg-emerald-100 text-emerald-700',
  late: 'bg-amber-100 text-amber-700',
  absent: 'bg-rose-100 text-rose-700',
  wfh: 'bg-blue-100 text-blue-700',
}

const labelMap: Record<string, string> = {
  active: 'ทำงาน',
  'on-leave': 'ลา',
  probation: 'ทดลองงาน',
  pending: 'รออนุมัติ',
  approved: 'อนุมัติ',
  rejected: 'ปฏิเสธ',
  paid: 'จ่ายแล้ว',
  present: 'มาทำงาน',
  late: 'มาสาย',
  absent: 'ขาด',
  wfh: 'WFH',
}

const variantClass = {
  default: 'bg-slate-100 text-slate-700',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-rose-100 text-rose-700',
  info: 'bg-blue-100 text-blue-700',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
    :class="variant ? variantClass[variant] : (colorMap[status] ?? variantClass.default)"
  >
    {{ labelMap[status] ?? status }}
  </span>
</template>
