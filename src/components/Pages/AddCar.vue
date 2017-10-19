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
  .addCar{
    font-family: IRANSans,monospace;
  }
  .addCar .form-group{
    text-align: right;
  }
  .addCar .control-label.my-input{
    color: #333 !important;
  }
  .addCar .form-control{
    color: #333;
  }
  @media (min-width: 768px){
    .addCar .form-horizontal .control-label.my-input {
      padding-top: 0 !important;
      margin-bottom: 0 !important;
      text-align: right !important;
    }
  }
  .addCar .pmd-textfield-focused{
    background-color: #333;
  }
  .addCar .select-lable{
    color: #333!important;
    padding-right: 25px;
  }
  .addCar .select-simple.form-control.pmd-select2{
    color: #333;
  }
  .addCar .select-simple.form-control.pmd-select2[selected="true"]{
    color: #333;
  }
</style>
