<template>
  <header class="header" :class="{'show': show}" ref="header">
    <div class="header__wrapper">
      <nav class="header__nav">
        <div @click="clickLogo" class="header__nav--logo" ref="logo">
          <img src="@/assets/images/logo/logo.png" alt="" ref="logoImg">
        </div>
        <div class="header__nav--menu">
          <div @click="clickMenu" class="header__nav--menu--item" :class="{'active': $route.name === 'main' && isMenu}">
            <a>
              <span>Меню</span>
            </a>
          </div>
          <div class="header__nav--menu--item" :class="{'active': $route.name === 'delivery'}">
            <router-link to="/delivery">
              <span>Доставка</span>
            </router-link>
          </div>
          <div class="header__nav--menu--item" :class="{'active': $route.name === 'stocks'}">
            <router-link to="/stocks">
              <span>Акции</span>
            </router-link>
          </div>
          <div class="header__nav--menu--item">
            <el-tooltip class="item" effect="dark" placement="top">
              <div slot="content">Временно недоступно</div>
              <a style="cursor: no-drop">
                <span>Отзывы</span>
              </a>
            </el-tooltip>
          </div>
          <div class="header__nav--menu--item" :class="{'active': $route.name === 'contacts'}">
            <router-link to="/contacts">
              <span>Контакты</span>
            </router-link>
          </div>
        </div>
        <div class="header__nav--phone">
          <a :href="`tel:${$config.phoneNumber.replaceAll(' ', '')}`" style="text-decoration: none">
            <span class="icon"><img src="@/assets/images/icons/phone-black.svg" alt=""></span>
            <span style="padding-left: 60px">{{ $config.phoneNumber }}</span>
          </a>
        </div>
        <div class="header__nav--cart">
          <cart-header-button class="btn" />
        </div>
        <div class="header__nav--profile">
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">
              К сожалению в данный момент<br>регистрация аккаунтов невозможна.<br><br>Вы можете совершить покупку<br>без регистрации.<br><br>Извиняемся за неудобства :(
            </div>
            <button class="login">Войти</button>
          </el-tooltip>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import CartHeaderButton from "@/components/utils/CartHeaderButton";

export default {
  name: 'desktop',
  components: { CartHeaderButton },
  computed: {
    isMenu () { return this.$store.state.isMenu },
    windowWidth() { return this.$store.state.windowWidth },
    windowScroll () { return this.$store.state.windowScroll },
    show () {
      if (this.$route.name === 'main') {
        if (this.windowWidth <= 1250) return true
        else return this.windowScroll !== 0
      } else return true
    }
  },
  data () {
    return { }
  },
  methods: {
    clickLogo: function () {
      if (this.$route.name !== 'main') this.$router.push('/')
      else this.$scrollTo('#banner', 800, { offset: -70 })
    },
    clickMenu: function () {
      if (this.$route.name !== 'main') {
        if (this.$route.name === 'product') {
          this.$router.push('/')
        } else {
          this.$router.push('/')
          setTimeout(() =>
              this.$scrollTo('#menu', 0, { offset: -70 }), 300)
        }
      } else this.$scrollTo('#menu', 500, { offset: -70 })
    }
  },
}
</script>

<style scoped lang="scss">
.show {
  height: 88px!important;

  background-color: #0e4262;

  .header__nav {
    height: 88px!important;

    .header__nav--logo {
      width: 160px!important;
      height: 160px!important;
      left: 0!important;

      > img {
        transform: scale(0.7) !important;
      }

    }

  }

}

.header {
  position: fixed;
  z-index: 999;

  box-sizing: border-box;

  width: 100vw;
  height: 120px;

  transition: all 300ms ease-in-out;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120px;
    opacity: 0;
  }

  &__nav {
    position: relative;
    display: flex;
    align-items: center;
    height: 120px;
    transition: 300ms;

    &--logo {
      position: absolute;
      top: -24px;
      left: -40px;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 204px;
      height: 204px;
      border-radius: 50%;

      background: #FFFFFF;
      box-shadow: 0px 0px 52px rgba(0, 0, 0, 0.16);
      cursor: pointer;

      transition: 0.5s;

      > img {
        transition: 0.5s;
      }

    }

    &--menu {
      display: flex;
      margin-left: 180px;

      &--item {
        position: relative;
        margin-left: 7px;
        margin-right: 7px;
        cursor: pointer;
        transition: font-weight .4s ease-in-out;

        > a {
          padding: 10px 20px;

          font-family: Neucha, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 18px;
          text-decoration: none;

          letter-spacing: 0.08em;

          color: #FFFFFF;
        }

        &:after {
          transition: 0.3s;
          position: absolute;
          content: '';
          left: 20px;
          bottom: 0;
          width: 0;
          height: 2px;
          border-radius: 1px;

          background: #FAFAFA;
          z-index: -1;
        }

        &.active, &:hover {

          > a {
            font-weight: bold;
          }

          &:after {
            width: calc(100% - 42px);
            background: #FFFFFF;
          }

        }

        &:before {
          position: absolute;
          top: 7px;
          right: -10px;
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #FFFFFF;
        }

        &:last-child {
          &:before { display: none }
        }

      }

    }

    &--phone {
      margin-left: auto;
      margin-right: auto;

      > a {
        position: relative;

        display: flex;
        align-items: center;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 19px;
        line-height: 21px;

        letter-spacing: 0.08em;

        color: #FFFFFF;
        cursor: pointer;

        > .icon {
          position: absolute;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 45px;
          height: 45px;
          border-radius: 50%;

          background: #FFFFFF;
          box-shadow: 0 0 11px rgba(0, 0, 0, 0.6);
        }

        > span {
          display: block;
          padding-top: 3px;
          box-sizing: border-box;
        }

      }
    }

    &--cart {
      position: relative;
      margin-left: 20px;
      margin-right: 30px;
    }

    &--profile {
      position: relative;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      box-sizing: border-box;

      > .login {
        width: 102px;
        height: 45px;

        border: none;

        background: #FFFFFF;
        box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);
        border-radius: 36px;


        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;

        letter-spacing: 0.07em;

        color: #000000;

        cursor: no-drop;

      }
    }

  }

}
</style>
