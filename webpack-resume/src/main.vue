<template>
    <div id="main">
        <component v-bind:is="currentTabComponent" @showChange="showChange"></component>
    </div>
</template>

<script>
import App from "./app.vue";
import Life from "./life.vue";
import Nav from "./nav.vue"

export default {    
    data(){
        return {
            currentTabComponent:"Life"
        }
    },
    components:{
        App,
        Life,
        Nav
    },
    methods:{
        showChange(data){
            this.currentTabComponent=data;
        }        
    }    
}
</script>

<style lang="scss" scoped>
    #main{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>


