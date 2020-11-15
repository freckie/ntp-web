import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../views/Home.vue'
import Payments from '../views/Payments.vue'
import Details from '../views/Details.vue'
import Credit from '../views/Credit.vue'

Vue.use(VueRouter)

const routes = [
  /* Main Layout */
  {
    path: '/app',
    component: MainLayout,
    redirect: '/app/home',
    children: [
      {
        path: '/app/home',
        name: 'AppHome',
        component: Home
      },
      {
        path: '/app/payments',
        name: 'AppPayments',
        component: Payments
      },
      {
        path: '/app/details',
        name: 'AppDetails',
        component: Details
      },
      {
        path: '/app/credit',
        name: 'AppCredit',
        component: Credit
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
