<template>
  <div class="banner-bottom">
    <btn-to-menu v-scroll-to="{ el: '#menu', offset: -70 }" />
    <a v-if="windowWidth > 768"
       class="banner-bottom--social"
       :href="$config.socials.vk"
       target="_blank"
       style="margin-left: auto;margin-right: 20px">
      <img src="@/assets/images/icons/vk.svg" alt="">
    </a>
    <a v-if="windowWidth > 768"
       class="banner-bottom--social"
       :href="$config.socials.ig"
       target="_blank">
      <img src="@/assets/images/icons/ig.svg" alt="">
    </a>
  </div>
</template>

<script>
import BtnToMenu from "@/components/utils/BtnToMenu";

export default {
  name: 'banner-bottom',
  components: { BtnToMenu },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  }
}
</script>

<style scoped lang="scss">
.banner-bottom {
  height: 120px;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    padding-top: 25px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 16px;
  }

  &--social {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: 9px 5px 37px #000000;

    z-index: 1;
  }

}
</style>
