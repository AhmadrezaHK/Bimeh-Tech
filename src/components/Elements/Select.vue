<template>
  <div class="form-group pmd-textfield pmd-textfield-floating-label">
    <label :for="comp_id" class="select-lable">{{select_label}}</label>
    <select :id="comp_id" v-model="internalValue" class="select-simple form-control pmd-select2">
      <option v-for="(option, i) in select_options" :value="option.value" :id="i" :key="i">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        internalValue: ''
      }
    },
    props:['select_label', 'select_options', 'value', 'comp_id'],
    watch: {
      'internalValue': function(){
        this.$emit('input', this.internalValue)
      }
    }
  }
</script>
<style scoped>
  .select-lable{
    color: #fff;
  }
  .select-simple.form-control.pmd-select2{
    color: #333;
  }
  .select-simple.form-control.pmd-select2[selected="true"]{
    color: #fff;
  }
</style>
