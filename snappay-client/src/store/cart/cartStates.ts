export interface Product {
  id: number
  name: string
  unitPrice: number
  count: number
}

export interface ProductInCart {
  product: Product
  isSelected: boolean
}

export interface CartState {
  items: ProductInCart[]
  totalAmount: number
}
