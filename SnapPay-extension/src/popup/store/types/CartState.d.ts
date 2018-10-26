import { Product } from './ProductsState'
export interface Cart {
  items: Product[]
}

export interface CartState {
  cart: Cart
  status: 'Pending' | 'In Process' | 'failed' | 'success'
}
