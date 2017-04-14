// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

import mock from '@/api/mock'
// import validate from '@/plugins/validate'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(Vuex)
// Vue.use(validate)

const store = new Vuex.Store({
  state: {
    userName: ''
  },
  mutations: {
    showUserName(state) {
      alert(state.userName);
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  template: '<App/>',
  components: { App }
})
