import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import StockDataPerYear from '../views/StockDataPerYear.vue'
import StockDataPerＭonth from '../views/StockDataPerＭonth.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/stockPerYear',
    name: 'stock-data-per-year',
    component: StockDataPerYear
  },
  {
    path: '/stockPerMonth',
    name: 'stock-data-per-month',
    component: StockDataPerＭonth
  },
  {
    path: '/booksRecommend',
    name: 'booksRecommend',
    component: () => import('../views/BooksRecommend.vue')
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
