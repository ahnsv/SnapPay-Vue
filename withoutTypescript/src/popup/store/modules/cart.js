// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('SET_CHECKOUT_STATUS', null)
    // empty cart
    commit('SET_CART_ITEMS', { items: [] })
    shop.buyProducts(
      products,
      () => commit('SET_CHECKOUT_STATUS', 'successful'),
      () => {
        commit('SET_CHECKOUT_STATUS', 'failed')
        // rollback to the cart saved before sending the request
        commit('SET_CART_ITEMS', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('SET_CHECKOUT_STATUS', null)
    // check if authenticated
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('PUSH_PRODUCTS_TO_CART', { id: product.id })
      } else {
        commit('INCREMENT_ITEM_QUANTITY', cartItem)
      }
      // remove 1 item from stock
      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      )
    }
  }
}

// mutations
const mutations = {
  PUSH_PRODUCTS_TO_CART (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  INCREMENT_ITEM_QUANTITY (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  SET_CART_ITEMS (state, { items }) {
    state.items = items
  },

  SET_CHECKOUT_STATUS (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
