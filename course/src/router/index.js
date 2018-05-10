import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import index from '@/components/index'
import goods from '@/components/goods'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: {
        title: '登录页'
      },
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})
