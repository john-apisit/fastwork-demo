<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { notifications, currentUser } from '@/data/mockData'

const route = useRoute()
const showNotifications = ref(false)

const pageTitles: Record<string, string> = {
  dashboard: 'Logistic Dashboard',
  inventory: 'Inventory Management',
  warehouse: 'Warehouse Management',
  'purchase-orders': 'Purchase Orders',
  goods: 'Goods Receive / Issue',
  scanner: 'Barcode Scanner',
  movements: 'Product Movement Tracking',
  shipments: 'Delivery & Shipment',
  reports: 'Reports & Analytics',
}

const unreadCount = notifications.filter((n) => !n.read).length
</script>

<template>
  <header class="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-20">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold text-slate-900">
          {{ pageTitles[route.name as string] || 'StockFlow' }}
        </h1>
        <p class="text-sm text-slate-500 mt-0.5">
          ระบบบริหารจัดการสต๊อก คลังสินค้า และโลจิสติกส์
        </p>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden md:flex items-center gap-2 px-3 py-1.5 bg-warehouse-50 rounded-lg">
          <span class="w-2 h-2 bg-warehouse-500 rounded-full animate-pulse" />
          <span class="text-xs font-medium text-warehouse-700">Real-time Tracking Active</span>
        </div>

        <div class="relative">
          <button
            class="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            @click="showNotifications = !showNotifications"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span
              v-if="unreadCount > 0"
              class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
            >
              {{ unreadCount }}
            </span>
          </button>

          <div
            v-if="showNotifications"
            class="absolute right-0 mt-2 w-80 card shadow-lg z-30"
          >
            <div class="p-4 border-b border-slate-100">
              <h3 class="font-semibold text-slate-900">การแจ้งเตือน</h3>
            </div>
            <div class="max-h-72 overflow-y-auto">
              <div
                v-for="n in notifications"
                :key="n.id"
                :class="!n.read ? 'bg-brand-50/50' : ''"
                class="p-4 border-b border-slate-50 hover:bg-slate-50"
              >
                <div class="flex items-start gap-2">
                  <span
                    :class="{
                      'text-amber-500': n.type === 'warning',
                      'text-warehouse-500': n.type === 'success',
                      'text-red-500': n.type === 'error',
                      'text-brand-500': n.type === 'info',
                    }"
                    class="text-sm mt-0.5"
                  >
                    {{ n.type === 'warning' ? '⚠' : n.type === 'success' ? '✓' : n.type === 'error' ? '✕' : 'ℹ' }}
                  </span>
                  <div>
                    <p class="text-sm font-medium text-slate-800">{{ n.title }}</p>
                    <p class="text-xs text-slate-500 mt-0.5">{{ n.message }}</p>
                    <p class="text-xs text-slate-400 mt-1">{{ n.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3 pl-4 border-l border-slate-200">
          <img
            :src="currentUser.avatar"
            :alt="currentUser.name"
            class="w-9 h-9 rounded-full object-cover ring-2 ring-brand-100"
          />
          <div class="hidden sm:block">
            <p class="text-sm font-medium text-slate-800">{{ currentUser.name }}</p>
            <p class="text-xs text-slate-500">{{ currentUser.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
