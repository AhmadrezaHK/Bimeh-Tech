<template>
  <div class="addCar">
    <div class="img"></div>
    <p>هیج خودرویی در پروفایل خود ندارید.</p>
    <app-button button_label="افزودن خودروی جدید"></app-button>
  </div>
</template>

<script>
  import Button from '@/components/Elements/Button.vue'

  export default {
    components:{
      'app-button':Button
    }
  }
</script>

<style scoped>
  .img{
    background: url("../../assets/img/car.png") no-repeat center;
    background-size: contain;
    height: 200px;
  }
</style>
