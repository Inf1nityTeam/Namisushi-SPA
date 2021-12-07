<template>
  <div class="app-footer__info">
    <h6 v-if="windowWidth > 1100">Информация</h6>
    <svg class="icon" v-else width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0964 1.90373C8.55793 -0.634435 4.44221 -0.634718 1.90348 1.90373C-0.634962 4.44218 -0.634679 8.5579 1.90348 11.0966C4.44193 13.6345 8.55765 13.6348 11.0964 11.0966C13.6345 8.5579 13.6343 4.44246 11.0964 1.90373ZM7.34749 9.32632C7.34749 9.79462 6.96794 10.1742 6.49965 10.1742C6.03136 10.1742 5.65181 9.79462 5.65181 9.32632V5.93495C5.65181 5.46665 6.03136 5.0871 6.49965 5.0871C6.96794 5.0871 7.34749 5.46665 7.34749 5.93495V9.32632ZM6.48467 4.4857C5.99631 4.4857 5.67074 4.13978 5.68091 3.71275C5.67074 3.26508 5.99631 2.92962 6.49456 2.92962C6.9931 2.92962 7.30849 3.26537 7.31895 3.71275C7.31867 4.13978 6.99338 4.4857 6.48467 4.4857Z" fill="white"/></svg>
    <router-link to="/">Меню</router-link>
    <router-link to="/delivery">Доставка</router-link>
    <router-link to="/stocks">Акции</router-link>
    <a style="cursor: no-drop">Отзывы</a>
    <router-link to="/contacts">Контакты</router-link>
  </div>
</template>

<script>

export default {
  name: 'footer-mobile',
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  }
}
</script>

<style scoped lang="scss">
.app-footer__info {
  position: relative;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
  }

  .icon {
    position: absolute;
    top: 3px;
    left: 7px;
  }

  > h6 {
    position: relative;
    margin: 0 0 10px 0;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
    @media screen and (max-width: 1800px) {
      font-size: 18px;
      line-height: 20px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: 420px) {
      font-size: 12px;
      line-height: 16px;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      width: 105px;
      height: 1px;
      background-color: #FFFFFF;
      @media screen and (max-width: 1800px) {
        width: 94px;
      }
    }

  }

  > a {
    display: block;

    font-family: PT Sans Narrow, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-decoration: none;

    color: #FFFFFF;
    @media screen and (max-width: 1800px) {
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: 1800px) {
      font-size: 14px;
      line-height: 16px;
    }
    @media screen and (max-width: 1100px) {
      padding: 3px 13px;
    }
  }

}
</style>
