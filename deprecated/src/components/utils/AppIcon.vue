<template>
  <div class="app-icon">
    <el-tooltip class="item" effect="dark" :content="tooltipText" placement="top">
      <div class="app-icon__content">
        <img v-if="type === 'new'" src="@/assets/images/product/icon-new.svg" alt="">
        <img v-else-if="type === 'vegan'" src="@/assets/images/product/icon-vegan.svg" alt="">
        <img v-else-if="type === 'fire'" src="@/assets/images/product/icon-fire.svg" alt="">
      </div>
    </el-tooltip>
  </div>
</template>

<script>

export default {
  name: 'app-icon',
  props: {
    type: {
      type: String
    },
    tooltipText: {
      type: String
    }
  },
  components: {
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
  .app-icon {
    cursor: pointer;

    &__content {
      > img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
    }

  }
</style>
