<template>
  <button :data-dismiss="dismiss" :data-toggle="toggle_mode" :data-target="target" type="button" @click="clicked" :class="buttonClasses"> {{button_label}} </button>
</template>

<script>
export default {
  props: ['button_label', 'button_style', 'comp_id','toggle_mode','target','dismiss'],
  data: function()
  {
      return {
          outline: false
      }
  },
  created(){

      this.outline = this.button_style === 'outline';
  },
  methods:{
      clicked()
      {
          this.$emit('click');
      }
  },
    computed:{
        buttonClasses: function()
        {
            return {
                'btn pmd-btn-outline pmd-ripple-effect btn-default': this.outline,
                'btn pmd-ripple-effect btn-default': !this.outline
            }
        }
    },
}
</script>

<style scoped>
button{
border-radius: 999em;
}
</style>



