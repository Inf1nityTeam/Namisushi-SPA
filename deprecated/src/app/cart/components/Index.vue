<template>
  <div class="cart">
    <h2>корзина</h2>
    <div class="cart__list">
      <product v-for="product in products" :data="product" :key="product._id" />
      <div v-if="products.length === 0" class="cart__list--empty">
        <span>Вы ещё не выбрали ни одного продукта</span>
      </div>
    </div>
    <div class="cart__cost">
      Общая сумма <span>{{costAll}} ₽</span>
    </div>
    <div class="cart__footer">
      <button @click="close" class="cart__footer--back">{{windowWidth > 500 ? 'Вернуться к покупкам' : 'Назад'}}</button>
      <button @click="send" class="cart__footer--submit" :class="{'disabled': cartProducts.length === 0}">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import Product from '@/app/cart/components/product/Product'

export default {
  name: 'cart',
  components: { Product },
  computed: {
    windowWidth() { return this.$store.state.windowWidth },
    isShowCart() { return this.$store.state.isShowCart },
    cartProducts() { return this.$store.state.cart.list },
    products() {
      return this.$store.state.products.list.filter(item => {
        if(this.cartProducts.find(cartItem => item._id === cartItem._id))
          return item
      })
    },
    costAll () {
      let cost = 0
      this.$store.state.products.list.forEach(item => {
        let cartItem = this.cartProducts.find(cartItem => item._id === cartItem._id)
        if(cartItem)
          cost += cartItem.count * item.cost
      })
      return cost
    }
  },
  data() {
    return {
    }
  },
  methods: {
    send: function () {
      if (this.cartProducts.length !== 0)
        this.$emit('changeMode', 'ORDER')
    },
    close: function () { this.$store.commit('hideCart') },
  }
}
</script>

<style scoped lang="scss">
.cart {
  width: 100%;
  height: 100vh;

  padding: 40px;

  box-sizing: border-box;

  @media screen and (max-width: 640px) {
    padding: 60px 20px 20px 20px;
    //min-height: calc(100vh - 42px);
  }

  > h2 {
    margin: 0;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 66px;

    text-transform: uppercase;

    color: #312525;
    @media screen and (max-width: 640px) {
      font-size: 42px;
      line-height: 46px;
    }
  }

  &__list {
    padding-top: 40px;
    min-height: calc(100vh - 350px);

    @media screen and (max-width: 640px) {
      padding-top: 10px;
    }

    > .cart-product {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &--empty {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: calc(100vh - 350px);

      > span {
        font-family: Neucha, sans-serif;
        font-weight: bold;
        font-size: 22px;
      }


    }

  }

  &__cost {
    margin-top: 40px;
    margin-bottom: 30px;

    text-align: left;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    letter-spacing: 0.05em;

    color: #000000;

    > span {
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.05em;

      color: #000000;
    }

  }

  &__footer {
    padding-bottom: 40px;
    text-align: left;

    > button {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.25)!important;
      border-radius: 8px!important;
    }

    &--back {
      margin-right: 20px;
      padding: 0 20px;
      height: 58px;

      cursor: pointer;

      border: none;

      background: #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      letter-spacing: 0.05em;

      color: #000000;

      transition: opacity 300ms;

      &:hover {
        opacity: 0.8;
      }

    }

    &--submit {
      padding: 0 20px;
      height: 58px;

      border: none;

      cursor: pointer;

      background: #312525;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      letter-spacing: 0.05em;

      color: #FFFFFF;

      transition: opacity 300ms;

      &.disabled {
        cursor: no-drop;
        background-color: #666666;
      }

      &:hover {
        opacity: 0.8;
      }

    }

  }

}
</style>
