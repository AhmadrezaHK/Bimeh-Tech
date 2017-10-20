<template>
  <div class="dashboardBase">
    <div class="dash-navbar">
      <div class="container-fluid">
        <div class="right right--1">
          <button type="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="right right--2">
          <app-select select_label="خودرو"></app-select>
        </div>
        <div class="left left--1"></div>
        <div class="left left--2"></div>
        <div class="left left--3">نام و نام خانوادگی</div>
      </div>
    </div>
    <div class="dash-aside">
      <div class="container-fluid">
        <div class="row">
          <a href="">
            <div class="col-xs-12 aside-item aside-item--1"></div>
          </a>
        </div>
        <div class="row">
          <a href="">
            <div class="col-xs-12 aside-item aside-item--2"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Select from '@/components/Elements/Select.vue'

  export default {
    components:{
      'app-select':Select
    }
  }
</script>

<style>
  .dashboardBase{
    font-family: IRANSans,monospace;
  }
  .dash-navbar{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: rgba(0, 150, 136, 1);
    -webkit-box-shadow: 0 2px 6px #333;
    -moz-box-shadow: 0 2px 6px #333;
    box-shadow: 0 2px 6px #333;
  }
  .left{
    float: left;
    margin-right: 20px;
    margin-top: 15px;
  }
  .left--1{
    background: url("../../assets/img/notifications-button.png") no-repeat center;
    background-size: contain;
    height: 30px;
    width: 30px;
  }
  .left--2{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background:url("../../assets/img/user.png") no-repeat center;
    background-size: contain;
  }
  .left--3{
    color: #fff;
  }
  .right--2{
    width: 200px;
  }
  .right--2 .form-group.pmd-textfield {
    margin-bottom: 0;
  }
  .right--2 .pmd-textfield-floating-label label {
    margin-bottom: 0;
    font-size: 13px;
    line-height: 18px;
  }
  .right--1{
    width: 70px;
    margin: 0;
  }
  .right--1 button{
    position: relative;
    padding: 9px 10px;
    background: transparent none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .right--1 .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background-color: #fff;
  }
  .right--1 .icon-bar+.icon-bar {
    margin-top: 4px;
  }
  .right{
    float: right;
    margin-top: 15px;
    margin-left: 20px;
  }
  .right--2{
    margin-top: -5px;
  }
  .right--2 .pmd-textfield-floating-label.pmd-textfield-floating-label-completed label {
    transform: translateY(15px) !important;
    -ms-transform: translateY(15px) !important;
    -webkit-transform: translateY(15px) !important;
  }
  .dashboardBase .select-lable{
    color: #fff !important;
  }
  .dashboardBase .select-simple.form-control.pmd-select2{
    color: #333 !important;
  }
  .dashboardBase .select-simple.form-control.pmd-select2[selected="true"]{
    color: #fff !important;
  }
  .dashboardBase .pmd-textfield-focused {
    background-color: #FFF;
  }



  .dash-aside{
    position: fixed;
    z-index:-1;
    right: 0;
    top:0;
    padding-top: 80px;
    bottom: 0;
    width: 60px;
    background-color: rgba(242, 242, 242, 1);
    -webkit-box-shadow: 0 2px 6px #333;
    -moz-box-shadow: 0 2px 6px #333;
    box-shadow: 0 2px 6px #333;
  }
  .aside-item{
    width: 35px;
    height: 35px;
    margin-left: 12px;
    margin-bottom: 20px;
  }
  .aside-item--1{
    background: url("../../assets/img/dashboard_icon.png") no-repeat center;
    background-size: contain;
  }
  .aside-item--2{
    background: url("../../assets/img/leaderboard_icon.png") no-repeat center;
    background-size: contain;
  }
</style>
