<template>
    <div>
        <NavBar></NavBar>
        <Products></Products>
        <button class="button is-info">Add to Cart</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import NavBar from './NavBar.vue'
import Products from './Products.vue'

export default Vue.extend({
    name: 'mainView',
    components: {
        NavBar,
        Products
    },
    methods: mapActions('cart', [
        'updateCartItem'
    ])

})
</script>
