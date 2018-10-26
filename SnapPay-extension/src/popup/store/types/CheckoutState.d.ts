import { Cart } from './CartState'

export interface Checkout {
  cart: Cart
  isAuthenticated: boolean
}

export interface CheckoutState {
  status: 'Pending' | 'In Process' | 'failed' | 'success'
}
