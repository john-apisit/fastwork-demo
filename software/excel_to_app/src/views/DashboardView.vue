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
  stepLabels,
  workflowSteps,
} from '@/data/mockData'

const recentJobs = computed(() =>
  [...jobs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5),
)

const heroImage =
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=400&fit=crop'
</script>

<template>
  <div>
    <!-- Hero banner -->
    <div class="relative mb-8 overflow-hidden rounded-2xl">
      <img :src="heroImage" alt="Car carrier truck" class="h-48 w-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/70 to-transparent"
      />
      <div class="absolute inset-0 flex flex-col justify-center px-8">
        <h2 class="text-2xl font-bold text-white">ระบบขนส่งรถยนต์ไปดีลเลอร์ทั่วประเทศ</h2>
        <p class="mt-2 max-w-xl text-sm text-brand-100">
          แทนที่ Excel หลังบ้านด้วยระบบที่เชื่อมโยงทุกขั้นตอน — สร้างงาน → มอบหมายรถ → ติดตาม →
          ส่งดีลเลอร์ → ปิดงาน
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="งานทั้งหมด"
        :value="dashboardStats.totalJobs"
        icon="📦"
        color="blue"
      />
      <StatCard
        label="กำลังขนส่ง"
        :value="dashboardStats.inTransit"
        icon="🚛"
        trend="2 คันอยู่บนทางหลวง"
        color="violet"
      />
      <StatCard
        label="รอมอบหมายรถ"
        :value="dashboardStats.pendingAssignment"
        icon="⏳"
        color="amber"
      />
      <StatCard
        label="อัตราส่งตรงเวลา"
        :value="`${dashboardStats.onTimeRate}%`"
        icon="✅"
        trend="เดือนนี้"
        color="emerald"
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Recent jobs -->
      <div class="card lg:col-span-2">
        <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h3 class="font-semibold text-slate-900">งานล่าสุด</h3>
          <RouterLink to="/jobs" class="text-sm font-medium text-brand-600 hover:text-brand-700">
            ดูทั้งหมด →
          </RouterLink>
        </div>
        <div class="divide-y divide-slate-100">
          <RouterLink
            v-for="job in recentJobs"
            :key="job.id"
            :to="`/jobs/${job.id}`"
            class="flex items-center gap-4 px-6 py-4 transition hover:bg-slate-50"
          >
            <img
              :src="job.imageUrl"
              :alt="job.carModel"
              class="h-14 w-20 rounded-lg object-cover"
            />
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="font-medium text-slate-900">{{ job.jobNumber }}</span>
                <StatusBadge :status="job.status">{{ statusLabels[job.status] }}</StatusBadge>
              </div>
              <p class="mt-0.5 truncate text-sm text-slate-600">
                {{ job.carModel }} → {{ getDealerById(job.dealerId)?.name }}
              </p>
            </div>
            <span class="hidden text-xs text-slate-400 sm:inline">{{
              formatDate(job.createdAt)
            }}</span>
          </RouterLink>
        </div>
      </div>

      <!-- Workflow overview -->
      <div class="card p-6">
        <h3 class="mb-4 font-semibold text-slate-900">ขั้นตอนการทำงาน</h3>
        <p class="mb-4 text-sm text-slate-500">
          แต่ละหน้าเชื่อมโยงกันเหมือน Sheet ใน Excel เดิม
        </p>
        <ol class="space-y-3">
          <li v-for="(step, idx) in workflowSteps" :key="step">
            <RouterLink
              :to="
                step === 'create_job'
                  ? '/jobs'
                  : step === 'assign_vehicle'
                    ? '/assignment'
                    : step === 'in_transit'
                      ? '/tracking'
                      : step === 'dealer_delivery'
                        ? '/dealers'
                        : step === 'confirm'
                          ? '/reports'
                          : '/tracking'
              "
              class="flex items-center gap-3 rounded-lg p-2 transition hover:bg-brand-50"
            >
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
              >
                {{ idx + 1 }}
              </span>
              <span class="text-sm text-slate-700">{{ stepLabels[step] }}</span>
            </RouterLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
