<template>
  <div class="section_2">
    <div class="container-fluid">
      <h1>بیمه های طرف قرارداد</h1>
      <div class="col-md-3 col-xs-1"></div>
      <div class="col-md-6 col-xs-10">
        <div class="col-md-4 col-xs-4 supt supt--1">
          <div></div>
        </div>
        <div class="col-md-4 col-xs-4 supt supt--2">
          <div></div>
        </div>
        <div class="col-md-4 col-xs-4 supt supt--3">
          <div></div>
        </div>
      </div>
      <div class="col-md-3 col-xs-1"></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .section_2{
    padding: 40px 0;
    font-family: IRANSans,monospace;
    color: #555;
  }
  .section_2 h1{
    margin-bottom: 40px;
  }
  .supt{
    padding: 0 30px;
  }
  .supt--1 div{
    background: url("../../assets/img/bime_iran.png") center  no-repeat;
    background-size: contain;
  }
  .supt--2 div{
    background: url("../../assets/img/arman.png") center no-repeat ;
    background-size: contain;
  }
  .supt--3 div{
    background: url("../../assets/img/mellat.png") center no-repeat ;
    background-size: contain;
  }
  .supt div{
    height: 100px;
  }
  @media screen and (max-width: 992px) {
    .supt{
      padding: 0;
    }
  }
</style>
