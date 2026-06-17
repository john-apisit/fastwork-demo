<script setup lang="ts">
import { ref, computed } from 'vue'
import { services, timeSlots } from '../data/content'
import SectionHeading from './SectionHeading.vue'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  note: string
}

const form = ref<FormData>({
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  note: '',
})

const submitted = ref(false)
const errors = ref<Partial<Record<keyof FormData, string>>>({})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

function validate(): boolean {
  const newErrors: Partial<Record<keyof FormData, string>> = {}

  if (!form.value.name.trim()) newErrors.name = 'กรุณากรอกชื่อ-นามสกุล'
  if (!form.value.phone.trim()) newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์'
  else if (!/^0[0-9]{8,9}$/.test(form.value.phone.replace(/-/g, ''))) {
    newErrors.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง'
  }
  if (!form.value.service) newErrors.service = 'กรุณาเลือกบริการ'
  if (!form.value.date) newErrors.date = 'กรุณาเลือกวันที่'
  if (!form.value.time) newErrors.time = 'กรุณาเลือกเวลา'

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

function handleSubmit() {
  submitted.value = false
  if (!validate()) return
  submitted.value = true
  form.value = {
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    note: '',
  }
}
</script>

<template>
  <section id="appointment" class="section-padding bg-rose-50">
    <div class="container-narrow">
      <SectionHeading
        label="Appointment"
        title="นัดหมายออนไลน์"
        description="กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับเพื่อยืนยันนัดหมายภายใน 24 ชั่วโมง"
      />

      <div class="mx-auto max-w-2xl">
        <form
          v-if="!submitted"
          class="rounded-2xl bg-white p-6 shadow-md sm:p-8"
          @submit.prevent="handleSubmit"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5">
              <div>
                <label for="name" class="mb-1 block text-sm font-medium text-gray-700">
                  ชื่อ-นามสกุล *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  placeholder="ชื่อ นามสกุล"
                />
                <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
              </div>

              <div>
                <label for="phone" class="mb-1 block text-sm font-medium text-gray-700">
                  เบอร์โทรศัพท์ *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  placeholder="08x-xxx-xxxx"
                />
                <p v-if="errors.phone" class="mt-1 text-xs text-red-500">{{ errors.phone }}</p>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="mb-1 block text-sm font-medium text-gray-700">
                อีเมล (ไม่บังคับ)
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="email@example.com"
              />
            </div>

            <div class="sm:col-span-2">
              <label for="service" class="mb-1 block text-sm font-medium text-gray-700">
                บริการที่สนใจ *
              </label>
              <select
                id="service"
                v-model="form.service"
                class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="" disabled>เลือกบริการ</option>
                <option v-for="s in services" :key="s.id" :value="s.name">
                  {{ s.name }} — ฿{{ s.price }}
                </option>
              </select>
              <p v-if="errors.service" class="mt-1 text-xs text-red-500">{{ errors.service }}</p>
            </div>

            <div>
              <label for="date" class="mb-1 block text-sm font-medium text-gray-700">
                วันที่ *
              </label>
              <input
                id="date"
                v-model="form.date"
                type="date"
                :min="minDate"
                class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
              <p v-if="errors.date" class="mt-1 text-xs text-red-500">{{ errors.date }}</p>
            </div>

            <div>
              <label for="time" class="mb-1 block text-sm font-medium text-gray-700">
                เวลา *
              </label>
              <select
                id="time"
                v-model="form.time"
                class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="" disabled>เลือกเวลา</option>
                <option v-for="slot in timeSlots" :key="slot" :value="slot">
                  {{ slot }} น.
                </option>
              </select>
              <p v-if="errors.time" class="mt-1 text-xs text-red-500">{{ errors.time }}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="note" class="mb-1 block text-sm font-medium text-gray-700">
                หมายเหตุ (ไม่บังคับ)
              </label>
              <textarea
                id="note"
                v-model="form.note"
                rows="3"
                class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="แจ้งอาการผิวหรือข้อมูลเพิ่มเติม"
              />
            </div>
          </div>

          <button type="submit" class="btn-primary mt-6 w-full">
            ส่งคำขอนัดหมาย
          </button>
        </form>

        <div
          v-else
          class="rounded-2xl bg-white p-8 text-center shadow-md"
        >
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg class="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">ส่งคำขอนัดหมายเรียบร้อยแล้ว</h3>
          <p class="mt-2 text-gray-600">
            ทีมงานจะติดต่อกลับเพื่อยืนยันนัดหมายภายใน 24 ชั่วโมง
          </p>
          <button
            type="button"
            class="btn-outline mt-6"
            @click="submitted = false"
          >
            นัดหมายอีกครั้ง
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
