import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import '@/assets/base.css'

Vue.config.productionTip = false
import axios from "axios"
Vue.prototype.$axios = axios

Vue.filter("filterImg",(inp,size)=>{
  return inp.replace(/{size}/,size)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
