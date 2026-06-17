<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import { reportMetrics, stockByCategory, weeklyMovements, dashboardStats } from '@/data/mockData'

const formatValue = (m: (typeof reportMetrics)[0]) => {
  if (m.unit === '฿') {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(m.value)
  }
  if (m.unit === '%') return `${m.value}%`
  if (m.unit === 'นาที') return `${m.value} ${m.unit}`
  return m.value.toLocaleString()
}

const maxCat = Math.max(...stockByCategory.map((c) => c.quantity))
const totalIn = weeklyMovements.reduce((s, d) => s + d.in, 0)
const totalOut = weeklyMovements.reduce((s, d) => s + d.out, 0)
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="m in reportMetrics" :key="m.label" class="card p-5">
        <p class="text-sm text-slate-500">{{ m.label }}</p>
        <p class="text-2xl font-bold text-slate-900 mt-1">{{ formatValue(m) }}</p>
        <p
          :class="m.change >= 0 ? 'text-warehouse-600' : 'text-brand-600'"
          class="text-xs font-semibold mt-2"
        >
          {{ m.change >= 0 ? '↑' : '↓' }} {{ Math.abs(m.change) }}% จากเดือนที่แล้ว
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card p-6">
        <h3 class="font-semibold text-slate-900 mb-4">ยอดคงคลังตามหมวดหมู่</h3>
        <div class="space-y-3">
          <div v-for="cat in stockByCategory" :key="cat.category">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-700">{{ cat.category }}</span>
              <span class="font-medium">{{ cat.quantity.toLocaleString() }} ({{ cat.percentage }}%)</span>
            </div>
            <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                :style="{ width: `${(cat.quantity / maxCat) * 100}%` }"
                class="h-full bg-brand-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="card p-6">
        <h3 class="font-semibold text-slate-900 mb-4">สรุปการเคลื่อนไหวสัปดาห์นี้</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-warehouse-50 rounded-xl p-4 text-center">
            <p class="text-3xl font-bold text-warehouse-600">{{ totalIn }}</p>
            <p class="text-sm text-warehouse-700 mt-1">รับเข้าทั้งหมด</p>
          </div>
          <div class="bg-orange-50 rounded-xl p-4 text-center">
            <p class="text-3xl font-bold text-orange-600">{{ totalOut }}</p>
            <p class="text-sm text-orange-700 mt-1">จ่ายออกทั้งหมด</p>
          </div>
        </div>
        <table class="w-full text-sm">
          <thead>
            <tr class="text-slate-500">
              <th class="text-left py-2">วัน</th>
              <th class="text-right py-2">รับเข้า</th>
              <th class="text-right py-2">จ่ายออก</th>
              <th class="text-right py-2">สุทธิ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="d in weeklyMovements" :key="d.day">
              <td class="py-2 text-slate-700">{{ d.day }}</td>
              <td class="py-2 text-right text-warehouse-600 font-medium">{{ d.in }}</td>
              <td class="py-2 text-right text-orange-600 font-medium">{{ d.out }}</td>
              <td class="py-2 text-right font-medium" :class="d.in - d.out >= 0 ? 'text-brand-600' : 'text-red-500'">
                {{ d.in - d.out >= 0 ? '+' : '' }}{{ d.in - d.out }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        title="SKU ทั้งหมด"
        :value="dashboardStats.totalProducts.toLocaleString()"
        icon="📦"
        color="blue"
      />
      <StatCard
        title="อัตราความแม่นยำ"
        :value="`${dashboardStats.accuracyRate}%`"
        subtitle="ลดข้อผิดพลาด 85%+"
        icon="🎯"
        color="green"
      />
      <StatCard
        title="Utilization คลัง"
        :value="`${dashboardStats.warehouseUtilization}%`"
        icon="🏭"
        color="purple"
      />
    </div>

    <div class="card p-6">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
          alt="Analytics"
          class="w-full md:w-48 h-32 object-cover rounded-lg"
        />
        <div class="flex-1">
          <h3 class="font-semibold text-slate-900">Export รายงาน</h3>
          <p class="text-sm text-slate-500 mt-1">
            ดาวน์โหลดรายงานยอดคงคลัง การเคลื่อนไหวสินค้า และประสิทธิภาพคลังในรูปแบบ PDF / Excel
          </p>
          <div class="flex gap-2 mt-3">
            <button class="btn-primary">📄 Export PDF</button>
            <button class="btn-secondary">📊 Export Excel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
