<template>
  <div id="banner" class="banner" ref="banner">
    <div class="banner__content">
      <div v-if="windowWidth > 1250" class="banner__btns">
        <drop-btn-group/>
      </div>
      <div class="banner__logo">
        <banner-logo/>
      </div>
      <div class="banner__image">
        <banner-image/>
      </div>
    </div>
    <div class="banner__bottom">
      <banner-bottom/>
    </div>
  </div>
</template>

<script>
import BannerLogo from "@/app/home/banner/BannerLogo";
import BannerImage from "@/app/home/banner/BannerImage";
import BannerBottom from "@/app/home/banner/BannerBottom";
import DropBtnGroup from "@/app/home/banner/dropBtn/DropBtnGroup";

export default {
  name: 'banner',
  components: { BannerLogo, BannerImage, BannerBottom, DropBtnGroup },
  computed: {
    isMenu () { return this.$store.state.isMenu },
    windowScroll () { return this.$store.state.windowScroll },
    windowWidth() { return this.$store.state.windowWidth }
  },
  data() {
    return {
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  beforeDestroy() { window.removeEventListener('scroll', this.scroll) },
  methods: {
    scroll: function () {
      this.$store.commit('setWindowScroll', pageYOffset) // TODO move to app.vue ?
      if (pageYOffset > this.$refs.banner.offsetHeight - 188) {
        if (!this.isMenu) this.$store.commit('setIsMenu', true)
      } else if (this.isMenu) this.$store.commit('setIsMenu', false)
    }
  }
}
</script>

<style scoped lang="scss">
$pt: 120px;
$dfh: calc(100vh - 240px);

.banner {
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;

  background: url(../../../assets/images/main/banner/banner-bg.png);
  background-size: 100% 100%;

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: $dfh;
    min-height: calc(768px - 240px);
    max-height: calc(1100px - 240px);

    @media screen and (max-width: 1260px) {
      height: calc(100vh - 240px);
      max-height: calc(940px - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      height: auto;
      max-height: inherit;
      min-height: inherit;
    }

  }

  &__content {
    display: flex;

    padding-top: $pt;
    margin: 0 auto;

    max-width: 1200px;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

  }

  &__logo {
    display: flex;
    align-items: center;

    width: calc(100% - 100px);
    height: $dfh;
    max-height: calc(1100px - 240px);
    min-height: calc(768px - 240px);

    @media screen and (max-width: 1260px) {
      height: calc(100vh - 240px);
      max-height: calc(940px - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      margin-top: -50px;
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      margin-top: 0;
      justify-content: center;
      max-height: inherit;
      min-height: inherit;
      height: auto;
      width: 100%;
    }

  }

  &__image {
    position: relative;

    display: flex;
    align-items: center;

    width: max-content;
    height: $dfh;
    min-height: calc(768px - 240px);
    max-height: calc(1100px - 240px);

    @media screen and (max-width: 1260px) {
      max-height: calc(940px - 240px);
      height: calc(100vh - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
      margin-top: 80px;
      max-height: 60vw;
      min-height: inherit;
      height: auto;
      width: 100%;
    }
    @media screen and (max-width: 601px) {
      margin-top: 0;
    }

  }

}
</style>
