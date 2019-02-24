import "../assets/styles/education.scss";

export default{
    data(){
        return {
            educationContent:"专业描述：在大学期间所学的课程有《计算机组成原理与系统结构》、《数据结构》、《微型计算机技术》、《软件测试》、《计算机操作系统》、《c++程序设计》、《软件工程》、《设计模式》等",
            educationDate:"2012/9-2016/6",
            educationUniversity:"上海立信会计金融学院"
        }
    },
    render(){
        return (
            <div id="education">
                <div class="item">
                    <div class="item-left">
                    </div>
                    <div class="item-right">                    
                        <h1 class="title-center">教育经历</h1>                                                                    
                    </div>
                </div> 
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.educationDate}</div>
                            <div class="work-project">{this.educationUniversity}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.educationContent}</p>                                              
                    </div>
                </div> 
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.educationDate}</div>
                            <div class="work-project">{this.educationUniversity}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.educationContent}</p>                                              
                    </div>
                </div> 
                <div class="item">
                    <div class="item-left">
                        <div class="work-events">
                            <div class="work-time">{this.educationDate}</div>
                            <div class="work-project">{this.educationUniversity}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <p class="content">{this.educationContent}</p>                                              
                    </div>
                </div>                            
            </div>
        )
    }
}