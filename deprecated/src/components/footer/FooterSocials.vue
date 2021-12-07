<template>
  <div class="app-footer__socials">

    <div>
      <h6 v-if="windowWidth > 800">Социальные сети</h6>
      <div class="list">
        <a href="https://vk.com/namisushidn" target="_blank">
          <img src="@/assets/images/icons/vk2.svg" alt="">
        </a>
        <a href="https://instagram.com/namisushidn" target="_blank">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2327 0H6.76726C3.03573 0 0 3.03573 0 6.76726V18.2329C0 21.9642 3.03573 25 6.76726 25H18.2329C21.9642 25 25 21.9642 25 18.2329V6.76726C25 3.03573 21.9642 0 18.2327 0V0ZM12.5 19.3357C8.73068 19.3357 5.66424 16.2693 5.66424 12.5C5.66424 8.73068 8.73068 5.66424 12.5 5.66424C16.2693 5.66424 19.3357 8.73068 19.3357 12.5C19.3357 16.2693 16.2693 19.3357 12.5 19.3357ZM19.4992 7.27633C18.3853 7.27633 17.4793 6.37034 17.4793 5.25645C17.4793 4.14256 18.3853 3.23638 19.4992 3.23638C20.6131 3.23638 21.5192 4.14256 21.5192 5.25645C21.5192 6.37034 20.6131 7.27633 19.4992 7.27633Z" fill="#FFFFFF"/><path d="M12.5 7.12988C9.53905 7.12988 7.12988 9.53886 7.12988 12.5C7.12988 15.461 9.53905 17.8701 12.5 17.8701C15.4612 17.8701 17.8701 15.461 17.8701 12.5C17.8701 9.53886 15.4612 7.12988 12.5 7.12988Z" fill="#FFFFFF"/><path d="M19.4991 4.70215C19.1935 4.70215 18.9448 4.95087 18.9448 5.25642C18.9448 5.56198 19.1935 5.8107 19.4991 5.8107C19.8048 5.8107 20.0536 5.56217 20.0536 5.25642C20.0536 4.95068 19.8048 4.70215 19.4991 4.70215Z" fill="#FFFFFF"/></svg>
        </a>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'footer-logo',
  computed: {
    windowWidth () { return this.$store.state.windowWidth }
  }
}
</script>

<style scoped lang="scss">
.app-footer__socials {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  height: 145px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1800px) { height: 110px; }
  @media screen and (max-width: 1500px) { height: 108px; }
  @media screen and (max-width: 1100px) { height: max-content; }
  @media screen and (max-width: 800px) {
    position: absolute;
    right: 0;
    padding-right: 0;
  }

  h6 {
    margin: 0 0 10px 0;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
    @media screen and (max-width: 1800px) {
      font-size: 18px;
      line-height: 20px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 16px;
      line-height: 18px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 4px;
    }
  }

  .list {
    display: flex;
    width: 100%;
    justify-content: center;
    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  a {
    margin-right: 4px;
    margin-left: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    cursor: pointer;

    > img, > svg {
      object-fit: contain;
      width: 30px;

      @media screen and (max-width: 1100px) {
        width: 20px;
      }
    }

  }

}
</style>
