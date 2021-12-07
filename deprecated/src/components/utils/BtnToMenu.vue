<template>
  <div class="btn-to-menu">
    <div class="circle">
      <img src="@/assets/images/icons/arrow-down.svg" alt="">
    </div>
    <div class="text">日本のメニュー</div>
  </div>
</template>

<script>
export default {
  name: 'btn-to-menu',
}
</script>

<style scoped lang="scss">
.btn-to-menu {
  width: 300px;
  display: flex;
  cursor: pointer;
  z-index: 9;

  @media screen and (max-width: 768px) {
    width: 50px;
  }

  > .circle {
    width: 45px;
    height: 45px;

    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: 9px 5px 37px rgba(0, 0, 0, 0.63);

    display: flex;
    justify-content: center;
    align-items: center;

    > i {
      font-size: 20px;
      font-weight: 800;
    }

  }

  > .text {
    padding-left: 20px;

    font-family: Neucha, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;

    color: #FFFFFF;

    @media screen and (max-width: 768px) {
      display: none;
    }

  }

}
</style>
