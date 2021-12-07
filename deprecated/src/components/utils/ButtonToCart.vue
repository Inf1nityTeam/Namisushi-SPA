<template>
  <div class="btn">
    <span>В корзину</span>
  </div>
</template>

<script>
export default {
  name: 'button-to-cart',
}
</script>

<style scoped lang="scss">
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;

    background: #312525;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
    border-radius: 0px;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0);
      background: #312c2c;
    }

    > span {
      display: block;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;

      color: #FFFFFF;
    }

  }
</style>
