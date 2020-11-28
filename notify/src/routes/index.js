import Vue from 'vue'
import Vuex from 'vuex'
import Home from '../modules/Home'

Vue.use(Vuex)

export default router

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../pages/404')
  },
  {
    path: '/notify',
    name: 'Notify',
    component: () => import('../pages/NotifyPage')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

