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
            <ul class="nav">
                <li>tech</li>
                <li>tech</li>
                <li>tech</li>
                <li>tech</li>                
            </ul>            
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

    .nav li{
        display: inline-block;
        line-height: 130px;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        text-align: center;        
        box-shadow: inset 0px 0px 50px 10px rgba(255,255,255,0.67);
        color:white;
        font-size: 24px;
    }
    .nav li:hover{
        color:#ff9900;
    }

    .nav li:nth-child(1) {
        background-color:rgba(34, 34, 34, 0.89);        
    }

    .nav li:nth-child(2) {
        background-color:rgba(102, 255, 255, 0.79);
    }

    .nav li:nth-child(3) {
        background-color:rgba(102, 204, 102, 0.8);
    }

    .nav li:nth-child(4) {
        background-color:rgba(204, 204, 255, 0.87);
    }
    
</style>

