<template>
  <div class="dashboard">
    <!--<app-add-car></app-add-car>-->
    <!--<app-before-add-car></app-before-add-car>-->
    <!--<app-user-profile></app-user-profile>-->
    <app-dash-base></app-dash-base>
  </div>
</template>

<script>
import store from '@/vuexstore'
import addCar from './AddCar.vue'
import beforeAddCar from './BeforeAddCar.vue'
import UserpProfile from './UserProfile.vue'
import DashBase from './DashboardBase.vue'

export default {
  components:{
    'app-add-car':addCar,
    'app-before-add-car':beforeAddCar,
    'app-user-profile':UserpProfile,
    'app-dash-base': DashBase
  }
}
</script>

<style>

</style>
