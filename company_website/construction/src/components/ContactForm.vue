<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)

async function handleSubmit() {
  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 800))
  submitted.value = true
  submitting.value = false
  form.value = { name: '', email: '', phone: '', subject: '', message: '' }
}
</script>

<template>
  <div v-if="submitted" class="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-200">
    <div class="text-4xl">✓</div>
    <h3 class="mt-4 text-xl font-bold text-green-800">ส่งข้อความเรียบร้อยแล้ว</h3>
    <p class="mt-2 text-green-700">ทีมงานจะติดต่อกลับภายใน 1-2 วันทำการ</p>
    <button
      type="button"
      class="mt-6 text-sm font-semibold text-green-700 underline"
      @click="submitted = false"
    >
      ส่งข้อความใหม่
    </button>
  </div>

  <form v-else class="space-y-5" @submit.prevent="handleSubmit">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="name" class="block text-sm font-medium text-slate-700">ชื่อ-นามสกุล *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-slate-700">อีเมล *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="phone" class="block text-sm font-medium text-slate-700">เบอร์โทรศัพท์</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <div>
        <label for="subject" class="block text-sm font-medium text-slate-700">หัวข้อ *</label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          required
          class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-slate-700">รายละเอียด *</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        class="mt-1 w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>

    <button
      type="submit"
      :disabled="submitting"
      class="w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
    >
      {{ submitting ? 'กำลังส่ง...' : 'ส่งข้อความ' }}
    </button>
  </form>
</template>
