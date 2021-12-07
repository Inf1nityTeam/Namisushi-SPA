<template>
  <div class="cart-wrapper">
    <el-drawer
        :visible="isShowCart"
        @close="close"
        :with-header="false">
      <div class="content">
        <mobile-header v-if="windowWidth < 640"/>
        <scroll ref="scroll">
          <transition name="fade" mode="out-in">
            <index v-if="mode === 'INDEX'" @changeMode="changeMode" />
            <order v-else-if="mode === 'ORDER'" @changeMode="changeMode" />
          </transition>
        </scroll>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Index from '@/app/cart/components/Index'
import Order from '@/app/cart/components/Order'
import MobileHeader from '@/app/cart/components/common/MolileHeader'
import Scroll from '@/components/Scroll'

export default {
  name: 'cart',
  components: { Index, Order, MobileHeader, Scroll },
  computed: {
    isShowCart() { return this.$store.state.isShowCart },
    windowWidth () { return this.$store.state.windowWidth }
  },
  data() {
    return {
      mode: 'INDEX'
    }
  },
  watch: {
    isShowCart() {
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$refs.scroll.scrollTop()
        })
      })
    }
  },
  methods: {
    changeMode: function (mode) {
      this.mode = mode
      this.$refs.scroll.scrollTop()
    },
    close: function () {
      if (this.mode !== 'INDEX') this.changeMode('INDEX')
      this.$store.commit('hideCart')
    },
  }
}
</script>

<style scoped lang="scss">
.cart-wrapper .content {
  height: 100vh;
  background: #D0C0B4;
}
</style>

<style lang="scss">
.cart-wrapper .content .ps {
  height: 100vh;
}
.cart-wrapper .el-drawer {
  width: 600px!important;

  @media screen and (max-width: 640px) {
    width: 100% !important;
  }

}
</style>
