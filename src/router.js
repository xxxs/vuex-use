import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
 
    {
      path: '/',
      name: 'first',
      component: () => import(/* webpackChunkName: "about" */ './components/first.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import( './views/city.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( './views/test.vue')
    }
  ]
})
