<template>
    <div class="chunk">
        <div class="item">
            <h3 class="item-title">毕业院校</h3>
            <p class="item-value">{{university}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
       return {
           university:"上海立信会计金融学院"
       }
    }
}
</script>

<style lang="scss" scoped>
    .chunk{
        border:1px solid #ddd;
    }    
    .item{
        padding-left:30px;
        text-align: left;
    }
    .item-title{
        color:#ff9f20;
    }
    .item-value{
        color:white;
    }
</style>

