<template>
  <div class="hello">
    <h1>{{ selected_value }}</h1>
    <h2>{{ input_value }}</h2>
    <app-input input_label="Name" v-model="input_value" comp_id="0"></app-input>
    <app-select select_label="Select an item" :select_options="options" v-model="selected_value"></app-select>
  </div>
</template>

<script>
  import InputText from '@/components/Elements/Input_Text.vue'
  import Select from '@/components/Elements/Select.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      input_value: '',
      select_value:'',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      selected_value:''
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
