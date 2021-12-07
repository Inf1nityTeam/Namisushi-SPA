<template>
  <div class="drop-btn-group">
    <drop-btn
        v-for="(item, i) in items" :key="i"
        :options="item"/>
  </div>
</template>

<script>
import DropBtn from "@/app/home/banner/dropBtn/DropBtn";

export default {
  name: 'drop-btn-group',
  components: { DropBtn },
  data() {
    return {
      items: [{
        icon: require('@/assets/images/icons/phone-black.svg'),
        link: {
          src: 'tel:+380717009791',
          target: '_self'
        },
        content: ['+38 071 700 97 91', '+38 071 700 97 91'],
        width: '200px'
      }, {
        icon: require('@/assets/images/icons/point.svg'),
        link: {
          src: 'https://www.google.com/maps?ll=48.004952,37.799288&z=16&t=m&hl=ru&gl=UA&mapclient=embed&q=%D1%83%D0%BB.+%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+33+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+83000',
          target: '_blank'
        },
        content: ['г. Донецк,', 'ул. Университетская, 33'],
        width: '230px'
      }, {
        icon: require('@/assets/images/icons/clock.svg'),
        content: ['Ежедневно с 10:00 до 21:00', 'Доставка с 11:00 до 20:30'],
        width: '250px'
      }]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
