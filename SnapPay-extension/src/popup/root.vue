<template>
  <v-layout row wrap="">
    <v-flex xs12 sm12 md12 fixed>
      <v-card color="grey lighten-4" height="400px">
        <v-tabs v-model="tabs" fixed-tabs color="transparent">
          <v-tab class="primary--text">
            <router-link to="/">
              <v-icon>phone</v-icon>
            </router-link>
          </v-tab>
          <v-tab class="primary--text">
            <router-link to="/cart">
              <v-icon>favorite</v-icon>
            </router-link>
          </v-tab>
          <v-tab class="primary--text">
            <router-link to="/checkout">
              <v-icon>account_box</v-icon>
            </router-link>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs" class="white elevation-1">
          <v-tab-item v-for="i in 3" :key="i">
            <v-card height="352px">
              <transition name="slide-fade">
                <router-view/>
              </transition>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import Cart from "./components/Cart.vue";


Vue.use(Vuetify);
export default Vue.extend({
  data: () => ({
    active: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tabs: null
  }),
  methods: {
    tab () {
      chrome.tabs.create({ url: "pages/app.html" });
    }
  }
});
</script>

<style lang="scss">
div {
  color: blue;
}
</style>