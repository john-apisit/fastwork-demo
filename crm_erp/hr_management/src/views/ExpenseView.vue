<script setup lang="ts">
import { computed, ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { expenseClaims } from '@/data/mockData'
import type { ExpenseStatus } from '@/types'

const claims = ref([...expenseClaims])
const statusFilter = ref('all')

const filtered = computed(() => {
  if (statusFilter.value === 'all') return claims.value
  return claims.value.filter((c) => c.status === statusFilter.value)
})

const totalPending = computed(() =>
  claims.value.filter((c) => c.status === 'pending').reduce((sum, c) => sum + c.amount, 0),
)

const totalApproved = computed(() =>
  claims.value.filter((c) => c.status === 'approved' || c.status === 'paid').reduce((sum, c) => sum + c.amount, 0),
)

function updateStatus(id: string, status: ExpenseStatus) {
  claims.value = claims.value.map((c) => (c.id === id ? { ...c, status } : c))
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(amount)
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p class="text-sm text-slate-500">ยอดรออนุมัติ</p>
        <p class="mt-1 font-display text-2xl font-bold text-amber-600">{{ formatCurrency(totalPending) }}</p>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p class="text-sm text-slate-500">ยอดอนุมัติ/จ่ายแล้ว</p>
        <p class="mt-1 font-display text-2xl font-bold text-emerald-600">{{ formatCurrency(totalApproved) }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <select
        v-model="statusFilter"
        class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
      >
        <option value="all">ทุกสถานะ</option>
        <option value="pending">รออนุมัติ</option>
        <option value="approved">อนุมัติ</option>
        <option value="paid">จ่ายแล้ว</option>
        <option value="rejected">ปฏิเสธ</option>
      </select>
      <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
        + ยื่นเบิกค่าใช้จ่าย
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="claim in filtered"
        :key="claim.id"
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-semibold text-slate-900">{{ claim.title }}</h3>
            <p class="mt-1 text-sm text-slate-500">{{ claim.employeeName }} · {{ claim.category }}</p>
          </div>
          <StatusBadge :status="claim.status" />
        </div>
        <div class="mt-4 flex items-end justify-between">
          <div>
            <p class="font-display text-xl font-bold text-slate-900">{{ formatCurrency(claim.amount) }}</p>
            <p class="text-xs text-slate-400">{{ claim.date }} · {{ claim.receipt }}</p>
          </div>
          <div v-if="claim.status === 'pending'" class="flex gap-2">
            <button
              class="rounded-md bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700"
              @click="updateStatus(claim.id, 'approved')"
            >
              อนุมัติ
            </button>
            <button
              class="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-semibold text-rose-700"
              @click="updateStatus(claim.id, 'rejected')"
            >
              ปฏิเสธ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
