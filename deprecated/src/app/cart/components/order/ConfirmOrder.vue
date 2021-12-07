<template>
  <div class="order-chapter4">
    <div class="order-chapter4__content">
      <div class="calc-cost">
        <div class="calc-cost__item">
          <div class="one">Стоимость товаров</div><div class="two">{{ cost }} ₽</div>
        </div>
        <div v-if="delivery" class="calc-cost__item">
          <div class="one">Доставка</div><div class="two">
          <el-tooltip v-if="!deliveryCost" class="item" effect="dark" content="Введите адрес для расчета стоимости доставки" placement="top">
            <i class="el-icon-question"></i>
          </el-tooltip>
          <span v-else>{{deliveryCost}}</span>
          ₽</div>
        </div>
        <i v-if="delivery && deliveryCost" class="line"></i>
        <div v-if="deliveryCost" class="calc-cost__item">
          <div class="one">ВСЕГО</div><div class="two">{{cost + deliveryCost}} ₽</div>
        </div>
      </div>
      <button @click="buy" class="order-chapter4__btn--buy">{{ windowWidth > 420 ? 'Купить и оплатить' : 'Купить'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm-order',
  components: {
  },
  props: {
    delivery: { type: Boolean },
    deliveryCost: { type: Number }
  },
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    },
    cartProducts() {
      return this.$store.state.cart.list
    },
    products() {
      return this.$store.state.products.list.filter(item => {
        if(this.cartProducts.find(cartItem => item._id === cartItem._id))
          return item
      })
    },
    cost () {
      if (this.delivery) return this.costAll
      else return Number.parseInt(((this.costAll / 10) * 9).toString())
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
      test: null
    }
  },
  methods: {
    buy: function () {
      // TODO validate
      this.$emit('send')
    }
  }
}
</script>

<style scoped lang="scss">
.order-chapter4 {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 17px 46px 40px 46px;
  border-radius: 8px;

  background-color: #FFFFFF;

  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-right: 10px;
  }

  .order-chapter4__content {
    padding-top: 10px;
  }

  .order-chapter4__btn {

    &--buy {
      display: block;

      margin-top: 40px;
      margin-right: auto;

      width: 294px;
      height: 57px;

      border-radius: 8px;
      border: none;

      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      color: #FFFFFF;

      background: #0C334A;

      cursor: pointer;

      transition: 0.3s;

      @media screen and (max-width: 420px) {
        width: 100%;
      }

      &:hover {
        opacity: 0.8;
      }

    }

  }

}

.order-chapter4 .calc-cost {

  > .calc-cost__item {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    font-family: PT Sans Narrow, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 27px;
    letter-spacing: 0.03em;
    text-align: left;

    color: #000000;

    @media screen and (max-width: 420px) {
      font-size: 18px;
    }

    > .one {
      width: 60%;
    }

  }

  > .line {
    display: block;

    width: 340px;
    height: 1px;

    background: #C4C4C4;
    border-radius: 2px;

  }

}
</style>
