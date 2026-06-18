<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { useAppStore } from '@/stores/app'
import type { PaymentMethod } from '@/types'

const store = useAppStore()

const selectedAmount = ref(500)
const selectedMethod = ref<PaymentMethod>('qr')
const amounts = [150, 300, 500, 1000, 2000]

const methods: { id: PaymentMethod; label: string; icon: string }[] = [
  { id: 'qr', label: 'QR Payment', icon: '📱' },
  { id: 'credit_card', label: 'บัตรเครดิต', icon: '💳' },
  { id: 'ewallet', label: 'E-Wallet', icon: '👛' },
]

function topUp() {
  store.topUpCredits(selectedAmount.value, selectedMethod.value)
  alert(`เติมเครดิต ${selectedAmount.value} บาท สำเร็จ!`)
}
</script>

<template>
  <div class="pb-4">
    <AppHeader title="เครดิต" show-back />

    <div class="px-5">
      <div class="card mb-5 bg-gradient-to-br from-forest-700 to-forest-900 p-6 text-white">
        <p class="text-xs text-forest-200">ยอดเครดิตคงเหลือ</p>
        <p class="font-display text-4xl font-semibold">{{ store.credits }}</p>
        <p class="text-sm text-forest-200">บาท</p>
      </div>

      <div class="mb-5">
        <h3 class="mb-3 text-sm font-semibold text-forest-800">เลือกจำนวนเติม</h3>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="amt in amounts"
            :key="amt"
            class="rounded-xl border py-3 text-sm font-semibold transition"
            :class="selectedAmount === amt
              ? 'border-forest-600 bg-forest-50 text-forest-700'
              : 'border-stone-200 text-stone-600 hover:bg-stone-50'"
            @click="selectedAmount = amt"
          >
            {{ amt }}
          </button>
        </div>
      </div>

      <div class="mb-5">
        <h3 class="mb-3 text-sm font-semibold text-forest-800">ช่องทางชำระเงิน</h3>
        <div class="space-y-2">
          <button
            v-for="method in methods"
            :key="method.id"
            class="card flex w-full items-center gap-3 p-4 transition"
            :class="selectedMethod === method.id ? 'ring-2 ring-forest-600' : ''"
            @click="selectedMethod = method.id"
          >
            <span class="text-2xl">{{ method.icon }}</span>
            <span class="text-sm font-medium text-forest-800">{{ method.label }}</span>
          </button>
        </div>
      </div>

      <button class="btn-gold mb-6 w-full" @click="topUp">
        เติมเครดิต {{ selectedAmount }} บาท
      </button>

      <div class="card p-3">
        <p class="mb-2 text-xs font-semibold text-forest-800">อัตราค่าใช้จ่าย</p>
        <div class="space-y-1 text-xs text-stone-500">
          <p>ปลดล็อกโปรไฟล์แคดดี้: 150 บาท/ครั้ง</p>
          <p>ส่งคำขอจองแคดดี้: 150 บาท/ครั้ง</p>
        </div>
      </div>

      <h3 class="mb-3 mt-6 text-sm font-semibold text-forest-800">ประวัติธุรกรรม</h3>
      <div v-for="tx in store.transactions" :key="tx.id" class="card mb-2 flex items-center justify-between p-3">
        <div>
          <p class="text-sm text-forest-800">{{ tx.description }}</p>
          <p class="text-xs text-stone-400">{{ tx.date }}</p>
        </div>
        <span
          class="text-sm font-semibold"
          :class="tx.amount > 0 ? 'text-green-600' : 'text-red-500'"
        >
          {{ tx.amount > 0 ? '+' : '' }}{{ tx.amount }}
        </span>
      </div>
    </div>
  </div>
</template>
