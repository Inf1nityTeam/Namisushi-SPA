<template>
  <div class="widgets"
       v-loading="loading"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgb(255, 255, 255)">
    <div class="widgets__vk" v-if="windowWidth > 1000">
      <div id="vk_groups" ref="vkWidget"></div>
    </div>
    <div class="widgets__map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.4532860143613!2d37.79709961564441!3d48.00495187921313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0905c8f5652c1%3A0x7dc0dc62269af13a!2z0YPQuy4g0KPQvdC40LLQtdGA0YHQuNGC0LXRgtGB0LrQsNGPLCAzMywg0JTQvtC90LXRhtC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4MzAwMA!5e0!3m2!1sru!2sua!4v1618687034749!5m2!1sru!2sua"
          width="100%"
          height="300"
          style="border:0;border-radius: 8px"
          allowfullscreen=""
          loading="lazy"
          @load="handleLoadFrame"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widgets',
  data() {
    return {
      loading: true
    }
  },
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  },
  watch: {
    windowWidth () { this.$nextTick(() => this.renderVkWidget()) }
  },
  mounted() {
    if (this.windowWidth !== null) this.renderVkWidget()
  },
  methods: {
    handleLoadFrame() {
      setTimeout(() => this.loading = false, 500)
    },
    r: function (width, height = '300') {
      /*eslint-disable no-undef*/
      this.$refs.vkWidget.innerHTML = ''
      VK.Widgets.Group('vk_groups', {
        mode: 4,
        width: width,
        height: height
      }, 196997705)
    },
    renderVkWidget: function () {
      if (this.$refs.vkWidget && this.$refs.vkWidget.innerHTML === '') {
        this.r('355')
      }
      // if (this.$refs.vkWidget.offsetWidth === 300 && this.windowWidth > 1000) {
      //   this.r('355')
      // } else if (this.$refs.vkWidget.offsetWidth === 355 && this.windowWidth < 1000) {
      //   this.r('300')
      // } else if (this.$refs.vkWidget.innerHTML === '') {
      //   this.r(this.windowWidth > 1000 ? '355' : '300')
      // }
    }
  }
}
</script>

<style scoped lang="scss">
.widgets {
  display: flex;
  margin-top: 30px;

  > .widgets__vk {
    width: 355px;
  }

  > .widgets__map {
    width: 100%;
    padding-left: 30px;
    @media screen and (max-width: 1000px) {
      padding-left: 0;
    }
  }

}
</style>

<style lang="scss">
.widgets .el-loading-mask {
  border: 2px solid #F6F6F6;
  border-radius: 2px;

  i {
    font-size: 20px;
    color: #000000;
  }

}
</style>
