<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const { locale } = useI18n()

function switchLocale(lang: 'th' | 'en') {
  setLocale(lang)
}
</script>

<template>
  <div class="inline-flex rounded-md border border-brand-200 bg-white p-0.5 text-sm">
    <button
      type="button"
      class="rounded px-3 py-1 font-medium transition"
      :class="locale === 'th' ? 'bg-brand-800 text-white' : 'text-brand-600 hover:text-brand-800'"
      @click="switchLocale('th')"
    >
      TH
    </button>
    <button
      type="button"
      class="rounded px-3 py-1 font-medium transition"
      :class="locale === 'en' ? 'bg-brand-800 text-white' : 'text-brand-600 hover:text-brand-800'"
      @click="switchLocale('en')"
    >
      EN
    </button>
  </div>
</template>
