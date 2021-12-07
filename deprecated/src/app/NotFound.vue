<template>
  <div class="not-found">
    <div class="not-found__content">
      <span>Станица не найдена</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.not-found {

  &__content {
    padding-top: 100px;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>

