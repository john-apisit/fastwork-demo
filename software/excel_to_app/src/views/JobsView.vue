<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import StatusBadge from '@/components/StatusBadge.vue'
import {
  formatDate,
  getDealerById,
  jobs,
  statusLabels,
} from '@/data/mockData'
import type { JobStatus } from '@/types'

const search = ref('')
const statusFilter = ref<JobStatus | 'all'>('all')

const statusOptions: { value: JobStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'pending_assignment', label: 'รอมอบหมาย' },
  { value: 'assigned', label: 'มอบหมายแล้ว' },
  { value: 'in_transit', label: 'กำลังขนส่ง' },
  { value: 'delivered', label: 'ส่งถึงแล้ว' },
  { value: 'completed', label: 'ปิดงานแล้ว' },
]

const filteredJobs = computed(() => {
  return jobs.filter((job) => {
    const matchSearch =
      !search.value ||
      job.jobNumber.toLowerCase().includes(search.value.toLowerCase()) ||
      job.carModel.toLowerCase().includes(search.value.toLowerCase()) ||
      job.vin.toLowerCase().includes(search.value.toLowerCase())
    const matchStatus = statusFilter.value === 'all' || job.status === statusFilter.value
    return matchSearch && matchStatus
  })
})
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-bold text-slate-900">รายการงานขนส่ง</h2>
      <p class="mt-1 text-sm text-slate-500">
        Sheet งานหลัก — สร้างและจัดการงานขนส่งรถยนต์ไปดีลเลอร์
      </p>
    </div>

    <!-- Filters -->
    <div class="card mb-6 flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
      <input
        v-model="search"
        type="search"
        placeholder="ค้นหา เลขงาน, รุ่นรถ, VIN..."
        class="input-field sm:max-w-xs"
      />
      <div class="flex flex-wrap gap-2">
        <button
          v-for="opt in statusOptions"
          :key="opt.value"
          class="rounded-full px-3 py-1 text-xs font-medium transition"
          :class="
            statusFilter === opt.value
              ? 'bg-brand-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          "
          @click="statusFilter = opt.value"
        >
          {{ opt.label }}
        </button>
      </div>
      <RouterLink to="/assignment" class="btn-primary sm:ml-auto">
        + สร้างงานใหม่ (Demo)
      </RouterLink>
    </div>

    <!-- Table -->
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="border-b border-slate-100 bg-slate-50">
            <tr>
              <th class="px-6 py-3 font-medium text-slate-600">เลขงาน</th>
              <th class="px-6 py-3 font-medium text-slate-600">รถ</th>
              <th class="px-6 py-3 font-medium text-slate-600">ต้นทาง</th>
              <th class="px-6 py-3 font-medium text-slate-600">ดีลเลอร์ปลายทาง</th>
              <th class="px-6 py-3 font-medium text-slate-600">สถานะ</th>
              <th class="px-6 py-3 font-medium text-slate-600">วันที่สร้าง</th>
              <th class="px-6 py-3 font-medium text-slate-600"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="job in filteredJobs"
              :key="job.id"
              class="transition hover:bg-slate-50"
            >
              <td class="px-6 py-4 font-medium text-brand-700">{{ job.jobNumber }}</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <img
                    :src="job.imageUrl"
                    :alt="job.carModel"
                    class="h-10 w-14 rounded object-cover"
                  />
                  <div>
                    <p class="font-medium text-slate-900">{{ job.carModel }}</p>
                    <p class="text-xs text-slate-400">{{ job.carColor }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-slate-600">
                {{ job.originProvince }}
              </td>
              <td class="px-6 py-4 text-slate-600">
                {{ getDealerById(job.dealerId)?.province }}
              </td>
              <td class="px-6 py-4">
                <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
              </td>
              <td class="px-6 py-4 text-slate-500">{{ formatDate(job.createdAt) }}</td>
              <td class="px-6 py-4">
                <RouterLink
                  :to="`/jobs/${job.id}`"
                  class="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  ดูรายละเอียด →
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="filteredJobs.length === 0" class="px-6 py-12 text-center text-slate-400">
        ไม่พบงานที่ตรงกับเงื่อนไข
      </div>
    </div>

    <!-- Next step hint -->
    <div class="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p class="text-sm text-brand-800">
        <strong>ขั้นตอนถัดไป:</strong> เลือกงานแล้วไป
        <RouterLink to="/assignment" class="font-medium underline">มอบหมายรถ</RouterLink>
        หรือ
        <RouterLink to="/tracking" class="font-medium underline">ติดตามสถานะ</RouterLink>
      </p>
    </div>
  </div>
</template>
