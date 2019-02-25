<template>
    <div class="chunk">
       <InformationItems v-for="value in infors" v-bind:key="value.index" v-bind:informationItems="value"></InformationItems>
    </div>
</template>

<script>
import InformationItems from './informationItem.vue';

export default{
    components:{
        InformationItems
    },
    data(){
        return {
            infors:[
                {
                    index:0,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:1,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:2,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:3,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:4,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:5,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                }
            ]            
        }
    }
}
</script>

<style lang="scss" scoped>
    .chunk{
        position: relative;
    }        
</style>
