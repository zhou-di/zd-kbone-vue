import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import kboneAPI from 'kbone-api'
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import '@/style/index.css'

Vue.config.productionTip = false

sync(store, router)

Vue.use(kboneAPI)
Vue.use(KboneUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
