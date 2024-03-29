import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/daftar',
    name: 'auth.register',
    component: () => import('@/views/auth/Register.vue')
  },
  {
    path: '/daftar/sukses',
    name: 'auth.register.success',
    component: () => import('@/views/auth/RegisterSuccess.vue')
  },
  {
    path: '/aktivasi/sukses',
    name: 'auth.activation.success',
    component: () => import('@/views/auth/ActivationSuccess.vue')
  },
  {
    path: '/masuk',
    name: 'auth.login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/lupa-password',
    name: 'auth.forget',
    component: () => import('@/views/auth/Forget.vue')
  },
  {
    path: '/reset-password/:id',
    name: 'auth.reset',
    component: () => import('@/views/auth/Reset.vue')
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
