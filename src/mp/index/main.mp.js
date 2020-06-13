import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import store from '../../store'
//
import Index from '@/pages/tabbar/index/index.vue'
import Page1 from '@/pages/subPackages/page1/App.vue'

Vue.use(Router)
Vue.use(KboneUI)

const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    // path: '/index',
    name: 'Index',
    component: Index,
  }, {
    path: '/page1',
    // path: '/index',
    name: 'Page1',
    component: Page1,
    // component: () => import(/* webpackChunkName: "Detail" */'@/pages/subPackages/page1/App.vue'),
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
