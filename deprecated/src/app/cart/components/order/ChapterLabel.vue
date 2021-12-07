<template>
  <div class="chapter-label">
    <div class="num">{{number}}</div>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'chapter-label',
  props: {
    number: {
      type: Number
    },
    label: {
      type: String
    }
  },
  components: {
  },
  computed: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.chapter-label {
  position: relative;
  display: flex;

  > label {
    padding-left: 30px;
    display: block;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;

    color: #000000;

    @media screen and (max-width: 480px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  > .num {
    position: absolute;
    top: -7px;
    left: -25px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 31px;
    height: 31px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    border-radius: 50%;

    color: #FFFFFF;

    background: #D34A44;
    @media screen and (max-width: 480px) {
      left: -8px;
    }
  }

}
</style>
