<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { tutorials } from '@/data/mockData'

const categories = ['ทั้งหมด', 'การใช้งานแอป', 'มารยาท', 'การแต่งกาย', 'สภาพอากาศ', 'การให้ทิป']
const selectedCategory = ref('ทั้งหมด')
const selectedVideo = ref<string | null>(null)

const filtered = () => {
  if (selectedCategory.value === 'ทั้งหมด') return tutorials
  return tutorials.filter((t) => t.category === selectedCategory.value)
}

function openVideo(youtubeId: string) {
  selectedVideo.value = youtubeId
}
</script>

<template>
  <div class="pb-4">
    <AppHeader title="Knowledge Center" :show-back="false" />

    <div class="mb-4 px-5">
      <p class="text-sm text-stone-500">
        วิดีโอแนะนำการใช้งาน มารยาท การแต่งกาย และเคล็ดลับสำหรับนักกอล์ฟในประเทศไทย
      </p>
    </div>

    <div class="hide-scrollbar mb-4 flex gap-2 overflow-x-auto px-5">
      <button
        v-for="cat in categories"
        :key="cat"
        class="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition"
        :class="selectedCategory === cat ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="space-y-3 px-5">
      <button
        v-for="tutorial in filtered()"
        :key="tutorial.id"
        class="card flex w-full gap-3 overflow-hidden text-left transition hover:shadow-premium"
        @click="openVideo(tutorial.youtubeId)"
      >
        <div class="relative h-24 w-32 shrink-0">
          <img :src="tutorial.thumbnail" :alt="tutorial.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
              <svg class="ml-0.5 h-4 w-4 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
          <span class="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[10px] text-white">
            {{ tutorial.duration }}
          </span>
        </div>
        <div class="py-2 pr-3">
          <span class="badge bg-gold-100 text-gold-700">{{ tutorial.category }}</span>
          <p class="mt-1 text-sm font-medium text-forest-800">{{ tutorial.title }}</p>
          <p class="text-xs text-stone-400">{{ tutorial.titleEn }}</p>
        </div>
      </button>
    </div>

    <div v-if="selectedVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" @click.self="selectedVideo = null">
      <div class="w-full max-w-[360px] overflow-hidden rounded-2xl bg-black">
        <div class="relative pb-[56.25%]">
          <iframe
            class="absolute inset-0 h-full w-full"
            :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <button class="w-full py-3 text-sm text-white" @click="selectedVideo = null">ปิด</button>
      </div>
    </div>
  </div>
</template>
