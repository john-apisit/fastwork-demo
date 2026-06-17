<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { documents } from '@/data/content'

const { t } = useI18n()
useSeo('documents')

function downloadUrl(id: string) {
  return `/documents/${id}.pdf`
}
</script>

<template>
  <div class="py-16">
    <div class="section-container">
      <div class="max-w-2xl">
        <h1 class="section-title">{{ t('documents.title') }}</h1>
        <p class="section-subtitle">{{ t('documents.subtitle') }}</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article
          v-for="doc in documents"
          :key="doc.id"
          class="flex items-start gap-5 rounded-xl border border-brand-200 bg-white p-6 shadow-sm"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600"
          >
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 12h8v2H8v-2zm0 4h5v2H8v-2z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <h2 class="font-semibold text-brand-900">
              {{ t(`documents.items.${doc.id}.name`) }}
            </h2>
            <p class="mt-1 text-sm text-brand-600">
              {{ t(`documents.items.${doc.id}.description`) }}
            </p>
            <p class="mt-2 text-xs text-brand-400">
              {{ doc.fileSize }} · {{ t('documents.updated') }} {{ doc.updatedAt }}
            </p>
            <a
              :href="downloadUrl(doc.id)"
              download
              class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-500"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {{ t('documents.download') }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
