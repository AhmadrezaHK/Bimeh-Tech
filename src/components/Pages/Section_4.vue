<template>
  <div class="section_4">
    <div class="container">
      <div class="label-form">
        <span>
          برای شروع
        </span>
        <span>
مشخصات خود را در سیستم وارد کنید
        </span>
      </div>
      <div class="form">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <app-input input_label="نام شما چیست؟"></app-input>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
      <app-button class="btn-form" button_label="ادامه"></app-button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Elements/Button.vue'
  import Input from '@/components/Elements/Input_text.vue'

  export default {
    components:{
      'app-button':Button,
      'app-input':Input
    }
  }
</script>

<style scoped>
  .section_4{
    font-family: IRANSans,monospace;
    padding: 65px 0 55px;
    background-color: rgba(0, 150, 136, 1);
    color: #fff;
  }
  .form{
    margin-bottom: 40px;
  }
  .label-form{
    margin-bottom: 60px;
  }
  .label-form span:first-child{
    font-size: 40px;
  }
  .btn-form{
    color: rgba(0, 150, 136, 1);
  }
</style>
