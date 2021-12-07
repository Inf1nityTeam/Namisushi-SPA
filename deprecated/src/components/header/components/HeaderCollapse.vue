<template>
  <div class="header-collapse">
    <el-drawer
        :visible="isShowHeaderCollapse"
        direction="ltr"
        @close="close"
        :with-header="false">
      <perfect-scrollbar style="height: 100vh">
        <div class="header-collapse__content">
          <div @click="close" class="header-collapse__content--close">
            <i class="el-icon-close"></i>
          </div>

          <img class="header-collapse__content--header-img" src="images/img-burger-menu.png" alt="">

          <div class="header-collapse__content-menu">
            <router-link
                to="/"
                class="header-collapse__content-menu--item"
                :class="{'active': $route.name === 'main'}"
                @click.native="close">
              <div class="icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M15.0062 7.94116C13.3646 7.94116 11.9812 9.06763 11.5884 10.5882H18.4239C18.0312 9.06763 16.6477 7.94116 15.0062 7.94116Z" fill="white" fill-opacity="0.65"/><path d="M3.5293 0V30H26.4705V0H3.5293ZM14.1175 25.5882H7.05871V23.8235H14.1175V25.5882ZM14.1175 21.1765H7.05871V19.4118H14.1175V21.1765ZM22.9411 25.5882H17.6469V23.8235H22.9411V25.5882ZM22.9411 21.1765H17.6469V19.4118H22.9411V21.1765ZM22.9411 16.7647H7.05871V15H22.9411V16.7647ZM22.0587 12.3529H20.294H9.70577H7.94106V10.5882H9.77971C10.1527 8.37465 11.9039 6.62341 14.1175 6.25041V4.41176H15.8822V6.25041C18.0958 6.62341 19.8471 8.37465 20.2201 10.5882H22.0587V12.3529Z" fill="white" fill-opacity="0.65"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>
              </div>
              <div class="text">Меню</div>
            </router-link>
            <router-link
                to="/delivery"
                class="header-collapse__content-menu--item"
                :class="{'active': $route.name === 'delivery'}"
                @click.native="close">
              <div class="icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M20.15 2.41099L6.53625 9.38099L1.125 6.71849L14.4988 0.114741C14.7988 -0.0377588 15.1588 -0.0377588 15.4738 0.114741L20.15 2.41099Z" fill="white" fill-opacity="0.6"/><path d="M28.8598 6.7188L15.0073 13.5813L9.81982 11.025L9.06982 10.6438L22.6986 3.67505L23.4486 4.05505L28.8598 6.7188Z" fill="white" fill-opacity="0.6"/><path d="M13.8975 15.5588L13.8825 30L0.615 23.0763C0.24 22.8788 0 22.4825 0 22.0563V8.69629L5.6225 11.4663V16.3363C5.6225 16.96 6.1325 17.4775 6.7475 17.4775C7.3625 17.4775 7.8725 16.96 7.8725 16.3363V12.5925L8.6225 12.9575L13.8975 15.5588Z" fill="white" fill-opacity="0.6"/><path d="M29.9848 8.71124L16.1473 15.5437L16.1323 29.985L29.9998 22.7437L29.9848 8.71124Z" fill="white" fill-opacity="0.6"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>
              </div>
              <div class="text">Доставка</div>
            </router-link>
            <router-link
                to="/stocks"
                class="header-collapse__content-menu--item"
                :class="{'active': $route.name === 'stocks'}"
                @click.native="close">
              <div class="icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8477 17.6367C23.3627 17.6367 22.9688 18.0307 22.9688 18.5156C22.9688 19.0005 23.3627 19.3945 23.8477 19.3945C24.3326 19.3945 24.7266 19.0005 24.7266 18.5156C24.7266 18.0307 24.3326 17.6367 23.8477 17.6367Z" fill="white" fill-opacity="0.65"/><path d="M29.1211 5.33203H8.86201V7.96875C8.86201 8.45455 8.46891 8.84766 7.98311 8.84766C7.4973 8.84766 7.1042 8.45455 7.1042 7.96875V5.33203H0.878906C0.393105 5.33203 0 5.72514 0 6.21094V11.4844C0 11.9702 0.393105 12.3633 0.878906 12.3633C2.33285 12.3633 3.51562 13.5461 3.51562 15C3.51562 16.4539 2.33285 17.6367 0.878906 17.6367C0.393105 17.6367 0 18.0298 0 18.5156V23.7891C0 24.2749 0.393105 24.668 0.878906 24.668H7.03125V22.0312C7.03125 21.5454 7.42436 21.1523 7.91016 21.1523C8.39596 21.1523 8.78906 21.5454 8.78906 22.0312V24.668H29.1211C29.6069 24.668 30 24.2749 30 23.7891V6.21094C30 5.72514 29.6069 5.33203 29.1211 5.33203ZM8.78906 18.5156C8.78906 19.0014 8.39596 19.3945 7.91016 19.3945C7.42436 19.3945 7.03125 19.0014 7.03125 18.5156V16.7578C7.03125 16.272 7.42436 15.8789 7.91016 15.8789C8.39596 15.8789 8.78906 16.272 8.78906 16.7578V18.5156ZM8.78906 13.2422C8.78906 13.728 8.39596 14.1211 7.91016 14.1211C7.42436 14.1211 7.03125 13.728 7.03125 13.2422V11.4844C7.03125 10.9986 7.42436 10.6055 7.91016 10.6055C8.39596 10.6055 8.78906 10.9986 8.78906 11.4844V13.2422ZM14.1797 11.4844C14.1797 10.0304 15.3625 8.84766 16.8164 8.84766C18.2704 8.84766 19.4531 10.0304 19.4531 11.4844C19.4531 12.9383 18.2704 14.1211 16.8164 14.1211C15.3625 14.1211 14.1797 12.9383 14.1797 11.4844ZM16.3289 21.0047C15.9247 20.7352 15.8156 20.1902 16.0852 19.7859L23.1164 9.239C23.3851 8.83477 23.9301 8.7266 24.3352 8.99525C24.7395 9.26479 24.8485 9.80977 24.579 10.2141L17.5477 20.7609C17.2826 21.1592 16.7396 21.2769 16.3289 21.0047ZM23.8477 21.1523C22.3937 21.1523 21.2109 19.9696 21.2109 18.5156C21.2109 17.0617 22.3937 15.8789 23.8477 15.8789C25.3016 15.8789 26.4844 17.0617 26.4844 18.5156C26.4844 19.9696 25.3016 21.1523 23.8477 21.1523Z" fill="white" fill-opacity="0.65"/><path d="M16.8164 10.6055C16.3315 10.6055 15.9375 10.9995 15.9375 11.4844C15.9375 11.9693 16.3315 12.3633 16.8164 12.3633C17.3013 12.3633 17.6953 11.9693 17.6953 11.4844C17.6953 10.9995 17.3013 10.6055 16.8164 10.6055Z" fill="white" fill-opacity="0.65"/></svg>
              </div>
              <div class="text">Акции</div>
            </router-link>
            <el-tooltip class="item" effect="dark" placement="bottom">
              <div slot="content">Временно недоступно</div>
              <div class="header-collapse__content-menu--item">
                <div class="icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6644 10.5398C24.6645 10.5619 24.6679 10.5833 24.6679 10.6055C24.6679 17.3904 18.7541 22.9102 11.4843 22.9102H7.74414C9.30918 27.0525 13.5363 30 18.5155 30H29.121C29.4824 30 29.8068 29.7786 29.939 29.4421C30.0712 29.1057 29.9836 28.7229 29.7184 28.4766L27.3143 26.2467C29.0532 24.3472 29.9999 21.9085 29.9999 19.3945C29.9999 15.7525 27.886 12.4498 24.6644 10.5398Z" fill="white" fill-opacity="0.65"/><path d="M0.281543 19.6288C0.0163476 19.8752 -0.07125 20.258 0.0609375 20.5944C0.193125 20.9309 0.517559 21.1523 0.878906 21.1523H11.4844C17.7844 21.1523 22.9102 16.4214 22.9102 10.6055C22.9102 4.78957 17.7844 0 11.4844 0C5.18438 0 0 4.78957 0 10.6055C0 13.1194 0.946699 15.4995 2.68564 17.3989L0.281543 19.6288ZM7.29492 5.33203H13.7109C14.1967 5.33203 14.7363 5.72514 14.7363 6.21094C14.7363 6.69674 14.1967 7.08984 13.7109 7.08984H7.29492C6.80912 7.08984 6.21094 6.69674 6.21094 6.21094C6.21094 5.72514 6.80912 5.33203 7.29492 5.33203ZM7.29492 8.84766H13.7109C14.1967 8.84766 14.7363 9.24076 14.7363 9.72656C14.7363 10.2124 14.1967 10.6055 13.7109 10.6055H7.29492C6.80912 10.6055 6.21094 10.2124 6.21094 9.72656C6.21094 9.24076 6.80912 8.84766 7.29492 8.84766ZM7.29492 12.3633H16.7578C17.2436 12.3633 17.6367 12.7564 17.6367 13.2422C17.6367 13.728 17.2436 14.1211 16.7578 14.1211H7.29492C6.80912 14.1211 6.21094 13.728 6.21094 13.2422C6.21094 12.7564 6.80912 12.3633 7.29492 12.3633Z" fill="white" fill-opacity="0.65"/></svg>
                </div>
                <div class="text">Отзывы</div>
              </div>
            </el-tooltip>
            <router-link
                to="/contacts"
                class="header-collapse__content-menu--item"
                :class="{'active': $route.name === 'contacts'}"
                @click.native="close">
              <div class="icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8678 18.7898C15.5844 18.9669 15.2656 19.0378 14.9823 19.0378C14.6989 19.0378 14.3802 18.9669 14.0968 18.7898L0 10.183V21.6234C0 24.0673 1.98347 26.0508 4.42739 26.0508H25.5726C28.0165 26.0508 30 24.0673 30 21.6234V10.183L15.8678 18.7898Z" fill="white" fill-opacity="0.65"/><path d="M25.5725 3.94922H4.42732C2.33759 3.94922 0.566631 5.43682 0.141602 7.42029L15.0176 16.4876L29.8582 7.42029C29.4332 5.43682 27.6623 3.94922 25.5725 3.94922Z" fill="white" fill-opacity="0.65"/></svg>
              </div>
              <div class="text">Контакты</div>
            </router-link>
          </div>

        </div>
      </perfect-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'header-collapse',
  components: { },
  computed: {
    isShowHeaderCollapse() { return this.$store.state.isShowHeaderCollapse }
  },
  data() {
    return {
    }
  },
  methods: {
    close: function () {
      this.$store.commit('hideHeaderCollapse')
    }
  }
}
</script>

<style scoped lang="scss">
.header-collapse {

  &__content {
    position: relative;

    padding: 70px 60px 70px 0px;
    z-index: 0;
    //@media screen and (max-width: 600px) { padding: 40px 30px }
    //@media screen and (max-width: 500px) { padding: 40px 15px }

    box-sizing: border-box;

    background: #0F2130;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 100vh;

    &--close {
      position: absolute;
      top: 30px;
      right: 30px;
      color: #FFFFFF;
      font-size: 30px;
      cursor: pointer;
    }

    &--header-img {
      position: absolute;
      top: -80px;
      left: -100px;
      z-index: -1;

      width: 500px;

      object-fit: contain;

      @media screen and (max-height: 768px) {
        width: 400px;
        top: -40px;
        left: -50px;
      }
      @media screen and (max-height: 680px) {
        top: -80px;
      }


      @media screen and (max-width: 480px) {
        left: -90px;
      }
      @media screen and (max-width: 420px) {
        left: -110px;
      }
    }

    &-menu {
      margin-top: 280px;
      z-index: 1;

      @media screen and (max-height: 768px) {
        margin-top: 230px;
      }
      @media screen and (max-height: 700px) {
        margin-top: 200px;
      }
      @media screen and (max-height: 680px) {
        margin-top: 180px;
      }
      @media screen and (max-height: 660px) {
        margin-top: 160px;
      }
      @media screen and (max-height: 625px) {
        margin-top: 140px;
      }

      &--item {
        display: flex;
        align-items: center;
        height: 62px;

        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 115px;

        text-decoration: none!important;

        @media screen and (max-width: 480px) {
          padding-left: 80px;
        }
        @media screen and (max-width: 420px) {
          padding-left: 60px;
        }

        &.active {
          background: linear-gradient(270deg, #154058 0%, rgba(7, 72, 110, 0) 97.98%);
          border-radius: 4px;

          .icon > svg path {
            fill-opacity: 1;
          }
        }

        > .text {
          padding-left: 30px;

          font-family: Ubuntu, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: 0.04em;

          color: #FFFFFF;
        }

      }

    }

  }

}
</style>

<style lang="scss">
.header-collapse .el-drawer {
  width: 600px !important;

  @media screen and (max-width: 600px) {
    width: 100% !important;
  }

}
</style>
