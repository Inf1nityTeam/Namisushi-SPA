<template>
  <div class="making-order">
    <app-input placeholder="Номер телефона" />
    <app-input style="margin-top: 10px" placeholder="Адрес доставки" />
    <button @close="send">Оформить заказ</button>
  </div>
</template>

<script>
import AppInput from '@/components/utils/AppInput'

export default {
  name: 'making-order',
  components: {
    AppInput
  },
  data() {
    return {
    }
  },
  methods: {
    send: function () {

    }
  }
}
</script>

<style scoped lang="scss">
.making-order {
  width: 100%;
  height: 100vh;
  background: #D0C0B4;
  padding: 40px;
}
</style>
