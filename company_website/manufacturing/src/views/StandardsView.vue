<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { standards } from '@/data/content'

const { t } = useI18n()
useSeo('standards')

const processSteps = computed(() => {
  const steps = t('standards.processSteps')
  return Array.isArray(steps) ? steps : []
})
</script>

<template>
  <div class="py-16">
    <div class="section-container">
      <div class="max-w-2xl">
        <h1 class="section-title">{{ t('standards.title') }}</h1>
        <p class="section-subtitle">{{ t('standards.subtitle') }}</p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <article
          v-for="standard in standards"
          :key="standard.id"
          class="overflow-hidden rounded-xl border border-brand-200 bg-white shadow-sm"
        >
          <div class="relative aspect-[16/9]">
            <img
              :src="standard.image"
              :alt="t(`standards.${standard.id}.name`)"
              class="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute left-4 top-4 rounded-md bg-brand-900/90 px-3 py-1 text-xs font-bold text-accent-400"
            >
              {{ standard.icon }}
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-brand-900">
              {{ t(`standards.${standard.id}.name`) }}
            </h2>
            <p class="mt-2 text-sm text-brand-600">
              {{ t(`standards.${standard.id}.description`) }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-16 rounded-xl bg-brand-50 p-8 md:p-12">
        <h2 class="text-2xl font-bold text-brand-900">{{ t('standards.processTitle') }}</h2>
        <ol class="mt-8 space-y-4">
          <li
            v-for="(step, index) in processSteps"
            :key="index"
            class="flex items-start gap-4"
          >
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white"
            >
              {{ index + 1 }}
            </span>
            <span class="pt-1 text-brand-700">{{ step }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
