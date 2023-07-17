import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from "@/views/CityView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    },
  },
  {
    path: '/city',
    name: 'CityView',
    component: CityView,
    meta: {
      title: 'Weather'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
