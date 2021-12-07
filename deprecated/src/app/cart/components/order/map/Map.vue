<template>
  <div v-loading="loading" class="map-wrapper">
    <div v-show="!error" id="map" class="map" @mouseover="mouseover"></div>
    <address-not-found v-show="error" :data="data" :error-type="error"/>
<!--    <distance-exceeded v-show="error === 'DISTANCE_EXCEEDED'"/> 'ADDRESS_NOT_FOUND'-->
  </div>
</template>

<script>
import AddressNotFound from '@/app/cart/components/order/map/AddressNotFound'
// import DistanceExceeded from '@/app/cart/components/order/map/DistanceExceeded'

export default {
  name: 'map',
  components: { AddressNotFound },
  model: { prop: 'deliveryCost', event: 'input' },
  props: {
    data: { type: Object },
    address: { type: String },
    deliveryCost: { type: Number }
  },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  mounted() {
    /* eslint-disable */
    this.loading = true
    ymaps.load()
        .then(maps => {
          const map = new maps.Map('map', {
            center: [48.005202, 37.799126],
            zoom: 12,
            controls: []
          })

          const routePanelControl = new ymaps.control.RoutePanel({
            options: { visible: false }
          })
          const zoomControl = new ymaps.control.ZoomControl({
            options: {
              size: 'small', float: 'none',
              position: { bottom: 30, right: 10 }
            }
          })

          // // Пользователь сможет построить только автомобильный маршрут.
          routePanelControl.routePanel.options.set({ types: { auto: true } })

          // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
          routePanelControl.routePanel.state.set({
              fromEnabled: false,
              from: 'Донецк, Университетская 33',
              toEnabled: false,
              to: this.address
           })
          // routePanelControl.routePanel.visible = false

          map.controls.add(routePanelControl).add(zoomControl)

          // Получим ссылку на маршрут.
          routePanelControl.routePanel.getRouteAsync().then((route) => {

            // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
            route.model.setParams({results: 1}, true)

            // Повесим обработчик на событие построения маршрута.
            route.model.events.add('requestsuccess', () => {

              let activeRoute = route.getActiveRoute()
              if (activeRoute) {
                // Получим протяженность маршрута.
                let length = route.getActiveRoute().properties.get("distance")
                if (length.value > 25000) {
                  this.error = 'DISTANCE_EXCEEDED'
                  this.loading = false
                  // this.$emit('distanceExceeded')
                  return
                }
                let price = this.calcDeliveryCost(Math.round(length.value / 1000)) // Вычислим стоимость доставки.
                let balloonContentLayout = ymaps.templateLayoutFactory.createClass('<span>Расстояние: ' + length.text + '.</span><br/>' + '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>') // Создадим макет содержимого балуна маршрута.
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
                this.loading = false
              } else {
                this.error = 'ADDRESS_NOT_FOUND'
                this.loading = false
              }
            });

            route.model.events.add('requestfail', () => {
              this.error = 'ADDRESS_NOT_FOUND'
              this.loading = false
            })

          });

          // Функция, вычисляющая стоимость доставки.
          // function calculate(routeLength) {
          //   return Math.max(routeLength * 15, 15);
          // }

        }).catch(error => console.log('Failed to load Yandex Maps', error))
  },
  methods: {
    calcDeliveryCost: function (routeLength) {
      const cost = Math.max(routeLength * 15, 15)
      this.$emit('input', cost)
      return cost
    },
    mouseover: function () {
      let block = document.querySelector('.card-scroll')
      block.__vue__.destroy()
    }
  }
}
</script>

<style scoped lang="scss">
.map-wrapper, .map {
  width: 100%;
  min-height: 220px;
}
</style>
