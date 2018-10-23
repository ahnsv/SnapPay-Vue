import { GetterTree } from 'vuex'
import { Product, CartState, RootState } from '../../types'

export const getters: GetterTree<CartState, RootState> = {
  // get all cart products
  cartProducts(state): Product[] {
    return state.cart.products
  },
  // fuzzy search in the cart
  // TODO: implement fuzzy search here
  cartProductsSearch(state, keyword: string): Product[] {
    try {
      return state.cart.products
    } catch (error) {}
  },
  // get total price
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((sum, product) => {
      return sum + product.price * product.count
    }, 0)
  },
}
