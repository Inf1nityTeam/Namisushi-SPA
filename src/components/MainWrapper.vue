<template>
  <div class="main-wrapper">
    <app-header/>
    <div class="main-wrapper__content">
      <transition name="el-fade-in-linear" mode="out-in">
        <router-view/>
      </transition>
      <app-footer/>
    </div>
    <div class="main-wrapper__message">
      <span>
        Уважаемые клиенты! <span style="color: #f44842">Заведение временно закрыто.</span> Как только снова начнем принимать заказы мы сообщим об этом в группе
        <a href="https://vk.com/namisushidn" target="_blank">вконтакте</a>
        и
        <a href="https://instagram.com/namisushidn" target="_blank">instagram</a>
      </span>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/footer/AppFooter'

export default {
  name: 'main-wrapper',
  components: { AppHeader, AppFooter }
}
</script>

<style scoped lang="scss">
.main-wrapper {

  .main-wrapper__content {
    width: 100%;
    min-height: 100vh;
    background-image: url('../assets/images/menu-bg.png');
    background-size: 100% auto;

    overflow-y: hidden;
    overflow-x: hidden;

    @media screen and (max-width: 1400px) { background-image: none; }

  }

  &__message {
    position: fixed;
    bottom: 0;
    z-index: 10000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 26px;
    box-sizing: border-box;

    width: 100%;
    min-height: 76px;

    background-color: #FFFFFF;
    border-top: 1px solid #efefef;


    @media screen and (max-width: 1200px) {
      padding: 16px;
    }

    > span {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #212121;

      @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 20px;
      }
      @media screen and (max-width: 420px) {
        font-size: 12px;
        line-height: 18px;
      }

      > a {
        font-weight: 400;
        color: #074B72;
        text-decoration: none;
        transition: 200ms;
        &:hover {
          text-decoration: underline;
        }
      }

    }

  }

}
</style>
