<script setup lang="ts">
import { ref, computed } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { products } from '@/data/mockData'

const search = ref('')
const categoryFilter = ref('all')
const statusFilter = ref('all')

const categories = ['all', ...new Set(products.map((p) => p.category))]

const filtered = computed(() =>
  products.filter((p) => {
    const matchSearch =
      !search.value ||
      p.name.toLowerCase().includes(search.value.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.value.toLowerCase()) ||
      p.barcode.includes(search.value)
    const matchCategory = categoryFilter.value === 'all' || p.category === categoryFilter.value
    const matchStatus = statusFilter.value === 'all' || p.status === statusFilter.value
    return matchSearch && matchCategory && matchStatus
  }),
)

const stockPercent = (p: (typeof products)[0]) =>
  Math.min(100, Math.round((p.quantity / p.maxStock) * 100))
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row gap-3 justify-between">
      <div class="flex flex-wrap gap-3">
        <input
          v-model="search"
          type="text"
          placeholder="ค้นหา SKU, ชื่อสินค้า, บาร์โค้ด..."
          class="input-field w-64"
        />
        <select v-model="categoryFilter" class="input-field w-40">
          <option value="all">ทุกหมวดหมู่</option>
          <option v-for="c in categories.filter((c) => c !== 'all')" :key="c" :value="c">
            {{ c }}
          </option>
        </select>
        <select v-model="statusFilter" class="input-field w-40">
          <option value="all">ทุกสถานะ</option>
          <option value="in_stock">มีสต๊อก</option>
          <option value="low_stock">สต๊อกต่ำ</option>
          <option value="out_of_stock">หมดสต๊อก</option>
          <option value="overstock">สต๊อกเกิน</option>
        </select>
      </div>
      <button class="btn-primary">+ เพิ่มสินค้า</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        v-for="product in filtered"
        :key="product.id"
        class="card overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="flex">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-24 h-24 object-cover shrink-0"
          />
          <div class="p-4 flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs text-slate-400 font-mono">{{ product.sku }}</p>
                <h3 class="font-semibold text-slate-900 text-sm truncate">{{ product.name }}</h3>
              </div>
              <StatusBadge :status="product.status" type="stock" />
            </div>
            <div class="mt-2 flex items-center gap-3 text-xs text-slate-500">
              <span>📍 {{ product.location }}</span>
              <span>Zone {{ product.zone }}</span>
            </div>
            <div class="mt-2">
              <div class="flex justify-between text-xs mb-1">
                <span class="font-medium text-slate-700">
                  {{ product.quantity.toLocaleString() }} {{ product.unit }}
                </span>
                <span class="text-slate-400">Min: {{ product.minStock }}</span>
              </div>
              <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  :class="{
                    'bg-red-500': product.status === 'out_of_stock',
                    'bg-amber-500': product.status === 'low_stock',
                    'bg-purple-500': product.status === 'overstock',
                    'bg-warehouse-500': product.status === 'in_stock',
                  }"
                  :style="{ width: `${stockPercent(product)}%` }"
                  class="h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-2 bg-slate-50 border-t border-slate-100 flex justify-between text-xs text-slate-500">
          <span class="font-mono">{{ product.barcode }}</span>
          <span>อัปเดต {{ product.lastUpdated }}</span>
        </div>
      </div>
    </div>

    <div v-if="filtered.length === 0" class="card p-12 text-center text-slate-500">
      ไม่พบสินค้าที่ตรงกับเงื่อนไข
    </div>
  </div>
</template>
