import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../pages/home.vue'
import petsPage from '../pages/pets.vue'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: 
  [
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/pets',
      name: 'pets',
      component: petsPage
    }
  ]
})

export default router