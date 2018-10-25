const state = {
  isAuthenticated: false | true,
  authenticationData: null
}

const getters = {}

const actions = {}

const mutations = {
  SET_AUTHENTICATION_STATUS (state, status) {
    state.isAuthenticated = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
