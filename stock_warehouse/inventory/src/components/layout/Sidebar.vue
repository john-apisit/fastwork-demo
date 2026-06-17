<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { NavItem } from '@/types'

const route = useRoute()
const router = useRouter()

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Inventory', path: '/inventory', icon: '📦' },
  { name: 'Warehouse', path: '/warehouse', icon: '🏭' },
  { name: 'Purchase Orders', path: '/purchase-orders', icon: '📋' },
  { name: 'Goods R/I', path: '/goods', icon: '🔄' },
  { name: 'Scanner', path: '/scanner', icon: '📱' },
  { name: 'Movements', path: '/movements', icon: '🔀' },
  { name: 'Shipments', path: '/shipments', icon: '🚚' },
  { name: 'Reports', path: '/reports', icon: '📈' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const navigate = (path: string) => router.push(path)
</script>

<template>
  <aside class="w-64 bg-slate-900 text-white flex flex-col shrink-0">
    <div class="p-5 border-b border-slate-700">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-lg">
          SF
        </div>
        <div>
          <h2 class="font-bold text-lg leading-tight">StockFlow</h2>
          <p class="text-xs text-slate-400">WMS & Logistics</p>
        </div>
      </div>
    </div>

    <nav class="flex-1 p-3 space-y-1 overflow-y-auto">
      <button
        v-for="item in navItems"
        :key="item.path"
        :class="isActive(item.path)
          ? 'bg-brand-600 text-white'
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left"
        @click="navigate(item.path)"
      >
        <span class="text-base">{{ item.icon }}</span>
        {{ item.name }}
      </button>
    </nav>

    <div class="p-4 border-t border-slate-700">
      <div class="rounded-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=300&h=120&fit=crop"
          alt="Warehouse"
          class="w-full h-20 object-cover opacity-80"
        />
        <div class="bg-slate-800 p-3">
          <p class="text-xs text-slate-400">Warehouse Utilization</p>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full bg-warehouse-500 rounded-full" style="width: 78%" />
            </div>
            <span class="text-xs font-semibold text-warehouse-400">78%</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
