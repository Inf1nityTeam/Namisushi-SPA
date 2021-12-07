<template>
  <div class="order" v-loading="loading">
    <button v-if="windowWidth > 640" @click="$emit('changeMode', 'INDEX')" class="order__btn-back"><i class="el-icon-back"></i></button>
    <delivery-method v-model="order.delivery" :order="order"/>
    <order-form v-model="order" ref="orderChapter3" />
    <confirm-order :delivery="order.delivery" :delivery-cost="order.deliveryCost" @send="createOrder" />
    <div style="height: 40px"></div>
  </div>
</template>

<script>
import DeliveryMethod from '@/app/cart/components/order/DeliveryMethod'
import OrderForm from '@/app/cart/components/order/OrderForm'
import ConfirmOrder from '@/app/cart/components/order/ConfirmOrder'
import {cartService} from '@/app/cart/cart.service'

export default {
  name: 'cart',
  components: {ConfirmOrder, DeliveryMethod, OrderForm},
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    },
    cartProducts() {
      return this.$store.state.cart.list.map(item => ({
        product: item._id,
        count: item.count
      }))
    }
  },
  data() {
    return {
      loading: false,
      order: {
        // products: null,
        deliveryCost: null,
        delivery: true,
        address: '',
        phone: '',
        username: '',
        additionalInformation: '',
        deliveryCalculateManually: false
      }
    }
  },
  methods: {
    createOrder: function () {
      if (this.$refs.orderChapter3.validate(true)) {
        let tmp = {
          products: this.cartProducts,
          ...this.order
        }
        if (!tmp.deliveryCost && tmp.delivery) tmp.deliveryCalculateManually = true
        if (tmp.additionalInformation.length === 0)
          delete tmp.additionalInformation
        if (tmp.username.length === 0)
          delete tmp.username
        this.loading = true
        cartService.createOrder(tmp)
            .then(() => {
              this.$store.commit('hideCart')
              this.$store.commit('clearCartProducts')
              this.$store.commit('setPhoneNumber', tmp.phone)
              this.$nextTick(() => this.$router.push('/successful-order'))
            })
            .finally(() => this.loading = false)
      }
    },
  }
}
</script>

<style scoped lang="scss">
.order {
  position: relative;

  width: 100%;
  height: 100vh;
  padding: 40px;

  box-sizing: border-box;

  background: #D0C0B4;

  @media screen and (max-width: 640px) {
    padding: 60px 20px 20px 20px;
    //min-height: calc(100vh - 42px);
  }

  > .order__btn-back {
    position: fixed;
    top: 22px;
    right: 574px;

    width: 52px;
    height: 52px;

    border: none;
    border-radius: 50%;

    background-color: #0C334A;

    cursor: pointer;

    transition: 0.3s;

    &:hover { background-color: #173e54; }

    > i {
      font-size: 26px;
      font-weight: bold;
      color: #FFFFFF;
    }

  }

}
</style>
