<template>
  <div class="section_1">
    <div class="section_1__content section_1__content--1">نام پروژه</div>
    <div class="section_1__content section_1__content--2">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس</div>
    <app-button class="section_1__content section_1__content--3" button_label="شروع کن"></app-button>
  </div>
</template>

<script>
  import Button from '@/components/Elements/Button.vue'
  export default {
    components: {
      'app-button':Button
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section_1{
    background: url(../../assets/img/dg.jpg) center fixed no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    position: relative;
    height: 100vh;
    font-family: IRANSans,monospace;
  }
  .section_1__content{
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%) !important;
    -moz-transform: translateX(-50%) !important;
    -ms-transform: translateX(-50%) !important;
    -o-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
    color: #fff;
  }
  .section_1__content--1{
    top:40%;
    -webkit-transform: translateY(-40%);
    -moz-transform: translateY(-40%);
    -ms-transform: translateY(-40%);
    -o-transform: translateY(-40%);
    transform: translateY(-40%);
    font-size: 50px;
  }
  .section_1__content--2{
    top:62%;
    -webkit-transform: translateY(-62%);
    -moz-transform: translateY(-62%);
    -ms-transform: translateY(-62%);
    -o-transform: translateY(-62%);
    transform: translateY(-62%);
    line-height: 2.2;
  }
  .section_1__content--3{
    top:80%;
    -webkit-transform: translateY(-80%);
    -moz-transform: translateY(-80%);
    -ms-transform: translateY(-80%);
    -o-transform: translateY(-80%);
    transform: translateY(-80%);
    color: #000;
    padding: 12px 50px;
    background-color: rgba(29, 233, 182, 1);
  }
  .section_1__content--3:active{
    background-color: rgba(29, 233, 182, 1);
  }
  .section_1__content--3:active:hover{
    background-color: rgba(29, 233, 182, 1);
  }
</style>
