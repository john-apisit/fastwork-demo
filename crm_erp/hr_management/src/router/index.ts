import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Executive Dashboard' },
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/views/EmployeesView.vue'),
      meta: { title: 'Employee Management' },
    },
    {
      path: '/leave',
      name: 'leave',
      component: () => import('@/views/LeaveView.vue'),
      meta: { title: 'Leave Management' },
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('@/views/AttendanceView.vue'),
      meta: { title: 'Time Attendance' },
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('@/views/ExpenseView.vue'),
      meta: { title: 'Expense Claim' },
    },
    {
      path: '/approvals',
      name: 'approvals',
      component: () => import('@/views/ApprovalsView.vue'),
      meta: { title: 'Approval Workflow' },
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/DocumentsView.vue'),
      meta: { title: 'Document Management' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} — HR Management` : 'HR Management — Back Office Demo'
})

export default router
