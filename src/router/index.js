import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ElectricCost',
      name: 'ElectricCost',
      component: () => import('../views/ElectricCost.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../components/Yuhan/Calculator.vue')
    }
  ]
})

export default router
