<template>
  <div class="form-group pmd-textfield pmd-textfield-floating-label">
    <label :for="comp_id" class="control-label my-input">
      {{input_label}}
    </label>
    <input :type="input_type" :id="comp_id" class="form-control" v-model="internalValue">
  </div>
</template>
<script>
  export default {
    data:function(){
      return {
        internalValue: ''
      }
    },
    props: ['input_label', 'value', 'comp_id','input_type'],
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
  .control-label.my-input{
    color: #fff !important;
  }
  @media (min-width: 768px){
    .form-horizontal .control-label.my-input {
      padding-top: 0 !important;
      margin-bottom: 0 !important;
      text-align: right !important;
    }
  }
</style>
