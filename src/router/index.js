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
      path: '/(home|index)?',
      name: 'Index',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/tabbar/index/index.vue'),
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/tabbar/me/index.vue'),
    },
    {
      path: '/page1',
      name: 'Page1',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/page1/App.vue'),
    },
    {
      path: '/page2',
      name: 'Page2',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/page2/App.vue'),
    },
    {
      path: '/page3',
      name: 'Page3',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/page3/App.vue'),
    },
    {
      path: '/page4',
      name: 'Page4',
      component: () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/page4/App.vue'),
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
