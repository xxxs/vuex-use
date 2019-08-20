<template>
  <div class="container">
    <div>{{num}}</div>
    <hr />
    <div>{{count}}</div>
    <hr />
    <button @click="addNum()">++++++</button>
    <hr>
     <div v-for="t in datas">
       姓名:{{t.name}}  *****   年龄: {{t.age}}
     </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      obj: [
        {
          name: "大王",
          age: 99
        },
        {
          name: "小钻风",
          age: 23
        }
      ]
    };
  },
  computed: {
    // 两种获取数据的方式
    // 1. 辅助函数获取
    ...mapGetters(["num",'datas']),

    //2. 属性获取
    count() {
      return this.$store.state.aaa;
    }
  },
  created() {
    this.setData(this.obj)
  },
  methods: {
    ...mapActions(["addNum",'setData'])
  }
};
</script>
<style lang='scss' type='text/scss' scoped>
</style>