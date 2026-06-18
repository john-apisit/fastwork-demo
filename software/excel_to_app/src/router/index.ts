import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'ภาพรวม' },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/JobsView.vue'),
      meta: { title: 'รายการงาน' },
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: () => import('@/views/JobDetailView.vue'),
      meta: { title: 'รายละเอียดงาน' },
    },
    {
      path: '/assignment',
      name: 'assignment',
      component: () => import('@/views/AssignmentView.vue'),
      meta: { title: 'มอบหมายรถ' },
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('@/views/TrackingView.vue'),
      meta: { title: 'ติดตามสถานะ' },
    },
    {
      path: '/dealers',
      name: 'dealers',
      component: () => import('@/views/DealersView.vue'),
      meta: { title: 'ดีลเลอร์' },
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('@/views/ReportsView.vue'),
      meta: { title: 'รายงาน' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} — AutoLogistics` : 'AutoLogistics'
})

export default router
