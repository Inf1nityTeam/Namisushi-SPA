<template>
  <div class="app-input" :class="type === 'password' ? 'app-input__password' : ''">
    <img v-if="icon === 'mail'" class="app-input__icon" src="@/assets/images/icons/mail.svg" alt="">
    <img v-else-if="icon === 'password'" class="app-input__icon" src="@/assets/images/icons/padlock.svg" alt="">
    <el-input :placeholder="placeholder" @input="$emit('input', value)" v-model="value" :show-password="type === 'password'" />
  </div>
</template>

<script>

export default {
  name: 'app-input',
  components: {
  },
  props: {
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.app-input {
  position: relative;

  &__icon {
    position: absolute;
    left: 20px;
    top: 18px;
    z-index: 9;

    &-right {
      position: absolute;
      right: 20px;
      top: 18px;
      z-index: 9;
    }

  }

}
</style>

<style lang="scss">
.app-input .el-input__inner {
  //width: 330px;
  height: 50px;

  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
}
.app-input .el-input__inner {
  padding-left: 50px;

  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.05em;

  color: #212121!important;

  &::placeholder, & {
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    letter-spacing: 0.05em;

    color: #898989;
  }

}
.app-input__password .el-input__suffix .el-input__suffix-inner > i {
  margin-top: 16px;
  margin-right: 10px;
  width: 18px!important;
  height: 18px!important;
  background: url(/images/icons/eye.svg) no-repeat;
  background-size: 100% 100%;

  &:before {
    content: '';
  }

}
</style>
