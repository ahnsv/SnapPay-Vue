import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { RootState, CartState, Cart } from '../../types'
import api, { initProducts } from '../../../api'

export const initCart: Cart = {
  products: initProducts,
  totalPrice: 0,
}

export const state: CartState = {
  cart: initCart,
}

export const CartModule: Module<CartState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
