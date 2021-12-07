<template>
  <div class="login-modal">
    <el-dialog
        :visible="isShowLoginModal"
        width="410px"
        :before-close="handleClose">
      <div class="login-modal__content">
        <div class="login-modal__content--logo">
          <img src="@/assets/images/login-modal-header.png" alt="">
        </div>
        <div class="login-modal__login">
          <div class="login-modal__login--oauth">
            <div @click="test" class="login-modal__login--oauth-google">
              <img src="@/assets/images/icons/google.png" alt="">
              Google
            </div>
            <div class="login-modal__login--oauth-vk">
              <img src="@/assets/images/icons/vk2.svg" alt="">
            </div>
          </div>
          <div class="login-modal__or">
            <span class="login-modal__or--line"></span>
            <span class="login-modal__or--text">или</span>
            <span class="login-modal__or--line"></span>
          </div>
          <form class="login-modal__form">
            <app-input v-model="email" icon="mail" placeholder="Адрес электронной почты"/>
            <app-input v-model="password" icon="password" type="password" placeholder="Пароль"/>
            <span class="login-modal__form-forgot">Забыли свой пароль?</span>
            <button @click="login" type="button" class="login-modal__form--submit">Войти в систему</button>
            <span class="login-modal__form--other-account">Использовать другую учетную запись</span>
          </form>
        </div>
        <div class="login-modal__footer">
          <div class="login-modal__footer--btn no-active">
            <span>Регистрация</span>
          </div>
          <div class="login-modal__footer--btn">
            <span>Войти в систему</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AppInput from "@/components/utils/AppInput";

export default {
  name: 'login-modal',
  components: {
    AppInput
  },
  computed: {
    isShowLoginModal() {
      return this.$store.state.isShowLoginModal;
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    test: function () {
      this.$api.user.register()
    },
    handleClose: function () {
      this.$store.commit('hideLoginModal');
    },
    login: async function () {
      try {
        await this.$api.user.login({email: this.email, password: this.password})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login-modal {

    &__or {
      margin-top: 15px;
      padding-left: 2px;
      padding-right: 2px;

      display: flex;
      align-items: center;

      &--line {
        display: block;
        width: 100%;
        height: 1px;

        background: #CDCDCD;
      }

      &--text {
        display: block;
        width: 70px;

        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;

        letter-spacing: 0.05em;

        color: #323232;
      }

    }

    &__login {
      margin-top: 20px;
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
      background-color: #FFFFFF;
      border-radius: 2px;

      &--oauth {
        padding-top: 20px;
        display: flex;
        justify-content: space-around;

        &-google {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 112px;
          height: 43px;

          background: #CB3A33;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
          border-radius: 2px;

          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;

          letter-spacing: 0.08em;

          color: #FFFFFF;

          cursor: pointer;

          transition: 0.3s;

          > img {
            margin-top: -5px;
            margin-right: 4px;
          }

          &:hover {
            background: #db5c55;
          }

        }

        &-vk {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 112px;
          height: 43px;

          background: #374476;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
          border-radius: 2px;

          cursor: pointer;

          transition: 0.3s;

          &:hover {
            background: #4f5fa1;
          }

        }

      }

    }

    &__form {
      margin-top: 20px;

      > .app-input {
        margin-top: 10px;
        margin-bottom: 10px;
      }

      &-forgot {
        display: block;
        margin-left: auto;
        margin-top: 15px;
        width: max-content;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;

        letter-spacing: 0.05em;

        color: #626262;
      }

      &--submit {
        margin-top: 30px;

        width: 330px;
        height: 50px;

        background: #2E2424;

        border-radius: 2px;

        border: none;

        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        letter-spacing: 0.05em;

        color: #FFFFFF;

        cursor: pointer;

        transition: 0.3s;

        &:hover {
          background: #4c3a3a;
        }

      }

      &--other-account {
        display: block;
        margin-top: 15px;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;

        letter-spacing: 0.05em;

        color: #626262;
      }

    }

    &__content {
      background: linear-gradient(156.12deg, #4D5261 0.67%, #5C7EA6 72.12%, #4F5667 100%);
      border-radius: 2px;
      padding: 18px;
    }

    &__footer {
      width: 100%;
      display: flex;

      &--btn {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        > span {
          margin-top: -10px;
        }

        &:last-child {
          width: 60%;
        }
        &:first-child {
          width: 40%;
        }

        height: 40px;
        background-color: #fff;


        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.05em;

        color: #26282C;

        &.no-active {
          box-sizing: border-box;
          margin-top: 10px;
          padding-top: 0;
          margin-right: 10px;
          border-radius: 2px;
          > span { margin-top: 0 }
        }

      }

    }

  }
</style>

<style lang="scss">
  .login-modal .el-dialog__header {
    height: 0!important;
    padding: 0!important;
    margin: 0!important;
  }
  .login-modal .el-dialog__body {
    padding: 0!important;
    margin: 0!important;
    background-color: transparent;
  }
  .login-modal .el-dialog__headerbtn {
    top: 25px;
    right: 25px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #2E2424;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    > i {
      color: #FFFFFF;
      font-weight: 600;
    }

  }
</style>
