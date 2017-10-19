<template>
  <div class="dashboard">
    <app-add-car></app-add-car>
  </div>
</template>

<<script>
import store from '@/vuexstore'
import addCar from './AddCar.vue'

export default {
  components:{
    'app-add-car':addCar
  }
}
</script>

<style>

</style>
