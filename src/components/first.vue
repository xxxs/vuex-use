<template>
  <div class="first-container">
    <div v-for="r in routerArr" @click="toPath(r)">{{r.name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerArr: [
      
        {
          name: "city",
          path: "city"
        },
        {
          name: "test",
          path: "test"
        }
      ]
    };
  },
  methods: {
    toPath(n) {
      this.$router.push(n);
    }
  }
};
</script>
<style lang='scss' type='text/scss' scoped>
.first-container {
  div {
    float: left;
    margin: 10px;
    padding: 4px 10px;
    background: #000;
    color: #ffffff;
    border-radius: 6px;
    font-size: 20px;
  }
}
</style>