<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { companyInfo } from '@/data/content'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()

const pageTitle = computed(() => route.meta.title as string)
const pageDescription = computed(() => route.meta.description as string)

useHead({
  titleTemplate: (title) =>
    title ? `${title} | ${companyInfo.name}` : `${companyInfo.name} | ${companyInfo.tagline}`,
})

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value },
    { property: 'og:title', content: `${pageTitle.value} | ${companyInfo.name}` },
    { property: 'og:description', content: pageDescription.value },
    { property: 'og:type', content: 'website' },
  ],
}))
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
