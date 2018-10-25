<template>
    <v-layout row wrap="">
        <v-card height="352px" width="100%">
            <v-list>
                <Product v-for="(item, index) in products" :key="index" pdata="item"/>
            </v-list>
        </v-card>
    </v-layout>
</template>
<script>
import Product from "./Product";
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex, { mapState, mapActions } from 'vuex'
export default {
    name: 'Products',
    data: () => {
        return {
            productsData: [
            ]
        }
    },
    components: {
        Product
    },
    computed: mapState({
        products: state => state.products.all
    }),
    methods: mapActions('cart', [
        'addProductToCart'
    ]),
    created () {
        this.$store.dispatch('products/getAllProducts')
    }

}
</script>

