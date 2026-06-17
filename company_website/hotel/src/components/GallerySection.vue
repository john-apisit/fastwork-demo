<script setup lang="ts">
import { ref, computed } from 'vue'
import { galleryImages, galleryCategories } from '../data/content'

const activeCategory = ref('all')
const lightboxImage = ref<string | null>(null)

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') return galleryImages
  return galleryImages.filter((img) => img.category === activeCategory.value)
})

function openLightbox(src: string) {
  lightboxImage.value = src
}

function closeLightbox() {
  lightboxImage.value = null
}
</script>

<template>
  <section id="gallery" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-gold-500 tracking-widest uppercase text-sm mb-3">Gallery</p>
        <h2 class="section-heading">แกลเลอรีรูปภาพ</h2>
        <p class="section-subheading">
          สำรวจบรรยากาศและสิ่งอำนวยความสะดวกของ Azure Bay Resort
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="cat in galleryCategories"
          :key="cat.id"
          type="button"
          class="px-4 py-2 rounded-full text-sm transition-colors"
          :class="
            activeCategory === cat.id
              ? 'bg-ocean-700 text-white'
              : 'bg-sand-100 text-gray-600 hover:bg-sand-200'
          "
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <button
          v-for="image in filteredImages"
          :key="image.id"
          type="button"
          class="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
          @click="openLightbox(image.src)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/30 transition-colors flex items-end p-3">
            <span class="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {{ image.alt }}
            </span>
          </div>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <button
          type="button"
          class="absolute top-4 right-4 text-white text-3xl hover:text-gold-400"
          aria-label="ปิด"
          @click="closeLightbox"
        >
          ×
        </button>
        <img
          :src="lightboxImage"
          alt="Gallery preview"
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
          @click.stop
        />
      </div>
    </Teleport>
  </section>
</template>
