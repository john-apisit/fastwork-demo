<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { PortfolioItem } from '../data/content'
import { portfolioItems } from '../data/content'

const lightboxItem = ref<PortfolioItem | null>(null)
const lightboxIndex = ref(0)

function openLightbox(item: PortfolioItem) {
  lightboxItem.value = item
  lightboxIndex.value = 0
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxItem.value = null
  lightboxIndex.value = 0
  document.body.style.overflow = ''
}

function showPrev() {
  if (!lightboxItem.value) return
  const count = lightboxItem.value.images.length
  lightboxIndex.value = (lightboxIndex.value - 1 + count) % count
}

function showNext() {
  if (!lightboxItem.value) return
  const count = lightboxItem.value.images.length
  lightboxIndex.value = (lightboxIndex.value + 1) % count
}

function goToSlide(index: number) {
  lightboxIndex.value = index
}

function onKeydown(event: KeyboardEvent) {
  if (!lightboxItem.value) return

  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowLeft') {
    showPrev()
  } else if (event.key === 'ArrowRight') {
    showNext()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

watch(lightboxItem, (item) => {
  if (!item) document.body.style.overflow = ''
})
</script>

<template>
  <section id="portfolio" class="bg-white py-20 lg:py-28">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-brand-600">Portfolio</span>
        <h2 class="section-title mt-2">ตัวอย่างผลงาน</h2>
        <p class="section-subtitle mx-auto">
          ตัวอย่าง Demo โปรเจกต์ที่พัฒนา ครอบคลุมทุกประเภทบริการ
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in portfolioItems"
          :key="item.id"
          class="card group cursor-pointer overflow-hidden"
          @click="openLightbox(item)"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span
              class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm"
            >
              {{ item.category }}
            </span>
            <span
              class="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30"
            >
              <span
                class="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-surface-900 opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100"
              >
                ดูภาพทั้งหมด ({{ item.images.length }})
              </span>
            </span>
          </div>
          <div class="p-5">
            <h3 class="font-display text-lg font-bold text-surface-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-slate-600">{{ item.description }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

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
          v-if="lightboxItem"
          class="fixed inset-0 z-50 flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          :aria-label="lightboxItem.title"
          @click.self="closeLightbox"
        >
          <header class="flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-brand-300">{{ lightboxItem.category }}</p>
              <h3 class="truncate font-display text-lg font-bold text-white sm:text-xl">
                {{ lightboxItem.title }}
              </h3>
            </div>
            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="ปิด"
              @click="closeLightbox"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div class="relative flex min-h-0 flex-1 items-center justify-center px-14 sm:px-20">
            <button
              v-if="lightboxItem.images.length > 1"
              type="button"
              class="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-4"
              aria-label="ภาพก่อนหน้า"
              @click.stop="showPrev"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <Transition
              mode="out-in"
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <img
                :key="lightboxItem.images[lightboxIndex]"
                :src="lightboxItem.images[lightboxIndex]"
                :alt="`${lightboxItem.title} - ภาพ ${lightboxIndex + 1}`"
                class="max-h-[calc(100vh-12rem)] max-w-full object-contain"
                @click.stop
              />
            </Transition>

            <button
              v-if="lightboxItem.images.length > 1"
              type="button"
              class="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-4"
              aria-label="ภาพถัดไป"
              @click.stop="showNext"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <footer class="shrink-0 space-y-4 px-4 pb-6 pt-2 sm:px-6">
            <div class="flex items-center justify-center gap-2">
              <button
                v-for="(_, index) in lightboxItem.images"
                :key="index"
                type="button"
                class="rounded-full transition-all"
                :class="
                  lightboxIndex === index
                    ? 'h-2.5 w-8 bg-brand-400'
                    : 'h-2.5 w-2.5 bg-white/40 hover:bg-white/60'
                "
                :aria-label="`ไปที่ภาพ ${index + 1}`"
                @click="goToSlide(index)"
              />
            </div>
            <p class="text-center text-sm text-white/70">
              {{ lightboxIndex + 1 }} / {{ lightboxItem.images.length }}
            </p>
          </footer>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
