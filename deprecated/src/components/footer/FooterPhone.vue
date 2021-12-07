<template>
  <div class="app-footer__phone">
    <img src="@/assets/images/icons/phone.svg" alt="">
    <a href="tel:+380717009791">+38 071-700-91-97</a>
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
.app-footer__phone {
  color: #FFFFFF;
  padding-left: 20px;
  padding-right: 20px;

  > img {
    margin-bottom: 20px;
    object-fit: contain;
    @media screen and (max-width: 1800px) {
      width: 20px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 1100px) {
      width: 13px;
      height: 13px;
      margin-bottom: 6px;
    }
  }

  > a {
    display: block;

    font-family: PT Sans Narrow, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    text-decoration: none;

    letter-spacing: 0.03em;

    color: #FFFFFF;
    @media screen and (max-width: 1500px) {
      font-size: 15px;
      line-height: 18px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

}
</style>
