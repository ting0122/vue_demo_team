import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eletricalPrice',
      name: 'eletricalPrice',
      component: () => import('../views/eletricalPrice.vue')
    }

  ]
})

export default router
