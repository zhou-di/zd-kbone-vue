import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import store from '../../store'
import Index from '../../pages/tabbar/index/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    // path: '/index',
    name: 'Index',
    component: Index,
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
