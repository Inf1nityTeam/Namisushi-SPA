<template>
  <div class="delivery-wrapper">
    <div class="delivery">
      <h1>Доставка</h1>
      <div class="delivery__content">
        <div class="delivery__list">
          <h2>
            <div class="img-wrapper">
              <base-svg :src="require('@/assets/images/icons/bag.svg')"/>
            </div>
            <span>как получить заказ</span>
          </h2>
          <div class="delivery__list--item">Минимальный  заказ для доставки - 500 ₽</div>
          <div class="delivery__list--item">Стоимость доставки 1 км - 15 ₽</div>
          <div class="delivery__list--item">Вы можете сами забрать заказ из ресторана со скидкой 10%</div>
          <div class="delivery__list--item">Доставка осуществляется с 11:00 до 20:30</div>
        </div>
        <div class="delivery__content--image">
          <img src="@/assets/images/delivery/image.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'delivery',
  mounted() { scroll(0, 0) }
}
</script>

<style scoped lang="scss">
.delivery-wrapper {
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
.delivery {
  margin: 0 auto;

  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 60px;

  max-width: 1200px;
  width: 100%;

  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  > h1 {
    position: relative;

    width: max-content;
    margin: 60px auto;
    @media screen and (max-width: 610px) {
      margin: 60px auto 0 auto;
    }

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 53px;

    text-transform: uppercase;

    color: #191919;

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
    }
    &:after {
      top: 15px;
      right: -40px;
    }

  }

  .delivery__content {
    display: flex;

    @media screen and (max-width: 850px) {
      flex-wrap: wrap;
    }

    &--image {
      position: relative;
      width: 100%;
      > img {
        margin-left: auto;
        @media screen and (max-width: 1100px) {
          position: absolute;
          top: -60px;
          right: -30px;
        }
        @media screen and (max-width: 1100px) {
          width: 33vw;
        }
        @media screen and (max-width: 859px) {
          top: 0;
          position: relative;

          margin-top: 40px;
          margin-bottom: 80px;
          width: 50vw;
        }
        @media screen and (max-width: 700px) {
          width: 65vw;
        }
      }
    }

  }

  .delivery__list {
    float: left;
    text-align: left;

    width: 600px;
    min-width: 600px;

    @media screen and (max-width: 850px) {
      width: 100%;
      min-width: 100%;
    }

    > h2 {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      @media screen and (max-width: 610px) {
        justify-content: center;
      }

      > span {
        padding-left: 36px;
        padding-right: 36px;

        box-sizing: border-box;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 44px;

        letter-spacing: 0.05em;
        text-transform: uppercase;

        color: #191919;

        @media screen and (max-width: 610px) {
          display: none;
        }
      }

      > .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 70px;
        height: 70px;

        border-radius: 50%;

        background-color: #0C334A;
        box-shadow: 4px 1px 13px rgba(0, 0, 0, 0.42);
      }

    }

    .delivery__list--item {
      position: relative;

      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 50px;

      font-family: PT Sans Narrow, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 31px;
      line-height: 40px;
      letter-spacing: 0.03em;

      color: #393939;

      @media screen and (max-width: 1050px) {
        font-size: 26px;
        line-height: 30px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 28px;
      }
      @media screen and (max-width: 480px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (max-width: 420px) {
        font-size: 16px;
        line-height: 20px;
      }

      &:before {
        content: '';

        position: absolute;
        top: calc(50% - 10px);
        left: 10px;

        width: 10px;
        height: 10px;
        border-radius: 50%;

        background-color: #1C2344;
      }

    }


  }

}
</style>

