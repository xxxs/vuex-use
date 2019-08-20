import Vue from "vue"
import Vuex from 'vuex'
import actions from "./actions"
import mutations from "./mutations.js"
import getters from "./getters.js"
Vue.use(Vuex);
// 用export default 封装代码让外部可以引用
export default new Vuex.Store({
    state: {
        list: [],
        num: 999,
        aaa:888,
        datas:''

    },
    actions,
    getters,
    mutations
})