<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const store = useAppStore()

function switchRole() {
  store.userRole = store.userRole === 'golfer' ? 'caddy' : 'golfer'
}

function logout() {
  store.logout()
  router.push('/register')
}
</script>

<template>
  <div class="pb-4">
    <AppHeader title="โปรไฟล์" :show-back="false" />

    <div class="px-5">
      <div class="card mb-5 flex items-center gap-4 p-5">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-2xl">
          {{ store.userRole === 'golfer' ? '🏌️' : '⛳' }}
        </div>
        <div>
          <p class="font-display text-lg font-semibold text-forest-900">
            {{ store.isLoggedIn ? store.userName : 'ผู้เยี่ยมชม' }}
          </p>
          <p class="text-sm text-stone-500">
            {{ store.userRole === 'golfer' ? 'นักกอล์ฟ' : 'แคดดี้' }}
          </p>
        </div>
      </div>

      <div class="space-y-2">
        <router-link to="/credits" class="card flex items-center gap-3 p-4 transition hover:shadow-premium">
          <span class="text-xl">💳</span>
          <div class="flex-1">
            <p class="text-sm font-medium text-forest-800">เครดิต</p>
            <p class="text-xs text-stone-400">{{ store.credits }} บาท</p>
          </div>
          <svg class="h-4 w-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>

        <router-link to="/bookings" class="card flex items-center gap-3 p-4 transition hover:shadow-premium">
          <span class="text-xl">📅</span>
          <div class="flex-1">
            <p class="text-sm font-medium text-forest-800">การจองของฉัน</p>
            <p class="text-xs text-stone-400">{{ store.bookings.length }} รายการ</p>
          </div>
          <svg class="h-4 w-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>

        <router-link to="/knowledge" class="card flex items-center gap-3 p-4 transition hover:shadow-premium">
          <span class="text-xl">📚</span>
          <div class="flex-1">
            <p class="text-sm font-medium text-forest-800">Knowledge Center</p>
            <p class="text-xs text-stone-400">วิดีโอและเคล็ดลับ</p>
          </div>
          <svg class="h-4 w-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>

        <router-link to="/admin" class="card flex items-center gap-3 p-4 transition hover:shadow-premium">
          <span class="text-xl">🛟</span>
          <div class="flex-1">
            <p class="text-sm font-medium text-forest-800">ติดต่อแอดมิน</p>
            <p class="text-xs text-stone-400">แจ้งปัญหาการใช้งาน</p>
          </div>
          <svg class="h-4 w-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>

        <button class="card flex w-full items-center gap-3 p-4 text-left transition hover:shadow-premium" @click="switchRole">
          <span class="text-xl">🔄</span>
          <div class="flex-1">
            <p class="text-sm font-medium text-forest-800">สลับโหมด (Demo)</p>
            <p class="text-xs text-stone-400">
              เปลี่ยนเป็น {{ store.userRole === 'golfer' ? 'แคดดี้' : 'นักกอล์ฟ' }}
            </p>
          </div>
        </button>
      </div>

      <router-link
        v-if="!store.isLoggedIn"
        to="/register"
        class="btn-primary mt-6 block w-full text-center"
      >
        เข้าสู่ระบบ / สมัครสมาชิก
      </router-link>
      <button v-else class="btn-outline mt-6 w-full" @click="logout">
        ออกจากระบบ
      </button>
    </div>
  </div>
</template>
