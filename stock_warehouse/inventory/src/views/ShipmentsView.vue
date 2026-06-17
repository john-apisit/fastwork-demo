<script setup lang="ts">
import { ref, computed } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { shipments } from '@/data/mockData'

const statusFilter = ref('all')
const selected = ref(shipments[0])

const filtered = computed(() =>
  statusFilter.value === 'all'
    ? shipments
    : shipments.filter((s) => s.status === statusFilter.value),
)

const statusSteps = ['picked', 'packed', 'in_transit', 'delivered']

const stepIndex = (status: string) => {
  const idx = statusSteps.indexOf(status)
  return idx >= 0 ? idx : status === 'delayed' ? 2 : 0
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tab in [
          { key: 'all', label: 'ทั้งหมด' },
          { key: 'in_transit', label: 'กำลังจัดส่ง' },
          { key: 'packed', label: 'แพ็คแล้ว' },
          { key: 'delivered', label: 'สำเร็จ' },
          { key: 'delayed', label: 'ล่าช้า' },
        ]"
        :key="tab.key"
        :class="statusFilter === tab.key ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-300'"
        class="px-4 py-2 rounded-lg text-sm font-medium"
        @click="statusFilter = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1 space-y-3">
        <div
          v-for="s in filtered"
          :key="s.id"
          :class="selected?.id === s.id ? 'ring-2 ring-brand-500' : ''"
          class="card p-4 cursor-pointer hover:shadow-md transition-all"
          @click="selected = s"
        >
          <div class="flex items-center justify-between">
            <p class="font-mono text-sm font-medium text-brand-600">{{ s.trackingNumber }}</p>
            <StatusBadge :status="s.status" type="shipment" />
          </div>
          <p class="text-sm text-slate-800 mt-1">{{ s.customer }}</p>
          <p class="text-xs text-slate-500">→ {{ s.destination }} · {{ s.carrier }}</p>
          <div class="mt-2 flex items-center gap-2">
            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                :class="s.status === 'delayed' ? 'bg-red-500' : 'bg-brand-500'"
                :style="{ width: `${s.progress}%` }"
                class="h-full rounded-full"
              />
            </div>
            <span class="text-xs text-slate-500">{{ s.progress }}%</span>
          </div>
        </div>
      </div>

      <div v-if="selected" class="lg:col-span-2 card p-6">
        <div class="flex items-start justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-900">{{ selected.trackingNumber }}</h3>
            <p class="text-sm text-slate-500 mt-1">{{ selected.customer }}</p>
          </div>
          <StatusBadge :status="selected.status" type="shipment" />
        </div>

        <div class="mt-6 relative">
          <div class="flex justify-between">
            <div
              v-for="(step, i) in ['หยิบสินค้า', 'แพ็ค', 'ขนส่ง', 'ส่งถึง']"
              :key="step"
              class="flex flex-col items-center flex-1"
            >
              <div
                :class="i <= stepIndex(selected.status)
                  ? selected.status === 'delayed' && i === 2
                    ? 'bg-red-500 text-white'
                    : 'bg-brand-600 text-white'
                  : 'bg-slate-200 text-slate-400'"
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
              >
                {{ i + 1 }}
              </div>
              <p class="text-xs text-slate-600 mt-2 text-center">{{ step }}</p>
            </div>
          </div>
          <div class="absolute top-4 left-0 right-0 h-0.5 bg-slate-200 -z-0 mx-8" />
        </div>

        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="bg-slate-50 rounded-lg p-4">
            <p class="text-xs text-slate-500">ปลายทาง</p>
            <p class="font-medium text-slate-800">{{ selected.destination }}</p>
          </div>
          <div class="bg-slate-50 rounded-lg p-4">
            <p class="text-xs text-slate-500">ผู้ขนส่ง</p>
            <p class="font-medium text-slate-800">{{ selected.carrier }}</p>
          </div>
          <div class="bg-slate-50 rounded-lg p-4">
            <p class="text-xs text-slate-500">จำนวนรายการ</p>
            <p class="font-medium text-slate-800">{{ selected.items }} ชิ้น</p>
          </div>
          <div class="bg-slate-50 rounded-lg p-4">
            <p class="text-xs text-slate-500">กำหนดส่ง</p>
            <p class="font-medium text-slate-800">{{ selected.estimatedDelivery }}</p>
          </div>
        </div>

        <div class="mt-4 p-4 bg-brand-50 rounded-lg flex items-center gap-3">
          <span class="text-xl">📍</span>
          <div>
            <p class="text-xs text-brand-600 font-medium">ตำแหน่งปัจจุบัน (Real-time)</p>
            <p class="text-sm font-semibold text-slate-800">{{ selected.currentLocation }}</p>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=800&h=200&fit=crop"
          alt="Delivery"
          class="mt-4 w-full h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
