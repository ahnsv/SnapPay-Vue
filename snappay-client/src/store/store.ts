import * as Vuex from 'vuex'
import { State } from './states'
import { cart } from './cart/cart'

export const createStore = () =>
  new Vuex.Store<State>({
    modules: {
      cart,
    },
  })
