<template>
  <div class="contact">
    <el-popover
        :placement="placement"
        width="200"
        :trigger="popover">
      <div class="contact__icon" slot="reference">
        <img v-if="type === 'phone'" src="@/assets/images/icons/phone-black.svg" alt="">
        <img v-else-if="type === 'time'" src="@/assets/images/icons/timer-black.svg" alt="">
        <img v-else-if="type === 'geo'" src="@/assets/images/icons/point.svg" alt="">
        <img v-else-if="type === 'vk'" src="@/assets/images/icons/vk.svg" alt="">
        <img v-else-if="type === 'ig'" src="@/assets/images/icons/ig.svg" alt="">
      </div>
      <div>
        test
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    type: {
      type: String
    },
    placement: {
      type: String,
      default: 'top'
    },
    popover: {
      type: String,
      default: 'manual'
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
  .contact {
    margin-top: 10px;
    margin-bottom: 10px;

    &__icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      background: #FFFFFF;
      box-shadow: 9px 5px 37px #000000, inset 0px 0px 18px rgba(0, 0, 0, 0.26);
    }

  }
</style>
