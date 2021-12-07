<template>
  <div class="product-list">
    <product-card v-for="product in products" :key="product._id"
             :id="`product-card-${product._id}`"
             :data="product"/>
    <div v-if="products.length === 0" class="product-list__empty">
      <span>Пусто</span>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/app/home/menu/ProductCard'

export default {
  name: 'product-list',
  components: { ProductCard },
  props: {
    categoryId: { type: String }
  },
  computed: {
    products () {
      return this.$store.state.products.list
          .filter(item => item.categoryId === this.categoryId)
    }
  }
}
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 300px;

    font-family: Neucha, sans-serif;
    font-weight: bold;
    font-size: 24px;
  }

}
</style>
