import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/step1',
    name: 'Step1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step1.vue')
  },
  {
    path: '/step2',
    name: 'Step2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step2.vue')
  },
  {
    path: '/step3',
    name: 'Step3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
