<template>
  <div class="default-page-wrapper">
    <div class="default-page">
      <h1>акции</h1>
      <div class="default-page__content">
        <div class="stocks">
          <stock
              class="stocks__item"
              :circle="20"
              :image="require('../../assets/images/stocks/image1.png')"
              title="акция выходного дня"
              description="При заказе от 1500 ₽ в подарок бутылка белого вина или 1 л сока"/>
          <stock
              class="stocks__item"
              :circle="10"
              circle-pos="bottom-left"
              :image="require('../../assets/images/stocks/image2.png')"
              title="скидка на самовывоз"
              description="Скидка на любой заказ 10 %. Нужно только прийти и забрать"/>
          <stock
              class="stocks__item"
              :circle="15"
              circle-pos="top-right"
              :image="require('../../assets/images/stocks/image3.png')"
              title="акция буднего дня"
              description="С понедельника по четверг с 11:00 до 16:00 скидка 15 % на любой заказ"/>
          <stock
              class="stocks__item"
              :circle="20"
              circle-pos="top-right"
              :image="require('../../assets/images/stocks/image4.png')"
              title="скидка именинника"
              description="Скидка 20 % в ваш День Рождения"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from '@/app/stocks/components/Stock'

export default {
  name: 'delivery',
  components: { Stock },
  data() {
    return { }
  },
  mounted() { scroll(0, 0) },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.stocks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) { justify-content: center; }

  .stocks__item {
    &:nth-child(2), &:nth-child(3) {
      margin-top: 150px;
      @media screen and (max-width: 1100px) { margin-top: unset; }
    }
  }

}



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
