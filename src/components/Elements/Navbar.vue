<template>
  <!-- Basic nav menu which will remain fixed at the top -->
  <nav class="navbar navbar-fixed-top pmd-navbar pmd-z-depth">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header navbar-right">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
<!--
        <a href="#" class="navbar-brand navbar-brand-custome">Brand</a>
-->
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#"><app-button toggle_mode="modal" target="#form-dialog" class="btn-bimeh" button_label="ورود" button_style="outline"></app-button></a></li>
          <li><a href="#section_5">
            <app-button class="btn-bimeh btn-bimeh--borderNone" button_label="ارتباط با ما"></app-button>
          </a></li>
          <li><a href="#section_3">
            <app-button class="btn-bimeh btn-bimeh--borderNone" button_label="خدمات"></app-button>
          </a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    <div class="pmd-sidebar-overlay"></div>
  </nav>
</template>
<script>
  import Button from './Button.vue'

  export default {
    components:{
      'app-button':Button
    }
  }
</script>
<style>
  .navbar{
    font-family: IRANSans,monospace;
    margin-bottom: 0;
  }
  .pmd-z-depth {
    box-shadow: none;
  }
  .pmd-navbar .navbar-nav{
    padding: 20px 0;
  }
  @media (min-width: 768px){
    .pmd-navbar .navbar-nav>li>a {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none !important;
    background-color: transparent !important;
  }
  .btn-bimeh{
    background-color: transparent;
    border-color: rgba(29, 233, 182, 1) !important;
    color: #fff;
  }
  .btn-bimeh:active{
    background-color: transparent;
    color: #fff;
  }
  .btn-bimeh:active:hover{
    color: #fff;
    background-color: transparent;
  }
  .btn-bimeh:hover{
    background-color: transparent;
    color: #fff;
  }
  .btn-bimeh:focus{
    background-color: transparent;
    color: #fff;
  }
  .btn-bimeh--borderNone{
    border: none;
  }
  .icon-bar{
    background-color: #fff;
  }
</style>
