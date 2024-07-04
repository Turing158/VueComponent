import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/MainView.vue')
    },
    {
      name: 'pen',
      path: '/pen',
      component: () => import('../views/Pen.vue')
    },
    {
      name: 'animation',
      path: '/animation',
      component: () => import('../views/Animation.vue')
    },
    {
      name: 'simple',
      path: '/simple',
      component: () => import('../views/Simple.vue')
    },
    {
      name: 'CardDouble',
      path: '/cardDouble',
      component: () => import('../views/CardDouble.vue')
    },
    {
      name: 'Code',
      path: '/code',
      component: () => import('../views/CodeView.vue')
    },
    {
      name: 'Cropper',
      path: '/cropper',
      component: () => import('../views/CropperView.vue')
    }
  ]
})

export default router
