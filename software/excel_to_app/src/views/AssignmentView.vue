<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import StatusBadge from '@/components/StatusBadge.vue'
import {
  formatDate,
  getDealerById,
  getJobById,
  getVehicleById,
  jobs,
  statusLabels,
  vehicles,
} from '@/data/mockData'

const pendingJobs = jobs.filter(
  (j) => j.status === 'pending_assignment' || j.status === 'assigned',
)

const selectedJobId = ref(pendingJobs[0]?.id ?? '')
const selectedVehicleId = ref('')

const selectedJob = () => getJobById(selectedJobId.value)
const selectedVehicle = () => (selectedVehicleId.value ? getVehicleById(selectedVehicleId.value) : undefined)

const availableVehicles = vehicles.filter((v) => v.status === 'available')

const vehicleStatusLabels: Record<string, string> = {
  available: 'ว่าง',
  on_route: 'อยู่ระหว่างเส้นทาง',
  maintenance: 'ซ่อมบำรุง',
}

const heroImage =
  'https://images.pexels.com/photos/448361/pexels-photo-448361.jpeg?auto=compress&cs=tinysrgb&w=800'
</script>

<template>
  <div>
    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 class="text-xl font-bold text-slate-900">มอบหมายรถขนส่ง</h2>
        <p class="mt-1 text-sm text-slate-500">
          Sheet จัดสรรรถ — เลือกงานและจับคู่กับรถขนส่งที่ว่าง
        </p>
      </div>
      <RouterLink to="/jobs" class="btn-secondary">← กลับรายการงาน</RouterLink>
    </div>

    <div class="mb-6 overflow-hidden rounded-xl">
      <img :src="heroImage" alt="Car carrier" class="h-40 w-full object-cover" />
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <!-- Select job -->
      <div class="card p-6">
        <h3 class="mb-4 font-semibold text-slate-900">1. เลือกงานที่รอมอบหมาย</h3>
        <div class="space-y-3">
          <label
            v-for="job in pendingJobs"
            :key="job.id"
            class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition"
            :class="
              selectedJobId === job.id
                ? 'border-brand-500 bg-brand-50'
                : 'border-slate-200 hover:border-slate-300'
            "
          >
            <input v-model="selectedJobId" type="radio" :value="job.id" class="mt-1" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="font-medium text-slate-900">{{ job.jobNumber }}</span>
                <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
              </div>
              <p class="mt-1 text-sm text-slate-600">
                {{ job.carModel }} → {{ getDealerById(job.dealerId)?.province }}
              </p>
              <p class="mt-1 text-xs text-slate-400">รับ: {{ formatDate(job.scheduledPickup) }}</p>
            </div>
          </label>
        </div>
        <p v-if="pendingJobs.length === 0" class="text-sm text-slate-400">
          ไม่มีงานที่รอมอบหมาย
        </p>
      </div>

      <!-- Select vehicle -->
      <div class="card p-6">
        <h3 class="mb-4 font-semibold text-slate-900">2. เลือกรถขนส่ง</h3>
        <div class="space-y-3">
          <label
            v-for="vehicle in availableVehicles"
            :key="vehicle.id"
            class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition"
            :class="
              selectedVehicleId === vehicle.id
                ? 'border-brand-500 bg-brand-50'
                : 'border-slate-200 hover:border-slate-300'
            "
          >
            <input v-model="selectedVehicleId" type="radio" :value="vehicle.id" class="mt-1" />
            <div>
              <div class="flex items-center gap-2">
                <span class="font-medium text-slate-900">{{ vehicle.plateNumber }}</span>
                <StatusBadge :status="vehicle.status">{{
                  vehicleStatusLabels[vehicle.status]
                }}</StatusBadge>
              </div>
              <p class="mt-1 text-sm text-slate-600">{{ vehicle.type }}</p>
              <p class="text-xs text-slate-400">
                {{ vehicle.driverName }} · {{ vehicle.driverPhone }}
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- All vehicles overview -->
    <div class="card mt-6">
      <div class="border-b border-slate-100 px-6 py-4">
        <h3 class="font-semibold text-slate-900">สถานะรถขนส่งทั้งหมด</h3>
      </div>
      <div class="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          class="rounded-lg border border-slate-200 p-4"
        >
          <div class="flex items-center justify-between">
            <span class="font-medium text-slate-900">{{ vehicle.plateNumber }}</span>
            <StatusBadge :status="vehicle.status">{{
              vehicleStatusLabels[vehicle.status]
            }}</StatusBadge>
          </div>
          <p class="mt-1 text-sm text-slate-600">{{ vehicle.driverName }}</p>
          <p class="text-xs text-slate-400">{{ vehicle.type }}</p>
        </div>
      </div>
    </div>

    <!-- Demo action -->
    <div class="mt-6 flex flex-col items-start gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="font-medium text-emerald-900">ยืนยันมอบหมาย (Demo)</p>
        <p v-if="selectedJobId && selectedVehicleId" class="mt-1 text-sm text-emerald-700">
          มอบหมาย {{ selectedVehicle()?.plateNumber }} ให้งาน
          {{ selectedJob()?.jobNumber }}
        </p>
        <p v-else class="mt-1 text-sm text-emerald-700">เลือกงานและรถขนส่งก่อนยืนยัน</p>
      </div>
      <RouterLink
        :to="selectedJobId ? `/jobs/${selectedJobId}` : '/tracking'"
        class="btn-primary bg-emerald-600 hover:bg-emerald-700"
      >
        ยืนยันและดูงาน →
      </RouterLink>
    </div>

    <div class="mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p class="text-sm text-brand-800">
        <strong>ขั้นตอนถัดไป:</strong>
        <RouterLink to="/tracking" class="font-medium underline">ติดตามสถานะ</RouterLink>
        เมื่อรถออกเดินทาง
      </p>
    </div>
  </div>
</template>
