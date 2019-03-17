import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 mint 移动端UI框架的所有组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 只引入需要的 Switch 组件
// import { Switch } from 'mint-ui';

// 全局注册 Switch组件 的两种方式
// Vue.component(Switch.name, Switch);
// 或
// Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
