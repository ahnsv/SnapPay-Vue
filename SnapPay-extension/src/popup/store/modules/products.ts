import axios from 'axios'
import api from '../../api'
import { ProductsState, Product } from '../types/ProductsState'
import { storeBuilder } from './index'
import { Context } from 'vm'

// initial state
const state: ProductsState = {
  all: [],
}

const b = storeBuilder.module<ProductsState>('ProductsModule', state)
const stateGetter = b.state()

// getters
const getters = {}
namespace Getters {
  export const getters = {}
}

// actions
namespace Actions {
  async function getAllProducts(context: Context, payload: Product[]) {
    const data: Product[] = await api()
      .get('/products', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then(r => r.data)
    Mutations.mutations.SET_PRODUCTS(data)
  }
}

// mutations
namespace Mutations {
  function SET_PRODUCTS(state: ProductsState, products: Product[]) {
    state.all = products
  }
  function DECREMENT_PRODUCT_INVENTORY(
    state: ProductsState,
    { id }: { id: number }
  ) {
    const product: Product = state.all.find(product => product.id === id)
    product.inventory--
  }

  export const mutations = {
    SET_PRODUCTS: b.commit(SET_PRODUCTS),
    DECREMENT_PRODUCT_INVENTORY: b.commit(DECREMENT_PRODUCT_INVENTORY),
  }
}

export default {
  get state() {
    return stateGetter
  },
  mutations: Mutations.mutations,
  Actions,
}
