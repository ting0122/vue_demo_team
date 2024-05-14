import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
// import HomeView from '../views/HomeView.vue'
=======

>>>>>>> Yuhan

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
<<<<<<< HEAD
      path:'/oilInformation',
      name:'oilInformation',
      component: () => import('../views/oilInformation.vue')
=======
      path: '/ElectricCost',
      name: 'ElectricCost',
      component: () => import('../views/ElectricCost.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../components/Yuhan/Calculator.vue')
>>>>>>> Yuhan
    }
  ]
})

export default router
