import Vue from 'vue'
import App from './App.vue'
import VueResumable from 'vue-resumable'

Vue.config.productionTip = false

Vue.use(VueResumable)

new Vue({
  render: h => h(App),
}).$mount('#app')
