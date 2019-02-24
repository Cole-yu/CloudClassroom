import "../assets/styles/experience.scss";

export default{
    data(){
        return {
            projectDate:"2017/10 - 2017/11",
            projectName:"重庆医药信息云门户",
            projectContent:"该企业ERP项目的主要功能模块分为流程管理，审批管理，知识中心，管理中心，个人中心等内容；与3名同事共同努力下完成了知识中心的的知识收藏，上传，我的分享，分享给我，回收站，荣誉墙，知识管理，权限查看及高级搜索等功能。"
        }
    },
    render(){
        return (
            <div id="experience">
                <div class="item">
                    <div class="item-left">
                    </div>
                    <div class="item-right">                    
                        <h1 class="title-center">项目经验</h1>                                                                    
                    </div>
                </div> 
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.projectDate}</div>
                            <div class="work-project">{this.projectName}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.projectContent}</p>                                              
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.projectDate}</div>
                            <div class="work-project">{this.projectName}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.projectContent}</p>                                              
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.projectDate}</div>
                            <div class="work-project">{this.projectName}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.projectContent}</p>                                              
                    </div>
                </div>
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.projectDate}</div>
                            <div class="work-project">{this.projectName}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.projectContent}</p>                                              
                    </div>
                </div>
            </div>
        )
    }
}