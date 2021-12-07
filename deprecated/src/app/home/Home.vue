<template>
  <div class="home">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from '@/app/home/banner/Banner'
import AppMenu from '@/app/home/menu/AppMenu'

export default {
  name: 'app-main',
  components: { Banner, AppMenu }
}
</script>

<style scoped lang="scss">
.home { width: 100vw; }
</style>

