<template>
  <div class="order-form">
    <chapter-label label="Данные для доставки" :number="2" />
    <div class="order-form__content">
      <input-expand v-model="data.username"
                    class="order-form__input"
                    placeholder="Имя">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4182 10.4814H5.58181C2.504 10.4814 0 11.5248 0 12.8072V17.5163C0 17.7732 0.499803 17.9814 1.11636 17.9814H16.8836C17.5002 17.9814 18 17.7732 18 17.5163V12.8072C18 11.5248 15.496 10.4814 12.4182 10.4814Z" fill="#474747"/><path d="M9.0042 0C6.75104 0 4.91797 1.83307 4.91797 4.08628C4.91797 5.61461 5.7615 6.9494 7.00724 7.65019C7.59811 7.98257 8.27932 8.17252 9.0042 8.17252C9.72908 8.17252 10.4103 7.98257 11.0012 7.65019C12.2469 6.9494 13.0904 5.61457 13.0904 4.08628C13.0904 1.83312 11.2574 0 9.0042 0Z" fill="#474747"/></svg>
      </input-expand>
      <input-expand v-model="data.phone"
                    class="order-form__input"
                    v-mask="'+38(071)-###-##-##'"
                    :isValid="fieldsValid.phone"
                    @focus="focusInputPhone"
                    placeholder="Телефон"
                    ref="inputPhone">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M16.5557 11.8149C15.4537 11.8149 14.3716 11.6426 13.3462 11.3037C12.8438 11.1323 12.2261 11.2896 11.9194 11.6045L9.8955 13.1324C7.54833 11.8794 6.10252 10.4341 4.8667 8.10455L6.34959 6.13336C6.73486 5.74861 6.87305 5.18658 6.70748 4.65923C6.36717 3.62845 6.1943 2.54691 6.1943 1.44441C6.19434 0.647953 5.54639 0 4.74998 0H1.44436C0.647953 0 0 0.647953 0 1.44436C0 10.5733 7.42678 18 16.5557 18C17.3521 18 18 17.352 18 16.5556V13.2593C18 12.4629 17.352 11.8149 16.5557 11.8149Z" fill="#474747"/></g><defs><clipPath id="clip0"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
      </input-expand>
      <input-expand v-model="data.additionalInformation"
                    class="order-form__input"
                    placeholder="Дополнительная информация">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C18 13.9706 13.9706 18 9 18C4.02937 18 0 13.9706 0 9C0 4.02937 4.02937 0 9 0C13.9706 0 18 4.02937 18 9Z" fill="#474747"/><path d="M9 16.0312C5.12292 16.0312 1.96875 12.8771 1.96875 9C1.96875 5.12292 5.12292 1.96875 9 1.96875C12.8771 1.96875 16.0312 5.12292 16.0312 9C16.0312 12.8771 12.8771 16.0312 9 16.0312ZM9 3.02344C5.70451 3.02344 3.02344 5.70451 3.02344 9C3.02344 12.2955 5.70451 14.9766 9 14.9766C12.2955 14.9766 14.9766 12.2955 14.9766 9C14.9766 5.70451 12.2955 3.02344 9 3.02344Z" fill="white"/><ellipse cx="8.99993" cy="9.00042" rx="7.71429" ry="7.71429" fill="#474747"/><path d="M9 12.4801C8.70872 12.4801 8.47266 12.244 8.47266 11.9527V8.40332C8.47266 8.11218 8.70872 7.87598 9 7.87598C9.29128 7.87598 9.52734 8.11218 9.52734 8.40332V11.9527C9.52734 12.244 9.29128 12.4801 9 12.4801Z" fill="white"/><path d="M9.74396 6.4335C9.74396 6.84439 9.4108 7.17755 8.99991 7.17755C8.58902 7.17755 8.25586 6.84439 8.25586 6.4335C8.25586 6.02248 8.58902 5.68945 8.99991 5.68945C9.4108 5.68945 9.74396 6.02248 9.74396 6.4335Z" fill="white"/></svg>
      </input-expand>
      <input-expand v-if="data.delivery"
                    v-model="data.address"
                    class="order-form__input"
                    :isValid="fieldsValid.address"
                    @input="handleInputAddress"
                    placeholder="Адрес доставки">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.5142 7.82913C17.5138 7.82872 17.5134 7.82831 17.513 7.8279L10.1704 0.485596C9.85743 0.172485 9.44132 0 8.99871 0C8.5561 0 8.13999 0.172348 7.82688 0.485458L0.488147 7.82405C0.485675 7.82652 0.483203 7.82913 0.480732 7.8316C-0.161969 8.47801 -0.16087 9.52679 0.48389 10.1716C0.778461 10.4663 1.16751 10.637 1.58348 10.6548C1.60038 10.6565 1.6174 10.6573 1.63457 10.6573H1.92722V16.0608C1.92722 17.13 2.7972 18 3.86672 18H6.73937C7.03051 18 7.26671 17.7639 7.26671 17.4727V13.2363C7.26671 12.7484 7.66359 12.3515 8.15153 12.3515H9.84589C10.3338 12.3515 10.7307 12.7484 10.7307 13.2363V17.4727C10.7307 17.7639 10.9668 18 11.258 18H14.1307C15.2002 18 16.0702 17.13 16.0702 16.0608V10.6573H16.3416C16.784 10.6573 17.2001 10.4849 17.5134 10.1718C18.1588 9.52597 18.1591 8.4754 17.5142 7.82913Z" fill="#474747"/></g><defs><clipPath id="clip0"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
      </input-expand>
      <ymap v-if="calcDeliveryCost && data.delivery" v-model="data.deliveryCost" :data="data" :address="data.address" @deliveryCalculateManually="deliveryCalculateManually"/>
      <div @click="calcDeliveryCost = true" v-else-if="data.address.length > 5 && data.delivery">
        <button class="btn-calc-cost">Рассчитать цену доставки</button>
      </div>
    </div>
  </div>
</template>

<script>
import Ymap from '@/app/cart/components/order/map/Map'

import ChapterLabel from '@/app/cart/components/order/ChapterLabel'
import InputExpand from '@/components/ui/inputs/InputExpand'

export default {
  name: 'order-chapter3',
  components: { ChapterLabel, InputExpand, Ymap },
  model: {
    prop: 'data',
    event: 'input'
  },
  props: {
    data: { type: Object }
  },
  data() {
    return {
      calcDeliveryCost: false,
      fieldsValid: {
        address: true,
        phone: true
      }
    }
  },
  methods: {
    deliveryCalculateManually: function () {
      this.data.deliveryCalculateManually = true
    },
    handleInputAddress: function () {
      this.data.deliveryCost = null
      this.data.deliveryCalculateManually = false
      this.validateAddress()
      if (this.calcDeliveryCost) this.calcDeliveryCost = false
    },
    focusInputPhone: function () {
      if (this.data.phone.length === 0) this.$refs.inputPhone.setData('+38(071)-')
    },
    validateAddress: function (notify) {
      if (!this.data.address || this.data.address.length <= 5) {
        this.fieldsValid.address = false
        if (notify)
          setTimeout(() => this.$notify.error({ title: 'Error', message: 'Введен некорректный адрес' }), 100)
        return false
      } else {
        this.fieldsValid.address = true
        return true
      }
    },
    validatePhone: function (notify) {
      if (this.data.phone.length !== 18) {
        this.fieldsValid.phone = false
        if (notify) {
          if (this.data.phone.length === 8 || this.data.phone.length === 0)
            this.$notify.error({ title: 'Error', message: 'Введите номер телефона!' })
          else
            this.$notify.error({ title: 'Error', message: 'Введен некорректный номер телефона' })
        }
        return false
      } else {
        this.fieldsValid.phone = true
        return true
      }
    },
    validate: function (notify = false) {
      let valid = true

      if (this.data.delivery && !this.validateAddress(notify)) valid = false

      if (!this.validatePhone(notify)) valid = false

      return valid
    }
  }
}
</script>

<style scoped lang="scss">
.order-form {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 17px 46px;
  border-radius: 8px;

  background-color: #FFFFFF;
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-right: 10px;
  }

  .order-form__content {
    padding-top: 10px;
  }

  .order-form__input {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .btn-calc-cost {
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

    &:hover {
      color: #FFFFFF;
      background-color: #0C334A;
    }

  }

}
</style>
