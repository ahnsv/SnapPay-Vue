import axios from 'axios'
// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    axios.get('/products').then(r => r.data).then(products => {
      'SET_PRODUCTS', products
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
