export interface Product {
  id: number
  title: string
  subtitle: string
  inventory: number
  description: string
  imgSrc: string[]
  options: string[]
  price: number
  currency: string
  relatedProducts?: string[]
  ownerProfile?: string
}

export interface ProductsState {
  all: Product[]
}
