<template>
  <div class="userProfile">
    <div class="col-sm-12">
      <div class="col-md-5 map">asd</div>
      <div class="col-md-7">
        <div class="col-sm-12">
          <h2 class="text-right">وضعیت کاربر</h2>
          <div class="col-sm-12 lastUserStats">
            <div class="col-md-3 col-sm-6 lastUserStats__accelerate">
              <div class="lastUserStats__label">حداکثر شتاب</div>
              <div class="lastUserStats__accelerate__img"></div>
              <div><span class="userProfile__unit">m/s<sup>2</sup></span>{{lastAccelerate}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__distance">
              <div class="lastUserStats__label">مجموع مسافت طی شده</div>
              <div class="lastUserStats__distance__img"></div>
              <div><span class="userProfile__unit">کیلومتر</span>{{lastDistance}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__score">
              <div class="lastUserStats__label">امتیاز کاربر</div>
              <div class="lastUserStats__score__img"></div>
              <div><span class="userProfile__unit">امتیاز</span>{{lastScore}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__oil">
              <div class="lastUserStats__label">میانگین مصرف سوخت</div>
              <div class="lastUserStats__oil__img"></div>
              <div><span class="userProfile__unit">لیتر/100کیلومتر</span>{{lastOil}}</div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <h2 class="text-right">آخرین سفر ها</h2>
          <div class="col-sm-12 lastTripeStats" v-for="(item, i) in lastTripe" :key="i">
            <div class="col-md-3 col-sm-6 lastTripeStats__accelerate">
              <div class="lastTripeStats__accelerate__img"></div>
              <div class="lastTripeStats__accelerate__unite">
                <span class="userProfile__unit">m/s<sup>2</sup></span>{{item.accelerate}}
              </div>
            </div>
            <div class="col-md-3 col-sm-6 lastTripeStats__oil">
              <div class="lastTripeStats__oil__img"></div>
              <div class="__unite">
                <span class="userProfile__unit">لیتر/100کیلومتر</span>{{item.oil}}
              </div>
            </div>
            <div class="col-md-3 col-sm-6 lastTripeStats__score">
              <div class="lastTripeStats__score__img"></div>
              <div class="__unite">
                <span class="userProfile__unit">امتیاز</span>{{item.score}}
              </div>
            </div>
            <div class="col-md-3 col-sm-6 lastTripeStats__distance">
              <div class="lastTripeStats__distance__img"></div>
              <div class="__unite">
                <span class="userProfile__unit">کیلومتر</span>{{item.distance}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  let token = '';

  export default {
    data:function () {
      return{

        lastAccelerate:'',
        lastDistance:'',
        lastScore:'',
        lastOil:'',

        lastTripe:[
          {
            accelerate:'',
            distance:'',
            score:'',
            oil:''
          }
        ]
      }
    },
    components:{
    },
    mounted:function () {
      axios({
        method:'GET',
        url:'http://95.211.250.101/users/getmaxdistance',
        headers:{
          'Content-Type':"application/json",
          "TOKEN":localStorage["token"]
        }
      }).then(response =>{
        console.log(response);
        }
      )
    }
  }
</script>

<style scoped>
  .userProfile{
    font-family: IRANSans,monospace;
    margin-top: 70px;
    margin-right: 70px;
  }
  .userProfile h2{
    margin-bottom: 30px;
  }
  .lastUserStats{
    background-color: #fff;
    padding: 20px 15px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px #999;
    -moz-box-shadow: 0 1px 6px #999;
    box-shadow: 0 1px 6px #999;
  }
  .lastUserStats__label{
    font-size: 10px;
  }
  .userProfile__unit{
    font-size: 12px;
  }
  .lastUserStats__accelerate__img{
     background: url("../../assets/img/tools-and-utensils.png") no-repeat center;
    background-size: contain;
    height: 60px;
  }
  .lastUserStats__distance__img{
    background: url("../../assets/img/distance.png") no-repeat center;
    background-size: contain;
    height: 60px;
  }
  .lastUserStats__score__img{
    background: url("../../assets/img/customer.png") no-repeat center;
    background-size: contain;
    height: 60px;
  }
  .lastUserStats__oil__img{
    background: url("../../assets/img/gas-station.png") no-repeat center;
    background-size: contain;
    height: 60px;
  }
  .lastUserStats__accelerate div{
    margin-bottom: 20px;
  }
  .lastUserStats__distance div{
    margin-bottom: 20px;
  }
  .lastUserStats__score div{
    margin-bottom: 20px;
  }
  .lastUserStats__oil div{
    margin-bottom: 20px;
  }
  .lastTripeStats{
    background-color: #fff;
    padding: 20px 15px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px #999;
    -moz-box-shadow: 0 1px 6px #999;
    box-shadow: 0 1px 6px #999;
  }
</style>
