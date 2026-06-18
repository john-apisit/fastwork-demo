<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { getCaddyById, getCourseById } from '@/data/mockData'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const store = useAppStore()

const statusLabels: Record<string, { text: string; class: string }> = {
  pending: { text: 'รอตอบรับ', class: 'bg-amber-100 text-amber-700' },
  accepted: { text: 'ยืนยันแล้ว', class: 'bg-green-100 text-green-700' },
  rejected: { text: 'ปฏิเสธ', class: 'bg-red-100 text-red-600' },
  completed: { text: 'เสร็จสิ้น', class: 'bg-stone-100 text-stone-600' },
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })
}

function handleCaddyAction(bookingId: string, accept: boolean) {
  store.respondToBooking(bookingId, accept)
}

function goToChat(bookingId: string) {
  router.push(`/chat/${bookingId}`)
}

function goToReview(bookingId: string) {
  router.push(`/review/${bookingId}`)
}
</script>

<template>
  <div class="pb-4">
    <AppHeader title="การจอง" :show-back="false" />

    <div v-if="store.userRole === 'caddy'" class="mb-4 mx-5 rounded-xl bg-forest-50 p-3 text-xs text-forest-700">
      โหมดแคดดี้: คุณสามารถรับหรือปฏิเสธคำขอจองได้
    </div>

    <div class="space-y-3 px-5">
      <div v-if="!store.bookings.length" class="card p-8 text-center text-sm text-stone-500">
        ยังไม่มีการจอง
      </div>

      <div v-for="booking in store.bookings" :key="booking.id" class="card p-4">
        <div class="mb-3 flex items-start justify-between">
          <div class="flex items-center gap-3">
            <img
              v-if="getCaddyById(booking.caddyId)"
              :src="getCaddyById(booking.caddyId)!.image"
              class="h-12 w-12 rounded-full object-cover"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold text-forest-800">
                {{ getCaddyById(booking.caddyId)?.name }}
              </p>
              <p class="text-xs text-stone-500">{{ getCourseById(booking.courseId)?.name }}</p>
            </div>
          </div>
          <span class="badge" :class="statusLabels[booking.status].class">
            {{ statusLabels[booking.status].text }}
          </span>
        </div>

        <p class="mb-3 text-xs text-stone-500">
          วันที่ออกรอบ: {{ formatDate(booking.date) }}
        </p>
        <p v-if="booking.golferNote" class="mb-3 text-xs italic text-stone-400">
          "{{ booking.golferNote }}"
        </p>

        <div v-if="booking.status === 'pending' && store.userRole === 'caddy'" class="flex gap-2">
          <button class="btn-primary flex-1 text-xs" @click="handleCaddyAction(booking.id, true)">
            รับงาน
          </button>
          <button class="btn-outline flex-1 text-xs" @click="handleCaddyAction(booking.id, false)">
            ปฏิเสธ
          </button>
        </div>

        <div v-if="booking.status === 'accepted'" class="flex gap-2">
          <button class="btn-primary flex-1 text-xs" @click="goToChat(booking.id)">
            เปิดแชท
          </button>
        </div>

        <div v-if="booking.status === 'completed'" class="flex gap-2">
          <button
            v-if="!store.hasReviewed(booking.id)"
            class="btn-gold flex-1 text-xs"
            @click="goToReview(booking.id)"
          >
            ให้คะแนนรีวิว
          </button>
          <span v-else class="text-xs text-stone-400">รีวิวแล้ว ✓</span>
        </div>
      </div>
    </div>
  </div>
</template>
