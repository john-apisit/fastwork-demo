<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { roomTypes } from '../data/content'

interface BookingForm {
  fullName: string
  email: string
  phone: string
  roomType: string
  checkIn: string
  checkOut: string
  guests: number
  specialRequest: string
}

const form = ref<BookingForm>({
  fullName: '',
  email: '',
  phone: '',
  roomType: '',
  checkIn: '',
  checkOut: '',
  guests: 2,
  specialRequest: '',
})

const submitted = ref(false)
const errors = ref<Partial<Record<keyof BookingForm, string>>>({})

const selectedRoom = computed(() =>
  roomTypes.find((r) => r.id === form.value.roomType),
)

const nights = computed(() => {
  if (!form.value.checkIn || !form.value.checkOut) return 0
  const start = new Date(form.value.checkIn)
  const end = new Date(form.value.checkOut)
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
})

const estimatedTotal = computed(() => {
  if (!selectedRoom.value || nights.value === 0) return 0
  return selectedRoom.value.price * nights.value
})

const today = new Date().toISOString().split('T')[0]

onMounted(() => {
  const params = new URLSearchParams(window.location.hash.split('?')[1] ?? '')
  const room = params.get('room')
  if (room && roomTypes.some((r) => r.id === room)) {
    form.value.roomType = room
  }
})

function validate(): boolean {
  const e: Partial<Record<keyof BookingForm, string>> = {}

  if (!form.value.fullName.trim()) e.fullName = 'กรุณากรอกชื่อ-นามสกุล'
  if (!form.value.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    e.email = 'กรุณากรอกอีเมลที่ถูกต้อง'
  }
  if (!form.value.phone.trim()) e.phone = 'กรุณากรอกเบอร์โทรศัพท์'
  if (!form.value.roomType) e.roomType = 'กรุณาเลือกประเภทห้อง'
  if (!form.value.checkIn) e.checkIn = 'กรุณาเลือกวันเช็คอิน'
  if (!form.value.checkOut) e.checkOut = 'กรุณาเลือกวันเช็คเอาท์'
  if (form.value.checkIn && form.value.checkOut && nights.value <= 0) {
    e.checkOut = 'วันเช็คเอาท์ต้องหลังวันเช็คอิน'
  }

  errors.value = e
  return Object.keys(e).length === 0
}

function handleSubmit() {
  if (!validate()) return
  submitted.value = true
}
</script>

<template>
  <section id="booking" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">Reservation</p>
        <h2 class="section-heading">จองห้องพักออนไลน์</h2>
        <p class="section-subheading">
          กรอกข้อมูลด้านล่างเพื่อส่งคำขอจอง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
        </p>
      </div>

      <div v-if="submitted" class="max-w-lg mx-auto text-center bg-sand-100 rounded-2xl p-10">
        <span class="text-5xl">✓</span>
        <h3 class="mt-4 font-display text-2xl text-ocean-900 font-semibold">ส่งคำขอจองเรียบร้อย</h3>
        <p class="mt-3 text-gray-600">
          ขอบคุณคุณ {{ form.fullName }} เราได้รับคำขอจองห้อง
          {{ selectedRoom?.name }} แล้ว ทีมงานจะติดต่อกลับที่ {{ form.email }}
        </p>
        <button
          type="button"
          class="mt-6 btn-primary"
          @click="submitted = false"
        >
          จองห้องเพิ่ม
        </button>
      </div>

      <div v-else class="grid lg:grid-cols-5 gap-10">
        <form class="lg:col-span-3 space-y-5" @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">
                ชื่อ-นามสกุล *
              </label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none"
                placeholder="สมชาย ใจดี"
              />
              <p v-if="errors.fullName" class="mt-1 text-sm text-red-500">{{ errors.fullName }}</p>
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                เบอร์โทรศัพท์ *
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none"
                placeholder="081-234-5678"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              อีเมล *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none"
              placeholder="email@example.com"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
          </div>

          <div>
            <label for="roomType" class="block text-sm font-medium text-gray-700 mb-1">
              ประเภทห้อง *
            </label>
            <select
              id="roomType"
              v-model="form.roomType"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none bg-white"
            >
              <option value="">-- เลือกห้องพัก --</option>
              <option v-for="room in roomTypes" :key="room.id" :value="room.id">
                {{ room.name }} — ฿{{ room.price.toLocaleString('th-TH') }}/คืน
              </option>
            </select>
            <p v-if="errors.roomType" class="mt-1 text-sm text-red-500">{{ errors.roomType }}</p>
          </div>

          <div class="grid sm:grid-cols-3 gap-5">
            <div>
              <label for="checkIn" class="block text-sm font-medium text-gray-700 mb-1">
                เช็คอิน *
              </label>
              <input
                id="checkIn"
                v-model="form.checkIn"
                type="date"
                :min="today"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none"
              />
              <p v-if="errors.checkIn" class="mt-1 text-sm text-red-500">{{ errors.checkIn }}</p>
            </div>
            <div>
              <label for="checkOut" class="block text-sm font-medium text-gray-700 mb-1">
                เช็คเอาท์ *
              </label>
              <input
                id="checkOut"
                v-model="form.checkOut"
                type="date"
                :min="form.checkIn || today"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none"
              />
              <p v-if="errors.checkOut" class="mt-1 text-sm text-red-500">{{ errors.checkOut }}</p>
            </div>
            <div>
              <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">
                จำนวนผู้เข้าพัก
              </label>
              <select
                id="guests"
                v-model.number="form.guests"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none bg-white"
              >
                <option v-for="n in 6" :key="n" :value="n">{{ n }} ท่าน</option>
              </select>
            </div>
          </div>

          <div>
            <label for="specialRequest" class="block text-sm font-medium text-gray-700 mb-1">
              คำขอพิเศษ
            </label>
            <textarea
              id="specialRequest"
              v-model="form.specialRequest"
              rows="3"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ocean-600 focus:border-transparent outline-none resize-none"
              placeholder="เช่น ต้องการเตียงเสริม, อาหารมังสวิรัติ..."
            />
          </div>

          <button type="submit" class="btn-primary w-full sm:w-auto">
            ส่งคำขอจอง
          </button>
        </form>

        <aside class="lg:col-span-2">
          <div class="sticky top-24 bg-sand-100 rounded-2xl p-6 md:p-8">
            <h3 class="font-display text-xl font-semibold text-ocean-900">สรุปการจอง</h3>

            <div v-if="selectedRoom" class="mt-5">
              <img
                :src="selectedRoom.image"
                :alt="selectedRoom.name"
                class="w-full aspect-video object-cover rounded-xl"
              />
              <p class="mt-4 font-display text-lg text-ocean-800">{{ selectedRoom.name }}</p>
              <p class="text-sm text-gray-600 mt-1">{{ selectedRoom.description }}</p>
            </div>
            <p v-else class="mt-5 text-gray-500 text-sm">เลือกห้องพักเพื่อดูรายละเอียด</p>

            <dl class="mt-6 space-y-3 text-sm">
              <div class="flex justify-between">
                <dt class="text-gray-500">ราคา/คืน</dt>
                <dd class="font-medium">
                  {{ selectedRoom ? `฿${selectedRoom.price.toLocaleString('th-TH')}` : '—' }}
                </dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-500">จำนวนคืน</dt>
                <dd class="font-medium">{{ nights > 0 ? `${nights} คืน` : '—' }}</dd>
              </div>
              <div class="flex justify-between border-t border-gray-200 pt-3">
                <dt class="text-ocean-900 font-medium">ราคาโดยประมาณ</dt>
                <dd class="font-display text-xl text-ocean-700 font-semibold">
                  {{ estimatedTotal > 0 ? `฿${estimatedTotal.toLocaleString('th-TH')}` : '—' }}
                </dd>
              </div>
            </dl>

            <p class="mt-4 text-xs text-gray-500">
              * ราคาโดยประมาณ ยังไม่รวมภาษีและค่าบริการ ราคาจริงจะแจ้งเมื่อยืนยันการจอง
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
