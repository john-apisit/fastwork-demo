<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import {
  dashboardStats,
  productMovements,
  shipments,
  weeklyMovements,
  zoneUtilization,
} from '@/data/mockData'

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(n)

const maxMovement = Math.max(...weeklyMovements.flatMap((d) => [d.in, d.out]))
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="สินค้าทั้งหมด"
        :value="dashboardStats.totalProducts.toLocaleString()"
        subtitle="SKU ในระบบ"
        icon="📦"
        :trend="5.2"
        color="blue"
      />
      <StatCard
        title="มูลค่าสต๊อก"
        :value="formatCurrency(dashboardStats.totalStockValue)"
        subtitle="รวมทุกคลัง"
        icon="💰"
        :trend="3.2"
        color="green"
      />
      <StatCard
        title="สต๊อกต่ำกว่าเกณฑ์"
        :value="dashboardStats.lowStockItems"
        subtitle="ต้องสั่งซื้อเพิ่ม"
        icon="⚠️"
        color="amber"
      />
      <StatCard
        title="อัตราความแม่นยำ"
        :value="`${dashboardStats.accuracyRate}%`"
        subtitle="ลดข้อผิดพลาด 85%+"
        icon="🎯"
        :trend="1.2"
        color="purple"
      />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 card p-5">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-slate-900">การเคลื่อนไหวสินค้ารายสัปดาห์</h3>
          <div class="flex items-center gap-4 text-xs">
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 bg-warehouse-500 rounded-sm" /> รับเข้า
            </span>
            <span class="flex items-center gap-1.5">
              <span class="w-3 h-3 bg-orange-400 rounded-sm" /> จ่ายออก
            </span>
          </div>
        </div>
        <div class="flex items-end gap-3 h-48">
          <div
            v-for="day in weeklyMovements"
            :key="day.day"
            class="flex-1 flex flex-col items-center gap-1"
          >
            <div class="flex items-end gap-1 w-full h-40">
              <div
                :style="{ height: `${(day.in / maxMovement) * 100}%` }"
                class="flex-1 bg-warehouse-500 rounded-t-sm min-h-[4px] transition-all"
              />
              <div
                :style="{ height: `${(day.out / maxMovement) * 100}%` }"
                class="flex-1 bg-orange-400 rounded-t-sm min-h-[4px] transition-all"
              />
            </div>
            <span class="text-xs text-slate-500">{{ day.day }}</span>
          </div>
        </div>
      </div>

      <div class="card p-5">
        <h3 class="font-semibold text-slate-900 mb-4">การใช้พื้นที่ Zone</h3>
        <div class="space-y-4">
          <div v-for="zone in zoneUtilization" :key="zone.zone">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-600">{{ zone.zone }}</span>
              <span class="font-medium text-slate-800">{{ zone.used }}%</span>
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                :class="zone.used > 85 ? 'bg-red-500' : zone.used > 70 ? 'bg-amber-500' : 'bg-brand-500'"
                :style="{ width: `${zone.used}%` }"
                class="h-full rounded-full transition-all"
              />
            </div>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-100">
          <p class="text-xs text-slate-500">Utilization รวม</p>
          <p class="text-2xl font-bold text-brand-600">{{ dashboardStats.warehouseUtilization }}%</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <div class="p-5 border-b border-slate-100">
          <h3 class="font-semibold text-slate-900">การเคลื่อนไหวล่าสุด</h3>
        </div>
        <div class="divide-y divide-slate-50">
          <div
            v-for="m in productMovements.slice(0, 4)"
            :key="m.id"
            class="px-5 py-3 flex items-center justify-between hover:bg-slate-50"
          >
            <div>
              <p class="text-sm font-medium text-slate-800">{{ m.productName }}</p>
              <p class="text-xs text-slate-500">{{ m.fromLocation }} → {{ m.toLocation }}</p>
            </div>
            <div class="text-right">
              <StatusBadge :status="m.type" type="movement" />
              <p class="text-xs text-slate-400 mt-1">{{ m.timestamp }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-900">สถานะการจัดส่ง Real-time</h3>
          <span class="text-xs text-brand-600 font-medium">{{ dashboardStats.activeShipments }} รายการ</span>
        </div>
        <div class="divide-y divide-slate-50">
          <div
            v-for="s in shipments.slice(0, 4)"
            :key="s.id"
            class="px-5 py-3 hover:bg-slate-50"
          >
            <div class="flex items-center justify-between mb-2">
              <div>
                <p class="text-sm font-medium text-slate-800">{{ s.trackingNumber }}</p>
                <p class="text-xs text-slate-500">{{ s.customer }} → {{ s.destination }}</p>
              </div>
              <StatusBadge :status="s.status" type="shipment" />
            </div>
            <div class="flex items-center gap-2">
              <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  :class="s.status === 'delayed' ? 'bg-red-500' : 'bg-brand-500'"
                  :style="{ width: `${s.progress}%` }"
                  class="h-full rounded-full"
                />
              </div>
              <span class="text-xs text-slate-500">{{ s.progress }}%</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">📍 {{ s.currentLocation }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card p-5 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-bold">ผลลัพธ์จากระบบ StockFlow</h3>
          <p class="text-brand-100 text-sm mt-1">
            ลดความผิดพลาดในการจัดการสต๊อกกว่า 85% · ติดตามการจัดส่งแบบ Real-time · ค้นหาสินค้าเร็วขึ้น
          </p>
        </div>
        <div class="flex gap-6 text-center">
          <div>
            <p class="text-3xl font-bold">{{ dashboardStats.todayMovements }}</p>
            <p class="text-xs text-brand-200">เคลื่อนไหววันนี้</p>
          </div>
          <div>
            <p class="text-3xl font-bold">{{ dashboardStats.pendingPOs }}</p>
            <p class="text-xs text-brand-200">PO รอดำเนินการ</p>
          </div>
          <div>
            <p class="text-3xl font-bold">{{ dashboardStats.accuracyRate }}%</p>
            <p class="text-xs text-brand-200">ความแม่นยำ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
