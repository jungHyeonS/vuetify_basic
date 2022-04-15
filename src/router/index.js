import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from '../views/GridSystem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/grid-system',
    name: 'about',
    component: GridSystem
  }
]

const router = new VueRouter({
  routes
})

export default router
