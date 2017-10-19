import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home.vue'
import About from '@/components/Pages/About.vue'
import Coins from '@/components/Pages/Coins.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
