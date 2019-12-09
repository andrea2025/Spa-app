import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Booking from '../components/Booking.vue'
import BookingSum from '../views/BookingSum.vue'
import edit from '../components/edit.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/bookingSum',
    name: 'bookingSum',
    component: BookingSum
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router
