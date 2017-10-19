<template>
  <div class="form-group pmd-textfield pmd-textfield-floating-label">
    <label :for="comp_id" class="control-label">
      {{input_label}}
    </label>
    <input :id="comp_id" class="form-control" v-model="internalValue">
  </div>
</template>
<script>
  export default {
    data:function(){
      return {
        internalValue: ''
      }
    },
    props: ['input_label', 'value', 'comp_id'],
    watch: {
      'internalValue': function(){
        this.$emit('input', this.internalValue)
      }
    }
  }
</script>
<style>
  .form-group{
    text-align: right;
  }
  .control-label{
    color: #fff !important;
  }
</style>
