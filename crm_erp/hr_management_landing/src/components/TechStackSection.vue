<script setup lang="ts">
const technologies = [
  {
    name: 'Vue',
    description: 'Frontend framework ที่ยืดหยุ่น สร้าง UI แบบ component-based',
    color: 'from-emerald-400 to-emerald-600',
    logo: 'V',
  },
  {
    name: 'TypeScript',
    description: 'Type-safe development ลดข้อผิดพลาดและเพิ่ม maintainability',
    color: 'from-blue-400 to-blue-600',
    logo: 'TS',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS สร้าง UI สวยงามและ responsive ได้รวดเร็ว',
    color: 'from-cyan-400 to-cyan-600',
    logo: 'TW',
  },
]
</script>

<template>
  <section id="tech" class="py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-600">เทคโนโลยี</p>
        <h2 class="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          สแต็กที่ทันสมัยและพร้อมขยาย
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          พัฒนาด้วยเทคโนโลยีที่ได้รับความนิยม รองรับการเติบโตขององค์กรในระยะยาว
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <article
          v-for="tech in technologies"
          :key="tech.name"
          class="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/80"
        >
          <div
            :class="[
              'mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-lg font-bold text-white shadow-lg',
              tech.color,
            ]"
          >
            {{ tech.logo }}
          </div>
          <h3 class="font-display text-xl font-bold text-slate-900">{{ tech.name }}</h3>
          <p class="mt-3 text-slate-600">{{ tech.description }}</p>
        </article>
      </div>

      <div class="mt-12 rounded-2xl bg-slate-900 p-8 text-center sm:p-12">
        <p class="font-mono text-sm text-slate-400">tech stack</p>
        <p class="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          Vue <span class="text-brand-400">+</span> TypeScript
          <span class="text-brand-400">+</span> Tailwind CSS
        </p>
      </div>
    </div>
  </section>
</template>
