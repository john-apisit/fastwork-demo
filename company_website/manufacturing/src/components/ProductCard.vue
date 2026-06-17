<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import type { Product } from '@/data/content'

const props = defineProps<{
  product: Product
}>()

const { t, locale } = useI18n()

const name = computed(() => t(`products.${props.product.id}.name`))
const description = computed(() => t(`products.${props.product.id}.description`))
const specs = computed(() =>
  locale.value === 'th' ? props.product.specs.th : props.product.specs.en,
)
</script>

<template>
  <article
    class="group overflow-hidden rounded-xl border border-brand-200 bg-white shadow-sm transition hover:shadow-md"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="product.image"
        :alt="name"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-brand-900">{{ name }}</h3>
      <p class="mt-2 text-sm text-brand-600">{{ description }}</p>
      <ul class="mt-4 space-y-1">
        <li
          v-for="(spec, index) in specs"
          :key="index"
          class="flex items-center gap-2 text-xs text-brand-500"
        >
          <span class="h-1 w-1 shrink-0 rounded-full bg-accent-500" />
          {{ spec }}
        </li>
      </ul>
      <div class="mt-5 flex gap-2">
        <RouterLink
          :to="{ name: 'quote', query: { product: product.id } }"
          class="btn-primary flex-1 py-2 text-xs"
        >
          {{ t('catalog.requestQuote') }}
        </RouterLink>
      </div>
    </div>
  </article>
</template>
