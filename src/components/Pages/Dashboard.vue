<template>
  <div class="dashboard">
    <!--<app-add-car></app-add-car>-->
    <!--<app-before-add-car></app-before-add-car>-->
  </div>
</template>

<<script>
import store from '@/vuexstore'
import addCar from './AddCar.vue'
import beforeAddCar from './BeforeAddCar.vue'

export default {
  components:{
    'app-add-car':addCar,
    'app-before-add-car':beforeAddCar
  }
}
</script>

<style>

</style>
