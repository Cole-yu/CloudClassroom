import wyPayVue from "./wy-vue-pay"

const WyPay={
    install(Vue,options){
        // 注册组件
        Vue.component(wyPayVue.name,wyPayVue)
    }   
}

// 导出，供页面 Vue.use(WyPay) 使用
export default WyPay
