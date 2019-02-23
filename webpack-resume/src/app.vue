<template>
    <div id="main">
        <div id="test">{{text}}</div>   
        <!-- 使用{{}}双大括号进行变量数据绑定  -->
        <Header></Header>
    </div>    
</template>

<script>
import Header from "./components/header.jsx";
export default {
    data(){
        return {
            text:"yfx"
        }
    },
    components:{
        Header
    }
}
</script>

<style lang="scss">
    #test{
        color:red;
    }
</style>

