<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const qrDataUrl = ref('')
const lineUrl = 'https://line.me/ti/p/2NCTw-7W5C'

onMounted(async () => {
  qrDataUrl.value = await QRCode.toDataURL(lineUrl, {
    width: 256,
    margin: 1,
    color: { dark: '#0f172a', light: '#ffffff' },
  })
})
</script>

<template>
  <section id="contact" class="bg-surface-950 py-20 text-white lg:py-28">
    <div class="section-container">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span class="text-sm font-semibold uppercase tracking-wider text-brand-400">ติดต่อเรา</span>
          <h2 class="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            พร้อมเริ่มโปรเจกต์ของคุณ
          </h2>
          <p class="mt-4 text-lg text-slate-400">
            ส่งรายละเอียดความต้องการมาได้เลย จะติดต่อกลับภายใน 24 ชั่วโมงเพื่อปรึกษาและประเมินราคาเบื้องต้นฟรี
          </p>

          <div class="mt-10 space-y-6">
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                ✉️
              </div>
              <div>
                <p class="font-semibold">อีเมล</p>
                <a href="mailto:john.apisits@gmail.com" class="text-slate-400 hover:text-brand-400">
                  john.apisits@gmail.com
                </a>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                📱
              </div>
              <div>
                <p class="font-semibold">โทรศัพท์</p>
                <a href="tel:+66886945232" class="text-slate-400 hover:text-brand-400">
                  088-694-5232
                </a>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                📍
              </div>
              <div>
                <p class="font-semibold">ที่อยู่</p>
                <p class="text-slate-400">กรุงเทพมหานคร, ประเทศไทย</p>
              </div>
            </div>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Bangkok%2C%20Thailand&z=12&output=embed"
              class="h-56 w-full border-0 grayscale-[30%] invert hue-rotate-180"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div class="flex flex-col items-center rounded-3xl bg-white p-6 text-center text-surface-900 shadow-2xl sm:p-10">
          <div class="inline-flex items-center gap-2 rounded-full bg-[#06C755]/10 px-4 py-1.5 text-sm font-semibold text-[#06C755]">
            <span class="inline-block h-2 w-2 rounded-full bg-[#06C755]" />
            LINE Official
          </div>
          <h3 class="mt-4 font-display text-xl font-bold">สแกน QR Code เพื่อติดต่อ</h3>
          <p class="mt-2 max-w-xs text-sm text-slate-500">
            สแกนด้วยแอป LINE เพื่อแชทปรึกษาโปรเจกต์และขอใบเสนอราคาได้ทันที
          </p>

          <div class="relative mt-8 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <div class="pointer-events-none absolute inset-3 rounded-xl ring-2 ring-brand-500/30" />
            <div class="pointer-events-none absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-brand-500" />
            <div class="pointer-events-none absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-brand-500" />
            <div class="pointer-events-none absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-brand-500" />
            <div class="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-brand-500" />

            <div class="relative overflow-hidden rounded-xl">
              <img
                v-if="qrDataUrl"
                :src="qrDataUrl"
                alt="LINE QR Code สำหรับติดต่อ"
                class="mx-auto block h-56 w-56 sm:h-64 sm:w-64"
              />
              <div
                v-else
                class="mx-auto flex h-56 w-56 items-center justify-center bg-white sm:h-64 sm:w-64"
              >
                <div class="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600" />
              </div>

              <div
                class="pointer-events-none absolute inset-x-0 top-0 h-1 animate-scan-line bg-gradient-to-r from-transparent via-brand-500 to-transparent shadow-[0_0_12px_2px_rgba(79,70,229,0.6)]"
              />
              <div
                class="pointer-events-none absolute inset-x-0 top-0 h-8 animate-scan-line bg-gradient-to-b from-brand-500/20 to-transparent"
              />
            </div>
          </div>


          <a
            :href="lineUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-6 gap-2 bg-[#06C755] shadow-[#06C755]/25 hover:bg-[#05b34c] hover:shadow-[#05b34c]/30"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
              />
            </svg>
            เปิด LINE
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
