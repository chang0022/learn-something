// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import mock from '@/api/mock'
// import validate from '@/plugins/validate'

import UserModule from '@/store/modules/UserModule'
import NewsModule from '@/store/modules/NewsModule'
import EleModule from '@/store/modules/eleModule'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(ElementUI)
// Vue.use(validate)

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    news: NewsModule,
    ele: EleModule
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  template: '<App/>',
  components: {App}
})
