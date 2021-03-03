import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import moment from 'moment'//导入文件

Vue.filter('getTime', function(value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})


Vue.prototype.$bus= new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
