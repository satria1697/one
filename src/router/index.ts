import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layout/BaseLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/home/HomeView.vue')
        },
        {
          path: '/product',
          children: [
            {
              path: ':id',
              name: 'product:id',
              component: () => import('../views/product/ProductView.vue')
            },
            {
              path: '',
              name: 'product:filter',
              component: () => import('@/views/product/filter/ProductFilterView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
