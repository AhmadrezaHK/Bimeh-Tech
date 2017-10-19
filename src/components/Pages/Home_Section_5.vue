<template>
  <div class="section_5" id="section_5">
    <div class="container">
      <h1>ارتباط با ما</h1>
      <p>
        اگر سوالی در این زمینه دارید، ما به شما پاسخ می دهیم.<br>
        اگر به چیزی  نیاز دارید، دره زمان با ما تماس بگیرید،به شما کمک خواهیم کرد.
      </p>
      <app-button class="contact-btn" button_label="پرسیدن سوال" button_style="outline"></app-button>
    </div>
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
  .section_5 {
    font-family: IRANSans, monospace;
    background-color: rgba(243, 243, 243, 1);
    padding: 70px 0;
  }
  .contact-btn{
    background-color: transparent;
    color: rgba(94, 94, 94, 1);
    border-color: rgba(94, 94, 94, 1);
    padding-right: 30px;
    padding-left: 30px;
  }
  .container h1{
    color: #444;
    margin-bottom: 30px;
  }
  .container p{
    color: rgba(94, 94, 94, 1);
    line-height: 2.2;
    direction: rtl;
    margin-bottom: 40px;
  }
</style>
