import { CartState } from './CartState'
import { UserState } from './UserState'
import { ProductsState } from './ProductsState'
import { CheckoutState } from './CheckoutState'

export interface RootState {
  CartModule: CartState
  UserModule: UserState
  ProductsModule: ProductsState
  CheckoutModule: CheckoutState
}
