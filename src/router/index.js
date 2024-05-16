import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',                      //導輸入地址
      name: 'home',                   //目的名稱
      component: HomeView  ,           //目的的地方(元件)
    },
    {
      path: '/Taipei',
      name: 'Taipei',
      component: () => import("../views/Taipei.vue")
    },
    {
      path: '/Jilong',
      name: "Jilong",
      component: () => import("../views/Jilong.vue")
    },
    {
      path: '/NewTaipei',
      name: 'NewTaipei',
      component: () => import("../views/NewTaipei.vue")
    },

   
     {
      path: '/Taoyuan',
      name: 'Taoyuan',
      component: () => import("../views/Taoyuan.vue")
    },

    {
      path: '/Hsinchu',
      name: 'Hsinchu',
      component: () => import("../views/Hsinchu.vue") 
    },
    {
      path: '/Miaoli',
      name: 'Miaoli',
      component: () => import("../views/Miaoli.vue") 
    },
    {
      path: '/Taichung',
      name: 'Taichung',
      component: () => import("../views/Taichung.vue") 
     },
    {
      path: '/Yilan',
      name: 'Yilan',
      component: () => import("../views/Yilan.vue") 
    },
    {
      path: '/HsinchuCity',
      name: 'HsinchuCity',
      component: () => import("../views/HsinchuCity.vue") 
    },
    {
      path: '/Changhua',
      name: 'Changhua',
      component: () => import("../views/Changhua.vue") 
    },

    {
      path: '/Nantou',
      name: 'Nantou',
      component: () => import("../views/Nantou.vue") 
    },

    {
      path: '/Chiayi',
      name: 'Chiayi',
      component: () => import("../views/Chiayi.vue") 
    },

    {
      path: '/ChiayiCity',
      name: 'ChiayiCity',
      component: () => import("../views/ChiayiCity.vue") 
    },

    {
      path: '/Yunlin',
      name: 'Yunlin',
      component: () => import("../views/Yunlin.vue") 
    },

    {
    path: '/Tainan',
      name: 'Tainan',
      component: () => import("../views/Tainan.vue") 
    },

    {
      path: '/Kaohsiung',
        name: 'Kaohsiung',
        component: () => import("../views/Kaohsiung.vue") 
      },

    {
      path: '/Penghu',
        name: 'Penghu',
        component: () => import("../views/Penghu.vue") 
      },
      
    {
      path: '/Pingtung',
      name: 'Pingtung',
      component: () => import("../views/Pingtung.vue") 
      },
    
    {
      path: '/Taitung',
      name: 'Taitung',
      component: () => import("../views/Taitung.vue") 
      },

      {
        path: '/Hualian',
        name: 'Hualian',
        component: () => import("../views/Hualian.vue") 
        },

      {
        path: '/Kinmen',
        name: 'Kinmen',
        component: () => import("../views/Kinmen.vue") 
        },

      {
        path: '/Lienchiang',
        name: 'Lienchiang',
        component: () => import("../views/Lienchiang.vue") 
        },
      
      
      
  
  
  ]

})

export default router
