import Vue from 'vue';
import VueRouter from 'vue-router';
import Initial from '../views/home/Initial.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Initial',
    component: Initial
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/home/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/home/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/system/Profile.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/system/Dashboard.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/system/Gallery.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/system/Detail.vue')
  },
  {
    path: '/following',
    name: 'Following',
    component: () => import('../views/system/Following.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
