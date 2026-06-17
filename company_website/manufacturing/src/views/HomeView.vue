<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { heroImage, aboutImage, factoryImage } from '@/data/content'

const { t } = useI18n()
useSeo('home')

const stats = [
  { value: '25+', label: 'stats.years' },
  { value: '200+', label: 'stats.clients' },
  { value: '50K', label: 'stats.capacity' },
  { value: '±0.01mm', label: 'stats.accuracy' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex min-h-[70vh] items-center">
      <img
        :src="heroImage"
        alt="Industrial manufacturing factory"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-brand-900/75" />
      <div class="section-container relative py-24">
        <h1 class="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-brand-200">
          {{ t('hero.subtitle') }}
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink to="/catalog" class="btn-primary">
            {{ t('hero.ctaCatalog') }}
          </RouterLink>
          <RouterLink to="/quote" class="btn-secondary">
            {{ t('hero.ctaQuote') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="border-b border-brand-200 bg-white py-12">
      <div class="section-container">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl font-bold text-brand-900">{{ stat.value }}</div>
            <div class="mt-1 text-sm text-brand-500">{{ t(stat.label) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="section-title">{{ t('about.title') }}</h2>
            <p class="section-subtitle">{{ t('about.text') }}</p>
            <ul class="mt-8 space-y-3">
              <li class="flex items-center gap-3 text-brand-700">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/20 text-accent-600">
                  ✓
                </span>
                {{ t('about.feature1') }}
              </li>
              <li class="flex items-center gap-3 text-brand-700">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/20 text-accent-600">
                  ✓
                </span>
                {{ t('about.feature2') }}
              </li>
              <li class="flex items-center gap-3 text-brand-700">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/20 text-accent-600">
                  ✓
                </span>
                {{ t('about.feature3') }}
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img
              :src="aboutImage"
              alt="Precision tools"
              class="col-span-2 h-48 w-full rounded-xl object-cover sm:h-64"
              loading="lazy"
            />
            <img
              :src="factoryImage"
              alt="Factory floor"
              class="h-32 w-full rounded-xl object-cover sm:h-40"
              loading="lazy"
            />
            <div class="flex h-32 items-center justify-center rounded-xl bg-brand-800 p-4 sm:h-40">
              <div class="text-center text-white">
                <div class="text-2xl font-bold text-accent-400">ISO 9001</div>
                <div class="mt-1 text-xs text-brand-300">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-brand-800 py-16">
      <div class="section-container text-center">
        <h2 class="text-2xl font-bold text-white sm:text-3xl">{{ t('catalog.title') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-brand-300">{{ t('catalog.subtitle') }}</p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink to="/catalog" class="btn-primary">{{ t('hero.ctaCatalog') }}</RouterLink>
          <RouterLink to="/documents" class="btn-secondary">{{ t('nav.documents') }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
