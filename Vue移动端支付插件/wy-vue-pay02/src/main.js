import Vue from 'vue'
import App from './App.vue'
// 引入全部组件

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App)
})
