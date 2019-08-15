import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false


import axios from 'axios'
Vue.prototype.$axios= axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
