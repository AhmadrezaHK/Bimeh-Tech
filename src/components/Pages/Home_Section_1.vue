<template>
  <div class="section_1">
    <div class="section_1__content section_1__content--1">نام پروژه</div>
    <div class="section_1__content section_1__content--2">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس</div>
    <div>
      <a href="#section_4">
        <app-button class="section_1__content section_1__content--3" button_label="شروع کن"></app-button>
      </a>
    </div>
    <div tabindex="-1" class="modal fade" id="form-dialog" style="display: none;" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header pmd-modal-bordered">
            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
            <h2 class="pmd-card-title-text text-right">ورود</h2>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <app-input input_label="شماره تلفن" input_type="number" comp_id="0" key="0"></app-input>
              <app-input input_label="رمز عبور" input_type="password" comp_id="1" key="1"></app-input>
            </form>
          </div>
          <div class="pmd-modal-action">
            <app-button class="btn-modal" dismiss="modal" button_label="ورود"></app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Elements/Button.vue'
  import Input from '@/components/Elements/Input_text.vue'
  export default {
    components: {
      'app-button':Button,
      'app-input':Input
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
  .modal-dialog, .modal-content{
    background-color: rgba(0, 150, 136, 1);
  }
  .pmd-card-title-text.text-right{
    color: #fff;
  }
  .btn-modal{
    padding-right: 30px;
    padding-left: 30px;
  }
  .modal-header .pmd-modal-bordered{
    border: none;
  }
  @media screen and (max-width: 991px){
    .section_1__content--1{
      top:30%;
      -webkit-transform: translateY(-30%);
      -moz-transform: translateY(-30%);
      -ms-transform: translateY(-30%);
      -o-transform: translateY(-30%);
      transform: translateY(-30%);
      font-size: 40px;
    }
    .section_1__content--2{
      top:45%;
      -webkit-transform: translateY(-45%);
      -moz-transform: translateY(-45%);
      -ms-transform: translateY(-45%);
      -o-transform: translateY(-45%);
      transform: translateY(-45%);
      line-height: 2.2;
      font-size: 12px;
      left: 30%;
      -webkit-transform: translateX(-20%) !important;
      -moz-transform: translateX(-20%) !important;
      -ms-transform: translateX(-20%) !important;
      -o-transform: translateX(-20%) !important;
      transform: translateX(-20%) !important;
    }
  }
</style>
