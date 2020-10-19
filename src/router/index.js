import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from '../views/Bar.vue'
import Soiree from '../views/Soiree.vue'
import Profiletype from '../views/Profiletype.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bar',
    component: Bar
  },
  {
    path: '/soiree',
    name: 'Soiree',
    component: Soiree
  },
  {
    path: '/Profiletype',
    name: 'Profiletype',
    component: Profiletype
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
