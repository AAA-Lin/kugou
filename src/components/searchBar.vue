<template>
  <div id="searchBar">
    <mt-header title="搜索">
      <mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navs from "@/router/nav.js";
export default {
  data() {
    return {
      navs,
      selected: "newsong",
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less">
#searchBar {
  .mint-header {
    background: white;
    color: black;
    .mint-header-title {
      font-size: 0.8rem;
    }
  }
}
</style>