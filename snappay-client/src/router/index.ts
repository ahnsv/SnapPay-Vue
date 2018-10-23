import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Cart from '@/components/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart,
    },
  ],
})
