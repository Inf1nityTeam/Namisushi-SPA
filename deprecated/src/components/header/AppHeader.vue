<template>
  <desktop v-if="windowWidth > 1250"/>
  <mobile v-else />
</template>

<script>
import Desktop from '@/components/header/components/Desktop'
import Mobile from '@/components/header/components/Mobile'

export default {
  name: 'app-header',
  components: {
    Desktop,
    Mobile
  },
  computed: {
    windowWidth() { return this.$store.state.windowWidth }
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">

</style>
