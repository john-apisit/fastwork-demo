<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { getCaddyById, getCourseById, BOOKING_COST, UNLOCK_COST } from '@/data/mockData'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const caddy = computed(() => getCaddyById(route.params.id as string))
const isUnlocked = computed(() => caddy.value ? store.isCaddyUnlocked(caddy.value.id) : false)
const showBookingModal = ref(false)
const bookingNote = ref('')

const typeLabels = { expert: 'Expert', entertainment: 'Entertainment' }
const genderLabels = { male: 'ชาย', female: 'หญิง' }

function unlock() {
  if (!caddy.value) return
  if (store.unlockCaddy(caddy.value.id)) {
    alert('ปลดล็อกโปรไฟล์สำเร็จ!')
  } else {
    alert('เครดิตไม่เพียงพอ กรุณาเติมเครดิต')
    router.push('/credits')
  }
}

function confirmBooking() {
  if (!caddy.value || !store.selectedDate || !store.selectedCourseId) {
    alert('กรุณาเลือกวันที่และสนามก่อนจอง')
    router.push('/explore')
    return
  }
  if (store.sendBookingRequest(caddy.value.id, store.selectedCourseId, store.selectedDate, bookingNote.value)) {
    showBookingModal.value = false
    alert('ส่งคำขอจองสำเร็จ! รอแคดดี้ตอบรับ')
    router.push('/bookings')
  } else {
    alert('เครดิตไม่เพียงพอ')
    router.push('/credits')
  }
}
</script>

<template>
  <div v-if="caddy" class="pb-6">
    <AppHeader show-back />

    <div class="relative mx-5 mb-4 overflow-hidden rounded-2xl">
      <img :src="caddy.image" :alt="caddy.name" class="h-56 w-full object-cover object-top" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div class="absolute bottom-4 left-4 right-4">
        <h2 class="font-display text-2xl font-semibold text-white">{{ caddy.name }}</h2>
        <p class="text-sm text-white/80">{{ caddy.nameEn }}</p>
      </div>
    </div>

    <div class="space-y-4 px-5">
      <div class="flex flex-wrap gap-2">
        <span class="badge bg-forest-100 text-forest-700">{{ typeLabels[caddy.type] }}</span>
        <span class="badge bg-stone-100 text-stone-600">{{ genderLabels[caddy.gender] }}</span>
        <span class="badge bg-gold-100 text-gold-700">★ {{ caddy.rating }} ({{ caddy.reviewCount }})</span>
        <span class="badge bg-stone-100 text-stone-600">{{ caddy.experienceYears }} ปีประสบการณ์</span>
      </div>

      <div class="card p-4">
        <h3 class="mb-2 text-sm font-semibold text-forest-800">ภาษา</h3>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="lang in caddy.languages" :key="lang" class="badge bg-forest-50 text-forest-600 ring-1 ring-forest-100">
            {{ lang }}
          </span>
        </div>
      </div>

      <div v-if="isUnlocked" class="card p-4">
        <h3 class="mb-2 text-sm font-semibold text-forest-800">เกี่ยวกับ</h3>
        <p class="text-sm leading-relaxed text-stone-600">{{ caddy.bio }}</p>
        <p class="mt-1 text-xs text-stone-400">{{ caddy.bioEn }}</p>
      </div>
      <div v-else class="card p-4 text-center">
        <p class="mb-3 text-sm text-stone-500">ปลดล็อกโปรไฟล์เพื่อดูข้อมูลเต็ม</p>
        <button class="btn-gold w-full" @click="unlock">
          ปลดล็อก {{ UNLOCK_COST }} บาท
        </button>
      </div>

      <div v-if="isUnlocked" class="card p-4">
        <h3 class="mb-3 text-sm font-semibold text-forest-800">ประสบการณ์ในสนาม</h3>
        <div v-for="exp in caddy.courseExperience" :key="exp.courseId" class="mb-2 flex items-center justify-between border-b border-stone-100 pb-2 last:mb-0 last:border-0 last:pb-0">
          <div>
            <p class="text-sm font-medium text-forest-800">{{ getCourseById(exp.courseId)?.name }}</p>
            <p class="text-xs text-stone-400">{{ exp.years }} ปี · {{ exp.rounds }} รอบ</p>
          </div>
        </div>
      </div>

      <div v-if="isUnlocked && caddy.reviews.length" class="card p-4">
        <h3 class="mb-3 text-sm font-semibold text-forest-800">รีวิว</h3>
        <div v-for="review in caddy.reviews" :key="review.id" class="mb-3 border-b border-stone-100 pb-3 last:mb-0 last:border-0 last:pb-0">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-forest-800">{{ review.golferName }}</span>
            <span class="text-xs text-gold-500">{{ '★'.repeat(review.rating) }}</span>
          </div>
          <p class="mt-1 text-xs text-stone-500">{{ review.comment }}</p>
        </div>
      </div>

      <button
        v-if="isUnlocked"
        class="btn-primary w-full"
        @click="showBookingModal = true"
      >
        ส่งคำขอจอง ({{ BOOKING_COST }} บาท)
      </button>
    </div>

    <div v-if="showBookingModal" class="fixed inset-0 z-50 flex items-end justify-center bg-black/40" @click.self="showBookingModal = false">
      <div class="w-full max-w-[390px] rounded-t-2xl bg-white p-5">
        <h3 class="mb-3 font-display text-lg font-semibold text-forest-900">ยืนยันการจอง</h3>
        <p class="mb-2 text-sm text-stone-500">
          วันที่: {{ store.selectedDate || 'ยังไม่ได้เลือก' }}
        </p>
        <p class="mb-4 text-sm text-stone-500">
          สนาม: {{ store.selectedCourseId ? getCourseById(store.selectedCourseId)?.name : 'ยังไม่ได้เลือก' }}
        </p>
        <textarea
          v-model="bookingNote"
          placeholder="หมายเหตุถึงแคดดี้ (ถ้ามี)"
          class="mb-4 w-full rounded-xl border border-stone-200 p-3 text-sm focus:border-forest-500 focus:outline-none"
          rows="3"
        />
        <div class="flex gap-3">
          <button class="btn-outline flex-1" @click="showBookingModal = false">ยกเลิก</button>
          <button class="btn-primary flex-1" @click="confirmBooking">ยืนยัน ({{ BOOKING_COST }} บาท)</button>
        </div>
      </div>
    </div>
  </div>
</template>
