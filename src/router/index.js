import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/auth/daftar',
    name: 'auth.register',
    component: () => import('@/views/auth/Register.vue')
  },
  {
    path: '/auth/masuk',
    name: 'auth.login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/auth/lupa-password',
    name: 'auth.forget',
    component: () => import('@/views/auth/Forget.vue')
  },
  {
    path: '/tim/:id/diskusi',
    name: 'tim.diskusi',
    component: () => import('@/views/team/Discussion.vue')
  },
  {
    path: '/tim/:id/tugas',
    name: 'tim.tugas',
    component: () => import('@/views/team/Assignment.vue')
  },
  {
    path: '/profil/setelan',
    name: 'profil.setelan',
    component: () => import('@/views/profile/Setting.vue')
  },
  {
    path: '/profil/tim',
    name: 'profil.tim',
    component: () => import('@/views/profile/Team.vue')
  },
  {
    path: '/profil/kelas',
    name: 'profil.kelas',
    component: () => import('@/views/profile/Class.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
