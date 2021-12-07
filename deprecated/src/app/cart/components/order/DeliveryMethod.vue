<template>
  <div class="delivery-method">
    <chapter-label label="Способ доставки" :number="1" />
    <div class="delivery-method__content">
      <checkbox :class="{'checkbox-disabled': costAll < 500}"
                v-model="check"
                :show="true"
                :icon="require('@/assets/images/icons/delivery.svg')"
                :disabled="costAll < 500"
                @input="emit">
        <div class="label">Курьер</div>
        <div>
          <span v-if="costAll < 500" class="delivery-disabled">Сумма заказа для доставки курьером должна составлять не менее 500 ₽</span>
          <el-tooltip v-else-if="!order.deliveryCost" class="item" effect="dark" content="Введите адрес для расчета стоимости доставки" placement="top">
            <i class="el-icon-question"></i>₽
          </el-tooltip>
          <span v-else>{{order.deliveryCost}}₽</span>
        </div>
      </checkbox>
      <checkbox v-model="check"
                :show="false"
                :icon="require('@/assets/images/cart/shopping-bag.svg')"
                @input="emit">
        <div>Самовывоз</div><div class="text-adaptive-small">Скидка - 10%</div>
      </checkbox>
    </div>
  </div>
</template>

<script>
import ChapterLabel from '@/app/cart/components/order/ChapterLabel'
import Checkbox from '@/app/cart/components/order/Checkbox'

export default {
  name: 'delivery-method',
  components: { ChapterLabel, Checkbox },
  model: {
    prop: 'data',
    event: 'input'
  },
  props: {
    data: { type: Boolean },
    order: { type: Object }
  },
  data() {
    return {
      check: true
    }
  },
  computed: {
    cartProducts() {
      return this.$store.state.cart.list
    },
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
  mounted() {
    if (this.costAll < 500) {
      this.check = false
      this.emit()
    }
  },
  methods: {
    emit: function () {
      this.$emit('input', this.check)
    }
  }
}
</script>

<style scoped lang="scss">
.delivery-method {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 140px;
  background-color: #FFFFFF;
  border-radius: 8px;

  padding: 17px 46px;

  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-right: 10px;
  }

  > .delivery-method__content {
    padding-top: 10px;
  }

  .text-adaptive-small {
    @media screen and (max-width: 420px) {
      font-size: 12px!important;
    }
  }

  .delivery-disabled {
    display: block;
    margin-right: -14px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.03em;

    color: #FF0000;
    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
    @media screen and (max-width: 570px) {
      font-size: 11px;
      line-height: 13px;
    }
    @media screen and (max-width: 540px) {
      font-size: 10px;
      line-height: 12px;
    }
    @media screen and (max-width: 510px) {
      font-size: 8px;
      line-height: 10px;
    }
    @media screen and (max-width: 480px) {
      font-size: 10px;
      line-height: 12px;
    }
    @media screen and (max-width: 480px) {
      font-size: 8px;
      line-height: 10px;
    }
  }

  .checkbox-disabled .label {
    color: #A5A5A5!important;
  }

}
</style>
