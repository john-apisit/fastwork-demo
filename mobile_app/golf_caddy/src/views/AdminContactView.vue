<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'

const router = useRouter()
const subject = ref('')
const message = ref('')
const submitted = ref(false)

function submit() {
  if (!message.value.trim()) {
    alert('กรุณากรอกรายละเอียดปัญหา')
    return
  }
  submitted.value = true
}

function goBack() {
  router.back()
}
</script>

<template>
  <div class="pb-6">
    <AppHeader title="ติดต่อแอดมิน" show-back :show-credits="false" />

    <div v-if="submitted" class="px-5 text-center">
      <div class="card p-8">
        <span class="text-4xl">✅</span>
        <h3 class="mt-3 font-display text-lg font-semibold text-forest-900">ส่งเรื่องสำเร็จ</h3>
        <p class="mt-2 text-sm text-stone-500">
          ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
        </p>
        <button class="btn-primary mt-4 w-full" @click="goBack">กลับ</button>
      </div>
    </div>

    <div v-else class="px-5">
      <p class="mb-5 text-sm text-stone-500">
        แจ้งปัญหาการใช้งาน ข้อพิพาท หรือข้อเสนอแนะเกี่ยวกับแอปพลิเคชัน
      </p>

      <div class="card mb-4 p-4">
        <p class="text-xs font-semibold text-forest-800">ช่องทางติดต่อด่วน</p>
        <div class="mt-2 space-y-1 text-sm text-stone-600">
          <p>📧 support@caddylink.co.th</p>
          <p>📱 Line: @CaddyLink</p>
          <p>⏰ จันทร์-ศุกร์ 9:00-18:00 น.</p>
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <label class="mb-1 block text-xs font-medium text-forest-700">หัวข้อ</label>
          <select
            v-model="subject"
            class="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-forest-500 focus:outline-none"
          >
            <option value="">เลือกหัวข้อ</option>
            <option value="booking">ปัญหาการจอง</option>
            <option value="payment">ปัญหาการชำระเงิน</option>
            <option value="caddy">ปัญหาเกี่ยวกับแคดดี้</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
        <div>
          <label class="mb-1 block text-xs font-medium text-forest-700">รายละเอียด</label>
          <textarea
            v-model="message"
            rows="5"
            placeholder="อธิบายปัญหาที่พบ..."
            class="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
      </div>

      <button class="btn-primary mt-6 w-full" @click="submit">ส่งเรื่อง</button>
    </div>
  </div>
</template>
