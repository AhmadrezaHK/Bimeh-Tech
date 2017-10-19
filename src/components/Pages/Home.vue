<template>
<div>
  <app-button button_label="Butt" button_style="outline"></app-button>
</div>
</template>

<script>
import InputText from '@/components/Elements/Input_Text.vue'
import Select from '@/components/Elements/Select.vue'
import Button from '@/components/Elements/Button.vue'


export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
    components:{
    'app-input': InputText,
    'app-select': Select,
    'app-button': Button
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
