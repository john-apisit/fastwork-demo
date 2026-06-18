<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { useAppStore } from '@/stores/app'
import type { UserRole } from '@/types'

const router = useRouter()
const store = useAppStore()

const role = ref<UserRole>('golfer')
const name = ref('')
const email = ref('')

function submit() {
  if (!name.value.trim()) {
    alert('กรุณากรอกชื่อ')
    return
  }
  store.login(role.value, name.value)
  router.push('/')
}
</script>

<template>
  <div class="pb-6">
    <AppHeader title="สมัครสมาชิก" show-back :show-credits="false" />

    <div class="px-5">
      <p class="mb-6 text-sm text-stone-500">
        สมัครสมาชิกในฐานะนักกอล์ฟหรือแคดดี้เพื่อเริ่มใช้งาน CaddyLink
      </p>

      <div class="mb-5 grid grid-cols-2 gap-3">
        <button
          class="card p-4 text-center transition"
          :class="role === 'golfer' ? 'ring-2 ring-forest-600' : ''"
          @click="role = 'golfer'"
        >
          <span class="text-3xl">🏌️</span>
          <p class="mt-2 text-sm font-semibold text-forest-800">นักกอล์ฟ</p>
          <p class="text-xs text-stone-400">จองแคดดี้</p>
        </button>
        <button
          class="card p-4 text-center transition"
          :class="role === 'caddy' ? 'ring-2 ring-forest-600' : ''"
          @click="role = 'caddy'"
        >
          <span class="text-3xl">⛳</span>
          <p class="mt-2 text-sm font-semibold text-forest-800">แคดดี้</p>
          <p class="text-xs text-stone-400">รับงานจอง</p>
        </button>
      </div>

      <div class="space-y-4">
        <div>
          <label class="mb-1 block text-xs font-medium text-forest-700">ชื่อ-นามสกุล</label>
          <input
            v-model="name"
            type="text"
            placeholder="กรอกชื่อของคุณ"
            class="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-medium text-forest-700">อีเมล</label>
          <input
            v-model="email"
            type="email"
            placeholder="email@example.com"
            class="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
      </div>

      <button class="btn-primary mt-6 w-full" @click="submit">
        สมัครสมาชิก
      </button>

      <p class="mt-4 text-center text-xs text-stone-400">
        Demo: กรอกชื่อแล้วกดสมัครได้เลย ไม่ต้องยืนยันอีเมล
      </p>
    </div>
  </div>
</template>
