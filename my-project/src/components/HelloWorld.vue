<template>
  <div class="hello">
    <a href="https://study.163.com/course/courseLearn.htm?courseId=1209144836#/learn/live?lessonId=1278731112&courseId=1209144836" target="_blank">教学视频地址</a>
    <h1>{{ girlFriendData }}</h1>  
    <h2 style="color:red;">{{ userNameData }}</h2>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg : 'Welcome to Your Vue.js App',
      girlFriendData : "",
      userNameData : ""
    }
  },
  mounted:function(){

    // 高级请求写法
    // this.qa 返回一个实例对象_vueob, v(this)表示绑定到当前HelloWorld组件，此时 _vueob 代表了 HelloWorld 这个组件实例

    // girlFriend 是接口所在的文件名 ["./static/get/girlFriend.json"]
    // 自动将接口返回的数据绑定到 【 接口名 + Data 】 的 data属性中
    // 注意：_vueob[girlFriendData] 就是 HelloWorld组件data下的 girlFriendData ；打印显示为 _vueob._data.girlFriendData
    this.qa.v(this).girlFriend({
      data : {
        a:1
      },
      success : function(res){            // 设置了回调函数，会在将响应结果绑定到数据之前，执行这里的操作
        return res.data.name;
      }
    });

    this.qa.v(this).userName({
      block : false,                      // false 表示不阻止同时或多次请求；改为true后,无法获取到 post 请求
      type : "post",                      // 请求类型
      data : {                            // 参数
        userName : "yfx",
        age : 18
      },
      success : function(res){            // 回调函数
        console.log(res);
        console.log(res.data);
        return res.data;
      }
    });

    // 传统请求写法
    // axios.get(url).then(()=>{
    //    // TODO
    // });
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
