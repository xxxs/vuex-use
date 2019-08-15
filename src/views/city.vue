<template>
  <div class='container'>
   <div v-for="c in list">{{c.name}}</div>
  
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex";
export default {
  data() { 
    return {}
  },
  computed:{
    ...mapGetters(['list'])
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions(['getData'])
  }
 }
</script>
<style lang='scss' type='text/scss' scoped>
 
</style>