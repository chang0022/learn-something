import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user-login'
import News from '@/components/news-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
