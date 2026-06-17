<script setup lang="ts">
import { ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { goodsTransactions } from '@/data/mockData'

const activeTab = ref<'all' | 'receive' | 'issue'>('all')

const filtered = () => {
  if (activeTab.value === 'all') return goodsTransactions
  return goodsTransactions.filter((t) => t.type === activeTab.value)
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-5 border-l-4 border-l-warehouse-500">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-warehouse-50 rounded-lg flex items-center justify-center text-2xl">
            📥
          </div>
          <div>
            <h3 class="font-semibold text-slate-900">Goods Receive</h3>
            <p class="text-sm text-slate-500">รับสินค้าเข้าคลังจาก PO / Supplier</p>
          </div>
        </div>
        <button class="btn-primary mt-4 w-full">+ รับสินค้าเข้า (GR)</button>
      </div>
      <div class="card p-5 border-l-4 border-l-orange-500">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-2xl">
            📤
          </div>
          <div>
            <h3 class="font-semibold text-slate-900">Goods Issue</h3>
            <p class="text-sm text-slate-500">จ่ายสินค้าออกจากคลัง / Shipping</p>
          </div>
        </div>
        <button class="btn-primary mt-4 w-full bg-orange-600 hover:bg-orange-700">+ จ่ายสินค้าออก (GI)</button>
      </div>
    </div>

    <div class="flex gap-2">
      <button
        v-for="tab in [
          { key: 'all', label: 'ทั้งหมด' },
          { key: 'receive', label: 'รับเข้า (GR)' },
          { key: 'issue', label: 'จ่ายออก (GI)' },
        ]"
        :key="tab.key"
        :class="activeTab === tab.key ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-300'"
        class="px-4 py-2 rounded-lg text-sm font-medium"
        @click="activeTab = tab.key as typeof activeTab"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="card overflow-hidden">
      <table class="w-full">
        <thead class="bg-slate-50 border-b border-slate-200">
          <tr>
            <th class="table-header">ประเภท</th>
            <th class="table-header">เลขที่อ้างอิง</th>
            <th class="table-header">สินค้า</th>
            <th class="table-header">SKU</th>
            <th class="table-header">จำนวน</th>
            <th class="table-header">คลัง</th>
            <th class="table-header">ผู้ดำเนินการ</th>
            <th class="table-header">เวลา</th>
            <th class="table-header">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="tx in filtered()" :key="tx.id" class="hover:bg-slate-50">
            <td class="table-cell">
              <span
                :class="tx.type === 'receive' ? 'bg-warehouse-50 text-warehouse-700' : 'bg-orange-50 text-orange-700'"
                class="inline-flex px-2 py-0.5 rounded text-xs font-medium"
              >
                {{ tx.type === 'receive' ? 'GR' : 'GI' }}
              </span>
            </td>
            <td class="table-cell font-mono text-sm">{{ tx.reference }}</td>
            <td class="table-cell">{{ tx.productName }}</td>
            <td class="table-cell font-mono text-xs text-slate-500">{{ tx.sku }}</td>
            <td class="table-cell font-medium">{{ tx.quantity }}</td>
            <td class="table-cell">{{ tx.warehouse }}</td>
            <td class="table-cell text-slate-500">{{ tx.operator }}</td>
            <td class="table-cell text-slate-500 text-xs">{{ tx.timestamp }}</td>
            <td class="table-cell">
              <StatusBadge :status="tx.status" type="transaction" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
