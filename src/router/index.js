import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/pages/subPackages/home/Index.vue')
const List = () => import(/* webpackChunkName: "List" */'@/pages/subPackages/list/Index.vue')
const Detail = () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/detail/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/(index)?',
      name: 'Index',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/tabbar/index/index.vue'),
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/tabbar/me/index.vue'),
    },
    // {
    //   path: '/(home|home2)?',
    //   name: 'Home',
    //   component: Home,
    // },
    {
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
