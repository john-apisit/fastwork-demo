import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'หน้าแรก',
        description:
          'บริษัทรับเหมาก่อสร้างและวิศวกรรม ให้บริการก่อสร้างอาคาร โรงงาน และโครงสร้างพื้นฐาน ด้วยทีมงานมืออาชีพ',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'เกี่ยวกับเรา',
        description: 'ประวัติ วิสัยทัศน์ และทีมงานของบริษัทรับเหมาก่อสร้างและวิศวกรรม',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'บริการ',
        description: 'บริการรับเหมาก่อสร้างครบวงจร อาคาร โรงงาน โครงสร้างพื้นฐาน Design & Build',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: {
        title: 'ผลงาน',
        description: 'ผลงานโครงการก่อสร้างที่ผ่านมา อาคารสำนักงาน โรงงาน สะพาน และโครงการที่พักอาศัย',
      },
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue'),
      meta: {
        title: 'ข่าวสาร',
        description: 'ข่าวสารและบทความด้านการก่อสร้าง มาตรฐานความปลอดภัย และเทรนด์อุตสาหกรรม',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'ติดต่อเรา',
        description: 'ติดต่อบริษัทรับเหมาก่อสร้าง สอบถามราคา หรือนัดหมายปรึกษาโครงการ',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
