<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue"
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: Cereal;
  src: url(../static/font/AirbnbCereal_W_Bk.e849748a.woff2);
}
@font-face {
  font-family: CerealBold;
  src: url(../static/font/AirbnbCereal_W_XBd.6877179a.woff2);
}
#app {
  font-family: CerealBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
