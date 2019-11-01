// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios/axios'
import utils from './utils'
import {ToastPlugin, LoadingPlugin} from 'vux'

// require('./mock/mock.js')

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.prototype.$axios = axios
Vue.prototype.utils = utils
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
