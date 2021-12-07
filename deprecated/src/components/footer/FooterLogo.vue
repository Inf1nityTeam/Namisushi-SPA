<template>
  <div class="app-footer__logo">
    <div style="position: relative">
      <router-link to="/">
        <img v-if="windowWidth > 660" src="@/assets/images/logo/logo-footer.png" alt="">
        <img v-else src="@/assets/images/logo/logo-circle.png" alt="">
      </router-link>
      <a class="c" href="mailto:es.bogdan.hlyan@gmail.com">made by Bogdan Khlyan, 2021</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footer-logo',
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  }
}
</script>

<style scoped lang="scss">
.app-footer__logo {
  //position: relative;
  text-align: left;
  @media screen and (max-width: 570px) {
    position: absolute;
    left: 20px;
  }

  img {
    object-fit: contain;
    height: 100px;
    @media screen and (max-width: 1800px) { height: 80px; }
    @media screen and (max-width: 1100px) { height: 50px; }
    @media screen and (max-width: 660px) { height: 40px; }
  }

  .c {
    position: absolute;
    bottom: -10px;
    left: 0;

    width: max-content;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;

    text-align: center;
    letter-spacing: 0.01em;

    color: #FFFFFF;

    @media screen and (max-width: 1100px) {
      bottom: -5px;
      font-size: 8px;
      line-height: 10px;
    }
    @media screen and (max-width: 660px) {
      bottom: -8px;
    }
  }

}
</style>
