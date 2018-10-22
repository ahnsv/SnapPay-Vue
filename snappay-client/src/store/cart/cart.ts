import { ActionContext, Store } from 'vuex'
import { State as RootState } from '../states'
import { CartState, Product, ProductInCart } from './cartStates'
import { getStoreAccessors } from '../index'

type CartContext = ActionContext<CartState, RootState>

export const cart = {
  namespaced: true,

  state: {
    items: [],
    totalAmount: 0,
  },

  getters: {
    getProductNames(state: CartState) {
      return state.items.map(item => item.product.name)
    },

    getItemsByStatus(state: CartState) {
      return (status: boolean) =>
        state.items.filter(item => item.isSelected === status)
    },

    getTotalAmountWithoutDiscount(state: CartState) {
      return state.items.reduce(
        (total, item) => total + item.product.unitPrice,
        0
      )
    },
  },

  mutations: {
    reset(state: CartState) {
      state.items = []
      state.totalAmount = 0
    },

    appendItem(
      state: CartState,
      item: { product: Product; atTheEnd: boolean }
    ) {
      state.items.push({ product: item.product, isSelected: false })
    },

    setTotalAmount(state: CartState, totalAmount: number) {
      state.totalAmount = totalAmount
    },

    selectProducts(state: CartState, productNames: string[]) {
      for (const productName of productNames) {
        state.items.find(
          item => item.product.name === productName
        )!.isSelected = true
      }
    },
  },

  actions: {
    async updateTotalAmount(
      context: CartContext,
      discount: number
    ): Promise<number> {
      const totalBeforeDiscount = readTotalAmountWithoutDiscount(context)

      // Imagine this is a server API call to compute the discounted value:
      await new Promise((resolve, _) => setTimeout(() => resolve(), 500))
      const totalAfterDiscount = totalBeforeDiscount * discount

      commitSetTotalAmount(context, totalAfterDiscount)

      return totalAfterDiscount
    },

    async selectAvailableItems(context: CartContext): Promise<void> {
      // Imagine this is a server API call to figure out which items are available:
      await new Promise((resolve, _) => setTimeout(() => resolve(), 500))

      const availableProductNames = readProductNames(context)
      commitSelectProducts(context, availableProductNames)
    },

    async SelectAvailablieItemsAndUpdateTotalAmount(
      context: CartContext,
      discount: number
    ): Promise<void> {
      await dispatchSelectAvailableItems(context)
      await dispatchUpdateTotalAmount(context, discount)
    },
  },
}

const { commit, read, dispatch } = getStoreAccessors<CartState, RootState>(
  'cart'
)

const getters = cart.getters

export const readProductNames = read(getters.getProductNames)
export const readItemsByStatus = read(getters.getItemsByStatus)
export const readTotalAmountWithoutDiscount = read(
  getters.getTotalAmountWithoutDiscount
)

const actions = cart.actions

export const dispatchUpdateTotalAmount = dispatch(actions.updateTotalAmount)
export const dispatchSelectAvailableItems = dispatch(
  actions.selectAvailableItems
)
export const dispatchSelectAvailablieItemsAndUpdateTotalAmount = dispatch(
  actions.SelectAvailablieItemsAndUpdateTotalAmount
)

const mutations = cart.mutations

export const commitReset = commit(mutations.reset)
export const commitAppendItem = commit(mutations.appendItem)
export const commitSetTotalAmount = commit(mutations.setTotalAmount)
export const commitSelectProducts = commit(mutations.selectProducts)
