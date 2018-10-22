import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart, { CartState } from './modules/cart'
import products, { ProductsState } from './modules/products'

Vue.use(Vuex)

export interface Product {
  id: number
  name: string
  count: number
  photo: string
  price: number
  description: string
  options: string[]
  possibleDeliveryDate?: Date
  relatedProducts?: string[]
  ownerProfile?: string[]
}

export interface CartProduct {
  products: Product[]
  price: number
}

export type CheckoutStatus = 'successful' | 'failed' | null

export interface ActionContextBasic {
  commit: Commit
  dispatch: Dispatch
}

export interface AddToCartPayload {
  id: number
}

export interface State {
  cart: CartState
  products: ProductsState
}

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    cart,
    products,
  },
})
