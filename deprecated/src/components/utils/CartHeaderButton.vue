<template>
  <div class="cart-header-btn" @click="$store.commit('showCart')">
    <img src="@/assets/images/icons/cart.svg" alt="">
    <div class="cart-header-btn__count">{{count}}</div>
  </div>
</template>

<script>
export default {
  name: 'button-to-cart',
  components: {
  },
  computed: {
    count () {
      let count = 0
      this.$store.state.cart.list.forEach(item => count += item.count)
      return count
    }
  }
}
</script>

<style scoped lang="scss">
  .cart-header-btn {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);

    cursor: pointer;

    &__count {
      position: absolute;
      right: -5px;
      bottom: -5px;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      background: #FFFFFF;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.51);

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      line-height: 10px;
      letter-spacing: 0.07em;

      color: #000000;

    }

  }
</style>
