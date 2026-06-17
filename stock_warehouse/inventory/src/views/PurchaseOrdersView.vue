<script setup lang="ts">
import { ref, computed } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { purchaseOrders } from '@/data/mockData'

const statusFilter = ref('all')

const filtered = computed(() =>
  statusFilter.value === 'all'
    ? purchaseOrders
    : purchaseOrders.filter((po) => po.status === statusFilter.value),
)

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(n)

const statusCounts = {
  all: purchaseOrders.length,
  pending: purchaseOrders.filter((p) => p.status === 'pending').length,
  approved: purchaseOrders.filter((p) => p.status === 'approved').length,
  received: purchaseOrders.filter((p) => p.status === 'received').length,
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-wrap gap-3">
      <button
        v-for="(count, status) in statusCounts"
        :key="status"
        :class="statusFilter === status ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-300'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        @click="statusFilter = status"
      >
        {{ status === 'all' ? 'ทั้งหมด' : status === 'pending' ? 'รออนุมัติ' : status === 'approved' ? 'อนุมัติแล้ว' : 'รับแล้ว' }}
        ({{ count }})
      </button>
      <div class="flex-1" />
      <button class="btn-primary">+ สร้าง PO ใหม่</button>
    </div>

    <div class="card overflow-hidden">
      <table class="w-full">
        <thead class="bg-slate-50 border-b border-slate-200">
          <tr>
            <th class="table-header">เลขที่ PO</th>
            <th class="table-header">ผู้จำหน่าย</th>
            <th class="table-header">รายการ</th>
            <th class="table-header">มูลค่า</th>
            <th class="table-header">วันที่สั่ง</th>
            <th class="table-header">วันที่คาดว่าได้รับ</th>
            <th class="table-header">สถานะ</th>
            <th class="table-header">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="po in filtered" :key="po.id" class="hover:bg-slate-50">
            <td class="table-cell font-mono font-medium text-brand-600">{{ po.poNumber }}</td>
            <td class="table-cell">{{ po.supplier }}</td>
            <td class="table-cell">{{ po.items }} รายการ</td>
            <td class="table-cell font-medium">{{ formatCurrency(po.totalAmount) }}</td>
            <td class="table-cell text-slate-500">{{ po.orderDate }}</td>
            <td class="table-cell text-slate-500">{{ po.expectedDate }}</td>
            <td class="table-cell">
              <StatusBadge :status="po.status" type="po" />
            </td>
            <td class="table-cell">
              <button class="text-brand-600 hover:text-brand-700 text-sm font-medium">ดูรายละเอียด</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
