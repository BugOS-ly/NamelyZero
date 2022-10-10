import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/layout/Home.vue'
import LoginView from '@/views/login/Login.vue'
import WorldView from '@/views/world/World.vue'
import MyView from '@/views/my/My.vue'

const routes = [
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { auth: false, keepAlive: false }
  },
  {
    // 主页
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { auth: true, keepAlive: false }
  },
  {
    // 世界
    path: '/world',
    name: 'World',
    component: WorldView,
    meta: { auth: true, keepAlive: false }
  },
  {
    // 我的
    path: '/my/:userId',
    name: 'My',
    component: MyView,
    meta: { auth: true, keepAlive: false }
  }
]

// router对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // return 期望滚动到哪个的位置, false原位置
    return false
  }
})

// 全局前置路由守卫
// router对象在跳转页面前 to:去哪里 from:来自哪里 next:函数, 用于放行路由, 也能入参,可以改变放行路径
// router.beforeEach((to, from, next) => {
//   const loginUserStore = useLoginUserStore()

//   // 判断to是否需要权限
//   if (to.meta.auth) {
//     const access_token = getAccessTokenFromLocal()
//     // 用户未登录, 提示用户需要登录
//     if (
//       access_token === null ||
//       access_token === undefined ||
//       access_token === ''
//     ) {
//       ElMessage.warning('未登录, 请登录后操作!')
//       next('/login')
//       return
//     }
//     // 用户已登录, 发送请求判断access_token是否过期
//     checkToken().then((res: any) => {
//       if (isSuccess(res.code)) {
//         loginUserStore.reset()
//         next()
//       } else {
//         // 身份已过期, 响应拦截器会弹窗, 这里不需要弹窗
//         delAccessTokenFromLocal()
//         delRefreshTokenFromLocal()
//         next('/login')
//       }
//     })
//   } else {
//     loginUserStore.reset()
//     next()
//   }
// })

// // 全局后置路由守卫
// router.afterEach((to) => {

// })

export default router
