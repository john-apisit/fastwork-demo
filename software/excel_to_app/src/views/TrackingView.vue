<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import StatusBadge from '@/components/StatusBadge.vue'
import {
  formatDateTime,
  getDealerById,
  getVehicleById,
  jobs,
  statusLabels,
  stepLabels,
} from '@/data/mockData'

const activeJobs = jobs.filter(
  (j) => j.status === 'in_transit' || j.status === 'assigned' || j.status === 'delivered',
)

const selectedJobId = ref(activeJobs[0]?.id ?? '')

const selectedJob = computed(() => activeJobs.find((j) => j.id === selectedJobId.value))

const mapImage =
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop'
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-bold text-slate-900">ติดตามสถานะการขนส่ง</h2>
      <p class="mt-1 text-sm text-slate-500">
        Sheet ติดตาม — ดูตำแหน่งและความคืบหน้าแบบ Real-time (Demo)
      </p>
    </div>

    <!-- Map placeholder -->
    <div class="card mb-6 overflow-hidden">
      <div class="relative">
        <img :src="mapImage" alt="Map tracking" class="h-64 w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          <span
            v-for="job in activeJobs.filter((j) => j.status === 'in_transit')"
            :key="job.id"
            class="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur"
          >
            🚛 {{ job.jobNumber }} — กำลังขนส่ง
          </span>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Job selector -->
      <div class="card p-4 lg:col-span-1">
        <h3 class="mb-3 font-semibold text-slate-900">งานที่กำลังดำเนินการ</h3>
        <div class="space-y-2">
          <button
            v-for="job in activeJobs"
            :key="job.id"
            class="w-full rounded-lg border p-3 text-left transition"
            :class="
              selectedJobId === job.id
                ? 'border-brand-500 bg-brand-50'
                : 'border-slate-200 hover:border-slate-300'
            "
            @click="selectedJobId = job.id"
          >
            <div class="flex items-center justify-between">
              <span class="font-medium text-slate-900">{{ job.jobNumber }}</span>
              <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
            </div>
            <p class="mt-1 text-xs text-slate-500">{{ job.carModel }}</p>
          </button>
        </div>
      </div>

      <!-- Tracking detail -->
      <div v-if="selectedJob" class="card p-6 lg:col-span-2">
        <div class="mb-6 flex items-start justify-between">
          <div>
            <h3 class="font-semibold text-slate-900">{{ selectedJob.jobNumber }}</h3>
            <p class="text-sm text-slate-500">
              {{ selectedJob.originProvince }} →
              {{ getDealerById(selectedJob.dealerId)?.province }}
            </p>
          </div>
          <RouterLink
            :to="`/jobs/${selectedJob.id}`"
            class="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            ดูรายละเอียด →
          </RouterLink>
        </div>

        <div class="relative">
          <div class="absolute left-4 top-0 h-full w-0.5 bg-slate-200" />
          <div class="space-y-6">
            <div
              v-for="(event, idx) in selectedJob.trackingEvents"
              :key="event.id"
              class="relative flex gap-4 pl-10"
            >
              <div
                class="absolute left-2.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white"
                :class="idx === selectedJob.trackingEvents.length - 1 ? 'bg-brand-500' : 'bg-emerald-500'"
              />
              <div class="flex-1 rounded-lg border border-slate-100 bg-slate-50 p-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-medium text-brand-600">{{
                    stepLabels[event.step]
                  }}</span>
                  <span class="text-xs text-slate-400">{{
                    formatDateTime(event.timestamp)
                  }}</span>
                </div>
                <p class="mt-1 font-medium text-slate-900">{{ event.description }}</p>
                <p class="mt-0.5 text-sm text-slate-500">📍 {{ event.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="selectedJob.assignedVehicleId"
          class="mt-6 rounded-lg bg-slate-50 p-4"
        >
          <p class="text-xs font-medium uppercase text-slate-400">รถขนส่ง</p>
          <p class="mt-1 text-sm text-slate-900">
            {{ getVehicleById(selectedJob.assignedVehicleId)?.plateNumber }} —
            {{ getVehicleById(selectedJob.assignedVehicleId)?.driverName }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p class="text-sm text-brand-800">
        <strong>ขั้นตอนถัดไป:</strong> เมื่อส่งถึงดีลเลอร์ ไปที่
        <RouterLink to="/dealers" class="font-medium underline">ข้อมูลดีลเลอร์</RouterLink>
        และ
        <RouterLink to="/reports" class="font-medium underline">รายงานปิดงาน</RouterLink>
      </p>
    </div>
  </div>
</template>
