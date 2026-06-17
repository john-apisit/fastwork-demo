<script setup lang="ts">
interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

const features: Feature[] = [
  {
    title: 'Employee Management',
    description: 'จัดการข้อมูลพนักงาน โครงสร้างองค์กร ตำแหน่งงาน และประวัติการทำงานในที่เดียว',
    icon: 'users',
    color: 'bg-blue-500',
  },
  {
    title: 'Leave Management',
    description: 'ยื่นคำขอลา ติดตามสถานะ และจัดการวันลาคงเหลืออัตโนมัติ',
    icon: 'calendar',
    color: 'bg-violet-500',
  },
  {
    title: 'Time Attendance',
    description: 'บันทึกเวลาเข้า-ออกงาน สรุปชั่วโมงทำงาน และรายงานการมาสาย',
    icon: 'clock',
    color: 'bg-amber-500',
  },
  {
    title: 'Expense Claim',
    description: 'เบิกค่าใช้จ่าย พร้อมแนบใบเสร็จและติดตามสถานะการจ่ายเงิน',
    icon: 'receipt',
    color: 'bg-emerald-500',
  },
  {
    title: 'Approval Workflow',
    description: 'กำหนดลำดับขั้นการอนุมัติหลายระดับ แจ้งเตือนผู้อนุมัติอัตโนมัติ',
    icon: 'workflow',
    color: 'bg-rose-500',
  },
  {
    title: 'Document Management',
    description: 'จัดเก็บเอกสาร HR สัญญาจ้าง และไฟล์แนบอย่างเป็นระบบ',
    icon: 'document',
    color: 'bg-cyan-500',
  },
  {
    title: 'Notification System',
    description: 'แจ้งเตือนผ่านระบบเมื่อมีคำขอใหม่ การอนุมัติ หรือเอกสารใกล้หมดอายุ',
    icon: 'bell',
    color: 'bg-orange-500',
  },
  {
    title: 'Executive Dashboard',
    description: 'แดชบอร์ดสรุปภาพรวม HR สำหรับผู้บริหาร ตัดสินใจด้วยข้อมูลจริง',
    icon: 'chart',
    color: 'bg-indigo-500',
  },
]
</script>

<template>
  <section id="features" class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-600">ฟีเจอร์หลัก</p>
        <h2 class="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          ครบทุกโมดูลที่องค์กรต้องการ
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          8 โมดูลหลักที่ออกแบบมาเพื่อลดงานซ้ำซ้อนและเพิ่มประสิทธิภาพการทำงานของ HR
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-100/50"
        >
          <div
            :class="[
              feature.color,
              'mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition group-hover:scale-110',
            ]"
          >
            <!-- users -->
            <svg v-if="feature.icon === 'users'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <!-- calendar -->
            <svg v-else-if="feature.icon === 'calendar'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <!-- clock -->
            <svg v-else-if="feature.icon === 'clock'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <!-- receipt -->
            <svg v-else-if="feature.icon === 'receipt'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
            </svg>
            <!-- workflow -->
            <svg v-else-if="feature.icon === 'workflow'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <!-- document -->
            <svg v-else-if="feature.icon === 'document'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <!-- bell -->
            <svg v-else-if="feature.icon === 'bell'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <!-- chart -->
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-slate-900">{{ feature.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
