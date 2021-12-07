<template>
  <div class="order-chapter2">
    <chapter-label label="Способ оплаты" :number="2" />
    <div class="order-chapter2__content">
      <checkbox v-model="test"
                :show="true"
                :icon="require('@/assets/images/icons/delivery.svg')" >
        Оплата наличными при получении
      </checkbox>
    </div>
  </div>
</template>

<script>
import ChapterLabel from '@/app/cart/components/order/ChapterLabel'
import Checkbox from '@/app/cart/components/order/Checkbox'

export default {
  name: 'order-chapter2',
  components: {
    ChapterLabel,
    Checkbox
  },
  computed: {
  },
  data() {
    return {
      test: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.order-chapter2 {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 17px 46px;
  border-radius: 8px;

  background-color: #FFFFFF;

  > .order-chapter2__content {
    padding-top: 10px;
  }

}
</style>
