<script setup lang="ts">
import { computed, ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { leaveRequests } from '@/data/mockData'
import type { LeaveRequest, LeaveStatus } from '@/types'

const requests = ref([...leaveRequests])
const showForm = ref(false)

const newLeave = ref({
  employeeName: '',
  type: 'ลาป่วย' as LeaveRequest['type'],
  startDate: '',
  endDate: '',
  reason: '',
})

function updateStatus(id: string, status: LeaveStatus) {
  requests.value = requests.value.map((r) => (r.id === id ? { ...r, status } : r))
}

function submitLeave() {
  if (!newLeave.value.employeeName || !newLeave.value.startDate) return
  const start = new Date(newLeave.value.startDate)
  const end = new Date(newLeave.value.endDate || newLeave.value.startDate)
  const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 86400000) + 1)

  requests.value.unshift({
    id: `lv-${Date.now()}`,
    employeeId: 'emp-new',
    employeeName: newLeave.value.employeeName,
    type: newLeave.value.type,
    startDate: newLeave.value.startDate,
    endDate: newLeave.value.endDate || newLeave.value.startDate,
    days,
    reason: newLeave.value.reason || '-',
    status: 'pending',
    submittedAt: new Date().toISOString().slice(0, 10),
  })

  newLeave.value = { employeeName: '', type: 'ลาป่วย', startDate: '', endDate: '', reason: '' }
  showForm.value = false
}

const summary = computed(() => ({
  pending: requests.value.filter((r) => r.status === 'pending').length,
  approved: requests.value.filter((r) => r.status === 'approved').length,
  rejected: requests.value.filter((r) => r.status === 'rejected').length,
}))
</script>

<template>
  <div class="space-y-6">
    <div class="grid gap-4 sm:grid-cols-3">
      <div class="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p class="text-sm font-medium text-amber-700">รออนุมัติ</p>
        <p class="mt-1 font-display text-2xl font-bold text-amber-900">{{ summary.pending }}</p>
      </div>
      <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-medium text-emerald-700">อนุมัติแล้ว</p>
        <p class="mt-1 font-display text-2xl font-bold text-emerald-900">{{ summary.approved }}</p>
      </div>
      <div class="rounded-xl border border-rose-200 bg-rose-50 p-4">
        <p class="text-sm font-medium text-rose-700">ปฏิเสธ</p>
        <p class="mt-1 font-display text-2xl font-bold text-rose-900">{{ summary.rejected }}</p>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        @click="showForm = !showForm"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        ยื่นคำขอลา
      </button>
    </div>

    <div v-if="showForm" class="rounded-xl border border-brand-200 bg-brand-50/50 p-5">
      <h3 class="font-semibold text-slate-900">แบบฟอร์มยื่นคำขอลา</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <input v-model="newLeave.employeeName" placeholder="ชื่อพนักงาน" class="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
        <select v-model="newLeave.type" class="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>ลาป่วย</option>
          <option>ลากิจ</option>
          <option>ลาพักร้อน</option>
          <option>ลาคลอด</option>
        </select>
        <input v-model="newLeave.startDate" type="date" class="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
        <input v-model="newLeave.endDate" type="date" class="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
        <textarea
          v-model="newLeave.reason"
          placeholder="เหตุผล"
          rows="2"
          class="sm:col-span-2 rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>
      <div class="mt-4 flex gap-2">
        <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" @click="submitLeave">
          ส่งคำขอ
        </button>
        <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm" @click="showForm = false">ยกเลิก</button>
      </div>
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th class="px-5 py-3">พนักงาน</th>
            <th class="px-5 py-3">ประเภท</th>
            <th class="px-5 py-3">วันที่</th>
            <th class="px-5 py-3">จำนวนวัน</th>
            <th class="px-5 py-3">เหตุผล</th>
            <th class="px-5 py-3">สถานะ</th>
            <th class="px-5 py-3">การดำเนินการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="req in requests" :key="req.id" class="hover:bg-slate-50">
            <td class="px-5 py-3.5 font-medium text-slate-900">{{ req.employeeName }}</td>
            <td class="px-5 py-3.5 text-slate-600">{{ req.type }}</td>
            <td class="px-5 py-3.5 text-slate-600">{{ req.startDate }} – {{ req.endDate }}</td>
            <td class="px-5 py-3.5 text-slate-600">{{ req.days }}</td>
            <td class="max-w-[200px] truncate px-5 py-3.5 text-slate-500">{{ req.reason }}</td>
            <td class="px-5 py-3.5"><StatusBadge :status="req.status" /></td>
            <td class="px-5 py-3.5">
              <div v-if="req.status === 'pending'" class="flex gap-2">
                <button
                  class="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-200"
                  @click="updateStatus(req.id, 'approved')"
                >
                  อนุมัติ
                </button>
                <button
                  class="rounded-md bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-200"
                  @click="updateStatus(req.id, 'rejected')"
                >
                  ปฏิเสธ
                </button>
              </div>
              <span v-else class="text-xs text-slate-400">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
