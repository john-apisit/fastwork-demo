<script setup lang="ts">
const heroImage =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32 sm:pb-28">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-600/30 via-transparent to-transparent"
    />
    <div
      class="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="animate-fade-up">
          <h1 class="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            ระบบ Back Office
            <span class="text-gradient">และ HR Management</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90">
            พัฒนาระบบ Back Office สำหรับองค์กรขนาดกลาง เพื่อบริหารจัดการพนักงาน เอกสาร
            และกระบวนการอนุมัติภายในองค์กร — ครบจบในที่เดียว
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              class="rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-400 hover:shadow-brand-400/30"
            >
              สำรวจฟีเจอร์
            </a>
            <a
              href="#dashboard"
              class="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              ดู Executive Dashboard
            </a>
          </div>

          <dl class="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt class="text-2xl font-bold text-white sm:text-3xl">90%+</dt>
              <dd class="mt-1 text-xs text-brand-200 sm:text-sm">ลดงานเอกสาร</dd>
            </div>
            <div>
              <dt class="text-2xl font-bold text-white sm:text-3xl">8</dt>
              <dd class="mt-1 text-xs text-brand-200 sm:text-sm">โมดูลหลัก</dd>
            </div>
            <div>
              <dt class="text-2xl font-bold text-white sm:text-3xl">24/7</dt>
              <dd class="mt-1 text-xs text-brand-200 sm:text-sm">เข้าถึงข้อมูล</dd>
            </div>
          </dl>
        </div>

        <div class="relative animate-fade-in lg:pl-8">
          <div class="animate-float overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <img
              :src="heroImage"
              alt="ทีมงานในออฟฟิศกำลังทำงานร่วมกัน"
              class="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent"
            />
          </div>

          <div
            class="absolute -bottom-6 -left-4 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:-left-8"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20">
                <svg class="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">อนุมัติคำขอลา</p>
                <p class="text-xs text-brand-200">เสร็จภายใน 2 ชั่วโมง</p>
              </div>
            </div>
          </div>

          <div
            class="absolute -right-4 top-8 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:-right-8"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/20">
                <svg class="h-5 w-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">248 พนักงาน</p>
                <p class="text-xs text-brand-200">ข้อมูลอัปเดตเรียลไทม์</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
