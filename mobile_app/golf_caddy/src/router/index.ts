import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/explore', name: 'explore', component: () => import('@/views/ExploreView.vue') },
    { path: '/caddy/:id', name: 'caddy', component: () => import('@/views/CaddyProfileView.vue') },
    { path: '/bookings', name: 'bookings', component: () => import('@/views/BookingsView.vue') },
    { path: '/chat/:bookingId', name: 'chat', component: () => import('@/views/ChatView.vue') },
    { path: '/credits', name: 'credits', component: () => import('@/views/CreditsView.vue') },
    { path: '/knowledge', name: 'knowledge', component: () => import('@/views/KnowledgeView.vue') },
    { path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue') },
    { path: '/profile', name: 'profile', component: () => import('@/views/ProfileView.vue') },
    { path: '/admin', name: 'admin', component: () => import('@/views/AdminContactView.vue') },
    { path: '/review/:bookingId', name: 'review', component: () => import('@/views/ReviewView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
