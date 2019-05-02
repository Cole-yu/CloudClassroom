import Vue from 'vue'
import App from './App'
import router from './router'

// 引入qa.js(quickajax)
import qa from "./assets/unit/Qa"

// 通过原型绑定把 qa 注入到 Vue 中，避免在每个组件中都引入qa文件；同时配置接口地址
Vue.prototype.qa = qa(['./static/get/girlFriend.json','http://localhost:3000/post/userName']);

console.log(Vue.prototype.qa);
// console.log(Vue);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
