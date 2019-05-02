<template>
  <div id="app">
    <img src="./assets/logo.png" @click="showPanel">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <!-- <mt-switch v-model="value"></mt-switch> -->
    <wy-vue-pay :payOptions="payOptions" @inputOk="oks"></wy-vue-pay>
  </div>
</template>

<script>
import WyVuePay from "./lib/wy-vue-pay.vue"

export default {
  name: 'app',
  components:{
    WyVuePay
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:true,
      payOptions:{
        isShow:true,
        pwdLength:4,
        pressKeyBackground:"red"
      }
    }
  },
  methods: {
    oks(res){
      console.log(res)
      setTimeout(()=>{
        this.payOptions.isShow = false
      },1000)
    },
    showPanel(){
      this.payOptions.isShow = true
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
