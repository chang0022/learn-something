import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user-login'
import News from '@/components/news-list'
import newsDetail from '@/components/news/news-detail'
import elTable from '@/components/table/el-table'

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
    },
    {
      path: '/news/:newsId',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/table',
      component: elTable,
      name: "elTable"
    }
  ]
})
