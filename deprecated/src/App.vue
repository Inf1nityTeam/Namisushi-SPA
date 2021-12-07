<template>
  <div id="app">
    <router-view/>
    <login-modal/>
    <header-collapse/>
    <cart/>
    <cookie-popup/>
  </div>
</template>

<script>
import CookiePopup from "@/components/CookiePopup";
import LoginModal from "@/components/modals/LoginModal";
import HeaderCollapse from "@/components/header/components/HeaderCollapse";
import Cart from "@/app/cart/Cart";
import {productService} from "@/app/product/product.service";

export default {
  name: 'App',
  components: { LoginModal, HeaderCollapse, Cart, CookiePopup },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.resize()
  },
  created() {
    productService.getAll()
  },
  methods: {
    resize: function () {
      this.$store.commit('setWindowWidth', document.documentElement.clientWidth)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import 'assets/scss/style';
* { outline: none }
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
