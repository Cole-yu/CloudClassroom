<template>
    <div class="main">
        <div class="left">
            <Photo></Photo>
            <Information></Information>
            <Skill></Skill>
        </div>
        <div class="right">
            <AboutMe></AboutMe>
            <ThindLink></ThindLink>
            <Experience></Experience>            
            <Education></Education>                       
        </div>        
    </div>    
</template>

<script>
import Photo from "./components/photo.vue";
import Information from "./components/information/information.vue";
import Skill from "./components/skill.vue";
import AboutMe from "./components/aboutMe.jsx";
import ThindLink from "./components/thirdLink.vue";
import Experience from "./components/experience.jsx";
import Education from "./components/education.vue";

export default {
    data(){
        return {
            text:"yfx"
        }
    },
    components:{
        Photo,
        Information,
        Skill,
        AboutMe,
        ThindLink,
        Experience,
        Education                   
    }
}
</script>

<style lang="scss" scoped>    
    .main{
        position: relative;     
        width: 100%;        
        overflow: hidden;
    }
    .left{
        width: 400px;
        height: 100%;
        float: left;
        background-color: #0e0e0e;
        margin-bottom: -2000px;
        padding-bottom: 2020px;
    }    

    .right{                
        padding-left:400px;
        height: 100%;
        background-color: white;
        margin-bottom: -2000px;
        padding-bottom: 2000px;
    }        
</style>

