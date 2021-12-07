<template>
  <div v-if="show" class="cookie-popup">
    <div class="text">При использовании сайта, вы подтверждаете свое согласие на использование файлов cookie</div>
    <button @click="handleClickButton">Согласен</button>
  </div>
</template>

<script>
export default {
  name: 'cookie-popup',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      const cookie = localStorage.getItem('cookie')
      this.show = !cookie;
    },
    handleClickButton: function () {
      localStorage.setItem('cookie', 'true')
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.cookie-popup {
  position: fixed;
  right: 40px;
  bottom: 40px;

  padding: 12px;
  box-sizing: border-box;

  width: 297px;
  height: 92px;

  background: #FFFFFF;
  border: 0.5px solid #D9D9D9;
  border-radius: 2px;
  z-index: 100;

  opacity: 0.6;
  transition: 200ms;

  &:hover {
    opacity: 1;
  }

  > .text {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: left;


    color: #1F1F1F;
  }

  > button {
    margin-top: 8px;

    width: 68px;
    height: 24px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    color: #FFFFFF;

    background: #074B75;
    border-radius: 2px;
    border: none;

    cursor: pointer;

    transition: 200ms;

    &:hover {
      background: #1170a7;
    }

  }

}
</style>
