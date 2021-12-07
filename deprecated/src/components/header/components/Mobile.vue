<template>
  <header class="header__mobile" :class="{'show': show}">
    <div @click="$store.commit('showHeaderCollapse')" class="burger">
      <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="18" width="30" height="2" fill="#083E60"/><rect y="9" width="30" height="2" fill="#083E60"/><rect width="30" height="2" fill="#083E60"/></svg>
    </div>
    <div class="logo">
      <img v-if="windowWidth > 420"
           :src="show ? require('@/assets/images/logo/logo-for-dark.png') : require('@/assets/images/logo/logo-horiz.png')"
           alt="">
    </div>
    <div v-if="windowWidth > 600" class="phone">
      <a :href="`tel:${$config.phoneNumber.replaceAll(' ', '')}`">
        <div class="circle">
          <img src="@/assets/images/icons/phone-black.svg" alt="">
        </div>
        <span>{{ $config.phoneNumber }}</span>
      </a>
    </div>
    <div class="cart">
      <cart-header-button class="btn" />
    </div>
  </header>
</template>

<script>
import CartHeaderButton from '@/components/utils/CartHeaderButton'

export default {
  name: 'mobile',
  components: { CartHeaderButton },
  props: {
    alwaysBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    windowWidth() { return this.$store.state.windowWidth }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
.header__mobile {
  position: fixed;
  width: 100vw;
  height: 72px!important;
  background-color: #fff;
  box-sizing: border-box;

  border-bottom: 1px solid #e3e3e3;

  z-index: 99;

  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

  &.show {
    border-bottom: none;

    background-color: #0C334A;

    > .burger > svg > rect {
      fill: #FFFFFF;
    }

  }

  > .cart {
    top: -10px;
    @media screen and (max-width: 600px) {
      margin-left: auto;
    }

    > .btn {
      box-shadow: 2px 1px 13px rgba(0, 0, 0, 0.26);
    }

  }

  > .logo {
    margin-top: 6px;
    margin-left: 20px;
    > img {
      height: 60px;
    }
  }

  > .phone {
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-right: 50px;
    @media screen and (max-width: 800px) { margin-right: 40px }
    @media screen and (max-width: 800px) { margin-right: 30px }


    > a {
      display: flex;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 19px;
      line-height: 21px;

      letter-spacing: 0.08em;

      color: #222222;

      text-decoration: none;

      > .circle {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 45px;
        height: 45px;

        border-radius: 50%;

        background-color: #FFFFFF;
      }

      > span {
        margin-left: 15px;
        line-height: 50px;
        color: #FFFFFF;
      }

    }

  }

}
</style>
