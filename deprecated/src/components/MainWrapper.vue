<template>
  <div class="main-wrapper">
    <app-header/>
    <div class="main-wrapper__content">
      <transition name="el-fade-in-linear" mode="out-in">
        <router-view/>
      </transition>
      <app-footer/>
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

}
</style>
