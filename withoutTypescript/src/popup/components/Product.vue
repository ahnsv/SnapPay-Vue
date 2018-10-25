<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list-tile>
          <h3>Product</h3>
          <v-list-tile-content>
            <v-list-tile-title v-html="pdata.title">{{ pdata.title }}</v-list-tile-title>
            <v-list-tile-sub-title v-html="pdata.subtitle">{{ pdata.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);
export default {
  name: "Product",
  data: () => {
    return {
      show: false
    };
  },
  props: {
    pdata: {
      type: [Object, String],
      required: true,
      default: () => { }
    }
  }
};
</script>

