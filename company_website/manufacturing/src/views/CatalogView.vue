<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import ProductCard from '@/components/ProductCard.vue'
import { products, type Product } from '@/data/content'

const { t } = useI18n()
useSeo('catalog')

type Filter = 'all' | Product['category']

const activeFilter = ref<Filter>('all')

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'catalog.filterAll' },
  { key: 'cnc', label: 'catalog.filterCnc' },
  { key: 'metal', label: 'catalog.filterMetal' },
  { key: 'assembly', label: 'catalog.filterAssembly' },
  { key: 'custom', label: 'catalog.filterCustom' },
]

const filteredProducts = computed(() =>
  activeFilter.value === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter.value),
)
</script>

<template>
  <div class="py-16">
    <div class="section-container">
      <div class="max-w-2xl">
        <h1 class="section-title">{{ t('catalog.title') }}</h1>
        <p class="section-subtitle">{{ t('catalog.subtitle') }}</p>
      </div>

      <div class="mt-10 flex flex-wrap gap-2">
        <button
          v-for="filter in filters"
          :key="filter.key"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium transition"
          :class="
            activeFilter === filter.key
              ? 'bg-brand-800 text-white'
              : 'bg-brand-100 text-brand-700 hover:bg-brand-200'
          "
          @click="activeFilter = filter.key"
        >
          {{ t(filter.label) }}
        </button>
      </div>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
