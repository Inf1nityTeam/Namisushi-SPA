<template>
  <div class="address-not-found">
    <div>
      <img v-if="errorType === 'ADDRESS_NOT_FOUND'" src="../images/adress-not-found.png" alt="">
      <img v-else-if="errorType === 'DISTANCE_EXCEEDED'" src="../images/distance-exceeded.png" alt="">
      <button :class="{'active': data.deliveryCalculateManually}"
              class="btn-address"
              @click="deliveryCalculateManually">Адрес введен верно</button>
      <div v-if="data && data.deliveryCalculateManually" class="text">В данном случае диспетчер обработает адрес доставки самостоятельно</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address-not-found',
  props: {
    data: { type: Object },
    errorType: { type: String }
  },
  mounted () { },
  methods: {
    deliveryCalculateManually: function () {
      this.data.deliveryCalculateManually = !this.data.deliveryCalculateManually
    }
  }
}
</script>

<style scoped lang="scss">
.address-not-found {
  width: 100%;
  min-height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  img {
    width: 100%;
  }

  .text {
    margin-top: 8px;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    letter-spacing: 0.05em;

    color: #222222;

  }

  .btn-address {
    width: 100%;
    height: 48px;

    background-color: #FFFFFF;
    border: 1px solid #0C334A;
    border-radius: 4px;


    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #0C334A;

    cursor: pointer;
    transition: 300ms;

    &.active, &:hover {
      color: #FFFFFF;
      background-color: #0C334A;
    }
  }

}
</style>
