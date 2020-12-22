import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.scss'
import router from './router'
import store from './store'
import axios from './common/js/api';
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
