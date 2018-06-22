import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Login/Login.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/components/Login/Login.vue'], resolve),
      name: 'Login'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/Home/Home.vue'], resolve),
      children: [
        {
          path: '/shopList',
          component: resolve => require(['@/components/ShopManage/ShopManage.vue'], resolve)
        }
      ]
    },
    {
      path: '/content/:id',
      component: Content
    }
  ]
})
