import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import * as API from '@/api'

// 完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Header from './components/Header'
Vue.component("Header",Header)

// 使用elementUI组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
