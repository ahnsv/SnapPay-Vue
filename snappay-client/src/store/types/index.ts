export interface RootState {
  version: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  phone?: string
}

export interface Product {
  name: string
  id: number
  price: number
  photo: string[]
  count: number
  description?: string
  options?: string[]
  relatedProducts?: string[]
  ownerProfile?: string
}

export interface ProductState {}

export interface Cart {
  products: Product[]
  totalPrice: number
}

export interface CartState {
  cart?: Cart
  status?: 'checkedOut' | 'pending' | 'error'
}
