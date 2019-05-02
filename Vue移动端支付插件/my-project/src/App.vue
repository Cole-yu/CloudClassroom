<template>
  <div id="app">
    <img src="./assets/logo.png" @click="showPanel">
    <mt-switch v-model="value"></mt-switch>
    <wy-vue-pay :payOptions="payOptions" @inputOK="oks"></wy-vue-pay>
    <router-view/>    
  </div>
</template>

<script>
import WyVuePay from './lib/wy-vue-pay';
export default {
  name: 'App',
  data(){
    return {
      value : true,
      payOptions:{        
        isShow : true,       // 开发环境使用，生产环境下需要删除
        // isShow : false,   // 生产环境
        pwdLength:4,
        pressKeyBackground:"red"
      }
    }
  },
  components:{
    WyVuePay
  },
  mounted(){
    
  },
  methods:{
    showPanel(){
      this.payOptions.isShow = true;
    },
    oks(res){
      console.log(res);
      // setTimeout中 this指向了全局对象window
      // setTimeout(function(){
      //   this.payOptions.isShow = false;
      // },3000);
      setTimeout(()=>{
        this.payOptions.isShow = false;        
      },3000);
    }
  }
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
</style>
