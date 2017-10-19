<template>
  <div class="addCar">
    <h1>افزودن خودروی جدید</h1>
    <div>
      <label>نوع خودرو</label>
      <app-select select_label="نام تجاری خودروی شما"></app-select>
      <app-select select_label="مدل خودروی شما"></app-select>
      <app-input input_label="پلاک خودرو"></app-input>
      <app-input input_label="سال ساخت"></app-input>
      <app-input input_label="ارزش خودرو(تومان)"></app-input>
      <app-input input_label="ارزش قطعات غیر فابریک"></app-input>
      <app-button button_label="افزودن"></app-button>
    </div>
  </div>
</template>

<<script>
  import store from '@/vuexstore'
  import Button from '@/components/Elements/Button.vue'
  import Input from '@/components/Elements/Input_text.vue'
  import Select from '@/components/Elements/Select.vue'

  export default {
    components:{
      'app-button':Button,
      'app-input':Input,
      'app-select':Select
    }
  }
</script>

<style>

</style>
