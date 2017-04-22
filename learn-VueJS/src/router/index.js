import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user-login'
import News from '@/components/news-list'
import newsDetail from '@/components/news/news-detail'
import elTable from '@/components/table/el-table'
import elIndex from '@/components/elmentui/el-index'
import elHot from '@/components/elmentui/el-hot'

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
      path: '/eltable',
      component: elTable,
      name: "elTable"
    },
    {
      path: '/elindex',
      component: elIndex,
      name: "elIndex",
      children: [
        {
          path: 'hot',
          component: elHot,
          name: "elHot"
        }
      ]
    }
  ]
})
