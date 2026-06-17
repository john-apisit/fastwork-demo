<script setup lang="ts">
const overviewImage =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop'
</script>

<template>
  <section id="overview" class="py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="order-2 lg:order-1">
          <img
            :src="overviewImage"
            alt="การประชุมทีม HR ในองค์กร"
            class="rounded-2xl shadow-xl shadow-slate-200/80"
            loading="lazy"
          />
        </div>

        <div class="order-1 lg:order-2">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-600">ภาพรวมโครงการ</p>
          <h2 class="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            ศูนย์กลางบริหารทรัพยากรบุคคล
            <span class="text-brand-600">แบบดิจิทัล</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-slate-600">
            ระบบ Back Office ที่ออกแบบมาสำหรับองค์กรขนาดกลาง รวมทุกกระบวนการ HR
            ตั้งแต่การจัดการข้อมูลพนักงาน การลา การลงเวลา เบิกค่าใช้จ่าย
            ไปจนถึงการอนุมัติและจัดเก็บเอกสาร — ลดความซับซ้อน เพิ่มประสิทธิภาพ
          </p>

          <ul class="mt-8 space-y-4">
            <li class="flex items-start gap-3">
              <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="text-slate-700">ข้อมูลพนักงานถูกจัดเก็บอย่างเป็นระบบและค้นหาได้ง่าย</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="text-slate-700">ลดเวลาการอนุมัติคำขอลางานและเบิกค่าใช้จ่าย</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="text-slate-700">ลดงานเอกสารภายในองค์กรกว่า 90%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
