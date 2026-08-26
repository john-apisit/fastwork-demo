<script setup lang="ts">
import { ref } from 'vue'
import { services, type Service } from '../data/content'

const activeService = ref<Service | null>(null)

function openService(service: Service) {
  activeService.value = service
  document.body.style.overflow = 'hidden'
}

function closeService() {
  activeService.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section id="services" class="py-20 lg:py-28">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">บริการของเรา</span>
        <h2 class="section-title mt-2">บริการรับจ้างพัฒนา</h2>
        <p class="section-subtitle mx-auto">
          เลือกบริการที่ตรงกับความต้องการของธุรกิจคุณ พร้อมแพ็กเกจราคาที่ชัดเจน
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.id"
          class="card group cursor-pointer overflow-hidden"
          @click="openService(service)"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-surface-900/70 to-transparent" />
            <span class="absolute bottom-4 left-4 text-3xl">{{ service.icon }}</span>
          </div>
          <div class="p-6">
            <h3 class="font-display text-xl font-bold text-surface-900">{{ service.title }}</h3>
            <p class="mt-1 text-sm font-medium text-brand-600">{{ service.subtitle }}</p>
            <p class="mt-3 line-clamp-2 text-sm text-slate-600">{{ service.description }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="pkg in service.packages"
                :key="pkg.name"
                class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
              >
                {{ pkg.name }} ฿{{ pkg.price }}
              </span>
            </div>
            <p class="mt-4 text-sm font-semibold text-brand-600 group-hover:underline">
              ดูรายละเอียด →
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- Service Detail Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeService"
          class="fixed inset-0 z-[100] flex items-end justify-center bg-surface-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          @click.self="closeService"
        >
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-y-full sm:translate-y-4 sm:opacity-0"
            enter-to-class="translate-y-0 sm:opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 sm:opacity-100"
            leave-to-class="translate-y-full sm:translate-y-4 sm:opacity-0"
          >
            <div
              v-if="activeService"
              class="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            >
              <div class="relative h-48 shrink-0 overflow-hidden sm:h-56">
                <img
                  :src="activeService.image"
                  :alt="activeService.title"
                  class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/30 to-transparent" />
                <button
                  type="button"
                  class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:bg-white"
                  aria-label="ปิด"
                  @click="closeService"
                >
                  ✕
                </button>
                <div class="absolute bottom-4 left-6">
                  <span class="text-3xl">{{ activeService.icon }}</span>
                  <h3 class="mt-1 font-display text-2xl font-bold text-white">
                    {{ activeService.title }}
                  </h3>
                  <p class="text-sm text-white/80">{{ activeService.subtitle }}</p>
                </div>
              </div>

              <div class="overflow-y-auto p-6 sm:p-8">
                <p class="text-slate-600">{{ activeService.description }}</p>

                <div v-if="activeService.suitableFor.length" class="mt-6">
                  <h4 class="font-display font-semibold text-surface-900">เหมาะสำหรับ</h4>
                  <ul class="mt-2 grid gap-1.5 sm:grid-cols-2">
                    <li
                      v-for="item in activeService.suitableFor"
                      :key="item"
                      class="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span class="mt-0.5 text-brand-500">•</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="activeService.deliverables?.length" class="mt-6">
                  <h4 class="font-display font-semibold text-surface-900">สิ่งที่ลูกค้าจะได้รับ</h4>
                  <ul class="mt-2 grid gap-1.5 sm:grid-cols-2">
                    <li
                      v-for="item in activeService.deliverables"
                      :key="item"
                      class="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span class="text-green-500">✓</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="activeService.examples?.length" class="mt-6">
                  <h4 class="font-display font-semibold text-surface-900">ตัวอย่างระบบที่รับพัฒนา</h4>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="item in activeService.examples"
                      :key="item"
                      class="rounded-lg bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div>

                <div class="mt-6">
                  <h4 class="font-display font-semibold text-surface-900">ขั้นตอนการทำงาน</h4>
                  <ol class="mt-3 space-y-2">
                    <li
                      v-for="(step, index) in activeService.steps"
                      :key="step"
                      class="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span
                        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
                      >
                        {{ index + 1 }}
                      </span>
                      {{ step }}
                    </li>
                  </ol>
                </div>

                <div class="mt-6">
                  <h4 class="font-display font-semibold text-surface-900">เทคโนโลยี</h4>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="tech in activeService.technologies"
                      :key="tech"
                      class="rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="mt-8">
                  <h4 class="font-display font-semibold text-surface-900">แพ็กเกจและราคา</h4>
                  <div class="mt-4 grid gap-4 sm:grid-cols-3">
                    <div
                      v-for="(pkg, index) in activeService.packages"
                      :key="pkg.name"
                      :class="[
                        'rounded-2xl border p-5',
                        index === 1
                          ? 'border-brand-300 bg-brand-50 ring-2 ring-brand-200'
                          : 'border-slate-200 bg-slate-50',
                      ]"
                    >
                      <div class="flex items-center justify-between">
                        <span class="font-display font-bold text-surface-900">{{ pkg.name }}</span>
                        <span
                          v-if="index === 1"
                          class="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white"
                        >
                          แนะนำ
                        </span>
                      </div>
                      <p class="mt-2 font-display text-2xl font-extrabold text-brand-600">
                        ฿{{ pkg.price }}
                      </p>
                      <p class="mt-1 text-xs text-slate-500">{{ pkg.description }}</p>
                      <ul class="mt-4 space-y-2">
                        <li
                          v-for="feature in pkg.features"
                          :key="feature"
                          class="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <span class="text-green-500">✓</span>
                          {{ feature }}
                        </li>
                      </ul>
                      <p class="mt-4 text-xs font-medium text-slate-500">
                        ระยะเวลา {{ pkg.duration }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" class="btn-primary" @click="closeService">สอบถามแพ็กเกจนี้</a>
                  <button type="button" class="btn-secondary" @click="closeService">ปิด</button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
