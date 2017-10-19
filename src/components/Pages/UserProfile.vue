<template>
  <div class="userProfile">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <h1>وضعیت کاربر</h1>
          <div class="row lastUserStats">
            <div class="col-md-3 col-sm-6 lastUserStats__accelerate">{{lastAccelerate}}</div>
            <div class="col-md-3 col-sm-6 lastUserStats__distance">{{lastDistance}}</div>
            <div class="col-md-3 col-sm-6 lastUserStats__score">{{lastScore}}</div>
            <div class="col-md-3 col-sm-6 lastUserStats__oil">{{lastOil}}</div>
          </div>
        </div>
        <div class="row">
          <h2>آخرین سفر ها</h2>
          <div class="row lastTripeStats" v-for="(item, i) in lastTripe" :key="i">
            <div class="col-md-3 col-sm-6 lastTripeStats__accelerate">{{item.accelerate}}</div>
            <div class="col-md-3 col-sm-6 lastTripeStats__distance">{{item.distance}}</div>
            <div class="col-md-3 col-sm-6 lastTripeStats__score">{{item.score}}</div>
            <div class="col-md-3 col-sm-6 lastTripeStats__oil">{{item.oil}}</div>
          </div>
        </div>
      </div>
      <div class="col-md-5 map"></div>
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

</style>
