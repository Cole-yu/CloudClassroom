<template>
    <div class="chunk">
        <h3 class="title">我擅长的</h3>        
        <div class="items">
            <div class="item-value">{{skill}}</div>
        </div>        
    </div>
</template>

<script>
export default {
    data(){
        return {
            skill:"Wbepack"
        }
    }
}
</script>

<style lang="scss" scoped>
    .chunk{
        padding-left: 30px;
        text-align: left;
    }
    .title{
        color:#ff9f20;
    }
    .items{

    }
    .item-value{
        color:white;
        padding:10px 0; 
    }
</style>
