import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel);

import Vuelidate from 'vuelidate'

//Plugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
