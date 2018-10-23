import { ActionTree } from 'vuex'
import axios from 'axios'
import { CartState, Cart, RootState } from '../../types'

export const actions: ActionTree<CartState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://....',
    }).then(
      response => {
        const payload: Cart = response && response.data
        commit('cartLoaded', payload)
      },
      error => {
        console.log(error)
        commit('cartError')
      }
    )
  },
}
