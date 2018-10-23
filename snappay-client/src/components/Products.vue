<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            <Product :productInfo=$product></Product>
            {{ product.name }} - {{ product.price }}
        </li>
    </ul>
</template>
<script lang="ts">
import Vue from 'vue'
import Product from './Product.vue'
import {mapState, mapActions} from 'vuex'
export default Vue.extend({
    name: 'Products',
    components: {
        Product
    },
    props: ['productInfo'],

    created() {
        this.$store.dispatch('products/getProducts')
    }
})
</script>
