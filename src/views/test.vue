<template>
  <div class="container">
    <div>{{num}}</div>
    <hr />
    <div>{{count}}</div>
    <hr />
    <button @click="addNum()">++++++</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // 两种获取数据的方式
    // 1. 辅助函数获取
    ...mapGetters(["num"]),

    //2. 属性获取
    count() {
      return this.$store.state.aaa;
    }
  },
  created() {},
  methods: {
    ...mapActions(["addNum"])
  }
};
</script>
<style lang='scss' type='text/scss' scoped>
</style>