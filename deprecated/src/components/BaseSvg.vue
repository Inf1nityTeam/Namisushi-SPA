<template>
  <img :src="src" alt="" ref="image" @load="imgToSvg">
</template>

<script>
export default {
  name: 'base-svg',
  props: {
    src: String
  },
  methods: {
    imgToSvg: function () {
      const img = this.$refs.image

      const imgClass = img.className
      const imgURL = img.src

      fetch(imgURL).then(r => r.text()).then(text => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(text, 'text/xml')
        const svg = xmlDoc.getElementsByTagName('svg')[0]

        if (svg) {
          if (typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass)
          }

          if (img.parentNode) {
            img.parentNode.replaceChild(svg, img)
          }
        }

      }).catch(console.error)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
