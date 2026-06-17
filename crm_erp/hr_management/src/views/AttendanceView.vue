<script setup lang="ts">
import { computed, ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { attendanceRecords } from '@/data/mockData'

const dateFilter = ref('2025-06-17')
const statusFilter = ref('all')

const filtered = computed(() => {
  return attendanceRecords.filter((r) => {
    const matchDate = r.date === dateFilter.value
    const matchStatus = statusFilter.value === 'all' || r.status === statusFilter.value
    return matchDate && matchStatus
  })
})

const stats = computed(() => ({
  present: filtered.value.filter((r) => r.status === 'present').length,
  late: filtered.value.filter((r) => r.status === 'late').length,
  absent: filtered.value.filter((r) => r.status === 'absent').length,
  wfh: filtered.value.filter((r) => r.status === 'wfh').length,
}))
</script>

<template>
  <div class="space-y-6">
    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=300&fit=crop"
        alt="ออฟฟิศ"
        class="h-32 w-full object-cover sm:h-40"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent" />
      <div class="absolute bottom-0 left-0 p-6">
        <h2 class="font-display text-xl font-bold text-white">บันทึกเวลาเข้า-ออกงาน</h2>
        <p class="text-sm text-slate-200">ติดตามการมาทำงานของพนักงานแบบเรียลไทม์</p>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-4">
      <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
        <p class="text-2xl font-bold text-emerald-700">{{ stats.present }}</p>
        <p class="text-xs font-medium text-emerald-600">มาทำงาน</p>
      </div>
      <div class="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
        <p class="text-2xl font-bold text-amber-700">{{ stats.late }}</p>
        <p class="text-xs font-medium text-amber-600">มาสาย</p>
      </div>
      <div class="rounded-xl border border-rose-200 bg-rose-50 p-4 text-center">
        <p class="text-2xl font-bold text-rose-700">{{ stats.absent }}</p>
        <p class="text-xs font-medium text-rose-600">ขาด</p>
      </div>
      <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
        <p class="text-2xl font-bold text-blue-700">{{ stats.wfh }}</p>
        <p class="text-xs font-medium text-blue-600">Work From Home</p>
      </div>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row">
      <input
        v-model="dateFilter"
        type="date"
        class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
      />
      <select
        v-model="statusFilter"
        class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
      >
        <option value="all">ทุกสถานะ</option>
        <option value="present">มาทำงาน</option>
        <option value="late">มาสาย</option>
        <option value="absent">ขาด</option>
        <option value="wfh">WFH</option>
      </select>
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th class="px-5 py-3">พนักงาน</th>
            <th class="px-5 py-3">วันที่</th>
            <th class="px-5 py-3">เวลาเข้า</th>
            <th class="px-5 py-3">เวลาออก</th>
            <th class="px-5 py-3">ชั่วโมงทำงาน</th>
            <th class="px-5 py-3">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="record in filtered" :key="record.id" class="hover:bg-slate-50">
            <td class="px-5 py-3.5 font-medium text-slate-900">{{ record.employeeName }}</td>
            <td class="px-5 py-3.5 text-slate-600">{{ record.date }}</td>
            <td class="px-5 py-3.5 font-mono text-slate-600">{{ record.checkIn ?? '—' }}</td>
            <td class="px-5 py-3.5 font-mono text-slate-600">{{ record.checkOut ?? '—' }}</td>
            <td class="px-5 py-3.5 text-slate-600">{{ record.hours }} ชม.</td>
            <td class="px-5 py-3.5"><StatusBadge :status="record.status" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
