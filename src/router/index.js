import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from '../views/GridSystem.vue'
import GridListPage from "@/views/GridListPage.vue"
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
  },
  {
    path: '/grid-list',
    name: 'gridlist',
    component: GridListPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
