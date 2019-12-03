import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Booking from '../components/Booking.vue'
import BookingSum from '../components/BookingSum.vue'
import mainPage from  '../components/mainPage.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  
  {
    path: '/about',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  },
  {
    path: '/bookingSum',
    name: 'bookingSum',
    component: BookingSum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
