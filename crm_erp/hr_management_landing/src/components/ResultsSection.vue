<script setup lang="ts">
const results = [
  {
    metric: '90%+',
    title: 'ลดงานเอกสารภายในองค์กร',
    description: 'เปลี่ยนจากกระดาษเป็นดิจิทัล ลดการพิมพ์ สแกน และจัดเก็บเอกสารด้วยมือ',
    icon: 'document',
  },
  {
    metric: '70%',
    title: 'ลดเวลาการอนุมัติ',
    description: 'คำขอลางานและเบิกค่าใช้จ่ายได้รับการอนุมัติเร็วขึ้นผ่าน workflow อัตโนมัติ',
    icon: 'clock',
  },
  {
    metric: '100%',
    title: 'ข้อมูลพนักงานเป็นระบบ',
    description: 'ค้นหา อัปเดต และจัดการข้อมูลพนักงานได้จากที่เดียว ไม่ต้องเปิดหลายไฟล์',
    icon: 'search',
  },
]

const bgImage =
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
</script>

<template>
  <section id="results" class="relative overflow-hidden py-20 sm:py-28">
    <div class="absolute inset-0">
      <img
        :src="bgImage"
        alt="ทีมงานบรรลุเป้าหมาย"
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-brand-950/90" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-300">ผลลัพธ์</p>
        <h2 class="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          ผลกระทบที่วัดผลได้จริง
        </h2>
        <p class="mt-4 text-lg text-brand-200">
          ระบบที่ออกแบบมาเพื่อแก้ปัญหาจริงขององค์กร ไม่ใช่แค่ซอฟต์แวร์อีกตัว
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <article
          v-for="result in results"
          :key="result.title"
          class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <p class="font-display text-4xl font-extrabold text-brand-400">{{ result.metric }}</p>
          <h3 class="mt-4 font-display text-xl font-bold text-white">{{ result.title }}</h3>
          <p class="mt-3 text-brand-200">{{ result.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
