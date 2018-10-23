import { MutationTree } from 'vuex'
import { CartState, Cart } from '../../types'

export const mutations: MutationTree<CartState> = {
  profileLoaded(state, payload: Cart) {
    state.status = 'pending'
    state.cart = payload
  },
  profileError(state) {
    state.status = 'error'
    state.cart = undefined
  },
}
