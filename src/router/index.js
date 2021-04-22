import Vue from 'vue'
import VueRouter from 'vue-router'
import StockDataPerＭonth from '../views/StockDataPerＭonth.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: StockDataPerＭonth
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
