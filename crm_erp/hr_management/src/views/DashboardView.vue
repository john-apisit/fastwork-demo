<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import {
  approvalItems,
  dashboardStats,
  departmentHeadcount,
  employees,
  heroImage,
  leaveRequests,
  monthlyAttendance,
} from '@/data/mockData'

const pendingApprovals = approvalItems.filter((a) => a.status === 'pending')
const recentLeaves = leaveRequests.slice(0, 3)
const maxHeadcount = Math.max(...departmentHeadcount.map((d) => d.count))
const maxRate = Math.max(...monthlyAttendance.map((m) => m.rate))
</script>

<template>
  <div class="space-y-6">
    <!-- Hero banner -->
    <div class="relative overflow-hidden rounded-2xl bg-slate-900">
      <img
        :src="heroImage"
        alt="ทีมงานในออฟฟิศ"
        class="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div class="relative px-6 py-10 sm:px-10 sm:py-14">
        <p class="text-sm font-medium text-brand-300">Executive Dashboard</p>
        <h2 class="mt-2 max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
          ภาพรวมการบริหารทรัพยากรบุคคล
        </h2>
        <p class="mt-3 max-w-lg text-sm text-slate-300">
          ติดตามข้อมูลพนักงาน การลา การเข้างาน และคำขออนุมัติแบบเรียลไทม์
          ลดงานเอกสารภายในองค์กรกว่า 90%
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink
            to="/approvals"
            class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            ดูคำขอรออนุมัติ ({{ pendingApprovals.length }})
          </RouterLink>
          <RouterLink
            to="/employees"
            class="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            จัดการพนักงาน
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        v-for="stat in dashboardStats"
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :change="stat.change"
        :trend="stat.trend"
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Attendance chart -->
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
        <h3 class="font-display font-bold text-slate-900">อัตราการเข้างานรายเดือน</h3>
        <p class="text-sm text-slate-500">เปอร์เซ็นต์พนักงานที่มาทำงานตรงเวลา</p>
        <div class="mt-6 flex items-end justify-between gap-2 sm:gap-4">
          <div
            v-for="item in monthlyAttendance"
            :key="item.month"
            class="flex flex-1 flex-col items-center gap-2"
          >
            <div class="flex h-32 w-full items-end justify-center">
              <div
                class="w-full max-w-10 rounded-t-md bg-brand-500 transition-all"
                :style="{ height: `${(item.rate / maxRate) * 100}%` }"
              />
            </div>
            <span class="text-xs font-medium text-slate-500">{{ item.month }}</span>
            <span class="text-xs font-bold text-slate-700">{{ item.rate }}%</span>
          </div>
        </div>
      </div>

      <!-- Department headcount -->
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="font-display font-bold text-slate-900">จำนวนพนักงานตามแผนก</h3>
        <p class="text-sm text-slate-500">ทั้งหมด {{ employees.length }} คน (ตัวอย่าง)</p>
        <ul class="mt-5 space-y-4">
          <li v-for="dept in departmentHeadcount" :key="dept.name">
            <div class="mb-1 flex justify-between text-sm">
              <span class="font-medium text-slate-700">{{ dept.name }}</span>
              <span class="text-slate-500">{{ dept.count }}</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                class="h-full rounded-full transition-all"
                :class="dept.color"
                :style="{ width: `${(dept.count / maxHeadcount) * 100}%` }"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <!-- Pending approvals -->
      <div class="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 class="font-display font-bold text-slate-900">คำขอรออนุมัติ</h3>
          <RouterLink to="/approvals" class="text-sm font-medium text-brand-600 hover:text-brand-700">
            ดูทั้งหมด
          </RouterLink>
        </div>
        <ul class="divide-y divide-slate-100">
          <li
            v-for="item in pendingApprovals"
            :key="item.id"
            class="flex items-center justify-between gap-3 px-5 py-3.5"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-slate-900">{{ item.title }}</p>
              <p class="text-xs text-slate-500">{{ item.requester }} · {{ item.department }}</p>
            </div>
            <StatusBadge :status="item.status" />
          </li>
        </ul>
      </div>

      <!-- Recent leave -->
      <div class="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 class="font-display font-bold text-slate-900">คำขอลาล่าสุด</h3>
          <RouterLink to="/leave" class="text-sm font-medium text-brand-600 hover:text-brand-700">
            ดูทั้งหมด
          </RouterLink>
        </div>
        <ul class="divide-y divide-slate-100">
          <li
            v-for="leave in recentLeaves"
            :key="leave.id"
            class="flex items-center justify-between gap-3 px-5 py-3.5"
          >
            <div class="min-w-0">
              <p class="text-sm font-medium text-slate-900">{{ leave.employeeName }}</p>
              <p class="text-xs text-slate-500">
                {{ leave.type }} · {{ leave.startDate }} ถึง {{ leave.endDate }} ({{ leave.days }} วัน)
              </p>
            </div>
            <StatusBadge :status="leave.status" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
