<template>
  <div class="checkbox">
    <div @click="change" class="checkbox__content">
      <div class="circle-wrapper">
        <div class="circle"><img v-if="data === show" src="@/assets/images/icons/check.svg" alt=""></div>
      </div>
      <div class="icon">
        <img :src="icon" alt="">
      </div>
      <div class="text">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  model: {
    prop: 'data',
    event: 'input'
  },
  props: {
    icon: { type: String },
    data: { type: Boolean },
    show: { type: Boolean },
    disabled: { type: Boolean }
  },
  methods: {
    change: function () {
      if (!this.disabled && this.data !== this.show)
        this.$emit('input', !this.data)
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox {
  padding-top: 10px;
  padding-bottom: 10px;

  > .checkbox__content {
    display: flex;
    cursor: pointer;

    > .circle-wrapper {

      > .circle {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 31px;
        height: 31px;

        background: #FFFFFF;
        box-shadow: 0px 0px 1px #000000;
        border-radius: 50%;
      }

    }


    > .icon {
      width: 78px;

      > img {
        object-fit: contain;
        max-width: 30px;
        max-height: 30px;
      }

    }

    > .text {
      display: flex;
      width: 100%;

      padding-top: 2px;
      padding-left: 24px;

      font-family: PT Sans Narrow, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.03em;
      line-height: 30px;
      text-align: left;

      color: #000000;

      @media screen and (max-width: 480px) {
        padding-left: 0;
      }
      @media screen and (max-width: 400px) {
        font-size: 14px;
      }

      > div { width: 50% }

    }

  }

}
</style>
