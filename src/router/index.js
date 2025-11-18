import { createRouter, createWebHistory, createMemoryHistory  } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'

import CarrerView from '@/views/CarrerView.vue'
import CookieInfo from '@/views/CookieInfo.vue'
import CarrerForm from '@/views/CarrerForm.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: ContactView,
  },
  {
    path: '/aplikuj',
    name: 'carrerfrom',
    component: CarrerForm,
  },
  {
    path: '/kariera',
    name: 'kariera',
    component: CarrerView,
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookieInfo,
  },
]
const isClient = typeof window !== 'undefined'

const router = createRouter({
    history: isClient ? createWebHistory() : createMemoryHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    }
  })
export default router;