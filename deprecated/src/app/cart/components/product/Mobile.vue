<template>
  <div class="product">
    <div class="product__content">
      <div class="product__images">
        <img :src="host + data.images[0]" alt="">
      </div>
      <div class="product__info">
        <div>
          <h3>{{ data.title }}</h3>
          <div class="product__info-description">
            {{ data.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="product__separator"></div>

    <div class="product__content" style="padding-top: 5px">
      <plus-minus v-model="count" :id="data._id" />

      <div class="product__cost">
        {{ count * data.cost }} ₽
      </div>
    </div>

  </div>
</template>

<script>
import PlusMinus from '@/components/ui/buttons/PlusMinus'

export default {
  name: 'mobile',
  components: { PlusMinus },
  props: {
    data: { type: Object }
  },
  computed: {
    host() {
      return this.$store.state.host
    }
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
.product {
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 20px 24px;

  width: 100%;
  min-height: 130px;

  background: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 8px;

  .product__content {
    display: flex;
  }

  .product__images {

    > img {
      width: 96px;
      height: 96px;
      object-fit: contain;
      @media screen and (max-width: 480px) {
        width: 64px;
        height: 64px;
      }
    }

  }

  .product__info {
    display: flex;
    align-items: center;

    padding-left: 40px;

    @media screen and (max-width: 480px) {
      padding-left: 20px;
    }

    > div > h3 {
      margin: 0;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: left;

      color: #141414;
      @media screen and (max-width: 480px) {
        font-size: 20px;
        line-height: 22px;
      }
    }

    > div > .product__info-description {
      margin-top: 5px;

      font-family: SeoulNamsan CM, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      text-align: left;

      color: #717171;
      @media screen and (max-width: 480px) {
        font-size: 13px;
        line-height: 15px;
      }
    }

  }

  .product__separator {
    margin-top: 5px;
    margin-bottom: 5px;

    width: 100%;
    height: 1px;

    background: #E6E6E6;
    border-radius: 2px;
  }

  .product__cost {
    margin-left: auto;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;

    letter-spacing: 0.05em;

    color: #141414;

  }

}
</style>
