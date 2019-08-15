##  基于 vue-cli3 的 vuex demo  

```
// start
npm install 

npm run serve 

npm run build  
```


##  使用 vuex 
 
  0.  安装  npm install vuex 
  1. 在src目录下新建文件夹 store  
  2. store目录下新建文件 
      index.js(存储状态 并建立依赖关系 )  
      actions.js(触发mutations中的方法 请求数据写在这里)  
      getters.js(状态获取逻辑)
      mutations.js (操作逻辑) 
  3. 在main.js 中引入依赖  
 ```
    import Vue from 'vue'
    import App from './App.vue'
    import router from './router'
    import store from './store/index'

    new Vue({ router,store,render: h => h(App)}).$mount('#app')
```
 4. 在store / index.js中建立依赖关系 
 ```
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
        aaa:888
    },
    actions,
    getters,
    mutations
})
```
   5.  在state中声明变量 
   6. 使用getters 获取状态
   7. 使用mutations更新状态
   8. 使用actions提交更新

 


*******************************

vuex 怎么进行状态管理
vuex 使用store对象 来保存和管理整个应用的状态 
store对象 包括以下方法:

 - state 存放状态 存放数据的地方  所有的数据都在这里  

 - getters 用来获得date里面的数据  其实就是get数据  

 - mutations  用来更新状态的一些逻辑在里面 操作数据的js写在里面 , 简单来说 以前的js的方法 你要写在vue组件的methods里面 现在写在mutations里 , 虽然有一些js的逻辑在里面 但不能直接操作mutations

 - actions 用来操作mutations的 
   - 同步    @click(store.commit);  // 同步提交
   - 异步    @click(store.dispatch);  // 异步提交

modules  可以将store模块化 

官方说法

 - state  驱动应用的数据源 (所有的状态保存在这)
 - view  以声明的方式state映射到视图 (改变状态 引起表现层变化)
 - actions 响应在view上的用户输入导致的状态变化  (事件改变状态)

 <!-- 现在可以确定 -->
  vuex的可信就是store对象
  每个vue应用只能有一个store对象 

  vuex 官方图
  1. 从组件出发
  2. 组件(call)调用了actions 和后台去交互一些数据
  3. actions dispatch(派发) mutations;
  4. mutations去触发了状态state的改变
  5. state去更新了components

  注意: 
   - 数据流是单向的
   - 组件能够调用action
   - actions可以改变state
   - state是响应式 只要state被更新name组件将同步更新 

 ```
<script>
// 演示结构  
const store = new Vuex.Store({
    state:{
        // 这里存状态 数据
    },
    getter:{
        // state的计算属性
        // 从state中获得数据
    },
    mutations:{
        // 一些更新state的逻辑
    },
    actions:{
        // 触发mutations
    }
})
</script>
 ```
   
