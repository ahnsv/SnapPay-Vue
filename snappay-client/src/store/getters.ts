import { GetterTree, Getter } from 'vuex'
import { State, CartProduct } from './'

const cartProducts: Getter<State, any> = (state: State) => {
  return state.cart.added.map(shape => {
    const product = state.products.all.find(p => p.id === shape.id)
    if (product) {
      const cartProduct: CartProduct = {
        products: [],
        price: shape.price,
      }
      return cartProduct
    }
  })
}

const getProductList: Getter<State, any> = (state: State) => {
  return state.products.all
}

const getProductById: Getter<State, any> = (state: State, id: number) => {
  return state.products.all.find(item => {
    return item.id === id
  })
}

const getterTree: GetterTree<State, any> = {
  cartProducts,
  getProductList,
  getProductById,
}

export default getterTree
