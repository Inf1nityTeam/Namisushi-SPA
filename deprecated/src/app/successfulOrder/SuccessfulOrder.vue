<template>
  <div class="successful-order">
    <div class="successful-order__content">
      <h2>Спасибо за Ваш заказ</h2>
      <div class="text">В ближайшее время менеджер <br> свяжется с Вами по номеру</div>
      <div class="phone">
        <span>{{phoneNumber}}</span>
      </div>
      <div class="text">для подтверждения заказа</div>
      <div class="button">
        <router-link to="/">Вернуться на сайт</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successful-order',
  computed: {
    phoneNumber() {
      return this.$store.state.cart.phoneNumber
    }
  },
  mounted() { this.init() },
  methods: {
    init: function () {
      scroll(0, 0)
      if (!this.phoneNumber) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.successful-order {
  padding-top: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: calc(100vh - 88px);
  min-height: 500px;

  background-image: url(bg.png);

  @media screen and (max-width: 1000px) {
    background-size: auto 100%;
  }
  @media screen and (max-width: 420px) {
    min-height: 360px;
  }
  @media screen and (max-width: 380px) {
    min-height: 300px;
  }

  &__content {
    width: 770px;
    height: 424px;

    background: linear-gradient(106.6deg, rgba(255, 255, 255, 0.348) 0%, rgba(255, 255, 255, 0) 101.3%);
    backdrop-filter: blur(49px);

    border-radius: 10px;

    @media screen and (max-width: 1000px) {
      width: 600px;
    }
    @media screen and (max-width: 1000px) {
      width: calc(100vw - 60px);
    }
    @media screen and (max-width: 540px) {
      height: 380px;
    }
    @media screen and (max-width: 420px) {
      height: 300px;
    }
    @media screen and (max-width: 380px) {
      height: 260px;
    }

    > h2 {
      margin-top: 60px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 55px;

      text-align: center;
      letter-spacing: 0.04em;

      color: #0C334A;

      @media screen and (max-width: 1200px) {
        font-size: 42px;
      }
      @media screen and (max-width: 700px) {
        font-size: 36px;
      }
      @media screen and (max-width: 540px) {
        margin-bottom: 20px;
        font-size: 32px;
      }
      @media screen and (max-width: 480px) {
        font-size: 28px;
      }
      @media screen and (max-width: 420px) {
        margin-top: 30px;
        font-size: 24px;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 380px) {
        margin-bottom: 0;
        font-size: 20px;
      }
    }

    > .text {
      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;

      text-align: center;

      color: #212121;

      > br {
        display: none;
        @media screen and (max-width: 700px) {
          display: block;
        }
      }

      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 700px) {
        font-size: 16px;
        line-height: 18px;
      }
      @media screen and (max-width: 540px) {
        font-size: 14px;
      }
      @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 14px;
      }
      @media screen and (max-width: 380px) {
        font-size: 10px;
      }
    }

    > .phone {
      margin-top: 14px;
      margin-bottom: 14px;

      @media screen and (max-width: 540px) {
        margin-top: 7px;
        margin-bottom: 7px;
      }

      > span {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 37px;
        text-decoration: none;

        text-align: center;

        color: #212121;

        @media screen and (max-width: 1200px) {
          font-size: 28px;
        }
        @media screen and (max-width: 540px) {
          font-size: 24px;
        }
        @media screen and (max-width: 380px) {
          font-size: 20px;
        }
      }
    }

    > .button {
      margin-top: 48px;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 540px) {
        margin-top: 30px;
      }
      @media screen and (max-width: 380px) {
        margin-top: 15px;
      }

      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 267px;
        height: 60px;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        text-decoration: none;

        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;

        background: #F34942;
        border-radius: 4px;
        border: none;

        transition: 200ms;
        cursor: pointer;

        &:hover {
          background: #f36f6a;
        }

        @media screen and (max-width: 540px) {
          width: 220px;
          height: 50px;
          font-size: 16px;
        }
        @media screen and (max-width: 420px) {
          width: 200px;
          height: 40px;
          font-size: 14px;
        }
        @media screen and (max-width: 380px) {
          width: 180px;
          height: 38px;
          font-size: 14px;
        }
      }

    }

  }

}
</style>

