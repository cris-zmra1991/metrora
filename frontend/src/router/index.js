import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue' 
import LoginPage from '@/pages/LoginPage.vue' 
import RegisterPage from '@/pages/RegisterPage.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
  },
  { 
    path: '/login', 
    name: 'Login',
    component: LoginPage 
  },
  { 
    path: '/register', 
    name: 'Register',
    component: RegisterPage 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
