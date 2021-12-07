<template>
  <div class="menu">
    <h2>МЕНЮ</h2>
    <div v-loading="loading" style="max-width: 1250px;margin: 50px auto;min-height: 300px">
      <el-tabs v-model="activeTab">
        <el-tab-pane v-for="item in categories" :label="item.title" :name="item._id" :key="item._id">
          <product-list :categoryId="item._id"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ProductList from '@/app/home/menu/ProductList'

export default {
  name: 'app-menu',
  components: { ProductList },
  computed: {
    categories () {
      return this.$store.state.category.list
    },
    scrollTo() {
      return this.$route.query.scrollTo
    },
  },
  watch: {
    categories: {
      handler: function (data) {
        if(this.activeTab === '0') {
          this.activeTab = data[0]._id
          this.loading = false
        }
      },
      deep: true
    }
  },
  data() {
    return {
      loading: true,
      activeTab: '0'
    }
  },
  mounted() {
    if (this.categories.length !== 0 && this.activeTab === '0') {
      this.activeTab = this.categories[0]._id
      this.loading = false
    }
    if (this.scrollTo) {
      this.activeTab = this.$route.query.categoryId
      this.$nextTick(() => {
        this.$scrollTo(`#product-card-${this.scrollTo}`, 300, { offset: -100 })
        this.$router.push({ query: null })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .menu {
    padding-bottom: 1px;

    > h2 {
      padding-top: 60px;

      position: relative;

      width: max-content;
      margin: 0 auto;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 60px;
      line-height: 66px;

      color: #312525;

      &:after {
        position: absolute;
        content: '';
        left: -40px;
        top: 85px;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        background: #312525;
      }

      &:before {
        position: absolute;
        content: '';
        right: -40px;
        top: 85px;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        background: #312525;
      }

    }

  }
</style>

<style lang="scss">
.menu .el-tabs__nav-scroll {
  @media screen and (max-width: 1250px) {
    max-width: 85vw;
  }
}
.menu .el-tabs__item {
  font-family: Neucha, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 33px;

  text-transform: uppercase;

  color: #988D8D;

  &.is-active {
    color: #312525!important;
  }

  &:hover {
    color: #312525!important;
  }

}

.menu .el-tabs__active-bar {
  background-color: #312525;
}

.menu .el-tab-pane {
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.menu .el-tabs__header {
  max-width: calc(100% - 40px);
  width: max-content;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.menu .el-tabs__nav-prev > .el-icon-arrow-left, .el-tabs__nav-next > .el-icon-arrow-right {
  font-size: 24px;
  font-weight: 900;
  color: #000000;
}
.menu .el-tabs__nav-prev {
  width: 40px;
}

.el-tabs__nav-wrap {
  &.is-scrollable {
    padding: 0 40px!important;
  }
}
</style>
