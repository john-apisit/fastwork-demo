<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import QuoteForm from '@/components/QuoteForm.vue'

const { t } = useI18n()
const route = useRoute()
useSeo('quote')

const initialProduct = computed(() => {
  const product = route.query.product
  return typeof product === 'string' ? product : undefined
})
</script>

<template>
  <div class="py-16">
    <div class="section-container">
      <div class="mx-auto max-w-2xl">
        <div class="text-center">
          <h1 class="section-title">{{ t('quote.title') }}</h1>
          <p class="section-subtitle mx-auto">{{ t('quote.subtitle') }}</p>
        </div>

        <div class="mt-12 rounded-xl border border-brand-200 bg-white p-6 shadow-sm sm:p-8">
          <QuoteForm :initial-product="initialProduct" />
        </div>
      </div>
    </div>
  </div>
</template>
