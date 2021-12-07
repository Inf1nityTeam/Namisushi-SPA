<template>
  <div class="drop-btn">
    <a class="drop-btn__content"
       :href="link.src"
       :target="link.target"
       :style="`max-width: ${options.width}`">
      <div class="icon">
        <img :src="options.icon" alt="">
      </div>
      <div class="text">
        <a v-for="(item, i) in options.content" :key="i">{{item}}</a>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'drop-btn',
  props: {
    options: Object
  },
  computed: {
    link() {
      if (this.options.link && this.options.link.src && this.options.link.target) {
        return this.options.link
      } else {
        return { src: null, target: '_blank' }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.drop-btn {
  position: relative;

  margin-top: 12px;
  margin-bottom: 12px;

  width: 55px;
  height: 55px;


  &__content {
    position: relative;

    display: flex;
    align-items: center;

    width: 55px;
    height: 55px;

    border-radius: 30px;
    border: 1px solid #FFFFFF;
    background-color: #191E35;

    transition: 350ms;
    cursor: pointer;

    &:hover {
      width: 300px;

      .text {
        display: block;
        opacity: 1;
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 5px;

      width: 45px;
      height: 45px;

      border-radius: 50%;
      background-color: #ffffff;
    }

    .text {
      display: none;

      margin-left: 5px;

      width: max-content;

      position: absolute;
      top: 12px;
      left: 55px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      text-align: left;

      color: #FFFFFF;

      > a {
        display: block;
      }

    }

  }

}
</style>
