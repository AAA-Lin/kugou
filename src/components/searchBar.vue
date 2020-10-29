<template>
  <div id="searchBar">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import Vue from "vue";
import { Header,Button } from 'mint-ui';
Vue.component(Header.name, Header); 
Vue.component(Button.name, Button); 
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
    background:white;
    color: black;
    .mint-header-title{
        font-size: 0.8rem;
    }
  }
}
</style>