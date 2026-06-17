<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('overview')

const tabs = [
  { id: 'overview', label: 'ภาพรวม' },
  { id: 'leave', label: 'คำขอลา' },
  { id: 'expense', label: 'เบิกค่าใช้จ่าย' },
]

interface StatCard {
  label: string
  value: string
  change: string
  positive: boolean
}

const stats: StatCard[] = [
  { label: 'พนักงานทั้งหมด', value: '248', change: '+12 คน', positive: true },
  { label: 'คำขอรออนุมัติ', value: '17', change: '-5 จากเมื่อวาน', positive: true },
  { label: 'อัตราการมาสาย', value: '2.3%', change: '-0.8%', positive: true },
  { label: 'เบิกค่าใช้จ่ายเดือนนี้', value: '฿142K', change: '+18%', positive: false },
]

interface LeaveRequest {
  name: string
  type: string
  dates: string
  status: 'pending' | 'approved' | 'rejected'
}

const leaveRequests: LeaveRequest[] = [
  { name: 'สมชาย วงศ์สุข', type: 'ลาพักร้อน', dates: '20-22 มิ.ย.', status: 'pending' },
  { name: 'พิมพ์ใจ รักดี', type: 'ลาป่วย', dates: '18 มิ.ย.', status: 'approved' },
  { name: 'อนุชา มีสุข', type: 'ลากิจ', dates: '25 มิ.ย.', status: 'pending' },
]

interface ExpenseItem {
  name: string
  category: string
  amount: string
  status: 'pending' | 'approved'
}

const expenses: ExpenseItem[] = [
  { name: 'ค่าเดินทางลูกค้า', category: 'Travel', amount: '฿3,200', status: 'pending' },
  { name: 'อุปกรณ์สำนักงาน', category: 'Supplies', amount: '฿1,850', status: 'approved' },
  { name: 'ค่าอาหารประชุม', category: 'Meals', amount: '฿4,500', status: 'pending' },
]

const statusLabel: Record<string, string> = {
  pending: 'รออนุมัติ',
  approved: 'อนุมัติแล้ว',
  rejected: 'ไม่อนุมัติ',
}

const statusClass: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-red-100 text-red-700',
}

const barHeights = [65, 45, 80, 55, 90, 70, 85]
const barLabels = ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.']
</script>

<template>
  <section id="dashboard" class="bg-brand-950 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-300">Executive Dashboard</p>
        <h2 class="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          แดชบอร์ดสำหรับผู้บริหาร
        </h2>
        <p class="mt-4 text-lg text-brand-200">
          สรุปข้อมูล HR แบบเรียลไทม์ ตัดสินใจได้ทันทีด้วยข้อมูลที่แม่นยำ
        </p>
      </div>

      <div class="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
        <!-- Dashboard header -->
        <div class="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div class="flex items-center gap-3">
            <div class="flex gap-1.5">
              <span class="h-3 w-3 rounded-full bg-red-400" />
              <span class="h-3 w-3 rounded-full bg-amber-400" />
              <span class="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span class="text-sm font-medium text-brand-200">HR Management — Dashboard</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span class="text-xs text-brand-300">Live</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-1 border-b border-white/10 px-6">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'px-4 py-3 text-sm font-medium transition',
              activeTab === tab.id
                ? 'border-b-2 border-brand-400 text-white'
                : 'text-brand-300 hover:text-white',
            ]"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="p-6">
          <!-- Overview tab -->
          <div v-if="activeTab === 'overview'">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p class="text-xs text-brand-300">{{ stat.label }}</p>
                <p class="mt-1 font-display text-2xl font-bold text-white">{{ stat.value }}</p>
                <p
                  :class="[
                    'mt-1 text-xs',
                    stat.positive ? 'text-accent-400' : 'text-amber-400',
                  ]"
                >
                  {{ stat.change }}
                </p>
              </div>
            </div>

            <div class="mt-6 grid gap-6 lg:grid-cols-2">
              <div class="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 class="text-sm font-semibold text-white">การลงเวลาเข้างาน (สัปดาห์นี้)</h4>
                <div class="mt-6 flex items-end justify-between gap-2" style="height: 120px">
                  <div
                    v-for="(height, i) in barHeights"
                    :key="i"
                    class="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      class="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                      :style="{ height: `${height}%` }"
                    />
                    <span class="text-xs text-brand-400">{{ barLabels[i] }}</span>
                  </div>
                </div>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 class="text-sm font-semibold text-white">การแจ้งเตือนล่าสุด</h4>
                <ul class="mt-4 space-y-3">
                  <li class="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p class="text-sm text-white">คำขอลาใหม่จาก สมชาย วงศ์สุข</p>
                      <p class="text-xs text-brand-400">5 นาทีที่แล้ว</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p class="text-sm text-white">อนุมัติเบิกค่าใช้จ่าย ฿1,850</p>
                      <p class="text-xs text-brand-400">32 นาทีที่แล้ว</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p class="text-sm text-white">สัญญาจ้าง 3 ฉบับใกล้หมดอายุ</p>
                      <p class="text-xs text-brand-400">1 ชั่วโมงที่แล้ว</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Leave tab -->
          <div v-else-if="activeTab === 'leave'">
            <div class="overflow-x-auto rounded-xl border border-white/10">
              <table class="w-full text-left text-sm">
                <thead class="border-b border-white/10 bg-white/5">
                  <tr>
                    <th class="px-4 py-3 font-medium text-brand-300">พนักงาน</th>
                    <th class="px-4 py-3 font-medium text-brand-300">ประเภท</th>
                    <th class="px-4 py-3 font-medium text-brand-300">วันที่</th>
                    <th class="px-4 py-3 font-medium text-brand-300">สถานะ</th>
                    <th class="px-4 py-3 font-medium text-brand-300" />
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="req in leaveRequests"
                    :key="req.name"
                    class="border-b border-white/5 hover:bg-white/5"
                  >
                    <td class="px-4 py-3 text-white">{{ req.name }}</td>
                    <td class="px-4 py-3 text-brand-200">{{ req.type }}</td>
                    <td class="px-4 py-3 text-brand-200">{{ req.dates }}</td>
                    <td class="px-4 py-3">
                      <span
                        :class="['rounded-full px-2.5 py-0.5 text-xs font-medium', statusClass[req.status]]"
                      >
                        {{ statusLabel[req.status] }}
                      </span>
                    </td>
                    <td class="px-4 py-3">
                      <button
                        v-if="req.status === 'pending'"
                        class="rounded-lg bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-400"
                      >
                        อนุมัติ
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Expense tab -->
          <div v-else>
            <div class="overflow-x-auto rounded-xl border border-white/10">
              <table class="w-full text-left text-sm">
                <thead class="border-b border-white/10 bg-white/5">
                  <tr>
                    <th class="px-4 py-3 font-medium text-brand-300">รายการ</th>
                    <th class="px-4 py-3 font-medium text-brand-300">หมวด</th>
                    <th class="px-4 py-3 font-medium text-brand-300">จำนวนเงิน</th>
                    <th class="px-4 py-3 font-medium text-brand-300">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in expenses"
                    :key="item.name"
                    class="border-b border-white/5 hover:bg-white/5"
                  >
                    <td class="px-4 py-3 text-white">{{ item.name }}</td>
                    <td class="px-4 py-3 text-brand-200">{{ item.category }}</td>
                    <td class="px-4 py-3 font-medium text-white">{{ item.amount }}</td>
                    <td class="px-4 py-3">
                      <span
                        :class="['rounded-full px-2.5 py-0.5 text-xs font-medium', statusClass[item.status]]"
                      >
                        {{ statusLabel[item.status] }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
