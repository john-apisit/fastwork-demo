import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

export function useSeo(page: 'home' | 'catalog' | 'standards' | 'documents' | 'quote') {
  const { t, locale } = useI18n()

  useHead({
    title: () => t(`seo.${page}.title`),
    meta: [
      {
        name: 'description',
        content: () => t(`seo.${page}.description`),
      },
      {
        property: 'og:title',
        content: () => t(`seo.${page}.title`),
      },
      {
        property: 'og:description',
        content: () => t(`seo.${page}.description`),
      },
      {
        property: 'og:locale',
        content: () => (locale.value === 'th' ? 'th_TH' : 'en_US'),
      },
    ],
    htmlAttrs: {
      lang: () => locale.value,
    },
  })
}
