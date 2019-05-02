import wyPayVue from "./wy-vue-pay.vue"

const WyPay ={
    install(Vue,options){
        Vue.component(wyPayVue.name,wyPayVue)
    }
}
export default WyPay