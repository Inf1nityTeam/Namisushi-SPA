<template>
  <div class="plus-minus" @click="($event) => $emit('click', $event)">
    <div @click="dec" class="plus-minus__circle">-</div>
    <div class="plus-minus__value">{{count}}</div>
    <div @click="inc" class="plus-minus__circle">+</div>
  </div>
</template>

<script>
export default {
  name: 'plus-minus',
  model: {
    prop: 'val',
    event: 'input'
  },
  props: {
    id: { type: String },
    val: { type: Number }
  },
  computed: {
    count () {
      if(this.$store.state.cart.list.find(item => item._id === this.id))
        return this.$store.state.cart.list.find(item => item._id === this.id).count
      else return 0
    }
  },
  watch: {
    count () { this.$emit('input', this.count) }
  },
  data() {
    return { }
  },
  mounted () { this.$emit('input', this.count) },
  methods: {
    inc: function () { this.changeCount(1) },
    dec: function () { if(this.count > 0) this.changeCount(-1) },
    changeCount: function (payload) {
      if(this.count + payload === 0)
        this.$store.dispatch('removeProductFromCart', this.id)
      else this.$store.commit('setCountForProductCartById',
            { _id: this.id, count: this.count + payload })
    }
  }
}
</script>

<style scoped lang="scss">
  .plus-minus {
    display: flex;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */

    &__circle {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      border-radius: 50%;

      background: #312525;

      color: #FFFFFF;

      cursor: pointer;
    }

    &__value {
      width: 16px;
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      padding-right: 8px;


      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-align: center;

      letter-spacing: 0.05em;

      color: #353535;
    }

  }
</style>
