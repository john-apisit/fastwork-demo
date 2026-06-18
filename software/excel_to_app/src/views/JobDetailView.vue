<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import StatusBadge from '@/components/StatusBadge.vue'
import {
  formatDateTime,
  getDealerById,
  getJobById,
  getVehicleById,
  isStepCompleted,
  isStepCurrent,
  statusLabels,
  stepLabels,
  workflowSteps,
} from '@/data/mockData'

const route = useRoute()
const jobId = computed(() => route.params.id as string)
const job = computed(() => getJobById(jobId.value))
const dealer = computed(() => (job.value ? getDealerById(job.value.dealerId) : undefined))
const vehicle = computed(() =>
  job.value?.assignedVehicleId ? getVehicleById(job.value.assignedVehicleId) : undefined,
)

const nextAction = computed(() => {
  if (!job.value) return null
  switch (job.value.currentStep) {
    case 'create_job':
      return { label: 'มอบหมายรถ', path: '/assignment' }
    case 'assign_vehicle':
      return { label: 'มอบหมายรถ', path: '/assignment' }
    case 'pickup':
    case 'in_transit':
      return { label: 'ติดตามสถานะ', path: '/tracking' }
    case 'dealer_delivery':
      return { label: 'ดูข้อมูลดีลเลอร์', path: '/dealers' }
    case 'confirm':
      return { label: 'ไปรายงานปิดงาน', path: '/reports' }
    default:
      return null
  }
})
</script>

<template>
  <div v-if="job">
    <!-- Breadcrumb -->
    <nav class="mb-4 text-sm text-slate-500">
      <RouterLink to="/jobs" class="hover:text-brand-600">รายการงาน</RouterLink>
      <span class="mx-2">/</span>
      <span class="text-slate-900">{{ job.jobNumber }}</span>
    </nav>

    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-bold text-slate-900">{{ job.jobNumber }}</h2>
          <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
        </div>
        <p class="mt-1 text-sm text-slate-500">{{ job.carModel }} ({{ job.carColor }})</p>
      </div>
      <RouterLink v-if="nextAction" :to="nextAction.path" class="btn-primary">
        {{ nextAction.label }} →
      </RouterLink>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Main info -->
      <div class="space-y-6 lg:col-span-2">
        <div class="card overflow-hidden">
          <img :src="job.imageUrl" :alt="job.carModel" class="h-56 w-full object-cover" />
          <div class="grid gap-4 p-6 sm:grid-cols-2">
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">VIN</p>
              <p class="mt-1 font-mono text-sm text-slate-900">{{ job.vin }}</p>
            </div>
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">หมายเหตุ</p>
              <p class="mt-1 text-sm text-slate-700">{{ job.notes }}</p>
            </div>
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">ต้นทาง</p>
              <p class="mt-1 text-sm text-slate-900">{{ job.origin }}</p>
              <p class="text-xs text-slate-500">{{ job.originProvince }}</p>
            </div>
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">กำหนดรับรถ</p>
              <p class="mt-1 text-sm text-slate-900">{{ formatDateTime(job.scheduledPickup) }}</p>
            </div>
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">กำหนดส่ง</p>
              <p class="mt-1 text-sm text-slate-900">
                {{ formatDateTime(job.estimatedDelivery) }}
              </p>
            </div>
            <div>
              <p class="text-xs font-medium uppercase text-slate-400">วันที่สร้างงาน</p>
              <p class="mt-1 text-sm text-slate-900">{{ formatDateTime(job.createdAt) }}</p>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="card p-6">
          <h3 class="mb-4 font-semibold text-slate-900">ประวัติการดำเนินงาน</h3>
          <div class="space-y-4">
            <div
              v-for="event in [...job.trackingEvents].reverse()"
              :key="event.id"
              class="flex gap-4"
            >
              <div class="flex flex-col items-center">
                <div class="h-3 w-3 rounded-full bg-brand-500" />
                <div class="w-px flex-1 bg-slate-200" />
              </div>
              <div class="pb-4">
                <p class="text-sm font-medium text-slate-900">{{ event.description }}</p>
                <p class="text-xs text-slate-500">
                  {{ event.location }} · {{ formatDateTime(event.timestamp) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Workflow steps -->
        <div class="card p-6">
          <h3 class="mb-4 font-semibold text-slate-900">ขั้นตอนงาน</h3>
          <ul class="space-y-3">
            <li v-for="step in workflowSteps" :key="step" class="flex items-center gap-3">
              <span
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                :class="{
                  'bg-brand-600 text-white': isStepCurrent(job.currentStep, step),
                  'bg-emerald-100 text-emerald-700': isStepCompleted(job.currentStep, step),
                  'bg-slate-100 text-slate-400':
                    !isStepCurrent(job.currentStep, step) &&
                    !isStepCompleted(job.currentStep, step),
                }"
              >
                {{ isStepCompleted(job.currentStep, step) ? '✓' : workflowSteps.indexOf(step) + 1 }}
              </span>
              <span
                class="text-sm"
                :class="
                  isStepCurrent(job.currentStep, step)
                    ? 'font-medium text-brand-700'
                    : 'text-slate-600'
                "
              >
                {{ stepLabels[step] }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Dealer -->
        <div v-if="dealer" class="card overflow-hidden">
          <img :src="dealer.imageUrl" :alt="dealer.name" class="h-32 w-full object-cover" />
          <div class="p-4">
            <p class="text-xs font-medium uppercase text-slate-400">ดีลเลอร์ปลายทาง</p>
            <p class="mt-1 font-medium text-slate-900">{{ dealer.name }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ dealer.address }}</p>
            <p class="mt-2 text-sm text-slate-500">
              {{ dealer.contact }} · {{ dealer.phone }}
            </p>
            <RouterLink
              to="/dealers"
              class="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              ดูรายละเอียดดีลเลอร์ →
            </RouterLink>
          </div>
        </div>

        <!-- Vehicle -->
        <div v-if="vehicle" class="card p-4">
          <p class="text-xs font-medium uppercase text-slate-400">รถขนส่งที่มอบหมาย</p>
          <p class="mt-1 font-medium text-slate-900">{{ vehicle.plateNumber }}</p>
          <p class="text-sm text-slate-600">{{ vehicle.type }}</p>
          <p class="mt-2 text-sm text-slate-500">
            คนขับ: {{ vehicle.driverName }} · {{ vehicle.driverPhone }}
          </p>
          <RouterLink
            to="/assignment"
            class="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            จัดการมอบหมาย →
          </RouterLink>
        </div>
        <div v-else class="card border-dashed p-4 text-center">
          <p class="text-sm text-slate-500">ยังไม่ได้มอบหมายรถ</p>
          <RouterLink to="/assignment" class="btn-primary mt-3">มอบหมายรถ</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="card px-6 py-12 text-center">
    <p class="text-slate-500">ไม่พบงานที่ระบุ</p>
    <RouterLink to="/jobs" class="btn-primary mt-4">กลับรายการงาน</RouterLink>
  </div>
</template>
