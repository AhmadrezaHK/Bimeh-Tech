<template>
  <div>
    <app-navbar></app-navbar>
    <app-section_1></app-section_1>
    <app-section_2></app-section_2>
    <app-section_3></app-section_3>
    <app-section_4></app-section_4>
    <app-section_5></app-section_5>
  </div>
</template>

<script>
  import InputText from '@/components/Elements/Input_text.vue'
  import Select from '@/components/Elements/Select.vue'
  import Navbar from '@/components/Elements/Navbar.vue'
  import Section_1 from './Home_Section_1.vue'
  import Section_2 from './Section_2.vue'
  import Section_3 from './Section_3.vue'
  import Section_4 from './Section_4.vue'
  import Section_5 from './Home_Section_5.vue'

  export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {
    'app-input': InputText,
    'app-select': Select,
    'app-section_1':Section_1,
    'app-section_2':Section_2,
    'app-section_3':Section_3,
    'app-section_4':Section_4,
    'app-section_5':Section_5,
    'app-navbar': Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
