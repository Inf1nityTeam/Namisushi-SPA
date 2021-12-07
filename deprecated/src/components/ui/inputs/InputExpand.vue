<template>
  <div class="auth-card__form-item" :class="{'auth-card__form-item--novalid': !isValid}">
    <div class="icon">
      <slot/>
    </div>
    <input required
           type="text"
           :maxlength="maxlength"
           @input="updateData"
           @focus="$emit('focus')"
           ref="input">
    <span class="bar"></span>
    <label>{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'input-expand',
  model: { prop: 'data', event: 'input' },
  props: {
    placeholder: { type: String },
    data: { type: String },
    isValid: { type: Boolean, default: true },
    maxlength: { type: Number, default: 1024 }
  },
  mounted() {
    if (this.data) this.setData(this.data)
  },
  methods: {
    setData: function (data) {
      this.$refs.input.value = data
      this.$refs.input.selectionStart = data.length
      this.$emit('input', data)
    },
    updateData: function (e) { this.$emit('input', e.target.value) },
  }
}
</script>

<style scoped lang="scss">
@import 'deprecated/src../../assets/scss/variables';

.auth-card__form-item {
  position: relative;

  > .icon {
    position: absolute;
    top: 18px;
    left: 10px;
  }

  &--novalid {
    .icon {
      svg path {
        fill: $bright-red!important;
      }
    }

    .bar:before, .bar:after {
      background: $bright-red !important;
    }

    label {
      color: $bright-red !important;
    }

    input {
      border-bottom: 1px solid $bright-red !important;
    }
  }

  input {
    display: block;

    padding: 16px 40px 4px 40px;
    box-sizing: border-box;

    border: none;
    border-bottom: 1px solid #C4C4C4;

    width: 100%;

    font-family: PT Sans Narrow, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.03em;

    color: $black;

    @media screen and (max-width: 500px) {
      font-size: 16px;
      padding-bottom: 10px;
    }

    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    left: 40px;
    top: 18px;

    pointer-events: none;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.03em;

    color: #4C4C4C;

    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;

    @media screen and (max-width: 420px) {
      font-size: 14px;
    }
  }

  input:focus ~ label {
    top: -15px;
    font-size: 14px;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before, .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #F15A24;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 50%;
  }

  .bar:after {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    right: 50%;
  }

  input:focus ~ .bar:before, input:focus ~ .bar:after {
    width: 50%;
  }

  input:focus ~ label, input:valid ~ label {
    top: -10px;
    font-size: 14px;
  }
}

.auth-card__input--eye {
  position: absolute;
  right: 0;
  bottom: 10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
}
</style>
