import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue'),
    },
    {
      path: '/standards',
      name: 'standards',
      component: () => import('@/views/StandardsView.vue'),
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/DocumentsView.vue'),
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import('@/views/QuoteView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
