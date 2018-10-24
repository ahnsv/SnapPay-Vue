import Router from 'vue-router'
import Vue from 'vue'
import Products from '../components/Products.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
