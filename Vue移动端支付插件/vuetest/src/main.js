import Vue from 'vue'
import App from './App.vue'

import WyPay from "wy-vue-pay02"
Vue.use(WyPay);

new Vue({
  el: '#app',
  render: h => h(App)
})
