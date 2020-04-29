import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'

  },
  {
    path: '/login',
    component: () => import('components/content/Login.vue')
  },
  {
    path: '/home',
    component: () => import('views/Home.vue')
  }

]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 从vuex中获取token
  // if (!token) next('/login')
  next()
})

export default router
