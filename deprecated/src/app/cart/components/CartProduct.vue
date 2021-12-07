<template>
  <div class="cart-product">
    <div class="cart-product__img">
      <img :src="host + data.images[0]" alt="">
    </div>
    <div class="cart-product__info">
      <div class="cart-product__info--line">
        <h3 class="cart-product__info--name">{{data.title}}</h3>
<!--        <like class="cart-product__info&#45;&#45;like" />-->
      </div>
      <div class="cart-product__info--description">
        {{data.description}}
      </div>
    </div>
    <div class="cart-product__price">
      <div class="cart-product__price--cost">
        Цена <span>{{ data.cost }} ₽</span>
      </div>
      <div style="margin-top: 10px;margin-bottom: 10px;">
        <plus-minus-btn :id="data._id" />
      </div>
      <div v-if="count > 1" class="cart-product__price--cost">
        Сумма <span>{{ count * data.cost }} ₽</span>
      </div>
    </div>
    <div class="cart-product__actions">
      <div class="cart-product__actions--delete">
        <img @click="deleteProduct" src="@/assets/images/icons/trash.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import PlusMinus from '@/components/ui/buttons/PlusMinus'
// import Like from '@/components/utils/Like'

export default {
  name: 'cart-product',
  props: {
    data: {
      type: Object
    }
  },
  components: {
    PlusMinusBtn: PlusMinus,
    // Like
  },
  computed: {
    host() {
      return this.$store.state.host
    }
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    deleteProduct: function () {
      this.$store.dispatch('removeProductFromCart', this.data._id)
    },
  }
}
</script>

<style scoped lang="scss">
  .cart-product {
    width: 100%;
    height: 140px;
    box-sizing: border-box;

    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 20px;

    background: #FAFAFA;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;

    &__img {
      width: max-content;

      > img {
        width: 90px;
        height: 90px;
        object-fit: contain;
      }
    }

    &__info {
      max-width: 260px;
      width: 100%;
      margin-left: 20px;
      padding-right: 15px;

      &--line {
        display: flex;
      }

      &--like {
        margin-left: auto;
      }

      &--name {
        width: max-content;
        margin: 0;
        text-align: left;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;

        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #141414;
      }

      &--description {
        max-width: 300px;

        height: 60px;
        overflow-y: hidden;

        text-align: left;

        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;

        color: #717171;

      }

    }

    &__price {
      padding-top: 6px;
      max-width: 120px;
      width: 100%;
      margin-left: auto;

      &--cost {
        text-align: left;

        font-family: Neucha, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: 0.05em;

        color: #141414;

        > span {
          font-family: Neucha, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 22px;

          letter-spacing: 0.05em;

          color: #141414;
        }

      }

    }

    &__actions {

      &--delete {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 61px;
        height: 86px;

        background: #312525;
        border-radius: 200px 0px 0px 200px;

        cursor: pointer;

        transition: 0.3s;

        > img {
          width: 20px;
          height: 20px;
        }

        &:hover {
          background: #5b4a4a;
        }

      }

    }

  }
</style>
