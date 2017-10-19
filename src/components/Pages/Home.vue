<template>

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
