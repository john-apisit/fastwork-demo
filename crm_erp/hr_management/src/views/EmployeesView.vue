<script setup lang="ts">
import { computed, ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { employees } from '@/data/mockData'
import type { Employee } from '@/types'

const search = ref('')
const departmentFilter = ref('all')
const selectedEmployee = ref<Employee | null>(null)

const departments = [...new Set(employees.map((e) => e.department))]

const filtered = computed(() => {
  return employees.filter((e) => {
    const matchSearch =
      !search.value ||
      e.name.includes(search.value) ||
      e.email.includes(search.value) ||
      e.employeeCode.toLowerCase().includes(search.value.toLowerCase())
    const matchDept = departmentFilter.value === 'all' || e.department === departmentFilter.value
    return matchSearch && matchDept
  })
})

function openDetail(emp: Employee) {
  selectedEmployee.value = emp
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-slate-500">จัดการข้อมูลพนักงานทั้งหมดในองค์กร</p>
      </div>
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        เพิ่มพนักงาน
      </button>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row">
      <input
        v-model="search"
        type="search"
        placeholder="ค้นหาชื่อ, รหัส, อีเมล..."
        class="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
      <select
        v-model="departmentFilter"
        class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      >
        <option value="all">ทุกแผนก</option>
        <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
      </select>
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[720px] text-left text-sm">
          <thead class="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th class="px-5 py-3">พนักงาน</th>
              <th class="px-5 py-3">รหัส</th>
              <th class="px-5 py-3">แผนก</th>
              <th class="px-5 py-3">ตำแหน่ง</th>
              <th class="px-5 py-3">สถานะ</th>
              <th class="px-5 py-3">วันที่เริ่มงาน</th>
              <th class="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="emp in filtered"
              :key="emp.id"
              class="transition hover:bg-slate-50"
            >
              <td class="px-5 py-3.5">
                <div class="flex items-center gap-3">
                  <img :src="emp.avatar" :alt="emp.name" class="h-9 w-9 rounded-full object-cover" />
                  <div>
                    <p class="font-medium text-slate-900">{{ emp.name }}</p>
                    <p class="text-xs text-slate-500">{{ emp.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-3.5 font-mono text-xs text-slate-600">{{ emp.employeeCode }}</td>
              <td class="px-5 py-3.5 text-slate-600">{{ emp.department }}</td>
              <td class="px-5 py-3.5 text-slate-600">{{ emp.position }}</td>
              <td class="px-5 py-3.5"><StatusBadge :status="emp.status" /></td>
              <td class="px-5 py-3.5 text-slate-600">{{ emp.joinDate }}</td>
              <td class="px-5 py-3.5">
                <button
                  class="text-sm font-medium text-brand-600 hover:text-brand-700"
                  @click="openDetail(emp)"
                >
                  ดูรายละเอียด
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-t border-slate-100 px-5 py-3 text-sm text-slate-500">
        แสดง {{ filtered.length }} จาก {{ employees.length }} รายการ
      </div>
    </div>

    <!-- Detail modal -->
    <Teleport to="body">
      <div
        v-if="selectedEmployee"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
        @click.self="selectedEmployee = null"
      >
        <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <div class="flex items-start gap-4">
            <img
              :src="selectedEmployee.avatar"
              :alt="selectedEmployee.name"
              class="h-16 w-16 rounded-xl object-cover"
            />
            <div class="flex-1">
              <h3 class="font-display text-lg font-bold text-slate-900">{{ selectedEmployee.name }}</h3>
              <p class="text-sm text-slate-500">{{ selectedEmployee.position }}</p>
              <StatusBadge :status="selectedEmployee.status" class="mt-2" />
            </div>
            <button class="text-slate-400 hover:text-slate-600" @click="selectedEmployee = null">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <dl class="mt-6 space-y-3 text-sm">
            <div class="flex justify-between">
              <dt class="text-slate-500">รหัสพนักงาน</dt>
              <dd class="font-medium text-slate-900">{{ selectedEmployee.employeeCode }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">แผนก</dt>
              <dd class="font-medium text-slate-900">{{ selectedEmployee.department }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">อีเมล</dt>
              <dd class="font-medium text-slate-900">{{ selectedEmployee.email }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">โทรศัพท์</dt>
              <dd class="font-medium text-slate-900">{{ selectedEmployee.phone }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-slate-500">วันที่เริ่มงาน</dt>
              <dd class="font-medium text-slate-900">{{ selectedEmployee.joinDate }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Teleport>
  </div>
</template>
