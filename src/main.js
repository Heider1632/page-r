import Vue from 'vue'
import App from './App.vue'
import cookie from 'jquery.cookie'
import './assets/js/front.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
