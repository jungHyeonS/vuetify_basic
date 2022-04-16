import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from '../views/GridSystem.vue'
import GridListPage from "@/views/GridListPage.vue"
import BreakPoint from "@/views/BreakPoint.vue";
import typography from "@/views/typography.vue";
import Table from "@/views/table.vue";
import Forms from "@/views/Forms.vue";
import Buttons from "@/views/buttons.vue";
import icons from "@/views/icons.vue";

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
  },
  {
    path: '/break-point',
    name: 'BreakPoint',
    component: BreakPoint
  },
  {
    path: '/typography',
    name: 'typography',
    component: typography
  }
  ,
  {
    path: '/Table',
    name: 'Table',
    component: Table
  },
  {
    path: '/Forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/Buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/icons',
    name: 'icons',
    component: icons
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
