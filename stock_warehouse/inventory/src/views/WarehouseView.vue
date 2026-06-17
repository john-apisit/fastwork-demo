<script setup lang="ts">
import { warehouses, zoneUtilization } from '@/data/mockData'
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        v-for="wh in warehouses"
        :key="wh.id"
        class="card overflow-hidden hover:shadow-md transition-shadow"
      >
        <img :src="wh.image" :alt="wh.name" class="w-full h-40 object-cover" />
        <div class="p-5">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-mono text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                {{ wh.code }}
              </span>
              <h3 class="font-semibold text-slate-900 mt-2">{{ wh.name }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ wh.address }}</p>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <div class="bg-slate-50 rounded-lg p-3">
              <p class="text-xs text-slate-500">ความจุ</p>
              <p class="text-lg font-bold text-slate-800">{{ wh.capacity.toLocaleString() }}</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-3">
              <p class="text-xs text-slate-500">ใช้งาน</p>
              <p class="text-lg font-bold text-brand-600">{{ wh.used.toLocaleString() }}</p>
            </div>
          </div>

          <div class="mt-3">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-slate-600">Utilization</span>
              <span class="font-semibold">{{ Math.round((wh.used / wh.capacity) * 100) }}%</span>
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                :style="{ width: `${(wh.used / wh.capacity) * 100}%` }"
                class="h-full bg-brand-500 rounded-full"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between text-sm">
            <span class="text-slate-500">{{ wh.zones }} Zones</span>
            <span class="text-slate-600">👤 {{ wh.manager }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card p-6">
      <h3 class="font-semibold text-slate-900 mb-4">แผนผัง Zone — คลังหลัก บางนา</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="zone in zoneUtilization"
          :key="zone.zone"
          class="border-2 border-dashed rounded-xl p-4 text-center transition-colors"
          :class="zone.used > 85
            ? 'border-red-300 bg-red-50'
            : zone.used > 70
              ? 'border-amber-300 bg-amber-50'
              : 'border-brand-200 bg-brand-50'"
        >
          <p class="font-bold text-slate-800">{{ zone.zone }}</p>
          <p class="text-3xl font-bold mt-2" :class="zone.used > 85 ? 'text-red-600' : 'text-brand-600'">
            {{ zone.used }}%
          </p>
          <p class="text-xs text-slate-500 mt-1">พื้นที่ใช้งาน</p>
          <div class="mt-3 grid grid-cols-4 gap-1">
            <div
              v-for="i in 8"
              :key="i"
              :class="i <= Math.ceil(zone.used / 12.5) ? 'bg-brand-500' : 'bg-slate-200'"
              class="h-3 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="card p-6">
      <div class="flex items-center gap-4">
        <img
          src="https://images.pexels.com/photos/4489742/pexels-photo-4489742.jpeg?w=600&h=200&fit=crop"
          alt="Warehouse operations"
          class="w-full md:w-64 h-32 object-cover rounded-lg"
        />
        <div>
          <h3 class="font-semibold text-slate-900">Warehouse Management System (WMS)</h3>
          <p class="text-sm text-slate-500 mt-2">
            จัดการคลังสินค้าแบบครบวงจร ตั้งแต่การจัดเก็บ จัดเรียง Zone ไปจนถึงการติดตามตำแหน่งสินค้าแบบ Real-time
            ช่วยเพิ่มประสิทธิภาพการใช้พื้นที่และลดเวลาในการค้นหาสินค้า
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
