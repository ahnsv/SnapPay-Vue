<template>
    <div class="cart">
    <h1>Your Cart</h1>
    <p v-show="!cartProducts.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in cartProducts"
        :key="product.id">
        {{ product.name }} - {{ product.price }} x {{ product.count }}
      </li>
    </ul>
    <p>Total: {{ cartTotalPrice }}</p>
    <p><button :disabled="!cartProducts.length">Checkout</button></p>
    <!-- <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { Cart, CartState, Product } from '../store/types';
import { mapState, mapGetters } from 'vuex';
const namespace: string = 'cart';


// @Component
//     export default class CartDetail extends Vue {
//         @State('cart') cart: CartState;
//         @Action('fetchData', { namespace }) fetchData: any;
//         @Getter('cartProducts', { namespace }) cartProducts: Product[];
//         @Getter('cartTotalPrice', { namespace }) cartTotalPrice: Product[];

//         mounted() {
//             // fetching data as soon as the component's been mounted
//             this.fetchData();
//         }
//     }
const cartProducts: Product[] = [
  {
    id: 1,
    name: 'iPad 4 Mini',
    photo: [],
    description: 'The most interesting device',
    price: 500.01,
    options: ['black', '8GB'],
    count: 1,
  },
  {
    id: 2,
    name: 'H&M T-Shirt White',
    photo: [],
    description: 'For hipsters',
    price: 10.99,
    options: ['XL'],
    count: 1,
  },
  {
    id: 3,
    name: 'Charli XCX - Sucker CD',
    photo: [],
    description: 'he sucker',
    price: 19.99,
    options: [],
    count: 3,
  },
]
export default Vue.extend({
    data() {
        return {
            cartProducts
        }
    },
    computed: {
        cartTotalPrice(){
            this.cartProducts.reduce((sum: number, product: Product) => {
      return sum + product.price * product.count
    }, 0)
        }
    }
})


// export default {
//     computed: {
//         ...mapGetters('cart', {
//             products: 'cartProducts',
//             totalPrice: 'cartTotalPrice'
//         })
//     },
//     methods: {

//     }
// }

</script>
<style>
</style>

