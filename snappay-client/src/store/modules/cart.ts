import { Commit } from 'vuex'
import api from '../../api/'
import * as types from '../mutation-types'
import { CartProduct, CheckoutStatus, AddToCartPayload } from '../index'
import { Product } from '../'

interface CheckoutFailurePayload {
  savedCartItems: Product[]
}

export interface CartState {
  added: Product[]
  checkoutStatus: CheckoutStatus
}

// initial state
const initState: CartState = {
  added: [],
  checkoutStatus: null,
}

// getters
const getters = {
  checkoutStatus: (state: CartState) => state.checkoutStatus,
  addedList: (state: CartState) => state.added,
  getProductByID: (state: CartState, id: number) => {
    return state.added.find(item => {
      return item.id === id
    })
  },
}

// actions
// TODO: need to work on actions in liason with api/index.ts
const actions = {
  updateCartItem: (state, id) => {
    let item = getters.getProductByID(state, id)
    api.updateItem(item)
  },
}

// mutations
const mutations = {
  [types.ADD_TO_CART](state: CartState, payload: AddToCartPayload) {
    state.checkoutStatus = null
    const record = state.added.find(p => p.id === payload.id)
    if (!record) {
      state.added.push(record)
    } else {
      record.count++
    }
  },

  [types.CHECKOUT_REQUEST](state: CartState) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS](state: CartState) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE](state: CartState, payload: CheckoutFailurePayload) {
    // rollback to the cart saved before sending the request
    state.added = payload.savedCartItems
    state.checkoutStatus = 'failed'
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
