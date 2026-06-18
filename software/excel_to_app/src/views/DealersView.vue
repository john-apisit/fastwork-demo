<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { dealers, jobs } from '@/data/mockData'

const regionFilter = ref('all')
const search = ref('')

const regions = ['all', ...new Set(dealers.map((d) => d.region))]

const regionLabels: Record<string, string> = {
  all: 'ทุกภูมิภาค',
}

const filteredDealers = computed(() => {
  return dealers.filter((d) => {
    const matchRegion = regionFilter.value === 'all' || d.region === regionFilter.value
    const matchSearch =
      !search.value ||
      d.name.toLowerCase().includes(search.value.toLowerCase()) ||
      d.province.toLowerCase().includes(search.value.toLowerCase())
    return matchRegion && matchSearch
  })
})

function jobCountForDealer(dealerId: string) {
  return jobs.filter((j) => j.dealerId === dealerId).length
}
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-bold text-slate-900">ดีลเลอร์ปลายทาง</h2>
      <p class="mt-1 text-sm text-slate-500">
        Sheet ดีลเลอร์ — ข้อมูลจุดส่งมอบรถยนต์ทั่วประเทศไทย
      </p>
    </div>

    <!-- Filters -->
    <div class="card mb-6 flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
      <input
        v-model="search"
        type="search"
        placeholder="ค้นหาชื่อดีลเลอร์, จังหวัด..."
        class="input-field sm:max-w-xs"
      />
      <div class="flex flex-wrap gap-2">
        <button
          v-for="region in regions"
          :key="region"
          class="rounded-full px-3 py-1 text-xs font-medium transition"
          :class="
            regionFilter === region
              ? 'bg-brand-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          "
          @click="regionFilter = region"
        >
          {{ regionLabels[region] ?? region }}
        </button>
      </div>
    </div>

    <!-- Dealer cards -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="dealer in filteredDealers"
        :key="dealer.id"
        class="card overflow-hidden transition hover:shadow-md"
      >
        <img :src="dealer.imageUrl" :alt="dealer.name" class="h-40 w-full object-cover" />
        <div class="p-5">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold text-slate-900">{{ dealer.name }}</h3>
            <span class="shrink-0 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
              {{ jobCountForDealer(dealer.id) }} งาน
            </span>
          </div>
          <p class="mt-1 text-sm text-slate-500">{{ dealer.region }} · {{ dealer.province }}</p>
          <p class="mt-3 text-sm text-slate-600">{{ dealer.address }}</p>
          <div class="mt-4 border-t border-slate-100 pt-4">
            <p class="text-sm text-slate-700">{{ dealer.contact }}</p>
            <p class="text-sm text-slate-500">{{ dealer.phone }}</p>
          </div>
          <RouterLink
            to="/jobs"
            class="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            ดูงานที่ส่งมาที่นี่ →
          </RouterLink>
        </div>
      </div>
    </div>

    <div v-if="filteredDealers.length === 0" class="card px-6 py-12 text-center text-slate-400">
      ไม่พบดีลเลอร์ที่ตรงกับเงื่อนไข
    </div>

    <div class="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p class="text-sm text-brand-800">
        <strong>ขั้นตอนถัดไป:</strong>
        <RouterLink to="/reports" class="font-medium underline">รายงานและปิดงาน</RouterLink>
        เมื่อส่งมอบรถเรียบร้อย
      </p>
    </div>
  </div>
</template>
