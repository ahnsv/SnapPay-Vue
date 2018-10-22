import { CartProduct } from '../store'

import { Product } from '../store/'

const initProducts: Product[] = [
  {
    id: 1,
    name: 'iPad 4 Mini',
    photo: 'none',
    description: 'The most interesting device',
    price: 500.01,
    options: ['black', '8GB'],
    count: 1,
  },
  {
    id: 2,
    name: 'H&M T-Shirt White',
    photo: 'none',
    description: 'For hipsters',
    price: 10.99,
    options: ['XL'],
    count: 1,
  },
  {
    id: 3,
    name: 'Charli XCX - Sucker CD',
    photo: 'none',
    description: 'he sucker',
    price: 19.99,
    options: [],
    count: 3,
  },
]

export default {
  fetchItemLists: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: initProducts })
      }, 1000)
    })
  },
  createItem: (newData: Product) => {
    return new Promise(resolve => {
      setTimeout(() => {
        let max = 0
        initProducts.forEach(item => {
          if (item.id > max) max = item.id
        })

        initProducts.push(newData)

        resolve()
      }, 1000)
    })
  },
  updateItem: (data: Product) => {
    return new Promise(resolve => {
      setTimeout(() => {
        initProducts.find(item => {
          return item.id === data.id
        }).name = data.name
        resolve()
      }, 1000)
    })
  },
  deleteItem: id => {
    return new Promise(resolve => {
      setTimeout(() => {
        for (let i = 0; i < initProducts.length; i++) {
          if (initProducts[i].id === id) {
            initProducts.splice(i, 1)
            resolve()
            break
          }
        }
      }, 1000)
    })
  },
}
