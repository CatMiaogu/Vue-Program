/*
 * @Author: zhaotao
 * @Date: 2021-03-26 12:54:08
 * @LastEditTime: 2021-04-15 20:41:44
 * @LastEditors: zhaotao
 * @Description: In User Settings Edit
 * @FilePath: \vue_program\vue-program\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { auth: true } // 此路由需要验证
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { auth: true }
    }
  ]
})
// 路由拦截：检查是否登录，未登录则跳转到登录页面
router.beforeEach((to, _, next) => {
  // 过滤需要验证的路由
  if (to.matched.some(m => m.meta.auth)) {
    // 该判断非常重要，没有的话会导致栈溢出报错
    if (to.name === 'Login') {
      next()
    } else {
      if (store.state.isLogin === true) {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    next()
  }
})

export default router
