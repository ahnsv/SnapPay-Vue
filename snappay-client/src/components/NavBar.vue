<template>
    <div>
    <nav>
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'


export default Vue.extend({
    name: 'NavBar',
    data() {
    return {
      links: [
        {
          id: 0,
          text: 'Products',
          page:'/'
        },
        {
          id: 1,
          text: 'Cart',
          page:'/cart'
        },
        {
          id: 2,
          text: 'Checkout',
          page:'/checkout'
        }
      ]
    }
  }
})
</script>
<style scoped>
</style>

