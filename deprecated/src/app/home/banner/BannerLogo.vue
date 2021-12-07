<template>
  <div class="banner-logo">
    <h1>японский <br> ресторан</h1>
    <img v-if="windowWidth > 600" src="@/assets/images/main/banner/namisushi.png" alt="">
    <img v-else src="@/assets/images/logo/logo-banner-mobile.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'banner-logo',
  components: {  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  }
}
</script>

<style scoped lang="scss">
.banner-logo {

  h1 {
    width: max-content;
    margin-top: 0;
    margin-left: 140px;
    margin-bottom: 80px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 53px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #F8AC55;

    @media screen and (min-width: 1250px) and (max-height: 820px) {
      margin-top: 80px;
    }
    @media screen and (max-width: 1060px) {
      margin-left: 90px;
      font-size: 42px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 920px) {
      margin-top: 90px;
      margin-left: 70px;
      font-size: 38px;
    }
    @media screen and (max-width: 820px) {
      margin-left: 60px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 auto;
      font-size: 30px;

      > br { display: none }

    }
    @media screen and (max-width: 420px) {
      font-size: 26px;
    }

  }

  img {
    display: block;
    margin-left: 140px;

    @media screen and (max-width: 1060px) {
      margin-left: 90px;
      width: 280px;
      object-fit: contain;
    }
    @media screen and (max-width: 920px) {
      margin-left: 70px;
      width: 250px;
      object-fit: contain;
    }
    @media screen and (max-width: 920px) {
      margin-left: 60px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    @media screen and (max-width: 768px) {
      width: 50vw;
      margin-top: 15px;
      margin-bottom: 35px;
      margin-left: auto;
      margin-right: auto;
      //margin: 0 auto;
    }
  }

}
</style>
