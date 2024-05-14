import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TaiwanChargeMap',
      name: 'TaiwanChargeMap',
      component: () => import('../views/TaiwanChargeMap.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../views/animation.vue')
    },
  ]
})

export default router
