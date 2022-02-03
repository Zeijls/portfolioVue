import Vue from 'vue'
import VueRouter from 'vue-router'

import SzHome from '@/views/sz-home';
import SzContactPage from '@/views/sz-contact-page';
import SzPortfolio from '@/views/sz-portfolio';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SzHome
  },
  {
    path: '/contact',
    name: 'Contact',
    component: SzContactPage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: SzPortfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
