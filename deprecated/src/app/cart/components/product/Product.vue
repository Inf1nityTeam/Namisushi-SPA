<template>
  <desktop v-if="windowWidth > 550" :data="data" />
  <mobile v-else :data="data" />
</template>

<script>
import Desktop from '@/app/cart/components/product/Desktop'
import Mobile from '@/app/cart/components/product/Mobile'

export default {
  name: 'cart-product',
  components: { Desktop, Mobile },
  props: {
    data: { type: Object }
  },
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
