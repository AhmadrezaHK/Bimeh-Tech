<template>
  <div class="userProfile">
    <div class="col-sm-12">
      <div class="col-md-5 map">
        <h2>مسیر طی شده</h2>
        <div class="col-sm-12 map__content"></div>
      </div>
      <div class="col-md-7">
        <div class="col-sm-12">
          <h2 class="text-right">وضعیت کاربر</h2>
          <div class="col-sm-12 lastUserStats">
            <div class="col-md-3 col-sm-6 lastUserStats__accelerate">
              <div class="lastUserStats__label">حداکثر شتاب</div>
              <div class="lastUserStats__accelerate__img"></div>
              <div><span class="userProfile__unit">m/s<sup>2</sup></span>{{parseInt(lastAccelerate).toFixed(2)}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__distance">
              <div class="lastUserStats__label">مجموع مسافت طی شده</div>
              <div class="lastUserStats__distance__img"></div>
              <div><span class="userProfile__unit">کیلومتر</span>{{parseInt(lastDistance).toFixed(2)}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__score">
              <div class="lastUserStats__label">امتیاز کاربر</div>
              <div class="lastUserStats__score__img"></div>
              <div><span class="userProfile__unit">امتیاز</span>{{parseInt(lastScore).toFixed(2)}}</div>
            </div>
            <div class="col-md-3 col-sm-6 lastUserStats__oil">
              <div class="lastUserStats__label">میانگین مصرف سوخت</div>
              <div class="lastUserStats__oil__img"></div>
              <div><span class="userProfile__unit">لیتر/100کیلومتر</span>{{parseInt(lastOil).toFixed(2)}}</div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <h2 class="text-right">آخرین سفر ها</h2>
          <div class="col-xs-12 lastTripeStats" v-for="(item, i) in lastTripe" :key="i">
            <div class="col-md-3 col-xs-6 lastTripeStats__accelerate">
              <div class="img"></div>
              <div class="unit">
                <span class="userProfile__unit">m/s<sup>2</sup></span>{{item.accel.toFixed(2)}}
              </div>
            </div>
            <div class="col-md-3 col-xs-6 lastTripeStats__oil">
              <div class="img"></div>
              <div class="unit">
                <span class="userProfile__unit">لیتر/100کیلومتر</span>{{item.oil.toFixed(2)}}
              </div>
            </div>
            <div class="col-md-3 col-xs-6 lastTripeStats__score">
              <div class="img"></div>
              <div class="unit">
                <span class="userProfile__unit">امتیاز</span>{{item.score.toFixed(2)}}
              </div>
            </div>
            <div class="col-md-3 col-xs-6 lastTripeStats__distance">
              <div class="img"></div>
              <div class="unit">
                <span class="userProfile__unit">کیلومتر</span>{{item.distance.toFixed(2)}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-12 chart">
        <h2 class="text-right">نمودار سرعت خودرو</h2>
        <div class="col-sm-12 chart__content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  let baseLink = 'http://95.211.250.101/users/';

  export default {
    data:function () {
      return{

        lastAccelerate:'',
        lastDistance:'',
        lastScore:'',
        lastOil:'',

        lastTripe:[],

      }
    },
    components:{
    },
    mounted:function () {

        axios({
          method:'GET',
          url: baseLink + "getavgaxel",
          headers:{
            'Content-Type':"application/json",
            "TOKEN":localStorage["token"]
          }
        }).then(response =>{
            this.lastAccelerate = response.data.avg;
          }
        );

        axios({
          method:'GET',
          url: baseLink + "getdistance",
          headers:{
            'Content-Type':"application/json",
            "TOKEN":localStorage["token"]
          }
        }).then(response =>{
            this.lastDistance = response.data.distance;
          }
        );

        axios({
          method:'GET',
          url: baseLink + "getscore",
          headers:{
            'Content-Type':"application/json",
            "TOKEN":localStorage["token"]
          }
        }).then(response =>{
            this.lastScore = response.data.score;
          }
        );

        axios({
          method:'GET',
          url: baseLink + "getmaxoil",
          headers:{
            'Content-Type':"application/json",
            "TOKEN":localStorage["token"]
          }
        }).then(response =>{
            this.lastOil = response.data.maxOil;
          }
        );

        axios({
          method:'GET',
          url: "http://95.211.250.101/trips/latest",
          headers:{
            'Content-Type':"application/json",
            "TOKEN":localStorage["token"]
          }
        }).then(response =>{
            this.lastTripe = response.data.trips;
          }
        );
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
    padding: 15px 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px #999;
    -moz-box-shadow: 0 1px 6px #999;
    box-shadow: 0 1px 6px #999;
  }
  .lastTripeStats .img{
    height: 30px;
    width: 30px;
    margin-bottom: 15px;
  }
  .lastTripeStats > div{
    text-align: center;
    text-align: -webkit-center;
  }
  .lastTripeStats__accelerate .img{
    background: url("../../assets/img/urgency-bl.png") no-repeat center;
    background-size: contain;
  }
  .lastTripeStats__distance .img{
background: url("../../assets/img/distance-bl.png") no-repeat center;
    background-size: contain;
  }
  .lastTripeStats__score .img{
background: url("../../assets/img/customer-bl.png") no-repeat center;
    background-size: contain;
  }
  .lastTripeStats__oil .img{
background: url("../../assets/img/shape-bl.png") no-repeat center;
    background-size: contain;
  }
  .map__content{
    height: 400px;
    border: 3px solid #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px #999;
    -moz-box-shadow: 0 1px 6px #999;
    box-shadow: 0 1px 6px #999;
  }
  .chart__content{
    height: 300px;
    border: 3px solid #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px #999;
    -moz-box-shadow: 0 1px 6px #999;
    box-shadow: 0 1px 6px #999;
    margin-bottom: 30px;
  }
</style>
