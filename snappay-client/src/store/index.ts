import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import * as CartModule from './modules/cart/'
// import ProductModule from './modules/product/'

Vue.use(Vuex)

export interface RootState {
  version: string
}

export default new Vuex.Store({
  modules: {
    CartModule,
  },
})
