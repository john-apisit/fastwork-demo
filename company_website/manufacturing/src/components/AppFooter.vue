<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-brand-200 bg-brand-900 text-brand-100">
    <div class="section-container py-12">
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <div class="flex items-center gap-2">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-md bg-brand-700 text-sm font-bold text-accent-400"
            >
              PT
            </div>
            <span class="text-lg font-bold text-white">PrecisionTech</span>
          </div>
          <p class="mt-4 text-sm text-brand-300">{{ t('footer.tagline') }}</p>
        </div>

        <div>
          <h3 class="font-semibold text-white">Contact</h3>
          <ul class="mt-4 space-y-2 text-sm text-brand-300">
            <li>{{ t('footer.address') }}</li>
            <li>{{ t('footer.phone') }}</li>
            <li>{{ t('footer.email') }}</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-white">Links</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <RouterLink to="/catalog" class="text-brand-300 hover:text-white">
                {{ t('nav.catalog') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/standards" class="text-brand-300 hover:text-white">
                {{ t('nav.standards') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/documents" class="text-brand-300 hover:text-white">
                {{ t('nav.documents') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/quote" class="text-brand-300 hover:text-white">
                {{ t('nav.quote') }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-brand-700 pt-6 text-center text-sm text-brand-400">
        © {{ year }} PrecisionTech Manufacturing. {{ t('footer.rights') }}.
      </div>
    </div>
  </footer>
</template>
