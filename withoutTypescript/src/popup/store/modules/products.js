import axios from 'axios'
import api from '../../api'
// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    api().get('/products', { crossdomain: true }).then(r => {
      commit('SET_PRODUCTS', r.data)
    })
  }
}

// mutations
const mutations = {
  SET_PRODUCTS (state, products) {
    state.all = products
  },
  DECREMENT_PRODUCT_INVENTORY (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
