<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { getCaddyById } from '@/data/mockData'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const bookingId = route.params.bookingId as string
const rating = ref(0)
const comment = ref('')
const submitted = ref(false)

const caddy = () => {
  const booking = store.bookings.find((b) => b.id === bookingId)
  return booking ? getCaddyById(booking.caddyId) : null
}

function submit() {
  if (rating.value === 0) {
    alert('กรุณาให้คะแนน')
    return
  }
  store.submitReview(bookingId)
  submitted.value = true
}

function goBack() {
  router.push('/bookings')
}
</script>

<template>
  <div class="pb-6">
    <AppHeader title="ให้คะแนนรีวิว" show-back :show-credits="false" />

    <div v-if="submitted" class="px-5 text-center">
      <div class="card p-8">
        <span class="text-4xl">⭐</span>
        <h3 class="mt-3 font-display text-lg font-semibold text-forest-900">ขอบคุณสำหรับรีวิว!</h3>
        <p class="mt-2 text-sm text-stone-500">ความคิดเห็นของคุณช่วยให้แคดดี้พัฒนาบริการได้ดียิ่งขึ้น</p>
        <button class="btn-primary mt-4 w-full" @click="goBack">กลับ</button>
      </div>
    </div>

    <div v-else class="px-5">
      <div v-if="caddy()" class="card mb-5 flex items-center gap-4 p-4">
        <img :src="caddy()!.image" class="h-14 w-14 rounded-full object-cover" alt="" />
        <div>
          <p class="font-medium text-forest-800">{{ caddy()!.name }}</p>
          <p class="text-xs text-stone-400">ให้คะแนนหลังจบการออกรอบ</p>
        </div>
      </div>

      <div class="card mb-5 p-5 text-center">
        <p class="mb-3 text-sm font-medium text-forest-800">คะแนนความพึงพอใจ</p>
        <div class="flex justify-center gap-2">
          <button
            v-for="star in 5"
            :key="star"
            class="text-3xl transition hover:scale-110"
            @click="rating = star"
          >
            {{ star <= rating ? '★' : '☆' }}
          </button>
        </div>
      </div>

      <div>
        <label class="mb-1 block text-xs font-medium text-forest-700">ความคิดเห็น</label>
        <textarea
          v-model="comment"
          rows="4"
          placeholder="เล่าประสบการณ์ของคุณ..."
          class="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-forest-500 focus:outline-none"
        />
      </div>

      <button class="btn-gold mt-6 w-full" @click="submit">ส่งรีวิว</button>
    </div>
  </div>
</template>
