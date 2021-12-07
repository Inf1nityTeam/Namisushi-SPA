<template>
  <div class="temp">
    <div class="temp__item">
      <label>Номер телефона</label>
      <div class="temp__item-content">
        <a :href="`tel:${$config.phoneNumber.replaceAll(' ', '')}`">{{ $config.phoneNumber }}</a>
<!--        <a href="tel:+380717009791">+38 071 700 97 91</a>-->
      </div>
    </div>
    <div class="temp__item">
      <label>Адрес</label>
      <div class="temp__item-content">
        г. Донецк, <br>
        ул. Университетская, 33
      </div>
    </div>
    <div class="temp__item">
      <label>График работы</label>
      <div class="temp__item-content">
        Ежедневно <br>
        с 10:00 до 21:00
      </div>
    </div>
    <div class="temp__item">
      <label>Социальные сети</label>
      <div class="temp__item-content temp__item-socials">
        <a :href="$config.socials.vk" target="_blank">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#4D76A1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4334 21.579H15.6108C15.6108 21.579 15.9664 21.5399 16.1479 21.3442C16.3151 21.1645 16.3097 20.8271 16.3097 20.8271C16.3097 20.8271 16.2867 19.2473 17.0199 19.0147C17.7426 18.7855 18.6708 20.5415 19.6545 21.2166C20.3984 21.7276 20.9636 21.6156 20.9636 21.6156L23.5939 21.579C23.5939 21.579 24.9699 21.4942 24.3175 20.4123C24.264 20.3238 23.9375 19.612 22.3618 18.1494C20.7125 16.6186 20.9334 16.8662 22.9201 14.2183C24.13 12.6056 24.6138 11.6211 24.4627 11.1994C24.3186 10.7978 23.4287 10.904 23.4287 10.904L20.4671 10.9224C20.4671 10.9224 20.2476 10.8925 20.0847 10.9898C19.9256 11.0853 19.8232 11.3077 19.8232 11.3077C19.8232 11.3077 19.3545 12.5556 18.7293 13.6169C17.4106 15.8563 16.8833 15.9745 16.6677 15.8354C16.1664 15.5114 16.2915 14.5335 16.2915 13.8388C16.2915 11.6687 16.6207 10.7639 15.6506 10.5296C15.3287 10.4518 15.0918 10.4005 14.2685 10.3922C13.2117 10.3812 12.3173 10.3954 11.8109 10.6435C11.474 10.8085 11.2141 11.1762 11.3724 11.1973C11.5681 11.2235 12.0114 11.3168 12.2465 11.6369C12.5499 12.0497 12.5393 12.9771 12.5393 12.9771C12.5393 12.9771 12.7136 15.5317 12.132 15.8491C11.7328 16.0667 11.1852 15.6223 10.0095 13.5907C9.40706 12.55 8.95223 11.3997 8.95223 11.3997C8.95223 11.3997 8.86452 11.1847 8.7081 11.0698C8.51826 10.9305 8.25301 10.8861 8.25301 10.8861L5.43873 10.9045C5.43873 10.9045 5.01626 10.9163 4.86117 11.1C4.7232 11.2634 4.85021 11.6013 4.85021 11.6013C4.85021 11.6013 7.0535 16.7561 9.54824 19.3537C11.8358 21.7354 14.4334 21.579 14.4334 21.579Z" fill="white"/></svg>
        </a>
        <a :href="$config.socials.ig" target="_blank">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1.87513 2.04137C-0.482373 4.49012 0.000127003 7.09137 0.000127003 14.9939C0.000127003 21.5564 -1.14487 28.1351 4.84763 29.6839C6.71888 30.1651 23.2989 30.1651 25.1676 29.6814C27.6626 29.0376 29.6926 27.0139 29.9701 23.4851C30.0089 22.9926 30.0089 7.00387 29.9689 6.50137C29.6739 2.74262 27.3601 0.576369 24.3114 0.137619C23.6126 0.036369 23.4726 0.00636903 19.8876 0.00011903C7.17138 0.00636903 4.38388 -0.559881 1.87513 2.04137Z" fill="url(#paint0_linear)"/><path d="M14.9975 3.92378C10.4588 3.92378 6.14876 3.52003 4.50251 7.74503C3.82251 9.49003 3.92126 11.7563 3.92126 15.0013C3.92126 17.8488 3.83001 20.525 4.50251 22.2563C6.14501 26.4838 10.49 26.0788 14.995 26.0788C19.3413 26.0788 23.8225 26.5313 25.4888 22.2563C26.17 20.4938 26.07 18.2613 26.07 15.0013C26.07 10.6738 26.3088 7.88003 24.21 5.78253C22.085 3.65753 19.2113 3.92378 14.9925 3.92378H14.9975ZM14.005 5.92003C23.4725 5.90503 24.6775 4.85253 24.0125 19.4738C23.7763 24.645 19.8388 24.0775 14.9988 24.0775C6.17376 24.0775 5.92001 23.825 5.92001 14.9963C5.92001 6.06503 6.62001 5.92503 14.005 5.91753V5.92003ZM20.91 7.75878C20.1763 7.75878 19.5813 8.35378 19.5813 9.08753C19.5813 9.82128 20.1763 10.4163 20.91 10.4163C21.6438 10.4163 22.2388 9.82128 22.2388 9.08753C22.2388 8.35378 21.6438 7.75878 20.91 7.75878ZM14.9975 9.31253C11.8563 9.31253 9.31001 11.86 9.31001 15.0013C9.31001 18.1425 11.8563 20.6888 14.9975 20.6888C18.1388 20.6888 20.6838 18.1425 20.6838 15.0013C20.6838 11.86 18.1388 9.31253 14.9975 9.31253ZM14.9975 11.3088C19.8788 11.3088 19.885 18.6938 14.9975 18.6938C10.1175 18.6938 10.11 11.3088 14.9975 11.3088Z" fill="white"/></g><defs><linearGradient id="paint0_linear" x1="1.93265" y1="28.084" x2="29.8145" y2="3.95259" gradientUnits="userSpaceOnUse"><stop stop-color="#FFDD55"/><stop offset="0.5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></linearGradient><clipPath id="clip0"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  mounted() { scroll(0, 0) }
}
</script>

<style scoped lang="scss">
.temp {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 5px;
  padding-bottom: 5px;

  width: 100%;
  min-height: 100px;

  border-radius: 8px;

  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    padding: 20px 40px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 480px) {
    padding: 14px 24px;
  }


  &__item {
    width: max-content;
    text-align: left;
    min-height: 80px;

    @media screen and (max-width: 800px) {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 50%;
      box-sizing: border-box;
    }
    @media screen and (max-width: 480px) {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      //box-sizing: border-box;
      min-height: auto;

      br { display: none }

    }

    > label {
      position: relative;

      display: block;
      margin-bottom: 12px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      letter-spacing: 0.05em;

      color: #0C334A;

      &:before {
        content: '';

        position: absolute;
        left: 0;
        bottom: -5px;

        width: 67px;
        height: 2px;

        border-radius: 2px;
        background-color: #0C334A;
      }

    }

    &-content {
      font-family: PT Sans Narrow, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.03em;

      color: #515151;

      @media screen and (max-width: 480px) { font-size: 15px; }

      > a {
        display: block;

        font-family: PT Sans Narrow, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;

        letter-spacing: 0.03em;
        text-transform: uppercase;

        color: #515151;

        @media screen and (max-width: 480px) { font-size: 15px; }
      }

    }

    &-socials {
      display: flex;
      padding-top: 8px;

      > a {
        margin-left: 7px;
        margin-right: 7px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }

    }

  }

}
</style>
