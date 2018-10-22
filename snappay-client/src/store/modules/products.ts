import api from '../../api/'
import * as types from '../mutation-types'
import { Product, ActionContextBasic, AddToCartPayload } from '..'
import { resolve } from 'dns'

export interface ProductsPayload {
  products: Product[]
}

export interface ProductsState {
  all: Product[]
}

// initial state
const initState = {
  all: [],
}

const getters = {
  getProducts: (state: ProductsState) => state.all,
}

const actions = {
  fetchItemLists(context: ActionContextBasic) {
    const promise = new Promise((res, rej) => {
      return api.fetchItemLists()
    })
    promise
      .then(res => {
        context.commit(types.RECEIVE_PRODUCTS, res)
      })
      .catch(err => {
        console.log('---------------ERROR:' + err.message)
      })
  },
}

const mutations = {
  [types.RECEIVE_PRODUCTS](state: ProductsState, payload: ProductsPayload) {
    state.all = payload.products
  },
  [types.ADD_TO_CART](state: ProductsState, payload: AddToCartPayload) {
    const product = state.all.find(p => {
      return p.id === payload.id
    })
    try {
      // check sum for inventory check from db
    } catch (error) {
      throw new Error('Not Available')
    }
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
