import { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../components/Header.vue'
import Customer from '../components/Customer.vue'
import Invoice from  '../components/Invoice.vue'
import Userdata from  '../components/Userdata.vue'
import Profile from '../components/Profile.vue'

const routes = [
  {
    name: 'Header',
    component: Header,
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile,
  },
  {
    path:'/customer',
    name: 'Customer',
    component: Customer,
  },
  {
    path:'/invoice',
    name: 'Invoice',
    component: Invoice,
  },
  {
    path:'/userdata',
    name: 'Userdata',
    component: Userdata,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
