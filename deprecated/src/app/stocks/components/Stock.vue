<template>
  <div class="stock-wrapper" :class="circlePos">
    <div class="stock">
      <div class="stock__circle">
        <div>{{ circle }} %</div>
      </div>
      <img :src="image" alt="">
    </div>
    <div class="stock__footer">
      <h3>{{ title }}</h3>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stock',
  components: {  },
  props: {
    circle: { type: Number },
    circlePos: { type: String },
    image: { type: String },
    title: { type: String },
    description: { type: String }
  },
  data() {
    return { }
  },
  mounted() { },
  methods: { }
}
</script>

<style scoped lang="scss">
.stock-wrapper {
  width: 250px;
  @media screen and (max-width: 1600px) { width: 210px; }
  @media screen and (max-width: 1100px) {
    margin: 30px!important;
    width: 30vw;
  }
  @media screen and (max-width: 500px) {
    margin: 20px 10px!important;
    width: 100%;
    display: flex;
    .stock__footer {
      padding-left: 25px;
      h3 {
        margin: 0;
        max-width: unset;
        text-align: left;
      }
      span {
        max-width: unset;
        text-align: left;
      }
    }
  }
}
.top-right {
  .stock__circle {
    left: unset!important;
    right: -35px;
    @media screen and (max-width: 500px) {
      right: -20px;
    }
  }
}
.bottom-left {
  .stock__circle {
    top: unset!important;
    bottom: -35px;
  }
}
.stock {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 250px;

  border-radius: 50%;
  background: #0C334A;
  @media screen and (max-width: 1600px) {
    width: 210px;
    height: 210px;
  }
  @media screen and (max-width: 1100px) {
    width: 30vw;
    height: 30vw;
  }
  @media screen and (max-width: 500px) {
    max-width: 120px;
    min-width: 120px;
    height: 120px;
  }

  .stock__circle {
    position: absolute;
    top: -35px;
    left: -35px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-color: #FFFFFF;
    @media screen and (max-width: 1600px) {
      width: 120px;
      height: 120px;
    }
    @media screen and (max-width: 1100px) {
      width: 15vw;
      height: 15vw;
    }
    @media screen and (max-width: 500px) {
      min-width: 40px;
      min-height: 40px;

      top: -20px;
      left: -20px;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 120px;
      height: 120px;

      border-radius: 50%;
      background-color: #F43131;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 44px;

      text-align: center;

      color: #FFFFFF;
      @media screen and (max-width: 1600px) {
        width: 100px;
        height: 100px;

        font-size: 36px;
        line-height: 40px;
      }
      @media screen and (max-width: 1100px) {
        width: 12vw;
        height: 12vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 28px;
        line-height: 32px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 28px;
      }
    }

  }

  > img {
    width: 210px;
    height: 210px;
    object-fit: contain;
    @media screen and (max-width: 1600px) {
      width: 180px;
      height: 180px;
    }
    @media screen and (max-width: 1100px) {
      width: 25vw;
      height: 25vw;
    }
    @media screen and (max-width: 500px) {
      width: 100px;
      height: 100px;
    }
  }

}
.stock__footer {

  > h3 {
    margin: 20px auto 10px auto;

    width: max-content;
    max-width: 150px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #000000;
  }

  > span {
    display: block;
    margin: 0 auto;

    max-width: 210px;

    font-family: PT Sans Narrow, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.03em;

    color: #424242;
  }

}
</style>
