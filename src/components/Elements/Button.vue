<template>
  <button type="button" @click="clicked" :class="buttonClasses"> {{button_label}} </button>
</template>

<script>
export default {
  props: ['button_label', 'button_style'],
  data: function()
  {
      return {
          outline: false
      }
  },
  created(){
      this.outline = false;
      if(this.button_style === 'outline')
      {
          this.outline = true;
      }
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



