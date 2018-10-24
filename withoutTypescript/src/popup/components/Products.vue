<template>
    <v-layout row wrap>
        <v-card height="352px" width="100%">
            <v-list>
                <Product v-for="(item, index) in productsData" :key="index" pdata="item" />
            </v-list>
        </v-card>
    </v-layout>
</template>
<script>
import Product from "./Product";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
export default {
  name: "Products",
  data: () => {
    return {
      productsData: [
        {
          title: "iPhone XS",
          subtitle: "Pretty af",
          imgSrc: "../../../static/images/iphone-xs.jpg"
        },
        {
          title: "Galaxy Note 9",
          subtitle: "Pretty af",
          imgSrc: "../../../static/images/galaxy-note-9.jpg"
        },
        {
          title: "Pixel 3",
          subtitle: "Pretty af",
          imgSrc: "../../../static/images/pixel_3.jpg"
        }
      ]
    };
  },
  components: {
    Product
  }
};
</script>

