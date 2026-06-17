<script setup lang="ts">
import { ref } from 'vue'
import { scannedProducts } from '@/data/mockData'

const scanInput = ref('')
const scanning = ref(false)
const lastScanned = ref<(typeof scannedProducts)[0] | null>(null)
const scanHistory = ref<(typeof scannedProducts)[0][]>([])

const simulateScan = () => {
  if (!scanInput.value.trim()) return
  scanning.value = true

  setTimeout(() => {
    const found = scannedProducts.find(
      (p) => p.barcode === scanInput.value || p.sku === scanInput.value,
    )
    if (found) {
      lastScanned.value = found
      scanHistory.value.unshift(found)
    } else {
      lastScanned.value = null
    }
    scanning.value = false
    scanInput.value = ''
  }, 800)
}

const quickScan = (barcode: string) => {
  scanInput.value = barcode
  simulateScan()
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card p-6">
        <h3 class="font-semibold text-slate-900 mb-4">Barcode / QR Code Scanner</h3>

        <div class="relative bg-slate-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
            alt="Scanner"
            class="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div class="relative z-10 text-center">
            <div
              :class="scanning ? 'border-brand-400 animate-pulse' : 'border-white/50'"
              class="w-48 h-32 border-2 rounded-lg mx-auto flex items-center justify-center"
            >
              <span v-if="scanning" class="text-brand-400 text-sm font-medium">กำลังสแกน...</span>
              <span v-else class="text-white/70 text-sm">วางบาร์โค้ดในกรอบ</span>
            </div>
            <div class="mt-3 flex justify-center">
              <div class="w-40 h-0.5 bg-brand-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div class="mt-4 flex gap-2">
          <input
            v-model="scanInput"
            type="text"
            placeholder="ป้อนบาร์โค้ดหรือ SKU..."
            class="input-field flex-1 font-mono"
            @keyup.enter="simulateScan"
          />
          <button class="btn-primary" :disabled="scanning" @click="simulateScan">
            สแกน
          </button>
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          <span class="text-xs text-slate-500">ทดลองสแกน:</span>
          <button
            v-for="p in scannedProducts"
            :key="p.barcode"
            class="text-xs px-2 py-1 bg-slate-100 rounded font-mono hover:bg-slate-200"
            @click="quickScan(p.barcode)"
          >
            {{ p.barcode }}
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div v-if="lastScanned" class="card p-6 border-2 border-warehouse-500">
          <div class="flex items-center gap-2 text-warehouse-600 mb-3">
            <span class="text-xl">✓</span>
            <span class="font-semibold">สแกนสำเร็จ</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900">{{ lastScanned.name }}</h3>
          <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p class="text-slate-500">SKU</p>
              <p class="font-mono font-medium">{{ lastScanned.sku }}</p>
            </div>
            <div>
              <p class="text-slate-500">Barcode</p>
              <p class="font-mono font-medium">{{ lastScanned.barcode }}</p>
            </div>
            <div>
              <p class="text-slate-500">ตำแหน่ง</p>
              <p class="font-medium text-brand-600">{{ lastScanned.location }}</p>
            </div>
          </div>
        </div>

        <div v-else-if="scanHistory.length === 0" class="card p-6 text-center text-slate-500">
          <p class="text-4xl mb-2">📱</p>
          <p>สแกนบาร์โค้ดเพื่อค้นหาสินค้าในคลัง</p>
        </div>

        <div v-if="scanHistory.length > 0" class="card">
          <div class="p-4 border-b border-slate-100">
            <h3 class="font-semibold text-slate-900">ประวัติการสแกน</h3>
          </div>
          <div class="divide-y divide-slate-50 max-h-64 overflow-y-auto">
            <div
              v-for="(item, i) in scanHistory"
              :key="i"
              class="px-4 py-3 flex justify-between items-center hover:bg-slate-50"
            >
              <div>
                <p class="text-sm font-medium text-slate-800">{{ item.name }}</p>
                <p class="text-xs font-mono text-slate-500">{{ item.barcode }}</p>
              </div>
              <span class="text-xs text-brand-600 font-medium">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
