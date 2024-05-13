import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ElectricCost',
      name: 'ElectricCost',
      component: () => import('../views/Yuhan/ElectricCost.vue')
    }
  ]
})

export default router
