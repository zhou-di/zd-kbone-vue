import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const List = () => import(/* webpackChunkName: "List" */'@/list/Index.vue')
const Detail = () => import(/* webpackChunkName: "Detail" */'@/detail/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(user-center)?',
    name: 'UserCenter',
    component: () => import(/* webpackChunkName: "Detail" */'@/user-center/Index.vue'),
  }, {
    path: '/native',
    name: 'Native',
    component: () => import(/* webpackChunkName: "Detail" */'@/native/Index.vue'),
  }, {
    path: '/user-center/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Detail" */'@/login/Index.vue'),
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/test/(home|index)',
    name: 'HomeTest',
    component: Home,
  }, {
    path: '/test/list/:id',
    name: 'List',
    component: List,
  }, {
    path: '/test/detail/:id',
    name: 'Detail',
    component: Detail,
  }],
})
