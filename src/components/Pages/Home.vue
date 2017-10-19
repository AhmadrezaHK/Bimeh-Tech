<template>
  <div class="section_1">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
    <router-link to="/coins/bitcoin">Bitcoin</router-link>
  </div>
</template>

<script>
  import InputText from '@/components/Elements/Input_Text.vue'
  import Select from '@/components/Elements/Select.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {
    'app-input': InputText,
    'app-select': Select
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section_1{
    background: url(../../assets/img/dg.jpg) center fixed no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    height: 100vh;
  }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
