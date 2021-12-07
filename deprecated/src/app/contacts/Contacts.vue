<template>
  <div class="default-page-wrapper">
    <div class="default-page">
      <h1>контакты</h1>
      <div class="default-page__content">
        <info/>
        <widgets/>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/app/contacts/components/Info'
import Widgets from '@/app/contacts/components/Widgets'

export default {
  name: 'delivery',
  components: { Info, Widgets },
  data() {
    return { }
  },
  mounted() {
    scroll(0, 0)
  }
}
</script>

<style scoped lang="scss">
.default-page {
  margin: 0 auto;

  padding: 88px 50px 60px;

  max-width: 1200px;
  width: 100%;

  box-sizing: border-box;

  @media screen and (max-height: 780px) {
    padding-top: 0;
  }

  @media screen and (max-width: 1250px) {
    padding-top: 20px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }


  > h1 {
    position: relative;

    width: max-content;
    margin: 30px auto;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 53px;

    text-transform: uppercase;

    color: #191919;

    @media screen and (max-width: 980px) {
      font-size: 42px;
    }
    @media screen and (max-width: 600px) {
      margin: 15px auto;
      font-size: 38px;
    }
    @media screen and (max-width: 420px) {
      font-size: 34px;
    }

    &:before, &:after {
      content: '';
      position: absolute;

      width: 10px;
      height: 10px;

      border-radius: 50%;
      background-color: #0C334A;
    }
    &:before {
      top: 15px;
      left: -40px;
      @media screen and (max-width: 980px) {
        left: -34px;
      }
      @media screen and (max-width: 600px) {
        top: 17px;
        left: -30px;
      }
      @media screen and (max-width: 420px) {
        left: -27px;
      }
    }
    &:after {
      top: 15px;
      right: -40px;
      @media screen and (max-width: 980px) {
        right: -34px;
      }
      @media screen and (max-width: 600px) {
        top: 17px;
        right: -30px;
      }
      @media screen and (max-width: 420px) {
        right: -27px;
      }
    }

  }

  .default-page__content {

  }

}
.default-page-wrapper {
  display: flex;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-height: 780px) {
    width: 100%;
    padding-top: 100px;
    display: block;
  }

  @media screen and (max-width: 1250px) {
    padding-top: 60px!important;
    display: block;
    width: 100%;
  }
}
</style>
