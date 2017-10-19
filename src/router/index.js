import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Pages/HelloWorld.vue'
import About from '@/components/Pages/About.vue'
import Coins from '@/components/Pages/Coins.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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
