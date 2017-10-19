<template>
  <div class="section_4" id="section_4">
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
          <div v-if="state==0" class="col-md-4 form--1">
            <app-input input_label="نام شما چیست؟" v-model="register_data.fullname" key="0"></app-input>
          </div>
          <div v-if="state==1" class="col-md-4 form--2">
            <app-input input_label="تلفن همراه" input_type="number" key="1" v-model="register_data.phone_number"></app-input>
            <app-input input_label="رمز عبور مورد نظر" input_type="password" key="2" v-model="register_data.password"></app-input>
            <app-input input_label="تکرار رمز عبور" input_type="password" key="3" v-model="register_data.repeat_password"></app-input>
          </div>
          <div v-if="state==2" class="col-md-4 form--3">
            <app-input input_label="سن" input_type="number" key="6" v-model="register_data.age"></app-input>
            <app-select select_label="جنسیت" :select_options="sexSelectorOptions" key="4" v-model="register_data.sex"></app-select>
            <app-input input_label="آدرس" v-model="register_data.address" key="5"></app-input>
          </div>
          <div v-if="state==3" class="col-md-4 form--4">
            {{status_text}}
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
      <app-button v-if="state < 3 " class="btn-form" :button_label="continueButtonName" @click="continueClicked"></app-button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Elements/Button.vue'
  import Input from '@/components/Elements/Input_text.vue'
  import Select from '@/components/Elements/Select.vue'
  import axios from 'axios'

  const registerAPIPath = 'http://95.211.250.101/users/create';

  export default {
    data:function () {
      return {
        state:0,
        status_text:'در حال ارسال اطلاعات',
        continueButtonName:'ادامه',
        sexSelectorOptions:[{value:'Male', text:'مرد'}, {value:'Female', text:'زن'}],
        register_data: {
          fullname:'',
          phone_number:'',
          password:'',
          age:'',
          sex:'',
          address:'',
          repeat_password:''
        }
      }
    },
    methods:
      {
        continueClicked(){
          this.state++;
          if(this.state===2)
          {
            this.continueButtonName = 'ثبت'
          }

          if(this.state===3)
          {
//            let jsondata = JSON.stringify(this.register_data);
            axios.post(registerAPIPath, this.register_data).then((response) => {
              localStorage["token"] = response.data.user.token;
              this.status_text = 'اطلاعات با موفقیت ثبت شد';
            }).catch((err) => {
              this.status_text = 'ارسال اطلاعات با خطا روبرو شد';
              console.log(err)
            });
          }
        }
      },
    components:{
      'app-button':Button,
      'app-input':Input,
      'app-select':Select
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
