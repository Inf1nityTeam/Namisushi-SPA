<template>
  <footer class="app-footer__wrapper">
    <div class="app-footer">
      <footer-logo/>
      <footer-phone v-if="windowWidth > 570"/>
      <footer-nav/>
      <footer-socials/>
    </div>
  </footer>
</template>

<script>
import FooterNav from '@/components/footer/FooterNav'
import FooterLogo from '@/components/footer/FooterLogo'
import FooterPhone from '@/components/footer/FooterPhone'
import FooterSocials from '@/components/footer/FooterSocials'

export default {
  name: 'app-footer',
  components: { FooterNav, FooterLogo, FooterPhone, FooterSocials },
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  }
}
</script>

<style scoped lang="scss">
.app-footer {
  position: relative;
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;

  height: 210px;
  @media screen and (max-width: 1800px) { height: 160px; }
  @media screen and (max-width: 1500px) { height: 150px; }
  @media screen and (max-width: 1100px) { height: 86px; }
  @media screen and (max-width: 570px) {
    padding-left: 90px;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  box-sizing: border-box;

  &__wrapper {
    width: 100%;
    height: 210px;
    @media screen and (max-width: 1800px) { height: 160px; }
    @media screen and (max-width: 1500px) { height: 150px; }
    @media screen and (max-width: 1100px) { height: 86px; }

    background-color: #242424;
  }

}
</style>
