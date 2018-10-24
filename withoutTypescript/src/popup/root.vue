<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12 fixed>
      <v-card color="grey lighten-4"
      height="400px"
      >
      <v-tabs
    centered
    color="cyan"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab>
      <router-link-to to="/">
      Products
      <v-icon>phone</v-icon>
      </router-link-to>
    </v-tab>

    <v-tab>
      <router-link-to to="/cart">
      Cart
      <v-icon>favorite</v-icon>
      </router-link-to>
    </v-tab>

    <v-tab>
      <router-link-to to="/checkout">
      Checkout
      <v-icon>account_box</v-icon>
      </router-link-to>
    </v-tab>
    <v-tab-item v-for="i in 3" :key="i">
      <v-card flat>
        <router-view/>
      </v-card>
    </v-tab-item>
      </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Cart from './components/Cart'

Vue.use(Vuetify)
export default {
  data: () => ({
    active: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  computed: { },
  created () { },
  mounted () { },
  methods: {
    tab () {
      chrome.tabs.create({ url: 'pages/app.html' })
    },
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>
<style lang="scss">
div {
  color: blue;
}
</style>