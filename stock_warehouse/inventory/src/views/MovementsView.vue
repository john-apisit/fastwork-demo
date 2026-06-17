<script setup lang="ts">
import { ref } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { productMovements } from '@/data/mockData'

const typeFilter = ref('all')

const filtered = () => {
  if (typeFilter.value === 'all') return productMovements
  return productMovements.filter((m) => m.type === typeFilter.value)
}

const typeIcons: Record<string, string> = {
  receive: '📥',
  issue: '📤',
  transfer: '🔀',
  adjustment: '⚙️',
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tab in [
          { key: 'all', label: 'ทั้งหมด' },
          { key: 'receive', label: 'รับเข้า' },
          { key: 'issue', label: 'จ่ายออก' },
          { key: 'transfer', label: 'โอนย้าย' },
          { key: 'adjustment', label: 'ปรับปรุง' },
        ]"
        :key="tab.key"
        :class="typeFilter === tab.key ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-300'"
        class="px-4 py-2 rounded-lg text-sm font-medium"
        @click="typeFilter = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="relative">
      <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

      <div class="space-y-4">
        <div
          v-for="m in filtered()"
          :key="m.id"
          class="relative pl-14"
        >
          <div
            class="absolute left-4 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center text-xs"
          >
            {{ typeIcons[m.type] }}
          </div>

          <div class="card p-4 hover:shadow-md transition-shadow">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold text-slate-900 text-sm">{{ m.productName }}</h3>
                  <StatusBadge :status="m.type" type="movement" />
                </div>
                <p class="text-xs font-mono text-slate-400 mt-0.5">{{ m.sku }}</p>
              </div>
              <span class="text-xs text-slate-400">{{ m.timestamp }}</span>
            </div>

            <div class="mt-3 flex items-center gap-2 text-sm">
              <span class="px-2 py-1 bg-slate-100 rounded text-slate-600">{{ m.fromLocation }}</span>
              <span class="text-slate-400">→</span>
              <span class="px-2 py-1 bg-brand-50 rounded text-brand-700">{{ m.toLocation }}</span>
              <span class="ml-auto font-bold text-slate-800">
                {{ m.quantity > 0 ? '+' : '' }}{{ m.quantity }}
              </span>
            </div>

            <p class="text-xs text-slate-500 mt-2">โดย {{ m.operator }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
