<template>
  <div class="scroll">
    <div ref="scroll">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  methods: {
    scrollTop: function () {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped lang="scss">
.scroll {
  overflow: hidden;

  > div {
    margin-right: -16px;
    padding-right: 16px;
    overflow-y: scroll;
  }

}
</style>
