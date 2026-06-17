import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layout/AppLayout.vue'),
      children: [
        { path: '', name: 'dashboard', component: () => import('@/views/DashboardView.vue') },
        { path: 'inventory', name: 'inventory', component: () => import('@/views/InventoryView.vue') },
        { path: 'warehouse', name: 'warehouse', component: () => import('@/views/WarehouseView.vue') },
        { path: 'purchase-orders', name: 'purchase-orders', component: () => import('@/views/PurchaseOrdersView.vue') },
        { path: 'goods', name: 'goods', component: () => import('@/views/GoodsView.vue') },
        { path: 'scanner', name: 'scanner', component: () => import('@/views/ScannerView.vue') },
        { path: 'movements', name: 'movements', component: () => import('@/views/MovementsView.vue') },
        { path: 'shipments', name: 'shipments', component: () => import('@/views/ShipmentsView.vue') },
        { path: 'reports', name: 'reports', component: () => import('@/views/ReportsView.vue') },
      ],
    },
  ],
})

export default router
