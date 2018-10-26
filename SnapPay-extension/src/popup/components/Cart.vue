<template>
    <v-layout row wrap="">
        <v-flex xs12>
            <v-card>
                <v-card-title primary-title>
                    <div class="cart">
                        <h2>Your Cart</h2>
                        <p v-show="!products.length">
                            <i>Please add some products to cart.</i>
                        </p>
                        <ul>
                            <li
                                v-for="product in products"
                                :key="product.id"
                            >{{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}</li>
                        </ul>
                        <p>Total: {{ total | currency }}</p>
                        <p>
                            <button
                                :disabled="!products.length"
                                @click="checkout(products)"
                            >Checkout</button>
                        </p>
                        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script lang="ts">
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex, { mapState, mapGetters } from 'vuex'

Vue.use(Vuex)

export default Vue.extend({
    name: 'Cart',
    computed: {
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    },
    methods: {
        checkout (products) {
            this.$store.dispatch('cart/checkout', products)
        }
    }
})
</script>

