<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StatCard from '@/components/StatCard.vue'
import StatusBadge from '@/components/StatusBadge.vue'
import {
  dashboardStats,
  formatDate,
  getDealerById,
  jobs,
  statusLabels,
} from '@/data/mockData'

const completedJobs = computed(() => jobs.filter((j) => j.status === 'completed'))
const deliveredJobs = computed(() => jobs.filter((j) => j.status === 'delivered'))
const inTransitJobs = computed(() => jobs.filter((j) => j.status === 'in_transit'))

const jobsByRegion = computed(() => {
  const map = new Map<string, number>()
  for (const job of jobs) {
    const dealer = getDealerById(job.dealerId)
    const region = dealer?.region ?? 'อื่นๆ'
    map.set(region, (map.get(region) ?? 0) + 1)
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1])
})

const reportImage =
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-bold text-slate-900">รายงานและปิดงาน</h2>
      <p class="mt-1 text-sm text-slate-500">
        Sheet สรุป — รายงานผลการขนส่งและยืนยันปิดงาน
      </p>
    </div>

    <div class="mb-6 overflow-hidden rounded-xl">
      <img :src="reportImage" alt="Analytics" class="h-36 w-full object-cover" />
    </div>

    <div class="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="ปิดงานแล้ว" :value="completedJobs.length" icon="✅" color="emerald" />
      <StatCard label="รอปิดงาน" :value="deliveredJobs.length" icon="📋" color="amber" />
      <StatCard label="กำลังขนส่ง" :value="inTransitJobs.length" icon="🚛" color="blue" />
      <StatCard
        label="อัตราส่งตรงเวลา"
        :value="`${dashboardStats.onTimeRate}%`"
        icon="📈"
        color="violet"
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <!-- Jobs by region -->
      <div class="card p-6">
        <h3 class="mb-4 font-semibold text-slate-900">งานแยกตามภูมิภาค</h3>
        <div class="space-y-3">
          <div v-for="[region, count] in jobsByRegion" :key="region">
            <div class="mb-1 flex justify-between text-sm">
              <span class="text-slate-700">{{ region }}</span>
              <span class="font-medium text-slate-900">{{ count }} งาน</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                class="h-full rounded-full bg-brand-500"
                :style="{ width: `${(count / jobs.length) * 100}%` }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pending close -->
      <div class="card">
        <div class="border-b border-slate-100 px-6 py-4">
          <h3 class="font-semibold text-slate-900">งานรอยืนยันปิดงาน</h3>
        </div>
        <div class="divide-y divide-slate-100">
          <div
            v-for="job in deliveredJobs"
            :key="job.id"
            class="flex items-center justify-between px-6 py-4"
          >
            <div>
              <p class="font-medium text-slate-900">{{ job.jobNumber }}</p>
              <p class="text-sm text-slate-500">
                {{ job.carModel }} → {{ getDealerById(job.dealerId)?.name }}
              </p>
            </div>
            <div class="flex items-center gap-3">
              <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
              <button class="btn-primary text-xs">ปิดงาน</button>
            </div>
          </div>
          <div v-if="deliveredJobs.length === 0" class="px-6 py-8 text-center text-sm text-slate-400">
            ไม่มีงานรอปิดงาน
          </div>
        </div>
      </div>
    </div>

    <!-- Completed jobs table -->
    <div class="card mt-6 overflow-hidden">
      <div class="border-b border-slate-100 px-6 py-4">
        <h3 class="font-semibold text-slate-900">งานที่ปิดแล้ว</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="border-b border-slate-100 bg-slate-50">
            <tr>
              <th class="px-6 py-3 font-medium text-slate-600">เลขงาน</th>
              <th class="px-6 py-3 font-medium text-slate-600">รถ</th>
              <th class="px-6 py-3 font-medium text-slate-600">ดีลเลอร์</th>
              <th class="px-6 py-3 font-medium text-slate-600">วันที่สร้าง</th>
              <th class="px-6 py-3 font-medium text-slate-600">สถานะ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="job in completedJobs" :key="job.id">
              <td class="px-6 py-4">
                <RouterLink
                  :to="`/jobs/${job.id}`"
                  class="font-medium text-brand-600 hover:text-brand-700"
                >
                  {{ job.jobNumber }}
                </RouterLink>
              </td>
              <td class="px-6 py-4 text-slate-600">{{ job.carModel }}</td>
              <td class="px-6 py-4 text-slate-600">
                {{ getDealerById(job.dealerId)?.province }}
              </td>
              <td class="px-6 py-4 text-slate-500">{{ formatDate(job.createdAt) }}</td>
              <td class="px-6 py-4">
                <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p class="text-sm text-emerald-800">
        ✅ ครบ workflow แล้ว — กลับไป
        <RouterLink to="/" class="font-medium underline">ภาพรวม</RouterLink>
        หรือ
        <RouterLink to="/jobs" class="font-medium underline">สร้างงานใหม่</RouterLink>
      </p>
    </div>
  </div>
</template>
