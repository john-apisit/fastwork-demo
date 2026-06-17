<script setup lang="ts">
import { ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { approvalItems } from '@/data/mockData'
import type { ApprovalStatus } from '@/types'

const items = ref([...approvalItems])
const typeFilter = ref('all')

function getFiltered() {
  if (typeFilter.value === 'all') return items.value
  return items.value.filter((i) => i.type === typeFilter.value)
}

function updateStatus(id: string, status: ApprovalStatus) {
  items.value = items.value.map((i) => (i.id === id ? { ...i, status } : i))
}

const typeLabels: Record<string, string> = {
  leave: 'ลา',
  expense: 'เบิกค่าใช้จ่าย',
  document: 'เอกสาร',
}

const typeIcons: Record<string, string> = {
  leave: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  expense: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
}
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-xl border border-slate-200 bg-gradient-to-r from-brand-50 to-white p-5">
      <h2 class="font-display font-bold text-slate-900">Approval Workflow</h2>
      <p class="mt-1 text-sm text-slate-600">
        ลดเวลาการอนุมัติคำขอลางานและเบิกค่าใช้จ่ายด้วยขั้นตอนเดียว
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <button
          v-for="t in ['all', 'leave', 'expense', 'document']"
          :key="t"
          class="rounded-full px-4 py-1.5 text-sm font-medium transition"
          :class="typeFilter === t
            ? 'bg-brand-600 text-white'
            : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'"
          @click="typeFilter = t"
        >
          {{ t === 'all' ? 'ทั้งหมด' : typeLabels[t] }}
        </button>
      </div>
    </div>

    <!-- Workflow steps -->
    <div class="hidden items-center justify-center gap-2 sm:flex">
      <div class="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-slate-200">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">1</span>
        ยื่นคำขอ
      </div>
      <svg class="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      <div class="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-slate-200">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">2</span>
        หัวหน้าอนุมัติ
      </div>
      <svg class="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      <div class="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-slate-200">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">3</span>
        HR/การเงินดำเนินการ
      </div>
    </div>

    <div class="space-y-3">
      <div
        v-for="item in getFiltered()"
        :key="item.id"
        class="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          :class="{
            'bg-violet-100 text-violet-600': item.type === 'leave',
            'bg-amber-100 text-amber-600': item.type === 'expense',
            'bg-blue-100 text-blue-600': item.type === 'document',
          }"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" :d="typeIcons[item.type]" />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="font-semibold text-slate-900">{{ item.title }}</h3>
            <span
              v-if="item.priority === 'high'"
              class="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase text-rose-600"
            >
              ด่วน
            </span>
          </div>
          <p class="mt-1 text-sm text-slate-500">
            {{ item.requester }} · {{ item.department }} · {{ item.submittedAt }}
            <span v-if="item.amount"> · {{ item.amount.toLocaleString() }} บาท</span>
          </p>
        </div>
        <div class="flex shrink-0 items-center gap-3">
          <StatusBadge :status="item.status" />
          <div v-if="item.status === 'pending'" class="flex gap-2">
            <button
              class="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
              @click="updateStatus(item.id, 'approved')"
            >
              อนุมัติ
            </button>
            <button
              class="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 ring-1 ring-rose-200 hover:bg-rose-50"
              @click="updateStatus(item.id, 'rejected')"
            >
              ปฏิเสธ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
