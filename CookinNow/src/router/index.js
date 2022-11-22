import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'homeadmin',
      component: HomeAdmin,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,_,next)=> {
  const token = localStorage.getItem('token')
  if(to.meta.requiresAuth && !token) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
