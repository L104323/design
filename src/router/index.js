import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/Index'
import my from '@/components/My'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:index
        },
        {
          path:'/my',
          name:'my',
          component:my
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
