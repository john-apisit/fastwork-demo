<script setup lang="ts">
import { computed, ref } from 'vue'
import { documents } from '@/data/mockData'

const search = ref('')
const categoryFilter = ref('all')
const docList = ref([...documents])

const categories = [...new Set(documents.map((d) => d.category))]

const filtered = computed(() => {
  return docList.value.filter((d) => {
    const matchSearch = !search.value || d.name.includes(search.value)
    const matchCat = categoryFilter.value === 'all' || d.category === categoryFilter.value
    return matchSearch && matchCat
  })
})

const categoryColors: Record<string, string> = {
  'สัญญาจ้าง': 'bg-violet-100 text-violet-600',
  'นโยบาย': 'bg-blue-100 text-blue-600',
  'ใบรับรอง': 'bg-emerald-100 text-emerald-600',
  'อื่นๆ': 'bg-slate-100 text-slate-600',
}
</script>

<template>
  <div class="space-y-6">
    <div class="relative overflow-hidden rounded-2xl bg-slate-800">
      <img
        src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop"
        alt="เอกสาร"
        class="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div class="relative px-6 py-8">
        <h2 class="font-display text-xl font-bold text-white">จัดการเอกสารองค์กร</h2>
        <p class="mt-1 text-sm text-slate-300">ลดงานเอกสารภายในองค์กรกว่า 90% ด้วยระบบดิจิทัล</p>
      </div>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex flex-1 flex-col gap-3 sm:flex-row">
        <input
          v-model="search"
          type="search"
          placeholder="ค้นหาเอกสาร..."
          class="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
        />
        <select
          v-model="categoryFilter"
          class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
        >
          <option value="all">ทุกหมวดหมู่</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <button class="shrink-0 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
        + อัปโหลดเอกสาร
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="doc in filtered"
        :key="doc.id"
        class="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
      >
        <div class="flex items-start gap-3">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="truncate font-semibold text-slate-900 group-hover:text-brand-700">{{ doc.name }}</h3>
            <span
              class="mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold"
              :class="categoryColors[doc.category]"
            >
              {{ doc.category }}
            </span>
          </div>
        </div>
        <dl class="mt-4 space-y-1.5 text-xs text-slate-500">
          <div class="flex justify-between">
            <dt>อัปโหลดโดย</dt>
            <dd class="font-medium text-slate-700">{{ doc.uploadedBy }}</dd>
          </div>
          <div class="flex justify-between">
            <dt>วันที่</dt>
            <dd class="font-medium text-slate-700">{{ doc.uploadedAt }}</dd>
          </div>
          <div class="flex justify-between">
            <dt>ขนาด / เวอร์ชัน</dt>
            <dd class="font-medium text-slate-700">{{ doc.size }} · {{ doc.version }}</dd>
          </div>
        </dl>
        <div class="mt-4 flex gap-2">
          <button class="flex-1 rounded-lg bg-slate-100 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200">
            ดาวน์โหลด
          </button>
          <button class="flex-1 rounded-lg bg-brand-50 py-2 text-xs font-semibold text-brand-700 hover:bg-brand-100">
            ดูตัวอย่าง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
