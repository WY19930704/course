import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import index from '@/components/index'
import goods from '@/components/goods'
import selfLifting from '@/components/selfLifting'
import dispatching from '@/components/dispatching'
import exchange from '@/components/exchange'
import goodsDetail from '@/components/goodsDetail'
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
    },
    {
      path: '/selfLifting',
      name: 'selfLifting',
      component: selfLifting
    },
    {
      path: '/dispatching',
      name: 'dispatching',
      component: dispatching
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    }
  ]
})
