<template>
  <div v-if="product" class="product">
    <div class="product__content">
      <div class="product__media">
        <h1>{{product.title}}</h1>
        <div class="product__media--image">
          <img class="image" :src="host + product.images[0]" alt="">
          <img class="bg" src="@/app/product/bg.png" alt="">
        </div>
      </div>
      <div class="product__info">
        <label>Состав</label>
        <div class="product__info--list">
          <span v-for="item in product.ingredients" :key="item">{{item}}</span>
        </div>
        <div class="product__info--descr">
          {{product.description}}
        </div>
        <div class="product__info--cost">
          <span>{{product.cost}} ₽ - {{product.weight}} г</span>
        </div>
        <div class="product__info--actions">
          <button v-if="count === 0" @click="toCard">Добавить в коризну</button>
          <plus-minus v-else :id="productId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlusMinus from "@/components/ui/buttons/PlusMinus";

export default {
  name: 'product',
  components: { PlusMinus },
  computed: {
    host() {
      return this.$store.state.host
    },
    productId() {
      return this.$route.params.productId
    },
    product() {
      return this.$store.state.products.list.find(product => product._id === this.productId)
    },
    count () {
      if(this.$store.state.cart.list.find(item => item._id === this.productId))
        return this.$store.state.cart.list.find(item => item._id === this.productId).count
      else return 0
    }
  },
  mounted() {
    scroll(0, 0)
  },
  methods: {
    toCard: function () {
      this.$store.commit('pushProductToCart', this.productId)
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 88px;

  width: 100vw;
  min-height: calc(100vh - 88px);


  &__content {
    max-width: 1200px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (max-width: 480px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &__media {
    min-width: 400px;
    @media screen and (max-width: 768px) {
      width: 100%;
      min-width: unset;
    }

    > h1 {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 37px;
      letter-spacing: 0.08em;

      color: #000000;

      @media screen and (max-width: 1100px) {
        font-size: 30px;
      }
    }

    &--image {
      position: relative;

      .image {
        width: 280px;
        height: 280px;
        object-fit: contain;
        @media screen and (max-width: 480px) {
          width: 224px;
        }
      }

      .bg {
        position: absolute;
        top: 130px;
        //left: 40px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: -1;

        @media screen and (max-width: 480px) {
          top: 100px;
          width: 250px;
          object-fit: contain;
        }
      }

    }

  }


  &__info {
    padding-top: 30px;
    text-align: left;

    @media screen and (max-width: 768px) {
      padding-top: 0;
    }

    > label {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      text-align: left;
      letter-spacing: 0.08em;

      color: #000000;
    }

    &--list {
      margin-top: 6px;

      > span {
        position: relative;
        padding-right: 15px;
        padding-left: 10px;

        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;

        letter-spacing: 0.08em;

        color: #050505;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }

        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }


        &:after {
          content: '';
          position: absolute;
          top: 5px;
          right: 0;

          width: 6px;
          height: 6px;

          border-radius: 50%;
          background-color: #0C334A;
        }
      }

    }

    &--descr {
      margin-top: 24px;
      padding-right: 20px;
      max-width: 600px;

      box-sizing: border-box;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;

      letter-spacing: 0.01em;

      color: #242424;
    }

    &--cost {
      margin-top: 26px;

      font-family: Ubuntu, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      letter-spacing: 0.05em;

      color: #000000;
    }

    &--actions {
      padding-top: 24px;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 218px;
        height: 47px;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        text-align: justify;
        letter-spacing: 0.08em;

        color: #FFFFFF;

        background: #0C334A;
        border-radius: 2px;
        border: none;

        cursor: pointer;
        transition: 200ms;

        &:hover {
          background: #1C657E;
        }

      }

    }

  }

}
</style>

<style lang="scss">
.product__info--actions {

  .plus-minus {

    .plus-minus__circle {
      background-color: rgba(12, 51, 74, 0.25) !important;
    }

  }

}
</style>
