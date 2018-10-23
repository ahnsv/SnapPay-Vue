<template>
    <div class="cart">
    <h2>Your Cart</h2>
    <!-- <p v-show="!products.length"><i>Please add some products to cart.</i></p> -->
    <ul>
      <li
        v-for="product in cartProducts"
        :key="product.id">
        {{ product.name }} - {{ product.price }} x {{ product.count }}
      </li>
    </ul>
    <p>Total: {{ cartTotalPrice }}</p>
    <!-- <p><button :disabled="!products.length">Checkout</button></p> -->
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


@Component
    export default class CartDetail extends Vue {
        @State('cart') cart: CartState;
        @Action('fetchData', { namespace }) fetchData: any;
        @Getter('cartProducts', { namespace }) cartProducts: Product[];
        @Getter('cartTotalPrice', { namespace }) cartTotalPrice: Product[];

        mounted() {
            // fetching data as soon as the component's been mounted
            this.fetchData();
        }
    }

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
